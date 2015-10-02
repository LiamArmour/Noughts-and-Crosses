(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
        .service('GameModel', ['$state', '$interval', 'PlayerSelection','GameProxy', function($state, $interval, playerSelection, gameProxy) {
            var me = this,
                outcome = 'Continue',
                checkGameEnded = function(){
                    $interval(function(){
                        if (outcome === "Win") {
                            $state.go('gameWin');
                        } else if (outcome === "Draw") {
                            $state.go('gameDraw');
                        }
                    },5000, 1);
                },
                updateGameBoard = function(data){
                    me.gameBoard = data.gameboard;
                    outcome = data.outcome;
                    me.gameWinner = data.winner;
                    checkGameEnded();
                };
            me.playerSelection = playerSelection;
            me.currentPlayer = '1';
            me.gameBoard='000000000';
            me.gameWinner = '';
            me.makeNewGame = function(){
                gameProxy.apiCall("newgame",{"player1" : playerSelection.player1Type, "player2" : playerSelection.player2Type})
                    .then(function(data){
                        me.currentPlayer = playerSelection.getStartingPlayer();
                        updateGameBoard(data);
                    },
                    function(data){
                        console.log(data);
                    });
            };
            me.takeTurn = function (index){
                if (me.gameBoard[index] !== '0') {
                    return;
                }
                gameProxy.apiCall("makemove", {"playerNumber": me.currentPlayer, "chosenSquare": index})
                    .then(function(data){
                        updateGameBoard(data);
                        if (playerSelection.isHumanVsHuman()){
                            me.currentPlayer = me.currentPlayer === 1 ? 2: 1;
                        }
                    },
                    function(data){
                        console.log('make move failed: ' + data );
                    });
            };
        }]);
})();