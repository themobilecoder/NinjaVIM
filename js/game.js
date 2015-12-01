var Game = function (game) {
};

Game.prototype = {
    init: function () {
        this.grid_rows = 20;
        this.grid_columns = 20;
        this.tile_width = this.game.world.width / this.grid_rows;
        this.tile_height = this.game.world.height / this.grid_columns;
        this.tiles = {};
    },
    preload: function () {
        this.game.load.image('cursor', 'assets/star.png', 0, 0);
        this.game.stage.backgroundColor = '#FFFFFF';
    },
    create: function () {
        //this.tiles = this.game.add.group();
        this.tileManager = new TilesManager(this.game, this.grid_rows, this.grid_columns, this.tiles);
        this.createTiles();
        this.setupKeyboardHandling();

        this.player = this.game.add.sprite(0, 0, 'cursor');
        this.player.alpha = 0.7;
        this.player.width = this.tile_width;
        this.player.height = this.tile_height;

    },
    setupKeyboardHandling: function () {
        var rightKey = this.game.input.keyboard.addKey(Phaser.KeyCode.L);
        rightKey.onDown.add(function () {
            this.player.x = this.player.x + this.tile_width;
        }, this);

        var leftKey = this.game.input.keyboard.addKey(Phaser.KeyCode.H);
        leftKey.onDown.add(function () {
            this.player.x = this.player.x - this.tile_width;
        }, this);

        var upKey = this.game.input.keyboard.addKey(Phaser.KeyCode.K);
        upKey.onDown.add(function () {
            this.player.y = this.player.y - this.tile_height;
        }, this);

        var downKey = this.game.input.keyboard.addKey(Phaser.KeyCode.J);
        downKey.onDown.add(function () {
            this.player.y = this.player.y + this.tile_height;
        }, this);
    },
    createTiles: function () {
        this.tileManager.init();
    },
    update: function () {

    }
};
