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
            constants[0].should.equal('human');
        });

        it('Ensures player type 1 is pre trained', function() {
            constants[1].should.equal('pre-trained');
        });

        it('Ensures player type 2 is random', function() {
            constants[2].should.equal('random');
        });

    });
})();