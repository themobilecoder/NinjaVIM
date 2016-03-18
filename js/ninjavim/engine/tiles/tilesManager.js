function TilesCharacterManager(game, maxColumns, maxRows, builder) {
    this.tiles = {};
    this.characters = {};
    this.game = game;
    this.columns = maxColumns;
    this.rows = maxRows;
    this.tileWidth = game.world.width / maxColumns;
    this.tileHeight = game.world.height / maxRows;
    this.builder = builder || new DefaultTileBuilder(game, this.tileWidth, this.tileHeight);
    this.tilesContainer = this.game.add.group();
}

TilesCharacterManager.prototype = {
    init: function () {
        for (var column = 0; column < this.columns; ++column) {
            for (var row = 0; row < this.rows; ++row) {
                this.setCharacterToTile("", column, row);
                this.draw(column, row, this.builder);
            }
        }
    },
    setCharacterToTile: function (character, column, row) {
        column = this._normalizeInputColumn(column);
        row = this._normalizeInputRow(row);
        var key = this._getKey(column, row);
        this.characters[key] = character;
        return character;
    },
    getCharacterFromLocation: function (column, row) {
        var character = this.characters[this._getKey(column, row)];
        return character != undefined ? character : '';
    },
    draw: function (column, row, builder) {
        builder = builder || new DefaultTileBuilder(this.game, this.tileWidth, this.tileHeight);
        var key = this._getKey(column, row);
        var currentTile = this.tiles[key];
        if (currentTile != undefined) currentTile.clear();

        var tileImage = builder.setCharacter(this.characters[key]).build();
        this.tiles[key] = tileImage;
        this.tilesContainer.create(column * this.tileWidth, row * this.tileHeight, tileImage);
    },
    _getKey: function (column, row) {
        if (parseInt(column) >= 0 && parseInt(column) < 100 && parseInt(row) >= 0 && parseInt(column) < 100) {
            if (column < 10) {
                column = '0' + column.toString()
            } else {
                column = column.toString();
            }
            if (row < 0) {
                row = '0' + column.toString()
            } else {
                row = row.toString();
            }
            return column + row;
        }
    },
    _normalizeInputColumn: function (column) {
        if (column >= this.columns) {
            return this.columns - 1;
        } else if (column < 0) {
            return 0;
        } else {
            return column;
        }
    },
    _normalizeInputRow: function (row) {
        if (row >= this.rows) {
            return this.rows - 1;
        } else if (row < 0) {
            return 0;
        } else {
            return row;
        }
    }
};
