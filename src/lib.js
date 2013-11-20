goog.provide('jstk.lib');

goog.require('jstk.helper');
goog.require('jstk.matcher');



_.mixin({
  isObjectStrict: jstk.isObjectStrict,
  applyCtor: jstk.applyCtor,
  callCtor: jstk.callCtor,
  toInt: jstk.toInt,
  matcher: jstk.matcher
});
