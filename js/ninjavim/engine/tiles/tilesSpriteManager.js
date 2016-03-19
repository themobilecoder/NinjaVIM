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
        if (column < 0 || column >= this.maxColumns || row < 0 || row >= this.maxRows) {
            return;
        }
        var key = this.helper.getKey(column, row);
        this.tiles[key] = '';
    }
};