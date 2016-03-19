function TilesCharacterManager(maxColumns, maxRows) {
    this.characters = {};
    this.columns = maxColumns;
    this.rows = maxRows;
    this.helper = new TilesManagementHelper(maxColumns, maxRows);
}

TilesCharacterManager.prototype = {
    init: function () {
        for (var column = 0; column < this.columns; ++column) {
            for (var row = 0; row < this.rows; ++row) {
                this.setCharacterToTile("", column, row);
            }
        }
    },
    setCharacterToTile: function (character, column, row) {
        column = this.helper.normalizeInputColumn(column);
        row = this.helper.normalizeInputRow(row);
        var key = this.helper.getKey(column, row);
        this.characters[key] = character;
        return character
    },
    getCharacterFromLocation: function (column, row) {
        var key = this.helper.getKey(column, row);
        var character = this.characters[key];
        return character != undefined ? character : '';
    }
};
