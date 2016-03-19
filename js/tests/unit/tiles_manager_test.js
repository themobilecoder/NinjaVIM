var maxColumns = 20;
var maxRows = 20;

QUnit.module('TilesManager Unit Test');
QUnit.test("TilesCharacterManager should update characters in tiles", function (assert) {
    var tilesManager = new TilesCharacterManager(maxColumns, maxRows);
    assert.equal(tilesManager.getCharacterFromLocation(0, 0), '', "Tiles should undefined");
    tilesManager.setCharacterToTile('A', 0, 0);
    assert.equal(tilesManager.getCharacterFromLocation(0, 0), 'A', "Character should have been set");
    tilesManager.setCharacterToTile('C', 19, 19);
    assert.equal(tilesManager.getCharacterFromLocation(19, 19), 'C', "Character should have been set");
});

QUnit.test("TilesCharacterManager should prevent set character at the edge when input is outside the boundary", function (assert) {
    var tilesManager = new TilesCharacterManager(maxColumns, maxRows);

    var oneColumnPastTheBoundary = 20;
    tilesManager.setCharacterToTile('L', oneColumnPastTheBoundary, 0);
    assert.equal(tilesManager.getCharacterFromLocation(oneColumnPastTheBoundary, 0), '', 'No character should be set past the column boundary');

    var rightMostColumn = 19;
    assert.equal(tilesManager.getCharacterFromLocation(rightMostColumn, 0), 'L', 'Character should be set at the boundary');

    var oneRowPastTheBoundary = 20;
    tilesManager.setCharacterToTile('M', 0, oneRowPastTheBoundary);
    assert.equal(tilesManager.getCharacterFromLocation(0, oneRowPastTheBoundary), '', 'No character should be set past the column boundary');

    var lowestRow = 19;
    assert.equal(tilesManager.getCharacterFromLocation(0, lowestRow), 'M', 'Character should be set at the boundary');

    var oneColumnLeftOfBoundary = -1;
    var oneRowAboveBoundary = -1;
    tilesManager.setCharacterToTile('N', oneColumnLeftOfBoundary, oneRowAboveBoundary);
    assert.equal(tilesManager.getCharacterFromLocation(oneColumnLeftOfBoundary, oneRowAboveBoundary), '', 'No character should be set past the column boundary');

    var upMostRow = 0;
    var leftMostColumn = 0;
    assert.equal(tilesManager.getCharacterFromLocation(leftMostColumn, upMostRow), 'N', 'Character should be set at the boundary');


});