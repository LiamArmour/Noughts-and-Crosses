(function () {
    'use strict';
    describe('Testing the game model service', function () {
        var gameModel,
            sandbox,
            $q,
            $stateSpy,
            $rootScope,
            getStartingPlayerSpy,
            gameApiMakeNewGameSpy,
            takeTurnSpy,
            makeNewGameData = {"outcome":"Continue","gameboard":"000000000","winner":0};

        beforeEach(function () {
            module('ui.router');
            module('Tombola.Games.NoughtsAndCrosses.Game');
            module(function ($provide) {
                $provide.value('PlayerSelection', mocks.PlayerSelection);
                $provide.value('GameApi', mocks.GameApi);
                $provide.value('EndOfGameService', mocks.EndOfGameService)
                $provide.value('$state', mocks.$state);
            });

            sandbox = sinon.sandbox.create();
            $stateSpy = sinon.sandbox.spy(mocks.$state, 'go');
            getStartingPlayerSpy = sinon.sandbox.spy(mocks.PlayerSelection, 'getStartingPlayer');
            gameApiMakeNewGameSpy = sinon.sandbox.spy(mocks.GameApi, 'makeNewGame');
            takeTurnSpy = sinon.sandbox.spy(mocks.GameApi, 'takeTurn');

            inject(['$injector', function ($injector) {
                gameModel = $injector.get('GameModel');
                $q = $injector.get('$q');
                $rootScope = $injector.get('$rootScope');
            }]);
        });

        it('ensure the starting player is player one', function(){
            gameModel.currentPlayer.should.equal('1');
        });

        afterEach(function(){
            sandbox.restore();
        });
    });
}());