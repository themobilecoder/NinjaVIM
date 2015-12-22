var Game = function (game) {
};

Game.prototype = {
    init: function () {
        this.context = this;
        this.grid_rows = 20;
        this.grid_columns = 20;
        this.tile_width = this.game.world.width / this.grid_rows;
        this.tile_height = this.game.world.height / this.grid_columns;
        this.cursorManager = new CursorManager(this.game, this.grid_columns, this.grid_rows);
        this.keyboardHandlerManager = new KeyboardHandlerManager(this.context);
        this.keyboardHandlerManager.setKeyboard(new PhaserKeyboard(this.game));
        this.vimContext = new VimContext(this.cursorManager, null, this.keyboardHandlerManager);
    },
    preload: function () {
        this.game.stage.backgroundColor = '#FFFFFF';
        this.cursorManager.loadAsset();
    },
    create: function () {
        this._createTiles();
        this._setupKeyboard();
        this.cursorManager.createSprite(this.tile_width, this.tile_height);
    },
    update: function () {

    },
    _createTiles: function () {
        this.tilesManager = new TilesManager(this.game, this.grid_rows, this.grid_columns);
        this.tilesManager.init();
    },
    _setupKeyboard: function () {
        this.vimContext.setKeyboardHandler(new NormalModeKeyboardHandler(this.vimContext));
    }
};
