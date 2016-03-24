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
        this.tilesSpriteManager = new TilesSpriteManager(this.config.numberOfColumns, this.config.numberOfRows);
        this.destroyerWithSmoke = new DestroyerWithSmoke(this.game, this.config);

        this.game.stage.backgroundColor = this.config.backgroundColor;
    },
    create: function () {
        this._initializeVimContext();
        this._generateStarsToCollect();
        this.cursorManager.createSprite(this.tileWidth, this.tileHeight);

        this.gameIsFinished = false;
    },
    update: function () {
        this._shiftButtonProcessor();
        this._cursorAndStarCollisionProcessor();
        this._finishGameProcessor();
    },
    _initializeVimContext: function() {
        this.vimContext = new VimContext(this.cursorManager, this.tilesCharacterManager, this.keyboardHandlerManager);
        this.vimContext.setKeyboardHandler(new NormalModeKeyboardHandler(this.vimContext));
    },
    _shiftButtonProcessor: function () {
        this.keyboardHandlerManager.isShiftDown ? this.vimContext.setShiftPressed() : this.vimContext.setShiftReleased();
    },
    _cursorAndStarCollisionProcessor: function () {
        var cursorColumn = this.cursorManager.getCursorLocation().column;
        var cursorRow = this.cursorManager.getCursorLocation().row;
        if (this.tilesSpriteManager.getSpriteFromLocation(cursorColumn, cursorRow)) {
            this.tilesSpriteManager.destroySprite(cursorColumn, cursorRow, this.destroyerWithSmoke);
        }
    },
    _generateStarsToCollect: function () {
        var starTileBuilder = new StarTileBuilder(this.game, this.config);
        for (var col = 0; col < this.config.numberOfColumns; ++col) {
            for (var row = 0; row < this.config.numberOfRows; ++row) {
                this.tilesSpriteManager.buildSprite(col, row, starTileBuilder);
            }
        }
    },
    _restartGame: function() {
        this.game.state.start('intro');
    },
    _finishGameProcessor: function () {
        if (this.tilesSpriteManager.isEmpty() && !this.gameIsFinished) {
            this.gameIsFinished = true;
            this.game.time.events.add(Phaser.Timer.SECOND * 3, this._restartGame, this);
        }
    }
};
