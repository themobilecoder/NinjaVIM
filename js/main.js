var NinjaVim = NinjaVim || {};

NinjaVim.game = new Phaser.Game(800, 800, Phaser.AUTO, '');

NinjaVim.game.state.add('Game', Game);
NinjaVim.game.state.start('Game');


