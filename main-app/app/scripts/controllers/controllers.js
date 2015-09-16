(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')

        .controller('GameboardController', ["$scope", "$interval", "gameProxy", function($scope, $interval, gameProxy) {
            var currentPlayer;
            currentPlayer = '1';

            $scope.gameTitle = "Noughts and Crosses";
            $scope.playerOne = "human";
            $scope.playerTwo = "human";
            $scope.gameBoard='000000000';
            $scope.mustShow = '';
            $scope.mustShow=false;

            $scope.selectPlayer = function(playerChoice){
                if (playerChoice === 1) {
                    $scope.playerOne = selectCharacter($scope.playerOne);
                }
                else {
                    $scope.playerTwo = selectCharacter($scope.playerTwo);
                }
            };
            var selectCharacter = function (playerChoice) {
                if (playerChoice === "human") {
                    return "pre-trained";
                }
                else
                    if (playerChoice === "pre-trained") {
                        return "random";
                    }
                    else {
                        return "human";
                    }
            };


            $scope.makeNewGame = function(){
                gameProxy.newGame($scope.playerOne, $scope.playerTwo).then(
                    function(data){
                        console.log('Game started');
                        $scope.mustShow=true;
                },
                    function(data){
                        console.log('Game didnt start');
                });


            };
            $scope.takeTurn = function (index){

                currentPlayer = 1;

                if ($scope.gameBoard[index] !== '0') {
                    return;
                }
                gameProxy.makeMove(currentPlayer, index)
                    .then(function(data){
                        $scope.gameBoard = data.gameboard;
                        $scope.gameBoard= setCharAt($scope.gameBoard , index, currentPlayer);

                        currentPlayer = 1;

                    },
                    function(data){
                    //IF FAILS
                });

                currentPlayer = currentPlayer === '1' ? '2': '1';

            };
            function setCharAt(gameboardString,index,chr) {
                if(index > gameboardString.length-1) return gameboardString;
                return gameboardString.substr(0,index) + chr + gameboardString.substr(index+1);
            }
        }])
})();