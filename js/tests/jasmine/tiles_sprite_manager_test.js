describe("Tile Sprite Manager location management", function () {
    var maxNumberOfColumns = 20;
    var maxNumberOfRows = 20;
    var tilesSpriteManager, builder;

    beforeEach(function() {
        tilesSpriteManager = new TilesSpriteManager(maxNumberOfColumns, maxNumberOfRows);
        builder = jasmine.createSpyObj('builder', ['build']);
        builder.build.and.returnValue('');
    });

    it("should be able to set sprites", function() {
        expect(tilesSpriteManager.getSpriteFromLocation(5, 6)).toBeUndefined();

        tilesSpriteManager.buildSprite(5 ,6, builder);
        expect(tilesSpriteManager.getSpriteFromLocation(5, 6)).not.toBeUndefined();
    });

    it("should not be able to set sprites outside boundaries", function() {
        expect(tilesSpriteManager.getSpriteFromLocation(-1, 0)).toBeUndefined();

        var pastLeftOfTheBorder = -1;
        tilesSpriteManager.buildSprite(pastLeftOfTheBorder ,0);
        expect(tilesSpriteManager.getSpriteFromLocation(pastLeftOfTheBorder, 0)).toBeUndefined();
        expect(tilesSpriteManager.getSpriteFromLocation(0, 0)).toBeUndefined();

        var pastRightOfTheBorder = 20;
        tilesSpriteManager.buildSprite(pastRightOfTheBorder ,0);
        expect(tilesSpriteManager.getSpriteFromLocation(pastRightOfTheBorder, 0)).toBeUndefined();
        expect(tilesSpriteManager.getSpriteFromLocation(19, 0)).toBeUndefined();

        var pastUpOfTheBorder = -1;
        tilesSpriteManager.buildSprite(0 ,pastUpOfTheBorder);
        expect(tilesSpriteManager.getSpriteFromLocation(0, pastUpOfTheBorder)).toBeUndefined();
        expect(tilesSpriteManager.getSpriteFromLocation(0, 0)).toBeUndefined();

        var pastDownOfTheBorder = 20;
        tilesSpriteManager.buildSprite(0 ,pastDownOfTheBorder);
        expect(tilesSpriteManager.getSpriteFromLocation(0, pastDownOfTheBorder)).toBeUndefined();
        expect(tilesSpriteManager.getSpriteFromLocation(0, 19)).toBeUndefined();

    });
});

describe("Tile Sprite Manager using a Sprite Builder", function() {

    it("should use a builder when building sprites", function() {
        var tilesSpriteManager = new TilesSpriteManager(20, 20);
        var spriteBuilderMock = new DefaultTileBuilder();

        spyOn(spriteBuilderMock,'build').and.returnValue(jasmine.any(Object));

        expect(tilesSpriteManager.getSpriteFromLocation(0, 0)).toBeUndefined();
        tilesSpriteManager.buildSprite(0, 0, spriteBuilderMock);

        expect(spriteBuilderMock.build).toHaveBeenCalled();
        expect(tilesSpriteManager.getSpriteFromLocation(0, 0)).not.toBeUndefined();
    });

});
