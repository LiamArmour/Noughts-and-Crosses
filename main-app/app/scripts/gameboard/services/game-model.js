(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .service('GameModel', ['PlayerSelection','GameProxy','$state', function(playerSelection, gameProxy, $state) {
            var me = this;
            me.playerSelection = playerSelection;
            me.currentPlayer = '1';
            me.gameBoard='000000000';

            //me.takeTurn = function (index){
            //    if (me.gameBoard[index] !== '0') {
            //        return;
            //    }
            //    gameProxy.makeMove(me.currentPlayer, index)
            //        .then(function(data){
            //            me.gameBoard = data.gameboard;
            //            me.gameBoard= setCharAt(me.gameBoard , index, me.currentPlayer);
            //
            //            if (playerSelection.player1Type === 'human' && playerSelection.player2Type === 'human'){
            //                me.currentPlayer = me.currentPlayer === 1 ? 2: 1;
            //            }
            //
            //            if (data.outcome === "Win") {
            //                $state.go('gameWin');
            //            } else if (data.outcome === "Draw") {
            //                $state.go('gameDraw');
            //            }
            //        },
            //        function(data){
            //            console.log('make move failed: ' + data );
            //        });
            //};


            function setCharAt(gameboardString,index,chr) {
                if(index > gameboardString.length-1) return gameboardString;
                return gameboardString.substr(0,index) + chr + gameboardString.substr(index+1);
            }

        }]);
})();


