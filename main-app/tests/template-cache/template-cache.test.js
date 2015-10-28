(function () {
    'use strict';
    describe('Testing all of states within the application', function () {
        var sandbox,
            $timeout,
            $state,
            $rootscope,
            $templateCache;

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
            $templateCache.put('partials/game-win.html', 'partials/game-win.html');
            $templateCache.put('partials/game-draw.html', 'partials/game-draw.html');

            $rootscope.$digest();

        });

        it('Make sure the default state is playerselection', function () {
            var state = $state.get('playerSelection');
            should.exist(state);
            state.url.should.equal('/playerSelection');
            state.controller.should.equal('LobbyController');
            state.templateProvider($templateCache).should.equal($templateCache.get('partials/player-selection.html'));
        });

        it('Ensures there is a state called gameboard and it can be accessed', function () {
            var state = $state.get('gameBoard');
            should.exist(state);
            state.url.should.equal('/gameBoard');
            state.templateProvider($templateCache).should.equal($templateCache.get('partials/game-board.html'));
        });

        it('Ensures there is a state called game rules and it can be accessed', function () {
            var state = $state.get('gameRules');
            should.exist(state);
            state.url.should.equal('/rules');
            state.templateProvider($templateCache).should.equal($templateCache.get('partials/game-rules.html'));
        });

        it('Ensures there is a state called game about and it can be accessed', function () {
            var state = $state.get('gameAbout');
            should.exist(state);
            state.url.should.equal('/gameAbout');
            state.templateProvider($templateCache).should.equal($templateCache.get('partials/game-about.html'));
        });

        it('Ensures there is a state called game win and it can be accessed', function () {
            var state = $state.get('gameWin');
            should.exist(state);
            state.url.should.equal('/win');
            state.templateProvider($templateCache).should.equal($templateCache.get('partials/game-win.html'));
        });

        it('Ensures there is a state called game draw and it can be accessed', function () {
            var state = $state.get('gameDraw');
            should.exist(state);
            state.url.should.equal('/draw');
            state.templateProvider($templateCache).should.equal($templateCache.get('partials/game-draw.html'));
        });

    });

})();