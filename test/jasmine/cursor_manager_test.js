describe('Cursor Location Manager', function() {
    var cursorManager;
    beforeEach(function() {
        var numberOfColumns = 20;
        var numberOfRows = 20;
        cursorManager = new CursorLocationManager(numberOfColumns, numberOfRows)
    });

    it('should be initialized properly', function() {
        expect(cursorManager).not.toBeUndefined();
    });

    it('should be in the default location (0,0)', function() {
        expect(cursorManager.getCursorLocation()).toEqual({column: 0, row: 0});
    });

    it('should move to a specific location', function() {
        cursorManager.moveCursorTo(5, 5);
        expect(cursorManager.getCursorLocation()).toEqual({column: 5, row: 5});
    });

    it('should move to adjacent location', function() {
        cursorManager.moveCursorTo(5, 5);
        expect(cursorManager.getCursorLocation()).toEqual({column: 5, row: 5});

        cursorManager.moveCursorRight();
        expect(cursorManager.getCursorLocation()).toEqual({column: 6, row: 5});

        cursorManager.moveCursorLeft();
        expect(cursorManager.getCursorLocation()).toEqual({column: 5, row: 5});

        cursorManager.moveCursorUp();
        expect(cursorManager.getCursorLocation()).toEqual({column: 5, row: 4});

        cursorManager.moveCursorDown();
        expect(cursorManager.getCursorLocation()).toEqual({column: 5, row: 5});
    });

    it('should not go past the borders', function() {
        cursorManager.moveCursorLeft();
        expect(cursorManager.getCursorLocation()).toEqual({column: 0, row: 0});

        cursorManager.moveCursorUp();
        expect(cursorManager.getCursorLocation()).toEqual({column: 0, row: 0});

        var rightMostColumn = 19;
        cursorManager.moveCursorTo(rightMostColumn, 0);

        cursorManager.moveCursorRight();
        expect(cursorManager.getCursorLocation()).toEqual({column: rightMostColumn, row: 0});

        cursorManager.moveCursorUp();
        expect(cursorManager.getCursorLocation()).toEqual({column: rightMostColumn, row: 0});

        var bottomMostRow = 19;
        cursorManager.moveCursorTo(0, bottomMostRow);

        cursorManager.moveCursorLeft();
        expect(cursorManager.getCursorLocation()).toEqual({column: 0, row: bottomMostRow});

        cursorManager.moveCursorDown();
        expect(cursorManager.getCursorLocation()).toEqual({column: 0, row: bottomMostRow});

        cursorManager.moveCursorTo(rightMostColumn, bottomMostRow);

        cursorManager.moveCursorRight();
        expect(cursorManager.getCursorLocation()).toEqual({column: rightMostColumn, row: bottomMostRow});

        cursorManager.moveCursorDown();
        expect(cursorManager.getCursorLocation()).toEqual({column: rightMostColumn, row: bottomMostRow});
    });

});