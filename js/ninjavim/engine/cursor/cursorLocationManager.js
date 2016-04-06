function CursorLocationManager(numberOfColumns, numberOfRows, config) {
    this.config = config;
    this.currentCursorLocation = {column: 0, row: 0};
    this.rightBorder = numberOfColumns-1;
    this.bottomBorder = numberOfRows-1;
}

CursorLocationManager.prototype = {
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
    },
    moveCursorUp: function () {
        if (this.currentCursorLocation.row == 0) {
            return;
        }
        this.moveCursorTo(this.currentCursorLocation.column, --this.currentCursorLocation.row);
    },
    moveCursorDown: function () {
        if (this.currentCursorLocation.row == this.bottomBorder) {
            return;
        }
        this.moveCursorTo(this.currentCursorLocation.column, ++this.currentCursorLocation.row);
    },
    moveCursorLeft: function () {
        if (this.currentCursorLocation.column == 0) {
            return;
        }
        this.moveCursorTo(--this.currentCursorLocation.column, this.currentCursorLocation.row);
    },
    moveCursorRight: function () {
        if (this.currentCursorLocation.column == this.rightBorder) {
            return;
        }
        this.moveCursorTo(++this.currentCursorLocation.column, this.currentCursorLocation.row);
    },
    _isCoordinateOutOfBorder: function(column, row) {
        return (column < 0
        || column > this.rightBorder
        || row < 0
        || row > this.bottomBorder);
    }
};

