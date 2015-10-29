(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
        .service('EndOfGameService', ['$state', '$interval', 'Sound', function($state, $interval, sound) {
            var me = this;
            me.checkGameEnded = function(outcome){
                $interval(function(){
                    if (outcome === "Win") {
                        $state.go('gameWin');
                        sound.playSound(0, 5);
                    } else if (outcome === "Draw") {
                        $state.go('gameDraw');
                        sound.playSound(5, 10);
                    }
                },5000, 1);
            };
        }]);
})();