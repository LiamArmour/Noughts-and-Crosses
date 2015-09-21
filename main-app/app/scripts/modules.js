(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Lobby', []);
    angular.module('Tombola.Games.NoughtsAndCrosses.GameBoard', []);
    angular.module('Tombola.Games.NoughtsAndCrosses', ['ui.router', 'Tombola.Games.NoughtsAndCrosses.Lobby'])
    .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/playerSelection");
        $stateProvider
            .state('playerSelection', {
                url: "/playerSelection",
                controller:'LobbyController',
                templateUrl: "partials/player-selection.html",
            })
            .state('gameBaord', {
                url: "/gameBoard",
                templateUrl: "partials/game-board.html",
            })
            .state('gameRules', {
                url: "/rules",
                templateUrl: "partials/game-rules.html",
            })
            .state('gameAbout', {
                url: "/gameAbout",
                templateUrl: "partials/game-about.html",
            });

    }]);

})();