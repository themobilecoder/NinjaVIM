var IntroGameState = function (game) {
    this.config = NinjaVim.config;
    this.game = game;
};

IntroGameState.prototype = {
    init: function () {
        this.context = this;
        this.grid_rows = this.config.numberOfRows;
        this.grid_columns = this.config.numberOfColumns;
        this.tile_width = this.game.world.width / this.grid_columns;
        this.tile_height = this.game.world.height / this.grid_rows;
        this.cursorManager = new CursorManager(this.game, this.grid_columns, this.grid_rows, this.config);
        this.keyboardHandlerManager = new KeyboardHandlerManager(this.context);
        this.keyboardHandlerManager.setKeyboard(new PhaserKeyboard(this.game));
    },
    preload: function () {
        this.cursorManager.loadAsset();
    },
    create: function () {
        this._createTiles();
        this._initializeVimContext();
        this._setupKeyboard();
        this.cursorManager.createSprite(this.tile_width, this.tile_height);
    },
    update: function () {
        this._shiftButtonProcessor();
    },
    _createTiles: function () {
        var tileBuilder = new DefaultTileBuilder(this.game, this.tile_width, this.tile_height, this.config);
        this.tilesManager = new TilesCharacterManager(this.game, this.grid_rows, this.grid_columns, tileBuilder);
        this.tilesManager.init();
    },
    _setupKeyboard: function () {
        this.vimContext.setKeyboardHandler(new NormalModeKeyboardHandler(this.vimContext));
    },
    _initializeVimContext: function() {
        this.vimContext = new VimContext(this.cursorManager, this.tilesManager, this.keyboardHandlerManager);
    },
    _shiftButtonProcessor: function () {
        this.keyboardHandlerManager.isShiftDown ? this.vimContext.setShiftPressed() : this.vimContext.setShiftReleased();
    }
};
