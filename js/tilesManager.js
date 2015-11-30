var TilesManager = TilesManager || {};

TilesManager = function (game, maxColumns, maxRows, builder) {
    this.game = game;
    this.columns = maxColumns;
    this.rows = maxRows;
    this.tileWidth = game.world.width / maxColumns;
    this.tileHeight = game.world.height / maxRows;
    this.builder = builder || new TileBuilder(game, this.tileWidth, this.tileHeight);
    this.tilesContainer = this.game.add.group();
};

TilesManager.prototype = {
    load: function () {

    },
    draw: function () {
        this.builder.build();

        for (var x = 0; x < this.columns; ++x)
            for (var y = 0; y < this.rows; ++y) {
                this.builder.setLetter("B");
                var tile = this.builder.build();
                this.tilesContainer.create(x * this.tileWidth, y * this.tileHeight, tile);
            }
    }
};
