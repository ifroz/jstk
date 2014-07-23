'use strict';
/*
var sinon = require('sinon');
var expect = require('expect.js');
var matcher = require('../lib/matcher.js');

describe('Matcher', function() {
  it('should exist', function() {
    expect(matcher).to.be.a(Function);
  });

  it('should return a function', function() {
    expect(matcher({
      '_default_': function() {return 1;}
    })).to.be.a(Function);
  });

  it('should throw error', function() {
    expect(function() {
      matcher();
    }).to.throwException();
  });

  it('should return a 1234', function() {
    expect(matcher({
      'monkey': function() {return 1234;}
    })('monkey')).to.be(1234);
  });

  it('should return a function', function() {
    expect(matcher({
      'monkey': function() {return 1234;}
    })('goat')).to.be(undefined);
  });

  it('should return 1', function() {
    expect(matcher({
      'monkey': function() {return 1234;},
      '_': function() {return 1;}
    })('goat')).to.be(1);
  });

  it('should throw error', function() {
    expect(function () {
      matcher({
        'monkey': function() {return 1234;},
        '123': {}
      });
    }).to.throwException();
  });

  it('should throw error', function() {
    expect(matcher({
      'monkey': function() {return 1234;},
      '_': function() {return 1;},
      'default': function() {return 2;}
    }, 'default')('goat')).to.be(2);
  });

  describe('function arguments', function() {
    var matcherObj;

    beforeEach(function() {
      matcherObj = {
        'monkey': sinon.spy(),
        '_': sinon.spy()
      };

      matcher(matcherObj)('monkey');

      matcher(matcherObj)('monkey2');
    });

    it('should called with monkey', function() {
      sinon.assert.calledWith(matcherObj.monkey, 'monkey');
    });

    it('should called with undefined', function() {
      sinon.assert.calledWith(matcherObj._, 'monkey2');
    });
  });
});
*/
