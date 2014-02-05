'use strict';

var _ = require('lodash');

/**
 * @param {*} obj
 * @return {boolean}
 */
var isObjectStrict = function(obj) {
  return _.isObject(obj) && !_.isArray(obj) && !_.isFunction(obj);
};

/**
 * @param {Function} ctor
 * @param {!Array.<*>} args
 * @return {Function}
 */
var applyCtor = function(ctor, args) {
  return (Function.prototype.bind.apply(ctor, [null].concat(args)));
};

/* jshint camelcase: false, unused: false */
/**
 * @param {Function} ctor
 * @param {...*} var_args
 * @return {Function}
 */
var callCtor = function(ctor, var_args) {
  var args = _.toArray(arguments).slice(1);
  return (Function.prototype.bind.apply(ctor, [null].concat(args)));
};
/* jshint camelcase: true, unused: true */

/**
 * @param {string} string
 * @return {number}
 */
var toInt = function(string) {
  return parseInt(string, 10);
};

var getProperty = function(propertyName) {
  return function(object) {
    return object[propertyName];
  };
};

var callMethod = function(methodName) {
  return function(object) {
    return object[methodName].call();
  };
};

module.exports = {
  isObjectStrict: isObjectStrict,
  applyCtor: applyCtor,
  callCtor: callCtor,
  toInt: toInt,
  getProperty: getProperty,
  callMethod: callMethod
};

