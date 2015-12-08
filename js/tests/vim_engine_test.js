QUnit.test('VimEngine should handle movement inputs in NORMAL mode', function (assert) {
   var cursorManager = new CursorManager(gameStub);
   cursorManager.currentCursorLocation = {column: 5, row: 5};
   var vimEngine = new VimEngine(cursorManager);

   var upCommand = new MoveUpCommand(cursorManager);
   assert.deepEqual(vimEngine.getCursorManager().getCursorLocation(), {column: 5, row: 5}, 'Cursor should be initialized to col:0, row:1');
   vimEngine.processCommand(upCommand);
   assert.deepEqual(vimEngine.getCursorManager().getCursorLocation(), {column: 5, row: 4}, 'Cursor should have moved up');

   var downCommand = new MoveDownCommand(cursorManager);
   vimEngine.processCommand(downCommand);
   assert.deepEqual(vimEngine.getCursorManager().getCursorLocation(), {column: 5, row: 5}, 'Cursor should have moved down');

   var leftCommand = new MoveLeftCommand(cursorManager);
   vimEngine.processCommand(leftCommand);
   assert.deepEqual(vimEngine.getCursorManager().getCursorLocation(), {column: 4, row: 5}, 'Cursor should have moved left');

   var rightCommand = new MoveRightCommand(cursorManager);
   vimEngine.processCommand(rightCommand);
   assert.deepEqual(vimEngine.getCursorManager().getCursorLocation(), {column: 5, row: 5}, 'Cursor should have moved right');
});

QUnit.test('VimEngine should allow mode changing', function(assert) {
    var vimEngine = new VimEngine();
    assert.equal(vimEngine.getCurrentMode(), VimEngine.MODES.NORMAL, 'VimEngine should be in NORMAL mode by default');

    vimEngine.setCurrentMode(VimEngine.MODES.INSERT, 'VimEngine should be able to change modes');
    assert.equal(vimEngine.getCurrentMode(), VimEngine.MODES.INSERT, 'VimEngine should be in NORMAL mode by default');
});
