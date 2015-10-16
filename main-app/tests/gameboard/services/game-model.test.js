(function () {
    'use strict';
    describe('Testing the game model service', function () {
        var playerSelection,
            gameModel,
            gameProxy,
            sandbox,

            $interval,
            $stateSpy;

        beforeEach(module('ui.router'));
        beforeEach(function () {
            module('Tombola.Games.NoughtsAndCrosses.Game');
            module(function ($provide) {
                $provide.value('PlayerSelection', mocks.PlayerSelection);
                $provide.value('GameProxy', mocks.GameProxy);
                $provide.value('$state', mocks.$state);
            });

            sandbox = sinon.sandbox.create();
            gameProxy = sinon.sandbox.mock(mocks.Gameproxy);
            $stateSpy = sinon.sandbox.spy(mocks.$state, 'go');

            inject(function ($injector) {
                playerSelection = $injector.get('PlayerSelection');
                gameProxy = $injector.get('GameProxy');
                gameModel = $injector.get('GameModel');
                $interval = $injector.get('$interval');
            });

        });

        //it.skip('Ensures the current player is player 1', function () {
        //    mocks.GameModel.currentPlayer =  mocks.GameModel.currentPlayer;
        //    mocks.GameModel.currentPlayer.should.equal('1');
        //});
        //
        //it.skip('Ensures the outcome starts at Continue', function () {
        //    mocks.GameModel.outcome =  mocks.GameModel.outcome;
        //    mocks.GameModel.outcome.should.equal('Continue');
        //});
        //
        //it.skip('Ensures the gameboard loads up empty', function () {
        //    mocks.GameModel.gameBoard =  mocks.GameModel.gameBoard;
        //    mocks.GameModel.gameBoard.should.equal('000000000');
        //});
        //
        //it.skip('Ensures the game winner is empty at the start', function () {
        //    mocks.GameModel.gameWinner =  mocks.GameModel.gameWinner;
        //    mocks.GameModel.gameWinner.should.equal('');
        //});

        it('Ensures the checkGameEnded function changes the end game state', function () {
            gameModel.outcome = 'Win';
            gameModel.checkGameEnded();
            //$interval.flush();
            $stateSpy.should.be.called.once();
            $stateSpy.should.be.called.with('gameWin');
        });

        afterEach(function(){
            sandbox.restore();
        })

    });

}());



//                checkGameEnded = function(){
//                    $interval(function(){
//                        if (outcome === "Win") {
//                            $state.go('gameWin');
//                        } else if (outcome === "Draw") {
//                            $state.go('gameDraw');
//                        }
//                    },5000, 1);
//                },







//every under needs testing above

//(function () {
//    'use strict';
//    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
//        .service('GameModel', ['$state', '$interval', 'PlayerSelection','GameProxy', function($state, $interval, playerSelection, gameProxy) {
//            var me = this,



//                checkGameEnded = function(){
//                    $interval(function(){
//                        if (outcome === "Win") {
//                            $state.go('gameWin');
//                        } else if (outcome === "Draw") {
//                            $state.go('gameDraw');
//                        }
//                    },5000, 1);
//                },




//                updateGameBoard = function(data){
//                    me.gameBoard = data.gameboard;
//                    outcome = data.outcome;
//                    me.gameWinner = data.winner;
//                    checkGameEnded();
//                };

//            me.playerSelection = playerSelection;


//            me.makeNewGame = function(){
//                gameProxy.apiCall("newgame",{"player1" : playerSelection.player1Type, "player2" : playerSelection.player2Type})
//                    .then(function(data){
//                        me.currentPlayer = playerSelection.getStartingPlayer();
//                        updateGameBoard(data);
//                    },
//                    function(data){
//                        console.log(data);
//                    });
//            };


//            me.takeTurn = function (index){
//                if (me.gameBoard[index] !== '0') {
//                    return;
//                }
//                gameProxy.apiCall("makemove", {"playerNumber": me.currentPlayer, "chosenSquare": index})
//                    .then(function(data){
//                        updateGameBoard(data);
//                        if (playerSelection.isHumanVsHuman()){
//                            me.currentPlayer = me.currentPlayer === 1 ? 2: 1;
//                        }
//                    },
//                    function(data){
//                        console.log('make move failed: ' + data );
//                    });
//            };


//        }]);
//})();