(function () {
    'use strict';
    describe('Gamebaord sqaure directive test', function() {
        var $compile,
            $rootScope;

        beforeEach(function(){
            module('Tombola.Games.NoughtsAndCrosses.Game');
            inject(function(_$compile_, _$rootScope_){
                $compile = _$compile_;
                $rootScope = _$rootScope_;
            });
        });

        it.only('Ensure that the gameboard square directive inputs each of the 9 squares', function() {
            
            var directiveElement = '<div class="cell player{{model.gameBoard['+ attributes.squareNumber+']}}" ng-click="model.takeTurn('+attributes.squareNumber+')"></div>';

            $rootScopeProvider.gameModel = {gameBoardSquare: '0'};
            var element = $compile(directiveElement)(rootScope);
            $rootScope.$digest();

            element[0].toString().should.equal('[object HTMLImageElement]');

        });
        
    });

}());