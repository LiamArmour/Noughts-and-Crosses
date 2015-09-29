(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Core')

        .controller('MainController', ['$scope','$state','GameModel',  function($scope, $state, gameModel) {
            $scope.gameTitle = 'Noughts and Crosses';
            $scope.stylePath = 'css/minion.css';
            $scope.styleName = 'Football';

            $scope.makeNewGame= function (){
                gameModel.makeNewGame();
                $state.go('gameBaord');
            };
            $scope.changePath = function() {
                if ($scope.styleName === 'Minions'){
                    $scope.stylePath='css/football.css';
                    $scope.styleName = 'Minion';
                } else {
                    $scope.stylePath='css/minion.css';
                    $scope.styleName = 'Football';
                }

            };

        }]);
})();