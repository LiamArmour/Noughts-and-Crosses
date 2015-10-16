(function(){
    'use strict';
    module.exports={
        concat:{
            cwd:'',
            src:['main-app/app/scripts/modules.js','main-app/app/scripts/core/**/*.js','main-app/app/scripts/lobby/**/*.js','main-app/app/scripts/gameboard/**/*.js','main-app/tests/**/*.js'],
            dest:'.build/scripts/app.js',
            expand:false
        },
        gruntlint:{
            src:'.grunt/**/*.js'
        }
    };
})();