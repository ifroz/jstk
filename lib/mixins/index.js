'use strict';
var mixins = [
  require('./chunk'),
  require('./unpluck'),
  require('./bindPartials'),
  require('./bindResource'),
  require('./chainableCommon'),
  require('./sortArgs'),
  require('./mapKeys')
];

module.exports = function(_) {
  return _(mixins).map(function(mixinModule) {
    return mixinModule(_);
  }).reduce(function(aggregate, mixin) {
    return _(mixins).assign(mixin);
  }, {}).value();
};