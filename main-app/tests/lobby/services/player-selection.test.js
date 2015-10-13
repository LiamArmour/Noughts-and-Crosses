(function () {
    'use strict';
    describe('Testing the player selection', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.Games.NoughtsAndCrosses.Lobby');
            inject(function ($injector) {
                constants = $injector.get('PlayerSelection');
            });
        });

        it('Ensures both players default to human', function () {
            constants.player1Type.should.equal('human');
            constants.player2Type.should.equal('human');
        });


    });
})();