import{a as n}from"./p-b39b10b2.js";import{i as r,b as t,r as u,f as e,a,d as f}from"./p-16737c47.js";var o=function(n){return r(n)&&"[object Arguments]"==t(n)},c=Object.prototype,i=c.hasOwnProperty,s=c.propertyIsEnumerable,b=o(function(){return arguments}())?o:function(n){return r(n)&&i.call(n,"callee")&&!s.call(n,"callee")},l=function(){return!1},v=n(function(n,r){var t=r&&!r.nodeType&&r,e=t&&n&&!n.nodeType&&n,a=e&&e.exports===t?u.Buffer:void 0;n.exports=(a?a.isBuffer:void 0)||l}),p=/^(?:0|[1-9]\d*)$/,m=function(n,r){var t=typeof n;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&p.test(n))&&n>-1&&n%1==0&&n<r},y=function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991},j={};j["[object Float32Array]"]=j["[object Float64Array]"]=j["[object Int8Array]"]=j["[object Int16Array]"]=j["[object Int32Array]"]=j["[object Uint8Array]"]=j["[object Uint8ClampedArray]"]=j["[object Uint16Array]"]=j["[object Uint32Array]"]=!0,j["[object Arguments]"]=j["[object Array]"]=j["[object ArrayBuffer]"]=j["[object Boolean]"]=j["[object DataView]"]=j["[object Date]"]=j["[object Error]"]=j["[object Function]"]=j["[object Map]"]=j["[object Number]"]=j["[object Object]"]=j["[object RegExp]"]=j["[object Set]"]=j["[object String]"]=j["[object WeakMap]"]=!1;var d,g=n(function(n,r){var t=r&&!r.nodeType&&r,u=t&&n&&!n.nodeType&&n,a=u&&u.exports===t&&e.process,f=function(){try{return u&&u.require&&u.require("util").types||a&&a.binding&&a.binding("util")}catch(n){}}();n.exports=f}),O=g&&g.isTypedArray,h=O?(d=O,function(n){return d(n)}):function(n){return r(n)&&y(n.length)&&!!j[t(n)]},A=Object.prototype.hasOwnProperty,x=function(n,r){var t=a(n),u=!t&&b(n),e=!t&&!u&&v(n),f=!t&&!u&&!e&&h(n),o=t||u||e||f,c=o?function(n,r){for(var t=-1,u=Array(n);++t<n;)u[t]=r(t);return u}(n.length,String):[],i=c.length;for(var s in n)!r&&!A.call(n,s)||o&&("length"==s||e&&("offset"==s||"parent"==s)||f&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||m(s,i))||c.push(s);return c},L=Object.prototype,S=function(n){var r=n&&n.constructor;return n===("function"==typeof r&&r.prototype||L)},$=function(n){return null!=n&&y(n.length)&&!f(n)},k=function(n){return n};export{$ as a,x as b,k as c,m as d,v as e,h as f,b as g,S as i};