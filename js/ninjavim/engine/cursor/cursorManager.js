function CursorManager(game, numberOfColumns, numberOfRows, config) {
    this.game = game;
    this.config = config;
    this.cursor = {};
    this.currentCursorLocation = {column: 0, row: 0};
    this.rightBorder = numberOfColumns-1;
    this.bottomBorder = numberOfRows-1;
}

CursorManager.prototype = {
    createSprite: function (width, height) {
        this.staticCursorWidth = width;
        this.staticCursorHeight = height;
        this._setupCursor();
        this._animateCursor();
    },
    getCursorLocation: function () {
        return this.currentCursorLocation;
    },
    getRightBorder: function() {
        return this.rightBorder;
    },
    getBottomBorder: function() {
        return this.bottomBorder;
    },
    moveCursorTo: function (column, row) {
        if(this._isCoordinateOutOfBorder(column, row)) {
            return;
        }
        this.currentCursorLocation = {column: column, row: row};
        this._drawCursor();
    },
    moveCursorUp: function () {
        if (this.currentCursorLocation.row == 0) {
            return;
        }
        --this.currentCursorLocation.row;
        this._drawCursor();
    },
    moveCursorDown: function () {
        if (this.currentCursorLocation.row == this.bottomBorder) {
            return;
        }
        ++this.currentCursorLocation.row;
        this._drawCursor();
    },
    moveCursorLeft: function () {
        if (this.currentCursorLocation.column == 0) {
            return;
        }
        --this.currentCursorLocation.column;
        this._drawCursor();
    },
    moveCursorRight: function () {
        if (this.currentCursorLocation.column == this.rightBorder) {
            return;
        }
        ++this.currentCursorLocation.column;
        this._drawCursor();
    },
    _drawCursor: function () {
        this.cursor.x = this.currentCursorLocation.column * this.staticCursorWidth;
        this.cursor.y = this.currentCursorLocation.row * this.staticCursorHeight;
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
    },
    _isCoordinateOutOfBorder: function(column, row) {
        return (column < 0
        || column > this.rightBorder
        || row < 0
        || row > this.bottomBorder);
    }
};

