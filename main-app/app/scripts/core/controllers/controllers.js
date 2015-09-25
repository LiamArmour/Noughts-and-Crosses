(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')

        .controller('CoreController', ['$scope','$state','NewGame',  function($scope, $state, newGame) {
            $scope.gameTitle = 'Noughts and Crosses';
            $scope.makeNewGame= function (){
                newGame.makeNewGame();
                $state.go('gameBaord');
            };

        }]);
})();