goog.provide('jstk.matcher');

/** @typedef {Object.<function(string):*>} */
jstk.MatcherObject;

/**
 * @param {!jstk.MatcherObject} matchObject
 * @param {string=} opt_default
 * @return {function(string):*}
 */
jstk.matcher = function(matchObject, opt_default) {
  jstk.checkMatchObjectTypes_(matchObject);
  /** @type {string} */
  var defaultString = opt_default || '_default_';
  return function(matchString) {
    return jstk.invokeMatch_(matchObject, matchString, defaultString);
  }
};

/**
 * @private
 * @param {!Object} input
 * @return {boolean}
 */
jstk.isAllKeyFunction_ = function(input) {
  input = input || {};
  return Object.keys(input).some(function(key) {
    return !_.isFunction(input[key]);
  });
};

/**
 * @private
 * @param {!jstk.MatcherObject} matchObject
 * @param {!string} matchString
 * @param {!string} defaultString
 * @return {*}
 */
jstk.invokeMatch_ = function(matchObject, matchString, defaultString) {
  if (matchObject[matchString]) {
    return matchObject[matchString](matchString);
  } else {
    return matchObject[defaultString] &&
        matchObject[defaultString](matchString);
  }
};

/**
 * @private
 * @param {!jstk.MatcherObject} matchObject
 */
jstk.checkMatchObjectTypes_ = function(matchObject) {
  if (!_.isObject(matchObject)) {
    throw new Error('Need a match object!');
  }
  if (jstk.isAllKeyFunction_(matchObject)) {
    throw new Error('Match object values need to be a function!');
  }
};


