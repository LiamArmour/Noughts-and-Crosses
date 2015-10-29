(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Core')
        .factory('SoundConstant', function(){
            return {
                //All time is in seconds
                MINION_START: 0,
                MINION_DURATION: 30,
            };
        });
})();