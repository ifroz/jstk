'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  var jsFiles = [
    'Gruntfile.js',
    'lib/**/*.js',
    'test/**/*.js'
  ];

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      all: jsFiles
    },
    exec: {
      mocha: {
        command: 'mocha'
      }
    },
    watch: {
      test: {
        files: jsFiles,
        tasks: ['test']
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'exec:mocha']);
};

