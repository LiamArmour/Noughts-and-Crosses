(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Proxy')
        .constant('proxyConstants', {
            newGameURL : "http://noughtsandcrosses:35000/api/v1.0/newgame",
            takeTurnURL : "http://noughtsandcrosses:35000/api/v1.0/makemove"
        });

})();