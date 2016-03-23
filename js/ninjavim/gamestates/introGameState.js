var IntroGameState = function (game) {
    this.config = NinjaVim.config;
    this.game = game;
};

IntroGameState.prototype = {
    init: function () {
        this.context = this;
        this.numberOfColumns = this.config.numberOfColumns;
        this.numberOfRows = this.config.numberOfRows;
        this.tileWidth = this.game.world.width / this.numberOfColumns;
        this.tileHeight = this.game.world.height / this.numberOfRows;
        this.cursorManager = new CursorManager(this.game, this.numberOfColumns, this.numberOfRows, this.config);
        this.keyboardHandlerManager = new KeyboardHandlerManager(this.context, new PhaserKeyboard(this.game));
        this.tilesCharacterManager = new TilesCharacterManager(this.numberOfRows, this.numberOfColumns);
        this.vimContext = new VimContext(this.cursorManager, this.tilesCharacterManager, this.keyboardHandlerManager);
    },
    preload: function () {
        this._initializeGameAssets();
    },
    create: function () {
        this._initializeVimContext();
        this.cursorManager.createSprite(this.tileWidth, this.tileHeight);
    },
    update: function () {
        this._shiftButtonProcessor();
    },
    _initializeGameAssets: function () {
        this.cursorManager.loadAsset();
        this.game.stage.backgroundColor = this.config.backgroundColor;
    },
    _initializeVimContext: function() {
        this.vimContext = new VimContext(this.cursorManager, this.tilesCharacterManager, this.keyboardHandlerManager);
        this.vimContext.setKeyboardHandler(new NormalModeKeyboardHandler(this.vimContext));
    },
    _shiftButtonProcessor: function () {
        this.keyboardHandlerManager.isShiftDown ? this.vimContext.setShiftPressed() : this.vimContext.setShiftReleased();
    }
};
