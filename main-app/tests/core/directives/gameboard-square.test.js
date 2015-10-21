(function () {
    'use strict';
    describe('Gamebaord sqaure directive test', function() {
        var $compile,
            $rootScope;

        beforeEach(function(){
            module('');
            inject(function(_$compile_, $rootScope){
                $compile = _$compile_;
                $rootScope = _$rootScope_;
            })
        });

        it('Ensure that the gameboard square directive inputs each of the 9 squares', function() {

        });
        
    });

}());