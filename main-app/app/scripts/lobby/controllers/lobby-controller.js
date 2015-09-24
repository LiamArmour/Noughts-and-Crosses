(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .controller('LobbyController', ['$scope', 'PlayerSelection', function($scope, playerSelection) {
            $scope.playerSelection = playerSelection;
        }])
})();