goog.provide('helpers.matcher');

/**
 * @param {Object.<function(string):*>} matchObject
 * @param {string=} opt_default
 * @return {function(string):*}
 */
helpers.matcher = function(matchObject, opt_default) {
  if (!goog.isObject(matchObject)) {
    throw new Error('Need a match object!');
  }
  if (Object.keys(matchObject).some(function(key) {
      return !goog.isFunction(matchObject[key]);
    })) {
    throw new Error('Match object values need to be a function!');
  }
  /** @type {string} */
  var defaultString = opt_default || '_default_';
  return function(matchString) {
    if (matchObject[matchString]) {
      return matchObject[matchString]();
    } else {
      return matchObject[defaultString] && matchObject[defaultString]();
    }
  }
};


