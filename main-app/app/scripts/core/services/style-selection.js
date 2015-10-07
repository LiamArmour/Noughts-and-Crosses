(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Core')
        .service('StyleSelection', ['StyleTypes', function(styleTypes){
            var me = this,
                nextTheme = playerTypes[1],

                selectCharacter = function (currentThemeType) {
                    var nextIndex = styleTypes.indexOf(currentThemeType) + 1;
                    nextIndex = nextIndex === styleTypes.length ? 0 : nextIndex;
                    return styleTypes[nextIndex];
                };


            me.selectPlayer = function(playerNumber){
                var playerTypeName = 'player' + playerNumber + 'Type';
                me[playerTypeName] = selectCharacter(me[playerTypeName]);
            };
            me.getStartingPlayer = function(){
                if (me.player1Type !== nextTheme && me.player2Type === nextTheme){
                    return 2;
                }
                return 1;
            };
            me.isHumanVsHuman = function(){
                return me.player1Type === humanPlayer && me.player2Type === humanPlayer;
            };
        }]);
})();