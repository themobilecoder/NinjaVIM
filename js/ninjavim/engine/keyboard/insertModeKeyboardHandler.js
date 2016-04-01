function InsertModeKeyboardHandler(vimContext) {
    this.vimContext = vimContext;
    this.keyHandlers = {};
    this.vimMode = VimContext.MODE.INSERT;
    this.instance = this;
    this._init();
}
InsertModeKeyboardHandler.prototype = {
    getHandlers: function () {
        return this.keyHandlers;
    },
    getVimMode: function () {
        return this.vimMode;
    },
    _init: function () {
        this.keyHandlers[KeyboardHandlerManager.KEYS.L_KEY] = function () {
            var command;
            if (this.vimContext.isShiftDown()) {
                command = new InsertCharacterCommand(this.vimContext, 'L');
            } else {
                command = new InsertCharacterCommand(this.vimContext, 'l');
            }
            command.execute();
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.H_KEY] = function () {
            var command;
            if (this.vimContext.isShiftDown()) {
                command = new InsertCharacterCommand(this.vimContext, 'H');
            } else {
                command = new InsertCharacterCommand(this.vimContext, 'h');
            }
            command.execute();
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.K_KEY] = function () {
            var command;
            if (this.vimContext.isShiftDown()) {
                command = new InsertCharacterCommand(this.vimContext, 'K');
            } else {
                command = new InsertCharacterCommand(this.vimContext, 'k');
            }
            command.execute();
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.J_KEY] = function () {
            var command;
            if (this.vimContext.isShiftDown()) {
                command = new InsertCharacterCommand(this.vimContext, 'J');
            } else {
                command = new InsertCharacterCommand(this.vimContext, 'j');
            }
            command.execute();
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.SHIFT_KEY] = function () {
            //Do Nothing
        }
    },
};
