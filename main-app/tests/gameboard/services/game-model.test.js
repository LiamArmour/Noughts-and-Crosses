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
                $provide.value('GameProxy', mocks.GameProxy);
            });
            sandbox = sinon.sandbox.create();
            gameModel = sinon.sandbox.mock(mocks.PlayerSelection);
            gameProxy= sinon.sandbox.mock(mocks.Gameproxy);

            inject(function ($injector, $state, $interval) {
                playerSelection = $injector.get('PlayerSelection');
                gameProxy = $injector.get('GameProxy');
                state = $state;
                interval = $interval;
            });

        });

        it('Ensures the current player is player 1', function () {
            mocks.currentPlayer.should.equal('1');
        });

        it('Ensures the outcome starts at Continue', function () {
            gameProxy.outcome.should.equal('Continue');
        });

        it('Ensures the gameboard loads up empty', function () {
            mocks.GameModel.gameBoard =  mocks.CharacterLogic.humanLogic(2);
            mocks.GameModel.gameBoard.should.equal('000000000');
        });

        afterEach(function(){
            GameModel.verify();
            sandbox.restore();
        })

    });

}());

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
//            me.gameWinner = '';

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