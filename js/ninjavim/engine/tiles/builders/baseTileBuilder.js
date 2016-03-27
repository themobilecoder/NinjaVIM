function BaseTileBuilder(game, config) {
    this.config = config || GameConfig;
    this.game = game;
    this.column = 0;
    this.row = 0;

    this.character = '';

    this.width = this.game.width / this.config.numberOfColumns;
    this.height = this.game.height / this.config.numberOfRows;
}

BaseTileBuilder.prototype = {
    withLocation : function(column, row) {
        this.column = column;
        this.row = row;
        return this;
    },
    withSize : function(width, height) {
        this.width = width;
        this.height = height;
        return this;
    },
    withCharacter : function(character) {
        this.character = character;
    },

    build : function() {
    }
};