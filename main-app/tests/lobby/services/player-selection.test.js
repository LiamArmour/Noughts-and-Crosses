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

        it('Ensures the rotation of player 1 functions correctly', function () {
            constants.selectPlayer(1);
            constants.player1Type.should.equal('human');
            constants.selectPlayer(1);
            constants.player1Type.should.equal('pre-trained');
            constants.selectPlayer(1);
            constants.player1Type.should.equal('random');
        });



    });
})();