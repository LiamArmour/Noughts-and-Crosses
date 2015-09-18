(function () {
    'use strict';
     angular.module('Tombola.Games.NoughtsAndCrosses', ['ui.router'])
        .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/playerSelection");
            $stateProvider

                .state('playerSelection', {
                    url: "/playerSelection",
                    templateUrl: "partials/player-selection.html",
                })
                .state('gameBaord', {
                    url: "/gameBoard",
                    templateUrl: "partials/game-board.html",
                });
        }]);

})();