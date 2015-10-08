(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Core')

        .controller('MainController', ['$scope','$state','GameModel','StyleSelection',  function($scope, $state, gameModel, styleSelection) {
            $scope.gameTitle = 'Noughts and Crosses';
            $scope.displayStyle = styleSelection;
            $scope.chnageStyle = styleSelection.toggleCss;

            $scope.makeNewGame= function (){
                gameModel.makeNewGame();
                $state.go('gameBaord');
            };
        }]);
})();