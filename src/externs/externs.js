/**
 * @typedef {{
 *    log: function(...[*]):void,
 *    warn: function(...[*]):void,
 *    info: function(...[*]):void,
 *    debug: function(...[*]):void
 * }}
 */
var console;

/**
 * @param {...*} var_args
 */
console.log = function(var_args) {};

/**
 * @param {...*} var_args
 */
console.warn = function(var_args) {};

/**
 * @param {...*} var_args
 */
console.info = function(var_args) {};

/**
 * @param {...*} var_args
 */
console.debug = function(var_args) {};


/**
 * @param {Function} func
 * @param {...*} var_args
 */
_.partial = function(func, var_args) {};
