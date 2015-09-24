(function () {
    'use strict';

    angular.module('Tombola.Games.NoughtsAndCrosses')
        .constant('proxyConstants', {
            newGameURL : "http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame",
            takeTurnURL : "http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove"
        });

})();