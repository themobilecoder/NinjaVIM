var NinjaVim = NinjaVim || {};

function VimContext(cursorLocationManager, cursorSpriteManager, tilesCharacterManager, keyboardHandlerManager) {
    this.cursorLocationManager = {};
    this.vimMode = VimContext.MODE.UNKNOWN;
    this.keyboardHandlerManager = keyboardHandlerManager;
    this.cursorLocationManager = cursorLocationManager;
    this.cursorSpriteManager = cursorSpriteManager;
    this.tilesCharacterManager = tilesCharacterManager;
    this.shiftIsDown = false;
}

VimContext.prototype = {
    getVimMode: function() {
        return this.vimMode;
    },
    setKeyboardHandler: function(keyboardHandler) {
        this.keyboardHandlerManager.setKeyHandlers(keyboardHandler);
        this.vimMode = keyboardHandler.getVimMode();
    },
    setShiftPressed: function() {
        this.shiftIsDown = true;
    },
    setShiftReleased: function() {
        this.shiftIsDown = false;
    },
    getCursorLocation: function() {
        return this.cursorLocationManager.getCursorLocation();
    },
    moveCursorTo: function(column, row) {
        this.cursorLocationManager.moveCursorTo(column, row);
        this.cursorSpriteManager.moveCursorTo(column, row);
    },
    moveCursorUp: function() {
        this.cursorLocationManager.moveCursorUp();
        this.cursorSpriteManager.moveCursorTo(this.cursorLocationManager.getCursorLocation().column, this.cursorLocationManager.getCursorLocation().row);
    },
    moveCursorDown: function() {
        this.cursorLocationManager.moveCursorDown();
        this.cursorSpriteManager.moveCursorTo(this.cursorLocationManager.getCursorLocation().column, this.cursorLocationManager.getCursorLocation().row);
    },
    moveCursorLeft: function() {
        this.cursorLocationManager.moveCursorLeft();
        this.cursorSpriteManager.moveCursorTo(this.cursorLocationManager.getCursorLocation().column, this.cursorLocationManager.getCursorLocation().row);
    },
    moveCursorRight: function() {
        this.cursorLocationManager.moveCursorRight();
        this.cursorSpriteManager.moveCursorTo(this.cursorLocationManager.getCursorLocation().column, this.cursorLocationManager.getCursorLocation().row);
    },
    setCharacterToCurrentCursorLocation: function(character) {
        var column = this.cursorLocationManager.getCursorLocation().column;
        var row = this.cursorLocationManager.getCursorLocation().row;
        this.tilesCharacterManager.setCharacterToTile(character, column, row);
    },
    getCharacterFromCurrentCursorLocation: function() {
        var column = this.cursorLocationManager.getCursorLocation().column;
        var row = this.cursorLocationManager.getCursorLocation().row;
        return this.tilesCharacterManager.getCharacterFromLocation(column, row);
    },
    getCharacterFromCursorLocation: function(cursorLocation) {
        var column = cursorLocation.column;
        var row = cursorLocation.row;
        return this.tilesCharacterManager.getCharacterFromLocation(column, row);
    },
    getRightBorder: function() {
        return this.cursorLocationManager.getRightBorder();
    },
    isShiftDown: function() {
        return this.shiftIsDown;
    }
};

VimContext.MODE = {
    UNKNOWN: 'UNKNOWN',
    NORMAL: 'NORMAL',
    INSERT: 'INSERT',
};