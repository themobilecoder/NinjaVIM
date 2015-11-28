var NinjaVim = NinjaVim || {};

NinjaVim.game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var platforms;
var player;
var cursors;

NinjaVim.game.state.add('Game', Game);
NinjaVim.game.state.start('Game');


