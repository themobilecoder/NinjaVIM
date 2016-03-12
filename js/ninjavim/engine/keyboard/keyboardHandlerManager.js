function KeyboardHandlerManager(game) {
    this.context = game;
    this.game = this.context.game;
    this.keys = {};
    this.keyHandlers = {};
}

KeyboardHandlerManager.prototype = {
    setKeyboard: function (keyboard) {
        this.keys = keyboard.getKeys();
    },
    setKeyHandlers: function (handlers) {
        this.keyHandlers = handlers.getHandlers();
        this._assignHandlersToKeys()
    },
    isShiftDown: function() {
        return this.keys[KeyboardHandlerManager.KEYS.SHIFT_KEY].isDown;
    },
    _assignHandlersToKeys: function () {
        for (var key in this.keys) {
            this._assignHandlerOnKey(this.keyHandlers[key], key);
        }
    },
    _assignHandlerOnKey: function (handler, key) {
        this.keys[key].onDown.add(handler, this.context);
    }
};

KeyboardHandlerManager.KEYS = {
    L_KEY: 'lKey',
    H_KEY: 'hKey',
    K_KEY: 'kKey',
    J_KEY: 'jKey',
    SHIFT_KEY: 'shiftKey'
};
