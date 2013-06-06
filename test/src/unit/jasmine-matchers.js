goog.provide('jstk.unit.jasmineMatcher');

goog.require('jstk.helper.jasmineMatchers');

describe('jasmine matchers', function() {
  beforeEach(function() {
    jstk.helper.addMatchers(this);
  });

  it('should match a function', function() {
    expect(function() {}).toBeFunction();
    expect({}).not.toBeFunction();
    expect([]).not.toBeFunction();
    expect(1).not.toBeFunction();
    expect('monkey').not.toBeFunction();
  });
});
