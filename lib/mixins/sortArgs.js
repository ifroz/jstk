module.exports = function(_) {
  return {
    sortArgs: function sortArgs(args) {
      args = Array.prototype.slice.call(args, 0);
      return args.sort();
    }
  };
};