(function(){
    'use strict';
    module.exports={
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            },
            options: {
                files: 'bower_components/angular/angular.js',
                        'bower_components/angular-mocks/angular-mocks.js',
                        'main-app/tests/**/*.js',
            }
        }
    };
})();