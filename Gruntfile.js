'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      all: [
        'Gruntfile.js',
        'lib/**/*.js',
        'test/**/*.js'//,
       // 'features/**/*.js'
      ]
    }
  });
  
  grunt.registerTask('test', ['jshint']);
};

