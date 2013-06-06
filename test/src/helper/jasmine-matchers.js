goog.provide('jstk.helper.jasmineMatchers');

goog.require('jstk.math');


jstk.helper.jasmineMatchers =
/** @lends {jasmine.Matcher.prototype} */
{
  /**
   * @param {jstk.math.Vec2} expected
   * @return {boolean}
   * @expose
   */
  toEqualVector: function(expected) {
    return !vec2.distance(expected, this.actual);
  },

  /**
   * @return {boolean}
   * @expose
   */
  toBeObject: function() {
    return goog.isObject(this.actual);
  },

  /**
   * @return {boolean}
   * @expose
   */
  toBeArray: function() {
    return goog.isArray(this.actual);
  },

  /**
   * @return {boolean}
   * @expose
   */
  toBeFunction: function() {
    return goog.isFunction(this.actual);
  },

  /**
   * @param {Array.<*>=} opt_args
   * @return {boolean}
   * @expose
   */
  toBeCtrByArgs: function(opt_args) {
    if (!goog.isFunction(this.actual)) {
      return false;
    }
    opt_args = opt_args || [];
    var object = new (Function.prototype.bind.apply(this.actual, opt_args));
    return goog.isObject(object);
  },

  /**
   * @return {boolean}
   * @expose
   */
  elementToExist: function() {
    return !!this.actual.length;
  },

  /**
   * @return {boolean}
   * @expose
   */
  elementToShown: function() {
    /** @type {jQuery} */
    var element = /** @type {jQuery} */ (this.actual);
    var display = element.css('display');
    return ['block', 'inline', ''].some(function(element) {
      return element === display;
    });
  },

  /**
   * @return {boolean}
   * @expose
   */
  elementToHidden: function() {
     /** @type {jQuery} */
    var element = /** @type {jQuery} */ (this.actual);
    return element.css('display') === 'none';
  }
};

/**
 * @param {jasmine.Helper} jasmineHelper
 */
jstk.helper.addMatchers = function(jasmineHelper) {
  jasmineHelper.addMatchers({
    'toBeFunction': jstk.helper.jasmineMatchers.toBeFunction
  });
};
