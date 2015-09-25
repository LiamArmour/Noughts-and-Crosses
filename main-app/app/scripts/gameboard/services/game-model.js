(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
        .service('GameModel', ['PlayerSelection','GameProxy','$state', function(playerSelection, gameProxy, $state) {
            var me = this,
                outcome = 'Continue',
                checkGameEnded = function(){
                    if (outcome === "Win") {
                        $state.go('gameWin');
                    } else if (outcome === "Draw") {
                        $state.go('gameDraw');
                    }
                },
                updateGameBoard = function(data){
                    me.gameBoard = data.gameboard;
                    outcome = data.outcome;
                    checkGameEnded();
                };
            me.playerSelection = playerSelection;
            me.currentPlayer = '1';
            me.gameBoard='000000000';
            me.makeNewGame = function(){
                gameProxy.newGame(playerSelection.player1Type, playerSelection.player2Type).then(
                    function(data){
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
                gameProxy.makeMove(me.currentPlayer, index)
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