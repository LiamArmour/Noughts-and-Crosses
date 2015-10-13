(function(){
    'use strict';
    module.exports={
            unit:{
                configFile: 'karma.conf.js'
            },
            options: {
                files: ['bower_components/angular/angular.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'main-app/app/scripts/modules.js',
                    'main-app/app/scripts/core/services/*.js',
                    'main-app/app/scripts/lobby/services/*.js',

                    'main-app/tests/core/services/*.js',
                    'main-app/tests/lobby/services/*.js']
            }
    };
})();