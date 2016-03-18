function DefaultTileBuilder(game, width, height) {
    this.game = game;
    this.tile = {};
    this.character = '';
    this.characterSize = '20px';
    this.font = 'Arial';
    this.width = width;
    this.height = height;
}
DefaultTileBuilder.prototype = {
    setCharacter: function (character) {
        this.character = character;
        return this;
    },
    build: function () {
        this.tile = this.game.add.bitmapData(this.width, this.height);
        this.tile.alpha = 1;
        this.tile.ctx.rect(0, 0, this.width, this.height);
        this.tile.ctx.fillStyle = '#DDDDDD';
        this.tile.ctx.fill();

        this.tile.character = this.character;
        this.tile.ctx.font = this.characterSize + ' ' + this.font;
        this.tile.ctx.textAlign = 'center';
        this.tile.ctx.textBaseline = 'middle';
        this.tile.ctx.fillStyle = '#000000';
        this.tile.ctx.fillText(this.character, this.width / 2, this.height / 2);
        return this.tile;
    }
};


