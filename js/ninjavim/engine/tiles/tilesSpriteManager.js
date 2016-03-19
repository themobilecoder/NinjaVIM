function TilesSpriteManager(maxColumns, maxRows) {
    this.maxColumns = maxColumns;
    this.maxRows = maxRows;
    this.tiles = {};
    this.helper = new TilesManagementHelper(maxColumns, maxRows);
}

TilesSpriteManager.prototype = {
    getSpriteFromLocation: function (column, row) {
        var key = this.helper.getKey(column, row);
        return this.tiles[key];
    },
    buildSprite: function (column, row) {
        column = this.helper.normalizeInputColumn(column);
        row = this.helper.normalizeInputColumn(row);
        var key = this.helper.getKey(column, row);
        this.tiles[key] = '';
    }
};