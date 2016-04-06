function CoinTileBuilder(game, config) {
    BaseTileBuilder.call(this, game, config);
}

CoinTileBuilder.prototype = Object.create(BaseTileBuilder.prototype);

CoinTileBuilder.prototype.build = function () {
    var xPosition = this.width * this.column + this.width / 2;
    var yPosition = this.height * this.row + this.height / 1.15;
    var sprite = this.game.add.sprite(xPosition, yPosition, this.config.coinSprite);
    sprite.animations.add(this.config.coinSprite);
    sprite.animations.play(this.config.coinSprite, 10, true);
    sprite.anchor.set(0.5);
    return sprite;
};