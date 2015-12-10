function VimCommand() {
    this.TYPE = VimCommand.TYPE.UNKNOWN;
    this.cursorManager = null;
}
VimCommand.TYPE = {
    UNKNOWN: 'UNKNOWN',
    MOVE_UP: 'MOVE_UP',
    MOVE_DOWN: 'MOVE_DOWN',
    MOVE_LEFT: 'MOVE_LEFT',
    MOVE_RIGHT: 'MOVE_RIGHT',
};
VimCommand.prototype.execute = function() {
    throw Error('Cannot execute command of an abstract command');
};
VimCommand.prototype.setCursorManager = function(cursorManager) {
    this.cursorManager = cursorManager;
};



function MoveUpCommand(){
    this.TYPE = VimCommand.TYPE.MOVE_UP;
}
MoveUpCommand.prototype = new VimCommand();
MoveUpCommand.prototype.execute = function(){
    this.cursorManager.moveCursorUp();
};

function MoveDownCommand() {
    this.TYPE = VimCommand.TYPE.MOVE_DOWN;
}
MoveDownCommand.prototype = new VimCommand();
MoveDownCommand.prototype.execute = function(){
    this.cursorManager.moveCursorDown();
};

function MoveLeftCommand() {
    this.TYPE = VimCommand.TYPE.MOVE_LEFT;
}
MoveLeftCommand.prototype = new VimCommand();
MoveLeftCommand.prototype.execute = function(){
    this.cursorManager.moveCursorLeft();
};

function MoveRightCommand() {
    this.TYPE = VimCommand.TYPE.MOVE_RIGHT;
}
MoveRightCommand.prototype = new VimCommand();
MoveRightCommand.prototype.execute = function(){
    this.cursorManager.moveCursorRight();
};
