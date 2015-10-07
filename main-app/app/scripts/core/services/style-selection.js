(function(){
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.CssSelection')
        .service('StyleSelection',  ['StyleTypes', function (cssArray) {

            var me = this;

            var cssStyleChange = function () {
                var nextIndex = cssArray.indexOf(me.stylePath) +1;
                nextIndex = nextIndex === cssArray.length ? 0 : nextIndex;
                return cssArray[nextIndex];
            };

            me.stylePath = styleTypes[0];

            me.toggleCss = function () {
                me.stylePath = cssStyleChange();
            };

            //changePath()

        }]);
})();