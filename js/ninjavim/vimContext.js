var NinjaVim = NinjaVim || {};

function VimContext(cursorManager, tilesManager) {
    this.cursorManager = {};
    this.tilesManager = {};
    _pointManagersToGlobal(this);
    _setDefaultManagers(this, cursorManager, tilesManager);

    function _pointManagersToGlobal(self) {
        self.cursorManager = NinjaVim.CursorManager;
        self.tilesManager = NinjaVim.TilesManager;
    }
    function _setDefaultManagers(self, cursorManager, tilesManager) {
        self.cursorManager = cursorManager;
        self.tilesManager = tilesManager;
    }

}

VimContext.prototype = {
    getCursorLocation: function() {
        return this.cursorManager.getCursorLocation();
    },
    moveCursorTo: function(column, row) {
        this.cursorManager.moveCursorTo(column, row);
    },
    moveCursorUp: function() {
        this.cursorManager.moveCursorUp();
    },
    moveCursorDown: function() {
        this.cursorManager.moveCursorDown();
    },
    moveCursorLeft: function() {
        this.cursorManager.moveCursorLeft();
    },
    moveCursorRight: function() {
        this.cursorManager.moveCursorRight();
    },
};