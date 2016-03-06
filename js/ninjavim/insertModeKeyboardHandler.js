function InsertModeKeyboardHandler(vimContext) {
    this.vimContext = vimContext;
    this.keyHandlers = {};
    this.vimMode = VimContext.MODE.INSERT;
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
            var command = new InsertCharacterCommand(this.vimContext, 'l');
            command.execute();
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.H_KEY] = function () {
            var command = new InsertCharacterCommand(this.vimContext, 'h');
            command.execute();
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.K_KEY] = function () {
            var command = new InsertCharacterCommand(this.vimContext, 'k');
            command.execute();
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.J_KEY] = function () {
            var command = new InsertCharacterCommand(this.vimContext, 'j');
            command.execute();
        };
    }
};
