!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.svgPathFn=n():t.svgPathFn=n()}("undefined"!=typeof self?self:this,(function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/",r(r.s=67)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(42))},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(5),o=r(6),u=r(12);t.exports=e?function(t,n,r){return o.f(t,n,u(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(0),o=r(19),u=r(1),i=r(24),c=r(25),a=r(43),f=o("wks"),s=e.Symbol,l=a?s:i;t.exports=function(t){return u(f,t)||(c&&u(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,r){var e=r(3);t.exports=!e((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(5),o=r(21),u=r(8),i=r(23),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(u(t),n=i(n,!0),u(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(7);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(39),o=r(18);t.exports=function(t){return e(o(t))}},function(t,n){t.exports=!1},function(t,n,r){var e=r(0),o=r(2);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports={}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(19),o=r(24),u=e("keys");t.exports=function(t){return u[t]||(u[t]=o(t))}},function(t,n){t.exports={}},function(t,n,r){"use strict";var e=r(9),o=r(41),u=r(16),i=r(30),c=r(52),a=i.set,f=i.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,n){a(this,{type:"Array Iterator",target:e(t),index:0,kind:n})}),(function(){var t=f(this),n=t.target,r=t.kind,e=t.index++;return!n||e>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:e,done:!1}:"values"==r?{value:n[e],done:!1}:{value:[e,n[e]],done:!1}}),"values"),u.Arguments=u.Array,o("keys"),o("values"),o("entries")},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(10),o=r(20);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.0",mode:e?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(0),o=r(11),u=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=u},function(t,n,r){var e=r(5),o=r(3),u=r(22);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(0),o=r(7),u=e.document,i=o(u)&&o(u.createElement);t.exports=function(t){return i?u.createElement(t):{}}},function(t,n,r){var e=r(7);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(3);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e,o=r(8),u=r(44),i=r(14),c=r(13),a=r(49),f=r(22),s=r(15),l=s("IE_PROTO"),p=function(){},y=function(t){return"<script>"+t+"<\/script>"},h=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;h=e?function(t){t.write(y("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(y("document.F=Object")),t.close(),t.F);for(var r=i.length;r--;)delete h.prototype[i[r]];return h()};c[l]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=h(),void 0===n?r:u(r,n)}},function(t,n,r){var e=r(1),o=r(9),u=r(46).indexOf,i=r(13);t.exports=function(t,n){var r,c=o(t),a=0,f=[];for(r in c)!e(i,r)&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~u(f,r)||f.push(r));return f}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(50),o=r(0),u=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?u(e[t])||u(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e,o,u,i=r(51),c=r(0),a=r(7),f=r(2),s=r(1),l=r(15),p=r(13),y=c.WeakMap;if(i){var h=new y,v=h.get,x=h.has,g=h.set;e=function(t,n){return g.call(h,t,n),n},o=function(t){return v.call(h,t)||{}},u=function(t){return x.call(h,t)}}else{var d=l("state");p[d]=!0,e=function(t,n){return f(t,d,n),n},o=function(t){return s(t,d)?t[d]:{}},u=function(t){return s(t,d)}}t.exports={set:e,get:o,has:u,enforce:function(t){return u(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(20),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(5),o=r(54),u=r(12),i=r(9),c=r(23),a=r(1),f=r(21),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=i(t),n=c(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return u(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(0),o=r(2),u=r(1),i=r(11),c=r(31),a=r(30),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,r,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||u(r,"name")||o(r,"name",n),s(r).source=l.join("string"==typeof n?n:"")),t!==e?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=r:o(t,n,r)):f?t[n]=r:i(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},function(t,n,r){"use strict";var e,o,u,i=r(35),c=r(2),a=r(1),f=r(4),s=r(10),l=f("iterator"),p=!1;[].keys&&("next"in(u=[].keys())?(o=i(i(u)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||a(e,l)||c(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,n,r){var e=r(1),o=r(61),u=r(15),i=r(62),c=u("IE_PROTO"),a=Object.prototype;t.exports=i?Object.getPrototypeOf:function(t){return t=o(t),e(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,r){var e=r(6).f,o=r(1),u=r(4)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,u)&&e(t,u,{configurable:!0,value:n})}},function(t,n,r){var e=r(38).parse;e.parseSVG=e,e.makeAbsolute=function(t){var n,r={x:0,y:0},e={x:"x0",y:"y0",x1:"x0",y1:"y0",x2:"x0",y2:"y0"};return t.forEach((function(t){for(var o in"moveto"===t.command&&(n=t),t.x0=r.x,t.y0=r.y,e)o in t&&(t[o]+=t.relative?t[e[o]]:0);"x"in t||(t.x=r.x),"y"in t||(t.y=r.y),t.relative=!1,t.code=t.code.toUpperCase(),"closepath"==t.command&&(t.x=n.x,t.y=n.y),r=t})),t},t.exports=e},function(t,n,r){"use strict";function e(t,n,r,o){this.message=t,this.expected=n,this.found=r,this.location=o,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}!function(t,n){function r(){this.constructor=t}r.prototype=n.prototype,t.prototype=new r}(e,Error),e.buildMessage=function(t,n){var r={literal:function(t){return'"'+o(t.text)+'"'},class:function(t){var n,r="";for(n=0;n<t.parts.length;n++)r+=t.parts[n]instanceof Array?u(t.parts[n][0])+"-"+u(t.parts[n][1]):u(t.parts[n]);return"["+(t.inverted?"^":"")+r+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function e(t){return t.charCodeAt(0).toString(16).toUpperCase()}function o(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+e(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+e(t)}))}function u(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+e(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+e(t)}))}return"Expected "+function(t){var n,e,o,u=new Array(t.length);for(n=0;n<t.length;n++)u[n]=(o=t[n],r[o.type](o));if(u.sort(),u.length>0){for(n=1,e=1;n<u.length;n++)u[n-1]!==u[n]&&(u[e]=u[n],e++);u.length=e}switch(u.length){case 1:return u[0];case 2:return u[0]+" or "+u[1];default:return u.slice(0,-1).join(", ")+", or "+u[u.length-1]}}(t)+" but "+function(t){return t?'"'+o(t)+'"':"end of input"}(n)+" found."},t.exports={SyntaxError:e,parse:function(t,n){n=void 0!==n?n:{};var r,o={},u={svg_path:xt},i=xt,c=function(t){if(!t)return[];for(var n=[],r=0;r<t.length;r++)n=n.concat.apply(n,t[r]);var e=n[0];return e&&"m"==e.code&&(delete e.relative,e.code="M"),n},a=function(t,n){return function(t,n){if(!n)return[t];for(var r=[t],e=0,o=n.length;e<o;e++)r[e+1]=n[e][1];return r}(t,n)},f=/^[Mm]/,s=lt(["M","m"],!1,!1),l=function(t,n,r){var e=Vt(t,[n]);return r&&(e=e.concat(Vt("M"==t?"L":"l",r[1]))),e},p=/^[Zz]/,y=lt(["Z","z"],!1,!1),h=function(){return Vt("Z")},v=/^[Ll]/,x=lt(["L","l"],!1,!1),g=function(t,n){return Vt(t,n)},d=/^[Hh]/,m=lt(["H","h"],!1,!1),b=function(t,n){return Vt(t,n.map((function(t){return{x:t}})))},A=/^[Vv]/,S=lt(["V","v"],!1,!1),O=function(t,n){return Vt(t,n.map((function(t){return{y:t}})))},j=/^[Cc]/,w=lt(["C","c"],!1,!1),T=function(t,n,r){return{x1:t.x,y1:t.y,x2:n.x,y2:n.y,x:r.x,y:r.y}},M=/^[Ss]/,P=lt(["S","s"],!1,!1),L=function(t,n){return{x2:t.x,y2:t.y,x:n.x,y:n.y}},_=/^[Qq]/,E=lt(["Q","q"],!1,!1),C=function(t,n){return{x1:t.x,y1:t.y,x:n.x,y:n.y}},k=/^[Tt]/,F=lt(["T","t"],!1,!1),I=/^[Aa]/,R=lt(["A","a"],!1,!1),G=function(t,n,r,e,o,u){return{rx:t,ry:n,xAxisRotation:r,largeArc:e,sweep:o,x:u.x,y:u.y}},V=function(t,n){return{x:t,y:n}},z=function(t){return 1*t},q=function(t){return 1*t.join("")},D=/^[01]/,N=lt(["0","1"],!1,!1),H=function(t){return"1"==t},U=function(){return""},W=",",Z=st(",",!1),B=function(t){return t.join("")},Q=".",Y=st(".",!1),K=/^[eE]/,X=lt(["e","E"],!1,!1),J=/^[+\-]/,$=lt(["+","-"],!1,!1),tt=/^[0-9]/,nt=lt([["0","9"]],!1,!1),rt=function(t){return t.join("")},et=/^[ \t\n\r]/,ot=lt([" ","\t","\n","\r"],!1,!1),ut=0,it=[{line:1,column:1}],ct=0,at=[],ft=0;if("startRule"in n){if(!(n.startRule in u))throw new Error("Can't start parsing from rule \""+n.startRule+'".');i=u[n.startRule]}function st(t,n){return{type:"literal",text:t,ignoreCase:n}}function lt(t,n,r){return{type:"class",parts:t,inverted:n,ignoreCase:r}}function pt(n){var r,e=it[n];if(e)return e;for(r=n-1;!it[r];)r--;for(e={line:(e=it[r]).line,column:e.column};r<n;)10===t.charCodeAt(r)?(e.line++,e.column=1):e.column++,r++;return it[n]=e,e}function yt(t,n){var r=pt(t),e=pt(n);return{start:{offset:t,line:r.line,column:r.column},end:{offset:n,line:e.line,column:e.column}}}function ht(t){ut<ct||(ut>ct&&(ct=ut,at=[]),at.push(t))}function vt(t,n,r){return new e(e.buildMessage(t,n),t,n,r)}function xt(){var t,n,r,e,u;for(t=ut,n=[],r=It();r!==o;)n.push(r),r=It();if(n!==o)if((r=function(){var t,n,r,e,u,i;if(t=ut,(n=gt())!==o){for(r=[],e=ut,u=[],i=It();i!==o;)u.push(i),i=It();for(u!==o&&(i=gt())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;){for(r.push(e),e=ut,u=[],i=It();i!==o;)u.push(i),i=It();u!==o&&(i=gt())!==o?e=u=[u,i]:(ut=e,e=o)}r!==o?(t,n=a(n,r),t=n):(ut=t,t=o)}else ut=t,t=o;return t}())===o&&(r=null),r!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o?(t,t=n=c(r)):(ut=t,t=o)}else ut=t,t=o;else ut=t,t=o;return t}function gt(){var n,r,e,u,i,c;if(n=ut,(r=function(){var n,r,e,u,i,c,a;n=ut,f.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=o,0===ft&&ht(s));if(r!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=wt())!==o?(i=ut,(c=Lt())===o&&(c=null),c!==o&&(a=mt())!==o?i=c=[c,a]:(ut=i,i=o),i===o&&(i=null),i!==o?(n,r=l(r,u,i),n=r):(ut=n,n=o)):(ut=n,n=o)}else ut=n,n=o;return n}())!==o){for(e=[],u=ut,i=[],c=It();c!==o;)i.push(c),c=It();for(i!==o&&(c=dt())!==o?u=i=[i,c]:(ut=u,u=o);u!==o;){for(e.push(u),u=ut,i=[],c=It();c!==o;)i.push(c),c=It();i!==o&&(c=dt())!==o?u=i=[i,c]:(ut=u,u=o)}e!==o?(n,n=r=a(r,e)):(ut=n,n=o)}else ut=n,n=o;return n}function dt(){var n;return(n=function(){var n,r;n=ut,p.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=o,0===ft&&ht(y));r!==o&&(n,r=h());return n=r}())===o&&(n=function(){var n,r,e,u;n=ut,v.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=o,0===ft&&ht(x));if(r!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=mt())!==o?(n,r=g(r,u),n=r):(ut=n,n=o)}else ut=n,n=o;return n}())===o&&(n=function(){var n,r,e,u;n=ut,d.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=o,0===ft&&ht(m));if(r!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=bt())!==o?(n,r=b(r,u),n=r):(ut=n,n=o)}else ut=n,n=o;return n}())===o&&(n=function(){var n,r,e,u;n=ut,A.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=o,0===ft&&ht(S));if(r!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=bt())!==o?(n,r=O(r,u),n=r):(ut=n,n=o)}else ut=n,n=o;return n}())===o&&(n=function(){var n,r,e,u;n=ut,j.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=o,0===ft&&ht(w));if(r!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=function(){var t,n,r,e,u,i;if(t=ut,(n=At())!==o){for(r=[],e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=At())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;)r.push(e),e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=At())!==o?e=u=[u,i]:(ut=e,e=o);r!==o?(t,n=a(n,r),t=n):(ut=t,t=o)}else ut=t,t=o;return t}())!==o?(n,r=g(r,u),n=r):(ut=n,n=o)}else ut=n,n=o;return n}())===o&&(n=function(){var n,r,e,u;n=ut,M.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=o,0===ft&&ht(P));if(r!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=function(){var t,n,r,e,u,i;if(t=ut,(n=St())!==o){for(r=[],e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=St())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;)r.push(e),e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=St())!==o?e=u=[u,i]:(ut=e,e=o);r!==o?(t,n=a(n,r),t=n):(ut=t,t=o)}else ut=t,t=o;return t}())!==o?(n,r=g(r,u),n=r):(ut=n,n=o)}else ut=n,n=o;return n}())===o&&(n=function(){var n,r,e,u;n=ut,_.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=o,0===ft&&ht(E));if(r!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=function(){var t,n,r,e,u,i;if(t=ut,(n=Ot())!==o){for(r=[],e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=Ot())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;)r.push(e),e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=Ot())!==o?e=u=[u,i]:(ut=e,e=o);r!==o?(t,n=a(n,r),t=n):(ut=t,t=o)}else ut=t,t=o;return t}())!==o?(n,r=g(r,u),n=r):(ut=n,n=o)}else ut=n,n=o;return n}())===o&&(n=function(){var n,r,e,u;n=ut,k.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=o,0===ft&&ht(F));if(r!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=function(){var t,n,r,e,u,i;if(t=ut,(n=wt())!==o){for(r=[],e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=wt())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;)r.push(e),e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=wt())!==o?e=u=[u,i]:(ut=e,e=o);r!==o?(t,n=a(n,r),t=n):(ut=t,t=o)}else ut=t,t=o;return t}())!==o?(n,r=g(r,u),n=r):(ut=n,n=o)}else ut=n,n=o;return n}())===o&&(n=function(){var n,r,e,u;n=ut,I.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=o,0===ft&&ht(R));if(r!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=function(){var t,n,r,e,u,i;if(t=ut,(n=jt())!==o){for(r=[],e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=jt())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;)r.push(e),e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=jt())!==o?e=u=[u,i]:(ut=e,e=o);r!==o?(t,n=a(n,r),t=n):(ut=t,t=o)}else ut=t,t=o;return t}())!==o?(n,r=g(r,u),n=r):(ut=n,n=o)}else ut=n,n=o;return n}()),n}function mt(){var t,n,r,e,u,i;if(t=ut,(n=wt())!==o){for(r=[],e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=wt())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;)r.push(e),e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=wt())!==o?e=u=[u,i]:(ut=e,e=o);r!==o?(t,t=n=a(n,r)):(ut=t,t=o)}else ut=t,t=o;return t}function bt(){var t,n,r,e,u,i;if(t=ut,(n=Mt())!==o){for(r=[],e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=Mt())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;)r.push(e),e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=Mt())!==o?e=u=[u,i]:(ut=e,e=o);r!==o?(t,t=n=a(n,r)):(ut=t,t=o)}else ut=t,t=o;return t}function At(){var t,n,r,e,u,i;return t=ut,(n=wt())!==o?((r=Lt())===o&&(r=null),r!==o&&(e=wt())!==o?((u=Lt())===o&&(u=null),u!==o&&(i=wt())!==o?(t,t=n=T(n,e,i)):(ut=t,t=o)):(ut=t,t=o)):(ut=t,t=o),t}function St(){var t,n,r,e;return t=ut,(n=wt())!==o?((r=Lt())===o&&(r=null),r!==o&&(e=wt())!==o?(t,t=n=L(n,e)):(ut=t,t=o)):(ut=t,t=o),t}function Ot(){var t,n,r,e;return t=ut,(n=wt())!==o?((r=Lt())===o&&(r=null),r!==o&&(e=wt())!==o?(t,t=n=C(n,e)):(ut=t,t=o)):(ut=t,t=o),t}function jt(){var t,n,r,e,u,i,c,a,f,s,l;return t=ut,(n=Tt())!==o?((r=Lt())===o&&(r=null),r!==o&&(e=Tt())!==o?((u=Lt())===o&&(u=null),u!==o&&(i=Mt())!==o&&Lt()!==o&&(c=Pt())!==o?((a=Lt())===o&&(a=null),a!==o&&(f=Pt())!==o?((s=Lt())===o&&(s=null),s!==o&&(l=wt())!==o?(t,t=n=G(n,e,i,c,f,l)):(ut=t,t=o)):(ut=t,t=o)):(ut=t,t=o)):(ut=t,t=o)):(ut=t,t=o),t}function wt(){var t,n,r,e;return t=ut,(n=Mt())!==o?((r=Lt())===o&&(r=null),r!==o&&(e=Mt())!==o?(t,t=n=V(n,e)):(ut=t,t=o)):(ut=t,t=o),t}function Tt(){var t,n;return t=ut,(n=Et())===o&&(n=Ft()),n!==o&&(t,n=z(n)),t=n}function Mt(){var t,n,r,e;return t=ut,n=ut,(r=kt())===o&&(r=null),r!==o&&(e=Et())!==o?n=r=[r,e]:(ut=n,n=o),n===o&&(n=ut,(r=kt())===o&&(r=null),r!==o&&(e=Ft())!==o?n=r=[r,e]:(ut=n,n=o)),n!==o&&(t,n=q(n)),t=n}function Pt(){var n,r;return n=ut,D.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=o,0===ft&&ht(N)),r!==o&&(n,r=H(r)),n=r}function Lt(){var t,n,r,e,u;if(t=ut,n=[],(r=It())!==o)for(;r!==o;)n.push(r),r=It();else n=o;if(n!==o)if((r=_t())===o&&(r=null),r!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o?t=n=[n,r,e]:(ut=t,t=o)}else ut=t,t=o;else ut=t,t=o;if(t===o){if(t=ut,n=ut,(r=_t())!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o?n=r=[r,e]:(ut=n,n=o)}else ut=n,n=o;n!==o&&(t,n=U()),t=n}return t}function _t(){var n;return 44===t.charCodeAt(ut)?(n=W,ut++):(n=o,0===ft&&ht(Z)),n}function Et(){var n,r,e,u;return n=ut,r=ut,(e=function(){var n,r,e,u,i;n=ut,r=ut,(e=Ft())===o&&(e=null);e!==o?(46===t.charCodeAt(ut)?(u=Q,ut++):(u=o,0===ft&&ht(Y)),u!==o&&(i=Ft())!==o?r=e=[e,u,i]:(ut=r,r=o)):(ut=r,r=o);r===o&&(r=ut,(e=Ft())!==o?(46===t.charCodeAt(ut)?(u=Q,ut++):(u=o,0===ft&&ht(Y)),u!==o?r=e=[e,u]:(ut=r,r=o)):(ut=r,r=o));r!==o&&(n,r=B(r));return n=r}())!==o?((u=Ct())===o&&(u=null),u!==o?r=e=[e,u]:(ut=r,r=o)):(ut=r,r=o),r===o&&(r=ut,(e=Ft())!==o&&(u=Ct())!==o?r=e=[e,u]:(ut=r,r=o)),r!==o&&(n,r=B(r)),n=r}function Ct(){var n,r,e,u,i;return n=ut,r=ut,K.test(t.charAt(ut))?(e=t.charAt(ut),ut++):(e=o,0===ft&&ht(X)),e!==o?((u=kt())===o&&(u=null),u!==o&&(i=Ft())!==o?r=e=[e,u,i]:(ut=r,r=o)):(ut=r,r=o),r!==o&&(n,r=B(r)),n=r}function kt(){var n;return J.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=o,0===ft&&ht($)),n}function Ft(){var n,r,e;if(n=ut,r=[],tt.test(t.charAt(ut))?(e=t.charAt(ut),ut++):(e=o,0===ft&&ht(nt)),e!==o)for(;e!==o;)r.push(e),tt.test(t.charAt(ut))?(e=t.charAt(ut),ut++):(e=o,0===ft&&ht(nt));else r=o;return r!==o&&(n,r=rt(r)),n=r}function It(){var n,r;return n=ut,et.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=o,0===ft&&ht(ot)),r!==o&&(n,r=U()),n=r}var Rt={m:"moveto",l:"lineto",h:"horizontal lineto",v:"vertical lineto",c:"curveto",s:"smooth curveto",q:"quadratic curveto",t:"smooth quadratic curveto",a:"elliptical arc",z:"closepath"};for(var Gt in Rt)Rt[Gt.toUpperCase()]=Rt[Gt];function Vt(t,n){n||(n=[{}]);for(var r=n.length;r--;){var e={code:t,command:Rt[t]};for(var o in t==t.toLowerCase()&&(e.relative=!0),n[r])e[o]=n[r][o];n[r]=e}return n}if((r=i())!==o&&ut===t.length)return r;throw r!==o&&ut<t.length&&ht({type:"end"}),vt(at,ct<t.length?t.charAt(ct):null,ct<t.length?yt(ct,ct+1):yt(ct,ct))}}},function(t,n,r){var e=r(3),o=r(40),u="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(4),o=r(26),u=r(6),i=e("unscopables"),c=Array.prototype;null==c[i]&&u.f(c,i,{configurable:!0,value:o(null)}),t.exports=function(t){c[i][t]=!0}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(25);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol()},function(t,n,r){var e=r(5),o=r(6),u=r(8),i=r(45);t.exports=e?Object.defineProperties:function(t,n){u(t);for(var r,e=i(n),c=e.length,a=0;c>a;)o.f(t,r=e[a++],n[r]);return t}},function(t,n,r){var e=r(27),o=r(14);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(9),o=r(47),u=r(48),i=function(t){return function(n,r,i){var c,a=e(n),f=o(a.length),s=u(i,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},function(t,n,r){var e=r(28),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(28),o=Math.max,u=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):u(r,n)}},function(t,n,r){var e=r(29);t.exports=e("document","documentElement")},function(t,n,r){var e=r(0);t.exports=e},function(t,n,r){var e=r(0),o=r(31),u=e.WeakMap;t.exports="function"==typeof u&&/native code/.test(o(u))},function(t,n,r){"use strict";var e=r(53),o=r(60),u=r(35),i=r(63),c=r(36),a=r(2),f=r(33),s=r(4),l=r(10),p=r(16),y=r(34),h=y.IteratorPrototype,v=y.BUGGY_SAFARI_ITERATORS,x=s("iterator"),g=function(){return this};t.exports=function(t,n,r,s,y,d,m){o(r,n,s);var b,A,S,O=function(t){if(t===y&&P)return P;if(!v&&t in T)return T[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},j=n+" Iterator",w=!1,T=t.prototype,M=T[x]||T["@@iterator"]||y&&T[y],P=!v&&M||O(y),L="Array"==n&&T.entries||M;if(L&&(b=u(L.call(new t)),h!==Object.prototype&&b.next&&(l||u(b)===h||(i?i(b,h):"function"!=typeof b[x]&&a(b,x,g)),c(b,j,!0,!0),l&&(p[j]=g))),"values"==y&&M&&"values"!==M.name&&(w=!0,P=function(){return M.call(this)}),l&&!m||T[x]===P||a(T,x,P),p[n]=P,y)if(A={values:O("values"),keys:d?P:O("keys"),entries:O("entries")},m)for(S in A)!v&&!w&&S in T||f(T,S,A[S]);else e({target:n,proto:!0,forced:v||w},A);return A}},function(t,n,r){var e=r(0),o=r(32).f,u=r(2),i=r(33),c=r(11),a=r(55),f=r(59);t.exports=function(t,n){var r,s,l,p,y,h=t.target,v=t.global,x=t.stat;if(r=v?e:x?e[h]||c(h,{}):(e[h]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(y=o(r,s))&&y.value:r[s],!f(v?s:h+(x?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&u(p,"sham",!0),i(r,s,p,t)}}},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!e.call({1:2},1);n.f=u?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(1),o=r(56),u=r(32),i=r(6);t.exports=function(t,n){for(var r=o(n),c=i.f,a=u.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||c(t,s,a(n,s))}}},function(t,n,r){var e=r(29),o=r(57),u=r(58),i=r(8);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(i(t)),r=u.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(27),o=r(14).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(3),o=/#|\.prototype\./,u=function(t,n){var r=c[i(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},i=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=u.data={},a=u.NATIVE="N",f=u.POLYFILL="P";t.exports=u},function(t,n,r){"use strict";var e=r(34).IteratorPrototype,o=r(26),u=r(12),i=r(36),c=r(16),a=function(){return this};t.exports=function(t,n,r){var f=n+" Iterator";return t.prototype=o(e,{next:u(1,r)}),i(t,f,!1,!0),c[f]=a,t}},function(t,n,r){var e=r(18);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(3);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,r){var e=r(8),o=r(64);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,u){return e(r),o(u),n?t.call(r,u):r.__proto__=u,r}}():void 0)},function(t,n,r){var e=r(7);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){var e=r(0),o=r(66),u=r(17),i=r(2),c=r(4),a=c("iterator"),f=c("toStringTag"),s=u.values;for(var l in o){var p=e[l],y=p&&p.prototype;if(y){if(y[a]!==s)try{i(y,a,s)}catch(t){y[a]=s}if(y[f]||i(y,f,l),o[l])for(var h in u)if(y[h]!==u[h])try{i(y,h,u[h])}catch(t){y[h]=u[h]}}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){"use strict";r.r(n);var e=r(37);const o=(t,n=1e7)=>Math.round(t*n)/n,u=t=>o(180*t/Math.PI),i=t=>o(t*Math.PI/180),c=(t,n=2)=>o(Math.pow(o(t),n)),a=t=>o(Math.abs(o(t))),f=t=>o(Math.sin(o(t))),s=t=>o(Math.cos(o(t))),l=t=>o(Math.sqrt(o(t))),p=t=>o(Math.acos(o(t))),y=(t,{x1:n=0,y1:r=0,x2:e=1,y2:u=1,easingFn:i})=>i?y(i(y(t,{x1:n,y1:0,x2:e,y2:1})),{x1:0,y1:r,x2:1,y2:u}):o(e===n?r:(t-n)/(e-n)*(u-r)+r);var h=function(t,n,r,e){let o;return{type:"line",val:o=>({x:y(o,{y1:t,y2:r}),y:y(o,{y1:n,y2:e})}),get length(){return null==o&&(o=l(c(r-t)+c(e-n))),o}}};var v=function(t,n,r,e,u,i,a,f){const s=function({p1:t,p2:n,h1:r,h2:e}){return function(u){return{x:o(c(1-u,3)*t.x+3*c(1-u,2)*u*r.x+3*(1-u)*c(u,2)*e.x+c(u,3)*n.x),y:o(c(1-u,3)*t.y+3*c(1-u,2)*u*r.y+3*(1-u)*c(u,2)*e.y+c(u,3)*n.y)}}}({p1:{x:t,y:n},p2:{x:r,y:e},h1:{x:u,y:i},h2:{x:a,y:f}});let p;return{type:"cubic-bezier",val:t=>s(t),get length(){if(null==p){p=0;const t=10;let n=this.val(0);for(let r=1;r<=t;r++){const e=this.val(r/t);p+=l(c(e.x-n.x)+c(e.y-n.y)),n=e}p=o(p)}return p}}};var x=function(t,n,r,e,u,i){const a=function({p1:t,p2:n,h:r}){return function(e){if(r)return{x:o(c(1-e)*t.x+2*(1-e)*e*r.x+c(e)*n.x),y:o(c(1-e)*t.y+2*(1-e)*e*r.y+c(e)*n.y)}}}({p1:{x:t,y:n},p2:{x:r,y:e},h:{x:u,y:i}});let f;return{type:"quadratic-bezier",val:t=>a(t),get length(){if(null==f){f=0;const t=10;let n=this.val(0);for(let r=1;r<=t;r++){const e=this.val(r/t);f+=l(c(e.x-n.x)+c(e.y-n.y)),n=e}f=o(f)}return f}}};r(17),r(65);function g([t,n],[r,e]){const u=t*e-n*r<0?-1:1,i=l(t*t+n*n),c=l(r*r+e*e),a=o(t*r+n*e);return u*p(a/(i*c))}var d=function(t,n,r,e,p,h,v,x,d){let m;if(!v||!x)return{type:"arc",val:o=>({x:y(o,{y1:t,y2:r}),y:y(o,{y1:n,y2:e})}),get length(){return null==m&&(m=l(c(r-t)+c(e-n))),m}};const b=function(t,n,r,e,p,y,h,v,x){h=a(h),v=a(v),p=p?1:0,y=y?1:0;const d=f(x),m=s(x),b=o(m*(t-r)/2+d*(n-e)/2),A=o(-d*(t-r)/2+m*(n-e)/2),S=c(b),O=c(A);let j=c(h),w=c(v);const T=o(S/j+O/w);T>1&&(h=l(T)*h,v=l(T)*v,j=c(h),w=c(v));const M=p===y?-1:1,P=l((j*w-j*O-w*S)/(j*O+w*S))*M,L=o(P*(h*A)/v),_=o(P*(-v*b/h)),E=o(m*L-d*_+(t+r)/2),C=o(d*L+m*_+(n+e)/2),k=g([1,0],[(b-L)/h,(A-_)/v]);let F=u(g([(b-L)/h,(A-_)/v],[(-b-L)/h,(-A-_)/v]))%360;return 0===y&&F>0&&(F-=360),1===y&&F<0&&(F+=360),{cx:E,cy:C,rx:h,ry:v,theta:k,dTheta:i(F)}}(t,n,r,e,p,h,v,x,i(d));return{type:"arc",val(t){const n=y(t,{y1:b.theta,y2:b.theta+b.dTheta});return((t,n,r,e,u,i)=>{const c=t*s(i),a=n*f(i);return{x:o(c*s(u)-a*f(u)+r),y:o(c*f(u)+a*s(u)+e)}})(b.rx,b.ry,b.cx,b.cy,i(d),n)},get length(){if(null==m){m=0;const t=10;let n=this.val(0);for(let r=1;r<=t;r++){const e=this.val(r/t);m+=l(c(e.x-n.x)+c(e.y-n.y)),n=e}m=o(m)}return m}}};r.d(n,"mirrorPoint",(function(){return A})),r.d(n,"default",(function(){return S}));const{parseSVG:m,makeAbsolute:b}=e,A=(t,n)=>({x:n.x-t.x+n.x,y:n.y-t.y+n.y});function S(t){const n="string"==typeof t?b(m(t)):t,r=[];let e;n.forEach(t=>{switch(t.code){case"L":case"V":case"H":case"Z":r.push(h(t.x0,t.y0,t.x,t.y));break;case"A":r.push(d(t.x0,t.y0,t.x,t.y,t.largeArc,t.sweep,t.rx,t.ry,t.xAxisRotation));break;case"Q":case"T":if(!("x1"in t))if(e){const n=A(e,{x:t.x0,y:t.y0});t.x1=n.x,t.y1=n.y}else t.x1=t.x0,t.y1=t.y0;r.push(x(t.x0,t.y0,t.x,t.y,t.x1,t.y1)),e={x:t.x1,y:t.y1};break;case"C":case"S":if(!("x1"in t))if(e){const n=A(e,{x:t.x0,y:t.y0});t.x1=n.x,t.y1=n.y}else t.x1=t.x0,t.y1=t.y0;r.push(v(t.x0,t.y0,t.x,t.y,t.x1,t.y1,t.x2,t.y2)),e={x:t.x2,y:t.y2}}});let u=0;r.forEach(t=>{u+=t.length});let i=0;return r.forEach(t=>{t.start=o(i),t.size=t.length/u,i+=t.size,t.end=o(i)}),{val(t){const n=r.find(n=>t>=n.start&&t<=n.end);return n.val(y(t,{x1:n.start,x2:n.end}))},get length(){return u}}}}]).default}));
//# sourceMappingURL=svg-path-fn.modern.js.map