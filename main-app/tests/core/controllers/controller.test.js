(function () {
    'use strict';

    describe('Testing the main controller', function () {
        var $scope,
            controller,
            sandbox,
            $rootScope;

        beforeEach(function(){
            module('ui.router');
            module('Tombola.Games.NoughtsAndCrosses.Core');
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
            controller.gameTitle.should.equal('Noughts and Crosses');
        });

        it('Ensures the minion style is default', function () {
            //controller.gameTitle.should.equal('Noughts and Crosses');
        });

        it('Ensures the theme change can be toggled', function () {
            //controller.gameTitle.should.equal('Noughts and Crosses');
        });

        it('Ensures the make new game creates new game and chnages state', function () {
            //controller.gameTitle.should.equal('Noughts and Crosses');
        });

        afterEach(function(){
            sandbox.restore();
        });

    });

})();


//sandbox =sinon.sandbox.create();
//stateSpy = sinon.sandbox.spy(mocks.$state,'go');

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