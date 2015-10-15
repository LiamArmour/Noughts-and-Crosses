(function () {
    'use strict';
    describe('Testing the game model service', function () {
        var playerSelection,
            gameProxy;

        beforeEach(function () {
            module('Tombola.Games.NoughtsAndCrosses.Game');
            module(function ($provide) {
                $provide.value('GameModel');
            });

            inject(function ($injector) {
                playerSelection = $injector.get('PlayerSelection');
                gameProxy = $injector.get('GameProxy');
            });

        });

        it('Ensures the newgame function is working and returns values', function () {
            var theResponse = {'outcome': 'Continue', 'gameboard': '000000000', 'winner': 0};
            httpBackend.expectPOST("http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame", {'player1': "human", 'player2': "human"})
                .respond(theResponse);
            var returnedPromise = gameProxy.apiCall("newgame",{'player1' : "human", 'player2' : "human"});
            var result;
            returnedPromise.then(function (response) {
                result = response;
                result.should.be.deep.equal(theResponse);
            });
            httpBackend.flush();
        });





    });

}());