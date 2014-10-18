'use strict';
module.exports = function() {
  return {
    sortArgs: function sortArgs(args) {
      return Array.prototype.slice.call(args, 0);
    }
  };
};