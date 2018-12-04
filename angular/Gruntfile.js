'use strict';
module.exports = function (grunt) {


    // Load Grunt Tasks
    require('load-grunt-tasks')(grunt);

    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // // Metadata.
        // meta: {
        //     // basePath: '../',
        //     srcPath: 'dev/',
        //     deployPath: 'deploy/',
        // },

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

        // --------------------
        // Copy Configuration
        // --------------------   

        // copy: {

        //     cordova: {
        //         files: [
        //             {
        //                 cwd: 'dist',
        //                 src: [
        //                     '**/*.*',
        //                 ],
        //                 dest: '../cordova/www/',
        //                 expand: true
        //             }
        //         ]
        //     }
        // },


        // ---------------------
        // Clean Configuration
        // ---------------------  
        clean: {
            options: { force: true },
            cordova: ["../cordova/www/**"]
        },

        // ---------------------
        // Watch Configuration
        // ---------------------         

        //watch: {},

        // ---------------------
        // Execute cmd to build apk
        // ---------------------  
        exec: {
            angular_build: {
                command: "ng build -op ../cordova/www",
                stdout: true,
                stderr: true
            },          
            cordova_run: {
                cwd: "../cordova",
                command: "cordova run android",
                stdout: true,
                stderr: true
            }
        }
    });


    // ---------------------
    // Register Grunt Tasks
    // ---------------------

    grunt.registerTask('build', [
        'exec:angular_build',
        'exec:cordova_run'
    ]);
};