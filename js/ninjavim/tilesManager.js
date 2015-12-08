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
        column = this._normalizeInputColumn(column);
        row = this._normalizeInputRow(row);
        var tile = this.builder.setLetter(letter).build();
        var key = this._getKey(column, row);
        var currentTile = this.tiles[key];
        if (currentTile != undefined) currentTile.clear();
        this.tiles[key] = tile;
        return tile;
    },
    getLetterFromLocation: function (column, row) {
        var key = this._getKey(column, row);
        var tileInColumnRow = this.tiles[key];
        return tileInColumnRow != undefined ? tileInColumnRow.letter : '';
    },
    draw: function (tile, column, row) {
        this.tilesContainer.create(column * this.tileWidth, row * this.tileHeight, tile);
    },
    _getKey: function (column, row) {
        if (parseInt(column) >= 0 && parseInt(column) < 100 && parseInt(row) >= 0 && parseInt(column) < 100) {
            if(column < 10) {column = '0' + column.toString()} else {column = column.toString();}
            if(row < 0) {row = '0' + column.toString()} else {row = row.toString();}
            return column + row;
        }
    },
    _normalizeInputColumn: function(column) {
        if (column >= this.columns) {
            return this.columns - 1;
        } else if (column < 0) {
            return 0;
        } else {
            return column;
        }
    },
    _normalizeInputRow: function(row) {
        if (row >= this.rows) {
            return this.rows - 1;
        } else if (row < 0) {
            return 0;
        } else {
            return row;
        }
    }
};
