(function () {
    'use strict';

    describe("Testing-the-style-selection", function() {
        var constants;
        beforeEach(function() {
            module('Tombola.Games.NoughtsAndCrosses.Core');
            inject(function($injector) {
                constants = $injector.get('StyleTypes');
            });
        });

        it('Ensures style type 0 is minion theme', function() {
            constants[0].should.equal('css/minion.css');
        });

        it('Ensures style type 1 is football theme', function() {
            constants[1].should.equal('css/football.css');
        });

    });
})();