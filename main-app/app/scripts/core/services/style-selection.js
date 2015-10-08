(function(){
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Core')
        .service('StyleSelection',  ['StyleTypes', function (styleTypes) {
            var me = this,
                cssStyleChange = function () {
                    var nextIndex = styleTypes.indexOf(me.currentStyle) +1;
                    nextIndex = nextIndex === styleTypes.length ? 0 : nextIndex;
                    return styleTypes[nextIndex];
                };

            me.currentStyle = styleTypes[0];

            me.toggleCss = function () {
                console.log('Current: ' + me.currentStyle);
                me.currentStyle = cssStyleChange();
                console.log('Next: ' + me.currentStyle);
            };
            me.getCurrentStyle = function(){
                return me.currentStyle;
            };
        }]);
})();