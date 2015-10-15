(function () {
    'use strict';
    describe('Testing the main controller', function () {
        var controller,
            scope,
            state;

        beforeEach(function ($injector) {module('Tombola.Games.NoughtsAndCrosses.Core');
            state = $injector.get($state);
            inject(function ($controller, $rootScope) {
                scope = $rootScope.$new();
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