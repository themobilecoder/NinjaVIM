function TilesManagementHelper(maxColumns, maxRows) {
    this.maxColumns = maxColumns;
    this.maxRows = maxRows;
}

TilesManagementHelper.prototype = {
    getKey: function (column, row) {
        if (parseInt(column) >= 0 && parseInt(column) < this.maxColumns && parseInt(row) >= 0 && parseInt(row) < this.maxRows) {
            if (column < 10) {
                column = '0' + column.toString()
            } else {
                column = column.toString();
            }
            if (row < 0) {
                row = '0' + row.toString()
            } else {
                row = row.toString();
            }
            return column + row;
        } else {
            return '-1';
        }
    },
    normalizeInputColumn: function (column) {
        if (column >= this.maxColumns) {
            return this.maxColumns - 1;
        } else if (column < 0) {
            return 0;
        } else {
            return column;
        }
    },
    normalizeInputRow: function (row) {
        if (row >= this.maxRows) {
            return this.maxRows - 1;
        } else if (row < 0) {
            return 0;
        } else {
            return row;
        }
    }
};
