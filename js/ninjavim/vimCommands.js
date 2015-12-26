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
    SWITCH_TO_INSERT: 'SWITCH_TO_INSERT',
    INSERT_CHARACTER: 'INSERT_CHARACTER',
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

function SwitchToInsertModeCommand(vimContext) {
    this.vimContext = vimContext;
    this.TYPE = VimCommand.TYPE.SWITCH_TO_INSERT;
}
SwitchToInsertModeCommand.prototype = new VimCommand();
SwitchToInsertModeCommand.prototype.execute = function () {
    this.vimContext.setKeyboardHandler(new InsertModeKeyboardHandler(this.vimContext));
};

function InsertCharacterCommand(vimContext, character) {
    this.vimContext = vimContext;
    this.TYPE = VimCommand.TYPE.INSERT_CHARACTER;
    this.character = character;
}
InsertCharacterCommand.prototype = new VimCommand();
InsertCharacterCommand.prototype.execute = function () {
    this.vimContext.setCharacterToCurrentCursorLocation(this.character);
    this.vimContext.moveCursorRight();
};
