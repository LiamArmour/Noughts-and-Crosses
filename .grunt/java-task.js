(function(){
    'use strict';
    module.exports={
        concat:{
            cwd:'',
            src:'main-app/app/scripts/**/*.js',
            dest:'.build/main-app/app/scripts/app.js',
            expand:false
        },
        gruntlint:{
            src:'.grunt/**/*.js'
        }
    };
})();