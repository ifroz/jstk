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

  var distCompilerOpts = {
    output_wrapper: '"var _ = require(\'underscore\'); \n%output%\n export.jstk = jstk"',
    externs: [
      'src/externs/*.js',
      'lib/externs/*.js'
    ],
    language_in: 'ECMASCRIPT5_STRICT',
    closure_entry_point: 'jstk.lib',
    compilation_level: 'SIMPLE_OPTIMIZATIONS'
  };

  var jsSource = [
    'src/*.js',
    'lib/closure-library/closure/goog/base.js'
  ];

  var jsTest = [
    'test/src/helper/*.js',
    'test/src/*.js',
    'test/src/unit/*.js'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    closureCompiler: {
      options: {
        compilerFile: '/opt/closure-compiler/compiler.jar',
        checkModified: true
      },
      buildTest: {
        TEMPcompilerOpts: defaultCompilerOpts,
        src: jsSource.concat(jsTest),
        dest: 'build/all.js'
      },
      buildNode: {
        TEMPcompilerOpts: distCompilerOpts,
        src: jsSource,
        dest: 'dist/jstk.js'
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

  grunt.registerTask('buildTest', [
    'closureCompiler:buildTest',
    'copy:libJS'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
