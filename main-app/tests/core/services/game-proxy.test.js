(function () {
    'use strict';

    describe("Testing-the-game-proxy", function() {
        var gameServiceProxy;
        beforeEach(function() {
            module('Tombola.Games.NoughtsAndCrosses.Core');
            inject(function($injector) {
                gameServiceProxy = $injector.get('GameProxy');

            });
        });


    });
})();