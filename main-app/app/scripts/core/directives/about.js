(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .directive('gameAbout', function() {
            return{
                restrict: 'E',
                templateUrl: 'partials/game-about.html'
            };
        });
})();