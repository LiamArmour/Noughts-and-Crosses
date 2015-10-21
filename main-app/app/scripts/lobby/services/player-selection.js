(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Lobby')
        .service('PlayerSelection', ['PlayerTypes', function(playerTypes){
            var me = this,
                humanPlayer = playerTypes[0],
                selectCharacter = function (currentPlayerType) {
                    var nextIndex = playerTypes.indexOf(currentPlayerType) + 1;
                    nextIndex = nextIndex === playerTypes.length ? 0 : nextIndex;
                    return playerTypes[nextIndex];
                };
            me.player1Type = humanPlayer;
            me.player2Type = humanPlayer;
            me.selectPlayer = function(playerNumber){
                var playerTypeName = 'player' + playerNumber + 'Type';
                me[playerTypeName] = selectCharacter(me[playerTypeName]);
            };

            me.isPlayer1Human = function (){
                return me.player1Type === humanPlayer;
            };

            me.isPlayer2Human = function (){
                return me.player2Type === humanPlayer;
            };

            me.isHumanVsHuman = function(){
                return me.isPlayer1Human() && me.isPlayer2Human();
            };
        }]);
})();