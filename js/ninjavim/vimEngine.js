var NinjaVim = NinjaVim || {};

function VimEngine(cursorManager) {
    NinjaVim.CursorManager = cursorManager;
    this.cursorManager = NinjaVim.CursorManager;
    this.currentMode = VimEngine.MODES.NORMAL;
}

VimEngine.MODES = {
    NORMAL: 'NORMAL',
    INSERT: 'INSERT'
};

VimEngine.prototype = {
    processCommand: function(command) {
        command.setCursorManager(this.cursorManager);
        command.execute();
    },
    getCursorManager: function() {
        return this.cursorManager;
    },
    setCurrentMode: function(currentMode) {
        this.currentMode = currentMode;
    },
    getCurrentMode: function() {
        return this.currentMode;
    }
};