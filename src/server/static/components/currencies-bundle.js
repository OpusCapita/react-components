!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("menus-currencies",[],t):"object"==typeof exports?exports["menus-currencies"]=t():e["menus-currencies"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/static",t(t.s=35)}([function(e,t,n){"use strict";function r(e,t,n,r,a,i,s,u){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,i,s,u],p=0;c=new Error(t.replace(/%s/g,function(){return l[p++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";function r(e){return void 0!==e.ref}function o(e){return void 0!==e.key}var a=n(2),i=n(10),s=(n(4),n(8),Object.prototype.hasOwnProperty),u=n(11),c={key:!0,ref:!0,__self:!0,__source:!0},l=function(e,t,n,r,o,a,i){var s={$$typeof:u,type:e,key:t,ref:n,props:i,_owner:a};return s};l.createElement=function(e,t,n){var a,u={},p=null,f=null;if(null!=t){r(t)&&(f=t.ref),o(t)&&(p=""+t.key),void 0===t.__self?null:t.__self,void 0===t.__source?null:t.__source;for(a in t)s.call(t,a)&&!c.hasOwnProperty(a)&&(u[a]=t[a])}var d=arguments.length-2;if(1===d)u.children=n;else if(d>1){for(var m=Array(d),h=0;h<d;h++)m[h]=arguments[h+2];u.children=m}if(e&&e.defaultProps){var y=e.defaultProps;for(a in y)void 0===u[a]&&(u[a]=y[a])}return l(e,p,f,0,0,i.current,u)},l.createFactory=function(e){var t=l.createElement.bind(null,e);return t.type=e,t},l.cloneAndReplaceKey=function(e,t){return l(e.type,t,e.ref,e._self,e._source,e._owner,e.props)},l.cloneElement=function(e,t,n){var u,p=a({},e.props),f=e.key,d=e.ref,m=(e._self,e._source,e._owner);if(null!=t){r(t)&&(d=t.ref,m=i.current),o(t)&&(f=""+t.key);var h;e.type&&e.type.defaultProps&&(h=e.type.defaultProps);for(u in t)s.call(t,u)&&!c.hasOwnProperty(u)&&(void 0===t[u]&&void 0!==h?p[u]=h[u]:p[u]=t[u])}var y=arguments.length-2;if(1===y)p.children=n;else if(y>1){for(var b=Array(y),v=0;v<y;v++)b[v]=arguments[v+2];p.children=b}return l(e.type,f,d,0,0,m,p)},l.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===u},e.exports=l},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,s,u=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var l in n)a.call(n,l)&&(u[l]=n[l]);if(o){s=o(n);for(var p=0;p<s.length;p++)i.call(n,s[p])&&(u[s[p]]=n[s[p]])}}return u}},function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);n+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var o=new Error(n);throw o.name="Invariant Violation",o.framesToPop=1,o}e.exports=r},function(e,t,n){"use strict";var r=n(5),o=r;e.exports=o},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n){this.props=e,this.context=t,this.refs=c,this.updater=n||u}function o(e,t,n){this.props=e,this.context=t,this.refs=c,this.updater=n||u}function a(){}var i=n(3),s=n(2),u=n(7),c=(n(8),n(9));n(0),n(14);r.prototype.isReactComponent={},r.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&i("85"),this.updater.enqueueSetState(this,e),t&&this.updater.enqueueCallback(this,t,"setState")},r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this),e&&this.updater.enqueueCallback(this,e,"forceUpdate")};a.prototype=r.prototype,o.prototype=new a,o.prototype.constructor=o,s(o.prototype,r.prototype),o.prototype.isPureReactComponent=!0,e.exports={Component:r,PureComponent:o}},function(e,t,n){"use strict";var r=(n(4),{isMounted:function(e){return!1},enqueueCallback:function(e,t){},enqueueForceUpdate:function(e){},enqueueReplaceState:function(e,t){},enqueueSetState:function(e,t){}});e.exports=r},function(e,t,n){"use strict";var r=!1;e.exports=r},function(e,t,n){"use strict";var r={};e.exports=r},function(e,t,n){"use strict";var r={current:null};e.exports=r},function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=r},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";var r=n(2),o=n(6),a=n(15),i=n(20),s=n(1),u=n(21),c=n(26),l=n(27),p=n(29),f=s.createElement,d=s.createFactory,m=s.cloneElement,h=r,y=function(e){return e},b={Children:{map:a.map,forEach:a.forEach,count:a.count,toArray:a.toArray,only:p},Component:o.Component,PureComponent:o.PureComponent,createElement:f,cloneElement:m,isValidElement:s.isValidElement,PropTypes:u,createClass:l,createFactory:d,createMixin:y,DOM:i,version:c,__spread:h};e.exports=b},function(e,t,n){"use strict";var r=function(){};e.exports=r},function(e,t,n){"use strict";function r(e){return(""+e).replace(E,"$&/")}function o(e,t){this.func=e,this.context=t,this.count=0}function a(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}function i(e,t,n){if(null==e)return e;var r=o.getPooled(t,n);b(e,a,r),o.release(r)}function s(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function u(e,t,n){var o=e.result,a=e.keyPrefix,i=e.func,s=e.context,u=i.call(s,t,e.count++);Array.isArray(u)?c(u,o,n,y.thatReturnsArgument):null!=u&&(h.isValidElement(u)&&(u=h.cloneAndReplaceKey(u,a+(!u.key||t&&t.key===u.key?"":r(u.key)+"/")+n)),o.push(u))}function c(e,t,n,o,a){var i="";null!=n&&(i=r(n)+"/");var c=s.getPooled(t,i,o,a);b(e,u,c),s.release(c)}function l(e,t,n){if(null==e)return e;var r=[];return c(e,r,null,t,n),r}function p(e,t,n){return null}function f(e,t){return b(e,p,null)}function d(e){var t=[];return c(e,t,null,y.thatReturnsArgument),t}var m=n(16),h=n(1),y=n(5),b=n(17),v=m.twoArgumentPooler,g=m.fourArgumentPooler,E=/\/+/g;o.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},m.addPoolingTo(o,v),s.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},m.addPoolingTo(s,g);var x={forEach:i,map:l,mapIntoWithKeyPrefixInternal:c,count:f,toArray:d};e.exports=x},function(e,t,n){"use strict";var r=n(3),o=(n(0),function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)}),a=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},i=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},s=function(e,t,n,r){var o=this;if(o.instancePool.length){var a=o.instancePool.pop();return o.call(a,e,t,n,r),a}return new o(e,t,n,r)},u=function(e){var t=this;e instanceof t||r("25"),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},c=o,l=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||c,n.poolSize||(n.poolSize=10),n.release=u,n},p={addPoolingTo:l,oneArgumentPooler:o,twoArgumentPooler:a,threeArgumentPooler:i,fourArgumentPooler:s};e.exports=p},function(e,t,n){"use strict";function r(e,t){return e&&"object"==typeof e&&null!=e.key?c.escape(e.key):t.toString(36)}function o(e,t,n,a){var f=typeof e;if("undefined"!==f&&"boolean"!==f||(e=null),null===e||"string"===f||"number"===f||"object"===f&&e.$$typeof===s)return n(a,e,""===t?l+r(e,0):t),1;var d,m,h=0,y=""===t?l:t+p;if(Array.isArray(e))for(var b=0;b<e.length;b++)d=e[b],m=y+r(d,b),h+=o(d,m,n,a);else{var v=u(e);if(v){var g,E=v.call(e);if(v!==e.entries)for(var x=0;!(g=E.next()).done;)d=g.value,m=y+r(d,x++),h+=o(d,m,n,a);else for(;!(g=E.next()).done;){var w=g.value;w&&(d=w[1],m=y+c.escape(w[0])+p+r(d,0),h+=o(d,m,n,a))}}else if("object"===f){var M="",N=String(e);i("31","[object Object]"===N?"object with keys {"+Object.keys(e).join(", ")+"}":N,M)}}return h}function a(e,t,n){return null==e?0:o(e,"",t,n)}var i=n(3),s=(n(10),n(11)),u=n(18),c=(n(0),n(19)),l=(n(4),"."),p=":";e.exports=a},function(e,t,n){"use strict";function r(e){var t=e&&(o&&e[o]||e[a]);if("function"==typeof t)return t}var o="function"==typeof Symbol&&Symbol.iterator,a="@@iterator";e.exports=r},function(e,t,n){"use strict";function r(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function o(e){var t=/(=0|=2)/g,n={"=0":"=","=2":":"};return(""+("."===e[0]&&"$"===e[1]?e.substring(2):e.substring(1))).replace(t,function(e){return n[e]})}var a={escape:r,unescape:o};e.exports=a},function(e,t,n){"use strict";var r=n(1),o=r.createFactory,a={a:o("a"),abbr:o("abbr"),address:o("address"),area:o("area"),article:o("article"),aside:o("aside"),audio:o("audio"),b:o("b"),base:o("base"),bdi:o("bdi"),bdo:o("bdo"),big:o("big"),blockquote:o("blockquote"),body:o("body"),br:o("br"),button:o("button"),canvas:o("canvas"),caption:o("caption"),cite:o("cite"),code:o("code"),col:o("col"),colgroup:o("colgroup"),data:o("data"),datalist:o("datalist"),dd:o("dd"),del:o("del"),details:o("details"),dfn:o("dfn"),dialog:o("dialog"),div:o("div"),dl:o("dl"),dt:o("dt"),em:o("em"),embed:o("embed"),fieldset:o("fieldset"),figcaption:o("figcaption"),figure:o("figure"),footer:o("footer"),form:o("form"),h1:o("h1"),h2:o("h2"),h3:o("h3"),h4:o("h4"),h5:o("h5"),h6:o("h6"),head:o("head"),header:o("header"),hgroup:o("hgroup"),hr:o("hr"),html:o("html"),i:o("i"),iframe:o("iframe"),img:o("img"),input:o("input"),ins:o("ins"),kbd:o("kbd"),keygen:o("keygen"),label:o("label"),legend:o("legend"),li:o("li"),link:o("link"),main:o("main"),map:o("map"),mark:o("mark"),menu:o("menu"),menuitem:o("menuitem"),meta:o("meta"),meter:o("meter"),nav:o("nav"),noscript:o("noscript"),object:o("object"),ol:o("ol"),optgroup:o("optgroup"),option:o("option"),output:o("output"),p:o("p"),param:o("param"),picture:o("picture"),pre:o("pre"),progress:o("progress"),q:o("q"),rp:o("rp"),rt:o("rt"),ruby:o("ruby"),s:o("s"),samp:o("samp"),script:o("script"),section:o("section"),select:o("select"),small:o("small"),source:o("source"),span:o("span"),strong:o("strong"),style:o("style"),sub:o("sub"),summary:o("summary"),sup:o("sup"),table:o("table"),tbody:o("tbody"),td:o("td"),textarea:o("textarea"),tfoot:o("tfoot"),th:o("th"),thead:o("thead"),time:o("time"),title:o("title"),tr:o("tr"),track:o("track"),u:o("u"),ul:o("ul"),var:o("var"),video:o("video"),wbr:o("wbr"),circle:o("circle"),clipPath:o("clipPath"),defs:o("defs"),ellipse:o("ellipse"),g:o("g"),image:o("image"),line:o("line"),linearGradient:o("linearGradient"),mask:o("mask"),path:o("path"),pattern:o("pattern"),polygon:o("polygon"),polyline:o("polyline"),radialGradient:o("radialGradient"),rect:o("rect"),stop:o("stop"),svg:o("svg"),text:o("text"),tspan:o("tspan")};e.exports=a},function(e,t,n){"use strict";var r=n(1),o=r.isValidElement,a=n(22);e.exports=a(o)},function(e,t,n){"use strict";var r=n(23);e.exports=function(e){return r(e,!1)}},function(e,t,n){"use strict";var r=n(5),o=n(0),a=n(4),i=n(24),s=n(25);e.exports=function(e,t){function n(e){var t=e&&(N&&e[N]||e[P]);if("function"==typeof t)return t}function u(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function c(e){this.message=e,this.stack=""}function l(e){function n(n,r,a,s,u,l,p){if(s=s||O,l=l||a,p!==i)if(t)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else;return null==r[a]?n?new c(null===r[a]?"The "+u+" `"+l+"` is marked as required in `"+s+"`, but its value is `null`.":"The "+u+" `"+l+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(r,a,s,u,l)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function p(e){function t(t,n,r,o,a,i){var s=t[n];if(E(s)!==e)return new c("Invalid "+o+" `"+a+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return l(t)}function f(e){function t(t,n,r,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s)){return new c("Invalid "+o+" `"+a+"` of type `"+E(s)+"` supplied to `"+r+"`, expected an array.")}for(var u=0;u<s.length;u++){var l=e(s,u,r,o,a+"["+u+"]",i);if(l instanceof Error)return l}return null}return l(t)}function d(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||O;return new c("Invalid "+o+" `"+a+"` of type `"+M(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}return l(t)}function m(e){function t(t,n,r,o,a){for(var i=t[n],s=0;s<e.length;s++)if(u(i,e[s]))return null;return new c("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?l(t):r.thatReturnsNull}function h(e){function t(t,n,r,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var s=t[n],u=E(s);if("object"!==u)return new c("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var l in s)if(s.hasOwnProperty(l)){var p=e(s,l,r,o,a+"."+l,i);if(p instanceof Error)return p}return null}return l(t)}function y(e){function t(t,n,r,o,a){for(var s=0;s<e.length;s++){if(null==(0,e[s])(t,n,r,o,a,i))return null}return new c("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return r.thatReturnsNull;for(var n=0;n<e.length;n++){var o=e[n];if("function"!=typeof o)return a(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",w(o),n),r.thatReturnsNull}return l(t)}function b(e){function t(t,n,r,o,a){var s=t[n],u=E(s);if("object"!==u)return new c("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var p=e[l];if(p){var f=p(s,l,r,o,a+"."+l,i);if(f)return f}}return null}return l(t)}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=n(t);if(!r)return!1;var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!v(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function g(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function E(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":g(t,e)?"symbol":t}function x(e){if(void 0===e||null===e)return""+e;var t=E(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function M(e){return e.constructor&&e.constructor.name?e.constructor.name:O}var N="function"==typeof Symbol&&Symbol.iterator,P="@@iterator",O="<<anonymous>>",C={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return l(r.thatReturnsNull)}(),arrayOf:f,element:function(){function t(t,n,r,o,a){var i=t[n];if(!e(i)){return new c("Invalid "+o+" `"+a+"` of type `"+E(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return l(t)}(),instanceOf:d,node:function(){function e(e,t,n,r,o){return v(e[t])?null:new c("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return l(e)}(),objectOf:h,oneOf:m,oneOfType:y,shape:b};return c.prototype=Error.prototype,C.checkPropTypes=s,C.PropTypes=C,C}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e,t,n,r,o){}e.exports=r},function(e,t,n){"use strict";e.exports="15.6.1"},function(e,t,n){"use strict";var r=n(6),o=r.Component,a=n(1),i=a.isValidElement,s=n(7),u=n(28);e.exports=u(o,i,s)},function(e,t,n){"use strict";function r(e){return e}function o(e,t,n){function o(e,t){var n=v.hasOwnProperty(t)?v[t]:null;w.hasOwnProperty(t)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function c(e,n){if(n){s("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=e.prototype,a=r.__reactAutoBindPairs;n.hasOwnProperty(u)&&g.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==u){var c=n[i],l=r.hasOwnProperty(i);if(o(l,i),g.hasOwnProperty(i))g[i](e,c);else{var p=v.hasOwnProperty(i),m="function"==typeof c,h=m&&!p&&!l&&!1!==n.autobind;if(h)a.push(i,c),r[i]=c;else if(l){var y=v[i];s(p&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,i),"DEFINE_MANY_MERGED"===y?r[i]=f(r[i],c):"DEFINE_MANY"===y&&(r[i]=d(r[i],c))}else r[i]=c}}}else;}function l(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in g;s(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;s(!a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=r}}}function p(e,t){s(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(s(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return p(o,n),p(o,r),o}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function h(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=m(e,o)}}function y(e){var t=r(function(e,r,o){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=r,this.refs=i,this.updater=o||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;s("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new M,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],b.forEach(c.bind(null,t)),c(t,E),c(t,e),c(t,x),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),s(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in v)t.prototype[o]||(t.prototype[o]=null);return t}var b=[],v={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)c(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=a({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=a({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=a({},e.propTypes,t)},statics:function(e,t){l(e,t)},autobind:function(){}},E={componentDidMount:function(){this.__isMounted=!0}},x={componentWillUnmount:function(){this.__isMounted=!1}},w={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},M=function(){};return a(M.prototype,e.prototype,w),y}var a=n(2),i=n(9),s=n(0),u="mixins";e.exports=o},function(e,t,n){"use strict";function r(e){return a.isValidElement(e)||o("143"),e}var o=n(3),a=n(1);n(0);e.exports=r},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(36);t.default=r.a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(12),s=n.n(i),u=n(37),c=(n.n(u),n(38)),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.hideMenu=function(){n.state.currentOpenMenuName?n.setState({oldOpenMenuName:n.state.currentOpenMenuName,currentOpenMenuName:null}):n.state.oldOpenMenuName&&n.setState({oldOpenMenuName:null})},n.state={oldOpenMenuName:null,currentOpenMenuName:null,activeMainMenuName:"Home",activeSubMenuName:null};return n}return a(t,e),l(t,[{key:"componentWillMount",value:function(){this.context.i18n&&(this.i18n=this.context.i18n.register("SidebarMenu",c.a))}},{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.hideMenu,!1);var e=document.querySelector("a[href='"+window.location.pathname+"']");null!=e&&e.click()}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.hideMenu,!1)}},{key:"componentWillReceiveProps",value:function(e,t){this.i18n&&this.i18n.locale&&t.i18n&&t.i18n.locale!=this.i18n.locale&&(this.i18n=t.i18n.register("SidebarMenu",c.a))}},{key:"mainMenuWithSubmenuClick",value:function(e,t){t.preventDefault(),this.state.oldOpenMenuName!==e&&this.setState({currentOpenMenuName:e})}},{key:"handleMenuItemClick",value:function(e,t,n,r){r.preventDefault(),"string"!=typeof n&&(n=null,r=arguments[2]);var o={};this.state.activeMainMenuName!==t&&(o.activeMainMenuName=t),this.state.activeSubMenuName!==n&&(o.activeSubMenuName=n),Object.keys(o).length&&this.setState(o);var a=window.location.pathname,i=a&&a.indexOf("/",1),s=i>0?a.substr(0,i):a;0===e.indexOf(s)?this.context.router.push(e.substr(s.length)||"/"):window.location=e}},{key:"render",value:function(){var e=this.props,t=e.isBuyer,n=e.logo,r=e.style,o=!t;return s.a.createElement("section",{className:"sidebar",style:Object.assign({minHeight:"100vh",position:"fixed",zIndex:3},r)},s.a.createElement("nav",{className:"navbar navbar-default",style:{border:0}},s.a.createElement("div",{className:"nav-background"}),s.a.createElement("div",{className:"navbar-header hidden-md"},s.a.createElement("a",{className:"navbar-brand visible-lg",href:"http://www.opuscapita.com/"},s.a.createElement("img",{src:n,style:{height:"1.4em"}}))),s.a.createElement("ul",{className:"nav navbar-nav"},s.a.createElement("li",{className:""+("Home"===this.state.activeMainMenuName&&" active"||"")},s.a.createElement("a",{href:"/bnp/dashboard",onClick:this.handleMenuItemClick.bind(this,"/bnp/dashboard","Home")},s.a.createElement("span",{className:"oci oci-store"}),this.i18n?this.i18n.getMessage("SidebarMenu.home"):"Home")),t&&s.a.createElement("li",{className:"dropdown"+("Suppliers"===this.state.currentOpenMenuName&&" open"||"")+("Suppliers"===this.state.activeMainMenuName&&" active"||"")},s.a.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false",onClick:this.mainMenuWithSubmenuClick.bind(this,"Suppliers")},s.a.createElement("span",{className:"oci oci-supdirect"}),this.i18n?this.i18n.getMessage("SidebarMenu.supplier.label"):"Suppliers"),s.a.createElement("ul",{className:"dropdown-menu"},s.a.createElement("li",{className:""+("Suppliers"===this.state.activeMainMenuName&&"Dashboard"===this.state.activeSubMenuName&&" active"||"")},s.a.createElement("a",{href:"/onboarding/dashboard",onClick:this.handleMenuItemClick.bind(this,"/onboarding/dashboard","Suppliers","Dashboard")},this.i18n?this.i18n.getMessage("SidebarMenu.supplier.onboardingDashboard"):"Onboarding Dashboard")),s.a.createElement("li",{className:""+("Suppliers"===this.state.activeMainMenuName&&"Campaigns"===this.state.activeSubMenuName&&" active"||"")},s.a.createElement("a",{href:"/onboarding",onClick:this.handleMenuItemClick.bind(this,"/onboarding","Suppliers","Campaigns")},this.i18n?this.i18n.getMessage("SidebarMenu.supplier.onboardingCampaigns"):"Onboarding Campaigns")),s.a.createElement("li",{className:""+("Suppliers"===this.state.activeMainMenuName&&"Campaign"===this.state.activeSubMenuName&&" active"||"")},s.a.createElement("a",{href:"/onboarding/create",onClick:this.handleMenuItemClick.bind(this,"/onboarding/create","Suppliers","Campaign")},this.i18n?this.i18n.getMessage("SidebarMenu.supplier.createOnboardingCampaign"):"Create Onboarding Campaign")))),o&&s.a.createElement("li",{className:"dropdown"+("Company"===this.state.currentOpenMenuName&&" open"||"")+("Company"===this.state.activeMainMenuName&&" active"||"")},s.a.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false",onClick:this.mainMenuWithSubmenuClick.bind(this,"Company")},s.a.createElement("span",{className:"oci oci-user"}),this.i18n?this.i18n.getMessage("SidebarMenu.company.label"):"Company"),s.a.createElement("ul",{className:"dropdown-menu"},s.a.createElement("li",{className:""+("Company"===this.state.activeMainMenuName&&"Approval"===this.state.activeSubMenuName&&" active"||"")},s.a.createElement("a",{href:"/bnp/supplierInformation",onClick:this.handleMenuItemClick.bind(this,"/bnp/supplierInformation","Company","Profile")},this.i18n?this.i18n.getMessage("SidebarMenu.company.profile"):"Profile")))))))}}]),t}(s.a.Component);p.defaultProps={isBuyer:!0,logo:u.default},p.propTypes={isBuyer:s.a.PropTypes.bool.isRequired,style:s.a.PropTypes.object,logo:s.a.PropTypes.string},p.contextTypes={i18n:s.a.PropTypes.object,router:s.a.PropTypes.object},t.a=p},function(e,t){throw new Error('Module parse failed: /Users/work/Documents/workspace/react-menus/src/client/SidebarMenu/oc-logo-white.svg Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <?xml version="1.0" encoding="utf-8"?>\r\n| \x3c!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\r\n| <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r')},function(e,t,n){"use strict";var r=n(39),o=n(40);t.a=[{locales:["en"],messages:r.a},{locales:["de"],messages:o.a}]},function(e,t,n){"use strict";var r={};r.label="Settings";var o={};o.label="Company",o.profile="Profile",o.serviceConfiguration="Service Configuration",o.companyInformation="Company Information";var a={};a.label="RfQ",a.viewRfQs="View RfQs";var i={};i.label="Products";var s={};s.label="Other Docs";var u={};u.label="Invoice",u.inspect="Inspect",u.createNew="Create New";var c={};c.label="Orders",c.OrderConfirmation="Order Confirmation",c.OrderHistory="Order History",c.poDownload="PO Download";var l={};l.label="Suppliers",l.onboardingDashboard="Onboarding Dashboard",l.onboardingCampaigns="Onboarding Campaigns",l.createOnboardingCampaign="Create Onboarding Campaign",l.viewOnboardingPage="View Onboarding Page",t.a={SidebarMenu:{home:"Home",orders:c,invoice:u,otherDocs:s,products:i,rfg:a,company:o,settings:r,supplier:l}}},function(e,t,n){"use strict";var r={};r.label="Einstellungen";var o={};o.label="Unternehmen",o.profile="Profil",o.serviceConfiguration="Service Konfiguration",o.companyInformation="Unternehmensinformation";var a={};a.label="Ausschreibung",a.viewRfQs="Liste";var i={};i.label="Produktdaten";var s={};s.label="Andere Dokumente";var u={};u.label="Rechnungen",u.inspect="Liste",u.createNew="Erstellen";var c={};c.label="Bestellungen",c.OrderConfirmation="Bestellbestätigung",c.OrderHistory="Bestellhistorie",c.poDownload="Bestellung herunterladen";var l={};l.label="Lieferanten",l.onboardingDashboard="Onboarding Übersicht",l.onboardingCampaigns="Onboarding Kampagnen",l.createOnboardingCampaign="Onboarding Kampagne erstellen",l.viewOnboardingPage="Onboarding Startseite",t.a={SidebarMenu:{home:"Home",orders:c,invoice:u,otherDocs:s,products:i,rfg:a,company:o,settings:r,supplier:l}}}])});