(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";function _typeof(obj){return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol?"symbol":typeof obj;}!(function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function" == typeof require && require;if(!h && i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '" + g + "'");throw (j.code = "MODULE_NOT_FOUND",j);}var k=c[g] = {exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a);},k,k.exports,a,b,c,d);}return c[g].exports;}for(var f="function" == typeof require && require,g=0;g < d.length;g++) {e(d[g]);}return e;})({1:[function(a,b,c){function d(){k = !1,h.length?j = h.concat(j):l = -1,j.length && e();}function e(){if(!k){var a=setTimeout(d);k = !0;for(var b=j.length;b;) {for(h = j,j = [];++l < b;) {h && h[l].run();}l = -1,b = j.length;}h = null,k = !1,clearTimeout(a);}}function f(a,b){this.fun = a,this.array = b;}function g(){}var h,i=b.exports = {},j=[],k=!1,l=-1;i.nextTick = function(a){var b=new Array(arguments.length - 1);if(arguments.length > 1)for(var c=1;c < arguments.length;c++) {b[c - 1] = arguments[c];}j.push(new f(a,b)),1 !== j.length || k || setTimeout(e,0);},f.prototype.run = function(){this.fun.apply(null,this.array);},i.title = "browser",i.browser = !0,i.env = {},i.argv = [],i.version = "",i.versions = {},i.on = g,i.addListener = g,i.once = g,i.off = g,i.removeListener = g,i.removeAllListeners = g,i.emit = g,i.binding = function(a){throw new Error("process.binding is not supported");},i.cwd = function(){return "/";},i.chdir = function(a){throw new Error("process.chdir is not supported");},i.umask = function(){return 0;};},{}],2:[function(a,b,c){(function(a){(function(){function d(a,b){if(a !== b){var c=null === a,d=a === z,e=a === a,f=null === b,g=b === z,h=b === b;if(a > b && !f || !e || c && !g && h || d && h)return 1;if(b > a && !c || !h || f && !d && e || g && e)return -1;}return 0;}function e(a,b,c){for(var d=a.length,e=c?d:-1;c?e--:++e < d;) {if(b(a[e],e,a))return e;}return -1;}function f(a,b,c){if(b !== b)return q(a,c);for(var d=c - 1,e=a.length;++d < e;) {if(a[d] === b)return d;}return -1;}function g(a){return "function" == typeof a || !1;}function h(a){return null == a?"":a + "";}function i(a,b){for(var c=-1,d=a.length;++c < d && b.indexOf(a.charAt(c)) > -1;) {}return c;}function j(a,b){for(var c=a.length;c-- && b.indexOf(a.charAt(c)) > -1;) {}return c;}function k(a,b){return d(a.criteria,b.criteria) || a.index - b.index;}function l(a,b,c){for(var e=-1,f=a.criteria,g=b.criteria,h=f.length,i=c.length;++e < h;) {var j=d(f[e],g[e]);if(j){if(e >= i)return j;var k=c[e];return j * ("asc" === k || k === !0?1:-1);}}return a.index - b.index;}function m(a){return Sa[a];}function n(a){return Ta[a];}function o(a,b,c){return b?a = Wa[a]:c && (a = Xa[a]),"\\" + a;}function p(a){return "\\" + Xa[a];}function q(a,b,c){for(var d=a.length,e=b + (c?0:-1);c?e--:++e < d;) {var f=a[e];if(f !== f)return e;}return -1;}function r(a){return !!a && "object" == (typeof a === "undefined"?"undefined":_typeof(a));}function s(a){return 160 >= a && a >= 9 && 13 >= a || 32 == a || 160 == a || 5760 == a || 6158 == a || a >= 8192 && (8202 >= a || 8232 == a || 8233 == a || 8239 == a || 8287 == a || 12288 == a || 65279 == a);}function t(a,b){for(var c=-1,d=a.length,e=-1,f=[];++c < d;) {a[c] === b && (a[c] = S,f[++e] = c);}return f;}function u(a,b){for(var c,d=-1,e=a.length,f=-1,g=[];++d < e;) {var h=a[d],i=b?b(h,d,a):h;d && c === i || (c = i,g[++f] = h);}return g;}function v(a){for(var b=-1,c=a.length;++b < c && s(a.charCodeAt(b));) {}return b;}function w(a){for(var b=a.length;b-- && s(a.charCodeAt(b));) {}return b;}function x(a){return Ua[a];}function y(a){function b(a){if(r(a) && !Ch(a) && !(a instanceof Z)){if(a instanceof s)return a;if(ag.call(a,"__chain__") && ag.call(a,"__wrapped__"))return md(a);}return new s(a);}function c(){}function s(a,b,c){this.__wrapped__ = a,this.__actions__ = c || [],this.__chain__ = !!b;}function Z(a){this.__wrapped__ = a,this.__actions__ = [],this.__dir__ = 1,this.__filtered__ = !1,this.__iteratees__ = [],this.__takeCount__ = Bg,this.__views__ = [];}function ba(){var a=new Z(this.__wrapped__);return a.__actions__ = ab(this.__actions__),a.__dir__ = this.__dir__,a.__filtered__ = this.__filtered__,a.__iteratees__ = ab(this.__iteratees__),a.__takeCount__ = this.__takeCount__,a.__views__ = ab(this.__views__),a;}function da(){if(this.__filtered__){var a=new Z(this);a.__dir__ = -1,a.__filtered__ = !0;}else a = this.clone(),a.__dir__ *= -1;return a;}function Sa(){var a=this.__wrapped__.value(),b=this.__dir__,c=Ch(a),d=0 > b,e=c?a.length:0,f=Tc(0,e,this.__views__),g=f.start,h=f.end,i=h - g,j=d?h:g - 1,k=this.__iteratees__,l=k.length,m=0,n=wg(i,this.__takeCount__);if(!c || O > e || e == i && n == i)return cc(d && c?a.reverse():a,this.__actions__);var o=[];a: for(;i-- && n > m;) {j += b;for(var p=-1,q=a[j];++p < l;) {var r=k[p],s=r.iteratee,t=r.type,u=s(q);if(t == Q)q = u;else if(!u){if(t == P)continue a;break a;}}o[m++] = q;}return o;}function Ta(){this.__data__ = {};}function Ua(a){return this.has(a) && delete this.__data__[a];}function Va(a){return "__proto__" == a?z:this.__data__[a];}function Wa(a){return "__proto__" != a && ag.call(this.__data__,a);}function Xa(a,b){return "__proto__" != a && (this.__data__[a] = b),this;}function Ya(a){var b=a?a.length:0;for(this.data = {hash:qg(null),set:new kg()};b--;) {this.push(a[b]);}}function Za(a,b){var c=a.data,d="string" == typeof b || He(b)?c.set.has(b):c.hash[b];return d?0:-1;}function $a(a){var b=this.data;"string" == typeof a || He(a)?b.set.add(a):b.hash[a] = !0;}function _a(a,b){for(var c=-1,d=a.length,e=-1,f=b.length,g=Of(d + f);++c < d;) {g[c] = a[c];}for(;++e < f;) {g[c++] = b[e];}return g;}function ab(a,b){var c=-1,d=a.length;for(b || (b = Of(d));++c < d;) {b[c] = a[c];}return b;}function bb(a,b){for(var c=-1,d=a.length;++c < d && b(a[c],c,a) !== !1;) {}return a;}function eb(a,b){for(var c=a.length;c-- && b(a[c],c,a) !== !1;) {}return a;}function fb(a,b){for(var c=-1,d=a.length;++c < d;) {if(!b(a[c],c,a))return !1;}return !0;}function gb(a,b,c,d){for(var e=-1,f=a.length,g=d,h=g;++e < f;) {var i=a[e],j=+b(i);c(j,g) && (g = j,h = i);}return h;}function hb(a,b){for(var c=-1,d=a.length,e=-1,f=[];++c < d;) {var g=a[c];b(g,c,a) && (f[++e] = g);}return f;}function ib(a,b){for(var c=-1,d=a.length,e=Of(d);++c < d;) {e[c] = b(a[c],c,a);}return e;}function jb(a,b){for(var c=-1,d=b.length,e=a.length;++c < d;) {a[e + c] = b[c];}return a;}function kb(a,b,c,d){var e=-1,f=a.length;for(d && f && (c = a[++e]);++e < f;) {c = b(c,a[e],e,a);}return c;}function lb(a,b,c,d){var e=a.length;for(d && e && (c = a[--e]);e--;) {c = b(c,a[e],e,a);}return c;}function mb(a,b){for(var c=-1,d=a.length;++c < d;) {if(b(a[c],c,a))return !0;}return !1;}function nb(a,b){for(var c=a.length,d=0;c--;) {d += +b(a[c]) || 0;}return d;}function ob(a,b){return a === z?b:a;}function pb(a,b,c,d){return a !== z && ag.call(d,c)?a:b;}function qb(a,b,c){for(var d=-1,e=Nh(b),f=e.length;++d < f;) {var g=e[d],h=a[g],i=c(h,b[g],g,a,b);(i === i?i === h:h !== h) && (h !== z || g in a) || (a[g] = i);}return a;}function rb(a,b){return null == b?a:tb(b,Nh(b),a);}function sb(a,b){for(var c=-1,d=null == a,e=!d && Yc(a),f=e?a.length:0,g=b.length,h=Of(g);++c < g;) {var i=b[c];e?h[c] = Zc(i,f)?a[i]:z:h[c] = d?z:a[i];}return h;}function tb(a,b,c){c || (c = {});for(var d=-1,e=b.length;++d < e;) {var f=b[d];c[f] = a[f];}return c;}function ub(a,b,c){var d=typeof a === "undefined"?"undefined":_typeof(a);return "function" == d?b === z?a:fc(a,b,c):null == a?Bf:"object" == d?Nb(a):b === z?Hf(a):Ob(a,b);}function vb(a,b,c,d,e,f,g){var h;if((c && (h = e?c(a,d,e):c(a)),h !== z))return h;if(!He(a))return a;var i=Ch(a);if(i){if((h = Uc(a),!b))return ab(a,h);}else {var j=cg.call(a),k=j == Y;if(j != _ && j != T && (!k || e))return Ra[j]?Wc(a,j,b):e?a:{};if((h = Vc(k?{}:a),!b))return rb(h,a);}f || (f = []),g || (g = []);for(var l=f.length;l--;) {if(f[l] == a)return g[l];}return f.push(a),g.push(h),(i?bb:Fb)(a,function(d,e){h[e] = vb(d,b,c,e,a,f,g);}),h;}function wb(a,b,c){if("function" != typeof a)throw new Xf(R);return lg(function(){a.apply(z,c);},b);}function xb(a,b){var c=a?a.length:0,d=[];if(!c)return d;var e=-1,g=Qc(),h=g == f,i=h && b.length >= O?oc(b):null,j=b.length;i && (g = Za,h = !1,b = i);a: for(;++e < c;) {var k=a[e];if(h && k === k){for(var l=j;l--;) {if(b[l] === k)continue a;}d.push(k);}else g(b,k,0) < 0 && d.push(k);}return d;}function yb(a,b){var c=!0;return Jg(a,function(a,d,e){return c = !!b(a,d,e);}),c;}function zb(a,b,c,d){var e=d,f=e;return Jg(a,function(a,g,h){var i=+b(a,g,h);(c(i,e) || i === d && i === f) && (e = i,f = a);}),f;}function Ab(a,b,c,d){var e=a.length;for(c = null == c?0:+c || 0,0 > c && (c = -c > e?0:e + c),d = d === z || d > e?e:+d || 0,0 > d && (d += e),e = c > d?0:d >>> 0,c >>>= 0;e > c;) {a[c++] = b;}return a;}function Bb(a,b){var c=[];return Jg(a,function(a,d,e){b(a,d,e) && c.push(a);}),c;}function Cb(a,b,c,d){var e;return c(a,function(a,c,f){return b(a,c,f)?(e = d?c:a,!1):void 0;}),e;}function Db(a,b,c,d){d || (d = []);for(var e=-1,f=a.length;++e < f;) {var g=a[e];r(g) && Yc(g) && (c || Ch(g) || ye(g))?b?Db(g,b,c,d):jb(d,g):c || (d[d.length] = g);}return d;}function Eb(a,b){return Lg(a,b,_e);}function Fb(a,b){return Lg(a,b,Nh);}function Gb(a,b){return Mg(a,b,Nh);}function Hb(a,b){for(var c=-1,d=b.length,e=-1,f=[];++c < d;) {var g=b[c];Ge(a[g]) && (f[++e] = g);}return f;}function Ib(a,b,c){if(null != a){c !== z && c in kd(a) && (b = [c]);for(var d=0,e=b.length;null != a && e > d;) {a = a[b[d++]];}return d && d == e?a:z;}}function Jb(a,b,c,d,e,f){return a === b?!0:null == a || null == b || !He(a) && !r(b)?a !== a && b !== b:Kb(a,b,Jb,c,d,e,f);}function Kb(a,b,c,d,e,f,g){var h=Ch(a),i=Ch(b),j=U,k=U;h || (j = cg.call(a),j == T?j = _:j != _ && (h = Qe(a))),i || (k = cg.call(b),k == T?k = _:k != _ && (i = Qe(b)));var l=j == _,m=k == _,n=j == k;if(n && !h && !l)return Mc(a,b,j);if(!e){var o=l && ag.call(a,"__wrapped__"),p=m && ag.call(b,"__wrapped__");if(o || p)return c(o?a.value():a,p?b.value():b,d,e,f,g);}if(!n)return !1;f || (f = []),g || (g = []);for(var q=f.length;q--;) {if(f[q] == a)return g[q] == b;}f.push(a),g.push(b);var r=(h?Lc:Nc)(a,b,c,d,e,f,g);return f.pop(),g.pop(),r;}function Lb(a,b,c){var d=b.length,e=d,f=!c;if(null == a)return !e;for(a = kd(a);d--;) {var g=b[d];if(f && g[2]?g[1] !== a[g[0]]:!(g[0] in a))return !1;}for(;++d < e;) {g = b[d];var h=g[0],i=a[h],j=g[1];if(f && g[2]){if(i === z && !(h in a))return !1;}else {var k=c?c(i,j,h):z;if(!(k === z?Jb(j,i,c,!0):k))return !1;}}return !0;}function Mb(a,b){var c=-1,d=Yc(a)?Of(a.length):[];return Jg(a,function(a,e,f){d[++c] = b(a,e,f);}),d;}function Nb(a){var b=Rc(a);if(1 == b.length && b[0][2]){var c=b[0][0],d=b[0][1];return function(a){return null == a?!1:a[c] === d && (d !== z || c in kd(a));};}return function(a){return Lb(a,b);};}function Ob(a,b){var c=Ch(a),d=_c(a) && cd(b),e=a + "";return a = ld(a),function(f){if(null == f)return !1;var g=e;if((f = kd(f),(c || !d) && !(g in f))){if((f = 1 == a.length?f:Ib(f,Wb(a,0,-1)),null == f))return !1;g = zd(a),f = kd(f);}return f[g] === b?b !== z || g in f:Jb(b,f[g],z,!0);};}function Pb(a,b,c,d,e){if(!He(a))return a;var f=Yc(b) && (Ch(b) || Qe(b)),g=f?z:Nh(b);return bb(g || b,function(h,i){if((g && (i = h,h = b[i]),r(h)))d || (d = []),e || (e = []),Qb(a,b,i,Pb,c,d,e);else {var j=a[i],k=c?c(j,h,i,a,b):z,l=k === z;l && (k = h),k === z && (!f || i in a) || !l && (k === k?k === j:j !== j) || (a[i] = k);}}),a;}function Qb(a,b,c,d,e,f,g){for(var h=f.length,i=b[c];h--;) {if(f[h] == i)return void (a[c] = g[h]);}var j=a[c],k=e?e(j,i,c,a,b):z,l=k === z;l && (k = i,Yc(i) && (Ch(i) || Qe(i))?k = Ch(j)?j:Yc(j)?ab(j):[]:Ne(i) || ye(i)?k = ye(j)?Ve(j):Ne(j)?j:{}:l = !1),f.push(i),g.push(k),l?a[c] = d(k,i,e,f,g):(k === k?k !== j:j === j) && (a[c] = k);}function Rb(a){return function(b){return null == b?z:b[a];};}function Sb(a){var b=a + "";return a = ld(a),function(c){return Ib(c,a,b);};}function Tb(a,b){for(var c=a?b.length:0;c--;) {var d=b[c];if(d != e && Zc(d)){var e=d;mg.call(a,d,1);}}return a;}function Ub(a,b){return a + rg(zg() * (b - a + 1));}function Vb(a,b,c,d,e){return e(a,function(a,e,f){c = d?(d = !1,a):b(c,a,e,f);}),c;}function Wb(a,b,c){var d=-1,e=a.length;b = null == b?0:+b || 0,0 > b && (b = -b > e?0:e + b),c = c === z || c > e?e:+c || 0,0 > c && (c += e),e = b > c?0:c - b >>> 0,b >>>= 0;for(var f=Of(e);++d < e;) {f[d] = a[d + b];}return f;}function Xb(a,b){var c;return Jg(a,function(a,d,e){return c = b(a,d,e),!c;}),!!c;}function Yb(a,b){var c=a.length;for(a.sort(b);c--;) {a[c] = a[c].value;}return a;}function Zb(a,b,c){var d=Oc(),e=-1;b = ib(b,function(a){return d(a);});var f=Mb(a,function(a){var c=ib(b,function(b){return b(a);});return {criteria:c,index:++e,value:a};});return Yb(f,function(a,b){return l(a,b,c);});}function $b(a,b){var c=0;return Jg(a,function(a,d,e){c += +b(a,d,e) || 0;}),c;}function _b(a,b){var c=-1,d=Qc(),e=a.length,g=d == f,h=g && e >= O,i=h?oc():null,j=[];i?(d = Za,g = !1):(h = !1,i = b?[]:j);a: for(;++c < e;) {var k=a[c],l=b?b(k,c,a):k;if(g && k === k){for(var m=i.length;m--;) {if(i[m] === l)continue a;}b && i.push(l),j.push(k);}else d(i,l,0) < 0 && ((b || h) && i.push(l),j.push(k));}return j;}function ac(a,b){for(var c=-1,d=b.length,e=Of(d);++c < d;) {e[c] = a[b[c]];}return e;}function bc(a,b,c,d){for(var e=a.length,f=d?e:-1;(d?f--:++f < e) && b(a[f],f,a);) {}return c?Wb(a,d?0:f,d?f + 1:e):Wb(a,d?f + 1:0,d?e:f);}function cc(a,b){var c=a;c instanceof Z && (c = c.value());for(var d=-1,e=b.length;++d < e;) {var f=b[d];c = f.func.apply(f.thisArg,jb([c],f.args));}return c;}function dc(a,b,c){var d=0,e=a?a.length:d;if("number" == typeof b && b === b && Eg >= e){for(;e > d;) {var f=d + e >>> 1,g=a[f];(c?b >= g:b > g) && null !== g?d = f + 1:e = f;}return e;}return ec(a,b,Bf,c);}function ec(a,b,c,d){b = c(b);for(var e=0,f=a?a.length:0,g=b !== b,h=null === b,i=b === z;f > e;) {var j=rg((e + f) / 2),k=c(a[j]),l=k !== z,m=k === k;if(g)var n=m || d;else n = h?m && l && (d || null != k):i?m && (d || l):null == k?!1:d?b >= k:b > k;n?e = j + 1:f = j;}return wg(f,Dg);}function fc(a,b,c){if("function" != typeof a)return Bf;if(b === z)return a;switch(c){case 1:return function(c){return a.call(b,c);};case 3:return function(c,d,e){return a.call(b,c,d,e);};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f);};case 5:return function(c,d,e,f,g){return a.call(b,c,d,e,f,g);};}return function(){return a.apply(b,arguments);};}function gc(a){var b=new fg(a.byteLength),c=new ng(b);return c.set(new ng(a)),b;}function hc(a,b,c){for(var d=c.length,e=-1,f=vg(a.length - d,0),g=-1,h=b.length,i=Of(h + f);++g < h;) {i[g] = b[g];}for(;++e < d;) {i[c[e]] = a[e];}for(;f--;) {i[g++] = a[e++];}return i;}function ic(a,b,c){for(var d=-1,e=c.length,f=-1,g=vg(a.length - e,0),h=-1,i=b.length,j=Of(g + i);++f < g;) {j[f] = a[f];}for(var k=f;++h < i;) {j[k + h] = b[h];}for(;++d < e;) {j[k + c[d]] = a[f++];}return j;}function jc(a,b){return function(c,d,e){var f=b?b():{};if((d = Oc(d,e,3),Ch(c)))for(var g=-1,h=c.length;++g < h;) {var i=c[g];a(f,i,d(i,g,c),c);}else Jg(c,function(b,c,e){a(f,b,d(b,c,e),e);});return f;};}function kc(a){return qe(function(b,c){var d=-1,e=null == b?0:c.length,f=e > 2?c[e - 2]:z,g=e > 2?c[2]:z,h=e > 1?c[e - 1]:z;for("function" == typeof f?(f = fc(f,h,5),e -= 2):(f = "function" == typeof h?h:z,e -= f?1:0),g && $c(c[0],c[1],g) && (f = 3 > e?z:f,e = 1);++d < e;) {var i=c[d];i && a(b,i,f);}return b;});}function lc(a,b){return function(c,d){var e=c?Pg(c):0;if(!bd(e))return a(c,d);for(var f=b?e:-1,g=kd(c);(b?f--:++f < e) && d(g[f],f,g) !== !1;) {}return c;};}function mc(a){return function(b,c,d){for(var e=kd(b),f=d(b),g=f.length,h=a?g:-1;a?h--:++h < g;) {var i=f[h];if(c(e[i],i,e) === !1)break;}return b;};}function nc(a,b){function c(){var e=this && this !== cb && this instanceof c?d:a;return e.apply(b,arguments);}var d=qc(a);return c;}function oc(a){return qg && kg?new Ya(a):null;}function pc(a){return function(b){for(var c=-1,d=yf(kf(b)),e=d.length,f="";++c < e;) {f = a(f,d[c],c);}return f;};}function qc(a){return function(){var b=arguments;switch(b.length){case 0:return new a();case 1:return new a(b[0]);case 2:return new a(b[0],b[1]);case 3:return new a(b[0],b[1],b[2]);case 4:return new a(b[0],b[1],b[2],b[3]);case 5:return new a(b[0],b[1],b[2],b[3],b[4]);case 6:return new a(b[0],b[1],b[2],b[3],b[4],b[5]);case 7:return new a(b[0],b[1],b[2],b[3],b[4],b[5],b[6]);}var c=Ig(a.prototype),d=a.apply(c,b);return He(d)?d:c;};}function rc(a){function b(c,d,e){e && $c(c,d,e) && (d = z);var f=Kc(c,a,z,z,z,z,z,d);return f.placeholder = b.placeholder,f;}return b;}function sc(a,b){return qe(function(c){var d=c[0];return null == d?d:(c.push(b),a.apply(z,c));});}function tc(a,b){return function(c,d,e){if((e && $c(c,d,e) && (d = z),d = Oc(d,e,3),1 == d.length)){c = Ch(c)?c:jd(c);var f=gb(c,d,a,b);if(!c.length || f !== b)return f;}return zb(c,d,a,b);};}function uc(a,b){return function(c,d,f){if((d = Oc(d,f,3),Ch(c))){var g=e(c,d,b);return g > -1?c[g]:z;}return Cb(c,d,a);};}function vc(a){return function(b,c,d){return b && b.length?(c = Oc(c,d,3),e(b,c,a)):-1;};}function wc(a){return function(b,c,d){return c = Oc(c,d,3),Cb(b,c,a,!0);};}function xc(a){return function(){for(var b,c=arguments.length,d=a?c:-1,e=0,f=Of(c);a?d--:++d < c;) {var g=f[e++] = arguments[d];if("function" != typeof g)throw new Xf(R);!b && s.prototype.thru && "wrapper" == Pc(g) && (b = new s([],!0));}for(d = b?-1:c;++d < c;) {g = f[d];var h=Pc(g),i="wrapper" == h?Og(g):z;b = i && ad(i[0]) && i[1] == (I | E | G | J) && !i[4].length && 1 == i[9]?b[Pc(i[0])].apply(b,i[3]):1 == g.length && ad(g)?b[h]():b.thru(g);}return function(){var a=arguments,d=a[0];if(b && 1 == a.length && Ch(d) && d.length >= O)return b.plant(d).value();for(var e=0,g=c?f[e].apply(this,a):d;++e < c;) {g = f[e].call(this,g);}return g;};};}function yc(a,b){return function(c,d,e){return "function" == typeof d && e === z && Ch(c)?a(c,d):b(c,fc(d,e,3));};}function zc(a){return function(b,c,d){return ("function" != typeof c || d !== z) && (c = fc(c,d,3)),a(b,c,_e);};}function Ac(a){return function(b,c,d){return ("function" != typeof c || d !== z) && (c = fc(c,d,3)),a(b,c);};}function Bc(a){return function(b,c,d){var e={};return c = Oc(c,d,3),Fb(b,function(b,d,f){var g=c(b,d,f);d = a?g:d,b = a?b:g,e[d] = b;}),e;};}function Cc(a){return function(b,c,d){return b = h(b),(a?b:"") + Gc(b,c,d) + (a?"":b);};}function Dc(a){var b=qe(function(c,d){var e=t(d,b.placeholder);return Kc(c,a,z,d,e);});return b;}function Ec(a,b){return function(c,d,e,f){var g=arguments.length < 3;return "function" == typeof d && f === z && Ch(c)?a(c,d,e,g):Vb(c,Oc(d,f,4),e,g,b);};}function Fc(a,b,c,d,e,f,g,h,i,j){function k(){for(var s=arguments.length,u=s,v=Of(s);u--;) {v[u] = arguments[u];}if((d && (v = hc(v,d,e)),f && (v = ic(v,f,g)),o || q)){var w=k.placeholder,x=t(v,w);if((s -= x.length,j > s)){var y=h?ab(h):z,A=vg(j - s,0),D=o?x:z,E=o?z:x,F=o?v:z,I=o?z:v;b |= o?G:H,b &= ~(o?H:G),p || (b &= ~(B | C));var J=[a,b,c,F,D,I,E,y,i,A],K=Fc.apply(z,J);return ad(a) && Qg(K,J),K.placeholder = w,K;}}var L=m?c:this,M=n?L[a]:a;return h && (v = hd(v,h)),l && i < v.length && (v.length = i),this && this !== cb && this instanceof k && (M = r || qc(a)),M.apply(L,v);}var l=b & I,m=b & B,n=b & C,o=b & E,p=b & D,q=b & F,r=n?z:qc(a);return k;}function Gc(a,b,c){var d=a.length;if((b = +b,d >= b || !tg(b)))return "";var e=b - d;return c = null == c?" ":c + "",qf(c,pg(e / c.length)).slice(0,e);}function Hc(a,b,c,d){function e(){for(var b=-1,h=arguments.length,i=-1,j=d.length,k=Of(j + h);++i < j;) {k[i] = d[i];}for(;h--;) {k[i++] = arguments[++b];}var l=this && this !== cb && this instanceof e?g:a;return l.apply(f?c:this,k);}var f=b & B,g=qc(a);return e;}function Ic(a){var b=Sf[a];return function(a,c){return c = c === z?0:+c || 0,c?(c = ig(10,c),b(a * c) / c):b(a);};}function Jc(a){return function(b,c,d,e){var f=Oc(d);return null == d && f === ub?dc(b,c,a):ec(b,c,f(d,e,1),a);};}function Kc(a,b,c,d,e,f,g,h){var i=b & C;if(!i && "function" != typeof a)throw new Xf(R);var j=d?d.length:0;if((j || (b &= ~(G | H),d = e = z),j -= e?e.length:0,b & H)){var k=d,l=e;d = e = z;}var m=i?z:Og(a),n=[a,b,c,d,e,k,l,f,g,h];if((m && (dd(n,m),b = n[1],h = n[9]),n[9] = null == h?i?0:a.length:vg(h - j,0) || 0,b == B))var o=nc(n[0],n[2]);else o = b != G && b != (B | G) || n[4].length?Fc.apply(z,n):Hc.apply(z,n);var p=m?Ng:Qg;return p(o,n);}function Lc(a,b,c,d,e,f,g){var h=-1,i=a.length,j=b.length;if(i != j && !(e && j > i))return !1;for(;++h < i;) {var k=a[h],l=b[h],m=d?d(e?l:k,e?k:l,h):z;if(m !== z){if(m)continue;return !1;}if(e){if(!mb(b,function(a){return k === a || c(k,a,d,e,f,g);}))return !1;}else if(k !== l && !c(k,l,d,e,f,g))return !1;}return !0;}function Mc(a,b,c){switch(c){case V:case W:return +a == +b;case X:return a.name == b.name && a.message == b.message;case $:return a != +a?b != +b:a == +b;case aa:case ca:return a == b + "";}return !1;}function Nc(a,b,c,d,e,f,g){var h=Nh(a),i=h.length,j=Nh(b),k=j.length;if(i != k && !e)return !1;for(var l=i;l--;) {var m=h[l];if(!(e?m in b:ag.call(b,m)))return !1;}for(var n=e;++l < i;) {m = h[l];var o=a[m],p=b[m],q=d?d(e?p:o,e?o:p,m):z;if(!(q === z?c(o,p,d,e,f,g):q))return !1;n || (n = "constructor" == m);}if(!n){var r=a.constructor,s=b.constructor;if(r != s && "constructor" in a && "constructor" in b && !("function" == typeof r && r instanceof r && "function" == typeof s && s instanceof s))return !1;}return !0;}function Oc(a,c,d){var e=b.callback || zf;return e = e === zf?ub:e,d?e(a,c,d):e;}function Pc(a){for(var b=a.name,c=Hg[b],d=c?c.length:0;d--;) {var e=c[d],f=e.func;if(null == f || f == a)return e.name;}return b;}function Qc(a,c,d){var e=b.indexOf || xd;return e = e === xd?f:e,a?e(a,c,d):e;}function Rc(a){for(var b=af(a),c=b.length;c--;) {b[c][2] = cd(b[c][1]);}return b;}function Sc(a,b){var c=null == a?z:a[b];return Ke(c)?c:z;}function Tc(a,b,c){for(var d=-1,e=c.length;++d < e;) {var f=c[d],g=f.size;switch(f.type){case "drop":a += g;break;case "dropRight":b -= g;break;case "take":b = wg(b,a + g);break;case "takeRight":a = vg(a,b - g);}}return {start:a,end:b};}function Uc(a){var b=a.length,c=new a.constructor(b);return b && "string" == typeof a[0] && ag.call(a,"index") && (c.index = a.index,c.input = a.input),c;}function Vc(a){var b=a.constructor;return "function" == typeof b && b instanceof b || (b = Uf),new b();}function Wc(a,b,c){var d=a.constructor;switch(b){case ea:return gc(a);case V:case W:return new d(+a);case fa:case ga:case ha:case ia:case ja:case ka:case la:case ma:case na:var e=a.buffer;return new d(c?gc(e):e,a.byteOffset,a.length);case $:case ca:return new d(a);case aa:var f=new d(a.source,Ga.exec(a));f.lastIndex = a.lastIndex;}return f;}function Xc(a,b,c){null == a || _c(b,a) || (b = ld(b),a = 1 == b.length?a:Ib(a,Wb(b,0,-1)),b = zd(b));var d=null == a?a:a[b];return null == d?z:d.apply(a,c);}function Yc(a){return null != a && bd(Pg(a));}function Zc(a,b){return a = "number" == typeof a || Ja.test(a)?+a:-1,b = null == b?Fg:b,a > -1 && a % 1 == 0 && b > a;}function $c(a,b,c){if(!He(c))return !1;var d=typeof b === "undefined"?"undefined":_typeof(b);if("number" == d?Yc(c) && Zc(b,c.length):"string" == d && b in c){var e=c[b];return a === a?a === e:e !== e;}return !1;}function _c(a,b){var c=typeof a === "undefined"?"undefined":_typeof(a);if("string" == c && za.test(a) || "number" == c)return !0;if(Ch(a))return !1;var d=!ya.test(a);return d || null != b && a in kd(b);}function ad(a){var c=Pc(a);if(!(c in Z.prototype))return !1;var d=b[c];if(a === d)return !0;var e=Og(d);return !!e && a === e[0];}function bd(a){return "number" == typeof a && a > -1 && a % 1 == 0 && Fg >= a;}function cd(a){return a === a && !He(a);}function dd(a,b){var c=a[1],d=b[1],e=c | d,f=I > e,g=d == I && c == E || d == I && c == J && a[7].length <= b[8] || d == (I | J) && c == E;if(!f && !g)return a;d & B && (a[2] = b[2],e |= c & B?0:D);var h=b[3];if(h){var i=a[3];a[3] = i?hc(i,h,b[4]):ab(h),a[4] = i?t(a[3],S):ab(b[4]);}return h = b[5],h && (i = a[5],a[5] = i?ic(i,h,b[6]):ab(h),a[6] = i?t(a[5],S):ab(b[6])),h = b[7],h && (a[7] = ab(h)),d & I && (a[8] = null == a[8]?b[8]:wg(a[8],b[8])),null == a[9] && (a[9] = b[9]),a[0] = b[0],a[1] = e,a;}function ed(a,b){return a === z?b:Dh(a,b,ed);}function fd(a,b){a = kd(a);for(var c=-1,d=b.length,e={};++c < d;) {var f=b[c];f in a && (e[f] = a[f]);}return e;}function gd(a,b){var c={};return Eb(a,function(a,d,e){b(a,d,e) && (c[d] = a);}),c;}function hd(a,b){for(var c=a.length,d=wg(b.length,c),e=ab(a);d--;) {var f=b[d];a[d] = Zc(f,c)?e[f]:z;}return a;}function id(a){for(var b=_e(a),c=b.length,d=c && a.length,e=!!d && bd(d) && (Ch(a) || ye(a)),f=-1,g=[];++f < c;) {var h=b[f];(e && Zc(h,d) || ag.call(a,h)) && g.push(h);}return g;}function jd(a){return null == a?[]:Yc(a)?He(a)?a:Uf(a):ef(a);}function kd(a){return He(a)?a:Uf(a);}function ld(a){if(Ch(a))return a;var b=[];return h(a).replace(Aa,function(a,c,d,e){b.push(d?e.replace(Ea,"$1"):c || a);}),b;}function md(a){return a instanceof Z?a.clone():new s(a.__wrapped__,a.__chain__,ab(a.__actions__));}function nd(a,b,c){b = (c?$c(a,b,c):null == b)?1:vg(rg(b) || 1,1);for(var d=0,e=a?a.length:0,f=-1,g=Of(pg(e / b));e > d;) {g[++f] = Wb(a,d,d += b);}return g;}function od(a){for(var b=-1,c=a?a.length:0,d=-1,e=[];++b < c;) {var f=a[b];f && (e[++d] = f);}return e;}function pd(a,b,c){var d=a?a.length:0;return d?((c?$c(a,b,c):null == b) && (b = 1),Wb(a,0 > b?0:b)):[];}function qd(a,b,c){var d=a?a.length:0;return d?((c?$c(a,b,c):null == b) && (b = 1),b = d - (+b || 0),Wb(a,0,0 > b?0:b)):[];}function rd(a,b,c){return a && a.length?bc(a,Oc(b,c,3),!0,!0):[];}function sd(a,b,c){return a && a.length?bc(a,Oc(b,c,3),!0):[];}function td(a,b,c,d){var e=a?a.length:0;return e?(c && "number" != typeof c && $c(a,b,c) && (c = 0,d = e),Ab(a,b,c,d)):[];}function ud(a){return a?a[0]:z;}function vd(a,b,c){var d=a?a.length:0;return c && $c(a,b,c) && (b = !1),d?Db(a,b):[];}function wd(a){var b=a?a.length:0;return b?Db(a,!0):[];}function xd(a,b,c){var d=a?a.length:0;if(!d)return -1;if("number" == typeof c)c = 0 > c?vg(d + c,0):c;else if(c){var e=dc(a,b);return d > e && (b === b?b === a[e]:a[e] !== a[e])?e:-1;}return f(a,b,c || 0);}function yd(a){return qd(a,1);}function zd(a){var b=a?a.length:0;return b?a[b - 1]:z;}function Ad(a,b,c){var d=a?a.length:0;if(!d)return -1;var e=d;if("number" == typeof c)e = (0 > c?vg(d + c,0):wg(c || 0,d - 1)) + 1;else if(c){e = dc(a,b,!0) - 1;var f=a[e];return (b === b?b === f:f !== f)?e:-1;}if(b !== b)return q(a,e,!0);for(;e--;) {if(a[e] === b)return e;}return -1;}function Bd(){var a=arguments,b=a[0];if(!b || !b.length)return b;for(var c=0,d=Qc(),e=a.length;++c < e;) {for(var f=0,g=a[c];(f = d(b,g,f)) > -1;) {mg.call(b,f,1);}}return b;}function Cd(a,b,c){var d=[];if(!a || !a.length)return d;var e=-1,f=[],g=a.length;for(b = Oc(b,c,3);++e < g;) {var h=a[e];b(h,e,a) && (d.push(h),f.push(e));}return Tb(a,f),d;}function Dd(a){return pd(a,1);}function Ed(a,b,c){var d=a?a.length:0;return d?(c && "number" != typeof c && $c(a,b,c) && (b = 0,c = d),Wb(a,b,c)):[];}function Fd(a,b,c){var d=a?a.length:0;return d?((c?$c(a,b,c):null == b) && (b = 1),Wb(a,0,0 > b?0:b)):[];}function Gd(a,b,c){var d=a?a.length:0;return d?((c?$c(a,b,c):null == b) && (b = 1),b = d - (+b || 0),Wb(a,0 > b?0:b)):[];}function Hd(a,b,c){return a && a.length?bc(a,Oc(b,c,3),!1,!0):[];}function Id(a,b,c){return a && a.length?bc(a,Oc(b,c,3)):[];}function Jd(a,b,c,d){var e=a?a.length:0;if(!e)return [];null != b && "boolean" != typeof b && (d = c,c = $c(a,b,d)?z:b,b = !1);var g=Oc();return (null != c || g !== ub) && (c = g(c,d,3)),b && Qc() == f?u(a,c):_b(a,c);}function Kd(a){if(!a || !a.length)return [];var b=-1,c=0;a = hb(a,function(a){return Yc(a)?(c = vg(a.length,c),!0):void 0;});for(var d=Of(c);++b < c;) {d[b] = ib(a,Rb(b));}return d;}function Ld(a,b,c){var d=a?a.length:0;if(!d)return [];var e=Kd(a);return null == b?e:(b = fc(b,c,4),ib(e,function(a){return kb(a,b,z,!0);}));}function Md(){for(var a=-1,b=arguments.length;++a < b;) {var c=arguments[a];if(Yc(c))var d=d?jb(xb(d,c),xb(c,d)):c;}return d?_b(d):[];}function Nd(a,b){var c=-1,d=a?a.length:0,e={};for(!d || b || Ch(a[0]) || (b = []);++c < d;) {var f=a[c];b?e[f] = b[c]:f && (e[f[0]] = f[1]);}return e;}function Od(a){var c=b(a);return c.__chain__ = !0,c;}function Pd(a,b,c){return b.call(c,a),a;}function Qd(a,b,c){return b.call(c,a);}function Rd(){return Od(this);}function Sd(){return new s(this.value(),this.__chain__);}function Td(a){for(var b,d=this;d instanceof c;) {var e=md(d);b?f.__wrapped__ = e:b = e;var f=e;d = d.__wrapped__;}return f.__wrapped__ = a,b;}function Ud(){var a=this.__wrapped__,b=function b(a){return c && c.__dir__ < 0?a:a.reverse();};if(a instanceof Z){var c=a;return this.__actions__.length && (c = new Z(this)),c = c.reverse(),c.__actions__.push({func:Qd,args:[b],thisArg:z}),new s(c,this.__chain__);}return this.thru(b);}function Vd(){return this.value() + "";}function Wd(){return cc(this.__wrapped__,this.__actions__);}function Xd(a,b,c){var d=Ch(a)?fb:yb;return c && $c(a,b,c) && (b = z),("function" != typeof b || c !== z) && (b = Oc(b,c,3)),d(a,b);}function Yd(a,b,c){var d=Ch(a)?hb:Bb;return b = Oc(b,c,3),d(a,b);}function Zd(a,b){return dh(a,Nb(b));}function $d(a,b,c,d){var e=a?Pg(a):0;return bd(e) || (a = ef(a),e = a.length),c = "number" != typeof c || d && $c(b,c,d)?0:0 > c?vg(e + c,0):c || 0,"string" == typeof a || !Ch(a) && Pe(a)?e >= c && a.indexOf(b,c) > -1:!!e && Qc(a,b,c) > -1;}function _d(a,b,c){var d=Ch(a)?ib:Mb;return b = Oc(b,c,3),d(a,b);}function ae(a,b){return _d(a,Hf(b));}function be(a,b,c){var d=Ch(a)?hb:Bb;return b = Oc(b,c,3),d(a,function(a,c,d){return !b(a,c,d);});}function ce(a,b,c){if(c?$c(a,b,c):null == b){a = jd(a);var d=a.length;return d > 0?a[Ub(0,d - 1)]:z;}var e=-1,f=Ue(a),d=f.length,g=d - 1;for(b = wg(0 > b?0:+b || 0,d);++e < b;) {var h=Ub(e,g),i=f[h];f[h] = f[e],f[e] = i;}return f.length = b,f;}function de(a){return ce(a,Bg);}function ee(a){var b=a?Pg(a):0;return bd(b)?b:Nh(a).length;}function fe(a,b,c){var d=Ch(a)?mb:Xb;return c && $c(a,b,c) && (b = z),("function" != typeof b || c !== z) && (b = Oc(b,c,3)),d(a,b);}function ge(a,b,c){if(null == a)return [];c && $c(a,b,c) && (b = z);var d=-1;b = Oc(b,c,3);var e=Mb(a,function(a,c,e){return {criteria:b(a,c,e),index:++d,value:a};});return Yb(e,k);}function he(a,b,c,d){return null == a?[]:(d && $c(b,c,d) && (c = z),Ch(b) || (b = null == b?[]:[b]),Ch(c) || (c = null == c?[]:[c]),Zb(a,b,c));}function ie(a,b){return Yd(a,Nb(b));}function je(a,b){if("function" != typeof b){if("function" != typeof a)throw new Xf(R);var c=a;a = b,b = c;}return a = tg(a = +a)?a:0,function(){return --a < 1?b.apply(this,arguments):void 0;};}function ke(a,b,c){return c && $c(a,b,c) && (b = z),b = a && null == b?a.length:vg(+b || 0,0),Kc(a,I,z,z,z,z,b);}function le(a,b){var c;if("function" != typeof b){if("function" != typeof a)throw new Xf(R);var d=a;a = b,b = d;}return function(){return --a > 0 && (c = b.apply(this,arguments)),1 >= a && (b = z),c;};}function me(a,b,c){function d(){n && gg(n),j && gg(j),p = 0,j = n = o = z;}function e(b,c){c && gg(c),j = n = o = z,b && (p = oh(),k = a.apply(m,i),n || j || (i = m = z));}function f(){var a=b - (oh() - l);0 >= a || a > b?e(o,j):n = lg(f,a);}function g(){e(r,n);}function h(){if((i = arguments,l = oh(),m = this,o = r && (n || !s),q === !1))var c=s && !n;else {j || s || (p = l);var d=q - (l - p),e=0 >= d || d > q;e?(j && (j = gg(j)),p = l,k = a.apply(m,i)):j || (j = lg(g,d));}return e && n?n = gg(n):n || b === q || (n = lg(f,b)),c && (e = !0,k = a.apply(m,i)),!e || n || j || (i = m = z),k;}var i,j,k,l,m,n,o,p=0,q=!1,r=!0;if("function" != typeof a)throw new Xf(R);if((b = 0 > b?0:+b || 0,c === !0)){var s=!0;r = !1;}else He(c) && (s = !!c.leading,q = "maxWait" in c && vg(+c.maxWait || 0,b),r = "trailing" in c?!!c.trailing:r);return h.cancel = d,h;}function ne(a,b){if("function" != typeof a || b && "function" != typeof b)throw new Xf(R);var c=function c(){var d=arguments,e=b?b.apply(this,d):d[0],f=c.cache;if(f.has(e))return f.get(e);var g=a.apply(this,d);return c.cache = f.set(e,g),g;};return c.cache = new ne.Cache(),c;}function oe(a){if("function" != typeof a)throw new Xf(R);return function(){return !a.apply(this,arguments);};}function pe(a){return le(2,a);}function qe(a,b){if("function" != typeof a)throw new Xf(R);return b = vg(b === z?a.length - 1:+b || 0,0),function(){for(var c=arguments,d=-1,e=vg(c.length - b,0),f=Of(e);++d < e;) {f[d] = c[b + d];}switch(b){case 0:return a.call(this,f);case 1:return a.call(this,c[0],f);case 2:return a.call(this,c[0],c[1],f);}var g=Of(b + 1);for(d = -1;++d < b;) {g[d] = c[d];}return g[b] = f,a.apply(this,g);};}function re(a){if("function" != typeof a)throw new Xf(R);return function(b){return a.apply(this,b);};}function se(a,b,c){var d=!0,e=!0;if("function" != typeof a)throw new Xf(R);return c === !1?d = !1:He(c) && (d = "leading" in c?!!c.leading:d,e = "trailing" in c?!!c.trailing:e),me(a,b,{leading:d,maxWait:+b,trailing:e});}function te(a,b){return b = null == b?Bf:b,Kc(b,G,z,[a],[]);}function ue(a,b,c,d){return b && "boolean" != typeof b && $c(a,b,c)?b = !1:"function" == typeof b && (d = c,c = b,b = !1),"function" == typeof c?vb(a,b,fc(c,d,1)):vb(a,b);}function ve(a,b,c){return "function" == typeof b?vb(a,!0,fc(b,c,1)):vb(a,!0);}function we(a,b){return a > b;}function xe(a,b){return a >= b;}function ye(a){return r(a) && Yc(a) && ag.call(a,"callee") && !jg.call(a,"callee");}function ze(a){return a === !0 || a === !1 || r(a) && cg.call(a) == V;}function Ae(a){return r(a) && cg.call(a) == W;}function Be(a){return !!a && 1 === a.nodeType && r(a) && !Ne(a);}function Ce(a){return null == a?!0:Yc(a) && (Ch(a) || Pe(a) || ye(a) || r(a) && Ge(a.splice))?!a.length:!Nh(a).length;}function De(a,b,c,d){c = "function" == typeof c?fc(c,d,3):z;var e=c?c(a,b):z;return e === z?Jb(a,b,c):!!e;}function Ee(a){return r(a) && "string" == typeof a.message && cg.call(a) == X;}function Fe(a){return "number" == typeof a && tg(a);}function Ge(a){return He(a) && cg.call(a) == Y;}function He(a){var b=typeof a === "undefined"?"undefined":_typeof(a);return !!a && ("object" == b || "function" == b);}function Ie(a,b,c,d){return c = "function" == typeof c?fc(c,d,3):z,Lb(a,Rc(b),c);}function Je(a){return Me(a) && a != +a;}function Ke(a){return null == a?!1:Ge(a)?eg.test(_f.call(a)):r(a) && Ia.test(a);}function Le(a){return null === a;}function Me(a){return "number" == typeof a || r(a) && cg.call(a) == $;}function Ne(a){var b;if(!r(a) || cg.call(a) != _ || ye(a) || !ag.call(a,"constructor") && (b = a.constructor,"function" == typeof b && !(b instanceof b)))return !1;var c;return Eb(a,function(a,b){c = b;}),c === z || ag.call(a,c);}function Oe(a){return He(a) && cg.call(a) == aa;}function Pe(a){return "string" == typeof a || r(a) && cg.call(a) == ca;}function Qe(a){return r(a) && bd(a.length) && !!Qa[cg.call(a)];}function Re(a){return a === z;}function Se(a,b){return b > a;}function Te(a,b){return b >= a;}function Ue(a){var b=a?Pg(a):0;return bd(b)?b?ab(a):[]:ef(a);}function Ve(a){return tb(a,_e(a));}function We(a,b,c){var d=Ig(a);return c && $c(a,b,c) && (b = z),b?rb(d,b):d;}function Xe(a){return Hb(a,_e(a));}function Ye(a,b,c){var d=null == a?z:Ib(a,ld(b),b + "");return d === z?c:d;}function Ze(a,b){if(null == a)return !1;var c=ag.call(a,b);if(!c && !_c(b)){if((b = ld(b),a = 1 == b.length?a:Ib(a,Wb(b,0,-1)),null == a))return !1;b = zd(b),c = ag.call(a,b);}return c || bd(a.length) && Zc(b,a.length) && (Ch(a) || ye(a));}function $e(a,b,c){c && $c(a,b,c) && (b = z);for(var d=-1,e=Nh(a),f=e.length,g={};++d < f;) {var h=e[d],i=a[h];b?ag.call(g,i)?g[i].push(h):g[i] = [h]:g[i] = h;}return g;}function _e(a){if(null == a)return [];He(a) || (a = Uf(a));var b=a.length;b = b && bd(b) && (Ch(a) || ye(a)) && b || 0;for(var c=a.constructor,d=-1,e="function" == typeof c && c.prototype === a,f=Of(b),g=b > 0;++d < b;) {f[d] = d + "";}for(var h in a) {g && Zc(h,b) || "constructor" == h && (e || !ag.call(a,h)) || f.push(h);}return f;}function af(a){a = kd(a);for(var b=-1,c=Nh(a),d=c.length,e=Of(d);++b < d;) {var f=c[b];e[b] = [f,a[f]];}return e;}function bf(a,b,c){var d=null == a?z:a[b];return d === z && (null == a || _c(b,a) || (b = ld(b),a = 1 == b.length?a:Ib(a,Wb(b,0,-1)),d = null == a?z:a[zd(b)]),d = d === z?c:d),Ge(d)?d.call(a):d;}function cf(a,b,c){if(null == a)return a;var d=b + "";b = null != a[d] || _c(b,a)?[d]:ld(b);for(var e=-1,f=b.length,g=f - 1,h=a;null != h && ++e < f;) {var i=b[e];He(h) && (e == g?h[i] = c:null == h[i] && (h[i] = Zc(b[e + 1])?[]:{})),h = h[i];}return a;}function df(a,b,c,d){var e=Ch(a) || Qe(a);if((b = Oc(b,d,4),null == c))if(e || He(a)){var f=a.constructor;c = e?Ch(a)?new f():[]:Ig(Ge(f)?f.prototype:z);}else c = {};return (e?bb:Fb)(a,function(a,d,e){return b(c,a,d,e);}),c;}function ef(a){return ac(a,Nh(a));}function ff(a){return ac(a,_e(a));}function gf(a,b,c){return b = +b || 0,c === z?(c = b,b = 0):c = +c || 0,a >= wg(b,c) && a < vg(b,c);}function hf(a,b,c){c && $c(a,b,c) && (b = c = z);var d=null == a,e=null == b;if((null == c && (e && "boolean" == typeof a?(c = a,a = 1):"boolean" == typeof b && (c = b,e = !0)),d && e && (b = 1,e = !1),a = +a || 0,e?(b = a,a = 0):b = +b || 0,c || a % 1 || b % 1)){var f=zg();return wg(a + f * (b - a + hg("1e-" + ((f + "").length - 1))),b);}return Ub(a,b);}function jf(a){return a = h(a),a && a.charAt(0).toUpperCase() + a.slice(1);}function kf(a){return a = h(a),a && a.replace(Ka,m).replace(Da,"");}function lf(a,b,c){a = h(a),b += "";var d=a.length;return c = c === z?d:wg(0 > c?0:+c || 0,d),c -= b.length,c >= 0 && a.indexOf(b,c) == c;}function mf(a){return a = h(a),a && ua.test(a)?a.replace(sa,n):a;}function nf(a){return a = h(a),a && Ca.test(a)?a.replace(Ba,o):a || "(?:)";}function of(a,b,c){a = h(a),b = +b;var d=a.length;if(d >= b || !tg(b))return a;var e=(b - d) / 2,f=rg(e),g=pg(e);return c = Gc("",g,c),c.slice(0,f) + a + c;}function pf(a,b,c){return (c?$c(a,b,c):null == b)?b = 0:b && (b = +b),a = tf(a),yg(a,b || (Ha.test(a)?16:10));}function qf(a,b){var c="";if((a = h(a),b = +b,1 > b || !a || !tg(b)))return c;do {b % 2 && (c += a),b = rg(b / 2),a += a;}while(b);return c;}function rf(a,b,c){return a = h(a),c = null == c?0:wg(0 > c?0:+c || 0,a.length),a.lastIndexOf(b,c) == c;}function sf(a,c,d){var e=b.templateSettings;d && $c(a,c,d) && (c = d = z),a = h(a),c = qb(rb({},d || c),e,pb);var f,g,i=qb(rb({},c.imports),e.imports,pb),j=Nh(i),k=ac(i,j),l=0,m=c.interpolate || La,n="__p += '",o=Vf((c.escape || La).source + "|" + m.source + "|" + (m === xa?Fa:La).source + "|" + (c.evaluate || La).source + "|$","g"),q="//# sourceURL=" + ("sourceURL" in c?c.sourceURL:"lodash.templateSources[" + ++Pa + "]") + "\n";a.replace(o,function(b,c,d,e,h,i){return d || (d = e),n += a.slice(l,i).replace(Ma,p),c && (f = !0,n += "' +\n__e(" + c + ") +\n'"),h && (g = !0,n += "';\n" + h + ";\n__p += '"),d && (n += "' +\n((__t = (" + d + ")) == null ? '' : __t) +\n'"),l = i + b.length,b;}),n += "';\n";var r=c.variable;r || (n = "with (obj) {\n" + n + "\n}\n"),n = (g?n.replace(oa,""):n).replace(pa,"$1").replace(qa,"$1;"),n = "function(" + (r || "obj") + ") {\n" + (r?"":"obj || (obj = {});\n") + "var __t, __p = ''" + (f?", __e = _.escape":"") + (g?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n") + n + "return __p\n}";var s=Yh(function(){return Rf(j,q + "return " + n).apply(z,k);});if((s.source = n,Ee(s)))throw s;return s;}function tf(a,b,c){var d=a;return (a = h(a))?(c?$c(d,b,c):null == b)?a.slice(v(a),w(a) + 1):(b += "",a.slice(i(a,b),j(a,b) + 1)):a;}function uf(a,b,c){var d=a;return a = h(a),a?(c?$c(d,b,c):null == b)?a.slice(v(a)):a.slice(i(a,b + "")):a;}function vf(a,b,c){var d=a;return a = h(a),a?(c?$c(d,b,c):null == b)?a.slice(0,w(a) + 1):a.slice(0,j(a,b + "") + 1):a;}function wf(a,b,c){c && $c(a,b,c) && (b = z);var d=K,e=L;if(null != b)if(He(b)){var f="separator" in b?b.separator:f;d = "length" in b?+b.length || 0:d,e = "omission" in b?h(b.omission):e;}else d = +b || 0;if((a = h(a),d >= a.length))return a;var g=d - e.length;if(1 > g)return e;var i=a.slice(0,g);if(null == f)return i + e;if(Oe(f)){if(a.slice(g).search(f)){var j,k,l=a.slice(0,g);for(f.global || (f = Vf(f.source,(Ga.exec(f) || "") + "g")),f.lastIndex = 0;j = f.exec(l);) {k = j.index;}i = i.slice(0,null == k?g:k);}}else if(a.indexOf(f,g) != g){var m=i.lastIndexOf(f);m > -1 && (i = i.slice(0,m));}return i + e;}function xf(a){return a = h(a),a && ta.test(a)?a.replace(ra,x):a;}function yf(a,b,c){return c && $c(a,b,c) && (b = z),a = h(a),a.match(b || Na) || [];}function zf(a,b,c){return c && $c(a,b,c) && (b = z),r(a)?Cf(a):ub(a,b);}function Af(a){return function(){return a;};}function Bf(a){return a;}function Cf(a){return Nb(vb(a,!0));}function Df(a,b){return Ob(a,vb(b,!0));}function Ef(a,b,c){if(null == c){var d=He(b),e=d?Nh(b):z,f=e && e.length?Hb(b,e):z;(f?f.length:d) || (f = !1,c = b,b = a,a = this);}f || (f = Hb(b,Nh(b)));var g=!0,h=-1,i=Ge(a),j=f.length;c === !1?g = !1:He(c) && "chain" in c && (g = c.chain);for(;++h < j;) {var k=f[h],l=b[k];a[k] = l,i && (a.prototype[k] = (function(b){return function(){var c=this.__chain__;if(g || c){var d=a(this.__wrapped__),e=d.__actions__ = ab(this.__actions__);return e.push({func:b,args:arguments,thisArg:a}),d.__chain__ = c,d;}return b.apply(a,jb([this.value()],arguments));};})(l));}return a;}function Ff(){return cb._ = dg,this;}function Gf(){}function Hf(a){return _c(a)?Rb(a):Sb(a);}function If(a){return function(b){return Ib(a,ld(b),b + "");};}function Jf(a,b,c){c && $c(a,b,c) && (b = c = z),a = +a || 0,c = null == c?1:+c || 0,null == b?(b = a,a = 0):b = +b || 0;for(var d=-1,e=vg(pg((b - a) / (c || 1)),0),f=Of(e);++d < e;) {f[d] = a,a += c;}return f;}function Kf(a,b,c){if((a = rg(a),1 > a || !tg(a)))return [];var d=-1,e=Of(wg(a,Cg));for(b = fc(b,c,1);++d < a;) {Cg > d?e[d] = b(d):b(d);}return e;}function Lf(a){var b=++bg;return h(a) + b;}function Mf(a,b){return (+a || 0) + (+b || 0);}function Nf(a,b,c){return c && $c(a,b,c) && (b = z),b = Oc(b,c,3),1 == b.length?nb(Ch(a)?a:jd(a),b):$b(a,b);}a = a?db.defaults(cb.Object(),a,db.pick(cb,Oa)):cb;var Of=a.Array,Pf=a.Date,Qf=a.Error,Rf=a.Function,Sf=a.Math,Tf=a.Number,Uf=a.Object,Vf=a.RegExp,Wf=a.String,Xf=a.TypeError,Yf=Of.prototype,Zf=Uf.prototype,$f=Wf.prototype,_f=Rf.prototype.toString,ag=Zf.hasOwnProperty,bg=0,cg=Zf.toString,dg=cb._,eg=Vf("^" + _f.call(ag).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?") + "$"),fg=a.ArrayBuffer,gg=a.clearTimeout,hg=a.parseFloat,ig=Sf.pow,jg=Zf.propertyIsEnumerable,kg=Sc(a,"Set"),lg=a.setTimeout,mg=Yf.splice,ng=a.Uint8Array,og=Sc(a,"WeakMap"),pg=Sf.ceil,qg=Sc(Uf,"create"),rg=Sf.floor,sg=Sc(Of,"isArray"),tg=a.isFinite,ug=Sc(Uf,"keys"),vg=Sf.max,wg=Sf.min,xg=Sc(Pf,"now"),yg=a.parseInt,zg=Sf.random,Ag=Tf.NEGATIVE_INFINITY,Bg=Tf.POSITIVE_INFINITY,Cg=4294967295,Dg=Cg - 1,Eg=Cg >>> 1,Fg=9007199254740991,Gg=og && new og(),Hg={};b.support = {};b.templateSettings = {escape:va,evaluate:wa,interpolate:xa,variable:"",imports:{_:b}};var Ig=(function(){function a(){}return function(b){if(He(b)){a.prototype = b;var c=new a();a.prototype = z;}return c || {};};})(),Jg=lc(Fb),Kg=lc(Gb,!0),Lg=mc(),Mg=mc(!0),Ng=Gg?function(a,b){return Gg.set(a,b),a;}:Bf,Og=Gg?function(a){return Gg.get(a);}:Gf,Pg=Rb("length"),Qg=(function(){var a=0,b=0;return function(c,d){var e=oh(),f=N - (e - b);if((b = e,f > 0)){if(++a >= M)return c;}else a = 0;return Ng(c,d);};})(),Rg=qe(function(a,b){return r(a) && Yc(a)?xb(a,Db(b,!1,!0)):[];}),Sg=vc(),Tg=vc(!0),Ug=qe(function(a){for(var b=a.length,c=b,d=Of(l),e=Qc(),g=e == f,h=[];c--;) {var i=a[c] = Yc(i = a[c])?i:[];d[c] = g && i.length >= 120?oc(c && i):null;}var j=a[0],k=-1,l=j?j.length:0,m=d[0];a: for(;++k < l;) {if((i = j[k],(m?Za(m,i):e(h,i,0)) < 0)){for(var c=b;--c;) {var n=d[c];if((n?Za(n,i):e(a[c],i,0)) < 0)continue a;}m && m.push(i),h.push(i);}}return h;}),Vg=qe(function(a,b){b = Db(b);var c=sb(a,b);return Tb(a,b.sort(d)),c;}),Wg=Jc(),Xg=Jc(!0),Yg=qe(function(a){return _b(Db(a,!1,!0));}),Zg=qe(function(a,b){return Yc(a)?xb(a,b):[];}),$g=qe(Kd),_g=qe(function(a){var b=a.length,c=b > 2?a[b - 2]:z,d=b > 1?a[b - 1]:z;return b > 2 && "function" == typeof c?b -= 2:(c = b > 1 && "function" == typeof d?(--b,d):z,d = z),a.length = b,Ld(a,c,d);}),ah=qe(function(a){return a = Db(a),this.thru(function(b){return _a(Ch(b)?b:[kd(b)],a);});}),bh=qe(function(a,b){return sb(a,Db(b));}),ch=jc(function(a,b,c){ag.call(a,c)?++a[c]:a[c] = 1;}),dh=uc(Jg),eh=uc(Kg,!0),fh=yc(bb,Jg),gh=yc(eb,Kg),hh=jc(function(a,b,c){ag.call(a,c)?a[c].push(b):a[c] = [b];}),ih=jc(function(a,b,c){a[c] = b;}),jh=qe(function(a,b,c){var d=-1,e="function" == typeof b,f=_c(b),g=Yc(a)?Of(a.length):[];return Jg(a,function(a){var h=e?b:f && null != a?a[b]:z;g[++d] = h?h.apply(a,c):Xc(a,b,c);}),g;}),kh=jc(function(a,b,c){a[c?0:1].push(b);},function(){return [[],[]];}),lh=Ec(kb,Jg),mh=Ec(lb,Kg),nh=qe(function(a,b){if(null == a)return [];var c=b[2];return c && $c(b[0],b[1],c) && (b.length = 1),Zb(a,Db(b),[]);}),oh=xg || function(){return new Pf().getTime();},ph=qe(function(a,b,c){var d=B;if(c.length){var e=t(c,ph.placeholder);d |= G;}return Kc(a,d,b,c,e);}),qh=qe(function(a,b){b = b.length?Db(b):Xe(a);for(var c=-1,d=b.length;++c < d;) {var e=b[c];a[e] = Kc(a[e],B,a);}return a;}),rh=qe(function(a,b,c){var d=B | C;if(c.length){var e=t(c,rh.placeholder);d |= G;}return Kc(b,d,a,c,e);}),sh=rc(E),th=rc(F),uh=qe(function(a,b){return wb(a,1,b);}),vh=qe(function(a,b,c){return wb(a,b,c);}),wh=xc(),xh=xc(!0),yh=qe(function(a,b){if((b = Db(b),"function" != typeof a || !fb(b,g)))throw new Xf(R);var c=b.length;return qe(function(d){for(var e=wg(d.length,c);e--;) {d[e] = b[e](d[e]);}return a.apply(this,d);});}),zh=Dc(G),Ah=Dc(H),Bh=qe(function(a,b){return Kc(a,J,z,z,z,Db(b));}),Ch=sg || function(a){return r(a) && bd(a.length) && cg.call(a) == U;},Dh=kc(Pb),Eh=kc(function(a,b,c){return c?qb(a,b,c):rb(a,b);}),Fh=sc(Eh,ob),Gh=sc(Dh,ed),Hh=wc(Fb),Ih=wc(Gb),Jh=zc(Lg),Kh=zc(Mg),Lh=Ac(Fb),Mh=Ac(Gb),Nh=ug?function(a){var b=null == a?z:a.constructor;return "function" == typeof b && b.prototype === a || "function" != typeof a && Yc(a)?id(a):He(a)?ug(a):[];}:id,Oh=Bc(!0),Ph=Bc(),Qh=qe(function(a,b){if(null == a)return {};if("function" != typeof b[0]){var b=ib(Db(b),Wf);return fd(a,xb(_e(a),b));}var c=fc(b[0],b[1],3);return gd(a,function(a,b,d){return !c(a,b,d);});}),Rh=qe(function(a,b){return null == a?{}:"function" == typeof b[0]?gd(a,fc(b[0],b[1],3)):fd(a,Db(b));}),Sh=pc(function(a,b,c){return b = b.toLowerCase(),a + (c?b.charAt(0).toUpperCase() + b.slice(1):b);}),Th=pc(function(a,b,c){return a + (c?"-":"") + b.toLowerCase();}),Uh=Cc(),Vh=Cc(!0),Wh=pc(function(a,b,c){return a + (c?"_":"") + b.toLowerCase();}),Xh=pc(function(a,b,c){return a + (c?" ":"") + (b.charAt(0).toUpperCase() + b.slice(1));}),Yh=qe(function(a,b){try{return a.apply(z,b);}catch(c) {return Ee(c)?c:new Qf(c);}}),Zh=qe(function(a,b){return function(c){return Xc(c,a,b);};}),$h=qe(function(a,b){return function(c){return Xc(a,c,b);};}),_h=Ic("ceil"),ai=Ic("floor"),bi=tc(we,Ag),ci=tc(Se,Bg),di=Ic("round");return b.prototype = c.prototype,s.prototype = Ig(c.prototype),s.prototype.constructor = s,Z.prototype = Ig(c.prototype),Z.prototype.constructor = Z,Ta.prototype["delete"] = Ua,Ta.prototype.get = Va,Ta.prototype.has = Wa,Ta.prototype.set = Xa,Ya.prototype.push = $a,ne.Cache = Ta,b.after = je,b.ary = ke,b.assign = Eh,b.at = bh,b.before = le,b.bind = ph,b.bindAll = qh,b.bindKey = rh,b.callback = zf,b.chain = Od,b.chunk = nd,b.compact = od,b.constant = Af,b.countBy = ch,b.create = We,b.curry = sh,b.curryRight = th,b.debounce = me,b.defaults = Fh,b.defaultsDeep = Gh,b.defer = uh,b.delay = vh,b.difference = Rg,b.drop = pd,b.dropRight = qd,b.dropRightWhile = rd,b.dropWhile = sd,b.fill = td,b.filter = Yd,b.flatten = vd,b.flattenDeep = wd,b.flow = wh,b.flowRight = xh,b.forEach = fh,b.forEachRight = gh,b.forIn = Jh,b.forInRight = Kh,b.forOwn = Lh,b.forOwnRight = Mh,b.functions = Xe,b.groupBy = hh,b.indexBy = ih,b.initial = yd,b.intersection = Ug,b.invert = $e,b.invoke = jh,b.keys = Nh,b.keysIn = _e,b.map = _d,b.mapKeys = Oh,b.mapValues = Ph,b.matches = Cf,b.matchesProperty = Df,b.memoize = ne,b.merge = Dh,b.method = Zh,b.methodOf = $h,b.mixin = Ef,b.modArgs = yh,b.negate = oe,b.omit = Qh,b.once = pe,b.pairs = af,b.partial = zh,b.partialRight = Ah,b.partition = kh,b.pick = Rh,b.pluck = ae,b.property = Hf,b.propertyOf = If,b.pull = Bd,b.pullAt = Vg,b.range = Jf,b.rearg = Bh,b.reject = be,b.remove = Cd,b.rest = Dd,b.restParam = qe,b.set = cf,b.shuffle = de,b.slice = Ed,b.sortBy = ge,b.sortByAll = nh,b.sortByOrder = he,b.spread = re,b.take = Fd,b.takeRight = Gd,b.takeRightWhile = Hd,b.takeWhile = Id,b.tap = Pd,b.throttle = se,b.thru = Qd,b.times = Kf,b.toArray = Ue,b.toPlainObject = Ve,b.transform = df,b.union = Yg,b.uniq = Jd,b.unzip = Kd,b.unzipWith = Ld,b.values = ef,b.valuesIn = ff,b.where = ie,b.without = Zg,b.wrap = te,b.xor = Md,b.zip = $g,b.zipObject = Nd,b.zipWith = _g,b.backflow = xh,b.collect = _d,b.compose = xh,b.each = fh,b.eachRight = gh,b.extend = Eh,b.iteratee = zf,b.methods = Xe,b.object = Nd,b.select = Yd,b.tail = Dd,b.unique = Jd,Ef(b,b),b.add = Mf,b.attempt = Yh,b.camelCase = Sh,b.capitalize = jf,b.ceil = _h,b.clone = ue,b.cloneDeep = ve,b.deburr = kf,b.endsWith = lf,b.escape = mf,b.escapeRegExp = nf,b.every = Xd,b.find = dh,b.findIndex = Sg,b.findKey = Hh,b.findLast = eh,b.findLastIndex = Tg,b.findLastKey = Ih,b.findWhere = Zd,b.first = ud,b.floor = ai,b.get = Ye,b.gt = we,b.gte = xe,b.has = Ze,b.identity = Bf,b.includes = $d,b.indexOf = xd,b.inRange = gf,b.isArguments = ye,b.isArray = Ch,b.isBoolean = ze,b.isDate = Ae,b.isElement = Be,b.isEmpty = Ce,b.isEqual = De,b.isError = Ee,b.isFinite = Fe,b.isFunction = Ge,b.isMatch = Ie,b.isNaN = Je,b.isNative = Ke,b.isNull = Le,b.isNumber = Me,b.isObject = He,b.isPlainObject = Ne,b.isRegExp = Oe,b.isString = Pe,b.isTypedArray = Qe,b.isUndefined = Re,b.kebabCase = Th,b.last = zd,b.lastIndexOf = Ad,b.lt = Se,b.lte = Te,b.max = bi,b.min = ci,b.noConflict = Ff,b.noop = Gf,b.now = oh,b.pad = of,b.padLeft = Uh,b.padRight = Vh,b.parseInt = pf,b.random = hf,b.reduce = lh,b.reduceRight = mh,b.repeat = qf,b.result = bf,b.round = di,b.runInContext = y,b.size = ee,b.snakeCase = Wh,b.some = fe,b.sortedIndex = Wg,b.sortedLastIndex = Xg,b.startCase = Xh,b.startsWith = rf,b.sum = Nf,b.template = sf,b.trim = tf,b.trimLeft = uf,b.trimRight = vf,b.trunc = wf,b.unescape = xf,b.uniqueId = Lf,b.words = yf,b.all = Xd,b.any = fe,b.contains = $d,b.eq = De,b.detect = dh,b.foldl = lh,b.foldr = mh,b.head = ud,b.include = $d,b.inject = lh,Ef(b,(function(){var a={};return Fb(b,function(c,d){b.prototype[d] || (a[d] = c);}),a;})(),!1),b.sample = ce,b.prototype.sample = function(a){return this.__chain__ || null != a?this.thru(function(b){return ce(b,a);}):ce(this.value());},b.VERSION = A,bb(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){b[a].placeholder = b;}),bb(["drop","take"],function(a,b){Z.prototype[a] = function(c){var d=this.__filtered__;if(d && !b)return new Z(this);c = null == c?1:vg(rg(c) || 0,0);var e=this.clone();return d?e.__takeCount__ = wg(e.__takeCount__,c):e.__views__.push({size:c,type:a + (e.__dir__ < 0?"Right":"")}),e;},Z.prototype[a + "Right"] = function(b){return this.reverse()[a](b).reverse();};}),bb(["filter","map","takeWhile"],function(a,b){var c=b + 1,d=c != Q;Z.prototype[a] = function(a,b){var e=this.clone();return e.__iteratees__.push({iteratee:Oc(a,b,1),type:c}),e.__filtered__ = e.__filtered__ || d,e;};}),bb(["first","last"],function(a,b){var c="take" + (b?"Right":"");Z.prototype[a] = function(){return this[c](1).value()[0];};}),bb(["initial","rest"],function(a,b){var c="drop" + (b?"":"Right");Z.prototype[a] = function(){return this.__filtered__?new Z(this):this[c](1);};}),bb(["pluck","where"],function(a,b){var c=b?"filter":"map",d=b?Nb:Hf;Z.prototype[a] = function(a){return this[c](d(a));};}),Z.prototype.compact = function(){return this.filter(Bf);},Z.prototype.reject = function(a,b){return a = Oc(a,b,1),this.filter(function(b){return !a(b);});},Z.prototype.slice = function(a,b){a = null == a?0:+a || 0;var c=this;return c.__filtered__ && (a > 0 || 0 > b)?new Z(c):(0 > a?c = c.takeRight(-a):a && (c = c.drop(a)),b !== z && (b = +b || 0,c = 0 > b?c.dropRight(-b):c.take(b - a)),c);},Z.prototype.takeRightWhile = function(a,b){return this.reverse().takeWhile(a,b).reverse();},Z.prototype.toArray = function(){return this.take(Bg);},Fb(Z.prototype,function(a,c){var d=/^(?:filter|map|reject)|While$/.test(c),e=/^(?:first|last)$/.test(c),f=b[e?"take" + ("last" == c?"Right":""):c];f && (b.prototype[c] = function(){var b=e?[1]:arguments,c=this.__chain__,g=this.__wrapped__,h=!!this.__actions__.length,i=g instanceof Z,j=b[0],k=i || Ch(g);k && d && "function" == typeof j && 1 != j.length && (i = k = !1);var l=function l(a){return e && c?f(a,1)[0]:f.apply(z,jb([a],b));},m={func:Qd,args:[l],thisArg:z},n=i && !h;if(e && !c)return n?(g = g.clone(),g.__actions__.push(m),a.call(g)):f.call(z,this.value())[0];if(!e && k){g = n?g:new Z(this);var o=a.apply(g,b);return o.__actions__.push(m),new s(o,c);}return this.thru(l);});}),bb(["join","pop","push","replace","shift","sort","splice","split","unshift"],function(a){var c=(/^(?:replace|split)$/.test(a)?$f:Yf)[a],d=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(a);b.prototype[a] = function(){var a=arguments;return e && !this.__chain__?c.apply(this.value(),a):this[d](function(b){return c.apply(b,a);});};}),Fb(Z.prototype,function(a,c){var d=b[c];if(d){var e=d.name,f=Hg[e] || (Hg[e] = []);f.push({name:c,func:d});}}),Hg[Fc(z,C).name] = [{name:"wrapper",func:z}],Z.prototype.clone = ba,Z.prototype.reverse = da,Z.prototype.value = Sa,b.prototype.chain = Rd,b.prototype.commit = Sd,b.prototype.concat = ah,b.prototype.plant = Td,b.prototype.reverse = Ud,b.prototype.toString = Vd,b.prototype.run = b.prototype.toJSON = b.prototype.valueOf = b.prototype.value = Wd,b.prototype.collect = b.prototype.map,b.prototype.head = b.prototype.first,b.prototype.select = b.prototype.filter,b.prototype.tail = b.prototype.rest,b;}var z,A="3.10.1",B=1,C=2,D=4,E=8,F=16,G=32,H=64,I=128,J=256,K=30,L="...",M=150,N=16,O=200,P=1,Q=2,R="Expected a function",S="__lodash_placeholder__",T="[object Arguments]",U="[object Array]",V="[object Boolean]",W="[object Date]",X="[object Error]",Y="[object Function]",Z="[object Map]",$="[object Number]",_="[object Object]",aa="[object RegExp]",ba="[object Set]",ca="[object String]",da="[object WeakMap]",ea="[object ArrayBuffer]",fa="[object Float32Array]",ga="[object Float64Array]",ha="[object Int8Array]",ia="[object Int16Array]",ja="[object Int32Array]",ka="[object Uint8Array]",la="[object Uint8ClampedArray]",ma="[object Uint16Array]",na="[object Uint32Array]",oa=/\b__p \+= '';/g,pa=/\b(__p \+=) '' \+/g,qa=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ra=/&(?:amp|lt|gt|quot|#39|#96);/g,sa=/[&<>"'`]/g,ta=RegExp(ra.source),ua=RegExp(sa.source),va=/<%-([\s\S]+?)%>/g,wa=/<%([\s\S]+?)%>/g,xa=/<%=([\s\S]+?)%>/g,ya=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,za=/^\w*$/,Aa=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,Ba=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,Ca=RegExp(Ba.source),Da=/[\u0300-\u036f\ufe20-\ufe23]/g,Ea=/\\(\\)?/g,Fa=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ga=/\w*$/,Ha=/^0[xX]/,Ia=/^\[object .+?Constructor\]$/,Ja=/^\d+$/,Ka=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,La=/($^)/,Ma=/['\n\r\u2028\u2029\\]/g,Na=(function(){var a="[A-Z\\xc0-\\xd6\\xd8-\\xde]",b="[a-z\\xdf-\\xf6\\xf8-\\xff]+";return RegExp(a + "+(?=" + a + b + ")|" + a + "?" + b + "|" + a + "+|[0-9]+","g");})(),Oa=["Array","ArrayBuffer","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Math","Number","Object","RegExp","Set","String","_","clearTimeout","isFinite","parseFloat","parseInt","setTimeout","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap"],Pa=-1,Qa={};Qa[fa] = Qa[ga] = Qa[ha] = Qa[ia] = Qa[ja] = Qa[ka] = Qa[la] = Qa[ma] = Qa[na] = !0,Qa[T] = Qa[U] = Qa[ea] = Qa[V] = Qa[W] = Qa[X] = Qa[Y] = Qa[Z] = Qa[$] = Qa[_] = Qa[aa] = Qa[ba] = Qa[ca] = Qa[da] = !1;var Ra={};Ra[T] = Ra[U] = Ra[ea] = Ra[V] = Ra[W] = Ra[fa] = Ra[ga] = Ra[ha] = Ra[ia] = Ra[ja] = Ra[$] = Ra[_] = Ra[aa] = Ra[ca] = Ra[ka] = Ra[la] = Ra[ma] = Ra[na] = !0,Ra[X] = Ra[Y] = Ra[Z] = Ra[ba] = Ra[da] = !1;var Sa={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss"},Ta={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ua={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},Va={"function":!0,object:!0},Wa={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Xa={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ya=Va[typeof c === "undefined"?"undefined":_typeof(c)] && c && !c.nodeType && c,Za=Va[typeof b === "undefined"?"undefined":_typeof(b)] && b && !b.nodeType && b,$a=Ya && Za && "object" == (typeof a === "undefined"?"undefined":_typeof(a)) && a && a.Object && a,_a=Va[typeof self === "undefined"?"undefined":_typeof(self)] && self && self.Object && self,ab=Va[typeof window === "undefined"?"undefined":_typeof(window)] && window && window.Object && window,bb=Za && Za.exports === Ya && Ya,cb=$a || ab !== (this && this.window) && ab || _a || this,db=y();"function" == typeof define && "object" == _typeof(define.amd) && define.amd?(cb._ = db,define(function(){return db;})):Ya && Za?bb?(Za.exports = db)._ = db:Ya._ = db:cb._ = db;}).call(this);}).call(this,"undefined" != typeof global?global:"undefined" != typeof self?self:"undefined" != typeof window?window:{});},{}],3:[function(a,b,c){"use strict";b.exports = a("react/lib/ReactDOM");},{"react/lib/ReactDOM":38}],4:[function(a,b,c){"use strict";var d=a("./ReactMount"),e=a("./findDOMNode"),f=a("fbjs/lib/focusNode"),g={componentDidMount:function componentDidMount(){this.props.autoFocus && f(e(this));}},h={Mixin:g,focusDOMComponent:function focusDOMComponent(){f(d.getNode(this._rootNodeID));}};b.exports = h;},{"./ReactMount":68,"./findDOMNode":111,"fbjs/lib/focusNode":141}],5:[function(a,b,c){"use strict";function d(){var a=window.opera;return "object" == (typeof a === "undefined"?"undefined":_typeof(a)) && "function" == typeof a.version && parseInt(a.version(),10) <= 12;}function e(a){return (a.ctrlKey || a.altKey || a.metaKey) && !(a.ctrlKey && a.altKey);}function f(a){switch(a){case C.topCompositionStart:return D.compositionStart;case C.topCompositionEnd:return D.compositionEnd;case C.topCompositionUpdate:return D.compositionUpdate;}}function g(a,b){return a === C.topKeyDown && b.keyCode === v;}function h(a,b){switch(a){case C.topKeyUp:return -1 !== u.indexOf(b.keyCode);case C.topKeyDown:return b.keyCode !== v;case C.topKeyPress:case C.topMouseDown:case C.topBlur:return !0;default:return !1;}}function i(a){var b=a.detail;return "object" == (typeof b === "undefined"?"undefined":_typeof(b)) && "data" in b?b.data:null;}function j(a,b,c,d,e){var j,k;if((w?j = f(a):F?h(a,d) && (j = D.compositionEnd):g(a,d) && (j = D.compositionStart),!j))return null;z && (F || j !== D.compositionStart?j === D.compositionEnd && F && (k = F.getData()):F = q.getPooled(b));var l=r.getPooled(j,c,d,e);if(k)l.data = k;else {var m=i(d);null !== m && (l.data = m);}return o.accumulateTwoPhaseDispatches(l),l;}function k(a,b){switch(a){case C.topCompositionEnd:return i(b);case C.topKeyPress:var c=b.which;return c !== A?null:(E = !0,B);case C.topTextInput:var d=b.data;return d === B && E?null:d;default:return null;}}function l(a,b){if(F){if(a === C.topCompositionEnd || h(a,b)){var c=F.getData();return q.release(F),F = null,c;}return null;}switch(a){case C.topPaste:return null;case C.topKeyPress:return b.which && !e(b)?String.fromCharCode(b.which):null;case C.topCompositionEnd:return z?null:b.data;default:return null;}}function m(a,b,c,d,e){var f;if((f = y?k(a,d):l(a,d),!f))return null;var g=s.getPooled(D.beforeInput,c,d,e);return g.data = f,o.accumulateTwoPhaseDispatches(g),g;}var n=a("./EventConstants"),o=a("./EventPropagators"),p=a("fbjs/lib/ExecutionEnvironment"),q=a("./FallbackCompositionState"),r=a("./SyntheticCompositionEvent"),s=a("./SyntheticInputEvent"),t=a("fbjs/lib/keyOf"),u=[9,13,27,32],v=229,w=p.canUseDOM && "CompositionEvent" in window,x=null;p.canUseDOM && "documentMode" in document && (x = document.documentMode);var y=p.canUseDOM && "TextEvent" in window && !x && !d(),z=p.canUseDOM && (!w || x && x > 8 && 11 >= x),A=32,B=String.fromCharCode(A),C=n.topLevelTypes,D={beforeInput:{phasedRegistrationNames:{bubbled:t({onBeforeInput:null}),captured:t({onBeforeInputCapture:null})},dependencies:[C.topCompositionEnd,C.topKeyPress,C.topTextInput,C.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:t({onCompositionEnd:null}),captured:t({onCompositionEndCapture:null})},dependencies:[C.topBlur,C.topCompositionEnd,C.topKeyDown,C.topKeyPress,C.topKeyUp,C.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:t({onCompositionStart:null}),captured:t({onCompositionStartCapture:null})},dependencies:[C.topBlur,C.topCompositionStart,C.topKeyDown,C.topKeyPress,C.topKeyUp,C.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:t({onCompositionUpdate:null}),captured:t({onCompositionUpdateCapture:null})},dependencies:[C.topBlur,C.topCompositionUpdate,C.topKeyDown,C.topKeyPress,C.topKeyUp,C.topMouseDown]}},E=!1,F=null,G={eventTypes:D,extractEvents:function extractEvents(a,b,c,d,e){return [j(a,b,c,d,e),m(a,b,c,d,e)];}};b.exports = G;},{"./EventConstants":17,"./EventPropagators":21,"./FallbackCompositionState":22,"./SyntheticCompositionEvent":93,"./SyntheticInputEvent":97,"fbjs/lib/ExecutionEnvironment":133,"fbjs/lib/keyOf":151}],6:[function(a,b,c){"use strict";function d(a,b){return a + b.charAt(0).toUpperCase() + b.substring(1);}var e={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0},f=["Webkit","ms","Moz","O"];Object.keys(e).forEach(function(a){f.forEach(function(b){e[d(b,a)] = e[a];});});var g={background:{backgroundAttachment:!0,backgroundColor:!0,backgroundImage:!0,backgroundPositionX:!0,backgroundPositionY:!0,backgroundRepeat:!0},backgroundPosition:{backgroundPositionX:!0,backgroundPositionY:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0},outline:{outlineWidth:!0,outlineStyle:!0,outlineColor:!0}},h={isUnitlessNumber:e,shorthandPropertyExpansions:g};b.exports = h;},{}],7:[function(a,b,c){(function(c){"use strict";var d=a("./CSSProperty"),e=a("fbjs/lib/ExecutionEnvironment"),f=a("./ReactPerf"),g=a("fbjs/lib/camelizeStyleName"),h=a("./dangerousStyleValue"),i=a("fbjs/lib/hyphenateStyleName"),j=a("fbjs/lib/memoizeStringOnly"),k=a("fbjs/lib/warning"),l=j(function(a){return i(a);}),m=!1,n="cssFloat";if(e.canUseDOM){var o=document.createElement("div").style;try{o.font = "";}catch(p) {m = !0;}void 0 === document.documentElement.style.cssFloat && (n = "styleFloat");}if("production" !== c.env.NODE_ENV)var q=/^(?:webkit|moz|o)[A-Z]/,r=/;\s*$/,s={},t={},u=function u(a){s.hasOwnProperty(a) && s[a] || (s[a] = !0,"production" !== c.env.NODE_ENV?k(!1,"Unsupported style property %s. Did you mean %s?",a,g(a)):void 0);},v=function v(a){s.hasOwnProperty(a) && s[a] || (s[a] = !0,"production" !== c.env.NODE_ENV?k(!1,"Unsupported vendor-prefixed style property %s. Did you mean %s?",a,a.charAt(0).toUpperCase() + a.slice(1)):void 0);},w=function w(a,b){t.hasOwnProperty(b) && t[b] || (t[b] = !0,"production" !== c.env.NODE_ENV?k(!1,'Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.',a,b.replace(r,"")):void 0);},x=function x(a,b){a.indexOf("-") > -1?u(a):q.test(a)?v(a):r.test(b) && w(a,b);};var y={createMarkupForStyles:function createMarkupForStyles(a){var b="";for(var d in a) {if(a.hasOwnProperty(d)){var e=a[d];"production" !== c.env.NODE_ENV && x(d,e),null != e && (b += l(d) + ":",b += h(d,e) + ";");}}return b || null;},setValueForStyles:function setValueForStyles(a,b){var e=a.style;for(var f in b) {if(b.hasOwnProperty(f)){"production" !== c.env.NODE_ENV && x(f,b[f]);var g=h(f,b[f]);if(("float" === f && (f = n),g))e[f] = g;else {var i=m && d.shorthandPropertyExpansions[f];if(i)for(var j in i) {e[j] = "";}else e[f] = "";}}}}};f.measureMethods(y,"CSSPropertyOperations",{setValueForStyles:"setValueForStyles"}),b.exports = y;}).call(this,a("_process"));},{"./CSSProperty":6,"./ReactPerf":74,"./dangerousStyleValue":108,_process:1,"fbjs/lib/ExecutionEnvironment":133,"fbjs/lib/camelizeStyleName":135,"fbjs/lib/hyphenateStyleName":146,"fbjs/lib/memoizeStringOnly":153,"fbjs/lib/warning":158}],8:[function(a,b,c){(function(c){"use strict";function d(){this._callbacks = null,this._contexts = null;}var e=a("./PooledClass"),f=a("./Object.assign"),g=a("fbjs/lib/invariant");f(d.prototype,{enqueue:function enqueue(a,b){this._callbacks = this._callbacks || [],this._contexts = this._contexts || [],this._callbacks.push(a),this._contexts.push(b);},notifyAll:function notifyAll(){var a=this._callbacks,b=this._contexts;if(a){a.length !== b.length?"production" !== c.env.NODE_ENV?g(!1,"Mismatched list of contexts in callback queue"):g(!1):void 0,this._callbacks = null,this._contexts = null;for(var d=0;d < a.length;d++) {a[d].call(b[d]);}a.length = 0,b.length = 0;}},reset:function reset(){this._callbacks = null,this._contexts = null;},destructor:function destructor(){this.reset();}}),e.addPoolingTo(d),b.exports = d;}).call(this,a("_process"));},{"./Object.assign":25,"./PooledClass":26,_process:1,"fbjs/lib/invariant":147}],9:[function(a,b,c){"use strict";function d(a){var b=a.nodeName && a.nodeName.toLowerCase();return "select" === b || "input" === b && "file" === a.type;}function e(a){var b=x.getPooled(D.change,F,a,y(a));u.accumulateTwoPhaseDispatches(b),w.batchedUpdates(f,b);}function f(a){t.enqueueEvents(a),t.processEventQueue(!1);}function g(a,b){E = a,F = b,E.attachEvent("onchange",e);}function h(){E && (E.detachEvent("onchange",e),E = null,F = null);}function i(a,b,c){return a === C.topChange?c:void 0;}function j(a,b,c){a === C.topFocus?(h(),g(b,c)):a === C.topBlur && h();}function k(a,b){E = a,F = b,G = a.value,H = Object.getOwnPropertyDescriptor(a.constructor.prototype,"value"),Object.defineProperty(E,"value",K),E.attachEvent("onpropertychange",m);}function l(){E && (delete E.value,E.detachEvent("onpropertychange",m),E = null,F = null,G = null,H = null);}function m(a){if("value" === a.propertyName){var b=a.srcElement.value;b !== G && (G = b,e(a));}}function n(a,b,c){return a === C.topInput?c:void 0;}function o(a,b,c){a === C.topFocus?(l(),k(b,c)):a === C.topBlur && l();}function p(a,b,c){return a !== C.topSelectionChange && a !== C.topKeyUp && a !== C.topKeyDown || !E || E.value === G?void 0:(G = E.value,F);}function q(a){return a.nodeName && "input" === a.nodeName.toLowerCase() && ("checkbox" === a.type || "radio" === a.type);}function r(a,b,c){return a === C.topClick?c:void 0;}var s=a("./EventConstants"),t=a("./EventPluginHub"),u=a("./EventPropagators"),v=a("fbjs/lib/ExecutionEnvironment"),w=a("./ReactUpdates"),x=a("./SyntheticEvent"),y=a("./getEventTarget"),z=a("./isEventSupported"),A=a("./isTextInputElement"),B=a("fbjs/lib/keyOf"),C=s.topLevelTypes,D={change:{phasedRegistrationNames:{bubbled:B({onChange:null}),captured:B({onChangeCapture:null})},dependencies:[C.topBlur,C.topChange,C.topClick,C.topFocus,C.topInput,C.topKeyDown,C.topKeyUp,C.topSelectionChange]}},E=null,F=null,G=null,H=null,I=!1;v.canUseDOM && (I = z("change") && (!("documentMode" in document) || document.documentMode > 8));var J=!1;v.canUseDOM && (J = z("input") && (!("documentMode" in document) || document.documentMode > 9));var K={get:function get(){return H.get.call(this);},set:function set(a){G = "" + a,H.set.call(this,a);}},L={eventTypes:D,extractEvents:function extractEvents(a,b,c,e,f){var g,h;if((d(b)?I?g = i:h = j:A(b)?J?g = n:(g = p,h = o):q(b) && (g = r),g)){var k=g(a,b,c);if(k){var l=x.getPooled(D.change,k,e,f);return l.type = "change",u.accumulateTwoPhaseDispatches(l),l;}}h && h(a,b,c);}};b.exports = L;},{"./EventConstants":17,"./EventPluginHub":18,"./EventPropagators":21,"./ReactUpdates":86,"./SyntheticEvent":95,"./getEventTarget":117,"./isEventSupported":122,"./isTextInputElement":123,"fbjs/lib/ExecutionEnvironment":133,"fbjs/lib/keyOf":151}],10:[function(a,b,c){"use strict";var d=0,e={createReactRootIndex:function createReactRootIndex(){return d++;}};b.exports = e;},{}],11:[function(a,b,c){(function(c){"use strict";function d(a,b,c){var d=c >= a.childNodes.length?null:a.childNodes.item(c);a.insertBefore(b,d);}var e=a("./Danger"),f=a("./ReactMultiChildUpdateTypes"),g=a("./ReactPerf"),h=a("./setInnerHTML"),i=a("./setTextContent"),j=a("fbjs/lib/invariant"),k={dangerouslyReplaceNodeWithMarkup:e.dangerouslyReplaceNodeWithMarkup,updateTextContent:i,processUpdates:function processUpdates(a,b){for(var g,k=null,l=null,m=0;m < a.length;m++) {if((g = a[m],g.type === f.MOVE_EXISTING || g.type === f.REMOVE_NODE)){var n=g.fromIndex,o=g.parentNode.childNodes[n],p=g.parentID;o?void 0:"production" !== c.env.NODE_ENV?j(!1,"processUpdates(): Unable to find child %s of element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.",n,p):j(!1),k = k || {},k[p] = k[p] || [],k[p][n] = o,l = l || [],l.push(o);}}var q;if((q = b.length && "string" == typeof b[0]?e.dangerouslyRenderMarkup(b):b,l))for(var r=0;r < l.length;r++) {l[r].parentNode.removeChild(l[r]);}for(var s=0;s < a.length;s++) {switch((g = a[s],g.type)){case f.INSERT_MARKUP:d(g.parentNode,q[g.markupIndex],g.toIndex);break;case f.MOVE_EXISTING:d(g.parentNode,k[g.parentID][g.fromIndex],g.toIndex);break;case f.SET_MARKUP:h(g.parentNode,g.content);break;case f.TEXT_CONTENT:i(g.parentNode,g.content);break;case f.REMOVE_NODE:}}}};g.measureMethods(k,"DOMChildrenOperations",{updateTextContent:"updateTextContent"}),b.exports = k;}).call(this,a("_process"));},{"./Danger":14,"./ReactMultiChildUpdateTypes":70,"./ReactPerf":74,"./setInnerHTML":127,"./setTextContent":128,_process:1,"fbjs/lib/invariant":147}],12:[function(a,b,c){(function(c){"use strict";function d(a,b){return (a & b) === b;}var e=a("fbjs/lib/invariant"),f={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function injectDOMPropertyConfig(a){var b=f,g=a.Properties || {},i=a.DOMAttributeNamespaces || {},j=a.DOMAttributeNames || {},k=a.DOMPropertyNames || {},l=a.DOMMutationMethods || {};a.isCustomAttribute && h._isCustomAttributeFunctions.push(a.isCustomAttribute);for(var m in g) {h.properties.hasOwnProperty(m)?"production" !== c.env.NODE_ENV?e(!1,"injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",m):e(!1):void 0;var n=m.toLowerCase(),o=g[m],p={attributeName:n,attributeNamespace:null,propertyName:m,mutationMethod:null,mustUseAttribute:d(o,b.MUST_USE_ATTRIBUTE),mustUseProperty:d(o,b.MUST_USE_PROPERTY),hasSideEffects:d(o,b.HAS_SIDE_EFFECTS),hasBooleanValue:d(o,b.HAS_BOOLEAN_VALUE),hasNumericValue:d(o,b.HAS_NUMERIC_VALUE),hasPositiveNumericValue:d(o,b.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:d(o,b.HAS_OVERLOADED_BOOLEAN_VALUE)};if((p.mustUseAttribute && p.mustUseProperty?"production" !== c.env.NODE_ENV?e(!1,"DOMProperty: Cannot require using both attribute and property: %s",m):e(!1):void 0,!p.mustUseProperty && p.hasSideEffects?"production" !== c.env.NODE_ENV?e(!1,"DOMProperty: Properties that have side effects must use property: %s",m):e(!1):void 0,p.hasBooleanValue + p.hasNumericValue + p.hasOverloadedBooleanValue <= 1?void 0:"production" !== c.env.NODE_ENV?e(!1,"DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s",m):e(!1),"production" !== c.env.NODE_ENV && (h.getPossibleStandardName[n] = m),j.hasOwnProperty(m))){var q=j[m];p.attributeName = q,"production" !== c.env.NODE_ENV && (h.getPossibleStandardName[q] = m);}i.hasOwnProperty(m) && (p.attributeNamespace = i[m]),k.hasOwnProperty(m) && (p.propertyName = k[m]),l.hasOwnProperty(m) && (p.mutationMethod = l[m]),h.properties[m] = p;}}},g={},h={ID_ATTRIBUTE_NAME:"data-reactid",properties:{},getPossibleStandardName:"production" !== c.env.NODE_ENV?{}:null,_isCustomAttributeFunctions:[],isCustomAttribute:function isCustomAttribute(a){for(var b=0;b < h._isCustomAttributeFunctions.length;b++) {var c=h._isCustomAttributeFunctions[b];if(c(a))return !0;}return !1;},getDefaultValueForProperty:function getDefaultValueForProperty(a,b){var c,d=g[a];return d || (g[a] = d = {}),b in d || (c = document.createElement(a),d[b] = c[b]),d[b];},injection:f};b.exports = h;}).call(this,a("_process"));},{_process:1,"fbjs/lib/invariant":147}],13:[function(a,b,c){(function(c){"use strict";function d(a){return l.hasOwnProperty(a)?!0:k.hasOwnProperty(a)?!1:j.test(a)?(l[a] = !0,!0):(k[a] = !0,"production" !== c.env.NODE_ENV?i(!1,"Invalid attribute name: `%s`",a):void 0,!1);}function e(a,b){return null == b || a.hasBooleanValue && !b || a.hasNumericValue && isNaN(b) || a.hasPositiveNumericValue && 1 > b || a.hasOverloadedBooleanValue && b === !1;}var f=a("./DOMProperty"),g=a("./ReactPerf"),h=a("./quoteAttributeValueForBrowser"),i=a("fbjs/lib/warning"),j=/^[a-zA-Z_][\w\.\-]*$/,k={},l={};if("production" !== c.env.NODE_ENV)var m={children:!0,dangerouslySetInnerHTML:!0,key:!0,ref:!0},n={},o=function o(a){if(!(m.hasOwnProperty(a) && m[a] || n.hasOwnProperty(a) && n[a])){n[a] = !0;var b=a.toLowerCase(),d=f.isCustomAttribute(b)?b:f.getPossibleStandardName.hasOwnProperty(b)?f.getPossibleStandardName[b]:null;"production" !== c.env.NODE_ENV?i(null == d,"Unknown DOM property %s. Did you mean %s?",a,d):void 0;}};var p={createMarkupForID:function createMarkupForID(a){return f.ID_ATTRIBUTE_NAME + "=" + h(a);},setAttributeForID:function setAttributeForID(a,b){a.setAttribute(f.ID_ATTRIBUTE_NAME,b);},createMarkupForProperty:function createMarkupForProperty(a,b){var d=f.properties.hasOwnProperty(a)?f.properties[a]:null;if(d){if(e(d,b))return "";var g=d.attributeName;return d.hasBooleanValue || d.hasOverloadedBooleanValue && b === !0?g + '=""':g + "=" + h(b);}return f.isCustomAttribute(a)?null == b?"":a + "=" + h(b):("production" !== c.env.NODE_ENV && o(a),null);},createMarkupForCustomAttribute:function createMarkupForCustomAttribute(a,b){return d(a) && null != b?a + "=" + h(b):"";},setValueForProperty:function setValueForProperty(a,b,d){var g=f.properties.hasOwnProperty(b)?f.properties[b]:null;if(g){var h=g.mutationMethod;if(h)h(a,d);else if(e(g,d))this.deleteValueForProperty(a,b);else if(g.mustUseAttribute){var i=g.attributeName,j=g.attributeNamespace;j?a.setAttributeNS(j,i,"" + d):g.hasBooleanValue || g.hasOverloadedBooleanValue && d === !0?a.setAttribute(i,""):a.setAttribute(i,"" + d);}else {var k=g.propertyName;g.hasSideEffects && "" + a[k] == "" + d || (a[k] = d);}}else f.isCustomAttribute(b)?p.setValueForAttribute(a,b,d):"production" !== c.env.NODE_ENV && o(b);},setValueForAttribute:function setValueForAttribute(a,b,c){d(b) && (null == c?a.removeAttribute(b):a.setAttribute(b,"" + c));},deleteValueForProperty:function deleteValueForProperty(a,b){var d=f.properties.hasOwnProperty(b)?f.properties[b]:null;if(d){var e=d.mutationMethod;if(e)e(a,void 0);else if(d.mustUseAttribute)a.removeAttribute(d.attributeName);else {var g=d.propertyName,h=f.getDefaultValueForProperty(a.nodeName,g);d.hasSideEffects && "" + a[g] === h || (a[g] = h);}}else f.isCustomAttribute(b)?a.removeAttribute(b):"production" !== c.env.NODE_ENV && o(b);}};g.measureMethods(p,"DOMPropertyOperations",{setValueForProperty:"setValueForProperty",setValueForAttribute:"setValueForAttribute",deleteValueForProperty:"deleteValueForProperty"}),b.exports = p;}).call(this,a("_process"));},{"./DOMProperty":12,"./ReactPerf":74,"./quoteAttributeValueForBrowser":125,_process:1,"fbjs/lib/warning":158}],14:[function(a,b,c){(function(c){"use strict";function d(a){return a.substring(1,a.indexOf(" "));}var e=a("fbjs/lib/ExecutionEnvironment"),f=a("fbjs/lib/createNodesFromMarkup"),g=a("fbjs/lib/emptyFunction"),h=a("fbjs/lib/getMarkupWrap"),i=a("fbjs/lib/invariant"),j=/^(<[^ \/>]+)/,k="data-danger-index",l={dangerouslyRenderMarkup:function dangerouslyRenderMarkup(a){e.canUseDOM?void 0:"production" !== c.env.NODE_ENV?i(!1,"dangerouslyRenderMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString for server rendering."):i(!1);for(var b,l={},m=0;m < a.length;m++) {a[m]?void 0:"production" !== c.env.NODE_ENV?i(!1,"dangerouslyRenderMarkup(...): Missing markup."):i(!1),b = d(a[m]),b = h(b)?b:"*",l[b] = l[b] || [],l[b][m] = a[m];}var n=[],o=0;for(b in l) {if(l.hasOwnProperty(b)){var p,q=l[b];for(p in q) {if(q.hasOwnProperty(p)){var r=q[p];q[p] = r.replace(j,"$1 " + k + '="' + p + '" ');}}for(var s=f(q.join(""),g),t=0;t < s.length;++t) {var u=s[t];u.hasAttribute && u.hasAttribute(k)?(p = +u.getAttribute(k),u.removeAttribute(k),n.hasOwnProperty(p)?"production" !== c.env.NODE_ENV?i(!1,"Danger: Assigning to an already-occupied result index."):i(!1):void 0,n[p] = u,o += 1):"production" !== c.env.NODE_ENV && console.error("Danger: Discarding unexpected node:",u);}}}return o !== n.length?"production" !== c.env.NODE_ENV?i(!1,"Danger: Did not assign to every index of resultList."):i(!1):void 0,n.length !== a.length?"production" !== c.env.NODE_ENV?i(!1,"Danger: Expected markup to render %s nodes, but rendered %s.",a.length,n.length):i(!1):void 0,n;},dangerouslyReplaceNodeWithMarkup:function dangerouslyReplaceNodeWithMarkup(a,b){e.canUseDOM?void 0:"production" !== c.env.NODE_ENV?i(!1,"dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering."):i(!1),b?void 0:"production" !== c.env.NODE_ENV?i(!1,"dangerouslyReplaceNodeWithMarkup(...): Missing markup."):i(!1),"html" === a.tagName.toLowerCase()?"production" !== c.env.NODE_ENV?i(!1,"dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString()."):i(!1):void 0;var d;d = "string" == typeof b?f(b,g)[0]:b,a.parentNode.replaceChild(d,a);}};b.exports = l;}).call(this,a("_process"));},{_process:1,"fbjs/lib/ExecutionEnvironment":133,"fbjs/lib/createNodesFromMarkup":138,"fbjs/lib/emptyFunction":139,"fbjs/lib/getMarkupWrap":143,"fbjs/lib/invariant":147}],15:[function(a,b,c){"use strict";var d=a("fbjs/lib/keyOf"),e=[d({ResponderEventPlugin:null}),d({SimpleEventPlugin:null}),d({TapEventPlugin:null}),d({EnterLeaveEventPlugin:null}),d({ChangeEventPlugin:null}),d({SelectEventPlugin:null}),d({BeforeInputEventPlugin:null})];b.exports = e;},{"fbjs/lib/keyOf":151}],16:[function(a,b,c){"use strict";var d=a("./EventConstants"),e=a("./EventPropagators"),f=a("./SyntheticMouseEvent"),g=a("./ReactMount"),h=a("fbjs/lib/keyOf"),i=d.topLevelTypes,j=g.getFirstReactDOM,k={mouseEnter:{registrationName:h({onMouseEnter:null}),dependencies:[i.topMouseOut,i.topMouseOver]},mouseLeave:{registrationName:h({onMouseLeave:null}),dependencies:[i.topMouseOut,i.topMouseOver]}},l=[null,null],m={eventTypes:k,extractEvents:function extractEvents(a,b,c,d,h){if(a === i.topMouseOver && (d.relatedTarget || d.fromElement))return null;if(a !== i.topMouseOut && a !== i.topMouseOver)return null;var m;if(b.window === b)m = b;else {var n=b.ownerDocument;m = n?n.defaultView || n.parentWindow:window;}var o,p,q="",r="";if((a === i.topMouseOut?(o = b,q = c,p = j(d.relatedTarget || d.toElement),p?r = g.getID(p):p = m,p = p || m):(o = m,p = b,r = c),o === p))return null;var s=f.getPooled(k.mouseLeave,q,d,h);s.type = "mouseleave",s.target = o,s.relatedTarget = p;var t=f.getPooled(k.mouseEnter,r,d,h);return t.type = "mouseenter",t.target = p,t.relatedTarget = o,e.accumulateEnterLeaveDispatches(s,t,q,r),l[0] = s,l[1] = t,l;}};b.exports = m;},{"./EventConstants":17,"./EventPropagators":21,"./ReactMount":68,"./SyntheticMouseEvent":99,"fbjs/lib/keyOf":151}],17:[function(a,b,c){"use strict";var d=a("fbjs/lib/keyMirror"),e=d({bubbled:null,captured:null}),f=d({topAbort:null,topBlur:null,topCanPlay:null,topCanPlayThrough:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topDurationChange:null,topEmptied:null,topEncrypted:null,topEnded:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topLoadedData:null,topLoadedMetadata:null,topLoadStart:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topPause:null,topPlay:null,topPlaying:null,topProgress:null,topRateChange:null,topReset:null,topScroll:null,topSeeked:null,topSeeking:null,topSelectionChange:null,topStalled:null,topSubmit:null,topSuspend:null,topTextInput:null,topTimeUpdate:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topVolumeChange:null,topWaiting:null,topWheel:null}),g={topLevelTypes:f,PropagationPhases:e};b.exports = g;},{"fbjs/lib/keyMirror":150}],18:[function(a,b,c){(function(c){"use strict";function d(){var a=q && q.traverseTwoPhase && q.traverseEnterLeave;"production" !== c.env.NODE_ENV?k(a,"InstanceHandle not injected before use!"):void 0;}var e=a("./EventPluginRegistry"),f=a("./EventPluginUtils"),g=a("./ReactErrorUtils"),h=a("./accumulateInto"),i=a("./forEachAccumulated"),j=a("fbjs/lib/invariant"),k=a("fbjs/lib/warning"),l={},m=null,n=function n(a,b){a && (f.executeDispatchesInOrder(a,b),a.isPersistent() || a.constructor.release(a));},o=function o(a){return n(a,!0);},p=function p(a){return n(a,!1);},q=null,r={injection:{injectMount:f.injection.injectMount,injectInstanceHandle:function injectInstanceHandle(a){q = a,"production" !== c.env.NODE_ENV && d();},getInstanceHandle:function getInstanceHandle(){return "production" !== c.env.NODE_ENV && d(),q;},injectEventPluginOrder:e.injectEventPluginOrder,injectEventPluginsByName:e.injectEventPluginsByName},eventNameDispatchConfigs:e.eventNameDispatchConfigs,registrationNameModules:e.registrationNameModules,putListener:function putListener(a,b,d){"function" != typeof d?"production" !== c.env.NODE_ENV?j(!1,"Expected %s listener to be a function, instead got type %s",b,typeof d === "undefined"?"undefined":_typeof(d)):j(!1):void 0;var f=l[b] || (l[b] = {});f[a] = d;var g=e.registrationNameModules[b];g && g.didPutListener && g.didPutListener(a,b,d);},getListener:function getListener(a,b){var c=l[b];return c && c[a];},deleteListener:function deleteListener(a,b){var c=e.registrationNameModules[b];c && c.willDeleteListener && c.willDeleteListener(a,b);var d=l[b];d && delete d[a];},deleteAllListeners:function deleteAllListeners(a){for(var b in l) {if(l[b][a]){var c=e.registrationNameModules[b];c && c.willDeleteListener && c.willDeleteListener(a,b),delete l[b][a];}}},extractEvents:function extractEvents(a,b,c,d,f){for(var g,i=e.plugins,j=0;j < i.length;j++) {var k=i[j];if(k){var l=k.extractEvents(a,b,c,d,f);l && (g = h(g,l));}}return g;},enqueueEvents:function enqueueEvents(a){a && (m = h(m,a));},processEventQueue:function processEventQueue(a){var b=m;m = null,a?i(b,o):i(b,p),m?"production" !== c.env.NODE_ENV?j(!1,"processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented."):j(!1):void 0,g.rethrowCaughtError();},__purge:function __purge(){l = {};},__getListenerBank:function __getListenerBank(){return l;}};b.exports = r;}).call(this,a("_process"));},{"./EventPluginRegistry":19,"./EventPluginUtils":20,"./ReactErrorUtils":59,"./accumulateInto":105,"./forEachAccumulated":113,_process:1,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],19:[function(a,b,c){(function(c){"use strict";function d(){if(h)for(var a in i) {var b=i[a],d=h.indexOf(a);if((d > -1?void 0:"production" !== c.env.NODE_ENV?g(!1,"EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.",a):g(!1),!j.plugins[d])){b.extractEvents?void 0:"production" !== c.env.NODE_ENV?g(!1,"EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.",a):g(!1),j.plugins[d] = b;var f=b.eventTypes;for(var k in f) {e(f[k],b,k)?void 0:"production" !== c.env.NODE_ENV?g(!1,"EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.",k,a):g(!1);}}}}function e(a,b,d){j.eventNameDispatchConfigs.hasOwnProperty(d)?"production" !== c.env.NODE_ENV?g(!1,"EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.",d):g(!1):void 0,j.eventNameDispatchConfigs[d] = a;var e=a.phasedRegistrationNames;if(e){for(var h in e) {if(e.hasOwnProperty(h)){var i=e[h];f(i,b,d);}}return !0;}return a.registrationName?(f(a.registrationName,b,d),!0):!1;}function f(a,b,d){j.registrationNameModules[a]?"production" !== c.env.NODE_ENV?g(!1,"EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.",a):g(!1):void 0,j.registrationNameModules[a] = b,j.registrationNameDependencies[a] = b.eventTypes[d].dependencies;}var g=a("fbjs/lib/invariant"),h=null,i={},j={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function injectEventPluginOrder(a){h?"production" !== c.env.NODE_ENV?g(!1,"EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."):g(!1):void 0,h = Array.prototype.slice.call(a),d();},injectEventPluginsByName:function injectEventPluginsByName(a){var b=!1;for(var e in a) {if(a.hasOwnProperty(e)){var f=a[e];i.hasOwnProperty(e) && i[e] === f || (i[e]?"production" !== c.env.NODE_ENV?g(!1,"EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.",e):g(!1):void 0,i[e] = f,b = !0);}}b && d();},getPluginModuleForEvent:function getPluginModuleForEvent(a){var b=a.dispatchConfig;if(b.registrationName)return j.registrationNameModules[b.registrationName] || null;for(var c in b.phasedRegistrationNames) {if(b.phasedRegistrationNames.hasOwnProperty(c)){var d=j.registrationNameModules[b.phasedRegistrationNames[c]];if(d)return d;}}return null;},_resetEventPlugins:function _resetEventPlugins(){h = null;for(var a in i) {i.hasOwnProperty(a) && delete i[a];}j.plugins.length = 0;var b=j.eventNameDispatchConfigs;for(var c in b) {b.hasOwnProperty(c) && delete b[c];}var d=j.registrationNameModules;for(var e in d) {d.hasOwnProperty(e) && delete d[e];}}};b.exports = j;}).call(this,a("_process"));},{_process:1,"fbjs/lib/invariant":147}],20:[function(a,b,c){(function(c){"use strict";function d(a){return a === s.topMouseUp || a === s.topTouchEnd || a === s.topTouchCancel;}function e(a){return a === s.topMouseMove || a === s.topTouchMove;}function f(a){return a === s.topMouseDown || a === s.topTouchStart;}function g(a,b,c,d){var e=a.type || "unknown-event";a.currentTarget = r.Mount.getNode(d),b?o.invokeGuardedCallbackWithCatch(e,c,a,d):o.invokeGuardedCallback(e,c,a,d),a.currentTarget = null;}function h(a,b){var d=a._dispatchListeners,e=a._dispatchIDs;if(("production" !== c.env.NODE_ENV && m(a),Array.isArray(d)))for(var f=0;f < d.length && !a.isPropagationStopped();f++) {g(a,b,d[f],e[f]);}else d && g(a,b,d,e);a._dispatchListeners = null,a._dispatchIDs = null;}function i(a){var b=a._dispatchListeners,d=a._dispatchIDs;if(("production" !== c.env.NODE_ENV && m(a),Array.isArray(b))){for(var e=0;e < b.length && !a.isPropagationStopped();e++) {if(b[e](a,d[e]))return d[e];}}else if(b && b(a,d))return d;return null;}function j(a){var b=i(a);return a._dispatchIDs = null,a._dispatchListeners = null,b;}function k(a){"production" !== c.env.NODE_ENV && m(a);var b=a._dispatchListeners,d=a._dispatchIDs;Array.isArray(b)?"production" !== c.env.NODE_ENV?p(!1,"executeDirectDispatch(...): Invalid `event`."):p(!1):void 0;var e=b?b(a,d):null;return a._dispatchListeners = null,a._dispatchIDs = null,e;}function l(a){return !!a._dispatchListeners;}var m,n=a("./EventConstants"),o=a("./ReactErrorUtils"),p=a("fbjs/lib/invariant"),q=a("fbjs/lib/warning"),r={Mount:null,injectMount:function injectMount(a){r.Mount = a,"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?q(a && a.getNode && a.getID,"EventPluginUtils.injection.injectMount(...): Injected Mount module is missing getNode or getID."):void 0);}},s=n.topLevelTypes;"production" !== c.env.NODE_ENV && (m = function m(a){var b=a._dispatchListeners,d=a._dispatchIDs,e=Array.isArray(b),f=Array.isArray(d),g=f?d.length:d?1:0,h=e?b.length:b?1:0;"production" !== c.env.NODE_ENV?q(f === e && g === h,"EventPluginUtils: Invalid `event`."):void 0;});var t={isEndish:d,isMoveish:e,isStartish:f,executeDirectDispatch:k,executeDispatchesInOrder:h,executeDispatchesInOrderStopAtTrue:j,hasDispatches:l,getNode:function getNode(a){return r.Mount.getNode(a);},getID:function getID(a){return r.Mount.getID(a);},injection:r};b.exports = t;}).call(this,a("_process"));},{"./EventConstants":17,"./ReactErrorUtils":59,_process:1,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],21:[function(a,b,c){(function(c){"use strict";function d(a,b,c){var d=b.dispatchConfig.phasedRegistrationNames[c];return t(a,d);}function e(a,b,e){"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?p(a,"Dispatching id must not be null"):void 0);var f=b?s.bubbled:s.captured,g=d(a,e,f);g && (e._dispatchListeners = q(e._dispatchListeners,g),e._dispatchIDs = q(e._dispatchIDs,a));}function f(a){a && a.dispatchConfig.phasedRegistrationNames && o.injection.getInstanceHandle().traverseTwoPhase(a.dispatchMarker,e,a);}function g(a){a && a.dispatchConfig.phasedRegistrationNames && o.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(a.dispatchMarker,e,a);}function h(a,b,c){if(c && c.dispatchConfig.registrationName){var d=c.dispatchConfig.registrationName,e=t(a,d);e && (c._dispatchListeners = q(c._dispatchListeners,e),c._dispatchIDs = q(c._dispatchIDs,a));}}function i(a){a && a.dispatchConfig.registrationName && h(a.dispatchMarker,null,a);}function j(a){r(a,f);}function k(a){r(a,g);}function l(a,b,c,d){o.injection.getInstanceHandle().traverseEnterLeave(c,d,h,a,b);}function m(a){r(a,i);}var n=a("./EventConstants"),o=a("./EventPluginHub"),p=a("fbjs/lib/warning"),q=a("./accumulateInto"),r=a("./forEachAccumulated"),s=n.PropagationPhases,t=o.getListener,u={accumulateTwoPhaseDispatches:j,accumulateTwoPhaseDispatchesSkipTarget:k,accumulateDirectDispatches:m,accumulateEnterLeaveDispatches:l};b.exports = u;}).call(this,a("_process"));},{"./EventConstants":17,"./EventPluginHub":18,"./accumulateInto":105,"./forEachAccumulated":113,_process:1,"fbjs/lib/warning":158}],22:[function(a,b,c){"use strict";function d(a){this._root = a,this._startText = this.getText(),this._fallbackText = null;}var e=a("./PooledClass"),f=a("./Object.assign"),g=a("./getTextContentAccessor");f(d.prototype,{destructor:function destructor(){this._root = null,this._startText = null,this._fallbackText = null;},getText:function getText(){return "value" in this._root?this._root.value:this._root[g()];},getData:function getData(){if(this._fallbackText)return this._fallbackText;var a,b,c=this._startText,d=c.length,e=this.getText(),f=e.length;for(a = 0;d > a && c[a] === e[a];a++) {}var g=d - a;for(b = 1;g >= b && c[d - b] === e[f - b];b++) {}var h=b > 1?1 - b:void 0;return this._fallbackText = e.slice(a,h),this._fallbackText;}}),e.addPoolingTo(d),b.exports = d;},{"./Object.assign":25,"./PooledClass":26,"./getTextContentAccessor":120}],23:[function(a,b,c){"use strict";var d,e=a("./DOMProperty"),f=a("fbjs/lib/ExecutionEnvironment"),g=e.injection.MUST_USE_ATTRIBUTE,h=e.injection.MUST_USE_PROPERTY,i=e.injection.HAS_BOOLEAN_VALUE,j=e.injection.HAS_SIDE_EFFECTS,k=e.injection.HAS_NUMERIC_VALUE,l=e.injection.HAS_POSITIVE_NUMERIC_VALUE,m=e.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(f.canUseDOM){var n=document.implementation;d = n && n.hasFeature && n.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");}var o={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:g | i,allowTransparency:g,alt:null,async:i,autoComplete:null,autoPlay:i,capture:g | i,cellPadding:null,cellSpacing:null,charSet:g,challenge:g,checked:h | i,classID:g,className:d?g:h,cols:g | l,colSpan:null,content:null,contentEditable:null,contextMenu:g,controls:h | i,coords:null,crossOrigin:null,data:null,dateTime:g,"default":i,defer:i,dir:null,disabled:g | i,download:m,draggable:null,encType:null,form:g,formAction:g,formEncType:g,formMethod:g,formNoValidate:i,formTarget:g,frameBorder:g,headers:null,height:g,hidden:g | i,high:null,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:h,inputMode:g,integrity:null,is:g,keyParams:g,keyType:g,kind:null,label:null,lang:null,list:g,loop:h | i,low:null,manifest:g,marginHeight:null,marginWidth:null,max:null,maxLength:g,media:g,mediaGroup:null,method:null,min:null,minLength:g,multiple:h | i,muted:h | i,name:null,nonce:g,noValidate:i,open:i,optimum:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:h | i,rel:null,required:i,reversed:i,role:g,rows:g | l,rowSpan:null,sandbox:null,scope:null,scoped:i,scrolling:null,seamless:g | i,selected:h | i,shape:null,size:g | l,sizes:g,span:l,spellCheck:null,src:null,srcDoc:h,srcLang:null,srcSet:g,start:k,step:null,style:null,summary:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:h | j,width:g,wmode:g,wrap:null,about:g,datatype:g,inlist:g,prefix:g,property:g,resource:g,"typeof":g,vocab:g,autoCapitalize:g,autoCorrect:g,autoSave:null,color:null,itemProp:g,itemScope:g | i,itemType:g,itemID:g,itemRef:g,results:null,security:g,unselectable:g},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoComplete:"autocomplete",autoFocus:"autofocus",autoPlay:"autoplay",autoSave:"autosave",encType:"encoding",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};b.exports = o;},{"./DOMProperty":12,"fbjs/lib/ExecutionEnvironment":133}],24:[function(a,b,c){(function(c){"use strict";function d(a){null != a.checkedLink && null != a.valueLink?"production" !== c.env.NODE_ENV?j(!1,"Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa."):j(!1):void 0;}function e(a){d(a),null != a.value || null != a.onChange?"production" !== c.env.NODE_ENV?j(!1,"Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink."):j(!1):void 0;}function f(a){d(a),null != a.checked || null != a.onChange?"production" !== c.env.NODE_ENV?j(!1,"Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink"):j(!1):void 0;}function g(a){if(a){var b=a.getName();if(b)return " Check the render method of `" + b + "`.";}return "";}var h=a("./ReactPropTypes"),i=a("./ReactPropTypeLocations"),j=a("fbjs/lib/invariant"),k=a("fbjs/lib/warning"),l={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},m={value:function value(a,b,c){return !a[b] || l[a.type] || a.onChange || a.readOnly || a.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");},checked:function checked(a,b,c){return !a[b] || a.onChange || a.readOnly || a.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");},onChange:h.func},n={},o={checkPropTypes:function checkPropTypes(a,b,d){for(var e in m) {if(m.hasOwnProperty(e))var f=m[e](b,e,a,i.prop);if(f instanceof Error && !(f.message in n)){n[f.message] = !0;var h=g(d);"production" !== c.env.NODE_ENV?k(!1,"Failed form propType: %s%s",f.message,h):void 0;}}},getValue:function getValue(a){return a.valueLink?(e(a),a.valueLink.value):a.value;},getChecked:function getChecked(a){return a.checkedLink?(f(a),a.checkedLink.value):a.checked;},executeOnChange:function executeOnChange(a,b){return a.valueLink?(e(a),a.valueLink.requestChange(b.target.value)):a.checkedLink?(f(a),a.checkedLink.requestChange(b.target.checked)):a.onChange?a.onChange.call(void 0,b):void 0;}};b.exports = o;}).call(this,a("_process"));},{"./ReactPropTypeLocations":76,"./ReactPropTypes":77,_process:1,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],25:[function(a,b,c){"use strict";function d(a,b){if(null == a)throw new TypeError("Object.assign target cannot be null or undefined");for(var c=Object(a),d=Object.prototype.hasOwnProperty,e=1;e < arguments.length;e++) {var f=arguments[e];if(null != f){var g=Object(f);for(var h in g) {d.call(g,h) && (c[h] = g[h]);}}}return c;}b.exports = d;},{}],26:[function(a,b,c){(function(c){"use strict";var d=a("fbjs/lib/invariant"),e=function e(a){var b=this;if(b.instancePool.length){var c=b.instancePool.pop();return b.call(c,a),c;}return new b(a);},f=function f(a,b){var c=this;if(c.instancePool.length){var d=c.instancePool.pop();return c.call(d,a,b),d;}return new c(a,b);},g=function g(a,b,c){var d=this;if(d.instancePool.length){var e=d.instancePool.pop();return d.call(e,a,b,c),e;}return new d(a,b,c);},h=function h(a,b,c,d){var e=this;if(e.instancePool.length){var f=e.instancePool.pop();return e.call(f,a,b,c,d),f;}return new e(a,b,c,d);},i=function i(a,b,c,d,e){var f=this;if(f.instancePool.length){var g=f.instancePool.pop();return f.call(g,a,b,c,d,e),g;}return new f(a,b,c,d,e);},j=function j(a){var b=this;a instanceof b?void 0:"production" !== c.env.NODE_ENV?d(!1,"Trying to release an instance into a pool of a different type."):d(!1),a.destructor(),b.instancePool.length < b.poolSize && b.instancePool.push(a);},k=10,l=e,m=function m(a,b){var c=a;return c.instancePool = [],c.getPooled = b || l,c.poolSize || (c.poolSize = k),c.release = j,c;},n={addPoolingTo:m,oneArgumentPooler:e,twoArgumentPooler:f,threeArgumentPooler:g,fourArgumentPooler:h,fiveArgumentPooler:i};b.exports = n;}).call(this,a("_process"));},{_process:1,"fbjs/lib/invariant":147}],27:[function(a,b,c){"use strict";var d=a("./ReactDOM"),e=a("./ReactDOMServer"),f=a("./ReactIsomorphic"),g=a("./Object.assign"),h=a("./deprecated"),i={};g(i,f),g(i,{findDOMNode:h("findDOMNode","ReactDOM","react-dom",d,d.findDOMNode),render:h("render","ReactDOM","react-dom",d,d.render),unmountComponentAtNode:h("unmountComponentAtNode","ReactDOM","react-dom",d,d.unmountComponentAtNode),renderToString:h("renderToString","ReactDOMServer","react-dom/server",e,e.renderToString),renderToStaticMarkup:h("renderToStaticMarkup","ReactDOMServer","react-dom/server",e,e.renderToStaticMarkup)}),i.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d,i.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e,b.exports = i;},{"./Object.assign":25,"./ReactDOM":38,"./ReactDOMServer":48,"./ReactIsomorphic":66,"./deprecated":109}],28:[function(a,b,c){(function(c){"use strict";var d=a("./ReactInstanceMap"),e=a("./findDOMNode"),f=a("fbjs/lib/warning"),g="_getDOMNodeDidWarn",h={getDOMNode:function getDOMNode(){return "production" !== c.env.NODE_ENV?f(this.constructor[g],"%s.getDOMNode(...) is deprecated. Please use ReactDOM.findDOMNode(instance) instead.",d.get(this).getName() || this.tagName || "Unknown"):void 0,this.constructor[g] = !0,e(this);}};b.exports = h;}).call(this,a("_process"));},{"./ReactInstanceMap":65,"./findDOMNode":111,_process:1,"fbjs/lib/warning":158}],29:[function(a,b,c){"use strict";function d(a){return Object.prototype.hasOwnProperty.call(a,q) || (a[q] = o++,m[a[q]] = {}),m[a[q]];}var e=a("./EventConstants"),f=a("./EventPluginHub"),g=a("./EventPluginRegistry"),h=a("./ReactEventEmitterMixin"),i=a("./ReactPerf"),j=a("./ViewportMetrics"),k=a("./Object.assign"),l=a("./isEventSupported"),m={},n=!1,o=0,p={topAbort:"abort",topBlur:"blur",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},q="_reactListenersID" + String(Math.random()).slice(2),r=k({},h,{ReactEventListener:null,injection:{injectReactEventListener:function injectReactEventListener(a){a.setHandleTopLevel(r.handleTopLevel),r.ReactEventListener = a;}},setEnabled:function setEnabled(a){r.ReactEventListener && r.ReactEventListener.setEnabled(a);},isEnabled:function isEnabled(){return !(!r.ReactEventListener || !r.ReactEventListener.isEnabled());},listenTo:function listenTo(a,b){for(var c=b,f=d(c),h=g.registrationNameDependencies[a],i=e.topLevelTypes,j=0;j < h.length;j++) {var k=h[j];f.hasOwnProperty(k) && f[k] || (k === i.topWheel?l("wheel")?r.ReactEventListener.trapBubbledEvent(i.topWheel,"wheel",c):l("mousewheel")?r.ReactEventListener.trapBubbledEvent(i.topWheel,"mousewheel",c):r.ReactEventListener.trapBubbledEvent(i.topWheel,"DOMMouseScroll",c):k === i.topScroll?l("scroll",!0)?r.ReactEventListener.trapCapturedEvent(i.topScroll,"scroll",c):r.ReactEventListener.trapBubbledEvent(i.topScroll,"scroll",r.ReactEventListener.WINDOW_HANDLE):k === i.topFocus || k === i.topBlur?(l("focus",!0)?(r.ReactEventListener.trapCapturedEvent(i.topFocus,"focus",c),r.ReactEventListener.trapCapturedEvent(i.topBlur,"blur",c)):l("focusin") && (r.ReactEventListener.trapBubbledEvent(i.topFocus,"focusin",c),r.ReactEventListener.trapBubbledEvent(i.topBlur,"focusout",c)),f[i.topBlur] = !0,f[i.topFocus] = !0):p.hasOwnProperty(k) && r.ReactEventListener.trapBubbledEvent(k,p[k],c),f[k] = !0);}},trapBubbledEvent:function trapBubbledEvent(a,b,c){return r.ReactEventListener.trapBubbledEvent(a,b,c);},trapCapturedEvent:function trapCapturedEvent(a,b,c){return r.ReactEventListener.trapCapturedEvent(a,b,c);},ensureScrollValueMonitoring:function ensureScrollValueMonitoring(){if(!n){var a=j.refreshScrollValues;r.ReactEventListener.monitorScrollValue(a),n = !0;}},eventNameDispatchConfigs:f.eventNameDispatchConfigs,registrationNameModules:f.registrationNameModules,putListener:f.putListener,getListener:f.getListener,deleteListener:f.deleteListener,deleteAllListeners:f.deleteAllListeners});i.measureMethods(r,"ReactBrowserEventEmitter",{putListener:"putListener",deleteListener:"deleteListener"}),b.exports = r;},{"./EventConstants":17,"./EventPluginHub":18,"./EventPluginRegistry":19,"./Object.assign":25,"./ReactEventEmitterMixin":60,"./ReactPerf":74,"./ViewportMetrics":104,"./isEventSupported":122}],30:[function(a,b,c){(function(c){"use strict";function d(a,b,d){var e=void 0 === a[d];"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?i(e,"flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.",d):void 0),null != b && e && (a[d] = f(b,null));}var e=a("./ReactReconciler"),f=a("./instantiateReactComponent"),g=a("./shouldUpdateReactComponent"),h=a("./traverseAllChildren"),i=a("fbjs/lib/warning"),j={instantiateChildren:function instantiateChildren(a,b,c){if(null == a)return null;var e={};return h(a,d,e),e;},updateChildren:function updateChildren(a,b,c,d){if(!b && !a)return null;var h;for(h in b) {if(b.hasOwnProperty(h)){var i=a && a[h],j=i && i._currentElement,k=b[h];if(null != i && g(j,k))e.receiveComponent(i,k,c,d),b[h] = i;else {i && e.unmountComponent(i,h);var l=f(k,null);b[h] = l;}}}for(h in a) {!a.hasOwnProperty(h) || b && b.hasOwnProperty(h) || e.unmountComponent(a[h]);}return b;},unmountChildren:function unmountChildren(a){for(var b in a) {if(a.hasOwnProperty(b)){var c=a[b];e.unmountComponent(c);}}}};b.exports = j;}).call(this,a("_process"));},{"./ReactReconciler":79,"./instantiateReactComponent":121,"./shouldUpdateReactComponent":129,"./traverseAllChildren":130,_process:1,"fbjs/lib/warning":158}],31:[function(a,b,c){"use strict";function d(a){return ("" + a).replace(u,"//");}function e(a,b){this.func = a,this.context = b,this.count = 0;}function f(a,b,c){var d=a.func,e=a.context;d.call(e,b,a.count++);}function g(a,b,c){if(null == a)return a;var d=e.getPooled(b,c);r(a,f,d),e.release(d);}function h(a,b,c,d){this.result = a,this.keyPrefix = b,this.func = c,this.context = d,this.count = 0;}function i(a,b,c){var e=a.result,f=a.keyPrefix,g=a.func,h=a.context,i=g.call(h,b,a.count++);Array.isArray(i)?j(i,e,c,q.thatReturnsArgument):null != i && (p.isValidElement(i) && (i = p.cloneAndReplaceKey(i,f + (i !== b?d(i.key || "") + "/":"") + c)),e.push(i));}function j(a,b,c,e,f){var g="";null != c && (g = d(c) + "/");var j=h.getPooled(b,g,e,f);r(a,i,j),h.release(j);}function k(a,b,c){if(null == a)return a;var d=[];return j(a,d,null,b,c),d;}function l(a,b,c){return null;}function m(a,b){return r(a,l,null);}function n(a){var b=[];return j(a,b,null,q.thatReturnsArgument),b;}var o=a("./PooledClass"),p=a("./ReactElement"),q=a("fbjs/lib/emptyFunction"),r=a("./traverseAllChildren"),s=o.twoArgumentPooler,t=o.fourArgumentPooler,u=/\/(?!\/)/g;e.prototype.destructor = function(){this.func = null,this.context = null,this.count = 0;},o.addPoolingTo(e,s),h.prototype.destructor = function(){this.result = null,this.keyPrefix = null,this.func = null,this.context = null,this.count = 0;},o.addPoolingTo(h,t);var v={forEach:g,map:k,mapIntoWithKeyPrefixInternal:j,count:m,toArray:n};b.exports = v;},{"./PooledClass":26,"./ReactElement":55,"./traverseAllChildren":130,"fbjs/lib/emptyFunction":139}],32:[function(a,b,c){(function(c){"use strict";function d(){B || (B = !0,"production" !== c.env.NODE_ENV?x(!1,"setProps(...) and replaceProps(...) are deprecated. Instead, call render again at the top level."):void 0);}function e(a,b,d){for(var e in b) {b.hasOwnProperty(e) && ("production" !== c.env.NODE_ENV?x("function" == typeof b[e],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",a.displayName || "ReactClass",q[d],e):void 0);}}function f(a,b){var d=C.hasOwnProperty(b)?C[b]:null;E.hasOwnProperty(b) && (d !== z.OVERRIDE_BASE?"production" !== c.env.NODE_ENV?u(!1,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",b):u(!1):void 0),a.hasOwnProperty(b) && (d !== z.DEFINE_MANY && d !== z.DEFINE_MANY_MERGED?"production" !== c.env.NODE_ENV?u(!1,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",b):u(!1):void 0);}function g(a,b){if(b){"function" == typeof b?"production" !== c.env.NODE_ENV?u(!1,"ReactClass: You're attempting to use a component class as a mixin. Instead, just use a regular object."):u(!1):void 0,o.isValidElement(b)?"production" !== c.env.NODE_ENV?u(!1,"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."):u(!1):void 0;var d=a.prototype;b.hasOwnProperty(y) && D.mixins(a,b.mixins);for(var e in b) {if(b.hasOwnProperty(e) && e !== y){var g=b[e];if((f(d,e),D.hasOwnProperty(e)))D[e](a,g);else {var h=C.hasOwnProperty(e),i=d.hasOwnProperty(e),l="function" == typeof g,m=l && !h && !i && b.autobind !== !1;if(m)d.__reactAutoBindMap || (d.__reactAutoBindMap = {}),d.__reactAutoBindMap[e] = g,d[e] = g;else if(i){var n=C[e];!h || n !== z.DEFINE_MANY_MERGED && n !== z.DEFINE_MANY?"production" !== c.env.NODE_ENV?u(!1,"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",n,e):u(!1):void 0,n === z.DEFINE_MANY_MERGED?d[e] = j(d[e],g):n === z.DEFINE_MANY && (d[e] = k(d[e],g));}else d[e] = g,"production" !== c.env.NODE_ENV && "function" == typeof g && b.displayName && (d[e].displayName = b.displayName + "_" + e);}}}}}function h(a,b){if(b)for(var d in b) {var e=b[d];if(b.hasOwnProperty(d)){var f=d in D;f?"production" !== c.env.NODE_ENV?u(!1,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',d):u(!1):void 0;var g=d in a;g?"production" !== c.env.NODE_ENV?u(!1,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",d):u(!1):void 0,a[d] = e;}}}function i(a,b){a && b && "object" == (typeof a === "undefined"?"undefined":_typeof(a)) && "object" == (typeof b === "undefined"?"undefined":_typeof(b))?void 0:"production" !== c.env.NODE_ENV?u(!1,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."):u(!1);for(var d in b) {b.hasOwnProperty(d) && (void 0 !== a[d]?"production" !== c.env.NODE_ENV?u(!1,"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",d):u(!1):void 0,a[d] = b[d]);}return a;}function j(a,b){return function(){var c=a.apply(this,arguments),d=b.apply(this,arguments);if(null == c)return d;if(null == d)return c;var e={};return i(e,c),i(e,d),e;};}function k(a,b){return function(){a.apply(this,arguments),b.apply(this,arguments);};}function l(a,b){var d=b.bind(a);if("production" !== c.env.NODE_ENV){d.__reactBoundContext = a,d.__reactBoundMethod = b,d.__reactBoundArguments = null;var e=a.constructor.displayName,f=d.bind;d.bind = function(g){for(var h=arguments.length,i=Array(h > 1?h - 1:0),j=1;h > j;j++) {i[j - 1] = arguments[j];}if(g !== a && null !== g)"production" !== c.env.NODE_ENV?x(!1,"bind(): React component methods may only be bound to the component instance. See %s",e):void 0;else if(!i.length)return "production" !== c.env.NODE_ENV?x(!1,"bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",e):void 0,d;var k=f.apply(d,arguments);return k.__reactBoundContext = a,k.__reactBoundMethod = b,k.__reactBoundArguments = i,k;};}return d;}function m(a){for(var b in a.__reactAutoBindMap) {if(a.__reactAutoBindMap.hasOwnProperty(b)){var c=a.__reactAutoBindMap[b];a[b] = l(a,c);}}}var n=a("./ReactComponent"),o=a("./ReactElement"),p=a("./ReactPropTypeLocations"),q=a("./ReactPropTypeLocationNames"),r=a("./ReactNoopUpdateQueue"),s=a("./Object.assign"),t=a("fbjs/lib/emptyObject"),u=a("fbjs/lib/invariant"),v=a("fbjs/lib/keyMirror"),w=a("fbjs/lib/keyOf"),x=a("fbjs/lib/warning"),y=w({mixins:null}),z=v({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),A=[],B=!1,C={mixins:z.DEFINE_MANY,statics:z.DEFINE_MANY,propTypes:z.DEFINE_MANY,contextTypes:z.DEFINE_MANY,childContextTypes:z.DEFINE_MANY,getDefaultProps:z.DEFINE_MANY_MERGED,getInitialState:z.DEFINE_MANY_MERGED,getChildContext:z.DEFINE_MANY_MERGED,render:z.DEFINE_ONCE,componentWillMount:z.DEFINE_MANY,componentDidMount:z.DEFINE_MANY,componentWillReceiveProps:z.DEFINE_MANY,shouldComponentUpdate:z.DEFINE_ONCE,componentWillUpdate:z.DEFINE_MANY,componentDidUpdate:z.DEFINE_MANY,componentWillUnmount:z.DEFINE_MANY,updateComponent:z.OVERRIDE_BASE},D={displayName:function displayName(a,b){a.displayName = b;},mixins:function mixins(a,b){if(b)for(var c=0;c < b.length;c++) {g(a,b[c]);}},childContextTypes:function childContextTypes(a,b){"production" !== c.env.NODE_ENV && e(a,b,p.childContext),a.childContextTypes = s({},a.childContextTypes,b);},contextTypes:function contextTypes(a,b){"production" !== c.env.NODE_ENV && e(a,b,p.context),a.contextTypes = s({},a.contextTypes,b);},getDefaultProps:function getDefaultProps(a,b){a.getDefaultProps?a.getDefaultProps = j(a.getDefaultProps,b):a.getDefaultProps = b;},propTypes:function propTypes(a,b){"production" !== c.env.NODE_ENV && e(a,b,p.prop),a.propTypes = s({},a.propTypes,b);},statics:function statics(a,b){h(a,b);},autobind:function autobind(){}},E={replaceState:function replaceState(a,b){this.updater.enqueueReplaceState(this,a),b && this.updater.enqueueCallback(this,b);},isMounted:function isMounted(){return this.updater.isMounted(this);},setProps:function setProps(a,b){"production" !== c.env.NODE_ENV && d(),this.updater.enqueueSetProps(this,a),b && this.updater.enqueueCallback(this,b);},replaceProps:function replaceProps(a,b){"production" !== c.env.NODE_ENV && d(),this.updater.enqueueReplaceProps(this,a),b && this.updater.enqueueCallback(this,b);}},F=function F(){};s(F.prototype,n.prototype,E);var G={createClass:function createClass(a){var b=function b(a,d,e){"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?x(this instanceof b,"Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"):void 0),this.__reactAutoBindMap && m(this),this.props = a,this.context = d,this.refs = t,this.updater = e || r,this.state = null;var f=this.getInitialState?this.getInitialState():null;"production" !== c.env.NODE_ENV && "undefined" == typeof f && this.getInitialState._isMockFunction && (f = null),"object" != (typeof f === "undefined"?"undefined":_typeof(f)) || Array.isArray(f)?"production" !== c.env.NODE_ENV?u(!1,"%s.getInitialState(): must return an object or null",b.displayName || "ReactCompositeComponent"):u(!1):void 0,this.state = f;};b.prototype = new F(),b.prototype.constructor = b,A.forEach(g.bind(null,b)),g(b,a),b.getDefaultProps && (b.defaultProps = b.getDefaultProps()),"production" !== c.env.NODE_ENV && (b.getDefaultProps && (b.getDefaultProps.isReactClassApproved = {}),b.prototype.getInitialState && (b.prototype.getInitialState.isReactClassApproved = {})),b.prototype.render?void 0:"production" !== c.env.NODE_ENV?u(!1,"createClass(...): Class specification must implement a `render` method."):u(!1),"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?x(!b.prototype.componentShouldUpdate,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",a.displayName || "A component"):void 0,"production" !== c.env.NODE_ENV?x(!b.prototype.componentWillRecieveProps,"%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",a.displayName || "A component"):void 0);for(var d in C) {b.prototype[d] || (b.prototype[d] = null);}return b;},injection:{injectMixin:function injectMixin(a){A.push(a);}}};b.exports = G;}).call(this,a("_process"));},{"./Object.assign":25,"./ReactComponent":33,"./ReactElement":55,"./ReactNoopUpdateQueue":72,"./ReactPropTypeLocationNames":75,"./ReactPropTypeLocations":76,_process:1,"fbjs/lib/emptyObject":140,"fbjs/lib/invariant":147,"fbjs/lib/keyMirror":150,"fbjs/lib/keyOf":151,"fbjs/lib/warning":158}],33:[function(a,b,c){(function(c){"use strict";function d(a,b,c){this.props = a,this.context = b,this.refs = g,this.updater = c || e;}var e=a("./ReactNoopUpdateQueue"),f=a("./canDefineProperty"),g=a("fbjs/lib/emptyObject"),h=a("fbjs/lib/invariant"),i=a("fbjs/lib/warning");if((d.prototype.isReactComponent = {},d.prototype.setState = function(a,b){"object" != (typeof a === "undefined"?"undefined":_typeof(a)) && "function" != typeof a && null != a?"production" !== c.env.NODE_ENV?h(!1,"setState(...): takes an object of state variables to update or a function which returns an object of state variables."):h(!1):void 0,"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?i(null != a,"setState(...): You passed an undefined or null state object; instead, use forceUpdate()."):void 0),this.updater.enqueueSetState(this,a),b && this.updater.enqueueCallback(this,b);},d.prototype.forceUpdate = function(a){this.updater.enqueueForceUpdate(this),a && this.updater.enqueueCallback(this,a);},"production" !== c.env.NODE_ENV)){var j={getDOMNode:["getDOMNode","Use ReactDOM.findDOMNode(component) instead."],isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceProps:["replaceProps","Instead, call render again at the top level."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."],setProps:["setProps","Instead, call render again at the top level."]},k=function k(a,b){f && Object.defineProperty(d.prototype,a,{get:function get(){return void ("production" !== c.env.NODE_ENV?i(!1,"%s(...) is deprecated in plain JavaScript React classes. %s",b[0],b[1]):void 0);}});};for(var l in j) {j.hasOwnProperty(l) && k(l,j[l]);}}b.exports = d;}).call(this,a("_process"));},{"./ReactNoopUpdateQueue":72,"./canDefineProperty":107,_process:1,"fbjs/lib/emptyObject":140,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],34:[function(a,b,c){"use strict";var d=a("./ReactDOMIDOperations"),e=a("./ReactMount"),f={processChildrenUpdates:d.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:d.dangerouslyReplaceNodeWithMarkupByID,unmountIDFromEnvironment:function unmountIDFromEnvironment(a){e.purgeID(a);}};b.exports = f;},{"./ReactDOMIDOperations":43,"./ReactMount":68}],35:[function(a,b,c){(function(c){"use strict";var d=a("fbjs/lib/invariant"),e=!1,f={unmountIDFromEnvironment:null,replaceNodeWithMarkupByID:null,processChildrenUpdates:null,injection:{injectEnvironment:function injectEnvironment(a){e?"production" !== c.env.NODE_ENV?d(!1,"ReactCompositeComponent: injectEnvironment() can only be called once."):d(!1):void 0,f.unmountIDFromEnvironment = a.unmountIDFromEnvironment,f.replaceNodeWithMarkupByID = a.replaceNodeWithMarkupByID,f.processChildrenUpdates = a.processChildrenUpdates,e = !0;}}};b.exports = f;}).call(this,a("_process"));},{_process:1,"fbjs/lib/invariant":147}],36:[function(a,b,c){(function(c){"use strict";function d(a){var b=a._currentElement._owner || null;if(b){var c=b.getName();if(c)return " Check the render method of `" + c + "`.";}return "";}function e(a){}var f=a("./ReactComponentEnvironment"),g=a("./ReactCurrentOwner"),h=a("./ReactElement"),i=a("./ReactInstanceMap"),j=a("./ReactPerf"),k=a("./ReactPropTypeLocations"),l=a("./ReactPropTypeLocationNames"),m=a("./ReactReconciler"),n=a("./ReactUpdateQueue"),o=a("./Object.assign"),p=a("fbjs/lib/emptyObject"),q=a("fbjs/lib/invariant"),r=a("./shouldUpdateReactComponent"),s=a("fbjs/lib/warning");e.prototype.render = function(){var a=i.get(this)._currentElement.type;return a(this.props,this.context,this.updater);};var t=1,u={construct:function construct(a){this._currentElement = a,this._rootNodeID = null,this._instance = null,this._pendingElement = null,this._pendingStateQueue = null,this._pendingReplaceState = !1,this._pendingForceUpdate = !1,this._renderedComponent = null,this._context = null,this._mountOrder = 0,this._topLevelWrapper = null,this._pendingCallbacks = null;},mountComponent:function mountComponent(a,b,d){this._context = d,this._mountOrder = t++,this._rootNodeID = a;var f,j,k=this._processProps(this._currentElement.props),l=this._processContext(d),o=this._currentElement.type,r="prototype" in o;if(r)if("production" !== c.env.NODE_ENV){g.current = this;try{f = new o(k,l,n);}finally {g.current = null;}}else f = new o(k,l,n);(!r || null === f || f === !1 || h.isValidElement(f)) && (j = f,f = new e(o)),"production" !== c.env.NODE_ENV && (null == f.render?"production" !== c.env.NODE_ENV?s(!1,"%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`, returned null/false from a stateless component, or tried to render an element whose type is a function that isn't a React component.",o.displayName || o.name || "Component"):void 0:"production" !== c.env.NODE_ENV?s(o.prototype && o.prototype.isReactComponent || !r || !(f instanceof o),"%s(...): React component classes must extend React.Component.",o.displayName || o.name || "Component"):void 0),f.props = k,f.context = l,f.refs = p,f.updater = n,this._instance = f,i.set(f,this),"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?s(!f.getInitialState || f.getInitialState.isReactClassApproved,"getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",this.getName() || "a component"):void 0,"production" !== c.env.NODE_ENV?s(!f.getDefaultProps || f.getDefaultProps.isReactClassApproved,"getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",this.getName() || "a component"):void 0,"production" !== c.env.NODE_ENV?s(!f.propTypes,"propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",this.getName() || "a component"):void 0,"production" !== c.env.NODE_ENV?s(!f.contextTypes,"contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",this.getName() || "a component"):void 0,"production" !== c.env.NODE_ENV?s("function" != typeof f.componentShouldUpdate,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",this.getName() || "A component"):void 0,"production" !== c.env.NODE_ENV?s("function" != typeof f.componentDidUnmount,"%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",this.getName() || "A component"):void 0,"production" !== c.env.NODE_ENV?s("function" != typeof f.componentWillRecieveProps,"%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",this.getName() || "A component"):void 0);var u=f.state;void 0 === u && (f.state = u = null),"object" != (typeof u === "undefined"?"undefined":_typeof(u)) || Array.isArray(u)?"production" !== c.env.NODE_ENV?q(!1,"%s.state: must be set to an object or null",this.getName() || "ReactCompositeComponent"):q(!1):void 0,this._pendingStateQueue = null,this._pendingReplaceState = !1,this._pendingForceUpdate = !1,f.componentWillMount && (f.componentWillMount(),this._pendingStateQueue && (f.state = this._processPendingState(f.props,f.context))),void 0 === j && (j = this._renderValidatedComponent()),this._renderedComponent = this._instantiateReactComponent(j);var v=m.mountComponent(this._renderedComponent,a,b,this._processChildContext(d));return f.componentDidMount && b.getReactMountReady().enqueue(f.componentDidMount,f),v;},unmountComponent:function unmountComponent(){var a=this._instance;a.componentWillUnmount && a.componentWillUnmount(),m.unmountComponent(this._renderedComponent),this._renderedComponent = null,this._instance = null,this._pendingStateQueue = null,this._pendingReplaceState = !1,this._pendingForceUpdate = !1,this._pendingCallbacks = null,this._pendingElement = null,this._context = null,this._rootNodeID = null,this._topLevelWrapper = null,i.remove(a);},_maskContext:function _maskContext(a){var b=null,c=this._currentElement.type,d=c.contextTypes;if(!d)return p;b = {};for(var e in d) {b[e] = a[e];}return b;},_processContext:function _processContext(a){var b=this._maskContext(a);if("production" !== c.env.NODE_ENV){var d=this._currentElement.type;d.contextTypes && this._checkPropTypes(d.contextTypes,b,k.context);}return b;},_processChildContext:function _processChildContext(a){var b=this._currentElement.type,d=this._instance,e=d.getChildContext && d.getChildContext();if(e){"object" != _typeof(b.childContextTypes)?"production" !== c.env.NODE_ENV?q(!1,"%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",this.getName() || "ReactCompositeComponent"):q(!1):void 0,"production" !== c.env.NODE_ENV && this._checkPropTypes(b.childContextTypes,e,k.childContext);for(var f in e) {f in b.childContextTypes?void 0:"production" !== c.env.NODE_ENV?q(!1,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',this.getName() || "ReactCompositeComponent",f):q(!1);}return o({},a,e);}return a;},_processProps:function _processProps(a){if("production" !== c.env.NODE_ENV){var b=this._currentElement.type;b.propTypes && this._checkPropTypes(b.propTypes,a,k.prop);}return a;},_checkPropTypes:function _checkPropTypes(a,b,e){var f=this.getName();for(var g in a) {if(a.hasOwnProperty(g)){var h;try{"function" != typeof a[g]?"production" !== c.env.NODE_ENV?q(!1,"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",f || "React class",l[e],g):q(!1):void 0,h = a[g](b,g,f,e);}catch(i) {h = i;}if(h instanceof Error){var j=d(this);e === k.prop?"production" !== c.env.NODE_ENV?s(!1,"Failed Composite propType: %s%s",h.message,j):void 0:"production" !== c.env.NODE_ENV?s(!1,"Failed Context Types: %s%s",h.message,j):void 0;}}}},receiveComponent:function receiveComponent(a,b,c){var d=this._currentElement,e=this._context;this._pendingElement = null,this.updateComponent(b,d,a,e,c);},performUpdateIfNecessary:function performUpdateIfNecessary(a){null != this._pendingElement && m.receiveComponent(this,this._pendingElement || this._currentElement,a,this._context),(null !== this._pendingStateQueue || this._pendingForceUpdate) && this.updateComponent(a,this._currentElement,this._currentElement,this._context,this._context);},updateComponent:function updateComponent(a,b,d,e,f){var g,h=this._instance,i=this._context === f?h.context:this._processContext(f);b === d?g = d.props:(g = this._processProps(d.props),h.componentWillReceiveProps && h.componentWillReceiveProps(g,i));var j=this._processPendingState(g,i),k=this._pendingForceUpdate || !h.shouldComponentUpdate || h.shouldComponentUpdate(g,j,i);"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?s("undefined" != typeof k,"%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",this.getName() || "ReactCompositeComponent"):void 0),k?(this._pendingForceUpdate = !1,this._performComponentUpdate(d,g,j,i,a,f)):(this._currentElement = d,this._context = f,h.props = g,h.state = j,h.context = i);},_processPendingState:function _processPendingState(a,b){var c=this._instance,d=this._pendingStateQueue,e=this._pendingReplaceState;if((this._pendingReplaceState = !1,this._pendingStateQueue = null,!d))return c.state;if(e && 1 === d.length)return d[0];for(var f=o({},e?d[0]:c.state),g=e?1:0;g < d.length;g++) {var h=d[g];o(f,"function" == typeof h?h.call(c,f,a,b):h);}return f;},_performComponentUpdate:function _performComponentUpdate(a,b,c,d,e,f){var g,h,i,j=this._instance,k=Boolean(j.componentDidUpdate);k && (g = j.props,h = j.state,i = j.context),j.componentWillUpdate && j.componentWillUpdate(b,c,d),this._currentElement = a,this._context = f,j.props = b,j.state = c,j.context = d,this._updateRenderedComponent(e,f),k && e.getReactMountReady().enqueue(j.componentDidUpdate.bind(j,g,h,i),j);},_updateRenderedComponent:function _updateRenderedComponent(a,b){var c=this._renderedComponent,d=c._currentElement,e=this._renderValidatedComponent();if(r(d,e))m.receiveComponent(c,e,a,this._processChildContext(b));else {var f=this._rootNodeID,g=c._rootNodeID;m.unmountComponent(c),this._renderedComponent = this._instantiateReactComponent(e);var h=m.mountComponent(this._renderedComponent,f,a,this._processChildContext(b));this._replaceNodeWithMarkupByID(g,h);}},_replaceNodeWithMarkupByID:function _replaceNodeWithMarkupByID(a,b){f.replaceNodeWithMarkupByID(a,b);},_renderValidatedComponentWithoutOwnerOrContext:function _renderValidatedComponentWithoutOwnerOrContext(){var a=this._instance,b=a.render();return "production" !== c.env.NODE_ENV && "undefined" == typeof b && a.render._isMockFunction && (b = null),b;},_renderValidatedComponent:function _renderValidatedComponent(){var a;g.current = this;try{a = this._renderValidatedComponentWithoutOwnerOrContext();}finally {g.current = null;}return null === a || a === !1 || h.isValidElement(a)?void 0:"production" !== c.env.NODE_ENV?q(!1,"%s.render(): A valid ReactComponent must be returned. You may have returned undefined, an array or some other invalid object.",this.getName() || "ReactCompositeComponent"):q(!1),a;},attachRef:function attachRef(a,b){var d=this.getPublicInstance();null == d?"production" !== c.env.NODE_ENV?q(!1,"Stateless function components cannot have refs."):q(!1):void 0;var e=b.getPublicInstance();if("production" !== c.env.NODE_ENV){var f=b && b.getName?b.getName():"a component";"production" !== c.env.NODE_ENV?s(null != e,'Stateless function components cannot be given refs (See ref "%s" in %s created by %s). Attempts to access this ref will fail.',a,f,this.getName()):void 0;}var g=d.refs === p?d.refs = {}:d.refs;g[a] = e;},detachRef:function detachRef(a){var b=this.getPublicInstance().refs;delete b[a];},getName:function getName(){var a=this._currentElement.type,b=this._instance && this._instance.constructor;return a.displayName || b && b.displayName || a.name || b && b.name || null;},getPublicInstance:function getPublicInstance(){var a=this._instance;return a instanceof e?null:a;},_instantiateReactComponent:null};j.measureMethods(u,"ReactCompositeComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent",_renderValidatedComponent:"_renderValidatedComponent"});var v={Mixin:u};b.exports = v;}).call(this,a("_process"));},{"./Object.assign":25,"./ReactComponentEnvironment":35,"./ReactCurrentOwner":37,"./ReactElement":55,"./ReactInstanceMap":65,"./ReactPerf":74,"./ReactPropTypeLocationNames":75,"./ReactPropTypeLocations":76,"./ReactReconciler":79,"./ReactUpdateQueue":85,"./shouldUpdateReactComponent":129,_process:1,"fbjs/lib/emptyObject":140,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],37:[function(a,b,c){"use strict";var d={current:null};b.exports = d;},{}],38:[function(a,b,c){(function(c){"use strict";var d=a("./ReactCurrentOwner"),e=a("./ReactDOMTextComponent"),f=a("./ReactDefaultInjection"),g=a("./ReactInstanceHandles"),h=a("./ReactMount"),i=a("./ReactPerf"),j=a("./ReactReconciler"),k=a("./ReactUpdates"),l=a("./ReactVersion"),m=a("./findDOMNode"),n=a("./renderSubtreeIntoContainer"),o=a("fbjs/lib/warning");f.inject();var p=i.measure("React","render",h.render),q={findDOMNode:m,render:p,unmountComponentAtNode:h.unmountComponentAtNode,version:l,unstable_batchedUpdates:k.batchedUpdates,unstable_renderSubtreeIntoContainer:n};if(("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:d,InstanceHandles:g,Mount:h,Reconciler:j,TextComponent:e}),"production" !== c.env.NODE_ENV)){var r=a("fbjs/lib/ExecutionEnvironment");if(r.canUseDOM && window.top === window.self){"undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && (navigator.userAgent.indexOf("Chrome") > -1 && -1 === navigator.userAgent.indexOf("Edge") || navigator.userAgent.indexOf("Firefox") > -1) && console.debug("Download the React DevTools for a better development experience: https://fb.me/react-devtools");var s=document.documentMode && document.documentMode < 8;"production" !== c.env.NODE_ENV?o(!s,'Internet Explorer is running in compatibility mode; please add the following tag to your HTML to prevent this from happening: <meta http-equiv="X-UA-Compatible" content="IE=edge" />'):void 0;for(var t=[Array.isArray,Array.prototype.every,Array.prototype.forEach,Array.prototype.indexOf,Array.prototype.map,Date.now,Function.prototype.bind,Object.keys,String.prototype.split,String.prototype.trim,Object.create,Object.freeze],u=0;u < t.length;u++) {if(!t[u]){console.error("One or more ES5 shim/shams expected by React are not available: https://fb.me/react-warning-polyfills");break;}}}}b.exports = q;}).call(this,a("_process"));},{"./ReactCurrentOwner":37,"./ReactDOMTextComponent":49,"./ReactDefaultInjection":52,"./ReactInstanceHandles":64,"./ReactMount":68,"./ReactPerf":74,"./ReactReconciler":79,"./ReactUpdates":86,"./ReactVersion":87,"./findDOMNode":111,"./renderSubtreeIntoContainer":126,_process:1,"fbjs/lib/ExecutionEnvironment":133,"fbjs/lib/warning":158}],39:[function(a,b,c){"use strict";var d={onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0},e={getNativeProps:function getNativeProps(a,b,c){if(!b.disabled)return b;var e={};for(var f in b) {b.hasOwnProperty(f) && !d[f] && (e[f] = b[f]);}return e;}};b.exports = e;},{}],40:[function(a,b,c){(function(c){"use strict";function d(a){if(a){var b=a._currentElement._owner || null;if(b){var c=b.getName();if(c)return " This DOM node was rendered by `" + c + "`.";}}return "";}function e(){if("production" !== c.env.NODE_ENV){var a=this._reactInternalComponent;"production" !== c.env.NODE_ENV?W(!1,"ReactDOMComponent: Do not access .getDOMNode() of a DOM node; instead, use the node directly.%s",d(a)):void 0;}return this;}function f(){var a=this._reactInternalComponent;return "production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?W(!1,"ReactDOMComponent: Do not access .isMounted() of a DOM node.%s",d(a)):void 0),!!a;}function g(){if("production" !== c.env.NODE_ENV){var a=this._reactInternalComponent;"production" !== c.env.NODE_ENV?W(!1,"ReactDOMComponent: Do not access .setState(), .replaceState(), or .forceUpdate() of a DOM node. This is a no-op.%s",d(a)):void 0;}}function h(a,b){var e=this._reactInternalComponent;"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?W(!1,"ReactDOMComponent: Do not access .setProps() of a DOM node. Instead, call ReactDOM.render again at the top level.%s",d(e)):void 0),e && (L.enqueueSetPropsInternal(e,a),b && L.enqueueCallbackInternal(e,b));}function i(a,b){var e=this._reactInternalComponent;"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?W(!1,"ReactDOMComponent: Do not access .replaceProps() of a DOM node. Instead, call ReactDOM.render again at the top level.%s",d(e)):void 0),e && (L.enqueueReplacePropsInternal(e,a),b && L.enqueueCallbackInternal(e,b));}function j(a){if("object" == (typeof a === "undefined"?"undefined":_typeof(a))){if(Array.isArray(a))return "[" + a.map(j).join(", ") + "]";var b=[];for(var c in a) {if(Object.prototype.hasOwnProperty.call(a,c)){var d=/^[a-z$_][\w$_]*$/i.test(c)?c:JSON.stringify(c);b.push(d + ": " + j(a[c]));}}return "{" + b.join(", ") + "}";}return "string" == typeof a?JSON.stringify(a):"function" == typeof a?"[function object]":String(a);}function k(a,b,d){if(null != a && null != b && !U(a,b)){var e,f=d._tag,g=d._currentElement._owner;g && (e = g.getName());var h=e + "|" + f;da.hasOwnProperty(h) || (da[h] = !0,"production" !== c.env.NODE_ENV?W(!1,"`%s` was passed a style object that has previously been mutated. Mutating `style` is deprecated. Consider cloning it beforehand. Check the `render` %s. Previous style: %s. Mutated style: %s.",f,g?"of `" + e + "`":"using <" + f + ">",j(a),j(b)):void 0);}}function l(a,b){b && ("production" !== c.env.NODE_ENV && ha[a._tag] && ("production" !== c.env.NODE_ENV?W(null == b.children && null == b.dangerouslySetInnerHTML,"%s is a void element tag and must not have `children` or use `props.dangerouslySetInnerHTML`.%s",a._tag,a._currentElement._owner?" Check the render method of " + a._currentElement._owner.getName() + ".":""):void 0),null != b.dangerouslySetInnerHTML && (null != b.children?"production" !== c.env.NODE_ENV?P(!1,"Can only set one of `children` or `props.dangerouslySetInnerHTML`."):P(!1):void 0,"object" == _typeof(b.dangerouslySetInnerHTML) && ba in b.dangerouslySetInnerHTML?void 0:"production" !== c.env.NODE_ENV?P(!1,"`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information."):P(!1)),"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?W(null == b.innerHTML,"Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."):void 0,"production" !== c.env.NODE_ENV?W(!b.contentEditable || null == b.children,"A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."):void 0),null != b.style && "object" != _typeof(b.style)?"production" !== c.env.NODE_ENV?P(!1,"The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.%s",d(a)):P(!1):void 0);}function m(a,b,d,e){"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?W("onScroll" !== b || Q("scroll",!0),"This browser doesn't support the `onScroll` event"):void 0);var f=I.findReactContainerForID(a);if(f){var g=f.nodeType === ca?f.ownerDocument:f;Y(b,g);}e.getReactMountReady().enqueue(n,{id:a,registrationName:b,listener:d});}function n(){var a=this;B.putListener(a.id,a.registrationName,a.listener);}function o(){var a=this;a._rootNodeID?void 0:"production" !== c.env.NODE_ENV?P(!1,"Must be mounted to trap events"):P(!1);var b=I.getNode(a._rootNodeID);switch((b?void 0:"production" !== c.env.NODE_ENV?P(!1,"trapBubbledEvent(...): Requires node to be rendered."):P(!1),a._tag)){case "iframe":a._wrapperState.listeners = [B.trapBubbledEvent(A.topLevelTypes.topLoad,"load",b)];break;case "video":case "audio":a._wrapperState.listeners = [];for(var d in ea) {ea.hasOwnProperty(d) && a._wrapperState.listeners.push(B.trapBubbledEvent(A.topLevelTypes[d],ea[d],b));}break;case "img":a._wrapperState.listeners = [B.trapBubbledEvent(A.topLevelTypes.topError,"error",b),B.trapBubbledEvent(A.topLevelTypes.topLoad,"load",b)];break;case "form":a._wrapperState.listeners = [B.trapBubbledEvent(A.topLevelTypes.topReset,"reset",b),B.trapBubbledEvent(A.topLevelTypes.topSubmit,"submit",b)];}}function p(){E.mountReadyWrapper(this);}function q(){G.postUpdateWrapper(this);}function r(a){ka.call(ja,a) || (ia.test(a)?void 0:"production" !== c.env.NODE_ENV?P(!1,"Invalid tag: %s",a):P(!1),ja[a] = !0);}function s(a,b){a = M({},a);var c=a[V.ancestorInfoContextKey];return a[V.ancestorInfoContextKey] = V.updatedAncestorInfo(c,b._tag,b),a;}function t(a,b){return a.indexOf("-") >= 0 || null != b.is;}function u(a){r(a),this._tag = a.toLowerCase(),this._renderedChildren = null,this._previousStyle = null,this._previousStyleCopy = null,this._rootNodeID = null,this._wrapperState = null,this._topLevelWrapper = null,this._nodeWithLegacyProperties = null,"production" !== c.env.NODE_ENV && (this._unprocessedContextDev = null,this._processedContextDev = null);}var v,w=a("./AutoFocusUtils"),x=a("./CSSPropertyOperations"),y=a("./DOMProperty"),z=a("./DOMPropertyOperations"),A=a("./EventConstants"),B=a("./ReactBrowserEventEmitter"),C=a("./ReactComponentBrowserEnvironment"),D=a("./ReactDOMButton"),E=a("./ReactDOMInput"),F=a("./ReactDOMOption"),G=a("./ReactDOMSelect"),H=a("./ReactDOMTextarea"),I=a("./ReactMount"),J=a("./ReactMultiChild"),K=a("./ReactPerf"),L=a("./ReactUpdateQueue"),M=a("./Object.assign"),N=a("./canDefineProperty"),O=a("./escapeTextContentForBrowser"),P=a("fbjs/lib/invariant"),Q=a("./isEventSupported"),R=a("fbjs/lib/keyOf"),S=a("./setInnerHTML"),T=a("./setTextContent"),U=a("fbjs/lib/shallowEqual"),V=a("./validateDOMNesting"),W=a("fbjs/lib/warning"),X=B.deleteListener,Y=B.listenTo,Z=B.registrationNameModules,$={string:!0,number:!0},_=R({children:null}),aa=R({style:null}),ba=R({__html:null}),ca=1;"production" !== c.env.NODE_ENV && (v = {props:{enumerable:!1,get:function get(){var a=this._reactInternalComponent;return "production" !== c.env.NODE_ENV?W(!1,"ReactDOMComponent: Do not access .props of a DOM node; instead, recreate the props as `render` did originally or read the DOM properties/attributes directly from this node (e.g., this.refs.box.className).%s",d(a)):void 0,a._currentElement.props;}}});var da={},ea={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",topWaiting:"waiting"},fa={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},ga={listing:!0,pre:!0,textarea:!0},ha=M({menuitem:!0},fa),ia=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ja={},ka=({}).hasOwnProperty;u.displayName = "ReactDOMComponent",u.Mixin = {construct:function construct(a){this._currentElement = a;},mountComponent:function mountComponent(a,b,d){this._rootNodeID = a;var e=this._currentElement.props;switch(this._tag){case "iframe":case "img":case "form":case "video":case "audio":this._wrapperState = {listeners:null},b.getReactMountReady().enqueue(o,this);break;case "button":e = D.getNativeProps(this,e,d);break;case "input":E.mountWrapper(this,e,d),e = E.getNativeProps(this,e,d);break;case "option":F.mountWrapper(this,e,d),e = F.getNativeProps(this,e,d);break;case "select":G.mountWrapper(this,e,d),e = G.getNativeProps(this,e,d),d = G.processChildContext(this,e,d);break;case "textarea":H.mountWrapper(this,e,d),e = H.getNativeProps(this,e,d);}l(this,e),"production" !== c.env.NODE_ENV && d[V.ancestorInfoContextKey] && V(this._tag,this,d[V.ancestorInfoContextKey]),"production" !== c.env.NODE_ENV && (this._unprocessedContextDev = d,this._processedContextDev = s(d,this),d = this._processedContextDev);var f;if(b.useCreateElement){var g=d[I.ownerDocumentContextKey],h=g.createElement(this._currentElement.type);z.setAttributeForID(h,this._rootNodeID),I.getID(h),this._updateDOMProperties({},e,b,h),this._createInitialChildren(b,e,d,h),f = h;}else {var i=this._createOpenTagMarkupAndPutListeners(b,e),j=this._createContentMarkup(b,e,d);f = !j && fa[this._tag]?i + "/>":i + ">" + j + "</" + this._currentElement.type + ">";}switch(this._tag){case "input":b.getReactMountReady().enqueue(p,this);case "button":case "select":case "textarea":e.autoFocus && b.getReactMountReady().enqueue(w.focusDOMComponent,this);}return f;},_createOpenTagMarkupAndPutListeners:function _createOpenTagMarkupAndPutListeners(a,b){var d="<" + this._currentElement.type;for(var e in b) {if(b.hasOwnProperty(e)){var f=b[e];if(null != f)if(Z.hasOwnProperty(e))f && m(this._rootNodeID,e,f,a);else {e === aa && (f && ("production" !== c.env.NODE_ENV && (this._previousStyle = f),f = this._previousStyleCopy = M({},b.style)),f = x.createMarkupForStyles(f));var g=null;null != this._tag && t(this._tag,b)?e !== _ && (g = z.createMarkupForCustomAttribute(e,f)):g = z.createMarkupForProperty(e,f),g && (d += " " + g);}}}if(a.renderToStaticMarkup)return d;var h=z.createMarkupForID(this._rootNodeID);return d + " " + h;},_createContentMarkup:function _createContentMarkup(a,b,c){var d="",e=b.dangerouslySetInnerHTML;if(null != e)null != e.__html && (d = e.__html);else {var f=$[_typeof(b.children)]?b.children:null,g=null != f?null:b.children;if(null != f)d = O(f);else if(null != g){var h=this.mountChildren(g,a,c);d = h.join("");}}return ga[this._tag] && "\n" === d.charAt(0)?"\n" + d:d;},_createInitialChildren:function _createInitialChildren(a,b,c,d){var e=b.dangerouslySetInnerHTML;if(null != e)null != e.__html && S(d,e.__html);else {var f=$[_typeof(b.children)]?b.children:null,g=null != f?null:b.children;if(null != f)T(d,f);else if(null != g)for(var h=this.mountChildren(g,a,c),i=0;i < h.length;i++) {d.appendChild(h[i]);}}},receiveComponent:function receiveComponent(a,b,c){var d=this._currentElement;this._currentElement = a,this.updateComponent(b,d,a,c);},updateComponent:function updateComponent(a,b,d,e){var f=b.props,g=this._currentElement.props;switch(this._tag){case "button":f = D.getNativeProps(this,f),g = D.getNativeProps(this,g);break;case "input":E.updateWrapper(this),f = E.getNativeProps(this,f),g = E.getNativeProps(this,g);break;case "option":f = F.getNativeProps(this,f),g = F.getNativeProps(this,g);break;case "select":f = G.getNativeProps(this,f),g = G.getNativeProps(this,g);break;case "textarea":H.updateWrapper(this),f = H.getNativeProps(this,f),g = H.getNativeProps(this,g);}"production" !== c.env.NODE_ENV && (this._unprocessedContextDev !== e && (this._unprocessedContextDev = e,this._processedContextDev = s(e,this)),e = this._processedContextDev),l(this,g),this._updateDOMProperties(f,g,a,null),this._updateDOMChildren(f,g,a,e),!N && this._nodeWithLegacyProperties && (this._nodeWithLegacyProperties.props = g),"select" === this._tag && a.getReactMountReady().enqueue(q,this);},_updateDOMProperties:function _updateDOMProperties(a,b,d,e){var f,g,h;for(f in a) {if(!b.hasOwnProperty(f) && a.hasOwnProperty(f))if(f === aa){var i=this._previousStyleCopy;for(g in i) {i.hasOwnProperty(g) && (h = h || {},h[g] = "");}this._previousStyleCopy = null;}else Z.hasOwnProperty(f)?a[f] && X(this._rootNodeID,f):(y.properties[f] || y.isCustomAttribute(f)) && (e || (e = I.getNode(this._rootNodeID)),z.deleteValueForProperty(e,f));}for(f in b) {var j=b[f],l=f === aa?this._previousStyleCopy:a[f];if(b.hasOwnProperty(f) && j !== l)if(f === aa)if((j?("production" !== c.env.NODE_ENV && (k(this._previousStyleCopy,this._previousStyle,this),this._previousStyle = j),j = this._previousStyleCopy = M({},j)):this._previousStyleCopy = null,l)){for(g in l) {!l.hasOwnProperty(g) || j && j.hasOwnProperty(g) || (h = h || {},h[g] = "");}for(g in j) {j.hasOwnProperty(g) && l[g] !== j[g] && (h = h || {},h[g] = j[g]);}}else h = j;else Z.hasOwnProperty(f)?j?m(this._rootNodeID,f,j,d):l && X(this._rootNodeID,f):t(this._tag,b)?(e || (e = I.getNode(this._rootNodeID)),f === _ && (j = null),z.setValueForAttribute(e,f,j)):(y.properties[f] || y.isCustomAttribute(f)) && (e || (e = I.getNode(this._rootNodeID)),null != j?z.setValueForProperty(e,f,j):z.deleteValueForProperty(e,f));}h && (e || (e = I.getNode(this._rootNodeID)),x.setValueForStyles(e,h));},_updateDOMChildren:function _updateDOMChildren(a,b,c,d){var e=$[_typeof(a.children)]?a.children:null,f=$[_typeof(b.children)]?b.children:null,g=a.dangerouslySetInnerHTML && a.dangerouslySetInnerHTML.__html,h=b.dangerouslySetInnerHTML && b.dangerouslySetInnerHTML.__html,i=null != e?null:a.children,j=null != f?null:b.children,k=null != e || null != g,l=null != f || null != h;null != i && null == j?this.updateChildren(null,c,d):k && !l && this.updateTextContent(""),null != f?e !== f && this.updateTextContent("" + f):null != h?g !== h && this.updateMarkup("" + h):null != j && this.updateChildren(j,c,d);},unmountComponent:function unmountComponent(){switch(this._tag){case "iframe":case "img":case "form":case "video":case "audio":var a=this._wrapperState.listeners;if(a)for(var b=0;b < a.length;b++) {a[b].remove();}break;case "input":E.unmountWrapper(this);break;case "html":case "head":case "body":"production" !== c.env.NODE_ENV?P(!1,"<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.",this._tag):P(!1);}if((this.unmountChildren(),B.deleteAllListeners(this._rootNodeID),C.unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID = null,this._wrapperState = null,this._nodeWithLegacyProperties)){var d=this._nodeWithLegacyProperties;d._reactInternalComponent = null,this._nodeWithLegacyProperties = null;}},getPublicInstance:function getPublicInstance(){if(!this._nodeWithLegacyProperties){var a=I.getNode(this._rootNodeID);a._reactInternalComponent = this,a.getDOMNode = e,a.isMounted = f,a.setState = g,a.replaceState = g,a.forceUpdate = g,a.setProps = h,a.replaceProps = i,"production" !== c.env.NODE_ENV && N?Object.defineProperties(a,v):a.props = this._currentElement.props,this._nodeWithLegacyProperties = a;}return this._nodeWithLegacyProperties;}},K.measureMethods(u,"ReactDOMComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent"}),M(u.prototype,u.Mixin,J.Mixin),b.exports = u;}).call(this,a("_process"));},{"./AutoFocusUtils":4,"./CSSPropertyOperations":7,"./DOMProperty":12,"./DOMPropertyOperations":13,"./EventConstants":17,"./Object.assign":25,"./ReactBrowserEventEmitter":29,"./ReactComponentBrowserEnvironment":34,"./ReactDOMButton":39,"./ReactDOMInput":44,"./ReactDOMOption":45,"./ReactDOMSelect":46,"./ReactDOMTextarea":50,"./ReactMount":68,"./ReactMultiChild":69,"./ReactPerf":74,"./ReactUpdateQueue":85,"./canDefineProperty":107,"./escapeTextContentForBrowser":110,"./isEventSupported":122,"./setInnerHTML":127,"./setTextContent":128,"./validateDOMNesting":131,_process:1,"fbjs/lib/invariant":147,"fbjs/lib/keyOf":151,"fbjs/lib/shallowEqual":156,"fbjs/lib/warning":158}],41:[function(a,b,c){(function(c){"use strict";function d(a){return "production" !== c.env.NODE_ENV?f.createFactory(a):e.createFactory(a);}var e=a("./ReactElement"),f=a("./ReactElementValidator"),g=a("fbjs/lib/mapObject"),h=g({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hgroup:"hgroup",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",clipPath:"clipPath",defs:"defs",ellipse:"ellipse",g:"g",image:"image",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},d);b.exports = h;}).call(this,a("_process"));},{"./ReactElement":55,"./ReactElementValidator":56,_process:1,"fbjs/lib/mapObject":152}],42:[function(a,b,c){"use strict";var d={useCreateElement:!1};b.exports = d;},{}],43:[function(a,b,c){(function(c){"use strict";var d=a("./DOMChildrenOperations"),e=a("./DOMPropertyOperations"),f=a("./ReactMount"),g=a("./ReactPerf"),h=a("fbjs/lib/invariant"),i={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},j={updatePropertyByID:function updatePropertyByID(a,b,d){var g=f.getNode(a);i.hasOwnProperty(b)?"production" !== c.env.NODE_ENV?h(!1,"updatePropertyByID(...): %s",i[b]):h(!1):void 0,null != d?e.setValueForProperty(g,b,d):e.deleteValueForProperty(g,b);},dangerouslyReplaceNodeWithMarkupByID:function dangerouslyReplaceNodeWithMarkupByID(a,b){var c=f.getNode(a);d.dangerouslyReplaceNodeWithMarkup(c,b);},dangerouslyProcessChildrenUpdates:function dangerouslyProcessChildrenUpdates(a,b){for(var c=0;c < a.length;c++) {a[c].parentNode = f.getNode(a[c].parentID);}d.processUpdates(a,b);}};g.measureMethods(j,"ReactDOMIDOperations",{dangerouslyReplaceNodeWithMarkupByID:"dangerouslyReplaceNodeWithMarkupByID",dangerouslyProcessChildrenUpdates:"dangerouslyProcessChildrenUpdates"}),b.exports = j;}).call(this,a("_process"));},{"./DOMChildrenOperations":11,"./DOMPropertyOperations":13,"./ReactMount":68,"./ReactPerf":74,_process:1,"fbjs/lib/invariant":147}],44:[function(a,b,c){(function(c){"use strict";function d(){this._rootNodeID && m.updateWrapper(this);}function e(a){var b=this._currentElement.props,e=g.executeOnChange(b,a);i.asap(d,this);var f=b.name;if("radio" === b.type && null != f){for(var j=h.getNode(this._rootNodeID),m=j;m.parentNode;) {m = m.parentNode;}for(var n=m.querySelectorAll("input[name=" + JSON.stringify("" + f) + '][type="radio"]'),o=0;o < n.length;o++) {var p=n[o];if(p !== j && p.form === j.form){var q=h.getID(p);q?void 0:"production" !== c.env.NODE_ENV?k(!1,"ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."):k(!1);var r=l[q];r?void 0:"production" !== c.env.NODE_ENV?k(!1,"ReactDOMInput: Unknown radio button ID %s.",q):k(!1),i.asap(d,r);}}}return e;}var f=a("./ReactDOMIDOperations"),g=a("./LinkedValueUtils"),h=a("./ReactMount"),i=a("./ReactUpdates"),j=a("./Object.assign"),k=a("fbjs/lib/invariant"),l={},m={getNativeProps:function getNativeProps(a,b,c){var d=g.getValue(b),e=g.getChecked(b),f=j({},b,{defaultChecked:void 0,defaultValue:void 0,value:null != d?d:a._wrapperState.initialValue,checked:null != e?e:a._wrapperState.initialChecked,onChange:a._wrapperState.onChange});return f;},mountWrapper:function mountWrapper(a,b){"production" !== c.env.NODE_ENV && g.checkPropTypes("input",b,a._currentElement._owner);var d=b.defaultValue;a._wrapperState = {initialChecked:b.defaultChecked || !1,initialValue:null != d?d:null,onChange:e.bind(a)};},mountReadyWrapper:function mountReadyWrapper(a){l[a._rootNodeID] = a;},unmountWrapper:function unmountWrapper(a){delete l[a._rootNodeID];},updateWrapper:function updateWrapper(a){var b=a._currentElement.props,c=b.checked;null != c && f.updatePropertyByID(a._rootNodeID,"checked",c || !1);var d=g.getValue(b);null != d && f.updatePropertyByID(a._rootNodeID,"value","" + d);}};b.exports = m;}).call(this,a("_process"));},{"./LinkedValueUtils":24,"./Object.assign":25,"./ReactDOMIDOperations":43,"./ReactMount":68,"./ReactUpdates":86,_process:1,"fbjs/lib/invariant":147}],45:[function(a,b,c){(function(c){"use strict";var d=a("./ReactChildren"),e=a("./ReactDOMSelect"),f=a("./Object.assign"),g=a("fbjs/lib/warning"),h=e.valueContextKey,i={mountWrapper:function mountWrapper(a,b,d){"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?g(null == b.selected,"Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."):void 0);var e=d[h],f=null;if(null != e)if((f = !1,Array.isArray(e))){for(var i=0;i < e.length;i++) {if("" + e[i] == "" + b.value){f = !0;break;}}}else f = "" + e == "" + b.value;a._wrapperState = {selected:f};},getNativeProps:function getNativeProps(a,b,e){var h=f({selected:void 0,children:void 0},b);null != a._wrapperState.selected && (h.selected = a._wrapperState.selected);var i="";return d.forEach(b.children,function(a){null != a && ("string" == typeof a || "number" == typeof a?i += a:"production" !== c.env.NODE_ENV?g(!1,"Only strings and numbers are supported as <option> children."):void 0);}),h.children = i,h;}};b.exports = i;}).call(this,a("_process"));},{"./Object.assign":25,"./ReactChildren":31,"./ReactDOMSelect":46,_process:1,"fbjs/lib/warning":158}],46:[function(a,b,c){(function(c){"use strict";function d(){if(this._rootNodeID && this._wrapperState.pendingUpdate){this._wrapperState.pendingUpdate = !1;var a=this._currentElement.props,b=i.getValue(a);null != b && g(this,Boolean(a.multiple),b);}}function e(a){if(a){var b=a.getName();if(b)return " Check the render method of `" + b + "`.";}return "";}function f(a,b){var d=a._currentElement._owner;i.checkPropTypes("select",b,d);for(var f=0;f < o.length;f++) {var g=o[f];null != b[g] && (b.multiple?"production" !== c.env.NODE_ENV?m(Array.isArray(b[g]),"The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",g,e(d)):void 0:"production" !== c.env.NODE_ENV?m(!Array.isArray(b[g]),"The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",g,e(d)):void 0);}}function g(a,b,c){var d,e,f=j.getNode(a._rootNodeID).options;if(b){for(d = {},e = 0;e < c.length;e++) {d["" + c[e]] = !0;}for(e = 0;e < f.length;e++) {var g=d.hasOwnProperty(f[e].value);f[e].selected !== g && (f[e].selected = g);}}else {for(d = "" + c,e = 0;e < f.length;e++) {if(f[e].value === d)return void (f[e].selected = !0);}f.length && (f[0].selected = !0);}}function h(a){var b=this._currentElement.props,c=i.executeOnChange(b,a);return this._wrapperState.pendingUpdate = !0,k.asap(d,this),c;}var i=a("./LinkedValueUtils"),j=a("./ReactMount"),k=a("./ReactUpdates"),l=a("./Object.assign"),m=a("fbjs/lib/warning"),n="__ReactDOMSelect_value$" + Math.random().toString(36).slice(2),o=["value","defaultValue"],p={valueContextKey:n,getNativeProps:function getNativeProps(a,b,c){return l({},b,{onChange:a._wrapperState.onChange,value:void 0});},mountWrapper:function mountWrapper(a,b){"production" !== c.env.NODE_ENV && f(a,b);var d=i.getValue(b);a._wrapperState = {pendingUpdate:!1,initialValue:null != d?d:b.defaultValue,onChange:h.bind(a),wasMultiple:Boolean(b.multiple)};},processChildContext:function processChildContext(a,b,c){var d=l({},c);return d[n] = a._wrapperState.initialValue,d;},postUpdateWrapper:function postUpdateWrapper(a){var b=a._currentElement.props;a._wrapperState.initialValue = void 0;var c=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple = Boolean(b.multiple);var d=i.getValue(b);null != d?(a._wrapperState.pendingUpdate = !1,g(a,Boolean(b.multiple),d)):c !== Boolean(b.multiple) && (null != b.defaultValue?g(a,Boolean(b.multiple),b.defaultValue):g(a,Boolean(b.multiple),b.multiple?[]:""));}};b.exports = p;}).call(this,a("_process"));},{"./LinkedValueUtils":24,"./Object.assign":25,"./ReactMount":68,"./ReactUpdates":86,_process:1,"fbjs/lib/warning":158}],47:[function(a,b,c){"use strict";function d(a,b,c,d){return a === c && b === d;}function e(a){var b=document.selection,c=b.createRange(),d=c.text.length,e=c.duplicate();e.moveToElementText(a),e.setEndPoint("EndToStart",c);var f=e.text.length,g=f + d;return {start:f,end:g};}function f(a){var b=window.getSelection && window.getSelection();if(!b || 0 === b.rangeCount)return null;var c=b.anchorNode,e=b.anchorOffset,f=b.focusNode,g=b.focusOffset,h=b.getRangeAt(0);try{h.startContainer.nodeType,h.endContainer.nodeType;}catch(i) {return null;}var j=d(b.anchorNode,b.anchorOffset,b.focusNode,b.focusOffset),k=j?0:h.toString().length,l=h.cloneRange();l.selectNodeContents(a),l.setEnd(h.startContainer,h.startOffset);var m=d(l.startContainer,l.startOffset,l.endContainer,l.endOffset),n=m?0:l.toString().length,o=n + k,p=document.createRange();p.setStart(c,e),p.setEnd(f,g);var q=p.collapsed;return {start:q?o:n,end:q?n:o};}function g(a,b){var c,d,e=document.selection.createRange().duplicate();"undefined" == typeof b.end?(c = b.start,d = c):b.start > b.end?(c = b.end,d = b.start):(c = b.start,d = b.end),e.moveToElementText(a),e.moveStart("character",c),e.setEndPoint("EndToStart",e),e.moveEnd("character",d - c),e.select();}function h(a,b){if(window.getSelection){var c=window.getSelection(),d=a[k()].length,e=Math.min(b.start,d),f="undefined" == typeof b.end?e:Math.min(b.end,d);if(!c.extend && e > f){var g=f;f = e,e = g;}var h=j(a,e),i=j(a,f);if(h && i){var l=document.createRange();l.setStart(h.node,h.offset),c.removeAllRanges(),e > f?(c.addRange(l),c.extend(i.node,i.offset)):(l.setEnd(i.node,i.offset),c.addRange(l));}}}var i=a("fbjs/lib/ExecutionEnvironment"),j=a("./getNodeForCharacterOffset"),k=a("./getTextContentAccessor"),l=i.canUseDOM && "selection" in document && !("getSelection" in window),m={getOffsets:l?e:f,setOffsets:l?g:h};b.exports = m;},{"./getNodeForCharacterOffset":119,"./getTextContentAccessor":120,"fbjs/lib/ExecutionEnvironment":133}],48:[function(a,b,c){"use strict";var d=a("./ReactDefaultInjection"),e=a("./ReactServerRendering"),f=a("./ReactVersion");d.inject();var g={renderToString:e.renderToString,renderToStaticMarkup:e.renderToStaticMarkup,version:f};b.exports = g;},{"./ReactDefaultInjection":52,"./ReactServerRendering":83,"./ReactVersion":87}],49:[function(a,b,c){(function(c){"use strict";var d=a("./DOMChildrenOperations"),e=a("./DOMPropertyOperations"),f=a("./ReactComponentBrowserEnvironment"),g=a("./ReactMount"),h=a("./Object.assign"),i=a("./escapeTextContentForBrowser"),j=a("./setTextContent"),k=a("./validateDOMNesting"),l=function l(a){};h(l.prototype,{construct:function construct(a){this._currentElement = a,this._stringText = "" + a,this._rootNodeID = null,this._mountIndex = 0;},mountComponent:function mountComponent(a,b,d){if(("production" !== c.env.NODE_ENV && d[k.ancestorInfoContextKey] && k("span",null,d[k.ancestorInfoContextKey]),this._rootNodeID = a,b.useCreateElement)){var f=d[g.ownerDocumentContextKey],h=f.createElement("span");return e.setAttributeForID(h,a),g.getID(h),j(h,this._stringText),h;}var l=i(this._stringText);return b.renderToStaticMarkup?l:"<span " + e.createMarkupForID(a) + ">" + l + "</span>";},receiveComponent:function receiveComponent(a,b){if(a !== this._currentElement){this._currentElement = a;var c="" + a;if(c !== this._stringText){this._stringText = c;var e=g.getNode(this._rootNodeID);d.updateTextContent(e,c);}}},unmountComponent:function unmountComponent(){f.unmountIDFromEnvironment(this._rootNodeID);}}),b.exports = l;}).call(this,a("_process"));},{"./DOMChildrenOperations":11,"./DOMPropertyOperations":13,"./Object.assign":25,"./ReactComponentBrowserEnvironment":34,"./ReactMount":68,"./escapeTextContentForBrowser":110,"./setTextContent":128,"./validateDOMNesting":131,_process:1}],50:[function(a,b,c){(function(c){"use strict";function d(){this._rootNodeID && l.updateWrapper(this);}function e(a){var b=this._currentElement.props,c=f.executeOnChange(b,a);return h.asap(d,this),c;}var f=a("./LinkedValueUtils"),g=a("./ReactDOMIDOperations"),h=a("./ReactUpdates"),i=a("./Object.assign"),j=a("fbjs/lib/invariant"),k=a("fbjs/lib/warning"),l={getNativeProps:function getNativeProps(a,b,d){null != b.dangerouslySetInnerHTML?"production" !== c.env.NODE_ENV?j(!1,"`dangerouslySetInnerHTML` does not make sense on <textarea>."):j(!1):void 0;var e=i({},b,{defaultValue:void 0,value:void 0,children:a._wrapperState.initialValue,onChange:a._wrapperState.onChange});return e;},mountWrapper:function mountWrapper(a,b){"production" !== c.env.NODE_ENV && f.checkPropTypes("textarea",b,a._currentElement._owner);var d=b.defaultValue,g=b.children;null != g && ("production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?k(!1,"Use the `defaultValue` or `value` props instead of setting children on <textarea>."):void 0),null != d?"production" !== c.env.NODE_ENV?j(!1,"If you supply `defaultValue` on a <textarea>, do not pass children."):j(!1):void 0,Array.isArray(g) && (g.length <= 1?void 0:"production" !== c.env.NODE_ENV?j(!1,"<textarea> can only have at most one child."):j(!1),g = g[0]),d = "" + g),null == d && (d = "");var h=f.getValue(b);a._wrapperState = {initialValue:"" + (null != h?h:d),onChange:e.bind(a)};},updateWrapper:function updateWrapper(a){var b=a._currentElement.props,c=f.getValue(b);null != c && g.updatePropertyByID(a._rootNodeID,"value","" + c);}};b.exports = l;}).call(this,a("_process"));},{"./LinkedValueUtils":24,"./Object.assign":25,"./ReactDOMIDOperations":43,"./ReactUpdates":86,_process:1,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],51:[function(a,b,c){"use strict";function d(){this.reinitializeTransaction();}var e=a("./ReactUpdates"),f=a("./Transaction"),g=a("./Object.assign"),h=a("fbjs/lib/emptyFunction"),i={initialize:h,close:function close(){m.isBatchingUpdates = !1;}},j={initialize:h,close:e.flushBatchedUpdates.bind(e)},k=[j,i];g(d.prototype,f.Mixin,{getTransactionWrappers:function getTransactionWrappers(){return k;}});var l=new d(),m={isBatchingUpdates:!1,batchedUpdates:function batchedUpdates(a,b,c,d,e,f){var g=m.isBatchingUpdates;m.isBatchingUpdates = !0,g?a(b,c,d,e,f):l.perform(a,null,b,c,d,e,f);}};b.exports = m;},{"./Object.assign":25,"./ReactUpdates":86,"./Transaction":103,"fbjs/lib/emptyFunction":139}],52:[function(a,b,c){(function(c){"use strict";function d(){if(!z && (z = !0,r.EventEmitter.injectReactEventListener(q),r.EventPluginHub.injectEventPluginOrder(h),r.EventPluginHub.injectInstanceHandle(s),r.EventPluginHub.injectMount(t),r.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:x,EnterLeaveEventPlugin:i,ChangeEventPlugin:f,SelectEventPlugin:v,BeforeInputEventPlugin:e}),r.NativeComponent.injectGenericComponentClass(o),r.NativeComponent.injectTextComponentClass(p),r.Class.injectMixin(l),r.DOMProperty.injectDOMPropertyConfig(k),r.DOMProperty.injectDOMPropertyConfig(y),r.EmptyComponent.injectEmptyComponent("noscript"),r.Updates.injectReconcileTransaction(u),r.Updates.injectBatchingStrategy(n),r.RootIndex.injectCreateReactRootIndex(j.canUseDOM?g.createReactRootIndex:w.createReactRootIndex),r.Component.injectEnvironment(m),"production" !== c.env.NODE_ENV)){var b=j.canUseDOM && window.location.href || "";if(/[?&]react_perf\b/.test(b)){var d=a("./ReactDefaultPerf");d.start();}}}var e=a("./BeforeInputEventPlugin"),f=a("./ChangeEventPlugin"),g=a("./ClientReactRootIndex"),h=a("./DefaultEventPluginOrder"),i=a("./EnterLeaveEventPlugin"),j=a("fbjs/lib/ExecutionEnvironment"),k=a("./HTMLDOMPropertyConfig"),l=a("./ReactBrowserComponentMixin"),m=a("./ReactComponentBrowserEnvironment"),n=a("./ReactDefaultBatchingStrategy"),o=a("./ReactDOMComponent"),p=a("./ReactDOMTextComponent"),q=a("./ReactEventListener"),r=a("./ReactInjection"),s=a("./ReactInstanceHandles"),t=a("./ReactMount"),u=a("./ReactReconcileTransaction"),v=a("./SelectEventPlugin"),w=a("./ServerReactRootIndex"),x=a("./SimpleEventPlugin"),y=a("./SVGDOMPropertyConfig"),z=!1;b.exports = {inject:d};}).call(this,a("_process"));},{"./BeforeInputEventPlugin":5,"./ChangeEventPlugin":9,"./ClientReactRootIndex":10,"./DefaultEventPluginOrder":15,"./EnterLeaveEventPlugin":16,"./HTMLDOMPropertyConfig":23,"./ReactBrowserComponentMixin":28,"./ReactComponentBrowserEnvironment":34,"./ReactDOMComponent":40,"./ReactDOMTextComponent":49,"./ReactDefaultBatchingStrategy":51,"./ReactDefaultPerf":53,"./ReactEventListener":61,"./ReactInjection":62,"./ReactInstanceHandles":64,"./ReactMount":68,"./ReactReconcileTransaction":78,"./SVGDOMPropertyConfig":88,"./SelectEventPlugin":89,"./ServerReactRootIndex":90,"./SimpleEventPlugin":91,_process:1,"fbjs/lib/ExecutionEnvironment":133}],53:[function(a,b,c){"use strict";function d(a){return Math.floor(100 * a) / 100;}function e(a,b,c){a[b] = (a[b] || 0) + c;}var f=a("./DOMProperty"),g=a("./ReactDefaultPerfAnalysis"),h=a("./ReactMount"),i=a("./ReactPerf"),j=a("fbjs/lib/performanceNow"),k={_allMeasurements:[],_mountStack:[0],_injected:!1,start:function start(){k._injected || i.injection.injectMeasure(k.measure),k._allMeasurements.length = 0,i.enableMeasure = !0;},stop:function stop(){i.enableMeasure = !1;},getLastMeasurements:function getLastMeasurements(){return k._allMeasurements;},printExclusive:function printExclusive(a){a = a || k._allMeasurements;var b=g.getExclusiveSummary(a);console.table(b.map(function(a){return {"Component class name":a.componentName,"Total inclusive time (ms)":d(a.inclusive),"Exclusive mount time (ms)":d(a.exclusive),"Exclusive render time (ms)":d(a.render),"Mount time per instance (ms)":d(a.exclusive / a.count),"Render time per instance (ms)":d(a.render / a.count),Instances:a.count};}));},printInclusive:function printInclusive(a){a = a || k._allMeasurements;var b=g.getInclusiveSummary(a);console.table(b.map(function(a){return {"Owner > component":a.componentName,"Inclusive time (ms)":d(a.time),Instances:a.count};})),console.log("Total time:",g.getTotalTime(a).toFixed(2) + " ms");},getMeasurementsSummaryMap:function getMeasurementsSummaryMap(a){var b=g.getInclusiveSummary(a,!0);return b.map(function(a){return {"Owner > component":a.componentName,"Wasted time (ms)":a.time,Instances:a.count};});},printWasted:function printWasted(a){a = a || k._allMeasurements,console.table(k.getMeasurementsSummaryMap(a)),console.log("Total time:",g.getTotalTime(a).toFixed(2) + " ms");},printDOM:function printDOM(a){a = a || k._allMeasurements;var b=g.getDOMSummary(a);console.table(b.map(function(a){var b={};return b[f.ID_ATTRIBUTE_NAME] = a.id,b.type = a.type,b.args = JSON.stringify(a.args),b;})),console.log("Total time:",g.getTotalTime(a).toFixed(2) + " ms");},_recordWrite:function _recordWrite(a,b,c,d){var e=k._allMeasurements[k._allMeasurements.length - 1].writes;e[a] = e[a] || [],e[a].push({type:b,time:c,args:d});},measure:function measure(a,b,c){return function(){for(var d=arguments.length,f=Array(d),g=0;d > g;g++) {f[g] = arguments[g];}var i,l,m;if("_renderNewRootComponent" === b || "flushBatchedUpdates" === b)return k._allMeasurements.push({exclusive:{},inclusive:{},render:{},counts:{},writes:{},displayNames:{},totalTime:0,created:{}}),m = j(),l = c.apply(this,f),k._allMeasurements[k._allMeasurements.length - 1].totalTime = j() - m,l;if("_mountImageIntoNode" === b || "ReactBrowserEventEmitter" === a || "ReactDOMIDOperations" === a || "CSSPropertyOperations" === a || "DOMChildrenOperations" === a || "DOMPropertyOperations" === a){if((m = j(),l = c.apply(this,f),i = j() - m,"_mountImageIntoNode" === b)){var n=h.getID(f[1]);k._recordWrite(n,b,i,f[0]);}else if("dangerouslyProcessChildrenUpdates" === b)f[0].forEach(function(a){var b={};null !== a.fromIndex && (b.fromIndex = a.fromIndex),null !== a.toIndex && (b.toIndex = a.toIndex),null !== a.textContent && (b.textContent = a.textContent),null !== a.markupIndex && (b.markup = f[1][a.markupIndex]),k._recordWrite(a.parentID,a.type,i,b);});else {var o=f[0];"object" == (typeof o === "undefined"?"undefined":_typeof(o)) && (o = h.getID(f[0])),k._recordWrite(o,b,i,Array.prototype.slice.call(f,1));}return l;}if("ReactCompositeComponent" !== a || "mountComponent" !== b && "updateComponent" !== b && "_renderValidatedComponent" !== b)return c.apply(this,f);if(this._currentElement.type === h.TopLevelWrapper)return c.apply(this,f);var p="mountComponent" === b?f[0]:this._rootNodeID,q="_renderValidatedComponent" === b,r="mountComponent" === b,s=k._mountStack,t=k._allMeasurements[k._allMeasurements.length - 1];if((q?e(t.counts,p,1):r && (t.created[p] = !0,s.push(0)),m = j(),l = c.apply(this,f),i = j() - m,q))e(t.render,p,i);else if(r){var u=s.pop();s[s.length - 1] += i,e(t.exclusive,p,i - u),e(t.inclusive,p,i);}else e(t.inclusive,p,i);return t.displayNames[p] = {current:this.getName(),owner:this._currentElement._owner?this._currentElement._owner.getName():"<root>"},l;};}};b.exports = k;},{"./DOMProperty":12,"./ReactDefaultPerfAnalysis":54,"./ReactMount":68,"./ReactPerf":74,"fbjs/lib/performanceNow":155}],54:[function(a,b,c){"use strict";function d(a){for(var b=0,c=0;c < a.length;c++) {var d=a[c];b += d.totalTime;}return b;}function e(a){var b=[];return a.forEach(function(a){Object.keys(a.writes).forEach(function(c){a.writes[c].forEach(function(a){b.push({id:c,type:k[a.type] || a.type,args:a.args});});});}),b;}function f(a){for(var b,c={},d=0;d < a.length;d++) {var e=a[d],f=i({},e.exclusive,e.inclusive);for(var g in f) {b = e.displayNames[g].current,c[b] = c[b] || {componentName:b,inclusive:0,exclusive:0,render:0,count:0},e.render[g] && (c[b].render += e.render[g]),e.exclusive[g] && (c[b].exclusive += e.exclusive[g]),e.inclusive[g] && (c[b].inclusive += e.inclusive[g]),e.counts[g] && (c[b].count += e.counts[g]);}}var h=[];for(b in c) {c[b].exclusive >= j && h.push(c[b]);}return h.sort(function(a,b){return b.exclusive - a.exclusive;}),h;}function g(a,b){for(var c,d={},e=0;e < a.length;e++) {var f,g=a[e],k=i({},g.exclusive,g.inclusive);b && (f = h(g));for(var l in k) {if(!b || f[l]){var m=g.displayNames[l];c = m.owner + " > " + m.current,d[c] = d[c] || {componentName:c,time:0,count:0},g.inclusive[l] && (d[c].time += g.inclusive[l]),g.counts[l] && (d[c].count += g.counts[l]);}}}var n=[];for(c in d) {d[c].time >= j && n.push(d[c]);}return n.sort(function(a,b){return b.time - a.time;}),n;}function h(a){var b={},c=Object.keys(a.writes),d=i({},a.exclusive,a.inclusive);for(var e in d) {for(var f=!1,g=0;g < c.length;g++) {if(0 === c[g].indexOf(e)){f = !0;break;}}a.created[e] && (f = !0),!f && a.counts[e] > 0 && (b[e] = !0);}return b;}var i=a("./Object.assign"),j=1.2,k={_mountImageIntoNode:"set innerHTML",INSERT_MARKUP:"set innerHTML",MOVE_EXISTING:"move",REMOVE_NODE:"remove",SET_MARKUP:"set innerHTML",TEXT_CONTENT:"set textContent",setValueForProperty:"update attribute",setValueForAttribute:"update attribute",deleteValueForProperty:"remove attribute",setValueForStyles:"update styles",replaceNodeWithMarkup:"replace",updateTextContent:"set textContent"},l={getExclusiveSummary:f,getInclusiveSummary:g,getDOMSummary:e,getTotalTime:d};b.exports = l;},{"./Object.assign":25}],55:[function(a,b,c){(function(c){"use strict";var d=a("./ReactCurrentOwner"),e=a("./Object.assign"),f=a("./canDefineProperty"),g="function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103,h={key:!0,ref:!0,__self:!0,__source:!0},i=function i(a,b,d,e,h,_i,j){var k={$$typeof:g,type:a,key:b,ref:d,props:j,_owner:_i};return "production" !== c.env.NODE_ENV && (k._store = {},f?(Object.defineProperty(k._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(k,"_self",{configurable:!1,enumerable:!1,writable:!1,value:e}),Object.defineProperty(k,"_source",{configurable:!1,enumerable:!1,writable:!1,value:h})):(k._store.validated = !1,k._self = e,k._source = h),Object.freeze(k.props),Object.freeze(k)),k;};i.createElement = function(a,b,c){var e,f={},g=null,j=null,k=null,l=null;if(null != b){j = void 0 === b.ref?null:b.ref,g = void 0 === b.key?null:"" + b.key,k = void 0 === b.__self?null:b.__self,l = void 0 === b.__source?null:b.__source;for(e in b) {b.hasOwnProperty(e) && !h.hasOwnProperty(e) && (f[e] = b[e]);}}var m=arguments.length - 2;if(1 === m)f.children = c;else if(m > 1){for(var n=Array(m),o=0;m > o;o++) {n[o] = arguments[o + 2];}f.children = n;}if(a && a.defaultProps){var p=a.defaultProps;for(e in p) {"undefined" == typeof f[e] && (f[e] = p[e]);}}return i(a,g,j,k,l,d.current,f);},i.createFactory = function(a){var b=i.createElement.bind(null,a);return b.type = a,b;},i.cloneAndReplaceKey = function(a,b){var c=i(a.type,b,a.ref,a._self,a._source,a._owner,a.props);return c;},i.cloneAndReplaceProps = function(a,b){var d=i(a.type,a.key,a.ref,a._self,a._source,a._owner,b);return "production" !== c.env.NODE_ENV && (d._store.validated = a._store.validated),d;},i.cloneElement = function(a,b,c){var f,g=e({},a.props),j=a.key,k=a.ref,l=a._self,m=a._source,n=a._owner;if(null != b){void 0 !== b.ref && (k = b.ref,n = d.current),void 0 !== b.key && (j = "" + b.key);for(f in b) {b.hasOwnProperty(f) && !h.hasOwnProperty(f) && (g[f] = b[f]);}}var o=arguments.length - 2;if(1 === o)g.children = c;else if(o > 1){for(var p=Array(o),q=0;o > q;q++) {p[q] = arguments[q + 2];}g.children = p;}return i(a.type,j,k,l,m,n,g);},i.isValidElement = function(a){return "object" == (typeof a === "undefined"?"undefined":_typeof(a)) && null !== a && a.$$typeof === g;},b.exports = i;}).call(this,a("_process"));},{"./Object.assign":25,"./ReactCurrentOwner":37,"./canDefineProperty":107,_process:1}],56:[function(a,b,c){(function(c){"use strict";function d(){if(m.current){var a=m.current.getName();if(a)return " Check the render method of `" + a + "`.";}return "";}function e(a,b){if(a._store && !a._store.validated && null == a.key){a._store.validated = !0;var d=f("uniqueKey",a,b);null !== d && ("production" !== c.env.NODE_ENV?q(!1,'Each child in an array or iterator should have a unique "key" prop.%s%s%s',d.parentOrOwner || "",d.childOwner || "",d.url || ""):void 0);}}function f(a,b,c){var e=d();if(!e){var f="string" == typeof c?c:c.displayName || c.name;f && (e = " Check the top-level render call using <" + f + ">.");}var g=r[a] || (r[a] = {});if(g[e])return null;g[e] = !0;var h={parentOrOwner:e,url:" See https://fb.me/react-warning-keys for more information.",childOwner:null};return b && b._owner && b._owner !== m.current && (h.childOwner = " It was passed a child from " + b._owner.getName() + "."),h;}function g(a,b){if("object" == (typeof a === "undefined"?"undefined":_typeof(a)))if(Array.isArray(a))for(var c=0;c < a.length;c++) {var d=a[c];j.isValidElement(d) && e(d,b);}else if(j.isValidElement(a))a._store && (a._store.validated = !0);else if(a){var f=o(a);if(f && f !== a.entries)for(var g,h=f.call(a);!(g = h.next()).done;) {j.isValidElement(g.value) && e(g.value,b);}}}function h(a,b,e,f){for(var g in b) {if(b.hasOwnProperty(g)){var h;try{"function" != typeof b[g]?"production" !== c.env.NODE_ENV?p(!1,"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",a || "React class",l[f],g):p(!1):void 0,h = b[g](e,g,a,f);}catch(i) {h = i;}if(("production" !== c.env.NODE_ENV?q(!h || h instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a || "React class",l[f],g,typeof h === "undefined"?"undefined":_typeof(h)):void 0,h instanceof Error && !(h.message in s))){s[h.message] = !0;var j=d();"production" !== c.env.NODE_ENV?q(!1,"Failed propType: %s%s",h.message,j):void 0;}}}}function i(a){var b=a.type;if("function" == typeof b){var d=b.displayName || b.name;b.propTypes && h(d,b.propTypes,a.props,k.prop),"function" == typeof b.getDefaultProps && ("production" !== c.env.NODE_ENV?q(b.getDefaultProps.isReactClassApproved,"getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."):void 0);}}var j=a("./ReactElement"),k=a("./ReactPropTypeLocations"),l=a("./ReactPropTypeLocationNames"),m=a("./ReactCurrentOwner"),n=a("./canDefineProperty"),o=a("./getIteratorFn"),p=a("fbjs/lib/invariant"),q=a("fbjs/lib/warning"),r={},s={},t={createElement:function createElement(a,b,e){var f="string" == typeof a || "function" == typeof a;"production" !== c.env.NODE_ENV?q(f,"React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components).%s",d()):void 0;var h=j.createElement.apply(this,arguments);if(null == h)return h;if(f)for(var k=2;k < arguments.length;k++) {g(arguments[k],a);}return i(h),h;},createFactory:function createFactory(a){var b=t.createElement.bind(null,a);return b.type = a,"production" !== c.env.NODE_ENV && n && Object.defineProperty(b,"type",{enumerable:!1,get:function get(){return "production" !== c.env.NODE_ENV?q(!1,"Factory.type is deprecated. Access the class directly before passing it to createFactory."):void 0,Object.defineProperty(this,"type",{value:a}),a;}}),b;},cloneElement:function cloneElement(a,b,c){for(var d=j.cloneElement.apply(this,arguments),e=2;e < arguments.length;e++) {g(arguments[e],d.type);}return i(d),d;}};b.exports = t;}).call(this,a("_process"));},{"./ReactCurrentOwner":37,"./ReactElement":55,"./ReactPropTypeLocationNames":75,"./ReactPropTypeLocations":76,"./canDefineProperty":107,"./getIteratorFn":118,_process:1,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],57:[function(a,b,c){"use strict";var d,e=a("./ReactElement"),f=a("./ReactEmptyComponentRegistry"),g=a("./ReactReconciler"),h=a("./Object.assign"),i={injectEmptyComponent:function injectEmptyComponent(a){d = e.createElement(a);}},j=function j(a){this._currentElement = null,this._rootNodeID = null,this._renderedComponent = a(d);};h(j.prototype,{construct:function construct(a){},mountComponent:function mountComponent(a,b,c){return f.registerNullComponentID(a),this._rootNodeID = a,g.mountComponent(this._renderedComponent,a,b,c);},receiveComponent:function receiveComponent(){},unmountComponent:function unmountComponent(a,b,c){g.unmountComponent(this._renderedComponent),f.deregisterNullComponentID(this._rootNodeID),this._rootNodeID = null,this._renderedComponent = null;}}),j.injection = i,b.exports = j;},{"./Object.assign":25,"./ReactElement":55,"./ReactEmptyComponentRegistry":58,"./ReactReconciler":79}],58:[function(a,b,c){"use strict";function d(a){return !!g[a];}function e(a){g[a] = !0;}function f(a){delete g[a];}var g={},h={isNullComponentID:d,registerNullComponentID:e,deregisterNullComponentID:f};b.exports = h;},{}],59:[function(a,b,c){(function(a){"use strict";function c(a,b,c,e){try{return b(c,e);}catch(f) {return void (null === d && (d = f));}}var d=null,e={invokeGuardedCallback:c,invokeGuardedCallbackWithCatch:c,rethrowCaughtError:function rethrowCaughtError(){if(d){var a=d;throw (d = null,a);}}};if("production" !== a.env.NODE_ENV && "undefined" != typeof window && "function" == typeof window.dispatchEvent && "undefined" != typeof document && "function" == typeof document.createEvent){var f=document.createElement("react");e.invokeGuardedCallback = function(a,b,c,d){var e=b.bind(null,c,d),g="react-" + a;f.addEventListener(g,e,!1);var h=document.createEvent("Event");h.initEvent(g,!1,!1),f.dispatchEvent(h),f.removeEventListener(g,e,!1);};}b.exports = e;}).call(this,a("_process"));},{_process:1}],60:[function(a,b,c){"use strict";function d(a){e.enqueueEvents(a),e.processEventQueue(!1);}var e=a("./EventPluginHub"),f={handleTopLevel:function handleTopLevel(a,b,c,f,g){var h=e.extractEvents(a,b,c,f,g);d(h);}};b.exports = f;},{"./EventPluginHub":18}],61:[function(a,b,c){"use strict";function d(a){var b=m.getID(a),c=l.getReactRootIDFromNodeID(b),d=m.findReactContainerForID(c),e=m.getFirstReactDOM(d);return e;}function e(a,b){this.topLevelType = a,this.nativeEvent = b,this.ancestors = [];}function f(a){g(a);}function g(a){for(var b=m.getFirstReactDOM(p(a.nativeEvent)) || window,c=b;c;) {a.ancestors.push(c),c = d(c);}for(var e=0;e < a.ancestors.length;e++) {b = a.ancestors[e];var f=m.getID(b) || "";r._handleTopLevel(a.topLevelType,b,f,a.nativeEvent,p(a.nativeEvent));}}function h(a){var b=q(window);a(b);}var i=a("fbjs/lib/EventListener"),j=a("fbjs/lib/ExecutionEnvironment"),k=a("./PooledClass"),l=a("./ReactInstanceHandles"),m=a("./ReactMount"),n=a("./ReactUpdates"),o=a("./Object.assign"),p=a("./getEventTarget"),q=a("fbjs/lib/getUnboundedScrollPosition");o(e.prototype,{destructor:function destructor(){this.topLevelType = null,this.nativeEvent = null,this.ancestors.length = 0;}}),k.addPoolingTo(e,k.twoArgumentPooler);var r={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:j.canUseDOM?window:null,setHandleTopLevel:function setHandleTopLevel(a){r._handleTopLevel = a;},setEnabled:function setEnabled(a){r._enabled = !!a;},isEnabled:function isEnabled(){return r._enabled;},trapBubbledEvent:function trapBubbledEvent(a,b,c){var d=c;return d?i.listen(d,b,r.dispatchEvent.bind(null,a)):null;},trapCapturedEvent:function trapCapturedEvent(a,b,c){var d=c;return d?i.capture(d,b,r.dispatchEvent.bind(null,a)):null;},monitorScrollValue:function monitorScrollValue(a){var b=h.bind(null,a);i.listen(window,"scroll",b);},dispatchEvent:function dispatchEvent(a,b){if(r._enabled){var c=e.getPooled(a,b);try{n.batchedUpdates(f,c);}finally {e.release(c);}}}};b.exports = r;},{"./Object.assign":25,"./PooledClass":26,"./ReactInstanceHandles":64,"./ReactMount":68,"./ReactUpdates":86,"./getEventTarget":117,"fbjs/lib/EventListener":132,"fbjs/lib/ExecutionEnvironment":133,"fbjs/lib/getUnboundedScrollPosition":144}],62:[function(a,b,c){"use strict";var d=a("./DOMProperty"),e=a("./EventPluginHub"),f=a("./ReactComponentEnvironment"),g=a("./ReactClass"),h=a("./ReactEmptyComponent"),i=a("./ReactBrowserEventEmitter"),j=a("./ReactNativeComponent"),k=a("./ReactPerf"),l=a("./ReactRootIndex"),m=a("./ReactUpdates"),n={Component:f.injection,Class:g.injection,DOMProperty:d.injection,EmptyComponent:h.injection,EventPluginHub:e.injection,EventEmitter:i.injection,NativeComponent:j.injection,Perf:k.injection,RootIndex:l.injection,Updates:m.injection};b.exports = n;},{"./DOMProperty":12,"./EventPluginHub":18,"./ReactBrowserEventEmitter":29,"./ReactClass":32,"./ReactComponentEnvironment":35,"./ReactEmptyComponent":57,"./ReactNativeComponent":71,"./ReactPerf":74,"./ReactRootIndex":81,"./ReactUpdates":86}],63:[function(a,b,c){"use strict";function d(a){return f(document.documentElement,a);}var e=a("./ReactDOMSelection"),f=a("fbjs/lib/containsNode"),g=a("fbjs/lib/focusNode"),h=a("fbjs/lib/getActiveElement"),i={hasSelectionCapabilities:function hasSelectionCapabilities(a){var b=a && a.nodeName && a.nodeName.toLowerCase();return b && ("input" === b && "text" === a.type || "textarea" === b || "true" === a.contentEditable);},getSelectionInformation:function getSelectionInformation(){var a=h();return {focusedElem:a,selectionRange:i.hasSelectionCapabilities(a)?i.getSelection(a):null};},restoreSelection:function restoreSelection(a){var b=h(),c=a.focusedElem,e=a.selectionRange;b !== c && d(c) && (i.hasSelectionCapabilities(c) && i.setSelection(c,e),g(c));},getSelection:function getSelection(a){var b;if("selectionStart" in a)b = {start:a.selectionStart,end:a.selectionEnd};else if(document.selection && a.nodeName && "input" === a.nodeName.toLowerCase()){var c=document.selection.createRange();c.parentElement() === a && (b = {start:-c.moveStart("character",-a.value.length),end:-c.moveEnd("character",-a.value.length)});}else b = e.getOffsets(a);return b || {start:0,end:0};},setSelection:function setSelection(a,b){var c=b.start,d=b.end;if(("undefined" == typeof d && (d = c),"selectionStart" in a))a.selectionStart = c,a.selectionEnd = Math.min(d,a.value.length);else if(document.selection && a.nodeName && "input" === a.nodeName.toLowerCase()){var f=a.createTextRange();f.collapse(!0),f.moveStart("character",c),f.moveEnd("character",d - c),f.select();}else e.setOffsets(a,b);}};b.exports = i;},{"./ReactDOMSelection":47,"fbjs/lib/containsNode":136,"fbjs/lib/focusNode":141,"fbjs/lib/getActiveElement":142}],64:[function(a,b,c){(function(c){"use strict";function d(a){return n + a.toString(36);}function e(a,b){return a.charAt(b) === n || b === a.length;}function f(a){return "" === a || a.charAt(0) === n && a.charAt(a.length - 1) !== n;}function g(a,b){return 0 === b.indexOf(a) && e(b,a.length);}function h(a){return a?a.substr(0,a.lastIndexOf(n)):"";}function i(a,b){if((f(a) && f(b)?void 0:"production" !== c.env.NODE_ENV?m(!1,"getNextDescendantID(%s, %s): Received an invalid React DOM ID.",a,b):m(!1),g(a,b)?void 0:"production" !== c.env.NODE_ENV?m(!1,"getNextDescendantID(...): React has made an invalid assumption about the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.",a,b):m(!1),a === b))return a;var d,h=a.length + o;for(d = h;d < b.length && !e(b,d);d++) {}return b.substr(0,d);}function j(a,b){var d=Math.min(a.length,b.length);if(0 === d)return "";for(var g=0,h=0;d >= h;h++) {if(e(a,h) && e(b,h))g = h;else if(a.charAt(h) !== b.charAt(h))break;}var i=a.substr(0,g);return f(i)?void 0:"production" !== c.env.NODE_ENV?m(!1,"getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s",a,b,i):m(!1),i;}function k(a,b,d,e,f,j){a = a || "",b = b || "",a === b?"production" !== c.env.NODE_ENV?m(!1,"traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.",a):m(!1):void 0;var k=g(b,a);k || g(a,b)?void 0:"production" !== c.env.NODE_ENV?m(!1,"traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do not have a parent path.",a,b):m(!1);for(var l=0,n=k?h:i,o=a;;o = n(o,b)) {var q;if((f && o === a || j && o === b || (q = d(o,k,e)),q === !1 || o === b))break;l++ < p?void 0:"production" !== c.env.NODE_ENV?m(!1,"traverseParentPath(%s, %s, ...): Detected an infinite loop while traversing the React DOM ID tree. This may be due to malformed IDs: %s",a,b,o):m(!1);}}var l=a("./ReactRootIndex"),m=a("fbjs/lib/invariant"),n=".",o=n.length,p=1e4,q={createReactRootID:function createReactRootID(){return d(l.createReactRootIndex());},createReactID:function createReactID(a,b){return a + b;},getReactRootIDFromNodeID:function getReactRootIDFromNodeID(a){if(a && a.charAt(0) === n && a.length > 1){var b=a.indexOf(n,1);return b > -1?a.substr(0,b):a;}return null;},traverseEnterLeave:function traverseEnterLeave(a,b,c,d,e){var f=j(a,b);f !== a && k(a,f,c,d,!1,!0),f !== b && k(f,b,c,e,!0,!1);},traverseTwoPhase:function traverseTwoPhase(a,b,c){a && (k("",a,b,c,!0,!1),k(a,"",b,c,!1,!0));},traverseTwoPhaseSkipTarget:function traverseTwoPhaseSkipTarget(a,b,c){a && (k("",a,b,c,!0,!0),k(a,"",b,c,!0,!0));},traverseAncestors:function traverseAncestors(a,b,c){k("",a,b,c,!0,!1);},getFirstCommonAncestorID:j,_getNextDescendantID:i,isAncestorIDOf:g,SEPARATOR:n};b.exports = q;}).call(this,a("_process"));},{"./ReactRootIndex":81,_process:1,"fbjs/lib/invariant":147}],65:[function(a,b,c){"use strict";var d={remove:function remove(a){a._reactInternalInstance = void 0;},get:function get(a){return a._reactInternalInstance;},has:function has(a){return void 0 !== a._reactInternalInstance;},set:function set(a,b){a._reactInternalInstance = b;}};b.exports = d;},{}],66:[function(a,b,c){(function(c){"use strict";var d=a("./ReactChildren"),e=a("./ReactComponent"),f=a("./ReactClass"),g=a("./ReactDOMFactories"),h=a("./ReactElement"),i=a("./ReactElementValidator"),j=a("./ReactPropTypes"),k=a("./ReactVersion"),l=a("./Object.assign"),m=a("./onlyChild"),n=h.createElement,o=h.createFactory,p=h.cloneElement;"production" !== c.env.NODE_ENV && (n = i.createElement,o = i.createFactory,p = i.cloneElement);var q={Children:{map:d.map,forEach:d.forEach,count:d.count,toArray:d.toArray,only:m},Component:e,createElement:n,cloneElement:p,isValidElement:h.isValidElement,PropTypes:j,createClass:f.createClass,createFactory:o,createMixin:function createMixin(a){return a;},DOM:g,version:k,__spread:l};b.exports = q;}).call(this,a("_process"));},{"./Object.assign":25,"./ReactChildren":31,"./ReactClass":32,"./ReactComponent":33,"./ReactDOMFactories":41,"./ReactElement":55,"./ReactElementValidator":56,"./ReactPropTypes":77,"./ReactVersion":87,"./onlyChild":124,_process:1}],67:[function(a,b,c){"use strict";var d=a("./adler32"),e=/\/?>/,f={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function addChecksumToMarkup(a){var b=d(a);return a.replace(e," " + f.CHECKSUM_ATTR_NAME + '="' + b + '"$&');},canReuseMarkup:function canReuseMarkup(a,b){var c=b.getAttribute(f.CHECKSUM_ATTR_NAME);c = c && parseInt(c,10);var e=d(a);return e === c;}};b.exports = f;},{"./adler32":106}],68:[function(a,b,c){(function(c){"use strict";function d(a,b){for(var c=Math.min(a.length,b.length),d=0;c > d;d++) {if(a.charAt(d) !== b.charAt(d))return d;}return a.length === b.length?-1:c;}function e(a){return a?a.nodeType === T?a.documentElement:a.firstChild:null;}function f(a){var b=e(a);return b && aa.getID(b);}function g(a){var b=h(a);if(b)if(R.hasOwnProperty(b)){var d=R[b];d !== a && (l(d,b)?"production" !== c.env.NODE_ENV?L(!1,"ReactMount: Two valid but unequal nodes with the same `%s`: %s",Q,b):L(!1):void 0,R[b] = a);}else R[b] = a;return b;}function h(a){return a && a.getAttribute && a.getAttribute(Q) || "";}function i(a,b){var c=h(a);c !== b && delete R[c],a.setAttribute(Q,b),R[b] = a;}function j(a){return R.hasOwnProperty(a) && l(R[a],a) || (R[a] = aa.findReactNodeByID(a)),R[a];}function k(a){var b=B.get(a)._rootNodeID;return z.isNullComponentID(b)?null:(R.hasOwnProperty(b) && l(R[b],b) || (R[b] = aa.findReactNodeByID(b)),R[b]);}function l(a,b){if(a){h(a) !== b?"production" !== c.env.NODE_ENV?L(!1,"ReactMount: Unexpected modification of `%s`",Q):L(!1):void 0;var d=aa.findReactContainerForID(b);if(d && J(d,a))return !0;}return !1;}function m(a){delete R[a];}function n(a){var b=R[a];return b && l(b,a)?void ($ = b):!1;}function o(a){$ = null,A.traverseAncestors(a,n);var b=$;return $ = null,b;}function p(a,b,d,e,f,g){if((x.useCreateElement && (g = H({},g),d.nodeType === T?g[V] = d:g[V] = d.ownerDocument),"production" !== c.env.NODE_ENV)){g === I && (g = {});var h=d.nodeName.toLowerCase();g[O.ancestorInfoContextKey] = O.updatedAncestorInfo(null,h,null);}var i=E.mountComponent(a,b,e,g);a._renderedComponent._topLevelWrapper = a,aa._mountImageIntoNode(i,d,f,e);}function q(a,b,c,d,e){var f=G.ReactReconcileTransaction.getPooled(d);f.perform(p,null,a,b,c,f,d,e),G.ReactReconcileTransaction.release(f);}function r(a,b){for(E.unmountComponent(a),b.nodeType === T && (b = b.documentElement);b.lastChild;) {b.removeChild(b.lastChild);}}function s(a){var b=f(a);return b?b !== A.getReactRootIDFromNodeID(b):!1;}function t(a){for(;a && a.parentNode !== a;a = a.parentNode) {if(1 === a.nodeType){var b=h(a);if(b){var c,d=A.getReactRootIDFromNodeID(b),e=a;do {if((c = h(e),e = e.parentNode,null == e))return null;}while(c !== d);if(e === X[d])return a;}}}return null;}var u=a("./DOMProperty"),v=a("./ReactBrowserEventEmitter"),w=a("./ReactCurrentOwner"),x=a("./ReactDOMFeatureFlags"),y=a("./ReactElement"),z=a("./ReactEmptyComponentRegistry"),A=a("./ReactInstanceHandles"),B=a("./ReactInstanceMap"),C=a("./ReactMarkupChecksum"),D=a("./ReactPerf"),E=a("./ReactReconciler"),F=a("./ReactUpdateQueue"),G=a("./ReactUpdates"),H=a("./Object.assign"),I=a("fbjs/lib/emptyObject"),J=a("fbjs/lib/containsNode"),K=a("./instantiateReactComponent"),L=a("fbjs/lib/invariant"),M=a("./setInnerHTML"),N=a("./shouldUpdateReactComponent"),O=a("./validateDOMNesting"),P=a("fbjs/lib/warning"),Q=u.ID_ATTRIBUTE_NAME,R={},S=1,T=9,U=11,V="__ReactMount_ownerDocument$" + Math.random().toString(36).slice(2),W={},X={};if("production" !== c.env.NODE_ENV)var Y={};var Z=[],$=null,_=function _(){};_.prototype.isReactComponent = {},"production" !== c.env.NODE_ENV && (_.displayName = "TopLevelWrapper"),_.prototype.render = function(){return this.props;};var aa={TopLevelWrapper:_,_instancesByReactRootID:W,scrollMonitor:function scrollMonitor(a,b){b();},_updateRootComponent:function _updateRootComponent(a,b,d,g){return aa.scrollMonitor(d,function(){F.enqueueElementInternal(a,b),g && F.enqueueCallbackInternal(a,g);}),"production" !== c.env.NODE_ENV && (Y[f(d)] = e(d)),a;},_registerComponent:function _registerComponent(a,b){!b || b.nodeType !== S && b.nodeType !== T && b.nodeType !== U?"production" !== c.env.NODE_ENV?L(!1,"_registerComponent(...): Target container is not a DOM element."):L(!1):void 0,v.ensureScrollValueMonitoring();var d=aa.registerContainer(b);return W[d] = a,d;},_renderNewRootComponent:function _renderNewRootComponent(a,b,d,f){"production" !== c.env.NODE_ENV?P(null == w.current,"_renderNewRootComponent(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate. Check the render method of %s.",w.current && w.current.getName() || "ReactCompositeComponent"):void 0;var g=K(a,null),h=aa._registerComponent(g,b);return G.batchedUpdates(q,g,h,b,d,f),"production" !== c.env.NODE_ENV && (Y[h] = e(b)),g;},renderSubtreeIntoContainer:function renderSubtreeIntoContainer(a,b,d,e){return null == a || null == a._reactInternalInstance?"production" !== c.env.NODE_ENV?L(!1,"parentComponent must be a valid React Component"):L(!1):void 0,aa._renderSubtreeIntoContainer(a,b,d,e);},_renderSubtreeIntoContainer:function _renderSubtreeIntoContainer(a,b,d,g){y.isValidElement(b)?void 0:"production" !== c.env.NODE_ENV?L(!1,"ReactDOM.render(): Invalid component element.%s","string" == typeof b?" Instead of passing an element string, make sure to instantiate it by passing it to React.createElement.":"function" == typeof b?" Instead of passing a component class, make sure to instantiate it by passing it to React.createElement.":null != b && void 0 !== b.props?" This may be caused by unintentionally loading two independent copies of React.":""):L(!1),"production" !== c.env.NODE_ENV?P(!d || !d.tagName || "BODY" !== d.tagName.toUpperCase(),"render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app."):void 0;var i=new y(_,null,null,null,null,null,b),j=W[f(d)];if(j){var k=j._currentElement,l=k.props;if(N(l,b)){var m=j._renderedComponent.getPublicInstance(),n=g && function(){g.call(m);};return aa._updateRootComponent(j,i,d,n),m;}aa.unmountComponentAtNode(d);}var o=e(d),p=o && !!h(o),q=s(d);if("production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?P(!q,"render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."):void 0,!p || o.nextSibling))for(var r=o;r;) {if(h(r)){"production" !== c.env.NODE_ENV?P(!1,"render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup."):void 0;break;}r = r.nextSibling;}var t=p && !j && !q,u=aa._renderNewRootComponent(i,d,t,null != a?a._reactInternalInstance._processChildContext(a._reactInternalInstance._context):I)._renderedComponent.getPublicInstance();return g && g.call(u),u;},render:function render(a,b,c){return aa._renderSubtreeIntoContainer(null,a,b,c);},registerContainer:function registerContainer(a){var b=f(a);return b && (b = A.getReactRootIDFromNodeID(b)),b || (b = A.createReactRootID()),X[b] = a,b;},unmountComponentAtNode:function unmountComponentAtNode(a){"production" !== c.env.NODE_ENV?P(null == w.current,"unmountComponentAtNode(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate. Check the render method of %s.",w.current && w.current.getName() || "ReactCompositeComponent"):void 0,!a || a.nodeType !== S && a.nodeType !== T && a.nodeType !== U?"production" !== c.env.NODE_ENV?L(!1,"unmountComponentAtNode(...): Target container is not a DOM element."):L(!1):void 0;var b=f(a),d=W[b];if(!d){var e=s(a),g=h(a),i=g && g === A.getReactRootIDFromNodeID(g);return "production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?P(!e,"unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",i?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component."):void 0),!1;}return G.batchedUpdates(r,d,a),delete W[b],delete X[b],"production" !== c.env.NODE_ENV && delete Y[b],!0;},findReactContainerForID:function findReactContainerForID(a){var b=A.getReactRootIDFromNodeID(a),d=X[b];if("production" !== c.env.NODE_ENV){var e=Y[b];if(e && e.parentNode !== d){"production" !== c.env.NODE_ENV?P(h(e) === b,"ReactMount: Root element ID differed from reactRootID."):void 0;var f=d.firstChild;f && b === h(f)?Y[b] = f:"production" !== c.env.NODE_ENV?P(!1,"ReactMount: Root element has been removed from its original container. New container: %s",e.parentNode):void 0;}}return d;},findReactNodeByID:function findReactNodeByID(a){var b=aa.findReactContainerForID(a);return aa.findComponentRoot(b,a);},getFirstReactDOM:function getFirstReactDOM(a){return t(a);},findComponentRoot:function findComponentRoot(a,b){var d=Z,e=0,f=o(b) || a;for("production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?P(null != f,"React can't find the root component node for data-reactid value `%s`. If you're seeing this message, it probably means that you've loaded two copies of React on the page. At this time, only a single copy of React can be loaded at a time.",b):void 0),d[0] = f.firstChild,d.length = 1;e < d.length;) {for(var g,h=d[e++];h;) {var i=aa.getID(h);i?b === i?g = h:A.isAncestorIDOf(i,b) && (d.length = e = 0,d.push(h.firstChild)):d.push(h.firstChild),h = h.nextSibling;}if(g)return d.length = 0,g;}d.length = 0,"production" !== c.env.NODE_ENV?L(!1,"findComponentRoot(..., %s): Unable to find element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.",b,aa.getID(a)):L(!1);},_mountImageIntoNode:function _mountImageIntoNode(a,b,f,g){if((!b || b.nodeType !== S && b.nodeType !== T && b.nodeType !== U?"production" !== c.env.NODE_ENV?L(!1,"mountComponentIntoNode(...): Target container is not valid."):L(!1):void 0,f)){var h=e(b);if(C.canReuseMarkup(a,h))return;var i=h.getAttribute(C.CHECKSUM_ATTR_NAME);h.removeAttribute(C.CHECKSUM_ATTR_NAME);var j=h.outerHTML;h.setAttribute(C.CHECKSUM_ATTR_NAME,i);var k=a;if("production" !== c.env.NODE_ENV){var l;b.nodeType === S?(l = document.createElement("div"),l.innerHTML = a,k = l.innerHTML):(l = document.createElement("iframe"),document.body.appendChild(l),l.contentDocument.write(a),k = l.contentDocument.documentElement.outerHTML,document.body.removeChild(l));}var m=d(k,j),n=" (client) " + k.substring(m - 20,m + 20) + "\n (server) " + j.substring(m - 20,m + 20);b.nodeType === T?"production" !== c.env.NODE_ENV?L(!1,"You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s",n):L(!1):void 0,"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?P(!1,"React attempted to reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server:\n%s",n):void 0);}if((b.nodeType === T?"production" !== c.env.NODE_ENV?L(!1,"You're trying to render a component to the document but you didn't use server rendering. We can't do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering."):L(!1):void 0,g.useCreateElement)){for(;b.lastChild;) {b.removeChild(b.lastChild);}b.appendChild(a);}else M(b,a);},ownerDocumentContextKey:V,getReactRootID:f,getID:g,setID:i,getNode:j,getNodeFromInstance:k,isValid:l,purgeID:m};D.measureMethods(aa,"ReactMount",{_renderNewRootComponent:"_renderNewRootComponent",_mountImageIntoNode:"_mountImageIntoNode"}),b.exports = aa;}).call(this,a("_process"));},{"./DOMProperty":12,"./Object.assign":25,"./ReactBrowserEventEmitter":29,"./ReactCurrentOwner":37,"./ReactDOMFeatureFlags":42,"./ReactElement":55,"./ReactEmptyComponentRegistry":58,"./ReactInstanceHandles":64,"./ReactInstanceMap":65,"./ReactMarkupChecksum":67,"./ReactPerf":74,"./ReactReconciler":79,"./ReactUpdateQueue":85,"./ReactUpdates":86,"./instantiateReactComponent":121,"./setInnerHTML":127,"./shouldUpdateReactComponent":129,"./validateDOMNesting":131,_process:1,"fbjs/lib/containsNode":136,"fbjs/lib/emptyObject":140,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],69:[function(a,b,c){(function(c){"use strict";function d(a,b,c){r.push({parentID:a,parentNode:null,type:l.INSERT_MARKUP,markupIndex:s.push(b) - 1,content:null,fromIndex:null,toIndex:c});}function e(a,b,c){r.push({parentID:a,parentNode:null,type:l.MOVE_EXISTING,markupIndex:null,content:null,fromIndex:b,toIndex:c});}function f(a,b){r.push({parentID:a,parentNode:null,type:l.REMOVE_NODE,markupIndex:null,content:null,fromIndex:b,toIndex:null});}function g(a,b){r.push({parentID:a,parentNode:null,type:l.SET_MARKUP,markupIndex:null,content:b,fromIndex:null,toIndex:null});}function h(a,b){r.push({parentID:a,parentNode:null,type:l.TEXT_CONTENT,markupIndex:null,content:b,fromIndex:null,toIndex:null});}function i(){r.length && (k.processChildrenUpdates(r,s),j());}function j(){r.length = 0,s.length = 0;}var k=a("./ReactComponentEnvironment"),l=a("./ReactMultiChildUpdateTypes"),m=a("./ReactCurrentOwner"),n=a("./ReactReconciler"),o=a("./ReactChildReconciler"),p=a("./flattenChildren"),q=0,r=[],s=[],t={Mixin:{_reconcilerInstantiateChildren:function _reconcilerInstantiateChildren(a,b,d){if("production" !== c.env.NODE_ENV && this._currentElement)try{return m.current = this._currentElement._owner,o.instantiateChildren(a,b,d);}finally {m.current = null;}return o.instantiateChildren(a,b,d);},_reconcilerUpdateChildren:function _reconcilerUpdateChildren(a,b,d,e){var f;if("production" !== c.env.NODE_ENV && this._currentElement){try{m.current = this._currentElement._owner,f = p(b);}finally {m.current = null;}return o.updateChildren(a,f,d,e);}return f = p(b),o.updateChildren(a,f,d,e);},mountChildren:function mountChildren(a,b,c){var d=this._reconcilerInstantiateChildren(a,b,c);this._renderedChildren = d;var e=[],f=0;for(var g in d) {if(d.hasOwnProperty(g)){var h=d[g],i=this._rootNodeID + g,j=n.mountComponent(h,i,b,c);h._mountIndex = f++,e.push(j);}}return e;},updateTextContent:function updateTextContent(a){q++;var b=!0;try{var c=this._renderedChildren;o.unmountChildren(c);for(var d in c) {c.hasOwnProperty(d) && this._unmountChild(c[d]);}this.setTextContent(a),b = !1;}finally {q--,q || (b?j():i());}},updateMarkup:function updateMarkup(a){q++;var b=!0;try{var c=this._renderedChildren;o.unmountChildren(c);for(var d in c) {c.hasOwnProperty(d) && this._unmountChildByName(c[d],d);}this.setMarkup(a),b = !1;}finally {q--,q || (b?j():i());}},updateChildren:function updateChildren(a,b,c){q++;var d=!0;try{this._updateChildren(a,b,c),d = !1;}finally {q--,q || (d?j():i());}},_updateChildren:function _updateChildren(a,b,c){var d=this._renderedChildren,e=this._reconcilerUpdateChildren(d,a,b,c);if((this._renderedChildren = e,e || d)){var f,g=0,h=0;for(f in e) {if(e.hasOwnProperty(f)){var i=d && d[f],j=e[f];i === j?(this.moveChild(i,h,g),g = Math.max(i._mountIndex,g),i._mountIndex = h):(i && (g = Math.max(i._mountIndex,g),this._unmountChild(i)),this._mountChildByNameAtIndex(j,f,h,b,c)),h++;}}for(f in d) {!d.hasOwnProperty(f) || e && e.hasOwnProperty(f) || this._unmountChild(d[f]);}}},unmountChildren:function unmountChildren(){var a=this._renderedChildren;o.unmountChildren(a),this._renderedChildren = null;},moveChild:function moveChild(a,b,c){a._mountIndex < c && e(this._rootNodeID,a._mountIndex,b);},createChild:function createChild(a,b){d(this._rootNodeID,b,a._mountIndex);},removeChild:function removeChild(a){f(this._rootNodeID,a._mountIndex);},setTextContent:function setTextContent(a){h(this._rootNodeID,a);},setMarkup:function setMarkup(a){g(this._rootNodeID,a);},_mountChildByNameAtIndex:function _mountChildByNameAtIndex(a,b,c,d,e){var f=this._rootNodeID + b,g=n.mountComponent(a,f,d,e);a._mountIndex = c,this.createChild(a,g);},_unmountChild:function _unmountChild(a){this.removeChild(a),a._mountIndex = null;}}};b.exports = t;}).call(this,a("_process"));},{"./ReactChildReconciler":30,"./ReactComponentEnvironment":35,"./ReactCurrentOwner":37,"./ReactMultiChildUpdateTypes":70,"./ReactReconciler":79,"./flattenChildren":112,_process:1}],70:[function(a,b,c){"use strict";var d=a("fbjs/lib/keyMirror"),e=d({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,SET_MARKUP:null,TEXT_CONTENT:null});b.exports = e;},{"fbjs/lib/keyMirror":150}],71:[function(a,b,c){(function(c){"use strict";function d(a){if("function" == typeof a.type)return a.type;var b=a.type,c=l[b];return null == c && (l[b] = c = j(b)),c;}function e(a){return k?void 0:"production" !== c.env.NODE_ENV?i(!1,"There is no registered component for the tag %s",a.type):i(!1),new k(a.type,a.props);}function f(a){return new m(a);}function g(a){return a instanceof m;}var h=a("./Object.assign"),i=a("fbjs/lib/invariant"),j=null,k=null,l={},m=null,n={injectGenericComponentClass:function injectGenericComponentClass(a){k = a;},injectTextComponentClass:function injectTextComponentClass(a){m = a;},injectComponentClasses:function injectComponentClasses(a){h(l,a);}},o={getComponentClassForElement:d,createInternalComponent:e,createInstanceForText:f,isTextComponent:g,injection:n};b.exports = o;}).call(this,a("_process"));},{"./Object.assign":25,_process:1,"fbjs/lib/invariant":147}],72:[function(a,b,c){(function(c){"use strict";function d(a,b){"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?e(!1,"%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.",b,b,a.constructor && a.constructor.displayName || ""):void 0);}var e=a("fbjs/lib/warning"),f={isMounted:function isMounted(a){return !1;},enqueueCallback:function enqueueCallback(a,b){},enqueueForceUpdate:function enqueueForceUpdate(a){d(a,"forceUpdate");},enqueueReplaceState:function enqueueReplaceState(a,b){d(a,"replaceState");},enqueueSetState:function enqueueSetState(a,b){d(a,"setState");},enqueueSetProps:function enqueueSetProps(a,b){d(a,"setProps");},enqueueReplaceProps:function enqueueReplaceProps(a,b){d(a,"replaceProps");}};b.exports = f;}).call(this,a("_process"));},{_process:1,"fbjs/lib/warning":158}],73:[function(a,b,c){(function(c){"use strict";var d=a("fbjs/lib/invariant"),e={isValidOwner:function isValidOwner(a){return !(!a || "function" != typeof a.attachRef || "function" != typeof a.detachRef);},addComponentAsRefTo:function addComponentAsRefTo(a,b,f){e.isValidOwner(f)?void 0:"production" !== c.env.NODE_ENV?d(!1,"addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner)."):d(!1),f.attachRef(b,a);},removeComponentAsRefFrom:function removeComponentAsRefFrom(a,b,f){e.isValidOwner(f)?void 0:"production" !== c.env.NODE_ENV?d(!1,"removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner)."):d(!1),f.getPublicInstance().refs[b] === a.getPublicInstance() && f.detachRef(b);}};b.exports = e;}).call(this,a("_process"));},{_process:1,"fbjs/lib/invariant":147}],74:[function(a,b,c){(function(a){"use strict";function c(a,b,c){return c;}var d={enableMeasure:!1,storedMeasure:c,measureMethods:function measureMethods(b,c,e){if("production" !== a.env.NODE_ENV)for(var f in e) {e.hasOwnProperty(f) && (b[f] = d.measure(c,e[f],b[f]));}},measure:function measure(b,c,e){if("production" !== a.env.NODE_ENV){var f=null,g=function g(){return d.enableMeasure?(f || (f = d.storedMeasure(b,c,e)),f.apply(this,arguments)):e.apply(this,arguments);};return g.displayName = b + "_" + c,g;}return e;},injection:{injectMeasure:function injectMeasure(a){d.storedMeasure = a;}}};b.exports = d;}).call(this,a("_process"));},{_process:1}],75:[function(a,b,c){(function(a){"use strict";var c={};"production" !== a.env.NODE_ENV && (c = {prop:"prop",context:"context",childContext:"child context"}),b.exports = c;}).call(this,a("_process"));},{_process:1}],76:[function(a,b,c){"use strict";var d=a("fbjs/lib/keyMirror"),e=d({prop:null,context:null,childContext:null});b.exports = e;},{"fbjs/lib/keyMirror":150}],77:[function(a,b,c){"use strict";function d(a){function b(b,c,d,e,f,g){if((e = e || w,g = g || d,null == c[d])){var h=t[f];return b?new Error("Required " + h + " `" + g + "` was not specified in " + ("`" + e + "`.")):null;}return a(c,d,e,f,g);}var c=b.bind(null,!1);return c.isRequired = b.bind(null,!0),c;}function e(a){function b(b,c,d,e,f){var g=b[c],h=p(g);if(h !== a){var i=t[e],j=q(g);return new Error("Invalid " + i + " `" + f + "` of type " + ("`" + j + "` supplied to `" + d + "`, expected ") + ("`" + a + "`."));}return null;}return d(b);}function f(){return d(u.thatReturns(null));}function g(a){function b(b,c,d,e,f){var g=b[c];if(!Array.isArray(g)){var h=t[e],i=p(g);return new Error("Invalid " + h + " `" + f + "` of type " + ("`" + i + "` supplied to `" + d + "`, expected an array."));}for(var j=0;j < g.length;j++) {var k=a(g,j,d,e,f + "[" + j + "]");if(k instanceof Error)return k;}return null;}return d(b);}function h(){function a(a,b,c,d,e){if(!s.isValidElement(a[b])){var f=t[d];return new Error("Invalid " + f + " `" + e + "` supplied to " + ("`" + c + "`, expected a single ReactElement."));}return null;}return d(a);}function i(a){function b(b,c,d,e,f){if(!(b[c] instanceof a)){var g=t[e],h=a.name || w,i=r(b[c]);return new Error("Invalid " + g + " `" + f + "` of type " + ("`" + i + "` supplied to `" + d + "`, expected ") + ("instance of `" + h + "`."));}return null;}return d(b);}function j(a){function b(b,c,d,e,f){for(var g=b[c],h=0;h < a.length;h++) {if(g === a[h])return null;}var i=t[e],j=JSON.stringify(a);return new Error("Invalid " + i + " `" + f + "` of value `" + g + "` " + ("supplied to `" + d + "`, expected one of " + j + "."));}return d(Array.isArray(a)?b:function(){return new Error("Invalid argument supplied to oneOf, expected an instance of array.");});}function k(a){function b(b,c,d,e,f){var g=b[c],h=p(g);if("object" !== h){var i=t[e];return new Error("Invalid " + i + " `" + f + "` of type " + ("`" + h + "` supplied to `" + d + "`, expected an object."));}for(var j in g) {if(g.hasOwnProperty(j)){var k=a(g,j,d,e,f + "." + j);if(k instanceof Error)return k;}}return null;}return d(b);}function l(a){function b(b,c,d,e,f){for(var g=0;g < a.length;g++) {var h=a[g];if(null == h(b,c,d,e,f))return null;}var i=t[e];return new Error("Invalid " + i + " `" + f + "` supplied to " + ("`" + d + "`."));}return d(Array.isArray(a)?b:function(){return new Error("Invalid argument supplied to oneOfType, expected an instance of array.");});}function m(){function a(a,b,c,d,e){if(!o(a[b])){var f=t[d];return new Error("Invalid " + f + " `" + e + "` supplied to " + ("`" + c + "`, expected a ReactNode."));}return null;}return d(a);}function n(a){function b(b,c,d,e,f){var g=b[c],h=p(g);if("object" !== h){var i=t[e];return new Error("Invalid " + i + " `" + f + "` of type `" + h + "` " + ("supplied to `" + d + "`, expected `object`."));}for(var j in a) {var k=a[j];if(k){var l=k(g,j,d,e,f + "." + j);if(l)return l;}}return null;}return d(b);}function o(a){switch(typeof a === "undefined"?"undefined":_typeof(a)){case "number":case "string":case "undefined":return !0;case "boolean":return !a;case "object":if(Array.isArray(a))return a.every(o);if(null === a || s.isValidElement(a))return !0;var b=v(a);if(!b)return !1;var c,d=b.call(a);if(b !== a.entries){for(;!(c = d.next()).done;) {if(!o(c.value))return !1;}}else for(;!(c = d.next()).done;) {var e=c.value;if(e && !o(e[1]))return !1;}return !0;default:return !1;}}function p(a){var b=typeof a === "undefined"?"undefined":_typeof(a);return Array.isArray(a)?"array":a instanceof RegExp?"object":b;}function q(a){var b=p(a);if("object" === b){if(a instanceof Date)return "date";if(a instanceof RegExp)return "regexp";}return b;}function r(a){return a.constructor && a.constructor.name?a.constructor.name:"<<anonymous>>";}var s=a("./ReactElement"),t=a("./ReactPropTypeLocationNames"),u=a("fbjs/lib/emptyFunction"),v=a("./getIteratorFn"),w="<<anonymous>>",x={array:e("array"),bool:e("boolean"),func:e("function"),number:e("number"),object:e("object"),string:e("string"),any:f(),arrayOf:g,element:h(),instanceOf:i,node:m(),objectOf:k,oneOf:j,oneOfType:l,shape:n};b.exports = x;},{"./ReactElement":55,"./ReactPropTypeLocationNames":75,"./getIteratorFn":118,"fbjs/lib/emptyFunction":139}],78:[function(a,b,c){"use strict";function d(a){this.reinitializeTransaction(),this.renderToStaticMarkup = !1,this.reactMountReady = e.getPooled(null),this.useCreateElement = !a && h.useCreateElement;}var e=a("./CallbackQueue"),f=a("./PooledClass"),g=a("./ReactBrowserEventEmitter"),h=a("./ReactDOMFeatureFlags"),i=a("./ReactInputSelection"),j=a("./Transaction"),k=a("./Object.assign"),l={initialize:i.getSelectionInformation,close:i.restoreSelection},m={initialize:function initialize(){var a=g.isEnabled();return g.setEnabled(!1),a;},close:function close(a){g.setEnabled(a);}},n={initialize:function initialize(){this.reactMountReady.reset();},close:function close(){this.reactMountReady.notifyAll();}},o=[l,m,n],p={getTransactionWrappers:function getTransactionWrappers(){return o;},getReactMountReady:function getReactMountReady(){return this.reactMountReady;},destructor:function destructor(){e.release(this.reactMountReady),this.reactMountReady = null;}};k(d.prototype,j.Mixin,p),f.addPoolingTo(d),b.exports = d;},{"./CallbackQueue":8,"./Object.assign":25,"./PooledClass":26,"./ReactBrowserEventEmitter":29,"./ReactDOMFeatureFlags":42,"./ReactInputSelection":63,"./Transaction":103}],79:[function(a,b,c){"use strict";function d(){e.attachRefs(this,this._currentElement);}var e=a("./ReactRef"),f={mountComponent:function mountComponent(a,b,c,e){var f=a.mountComponent(b,c,e);return a._currentElement && null != a._currentElement.ref && c.getReactMountReady().enqueue(d,a),f;},unmountComponent:function unmountComponent(a){e.detachRefs(a,a._currentElement),a.unmountComponent();},receiveComponent:function receiveComponent(a,b,c,f){var g=a._currentElement;if(b !== g || f !== a._context){var h=e.shouldUpdateRefs(g,b);h && e.detachRefs(a,g),a.receiveComponent(b,c,f),h && a._currentElement && null != a._currentElement.ref && c.getReactMountReady().enqueue(d,a);}},performUpdateIfNecessary:function performUpdateIfNecessary(a,b){a.performUpdateIfNecessary(b);}};b.exports = f;},{"./ReactRef":80}],80:[function(a,b,c){"use strict";function d(a,b,c){"function" == typeof a?a(b.getPublicInstance()):f.addComponentAsRefTo(b,a,c);}function e(a,b,c){"function" == typeof a?a(null):f.removeComponentAsRefFrom(b,a,c);}var f=a("./ReactOwner"),g={};g.attachRefs = function(a,b){if(null !== b && b !== !1){var c=b.ref;null != c && d(c,a,b._owner);}},g.shouldUpdateRefs = function(a,b){var c=null === a || a === !1,d=null === b || b === !1;return c || d || b._owner !== a._owner || b.ref !== a.ref;},g.detachRefs = function(a,b){if(null !== b && b !== !1){var c=b.ref;null != c && e(c,a,b._owner);}},b.exports = g;},{"./ReactOwner":73}],81:[function(a,b,c){"use strict";var d={injectCreateReactRootIndex:function injectCreateReactRootIndex(a){e.createReactRootIndex = a;}},e={createReactRootIndex:null,injection:d};b.exports = e;},{}],82:[function(a,b,c){"use strict";var d={isBatchingUpdates:!1,batchedUpdates:function batchedUpdates(a){}};b.exports = d;},{}],83:[function(a,b,c){(function(c){"use strict";function d(a){g.isValidElement(a)?void 0:"production" !== c.env.NODE_ENV?o(!1,"renderToString(): You must pass a valid ReactElement."):o(!1);var b;try{l.injection.injectBatchingStrategy(j);var d=h.createReactRootID();return b = k.getPooled(!1),b.perform(function(){var c=n(a,null),e=c.mountComponent(d,b,m);return i.addChecksumToMarkup(e);},null);}finally {k.release(b),l.injection.injectBatchingStrategy(f);}}function e(a){g.isValidElement(a)?void 0:"production" !== c.env.NODE_ENV?o(!1,"renderToStaticMarkup(): You must pass a valid ReactElement."):o(!1);var b;try{l.injection.injectBatchingStrategy(j);var d=h.createReactRootID();return b = k.getPooled(!0),b.perform(function(){var c=n(a,null);return c.mountComponent(d,b,m);},null);}finally {k.release(b),l.injection.injectBatchingStrategy(f);}}var f=a("./ReactDefaultBatchingStrategy"),g=a("./ReactElement"),h=a("./ReactInstanceHandles"),i=a("./ReactMarkupChecksum"),j=a("./ReactServerBatchingStrategy"),k=a("./ReactServerRenderingTransaction"),l=a("./ReactUpdates"),m=a("fbjs/lib/emptyObject"),n=a("./instantiateReactComponent"),o=a("fbjs/lib/invariant");b.exports = {renderToString:d,renderToStaticMarkup:e};}).call(this,a("_process"));},{"./ReactDefaultBatchingStrategy":51,"./ReactElement":55,"./ReactInstanceHandles":64,"./ReactMarkupChecksum":67,"./ReactServerBatchingStrategy":82,"./ReactServerRenderingTransaction":84,"./ReactUpdates":86,"./instantiateReactComponent":121,_process:1,"fbjs/lib/emptyObject":140,"fbjs/lib/invariant":147}],84:[function(a,b,c){"use strict";function d(a){this.reinitializeTransaction(),this.renderToStaticMarkup = a,this.reactMountReady = f.getPooled(null),this.useCreateElement = !1;}var e=a("./PooledClass"),f=a("./CallbackQueue"),g=a("./Transaction"),h=a("./Object.assign"),i=a("fbjs/lib/emptyFunction"),j={initialize:function initialize(){this.reactMountReady.reset();},close:i},k=[j],l={getTransactionWrappers:function getTransactionWrappers(){return k;},getReactMountReady:function getReactMountReady(){return this.reactMountReady;},destructor:function destructor(){f.release(this.reactMountReady),this.reactMountReady = null;}};h(d.prototype,g.Mixin,l),e.addPoolingTo(d),b.exports = d;},{"./CallbackQueue":8,"./Object.assign":25,"./PooledClass":26,"./Transaction":103,"fbjs/lib/emptyFunction":139}],85:[function(a,b,c){(function(c){"use strict";function d(a){i.enqueueUpdate(a);}function e(a,b){var d=h.get(a);return d?("production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?l(null == f.current,"%s(...): Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.",b):void 0),d):("production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?l(!b,"%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.",b,b,a.constructor.displayName):void 0),null);}var f=a("./ReactCurrentOwner"),g=a("./ReactElement"),h=a("./ReactInstanceMap"),i=a("./ReactUpdates"),j=a("./Object.assign"),k=a("fbjs/lib/invariant"),l=a("fbjs/lib/warning"),m={isMounted:function isMounted(a){if("production" !== c.env.NODE_ENV){var b=f.current;null !== b && ("production" !== c.env.NODE_ENV?l(b._warnedAboutRefsInRender,"%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",b.getName() || "A component"):void 0,b._warnedAboutRefsInRender = !0);}var d=h.get(a);return d?!!d._renderedComponent:!1;},enqueueCallback:function enqueueCallback(a,b){"function" != typeof b?"production" !== c.env.NODE_ENV?k(!1,"enqueueCallback(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn't callable."):k(!1):void 0;var f=e(a);return f?(f._pendingCallbacks?f._pendingCallbacks.push(b):f._pendingCallbacks = [b],void d(f)):null;},enqueueCallbackInternal:function enqueueCallbackInternal(a,b){"function" != typeof b?"production" !== c.env.NODE_ENV?k(!1,"enqueueCallback(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn't callable."):k(!1):void 0,a._pendingCallbacks?a._pendingCallbacks.push(b):a._pendingCallbacks = [b],d(a);},enqueueForceUpdate:function enqueueForceUpdate(a){var b=e(a,"forceUpdate");b && (b._pendingForceUpdate = !0,d(b));},enqueueReplaceState:function enqueueReplaceState(a,b){var c=e(a,"replaceState");c && (c._pendingStateQueue = [b],c._pendingReplaceState = !0,d(c));},enqueueSetState:function enqueueSetState(a,b){var c=e(a,"setState");if(c){var f=c._pendingStateQueue || (c._pendingStateQueue = []);f.push(b),d(c);}},enqueueSetProps:function enqueueSetProps(a,b){var c=e(a,"setProps");c && m.enqueueSetPropsInternal(c,b);},enqueueSetPropsInternal:function enqueueSetPropsInternal(a,b){var e=a._topLevelWrapper;e?void 0:"production" !== c.env.NODE_ENV?k(!1,"setProps(...): You called `setProps` on a component with a parent. This is an anti-pattern since props will get reactively updated when rendered. Instead, change the owner's `render` method to pass the correct value as props to the component where it is created."):k(!1);var f=e._pendingElement || e._currentElement,h=f.props,i=j({},h.props,b);e._pendingElement = g.cloneAndReplaceProps(f,g.cloneAndReplaceProps(h,i)),d(e);},enqueueReplaceProps:function enqueueReplaceProps(a,b){var c=e(a,"replaceProps");c && m.enqueueReplacePropsInternal(c,b);},enqueueReplacePropsInternal:function enqueueReplacePropsInternal(a,b){var e=a._topLevelWrapper;e?void 0:"production" !== c.env.NODE_ENV?k(!1,"replaceProps(...): You called `replaceProps` on a component with a parent. This is an anti-pattern since props will get reactively updated when rendered. Instead, change the owner's `render` method to pass the correct value as props to the component where it is created."):k(!1);var f=e._pendingElement || e._currentElement,h=f.props;e._pendingElement = g.cloneAndReplaceProps(f,g.cloneAndReplaceProps(h,b)),d(e);},enqueueElementInternal:function enqueueElementInternal(a,b){a._pendingElement = b,d(a);}};b.exports = m;}).call(this,a("_process"));},{"./Object.assign":25,"./ReactCurrentOwner":37,"./ReactElement":55,"./ReactInstanceMap":65,"./ReactUpdates":86,_process:1,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],86:[function(a,b,c){(function(c){"use strict";function d(){A.ReactReconcileTransaction && u?void 0:"production" !== c.env.NODE_ENV?q(!1,"ReactUpdates: must inject a reconcile transaction class and batching strategy"):q(!1);}function e(){this.reinitializeTransaction(),this.dirtyComponentsLength = null,this.callbackQueue = k.getPooled(),this.reconcileTransaction = A.ReactReconcileTransaction.getPooled(!1);}function f(a,b,c,e,f,g){d(),u.batchedUpdates(a,b,c,e,f,g);}function g(a,b){return a._mountOrder - b._mountOrder;}function h(a){var b=a.dirtyComponentsLength;b !== r.length?"production" !== c.env.NODE_ENV?q(!1,"Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).",b,r.length):q(!1):void 0,r.sort(g);for(var d=0;b > d;d++) {var e=r[d],f=e._pendingCallbacks;if((e._pendingCallbacks = null,n.performUpdateIfNecessary(e,a.reconcileTransaction),f))for(var h=0;h < f.length;h++) {a.callbackQueue.enqueue(f[h],e.getPublicInstance());}}}function i(a){return d(),u.isBatchingUpdates?void r.push(a):void u.batchedUpdates(i,a);}function j(a,b){u.isBatchingUpdates?void 0:"production" !== c.env.NODE_ENV?q(!1,"ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched."):q(!1),s.enqueue(a,b),t = !0;}var k=a("./CallbackQueue"),l=a("./PooledClass"),m=a("./ReactPerf"),n=a("./ReactReconciler"),o=a("./Transaction"),p=a("./Object.assign"),q=a("fbjs/lib/invariant"),r=[],s=k.getPooled(),t=!1,u=null,v={initialize:function initialize(){this.dirtyComponentsLength = r.length;},close:function close(){this.dirtyComponentsLength !== r.length?(r.splice(0,this.dirtyComponentsLength),y()):r.length = 0;}},w={initialize:function initialize(){this.callbackQueue.reset();},close:function close(){this.callbackQueue.notifyAll();}},x=[v,w];p(e.prototype,o.Mixin,{getTransactionWrappers:function getTransactionWrappers(){return x;},destructor:function destructor(){this.dirtyComponentsLength = null,k.release(this.callbackQueue),this.callbackQueue = null,A.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction = null;},perform:function perform(a,b,c){return o.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,a,b,c);}}),l.addPoolingTo(e);var y=function y(){for(;r.length || t;) {if(r.length){var a=e.getPooled();a.perform(h,null,a),e.release(a);}if(t){t = !1;var b=s;s = k.getPooled(),b.notifyAll(),k.release(b);}}};y = m.measure("ReactUpdates","flushBatchedUpdates",y);var z={injectReconcileTransaction:function injectReconcileTransaction(a){a?void 0:"production" !== c.env.NODE_ENV?q(!1,"ReactUpdates: must provide a reconcile transaction class"):q(!1),A.ReactReconcileTransaction = a;},injectBatchingStrategy:function injectBatchingStrategy(a){a?void 0:"production" !== c.env.NODE_ENV?q(!1,"ReactUpdates: must provide a batching strategy"):q(!1),"function" != typeof a.batchedUpdates?"production" !== c.env.NODE_ENV?q(!1,"ReactUpdates: must provide a batchedUpdates() function"):q(!1):void 0,"boolean" != typeof a.isBatchingUpdates?"production" !== c.env.NODE_ENV?q(!1,"ReactUpdates: must provide an isBatchingUpdates boolean attribute"):q(!1):void 0,u = a;}},A={ReactReconcileTransaction:null,batchedUpdates:f,enqueueUpdate:i,flushBatchedUpdates:y,injection:z,asap:j};b.exports = A;}).call(this,a("_process"));},{"./CallbackQueue":8,"./Object.assign":25,"./PooledClass":26,"./ReactPerf":74,"./ReactReconciler":79,"./Transaction":103,_process:1,"fbjs/lib/invariant":147}],87:[function(a,b,c){"use strict";b.exports = "0.14.6";},{}],88:[function(a,b,c){"use strict";var d=a("./DOMProperty"),e=d.injection.MUST_USE_ATTRIBUTE,f={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},g={Properties:{clipPath:e,cx:e,cy:e,d:e,dx:e,dy:e,fill:e,fillOpacity:e,fontFamily:e,fontSize:e,fx:e,fy:e,gradientTransform:e,gradientUnits:e,markerEnd:e,markerMid:e,markerStart:e,offset:e,opacity:e,patternContentUnits:e,patternUnits:e,points:e,preserveAspectRatio:e,r:e,rx:e,ry:e,spreadMethod:e,stopColor:e,stopOpacity:e,stroke:e,strokeDasharray:e,strokeLinecap:e,strokeOpacity:e,strokeWidth:e,textAnchor:e,transform:e,version:e,viewBox:e,x1:e,x2:e,x:e,xlinkActuate:e,xlinkArcrole:e,xlinkHref:e,xlinkRole:e,xlinkShow:e,xlinkTitle:e,xlinkType:e,xmlBase:e,xmlLang:e,xmlSpace:e,y1:e,y2:e,y:e},DOMAttributeNamespaces:{xlinkActuate:f.xlink,xlinkArcrole:f.xlink,xlinkHref:f.xlink,xlinkRole:f.xlink,xlinkShow:f.xlink,xlinkTitle:f.xlink,xlinkType:f.xlink,xmlBase:f.xml,xmlLang:f.xml,xmlSpace:f.xml},DOMAttributeNames:{clipPath:"clip-path",fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlLang:"xml:lang",xmlSpace:"xml:space"}};b.exports = g;},{"./DOMProperty":12}],89:[function(a,b,c){"use strict";function d(a){if("selectionStart" in a && i.hasSelectionCapabilities(a))return {start:a.selectionStart,end:a.selectionEnd};if(window.getSelection){var b=window.getSelection();return {anchorNode:b.anchorNode,anchorOffset:b.anchorOffset,focusNode:b.focusNode,focusOffset:b.focusOffset};}if(document.selection){var c=document.selection.createRange();return {parentElement:c.parentElement(),text:c.text,top:c.boundingTop,left:c.boundingLeft};}}function e(a,b){if(u || null == r || r !== k())return null;var c=d(r);if(!t || !n(t,c)){t = c;var e=j.getPooled(q.select,s,a,b);return e.type = "select",e.target = r,g.accumulateTwoPhaseDispatches(e),e;}return null;}var f=a("./EventConstants"),g=a("./EventPropagators"),h=a("fbjs/lib/ExecutionEnvironment"),i=a("./ReactInputSelection"),j=a("./SyntheticEvent"),k=a("fbjs/lib/getActiveElement"),l=a("./isTextInputElement"),m=a("fbjs/lib/keyOf"),n=a("fbjs/lib/shallowEqual"),o=f.topLevelTypes,p=h.canUseDOM && "documentMode" in document && document.documentMode <= 11,q={select:{phasedRegistrationNames:{bubbled:m({onSelect:null}),captured:m({onSelectCapture:null})},dependencies:[o.topBlur,o.topContextMenu,o.topFocus,o.topKeyDown,o.topMouseDown,o.topMouseUp,o.topSelectionChange]}},r=null,s=null,t=null,u=!1,v=!1,w=m({onSelect:null}),x={eventTypes:q,extractEvents:function extractEvents(a,b,c,d,f){if(!v)return null;switch(a){case o.topFocus:(l(b) || "true" === b.contentEditable) && (r = b,s = c,t = null);break;case o.topBlur:r = null,s = null,t = null;break;case o.topMouseDown:u = !0;break;case o.topContextMenu:case o.topMouseUp:return u = !1,e(d,f);case o.topSelectionChange:if(p)break;case o.topKeyDown:case o.topKeyUp:return e(d,f);}return null;},didPutListener:function didPutListener(a,b,c){b === w && (v = !0);}};b.exports = x;},{"./EventConstants":17,"./EventPropagators":21,"./ReactInputSelection":63,"./SyntheticEvent":95,"./isTextInputElement":123,"fbjs/lib/ExecutionEnvironment":133,"fbjs/lib/getActiveElement":142,"fbjs/lib/keyOf":151,"fbjs/lib/shallowEqual":156}],90:[function(a,b,c){"use strict";var d=Math.pow(2,53),e={createReactRootIndex:function createReactRootIndex(){return Math.ceil(Math.random() * d);}};b.exports = e;},{}],91:[function(a,b,c){(function(c){"use strict";var d=a("./EventConstants"),e=a("fbjs/lib/EventListener"),f=a("./EventPropagators"),g=a("./ReactMount"),h=a("./SyntheticClipboardEvent"),i=a("./SyntheticEvent"),j=a("./SyntheticFocusEvent"),k=a("./SyntheticKeyboardEvent"),l=a("./SyntheticMouseEvent"),m=a("./SyntheticDragEvent"),n=a("./SyntheticTouchEvent"),o=a("./SyntheticUIEvent"),p=a("./SyntheticWheelEvent"),q=a("fbjs/lib/emptyFunction"),r=a("./getEventCharCode"),s=a("fbjs/lib/invariant"),t=a("fbjs/lib/keyOf"),u=d.topLevelTypes,v={abort:{phasedRegistrationNames:{bubbled:t({onAbort:!0}),captured:t({onAbortCapture:!0})}},blur:{phasedRegistrationNames:{bubbled:t({onBlur:!0}),captured:t({onBlurCapture:!0})}},canPlay:{phasedRegistrationNames:{bubbled:t({onCanPlay:!0}),captured:t({onCanPlayCapture:!0})}},canPlayThrough:{phasedRegistrationNames:{bubbled:t({onCanPlayThrough:!0}),captured:t({onCanPlayThroughCapture:!0})}},click:{phasedRegistrationNames:{bubbled:t({onClick:!0}),captured:t({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:t({onContextMenu:!0}),captured:t({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:t({onCopy:!0}),captured:t({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:t({onCut:!0}),captured:t({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:t({onDoubleClick:!0}),captured:t({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:t({onDrag:!0}),captured:t({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:t({onDragEnd:!0}),captured:t({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:t({onDragEnter:!0}),captured:t({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:t({onDragExit:!0}),captured:t({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:t({onDragLeave:!0}),captured:t({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:t({onDragOver:!0}),captured:t({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:t({onDragStart:!0}),captured:t({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:t({onDrop:!0}),captured:t({onDropCapture:!0})}},durationChange:{phasedRegistrationNames:{bubbled:t({onDurationChange:!0}),captured:t({onDurationChangeCapture:!0})}},emptied:{phasedRegistrationNames:{bubbled:t({onEmptied:!0}),captured:t({onEmptiedCapture:!0})}},encrypted:{phasedRegistrationNames:{bubbled:t({onEncrypted:!0}),captured:t({onEncryptedCapture:!0})}},ended:{phasedRegistrationNames:{bubbled:t({onEnded:!0}),captured:t({onEndedCapture:!0})}},error:{phasedRegistrationNames:{bubbled:t({onError:!0}),captured:t({onErrorCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:t({onFocus:!0}),captured:t({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:t({onInput:!0}),captured:t({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:t({onKeyDown:!0}),captured:t({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:t({onKeyPress:!0}),captured:t({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:t({onKeyUp:!0}),captured:t({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:t({onLoad:!0}),captured:t({onLoadCapture:!0})}},loadedData:{phasedRegistrationNames:{bubbled:t({onLoadedData:!0}),captured:t({onLoadedDataCapture:!0})}},loadedMetadata:{phasedRegistrationNames:{bubbled:t({onLoadedMetadata:!0}),captured:t({onLoadedMetadataCapture:!0})}},loadStart:{phasedRegistrationNames:{bubbled:t({onLoadStart:!0}),captured:t({onLoadStartCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:t({onMouseDown:!0}),captured:t({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:t({onMouseMove:!0}),captured:t({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:t({onMouseOut:!0}),captured:t({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:t({onMouseOver:!0}),captured:t({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:t({onMouseUp:!0}),captured:t({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:t({onPaste:!0}),captured:t({onPasteCapture:!0})}},pause:{phasedRegistrationNames:{bubbled:t({onPause:!0}),captured:t({onPauseCapture:!0})}},play:{phasedRegistrationNames:{bubbled:t({onPlay:!0}),captured:t({onPlayCapture:!0})}},playing:{phasedRegistrationNames:{bubbled:t({onPlaying:!0}),captured:t({onPlayingCapture:!0})}},progress:{phasedRegistrationNames:{bubbled:t({onProgress:!0}),captured:t({onProgressCapture:!0})}},rateChange:{phasedRegistrationNames:{bubbled:t({onRateChange:!0}),captured:t({onRateChangeCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:t({onReset:!0}),captured:t({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:t({onScroll:!0}),captured:t({onScrollCapture:!0})}},seeked:{phasedRegistrationNames:{bubbled:t({onSeeked:!0}),captured:t({onSeekedCapture:!0})}},seeking:{phasedRegistrationNames:{bubbled:t({onSeeking:!0}),captured:t({onSeekingCapture:!0})}},stalled:{phasedRegistrationNames:{bubbled:t({onStalled:!0}),captured:t({onStalledCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:t({onSubmit:!0}),captured:t({onSubmitCapture:!0})}},suspend:{phasedRegistrationNames:{bubbled:t({onSuspend:!0}),captured:t({onSuspendCapture:!0})}},timeUpdate:{phasedRegistrationNames:{bubbled:t({onTimeUpdate:!0}),captured:t({onTimeUpdateCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:t({onTouchCancel:!0}),captured:t({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:t({onTouchEnd:!0}),captured:t({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:t({onTouchMove:!0}),captured:t({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:t({onTouchStart:!0}),captured:t({onTouchStartCapture:!0})}},volumeChange:{phasedRegistrationNames:{bubbled:t({onVolumeChange:!0}),captured:t({onVolumeChangeCapture:!0})}},waiting:{phasedRegistrationNames:{bubbled:t({onWaiting:!0}),captured:t({onWaitingCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:t({onWheel:!0}),captured:t({onWheelCapture:!0})}}},w={topAbort:v.abort,topBlur:v.blur,topCanPlay:v.canPlay,topCanPlayThrough:v.canPlayThrough,topClick:v.click,topContextMenu:v.contextMenu,topCopy:v.copy,topCut:v.cut,topDoubleClick:v.doubleClick,topDrag:v.drag,topDragEnd:v.dragEnd,topDragEnter:v.dragEnter,topDragExit:v.dragExit,topDragLeave:v.dragLeave,topDragOver:v.dragOver,topDragStart:v.dragStart,topDrop:v.drop,topDurationChange:v.durationChange,topEmptied:v.emptied,topEncrypted:v.encrypted,topEnded:v.ended,topError:v.error,topFocus:v.focus,topInput:v.input,topKeyDown:v.keyDown,topKeyPress:v.keyPress,topKeyUp:v.keyUp,topLoad:v.load,topLoadedData:v.loadedData,topLoadedMetadata:v.loadedMetadata,topLoadStart:v.loadStart,topMouseDown:v.mouseDown,topMouseMove:v.mouseMove,topMouseOut:v.mouseOut,topMouseOver:v.mouseOver,topMouseUp:v.mouseUp,topPaste:v.paste,topPause:v.pause,topPlay:v.play,topPlaying:v.playing,topProgress:v.progress,topRateChange:v.rateChange,topReset:v.reset,topScroll:v.scroll,topSeeked:v.seeked,topSeeking:v.seeking,topStalled:v.stalled,topSubmit:v.submit,topSuspend:v.suspend,topTimeUpdate:v.timeUpdate,topTouchCancel:v.touchCancel,topTouchEnd:v.touchEnd,topTouchMove:v.touchMove,topTouchStart:v.touchStart,topVolumeChange:v.volumeChange,topWaiting:v.waiting,topWheel:v.wheel};for(var x in w) {w[x].dependencies = [x];}var y=t({onClick:null}),z={},A={eventTypes:v,extractEvents:function extractEvents(a,b,d,e,g){var q=w[a];if(!q)return null;var t;switch(a){case u.topAbort:case u.topCanPlay:case u.topCanPlayThrough:case u.topDurationChange:case u.topEmptied:case u.topEncrypted:case u.topEnded:case u.topError:case u.topInput:case u.topLoad:case u.topLoadedData:case u.topLoadedMetadata:case u.topLoadStart:case u.topPause:case u.topPlay:case u.topPlaying:case u.topProgress:case u.topRateChange:case u.topReset:case u.topSeeked:case u.topSeeking:case u.topStalled:case u.topSubmit:case u.topSuspend:case u.topTimeUpdate:case u.topVolumeChange:case u.topWaiting:t = i;break;case u.topKeyPress:if(0 === r(e))return null;case u.topKeyDown:case u.topKeyUp:t = k;break;case u.topBlur:case u.topFocus:t = j;break;case u.topClick:if(2 === e.button)return null;case u.topContextMenu:case u.topDoubleClick:case u.topMouseDown:case u.topMouseMove:case u.topMouseOut:case u.topMouseOver:case u.topMouseUp:t = l;break;case u.topDrag:case u.topDragEnd:case u.topDragEnter:case u.topDragExit:case u.topDragLeave:case u.topDragOver:case u.topDragStart:case u.topDrop:t = m;break;case u.topTouchCancel:case u.topTouchEnd:case u.topTouchMove:case u.topTouchStart:t = n;break;case u.topScroll:t = o;break;case u.topWheel:t = p;break;case u.topCopy:case u.topCut:case u.topPaste:t = h;}t?void 0:"production" !== c.env.NODE_ENV?s(!1,"SimpleEventPlugin: Unhandled event type, `%s`.",a):s(!1);var v=t.getPooled(q,d,e,g);return f.accumulateTwoPhaseDispatches(v),v;},didPutListener:function didPutListener(a,b,c){if(b === y){var d=g.getNode(a);z[a] || (z[a] = e.listen(d,"click",q));}},willDeleteListener:function willDeleteListener(a,b){b === y && (z[a].remove(),delete z[a]);}};b.exports = A;}).call(this,a("_process"));},{"./EventConstants":17,"./EventPropagators":21,"./ReactMount":68,"./SyntheticClipboardEvent":92,"./SyntheticDragEvent":94,"./SyntheticEvent":95,"./SyntheticFocusEvent":96,"./SyntheticKeyboardEvent":98,"./SyntheticMouseEvent":99,"./SyntheticTouchEvent":100,"./SyntheticUIEvent":101,"./SyntheticWheelEvent":102,"./getEventCharCode":114,_process:1,"fbjs/lib/EventListener":132,"fbjs/lib/emptyFunction":139,"fbjs/lib/invariant":147,"fbjs/lib/keyOf":151}],92:[function(a,b,c){"use strict";function d(a,b,c,d){e.call(this,a,b,c,d);}var e=a("./SyntheticEvent"),f={clipboardData:function clipboardData(a){return "clipboardData" in a?a.clipboardData:window.clipboardData;}};e.augmentClass(d,f),b.exports = d;},{"./SyntheticEvent":95}],93:[function(a,b,c){"use strict";function d(a,b,c,d){e.call(this,a,b,c,d);}var e=a("./SyntheticEvent"),f={data:null};e.augmentClass(d,f),b.exports = d;},{"./SyntheticEvent":95}],94:[function(a,b,c){"use strict";function d(a,b,c,d){e.call(this,a,b,c,d);}var e=a("./SyntheticMouseEvent"),f={dataTransfer:null};e.augmentClass(d,f),b.exports = d;},{"./SyntheticMouseEvent":99}],95:[function(a,b,c){(function(c){"use strict";function d(a,b,c,d){this.dispatchConfig = a,this.dispatchMarker = b,this.nativeEvent = c,this.target = d,this.currentTarget = d;var e=this.constructor.Interface;for(var f in e) {if(e.hasOwnProperty(f)){var h=e[f];h?this[f] = h(c):this[f] = c[f];}}var i=null != c.defaultPrevented?c.defaultPrevented:c.returnValue === !1;i?this.isDefaultPrevented = g.thatReturnsTrue:this.isDefaultPrevented = g.thatReturnsFalse,this.isPropagationStopped = g.thatReturnsFalse;}var e=a("./PooledClass"),f=a("./Object.assign"),g=a("fbjs/lib/emptyFunction"),h=a("fbjs/lib/warning"),i={type:null,currentTarget:g.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function timeStamp(a){return a.timeStamp || Date.now();},defaultPrevented:null,isTrusted:null};f(d.prototype,{preventDefault:function preventDefault(){this.defaultPrevented = !0;var a=this.nativeEvent;"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?h(a,"This synthetic event is reused for performance reasons. If you're seeing this, you're calling `preventDefault` on a released/nullified synthetic event. This is a no-op. See https://fb.me/react-event-pooling for more information."):void 0),a && (a.preventDefault?a.preventDefault():a.returnValue = !1,this.isDefaultPrevented = g.thatReturnsTrue);},stopPropagation:function stopPropagation(){var a=this.nativeEvent;"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?h(a,"This synthetic event is reused for performance reasons. If you're seeing this, you're calling `stopPropagation` on a released/nullified synthetic event. This is a no-op. See https://fb.me/react-event-pooling for more information."):void 0),a && (a.stopPropagation?a.stopPropagation():a.cancelBubble = !0,this.isPropagationStopped = g.thatReturnsTrue);},persist:function persist(){this.isPersistent = g.thatReturnsTrue;},isPersistent:g.thatReturnsFalse,destructor:function destructor(){var a=this.constructor.Interface;for(var b in a) {this[b] = null;}this.dispatchConfig = null,this.dispatchMarker = null,this.nativeEvent = null;}}),d.Interface = i,d.augmentClass = function(a,b){var c=this,d=Object.create(c.prototype);f(d,a.prototype),a.prototype = d,a.prototype.constructor = a,a.Interface = f({},c.Interface,b),a.augmentClass = c.augmentClass,e.addPoolingTo(a,e.fourArgumentPooler);},e.addPoolingTo(d,e.fourArgumentPooler),b.exports = d;}).call(this,a("_process"));},{"./Object.assign":25,"./PooledClass":26,_process:1,"fbjs/lib/emptyFunction":139,"fbjs/lib/warning":158}],96:[function(a,b,c){"use strict";function d(a,b,c,d){e.call(this,a,b,c,d);}var e=a("./SyntheticUIEvent"),f={relatedTarget:null};e.augmentClass(d,f),b.exports = d;},{"./SyntheticUIEvent":101}],97:[function(a,b,c){"use strict";function d(a,b,c,d){e.call(this,a,b,c,d);}var e=a("./SyntheticEvent"),f={data:null};e.augmentClass(d,f),b.exports = d;},{"./SyntheticEvent":95}],98:[function(a,b,c){"use strict";function d(a,b,c,d){e.call(this,a,b,c,d);}var e=a("./SyntheticUIEvent"),f=a("./getEventCharCode"),g=a("./getEventKey"),h=a("./getEventModifierState"),i={key:g,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:h,charCode:function charCode(a){return "keypress" === a.type?f(a):0;},keyCode:function keyCode(a){return "keydown" === a.type || "keyup" === a.type?a.keyCode:0;},which:function which(a){return "keypress" === a.type?f(a):"keydown" === a.type || "keyup" === a.type?a.keyCode:0;}};e.augmentClass(d,i),b.exports = d;},{"./SyntheticUIEvent":101,"./getEventCharCode":114,"./getEventKey":115,"./getEventModifierState":116}],99:[function(a,b,c){"use strict";function d(a,b,c,d){e.call(this,a,b,c,d);}var e=a("./SyntheticUIEvent"),f=a("./ViewportMetrics"),g=a("./getEventModifierState"),h={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:g,button:function button(a){var b=a.button;return "which" in a?b:2 === b?2:4 === b?1:0;},buttons:null,relatedTarget:function relatedTarget(a){return a.relatedTarget || (a.fromElement === a.srcElement?a.toElement:a.fromElement);},pageX:function pageX(a){return "pageX" in a?a.pageX:a.clientX + f.currentScrollLeft;},pageY:function pageY(a){return "pageY" in a?a.pageY:a.clientY + f.currentScrollTop;}};e.augmentClass(d,h),b.exports = d;},{"./SyntheticUIEvent":101,"./ViewportMetrics":104,"./getEventModifierState":116}],100:[function(a,b,c){"use strict";function d(a,b,c,d){e.call(this,a,b,c,d);}var e=a("./SyntheticUIEvent"),f=a("./getEventModifierState"),g={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:f};e.augmentClass(d,g),b.exports = d;},{"./SyntheticUIEvent":101,"./getEventModifierState":116}],101:[function(a,b,c){"use strict";function d(a,b,c,d){e.call(this,a,b,c,d);}var e=a("./SyntheticEvent"),f=a("./getEventTarget"),g={view:function view(a){if(a.view)return a.view;var b=f(a);if(null != b && b.window === b)return b;var c=b.ownerDocument;return c?c.defaultView || c.parentWindow:window;},detail:function detail(a){return a.detail || 0;}};e.augmentClass(d,g),b.exports = d;},{"./SyntheticEvent":95,"./getEventTarget":117}],102:[function(a,b,c){"use strict";function d(a,b,c,d){e.call(this,a,b,c,d);}var e=a("./SyntheticMouseEvent"),f={deltaX:function deltaX(a){return "deltaX" in a?a.deltaX:"wheelDeltaX" in a?-a.wheelDeltaX:0;},deltaY:function deltaY(a){return "deltaY" in a?a.deltaY:"wheelDeltaY" in a?-a.wheelDeltaY:"wheelDelta" in a?-a.wheelDelta:0;},deltaZ:null,deltaMode:null};e.augmentClass(d,f),b.exports = d;},{"./SyntheticMouseEvent":99}],103:[function(a,b,c){(function(c){"use strict";var d=a("fbjs/lib/invariant"),e={reinitializeTransaction:function reinitializeTransaction(){this.transactionWrappers = this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length = 0:this.wrapperInitData = [],this._isInTransaction = !1;},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function isInTransaction(){return !!this._isInTransaction;},perform:function perform(a,b,e,f,g,h,i,j){this.isInTransaction()?"production" !== c.env.NODE_ENV?d(!1,"Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction."):d(!1):void 0;var k,l;try{this._isInTransaction = !0,k = !0,this.initializeAll(0),l = a.call(b,e,f,g,h,i,j),k = !1;}finally {try{if(k)try{this.closeAll(0);}catch(m) {}else this.closeAll(0);}finally {this._isInTransaction = !1;}}return l;},initializeAll:function initializeAll(a){for(var b=this.transactionWrappers,c=a;c < b.length;c++) {var d=b[c];try{this.wrapperInitData[c] = f.OBSERVED_ERROR,this.wrapperInitData[c] = d.initialize?d.initialize.call(this):null;}finally {if(this.wrapperInitData[c] === f.OBSERVED_ERROR)try{this.initializeAll(c + 1);}catch(e) {}}}},closeAll:function closeAll(a){this.isInTransaction()?void 0:"production" !== c.env.NODE_ENV?d(!1,"Transaction.closeAll(): Cannot close transaction when none are open."):d(!1);for(var b=this.transactionWrappers,e=a;e < b.length;e++) {var g,h=b[e],i=this.wrapperInitData[e];try{g = !0,i !== f.OBSERVED_ERROR && h.close && h.close.call(this,i),g = !1;}finally {if(g)try{this.closeAll(e + 1);}catch(j) {}}}this.wrapperInitData.length = 0;}},f={Mixin:e,OBSERVED_ERROR:{}};b.exports = f;}).call(this,a("_process"));},{_process:1,"fbjs/lib/invariant":147}],104:[function(a,b,c){"use strict";var d={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function refreshScrollValues(a){d.currentScrollLeft = a.x,d.currentScrollTop = a.y;}};b.exports = d;},{}],105:[function(a,b,c){(function(c){"use strict";function d(a,b){if((null == b?"production" !== c.env.NODE_ENV?e(!1,"accumulateInto(...): Accumulated items must not be null or undefined."):e(!1):void 0,null == a))return b;var d=Array.isArray(a),f=Array.isArray(b);return d && f?(a.push.apply(a,b),a):d?(a.push(b),a):f?[a].concat(b):[a,b];}var e=a("fbjs/lib/invariant");b.exports = d;}).call(this,a("_process"));},{_process:1,"fbjs/lib/invariant":147}],106:[function(a,b,c){"use strict";function d(a){for(var b=1,c=0,d=0,f=a.length,g=-4 & f;g > d;) {for(;d < Math.min(d + 4096,g);d += 4) {c += (b += a.charCodeAt(d)) + (b += a.charCodeAt(d + 1)) + (b += a.charCodeAt(d + 2)) + (b += a.charCodeAt(d + 3));}b %= e,c %= e;}for(;f > d;d++) {c += b += a.charCodeAt(d);}return b %= e,c %= e,b | c << 16;}var e=65521;b.exports = d;},{}],107:[function(a,b,c){(function(a){"use strict";var c=!1;if("production" !== a.env.NODE_ENV)try{Object.defineProperty({},"x",{get:function get(){}}),c = !0;}catch(d) {}b.exports = c;}).call(this,a("_process"));},{_process:1}],108:[function(a,b,c){"use strict";function d(a,b){var c=null == b || "boolean" == typeof b || "" === b;if(c)return "";var d=isNaN(b);return d || 0 === b || f.hasOwnProperty(a) && f[a]?"" + b:("string" == typeof b && (b = b.trim()),b + "px");}var e=a("./CSSProperty"),f=e.isUnitlessNumber;b.exports = d;},{"./CSSProperty":6}],109:[function(a,b,c){(function(c){"use strict";function d(a,b,d,g,h){var i=!1;if("production" !== c.env.NODE_ENV){var j=function j(){return "production" !== c.env.NODE_ENV?f(i,"React.%s is deprecated. Please use %s.%s from require('%s') instead.",a,b,a,d):void 0,i = !0,h.apply(g,arguments);};return e(j,h);}return h;}var e=a("./Object.assign"),f=a("fbjs/lib/warning");b.exports = d;}).call(this,a("_process"));},{"./Object.assign":25,_process:1,"fbjs/lib/warning":158}],110:[function(a,b,c){"use strict";function d(a){return f[a];}function e(a){return ("" + a).replace(g,d);}var f={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},g=/[&><"']/g;b.exports = e;},{}],111:[function(a,b,c){(function(c){"use strict";function d(a){if("production" !== c.env.NODE_ENV){var b=e.current;null !== b && ("production" !== c.env.NODE_ENV?i(b._warnedAboutRefsInRender,"%s is accessing getDOMNode or findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",b.getName() || "A component"):void 0,b._warnedAboutRefsInRender = !0);}return null == a?null:1 === a.nodeType?a:f.has(a)?g.getNodeFromInstance(a):(null != a.render && "function" == typeof a.render?"production" !== c.env.NODE_ENV?h(!1,"findDOMNode was called on an unmounted component."):h(!1):void 0,void ("production" !== c.env.NODE_ENV?h(!1,"Element appears to be neither ReactComponent nor DOMNode (keys: %s)",Object.keys(a)):h(!1)));}var e=a("./ReactCurrentOwner"),f=a("./ReactInstanceMap"),g=a("./ReactMount"),h=a("fbjs/lib/invariant"),i=a("fbjs/lib/warning");b.exports = d;}).call(this,a("_process"));},{"./ReactCurrentOwner":37,"./ReactInstanceMap":65,"./ReactMount":68,_process:1,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],112:[function(a,b,c){(function(c){"use strict";function d(a,b,d){var e=a,f=void 0 === e[d];"production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?g(f,"flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.",d):void 0),f && null != b && (e[d] = b);}function e(a){if(null == a)return a;var b={};return f(a,d,b),b;}var f=a("./traverseAllChildren"),g=a("fbjs/lib/warning");b.exports = e;}).call(this,a("_process"));},{"./traverseAllChildren":130,_process:1,"fbjs/lib/warning":158}],113:[function(a,b,c){"use strict";var d=function d(a,b,c){Array.isArray(a)?a.forEach(b,c):a && b.call(c,a);};b.exports = d;},{}],114:[function(a,b,c){"use strict";function d(a){var b,c=a.keyCode;return "charCode" in a?(b = a.charCode,0 === b && 13 === c && (b = 13)):b = c,b >= 32 || 13 === b?b:0;}b.exports = d;},{}],115:[function(a,b,c){"use strict";function d(a){if(a.key){var b=f[a.key] || a.key;if("Unidentified" !== b)return b;}if("keypress" === a.type){var c=e(a);return 13 === c?"Enter":String.fromCharCode(c);}return "keydown" === a.type || "keyup" === a.type?g[a.keyCode] || "Unidentified":"";}var e=a("./getEventCharCode"),f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};b.exports = d;},{"./getEventCharCode":114}],116:[function(a,b,c){"use strict";function d(a){var b=this,c=b.nativeEvent;if(c.getModifierState)return c.getModifierState(a);var d=f[a];return d?!!c[d]:!1;}function e(a){return d;}var f={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};b.exports = e;},{}],117:[function(a,b,c){"use strict";function d(a){var b=a.target || a.srcElement || window;return 3 === b.nodeType?b.parentNode:b;}b.exports = d;},{}],118:[function(a,b,c){"use strict";function d(a){var b=a && (e && a[e] || a[f]);return "function" == typeof b?b:void 0;}var e="function" == typeof Symbol && Symbol.iterator,f="@@iterator";b.exports = d;},{}],119:[function(a,b,c){"use strict";function d(a){for(;a && a.firstChild;) {a = a.firstChild;}return a;}function e(a){for(;a;) {if(a.nextSibling)return a.nextSibling;a = a.parentNode;}}function f(a,b){for(var c=d(a),f=0,g=0;c;) {if(3 === c.nodeType){if((g = f + c.textContent.length,b >= f && g >= b))return {node:c,offset:b - f};f = g;}c = d(e(c));}}b.exports = f;},{}],120:[function(a,b,c){"use strict";function d(){return !f && e.canUseDOM && (f = "textContent" in document.documentElement?"textContent":"innerText"),f;}var e=a("fbjs/lib/ExecutionEnvironment"),f=null;b.exports = d;},{"fbjs/lib/ExecutionEnvironment":133}],121:[function(a,b,c){(function(c){"use strict";function d(a){if(a){var b=a.getName();if(b)return " Check the render method of `" + b + "`.";}return "";}function e(a){return "function" == typeof a && "undefined" != typeof a.prototype && "function" == typeof a.prototype.mountComponent && "function" == typeof a.prototype.receiveComponent;}function f(a){var b;if(null === a || a === !1)b = new h(f);else if("object" == (typeof a === "undefined"?"undefined":_typeof(a))){var g=a;!g || "function" != typeof g.type && "string" != typeof g.type?"production" !== c.env.NODE_ENV?k(!1,"Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",null == g.type?g.type:_typeof(g.type),d(g._owner)):k(!1):void 0,b = "string" == typeof g.type?i.createInternalComponent(g):e(g.type)?new g.type(g):new m();}else "string" == typeof a || "number" == typeof a?b = i.createInstanceForText(a):"production" !== c.env.NODE_ENV?k(!1,"Encountered invalid React node of type %s",typeof a === "undefined"?"undefined":_typeof(a)):k(!1);return "production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?l("function" == typeof b.construct && "function" == typeof b.mountComponent && "function" == typeof b.receiveComponent && "function" == typeof b.unmountComponent,"Only React Components can be mounted."):void 0),b.construct(a),b._mountIndex = 0,b._mountImage = null,"production" !== c.env.NODE_ENV && (b._isOwnerNecessary = !1,b._warnedAboutRefsInRender = !1),"production" !== c.env.NODE_ENV && Object.preventExtensions && Object.preventExtensions(b),b;}var g=a("./ReactCompositeComponent"),h=a("./ReactEmptyComponent"),i=a("./ReactNativeComponent"),j=a("./Object.assign"),k=a("fbjs/lib/invariant"),l=a("fbjs/lib/warning"),m=function m(){};j(m.prototype,g.Mixin,{_instantiateReactComponent:f}),b.exports = f;}).call(this,a("_process"));},{"./Object.assign":25,"./ReactCompositeComponent":36,"./ReactEmptyComponent":57,"./ReactNativeComponent":71,_process:1,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],122:[function(a,b,c){"use strict";function d(a,b){if(!f.canUseDOM || b && !("addEventListener" in document))return !1;var c="on" + a,d=c in document;if(!d){var g=document.createElement("div");g.setAttribute(c,"return;"),d = "function" == typeof g[c];}return !d && e && "wheel" === a && (d = document.implementation.hasFeature("Events.wheel","3.0")),d;}var e,f=a("fbjs/lib/ExecutionEnvironment");f.canUseDOM && (e = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("","") !== !0),b.exports = d;},{"fbjs/lib/ExecutionEnvironment":133}],123:[function(a,b,c){"use strict";function d(a){var b=a && a.nodeName && a.nodeName.toLowerCase();return b && ("input" === b && e[a.type] || "textarea" === b);}var e={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};b.exports = d;},{}],124:[function(a,b,c){(function(c){"use strict";function d(a){return e.isValidElement(a)?void 0:"production" !== c.env.NODE_ENV?f(!1,"onlyChild must be passed a children with exactly one child."):f(!1),a;}var e=a("./ReactElement"),f=a("fbjs/lib/invariant");b.exports = d;}).call(this,a("_process"));},{"./ReactElement":55,_process:1,"fbjs/lib/invariant":147}],125:[function(a,b,c){"use strict";function d(a){return '"' + e(a) + '"';}var e=a("./escapeTextContentForBrowser");b.exports = d;},{"./escapeTextContentForBrowser":110}],126:[function(a,b,c){"use strict";var d=a("./ReactMount");b.exports = d.renderSubtreeIntoContainer;},{"./ReactMount":68}],127:[function(a,b,c){"use strict";var d=a("fbjs/lib/ExecutionEnvironment"),e=/^[ \r\n\t\f]/,f=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,g=function g(a,b){a.innerHTML = b;};if(("undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction && (g = function g(a,b){MSApp.execUnsafeLocalFunction(function(){a.innerHTML = b;});}),d.canUseDOM)){var h=document.createElement("div");h.innerHTML = " ","" === h.innerHTML && (g = function g(a,b){if((a.parentNode && a.parentNode.replaceChild(a,a),e.test(b) || "<" === b[0] && f.test(b))){a.innerHTML = String.fromCharCode(65279) + b;var c=a.firstChild;1 === c.data.length?a.removeChild(c):c.deleteData(0,1);}else a.innerHTML = b;});}b.exports = g;},{"fbjs/lib/ExecutionEnvironment":133}],128:[function(a,b,c){"use strict";var d=a("fbjs/lib/ExecutionEnvironment"),e=a("./escapeTextContentForBrowser"),f=a("./setInnerHTML"),g=function g(a,b){a.textContent = b;};d.canUseDOM && ("textContent" in document.documentElement || (g = function g(a,b){f(a,e(b));})),b.exports = g;},{"./escapeTextContentForBrowser":110,"./setInnerHTML":127,"fbjs/lib/ExecutionEnvironment":133}],129:[function(a,b,c){"use strict";function d(a,b){var c=null === a || a === !1,d=null === b || b === !1;if(c || d)return c === d;var e=typeof a === "undefined"?"undefined":_typeof(a),f=typeof b === "undefined"?"undefined":_typeof(b);return "string" === e || "number" === e?"string" === f || "number" === f:"object" === f && a.type === b.type && a.key === b.key;}b.exports = d;},{}],130:[function(a,b,c){(function(c){"use strict";function d(a){return r[a];}function e(a,b){return a && null != a.key?g(a.key):b.toString(36);}function f(a){return ("" + a).replace(s,d);}function g(a){return "$" + f(a);}function h(a,b,d,f){var i=typeof a === "undefined"?"undefined":_typeof(a);if((("undefined" === i || "boolean" === i) && (a = null),null === a || "string" === i || "number" === i || k.isValidElement(a)))return d(f,a,"" === b?p + e(a,0):b),1;var l,r,s=0,u="" === b?p:b + q;if(Array.isArray(a))for(var v=0;v < a.length;v++) {l = a[v],r = u + e(l,v),s += h(l,r,d,f);}else {var w=m(a);if(w){var x,y=w.call(a);if(w !== a.entries)for(var z=0;!(x = y.next()).done;) {l = x.value,r = u + e(l,z++),s += h(l,r,d,f);}else for("production" !== c.env.NODE_ENV && ("production" !== c.env.NODE_ENV?o(t,"Using Maps as children is not yet fully supported. It is an experimental feature that might be removed. Convert it to a sequence / iterable of keyed ReactElements instead."):void 0,t = !0);!(x = y.next()).done;) {var A=x.value;A && (l = A[1],r = u + g(A[0]) + q + e(l,0),s += h(l,r,d,f));}}else if("object" === i){var B="";if("production" !== c.env.NODE_ENV && (B = " If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons.",a._isReactElement && (B = " It looks like you're using an element created by a different version of React. Make sure to use only one copy of React."),j.current)){var C=j.current.getName();C && (B += " Check the render method of `" + C + "`.");}var D=String(a);"production" !== c.env.NODE_ENV?n(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]" === D?"object with keys {" + Object.keys(a).join(", ") + "}":D,B):n(!1);}}return s;}function i(a,b,c){return null == a?0:h(a,"",b,c);}var j=a("./ReactCurrentOwner"),k=a("./ReactElement"),l=a("./ReactInstanceHandles"),m=a("./getIteratorFn"),n=a("fbjs/lib/invariant"),o=a("fbjs/lib/warning"),p=l.SEPARATOR,q=":",r={"=":"=0",".":"=1",":":"=2"},s=/[=.:]/g,t=!1;b.exports = i;}).call(this,a("_process"));},{"./ReactCurrentOwner":37,"./ReactElement":55,"./ReactInstanceHandles":64,"./getIteratorFn":118,_process:1,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],131:[function(a,b,c){(function(c){"use strict";var d=a("./Object.assign"),e=a("fbjs/lib/emptyFunction"),f=a("fbjs/lib/warning"),g=e;if("production" !== c.env.NODE_ENV){var h=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],i=["applet","caption","html","table","td","th","marquee","object","template","foreignObject","desc","title"],j=i.concat(["button"]),k=["dd","dt","li","option","optgroup","p","rp","rt"],l={parentTag:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null},m=function m(a,b,c){var e=d({},a || l),f={tag:b,instance:c};return -1 !== i.indexOf(b) && (e.aTagInScope = null,e.buttonTagInScope = null,e.nobrTagInScope = null),-1 !== j.indexOf(b) && (e.pTagInButtonScope = null),-1 !== h.indexOf(b) && "address" !== b && "div" !== b && "p" !== b && (e.listItemTagAutoclosing = null,e.dlItemTagAutoclosing = null),e.parentTag = f,"form" === b && (e.formTag = f),"a" === b && (e.aTagInScope = f),"button" === b && (e.buttonTagInScope = f),"nobr" === b && (e.nobrTagInScope = f),"p" === b && (e.pTagInButtonScope = f),"li" === b && (e.listItemTagAutoclosing = f),("dd" === b || "dt" === b) && (e.dlItemTagAutoclosing = f),e;},n=function n(a,b){switch(b){case "select":return "option" === a || "optgroup" === a || "#text" === a;case "optgroup":return "option" === a || "#text" === a;case "option":return "#text" === a;case "tr":return "th" === a || "td" === a || "style" === a || "script" === a || "template" === a;case "tbody":case "thead":case "tfoot":return "tr" === a || "style" === a || "script" === a || "template" === a;case "colgroup":return "col" === a || "template" === a;case "table":return "caption" === a || "colgroup" === a || "tbody" === a || "tfoot" === a || "thead" === a || "style" === a || "script" === a || "template" === a;case "head":return "base" === a || "basefont" === a || "bgsound" === a || "link" === a || "meta" === a || "title" === a || "noscript" === a || "noframes" === a || "style" === a || "script" === a || "template" === a;case "html":return "head" === a || "body" === a;}switch(a){case "h1":case "h2":case "h3":case "h4":case "h5":case "h6":return "h1" !== b && "h2" !== b && "h3" !== b && "h4" !== b && "h5" !== b && "h6" !== b;case "rp":case "rt":return -1 === k.indexOf(b);case "caption":case "col":case "colgroup":case "frame":case "head":case "tbody":case "td":case "tfoot":case "th":case "thead":case "tr":return null == b;}return !0;},o=function o(a,b){switch(a){case "address":case "article":case "aside":case "blockquote":case "center":case "details":case "dialog":case "dir":case "div":case "dl":case "fieldset":case "figcaption":case "figure":case "footer":case "header":case "hgroup":case "main":case "menu":case "nav":case "ol":case "p":case "section":case "summary":case "ul":case "pre":case "listing":case "table":case "hr":case "xmp":case "h1":case "h2":case "h3":case "h4":case "h5":case "h6":return b.pTagInButtonScope;case "form":return b.formTag || b.pTagInButtonScope;case "li":return b.listItemTagAutoclosing;case "dd":case "dt":return b.dlItemTagAutoclosing;case "button":return b.buttonTagInScope;case "a":return b.aTagInScope;case "nobr":return b.nobrTagInScope;}return null;},p=function p(a){if(!a)return [];var b=[];do {b.push(a);}while(a = a._currentElement._owner);return b.reverse(),b;},q={};g = function g(a,b,d){d = d || l;var e=d.parentTag,g=e && e.tag,h=n(a,g)?null:e,i=h?null:o(a,d),j=h || i;if(j){var k,m=j.tag,r=j.instance,s=b && b._currentElement._owner,t=r && r._currentElement._owner,u=p(s),v=p(t),w=Math.min(u.length,v.length),x=-1;for(k = 0;w > k && u[k] === v[k];k++) {x = k;}var y="(unknown)",z=u.slice(x + 1).map(function(a){return a.getName() || y;}),A=v.slice(x + 1).map(function(a){return a.getName() || y;}),B=[].concat(-1 !== x?u[x].getName() || y:[],A,m,i?["..."]:[],z,a).join(" > "),C=!!h + "|" + a + "|" + m + "|" + B;if(q[C])return;if((q[C] = !0,h)){var D="";"table" === m && "tr" === a && (D += " Add a <tbody> to your code to match the DOM tree generated by the browser."),"production" !== c.env.NODE_ENV?f(!1,"validateDOMNesting(...): <%s> cannot appear as a child of <%s>. See %s.%s",a,m,B,D):void 0;}else "production" !== c.env.NODE_ENV?f(!1,"validateDOMNesting(...): <%s> cannot appear as a descendant of <%s>. See %s.",a,m,B):void 0;}},g.ancestorInfoContextKey = "__validateDOMNesting_ancestorInfo$" + Math.random().toString(36).slice(2),g.updatedAncestorInfo = m,g.isTagValidInContext = function(a,b){b = b || l;var c=b.parentTag,d=c && c.tag;return n(a,d) && !o(a,b);};}b.exports = g;}).call(this,a("_process"));},{"./Object.assign":25,_process:1,"fbjs/lib/emptyFunction":139,"fbjs/lib/warning":158}],132:[function(a,b,c){(function(c){"use strict";var d=a("./emptyFunction"),e={listen:function listen(a,b,c){return a.addEventListener?(a.addEventListener(b,c,!1),{remove:function remove(){a.removeEventListener(b,c,!1);}}):a.attachEvent?(a.attachEvent("on" + b,c),{remove:function remove(){a.detachEvent("on" + b,c);}}):void 0;},capture:function capture(a,b,e){return a.addEventListener?(a.addEventListener(b,e,!0),{remove:function remove(){a.removeEventListener(b,e,!0);}}):("production" !== c.env.NODE_ENV && console.error("Attempted to listen to events during the capture phase on a browser that does not support the capture phase. Your application will not receive some events."),{remove:d});},registerDefault:function registerDefault(){}};b.exports = e;}).call(this,a("_process"));},{"./emptyFunction":139,_process:1}],133:[function(a,b,c){"use strict";var d=!("undefined" == typeof window || !window.document || !window.document.createElement),e={canUseDOM:d,canUseWorkers:"undefined" != typeof Worker,canUseEventListeners:d && !(!window.addEventListener && !window.attachEvent),canUseViewport:d && !!window.screen,isInWorker:!d};b.exports = e;},{}],134:[function(a,b,c){"use strict";function d(a){return a.replace(e,function(a,b){return b.toUpperCase();});}var e=/-(.)/g;b.exports = d;},{}],135:[function(a,b,c){"use strict";function d(a){return e(a.replace(f,"ms-"));}var e=a("./camelize"),f=/^-ms-/;b.exports = d;},{"./camelize":134}],136:[function(a,b,c){"use strict";function d(a,b){var c=!0;a: for(;c;) {var d=a,f=b;if((c = !1,d && f)){if(d === f)return !0;if(e(d))return !1;if(e(f)){a = d,b = f.parentNode,c = !0;continue a;}return d.contains?d.contains(f):d.compareDocumentPosition?!!(16 & d.compareDocumentPosition(f)):!1;}return !1;}}var e=a("./isTextNode");b.exports = d;},{"./isTextNode":149}],137:[function(a,b,c){"use strict";function d(a){return !!a && ("object" == (typeof a === "undefined"?"undefined":_typeof(a)) || "function" == typeof a) && "length" in a && !("setInterval" in a) && "number" != typeof a.nodeType && (Array.isArray(a) || "callee" in a || "item" in a);}function e(a){return d(a)?Array.isArray(a)?a.slice():f(a):[a];}var f=a("./toArray");b.exports = e;},{"./toArray":157}],138:[function(a,b,c){(function(c){"use strict";function d(a){var b=a.match(k);return b && b[1].toLowerCase();}function e(a,b){var e=j;j?void 0:"production" !== c.env.NODE_ENV?i(!1,"createNodesFromMarkup dummy not initialized"):i(!1);var f=d(a),k=f && h(f);if(k){e.innerHTML = k[1] + a + k[2];for(var l=k[0];l--;) {e = e.lastChild;}}else e.innerHTML = a;var m=e.getElementsByTagName("script");m.length && (b?void 0:"production" !== c.env.NODE_ENV?i(!1,"createNodesFromMarkup(...): Unexpected <script> element rendered."):i(!1),g(m).forEach(b));for(var n=g(e.childNodes);e.lastChild;) {e.removeChild(e.lastChild);}return n;}var f=a("./ExecutionEnvironment"),g=a("./createArrayFromMixed"),h=a("./getMarkupWrap"),i=a("./invariant"),j=f.canUseDOM?document.createElement("div"):null,k=/^\s*<(\w+)/;b.exports = e;}).call(this,a("_process"));},{"./ExecutionEnvironment":133,"./createArrayFromMixed":137,"./getMarkupWrap":143,"./invariant":147,_process:1}],139:[function(a,b,c){"use strict";function d(a){return function(){return a;};}function e(){}e.thatReturns = d,e.thatReturnsFalse = d(!1),e.thatReturnsTrue = d(!0),e.thatReturnsNull = d(null),e.thatReturnsThis = function(){return this;},e.thatReturnsArgument = function(a){return a;},b.exports = e;},{}],140:[function(a,b,c){(function(a){"use strict";var c={};"production" !== a.env.NODE_ENV && Object.freeze(c),b.exports = c;}).call(this,a("_process"));},{_process:1}],141:[function(a,b,c){"use strict";function d(a){try{a.focus();}catch(b) {}}b.exports = d;},{}],142:[function(a,b,c){"use strict";function d(){if("undefined" == typeof document)return null;try{return document.activeElement || document.body;}catch(a) {return document.body;}}b.exports = d;},{}],143:[function(a,b,c){(function(c){"use strict";function d(a){return g?void 0:"production" !== c.env.NODE_ENV?f(!1,"Markup wrapping node not initialized"):f(!1),m.hasOwnProperty(a) || (a = "*"),h.hasOwnProperty(a) || ("*" === a?g.innerHTML = "<link />":g.innerHTML = "<" + a + "></" + a + ">",h[a] = !g.firstChild),h[a]?m[a]:null;}var e=a("./ExecutionEnvironment"),f=a("./invariant"),g=e.canUseDOM?document.createElement("div"):null,h={},i=[1,'<select multiple="true">',"</select>"],j=[1,"<table>","</table>"],k=[3,"<table><tbody><tr>","</tr></tbody></table>"],l=[1,'<svg xmlns="http://www.w3.org/2000/svg">',"</svg>"],m={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:i,option:i,caption:j,colgroup:j,tbody:j,tfoot:j,thead:j,td:k,th:k},n=["circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","text","tspan"];n.forEach(function(a){m[a] = l,h[a] = !0;}),b.exports = d;}).call(this,a("_process"));},{"./ExecutionEnvironment":133,"./invariant":147,_process:1}],144:[function(a,b,c){"use strict";function d(a){return a === window?{x:window.pageXOffset || document.documentElement.scrollLeft,y:window.pageYOffset || document.documentElement.scrollTop}:{x:a.scrollLeft,y:a.scrollTop};}b.exports = d;},{}],145:[function(a,b,c){"use strict";function d(a){return a.replace(e,"-$1").toLowerCase();}var e=/([A-Z])/g;b.exports = d;},{}],146:[function(a,b,c){"use strict";function d(a){return e(a).replace(f,"-ms-");}var e=a("./hyphenate"),f=/^ms-/;b.exports = d;},{"./hyphenate":145}],147:[function(a,b,c){(function(a){"use strict";function c(b,c,d,e,f,g,h,i){if("production" !== a.env.NODE_ENV && void 0 === c)throw new Error("invariant requires an error message argument");if(!b){var j;if(void 0 === c)j = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {var k=[d,e,f,g,h,i],l=0;j = new Error(c.replace(/%s/g,function(){return k[l++];})),j.name = "Invariant Violation";}throw (j.framesToPop = 1,j);}}b.exports = c;}).call(this,a("_process"));},{_process:1}],148:[function(a,b,c){"use strict";function d(a){return !(!a || !("function" == typeof Node?a instanceof Node:"object" == (typeof a === "undefined"?"undefined":_typeof(a)) && "number" == typeof a.nodeType && "string" == typeof a.nodeName));}b.exports = d;},{}],149:[function(a,b,c){"use strict";function d(a){return e(a) && 3 == a.nodeType;}var e=a("./isNode");b.exports = d;},{"./isNode":148}],150:[function(a,b,c){(function(c){"use strict";var d=a("./invariant"),e=function e(a){var b,e={};a instanceof Object && !Array.isArray(a)?void 0:"production" !== c.env.NODE_ENV?d(!1,"keyMirror(...): Argument must be an object."):d(!1);for(b in a) {a.hasOwnProperty(b) && (e[b] = b);}return e;};b.exports = e;}).call(this,a("_process"));},{"./invariant":147,_process:1}],151:[function(a,b,c){"use strict";var d=function d(a){var b;for(b in a) {if(a.hasOwnProperty(b))return b;}return null;};b.exports = d;},{}],152:[function(a,b,c){"use strict";function d(a,b,c){if(!a)return null;var d={};for(var f in a) {e.call(a,f) && (d[f] = b.call(c,a[f],f,a));}return d;}var e=Object.prototype.hasOwnProperty;b.exports = d;},{}],153:[function(a,b,c){"use strict";function d(a){var b={};return function(c){return b.hasOwnProperty(c) || (b[c] = a.call(this,c)),b[c];};}b.exports = d;},{}],154:[function(a,b,c){"use strict";var d,e=a("./ExecutionEnvironment");e.canUseDOM && (d = window.performance || window.msPerformance || window.webkitPerformance),b.exports = d || {};},{"./ExecutionEnvironment":133}],155:[function(a,b,c){"use strict";var d,e=a("./performance");d = e.now?function(){return e.now();}:function(){return Date.now();},b.exports = d;},{"./performance":154}],156:[function(a,b,c){"use strict";function d(a,b){if(a === b)return !0;if("object" != (typeof a === "undefined"?"undefined":_typeof(a)) || null === a || "object" != (typeof b === "undefined"?"undefined":_typeof(b)) || null === b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length !== d.length)return !1;for(var f=e.bind(b),g=0;g < c.length;g++) {if(!f(c[g]) || a[c[g]] !== b[c[g]])return !1;}return !0;}var e=Object.prototype.hasOwnProperty;b.exports = d;},{}],157:[function(a,b,c){(function(c){"use strict";function d(a){var b=a.length;if((Array.isArray(a) || "object" != (typeof a === "undefined"?"undefined":_typeof(a)) && "function" != typeof a?"production" !== c.env.NODE_ENV?e(!1,"toArray: Array-like object expected"):e(!1):void 0,"number" != typeof b?"production" !== c.env.NODE_ENV?e(!1,"toArray: Object needs a length property"):e(!1):void 0,0 === b || b - 1 in a?void 0:"production" !== c.env.NODE_ENV?e(!1,"toArray: Object should have keys for indices"):e(!1),a.hasOwnProperty))try{return Array.prototype.slice.call(a);}catch(d) {}for(var f=Array(b),g=0;b > g;g++) {f[g] = a[g];}return f;}var e=a("./invariant");b.exports = d;}).call(this,a("_process"));},{"./invariant":147,_process:1}],158:[function(a,b,c){(function(c){"use strict";var d=a("./emptyFunction"),e=d;"production" !== c.env.NODE_ENV && (e = function e(a,b){for(var c=arguments.length,d=Array(c > 2?c - 2:0),e=2;c > e;e++) {d[e - 2] = arguments[e];}if(void 0 === b)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0 !== b.indexOf("Failed Composite propType: ") && !a){var f=0,g="Warning: " + b.replace(/%s/g,function(){return d[f++];});"undefined" != typeof console && console.error(g);try{throw new Error(g);}catch(h) {}}}),b.exports = e;}).call(this,a("_process"));},{"./emptyFunction":139,_process:1}],159:[function(a,b,c){"use strict";b.exports = a("./lib/React");},{"./lib/React":27}],160:[function(a,b,c){"use strict";function d(a){return a && a.__esModule?a:{"default":a};}function e(a){return a && "undefined" != typeof Symbol && a.constructor === Symbol?"symbol":typeof a === "undefined"?"undefined":_typeof(a);}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function");}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !b || "object" != (typeof b === "undefined"?"undefined":_typeof(b)) && "function" != typeof b?a:b;}function h(a,b){if("function" != typeof b && null !== b)throw new TypeError("Super expression must either be null or a function, not " + (typeof b === "undefined"?"undefined":_typeof(b)));a.prototype = Object.create(b && b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b && (Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__ = b);}var i=(function(){function a(a,b){for(var c=0;c < b.length;c++) {var d=b[c];d.enumerable = d.enumerable || !1,d.configurable = !0,"value" in d && (d.writable = !0),Object.defineProperty(a,d.key,d);}}return function(b,c,d){return c && a(b.prototype,c),d && a(b,d),b;};})();Object.defineProperty(c,"__esModule",{value:!0});var j=a("react"),k=d(j),l=a("react-dom"),m=(d(l),a("lodash")),n=d(m),o=(function(a){function b(a){f(this,b),console.info("[SmallGrid] constructor");var c=g(this,Object.getPrototypeOf(b).call(this,a));return c.state = {edit_idx:null,edit_prop:null,limit:20,page:1,total_pages:1,sort_by:null,sort_dir:"desc"},c;}return h(b,a),i(b,[{key:"componentWillMount",value:function value(){console.info("[SmallGrid] componentWillMount"),n["default"].has(this.props,"rows") || (console.error("[SmallGrid] no rows attribute found"),this.props.rows = []),n["default"].has(this.props,"cols") || (console.error("[SmallGrid] no cols attribute found"),this.props.rows = [],this.props.cols = []),n["default"].isArray(this.props.rows) || (console.error("[SmallGrid] rows prop is not an array"),this.props.rows = []),n["default"].isArray(this.props.cols) || (console.error("[SmallGrid] cols prop is not an array"),this.props.rows = [],this.props.cols = []),this.setTotalPages();}},{key:"componentWillUpdate",value:function value(){console.info("[SmallGrid] componentWillUpdate"),this.setTotalPages();}},{key:"setTotalPages",value:function value(){var a=Math.ceil(this.props.rows.length / this.state.limit);this.state.total_pages != a && (console.info("[SmallGrid] setTotalPages: total_pages",a),this.setState({total_pages:a}));}},{key:"formatDefault",value:function value(a){return a;}},{key:"getCols",value:function value(){var a=n["default"].map(this.props.cols,function(a,b,c){return a.hasOwnProperty("key")?(a.hasOwnProperty("name") || (a.name = a.key),a.hasOwnProperty("format") && n["default"].isFunction(a.format) || (a.format = this.formatDefault),a.hasOwnProperty("edit") && n["default"].isFunction(a.edit) || (a.edit = null),a):void 0;},this);return console.info("[SmallGrid] getCols",a),n["default"].compact(a);}},{key:"getRows",value:function value(){this.sortRows();var a=this.props.rows.slice(this.getStart(),this.getEnd());return console.info("[SmallGrid] getRows",a),a;}},{key:"getStart",value:function value(){var a=(this.state.page - 1) * this.state.limit;return a;}},{key:"getEnd",value:function value(){var a=this.state.page * this.state.limit;return a;}},{key:"getCell",value:function value(a,b,c,d){var e=this,f=d.format(n["default"].get(b,d.key,d["default"]));return this.state.edit_idx == a && this.state.edit_prop == d.key?k["default"].createElement("td",{key:c},k["default"].createElement("form",{onSubmit:this.editValue.bind(this)},k["default"].createElement("input",{type:"text",name:d.key,defaultValue:f,ref:function ref(a){return e._input = a;},onKeyDown:this.onKeyDown.bind(this),"data-row":a,autoFocus:!0}))):d.edit?k["default"].createElement("td",{key:c,onClick:this.editCell.bind(this,a,d.key),className:"edit"},f):k["default"].createElement("td",{key:c},f);}},{key:"getPages",value:function value(){for(var a=[],b=this.state.page - 4;b <= this.state.page + 4;b++) {b > 0 && b <= this.state.total_pages && a.push(b);}return console.info("[SmallGrid] getPages: pages",a),a;}},{key:"setPage",value:function value(a){this.editExit(),this.setState({page:a});}},{key:"sortBy",value:function value(a){this.editExit();var b={};this.state.sort_by == a?"desc" == this.state.sort_dir?(b.sort_by = a,b.sort_dir = "asc"):(b.sort_by = null,b.sort_dir = "desc"):(b.sort_by = a,b.sort_dir = "desc"),this.setState(b),console.info("[SmallGrid] sortBy",b);}},{key:"sortRows",value:function value(){console.info("[SmallGrid] sortRows",this.state.sort_by,this.state.sort_dir),this.state.sort_by?(console.info("[SmallGrid] sortRows: sorting"),this.props.rows.sort((function(a,b){var c=a[this.state.sort_by],d=b[this.state.sort_by];return "desc" == this.state.sort_dir?d > c?1:c > d?-1:0:d > c?-1:c > d?1:0;}).bind(this))):console.info("[SmallGrid] sortRows: nothing to sort by");}},{key:"render",value:function value(){var a=this;if((console.info("[SmallGrid] render"),!this.props.hasOwnProperty("rows") || this.props.rows.length < 1))return k["default"].createElement("div",{className:"alert alert-default"},"no data");var b=(function(){var b=a.getPages(),c=a.getCols(),d=a.getRows();return {v:k["default"].createElement("section",null,k["default"].createElement("a",{name:"library_table"}),k["default"].createElement("br",null),k["default"].createElement("table",{className:"table table-condensed table-sort table-hl"},k["default"].createElement("thead",null,k["default"].createElement("tr",null,n["default"].map(c,function(a,b,c){return k["default"].createElement("th",{key:b,onClick:this.sortBy.bind(this,a.key),className:this.state.sort_by != a.key?"":"sort-" + this.state.sort_dir},a.name);},a))),k["default"].createElement("tbody",null,n["default"].map(d,function(a,b,d){return k["default"].createElement("tr",{key:b},n["default"].map(c,function(c,d,e){return this.getCell(b,a,d,c);},this));},a)),k["default"].createElement("tfoot",null,k["default"].createElement("tr",null,k["default"].createElement("td",{colSpan:"4"},k["default"].createElement("ul",{className:"pagination"},k["default"].createElement("li",{className:a.state.page < 2?"disabled":""},k["default"].createElement("a",{onClick:a.setPage.bind(a,a.state.page - 1),href:"#library_table","aria-label":"Previous"},k["default"].createElement("span",{"aria-hidden":"true"},"«"))),b.map((function(a,b,c){return k["default"].createElement("li",{key:b,className:this.state.page == a?"active":""},k["default"].createElement("a",{href:"#library_table",onClick:this.setPage.bind(this,a)},a));}).bind(a)),k["default"].createElement("li",{className:a.state.page >= a.state.total_pages?"disabled":""},k["default"].createElement("a",{onClick:a.setPage.bind(a,a.state.page + 1),href:"#library_table","aria-label":"Next"},k["default"].createElement("span",{"aria-hidden":"true"},"»"))))),k["default"].createElement("td",null,k["default"].createElement("span",{className:"pull-right"},a.props.rows.length," rows"))))))};})();return "object" === ("undefined" == typeof b?"undefined":e(b))?b.v:void 0;}},{key:"onKeyDown",value:function value(a){console.info("[SmallGrid] onKeyDown",a.keyCode),27 == a.keyCode && (console.info("[SmallGrid] edit cancelled"),this.editExit());}},{key:"editExit",value:function value(){console.info("Exited editing"),null != this.state.edit_idx && this.setState({edit_idx:null,edit_prop:null});}},{key:"editCell",value:function value(a,b){console.info("[SmallGrid] editCell",a,b),this.setState({edit_idx:a,edit_prop:b});}},{key:"editValue",value:function value(a){console.info("[SmallGrid] editValue",a),a.preventDefault(),this.editExit(),console.info("[SmallGrid] editValue: exiting editing");var b=parseInt(this._input.dataset.row),c=this._input.name,d=this._input.value,e=this._input.defaultValue;if((console.info("[SmallGrid] editValue: row_i",b),console.info("[SmallGrid] editValue: col_name",c),console.info("[SmallGrid] editValue: val",d),console.info("[SmallGrid] editValue: deval",e),d != e)){var f=this.getStart() + b;console.info("[SmallGrid] editValue: i",f);var g=this.props.rows[f];console.info("[SmallGrid] editValue: row",g),n["default"].set(this.props.rows[f],c,d),console.info("[SmallGrid] editValue: row val updated");var h=n["default"].filter(this.getCols(),{key:c})[0];console.info("[SmallGrid] editValue: col",h),console.info("[SmallGrid] editValue: col edit",h.edit),h.edit(g,c,d);}}}]),b;})(k["default"].Component);c["default"] = o;},{lodash:2,react:159,"react-dom":3}]},{},[160]);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],3:[function(require,module,exports){
'use strict';

module.exports = require('react/lib/ReactDOM');

},{"react/lib/ReactDOM":38}],4:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AutoFocusUtils
 * @typechecks static-only
 */

'use strict';

var ReactMount = require('./ReactMount');

var findDOMNode = require('./findDOMNode');
var focusNode = require('fbjs/lib/focusNode');

var Mixin = {
  componentDidMount: function () {
    if (this.props.autoFocus) {
      focusNode(findDOMNode(this));
    }
  }
};

var AutoFocusUtils = {
  Mixin: Mixin,

  focusDOMComponent: function () {
    focusNode(ReactMount.getNode(this._rootNodeID));
  }
};

module.exports = AutoFocusUtils;
},{"./ReactMount":68,"./findDOMNode":111,"fbjs/lib/focusNode":141}],5:[function(require,module,exports){
/**
 * Copyright 2013-2015 Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BeforeInputEventPlugin
 * @typechecks static-only
 */

'use strict';

var EventConstants = require('./EventConstants');
var EventPropagators = require('./EventPropagators');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
var FallbackCompositionState = require('./FallbackCompositionState');
var SyntheticCompositionEvent = require('./SyntheticCompositionEvent');
var SyntheticInputEvent = require('./SyntheticInputEvent');

var keyOf = require('fbjs/lib/keyOf');

var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
var START_KEYCODE = 229;

var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;

var documentMode = null;
if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
  documentMode = document.documentMode;
}

// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();

// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);

/**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */
function isPresto() {
  var opera = window.opera;
  return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
}

var SPACEBAR_CODE = 32;
var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

var topLevelTypes = EventConstants.topLevelTypes;

// Events and their corresponding property names.
var eventTypes = {
  beforeInput: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onBeforeInput: null }),
      captured: keyOf({ onBeforeInputCapture: null })
    },
    dependencies: [topLevelTypes.topCompositionEnd, topLevelTypes.topKeyPress, topLevelTypes.topTextInput, topLevelTypes.topPaste]
  },
  compositionEnd: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onCompositionEnd: null }),
      captured: keyOf({ onCompositionEndCapture: null })
    },
    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionEnd, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
  },
  compositionStart: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onCompositionStart: null }),
      captured: keyOf({ onCompositionStartCapture: null })
    },
    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionStart, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
  },
  compositionUpdate: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onCompositionUpdate: null }),
      captured: keyOf({ onCompositionUpdateCapture: null })
    },
    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionUpdate, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
  }
};

// Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress = false;

/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */
function isKeypressCommand(nativeEvent) {
  return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
  // ctrlKey && altKey is equivalent to AltGr, and is not a command.
  !(nativeEvent.ctrlKey && nativeEvent.altKey);
}

/**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */
function getCompositionEventType(topLevelType) {
  switch (topLevelType) {
    case topLevelTypes.topCompositionStart:
      return eventTypes.compositionStart;
    case topLevelTypes.topCompositionEnd:
      return eventTypes.compositionEnd;
    case topLevelTypes.topCompositionUpdate:
      return eventTypes.compositionUpdate;
  }
}

/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function isFallbackCompositionStart(topLevelType, nativeEvent) {
  return topLevelType === topLevelTypes.topKeyDown && nativeEvent.keyCode === START_KEYCODE;
}

/**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function isFallbackCompositionEnd(topLevelType, nativeEvent) {
  switch (topLevelType) {
    case topLevelTypes.topKeyUp:
      // Command keys insert or clear IME input.
      return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
    case topLevelTypes.topKeyDown:
      // Expect IME keyCode on each keydown. If we get any other
      // code we must have exited earlier.
      return nativeEvent.keyCode !== START_KEYCODE;
    case topLevelTypes.topKeyPress:
    case topLevelTypes.topMouseDown:
    case topLevelTypes.topBlur:
      // Events are not possible without cancelling IME.
      return true;
    default:
      return false;
  }
}

/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */
function getDataFromCustomEvent(nativeEvent) {
  var detail = nativeEvent.detail;
  if (typeof detail === 'object' && 'data' in detail) {
    return detail.data;
  }
  return null;
}

// Track the current IME composition fallback object, if any.
var currentComposition = null;

/**
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {DOMEventTarget} topLevelTarget The listening component root node.
 * @param {string} topLevelTargetID ID of `topLevelTarget`.
 * @param {object} nativeEvent Native browser event.
 * @return {?object} A SyntheticCompositionEvent.
 */
function extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
  var eventType;
  var fallbackData;

  if (canUseCompositionEvent) {
    eventType = getCompositionEventType(topLevelType);
  } else if (!currentComposition) {
    if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
      eventType = eventTypes.compositionStart;
    }
  } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
    eventType = eventTypes.compositionEnd;
  }

  if (!eventType) {
    return null;
  }

  if (useFallbackCompositionData) {
    // The current composition is stored statically and must not be
    // overwritten while composition continues.
    if (!currentComposition && eventType === eventTypes.compositionStart) {
      currentComposition = FallbackCompositionState.getPooled(topLevelTarget);
    } else if (eventType === eventTypes.compositionEnd) {
      if (currentComposition) {
        fallbackData = currentComposition.getData();
      }
    }
  }

  var event = SyntheticCompositionEvent.getPooled(eventType, topLevelTargetID, nativeEvent, nativeEventTarget);

  if (fallbackData) {
    // Inject data generated from fallback path into the synthetic event.
    // This matches the property of native CompositionEventInterface.
    event.data = fallbackData;
  } else {
    var customData = getDataFromCustomEvent(nativeEvent);
    if (customData !== null) {
      event.data = customData;
    }
  }

  EventPropagators.accumulateTwoPhaseDispatches(event);
  return event;
}

/**
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */
function getNativeBeforeInputChars(topLevelType, nativeEvent) {
  switch (topLevelType) {
    case topLevelTypes.topCompositionEnd:
      return getDataFromCustomEvent(nativeEvent);
    case topLevelTypes.topKeyPress:
      /**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */
      var which = nativeEvent.which;
      if (which !== SPACEBAR_CODE) {
        return null;
      }

      hasSpaceKeypress = true;
      return SPACEBAR_CHAR;

    case topLevelTypes.topTextInput:
      // Record the characters to be added to the DOM.
      var chars = nativeEvent.data;

      // If it's a spacebar character, assume that we have already handled
      // it at the keypress level and bail immediately. Android Chrome
      // doesn't give us keycodes, so we need to blacklist it.
      if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
        return null;
      }

      return chars;

    default:
      // For other native event types, do nothing.
      return null;
  }
}

/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */
function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
  // If we are currently composing (IME) and using a fallback to do so,
  // try to extract the composed characters from the fallback object.
  if (currentComposition) {
    if (topLevelType === topLevelTypes.topCompositionEnd || isFallbackCompositionEnd(topLevelType, nativeEvent)) {
      var chars = currentComposition.getData();
      FallbackCompositionState.release(currentComposition);
      currentComposition = null;
      return chars;
    }
    return null;
  }

  switch (topLevelType) {
    case topLevelTypes.topPaste:
      // If a paste event occurs after a keypress, throw out the input
      // chars. Paste events should not lead to BeforeInput events.
      return null;
    case topLevelTypes.topKeyPress:
      /**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */
      if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
        return String.fromCharCode(nativeEvent.which);
      }
      return null;
    case topLevelTypes.topCompositionEnd:
      return useFallbackCompositionData ? null : nativeEvent.data;
    default:
      return null;
  }
}

/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {DOMEventTarget} topLevelTarget The listening component root node.
 * @param {string} topLevelTargetID ID of `topLevelTarget`.
 * @param {object} nativeEvent Native browser event.
 * @return {?object} A SyntheticInputEvent.
 */
function extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
  var chars;

  if (canUseTextInputEvent) {
    chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
  } else {
    chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
  }

  // If no characters are being inserted, no BeforeInput event should
  // be fired.
  if (!chars) {
    return null;
  }

  var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, topLevelTargetID, nativeEvent, nativeEventTarget);

  event.data = chars;
  EventPropagators.accumulateTwoPhaseDispatches(event);
  return event;
}

/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */
var BeforeInputEventPlugin = {

  eventTypes: eventTypes,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
    return [extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget)];
  }
};

module.exports = BeforeInputEventPlugin;
},{"./EventConstants":17,"./EventPropagators":21,"./FallbackCompositionState":22,"./SyntheticCompositionEvent":93,"./SyntheticInputEvent":97,"fbjs/lib/ExecutionEnvironment":133,"fbjs/lib/keyOf":151}],6:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */

'use strict';

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = {
  background: {
    backgroundAttachment: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true
  },
  backgroundPosition: {
    backgroundPositionX: true,
    backgroundPositionY: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  },
  outline: {
    outlineWidth: true,
    outlineStyle: true,
    outlineColor: true
  }
};

var CSSProperty = {
  isUnitlessNumber: isUnitlessNumber,
  shorthandPropertyExpansions: shorthandPropertyExpansions
};

module.exports = CSSProperty;
},{}],7:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSPropertyOperations
 * @typechecks static-only
 */

'use strict';

var CSSProperty = require('./CSSProperty');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
var ReactPerf = require('./ReactPerf');

var camelizeStyleName = require('fbjs/lib/camelizeStyleName');
var dangerousStyleValue = require('./dangerousStyleValue');
var hyphenateStyleName = require('fbjs/lib/hyphenateStyleName');
var memoizeStringOnly = require('fbjs/lib/memoizeStringOnly');
var warning = require('fbjs/lib/warning');

var processStyleName = memoizeStringOnly(function (styleName) {
  return hyphenateStyleName(styleName);
});

var hasShorthandPropertyBug = false;
var styleFloatAccessor = 'cssFloat';
if (ExecutionEnvironment.canUseDOM) {
  var tempStyle = document.createElement('div').style;
  try {
    // IE8 throws "Invalid argument." if resetting shorthand style properties.
    tempStyle.font = '';
  } catch (e) {
    hasShorthandPropertyBug = true;
  }
  // IE8 only supports accessing cssFloat (standard) as styleFloat
  if (document.documentElement.style.cssFloat === undefined) {
    styleFloatAccessor = 'styleFloat';
  }
}

if (process.env.NODE_ENV !== 'production') {
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?', name, camelizeStyleName(name)) : undefined;
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1)) : undefined;
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    process.env.NODE_ENV !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon. ' + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, '')) : undefined;
  };

  /**
   * @param {string} name
   * @param {*} value
   */
  var warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }
  };
}

/**
 * Operations for dealing with CSS properties.
 */
var CSSPropertyOperations = {

  /**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @return {?string}
   */
  createMarkupForStyles: function (styles) {
    var serialized = '';
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      var styleValue = styles[styleName];
      if (process.env.NODE_ENV !== 'production') {
        warnValidStyle(styleName, styleValue);
      }
      if (styleValue != null) {
        serialized += processStyleName(styleName) + ':';
        serialized += dangerousStyleValue(styleName, styleValue) + ';';
      }
    }
    return serialized || null;
  },

  /**
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   *
   * @param {DOMElement} node
   * @param {object} styles
   */
  setValueForStyles: function (node, styles) {
    var style = node.style;
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      if (process.env.NODE_ENV !== 'production') {
        warnValidStyle(styleName, styles[styleName]);
      }
      var styleValue = dangerousStyleValue(styleName, styles[styleName]);
      if (styleName === 'float') {
        styleName = styleFloatAccessor;
      }
      if (styleValue) {
        style[styleName] = styleValue;
      } else {
        var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
        if (expansion) {
          // Shorthand property that IE8 won't like unsetting, so unset each
          // component to placate it
          for (var individualStyleName in expansion) {
            style[individualStyleName] = '';
          }
        } else {
          style[styleName] = '';
        }
      }
    }
  }

};

ReactPerf.measureMethods(CSSPropertyOperations, 'CSSPropertyOperations', {
  setValueForStyles: 'setValueForStyles'
});

module.exports = CSSPropertyOperations;
}).call(this,require('_process'))
},{"./CSSProperty":6,"./ReactPerf":74,"./dangerousStyleValue":108,"_process":2,"fbjs/lib/ExecutionEnvironment":133,"fbjs/lib/camelizeStyleName":135,"fbjs/lib/hyphenateStyleName":146,"fbjs/lib/memoizeStringOnly":153,"fbjs/lib/warning":158}],8:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CallbackQueue
 */

'use strict';

var PooledClass = require('./PooledClass');

var assign = require('./Object.assign');
var invariant = require('fbjs/lib/invariant');

/**
 * A specialized pseudo-event module to help keep track of components waiting to
 * be notified when their DOM representations are available for use.
 *
 * This implements `PooledClass`, so you should never need to instantiate this.
 * Instead, use `CallbackQueue.getPooled()`.
 *
 * @class ReactMountReady
 * @implements PooledClass
 * @internal
 */
function CallbackQueue() {
  this._callbacks = null;
  this._contexts = null;
}

assign(CallbackQueue.prototype, {

  /**
   * Enqueues a callback to be invoked when `notifyAll` is invoked.
   *
   * @param {function} callback Invoked when `notifyAll` is invoked.
   * @param {?object} context Context to call `callback` with.
   * @internal
   */
  enqueue: function (callback, context) {
    this._callbacks = this._callbacks || [];
    this._contexts = this._contexts || [];
    this._callbacks.push(callback);
    this._contexts.push(context);
  },

  /**
   * Invokes all enqueued callbacks and clears the queue. This is invoked after
   * the DOM representation of a component has been created or updated.
   *
   * @internal
   */
  notifyAll: function () {
    var callbacks = this._callbacks;
    var contexts = this._contexts;
    if (callbacks) {
      !(callbacks.length === contexts.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Mismatched list of contexts in callback queue') : invariant(false) : undefined;
      this._callbacks = null;
      this._contexts = null;
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i].call(contexts[i]);
      }
      callbacks.length = 0;
      contexts.length = 0;
    }
  },

  /**
   * Resets the internal queue.
   *
   * @internal
   */
  reset: function () {
    this._callbacks = null;
    this._contexts = null;
  },

  /**
   * `PooledClass` looks for this.
   */
  destructor: function () {
    this.reset();
  }

});

PooledClass.addPoolingTo(CallbackQueue);

module.exports = CallbackQueue;
}).call(this,require('_process'))
},{"./Object.assign":25,"./PooledClass":26,"_process":2,"fbjs/lib/invariant":147}],9:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ChangeEventPlugin
 */

'use strict';

var EventConstants = require('./EventConstants');
var EventPluginHub = require('./EventPluginHub');
var EventPropagators = require('./EventPropagators');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
var ReactUpdates = require('./ReactUpdates');
var SyntheticEvent = require('./SyntheticEvent');

var getEventTarget = require('./getEventTarget');
var isEventSupported = require('./isEventSupported');
var isTextInputElement = require('./isTextInputElement');
var keyOf = require('fbjs/lib/keyOf');

var topLevelTypes = EventConstants.topLevelTypes;

var eventTypes = {
  change: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onChange: null }),
      captured: keyOf({ onChangeCapture: null })
    },
    dependencies: [topLevelTypes.topBlur, topLevelTypes.topChange, topLevelTypes.topClick, topLevelTypes.topFocus, topLevelTypes.topInput, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topSelectionChange]
  }
};

/**
 * For IE shims
 */
var activeElement = null;
var activeElementID = null;
var activeElementValue = null;
var activeElementValueProp = null;

/**
 * SECTION: handle `change` event
 */
function shouldUseChangeEvent(elem) {
  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
  return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
}

var doesChangeEventBubble = false;
if (ExecutionEnvironment.canUseDOM) {
  // See `handleChange` comment below
  doesChangeEventBubble = isEventSupported('change') && (!('documentMode' in document) || document.documentMode > 8);
}

function manualDispatchChangeEvent(nativeEvent) {
  var event = SyntheticEvent.getPooled(eventTypes.change, activeElementID, nativeEvent, getEventTarget(nativeEvent));
  EventPropagators.accumulateTwoPhaseDispatches(event);

  // If change and propertychange bubbled, we'd just bind to it like all the
  // other events and have it go through ReactBrowserEventEmitter. Since it
  // doesn't, we manually listen for the events and so we have to enqueue and
  // process the abstract event manually.
  //
  // Batching is necessary here in order to ensure that all event handlers run
  // before the next rerender (including event handlers attached to ancestor
  // elements instead of directly on the input). Without this, controlled
  // components don't work properly in conjunction with event bubbling because
  // the component is rerendered and the value reverted before all the event
  // handlers can run. See https://github.com/facebook/react/issues/708.
  ReactUpdates.batchedUpdates(runEventInBatch, event);
}

function runEventInBatch(event) {
  EventPluginHub.enqueueEvents(event);
  EventPluginHub.processEventQueue(false);
}

function startWatchingForChangeEventIE8(target, targetID) {
  activeElement = target;
  activeElementID = targetID;
  activeElement.attachEvent('onchange', manualDispatchChangeEvent);
}

function stopWatchingForChangeEventIE8() {
  if (!activeElement) {
    return;
  }
  activeElement.detachEvent('onchange', manualDispatchChangeEvent);
  activeElement = null;
  activeElementID = null;
}

function getTargetIDForChangeEvent(topLevelType, topLevelTarget, topLevelTargetID) {
  if (topLevelType === topLevelTypes.topChange) {
    return topLevelTargetID;
  }
}
function handleEventsForChangeEventIE8(topLevelType, topLevelTarget, topLevelTargetID) {
  if (topLevelType === topLevelTypes.topFocus) {
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    stopWatchingForChangeEventIE8();
    startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
  } else if (topLevelType === topLevelTypes.topBlur) {
    stopWatchingForChangeEventIE8();
  }
}

/**
 * SECTION: handle `input` event
 */
var isInputEventSupported = false;
if (ExecutionEnvironment.canUseDOM) {
  // IE9 claims to support the input event but fails to trigger it when
  // deleting text, so we ignore its input events
  isInputEventSupported = isEventSupported('input') && (!('documentMode' in document) || document.documentMode > 9);
}

/**
 * (For old IE.) Replacement getter/setter for the `value` property that gets
 * set on the active element.
 */
var newValueProp = {
  get: function () {
    return activeElementValueProp.get.call(this);
  },
  set: function (val) {
    // Cast to a string so we can do equality checks.
    activeElementValue = '' + val;
    activeElementValueProp.set.call(this, val);
  }
};

/**
 * (For old IE.) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */
function startWatchingForValueChange(target, targetID) {
  activeElement = target;
  activeElementID = targetID;
  activeElementValue = target.value;
  activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');

  // Not guarded in a canDefineProperty check: IE8 supports defineProperty only
  // on DOM elements
  Object.defineProperty(activeElement, 'value', newValueProp);
  activeElement.attachEvent('onpropertychange', handlePropertyChange);
}

/**
 * (For old IE.) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */
function stopWatchingForValueChange() {
  if (!activeElement) {
    return;
  }

  // delete restores the original property definition
  delete activeElement.value;
  activeElement.detachEvent('onpropertychange', handlePropertyChange);

  activeElement = null;
  activeElementID = null;
  activeElementValue = null;
  activeElementValueProp = null;
}

/**
 * (For old IE.) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */
function handlePropertyChange(nativeEvent) {
  if (nativeEvent.propertyName !== 'value') {
    return;
  }
  var value = nativeEvent.srcElement.value;
  if (value === activeElementValue) {
    return;
  }
  activeElementValue = value;

  manualDispatchChangeEvent(nativeEvent);
}

/**
 * If a `change` event should be fired, returns the target's ID.
 */
function getTargetIDForInputEvent(topLevelType, topLevelTarget, topLevelTargetID) {
  if (topLevelType === topLevelTypes.topInput) {
    // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
    // what we want so fall through here and trigger an abstract event
    return topLevelTargetID;
  }
}

// For IE8 and IE9.
function handleEventsForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
  if (topLevelType === topLevelTypes.topFocus) {
    // In IE8, we can capture almost all .value changes by adding a
    // propertychange handler and looking for events with propertyName
    // equal to 'value'
    // In IE9, propertychange fires for most input events but is buggy and
    // doesn't fire when text is deleted, but conveniently, selectionchange
    // appears to fire in all of the remaining cases so we catch those and
    // forward the event if the value has changed
    // In either case, we don't want to call the event handler if the value
    // is changed from JS so we redefine a setter for `.value` that updates
    // our activeElementValue variable, allowing us to ignore those changes
    //
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    stopWatchingForValueChange();
    startWatchingForValueChange(topLevelTarget, topLevelTargetID);
  } else if (topLevelType === topLevelTypes.topBlur) {
    stopWatchingForValueChange();
  }
}

// For IE8 and IE9.
function getTargetIDForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
  if (topLevelType === topLevelTypes.topSelectionChange || topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown) {
    // On the selectionchange event, the target is just document which isn't
    // helpful for us so just check activeElement instead.
    //
    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
    // propertychange on the first input event after setting `value` from a
    // script and fires only keydown, keypress, keyup. Catching keyup usually
    // gets it and catching keydown lets us fire an event for the first
    // keystroke if user does a key repeat (it'll be a little delayed: right
    // before the second keystroke). Other input methods (e.g., paste) seem to
    // fire selectionchange normally.
    if (activeElement && activeElement.value !== activeElementValue) {
      activeElementValue = activeElement.value;
      return activeElementID;
    }
  }
}

/**
 * SECTION: handle `click` event
 */
function shouldUseClickEvent(elem) {
  // Use the `click` event to detect changes to checkbox and radio inputs.
  // This approach works across all browsers, whereas `change` does not fire
  // until `blur` in IE8.
  return elem.nodeName && elem.nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
}

function getTargetIDForClickEvent(topLevelType, topLevelTarget, topLevelTargetID) {
  if (topLevelType === topLevelTypes.topClick) {
    return topLevelTargetID;
  }
}

/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */
var ChangeEventPlugin = {

  eventTypes: eventTypes,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {

    var getTargetIDFunc, handleEventFunc;
    if (shouldUseChangeEvent(topLevelTarget)) {
      if (doesChangeEventBubble) {
        getTargetIDFunc = getTargetIDForChangeEvent;
      } else {
        handleEventFunc = handleEventsForChangeEventIE8;
      }
    } else if (isTextInputElement(topLevelTarget)) {
      if (isInputEventSupported) {
        getTargetIDFunc = getTargetIDForInputEvent;
      } else {
        getTargetIDFunc = getTargetIDForInputEventIE;
        handleEventFunc = handleEventsForInputEventIE;
      }
    } else if (shouldUseClickEvent(topLevelTarget)) {
      getTargetIDFunc = getTargetIDForClickEvent;
    }

    if (getTargetIDFunc) {
      var targetID = getTargetIDFunc(topLevelType, topLevelTarget, topLevelTargetID);
      if (targetID) {
        var event = SyntheticEvent.getPooled(eventTypes.change, targetID, nativeEvent, nativeEventTarget);
        event.type = 'change';
        EventPropagators.accumulateTwoPhaseDispatches(event);
        return event;
      }
    }

    if (handleEventFunc) {
      handleEventFunc(topLevelType, topLevelTarget, topLevelTargetID);
    }
  }

};

module.exports = ChangeEventPlugin;
},{"./EventConstants":17,"./EventPluginHub":18,"./EventPropagators":21,"./ReactUpdates":86,"./SyntheticEvent":95,"./getEventTarget":117,"./isEventSupported":122,"./isTextInputElement":123,"fbjs/lib/ExecutionEnvironment":133,"fbjs/lib/keyOf":151}],10:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ClientReactRootIndex
 * @typechecks
 */

'use strict';

var nextReactRootIndex = 0;

var ClientReactRootIndex = {
  createReactRootIndex: function () {
    return nextReactRootIndex++;
  }
};

module.exports = ClientReactRootIndex;
},{}],11:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMChildrenOperations
 * @typechecks static-only
 */

'use strict';

var Danger = require('./Danger');
var ReactMultiChildUpdateTypes = require('./ReactMultiChildUpdateTypes');
var ReactPerf = require('./ReactPerf');

var setInnerHTML = require('./setInnerHTML');
var setTextContent = require('./setTextContent');
var invariant = require('fbjs/lib/invariant');

/**
 * Inserts `childNode` as a child of `parentNode` at the `index`.
 *
 * @param {DOMElement} parentNode Parent node in which to insert.
 * @param {DOMElement} childNode Child node to insert.
 * @param {number} index Index at which to insert the child.
 * @internal
 */
function insertChildAt(parentNode, childNode, index) {
  // By exploiting arrays returning `undefined` for an undefined index, we can
  // rely exclusively on `insertBefore(node, null)` instead of also using
  // `appendChild(node)`. However, using `undefined` is not allowed by all
  // browsers so we must replace it with `null`.

  // fix render order error in safari
  // IE8 will throw error when index out of list size.
  var beforeChild = index >= parentNode.childNodes.length ? null : parentNode.childNodes.item(index);

  parentNode.insertBefore(childNode, beforeChild);
}

/**
 * Operations for updating with DOM children.
 */
var DOMChildrenOperations = {

  dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,

  updateTextContent: setTextContent,

  /**
   * Updates a component's children by processing a series of updates. The
   * update configurations are each expected to have a `parentNode` property.
   *
   * @param {array<object>} updates List of update configurations.
   * @param {array<string>} markupList List of markup strings.
   * @internal
   */
  processUpdates: function (updates, markupList) {
    var update;
    // Mapping from parent IDs to initial child orderings.
    var initialChildren = null;
    // List of children that will be moved or removed.
    var updatedChildren = null;

    for (var i = 0; i < updates.length; i++) {
      update = updates[i];
      if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING || update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
        var updatedIndex = update.fromIndex;
        var updatedChild = update.parentNode.childNodes[updatedIndex];
        var parentID = update.parentID;

        !updatedChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processUpdates(): Unable to find child %s of element. This ' + 'probably means the DOM was unexpectedly mutated (e.g., by the ' + 'browser), usually due to forgetting a <tbody> when using tables, ' + 'nesting tags like <form>, <p>, or <a>, or using non-SVG elements ' + 'in an <svg> parent. Try inspecting the child nodes of the element ' + 'with React ID `%s`.', updatedIndex, parentID) : invariant(false) : undefined;

        initialChildren = initialChildren || {};
        initialChildren[parentID] = initialChildren[parentID] || [];
        initialChildren[parentID][updatedIndex] = updatedChild;

        updatedChildren = updatedChildren || [];
        updatedChildren.push(updatedChild);
      }
    }

    var renderedMarkup;
    // markupList is either a list of markup or just a list of elements
    if (markupList.length && typeof markupList[0] === 'string') {
      renderedMarkup = Danger.dangerouslyRenderMarkup(markupList);
    } else {
      renderedMarkup = markupList;
    }

    // Remove updated children first so that `toIndex` is consistent.
    if (updatedChildren) {
      for (var j = 0; j < updatedChildren.length; j++) {
        updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
      }
    }

    for (var k = 0; k < updates.length; k++) {
      update = updates[k];
      switch (update.type) {
        case ReactMultiChildUpdateTypes.INSERT_MARKUP:
          insertChildAt(update.parentNode, renderedMarkup[update.markupIndex], update.toIndex);
          break;
        case ReactMultiChildUpdateTypes.MOVE_EXISTING:
          insertChildAt(update.parentNode, initialChildren[update.parentID][update.fromIndex], update.toIndex);
          break;
        case ReactMultiChildUpdateTypes.SET_MARKUP:
          setInnerHTML(update.parentNode, update.content);
          break;
        case ReactMultiChildUpdateTypes.TEXT_CONTENT:
          setTextContent(update.parentNode, update.content);
          break;
        case ReactMultiChildUpdateTypes.REMOVE_NODE:
          // Already removed by the for-loop above.
          break;
      }
    }
  }

};

ReactPerf.measureMethods(DOMChildrenOperations, 'DOMChildrenOperations', {
  updateTextContent: 'updateTextContent'
});

module.exports = DOMChildrenOperations;
}).call(this,require('_process'))
},{"./Danger":14,"./ReactMultiChildUpdateTypes":70,"./ReactPerf":74,"./setInnerHTML":127,"./setTextContent":128,"_process":2,"fbjs/lib/invariant":147}],12:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMProperty
 * @typechecks static-only
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}

var DOMPropertyInjection = {
  /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */
  MUST_USE_ATTRIBUTE: 0x1,
  MUST_USE_PROPERTY: 0x2,
  HAS_SIDE_EFFECTS: 0x4,
  HAS_BOOLEAN_VALUE: 0x8,
  HAS_NUMERIC_VALUE: 0x10,
  HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
  HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,

  /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */
  injectDOMPropertyConfig: function (domPropertyConfig) {
    var Injection = DOMPropertyInjection;
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

    if (domPropertyConfig.isCustomAttribute) {
      DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
    }

    for (var propName in Properties) {
      !!DOMProperty.properties.hasOwnProperty(propName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' + '\'%s\' which has already been injected. You may be accidentally ' + 'injecting the same DOM property config twice, or you may be ' + 'injecting two configs that have conflicting property names.', propName) : invariant(false) : undefined;

      var lowerCased = propName.toLowerCase();
      var propConfig = Properties[propName];

      var propertyInfo = {
        attributeName: lowerCased,
        attributeNamespace: null,
        propertyName: propName,
        mutationMethod: null,

        mustUseAttribute: checkMask(propConfig, Injection.MUST_USE_ATTRIBUTE),
        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
        hasSideEffects: checkMask(propConfig, Injection.HAS_SIDE_EFFECTS),
        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
      };

      !(!propertyInfo.mustUseAttribute || !propertyInfo.mustUseProperty) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Cannot require using both attribute and property: %s', propName) : invariant(false) : undefined;
      !(propertyInfo.mustUseProperty || !propertyInfo.hasSideEffects) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Properties that have side effects must use property: %s', propName) : invariant(false) : undefined;
      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or ' + 'numeric value, but not a combination: %s', propName) : invariant(false) : undefined;

      if (process.env.NODE_ENV !== 'production') {
        DOMProperty.getPossibleStandardName[lowerCased] = propName;
      }

      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];
        propertyInfo.attributeName = attributeName;
        if (process.env.NODE_ENV !== 'production') {
          DOMProperty.getPossibleStandardName[attributeName] = propName;
        }
      }

      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
      }

      if (DOMPropertyNames.hasOwnProperty(propName)) {
        propertyInfo.propertyName = DOMPropertyNames[propName];
      }

      if (DOMMutationMethods.hasOwnProperty(propName)) {
        propertyInfo.mutationMethod = DOMMutationMethods[propName];
      }

      DOMProperty.properties[propName] = propertyInfo;
    }
  }
};
var defaultValueCache = {};

/**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */
var DOMProperty = {

  ID_ATTRIBUTE_NAME: 'data-reactid',

  /**
   * Map from property "standard name" to an object with info about how to set
   * the property in the DOM. Each object contains:
   *
   * attributeName:
   *   Used when rendering markup or with `*Attribute()`.
   * attributeNamespace
   * propertyName:
   *   Used on DOM node instances. (This includes properties that mutate due to
   *   external factors.)
   * mutationMethod:
   *   If non-null, used instead of the property or `setAttribute()` after
   *   initial render.
   * mustUseAttribute:
   *   Whether the property must be accessed and mutated using `*Attribute()`.
   *   (This includes anything that fails `<propName> in <element>`.)
   * mustUseProperty:
   *   Whether the property must be accessed and mutated as an object property.
   * hasSideEffects:
   *   Whether or not setting a value causes side effects such as triggering
   *   resources to be loaded or text selection changes. If true, we read from
   *   the DOM before updating to ensure that the value is only set if it has
   *   changed.
   * hasBooleanValue:
   *   Whether the property should be removed when set to a falsey value.
   * hasNumericValue:
   *   Whether the property must be numeric or parse as a numeric and should be
   *   removed when set to a falsey value.
   * hasPositiveNumericValue:
   *   Whether the property must be positive numeric or parse as a positive
   *   numeric and should be removed when set to a falsey value.
   * hasOverloadedBooleanValue:
   *   Whether the property can be used as a flag as well as with a value.
   *   Removed when strictly equal to false; present without a value when
   *   strictly equal to true; present with a value otherwise.
   */
  properties: {},

  /**
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties. Available only in __DEV__.
   * @type {Object}
   */
  getPossibleStandardName: process.env.NODE_ENV !== 'production' ? {} : null,

  /**
   * All of the isCustomAttribute() functions that have been injected.
   */
  _isCustomAttributeFunctions: [],

  /**
   * Checks whether a property name is a custom attribute.
   * @method
   */
  isCustomAttribute: function (attributeName) {
    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
      if (isCustomAttributeFn(attributeName)) {
        return true;
      }
    }
    return false;
  },

  /**
   * Returns the default property value for a DOM property (i.e., not an
   * attribute). Most default values are '' or false, but not all. Worse yet,
   * some (in particular, `type`) vary depending on the type of element.
   *
   * TODO: Is it better to grab all the possible properties when creating an
   * element to avoid having to create the same element twice?
   */
  getDefaultValueForProperty: function (nodeName, prop) {
    var nodeDefaults = defaultValueCache[nodeName];
    var testElement;
    if (!nodeDefaults) {
      defaultValueCache[nodeName] = nodeDefaults = {};
    }
    if (!(prop in nodeDefaults)) {
      testElement = document.createElement(nodeName);
      nodeDefaults[prop] = testElement[prop];
    }
    return nodeDefaults[prop];
  },

  injection: DOMPropertyInjection
};

module.exports = DOMProperty;
}).call(this,require('_process'))
},{"_process":2,"fbjs/lib/invariant":147}],13:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMPropertyOperations
 * @typechecks static-only
 */

'use strict';

var DOMProperty = require('./DOMProperty');
var ReactPerf = require('./ReactPerf');

var quoteAttributeValueForBrowser = require('./quoteAttributeValueForBrowser');
var warning = require('fbjs/lib/warning');

// Simplified subset
var VALID_ATTRIBUTE_NAME_REGEX = /^[a-zA-Z_][\w\.\-]*$/;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};

function isAttributeNameSafe(attributeName) {
  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
    return true;
  }
  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
    return false;
  }
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }
  illegalAttributeNameCache[attributeName] = true;
  process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid attribute name: `%s`', attributeName) : undefined;
  return false;
}

function shouldIgnoreValue(propertyInfo, value) {
  return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
}

if (process.env.NODE_ENV !== 'production') {
  var reactProps = {
    children: true,
    dangerouslySetInnerHTML: true,
    key: true,
    ref: true
  };
  var warnedProperties = {};

  var warnUnknownProperty = function (name) {
    if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
      return;
    }

    warnedProperties[name] = true;
    var lowerCasedName = name.toLowerCase();

    // data-* attributes should be lowercase; suggest the lowercase version
    var standardName = DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null;

    // For now, only warn when we have a suggested correction. This prevents
    // logging too much when using transferPropsTo.
    process.env.NODE_ENV !== 'production' ? warning(standardName == null, 'Unknown DOM property %s. Did you mean %s?', name, standardName) : undefined;
  };
}

/**
 * Operations for dealing with DOM properties.
 */
var DOMPropertyOperations = {

  /**
   * Creates markup for the ID property.
   *
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */
  createMarkupForID: function (id) {
    return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
  },

  setAttributeForID: function (node, id) {
    node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);
  },

  /**
   * Creates markup for a property.
   *
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */
  createMarkupForProperty: function (name, value) {
    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
    if (propertyInfo) {
      if (shouldIgnoreValue(propertyInfo, value)) {
        return '';
      }
      var attributeName = propertyInfo.attributeName;
      if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
        return attributeName + '=""';
      }
      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    } else if (DOMProperty.isCustomAttribute(name)) {
      if (value == null) {
        return '';
      }
      return name + '=' + quoteAttributeValueForBrowser(value);
    } else if (process.env.NODE_ENV !== 'production') {
      warnUnknownProperty(name);
    }
    return null;
  },

  /**
   * Creates markup for a custom property.
   *
   * @param {string} name
   * @param {*} value
   * @return {string} Markup string, or empty string if the property was invalid.
   */
  createMarkupForCustomAttribute: function (name, value) {
    if (!isAttributeNameSafe(name) || value == null) {
      return '';
    }
    return name + '=' + quoteAttributeValueForBrowser(value);
  },

  /**
   * Sets the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */
  setValueForProperty: function (node, name, value) {
    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
    if (propertyInfo) {
      var mutationMethod = propertyInfo.mutationMethod;
      if (mutationMethod) {
        mutationMethod(node, value);
      } else if (shouldIgnoreValue(propertyInfo, value)) {
        this.deleteValueForProperty(node, name);
      } else if (propertyInfo.mustUseAttribute) {
        var attributeName = propertyInfo.attributeName;
        var namespace = propertyInfo.attributeNamespace;
        // `setAttribute` with objects becomes only `[object]` in IE8/9,
        // ('' + value) makes it output the correct toString()-value.
        if (namespace) {
          node.setAttributeNS(namespace, attributeName, '' + value);
        } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
          node.setAttribute(attributeName, '');
        } else {
          node.setAttribute(attributeName, '' + value);
        }
      } else {
        var propName = propertyInfo.propertyName;
        // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
        // property type before comparing; only `value` does and is string.
        if (!propertyInfo.hasSideEffects || '' + node[propName] !== '' + value) {
          // Contrary to `setAttribute`, object properties are properly
          // `toString`ed by IE8/9.
          node[propName] = value;
        }
      }
    } else if (DOMProperty.isCustomAttribute(name)) {
      DOMPropertyOperations.setValueForAttribute(node, name, value);
    } else if (process.env.NODE_ENV !== 'production') {
      warnUnknownProperty(name);
    }
  },

  setValueForAttribute: function (node, name, value) {
    if (!isAttributeNameSafe(name)) {
      return;
    }
    if (value == null) {
      node.removeAttribute(name);
    } else {
      node.setAttribute(name, '' + value);
    }
  },

  /**
   * Deletes the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */
  deleteValueForProperty: function (node, name) {
    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
    if (propertyInfo) {
      var mutationMethod = propertyInfo.mutationMethod;
      if (mutationMethod) {
        mutationMethod(node, undefined);
      } else if (propertyInfo.mustUseAttribute) {
        node.removeAttribute(propertyInfo.attributeName);
      } else {
        var propName = propertyInfo.propertyName;
        var defaultValue = DOMProperty.getDefaultValueForProperty(node.nodeName, propName);
        if (!propertyInfo.hasSideEffects || '' + node[propName] !== defaultValue) {
          node[propName] = defaultValue;
        }
      }
    } else if (DOMProperty.isCustomAttribute(name)) {
      node.removeAttribute(name);
    } else if (process.env.NODE_ENV !== 'production') {
      warnUnknownProperty(name);
    }
  }

};

ReactPerf.measureMethods(DOMPropertyOperations, 'DOMPropertyOperations', {
  setValueForProperty: 'setValueForProperty',
  setValueForAttribute: 'setValueForAttribute',
  deleteValueForProperty: 'deleteValueForProperty'
});

module.exports = DOMPropertyOperations;
}).call(this,require('_process'))
},{"./DOMProperty":12,"./ReactPerf":74,"./quoteAttributeValueForBrowser":125,"_process":2,"fbjs/lib/warning":158}],14:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Danger
 * @typechecks static-only
 */

'use strict';

var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var createNodesFromMarkup = require('fbjs/lib/createNodesFromMarkup');
var emptyFunction = require('fbjs/lib/emptyFunction');
var getMarkupWrap = require('fbjs/lib/getMarkupWrap');
var invariant = require('fbjs/lib/invariant');

var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
var RESULT_INDEX_ATTR = 'data-danger-index';

/**
 * Extracts the `nodeName` from a string of markup.
 *
 * NOTE: Extracting the `nodeName` does not require a regular expression match
 * because we make assumptions about React-generated markup (i.e. there are no
 * spaces surrounding the opening tag and there is at least one attribute).
 *
 * @param {string} markup String of markup.
 * @return {string} Node name of the supplied markup.
 * @see http://jsperf.com/extract-nodename
 */
function getNodeName(markup) {
  return markup.substring(1, markup.indexOf(' '));
}

var Danger = {

  /**
   * Renders markup into an array of nodes. The markup is expected to render
   * into a list of root nodes. Also, the length of `resultList` and
   * `markupList` should be the same.
   *
   * @param {array<string>} markupList List of markup strings to render.
   * @return {array<DOMElement>} List of rendered nodes.
   * @internal
   */
  dangerouslyRenderMarkup: function (markupList) {
    !ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' + 'thread. Make sure `window` and `document` are available globally ' + 'before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString for server rendering.') : invariant(false) : undefined;
    var nodeName;
    var markupByNodeName = {};
    // Group markup by `nodeName` if a wrap is necessary, else by '*'.
    for (var i = 0; i < markupList.length; i++) {
      !markupList[i] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Missing markup.') : invariant(false) : undefined;
      nodeName = getNodeName(markupList[i]);
      nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
      markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
      markupByNodeName[nodeName][i] = markupList[i];
    }
    var resultList = [];
    var resultListAssignmentCount = 0;
    for (nodeName in markupByNodeName) {
      if (!markupByNodeName.hasOwnProperty(nodeName)) {
        continue;
      }
      var markupListByNodeName = markupByNodeName[nodeName];

      // This for-in loop skips the holes of the sparse array. The order of
      // iteration should follow the order of assignment, which happens to match
      // numerical index order, but we don't rely on that.
      var resultIndex;
      for (resultIndex in markupListByNodeName) {
        if (markupListByNodeName.hasOwnProperty(resultIndex)) {
          var markup = markupListByNodeName[resultIndex];

          // Push the requested markup with an additional RESULT_INDEX_ATTR
          // attribute.  If the markup does not start with a < character, it
          // will be discarded below (with an appropriate console.error).
          markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP,
          // This index will be parsed back out below.
          '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" ');
        }
      }

      // Render each group of markup with similar wrapping `nodeName`.
      var renderNodes = createNodesFromMarkup(markupListByNodeName.join(''), emptyFunction // Do nothing special with <script> tags.
      );

      for (var j = 0; j < renderNodes.length; ++j) {
        var renderNode = renderNodes[j];
        if (renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR)) {

          resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
          renderNode.removeAttribute(RESULT_INDEX_ATTR);

          !!resultList.hasOwnProperty(resultIndex) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Assigning to an already-occupied result index.') : invariant(false) : undefined;

          resultList[resultIndex] = renderNode;

          // This should match resultList.length and markupList.length when
          // we're done.
          resultListAssignmentCount += 1;
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Danger: Discarding unexpected node:', renderNode);
        }
      }
    }

    // Although resultList was populated out of order, it should now be a dense
    // array.
    !(resultListAssignmentCount === resultList.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Did not assign to every index of resultList.') : invariant(false) : undefined;

    !(resultList.length === markupList.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Expected markup to render %s nodes, but rendered %s.', markupList.length, resultList.length) : invariant(false) : undefined;

    return resultList;
  },

  /**
   * Replaces a node with a string of markup at its current position within its
   * parent. The markup must render into a single root node.
   *
   * @param {DOMElement} oldChild Child node to replace.
   * @param {string} markup Markup to render in place of the child node.
   * @internal
   */
  dangerouslyReplaceNodeWithMarkup: function (oldChild, markup) {
    !ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' + 'worker thread. Make sure `window` and `document` are available ' + 'globally before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString() for server rendering.') : invariant(false) : undefined;
    !markup ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(false) : undefined;
    !(oldChild.tagName.toLowerCase() !== 'html') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' + '<html> node. This is because browser quirks make this unreliable ' + 'and/or slow. If you want to render to the root you must use ' + 'server rendering. See ReactDOMServer.renderToString().') : invariant(false) : undefined;

    var newChild;
    if (typeof markup === 'string') {
      newChild = createNodesFromMarkup(markup, emptyFunction)[0];
    } else {
      newChild = markup;
    }
    oldChild.parentNode.replaceChild(newChild, oldChild);
  }

};

module.exports = Danger;
}).call(this,require('_process'))
},{"_process":2,"fbjs/lib/ExecutionEnvironment":133,"fbjs/lib/createNodesFromMarkup":138,"fbjs/lib/emptyFunction":139,"fbjs/lib/getMarkupWrap":143,"fbjs/lib/invariant":147}],15:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DefaultEventPluginOrder
 */

'use strict';

var keyOf = require('fbjs/lib/keyOf');

/**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */
var DefaultEventPluginOrder = [keyOf({ ResponderEventPlugin: null }), keyOf({ SimpleEventPlugin: null }), keyOf({ TapEventPlugin: null }), keyOf({ EnterLeaveEventPlugin: null }), keyOf({ ChangeEventPlugin: null }), keyOf({ SelectEventPlugin: null }), keyOf({ BeforeInputEventPlugin: null })];

module.exports = DefaultEventPluginOrder;
},{"fbjs/lib/keyOf":151}],16:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EnterLeaveEventPlugin
 * @typechecks static-only
 */

'use strict';

var EventConstants = require('./EventConstants');
var EventPropagators = require('./EventPropagators');
var SyntheticMouseEvent = require('./SyntheticMouseEvent');

var ReactMount = require('./ReactMount');
var keyOf = require('fbjs/lib/keyOf');

var topLevelTypes = EventConstants.topLevelTypes;
var getFirstReactDOM = ReactMount.getFirstReactDOM;

var eventTypes = {
  mouseEnter: {
    registrationName: keyOf({ onMouseEnter: null }),
    dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
  },
  mouseLeave: {
    registrationName: keyOf({ onMouseLeave: null }),
    dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
  }
};

var extractedEvents = [null, null];

var EnterLeaveEventPlugin = {

  eventTypes: eventTypes,

  /**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
    if (topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
      return null;
    }
    if (topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver) {
      // Must not be a mouse in or mouse out - ignoring.
      return null;
    }

    var win;
    if (topLevelTarget.window === topLevelTarget) {
      // `topLevelTarget` is probably a window object.
      win = topLevelTarget;
    } else {
      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
      var doc = topLevelTarget.ownerDocument;
      if (doc) {
        win = doc.defaultView || doc.parentWindow;
      } else {
        win = window;
      }
    }

    var from;
    var to;
    var fromID = '';
    var toID = '';
    if (topLevelType === topLevelTypes.topMouseOut) {
      from = topLevelTarget;
      fromID = topLevelTargetID;
      to = getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement);
      if (to) {
        toID = ReactMount.getID(to);
      } else {
        to = win;
      }
      to = to || win;
    } else {
      from = win;
      to = topLevelTarget;
      toID = topLevelTargetID;
    }

    if (from === to) {
      // Nothing pertains to our managed components.
      return null;
    }

    var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, fromID, nativeEvent, nativeEventTarget);
    leave.type = 'mouseleave';
    leave.target = from;
    leave.relatedTarget = to;

    var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, toID, nativeEvent, nativeEventTarget);
    enter.type = 'mouseenter';
    enter.target = to;
    enter.relatedTarget = from;

    EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);

    extractedEvents[0] = leave;
    extractedEvents[1] = enter;

    return extractedEvents;
  }

};

module.exports = EnterLeaveEventPlugin;
},{"./EventConstants":17,"./EventPropagators":21,"./ReactMount":68,"./SyntheticMouseEvent":99,"fbjs/lib/keyOf":151}],17:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventConstants
 */

'use strict';

var keyMirror = require('fbjs/lib/keyMirror');

var PropagationPhases = keyMirror({ bubbled: null, captured: null });

/**
 * Types of raw signals from the browser caught at the top level.
 */
var topLevelTypes = keyMirror({
  topAbort: null,
  topBlur: null,
  topCanPlay: null,
  topCanPlayThrough: null,
  topChange: null,
  topClick: null,
  topCompositionEnd: null,
  topCompositionStart: null,
  topCompositionUpdate: null,
  topContextMenu: null,
  topCopy: null,
  topCut: null,
  topDoubleClick: null,
  topDrag: null,
  topDragEnd: null,
  topDragEnter: null,
  topDragExit: null,
  topDragLeave: null,
  topDragOver: null,
  topDragStart: null,
  topDrop: null,
  topDurationChange: null,
  topEmptied: null,
  topEncrypted: null,
  topEnded: null,
  topError: null,
  topFocus: null,
  topInput: null,
  topKeyDown: null,
  topKeyPress: null,
  topKeyUp: null,
  topLoad: null,
  topLoadedData: null,
  topLoadedMetadata: null,
  topLoadStart: null,
  topMouseDown: null,
  topMouseMove: null,
  topMouseOut: null,
  topMouseOver: null,
  topMouseUp: null,
  topPaste: null,
  topPause: null,
  topPlay: null,
  topPlaying: null,
  topProgress: null,
  topRateChange: null,
  topReset: null,
  topScroll: null,
  topSeeked: null,
  topSeeking: null,
  topSelectionChange: null,
  topStalled: null,
  topSubmit: null,
  topSuspend: null,
  topTextInput: null,
  topTimeUpdate: null,
  topTouchCancel: null,
  topTouchEnd: null,
  topTouchMove: null,
  topTouchStart: null,
  topVolumeChange: null,
  topWaiting: null,
  topWheel: null
});

var EventConstants = {
  topLevelTypes: topLevelTypes,
  PropagationPhases: PropagationPhases
};

module.exports = EventConstants;
},{"fbjs/lib/keyMirror":150}],18:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginHub
 */

'use strict';

var EventPluginRegistry = require('./EventPluginRegistry');
var EventPluginUtils = require('./EventPluginUtils');
var ReactErrorUtils = require('./ReactErrorUtils');

var accumulateInto = require('./accumulateInto');
var forEachAccumulated = require('./forEachAccumulated');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

/**
 * Internal store for event listeners
 */
var listenerBank = {};

/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */
var eventQueue = null;

/**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @private
 */
var executeDispatchesAndRelease = function (event, simulated) {
  if (event) {
    EventPluginUtils.executeDispatchesInOrder(event, simulated);

    if (!event.isPersistent()) {
      event.constructor.release(event);
    }
  }
};
var executeDispatchesAndReleaseSimulated = function (e) {
  return executeDispatchesAndRelease(e, true);
};
var executeDispatchesAndReleaseTopLevel = function (e) {
  return executeDispatchesAndRelease(e, false);
};

/**
 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
 *   hierarchy given ids of the logical DOM elements involved.
 */
var InstanceHandle = null;

function validateInstanceHandle() {
  var valid = InstanceHandle && InstanceHandle.traverseTwoPhase && InstanceHandle.traverseEnterLeave;
  process.env.NODE_ENV !== 'production' ? warning(valid, 'InstanceHandle not injected before use!') : undefined;
}

/**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */
var EventPluginHub = {

  /**
   * Methods for injecting dependencies.
   */
  injection: {

    /**
     * @param {object} InjectedMount
     * @public
     */
    injectMount: EventPluginUtils.injection.injectMount,

    /**
     * @param {object} InjectedInstanceHandle
     * @public
     */
    injectInstanceHandle: function (InjectedInstanceHandle) {
      InstanceHandle = InjectedInstanceHandle;
      if (process.env.NODE_ENV !== 'production') {
        validateInstanceHandle();
      }
    },

    getInstanceHandle: function () {
      if (process.env.NODE_ENV !== 'production') {
        validateInstanceHandle();
      }
      return InstanceHandle;
    },

    /**
     * @param {array} InjectedEventPluginOrder
     * @public
     */
    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,

    /**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */
    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName

  },

  eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,

  registrationNameModules: EventPluginRegistry.registrationNameModules,

  /**
   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
   *
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {?function} listener The callback to store.
   */
  putListener: function (id, registrationName, listener) {
    !(typeof listener === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : invariant(false) : undefined;

    var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
    bankForRegistrationName[id] = listener;

    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
    if (PluginModule && PluginModule.didPutListener) {
      PluginModule.didPutListener(id, registrationName, listener);
    }
  },

  /**
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */
  getListener: function (id, registrationName) {
    var bankForRegistrationName = listenerBank[registrationName];
    return bankForRegistrationName && bankForRegistrationName[id];
  },

  /**
   * Deletes a listener from the registration bank.
   *
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */
  deleteListener: function (id, registrationName) {
    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
    if (PluginModule && PluginModule.willDeleteListener) {
      PluginModule.willDeleteListener(id, registrationName);
    }

    var bankForRegistrationName = listenerBank[registrationName];
    // TODO: This should never be null -- when is it?
    if (bankForRegistrationName) {
      delete bankForRegistrationName[id];
    }
  },

  /**
   * Deletes all listeners for the DOM element with the supplied ID.
   *
   * @param {string} id ID of the DOM element.
   */
  deleteAllListeners: function (id) {
    for (var registrationName in listenerBank) {
      if (!listenerBank[registrationName][id]) {
        continue;
      }

      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
      if (PluginModule && PluginModule.willDeleteListener) {
        PluginModule.willDeleteListener(id, registrationName);
      }

      delete listenerBank[registrationName][id];
    }
  },

  /**
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @internal
   */
  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
    var events;
    var plugins = EventPluginRegistry.plugins;
    for (var i = 0; i < plugins.length; i++) {
      // Not every plugin in the ordering may be loaded at runtime.
      var possiblePlugin = plugins[i];
      if (possiblePlugin) {
        var extractedEvents = possiblePlugin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
        if (extractedEvents) {
          events = accumulateInto(events, extractedEvents);
        }
      }
    }
    return events;
  },

  /**
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   *
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */
  enqueueEvents: function (events) {
    if (events) {
      eventQueue = accumulateInto(eventQueue, events);
    }
  },

  /**
   * Dispatches all synthetic events on the event queue.
   *
   * @internal
   */
  processEventQueue: function (simulated) {
    // Set `eventQueue` to null before processing it so that we can tell if more
    // events get enqueued while processing.
    var processingEventQueue = eventQueue;
    eventQueue = null;
    if (simulated) {
      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
    } else {
      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
    }
    !!eventQueue ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing ' + 'an event queue. Support for this has not yet been implemented.') : invariant(false) : undefined;
    // This would be a good time to rethrow if any of the event handlers threw.
    ReactErrorUtils.rethrowCaughtError();
  },

  /**
   * These are needed for tests only. Do not use!
   */
  __purge: function () {
    listenerBank = {};
  },

  __getListenerBank: function () {
    return listenerBank;
  }

};

module.exports = EventPluginHub;
}).call(this,require('_process'))
},{"./EventPluginRegistry":19,"./EventPluginUtils":20,"./ReactErrorUtils":59,"./accumulateInto":105,"./forEachAccumulated":113,"_process":2,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],19:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginRegistry
 * @typechecks static-only
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 * Injectable ordering of event plugins.
 */
var EventPluginOrder = null;

/**
 * Injectable mapping from names to event plugin modules.
 */
var namesToPlugins = {};

/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function recomputePluginOrdering() {
  if (!EventPluginOrder) {
    // Wait until an `EventPluginOrder` is injected.
    return;
  }
  for (var pluginName in namesToPlugins) {
    var PluginModule = namesToPlugins[pluginName];
    var pluginIndex = EventPluginOrder.indexOf(pluginName);
    !(pluginIndex > -1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 'the plugin ordering, `%s`.', pluginName) : invariant(false) : undefined;
    if (EventPluginRegistry.plugins[pluginIndex]) {
      continue;
    }
    !PluginModule.extractEvents ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 'method, but `%s` does not.', pluginName) : invariant(false) : undefined;
    EventPluginRegistry.plugins[pluginIndex] = PluginModule;
    var publishedEvents = PluginModule.eventTypes;
    for (var eventName in publishedEvents) {
      !publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : invariant(false) : undefined;
    }
  }
}

/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
  !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'event name, `%s`.', eventName) : invariant(false) : undefined;
  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if (phasedRegistrationNames) {
    for (var phaseName in phasedRegistrationNames) {
      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
      }
    }
    return true;
  } else if (dispatchConfig.registrationName) {
    publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
    return true;
  }
  return false;
}

/**
 * Publishes a registration name that is used to identify dispatched events and
 * can be used with `EventPluginHub.putListener` to register listeners.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
function publishRegistrationName(registrationName, PluginModule, eventName) {
  !!EventPluginRegistry.registrationNameModules[registrationName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName) : invariant(false) : undefined;
  EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
  EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */
var EventPluginRegistry = {

  /**
   * Ordered list of injected plugins.
   */
  plugins: [],

  /**
   * Mapping from event name to dispatch config
   */
  eventNameDispatchConfigs: {},

  /**
   * Mapping from registration name to plugin module
   */
  registrationNameModules: {},

  /**
   * Mapping from registration name to event name
   */
  registrationNameDependencies: {},

  /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */
  injectEventPluginOrder: function (InjectedEventPluginOrder) {
    !!EventPluginOrder ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 'once. You are likely trying to load more than one copy of React.') : invariant(false) : undefined;
    // Clone the ordering so it cannot be dynamically mutated.
    EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
    recomputePluginOrdering();
  },

  /**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */
  injectEventPluginsByName: function (injectedNamesToPlugins) {
    var isOrderingDirty = false;
    for (var pluginName in injectedNamesToPlugins) {
      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
        continue;
      }
      var PluginModule = injectedNamesToPlugins[pluginName];
      if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
        !!namesToPlugins[pluginName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins ' + 'using the same name, `%s`.', pluginName) : invariant(false) : undefined;
        namesToPlugins[pluginName] = PluginModule;
        isOrderingDirty = true;
      }
    }
    if (isOrderingDirty) {
      recomputePluginOrdering();
    }
  },

  /**
   * Looks up the plugin for the supplied event.
   *
   * @param {object} event A synthetic event.
   * @return {?object} The plugin that created the supplied event.
   * @internal
   */
  getPluginModuleForEvent: function (event) {
    var dispatchConfig = event.dispatchConfig;
    if (dispatchConfig.registrationName) {
      return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
    }
    for (var phase in dispatchConfig.phasedRegistrationNames) {
      if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
        continue;
      }
      var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
      if (PluginModule) {
        return PluginModule;
      }
    }
    return null;
  },

  /**
   * Exposed for unit testing.
   * @private
   */
  _resetEventPlugins: function () {
    EventPluginOrder = null;
    for (var pluginName in namesToPlugins) {
      if (namesToPlugins.hasOwnProperty(pluginName)) {
        delete namesToPlugins[pluginName];
      }
    }
    EventPluginRegistry.plugins.length = 0;

    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
    for (var eventName in eventNameDispatchConfigs) {
      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
        delete eventNameDispatchConfigs[eventName];
      }
    }

    var registrationNameModules = EventPluginRegistry.registrationNameModules;
    for (var registrationName in registrationNameModules) {
      if (registrationNameModules.hasOwnProperty(registrationName)) {
        delete registrationNameModules[registrationName];
      }
    }
  }

};

module.exports = EventPluginRegistry;
}).call(this,require('_process'))
},{"_process":2,"fbjs/lib/invariant":147}],20:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginUtils
 */

'use strict';

var EventConstants = require('./EventConstants');
var ReactErrorUtils = require('./ReactErrorUtils');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

/**
 * Injected dependencies:
 */

/**
 * - `Mount`: [required] Module that can convert between React dom IDs and
 *   actual node references.
 */
var injection = {
  Mount: null,
  injectMount: function (InjectedMount) {
    injection.Mount = InjectedMount;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(InjectedMount && InjectedMount.getNode && InjectedMount.getID, 'EventPluginUtils.injection.injectMount(...): Injected Mount ' + 'module is missing getNode or getID.') : undefined;
    }
  }
};

var topLevelTypes = EventConstants.topLevelTypes;

function isEndish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
}

function isMoveish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
}
function isStartish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
}

var validateEventDispatches;
if (process.env.NODE_ENV !== 'production') {
  validateEventDispatches = function (event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchIDs = event._dispatchIDs;

    var listenersIsArr = Array.isArray(dispatchListeners);
    var idsIsArr = Array.isArray(dispatchIDs);
    var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;

    process.env.NODE_ENV !== 'production' ? warning(idsIsArr === listenersIsArr && IDsLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : undefined;
  };
}

/**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {string} domID DOM id to pass to the callback.
 */
function executeDispatch(event, simulated, listener, domID) {
  var type = event.type || 'unknown-event';
  event.currentTarget = injection.Mount.getNode(domID);
  if (simulated) {
    ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event, domID);
  } else {
    ReactErrorUtils.invokeGuardedCallback(type, listener, event, domID);
  }
  event.currentTarget = null;
}

/**
 * Standard/simple iteration through an event's collected dispatches.
 */
function executeDispatchesInOrder(event, simulated) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchIDs = event._dispatchIDs;
  if (process.env.NODE_ENV !== 'production') {
    validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and IDs are two parallel arrays that are always in sync.
      executeDispatch(event, simulated, dispatchListeners[i], dispatchIDs[i]);
    }
  } else if (dispatchListeners) {
    executeDispatch(event, simulated, dispatchListeners, dispatchIDs);
  }
  event._dispatchListeners = null;
  event._dispatchIDs = null;
}

/**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return {?string} id of the first dispatch execution who's listener returns
 * true, or null if no listener returned true.
 */
function executeDispatchesInOrderStopAtTrueImpl(event) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchIDs = event._dispatchIDs;
  if (process.env.NODE_ENV !== 'production') {
    validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and IDs are two parallel arrays that are always in sync.
      if (dispatchListeners[i](event, dispatchIDs[i])) {
        return dispatchIDs[i];
      }
    }
  } else if (dispatchListeners) {
    if (dispatchListeners(event, dispatchIDs)) {
      return dispatchIDs;
    }
  }
  return null;
}

/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */
function executeDispatchesInOrderStopAtTrue(event) {
  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
  event._dispatchIDs = null;
  event._dispatchListeners = null;
  return ret;
}

/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */
function executeDirectDispatch(event) {
  if (process.env.NODE_ENV !== 'production') {
    validateEventDispatches(event);
  }
  var dispatchListener = event._dispatchListeners;
  var dispatchID = event._dispatchIDs;
  !!Array.isArray(dispatchListener) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : invariant(false) : undefined;
  var res = dispatchListener ? dispatchListener(event, dispatchID) : null;
  event._dispatchListeners = null;
  event._dispatchIDs = null;
  return res;
}

/**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */
function hasDispatches(event) {
  return !!event._dispatchListeners;
}

/**
 * General utilities that are useful in creating custom Event Plugins.
 */
var EventPluginUtils = {
  isEndish: isEndish,
  isMoveish: isMoveish,
  isStartish: isStartish,

  executeDirectDispatch: executeDirectDispatch,
  executeDispatchesInOrder: executeDispatchesInOrder,
  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
  hasDispatches: hasDispatches,

  getNode: function (id) {
    return injection.Mount.getNode(id);
  },
  getID: function (node) {
    return injection.Mount.getID(node);
  },

  injection: injection
};

module.exports = EventPluginUtils;
}).call(this,require('_process'))
},{"./EventConstants":17,"./ReactErrorUtils":59,"_process":2,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],21:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPropagators
 */

'use strict';

var EventConstants = require('./EventConstants');
var EventPluginHub = require('./EventPluginHub');

var warning = require('fbjs/lib/warning');

var accumulateInto = require('./accumulateInto');
var forEachAccumulated = require('./forEachAccumulated');

var PropagationPhases = EventConstants.PropagationPhases;
var getListener = EventPluginHub.getListener;

/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
function listenerAtPhase(id, event, propagationPhase) {
  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
  return getListener(id, registrationName);
}

/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */
function accumulateDirectionalDispatches(domID, upwards, event) {
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? warning(domID, 'Dispatching id must not be null') : undefined;
  }
  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
  var listener = listenerAtPhase(domID, event, phase);
  if (listener) {
    event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
    event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
  }
}

/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */
function accumulateTwoPhaseDispatchesSingle(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker, accumulateDirectionalDispatches, event);
  }
}

/**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */
function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    EventPluginHub.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(event.dispatchMarker, accumulateDirectionalDispatches, event);
  }
}

/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */
function accumulateDispatches(id, ignoredDirection, event) {
  if (event && event.dispatchConfig.registrationName) {
    var registrationName = event.dispatchConfig.registrationName;
    var listener = getListener(id, registrationName);
    if (listener) {
      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
      event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
    }
  }
}

/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */
function accumulateDirectDispatchesSingle(event) {
  if (event && event.dispatchConfig.registrationName) {
    accumulateDispatches(event.dispatchMarker, null, event);
  }
}

function accumulateTwoPhaseDispatches(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
}

function accumulateTwoPhaseDispatchesSkipTarget(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
}

function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
  EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(fromID, toID, accumulateDispatches, leave, enter);
}

function accumulateDirectDispatches(events) {
  forEachAccumulated(events, accumulateDirectDispatchesSingle);
}

/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing event a
 * single one.
 *
 * @constructor EventPropagators
 */
var EventPropagators = {
  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
  accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
  accumulateDirectDispatches: accumulateDirectDispatches,
  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
};

module.exports = EventPropagators;
}).call(this,require('_process'))
},{"./EventConstants":17,"./EventPluginHub":18,"./accumulateInto":105,"./forEachAccumulated":113,"_process":2,"fbjs/lib/warning":158}],22:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FallbackCompositionState
 * @typechecks static-only
 */

'use strict';

var PooledClass = require('./PooledClass');

var assign = require('./Object.assign');
var getTextContentAccessor = require('./getTextContentAccessor');

/**
 * This helper class stores information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 * @param {DOMEventTarget} root
 */
function FallbackCompositionState(root) {
  this._root = root;
  this._startText = this.getText();
  this._fallbackText = null;
}

assign(FallbackCompositionState.prototype, {
  destructor: function () {
    this._root = null;
    this._startText = null;
    this._fallbackText = null;
  },

  /**
   * Get current text of input.
   *
   * @return {string}
   */
  getText: function () {
    if ('value' in this._root) {
      return this._root.value;
    }
    return this._root[getTextContentAccessor()];
  },

  /**
   * Determine the differing substring between the initially stored
   * text content and the current content.
   *
   * @return {string}
   */
  getData: function () {
    if (this._fallbackText) {
      return this._fallbackText;
    }

    var start;
    var startValue = this._startText;
    var startLength = startValue.length;
    var end;
    var endValue = this.getText();
    var endLength = endValue.length;

    for (start = 0; start < startLength; start++) {
      if (startValue[start] !== endValue[start]) {
        break;
      }
    }

    var minEnd = startLength - start;
    for (end = 1; end <= minEnd; end++) {
      if (startValue[startLength - end] !== endValue[endLength - end]) {
        break;
      }
    }

    var sliceTail = end > 1 ? 1 - end : undefined;
    this._fallbackText = endValue.slice(start, sliceTail);
    return this._fallbackText;
  }
});

PooledClass.addPoolingTo(FallbackCompositionState);

module.exports = FallbackCompositionState;
},{"./Object.assign":25,"./PooledClass":26,"./getTextContentAccessor":120}],23:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule HTMLDOMPropertyConfig
 */

'use strict';

var DOMProperty = require('./DOMProperty');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

var hasSVG;
if (ExecutionEnvironment.canUseDOM) {
  var implementation = document.implementation;
  hasSVG = implementation && implementation.hasFeature && implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');
}

var HTMLDOMPropertyConfig = {
  isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
  Properties: {
    /**
     * Standard Properties
     */
    accept: null,
    acceptCharset: null,
    accessKey: null,
    action: null,
    allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
    allowTransparency: MUST_USE_ATTRIBUTE,
    alt: null,
    async: HAS_BOOLEAN_VALUE,
    autoComplete: null,
    // autoFocus is polyfilled/normalized by AutoFocusUtils
    // autoFocus: HAS_BOOLEAN_VALUE,
    autoPlay: HAS_BOOLEAN_VALUE,
    capture: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
    cellPadding: null,
    cellSpacing: null,
    charSet: MUST_USE_ATTRIBUTE,
    challenge: MUST_USE_ATTRIBUTE,
    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    classID: MUST_USE_ATTRIBUTE,
    // To set className on SVG elements, it's necessary to use .setAttribute;
    // this works on HTML elements too in all browsers except IE8. Conveniently,
    // IE8 doesn't support SVG and so we can simply use the attribute in
    // browsers that support SVG and the property in browsers that don't,
    // regardless of whether the element is HTML or SVG.
    className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
    cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
    colSpan: null,
    content: null,
    contentEditable: null,
    contextMenu: MUST_USE_ATTRIBUTE,
    controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    coords: null,
    crossOrigin: null,
    data: null, // For `<object />` acts as `src`.
    dateTime: MUST_USE_ATTRIBUTE,
    'default': HAS_BOOLEAN_VALUE,
    defer: HAS_BOOLEAN_VALUE,
    dir: null,
    disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
    download: HAS_OVERLOADED_BOOLEAN_VALUE,
    draggable: null,
    encType: null,
    form: MUST_USE_ATTRIBUTE,
    formAction: MUST_USE_ATTRIBUTE,
    formEncType: MUST_USE_ATTRIBUTE,
    formMethod: MUST_USE_ATTRIBUTE,
    formNoValidate: HAS_BOOLEAN_VALUE,
    formTarget: MUST_USE_ATTRIBUTE,
    frameBorder: MUST_USE_ATTRIBUTE,
    headers: null,
    height: MUST_USE_ATTRIBUTE,
    hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
    high: null,
    href: null,
    hrefLang: null,
    htmlFor: null,
    httpEquiv: null,
    icon: null,
    id: MUST_USE_PROPERTY,
    inputMode: MUST_USE_ATTRIBUTE,
    integrity: null,
    is: MUST_USE_ATTRIBUTE,
    keyParams: MUST_USE_ATTRIBUTE,
    keyType: MUST_USE_ATTRIBUTE,
    kind: null,
    label: null,
    lang: null,
    list: MUST_USE_ATTRIBUTE,
    loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    low: null,
    manifest: MUST_USE_ATTRIBUTE,
    marginHeight: null,
    marginWidth: null,
    max: null,
    maxLength: MUST_USE_ATTRIBUTE,
    media: MUST_USE_ATTRIBUTE,
    mediaGroup: null,
    method: null,
    min: null,
    minLength: MUST_USE_ATTRIBUTE,
    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    name: null,
    nonce: MUST_USE_ATTRIBUTE,
    noValidate: HAS_BOOLEAN_VALUE,
    open: HAS_BOOLEAN_VALUE,
    optimum: null,
    pattern: null,
    placeholder: null,
    poster: null,
    preload: null,
    radioGroup: null,
    readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    rel: null,
    required: HAS_BOOLEAN_VALUE,
    reversed: HAS_BOOLEAN_VALUE,
    role: MUST_USE_ATTRIBUTE,
    rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
    rowSpan: null,
    sandbox: null,
    scope: null,
    scoped: HAS_BOOLEAN_VALUE,
    scrolling: null,
    seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    shape: null,
    size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
    sizes: MUST_USE_ATTRIBUTE,
    span: HAS_POSITIVE_NUMERIC_VALUE,
    spellCheck: null,
    src: null,
    srcDoc: MUST_USE_PROPERTY,
    srcLang: null,
    srcSet: MUST_USE_ATTRIBUTE,
    start: HAS_NUMERIC_VALUE,
    step: null,
    style: null,
    summary: null,
    tabIndex: null,
    target: null,
    title: null,
    type: null,
    useMap: null,
    value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
    width: MUST_USE_ATTRIBUTE,
    wmode: MUST_USE_ATTRIBUTE,
    wrap: null,

    /**
     * RDFa Properties
     */
    about: MUST_USE_ATTRIBUTE,
    datatype: MUST_USE_ATTRIBUTE,
    inlist: MUST_USE_ATTRIBUTE,
    prefix: MUST_USE_ATTRIBUTE,
    // property is also supported for OpenGraph in meta tags.
    property: MUST_USE_ATTRIBUTE,
    resource: MUST_USE_ATTRIBUTE,
    'typeof': MUST_USE_ATTRIBUTE,
    vocab: MUST_USE_ATTRIBUTE,

    /**
     * Non-standard Properties
     */
    // autoCapitalize and autoCorrect are supported in Mobile Safari for
    // keyboard hints.
    autoCapitalize: MUST_USE_ATTRIBUTE,
    autoCorrect: MUST_USE_ATTRIBUTE,
    // autoSave allows WebKit/Blink to persist values of input fields on page reloads
    autoSave: null,
    // color is for Safari mask-icon link
    color: null,
    // itemProp, itemScope, itemType are for
    // Microdata support. See http://schema.org/docs/gs.html
    itemProp: MUST_USE_ATTRIBUTE,
    itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
    itemType: MUST_USE_ATTRIBUTE,
    // itemID and itemRef are for Microdata support as well but
    // only specified in the the WHATWG spec document. See
    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
    itemID: MUST_USE_ATTRIBUTE,
    itemRef: MUST_USE_ATTRIBUTE,
    // results show looking glass icon and recent searches on input
    // search fields in WebKit/Blink
    results: null,
    // IE-only attribute that specifies security restrictions on an iframe
    // as an alternative to the sandbox attribute on IE<10
    security: MUST_USE_ATTRIBUTE,
    // IE-only attribute that controls focus behavior
    unselectable: MUST_USE_ATTRIBUTE
  },
  DOMAttributeNames: {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
  },
  DOMPropertyNames: {
    autoComplete: 'autocomplete',
    autoFocus: 'autofocus',
    autoPlay: 'autoplay',
    autoSave: 'autosave',
    // `encoding` is equivalent to `enctype`, IE8 lacks an `enctype` setter.
    // http://www.w3.org/TR/html5/forms.html#dom-fs-encoding
    encType: 'encoding',
    hrefLang: 'hreflang',
    radioGroup: 'radiogroup',
    spellCheck: 'spellcheck',
    srcDoc: 'srcdoc',
    srcSet: 'srcset'
  }
};

module.exports = HTMLDOMPropertyConfig;
},{"./DOMProperty":12,"fbjs/lib/ExecutionEnvironment":133}],24:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LinkedValueUtils
 * @typechecks static-only
 */

'use strict';

var ReactPropTypes = require('./ReactPropTypes');
var ReactPropTypeLocations = require('./ReactPropTypeLocations');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var hasReadOnlyValue = {
  'button': true,
  'checkbox': true,
  'image': true,
  'hidden': true,
  'radio': true,
  'reset': true,
  'submit': true
};

function _assertSingleLink(inputProps) {
  !(inputProps.checkedLink == null || inputProps.valueLink == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a valueLink. If you want to use ' + 'checkedLink, you probably don\'t want to use valueLink and vice versa.') : invariant(false) : undefined;
}
function _assertValueLink(inputProps) {
  _assertSingleLink(inputProps);
  !(inputProps.value == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a valueLink and a value or onChange event. If you want ' + 'to use value or onChange, you probably don\'t want to use valueLink.') : invariant(false) : undefined;
}

function _assertCheckedLink(inputProps) {
  _assertSingleLink(inputProps);
  !(inputProps.checked == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a checked property or onChange event. ' + 'If you want to use checked or onChange, you probably don\'t want to ' + 'use checkedLink') : invariant(false) : undefined;
}

var propTypes = {
  value: function (props, propName, componentName) {
    if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
      return null;
    }
    return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
  },
  checked: function (props, propName, componentName) {
    if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
      return null;
    }
    return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
  },
  onChange: ReactPropTypes.func
};

var loggedTypeFailures = {};
function getDeclarationErrorAddendum(owner) {
  if (owner) {
    var name = owner.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

/**
 * Provide a linked `value` attribute for controlled forms. You should not use
 * this outside of the ReactDOM controlled form components.
 */
var LinkedValueUtils = {
  checkPropTypes: function (tagName, props, owner) {
    for (var propName in propTypes) {
      if (propTypes.hasOwnProperty(propName)) {
        var error = propTypes[propName](props, propName, tagName, ReactPropTypeLocations.prop);
      }
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var addendum = getDeclarationErrorAddendum(owner);
        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed form propType: %s%s', error.message, addendum) : undefined;
      }
    }
  },

  /**
   * @param {object} inputProps Props for form component
   * @return {*} current value of the input either from value prop or link.
   */
  getValue: function (inputProps) {
    if (inputProps.valueLink) {
      _assertValueLink(inputProps);
      return inputProps.valueLink.value;
    }
    return inputProps.value;
  },

  /**
   * @param {object} inputProps Props for form component
   * @return {*} current checked status of the input either from checked prop
   *             or link.
   */
  getChecked: function (inputProps) {
    if (inputProps.checkedLink) {
      _assertCheckedLink(inputProps);
      return inputProps.checkedLink.value;
    }
    return inputProps.checked;
  },

  /**
   * @param {object} inputProps Props for form component
   * @param {SyntheticEvent} event change event to handle
   */
  executeOnChange: function (inputProps, event) {
    if (inputProps.valueLink) {
      _assertValueLink(inputProps);
      return inputProps.valueLink.requestChange(event.target.value);
    } else if (inputProps.checkedLink) {
      _assertCheckedLink(inputProps);
      return inputProps.checkedLink.requestChange(event.target.checked);
    } else if (inputProps.onChange) {
      return inputProps.onChange.call(undefined, event);
    }
  }
};

module.exports = LinkedValueUtils;
}).call(this,require('_process'))
},{"./ReactPropTypeLocations":76,"./ReactPropTypes":77,"_process":2,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],25:[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

'use strict';

function assign(target, sources) {
  if (target == null) {
    throw new TypeError('Object.assign target cannot be null or undefined');
  }

  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }

    var from = Object(nextSource);

    // We don't currently support accessors nor proxies. Therefore this
    // copy cannot throw. If we ever supported this then we must handle
    // exceptions and side-effects. We don't support symbols so they won't
    // be transferred.

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }

  return to;
}

module.exports = assign;
},{}],26:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PooledClass
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4, a5);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4, a5);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : undefined;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances (optional).
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler,
  fiveArgumentPooler: fiveArgumentPooler
};

module.exports = PooledClass;
}).call(this,require('_process'))
},{"_process":2,"fbjs/lib/invariant":147}],27:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule React
 */

'use strict';

var ReactDOM = require('./ReactDOM');
var ReactDOMServer = require('./ReactDOMServer');
var ReactIsomorphic = require('./ReactIsomorphic');

var assign = require('./Object.assign');
var deprecated = require('./deprecated');

// `version` will be added here by ReactIsomorphic.
var React = {};

assign(React, ReactIsomorphic);

assign(React, {
  // ReactDOM
  findDOMNode: deprecated('findDOMNode', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.findDOMNode),
  render: deprecated('render', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.render),
  unmountComponentAtNode: deprecated('unmountComponentAtNode', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.unmountComponentAtNode),

  // ReactDOMServer
  renderToString: deprecated('renderToString', 'ReactDOMServer', 'react-dom/server', ReactDOMServer, ReactDOMServer.renderToString),
  renderToStaticMarkup: deprecated('renderToStaticMarkup', 'ReactDOMServer', 'react-dom/server', ReactDOMServer, ReactDOMServer.renderToStaticMarkup)
});

React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOM;
React.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOMServer;

module.exports = React;
},{"./Object.assign":25,"./ReactDOM":38,"./ReactDOMServer":48,"./ReactIsomorphic":66,"./deprecated":109}],28:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserComponentMixin
 */

'use strict';

var ReactInstanceMap = require('./ReactInstanceMap');

var findDOMNode = require('./findDOMNode');
var warning = require('fbjs/lib/warning');

var didWarnKey = '_getDOMNodeDidWarn';

var ReactBrowserComponentMixin = {
  /**
   * Returns the DOM node rendered by this component.
   *
   * @return {DOMElement} The root node of this component.
   * @final
   * @protected
   */
  getDOMNode: function () {
    process.env.NODE_ENV !== 'production' ? warning(this.constructor[didWarnKey], '%s.getDOMNode(...) is deprecated. Please use ' + 'ReactDOM.findDOMNode(instance) instead.', ReactInstanceMap.get(this).getName() || this.tagName || 'Unknown') : undefined;
    this.constructor[didWarnKey] = true;
    return findDOMNode(this);
  }
};

module.exports = ReactBrowserComponentMixin;
}).call(this,require('_process'))
},{"./ReactInstanceMap":65,"./findDOMNode":111,"_process":2,"fbjs/lib/warning":158}],29:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserEventEmitter
 * @typechecks static-only
 */

'use strict';

var EventConstants = require('./EventConstants');
var EventPluginHub = require('./EventPluginHub');
var EventPluginRegistry = require('./EventPluginRegistry');
var ReactEventEmitterMixin = require('./ReactEventEmitterMixin');
var ReactPerf = require('./ReactPerf');
var ViewportMetrics = require('./ViewportMetrics');

var assign = require('./Object.assign');
var isEventSupported = require('./isEventSupported');

/**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactEventListener, which is injected and can therefore support pluggable
 *    event sources. This is the only work that occurs in the main thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */

var alreadyListeningTo = {};
var isMonitoringScrollValue = false;
var reactTopListenersCounter = 0;

// For events like 'submit' which don't consistently bubble (which we trap at a
// lower node than `document`), binding at `document` would cause duplicate
// events so we don't include them here
var topEventMapping = {
  topAbort: 'abort',
  topBlur: 'blur',
  topCanPlay: 'canplay',
  topCanPlayThrough: 'canplaythrough',
  topChange: 'change',
  topClick: 'click',
  topCompositionEnd: 'compositionend',
  topCompositionStart: 'compositionstart',
  topCompositionUpdate: 'compositionupdate',
  topContextMenu: 'contextmenu',
  topCopy: 'copy',
  topCut: 'cut',
  topDoubleClick: 'dblclick',
  topDrag: 'drag',
  topDragEnd: 'dragend',
  topDragEnter: 'dragenter',
  topDragExit: 'dragexit',
  topDragLeave: 'dragleave',
  topDragOver: 'dragover',
  topDragStart: 'dragstart',
  topDrop: 'drop',
  topDurationChange: 'durationchange',
  topEmptied: 'emptied',
  topEncrypted: 'encrypted',
  topEnded: 'ended',
  topError: 'error',
  topFocus: 'focus',
  topInput: 'input',
  topKeyDown: 'keydown',
  topKeyPress: 'keypress',
  topKeyUp: 'keyup',
  topLoadedData: 'loadeddata',
  topLoadedMetadata: 'loadedmetadata',
  topLoadStart: 'loadstart',
  topMouseDown: 'mousedown',
  topMouseMove: 'mousemove',
  topMouseOut: 'mouseout',
  topMouseOver: 'mouseover',
  topMouseUp: 'mouseup',
  topPaste: 'paste',
  topPause: 'pause',
  topPlay: 'play',
  topPlaying: 'playing',
  topProgress: 'progress',
  topRateChange: 'ratechange',
  topScroll: 'scroll',
  topSeeked: 'seeked',
  topSeeking: 'seeking',
  topSelectionChange: 'selectionchange',
  topStalled: 'stalled',
  topSuspend: 'suspend',
  topTextInput: 'textInput',
  topTimeUpdate: 'timeupdate',
  topTouchCancel: 'touchcancel',
  topTouchEnd: 'touchend',
  topTouchMove: 'touchmove',
  topTouchStart: 'touchstart',
  topVolumeChange: 'volumechange',
  topWaiting: 'waiting',
  topWheel: 'wheel'
};

/**
 * To ensure no conflicts with other potential React instances on the page
 */
var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);

function getListeningForDocument(mountAt) {
  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
  // directly.
  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
    mountAt[topListenersIDKey] = reactTopListenersCounter++;
    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
  }
  return alreadyListeningTo[mountAt[topListenersIDKey]];
}

/**
 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
 * example:
 *
 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
 *
 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
 *
 * @internal
 */
var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {

  /**
   * Injectable event backend
   */
  ReactEventListener: null,

  injection: {
    /**
     * @param {object} ReactEventListener
     */
    injectReactEventListener: function (ReactEventListener) {
      ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
      ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
    }
  },

  /**
   * Sets whether or not any created callbacks should be enabled.
   *
   * @param {boolean} enabled True if callbacks should be enabled.
   */
  setEnabled: function (enabled) {
    if (ReactBrowserEventEmitter.ReactEventListener) {
      ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
    }
  },

  /**
   * @return {boolean} True if callbacks are enabled.
   */
  isEnabled: function () {
    return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
  },

  /**
   * We listen for bubbled touch events on the document object.
   *
   * Firefox v8.01 (and possibly others) exhibited strange behavior when
   * mounting `onmousemove` events at some node that was not the document
   * element. The symptoms were that if your mouse is not moving over something
   * contained within that mount point (for example on the background) the
   * top-level listeners for `onmousemove` won't be called. However, if you
   * register the `mousemove` on the document object, then it will of course
   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
   * top-level listeners to the document object only, at least for these
   * movement types of events and possibly all events.
   *
   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
   *
   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
   * they bubble to document.
   *
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {object} contentDocumentHandle Document which owns the container
   */
  listenTo: function (registrationName, contentDocumentHandle) {
    var mountAt = contentDocumentHandle;
    var isListening = getListeningForDocument(mountAt);
    var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];

    var topLevelTypes = EventConstants.topLevelTypes;
    for (var i = 0; i < dependencies.length; i++) {
      var dependency = dependencies[i];
      if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
        if (dependency === topLevelTypes.topWheel) {
          if (isEventSupported('wheel')) {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'wheel', mountAt);
          } else if (isEventSupported('mousewheel')) {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'mousewheel', mountAt);
          } else {
            // Firefox needs to capture a different mouse scroll event.
            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'DOMMouseScroll', mountAt);
          }
        } else if (dependency === topLevelTypes.topScroll) {

          if (isEventSupported('scroll', true)) {
            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, 'scroll', mountAt);
          } else {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
          }
        } else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {

          if (isEventSupported('focus', true)) {
            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, 'focus', mountAt);
            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, 'blur', mountAt);
          } else if (isEventSupported('focusin')) {
            // IE has `focusin` and `focusout` events which bubble.
            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, 'focusin', mountAt);
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, 'focusout', mountAt);
          }

          // to make sure blur and focus event listeners are only attached once
          isListening[topLevelTypes.topBlur] = true;
          isListening[topLevelTypes.topFocus] = true;
        } else if (topEventMapping.hasOwnProperty(dependency)) {
          ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
        }

        isListening[dependency] = true;
      }
    }
  },

  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
    return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
  },

  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
    return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
  },

  /**
   * Listens to window scroll and resize events. We cache scroll values so that
   * application code can access them without triggering reflows.
   *
   * NOTE: Scroll events do not bubble.
   *
   * @see http://www.quirksmode.org/dom/events/scroll.html
   */
  ensureScrollValueMonitoring: function () {
    if (!isMonitoringScrollValue) {
      var refresh = ViewportMetrics.refreshScrollValues;
      ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
      isMonitoringScrollValue = true;
    }
  },

  eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,

  registrationNameModules: EventPluginHub.registrationNameModules,

  putListener: EventPluginHub.putListener,

  getListener: EventPluginHub.getListener,

  deleteListener: EventPluginHub.deleteListener,

  deleteAllListeners: EventPluginHub.deleteAllListeners

});

ReactPerf.measureMethods(ReactBrowserEventEmitter, 'ReactBrowserEventEmitter', {
  putListener: 'putListener',
  deleteListener: 'deleteListener'
});

module.exports = ReactBrowserEventEmitter;
},{"./EventConstants":17,"./EventPluginHub":18,"./EventPluginRegistry":19,"./Object.assign":25,"./ReactEventEmitterMixin":60,"./ReactPerf":74,"./ViewportMetrics":104,"./isEventSupported":122}],30:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildReconciler
 * @typechecks static-only
 */

'use strict';

var ReactReconciler = require('./ReactReconciler');

var instantiateReactComponent = require('./instantiateReactComponent');
var shouldUpdateReactComponent = require('./shouldUpdateReactComponent');
var traverseAllChildren = require('./traverseAllChildren');
var warning = require('fbjs/lib/warning');

function instantiateChild(childInstances, child, name) {
  // We found a component instance.
  var keyUnique = childInstances[name] === undefined;
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : undefined;
  }
  if (child != null && keyUnique) {
    childInstances[name] = instantiateReactComponent(child, null);
  }
}

/**
 * ReactChildReconciler provides helpers for initializing or updating a set of
 * children. Its output is suitable for passing it onto ReactMultiChild which
 * does diffed reordering and insertion.
 */
var ReactChildReconciler = {
  /**
   * Generates a "mount image" for each of the supplied children. In the case
   * of `ReactDOMComponent`, a mount image is a string of markup.
   *
   * @param {?object} nestedChildNodes Nested child maps.
   * @return {?object} A set of child instances.
   * @internal
   */
  instantiateChildren: function (nestedChildNodes, transaction, context) {
    if (nestedChildNodes == null) {
      return null;
    }
    var childInstances = {};
    traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
    return childInstances;
  },

  /**
   * Updates the rendered children and returns a new set of children.
   *
   * @param {?object} prevChildren Previously initialized set of children.
   * @param {?object} nextChildren Flat child element maps.
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @return {?object} A new set of child instances.
   * @internal
   */
  updateChildren: function (prevChildren, nextChildren, transaction, context) {
    // We currently don't have a way to track moves here but if we use iterators
    // instead of for..in we can zip the iterators and check if an item has
    // moved.
    // TODO: If nothing has changed, return the prevChildren object so that we
    // can quickly bailout if nothing has changed.
    if (!nextChildren && !prevChildren) {
      return null;
    }
    var name;
    for (name in nextChildren) {
      if (!nextChildren.hasOwnProperty(name)) {
        continue;
      }
      var prevChild = prevChildren && prevChildren[name];
      var prevElement = prevChild && prevChild._currentElement;
      var nextElement = nextChildren[name];
      if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
        ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
        nextChildren[name] = prevChild;
      } else {
        if (prevChild) {
          ReactReconciler.unmountComponent(prevChild, name);
        }
        // The child must be instantiated before it's mounted.
        var nextChildInstance = instantiateReactComponent(nextElement, null);
        nextChildren[name] = nextChildInstance;
      }
    }
    // Unmount children that are no longer present.
    for (name in prevChildren) {
      if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
        ReactReconciler.unmountComponent(prevChildren[name]);
      }
    }
    return nextChildren;
  },

  /**
   * Unmounts all rendered children. This should be used to clean up children
   * when this component is unmounted.
   *
   * @param {?object} renderedChildren Previously initialized set of children.
   * @internal
   */
  unmountChildren: function (renderedChildren) {
    for (var name in renderedChildren) {
      if (renderedChildren.hasOwnProperty(name)) {
        var renderedChild = renderedChildren[name];
        ReactReconciler.unmountComponent(renderedChild);
      }
    }
  }

};

module.exports = ReactChildReconciler;
}).call(this,require('_process'))
},{"./ReactReconciler":79,"./instantiateReactComponent":121,"./shouldUpdateReactComponent":129,"./traverseAllChildren":130,"_process":2,"fbjs/lib/warning":158}],31:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildren
 */

'use strict';

var PooledClass = require('./PooledClass');
var ReactElement = require('./ReactElement');

var emptyFunction = require('fbjs/lib/emptyFunction');
var traverseAllChildren = require('./traverseAllChildren');

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/(?!\/)/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '//');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func;
  var context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result;
  var keyPrefix = bookKeeping.keyPrefix;
  var func = bookKeeping.func;
  var context = bookKeeping.context;

  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild !== child ? escapeUserProvidedKey(mappedChild.key || '') + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

module.exports = ReactChildren;
},{"./PooledClass":26,"./ReactElement":55,"./traverseAllChildren":130,"fbjs/lib/emptyFunction":139}],32:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactClass
 */

'use strict';

var ReactComponent = require('./ReactComponent');
var ReactElement = require('./ReactElement');
var ReactPropTypeLocations = require('./ReactPropTypeLocations');
var ReactPropTypeLocationNames = require('./ReactPropTypeLocationNames');
var ReactNoopUpdateQueue = require('./ReactNoopUpdateQueue');

var assign = require('./Object.assign');
var emptyObject = require('fbjs/lib/emptyObject');
var invariant = require('fbjs/lib/invariant');
var keyMirror = require('fbjs/lib/keyMirror');
var keyOf = require('fbjs/lib/keyOf');
var warning = require('fbjs/lib/warning');

var MIXINS_KEY = keyOf({ mixins: null });

/**
 * Policies that describe methods in `ReactClassInterface`.
 */
var SpecPolicy = keyMirror({
  /**
   * These methods may be defined only once by the class specification or mixin.
   */
  DEFINE_ONCE: null,
  /**
   * These methods may be defined by both the class specification and mixins.
   * Subsequent definitions will be chained. These methods must return void.
   */
  DEFINE_MANY: null,
  /**
   * These methods are overriding the base class.
   */
  OVERRIDE_BASE: null,
  /**
   * These methods are similar to DEFINE_MANY, except we assume they return
   * objects. We try to merge the keys of the return values of all the mixed in
   * functions. If there is a key conflict we throw.
   */
  DEFINE_MANY_MERGED: null
});

var injectedMixins = [];

var warnedSetProps = false;
function warnSetProps() {
  if (!warnedSetProps) {
    warnedSetProps = true;
    process.env.NODE_ENV !== 'production' ? warning(false, 'setProps(...) and replaceProps(...) are deprecated. ' + 'Instead, call render again at the top level.') : undefined;
  }
}

/**
 * Composite components are higher-level components that compose other composite
 * or native components.
 *
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will be available on the prototype.
 *
 * @interface ReactClassInterface
 * @internal
 */
var ReactClassInterface = {

  /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */
  mixins: SpecPolicy.DEFINE_MANY,

  /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */
  statics: SpecPolicy.DEFINE_MANY,

  /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */
  propTypes: SpecPolicy.DEFINE_MANY,

  /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */
  contextTypes: SpecPolicy.DEFINE_MANY,

  /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */
  childContextTypes: SpecPolicy.DEFINE_MANY,

  // ==== Definition methods ====

  /**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */
  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

  /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */
  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

  /**
   * @return {object}
   * @optional
   */
  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

  /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @nosideeffects
   * @required
   */
  render: SpecPolicy.DEFINE_ONCE,

  // ==== Delegate methods ====

  /**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */
  componentWillMount: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidMount: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */
  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */
  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

  /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */
  componentWillUpdate: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidUpdate: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */
  componentWillUnmount: SpecPolicy.DEFINE_MANY,

  // ==== Advanced methods ====

  /**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */
  updateComponent: SpecPolicy.OVERRIDE_BASE

};

/**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */
var RESERVED_SPEC_KEYS = {
  displayName: function (Constructor, displayName) {
    Constructor.displayName = displayName;
  },
  mixins: function (Constructor, mixins) {
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        mixSpecIntoComponent(Constructor, mixins[i]);
      }
    }
  },
  childContextTypes: function (Constructor, childContextTypes) {
    if (process.env.NODE_ENV !== 'production') {
      validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
    }
    Constructor.childContextTypes = assign({}, Constructor.childContextTypes, childContextTypes);
  },
  contextTypes: function (Constructor, contextTypes) {
    if (process.env.NODE_ENV !== 'production') {
      validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
    }
    Constructor.contextTypes = assign({}, Constructor.contextTypes, contextTypes);
  },
  /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */
  getDefaultProps: function (Constructor, getDefaultProps) {
    if (Constructor.getDefaultProps) {
      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
    } else {
      Constructor.getDefaultProps = getDefaultProps;
    }
  },
  propTypes: function (Constructor, propTypes) {
    if (process.env.NODE_ENV !== 'production') {
      validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
    }
    Constructor.propTypes = assign({}, Constructor.propTypes, propTypes);
  },
  statics: function (Constructor, statics) {
    mixStaticSpecIntoComponent(Constructor, statics);
  },
  autobind: function () {} };

// noop
function validateTypeDef(Constructor, typeDef, location) {
  for (var propName in typeDef) {
    if (typeDef.hasOwnProperty(propName)) {
      // use a warning instead of an invariant so components
      // don't show up in prod but not in __DEV__
      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : undefined;
    }
  }
}

function validateMethodOverride(proto, name) {
  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

  // Disallow overriding of base class methods unless explicitly allowed.
  if (ReactClassMixin.hasOwnProperty(name)) {
    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(false) : undefined;
  }

  // Disallow defining methods more than once unless explicitly allowed.
  if (proto.hasOwnProperty(name)) {
    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(false) : undefined;
  }
}

/**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classses.
 */
function mixSpecIntoComponent(Constructor, spec) {
  if (!spec) {
    return;
  }

  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component class as a mixin. Instead, just use a regular object.') : invariant(false) : undefined;
  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(false) : undefined;

  var proto = Constructor.prototype;

  // By handling mixins before any other properties, we ensure the same
  // chaining order is applied to methods with DEFINE_MANY policy, whether
  // mixins are listed before or after these methods in the spec.
  if (spec.hasOwnProperty(MIXINS_KEY)) {
    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
  }

  for (var name in spec) {
    if (!spec.hasOwnProperty(name)) {
      continue;
    }

    if (name === MIXINS_KEY) {
      // We have already handled mixins in a special case above.
      continue;
    }

    var property = spec[name];
    validateMethodOverride(proto, name);

    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
      RESERVED_SPEC_KEYS[name](Constructor, property);
    } else {
      // Setup methods on prototype:
      // The following member methods should not be automatically bound:
      // 1. Expected ReactClass methods (in the "interface").
      // 2. Overridden methods (that were mixed in).
      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
      var isAlreadyDefined = proto.hasOwnProperty(name);
      var isFunction = typeof property === 'function';
      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

      if (shouldAutoBind) {
        if (!proto.__reactAutoBindMap) {
          proto.__reactAutoBindMap = {};
        }
        proto.__reactAutoBindMap[name] = property;
        proto[name] = property;
      } else {
        if (isAlreadyDefined) {
          var specPolicy = ReactClassInterface[name];

          // These cases should already be caught by validateMethodOverride.
          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(false) : undefined;

          // For methods which are defined more than once, call the existing
          // methods before calling the new property, merging if appropriate.
          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
            proto[name] = createMergedResultFunction(proto[name], property);
          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
            proto[name] = createChainedFunction(proto[name], property);
          }
        } else {
          proto[name] = property;
          if (process.env.NODE_ENV !== 'production') {
            // Add verbose displayName to the function, which helps when looking
            // at profiling tools.
            if (typeof property === 'function' && spec.displayName) {
              proto[name].displayName = spec.displayName + '_' + name;
            }
          }
        }
      }
    }
  }
}

function mixStaticSpecIntoComponent(Constructor, statics) {
  if (!statics) {
    return;
  }
  for (var name in statics) {
    var property = statics[name];
    if (!statics.hasOwnProperty(name)) {
      continue;
    }

    var isReserved = (name in RESERVED_SPEC_KEYS);
    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(false) : undefined;

    var isInherited = (name in Constructor);
    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(false) : undefined;
    Constructor[name] = property;
  }
}

/**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */
function mergeIntoWithNoDuplicateKeys(one, two) {
  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(false) : undefined;

  for (var key in two) {
    if (two.hasOwnProperty(key)) {
      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(false) : undefined;
      one[key] = two[key];
    }
  }
  return one;
}

/**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createMergedResultFunction(one, two) {
  return function mergedResult() {
    var a = one.apply(this, arguments);
    var b = two.apply(this, arguments);
    if (a == null) {
      return b;
    } else if (b == null) {
      return a;
    }
    var c = {};
    mergeIntoWithNoDuplicateKeys(c, a);
    mergeIntoWithNoDuplicateKeys(c, b);
    return c;
  };
}

/**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createChainedFunction(one, two) {
  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);
  };
}

/**
 * Binds a method to the component.
 *
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */
function bindAutoBindMethod(component, method) {
  var boundMethod = method.bind(component);
  if (process.env.NODE_ENV !== 'production') {
    boundMethod.__reactBoundContext = component;
    boundMethod.__reactBoundMethod = method;
    boundMethod.__reactBoundArguments = null;
    var componentName = component.constructor.displayName;
    var _bind = boundMethod.bind;
    /* eslint-disable block-scoped-var, no-undef */
    boundMethod.bind = function (newThis) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // User is trying to bind() an autobound method; we effectively will
      // ignore the value of "this" that the user is trying to use, so
      // let's warn.
      if (newThis !== component && newThis !== null) {
        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : undefined;
      } else if (!args.length) {
        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : undefined;
        return boundMethod;
      }
      var reboundMethod = _bind.apply(boundMethod, arguments);
      reboundMethod.__reactBoundContext = component;
      reboundMethod.__reactBoundMethod = method;
      reboundMethod.__reactBoundArguments = args;
      return reboundMethod;
      /* eslint-enable */
    };
  }
  return boundMethod;
}

/**
 * Binds all auto-bound methods in a component.
 *
 * @param {object} component Component whose method is going to be bound.
 */
function bindAutoBindMethods(component) {
  for (var autoBindKey in component.__reactAutoBindMap) {
    if (component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
      var method = component.__reactAutoBindMap[autoBindKey];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }
}

/**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */
var ReactClassMixin = {

  /**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */
  replaceState: function (newState, callback) {
    this.updater.enqueueReplaceState(this, newState);
    if (callback) {
      this.updater.enqueueCallback(this, callback);
    }
  },

  /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function () {
    return this.updater.isMounted(this);
  },

  /**
   * Sets a subset of the props.
   *
   * @param {object} partialProps Subset of the next props.
   * @param {?function} callback Called after props are updated.
   * @final
   * @public
   * @deprecated
   */
  setProps: function (partialProps, callback) {
    if (process.env.NODE_ENV !== 'production') {
      warnSetProps();
    }
    this.updater.enqueueSetProps(this, partialProps);
    if (callback) {
      this.updater.enqueueCallback(this, callback);
    }
  },

  /**
   * Replace all the props.
   *
   * @param {object} newProps Subset of the next props.
   * @param {?function} callback Called after props are updated.
   * @final
   * @public
   * @deprecated
   */
  replaceProps: function (newProps, callback) {
    if (process.env.NODE_ENV !== 'production') {
      warnSetProps();
    }
    this.updater.enqueueReplaceProps(this, newProps);
    if (callback) {
      this.updater.enqueueCallback(this, callback);
    }
  }
};

var ReactClassComponent = function () {};
assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

/**
 * Module for creating composite components.
 *
 * @class ReactClass
 */
var ReactClass = {

  /**
   * Creates a composite component class given a class specification.
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  createClass: function (spec) {
    var Constructor = function (props, context, updater) {
      // This constructor is overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : undefined;
      }

      // Wire up auto-binding
      if (this.__reactAutoBindMap) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (process.env.NODE_ENV !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (typeof initialState === 'undefined' && this.getInitialState._isMockFunction) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(false) : undefined;

      this.state = initialState;
    };
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, spec);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (process.env.NODE_ENV !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : invariant(false) : undefined;

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : undefined;
      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : undefined;
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  },

  injection: {
    injectMixin: function (mixin) {
      injectedMixins.push(mixin);
    }
  }

};

module.exports = ReactClass;
}).call(this,require('_process'))
},{"./Object.assign":25,"./ReactComponent":33,"./ReactElement":55,"./ReactNoopUpdateQueue":72,"./ReactPropTypeLocationNames":75,"./ReactPropTypeLocations":76,"_process":2,"fbjs/lib/emptyObject":140,"fbjs/lib/invariant":147,"fbjs/lib/keyMirror":150,"fbjs/lib/keyOf":151,"fbjs/lib/warning":158}],33:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponent
 */

'use strict';

var ReactNoopUpdateQueue = require('./ReactNoopUpdateQueue');

var canDefineProperty = require('./canDefineProperty');
var emptyObject = require('fbjs/lib/emptyObject');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(false) : undefined;
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : undefined;
  }
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback);
  }
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback);
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (process.env.NODE_ENV !== 'production') {
  var deprecatedAPIs = {
    getDOMNode: ['getDOMNode', 'Use ReactDOM.findDOMNode(component) instead.'],
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceProps: ['replaceProps', 'Instead, call render again at the top level.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'],
    setProps: ['setProps', 'Instead, call render again at the top level.']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : undefined;
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

module.exports = ReactComponent;
}).call(this,require('_process'))
},{"./ReactNoopUpdateQueue":72,"./canDefineProperty":107,"_process":2,"fbjs/lib/emptyObject":140,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],34:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentBrowserEnvironment
 */

'use strict';

var ReactDOMIDOperations = require('./ReactDOMIDOperations');
var ReactMount = require('./ReactMount');

/**
 * Abstracts away all functionality of the reconciler that requires knowledge of
 * the browser context. TODO: These callers should be refactored to avoid the
 * need for this injection.
 */
var ReactComponentBrowserEnvironment = {

  processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,

  replaceNodeWithMarkupByID: ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID,

  /**
   * If a particular environment requires that some resources be cleaned up,
   * specify this in the injected Mixin. In the DOM, we would likely want to
   * purge any cached node ID lookups.
   *
   * @private
   */
  unmountIDFromEnvironment: function (rootNodeID) {
    ReactMount.purgeID(rootNodeID);
  }

};

module.exports = ReactComponentBrowserEnvironment;
},{"./ReactDOMIDOperations":43,"./ReactMount":68}],35:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentEnvironment
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

var injected = false;

var ReactComponentEnvironment = {

  /**
   * Optionally injectable environment dependent cleanup hook. (server vs.
   * browser etc). Example: A browser system caches DOM nodes based on component
   * ID and must remove that cache entry when this instance is unmounted.
   */
  unmountIDFromEnvironment: null,

  /**
   * Optionally injectable hook for swapping out mount images in the middle of
   * the tree.
   */
  replaceNodeWithMarkupByID: null,

  /**
   * Optionally injectable hook for processing a queue of child updates. Will
   * later move into MultiChildComponents.
   */
  processChildrenUpdates: null,

  injection: {
    injectEnvironment: function (environment) {
      !!injected ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : invariant(false) : undefined;
      ReactComponentEnvironment.unmountIDFromEnvironment = environment.unmountIDFromEnvironment;
      ReactComponentEnvironment.replaceNodeWithMarkupByID = environment.replaceNodeWithMarkupByID;
      ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
      injected = true;
    }
  }

};

module.exports = ReactComponentEnvironment;
}).call(this,require('_process'))
},{"_process":2,"fbjs/lib/invariant":147}],36:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCompositeComponent
 */

'use strict';

var ReactComponentEnvironment = require('./ReactComponentEnvironment');
var ReactCurrentOwner = require('./ReactCurrentOwner');
var ReactElement = require('./ReactElement');
var ReactInstanceMap = require('./ReactInstanceMap');
var ReactPerf = require('./ReactPerf');
var ReactPropTypeLocations = require('./ReactPropTypeLocations');
var ReactPropTypeLocationNames = require('./ReactPropTypeLocationNames');
var ReactReconciler = require('./ReactReconciler');
var ReactUpdateQueue = require('./ReactUpdateQueue');

var assign = require('./Object.assign');
var emptyObject = require('fbjs/lib/emptyObject');
var invariant = require('fbjs/lib/invariant');
var shouldUpdateReactComponent = require('./shouldUpdateReactComponent');
var warning = require('fbjs/lib/warning');

function getDeclarationErrorAddendum(component) {
  var owner = component._currentElement._owner || null;
  if (owner) {
    var name = owner.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

function StatelessComponent(Component) {}
StatelessComponent.prototype.render = function () {
  var Component = ReactInstanceMap.get(this)._currentElement.type;
  return Component(this.props, this.context, this.updater);
};

/**
 * ------------------ The Life-Cycle of a Composite Component ------------------
 *
 * - constructor: Initialization of state. The instance is now retained.
 *   - componentWillMount
 *   - render
 *   - [children's constructors]
 *     - [children's componentWillMount and render]
 *     - [children's componentDidMount]
 *     - componentDidMount
 *
 *       Update Phases:
 *       - componentWillReceiveProps (only called if parent updated)
 *       - shouldComponentUpdate
 *         - componentWillUpdate
 *           - render
 *           - [children's constructors or receive props phases]
 *         - componentDidUpdate
 *
 *     - componentWillUnmount
 *     - [children's componentWillUnmount]
 *   - [children destroyed]
 * - (destroyed): The instance is now blank, released by React and ready for GC.
 *
 * -----------------------------------------------------------------------------
 */

/**
 * An incrementing ID assigned to each component when it is mounted. This is
 * used to enforce the order in which `ReactUpdates` updates dirty components.
 *
 * @private
 */
var nextMountID = 1;

/**
 * @lends {ReactCompositeComponent.prototype}
 */
var ReactCompositeComponentMixin = {

  /**
   * Base constructor for all composite component.
   *
   * @param {ReactElement} element
   * @final
   * @internal
   */
  construct: function (element) {
    this._currentElement = element;
    this._rootNodeID = null;
    this._instance = null;

    // See ReactUpdateQueue
    this._pendingElement = null;
    this._pendingStateQueue = null;
    this._pendingReplaceState = false;
    this._pendingForceUpdate = false;

    this._renderedComponent = null;

    this._context = null;
    this._mountOrder = 0;
    this._topLevelWrapper = null;

    // See ReactUpdates and ReactUpdateQueue.
    this._pendingCallbacks = null;
  },

  /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */
  mountComponent: function (rootID, transaction, context) {
    this._context = context;
    this._mountOrder = nextMountID++;
    this._rootNodeID = rootID;

    var publicProps = this._processProps(this._currentElement.props);
    var publicContext = this._processContext(context);

    var Component = this._currentElement.type;

    // Initialize the public class
    var inst;
    var renderedElement;

    // This is a way to detect if Component is a stateless arrow function
    // component, which is not newable. It might not be 100% reliable but is
    // something we can do until we start detecting that Component extends
    // React.Component. We already assume that typeof Component === 'function'.
    var canInstantiate = ('prototype' in Component);

    if (canInstantiate) {
      if (process.env.NODE_ENV !== 'production') {
        ReactCurrentOwner.current = this;
        try {
          inst = new Component(publicProps, publicContext, ReactUpdateQueue);
        } finally {
          ReactCurrentOwner.current = null;
        }
      } else {
        inst = new Component(publicProps, publicContext, ReactUpdateQueue);
      }
    }

    if (!canInstantiate || inst === null || inst === false || ReactElement.isValidElement(inst)) {
      renderedElement = inst;
      inst = new StatelessComponent(Component);
    }

    if (process.env.NODE_ENV !== 'production') {
      // This will throw later in _renderValidatedComponent, but add an early
      // warning now to help debugging
      if (inst.render == null) {
        process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`, returned ' + 'null/false from a stateless component, or tried to render an ' + 'element whose type is a function that isn\'t a React component.', Component.displayName || Component.name || 'Component') : undefined;
      } else {
        // We support ES6 inheriting from React.Component, the module pattern,
        // and stateless components, but not ES6 classes that don't extend
        process.env.NODE_ENV !== 'production' ? warning(Component.prototype && Component.prototype.isReactComponent || !canInstantiate || !(inst instanceof Component), '%s(...): React component classes must extend React.Component.', Component.displayName || Component.name || 'Component') : undefined;
      }
    }

    // These should be set up in the constructor, but as a convenience for
    // simpler class abstractions, we set them up after the fact.
    inst.props = publicProps;
    inst.context = publicContext;
    inst.refs = emptyObject;
    inst.updater = ReactUpdateQueue;

    this._instance = inst;

    // Store a reference from the instance back to the internal representation
    ReactInstanceMap.set(inst, this);

    if (process.env.NODE_ENV !== 'production') {
      // Since plain JS classes are defined without any special initialization
      // logic, we can not catch common errors early. Therefore, we have to
      // catch them here, at initialization time, instead.
      process.env.NODE_ENV !== 'production' ? warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component') : undefined;
      process.env.NODE_ENV !== 'production' ? warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component') : undefined;
      process.env.NODE_ENV !== 'production' ? warning(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component') : undefined;
      process.env.NODE_ENV !== 'production' ? warning(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component') : undefined;
      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', this.getName() || 'A component') : undefined;
      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentDidUnmount !== 'function', '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', this.getName() || 'A component') : undefined;
      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentWillRecieveProps !== 'function', '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', this.getName() || 'A component') : undefined;
    }

    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;
    }
    !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;

    this._pendingStateQueue = null;
    this._pendingReplaceState = false;
    this._pendingForceUpdate = false;

    if (inst.componentWillMount) {
      inst.componentWillMount();
      // When mounting, calls to `setState` by `componentWillMount` will set
      // `this._pendingStateQueue` without triggering a re-render.
      if (this._pendingStateQueue) {
        inst.state = this._processPendingState(inst.props, inst.context);
      }
    }

    // If not a stateless component, we now render
    if (renderedElement === undefined) {
      renderedElement = this._renderValidatedComponent();
    }

    this._renderedComponent = this._instantiateReactComponent(renderedElement);

    var markup = ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, this._processChildContext(context));
    if (inst.componentDidMount) {
      transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
    }

    return markup;
  },

  /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */
  unmountComponent: function () {
    var inst = this._instance;

    if (inst.componentWillUnmount) {
      inst.componentWillUnmount();
    }

    ReactReconciler.unmountComponent(this._renderedComponent);
    this._renderedComponent = null;
    this._instance = null;

    // Reset pending fields
    // Even if this component is scheduled for another update in ReactUpdates,
    // it would still be ignored because these fields are reset.
    this._pendingStateQueue = null;
    this._pendingReplaceState = false;
    this._pendingForceUpdate = false;
    this._pendingCallbacks = null;
    this._pendingElement = null;

    // These fields do not really need to be reset since this object is no
    // longer accessible.
    this._context = null;
    this._rootNodeID = null;
    this._topLevelWrapper = null;

    // Delete the reference from the instance to this internal representation
    // which allow the internals to be properly cleaned up even if the user
    // leaks a reference to the public instance.
    ReactInstanceMap.remove(inst);

    // Some existing components rely on inst.props even after they've been
    // destroyed (in event handlers).
    // TODO: inst.props = null;
    // TODO: inst.state = null;
    // TODO: inst.context = null;
  },

  /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`
   *
   * @param {object} context
   * @return {?object}
   * @private
   */
  _maskContext: function (context) {
    var maskedContext = null;
    var Component = this._currentElement.type;
    var contextTypes = Component.contextTypes;
    if (!contextTypes) {
      return emptyObject;
    }
    maskedContext = {};
    for (var contextName in contextTypes) {
      maskedContext[contextName] = context[contextName];
    }
    return maskedContext;
  },

  /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`, and asserts that they are valid.
   *
   * @param {object} context
   * @return {?object}
   * @private
   */
  _processContext: function (context) {
    var maskedContext = this._maskContext(context);
    if (process.env.NODE_ENV !== 'production') {
      var Component = this._currentElement.type;
      if (Component.contextTypes) {
        this._checkPropTypes(Component.contextTypes, maskedContext, ReactPropTypeLocations.context);
      }
    }
    return maskedContext;
  },

  /**
   * @param {object} currentContext
   * @return {object}
   * @private
   */
  _processChildContext: function (currentContext) {
    var Component = this._currentElement.type;
    var inst = this._instance;
    var childContext = inst.getChildContext && inst.getChildContext();
    if (childContext) {
      !(typeof Component.childContextTypes === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;
      if (process.env.NODE_ENV !== 'production') {
        this._checkPropTypes(Component.childContextTypes, childContext, ReactPropTypeLocations.childContext);
      }
      for (var name in childContext) {
        !(name in Component.childContextTypes) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || 'ReactCompositeComponent', name) : invariant(false) : undefined;
      }
      return assign({}, currentContext, childContext);
    }
    return currentContext;
  },

  /**
   * Processes props by setting default values for unspecified props and
   * asserting that the props are valid. Does not mutate its argument; returns
   * a new props object with defaults merged in.
   *
   * @param {object} newProps
   * @return {object}
   * @private
   */
  _processProps: function (newProps) {
    if (process.env.NODE_ENV !== 'production') {
      var Component = this._currentElement.type;
      if (Component.propTypes) {
        this._checkPropTypes(Component.propTypes, newProps, ReactPropTypeLocations.prop);
      }
    }
    return newProps;
  },

  /**
   * Assert that the props are valid
   *
   * @param {object} propTypes Map of prop name to a ReactPropType
   * @param {object} props
   * @param {string} location e.g. "prop", "context", "child context"
   * @private
   */
  _checkPropTypes: function (propTypes, props, location) {
    // TODO: Stop validating prop types here and only use the element
    // validation.
    var componentName = this.getName();
    for (var propName in propTypes) {
      if (propTypes.hasOwnProperty(propName)) {
        var error;
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually ' + 'from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : undefined;
          error = propTypes[propName](props, propName, componentName, location);
        } catch (ex) {
          error = ex;
        }
        if (error instanceof Error) {
          // We may want to extend this logic for similar errors in
          // top-level render calls, so I'm abstracting it away into
          // a function to minimize refactoring in the future
          var addendum = getDeclarationErrorAddendum(this);

          if (location === ReactPropTypeLocations.prop) {
            // Preface gives us something to blacklist in warning module
            process.env.NODE_ENV !== 'production' ? warning(false, 'Failed Composite propType: %s%s', error.message, addendum) : undefined;
          } else {
            process.env.NODE_ENV !== 'production' ? warning(false, 'Failed Context Types: %s%s', error.message, addendum) : undefined;
          }
        }
      }
    }
  },

  receiveComponent: function (nextElement, transaction, nextContext) {
    var prevElement = this._currentElement;
    var prevContext = this._context;

    this._pendingElement = null;

    this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
  },

  /**
   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
   * is set, update the component.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  performUpdateIfNecessary: function (transaction) {
    if (this._pendingElement != null) {
      ReactReconciler.receiveComponent(this, this._pendingElement || this._currentElement, transaction, this._context);
    }

    if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
      this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
    }
  },

  /**
   * Perform an update to a mounted component. The componentWillReceiveProps and
   * shouldComponentUpdate methods are called, then (assuming the update isn't
   * skipped) the remaining update lifecycle methods are called and the DOM
   * representation is updated.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevParentElement
   * @param {ReactElement} nextParentElement
   * @internal
   * @overridable
   */
  updateComponent: function (transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
    var inst = this._instance;

    var nextContext = this._context === nextUnmaskedContext ? inst.context : this._processContext(nextUnmaskedContext);
    var nextProps;

    // Distinguish between a props update versus a simple state update
    if (prevParentElement === nextParentElement) {
      // Skip checking prop types again -- we don't read inst.props to avoid
      // warning for DOM component props in this upgrade
      nextProps = nextParentElement.props;
    } else {
      nextProps = this._processProps(nextParentElement.props);
      // An update here will schedule an update but immediately set
      // _pendingStateQueue which will ensure that any state updates gets
      // immediately reconciled instead of waiting for the next batch.

      if (inst.componentWillReceiveProps) {
        inst.componentWillReceiveProps(nextProps, nextContext);
      }
    }

    var nextState = this._processPendingState(nextProps, nextContext);

    var shouldUpdate = this._pendingForceUpdate || !inst.shouldComponentUpdate || inst.shouldComponentUpdate(nextProps, nextState, nextContext);

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(typeof shouldUpdate !== 'undefined', '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : undefined;
    }

    if (shouldUpdate) {
      this._pendingForceUpdate = false;
      // Will set `this.props`, `this.state` and `this.context`.
      this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
    } else {
      // If it's determined that a component should not update, we still want
      // to set props and state but we shortcut the rest of the update.
      this._currentElement = nextParentElement;
      this._context = nextUnmaskedContext;
      inst.props = nextProps;
      inst.state = nextState;
      inst.context = nextContext;
    }
  },

  _processPendingState: function (props, context) {
    var inst = this._instance;
    var queue = this._pendingStateQueue;
    var replace = this._pendingReplaceState;
    this._pendingReplaceState = false;
    this._pendingStateQueue = null;

    if (!queue) {
      return inst.state;
    }

    if (replace && queue.length === 1) {
      return queue[0];
    }

    var nextState = assign({}, replace ? queue[0] : inst.state);
    for (var i = replace ? 1 : 0; i < queue.length; i++) {
      var partial = queue[i];
      assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
    }

    return nextState;
  },

  /**
   * Merges new props and state, notifies delegate methods of update and
   * performs update.
   *
   * @param {ReactElement} nextElement Next element
   * @param {object} nextProps Next public object to set as properties.
   * @param {?object} nextState Next object to set as state.
   * @param {?object} nextContext Next public object to set as context.
   * @param {ReactReconcileTransaction} transaction
   * @param {?object} unmaskedContext
   * @private
   */
  _performComponentUpdate: function (nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
    var inst = this._instance;

    var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
    var prevProps;
    var prevState;
    var prevContext;
    if (hasComponentDidUpdate) {
      prevProps = inst.props;
      prevState = inst.state;
      prevContext = inst.context;
    }

    if (inst.componentWillUpdate) {
      inst.componentWillUpdate(nextProps, nextState, nextContext);
    }

    this._currentElement = nextElement;
    this._context = unmaskedContext;
    inst.props = nextProps;
    inst.state = nextState;
    inst.context = nextContext;

    this._updateRenderedComponent(transaction, unmaskedContext);

    if (hasComponentDidUpdate) {
      transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
    }
  },

  /**
   * Call the component's `render` method and update the DOM accordingly.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  _updateRenderedComponent: function (transaction, context) {
    var prevComponentInstance = this._renderedComponent;
    var prevRenderedElement = prevComponentInstance._currentElement;
    var nextRenderedElement = this._renderValidatedComponent();
    if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
      ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
    } else {
      // These two IDs are actually the same! But nothing should rely on that.
      var thisID = this._rootNodeID;
      var prevComponentID = prevComponentInstance._rootNodeID;
      ReactReconciler.unmountComponent(prevComponentInstance);

      this._renderedComponent = this._instantiateReactComponent(nextRenderedElement);
      var nextMarkup = ReactReconciler.mountComponent(this._renderedComponent, thisID, transaction, this._processChildContext(context));
      this._replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
    }
  },

  /**
   * @protected
   */
  _replaceNodeWithMarkupByID: function (prevComponentID, nextMarkup) {
    ReactComponentEnvironment.replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
  },

  /**
   * @protected
   */
  _renderValidatedComponentWithoutOwnerOrContext: function () {
    var inst = this._instance;
    var renderedComponent = inst.render();
    if (process.env.NODE_ENV !== 'production') {
      // We allow auto-mocks to proceed as if they're returning null.
      if (typeof renderedComponent === 'undefined' && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        renderedComponent = null;
      }
    }

    return renderedComponent;
  },

  /**
   * @private
   */
  _renderValidatedComponent: function () {
    var renderedComponent;
    ReactCurrentOwner.current = this;
    try {
      renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
    } finally {
      ReactCurrentOwner.current = null;
    }
    !(
    // TODO: An `isValidNode` function would probably be more appropriate
    renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.render(): A valid ReactComponent must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;
    return renderedComponent;
  },

  /**
   * Lazily allocates the refs object and stores `component` as `ref`.
   *
   * @param {string} ref Reference name.
   * @param {component} component Component to store as `ref`.
   * @final
   * @private
   */
  attachRef: function (ref, component) {
    var inst = this.getPublicInstance();
    !(inst != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Stateless function components cannot have refs.') : invariant(false) : undefined;
    var publicComponentInstance = component.getPublicInstance();
    if (process.env.NODE_ENV !== 'production') {
      var componentName = component && component.getName ? component.getName() : 'a component';
      process.env.NODE_ENV !== 'production' ? warning(publicComponentInstance != null, 'Stateless function components cannot be given refs ' + '(See ref "%s" in %s created by %s). ' + 'Attempts to access this ref will fail.', ref, componentName, this.getName()) : undefined;
    }
    var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
    refs[ref] = publicComponentInstance;
  },

  /**
   * Detaches a reference name.
   *
   * @param {string} ref Name to dereference.
   * @final
   * @private
   */
  detachRef: function (ref) {
    var refs = this.getPublicInstance().refs;
    delete refs[ref];
  },

  /**
   * Get a text description of the component that can be used to identify it
   * in error messages.
   * @return {string} The name or null.
   * @internal
   */
  getName: function () {
    var type = this._currentElement.type;
    var constructor = this._instance && this._instance.constructor;
    return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
  },

  /**
   * Get the publicly accessible representation of this component - i.e. what
   * is exposed by refs and returned by render. Can be null for stateless
   * components.
   *
   * @return {ReactComponent} the public component instance.
   * @internal
   */
  getPublicInstance: function () {
    var inst = this._instance;
    if (inst instanceof StatelessComponent) {
      return null;
    }
    return inst;
  },

  // Stub
  _instantiateReactComponent: null

};

ReactPerf.measureMethods(ReactCompositeComponentMixin, 'ReactCompositeComponent', {
  mountComponent: 'mountComponent',
  updateComponent: 'updateComponent',
  _renderValidatedComponent: '_renderValidatedComponent'
});

var ReactCompositeComponent = {

  Mixin: ReactCompositeComponentMixin

};

module.exports = ReactCompositeComponent;
}).call(this,require('_process'))
},{"./Object.assign":25,"./ReactComponentEnvironment":35,"./ReactCurrentOwner":37,"./ReactElement":55,"./ReactInstanceMap":65,"./ReactPerf":74,"./ReactPropTypeLocationNames":75,"./ReactPropTypeLocations":76,"./ReactReconciler":79,"./ReactUpdateQueue":85,"./shouldUpdateReactComponent":129,"_process":2,"fbjs/lib/emptyObject":140,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],37:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCurrentOwner
 */

'use strict';

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {

  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null

};

module.exports = ReactCurrentOwner;
},{}],38:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOM
 */

/* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/

'use strict';

var ReactCurrentOwner = require('./ReactCurrentOwner');
var ReactDOMTextComponent = require('./ReactDOMTextComponent');
var ReactDefaultInjection = require('./ReactDefaultInjection');
var ReactInstanceHandles = require('./ReactInstanceHandles');
var ReactMount = require('./ReactMount');
var ReactPerf = require('./ReactPerf');
var ReactReconciler = require('./ReactReconciler');
var ReactUpdates = require('./ReactUpdates');
var ReactVersion = require('./ReactVersion');

var findDOMNode = require('./findDOMNode');
var renderSubtreeIntoContainer = require('./renderSubtreeIntoContainer');
var warning = require('fbjs/lib/warning');

ReactDefaultInjection.inject();

var render = ReactPerf.measure('React', 'render', ReactMount.render);

var React = {
  findDOMNode: findDOMNode,
  render: render,
  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
  version: ReactVersion,

  /* eslint-disable camelcase */
  unstable_batchedUpdates: ReactUpdates.batchedUpdates,
  unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
};

// Inject the runtime into a devtools global hook regardless of browser.
// Allows for debugging when the hook is injected on the page.
/* eslint-enable camelcase */
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
    CurrentOwner: ReactCurrentOwner,
    InstanceHandles: ReactInstanceHandles,
    Mount: ReactMount,
    Reconciler: ReactReconciler,
    TextComponent: ReactDOMTextComponent
  });
}

if (process.env.NODE_ENV !== 'production') {
  var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
  if (ExecutionEnvironment.canUseDOM && window.top === window.self) {

    // First check if devtools is not installed
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
      // If we're in Chrome or Firefox, provide a download link if not installed.
      if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
        console.debug('Download the React DevTools for a better development experience: ' + 'https://fb.me/react-devtools');
      }
    }

    // If we're in IE8, check to see if we are in compatibility mode and provide
    // information on preventing compatibility mode
    var ieCompatibilityMode = document.documentMode && document.documentMode < 8;

    process.env.NODE_ENV !== 'production' ? warning(!ieCompatibilityMode, 'Internet Explorer is running in compatibility mode; please add the ' + 'following tag to your HTML to prevent this from happening: ' + '<meta http-equiv="X-UA-Compatible" content="IE=edge" />') : undefined;

    var expectedFeatures = [
    // shims
    Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.split, String.prototype.trim,

    // shams
    Object.create, Object.freeze];

    for (var i = 0; i < expectedFeatures.length; i++) {
      if (!expectedFeatures[i]) {
        console.error('One or more ES5 shim/shams expected by React are not available: ' + 'https://fb.me/react-warning-polyfills');
        break;
      }
    }
  }
}

module.exports = React;
}).call(this,require('_process'))
},{"./ReactCurrentOwner":37,"./ReactDOMTextComponent":49,"./ReactDefaultInjection":52,"./ReactInstanceHandles":64,"./ReactMount":68,"./ReactPerf":74,"./ReactReconciler":79,"./ReactUpdates":86,"./ReactVersion":87,"./findDOMNode":111,"./renderSubtreeIntoContainer":126,"_process":2,"fbjs/lib/ExecutionEnvironment":133,"fbjs/lib/warning":158}],39:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMButton
 */

'use strict';

var mouseListenerNames = {
  onClick: true,
  onDoubleClick: true,
  onMouseDown: true,
  onMouseMove: true,
  onMouseUp: true,

  onClickCapture: true,
  onDoubleClickCapture: true,
  onMouseDownCapture: true,
  onMouseMoveCapture: true,
  onMouseUpCapture: true
};

/**
 * Implements a <button> native component that does not receive mouse events
 * when `disabled` is set.
 */
var ReactDOMButton = {
  getNativeProps: function (inst, props, context) {
    if (!props.disabled) {
      return props;
    }

    // Copy the props, except the mouse listeners
    var nativeProps = {};
    for (var key in props) {
      if (props.hasOwnProperty(key) && !mouseListenerNames[key]) {
        nativeProps[key] = props[key];
      }
    }

    return nativeProps;
  }
};

module.exports = ReactDOMButton;
},{}],40:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponent
 * @typechecks static-only
 */

/* global hasOwnProperty:true */

'use strict';

var AutoFocusUtils = require('./AutoFocusUtils');
var CSSPropertyOperations = require('./CSSPropertyOperations');
var DOMProperty = require('./DOMProperty');
var DOMPropertyOperations = require('./DOMPropertyOperations');
var EventConstants = require('./EventConstants');
var ReactBrowserEventEmitter = require('./ReactBrowserEventEmitter');
var ReactComponentBrowserEnvironment = require('./ReactComponentBrowserEnvironment');
var ReactDOMButton = require('./ReactDOMButton');
var ReactDOMInput = require('./ReactDOMInput');
var ReactDOMOption = require('./ReactDOMOption');
var ReactDOMSelect = require('./ReactDOMSelect');
var ReactDOMTextarea = require('./ReactDOMTextarea');
var ReactMount = require('./ReactMount');
var ReactMultiChild = require('./ReactMultiChild');
var ReactPerf = require('./ReactPerf');
var ReactUpdateQueue = require('./ReactUpdateQueue');

var assign = require('./Object.assign');
var canDefineProperty = require('./canDefineProperty');
var escapeTextContentForBrowser = require('./escapeTextContentForBrowser');
var invariant = require('fbjs/lib/invariant');
var isEventSupported = require('./isEventSupported');
var keyOf = require('fbjs/lib/keyOf');
var setInnerHTML = require('./setInnerHTML');
var setTextContent = require('./setTextContent');
var shallowEqual = require('fbjs/lib/shallowEqual');
var validateDOMNesting = require('./validateDOMNesting');
var warning = require('fbjs/lib/warning');

var deleteListener = ReactBrowserEventEmitter.deleteListener;
var listenTo = ReactBrowserEventEmitter.listenTo;
var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;

// For quickly matching children type, to test if can be treated as content.
var CONTENT_TYPES = { 'string': true, 'number': true };

var CHILDREN = keyOf({ children: null });
var STYLE = keyOf({ style: null });
var HTML = keyOf({ __html: null });

var ELEMENT_NODE_TYPE = 1;

function getDeclarationErrorAddendum(internalInstance) {
  if (internalInstance) {
    var owner = internalInstance._currentElement._owner || null;
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' This DOM node was rendered by `' + name + '`.';
      }
    }
  }
  return '';
}

var legacyPropsDescriptor;
if (process.env.NODE_ENV !== 'production') {
  legacyPropsDescriptor = {
    props: {
      enumerable: false,
      get: function () {
        var component = this._reactInternalComponent;
        process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .props of a DOM node; instead, ' + 'recreate the props as `render` did originally or read the DOM ' + 'properties/attributes directly from this node (e.g., ' + 'this.refs.box.className).%s', getDeclarationErrorAddendum(component)) : undefined;
        return component._currentElement.props;
      }
    }
  };
}

function legacyGetDOMNode() {
  if (process.env.NODE_ENV !== 'production') {
    var component = this._reactInternalComponent;
    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .getDOMNode() of a DOM node; ' + 'instead, use the node directly.%s', getDeclarationErrorAddendum(component)) : undefined;
  }
  return this;
}

function legacyIsMounted() {
  var component = this._reactInternalComponent;
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .isMounted() of a DOM node.%s', getDeclarationErrorAddendum(component)) : undefined;
  }
  return !!component;
}

function legacySetStateEtc() {
  if (process.env.NODE_ENV !== 'production') {
    var component = this._reactInternalComponent;
    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .setState(), .replaceState(), or ' + '.forceUpdate() of a DOM node. This is a no-op.%s', getDeclarationErrorAddendum(component)) : undefined;
  }
}

function legacySetProps(partialProps, callback) {
  var component = this._reactInternalComponent;
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .setProps() of a DOM node. ' + 'Instead, call ReactDOM.render again at the top level.%s', getDeclarationErrorAddendum(component)) : undefined;
  }
  if (!component) {
    return;
  }
  ReactUpdateQueue.enqueueSetPropsInternal(component, partialProps);
  if (callback) {
    ReactUpdateQueue.enqueueCallbackInternal(component, callback);
  }
}

function legacyReplaceProps(partialProps, callback) {
  var component = this._reactInternalComponent;
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .replaceProps() of a DOM node. ' + 'Instead, call ReactDOM.render again at the top level.%s', getDeclarationErrorAddendum(component)) : undefined;
  }
  if (!component) {
    return;
  }
  ReactUpdateQueue.enqueueReplacePropsInternal(component, partialProps);
  if (callback) {
    ReactUpdateQueue.enqueueCallbackInternal(component, callback);
  }
}

function friendlyStringify(obj) {
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      return '[' + obj.map(friendlyStringify).join(', ') + ']';
    } else {
      var pairs = [];
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
          pairs.push(keyEscaped + ': ' + friendlyStringify(obj[key]));
        }
      }
      return '{' + pairs.join(', ') + '}';
    }
  } else if (typeof obj === 'string') {
    return JSON.stringify(obj);
  } else if (typeof obj === 'function') {
    return '[function object]';
  }
  // Differs from JSON.stringify in that undefined becauses undefined and that
  // inf and nan don't become null
  return String(obj);
}

var styleMutationWarning = {};

function checkAndWarnForMutatedStyle(style1, style2, component) {
  if (style1 == null || style2 == null) {
    return;
  }
  if (shallowEqual(style1, style2)) {
    return;
  }

  var componentName = component._tag;
  var owner = component._currentElement._owner;
  var ownerName;
  if (owner) {
    ownerName = owner.getName();
  }

  var hash = ownerName + '|' + componentName;

  if (styleMutationWarning.hasOwnProperty(hash)) {
    return;
  }

  styleMutationWarning[hash] = true;

  process.env.NODE_ENV !== 'production' ? warning(false, '`%s` was passed a style object that has previously been mutated. ' + 'Mutating `style` is deprecated. Consider cloning it beforehand. Check ' + 'the `render` %s. Previous style: %s. Mutated style: %s.', componentName, owner ? 'of `' + ownerName + '`' : 'using <' + componentName + '>', friendlyStringify(style1), friendlyStringify(style2)) : undefined;
}

/**
 * @param {object} component
 * @param {?object} props
 */
function assertValidProps(component, props) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  if (process.env.NODE_ENV !== 'production') {
    if (voidElementTags[component._tag]) {
      process.env.NODE_ENV !== 'production' ? warning(props.children == null && props.dangerouslySetInnerHTML == null, '%s is a void element tag and must not have `children` or ' + 'use `props.dangerouslySetInnerHTML`.%s', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : undefined;
    }
  }
  if (props.dangerouslySetInnerHTML != null) {
    !(props.children == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : invariant(false) : undefined;
    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' + 'for more information.') : invariant(false) : undefined;
  }
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : undefined;
    process.env.NODE_ENV !== 'production' ? warning(!props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : undefined;
  }
  !(props.style == null || typeof props.style === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The `style` prop expects a mapping from style properties to values, ' + 'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' + 'using JSX.%s', getDeclarationErrorAddendum(component)) : invariant(false) : undefined;
}

function enqueuePutListener(id, registrationName, listener, transaction) {
  if (process.env.NODE_ENV !== 'production') {
    // IE8 has no API for event capturing and the `onScroll` event doesn't
    // bubble.
    process.env.NODE_ENV !== 'production' ? warning(registrationName !== 'onScroll' || isEventSupported('scroll', true), 'This browser doesn\'t support the `onScroll` event') : undefined;
  }
  var container = ReactMount.findReactContainerForID(id);
  if (container) {
    var doc = container.nodeType === ELEMENT_NODE_TYPE ? container.ownerDocument : container;
    listenTo(registrationName, doc);
  }
  transaction.getReactMountReady().enqueue(putListener, {
    id: id,
    registrationName: registrationName,
    listener: listener
  });
}

function putListener() {
  var listenerToPut = this;
  ReactBrowserEventEmitter.putListener(listenerToPut.id, listenerToPut.registrationName, listenerToPut.listener);
}

// There are so many media events, it makes sense to just
// maintain a list rather than create a `trapBubbledEvent` for each
var mediaEvents = {
  topAbort: 'abort',
  topCanPlay: 'canplay',
  topCanPlayThrough: 'canplaythrough',
  topDurationChange: 'durationchange',
  topEmptied: 'emptied',
  topEncrypted: 'encrypted',
  topEnded: 'ended',
  topError: 'error',
  topLoadedData: 'loadeddata',
  topLoadedMetadata: 'loadedmetadata',
  topLoadStart: 'loadstart',
  topPause: 'pause',
  topPlay: 'play',
  topPlaying: 'playing',
  topProgress: 'progress',
  topRateChange: 'ratechange',
  topSeeked: 'seeked',
  topSeeking: 'seeking',
  topStalled: 'stalled',
  topSuspend: 'suspend',
  topTimeUpdate: 'timeupdate',
  topVolumeChange: 'volumechange',
  topWaiting: 'waiting'
};

function trapBubbledEventsLocal() {
  var inst = this;
  // If a component renders to null or if another component fatals and causes
  // the state of the tree to be corrupted, `node` here can be null.
  !inst._rootNodeID ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Must be mounted to trap events') : invariant(false) : undefined;
  var node = ReactMount.getNode(inst._rootNodeID);
  !node ? process.env.NODE_ENV !== 'production' ? invariant(false, 'trapBubbledEvent(...): Requires node to be rendered.') : invariant(false) : undefined;

  switch (inst._tag) {
    case 'iframe':
      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
      break;
    case 'video':
    case 'audio':

      inst._wrapperState.listeners = [];
      // create listener for each media event
      for (var event in mediaEvents) {
        if (mediaEvents.hasOwnProperty(event)) {
          inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event], mediaEvents[event], node));
        }
      }

      break;
    case 'img':
      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
      break;
    case 'form':
      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit', node)];
      break;
  }
}

function mountReadyInputWrapper() {
  ReactDOMInput.mountReadyWrapper(this);
}

function postUpdateSelectWrapper() {
  ReactDOMSelect.postUpdateWrapper(this);
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special cased tags.

var omittedCloseTags = {
  'area': true,
  'base': true,
  'br': true,
  'col': true,
  'embed': true,
  'hr': true,
  'img': true,
  'input': true,
  'keygen': true,
  'link': true,
  'meta': true,
  'param': true,
  'source': true,
  'track': true,
  'wbr': true
};

// NOTE: menuitem's close tag should be omitted, but that causes problems.
var newlineEatingTags = {
  'listing': true,
  'pre': true,
  'textarea': true
};

// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = assign({
  'menuitem': true
}, omittedCloseTags);

// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache = {};
var hasOwnProperty = ({}).hasOwnProperty;

function validateDangerousTag(tag) {
  if (!hasOwnProperty.call(validatedTagCache, tag)) {
    !VALID_TAG_REGEX.test(tag) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Invalid tag: %s', tag) : invariant(false) : undefined;
    validatedTagCache[tag] = true;
  }
}

function processChildContextDev(context, inst) {
  // Pass down our tag name to child components for validation purposes
  context = assign({}, context);
  var info = context[validateDOMNesting.ancestorInfoContextKey];
  context[validateDOMNesting.ancestorInfoContextKey] = validateDOMNesting.updatedAncestorInfo(info, inst._tag, inst);
  return context;
}

function isCustomComponent(tagName, props) {
  return tagName.indexOf('-') >= 0 || props.is != null;
}

/**
 * Creates a new React class that is idempotent and capable of containing other
 * React components. It accepts event listeners and DOM properties that are
 * valid according to `DOMProperty`.
 *
 *  - Event listeners: `onClick`, `onMouseDown`, etc.
 *  - DOM properties: `className`, `name`, `title`, etc.
 *
 * The `style` property functions differently from the DOM API. It accepts an
 * object mapping of style properties to values.
 *
 * @constructor ReactDOMComponent
 * @extends ReactMultiChild
 */
function ReactDOMComponent(tag) {
  validateDangerousTag(tag);
  this._tag = tag.toLowerCase();
  this._renderedChildren = null;
  this._previousStyle = null;
  this._previousStyleCopy = null;
  this._rootNodeID = null;
  this._wrapperState = null;
  this._topLevelWrapper = null;
  this._nodeWithLegacyProperties = null;
  if (process.env.NODE_ENV !== 'production') {
    this._unprocessedContextDev = null;
    this._processedContextDev = null;
  }
}

ReactDOMComponent.displayName = 'ReactDOMComponent';

ReactDOMComponent.Mixin = {

  construct: function (element) {
    this._currentElement = element;
  },

  /**
   * Generates root tag markup then recurses. This method has side effects and
   * is not idempotent.
   *
   * @internal
   * @param {string} rootID The root DOM ID for this node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} context
   * @return {string} The computed markup.
   */
  mountComponent: function (rootID, transaction, context) {
    this._rootNodeID = rootID;

    var props = this._currentElement.props;

    switch (this._tag) {
      case 'iframe':
      case 'img':
      case 'form':
      case 'video':
      case 'audio':
        this._wrapperState = {
          listeners: null
        };
        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
        break;
      case 'button':
        props = ReactDOMButton.getNativeProps(this, props, context);
        break;
      case 'input':
        ReactDOMInput.mountWrapper(this, props, context);
        props = ReactDOMInput.getNativeProps(this, props, context);
        break;
      case 'option':
        ReactDOMOption.mountWrapper(this, props, context);
        props = ReactDOMOption.getNativeProps(this, props, context);
        break;
      case 'select':
        ReactDOMSelect.mountWrapper(this, props, context);
        props = ReactDOMSelect.getNativeProps(this, props, context);
        context = ReactDOMSelect.processChildContext(this, props, context);
        break;
      case 'textarea':
        ReactDOMTextarea.mountWrapper(this, props, context);
        props = ReactDOMTextarea.getNativeProps(this, props, context);
        break;
    }

    assertValidProps(this, props);
    if (process.env.NODE_ENV !== 'production') {
      if (context[validateDOMNesting.ancestorInfoContextKey]) {
        validateDOMNesting(this._tag, this, context[validateDOMNesting.ancestorInfoContextKey]);
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      this._unprocessedContextDev = context;
      this._processedContextDev = processChildContextDev(context, this);
      context = this._processedContextDev;
    }

    var mountImage;
    if (transaction.useCreateElement) {
      var ownerDocument = context[ReactMount.ownerDocumentContextKey];
      var el = ownerDocument.createElement(this._currentElement.type);
      DOMPropertyOperations.setAttributeForID(el, this._rootNodeID);
      // Populate node cache
      ReactMount.getID(el);
      this._updateDOMProperties({}, props, transaction, el);
      this._createInitialChildren(transaction, props, context, el);
      mountImage = el;
    } else {
      var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
      var tagContent = this._createContentMarkup(transaction, props, context);
      if (!tagContent && omittedCloseTags[this._tag]) {
        mountImage = tagOpen + '/>';
      } else {
        mountImage = tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';
      }
    }

    switch (this._tag) {
      case 'input':
        transaction.getReactMountReady().enqueue(mountReadyInputWrapper, this);
      // falls through
      case 'button':
      case 'select':
      case 'textarea':
        if (props.autoFocus) {
          transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
        }
        break;
    }

    return mountImage;
  },

  /**
   * Creates markup for the open tag and all attributes.
   *
   * This method has side effects because events get registered.
   *
   * Iterating over object properties is faster than iterating over arrays.
   * @see http://jsperf.com/obj-vs-arr-iteration
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @return {string} Markup of opening tag.
   */
  _createOpenTagMarkupAndPutListeners: function (transaction, props) {
    var ret = '<' + this._currentElement.type;

    for (var propKey in props) {
      if (!props.hasOwnProperty(propKey)) {
        continue;
      }
      var propValue = props[propKey];
      if (propValue == null) {
        continue;
      }
      if (registrationNameModules.hasOwnProperty(propKey)) {
        if (propValue) {
          enqueuePutListener(this._rootNodeID, propKey, propValue, transaction);
        }
      } else {
        if (propKey === STYLE) {
          if (propValue) {
            if (process.env.NODE_ENV !== 'production') {
              // See `_updateDOMProperties`. style block
              this._previousStyle = propValue;
            }
            propValue = this._previousStyleCopy = assign({}, props.style);
          }
          propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
        }
        var markup = null;
        if (this._tag != null && isCustomComponent(this._tag, props)) {
          if (propKey !== CHILDREN) {
            markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
          }
        } else {
          markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
        }
        if (markup) {
          ret += ' ' + markup;
        }
      }
    }

    // For static pages, no need to put React ID and checksum. Saves lots of
    // bytes.
    if (transaction.renderToStaticMarkup) {
      return ret;
    }

    var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
    return ret + ' ' + markupForID;
  },

  /**
   * Creates markup for the content between the tags.
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @param {object} context
   * @return {string} Content markup.
   */
  _createContentMarkup: function (transaction, props, context) {
    var ret = '';

    // Intentional use of != to avoid catching zero/false.
    var innerHTML = props.dangerouslySetInnerHTML;
    if (innerHTML != null) {
      if (innerHTML.__html != null) {
        ret = innerHTML.__html;
      }
    } else {
      var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
      var childrenToUse = contentToUse != null ? null : props.children;
      if (contentToUse != null) {
        // TODO: Validate that text is allowed as a child of this node
        ret = escapeTextContentForBrowser(contentToUse);
      } else if (childrenToUse != null) {
        var mountImages = this.mountChildren(childrenToUse, transaction, context);
        ret = mountImages.join('');
      }
    }
    if (newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
      // text/html ignores the first character in these tags if it's a newline
      // Prefer to break application/xml over text/html (for now) by adding
      // a newline specifically to get eaten by the parser. (Alternately for
      // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
      // \r is normalized out by HTMLTextAreaElement#value.)
      // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
      // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
      // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
      // See: Parsing of "textarea" "listing" and "pre" elements
      //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
      return '\n' + ret;
    } else {
      return ret;
    }
  },

  _createInitialChildren: function (transaction, props, context, el) {
    // Intentional use of != to avoid catching zero/false.
    var innerHTML = props.dangerouslySetInnerHTML;
    if (innerHTML != null) {
      if (innerHTML.__html != null) {
        setInnerHTML(el, innerHTML.__html);
      }
    } else {
      var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
      var childrenToUse = contentToUse != null ? null : props.children;
      if (contentToUse != null) {
        // TODO: Validate that text is allowed as a child of this node
        setTextContent(el, contentToUse);
      } else if (childrenToUse != null) {
        var mountImages = this.mountChildren(childrenToUse, transaction, context);
        for (var i = 0; i < mountImages.length; i++) {
          el.appendChild(mountImages[i]);
        }
      }
    }
  },

  /**
   * Receives a next element and updates the component.
   *
   * @internal
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} context
   */
  receiveComponent: function (nextElement, transaction, context) {
    var prevElement = this._currentElement;
    this._currentElement = nextElement;
    this.updateComponent(transaction, prevElement, nextElement, context);
  },

  /**
   * Updates a native DOM component after it has already been allocated and
   * attached to the DOM. Reconciles the root DOM node, then recurses.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevElement
   * @param {ReactElement} nextElement
   * @internal
   * @overridable
   */
  updateComponent: function (transaction, prevElement, nextElement, context) {
    var lastProps = prevElement.props;
    var nextProps = this._currentElement.props;

    switch (this._tag) {
      case 'button':
        lastProps = ReactDOMButton.getNativeProps(this, lastProps);
        nextProps = ReactDOMButton.getNativeProps(this, nextProps);
        break;
      case 'input':
        ReactDOMInput.updateWrapper(this);
        lastProps = ReactDOMInput.getNativeProps(this, lastProps);
        nextProps = ReactDOMInput.getNativeProps(this, nextProps);
        break;
      case 'option':
        lastProps = ReactDOMOption.getNativeProps(this, lastProps);
        nextProps = ReactDOMOption.getNativeProps(this, nextProps);
        break;
      case 'select':
        lastProps = ReactDOMSelect.getNativeProps(this, lastProps);
        nextProps = ReactDOMSelect.getNativeProps(this, nextProps);
        break;
      case 'textarea':
        ReactDOMTextarea.updateWrapper(this);
        lastProps = ReactDOMTextarea.getNativeProps(this, lastProps);
        nextProps = ReactDOMTextarea.getNativeProps(this, nextProps);
        break;
    }

    if (process.env.NODE_ENV !== 'production') {
      // If the context is reference-equal to the old one, pass down the same
      // processed object so the update bailout in ReactReconciler behaves
      // correctly (and identically in dev and prod). See #5005.
      if (this._unprocessedContextDev !== context) {
        this._unprocessedContextDev = context;
        this._processedContextDev = processChildContextDev(context, this);
      }
      context = this._processedContextDev;
    }

    assertValidProps(this, nextProps);
    this._updateDOMProperties(lastProps, nextProps, transaction, null);
    this._updateDOMChildren(lastProps, nextProps, transaction, context);

    if (!canDefineProperty && this._nodeWithLegacyProperties) {
      this._nodeWithLegacyProperties.props = nextProps;
    }

    if (this._tag === 'select') {
      // <select> value update needs to occur after <option> children
      // reconciliation
      transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
    }
  },

  /**
   * Reconciles the properties by detecting differences in property values and
   * updating the DOM as necessary. This function is probably the single most
   * critical path for performance optimization.
   *
   * TODO: Benchmark whether checking for changed values in memory actually
   *       improves performance (especially statically positioned elements).
   * TODO: Benchmark the effects of putting this at the top since 99% of props
   *       do not change for a given reconciliation.
   * TODO: Benchmark areas that can be improved with caching.
   *
   * @private
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {ReactReconcileTransaction} transaction
   * @param {?DOMElement} node
   */
  _updateDOMProperties: function (lastProps, nextProps, transaction, node) {
    var propKey;
    var styleName;
    var styleUpdates;
    for (propKey in lastProps) {
      if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey)) {
        continue;
      }
      if (propKey === STYLE) {
        var lastStyle = this._previousStyleCopy;
        for (styleName in lastStyle) {
          if (lastStyle.hasOwnProperty(styleName)) {
            styleUpdates = styleUpdates || {};
            styleUpdates[styleName] = '';
          }
        }
        this._previousStyleCopy = null;
      } else if (registrationNameModules.hasOwnProperty(propKey)) {
        if (lastProps[propKey]) {
          // Only call deleteListener if there was a listener previously or
          // else willDeleteListener gets called when there wasn't actually a
          // listener (e.g., onClick={null})
          deleteListener(this._rootNodeID, propKey);
        }
      } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
        if (!node) {
          node = ReactMount.getNode(this._rootNodeID);
        }
        DOMPropertyOperations.deleteValueForProperty(node, propKey);
      }
    }
    for (propKey in nextProps) {
      var nextProp = nextProps[propKey];
      var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps[propKey];
      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
        continue;
      }
      if (propKey === STYLE) {
        if (nextProp) {
          if (process.env.NODE_ENV !== 'production') {
            checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
            this._previousStyle = nextProp;
          }
          nextProp = this._previousStyleCopy = assign({}, nextProp);
        } else {
          this._previousStyleCopy = null;
        }
        if (lastProp) {
          // Unset styles on `lastProp` but not on `nextProp`.
          for (styleName in lastProp) {
            if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = '';
            }
          }
          // Update styles that changed since `lastProp`.
          for (styleName in nextProp) {
            if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = nextProp[styleName];
            }
          }
        } else {
          // Relies on `updateStylesByID` not mutating `styleUpdates`.
          styleUpdates = nextProp;
        }
      } else if (registrationNameModules.hasOwnProperty(propKey)) {
        if (nextProp) {
          enqueuePutListener(this._rootNodeID, propKey, nextProp, transaction);
        } else if (lastProp) {
          deleteListener(this._rootNodeID, propKey);
        }
      } else if (isCustomComponent(this._tag, nextProps)) {
        if (!node) {
          node = ReactMount.getNode(this._rootNodeID);
        }
        if (propKey === CHILDREN) {
          nextProp = null;
        }
        DOMPropertyOperations.setValueForAttribute(node, propKey, nextProp);
      } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
        if (!node) {
          node = ReactMount.getNode(this._rootNodeID);
        }
        // If we're updating to null or undefined, we should remove the property
        // from the DOM node instead of inadvertantly setting to a string. This
        // brings us in line with the same behavior we have on initial render.
        if (nextProp != null) {
          DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
        } else {
          DOMPropertyOperations.deleteValueForProperty(node, propKey);
        }
      }
    }
    if (styleUpdates) {
      if (!node) {
        node = ReactMount.getNode(this._rootNodeID);
      }
      CSSPropertyOperations.setValueForStyles(node, styleUpdates);
    }
  },

  /**
   * Reconciles the children with the various properties that affect the
   * children content.
   *
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   */
  _updateDOMChildren: function (lastProps, nextProps, transaction, context) {
    var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
    var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;

    var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
    var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;

    // Note the use of `!=` which checks for null or undefined.
    var lastChildren = lastContent != null ? null : lastProps.children;
    var nextChildren = nextContent != null ? null : nextProps.children;

    // If we're switching from children to content/html or vice versa, remove
    // the old content
    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
    if (lastChildren != null && nextChildren == null) {
      this.updateChildren(null, transaction, context);
    } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
      this.updateTextContent('');
    }

    if (nextContent != null) {
      if (lastContent !== nextContent) {
        this.updateTextContent('' + nextContent);
      }
    } else if (nextHtml != null) {
      if (lastHtml !== nextHtml) {
        this.updateMarkup('' + nextHtml);
      }
    } else if (nextChildren != null) {
      this.updateChildren(nextChildren, transaction, context);
    }
  },

  /**
   * Destroys all event registrations for this instance. Does not remove from
   * the DOM. That must be done by the parent.
   *
   * @internal
   */
  unmountComponent: function () {
    switch (this._tag) {
      case 'iframe':
      case 'img':
      case 'form':
      case 'video':
      case 'audio':
        var listeners = this._wrapperState.listeners;
        if (listeners) {
          for (var i = 0; i < listeners.length; i++) {
            listeners[i].remove();
          }
        }
        break;
      case 'input':
        ReactDOMInput.unmountWrapper(this);
        break;
      case 'html':
      case 'head':
      case 'body':
        /**
         * Components like <html> <head> and <body> can't be removed or added
         * easily in a cross-browser way, however it's valuable to be able to
         * take advantage of React's reconciliation for styling and <title>
         * management. So we just document it and throw in dangerous cases.
         */
        !false ? process.env.NODE_ENV !== 'production' ? invariant(false, '<%s> tried to unmount. Because of cross-browser quirks it is ' + 'impossible to unmount some top-level components (eg <html>, ' + '<head>, and <body>) reliably and efficiently. To fix this, have a ' + 'single top-level component that never unmounts render these ' + 'elements.', this._tag) : invariant(false) : undefined;
        break;
    }

    this.unmountChildren();
    ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
    this._rootNodeID = null;
    this._wrapperState = null;
    if (this._nodeWithLegacyProperties) {
      var node = this._nodeWithLegacyProperties;
      node._reactInternalComponent = null;
      this._nodeWithLegacyProperties = null;
    }
  },

  getPublicInstance: function () {
    if (!this._nodeWithLegacyProperties) {
      var node = ReactMount.getNode(this._rootNodeID);

      node._reactInternalComponent = this;
      node.getDOMNode = legacyGetDOMNode;
      node.isMounted = legacyIsMounted;
      node.setState = legacySetStateEtc;
      node.replaceState = legacySetStateEtc;
      node.forceUpdate = legacySetStateEtc;
      node.setProps = legacySetProps;
      node.replaceProps = legacyReplaceProps;

      if (process.env.NODE_ENV !== 'production') {
        if (canDefineProperty) {
          Object.defineProperties(node, legacyPropsDescriptor);
        } else {
          // updateComponent will update this property on subsequent renders
          node.props = this._currentElement.props;
        }
      } else {
        // updateComponent will update this property on subsequent renders
        node.props = this._currentElement.props;
      }

      this._nodeWithLegacyProperties = node;
    }
    return this._nodeWithLegacyProperties;
  }

};

ReactPerf.measureMethods(ReactDOMComponent, 'ReactDOMComponent', {
  mountComponent: 'mountComponent',
  updateComponent: 'updateComponent'
});

assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);

module.exports = ReactDOMComponent;
}).call(this,require('_process'))
},{"./AutoFocusUtils":4,"./CSSPropertyOperations":7,"./DOMProperty":12,"./DOMPropertyOperations":13,"./EventConstants":17,"./Object.assign":25,"./ReactBrowserEventEmitter":29,"./ReactComponentBrowserEnvironment":34,"./ReactDOMButton":39,"./ReactDOMInput":44,"./ReactDOMOption":45,"./ReactDOMSelect":46,"./ReactDOMTextarea":50,"./ReactMount":68,"./ReactMultiChild":69,"./ReactPerf":74,"./ReactUpdateQueue":85,"./canDefineProperty":107,"./escapeTextContentForBrowser":110,"./isEventSupported":122,"./setInnerHTML":127,"./setTextContent":128,"./validateDOMNesting":131,"_process":2,"fbjs/lib/invariant":147,"fbjs/lib/keyOf":151,"fbjs/lib/shallowEqual":156,"fbjs/lib/warning":158}],41:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMFactories
 * @typechecks static-only
 */

'use strict';

var ReactElement = require('./ReactElement');
var ReactElementValidator = require('./ReactElementValidator');

var mapObject = require('fbjs/lib/mapObject');

/**
 * Create a factory that creates HTML tag elements.
 *
 * @param {string} tag Tag name (e.g. `div`).
 * @private
 */
function createDOMFactory(tag) {
  if (process.env.NODE_ENV !== 'production') {
    return ReactElementValidator.createFactory(tag);
  }
  return ReactElement.createFactory(tag);
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */
var ReactDOMFactories = mapObject({
  a: 'a',
  abbr: 'abbr',
  address: 'address',
  area: 'area',
  article: 'article',
  aside: 'aside',
  audio: 'audio',
  b: 'b',
  base: 'base',
  bdi: 'bdi',
  bdo: 'bdo',
  big: 'big',
  blockquote: 'blockquote',
  body: 'body',
  br: 'br',
  button: 'button',
  canvas: 'canvas',
  caption: 'caption',
  cite: 'cite',
  code: 'code',
  col: 'col',
  colgroup: 'colgroup',
  data: 'data',
  datalist: 'datalist',
  dd: 'dd',
  del: 'del',
  details: 'details',
  dfn: 'dfn',
  dialog: 'dialog',
  div: 'div',
  dl: 'dl',
  dt: 'dt',
  em: 'em',
  embed: 'embed',
  fieldset: 'fieldset',
  figcaption: 'figcaption',
  figure: 'figure',
  footer: 'footer',
  form: 'form',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  head: 'head',
  header: 'header',
  hgroup: 'hgroup',
  hr: 'hr',
  html: 'html',
  i: 'i',
  iframe: 'iframe',
  img: 'img',
  input: 'input',
  ins: 'ins',
  kbd: 'kbd',
  keygen: 'keygen',
  label: 'label',
  legend: 'legend',
  li: 'li',
  link: 'link',
  main: 'main',
  map: 'map',
  mark: 'mark',
  menu: 'menu',
  menuitem: 'menuitem',
  meta: 'meta',
  meter: 'meter',
  nav: 'nav',
  noscript: 'noscript',
  object: 'object',
  ol: 'ol',
  optgroup: 'optgroup',
  option: 'option',
  output: 'output',
  p: 'p',
  param: 'param',
  picture: 'picture',
  pre: 'pre',
  progress: 'progress',
  q: 'q',
  rp: 'rp',
  rt: 'rt',
  ruby: 'ruby',
  s: 's',
  samp: 'samp',
  script: 'script',
  section: 'section',
  select: 'select',
  small: 'small',
  source: 'source',
  span: 'span',
  strong: 'strong',
  style: 'style',
  sub: 'sub',
  summary: 'summary',
  sup: 'sup',
  table: 'table',
  tbody: 'tbody',
  td: 'td',
  textarea: 'textarea',
  tfoot: 'tfoot',
  th: 'th',
  thead: 'thead',
  time: 'time',
  title: 'title',
  tr: 'tr',
  track: 'track',
  u: 'u',
  ul: 'ul',
  'var': 'var',
  video: 'video',
  wbr: 'wbr',

  // SVG
  circle: 'circle',
  clipPath: 'clipPath',
  defs: 'defs',
  ellipse: 'ellipse',
  g: 'g',
  image: 'image',
  line: 'line',
  linearGradient: 'linearGradient',
  mask: 'mask',
  path: 'path',
  pattern: 'pattern',
  polygon: 'polygon',
  polyline: 'polyline',
  radialGradient: 'radialGradient',
  rect: 'rect',
  stop: 'stop',
  svg: 'svg',
  text: 'text',
  tspan: 'tspan'

}, createDOMFactory);

module.exports = ReactDOMFactories;
}).call(this,require('_process'))
},{"./ReactElement":55,"./ReactElementValidator":56,"_process":2,"fbjs/lib/mapObject":152}],42:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMFeatureFlags
 */

'use strict';

var ReactDOMFeatureFlags = {
  useCreateElement: false
};

module.exports = ReactDOMFeatureFlags;
},{}],43:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMIDOperations
 * @typechecks static-only
 */

'use strict';

var DOMChildrenOperations = require('./DOMChildrenOperations');
var DOMPropertyOperations = require('./DOMPropertyOperations');
var ReactMount = require('./ReactMount');
var ReactPerf = require('./ReactPerf');

var invariant = require('fbjs/lib/invariant');

/**
 * Errors for properties that should not be updated with `updatePropertyByID()`.
 *
 * @type {object}
 * @private
 */
var INVALID_PROPERTY_ERRORS = {
  dangerouslySetInnerHTML: '`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',
  style: '`style` must be set using `updateStylesByID()`.'
};

/**
 * Operations used to process updates to DOM nodes.
 */
var ReactDOMIDOperations = {

  /**
   * Updates a DOM node with new property values. This should only be used to
   * update DOM properties in `DOMProperty`.
   *
   * @param {string} id ID of the node to update.
   * @param {string} name A valid property name, see `DOMProperty`.
   * @param {*} value New value of the property.
   * @internal
   */
  updatePropertyByID: function (id, name, value) {
    var node = ReactMount.getNode(id);
    !!INVALID_PROPERTY_ERRORS.hasOwnProperty(name) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'updatePropertyByID(...): %s', INVALID_PROPERTY_ERRORS[name]) : invariant(false) : undefined;

    // If we're updating to null or undefined, we should remove the property
    // from the DOM node instead of inadvertantly setting to a string. This
    // brings us in line with the same behavior we have on initial render.
    if (value != null) {
      DOMPropertyOperations.setValueForProperty(node, name, value);
    } else {
      DOMPropertyOperations.deleteValueForProperty(node, name);
    }
  },

  /**
   * Replaces a DOM node that exists in the document with markup.
   *
   * @param {string} id ID of child to be replaced.
   * @param {string} markup Dangerous markup to inject in place of child.
   * @internal
   * @see {Danger.dangerouslyReplaceNodeWithMarkup}
   */
  dangerouslyReplaceNodeWithMarkupByID: function (id, markup) {
    var node = ReactMount.getNode(id);
    DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
  },

  /**
   * Updates a component's children by processing a series of updates.
   *
   * @param {array<object>} updates List of update configurations.
   * @param {array<string>} markup List of markup strings.
   * @internal
   */
  dangerouslyProcessChildrenUpdates: function (updates, markup) {
    for (var i = 0; i < updates.length; i++) {
      updates[i].parentNode = ReactMount.getNode(updates[i].parentID);
    }
    DOMChildrenOperations.processUpdates(updates, markup);
  }
};

ReactPerf.measureMethods(ReactDOMIDOperations, 'ReactDOMIDOperations', {
  dangerouslyReplaceNodeWithMarkupByID: 'dangerouslyReplaceNodeWithMarkupByID',
  dangerouslyProcessChildrenUpdates: 'dangerouslyProcessChildrenUpdates'
});

module.exports = ReactDOMIDOperations;
}).call(this,require('_process'))
},{"./DOMChildrenOperations":11,"./DOMPropertyOperations":13,"./ReactMount":68,"./ReactPerf":74,"_process":2,"fbjs/lib/invariant":147}],44:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMInput
 */

'use strict';

var ReactDOMIDOperations = require('./ReactDOMIDOperations');
var LinkedValueUtils = require('./LinkedValueUtils');
var ReactMount = require('./ReactMount');
var ReactUpdates = require('./ReactUpdates');

var assign = require('./Object.assign');
var invariant = require('fbjs/lib/invariant');

var instancesByReactID = {};

function forceUpdateIfMounted() {
  if (this._rootNodeID) {
    // DOM component is still mounted; update
    ReactDOMInput.updateWrapper(this);
  }
}

/**
 * Implements an <input> native component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */
var ReactDOMInput = {
  getNativeProps: function (inst, props, context) {
    var value = LinkedValueUtils.getValue(props);
    var checked = LinkedValueUtils.getChecked(props);

    var nativeProps = assign({}, props, {
      defaultChecked: undefined,
      defaultValue: undefined,
      value: value != null ? value : inst._wrapperState.initialValue,
      checked: checked != null ? checked : inst._wrapperState.initialChecked,
      onChange: inst._wrapperState.onChange
    });

    return nativeProps;
  },

  mountWrapper: function (inst, props) {
    if (process.env.NODE_ENV !== 'production') {
      LinkedValueUtils.checkPropTypes('input', props, inst._currentElement._owner);
    }

    var defaultValue = props.defaultValue;
    inst._wrapperState = {
      initialChecked: props.defaultChecked || false,
      initialValue: defaultValue != null ? defaultValue : null,
      onChange: _handleChange.bind(inst)
    };
  },

  mountReadyWrapper: function (inst) {
    // Can't be in mountWrapper or else server rendering leaks.
    instancesByReactID[inst._rootNodeID] = inst;
  },

  unmountWrapper: function (inst) {
    delete instancesByReactID[inst._rootNodeID];
  },

  updateWrapper: function (inst) {
    var props = inst._currentElement.props;

    // TODO: Shouldn't this be getChecked(props)?
    var checked = props.checked;
    if (checked != null) {
      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'checked', checked || false);
    }

    var value = LinkedValueUtils.getValue(props);
    if (value != null) {
      // Cast `value` to a string to ensure the value is set correctly. While
      // browsers typically do this as necessary, jsdom doesn't.
      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'value', '' + value);
    }
  }
};

function _handleChange(event) {
  var props = this._currentElement.props;

  var returnValue = LinkedValueUtils.executeOnChange(props, event);

  // Here we use asap to wait until all updates have propagated, which
  // is important when using controlled components within layers:
  // https://github.com/facebook/react/issues/1698
  ReactUpdates.asap(forceUpdateIfMounted, this);

  var name = props.name;
  if (props.type === 'radio' && name != null) {
    var rootNode = ReactMount.getNode(this._rootNodeID);
    var queryRoot = rootNode;

    while (queryRoot.parentNode) {
      queryRoot = queryRoot.parentNode;
    }

    // If `rootNode.form` was non-null, then we could try `form.elements`,
    // but that sometimes behaves strangely in IE8. We could also try using
    // `form.getElementsByName`, but that will only return direct children
    // and won't include inputs that use the HTML5 `form=` attribute. Since
    // the input might not even be in a form, let's just use the global
    // `querySelectorAll` to ensure we don't miss anything.
    var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');

    for (var i = 0; i < group.length; i++) {
      var otherNode = group[i];
      if (otherNode === rootNode || otherNode.form !== rootNode.form) {
        continue;
      }
      // This will throw if radio buttons rendered by different copies of React
      // and the same name are rendered into the same form (same as #1939).
      // That's probably okay; we don't support it just as we don't support
      // mixing React with non-React.
      var otherID = ReactMount.getID(otherNode);
      !otherID ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the ' + 'same `name` is not supported.') : invariant(false) : undefined;
      var otherInstance = instancesByReactID[otherID];
      !otherInstance ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOMInput: Unknown radio button ID %s.', otherID) : invariant(false) : undefined;
      // If this is a controlled radio button group, forcing the input that
      // was previously checked to update will cause it to be come re-checked
      // as appropriate.
      ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
    }
  }

  return returnValue;
}

module.exports = ReactDOMInput;
}).call(this,require('_process'))
},{"./LinkedValueUtils":24,"./Object.assign":25,"./ReactDOMIDOperations":43,"./ReactMount":68,"./ReactUpdates":86,"_process":2,"fbjs/lib/invariant":147}],45:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMOption
 */

'use strict';

var ReactChildren = require('./ReactChildren');
var ReactDOMSelect = require('./ReactDOMSelect');

var assign = require('./Object.assign');
var warning = require('fbjs/lib/warning');

var valueContextKey = ReactDOMSelect.valueContextKey;

/**
 * Implements an <option> native component that warns when `selected` is set.
 */
var ReactDOMOption = {
  mountWrapper: function (inst, props, context) {
    // TODO (yungsters): Remove support for `selected` in <option>.
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : undefined;
    }

    // Look up whether this option is 'selected' via context
    var selectValue = context[valueContextKey];

    // If context key is null (e.g., no specified value or after initial mount)
    // or missing (e.g., for <datalist>), we don't change props.selected
    var selected = null;
    if (selectValue != null) {
      selected = false;
      if (Array.isArray(selectValue)) {
        // multiple
        for (var i = 0; i < selectValue.length; i++) {
          if ('' + selectValue[i] === '' + props.value) {
            selected = true;
            break;
          }
        }
      } else {
        selected = '' + selectValue === '' + props.value;
      }
    }

    inst._wrapperState = { selected: selected };
  },

  getNativeProps: function (inst, props, context) {
    var nativeProps = assign({ selected: undefined, children: undefined }, props);

    // Read state only from initial mount because <select> updates value
    // manually; we need the initial state only for server rendering
    if (inst._wrapperState.selected != null) {
      nativeProps.selected = inst._wrapperState.selected;
    }

    var content = '';

    // Flatten children and warn if they aren't strings or numbers;
    // invalid types are ignored.
    ReactChildren.forEach(props.children, function (child) {
      if (child == null) {
        return;
      }
      if (typeof child === 'string' || typeof child === 'number') {
        content += child;
      } else {
        process.env.NODE_ENV !== 'production' ? warning(false, 'Only strings and numbers are supported as <option> children.') : undefined;
      }
    });

    nativeProps.children = content;
    return nativeProps;
  }

};

module.exports = ReactDOMOption;
}).call(this,require('_process'))
},{"./Object.assign":25,"./ReactChildren":31,"./ReactDOMSelect":46,"_process":2,"fbjs/lib/warning":158}],46:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelect
 */

'use strict';

var LinkedValueUtils = require('./LinkedValueUtils');
var ReactMount = require('./ReactMount');
var ReactUpdates = require('./ReactUpdates');

var assign = require('./Object.assign');
var warning = require('fbjs/lib/warning');

var valueContextKey = '__ReactDOMSelect_value$' + Math.random().toString(36).slice(2);

function updateOptionsIfPendingUpdateAndMounted() {
  if (this._rootNodeID && this._wrapperState.pendingUpdate) {
    this._wrapperState.pendingUpdate = false;

    var props = this._currentElement.props;
    var value = LinkedValueUtils.getValue(props);

    if (value != null) {
      updateOptions(this, Boolean(props.multiple), value);
    }
  }
}

function getDeclarationErrorAddendum(owner) {
  if (owner) {
    var name = owner.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

var valuePropNames = ['value', 'defaultValue'];

/**
 * Validation function for `value` and `defaultValue`.
 * @private
 */
function checkSelectPropTypes(inst, props) {
  var owner = inst._currentElement._owner;
  LinkedValueUtils.checkPropTypes('select', props, owner);

  for (var i = 0; i < valuePropNames.length; i++) {
    var propName = valuePropNames[i];
    if (props[propName] == null) {
      continue;
    }
    if (props.multiple) {
      process.env.NODE_ENV !== 'production' ? warning(Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum(owner)) : undefined;
    } else {
      process.env.NODE_ENV !== 'production' ? warning(!Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum(owner)) : undefined;
    }
  }
}

/**
 * @param {ReactDOMComponent} inst
 * @param {boolean} multiple
 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
 * @private
 */
function updateOptions(inst, multiple, propValue) {
  var selectedValue, i;
  var options = ReactMount.getNode(inst._rootNodeID).options;

  if (multiple) {
    selectedValue = {};
    for (i = 0; i < propValue.length; i++) {
      selectedValue['' + propValue[i]] = true;
    }
    for (i = 0; i < options.length; i++) {
      var selected = selectedValue.hasOwnProperty(options[i].value);
      if (options[i].selected !== selected) {
        options[i].selected = selected;
      }
    }
  } else {
    // Do not set `select.value` as exact behavior isn't consistent across all
    // browsers for all cases.
    selectedValue = '' + propValue;
    for (i = 0; i < options.length; i++) {
      if (options[i].value === selectedValue) {
        options[i].selected = true;
        return;
      }
    }
    if (options.length) {
      options[0].selected = true;
    }
  }
}

/**
 * Implements a <select> native component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */
var ReactDOMSelect = {
  valueContextKey: valueContextKey,

  getNativeProps: function (inst, props, context) {
    return assign({}, props, {
      onChange: inst._wrapperState.onChange,
      value: undefined
    });
  },

  mountWrapper: function (inst, props) {
    if (process.env.NODE_ENV !== 'production') {
      checkSelectPropTypes(inst, props);
    }

    var value = LinkedValueUtils.getValue(props);
    inst._wrapperState = {
      pendingUpdate: false,
      initialValue: value != null ? value : props.defaultValue,
      onChange: _handleChange.bind(inst),
      wasMultiple: Boolean(props.multiple)
    };
  },

  processChildContext: function (inst, props, context) {
    // Pass down initial value so initial generated markup has correct
    // `selected` attributes
    var childContext = assign({}, context);
    childContext[valueContextKey] = inst._wrapperState.initialValue;
    return childContext;
  },

  postUpdateWrapper: function (inst) {
    var props = inst._currentElement.props;

    // After the initial mount, we control selected-ness manually so don't pass
    // the context value down
    inst._wrapperState.initialValue = undefined;

    var wasMultiple = inst._wrapperState.wasMultiple;
    inst._wrapperState.wasMultiple = Boolean(props.multiple);

    var value = LinkedValueUtils.getValue(props);
    if (value != null) {
      inst._wrapperState.pendingUpdate = false;
      updateOptions(inst, Boolean(props.multiple), value);
    } else if (wasMultiple !== Boolean(props.multiple)) {
      // For simplicity, reapply `defaultValue` if `multiple` is toggled.
      if (props.defaultValue != null) {
        updateOptions(inst, Boolean(props.multiple), props.defaultValue);
      } else {
        // Revert the select back to its default unselected state.
        updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');
      }
    }
  }
};

function _handleChange(event) {
  var props = this._currentElement.props;
  var returnValue = LinkedValueUtils.executeOnChange(props, event);

  this._wrapperState.pendingUpdate = true;
  ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
  return returnValue;
}

module.exports = ReactDOMSelect;
}).call(this,require('_process'))
},{"./LinkedValueUtils":24,"./Object.assign":25,"./ReactMount":68,"./ReactUpdates":86,"_process":2,"fbjs/lib/warning":158}],47:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelection
 */

'use strict';

var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var getNodeForCharacterOffset = require('./getNodeForCharacterOffset');
var getTextContentAccessor = require('./getTextContentAccessor');

/**
 * While `isCollapsed` is available on the Selection object and `collapsed`
 * is available on the Range object, IE11 sometimes gets them wrong.
 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
 */
function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
  return anchorNode === focusNode && anchorOffset === focusOffset;
}

/**
 * Get the appropriate anchor and focus node/offset pairs for IE.
 *
 * The catch here is that IE's selection API doesn't provide information
 * about whether the selection is forward or backward, so we have to
 * behave as though it's always forward.
 *
 * IE text differs from modern selection in that it behaves as though
 * block elements end with a new line. This means character offsets will
 * differ between the two APIs.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function getIEOffsets(node) {
  var selection = document.selection;
  var selectedRange = selection.createRange();
  var selectedLength = selectedRange.text.length;

  // Duplicate selection so we can move range without breaking user selection.
  var fromStart = selectedRange.duplicate();
  fromStart.moveToElementText(node);
  fromStart.setEndPoint('EndToStart', selectedRange);

  var startOffset = fromStart.text.length;
  var endOffset = startOffset + selectedLength;

  return {
    start: startOffset,
    end: endOffset
  };
}

/**
 * @param {DOMElement} node
 * @return {?object}
 */
function getModernOffsets(node) {
  var selection = window.getSelection && window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return null;
  }

  var anchorNode = selection.anchorNode;
  var anchorOffset = selection.anchorOffset;
  var focusNode = selection.focusNode;
  var focusOffset = selection.focusOffset;

  var currentRange = selection.getRangeAt(0);

  // In Firefox, range.startContainer and range.endContainer can be "anonymous
  // divs", e.g. the up/down buttons on an <input type="number">. Anonymous
  // divs do not seem to expose properties, triggering a "Permission denied
  // error" if any of its properties are accessed. The only seemingly possible
  // way to avoid erroring is to access a property that typically works for
  // non-anonymous divs and catch any error that may otherwise arise. See
  // https://bugzilla.mozilla.org/show_bug.cgi?id=208427
  try {
    /* eslint-disable no-unused-expressions */
    currentRange.startContainer.nodeType;
    currentRange.endContainer.nodeType;
    /* eslint-enable no-unused-expressions */
  } catch (e) {
    return null;
  }

  // If the node and offset values are the same, the selection is collapsed.
  // `Selection.isCollapsed` is available natively, but IE sometimes gets
  // this value wrong.
  var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);

  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

  var tempRange = currentRange.cloneRange();
  tempRange.selectNodeContents(node);
  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

  var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);

  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
  var end = start + rangeLength;

  // Detect whether the selection is backward.
  var detectionRange = document.createRange();
  detectionRange.setStart(anchorNode, anchorOffset);
  detectionRange.setEnd(focusNode, focusOffset);
  var isBackward = detectionRange.collapsed;

  return {
    start: isBackward ? end : start,
    end: isBackward ? start : end
  };
}

/**
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function setIEOffsets(node, offsets) {
  var range = document.selection.createRange().duplicate();
  var start, end;

  if (typeof offsets.end === 'undefined') {
    start = offsets.start;
    end = start;
  } else if (offsets.start > offsets.end) {
    start = offsets.end;
    end = offsets.start;
  } else {
    start = offsets.start;
    end = offsets.end;
  }

  range.moveToElementText(node);
  range.moveStart('character', start);
  range.setEndPoint('EndToStart', range);
  range.moveEnd('character', end - start);
  range.select();
}

/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function setModernOffsets(node, offsets) {
  if (!window.getSelection) {
    return;
  }

  var selection = window.getSelection();
  var length = node[getTextContentAccessor()].length;
  var start = Math.min(offsets.start, length);
  var end = typeof offsets.end === 'undefined' ? start : Math.min(offsets.end, length);

  // IE 11 uses modern selection, but doesn't support the extend method.
  // Flip backward selections, so we can set with a single range.
  if (!selection.extend && start > end) {
    var temp = end;
    end = start;
    start = temp;
  }

  var startMarker = getNodeForCharacterOffset(node, start);
  var endMarker = getNodeForCharacterOffset(node, end);

  if (startMarker && endMarker) {
    var range = document.createRange();
    range.setStart(startMarker.node, startMarker.offset);
    selection.removeAllRanges();

    if (start > end) {
      selection.addRange(range);
      selection.extend(endMarker.node, endMarker.offset);
    } else {
      range.setEnd(endMarker.node, endMarker.offset);
      selection.addRange(range);
    }
  }
}

var useIEOffsets = ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);

var ReactDOMSelection = {
  /**
   * @param {DOMElement} node
   */
  getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,

  /**
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */
  setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
};

module.exports = ReactDOMSelection;
},{"./getNodeForCharacterOffset":119,"./getTextContentAccessor":120,"fbjs/lib/ExecutionEnvironment":133}],48:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMServer
 */

'use strict';

var ReactDefaultInjection = require('./ReactDefaultInjection');
var ReactServerRendering = require('./ReactServerRendering');
var ReactVersion = require('./ReactVersion');

ReactDefaultInjection.inject();

var ReactDOMServer = {
  renderToString: ReactServerRendering.renderToString,
  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
  version: ReactVersion
};

module.exports = ReactDOMServer;
},{"./ReactDefaultInjection":52,"./ReactServerRendering":83,"./ReactVersion":87}],49:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextComponent
 * @typechecks static-only
 */

'use strict';

var DOMChildrenOperations = require('./DOMChildrenOperations');
var DOMPropertyOperations = require('./DOMPropertyOperations');
var ReactComponentBrowserEnvironment = require('./ReactComponentBrowserEnvironment');
var ReactMount = require('./ReactMount');

var assign = require('./Object.assign');
var escapeTextContentForBrowser = require('./escapeTextContentForBrowser');
var setTextContent = require('./setTextContent');
var validateDOMNesting = require('./validateDOMNesting');

/**
 * Text nodes violate a couple assumptions that React makes about components:
 *
 *  - When mounting text into the DOM, adjacent text nodes are merged.
 *  - Text nodes cannot be assigned a React root ID.
 *
 * This component is used to wrap strings in elements so that they can undergo
 * the same reconciliation that is applied to elements.
 *
 * TODO: Investigate representing React components in the DOM with text nodes.
 *
 * @class ReactDOMTextComponent
 * @extends ReactComponent
 * @internal
 */
var ReactDOMTextComponent = function (props) {
  // This constructor and its argument is currently used by mocks.
};

assign(ReactDOMTextComponent.prototype, {

  /**
   * @param {ReactText} text
   * @internal
   */
  construct: function (text) {
    // TODO: This is really a ReactText (ReactNode), not a ReactElement
    this._currentElement = text;
    this._stringText = '' + text;

    // Properties
    this._rootNodeID = null;
    this._mountIndex = 0;
  },

  /**
   * Creates the markup for this text node. This node is not intended to have
   * any features besides containing text content.
   *
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup for this text node.
   * @internal
   */
  mountComponent: function (rootID, transaction, context) {
    if (process.env.NODE_ENV !== 'production') {
      if (context[validateDOMNesting.ancestorInfoContextKey]) {
        validateDOMNesting('span', null, context[validateDOMNesting.ancestorInfoContextKey]);
      }
    }

    this._rootNodeID = rootID;
    if (transaction.useCreateElement) {
      var ownerDocument = context[ReactMount.ownerDocumentContextKey];
      var el = ownerDocument.createElement('span');
      DOMPropertyOperations.setAttributeForID(el, rootID);
      // Populate node cache
      ReactMount.getID(el);
      setTextContent(el, this._stringText);
      return el;
    } else {
      var escapedText = escapeTextContentForBrowser(this._stringText);

      if (transaction.renderToStaticMarkup) {
        // Normally we'd wrap this in a `span` for the reasons stated above, but
        // since this is a situation where React won't take over (static pages),
        // we can simply return the text as it is.
        return escapedText;
      }

      return '<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' + escapedText + '</span>';
    }
  },

  /**
   * Updates this component by updating the text content.
   *
   * @param {ReactText} nextText The next text content
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  receiveComponent: function (nextText, transaction) {
    if (nextText !== this._currentElement) {
      this._currentElement = nextText;
      var nextStringText = '' + nextText;
      if (nextStringText !== this._stringText) {
        // TODO: Save this as pending props and use performUpdateIfNecessary
        // and/or updateComponent to do the actual update for consistency with
        // other component types?
        this._stringText = nextStringText;
        var node = ReactMount.getNode(this._rootNodeID);
        DOMChildrenOperations.updateTextContent(node, nextStringText);
      }
    }
  },

  unmountComponent: function () {
    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
  }

});

module.exports = ReactDOMTextComponent;
}).call(this,require('_process'))
},{"./DOMChildrenOperations":11,"./DOMPropertyOperations":13,"./Object.assign":25,"./ReactComponentBrowserEnvironment":34,"./ReactMount":68,"./escapeTextContentForBrowser":110,"./setTextContent":128,"./validateDOMNesting":131,"_process":2}],50:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextarea
 */

'use strict';

var LinkedValueUtils = require('./LinkedValueUtils');
var ReactDOMIDOperations = require('./ReactDOMIDOperations');
var ReactUpdates = require('./ReactUpdates');

var assign = require('./Object.assign');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

function forceUpdateIfMounted() {
  if (this._rootNodeID) {
    // DOM component is still mounted; update
    ReactDOMTextarea.updateWrapper(this);
  }
}

/**
 * Implements a <textarea> native component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */
var ReactDOMTextarea = {
  getNativeProps: function (inst, props, context) {
    !(props.dangerouslySetInnerHTML == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : invariant(false) : undefined;

    // Always set children to the same thing. In IE9, the selection range will
    // get reset if `textContent` is mutated.
    var nativeProps = assign({}, props, {
      defaultValue: undefined,
      value: undefined,
      children: inst._wrapperState.initialValue,
      onChange: inst._wrapperState.onChange
    });

    return nativeProps;
  },

  mountWrapper: function (inst, props) {
    if (process.env.NODE_ENV !== 'production') {
      LinkedValueUtils.checkPropTypes('textarea', props, inst._currentElement._owner);
    }

    var defaultValue = props.defaultValue;
    // TODO (yungsters): Remove support for children content in <textarea>.
    var children = props.children;
    if (children != null) {
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : undefined;
      }
      !(defaultValue == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : invariant(false) : undefined;
      if (Array.isArray(children)) {
        !(children.length <= 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, '<textarea> can only have at most one child.') : invariant(false) : undefined;
        children = children[0];
      }

      defaultValue = '' + children;
    }
    if (defaultValue == null) {
      defaultValue = '';
    }
    var value = LinkedValueUtils.getValue(props);

    inst._wrapperState = {
      // We save the initial value so that `ReactDOMComponent` doesn't update
      // `textContent` (unnecessary since we update value).
      // The initial value can be a boolean or object so that's why it's
      // forced to be a string.
      initialValue: '' + (value != null ? value : defaultValue),
      onChange: _handleChange.bind(inst)
    };
  },

  updateWrapper: function (inst) {
    var props = inst._currentElement.props;
    var value = LinkedValueUtils.getValue(props);
    if (value != null) {
      // Cast `value` to a string to ensure the value is set correctly. While
      // browsers typically do this as necessary, jsdom doesn't.
      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'value', '' + value);
    }
  }
};

function _handleChange(event) {
  var props = this._currentElement.props;
  var returnValue = LinkedValueUtils.executeOnChange(props, event);
  ReactUpdates.asap(forceUpdateIfMounted, this);
  return returnValue;
}

module.exports = ReactDOMTextarea;
}).call(this,require('_process'))
},{"./LinkedValueUtils":24,"./Object.assign":25,"./ReactDOMIDOperations":43,"./ReactUpdates":86,"_process":2,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],51:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultBatchingStrategy
 */

'use strict';

var ReactUpdates = require('./ReactUpdates');
var Transaction = require('./Transaction');

var assign = require('./Object.assign');
var emptyFunction = require('fbjs/lib/emptyFunction');

var RESET_BATCHED_UPDATES = {
  initialize: emptyFunction,
  close: function () {
    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
  }
};

var FLUSH_BATCHED_UPDATES = {
  initialize: emptyFunction,
  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
};

var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];

function ReactDefaultBatchingStrategyTransaction() {
  this.reinitializeTransaction();
}

assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {
  getTransactionWrappers: function () {
    return TRANSACTION_WRAPPERS;
  }
});

var transaction = new ReactDefaultBatchingStrategyTransaction();

var ReactDefaultBatchingStrategy = {
  isBatchingUpdates: false,

  /**
   * Call the provided function in a context within which calls to `setState`
   * and friends are batched such that components aren't updated unnecessarily.
   */
  batchedUpdates: function (callback, a, b, c, d, e) {
    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

    ReactDefaultBatchingStrategy.isBatchingUpdates = true;

    // The code is written this way to avoid extra allocations
    if (alreadyBatchingUpdates) {
      callback(a, b, c, d, e);
    } else {
      transaction.perform(callback, null, a, b, c, d, e);
    }
  }
};

module.exports = ReactDefaultBatchingStrategy;
},{"./Object.assign":25,"./ReactUpdates":86,"./Transaction":103,"fbjs/lib/emptyFunction":139}],52:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultInjection
 */

'use strict';

var BeforeInputEventPlugin = require('./BeforeInputEventPlugin');
var ChangeEventPlugin = require('./ChangeEventPlugin');
var ClientReactRootIndex = require('./ClientReactRootIndex');
var DefaultEventPluginOrder = require('./DefaultEventPluginOrder');
var EnterLeaveEventPlugin = require('./EnterLeaveEventPlugin');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
var HTMLDOMPropertyConfig = require('./HTMLDOMPropertyConfig');
var ReactBrowserComponentMixin = require('./ReactBrowserComponentMixin');
var ReactComponentBrowserEnvironment = require('./ReactComponentBrowserEnvironment');
var ReactDefaultBatchingStrategy = require('./ReactDefaultBatchingStrategy');
var ReactDOMComponent = require('./ReactDOMComponent');
var ReactDOMTextComponent = require('./ReactDOMTextComponent');
var ReactEventListener = require('./ReactEventListener');
var ReactInjection = require('./ReactInjection');
var ReactInstanceHandles = require('./ReactInstanceHandles');
var ReactMount = require('./ReactMount');
var ReactReconcileTransaction = require('./ReactReconcileTransaction');
var SelectEventPlugin = require('./SelectEventPlugin');
var ServerReactRootIndex = require('./ServerReactRootIndex');
var SimpleEventPlugin = require('./SimpleEventPlugin');
var SVGDOMPropertyConfig = require('./SVGDOMPropertyConfig');

var alreadyInjected = false;

function inject() {
  if (alreadyInjected) {
    // TODO: This is currently true because these injections are shared between
    // the client and the server package. They should be built independently
    // and not share any injection state. Then this problem will be solved.
    return;
  }
  alreadyInjected = true;

  ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);

  /**
   * Inject modules for resolving DOM hierarchy and plugin ordering.
   */
  ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
  ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
  ReactInjection.EventPluginHub.injectMount(ReactMount);

  /**
   * Some important event plugins included by default (without having to require
   * them).
   */
  ReactInjection.EventPluginHub.injectEventPluginsByName({
    SimpleEventPlugin: SimpleEventPlugin,
    EnterLeaveEventPlugin: EnterLeaveEventPlugin,
    ChangeEventPlugin: ChangeEventPlugin,
    SelectEventPlugin: SelectEventPlugin,
    BeforeInputEventPlugin: BeforeInputEventPlugin
  });

  ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);

  ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);

  ReactInjection.Class.injectMixin(ReactBrowserComponentMixin);

  ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
  ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);

  ReactInjection.EmptyComponent.injectEmptyComponent('noscript');

  ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
  ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);

  ReactInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment.canUseDOM ? ClientReactRootIndex.createReactRootIndex : ServerReactRootIndex.createReactRootIndex);

  ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);

  if (process.env.NODE_ENV !== 'production') {
    var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
    if (/[?&]react_perf\b/.test(url)) {
      var ReactDefaultPerf = require('./ReactDefaultPerf');
      ReactDefaultPerf.start();
    }
  }
}

module.exports = {
  inject: inject
};
}).call(this,require('_process'))
},{"./BeforeInputEventPlugin":5,"./ChangeEventPlugin":9,"./ClientReactRootIndex":10,"./DefaultEventPluginOrder":15,"./EnterLeaveEventPlugin":16,"./HTMLDOMPropertyConfig":23,"./ReactBrowserComponentMixin":28,"./ReactComponentBrowserEnvironment":34,"./ReactDOMComponent":40,"./ReactDOMTextComponent":49,"./ReactDefaultBatchingStrategy":51,"./ReactDefaultPerf":53,"./ReactEventListener":61,"./ReactInjection":62,"./ReactInstanceHandles":64,"./ReactMount":68,"./ReactReconcileTransaction":78,"./SVGDOMPropertyConfig":88,"./SelectEventPlugin":89,"./ServerReactRootIndex":90,"./SimpleEventPlugin":91,"_process":2,"fbjs/lib/ExecutionEnvironment":133}],53:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerf
 * @typechecks static-only
 */

'use strict';

var DOMProperty = require('./DOMProperty');
var ReactDefaultPerfAnalysis = require('./ReactDefaultPerfAnalysis');
var ReactMount = require('./ReactMount');
var ReactPerf = require('./ReactPerf');

var performanceNow = require('fbjs/lib/performanceNow');

function roundFloat(val) {
  return Math.floor(val * 100) / 100;
}

function addValue(obj, key, val) {
  obj[key] = (obj[key] || 0) + val;
}

var ReactDefaultPerf = {
  _allMeasurements: [], // last item in the list is the current one
  _mountStack: [0],
  _injected: false,

  start: function () {
    if (!ReactDefaultPerf._injected) {
      ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
    }

    ReactDefaultPerf._allMeasurements.length = 0;
    ReactPerf.enableMeasure = true;
  },

  stop: function () {
    ReactPerf.enableMeasure = false;
  },

  getLastMeasurements: function () {
    return ReactDefaultPerf._allMeasurements;
  },

  printExclusive: function (measurements) {
    measurements = measurements || ReactDefaultPerf._allMeasurements;
    var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
    console.table(summary.map(function (item) {
      return {
        'Component class name': item.componentName,
        'Total inclusive time (ms)': roundFloat(item.inclusive),
        'Exclusive mount time (ms)': roundFloat(item.exclusive),
        'Exclusive render time (ms)': roundFloat(item.render),
        'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
        'Render time per instance (ms)': roundFloat(item.render / item.count),
        'Instances': item.count
      };
    }));
    // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
    // number.
  },

  printInclusive: function (measurements) {
    measurements = measurements || ReactDefaultPerf._allMeasurements;
    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
    console.table(summary.map(function (item) {
      return {
        'Owner > component': item.componentName,
        'Inclusive time (ms)': roundFloat(item.time),
        'Instances': item.count
      };
    }));
    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
  },

  getMeasurementsSummaryMap: function (measurements) {
    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements, true);
    return summary.map(function (item) {
      return {
        'Owner > component': item.componentName,
        'Wasted time (ms)': item.time,
        'Instances': item.count
      };
    });
  },

  printWasted: function (measurements) {
    measurements = measurements || ReactDefaultPerf._allMeasurements;
    console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
  },

  printDOM: function (measurements) {
    measurements = measurements || ReactDefaultPerf._allMeasurements;
    var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
    console.table(summary.map(function (item) {
      var result = {};
      result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
      result.type = item.type;
      result.args = JSON.stringify(item.args);
      return result;
    }));
    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
  },

  _recordWrite: function (id, fnName, totalTime, args) {
    // TODO: totalTime isn't that useful since it doesn't count paints/reflows
    var writes = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].writes;
    writes[id] = writes[id] || [];
    writes[id].push({
      type: fnName,
      time: totalTime,
      args: args
    });
  },

  measure: function (moduleName, fnName, func) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var totalTime;
      var rv;
      var start;

      if (fnName === '_renderNewRootComponent' || fnName === 'flushBatchedUpdates') {
        // A "measurement" is a set of metrics recorded for each flush. We want
        // to group the metrics for a given flush together so we can look at the
        // components that rendered and the DOM operations that actually
        // happened to determine the amount of "wasted work" performed.
        ReactDefaultPerf._allMeasurements.push({
          exclusive: {},
          inclusive: {},
          render: {},
          counts: {},
          writes: {},
          displayNames: {},
          totalTime: 0,
          created: {}
        });
        start = performanceNow();
        rv = func.apply(this, args);
        ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].totalTime = performanceNow() - start;
        return rv;
      } else if (fnName === '_mountImageIntoNode' || moduleName === 'ReactBrowserEventEmitter' || moduleName === 'ReactDOMIDOperations' || moduleName === 'CSSPropertyOperations' || moduleName === 'DOMChildrenOperations' || moduleName === 'DOMPropertyOperations') {
        start = performanceNow();
        rv = func.apply(this, args);
        totalTime = performanceNow() - start;

        if (fnName === '_mountImageIntoNode') {
          var mountID = ReactMount.getID(args[1]);
          ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
        } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
          // special format
          args[0].forEach(function (update) {
            var writeArgs = {};
            if (update.fromIndex !== null) {
              writeArgs.fromIndex = update.fromIndex;
            }
            if (update.toIndex !== null) {
              writeArgs.toIndex = update.toIndex;
            }
            if (update.textContent !== null) {
              writeArgs.textContent = update.textContent;
            }
            if (update.markupIndex !== null) {
              writeArgs.markup = args[1][update.markupIndex];
            }
            ReactDefaultPerf._recordWrite(update.parentID, update.type, totalTime, writeArgs);
          });
        } else {
          // basic format
          var id = args[0];
          if (typeof id === 'object') {
            id = ReactMount.getID(args[0]);
          }
          ReactDefaultPerf._recordWrite(id, fnName, totalTime, Array.prototype.slice.call(args, 1));
        }
        return rv;
      } else if (moduleName === 'ReactCompositeComponent' && (fnName === 'mountComponent' || fnName === 'updateComponent' || // TODO: receiveComponent()?
      fnName === '_renderValidatedComponent')) {

        if (this._currentElement.type === ReactMount.TopLevelWrapper) {
          return func.apply(this, args);
        }

        var rootNodeID = fnName === 'mountComponent' ? args[0] : this._rootNodeID;
        var isRender = fnName === '_renderValidatedComponent';
        var isMount = fnName === 'mountComponent';

        var mountStack = ReactDefaultPerf._mountStack;
        var entry = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1];

        if (isRender) {
          addValue(entry.counts, rootNodeID, 1);
        } else if (isMount) {
          entry.created[rootNodeID] = true;
          mountStack.push(0);
        }

        start = performanceNow();
        rv = func.apply(this, args);
        totalTime = performanceNow() - start;

        if (isRender) {
          addValue(entry.render, rootNodeID, totalTime);
        } else if (isMount) {
          var subMountTime = mountStack.pop();
          mountStack[mountStack.length - 1] += totalTime;
          addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
          addValue(entry.inclusive, rootNodeID, totalTime);
        } else {
          addValue(entry.inclusive, rootNodeID, totalTime);
        }

        entry.displayNames[rootNodeID] = {
          current: this.getName(),
          owner: this._currentElement._owner ? this._currentElement._owner.getName() : '<root>'
        };

        return rv;
      } else {
        return func.apply(this, args);
      }
    };
  }
};

module.exports = ReactDefaultPerf;
},{"./DOMProperty":12,"./ReactDefaultPerfAnalysis":54,"./ReactMount":68,"./ReactPerf":74,"fbjs/lib/performanceNow":155}],54:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerfAnalysis
 */

'use strict';

var assign = require('./Object.assign');

// Don't try to save users less than 1.2ms (a number I made up)
var DONT_CARE_THRESHOLD = 1.2;
var DOM_OPERATION_TYPES = {
  '_mountImageIntoNode': 'set innerHTML',
  INSERT_MARKUP: 'set innerHTML',
  MOVE_EXISTING: 'move',
  REMOVE_NODE: 'remove',
  SET_MARKUP: 'set innerHTML',
  TEXT_CONTENT: 'set textContent',
  'setValueForProperty': 'update attribute',
  'setValueForAttribute': 'update attribute',
  'deleteValueForProperty': 'remove attribute',
  'setValueForStyles': 'update styles',
  'replaceNodeWithMarkup': 'replace',
  'updateTextContent': 'set textContent'
};

function getTotalTime(measurements) {
  // TODO: return number of DOM ops? could be misleading.
  // TODO: measure dropped frames after reconcile?
  // TODO: log total time of each reconcile and the top-level component
  // class that triggered it.
  var totalTime = 0;
  for (var i = 0; i < measurements.length; i++) {
    var measurement = measurements[i];
    totalTime += measurement.totalTime;
  }
  return totalTime;
}

function getDOMSummary(measurements) {
  var items = [];
  measurements.forEach(function (measurement) {
    Object.keys(measurement.writes).forEach(function (id) {
      measurement.writes[id].forEach(function (write) {
        items.push({
          id: id,
          type: DOM_OPERATION_TYPES[write.type] || write.type,
          args: write.args
        });
      });
    });
  });
  return items;
}

function getExclusiveSummary(measurements) {
  var candidates = {};
  var displayName;

  for (var i = 0; i < measurements.length; i++) {
    var measurement = measurements[i];
    var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

    for (var id in allIDs) {
      displayName = measurement.displayNames[id].current;

      candidates[displayName] = candidates[displayName] || {
        componentName: displayName,
        inclusive: 0,
        exclusive: 0,
        render: 0,
        count: 0
      };
      if (measurement.render[id]) {
        candidates[displayName].render += measurement.render[id];
      }
      if (measurement.exclusive[id]) {
        candidates[displayName].exclusive += measurement.exclusive[id];
      }
      if (measurement.inclusive[id]) {
        candidates[displayName].inclusive += measurement.inclusive[id];
      }
      if (measurement.counts[id]) {
        candidates[displayName].count += measurement.counts[id];
      }
    }
  }

  // Now make a sorted array with the results.
  var arr = [];
  for (displayName in candidates) {
    if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
      arr.push(candidates[displayName]);
    }
  }

  arr.sort(function (a, b) {
    return b.exclusive - a.exclusive;
  });

  return arr;
}

function getInclusiveSummary(measurements, onlyClean) {
  var candidates = {};
  var inclusiveKey;

  for (var i = 0; i < measurements.length; i++) {
    var measurement = measurements[i];
    var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
    var cleanComponents;

    if (onlyClean) {
      cleanComponents = getUnchangedComponents(measurement);
    }

    for (var id in allIDs) {
      if (onlyClean && !cleanComponents[id]) {
        continue;
      }

      var displayName = measurement.displayNames[id];

      // Inclusive time is not useful for many components without knowing where
      // they are instantiated. So we aggregate inclusive time with both the
      // owner and current displayName as the key.
      inclusiveKey = displayName.owner + ' > ' + displayName.current;

      candidates[inclusiveKey] = candidates[inclusiveKey] || {
        componentName: inclusiveKey,
        time: 0,
        count: 0
      };

      if (measurement.inclusive[id]) {
        candidates[inclusiveKey].time += measurement.inclusive[id];
      }
      if (measurement.counts[id]) {
        candidates[inclusiveKey].count += measurement.counts[id];
      }
    }
  }

  // Now make a sorted array with the results.
  var arr = [];
  for (inclusiveKey in candidates) {
    if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
      arr.push(candidates[inclusiveKey]);
    }
  }

  arr.sort(function (a, b) {
    return b.time - a.time;
  });

  return arr;
}

function getUnchangedComponents(measurement) {
  // For a given reconcile, look at which components did not actually
  // render anything to the DOM and return a mapping of their ID to
  // the amount of time it took to render the entire subtree.
  var cleanComponents = {};
  var dirtyLeafIDs = Object.keys(measurement.writes);
  var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

  for (var id in allIDs) {
    var isDirty = false;
    // For each component that rendered, see if a component that triggered
    // a DOM op is in its subtree.
    for (var i = 0; i < dirtyLeafIDs.length; i++) {
      if (dirtyLeafIDs[i].indexOf(id) === 0) {
        isDirty = true;
        break;
      }
    }
    // check if component newly created
    if (measurement.created[id]) {
      isDirty = true;
    }
    if (!isDirty && measurement.counts[id] > 0) {
      cleanComponents[id] = true;
    }
  }
  return cleanComponents;
}

var ReactDefaultPerfAnalysis = {
  getExclusiveSummary: getExclusiveSummary,
  getInclusiveSummary: getInclusiveSummary,
  getDOMSummary: getDOMSummary,
  getTotalTime: getTotalTime
};

module.exports = ReactDefaultPerfAnalysis;
},{"./Object.assign":25}],55:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElement
 */

'use strict';

var ReactCurrentOwner = require('./ReactCurrentOwner');

var assign = require('./Object.assign');
var canDefineProperty = require('./canDefineProperty');

// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

/**
 * Base constructor for all React elements. This is only used to make this
 * work with a dynamic instanceof check. Nothing should live on this prototype.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (process.env.NODE_ENV !== 'production') {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    Object.freeze(element.props);
    Object.freeze(element);
  }

  return element;
};

ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    ref = config.ref === undefined ? null : config.ref;
    key = config.key === undefined ? null : '' + config.key;
    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (typeof props[propName] === 'undefined') {
        props[propName] = defaultProps[propName];
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};

ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

ReactElement.cloneAndReplaceProps = function (oldElement, newProps) {
  var newElement = ReactElement(oldElement.type, oldElement.key, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, newProps);

  if (process.env.NODE_ENV !== 'production') {
    // If the key on the original is valid, then the clone is valid
    newElement._store.validated = oldElement._store.validated;
  }

  return newElement;
};

ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (config.ref !== undefined) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (config.key !== undefined) {
      key = '' + config.key;
    }
    // Remaining properties override existing props
    for (propName in config) {
      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};

module.exports = ReactElement;
}).call(this,require('_process'))
},{"./Object.assign":25,"./ReactCurrentOwner":37,"./canDefineProperty":107,"_process":2}],56:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElementValidator
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

'use strict';

var ReactElement = require('./ReactElement');
var ReactPropTypeLocations = require('./ReactPropTypeLocations');
var ReactPropTypeLocationNames = require('./ReactPropTypeLocationNames');
var ReactCurrentOwner = require('./ReactCurrentOwner');

var canDefineProperty = require('./canDefineProperty');
var getIteratorFn = require('./getIteratorFn');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = ReactCurrentOwner.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

var loggedTypeFailures = {};

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var addenda = getAddendaForKeyUse('uniqueKey', element, parentType);
  if (addenda === null) {
    // we already showed the warning
    return;
  }
  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s%s', addenda.parentOrOwner || '', addenda.childOwner || '', addenda.url || '') : undefined;
}

/**
 * Shared warning and monitoring code for the key warnings.
 *
 * @internal
 * @param {string} messageType A key used for de-duping warnings.
 * @param {ReactElement} element Component that requires a key.
 * @param {*} parentType element's parent's type.
 * @returns {?object} A set of addenda to use in the warning message, or null
 * if the warning has already been shown before (and shouldn't be shown again).
 */
function getAddendaForKeyUse(messageType, element, parentType) {
  var addendum = getDeclarationErrorAddendum();
  if (!addendum) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      addendum = ' Check the top-level render call using <' + parentName + '>.';
    }
  }

  var memoizer = ownerHasKeyUseWarning[messageType] || (ownerHasKeyUseWarning[messageType] = {});
  if (memoizer[addendum]) {
    return null;
  }
  memoizer[addendum] = true;

  var addenda = {
    parentOrOwner: addendum,
    url: ' See https://fb.me/react-warning-keys for more information.',
    childOwner: null
  };

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    addenda.childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

  return addenda;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Assert that the props are valid
 *
 * @param {string} componentName Name of the component for error messages.
 * @param {object} propTypes Map of prop name to a ReactPropType
 * @param {object} props
 * @param {string} location e.g. "prop", "context", "child context"
 * @private
 */
function checkPropTypes(componentName, propTypes, props, location) {
  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : undefined;
        error = propTypes[propName](props, propName, componentName, location);
      } catch (ex) {
        error = ex;
      }
      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], propName, typeof error) : undefined;
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var addendum = getDeclarationErrorAddendum();
        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed propType: %s%s', error.message, addendum) : undefined;
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : undefined;
  }
}

var ReactElementValidator = {

  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    process.env.NODE_ENV !== 'production' ? warning(validType, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : undefined;

    var element = ReactElement.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if (process.env.NODE_ENV !== 'production') {
      if (canDefineProperty) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : undefined;
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }

};

module.exports = ReactElementValidator;
}).call(this,require('_process'))
},{"./ReactCurrentOwner":37,"./ReactElement":55,"./ReactPropTypeLocationNames":75,"./ReactPropTypeLocations":76,"./canDefineProperty":107,"./getIteratorFn":118,"_process":2,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],57:[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEmptyComponent
 */

'use strict';

var ReactElement = require('./ReactElement');
var ReactEmptyComponentRegistry = require('./ReactEmptyComponentRegistry');
var ReactReconciler = require('./ReactReconciler');

var assign = require('./Object.assign');

var placeholderElement;

var ReactEmptyComponentInjection = {
  injectEmptyComponent: function (component) {
    placeholderElement = ReactElement.createElement(component);
  }
};

var ReactEmptyComponent = function (instantiate) {
  this._currentElement = null;
  this._rootNodeID = null;
  this._renderedComponent = instantiate(placeholderElement);
};
assign(ReactEmptyComponent.prototype, {
  construct: function (element) {},
  mountComponent: function (rootID, transaction, context) {
    ReactEmptyComponentRegistry.registerNullComponentID(rootID);
    this._rootNodeID = rootID;
    return ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, context);
  },
  receiveComponent: function () {},
  unmountComponent: function (rootID, transaction, context) {
    ReactReconciler.unmountComponent(this._renderedComponent);
    ReactEmptyComponentRegistry.deregisterNullComponentID(this._rootNodeID);
    this._rootNodeID = null;
    this._renderedComponent = null;
  }
});

ReactEmptyComponent.injection = ReactEmptyComponentInjection;

module.exports = ReactEmptyComponent;
},{"./Object.assign":25,"./ReactElement":55,"./ReactEmptyComponentRegistry":58,"./ReactReconciler":79}],58:[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEmptyComponentRegistry
 */

'use strict';

// This registry keeps track of the React IDs of the components that rendered to
// `null` (in reality a placeholder such as `noscript`)
var nullComponentIDsRegistry = {};

/**
 * @param {string} id Component's `_rootNodeID`.
 * @return {boolean} True if the component is rendered to null.
 */
function isNullComponentID(id) {
  return !!nullComponentIDsRegistry[id];
}

/**
 * Mark the component as having rendered to null.
 * @param {string} id Component's `_rootNodeID`.
 */
function registerNullComponentID(id) {
  nullComponentIDsRegistry[id] = true;
}

/**
 * Unmark the component as having rendered to null: it renders to something now.
 * @param {string} id Component's `_rootNodeID`.
 */
function deregisterNullComponentID(id) {
  delete nullComponentIDsRegistry[id];
}

var ReactEmptyComponentRegistry = {
  isNullComponentID: isNullComponentID,
  registerNullComponentID: registerNullComponentID,
  deregisterNullComponentID: deregisterNullComponentID
};

module.exports = ReactEmptyComponentRegistry;
},{}],59:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactErrorUtils
 * @typechecks
 */

'use strict';

var caughtError = null;

/**
 * Call a function while guarding against errors that happens within it.
 *
 * @param {?String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} a First argument
 * @param {*} b Second argument
 */
function invokeGuardedCallback(name, func, a, b) {
  try {
    return func(a, b);
  } catch (x) {
    if (caughtError === null) {
      caughtError = x;
    }
    return undefined;
  }
}

var ReactErrorUtils = {
  invokeGuardedCallback: invokeGuardedCallback,

  /**
   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
   * handler are sure to be rethrown by rethrowCaughtError.
   */
  invokeGuardedCallbackWithCatch: invokeGuardedCallback,

  /**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */
  rethrowCaughtError: function () {
    if (caughtError) {
      var error = caughtError;
      caughtError = null;
      throw error;
    }
  }
};

if (process.env.NODE_ENV !== 'production') {
  /**
   * To help development we can get better devtools integration by simulating a
   * real browser event.
   */
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
    var fakeNode = document.createElement('react');
    ReactErrorUtils.invokeGuardedCallback = function (name, func, a, b) {
      var boundFunc = func.bind(null, a, b);
      var evtType = 'react-' + name;
      fakeNode.addEventListener(evtType, boundFunc, false);
      var evt = document.createEvent('Event');
      evt.initEvent(evtType, false, false);
      fakeNode.dispatchEvent(evt);
      fakeNode.removeEventListener(evtType, boundFunc, false);
    };
  }
}

module.exports = ReactErrorUtils;
}).call(this,require('_process'))
},{"_process":2}],60:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventEmitterMixin
 */

'use strict';

var EventPluginHub = require('./EventPluginHub');

function runEventQueueInBatch(events) {
  EventPluginHub.enqueueEvents(events);
  EventPluginHub.processEventQueue(false);
}

var ReactEventEmitterMixin = {

  /**
   * Streams a fired top-level event to `EventPluginHub` where plugins have the
   * opportunity to create `ReactEvent`s to be dispatched.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {object} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native environment event.
   */
  handleTopLevel: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
    var events = EventPluginHub.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
    runEventQueueInBatch(events);
  }
};

module.exports = ReactEventEmitterMixin;
},{"./EventPluginHub":18}],61:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventListener
 * @typechecks static-only
 */

'use strict';

var EventListener = require('fbjs/lib/EventListener');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
var PooledClass = require('./PooledClass');
var ReactInstanceHandles = require('./ReactInstanceHandles');
var ReactMount = require('./ReactMount');
var ReactUpdates = require('./ReactUpdates');

var assign = require('./Object.assign');
var getEventTarget = require('./getEventTarget');
var getUnboundedScrollPosition = require('fbjs/lib/getUnboundedScrollPosition');

var DOCUMENT_FRAGMENT_NODE_TYPE = 11;

/**
 * Finds the parent React component of `node`.
 *
 * @param {*} node
 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
 *                           is not nested.
 */
function findParent(node) {
  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
  // traversal, but caching is difficult to do correctly without using a
  // mutation observer to listen for all DOM changes.
  var nodeID = ReactMount.getID(node);
  var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
  var container = ReactMount.findReactContainerForID(rootID);
  var parent = ReactMount.getFirstReactDOM(container);
  return parent;
}

// Used to store ancestor hierarchy in top level callback
function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
  this.topLevelType = topLevelType;
  this.nativeEvent = nativeEvent;
  this.ancestors = [];
}
assign(TopLevelCallbackBookKeeping.prototype, {
  destructor: function () {
    this.topLevelType = null;
    this.nativeEvent = null;
    this.ancestors.length = 0;
  }
});
PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);

function handleTopLevelImpl(bookKeeping) {
  // TODO: Re-enable event.path handling
  //
  // if (bookKeeping.nativeEvent.path && bookKeeping.nativeEvent.path.length > 1) {
  //   // New browsers have a path attribute on native events
  //   handleTopLevelWithPath(bookKeeping);
  // } else {
  //   // Legacy browsers don't have a path attribute on native events
  //   handleTopLevelWithoutPath(bookKeeping);
  // }

  void handleTopLevelWithPath; // temporarily unused
  handleTopLevelWithoutPath(bookKeeping);
}

// Legacy browsers don't have a path attribute on native events
function handleTopLevelWithoutPath(bookKeeping) {
  var topLevelTarget = ReactMount.getFirstReactDOM(getEventTarget(bookKeeping.nativeEvent)) || window;

  // Loop through the hierarchy, in case there's any nested components.
  // It's important that we build the array of ancestors before calling any
  // event handlers, because event handlers can modify the DOM, leading to
  // inconsistencies with ReactMount's node cache. See #1105.
  var ancestor = topLevelTarget;
  while (ancestor) {
    bookKeeping.ancestors.push(ancestor);
    ancestor = findParent(ancestor);
  }

  for (var i = 0; i < bookKeeping.ancestors.length; i++) {
    topLevelTarget = bookKeeping.ancestors[i];
    var topLevelTargetID = ReactMount.getID(topLevelTarget) || '';
    ReactEventListener._handleTopLevel(bookKeeping.topLevelType, topLevelTarget, topLevelTargetID, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
  }
}

// New browsers have a path attribute on native events
function handleTopLevelWithPath(bookKeeping) {
  var path = bookKeeping.nativeEvent.path;
  var currentNativeTarget = path[0];
  var eventsFired = 0;
  for (var i = 0; i < path.length; i++) {
    var currentPathElement = path[i];
    if (currentPathElement.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE) {
      currentNativeTarget = path[i + 1];
    }
    // TODO: slow
    var reactParent = ReactMount.getFirstReactDOM(currentPathElement);
    if (reactParent === currentPathElement) {
      var currentPathElementID = ReactMount.getID(currentPathElement);
      var newRootID = ReactInstanceHandles.getReactRootIDFromNodeID(currentPathElementID);
      bookKeeping.ancestors.push(currentPathElement);

      var topLevelTargetID = ReactMount.getID(currentPathElement) || '';
      eventsFired++;
      ReactEventListener._handleTopLevel(bookKeeping.topLevelType, currentPathElement, topLevelTargetID, bookKeeping.nativeEvent, currentNativeTarget);

      // Jump to the root of this React render tree
      while (currentPathElementID !== newRootID) {
        i++;
        currentPathElement = path[i];
        currentPathElementID = ReactMount.getID(currentPathElement);
      }
    }
  }
  if (eventsFired === 0) {
    ReactEventListener._handleTopLevel(bookKeeping.topLevelType, window, '', bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
  }
}

function scrollValueMonitor(cb) {
  var scrollPosition = getUnboundedScrollPosition(window);
  cb(scrollPosition);
}

var ReactEventListener = {
  _enabled: true,
  _handleTopLevel: null,

  WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,

  setHandleTopLevel: function (handleTopLevel) {
    ReactEventListener._handleTopLevel = handleTopLevel;
  },

  setEnabled: function (enabled) {
    ReactEventListener._enabled = !!enabled;
  },

  isEnabled: function () {
    return ReactEventListener._enabled;
  },

  /**
   * Traps top-level events by using event bubbling.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
    var element = handle;
    if (!element) {
      return null;
    }
    return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
  },

  /**
   * Traps a top-level event by using event capturing.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
    var element = handle;
    if (!element) {
      return null;
    }
    return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
  },

  monitorScrollValue: function (refresh) {
    var callback = scrollValueMonitor.bind(null, refresh);
    EventListener.listen(window, 'scroll', callback);
  },

  dispatchEvent: function (topLevelType, nativeEvent) {
    if (!ReactEventListener._enabled) {
      return;
    }

    var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
    try {
      // Event queue being processed in the same cycle allows
      // `preventDefault`.
      ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
    } finally {
      TopLevelCallbackBookKeeping.release(bookKeeping);
    }
  }
};

module.exports = ReactEventListener;
},{"./Object.assign":25,"./PooledClass":26,"./ReactInstanceHandles":64,"./ReactMount":68,"./ReactUpdates":86,"./getEventTarget":117,"fbjs/lib/EventListener":132,"fbjs/lib/ExecutionEnvironment":133,"fbjs/lib/getUnboundedScrollPosition":144}],62:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInjection
 */

'use strict';

var DOMProperty = require('./DOMProperty');
var EventPluginHub = require('./EventPluginHub');
var ReactComponentEnvironment = require('./ReactComponentEnvironment');
var ReactClass = require('./ReactClass');
var ReactEmptyComponent = require('./ReactEmptyComponent');
var ReactBrowserEventEmitter = require('./ReactBrowserEventEmitter');
var ReactNativeComponent = require('./ReactNativeComponent');
var ReactPerf = require('./ReactPerf');
var ReactRootIndex = require('./ReactRootIndex');
var ReactUpdates = require('./ReactUpdates');

var ReactInjection = {
  Component: ReactComponentEnvironment.injection,
  Class: ReactClass.injection,
  DOMProperty: DOMProperty.injection,
  EmptyComponent: ReactEmptyComponent.injection,
  EventPluginHub: EventPluginHub.injection,
  EventEmitter: ReactBrowserEventEmitter.injection,
  NativeComponent: ReactNativeComponent.injection,
  Perf: ReactPerf.injection,
  RootIndex: ReactRootIndex.injection,
  Updates: ReactUpdates.injection
};

module.exports = ReactInjection;
},{"./DOMProperty":12,"./EventPluginHub":18,"./ReactBrowserEventEmitter":29,"./ReactClass":32,"./ReactComponentEnvironment":35,"./ReactEmptyComponent":57,"./ReactNativeComponent":71,"./ReactPerf":74,"./ReactRootIndex":81,"./ReactUpdates":86}],63:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInputSelection
 */

'use strict';

var ReactDOMSelection = require('./ReactDOMSelection');

var containsNode = require('fbjs/lib/containsNode');
var focusNode = require('fbjs/lib/focusNode');
var getActiveElement = require('fbjs/lib/getActiveElement');

function isInDocument(node) {
  return containsNode(document.documentElement, node);
}

/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */
var ReactInputSelection = {

  hasSelectionCapabilities: function (elem) {
    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
    return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
  },

  getSelectionInformation: function () {
    var focusedElem = getActiveElement();
    return {
      focusedElem: focusedElem,
      selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
    };
  },

  /**
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */
  restoreSelection: function (priorSelectionInformation) {
    var curFocusedElem = getActiveElement();
    var priorFocusedElem = priorSelectionInformation.focusedElem;
    var priorSelectionRange = priorSelectionInformation.selectionRange;
    if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
        ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
      }
      focusNode(priorFocusedElem);
    }
  },

  /**
   * @getSelection: Gets the selection bounds of a focused textarea, input or
   * contentEditable node.
   * -@input: Look up selection bounds of this input
   * -@return {start: selectionStart, end: selectionEnd}
   */
  getSelection: function (input) {
    var selection;

    if ('selectionStart' in input) {
      // Modern browser with input or textarea.
      selection = {
        start: input.selectionStart,
        end: input.selectionEnd
      };
    } else if (document.selection && (input.nodeName && input.nodeName.toLowerCase() === 'input')) {
      // IE8 input.
      var range = document.selection.createRange();
      // There can only be one selection per document in IE, so it must
      // be in our element.
      if (range.parentElement() === input) {
        selection = {
          start: -range.moveStart('character', -input.value.length),
          end: -range.moveEnd('character', -input.value.length)
        };
      }
    } else {
      // Content editable or old IE textarea.
      selection = ReactDOMSelection.getOffsets(input);
    }

    return selection || { start: 0, end: 0 };
  },

  /**
   * @setSelection: Sets the selection bounds of a textarea or input and focuses
   * the input.
   * -@input     Set selection bounds of this input or textarea
   * -@offsets   Object of same form that is returned from get*
   */
  setSelection: function (input, offsets) {
    var start = offsets.start;
    var end = offsets.end;
    if (typeof end === 'undefined') {
      end = start;
    }

    if ('selectionStart' in input) {
      input.selectionStart = start;
      input.selectionEnd = Math.min(end, input.value.length);
    } else if (document.selection && (input.nodeName && input.nodeName.toLowerCase() === 'input')) {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveStart('character', start);
      range.moveEnd('character', end - start);
      range.select();
    } else {
      ReactDOMSelection.setOffsets(input, offsets);
    }
  }
};

module.exports = ReactInputSelection;
},{"./ReactDOMSelection":47,"fbjs/lib/containsNode":136,"fbjs/lib/focusNode":141,"fbjs/lib/getActiveElement":142}],64:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceHandles
 * @typechecks static-only
 */

'use strict';

var ReactRootIndex = require('./ReactRootIndex');

var invariant = require('fbjs/lib/invariant');

var SEPARATOR = '.';
var SEPARATOR_LENGTH = SEPARATOR.length;

/**
 * Maximum depth of traversals before we consider the possibility of a bad ID.
 */
var MAX_TREE_DEPTH = 10000;

/**
 * Creates a DOM ID prefix to use when mounting React components.
 *
 * @param {number} index A unique integer
 * @return {string} React root ID.
 * @internal
 */
function getReactRootIDString(index) {
  return SEPARATOR + index.toString(36);
}

/**
 * Checks if a character in the supplied ID is a separator or the end.
 *
 * @param {string} id A React DOM ID.
 * @param {number} index Index of the character to check.
 * @return {boolean} True if the character is a separator or end of the ID.
 * @private
 */
function isBoundary(id, index) {
  return id.charAt(index) === SEPARATOR || index === id.length;
}

/**
 * Checks if the supplied string is a valid React DOM ID.
 *
 * @param {string} id A React DOM ID, maybe.
 * @return {boolean} True if the string is a valid React DOM ID.
 * @private
 */
function isValidID(id) {
  return id === '' || id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR;
}

/**
 * Checks if the first ID is an ancestor of or equal to the second ID.
 *
 * @param {string} ancestorID
 * @param {string} descendantID
 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
 * @internal
 */
function isAncestorIDOf(ancestorID, descendantID) {
  return descendantID.indexOf(ancestorID) === 0 && isBoundary(descendantID, ancestorID.length);
}

/**
 * Gets the parent ID of the supplied React DOM ID, `id`.
 *
 * @param {string} id ID of a component.
 * @return {string} ID of the parent, or an empty string.
 * @private
 */
function getParentID(id) {
  return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
}

/**
 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
 * supplied `destinationID`. If they are equal, the ID is returned.
 *
 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
 * @param {string} destinationID ID of the destination node.
 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
 * @private
 */
function getNextDescendantID(ancestorID, destinationID) {
  !(isValidID(ancestorID) && isValidID(destinationID)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(%s, %s): Received an invalid React DOM ID.', ancestorID, destinationID) : invariant(false) : undefined;
  !isAncestorIDOf(ancestorID, destinationID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(...): React has made an invalid assumption about ' + 'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.', ancestorID, destinationID) : invariant(false) : undefined;
  if (ancestorID === destinationID) {
    return ancestorID;
  }
  // Skip over the ancestor and the immediate separator. Traverse until we hit
  // another separator or we reach the end of `destinationID`.
  var start = ancestorID.length + SEPARATOR_LENGTH;
  var i;
  for (i = start; i < destinationID.length; i++) {
    if (isBoundary(destinationID, i)) {
      break;
    }
  }
  return destinationID.substr(0, i);
}

/**
 * Gets the nearest common ancestor ID of two IDs.
 *
 * Using this ID scheme, the nearest common ancestor ID is the longest common
 * prefix of the two IDs that immediately preceded a "marker" in both strings.
 *
 * @param {string} oneID
 * @param {string} twoID
 * @return {string} Nearest common ancestor ID, or the empty string if none.
 * @private
 */
function getFirstCommonAncestorID(oneID, twoID) {
  var minLength = Math.min(oneID.length, twoID.length);
  if (minLength === 0) {
    return '';
  }
  var lastCommonMarkerIndex = 0;
  // Use `<=` to traverse until the "EOL" of the shorter string.
  for (var i = 0; i <= minLength; i++) {
    if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
      lastCommonMarkerIndex = i;
    } else if (oneID.charAt(i) !== twoID.charAt(i)) {
      break;
    }
  }
  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
  !isValidID(longestCommonID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s', oneID, twoID, longestCommonID) : invariant(false) : undefined;
  return longestCommonID;
}

/**
 * Traverses the parent path between two IDs (either up or down). The IDs must
 * not be the same, and there must exist a parent path between them. If the
 * callback returns `false`, traversal is stopped.
 *
 * @param {?string} start ID at which to start traversal.
 * @param {?string} stop ID at which to end traversal.
 * @param {function} cb Callback to invoke each ID with.
 * @param {*} arg Argument to invoke the callback with.
 * @param {?boolean} skipFirst Whether or not to skip the first node.
 * @param {?boolean} skipLast Whether or not to skip the last node.
 * @private
 */
function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
  start = start || '';
  stop = stop || '';
  !(start !== stop) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.', start) : invariant(false) : undefined;
  var traverseUp = isAncestorIDOf(stop, start);
  !(traverseUp || isAncestorIDOf(start, stop)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' + 'not have a parent path.', start, stop) : invariant(false) : undefined;
  // Traverse from `start` to `stop` one depth at a time.
  var depth = 0;
  var traverse = traverseUp ? getParentID : getNextDescendantID;
  for (var id = start;; /* until break */id = traverse(id, stop)) {
    var ret;
    if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
      ret = cb(id, traverseUp, arg);
    }
    if (ret === false || id === stop) {
      // Only break //after// visiting `stop`.
      break;
    }
    !(depth++ < MAX_TREE_DEPTH) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' + 'traversing the React DOM ID tree. This may be due to malformed IDs: %s', start, stop, id) : invariant(false) : undefined;
  }
}

/**
 * Manages the IDs assigned to DOM representations of React components. This
 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
 * order to simulate events).
 *
 * @internal
 */
var ReactInstanceHandles = {

  /**
   * Constructs a React root ID
   * @return {string} A React root ID.
   */
  createReactRootID: function () {
    return getReactRootIDString(ReactRootIndex.createReactRootIndex());
  },

  /**
   * Constructs a React ID by joining a root ID with a name.
   *
   * @param {string} rootID Root ID of a parent component.
   * @param {string} name A component's name (as flattened children).
   * @return {string} A React ID.
   * @internal
   */
  createReactID: function (rootID, name) {
    return rootID + name;
  },

  /**
   * Gets the DOM ID of the React component that is the root of the tree that
   * contains the React component with the supplied DOM ID.
   *
   * @param {string} id DOM ID of a React component.
   * @return {?string} DOM ID of the React component that is the root.
   * @internal
   */
  getReactRootIDFromNodeID: function (id) {
    if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
      var index = id.indexOf(SEPARATOR, 1);
      return index > -1 ? id.substr(0, index) : id;
    }
    return null;
  },

  /**
   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
   * should would receive a `mouseEnter` or `mouseLeave` event.
   *
   * NOTE: Does not invoke the callback on the nearest common ancestor because
   * nothing "entered" or "left" that element.
   *
   * @param {string} leaveID ID being left.
   * @param {string} enterID ID being entered.
   * @param {function} cb Callback to invoke on each entered/left ID.
   * @param {*} upArg Argument to invoke the callback with on left IDs.
   * @param {*} downArg Argument to invoke the callback with on entered IDs.
   * @internal
   */
  traverseEnterLeave: function (leaveID, enterID, cb, upArg, downArg) {
    var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
    if (ancestorID !== leaveID) {
      traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
    }
    if (ancestorID !== enterID) {
      traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
    }
  },

  /**
   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
   *
   * NOTE: This traversal happens on IDs without touching the DOM.
   *
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */
  traverseTwoPhase: function (targetID, cb, arg) {
    if (targetID) {
      traverseParentPath('', targetID, cb, arg, true, false);
      traverseParentPath(targetID, '', cb, arg, false, true);
    }
  },

  /**
   * Same as `traverseTwoPhase` but skips the `targetID`.
   */
  traverseTwoPhaseSkipTarget: function (targetID, cb, arg) {
    if (targetID) {
      traverseParentPath('', targetID, cb, arg, true, true);
      traverseParentPath(targetID, '', cb, arg, true, true);
    }
  },

  /**
   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
   * example, passing `.0.$row-0.1` would result in `cb` getting called
   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
   *
   * NOTE: This traversal happens on IDs without touching the DOM.
   *
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */
  traverseAncestors: function (targetID, cb, arg) {
    traverseParentPath('', targetID, cb, arg, true, false);
  },

  getFirstCommonAncestorID: getFirstCommonAncestorID,

  /**
   * Exposed for unit testing.
   * @private
   */
  _getNextDescendantID: getNextDescendantID,

  isAncestorIDOf: isAncestorIDOf,

  SEPARATOR: SEPARATOR

};

module.exports = ReactInstanceHandles;
}).call(this,require('_process'))
},{"./ReactRootIndex":81,"_process":2,"fbjs/lib/invariant":147}],65:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceMap
 */

'use strict';

/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 */

// TODO: Replace this with ES6: var ReactInstanceMap = new Map();
var ReactInstanceMap = {

  /**
   * This API should be called `delete` but we'd have to make sure to always
   * transform these to strings for IE support. When this transform is fully
   * supported we can rename it.
   */
  remove: function (key) {
    key._reactInternalInstance = undefined;
  },

  get: function (key) {
    return key._reactInternalInstance;
  },

  has: function (key) {
    return key._reactInternalInstance !== undefined;
  },

  set: function (key, value) {
    key._reactInternalInstance = value;
  }

};

module.exports = ReactInstanceMap;
},{}],66:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactIsomorphic
 */

'use strict';

var ReactChildren = require('./ReactChildren');
var ReactComponent = require('./ReactComponent');
var ReactClass = require('./ReactClass');
var ReactDOMFactories = require('./ReactDOMFactories');
var ReactElement = require('./ReactElement');
var ReactElementValidator = require('./ReactElementValidator');
var ReactPropTypes = require('./ReactPropTypes');
var ReactVersion = require('./ReactVersion');

var assign = require('./Object.assign');
var onlyChild = require('./onlyChild');

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if (process.env.NODE_ENV !== 'production') {
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var React = {

  // Modern

  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
    only: onlyChild
  },

  Component: ReactComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: ReactClass.createClass,
  createFactory: createFactory,
  createMixin: function (mixin) {
    // Currently a noop. Will be used to validate and trace mixins.
    return mixin;
  },

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories,

  version: ReactVersion,

  // Hook for JSX spread, don't use this for anything else.
  __spread: assign
};

module.exports = React;
}).call(this,require('_process'))
},{"./Object.assign":25,"./ReactChildren":31,"./ReactClass":32,"./ReactComponent":33,"./ReactDOMFactories":41,"./ReactElement":55,"./ReactElementValidator":56,"./ReactPropTypes":77,"./ReactVersion":87,"./onlyChild":124,"_process":2}],67:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMarkupChecksum
 */

'use strict';

var adler32 = require('./adler32');

var TAG_END = /\/?>/;

var ReactMarkupChecksum = {
  CHECKSUM_ATTR_NAME: 'data-react-checksum',

  /**
   * @param {string} markup Markup string
   * @return {string} Markup string with checksum attribute attached
   */
  addChecksumToMarkup: function (markup) {
    var checksum = adler32(markup);

    // Add checksum (handle both parent tags and self-closing tags)
    return markup.replace(TAG_END, ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
  },

  /**
   * @param {string} markup to use
   * @param {DOMElement} element root React element
   * @returns {boolean} whether or not the markup is the same
   */
  canReuseMarkup: function (markup, element) {
    var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
    var markupChecksum = adler32(markup);
    return markupChecksum === existingChecksum;
  }
};

module.exports = ReactMarkupChecksum;
},{"./adler32":106}],68:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMount
 */

'use strict';

var DOMProperty = require('./DOMProperty');
var ReactBrowserEventEmitter = require('./ReactBrowserEventEmitter');
var ReactCurrentOwner = require('./ReactCurrentOwner');
var ReactDOMFeatureFlags = require('./ReactDOMFeatureFlags');
var ReactElement = require('./ReactElement');
var ReactEmptyComponentRegistry = require('./ReactEmptyComponentRegistry');
var ReactInstanceHandles = require('./ReactInstanceHandles');
var ReactInstanceMap = require('./ReactInstanceMap');
var ReactMarkupChecksum = require('./ReactMarkupChecksum');
var ReactPerf = require('./ReactPerf');
var ReactReconciler = require('./ReactReconciler');
var ReactUpdateQueue = require('./ReactUpdateQueue');
var ReactUpdates = require('./ReactUpdates');

var assign = require('./Object.assign');
var emptyObject = require('fbjs/lib/emptyObject');
var containsNode = require('fbjs/lib/containsNode');
var instantiateReactComponent = require('./instantiateReactComponent');
var invariant = require('fbjs/lib/invariant');
var setInnerHTML = require('./setInnerHTML');
var shouldUpdateReactComponent = require('./shouldUpdateReactComponent');
var validateDOMNesting = require('./validateDOMNesting');
var warning = require('fbjs/lib/warning');

var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
var nodeCache = {};

var ELEMENT_NODE_TYPE = 1;
var DOC_NODE_TYPE = 9;
var DOCUMENT_FRAGMENT_NODE_TYPE = 11;

var ownerDocumentContextKey = '__ReactMount_ownerDocument$' + Math.random().toString(36).slice(2);

/** Mapping from reactRootID to React component instance. */
var instancesByReactRootID = {};

/** Mapping from reactRootID to `container` nodes. */
var containersByReactRootID = {};

if (process.env.NODE_ENV !== 'production') {
  /** __DEV__-only mapping from reactRootID to root elements. */
  var rootElementsByReactRootID = {};
}

// Used to store breadth-first search state in findComponentRoot.
var findComponentRootReusableArray = [];

/**
 * Finds the index of the first character
 * that's not common between the two given strings.
 *
 * @return {number} the index of the character where the strings diverge
 */
function firstDifferenceIndex(string1, string2) {
  var minLen = Math.min(string1.length, string2.length);
  for (var i = 0; i < minLen; i++) {
    if (string1.charAt(i) !== string2.charAt(i)) {
      return i;
    }
  }
  return string1.length === string2.length ? -1 : minLen;
}

/**
 * @param {DOMElement|DOMDocument} container DOM element that may contain
 * a React component
 * @return {?*} DOM element that may have the reactRoot ID, or null.
 */
function getReactRootElementInContainer(container) {
  if (!container) {
    return null;
  }

  if (container.nodeType === DOC_NODE_TYPE) {
    return container.documentElement;
  } else {
    return container.firstChild;
  }
}

/**
 * @param {DOMElement} container DOM element that may contain a React component.
 * @return {?string} A "reactRoot" ID, if a React component is rendered.
 */
function getReactRootID(container) {
  var rootElement = getReactRootElementInContainer(container);
  return rootElement && ReactMount.getID(rootElement);
}

/**
 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
 * element can return its control whose name or ID equals ATTR_NAME. All
 * DOM nodes support `getAttributeNode` but this can also get called on
 * other objects so just return '' if we're given something other than a
 * DOM node (such as window).
 *
 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
 * @return {string} ID of the supplied `domNode`.
 */
function getID(node) {
  var id = internalGetID(node);
  if (id) {
    if (nodeCache.hasOwnProperty(id)) {
      var cached = nodeCache[id];
      if (cached !== node) {
        !!isValid(cached, id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactMount: Two valid but unequal nodes with the same `%s`: %s', ATTR_NAME, id) : invariant(false) : undefined;

        nodeCache[id] = node;
      }
    } else {
      nodeCache[id] = node;
    }
  }

  return id;
}

function internalGetID(node) {
  // If node is something like a window, document, or text node, none of
  // which support attributes or a .getAttribute method, gracefully return
  // the empty string, as if the attribute were missing.
  return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
}

/**
 * Sets the React-specific ID of the given node.
 *
 * @param {DOMElement} node The DOM node whose ID will be set.
 * @param {string} id The value of the ID attribute.
 */
function setID(node, id) {
  var oldID = internalGetID(node);
  if (oldID !== id) {
    delete nodeCache[oldID];
  }
  node.setAttribute(ATTR_NAME, id);
  nodeCache[id] = node;
}

/**
 * Finds the node with the supplied React-generated DOM ID.
 *
 * @param {string} id A React-generated DOM ID.
 * @return {DOMElement} DOM node with the suppled `id`.
 * @internal
 */
function getNode(id) {
  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
    nodeCache[id] = ReactMount.findReactNodeByID(id);
  }
  return nodeCache[id];
}

/**
 * Finds the node with the supplied public React instance.
 *
 * @param {*} instance A public React instance.
 * @return {?DOMElement} DOM node with the suppled `id`.
 * @internal
 */
function getNodeFromInstance(instance) {
  var id = ReactInstanceMap.get(instance)._rootNodeID;
  if (ReactEmptyComponentRegistry.isNullComponentID(id)) {
    return null;
  }
  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
    nodeCache[id] = ReactMount.findReactNodeByID(id);
  }
  return nodeCache[id];
}

/**
 * A node is "valid" if it is contained by a currently mounted container.
 *
 * This means that the node does not have to be contained by a document in
 * order to be considered valid.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @param {string} id The expected ID of the node.
 * @return {boolean} Whether the node is contained by a mounted container.
 */
function isValid(node, id) {
  if (node) {
    !(internalGetID(node) === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactMount: Unexpected modification of `%s`', ATTR_NAME) : invariant(false) : undefined;

    var container = ReactMount.findReactContainerForID(id);
    if (container && containsNode(container, node)) {
      return true;
    }
  }

  return false;
}

/**
 * Causes the cache to forget about one React-specific ID.
 *
 * @param {string} id The ID to forget.
 */
function purgeID(id) {
  delete nodeCache[id];
}

var deepestNodeSoFar = null;
function findDeepestCachedAncestorImpl(ancestorID) {
  var ancestor = nodeCache[ancestorID];
  if (ancestor && isValid(ancestor, ancestorID)) {
    deepestNodeSoFar = ancestor;
  } else {
    // This node isn't populated in the cache, so presumably none of its
    // descendants are. Break out of the loop.
    return false;
  }
}

/**
 * Return the deepest cached node whose ID is a prefix of `targetID`.
 */
function findDeepestCachedAncestor(targetID) {
  deepestNodeSoFar = null;
  ReactInstanceHandles.traverseAncestors(targetID, findDeepestCachedAncestorImpl);

  var foundNode = deepestNodeSoFar;
  deepestNodeSoFar = null;
  return foundNode;
}

/**
 * Mounts this component and inserts it into the DOM.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {string} rootID DOM ID of the root node.
 * @param {DOMElement} container DOM element to mount into.
 * @param {ReactReconcileTransaction} transaction
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */
function mountComponentIntoNode(componentInstance, rootID, container, transaction, shouldReuseMarkup, context) {
  if (ReactDOMFeatureFlags.useCreateElement) {
    context = assign({}, context);
    if (container.nodeType === DOC_NODE_TYPE) {
      context[ownerDocumentContextKey] = container;
    } else {
      context[ownerDocumentContextKey] = container.ownerDocument;
    }
  }
  if (process.env.NODE_ENV !== 'production') {
    if (context === emptyObject) {
      context = {};
    }
    var tag = container.nodeName.toLowerCase();
    context[validateDOMNesting.ancestorInfoContextKey] = validateDOMNesting.updatedAncestorInfo(null, tag, null);
  }
  var markup = ReactReconciler.mountComponent(componentInstance, rootID, transaction, context);
  componentInstance._renderedComponent._topLevelWrapper = componentInstance;
  ReactMount._mountImageIntoNode(markup, container, shouldReuseMarkup, transaction);
}

/**
 * Batched mount.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {string} rootID DOM ID of the root node.
 * @param {DOMElement} container DOM element to mount into.
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */
function batchedMountComponentIntoNode(componentInstance, rootID, container, shouldReuseMarkup, context) {
  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(
  /* forceHTML */shouldReuseMarkup);
  transaction.perform(mountComponentIntoNode, null, componentInstance, rootID, container, transaction, shouldReuseMarkup, context);
  ReactUpdates.ReactReconcileTransaction.release(transaction);
}

/**
 * Unmounts a component and removes it from the DOM.
 *
 * @param {ReactComponent} instance React component instance.
 * @param {DOMElement} container DOM element to unmount from.
 * @final
 * @internal
 * @see {ReactMount.unmountComponentAtNode}
 */
function unmountComponentFromNode(instance, container) {
  ReactReconciler.unmountComponent(instance);

  if (container.nodeType === DOC_NODE_TYPE) {
    container = container.documentElement;
  }

  // http://jsperf.com/emptying-a-node
  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}

/**
 * True if the supplied DOM node has a direct React-rendered child that is
 * not a React root element. Useful for warning in `render`,
 * `unmountComponentAtNode`, etc.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM element contains a direct child that was
 * rendered by React but is not a root element.
 * @internal
 */
function hasNonRootReactChild(node) {
  var reactRootID = getReactRootID(node);
  return reactRootID ? reactRootID !== ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID) : false;
}

/**
 * Returns the first (deepest) ancestor of a node which is rendered by this copy
 * of React.
 */
function findFirstReactDOMImpl(node) {
  // This node might be from another React instance, so we make sure not to
  // examine the node cache here
  for (; node && node.parentNode !== node; node = node.parentNode) {
    if (node.nodeType !== 1) {
      // Not a DOMElement, therefore not a React component
      continue;
    }
    var nodeID = internalGetID(node);
    if (!nodeID) {
      continue;
    }
    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);

    // If containersByReactRootID contains the container we find by crawling up
    // the tree, we know that this instance of React rendered the node.
    // nb. isValid's strategy (with containsNode) does not work because render
    // trees may be nested and we don't want a false positive in that case.
    var current = node;
    var lastID;
    do {
      lastID = internalGetID(current);
      current = current.parentNode;
      if (current == null) {
        // The passed-in node has been detached from the container it was
        // originally rendered into.
        return null;
      }
    } while (lastID !== reactRootID);

    if (current === containersByReactRootID[reactRootID]) {
      return node;
    }
  }
  return null;
}

/**
 * Temporary (?) hack so that we can store all top-level pending updates on
 * composites instead of having to worry about different types of components
 * here.
 */
var TopLevelWrapper = function () {};
TopLevelWrapper.prototype.isReactComponent = {};
if (process.env.NODE_ENV !== 'production') {
  TopLevelWrapper.displayName = 'TopLevelWrapper';
}
TopLevelWrapper.prototype.render = function () {
  // this.props is actually a ReactElement
  return this.props;
};

/**
 * Mounting is the process of initializing a React component by creating its
 * representative DOM elements and inserting them into a supplied `container`.
 * Any prior content inside `container` is destroyed in the process.
 *
 *   ReactMount.render(
 *     component,
 *     document.getElementById('container')
 *   );
 *
 *   <div id="container">                   <-- Supplied `container`.
 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
 *       // ...                                 component.
 *     </div>
 *   </div>
 *
 * Inside of `container`, the first element rendered is the "reactRoot".
 */
var ReactMount = {

  TopLevelWrapper: TopLevelWrapper,

  /** Exposed for debugging purposes **/
  _instancesByReactRootID: instancesByReactRootID,

  /**
   * This is a hook provided to support rendering React components while
   * ensuring that the apparent scroll position of its `container` does not
   * change.
   *
   * @param {DOMElement} container The `container` being rendered into.
   * @param {function} renderCallback This must be called once to do the render.
   */
  scrollMonitor: function (container, renderCallback) {
    renderCallback();
  },

  /**
   * Take a component that's already mounted into the DOM and replace its props
   * @param {ReactComponent} prevComponent component instance already in the DOM
   * @param {ReactElement} nextElement component instance to render
   * @param {DOMElement} container container to render into
   * @param {?function} callback function triggered on completion
   */
  _updateRootComponent: function (prevComponent, nextElement, container, callback) {
    ReactMount.scrollMonitor(container, function () {
      ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
      if (callback) {
        ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
      }
    });

    if (process.env.NODE_ENV !== 'production') {
      // Record the root element in case it later gets transplanted.
      rootElementsByReactRootID[getReactRootID(container)] = getReactRootElementInContainer(container);
    }

    return prevComponent;
  },

  /**
   * Register a component into the instance map and starts scroll value
   * monitoring
   * @param {ReactComponent} nextComponent component instance to render
   * @param {DOMElement} container container to render into
   * @return {string} reactRoot ID prefix
   */
  _registerComponent: function (nextComponent, container) {
    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '_registerComponent(...): Target container is not a DOM element.') : invariant(false) : undefined;

    ReactBrowserEventEmitter.ensureScrollValueMonitoring();

    var reactRootID = ReactMount.registerContainer(container);
    instancesByReactRootID[reactRootID] = nextComponent;
    return reactRootID;
  },

  /**
   * Render a new component into the DOM.
   * @param {ReactElement} nextElement element to render
   * @param {DOMElement} container container to render into
   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
   * @return {ReactComponent} nextComponent
   */
  _renderNewRootComponent: function (nextElement, container, shouldReuseMarkup, context) {
    // Various parts of our code (such as ReactCompositeComponent's
    // _renderValidatedComponent) assume that calls to render aren't nested;
    // verify that that's the case.
    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : undefined;

    var componentInstance = instantiateReactComponent(nextElement, null);
    var reactRootID = ReactMount._registerComponent(componentInstance, container);

    // The initial render is synchronous but any updates that happen during
    // rendering, in componentWillMount or componentDidMount, will be batched
    // according to the current batching strategy.

    ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, reactRootID, container, shouldReuseMarkup, context);

    if (process.env.NODE_ENV !== 'production') {
      // Record the root element in case it later gets transplanted.
      rootElementsByReactRootID[reactRootID] = getReactRootElementInContainer(container);
    }

    return componentInstance;
  },

  /**
   * Renders a React component into the DOM in the supplied `container`.
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */
  renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
    !(parentComponent != null && parentComponent._reactInternalInstance != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'parentComponent must be a valid React Component') : invariant(false) : undefined;
    return ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
  },

  _renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
    !ReactElement.isValidElement(nextElement) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOM.render(): Invalid component element.%s', typeof nextElement === 'string' ? ' Instead of passing an element string, make sure to instantiate ' + 'it by passing it to React.createElement.' : typeof nextElement === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' :
    // Check if it quacks like an element
    nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : invariant(false) : undefined;

    process.env.NODE_ENV !== 'production' ? warning(!container || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : undefined;

    var nextWrappedElement = new ReactElement(TopLevelWrapper, null, null, null, null, null, nextElement);

    var prevComponent = instancesByReactRootID[getReactRootID(container)];

    if (prevComponent) {
      var prevWrappedElement = prevComponent._currentElement;
      var prevElement = prevWrappedElement.props;
      if (shouldUpdateReactComponent(prevElement, nextElement)) {
        var publicInst = prevComponent._renderedComponent.getPublicInstance();
        var updatedCallback = callback && function () {
          callback.call(publicInst);
        };
        ReactMount._updateRootComponent(prevComponent, nextWrappedElement, container, updatedCallback);
        return publicInst;
      } else {
        ReactMount.unmountComponentAtNode(container);
      }
    }

    var reactRootElement = getReactRootElementInContainer(container);
    var containerHasReactMarkup = reactRootElement && !!internalGetID(reactRootElement);
    var containerHasNonRootReactChild = hasNonRootReactChild(container);

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : undefined;

      if (!containerHasReactMarkup || reactRootElement.nextSibling) {
        var rootElementSibling = reactRootElement;
        while (rootElementSibling) {
          if (internalGetID(rootElementSibling)) {
            process.env.NODE_ENV !== 'production' ? warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : undefined;
            break;
          }
          rootElementSibling = rootElementSibling.nextSibling;
        }
      }
    }

    var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
    var component = ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, parentComponent != null ? parentComponent._reactInternalInstance._processChildContext(parentComponent._reactInternalInstance._context) : emptyObject)._renderedComponent.getPublicInstance();
    if (callback) {
      callback.call(component);
    }
    return component;
  },

  /**
   * Renders a React component into the DOM in the supplied `container`.
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */
  render: function (nextElement, container, callback) {
    return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
  },

  /**
   * Registers a container node into which React components will be rendered.
   * This also creates the "reactRoot" ID that will be assigned to the element
   * rendered within.
   *
   * @param {DOMElement} container DOM element to register as a container.
   * @return {string} The "reactRoot" ID of elements rendered within.
   */
  registerContainer: function (container) {
    var reactRootID = getReactRootID(container);
    if (reactRootID) {
      // If one exists, make sure it is a valid "reactRoot" ID.
      reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
    }
    if (!reactRootID) {
      // No valid "reactRoot" ID found, create one.
      reactRootID = ReactInstanceHandles.createReactRootID();
    }
    containersByReactRootID[reactRootID] = container;
    return reactRootID;
  },

  /**
   * Unmounts and destroys the React component rendered in the `container`.
   *
   * @param {DOMElement} container DOM element containing a React component.
   * @return {boolean} True if a component was found in and unmounted from
   *                   `container`
   */
  unmountComponentAtNode: function (container) {
    // Various parts of our code (such as ReactCompositeComponent's
    // _renderValidatedComponent) assume that calls to render aren't nested;
    // verify that that's the case. (Strictly speaking, unmounting won't cause a
    // render but we still don't expect to be in a render call here.)
    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : undefined;

    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : invariant(false) : undefined;

    var reactRootID = getReactRootID(container);
    var component = instancesByReactRootID[reactRootID];
    if (!component) {
      // Check if the node being unmounted was rendered by React, but isn't a
      // root node.
      var containerHasNonRootReactChild = hasNonRootReactChild(container);

      // Check if the container itself is a React root node.
      var containerID = internalGetID(container);
      var isContainerReactRoot = containerID && containerID === ReactInstanceHandles.getReactRootIDFromNodeID(containerID);

      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : undefined;
      }

      return false;
    }
    ReactUpdates.batchedUpdates(unmountComponentFromNode, component, container);
    delete instancesByReactRootID[reactRootID];
    delete containersByReactRootID[reactRootID];
    if (process.env.NODE_ENV !== 'production') {
      delete rootElementsByReactRootID[reactRootID];
    }
    return true;
  },

  /**
   * Finds the container DOM element that contains React component to which the
   * supplied DOM `id` belongs.
   *
   * @param {string} id The ID of an element rendered by a React component.
   * @return {?DOMElement} DOM element that contains the `id`.
   */
  findReactContainerForID: function (id) {
    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
    var container = containersByReactRootID[reactRootID];

    if (process.env.NODE_ENV !== 'production') {
      var rootElement = rootElementsByReactRootID[reactRootID];
      if (rootElement && rootElement.parentNode !== container) {
        process.env.NODE_ENV !== 'production' ? warning(
        // Call internalGetID here because getID calls isValid which calls
        // findReactContainerForID (this function).
        internalGetID(rootElement) === reactRootID, 'ReactMount: Root element ID differed from reactRootID.') : undefined;
        var containerChild = container.firstChild;
        if (containerChild && reactRootID === internalGetID(containerChild)) {
          // If the container has a new child with the same ID as the old
          // root element, then rootElementsByReactRootID[reactRootID] is
          // just stale and needs to be updated. The case that deserves a
          // warning is when the container is empty.
          rootElementsByReactRootID[reactRootID] = containerChild;
        } else {
          process.env.NODE_ENV !== 'production' ? warning(false, 'ReactMount: Root element has been removed from its original ' + 'container. New container: %s', rootElement.parentNode) : undefined;
        }
      }
    }

    return container;
  },

  /**
   * Finds an element rendered by React with the supplied ID.
   *
   * @param {string} id ID of a DOM node in the React component.
   * @return {DOMElement} Root DOM node of the React component.
   */
  findReactNodeByID: function (id) {
    var reactRoot = ReactMount.findReactContainerForID(id);
    return ReactMount.findComponentRoot(reactRoot, id);
  },

  /**
   * Traverses up the ancestors of the supplied node to find a node that is a
   * DOM representation of a React component rendered by this copy of React.
   *
   * @param {*} node
   * @return {?DOMEventTarget}
   * @internal
   */
  getFirstReactDOM: function (node) {
    return findFirstReactDOMImpl(node);
  },

  /**
   * Finds a node with the supplied `targetID` inside of the supplied
   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
   * quickly.
   *
   * @param {DOMEventTarget} ancestorNode Search from this root.
   * @pararm {string} targetID ID of the DOM representation of the component.
   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
   * @internal
   */
  findComponentRoot: function (ancestorNode, targetID) {
    var firstChildren = findComponentRootReusableArray;
    var childIndex = 0;

    var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;

    if (process.env.NODE_ENV !== 'production') {
      // This will throw on the next line; give an early warning
      process.env.NODE_ENV !== 'production' ? warning(deepestAncestor != null, 'React can\'t find the root component node for data-reactid value ' + '`%s`. If you\'re seeing this message, it probably means that ' + 'you\'ve loaded two copies of React on the page. At this time, only ' + 'a single copy of React can be loaded at a time.', targetID) : undefined;
    }

    firstChildren[0] = deepestAncestor.firstChild;
    firstChildren.length = 1;

    while (childIndex < firstChildren.length) {
      var child = firstChildren[childIndex++];
      var targetChild;

      while (child) {
        var childID = ReactMount.getID(child);
        if (childID) {
          // Even if we find the node we're looking for, we finish looping
          // through its siblings to ensure they're cached so that we don't have
          // to revisit this node again. Otherwise, we make n^2 calls to getID
          // when visiting the many children of a single node in order.

          if (targetID === childID) {
            targetChild = child;
          } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
            // If we find a child whose ID is an ancestor of the given ID,
            // then we can be sure that we only want to search the subtree
            // rooted at this child, so we can throw out the rest of the
            // search state.
            firstChildren.length = childIndex = 0;
            firstChildren.push(child.firstChild);
          }
        } else {
          // If this child had no ID, then there's a chance that it was
          // injected automatically by the browser, as when a `<table>`
          // element sprouts an extra `<tbody>` child as a side effect of
          // `.innerHTML` parsing. Optimistically continue down this
          // branch, but not before examining the other siblings.
          firstChildren.push(child.firstChild);
        }

        child = child.nextSibling;
      }

      if (targetChild) {
        // Emptying firstChildren/findComponentRootReusableArray is
        // not necessary for correctness, but it helps the GC reclaim
        // any nodes that were left at the end of the search.
        firstChildren.length = 0;

        return targetChild;
      }
    }

    firstChildren.length = 0;

    !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findComponentRoot(..., %s): Unable to find element. This probably ' + 'means the DOM was unexpectedly mutated (e.g., by the browser), ' + 'usually due to forgetting a <tbody> when using tables, nesting tags ' + 'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' + 'parent. ' + 'Try inspecting the child nodes of the element with React ID `%s`.', targetID, ReactMount.getID(ancestorNode)) : invariant(false) : undefined;
  },

  _mountImageIntoNode: function (markup, container, shouldReuseMarkup, transaction) {
    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mountComponentIntoNode(...): Target container is not valid.') : invariant(false) : undefined;

    if (shouldReuseMarkup) {
      var rootElement = getReactRootElementInContainer(container);
      if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
        return;
      } else {
        var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
        rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);

        var rootMarkup = rootElement.outerHTML;
        rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);

        var normalizedMarkup = markup;
        if (process.env.NODE_ENV !== 'production') {
          // because rootMarkup is retrieved from the DOM, various normalizations
          // will have occurred which will not be present in `markup`. Here,
          // insert markup into a <div> or <iframe> depending on the container
          // type to perform the same normalizations before comparing.
          var normalizer;
          if (container.nodeType === ELEMENT_NODE_TYPE) {
            normalizer = document.createElement('div');
            normalizer.innerHTML = markup;
            normalizedMarkup = normalizer.innerHTML;
          } else {
            normalizer = document.createElement('iframe');
            document.body.appendChild(normalizer);
            normalizer.contentDocument.write(markup);
            normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
            document.body.removeChild(normalizer);
          }
        }

        var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
        var difference = ' (client) ' + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);

        !(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document using ' + 'server rendering but the checksum was invalid. This usually ' + 'means you rendered a different component type or props on ' + 'the client from the one on the server, or your render() ' + 'methods are impure. React cannot handle this case due to ' + 'cross-browser quirks by rendering at the document root. You ' + 'should look for environment dependent code in your components ' + 'and ensure the props are the same client and server side:\n%s', difference) : invariant(false) : undefined;

        if (process.env.NODE_ENV !== 'production') {
          process.env.NODE_ENV !== 'production' ? warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : undefined;
        }
      }
    }

    !(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document but ' + 'you didn\'t use server rendering. We can\'t do this ' + 'without using server rendering due to cross-browser quirks. ' + 'See ReactDOMServer.renderToString() for server rendering.') : invariant(false) : undefined;

    if (transaction.useCreateElement) {
      while (container.lastChild) {
        container.removeChild(container.lastChild);
      }
      container.appendChild(markup);
    } else {
      setInnerHTML(container, markup);
    }
  },

  ownerDocumentContextKey: ownerDocumentContextKey,

  /**
   * React ID utilities.
   */

  getReactRootID: getReactRootID,

  getID: getID,

  setID: setID,

  getNode: getNode,

  getNodeFromInstance: getNodeFromInstance,

  isValid: isValid,

  purgeID: purgeID
};

ReactPerf.measureMethods(ReactMount, 'ReactMount', {
  _renderNewRootComponent: '_renderNewRootComponent',
  _mountImageIntoNode: '_mountImageIntoNode'
});

module.exports = ReactMount;
}).call(this,require('_process'))
},{"./DOMProperty":12,"./Object.assign":25,"./ReactBrowserEventEmitter":29,"./ReactCurrentOwner":37,"./ReactDOMFeatureFlags":42,"./ReactElement":55,"./ReactEmptyComponentRegistry":58,"./ReactInstanceHandles":64,"./ReactInstanceMap":65,"./ReactMarkupChecksum":67,"./ReactPerf":74,"./ReactReconciler":79,"./ReactUpdateQueue":85,"./ReactUpdates":86,"./instantiateReactComponent":121,"./setInnerHTML":127,"./shouldUpdateReactComponent":129,"./validateDOMNesting":131,"_process":2,"fbjs/lib/containsNode":136,"fbjs/lib/emptyObject":140,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],69:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChild
 * @typechecks static-only
 */

'use strict';

var ReactComponentEnvironment = require('./ReactComponentEnvironment');
var ReactMultiChildUpdateTypes = require('./ReactMultiChildUpdateTypes');

var ReactCurrentOwner = require('./ReactCurrentOwner');
var ReactReconciler = require('./ReactReconciler');
var ReactChildReconciler = require('./ReactChildReconciler');

var flattenChildren = require('./flattenChildren');

/**
 * Updating children of a component may trigger recursive updates. The depth is
 * used to batch recursive updates to render markup more efficiently.
 *
 * @type {number}
 * @private
 */
var updateDepth = 0;

/**
 * Queue of update configuration objects.
 *
 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
 *
 * @type {array<object>}
 * @private
 */
var updateQueue = [];

/**
 * Queue of markup to be rendered.
 *
 * @type {array<string>}
 * @private
 */
var markupQueue = [];

/**
 * Enqueues markup to be rendered and inserted at a supplied index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} markup Markup that renders into an element.
 * @param {number} toIndex Destination index.
 * @private
 */
function enqueueInsertMarkup(parentID, markup, toIndex) {
  // NOTE: Null values reduce hidden classes.
  updateQueue.push({
    parentID: parentID,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
    markupIndex: markupQueue.push(markup) - 1,
    content: null,
    fromIndex: null,
    toIndex: toIndex
  });
}

/**
 * Enqueues moving an existing element to another index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {number} fromIndex Source index of the existing element.
 * @param {number} toIndex Destination index of the element.
 * @private
 */
function enqueueMove(parentID, fromIndex, toIndex) {
  // NOTE: Null values reduce hidden classes.
  updateQueue.push({
    parentID: parentID,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
    markupIndex: null,
    content: null,
    fromIndex: fromIndex,
    toIndex: toIndex
  });
}

/**
 * Enqueues removing an element at an index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {number} fromIndex Index of the element to remove.
 * @private
 */
function enqueueRemove(parentID, fromIndex) {
  // NOTE: Null values reduce hidden classes.
  updateQueue.push({
    parentID: parentID,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.REMOVE_NODE,
    markupIndex: null,
    content: null,
    fromIndex: fromIndex,
    toIndex: null
  });
}

/**
 * Enqueues setting the markup of a node.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} markup Markup that renders into an element.
 * @private
 */
function enqueueSetMarkup(parentID, markup) {
  // NOTE: Null values reduce hidden classes.
  updateQueue.push({
    parentID: parentID,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.SET_MARKUP,
    markupIndex: null,
    content: markup,
    fromIndex: null,
    toIndex: null
  });
}

/**
 * Enqueues setting the text content.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} textContent Text content to set.
 * @private
 */
function enqueueTextContent(parentID, textContent) {
  // NOTE: Null values reduce hidden classes.
  updateQueue.push({
    parentID: parentID,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
    markupIndex: null,
    content: textContent,
    fromIndex: null,
    toIndex: null
  });
}

/**
 * Processes any enqueued updates.
 *
 * @private
 */
function processQueue() {
  if (updateQueue.length) {
    ReactComponentEnvironment.processChildrenUpdates(updateQueue, markupQueue);
    clearQueue();
  }
}

/**
 * Clears any enqueued updates.
 *
 * @private
 */
function clearQueue() {
  updateQueue.length = 0;
  markupQueue.length = 0;
}

/**
 * ReactMultiChild are capable of reconciling multiple children.
 *
 * @class ReactMultiChild
 * @internal
 */
var ReactMultiChild = {

  /**
   * Provides common functionality for components that must reconcile multiple
   * children. This is used by `ReactDOMComponent` to mount, update, and
   * unmount child components.
   *
   * @lends {ReactMultiChild.prototype}
   */
  Mixin: {

    _reconcilerInstantiateChildren: function (nestedChildren, transaction, context) {
      if (process.env.NODE_ENV !== 'production') {
        if (this._currentElement) {
          try {
            ReactCurrentOwner.current = this._currentElement._owner;
            return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
          } finally {
            ReactCurrentOwner.current = null;
          }
        }
      }
      return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
    },

    _reconcilerUpdateChildren: function (prevChildren, nextNestedChildrenElements, transaction, context) {
      var nextChildren;
      if (process.env.NODE_ENV !== 'production') {
        if (this._currentElement) {
          try {
            ReactCurrentOwner.current = this._currentElement._owner;
            nextChildren = flattenChildren(nextNestedChildrenElements);
          } finally {
            ReactCurrentOwner.current = null;
          }
          return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
        }
      }
      nextChildren = flattenChildren(nextNestedChildrenElements);
      return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
    },

    /**
     * Generates a "mount image" for each of the supplied children. In the case
     * of `ReactDOMComponent`, a mount image is a string of markup.
     *
     * @param {?object} nestedChildren Nested child maps.
     * @return {array} An array of mounted representations.
     * @internal
     */
    mountChildren: function (nestedChildren, transaction, context) {
      var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
      this._renderedChildren = children;
      var mountImages = [];
      var index = 0;
      for (var name in children) {
        if (children.hasOwnProperty(name)) {
          var child = children[name];
          // Inlined for performance, see `ReactInstanceHandles.createReactID`.
          var rootID = this._rootNodeID + name;
          var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
          child._mountIndex = index++;
          mountImages.push(mountImage);
        }
      }
      return mountImages;
    },

    /**
     * Replaces any rendered children with a text content string.
     *
     * @param {string} nextContent String of content.
     * @internal
     */
    updateTextContent: function (nextContent) {
      updateDepth++;
      var errorThrown = true;
      try {
        var prevChildren = this._renderedChildren;
        // Remove any rendered children.
        ReactChildReconciler.unmountChildren(prevChildren);
        // TODO: The setTextContent operation should be enough
        for (var name in prevChildren) {
          if (prevChildren.hasOwnProperty(name)) {
            this._unmountChild(prevChildren[name]);
          }
        }
        // Set new text content.
        this.setTextContent(nextContent);
        errorThrown = false;
      } finally {
        updateDepth--;
        if (!updateDepth) {
          if (errorThrown) {
            clearQueue();
          } else {
            processQueue();
          }
        }
      }
    },

    /**
     * Replaces any rendered children with a markup string.
     *
     * @param {string} nextMarkup String of markup.
     * @internal
     */
    updateMarkup: function (nextMarkup) {
      updateDepth++;
      var errorThrown = true;
      try {
        var prevChildren = this._renderedChildren;
        // Remove any rendered children.
        ReactChildReconciler.unmountChildren(prevChildren);
        for (var name in prevChildren) {
          if (prevChildren.hasOwnProperty(name)) {
            this._unmountChildByName(prevChildren[name], name);
          }
        }
        this.setMarkup(nextMarkup);
        errorThrown = false;
      } finally {
        updateDepth--;
        if (!updateDepth) {
          if (errorThrown) {
            clearQueue();
          } else {
            processQueue();
          }
        }
      }
    },

    /**
     * Updates the rendered children with new children.
     *
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
    updateChildren: function (nextNestedChildrenElements, transaction, context) {
      updateDepth++;
      var errorThrown = true;
      try {
        this._updateChildren(nextNestedChildrenElements, transaction, context);
        errorThrown = false;
      } finally {
        updateDepth--;
        if (!updateDepth) {
          if (errorThrown) {
            clearQueue();
          } else {
            processQueue();
          }
        }
      }
    },

    /**
     * Improve performance by isolating this hot code path from the try/catch
     * block in `updateChildren`.
     *
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @final
     * @protected
     */
    _updateChildren: function (nextNestedChildrenElements, transaction, context) {
      var prevChildren = this._renderedChildren;
      var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, transaction, context);
      this._renderedChildren = nextChildren;
      if (!nextChildren && !prevChildren) {
        return;
      }
      var name;
      // `nextIndex` will increment for each child in `nextChildren`, but
      // `lastIndex` will be the last index visited in `prevChildren`.
      var lastIndex = 0;
      var nextIndex = 0;
      for (name in nextChildren) {
        if (!nextChildren.hasOwnProperty(name)) {
          continue;
        }
        var prevChild = prevChildren && prevChildren[name];
        var nextChild = nextChildren[name];
        if (prevChild === nextChild) {
          this.moveChild(prevChild, nextIndex, lastIndex);
          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
          prevChild._mountIndex = nextIndex;
        } else {
          if (prevChild) {
            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
            this._unmountChild(prevChild);
          }
          // The child must be instantiated before it's mounted.
          this._mountChildByNameAtIndex(nextChild, name, nextIndex, transaction, context);
        }
        nextIndex++;
      }
      // Remove children that are no longer present.
      for (name in prevChildren) {
        if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
          this._unmountChild(prevChildren[name]);
        }
      }
    },

    /**
     * Unmounts all rendered children. This should be used to clean up children
     * when this component is unmounted.
     *
     * @internal
     */
    unmountChildren: function () {
      var renderedChildren = this._renderedChildren;
      ReactChildReconciler.unmountChildren(renderedChildren);
      this._renderedChildren = null;
    },

    /**
     * Moves a child component to the supplied index.
     *
     * @param {ReactComponent} child Component to move.
     * @param {number} toIndex Destination index of the element.
     * @param {number} lastIndex Last index visited of the siblings of `child`.
     * @protected
     */
    moveChild: function (child, toIndex, lastIndex) {
      // If the index of `child` is less than `lastIndex`, then it needs to
      // be moved. Otherwise, we do not need to move it because a child will be
      // inserted or moved before `child`.
      if (child._mountIndex < lastIndex) {
        enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
      }
    },

    /**
     * Creates a child component.
     *
     * @param {ReactComponent} child Component to create.
     * @param {string} mountImage Markup to insert.
     * @protected
     */
    createChild: function (child, mountImage) {
      enqueueInsertMarkup(this._rootNodeID, mountImage, child._mountIndex);
    },

    /**
     * Removes a child component.
     *
     * @param {ReactComponent} child Child to remove.
     * @protected
     */
    removeChild: function (child) {
      enqueueRemove(this._rootNodeID, child._mountIndex);
    },

    /**
     * Sets this text content string.
     *
     * @param {string} textContent Text content to set.
     * @protected
     */
    setTextContent: function (textContent) {
      enqueueTextContent(this._rootNodeID, textContent);
    },

    /**
     * Sets this markup string.
     *
     * @param {string} markup Markup to set.
     * @protected
     */
    setMarkup: function (markup) {
      enqueueSetMarkup(this._rootNodeID, markup);
    },

    /**
     * Mounts a child with the supplied name.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to mount.
     * @param {string} name Name of the child.
     * @param {number} index Index at which to insert the child.
     * @param {ReactReconcileTransaction} transaction
     * @private
     */
    _mountChildByNameAtIndex: function (child, name, index, transaction, context) {
      // Inlined for performance, see `ReactInstanceHandles.createReactID`.
      var rootID = this._rootNodeID + name;
      var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
      child._mountIndex = index;
      this.createChild(child, mountImage);
    },

    /**
     * Unmounts a rendered child.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to unmount.
     * @private
     */
    _unmountChild: function (child) {
      this.removeChild(child);
      child._mountIndex = null;
    }

  }

};

module.exports = ReactMultiChild;
}).call(this,require('_process'))
},{"./ReactChildReconciler":30,"./ReactComponentEnvironment":35,"./ReactCurrentOwner":37,"./ReactMultiChildUpdateTypes":70,"./ReactReconciler":79,"./flattenChildren":112,"_process":2}],70:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChildUpdateTypes
 */

'use strict';

var keyMirror = require('fbjs/lib/keyMirror');

/**
 * When a component's children are updated, a series of update configuration
 * objects are created in order to batch and serialize the required changes.
 *
 * Enumerates all the possible types of update configurations.
 *
 * @internal
 */
var ReactMultiChildUpdateTypes = keyMirror({
  INSERT_MARKUP: null,
  MOVE_EXISTING: null,
  REMOVE_NODE: null,
  SET_MARKUP: null,
  TEXT_CONTENT: null
});

module.exports = ReactMultiChildUpdateTypes;
},{"fbjs/lib/keyMirror":150}],71:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNativeComponent
 */

'use strict';

var assign = require('./Object.assign');
var invariant = require('fbjs/lib/invariant');

var autoGenerateWrapperClass = null;
var genericComponentClass = null;
// This registry keeps track of wrapper classes around native tags.
var tagToComponentClass = {};
var textComponentClass = null;

var ReactNativeComponentInjection = {
  // This accepts a class that receives the tag string. This is a catch all
  // that can render any kind of tag.
  injectGenericComponentClass: function (componentClass) {
    genericComponentClass = componentClass;
  },
  // This accepts a text component class that takes the text string to be
  // rendered as props.
  injectTextComponentClass: function (componentClass) {
    textComponentClass = componentClass;
  },
  // This accepts a keyed object with classes as values. Each key represents a
  // tag. That particular tag will use this class instead of the generic one.
  injectComponentClasses: function (componentClasses) {
    assign(tagToComponentClass, componentClasses);
  }
};

/**
 * Get a composite component wrapper class for a specific tag.
 *
 * @param {ReactElement} element The tag for which to get the class.
 * @return {function} The React class constructor function.
 */
function getComponentClassForElement(element) {
  if (typeof element.type === 'function') {
    return element.type;
  }
  var tag = element.type;
  var componentClass = tagToComponentClass[tag];
  if (componentClass == null) {
    tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);
  }
  return componentClass;
}

/**
 * Get a native internal component class for a specific tag.
 *
 * @param {ReactElement} element The element to create.
 * @return {function} The internal class constructor function.
 */
function createInternalComponent(element) {
  !genericComponentClass ? process.env.NODE_ENV !== 'production' ? invariant(false, 'There is no registered component for the tag %s', element.type) : invariant(false) : undefined;
  return new genericComponentClass(element.type, element.props);
}

/**
 * @param {ReactText} text
 * @return {ReactComponent}
 */
function createInstanceForText(text) {
  return new textComponentClass(text);
}

/**
 * @param {ReactComponent} component
 * @return {boolean}
 */
function isTextComponent(component) {
  return component instanceof textComponentClass;
}

var ReactNativeComponent = {
  getComponentClassForElement: getComponentClassForElement,
  createInternalComponent: createInternalComponent,
  createInstanceForText: createInstanceForText,
  isTextComponent: isTextComponent,
  injection: ReactNativeComponentInjection
};

module.exports = ReactNativeComponent;
}).call(this,require('_process'))
},{"./Object.assign":25,"_process":2,"fbjs/lib/invariant":147}],72:[function(require,module,exports){
(function (process){
/**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNoopUpdateQueue
 */

'use strict';

var warning = require('fbjs/lib/warning');

function warnTDZ(publicInstance, callerName) {
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor && publicInstance.constructor.displayName || '') : undefined;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {

  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    warnTDZ(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    warnTDZ(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnTDZ(publicInstance, 'setState');
  },

  /**
   * Sets a subset of the props.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialProps Subset of the next props.
   * @internal
   */
  enqueueSetProps: function (publicInstance, partialProps) {
    warnTDZ(publicInstance, 'setProps');
  },

  /**
   * Replaces all of the props.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} props New props.
   * @internal
   */
  enqueueReplaceProps: function (publicInstance, props) {
    warnTDZ(publicInstance, 'replaceProps');
  }

};

module.exports = ReactNoopUpdateQueue;
}).call(this,require('_process'))
},{"_process":2,"fbjs/lib/warning":158}],73:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactOwner
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 * ReactOwners are capable of storing references to owned components.
 *
 * All components are capable of //being// referenced by owner components, but
 * only ReactOwner components are capable of //referencing// owned components.
 * The named reference is known as a "ref".
 *
 * Refs are available when mounted and updated during reconciliation.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return (
 *         <div onClick={this.handleClick}>
 *           <CustomComponent ref="custom" />
 *         </div>
 *       );
 *     },
 *     handleClick: function() {
 *       this.refs.custom.handleClick();
 *     },
 *     componentDidMount: function() {
 *       this.refs.custom.initialize();
 *     }
 *   });
 *
 * Refs should rarely be used. When refs are used, they should only be done to
 * control data that is not handled by React's data flow.
 *
 * @class ReactOwner
 */
var ReactOwner = {

  /**
   * @param {?object} object
   * @return {boolean} True if `object` is a valid owner.
   * @final
   */
  isValidOwner: function (object) {
    return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
  },

  /**
   * Adds a component by ref to an owner component.
   *
   * @param {ReactComponent} component Component to reference.
   * @param {string} ref Name by which to refer to the component.
   * @param {ReactOwner} owner Component on which to record the ref.
   * @final
   * @internal
   */
  addComponentAsRefTo: function (component, ref, owner) {
    !ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might ' + 'be adding a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : undefined;
    owner.attachRef(ref, component);
  },

  /**
   * Removes a component by ref from an owner component.
   *
   * @param {ReactComponent} component Component to dereference.
   * @param {string} ref Name of the ref to remove.
   * @param {ReactOwner} owner Component on which the ref is recorded.
   * @final
   * @internal
   */
  removeComponentAsRefFrom: function (component, ref, owner) {
    !ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might ' + 'be removing a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : undefined;
    // Check that `component` is still the current ref because we do not want to
    // detach the ref if another component stole it.
    if (owner.getPublicInstance().refs[ref] === component.getPublicInstance()) {
      owner.detachRef(ref);
    }
  }

};

module.exports = ReactOwner;
}).call(this,require('_process'))
},{"_process":2,"fbjs/lib/invariant":147}],74:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPerf
 * @typechecks static-only
 */

'use strict';

/**
 * ReactPerf is a general AOP system designed to measure performance. This
 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
 */
var ReactPerf = {
  /**
   * Boolean to enable/disable measurement. Set to false by default to prevent
   * accidental logging and perf loss.
   */
  enableMeasure: false,

  /**
   * Holds onto the measure function in use. By default, don't measure
   * anything, but we'll override this if we inject a measure function.
   */
  storedMeasure: _noMeasure,

  /**
   * @param {object} object
   * @param {string} objectName
   * @param {object<string>} methodNames
   */
  measureMethods: function (object, objectName, methodNames) {
    if (process.env.NODE_ENV !== 'production') {
      for (var key in methodNames) {
        if (!methodNames.hasOwnProperty(key)) {
          continue;
        }
        object[key] = ReactPerf.measure(objectName, methodNames[key], object[key]);
      }
    }
  },

  /**
   * Use this to wrap methods you want to measure. Zero overhead in production.
   *
   * @param {string} objName
   * @param {string} fnName
   * @param {function} func
   * @return {function}
   */
  measure: function (objName, fnName, func) {
    if (process.env.NODE_ENV !== 'production') {
      var measuredFunc = null;
      var wrapper = function () {
        if (ReactPerf.enableMeasure) {
          if (!measuredFunc) {
            measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
          }
          return measuredFunc.apply(this, arguments);
        }
        return func.apply(this, arguments);
      };
      wrapper.displayName = objName + '_' + fnName;
      return wrapper;
    }
    return func;
  },

  injection: {
    /**
     * @param {function} measure
     */
    injectMeasure: function (measure) {
      ReactPerf.storedMeasure = measure;
    }
  }
};

/**
 * Simply passes through the measured function, without measuring it.
 *
 * @param {string} objName
 * @param {string} fnName
 * @param {function} func
 * @return {function}
 */
function _noMeasure(objName, fnName, func) {
  return func;
}

module.exports = ReactPerf;
}).call(this,require('_process'))
},{"_process":2}],75:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocationNames
 */

'use strict';

var ReactPropTypeLocationNames = {};

if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

module.exports = ReactPropTypeLocationNames;
}).call(this,require('_process'))
},{"_process":2}],76:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocations
 */

'use strict';

var keyMirror = require('fbjs/lib/keyMirror');

var ReactPropTypeLocations = keyMirror({
  prop: null,
  context: null,
  childContext: null
});

module.exports = ReactPropTypeLocations;
},{"fbjs/lib/keyMirror":150}],77:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypes
 */

'use strict';

var ReactElement = require('./ReactElement');
var ReactPropTypeLocationNames = require('./ReactPropTypeLocationNames');

var emptyFunction = require('fbjs/lib/emptyFunction');
var getIteratorFn = require('./getIteratorFn');

/**
 * Collection of methods that allow declaration and validation of props that are
 * supplied to React components. Example usage:
 *
 *   var Props = require('ReactPropTypes');
 *   var MyArticle = React.createClass({
 *     propTypes: {
 *       // An optional string prop named "description".
 *       description: Props.string,
 *
 *       // A required enum prop named "category".
 *       category: Props.oneOf(['News','Photos']).isRequired,
 *
 *       // A prop named "dialog" that requires an instance of Dialog.
 *       dialog: Props.instanceOf(Dialog).isRequired
 *     },
 *     render: function() { ... }
 *   });
 *
 * A more formal specification of how these methods are used:
 *
 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
 *   decl := ReactPropTypes.{type}(.isRequired)?
 *
 * Each and every declaration produces a function with the same signature. This
 * allows the creation of custom validation functions. For example:
 *
 *  var MyLink = React.createClass({
 *    propTypes: {
 *      // An optional string or URI prop named "href".
 *      href: function(props, propName, componentName) {
 *        var propValue = props[propName];
 *        if (propValue != null && typeof propValue !== 'string' &&
 *            !(propValue instanceof URI)) {
 *          return new Error(
 *            'Expected a string or an URI for ' + propName + ' in ' +
 *            componentName
 *          );
 *        }
 *      }
 *    },
 *    render: function() {...}
 *  });
 *
 * @internal
 */

var ANONYMOUS = '<<anonymous>>';

var ReactPropTypes = {
  array: createPrimitiveTypeChecker('array'),
  bool: createPrimitiveTypeChecker('boolean'),
  func: createPrimitiveTypeChecker('function'),
  number: createPrimitiveTypeChecker('number'),
  object: createPrimitiveTypeChecker('object'),
  string: createPrimitiveTypeChecker('string'),

  any: createAnyTypeChecker(),
  arrayOf: createArrayOfTypeChecker,
  element: createElementTypeChecker(),
  instanceOf: createInstanceTypeChecker,
  node: createNodeChecker(),
  objectOf: createObjectOfTypeChecker,
  oneOf: createEnumTypeChecker,
  oneOfType: createUnionTypeChecker,
  shape: createShapeTypeChecker
};

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    componentName = componentName || ANONYMOUS;
    propFullName = propFullName || propName;
    if (props[propName] == null) {
      var locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
      }
      return null;
    } else {
      return validate(props, propName, componentName, location, propFullName);
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function createPrimitiveTypeChecker(expectedType) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== expectedType) {
      var locationName = ReactPropTypeLocationNames[location];
      // `propValue` being instance of, say, date/regexp, pass the 'object'
      // check, but we can offer a more precise error message here rather than
      // 'of type `object`'.
      var preciseType = getPreciseType(propValue);

      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createAnyTypeChecker() {
  return createChainableTypeChecker(emptyFunction.thatReturns(null));
}

function createArrayOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    if (!Array.isArray(propValue)) {
      var locationName = ReactPropTypeLocationNames[location];
      var propType = getPropType(propValue);
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
    }
    for (var i = 0; i < propValue.length; i++) {
      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
      if (error instanceof Error) {
        return error;
      }
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createElementTypeChecker() {
  function validate(props, propName, componentName, location, propFullName) {
    if (!ReactElement.isValidElement(props[propName])) {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createInstanceTypeChecker(expectedClass) {
  function validate(props, propName, componentName, location, propFullName) {
    if (!(props[propName] instanceof expectedClass)) {
      var locationName = ReactPropTypeLocationNames[location];
      var expectedClassName = expectedClass.name || ANONYMOUS;
      var actualClassName = getClassName(props[propName]);
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createEnumTypeChecker(expectedValues) {
  if (!Array.isArray(expectedValues)) {
    return createChainableTypeChecker(function () {
      return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
    });
  }

  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    for (var i = 0; i < expectedValues.length; i++) {
      if (propValue === expectedValues[i]) {
        return null;
      }
    }

    var locationName = ReactPropTypeLocationNames[location];
    var valuesString = JSON.stringify(expectedValues);
    return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
  }
  return createChainableTypeChecker(validate);
}

function createObjectOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== 'object') {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
    }
    for (var key in propValue) {
      if (propValue.hasOwnProperty(key)) {
        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
        if (error instanceof Error) {
          return error;
        }
      }
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createUnionTypeChecker(arrayOfTypeCheckers) {
  if (!Array.isArray(arrayOfTypeCheckers)) {
    return createChainableTypeChecker(function () {
      return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
    });
  }

  function validate(props, propName, componentName, location, propFullName) {
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (checker(props, propName, componentName, location, propFullName) == null) {
        return null;
      }
    }

    var locationName = ReactPropTypeLocationNames[location];
    return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
  }
  return createChainableTypeChecker(validate);
}

function createNodeChecker() {
  function validate(props, propName, componentName, location, propFullName) {
    if (!isNode(props[propName])) {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createShapeTypeChecker(shapeTypes) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== 'object') {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
    }
    for (var key in shapeTypes) {
      var checker = shapeTypes[key];
      if (!checker) {
        continue;
      }
      var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
      if (error) {
        return error;
      }
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function isNode(propValue) {
  switch (typeof propValue) {
    case 'number':
    case 'string':
    case 'undefined':
      return true;
    case 'boolean':
      return !propValue;
    case 'object':
      if (Array.isArray(propValue)) {
        return propValue.every(isNode);
      }
      if (propValue === null || ReactElement.isValidElement(propValue)) {
        return true;
      }

      var iteratorFn = getIteratorFn(propValue);
      if (iteratorFn) {
        var iterator = iteratorFn.call(propValue);
        var step;
        if (iteratorFn !== propValue.entries) {
          while (!(step = iterator.next()).done) {
            if (!isNode(step.value)) {
              return false;
            }
          }
        } else {
          // Iterator will provide entry [k,v] tuples rather than values.
          while (!(step = iterator.next()).done) {
            var entry = step.value;
            if (entry) {
              if (!isNode(entry[1])) {
                return false;
              }
            }
          }
        }
      } else {
        return false;
      }

      return true;
    default:
      return false;
  }
}

// Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue) {
  var propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return 'array';
  }
  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return 'object';
  }
  return propType;
}

// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue) {
  var propType = getPropType(propValue);
  if (propType === 'object') {
    if (propValue instanceof Date) {
      return 'date';
    } else if (propValue instanceof RegExp) {
      return 'regexp';
    }
  }
  return propType;
}

// Returns class name of the object, if any.
function getClassName(propValue) {
  if (!propValue.constructor || !propValue.constructor.name) {
    return '<<anonymous>>';
  }
  return propValue.constructor.name;
}

module.exports = ReactPropTypes;
},{"./ReactElement":55,"./ReactPropTypeLocationNames":75,"./getIteratorFn":118,"fbjs/lib/emptyFunction":139}],78:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconcileTransaction
 * @typechecks static-only
 */

'use strict';

var CallbackQueue = require('./CallbackQueue');
var PooledClass = require('./PooledClass');
var ReactBrowserEventEmitter = require('./ReactBrowserEventEmitter');
var ReactDOMFeatureFlags = require('./ReactDOMFeatureFlags');
var ReactInputSelection = require('./ReactInputSelection');
var Transaction = require('./Transaction');

var assign = require('./Object.assign');

/**
 * Ensures that, when possible, the selection range (currently selected text
 * input) is not disturbed by performing the transaction.
 */
var SELECTION_RESTORATION = {
  /**
   * @return {Selection} Selection information.
   */
  initialize: ReactInputSelection.getSelectionInformation,
  /**
   * @param {Selection} sel Selection information returned from `initialize`.
   */
  close: ReactInputSelection.restoreSelection
};

/**
 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
 * high level DOM manipulations (like temporarily removing a text input from the
 * DOM).
 */
var EVENT_SUPPRESSION = {
  /**
   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
   * the reconciliation.
   */
  initialize: function () {
    var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
    ReactBrowserEventEmitter.setEnabled(false);
    return currentlyEnabled;
  },

  /**
   * @param {boolean} previouslyEnabled Enabled status of
   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
   *   restores the previous value.
   */
  close: function (previouslyEnabled) {
    ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
  }
};

/**
 * Provides a queue for collecting `componentDidMount` and
 * `componentDidUpdate` callbacks during the the transaction.
 */
var ON_DOM_READY_QUEUEING = {
  /**
   * Initializes the internal `onDOMReady` queue.
   */
  initialize: function () {
    this.reactMountReady.reset();
  },

  /**
   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
   */
  close: function () {
    this.reactMountReady.notifyAll();
  }
};

/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
var TRANSACTION_WRAPPERS = [SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];

/**
 * Currently:
 * - The order that these are listed in the transaction is critical:
 * - Suppresses events.
 * - Restores selection range.
 *
 * Future:
 * - Restore document/overflow scroll positions that were unintentionally
 *   modified via DOM insertions above the top viewport boundary.
 * - Implement/integrate with customized constraint based layout system and keep
 *   track of which dimensions must be remeasured.
 *
 * @class ReactReconcileTransaction
 */
function ReactReconcileTransaction(forceHTML) {
  this.reinitializeTransaction();
  // Only server-side rendering really needs this option (see
  // `ReactServerRendering`), but server-side uses
  // `ReactServerRenderingTransaction` instead. This option is here so that it's
  // accessible and defaults to false when `ReactDOMComponent` and
  // `ReactTextComponent` checks it in `mountComponent`.`
  this.renderToStaticMarkup = false;
  this.reactMountReady = CallbackQueue.getPooled(null);
  this.useCreateElement = !forceHTML && ReactDOMFeatureFlags.useCreateElement;
}

var Mixin = {
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array<object>} List of operation wrap procedures.
   *   TODO: convert to array<TransactionWrapper>
   */
  getTransactionWrappers: function () {
    return TRANSACTION_WRAPPERS;
  },

  /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
  getReactMountReady: function () {
    return this.reactMountReady;
  },

  /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */
  destructor: function () {
    CallbackQueue.release(this.reactMountReady);
    this.reactMountReady = null;
  }
};

assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);

PooledClass.addPoolingTo(ReactReconcileTransaction);

module.exports = ReactReconcileTransaction;
},{"./CallbackQueue":8,"./Object.assign":25,"./PooledClass":26,"./ReactBrowserEventEmitter":29,"./ReactDOMFeatureFlags":42,"./ReactInputSelection":63,"./Transaction":103}],79:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconciler
 */

'use strict';

var ReactRef = require('./ReactRef');

/**
 * Helper to call ReactRef.attachRefs with this composite component, split out
 * to avoid allocations in the transaction mount-ready queue.
 */
function attachRefs() {
  ReactRef.attachRefs(this, this._currentElement);
}

var ReactReconciler = {

  /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {ReactComponent} internalInstance
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */
  mountComponent: function (internalInstance, rootID, transaction, context) {
    var markup = internalInstance.mountComponent(rootID, transaction, context);
    if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
    }
    return markup;
  },

  /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */
  unmountComponent: function (internalInstance) {
    ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
    internalInstance.unmountComponent();
  },

  /**
   * Update a component using a new element.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @internal
   */
  receiveComponent: function (internalInstance, nextElement, transaction, context) {
    var prevElement = internalInstance._currentElement;

    if (nextElement === prevElement && context === internalInstance._context) {
      // Since elements are immutable after the owner is rendered,
      // we can do a cheap identity compare here to determine if this is a
      // superfluous reconcile. It's possible for state to be mutable but such
      // change should trigger an update of the owner which would recreate
      // the element. We explicitly check for the existence of an owner since
      // it's possible for an element created outside a composite to be
      // deeply mutated and reused.

      // TODO: Bailing out early is just a perf optimization right?
      // TODO: Removing the return statement should affect correctness?
      return;
    }

    var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);

    if (refsChanged) {
      ReactRef.detachRefs(internalInstance, prevElement);
    }

    internalInstance.receiveComponent(nextElement, transaction, context);

    if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
    }
  },

  /**
   * Flush any dirty changes in a component.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  performUpdateIfNecessary: function (internalInstance, transaction) {
    internalInstance.performUpdateIfNecessary(transaction);
  }

};

module.exports = ReactReconciler;
},{"./ReactRef":80}],80:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRef
 */

'use strict';

var ReactOwner = require('./ReactOwner');

var ReactRef = {};

function attachRef(ref, component, owner) {
  if (typeof ref === 'function') {
    ref(component.getPublicInstance());
  } else {
    // Legacy ref
    ReactOwner.addComponentAsRefTo(component, ref, owner);
  }
}

function detachRef(ref, component, owner) {
  if (typeof ref === 'function') {
    ref(null);
  } else {
    // Legacy ref
    ReactOwner.removeComponentAsRefFrom(component, ref, owner);
  }
}

ReactRef.attachRefs = function (instance, element) {
  if (element === null || element === false) {
    return;
  }
  var ref = element.ref;
  if (ref != null) {
    attachRef(ref, instance, element._owner);
  }
};

ReactRef.shouldUpdateRefs = function (prevElement, nextElement) {
  // If either the owner or a `ref` has changed, make sure the newest owner
  // has stored a reference to `this`, and the previous owner (if different)
  // has forgotten the reference to `this`. We use the element instead
  // of the public this.props because the post processing cannot determine
  // a ref. The ref conceptually lives on the element.

  // TODO: Should this even be possible? The owner cannot change because
  // it's forbidden by shouldUpdateReactComponent. The ref can change
  // if you swap the keys of but not the refs. Reconsider where this check
  // is made. It probably belongs where the key checking and
  // instantiateReactComponent is done.

  var prevEmpty = prevElement === null || prevElement === false;
  var nextEmpty = nextElement === null || nextElement === false;

  return(
    // This has a few false positives w/r/t empty components.
    prevEmpty || nextEmpty || nextElement._owner !== prevElement._owner || nextElement.ref !== prevElement.ref
  );
};

ReactRef.detachRefs = function (instance, element) {
  if (element === null || element === false) {
    return;
  }
  var ref = element.ref;
  if (ref != null) {
    detachRef(ref, instance, element._owner);
  }
};

module.exports = ReactRef;
},{"./ReactOwner":73}],81:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRootIndex
 * @typechecks
 */

'use strict';

var ReactRootIndexInjection = {
  /**
   * @param {function} _createReactRootIndex
   */
  injectCreateReactRootIndex: function (_createReactRootIndex) {
    ReactRootIndex.createReactRootIndex = _createReactRootIndex;
  }
};

var ReactRootIndex = {
  createReactRootIndex: null,
  injection: ReactRootIndexInjection
};

module.exports = ReactRootIndex;
},{}],82:[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerBatchingStrategy
 * @typechecks
 */

'use strict';

var ReactServerBatchingStrategy = {
  isBatchingUpdates: false,
  batchedUpdates: function (callback) {
    // Don't do anything here. During the server rendering we don't want to
    // schedule any updates. We will simply ignore them.
  }
};

module.exports = ReactServerBatchingStrategy;
},{}],83:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 * @providesModule ReactServerRendering
 */
'use strict';

var ReactDefaultBatchingStrategy = require('./ReactDefaultBatchingStrategy');
var ReactElement = require('./ReactElement');
var ReactInstanceHandles = require('./ReactInstanceHandles');
var ReactMarkupChecksum = require('./ReactMarkupChecksum');
var ReactServerBatchingStrategy = require('./ReactServerBatchingStrategy');
var ReactServerRenderingTransaction = require('./ReactServerRenderingTransaction');
var ReactUpdates = require('./ReactUpdates');

var emptyObject = require('fbjs/lib/emptyObject');
var instantiateReactComponent = require('./instantiateReactComponent');
var invariant = require('fbjs/lib/invariant');

/**
 * @param {ReactElement} element
 * @return {string} the HTML markup
 */
function renderToString(element) {
  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToString(): You must pass a valid ReactElement.') : invariant(false) : undefined;

  var transaction;
  try {
    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);

    var id = ReactInstanceHandles.createReactRootID();
    transaction = ReactServerRenderingTransaction.getPooled(false);

    return transaction.perform(function () {
      var componentInstance = instantiateReactComponent(element, null);
      var markup = componentInstance.mountComponent(id, transaction, emptyObject);
      return ReactMarkupChecksum.addChecksumToMarkup(markup);
    }, null);
  } finally {
    ReactServerRenderingTransaction.release(transaction);
    // Revert to the DOM batching strategy since these two renderers
    // currently share these stateful modules.
    ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
  }
}

/**
 * @param {ReactElement} element
 * @return {string} the HTML markup, without the extra React ID and checksum
 * (for generating static pages)
 */
function renderToStaticMarkup(element) {
  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToStaticMarkup(): You must pass a valid ReactElement.') : invariant(false) : undefined;

  var transaction;
  try {
    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);

    var id = ReactInstanceHandles.createReactRootID();
    transaction = ReactServerRenderingTransaction.getPooled(true);

    return transaction.perform(function () {
      var componentInstance = instantiateReactComponent(element, null);
      return componentInstance.mountComponent(id, transaction, emptyObject);
    }, null);
  } finally {
    ReactServerRenderingTransaction.release(transaction);
    // Revert to the DOM batching strategy since these two renderers
    // currently share these stateful modules.
    ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
  }
}

module.exports = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup
};
}).call(this,require('_process'))
},{"./ReactDefaultBatchingStrategy":51,"./ReactElement":55,"./ReactInstanceHandles":64,"./ReactMarkupChecksum":67,"./ReactServerBatchingStrategy":82,"./ReactServerRenderingTransaction":84,"./ReactUpdates":86,"./instantiateReactComponent":121,"_process":2,"fbjs/lib/emptyObject":140,"fbjs/lib/invariant":147}],84:[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerRenderingTransaction
 * @typechecks
 */

'use strict';

var PooledClass = require('./PooledClass');
var CallbackQueue = require('./CallbackQueue');
var Transaction = require('./Transaction');

var assign = require('./Object.assign');
var emptyFunction = require('fbjs/lib/emptyFunction');

/**
 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
 * during the performing of the transaction.
 */
var ON_DOM_READY_QUEUEING = {
  /**
   * Initializes the internal `onDOMReady` queue.
   */
  initialize: function () {
    this.reactMountReady.reset();
  },

  close: emptyFunction
};

/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
var TRANSACTION_WRAPPERS = [ON_DOM_READY_QUEUEING];

/**
 * @class ReactServerRenderingTransaction
 * @param {boolean} renderToStaticMarkup
 */
function ReactServerRenderingTransaction(renderToStaticMarkup) {
  this.reinitializeTransaction();
  this.renderToStaticMarkup = renderToStaticMarkup;
  this.reactMountReady = CallbackQueue.getPooled(null);
  this.useCreateElement = false;
}

var Mixin = {
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array} Empty list of operation wrap procedures.
   */
  getTransactionWrappers: function () {
    return TRANSACTION_WRAPPERS;
  },

  /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
  getReactMountReady: function () {
    return this.reactMountReady;
  },

  /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */
  destructor: function () {
    CallbackQueue.release(this.reactMountReady);
    this.reactMountReady = null;
  }
};

assign(ReactServerRenderingTransaction.prototype, Transaction.Mixin, Mixin);

PooledClass.addPoolingTo(ReactServerRenderingTransaction);

module.exports = ReactServerRenderingTransaction;
},{"./CallbackQueue":8,"./Object.assign":25,"./PooledClass":26,"./Transaction":103,"fbjs/lib/emptyFunction":139}],85:[function(require,module,exports){
(function (process){
/**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdateQueue
 */

'use strict';

var ReactCurrentOwner = require('./ReactCurrentOwner');
var ReactElement = require('./ReactElement');
var ReactInstanceMap = require('./ReactInstanceMap');
var ReactUpdates = require('./ReactUpdates');

var assign = require('./Object.assign');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

function enqueueUpdate(internalInstance) {
  ReactUpdates.enqueueUpdate(internalInstance);
}

function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
  var internalInstance = ReactInstanceMap.get(publicInstance);
  if (!internalInstance) {
    if (process.env.NODE_ENV !== 'production') {
      // Only warn when we have a callerName. Otherwise we should be silent.
      // We're probably calling from enqueueCallback. We don't want to warn
      // there because we already warned for the corresponding lifecycle method.
      process.env.NODE_ENV !== 'production' ? warning(!callerName, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor.displayName) : undefined;
    }
    return null;
  }

  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, '%s(...): Cannot update during an existing state transition ' + '(such as within `render`). Render methods should be a pure function ' + 'of props and state.', callerName) : undefined;
  }

  return internalInstance;
}

/**
 * ReactUpdateQueue allows for state updates to be scheduled into a later
 * reconciliation step.
 */
var ReactUpdateQueue = {

  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    if (process.env.NODE_ENV !== 'production') {
      var owner = ReactCurrentOwner.current;
      if (owner !== null) {
        process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : undefined;
        owner._warnedAboutRefsInRender = true;
      }
    }
    var internalInstance = ReactInstanceMap.get(publicInstance);
    if (internalInstance) {
      // During componentWillMount and render this will still be null but after
      // that will always render to something. At least for now. So we can use
      // this hack.
      return !!internalInstance._renderedComponent;
    } else {
      return false;
    }
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {
    !(typeof callback === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(false) : undefined;
    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);

    // Previously we would throw an error if we didn't have an internal
    // instance. Since we want to make it a no-op instead, we mirror the same
    // behavior we have in other enqueue* methods.
    // We also need to ignore callbacks in componentWillMount. See
    // enqueueUpdates.
    if (!internalInstance) {
      return null;
    }

    if (internalInstance._pendingCallbacks) {
      internalInstance._pendingCallbacks.push(callback);
    } else {
      internalInstance._pendingCallbacks = [callback];
    }
    // TODO: The callback here is ignored when setState is called from
    // componentWillMount. Either fix it or disallow doing so completely in
    // favor of getInitialState. Alternatively, we can disallow
    // componentWillMount during server-side rendering.
    enqueueUpdate(internalInstance);
  },

  enqueueCallbackInternal: function (internalInstance, callback) {
    !(typeof callback === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(false) : undefined;
    if (internalInstance._pendingCallbacks) {
      internalInstance._pendingCallbacks.push(callback);
    } else {
      internalInstance._pendingCallbacks = [callback];
    }
    enqueueUpdate(internalInstance);
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');

    if (!internalInstance) {
      return;
    }

    internalInstance._pendingForceUpdate = true;

    enqueueUpdate(internalInstance);
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');

    if (!internalInstance) {
      return;
    }

    internalInstance._pendingStateQueue = [completeState];
    internalInstance._pendingReplaceState = true;

    enqueueUpdate(internalInstance);
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');

    if (!internalInstance) {
      return;
    }

    var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
    queue.push(partialState);

    enqueueUpdate(internalInstance);
  },

  /**
   * Sets a subset of the props.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialProps Subset of the next props.
   * @internal
   */
  enqueueSetProps: function (publicInstance, partialProps) {
    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setProps');
    if (!internalInstance) {
      return;
    }
    ReactUpdateQueue.enqueueSetPropsInternal(internalInstance, partialProps);
  },

  enqueueSetPropsInternal: function (internalInstance, partialProps) {
    var topLevelWrapper = internalInstance._topLevelWrapper;
    !topLevelWrapper ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setProps(...): You called `setProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(false) : undefined;

    // Merge with the pending element if it exists, otherwise with existing
    // element props.
    var wrapElement = topLevelWrapper._pendingElement || topLevelWrapper._currentElement;
    var element = wrapElement.props;
    var props = assign({}, element.props, partialProps);
    topLevelWrapper._pendingElement = ReactElement.cloneAndReplaceProps(wrapElement, ReactElement.cloneAndReplaceProps(element, props));

    enqueueUpdate(topLevelWrapper);
  },

  /**
   * Replaces all of the props.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} props New props.
   * @internal
   */
  enqueueReplaceProps: function (publicInstance, props) {
    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceProps');
    if (!internalInstance) {
      return;
    }
    ReactUpdateQueue.enqueueReplacePropsInternal(internalInstance, props);
  },

  enqueueReplacePropsInternal: function (internalInstance, props) {
    var topLevelWrapper = internalInstance._topLevelWrapper;
    !topLevelWrapper ? process.env.NODE_ENV !== 'production' ? invariant(false, 'replaceProps(...): You called `replaceProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(false) : undefined;

    // Merge with the pending element if it exists, otherwise with existing
    // element props.
    var wrapElement = topLevelWrapper._pendingElement || topLevelWrapper._currentElement;
    var element = wrapElement.props;
    topLevelWrapper._pendingElement = ReactElement.cloneAndReplaceProps(wrapElement, ReactElement.cloneAndReplaceProps(element, props));

    enqueueUpdate(topLevelWrapper);
  },

  enqueueElementInternal: function (internalInstance, newElement) {
    internalInstance._pendingElement = newElement;
    enqueueUpdate(internalInstance);
  }

};

module.exports = ReactUpdateQueue;
}).call(this,require('_process'))
},{"./Object.assign":25,"./ReactCurrentOwner":37,"./ReactElement":55,"./ReactInstanceMap":65,"./ReactUpdates":86,"_process":2,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],86:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdates
 */

'use strict';

var CallbackQueue = require('./CallbackQueue');
var PooledClass = require('./PooledClass');
var ReactPerf = require('./ReactPerf');
var ReactReconciler = require('./ReactReconciler');
var Transaction = require('./Transaction');

var assign = require('./Object.assign');
var invariant = require('fbjs/lib/invariant');

var dirtyComponents = [];
var asapCallbackQueue = CallbackQueue.getPooled();
var asapEnqueued = false;

var batchingStrategy = null;

function ensureInjected() {
  !(ReactUpdates.ReactReconcileTransaction && batchingStrategy) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must inject a reconcile transaction class and batching ' + 'strategy') : invariant(false) : undefined;
}

var NESTED_UPDATES = {
  initialize: function () {
    this.dirtyComponentsLength = dirtyComponents.length;
  },
  close: function () {
    if (this.dirtyComponentsLength !== dirtyComponents.length) {
      // Additional updates were enqueued by componentDidUpdate handlers or
      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
      // these new updates so that if A's componentDidUpdate calls setState on
      // B, B will update before the callback A's updater provided when calling
      // setState.
      dirtyComponents.splice(0, this.dirtyComponentsLength);
      flushBatchedUpdates();
    } else {
      dirtyComponents.length = 0;
    }
  }
};

var UPDATE_QUEUEING = {
  initialize: function () {
    this.callbackQueue.reset();
  },
  close: function () {
    this.callbackQueue.notifyAll();
  }
};

var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];

function ReactUpdatesFlushTransaction() {
  this.reinitializeTransaction();
  this.dirtyComponentsLength = null;
  this.callbackQueue = CallbackQueue.getPooled();
  this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled( /* forceHTML */false);
}

assign(ReactUpdatesFlushTransaction.prototype, Transaction.Mixin, {
  getTransactionWrappers: function () {
    return TRANSACTION_WRAPPERS;
  },

  destructor: function () {
    this.dirtyComponentsLength = null;
    CallbackQueue.release(this.callbackQueue);
    this.callbackQueue = null;
    ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
    this.reconcileTransaction = null;
  },

  perform: function (method, scope, a) {
    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
    // with this transaction's wrappers around it.
    return Transaction.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
  }
});

PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);

function batchedUpdates(callback, a, b, c, d, e) {
  ensureInjected();
  batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
}

/**
 * Array comparator for ReactComponents by mount ordering.
 *
 * @param {ReactComponent} c1 first component you're comparing
 * @param {ReactComponent} c2 second component you're comparing
 * @return {number} Return value usable by Array.prototype.sort().
 */
function mountOrderComparator(c1, c2) {
  return c1._mountOrder - c2._mountOrder;
}

function runBatchedUpdates(transaction) {
  var len = transaction.dirtyComponentsLength;
  !(len === dirtyComponents.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected flush transaction\'s stored dirty-components length (%s) to ' + 'match dirty-components array length (%s).', len, dirtyComponents.length) : invariant(false) : undefined;

  // Since reconciling a component higher in the owner hierarchy usually (not
  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
  // them before their children by sorting the array.
  dirtyComponents.sort(mountOrderComparator);

  for (var i = 0; i < len; i++) {
    // If a component is unmounted before pending changes apply, it will still
    // be here, but we assume that it has cleared its _pendingCallbacks and
    // that performUpdateIfNecessary is a noop.
    var component = dirtyComponents[i];

    // If performUpdateIfNecessary happens to enqueue any new updates, we
    // shouldn't execute the callbacks until the next render happens, so
    // stash the callbacks first
    var callbacks = component._pendingCallbacks;
    component._pendingCallbacks = null;

    ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction);

    if (callbacks) {
      for (var j = 0; j < callbacks.length; j++) {
        transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
      }
    }
  }
}

var flushBatchedUpdates = function () {
  // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
  // array and perform any updates enqueued by mount-ready handlers (i.e.,
  // componentDidUpdate) but we need to check here too in order to catch
  // updates enqueued by setState callbacks and asap calls.
  while (dirtyComponents.length || asapEnqueued) {
    if (dirtyComponents.length) {
      var transaction = ReactUpdatesFlushTransaction.getPooled();
      transaction.perform(runBatchedUpdates, null, transaction);
      ReactUpdatesFlushTransaction.release(transaction);
    }

    if (asapEnqueued) {
      asapEnqueued = false;
      var queue = asapCallbackQueue;
      asapCallbackQueue = CallbackQueue.getPooled();
      queue.notifyAll();
      CallbackQueue.release(queue);
    }
  }
};
flushBatchedUpdates = ReactPerf.measure('ReactUpdates', 'flushBatchedUpdates', flushBatchedUpdates);

/**
 * Mark a component as needing a rerender, adding an optional callback to a
 * list of functions which will be executed once the rerender occurs.
 */
function enqueueUpdate(component) {
  ensureInjected();

  // Various parts of our code (such as ReactCompositeComponent's
  // _renderValidatedComponent) assume that calls to render aren't nested;
  // verify that that's the case. (This is called by each top-level update
  // function, like setProps, setState, forceUpdate, etc.; creation and
  // destruction of top-level components is guarded in ReactMount.)

  if (!batchingStrategy.isBatchingUpdates) {
    batchingStrategy.batchedUpdates(enqueueUpdate, component);
    return;
  }

  dirtyComponents.push(component);
}

/**
 * Enqueue a callback to be run at the end of the current batching cycle. Throws
 * if no updates are currently being performed.
 */
function asap(callback, context) {
  !batchingStrategy.isBatchingUpdates ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' + 'updates are not being batched.') : invariant(false) : undefined;
  asapCallbackQueue.enqueue(callback, context);
  asapEnqueued = true;
}

var ReactUpdatesInjection = {
  injectReconcileTransaction: function (ReconcileTransaction) {
    !ReconcileTransaction ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a reconcile transaction class') : invariant(false) : undefined;
    ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
  },

  injectBatchingStrategy: function (_batchingStrategy) {
    !_batchingStrategy ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a batching strategy') : invariant(false) : undefined;
    !(typeof _batchingStrategy.batchedUpdates === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a batchedUpdates() function') : invariant(false) : undefined;
    !(typeof _batchingStrategy.isBatchingUpdates === 'boolean') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : invariant(false) : undefined;
    batchingStrategy = _batchingStrategy;
  }
};

var ReactUpdates = {
  /**
   * React references `ReactReconcileTransaction` using this property in order
   * to allow dependency injection.
   *
   * @internal
   */
  ReactReconcileTransaction: null,

  batchedUpdates: batchedUpdates,
  enqueueUpdate: enqueueUpdate,
  flushBatchedUpdates: flushBatchedUpdates,
  injection: ReactUpdatesInjection,
  asap: asap
};

module.exports = ReactUpdates;
}).call(this,require('_process'))
},{"./CallbackQueue":8,"./Object.assign":25,"./PooledClass":26,"./ReactPerf":74,"./ReactReconciler":79,"./Transaction":103,"_process":2,"fbjs/lib/invariant":147}],87:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactVersion
 */

'use strict';

module.exports = '0.14.6';
},{}],88:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SVGDOMPropertyConfig
 */

'use strict';

var DOMProperty = require('./DOMProperty');

var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;

var NS = {
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace'
};

var SVGDOMPropertyConfig = {
  Properties: {
    clipPath: MUST_USE_ATTRIBUTE,
    cx: MUST_USE_ATTRIBUTE,
    cy: MUST_USE_ATTRIBUTE,
    d: MUST_USE_ATTRIBUTE,
    dx: MUST_USE_ATTRIBUTE,
    dy: MUST_USE_ATTRIBUTE,
    fill: MUST_USE_ATTRIBUTE,
    fillOpacity: MUST_USE_ATTRIBUTE,
    fontFamily: MUST_USE_ATTRIBUTE,
    fontSize: MUST_USE_ATTRIBUTE,
    fx: MUST_USE_ATTRIBUTE,
    fy: MUST_USE_ATTRIBUTE,
    gradientTransform: MUST_USE_ATTRIBUTE,
    gradientUnits: MUST_USE_ATTRIBUTE,
    markerEnd: MUST_USE_ATTRIBUTE,
    markerMid: MUST_USE_ATTRIBUTE,
    markerStart: MUST_USE_ATTRIBUTE,
    offset: MUST_USE_ATTRIBUTE,
    opacity: MUST_USE_ATTRIBUTE,
    patternContentUnits: MUST_USE_ATTRIBUTE,
    patternUnits: MUST_USE_ATTRIBUTE,
    points: MUST_USE_ATTRIBUTE,
    preserveAspectRatio: MUST_USE_ATTRIBUTE,
    r: MUST_USE_ATTRIBUTE,
    rx: MUST_USE_ATTRIBUTE,
    ry: MUST_USE_ATTRIBUTE,
    spreadMethod: MUST_USE_ATTRIBUTE,
    stopColor: MUST_USE_ATTRIBUTE,
    stopOpacity: MUST_USE_ATTRIBUTE,
    stroke: MUST_USE_ATTRIBUTE,
    strokeDasharray: MUST_USE_ATTRIBUTE,
    strokeLinecap: MUST_USE_ATTRIBUTE,
    strokeOpacity: MUST_USE_ATTRIBUTE,
    strokeWidth: MUST_USE_ATTRIBUTE,
    textAnchor: MUST_USE_ATTRIBUTE,
    transform: MUST_USE_ATTRIBUTE,
    version: MUST_USE_ATTRIBUTE,
    viewBox: MUST_USE_ATTRIBUTE,
    x1: MUST_USE_ATTRIBUTE,
    x2: MUST_USE_ATTRIBUTE,
    x: MUST_USE_ATTRIBUTE,
    xlinkActuate: MUST_USE_ATTRIBUTE,
    xlinkArcrole: MUST_USE_ATTRIBUTE,
    xlinkHref: MUST_USE_ATTRIBUTE,
    xlinkRole: MUST_USE_ATTRIBUTE,
    xlinkShow: MUST_USE_ATTRIBUTE,
    xlinkTitle: MUST_USE_ATTRIBUTE,
    xlinkType: MUST_USE_ATTRIBUTE,
    xmlBase: MUST_USE_ATTRIBUTE,
    xmlLang: MUST_USE_ATTRIBUTE,
    xmlSpace: MUST_USE_ATTRIBUTE,
    y1: MUST_USE_ATTRIBUTE,
    y2: MUST_USE_ATTRIBUTE,
    y: MUST_USE_ATTRIBUTE
  },
  DOMAttributeNamespaces: {
    xlinkActuate: NS.xlink,
    xlinkArcrole: NS.xlink,
    xlinkHref: NS.xlink,
    xlinkRole: NS.xlink,
    xlinkShow: NS.xlink,
    xlinkTitle: NS.xlink,
    xlinkType: NS.xlink,
    xmlBase: NS.xml,
    xmlLang: NS.xml,
    xmlSpace: NS.xml
  },
  DOMAttributeNames: {
    clipPath: 'clip-path',
    fillOpacity: 'fill-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    gradientTransform: 'gradientTransform',
    gradientUnits: 'gradientUnits',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    patternContentUnits: 'patternContentUnits',
    patternUnits: 'patternUnits',
    preserveAspectRatio: 'preserveAspectRatio',
    spreadMethod: 'spreadMethod',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strokeDasharray: 'stroke-dasharray',
    strokeLinecap: 'stroke-linecap',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    textAnchor: 'text-anchor',
    viewBox: 'viewBox',
    xlinkActuate: 'xlink:actuate',
    xlinkArcrole: 'xlink:arcrole',
    xlinkHref: 'xlink:href',
    xlinkRole: 'xlink:role',
    xlinkShow: 'xlink:show',
    xlinkTitle: 'xlink:title',
    xlinkType: 'xlink:type',
    xmlBase: 'xml:base',
    xmlLang: 'xml:lang',
    xmlSpace: 'xml:space'
  }
};

module.exports = SVGDOMPropertyConfig;
},{"./DOMProperty":12}],89:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SelectEventPlugin
 */

'use strict';

var EventConstants = require('./EventConstants');
var EventPropagators = require('./EventPropagators');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
var ReactInputSelection = require('./ReactInputSelection');
var SyntheticEvent = require('./SyntheticEvent');

var getActiveElement = require('fbjs/lib/getActiveElement');
var isTextInputElement = require('./isTextInputElement');
var keyOf = require('fbjs/lib/keyOf');
var shallowEqual = require('fbjs/lib/shallowEqual');

var topLevelTypes = EventConstants.topLevelTypes;

var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;

var eventTypes = {
  select: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onSelect: null }),
      captured: keyOf({ onSelectCapture: null })
    },
    dependencies: [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
  }
};

var activeElement = null;
var activeElementID = null;
var lastSelection = null;
var mouseDown = false;

// Track whether a listener exists for this plugin. If none exist, we do
// not extract events.
var hasListener = false;
var ON_SELECT_KEY = keyOf({ onSelect: null });

/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function getSelection(node) {
  if ('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)) {
    return {
      start: node.selectionStart,
      end: node.selectionEnd
    };
  } else if (window.getSelection) {
    var selection = window.getSelection();
    return {
      anchorNode: selection.anchorNode,
      anchorOffset: selection.anchorOffset,
      focusNode: selection.focusNode,
      focusOffset: selection.focusOffset
    };
  } else if (document.selection) {
    var range = document.selection.createRange();
    return {
      parentElement: range.parentElement(),
      text: range.text,
      top: range.boundingTop,
      left: range.boundingLeft
    };
  }
}

/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */
function constructSelectEvent(nativeEvent, nativeEventTarget) {
  // Ensure we have the right element, and that the user is not dragging a
  // selection (this matches native `select` event behavior). In HTML5, select
  // fires only on input and textarea thus if there's no focused element we
  // won't dispatch.
  if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
    return null;
  }

  // Only fire when selection has actually changed.
  var currentSelection = getSelection(activeElement);
  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
    lastSelection = currentSelection;

    var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementID, nativeEvent, nativeEventTarget);

    syntheticEvent.type = 'select';
    syntheticEvent.target = activeElement;

    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);

    return syntheticEvent;
  }

  return null;
}

/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */
var SelectEventPlugin = {

  eventTypes: eventTypes,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
    if (!hasListener) {
      return null;
    }

    switch (topLevelType) {
      // Track the input node that has focus.
      case topLevelTypes.topFocus:
        if (isTextInputElement(topLevelTarget) || topLevelTarget.contentEditable === 'true') {
          activeElement = topLevelTarget;
          activeElementID = topLevelTargetID;
          lastSelection = null;
        }
        break;
      case topLevelTypes.topBlur:
        activeElement = null;
        activeElementID = null;
        lastSelection = null;
        break;

      // Don't fire the event while the user is dragging. This matches the
      // semantics of the native select event.
      case topLevelTypes.topMouseDown:
        mouseDown = true;
        break;
      case topLevelTypes.topContextMenu:
      case topLevelTypes.topMouseUp:
        mouseDown = false;
        return constructSelectEvent(nativeEvent, nativeEventTarget);

      // Chrome and IE fire non-standard event when selection is changed (and
      // sometimes when it hasn't). IE's event fires out of order with respect
      // to key and input events on deletion, so we discard it.
      //
      // Firefox doesn't support selectionchange, so check selection status
      // after each key entry. The selection changes after keydown and before
      // keyup, but we check on keydown as well in the case of holding down a
      // key, when multiple keydown events are fired but only one keyup is.
      // This is also our approach for IE handling, for the reason above.
      case topLevelTypes.topSelectionChange:
        if (skipSelectionChangeEvent) {
          break;
        }
      // falls through
      case topLevelTypes.topKeyDown:
      case topLevelTypes.topKeyUp:
        return constructSelectEvent(nativeEvent, nativeEventTarget);
    }

    return null;
  },

  didPutListener: function (id, registrationName, listener) {
    if (registrationName === ON_SELECT_KEY) {
      hasListener = true;
    }
  }
};

module.exports = SelectEventPlugin;
},{"./EventConstants":17,"./EventPropagators":21,"./ReactInputSelection":63,"./SyntheticEvent":95,"./isTextInputElement":123,"fbjs/lib/ExecutionEnvironment":133,"fbjs/lib/getActiveElement":142,"fbjs/lib/keyOf":151,"fbjs/lib/shallowEqual":156}],90:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ServerReactRootIndex
 * @typechecks
 */

'use strict';

/**
 * Size of the reactRoot ID space. We generate random numbers for React root
 * IDs and if there's a collision the events and DOM update system will
 * get confused. In the future we need a way to generate GUIDs but for
 * now this will work on a smaller scale.
 */
var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);

var ServerReactRootIndex = {
  createReactRootIndex: function () {
    return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
  }
};

module.exports = ServerReactRootIndex;
},{}],91:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SimpleEventPlugin
 */

'use strict';

var EventConstants = require('./EventConstants');
var EventListener = require('fbjs/lib/EventListener');
var EventPropagators = require('./EventPropagators');
var ReactMount = require('./ReactMount');
var SyntheticClipboardEvent = require('./SyntheticClipboardEvent');
var SyntheticEvent = require('./SyntheticEvent');
var SyntheticFocusEvent = require('./SyntheticFocusEvent');
var SyntheticKeyboardEvent = require('./SyntheticKeyboardEvent');
var SyntheticMouseEvent = require('./SyntheticMouseEvent');
var SyntheticDragEvent = require('./SyntheticDragEvent');
var SyntheticTouchEvent = require('./SyntheticTouchEvent');
var SyntheticUIEvent = require('./SyntheticUIEvent');
var SyntheticWheelEvent = require('./SyntheticWheelEvent');

var emptyFunction = require('fbjs/lib/emptyFunction');
var getEventCharCode = require('./getEventCharCode');
var invariant = require('fbjs/lib/invariant');
var keyOf = require('fbjs/lib/keyOf');

var topLevelTypes = EventConstants.topLevelTypes;

var eventTypes = {
  abort: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onAbort: true }),
      captured: keyOf({ onAbortCapture: true })
    }
  },
  blur: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onBlur: true }),
      captured: keyOf({ onBlurCapture: true })
    }
  },
  canPlay: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onCanPlay: true }),
      captured: keyOf({ onCanPlayCapture: true })
    }
  },
  canPlayThrough: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onCanPlayThrough: true }),
      captured: keyOf({ onCanPlayThroughCapture: true })
    }
  },
  click: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onClick: true }),
      captured: keyOf({ onClickCapture: true })
    }
  },
  contextMenu: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onContextMenu: true }),
      captured: keyOf({ onContextMenuCapture: true })
    }
  },
  copy: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onCopy: true }),
      captured: keyOf({ onCopyCapture: true })
    }
  },
  cut: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onCut: true }),
      captured: keyOf({ onCutCapture: true })
    }
  },
  doubleClick: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onDoubleClick: true }),
      captured: keyOf({ onDoubleClickCapture: true })
    }
  },
  drag: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onDrag: true }),
      captured: keyOf({ onDragCapture: true })
    }
  },
  dragEnd: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onDragEnd: true }),
      captured: keyOf({ onDragEndCapture: true })
    }
  },
  dragEnter: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onDragEnter: true }),
      captured: keyOf({ onDragEnterCapture: true })
    }
  },
  dragExit: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onDragExit: true }),
      captured: keyOf({ onDragExitCapture: true })
    }
  },
  dragLeave: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onDragLeave: true }),
      captured: keyOf({ onDragLeaveCapture: true })
    }
  },
  dragOver: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onDragOver: true }),
      captured: keyOf({ onDragOverCapture: true })
    }
  },
  dragStart: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onDragStart: true }),
      captured: keyOf({ onDragStartCapture: true })
    }
  },
  drop: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onDrop: true }),
      captured: keyOf({ onDropCapture: true })
    }
  },
  durationChange: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onDurationChange: true }),
      captured: keyOf({ onDurationChangeCapture: true })
    }
  },
  emptied: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onEmptied: true }),
      captured: keyOf({ onEmptiedCapture: true })
    }
  },
  encrypted: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onEncrypted: true }),
      captured: keyOf({ onEncryptedCapture: true })
    }
  },
  ended: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onEnded: true }),
      captured: keyOf({ onEndedCapture: true })
    }
  },
  error: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onError: true }),
      captured: keyOf({ onErrorCapture: true })
    }
  },
  focus: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onFocus: true }),
      captured: keyOf({ onFocusCapture: true })
    }
  },
  input: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onInput: true }),
      captured: keyOf({ onInputCapture: true })
    }
  },
  keyDown: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onKeyDown: true }),
      captured: keyOf({ onKeyDownCapture: true })
    }
  },
  keyPress: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onKeyPress: true }),
      captured: keyOf({ onKeyPressCapture: true })
    }
  },
  keyUp: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onKeyUp: true }),
      captured: keyOf({ onKeyUpCapture: true })
    }
  },
  load: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onLoad: true }),
      captured: keyOf({ onLoadCapture: true })
    }
  },
  loadedData: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onLoadedData: true }),
      captured: keyOf({ onLoadedDataCapture: true })
    }
  },
  loadedMetadata: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onLoadedMetadata: true }),
      captured: keyOf({ onLoadedMetadataCapture: true })
    }
  },
  loadStart: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onLoadStart: true }),
      captured: keyOf({ onLoadStartCapture: true })
    }
  },
  // Note: We do not allow listening to mouseOver events. Instead, use the
  // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
  mouseDown: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onMouseDown: true }),
      captured: keyOf({ onMouseDownCapture: true })
    }
  },
  mouseMove: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onMouseMove: true }),
      captured: keyOf({ onMouseMoveCapture: true })
    }
  },
  mouseOut: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onMouseOut: true }),
      captured: keyOf({ onMouseOutCapture: true })
    }
  },
  mouseOver: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onMouseOver: true }),
      captured: keyOf({ onMouseOverCapture: true })
    }
  },
  mouseUp: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onMouseUp: true }),
      captured: keyOf({ onMouseUpCapture: true })
    }
  },
  paste: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onPaste: true }),
      captured: keyOf({ onPasteCapture: true })
    }
  },
  pause: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onPause: true }),
      captured: keyOf({ onPauseCapture: true })
    }
  },
  play: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onPlay: true }),
      captured: keyOf({ onPlayCapture: true })
    }
  },
  playing: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onPlaying: true }),
      captured: keyOf({ onPlayingCapture: true })
    }
  },
  progress: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onProgress: true }),
      captured: keyOf({ onProgressCapture: true })
    }
  },
  rateChange: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onRateChange: true }),
      captured: keyOf({ onRateChangeCapture: true })
    }
  },
  reset: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onReset: true }),
      captured: keyOf({ onResetCapture: true })
    }
  },
  scroll: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onScroll: true }),
      captured: keyOf({ onScrollCapture: true })
    }
  },
  seeked: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onSeeked: true }),
      captured: keyOf({ onSeekedCapture: true })
    }
  },
  seeking: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onSeeking: true }),
      captured: keyOf({ onSeekingCapture: true })
    }
  },
  stalled: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onStalled: true }),
      captured: keyOf({ onStalledCapture: true })
    }
  },
  submit: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onSubmit: true }),
      captured: keyOf({ onSubmitCapture: true })
    }
  },
  suspend: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onSuspend: true }),
      captured: keyOf({ onSuspendCapture: true })
    }
  },
  timeUpdate: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onTimeUpdate: true }),
      captured: keyOf({ onTimeUpdateCapture: true })
    }
  },
  touchCancel: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onTouchCancel: true }),
      captured: keyOf({ onTouchCancelCapture: true })
    }
  },
  touchEnd: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onTouchEnd: true }),
      captured: keyOf({ onTouchEndCapture: true })
    }
  },
  touchMove: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onTouchMove: true }),
      captured: keyOf({ onTouchMoveCapture: true })
    }
  },
  touchStart: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onTouchStart: true }),
      captured: keyOf({ onTouchStartCapture: true })
    }
  },
  volumeChange: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onVolumeChange: true }),
      captured: keyOf({ onVolumeChangeCapture: true })
    }
  },
  waiting: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onWaiting: true }),
      captured: keyOf({ onWaitingCapture: true })
    }
  },
  wheel: {
    phasedRegistrationNames: {
      bubbled: keyOf({ onWheel: true }),
      captured: keyOf({ onWheelCapture: true })
    }
  }
};

var topLevelEventsToDispatchConfig = {
  topAbort: eventTypes.abort,
  topBlur: eventTypes.blur,
  topCanPlay: eventTypes.canPlay,
  topCanPlayThrough: eventTypes.canPlayThrough,
  topClick: eventTypes.click,
  topContextMenu: eventTypes.contextMenu,
  topCopy: eventTypes.copy,
  topCut: eventTypes.cut,
  topDoubleClick: eventTypes.doubleClick,
  topDrag: eventTypes.drag,
  topDragEnd: eventTypes.dragEnd,
  topDragEnter: eventTypes.dragEnter,
  topDragExit: eventTypes.dragExit,
  topDragLeave: eventTypes.dragLeave,
  topDragOver: eventTypes.dragOver,
  topDragStart: eventTypes.dragStart,
  topDrop: eventTypes.drop,
  topDurationChange: eventTypes.durationChange,
  topEmptied: eventTypes.emptied,
  topEncrypted: eventTypes.encrypted,
  topEnded: eventTypes.ended,
  topError: eventTypes.error,
  topFocus: eventTypes.focus,
  topInput: eventTypes.input,
  topKeyDown: eventTypes.keyDown,
  topKeyPress: eventTypes.keyPress,
  topKeyUp: eventTypes.keyUp,
  topLoad: eventTypes.load,
  topLoadedData: eventTypes.loadedData,
  topLoadedMetadata: eventTypes.loadedMetadata,
  topLoadStart: eventTypes.loadStart,
  topMouseDown: eventTypes.mouseDown,
  topMouseMove: eventTypes.mouseMove,
  topMouseOut: eventTypes.mouseOut,
  topMouseOver: eventTypes.mouseOver,
  topMouseUp: eventTypes.mouseUp,
  topPaste: eventTypes.paste,
  topPause: eventTypes.pause,
  topPlay: eventTypes.play,
  topPlaying: eventTypes.playing,
  topProgress: eventTypes.progress,
  topRateChange: eventTypes.rateChange,
  topReset: eventTypes.reset,
  topScroll: eventTypes.scroll,
  topSeeked: eventTypes.seeked,
  topSeeking: eventTypes.seeking,
  topStalled: eventTypes.stalled,
  topSubmit: eventTypes.submit,
  topSuspend: eventTypes.suspend,
  topTimeUpdate: eventTypes.timeUpdate,
  topTouchCancel: eventTypes.touchCancel,
  topTouchEnd: eventTypes.touchEnd,
  topTouchMove: eventTypes.touchMove,
  topTouchStart: eventTypes.touchStart,
  topVolumeChange: eventTypes.volumeChange,
  topWaiting: eventTypes.waiting,
  topWheel: eventTypes.wheel
};

for (var type in topLevelEventsToDispatchConfig) {
  topLevelEventsToDispatchConfig[type].dependencies = [type];
}

var ON_CLICK_KEY = keyOf({ onClick: null });
var onClickListeners = {};

var SimpleEventPlugin = {

  eventTypes: eventTypes,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
    if (!dispatchConfig) {
      return null;
    }
    var EventConstructor;
    switch (topLevelType) {
      case topLevelTypes.topAbort:
      case topLevelTypes.topCanPlay:
      case topLevelTypes.topCanPlayThrough:
      case topLevelTypes.topDurationChange:
      case topLevelTypes.topEmptied:
      case topLevelTypes.topEncrypted:
      case topLevelTypes.topEnded:
      case topLevelTypes.topError:
      case topLevelTypes.topInput:
      case topLevelTypes.topLoad:
      case topLevelTypes.topLoadedData:
      case topLevelTypes.topLoadedMetadata:
      case topLevelTypes.topLoadStart:
      case topLevelTypes.topPause:
      case topLevelTypes.topPlay:
      case topLevelTypes.topPlaying:
      case topLevelTypes.topProgress:
      case topLevelTypes.topRateChange:
      case topLevelTypes.topReset:
      case topLevelTypes.topSeeked:
      case topLevelTypes.topSeeking:
      case topLevelTypes.topStalled:
      case topLevelTypes.topSubmit:
      case topLevelTypes.topSuspend:
      case topLevelTypes.topTimeUpdate:
      case topLevelTypes.topVolumeChange:
      case topLevelTypes.topWaiting:
        // HTML Events
        // @see http://www.w3.org/TR/html5/index.html#events-0
        EventConstructor = SyntheticEvent;
        break;
      case topLevelTypes.topKeyPress:
        // FireFox creates a keypress event for function keys too. This removes
        // the unwanted keypress events. Enter is however both printable and
        // non-printable. One would expect Tab to be as well (but it isn't).
        if (getEventCharCode(nativeEvent) === 0) {
          return null;
        }
      /* falls through */
      case topLevelTypes.topKeyDown:
      case topLevelTypes.topKeyUp:
        EventConstructor = SyntheticKeyboardEvent;
        break;
      case topLevelTypes.topBlur:
      case topLevelTypes.topFocus:
        EventConstructor = SyntheticFocusEvent;
        break;
      case topLevelTypes.topClick:
        // Firefox creates a click event on right mouse clicks. This removes the
        // unwanted click events.
        if (nativeEvent.button === 2) {
          return null;
        }
      /* falls through */
      case topLevelTypes.topContextMenu:
      case topLevelTypes.topDoubleClick:
      case topLevelTypes.topMouseDown:
      case topLevelTypes.topMouseMove:
      case topLevelTypes.topMouseOut:
      case topLevelTypes.topMouseOver:
      case topLevelTypes.topMouseUp:
        EventConstructor = SyntheticMouseEvent;
        break;
      case topLevelTypes.topDrag:
      case topLevelTypes.topDragEnd:
      case topLevelTypes.topDragEnter:
      case topLevelTypes.topDragExit:
      case topLevelTypes.topDragLeave:
      case topLevelTypes.topDragOver:
      case topLevelTypes.topDragStart:
      case topLevelTypes.topDrop:
        EventConstructor = SyntheticDragEvent;
        break;
      case topLevelTypes.topTouchCancel:
      case topLevelTypes.topTouchEnd:
      case topLevelTypes.topTouchMove:
      case topLevelTypes.topTouchStart:
        EventConstructor = SyntheticTouchEvent;
        break;
      case topLevelTypes.topScroll:
        EventConstructor = SyntheticUIEvent;
        break;
      case topLevelTypes.topWheel:
        EventConstructor = SyntheticWheelEvent;
        break;
      case topLevelTypes.topCopy:
      case topLevelTypes.topCut:
      case topLevelTypes.topPaste:
        EventConstructor = SyntheticClipboardEvent;
        break;
    }
    !EventConstructor ? process.env.NODE_ENV !== 'production' ? invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : invariant(false) : undefined;
    var event = EventConstructor.getPooled(dispatchConfig, topLevelTargetID, nativeEvent, nativeEventTarget);
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  },

  didPutListener: function (id, registrationName, listener) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    if (registrationName === ON_CLICK_KEY) {
      var node = ReactMount.getNode(id);
      if (!onClickListeners[id]) {
        onClickListeners[id] = EventListener.listen(node, 'click', emptyFunction);
      }
    }
  },

  willDeleteListener: function (id, registrationName) {
    if (registrationName === ON_CLICK_KEY) {
      onClickListeners[id].remove();
      delete onClickListeners[id];
    }
  }

};

module.exports = SimpleEventPlugin;
}).call(this,require('_process'))
},{"./EventConstants":17,"./EventPropagators":21,"./ReactMount":68,"./SyntheticClipboardEvent":92,"./SyntheticDragEvent":94,"./SyntheticEvent":95,"./SyntheticFocusEvent":96,"./SyntheticKeyboardEvent":98,"./SyntheticMouseEvent":99,"./SyntheticTouchEvent":100,"./SyntheticUIEvent":101,"./SyntheticWheelEvent":102,"./getEventCharCode":114,"_process":2,"fbjs/lib/EventListener":132,"fbjs/lib/emptyFunction":139,"fbjs/lib/invariant":147,"fbjs/lib/keyOf":151}],92:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticClipboardEvent
 * @typechecks static-only
 */

'use strict';

var SyntheticEvent = require('./SyntheticEvent');

/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */
var ClipboardEventInterface = {
  clipboardData: function (event) {
    return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);

module.exports = SyntheticClipboardEvent;
},{"./SyntheticEvent":95}],93:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticCompositionEvent
 * @typechecks static-only
 */

'use strict';

var SyntheticEvent = require('./SyntheticEvent');

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */
var CompositionEventInterface = {
  data: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);

module.exports = SyntheticCompositionEvent;
},{"./SyntheticEvent":95}],94:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticDragEvent
 * @typechecks static-only
 */

'use strict';

var SyntheticMouseEvent = require('./SyntheticMouseEvent');

/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var DragEventInterface = {
  dataTransfer: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);

module.exports = SyntheticDragEvent;
},{"./SyntheticMouseEvent":99}],95:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticEvent
 * @typechecks static-only
 */

'use strict';

var PooledClass = require('./PooledClass');

var assign = require('./Object.assign');
var emptyFunction = require('fbjs/lib/emptyFunction');
var warning = require('fbjs/lib/warning');

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var EventInterface = {
  type: null,
  // currentTarget is set when dispatching; no use in copying it here
  currentTarget: emptyFunction.thatReturnsNull,
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function (event) {
    return event.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 */
function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  this.dispatchConfig = dispatchConfig;
  this.dispatchMarker = dispatchMarker;
  this.nativeEvent = nativeEvent;
  this.target = nativeEventTarget;
  this.currentTarget = nativeEventTarget;

  var Interface = this.constructor.Interface;
  for (var propName in Interface) {
    if (!Interface.hasOwnProperty(propName)) {
      continue;
    }
    var normalize = Interface[propName];
    if (normalize) {
      this[propName] = normalize(nativeEvent);
    } else {
      this[propName] = nativeEvent[propName];
    }
  }

  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
  if (defaultPrevented) {
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
  } else {
    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
  }
  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
}

assign(SyntheticEvent.prototype, {

  preventDefault: function () {
    this.defaultPrevented = true;
    var event = this.nativeEvent;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `preventDefault` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
    }
    if (!event) {
      return;
    }

    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
  },

  stopPropagation: function () {
    var event = this.nativeEvent;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `stopPropagation` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
    }
    if (!event) {
      return;
    }

    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
  },

  /**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
  persist: function () {
    this.isPersistent = emptyFunction.thatReturnsTrue;
  },

  /**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */
  isPersistent: emptyFunction.thatReturnsFalse,

  /**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
  destructor: function () {
    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      this[propName] = null;
    }
    this.dispatchConfig = null;
    this.dispatchMarker = null;
    this.nativeEvent = null;
  }

});

SyntheticEvent.Interface = EventInterface;

/**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */
SyntheticEvent.augmentClass = function (Class, Interface) {
  var Super = this;

  var prototype = Object.create(Super.prototype);
  assign(prototype, Class.prototype);
  Class.prototype = prototype;
  Class.prototype.constructor = Class;

  Class.Interface = assign({}, Super.Interface, Interface);
  Class.augmentClass = Super.augmentClass;

  PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
};

PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);

module.exports = SyntheticEvent;
}).call(this,require('_process'))
},{"./Object.assign":25,"./PooledClass":26,"_process":2,"fbjs/lib/emptyFunction":139,"fbjs/lib/warning":158}],96:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticFocusEvent
 * @typechecks static-only
 */

'use strict';

var SyntheticUIEvent = require('./SyntheticUIEvent');

/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var FocusEventInterface = {
  relatedTarget: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);

module.exports = SyntheticFocusEvent;
},{"./SyntheticUIEvent":101}],97:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticInputEvent
 * @typechecks static-only
 */

'use strict';

var SyntheticEvent = require('./SyntheticEvent');

/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */
var InputEventInterface = {
  data: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);

module.exports = SyntheticInputEvent;
},{"./SyntheticEvent":95}],98:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticKeyboardEvent
 * @typechecks static-only
 */

'use strict';

var SyntheticUIEvent = require('./SyntheticUIEvent');

var getEventCharCode = require('./getEventCharCode');
var getEventKey = require('./getEventKey');
var getEventModifierState = require('./getEventModifierState');

/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var KeyboardEventInterface = {
  key: getEventKey,
  location: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  repeat: null,
  locale: null,
  getModifierState: getEventModifierState,
  // Legacy Interface
  charCode: function (event) {
    // `charCode` is the result of a KeyPress event and represents the value of
    // the actual printable character.

    // KeyPress is deprecated, but its replacement is not yet final and not
    // implemented in any major browser. Only KeyPress has charCode.
    if (event.type === 'keypress') {
      return getEventCharCode(event);
    }
    return 0;
  },
  keyCode: function (event) {
    // `keyCode` is the result of a KeyDown/Up event and represents the value of
    // physical keyboard key.

    // The actual meaning of the value depends on the users' keyboard layout
    // which cannot be detected. Assuming that it is a US keyboard layout
    // provides a surprisingly accurate mapping for US and European users.
    // Due to this, it is left to the user to implement at this time.
    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;
    }
    return 0;
  },
  which: function (event) {
    // `which` is an alias for either `keyCode` or `charCode` depending on the
    // type of the event.
    if (event.type === 'keypress') {
      return getEventCharCode(event);
    }
    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;
    }
    return 0;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);

module.exports = SyntheticKeyboardEvent;
},{"./SyntheticUIEvent":101,"./getEventCharCode":114,"./getEventKey":115,"./getEventModifierState":116}],99:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticMouseEvent
 * @typechecks static-only
 */

'use strict';

var SyntheticUIEvent = require('./SyntheticUIEvent');
var ViewportMetrics = require('./ViewportMetrics');

var getEventModifierState = require('./getEventModifierState');

/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var MouseEventInterface = {
  screenX: null,
  screenY: null,
  clientX: null,
  clientY: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  getModifierState: getEventModifierState,
  button: function (event) {
    // Webkit, Firefox, IE9+
    // which:  1 2 3
    // button: 0 1 2 (standard)
    var button = event.button;
    if ('which' in event) {
      return button;
    }
    // IE<9
    // which:  undefined
    // button: 0 0 0
    // button: 1 4 2 (onmouseup)
    return button === 2 ? 2 : button === 4 ? 1 : 0;
  },
  buttons: null,
  relatedTarget: function (event) {
    return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
  },
  // "Proprietary" Interface.
  pageX: function (event) {
    return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
  },
  pageY: function (event) {
    return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);

module.exports = SyntheticMouseEvent;
},{"./SyntheticUIEvent":101,"./ViewportMetrics":104,"./getEventModifierState":116}],100:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticTouchEvent
 * @typechecks static-only
 */

'use strict';

var SyntheticUIEvent = require('./SyntheticUIEvent');

var getEventModifierState = require('./getEventModifierState');

/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */
var TouchEventInterface = {
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: getEventModifierState
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);

module.exports = SyntheticTouchEvent;
},{"./SyntheticUIEvent":101,"./getEventModifierState":116}],101:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticUIEvent
 * @typechecks static-only
 */

'use strict';

var SyntheticEvent = require('./SyntheticEvent');

var getEventTarget = require('./getEventTarget');

/**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var UIEventInterface = {
  view: function (event) {
    if (event.view) {
      return event.view;
    }

    var target = getEventTarget(event);
    if (target != null && target.window === target) {
      // target is a window object
      return target;
    }

    var doc = target.ownerDocument;
    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
    if (doc) {
      return doc.defaultView || doc.parentWindow;
    } else {
      return window;
    }
  },
  detail: function (event) {
    return event.detail || 0;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);

module.exports = SyntheticUIEvent;
},{"./SyntheticEvent":95,"./getEventTarget":117}],102:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticWheelEvent
 * @typechecks static-only
 */

'use strict';

var SyntheticMouseEvent = require('./SyntheticMouseEvent');

/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var WheelEventInterface = {
  deltaX: function (event) {
    return 'deltaX' in event ? event.deltaX :
    // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
    'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
  },
  deltaY: function (event) {
    return 'deltaY' in event ? event.deltaY :
    // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
    'wheelDeltaY' in event ? -event.wheelDeltaY :
    // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
    'wheelDelta' in event ? -event.wheelDelta : 0;
  },
  deltaZ: null,

  // Browsers without "deltaMode" is reporting in raw wheel delta where one
  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
  deltaMode: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */
function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);

module.exports = SyntheticWheelEvent;
},{"./SyntheticMouseEvent":99}],103:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Transaction
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 * `Transaction` creates a black box that is able to wrap any method such that
 * certain invariants are maintained before and after the method is invoked
 * (Even if an exception is thrown while invoking the wrapped method). Whoever
 * instantiates a transaction can provide enforcers of the invariants at
 * creation time. The `Transaction` class itself will supply one additional
 * automatic invariant for you - the invariant that any transaction instance
 * should not be run while it is already being run. You would typically create a
 * single instance of a `Transaction` for reuse multiple times, that potentially
 * is used to wrap several different methods. Wrappers are extremely simple -
 * they only require implementing two methods.
 *
 * <pre>
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * </pre>
 *
 * Use cases:
 * - Preserving the input selection ranges before/after reconciliation.
 *   Restoring selection even in the event of an unexpected error.
 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
 *   while guaranteeing that afterwards, the event system is reactivated.
 * - Flushing a queue of collected DOM mutations to the main UI thread after a
 *   reconciliation takes place in a worker thread.
 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
 *   content.
 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
 * - (Future use case): Layout calculations before and after DOM updates.
 *
 * Transactional plugin API:
 * - A module that has an `initialize` method that returns any precomputation.
 * - and a `close` method that accepts the precomputation. `close` is invoked
 *   when the wrapped process is completed, or has failed.
 *
 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
 * that implement `initialize` and `close`.
 * @return {Transaction} Single transaction for reuse in thread.
 *
 * @class Transaction
 */
var Mixin = {
  /**
   * Sets up this instance so that it is prepared for collecting metrics. Does
   * so such that this setup method may be used on an instance that is already
   * initialized, in a way that does not consume additional memory upon reuse.
   * That can be useful if you decide to make your subclass of this mixin a
   * "PooledClass".
   */
  reinitializeTransaction: function () {
    this.transactionWrappers = this.getTransactionWrappers();
    if (this.wrapperInitData) {
      this.wrapperInitData.length = 0;
    } else {
      this.wrapperInitData = [];
    }
    this._isInTransaction = false;
  },

  _isInTransaction: false,

  /**
   * @abstract
   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
   */
  getTransactionWrappers: null,

  isInTransaction: function () {
    return !!this._isInTransaction;
  },

  /**
   * Executes the function within a safety window. Use this for the top level
   * methods that result in large amounts of computation/mutations that would
   * need to be safety checked. The optional arguments helps prevent the need
   * to bind in many cases.
   *
   * @param {function} method Member of scope to call.
   * @param {Object} scope Scope to invoke from.
   * @param {Object?=} a Argument to pass to the method.
   * @param {Object?=} b Argument to pass to the method.
   * @param {Object?=} c Argument to pass to the method.
   * @param {Object?=} d Argument to pass to the method.
   * @param {Object?=} e Argument to pass to the method.
   * @param {Object?=} f Argument to pass to the method.
   *
   * @return {*} Return value from `method`.
   */
  perform: function (method, scope, a, b, c, d, e, f) {
    !!this.isInTransaction() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Transaction.perform(...): Cannot initialize a transaction when there ' + 'is already an outstanding transaction.') : invariant(false) : undefined;
    var errorThrown;
    var ret;
    try {
      this._isInTransaction = true;
      // Catching errors makes debugging more difficult, so we start with
      // errorThrown set to true before setting it to false after calling
      // close -- if it's still set to true in the finally block, it means
      // one of these calls threw.
      errorThrown = true;
      this.initializeAll(0);
      ret = method.call(scope, a, b, c, d, e, f);
      errorThrown = false;
    } finally {
      try {
        if (errorThrown) {
          // If `method` throws, prefer to show that stack trace over any thrown
          // by invoking `closeAll`.
          try {
            this.closeAll(0);
          } catch (err) {}
        } else {
          // Since `method` didn't throw, we don't want to silence the exception
          // here.
          this.closeAll(0);
        }
      } finally {
        this._isInTransaction = false;
      }
    }
    return ret;
  },

  initializeAll: function (startIndex) {
    var transactionWrappers = this.transactionWrappers;
    for (var i = startIndex; i < transactionWrappers.length; i++) {
      var wrapper = transactionWrappers[i];
      try {
        // Catching errors makes debugging more difficult, so we start with the
        // OBSERVED_ERROR state before overwriting it with the real return value
        // of initialize -- if it's still set to OBSERVED_ERROR in the finally
        // block, it means wrapper.initialize threw.
        this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
        this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
      } finally {
        if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
          // The initializer for wrapper i threw an error; initialize the
          // remaining wrappers but silence any exceptions from them to ensure
          // that the first error is the one to bubble up.
          try {
            this.initializeAll(i + 1);
          } catch (err) {}
        }
      }
    }
  },

  /**
   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
   * them the respective return values of `this.transactionWrappers.init[i]`
   * (`close`rs that correspond to initializers that failed will not be
   * invoked).
   */
  closeAll: function (startIndex) {
    !this.isInTransaction() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Transaction.closeAll(): Cannot close transaction when none are open.') : invariant(false) : undefined;
    var transactionWrappers = this.transactionWrappers;
    for (var i = startIndex; i < transactionWrappers.length; i++) {
      var wrapper = transactionWrappers[i];
      var initData = this.wrapperInitData[i];
      var errorThrown;
      try {
        // Catching errors makes debugging more difficult, so we start with
        // errorThrown set to true before setting it to false after calling
        // close -- if it's still set to true in the finally block, it means
        // wrapper.close threw.
        errorThrown = true;
        if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
          wrapper.close.call(this, initData);
        }
        errorThrown = false;
      } finally {
        if (errorThrown) {
          // The closer for wrapper i threw an error; close the remaining
          // wrappers but silence any exceptions from them to ensure that the
          // first error is the one to bubble up.
          try {
            this.closeAll(i + 1);
          } catch (e) {}
        }
      }
    }
    this.wrapperInitData.length = 0;
  }
};

var Transaction = {

  Mixin: Mixin,

  /**
   * Token to look for to determine if an error occurred.
   */
  OBSERVED_ERROR: {}

};

module.exports = Transaction;
}).call(this,require('_process'))
},{"_process":2,"fbjs/lib/invariant":147}],104:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViewportMetrics
 */

'use strict';

var ViewportMetrics = {

  currentScrollLeft: 0,

  currentScrollTop: 0,

  refreshScrollValues: function (scrollPosition) {
    ViewportMetrics.currentScrollLeft = scrollPosition.x;
    ViewportMetrics.currentScrollTop = scrollPosition.y;
  }

};

module.exports = ViewportMetrics;
},{}],105:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule accumulateInto
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 *
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */

function accumulateInto(current, next) {
  !(next != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : invariant(false) : undefined;
  if (current == null) {
    return next;
  }

  // Both are not empty. Warning: Never call x.concat(y) when you are not
  // certain that x is an Array (x could be a string with concat method).
  var currentIsArray = Array.isArray(current);
  var nextIsArray = Array.isArray(next);

  if (currentIsArray && nextIsArray) {
    current.push.apply(current, next);
    return current;
  }

  if (currentIsArray) {
    current.push(next);
    return current;
  }

  if (nextIsArray) {
    // A bit too dangerous to mutate `next`.
    return [current].concat(next);
  }

  return [current, next];
}

module.exports = accumulateInto;
}).call(this,require('_process'))
},{"_process":2,"fbjs/lib/invariant":147}],106:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule adler32
 */

'use strict';

var MOD = 65521;

// adler32 is not cryptographically strong, and is only used to sanity check that
// markup generated on the server matches the markup generated on the client.
// This implementation (a modified version of the SheetJS version) has been optimized
// for our use case, at the expense of conforming to the adler32 specification
// for non-ascii inputs.
function adler32(data) {
  var a = 1;
  var b = 0;
  var i = 0;
  var l = data.length;
  var m = l & ~0x3;
  while (i < m) {
    for (; i < Math.min(i + 4096, m); i += 4) {
      b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
    }
    a %= MOD;
    b %= MOD;
  }
  for (; i < l; i++) {
    b += a += data.charCodeAt(i);
  }
  a %= MOD;
  b %= MOD;
  return a | b << 16;
}

module.exports = adler32;
},{}],107:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule canDefineProperty
 */

'use strict';

var canDefineProperty = false;
if (process.env.NODE_ENV !== 'production') {
  try {
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

module.exports = canDefineProperty;
}).call(this,require('_process'))
},{"_process":2}],108:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 * @typechecks static-only
 */

'use strict';

var CSSProperty = require('./CSSProperty');

var isUnitlessNumber = CSSProperty.isUnitlessNumber;

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  var isNonNumeric = isNaN(value);
  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    value = value.trim();
  }
  return value + 'px';
}

module.exports = dangerousStyleValue;
},{"./CSSProperty":6}],109:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule deprecated
 */

'use strict';

var assign = require('./Object.assign');
var warning = require('fbjs/lib/warning');

/**
 * This will log a single deprecation notice per function and forward the call
 * on to the new API.
 *
 * @param {string} fnName The name of the function
 * @param {string} newModule The module that fn will exist in
 * @param {string} newPackage The module that fn will exist in
 * @param {*} ctx The context this forwarded call should run in
 * @param {function} fn The function to forward on to
 * @return {function} The function that will warn once and then call fn
 */
function deprecated(fnName, newModule, newPackage, ctx, fn) {
  var warned = false;
  if (process.env.NODE_ENV !== 'production') {
    var newFn = function () {
      process.env.NODE_ENV !== 'production' ? warning(warned,
      // Require examples in this string must be split to prevent React's
      // build tools from mistaking them for real requires.
      // Otherwise the build tools will attempt to build a '%s' module.
      'React.%s is deprecated. Please use %s.%s from require' + '(\'%s\') ' + 'instead.', fnName, newModule, fnName, newPackage) : undefined;
      warned = true;
      return fn.apply(ctx, arguments);
    };
    // We need to make sure all properties of the original fn are copied over.
    // In particular, this is needed to support PropTypes
    return assign(newFn, fn);
  }

  return fn;
}

module.exports = deprecated;
}).call(this,require('_process'))
},{"./Object.assign":25,"_process":2,"fbjs/lib/warning":158}],110:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule escapeTextContentForBrowser
 */

'use strict';

var ESCAPE_LOOKUP = {
  '&': '&amp;',
  '>': '&gt;',
  '<': '&lt;',
  '"': '&quot;',
  '\'': '&#x27;'
};

var ESCAPE_REGEX = /[&><"']/g;

function escaper(match) {
  return ESCAPE_LOOKUP[match];
}

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escapeTextContentForBrowser(text) {
  return ('' + text).replace(ESCAPE_REGEX, escaper);
}

module.exports = escapeTextContentForBrowser;
},{}],111:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule findDOMNode
 * @typechecks static-only
 */

'use strict';

var ReactCurrentOwner = require('./ReactCurrentOwner');
var ReactInstanceMap = require('./ReactInstanceMap');
var ReactMount = require('./ReactMount');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

/**
 * Returns the DOM node rendered by this element.
 *
 * @param {ReactComponent|DOMElement} componentOrElement
 * @return {?DOMElement} The root node of this element.
 */
function findDOMNode(componentOrElement) {
  if (process.env.NODE_ENV !== 'production') {
    var owner = ReactCurrentOwner.current;
    if (owner !== null) {
      process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing getDOMNode or findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : undefined;
      owner._warnedAboutRefsInRender = true;
    }
  }
  if (componentOrElement == null) {
    return null;
  }
  if (componentOrElement.nodeType === 1) {
    return componentOrElement;
  }
  if (ReactInstanceMap.has(componentOrElement)) {
    return ReactMount.getNodeFromInstance(componentOrElement);
  }
  !(componentOrElement.render == null || typeof componentOrElement.render !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findDOMNode was called on an unmounted component.') : invariant(false) : undefined;
  !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : invariant(false) : undefined;
}

module.exports = findDOMNode;
}).call(this,require('_process'))
},{"./ReactCurrentOwner":37,"./ReactInstanceMap":65,"./ReactMount":68,"_process":2,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],112:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule flattenChildren
 */

'use strict';

var traverseAllChildren = require('./traverseAllChildren');
var warning = require('fbjs/lib/warning');

/**
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 */
function flattenSingleChildIntoContext(traverseContext, child, name) {
  // We found a component instance.
  var result = traverseContext;
  var keyUnique = result[name] === undefined;
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : undefined;
  }
  if (keyUnique && child != null) {
    result[name] = child;
  }
}

/**
 * Flattens children that are typically specified as `props.children`. Any null
 * children will not be included in the resulting object.
 * @return {!object} flattened children keyed by name.
 */
function flattenChildren(children) {
  if (children == null) {
    return children;
  }
  var result = {};
  traverseAllChildren(children, flattenSingleChildIntoContext, result);
  return result;
}

module.exports = flattenChildren;
}).call(this,require('_process'))
},{"./traverseAllChildren":130,"_process":2,"fbjs/lib/warning":158}],113:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule forEachAccumulated
 */

'use strict';

/**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 */
var forEachAccumulated = function (arr, cb, scope) {
  if (Array.isArray(arr)) {
    arr.forEach(cb, scope);
  } else if (arr) {
    cb.call(scope, arr);
  }
};

module.exports = forEachAccumulated;
},{}],114:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventCharCode
 * @typechecks static-only
 */

'use strict';

/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */
function getEventCharCode(nativeEvent) {
  var charCode;
  var keyCode = nativeEvent.keyCode;

  if ('charCode' in nativeEvent) {
    charCode = nativeEvent.charCode;

    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
    if (charCode === 0 && keyCode === 13) {
      charCode = 13;
    }
  } else {
    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
    charCode = keyCode;
  }

  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
  // Must not discard the (non-)printable Enter-key.
  if (charCode >= 32 || charCode === 13) {
    return charCode;
  }

  return 0;
}

module.exports = getEventCharCode;
},{}],115:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventKey
 * @typechecks static-only
 */

'use strict';

var getEventCharCode = require('./getEventCharCode');

/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var normalizeKey = {
  'Esc': 'Escape',
  'Spacebar': ' ',
  'Left': 'ArrowLeft',
  'Up': 'ArrowUp',
  'Right': 'ArrowRight',
  'Down': 'ArrowDown',
  'Del': 'Delete',
  'Win': 'OS',
  'Menu': 'ContextMenu',
  'Apps': 'ContextMenu',
  'Scroll': 'ScrollLock',
  'MozPrintableKey': 'Unidentified'
};

/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var translateToKey = {
  8: 'Backspace',
  9: 'Tab',
  12: 'Clear',
  13: 'Enter',
  16: 'Shift',
  17: 'Control',
  18: 'Alt',
  19: 'Pause',
  20: 'CapsLock',
  27: 'Escape',
  32: ' ',
  33: 'PageUp',
  34: 'PageDown',
  35: 'End',
  36: 'Home',
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  45: 'Insert',
  46: 'Delete',
  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
  118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
  144: 'NumLock',
  145: 'ScrollLock',
  224: 'Meta'
};

/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */
function getEventKey(nativeEvent) {
  if (nativeEvent.key) {
    // Normalize inconsistent values reported by browsers due to
    // implementations of a working draft specification.

    // FireFox implements `key` but returns `MozPrintableKey` for all
    // printable characters (normalized to `Unidentified`), ignore it.
    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
    if (key !== 'Unidentified') {
      return key;
    }
  }

  // Browser does not implement `key`, polyfill as much of it as we can.
  if (nativeEvent.type === 'keypress') {
    var charCode = getEventCharCode(nativeEvent);

    // The enter-key is technically both printable and non-printable and can
    // thus be captured by `keypress`, no other non-printable key should.
    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
  }
  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
    // While user keyboard layout determines the actual meaning of each
    // `keyCode` value, almost all function keys have a universal value.
    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
  }
  return '';
}

module.exports = getEventKey;
},{"./getEventCharCode":114}],116:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventModifierState
 * @typechecks static-only
 */

'use strict';

/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */

var modifierKeyToProp = {
  'Alt': 'altKey',
  'Control': 'ctrlKey',
  'Meta': 'metaKey',
  'Shift': 'shiftKey'
};

// IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function modifierStateGetter(keyArg) {
  var syntheticEvent = this;
  var nativeEvent = syntheticEvent.nativeEvent;
  if (nativeEvent.getModifierState) {
    return nativeEvent.getModifierState(keyArg);
  }
  var keyProp = modifierKeyToProp[keyArg];
  return keyProp ? !!nativeEvent[keyProp] : false;
}

function getEventModifierState(nativeEvent) {
  return modifierStateGetter;
}

module.exports = getEventModifierState;
},{}],117:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventTarget
 * @typechecks static-only
 */

'use strict';

/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */
function getEventTarget(nativeEvent) {
  var target = nativeEvent.target || nativeEvent.srcElement || window;
  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
  // @see http://www.quirksmode.org/js/events_properties.html
  return target.nodeType === 3 ? target.parentNode : target;
}

module.exports = getEventTarget;
},{}],118:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getIteratorFn
 * @typechecks static-only
 */

'use strict';

/* global Symbol */
var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;
},{}],119:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getNodeForCharacterOffset
 */

'use strict';

/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */
function getLeafNode(node) {
  while (node && node.firstChild) {
    node = node.firstChild;
  }
  return node;
}

/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */
function getSiblingNode(node) {
  while (node) {
    if (node.nextSibling) {
      return node.nextSibling;
    }
    node = node.parentNode;
  }
}

/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */
function getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode(root);
  var nodeStart = 0;
  var nodeEnd = 0;

  while (node) {
    if (node.nodeType === 3) {
      nodeEnd = nodeStart + node.textContent.length;

      if (nodeStart <= offset && nodeEnd >= offset) {
        return {
          node: node,
          offset: offset - nodeStart
        };
      }

      nodeStart = nodeEnd;
    }

    node = getLeafNode(getSiblingNode(node));
  }
}

module.exports = getNodeForCharacterOffset;
},{}],120:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getTextContentAccessor
 */

'use strict';

var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var contentKey = null;

/**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */
function getTextContentAccessor() {
  if (!contentKey && ExecutionEnvironment.canUseDOM) {
    // Prefer textContent to innerText because many browsers support both but
    // SVG <text> elements don't support innerText even when <div> does.
    contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
  }
  return contentKey;
}

module.exports = getTextContentAccessor;
},{"fbjs/lib/ExecutionEnvironment":133}],121:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule instantiateReactComponent
 * @typechecks static-only
 */

'use strict';

var ReactCompositeComponent = require('./ReactCompositeComponent');
var ReactEmptyComponent = require('./ReactEmptyComponent');
var ReactNativeComponent = require('./ReactNativeComponent');

var assign = require('./Object.assign');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

// To avoid a cyclic dependency, we create the final class in this module
var ReactCompositeComponentWrapper = function () {};
assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent.Mixin, {
  _instantiateReactComponent: instantiateReactComponent
});

function getDeclarationErrorAddendum(owner) {
  if (owner) {
    var name = owner.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

/**
 * Check if the type reference is a known internal type. I.e. not a user
 * provided composite type.
 *
 * @param {function} type
 * @return {boolean} Returns true if this is a valid internal type.
 */
function isInternalComponentType(type) {
  return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
}

/**
 * Given a ReactNode, create an instance that will actually be mounted.
 *
 * @param {ReactNode} node
 * @return {object} A new instance of the element's constructor.
 * @protected
 */
function instantiateReactComponent(node) {
  var instance;

  if (node === null || node === false) {
    instance = new ReactEmptyComponent(instantiateReactComponent);
  } else if (typeof node === 'object') {
    var element = node;
    !(element && (typeof element.type === 'function' || typeof element.type === 'string')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element type is invalid: expected a string (for built-in components) ' + 'or a class/function (for composite components) but got: %s.%s', element.type == null ? element.type : typeof element.type, getDeclarationErrorAddendum(element._owner)) : invariant(false) : undefined;

    // Special case string values
    if (typeof element.type === 'string') {
      instance = ReactNativeComponent.createInternalComponent(element);
    } else if (isInternalComponentType(element.type)) {
      // This is temporarily available for custom components that are not string
      // representations. I.e. ART. Once those are updated to use the string
      // representation, we can drop this code path.
      instance = new element.type(element);
    } else {
      instance = new ReactCompositeComponentWrapper();
    }
  } else if (typeof node === 'string' || typeof node === 'number') {
    instance = ReactNativeComponent.createInstanceForText(node);
  } else {
    !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Encountered invalid React node of type %s', typeof node) : invariant(false) : undefined;
  }

  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? warning(typeof instance.construct === 'function' && typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : undefined;
  }

  // Sets up the instance. This can probably just move into the constructor now.
  instance.construct(node);

  // These two fields are used by the DOM and ART diffing algorithms
  // respectively. Instead of using expandos on components, we should be
  // storing the state needed by the diffing algorithms elsewhere.
  instance._mountIndex = 0;
  instance._mountImage = null;

  if (process.env.NODE_ENV !== 'production') {
    instance._isOwnerNecessary = false;
    instance._warnedAboutRefsInRender = false;
  }

  // Internal instances should fully constructed at this point, so they should
  // not get any new fields added to them at this point.
  if (process.env.NODE_ENV !== 'production') {
    if (Object.preventExtensions) {
      Object.preventExtensions(instance);
    }
  }

  return instance;
}

module.exports = instantiateReactComponent;
}).call(this,require('_process'))
},{"./Object.assign":25,"./ReactCompositeComponent":36,"./ReactEmptyComponent":57,"./ReactNativeComponent":71,"_process":2,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],122:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */

'use strict';

var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var useHasFeature;
if (ExecutionEnvironment.canUseDOM) {
  useHasFeature = document.implementation && document.implementation.hasFeature &&
  // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature('', '') !== true;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = (eventName in document);

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

module.exports = isEventSupported;
},{"fbjs/lib/ExecutionEnvironment":133}],123:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextInputElement
 */

'use strict';

/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */
var supportedInputTypes = {
  'color': true,
  'date': true,
  'datetime': true,
  'datetime-local': true,
  'email': true,
  'month': true,
  'number': true,
  'password': true,
  'range': true,
  'search': true,
  'tel': true,
  'text': true,
  'time': true,
  'url': true,
  'week': true
};

function isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return nodeName && (nodeName === 'input' && supportedInputTypes[elem.type] || nodeName === 'textarea');
}

module.exports = isTextInputElement;
},{}],124:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule onlyChild
 */
'use strict';

var ReactElement = require('./ReactElement');

var invariant = require('fbjs/lib/invariant');

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection. The current implementation of this
 * function assumes that a single child gets passed without a wrapper, but the
 * purpose of this helper function is to abstract away the particular structure
 * of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactComponent} The first and only `ReactComponent` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'onlyChild must be passed a children with exactly one child.') : invariant(false) : undefined;
  return children;
}

module.exports = onlyChild;
}).call(this,require('_process'))
},{"./ReactElement":55,"_process":2,"fbjs/lib/invariant":147}],125:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule quoteAttributeValueForBrowser
 */

'use strict';

var escapeTextContentForBrowser = require('./escapeTextContentForBrowser');

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextContentForBrowser(value) + '"';
}

module.exports = quoteAttributeValueForBrowser;
},{"./escapeTextContentForBrowser":110}],126:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
* @providesModule renderSubtreeIntoContainer
*/

'use strict';

var ReactMount = require('./ReactMount');

module.exports = ReactMount.renderSubtreeIntoContainer;
},{"./ReactMount":68}],127:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setInnerHTML
 */

/* globals MSApp */

'use strict';

var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var WHITESPACE_TEST = /^[ \r\n\t\f]/;
var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

/**
 * Set the innerHTML property of a node, ensuring that whitespace is preserved
 * even in IE8.
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */
var setInnerHTML = function (node, html) {
  node.innerHTML = html;
};

// Win8 apps: Allow all html to be inserted
if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
  setInnerHTML = function (node, html) {
    MSApp.execUnsafeLocalFunction(function () {
      node.innerHTML = html;
    });
  };
}

if (ExecutionEnvironment.canUseDOM) {
  // IE8: When updating a just created node with innerHTML only leading
  // whitespace is removed. When updating an existing node with innerHTML
  // whitespace in root TextNodes is also collapsed.
  // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

  // Feature detection; only IE8 is known to behave improperly like this.
  var testElement = document.createElement('div');
  testElement.innerHTML = ' ';
  if (testElement.innerHTML === '') {
    setInnerHTML = function (node, html) {
      // Magic theory: IE8 supposedly differentiates between added and updated
      // nodes when processing innerHTML, innerHTML on updated nodes suffers
      // from worse whitespace behavior. Re-adding a node like this triggers
      // the initial and more favorable whitespace behavior.
      // TODO: What to do on a detached node?
      if (node.parentNode) {
        node.parentNode.replaceChild(node, node);
      }

      // We also implement a workaround for non-visible tags disappearing into
      // thin air on IE8, this only happens if there is no visible text
      // in-front of the non-visible tags. Piggyback on the whitespace fix
      // and simply check if any non-visible tags appear in the source.
      if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
        // Recover leading whitespace by temporarily prepending any character.
        // \uFEFF has the potential advantage of being zero-width/invisible.
        // UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
        // in hopes that this is preserved even if "\uFEFF" is transformed to
        // the actual Unicode character (by Babel, for example).
        // https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
        node.innerHTML = String.fromCharCode(0xFEFF) + html;

        // deleteData leaves an empty `TextNode` which offsets the index of all
        // children. Definitely want to avoid this.
        var textNode = node.firstChild;
        if (textNode.data.length === 1) {
          node.removeChild(textNode);
        } else {
          textNode.deleteData(0, 1);
        }
      } else {
        node.innerHTML = html;
      }
    };
  }
}

module.exports = setInnerHTML;
},{"fbjs/lib/ExecutionEnvironment":133}],128:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setTextContent
 */

'use strict';

var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
var escapeTextContentForBrowser = require('./escapeTextContentForBrowser');
var setInnerHTML = require('./setInnerHTML');

/**
 * Set the textContent property of a node, ensuring that whitespace is preserved
 * even in IE8. innerText is a poor substitute for textContent and, among many
 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
 * as it should.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */
var setTextContent = function (node, text) {
  node.textContent = text;
};

if (ExecutionEnvironment.canUseDOM) {
  if (!('textContent' in document.documentElement)) {
    setTextContent = function (node, text) {
      setInnerHTML(node, escapeTextContentForBrowser(text));
    };
  }
}

module.exports = setTextContent;
},{"./escapeTextContentForBrowser":110,"./setInnerHTML":127,"fbjs/lib/ExecutionEnvironment":133}],129:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shouldUpdateReactComponent
 * @typechecks static-only
 */

'use strict';

/**
 * Given a `prevElement` and `nextElement`, determines if the existing
 * instance should be updated as opposed to being destroyed or replaced by a new
 * instance. Both arguments are elements. This ensures that this logic can
 * operate on stateless trees without any backing instance.
 *
 * @param {?object} prevElement
 * @param {?object} nextElement
 * @return {boolean} True if the existing instance should be updated.
 * @protected
 */
function shouldUpdateReactComponent(prevElement, nextElement) {
  var prevEmpty = prevElement === null || prevElement === false;
  var nextEmpty = nextElement === null || nextElement === false;
  if (prevEmpty || nextEmpty) {
    return prevEmpty === nextEmpty;
  }

  var prevType = typeof prevElement;
  var nextType = typeof nextElement;
  if (prevType === 'string' || prevType === 'number') {
    return nextType === 'string' || nextType === 'number';
  } else {
    return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
  }
  return false;
}

module.exports = shouldUpdateReactComponent;
},{}],130:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule traverseAllChildren
 */

'use strict';

var ReactCurrentOwner = require('./ReactCurrentOwner');
var ReactElement = require('./ReactElement');
var ReactInstanceHandles = require('./ReactInstanceHandles');

var getIteratorFn = require('./getIteratorFn');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var SEPARATOR = ReactInstanceHandles.SEPARATOR;
var SUBSEPARATOR = ':';

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var userProvidedKeyEscaperLookup = {
  '=': '=0',
  '.': '=1',
  ':': '=2'
};

var userProvidedKeyEscapeRegex = /[=.:]/g;

var didWarnAboutMaps = false;

function userProvidedKeyEscaper(match) {
  return userProvidedKeyEscaperLookup[match];
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  if (component && component.key != null) {
    // Explicit key
    return wrapUserProvidedKey(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * Escape a component key so that it is safe to use in a reactid.
 *
 * @param {*} text Component key to be escaped.
 * @return {string} An escaped string.
 */
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, userProvidedKeyEscaper);
}

/**
 * Wrap a `key` value explicitly provided by the user to distinguish it from
 * implicitly-generated keys generated by a component's index in its parent.
 *
 * @param {string} key Value of a user-provided `key` attribute
 * @return {string}
 */
function wrapUserProvidedKey(key) {
  return '$' + escapeUserProvidedKey(key);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (process.env.NODE_ENV !== 'production') {
          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : undefined;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + wrapUserProvidedKey(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (process.env.NODE_ENV !== 'production') {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
      !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : invariant(false) : undefined;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;
}).call(this,require('_process'))
},{"./ReactCurrentOwner":37,"./ReactElement":55,"./ReactInstanceHandles":64,"./getIteratorFn":118,"_process":2,"fbjs/lib/invariant":147,"fbjs/lib/warning":158}],131:[function(require,module,exports){
(function (process){
/**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule validateDOMNesting
 */

'use strict';

var assign = require('./Object.assign');
var emptyFunction = require('fbjs/lib/emptyFunction');
var warning = require('fbjs/lib/warning');

var validateDOMNesting = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  // This validation code was written based on the HTML5 parsing spec:
  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  //
  // Note: this does not catch all invalid nesting, nor does it try to (as it's
  // not clear what practical benefit doing so provides); instead, we warn only
  // for cases where the parser will give a parse tree differing from what React
  // intended. For example, <b><div></div></b> is invalid but we don't warn
  // because it still parses correctly; we do warn for other cases like nested
  // <p> tags where the beginning of the second element implicitly closes the
  // first, causing a confusing mess.

  // https://html.spec.whatwg.org/multipage/syntax.html#special
  var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];

  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template',

  // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
  // TODO: Distinguish by namespace here -- for <title>, including it here
  // errs on the side of fewer warnings
  'foreignObject', 'desc', 'title'];

  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
  var buttonScopeTags = inScopeTags.concat(['button']);

  // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
  var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];

  var emptyAncestorInfo = {
    parentTag: null,

    formTag: null,
    aTagInScope: null,
    buttonTagInScope: null,
    nobrTagInScope: null,
    pTagInButtonScope: null,

    listItemTagAutoclosing: null,
    dlItemTagAutoclosing: null
  };

  var updatedAncestorInfo = function (oldInfo, tag, instance) {
    var ancestorInfo = assign({}, oldInfo || emptyAncestorInfo);
    var info = { tag: tag, instance: instance };

    if (inScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.aTagInScope = null;
      ancestorInfo.buttonTagInScope = null;
      ancestorInfo.nobrTagInScope = null;
    }
    if (buttonScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.pTagInButtonScope = null;
    }

    // See rules for 'li', 'dd', 'dt' start tags in
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
    if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
      ancestorInfo.listItemTagAutoclosing = null;
      ancestorInfo.dlItemTagAutoclosing = null;
    }

    ancestorInfo.parentTag = info;

    if (tag === 'form') {
      ancestorInfo.formTag = info;
    }
    if (tag === 'a') {
      ancestorInfo.aTagInScope = info;
    }
    if (tag === 'button') {
      ancestorInfo.buttonTagInScope = info;
    }
    if (tag === 'nobr') {
      ancestorInfo.nobrTagInScope = info;
    }
    if (tag === 'p') {
      ancestorInfo.pTagInButtonScope = info;
    }
    if (tag === 'li') {
      ancestorInfo.listItemTagAutoclosing = info;
    }
    if (tag === 'dd' || tag === 'dt') {
      ancestorInfo.dlItemTagAutoclosing = info;
    }

    return ancestorInfo;
  };

  /**
   * Returns whether
   */
  var isTagValidWithParent = function (tag, parentTag) {
    // First, let's check if we're in an unusual parsing mode...
    switch (parentTag) {
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
      case 'select':
        return tag === 'option' || tag === 'optgroup' || tag === '#text';
      case 'optgroup':
        return tag === 'option' || tag === '#text';
      // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
      // but
      case 'option':
        return tag === '#text';

      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
      // No special behavior since these rules fall back to "in body" mode for
      // all except special table nodes which cause bad parsing behavior anyway.

      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
      case 'tr':
        return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';

      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
      case 'tbody':
      case 'thead':
      case 'tfoot':
        return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';

      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
      case 'colgroup':
        return tag === 'col' || tag === 'template';

      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
      case 'table':
        return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';

      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
      case 'head':
        return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';

      // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
      case 'html':
        return tag === 'head' || tag === 'body';
    }

    // Probably in the "in body" parsing mode, so we outlaw only tag combos
    // where the parsing rules cause implicit opens or closes to be added.
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
    switch (tag) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';

      case 'rp':
      case 'rt':
        return impliedEndTags.indexOf(parentTag) === -1;

      case 'caption':
      case 'col':
      case 'colgroup':
      case 'frame':
      case 'head':
      case 'tbody':
      case 'td':
      case 'tfoot':
      case 'th':
      case 'thead':
      case 'tr':
        // These tags are only valid with a few parents that have special child
        // parsing rules -- if we're down here, then none of those matched and
        // so we allow it only if we don't know what the parent is, as all other
        // cases are invalid.
        return parentTag == null;
    }

    return true;
  };

  /**
   * Returns whether
   */
  var findInvalidAncestorForTag = function (tag, ancestorInfo) {
    switch (tag) {
      case 'address':
      case 'article':
      case 'aside':
      case 'blockquote':
      case 'center':
      case 'details':
      case 'dialog':
      case 'dir':
      case 'div':
      case 'dl':
      case 'fieldset':
      case 'figcaption':
      case 'figure':
      case 'footer':
      case 'header':
      case 'hgroup':
      case 'main':
      case 'menu':
      case 'nav':
      case 'ol':
      case 'p':
      case 'section':
      case 'summary':
      case 'ul':

      case 'pre':
      case 'listing':

      case 'table':

      case 'hr':

      case 'xmp':

      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return ancestorInfo.pTagInButtonScope;

      case 'form':
        return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

      case 'li':
        return ancestorInfo.listItemTagAutoclosing;

      case 'dd':
      case 'dt':
        return ancestorInfo.dlItemTagAutoclosing;

      case 'button':
        return ancestorInfo.buttonTagInScope;

      case 'a':
        // Spec says something about storing a list of markers, but it sounds
        // equivalent to this check.
        return ancestorInfo.aTagInScope;

      case 'nobr':
        return ancestorInfo.nobrTagInScope;
    }

    return null;
  };

  /**
   * Given a ReactCompositeComponent instance, return a list of its recursive
   * owners, starting at the root and ending with the instance itself.
   */
  var findOwnerStack = function (instance) {
    if (!instance) {
      return [];
    }

    var stack = [];
    /*eslint-disable space-after-keywords */
    do {
      /*eslint-enable space-after-keywords */
      stack.push(instance);
    } while (instance = instance._currentElement._owner);
    stack.reverse();
    return stack;
  };

  var didWarn = {};

  validateDOMNesting = function (childTag, childInstance, ancestorInfo) {
    ancestorInfo = ancestorInfo || emptyAncestorInfo;
    var parentInfo = ancestorInfo.parentTag;
    var parentTag = parentInfo && parentInfo.tag;

    var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
    var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
    var problematic = invalidParent || invalidAncestor;

    if (problematic) {
      var ancestorTag = problematic.tag;
      var ancestorInstance = problematic.instance;

      var childOwner = childInstance && childInstance._currentElement._owner;
      var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;

      var childOwners = findOwnerStack(childOwner);
      var ancestorOwners = findOwnerStack(ancestorOwner);

      var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
      var i;

      var deepestCommon = -1;
      for (i = 0; i < minStackLen; i++) {
        if (childOwners[i] === ancestorOwners[i]) {
          deepestCommon = i;
        } else {
          break;
        }
      }

      var UNKNOWN = '(unknown)';
      var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function (inst) {
        return inst.getName() || UNKNOWN;
      });
      var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function (inst) {
        return inst.getName() || UNKNOWN;
      });
      var ownerInfo = [].concat(
      // If the parent and child instances have a common owner ancestor, start
      // with that -- otherwise we just start with the parent's owners.
      deepestCommon !== -1 ? childOwners[deepestCommon].getName() || UNKNOWN : [], ancestorOwnerNames, ancestorTag,
      // If we're warning about an invalid (non-parent) ancestry, add '...'
      invalidAncestor ? ['...'] : [], childOwnerNames, childTag).join(' > ');

      var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + ownerInfo;
      if (didWarn[warnKey]) {
        return;
      }
      didWarn[warnKey] = true;

      if (invalidParent) {
        var info = '';
        if (ancestorTag === 'table' && childTag === 'tr') {
          info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
        }
        process.env.NODE_ENV !== 'production' ? warning(false, 'validateDOMNesting(...): <%s> cannot appear as a child of <%s>. ' + 'See %s.%s', childTag, ancestorTag, ownerInfo, info) : undefined;
      } else {
        process.env.NODE_ENV !== 'production' ? warning(false, 'validateDOMNesting(...): <%s> cannot appear as a descendant of ' + '<%s>. See %s.', childTag, ancestorTag, ownerInfo) : undefined;
      }
    }
  };

  validateDOMNesting.ancestorInfoContextKey = '__validateDOMNesting_ancestorInfo$' + Math.random().toString(36).slice(2);

  validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo;

  // For testing
  validateDOMNesting.isTagValidInContext = function (tag, ancestorInfo) {
    ancestorInfo = ancestorInfo || emptyAncestorInfo;
    var parentInfo = ancestorInfo.parentTag;
    var parentTag = parentInfo && parentInfo.tag;
    return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
  };
}

module.exports = validateDOMNesting;
}).call(this,require('_process'))
},{"./Object.assign":25,"_process":2,"fbjs/lib/emptyFunction":139,"fbjs/lib/warning":158}],132:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule EventListener
 * @typechecks
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
var EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function (target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function () {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function () {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },

  /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  capture: function (target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, true);
      return {
        remove: function () {
          target.removeEventListener(eventType, callback, true);
        }
      };
    } else {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
      }
      return {
        remove: emptyFunction
      };
    }
  },

  registerDefault: function () {}
};

module.exports = EventListener;
}).call(this,require('_process'))
},{"./emptyFunction":139,"_process":2}],133:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

'use strict';

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;
},{}],134:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule camelize
 * @typechecks
 */

"use strict";

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;
},{}],135:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule camelizeStyleName
 * @typechecks
 */

'use strict';

var camelize = require('./camelize');

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;
},{"./camelize":134}],136:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule containsNode
 * @typechecks
 */

'use strict';

var isTextNode = require('./isTextNode');

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 *
 * @param {?DOMNode} outerNode Outer DOM node.
 * @param {?DOMNode} innerNode Inner DOM node.
 * @return {boolean} True if `outerNode` contains or is `innerNode`.
 */
function containsNode(_x, _x2) {
  var _again = true;

  _function: while (_again) {
    var outerNode = _x,
        innerNode = _x2;
    _again = false;

    if (!outerNode || !innerNode) {
      return false;
    } else if (outerNode === innerNode) {
      return true;
    } else if (isTextNode(outerNode)) {
      return false;
    } else if (isTextNode(innerNode)) {
      _x = outerNode;
      _x2 = innerNode.parentNode;
      _again = true;
      continue _function;
    } else if (outerNode.contains) {
      return outerNode.contains(innerNode);
    } else if (outerNode.compareDocumentPosition) {
      return !!(outerNode.compareDocumentPosition(innerNode) & 16);
    } else {
      return false;
    }
  }
}

module.exports = containsNode;
},{"./isTextNode":149}],137:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createArrayFromMixed
 * @typechecks
 */

'use strict';

var toArray = require('./toArray');

/**
 * Perform a heuristic test to determine if an object is "array-like".
 *
 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
 *   Joshu replied: "Mu."
 *
 * This function determines if its argument has "array nature": it returns
 * true if the argument is an actual array, an `arguments' object, or an
 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
 *
 * It will return false for other array-like objects like Filelist.
 *
 * @param {*} obj
 * @return {boolean}
 */
function hasArrayNature(obj) {
  return(
    // not null/false
    !!obj && (
    // arrays are objects, NodeLists are functions in Safari
    typeof obj == 'object' || typeof obj == 'function') &&
    // quacks like an array
    'length' in obj &&
    // not window
    !('setInterval' in obj) &&
    // no DOM node should be considered an array-like
    // a 'select' element has 'length' and 'item' properties on IE8
    typeof obj.nodeType != 'number' && (
    // a real array
    Array.isArray(obj) ||
    // arguments
    'callee' in obj ||
    // HTMLCollection/NodeList
    'item' in obj)
  );
}

/**
 * Ensure that the argument is an array by wrapping it in an array if it is not.
 * Creates a copy of the argument if it is already an array.
 *
 * This is mostly useful idiomatically:
 *
 *   var createArrayFromMixed = require('createArrayFromMixed');
 *
 *   function takesOneOrMoreThings(things) {
 *     things = createArrayFromMixed(things);
 *     ...
 *   }
 *
 * This allows you to treat `things' as an array, but accept scalars in the API.
 *
 * If you need to convert an array-like object, like `arguments`, into an array
 * use toArray instead.
 *
 * @param {*} obj
 * @return {array}
 */
function createArrayFromMixed(obj) {
  if (!hasArrayNature(obj)) {
    return [obj];
  } else if (Array.isArray(obj)) {
    return obj.slice();
  } else {
    return toArray(obj);
  }
}

module.exports = createArrayFromMixed;
},{"./toArray":157}],138:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createNodesFromMarkup
 * @typechecks
 */

/*eslint-disable fb-www/unsafe-html*/

'use strict';

var ExecutionEnvironment = require('./ExecutionEnvironment');

var createArrayFromMixed = require('./createArrayFromMixed');
var getMarkupWrap = require('./getMarkupWrap');
var invariant = require('./invariant');

/**
 * Dummy container used to render all markup.
 */
var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

/**
 * Pattern used by `getNodeName`.
 */
var nodeNamePattern = /^\s*<(\w+)/;

/**
 * Extracts the `nodeName` of the first element in a string of markup.
 *
 * @param {string} markup String of markup.
 * @return {?string} Node name of the supplied markup.
 */
function getNodeName(markup) {
  var nodeNameMatch = markup.match(nodeNamePattern);
  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
}

/**
 * Creates an array containing the nodes rendered from the supplied markup. The
 * optionally supplied `handleScript` function will be invoked once for each
 * <script> element that is rendered. If no `handleScript` function is supplied,
 * an exception is thrown if any <script> elements are rendered.
 *
 * @param {string} markup A string of valid HTML markup.
 * @param {?function} handleScript Invoked once for each rendered <script>.
 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
 */
function createNodesFromMarkup(markup, handleScript) {
  var node = dummyNode;
  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup dummy not initialized') : invariant(false) : undefined;
  var nodeName = getNodeName(markup);

  var wrap = nodeName && getMarkupWrap(nodeName);
  if (wrap) {
    node.innerHTML = wrap[1] + markup + wrap[2];

    var wrapDepth = wrap[0];
    while (wrapDepth--) {
      node = node.lastChild;
    }
  } else {
    node.innerHTML = markup;
  }

  var scripts = node.getElementsByTagName('script');
  if (scripts.length) {
    !handleScript ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(false) : undefined;
    createArrayFromMixed(scripts).forEach(handleScript);
  }

  var nodes = createArrayFromMixed(node.childNodes);
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
  return nodes;
}

module.exports = createNodesFromMarkup;
}).call(this,require('_process'))
},{"./ExecutionEnvironment":133,"./createArrayFromMixed":137,"./getMarkupWrap":143,"./invariant":147,"_process":2}],139:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */

"use strict";

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],140:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyObject
 */

'use strict';

var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
}).call(this,require('_process'))
},{"_process":2}],141:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule focusNode
 */

'use strict';

/**
 * @param {DOMElement} node input/textarea to focus
 */
function focusNode(node) {
  // IE8 can throw "Can't move focus to the control because it is invisible,
  // not enabled, or of a type that does not accept the focus." for all kinds of
  // reasons that are too expensive and fragile to test.
  try {
    node.focus();
  } catch (e) {}
}

module.exports = focusNode;
},{}],142:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getActiveElement
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 */
'use strict';

function getActiveElement() /*?DOMElement*/{
  if (typeof document === 'undefined') {
    return null;
  }
  try {
    return document.activeElement || document.body;
  } catch (e) {
    return document.body;
  }
}

module.exports = getActiveElement;
},{}],143:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getMarkupWrap
 */

/*eslint-disable fb-www/unsafe-html */

'use strict';

var ExecutionEnvironment = require('./ExecutionEnvironment');

var invariant = require('./invariant');

/**
 * Dummy container used to detect which wraps are necessary.
 */
var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

/**
 * Some browsers cannot use `innerHTML` to render certain elements standalone,
 * so we wrap them, render the wrapped nodes, then extract the desired node.
 *
 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
 */

var shouldWrap = {};

var selectWrap = [1, '<select multiple="true">', '</select>'];
var tableWrap = [1, '<table>', '</table>'];
var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];

var markupWrap = {
  '*': [1, '?<div>', '</div>'],

  'area': [1, '<map>', '</map>'],
  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  'legend': [1, '<fieldset>', '</fieldset>'],
  'param': [1, '<object>', '</object>'],
  'tr': [2, '<table><tbody>', '</tbody></table>'],

  'optgroup': selectWrap,
  'option': selectWrap,

  'caption': tableWrap,
  'colgroup': tableWrap,
  'tbody': tableWrap,
  'tfoot': tableWrap,
  'thead': tableWrap,

  'td': trWrap,
  'th': trWrap
};

// Initialize the SVG elements since we know they'll always need to be wrapped
// consistently. If they are created inside a <div> they will be initialized in
// the wrong namespace (and will not display).
var svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
svgElements.forEach(function (nodeName) {
  markupWrap[nodeName] = svgWrap;
  shouldWrap[nodeName] = true;
});

/**
 * Gets the markup wrap configuration for the supplied `nodeName`.
 *
 * NOTE: This lazily detects which wraps are necessary for the current browser.
 *
 * @param {string} nodeName Lowercase `nodeName`.
 * @return {?array} Markup wrap configuration, if applicable.
 */
function getMarkupWrap(nodeName) {
  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Markup wrapping node not initialized') : invariant(false) : undefined;
  if (!markupWrap.hasOwnProperty(nodeName)) {
    nodeName = '*';
  }
  if (!shouldWrap.hasOwnProperty(nodeName)) {
    if (nodeName === '*') {
      dummyNode.innerHTML = '<link />';
    } else {
      dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
    }
    shouldWrap[nodeName] = !dummyNode.firstChild;
  }
  return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
}

module.exports = getMarkupWrap;
}).call(this,require('_process'))
},{"./ExecutionEnvironment":133,"./invariant":147,"_process":2}],144:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getUnboundedScrollPosition
 * @typechecks
 */

'use strict';

/**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are unbounded, unlike `getScrollPosition`. This means they
 * may be negative or exceed the element boundaries (which is possible using
 * inertial scrolling).
 *
 * @param {DOMWindow|DOMElement} scrollable
 * @return {object} Map with `x` and `y` keys.
 */
function getUnboundedScrollPosition(scrollable) {
  if (scrollable === window) {
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop
    };
  }
  return {
    x: scrollable.scrollLeft,
    y: scrollable.scrollTop
  };
}

module.exports = getUnboundedScrollPosition;
},{}],145:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hyphenate
 * @typechecks
 */

'use strict';

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;
},{}],146:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hyphenateStyleName
 * @typechecks
 */

'use strict';

var hyphenate = require('./hyphenate');

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;
},{"./hyphenate":145}],147:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

function invariant(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
}).call(this,require('_process'))
},{"_process":2}],148:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isNode
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
'use strict';

function isNode(object) {
  return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

module.exports = isNode;
},{}],149:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextNode
 * @typechecks
 */

'use strict';

var isNode = require('./isNode');

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;
},{"./isNode":148}],150:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyMirror
 * @typechecks static-only
 */

'use strict';

var invariant = require('./invariant');

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
var keyMirror = function (obj) {
  var ret = {};
  var key;
  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : undefined;
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};

module.exports = keyMirror;
}).call(this,require('_process'))
},{"./invariant":147,"_process":2}],151:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyOf
 */

/**
 * Allows extraction of a minified key. Let's the build system minify keys
 * without losing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */
"use strict";

var keyOf = function (oneKeyObj) {
  var key;
  for (key in oneKeyObj) {
    if (!oneKeyObj.hasOwnProperty(key)) {
      continue;
    }
    return key;
  }
  return null;
};

module.exports = keyOf;
},{}],152:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule mapObject
 */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Executes the provided `callback` once for each enumerable own property in the
 * object and constructs a new object from the results. The `callback` is
 * invoked with three arguments:
 *
 *  - the property value
 *  - the property name
 *  - the object being traversed
 *
 * Properties that are added after the call to `mapObject` will not be visited
 * by `callback`. If the values of existing properties are changed, the value
 * passed to `callback` will be the value at the time `mapObject` visits them.
 * Properties that are deleted before being visited are not visited.
 *
 * @grep function objectMap()
 * @grep function objMap()
 *
 * @param {?object} object
 * @param {function} callback
 * @param {*} context
 * @return {?object}
 */
function mapObject(object, callback, context) {
  if (!object) {
    return null;
  }
  var result = {};
  for (var name in object) {
    if (hasOwnProperty.call(object, name)) {
      result[name] = callback.call(context, object[name], name, object);
    }
  }
  return result;
}

module.exports = mapObject;
},{}],153:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule memoizeStringOnly
 * @typechecks static-only
 */

'use strict';

/**
 * Memoizes the return value of a function that accepts one string argument.
 *
 * @param {function} callback
 * @return {function}
 */
function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;
},{}],154:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule performance
 * @typechecks
 */

'use strict';

var ExecutionEnvironment = require('./ExecutionEnvironment');

var performance;

if (ExecutionEnvironment.canUseDOM) {
  performance = window.performance || window.msPerformance || window.webkitPerformance;
}

module.exports = performance || {};
},{"./ExecutionEnvironment":133}],155:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule performanceNow
 * @typechecks
 */

'use strict';

var performance = require('./performance');

var performanceNow;

/**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */
if (performance.now) {
  performanceNow = function () {
    return performance.now();
  };
} else {
  performanceNow = function () {
    return Date.now();
  };
}

module.exports = performanceNow;
},{"./performance":154}],156:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shallowEqual
 * @typechecks
 * 
 */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;
},{}],157:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule toArray
 * @typechecks
 */

'use strict';

var invariant = require('./invariant');

/**
 * Convert array-like objects to arrays.
 *
 * This API assumes the caller knows the contents of the data type. For less
 * well defined inputs use createArrayFromMixed.
 *
 * @param {object|function|filelist} obj
 * @return {array}
 */
function toArray(obj) {
  var length = obj.length;

  // Some browse builtin objects can report typeof 'function' (e.g. NodeList in
  // old versions of Safari).
  !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : undefined;

  !(typeof length === 'number') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : undefined;

  !(length === 0 || length - 1 in obj) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : undefined;

  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
  // without method will throw during the slice call and skip straight to the
  // fallback.
  if (obj.hasOwnProperty) {
    try {
      return Array.prototype.slice.call(obj);
    } catch (e) {
      // IE < 9 does not support Array#slice on collections objects
    }
  }

  // Fall back to copying key by key. This assumes all keys have a value,
  // so will not preserve sparsely populated inputs.
  var ret = Array(length);
  for (var ii = 0; ii < length; ii++) {
    ret[ii] = obj[ii];
  }
  return ret;
}

module.exports = toArray;
}).call(this,require('_process'))
},{"./invariant":147,"_process":2}],158:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  warning = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;
}).call(this,require('_process'))
},{"./emptyFunction":139,"_process":2}],159:[function(require,module,exports){
'use strict';

module.exports = require('./lib/React');

},{"./lib/React":27}],160:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _smallgridMin = require('./../../dist/js/smallgrid.min.js');

var _smallgridMin2 = _interopRequireDefault(_smallgridMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyComponent = (function (_React$Component) {
    _inherits(MyComponent, _React$Component);

    function MyComponent(props) {
        _classCallCheck(this, MyComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyComponent).call(this, props));

        _this.state = { rows: data };
        return _this;
    }

    _createClass(MyComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Basic usage'
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Minimal'
                    ),
                    _react2.default.createElement(_smallgridMin2.default, {
                        rows: this.state.rows,
                        cols: [{ 'key': 'rating' }, { 'key': 'name' }, { 'key': 'track_number' }]
                    })
                )
            );
        }
    }]);

    return MyComponent;
})(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(MyComponent, null), document.body);

},{"./../../dist/js/smallgrid.min.js":1,"react":159,"react-dom":3}]},{},[160]);
