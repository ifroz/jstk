'use strict'; 
module.exports = function(_) {
  return {
    chunk: function chunk(whole, count) {
      return _(whole).
          groupBy(function (b, idx) {
            return Math.floor(idx / count);
          }).
          values().
          value();
    }
  };
};