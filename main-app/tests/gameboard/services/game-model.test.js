(function () {
    'use strict';
    describe('Testing the game model service', function () {
        var playerSelection,
            gameModel,
            gameProxyStub,
            sandbox,
            $q,
            $interval,
            $stateSpy,
            $rootScope,
            winner1Data = {gameboard:'111111111', outcome:'Win', winner:''},
            takeTurnData = {"outcome":"Continue","gameboard":"120000000","winner":0};

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

            inject(['$rootScope', '$injector', function (_$rootScope_, $injector) {
                $rootScope = _$rootScope_;
                playerSelection = $injector.get('PlayerSelection');
                gameProxyStub = $injector.get('GameProxy');
                gameModel = $injector.get('GameModel');
                $interval = $injector.get('$interval');
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


        it(' New game game won sets values and ends', function () {
            var deferred = $q.defer();
            var test = sinon.stub(mocks.GameProxy, 'apiCall');
            test.returns(deferred.promise);

            gameModel.makeNewGame();
            deferred.resolve(winner1Data);
            $rootScope.$digest();

            gameModel.gameBoard.should.equal(winner1Data.gameboard);
            gameModel.gameWinner.should.equal(winner1Data.winner);
        });

        it('Ensures the take turn function works', function () {
            var deferred = $q.defer();
            var takeTurnTest = sinon.stub(mocks.GameProxy, 'apiCall');
            takeTurnTest.returns(deferred.promise);

            gameModel.takeTurn();
            deferred.resolve(takeTurnData);
            $rootScope.$digest();

            //gameModel.gameBoard.should.equal(winner1Data.gameboard);
            //gameModel.gameWinner.should.equal(winner1Data.winner);
        });

        afterEach(function(){
            sinon.stub.reset();
            sandbox.restore();
        });
    });
}());