(function () {
    'use strict';
    describe('Testing the main controller', function () {
        var state,
            controller,
            scope,
            gameModel,
            sandbox,
            stateSpy,
            styleSelection;

        beforeEach(module('ui.router'));
        beforeEach(function () {
            module('Tombola.Games.NoughtsAndCrosses.Core');


            //Mock these in GameModel,StyleSelection

            inject(function ($injector, $controller, $rootScope, $state, GameModel, StyleSelection) {
                scope = $rootScope.$new();
                state = $state;
                controller = $controller('MainController', {
                    $scope: scope,
                    $state:mocks.$state
                });
                gameModel = $injector('GameModel');
                styleSelection = $injector('StyleSelection');

            })

            sandbox =sinon.sandbox.create();
            stateSpy = sinon.sandbox.spy(mocks.$state,'go');

        });

        it.only('Ensures the game title is correct', function () {
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