'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-closure-tools');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  var defaultCompilerOpts = {
    externs: [
      'src/externs/*.js',
      'lib/externs/*.js'
    ],
    source_map_format: 'V3',
    language_in: 'ECMASCRIPT5_STRICT',
    output_wrapper: '"%output% //@ sourceMappingURL=/helpers.js.map"',
    closure_entry_point: 'jstk.test',
    create_source_map: 'dist/helpers.js.map',
    warning_level: 'verbose',
    jscomp_warning: [
      'checkTypes',
      'visibility',
      'accessControls',
      'checkDebuggerStatement',
      'checkRegExp',
      'const',
      'constantProperty',
      'deprecated',
      'duplicate',
      'invalidCasts',
      'strictModuleDepCheck',
      'suspiciousCode',
      'missingProperties',
      'uselessCode',
      'undefinedVars'
    ],
    compilation_level: 'SIMPLE_OPTIMIZATIONS'
  };

  var jsSource = [
    'src/*.js',
    'test/src/*.js',
    'test/src/unit/*.js',
    'test/src/helper/*.js',
    'lib/closure-library/closure/goog/base.js'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    closureCompiler: {
      options: {
        compilerFile: '/opt/closure-compiler/compiler.jar',
        checkModified: true,
        compilerOpts: defaultCompilerOpts
      },
      build: {
        src: jsSource,
        dest: 'build/all.js'
      }
    },
    copy: {
      libJS: {
        files: [
          {
            src: 'build/all.js',
            dest: 'test/bin/test.js'
          }
        ]
      }
    },
    watch: {
      allJS: {
        files: jsSource,
        tasks: [
          'build'
        ],
        options: {
          nospawn: true,
          forever: false
        }
      }
    }
  });

  grunt.registerTask('build', [
    'closureCompiler:build',
    'copy:libJS'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
