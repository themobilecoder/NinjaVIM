function DestroyerWithSmoke(game, config) {
    this.config = config || GameConfig;
    this.game = game;
    this.column = 0;
    this.row = 0;

    this.width = this.game.width / this.config.numberOfColumns;
    this.height = this.game.height / this.config.numberOfRows;

}

DestroyerWithSmoke.prototype = {
    _playSmokeAnimation: function (spriteToDestroy) {
        var xLocation = spriteToDestroy.x;
        var yLocation = spriteToDestroy.y;
        var smokeSprite = this.game.add.sprite(xLocation, yLocation, this.config.smokeSprite);
        smokeSprite.width = this.width;
        smokeSprite.height = this.height;
        smokeSprite.anchor.set(0.5);
        smokeSprite.animations.add(this.config.smokeSprite);
        smokeSprite.animations.currentAnim.onComplete.add(function () {
            smokeSprite.destroy();
        });
        smokeSprite.animations.play(this.config.smokeSprite, 20, false);
    },
    _playSmokeSound: function () {
        this.game.add.audio(this.config.smokeAudio).play();
    },
    destroy : function(spriteToDestroy) {
        this._playSmokeAnimation(spriteToDestroy);
        this._playSmokeSound();
        spriteToDestroy.destroy();
    }
};
