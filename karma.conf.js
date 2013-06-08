basePath = '';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/components/gl-matrix/dist/gl-matrix-min.js',
  'app/components/underscore/underscore-min.js',
  'app/components/jasmine-jquery/lib/jasmine-jquery.js',
  'app/components/jquery/jquery.min.js',
  'test/bin/test.js'
];

exclude = [
];

reporters = ['progress'];

junitReporter = {
  outputFile: 'test-results.xml'
};

port = 9876;
runnerPort = 9100;
colors = true;
logLevel = LOG_INFO;
autoWatch = true;
browsers = ['Chrome'];
captureTimeout = 5000;
singleRun = false;
reportSlowerThan = 500;
