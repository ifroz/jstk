/**
 * @fileoverview Check types is disabled.
 * @suppress {checkTypes}
 */
goog.provide('jstk.test.unit.matcher');


goog.require('jstk.matcher');
goog.require('jstk.test.helper.jasmineMatchers');


describe('Matcher', function() {
  beforeEach(function() {
    this.addMatchers({
      'toBeFunction': jstk.test.helper.jasmineMatchers.toBeFunction
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
    expect(function() {
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

  describe('function arguments', function() {
    var matcherObj;

    beforeEach(function() {
      matcherObj = {
        'monkey': function() {return 1234;},
        '_default_': function() {return 1;}
      };

      spyOn(matcherObj, 'monkey');
      jstk.matcher(matcherObj)('monkey');

      spyOn(matcherObj, '_default_');
      jstk.matcher(matcherObj)('monkey2');
    });

    it('should called with monkey', function() {
      expect(matcherObj.monkey).toHaveBeenCalledWith('monkey');
    });

    it('should called with undefined', function() {
      expect(matcherObj['_default_']).toHaveBeenCalledWith('monkey2');
    });
  });
});
