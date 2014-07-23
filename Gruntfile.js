'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-simple-mocha');

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
    simplemocha: {
      options: {
        
      },
      all: { src: 'test/**/*.js' }
    },
    watch: {
      test: {
        files: jsFiles,
        tasks: ['test']
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'simplemocha']);
};

