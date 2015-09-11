(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')

        .controller('GameboardTextController', function($scope, $interval) {
            var currentPlayer;
            currentPlayer = '1';

            $scope.gameTitle = "Noughts and Crosses";
            $scope.playerOne = "";
            $scope.playerTwo = "";
            $scope.gameBoard='000000000';
            $scope.takeTurn = function (index){
                if ($scope.gameBoard.charAt(index)!=="0"){
                    return;
                }
                if (currentPlayer === '1'){
                    $scope.gameBoard= setCharAt($scope.gameBoard ,index,'1');
                    document.getElementsByTagName('img')[index].setAttribute("src", "images/Crosses.gif");
                    currentPlayer = '2';
                }
                else {
                    $scope.gameBoard = setCharAt($scope.gameBoard, index, '2');
                    document.getElementsByTagName('img')[index].setAttribute("src", "images/noughts.png");
                    currentPlayer = '1';
                }
            };
        })
})();