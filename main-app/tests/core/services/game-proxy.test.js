(function () {
    'use strict';
    describe('Testing my game proxy', function () {
        var httpBackend,
            proxyName,
            sandbox;

        beforeEach(function(){
            module('Tombola.Games.NoughtsAndCrosses.Core');
            inject(function( $injector){
                httpBackend = $injector.get('$httpBackend');
                proxyName = $injector.get('GameProxy');

                module(function($provide){
                $provide.service('ProxyConstants', mocks.ProxyConstants);
            });

            sandbox = sinon.sandbox.create();
            ProxyConstants = sinon.sandbox.mock(mocks.ProxyConstants);

        });

        it('Ensures the newgame function is working and returns values', function(){
            var theResponse = {'outcome':'Continue','gameboard':'000000000','winner':0};
            httpBackend.expectPOST("http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame" , {'player1':"human", 'player2':"human"})
                .respond(theResponse);
            var returnedPromise = proxyName.newGame("human", "human");
            var result;
            returnedPromise.then(function(response){
                result = response;
                result.should.be.deep.equal(theResponse);
            });
            httpBackend.flush();
        });

        it('Ensures the makemove function is working and returns values', function(){
            var theResponse = {'outcome':'Continue','gameboard':'100000000','winner':0};
            httpBackend.expectPOST("http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove" , {"playerNumber": "1",
                "chosenSquare": "0"})
                .respond(theResponse);
            var returnedPromise = proxyName.playerTurn("1", "0"),
                result;
            returnedPromise.then(function(response){
                result = response;
            });
            httpBackend.flush();
            result.should.be.deep.equal(theResponse);
        });

        afterEach( function(){
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });
    });
}());