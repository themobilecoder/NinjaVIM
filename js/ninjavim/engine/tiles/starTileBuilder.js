function StarTileBuilder(game, config) {
    this.config = config || GameConfig;
    this.game = game;
    this.column = 0;
    this.row = 0;

    this.width = this.game.width / this.config.numberOfColumns;
    this.height = this.game.height / this.config.numberOfRows;
}

StarTileBuilder.prototype = {
    build : function() {
        var xPosition = this.width * this.column;
        var yPosition = this.height * this.row;
        var sprite = this.game.add.sprite(xPosition, yPosition, this.config.starSprite);
        sprite.width = this.width;
        sprite.height = this.height;
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
    }
};