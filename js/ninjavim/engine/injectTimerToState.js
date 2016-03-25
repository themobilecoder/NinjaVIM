var injectTimerToState = function(state) {

    var originalCreate = state.prototype.create;
    state.prototype.create = function() {
        this.initialStartTime = 0;
        this.worldTime = this.game.time.create(false);
        originalCreate.apply(this, arguments);
    };

    state.prototype.getElapsedTimeInSeconds = function() {
        var totalElapsedSecondsSinceStartWasCalled = this.game.time.totalElapsedSeconds() - this.initialStartTime;
        return Math.round(totalElapsedSecondsSinceStartWasCalled * 10) / 10;
    };

    state.prototype.startGameTime = function() {
        this.initialStartTime = this.game.time.totalElapsedSeconds();
        this.worldTime.start();
    };

};
