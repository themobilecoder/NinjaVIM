var NinjaVim = NinjaVim || {};

function VimContext(cursorManager, tilesManager, keyboardHandlerManager) {
    this.cursorManager = {};
    this.tilesManager = {};
    this.vimMode = VimContext.MODE.UNKNOWN;
    this.keyboardHandlerManager = keyboardHandlerManager;
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
    getVimMode: function() {
        return this.vimMode;
    },
    setKeyboardHandler: function(keyboardHandler) {
        this.keyboardHandlerManager.setKeyHandlers(keyboardHandler);
        this.vimMode = keyboardHandler.getVimMode();
    },
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
    setCharacterToCurrentCursorLocation: function(character) {
        var column = this.cursorManager.getCursorLocation().column;
        var row = this.cursorManager.getCursorLocation().row;
        this.tilesManager.setLetterToColumn(character, column, row);
    },
    getCharacterFromCurrentCursorLocation: function() {
        var column = this.cursorManager.getCursorLocation().column;
        var row = this.cursorManager.getCursorLocation().row;
        return this.tilesManager.getLetterFromLocation(column, row);
    }
};

VimContext.MODE = {
    UNKNOWN: 'UNKNOWN',
    NORMAL: 'NORMAL',
    INSERT: 'INSERT',
};