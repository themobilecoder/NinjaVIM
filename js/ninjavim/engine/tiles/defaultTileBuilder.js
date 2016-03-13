function DefaultTileBuilder(game, width, height, config) {
    this.config = config;
    this.game = game;
    this.tile = {};
    this.letter = '';
    this.letterSize = this.config.fontSize;
    this.font = this.config.fontStyle;
    this.width = width;
    this.height = height;
}
DefaultTileBuilder.prototype = {
    setLetter: function (letter) {
        this.letter = letter;
        return this;
    },
    build: function () {
        this.tile = this.game.add.bitmapData(this.width, this.height);
        this.tile.alpha = this.config.tileAlpha;
        this.tile.ctx.rect(0, 0, this.width, this.height);
        this.tile.ctx.fillStyle = this.config.tileBackgroundColor;
        this.tile.ctx.fill();

        this.tile.letter = this.letter;
        this.tile.ctx.font = this.letterSize + ' ' + this.font;
        this.tile.ctx.textAlign = 'center';
        this.tile.ctx.textBaseline = 'middle';
        this.tile.ctx.fillStyle = '#000000';
        this.tile.ctx.fillText(this.letter, this.width / 2, this.height / 2);
        return this.tile;
    }
};


