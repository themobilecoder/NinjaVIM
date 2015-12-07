var VimEngine = VimEngine || {};

VimEngine = function(cursorManager) {
    this.cursorManager = cursorManager;
};

VimEngine.prototype = {
    processCommand: function(command) {
        command.setCursorManager(this.cursorManager);
        command.execute();
    },
    getCursorManager: function() {
        return this.cursorManager;
    }
};