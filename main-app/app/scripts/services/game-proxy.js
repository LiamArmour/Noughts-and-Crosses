(function () {
    'use strict';

    angular.module('Tombola.NoughtsAndCrosses.Proxy')
        .service('gameProxy', ['$http', "proxyConstants", function($http, proxyConstants){
            var me = this;

            me.newGame = function(player1, player2){
                return sendRequest(proxyConstants.newGameURL, {player1: player1, player2: player2});
            };

            me.takeTurn = function(player, chosenCell){
                return sendRequest(proxyConstants.makeMoveURL, {playerNumber: player.toString(), chosenSquare: chosenCell});
            };

            var sendRequest = function(url, content){
                return $http.post(url, content, {withCredentials: true});
            };

        }]);

})();