'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      all: [
        'Gruntfile.js',
        'lib/**/*.js',
        'test/**/*.js'
      ]
    },
    exec: {
      mocha: {
        command: 'mocha'
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'exec:mocha']);
};

