(function () {
    'use strict';
    describe('Testing the main controller', function () {
        var state,
            controller,
            scope,
            gameModel,
            styleSelection;

        beforeEach(module('ui.router'));
        beforeEach(function ($injector) {
            module('Tombola.Games.NoughtsAndCrosses.Core');


            //Mock these in GameModel,StyleSelection

            inject(function ($controller, $rootScope, $state, GameModel, StyleSelection) {
                scope = $rootScope.$new();
                state = $state;
                controller = $controller('MainController', {
                    $scope: scope
                });
                gameModel = $injector('GameModel');
                styleSelection = $injector('StyleSelection');

            });

        });

        it('Ensures the game title is correct', function () {
            controller.gameTitle.should.equal('Noughts and Crosses');
        });
    });

})();