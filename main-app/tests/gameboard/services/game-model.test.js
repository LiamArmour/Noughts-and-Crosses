(function () {
    'use strict';
    describe('Testing the game model service', function () {
        var playerSelection,
            gameModel,
            gameProxy,
            state,
            interval,
            sandbox;

        beforeEach(module('ui.router'));
        beforeEach(function () {
            module('Tombola.Games.NoughtsAndCrosses.Game');
            module(function ($provide) {
                $provide.value('GameModel');
                $provide.value('PlayerSelection', mocks.PlayerSelection);
                $provide.value('PlayerSelection', mocks.PlayerSelection);
            });
            sandbox = sinon.sandbox.create();
            gameModel = sinon.sandbox.mock(mocks.PlayerSelection);


            inject(function ($injector, $state, $interval) {
                playerSelection = $injector.get('PlayerSelection');
                gameProxy = $injector.get('GameProxy');
                state = $state;
                interval = $interval;
            });

        });

        it('Ensures the current player is player 1', function () {
            mocks.CoreData.currentPlayer.should.equal('1');
        });

        it('Ensures the current player is player 1', function () {
            gameProxy.gameBoard='000000000';
        });

        it('Ensures the current player is player 1', function () {
            gameProxy.gameWinner = '';
        });


    });

}());