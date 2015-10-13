(function () {
    'use strict';
    describe('Testing the player selection', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.Games.NoughtsAndCrosses.Lobby');
            inject(function ($injector) {
                constants = $injector.get('playerToggle');
            });
        });


    });
})();