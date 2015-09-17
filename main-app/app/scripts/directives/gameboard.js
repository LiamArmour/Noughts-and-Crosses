(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .directive('gameBoard', function() {
            return{
                restrict: 'E',
                templateUrl: 'partials/gameboard.html'
            }
        });
})();