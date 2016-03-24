var BootState = function(game) {
    this.config = NinjaVim.config;
};

BootState.prototype = {

    preload : function() {
        console.log('Booting ...');
        this.game.load.image(this.config.progressBar, this.config.progressBarAsset);
    },
    create : function() {
        this.game.state.start('loading_screen')
    }

};