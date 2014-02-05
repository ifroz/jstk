'use strict';

var _ = require('lodash');
var matcher = require('./matcher');
var helper = require('./helper');

module.exports = {
  bind: function() {
    _.mixin(
    /** @lends {_} */
    {
      isObjectStrict: helper.isObjectStrict,
      applyCtor: helper.applyCtor,
      callCtor: helper.callCtor,
      toInt: helper.toInt,
      matcher: matcher,
      getProperty: helper.getProperty,
      callMethod: helper.callMethod
    });
  }
};
