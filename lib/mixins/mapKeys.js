'use strict';

module.exports = function(_) {
  return {
    mapKeys: function mapKeys(input, mapper, context) {
      return _.reduce(input, function(output, v, k) {
        output[mapper.call(context, v, k, input)] = v;
        return output;
      }, {}, context);
    }
  };
};