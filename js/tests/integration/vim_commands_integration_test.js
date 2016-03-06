QUnit.module('Vim Normal Mode Integration Test');
QUnit.test('Game should handle movement inputs in NORMAL mode', function (assert) {
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

QUnit.test('Game should be able to transition to INSERT Mode from NORMAL Mode', function(assert) {
    var tileCount = 20;
    var cursorManager = new CursorManager(gameStub, tileCount, tileCount);
    var tilesManager = new TilesManager(gameStub, tileCount, tileCount, builderStub);
    var keyboardHandlerManager = new KeyboardHandlerManager(gameStub);
    var vimContext = new VimContext(cursorManager, tilesManager, keyboardHandlerManager);

    var normalModeKeyboardHandler = new NormalModeKeyboardHandler(vimContext);
    vimContext.setKeyboardHandler(normalModeKeyboardHandler);

    assert.equal(vimContext.getVimMode(),
        VimContext.MODE.NORMAL,
        'VimMode should be set to NORMAL when using a NORMAL keyboard handler'
    );

    var switchToInsertModeCommand = new SwitchToInsertModeCommand(vimContext);
    switchToInsertModeCommand.execute();
    assert.equal(vimContext.getVimMode(),
        VimContext.MODE.INSERT,
        'VimMode should be set to INSERT when using an INSERT keyboard handler'
    );
});

QUnit.module('Vim Insert Mode Integration Test');
QUnit.test('Should be able to type characters in INSERT Mode', function(assert) {
    var tileCount = 20;
    var cursorManager = new CursorManager(gameStub, tileCount, tileCount);
    var tilesManager = new TilesManager(gameStub, tileCount, tileCount, builderStub);
    var keyboardHandlerManager = new KeyboardHandlerManager(gameStub);
    var vimContext = new VimContext(cursorManager, tilesManager, keyboardHandlerManager);

    var normalModeKeyboardHandler = new NormalModeKeyboardHandler(vimContext);
    vimContext.setKeyboardHandler(normalModeKeyboardHandler);

    assert.deepEqual(vimContext.getCursorLocation(),
        {column: 0, row: 0},
        'Cursor should be at the initial position'
    );
    var switchToInsertModeCommand = new SwitchToInsertModeCommand(vimContext);
    switchToInsertModeCommand.execute();
    assert.equal(vimContext.getVimMode(),
        VimContext.MODE.INSERT,
        'VimMode should be set to INSERT when using an INSERT keyboard handler'
    );

    var insertCharacterCommand = new InsertCharacterCommand(vimContext, 'A');
    insertCharacterCommand.execute();
    var cursorLocationToBeSetByACharacter = {column: 0, row: 0};
    assert.equal(vimContext.getCharacterFromCursorLocation(cursorLocationToBeSetByACharacter),
        'A',
        'VimContext should update the current character in the tile where the cursor is'
    );
    var expectedNewCursorLocation = {column: 1, row: 0};
    assert.deepEqual(vimContext.getCursorLocation(),
        expectedNewCursorLocation,
        'Cursor should be moved to the right after entering a character'
    );
    assert.equal(vimContext.getCharacterFromCurrentCursorLocation(),
        '',
        'Current cursor location should still have a blank tile'
    );

    QUnit.test('Should move cursor to next row when typing in INSERT mode reached the right end', function(assert) {
        var tileCount = 20;
        var cursorManager = new CursorManager(gameStub, tileCount, tileCount);
        var tilesManager = new TilesManager(gameStub, tileCount, tileCount, builderStub);
        var keyboardHandlerManager = new KeyboardHandlerManager(gameStub);
        var vimContext = new VimContext(cursorManager, tilesManager, keyboardHandlerManager);

        vimContext.setKeyboardHandler(new InsertModeKeyboardHandler(vimContext));
        var initialCursorLocation = {column: 19, row: 0 };
        vimContext.moveCursorTo(initialCursorLocation.column, initialCursorLocation.row);

        var insertCharacterCommand = new InsertCharacterCommand(vimContext, 'A');
        insertCharacterCommand.execute();

        assert.deepEqual(vimContext.getCharacterFromCursorLocation(initialCursorLocation), 'A', 'Character should have been written');
        assert.deepEqual(vimContext.getCursorLocation(), {column: 0, row: 1}, 'Cursor should have moved to the next row');
    });
});
