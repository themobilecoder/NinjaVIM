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
        console.log(this.tiles);
        for (var x = 0; x < this.columns; ++x) {
            for (var y = 0; y < this.rows; ++y) {
                this.update("", x, y);
            }
        }
    },
    update: function (letter, x, y) {
        var tile = this.builder.setLetter(letter).build();
        var key = this.getKey(x, y);
        var currentTile = this.tiles[key];
        if (currentTile != undefined) currentTile.clear();
        this.tiles[key] = tile;
        this.draw(tile, x, y);
    },
    draw: function (tile, x, y) {
        this.tilesContainer.create(x * this.tileWidth, y * this.tileHeight, tile);
    },
    getKey: function (column, row) {
        if (parseInt(column) >= 0 && parseInt(column) < 100 && parseInt(row) >= 0 && parseInt(column) < 100) {
            if(column < 10) {column = '0' + column.toString()} else {column = column.toString();}
            if(row < 0) {row = '0' + column.toString()} else {row = row.toString();}
            return column + row;
        }
    }
};
