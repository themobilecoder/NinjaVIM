function InsertModeKeyboardHandler(vimContext) {
    this.vimContext = vimContext;
    this.keyHandlers = {};
    this.vimMode = VimContext.MODE.INSERT;
}
InsertModeKeyboardHandler.prototype = {
    getHandlers: function () {
        return this.keyHandlers;
    },
    getVimMode: function () {
        return this.vimMode;
    }
};
