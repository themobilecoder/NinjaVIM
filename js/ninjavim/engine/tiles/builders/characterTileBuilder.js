function CharacterTileBuilder(game, config) {
    BaseTileBuilder.call(this, game, config);
}

CharacterTileBuilder.prototype = Object.create(BaseTileBuilder.prototype);

CharacterTileBuilder.prototype.build = function () {
    this.characterSize = '20px';
    this.font = 'Arial';
    var tile = this.game.add.bitmapData(this.width, this.height);

    tile.alpha = 1;
    tile.character = this.character;
    tile.ctx.font = 'bold ' + this.characterSize + ' ' + this.font;
    tile.ctx.textAlign = 'center';
    tile.ctx.textBaseline = 'middle';
    tile.ctx.fillStyle = '#000000';
    tile.ctx.fillText(this.character, this.width / 2, this.height / 2);

    var xPosition = this.width * this.column + this.width / 2;
    var yPosition = this.height * this.row + this.height / 2;
    var sprite = this.game.add.sprite(xPosition, yPosition, tile);
    sprite.anchor.set(0.5);
    return sprite;
};


