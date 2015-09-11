(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses', [])

        .controller('GameboardTextController', function($scope, $interval) {
            $scope.gameTitle = "Noughts and Crosses";
            $scope.playerOne = "";
            $scope.playerTwo = "";
            $scope.gameBoard='000000000';
        });

})();