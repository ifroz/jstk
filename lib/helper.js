'use strict';

var _ = require('lodash');

/**
 * @param {*} obj
 * @return {boolean}
 */
function isObjectStrict(obj) {
  return _.isObject(obj) && !_.isArray(obj) && !_.isFunction(obj);
}

/**
 * @param {Function} ctor
 * @param {!Array.<*>} args
 * @return {Function}
 */
function applyCtor(ctor, args) {
  return (Function.prototype.bind.apply(ctor, [null].concat(args)));
}

/**
 * @param {Function} ctor
 * @param {...*} var_args
 * @return {Function}
 */
function callCtor(ctor/*, var_args*/) {
  var args = _.toArray(arguments).slice(1);
  return (Function.prototype.bind.apply(ctor, [null].concat(args)));
}

/**
 * @param {string} string
 * @return {number}
 */
function toInt(string) {
  return parseInt(string, 10);
}

function getProperty(propertyName) {
  return function(object) {
    return object[propertyName];
  };
}

function callMethod(methodName) {
  return function(object) {
    return object[methodName].call(object);
  };
}

function repeat(length, element) {
  return _.range(length).map(_.constant(element));
}

module.exports = {
  isObjectStrict: isObjectStrict,
  applyCtor: applyCtor,
  callCtor: callCtor,
  toInt: toInt,
  getProperty: getProperty,
  callMethod: callMethod,
  repeat: repeat
};

