(function () {
    'use strict';

    describe('Testing the main controller', function () {
        var $scope,
            controller,
            sandbox,
            $rootScope,
            makeNewGameSpy,
            stateSpy;

        beforeEach(function(){
            module('ui.router');
            module('Tombola.Games.NoughtsAndCrosses.Core');

            makeNewGameSpy = sinon.sandbox.spy(mocks.GameModel, 'makeNewGame');
            stateSpy = sinon.sandbox.spy(mocks.$state, 'go');

            inject(function (_$rootScope_, $controller) {
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                sandbox = sinon.sandbox.create();
                controller = $controller('MainController', {
                    $scope: $scope,
                    $state:mocks.$state,
                    GameModel: mocks.GameModel,
                    StyleSelection: mocks.StyleSelection
                });
            });
        });

        it('Ensures the game title is correct', function () {
            $scope.gameTitle.should.equal('Noughts and Crosses');
        });

        it('Ensures the minion style is default', function () {
            $scope.displayStyle.should.equal(mocks.StyleSelection);
        });

        it('Ensures the theme change can be toggled', function () {
            $scope.changeStyle.should.equal(mocks.StyleSelection.toggleCss);
        });

        it('Ensures the make new game creates new game and changes state', function () {
            $scope.makeNewGame();
            makeNewGameSpy.should.have.been.calledOnce;
            stateSpy.should.have.been.calledOnce.calledWithExactly('gameBoard');
        });

        afterEach(function(){
            sandbox.restore();
        });

    });

})();