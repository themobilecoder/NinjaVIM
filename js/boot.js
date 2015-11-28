var Game = function (game) {
};

Game.prototype = {
    preload: function () {
        this.game.load.image('sky', 'assets/sky.png');
        this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    },
    create: function () {
        this.game.add.sprite(0, 0, 'sky');

        this.player = this.game.add.sprite(32, this.game.world.height - 150, 'dude');

        this.player.animations.add('left', [0, 1, 2, 3], 10, true);
        this.player.animations.add('right', [5, 6, 7, 8], 10, true);

        this.cursors = this.game.input.keyboard.createCursorKeys();

        //Add a tile
        this.tiles = this.game.add.group();
        var tile = this.game.add.bitmapData(50, 50);
        tile.alpha = 1;
        tile.ctx.rect(5, 5, 45, 45);
        tile.ctx.fillStyle = '#888888';
        tile.ctx.globalAlpha = 0.2;
        tile.ctx.fill();

        tile.ctx.font = '30px Arial';
        tile.ctx.textAlign = 'center';
        tile.ctx.textBaseline = 'middle';
        tile.ctx.fillStyle = '#ffffff';
        tile.ctx.globalAlpha = 1;
        tile.ctx.fillText('A', 25, 25);
        this.tiles.create(0, 0, tile);

        var leftKey = this.game.input.keyboard.addKey(Phaser.KeyCode.RIGHT);
        leftKey.onDown.add(function () {
            this.player.animations.play('right');
            this.player.x = this.player.x + 10;
            this.player.animations.stop();
        }, this);

        var rightKey = this.game.input.keyboard.addKey(Phaser.KeyCode.LEFT);
        rightKey.onDown.add(function () {
            this.player.animations.play('left');
            this.player.x = this.player.x - 10;
            this.player.animations.stop();
        }, this);
    },
}
