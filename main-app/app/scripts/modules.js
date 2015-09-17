(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses', []);
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
            $UrlRouterProvider.otherwise("/playerSelection");
            $StateProvider
                .state('playerSelection', {
                    url: "/playerSelection",
                    templateUrl: "partials/playerselection.html"
                })
                .state('gameBaord', {
                    url: "/gameBoard",
                    templateUrl: "partials/gameboard.html"
                })
        }])
})();