(function () {
    'use strict';
    describe('Testing the game model service', function () {
        var playerSelection,
            gameModel,
            sandbox,
            $q,
            $stateSpy,
            updateGameBoard,
            winner1Data = {gameboard:'111111111', outcome:'Win', winner:''};

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

            inject(['$injector', function ($injector) {
                gameModel = $injector.get('GameModel');
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

        it('Ensures the new game function is working', function(){
            var deferred = $q.defer();
            var newGameTest = sinon.stub(mocks.GameApi, 'apiCall');
            newGameTest.returns(deferred.promise);

            gameModel.makeNewGame();
            console.log('do i work3');
            gameModel.makeNewGame(playerSelection.player1Type, playerSelection.player2Type, updateGameBoard);

            deferred.resolve(winner1Data);
            $rootScope.$digest();

            gameModel.isNewGame.should.equal(true);
            gameModel.currentPlayer = playerSelection.getStartingPlayer();



            //me.makeNewGame = function(){
            //    isNewGame = true;
            //    me.currentPlayer = playerSelection.getStartingPlayer();
            //    gameApi.makeNewGame(playerSelection.player1Type,  playerSelection.player2Type, updateGameBoard);
            //};

        });

        it('Ensures the take turn function is working', function(){

            //
            //me.takeTurn = function (index){
            //
            //    if (!squareIsFree(index)) {
            //        return;
            //    }
            //    gameApi.takeTurn( me.currentPlayer,  index, updateGameBoard);
            //};

        });



        afterEach(function(){
            sandbox.restore();
        });
    });
}());