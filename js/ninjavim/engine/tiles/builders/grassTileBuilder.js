function GrassTileBuilder(game, config) {
    BaseTileBuilder.call(this, game, config);
}

GrassTileBuilder.prototype = Object.create(BaseTileBuilder.prototype);

GrassTileBuilder.prototype.build = function () {
    var xPosition = this.width * this.column + this.width / 2;
    var yPosition = this.height * this.row + this.height / 2;
    var sprite = this.game.add.sprite(xPosition, yPosition, this.config.grassSprite);
    sprite.anchor.set(0.5);
    sprite.width = this.width;
    sprite.height = this.height;
    return sprite;
};
