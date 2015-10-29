(function () {
    'use strict';
    describe('Testing the game model service', function () {
        var endOfGameService,
            sandbox,
            stateSpy,
            $rootScope,
            $scope,
            $interval;

        beforeEach(function () {
            module('Tombola.Games.NoughtsAndCrosses.Game');
            module(function ($provide) {
                $provide.value('$state', mocks.$state);
                $provide.value('Sound', mocks.Sound);
            });

            sandbox = sinon.sandbox.create();
            stateSpy = sinon.sandbox.spy(mocks.$state, 'go');

            inject(['$injector', function ($injector) {
                endOfGameService = $injector.get('EndOfGameService');
                $rootScope = $injector.get('$rootScope');
                $interval = $injector.get('$interval');
                $scope = $rootScope.$new();
            }]);
        });

        it('ensure check game ended works for a win', function(){
            endOfGameService.checkGameEnded('Win');
            $interval.flush(5000);
            stateSpy.should.have.been.calledOnce.calledWithExactly('gameWin');
        });

        it('ensure check game ended works for a draw', function(){
            endOfGameService.checkGameEnded('Draw');
            $interval.flush(5000);
            stateSpy.should.have.been.calledOnce.calledWithExactly('gameDraw');
        });

        afterEach(function(){
            sandbox.restore();
        });
    });
}());