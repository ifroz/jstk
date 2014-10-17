module.exports = function(_) {
  return {
    bindResource: function bindResource(obj, resource, bindings) {
      return _.assign(obj, function() {
        return _.mapValues(bindings, function(resourceMethodName) {
          return resource[resourceMethodName];
        });
      });
    }
  };
};
