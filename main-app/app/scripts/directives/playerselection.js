(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .directive('playerSelection', function() {
            return{
                restrict: 'E',
                templateUrl: 'partials/playerselection.html'
            }
            });
})();