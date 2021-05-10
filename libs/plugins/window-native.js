/**
 * https://github.com/angular/zone.js/blob/b3a76d3f8d374be8edf009f7a077e51eefec6a65/MODULE.md
 * zone.js 要8以上
 */
(function disableAngular() {
  window.__Zone_disable_requestAnimationFrame = true;
  window.__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'pointermove', 'touchmove', 'mousemove']; // disable patch specified eventNames
  // Common
  window.__Zone_disable_Error = true; // Zone will not patch Error
  window.__Zone_disable_toString = true; // Zone will not patch Function.prototype.toString
  // window.__Zone_disable_ZoneAwarePromise = true;
  // Browser
  // window.__Zone_disable_on_property = true;
  window.__Zone_disable_timer = true; // setTimeout / setInterval / setImmediate
  // window.__Zone_disable_EventTarget = true;
  // window.__Zone_disable_IE_check = true;
  // window.__Zone_enable_cross_context_check = true;
  // window.__Zone_disable_XHR = true;
  // window.__Zone_disable_PromiseRejectionEvent = true;
  // window.__Zone_disable_notification = true;
  // window.__Zone_disable_geolocation = true; // Zone will not patch geolocation API
  // window.__Zone_disable_blocking = true; // Zone will not patch alert/prompt/confirm
})();
