function NormalModeKeyboardHandler(vimContext) {
    this.vimContext = vimContext;
    this.keyHandlers = {};
    this.vimMode = VimContext.MODE.NORMAL;
    this._init();
}
NormalModeKeyboardHandler.prototype = {
    getHandlers: function () {
        return this.keyHandlers;
    },
    getVimMode: function () {
        return this.vimMode;
    },
    _init: function () {
        this.keyHandlers[KeyboardHandlerManager.KEYS.L_KEY] = function () {
            var command = new MoveRightCommand(this.vimContext);
            command.execute();
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.H_KEY] = function () {
            var command = new MoveLeftCommand(this.vimContext);
            command.execute();
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.K_KEY] = function () {
            var command = new MoveUpCommand(this.vimContext);
            command.execute();
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.J_KEY] = function () {
            var command = new MoveDownCommand(this.vimContext);
            command.execute();
        };
    }
};
