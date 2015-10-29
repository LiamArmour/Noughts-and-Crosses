(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Core')
        .directive('gameSound', function(){
            return {
                restrict: 'E',
                link: function postlink (scope, iElement, iAttrs, controller){
                    iElement.append(angular.element('<audio id="playsounds"><source src="sounds/sounds.mp3" type="audio/mp3"/></audio>'));
                }
            };
        });
})();