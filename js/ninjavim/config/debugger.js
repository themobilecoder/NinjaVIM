function debug(state) {
    var originalCreate = state.prototype.create;
    state.prototype.create = function () {
        var style = {font: '12px Courier'};
        this.debug = {};
        this.debug.column = this.game.add.text(0, 0, "", style);
        this.debug.row = this.game.add.text(0, 12, "", style);
        this.debug.letterUnderCursor = this.game.add.text(0, 24, "", style);
        originalCreate.apply(this, arguments);
    };

    var originalRender = state.prototype.render;
    state.prototype.render = function () {
        var column = this.vimContext.getCursorLocation().column;
        var row = this.vimContext.getCursorLocation().row;
        var letterUnderCursor = this.vimContext.getCharacterFromCurrentCursorLocation();
        this.debug.column.text = "Vim Cursor COL: " + column;
        this.debug.row.text = "Vim Cursor ROW: " + row;
        this.debug.letterUnderCursor.text = "Vim Cursor Letter: " + letterUnderCursor;

        this.debug.column.bringToTop();
        this.debug.row.bringToTop();
        this.debug.letterUnderCursor.bringToTop();

        if (originalRender != undefined) {
            originalRender.apply(this, arguments);
        }
    };
}