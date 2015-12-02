var TilesManager = TilesManager || {};

TilesManager = function (game, maxColumns, maxRows, tiles, builder) {
    this.tiles = tiles;
    this.game = game;
    this.columns = maxColumns;
    this.rows = maxRows;
    this.tileWidth = game.world.width / maxColumns;
    this.tileHeight = game.world.height / maxRows;
    this.builder = builder || new TileBuilder(game, this.tileWidth, this.tileHeight);
    this.tilesContainer = this.game.add.group();
};

TilesManager.prototype = {
    init: function () {
        for (var column = 0; column < this.columns; ++column) {
            for (var row = 0; row < this.rows; ++row) {
                var tile = this.setLetterToColumn("", column, row);
                this.draw(tile, column, row);
            }
        }
    },
    setLetterToColumn: function (letter, column, row) {
        var tile = this.builder.setLetter(letter).build();
        var key = this.getKey(column, row);
        var currentTile = this.tiles[key];
        if (currentTile != undefined) currentTile.clear();
        this.tiles[key] = tile;
        return tile;
    },
    getLetterFromColumn: function (column, row) {
        var key = this.getKey(column, row);
        return this.tiles[key].letter;
    },
    draw: function (tile, column, row) {
        this.tilesContainer.create(column * this.tileWidth, row * this.tileHeight, tile);
    },
    getKey: function (column, row) {
        if (parseInt(column) >= 0 && parseInt(column) < 100 && parseInt(row) >= 0 && parseInt(column) < 100) {
            if(column < 10) {column = '0' + column.toString()} else {column = column.toString();}
            if(row < 0) {row = '0' + column.toString()} else {row = row.toString();}
            return column + row;
        }
    }
};
