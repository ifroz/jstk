'use strict';

require('../lib/context').set(require('lodash'));

var recursive = require('../lib/recursive.js');
var expect = require('expect.js');

describe('recursive', function() {
  describe('getProperty', function() {
    var getProperty = recursive.getProperty;

    it('should have getProperty method', function() {
      expect(getProperty).to.be.a(Function);
    });

    it('should return a function', function() {
      expect(getProperty()).to.be.a(Function);
    });

    it('should return undefined if no object', function() {
      expect(getProperty('key')(null)).to.be(undefined);
    });

    it('should return the value', function() {
      expect(getProperty('a')({a: 1})).to.be(1);
    });

    it('should return the original object if no key', function() {
      expect(getProperty('')({a: 1})).to.eql({a: 1});
    });

    it('should return 2 level deep property', function() {
      expect(getProperty(['a', 'b'])({a: {b: 1}})).to.be(1);
    });

    it('should return 2 level deep property with dot notation', function() {
      expect(getProperty('a.b')({a: {b: 1}})).to.be(1);
    });

    it('should return 4 level deep property', function() {
      expect(getProperty(['a', 'b', 'c', 'd'])({
        a: {b: {c: {d: 1}}}
      })).to.be(1);
    });
  });

  describe('recursiveMapValues', function() {
    function mult2(e) {return 2 * e;}

    var recursiveMapValues = recursive.recursiveMapValues;
    it('should have recursiveMapValues method', function() {
      expect(recursiveMapValues).to.be.a(Function);
    });

    it('should map 1st level values', function() {
      expect(recursiveMapValues({a: 1, b: 1}, mult2)).to.eql({a: 2, b: 2});
    });

    it('should map 2st level values', function() {
      expect(recursiveMapValues({a: 1, b: 1, c: {d: 1}}, mult2)).
        to.eql({a: 2, b: 2, c: {d: 2}});
    });

    it('should give back the same', function() {
      expect(recursiveMapValues({a: 1, b: {c: 1}})).to.eql({a: 1, b: {c: 1}});
    });

    it('should give key list', function() {
      expect(recursiveMapValues({a: 1, b: {c: 1}}, function(value, keys) {
        return keys.join('.');
      })).to.be.eql({a: 'a', b: {c: 'b.c'}});
    });

    it('should map functions', function() {
      expect(recursiveMapValues({a: function() {}}, function() {return 1;})).
        to.be.eql({a: 1});
    });
  });
});

