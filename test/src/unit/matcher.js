goog.provide('jstk.unit.matcher');


goog.require('jstk.helper.matcher');
goog.require('jstk.matcher');


describe('Matcher', function() {
  beforeEach(function() {
    this.addMatchers({
      'toBeFunction': jstk.helper.matcher.toBeFunction
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
