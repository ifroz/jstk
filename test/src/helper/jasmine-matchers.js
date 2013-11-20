goog.provide('jstk.test.helper.jasmineMatchers');

goog.require('jstk.helper');
goog.require('jstk.math');


jstk.test.helper.jasmineMatchers =
/** @lends {jasmine.Matcher.prototype} */
{
  /**
   * @param {jstk.math.Vec2} expected
   * @return {boolean}
   */
  toEqualVector: function(expected) {
    return !vec2.distance(expected, this.actual);
  },

  /**
   * @param {...*} var_args
   * @return {boolean}
   */
  toBeCtrByArgs: function(var_args) {
    if (!_.isFunction(this.actual)) {
      return false;
    }
    var object = new (jstk.applyCtor(this.actual, _.toArray(arguments)));
    return jstk.isObjectStrict(object);
  },

  /**
   * @param {...*} var_args
   * @return {boolean}
   */
  toThrowCtrByArgs: function(var_args) {
    var throwed = false;
    try {
      new (jstk.applyCtor(this.actual, _.toArray(arguments)));
    } catch (error) {
      throwed = true;
    }
    return throwed;
  }
};
