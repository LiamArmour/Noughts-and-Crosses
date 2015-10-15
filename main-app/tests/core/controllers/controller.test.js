(function () {
    'use strict';
    describe('Testing the main controller', function () {
        var state,
            controller,
            scope;

        beforeEach(module('ui.router'));
        beforeEach(function ($injector) {
            module('Tombola.Games.NoughtsAndCrosses.Core');

            inject(function ($controller, $rootScope, $state) {
                scope = $rootScope.$new();
                state = $state;
                controller = $controller('MainController', {
                    $scope: scope
                });

            });

        });

        it('Ensures the game title is correct', function () {
            controller.gameTitle.should.equal('Noughts and Crosses');
        });
    });

})();