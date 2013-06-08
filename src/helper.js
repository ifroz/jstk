goog.provide('jstk.helper');

/**
 * @param {*} obj
 * @return {boolean}
 */
jstk.isObjectStrict = function(obj) {
  return _.isObject(obj) && !_.isArray(obj) && !_.isFunction(obj);
};

/**
 * @param {Function} ctor
 * @param {!Array.<*>} args
 * @return {Function}
 */
jstk.applyCtor = function(ctor, args) {
  return (Function.prototype.bind.apply(ctor, [null].concat(args)));
};

/**
 * @param {Function} ctor
 * @param {...*} var_args
 * @return {Function}
 */
jstk.callCtor = function(ctor, var_args) {
  var args = _.toArray(arguments).slice(1);
  return (Function.prototype.bind.apply(ctor, [null].concat(args)));
};

/**
 * @param {string} string
 * @return {number}
 */
jstk.toInt = function(string) {
  return parseInt(string, 10);
};
