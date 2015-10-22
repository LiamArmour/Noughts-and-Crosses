(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
        .service('GameModel', ['PlayerSelection','GameApi', 'EndOfGameService', function(playerSelection, gameApi, endOfGameService) {
            var me = this,
                isNewGame = true,
                squareIsFree = function(index){
                    return me.gameBoard[index] === '0';
                },
                updateGameBoard = function(data){
                    me.gameBoard = data.gameboard;
                    me.gameWinner = data.winner;
                    if(!isNewGame){
                        togglePlayer();
                    }
                    isNewGame = false;
                    endOfGameService.checkGameEnded(data.outcome);
                },
                togglePlayer = function(){
                    if (playerSelection.isHumanVsHuman()){
                        me.currentPlayer = me.currentPlayer === 1 ? 2: 1;
                    }
                };

            me.currentPlayer = '1';
            me.gameBoard='000000000';
            me.gameWinner = '';

            me.makeNewGame = function(){
                isNewGame = true;
                me.currentPlayer = playerSelection.getStartingPlayer();
                gameApi.makeNewGame(playerSelection.player1Type,  playerSelection.player2Type, updateGameBoard);
            };

            me.takeTurn = function (index){

                if (!squareIsFree(index)) {
                    return;
                }
                gameApi.takeTurn( me.currentPlayer,  index, updateGameBoard);
            };
        }]);
})();