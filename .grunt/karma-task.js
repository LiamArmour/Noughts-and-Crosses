(function(){
    'use strict';
    module.exports={
            unit:{
                configFile: 'karma.conf.js'
            },
            options: {
                files: [
                    //Bower include files
                    'bower_components/angular/angular.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.min.js',

                    //Main script files
                    'main-app/app/scripts/modules.js',
                    'main-app/app/scripts/core/controllers/*.js',
                    'main-app/app/scripts/core/directives/*.js',
                    'main-app/app/scripts/core/services/*.js',

                    'main-app/app/scripts/gamebaord/controllers/*.js',
                    'main-app/app/scripts/gamebaord/directives/*.js',
                    'main-app/app/scripts/gamebaord/services/*.js',
                    'main-app/app/scripts/lobby/services/*.js',

                    //Testing files
                    'main-app/tests/core/services/*.js',
                    'main-app/tests/lobby/services/*.js'
                ]
            }
    };
})();