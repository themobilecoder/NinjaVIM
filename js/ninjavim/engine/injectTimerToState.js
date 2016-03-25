var injectTimerToState = function(state) {

    var originalCreate = state.prototype.create;
    state.prototype.create = function() {
        this.worldTime = this.game.time.create(false);
        originalCreate.apply(this, arguments);
    };

    state.prototype.getElapsedTimeInSeconds = function() {
        return Math.round(this.game.time.totalElapsedSeconds() * 10) / 10;
    };

    state.prototype.startGameTime = function() {
        this.worldTime.start();
    };

};
