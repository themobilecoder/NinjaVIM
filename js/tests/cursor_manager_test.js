QUnit.test("Cursor Manager should be initialized propery", function (assert) {
    var cursorManager = new CursorManager(gameStub);
    assert.ok(cursorManager, 'Cursor Manager should exist');

    cursorManager.createSprite(0, 0);
    assert.notStrictEqual(cursorManager.cursor, {}, 'CursorManager should contain a non-empty cursor after creating sprite');

    assert.deepEqual(cursorManager.getCursorLocation(), {column: 0, row: 0}, 'Cursor should be initialized to (0,0))');
});

QUnit.test("Cursor Manager should be able to move cursor to a specific location", function (assert) {
    var cursorManager = new CursorManager(gameStub);

    assert.deepEqual(cursorManager.getCursorLocation(), {column: 0, row: 0}, 'Cursor should be initialized to (0,0))');

    cursorManager.moveCursorTo(1, 2);
    assert.deepEqual(cursorManager.getCursorLocation(), {column: 1, row: 2}, 'Cursor should be in a specific location');

    cursorManager.moveCursorDown();
    assert.deepEqual(cursorManager.getCursorLocation(), {column: 1, row: 3}, 'Cursor should have moved down');

    cursorManager.moveCursorUp();
    assert.deepEqual(cursorManager.getCursorLocation(), {column: 1, row: 2}, 'Cursor should have moved up');

    cursorManager.moveCursorLeft();
    assert.deepEqual(cursorManager.getCursorLocation(), {column: 0, row: 2}, 'Cursor should have moved left');

    cursorManager.moveCursorRight();
    assert.deepEqual(cursorManager.getCursorLocation(), {column: 1, row: 2}, 'Cursor should have moved right');
});
