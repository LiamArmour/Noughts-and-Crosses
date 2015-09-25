(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Lobby', []);
    angular.module('Tombola.Games.NoughtsAndCrosses.Proxy', []);
    angular.module('Tombola.Games.NoughtsAndCrosses.GameBoard', []);

    angular.module('Tombola.Games.NoughtsAndCrosses', ['ui.router',
        'Tombola.Games.NoughtsAndCrosses.Lobby',
        'Tombola.Games.NoughtsAndCrosses.Proxy',
        'Tombola.Games.NoughtsAndCrosses.GameBoard'])

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
            })
            .state('gameWin', {
                url: "/win",
                templateUrl: "partials/game-win.html",
            })
            .state('gameDraw', {
                url: "/draw",
                templateUrl: "partials/game-draw.html",
            });
    }]);

})();