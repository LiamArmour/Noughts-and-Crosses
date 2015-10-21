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
            constants.toggleCss();
            constants.currentStyle.should.equal('css/football.css');
            constants.toggleCss();
            constants.currentStyle.should.equal('css/minion.css');
        });

        it('Ensures the rotation returns football if the button is clicked once', function(){
            constants.toggleCss();
            constants.currentStyle.should.equal('css/football.css');
        });

        it('Ensures the rotation returns to minion if the button is clicked twice', function(){
            constants.toggleCss();
            constants.toggleCss();
            constants.currentStyle.should.equal('css/minion.css');
        });

    });
})();