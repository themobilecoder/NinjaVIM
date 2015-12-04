var CursorManager = CursorManager || {};

CursorManager = function (game) {
    this.game = game;
    this.cursor = {};
    this.currentCursorLocation = {column: 0, row: 0};
};

CursorManager.prototype = {
    loadAsset: function () {
        this.game.load.image('cursor', 'assets/star.png', 0, 0);
    },
    createSprite: function (width, height) {
        this.cursor = this.game.add.sprite(0, 0, 'cursor');
        this.cursor.alpha = 0.7;
        this.cursor.width = width;
        this.cursor.height = height;
    },
    getCursorLocation: function () {
        return this.currentCursorLocation;
    },
    moveCursorTo: function (column, row) {
        this.currentCursorLocation = {column: column, row: row};
        this._drawCursor();
    },
    moveCursorUp: function () {
        --this.currentCursorLocation.row;
        this._drawCursor();
    },
    moveCursorDown: function () {
        ++this.currentCursorLocation.row;
        this._drawCursor();
    },
    moveCursorLeft: function () {
        --this.currentCursorLocation.column;
        this._drawCursor();
    },
    moveCursorRight: function () {
        ++this.currentCursorLocation.column;
        this._drawCursor();
    },
    _drawCursor: function () {
        this.cursor.x = this.currentCursorLocation.column * this.cursor.width;
        this.cursor.y = this.currentCursorLocation.row * this.cursor.height;
    }

};

