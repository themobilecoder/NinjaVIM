var NinjaVim = NinjaVim || {};

NinjaVim.config = GameConfig;

NinjaVim.game = new Phaser.Game(
    NinjaVim.config.gameWidth,
    NinjaVim.config.gameHeight,
    Phaser.AUTO,
    ''
);

NinjaVim.game.state.add('Game', Game);
NinjaVim.game.state.start('Game');

