(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
        .service('EndOfGameService', ['$state', '$interval', 'Sound', function($state, $interval, sound) {
            var me = this;
            me.checkGameEnded = function(outcome){
                $interval(function(){
                    if (outcome === "Win") {
                        $state.go('gameWin');
                    } else if (outcome === "Draw") {
                        $state.go('gameDraw');
                    }
                    sound.playSound(0, 30);
                },5000, 1);
            };
        }]);
})();