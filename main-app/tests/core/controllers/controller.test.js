(function () {
    'use strict';
    describe('Testing the main controller', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.Games.NoughtsAndCrosses.Core');
            inject(function ($injector) {
                constants = $injector.get('MainController');
            });
        });

        it('Ensures the game title is correct', function () {
            constants.gameTitle.should.equal('Noughts and Crosses');
        });
    });

})();