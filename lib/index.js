'use strict';

module.exports = {
  bind: function(_) {
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
      return (Function.prototype.bind.apply(ctor, [null].concat(args)));
    }

    function callCtor(ctor/*, var_args*/) {
      var args = _.toArray(arguments).slice(1);
      return (Function.prototype.bind.apply(ctor, [null].concat(args)));
    }

    function toInt(string) {
      return parseInt(string, 10);
    }

    function getProperty(propertyName) {
      return function(object) {
        return object[propertyName];
      };
    }

    function callMethod(methodName) {
      return function(object) {
        return object[methodName].call(object);
      };
    }

    function repeat(length, element) {
      return _.range(length).map(_.constant(element));
    }

    _.mixin({
      isObjectStrict: isObjectStrict,
      applyCtor: applyCtor,
      callCtor: callCtor,
      toInt: toInt,
      matcher: matcher,
      getProperty: getProperty,
      callMethod: callMethod,
      repeat: repeat
    });
  }
};
