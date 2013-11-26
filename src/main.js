var matcher = require('lib/jstk/matcher');
var helper = require('lib/jstk/helper');

exports = {matcher: matcher, isObjectStrict: helper.isObjectStrict};

_.mixin(
/** @lends {_} */
{
  isObjectStrict: helper.isObjectStrict,
  applyCtor: helper.applyCtor,
  callCtor: helper.callCtor,
  toInt: helper.toInt,
  matcher: matcher
});
