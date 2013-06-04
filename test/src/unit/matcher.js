goog.provide('jstk.unit.matcher');

goog.require('jstk.matcher');


var matchers =
/** @lends {jasmine.Matcher.prototype} */
{
  /**
   * @param {math.coords} expected
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

  elementToShown: function() {
    var display = this.actual.css('display');
    return ['block', 'inline', ''].some(function(element) {
      return element === display;
    });
  },

  elementToHidden: function() {
    return this.actual.css('display') === 'none';
  }
};

describe('Matcher', function() {
  beforeEach(function() {
    this.addMatchers({
      'toBeFunction': matchers.toBeFunction
    });
  });

  it('should exist', function() {
    expect(jstk.matcher).toBeFunction();
  });

  it('should return a function', function() {
    expect(jstk.matcher({
      '_default_': function() {return 1;}
    })).toBeFunction();
  });

  it('should throw error', function() {
    expect(function () {
      jstk.matcher();
    }).toThrow();
  });

  it('should return a 1234', function() {
    expect(jstk.matcher({
      'monkey': function() {return 1234;}
    })('monkey')).toBe(1234);
  });

  it('should return a function', function() {
    expect(jstk.matcher({
      'monkey': function() {return 1234;}
    })('goat')).toBeUndefined();
  });

  it('should return 1', function() {
    expect(jstk.matcher({
      'monkey': function() {return 1234;},
      '_default_': function() {return 1;}
    })('goat')).toBe(1);
  });

  it('should throw error', function() {
    expect(function () {
      jstk.matcher({
        'monkey': function() {return 1234;},
        '123': {}
      });
    }).toThrow();
  });

  it('should throw error', function() {
    expect(jstk.matcher({
      'monkey': function() {return 1234;},
      '_default_': function() {return 1;},
      'default': function() {return 2;}
    }, 'default')('goat')).toBe(2);
  });
});
