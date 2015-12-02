var gameStub = {
    world: {height:0, width:0},
    add: {group: function(){}}
};

var builderStub = {
    setLetter: function(letter) {
        this.letter = letter;
        return this;
    },
    build: function() {
        return this;
    }
};
QUnit.test("TilesManager should update letters in tiles", function(assert){
    assert.ok(TilesManager, "TilesManager is defined");
    var tilesManager = new TilesManager(gameStub, 20, 20, {}, builderStub);
    assert.equal(tilesManager.tiles[tilesManager.getKey(0,0)], undefined, "Tiles should undefined" );
    tilesManager.setLetterToColumn('A',0,0);
    assert.equal(tilesManager.getLetterFromColumn(0,0), 'A', "Letter should have been set");
});