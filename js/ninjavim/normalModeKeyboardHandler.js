var NormalModeKeyboardHandler = function (vimEngine) {
    this.vimEngine = vimEngine;
    this.keyHandlers = {};
    this._init();
};
NormalModeKeyboardHandler.prototype = {
    getHandlers: function () {
        return this.keyHandlers;
    },
    _init: function () {
        this.keyHandlers[KeyboardHandlerManager.KEYS.L_KEY] = function () {
            this.vimEngine.processCommand(new MoveRightCommand());
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.H_KEY] = function () {
            this.vimEngine.processCommand(new MoveLeftCommand());
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.K_KEY] = function () {
            this.vimEngine.processCommand(new MoveUpCommand());
        };
        this.keyHandlers[KeyboardHandlerManager.KEYS.J_KEY] = function () {
            this.vimEngine.processCommand(new MoveDownCommand());
        };
    }
};
