(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Lobby')
        .service('PlayerSelection', ['PlayerTypes', function(playerTypes){
            var me = this,
                selectCharacter = function (currentPlayerType) {
                    var nextIndex = playerTypes.indexOf(currentPlayerType) + 1;
                    nextIndex = nextIndex === playerTypes.length ? 0 : nextIndex;
                    return playerTypes[nextIndex];
                };

            me.player1Type = playerTypes[0];
            me.player2Type = playerTypes[1];

            me.selectPlayer = function(playerNumber){
                var playerTypeName = 'player' + playerNumber + 'Type';
                me[playerTypeName] = selectCharacter(me[playerTypeName]);
            };
        }]);
})();