(function () {
    'use strict';
    describe('Testing the game model service', function () {
        var playerSelection,
            gameModel,
            gameProxyStub,
            sandbox,
            $q,
            $stateSpy;

        beforeEach(function () {
            module('ui.router');
            module('Tombola.Games.NoughtsAndCrosses.Game');
            module(function ($provide) {
                $provide.value('PlayerSelection', mocks.PlayerSelection);
                $provide.value('GameProxy', mocks.GameProxy);
                $provide.value('$state', mocks.$state);
            });

            sandbox = sinon.sandbox.create();
            $stateSpy = sinon.sandbox.spy(mocks.$state, 'go');

            inject(['$injector', function ($injector) {
                playerSelection = $injector.get('PlayerSelection');
                gameProxyStub = $injector.get('GameApi');
                gameModel = $injector.get('EndOfGameService');
                $q = $injector.get('$q');
            }]);
        });

        it('ensure the starting player is player one', function(){
            gameModel.currentPlayer.should.equal('1');
        });

        it('ensure the gameboard loads up empty', function(){
            gameModel.gameBoard.should.equal('000000000');
        });

        it('ensure the there is no game winner at the start', function(){
            gameModel.gameWinner.should.equal('');
        });

        it('ensure there is 2 starting players to begin the game', function(){
            gameModel.playerSelection.should.deep.equal(mocks.PlayerSelection);
        });

        afterEach(function(){
            //sinon.stub.reset();
            sandbox.restore();
        });
    });
}());