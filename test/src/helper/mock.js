goog.provide('jstk.test.mock');

/**
 * @template T
 * @param {T} arg
 * @return {function():T}
 */
jstk.test.mock.createFunc = function(arg) {
  return _.partial(_.identity, arg);
};

/**
 * @const
 * @type {function()}
 */
jstk.test.mock.FUNC_EMPTY = function() {};

/**
 * @const
 * @return {boolean}
 */
jstk.test.mock.FUNC_RETURN_TRUE = jstk.test.mock.createFunc(true);

/**
 * @const
 * @return {boolean}
 */
jstk.test.mock.FUNCT_RETURN_FALSE = jstk.test.mock.createFunc(false);

/**
 * @const
 * @constructor
 * @param {*=} opt_arg1
 * @param {*=} opt_arg2
 */
jstk.test.mock.CTOR_ARG_2 = function(opt_arg1, opt_arg2) {
  this.a = opt_arg1;
  this.b = opt_arg2;
};
