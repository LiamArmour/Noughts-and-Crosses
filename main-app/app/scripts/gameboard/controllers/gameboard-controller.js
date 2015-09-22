(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .controller('GameBoardController', ['$scope','GameModel', function($scope, gameModel) {
            $scope.model = gameModel;
        }]);
})();