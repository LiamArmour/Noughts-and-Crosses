(function () {
    'use strict';
    describe('Testing the main controller', function () {
        var state,
            controller,
            scope,
            sandbox,
            stateSpy;

        beforeEach(module('ui.router'));
        beforeEach(function () {
            module('Tombola.Games.NoughtsAndCrosses.Core');

            inject(function ($injector, $controller, $rootScope, $state, StyleSelection) {
                scope = $rootScope.$new();
                state = $state;
                controller = $controller('MainController', {
                    $scope: scope,
                    $state:mocks.$state,
                    GameModel: mocks.GameModel,
                    StyleSelection: mocks.StyleSelection

                });

            });

            sandbox =sinon.sandbox.create();
            stateSpy = sinon.sandbox.spy(mocks.$state,'go');

        });

        it.only('Ensures the game title is correct', function () {
            console.log(controller);
            console.log(controller.gameTitle);
            controller.gameTitle.should.equal('Noughts and Crosses');
        });
    });

})();

//(function () {
//    'use strict';
//    angular.module('Tombola.Games.NoughtsAndCrosses.Core')
//
//        .controller('MainController', ['$scope','$state','GameModel','StyleSelection',  function($scope, $state, gameModel, styleSelection) {
//            $scope.gameTitle = 'Noughts and Crosses';
//            $scope.displayStyle = styleSelection;
//            $scope.changeStyle = styleSelection.toggleCss;
//
//            $scope.makeNewGame= function (){
//                gameModel.makeNewGame();
//                $state.go('gameBaord');
//            };
//        }]);
//})();