describe("Tile Sprite Manager location management", function () {
    var maxNumberOfColumns = 20;
    var maxNumberOfRows = 20;
    var tilesSpriteManager;

    beforeEach(function() {
        tilesSpriteManager = new TilesSpriteManager(maxNumberOfColumns, maxNumberOfRows);
    });

    it("should be able to set sprites", function() {
        expect(tilesSpriteManager.getSpriteFromLocation(5, 6)).toBeUndefined();

        tilesSpriteManager.buildSprite(5 ,6);
        expect(tilesSpriteManager.getSpriteFromLocation(5, 6)).not.toBeUndefined();
    });

    it("should not be able to set sprites outside boundaries", function() {
        expect(tilesSpriteManager.getSpriteFromLocation(-1, 0)).toBeUndefined();

        tilesSpriteManager.buildSprite(-1 ,0);
        expect(tilesSpriteManager.getSpriteFromLocation(-1, 0)).toBeUndefined();

    })
});
