(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Core')
        .service('Sound', ['$timeout', function($timeout){
            var me = this,
                audio = '',
                stopAudio = function(){
                    audio.get(0).pause();
                    me.currentlyPlaying = false;
                };

            me.currentlyPlaying = false;

            me.playSound = function(startTime, duration){
                if(!me.currentlyPlaying) {
                    audio = angular.element('#playsounds');
                    audio.prop('currentTime', startTime);
                    audio.get(0).play();
                    me.currentlyPlaying = true;
                    $timeout(stopAudio, duration, true);
                }
            };
        }]);
})();