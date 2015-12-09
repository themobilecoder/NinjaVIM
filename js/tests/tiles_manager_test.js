var maxColumns = 20;
var maxRows = 20;

QUnit.test("TilesManager should update letters in tiles", function(assert){
    var tilesManager = new TilesManager(gameStub, maxColumns, maxRows, builderStub);
    assert.equal(tilesManager.tiles[tilesManager._getKey(0,0)], undefined, "Tiles should undefined" );
    tilesManager.setLetterToColumn('A',0,0);
    assert.equal(tilesManager.getLetterFromLocation(0,0), 'A', "Letter should have been set");
    tilesManager.setLetterToColumn('C',19,19);
    assert.equal(tilesManager.getLetterFromLocation(19,19), 'C', "Letter should have been set");
});

QUnit.test("TilesManager should prevent set letter at the edge when input is outside the boundary", function(assert) {
    var tilesManager = new TilesManager(gameStub, maxColumns, maxRows, builderStub);

    var oneColumnPastTheBoundary = 20;
    tilesManager.setLetterToColumn('L', oneColumnPastTheBoundary, 0);
    assert.equal(tilesManager.getLetterFromLocation(oneColumnPastTheBoundary, 0), '', 'No letter should be set past the column boundary');

    var rightMostColumn = 19;
    assert.equal(tilesManager.getLetterFromLocation(rightMostColumn, 0), 'L', 'Letter should be set at the boundary');

    var oneRowPastTheBoundary = 20;
    tilesManager.setLetterToColumn('M', 0, oneRowPastTheBoundary);
    assert.equal(tilesManager.getLetterFromLocation(0, oneRowPastTheBoundary), '', 'No letter should be set past the column boundary');

    var lowestRow = 19;
    assert.equal(tilesManager.getLetterFromLocation(0, lowestRow), 'M', 'Letter should be set at the boundary');

    var oneColumnLeftOfBoundary = -1;
    var oneRowAboveBoundary = -1;
    tilesManager.setLetterToColumn('N', oneColumnLeftOfBoundary, oneRowAboveBoundary);
    assert.equal(tilesManager.getLetterFromLocation(oneColumnLeftOfBoundary, oneRowAboveBoundary), '', 'No letter should be set past the column boundary');

    var upMostRow = 0;
    var leftMostColumn = 0;
    assert.equal(tilesManager.getLetterFromLocation(leftMostColumn, upMostRow), 'N', 'Letter should be set at the boundary');


});