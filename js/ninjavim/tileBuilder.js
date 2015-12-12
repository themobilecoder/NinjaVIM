function TileBuilder(game, width, height) {
    this.game = game;
    this.tile = {};
    this.letter = '';
    this.letterSize = '20px';
    this.font = 'Arial';
    this.width = width;
    this.height = height;
}
TileBuilder.prototype = {
    setLetter: function (letter) {
        this.letter = letter;
        return this;
    },
    build: function () {
        this.tile = this.game.add.bitmapData(this.width, this.height);
        this.tile.alpha = 1;
        this.tile.ctx.rect(0, 0, this.width, this.height);
        this.tile.ctx.fillStyle = '#DDDDDD';
        this.tile.ctx.globalAlpha = 0.2;
        this.tile.ctx.fill();

        this.tile.letter = this.letter;
        this.tile.ctx.font = this.letterSize + ' ' + this.font;
        this.tile.ctx.textAlign = 'center';
        this.tile.ctx.textBaseline = 'middle';
        this.tile.ctx.fillStyle = '#000000';
        this.tile.ctx.globalAlpha = 1;
        this.tile.ctx.fillText(this.letter, this.width / 2, this.height / 2);
        return this.tile;
    }
};


