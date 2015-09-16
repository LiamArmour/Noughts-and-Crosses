(function () {
    'use strict';

    angular.module('Tombola.Games.NoughtsAndCrosses')
        .service('gameProxy', ['$http', '$q', function($http, $q){
            var me = this;
            me.newGame = function(player1type, player2type) {
                var defered = $q.defer();
                $http.post("http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame", {"player1": player1type, "player2": player2type}, {"withCredentials": "true"}).
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
                $http.post("http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove", {"playerNumber": playerNumber, "chosenSquare": chosenSquare}, {"withCredentials": "true"}).
                    then(function(response) {
                        defered.resolve(response.data);
                    }, function(response){
                        defered.reject(response.data);
                    });

                return defered.promise;
            };

        }]);
})();