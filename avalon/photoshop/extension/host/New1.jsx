#include "c:/Users/petrk/PycharmProjects/Pype2/pype-setup/repos/avalon-core/avalon/photoshop/extension/host/json.js";

var LogFactory=function(file,write,store,level,defaultStatus,continuing){if(file&&(file.constructor===String||file.constructor===File)){file={file:file};}else if(!file)file={file:{}};write=(file.write!==undefined)?file.write:write;if(write===undefined){write=true;}store=(file.store!==undefined)?file.store||false:store||false;level=(file.level!==undefined)?file.level:level;defaultStatus=(file.defaultStatus!==undefined)?file.defaultStatus:defaultStatus;if(defaultStatus===undefined){defaultStatus="LOG";}continuing=(file.continuing!==undefined)?file.continuing:continuing||false;file=file.file||{};var stack,times,logTime,logPoint,icons,statuses,LOG_LEVEL,LOG_STATUS;stack=[];times=[];logTime=new Date();logPoint="Log Factory Start";icons={"1":"\ud83d\udd50","130":"\ud83d\udd5c","2":"\ud83d\udd51","230":"\ud83d\udd5d","3":"\ud83d\udd52","330":"\ud83d\udd5e","4":"\ud83d\udd53","430":"\ud83d\udd5f","5":"\ud83d\udd54","530":"\ud83d\udd60","6":"\ud83d\udd55","630":"\ud83d\udd61","7":"\ud83d\udd56","730":"\ud83d\udd62","8":"\ud83d\udd57","830":"\ud83d\udd63","9":"\ud83d\udd58","930":"\ud83d\udd64","10":"\ud83d\udd59","1030":"\ud83d\udd65","11":"\ud83d\udd5a","1130":"\ud83d\udd66","12":"\ud83d\udd5b","1230":"\ud83d\udd67","AIRPLANE":"\ud83d\udee9","ALARM":"\u23f0","AMBULANCE":"\ud83d\ude91","ANCHOR":"\u2693","ANGRY":"\ud83d\ude20","ANGUISHED":"\ud83d\ude27","ANT":"\ud83d\udc1c","ANTENNA":"\ud83d\udce1","APPLE":"\ud83c\udf4f","APPLE2":"\ud83c\udf4e","ATM":"\ud83c\udfe7","ATOM":"\u269b","BABYBOTTLE":"\ud83c\udf7c","BAD:":"\ud83d\udc4e","BANANA":"\ud83c\udf4c","BANDAGE":"\ud83e\udd15","BANK":"\ud83c\udfe6","BATTERY":"\ud83d\udd0b","BED":"\ud83d\udecf","BEE":"\ud83d\udc1d","BEER":"\ud83c\udf7a","BELL":"\ud83d\udd14","BELLOFF":"\ud83d\udd15","BIRD":"\ud83d\udc26","BLACKFLAG":"\ud83c\udff4","BLUSH":"\ud83d\ude0a","BOMB":"\ud83d\udca3","BOOK":"\ud83d\udcd5","BOOKMARK":"\ud83d\udd16","BOOKS":"\ud83d\udcda","BOW":"\ud83c\udff9","BOWLING":"\ud83c\udfb3","BRIEFCASE":"\ud83d\udcbc","BROKEN":"\ud83d\udc94","BUG":"\ud83d\udc1b","BUILDING":"\ud83c\udfdb","BUILDINGS":"\ud83c\udfd8","BULB":"\ud83d\udca1","BUS":"\ud83d\ude8c","CACTUS":"\ud83c\udf35","CALENDAR":"\ud83d\udcc5","CAMEL":"\ud83d\udc2a","CAMERA":"\ud83d\udcf7","CANDLE":"\ud83d\udd6f","CAR":"\ud83d\ude98","CAROUSEL":"\ud83c\udfa0","CASTLE":"\ud83c\udff0","CATEYES":"\ud83d\ude3b","CATJOY":"\ud83d\ude39","CATMOUTH":"\ud83d\ude3a","CATSMILE":"\ud83d\ude3c","CD":"\ud83d\udcbf","CHECK":"\u2714","CHEQFLAG":"\ud83c\udfc1","CHICK":"\ud83d\udc25","CHICKEN":"\ud83d\udc14","CHICKHEAD":"\ud83d\udc24","CIRCLEBLACK":"\u26ab","CIRCLEBLUE":"\ud83d\udd35","CIRCLERED":"\ud83d\udd34","CIRCLEWHITE":"\u26aa","CIRCUS":"\ud83c\udfaa","CLAPPER":"\ud83c\udfac","CLAPPING":"\ud83d\udc4f","CLIP":"\ud83d\udcce","CLIPBOARD":"\ud83d\udccb","CLOUD":"\ud83c\udf28","CLOVER":"\ud83c\udf40","CLOWN":"\ud83e\udd21","COLDSWEAT":"\ud83d\ude13","COLDSWEAT2":"\ud83d\ude30","COMPRESS":"\ud83d\udddc","CONFOUNDED":"\ud83d\ude16","CONFUSED":"\ud83d\ude15","CONSTRUCTION":"\ud83d\udea7","CONTROL":"\ud83c\udf9b","COOKIE":"\ud83c\udf6a","COOKING":"\ud83c\udf73","COOL":"\ud83d\ude0e","COOLBOX":"\ud83c\udd92","COPYRIGHT":"\u00a9","CRANE":"\ud83c\udfd7","CRAYON":"\ud83d\udd8d","CREDITCARD":"\ud83d\udcb3","CROSS":"\u2716","CROSSBOX:":"\u274e","CRY":"\ud83d\ude22","CRYCAT":"\ud83d\ude3f","CRYSTALBALL":"\ud83d\udd2e","CUSTOMS":"\ud83d\udec3","DELICIOUS":"\ud83d\ude0b","DERELICT":"\ud83c\udfda","DESKTOP":"\ud83d\udda5","DIAMONDLB":"\ud83d\udd37","DIAMONDLO":"\ud83d\udd36","DIAMONDSB":"\ud83d\udd39","DIAMONDSO":"\ud83d\udd38","DICE":"\ud83c\udfb2","DISAPPOINTED":"\ud83d\ude1e","CRY2":"\ud83d\ude25","DIVISION":"\u2797","DIZZY":"\ud83d\ude35","DOLLAR":"\ud83d\udcb5","DOLLAR2":"\ud83d\udcb2","DOWNARROW":"\u2b07","DVD":"\ud83d\udcc0","EJECT":"\u23cf","ELEPHANT":"\ud83d\udc18","EMAIL":"\ud83d\udce7","ENVELOPE":"\ud83d\udce8","ENVELOPE2":"\u2709","ENVELOPE_DOWN":"\ud83d\udce9","EURO":"\ud83d\udcb6","EVIL":"\ud83d\ude08","EXPRESSIONLESS":"\ud83d\ude11","EYES":"\ud83d\udc40","FACTORY":"\ud83c\udfed","FAX":"\ud83d\udce0","FEARFUL":"\ud83d\ude28","FILEBOX":"\ud83d\uddc3","FILECABINET":"\ud83d\uddc4","FIRE":"\ud83d\udd25","FIREENGINE":"\ud83d\ude92","FIST":"\ud83d\udc4a","FLOWER":"\ud83c\udf37","FLOWER2":"\ud83c\udf38","FLUSHED":"\ud83d\ude33","FOLDER":"\ud83d\udcc1","FOLDER2":"\ud83d\udcc2","FREE":"\ud83c\udd93","FROG":"\ud83d\udc38","FROWN":"\ud83d\ude41","GEAR":"\u2699","GLOBE":"\ud83c\udf0d","GLOWINGSTAR":"\ud83c\udf1f","GOOD:":"\ud83d\udc4d","GRIMACING":"\ud83d\ude2c","GRIN":"\ud83d\ude00","GRINNINGCAT":"\ud83d\ude38","HALO":"\ud83d\ude07","HAMMER":"\ud83d\udd28","HAMSTER":"\ud83d\udc39","HAND":"\u270b","HANDDOWN":"\ud83d\udc47","HANDLEFT":"\ud83d\udc48","HANDRIGHT":"\ud83d\udc49","HANDUP":"\ud83d\udc46","HATCHING":"\ud83d\udc23","HAZARD":"\u2623","HEADPHONE":"\ud83c\udfa7","HEARNOEVIL":"\ud83d\ude49","HEARTBLUE":"\ud83d\udc99","HEARTEYES":"\ud83d\ude0d","HEARTGREEN":"\ud83d\udc9a","HEARTYELLOW":"\ud83d\udc9b","HELICOPTER":"\ud83d\ude81","HERB":"\ud83c\udf3f","HIGH_BRIGHTNESS":"\ud83d\udd06","HIGHVOLTAGE":"\u26a1","HIT":"\ud83c\udfaf","HONEY":"\ud83c\udf6f","HOT":"\ud83c\udf36","HOURGLASS":"\u23f3","HOUSE":"\ud83c\udfe0","HUGGINGFACE":"\ud83e\udd17","HUNDRED":"\ud83d\udcaf","HUSHED":"\ud83d\ude2f","ID":"\ud83c\udd94","INBOX":"\ud83d\udce5","INDEX":"\ud83d\uddc2","JOY":"\ud83d\ude02","KEY":"\ud83d\udd11","KISS":"\ud83d\ude18","KISS2":"\ud83d\ude17","KISS3":"\ud83d\ude19","KISS4":"\ud83d\ude1a","KISSINGCAT":"\ud83d\ude3d","KNIFE":"\ud83d\udd2a","LABEL":"\ud83c\udff7","LADYBIRD":"\ud83d\udc1e","LANDING":"\ud83d\udeec","LAPTOP":"\ud83d\udcbb","LEFTARROW":"\u2b05","LEMON":"\ud83c\udf4b","LIGHTNINGCLOUD":"\ud83c\udf29","LINK":"\ud83d\udd17","LITTER":"\ud83d\udeae","LOCK":"\ud83d\udd12","LOLLIPOP":"\ud83c\udf6d","LOUDSPEAKER":"\ud83d\udce2","LOW_BRIGHTNESS":"\ud83d\udd05","MAD":"\ud83d\ude1c","MAGNIFYING_GLASS":"\ud83d\udd0d","MASK":"\ud83d\ude37","MEDAL":"\ud83c\udf96","MEMO":"\ud83d\udcdd","MIC":"\ud83c\udfa4","MICROSCOPE":"\ud83d\udd2c","MINUS":"\u2796","MOBILE":"\ud83d\udcf1","MONEY":"\ud83d\udcb0","MONEYMOUTH":"\ud83e\udd11","MONKEY":"\ud83d\udc35","MOUSE":"\ud83d\udc2d","MOUSE2":"\ud83d\udc01","MOUTHLESS":"\ud83d\ude36","MOVIE":"\ud83c\udfa5","MUGS":"\ud83c\udf7b","NERD":"\ud83e\udd13","NEUTRAL":"\ud83d\ude10","NEW":"\ud83c\udd95","NOENTRY":"\ud83d\udeab","NOTEBOOK":"\ud83d\udcd4","NOTEPAD":"\ud83d\uddd2","NUTANDBOLT":"\ud83d\udd29","O":"\u2b55","OFFICE":"\ud83c\udfe2","OK":"\ud83c\udd97","OKHAND":"\ud83d\udc4c","OLDKEY":"\ud83d\udddd","OPENLOCK":"\ud83d\udd13","OPENMOUTH":"\ud83d\ude2e","OUTBOX":"\ud83d\udce4","PACKAGE":"\ud83d\udce6","PAGE":"\ud83d\udcc4","PAINTBRUSH":"\ud83d\udd8c","PALETTE":"\ud83c\udfa8","PANDA":"\ud83d\udc3c","PASSPORT":"\ud83d\udec2","PAWS":"\ud83d\udc3e","PEN":"\ud83d\udd8a","PEN2":"\ud83d\udd8b","PENSIVE":"\ud83d\ude14","PERFORMING":"\ud83c\udfad","PHONE":"\ud83d\udcde","PILL":"\ud83d\udc8a","PING":"\u2757","PLATE":"\ud83c\udf7d","PLUG":"\ud83d\udd0c","PLUS":"\u2795","POLICE":"\ud83d\ude93","POLICELIGHT":"\ud83d\udea8","POSTOFFICE":"\ud83c\udfe4","POUND":"\ud83d\udcb7","POUTING":"\ud83d\ude21","POUTINGCAT":"\ud83d\ude3e","PRESENT":"\ud83c\udf81","PRINTER":"\ud83d\udda8","PROJECTOR":"\ud83d\udcfd","PUSHPIN":"\ud83d\udccc","QUESTION":"\u2753","RABBIT":"\ud83d\udc30","RADIOACTIVE":"\u2622","RADIOBUTTON":"\ud83d\udd18","RAINCLOUD":"\ud83c\udf27","RAT":"\ud83d\udc00","RECYCLE":"\u267b","REGISTERED":"\u00ae","RELIEVED":"\ud83d\ude0c","ROBOT":"\ud83e\udd16","ROCKET":"\ud83d\ude80","ROLLING":"\ud83d\ude44","ROOSTER":"\ud83d\udc13","RULER":"\ud83d\udccf","SATELLITE":"\ud83d\udef0","SAVE":"\ud83d\udcbe","SCHOOL":"\ud83c\udfeb","SCISSORS":"\u2702","SCREAMING":"\ud83d\ude31","SCROLL":"\ud83d\udcdc","SEAT":"\ud83d\udcba","SEEDLING":"\ud83c\udf31","SEENOEVIL":"\ud83d\ude48","SHIELD":"\ud83d\udee1","SHIP":"\ud83d\udea2","SHOCKED":"\ud83d\ude32","SHOWER":"\ud83d\udebf","SLEEPING":"\ud83d\ude34","SLEEPY":"\ud83d\ude2a","SLIDER":"\ud83c\udf9a","SLOT":"\ud83c\udfb0","SMILE":"\ud83d\ude42","SMILING":"\ud83d\ude03","SMILINGCLOSEDEYES":"\ud83d\ude06","SMILINGEYES":"\ud83d\ude04","SMILINGSWEAT":"\ud83d\ude05","SMIRK":"\ud83d\ude0f","SNAIL":"\ud83d\udc0c","SNAKE":"\ud83d\udc0d","SOCCER":"\u26bd","SOS":"\ud83c\udd98","SPEAKER":"\ud83d\udd08","SPEAKEROFF":"\ud83d\udd07","SPEAKNOEVIL":"\ud83d\ude4a","SPIDER":"\ud83d\udd77","SPIDERWEB":"\ud83d\udd78","STAR":"\u2b50","STOP":"\u26d4","STOPWATCH":"\u23f1","SULK":"\ud83d\ude26","SUNFLOWER":"\ud83c\udf3b","SUNGLASSES":"\ud83d\udd76","SYRINGE":"\ud83d\udc89","TAKEOFF":"\ud83d\udeeb","TAXI":"\ud83d\ude95","TELESCOPE":"\ud83d\udd2d","TEMPORATURE":"\ud83e\udd12","TENNIS":"\ud83c\udfbe","THERMOMETER":"\ud83c\udf21","THINKING":"\ud83e\udd14","THUNDERCLOUD":"\u26c8","TICKBOX":"\u2705","TICKET":"\ud83c\udf9f","TIRED":"\ud83d\ude2b","TOILET":"\ud83d\udebd","TOMATO":"\ud83c\udf45","TONGUE":"\ud83d\ude1b","TOOLS":"\ud83d\udee0","TORCH":"\ud83d\udd26","TORNADO":"\ud83c\udf2a","TOUNG2":"\ud83d\ude1d","TRADEMARK":"\u2122","TRAFFICLIGHT":"\ud83d\udea6","TRASH":"\ud83d\uddd1","TREE":"\ud83c\udf32","TRIANGLE_LEFT":"\u25c0","TRIANGLE_RIGHT":"\u25b6","TRIANGLEDOWN":"\ud83d\udd3b","TRIANGLEUP":"\ud83d\udd3a","TRIANGULARFLAG":"\ud83d\udea9","TROPHY":"\ud83c\udfc6","TRUCK":"\ud83d\ude9a","TRUMPET":"\ud83c\udfba","TURKEY":"\ud83e\udd83","TURTLE":"\ud83d\udc22","UMBRELLA":"\u26f1","UNAMUSED":"\ud83d\ude12","UPARROW":"\u2b06","UPSIDEDOWN":"\ud83d\ude43","WARNING":"\u26a0","WATCH":"\u231a","WAVING":"\ud83d\udc4b","WEARY":"\ud83d\ude29","WEARYCAT":"\ud83d\ude40","WHITEFLAG":"\ud83c\udff3","WINEGLASS":"\ud83c\udf77","WINK":"\ud83d\ude09","WORRIED":"\ud83d\ude1f","WRENCH":"\ud83d\udd27","X":"\u274c","YEN":"\ud83d\udcb4","ZIPPERFACE":"\ud83e\udd10","UNDEFINED":"","":""};statuses={F:"FATAL",B:"BUG",C:"CRITICAL",E:"ERROR",W:"WARNING",I:"INFO",IM:"IMPORTANT",D:"DEBUG",L:"LOG",CO:"CONSTANT",FU:"FUNCTION",R:"RETURN",V:"VARIABLE",S:"STACK",RE:"RESULT",ST:"STOPPER",TI:"TIMER",T:"TRACE"};LOG_LEVEL={NONE:7,OFF:7,FATAL:6,ERROR:5,WARN:4,INFO:3,UNDEFINED:2,"":2,DEFAULT:2,DEBUG:2,TRACE:1,ON:0,ALL:0,};LOG_STATUS={OFF:LOG_LEVEL.OFF,NONE:LOG_LEVEL.OFF,NO:LOG_LEVEL.OFF,NOPE:LOG_LEVEL.OFF,FALSE:LOG_LEVEL.OFF,FATAL:LOG_LEVEL.FATAL,BUG:LOG_LEVEL.ERROR,CRITICAL:LOG_LEVEL.ERROR,ERROR:LOG_LEVEL.ERROR,WARNING:LOG_LEVEL.WARN,INFO:LOG_LEVEL.INFO,IMPORTANT:LOG_LEVEL.INFO,DEBUG:LOG_LEVEL.DEBUG,LOG:LOG_LEVEL.DEBUG,STACK:LOG_LEVEL.DEBUG,CONSTANT:LOG_LEVEL.DEBUG,FUNCTION:LOG_LEVEL.DEBUG,VARIABLE:LOG_LEVEL.DEBUG,RETURN:LOG_LEVEL.DEBUG,RESULT:LOG_LEVEL.TRACE,STOPPER:LOG_LEVEL.TRACE,TIMER:LOG_LEVEL.TRACE,TRACE:LOG_LEVEL.TRACE,ALL:LOG_LEVEL.ALL,YES:LOG_LEVEL.ALL,YEP:LOG_LEVEL.ALL,TRUE:LOG_LEVEL.ALL};var logFile,logFolder;var LOG=function(message,status,icon){if(LOG.level!==LOG_LEVEL.OFF&&(LOG.write||LOG.store)&&LOG.arguments.length)return LOG.addMessage(message,status,icon);};LOG.logDecodeLevel=function(level){if(level==~~level)return Math.abs(level);var lev;level+="";level=level.toUpperCase();if(level in statuses){level=statuses[level];}lev=LOG_LEVEL[level];if(lev!==undefined)return lev;lev=LOG_STATUS[level];if(lev!==undefined)return lev;return LOG_LEVEL.DEFAULT;};LOG.write=write;LOG.store=store;LOG.level=LOG.logDecodeLevel(level);LOG.status=defaultStatus;LOG.addMessage=function(message,status,icon){var date=new Date(),count,bool,logStatus;if(status&&status.constructor.name==="String"){status=status.toUpperCase();status=statuses[status]||status;}else status=LOG.status;logStatus=LOG_STATUS[status]||LOG_STATUS.ALL;if(logStatus<LOG.level)return;date=" \t["+date+" "+date.getMilliseconds()+"ms]";status="["+status+"] ";if(status.length<11)status=(status+"           ").substr(0,11);if(icon){icon=(""+icon).toUpperCase();icon=(icon in icons&&icons[icon])||"";}else{icon="";}if(LOG.count!==~~LOG.count){LOG.count=1;}count=(LOG.count>999)?"["+LOG.count+"] ":("   ["+LOG.count+"] ").slice(-7);message=count+status+icon+(message instanceof Object?message.toSource():message)+date;if(LOG.store){stack.push(message);}if(LOG.write){bool=file&&file.writable&&logFile.writeln(message);if(!bool){file.writable=true;LOG.setFile(logFile);logFile.writeln(message);}}LOG.count++;return true;};var logNewFile=function(file,isCookie,overwrite){file.encoding="UTF-8";file.lineFeed=($.os[0]=="M")?"Macintosh":" Windows";if(isCookie)return file.open(overwrite?"w":"e")&&file;file.writable=LOG.write;logFile=file;logFolder=file.parent;if(continuing){LOG.count=LOG.setCount(file);}return(!LOG.write&&file||(file.open("a")&&file));};LOG.setFile=function(file,isCookie,overwrite){var bool,folder,fileName,suffix,newFileName,f,d,safeFileName;d=new Date();f=$.stack.split("\n")[0].replace(/^\[\(?/,"").replace(/\)?\]$/,"");if(f==~~f){f=$.fileName.replace(/[^\/]+\//g,"");}safeFileName=File.encode((isCookie?"/COOKIE_":"/LOG_")+f.replace(/^\//,"")+"_"+(1900+d.getYear())+(""+d).replace(/...(...)(..).+/,"_$1_$2")+(isCookie?".txt":".log"));if(file&&file.constructor.name=="String"){file=(file.match("/"))?new File(file):new File((logFolder||Folder.temp)+"/"+file);}if(file instanceof File){folder=file.parent;bool=folder.exists||folder.create();if(!bool)folder=Folder.temp;fileName=File.decode(file.name);suffix=fileName.match(/\.[^.]+$/);suffix=suffix?suffix[0]:"";fileName="/"+fileName;newFileName=fileName.replace(/\.[^.]+$/,"")+"_"+(+(new Date())+suffix);f=logNewFile(file,isCookie,overwrite);if(f)return f;f=logNewFile(new File(folder+newFileName),isCookie,overwrite);if(f)return f;f=logNewFile(new File(folder+safeFileName),isCookie,overwrite);if(f)return f;if(folder!=Folder.temp){f=logNewFile(new File(Folder.temp+fileName),isCookie,overwrite);if(f)return f;f=logNewFile(new File(Folder.temp+safeFileName),isCookie,overwrite);return f||new File(Folder.temp+safeFileName);}}return LOG.setFile(((logFile&&!isCookie)?new File(logFile):new File(Folder.temp+safeFileName)),isCookie,overwrite );};LOG.setCount=function(file){if(~~file===file){LOG.count=file;return LOG.count;}if(file===undefined){file=logFile;}if(file&&file.constructor===String){file=new File(file);}var logNumbers,contents;if(!file.length||!file.exists){LOG.count=1;return 1;}file.open("r");file.encoding="utf-8";file.seek(10000,2);contents="\n"+file.read();logNumbers=contents.match(/\n{0,3}\[\d+\] \[\w+\]+/g);if(logNumbers){logNumbers=+logNumbers[logNumbers.length-1].match(/\d+/)+1;file.close();LOG.count=logNumbers;return logNumbers;}if(file.length<10001){file.close();LOG.count=1;return 1;}file.seek(10000000,2);contents="\n"+file.read();logNumbers=contents.match(/\n{0,3}\[\d+\] \[\w+\]+/g);if(logNumbers){logNumbers=+logNumbers[logNumbers.length-1].match(/\d+/)+1;file.close();LOG.count=logNumbers;return logNumbers;}file.close();LOG.count=1;return 1;};LOG.setLevel=function(level){LOG.level=LOG.logDecodeLevel(level);return LOG.level;};LOG.setStatus=function(status){status=(""+status).toUpperCase();LOG.status=statuses[status]||status;return LOG.status;};LOG.cookie=function(file,level,overwrite,setLevel){var log,cookie;if(!file){file={file:file};}if(file&&(file.constructor===String||file.constructor===File)){file={file:file};}log=file;if(log.level===undefined){log.level=(level!==undefined)?level:"NONE";}if(log.overwrite===undefined){log.overwrite=(overwrite!==undefined)?overwrite:false;}if(log.setLevel===undefined){log.setLevel=(setLevel!==undefined)?setLevel:true;}setLevel=log.setLevel;overwrite=log.overwrite;level=log.level;file=log.file;file=LOG.setFile(file,true,overwrite);if(overwrite){file.write(level);}else{cookie=file.read();if(cookie.length){level=cookie;}else{file.write(level);}}file.close();if(setLevel){LOG.setLevel(level);}return{path:file,level:level};};LOG.args=function(args,funct,line){if(LOG.level>LOG_STATUS.FUNCTION)return;if(!(args&&(""+args.constructor).replace(/\s+/g,"")==="functionObject(){[nativecode]}"))return;if(!LOG.args.STRIP_COMMENTS){LOG.args.STRIP_COMMENTS=/((\/.*$)|(\/\*[\s\S]*?\*\/))/mg;}if(!LOG.args.ARGUMENT_NAMES){LOG.args.ARGUMENT_NAMES=/([^\s,]+)/g;}if(!LOG.args.OUTER_BRACKETS){LOG.args.OUTER_BRACKETS=/^\((.+)?\)$/;}if(!LOG.args.NEW_SOMETHING){LOG.args.NEW_SOMETHING=/^new \w+\((.+)?\)$/;}var functionString,argumentNames,stackInfo,report,functionName,arg,argsL,n,argName,argValue,argsTotal;if(funct===~~funct){line=funct;}if(!(funct instanceof Function)){funct=args.callee;}if(!(funct instanceof Function))return;functionName=funct.name;functionString=(""+funct).replace(LOG.args.STRIP_COMMENTS,"");argumentNames=functionString.slice(functionString.indexOf("(")+1,functionString.indexOf(")")).match(LOG.args.ARGUMENT_NAMES);argumentNames=argumentNames||[];report=[];report.push("--------------");report.push("Function Data:");report.push("--------------");report.push("Function Name:"+functionName);argsL=args.length;stackInfo=$.stack.split(/[\n\r]/);stackInfo.pop();stackInfo=stackInfo.join("\n                              ");report.push("Call stack:"+stackInfo);if(line){report.push("Function Line around:"+line);}report.push("Arguments Provided:"+argsL);report.push("Named Arguments:"+argumentNames.length);if(argumentNames.length){report.push("Arguments Names:"+argumentNames.join(","));}if(argsL){report.push("----------------");report.push("Argument Values:");report.push("----------------");}argsTotal=Math.max(argsL,argumentNames.length);for(n=0;n<argsTotal;n++){argName=argumentNames[n];arg=args[n];if(n>=argsL){argValue="NO VALUE PROVIDED";}else if(arg===undefined){argValue="undefined";}else if(arg===null){argValue="null";}else{argValue=arg.toSource().replace(LOG.args.OUTER_BRACKETS,"$1").replace(LOG.args.NEW_SOMETHING,"$1");}report.push((argName?argName:"arguments["+n+"]")+":"+argValue);}report.push("");report=report.join("\n                  ");LOG(report,"f");return report;};LOG.stack=function(reverse){var st=$.stack.split("\n");st.pop();st.pop();if(reverse){st.reverse();}return LOG(st.join("\n                  "),"s");};LOG.values=function(values){var n,value,map=[];if(!(values instanceof Object||values instanceof Array)){return;}if(!LOG.values.OUTER_BRACKETS){LOG.values.OUTER_BRACKETS=/^\((.+)?\)$/;}if(!LOG.values.NEW_SOMETHING){LOG.values.NEW_SOMETHING=/^new \w+\((.+)?\)$/;}for(n in values){try{value=values[n];if(value===undefined){value="undefined";}else if(value===null){value="null";}else{value=value.toSource().replace(LOG.values.OUTER_BRACKETS,"$1").replace(LOG.values.NEW_SOMETHING,"$1");}}catch(e){value="\uD83D\uDEAB "+e;}map.push(n+":"+value);}if(map.length){map=map.join("\n                  ")+"\n                  ";return LOG(map,"v");}};LOG.reset=function(all){stack.length=0;LOG.count=1;if(all!==false){if(logFile instanceof File){logFile.close();}logFile=LOG.store=LOG.writeToFile=undefined;LOG.write=true;logFolder=Folder.temp;logTime=new Date();logPoint="After Log Reset";}};LOG.stopper=function(message){var newLogTime,t,m,newLogPoint;newLogTime=new Date();newLogPoint=(LOG.count!==undefined)?"LOG#"+LOG.count:"BEFORE LOG#1";LOG.time=t=newLogTime-logTime;if(message===false){return;}message=message||"Stopper start point";t=LOG.prettyTime(t);m=message+"\n                  "+"From "+logPoint+" to "+newLogPoint+" took "+t+" Starting "+logTime+" "+logTime.getMilliseconds()+"ms"+" Ending "+newLogTime+" "+newLogTime.getMilliseconds()+"ms";LOG(m,"st");logPoint=newLogPoint;logTime=newLogTime;return m;};LOG.start=function(message){var t=new Date();times.push([t,(message!==undefined)?message+"":""]);};LOG.stop=function(message){if(!times.length)return;message=(message)?message+" ":"";var nt,startLog,ot,om,td,m;nt=new Date();startLog=times.pop();ot=startLog[0];om=startLog[1];td=nt-ot;if(om.length){om+=" ";}m=om+"STARTED ["+ot+" "+ot.getMilliseconds()+"ms]\n                  "+message+"FINISHED ["+nt+" "+nt.getMilliseconds()+"ms]\n                  TOTAL TIME ["+LOG.prettyTime(td)+"]";LOG(m,"ti");return m;};LOG.prettyTime=function(t){var h,m,s,ms;h=Math.floor(t / 3600000);m=Math.floor((t % 3600000)/ 60000);s=Math.floor((t % 60000)/ 1000);ms=t % 1000;t=(!t)?"<1ms":((h)?h+" hours ":"")+((m)?m+" minutes ":"")+((s)?s+" seconds ":"")+((ms&&(h||m||s))?"&":"")+((ms)?ms+"ms":"");return t;};LOG.get=function(){if(!stack.length)return "THE LOG IS NOT SET TO STORE";var a=fetchLogLines(arguments);return a?"\n"+a.join("\n"):"NO LOGS AVAILABLE";};var fetchLogLines=function(){var args=arguments[0];if(!args.length)return stack;var c,n,l,a=[],ln,start,end,j,sl;l=args.length;sl=stack.length-1;n=0;for(c=0;c<l;c++){ln=args[c];if(~~ln===ln){ln=(0>ln)?sl+ln+1:ln-1;if(ln>=0&&ln<=sl)a[n++]=stack[ln];}else if(ln instanceof Array&&ln.length===2){start=ln[0];end=ln[1];if(!(~~start===start&&~~end===end))continue;start=(0>start)?sl+start+1:start-1;end=(0>end)?sl+end+1:end-1;start=Math.max(Math.min(sl,start),0);end=Math.min(Math.max(end,0),sl);if(start<=end)for(j=start;j<=end;j++)a[n++]=stack[j];else for(j=start;j>=end;j--)a[n++]=stack[j];}}return(n)?a:false;};LOG.file=function(){return logFile;};LOG.openFolder=function(){if(logFolder)return logFolder.execute();};LOG.show=LOG.execute=function(){if(logFile)return logFile.execute();};LOG.close=function(){if(logFile)return logFile.close();};LOG.setFile(file);if(!$.summary.difference){$.summary.difference=function(){return $.summary().replace(/ *([0-9]+)([^ ]+)(\n?)/g,$.summary.updateSnapshot );};}if(!$.summary.updateSnapshot){$.summary.updateSnapshot=function(full,count,name,lf){var snapshot=$.summary.snapshot;count=Number(count);var prev=snapshot[name]?snapshot[name]:0;snapshot[name]=count;var diff=count-prev;if(diff===0)return "";return "     ".substring(String(diff).length)+diff+" "+name+lf;};}if(!$.summary.snapshot){$.summary.snapshot=[];$.summary.difference();}$.gc();$.gc();$.summary.difference();LOG.sumDiff=function(message){$.gc();$.gc();var diff=$.summary.difference();if(diff.length<8){diff=" - NONE -";}if(message===undefined){message="";}message+=diff;return LOG("$.summary.difference():"+message,"v");};return LOG;};

var log = new LogFactory("c:\\Program Files (x86)\\Common Files\\Adobe\\CEP\\extensions\\com.avalon\\myLog.log"); // =>; creates the new log factory




var doc;  // remember the document. But we do it later because we first need make sure that there are documents

// caching precalculated typeID numbers for saving a bit miliseconds and nicer code
var TID = {
    property: charIDToTypeID("Prpr"),
    bounds: stringIDToTypeID("bounds"),
    layer: charIDToTypeID("Lyr "),
    top: stringIDToTypeID("top"),
    bottom: stringIDToTypeID("bottom"),
    left: stringIDToTypeID("left"),
    right: stringIDToTypeID("right"),
    layerLocking: stringIDToTypeID("layerLocking"),
    protectAll: stringIDToTypeID("protectAll"),
    layerID: stringIDToTypeID("layerID"),
    group: stringIDToTypeID("group"),
    layerSection: stringIDToTypeID("layerSection"),
    textKey: stringIDToTypeID("textKey"),
    idNull: charIDToTypeID("null"),
    idDelete: charIDToTypeID("Dlt "),
    document: charIDToTypeID("Dcmn"),
    ordinal: charIDToTypeID("Ordn"),
    target: charIDToTypeID("Trgt"),
    hide: charIDToTypeID("Hd  "),
    application: charIDToTypeID("capp"),
    set: charIDToTypeID("setd"),
    to: charIDToTypeID("T   "),
    playbackOptions: stringIDToTypeID("playbackOptions"),
    hasBackgroundLayer: stringIDToTypeID("hasBackgroundLayer"),
    performance: stringIDToTypeID("performance"),
    layerSectionEnd: stringIDToTypeID("layerSectionEnd"),
    layerSectionStart: stringIDToTypeID("layerSectionStart"),
    layerSectionContent: stringIDToTypeID("layerSectionContent"),
    numberOfLayers: stringIDToTypeID("numberOfLayers"),
    accelerated: stringIDToTypeID("accelerated")
};

log("TIID " + TID);

function getLayerTypeWithName(layerName) {
    var type = "NA";
    var nameParts = layerName.split("_");
    var namePrefix = nameParts[0];
    namePrefix = namePrefix.toLowerCase();
    switch (namePrefix) {
        case "guide":
        case "tl":
        case "tr":
        case "bl":
        case "br":
            type = "GUIDE";
            break;
        case "fg":
            type = "FG";
            break;
        case "bg":
            type = "BG";
            break;
        case "obj":
        default:
            type = "OBJ";
            break;
    }

    return type;
}

function getLayers() {
    var ref1 = new ActionReference();
    ref1.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), 
                       charIDToTypeID("Trgt"));
    var count = executeActionGet(ref1).getInteger(charIDToTypeID("NmbL"));

    // get all layer names
    var layers = [];
    var layer = {};
    
    groupId = 0;
    for (var i = count; i >= 1; i--) {
      var layer = {};
      var ref2 = new ActionReference();
      ref2.putIndex(charIDToTypeID("Lyr "), i);

      var desc = executeActionGet(ref2);  // Access layer index #i
      var layerSection = typeIDToStringID(desc.getEnumerationValue(
                                          stringIDToTypeID("layerSection")));
      group = false;
      if (layerSection == "layerSectionStart") { // Group start and end
        group = true;
        groupId = desc.getInteger(stringIDToTypeID("layerID"));              
      }
      if (layerSection == "layerSectionEnd") {
          continue;
      } 
      
      layer.name = desc.getString(stringIDToTypeID("name"));
      layer.groupId = groupId;
      layer.group = group; //true if group, LayerSet, false for reg ArtLayer
      layer.type = getLayerTypeWithName(layer.name);
      layer.id = desc.getInteger(stringIDToTypeID("layerID"));
      layer.visible = desc.getBoolean(stringIDToTypeID("visible"));
      //log(" name: " + layer.name + " groupId " + layer.groupId + 
      //" group " + layer.group); 
      
      layers.push(layer);

    }
    return JSON.stringify(layers);
}

function selectLayers(selectedLayers){
    /**
     *  Selects layers from list of Layers(id:X, name:Y)
     **/
    log("selectLayers layers " + selectedLayers);
    selectedLayers = JSON.parse(selectedLayers);
    var layers = new Array();
    var id54 = charIDToTypeID( "slct" );
    var desc12 = new ActionDescriptor();
    var id55 = charIDToTypeID( "null" );
    var ref9 = new ActionReference();
    
    var existing_layers = JSON.parse(getLayers());
    log("existing_layers " + existing_layers);
    log("existing_layers length " + existing_layers.length);
    var existing_ids = [];
    for (var y = 0; y < existing_layers.length; y++){
          log("id: " + existing_layers[y]["id"]);
          existing_ids.push(existing_layers[y]["id"]);
    }
    log("existing_ids " + existing_ids);
    for (var i = 0; i < selectedLayers.length; i++) {
       // a check to see if the id stil exists
       var id = selectedLayers[i].id;
       log("id " + id);
       log(existing_ids.toString().indexOf(id));
       if(existing_ids.toString().indexOf(id)>=0){
           layers[i] = charIDToTypeID( "Lyr " );
           ref9.putIdentifier(layers[i], id);
       }
        
    }
    desc12.putReference( id55, ref9 );
    var id58 = charIDToTypeID( "MkVs" );
    desc12.putBoolean( id58, false );
    executeAction( id54, desc12, DialogModes.NO )

}

function importSmartObject(path){
    log("importSmartObject");
    log("path " + path);

    var desc1 = new ActionDescriptor();
    desc1.putPath( app.charIDToTypeID("null"), new File(path) );
    desc1.putEnumerated(app.charIDToTypeID("FTcs"), app.charIDToTypeID("QCSt"), 
                       app.charIDToTypeID("Qcsa"));
                       
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(app.charIDToTypeID("Hrzn"), 
                        app.charIDToTypeID("#Pxl"), 0.0);
    desc2.putUnitDouble(app.charIDToTypeID("Vrtc"), 
                        app.charIDToTypeID("#Pxl"), 0.0);
    
    desc1.putObject(charIDToTypeID("Ofst"), charIDToTypeID("Ofst"), desc2);
    executeAction(charIDToTypeID("Plc " ), desc1, DialogModes.NO);
    
    var docRef =  app.activeDocument
    var currentActivelayer = app.activeDocument.activeLayer;
    //var idx = getLayerIndex(currentActivelayer);
    //log("idx " + idx); 
    //docRef.artLayers[0].move(docRef.artLayers[idx], 
                            //ElementPlacement.PLACEBEFORE);
    var layer = {}
    layer.id = currentActivelayer.id;
    layer.name = currentActivelayer.name;                        
    return layer;     
}

function replaceSmartObjects(layer, path){
    log("replaceSmartObjects");
    log("layer " + layer);
    log("path " + path);
    layer = JSON.parse(layer);
    log("layer2 " + layer); 
    
    var desc = new ActionDescriptor();
    
    var ref = new ActionReference();
    ref.putIdentifier(stringIDToTypeID("layer"), layer.id);
    desc.putReference(stringIDToTypeID("null"), ref);
    
    desc.putPath(charIDToTypeID('null'), new File(path) );
    desc.putInteger(charIDToTypeID("PgNm"), 1);
    executeAction(stringIDToTypeID('placedLayerReplaceContents'), 
                  desc, DialogModes.NO );
}

var layer = '{"id": 6}';
layer.id = 6;
var pth = "c:\\projects\\test.jpg";
//log(importSmartObject(pth));
replaceSmartObjects(layer, pth);

log.show();