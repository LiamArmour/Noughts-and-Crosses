(function(){
    'use strict';
    module.exports={
        concat:{
            cwd:'',
            src:['main-app/app/scripts/directives/**/*.js', 'main-app/app/scripts/services/**/*.js','main-app/app/scripts/controllers/**/*.js'],
            dest:'.build/main-app/app/scripts/app.js',
            expand:false
        },
        gruntlint:{
            src:'.grunt/**/*.js'
        }
    };
})();