(function(){
    'use strict';
    module.exports={
        lintCheck: {
            src:['**/*.less', '**/*.css'],
            cwd:'main-app/app/less/',
            dest:'.build/css/',
            expand:true,
            ext:'.css'
        }
    };
})();