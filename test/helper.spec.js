/* jshint -W058 */
'use strict';

var expect = require('expect.js');
var sinon = require('sinon');

var helper = require('../lib/helper.js');

var isObjectStrict = helper.isObjectStrict;
var applyCtor = helper.applyCtor;
var callCtor = helper.callCtor;
var toInt = helper.toInt;
var getProperty = helper.getProperty;
var callMethod = helper.callMethod;

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

  describe('getProperty', function() {
    it('should exist', function() {
      expect(getProperty).to.be.a(Function);
    });

    it('should return the property of the object', function() {
      var obj = {
        property: 1
      };
      expect(getProperty('property')(obj)).to.be(1);
    });
  });

  describe('callMethod', function() {
    it('should exist', function() {
      expect(callMethod).to.be.a(Function);
    });

    it('should call the method of the object', function() {
      var obj = {
        method: sinon.spy()
      };
      callMethod('method')(obj);
      sinon.assert.called(obj.method);
    });

    it('should return the method\'s return value', function() {
      var obj = {
        method: function() {return 1;}
      };
      expect(callMethod('method')(obj)).to.be(1);
    });

    it('should bind the original this', function() {
      var obj = {
        number: 1,
        getNumber: function() {
          return this.number;
        }
      };
      expect(callMethod('getNumber')(obj)).to.be(1);
    });
  });
});
