(function () {
    'use strict';
    describe('Testing the game model service', function () {
        var gameModel,
            sandbox,
            $stateSpy,
            $rootScope;

        beforeEach(function () {
            module('Tombola.Games.NoughtsAndCrosses.Game');
            module(function ($provide) {
                $provide.value('$state', mocks.$state);
                $provide.value('$interval', mocks.$interval);
            });

            sandbox = sinon.sandbox.create();
            $stateSpy = sinon.sandbox.spy(mocks.$state, 'go');

            inject(['$injector', function ($injector) {
                gameModel = $injector.get('EndOfGameService');
                $rootScope = $injector.get('$rootScope');
            }]);
        });

        it('ensure the starting player is player one', function(){
            gameModel.currentPlayer.should.equal('1');
        });

        afterEach(function(){
            sandbox.restore();
        });
    });
}());