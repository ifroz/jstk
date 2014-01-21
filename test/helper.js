/*jshint -W058 */
'use strict';

var helper = require('../lib/helper.js');

var isObjectStrict = helper.isObjectStrict;
var applyCtor = helper.applyCtor;
var callCtor = helper.callCtor;
var toInt = helper.toInt;

var expect = require('expect.js');

describe('helper', function() {
  describe('isObjectStrict', function() {
    it('should return true if object', function() {
      expect(isObjectStrict({})).to.be(true);
    });

    it('should return false if string', function() {
      expect(isObjectStrict('')).to.be(false);
    });

    it('should return false if array', function() {
      expect(isObjectStrict([])).to.be(false);
    });

    it('should return false if function', function() {
      expect(isObjectStrict(function() {})).to.be(false);
    });
  });

  describe('Ctor', function() {
    function Ctor() {}

    describe('applyCtor', function() {
      it('should create the object', function() {
        var a = new (applyCtor(Ctor, []));
        expect(a).to.eql(new Ctor());
      });
      
      it('should create the object with the same properties', function() {
        var a = new (applyCtor(Ctor, [1, 2]));
        expect(a).to.eql(new Ctor(1, 2));
      });
    });
    
    describe('callCtor', function() {
      it('should create the object', function() {
        var a = new (callCtor(Ctor));
        expect(a).to.eql(new Ctor());
      });
      
      it('should create the object with the same properties', function() {
        var a = new (callCtor(Ctor, 1, 2));
        expect(a).to.eql(new Ctor(1, 2));
      });
    });
  });

  describe('toInt', function() {
    it('should parse 123', function() {
      expect(toInt('123')).to.be(123);
    });
  });
});
