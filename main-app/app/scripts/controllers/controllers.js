(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')

        .controller('GameboardController', ["$scope", "$interval", "gameProxy", function($scope, $interval, gameProxy) {
            $scope.gameTitle = "Noughts and Crosses";
            $scope.playerOne = "human";
            $scope.playerTwo = "human";
            $scope.currentPlayer = '1';
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
                else if (playerChoice === "pre-trained") {
                    return "random";
                }
                else {
                    return "human";
                }
            };

            $scope.makeNewGame = function(){
                gameProxy.newGame($scope.playerOne, $scope.playerTwo).then(
                    function(data){
                        $scope.mustShow=true;

                        if ($scope.playerOne === 'human' && $scope.playerTwo === 'human') {
                            $scope.currentPlayer = 1;
                        }else if ($scope.playerOne !== 'human' && $scope.playerTwo === 'human'){
                            $scope.currentPlayer = 2;
                        }else {
                            $scope.currentPlayer = 1;
                        }
                        $scope.gameBoard = data.gameboard;
                },
                    function(data){
                        console.log('Game didnt start');
                });
            };


            $scope.takeTurn = function (index){
                if ($scope.gameBoard[index] !== '0') {
                    return;
                }
                gameProxy.makeMove($scope.currentPlayer, index)
                    .then(function(data){
                        console.log('1 ' + $scope.currentPlayer);

                        console.log('2 ' + $scope.currentPlayer);
                        $scope.gameBoard = data.gameboard;
                        $scope.gameBoard= setCharAt($scope.gameBoard , index, $scope.currentPlayer);

                        if ($scope.playerOne === 'human' && $scope.playerTwo === 'human'){
                            $scope.currentPlayer = $scope.currentPlayer === 1 ? 2: 1;
                        }
                    },
                    function(data){
                    console.log('make move failed: ' + data );
                });
            };
            function setCharAt(gameboardString,index,chr) {
                if(index > gameboardString.length-1) return gameboardString;
                return gameboardString.substr(0,index) + chr + gameboardString.substr(index+1);
            }
        }])
})();