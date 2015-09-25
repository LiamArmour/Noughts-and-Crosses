(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .service('NewGame', ['PlayerSelection','GameProxy','GameModel', function(playerSelection, gameProxy, gameModel) {
            var me = this;

            me.makeNewGame = function(){
                gameProxy.newGame(playerSelection.player1Type, playerSelection.player2Type).then(
                    function(data){

                        if (playerSelection.player1Type === 'human' && playerSelection.player2Type === 'human') {
                            me.currentPlayer = 1;
                        }else if (playerSelection.player1Type !== 'human' && playerSelection.player2Type === 'human'){
                            me.currentPlayer = 2;
                        }else {
                            me.currentPlayer = 1;
                        }
                        gameModel.gameBoard = data.gameboard;
                    },
                    function(data){
                        console.log('Game didnt start');
                    });
            };

        }]);
})();


