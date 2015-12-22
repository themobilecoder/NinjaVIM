QUnit.test('VimContext should handle movement inputs in NORMAL mode', function (assert) {
    var cursorManager = new CursorManager(gameStub);
    cursorManager.currentCursorLocation = {column: 5, row: 5};
    var vimContext = new VimContext(cursorManager);

    var upCommand = new MoveUpCommand(cursorManager);
    assert.deepEqual(vimContext.getCursorManager().getCursorLocation(),
        {column: 5, row: 5},
        'Cursor should be initialized to col:0, row:1'
    );
    vimContext.processCommand(upCommand);
    assert.deepEqual(vimContext.getCursorManager().getCursorLocation(),
        {column: 5, row: 4},
        'Cursor should have moved up'
    );

    var downCommand = new MoveDownCommand(cursorManager);
    vimContext.processCommand(downCommand);
    assert.deepEqual(vimContext.getCursorManager().getCursorLocation(),
        {column: 5, row: 5},
        'Cursor should have moved down'
    );

    var leftCommand = new MoveLeftCommand(cursorManager);
    vimContext.processCommand(leftCommand);
    assert.deepEqual(vimContext.getCursorManager().getCursorLocation(),
        {column: 4, row: 5},
        'Cursor should have moved left'
    );

    var rightCommand = new MoveRightCommand(cursorManager);
    vimContext.processCommand(rightCommand);
    assert.deepEqual(vimContext.getCursorManager().getCursorLocation(),
        {column: 5, row: 5},
        'Cursor should have moved right'
    );
});

QUnit.test('VimContext should allow mode changing', function(assert) {
    var vimContext = new VimContext();
    assert.equal(vimContext.getCurrentMode(), VimContext.MODES.NORMAL, 'VimContext should be in NORMAL mode by default');

    vimContext.setCurrentMode(VimContext.MODES.INSERT, 'VimContext should be able to change modes');
    assert.equal(vimContext.getCurrentMode(), VimContext.MODES.INSERT, 'VimContext should be in NORMAL mode by default');
});
