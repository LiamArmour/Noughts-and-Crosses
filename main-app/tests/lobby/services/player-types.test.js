(function () {
    'use strict';

    describe("Testing-the-player-selection", function() {
        var constants;
        beforeEach(function() {
            module('Tombola.Games.NoughtsAndCrosses.Lobby');
            inject(function($injector) {
                constants = $injector.get('PlayerTypes');
            });
        });

        it('Ensures player type 0 is human', function() {
            assert.equal('human', constants[0]);
        });

        it('Ensures player type 1 is pre trained', function() {
            assert.equal('pre-trained', constants[1]);
        });

        it('Ensures player type 3 is random', function() {
            assert.equal('random', constants[2]);
        });

    });
})();