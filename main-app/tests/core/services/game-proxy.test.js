(function () {
    'use strict';

    describe("Testing-the-game-proxy", function() {
        var httpBackend,
            promise,
            proxy;

        beforeEach(function() {
            module('Tombola.Games.NoughtsAndCrosses.Core');
            inject(function($httpBackend, $q, _Proxy_ ){
                httpBackend = $httpBackend;
                promise = $q;
                proxy = _Proxy_;
            });
        });

        it('Ensures the newGame function is working and returns values', function(){
            var theResponse = {'outcome':'Continue','gameboard':'000000000','winner':0};
            httpBackend.expectPOST("http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame" , {'player1':"human", 'player2':"human"})
                .respond(theResponse);
            var returnedPromise = proxy.newGame("human", "human");
            var result;
            returnedPromise.then(function(response){
                result = response;
            });
            httpBackend.flush();
            result.should.be.deep.equal(theResponse);
        });

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

    });
})();