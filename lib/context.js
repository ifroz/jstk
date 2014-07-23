'use strict';

var lodash;

module.exports = {
  set: function(_) {
    lodash = _.runInContext ? _.runInContext() : _;
  },
  get: function() {
    return lodash;
  }
};
