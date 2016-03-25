var LoadingScreenState = function(game) {
    this.game = game;
    this.config = NinjaVim.config;
};

LoadingScreenState.prototype = {
    preload : function() {
        console.log('Pre loading larger assets..');
        this._addLoadingText();
        this._addLoadingBar();
        this._preloadGameAssets();
    },
    create : function() {
        console.log('Starting actual game');
        this.game.state.start('intro');
    },
    _addLoadingText: function () {
        var style = {font: '24px Courier'};
        var loadingText = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 50, "Loading", style);
        loadingText.addColor("#FFFFFF", 0);
        loadingText.anchor.setTo(0.5);
    },

    _addLoadingBar: function () {
        this.preloadBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, this.config.progressBar);
        this.preloadBar.anchor.setTo(0.5);
        this.preloadBar.height = 50;
        this.game.load.setPreloadSprite(this.preloadBar);
    },
    _preloadGameAssets: function () {
        this.game.load.atlasJSONHash(this.config.cursorSprite, this.config.cursorImage, this.config.cursorImageJson);
        this.game.load.atlasJSONHash(this.config.smokeSprite, this.config.smokeAsset, this.config.smokeAssetJson);
        this.game.load.image(this.config.starSprite, this.config.starAsset);
        this.game.load.audio(this.config.smokeAudio, [this.config.smokeAudioAsset]);
        this.game.load.image(this.config.messageBox, this.config.messageBoxSprite);
    },
};