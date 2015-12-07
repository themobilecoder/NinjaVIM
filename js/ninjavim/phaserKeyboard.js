var PhaserKeyboard = function (phaserGame) {
    this.game = phaserGame;
    this.keys = {};
    this._init();
};
PhaserKeyboard.prototype = {
    getKeys: function () {
        return this.keys;
    },
    _init: function () {
        this.keys[KeyboardHandlerManager.KEYS.L_KEY] = this.game.input.keyboard.addKey(Phaser.KeyCode.L);
        this.keys[KeyboardHandlerManager.KEYS.H_KEY] = this.game.input.keyboard.addKey(Phaser.KeyCode.H);
        this.keys[KeyboardHandlerManager.KEYS.K_KEY] = this.game.input.keyboard.addKey(Phaser.KeyCode.K);
        this.keys[KeyboardHandlerManager.KEYS.J_KEY] = this.game.input.keyboard.addKey(Phaser.KeyCode.J);
    }
};
