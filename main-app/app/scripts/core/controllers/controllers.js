(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Core')

        .controller('MainController', ['$scope','$state','GameModel',  function($scope, $state, gameModel) {
            $scope.gameTitle = 'Noughts and Crosses';
            $scope.stylePath = 'css/minion.css';
            $scope.nextStyleName = 'Football';

            $scope.makeNewGame= function (){
                gameModel.makeNewGame();
                $state.go('gameBaord');
            };
            $scope.changePath = function() {
                if ($scope.nextStyleName === 'Football'){
                    $scope.stylePath='css/football.css';
                    $scope.nextStyleName = 'Minions';
                } else {
                    $scope.stylePath='css/minion.css';
                    $scope.nextStyleName = 'Football';
                }

            };

        }]);
})();