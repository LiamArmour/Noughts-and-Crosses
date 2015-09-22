(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .service('GameModel', ['PlayerSelection','GameProxy', function(playerSelection, gameProxy) {
            var me = this;
            me.playerSelection = playerSelection;
            me.currentPlayer = '1';
            me.gameBoard='000000000';


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
                        me.gameBoard = data.gameboard;
                    },
                    function(data){
                        console.log('Game didnt start');
                    });
            };


            me.takeTurn = function (index){
                if (me.gameBoard[index] !== '0') {
                    return;
                }
                gameProxy.makeMove(me.currentPlayer, index)
                    .then(function(data){
                        console.log('1 ' + me.currentPlayer);

                        console.log('2 ' + me.currentPlayer);
                        me.gameBoard = data.gameboard;
                        me.gameBoard= setCharAt(me.gameBoard , index, me.currentPlayer);

                        if (playerSelection.player1Type === 'human' && playerSelection.player2Type === 'human'){
                            me.currentPlayer = me.currentPlayer === 1 ? 2: 1;
                        }
                    },
                    function(data){
                        console.log('make move failed: ' + data );
                    });
            };
            function setCharAt(gameboardString,index,chr) {
                if(index > gameboardString.length-1) return gameboardString;
                return gameboardString.substr(0,index) + chr + gameboardString.substr(index+1);
            }

        }]);
})();


