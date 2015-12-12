var NinjaVim = NinjaVim || {};

function VimEngine(cursorManager, tilesManager) {
    this.currentMode = VimEngine.MODES.NORMAL;

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

VimEngine.MODES = {
    NORMAL: 'NORMAL',
    INSERT: 'INSERT'
};

VimEngine.prototype = {
    processCommand: function (command) {
        command.setCursorManager(this.cursorManager);
        command.execute();
    },
    getCursorManager: function () {
        return this.cursorManager;
    },
    setCurrentMode: function (currentMode) {
        this.currentMode = currentMode;
    },
    getCurrentMode: function () {
        return this.currentMode;
    }
};