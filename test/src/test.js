goog.provide('jstk.test');


goog.require('jstk.lib');
goog.require('jstk.test.unit.helper');
goog.require('jstk.test.unit.jasmineMatcher');
goog.require('jstk.test.unit.matcher');
goog.require('jstk.test.unit.mock');


describe('jasmine', function() {
  it('should work', function() {
    expect(true).toBe(true);
  });
});

describe('underscore', function() {
  it('should exists', function() {
    expect(typeof _.VERSION).toBe('string');
  });
});
