module.exports = function(_) {
  return {
    sortArgs: function sortArgs(args) {
      return Array.prototype.slice.call(args, 0).sort();
    }
  };
}