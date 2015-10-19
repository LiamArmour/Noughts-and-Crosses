(function () {
    'use strict';
    describe('Testing the player selection', function () {
        var playerSelection;
        beforeEach(function () {
            module('Tombola.Games.NoughtsAndCrosses.Lobby');
            inject(function ($injector) {
                playerSelection = $injector.get('PlayerSelection');
            });
        });

        it('Ensures both players default to human', function () {
            playerSelection.player1Type.should.equal('human');
            playerSelection.player2Type.should.equal('human');
        });

        it('Ensures the rotation of player 1 functions correctly', function () {
            playerSelection.selectPlayer(1);
            playerSelection.player1Type.should.equal('pre-trained');
            playerSelection.selectPlayer(1);
            playerSelection.player1Type.should.equal('random');
            playerSelection.selectPlayer(1);
            playerSelection.player1Type.should.equal('human');
        });

        it('Ensures the rotation of player 2 functions correctly', function () {
            playerSelection.selectPlayer(2);
            playerSelection.player2Type.should.equal('pre-trained');
            playerSelection.selectPlayer(2);
            playerSelection.player2Type.should.equal('random');
            playerSelection.selectPlayer(2);
            playerSelection.player2Type.should.equal('human');
        });

        it('Ensures the isHumanVsHuman will be true', function () {
            playerSelection.isHumanVsHuman().should.equal(true);
        });

        it('Ensures the isHumanVsHuman will be true', function () {
            playerSelection.selectPlayer(2);
            playerSelection.isHumanVsHuman().should.equal(false);
        });

    });
})();