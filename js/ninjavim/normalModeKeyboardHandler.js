function NormalModeKeyboardHandler(vimContext) {
    this.vimContext = vimContext;
    this.keyHandlers = {};
    this._init();
}
NormalModeKeyboardHandler.prototype = {
    getHandlers: function () {
        return this.keyHandlers;
    },
    _init: function () {
        this.keyHandlers[KeyboardHandlerManager.KEYS.L_KEY] = function () {
            this.vimContext.processCommand(new MoveRightCommand());
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.H_KEY] = function () {
            this.vimContext.processCommand(new MoveLeftCommand());
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.K_KEY] = function () {
            this.vimContext.processCommand(new MoveUpCommand());
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.J_KEY] = function () {
            this.vimContext.processCommand(new MoveDownCommand());
        };
    }
};
