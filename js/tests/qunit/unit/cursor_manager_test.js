QUnit.module('Cursor Manager Unit Test');
QUnit.test("Cursor Manager should be initialized propery", function (assert) {
    var cursorManager = new CursorManager(gameStub, 0, 0, testConfig);
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

QUnit.test('CursorManager should not allow cursor to go past the border', function(assert) {
    var MAX_COLUMNS = 20;
    var MAX_ROWS = 20;
    var cursorManager = new CursorManager(gameStub, MAX_COLUMNS, MAX_ROWS);

    assert.deepEqual(cursorManager.getCursorLocation(), {column: 0, row: 0}, 'Cursor should be initialized to (0,0))');

    cursorManager.moveCursorLeft();
    assert.deepEqual(cursorManager.getCursorLocation(),
        {column: 0, row: 0},
        'Cursor should still be at 0,0 because it is in the left border'
    );

    cursorManager.moveCursorUp();
    assert.deepEqual(cursorManager.getCursorLocation(),
        {column: 0, row: 0},
        'Cursor should still be at 0,0 because it is in the top border'
    );

    var RIGHT_BORDER = MAX_COLUMNS - 1;
    cursorManager.moveCursorTo(RIGHT_BORDER, 0);
    cursorManager.moveCursorRight();
    var rightBorder = cursorManager.getRightBorder();
    assert.deepEqual(rightBorder, RIGHT_BORDER, 'Right border should be the one initialized');
    assert.deepEqual(cursorManager.getCursorLocation(),
        {column: RIGHT_BORDER, row: 0},
        'Cursor should be at the far right edge of the grid'
    );

    var BOTTOM_BORDER = MAX_ROWS - 1;
    cursorManager.moveCursorTo(0, BOTTOM_BORDER);
    cursorManager.moveCursorDown();
    var bottomBorder = cursorManager.getBottomBorder();
    assert.deepEqual(bottomBorder, BOTTOM_BORDER, 'Bottom border should be the one initialized');
    assert.deepEqual(cursorManager.getCursorLocation(),
        {column: 0, row: BOTTOM_BORDER},
        'Cursor should be at the far bottom edge of the grid'
    );

    cursorManager.moveCursorTo(0,0);

    var coordinatesPastBothBorders = 25;
    cursorManager.moveCursorTo(coordinatesPastBothBorders,coordinatesPastBothBorders);
    assert.deepEqual(cursorManager.getCursorLocation(),
        {column: 0, row: 0},
        'Cursor should still be in its current position'
    );

    var coordinatesPastBothBordersNegative = -10;
    cursorManager.moveCursorTo(coordinatesPastBothBordersNegative ,coordinatesPastBothBordersNegative);
    assert.deepEqual(cursorManager.getCursorLocation(),
        {column: 0, row: 0},
        'Cursor should still be in its current position'
    );
});