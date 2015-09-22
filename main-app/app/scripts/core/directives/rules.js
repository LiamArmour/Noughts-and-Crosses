(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .directive('gameRules', function() {
            return{
                restrict: 'E',
                templateUrl: 'partials/game-rules.html'
            };
        });
})();