QUnit.module('VimContext Unit Test');
QUnit.test('VimContext should be able to update the cursor', function(assert) {
    var cursorManagerStub = new CursorManager(gameStub);
    var vimContext = new VimContext(cursorManagerStub, {});

    var currentCursorLocation = vimContext.getCursorLocation();
    assert.deepEqual(currentCursorLocation, {column: 0, row: 0}, 'Cursor location should be at 0,0 by at start');

    vimContext.moveCursorTo(2,2);
    currentCursorLocation = vimContext.getCursorLocation();
    assert.deepEqual(currentCursorLocation, {column: 2, row: 2}, 'Cursor location should be updated to 2,2');
});

QUnit.test('VimContext should be able to update the keyboardManager', function(assert) {
    var keyboardManager = new KeyboardHandlerManager(gameStub);
    var vimContext = new VimContext(null, null, keyboardManager);

    assert.equal(vimContext.getVimMode(), VimContext.MODE.UNKNOWN, 'VimMode should be initialized to UNKNOWN');

    vimContext.setKeyboardHandler(new NormalModeKeyboardHandler(vimContext));
    assert.equal(vimContext.getVimMode(),
        VimContext.MODE.NORMAL,
        'VimMode should be updated to NORMAL when using a NORMAL keyboard handler'
    );
});