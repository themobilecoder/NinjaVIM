describe('VimContext cursor management', function() {

    it('should update the location of cursor', function() {
        var cursorManagerStub = jasmine.createSpyObj('cursorManager', ['moveCursorTo', 'getCursorLocation']);
        cursorManagerStub.getCursorLocation.and.returnValue({column: '5', row: '6'});

        var vimCursor = new VimContext(cursorManagerStub, null, null);

        vimCursor.moveCursorTo(5, 6);
        expect(cursorManagerStub.moveCursorTo.calls.any()).toEqual(true);
        expect(vimCursor.getCursorLocation()).toEqual({column: '5', row: '6'});
    });

});