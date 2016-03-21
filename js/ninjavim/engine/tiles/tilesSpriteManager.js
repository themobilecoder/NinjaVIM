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
    buildSprite: function (column, row, builder) {
        if (column < 0 || column >= this.maxColumns || row < 0 || row >= this.maxRows) {
            return;
        }
        var key = this.helper.getKey(column, row);
        if (this.tiles[key]) {
            this.tiles[key].destroy();
        }

        builder.setLocation(column, row);
        this.tiles[key] = builder.build();
    },
    destroySprite : function(column, row, destroyer) {
        var key = this.helper.getKey(column, row);
        var currentSpriteInTile = this.tiles[key];
        if (currentSpriteInTile) {
            this.tiles[key] = undefined;
            if (!destroyer) {
                currentSpriteInTile.destroy();
            } else {
                destroyer.destroy(currentSpriteInTile);
            }
        }
    }
};