'use strict';

var lodash;

module.exports = {
  set: function(_) {
    lodash = _.runInContext();
  },
  get: function() {
    return lodash;
  }
};
