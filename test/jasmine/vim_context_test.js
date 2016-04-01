describe('VimContext cursor management', function() {

    it('should update the location of cursor', function() {
        var cursorLocationManagerStub = jasmine.createSpyObj('cursorLocationManager', ['moveCursorTo', 'getCursorLocation']);
        var cursorSpriteManagerStub = jasmine.createSpyObj('cursorSpriteManager', ['moveCursorTo']);

        cursorLocationManagerStub.getCursorLocation.and.returnValue({column: '5', row: '6'});

        var vimContext = new VimContext(cursorLocationManagerStub, cursorSpriteManagerStub, null, null);

        vimContext.moveCursorTo(5, 6);

        expect(cursorLocationManagerStub.moveCursorTo).toHaveBeenCalledWith(5, 6);
        expect(cursorSpriteManagerStub.moveCursorTo).toHaveBeenCalledWith(5, 6);

        expect(vimContext.getCursorLocation()).toEqual({column: '5', row: '6'});
    });

});