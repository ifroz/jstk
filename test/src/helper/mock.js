goog.provide('jstk.test.mock');


/**
 * @const
 * @type {function()}
 */
jstk.test.mock.FUNC_EMPTY = function() {};

/**
 * @const
 * @return {boolean}
 */
jstk.test.mock.FUNC_RETURN_TRUE = function() {return true;};

/**
 * @const
 * @return {boolean}
 */
jstk.test.mock.FUNCT_RETURN_FALSE = function() {return false;};

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
