(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Proxy')
        .constant('proxyConstants', {
            newGameURL : "http://noughtsandcrosses:35000/api/v1.0/newgame",
            makeMoveURL : "http://noughtsandcrosses:35000/api/v1.0/makemove"
        });
})();