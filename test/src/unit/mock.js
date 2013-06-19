goog.provide('jstk.test.unit.mock');

goog.require('jstk.test.mock');

describe('mocks', function() {
  it('should return undefined', function() {
    expect(jstk.test.mock.FUNC_EMPTY()).toBe(undefined);
  });

  it('should return true', function() {
    expect(jstk.test.mock.FUNC_RETURN_TRUE()).toBe(true);
  });

  it('should return false', function() {
    expect(jstk.test.mock.FUNCT_RETURN_FALSE()).toBe(false);
  });

  it('should return indentical', function() {
    expect(jstk.test.mock.createFunc('monkey')()).toBe('monkey');
  });

  it('should be {a: 1, b: 2}', function() {
    expect(new jstk.test.mock.CTOR_ARG_2(1, 2)).toEqual({a: 1, b: 2});
  });
});
