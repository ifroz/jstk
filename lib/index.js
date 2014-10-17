'use strict';

var context = require('./context');
var mixins = require('./mixins');

module.exports = {
  bind: function(lodash) {
    context.set(lodash);
    var recursive = require('./recursive');
    var _ = context.get();

    function matcher(matchObject, optDefault) {
      checkMatchObjectTypes_(matchObject);
      var defaultString = optDefault || '_';
      return function(matchString) {
        return invokeMatch_(matchObject, matchString, defaultString);
      };
    }

    function isEveryKeyFunction_(input) {
      return Object.keys(input || {}).every(function(key) {
        return _.isFunction(input[key]);
      });
    }

    function invokeMatch_(matchObject, matchString, defaultString) {
      if (matchObject[matchString]) {
        return matchObject[matchString](matchString);
      } else {
        return matchObject[defaultString] &&
          matchObject[defaultString](matchString);
      }
    }

    function checkMatchObjectTypes_(matchObject) {
      if (!_.isObject(matchObject)) {
        throw new Error('Need a match object!');
      }
      if (!isEveryKeyFunction_(matchObject)) {
        throw new Error('Match object values need to be a function!');
      }
    }
    
    function isObjectStrict(obj) {
      return _.isObject(obj) && !_.isArray(obj) && !_.isFunction(obj);
    }
    
    function applyCtor(ctor, args) {
      return (Function.prototypebind.apply(ctor, [null].concat(args)));
    }

    function callCtor(ctor/*, var_args*/) {
      var args = _.toArray(arguments).slice(1);
      return (Function.prototype.bind.apply(ctor, [null].concat(args)));
    }

    function toInt(string) {
      return parseInt(string, 10);
    }

    function callMethod(methodName, args) {
      return function(object) {
        return object[methodName].apply(object, args);
      };
    }

    function repeat(length, element) {
      return _.range(length).map(_.constant(element));
    }
    
    _.mixin(_({
      isObjectStrict: isObjectStrict,
      applyCtor: applyCtor,
      callCtor: callCtor,
      toInt: toInt,
      matcher: matcher,
      callMethod: callMethod,
      repeat: repeat
    }).extend(recursive).extend(mixins(_)).value());

    return _;
  }
};
