(function () {
    'use strict';
    angular.module('Controllers.MyModule')
        .run(['$templateCache', function ($templateCache) {
            $templateCache.put('partials/player-selection.html', '');
            $templateCache.put('partials/game-board.html', '');
            $templateCache.put('partials/game-rules.html', '');
            $templateCache.put('partials/game-about.html', '');
            $templateCache.put('partials/game-win.html', '');
            $templateCache.put('partials/game-draw.html', '');
        }
    ]);

})();