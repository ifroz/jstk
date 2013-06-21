goog.provide('jstk.test.unit.jasmineMatcher');

goog.require('jstk.test.helper.jasmineMatchers');

describe('jasmine matchers', function() {
  beforeEach(function() {
    this.addMatchers(jstk.test.helper.jasmineMatchers);
  });

  it('should match a function', function() {
    expect(function() {}).toBeFunction();
    expect({}).not.toBeFunction();
    expect([]).not.toBeFunction();
    expect(1).not.toBeFunction();
    expect('monkey').not.toBeFunction();
  });

  it('should match a Object', function() {
    expect(function() {}).not.toBeObject();
    expect({}).toBeObject();
    expect([]).not.toBeObject();
    expect(1).not.toBeObject();
    expect('monkey').not.toBeObject();
  });

  it('should match a Array', function() {
    expect(function() {}).not.toBeArray();
    expect({}).not.toBeArray();
    expect([]).toBeArray();
    expect(1).not.toBeArray();
    expect('monkey').not.toBeArray();
  });

  it('should match vector', function() {
    expect(vec2.clone([1, 2])).toEqualVector(vec2.clone([1, 2]));
    expect(vec2.clone([1, 2])).not.toEqualVector(vec2.clone([2, 1]));
  });

  describe('constructor matchers', function() {
    /** @type {string} */
    var calledStr1 = '';
    /** @type {string} */
    var calledStr2 = '';

    beforeEach(function() {
      calledStr1 = '';
      calledStr2 = '';
    });

    it('should match constructor', function() {
      var ctr = function(arg1, arg2) {
        calledStr1 = arg1;
        calledStr2 = arg2;
      };

      expect(ctr).toBeCtrByArgs('monkey', 'dog');
      expect(calledStr1).toBe('monkey');
      expect(calledStr2).toBe('dog');
    });

    it('should match error throwing constructor', function() {
      var ctr = function(arg1, arg2) {
        calledStr1 = arg1;
        calledStr2 = arg2;
        throw new Error();
      };

      expect(ctr).toThrowCtrByArgs('monkey', 'dog');
      expect(calledStr1).toBe('monkey');
      expect(calledStr2).toBe('dog');
    });
  });
});
