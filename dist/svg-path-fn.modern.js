!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.svgPathFn=r():t.svgPathFn=r()}("undefined"!=typeof self?self:this,(function(){return function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="/",n(n.s=67)}([function(t,r,n){(function(r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r&&r)||Function("return this")()}).call(this,n(42))},function(t,r){var n={}.hasOwnProperty;t.exports=function(t,r){return n.call(t,r)}},function(t,r,n){var e=n(5),o=n(6),u=n(12);t.exports=e?function(t,r,n){return o.f(t,r,u(1,n))}:function(t,r,n){return t[r]=n,t}},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r,n){var e=n(0),o=n(19),u=n(1),i=n(24),c=n(25),a=n(43),f=o("wks"),s=e.Symbol,l=a?s:i;t.exports=function(t){return u(f,t)||(c&&u(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,r,n){var e=n(3);t.exports=!e((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,r,n){var e=n(5),o=n(21),u=n(8),i=n(23),c=Object.defineProperty;r.f=e?c:function(t,r,n){if(u(t),r=i(r,!0),u(n),o)try{return c(t,r,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r,n){var e=n(7);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,r,n){var e=n(39),o=n(18);t.exports=function(t){return e(o(t))}},function(t,r){t.exports=!1},function(t,r,n){var e=n(0),o=n(2);t.exports=function(t,r){try{o(e,t,r)}catch(n){e[t]=r}return r}},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r){t.exports={}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r,n){var e=n(19),o=n(24),u=e("keys");t.exports=function(t){return u[t]||(u[t]=o(t))}},function(t,r){t.exports={}},function(t,r,n){"use strict";var e=n(9),o=n(41),u=n(16),i=n(30),c=n(52),a=i.set,f=i.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,r){a(this,{type:"Array Iterator",target:e(t),index:0,kind:r})}),(function(){var t=f(this),r=t.target,n=t.kind,e=t.index++;return!r||e>=r.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:e,done:!1}:"values"==n?{value:r[e],done:!1}:{value:[e,r[e]],done:!1}}),"values"),u.Arguments=u.Array,o("keys"),o("values"),o("entries")},function(t,r){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,r,n){var e=n(10),o=n(20);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.0",mode:e?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,r,n){var e=n(0),o=n(11),u=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=u},function(t,r,n){var e=n(5),o=n(3),u=n(22);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},function(t,r,n){var e=n(0),o=n(7),u=e.document,i=o(u)&&o(u.createElement);t.exports=function(t){return i?u.createElement(t):{}}},function(t,r,n){var e=n(7);t.exports=function(t,r){if(!e(t))return t;var n,o;if(r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!e(o=n.call(t)))return o;if(!r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,r){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},function(t,r,n){var e=n(3);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,r,n){var e,o=n(8),u=n(44),i=n(14),c=n(13),a=n(49),f=n(22),s=n(15),l=s("IE_PROTO"),p=function(){},y=function(t){return"<script>"+t+"<\/script>"},h=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,r;h=e?function(t){t.write(y("")),t.close();var r=t.parentWindow.Object;return t=null,r}(e):((r=f("iframe")).style.display="none",a.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(y("document.F=Object")),t.close(),t.F);for(var n=i.length;n--;)delete h.prototype[i[n]];return h()};c[l]=!0,t.exports=Object.create||function(t,r){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=h(),void 0===r?n:u(n,r)}},function(t,r,n){var e=n(1),o=n(9),u=n(46).indexOf,i=n(13);t.exports=function(t,r){var n,c=o(t),a=0,f=[];for(n in c)!e(i,n)&&e(c,n)&&f.push(n);for(;r.length>a;)e(c,n=r[a++])&&(~u(f,n)||f.push(n));return f}},function(t,r){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},function(t,r,n){var e=n(50),o=n(0),u=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?u(e[t])||u(o[t]):e[t]&&e[t][r]||o[t]&&o[t][r]}},function(t,r,n){var e,o,u,i=n(51),c=n(0),a=n(7),f=n(2),s=n(1),l=n(15),p=n(13),y=c.WeakMap;if(i){var h=new y,x=h.get,v=h.has,g=h.set;e=function(t,r){return g.call(h,t,r),r},o=function(t){return x.call(h,t)||{}},u=function(t){return v.call(h,t)}}else{var d=l("state");p[d]=!0,e=function(t,r){return f(t,d,r),r},o=function(t){return s(t,d)?t[d]:{}},u=function(t){return s(t,d)}}t.exports={set:e,get:o,has:u,enforce:function(t){return u(t)?o(t):e(t,{})},getterFor:function(t){return function(r){var n;if(!a(r)||(n=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,r,n){var e=n(20),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,r,n){var e=n(5),o=n(54),u=n(12),i=n(9),c=n(23),a=n(1),f=n(21),s=Object.getOwnPropertyDescriptor;r.f=e?s:function(t,r){if(t=i(t),r=c(r,!0),f)try{return s(t,r)}catch(t){}if(a(t,r))return u(!o.f.call(t,r),t[r])}},function(t,r,n){var e=n(0),o=n(2),u=n(1),i=n(11),c=n(31),a=n(30),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,r,n,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof r||u(n,"name")||o(n,"name",r),s(n).source=l.join("string"==typeof r?r:"")),t!==e?(a?!p&&t[r]&&(f=!0):delete t[r],f?t[r]=n:o(t,r,n)):f?t[r]=n:i(r,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},function(t,r,n){"use strict";var e,o,u,i=n(35),c=n(2),a=n(1),f=n(4),s=n(10),l=f("iterator"),p=!1;[].keys&&("next"in(u=[].keys())?(o=i(i(u)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||a(e,l)||c(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,r,n){var e=n(1),o=n(61),u=n(15),i=n(62),c=u("IE_PROTO"),a=Object.prototype;t.exports=i?Object.getPrototypeOf:function(t){return t=o(t),e(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,r,n){var e=n(6).f,o=n(1),u=n(4)("toStringTag");t.exports=function(t,r,n){t&&!o(t=n?t:t.prototype,u)&&e(t,u,{configurable:!0,value:r})}},function(t,r,n){var e=n(38).parse;e.parseSVG=e,e.makeAbsolute=function(t){var r,n={x:0,y:0},e={x:"x0",y:"y0",x1:"x0",y1:"y0",x2:"x0",y2:"y0"};return t.forEach((function(t){for(var o in"moveto"===t.command&&(r=t),t.x0=n.x,t.y0=n.y,e)o in t&&(t[o]+=t.relative?t[e[o]]:0);"x"in t||(t.x=n.x),"y"in t||(t.y=n.y),t.relative=!1,t.code=t.code.toUpperCase(),"closepath"==t.command&&(t.x=r.x,t.y=r.y),n=t})),t},t.exports=e},function(t,r,n){"use strict";function e(t,r,n,o){this.message=t,this.expected=r,this.found=n,this.location=o,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}!function(t,r){function n(){this.constructor=t}n.prototype=r.prototype,t.prototype=new n}(e,Error),e.buildMessage=function(t,r){var n={literal:function(t){return'"'+o(t.text)+'"'},class:function(t){var r,n="";for(r=0;r<t.parts.length;r++)n+=t.parts[r]instanceof Array?u(t.parts[r][0])+"-"+u(t.parts[r][1]):u(t.parts[r]);return"["+(t.inverted?"^":"")+n+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function e(t){return t.charCodeAt(0).toString(16).toUpperCase()}function o(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+e(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+e(t)}))}function u(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+e(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+e(t)}))}return"Expected "+function(t){var r,e,o,u=new Array(t.length);for(r=0;r<t.length;r++)u[r]=(o=t[r],n[o.type](o));if(u.sort(),u.length>0){for(r=1,e=1;r<u.length;r++)u[r-1]!==u[r]&&(u[e]=u[r],e++);u.length=e}switch(u.length){case 1:return u[0];case 2:return u[0]+" or "+u[1];default:return u.slice(0,-1).join(", ")+", or "+u[u.length-1]}}(t)+" but "+function(t){return t?'"'+o(t)+'"':"end of input"}(r)+" found."},t.exports={SyntaxError:e,parse:function(t,r){r=void 0!==r?r:{};var n,o={},u={svg_path:vt},i=vt,c=function(t){if(!t)return[];for(var r=[],n=0;n<t.length;n++)r=r.concat.apply(r,t[n]);var e=r[0];return e&&"m"==e.code&&(delete e.relative,e.code="M"),r},a=function(t,r){return function(t,r){if(!r)return[t];for(var n=[t],e=0,o=r.length;e<o;e++)n[e+1]=r[e][1];return n}(t,r)},f=/^[Mm]/,s=lt(["M","m"],!1,!1),l=function(t,r,n){var e=Vt(t,[r]);return n&&(e=e.concat(Vt("M"==t?"L":"l",n[1]))),e},p=/^[Zz]/,y=lt(["Z","z"],!1,!1),h=function(){return Vt("Z")},x=/^[Ll]/,v=lt(["L","l"],!1,!1),g=function(t,r){return Vt(t,r)},d=/^[Hh]/,m=lt(["H","h"],!1,!1),b=function(t,r){return Vt(t,r.map((function(t){return{x:t}})))},A=/^[Vv]/,S=lt(["V","v"],!1,!1),O=function(t,r){return Vt(t,r.map((function(t){return{y:t}})))},j=/^[Cc]/,w=lt(["C","c"],!1,!1),M=function(t,r,n){return{x1:t.x,y1:t.y,x2:r.x,y2:r.y,x:n.x,y:n.y}},T=/^[Ss]/,P=lt(["S","s"],!1,!1),L=function(t,r){return{x2:t.x,y2:t.y,x:r.x,y:r.y}},_=/^[Qq]/,E=lt(["Q","q"],!1,!1),k=function(t,r){return{x1:t.x,y1:t.y,x:r.x,y:r.y}},C=/^[Tt]/,F=lt(["T","t"],!1,!1),I=/^[Aa]/,R=lt(["A","a"],!1,!1),G=function(t,r,n,e,o,u){return{rx:t,ry:r,xAxisRotation:n,largeArc:e,sweep:o,x:u.x,y:u.y}},V=function(t,r){return{x:t,y:r}},z=function(t){return 1*t},D=function(t){return 1*t.join("")},q=/^[01]/,N=lt(["0","1"],!1,!1),B=function(t){return"1"==t},H=function(){return""},U=",",W=st(",",!1),Z=function(t){return t.join("")},Q=".",Y=st(".",!1),K=/^[eE]/,X=lt(["e","E"],!1,!1),J=/^[+\-]/,$=lt(["+","-"],!1,!1),tt=/^[0-9]/,rt=lt([["0","9"]],!1,!1),nt=function(t){return t.join("")},et=/^[ \t\n\r]/,ot=lt([" ","\t","\n","\r"],!1,!1),ut=0,it=[{line:1,column:1}],ct=0,at=[],ft=0;if("startRule"in r){if(!(r.startRule in u))throw new Error("Can't start parsing from rule \""+r.startRule+'".');i=u[r.startRule]}function st(t,r){return{type:"literal",text:t,ignoreCase:r}}function lt(t,r,n){return{type:"class",parts:t,inverted:r,ignoreCase:n}}function pt(r){var n,e=it[r];if(e)return e;for(n=r-1;!it[n];)n--;for(e={line:(e=it[n]).line,column:e.column};n<r;)10===t.charCodeAt(n)?(e.line++,e.column=1):e.column++,n++;return it[r]=e,e}function yt(t,r){var n=pt(t),e=pt(r);return{start:{offset:t,line:n.line,column:n.column},end:{offset:r,line:e.line,column:e.column}}}function ht(t){ut<ct||(ut>ct&&(ct=ut,at=[]),at.push(t))}function xt(t,r,n){return new e(e.buildMessage(t,r),t,r,n)}function vt(){var t,r,n,e,u;for(t=ut,r=[],n=It();n!==o;)r.push(n),n=It();if(r!==o)if((n=function(){var t,r,n,e,u,i;if(t=ut,(r=gt())!==o){for(n=[],e=ut,u=[],i=It();i!==o;)u.push(i),i=It();for(u!==o&&(i=gt())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;){for(n.push(e),e=ut,u=[],i=It();i!==o;)u.push(i),i=It();u!==o&&(i=gt())!==o?e=u=[u,i]:(ut=e,e=o)}n!==o?(t,r=a(r,n),t=r):(ut=t,t=o)}else ut=t,t=o;return t}())===o&&(n=null),n!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o?(t,t=r=c(n)):(ut=t,t=o)}else ut=t,t=o;else ut=t,t=o;return t}function gt(){var r,n,e,u,i,c;if(r=ut,(n=function(){var r,n,e,u,i,c,a;r=ut,f.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=o,0===ft&&ht(s));if(n!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=wt())!==o?(i=ut,(c=Lt())===o&&(c=null),c!==o&&(a=mt())!==o?i=c=[c,a]:(ut=i,i=o),i===o&&(i=null),i!==o?(r,n=l(n,u,i),r=n):(ut=r,r=o)):(ut=r,r=o)}else ut=r,r=o;return r}())!==o){for(e=[],u=ut,i=[],c=It();c!==o;)i.push(c),c=It();for(i!==o&&(c=dt())!==o?u=i=[i,c]:(ut=u,u=o);u!==o;){for(e.push(u),u=ut,i=[],c=It();c!==o;)i.push(c),c=It();i!==o&&(c=dt())!==o?u=i=[i,c]:(ut=u,u=o)}e!==o?(r,r=n=a(n,e)):(ut=r,r=o)}else ut=r,r=o;return r}function dt(){var r;return(r=function(){var r,n;r=ut,p.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=o,0===ft&&ht(y));n!==o&&(r,n=h());return r=n}())===o&&(r=function(){var r,n,e,u;r=ut,x.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=o,0===ft&&ht(v));if(n!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=mt())!==o?(r,n=g(n,u),r=n):(ut=r,r=o)}else ut=r,r=o;return r}())===o&&(r=function(){var r,n,e,u;r=ut,d.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=o,0===ft&&ht(m));if(n!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=bt())!==o?(r,n=b(n,u),r=n):(ut=r,r=o)}else ut=r,r=o;return r}())===o&&(r=function(){var r,n,e,u;r=ut,A.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=o,0===ft&&ht(S));if(n!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=bt())!==o?(r,n=O(n,u),r=n):(ut=r,r=o)}else ut=r,r=o;return r}())===o&&(r=function(){var r,n,e,u;r=ut,j.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=o,0===ft&&ht(w));if(n!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=function(){var t,r,n,e,u,i;if(t=ut,(r=At())!==o){for(n=[],e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=At())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;)n.push(e),e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=At())!==o?e=u=[u,i]:(ut=e,e=o);n!==o?(t,r=a(r,n),t=r):(ut=t,t=o)}else ut=t,t=o;return t}())!==o?(r,n=g(n,u),r=n):(ut=r,r=o)}else ut=r,r=o;return r}())===o&&(r=function(){var r,n,e,u;r=ut,T.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=o,0===ft&&ht(P));if(n!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=function(){var t,r,n,e,u,i;if(t=ut,(r=St())!==o){for(n=[],e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=St())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;)n.push(e),e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=St())!==o?e=u=[u,i]:(ut=e,e=o);n!==o?(t,r=a(r,n),t=r):(ut=t,t=o)}else ut=t,t=o;return t}())!==o?(r,n=g(n,u),r=n):(ut=r,r=o)}else ut=r,r=o;return r}())===o&&(r=function(){var r,n,e,u;r=ut,_.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=o,0===ft&&ht(E));if(n!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=function(){var t,r,n,e,u,i;if(t=ut,(r=Ot())!==o){for(n=[],e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=Ot())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;)n.push(e),e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=Ot())!==o?e=u=[u,i]:(ut=e,e=o);n!==o?(t,r=a(r,n),t=r):(ut=t,t=o)}else ut=t,t=o;return t}())!==o?(r,n=g(n,u),r=n):(ut=r,r=o)}else ut=r,r=o;return r}())===o&&(r=function(){var r,n,e,u;r=ut,C.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=o,0===ft&&ht(F));if(n!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=function(){var t,r,n,e,u,i;if(t=ut,(r=wt())!==o){for(n=[],e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=wt())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;)n.push(e),e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=wt())!==o?e=u=[u,i]:(ut=e,e=o);n!==o?(t,r=a(r,n),t=r):(ut=t,t=o)}else ut=t,t=o;return t}())!==o?(r,n=g(n,u),r=n):(ut=r,r=o)}else ut=r,r=o;return r}())===o&&(r=function(){var r,n,e,u;r=ut,I.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=o,0===ft&&ht(R));if(n!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o&&(u=function(){var t,r,n,e,u,i;if(t=ut,(r=jt())!==o){for(n=[],e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=jt())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;)n.push(e),e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=jt())!==o?e=u=[u,i]:(ut=e,e=o);n!==o?(t,r=a(r,n),t=r):(ut=t,t=o)}else ut=t,t=o;return t}())!==o?(r,n=g(n,u),r=n):(ut=r,r=o)}else ut=r,r=o;return r}()),r}function mt(){var t,r,n,e,u,i;if(t=ut,(r=wt())!==o){for(n=[],e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=wt())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;)n.push(e),e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=wt())!==o?e=u=[u,i]:(ut=e,e=o);n!==o?(t,t=r=a(r,n)):(ut=t,t=o)}else ut=t,t=o;return t}function bt(){var t,r,n,e,u,i;if(t=ut,(r=Tt())!==o){for(n=[],e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=Tt())!==o?e=u=[u,i]:(ut=e,e=o);e!==o;)n.push(e),e=ut,(u=Lt())===o&&(u=null),u!==o&&(i=Tt())!==o?e=u=[u,i]:(ut=e,e=o);n!==o?(t,t=r=a(r,n)):(ut=t,t=o)}else ut=t,t=o;return t}function At(){var t,r,n,e,u,i;return t=ut,(r=wt())!==o?((n=Lt())===o&&(n=null),n!==o&&(e=wt())!==o?((u=Lt())===o&&(u=null),u!==o&&(i=wt())!==o?(t,t=r=M(r,e,i)):(ut=t,t=o)):(ut=t,t=o)):(ut=t,t=o),t}function St(){var t,r,n,e;return t=ut,(r=wt())!==o?((n=Lt())===o&&(n=null),n!==o&&(e=wt())!==o?(t,t=r=L(r,e)):(ut=t,t=o)):(ut=t,t=o),t}function Ot(){var t,r,n,e;return t=ut,(r=wt())!==o?((n=Lt())===o&&(n=null),n!==o&&(e=wt())!==o?(t,t=r=k(r,e)):(ut=t,t=o)):(ut=t,t=o),t}function jt(){var t,r,n,e,u,i,c,a,f,s,l;return t=ut,(r=Mt())!==o?((n=Lt())===o&&(n=null),n!==o&&(e=Mt())!==o?((u=Lt())===o&&(u=null),u!==o&&(i=Tt())!==o&&Lt()!==o&&(c=Pt())!==o?((a=Lt())===o&&(a=null),a!==o&&(f=Pt())!==o?((s=Lt())===o&&(s=null),s!==o&&(l=wt())!==o?(t,t=r=G(r,e,i,c,f,l)):(ut=t,t=o)):(ut=t,t=o)):(ut=t,t=o)):(ut=t,t=o)):(ut=t,t=o),t}function wt(){var t,r,n,e;return t=ut,(r=Tt())!==o?((n=Lt())===o&&(n=null),n!==o&&(e=Tt())!==o?(t,t=r=V(r,e)):(ut=t,t=o)):(ut=t,t=o),t}function Mt(){var t,r;return t=ut,(r=Et())===o&&(r=Ft()),r!==o&&(t,r=z(r)),t=r}function Tt(){var t,r,n,e;return t=ut,r=ut,(n=Ct())===o&&(n=null),n!==o&&(e=Et())!==o?r=n=[n,e]:(ut=r,r=o),r===o&&(r=ut,(n=Ct())===o&&(n=null),n!==o&&(e=Ft())!==o?r=n=[n,e]:(ut=r,r=o)),r!==o&&(t,r=D(r)),t=r}function Pt(){var r,n;return r=ut,q.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=o,0===ft&&ht(N)),n!==o&&(r,n=B(n)),r=n}function Lt(){var t,r,n,e,u;if(t=ut,r=[],(n=It())!==o)for(;n!==o;)r.push(n),n=It();else r=o;if(r!==o)if((n=_t())===o&&(n=null),n!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o?t=r=[r,n,e]:(ut=t,t=o)}else ut=t,t=o;else ut=t,t=o;if(t===o){if(t=ut,r=ut,(n=_t())!==o){for(e=[],u=It();u!==o;)e.push(u),u=It();e!==o?r=n=[n,e]:(ut=r,r=o)}else ut=r,r=o;r!==o&&(t,r=H()),t=r}return t}function _t(){var r;return 44===t.charCodeAt(ut)?(r=U,ut++):(r=o,0===ft&&ht(W)),r}function Et(){var r,n,e,u;return r=ut,n=ut,(e=function(){var r,n,e,u,i;r=ut,n=ut,(e=Ft())===o&&(e=null);e!==o?(46===t.charCodeAt(ut)?(u=Q,ut++):(u=o,0===ft&&ht(Y)),u!==o&&(i=Ft())!==o?n=e=[e,u,i]:(ut=n,n=o)):(ut=n,n=o);n===o&&(n=ut,(e=Ft())!==o?(46===t.charCodeAt(ut)?(u=Q,ut++):(u=o,0===ft&&ht(Y)),u!==o?n=e=[e,u]:(ut=n,n=o)):(ut=n,n=o));n!==o&&(r,n=Z(n));return r=n}())!==o?((u=kt())===o&&(u=null),u!==o?n=e=[e,u]:(ut=n,n=o)):(ut=n,n=o),n===o&&(n=ut,(e=Ft())!==o&&(u=kt())!==o?n=e=[e,u]:(ut=n,n=o)),n!==o&&(r,n=Z(n)),r=n}function kt(){var r,n,e,u,i;return r=ut,n=ut,K.test(t.charAt(ut))?(e=t.charAt(ut),ut++):(e=o,0===ft&&ht(X)),e!==o?((u=Ct())===o&&(u=null),u!==o&&(i=Ft())!==o?n=e=[e,u,i]:(ut=n,n=o)):(ut=n,n=o),n!==o&&(r,n=Z(n)),r=n}function Ct(){var r;return J.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=o,0===ft&&ht($)),r}function Ft(){var r,n,e;if(r=ut,n=[],tt.test(t.charAt(ut))?(e=t.charAt(ut),ut++):(e=o,0===ft&&ht(rt)),e!==o)for(;e!==o;)n.push(e),tt.test(t.charAt(ut))?(e=t.charAt(ut),ut++):(e=o,0===ft&&ht(rt));else n=o;return n!==o&&(r,n=nt(n)),r=n}function It(){var r,n;return r=ut,et.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=o,0===ft&&ht(ot)),n!==o&&(r,n=H()),r=n}var Rt={m:"moveto",l:"lineto",h:"horizontal lineto",v:"vertical lineto",c:"curveto",s:"smooth curveto",q:"quadratic curveto",t:"smooth quadratic curveto",a:"elliptical arc",z:"closepath"};for(var Gt in Rt)Rt[Gt.toUpperCase()]=Rt[Gt];function Vt(t,r){r||(r=[{}]);for(var n=r.length;n--;){var e={code:t,command:Rt[t]};for(var o in t==t.toLowerCase()&&(e.relative=!0),r[n])e[o]=r[n][o];r[n]=e}return r}if((n=i())!==o&&ut===t.length)return n;throw n!==o&&ut<t.length&&ht({type:"end"}),xt(at,ct<t.length?t.charAt(ct):null,ct<t.length?yt(ct,ct+1):yt(ct,ct))}}},function(t,r,n){var e=n(3),o=n(40),u="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},function(t,r){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,r,n){var e=n(4),o=n(26),u=n(6),i=e("unscopables"),c=Array.prototype;null==c[i]&&u.f(c,i,{configurable:!0,value:o(null)}),t.exports=function(t){c[i][t]=!0}},function(t,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,r,n){var e=n(25);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol()},function(t,r,n){var e=n(5),o=n(6),u=n(8),i=n(45);t.exports=e?Object.defineProperties:function(t,r){u(t);for(var n,e=i(r),c=e.length,a=0;c>a;)o.f(t,n=e[a++],r[n]);return t}},function(t,r,n){var e=n(27),o=n(14);t.exports=Object.keys||function(t){return e(t,o)}},function(t,r,n){var e=n(9),o=n(47),u=n(48),i=function(t){return function(r,n,i){var c,a=e(r),f=o(a.length),s=u(i,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},function(t,r,n){var e=n(28),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,r,n){var e=n(28),o=Math.max,u=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):u(n,r)}},function(t,r,n){var e=n(29);t.exports=e("document","documentElement")},function(t,r,n){var e=n(0);t.exports=e},function(t,r,n){var e=n(0),o=n(31),u=e.WeakMap;t.exports="function"==typeof u&&/native code/.test(o(u))},function(t,r,n){"use strict";var e=n(53),o=n(60),u=n(35),i=n(63),c=n(36),a=n(2),f=n(33),s=n(4),l=n(10),p=n(16),y=n(34),h=y.IteratorPrototype,x=y.BUGGY_SAFARI_ITERATORS,v=s("iterator"),g=function(){return this};t.exports=function(t,r,n,s,y,d,m){o(n,r,s);var b,A,S,O=function(t){if(t===y&&P)return P;if(!x&&t in M)return M[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},j=r+" Iterator",w=!1,M=t.prototype,T=M[v]||M["@@iterator"]||y&&M[y],P=!x&&T||O(y),L="Array"==r&&M.entries||T;if(L&&(b=u(L.call(new t)),h!==Object.prototype&&b.next&&(l||u(b)===h||(i?i(b,h):"function"!=typeof b[v]&&a(b,v,g)),c(b,j,!0,!0),l&&(p[j]=g))),"values"==y&&T&&"values"!==T.name&&(w=!0,P=function(){return T.call(this)}),l&&!m||M[v]===P||a(M,v,P),p[r]=P,y)if(A={values:O("values"),keys:d?P:O("keys"),entries:O("entries")},m)for(S in A)!x&&!w&&S in M||f(M,S,A[S]);else e({target:r,proto:!0,forced:x||w},A);return A}},function(t,r,n){var e=n(0),o=n(32).f,u=n(2),i=n(33),c=n(11),a=n(55),f=n(59);t.exports=function(t,r){var n,s,l,p,y,h=t.target,x=t.global,v=t.stat;if(n=x?e:v?e[h]||c(h,{}):(e[h]||{}).prototype)for(s in r){if(p=r[s],l=t.noTargetGet?(y=o(n,s))&&y.value:n[s],!f(x?s:h+(v?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&u(p,"sham",!0),i(n,s,p,t)}}},function(t,r,n){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!e.call({1:2},1);r.f=u?function(t){var r=o(this,t);return!!r&&r.enumerable}:e},function(t,r,n){var e=n(1),o=n(56),u=n(32),i=n(6);t.exports=function(t,r){for(var n=o(r),c=i.f,a=u.f,f=0;f<n.length;f++){var s=n[f];e(t,s)||c(t,s,a(r,s))}}},function(t,r,n){var e=n(29),o=n(57),u=n(58),i=n(8);t.exports=e("Reflect","ownKeys")||function(t){var r=o.f(i(t)),n=u.f;return n?r.concat(n(t)):r}},function(t,r,n){var e=n(27),o=n(14).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,n){var e=n(3),o=/#|\.prototype\./,u=function(t,r){var n=c[i(t)];return n==f||n!=a&&("function"==typeof r?e(r):!!r)},i=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=u.data={},a=u.NATIVE="N",f=u.POLYFILL="P";t.exports=u},function(t,r,n){"use strict";var e=n(34).IteratorPrototype,o=n(26),u=n(12),i=n(36),c=n(16),a=function(){return this};t.exports=function(t,r,n){var f=r+" Iterator";return t.prototype=o(e,{next:u(1,n)}),i(t,f,!1,!0),c[f]=a,t}},function(t,r,n){var e=n(18);t.exports=function(t){return Object(e(t))}},function(t,r,n){var e=n(3);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,r,n){var e=n(8),o=n(64);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),r=n instanceof Array}catch(t){}return function(n,u){return e(n),o(u),r?t.call(n,u):n.__proto__=u,n}}():void 0)},function(t,r,n){var e=n(7);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,r,n){var e=n(0),o=n(66),u=n(17),i=n(2),c=n(4),a=c("iterator"),f=c("toStringTag"),s=u.values;for(var l in o){var p=e[l],y=p&&p.prototype;if(y){if(y[a]!==s)try{i(y,a,s)}catch(t){y[a]=s}if(y[f]||i(y,f,l),o[l])for(var h in u)if(y[h]!==u[h])try{i(y,h,u[h])}catch(t){y[h]=u[h]}}}},function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,r,n){"use strict";n.r(r);var e=n(37);const o=(t,r=1e7)=>Math.round(t*r)/r,u=t=>o(180*t/Math.PI),i=t=>o(t*Math.PI/180),c=(t,r=2)=>o(Math.pow(o(t),r)),a=t=>o(Math.abs(o(t))),f=t=>o(Math.sin(o(t))),s=t=>o(Math.cos(o(t))),l=t=>o(Math.sqrt(o(t))),p=t=>o(Math.acos(o(t)));var y=function(t,r,n){let e;const u={type:t,slices:[],params:r,val:t=>n(t),debugSlices:[],intersect(t){const r=(t,r)=>!(t.right<r.left||t.left>r.right||t.bottom<r.top||t.top>r.bottom),n=(t,n,{sectionA:e,sectionB:o},u=2)=>{const i=[],c=[];for(let a=0;a<t.length;a++)for(let f=0;f<n.length;f++){const s=t[a],l=n[f];if(!c.includes(s)&&!c.includes(l)&&r(s,l)){c.push(s,l);const t=(s.from+s.to)/2,r=(l.from+l.to)/2;i.push({x:(Math.min(s.left,l.left)+Math.max(s.right,l.right))/2,y:(Math.min(s.top,l.top)+Math.max(s.bottom,l.bottom))/2,t:{a:t,b:r},abs:{a:h(t,{x1:e.from,x2:e.to}),b:h(r,{x1:o.from,x2:o.to})},sliceA:s,sliceB:l,sectionA:e,sectionB:o,zoom:u})}}return i},e="path"===this.type?this.params.sections:[this],o="path"===t.type?t.params.sections:[t],u=[];for(let t=0;t<e.length;t++)for(let r=0;r<o.length;r++){const i=e[t],c=o[r];u.push.apply(u,n(i.slices,c.slices,{sectionA:i,sectionB:c}))}return u}};if(null==e){if(e=0,"path"===u.type){const{sections:t}=this.params;let r=0;t.forEach(t=>{r+=t.length});let n=0;t.forEach(t=>{t.from=o(n),t.size=t.length/r,n+=t.size,t.to=o(n)})}const t=20;let r=u.val(0),n=0;for(let o=1;o<=t;o++){const i=o/t,a=u.val(i);u.rect||(u.rect={top:a.x,left:a.y,bottom:a.x,right:a.y,from:0,to:1}),a.y<u.rect.top&&(u.rect.top=a.y),a.x<u.rect.left&&(u.rect.left=a.x),a.y>u.rect.bottom&&(u.rect.bottom=a.y),a.x>u.rect.right&&(u.rect.right=a.x),u.slices.push({top:a.y<r.y?a.y:r.y,left:a.x<r.x?a.x:r.x,bottom:a.y>r.y?a.y:r.y,right:a.x>r.x?a.x:r.x,from:n,to:i}),e+=l(c(a.x-r.x)+c(a.y-r.y)),r=a,n=i}e=o(e)}return"path"===t&&r.sections.forEach(t=>{t.path=u}),u.length=e,u};const h=(t,{x1:r=0,y1:n=0,x2:e=1,y2:u=1})=>o(e===r?n:(t-r)/(e-r)*(u-n)+n);var x=function(t){const{x1:r,y1:n,x2:e,y2:o}=t;return y("line",t,t=>({x:h(t,{y1:r,y2:e}),y:h(t,{y1:n,y2:o})}))};var v=function(t){const{x1:r,y1:n,x2:e,y2:u,h1x:i,h1y:a,h2x:f,h2y:s}=t,l=function({p1:t,p2:r,h1:n,h2:e}){return function(u){return{x:o(c(1-u,3)*t.x+3*c(1-u,2)*u*n.x+3*(1-u)*c(u,2)*e.x+c(u,3)*r.x),y:o(c(1-u,3)*t.y+3*c(1-u,2)*u*n.y+3*(1-u)*c(u,2)*e.y+c(u,3)*r.y)}}}({p1:{x:r,y:n},p2:{x:e,y:u},h1:{x:i,y:a},h2:{x:f,y:s}});return y("cubic-bezier",t,l)};var g=function(t){const{x1:r,y1:n,x2:e,y2:u,hx:i,hy:a}=t,f=function({p1:t,p2:r,h:n}){return function(e){if(n)return{x:o(c(1-e)*t.x+2*(1-e)*e*n.x+c(e)*r.x),y:o(c(1-e)*t.y+2*(1-e)*e*n.y+c(e)*r.y)}}}({p1:{x:r,y:n},p2:{x:e,y:u},h:{x:i,y:a}});return y("quadratic-bezier",t,f)};n(17),n(65);function d([t,r],[n,e]){const u=t*e-r*n<0?-1:1,i=l(t*t+r*r),c=l(n*n+e*e),a=o(t*n+r*e);return u*p(a/(i*c))}var m=function(t){const{x1:r,y1:n,x2:e,y2:p,fa:x,fs:v,rx:g,ry:m,phiDeg:b}=t;const A=function(t,r,n,e,p,y,h,x,v){h=a(h),x=a(x),p=p?1:0,y=y?1:0;const g=f(v),m=s(v),b=o(m*(t-n)/2+g*(r-e)/2),A=o(-g*(t-n)/2+m*(r-e)/2),S=c(b),O=c(A);let j=c(h),w=c(x);const M=o(S/j+O/w);M>1&&(h=l(M)*h,x=l(M)*x,j=c(h),w=c(x));const T=p===y?-1:1,P=l((j*w-j*O-w*S)/(j*O+w*S))*T,L=o(P*(h*A)/x),_=o(P*(-x*b/h)),E=o(m*L-g*_+(t+n)/2),k=o(g*L+m*_+(r+e)/2),C=d([1,0],[(b-L)/h,(A-_)/x]);let F=u(d([(b-L)/h,(A-_)/x],[(-b-L)/h,(-A-_)/x]))%360;return 0===y&&F>0&&(F-=360),1===y&&F<0&&(F+=360),{cx:E,cy:k,rx:h,ry:x,theta:C,dTheta:i(F)}}(r,n,e,p,x,v,g,m,i(b));return y("arc",t,t=>{const r=h(t,{y1:A.theta,y2:A.theta+A.dTheta});return((t,r,n,e,u,i)=>{const c=t*s(i),a=r*f(i);return{x:o(c*s(u)-a*f(u)+n),y:o(c*f(u)+a*s(u)+e)}})(A.rx,A.ry,A.cx,A.cy,i(b),r)})};n.d(r,"mirrorPoint",(function(){return S})),n.d(r,"default",(function(){return O}));const{parseSVG:b,makeAbsolute:A}=e,S=(t,r)=>({x:r.x-t.x+r.x,y:r.y-t.y+r.y});function O(t){const r="string"==typeof t?A(b(t)):t,n=[];let e;return r.forEach(t=>{switch(t.code){case"L":case"V":case"H":case"Z":n.push(x({x1:t.x0,y1:t.y0,x2:t.x,y2:t.y}));break;case"A":n.push(m({x1:t.x0,y1:t.y0,x2:t.x,y2:t.y,fa:t.largeArc,fs:t.sweep,rx:t.rx,ry:t.ry,phiDeg:t.xAxisRotation}));break;case"Q":case"T":if(!("x1"in t))if(e){const r=S(e,{x:t.x0,y:t.y0});t.x1=r.x,t.y1=r.y}else t.x1=t.x0,t.y1=t.y0;n.push(g({x1:t.x0,y1:t.y0,x2:t.x,y2:t.y,hx:t.x1,hy:t.y1})),e={x:t.x1,y:t.y1};break;case"C":case"S":{if(!("x1"in t))if(e){const r=S(e,{x:t.x0,y:t.y0});t.x1=r.x,t.y1=r.y}else t.x1=t.x0,t.y1=t.y0;const r=v({x1:t.x0,y1:t.y0,x2:t.x,y2:t.y,h1x:t.x1,h1y:t.y1,h2x:t.x2,h2y:t.y2});n.push(r),e={x:t.x2,y:t.y2};break}}}),y("path",{pathString:t,sections:n},t=>{const r=n.find(r=>t>=r.from&&t<=r.to);return r.val(h(t,{x1:r.from,x2:r.to}))})}}]).default}));
//# sourceMappingURL=svg-path-fn.modern.js.map