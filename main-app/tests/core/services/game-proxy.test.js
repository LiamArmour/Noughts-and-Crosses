(function () {
    'use strict';

    describe("Testing-the-game-proxy", function() {
        var gameProxy,
            promise,
            proxy;
        
        beforeEach(function() {
            module('Tombola.Games.NoughtsAndCrosses.Core');
            inject(function($injector) {
                gameProxy = $injector.get('GameProxy');
                httpServer = $injector.get('$httpBackend');
                requestHnadler = $httpBackend.when('POST','http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove')
                    .respond(function(){
                        return [200, {board: '000000000'}]
                    });
            });
        });

        it('Ensures the game makes a turn', function() {

        });

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

    });
})();