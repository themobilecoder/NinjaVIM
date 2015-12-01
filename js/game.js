var Game = function (game) {
};

Game.prototype = {
    init: function () {
        this.grid_rows = 20;
        this.grid_columns = 20;
        this.tile_width = this.game.world.width / this.grid_rows;
        this.tile_height = this.game.world.height / this.grid_columns;
        this.tiles = {};
        this.cursorManager = new CursorManager(this.game);
    },
    preload: function () {
        this.game.stage.backgroundColor = '#FFFFFF';
        this.cursorManager.loadAsset();
    },
    create: function () {
        this.tileManager = new TilesManager(this.game, this.grid_rows, this.grid_columns, this.tiles);
        this.createTiles();
        this.setupKeyboardHandling();

        this.cursorManager.createSprite(this.tile_width, this.tile_height);
        this.cursor = this.cursorManager.getCursor();

    },
    setupKeyboardHandling: function () {
        var rightKey = this.game.input.keyboard.addKey(Phaser.KeyCode.L);
        rightKey.onDown.add(function () {
            this.cursor.x = this.cursor.x + this.tile_width;
        }, this);

        var leftKey = this.game.input.keyboard.addKey(Phaser.KeyCode.H);
        leftKey.onDown.add(function () {
            this.cursor.x = this.cursor.x - this.tile_width;
        }, this);

        var upKey = this.game.input.keyboard.addKey(Phaser.KeyCode.K);
        upKey.onDown.add(function () {
            this.cursor.y = this.cursor.y - this.tile_height;
        }, this);

        var downKey = this.game.input.keyboard.addKey(Phaser.KeyCode.J);
        downKey.onDown.add(function () {
            this.cursor.y = this.cursor.y + this.tile_height;
        }, this);
    },
    createTiles: function () {
        this.tileManager.init();
    },
    update: function () {

    }
};
