var babelHelpers = {};
babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
babelHelpers;

/*!
 * Vue.js v1.0.16
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : babelHelpers.typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Vue = e();
}(this, function () {
  "use strict";
  function t(e, n, r) {
    if (i(e, n)) return void (e[n] = r);if (e._isVue) return void t(e._data, n, r);var s = e.__ob__;if (!s) return void (e[n] = r);if (s.convert(n, r), s.dep.notify(), s.vms) for (var o = s.vms.length; o--;) {
      var a = s.vms[o];a._proxy(n), a._digest();
    }return r;
  }function e(t, e) {
    if (i(t, e)) {
      delete t[e];var n = t.__ob__;if (n && (n.dep.notify(), n.vms)) for (var r = n.vms.length; r--;) {
        var s = n.vms[r];s._unproxy(e), s._digest();
      }
    }
  }function i(t, e) {
    return mi.call(t, e);
  }function n(t) {
    return gi.test(t);
  }function r(t) {
    var e = (t + "").charCodeAt(0);return 36 === e || 95 === e;
  }function s(t) {
    return null == t ? "" : t.toString();
  }function o(t) {
    if ("string" != typeof t) return t;var e = Number(t);return isNaN(e) ? t : e;
  }function a(t) {
    return "true" === t ? !0 : "false" === t ? !1 : t;
  }function h(t) {
    var e = t.charCodeAt(0),
        i = t.charCodeAt(t.length - 1);return e !== i || 34 !== e && 39 !== e ? t : t.slice(1, -1);
  }function l(t) {
    return t.replace(_i, c);
  }function c(t, e) {
    return e ? e.toUpperCase() : "";
  }function u(t) {
    return t.replace(yi, "$1-$2").toLowerCase();
  }function f(t) {
    return t.replace(bi, c);
  }function p(t, e) {
    return function (i) {
      var n = arguments.length;return n ? n > 1 ? t.apply(e, arguments) : t.call(e, i) : t.call(e);
    };
  }function d(t, e) {
    e = e || 0;for (var i = t.length - e, n = new Array(i); i--;) {
      n[i] = t[i + e];
    }return n;
  }function v(t, e) {
    for (var i = Object.keys(e), n = i.length; n--;) {
      t[i[n]] = e[i[n]];
    }return t;
  }function m(t) {
    return null !== t && "object" == (typeof t === "undefined" ? "undefined" : babelHelpers.typeof(t));
  }function g(t) {
    return Ci.call(t) === wi;
  }function _(t, e, i, n) {
    Object.defineProperty(t, e, { value: i, enumerable: !!n, writable: !0, configurable: !0 });
  }function y(t, e) {
    var i,
        n,
        r,
        s,
        o,
        a = function h() {
      var a = Date.now() - s;e > a && a >= 0 ? i = setTimeout(h, e - a) : (i = null, o = t.apply(r, n), i || (r = n = null));
    };return function () {
      return r = this, n = arguments, s = Date.now(), i || (i = setTimeout(a, e)), o;
    };
  }function b(t, e) {
    for (var i = t.length; i--;) {
      if (t[i] === e) return i;
    }return -1;
  }function C(t) {
    var e = function i() {
      return i.cancelled ? void 0 : t.apply(this, arguments);
    };return e.cancel = function () {
      e.cancelled = !0;
    }, e;
  }function w(t, e) {
    return t == e || (m(t) && m(e) ? JSON.stringify(t) === JSON.stringify(e) : !1);
  }function $(t) {
    this.size = 0, this.limit = t, this.head = this.tail = void 0, this._keymap = Object.create(null);
  }function k() {
    var t,
        e = Hi.slice(zi, Mi).trim();if (e) {
      t = {};var i = e.match(Ki);t.name = i[0], i.length > 1 && (t.args = i.slice(1).map(x));
    }t && (Li.filters = Li.filters || []).push(t), zi = Mi + 1;
  }function x(t) {
    if (Zi.test(t)) return { value: o(t), dynamic: !1 };var e = h(t),
        i = e === t;return { value: i ? t : e, dynamic: i };
  }function A(t) {
    var e = Gi.get(t);if (e) return e;for (Hi = t, Ii = Ui = !1, qi = Ji = Qi = 0, zi = 0, Li = {}, Mi = 0, Wi = Hi.length; Wi > Mi; Mi++) {
      if (Bi = Vi, Vi = Hi.charCodeAt(Mi), Ii) 39 === Vi && 92 !== Bi && (Ii = !Ii);else if (Ui) 34 === Vi && 92 !== Bi && (Ui = !Ui);else if (124 === Vi && 124 !== Hi.charCodeAt(Mi + 1) && 124 !== Hi.charCodeAt(Mi - 1)) null == Li.expression ? (zi = Mi + 1, Li.expression = Hi.slice(0, Mi).trim()) : k();else switch (Vi) {case 34:
          Ui = !0;break;case 39:
          Ii = !0;break;case 40:
          Qi++;break;case 41:
          Qi--;break;case 91:
          Ji++;break;case 93:
          Ji--;break;case 123:
          qi++;break;case 125:
          qi--;}
    }return null == Li.expression ? Li.expression = Hi.slice(0, Mi).trim() : 0 !== zi && k(), Gi.put(t, Li), Li;
  }function O(t) {
    return t.replace(Yi, "\\$&");
  }function N() {
    var t = O(hn.delimiters[0]),
        e = O(hn.delimiters[1]),
        i = O(hn.unsafeDelimiters[0]),
        n = O(hn.unsafeDelimiters[1]);en = new RegExp(i + "(.+?)" + n + "|" + t + "(.+?)" + e, "g"), nn = new RegExp("^" + i + ".*" + n + "$"), tn = new $(1e3);
  }function T(t) {
    tn || N();var e = tn.get(t);if (e) return e;if (t = t.replace(/\n/g, ""), !en.test(t)) return null;for (var i, n, r, s, o, a, h = [], l = en.lastIndex = 0; i = en.exec(t);) {
      n = i.index, n > l && h.push({ value: t.slice(l, n) }), r = nn.test(i[0]), s = r ? i[1] : i[2], o = s.charCodeAt(0), a = 42 === o, s = a ? s.slice(1) : s, h.push({ tag: !0, value: s.trim(), html: r, oneTime: a }), l = n + i[0].length;
    }return l < t.length && h.push({ value: t.slice(l) }), tn.put(t, h), h;
  }function j(t, e) {
    return t.length > 1 ? t.map(function (t) {
      return E(t, e);
    }).join("+") : E(t[0], e, !0);
  }function E(t, e, i) {
    return t.tag ? t.oneTime && e ? '"' + e.$eval(t.value) + '"' : F(t.value, i) : '"' + t.value + '"';
  }function F(t, e) {
    if (rn.test(t)) {
      var i = A(t);return i.filters ? "this._applyFilters(" + i.expression + ",null," + JSON.stringify(i.filters) + ",false)" : "(" + t + ")";
    }return e ? t : "(" + t + ")";
  }function S(t, e, i, n) {
    R(t, 1, function () {
      e.appendChild(t);
    }, i, n);
  }function P(t, e, i, n) {
    R(t, 1, function () {
      W(t, e);
    }, i, n);
  }function D(t, e, i) {
    R(t, -1, function () {
      I(t);
    }, e, i);
  }function R(t, e, i, n, r) {
    var s = t.__v_trans;if (!s || !s.hooks && !ji || !n._isCompiled || n.$parent && !n.$parent._isCompiled) return i(), void (r && r());var o = e > 0 ? "enter" : "leave";s[o](i, r);
  }function H(t) {
    if ("string" == typeof t) {
      t = document.querySelector(t);
    }return t;
  }function L(t) {
    var e = document.documentElement,
        i = t && t.parentNode;return e === t || e === i || !(!i || 1 !== i.nodeType || !e.contains(i));
  }function V(t, e) {
    var i = t.getAttribute(e);return null !== i && t.removeAttribute(e), i;
  }function B(t, e) {
    var i = V(t, ":" + e);return null === i && (i = V(t, "v-bind:" + e)), i;
  }function M(t, e) {
    return t.hasAttribute(e) || t.hasAttribute(":" + e) || t.hasAttribute("v-bind:" + e);
  }function W(t, e) {
    e.parentNode.insertBefore(t, e);
  }function z(t, e) {
    e.nextSibling ? W(t, e.nextSibling) : e.parentNode.appendChild(t);
  }function I(t) {
    t.parentNode.removeChild(t);
  }function U(t, e) {
    e.firstChild ? W(t, e.firstChild) : e.appendChild(t);
  }function q(t, e) {
    var i = t.parentNode;i && i.replaceChild(e, t);
  }function J(t, e, i, n) {
    t.addEventListener(e, i, n);
  }function Q(t, e, i) {
    t.removeEventListener(e, i);
  }function G(t, e) {
    !Oi || t instanceof SVGElement ? t.setAttribute("class", e) : t.className = e;
  }function K(t, e) {
    if (t.classList) t.classList.add(e);else {
      var i = " " + (t.getAttribute("class") || "") + " ";i.indexOf(" " + e + " ") < 0 && G(t, (i + e).trim());
    }
  }function Z(t, e) {
    if (t.classList) t.classList.remove(e);else {
      for (var i = " " + (t.getAttribute("class") || "") + " ", n = " " + e + " "; i.indexOf(n) >= 0;) {
        i = i.replace(n, " ");
      }G(t, i.trim());
    }t.className || t.removeAttribute("class");
  }function X(t, e) {
    var i, n;if (et(t) && t.content instanceof DocumentFragment && (t = t.content), t.hasChildNodes()) for (Y(t), n = e ? document.createDocumentFragment() : document.createElement("div"); i = t.firstChild;) {
      n.appendChild(i);
    }return n;
  }function Y(t) {
    for (var e; e = t.firstChild, tt(e);) {
      t.removeChild(e);
    }for (; e = t.lastChild, tt(e);) {
      t.removeChild(e);
    }
  }function tt(t) {
    return t && (3 === t.nodeType && !t.data.trim() || 8 === t.nodeType);
  }function et(t) {
    return t.tagName && "template" === t.tagName.toLowerCase();
  }function it(t, e) {
    var i = hn.debug ? document.createComment(t) : document.createTextNode(e ? " " : "");return i.__vue_anchor = !0, i;
  }function nt(t) {
    if (t.hasAttributes()) for (var e = t.attributes, i = 0, n = e.length; n > i; i++) {
      var r = e[i].name;if (cn.test(r)) return l(r.replace(cn, ""));
    }
  }function rt(t, e, i) {
    for (var n; t !== e;) {
      n = t.nextSibling, i(t), t = n;
    }i(e);
  }function st(t, e, i, n, r) {
    function s() {
      if (a++, o && a >= h.length) {
        for (var t = 0; t < h.length; t++) {
          n.appendChild(h[t]);
        }r && r();
      }
    }var o = !1,
        a = 0,
        h = [];rt(t, e, function (t) {
      t === e && (o = !0), h.push(t), D(t, i, s);
    });
  }function ot(t, e) {
    var i = t.tagName.toLowerCase(),
        n = t.hasAttributes();if (un.test(i) || fn.test(i)) {
      if (n) return at(t);
    } else {
      if (gt(e, "components", i)) return { id: i };var r = n && at(t);if (r) return r;
    }
  }function at(t) {
    var e = V(t, "is");return null != e ? { id: e } : (e = B(t, "is"), null != e ? { id: e, dynamic: !0 } : void 0);
  }function ht(t, e, i) {
    var n = e.path;i = ct(e, i), t[n] = t._data[n] = lt(e, i) ? i : void 0;
  }function lt(t, e) {
    if (null === t.raw && !t.required) return !0;var i,
        n = t.options,
        r = n.type,
        s = !0;if (r && (r === String ? (i = "string", s = (typeof e === "undefined" ? "undefined" : babelHelpers.typeof(e)) === i) : r === Number ? (i = "number", s = "number" == typeof e) : r === Boolean ? (i = "boolean", s = "boolean" == typeof e) : r === Function ? (i = "function", s = "function" == typeof e) : r === Object ? (i = "object", s = g(e)) : r === Array ? (i = "array", s = $i(e)) : s = e instanceof r), !s) return !1;var o = n.validator;return o && !o.call(null, e) ? !1 : !0;
  }function ct(t, e) {
    var i = t.options.coerce;return i ? i(e) : e;
  }function ut(e, n) {
    var r, s, o;for (r in n) {
      s = e[r], o = n[r], i(e, r) ? m(s) && m(o) && ut(s, o) : t(e, r, o);
    }return e;
  }function ft(t, e) {
    var i = Object.create(t);return e ? v(i, vt(e)) : i;
  }function pt(t) {
    if (t.components) for (var e, i = t.components = vt(t.components), n = Object.keys(i), r = 0, s = n.length; s > r; r++) {
      var o = n[r];un.test(o) || fn.test(o) || (e = i[o], g(e) && (i[o] = ci.extend(e)));
    }
  }function dt(t) {
    var e,
        i,
        n = t.props;if ($i(n)) for (t.props = {}, e = n.length; e--;) {
      i = n[e], "string" == typeof i ? t.props[i] = null : i.name && (t.props[i.name] = i);
    } else if (g(n)) {
      var r = Object.keys(n);for (e = r.length; e--;) {
        i = n[r[e]], "function" == typeof i && (n[r[e]] = { type: i });
      }
    }
  }function vt(t) {
    if ($i(t)) {
      for (var e, i = {}, n = t.length; n--;) {
        e = t[n];var r = "function" == typeof e ? e.options && e.options.name || e.id : e.name || e.id;r && (i[r] = e);
      }return i;
    }return t;
  }function mt(t, e, n) {
    function r(i) {
      var r = pn[i] || dn;o[i] = r(t[i], e[i], n, i);
    }pt(e), dt(e);var s,
        o = {};if (e.mixins) for (var a = 0, h = e.mixins.length; h > a; a++) {
      t = mt(t, e.mixins[a], n);
    }for (s in t) {
      r(s);
    }for (s in e) {
      i(t, s) || r(s);
    }return o;
  }function gt(t, e, i) {
    if ("string" == typeof i) {
      var n,
          r = t[e];return r[i] || r[n = l(i)] || r[n.charAt(0).toUpperCase() + n.slice(1)];
    }
  }function _t(t, e, i) {}function yt() {
    this.id = gn++, this.subs = [];
  }function bt(t) {
    if (this.value = t, this.dep = new yt(), _(t, "__ob__", this), $i(t)) {
      var e = ki ? Ct : wt;e(t, mn, _n), this.observeArray(t);
    } else this.walk(t);
  }function Ct(t, e) {
    t.__proto__ = e;
  }function wt(t, e, i) {
    for (var n = 0, r = i.length; r > n; n++) {
      var s = i[n];_(t, s, e[s]);
    }
  }function $t(t, e) {
    if (t && "object" == (typeof t === "undefined" ? "undefined" : babelHelpers.typeof(t))) {
      var n;return i(t, "__ob__") && t.__ob__ instanceof bt ? n = t.__ob__ : ($i(t) || g(t)) && Object.isExtensible(t) && !t._isVue && (n = new bt(t)), n && e && n.addVm(e), n;
    }
  }function kt(t, e, i) {
    var n,
        r,
        s = new yt();if (hn.convertAllProperties) {
      var o = Object.getOwnPropertyDescriptor(t, e);if (o && o.configurable === !1) return;n = o && o.get, r = o && o.set;
    }var a = $t(i);Object.defineProperty(t, e, { enumerable: !0, configurable: !0, get: function get() {
        var e = n ? n.call(t) : i;if (yt.target && (s.depend(), a && a.dep.depend(), $i(e))) for (var r, o = 0, h = e.length; h > o; o++) {
          r = e[o], r && r.__ob__ && r.__ob__.dep.depend();
        }return e;
      }, set: function set(e) {
        var o = n ? n.call(t) : i;e !== o && (r ? r.call(t, e) : i = e, a = $t(e), s.notify());
      } });
  }function xt(t) {
    t.prototype._init = function (t) {
      t = t || {}, this.$el = null, this.$parent = t.parent, this.$root = this.$parent ? this.$parent.$root : this, this.$children = [], this.$refs = {}, this.$els = {}, this._watchers = [], this._directives = [], this._uid = bn++, this._isVue = !0, this._events = {}, this._eventsCount = {}, this._isFragment = !1, this._fragment = this._fragmentStart = this._fragmentEnd = null, this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = !1, this._unlinkFn = null, this._context = t._context || this.$parent, this._scope = t._scope, this._frag = t._frag, this._frag && this._frag.children.push(this), this.$parent && this.$parent.$children.push(this), t = this.$options = mt(this.constructor.options, t, this), this._updateRef(), this._data = {}, this._callHook("init"), this._initState(), this._initEvents(), this._callHook("created"), t.el && this.$mount(t.el);
    };
  }function At(t) {
    if (void 0 === t) return "eof";var e = t.charCodeAt(0);switch (e) {case 91:case 93:case 46:case 34:case 39:case 48:
        return t;case 95:case 36:
        return "ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:
        return "ws";}return e >= 97 && 122 >= e || e >= 65 && 90 >= e ? "ident" : e >= 49 && 57 >= e ? "number" : "else";
  }function Ot(t) {
    var e = t.trim();return "0" === t.charAt(0) && isNaN(t) ? !1 : n(e) ? h(e) : "*" + e;
  }function Nt(t) {
    function e() {
      var e = t[c + 1];return u === En && "'" === e || u === Fn && '"' === e ? (c++, n = "\\" + e, p[wn](), !0) : void 0;
    }var i,
        n,
        r,
        s,
        o,
        a,
        h,
        l = [],
        c = -1,
        u = An,
        f = 0,
        p = [];for (p[$n] = function () {
      void 0 !== r && (l.push(r), r = void 0);
    }, p[wn] = function () {
      void 0 === r ? r = n : r += n;
    }, p[kn] = function () {
      p[wn](), f++;
    }, p[xn] = function () {
      if (f > 0) f--, u = jn, p[wn]();else {
        if (f = 0, r = Ot(r), r === !1) return !1;p[$n]();
      }
    }; null != u;) {
      if (c++, i = t[c], "\\" !== i || !e()) {
        if (s = At(i), h = Dn[u], o = h[s] || h["else"] || Pn, o === Pn) return;if (u = o[0], a = p[o[1]], a && (n = o[2], n = void 0 === n ? i : n, a() === !1)) return;if (u === Sn) return l.raw = t, l;
      }
    }
  }function Tt(t) {
    var e = Cn.get(t);return e || (e = Nt(t), e && Cn.put(t, e)), e;
  }function jt(t, e) {
    return Lt(e).get(t);
  }function Et(e, i, n) {
    var r = e;if ("string" == typeof i && (i = Nt(i)), !i || !m(e)) return !1;for (var s, o, a = 0, h = i.length; h > a; a++) {
      s = e, o = i[a], "*" === o.charAt(0) && (o = Lt(o.slice(1)).get.call(r, r)), h - 1 > a ? (e = e[o], m(e) || (e = {}, t(s, o, e))) : $i(e) ? e.$set(o, n) : o in e ? e[o] = n : t(e, o, n);
    }return !0;
  }function Ft(t, e) {
    var i = Gn.length;return Gn[i] = e ? t.replace(zn, "\\n") : t, '"' + i + '"';
  }function St(t) {
    var e = t.charAt(0),
        i = t.slice(1);return Vn.test(i) ? t : (i = i.indexOf('"') > -1 ? i.replace(Un, Pt) : i, e + "scope." + i);
  }function Pt(t, e) {
    return Gn[e];
  }function Dt(t) {
    Mn.test(t), Gn.length = 0;var e = t.replace(In, Ft).replace(Wn, "");return e = (" " + e).replace(Jn, St).replace(Un, Pt), Rt(e);
  }function Rt(t) {
    try {
      return new Function("scope", "return " + t + ";");
    } catch (e) {}
  }function Ht(t) {
    var e = Tt(t);return e ? function (t, i) {
      Et(t, e, i);
    } : void 0;
  }function Lt(t, e) {
    t = t.trim();var i = Hn.get(t);if (i) return e && !i.set && (i.set = Ht(i.exp)), i;var n = { exp: t };return n.get = Vt(t) && t.indexOf("[") < 0 ? Rt("scope." + t) : Dt(t), e && (n.set = Ht(t)), Hn.put(t, n), n;
  }function Vt(t) {
    return qn.test(t) && !Qn.test(t) && "Math." !== t.slice(0, 5);
  }function Bt() {
    Zn = [], Xn = [], Yn = {}, tr = {}, er = ir = !1;
  }function Mt() {
    Wt(Zn), ir = !0, Wt(Xn), Ai && Ai.emit("flush"), Bt();
  }function Wt(t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e],
          n = i.id;Yn[n] = null, i.run();
    }
  }function zt(t) {
    var e = t.id;if (null == Yn[e]) {
      if (ir && !t.user) return void t.run();var i = t.user ? Xn : Zn;Yn[e] = i.length, i.push(t), er || (er = !0, Di(Mt));
    }
  }function It(t, e, i, n) {
    n && v(this, n);var r = "function" == typeof e;if (this.vm = t, t._watchers.push(this), this.expression = r ? e.toString() : e, this.cb = i, this.id = ++nr, this.active = !0, this.dirty = this.lazy, this.deps = Object.create(null), this.newDeps = null, this.prevError = null, r) this.getter = e, this.setter = void 0;else {
      var s = Lt(e, this.twoWay);this.getter = s.get, this.setter = s.set;
    }this.value = this.lazy ? void 0 : this.get(), this.queued = this.shallow = !1;
  }function Ut(t) {
    var e, i;if ($i(t)) for (e = t.length; e--;) {
      Ut(t[e]);
    } else if (m(t)) for (i = Object.keys(t), e = i.length; e--;) {
      Ut(t[i[e]]);
    }
  }function qt(t) {
    if (br[t]) return br[t];var e = Jt(t);return br[t] = br[e] = e, e;
  }function Jt(t) {
    t = u(t);var e = l(t),
        i = e.charAt(0).toUpperCase() + e.slice(1);Cr || (Cr = document.createElement("div"));for (var n, r = gr.length; r--;) {
      if (n = _r[r] + i, n in Cr.style) return gr[r] + t;
    }return e in Cr.style ? t : void 0;
  }function Qt(t, e) {
    var i = e.map(function (t) {
      var e = t.charCodeAt(0);return e > 47 && 58 > e ? parseInt(t, 10) : 1 === t.length && (e = t.toUpperCase().charCodeAt(0), e > 64 && 91 > e) ? e : Tr[t];
    });return i = [].concat.apply([], i), function (e) {
      return i.indexOf(e.keyCode) > -1 ? t.call(this, e) : void 0;
    };
  }function Gt(t) {
    return function (e) {
      return e.stopPropagation(), t.call(this, e);
    };
  }function Kt(t) {
    return function (e) {
      return e.preventDefault(), t.call(this, e);
    };
  }function Zt(t) {
    return function (e) {
      return e.target === e.currentTarget ? t.call(this, e) : void 0;
    };
  }function Xt(t, e, i) {
    for (var n, r, s, o = e ? [] : null, a = 0, h = t.options.length; h > a; a++) {
      if (n = t.options[a], s = i ? n.hasAttribute("selected") : n.selected) {
        if (r = n.hasOwnProperty("_value") ? n._value : n.value, !e) return r;o.push(r);
      }
    }return o;
  }function Yt(t, e) {
    for (var i = t.length; i--;) {
      if (w(t[i], e)) return i;
    }return -1;
  }function te(t) {
    return et(t) && t.content instanceof DocumentFragment;
  }function ee(t, e) {
    var i = e ? t : t.trim(),
        n = Lr.get(i);if (n) return n;var r = document.createDocumentFragment(),
        s = t.match(Mr),
        o = Wr.test(t);if (s || o) {
      var a = s && s[1],
          h = Br[a] || Br.efault,
          l = h[0],
          c = h[1],
          u = h[2],
          f = document.createElement("div");for (f.innerHTML = c + t + u; l--;) {
        f = f.lastChild;
      }for (var p; p = f.firstChild;) {
        r.appendChild(p);
      }
    } else r.appendChild(document.createTextNode(t));return e || Y(r), Lr.put(i, r), r;
  }function ie(t) {
    if (te(t)) return Y(t.content), t.content;if ("SCRIPT" === t.tagName) return ee(t.textContent);for (var e, i = ne(t), n = document.createDocumentFragment(); e = i.firstChild;) {
      n.appendChild(e);
    }return Y(n), n;
  }function ne(t) {
    if (!t.querySelectorAll) return t.cloneNode();var e,
        i,
        n,
        r = t.cloneNode(!0);if (zr) {
      var s = r;if (te(t) && (t = t.content, s = r.content), i = t.querySelectorAll("template"), i.length) for (n = s.querySelectorAll("template"), e = n.length; e--;) {
        n[e].parentNode.replaceChild(ne(i[e]), n[e]);
      }
    }if (Ir) if ("TEXTAREA" === t.tagName) r.value = t.value;else if (i = t.querySelectorAll("textarea"), i.length) for (n = r.querySelectorAll("textarea"), e = n.length; e--;) {
      n[e].value = i[e].value;
    }return r;
  }function re(t, e, i) {
    var n, r;return t instanceof DocumentFragment ? (Y(t), e ? ne(t) : t) : ("string" == typeof t ? i || "#" !== t.charAt(0) ? r = ee(t, i) : (r = Vr.get(t), r || (n = document.getElementById(t.slice(1)), n && (r = ie(n), Vr.put(t, r)))) : t.nodeType && (r = ie(t)), r && e ? ne(r) : r);
  }function se(t, e, i, n, r, s) {
    this.children = [], this.childFrags = [], this.vm = e, this.scope = r, this.inserted = !1, this.parentFrag = s, s && s.childFrags.push(this), this.unlink = t(e, i, n, r, this);var o = this.single = 1 === i.childNodes.length && !i.childNodes[0].__vue_anchor;o ? (this.node = i.childNodes[0], this.before = oe, this.remove = ae) : (this.node = it("fragment-start"), this.end = it("fragment-end"), this.frag = i, U(this.node, i), i.appendChild(this.end), this.before = he, this.remove = le), this.node.__vfrag__ = this;
  }function oe(t, e) {
    this.inserted = !0;var i = e !== !1 ? P : W;i(this.node, t, this.vm), L(this.node) && this.callHook(ce);
  }function ae() {
    this.inserted = !1;var t = L(this.node),
        e = this;this.beforeRemove(), D(this.node, this.vm, function () {
      t && e.callHook(ue), e.destroy();
    });
  }function he(t, e) {
    this.inserted = !0;var i = this.vm,
        n = e !== !1 ? P : W;rt(this.node, this.end, function (e) {
      n(e, t, i);
    }), L(this.node) && this.callHook(ce);
  }function le() {
    this.inserted = !1;var t = this,
        e = L(this.node);this.beforeRemove(), st(this.node, this.end, this.vm, this.frag, function () {
      e && t.callHook(ue), t.destroy();
    });
  }function ce(t) {
    t._isAttached || t._callHook("attached");
  }function ue(t) {
    t._isAttached && t._callHook("detached");
  }function fe(t, e) {
    this.vm = t;var i,
        n = "string" == typeof e;n || et(e) ? i = re(e, !0) : (i = document.createDocumentFragment(), i.appendChild(e)), this.template = i;var r,
        s = t.constructor.cid;if (s > 0) {
      var o = s + (n ? e : e.outerHTML);r = qr.get(o), r || (r = xe(i, t.$options, !0), qr.put(o, r));
    } else r = xe(i, t.$options, !0);this.linker = r;
  }function pe(t, e, i) {
    var n = t.node.previousSibling;if (n) {
      for (t = n.__vfrag__; !(t && t.forId === i && t.inserted || n === e);) {
        if (n = n.previousSibling, !n) return;t = n.__vfrag__;
      }return t;
    }
  }function de(t) {
    var e = t.node;if (t.end) for (; !e.__vue__ && e !== t.end && e.nextSibling;) {
      e = e.nextSibling;
    }return e.__vue__;
  }function ve(t) {
    for (var e = -1, i = new Array(Math.floor(t)); ++e < t;) {
      i[e] = e;
    }return i;
  }function me(t) {
    Yr.push(t), ts || (ts = !0, Di(ge));
  }function ge() {
    for (var t = document.documentElement.offsetHeight, e = 0; e < Yr.length; e++) {
      Yr[e]();
    }return Yr = [], ts = !1, t;
  }function _e(t, e, i, n) {
    this.id = e, this.el = t, this.enterClass = i && i.enterClass || e + "-enter", this.leaveClass = i && i.leaveClass || e + "-leave", this.hooks = i, this.vm = n, this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null, this.justEntered = !1, this.entered = this.left = !1, this.typeCache = {}, this.type = i && i.type;var r = this;["enterNextTick", "enterDone", "leaveNextTick", "leaveDone"].forEach(function (t) {
      r[t] = p(r[t], r);
    });
  }function ye(t) {
    return !(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
  }function be(t) {
    for (var e = {}, i = t.trim().split(/\s+/), n = i.length; n--;) {
      e[i[n]] = !0;
    }return e;
  }function Ce(t, e) {
    return $i(t) ? t.indexOf(e) > -1 : i(t, e);
  }function we(t, e) {
    for (var i, r, s, o, a, h, c, f = [], p = Object.keys(e), d = p.length; d--;) {
      r = p[d], i = e[r] || ps, a = l(r), ds.test(a) && (c = { name: r, path: a, options: i, mode: fs.ONE_WAY, raw: null }, s = u(r), null === (o = B(t, s)) && (null !== (o = B(t, s + ".sync")) ? c.mode = fs.TWO_WAY : null !== (o = B(t, s + ".once")) && (c.mode = fs.ONE_TIME)), null !== o ? (c.raw = o, h = A(o), o = h.expression, c.filters = h.filters, n(o) && !h.filters ? c.optimizedLiteral = !0 : c.dynamic = !0, c.parentPath = o) : null !== (o = V(t, s)) ? c.raw = o : i.required, f.push(c));
    }return $e(f);
  }function $e(t) {
    return function (e, i) {
      e._props = {};for (var n, r, s, l, c, u = t.length; u--;) {
        if (n = t[u], c = n.raw, r = n.path, s = n.options, e._props[r] = n, null === c) ht(e, n, ke(e, s));else if (n.dynamic) e._context && (n.mode === fs.ONE_TIME ? (l = (i || e._context).$get(n.parentPath), ht(e, n, l)) : e._bindDir({ name: "prop", def: hs, prop: n }, null, null, i));else if (n.optimizedLiteral) {
          var f = h(c);l = f === c ? a(o(c)) : f, ht(e, n, l);
        } else l = s.type === Boolean && "" === c ? !0 : c, ht(e, n, l);
      }
    };
  }function ke(t, e) {
    if (!i(e, "default")) return e.type === Boolean ? !1 : void 0;var n = e["default"];return m(n), "function" == typeof n && e.type !== Function ? n.call(t) : n;
  }function xe(t, e, i) {
    var n = i || !e._asComponent ? Fe(t, e) : null,
        r = n && n.terminal || "SCRIPT" === t.tagName || !t.hasChildNodes() ? null : Le(t.childNodes, e);return function (t, e, i, s, o) {
      var a = d(e.childNodes),
          h = Ae(function () {
        n && n(t, e, i, s, o), r && r(t, a, i, s, o);
      }, t);return Ne(t, h);
    };
  }function Ae(t, e) {
    e._directives = [];var i = e._directives.length;t();var n = e._directives.slice(i);n.sort(Oe);for (var r = 0, s = n.length; s > r; r++) {
      n[r]._bind();
    }return n;
  }function Oe(t, e) {
    return t = t.descriptor.def.priority || Cs, e = e.descriptor.def.priority || Cs, t > e ? -1 : t === e ? 0 : 1;
  }function Ne(t, e, i, n) {
    function r(r) {
      Te(t, e, r), i && n && Te(i, n);
    }return r.dirs = e, r;
  }function Te(t, e, i) {
    for (var n = e.length; n--;) {
      e[n]._teardown();
    }
  }function je(t, e, i, n) {
    var r = we(e, i),
        s = Ae(function () {
      r(t, n);
    }, t);return Ne(t, s);
  }function Ee(t, e, i) {
    var n,
        r,
        s = e._containerAttrs,
        o = e._replacerAttrs;return 11 !== t.nodeType && (e._asComponent ? (s && i && (n = Ue(s, i)), o && (r = Ue(o, e))) : r = Ue(t.attributes, e)), e._containerAttrs = e._replacerAttrs = null, function (t, e, i) {
      var s,
          o = t._context;o && n && (s = Ae(function () {
        n(o, e, null, i);
      }, o));var a = Ae(function () {
        r && r(t, e);
      }, t);return Ne(t, a, o, s);
    };
  }function Fe(t, e) {
    var i = t.nodeType;return 1 === i && "SCRIPT" !== t.tagName ? Se(t, e) : 3 === i && t.data.trim() ? Pe(t, e) : null;
  }function Se(t, e) {
    if ("TEXTAREA" === t.tagName) {
      var i = T(t.value);i && (t.setAttribute(":value", j(i)), t.value = "");
    }var n,
        r = t.hasAttributes();return r && (n = We(t, e)), n || (n = Be(t, e)), n || (n = Me(t, e)), !n && r && (n = Ue(t.attributes, e)), n;
  }function Pe(t, e) {
    if (t._skip) return De;var i = T(t.wholeText);if (!i) return null;for (var n = t.nextSibling; n && 3 === n.nodeType;) {
      n._skip = !0, n = n.nextSibling;
    }for (var r, s, o = document.createDocumentFragment(), a = 0, h = i.length; h > a; a++) {
      s = i[a], r = s.tag ? Re(s, e) : document.createTextNode(s.value), o.appendChild(r);
    }return He(i, o, e);
  }function De(t, e) {
    I(e);
  }function Re(t, e) {
    function i(e) {
      if (!t.descriptor) {
        var i = A(t.value);t.descriptor = { name: e, def: Xr[e], expression: i.expression, filters: i.filters };
      }
    }var n;return t.oneTime ? n = document.createTextNode(t.value) : t.html ? (n = document.createComment("v-html"), i("html")) : (n = document.createTextNode(" "), i("text")), n;
  }function He(t, e) {
    return function (i, n, r, s) {
      for (var o, a, h, l = e.cloneNode(!0), c = d(l.childNodes), u = 0, f = t.length; f > u; u++) {
        o = t[u], a = o.value, o.tag && (h = c[u], o.oneTime ? (a = (s || i).$eval(a), o.html ? q(h, re(a, !0)) : h.data = a) : i._bindDir(o.descriptor, h, r, s));
      }q(n, l);
    };
  }function Le(t, e) {
    for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++) {
      r = t[o], i = Fe(r, e), n = i && i.terminal || "SCRIPT" === r.tagName || !r.hasChildNodes() ? null : Le(r.childNodes, e), s.push(i, n);
    }return s.length ? Ve(s) : null;
  }function Ve(t) {
    return function (e, i, n, r, s) {
      for (var o, a, h, l = 0, c = 0, u = t.length; u > l; c++) {
        o = i[c], a = t[l++], h = t[l++];var f = d(o.childNodes);a && a(e, o, n, r, s), h && h(e, f, n, r, s);
      }
    };
  }function Be(t, e) {
    var i = t.tagName.toLowerCase();if (!un.test(i)) {
      "slot" === i && M(t, "name") && (i = "_namedSlot");var n = gt(e, "elementDirectives", i);return n ? Ie(t, i, "", e, n) : void 0;
    }
  }function Me(t, e) {
    var i = ot(t, e);if (i) {
      var n = nt(t),
          r = { name: "component", ref: n, expression: i.id, def: us.component, modifiers: { literal: !i.dynamic } },
          s = function s(t, e, i, _s2, o) {
        n && kt((_s2 || t).$refs, n, null), t._bindDir(r, e, i, _s2, o);
      };return s.terminal = !0, s;
    }
  }function We(t, e) {
    if (null !== V(t, "v-pre")) return ze;if (t.hasAttribute("v-else")) {
      var i = t.previousElementSibling;if (i && i.hasAttribute("v-if")) return ze;
    }for (var n, r, s = 0, o = bs.length; o > s; s++) {
      if (r = bs[s], n = t.getAttribute("v-" + r), null != n) return Ie(t, r, n, e);
    }
  }function ze() {}function Ie(t, e, i, n, r) {
    var s = A(i),
        o = { name: e, expression: s.expression, filters: s.filters, raw: i, def: r || Xr[e] };("for" === e || "router-view" === e) && (o.ref = nt(t));var a = function a(t, e, i, n, r) {
      o.ref && kt((n || t).$refs, o.ref, null), t._bindDir(o, e, i, n, r);
    };return a.terminal = !0, a;
  }function Ue(t, e) {
    function i(t, e, i) {
      var n = i && Qe(i),
          r = !n && A(s);v.push({ name: t, attr: o, raw: a, def: e, arg: l, modifiers: c, expression: r && r.expression, filters: r && r.filters, interp: i, hasOneTime: n });
    }for (var n, r, s, o, a, h, l, c, u, f, p, d = t.length, v = []; d--;) {
      if (n = t[d], r = o = n.name, s = a = n.value, f = T(s), l = null, c = qe(r), r = r.replace(_s, ""), f) s = j(f), l = r, i("bind", Xr.bind, f);else if (ys.test(r)) c.literal = !vs.test(r), i("transition", us.transition);else if (ms.test(r)) l = r.replace(ms, ""), i("on", Xr.on);else if (vs.test(r)) h = r.replace(vs, ""), "style" === h || "class" === h ? i(h, us[h]) : (l = h, i("bind", Xr.bind));else if (p = r.match(gs)) {
        if (h = p[1], l = p[2], "else" === h) continue;u = gt(e, "directives", h), u && i(h, u);
      }
    }return v.length ? Je(v) : void 0;
  }function qe(t) {
    var e = Object.create(null),
        i = t.match(_s);if (i) for (var n = i.length; n--;) {
      e[i[n].slice(1)] = !0;
    }return e;
  }function Je(t) {
    return function (e, i, n, r, s) {
      for (var o = t.length; o--;) {
        e._bindDir(t[o], i, n, r, s);
      }
    };
  }function Qe(t) {
    for (var e = t.length; e--;) {
      if (t[e].oneTime) return !0;
    }
  }function Ge(t, e) {
    return e && (e._containerAttrs = Ze(t)), et(t) && (t = re(t)), e && (e._asComponent && !e.template && (e.template = "<slot></slot>"), e.template && (e._content = X(t), t = Ke(t, e))), t instanceof DocumentFragment && (U(it("v-start", !0), t), t.appendChild(it("v-end", !0))), t;
  }function Ke(t, e) {
    var i = e.template,
        n = re(i, !0);if (n) {
      var r = n.firstChild,
          s = r.tagName && r.tagName.toLowerCase();return e.replace ? (t === document.body, n.childNodes.length > 1 || 1 !== r.nodeType || "component" === s || gt(e, "components", s) || M(r, "is") || gt(e, "elementDirectives", s) || r.hasAttribute("v-for") || r.hasAttribute("v-if") ? n : (e._replacerAttrs = Ze(r), Xe(t, r), r)) : (t.appendChild(n), t);
    }
  }function Ze(t) {
    return 1 === t.nodeType && t.hasAttributes() ? d(t.attributes) : void 0;
  }function Xe(t, e) {
    for (var i, n, r = t.attributes, s = r.length; s--;) {
      i = r[s].name, n = r[s].value, e.hasAttribute(i) || ws.test(i) ? "class" !== i || T(n) || n.split(/\s+/).forEach(function (t) {
        K(e, t);
      }) : e.setAttribute(i, n);
    }
  }function Ye(e) {
    function n() {}function s(t, e) {
      var i = new It(e, t, null, { lazy: !0 });return function () {
        return i.dirty && i.evaluate(), yt.target && i.depend(), i.value;
      };
    }Object.defineProperty(e.prototype, "$data", { get: function get() {
        return this._data;
      }, set: function set(t) {
        t !== this._data && this._setData(t);
      } }), e.prototype._initState = function () {
      this._initProps(), this._initMeta(), this._initMethods(), this._initData(), this._initComputed();
    }, e.prototype._initProps = function () {
      var t = this.$options,
          e = t.el,
          i = t.props;e = t.el = H(e), this._propsUnlinkFn = e && 1 === e.nodeType && i ? je(this, e, i, this._scope) : null;
    }, e.prototype._initData = function () {
      var e = this._data,
          n = this.$options.data,
          r = n && n();if (r) {
        this._data = r;for (var s in e) {
          null === this._props[s].raw && i(r, s) || t(r, s, e[s]);
        }
      }var o,
          a,
          h = this._data,
          l = Object.keys(h);for (o = l.length; o--;) {
        a = l[o], this._proxy(a);
      }$t(h, this);
    }, e.prototype._setData = function (t) {
      t = t || {};var e = this._data;this._data = t;var n, r, s;for (n = Object.keys(e), s = n.length; s--;) {
        r = n[s], r in t || this._unproxy(r);
      }for (n = Object.keys(t), s = n.length; s--;) {
        r = n[s], i(this, r) || this._proxy(r);
      }e.__ob__.removeVm(this), $t(t, this), this._digest();
    }, e.prototype._proxy = function (t) {
      if (!r(t)) {
        var e = this;Object.defineProperty(e, t, { configurable: !0, enumerable: !0, get: function get() {
            return e._data[t];
          }, set: function set(i) {
            e._data[t] = i;
          } });
      }
    }, e.prototype._unproxy = function (t) {
      r(t) || delete this[t];
    }, e.prototype._digest = function () {
      for (var t = 0, e = this._watchers.length; e > t; t++) {
        this._watchers[t].update(!0);
      }
    }, e.prototype._initComputed = function () {
      var t = this.$options.computed;if (t) for (var e in t) {
        var i = t[e],
            r = { enumerable: !0, configurable: !0 };"function" == typeof i ? (r.get = s(i, this), r.set = n) : (r.get = i.get ? i.cache !== !1 ? s(i.get, this) : p(i.get, this) : n, r.set = i.set ? p(i.set, this) : n), Object.defineProperty(this, e, r);
      }
    }, e.prototype._initMethods = function () {
      var t = this.$options.methods;if (t) for (var e in t) {
        this[e] = p(t[e], this);
      }
    }, e.prototype._initMeta = function () {
      var t = this.$options._meta;if (t) for (var e in t) {
        kt(this, e, t[e]);
      }
    };
  }function ti(t) {
    function e(t, e) {
      for (var i, n, r = e.attributes, s = 0, o = r.length; o > s; s++) {
        i = r[s].name, ks.test(i) && (i = i.replace(ks, ""), n = (t._scope || t._context).$eval(r[s].value, !0), n._fromParent = !0, t.$on(i.replace(ks), n));
      }
    }function i(t, e, i) {
      if (i) {
        var r, s, o, a;for (s in i) {
          if (r = i[s], $i(r)) for (o = 0, a = r.length; a > o; o++) {
            n(t, e, s, r[o]);
          } else n(t, e, s, r);
        }
      }
    }function n(t, e, i, r, s) {
      var o = typeof r === "undefined" ? "undefined" : babelHelpers.typeof(r);if ("function" === o) t[e](i, r, s);else if ("string" === o) {
        var a = t.$options.methods,
            h = a && a[r];h && t[e](i, h, s);
      } else r && "object" === o && n(t, e, i, r.handler, r);
    }function r() {
      this._isAttached || (this._isAttached = !0, this.$children.forEach(s));
    }function s(t) {
      !t._isAttached && L(t.$el) && t._callHook("attached");
    }function o() {
      this._isAttached && (this._isAttached = !1, this.$children.forEach(a));
    }function a(t) {
      t._isAttached && !L(t.$el) && t._callHook("detached");
    }t.prototype._initEvents = function () {
      var t = this.$options;t._asComponent && e(this, t.el), i(this, "$on", t.events), i(this, "$watch", t.watch);
    }, t.prototype._initDOMHooks = function () {
      this.$on("hook:attached", r), this.$on("hook:detached", o);
    }, t.prototype._callHook = function (t) {
      this.$emit("pre-hook:" + t);var e = this.$options[t];if (e) for (var i = 0, n = e.length; n > i; i++) {
        e[i].call(this);
      }this.$emit("hook:" + t);
    };
  }function ei() {}function ii(t, e, i, n, r, s) {
    this.vm = e, this.el = i, this.descriptor = t, this.name = t.name, this.expression = t.expression, this.arg = t.arg, this.modifiers = t.modifiers, this.filters = t.filters, this.literal = this.modifiers && this.modifiers.literal, this._locked = !1, this._bound = !1, this._listeners = null, this._host = n, this._scope = r, this._frag = s;
  }function ni(t) {
    t.prototype._updateRef = function (t) {
      var e = this.$options._ref;if (e) {
        var i = (this._scope || this._context).$refs;t ? i[e] === this && (i[e] = null) : i[e] = this;
      }
    }, t.prototype._compile = function (t) {
      var e = this.$options,
          i = t;if (t = Ge(t, e), this._initElement(t), 1 !== t.nodeType || null === V(t, "v-pre")) {
        var n,
            r = this._context && this._context.$options,
            s = Ee(t, e, r),
            o = this.constructor;e._linkerCachable && (n = o.linker, n || (n = o.linker = xe(t, e)));var a = s(this, t, this._scope),
            h = n ? n(this, t) : xe(t, e)(this, t);this._unlinkFn = function () {
          a(), h(!0);
        }, e.replace && q(i, t), this._isCompiled = !0, this._callHook("compiled");
      }
    }, t.prototype._initElement = function (t) {
      t instanceof DocumentFragment ? (this._isFragment = !0, this.$el = this._fragmentStart = t.firstChild, this._fragmentEnd = t.lastChild, 3 === this._fragmentStart.nodeType && (this._fragmentStart.data = this._fragmentEnd.data = ""), this._fragment = t) : this.$el = t, this.$el.__vue__ = this, this._callHook("beforeCompile");
    }, t.prototype._bindDir = function (t, e, i, n, r) {
      this._directives.push(new ii(t, this, e, i, n, r));
    }, t.prototype._destroy = function (t, e) {
      if (this._isBeingDestroyed) return void (e || this._cleanup());var i,
          n,
          r = this,
          s = function s() {
        !i || n || e || r._cleanup();
      };t && this.$el && (n = !0, this.$remove(function () {
        n = !1, s();
      })), this._callHook("beforeDestroy"), this._isBeingDestroyed = !0;var o,
          a = this.$parent;for (a && !a._isBeingDestroyed && (a.$children.$remove(this), this._updateRef(!0)), o = this.$children.length; o--;) {
        this.$children[o].$destroy();
      }for (this._propsUnlinkFn && this._propsUnlinkFn(), this._unlinkFn && this._unlinkFn(), o = this._watchers.length; o--;) {
        this._watchers[o].teardown();
      }this.$el && (this.$el.__vue__ = null), i = !0, s();
    }, t.prototype._cleanup = function () {
      this._isDestroyed || (this._frag && this._frag.children.$remove(this), this._data.__ob__ && this._data.__ob__.removeVm(this), this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null, this._isDestroyed = !0, this._callHook("destroyed"), this.$off());
    };
  }function ri(t) {
    t.prototype._applyFilters = function (t, e, i, n) {
      var r, s, o, a, h, l, c, u, f;for (l = 0, c = i.length; c > l; l++) {
        if (r = i[l], s = gt(this.$options, "filters", r.name), s && (s = n ? s.write : s.read || s, "function" == typeof s)) {
          if (o = n ? [t, e] : [t], h = n ? 2 : 1, r.args) for (u = 0, f = r.args.length; f > u; u++) {
            a = r.args[u], o[u + h] = a.dynamic ? this.$get(a.value) : a.value;
          }t = s.apply(this, o);
        }
      }return t;
    }, t.prototype._resolveComponent = function (e, i) {
      var n = gt(this.$options, "components", e);if (n) if (n.options) i(n);else if (n.resolved) i(n.resolved);else if (n.requested) n.pendingCallbacks.push(i);else {
        n.requested = !0;var r = n.pendingCallbacks = [i];n(function (e) {
          g(e) && (e = t.extend(e)), n.resolved = e;for (var i = 0, s = r.length; s > i; i++) {
            r[i](e);
          }
        }, function (t) {});
      }
    };
  }function si(i) {
    function n(t) {
      return new Function("return function " + f(t) + " (options) { this._init(options) }")();
    }i.util = yn, i.config = hn, i.set = t, i["delete"] = e, i.nextTick = Di, i.compiler = $s, i.FragmentFactory = fe, i.internalDirectives = us, i.parsers = { path: Rn, text: sn, template: Ur, directive: Xi, expression: Kn }, i.cid = 0;var r = 1;i.extend = function (t) {
      t = t || {};var e = this,
          i = 0 === e.cid;if (i && t._Ctor) return t._Ctor;var s = t.name || e.options.name,
          o = n(s || "VueComponent");return o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.cid = r++, o.options = mt(e.options, t), o["super"] = e, o.extend = e.extend, hn._assetTypes.forEach(function (t) {
        o[t] = e[t];
      }), s && (o.options.components[s] = o), i && (t._Ctor = o), o;
    }, i.use = function (t) {
      if (!t.installed) {
        var e = d(arguments, 1);return e.unshift(this), "function" == typeof t.install ? t.install.apply(t, e) : t.apply(null, e), t.installed = !0, this;
      }
    }, i.mixin = function (t) {
      i.options = mt(i.options, t);
    }, hn._assetTypes.forEach(function (t) {
      i[t] = function (e, n) {
        return n ? ("component" === t && g(n) && (n.name = e, n = i.extend(n)), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
      };
    });
  }function oi(t) {
    function i(t) {
      return JSON.parse(JSON.stringify(t));
    }t.prototype.$get = function (t, e) {
      var i = Lt(t);if (i) {
        if (e && !Vt(t)) {
          var n = this;return function () {
            n.$arguments = d(arguments);var t = i.get.call(n, n);return n.$arguments = null, t;
          };
        }try {
          return i.get.call(this, this);
        } catch (r) {}
      }
    }, t.prototype.$set = function (t, e) {
      var i = Lt(t, !0);i && i.set && i.set.call(this, this, e);
    }, t.prototype.$delete = function (t) {
      e(this._data, t);
    }, t.prototype.$watch = function (t, e, i) {
      var n,
          r = this;"string" == typeof t && (n = A(t), t = n.expression);var s = new It(r, t, e, { deep: i && i.deep, sync: i && i.sync, filters: n && n.filters, user: !i || i.user !== !1 });return i && i.immediate && e.call(r, s.value), function () {
        s.teardown();
      };
    }, t.prototype.$eval = function (t, e) {
      if (xs.test(t)) {
        var i = A(t),
            n = this.$get(i.expression, e);return i.filters ? this._applyFilters(n, null, i.filters) : n;
      }return this.$get(t, e);
    }, t.prototype.$interpolate = function (t) {
      var e = T(t),
          i = this;return e ? 1 === e.length ? i.$eval(e[0].value) + "" : e.map(function (t) {
        return t.tag ? i.$eval(t.value) : t.value;
      }).join("") : t;
    }, t.prototype.$log = function (t) {
      var e = t ? jt(this._data, t) : this._data;if (e && (e = i(e)), !t) for (var n in this.$options.computed) {
        e[n] = i(this[n]);
      }console.log(e);
    };
  }function ai(t) {
    function e(t, e, n, r, s, o) {
      e = i(e);var a = !L(e),
          h = r === !1 || a ? s : o,
          l = !a && !t._isAttached && !L(t.$el);return t._isFragment ? (rt(t._fragmentStart, t._fragmentEnd, function (i) {
        h(i, e, t);
      }), n && n()) : h(t.$el, e, t, n), l && t._callHook("attached"), t;
    }function i(t) {
      return "string" == typeof t ? document.querySelector(t) : t;
    }function n(t, e, i, n) {
      e.appendChild(t), n && n();
    }function r(t, e, i, n) {
      W(t, e), n && n();
    }function s(t, e, i) {
      I(t), i && i();
    }t.prototype.$nextTick = function (t) {
      Di(t, this);
    }, t.prototype.$appendTo = function (t, i, r) {
      return e(this, t, i, r, n, S);
    }, t.prototype.$prependTo = function (t, e, n) {
      return t = i(t), t.hasChildNodes() ? this.$before(t.firstChild, e, n) : this.$appendTo(t, e, n), this;
    }, t.prototype.$before = function (t, i, n) {
      return e(this, t, i, n, r, P);
    }, t.prototype.$after = function (t, e, n) {
      return t = i(t), t.nextSibling ? this.$before(t.nextSibling, e, n) : this.$appendTo(t.parentNode, e, n), this;
    }, t.prototype.$remove = function (t, e) {
      if (!this.$el.parentNode) return t && t();var i = this._isAttached && L(this.$el);i || (e = !1);var n = this,
          r = function r() {
        i && n._callHook("detached"), t && t();
      };if (this._isFragment) st(this._fragmentStart, this._fragmentEnd, this, this._fragment, r);else {
        var o = e === !1 ? s : D;o(this.$el, this, r);
      }return this;
    };
  }function hi(t) {
    function e(t, e, n) {
      var r = t.$parent;if (r && n && !i.test(e)) for (; r;) {
        r._eventsCount[e] = (r._eventsCount[e] || 0) + n, r = r.$parent;
      }
    }t.prototype.$on = function (t, i) {
      return (this._events[t] || (this._events[t] = [])).push(i), e(this, t, 1), this;
    }, t.prototype.$once = function (t, e) {
      function i() {
        n.$off(t, i), e.apply(this, arguments);
      }var n = this;return i.fn = e, this.$on(t, i), this;
    }, t.prototype.$off = function (t, i) {
      var n;if (!arguments.length) {
        if (this.$parent) for (t in this._events) {
          n = this._events[t], n && e(this, t, -n.length);
        }return this._events = {}, this;
      }if (n = this._events[t], !n) return this;if (1 === arguments.length) return e(this, t, -n.length), this._events[t] = null, this;for (var r, s = n.length; s--;) {
        if (r = n[s], r === i || r.fn === i) {
          e(this, t, -1), n.splice(s, 1);break;
        }
      }return this;
    }, t.prototype.$emit = function (t) {
      var e = "string" == typeof t;t = e ? t : t.name;var i = this._events[t],
          n = e || !i;if (i) {
        i = i.length > 1 ? d(i) : i;var r = e && i.some(function (t) {
          return t._fromParent;
        });r && (n = !1);for (var s = d(arguments, 1), o = 0, a = i.length; a > o; o++) {
          var h = i[o],
              l = h.apply(this, s);l !== !0 || r && !h._fromParent || (n = !0);
        }
      }return n;
    }, t.prototype.$broadcast = function (t) {
      var e = "string" == typeof t;if (t = e ? t : t.name, this._eventsCount[t]) {
        var i = this.$children,
            n = d(arguments);e && (n[0] = { name: t, source: this });for (var r = 0, s = i.length; s > r; r++) {
          var o = i[r],
              a = o.$emit.apply(o, n);a && o.$broadcast.apply(o, n);
        }return this;
      }
    }, t.prototype.$dispatch = function (t) {
      var e = this.$emit.apply(this, arguments);if (e) {
        var i = this.$parent,
            n = d(arguments);for (n[0] = { name: t, source: this }; i;) {
          e = i.$emit.apply(i, n), i = e ? i.$parent : null;
        }return this;
      }
    };var i = /^hook:/;
  }function li(t) {
    function e() {
      this._isAttached = !0, this._isReady = !0, this._callHook("ready");
    }t.prototype.$mount = function (t) {
      return this._isCompiled ? void 0 : (t = H(t), t || (t = document.createElement("div")), this._compile(t), this._initDOMHooks(), L(this.$el) ? (this._callHook("attached"), e.call(this)) : this.$once("hook:attached", e), this);
    }, t.prototype.$destroy = function (t, e) {
      this._destroy(t, e);
    }, t.prototype.$compile = function (t, e, i, n) {
      return xe(t, this.$options, !0)(this, t, e, i, n);
    };
  }function ci(t) {
    this._init(t);
  }function ui(t, e, i) {
    return i = i ? parseInt(i, 10) : 0, e = o(e), "number" == typeof e ? t.slice(i, i + e) : t;
  }function fi(t, e, i) {
    if (t = As(t), null == e) return t;if ("function" == typeof e) return t.filter(e);e = ("" + e).toLowerCase();for (var n, r, s, o, a = "in" === i ? 3 : 2, h = d(arguments, a).reduce(function (t, e) {
      return t.concat(e);
    }, []), l = [], c = 0, u = t.length; u > c; c++) {
      if (n = t[c], s = n && n.$value || n, o = h.length) {
        for (; o--;) {
          if (r = h[o], "$key" === r && di(n.$key, e) || di(jt(s, r), e)) {
            l.push(n);break;
          }
        }
      } else di(n, e) && l.push(n);
    }return l;
  }function pi(t, e, i) {
    if (t = As(t), !e) return t;var n = i && 0 > i ? -1 : 1;return t.slice().sort(function (t, i) {
      return "$key" !== e && (m(t) && "$value" in t && (t = t.$value), m(i) && "$value" in i && (i = i.$value)), t = m(t) ? jt(t, e) : t, i = m(i) ? jt(i, e) : i, t === i ? 0 : t > i ? n : -n;
    });
  }function di(t, e) {
    var i;if (g(t)) {
      var n = Object.keys(t);for (i = n.length; i--;) {
        if (di(t[n[i]], e)) return !0;
      }
    } else if ($i(t)) {
      for (i = t.length; i--;) {
        if (di(t[i], e)) return !0;
      }
    } else if (null != t) return t.toString().toLowerCase().indexOf(e) > -1;
  }function vi(t, e, i) {
    function n(t) {
      !et(t) || t.hasAttribute("v-if") || t.hasAttribute("v-for") || (t = re(t)), t = ne(t), r.appendChild(t);
    }for (var r = document.createDocumentFragment(), s = 0, o = t.length; o > s; s++) {
      var a = t[s];i && !a.__v_selected ? n(a) : i || a.parentNode !== e || (a.__v_selected = !0, n(a));
    }return r;
  }var mi = Object.prototype.hasOwnProperty,
      gi = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/,
      _i = /-(\w)/g,
      yi = /([a-z\d])([A-Z])/g,
      bi = /(?:^|[-_\/])(\w)/g,
      Ci = Object.prototype.toString,
      wi = "[object Object]",
      $i = Array.isArray,
      ki = "__proto__" in {},
      xi = "undefined" != typeof window && "[object Object]" !== Object.prototype.toString.call(window),
      Ai = xi && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
      Oi = xi && navigator.userAgent.toLowerCase().indexOf("msie 9.0") > 0,
      Ni = xi && navigator.userAgent.toLowerCase().indexOf("android") > 0,
      Ti = void 0,
      ji = void 0,
      Ei = void 0,
      Fi = void 0;if (xi && !Oi) {
    var Si = void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend,
        Pi = void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend;Ti = Si ? "WebkitTransition" : "transition", ji = Si ? "webkitTransitionEnd" : "transitionend", Ei = Pi ? "WebkitAnimation" : "animation", Fi = Pi ? "webkitAnimationEnd" : "animationend";
  }var Di = function () {
    function t() {
      n = !1;var t = i.slice(0);i = [];for (var e = 0; e < t.length; e++) {
        t[e]();
      }
    }var e,
        i = [],
        n = !1;if ("undefined" != typeof MutationObserver) {
      var r = 1,
          s = new MutationObserver(t),
          o = document.createTextNode(r);s.observe(o, { characterData: !0 }), e = function e() {
        r = (r + 1) % 2, o.data = r;
      };
    } else {
      var a = xi ? window : "undefined" != typeof global ? global : {};e = a.setImmediate || setTimeout;
    }return function (r, s) {
      var o = s ? function () {
        r.call(s);
      } : r;i.push(o), n || (n = !0, e(t, 0));
    };
  }(),
      Ri = $.prototype;Ri.put = function (t, e) {
    var i;this.size === this.limit && (i = this.shift());var n = this.get(t, !0);return n || (n = { key: t }, this._keymap[t] = n, this.tail ? (this.tail.newer = n, n.older = this.tail) : this.head = n, this.tail = n, this.size++), n.value = e, i;
  }, Ri.shift = function () {
    var t = this.head;return t && (this.head = this.head.newer, this.head.older = void 0, t.newer = t.older = void 0, this._keymap[t.key] = void 0, this.size--), t;
  }, Ri.get = function (t, e) {
    var i = this._keymap[t];if (void 0 !== i) return i === this.tail ? e ? i : i.value : (i.newer && (i === this.head && (this.head = i.newer), i.newer.older = i.older), i.older && (i.older.newer = i.newer), i.newer = void 0, i.older = this.tail, this.tail && (this.tail.newer = i), this.tail = i, e ? i : i.value);
  };var Hi,
      Li,
      Vi,
      Bi,
      Mi,
      Wi,
      zi,
      Ii,
      Ui,
      qi,
      Ji,
      Qi,
      Gi = new $(1e3),
      Ki = /[^\s'"]+|'[^']*'|"[^"]*"/g,
      Zi = /^in$|^-?\d+/,
      Xi = Object.freeze({ parseDirective: A }),
      Yi = /[-.*+?^${}()|[\]\/\\]/g,
      tn = void 0,
      en = void 0,
      nn = void 0,
      rn = /[^|]\|[^|]/,
      sn = Object.freeze({ compileRegex: N, parseText: T, tokensToExp: j }),
      on = ["{{", "}}"],
      an = ["{{{", "}}}"],
      hn = Object.defineProperties({ debug: !1, silent: !1, async: !0, warnExpressionErrors: !0, convertAllProperties: !1, _delimitersChanged: !0, _assetTypes: ["component", "directive", "elementDirective", "filter", "transition", "partial"], _propBindingModes: { ONE_WAY: 0, TWO_WAY: 1, ONE_TIME: 2 }, _maxUpdateCount: 100 }, { delimiters: { get: function get() {
        return on;
      }, set: function set(t) {
        on = t, N();
      }, configurable: !0, enumerable: !0 }, unsafeDelimiters: { get: function get() {
        return an;
      }, set: function set(t) {
        an = t, N();
      }, configurable: !0, enumerable: !0 } }),
      ln = void 0,
      cn = /^v-ref:/,
      un = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/,
      fn = /^(slot|partial|component)$/,
      pn = hn.optionMergeStrategies = Object.create(null);pn.data = function (t, e, i) {
    return i ? t || e ? function () {
      var n = "function" == typeof e ? e.call(i) : e,
          r = "function" == typeof t ? t.call(i) : void 0;return n ? ut(n, r) : r;
    } : void 0 : e ? "function" != typeof e ? t : t ? function () {
      return ut(e.call(this), t.call(this));
    } : e : t;
  }, pn.el = function (t, e, i) {
    if (i || !e || "function" == typeof e) {
      var n = e || t;return i && "function" == typeof n ? n.call(i) : n;
    }
  }, pn.init = pn.created = pn.ready = pn.attached = pn.detached = pn.beforeCompile = pn.compiled = pn.beforeDestroy = pn.destroyed = function (t, e) {
    return e ? t ? t.concat(e) : $i(e) ? e : [e] : t;
  }, pn.paramAttributes = function () {}, hn._assetTypes.forEach(function (t) {
    pn[t + "s"] = ft;
  }), pn.watch = pn.events = function (t, e) {
    if (!e) return t;if (!t) return e;var i = {};v(i, t);for (var n in e) {
      var r = i[n],
          s = e[n];r && !$i(r) && (r = [r]), i[n] = r ? r.concat(s) : [s];
    }return i;
  }, pn.props = pn.methods = pn.computed = function (t, e) {
    if (!e) return t;if (!t) return e;var i = Object.create(null);return v(i, t), v(i, e), i;
  };var dn = function dn(t, e) {
    return void 0 === e ? t : e;
  },
      vn = Array.prototype,
      mn = Object.create(vn);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
    var e = vn[t];_(mn, t, function () {
      for (var i = arguments.length, n = new Array(i); i--;) {
        n[i] = arguments[i];
      }var r,
          s = e.apply(this, n),
          o = this.__ob__;switch (t) {case "push":
          r = n;break;case "unshift":
          r = n;break;case "splice":
          r = n.slice(2);}return r && o.observeArray(r), o.dep.notify(), s;
    });
  }), _(vn, "$set", function (t, e) {
    return t >= this.length && (this.length = Number(t) + 1), this.splice(t, 1, e)[0];
  }), _(vn, "$remove", function (t) {
    if (this.length) {
      var e = b(this, t);return e > -1 ? this.splice(e, 1) : void 0;
    }
  });var gn = 0;yt.target = null, yt.prototype.addSub = function (t) {
    this.subs.push(t);
  }, yt.prototype.removeSub = function (t) {
    this.subs.$remove(t);
  }, yt.prototype.depend = function () {
    yt.target.addDep(this);
  }, yt.prototype.notify = function () {
    for (var t = d(this.subs), e = 0, i = t.length; i > e; e++) {
      t[e].update();
    }
  };var _n = Object.getOwnPropertyNames(mn);bt.prototype.walk = function (t) {
    for (var e = Object.keys(t), i = 0, n = e.length; n > i; i++) {
      this.convert(e[i], t[e[i]]);
    }
  }, bt.prototype.observeArray = function (t) {
    for (var e = 0, i = t.length; i > e; e++) {
      $t(t[e]);
    }
  }, bt.prototype.convert = function (t, e) {
    kt(this.value, t, e);
  }, bt.prototype.addVm = function (t) {
    (this.vms || (this.vms = [])).push(t);
  }, bt.prototype.removeVm = function (t) {
    this.vms.$remove(t);
  };var yn = Object.freeze({ defineReactive: kt, set: t, del: e, hasOwn: i, isLiteral: n, isReserved: r, _toString: s, toNumber: o, toBoolean: a, stripQuotes: h, camelize: l, hyphenate: u, classify: f, bind: p, toArray: d, extend: v, isObject: m, isPlainObject: g, def: _, debounce: y, indexOf: b, cancellable: C, looseEqual: w, isArray: $i, hasProto: ki, inBrowser: xi, devtools: Ai, isIE9: Oi, isAndroid: Ni, get transitionProp() {
      return Ti;
    }, get transitionEndEvent() {
      return ji;
    }, get animationProp() {
      return Ei;
    }, get animationEndEvent() {
      return Fi;
    }, nextTick: Di, query: H, inDoc: L, getAttr: V, getBindAttr: B, hasBindAttr: M, before: W, after: z, remove: I, prepend: U, replace: q, on: J, off: Q, setClass: G, addClass: K, removeClass: Z, extractContent: X, trimNode: Y, isTemplate: et, createAnchor: it, findRef: nt, mapNodeRange: rt, removeNodeRange: st, mergeOptions: mt, resolveAsset: gt, assertAsset: _t, checkComponentAttr: ot, initProp: ht, assertProp: lt, coerceProp: ct, commonTagRE: un, reservedTagRE: fn, warn: ln }),
      bn = 0,
      Cn = new $(1e3),
      wn = 0,
      $n = 1,
      kn = 2,
      xn = 3,
      An = 0,
      On = 1,
      Nn = 2,
      Tn = 3,
      jn = 4,
      En = 5,
      Fn = 6,
      Sn = 7,
      Pn = 8,
      Dn = [];Dn[An] = { ws: [An], ident: [Tn, wn], "[": [jn], eof: [Sn] }, Dn[On] = { ws: [On], ".": [Nn], "[": [jn], eof: [Sn] }, Dn[Nn] = { ws: [Nn], ident: [Tn, wn] }, Dn[Tn] = { ident: [Tn, wn], 0: [Tn, wn], number: [Tn, wn], ws: [On, $n], ".": [Nn, $n], "[": [jn, $n], eof: [Sn, $n] }, Dn[jn] = { "'": [En, wn], '"': [Fn, wn], "[": [jn, kn], "]": [On, xn], eof: Pn, "else": [jn, wn] }, Dn[En] = { "'": [jn, wn], eof: Pn, "else": [En, wn] }, Dn[Fn] = { '"': [jn, wn], eof: Pn, "else": [Fn, wn] };var Rn = Object.freeze({ parsePath: Tt, getPath: jt, setPath: Et }),
      Hn = new $(1e3),
      Ln = "Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",
      Vn = new RegExp("^(" + Ln.replace(/,/g, "\\b|") + "\\b)"),
      Bn = "break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,proctected,static,interface,private,public",
      Mn = new RegExp("^(" + Bn.replace(/,/g, "\\b|") + "\\b)"),
      Wn = /\s/g,
      zn = /\n/g,
      In = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|new |typeof |void /g,
      Un = /"(\d+)"/g,
      qn = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,
      Jn = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g,
      Qn = /^(?:true|false)$/,
      Gn = [],
      Kn = Object.freeze({ parseExpression: Lt, isSimplePath: Vt }),
      Zn = [],
      Xn = [],
      Yn = {},
      tr = {},
      er = !1,
      ir = !1,
      nr = 0;It.prototype.addDep = function (t) {
    var e = t.id;this.newDeps[e] || (this.newDeps[e] = t, this.deps[e] || (this.deps[e] = t, t.addSub(this)));
  }, It.prototype.get = function () {
    this.beforeGet();var t,
        e = this.scope || this.vm;try {
      t = this.getter.call(e, e);
    } catch (i) {}return this.deep && Ut(t), this.preProcess && (t = this.preProcess(t)), this.filters && (t = e._applyFilters(t, null, this.filters, !1)), this.postProcess && (t = this.postProcess(t)), this.afterGet(), t;
  }, It.prototype.set = function (t) {
    var e = this.scope || this.vm;this.filters && (t = e._applyFilters(t, this.value, this.filters, !0));try {
      this.setter.call(e, e, t);
    } catch (i) {}var n = e.$forContext;if (n && n.alias === this.expression) {
      if (n.filters) return;n._withLock(function () {
        e.$key ? n.rawValue[e.$key] = t : n.rawValue.$set(e.$index, t);
      });
    }
  }, It.prototype.beforeGet = function () {
    yt.target = this, this.newDeps = Object.create(null);
  }, It.prototype.afterGet = function () {
    yt.target = null;for (var t = Object.keys(this.deps), e = t.length; e--;) {
      var i = t[e];this.newDeps[i] || this.deps[i].removeSub(this);
    }this.deps = this.newDeps;
  }, It.prototype.update = function (t) {
    this.lazy ? this.dirty = !0 : this.sync || !hn.async ? this.run() : (this.shallow = this.queued ? t ? this.shallow : !1 : !!t, this.queued = !0, zt(this));
  }, It.prototype.run = function () {
    if (this.active) {
      var t = this.get();if (t !== this.value || (m(t) || this.deep) && !this.shallow) {
        var e = this.value;this.value = t;this.prevError;this.cb.call(this.vm, t, e);
      }this.queued = this.shallow = !1;
    }
  }, It.prototype.evaluate = function () {
    var t = yt.target;this.value = this.get(), this.dirty = !1, yt.target = t;
  }, It.prototype.depend = function () {
    for (var t = Object.keys(this.deps), e = t.length; e--;) {
      this.deps[t[e]].depend();
    }
  }, It.prototype.teardown = function () {
    if (this.active) {
      this.vm._isBeingDestroyed || this.vm._vForRemoving || this.vm._watchers.$remove(this);for (var t = Object.keys(this.deps), e = t.length; e--;) {
        this.deps[t[e]].removeSub(this);
      }this.active = !1, this.vm = this.cb = this.value = null;
    }
  };var rr = { bind: function bind() {
      var t = this.el;this.vm.$once("pre-hook:compiled", function () {
        t.removeAttribute("v-cloak");
      });
    } },
      sr = { bind: function bind() {} },
      or = 700,
      ar = 800,
      hr = 850,
      lr = 1100,
      cr = 1500,
      ur = 1500,
      fr = 1750,
      pr = 2e3,
      dr = 2e3,
      vr = 2100,
      mr = { priority: cr, bind: function bind() {
      if (this.arg) {
        var t = this.id = l(this.arg),
            e = (this._scope || this.vm).$els;i(e, t) ? e[t] = this.el : kt(e, t, this.el);
      }
    }, unbind: function unbind() {
      var t = (this._scope || this.vm).$els;t[this.id] === this.el && (t[this.id] = null);
    } },
      gr = ["-webkit-", "-moz-", "-ms-"],
      _r = ["Webkit", "Moz", "ms"],
      yr = /!important;?$/,
      br = Object.create(null),
      Cr = null,
      wr = { deep: !0, update: function update(t) {
      "string" == typeof t ? this.el.style.cssText = t : $i(t) ? this.handleObject(t.reduce(v, {})) : this.handleObject(t || {});
    }, handleObject: function handleObject(t) {
      var e,
          i,
          n = this.cache || (this.cache = {});for (e in n) {
        e in t || (this.handleSingle(e, null), delete n[e]);
      }for (e in t) {
        i = t[e], i !== n[e] && (n[e] = i, this.handleSingle(e, i));
      }
    }, handleSingle: function handleSingle(t, e) {
      if (t = qt(t)) if (null != e && (e += ""), e) {
        var i = yr.test(e) ? "important" : "";i && (e = e.replace(yr, "").trim()), this.el.style.setProperty(t, e, i);
      } else this.el.style.removeProperty(t);
    } },
      $r = "http://www.w3.org/1999/xlink",
      kr = /^xlink:/,
      xr = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,
      Ar = /^(?:value|checked|selected|muted)$/,
      Or = { value: "_value", "true-value": "_trueValue", "false-value": "_falseValue" },
      Nr = { priority: hr, bind: function bind() {
      var t = this.arg,
          e = this.el.tagName;t || (this.deep = !0);var i = this.descriptor,
          n = i.interp;n && (i.hasOneTime && (this.expression = j(n, this._scope || this.vm)), (xr.test(t) || "name" === t && ("PARTIAL" === e || "SLOT" === e)) && (this.el.removeAttribute(t), this.invalid = !0));
    }, update: function update(t) {
      if (!this.invalid) {
        var e = this.arg;this.arg ? this.handleSingle(e, t) : this.handleObject(t || {});
      }
    }, handleObject: wr.handleObject, handleSingle: function handleSingle(t, e) {
      var i = this.el,
          n = this.descriptor.interp;this.modifiers.camel && (t = l(t)), !n && Ar.test(t) && t in i && (i[t] = "value" === t && null == e ? "" : e);var r = Or[t];if (!n && r) {
        i[r] = e;var s = i.__v_model;s && s.listener();
      }return "value" === t && "TEXTAREA" === i.tagName ? void i.removeAttribute(t) : void (null != e && e !== !1 ? "class" === t ? (i.__v_trans && (e += " " + i.__v_trans.id + "-transition"), G(i, e)) : kr.test(t) ? i.setAttributeNS($r, t, e === !0 ? "" : e) : i.setAttribute(t, e === !0 ? "" : e) : i.removeAttribute(t));
    } },
      Tr = { esc: 27, tab: 9, enter: 13, space: 32, "delete": [8, 46], up: 38, left: 37, right: 39, down: 40 },
      jr = { acceptStatement: !0, priority: or, bind: function bind() {
      if ("IFRAME" === this.el.tagName && "load" !== this.arg) {
        var t = this;this.iframeBind = function () {
          J(t.el.contentWindow, t.arg, t.handler, t.modifiers.capture);
        }, this.on("load", this.iframeBind);
      }
    }, update: function update(t) {
      if (this.descriptor.raw || (t = function t() {}), "function" == typeof t) {
        this.modifiers.stop && (t = Gt(t)), this.modifiers.prevent && (t = Kt(t)), this.modifiers.self && (t = Zt(t));var e = Object.keys(this.modifiers).filter(function (t) {
          return "stop" !== t && "prevent" !== t;
        });e.length && (t = Qt(t, e)), this.reset(), this.handler = t, this.iframeBind ? this.iframeBind() : J(this.el, this.arg, this.handler, this.modifiers.capture);
      }
    }, reset: function reset() {
      var t = this.iframeBind ? this.el.contentWindow : this.el;this.handler && Q(t, this.arg, this.handler);
    }, unbind: function unbind() {
      this.reset();
    } },
      Er = { bind: function bind() {
      function t() {
        var t = i.checked;return t && i.hasOwnProperty("_trueValue") ? i._trueValue : !t && i.hasOwnProperty("_falseValue") ? i._falseValue : t;
      }var e = this,
          i = this.el;this.getValue = function () {
        return i.hasOwnProperty("_value") ? i._value : e.params.number ? o(i.value) : i.value;
      }, this.listener = function () {
        var n = e._watcher.value;if ($i(n)) {
          var r = e.getValue();i.checked ? b(n, r) < 0 && n.push(r) : n.$remove(r);
        } else e.set(t());
      }, this.on("change", this.listener), i.hasAttribute("checked") && (this.afterBind = this.listener);
    }, update: function update(t) {
      var e = this.el;$i(t) ? e.checked = b(t, this.getValue()) > -1 : e.hasOwnProperty("_trueValue") ? e.checked = w(t, e._trueValue) : e.checked = !!t;
    } },
      Fr = { bind: function bind() {
      var t = this,
          e = this.el;this.forceUpdate = function () {
        t._watcher && t.update(t._watcher.get());
      };var i = this.multiple = e.hasAttribute("multiple");this.listener = function () {
        var n = Xt(e, i);n = t.params.number ? $i(n) ? n.map(o) : o(n) : n, t.set(n);
      }, this.on("change", this.listener);var n = Xt(e, i, !0);(i && n.length || !i && null !== n) && (this.afterBind = this.listener), this.vm.$on("hook:attached", this.forceUpdate);
    }, update: function update(t) {
      var e = this.el;e.selectedIndex = -1;for (var i, n, r = this.multiple && $i(t), s = e.options, o = s.length; o--;) {
        i = s[o], n = i.hasOwnProperty("_value") ? i._value : i.value, i.selected = r ? Yt(t, n) > -1 : w(t, n);
      }
    }, unbind: function unbind() {
      this.vm.$off("hook:attached", this.forceUpdate);
    } },
      Sr = { bind: function bind() {
      var t = this,
          e = this.el;this.getValue = function () {
        if (e.hasOwnProperty("_value")) return e._value;var i = e.value;return t.params.number && (i = o(i)), i;
      }, this.listener = function () {
        t.set(t.getValue());
      }, this.on("change", this.listener), e.hasAttribute("checked") && (this.afterBind = this.listener);
    }, update: function update(t) {
      this.el.checked = w(t, this.getValue());
    } },
      Pr = { bind: function bind() {
      var t = this,
          e = this.el,
          i = "range" === e.type,
          n = this.params.lazy,
          r = this.params.number,
          s = this.params.debounce,
          a = !1;if (Ni || i || (this.on("compositionstart", function () {
        a = !0;
      }), this.on("compositionend", function () {
        a = !1, n || t.listener();
      })), this.focused = !1, i || n || (this.on("focus", function () {
        t.focused = !0;
      }), this.on("blur", function () {
        t.focused = !1, (!t._frag || t._frag.inserted) && t.rawListener();
      })), this.listener = this.rawListener = function () {
        if (!a && t._bound) {
          var n = r || i ? o(e.value) : e.value;t.set(n), Di(function () {
            t._bound && !t.focused && t.update(t._watcher.value);
          });
        }
      }, s && (this.listener = y(this.listener, s)), this.hasjQuery = "function" == typeof jQuery, this.hasjQuery) {
        var h = jQuery.fn.on ? "on" : "bind";jQuery(e)[h]("change", this.listener), n || jQuery(e)[h]("input", this.listener);
      } else this.on("change", this.listener), n || this.on("input", this.listener);!n && Oi && (this.on("cut", function () {
        Di(t.listener);
      }), this.on("keyup", function (e) {
        (46 === e.keyCode || 8 === e.keyCode) && t.listener();
      })), (e.hasAttribute("value") || "TEXTAREA" === e.tagName && e.value.trim()) && (this.afterBind = this.listener);
    }, update: function update(t) {
      this.el.value = s(t);
    }, unbind: function unbind() {
      var t = this.el;if (this.hasjQuery) {
        var e = jQuery.fn.off ? "off" : "unbind";jQuery(t)[e]("change", this.listener), jQuery(t)[e]("input", this.listener);
      }
    } },
      Dr = { text: Pr, radio: Sr, select: Fr, checkbox: Er },
      Rr = { priority: ar, twoWay: !0, handlers: Dr, params: ["lazy", "number", "debounce"], bind: function bind() {
      this.checkFilters(), this.hasRead && !this.hasWrite;var t,
          e = this.el,
          i = e.tagName;if ("INPUT" === i) t = Dr[e.type] || Dr.text;else if ("SELECT" === i) t = Dr.select;else {
        if ("TEXTAREA" !== i) return;t = Dr.text;
      }e.__v_model = this, t.bind.call(this), this.update = t.update, this._unbind = t.unbind;
    }, checkFilters: function checkFilters() {
      var t = this.filters;if (t) for (var e = t.length; e--;) {
        var i = gt(this.vm.$options, "filters", t[e].name);("function" == typeof i || i.read) && (this.hasRead = !0), i.write && (this.hasWrite = !0);
      }
    }, unbind: function unbind() {
      this.el.__v_model = null, this._unbind && this._unbind();
    } },
      Hr = { bind: function bind() {
      var t = this.el.nextElementSibling;t && null !== V(t, "v-else") && (this.elseEl = t);
    }, update: function update(t) {
      this.apply(this.el, t), this.elseEl && this.apply(this.elseEl, !t);
    }, apply: function apply(t, e) {
      function i() {
        t.style.display = e ? "" : "none";
      }L(t) ? R(t, e ? 1 : -1, i, this.vm) : i();
    } },
      Lr = new $(1e3),
      Vr = new $(1e3),
      Br = { efault: [0, "", ""], legend: [1, "<fieldset>", "</fieldset>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"] };Br.td = Br.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], Br.option = Br.optgroup = [1, '<select multiple="multiple">', "</select>"], Br.thead = Br.tbody = Br.colgroup = Br.caption = Br.tfoot = [1, "<table>", "</table>"], Br.g = Br.defs = Br.symbol = Br.use = Br.image = Br.text = Br.circle = Br.ellipse = Br.line = Br.path = Br.polygon = Br.polyline = Br.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">', "</svg>"];var Mr = /<([\w:]+)/,
      Wr = /&#?\w+?;/,
      zr = function () {
    if (xi) {
      var t = document.createElement("div");return t.innerHTML = "<template>1</template>", !t.cloneNode(!0).firstChild.innerHTML;
    }return !1;
  }(),
      Ir = function () {
    if (xi) {
      var t = document.createElement("textarea");return t.placeholder = "t", "t" === t.cloneNode(!0).value;
    }return !1;
  }(),
      Ur = Object.freeze({ cloneNode: ne, parseTemplate: re });se.prototype.callHook = function (t) {
    var e, i;for (e = 0, i = this.childFrags.length; i > e; e++) {
      this.childFrags[e].callHook(t);
    }for (e = 0, i = this.children.length; i > e; e++) {
      t(this.children[e]);
    }
  }, se.prototype.beforeRemove = function () {
    var t, e;for (t = 0, e = this.childFrags.length; e > t; t++) {
      this.childFrags[t].beforeRemove(!1);
    }for (t = 0, e = this.children.length; e > t; t++) {
      this.children[t].$destroy(!1, !0);
    }var i = this.unlink.dirs;for (t = 0, e = i.length; e > t; t++) {
      i[t]._watcher && i[t]._watcher.teardown();
    }
  }, se.prototype.destroy = function () {
    this.parentFrag && this.parentFrag.childFrags.$remove(this), this.node.__vfrag__ = null, this.unlink();
  };var qr = new $(5e3);fe.prototype.create = function (t, e, i) {
    var n = ne(this.template);return new se(this.linker, this.vm, n, t, e, i);
  };var Jr = { priority: dr, bind: function bind() {
      var t = this.el;if (t.__vue__) this.invalid = !0;else {
        var e = t.nextElementSibling;e && null !== V(e, "v-else") && (I(e), this.elseFactory = new fe(this.vm, e)), this.anchor = it("v-if"), q(t, this.anchor), this.factory = new fe(this.vm, t);
      }
    }, update: function update(t) {
      this.invalid || (t ? this.frag || this.insert() : this.remove());
    }, insert: function insert() {
      this.elseFrag && (this.elseFrag.remove(), this.elseFrag = null), this.frag = this.factory.create(this._host, this._scope, this._frag), this.frag.before(this.anchor);
    }, remove: function remove() {
      this.frag && (this.frag.remove(), this.frag = null), this.elseFactory && !this.elseFrag && (this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag), this.elseFrag.before(this.anchor));
    }, unbind: function unbind() {
      this.frag && this.frag.destroy(), this.elseFrag && this.elseFrag.destroy();
    } },
      Qr = 0,
      Gr = { priority: pr, params: ["track-by", "stagger", "enter-stagger", "leave-stagger"], bind: function bind() {
      var t = this.expression.match(/(.*) in (.*)/);if (t) {
        var e = t[1].match(/\((.*),(.*)\)/);e ? (this.iterator = e[1].trim(), this.alias = e[2].trim()) : this.alias = t[1].trim(), this.expression = t[2];
      }if (this.alias) {
        this.id = "__v-for__" + ++Qr;var i = this.el.tagName;this.isOption = ("OPTION" === i || "OPTGROUP" === i) && "SELECT" === this.el.parentNode.tagName, this.start = it("v-for-start"), this.end = it("v-for-end"), q(this.el, this.end), W(this.start, this.end), this.cache = Object.create(null), this.factory = new fe(this.vm, this.el);
      }
    }, update: function update(t) {
      this.diff(t), this.updateRef(), this.updateModel();
    }, diff: function diff(t) {
      var e,
          n,
          r,
          s,
          o,
          a,
          h = t[0],
          l = this.fromObject = m(h) && i(h, "$key") && i(h, "$value"),
          c = this.params.trackBy,
          u = this.frags,
          f = this.frags = new Array(t.length),
          p = this.alias,
          d = this.iterator,
          v = this.start,
          g = this.end,
          _ = L(v),
          y = !u;for (e = 0, n = t.length; n > e; e++) {
        h = t[e], s = l ? h.$key : null, o = l ? h.$value : h, a = !m(o), r = !y && this.getCachedFrag(o, e, s), r ? (r.reused = !0, r.scope.$index = e, s && (r.scope.$key = s), d && (r.scope[d] = null !== s ? s : e), (c || l || a) && (r.scope[p] = o)) : (r = this.create(o, p, e, s), r.fresh = !y), f[e] = r, y && r.before(g);
      }if (!y) {
        var b = 0,
            C = u.length - f.length;for (this.vm._vForRemoving = !0, e = 0, n = u.length; n > e; e++) {
          r = u[e], r.reused || (this.deleteCachedFrag(r), this.remove(r, b++, C, _));
        }this.vm._vForRemoving = !1, this.vm._watchers = this.vm._watchers.filter(function (t) {
          return t.active;
        });var w,
            $,
            k,
            x = 0;for (e = 0, n = f.length; n > e; e++) {
          r = f[e], w = f[e - 1], $ = w ? w.staggerCb ? w.staggerAnchor : w.end || w.node : v, r.reused && !r.staggerCb ? (k = pe(r, v, this.id), k === w || k && pe(k, v, this.id) === w || this.move(r, $)) : this.insert(r, x++, $, _), r.reused = r.fresh = !1;
        }
      }
    }, create: function create(t, e, i, n) {
      var r = this._host,
          s = this._scope || this.vm,
          o = Object.create(s);o.$refs = Object.create(s.$refs), o.$els = Object.create(s.$els), o.$parent = s, o.$forContext = this, kt(o, e, t), kt(o, "$index", i), n ? kt(o, "$key", n) : o.$key && _(o, "$key", null), this.iterator && kt(o, this.iterator, null !== n ? n : i);var a = this.factory.create(r, o, this._frag);return a.forId = this.id, this.cacheFrag(t, a, i, n), a;
    }, updateRef: function updateRef() {
      var t = this.descriptor.ref;if (t) {
        var e,
            i = (this._scope || this.vm).$refs;this.fromObject ? (e = {}, this.frags.forEach(function (t) {
          e[t.scope.$key] = de(t);
        })) : e = this.frags.map(de), i[t] = e;
      }
    }, updateModel: function updateModel() {
      if (this.isOption) {
        var t = this.start.parentNode,
            e = t && t.__v_model;e && e.forceUpdate();
      }
    }, insert: function insert(t, e, i, n) {
      t.staggerCb && (t.staggerCb.cancel(), t.staggerCb = null);var r = this.getStagger(t, e, null, "enter");if (n && r) {
        var s = t.staggerAnchor;s || (s = t.staggerAnchor = it("stagger-anchor"), s.__vfrag__ = t), z(s, i);var o = t.staggerCb = C(function () {
          t.staggerCb = null, t.before(s), I(s);
        });setTimeout(o, r);
      } else t.before(i.nextSibling);
    }, remove: function remove(t, e, i, n) {
      if (t.staggerCb) return t.staggerCb.cancel(), void (t.staggerCb = null);var r = this.getStagger(t, e, i, "leave");if (n && r) {
        var s = t.staggerCb = C(function () {
          t.staggerCb = null, t.remove();
        });setTimeout(s, r);
      } else t.remove();
    }, move: function move(t, e) {
      e.nextSibling || this.end.parentNode.appendChild(this.end), t.before(e.nextSibling, !1);
    }, cacheFrag: function cacheFrag(t, e, n, r) {
      var s,
          o = this.params.trackBy,
          a = this.cache,
          h = !m(t);r || o || h ? (s = o ? "$index" === o ? n : t[o] : r || t, a[s] || (a[s] = e)) : (s = this.id, i(t, s) ? null === t[s] && (t[s] = e) : _(t, s, e)), e.raw = t;
    }, getCachedFrag: function getCachedFrag(t, e, i) {
      var n,
          r = this.params.trackBy,
          s = !m(t);if (i || r || s) {
        var o = r ? "$index" === r ? e : t[r] : i || t;n = this.cache[o];
      } else n = t[this.id];return n && (n.reused || n.fresh), n;
    }, deleteCachedFrag: function deleteCachedFrag(t) {
      var e = t.raw,
          n = this.params.trackBy,
          r = t.scope,
          s = r.$index,
          o = i(r, "$key") && r.$key,
          a = !m(e);if (n || o || a) {
        var h = n ? "$index" === n ? s : e[n] : o || e;this.cache[h] = null;
      } else e[this.id] = null, t.raw = null;
    }, getStagger: function getStagger(t, e, i, n) {
      n += "Stagger";var r = t.node.__v_trans,
          s = r && r.hooks,
          o = s && (s[n] || s.stagger);return o ? o.call(t, e, i) : e * parseInt(this.params[n] || this.params.stagger, 10);
    }, _preProcess: function _preProcess(t) {
      return this.rawValue = t, t;
    }, _postProcess: function _postProcess(t) {
      if ($i(t)) return t;if (g(t)) {
        for (var e, i = Object.keys(t), n = i.length, r = new Array(n); n--;) {
          e = i[n], r[n] = { $key: e, $value: t[e] };
        }return r;
      }return "number" != typeof t || isNaN(t) || (t = ve(t)), t || [];
    }, unbind: function unbind() {
      if (this.descriptor.ref && ((this._scope || this.vm).$refs[this.descriptor.ref] = null), this.frags) for (var t, e = this.frags.length; e--;) {
        t = this.frags[e], this.deleteCachedFrag(t), t.destroy();
      }
    } },
      Kr = { bind: function bind() {
      8 === this.el.nodeType && (this.nodes = [], this.anchor = it("v-html"), q(this.el, this.anchor));
    }, update: function update(t) {
      t = s(t), this.nodes ? this.swap(t) : this.el.innerHTML = t;
    }, swap: function swap(t) {
      for (var e = this.nodes.length; e--;) {
        I(this.nodes[e]);
      }var i = re(t, !0, !0);this.nodes = d(i.childNodes), W(i, this.anchor);
    } },
      Zr = { bind: function bind() {
      this.attr = 3 === this.el.nodeType ? "data" : "textContent";
    }, update: function update(t) {
      this.el[this.attr] = s(t);
    } },
      Xr = { text: Zr, html: Kr, "for": Gr, "if": Jr, show: Hr, model: Rr, on: jr, bind: Nr, el: mr, ref: sr, cloak: rr },
      Yr = [],
      ts = !1,
      es = "transition",
      is = "animation",
      ns = Ti + "Duration",
      rs = Ei + "Duration",
      ss = _e.prototype;ss.enter = function (t, e) {
    this.cancelPending(), this.callHook("beforeEnter"), this.cb = e, K(this.el, this.enterClass), t(), this.entered = !1, this.callHookWithCb("enter"), this.entered || (this.cancel = this.hooks && this.hooks.enterCancelled, me(this.enterNextTick));
  }, ss.enterNextTick = function () {
    this.justEntered = !0;var t = this;setTimeout(function () {
      t.justEntered = !1;
    }, 17);var e = this.enterDone,
        i = this.getCssTransitionType(this.enterClass);this.pendingJsCb ? i === es && Z(this.el, this.enterClass) : i === es ? (Z(this.el, this.enterClass), this.setupCssCb(ji, e)) : i === is ? this.setupCssCb(Fi, e) : e();
  }, ss.enterDone = function () {
    this.entered = !0, this.cancel = this.pendingJsCb = null, Z(this.el, this.enterClass), this.callHook("afterEnter"), this.cb && this.cb();
  }, ss.leave = function (t, e) {
    this.cancelPending(), this.callHook("beforeLeave"), this.op = t, this.cb = e, K(this.el, this.leaveClass), this.left = !1, this.callHookWithCb("leave"), this.left || (this.cancel = this.hooks && this.hooks.leaveCancelled, this.op && !this.pendingJsCb && (this.justEntered ? this.leaveDone() : me(this.leaveNextTick)));
  }, ss.leaveNextTick = function () {
    var t = this.getCssTransitionType(this.leaveClass);if (t) {
      var e = t === es ? ji : Fi;this.setupCssCb(e, this.leaveDone);
    } else this.leaveDone();
  }, ss.leaveDone = function () {
    this.left = !0, this.cancel = this.pendingJsCb = null, this.op(), Z(this.el, this.leaveClass), this.callHook("afterLeave"), this.cb && this.cb(), this.op = null;
  }, ss.cancelPending = function () {
    this.op = this.cb = null;var t = !1;this.pendingCssCb && (t = !0, Q(this.el, this.pendingCssEvent, this.pendingCssCb), this.pendingCssEvent = this.pendingCssCb = null), this.pendingJsCb && (t = !0, this.pendingJsCb.cancel(), this.pendingJsCb = null), t && (Z(this.el, this.enterClass), Z(this.el, this.leaveClass)), this.cancel && (this.cancel.call(this.vm, this.el), this.cancel = null);
  }, ss.callHook = function (t) {
    this.hooks && this.hooks[t] && this.hooks[t].call(this.vm, this.el);
  }, ss.callHookWithCb = function (t) {
    var e = this.hooks && this.hooks[t];e && (e.length > 1 && (this.pendingJsCb = C(this[t + "Done"])), e.call(this.vm, this.el, this.pendingJsCb));
  }, ss.getCssTransitionType = function (t) {
    if (!(!ji || document.hidden || this.hooks && this.hooks.css === !1 || ye(this.el))) {
      var e = this.type || this.typeCache[t];if (e) return e;var i = this.el.style,
          n = window.getComputedStyle(this.el),
          r = i[ns] || n[ns];if (r && "0s" !== r) e = es;else {
        var s = i[rs] || n[rs];s && "0s" !== s && (e = is);
      }return e && (this.typeCache[t] = e), e;
    }
  }, ss.setupCssCb = function (t, e) {
    this.pendingCssEvent = t;var i = this,
        n = this.el,
        r = this.pendingCssCb = function (s) {
      s.target === n && (Q(n, t, r), i.pendingCssEvent = i.pendingCssCb = null, !i.pendingJsCb && e && e());
    };J(n, t, r);
  };var os = { priority: lr, update: function update(t, e) {
      var i = this.el,
          n = gt(this.vm.$options, "transitions", t);t = t || "v", i.__v_trans = new _e(i, t, n, this.el.__vue__ || this.vm), e && Z(i, e + "-transition"), K(i, t + "-transition");
    } },
      as = hn._propBindingModes,
      hs = { bind: function bind() {
      var t = this.vm,
          e = t._context,
          i = this.descriptor.prop,
          n = i.path,
          r = i.parentPath,
          s = i.mode === as.TWO_WAY,
          o = this.parentWatcher = new It(e, r, function (e) {
        e = ct(i, e), lt(i, e) && (t[n] = e);
      }, { twoWay: s, filters: i.filters, scope: this._scope });if (ht(t, i, o.value), s) {
        var a = this;t.$once("pre-hook:created", function () {
          a.childWatcher = new It(t, n, function (t) {
            o.set(t);
          }, { sync: !0 });
        });
      }
    }, unbind: function unbind() {
      this.parentWatcher.teardown(), this.childWatcher && this.childWatcher.teardown();
    } },
      ls = { priority: ur, params: ["keep-alive", "transition-mode", "inline-template"], bind: function bind() {
      this.el.__vue__ || (this.keepAlive = this.params.keepAlive, this.keepAlive && (this.cache = {}), this.params.inlineTemplate && (this.inlineTemplate = X(this.el, !0)), this.pendingComponentCb = this.Component = null, this.pendingRemovals = 0, this.pendingRemovalCb = null, this.anchor = it("v-component"), q(this.el, this.anchor), this.el.removeAttribute("is"), this.descriptor.ref && this.el.removeAttribute("v-ref:" + u(this.descriptor.ref)), this.literal && this.setComponent(this.expression));
    }, update: function update(t) {
      this.literal || this.setComponent(t);
    }, setComponent: function setComponent(t, e) {
      if (this.invalidatePending(), t) {
        var i = this;this.resolveComponent(t, function () {
          i.mountComponent(e);
        });
      } else this.unbuild(!0), this.remove(this.childVM, e), this.childVM = null;
    }, resolveComponent: function resolveComponent(t, e) {
      var i = this;this.pendingComponentCb = C(function (n) {
        i.ComponentName = n.options.name || t, i.Component = n, e();
      }), this.vm._resolveComponent(t, this.pendingComponentCb);
    }, mountComponent: function mountComponent(t) {
      this.unbuild(!0);var e = this,
          i = this.Component.options.activate,
          n = this.getCached(),
          r = this.build();i && !n ? (this.waitingFor = r, i.call(r, function () {
        e.waitingFor === r && (e.waitingFor = null, e.transition(r, t));
      })) : (n && r._updateRef(), this.transition(r, t));
    }, invalidatePending: function invalidatePending() {
      this.pendingComponentCb && (this.pendingComponentCb.cancel(), this.pendingComponentCb = null);
    }, build: function build(t) {
      var e = this.getCached();if (e) return e;if (this.Component) {
        var i = { name: this.ComponentName, el: ne(this.el), template: this.inlineTemplate, parent: this._host || this.vm, _linkerCachable: !this.inlineTemplate, _ref: this.descriptor.ref, _asComponent: !0, _isRouterView: this._isRouterView, _context: this.vm, _scope: this._scope, _frag: this._frag };t && v(i, t);var n = new this.Component(i);return this.keepAlive && (this.cache[this.Component.cid] = n), n;
      }
    }, getCached: function getCached() {
      return this.keepAlive && this.cache[this.Component.cid];
    }, unbuild: function unbuild(t) {
      this.waitingFor && (this.waitingFor.$destroy(), this.waitingFor = null);var e = this.childVM;return !e || this.keepAlive ? void (e && e._updateRef(!0)) : void e.$destroy(!1, t);
    }, remove: function remove(t, e) {
      var i = this.keepAlive;if (t) {
        this.pendingRemovals++, this.pendingRemovalCb = e;var n = this;t.$remove(function () {
          n.pendingRemovals--, i || t._cleanup(), !n.pendingRemovals && n.pendingRemovalCb && (n.pendingRemovalCb(), n.pendingRemovalCb = null);
        });
      } else e && e();
    }, transition: function transition(t, e) {
      var i = this,
          n = this.childVM;switch (this.childVM = t, i.params.transitionMode) {case "in-out":
          t.$before(i.anchor, function () {
            i.remove(n, e);
          });break;case "out-in":
          i.remove(n, function () {
            t.$before(i.anchor, e);
          });break;default:
          i.remove(n), t.$before(i.anchor, e);}
    }, unbind: function unbind() {
      if (this.invalidatePending(), this.unbuild(), this.cache) {
        for (var t in this.cache) {
          this.cache[t].$destroy();
        }this.cache = null;
      }
    } },
      cs = { deep: !0, update: function update(t) {
      t && "string" == typeof t ? this.handleObject(be(t)) : g(t) ? this.handleObject(t) : $i(t) ? this.handleArray(t) : this.cleanup();
    }, handleObject: function handleObject(t) {
      this.cleanup(t);for (var e = this.prevKeys = Object.keys(t), i = 0, n = e.length; n > i; i++) {
        var r = e[i];t[r] ? K(this.el, r) : Z(this.el, r);
      }
    }, handleArray: function handleArray(t) {
      this.cleanup(t);for (var e = 0, i = t.length; i > e; e++) {
        t[e] && K(this.el, t[e]);
      }this.prevKeys = t.slice();
    }, cleanup: function cleanup(t) {
      if (this.prevKeys) for (var e = this.prevKeys.length; e--;) {
        var i = this.prevKeys[e];!i || t && Ce(t, i) || Z(this.el, i);
      }
    } },
      us = { style: wr, "class": cs, component: ls, prop: hs, transition: os },
      fs = hn._propBindingModes,
      ps = {},
      ds = /^[$_a-zA-Z]+[\w$]*$/,
      vs = /^v-bind:|^:/,
      ms = /^v-on:|^@/,
      gs = /^v-([^:]+)(?:$|:(.*)$)/,
      _s = /\.[^\.]+/g,
      ys = /^(v-bind:|:)?transition$/,
      bs = ["for", "if"],
      Cs = 1e3;ze.terminal = !0;var ws = /[^\w\-:\.]/,
      $s = Object.freeze({ compile: xe, compileAndLinkProps: je, compileRoot: Ee, terminalDirectives: bs, transclude: Ge }),
      ks = /^v-on:|^@/;ii.prototype._bind = function () {
    var t = this.name,
        e = this.descriptor;if (("cloak" !== t || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
      var i = e.attr || "v-" + t;this.el.removeAttribute(i);
    }var n = e.def;if ("function" == typeof n ? this.update = n : v(this, n), this._setupParams(), this.bind && this.bind(), this._bound = !0, this.literal) this.update && this.update(e.raw);else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
      var r = this;this.update ? this._update = function (t, e) {
        r._locked || r.update(t, e);
      } : this._update = ei;var s = this._preProcess ? p(this._preProcess, this) : null,
          o = this._postProcess ? p(this._postProcess, this) : null,
          a = this._watcher = new It(this.vm, this.expression, this._update, { filters: this.filters, twoWay: this.twoWay, deep: this.deep, preProcess: s, postProcess: o, scope: this._scope });this.afterBind ? this.afterBind() : this.update && this.update(a.value);
    }
  }, ii.prototype._setupParams = function () {
    if (this.params) {
      var t = this.params;this.params = Object.create(null);for (var e, i, n, r = t.length; r--;) {
        e = t[r], n = l(e), i = B(this.el, e), null != i ? this._setupParamWatcher(n, i) : (i = V(this.el, e), null != i && (this.params[n] = "" === i ? !0 : i));
      }
    }
  }, ii.prototype._setupParamWatcher = function (t, e) {
    var i = this,
        n = !1,
        r = (this._scope || this.vm).$watch(e, function (e, r) {
      if (i.params[t] = e, n) {
        var s = i.paramWatchers && i.paramWatchers[t];s && s.call(i, e, r);
      } else n = !0;
    }, { immediate: !0, user: !1 });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(r);
  }, ii.prototype._checkStatement = function () {
    var t = this.expression;if (t && this.acceptStatement && !Vt(t)) {
      var e = Lt(t).get,
          i = this._scope || this.vm,
          n = function n(t) {
        i.$event = t, e.call(i, i), i.$event = null;
      };return this.filters && (n = i._applyFilters(n, null, this.filters)), this.update(n), !0;
    }
  }, ii.prototype.set = function (t) {
    this.twoWay && this._withLock(function () {
      this._watcher.set(t);
    });
  }, ii.prototype._withLock = function (t) {
    var e = this;e._locked = !0, t.call(e), Di(function () {
      e._locked = !1;
    });
  }, ii.prototype.on = function (t, e, i) {
    J(this.el, t, e, i), (this._listeners || (this._listeners = [])).push([t, e]);
  }, ii.prototype._teardown = function () {
    if (this._bound) {
      this._bound = !1, this.unbind && this.unbind(), this._watcher && this._watcher.teardown();var t,
          e = this._listeners;if (e) for (t = e.length; t--;) {
        Q(this.el, e[t][0], e[t][1]);
      }var i = this._paramUnwatchFns;if (i) for (t = i.length; t--;) {
        i[t]();
      }this.vm = this.el = this._watcher = this._listeners = null;
    }
  };var xs = /[^|]\|[^|]/;xt(ci), Ye(ci), ti(ci), ni(ci), ri(ci), si(ci), oi(ci), ai(ci), hi(ci), li(ci);var As = Gr._postProcess,
      Os = /(\d{3})(?=\d)/g,
      Ns = { orderBy: pi, filterBy: fi, limitBy: ui, json: { read: function read(t, e) {
        return "string" == typeof t ? t : JSON.stringify(t, null, Number(e) || 2);
      }, write: function write(t) {
        try {
          return JSON.parse(t);
        } catch (e) {
          return t;
        }
      } }, capitalize: function capitalize(t) {
      return t || 0 === t ? (t = t.toString(), t.charAt(0).toUpperCase() + t.slice(1)) : "";
    }, uppercase: function uppercase(t) {
      return t || 0 === t ? t.toString().toUpperCase() : "";
    }, lowercase: function lowercase(t) {
      return t || 0 === t ? t.toString().toLowerCase() : "";
    }, currency: function currency(t, e) {
      if (t = parseFloat(t), !isFinite(t) || !t && 0 !== t) return "";e = null != e ? e : "$";var i = Math.abs(t).toFixed(2),
          n = i.slice(0, -3),
          r = n.length % 3,
          s = r > 0 ? n.slice(0, r) + (n.length > 3 ? "," : "") : "",
          o = i.slice(-3),
          a = 0 > t ? "-" : "";return e + a + s + n.slice(r).replace(Os, "$1,") + o;
    }, pluralize: function pluralize(t) {
      var e = d(arguments, 1);return e.length > 1 ? e[t % 10 - 1] || e[e.length - 1] : e[0] + (1 === t ? "" : "s");
    }, debounce: function debounce(t, e) {
      return t ? (e || (e = 300), y(t, e)) : void 0;
    } },
      Ts = { priority: fr, params: ["name"], paramWatchers: { name: function name(t) {
        Jr.remove.call(this), t && this.insert(t);
      } }, bind: function bind() {
      this.anchor = it("v-partial"), q(this.el, this.anchor), this.insert(this.params.name);
    }, insert: function insert(t) {
      var e = gt(this.vm.$options, "partials", t);e && (this.factory = new fe(this.vm, e), Jr.insert.call(this));
    }, unbind: function unbind() {
      this.frag && this.frag.destroy();
    } },
      js = { priority: vr, bind: function bind() {
      var t = this.vm,
          e = t.$options._content;if (!e) return void this.fallback();var i = t._context,
          n = this.params && this.params.name;if (n) {
        var r = '[slot="' + n + '"]',
            s = e.querySelectorAll(r);s.length ? this.tryCompile(vi(s, e), i, t) : this.fallback();
      } else this.tryCompile(vi(e.childNodes, e, !0), i, t);
    }, tryCompile: function tryCompile(t, e, i) {
      t.hasChildNodes() ? this.compile(t, e, i) : this.fallback();
    }, compile: function compile(t, e, i) {
      if (t && e) {
        if (this.el.hasChildNodes() && 1 === t.childNodes.length && 1 === t.childNodes[0].nodeType && t.childNodes[0].hasAttribute("v-if")) {
          var n = document.createElement("template");n.setAttribute("v-else", ""), n.innerHTML = this.el.innerHTML, t.appendChild(n);
        }var r = i ? i._scope : this._scope;this.unlink = e.$compile(t, i, r, this._frag);
      }t ? q(this.el, t) : I(this.el);
    }, fallback: function fallback() {
      this.compile(X(this.el, !0), this.vm);
    }, unbind: function unbind() {
      this.unlink && this.unlink();
    } },
      Es = v(v({}, js), { priority: js.priority + 1, params: ["name"] }),
      Fs = { slot: js, _namedSlot: Es, partial: Ts };return ci.version = "1.0.16", ci.options = { directives: Xr, elementDirectives: Fs, filters: Ns, transitions: {}, components: {}, partials: {}, replace: !0 }, Ai && Ai.emit("init", ci), ci;
});

(function () {
  function d(o, k) {
    var p;k = k || {};this.trackingClick = false;this.trackingClickStart = 0;this.targetElement = null;this.touchStartX = 0;this.touchStartY = 0;this.lastTouchIdentifier = 0;this.touchBoundary = k.touchBoundary || 10;this.layer = o;this.tapDelay = k.tapDelay || 200;this.tapTimeout = k.tapTimeout || 700;if (d.notNeeded(o)) {
      return;
    }function q(l, i) {
      return function () {
        return l.apply(i, arguments);
      };
    }var j = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"];var n = this;for (var m = 0, h = j.length; m < h; m++) {
      n[j[m]] = q(n[j[m]], n);
    }if (b) {
      o.addEventListener("mouseover", this.onMouse, true);o.addEventListener("mousedown", this.onMouse, true);o.addEventListener("mouseup", this.onMouse, true);
    }o.addEventListener("click", this.onClick, true);o.addEventListener("touchstart", this.onTouchStart, false);o.addEventListener("touchmove", this.onTouchMove, false);o.addEventListener("touchend", this.onTouchEnd, false);o.addEventListener("touchcancel", this.onTouchCancel, false);if (!Event.prototype.stopImmediatePropagation) {
      o.removeEventListener = function (l, s, i) {
        var r = Node.prototype.removeEventListener;if (l === "click") {
          r.call(o, l, s.hijacked || s, i);
        } else {
          r.call(o, l, s, i);
        }
      };o.addEventListener = function (r, s, l) {
        var i = Node.prototype.addEventListener;if (r === "click") {
          i.call(o, r, s.hijacked || (s.hijacked = function (t) {
            if (!t.propagationStopped) {
              s(t);
            }
          }), l);
        } else {
          i.call(o, r, s, l);
        }
      };
    }if (typeof o.onclick === "function") {
      p = o.onclick;o.addEventListener("click", function (i) {
        p(i);
      }, false);o.onclick = null;
    }
  }var c = navigator.userAgent.indexOf("Windows Phone") >= 0;var b = navigator.userAgent.indexOf("Android") > 0 && !c;var g = /iP(ad|hone|od)/.test(navigator.userAgent) && !c;var e = g && /OS 4_\d(_\d)?/.test(navigator.userAgent);var f = g && /OS [6-7]_\d/.test(navigator.userAgent);var a = navigator.userAgent.indexOf("BB10") > 0;d.prototype.needsClick = function (h) {
    switch (h.nodeName.toLowerCase()) {case "button":case "select":case "textarea":
        if (h.disabled) {
          return true;
        }break;case "input":
        if (g && h.type === "file" || h.disabled) {
          return true;
        }break;case "label":case "iframe":case "video":
        return true;}return (/\bneedsclick\b/.test(h.className)
    );
  };d.prototype.needsFocus = function (h) {
    switch (h.nodeName.toLowerCase()) {case "textarea":
        return true;case "select":
        return !b;case "input":
        switch (h.type) {case "button":case "checkbox":case "file":case "image":case "radio":case "submit":
            return false;}return !h.disabled && !h.readOnly;default:
        return (/\bneedsfocus\b/.test(h.className)
        );}
  };d.prototype.sendClick = function (i, j) {
    var h, k;if (document.activeElement && document.activeElement !== i) {
      document.activeElement.blur();
    }k = j.changedTouches[0];h = document.createEvent("MouseEvents");h.initMouseEvent(this.determineEventType(i), true, true, window, 1, k.screenX, k.screenY, k.clientX, k.clientY, false, false, false, false, 0, null);h.forwardedTouchEvent = true;i.dispatchEvent(h);
  };d.prototype.determineEventType = function (h) {
    if (b && h.tagName.toLowerCase() === "select") {
      return "mousedown";
    }return "click";
  };d.prototype.focus = function (h) {
    var i;if (g && h.setSelectionRange && h.type.indexOf("date") !== 0 && h.type !== "time" && h.type !== "month") {
      i = h.value.length;h.setSelectionRange(i, i);
    } else {
      h.focus();
    }
  };d.prototype.updateScrollParent = function (i) {
    var j, h;j = i.fastClickScrollParent;if (!j || !j.contains(i)) {
      h = i;do {
        if (h.scrollHeight > h.offsetHeight) {
          j = h;i.fastClickScrollParent = h;break;
        }h = h.parentElement;
      } while (h);
    }if (j) {
      j.fastClickLastScrollTop = j.scrollTop;
    }
  };d.prototype.getTargetElementFromEventTarget = function (h) {
    if (h.nodeType === Node.TEXT_NODE) {
      return h.parentNode;
    }return h;
  };d.prototype.onTouchStart = function (j) {
    var h, k, i;if (j.targetTouches.length > 1) {
      return true;
    }h = this.getTargetElementFromEventTarget(j.target);k = j.targetTouches[0];if (g) {
      i = window.getSelection();if (i.rangeCount && !i.isCollapsed) {
        return true;
      }if (!e) {
        if (k.identifier && k.identifier === this.lastTouchIdentifier) {
          j.preventDefault();return false;
        }this.lastTouchIdentifier = k.identifier;this.updateScrollParent(h);
      }
    }this.trackingClick = true;this.trackingClickStart = j.timeStamp;this.targetElement = h;this.touchStartX = k.pageX;this.touchStartY = k.pageY;if (j.timeStamp - this.lastClickTime < this.tapDelay) {
      j.preventDefault();
    }return true;
  };d.prototype.touchHasMoved = function (h) {
    var j = h.changedTouches[0],
        i = this.touchBoundary;if (Math.abs(j.pageX - this.touchStartX) > i || Math.abs(j.pageY - this.touchStartY) > i) {
      return true;
    }return false;
  };d.prototype.onTouchMove = function (h) {
    if (!this.trackingClick) {
      return true;
    }if (this.targetElement !== this.getTargetElementFromEventTarget(h.target) || this.touchHasMoved(h)) {
      this.trackingClick = false;this.targetElement = null;
    }return true;
  };d.prototype.findControl = function (h) {
    if (h.control !== undefined) {
      return h.control;
    }if (h.htmlFor) {
      return document.getElementById(h.htmlFor);
    }return h.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
  };d.prototype.onTouchEnd = function (j) {
    var l,
        k,
        i,
        n,
        m,
        h = this.targetElement;if (!this.trackingClick) {
      return true;
    }if (j.timeStamp - this.lastClickTime < this.tapDelay) {
      this.cancelNextClick = true;return true;
    }if (j.timeStamp - this.trackingClickStart > this.tapTimeout) {
      return true;
    }this.cancelNextClick = false;this.lastClickTime = j.timeStamp;k = this.trackingClickStart;this.trackingClick = false;this.trackingClickStart = 0;if (f) {
      m = j.changedTouches[0];h = document.elementFromPoint(m.pageX - window.pageXOffset, m.pageY - window.pageYOffset) || h;h.fastClickScrollParent = this.targetElement.fastClickScrollParent;
    }i = h.tagName.toLowerCase();if (i === "label") {
      l = this.findControl(h);if (l) {
        this.focus(h);if (b) {
          return false;
        }h = l;
      }
    } else {
      if (this.needsFocus(h)) {
        if (j.timeStamp - k > 100 || g && window.top !== window && i === "input") {
          this.targetElement = null;return false;
        }this.focus(h);this.sendClick(h, j);if (!g || i !== "select") {
          this.targetElement = null;j.preventDefault();
        }return false;
      }
    }if (g && !e) {
      n = h.fastClickScrollParent;if (n && n.fastClickLastScrollTop !== n.scrollTop) {
        return true;
      }
    }if (!this.needsClick(h)) {
      j.preventDefault();this.sendClick(h, j);
    }return false;
  };d.prototype.onTouchCancel = function () {
    this.trackingClick = false;this.targetElement = null;
  };d.prototype.onMouse = function (h) {
    if (!this.targetElement) {
      return true;
    }if (h.forwardedTouchEvent) {
      return true;
    }if (!h.cancelable) {
      return true;
    }if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
      if (h.stopImmediatePropagation) {
        h.stopImmediatePropagation();
      } else {
        h.propagationStopped = true;
      }h.stopPropagation();h.preventDefault();return false;
    }return true;
  };d.prototype.onClick = function (h) {
    var i;if (this.trackingClick) {
      this.targetElement = null;this.trackingClick = false;return true;
    }if (h.target.type === "submit" && h.detail === 0) {
      return true;
    }i = this.onMouse(h);if (!i) {
      this.targetElement = null;
    }return i;
  };d.prototype.destroy = function () {
    var h = this.layer;if (b) {
      h.removeEventListener("mouseover", this.onMouse, true);h.removeEventListener("mousedown", this.onMouse, true);h.removeEventListener("mouseup", this.onMouse, true);
    }h.removeEventListener("click", this.onClick, true);h.removeEventListener("touchstart", this.onTouchStart, false);h.removeEventListener("touchmove", this.onTouchMove, false);h.removeEventListener("touchend", this.onTouchEnd, false);h.removeEventListener("touchcancel", this.onTouchCancel, false);
  };d.notNeeded = function (i) {
    var h;var l;var k;var j;if (typeof window.ontouchstart === "undefined") {
      return true;
    }l = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];if (l) {
      if (b) {
        h = document.querySelector("meta[name=viewport]");if (h) {
          if (h.content.indexOf("user-scalable=no") !== -1) {
            return true;
          }if (l > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      } else {
        return true;
      }
    }if (a) {
      k = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if (k[1] >= 10 && k[2] >= 3) {
        h = document.querySelector("meta[name=viewport]");if (h) {
          if (h.content.indexOf("user-scalable=no") !== -1) {
            return true;
          }if (document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      }
    }if (i.style.msTouchAction === "none" || i.style.touchAction === "manipulation") {
      return true;
    }j = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];if (j >= 27) {
      h = document.querySelector("meta[name=viewport]");if (h && (h.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
        return true;
      }
    }if (i.style.touchAction === "none" || i.style.touchAction === "manipulation") {
      return true;
    }return false;
  };d.attach = function (i, h) {
    return new d(i, h);
  };if (typeof define === "function" && babelHelpers.typeof(define.amd) === "object" && define.amd) {
    define(function () {
      return d;
    });
  } else {
    if (typeof module !== "undefined" && module.exports) {
      module.exports = d.attach;module.exports.FastClick = d;
    } else {
      window.FastClick = d;
    }
  }
})();

(function (c) {
  try {
    document.createEvent("TouchEvent");return;
  } catch (f) {}var d = { mousedown: "touchstart", mouseup: "touchend", mousemove: "touchmove" };var a = function a() {
    for (var e in d) {
      document.body.addEventListener(e, function (i) {
        var h = b(d[i.type], i);i.target.dispatchEvent(h);var g = i.target["on" + d[i.type]];if (typeof g === "function") {
          g(i);
        }
      }, false);
    }
  };var b = function b(g, i) {
    var h = document.createEvent("MouseEvents");h.initMouseEvent(g, i.bubbles, i.cancelable, i.view, i.detail, i.screenX, i.screenY, i.clientX, i.clientY, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.button, i.relatedTarget);return h;
  };if (document.readyState === "complete" || document.readyState === "loaded") {
    a();
  } else {
    c.addEventListener("load", a, false);
  }
})(window);

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : babelHelpers.typeof(exports)) === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.moment = factory();
})(this, function () {
  "use strict";
  var hookCallback;function utils_hooks__hooks() {
    return hookCallback.apply(null, arguments);
  }function setHookCallback(callback) {
    hookCallback = callback;
  }function isArray(input) {
    return Object.prototype.toString.call(input) === "[object Array]";
  }function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
  }function map(arr, fn) {
    var res = [],
        i;for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
    }return res;
  }function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }if (hasOwnProp(b, "toString")) {
      a.toString = b.toString;
    }if (hasOwnProp(b, "valueOf")) {
      a.valueOf = b.valueOf;
    }return a;
  }function create_utc__createUTC(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }function defaultParsingFlags() {
    return { empty: false, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: false, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false };
  }function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }return m._pf;
  }function valid__isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m);m._isValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated;if (m._strict) {
        m._isValid = m._isValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
      }
    }return m._isValid;
  }function valid__createInvalid(flags) {
    var m = create_utc__createUTC(NaN);if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }return m;
  }function isUndefined(input) {
    return input === void 0;
  }var momentProperties = utils_hooks__hooks.momentProperties = [];function copyConfig(to, from) {
    var i, prop, val;if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
    }if (!isUndefined(from._i)) {
      to._i = from._i;
    }if (!isUndefined(from._f)) {
      to._f = from._f;
    }if (!isUndefined(from._l)) {
      to._l = from._l;
    }if (!isUndefined(from._strict)) {
      to._strict = from._strict;
    }if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
    }if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
    }if (!isUndefined(from._offset)) {
      to._offset = from._offset;
    }if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
    }if (!isUndefined(from._locale)) {
      to._locale = from._locale;
    }if (momentProperties.length > 0) {
      for (i in momentProperties) {
        prop = momentProperties[i];val = from[prop];if (!isUndefined(val)) {
          to[prop] = val;
        }
      }
    }return to;
  }var updateInProgress = false;function Moment(config) {
    copyConfig(this, config);this._d = new Date(config._d != null ? config._d.getTime() : NaN);if (updateInProgress === false) {
      updateInProgress = true;utils_hooks__hooks.updateOffset(this);updateInProgress = false;
    }
  }function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  }function absFloor(number) {
    if (number < 0) {
      return Math.ceil(number);
    } else {
      return Math.floor(number);
    }
  }function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }return value;
  }function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;for (i = 0; i < len; i++) {
      if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
        diffs++;
      }
    }return diffs + lengthDiff;
  }function Locale() {}var locales = {};var globalLocale;function normalizeLocale(key) {
    return key ? key.toLowerCase().replace("_", "-") : key;
  }function chooseLocale(names) {
    var i = 0,
        j,
        next,
        locale,
        split;while (i < names.length) {
      split = normalizeLocale(names[i]).split("-");j = split.length;next = normalizeLocale(names[i + 1]);next = next ? next.split("-") : null;while (j > 0) {
        locale = loadLocale(split.slice(0, j).join("-"));if (locale) {
          return locale;
        }if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
          break;
        }j--;
      }i++;
    }return null;
  }function loadLocale(name) {
    var oldLocale = null;if (!locales[name] && typeof module !== "undefined" && module && module.exports) {
      try {
        oldLocale = globalLocale._abbr;require("./locale/" + name);locale_locales__getSetGlobalLocale(oldLocale);
      } catch (e) {}
    }return locales[name];
  }function locale_locales__getSetGlobalLocale(key, values) {
    var data;if (key) {
      if (isUndefined(values)) {
        data = locale_locales__getLocale(key);
      } else {
        data = defineLocale(key, values);
      }if (data) {
        globalLocale = data;
      }
    }return globalLocale._abbr;
  }function defineLocale(name, values) {
    if (values !== null) {
      values.abbr = name;locales[name] = locales[name] || new Locale();locales[name].set(values);locale_locales__getSetGlobalLocale(name);return locales[name];
    } else {
      delete locales[name];return null;
    }
  }function locale_locales__getLocale(key) {
    var locale;if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }if (!key) {
      return globalLocale;
    }if (!isArray(key)) {
      locale = loadLocale(key);if (locale) {
        return locale;
      }key = [key];
    }return chooseLocale(key);
  }var aliases = {};function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
  }function normalizeUnits(units) {
    return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  }function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }return normalizedInput;
  }function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
  }function makeGetSet(unit, keepTime) {
    return function (value) {
      if (value != null) {
        get_set__set(this, unit, value);utils_hooks__hooks.updateOffset(this, keepTime);return this;
      } else {
        return get_set__get(this, unit);
      }
    };
  }function get_set__get(mom, unit) {
    return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
  }function get_set__set(mom, unit, value) {
    if (mom.isValid()) {
      mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
    }
  }function getSet(units, value) {
    var unit;if ((typeof units === "undefined" ? "undefined" : babelHelpers.typeof(units)) === "object") {
      for (unit in units) {
        this.set(unit, units[unit]);
      }
    } else {
      units = normalizeUnits(units);if (isFunction(this[units])) {
        return this[units](value);
      }
    }return this;
  }function zeroFill(number, targetLength, forceSign) {
    var absNumber = "" + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;return (sign ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;var formatFunctions = {};var formatTokenFunctions = {};function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;if (typeof callback === "string") {
      func = function func() {
        return this[callback]();
      };
    }if (token) {
      formatTokenFunctions[token] = func;
    }if (padded) {
      formatTokenFunctions[padded[0]] = function () {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }if (ordinal) {
      formatTokenFunctions[ordinal] = function () {
        return this.localeData().ordinal(func.apply(this, arguments), token);
      };
    }
  }function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, "");
    }return input.replace(/\\/g, "");
  }function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
        i,
        length;for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }return function (mom) {
      var output = "";for (i = 0; i < length; i++) {
        output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
      }return output;
    };
  }function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }format = expandFormat(format, m.localeData());formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);return formatFunctions[format](m);
  }function expandFormat(format, locale) {
    var i = 5;function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }localFormattingTokens.lastIndex = 0;while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);localFormattingTokens.lastIndex = 0;i -= 1;
    }return format;
  }var match1 = /\d/;var match2 = /\d\d/;var match3 = /\d{3}/;var match4 = /\d{4}/;var match6 = /[+-]?\d{6}/;var match1to2 = /\d\d?/;var match3to4 = /\d\d\d\d?/;var match5to6 = /\d\d\d\d\d\d?/;var match1to3 = /\d{1,3}/;var match1to4 = /\d{1,4}/;var match1to6 = /[+-]?\d{1,6}/;var matchUnsigned = /\d+/;var matchSigned = /[+-]?\d+/;var matchOffset = /Z|[+-]\d\d:?\d\d/gi;var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;var regexes = {};function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
      return isStrict && strictRegex ? strictRegex : regex;
    };
  }function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
    }return regexes[token](config._strict, config._locale);
  }function unescapeFormat(s) {
    return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    }));
  }function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }var tokens = {};function addParseToken(token, callback) {
    var i,
        func = callback;if (typeof token === "string") {
      token = [token];
    }if (typeof callback === "number") {
      func = function func(input, array) {
        array[callback] = toInt(input);
      };
    }for (i = 0; i < token.length; i++) {
      tokens[token[i]] = func;
    }
  }function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
      config._w = config._w || {};callback(input, config._w, config, token);
    });
  }function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
    }
  }var YEAR = 0;var MONTH = 1;var DATE = 2;var HOUR = 3;var MINUTE = 4;var SECOND = 5;var MILLISECOND = 6;var WEEK = 7;var WEEKDAY = 8;function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  }addFormatToken("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  });addFormatToken("MMM", 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
  });addFormatToken("MMMM", 0, 0, function (format) {
    return this.localeData().months(this, format);
  });addUnitAlias("month", "M");addRegexToken("M", match1to2);addRegexToken("MM", match1to2, match2);addRegexToken("MMM", function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });addRegexToken("MMMM", function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });addParseToken(["M", "MM"], function (input, array) {
    array[MONTH] = toInt(input) - 1;
  });addParseToken(["MMM", "MMMM"], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");function localeMonths(m, format) {
    return isArray(this._months) ? this._months[m.month()] : this._months[MONTHS_IN_FORMAT.test(format) ? "format" : "standalone"][m.month()];
  }var defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function localeMonthsShort(m, format) {
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? "format" : "standalone"][m.month()];
  }function localeMonthsParse(monthName, format, strict) {
    var i, mom, regex;if (!this._monthsParse) {
      this._monthsParse = [];this._longMonthsParse = [];this._shortMonthsParse = [];
    }for (i = 0; i < 12; i++) {
      mom = create_utc__createUTC([2e3, i]);if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
      }if (!strict && !this._monthsParse[i]) {
        regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
      }if (strict && format === "MMMM" && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format === "MMM" && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }function setMonth(mom, value) {
    var dayOfMonth;if (!mom.isValid()) {
      return mom;
    }if (typeof value === "string") {
      value = mom.localeData().monthsParse(value);if (typeof value !== "number") {
        return mom;
      }
    }dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);return mom;
  }function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);utils_hooks__hooks.updateOffset(this, true);return this;
    } else {
      return get_set__get(this, "Month");
    }
  }function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }var defaultMonthsShortRegex = matchWord;function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }var defaultMonthsRegex = matchWord;function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;for (i = 0; i < 12; i++) {
      mom = create_utc__createUTC([2e3, i]);shortPieces.push(this.monthsShort(mom, ""));longPieces.push(this.months(mom, ""));mixedPieces.push(this.months(mom, ""));mixedPieces.push(this.monthsShort(mom, ""));
    }shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);longPieces[i] = regexEscape(longPieces[i]);mixedPieces[i] = regexEscape(mixedPieces[i]);
    }this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");this._monthsShortRegex = this._monthsRegex;this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")$", "i");this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")$", "i");
  }function checkOverflow(m) {
    var overflow;var a = m._a;if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }getParsingFlags(m).overflow = overflow;
    }return m;
  }function warn(msg) {
    if (utils_hooks__hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
      console.warn("Deprecation warning: " + msg);
    }
  }function deprecate(msg, fn) {
    var firstTime = true;return extend(function () {
      if (firstTime) {
        warn(msg + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + new Error().stack);firstTime = false;
      }return fn.apply(this, arguments);
    }, fn);
  }var deprecations = {};function deprecateSimple(name, msg) {
    if (!deprecations[name]) {
      warn(msg);deprecations[name] = true;
    }
  }utils_hooks__hooks.suppressDeprecationWarnings = false;var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;var isoDates = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, false], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, false], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, false], ["YYYYDDD", /\d{7}/]];var isoTimes = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]];var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;function configFromISO(config) {
    var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;if (match) {
      getParsingFlags(config).iso = true;for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];allowTime = isoDates[i][2] !== false;break;
        }
      }if (dateFormat == null) {
        config._isValid = false;return;
      }if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            timeFormat = (match[2] || " ") + isoTimes[i][0];break;
          }
        }if (timeFormat == null) {
          config._isValid = false;return;
        }
      }if (!allowTime && timeFormat != null) {
        config._isValid = false;return;
      }if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = "Z";
        } else {
          config._isValid = false;return;
        }
      }config._f = dateFormat + (timeFormat || "") + (tzFormat || "");configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);if (matched !== null) {
      config._d = new Date(+matched[1]);return;
    }configFromISO(config);if (config._isValid === false) {
      delete config._isValid;utils_hooks__hooks.createFromInputFallback(config);
    }
  }utils_hooks__hooks.createFromInputFallback = deprecate("moment construction falls back to js Date. This is " + "discouraged and will be removed in upcoming major " + "release. Please refer to " + "https://github.com/moment/moment/issues/1407 for more info.", function (config) {
    config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
  });function createDate(y, m, d, h, M, s, ms) {
    var date = new Date(y, m, d, h, M, s, ms);if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }return date;
  }function createUTCDate(y) {
    var date = new Date(Date.UTC.apply(null, arguments));if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }return date;
  }addFormatToken("Y", 0, 0, function () {
    var y = this.year();return y <= 9999 ? "" + y : "+" + y;
  });addFormatToken(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  });addFormatToken(0, ["YYYY", 4], 0, "year");addFormatToken(0, ["YYYYY", 5], 0, "year");addFormatToken(0, ["YYYYYY", 6, true], 0, "year");addUnitAlias("year", "y");addRegexToken("Y", matchSigned);addRegexToken("YY", match1to2, match2);addRegexToken("YYYY", match1to4, match4);addRegexToken("YYYYY", match1to6, match6);addRegexToken("YYYYYY", match1to6, match6);addParseToken(["YYYYY", "YYYYYY"], YEAR);addParseToken("YYYY", function (input, array) {
    array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
  });addParseToken("YY", function (input, array) {
    array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
  });addParseToken("Y", function (input, array) {
    array[YEAR] = parseInt(input, 10);
  });function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }utils_hooks__hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
  };var getSetYear = makeGetSet("FullYear", false);function getIsLeapYear() {
    return isLeapYear(this.year());
  }function firstWeekOffset(year, dow, doy) {
    var fwd = 7 + dow - doy,
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;return -fwdlw + fwd - 1;
  }function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;if (dayOfYear <= 0) {
      resYear = year - 1;resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;resDayOfYear = dayOfYear;
    }return { year: resYear, dayOfYear: resDayOfYear };
  }function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;if (week < 1) {
      resYear = mom.year() - 1;resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);resYear = mom.year() + 1;
    } else {
      resYear = mom.year();resWeek = week;
    }return { week: resWeek, year: resYear };
  }function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }function defaults(a, b, c) {
    if (a != null) {
      return a;
    }if (b != null) {
      return b;
    }return c;
  }function currentDateArray(config) {
    var nowValue = new Date(utils_hooks__hooks.now());if (config._useUTC) {
      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }function configFromArray(config) {
    var i,
        date,
        input = [],
        currentDate,
        yearToUse;if (config._d) {
      return;
    }currentDate = currentDateArray(config);if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }if (config._dayOfYear) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);if (config._dayOfYear > daysInYear(yearToUse)) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }date = createUTCDate(yearToUse, 0, config._dayOfYear);config._a[MONTH] = date.getUTCMonth();config._a[DATE] = date.getUTCDate();
    }for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }for (; i < 7; i++) {
      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
    }if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;config._a[HOUR] = 0;
    }config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }if (config._nextDay) {
      config._a[HOUR] = 24;
    }
  }function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;w = config._w;if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;doy = 4;weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);week = defaults(w.W, 1);weekday = defaults(w.E, 1);if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;doy = config._locale._week.doy;weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);week = defaults(w.w, 1);if (w.d != null) {
        weekday = w.d;if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        weekday = w.e + dow;if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        weekday = dow;
      }
    }if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);config._a[YEAR] = temp.year;config._dayOfYear = temp.dayOfYear;
    }
  }utils_hooks__hooks.ISO_8601 = function () {};function configFromStringAndFormat(config) {
    if (config._f === utils_hooks__hooks.ISO_8601) {
      configFromISO(config);return;
    }config._a = [];getParsingFlags(config).empty = true;var string = "" + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];for (i = 0; i < tokens.length; i++) {
      token = tokens[i];parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }string = string.slice(string.indexOf(parsedInput) + parsedInput.length);totalParsedInputLength += parsedInput.length;
      }if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token);
        }addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token);
      }
    }getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }if (getParsingFlags(config).bigHour === true && config._a[HOUR] <= 12 && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = undefined;
    }config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);configFromArray(config);checkOverflow(config);
  }function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;if (meridiem == null) {
      return hour;
    }if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      isPm = locale.isPM(meridiem);if (isPm && hour < 12) {
        hour += 12;
      }if (!isPm && hour === 12) {
        hour = 0;
      }return hour;
    } else {
      return hour;
    }
  }function configFromStringAndArray(config) {
    var tempConfig, bestMoment, scoreToBeat, i, currentScore;if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;config._d = new Date(NaN);return;
    }for (i = 0; i < config._f.length; i++) {
      currentScore = 0;tempConfig = copyConfig({}, config);if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }tempConfig._f = config._f[i];configFromStringAndFormat(tempConfig);if (!valid__isValid(tempConfig)) {
        continue;
      }currentScore += getParsingFlags(tempConfig).charsLeftOver;currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;getParsingFlags(tempConfig).score = currentScore;if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;bestMoment = tempConfig;
      }
    }extend(config, bestMoment || tempConfig);
  }function configFromObject(config) {
    if (config._d) {
      return;
    }var i = normalizeObjectUnits(config._i);config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
      return obj && parseInt(obj, 10);
    });configFromArray(config);
  }function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));if (res._nextDay) {
      res.add(1, "d");res._nextDay = undefined;
    }return res;
  }function prepareConfig(config) {
    var input = config._i,
        format = config._f;config._locale = config._locale || locale_locales__getLocale(config._l);if (input === null || format === undefined && input === "") {
      return valid__createInvalid({ nullInput: true });
    }if (typeof input === "string") {
      config._i = input = config._locale.preparse(input);
    }if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    } else if (isDate(input)) {
      config._d = input;
    } else {
      configFromInput(config);
    }if (!valid__isValid(config)) {
      config._d = null;
    }return config;
  }function configFromInput(config) {
    var input = config._i;if (input === undefined) {
      config._d = new Date(utils_hooks__hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(+input);
    } else if (typeof input === "string") {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function (obj) {
        return parseInt(obj, 10);
      });configFromArray(config);
    } else if ((typeof input === "undefined" ? "undefined" : babelHelpers.typeof(input)) === "object") {
      configFromObject(config);
    } else if (typeof input === "number") {
      config._d = new Date(input);
    } else {
      utils_hooks__hooks.createFromInputFallback(config);
    }
  }function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};if (typeof locale === "boolean") {
      strict = locale;locale = undefined;
    }c._isAMomentObject = true;c._useUTC = c._isUTC = isUTC;c._l = locale;c._i = input;c._f = format;c._strict = strict;return createFromConfig(c);
  }function local__createLocal(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }var prototypeMin = deprecate("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
    var other = local__createLocal.apply(null, arguments);if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return valid__createInvalid();
    }
  });var prototypeMax = deprecate("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
    var other = local__createLocal.apply(null, arguments);if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return valid__createInvalid();
    }
  });function pickBy(fn, moments) {
    var res, i;if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }if (!moments.length) {
      return local__createLocal();
    }res = moments[0];for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }return res;
  }function min() {
    var args = [].slice.call(arguments, 0);return pickBy("isBefore", args);
  }function max() {
    var args = [].slice.call(arguments, 0);return pickBy("isAfter", args);
  }var now = function now() {
    return Date.now ? Date.now() : +new Date();
  };function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 36e5;this._days = +days + weeks * 7;this._months = +months + quarters * 3 + years * 12;this._data = {};this._locale = locale_locales__getLocale();this._bubble();
  }function isDuration(obj) {
    return obj instanceof Duration;
  }function offset(token, separator) {
    addFormatToken(token, 0, 0, function () {
      var offset = this.utcOffset();var sign = "+";if (offset < 0) {
        offset = -offset;sign = "-";
      }return sign + zeroFill(~ ~(offset / 60), 2) + separator + zeroFill(~ ~offset % 60, 2);
    });
  }offset("Z", ":");offset("ZZ", "");addRegexToken("Z", matchShortOffset);addRegexToken("ZZ", matchShortOffset);addParseToken(["Z", "ZZ"], function (input, array, config) {
    config._useUTC = true;config._tzm = offsetFromString(matchShortOffset, input);
  });var chunkOffset = /([\+\-]|\d\d)/gi;function offsetFromString(matcher, string) {
    var matches = (string || "").match(matcher) || [];var chunk = matches[matches.length - 1] || [];var parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];var minutes = +(parts[1] * 60) + toInt(parts[2]);return parts[0] === "+" ? minutes : -minutes;
  }function cloneWithOffset(input, model) {
    var res, diff;if (model._isUTC) {
      res = model.clone();diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - +res;res._d.setTime(+res._d + diff);utils_hooks__hooks.updateOffset(res, false);return res;
    } else {
      return local__createLocal(input).local();
    }
  }function getDateOffset(m) {
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
  }utils_hooks__hooks.updateOffset = function () {};function getSetOffset(input, keepLocalTime) {
    var offset = this._offset || 0,
        localAdjust;if (!this.isValid()) {
      return input != null ? this : NaN;
    }if (input != null) {
      if (typeof input === "string") {
        input = offsetFromString(matchShortOffset, input);
      } else if (Math.abs(input) < 16) {
        input = input * 60;
      }if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }this._offset = input;this._isUTC = true;if (localAdjust != null) {
        this.add(localAdjust, "m");
      }if (offset !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          add_subtract__addSubtract(this, create__createDuration(input - offset, "m"), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;utils_hooks__hooks.updateOffset(this, true);this._changeInProgress = null;
        }
      }return this;
    } else {
      return this._isUTC ? offset : getDateOffset(this);
    }
  }function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== "string") {
        input = -input;
      }this.utcOffset(input, keepLocalTime);return this;
    } else {
      return -this.utcOffset();
    }
  }function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);this._isUTC = false;if (keepLocalTime) {
        this.subtract(getDateOffset(this), "m");
      }
    }return this;
  }function setOffsetToParsedOffset() {
    if (this._tzm) {
      this.utcOffset(this._tzm);
    } else if (typeof this._i === "string") {
      this.utcOffset(offsetFromString(matchOffset, this._i));
    }return this;
  }function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }input = input ? local__createLocal(input).utcOffset() : 0;return (this.utcOffset() - input) % 60 === 0;
  }function isDaylightSavingTime() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }var c = {};copyConfig(c, this);c = prepareConfig(c);if (c._a) {
      var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }return this._isDSTShifted;
  }function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }var aspNetRegex = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;var isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;function create__createDuration(input, key) {
    var duration = input,
        match = null,
        sign,
        ret,
        diffRes;if (isDuration(input)) {
      duration = { ms: input._milliseconds, d: input._days, M: input._months };
    } else if (typeof input === "number") {
      duration = {};if (key) {
        duration[key] = input;
      } else {
        duration.milliseconds = input;
      }
    } else if (!!(match = aspNetRegex.exec(input))) {
      sign = match[1] === "-" ? -1 : 1;duration = { y: 0, d: toInt(match[DATE]) * sign, h: toInt(match[HOUR]) * sign, m: toInt(match[MINUTE]) * sign, s: toInt(match[SECOND]) * sign, ms: toInt(match[MILLISECOND]) * sign };
    } else if (!!(match = isoRegex.exec(input))) {
      sign = match[1] === "-" ? -1 : 1;duration = { y: parseIso(match[2], sign), M: parseIso(match[3], sign), d: parseIso(match[4], sign), h: parseIso(match[5], sign), m: parseIso(match[6], sign), s: parseIso(match[7], sign), w: parseIso(match[8], sign) };
    } else if (duration == null) {
      duration = {};
    } else if ((typeof duration === "undefined" ? "undefined" : babelHelpers.typeof(duration)) === "object" && ("from" in duration || "to" in duration)) {
      diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));duration = {};duration.ms = diffRes.milliseconds;duration.M = diffRes.months;
    }ret = new Duration(duration);if (isDuration(input) && hasOwnProp(input, "_locale")) {
      ret._locale = input._locale;
    }return ret;
  }create__createDuration.fn = Duration.prototype;function parseIso(inp, sign) {
    var res = inp && parseFloat(inp.replace(",", "."));return (isNaN(res) ? 0 : res) * sign;
  }function positiveMomentsDifference(base, other) {
    var res = { milliseconds: 0, months: 0 };res.months = other.month() - base.month() + (other.year() - base.year()) * 12;if (base.clone().add(res.months, "M").isAfter(other)) {
      --res.months;
    }res.milliseconds = +other - +base.clone().add(res.months, "M");return res;
  }function momentsDifference(base, other) {
    var res;if (!(base.isValid() && other.isValid())) {
      return { milliseconds: 0, months: 0 };
    }other = cloneWithOffset(other, base);if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);res.milliseconds = -res.milliseconds;res.months = -res.months;
    }return res;
  }function createAdder(direction, name) {
    return function (val, period) {
      var dur, tmp;if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period).");tmp = val;val = period;period = tmp;
      }val = typeof val === "string" ? +val : val;dur = create__createDuration(val, period);add_subtract__addSubtract(this, dur, direction);return this;
    };
  }function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = duration._days,
        months = duration._months;if (!mom.isValid()) {
      return;
    }updateOffset = updateOffset == null ? true : updateOffset;if (milliseconds) {
      mom._d.setTime(+mom._d + milliseconds * isAdding);
    }if (days) {
      get_set__set(mom, "Date", get_set__get(mom, "Date") + days * isAdding);
    }if (months) {
      setMonth(mom, get_set__get(mom, "Month") + months * isAdding);
    }if (updateOffset) {
      utils_hooks__hooks.updateOffset(mom, days || months);
    }
  }var add_subtract__add = createAdder(1, "add");var add_subtract__subtract = createAdder(-1, "subtract");function moment_calendar__calendar(time, formats) {
    var now = time || local__createLocal(),
        sod = cloneWithOffset(now, this).startOf("day"),
        diff = this.diff(sod, "days", true),
        format = diff < -6 ? "sameElse" : diff < -1 ? "lastWeek" : diff < 0 ? "lastDay" : diff < 1 ? "sameDay" : diff < 2 ? "nextDay" : diff < 7 ? "nextWeek" : "sameElse";var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
  }function clone() {
    return new Moment(this);
  }function isAfter(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input);if (!(this.isValid() && localInput.isValid())) {
      return false;
    }units = normalizeUnits(!isUndefined(units) ? units : "millisecond");if (units === "millisecond") {
      return +this > +localInput;
    } else {
      return +localInput < +this.clone().startOf(units);
    }
  }function isBefore(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input);if (!(this.isValid() && localInput.isValid())) {
      return false;
    }units = normalizeUnits(!isUndefined(units) ? units : "millisecond");if (units === "millisecond") {
      return +this < +localInput;
    } else {
      return +this.clone().endOf(units) < +localInput;
    }
  }function isBetween(from, to, units) {
    return this.isAfter(from, units) && this.isBefore(to, units);
  }function isSame(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input),
        inputMs;if (!(this.isValid() && localInput.isValid())) {
      return false;
    }units = normalizeUnits(units || "millisecond");if (units === "millisecond") {
      return +this === +localInput;
    } else {
      inputMs = +localInput;return +this.clone().startOf(units) <= inputMs && inputMs <= +this.clone().endOf(units);
    }
  }function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }function diff(input, units, asFloat) {
    var that, zoneDelta, delta, output;if (!this.isValid()) {
      return NaN;
    }that = cloneWithOffset(input, this);if (!that.isValid()) {
      return NaN;
    }zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;units = normalizeUnits(units);if (units === "year" || units === "month" || units === "quarter") {
      output = monthDiff(this, that);if (units === "quarter") {
        output = output / 3;
      } else if (units === "year") {
        output = output / 12;
      }
    } else {
      delta = this - that;output = units === "second" ? delta / 1e3 : units === "minute" ? delta / 6e4 : units === "hour" ? delta / 36e5 : units === "day" ? (delta - zoneDelta) / 864e5 : units === "week" ? (delta - zoneDelta) / 6048e5 : delta;
    }return asFloat ? output : absFloor(output);
  }function monthDiff(a, b) {
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
        anchor = a.clone().add(wholeMonthDiff, "months"),
        anchor2,
        adjust;if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, "months");adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, "months");adjust = (b - anchor) / (anchor2 - anchor);
    }return -(wholeMonthDiff + adjust);
  }utils_hooks__hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";function toString() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }function moment_format__toISOString() {
    var m = this.clone().utc();if (0 < m.year() && m.year() <= 9999) {
      if (isFunction(Date.prototype.toISOString)) {
        return this.toDate().toISOString();
      } else {
        return formatMoment(m, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
      }
    } else {
      return formatMoment(m, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    }
  }function format(inputString) {
    var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);return this.localeData().postformat(output);
  }function from(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || local__createLocal(time).isValid())) {
      return create__createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }function fromNow(withoutSuffix) {
    return this.from(local__createLocal(), withoutSuffix);
  }function to(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || local__createLocal(time).isValid())) {
      return create__createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }function toNow(withoutSuffix) {
    return this.to(local__createLocal(), withoutSuffix);
  }function locale(key) {
    var newLocaleData;if (key === undefined) {
      return this._locale._abbr;
    } else {
      newLocaleData = locale_locales__getLocale(key);if (newLocaleData != null) {
        this._locale = newLocaleData;
      }return this;
    }
  }var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (key) {
    if (key === undefined) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  });function localeData() {
    return this._locale;
  }function startOf(units) {
    units = normalizeUnits(units);switch (units) {case "year":
        this.month(0);case "quarter":case "month":
        this.date(1);case "week":case "isoWeek":case "day":
        this.hours(0);case "hour":
        this.minutes(0);case "minute":
        this.seconds(0);case "second":
        this.milliseconds(0);}if (units === "week") {
      this.weekday(0);
    }if (units === "isoWeek") {
      this.isoWeekday(1);
    }if (units === "quarter") {
      this.month(Math.floor(this.month() / 3) * 3);
    }return this;
  }function endOf(units) {
    units = normalizeUnits(units);if (units === undefined || units === "millisecond") {
      return this;
    }return this.startOf(units).add(1, units === "isoWeek" ? "week" : units).subtract(1, "ms");
  }function to_type__valueOf() {
    return +this._d - (this._offset || 0) * 6e4;
  }function unix() {
    return Math.floor(+this / 1e3);
  }function toDate() {
    return this._offset ? new Date(+this) : this._d;
  }function toArray() {
    var m = this;return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  }function toObject() {
    var m = this;return { years: m.year(), months: m.month(), date: m.date(), hours: m.hours(), minutes: m.minutes(), seconds: m.seconds(), milliseconds: m.milliseconds() };
  }function toJSON() {
    return this.isValid() ? this.toISOString() : "null";
  }function moment_valid__isValid() {
    return valid__isValid(this);
  }function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }function invalidAt() {
    return getParsingFlags(this).overflow;
  }function creationData() {
    return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
  }addFormatToken(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  });addFormatToken(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  });function addWeekYearFormatToken(token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }addWeekYearFormatToken("gggg", "weekYear");addWeekYearFormatToken("ggggg", "weekYear");addWeekYearFormatToken("GGGG", "isoWeekYear");addWeekYearFormatToken("GGGGG", "isoWeekYear");addUnitAlias("weekYear", "gg");addUnitAlias("isoWeekYear", "GG");addRegexToken("G", matchSigned);addRegexToken("g", matchSigned);addRegexToken("GG", match1to2, match2);addRegexToken("gg", match1to2, match2);addRegexToken("GGGG", match1to4, match4);addRegexToken("gggg", match1to4, match4);addRegexToken("GGGGG", match1to6, match6);addRegexToken("ggggg", match1to6, match6);addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
  });addWeekParseToken(["gg", "GG"], function (input, week, config, token) {
    week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
  });function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }function getWeeksInYear() {
    var weekInfo = this.localeData()._week;return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);if (week > weeksTarget) {
        week = weeksTarget;
      }return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);this.year(date.getUTCFullYear());this.month(date.getUTCMonth());this.date(date.getUTCDate());return this;
  }addFormatToken("Q", 0, "Qo", "quarter");addUnitAlias("quarter", "Q");addRegexToken("Q", match1);addParseToken("Q", function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }addFormatToken("w", ["ww", 2], "wo", "week");addFormatToken("W", ["WW", 2], "Wo", "isoWeek");addUnitAlias("week", "w");addUnitAlias("isoWeek", "W");addRegexToken("w", match1to2);addRegexToken("ww", match1to2, match2);addRegexToken("W", match1to2);addRegexToken("WW", match1to2, match2);addWeekParseToken(["w", "ww", "W", "WW"], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
  });function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }var defaultLocaleWeek = { dow: 0, doy: 6 };function localeFirstDayOfWeek() {
    return this._week.dow;
  }function localeFirstDayOfYear() {
    return this._week.doy;
  }function getSetWeek(input) {
    var week = this.localeData().week(this);return input == null ? week : this.add((input - week) * 7, "d");
  }function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;return input == null ? week : this.add((input - week) * 7, "d");
  }addFormatToken("D", ["DD", 2], "Do", "date");addUnitAlias("date", "D");addRegexToken("D", match1to2);addRegexToken("DD", match1to2, match2);addRegexToken("Do", function (isStrict, locale) {
    return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
  });addParseToken(["D", "DD"], DATE);addParseToken("Do", function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
  });var getSetDayOfMonth = makeGetSet("Date", true);addFormatToken("d", 0, "do", "day");addFormatToken("dd", 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
  });addFormatToken("ddd", 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
  });addFormatToken("dddd", 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
  });addFormatToken("e", 0, 0, "weekday");addFormatToken("E", 0, 0, "isoWeekday");addUnitAlias("day", "d");addUnitAlias("weekday", "e");addUnitAlias("isoWeekday", "E");addRegexToken("d", match1to2);addRegexToken("e", match1to2);addRegexToken("E", match1to2);addRegexToken("dd", matchWord);addRegexToken("ddd", matchWord);addRegexToken("dddd", matchWord);addWeekParseToken(["dd", "ddd", "dddd"], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });addWeekParseToken(["d", "e", "E"], function (input, week, config, token) {
    week[token] = toInt(input);
  });function parseWeekday(input, locale) {
    if (typeof input !== "string") {
      return input;
    }if (!isNaN(input)) {
      return parseInt(input, 10);
    }input = locale.weekdaysParse(input);if (typeof input === "number") {
      return input;
    }return null;
  }var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");function localeWeekdays(m, format) {
    return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? "format" : "standalone"][m.day()];
  }var defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");function localeWeekdaysShort(m) {
    return this._weekdaysShort[m.day()];
  }var defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");function localeWeekdaysMin(m) {
    return this._weekdaysMin[m.day()];
  }function localeWeekdaysParse(weekdayName, format, strict) {
    var i, mom, regex;if (!this._weekdaysParse) {
      this._weekdaysParse = [];this._minWeekdaysParse = [];this._shortWeekdaysParse = [];this._fullWeekdaysParse = [];
    }for (i = 0; i < 7; i++) {
      mom = local__createLocal([2e3, 1]).day(i);if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", ".?") + "$", "i");this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", ".?") + "$", "i");this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", ".?") + "$", "i");
      }if (!this._weekdaysParse[i]) {
        regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
      }if (strict && format === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();if (input != null) {
      input = parseWeekday(input, this.localeData());return this.add(input - day, "d");
    } else {
      return day;
    }
  }function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;return input == null ? weekday : this.add(input - weekday, "d");
  }function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
  }addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");addUnitAlias("dayOfYear", "DDD");addRegexToken("DDD", match1to3);addRegexToken("DDDD", match3);addParseToken(["DDD", "DDDD"], function (input, array, config) {
    config._dayOfYear = toInt(input);
  });function getSetDayOfYear(input) {
    var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
  }function hFormat() {
    return this.hours() % 12 || 12;
  }addFormatToken("H", ["HH", 2], 0, "hour");addFormatToken("h", ["hh", 2], 0, hFormat);addFormatToken("hmm", 0, 0, function () {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });addFormatToken("hmmss", 0, 0, function () {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });addFormatToken("Hmm", 0, 0, function () {
    return "" + this.hours() + zeroFill(this.minutes(), 2);
  });addFormatToken("Hmmss", 0, 0, function () {
    return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });function meridiem(token, lowercase) {
    addFormatToken(token, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
  }meridiem("a", true);meridiem("A", false);addUnitAlias("hour", "h");function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }addRegexToken("a", matchMeridiem);addRegexToken("A", matchMeridiem);addRegexToken("H", match1to2);addRegexToken("h", match1to2);addRegexToken("HH", match1to2, match2);addRegexToken("hh", match1to2, match2);addRegexToken("hmm", match3to4);addRegexToken("hmmss", match5to6);addRegexToken("Hmm", match3to4);addRegexToken("Hmmss", match5to6);addParseToken(["H", "HH"], HOUR);addParseToken(["a", "A"], function (input, array, config) {
    config._isPm = config._locale.isPM(input);config._meridiem = input;
  });addParseToken(["h", "hh"], function (input, array, config) {
    array[HOUR] = toInt(input);getParsingFlags(config).bigHour = true;
  });addParseToken("hmm", function (input, array, config) {
    var pos = input.length - 2;array[HOUR] = toInt(input.substr(0, pos));array[MINUTE] = toInt(input.substr(pos));getParsingFlags(config).bigHour = true;
  });addParseToken("hmmss", function (input, array, config) {
    var pos1 = input.length - 4;var pos2 = input.length - 2;array[HOUR] = toInt(input.substr(0, pos1));array[MINUTE] = toInt(input.substr(pos1, 2));array[SECOND] = toInt(input.substr(pos2));getParsingFlags(config).bigHour = true;
  });addParseToken("Hmm", function (input, array, config) {
    var pos = input.length - 2;array[HOUR] = toInt(input.substr(0, pos));array[MINUTE] = toInt(input.substr(pos));
  });addParseToken("Hmmss", function (input, array, config) {
    var pos1 = input.length - 4;var pos2 = input.length - 2;array[HOUR] = toInt(input.substr(0, pos1));array[MINUTE] = toInt(input.substr(pos1, 2));array[SECOND] = toInt(input.substr(pos2));
  });function localeIsPM(input) {
    return (input + "").toLowerCase().charAt(0) === "p";
  }var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? "pm" : "PM";
    } else {
      return isLower ? "am" : "AM";
    }
  }var getSetHour = makeGetSet("Hours", true);addFormatToken("m", ["mm", 2], 0, "minute");addUnitAlias("minute", "m");addRegexToken("m", match1to2);addRegexToken("mm", match1to2, match2);addParseToken(["m", "mm"], MINUTE);var getSetMinute = makeGetSet("Minutes", false);addFormatToken("s", ["ss", 2], 0, "second");addUnitAlias("second", "s");addRegexToken("s", match1to2);addRegexToken("ss", match1to2, match2);addParseToken(["s", "ss"], SECOND);var getSetSecond = makeGetSet("Seconds", false);addFormatToken("S", 0, 0, function () {
    return ~ ~(this.millisecond() / 100);
  });addFormatToken(0, ["SS", 2], 0, function () {
    return ~ ~(this.millisecond() / 10);
  });addFormatToken(0, ["SSS", 3], 0, "millisecond");addFormatToken(0, ["SSSS", 4], 0, function () {
    return this.millisecond() * 10;
  });addFormatToken(0, ["SSSSS", 5], 0, function () {
    return this.millisecond() * 100;
  });addFormatToken(0, ["SSSSSS", 6], 0, function () {
    return this.millisecond() * 1e3;
  });addFormatToken(0, ["SSSSSSS", 7], 0, function () {
    return this.millisecond() * 1e4;
  });addFormatToken(0, ["SSSSSSSS", 8], 0, function () {
    return this.millisecond() * 1e5;
  });addFormatToken(0, ["SSSSSSSSS", 9], 0, function () {
    return this.millisecond() * 1e6;
  });addUnitAlias("millisecond", "ms");addRegexToken("S", match1to3, match1);addRegexToken("SS", match1to3, match2);addRegexToken("SSS", match1to3, match3);var token;for (token = "SSSS"; token.length <= 9; token += "S") {
    addRegexToken(token, matchUnsigned);
  }function parseMs(input, array) {
    array[MILLISECOND] = toInt(("0." + input) * 1e3);
  }for (token = "S"; token.length <= 9; token += "S") {
    addParseToken(token, parseMs);
  }var getSetMillisecond = makeGetSet("Milliseconds", false);addFormatToken("z", 0, 0, "zoneAbbr");addFormatToken("zz", 0, 0, "zoneName");function getZoneAbbr() {
    return this._isUTC ? "UTC" : "";
  }function getZoneName() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }var momentPrototype__proto = Moment.prototype;momentPrototype__proto.add = add_subtract__add;momentPrototype__proto.calendar = moment_calendar__calendar;momentPrototype__proto.clone = clone;momentPrototype__proto.diff = diff;momentPrototype__proto.endOf = endOf;momentPrototype__proto.format = format;momentPrototype__proto.from = from;momentPrototype__proto.fromNow = fromNow;momentPrototype__proto.to = to;momentPrototype__proto.toNow = toNow;momentPrototype__proto.get = getSet;momentPrototype__proto.invalidAt = invalidAt;momentPrototype__proto.isAfter = isAfter;momentPrototype__proto.isBefore = isBefore;momentPrototype__proto.isBetween = isBetween;momentPrototype__proto.isSame = isSame;momentPrototype__proto.isSameOrAfter = isSameOrAfter;momentPrototype__proto.isSameOrBefore = isSameOrBefore;momentPrototype__proto.isValid = moment_valid__isValid;momentPrototype__proto.lang = lang;momentPrototype__proto.locale = locale;momentPrototype__proto.localeData = localeData;momentPrototype__proto.max = prototypeMax;momentPrototype__proto.min = prototypeMin;momentPrototype__proto.parsingFlags = parsingFlags;momentPrototype__proto.set = getSet;momentPrototype__proto.startOf = startOf;momentPrototype__proto.subtract = add_subtract__subtract;momentPrototype__proto.toArray = toArray;momentPrototype__proto.toObject = toObject;momentPrototype__proto.toDate = toDate;momentPrototype__proto.toISOString = moment_format__toISOString;momentPrototype__proto.toJSON = toJSON;momentPrototype__proto.toString = toString;momentPrototype__proto.unix = unix;momentPrototype__proto.valueOf = to_type__valueOf;momentPrototype__proto.creationData = creationData;momentPrototype__proto.year = getSetYear;momentPrototype__proto.isLeapYear = getIsLeapYear;momentPrototype__proto.weekYear = getSetWeekYear;momentPrototype__proto.isoWeekYear = getSetISOWeekYear;momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;momentPrototype__proto.month = getSetMonth;momentPrototype__proto.daysInMonth = getDaysInMonth;momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek;momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek;momentPrototype__proto.weeksInYear = getWeeksInYear;momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;momentPrototype__proto.date = getSetDayOfMonth;momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek;momentPrototype__proto.weekday = getSetLocaleDayOfWeek;momentPrototype__proto.isoWeekday = getSetISODayOfWeek;momentPrototype__proto.dayOfYear = getSetDayOfYear;momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;momentPrototype__proto.utcOffset = getSetOffset;momentPrototype__proto.utc = setOffsetToUTC;momentPrototype__proto.local = setOffsetToLocal;momentPrototype__proto.parseZone = setOffsetToParsedOffset;momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;momentPrototype__proto.isDST = isDaylightSavingTime;momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted;momentPrototype__proto.isLocal = isLocal;momentPrototype__proto.isUtcOffset = isUtcOffset;momentPrototype__proto.isUtc = isUtc;momentPrototype__proto.isUTC = isUtc;momentPrototype__proto.zoneAbbr = getZoneAbbr;momentPrototype__proto.zoneName = getZoneName;momentPrototype__proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);momentPrototype__proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);momentPrototype__proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);momentPrototype__proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", getSetZone);var momentPrototype = momentPrototype__proto;function moment__createUnix(input) {
    return local__createLocal(input * 1e3);
  }function moment__createInZone() {
    return local__createLocal.apply(null, arguments).parseZone();
  }var defaultCalendar = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" };function locale_calendar__calendar(key, mom, now) {
    var output = this._calendar[key];return isFunction(output) ? output.call(mom, now) : output;
  }var defaultLongDateFormat = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };function longDateFormat(key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];if (format || !formatUpper) {
      return format;
    }this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
      return val.slice(1);
    });return this._longDateFormat[key];
  }var defaultInvalidDate = "Invalid date";function invalidDate() {
    return this._invalidDate;
  }var defaultOrdinal = "%d";var defaultOrdinalParse = /\d{1,2}/;function ordinal(number) {
    return this._ordinal.replace("%d", number);
  }function preParsePostFormat(string) {
    return string;
  }var defaultRelativeTime = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };function relative__relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? "future" : "past"];return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }function locale_set__set(config) {
    var prop, i;for (i in config) {
      prop = config[i];if (isFunction(prop)) {
        this[i] = prop;
      } else {
        this["_" + i] = prop;
      }
    }this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source);
  }var prototype__proto = Locale.prototype;prototype__proto._calendar = defaultCalendar;prototype__proto.calendar = locale_calendar__calendar;prototype__proto._longDateFormat = defaultLongDateFormat;prototype__proto.longDateFormat = longDateFormat;prototype__proto._invalidDate = defaultInvalidDate;prototype__proto.invalidDate = invalidDate;prototype__proto._ordinal = defaultOrdinal;prototype__proto.ordinal = ordinal;prototype__proto._ordinalParse = defaultOrdinalParse;prototype__proto.preparse = preParsePostFormat;prototype__proto.postformat = preParsePostFormat;prototype__proto._relativeTime = defaultRelativeTime;prototype__proto.relativeTime = relative__relativeTime;prototype__proto.pastFuture = pastFuture;prototype__proto.set = locale_set__set;prototype__proto.months = localeMonths;prototype__proto._months = defaultLocaleMonths;prototype__proto.monthsShort = localeMonthsShort;prototype__proto._monthsShort = defaultLocaleMonthsShort;prototype__proto.monthsParse = localeMonthsParse;prototype__proto._monthsRegex = defaultMonthsRegex;prototype__proto.monthsRegex = monthsRegex;prototype__proto._monthsShortRegex = defaultMonthsShortRegex;prototype__proto.monthsShortRegex = monthsShortRegex;prototype__proto.week = localeWeek;prototype__proto._week = defaultLocaleWeek;prototype__proto.firstDayOfYear = localeFirstDayOfYear;prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;prototype__proto.weekdays = localeWeekdays;prototype__proto._weekdays = defaultLocaleWeekdays;prototype__proto.weekdaysMin = localeWeekdaysMin;prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin;prototype__proto.weekdaysShort = localeWeekdaysShort;prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;prototype__proto.weekdaysParse = localeWeekdaysParse;prototype__proto.isPM = localeIsPM;prototype__proto._meridiemParse = defaultLocaleMeridiemParse;prototype__proto.meridiem = localeMeridiem;function lists__get(format, index, field, setter) {
    var locale = locale_locales__getLocale();var utc = create_utc__createUTC().set(setter, index);return locale[field](utc, format);
  }function list(format, index, field, count, setter) {
    if (typeof format === "number") {
      index = format;format = undefined;
    }format = format || "";if (index != null) {
      return lists__get(format, index, field, setter);
    }var i;var out = [];for (i = 0; i < count; i++) {
      out[i] = lists__get(format, i, field, setter);
    }return out;
  }function lists__listMonths(format, index) {
    return list(format, index, "months", 12, "month");
  }function lists__listMonthsShort(format, index) {
    return list(format, index, "monthsShort", 12, "month");
  }function lists__listWeekdays(format, index) {
    return list(format, index, "weekdays", 7, "day");
  }function lists__listWeekdaysShort(format, index) {
    return list(format, index, "weekdaysShort", 7, "day");
  }function lists__listWeekdaysMin(format, index) {
    return list(format, index, "weekdaysMin", 7, "day");
  }locale_locales__getSetGlobalLocale("en", { ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(number) {
      var b = number % 10,
          output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";return number + output;
    } });utils_hooks__hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", locale_locales__getSetGlobalLocale);utils_hooks__hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", locale_locales__getLocale);var mathAbs = Math.abs;function duration_abs__abs() {
    var data = this._data;this._milliseconds = mathAbs(this._milliseconds);this._days = mathAbs(this._days);this._months = mathAbs(this._months);data.milliseconds = mathAbs(data.milliseconds);data.seconds = mathAbs(data.seconds);data.minutes = mathAbs(data.minutes);data.hours = mathAbs(data.hours);data.months = mathAbs(data.months);data.years = mathAbs(data.years);return this;
  }function duration_add_subtract__addSubtract(duration, input, value, direction) {
    var other = create__createDuration(input, value);duration._milliseconds += direction * other._milliseconds;duration._days += direction * other._days;duration._months += direction * other._months;return duration._bubble();
  }function duration_add_subtract__add(input, value) {
    return duration_add_subtract__addSubtract(this, input, value, 1);
  }function duration_add_subtract__subtract(input, value) {
    return duration_add_subtract__addSubtract(this, input, value, -1);
  }function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }function bubble() {
    var milliseconds = this._milliseconds;var days = this._days;var months = this._months;var data = this._data;var seconds, minutes, hours, years, monthsFromDays;if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;days = 0;months = 0;
    }data.milliseconds = milliseconds % 1e3;seconds = absFloor(milliseconds / 1e3);data.seconds = seconds % 60;minutes = absFloor(seconds / 60);data.minutes = minutes % 60;hours = absFloor(minutes / 60);data.hours = hours % 24;days += absFloor(hours / 24);monthsFromDays = absFloor(daysToMonths(days));months += monthsFromDays;days -= absCeil(monthsToDays(monthsFromDays));years = absFloor(months / 12);months %= 12;data.days = days;
    data.months = months;data.years = years;return this;
  }function daysToMonths(days) {
    return days * 4800 / 146097;
  }function monthsToDays(months) {
    return months * 146097 / 4800;
  }function as(units) {
    var days;var months;var milliseconds = this._milliseconds;units = normalizeUnits(units);if (units === "month" || units === "year") {
      days = this._days + milliseconds / 864e5;months = this._months + daysToMonths(days);return units === "month" ? months : months / 12;
    } else {
      days = this._days + Math.round(monthsToDays(this._months));switch (units) {case "week":
          return days / 7 + milliseconds / 6048e5;case "day":
          return days + milliseconds / 864e5;case "hour":
          return days * 24 + milliseconds / 36e5;case "minute":
          return days * 1440 + milliseconds / 6e4;case "second":
          return days * 86400 + milliseconds / 1e3;case "millisecond":
          return Math.floor(days * 864e5) + milliseconds;default:
          throw new Error("Unknown unit " + units);}
    }
  }function duration_as__valueOf() {
    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
  }function makeAs(alias) {
    return function () {
      return this.as(alias);
    };
  }var asMilliseconds = makeAs("ms");var asSeconds = makeAs("s");var asMinutes = makeAs("m");var asHours = makeAs("h");var asDays = makeAs("d");var asWeeks = makeAs("w");var asMonths = makeAs("M");var asYears = makeAs("y");function duration_get__get(units) {
    units = normalizeUnits(units);return this[units + "s"]();
  }function makeGetter(name) {
    return function () {
      return this._data[name];
    };
  }var milliseconds = makeGetter("milliseconds");var seconds = makeGetter("seconds");var minutes = makeGetter("minutes");var hours = makeGetter("hours");var days = makeGetter("days");var months = makeGetter("months");var years = makeGetter("years");function weeks() {
    return absFloor(this.days() / 7);
  }var round = Math.round;var thresholds = { s: 45, m: 45, h: 22, d: 26, M: 11 };function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }function duration_humanize__relativeTime(posNegDuration, withoutSuffix, locale) {
    var duration = create__createDuration(posNegDuration).abs();var seconds = round(duration.as("s"));var minutes = round(duration.as("m"));var hours = round(duration.as("h"));var days = round(duration.as("d"));var months = round(duration.as("M"));var years = round(duration.as("y"));var a = seconds < thresholds.s && ["s", seconds] || minutes <= 1 && ["m"] || minutes < thresholds.m && ["mm", minutes] || hours <= 1 && ["h"] || hours < thresholds.h && ["hh", hours] || days <= 1 && ["d"] || days < thresholds.d && ["dd", days] || months <= 1 && ["M"] || months < thresholds.M && ["MM", months] || years <= 1 && ["y"] || ["yy", years];a[2] = withoutSuffix;a[3] = +posNegDuration > 0;a[4] = locale;return substituteTimeAgo.apply(null, a);
  }function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
      return false;
    }if (limit === undefined) {
      return thresholds[threshold];
    }thresholds[threshold] = limit;return true;
  }function humanize(withSuffix) {
    var locale = this.localeData();var output = duration_humanize__relativeTime(this, !withSuffix, locale);if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }return locale.postformat(output);
  }var iso_string__abs = Math.abs;function iso_string__toISOString() {
    var seconds = iso_string__abs(this._milliseconds) / 1e3;var days = iso_string__abs(this._days);var months = iso_string__abs(this._months);var minutes, hours, years;minutes = absFloor(seconds / 60);hours = absFloor(minutes / 60);seconds %= 60;minutes %= 60;years = absFloor(months / 12);months %= 12;var Y = years;var M = months;var D = days;var h = hours;var m = minutes;var s = seconds;var total = this.asSeconds();if (!total) {
      return "P0D";
    }return (total < 0 ? "-" : "") + "P" + (Y ? Y + "Y" : "") + (M ? M + "M" : "") + (D ? D + "D" : "") + (h || m || s ? "T" : "") + (h ? h + "H" : "") + (m ? m + "M" : "") + (s ? s + "S" : "");
  }var duration_prototype__proto = Duration.prototype;duration_prototype__proto.abs = duration_abs__abs;duration_prototype__proto.add = duration_add_subtract__add;duration_prototype__proto.subtract = duration_add_subtract__subtract;duration_prototype__proto.as = as;duration_prototype__proto.asMilliseconds = asMilliseconds;duration_prototype__proto.asSeconds = asSeconds;duration_prototype__proto.asMinutes = asMinutes;duration_prototype__proto.asHours = asHours;duration_prototype__proto.asDays = asDays;duration_prototype__proto.asWeeks = asWeeks;duration_prototype__proto.asMonths = asMonths;duration_prototype__proto.asYears = asYears;duration_prototype__proto.valueOf = duration_as__valueOf;duration_prototype__proto._bubble = bubble;duration_prototype__proto.get = duration_get__get;duration_prototype__proto.milliseconds = milliseconds;duration_prototype__proto.seconds = seconds;duration_prototype__proto.minutes = minutes;duration_prototype__proto.hours = hours;duration_prototype__proto.days = days;duration_prototype__proto.weeks = weeks;duration_prototype__proto.months = months;duration_prototype__proto.years = years;duration_prototype__proto.humanize = humanize;duration_prototype__proto.toISOString = iso_string__toISOString;duration_prototype__proto.toString = iso_string__toISOString;duration_prototype__proto.toJSON = iso_string__toISOString;duration_prototype__proto.locale = locale;duration_prototype__proto.localeData = localeData;duration_prototype__proto.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", iso_string__toISOString);duration_prototype__proto.lang = lang;addFormatToken("X", 0, 0, "unix");addFormatToken("x", 0, 0, "valueOf");addRegexToken("x", matchSigned);addRegexToken("X", matchTimestamp);addParseToken("X", function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1e3);
  });addParseToken("x", function (input, array, config) {
    config._d = new Date(toInt(input));
  });utils_hooks__hooks.version = "2.11.1";setHookCallback(local__createLocal);utils_hooks__hooks.fn = momentPrototype;utils_hooks__hooks.min = min;utils_hooks__hooks.max = max;utils_hooks__hooks.now = now;utils_hooks__hooks.utc = create_utc__createUTC;utils_hooks__hooks.unix = moment__createUnix;utils_hooks__hooks.months = lists__listMonths;utils_hooks__hooks.isDate = isDate;utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale;utils_hooks__hooks.invalid = valid__createInvalid;utils_hooks__hooks.duration = create__createDuration;utils_hooks__hooks.isMoment = isMoment;utils_hooks__hooks.weekdays = lists__listWeekdays;utils_hooks__hooks.parseZone = moment__createInZone;utils_hooks__hooks.localeData = locale_locales__getLocale;utils_hooks__hooks.isDuration = isDuration;utils_hooks__hooks.monthsShort = lists__listMonthsShort;utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin;utils_hooks__hooks.defineLocale = defineLocale;utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort;utils_hooks__hooks.normalizeUnits = normalizeUnits;utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;utils_hooks__hooks.prototype = momentPrototype;var _moment = utils_hooks__hooks;return _moment;
});

!function (n, o) {
  "object" == (typeof exports === "undefined" ? "undefined" : babelHelpers.typeof(exports)) && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : n.CordovaUtils = o();
}(this, function () {
  "use strict";
  var n = "function" == typeof Symbol && "symbol" == babelHelpers.typeof(Symbol.iterator) ? function (n) {
    return typeof n === "undefined" ? "undefined" : babelHelpers.typeof(n);
  } : function (n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n === "undefined" ? "undefined" : babelHelpers.typeof(n);
  },
      o = "object" === ("undefined" == typeof cordova ? "undefined" : n(cordova)),
      e = { isCordova: o, platform: function platform() {
      return o && device ? device.platform : void 0;
    }, ready: function ready(n) {
      o ? document.addEventListener("deviceready", n) : window.onload = n;
    }, exit: function exit() {
      o && navigator.app.exitApp();
    }, back: function back(n) {
      o && document.addEventListener("backbutton", n);
    }, menu: function menu(n) {
      o && document.addEventListener("menubutton", n);
    }, pause: function pause(n) {
      o && document.addEventListener("pause", n);
    }, resume: function resume(n) {
      o && document.addEventListener("resume", n);
    }, screenshot: function t(n, e, i, r) {
      if (o) {
        var t = navigator.screenshot;n = n || function () {}, e = e || "jpg", i = i || 50, t && t.save(n, e, i, r);
      }
    }, vibrate: function i(n) {
      if (o) {
        var i = navigator.vibrate;i && i(n);
      }
    }, splashscreen: { hide: function hide() {
        if (o) {
          var n = navigator.splashscreen;n && n.hide();
        }
      }, show: function show() {
        if (o) {
          var n = navigator.splashscreen;n && n.show();
        }
      } }, open: function open(n, e, t) {
      if (o) {
        var i = cordova.InAppBrowser;if (i) return i.open(n, e, t);window.open(n, e, t);
      } else window.open(n, e, t);
    }, toast: function r(n, e, t) {
      if (o) {
        var r = window.plugins.toast;r && (n = n || "", e = e || "long", t = t || "center", r.show(n, e, t));
      }
    }, rotate: function a(n) {
      if (o) {
        var a = screen.lockOrientation;a && a(n);
      }
    }, share: function share(n, e, t, i) {
      if (o && window.plugins) {
        var r = window.plugins.socialsharing;r && r.share(n, e, t, i);
      }
    }, dialog: { alert: function f(n, e, t, i) {
        if (o) {
          var f = navigator.notification.alert;n = n || "Alert", t = t || function () {}, i = i || "OK", f && f(e, t, n, i);
        }
      }, confirm: function c(n, e, t, i) {
        if (o) {
          var c = navigator.notification.confirm;n = n || "Confirm", t = t || function () {}, i = i || ["Cancel", "OK"], c && c(e, t, n, i);
        }
      } } };return e;
});

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : babelHelpers.typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Store = t();
}(this, function () {
  "use strict";
  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }var t = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      n = window.localStorage,
      r = { get: function get(e) {
      try {
        return JSON.parse(n.getItem(e));
      } catch (t) {
        return;
      }
    }, set: function set(e, t) {
      n.setItem(e, JSON.stringify(t));
    }, remove: function remove(e) {
      n.removeItem(e);
    }, clear: function clear() {
      n.clear();
    } },
      i = function () {
    function n(t) {
      var i = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1];e(this, n), this.name = t, this.init = i, r.get(t) ? this.data = r.get(t) : this.reset();
    }return t(n, [{ key: "toString", value: function value() {
        return this.data;
      } }, { key: "save", value: function value() {
        return r.set(this.name, this.data), this;
      } }, { key: "set", value: function value(e) {
        return this.data = e, this.save(), this;
      } }, { key: "reset", value: function value() {
        return this.set(this.init);
      } }, { key: "clear", value: function value() {
        return r.remove(this.name), this;
      } }], [{ key: "clear", value: function value() {
        r.clear();
      } }]), n;
  }();return i;
});

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : babelHelpers.typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.V = e();
}(this, function () {
  "use strict";
  function t(t) {
    var e = void 0;return t.nodeType > 0 ? t : document[t] ? document[t] : (e = document.querySelectorAll(t), 1 === e.length ? e[0] : e);
  }function e(i) {
    var n = t(i);if (!(this instanceof e)) {
      if (n instanceof NodeList) {
        for (var o = [], r = 0; r < n.length; r++) {
          o.push(new e(n[r]));
        }return o;
      }return new e(i);
    }this.el = n, this.classList = n.classList;
  }var i = "function" == typeof Symbol && "symbol" == babelHelpers.typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : babelHelpers.typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t === "undefined" ? "undefined" : babelHelpers.typeof(t);
  };return e.prototype.css = function (t, e) {
    if (void 0 !== e) {
      this.el.style[t] = e;var i = { transform: "WebkitTransform", animation: "WebkitAnimation" };return i[t] && (this.el.style[i[t]] = e), this;
    }return this.el.currentStyle ? this.el.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(this.el).getPropertyValue(t) : void 0;
  }, e.prototype.appear = function () {
    return this.el.style.opacity = "1", this;
  }, e.prototype.disappear = function () {
    return this.el.style.opacity = "0", this;
  }, e.prototype.width = function (t) {
    return void 0 === t ? this.el.offsetWidth : (this.el.style.width = t + "px", this);
  }, e.prototype.height = function (t) {
    return void 0 === t ? this.el.offsetHeight : (this.el.style.height = t + "px", this);
  }, e.prototype.data = function (t, e) {
    return void 0 === e ? this.el.dataset[t] : (this.el.dataset[t] = e, this);
  }, e.prototype.attr = function (t, e) {
    if (void 0 !== e) return this.el.setAttribute(t, e), this;if ("object" !== ("undefined" == typeof t ? "undefined" : i(t))) return this.el.getAttribute(t);for (var n in t) {
      this.el.setAttribute(n, t[n]);
    }
  }, e.prototype.append = function (t) {
    t.el ? this.el.appendChild(t.el) : this.el.appendChild(t);
  }, e.prototype.remove = function (t) {
    t.el ? this.el.removeChild(t.el) : this.el.removeChild(t);
  }, e.prototype.suicide = function () {
    this.el.parentNode.removeChild(this.el);
  }, e.prototype.html = function (t) {
    return void 0 === t ? this.el.innerHTML : (this.el.innerHTML = t, this);
  }, e.prototype.val = function (t) {
    var e = "INPUT" === this.el.tagName || "TEXTAREA" === this.el.tagName ? "value" : "textContent";return void 0 === t ? this.el[e] : (this.el[e] = t, this);
  }, e.prototype.index = function () {
    for (var t = this.el.parentNode.children, e = 0; e < t.length; e++) {
      if (t[e] === this.el) return e;
    }return -1;
  }, e.prototype.scrollTop = function (t) {
    return void 0 === t ? this.el.scrollTop : (this.el.scrollTop = t, this);
  }, e.prototype.call = function (t, e) {
    return "function" == typeof this.el[t] && this.el[t](e), this;
  }, e.prototype.prop = function (t, e) {
    return void 0 === e ? this.el[t] : (this.el[t] = e, this);
  }, e.prototype.on = function (t, e) {
    t = t.split(" ");for (var i = 0; i < t.length; i++) {
      this.el.addEventListener(t[i], e);
    }
  }, e.create = function (t, i) {
    var n = new e(document.createElement(t));return void 0 !== i && n.attr(i), n;
  }, e.init = function (t) {
    document.addEventListener("DOMContentLoaded", t);
  }, e.ready = function (t) {
    window.addEventListener("load", t);
  }, e.resize = function (t) {
    window.addEventListener("resize", t);
  }, e.scroll = function (t) {
    window.addEventListener("scroll", t);
  }, e;
});

// Voyga

Vue.directive("pressing-class", {

	isLiteral: true,

	bind: function bind() {

		var element = V(this.el);
		var className = this.expression;

		element.on("touchstart", function () {

			element.classList.add(className);
		});

		element.on("touchmove touchend", function () {

			element.classList.remove(className);
		});
	}
});

Vue.directive("icon", {
	bind: function bind() {

		var element = V(this.el);
		var icon = this.expression;

		element.classList.add("iconBox");
		element.html("<i class='icon ion-" + icon + " center'></i>");
	}
});

// Voyga

Vue.filter("pluralfy", function (val, number) {

	if (number > 1) {

		return val + "s";
	} else {

		return val;
	}
});

new Vue({

	el: "body",

	data: function data() {

		return {

			page: "main",
			adding: false,
			deleting: false,
			habits: new Store("habits", []),
			index: new Store("index", 0),

			status: {

				adding: false,
				deleting: false

			},

			inputs: {

				name: ""

			}

		};
	},


	methods: {
		accomplish: function accomplish() {

			var index = this.index.data;

			if (this.accomplished) {

				this.habits.data[index].last = moment().subtract(1, "d").format("MM-DD-YYYY");
			} else {

				this.habits.data[index].last = moment().format("MM-DD-YYYY");
			}

			this.habits.save();
		},
		ifAccomplished: function ifAccomplished(index) {

			return this.habits.data[index].last === moment().format("MM-DD-YYYY");
		},
		getStreak: function getStreak(index) {

			var habit = this.habits.data[index];

			return moment(habit.last, "MM-DD-YYYY").diff(moment(habit.start, "MM-DD-YYYY"), "d") + 1;
		},
		add: function add() {

			var habits = this.habits;
			var inputs = this.inputs;

			if (inputs.name && habits.data.length < 3 && habits.data.every(function (i) {
				return i.name !== inputs.name;
			})) {

				habits.data.push({

					name: inputs.name,
					start: moment().format("MM-DD-YYYY"),
					last: moment().subtract(1, "d").format("MM-DD-YYYY")

				});

				habits.save();
				inputs.name = "";
				this.page = "main";
				this.status.adding = false;
				this.index.set(habits.data.length - 1);
			}
		}
	},

	computed: {
		currentHabit: function currentHabit() {

			return this.habits.data[this.index.data];
		},
		accomplished: function accomplished() {

			return this.ifAccomplished(this.index.data);
		},
		streak: function streak() {

			return this.getStreak(this.index.data);
		},
		since: function since() {

			var start = moment(this.currentHabit.start, "MM-DD-YYYY");

			return start.format("MM") + " / " + start.format("DD");
		},
		empty: function empty() {

			return this.habits.data.length === 0;
		}
	},

	ready: function ready() {
		var _this = this;

		for (var i = 0; i < this.habits.data.length; i++) {

			if (moment().diff(moment(this.habits.data[i], "MM-DD-YYYY"), "d") > 1) {

				this.habits.data[i].start = moment().format("MM-DD-YYYY");
				this.habits.data[i].last = moment().subtract(1, "d").format("MM-DD-YYYY");
				this.habits.save();
			}
		}

		if (!this.currentHabit) {

			this.index.set(this.habits.data.length - 1);
		}

		CordovaUtils.ready(function () {

			CordovaUtils.back(function () {

				if (!Object.keys(_this.status).every(function (i) {
					return !_this.status[i];
				})) {

					Object.keys(_this.status).forEach(function (i) {
						return _this.status[i] = false;
					});
				} else if (_this.page !== "main") {

					_this.page = "main";
				} else {

					CordovaUtils.exit();
				}
			});

			CordovaUtils.splashscreen.hide();
			FastClick.attach(V("body").el);
			V("body").appear();
		});
	}
});