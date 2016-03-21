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
        var smokeSprite = this.game.add.sprite(xLocation, yLocation, 'smoke');
        smokeSprite.width = this.width;
        smokeSprite.height = this.height;
        smokeSprite.animations.add('smoke');
        smokeSprite.animations.currentAnim.onComplete.add(function () {
            smokeSprite.destroy();
        });
        smokeSprite.animations.play('smoke', 20, false);
    },
    _playSmokeSound: function () {
        this.game.add.audio('smoke').play();
    },
    destroy : function(spriteToDestroy) {
        this._playSmokeAnimation(spriteToDestroy);
        this._playSmokeSound();
        spriteToDestroy.destroy();
    }
};
