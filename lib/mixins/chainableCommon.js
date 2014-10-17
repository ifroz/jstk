'use strict';

module.exports = function(_) {
  return _.mapValues({
    prepend: 'unshift',
    append: 'push',
    chainableShift: 'shift',
    chainableUnshift: 'unshift',
    chainablePop: 'pop',
    chainablePush: 'push'
  }, function(v, action) {
    return function (arr, shiftable, cb) {
      (cb || _.noop)(arr[action](shiftable));
      return arr;
    };
  });
};