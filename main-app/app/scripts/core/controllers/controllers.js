(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Core')

        .controller('MainController', ['$scope','$state','GameModel',  function($scope, $state, gameModel) {
            $scope.gameTitle = 'Noughts and Crosses';
            $scope.makeNewGame= function (){
                gameModel.makeNewGame();
                $state.go('gameBaord');
            };

        }]);
})();