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
        this._prepareBackground();
        this._generateSpritesToCollect();
        this.cursorManager.createSprite(this.tileWidth, this.tileHeight);
        this.startGameTime();

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
    _generateSpritesToCollect: function () {
        var tileBuilder = new CoinTileBuilder(this.game, this.config);
        for (var col = 0; col < this.config.numberOfColumns; ++col) {
            for (var row = 0; row < this.config.numberOfRows; ++row) {
                this.tilesSpriteManager.buildSprite(col, row, tileBuilder);
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
            this._showMessageBox();
        }
    },
    _prepareBackground : function() {
        var hjkl = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, this.config.hjklSprite);
        hjkl.anchor.set(0.5);
        hjkl.alpha = 0.7;
    },
    _showMessageBox: function () {
        var messageBox = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'message_box');
        messageBox.originalWidth = messageBox.width;
        messageBox.originalHeight = messageBox.height;
        messageBox.anchor.set(0.5);
        messageBox.alpha = 0.9;
        messageBox.scale.setTo(0.3);

        var text = "Total Time: " + this.getElapsedTimeInSeconds() + 's';
        var message = this.game.add.text(0, 0, text, {font: '64px Arial', fill: '#FFFFFF', wordWrap: true, wordWrapWidth: messageBox.originalWidth, align: 'center'});
        message.anchor.set(0.5);
        messageBox.addChild(message);
    }
};
