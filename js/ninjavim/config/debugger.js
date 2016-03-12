function debug() {
    var originalCreate = IntroGameState.prototype.create;
    IntroGameState.prototype.create = function () {
        var style = {font: '12px Courier'};
        this.debug = {};
        this.debug.column = this.game.add.text(0, 0, "", style);
        this.debug.row = this.game.add.text(0, 12, "", style);
        originalCreate.apply(this, arguments);
    };

    var originalRender = IntroGameState.prototype.render;
    IntroGameState.prototype.render = function () {
        var column = this.vimContext.getCursorLocation().column;
        var row = this.vimContext.getCursorLocation().row;
        this.debug.column.text = "Vim Cursor COL: " + column;
        this.debug.row.text = "Vim Cursor ROW: " + row;

        this.debug.column.bringToTop();
        this.debug.row.bringToTop();

        if (originalRender != undefined) {
            originalRender.apply(this, arguments);
        }
    };
}