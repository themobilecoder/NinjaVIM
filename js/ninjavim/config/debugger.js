function debug(state) {
    var originalCreate = state.prototype.create;
    state.prototype.create = function () {
        var style = {font: '12px Courier'};
        this.debug = {};
        this.debug.column = this.game.add.text(0, 0, "", style);
        this.debug.row = this.game.add.text(0, 12, "", style);
        this.debug.characterUnderCursor = this.game.add.text(0, 24, "", style);
        this.debug.timeSinceStateStarted = this.game.add.text(0, 36, "", style);
        originalCreate.apply(this, arguments);
    };

    var originalRender = state.prototype.render;

    state.prototype.render = function () {
        var column = this.vimContext.getCursorLocation().column;
        var row = this.vimContext.getCursorLocation().row;
        var characterUnderCursor = this.vimContext.getCharacterFromCurrentCursorLocation();
        this.debug.column.text = "Vim Cursor COL: " + column;
        this.debug.row.text = "Vim Cursor ROW: " + row;
        this.debug.characterUnderCursor.text = "Vim Cursor Character: " + characterUnderCursor;

        var timeElapsedToDisplay = beautifyTimeString(this.getElapsedTimeInSeconds());
        this.debug.timeSinceStateStarted.text = "Time Elapsed: " + timeElapsedToDisplay + "s";

        bringDebugViewToTop.call(this);

        if (originalRender != undefined) {
            originalRender.apply(this, arguments);
        }

        function beautifyTimeString(timeInSeconds) {
            return timeInSeconds % 1 == 0 ? timeInSeconds + '.0' : Math.round(timeInSeconds * 10) / 10;
        }

        function bringDebugViewToTop() {
            this.debug.column.bringToTop();
            this.debug.row.bringToTop();
            this.debug.characterUnderCursor.bringToTop();
            this.debug.timeSinceStateStarted.bringToTop();
        }

    };
}