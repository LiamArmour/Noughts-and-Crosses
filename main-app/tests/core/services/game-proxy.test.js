(function () {
    'use strict';

    describe("Testing-the-game-proxy", function() {
        var constants;
        beforeEach(function() {
            module('Tombola.Games.NoughtsAndCrosses.Core');
            inject(function($injector) {
                constants = $injector.get('GameProxy');
            });
        });


    });
})();