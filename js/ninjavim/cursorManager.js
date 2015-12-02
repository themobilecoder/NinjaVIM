var CursorManager = CursorManager || {};

CursorManager = function(game) {
    this.game = game;
    this.cursor = {};
};

CursorManager.prototype = {
    loadAsset: function() {
        this.game.load.image('cursor', 'assets/star.png', 0, 0);
    },
    createSprite: function(width, height) {
        this.cursor = this.game.add.sprite(0, 0, 'cursor');
        this.cursor.alpha = 0.7;
        this.cursor.width = width;
        this.cursor.height = height;
    },
    getCursor: function() {
        return this.cursor;
    },
    moveCursorTo: function(column, row) {
        this.cursor.x = column * this.cursor.width;
        this.cursor.y = row * this.cursor.height;
    },
    moveCursorUp: function() {
        this.cursor.y = this.cursor.y - this.cursor.height;
    },
    moveCursorDown: function() {
        this.cursor.y = this.cursor.y + this.cursor.height;
    },
    moveCursorLeft: function() {
        this.cursor.x = this.cursor.x - this.cursor.width;
    },
    moveCursorRight: function() {
        this.cursor.x = this.cursor.x + this.cursor.width;
    },

}

