(function() {
    'use strict';

    describe('Testing the game board controller', function () {
        var $scope,
            controller,
            sandbox,
            $rootScope,
            makeNewGameSpy,
            stateSpy;

        beforeEach(function(){
            module('ui.router');
            module('Tombola.Games.NoughtsAndCrosses.Game');

            makeNewGameSpy = sinon.sandbox.spy(mocks.GameModel, 'makeNewGame');
            stateSpy = sinon.sandbox.spy(mocks.$state, 'go');

            inject(function (_$rootScope_, $controller) {
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                sandbox = sinon.sandbox.create();
                controller = $controller('GameBoardController', {
                    $scope: $scope,
                    $state:mocks.$state,
                    GameModel: mocks.GameModel,
                });
            });
        });

        it.skip('Ensures the game title is correct', function () {
            $scope.gameTitle.should.equal('Noughts and Crosses');
        });

        afterEach(function(){
            sandbox.restore();
        });

    });

})();