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

        it('Ensure that the game board square directive inputs data for each of the 9 squares', function() {

            var directiveElement = '<game-board-square square-number="0" class="cell"></game-board-square>';

            $rootScope.gameBoard = function(){return [1,0,0,0,0,0,0,0,0]};
            var element = $compile(directiveElement)($rootScope);
            $rootScope.$digest();

            var subElement = element.find('div');

            subElement.attr('class').should.equal('cell player');
            subElement.attr('ng-click').should.equal('model.takeTurn(0)');

        });

        it('Ensure that the game board square directive inputs data for square 1', function() {
            var directiveElement = '<game-board-square square-number="1" class="cell"></game-board-square>';

            $rootScope.gameBoard = function(){return [0,1,0,0,0,0,0,0,0]};
            var element = $compile(directiveElement)($rootScope);
            $rootScope.$digest();

            var subElement = element.find('div');

            subElement.attr('class').should.equal('cell player');
            subElement.attr('ng-click').should.equal('model.takeTurn(1)');
        });
        
    });
}());