(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
        .service('EndOfGameService', ['$state', '$interval', function($state, $interval) {
            var me = this;
            me.checkGameEnded = function(outcome){
                $interval(function(){
                    if (outcome === "Win") {
                        $state.go('gameWin');
                    } else if (outcome === "Draw") {
                        $state.go('gameDraw');
                    }
                },5000, 1);
            };
        }]);
})();