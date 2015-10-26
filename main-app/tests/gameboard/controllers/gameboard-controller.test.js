(function() {
    'use strict';

    describe('Testing the game board controller', function () {
        var $scope,
            controller,
            sandbox,
            $rootScope;

        beforeEach(function(){
            module('Tombola.Games.NoughtsAndCrosses.Game');

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

        it('Ensures the game is loaded correctly', function () {
            $scope.model.should.equal(mocks.GameModel);
        });

    });

})();