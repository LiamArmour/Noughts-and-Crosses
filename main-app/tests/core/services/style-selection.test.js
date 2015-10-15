(function () {
    'use strict';
    describe('Testing the style selection', function () {
        var constants;
        beforeEach(function () {
            module('Tombola.Games.NoughtsAndCrosses.Core');
            inject(function ($injector) {
                constants = $injector.get('StyleSelection');
            });
        });

        it('Ensures minion is the default theme', function () {
            constants.currentStyle.should.equal('css/minion.css');
        });

        it('Ensures the rotation of the themes', function () {
            constants.getCurrentStyle();
            constants.currentStyle.should.equal('css/football.css');
            constants.getCurrentStyle();
            constants.currentStyle.should.equal('css/minion.css');
        });

    });
})();