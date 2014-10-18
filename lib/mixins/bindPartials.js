'use strict';
module.exports = function(_) {
  return {
    bindPartials: function bindPartials(obj, resource, method) {
      return _.assign(obj, function() {
        return _.mapValues(_.clone(resource), function (params) {
          return _.partial.apply(null,
              _.flatten(
                  [resource[method]],
                  _.isArray(params) ? params : [params]));
        });
      });
    }
  };
};
