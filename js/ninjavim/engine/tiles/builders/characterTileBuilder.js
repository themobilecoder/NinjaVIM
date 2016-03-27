function CharacterTileBuilder(game, config) {
    this.game = game;
    this.config = config || GameConfig;
    this.tile = {};
    this.character = '';
    this.characterSize = '20px';
    this.font = 'Arial';
    this.width = this.game.width / this.config.numberOfColumns;
    this.height = this.game.height / this.config.numberOfRows;
}
CharacterTileBuilder.prototype = {
    withCharacter: function (character) {
        this.character = character;
        return this;
    },
    build: function () {
        this.tile = this.game.add.bitmapData(this.width, this.height);
        this.tile.alpha = 1;

        this.tile.character = this.character;
        this.tile.ctx.font = 'bold ' + this.characterSize + ' ' + this.font;
        this.tile.ctx.textAlign = 'center';
        this.tile.ctx.textBaseline = 'middle';
        this.tile.ctx.fillStyle = '#000000';
        this.tile.ctx.fillText(this.character, this.width / 2, this.height / 2);

        var xPosition = this.width * this.column + this.width / 2;
        var yPosition = this.height * this.row + this.height / 2;
        var sprite = this.game.add.sprite(xPosition, yPosition, this.tile);
        sprite.anchor.set(0.5);
        return sprite;
    },
    setLocation : function(column, row) {
        this.column = column;
        this.row = row;
        return this;
    },
    setSize : function(width, height) {
        this.width = width;
        this.height = height;
        return this;
    },
};


