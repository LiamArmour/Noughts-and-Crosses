(function() {
    'use strict';

    describe('Testing the lobby controller', function () {
        var $scope,
            controller,
            $rootScope;

        beforeEach(function(){
            module('Tombola.Games.NoughtsAndCrosses');

            inject(function (_$rootScope_, $controller) {
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                controller = $controller('LobbyController', {
                    $scope: $scope,
                    playerSelection: mocks.PlayerSelection,
                });
            });
        });

        it('Ensures the player selection is loaded correctly in the lobby', function () {
            $scope.playerSelection.should.equal(mocks.playerSelection);
        });

    });

})();