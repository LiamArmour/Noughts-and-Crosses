(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .directive('navigationBar', function() {
            return{
                restrict: 'E',
                templateUrl: 'partials/navigation.html'
            }
        });
})();