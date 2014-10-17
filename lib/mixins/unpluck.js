module.exports = function(_) {
  return {
    unpluck: function unpluck(obj, key) {
      _.mapValues(obj, function (p) {
        var x = {};
        x[key] = p;
        return x;
      });
    }
  };
};