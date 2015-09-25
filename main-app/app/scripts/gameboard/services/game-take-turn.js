(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .service('GameModel', ['PlayerSelection','GameProxy','$state','GameModel', function(playerSelection, gameProxy, $state , gameModel) {
            var me = this;
            me.takeTurn = function (index){
                if (gameModel.gameBoard[index] !== '0') {
                    return;
                }
                gameProxy.makeMove(me.currentPlayer, index)
                    .then(function(data){
                        gameModel.gameBoard = data.gameboard;
                        gameModel.gameBoard= setCharAt(gameModel.gameBoard , index, gameModel.currentPlayer);

                        if (playerSelection.player1Type === 'human' && playerSelection.player2Type === 'human'){
                            gameModel.currentPlayer = gameModel.currentPlayer === 1 ? 2: 1;
                        }

                        if (data.outcome === "Win") {
                            $state.go('gameWin');
                        } else if (data.outcome === "Draw") {
                            $state.go('gameDraw');
                        }
                    },
                    function(data){
                        console.log('make move failed: ' + data );
                    });
            };

        }]);
})();
