(function () {
    'use strict';

    angular.module('Tombola.Games.NoughtsAndCrosses.Core')
        .service('GameProxy', ['$http', '$q', 'ProxyConstants', function($http, $q, proxyConstants){
            var me = this;
            me.newGame = function(player1type, player2type) {
                var defered = $q.defer();
                $http.post(proxyConstants.newGameURL, {"player1": player1type, "player2": player2type}, {"withCredentials": "true"}).
                    then(function (response) {
                        console.log('New Game: ' + player1type + ' vs ' + player2type);
                        defered.resolve(response.data);
                    }, function(response) {
                        defered.reject(response.data);
                    });

                return defered.promise;

            };


            me.makeMove = function(playerNumber, chosenSquare) {
                var defered = $q.defer();
                $http.post(proxyConstants.takeTurnURL, {"playerNumber": playerNumber, "chosenSquare": chosenSquare}, {"withCredentials": "true"}).
                    then(function(response) {
                        defered.resolve(response.data);
                    }, function(response){
                        defered.reject(response.data);
                    });

                return defered.promise;
            };

        }]);
})();
