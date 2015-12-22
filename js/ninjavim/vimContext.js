var NinjaVim = NinjaVim || {};

function VimContext(cursorManager, tilesManager) {
    this.currentMode = VimContext.MODES.NORMAL;

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

VimContext.MODES = {
    NORMAL: 'NORMAL',
    INSERT: 'INSERT'
};

VimContext.prototype = {
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
    },
    getCursorLocation: function() {
        return this.cursorManager.getCursorLocation();
    },
    moveCursorTo: function(column, row) {
        this.cursorManager.moveCursorTo(column, row);
    }
};