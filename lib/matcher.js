/* jshint unused: false */
'use strict';

var _ = require('lodash');

/** @typedef {Object.<function(string):*>} */
var MatcherObject;

/* jshint camelcase: false */
/**
 * @param {!MatcherObject} matchObject
 * @param {string=} opt_default
 * @return {function(string):*}
 */
module.exports = function(matchObject, opt_default) {
  checkMatchObjectTypes_(matchObject);
  /** @type {string} */
  var defaultString = opt_default || '_';
  return function(matchString) {
    return invokeMatch_(matchObject, matchString, defaultString);
  };
};
/* jshint camelcase: false */

/**
 * @private
 * @param {!Object} input
 * @return {boolean}
 */
function isEveryKeyFunction_(input) {
  return Object.keys(input || {}).every(function(key) {
    return _.isFunction(input[key]);
  });
}

/**
 * @private
 * @param {!MatcherObject} matchObject
 * @param {!string} matchString
 * @param {!string} defaultString
 * @return {*}
 */
function invokeMatch_(matchObject, matchString, defaultString) {
  if (matchObject[matchString]) {
    return matchObject[matchString](matchString);
  } else {
    return matchObject[defaultString] &&
        matchObject[defaultString](matchString);
  }
}

/**
 * @private
 * @param {!MatcherObject} matchObject
 */
function checkMatchObjectTypes_(matchObject) {
  if (!_.isObject(matchObject)) {
    throw new Error('Need a match object!');
  }
  if (!isEveryKeyFunction_(matchObject)) {
    throw new Error('Match object values need to be a function!');
  }
}

