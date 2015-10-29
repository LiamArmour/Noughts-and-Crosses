(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Core')
        .factory('SoundConstant', function(){
            return {
                //All time is in seconds
                MINION_WIN_START: 0,
                MINION_WIN_DURATION: 5,
                MINION_DRAW_START: 5,
                MINION_DRAW_DURATION: 10,
            };
        });
})();