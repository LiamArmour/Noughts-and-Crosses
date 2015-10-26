(function () {
    'use strict';
    describe('Testing the game model service', function () {
        var gameModel,
            sandbox,
            stateSpy,
            $rootScope,
            $scope,
            $interval;

        beforeEach(function () {
            module('Tombola.Games.NoughtsAndCrosses.Game');
            module(function ($provide) {
                $provide.value('$state', mocks.$state);
                $provide.value('$interval', mocks.$interval);
            });

            sandbox = sinon.sandbox.create();
            stateSpy = sinon.sandbox.spy(mocks.$state, 'go');

            inject(['$injector', function ($injector) {
                gameModel = $injector.get('EndOfGameService');
                $rootScope = $injector.get('$rootScope');
                $interval = $injector.get('$interval');
                $scope = $rootScope.$new();
            }]);
        });

        it('ensure check game ended works for a win', function(){
            $scope.checkGameEnded('Win');
            $interval.flush(5000);
            stateSpy.should.have.been.calledOnce.calledWithExactly('gameWin');
        });

        afterEach(function(){
            sandbox.restore();
        });
    });
}());

//(function () {
//    'use strict';
//    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
//        .service('EndOfGameService', ['$state', '$interval', function($state, $interval) {
//            var me = this;
//            me.checkGameEnded = function(outcome){
//                $interval(function(){
//                    if (outcome === "Win") {
//                        $state.go('gameWin');
//                    } else if (outcome === "Draw") {
//                        $state.go('gameDraw');
//                    }
//                },5000, 1);
//            };
//        }]);
//})();