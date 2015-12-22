QUnit.test('VimContext should be able to update the cursor', function(assert) {
    var cursorManagerStub = new CursorManager(gameStub);
    var vimContext = new VimContext(cursorManagerStub, {});

    var currentCursorLocation = vimContext.getCursorLocation();
    assert.deepEqual(currentCursorLocation, {column: 0, row: 0}, 'Cursor location should be at 0,0 by at start');

    vimContext.moveCursorTo(2,2);
    currentCursorLocation = vimContext.getCursorLocation();
    assert.deepEqual(currentCursorLocation, {column: 2, row: 2}, 'Cursor location should be updated to 2,2');
});