/**
 * Created by Cami on 15/3/24.
 */
'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'public/stylesheets/main.css' : 'public/stylesheets/main.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'public/stylesheets/scss/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    },
    nodemon: {
      dev: {
        script: 'bin/www',
        options: {
          args: [],
          ignore: ['node_modules/**', 'bower_components/**'],
          ext: 'js,html',
          nodeArgs: ['--debug'],
          delayTime: 1,
          cwd: __dirname,
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });

            // opens browser on initial server start
            nodemon.on('config:update', function () {
              // Delay before server listens on port
              setTimeout(function() {
                require('open')('http://localhost:3000');
              }, 1000);
            });

            // refreshes browser when server reboots
            nodemon.on('restart', function () {
              // Delay before server listens on port
              setTimeout(function() {
                require('fs').writeFileSync('.scss', 'scss');
              }, 1000);
            });
          }
        }
      }
    },
    // Run some tasks in parallel to speed up the build process
    concurrent: {
      tasks: ['nodemon', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.registerTask('default',['sass','nodemon']);
}