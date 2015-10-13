(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Core')

        .controller('MainController', ['$scope','$state','GameModel','StyleSelection',  function($scope, $state, gameModel, styleSelection) {
            $scope.gameTitle = 'Noughts and Crosses';
            $scope.displayStyle = styleSelection;
            $scope.changeStyle = styleSelection.toggleCss;

            $scope.makeNewGame= function (){
                gameModel.makeNewGame();
                $state.go('gameBaord');
            };
<<<<<<< HEAD
            $scope.changePath = function() {
                if ($scope.nextStyleName === 'Football'){
                    $scope.stylePath='css/football.css';
                    $scope.nextStyleName = 'Minions';
                } else {
                    $scope.stylePath='css/minion.css';
                    $scope.nextStyleName = 'Football';
                }

            };
=======
>>>>>>> master
        }]);
})();