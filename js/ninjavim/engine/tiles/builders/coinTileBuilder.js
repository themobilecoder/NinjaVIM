function CoinTileBuilder(game, config) {
    this.config = config || GameConfig;
    this.game = game;
    this.column = 0;
    this.row = 0;

    this.width = this.game.width / this.config.numberOfColumns;
    this.height = this.game.height / this.config.numberOfRows;
}

CoinTileBuilder.prototype = {
    build : function() {
        var xPosition = this.width * this.column + this.width / 2;
        var yPosition = this.height * this.row + this.height / 1.15;
        var sprite = this.game.add.sprite(xPosition, yPosition, this.config.coinSprite);
        sprite.animations.add(this.config.coinSprite);
        sprite.animations.play(this.config.coinSprite, 10, true);
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