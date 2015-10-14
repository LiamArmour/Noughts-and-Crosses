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


        it('Ensures the game makes a turn', function() {

        });

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

    });
})();