function CursorSpriteManager(game, config) {
    this.game = game;
    this.config = config;
    this.cursor = {};
}

CursorSpriteManager.prototype = {
    createSprite: function (width, height) {
        this.staticCursorWidth = width;
        this.staticCursorHeight = height;
        this._setupCursor();
        this._animateCursor();
    },
    moveCursorTo: function (column, row) {
        this._drawCursor(column, row);
    },
    _drawCursor: function (column, row) {
        this.cursor.x = column * this.staticCursorWidth;
        this.cursor.y = row * this.staticCursorHeight;
    },
    _setupCursor: function () {
        this.cursor = this.game.add.sprite(0, 0, this.config.cursorSprite);
        this.cursor.alpha = this.config.cursorAlpha;
        this.cursor.width = this.staticCursorWidth;
        this.cursor.height = this.staticCursorHeight;
    },
    _animateCursor: function () {
        this.cursor.animations.add(this.config.cursorSprite);
        this.cursor.animations.play(this.config.cursorSprite, 10, true);
    }
};

