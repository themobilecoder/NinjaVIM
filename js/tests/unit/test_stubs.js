var gameStub = {
    world: {height: 0, width: 0},
    add: {
        group: function () {
            return {
                create: function(){}
            };
        },
        sprite: function () {
            return {
                animations: {
                    add: function() {},
                    play: function() {}
                }
            }
        }
    }
};

var builderStub = {
    setCharacter: function (character) {
        this.character = character;
        return this;
    },
    build: function () {
        return this;
    }
};

var testConfig = {
    cursorAlpha : 1
};