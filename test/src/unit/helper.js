goog.provide('jstk.test.unit.helper');

goog.require('jstk.helper');
goog.require('jstk.test.mock');

var emptyFunc = jstk.test.mock.FUNC_EMPTY,
    Ctor = jstk.test.mock.CTOR_ARG_2;

describe('helper', function() {
  describe('isObjectStrict', function() {
    it('should return true if object', function() {
      expect(jstk.isObjectStrict({})).toBe(true);
    });

    it('should return false if string', function() {
      expect(jstk.isObjectStrict('')).toBe(false);
    });

    it('should return false if array', function() {
      expect(jstk.isObjectStrict([])).toBe(false);
    });

    it('should return false if function', function() {
      expect(jstk.isObjectStrict(emptyFunc)).toBe(false);
    });
  });

  describe('applyCtor', function() {
    it('should create the object', function() {
      var a = new (jstk.applyCtor(Ctor, []));
      expect(a).toEqual(new Ctor());
    });

    it('should create the object with the same properties', function() {
      var a = new (jstk.applyCtor(Ctor, [1, 2]));
      expect(a).toEqual(new Ctor(1, 2));
    });
  });

  describe('callCtor', function() {
    it('should create the object', function() {
      var a = new (jstk.callCtor(Ctor));
      expect(a).toEqual(new Ctor());
    });

    it('should create the object with the same properties', function() {
      var a = new (jstk.callCtor(Ctor, 1, 2));
      expect(a).toEqual(new Ctor(1, 2));
    });
  });

  describe('toInt', function() {
    it('should parse 123', function() {
      expect(jstk.toInt('123')).toBe(123);
    });
  });
});
