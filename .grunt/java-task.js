(function(){
    'use strict';
    module.exports={
        concat:{
            cwd:'',
            src:['main-app/app/scripts/modules.js','main-app/app/scripts/core/**/*.js','main-app/app/scripts/lobby/**/*.js'],
            dest:'.build/scripts/app.js',
            expand:false
        },
        gruntlint:{
            src:'.grunt/**/*.js'
        }
    };
})();