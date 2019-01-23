from ....vendor.Qt import QtWidgets, QtCore
from ..models import ProjectsModel


class ProjectsWidget(QtWidgets.QWidget):
    """Asset loader interface"""

    def __init__(self, parent=None):
        super(ProjectsWidget, self).__init__(parent)
        self.parent = parent

        init_project = True
        if parent.current_project is None:
            init_project = False
        # Enable minimize and maximize for app
        self.setWindowFlags(QtCore.Qt.Window)
        self.setFocusPolicy(QtCore.Qt.StrongFocus)

        # projects
        project_widget = QtWidgets.QWidget()
        project_widget.setContentsMargins(0, 0, 0, 0)

        label = QtWidgets.QLabel("Projects")
        label.setFixedHeight(28)

        project_model = ProjectsModel(parent=self)

        project_view = QtWidgets.QTreeView()
        project_view.setIndentation(0)
        project_view.setModel(project_model)

        project_layout = QtWidgets.QVBoxLayout(project_widget)
        project_layout.addWidget(label)
        project_layout.addWidget(project_view)

        layout = QtWidgets.QVBoxLayout(self)
        layout.addWidget(project_view)

        selection = project_view.selectionModel()
        selection.selectionChanged.connect(self.on_project_choose)

        self.chosen_one = None
        self.init_project = init_project
        self.project_model = project_model
        self.project_view = project_view

        self.setWindowTitle("Choose project")

        # Defaults
        self.resize(280, 400)

    @property
    def db(self):
        return self.parent.db

    def on_project_choose(self):
        selection = self.project_view.selectionModel()
        selected_rows = selection.selectedRows()
        rows = []
        for row in selected_rows:
            rows.append(row.data(self.project_model.ObjectIdRole))
        # Just in case...
        if len(rows) == 1:
            project_name = rows[0]['name']
            self.chosen_one = project_name
            self.parent.signal_project_changed.emit(project_name)

        self.close()

    def closeEvent(self, event):
        if (
            self.parent.current_project is None and
            self.chosen_one is None
        ):
            self.parent.close()
