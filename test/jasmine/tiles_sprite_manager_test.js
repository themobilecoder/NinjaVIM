describe("Tile Sprite Manager location management", function () {
    var maxNumberOfColumns = 20;
    var maxNumberOfRows = 20;
    var tilesSpriteManager, builder;

    beforeEach(function() {
        tilesSpriteManager = new TilesSpriteManager(maxNumberOfColumns, maxNumberOfRows);
        builder = jasmine.createSpyObj('builder', ['build', 'setLocation']);
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

        var builder = jasmine.createSpyObj('builder', ['build', 'setLocation']);
        builder.build.and.returnValue('');

        expect(tilesSpriteManager.getSpriteFromLocation(0, 0)).toBeUndefined();
        tilesSpriteManager.buildSprite(0, 0, builder);

        expect(builder.build).toHaveBeenCalled();
        expect(tilesSpriteManager.getSpriteFromLocation(0, 0)).not.toBeUndefined();
    });

});

describe("Tile Sprite Manager deleting a sprite", function() {
    var tilesSpriteManager, builder, spriteStub;

    beforeEach(function() {
        tilesSpriteManager = new TilesSpriteManager(20, 20);

        builder = jasmine.createSpyObj('builder', ['build', 'setLocation']);
        spriteStub = jasmine.createSpyObj('sprite', ['destroy']);
        builder.build.and.returnValue(spriteStub);
    });

    it("should not do anything when sprite does not exist", function() {
        tilesSpriteManager.destroySprite(0, 0);
        expect(tilesSpriteManager.getSpriteFromLocation(0, 0)).toBeUndefined();
        expect(spriteStub.destroy).not.toHaveBeenCalled();
    });

    it("should destroy sprite in a location", function() {
        tilesSpriteManager.buildSprite(0, 0, builder);
        expect(tilesSpriteManager.getSpriteFromLocation(0, 0)).not.toBeUndefined();

        tilesSpriteManager.destroySprite(0, 0);
        expect(tilesSpriteManager.getSpriteFromLocation(0, 0)).toBeUndefined();
        expect(spriteStub.destroy).toHaveBeenCalled();
    });

    it("should animate destruction or removal of sprite if available", function() {

        var destroyerStub = jasmine.createSpyObj('destroyer', ['destroy']);

        tilesSpriteManager.buildSprite(0, 0, builder);

        tilesSpriteManager.destroySprite(0, 0, destroyerStub);

        expect(spriteStub.destroy).not.toHaveBeenCalled();
        expect(destroyerStub.destroy).toHaveBeenCalledWith(spriteStub);
    })

});
