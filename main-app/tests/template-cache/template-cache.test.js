(function () {
    'use strict';
    describe('Testing all of states within the application', function () {
        var sandbox,
            $timeout,
            $state,
            $rootscope,
            $templateCache,
            spyonState;

        beforeEach(function () {
            module('Tombola.Games.NoughtsAndCrosses');
            sandbox = sinon.sandbox.create();
            inject(function ($injector, _$state_, _$timeout_, _$rootScope_, _$templateCache_) {
                $timeout = _$timeout_;
                $state = _$state_;
                $rootscope = _$rootScope_;
                $templateCache = _$templateCache_;
            });
            $templateCache.put('partials/player-selection.html', 'partials/player-selection.html');
            $templateCache.put('partials/game-board.html', 'partials/game-board.html');
            $templateCache.put('partials/game-rules.html', 'partials/game-rules.html');
            $templateCache.put('partials/game-about.html', 'partials/game-about.html');
            $templateCache.put('partials/game-draw.html', 'partials/game-draw.html');

            spyonState = sinon.sandbox.spy(mocks.fakeState, 'go');
            $rootscope.$digest();

        });

        it('Make sure the default state is playerselection', function () {
            var state = $state.get('playerSelection');
            should.exist(state);
            state.url.should.equal('/playerSelection');
            state.controller.should.equal('LobbyController');
            state.templateProvider($templateCache).should.equal($templateCache.get('partials/player-selection.html'));
        });

    });

})();