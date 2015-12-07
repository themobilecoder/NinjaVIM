var Game = function (game) {
};

Game.prototype = {
    init: function () {
        this.context = this;
        this.grid_rows = 20;
        this.grid_columns = 20;
        this.tile_width = this.game.world.width / this.grid_rows;
        this.tile_height = this.game.world.height / this.grid_columns;
        this.tiles = {};
        this.cursorManager = new CursorManager(this.game);
        this.vimEngine = new VimEngine(this.cursorManager);
        this.keyboardHandlerManager = new KeyboardHandlerManager(this.context);
    },
    preload: function () {
        this.game.stage.backgroundColor = '#FFFFFF';
        this.cursorManager.loadAsset();
    },
    create: function () {
        this.tileManager = new TilesManager(this.game, this.grid_rows, this.grid_columns, this.tiles);
        this.createTiles();
        var phaserKeyboard = new PhaserKeyboard(this.game);
        this.keyboardHandlerManager.setKeyboard(phaserKeyboard);
        var normalModeKeyboardHandler = new NormalModeKeyboardHandler(this.vimEngine);
        this.keyboardHandlerManager.setKeyHandlers(normalModeKeyboardHandler);
        this.cursorManager.createSprite(this.tile_width, this.tile_height);
    },
    createTiles: function () {
        this.tileManager.init();
    },
    update: function () {

    }
};
