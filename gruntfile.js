(function () {
    'use strict';
    var copyTask = require('./.grunt/copy-task'),
        lessTask = require('./.grunt/less-task'),
        jsLintTask = require('./.grunt/jshint-task');

    module.exports = function(grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: copyTask,
            lesslint: lessTask,
            less: lessTask,
            jshint: jsLintTask,
            concat: jsLintTask
        });

        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-lesslint');
        grunt.loadNpmTasks('grunt-comtrib-less');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-concat');

        grunt.registerTask('lessFiles', ['lesslint', 'less']);
        grunt.registerTask('javascriptFiles', ['jshint','concat:concat']);
        grunt.registerTask('default', ['copy', 'lessFiles']);
    };
})();