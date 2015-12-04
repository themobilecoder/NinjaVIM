var gameStub = {
    world: {height: 0, width: 0},
    add: {
        group: function () {
        },
        sprite: function () {
            return {}
        }
    }
};

var builderStub = {
    setLetter: function (letter) {
        this.letter = letter;
        return this;
    },
    build: function () {
        return this;
    }
};
