function DestroyerWithCoinSoundEffect(game, config) { this.config = config || GameConfig;
    this.game = game;
    this.column = 0;
    this.row = 0;

    this.width = this.game.width / this.config.numberOfColumns;
    this.height = this.game.height / this.config.numberOfRows;

}

DestroyerWithCoinSoundEffect.prototype = {
    destroy : function(spriteToDestroy) {
        this._playCoinSound();
        var tween = this.game.add.tween(spriteToDestroy);
        tween.onComplete.add(function() {
            spriteToDestroy.destroy();
        }, this);
        tween.to({y: spriteToDestroy.y - 80, alpha: 0.55}, 400, 'Cubic', true);
    },
    _playCoinSound: function () {
        this.game.add.audio(this.config.coinAudio).play();
    }
};
