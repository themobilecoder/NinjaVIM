var Game = function (game) {
};

Game.prototype = {
    init: function() {
        this.grid_rows = 20;
        this.grid_columns = 20;
        this.tile_width = this.game.world.width / this.grid_rows;
        this.tile_height = this.game.world.height / this.grid_columns;
    },
    preload: function () {
        this.game.load.image('dude', 'assets/star.png', 0, 0);
    },
    create: function () {
        this.game.stage.backgroundColor = '#CDCDCD';

        this.tiles = this.game.add.group();
        this.createTiles()

        var rightKey = this.game.input.keyboard.addKey(Phaser.KeyCode.RIGHT);
        rightKey.onDown.add(function () {
            this.player.x = this.player.x + this.tile_width;
        }, this);

        var leftKey = this.game.input.keyboard.addKey(Phaser.KeyCode.LEFT);
        leftKey.onDown.add(function () {
            this.player.x = this.player.x - this.tile_width;
        }, this);

        var upKey = this.game.input.keyboard.addKey(Phaser.KeyCode.UP);
        upKey.onDown.add(function () {
            this.player.y = this.player.y - this.tile_height;
        }, this);

        var downKey = this.game.input.keyboard.addKey(Phaser.KeyCode.DOWN);
        downKey.onDown.add(function () {
            this.player.y = this.player.y + this.tile_height;
        }, this);

        this.player = this.game.add.sprite(0,0,'dude');
        this.player.alpha = 0.7;
        this.player.width = this.tile_width;
        this.player.height = this.tile_height;

    },

    createTiles: function () {
        for (var x = 0; x < this.grid_rows;  ++x) {
            for (var y = 0; y < this.grid_columns; ++y) {
                var tile = this.game.add.bitmapData(this.tile_width, this.tile_height);
                tile.alpha = 1;
                tile.ctx.rect(0, 0, this.tile_width, this.tile_height);
                tile.ctx.fillStyle = '#CC0000';
                tile.ctx.globalAlpha = 0.2;
                tile.ctx.fill();

                tile.ctx.font = '20px Arial';
                tile.ctx.textAlign = 'center';
                tile.ctx.textBaseline = 'middle';
                tile.ctx.fillStyle = '#000000';
                tile.ctx.globalAlpha = 1;
                tile.ctx.fillText(this.getRandomLetter(), this.tile_width/2, this.tile_height/2);

                this.tiles.create(x * this.tile_width, y * this.tile_height, tile);
            }
        }
    },
    getRandomLetter: function() {
        return String.fromCharCode(97 + Math.floor(Math.random() * 26));

    }
}
