'use strict';

var _ = require('./context').get();

function getProperty(key) {
  return function(object) {
    var keys = parseKeys(key);
    if (!keys.length || !object) {
      return object || undefined;
    } else {
      var nextValue = object[_.first(keys)];
      return keys.length === 1 ? nextValue :
        getProperty(_.rest(keys))(nextValue);
    }
  };
}

function parseKeys(key) {
  return _.compact(_.isString(key) ? key.split('.') : key);
}

function recursiveMapValues(object, iterator, allKeys) {
  allKeys = allKeys || [];
  iterator = iterator || _.identity;
  return _.mapValues(object, function (value, key, obj) {
    var keys = allKeys.concat([key]);
    if (_.isObject(value)) {
      return recursiveMapValues(value, iterator, keys);
    } else {
      return iterator(value, keys, obj);
    }
  });
}

module.exports = {
  getProperty: getProperty,
  recursiveMapValues: recursiveMapValues
};
