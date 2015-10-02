(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
        .directive('gameBoardSquare', [function(){
            return {
                restrict: 'E',
                template: function(element, attributes){
                    var html = '<div class="player{{model.gameBoard['+ attributes.squareNumber+']}}" ng-click="model.takeTurn('+attributes.squareNumber+')"></div>';
                    return html;
                }
            };
        }]);
})();