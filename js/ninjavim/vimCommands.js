function VimCommand() {
    this.TYPE = VimCommand.TYPE.UNKNOWN;
    this.vimContext = null;
}
VimCommand.TYPE = {
    UNKNOWN: 'UNKNOWN',
    MOVE_UP: 'MOVE_UP',
    MOVE_DOWN: 'MOVE_DOWN',
    MOVE_LEFT: 'MOVE_LEFT',
    MOVE_RIGHT: 'MOVE_RIGHT',
};
VimCommand.prototype.execute = function () {
    throw Error('Cannot execute command of an abstract command');
};

function MoveUpCommand(vimContext) {
    this.TYPE = VimCommand.TYPE.MOVE_UP;
    this.vimContext = vimContext;
}
MoveUpCommand.prototype = new VimCommand();
MoveUpCommand.prototype.execute = function () {
    this.vimContext.moveCursorUp();
};

function MoveDownCommand(vimContext) {
    this.vimContext = vimContext;
    this.TYPE = VimCommand.TYPE.MOVE_DOWN;
}
MoveDownCommand.prototype = new VimCommand();
MoveDownCommand.prototype.execute = function () {
    this.vimContext.moveCursorDown();
};

function MoveLeftCommand(vimContext) {
    this.vimContext = vimContext;
    this.TYPE = VimCommand.TYPE.MOVE_LEFT;
}
MoveLeftCommand.prototype = new VimCommand();
MoveLeftCommand.prototype.execute = function () {
    this.vimContext.moveCursorLeft();
};

function MoveRightCommand(vimContext) {
    this.vimContext = vimContext;
    this.TYPE = VimCommand.TYPE.MOVE_RIGHT;
}
MoveRightCommand.prototype = new VimCommand();
MoveRightCommand.prototype.execute = function () {
    this.vimContext.moveCursorRight();
};
