import os
import sys
import signal
import time
import traceback
import ctypes
import platform
import logging

import avalon
from avalon import style
from avalon.tvpaint.communication_server import CommunicatorWrapper
from avalon import tvpaint, api
from avalon.vendor.Qt import QtWidgets, QtCore, QtGui

log = logging.getLogger(__name__)


def safe_excepthook(*args):
    traceback.print_exception(*args)


class MainThreadChecker(QtCore.QThread):
    to_execute = QtCore.Signal(object)

    def __init__(self, communicator):
        super(MainThreadChecker, self).__init__()
        self.communicator = communicator
        self.is_running = False

    def run(self):
        self.is_running = True
        while self.is_running:
            item = self.communicator.main_thread_listen()
            if item:
                self.to_execute.emit(item)
            else:
                time.sleep(0.2)


def process_in_main_thread(main_thread_item):
    """Execution of `MainThreadItem`."""
    main_thread_item.execute()


def get_icon_path():
    """Path to avalon icon image.

    Returns:
        str: Path to avalon icon file. Returns None if file was not found.
    """
    avalon_repo = os.path.dirname(
        os.path.dirname(os.path.abspath(avalon.__file__))
    )
    full_path = os.path.join(
        avalon_repo, "res", "icons", "png", "avalon-logo-128.png"
    )
    if os.path.exists(full_path):
        return full_path
    return None


def main(launch_args):
    # Be sure server won't crash at any moment but just print traceback
    sys.excepthook = safe_excepthook

    # Create QtApplication for tools
    # - QApplicaiton is also main thread/event loop of the server
    qt_app = QtWidgets.QApplication([])

    # Execute pipeline installation
    api.install(tvpaint)

    # Create Communicator object and trigger launch
    # - this must be done before anything is processed
    communicator = CommunicatorWrapper.create_communicator(qt_app)
    communicator.launch(launch_args)

    # Start thread to check callbacks from websocket server to be done
    main_thread_executor = MainThreadChecker(communicator)
    main_thread_executor.to_execute.connect(process_in_main_thread)
    main_thread_executor.start()

    # Register terminal signal handler
    def signal_handler(*_args):
        print("You pressed Ctrl+C. Process ended.")
        communicator.stop()

    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

    qt_app.setQuitOnLastWindowClosed(False)
    qt_app.setStyleSheet(style.load_stylesheet())

    # Load avalon icon
    icon_path = get_icon_path()
    if icon_path:
        icon = QtGui.QIcon(icon_path)
        qt_app.setWindowIcon(icon)

    # Set application name to be able show application icon in task bar
    if platform.system().lower() == "windows":
        ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID(
            u"WebsocketServer"
        )

    # Run Qt application event processing
    sys.exit(qt_app.exec_())


if __name__ == "__main__":
    launch_args = list(sys.argv)
    if os.path.abspath(__file__) == os.path.normpath(launch_args[0]):
        # Pop path to script
        launch_args.pop(0)
    main(launch_args)
