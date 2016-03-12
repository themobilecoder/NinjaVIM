var NinjaVim = NinjaVim || {};

NinjaVim.config = GameConfig;

NinjaVim.game = new Phaser.Game(
    NinjaVim.config.gameWidth,
    NinjaVim.config.gameHeight,
    Phaser.AUTO,
    ''
);

if(NinjaVim.config.debugMode) {
    debug();
}

NinjaVim.game.state.add('intro', IntroGameState);
NinjaVim.game.state.start('intro');

