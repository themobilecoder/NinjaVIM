function CursorManager(game, numberOfColumns, numberOfRows, config) {
    this.game = game;
    this.config = config;
    this.cursor = {};
    this.currentCursorLocation = {column: 0, row: 0};
    this.rightBorder = numberOfColumns-1;
    this.bottomBorder = numberOfRows-1;
}

CursorManager.prototype = {
    loadAsset: function () {
        var cursorAsset = this.config.cursorImage;
        this.game.load.image('cursor', cursorAsset, 0, 0);
    },
    createSprite: function (width, height) {
        this.cursor = this.game.add.sprite(0, 0, 'cursor');
        this.cursor.alpha = this.config.cursorAlpha;
        this.cursor.width = width;
        this.cursor.height = height;
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
        this.cursor.x = this.currentCursorLocation.column * this.cursor.width;
        this.cursor.y = this.currentCursorLocation.row * this.cursor.height;
    },
    _isCoordinateOutOfBorder: function(column, row) {
        return (column < 0
        || column > this.rightBorder
        || row < 0
        || row > this.bottomBorder);
    }
};

