goog.provide('jstk.lib');

goog.require('jstk.helper');
goog.require('jstk.matcher');

//goog.exportProperty(jstk, 'jasmineMatchers', jstk.test.helper.jasmineMatchers);


_.mixin({
  isObjectStrict: jstk.isObjectStrict,
  applyCtor: jstk.applyCtor,
  callCtor: jstk.callCtor,
  toInt: jstk.toInt,
  matcher: jstk.matcher
});
