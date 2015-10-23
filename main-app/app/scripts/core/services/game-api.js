(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Core')
        .service('GameApi',  ['GameProxy', function (gameProxy) {
            var me = this,
                createNewGameData = function(player1Type, player2Type){
                    return {
                        "player1": player1Type,
                        "player2": player2Type
                    };
                },
                createMakeMoveData = function (playerNumber, chosenSquare) {
                    return {
                        "playerNumber": playerNumber,
                        "chosenSquare": chosenSquare
                    };
                },
                callApi = function(callName, requestData, updateCallback){
                    gameProxy.apiCall(callName, requestData)
                        .then(function (data) {
                            updateCallback(data);
                        }).catch(function (data) {
                            /* Error stub */
                            console.log(data);
                        });
                };

            me.makeNewGame = function (player1Type, player2Type, updateCallback) {
                callApi("newgame", createNewGameData(player1Type, player2Type), updateCallback);
            };

            me.takeTurn = function (playerNumber, squareNumber, updateCallback) {
                callApi("makemove", createMakeMoveData(playerNumber, squareNumber), updateCallback);
            };
    }]);
})();