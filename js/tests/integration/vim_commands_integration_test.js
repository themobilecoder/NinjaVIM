QUnit.test('VimContext should handle movement inputs in NORMAL mode', function (assert) {
    var cursorManager = new CursorManager(gameStub);
    cursorManager.currentCursorLocation = {column: 5, row: 5};
    var vimContext = new VimContext(cursorManager, null, new KeyboardHandlerManager(gameStub));

    vimContext.setKeyboardHandler(new NormalModeKeyboardHandler(vimContext));
    assert.equal(vimContext.getVimMode(), VimContext.MODE.NORMAL, 'VimContext should be in NORMAL mode');

    var upCommand = new MoveUpCommand(vimContext);
    assert.deepEqual(vimContext.getCursorLocation(),
        {column: 5, row: 5},
        'Cursor should be initialized to col:5, row:5'
    );
    upCommand.execute();
    assert.deepEqual(vimContext.getCursorLocation(),
        {column: 5, row: 4},
        'Cursor should have moved up'
    );

    var downCommand = new MoveDownCommand(vimContext);
    downCommand.execute();
    assert.deepEqual(vimContext.getCursorLocation(),
        {column: 5, row: 5},
        'Cursor should have moved down'
    );

    var leftCommand = new MoveLeftCommand(vimContext);
    leftCommand.execute();
    assert.deepEqual(vimContext.getCursorLocation(),
        {column: 4, row: 5},
        'Cursor should have moved left'
    );

    var rightCommand = new MoveRightCommand(vimContext);
    rightCommand.execute();
    assert.deepEqual(vimContext.getCursorLocation(),
        {column: 5, row: 5},
        'Cursor should have moved right'
    );
});

