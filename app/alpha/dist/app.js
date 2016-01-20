var babelHelpers_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

/*!
 * Vue.js v1.0.14
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : babelHelpers_typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Vue = e();
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
    return vi.call(t, e);
  }function n(t) {
    return mi.test(t);
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
    return t.replace(gi, c);
  }function c(t, e) {
    return e ? e.toUpperCase() : "";
  }function u(t) {
    return t.replace(_i, "$1-$2").toLowerCase();
  }function f(t) {
    return t.replace(yi, c);
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
    return null !== t && "object" == (typeof t === "undefined" ? "undefined" : babelHelpers_typeof(t));
  }function g(t) {
    return bi.call(t) === Ci;
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
        e = Di.slice(Vi, Wi).trim();if (e) {
      t = {};var i = e.match(Qi);t.name = i[0], i.length > 1 && (t.args = i.slice(1).map(x));
    }t && (Ri.filters = Ri.filters || []).push(t), Vi = Wi + 1;
  }function x(t) {
    if (Gi.test(t)) return { value: o(t), dynamic: !1 };var e = h(t),
        i = e === t;return { value: i ? t : e, dynamic: i };
  }function A(t) {
    var e = Ji.get(t);if (e) return e;for (Di = t, Mi = zi = !1, Ii = Ui = qi = 0, Vi = 0, Ri = {}, Wi = 0, Bi = Di.length; Bi > Wi; Wi++) {
      if (Li = Hi, Hi = Di.charCodeAt(Wi), Mi) 39 === Hi && 92 !== Li && (Mi = !Mi);else if (zi) 34 === Hi && 92 !== Li && (zi = !zi);else if (124 === Hi && 124 !== Di.charCodeAt(Wi + 1) && 124 !== Di.charCodeAt(Wi - 1)) null == Ri.expression ? (Vi = Wi + 1, Ri.expression = Di.slice(0, Wi).trim()) : k();else switch (Hi) {case 34:
          zi = !0;break;case 39:
          Mi = !0;break;case 40:
          qi++;break;case 41:
          qi--;break;case 91:
          Ui++;break;case 93:
          Ui--;break;case 123:
          Ii++;break;case 125:
          Ii--;}
    }return null == Ri.expression ? Ri.expression = Di.slice(0, Wi).trim() : 0 !== Vi && k(), Ji.put(t, Ri), Ri;
  }function O(t) {
    return t.replace(Ki, "\\$&");
  }function T() {
    var t = O(on.delimiters[0]),
        e = O(on.delimiters[1]),
        i = O(on.unsafeDelimiters[0]),
        n = O(on.unsafeDelimiters[1]);Yi = new RegExp(i + "(.+?)" + n + "|" + t + "(.+?)" + e, "g"), tn = new RegExp("^" + i + ".*" + n + "$"), Xi = new $(1e3);
  }function N(t) {
    Xi || T();var e = Xi.get(t);if (e) return e;if (t = t.replace(/\n/g, ""), !Yi.test(t)) return null;for (var i, n, r, s, o, a, h = [], l = Yi.lastIndex = 0; i = Yi.exec(t);) {
      n = i.index, n > l && h.push({ value: t.slice(l, n) }), r = tn.test(i[0]), s = r ? i[1] : i[2], o = s.charCodeAt(0), a = 42 === o, s = a ? s.slice(1) : s, h.push({ tag: !0, value: s.trim(), html: r, oneTime: a }), l = n + i[0].length;
    }return l < t.length && h.push({ value: t.slice(l) }), Xi.put(t, h), h;
  }function j(t, e) {
    return t.length > 1 ? t.map(function (t) {
      return E(t, e);
    }).join("+") : E(t[0], e, !0);
  }function E(t, e, i) {
    return t.tag ? t.oneTime && e ? '"' + e.$eval(t.value) + '"' : S(t.value, i) : '"' + t.value + '"';
  }function S(t, e) {
    if (en.test(t)) {
      var i = A(t);return i.filters ? "this._applyFilters(" + i.expression + ",null," + JSON.stringify(i.filters) + ",false)" : "(" + t + ")";
    }return e ? t : "(" + t + ")";
  }function F(t, e, i, n) {
    R(t, 1, function () {
      e.appendChild(t);
    }, i, n);
  }function P(t, e, i, n) {
    R(t, 1, function () {
      M(t, e);
    }, i, n);
  }function D(t, e, i) {
    R(t, -1, function () {
      I(t);
    }, e, i);
  }function R(t, e, i, n, r) {
    var s = t.__v_trans;if (!s || !s.hooks && !Ti || !n._isCompiled || n.$parent && !n.$parent._isCompiled) return i(), void (r && r());var o = e > 0 ? "enter" : "leave";s[o](i, r);
  }function H(t) {
    if ("string" == typeof t) {
      t = document.querySelector(t);
    }return t;
  }function L(t) {
    var e = document.documentElement,
        i = t && t.parentNode;return e === t || e === i || !(!i || 1 !== i.nodeType || !e.contains(i));
  }function W(t, e) {
    var i = t.getAttribute(e);return null !== i && t.removeAttribute(e), i;
  }function B(t, e) {
    var i = W(t, ":" + e);return null === i && (i = W(t, "v-bind:" + e)), i;
  }function V(t, e) {
    return t.hasAttribute(e) || t.hasAttribute(":" + e) || t.hasAttribute("v-bind:" + e);
  }function M(t, e) {
    e.parentNode.insertBefore(t, e);
  }function z(t, e) {
    e.nextSibling ? M(t, e.nextSibling) : e.parentNode.appendChild(t);
  }function I(t) {
    t.parentNode.removeChild(t);
  }function U(t, e) {
    e.firstChild ? M(t, e.firstChild) : e.appendChild(t);
  }function q(t, e) {
    var i = t.parentNode;i && i.replaceChild(e, t);
  }function J(t, e, i) {
    t.addEventListener(e, i);
  }function Q(t, e, i) {
    t.removeEventListener(e, i);
  }function G(t, e) {
    !xi || t instanceof SVGElement ? t.setAttribute("class", e) : t.className = e;
  }function Z(t, e) {
    if (t.classList) t.classList.add(e);else {
      var i = " " + (t.getAttribute("class") || "") + " ";i.indexOf(" " + e + " ") < 0 && G(t, (i + e).trim());
    }
  }function K(t, e) {
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
    tt(t, t.firstChild), tt(t, t.lastChild);
  }function tt(t, e) {
    e && 3 === e.nodeType && !e.data.trim() && t.removeChild(e);
  }function et(t) {
    return t.tagName && "template" === t.tagName.toLowerCase();
  }function it(t, e) {
    var i = on.debug ? document.createComment(t) : document.createTextNode(e ? " " : "");return i.__vue_anchor = !0, i;
  }function nt(t) {
    if (t.hasAttributes()) for (var e = t.attributes, i = 0, n = e.length; n > i; i++) {
      var r = e[i].name;if (hn.test(r)) return l(r.replace(hn, ""));
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
        n = t.hasAttributes();if (ln.test(i) || cn.test(i)) {
      if (n) return at(t);
    } else {
      if (gt(e, "components", i)) return { id: i };var r = n && at(t);if (r) return r;
    }
  }function at(t) {
    var e = W(t, "is");return null != e ? { id: e } : (e = B(t, "is"), null != e ? { id: e, dynamic: !0 } : void 0);
  }function ht(t, e, i) {
    var n = e.path;i = ct(e, i), t[n] = t._data[n] = lt(e, i) ? i : void 0;
  }function lt(t, e) {
    if (null === t.raw && !t.required) return !0;var i,
        n = t.options,
        r = n.type,
        s = !0;if (r && (r === String ? (i = "string", s = (typeof e === "undefined" ? "undefined" : babelHelpers_typeof(e)) === i) : r === Number ? (i = "number", s = "number" == typeof e) : r === Boolean ? (i = "boolean", s = "boolean" == typeof e) : r === Function ? (i = "function", s = "function" == typeof e) : r === Object ? (i = "object", s = g(e)) : r === Array ? (i = "array", s = wi(e)) : s = e instanceof r), !s) return !1;var o = n.validator;return o && !o.call(null, e) ? !1 : !0;
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
      var o = n[r];ln.test(o) || cn.test(o) || (e = i[o], g(e) && (i[o] = li.extend(e)));
    }
  }function dt(t) {
    var e,
        i,
        n = t.props;if (wi(n)) for (t.props = {}, e = n.length; e--;) {
      i = n[e], "string" == typeof i ? t.props[i] = null : i.name && (t.props[i.name] = i);
    } else if (g(n)) {
      var r = Object.keys(n);for (e = r.length; e--;) {
        i = n[r[e]], "function" == typeof i && (n[r[e]] = { type: i });
      }
    }
  }function vt(t) {
    if (wi(t)) {
      for (var e, i = {}, n = t.length; n--;) {
        e = t[n];var r = "function" == typeof e ? e.options && e.options.name || e.id : e.name || e.id;r && (i[r] = e);
      }return i;
    }return t;
  }function mt(t, e, n) {
    function r(i) {
      var r = un[i] || fn;o[i] = r(t[i], e[i], n, i);
    }pt(e), dt(e);var s,
        o = {};if (e.mixins) for (var a = 0, h = e.mixins.length; h > a; a++) {
      t = mt(t, e.mixins[a], n);
    }for (s in t) {
      r(s);
    }for (s in e) {
      i(t, s) || r(s);
    }return o;
  }function gt(t, e, i) {
    var n,
        r = t[e];return r[i] || r[n = l(i)] || r[n.charAt(0).toUpperCase() + n.slice(1)];
  }function _t(t, e, i) {}function yt() {
    this.id = vn++, this.subs = [];
  }function bt(t) {
    if (this.value = t, this.dep = new yt(), _(t, "__ob__", this), wi(t)) {
      var e = $i ? Ct : wt;e(t, dn, mn), this.observeArray(t);
    } else this.walk(t);
  }function Ct(t, e) {
    t.__proto__ = e;
  }function wt(t, e, i) {
    for (var n = 0, r = i.length; r > n; n++) {
      var s = i[n];_(t, s, e[s]);
    }
  }function $t(t, e) {
    if (t && "object" == (typeof t === "undefined" ? "undefined" : babelHelpers_typeof(t))) {
      var n;return i(t, "__ob__") && t.__ob__ instanceof bt ? n = t.__ob__ : (wi(t) || g(t)) && Object.isExtensible(t) && !t._isVue && (n = new bt(t)), n && e && n.addVm(e), n;
    }
  }function kt(t, e, i) {
    var n,
        r,
        s = new yt();if (on.convertAllProperties) {
      var o = Object.getOwnPropertyDescriptor(t, e);if (o && o.configurable === !1) return;n = o && o.get, r = o && o.set;
    }var a = $t(i);Object.defineProperty(t, e, { enumerable: !0, configurable: !0, get: function get() {
        var e = n ? n.call(t) : i;if (yt.target && (s.depend(), a && a.dep.depend(), wi(e))) for (var r, o = 0, h = e.length; h > o; o++) {
          r = e[o], r && r.__ob__ && r.__ob__.dep.depend();
        }return e;
      }, set: function set(e) {
        var o = n ? n.call(t) : i;e !== o && (r ? r.call(t, e) : i = e, a = $t(e), s.notify());
      } });
  }function xt(t) {
    t.prototype._init = function (t) {
      t = t || {}, this.$el = null, this.$parent = t.parent, this.$root = this.$parent ? this.$parent.$root : this, this.$children = [], this.$refs = {}, this.$els = {}, this._watchers = [], this._directives = [], this._uid = _n++, this._isVue = !0, this._events = {}, this._eventsCount = {}, this._isFragment = !1, this._fragment = this._fragmentStart = this._fragmentEnd = null, this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = !1, this._unlinkFn = null, this._context = t._context || this.$parent, this._scope = t._scope, this._frag = t._frag, this._frag && this._frag.children.push(this), this.$parent && this.$parent.$children.push(this), t = this.$options = mt(this.constructor.options, t, this), this._updateRef(), this._data = {}, this._callHook("init"), this._initState(), this._initEvents(), this._callHook("created"), t.el && this.$mount(t.el);
    };
  }function At(t) {
    if (void 0 === t) return "eof";var e = t.charCodeAt(0);switch (e) {case 91:case 93:case 46:case 34:case 39:case 48:
        return t;case 95:case 36:
        return "ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:
        return "ws";}return e >= 97 && 122 >= e || e >= 65 && 90 >= e ? "ident" : e >= 49 && 57 >= e ? "number" : "else";
  }function Ot(t) {
    var e = t.trim();return "0" === t.charAt(0) && isNaN(t) ? !1 : n(e) ? h(e) : "*" + e;
  }function Tt(t) {
    function e() {
      var e = t[c + 1];return u === Nn && "'" === e || u === jn && '"' === e ? (c++, n = "\\" + e, p[bn](), !0) : void 0;
    }var i,
        n,
        r,
        s,
        o,
        a,
        h,
        l = [],
        c = -1,
        u = kn,
        f = 0,
        p = [];for (p[Cn] = function () {
      void 0 !== r && (l.push(r), r = void 0);
    }, p[bn] = function () {
      void 0 === r ? r = n : r += n;
    }, p[wn] = function () {
      p[bn](), f++;
    }, p[$n] = function () {
      if (f > 0) f--, u = Tn, p[bn]();else {
        if (f = 0, r = Ot(r), r === !1) return !1;p[Cn]();
      }
    }; null != u;) {
      if (c++, i = t[c], "\\" !== i || !e()) {
        if (s = At(i), h = Fn[u], o = h[s] || h["else"] || Sn, o === Sn) return;if (u = o[0], a = p[o[1]], a && (n = o[2], n = void 0 === n ? i : n, a() === !1)) return;if (u === En) return l.raw = t, l;
      }
    }
  }function Nt(t) {
    var e = yn.get(t);return e || (e = Tt(t), e && yn.put(t, e)), e;
  }function jt(t, e) {
    return Lt(e).get(t);
  }function Et(e, i, n) {
    var r = e;if ("string" == typeof i && (i = Tt(i)), !i || !m(e)) return !1;for (var s, o, a = 0, h = i.length; h > a; a++) {
      s = e, o = i[a], "*" === o.charAt(0) && (o = Lt(o.slice(1)).get.call(r, r)), h - 1 > a ? (e = e[o], m(e) || (e = {}, t(s, o, e))) : wi(e) ? e.$set(o, n) : o in e ? e[o] = n : t(e, o, n);
    }return !0;
  }function St(t, e) {
    var i = Jn.length;return Jn[i] = e ? t.replace(Vn, "\\n") : t, '"' + i + '"';
  }function Ft(t) {
    var e = t.charAt(0),
        i = t.slice(1);return Hn.test(i) ? t : (i = i.indexOf('"') > -1 ? i.replace(zn, Pt) : i, e + "scope." + i);
  }function Pt(t, e) {
    return Jn[e];
  }function Dt(t) {
    Wn.test(t), Jn.length = 0;var e = t.replace(Mn, St).replace(Bn, "");return e = (" " + e).replace(Un, Ft).replace(zn, Pt), Rt(e);
  }function Rt(t) {
    try {
      return new Function("scope", "return " + t + ";");
    } catch (e) {}
  }function Ht(t) {
    var e = Nt(t);return e ? function (t, i) {
      Et(t, e, i);
    } : void 0;
  }function Lt(t, e) {
    t = t.trim();var i = Dn.get(t);if (i) return e && !i.set && (i.set = Ht(i.exp)), i;var n = { exp: t };return n.get = Wt(t) && t.indexOf("[") < 0 ? Rt("scope." + t) : Dt(t), e && (n.set = Ht(t)), Dn.put(t, n), n;
  }function Wt(t) {
    return In.test(t) && !qn.test(t) && "Math." !== t.slice(0, 5);
  }function Bt() {
    Gn = [], Zn = [], Kn = {}, Xn = {}, Yn = tr = !1;
  }function Vt() {
    Mt(Gn), tr = !0, Mt(Zn), Bt();
  }function Mt(t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e],
          n = i.id;Kn[n] = null, i.run();
    }
  }function zt(t) {
    var e = t.id;if (null == Kn[e]) {
      if (tr && !t.user) return void t.run();var i = t.user ? Zn : Gn;Kn[e] = i.length, i.push(t), Yn || (Yn = !0, Fi(Vt));
    }
  }function It(t, e, i, n) {
    n && v(this, n);var r = "function" == typeof e;if (this.vm = t, t._watchers.push(this), this.expression = r ? e.toString() : e, this.cb = i, this.id = ++er, this.active = !0, this.dirty = this.lazy, this.deps = Object.create(null), this.newDeps = null, this.prevError = null, r) this.getter = e, this.setter = void 0;else {
      var s = Lt(e, this.twoWay);this.getter = s.get, this.setter = s.set;
    }this.value = this.lazy ? void 0 : this.get(), this.queued = this.shallow = !1;
  }function Ut(t) {
    var e, i;if (wi(t)) for (e = t.length; e--;) {
      Ut(t[e]);
    } else if (m(t)) for (i = Object.keys(t), e = i.length; e--;) {
      Ut(t[i[e]]);
    }
  }function qt(t) {
    if (_r[t]) return _r[t];var e = Jt(t);return _r[t] = _r[e] = e, e;
  }function Jt(t) {
    t = u(t);var e = l(t),
        i = e.charAt(0).toUpperCase() + e.slice(1);if (yr || (yr = document.createElement("div")), e in yr.style) return t;for (var n, r = vr.length; r--;) {
      if (n = mr[r] + i, n in yr.style) return vr[r] + t;
    }
  }function Qt(t, e) {
    var i = e.map(function (t) {
      var e = t.charCodeAt(0);return e > 47 && 58 > e ? parseInt(t, 10) : 1 === t.length && (e = t.toUpperCase().charCodeAt(0), e > 64 && 91 > e) ? e : Or[t];
    });return function (e) {
      return i.indexOf(e.keyCode) > -1 ? t.call(this, e) : void 0;
    };
  }function Gt(t) {
    return function (e) {
      return e.stopPropagation(), t.call(this, e);
    };
  }function Zt(t) {
    return function (e) {
      return e.preventDefault(), t.call(this, e);
    };
  }function Kt(t, e, i) {
    for (var n, r, s, o = e ? [] : null, a = 0, h = t.options.length; h > a; a++) {
      if (n = t.options[a], s = i ? n.hasAttribute("selected") : n.selected) {
        if (r = n.hasOwnProperty("_value") ? n._value : n.value, !e) return r;o.push(r);
      }
    }return o;
  }function Xt(t, e) {
    for (var i = t.length; i--;) {
      if (w(t[i], e)) return i;
    }return -1;
  }function Yt(t) {
    return et(t) && t.content instanceof DocumentFragment;
  }function te(t, e) {
    var i = Rr.get(t);if (i) return i;var n = document.createDocumentFragment(),
        r = t.match(Wr),
        s = Br.test(t);if (r || s) {
      var o = r && r[1],
          a = Lr[o] || Lr.efault,
          h = a[0],
          l = a[1],
          c = a[2],
          u = document.createElement("div");for (e || (t = t.trim()), u.innerHTML = l + t + c; h--;) {
        u = u.lastChild;
      }for (var f; f = u.firstChild;) {
        n.appendChild(f);
      }
    } else n.appendChild(document.createTextNode(t));return Rr.put(t, n), n;
  }function ee(t) {
    if (Yt(t)) return Y(t.content), t.content;if ("SCRIPT" === t.tagName) return te(t.textContent);for (var e, i = ie(t), n = document.createDocumentFragment(); e = i.firstChild;) {
      n.appendChild(e);
    }return Y(n), n;
  }function ie(t) {
    if (!t.querySelectorAll) return t.cloneNode();var e,
        i,
        n,
        r = t.cloneNode(!0);if (Vr) {
      var s = r;if (Yt(t) && (t = t.content, s = r.content), i = t.querySelectorAll("template"), i.length) for (n = s.querySelectorAll("template"), e = n.length; e--;) {
        n[e].parentNode.replaceChild(ie(i[e]), n[e]);
      }
    }if (Mr) if ("TEXTAREA" === t.tagName) r.value = t.value;else if (i = t.querySelectorAll("textarea"), i.length) for (n = r.querySelectorAll("textarea"), e = n.length; e--;) {
      n[e].value = i[e].value;
    }return r;
  }function ne(t, e, i) {
    var n, r;return t instanceof DocumentFragment ? (Y(t), e ? ie(t) : t) : ("string" == typeof t ? i || "#" !== t.charAt(0) ? r = te(t, i) : (r = Hr.get(t), r || (n = document.getElementById(t.slice(1)), n && (r = ee(n), Hr.put(t, r)))) : t.nodeType && (r = ee(t)), r && e ? ie(r) : r);
  }function re(t, e, i, n, r, s) {
    this.children = [], this.childFrags = [], this.vm = e, this.scope = r, this.inserted = !1, this.parentFrag = s, s && s.childFrags.push(this), this.unlink = t(e, i, n, r, this);var o = this.single = 1 === i.childNodes.length && !i.childNodes[0].__vue_anchor;o ? (this.node = i.childNodes[0], this.before = se, this.remove = oe) : (this.node = it("fragment-start"), this.end = it("fragment-end"), this.frag = i, U(this.node, i), i.appendChild(this.end), this.before = ae, this.remove = he), this.node.__vfrag__ = this;
  }function se(t, e) {
    this.inserted = !0;var i = e !== !1 ? P : M;i(this.node, t, this.vm), L(this.node) && this.callHook(le);
  }function oe() {
    this.inserted = !1;var t = L(this.node),
        e = this;this.beforeRemove(), D(this.node, this.vm, function () {
      t && e.callHook(ce), e.destroy();
    });
  }function ae(t, e) {
    this.inserted = !0;var i = this.vm,
        n = e !== !1 ? P : M;rt(this.node, this.end, function (e) {
      n(e, t, i);
    }), L(this.node) && this.callHook(le);
  }function he() {
    this.inserted = !1;var t = this,
        e = L(this.node);this.beforeRemove(), st(this.node, this.end, this.vm, this.frag, function () {
      e && t.callHook(ce), t.destroy();
    });
  }function le(t) {
    t._isAttached || t._callHook("attached");
  }function ce(t) {
    t._isAttached && t._callHook("detached");
  }function ue(t, e) {
    this.vm = t;var i,
        n = "string" == typeof e;n || et(e) ? i = ne(e, !0) : (i = document.createDocumentFragment(), i.appendChild(e)), this.template = i;var r,
        s = t.constructor.cid;if (s > 0) {
      var o = s + (n ? e : e.outerHTML);r = Ir.get(o), r || (r = ke(i, t.$options, !0), Ir.put(o, r));
    } else r = ke(i, t.$options, !0);this.linker = r;
  }function fe(t, e, i) {
    var n = t.node.previousSibling;if (n) {
      for (t = n.__vfrag__; !(t && t.forId === i && t.inserted || n === e);) {
        if (n = n.previousSibling, !n) return;t = n.__vfrag__;
      }return t;
    }
  }function pe(t) {
    var e = t.node;if (t.end) for (; !e.__vue__ && e !== t.end && e.nextSibling;) {
      e = e.nextSibling;
    }return e.__vue__;
  }function de(t) {
    for (var e = -1, i = new Array(t); ++e < t;) {
      i[e] = e;
    }return i;
  }function ve(t) {
    Kr.push(t), Xr || (Xr = !0, Fi(me));
  }function me() {
    for (var t = document.documentElement.offsetHeight, e = 0; e < Kr.length; e++) {
      Kr[e]();
    }return Kr = [], Xr = !1, t;
  }function ge(t, e, i, n) {
    this.id = e, this.el = t, this.enterClass = i && i.enterClass || e + "-enter", this.leaveClass = i && i.leaveClass || e + "-leave", this.hooks = i, this.vm = n, this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null, this.justEntered = !1, this.entered = this.left = !1, this.typeCache = {}, this.type = i && i.type;var r = this;["enterNextTick", "enterDone", "leaveNextTick", "leaveDone"].forEach(function (t) {
      r[t] = p(r[t], r);
    });
  }function _e(t) {
    return !(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
  }function ye(t) {
    for (var e = {}, i = t.trim().split(/\s+/), n = i.length; n--;) {
      e[i[n]] = !0;
    }return e;
  }function be(t, e) {
    return wi(t) ? t.indexOf(e) > -1 : i(t, e);
  }function Ce(t, e) {
    for (var i, r, s, o, a, h, c, f = [], p = Object.keys(e), d = p.length; d--;) {
      r = p[d], i = e[r] || us, a = l(r), fs.test(a) && (c = { name: r, path: a, options: i, mode: cs.ONE_WAY, raw: null }, s = u(r), null === (o = B(t, s)) && (null !== (o = B(t, s + ".sync")) ? c.mode = cs.TWO_WAY : null !== (o = B(t, s + ".once")) && (c.mode = cs.ONE_TIME)), null !== o ? (c.raw = o, h = A(o), o = h.expression, c.filters = h.filters, n(o) && !h.filters ? c.optimizedLiteral = !0 : c.dynamic = !0, c.parentPath = o) : null !== (o = W(t, s)) ? c.raw = o : i.required, f.push(c));
    }return we(f);
  }function we(t) {
    return function (e, i) {
      e._props = {};for (var n, r, s, l, c, u = t.length; u--;) {
        if (n = t[u], c = n.raw, r = n.path, s = n.options, e._props[r] = n, null === c) ht(e, n, $e(e, s));else if (n.dynamic) e._context && (n.mode === cs.ONE_TIME ? (l = (i || e._context).$get(n.parentPath), ht(e, n, l)) : e._bindDir({ name: "prop", def: os, prop: n }, null, null, i));else if (n.optimizedLiteral) {
          var f = h(c);l = f === c ? a(o(c)) : f, ht(e, n, l);
        } else l = s.type === Boolean && "" === c ? !0 : c, ht(e, n, l);
      }
    };
  }function $e(t, e) {
    if (!i(e, "default")) return e.type === Boolean ? !1 : void 0;var n = e["default"];return m(n), "function" == typeof n && e.type !== Function ? n.call(t) : n;
  }function ke(t, e, i) {
    var n = i || !e._asComponent ? Ee(t, e) : null,
        r = n && n.terminal || "SCRIPT" === t.tagName || !t.hasChildNodes() ? null : He(t.childNodes, e);return function (t, e, i, s, o) {
      var a = d(e.childNodes),
          h = xe(function () {
        n && n(t, e, i, s, o), r && r(t, a, i, s, o);
      }, t);return Oe(t, h);
    };
  }function xe(t, e) {
    var i = e._directives.length;t();var n = e._directives.slice(i);n.sort(Ae);for (var r = 0, s = n.length; s > r; r++) {
      n[r]._bind();
    }return n;
  }function Ae(t, e) {
    return t = t.descriptor.def.priority || ys, e = e.descriptor.def.priority || ys, t > e ? -1 : t === e ? 0 : 1;
  }function Oe(t, e, i, n) {
    function r(r) {
      Te(t, e, r), i && n && Te(i, n);
    }return r.dirs = e, r;
  }function Te(t, e, i) {
    for (var n = e.length; n--;) {
      e[n]._teardown(), i || t._directives.$remove(e[n]);
    }
  }function Ne(t, e, i, n) {
    var r = Ce(e, i),
        s = xe(function () {
      r(t, n);
    }, t);return Oe(t, s);
  }function je(t, e, i) {
    var n,
        r,
        s = e._containerAttrs,
        o = e._replacerAttrs;return 11 !== t.nodeType && (e._asComponent ? (s && i && (n = Ie(s, i)), o && (r = Ie(o, e))) : r = Ie(t.attributes, e)), e._containerAttrs = e._replacerAttrs = null, function (t, e, i) {
      var s,
          o = t._context;o && n && (s = xe(function () {
        n(o, e, null, i);
      }, o));var a = xe(function () {
        r && r(t, e);
      }, t);return Oe(t, a, o, s);
    };
  }function Ee(t, e) {
    var i = t.nodeType;return 1 === i && "SCRIPT" !== t.tagName ? Se(t, e) : 3 === i && t.data.trim() ? Fe(t, e) : null;
  }function Se(t, e) {
    if ("TEXTAREA" === t.tagName) {
      var i = N(t.value);i && (t.setAttribute(":value", j(i)), t.value = "");
    }var n,
        r = t.hasAttributes();return r && (n = Ve(t, e)), n || (n = We(t, e)), n || (n = Be(t, e)), !n && r && (n = Ie(t.attributes, e)), n;
  }function Fe(t, e) {
    if (t._skip) return Pe;var i = N(t.wholeText);if (!i) return null;for (var n = t.nextSibling; n && 3 === n.nodeType;) {
      n._skip = !0, n = n.nextSibling;
    }for (var r, s, o = document.createDocumentFragment(), a = 0, h = i.length; h > a; a++) {
      s = i[a], r = s.tag ? De(s, e) : document.createTextNode(s.value), o.appendChild(r);
    }return Re(i, o, e);
  }function Pe(t, e) {
    I(e);
  }function De(t, e) {
    function i(e) {
      if (!t.descriptor) {
        var i = A(t.value);t.descriptor = { name: e, def: Zr[e], expression: i.expression, filters: i.filters };
      }
    }var n;return t.oneTime ? n = document.createTextNode(t.value) : t.html ? (n = document.createComment("v-html"), i("html")) : (n = document.createTextNode(" "), i("text")), n;
  }function Re(t, e) {
    return function (i, n, r, s) {
      for (var o, a, h, l = e.cloneNode(!0), c = d(l.childNodes), u = 0, f = t.length; f > u; u++) {
        o = t[u], a = o.value, o.tag && (h = c[u], o.oneTime ? (a = (s || i).$eval(a), o.html ? q(h, ne(a, !0)) : h.data = a) : i._bindDir(o.descriptor, h, r, s));
      }q(n, l);
    };
  }function He(t, e) {
    for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++) {
      r = t[o], i = Ee(r, e), n = i && i.terminal || "SCRIPT" === r.tagName || !r.hasChildNodes() ? null : He(r.childNodes, e), s.push(i, n);
    }return s.length ? Le(s) : null;
  }function Le(t) {
    return function (e, i, n, r, s) {
      for (var o, a, h, l = 0, c = 0, u = t.length; u > l; c++) {
        o = i[c], a = t[l++], h = t[l++];var f = d(o.childNodes);a && a(e, o, n, r, s), h && h(e, f, n, r, s);
      }
    };
  }function We(t, e) {
    var i = t.tagName.toLowerCase();if (!ln.test(i)) {
      "slot" === i && V(t, "name") && (i = "_namedSlot");var n = gt(e, "elementDirectives", i);return n ? ze(t, i, "", e, n) : void 0;
    }
  }function Be(t, e) {
    var i = ot(t, e);if (i) {
      var n = nt(t),
          r = { name: "component", ref: n, expression: i.id, def: ls.component, modifiers: { literal: !i.dynamic } },
          s = function s(t, e, i, _s2, o) {
        n && kt((_s2 || t).$refs, n, null), t._bindDir(r, e, i, _s2, o);
      };return s.terminal = !0, s;
    }
  }function Ve(t, e) {
    if (null !== W(t, "v-pre")) return Me;if (t.hasAttribute("v-else")) {
      var i = t.previousElementSibling;if (i && i.hasAttribute("v-if")) return Me;
    }for (var n, r, s = 0, o = _s.length; o > s; s++) {
      if (r = _s[s], n = t.getAttribute("v-" + r), null != n) return ze(t, r, n, e);
    }
  }function Me() {}function ze(t, e, i, n, r) {
    var s = A(i),
        o = { name: e, expression: s.expression, filters: s.filters, raw: i, def: r || Zr[e] };("for" === e || "router-view" === e) && (o.ref = nt(t));var a = function a(t, e, i, n, r) {
      o.ref && kt((n || t).$refs, o.ref, null), t._bindDir(o, e, i, n, r);
    };return a.terminal = !0, a;
  }function Ie(t, e) {
    function i(t, e, i) {
      var n = i && Je(i),
          r = !n && A(s);d.push({ name: t, attr: o, raw: a, def: e, arg: l, modifiers: c, expression: r && r.expression, filters: r && r.filters, interp: i, hasOneTime: n });
    }for (var n, r, s, o, a, h, l, c, u, f, p = t.length, d = []; p--;) {
      if (n = t[p], r = o = n.name, s = a = n.value, f = N(s), l = null, c = Ue(r), r = r.replace(ms, ""), f) s = j(f), l = r, i("bind", Zr.bind, f);else if (gs.test(r)) c.literal = !ps.test(r), i("transition", ls.transition);else if (ds.test(r)) l = r.replace(ds, ""), i("on", Zr.on);else if (ps.test(r)) h = r.replace(ps, ""), "style" === h || "class" === h ? i(h, ls[h]) : (l = h, i("bind", Zr.bind));else if (0 === r.indexOf("v-")) {
        if (l = (l = r.match(vs)) && l[1], l && (r = r.replace(vs, "")), h = r.slice(2), "else" === h) continue;u = gt(e, "directives", h), u && i(h, u);
      }
    }return d.length ? qe(d) : void 0;
  }function Ue(t) {
    var e = Object.create(null),
        i = t.match(ms);if (i) for (var n = i.length; n--;) {
      e[i[n].slice(1)] = !0;
    }return e;
  }function qe(t) {
    return function (e, i, n, r, s) {
      for (var o = t.length; o--;) {
        e._bindDir(t[o], i, n, r, s);
      }
    };
  }function Je(t) {
    for (var e = t.length; e--;) {
      if (t[e].oneTime) return !0;
    }
  }function Qe(t, e) {
    return e && (e._containerAttrs = Ze(t)), et(t) && (t = ne(t)), e && (e._asComponent && !e.template && (e.template = "<slot></slot>"), e.template && (e._content = X(t), t = Ge(t, e))), t instanceof DocumentFragment && (U(it("v-start", !0), t), t.appendChild(it("v-end", !0))), t;
  }function Ge(t, e) {
    var i = e.template,
        n = ne(i, !0);if (n) {
      var r = n.firstChild,
          s = r.tagName && r.tagName.toLowerCase();return e.replace ? (t === document.body, n.childNodes.length > 1 || 1 !== r.nodeType || "component" === s || gt(e, "components", s) || V(r, "is") || gt(e, "elementDirectives", s) || r.hasAttribute("v-for") || r.hasAttribute("v-if") ? n : (e._replacerAttrs = Ze(r), Ke(t, r), r)) : (t.appendChild(n), t);
    }
  }function Ze(t) {
    return 1 === t.nodeType && t.hasAttributes() ? d(t.attributes) : void 0;
  }function Ke(t, e) {
    for (var i, n, r = t.attributes, s = r.length; s--;) {
      i = r[s].name, n = r[s].value, e.hasAttribute(i) || bs.test(i) ? "class" !== i || N(n) || n.split(/\s+/).forEach(function (t) {
        Z(e, t);
      }) : e.setAttribute(i, n);
    }
  }function Xe(e) {
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
          i = t.props;e = t.el = H(e), this._propsUnlinkFn = e && 1 === e.nodeType && i ? Ne(this, e, i, this._scope) : null;
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
  }function Ye(t) {
    function e(t, e) {
      for (var i, n, r = e.attributes, s = 0, o = r.length; o > s; s++) {
        i = r[s].name, ws.test(i) && (i = i.replace(ws, ""), n = (t._scope || t._context).$eval(r[s].value, !0), n._fromParent = !0, t.$on(i.replace(ws), n));
      }
    }function i(t, e, i) {
      if (i) {
        var r, s, o, a;for (s in i) {
          if (r = i[s], wi(r)) for (o = 0, a = r.length; a > o; o++) {
            n(t, e, s, r[o]);
          } else n(t, e, s, r);
        }
      }
    }function n(t, e, i, r, s) {
      var o = typeof r === "undefined" ? "undefined" : babelHelpers_typeof(r);if ("function" === o) t[e](i, r, s);else if ("string" === o) {
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
  }function ti() {}function ei(t, e, i, n, r, s) {
    this.vm = e, this.el = i, this.descriptor = t, this.name = t.name, this.expression = t.expression, this.arg = t.arg, this.modifiers = t.modifiers, this.filters = t.filters, this.literal = this.modifiers && this.modifiers.literal, this._locked = !1, this._bound = !1, this._listeners = null, this._host = n, this._scope = r, this._frag = s;
  }function ii(t) {
    t.prototype._updateRef = function (t) {
      var e = this.$options._ref;if (e) {
        var i = (this._scope || this._context).$refs;t ? i[e] === this && (i[e] = null) : i[e] = this;
      }
    }, t.prototype._compile = function (t) {
      var e = this.$options,
          i = t;if (t = Qe(t, e), this._initElement(t), 1 !== t.nodeType || null === W(t, "v-pre")) {
        var n,
            r = this._context && this._context.$options,
            s = je(t, e, r),
            o = this.constructor;e._linkerCachable && (n = o.linker, n || (n = o.linker = ke(t, e)));var a = s(this, t, this._scope),
            h = n ? n(this, t) : ke(t, e)(this, t);return this._unlinkFn = function () {
          a(), h(!0);
        }, e.replace && q(i, t), this._isCompiled = !0, this._callHook("compiled"), t;
      }
    }, t.prototype._initElement = function (t) {
      t instanceof DocumentFragment ? (this._isFragment = !0, this.$el = this._fragmentStart = t.firstChild, this._fragmentEnd = t.lastChild, 3 === this._fragmentStart.nodeType && (this._fragmentStart.data = this._fragmentEnd.data = ""), this._fragment = t) : this.$el = t, this.$el.__vue__ = this, this._callHook("beforeCompile");
    }, t.prototype._bindDir = function (t, e, i, n, r) {
      this._directives.push(new ei(t, this, e, i, n, r));
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
  }function ni(t) {
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
  }function ri(i) {
    function n(t) {
      return new Function("return function " + f(t) + " (options) { this._init(options) }")();
    }i.util = gn, i.config = on, i.set = t, i["delete"] = e, i.nextTick = Fi, i.compiler = Cs, i.FragmentFactory = ue, i.internalDirectives = ls, i.parsers = { path: Pn, text: nn, template: zr, directive: Zi, expression: Qn }, i.cid = 0;var r = 1;i.extend = function (t) {
      t = t || {};var e = this,
          i = 0 === e.cid;if (i && t._Ctor) return t._Ctor;var s = t.name || e.options.name,
          o = n(s || "VueComponent");return o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.cid = r++, o.options = mt(e.options, t), o["super"] = e, o.extend = e.extend, on._assetTypes.forEach(function (t) {
        o[t] = e[t];
      }), s && (o.options.components[s] = o), i && (t._Ctor = o), o;
    }, i.use = function (t) {
      if (!t.installed) {
        var e = d(arguments, 1);return e.unshift(this), "function" == typeof t.install ? t.install.apply(t, e) : t.apply(null, e), t.installed = !0, this;
      }
    }, i.mixin = function (t) {
      i.options = mt(i.options, t);
    }, on._assetTypes.forEach(function (t) {
      i[t] = function (e, n) {
        return n ? ("component" === t && g(n) && (n.name = e, n = i.extend(n)), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
      };
    });
  }function si(t) {
    function i(t) {
      return JSON.parse(JSON.stringify(t));
    }t.prototype.$get = function (t, e) {
      var i = Lt(t);if (i) {
        if (e && !Wt(t)) {
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
      if ($s.test(t)) {
        var i = A(t),
            n = this.$get(i.expression, e);return i.filters ? this._applyFilters(n, null, i.filters) : n;
      }return this.$get(t, e);
    }, t.prototype.$interpolate = function (t) {
      var e = N(t),
          i = this;return e ? 1 === e.length ? i.$eval(e[0].value) + "" : e.map(function (t) {
        return t.tag ? i.$eval(t.value) : t.value;
      }).join("") : t;
    }, t.prototype.$log = function (t) {
      var e = t ? jt(this._data, t) : this._data;if (e && (e = i(e)), !t) for (var n in this.$options.computed) {
        e[n] = i(this[n]);
      }console.log(e);
    };
  }function oi(t) {
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
      M(t, e), n && n();
    }function s(t, e, i) {
      I(t), i && i();
    }t.prototype.$nextTick = function (t) {
      Fi(t, this);
    }, t.prototype.$appendTo = function (t, i, r) {
      return e(this, t, i, r, n, F);
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
  }function ai(t) {
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
  }function hi(t) {
    function e() {
      this._isAttached = !0, this._isReady = !0, this._callHook("ready");
    }t.prototype.$mount = function (t) {
      return this._isCompiled ? void 0 : (t = H(t), t || (t = document.createElement("div")), this._compile(t), this._initDOMHooks(), L(this.$el) ? (this._callHook("attached"), e.call(this)) : this.$once("hook:attached", e), this);
    }, t.prototype.$destroy = function (t, e) {
      this._destroy(t, e);
    }, t.prototype.$compile = function (t, e, i, n) {
      return ke(t, this.$options, !0)(this, t, e, i, n);
    };
  }function li(t) {
    this._init(t);
  }function ci(t, e, i) {
    return i = i ? parseInt(i, 10) : 0, e = o(e), "number" == typeof e ? t.slice(i, i + e) : t;
  }function ui(t, e, i) {
    if (t = ks(t), null == e) return t;if ("function" == typeof e) return t.filter(e);e = ("" + e).toLowerCase();for (var n, r, s, o, a = "in" === i ? 3 : 2, h = d(arguments, a).reduce(function (t, e) {
      return t.concat(e);
    }, []), l = [], c = 0, u = t.length; u > c; c++) {
      if (n = t[c], s = n && n.$value || n, o = h.length) {
        for (; o--;) {
          if (r = h[o], "$key" === r && pi(n.$key, e) || pi(jt(s, r), e)) {
            l.push(n);break;
          }
        }
      } else pi(n, e) && l.push(n);
    }return l;
  }function fi(t, e, i) {
    if (t = ks(t), !e) return t;var n = i && 0 > i ? -1 : 1;return t.slice().sort(function (t, i) {
      return "$key" !== e && (m(t) && "$value" in t && (t = t.$value), m(i) && "$value" in i && (i = i.$value)), t = m(t) ? jt(t, e) : t, i = m(i) ? jt(i, e) : i, t === i ? 0 : t > i ? n : -n;
    });
  }function pi(t, e) {
    var i;if (g(t)) {
      var n = Object.keys(t);for (i = n.length; i--;) {
        if (pi(t[n[i]], e)) return !0;
      }
    } else if (wi(t)) {
      for (i = t.length; i--;) {
        if (pi(t[i], e)) return !0;
      }
    } else if (null != t) return t.toString().toLowerCase().indexOf(e) > -1;
  }function di(t, e, i) {
    function n(t) {
      !et(t) || t.hasAttribute("v-if") || t.hasAttribute("v-for") || (t = ne(t)), t = ie(t), r.appendChild(t);
    }for (var r = document.createDocumentFragment(), s = 0, o = t.length; o > s; s++) {
      var a = t[s];i && !a.__v_selected ? n(a) : i || a.parentNode !== e || (a.__v_selected = !0, n(a));
    }return r;
  }var vi = Object.prototype.hasOwnProperty,
      mi = /^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/,
      gi = /-(\w)/g,
      _i = /([a-z\d])([A-Z])/g,
      yi = /(?:^|[-_\/])(\w)/g,
      bi = Object.prototype.toString,
      Ci = "[object Object]",
      wi = Array.isArray,
      $i = "__proto__" in {},
      ki = "undefined" != typeof window && "[object Object]" !== Object.prototype.toString.call(window),
      xi = ki && navigator.userAgent.toLowerCase().indexOf("msie 9.0") > 0,
      Ai = ki && navigator.userAgent.toLowerCase().indexOf("android") > 0,
      Oi = void 0,
      Ti = void 0,
      Ni = void 0,
      ji = void 0;if (ki && !xi) {
    var Ei = void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend,
        Si = void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend;Oi = Ei ? "WebkitTransition" : "transition", Ti = Ei ? "webkitTransitionEnd" : "transitionend", Ni = Si ? "WebkitAnimation" : "animation", ji = Si ? "webkitAnimationEnd" : "animationend";
  }var Fi = function () {
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
    } else e = setTimeout;return function (r, s) {
      var o = s ? function () {
        r.call(s);
      } : r;i.push(o), n || (n = !0, e(t, 0));
    };
  }(),
      Pi = $.prototype;Pi.put = function (t, e) {
    var i = { key: t, value: e };return this._keymap[t] = i, this.tail ? (this.tail.newer = i, i.older = this.tail) : this.head = i, this.tail = i, this.size === this.limit ? this.shift() : void this.size++;
  }, Pi.shift = function () {
    var t = this.head;return t && (this.head = this.head.newer, this.head.older = void 0, t.newer = t.older = void 0, this._keymap[t.key] = void 0), t;
  }, Pi.get = function (t, e) {
    var i = this._keymap[t];if (void 0 !== i) return i === this.tail ? e ? i : i.value : (i.newer && (i === this.head && (this.head = i.newer), i.newer.older = i.older), i.older && (i.older.newer = i.newer), i.newer = void 0, i.older = this.tail, this.tail && (this.tail.newer = i), this.tail = i, e ? i : i.value);
  };var Di,
      Ri,
      Hi,
      Li,
      Wi,
      Bi,
      Vi,
      Mi,
      zi,
      Ii,
      Ui,
      qi,
      Ji = new $(1e3),
      Qi = /[^\s'"]+|'[^']*'|"[^"]*"/g,
      Gi = /^in$|^-?\d+/,
      Zi = Object.freeze({ parseDirective: A }),
      Ki = /[-.*+?^${}()|[\]\/\\]/g,
      Xi = void 0,
      Yi = void 0,
      tn = void 0,
      en = /[^|]\|[^|]/,
      nn = Object.freeze({ compileRegex: T, parseText: N, tokensToExp: j }),
      rn = ["{{", "}}"],
      sn = ["{{{", "}}}"],
      on = Object.defineProperties({ debug: !1, silent: !1, async: !0, warnExpressionErrors: !0, convertAllProperties: !1, _delimitersChanged: !0, _assetTypes: ["component", "directive", "elementDirective", "filter", "transition", "partial"], _propBindingModes: { ONE_WAY: 0, TWO_WAY: 1, ONE_TIME: 2 }, _maxUpdateCount: 100 }, { delimiters: { get: function get() {
        return rn;
      }, set: function set(t) {
        rn = t, T();
      }, configurable: !0, enumerable: !0 }, unsafeDelimiters: { get: function get() {
        return sn;
      }, set: function set(t) {
        sn = t, T();
      }, configurable: !0, enumerable: !0 } }),
      an = void 0,
      hn = /^v-ref:/,
      ln = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/,
      cn = /^(slot|partial|component)$/,
      un = on.optionMergeStrategies = Object.create(null);un.data = function (t, e, i) {
    return i ? t || e ? function () {
      var n = "function" == typeof e ? e.call(i) : e,
          r = "function" == typeof t ? t.call(i) : void 0;return n ? ut(n, r) : r;
    } : void 0 : e ? "function" != typeof e ? t : t ? function () {
      return ut(e.call(this), t.call(this));
    } : e : t;
  }, un.el = function (t, e, i) {
    if (i || !e || "function" == typeof e) {
      var n = e || t;return i && "function" == typeof n ? n.call(i) : n;
    }
  }, un.init = un.created = un.ready = un.attached = un.detached = un.beforeCompile = un.compiled = un.beforeDestroy = un.destroyed = function (t, e) {
    return e ? t ? t.concat(e) : wi(e) ? e : [e] : t;
  }, un.paramAttributes = function () {}, on._assetTypes.forEach(function (t) {
    un[t + "s"] = ft;
  }), un.watch = un.events = function (t, e) {
    if (!e) return t;if (!t) return e;var i = {};v(i, t);for (var n in e) {
      var r = i[n],
          s = e[n];r && !wi(r) && (r = [r]), i[n] = r ? r.concat(s) : [s];
    }return i;
  }, un.props = un.methods = un.computed = function (t, e) {
    if (!e) return t;if (!t) return e;var i = Object.create(null);return v(i, t), v(i, e), i;
  };var fn = function fn(t, e) {
    return void 0 === e ? t : e;
  },
      pn = Array.prototype,
      dn = Object.create(pn);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
    var e = pn[t];_(dn, t, function () {
      for (var i = arguments.length, n = new Array(i); i--;) {
        n[i] = arguments[i];
      }var r,
          s = e.apply(this, n),
          o = this.__ob__;switch (t) {case "push":
          r = n;break;case "unshift":
          r = n;break;case "splice":
          r = n.slice(2);}return r && o.observeArray(r), o.dep.notify(), s;
    });
  }), _(pn, "$set", function (t, e) {
    return t >= this.length && (this.length = Number(t) + 1), this.splice(t, 1, e)[0];
  }), _(pn, "$remove", function (t) {
    if (this.length) {
      var e = b(this, t);return e > -1 ? this.splice(e, 1) : void 0;
    }
  });var vn = 0;yt.target = null, yt.prototype.addSub = function (t) {
    this.subs.push(t);
  }, yt.prototype.removeSub = function (t) {
    this.subs.$remove(t);
  }, yt.prototype.depend = function () {
    yt.target.addDep(this);
  }, yt.prototype.notify = function () {
    for (var t = d(this.subs), e = 0, i = t.length; i > e; e++) {
      t[e].update();
    }
  };var mn = Object.getOwnPropertyNames(dn);bt.prototype.walk = function (t) {
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
  };var gn = Object.freeze({ defineReactive: kt, set: t, del: e, hasOwn: i, isLiteral: n, isReserved: r, _toString: s, toNumber: o, toBoolean: a, stripQuotes: h, camelize: l, hyphenate: u, classify: f, bind: p, toArray: d, extend: v, isObject: m, isPlainObject: g, def: _, debounce: y, indexOf: b, cancellable: C, looseEqual: w, isArray: wi, hasProto: $i, inBrowser: ki, isIE9: xi, isAndroid: Ai, get transitionProp() {
      return Oi;
    }, get transitionEndEvent() {
      return Ti;
    }, get animationProp() {
      return Ni;
    }, get animationEndEvent() {
      return ji;
    }, nextTick: Fi, query: H, inDoc: L, getAttr: W, getBindAttr: B, hasBindAttr: V, before: M, after: z, remove: I, prepend: U, replace: q, on: J, off: Q, setClass: G, addClass: Z, removeClass: K, extractContent: X, trimNode: Y, isTemplate: et, createAnchor: it, findRef: nt, mapNodeRange: rt, removeNodeRange: st, mergeOptions: mt, resolveAsset: gt, assertAsset: _t, checkComponentAttr: ot, initProp: ht, assertProp: lt, coerceProp: ct, commonTagRE: ln, reservedTagRE: cn, warn: an }),
      _n = 0,
      yn = new $(1e3),
      bn = 0,
      Cn = 1,
      wn = 2,
      $n = 3,
      kn = 0,
      xn = 1,
      An = 2,
      On = 3,
      Tn = 4,
      Nn = 5,
      jn = 6,
      En = 7,
      Sn = 8,
      Fn = [];Fn[kn] = { ws: [kn], ident: [On, bn], "[": [Tn], eof: [En] }, Fn[xn] = { ws: [xn], ".": [An], "[": [Tn], eof: [En] }, Fn[An] = { ws: [An], ident: [On, bn] }, Fn[On] = { ident: [On, bn], 0: [On, bn], number: [On, bn], ws: [xn, Cn], ".": [An, Cn], "[": [Tn, Cn], eof: [En, Cn] }, Fn[Tn] = { "'": [Nn, bn], '"': [jn, bn], "[": [Tn, wn], "]": [xn, $n], eof: Sn, "else": [Tn, bn] }, Fn[Nn] = { "'": [Tn, bn], eof: Sn, "else": [Nn, bn] }, Fn[jn] = { '"': [Tn, bn], eof: Sn, "else": [jn, bn] };var Pn = Object.freeze({ parsePath: Nt, getPath: jt, setPath: Et }),
      Dn = new $(1e3),
      Rn = "Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",
      Hn = new RegExp("^(" + Rn.replace(/,/g, "\\b|") + "\\b)"),
      Ln = "break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,proctected,static,interface,private,public",
      Wn = new RegExp("^(" + Ln.replace(/,/g, "\\b|") + "\\b)"),
      Bn = /\s/g,
      Vn = /\n/g,
      Mn = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|new |typeof |void /g,
      zn = /"(\d+)"/g,
      In = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,
      Un = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g,
      qn = /^(?:true|false)$/,
      Jn = [],
      Qn = Object.freeze({ parseExpression: Lt, isSimplePath: Wt }),
      Gn = [],
      Zn = [],
      Kn = {},
      Xn = {},
      Yn = !1,
      tr = !1,
      er = 0;It.prototype.addDep = function (t) {
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
    this.lazy ? this.dirty = !0 : this.sync || !on.async ? this.run() : (this.shallow = this.queued ? t ? this.shallow : !1 : !!t, this.queued = !0, zt(this));
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
      this.vm._isBeingDestroyed || this.vm._watchers.$remove(this);for (var t = Object.keys(this.deps), e = t.length; e--;) {
        this.deps[t[e]].removeSub(this);
      }this.active = !1, this.vm = this.cb = this.value = null;
    }
  };var ir = { bind: function bind() {
      var t = this.el;this.vm.$once("pre-hook:compiled", function () {
        t.removeAttribute("v-cloak");
      });
    } },
      nr = { bind: function bind() {} },
      rr = 700,
      sr = 800,
      or = 850,
      ar = 1100,
      hr = 1500,
      lr = 1500,
      cr = 1750,
      ur = 1750,
      fr = 2e3,
      pr = 2e3,
      dr = { priority: hr, bind: function bind() {
      if (this.arg) {
        var t = this.id = l(this.arg),
            e = (this._scope || this.vm).$els;i(e, t) ? e[t] = this.el : kt(e, t, this.el);
      }
    }, unbind: function unbind() {
      var t = (this._scope || this.vm).$els;t[this.id] === this.el && (t[this.id] = null);
    } },
      vr = ["-webkit-", "-moz-", "-ms-"],
      mr = ["Webkit", "Moz", "ms"],
      gr = /!important;?$/,
      _r = Object.create(null),
      yr = null,
      br = { deep: !0, update: function update(t) {
      "string" == typeof t ? this.el.style.cssText = t : wi(t) ? this.handleObject(t.reduce(v, {})) : this.handleObject(t || {});
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
        var i = gr.test(e) ? "important" : "";i && (e = e.replace(gr, "").trim()), this.el.style.setProperty(t, e, i);
      } else this.el.style.removeProperty(t);
    } },
      Cr = "http://www.w3.org/1999/xlink",
      wr = /^xlink:/,
      $r = /^v-|^:|^@|^(is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,
      kr = /^(value|checked|selected|muted)$/,
      xr = { value: "_value", "true-value": "_trueValue", "false-value": "_falseValue" },
      Ar = { priority: or, bind: function bind() {
      var t = this.arg,
          e = this.el.tagName;t || (this.deep = !0);var i = this.descriptor,
          n = i.interp;n && (i.hasOneTime && (this.expression = j(n, this._scope || this.vm)), ($r.test(t) || "name" === t && ("PARTIAL" === e || "SLOT" === e)) && (this.el.removeAttribute(t), this.invalid = !0));
    }, update: function update(t) {
      if (!this.invalid) {
        var e = this.arg;this.arg ? this.handleSingle(e, t) : this.handleObject(t || {});
      }
    }, handleObject: br.handleObject, handleSingle: function handleSingle(t, e) {
      var i = this.el,
          n = this.descriptor.interp;!n && kr.test(t) && t in i && (i[t] = "value" === t && null == e ? "" : e);var r = xr[t];if (!n && r) {
        i[r] = e;var s = i.__v_model;s && s.listener();
      }return "value" === t && "TEXTAREA" === i.tagName ? void i.removeAttribute(t) : void (null != e && e !== !1 ? "class" === t ? (i.__v_trans && (e += " " + i.__v_trans.id + "-transition"), G(i, e)) : wr.test(t) ? i.setAttributeNS(Cr, t, e) : i.setAttribute(t, e) : i.removeAttribute(t));
    } },
      Or = { esc: 27, tab: 9, enter: 13, space: 32, "delete": 46, up: 38, left: 37, right: 39, down: 40 },
      Tr = { acceptStatement: !0, priority: rr, bind: function bind() {
      if ("IFRAME" === this.el.tagName && "load" !== this.arg) {
        var t = this;this.iframeBind = function () {
          J(t.el.contentWindow, t.arg, t.handler);
        }, this.on("load", this.iframeBind);
      }
    }, update: function update(t) {
      if (this.descriptor.raw || (t = function t() {}), "function" == typeof t) {
        this.modifiers.stop && (t = Gt(t)), this.modifiers.prevent && (t = Zt(t));var e = Object.keys(this.modifiers).filter(function (t) {
          return "stop" !== t && "prevent" !== t;
        });e.length && (t = Qt(t, e)), this.reset(), this.handler = t, this.iframeBind ? this.iframeBind() : J(this.el, this.arg, this.handler);
      }
    }, reset: function reset() {
      var t = this.iframeBind ? this.el.contentWindow : this.el;this.handler && Q(t, this.arg, this.handler);
    }, unbind: function unbind() {
      this.reset();
    } },
      Nr = { bind: function bind() {
      function t() {
        var t = i.checked;return t && i.hasOwnProperty("_trueValue") ? i._trueValue : !t && i.hasOwnProperty("_falseValue") ? i._falseValue : t;
      }var e = this,
          i = this.el;this.getValue = function () {
        return i.hasOwnProperty("_value") ? i._value : e.params.number ? o(i.value) : i.value;
      }, this.listener = function () {
        var n = e._watcher.value;if (wi(n)) {
          var r = e.getValue();i.checked ? b(n, r) < 0 && n.push(r) : n.$remove(r);
        } else e.set(t());
      }, this.on("change", this.listener), i.hasAttribute("checked") && (this.afterBind = this.listener);
    }, update: function update(t) {
      var e = this.el;wi(t) ? e.checked = b(t, this.getValue()) > -1 : e.hasOwnProperty("_trueValue") ? e.checked = w(t, e._trueValue) : e.checked = !!t;
    } },
      jr = { bind: function bind() {
      var t = this,
          e = this.el;this.forceUpdate = function () {
        t._watcher && t.update(t._watcher.get());
      };var i = this.multiple = e.hasAttribute("multiple");this.listener = function () {
        var n = Kt(e, i);n = t.params.number ? wi(n) ? n.map(o) : o(n) : n, t.set(n);
      }, this.on("change", this.listener);var n = Kt(e, i, !0);(i && n.length || !i && null !== n) && (this.afterBind = this.listener), this.vm.$on("hook:attached", this.forceUpdate);
    }, update: function update(t) {
      var e = this.el;e.selectedIndex = -1;for (var i, n, r = this.multiple && wi(t), s = e.options, o = s.length; o--;) {
        i = s[o], n = i.hasOwnProperty("_value") ? i._value : i.value, i.selected = r ? Xt(t, n) > -1 : w(t, n);
      }
    }, unbind: function unbind() {
      this.vm.$off("hook:attached", this.forceUpdate);
    } },
      Er = { bind: function bind() {
      var t = this,
          e = this.el;this.getValue = function () {
        if (e.hasOwnProperty("_value")) return e._value;var i = e.value;return t.params.number && (i = o(i)), i;
      }, this.listener = function () {
        t.set(t.getValue());
      }, this.on("change", this.listener), e.hasAttribute("checked") && (this.afterBind = this.listener);
    }, update: function update(t) {
      this.el.checked = w(t, this.getValue());
    } },
      Sr = { bind: function bind() {
      var t = this,
          e = this.el,
          i = "range" === e.type,
          n = this.params.lazy,
          r = this.params.number,
          s = this.params.debounce,
          a = !1;Ai || i || (this.on("compositionstart", function () {
        a = !0;
      }), this.on("compositionend", function () {
        a = !1, n || t.listener();
      })), this.focused = !1, i || n || (this.on("focus", function () {
        t.focused = !0;
      }), this.on("blur", function () {
        t.focused = !1, (!t._frag || t._frag.inserted) && t.rawListener();
      })), this.listener = this.rawListener = function () {
        if (!a && t._bound) {
          var n = r || i ? o(e.value) : e.value;t.set(n), Fi(function () {
            t._bound && !t.focused && t.update(t._watcher.value);
          });
        }
      }, s && (this.listener = y(this.listener, s)), this.hasjQuery = "function" == typeof jQuery, this.hasjQuery ? (jQuery(e).on("change", this.listener), n || jQuery(e).on("input", this.listener)) : (this.on("change", this.listener), n || this.on("input", this.listener)), !n && xi && (this.on("cut", function () {
        Fi(t.listener);
      }), this.on("keyup", function (e) {
        (46 === e.keyCode || 8 === e.keyCode) && t.listener();
      })), (e.hasAttribute("value") || "TEXTAREA" === e.tagName && e.value.trim()) && (this.afterBind = this.listener);
    }, update: function update(t) {
      this.el.value = s(t);
    }, unbind: function unbind() {
      var t = this.el;this.hasjQuery && (jQuery(t).off("change", this.listener), jQuery(t).off("input", this.listener));
    } },
      Fr = { text: Sr, radio: Er, select: jr, checkbox: Nr },
      Pr = { priority: sr, twoWay: !0, handlers: Fr, params: ["lazy", "number", "debounce"], bind: function bind() {
      this.checkFilters(), this.hasRead && !this.hasWrite;var t,
          e = this.el,
          i = e.tagName;if ("INPUT" === i) t = Fr[e.type] || Fr.text;else if ("SELECT" === i) t = Fr.select;else {
        if ("TEXTAREA" !== i) return;t = Fr.text;
      }e.__v_model = this, t.bind.call(this), this.update = t.update, this._unbind = t.unbind;
    }, checkFilters: function checkFilters() {
      var t = this.filters;if (t) for (var e = t.length; e--;) {
        var i = gt(this.vm.$options, "filters", t[e].name);("function" == typeof i || i.read) && (this.hasRead = !0), i.write && (this.hasWrite = !0);
      }
    }, unbind: function unbind() {
      this.el.__v_model = null, this._unbind && this._unbind();
    } },
      Dr = { bind: function bind() {
      var t = this.el.nextElementSibling;t && null !== W(t, "v-else") && (this.elseEl = t);
    }, update: function update(t) {
      this.apply(this.el, t), this.elseEl && this.apply(this.elseEl, !t);
    }, apply: function apply(t, e) {
      function i() {
        t.style.display = e ? "" : "none";
      }L(t) ? R(t, e ? 1 : -1, i, this.vm) : i();
    } },
      Rr = new $(1e3),
      Hr = new $(1e3),
      Lr = { efault: [0, "", ""], legend: [1, "<fieldset>", "</fieldset>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"] };Lr.td = Lr.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], Lr.option = Lr.optgroup = [1, '<select multiple="multiple">', "</select>"], Lr.thead = Lr.tbody = Lr.colgroup = Lr.caption = Lr.tfoot = [1, "<table>", "</table>"], Lr.g = Lr.defs = Lr.symbol = Lr.use = Lr.image = Lr.text = Lr.circle = Lr.ellipse = Lr.line = Lr.path = Lr.polygon = Lr.polyline = Lr.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">', "</svg>"];var Wr = /<([\w:]+)/,
      Br = /&#?\w+?;/,
      Vr = function () {
    if (ki) {
      var t = document.createElement("div");return t.innerHTML = "<template>1</template>", !t.cloneNode(!0).firstChild.innerHTML;
    }return !1;
  }(),
      Mr = function () {
    if (ki) {
      var t = document.createElement("textarea");return t.placeholder = "t", "t" === t.cloneNode(!0).value;
    }return !1;
  }(),
      zr = Object.freeze({ cloneNode: ie, parseTemplate: ne });re.prototype.callHook = function (t) {
    var e, i;for (e = 0, i = this.childFrags.length; i > e; e++) {
      this.childFrags[e].callHook(t);
    }for (e = 0, i = this.children.length; i > e; e++) {
      t(this.children[e]);
    }
  }, re.prototype.beforeRemove = function () {
    var t, e;for (t = 0, e = this.childFrags.length; e > t; t++) {
      this.childFrags[t].beforeRemove(!1);
    }for (t = 0, e = this.children.length; e > t; t++) {
      this.children[t].$destroy(!1, !0);
    }var i = this.unlink.dirs;for (t = 0, e = i.length; e > t; t++) {
      i[t]._watcher && i[t]._watcher.teardown();
    }
  }, re.prototype.destroy = function () {
    this.parentFrag && this.parentFrag.childFrags.$remove(this), this.unlink();
  };var Ir = new $(5e3);ue.prototype.create = function (t, e, i) {
    var n = ie(this.template);return new re(this.linker, this.vm, n, t, e, i);
  };var Ur = { priority: pr, bind: function bind() {
      var t = this.el;if (t.__vue__) this.invalid = !0;else {
        var e = t.nextElementSibling;e && null !== W(e, "v-else") && (I(e), this.elseFactory = new ue(this.vm, e)), this.anchor = it("v-if"), q(t, this.anchor), this.factory = new ue(this.vm, t);
      }
    }, update: function update(t) {
      this.invalid || (t ? this.frag || this.insert() : this.remove());
    }, insert: function insert() {
      this.elseFrag && (this.elseFrag.remove(), this.elseFrag = null), this.frag = this.factory.create(this._host, this._scope, this._frag), this.frag.before(this.anchor);
    }, remove: function remove() {
      this.frag && (this.frag.remove(), this.frag = null), this.elseFactory && !this.elseFrag && (this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag), this.elseFrag.before(this.anchor));
    }, unbind: function unbind() {
      this.frag && this.frag.destroy();
    } },
      qr = 0,
      Jr = { priority: fr, params: ["track-by", "stagger", "enter-stagger", "leave-stagger"], bind: function bind() {
      var t = this.expression.match(/(.*) in (.*)/);if (t) {
        var e = t[1].match(/\((.*),(.*)\)/);e ? (this.iterator = e[1].trim(), this.alias = e[2].trim()) : this.alias = t[1].trim(), this.expression = t[2];
      }if (this.alias) {
        this.id = "__v-for__" + ++qr;var i = this.el.tagName;this.isOption = ("OPTION" === i || "OPTGROUP" === i) && "SELECT" === this.el.parentNode.tagName, this.start = it("v-for-start"), this.end = it("v-for-end"), q(this.el, this.end), M(this.start, this.end), this.cache = Object.create(null), this.factory = new ue(this.vm, this.el);
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
            C = u.length - f.length;for (e = 0, n = u.length; n > e; e++) {
          r = u[e], r.reused || (this.deleteCachedFrag(r), this.remove(r, b++, C, _));
        }var w,
            $,
            k,
            x = 0;for (e = 0, n = f.length; n > e; e++) {
          r = f[e], w = f[e - 1], $ = w ? w.staggerCb ? w.staggerAnchor : w.end || w.node : v, r.reused && !r.staggerCb ? (k = fe(r, v, this.id), k === w || k && fe(k, v, this.id) === w || this.move(r, $)) : this.insert(r, x++, $, _), r.reused = r.fresh = !1;
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
          e[t.scope.$key] = pe(t);
        })) : e = this.frags.map(pe), i[t] = e;
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
      t.before(e.nextSibling, !1);
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
      if (wi(t)) return t;if (g(t)) {
        for (var e, i = Object.keys(t), n = i.length, r = new Array(n); n--;) {
          e = i[n], r[n] = { $key: e, $value: t[e] };
        }return r;
      }return "number" == typeof t && (t = de(t)), t || [];
    }, unbind: function unbind() {
      if (this.descriptor.ref && ((this._scope || this.vm).$refs[this.descriptor.ref] = null), this.frags) for (var t, e = this.frags.length; e--;) {
        t = this.frags[e], this.deleteCachedFrag(t), t.destroy();
      }
    } },
      Qr = { bind: function bind() {
      8 === this.el.nodeType && (this.nodes = [], this.anchor = it("v-html"), q(this.el, this.anchor));
    }, update: function update(t) {
      t = s(t), this.nodes ? this.swap(t) : this.el.innerHTML = t;
    }, swap: function swap(t) {
      for (var e = this.nodes.length; e--;) {
        I(this.nodes[e]);
      }var i = ne(t, !0, !0);this.nodes = d(i.childNodes), M(i, this.anchor);
    } },
      Gr = { bind: function bind() {
      this.attr = 3 === this.el.nodeType ? "data" : "textContent";
    }, update: function update(t) {
      this.el[this.attr] = s(t);
    } },
      Zr = { text: Gr, html: Qr, "for": Jr, "if": Ur, show: Dr, model: Pr, on: Tr, bind: Ar, el: dr, ref: nr, cloak: ir },
      Kr = [],
      Xr = !1,
      Yr = "transition",
      ts = "animation",
      es = Oi + "Duration",
      is = Ni + "Duration",
      ns = ge.prototype;ns.enter = function (t, e) {
    this.cancelPending(), this.callHook("beforeEnter"), this.cb = e, Z(this.el, this.enterClass), t(), this.entered = !1, this.callHookWithCb("enter"), this.entered || (this.cancel = this.hooks && this.hooks.enterCancelled, ve(this.enterNextTick));
  }, ns.enterNextTick = function () {
    this.justEntered = !0;var t = this;setTimeout(function () {
      t.justEntered = !1;
    }, 17);var e = this.enterDone,
        i = this.getCssTransitionType(this.enterClass);this.pendingJsCb ? i === Yr && K(this.el, this.enterClass) : i === Yr ? (K(this.el, this.enterClass), this.setupCssCb(Ti, e)) : i === ts ? this.setupCssCb(ji, e) : e();
  }, ns.enterDone = function () {
    this.entered = !0, this.cancel = this.pendingJsCb = null, K(this.el, this.enterClass), this.callHook("afterEnter"), this.cb && this.cb();
  }, ns.leave = function (t, e) {
    this.cancelPending(), this.callHook("beforeLeave"), this.op = t, this.cb = e, Z(this.el, this.leaveClass), this.left = !1, this.callHookWithCb("leave"), this.left || (this.cancel = this.hooks && this.hooks.leaveCancelled, this.op && !this.pendingJsCb && (this.justEntered ? this.leaveDone() : ve(this.leaveNextTick)));
  }, ns.leaveNextTick = function () {
    var t = this.getCssTransitionType(this.leaveClass);if (t) {
      var e = t === Yr ? Ti : ji;this.setupCssCb(e, this.leaveDone);
    } else this.leaveDone();
  }, ns.leaveDone = function () {
    this.left = !0, this.cancel = this.pendingJsCb = null, this.op(), K(this.el, this.leaveClass), this.callHook("afterLeave"), this.cb && this.cb(), this.op = null;
  }, ns.cancelPending = function () {
    this.op = this.cb = null;var t = !1;this.pendingCssCb && (t = !0, Q(this.el, this.pendingCssEvent, this.pendingCssCb), this.pendingCssEvent = this.pendingCssCb = null), this.pendingJsCb && (t = !0, this.pendingJsCb.cancel(), this.pendingJsCb = null), t && (K(this.el, this.enterClass), K(this.el, this.leaveClass)), this.cancel && (this.cancel.call(this.vm, this.el), this.cancel = null);
  }, ns.callHook = function (t) {
    this.hooks && this.hooks[t] && this.hooks[t].call(this.vm, this.el);
  }, ns.callHookWithCb = function (t) {
    var e = this.hooks && this.hooks[t];e && (e.length > 1 && (this.pendingJsCb = C(this[t + "Done"])), e.call(this.vm, this.el, this.pendingJsCb));
  }, ns.getCssTransitionType = function (t) {
    if (!(!Ti || document.hidden || this.hooks && this.hooks.css === !1 || _e(this.el))) {
      var e = this.type || this.typeCache[t];if (e) return e;var i = this.el.style,
          n = window.getComputedStyle(this.el),
          r = i[es] || n[es];if (r && "0s" !== r) e = Yr;else {
        var s = i[is] || n[is];s && "0s" !== s && (e = ts);
      }return e && (this.typeCache[t] = e), e;
    }
  }, ns.setupCssCb = function (t, e) {
    this.pendingCssEvent = t;var i = this,
        n = this.el,
        r = this.pendingCssCb = function (s) {
      s.target === n && (Q(n, t, r), i.pendingCssEvent = i.pendingCssCb = null, !i.pendingJsCb && e && e());
    };J(n, t, r);
  };var rs = { priority: ar, update: function update(t, e) {
      var i = this.el,
          n = gt(this.vm.$options, "transitions", t);t = t || "v", i.__v_trans = new ge(i, t, n, this.el.__vue__ || this.vm), e && K(i, e + "-transition"), Z(i, t + "-transition");
    } },
      ss = on._propBindingModes,
      os = { bind: function bind() {
      var t = this.vm,
          e = t._context,
          i = this.descriptor.prop,
          n = i.path,
          r = i.parentPath,
          s = i.mode === ss.TWO_WAY,
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
      as = { priority: lr, params: ["keep-alive", "transition-mode", "inline-template"], bind: function bind() {
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
        var i = { name: this.ComponentName, el: ie(this.el), template: this.inlineTemplate, parent: this._host || this.vm, _linkerCachable: !this.inlineTemplate, _ref: this.descriptor.ref, _asComponent: !0, _isRouterView: this._isRouterView, _context: this.vm, _scope: this._scope, _frag: this._frag };t && v(i, t);var n = new this.Component(i);return this.keepAlive && (this.cache[this.Component.cid] = n), n;
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
      hs = { deep: !0, update: function update(t) {
      t && "string" == typeof t ? this.handleObject(ye(t)) : g(t) ? this.handleObject(t) : wi(t) ? this.handleArray(t) : this.cleanup();
    }, handleObject: function handleObject(t) {
      this.cleanup(t);for (var e = this.prevKeys = Object.keys(t), i = 0, n = e.length; n > i; i++) {
        var r = e[i];t[r] ? Z(this.el, r) : K(this.el, r);
      }
    }, handleArray: function handleArray(t) {
      this.cleanup(t);for (var e = 0, i = t.length; i > e; e++) {
        t[e] && Z(this.el, t[e]);
      }this.prevKeys = t.slice();
    }, cleanup: function cleanup(t) {
      if (this.prevKeys) for (var e = this.prevKeys.length; e--;) {
        var i = this.prevKeys[e];!i || t && be(t, i) || K(this.el, i);
      }
    } },
      ls = { style: br, "class": hs, component: as, prop: os, transition: rs },
      cs = on._propBindingModes,
      us = {},
      fs = /^[$_a-zA-Z]+[\w$]*$/,
      ps = /^v-bind:|^:/,
      ds = /^v-on:|^@/,
      vs = /:(.*)$/,
      ms = /\.[^\.]+/g,
      gs = /^(v-bind:|:)?transition$/,
      _s = ["for", "if"],
      ys = 1e3;Me.terminal = !0;var bs = /[^\w\-:\.]/,
      Cs = Object.freeze({ compile: ke, compileAndLinkProps: Ne, compileRoot: je, terminalDirectives: _s, transclude: Qe }),
      ws = /^v-on:|^@/;ei.prototype._bind = function () {
    var t = this.name,
        e = this.descriptor;if (("cloak" !== t || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
      var i = e.attr || "v-" + t;this.el.removeAttribute(i);
    }var n = e.def;if ("function" == typeof n ? this.update = n : v(this, n), this._setupParams(), this.bind && this.bind(), this._bound = !0, this.literal) this.update && this.update(e.raw);else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
      var r = this;this.update ? this._update = function (t, e) {
        r._locked || r.update(t, e);
      } : this._update = ti;var s = this._preProcess ? p(this._preProcess, this) : null,
          o = this._postProcess ? p(this._postProcess, this) : null,
          a = this._watcher = new It(this.vm, this.expression, this._update, { filters: this.filters, twoWay: this.twoWay, deep: this.deep, preProcess: s, postProcess: o, scope: this._scope });this.afterBind ? this.afterBind() : this.update && this.update(a.value);
    }
  }, ei.prototype._setupParams = function () {
    if (this.params) {
      var t = this.params;this.params = Object.create(null);for (var e, i, n, r = t.length; r--;) {
        e = t[r], n = l(e), i = B(this.el, e), null != i ? this._setupParamWatcher(n, i) : (i = W(this.el, e), null != i && (this.params[n] = "" === i ? !0 : i));
      }
    }
  }, ei.prototype._setupParamWatcher = function (t, e) {
    var i = this,
        n = !1,
        r = (this._scope || this.vm).$watch(e, function (e, r) {
      if (i.params[t] = e, n) {
        var s = i.paramWatchers && i.paramWatchers[t];s && s.call(i, e, r);
      } else n = !0;
    }, { immediate: !0, user: !1 });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(r);
  }, ei.prototype._checkStatement = function () {
    var t = this.expression;if (t && this.acceptStatement && !Wt(t)) {
      var e = Lt(t).get,
          i = this._scope || this.vm,
          n = function n(t) {
        i.$event = t, e.call(i, i), i.$event = null;
      };return this.filters && (n = i._applyFilters(n, null, this.filters)), this.update(n), !0;
    }
  }, ei.prototype.set = function (t) {
    this.twoWay && this._withLock(function () {
      this._watcher.set(t);
    });
  }, ei.prototype._withLock = function (t) {
    var e = this;e._locked = !0, t.call(e), Fi(function () {
      e._locked = !1;
    });
  }, ei.prototype.on = function (t, e) {
    J(this.el, t, e), (this._listeners || (this._listeners = [])).push([t, e]);
  }, ei.prototype._teardown = function () {
    if (this._bound) {
      this._bound = !1, this.unbind && this.unbind(), this._watcher && this._watcher.teardown();var t,
          e = this._listeners;if (e) for (t = e.length; t--;) {
        Q(this.el, e[t][0], e[t][1]);
      }var i = this._paramUnwatchFns;if (i) for (t = i.length; t--;) {
        i[t]();
      }this.vm = this.el = this._watcher = this._listeners = null;
    }
  };var $s = /[^|]\|[^|]/;xt(li), Xe(li), Ye(li), ii(li), ni(li), ri(li), si(li), oi(li), ai(li), hi(li);var ks = Jr._postProcess,
      xs = /(\d{3})(?=\d)/g,
      As = { orderBy: fi, filterBy: ui, limitBy: ci, json: { read: function read(t, e) {
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
          a = 0 > t ? "-" : "";return e + a + s + n.slice(r).replace(xs, "$1,") + o;
    }, pluralize: function pluralize(t) {
      var e = d(arguments, 1);return e.length > 1 ? e[t % 10 - 1] || e[e.length - 1] : e[0] + (1 === t ? "" : "s");
    }, debounce: function debounce(t, e) {
      return t ? (e || (e = 300), y(t, e)) : void 0;
    } },
      Os = { priority: cr, params: ["name"], paramWatchers: { name: function name(t) {
        Ur.remove.call(this), t && this.insert(t);
      } }, bind: function bind() {
      this.anchor = it("v-partial"), q(this.el, this.anchor), this.insert(this.params.name);
    }, insert: function insert(t) {
      var e = gt(this.vm.$options, "partials", t);e && (this.factory = new ue(this.vm, e), Ur.insert.call(this));
    }, unbind: function unbind() {
      this.frag && this.frag.destroy();
    } },
      Ts = { priority: ur, bind: function bind() {
      var t = this.vm,
          e = t.$options._content;if (!e) return void this.fallback();var i = t._context,
          n = this.params && this.params.name;if (n) {
        var r = '[slot="' + n + '"]',
            s = e.querySelectorAll(r);s.length ? this.tryCompile(di(s, e), i, t) : this.fallback();
      } else this.tryCompile(di(e.childNodes, e, !0), i, t);
    }, tryCompile: function tryCompile(t, e, i) {
      t.hasChildNodes() ? this.compile(t, e, i) : this.fallback();
    }, compile: function compile(t, e, i) {
      if (t && e) {
        var n = i ? i._scope : this._scope;this.unlink = e.$compile(t, i, n, this._frag);
      }t ? q(this.el, t) : I(this.el);
    }, fallback: function fallback() {
      this.compile(X(this.el, !0), this.vm);
    }, unbind: function unbind() {
      this.unlink && this.unlink();
    } },
      Ns = v(v({}, Ts), { priority: Ts.priority + 1, params: ["name"] }),
      js = { slot: Ts, _namedSlot: Ns, partial: Os };return li.version = "1.0.14", li.options = { directives: Zr, elementDirectives: js, filters: As, transitions: {}, components: {}, partials: {}, replace: !0 }, li;
});

/*!
* @license EaselJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011-2015 gskinner.com, inc.
*
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/
this.createjs = this.createjs || {}, createjs.extend = function (a, b) {
  "use strict";
  function c() {
    this.constructor = a;
  }return c.prototype = b.prototype, a.prototype = new c();
}, this.createjs = this.createjs || {}, createjs.promote = function (a, b) {
  "use strict";
  var c = a.prototype,
      d = Object.getPrototypeOf && Object.getPrototypeOf(c) || c.__proto__;if (d) {
    c[(b += "_") + "constructor"] = d.constructor;for (var e in d) {
      c.hasOwnProperty(e) && "function" == typeof d[e] && (c[b + e] = d[e]);
    }
  }return a;
}, this.createjs = this.createjs || {}, createjs.indexOf = function (a, b) {
  "use strict";
  for (var c = 0, d = a.length; d > c; c++) {
    if (b === a[c]) return c;
  }return -1;
}, this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a, b, c) {
    this.type = a, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!b, this.cancelable = !!c, this.timeStamp = new Date().getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1;
  }var b = a.prototype;b.preventDefault = function () {
    this.defaultPrevented = this.cancelable && !0;
  }, b.stopPropagation = function () {
    this.propagationStopped = !0;
  }, b.stopImmediatePropagation = function () {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }, b.remove = function () {
    this.removed = !0;
  }, b.clone = function () {
    return new a(this.type, this.bubbles, this.cancelable);
  }, b.set = function (a) {
    for (var b in a) {
      this[b] = a[b];
    }return this;
  }, b.toString = function () {
    return "[Event (type=" + this.type + ")]";
  }, createjs.Event = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a() {
    this._listeners = null, this._captureListeners = null;
  }var b = a.prototype;a.initialize = function (a) {
    a.addEventListener = b.addEventListener, a.on = b.on, a.removeEventListener = a.off = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent, a._dispatchEvent = b._dispatchEvent, a.willTrigger = b.willTrigger;
  }, b.addEventListener = function (a, b, c) {
    var d;d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};var e = d[a];return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b;
  }, b.on = function (a, b, c, d, e, f) {
    return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function (a) {
      b.call(c, a, e), d && a.remove();
    }, f);
  }, b.removeEventListener = function (a, b, c) {
    var d = c ? this._captureListeners : this._listeners;if (d) {
      var e = d[a];if (e) for (var f = 0, g = e.length; g > f; f++) {
        if (e[f] == b) {
          1 == g ? delete d[a] : e.splice(f, 1);break;
        }
      }
    }
  }, b.off = b.removeEventListener, b.removeAllEventListeners = function (a) {
    a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null;
  }, b.dispatchEvent = function (a, b, c) {
    if ("string" == typeof a) {
      var d = this._listeners;if (!(b || d && d[a])) return !0;a = new createjs.Event(a, b, c);
    } else a.target && a.clone && (a = a.clone());try {
      a.target = this;
    } catch (e) {}if (a.bubbles && this.parent) {
      for (var f = this, g = [f]; f.parent;) {
        g.push(f = f.parent);
      }var h,
          i = g.length;for (h = i - 1; h >= 0 && !a.propagationStopped; h--) {
        g[h]._dispatchEvent(a, 1 + (0 == h));
      }for (h = 1; i > h && !a.propagationStopped; h++) {
        g[h]._dispatchEvent(a, 3);
      }
    } else this._dispatchEvent(a, 2);return !a.defaultPrevented;
  }, b.hasEventListener = function (a) {
    var b = this._listeners,
        c = this._captureListeners;return !!(b && b[a] || c && c[a]);
  }, b.willTrigger = function (a) {
    for (var b = this; b;) {
      if (b.hasEventListener(a)) return !0;b = b.parent;
    }return !1;
  }, b.toString = function () {
    return "[EventDispatcher]";
  }, b._dispatchEvent = function (a, b) {
    var c,
        d = 1 == b ? this._captureListeners : this._listeners;if (a && d) {
      var e = d[a.type];if (!e || !(c = e.length)) return;try {
        a.currentTarget = this;
      } catch (f) {}try {
        a.eventPhase = b;
      } catch (f) {}a.removed = !1, e = e.slice();for (var g = 0; c > g && !a.immediatePropagationStopped; g++) {
        var h = e[g];h.handleEvent ? h.handleEvent(a) : h(a), a.removed && (this.off(a.type, h, 1 == b), a.removed = !1);
      }
    }
  }, createjs.EventDispatcher = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a() {
    throw "Ticker cannot be instantiated.";
  }a.RAF_SYNCHED = "synched", a.RAF = "raf", a.TIMEOUT = "timeout", a.useRAF = !1, a.timingMode = null, a.maxDelta = 0, a.paused = !1, a.removeEventListener = null, a.removeAllEventListeners = null, a.dispatchEvent = null, a.hasEventListener = null, a._listeners = null, createjs.EventDispatcher.initialize(a), a._addEventListener = a.addEventListener, a.addEventListener = function () {
    return !a._inited && a.init(), a._addEventListener.apply(a, arguments);
  }, a._inited = !1, a._startTime = 0, a._pausedTime = 0, a._ticks = 0, a._pausedTicks = 0, a._interval = 50, a._lastTime = 0, a._times = null, a._tickTimes = null, a._timerId = null, a._raf = !0, a.setInterval = function (b) {
    a._interval = b, a._inited && a._setupTick();
  }, a.getInterval = function () {
    return a._interval;
  }, a.setFPS = function (b) {
    a.setInterval(1e3 / b);
  }, a.getFPS = function () {
    return 1e3 / a._interval;
  };try {
    Object.defineProperties(a, { interval: { get: a.getInterval, set: a.setInterval }, framerate: { get: a.getFPS, set: a.setFPS } });
  } catch (b) {
    console.log(b);
  }a.init = function () {
    a._inited || (a._inited = !0, a._times = [], a._tickTimes = [], a._startTime = a._getTime(), a._times.push(a._lastTime = 0), a.interval = a._interval);
  }, a.reset = function () {
    if (a._raf) {
      var b = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;b && b(a._timerId);
    } else clearTimeout(a._timerId);a.removeAllEventListeners("tick"), a._timerId = a._times = a._tickTimes = null, a._startTime = a._lastTime = a._ticks = 0, a._inited = !1;
  }, a.getMeasuredTickTime = function (b) {
    var c = 0,
        d = a._tickTimes;if (!d || d.length < 1) return -1;b = Math.min(d.length, b || 0 | a.getFPS());for (var e = 0; b > e; e++) {
      c += d[e];
    }return c / b;
  }, a.getMeasuredFPS = function (b) {
    var c = a._times;return !c || c.length < 2 ? -1 : (b = Math.min(c.length - 1, b || 0 | a.getFPS()), 1e3 / ((c[0] - c[b]) / b));
  }, a.setPaused = function (b) {
    a.paused = b;
  }, a.getPaused = function () {
    return a.paused;
  }, a.getTime = function (b) {
    return a._startTime ? a._getTime() - (b ? a._pausedTime : 0) : -1;
  }, a.getEventTime = function (b) {
    return a._startTime ? (a._lastTime || a._startTime) - (b ? a._pausedTime : 0) : -1;
  }, a.getTicks = function (b) {
    return a._ticks - (b ? a._pausedTicks : 0);
  }, a._handleSynch = function () {
    a._timerId = null, a._setupTick(), a._getTime() - a._lastTime >= .97 * (a._interval - 1) && a._tick();
  }, a._handleRAF = function () {
    a._timerId = null, a._setupTick(), a._tick();
  }, a._handleTimeout = function () {
    a._timerId = null, a._setupTick(), a._tick();
  }, a._setupTick = function () {
    if (null == a._timerId) {
      var b = a.timingMode || a.useRAF && a.RAF_SYNCHED;if (b == a.RAF_SYNCHED || b == a.RAF) {
        var c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;if (c) return a._timerId = c(b == a.RAF ? a._handleRAF : a._handleSynch), void (a._raf = !0);
      }a._raf = !1, a._timerId = setTimeout(a._handleTimeout, a._interval);
    }
  }, a._tick = function () {
    var b = a.paused,
        c = a._getTime(),
        d = c - a._lastTime;if (a._lastTime = c, a._ticks++, b && (a._pausedTicks++, a._pausedTime += d), a.hasEventListener("tick")) {
      var e = new createjs.Event("tick"),
          f = a.maxDelta;e.delta = f && d > f ? f : d, e.paused = b, e.time = c, e.runTime = c - a._pausedTime, a.dispatchEvent(e);
    }for (a._tickTimes.unshift(a._getTime() - c); a._tickTimes.length > 100;) {
      a._tickTimes.pop();
    }for (a._times.unshift(c); a._times.length > 100;) {
      a._times.pop();
    }
  };var c = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);a._getTime = function () {
    return (c && c.call(performance) || new Date().getTime()) - a._startTime;
  }, createjs.Ticker = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a() {
    throw "UID cannot be instantiated";
  }a._nextID = 0, a.get = function () {
    return a._nextID++;
  }, createjs.UID = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a, b, c, d, e, f, g, h, i, j, k) {
    this.Event_constructor(a, b, c), this.stageX = d, this.stageY = e, this.rawX = null == i ? d : i, this.rawY = null == j ? e : j, this.nativeEvent = f, this.pointerID = g, this.primary = !!h, this.relatedTarget = k;
  }var b = createjs.extend(a, createjs.Event);b._get_localX = function () {
    return this.currentTarget.globalToLocal(this.rawX, this.rawY).x;
  }, b._get_localY = function () {
    return this.currentTarget.globalToLocal(this.rawX, this.rawY).y;
  }, b._get_isTouch = function () {
    return -1 !== this.pointerID;
  };try {
    Object.defineProperties(b, { localX: { get: b._get_localX }, localY: { get: b._get_localY }, isTouch: { get: b._get_isTouch } });
  } catch (c) {}b.clone = function () {
    return new a(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY);
  }, b.toString = function () {
    return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]";
  }, createjs.MouseEvent = createjs.promote(a, "Event");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a, b, c, d, e, f) {
    this.setValues(a, b, c, d, e, f);
  }var b = a.prototype;a.DEG_TO_RAD = Math.PI / 180, a.identity = null, b.setValues = function (a, b, c, d, e, f) {
    return this.a = null == a ? 1 : a, this.b = b || 0, this.c = c || 0, this.d = null == d ? 1 : d, this.tx = e || 0, this.ty = f || 0, this;
  }, b.append = function (a, b, c, d, e, f) {
    var g = this.a,
        h = this.b,
        i = this.c,
        j = this.d;return (1 != a || 0 != b || 0 != c || 1 != d) && (this.a = g * a + i * b, this.b = h * a + j * b, this.c = g * c + i * d, this.d = h * c + j * d), this.tx = g * e + i * f + this.tx, this.ty = h * e + j * f + this.ty, this;
  }, b.prepend = function (a, b, c, d, e, f) {
    var g = this.a,
        h = this.c,
        i = this.tx;return this.a = a * g + c * this.b, this.b = b * g + d * this.b, this.c = a * h + c * this.d, this.d = b * h + d * this.d, this.tx = a * i + c * this.ty + e, this.ty = b * i + d * this.ty + f, this;
  }, b.appendMatrix = function (a) {
    return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty);
  }, b.prependMatrix = function (a) {
    return this.prepend(a.a, a.b, a.c, a.d, a.tx, a.ty);
  }, b.appendTransform = function (b, c, d, e, f, g, h, i, j) {
    if (f % 360) var k = f * a.DEG_TO_RAD,
        l = Math.cos(k),
        m = Math.sin(k);else l = 1, m = 0;return g || h ? (g *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.append(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c), this.append(l * d, m * d, -m * e, l * e, 0, 0)) : this.append(l * d, m * d, -m * e, l * e, b, c), (i || j) && (this.tx -= i * this.a + j * this.c, this.ty -= i * this.b + j * this.d), this;
  }, b.prependTransform = function (b, c, d, e, f, g, h, i, j) {
    if (f % 360) var k = f * a.DEG_TO_RAD,
        l = Math.cos(k),
        m = Math.sin(k);else l = 1, m = 0;return (i || j) && (this.tx -= i, this.ty -= j), g || h ? (g *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.prepend(l * d, m * d, -m * e, l * e, 0, 0), this.prepend(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c)) : this.prepend(l * d, m * d, -m * e, l * e, b, c), this;
  }, b.rotate = function (b) {
    b *= a.DEG_TO_RAD;var c = Math.cos(b),
        d = Math.sin(b),
        e = this.a,
        f = this.b;return this.a = e * c + this.c * d, this.b = f * c + this.d * d, this.c = -e * d + this.c * c, this.d = -f * d + this.d * c, this;
  }, b.skew = function (b, c) {
    return b *= a.DEG_TO_RAD, c *= a.DEG_TO_RAD, this.append(Math.cos(c), Math.sin(c), -Math.sin(b), Math.cos(b), 0, 0), this;
  }, b.scale = function (a, b) {
    return this.a *= a, this.b *= a, this.c *= b, this.d *= b, this;
  }, b.translate = function (a, b) {
    return this.tx += this.a * a + this.c * b, this.ty += this.b * a + this.d * b, this;
  }, b.identity = function () {
    return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this;
  }, b.invert = function () {
    var a = this.a,
        b = this.b,
        c = this.c,
        d = this.d,
        e = this.tx,
        f = a * d - b * c;return this.a = d / f, this.b = -b / f, this.c = -c / f, this.d = a / f, this.tx = (c * this.ty - d * e) / f, this.ty = -(a * this.ty - b * e) / f, this;
  }, b.isIdentity = function () {
    return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d;
  }, b.equals = function (a) {
    return this.tx === a.tx && this.ty === a.ty && this.a === a.a && this.b === a.b && this.c === a.c && this.d === a.d;
  }, b.transformPoint = function (a, b, c) {
    return c = c || {}, c.x = a * this.a + b * this.c + this.tx, c.y = a * this.b + b * this.d + this.ty, c;
  }, b.decompose = function (b) {
    null == b && (b = {}), b.x = this.tx, b.y = this.ty, b.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), b.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);var c = Math.atan2(-this.c, this.d),
        d = Math.atan2(this.b, this.a),
        e = Math.abs(1 - c / d);return 1e-5 > e ? (b.rotation = d / a.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (b.rotation += b.rotation <= 0 ? 180 : -180), b.skewX = b.skewY = 0) : (b.skewX = c / a.DEG_TO_RAD, b.skewY = d / a.DEG_TO_RAD), b;
  }, b.copy = function (a) {
    return this.setValues(a.a, a.b, a.c, a.d, a.tx, a.ty);
  }, b.clone = function () {
    return new a(this.a, this.b, this.c, this.d, this.tx, this.ty);
  }, b.toString = function () {
    return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]";
  }, a.identity = new a(), createjs.Matrix2D = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a, b, c, d, e) {
    this.setValues(a, b, c, d, e);
  }var b = a.prototype;b.setValues = function (a, b, c, d, e) {
    return this.visible = null == a ? !0 : !!a, this.alpha = null == b ? 1 : b, this.shadow = c, this.compositeOperation = c, this.matrix = e || this.matrix && this.matrix.identity() || new createjs.Matrix2D(), this;
  }, b.append = function (a, b, c, d, e) {
    return this.alpha *= b, this.shadow = c || this.shadow, this.compositeOperation = d || this.compositeOperation, this.visible = this.visible && a, e && this.matrix.appendMatrix(e), this;
  }, b.prepend = function (a, b, c, d, e) {
    return this.alpha *= b, this.shadow = this.shadow || c, this.compositeOperation = this.compositeOperation || d, this.visible = this.visible && a, e && this.matrix.prependMatrix(e), this;
  }, b.identity = function () {
    return this.visible = !0, this.alpha = 1, this.shadow = this.compositeOperation = null, this.matrix.identity(), this;
  }, b.clone = function () {
    return new a(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone());
  }, createjs.DisplayProps = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a, b) {
    this.setValues(a, b);
  }var b = a.prototype;b.setValues = function (a, b) {
    return this.x = a || 0, this.y = b || 0, this;
  }, b.copy = function (a) {
    return this.x = a.x, this.y = a.y, this;
  }, b.clone = function () {
    return new a(this.x, this.y);
  }, b.toString = function () {
    return "[Point (x=" + this.x + " y=" + this.y + ")]";
  }, createjs.Point = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a, b, c, d) {
    this.setValues(a, b, c, d);
  }var b = a.prototype;b.setValues = function (a, b, c, d) {
    return this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0, this;
  }, b.extend = function (a, b, c, d) {
    return c = c || 0, d = d || 0, a + c > this.x + this.width && (this.width = a + c - this.x), b + d > this.y + this.height && (this.height = b + d - this.y), a < this.x && (this.width += this.x - a, this.x = a), b < this.y && (this.height += this.y - b, this.y = b), this;
  }, b.pad = function (a, b, c, d) {
    return this.x -= b, this.y -= a, this.width += b + d, this.height += a + c, this;
  }, b.copy = function (a) {
    return this.setValues(a.x, a.y, a.width, a.height);
  }, b.contains = function (a, b, c, d) {
    return c = c || 0, d = d || 0, a >= this.x && a + c <= this.x + this.width && b >= this.y && b + d <= this.y + this.height;
  }, b.union = function (a) {
    return this.clone().extend(a.x, a.y, a.width, a.height);
  }, b.intersection = function (b) {
    var c = b.x,
        d = b.y,
        e = c + b.width,
        f = d + b.height;return this.x > c && (c = this.x), this.y > d && (d = this.y), this.x + this.width < e && (e = this.x + this.width), this.y + this.height < f && (f = this.y + this.height), c >= e || d >= f ? null : new a(c, d, e - c, f - d);
  }, b.intersects = function (a) {
    return a.x <= this.x + this.width && this.x <= a.x + a.width && a.y <= this.y + this.height && this.y <= a.y + a.height;
  }, b.isEmpty = function () {
    return this.width <= 0 || this.height <= 0;
  }, b.clone = function () {
    return new a(this.x, this.y, this.width, this.height);
  }, b.toString = function () {
    return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]";
  }, createjs.Rectangle = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a, b, c, d, e, f, g) {
    a.addEventListener && (this.target = a, this.overLabel = null == c ? "over" : c, this.outLabel = null == b ? "out" : b, this.downLabel = null == d ? "down" : d, this.play = e, this._isPressed = !1, this._isOver = !1, this._enabled = !1, a.mouseChildren = !1, this.enabled = !0, this.handleEvent({}), f && (g && (f.actionsEnabled = !1, f.gotoAndStop && f.gotoAndStop(g)), a.hitArea = f));
  }var b = a.prototype;b.setEnabled = function (a) {
    if (a != this._enabled) {
      var b = this.target;this._enabled = a, a ? (b.cursor = "pointer", b.addEventListener("rollover", this), b.addEventListener("rollout", this), b.addEventListener("mousedown", this), b.addEventListener("pressup", this), b._reset && (b.__reset = b._reset, b._reset = this._reset)) : (b.cursor = null, b.removeEventListener("rollover", this), b.removeEventListener("rollout", this), b.removeEventListener("mousedown", this), b.removeEventListener("pressup", this), b.__reset && (b._reset = b.__reset, delete b.__reset));
    }
  }, b.getEnabled = function () {
    return this._enabled;
  };try {
    Object.defineProperties(b, { enabled: { get: b.getEnabled, set: b.setEnabled } });
  } catch (c) {}b.toString = function () {
    return "[ButtonHelper]";
  }, b.handleEvent = function (a) {
    var b,
        c = this.target,
        d = a.type;"mousedown" == d ? (this._isPressed = !0, b = this.downLabel) : "pressup" == d ? (this._isPressed = !1, b = this._isOver ? this.overLabel : this.outLabel) : "rollover" == d ? (this._isOver = !0, b = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, b = this._isPressed ? this.overLabel : this.outLabel), this.play ? c.gotoAndPlay && c.gotoAndPlay(b) : c.gotoAndStop && c.gotoAndStop(b);
  }, b._reset = function () {
    var a = this.paused;this.__reset(), this.paused = a;
  }, createjs.ButtonHelper = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a, b, c, d) {
    this.color = a || "black", this.offsetX = b || 0, this.offsetY = c || 0, this.blur = d || 0;
  }var b = a.prototype;a.identity = new a("transparent", 0, 0, 0), b.toString = function () {
    return "[Shadow]";
  }, b.clone = function () {
    return new a(this.color, this.offsetX, this.offsetY, this.blur);
  }, createjs.Shadow = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a) {
    this.EventDispatcher_constructor(), this.complete = !0, this.framerate = 0, this._animations = null, this._frames = null, this._images = null, this._data = null, this._loadCount = 0, this._frameHeight = 0, this._frameWidth = 0, this._numFrames = 0, this._regX = 0, this._regY = 0, this._spacing = 0, this._margin = 0, this._parseData(a);
  }var b = createjs.extend(a, createjs.EventDispatcher);b.getAnimations = function () {
    return this._animations.slice();
  };try {
    Object.defineProperties(b, { animations: { get: b.getAnimations } });
  } catch (c) {}b.getNumFrames = function (a) {
    if (null == a) return this._frames ? this._frames.length : this._numFrames || 0;var b = this._data[a];return null == b ? 0 : b.frames.length;
  }, b.getAnimation = function (a) {
    return this._data[a];
  }, b.getFrame = function (a) {
    var b;return this._frames && (b = this._frames[a]) ? b : null;
  }, b.getFrameBounds = function (a, b) {
    var c = this.getFrame(a);return c ? (b || new createjs.Rectangle()).setValues(-c.regX, -c.regY, c.rect.width, c.rect.height) : null;
  }, b.toString = function () {
    return "[SpriteSheet]";
  }, b.clone = function () {
    throw "SpriteSheet cannot be cloned.";
  }, b._parseData = function (a) {
    var b, c, d, e;if (null != a) {
      if (this.framerate = a.framerate || 0, a.images && (c = a.images.length) > 0) for (e = this._images = [], b = 0; c > b; b++) {
        var f = a.images[b];if ("string" == typeof f) {
          var g = f;f = document.createElement("img"), f.src = g;
        }e.push(f), f.getContext || f.naturalWidth || (this._loadCount++, this.complete = !1, function (a) {
          f.onload = function () {
            a._handleImageLoad();
          };
        }(this));
      }if (null == a.frames) ;else if (a.frames instanceof Array) for (this._frames = [], e = a.frames, b = 0, c = e.length; c > b; b++) {
        var h = e[b];this._frames.push({ image: this._images[h[4] ? h[4] : 0], rect: new createjs.Rectangle(h[0], h[1], h[2], h[3]), regX: h[5] || 0, regY: h[6] || 0 });
      } else d = a.frames, this._frameWidth = d.width, this._frameHeight = d.height, this._regX = d.regX || 0, this._regY = d.regY || 0, this._spacing = d.spacing || 0, this._margin = d.margin || 0, this._numFrames = d.count, 0 == this._loadCount && this._calculateFrames();if (this._animations = [], null != (d = a.animations)) {
        this._data = {};var i;for (i in d) {
          var j = { name: i },
              k = d[i];if ("number" == typeof k) e = j.frames = [k];else if (k instanceof Array) {
            if (1 == k.length) j.frames = [k[0]];else for (j.speed = k[3], j.next = k[2], e = j.frames = [], b = k[0]; b <= k[1]; b++) {
              e.push(b);
            }
          } else {
            j.speed = k.speed, j.next = k.next;var l = k.frames;e = j.frames = "number" == typeof l ? [l] : l.slice(0);
          }(j.next === !0 || void 0 === j.next) && (j.next = i), (j.next === !1 || e.length < 2 && j.next == i) && (j.next = null), j.speed || (j.speed = 1), this._animations.push(i), this._data[i] = j;
        }
      }
    }
  }, b._handleImageLoad = function () {
    0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"));
  }, b._calculateFrames = function () {
    if (!this._frames && 0 != this._frameWidth) {
      this._frames = [];var a = this._numFrames || 1e5,
          b = 0,
          c = this._frameWidth,
          d = this._frameHeight,
          e = this._spacing,
          f = this._margin;a: for (var g = 0, h = this._images; g < h.length; g++) {
        for (var i = h[g], j = i.width, k = i.height, l = f; k - f - d >= l;) {
          for (var m = f; j - f - c >= m;) {
            if (b >= a) break a;b++, this._frames.push({ image: i, rect: new createjs.Rectangle(m, l, c, d), regX: this._regX, regY: this._regY }), m += c + e;
          }l += d + e;
        }
      }this._numFrames = b;
    }
  }, createjs.SpriteSheet = createjs.promote(a, "EventDispatcher");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a() {
    this.command = null, this._stroke = null, this._strokeStyle = null, this._oldStrokeStyle = null, this._strokeDash = null, this._oldStrokeDash = null, this._strokeIgnoreScale = !1, this._fill = null, this._instructions = [], this._commitIndex = 0, this._activeInstructions = [], this._dirty = !1, this._storeIndex = 0, this.clear();
  }var b = a.prototype,
      c = a;a.getRGB = function (a, b, c, d) {
    return null != a && null == c && (d = b, c = 255 & a, b = a >> 8 & 255, a = a >> 16 & 255), null == d ? "rgb(" + a + "," + b + "," + c + ")" : "rgba(" + a + "," + b + "," + c + "," + d + ")";
  }, a.getHSL = function (a, b, c, d) {
    return null == d ? "hsl(" + a % 360 + "," + b + "%," + c + "%)" : "hsla(" + a % 360 + "," + b + "%," + c + "%," + d + ")";
  }, a.BASE_64 = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25, a: 26, b: 27, c: 28, d: 29, e: 30, f: 31, g: 32, h: 33, i: 34, j: 35, k: 36, l: 37, m: 38, n: 39, o: 40, p: 41, q: 42, r: 43, s: 44, t: 45, u: 46, v: 47, w: 48, x: 49, y: 50, z: 51, 0: 52, 1: 53, 2: 54, 3: 55, 4: 56, 5: 57, 6: 58, 7: 59, 8: 60, 9: 61, "+": 62, "/": 63 }, a.STROKE_CAPS_MAP = ["butt", "round", "square"], a.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];var d = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");d.getContext && (a._ctx = d.getContext("2d"), d.width = d.height = 1), b.getInstructions = function () {
    return this._updateInstructions(), this._instructions;
  };try {
    Object.defineProperties(b, { instructions: { get: b.getInstructions } });
  } catch (e) {}b.isEmpty = function () {
    return !(this._instructions.length || this._activeInstructions.length);
  }, b.draw = function (a, b) {
    this._updateInstructions();for (var c = this._instructions, d = this._storeIndex, e = c.length; e > d; d++) {
      c[d].exec(a, b);
    }
  }, b.drawAsPath = function (a) {
    this._updateInstructions();for (var b, c = this._instructions, d = this._storeIndex, e = c.length; e > d; d++) {
      (b = c[d]).path !== !1 && b.exec(a);
    }
  }, b.moveTo = function (a, b) {
    return this.append(new c.MoveTo(a, b), !0);
  }, b.lineTo = function (a, b) {
    return this.append(new c.LineTo(a, b));
  }, b.arcTo = function (a, b, d, e, f) {
    return this.append(new c.ArcTo(a, b, d, e, f));
  }, b.arc = function (a, b, d, e, f, g) {
    return this.append(new c.Arc(a, b, d, e, f, g));
  }, b.quadraticCurveTo = function (a, b, d, e) {
    return this.append(new c.QuadraticCurveTo(a, b, d, e));
  }, b.bezierCurveTo = function (a, b, d, e, f, g) {
    return this.append(new c.BezierCurveTo(a, b, d, e, f, g));
  }, b.rect = function (a, b, d, e) {
    return this.append(new c.Rect(a, b, d, e));
  }, b.closePath = function () {
    return this._activeInstructions.length ? this.append(new c.ClosePath()) : this;
  }, b.clear = function () {
    return this._instructions.length = this._activeInstructions.length = this._commitIndex = 0, this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null, this._dirty = this._strokeIgnoreScale = !1, this;
  }, b.beginFill = function (a) {
    return this._setFill(a ? new c.Fill(a) : null);
  }, b.beginLinearGradientFill = function (a, b, d, e, f, g) {
    return this._setFill(new c.Fill().linearGradient(a, b, d, e, f, g));
  }, b.beginRadialGradientFill = function (a, b, d, e, f, g, h, i) {
    return this._setFill(new c.Fill().radialGradient(a, b, d, e, f, g, h, i));
  }, b.beginBitmapFill = function (a, b, d) {
    return this._setFill(new c.Fill(null, d).bitmap(a, b));
  }, b.endFill = function () {
    return this.beginFill();
  }, b.setStrokeStyle = function (a, b, d, e, f) {
    return this._updateInstructions(!0), this._strokeStyle = this.command = new c.StrokeStyle(a, b, d, e, f), this._stroke && (this._stroke.ignoreScale = f), this._strokeIgnoreScale = f, this;
  }, b.setStrokeDash = function (a, b) {
    return this._updateInstructions(!0), this._strokeDash = this.command = new c.StrokeDash(a, b), this;
  }, b.beginStroke = function (a) {
    return this._setStroke(a ? new c.Stroke(a) : null);
  }, b.beginLinearGradientStroke = function (a, b, d, e, f, g) {
    return this._setStroke(new c.Stroke().linearGradient(a, b, d, e, f, g));
  }, b.beginRadialGradientStroke = function (a, b, d, e, f, g, h, i) {
    return this._setStroke(new c.Stroke().radialGradient(a, b, d, e, f, g, h, i));
  }, b.beginBitmapStroke = function (a, b) {
    return this._setStroke(new c.Stroke().bitmap(a, b));
  }, b.endStroke = function () {
    return this.beginStroke();
  }, b.curveTo = b.quadraticCurveTo, b.drawRect = b.rect, b.drawRoundRect = function (a, b, c, d, e) {
    return this.drawRoundRectComplex(a, b, c, d, e, e, e, e);
  }, b.drawRoundRectComplex = function (a, b, d, e, f, g, h, i) {
    return this.append(new c.RoundRect(a, b, d, e, f, g, h, i));
  }, b.drawCircle = function (a, b, d) {
    return this.append(new c.Circle(a, b, d));
  }, b.drawEllipse = function (a, b, d, e) {
    return this.append(new c.Ellipse(a, b, d, e));
  }, b.drawPolyStar = function (a, b, d, e, f, g) {
    return this.append(new c.PolyStar(a, b, d, e, f, g));
  }, b.append = function (a, b) {
    return this._activeInstructions.push(a), this.command = a, b || (this._dirty = !0), this;
  }, b.decodePath = function (b) {
    for (var c = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], d = [2, 2, 4, 6, 0], e = 0, f = b.length, g = [], h = 0, i = 0, j = a.BASE_64; f > e;) {
      var k = b.charAt(e),
          l = j[k],
          m = l >> 3,
          n = c[m];if (!n || 3 & l) throw "bad path data (@" + e + "): " + k;var o = d[m];m || (h = i = 0), g.length = 0, e++;for (var p = (l >> 2 & 1) + 2, q = 0; o > q; q++) {
        var r = j[b.charAt(e)],
            s = r >> 5 ? -1 : 1;r = (31 & r) << 6 | j[b.charAt(e + 1)], 3 == p && (r = r << 6 | j[b.charAt(e + 2)]), r = s * r / 10, q % 2 ? h = r += h : i = r += i, g[q] = r, e += p;
      }n.apply(this, g);
    }return this;
  }, b.store = function () {
    return this._updateInstructions(!0), this._storeIndex = this._instructions.length, this;
  }, b.unstore = function () {
    return this._storeIndex = 0, this;
  }, b.clone = function () {
    var b = new a();return b.command = this.command, b._stroke = this._stroke, b._strokeStyle = this._strokeStyle, b._strokeDash = this._strokeDash, b._strokeIgnoreScale = this._strokeIgnoreScale, b._fill = this._fill, b._instructions = this._instructions.slice(), b._commitIndex = this._commitIndex, b._activeInstructions = this._activeInstructions.slice(), b._dirty = this._dirty, b._storeIndex = this._storeIndex, b;
  }, b.toString = function () {
    return "[Graphics]";
  }, b.mt = b.moveTo, b.lt = b.lineTo, b.at = b.arcTo, b.bt = b.bezierCurveTo, b.qt = b.quadraticCurveTo, b.a = b.arc, b.r = b.rect, b.cp = b.closePath, b.c = b.clear, b.f = b.beginFill, b.lf = b.beginLinearGradientFill, b.rf = b.beginRadialGradientFill, b.bf = b.beginBitmapFill, b.ef = b.endFill, b.ss = b.setStrokeStyle, b.sd = b.setStrokeDash, b.s = b.beginStroke, b.ls = b.beginLinearGradientStroke, b.rs = b.beginRadialGradientStroke, b.bs = b.beginBitmapStroke, b.es = b.endStroke, b.dr = b.drawRect, b.rr = b.drawRoundRect, b.rc = b.drawRoundRectComplex, b.dc = b.drawCircle, b.de = b.drawEllipse, b.dp = b.drawPolyStar, b.p = b.decodePath, b._updateInstructions = function (b) {
    var c = this._instructions,
        d = this._activeInstructions,
        e = this._commitIndex;if (this._dirty && d.length) {
      c.length = e, c.push(a.beginCmd);var f = d.length,
          g = c.length;c.length = g + f;for (var h = 0; f > h; h++) {
        c[h + g] = d[h];
      }this._fill && c.push(this._fill), this._stroke && (this._strokeDash !== this._oldStrokeDash && (this._oldStrokeDash = this._strokeDash, c.push(this._strokeDash)), this._strokeStyle !== this._oldStrokeStyle && (this._oldStrokeStyle = this._strokeStyle, c.push(this._strokeStyle)), c.push(this._stroke)), this._dirty = !1;
    }b && (d.length = 0, this._commitIndex = c.length);
  }, b._setFill = function (a) {
    return this._updateInstructions(!0), this.command = this._fill = a, this;
  }, b._setStroke = function (a) {
    return this._updateInstructions(!0), (this.command = this._stroke = a) && (a.ignoreScale = this._strokeIgnoreScale), this;
  }, (c.LineTo = function (a, b) {
    this.x = a, this.y = b;
  }).prototype.exec = function (a) {
    a.lineTo(this.x, this.y);
  }, (c.MoveTo = function (a, b) {
    this.x = a, this.y = b;
  }).prototype.exec = function (a) {
    a.moveTo(this.x, this.y);
  }, (c.ArcTo = function (a, b, c, d, e) {
    this.x1 = a, this.y1 = b, this.x2 = c, this.y2 = d, this.radius = e;
  }).prototype.exec = function (a) {
    a.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
  }, (c.Arc = function (a, b, c, d, e, f) {
    this.x = a, this.y = b, this.radius = c, this.startAngle = d, this.endAngle = e, this.anticlockwise = !!f;
  }).prototype.exec = function (a) {
    a.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
  }, (c.QuadraticCurveTo = function (a, b, c, d) {
    this.cpx = a, this.cpy = b, this.x = c, this.y = d;
  }).prototype.exec = function (a) {
    a.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y);
  }, (c.BezierCurveTo = function (a, b, c, d, e, f) {
    this.cp1x = a, this.cp1y = b, this.cp2x = c, this.cp2y = d, this.x = e, this.y = f;
  }).prototype.exec = function (a) {
    a.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y);
  }, (c.Rect = function (a, b, c, d) {
    this.x = a, this.y = b, this.w = c, this.h = d;
  }).prototype.exec = function (a) {
    a.rect(this.x, this.y, this.w, this.h);
  }, (c.ClosePath = function () {}).prototype.exec = function (a) {
    a.closePath();
  }, (c.BeginPath = function () {}).prototype.exec = function (a) {
    a.beginPath();
  }, b = (c.Fill = function (a, b) {
    this.style = a, this.matrix = b;
  }).prototype, b.exec = function (a) {
    if (this.style) {
      a.fillStyle = this.style;var b = this.matrix;b && (a.save(), a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty)), a.fill(), b && a.restore();
    }
  }, b.linearGradient = function (b, c, d, e, f, g) {
    for (var h = this.style = a._ctx.createLinearGradient(d, e, f, g), i = 0, j = b.length; j > i; i++) {
      h.addColorStop(c[i], b[i]);
    }return h.props = { colors: b, ratios: c, x0: d, y0: e, x1: f, y1: g, type: "linear" }, this;
  }, b.radialGradient = function (b, c, d, e, f, g, h, i) {
    for (var j = this.style = a._ctx.createRadialGradient(d, e, f, g, h, i), k = 0, l = b.length; l > k; k++) {
      j.addColorStop(c[k], b[k]);
    }return j.props = { colors: b, ratios: c, x0: d, y0: e, r0: f, x1: g, y1: h, r1: i, type: "radial" }, this;
  }, b.bitmap = function (b, c) {
    if (b.naturalWidth || b.getContext || b.readyState >= 2) {
      var d = this.style = a._ctx.createPattern(b, c || "");d.props = { image: b, repetition: c, type: "bitmap" };
    }return this;
  }, b.path = !1, b = (c.Stroke = function (a, b) {
    this.style = a, this.ignoreScale = b;
  }).prototype, b.exec = function (a) {
    this.style && (a.strokeStyle = this.style, this.ignoreScale && (a.save(), a.setTransform(1, 0, 0, 1, 0, 0)), a.stroke(), this.ignoreScale && a.restore());
  }, b.linearGradient = c.Fill.prototype.linearGradient, b.radialGradient = c.Fill.prototype.radialGradient, b.bitmap = c.Fill.prototype.bitmap, b.path = !1, b = (c.StrokeStyle = function (a, b, c, d) {
    this.width = a, this.caps = b, this.joints = c, this.miterLimit = d;
  }).prototype, b.exec = function (b) {
    b.lineWidth = null == this.width ? "1" : this.width, b.lineCap = null == this.caps ? "butt" : isNaN(this.caps) ? this.caps : a.STROKE_CAPS_MAP[this.caps], b.lineJoin = null == this.joints ? "miter" : isNaN(this.joints) ? this.joints : a.STROKE_JOINTS_MAP[this.joints], b.miterLimit = null == this.miterLimit ? "10" : this.miterLimit;
  }, b.path = !1, (c.StrokeDash = function (a, b) {
    this.segments = a, this.offset = b || 0;
  }).prototype.exec = function (a) {
    a.setLineDash && (a.setLineDash(this.segments || c.StrokeDash.EMPTY_SEGMENTS), a.lineDashOffset = this.offset || 0);
  }, c.StrokeDash.EMPTY_SEGMENTS = [], (c.RoundRect = function (a, b, c, d, e, f, g, h) {
    this.x = a, this.y = b, this.w = c, this.h = d, this.radiusTL = e, this.radiusTR = f, this.radiusBR = g, this.radiusBL = h;
  }).prototype.exec = function (a) {
    var b = (j > i ? i : j) / 2,
        c = 0,
        d = 0,
        e = 0,
        f = 0,
        g = this.x,
        h = this.y,
        i = this.w,
        j = this.h,
        k = this.radiusTL,
        l = this.radiusTR,
        m = this.radiusBR,
        n = this.radiusBL;0 > k && (k *= c = -1), k > b && (k = b), 0 > l && (l *= d = -1), l > b && (l = b), 0 > m && (m *= e = -1), m > b && (m = b), 0 > n && (n *= f = -1), n > b && (n = b), a.moveTo(g + i - l, h), a.arcTo(g + i + l * d, h - l * d, g + i, h + l, l), a.lineTo(g + i, h + j - m), a.arcTo(g + i + m * e, h + j + m * e, g + i - m, h + j, m), a.lineTo(g + n, h + j), a.arcTo(g - n * f, h + j + n * f, g, h + j - n, n), a.lineTo(g, h + k), a.arcTo(g - k * c, h - k * c, g + k, h, k), a.closePath();
  }, (c.Circle = function (a, b, c) {
    this.x = a, this.y = b, this.radius = c;
  }).prototype.exec = function (a) {
    a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  }, (c.Ellipse = function (a, b, c, d) {
    this.x = a, this.y = b, this.w = c, this.h = d;
  }).prototype.exec = function (a) {
    var b = this.x,
        c = this.y,
        d = this.w,
        e = this.h,
        f = .5522848,
        g = d / 2 * f,
        h = e / 2 * f,
        i = b + d,
        j = c + e,
        k = b + d / 2,
        l = c + e / 2;a.moveTo(b, l), a.bezierCurveTo(b, l - h, k - g, c, k, c), a.bezierCurveTo(k + g, c, i, l - h, i, l), a.bezierCurveTo(i, l + h, k + g, j, k, j), a.bezierCurveTo(k - g, j, b, l + h, b, l);
  }, (c.PolyStar = function (a, b, c, d, e, f) {
    this.x = a, this.y = b, this.radius = c, this.sides = d, this.pointSize = e, this.angle = f;
  }).prototype.exec = function (a) {
    var b = this.x,
        c = this.y,
        d = this.radius,
        e = (this.angle || 0) / 180 * Math.PI,
        f = this.sides,
        g = 1 - (this.pointSize || 0),
        h = Math.PI / f;a.moveTo(b + Math.cos(e) * d, c + Math.sin(e) * d);for (var i = 0; f > i; i++) {
      e += h, 1 != g && a.lineTo(b + Math.cos(e) * d * g, c + Math.sin(e) * d * g), e += h, a.lineTo(b + Math.cos(e) * d, c + Math.sin(e) * d);
    }a.closePath();
  }, a.beginCmd = new c.BeginPath(), createjs.Graphics = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a() {
    this.EventDispatcher_constructor(), this.alpha = 1, this.cacheCanvas = null, this.cacheID = 0, this.id = createjs.UID.get(), this.mouseEnabled = !0, this.tickEnabled = !0, this.name = null, this.parent = null, this.regX = 0, this.regY = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.skewX = 0, this.skewY = 0, this.shadow = null, this.visible = !0, this.x = 0, this.y = 0, this.transformMatrix = null, this.compositeOperation = null, this.snapToPixel = !0, this.filters = null, this.mask = null, this.hitArea = null, this.cursor = null, this._cacheOffsetX = 0, this._cacheOffsetY = 0, this._filterOffsetX = 0, this._filterOffsetY = 0, this._cacheScale = 1, this._cacheDataURLID = 0, this._cacheDataURL = null, this._props = new createjs.DisplayProps(), this._rectangle = new createjs.Rectangle(), this._bounds = null;
  }var b = createjs.extend(a, createjs.EventDispatcher);a._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"], a.suppressCrossDomainErrors = !1, a._snapToPixelEnabled = !1;var c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");c.getContext && (a._hitTestCanvas = c, a._hitTestContext = c.getContext("2d"), c.width = c.height = 1), a._nextCacheID = 1, b.getStage = function () {
    for (var a = this, b = createjs.Stage; a.parent;) {
      a = a.parent;
    }return a instanceof b ? a : null;
  };try {
    Object.defineProperties(b, { stage: { get: b.getStage } });
  } catch (d) {}b.isVisible = function () {
    return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY);
  }, b.draw = function (a, b) {
    var c = this.cacheCanvas;if (b || !c) return !1;var d = this._cacheScale;return a.drawImage(c, this._cacheOffsetX + this._filterOffsetX, this._cacheOffsetY + this._filterOffsetY, c.width / d, c.height / d), !0;
  }, b.updateContext = function (b) {
    var c = this,
        d = c.mask,
        e = c._props.matrix;d && d.graphics && !d.graphics.isEmpty() && (d.getMatrix(e), b.transform(e.a, e.b, e.c, e.d, e.tx, e.ty), d.graphics.drawAsPath(b), b.clip(), e.invert(), b.transform(e.a, e.b, e.c, e.d, e.tx, e.ty)), this.getMatrix(e);var f = e.tx,
        g = e.ty;a._snapToPixelEnabled && c.snapToPixel && (f = f + (0 > f ? -.5 : .5) | 0, g = g + (0 > g ? -.5 : .5) | 0), b.transform(e.a, e.b, e.c, e.d, f, g), b.globalAlpha *= c.alpha, c.compositeOperation && (b.globalCompositeOperation = c.compositeOperation), c.shadow && this._applyShadow(b, c.shadow);
  }, b.cache = function (a, b, c, d, e) {
    e = e || 1, this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), this._cacheWidth = c, this._cacheHeight = d, this._cacheOffsetX = a, this._cacheOffsetY = b, this._cacheScale = e, this.updateCache();
  }, b.updateCache = function (b) {
    var c = this.cacheCanvas;if (!c) throw "cache() must be called before updateCache()";var d = this._cacheScale,
        e = this._cacheOffsetX * d,
        f = this._cacheOffsetY * d,
        g = this._cacheWidth,
        h = this._cacheHeight,
        i = c.getContext("2d"),
        j = this._getFilterBounds();e += this._filterOffsetX = j.x, f += this._filterOffsetY = j.y, g = Math.ceil(g * d) + j.width, h = Math.ceil(h * d) + j.height, g != c.width || h != c.height ? (c.width = g, c.height = h) : b || i.clearRect(0, 0, g + 1, h + 1), i.save(), i.globalCompositeOperation = b, i.setTransform(d, 0, 0, d, -e, -f), this.draw(i, !0), this._applyFilters(), i.restore(), this.cacheID = a._nextCacheID++;
  }, b.uncache = function () {
    this._cacheDataURL = this.cacheCanvas = null, this.cacheID = this._cacheOffsetX = this._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0, this._cacheScale = 1;
  }, b.getCacheDataURL = function () {
    return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL = this.cacheCanvas.toDataURL()), this._cacheDataURL) : null;
  }, b.localToGlobal = function (a, b, c) {
    return this.getConcatenatedMatrix(this._props.matrix).transformPoint(a, b, c || new createjs.Point());
  }, b.globalToLocal = function (a, b, c) {
    return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(a, b, c || new createjs.Point());
  }, b.localToLocal = function (a, b, c, d) {
    return d = this.localToGlobal(a, b, d), c.globalToLocal(d.x, d.y, d);
  }, b.setTransform = function (a, b, c, d, e, f, g, h, i) {
    return this.x = a || 0, this.y = b || 0, this.scaleX = null == c ? 1 : c, this.scaleY = null == d ? 1 : d, this.rotation = e || 0, this.skewX = f || 0, this.skewY = g || 0, this.regX = h || 0, this.regY = i || 0, this;
  }, b.getMatrix = function (a) {
    var b = this,
        c = a && a.identity() || new createjs.Matrix2D();return b.transformMatrix ? c.copy(b.transformMatrix) : c.appendTransform(b.x, b.y, b.scaleX, b.scaleY, b.rotation, b.skewX, b.skewY, b.regX, b.regY);
  }, b.getConcatenatedMatrix = function (a) {
    for (var b = this, c = this.getMatrix(a); b = b.parent;) {
      c.prependMatrix(b.getMatrix(b._props.matrix));
    }return c;
  }, b.getConcatenatedDisplayProps = function (a) {
    a = a ? a.identity() : new createjs.DisplayProps();var b = this,
        c = b.getMatrix(a.matrix);do {
      a.prepend(b.visible, b.alpha, b.shadow, b.compositeOperation), b != this && c.prependMatrix(b.getMatrix(b._props.matrix));
    } while (b = b.parent);return a;
  }, b.hitTest = function (b, c) {
    var d = a._hitTestContext;d.setTransform(1, 0, 0, 1, -b, -c), this.draw(d);var e = this._testHit(d);return d.setTransform(1, 0, 0, 1, 0, 0), d.clearRect(0, 0, 2, 2), e;
  }, b.set = function (a) {
    for (var b in a) {
      this[b] = a[b];
    }return this;
  }, b.getBounds = function () {
    if (this._bounds) return this._rectangle.copy(this._bounds);var a = this.cacheCanvas;if (a) {
      var b = this._cacheScale;return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, a.width / b, a.height / b);
    }return null;
  }, b.getTransformedBounds = function () {
    return this._getBounds();
  }, b.setBounds = function (a, b, c, d) {
    null == a && (this._bounds = a), this._bounds = (this._bounds || new createjs.Rectangle()).setValues(a, b, c, d);
  }, b.clone = function () {
    return this._cloneProps(new a());
  }, b.toString = function () {
    return "[DisplayObject (name=" + this.name + ")]";
  }, b._cloneProps = function (a) {
    return a.alpha = this.alpha, a.mouseEnabled = this.mouseEnabled, a.tickEnabled = this.tickEnabled, a.name = this.name, a.regX = this.regX, a.regY = this.regY, a.rotation = this.rotation, a.scaleX = this.scaleX, a.scaleY = this.scaleY, a.shadow = this.shadow, a.skewX = this.skewX, a.skewY = this.skewY, a.visible = this.visible, a.x = this.x, a.y = this.y, a.compositeOperation = this.compositeOperation, a.snapToPixel = this.snapToPixel, a.filters = null == this.filters ? null : this.filters.slice(0), a.mask = this.mask, a.hitArea = this.hitArea, a.cursor = this.cursor, a._bounds = this._bounds, a;
  }, b._applyShadow = function (a, b) {
    b = b || Shadow.identity, a.shadowColor = b.color, a.shadowOffsetX = b.offsetX, a.shadowOffsetY = b.offsetY, a.shadowBlur = b.blur;
  }, b._tick = function (a) {
    var b = this._listeners;b && b.tick && (a.target = null, a.propagationStopped = a.immediatePropagationStopped = !1, this.dispatchEvent(a));
  }, b._testHit = function (b) {
    try {
      var c = b.getImageData(0, 0, 1, 1).data[3] > 1;
    } catch (d) {
      if (!a.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
    }return c;
  }, b._applyFilters = function () {
    if (this.filters && 0 != this.filters.length && this.cacheCanvas) for (var a = this.filters.length, b = this.cacheCanvas.getContext("2d"), c = this.cacheCanvas.width, d = this.cacheCanvas.height, e = 0; a > e; e++) {
      this.filters[e].applyFilter(b, 0, 0, c, d);
    }
  }, b._getFilterBounds = function () {
    var a,
        b = this.filters,
        c = this._rectangle.setValues(0, 0, 0, 0);if (!b || !(a = b.length)) return c;for (var d = 0; a > d; d++) {
      var e = this.filters[d];e.getBounds && e.getBounds(c);
    }return c;
  }, b._getBounds = function (a, b) {
    return this._transformBounds(this.getBounds(), a, b);
  }, b._transformBounds = function (a, b, c) {
    if (!a) return a;var d = a.x,
        e = a.y,
        f = a.width,
        g = a.height,
        h = this._props.matrix;h = c ? h.identity() : this.getMatrix(h), (d || e) && h.appendTransform(0, 0, 1, 1, 0, 0, 0, -d, -e), b && h.prependMatrix(b);var i = f * h.a,
        j = f * h.b,
        k = g * h.c,
        l = g * h.d,
        m = h.tx,
        n = h.ty,
        o = m,
        p = m,
        q = n,
        r = n;return (d = i + m) < o ? o = d : d > p && (p = d), (d = i + k + m) < o ? o = d : d > p && (p = d), (d = k + m) < o ? o = d : d > p && (p = d), (e = j + n) < q ? q = e : e > r && (r = e), (e = j + l + n) < q ? q = e : e > r && (r = e), (e = l + n) < q ? q = e : e > r && (r = e), a.setValues(o, q, p - o, r - q);
  }, b._hasMouseEventListener = function () {
    for (var b = a._MOUSE_EVENTS, c = 0, d = b.length; d > c; c++) {
      if (this.hasEventListener(b[c])) return !0;
    }return !!this.cursor;
  }, createjs.DisplayObject = createjs.promote(a, "EventDispatcher");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a() {
    this.DisplayObject_constructor(), this.children = [], this.mouseChildren = !0, this.tickChildren = !0;
  }var b = createjs.extend(a, createjs.DisplayObject);b.getNumChildren = function () {
    return this.children.length;
  };try {
    Object.defineProperties(b, { numChildren: { get: b.getNumChildren } });
  } catch (c) {}b.initialize = a, b.isVisible = function () {
    var a = this.cacheCanvas || this.children.length;return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a);
  }, b.draw = function (a, b) {
    if (this.DisplayObject_draw(a, b)) return !0;for (var c = this.children.slice(), d = 0, e = c.length; e > d; d++) {
      var f = c[d];f.isVisible() && (a.save(), f.updateContext(a), f.draw(a), a.restore());
    }return !0;
  }, b.addChild = function (a) {
    if (null == a) return a;var b = arguments.length;if (b > 1) {
      for (var c = 0; b > c; c++) {
        this.addChild(arguments[c]);
      }return arguments[b - 1];
    }return a.parent && a.parent.removeChild(a), a.parent = this, this.children.push(a), a.dispatchEvent("added"), a;
  }, b.addChildAt = function (a, b) {
    var c = arguments.length,
        d = arguments[c - 1];if (0 > d || d > this.children.length) return arguments[c - 2];if (c > 2) {
      for (var e = 0; c - 1 > e; e++) {
        this.addChildAt(arguments[e], d + e);
      }return arguments[c - 2];
    }return a.parent && a.parent.removeChild(a), a.parent = this, this.children.splice(b, 0, a), a.dispatchEvent("added"), a;
  }, b.removeChild = function (a) {
    var b = arguments.length;if (b > 1) {
      for (var c = !0, d = 0; b > d; d++) {
        c = c && this.removeChild(arguments[d]);
      }return c;
    }return this.removeChildAt(createjs.indexOf(this.children, a));
  }, b.removeChildAt = function (a) {
    var b = arguments.length;if (b > 1) {
      for (var c = [], d = 0; b > d; d++) {
        c[d] = arguments[d];
      }c.sort(function (a, b) {
        return b - a;
      });for (var e = !0, d = 0; b > d; d++) {
        e = e && this.removeChildAt(c[d]);
      }return e;
    }if (0 > a || a > this.children.length - 1) return !1;var f = this.children[a];return f && (f.parent = null), this.children.splice(a, 1), f.dispatchEvent("removed"), !0;
  }, b.removeAllChildren = function () {
    for (var a = this.children; a.length;) {
      this.removeChildAt(0);
    }
  }, b.getChildAt = function (a) {
    return this.children[a];
  }, b.getChildByName = function (a) {
    for (var b = this.children, c = 0, d = b.length; d > c; c++) {
      if (b[c].name == a) return b[c];
    }return null;
  }, b.sortChildren = function (a) {
    this.children.sort(a);
  }, b.getChildIndex = function (a) {
    return createjs.indexOf(this.children, a);
  }, b.swapChildrenAt = function (a, b) {
    var c = this.children,
        d = c[a],
        e = c[b];d && e && (c[a] = e, c[b] = d);
  }, b.swapChildren = function (a, b) {
    for (var c, d, e = this.children, f = 0, g = e.length; g > f && (e[f] == a && (c = f), e[f] == b && (d = f), null == c || null == d); f++) {}f != g && (e[c] = b, e[d] = a);
  }, b.setChildIndex = function (a, b) {
    var c = this.children,
        d = c.length;if (!(a.parent != this || 0 > b || b >= d)) {
      for (var e = 0; d > e && c[e] != a; e++) {}e != d && e != b && (c.splice(e, 1), c.splice(b, 0, a));
    }
  }, b.contains = function (a) {
    for (; a;) {
      if (a == this) return !0;a = a.parent;
    }return !1;
  }, b.hitTest = function (a, b) {
    return null != this.getObjectUnderPoint(a, b);
  }, b.getObjectsUnderPoint = function (a, b, c) {
    var d = [],
        e = this.localToGlobal(a, b);return this._getObjectsUnderPoint(e.x, e.y, d, c > 0, 1 == c), d;
  }, b.getObjectUnderPoint = function (a, b, c) {
    var d = this.localToGlobal(a, b);return this._getObjectsUnderPoint(d.x, d.y, null, c > 0, 1 == c);
  }, b.getBounds = function () {
    return this._getBounds(null, !0);
  }, b.getTransformedBounds = function () {
    return this._getBounds();
  }, b.clone = function (b) {
    var c = this._cloneProps(new a());return b && this._cloneChildren(c), c;
  }, b.toString = function () {
    return "[Container (name=" + this.name + ")]";
  }, b._tick = function (a) {
    if (this.tickChildren) for (var b = this.children.length - 1; b >= 0; b--) {
      var c = this.children[b];c.tickEnabled && c._tick && c._tick(a);
    }this.DisplayObject__tick(a);
  }, b._cloneChildren = function (a) {
    a.children.length && a.removeAllChildren();for (var b = a.children, c = 0, d = this.children.length; d > c; c++) {
      var e = this.children[c].clone(!0);e.parent = a, b.push(e);
    }
  }, b._getObjectsUnderPoint = function (b, c, d, e, f, g) {
    if (g = g || 0, !g && !this._testMask(this, b, c)) return null;var h,
        i = createjs.DisplayObject._hitTestContext;f = f || e && this._hasMouseEventListener();for (var j = this.children, k = j.length, l = k - 1; l >= 0; l--) {
      var m = j[l],
          n = m.hitArea;if (m.visible && (n || m.isVisible()) && (!e || m.mouseEnabled) && (n || this._testMask(m, b, c))) if (!n && m instanceof a) {
        var o = m._getObjectsUnderPoint(b, c, d, e, f, g + 1);if (!d && o) return e && !this.mouseChildren ? this : o;
      } else {
        if (e && !f && !m._hasMouseEventListener()) continue;var p = m.getConcatenatedDisplayProps(m._props);if (h = p.matrix, n && (h.appendMatrix(n.getMatrix(n._props.matrix)), p.alpha = n.alpha), i.globalAlpha = p.alpha, i.setTransform(h.a, h.b, h.c, h.d, h.tx - b, h.ty - c), (n || m).draw(i), !this._testHit(i)) continue;if (i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, 2, 2), !d) return e && !this.mouseChildren ? this : m;d.push(m);
      }
    }return null;
  }, b._testMask = function (a, b, c) {
    var d = a.mask;if (!d || !d.graphics || d.graphics.isEmpty()) return !0;var e = this._props.matrix,
        f = a.parent;e = f ? f.getConcatenatedMatrix(e) : e.identity(), e = d.getMatrix(d._props.matrix).prependMatrix(e);var g = createjs.DisplayObject._hitTestContext;return g.setTransform(e.a, e.b, e.c, e.d, e.tx - b, e.ty - c), d.graphics.drawAsPath(g), g.fillStyle = "#000", g.fill(), this._testHit(g) ? (g.setTransform(1, 0, 0, 1, 0, 0), g.clearRect(0, 0, 2, 2), !0) : !1;
  }, b._getBounds = function (a, b) {
    var c = this.DisplayObject_getBounds();if (c) return this._transformBounds(c, a, b);var d = this._props.matrix;d = b ? d.identity() : this.getMatrix(d), a && d.prependMatrix(a);for (var e = this.children.length, f = null, g = 0; e > g; g++) {
      var h = this.children[g];h.visible && (c = h._getBounds(d)) && (f ? f.extend(c.x, c.y, c.width, c.height) : f = c.clone());
    }return f;
  }, createjs.Container = createjs.promote(a, "DisplayObject");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a) {
    this.Container_constructor(), this.autoClear = !0, this.canvas = "string" == typeof a ? document.getElementById(a) : a, this.mouseX = 0, this.mouseY = 0, this.drawRect = null, this.snapToPixelEnabled = !1, this.mouseInBounds = !1, this.tickOnUpdate = !0, this.mouseMoveOutside = !1, this.preventSelection = !0, this._pointerData = {}, this._pointerCount = 0, this._primaryPointerID = null, this._mouseOverIntervalID = null, this._nextStage = null, this._prevStage = null, this.enableDOMEvents(!0);
  }var b = createjs.extend(a, createjs.Container);b._get_nextStage = function () {
    return this._nextStage;
  }, b._set_nextStage = function (a) {
    this._nextStage && (this._nextStage._prevStage = null), a && (a._prevStage = this), this._nextStage = a;
  };try {
    Object.defineProperties(b, { nextStage: { get: b._get_nextStage, set: b._set_nextStage } });
  } catch (c) {}b.update = function (a) {
    if (this.canvas && (this.tickOnUpdate && this.tick(a), this.dispatchEvent("drawstart", !1, !0) !== !1)) {
      createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;var b = this.drawRect,
          c = this.canvas.getContext("2d");c.setTransform(1, 0, 0, 1, 0, 0), this.autoClear && (b ? c.clearRect(b.x, b.y, b.width, b.height) : c.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)), c.save(), this.drawRect && (c.beginPath(), c.rect(b.x, b.y, b.width, b.height), c.clip()), this.updateContext(c), this.draw(c, !1), c.restore(), this.dispatchEvent("drawend");
    }
  }, b.tick = function (a) {
    if (this.tickEnabled && this.dispatchEvent("tickstart", !1, !0) !== !1) {
      var b = new createjs.Event("tick");if (a) for (var c in a) {
        a.hasOwnProperty(c) && (b[c] = a[c]);
      }this._tick(b), this.dispatchEvent("tickend");
    }
  }, b.handleEvent = function (a) {
    "tick" == a.type && this.update(a);
  }, b.clear = function () {
    if (this.canvas) {
      var a = this.canvas.getContext("2d");a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1);
    }
  }, b.toDataURL = function (a, b) {
    var c,
        d = this.canvas.getContext("2d"),
        e = this.canvas.width,
        f = this.canvas.height;if (a) {
      c = d.getImageData(0, 0, e, f);var g = d.globalCompositeOperation;d.globalCompositeOperation = "destination-over", d.fillStyle = a, d.fillRect(0, 0, e, f);
    }var h = this.canvas.toDataURL(b || "image/png");return a && (d.putImageData(c, 0, 0), d.globalCompositeOperation = g), h;
  }, b.enableMouseOver = function (a) {
    if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, 0 == a && this._testMouseOver(!0)), null == a) a = 20;else if (0 >= a) return;var b = this;this._mouseOverIntervalID = setInterval(function () {
      b._testMouseOver();
    }, 1e3 / Math.min(50, a));
  }, b.enableDOMEvents = function (a) {
    null == a && (a = !0);var b,
        c,
        d = this._eventListeners;if (!a && d) {
      for (b in d) {
        c = d[b], c.t.removeEventListener(b, c.f, !1);
      }this._eventListeners = null;
    } else if (a && !d && this.canvas) {
      var e = window.addEventListener ? window : document,
          _f = this;d = this._eventListeners = {}, d.mouseup = { t: e, f: function f(a) {
          _f._handleMouseUp(a);
        } }, d.mousemove = { t: e, f: function f(a) {
          _f._handleMouseMove(a);
        } }, d.dblclick = { t: this.canvas, f: function f(a) {
          _f._handleDoubleClick(a);
        } }, d.mousedown = { t: this.canvas, f: function f(a) {
          _f._handleMouseDown(a);
        } };for (b in d) {
        c = d[b], c.t.addEventListener(b, c.f, !1);
      }
    }
  }, b.clone = function () {
    throw "Stage cannot be cloned.";
  }, b.toString = function () {
    return "[Stage (name=" + this.name + ")]";
  }, b._getElementRect = function (a) {
    var b;try {
      b = a.getBoundingClientRect();
    } catch (c) {
      b = { top: a.offsetTop, left: a.offsetLeft, width: a.offsetWidth, height: a.offsetHeight };
    }var d = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
        e = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
        f = window.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle,
        g = parseInt(f.paddingLeft) + parseInt(f.borderLeftWidth),
        h = parseInt(f.paddingTop) + parseInt(f.borderTopWidth),
        i = parseInt(f.paddingRight) + parseInt(f.borderRightWidth),
        j = parseInt(f.paddingBottom) + parseInt(f.borderBottomWidth);return { left: b.left + d + g, right: b.right + d - i, top: b.top + e + h, bottom: b.bottom + e - j };
  }, b._getPointerData = function (a) {
    var b = this._pointerData[a];return b || (b = this._pointerData[a] = { x: 0, y: 0 }), b;
  }, b._handleMouseMove = function (a) {
    a || (a = window.event), this._handlePointerMove(-1, a, a.pageX, a.pageY);
  }, b._handlePointerMove = function (a, b, c, d, e) {
    if ((!this._prevStage || void 0 !== e) && this.canvas) {
      var f = this._nextStage,
          g = this._getPointerData(a),
          h = g.inBounds;this._updatePointerPosition(a, b, c, d), (h || g.inBounds || this.mouseMoveOutside) && (-1 === a && g.inBounds == !h && this._dispatchMouseEvent(this, h ? "mouseleave" : "mouseenter", !1, a, g, b), this._dispatchMouseEvent(this, "stagemousemove", !1, a, g, b), this._dispatchMouseEvent(g.target, "pressmove", !0, a, g, b)), f && f._handlePointerMove(a, b, c, d, null);
    }
  }, b._updatePointerPosition = function (a, b, c, d) {
    var e = this._getElementRect(this.canvas);c -= e.left, d -= e.top;var f = this.canvas.width,
        g = this.canvas.height;c /= (e.right - e.left) / f, d /= (e.bottom - e.top) / g;var h = this._getPointerData(a);(h.inBounds = c >= 0 && d >= 0 && f - 1 >= c && g - 1 >= d) ? (h.x = c, h.y = d) : this.mouseMoveOutside && (h.x = 0 > c ? 0 : c > f - 1 ? f - 1 : c, h.y = 0 > d ? 0 : d > g - 1 ? g - 1 : d), h.posEvtObj = b, h.rawX = c, h.rawY = d, (a === this._primaryPointerID || -1 === a) && (this.mouseX = h.x, this.mouseY = h.y, this.mouseInBounds = h.inBounds);
  }, b._handleMouseUp = function (a) {
    this._handlePointerUp(-1, a, !1);
  }, b._handlePointerUp = function (a, b, c, d) {
    var e = this._nextStage,
        f = this._getPointerData(a);if (!this._prevStage || void 0 !== d) {
      var g = null,
          h = f.target;d || !h && !e || (g = this._getObjectsUnderPoint(f.x, f.y, null, !0)), f.down && (this._dispatchMouseEvent(this, "stagemouseup", !1, a, f, b, g), f.down = !1), g == h && this._dispatchMouseEvent(h, "click", !0, a, f, b), this._dispatchMouseEvent(h, "pressup", !0, a, f, b), c ? (a == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[a]) : f.target = null, e && e._handlePointerUp(a, b, c, d || g && this);
    }
  }, b._handleMouseDown = function (a) {
    this._handlePointerDown(-1, a, a.pageX, a.pageY);
  }, b._handlePointerDown = function (a, b, c, d, e) {
    this.preventSelection && b.preventDefault(), (null == this._primaryPointerID || -1 === a) && (this._primaryPointerID = a), null != d && this._updatePointerPosition(a, b, c, d);var f = null,
        g = this._nextStage,
        h = this._getPointerData(a);e || (f = h.target = this._getObjectsUnderPoint(h.x, h.y, null, !0)), h.inBounds && (this._dispatchMouseEvent(this, "stagemousedown", !1, a, h, b, f), h.down = !0), this._dispatchMouseEvent(f, "mousedown", !0, a, h, b), g && g._handlePointerDown(a, b, c, d, e || f && this);
  }, b._testMouseOver = function (a, b, c) {
    if (!this._prevStage || void 0 !== b) {
      var d = this._nextStage;if (!this._mouseOverIntervalID) return void (d && d._testMouseOver(a, b, c));var e = this._getPointerData(-1);if (e && (a || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
        var f,
            g,
            h,
            i = e.posEvtObj,
            j = c || i && i.target == this.canvas,
            k = null,
            l = -1,
            m = "";!b && (a || this.mouseInBounds && j) && (k = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);var n = this._mouseOverTarget || [],
            o = n[n.length - 1],
            p = this._mouseOverTarget = [];for (f = k; f;) {
          p.unshift(f), m || (m = f.cursor), f = f.parent;
        }for (this.canvas.style.cursor = m, !b && c && (c.canvas.style.cursor = m), g = 0, h = p.length; h > g && p[g] == n[g]; g++) {
          l = g;
        }for (o != k && this._dispatchMouseEvent(o, "mouseout", !0, -1, e, i, k), g = n.length - 1; g > l; g--) {
          this._dispatchMouseEvent(n[g], "rollout", !1, -1, e, i, k);
        }for (g = p.length - 1; g > l; g--) {
          this._dispatchMouseEvent(p[g], "rollover", !1, -1, e, i, o);
        }o != k && this._dispatchMouseEvent(k, "mouseover", !0, -1, e, i, o), d && d._testMouseOver(a, b || k && this, c || j && this);
      }
    }
  }, b._handleDoubleClick = function (a, b) {
    var c = null,
        d = this._nextStage,
        e = this._getPointerData(-1);b || (c = this._getObjectsUnderPoint(e.x, e.y, null, !0), this._dispatchMouseEvent(c, "dblclick", !0, -1, e, a)), d && d._handleDoubleClick(a, b || c && this);
  }, b._dispatchMouseEvent = function (a, b, c, d, e, f, g) {
    if (a && (c || a.hasEventListener(b))) {
      var h = new createjs.MouseEvent(b, c, !1, e.x, e.y, f, d, d === this._primaryPointerID || -1 === d, e.rawX, e.rawY, g);a.dispatchEvent(h);
    }
  }, createjs.Stage = createjs.promote(a, "Container");
}(), this.createjs = this.createjs || {}, function () {
  function a(a) {
    this.DisplayObject_constructor(), "string" == typeof a ? (this.image = document.createElement("img"), this.image.src = a) : this.image = a, this.sourceRect = null;
  }var b = createjs.extend(a, createjs.DisplayObject);b.initialize = a, b.isVisible = function () {
    var a = this.image,
        b = this.cacheCanvas || a && (a.naturalWidth || a.getContext || a.readyState >= 2);return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && b);
  }, b.draw = function (a, b) {
    if (this.DisplayObject_draw(a, b) || !this.image) return !0;var c = this.image,
        d = this.sourceRect;if (d) {
      var e = d.x,
          f = d.y,
          g = e + d.width,
          h = f + d.height,
          i = 0,
          j = 0,
          k = c.width,
          l = c.height;0 > e && (i -= e, e = 0), g > k && (g = k), 0 > f && (j -= f, f = 0), h > l && (h = l), a.drawImage(c, e, f, g - e, h - f, i, j, g - e, h - f);
    } else a.drawImage(c, 0, 0);return !0;
  }, b.getBounds = function () {
    var a = this.DisplayObject_getBounds();if (a) return a;var b = this.image,
        c = this.sourceRect || b,
        d = b && (b.naturalWidth || b.getContext || b.readyState >= 2);return d ? this._rectangle.setValues(0, 0, c.width, c.height) : null;
  }, b.clone = function () {
    var b = new a(this.image);return this.sourceRect && (b.sourceRect = this.sourceRect.clone()), this._cloneProps(b), b;
  }, b.toString = function () {
    return "[Bitmap (name=" + this.name + ")]";
  }, createjs.Bitmap = createjs.promote(a, "DisplayObject");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a, b) {
    this.DisplayObject_constructor(), this.currentFrame = 0, this.currentAnimation = null, this.paused = !0, this.spriteSheet = a, this.currentAnimationFrame = 0, this.framerate = 0, this._animation = null, this._currentFrame = null, this._skipAdvance = !1, null != b && this.gotoAndPlay(b);
  }var b = createjs.extend(a, createjs.DisplayObject);b.initialize = a, b.isVisible = function () {
    var a = this.cacheCanvas || this.spriteSheet.complete;return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a);
  }, b.draw = function (a, b) {
    if (this.DisplayObject_draw(a, b)) return !0;this._normalizeFrame();var c = this.spriteSheet.getFrame(0 | this._currentFrame);if (!c) return !1;var d = c.rect;return d.width && d.height && a.drawImage(c.image, d.x, d.y, d.width, d.height, -c.regX, -c.regY, d.width, d.height), !0;
  }, b.play = function () {
    this.paused = !1;
  }, b.stop = function () {
    this.paused = !0;
  }, b.gotoAndPlay = function (a) {
    this.paused = !1, this._skipAdvance = !0, this._goto(a);
  }, b.gotoAndStop = function (a) {
    this.paused = !0, this._goto(a);
  }, b.advance = function (a) {
    var b = this.framerate || this.spriteSheet.framerate,
        c = b && null != a ? a / (1e3 / b) : 1;this._normalizeFrame(c);
  }, b.getBounds = function () {
    return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle);
  }, b.clone = function () {
    return this._cloneProps(new a(this.spriteSheet));
  }, b.toString = function () {
    return "[Sprite (name=" + this.name + ")]";
  }, b._cloneProps = function (a) {
    return this.DisplayObject__cloneProps(a), a.currentFrame = this.currentFrame, a.currentAnimation = this.currentAnimation, a.paused = this.paused, a.currentAnimationFrame = this.currentAnimationFrame, a.framerate = this.framerate, a._animation = this._animation, a._currentFrame = this._currentFrame, a._skipAdvance = this._skipAdvance, a;
  }, b._tick = function (a) {
    this.paused || (this._skipAdvance || this.advance(a && a.delta), this._skipAdvance = !1), this.DisplayObject__tick(a);
  }, b._normalizeFrame = function (a) {
    a = a || 0;var b,
        c = this._animation,
        d = this.paused,
        e = this._currentFrame;if (c) {
      var f = c.speed || 1,
          g = this.currentAnimationFrame;if (b = c.frames.length, g + a * f >= b) {
        var h = c.next;if (this._dispatchAnimationEnd(c, e, d, h, b - 1)) return;if (h) return this._goto(h, a - (b - g) / f);this.paused = !0, g = c.frames.length - 1;
      } else g += a * f;this.currentAnimationFrame = g, this._currentFrame = c.frames[0 | g];
    } else if (e = this._currentFrame += a, b = this.spriteSheet.getNumFrames(), e >= b && b > 0 && !this._dispatchAnimationEnd(c, e, d, b - 1) && (this._currentFrame -= b) >= b) return this._normalizeFrame();e = 0 | this._currentFrame, this.currentFrame != e && (this.currentFrame = e, this.dispatchEvent("change"));
  }, b._dispatchAnimationEnd = function (a, b, c, d, e) {
    var f = a ? a.name : null;if (this.hasEventListener("animationend")) {
      var g = new createjs.Event("animationend");g.name = f, g.next = d, this.dispatchEvent(g);
    }var h = this._animation != a || this._currentFrame != b;return h || c || !this.paused || (this.currentAnimationFrame = e, h = !0), h;
  }, b._goto = function (a, b) {
    if (this.currentAnimationFrame = 0, isNaN(a)) {
      var c = this.spriteSheet.getAnimation(a);c && (this._animation = c, this.currentAnimation = a, this._normalizeFrame(b));
    } else this.currentAnimation = this._animation = null, this._currentFrame = a, this._normalizeFrame();
  }, createjs.Sprite = createjs.promote(a, "DisplayObject");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a) {
    this.DisplayObject_constructor(), this.graphics = a ? a : new createjs.Graphics();
  }var b = createjs.extend(a, createjs.DisplayObject);b.isVisible = function () {
    var a = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a);
  }, b.draw = function (a, b) {
    return this.DisplayObject_draw(a, b) ? !0 : (this.graphics.draw(a, this), !0);
  }, b.clone = function (b) {
    var c = b && this.graphics ? this.graphics.clone() : this.graphics;return this._cloneProps(new a(c));
  }, b.toString = function () {
    return "[Shape (name=" + this.name + ")]";
  }, createjs.Shape = createjs.promote(a, "DisplayObject");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a, b, c) {
    this.DisplayObject_constructor(), this.text = a, this.font = b, this.color = c, this.textAlign = "left", this.textBaseline = "top", this.maxWidth = null, this.outline = 0, this.lineHeight = 0, this.lineWidth = null;
  }var b = createjs.extend(a, createjs.DisplayObject),
      c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");c.getContext && (a._workingContext = c.getContext("2d"), c.width = c.height = 1), a.H_OFFSETS = { start: 0, left: 0, center: -.5, end: -1, right: -1 }, a.V_OFFSETS = { top: 0, hanging: -.01, middle: -.4, alphabetic: -.8, ideographic: -.85, bottom: -1 }, b.isVisible = function () {
    var a = this.cacheCanvas || null != this.text && "" !== this.text;return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a);
  }, b.draw = function (a, b) {
    if (this.DisplayObject_draw(a, b)) return !0;var c = this.color || "#000";return this.outline ? (a.strokeStyle = c, a.lineWidth = 1 * this.outline) : a.fillStyle = c, this._drawText(this._prepContext(a)), !0;
  }, b.getMeasuredWidth = function () {
    return this._getMeasuredWidth(this.text);
  }, b.getMeasuredLineHeight = function () {
    return 1.2 * this._getMeasuredWidth("M");
  }, b.getMeasuredHeight = function () {
    return this._drawText(null, {}).height;
  }, b.getBounds = function () {
    var b = this.DisplayObject_getBounds();if (b) return b;if (null == this.text || "" === this.text) return null;var c = this._drawText(null, {}),
        d = this.maxWidth && this.maxWidth < c.width ? this.maxWidth : c.width,
        e = d * a.H_OFFSETS[this.textAlign || "left"],
        f = this.lineHeight || this.getMeasuredLineHeight(),
        g = f * a.V_OFFSETS[this.textBaseline || "top"];return this._rectangle.setValues(e, g, d, c.height);
  }, b.getMetrics = function () {
    var b = { lines: [] };return b.lineHeight = this.lineHeight || this.getMeasuredLineHeight(), b.vOffset = b.lineHeight * a.V_OFFSETS[this.textBaseline || "top"], this._drawText(null, b, b.lines);
  }, b.clone = function () {
    return this._cloneProps(new a(this.text, this.font, this.color));
  }, b.toString = function () {
    return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]";
  }, b._cloneProps = function (a) {
    return this.DisplayObject__cloneProps(a), a.textAlign = this.textAlign, a.textBaseline = this.textBaseline, a.maxWidth = this.maxWidth, a.outline = this.outline, a.lineHeight = this.lineHeight, a.lineWidth = this.lineWidth, a;
  }, b._prepContext = function (a) {
    return a.font = this.font || "10px sans-serif", a.textAlign = this.textAlign || "left", a.textBaseline = this.textBaseline || "top", a;
  }, b._drawText = function (b, c, d) {
    var e = !!b;e || (b = a._workingContext, b.save(), this._prepContext(b));for (var f = this.lineHeight || this.getMeasuredLineHeight(), g = 0, h = 0, i = String(this.text).split(/(?:\r\n|\r|\n)/), j = 0, k = i.length; k > j; j++) {
      var l = i[j],
          m = null;if (null != this.lineWidth && (m = b.measureText(l).width) > this.lineWidth) {
        var n = l.split(/(\s)/);l = n[0], m = b.measureText(l).width;for (var o = 1, p = n.length; p > o; o += 2) {
          var q = b.measureText(n[o] + n[o + 1]).width;m + q > this.lineWidth ? (e && this._drawTextLine(b, l, h * f), d && d.push(l), m > g && (g = m), l = n[o + 1], m = b.measureText(l).width, h++) : (l += n[o] + n[o + 1], m += q);
        }
      }e && this._drawTextLine(b, l, h * f), d && d.push(l), c && null == m && (m = b.measureText(l).width), m > g && (g = m), h++;
    }return c && (c.width = g, c.height = h * f), e || b.restore(), c;
  }, b._drawTextLine = function (a, b, c) {
    this.outline ? a.strokeText(b, 0, c, this.maxWidth || 65535) : a.fillText(b, 0, c, this.maxWidth || 65535);
  }, b._getMeasuredWidth = function (b) {
    var c = a._workingContext;c.save();var d = this._prepContext(c).measureText(b).width;return c.restore(), d;
  }, createjs.Text = createjs.promote(a, "DisplayObject");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a, b) {
    this.Container_constructor(), this.text = a || "", this.spriteSheet = b, this.lineHeight = 0, this.letterSpacing = 0, this.spaceWidth = 0, this._oldProps = { text: 0, spriteSheet: 0, lineHeight: 0, letterSpacing: 0, spaceWidth: 0 };
  }var b = createjs.extend(a, createjs.Container);a.maxPoolSize = 100, a._spritePool = [], b.draw = function (a, b) {
    this.DisplayObject_draw(a, b) || (this._updateText(), this.Container_draw(a, b));
  }, b.getBounds = function () {
    return this._updateText(), this.Container_getBounds();
  }, b.isVisible = function () {
    var a = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;return !!(this.visible && this.alpha > 0 && 0 !== this.scaleX && 0 !== this.scaleY && a);
  }, b.clone = function () {
    return this._cloneProps(new a(this.text, this.spriteSheet));
  }, b.addChild = b.addChildAt = b.removeChild = b.removeChildAt = b.removeAllChildren = function () {}, b._cloneProps = function (a) {
    return this.Container__cloneProps(a), a.lineHeight = this.lineHeight, a.letterSpacing = this.letterSpacing, a.spaceWidth = this.spaceWidth, a;
  }, b._getFrameIndex = function (a, b) {
    var c,
        d = b.getAnimation(a);return d || (a != (c = a.toUpperCase()) || a != (c = a.toLowerCase()) || (c = null), c && (d = b.getAnimation(c))), d && d.frames[0];
  }, b._getFrame = function (a, b) {
    var c = this._getFrameIndex(a, b);return null == c ? c : b.getFrame(c);
  }, b._getLineHeight = function (a) {
    var b = this._getFrame("1", a) || this._getFrame("T", a) || this._getFrame("L", a) || a.getFrame(0);return b ? b.rect.height : 1;
  }, b._getSpaceWidth = function (a) {
    var b = this._getFrame("1", a) || this._getFrame("l", a) || this._getFrame("e", a) || this._getFrame("a", a) || a.getFrame(0);return b ? b.rect.width : 1;
  }, b._updateText = function () {
    var b,
        c = 0,
        d = 0,
        e = this._oldProps,
        f = !1,
        g = this.spaceWidth,
        h = this.lineHeight,
        i = this.spriteSheet,
        j = a._spritePool,
        k = this.children,
        l = 0,
        m = k.length;for (var n in e) {
      e[n] != this[n] && (e[n] = this[n], f = !0);
    }if (f) {
      var o = !!this._getFrame(" ", i);o || g || (g = this._getSpaceWidth(i)), h || (h = this._getLineHeight(i));for (var p = 0, q = this.text.length; q > p; p++) {
        var r = this.text.charAt(p);if (" " != r || o) {
          if ("\n" != r && "\r" != r) {
            var s = this._getFrameIndex(r, i);null != s && (m > l ? b = k[l] : (k.push(b = j.length ? j.pop() : new createjs.Sprite()), b.parent = this, m++), b.spriteSheet = i, b.gotoAndStop(s), b.x = c, b.y = d, l++, c += b.getBounds().width + this.letterSpacing);
          } else "\r" == r && "\n" == this.text.charAt(p + 1) && p++, c = 0, d += h;
        } else c += g;
      }for (; m > l;) {
        j.push(b = k.pop()), b.parent = null, m--;
      }j.length > a.maxPoolSize && (j.length = a.maxPoolSize);
    }
  }, createjs.BitmapText = createjs.promote(a, "Container");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a() {
    throw "SpriteSheetUtils cannot be instantiated";
  }var b = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");b.getContext && (a._workingCanvas = b, a._workingContext = b.getContext("2d"), b.width = b.height = 1), a.addFlippedFrames = function (b, c, d, e) {
    if (c || d || e) {
      var f = 0;c && a._flip(b, ++f, !0, !1), d && a._flip(b, ++f, !1, !0), e && a._flip(b, ++f, !0, !0);
    }
  }, a.extractFrame = function (b, c) {
    isNaN(c) && (c = b.getAnimation(c).frames[0]);var d = b.getFrame(c);if (!d) return null;var e = d.rect,
        f = a._workingCanvas;f.width = e.width, f.height = e.height, a._workingContext.drawImage(d.image, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height);var g = document.createElement("img");return g.src = f.toDataURL("image/png"), g;
  }, a.mergeAlpha = function (a, b, c) {
    c || (c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), c.width = Math.max(b.width, a.width), c.height = Math.max(b.height, a.height);var d = c.getContext("2d");return d.save(), d.drawImage(a, 0, 0), d.globalCompositeOperation = "destination-in", d.drawImage(b, 0, 0), d.restore(), c;
  }, a._flip = function (b, c, d, e) {
    for (var f = b._images, g = a._workingCanvas, h = a._workingContext, i = f.length / c, j = 0; i > j; j++) {
      var k = f[j];k.__tmp = j, h.setTransform(1, 0, 0, 1, 0, 0), h.clearRect(0, 0, g.width + 1, g.height + 1), g.width = k.width, g.height = k.height, h.setTransform(d ? -1 : 1, 0, 0, e ? -1 : 1, d ? k.width : 0, e ? k.height : 0), h.drawImage(k, 0, 0);
      var l = document.createElement("img");l.src = g.toDataURL("image/png"), l.width = k.width, l.height = k.height, f.push(l);
    }var m = b._frames,
        n = m.length / c;for (j = 0; n > j; j++) {
      k = m[j];var o = k.rect.clone();l = f[k.image.__tmp + i * c];var p = { image: l, rect: o, regX: k.regX, regY: k.regY };d && (o.x = l.width - o.x - o.width, p.regX = o.width - k.regX), e && (o.y = l.height - o.y - o.height, p.regY = o.height - k.regY), m.push(p);
    }var q = "_" + (d ? "h" : "") + (e ? "v" : ""),
        r = b._animations,
        s = b._data,
        t = r.length / c;for (j = 0; t > j; j++) {
      var u = r[j];k = s[u];var v = { name: u + q, speed: k.speed, next: k.next, frames: [] };k.next && (v.next += q), m = k.frames;for (var w = 0, x = m.length; x > w; w++) {
        v.frames.push(m[w] + n * c);
      }s[v.name] = v, r.push(v.name);
    }
  }, createjs.SpriteSheetUtils = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a() {
    this.EventDispatcher_constructor(), this.maxWidth = 2048, this.maxHeight = 2048, this.spriteSheet = null, this.scale = 1, this.padding = 1, this.timeSlice = .3, this.progress = -1, this._frames = [], this._animations = {}, this._data = null, this._nextFrameIndex = 0, this._index = 0, this._timerID = null, this._scale = 1;
  }var b = createjs.extend(a, createjs.EventDispatcher);a.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", a.ERR_RUNNING = "a build is already running", b.addFrame = function (b, c, d, e, f) {
    if (this._data) throw a.ERR_RUNNING;var g = c || b.bounds || b.nominalBounds;return !g && b.getBounds && (g = b.getBounds()), g ? (d = d || 1, this._frames.push({ source: b, sourceRect: g, scale: d, funct: e, data: f, index: this._frames.length, height: g.height * d }) - 1) : null;
  }, b.addAnimation = function (b, c, d, e) {
    if (this._data) throw a.ERR_RUNNING;this._animations[b] = { frames: c, next: d, frequency: e };
  }, b.addMovieClip = function (b, c, d, e, f, g) {
    if (this._data) throw a.ERR_RUNNING;var h = b.frameBounds,
        i = c || b.bounds || b.nominalBounds;if (!i && b.getBounds && (i = b.getBounds()), i || h) {
      var j,
          k,
          l = this._frames.length,
          m = b.timeline.duration;for (j = 0; m > j; j++) {
        var n = h && h[j] ? h[j] : i;this.addFrame(b, n, d, this._setupMovieClipFrame, { i: j, f: e, d: f });
      }var o = b.timeline._labels,
          p = [];for (var q in o) {
        p.push({ index: o[q], label: q });
      }if (p.length) for (p.sort(function (a, b) {
        return a.index - b.index;
      }), j = 0, k = p.length; k > j; j++) {
        for (var r = p[j].label, s = l + p[j].index, t = l + (j == k - 1 ? m : p[j + 1].index), u = [], v = s; t > v; v++) {
          u.push(v);
        }(!g || (r = g(r, b, s, t))) && this.addAnimation(r, u, !0);
      }
    }
  }, b.build = function () {
    if (this._data) throw a.ERR_RUNNING;for (this._startBuild(); this._drawNext();) {}return this._endBuild(), this.spriteSheet;
  }, b.buildAsync = function (b) {
    if (this._data) throw a.ERR_RUNNING;this.timeSlice = b, this._startBuild();var c = this;this._timerID = setTimeout(function () {
      c._run();
    }, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)));
  }, b.stopAsync = function () {
    clearTimeout(this._timerID), this._data = null;
  }, b.clone = function () {
    throw "SpriteSheetBuilder cannot be cloned.";
  }, b.toString = function () {
    return "[SpriteSheetBuilder]";
  }, b._startBuild = function () {
    var b = this.padding || 0;this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;var c = [];this._data = { images: [], frames: c, animations: this._animations };var d = this._frames.slice();if (d.sort(function (a, b) {
      return a.height <= b.height ? -1 : 1;
    }), d[d.length - 1].height + 2 * b > this.maxHeight) throw a.ERR_DIMENSIONS;for (var e = 0, f = 0, g = 0; d.length;) {
      var h = this._fillRow(d, e, g, c, b);if (h.w > f && (f = h.w), e += h.h, !h.h || !d.length) {
        var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");i.width = this._getSize(f, this.maxWidth), i.height = this._getSize(e, this.maxHeight), this._data.images[g] = i, h.h || (f = e = 0, g++);
      }
    }
  }, b._setupMovieClipFrame = function (a, b) {
    var c = a.actionsEnabled;a.actionsEnabled = !1, a.gotoAndStop(b.i), a.actionsEnabled = c, b.f && b.f(a, b.d, b.i);
  }, b._getSize = function (a, b) {
    for (var c = 4; Math.pow(2, ++c) < a;) {}return Math.min(b, Math.pow(2, c));
  }, b._fillRow = function (b, c, d, e, f) {
    var g = this.maxWidth,
        h = this.maxHeight;c += f;for (var i = h - c, j = f, k = 0, l = b.length - 1; l >= 0; l--) {
      var m = b[l],
          n = this._scale * m.scale,
          o = m.sourceRect,
          p = m.source,
          q = Math.floor(n * o.x - f),
          r = Math.floor(n * o.y - f),
          s = Math.ceil(n * o.height + 2 * f),
          t = Math.ceil(n * o.width + 2 * f);if (t > g) throw a.ERR_DIMENSIONS;s > i || j + t > g || (m.img = d, m.rect = new createjs.Rectangle(j, c, t, s), k = k || s, b.splice(l, 1), e[m.index] = [j, c, t, s, d, Math.round(-q + n * p.regX - f), Math.round(-r + n * p.regY - f)], j += t);
    }return { w: j, h: k };
  }, b._endBuild = function () {
    this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete");
  }, b._run = function () {
    for (var a = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), b = new Date().getTime() + a, c = !1; b > new Date().getTime();) {
      if (!this._drawNext()) {
        c = !0;break;
      }
    }if (c) this._endBuild();else {
      var d = this;this._timerID = setTimeout(function () {
        d._run();
      }, 50 - a);
    }var e = this.progress = this._index / this._frames.length;if (this.hasEventListener("progress")) {
      var f = new createjs.Event("progress");f.progress = e, this.dispatchEvent(f);
    }
  }, b._drawNext = function () {
    var a = this._frames[this._index],
        b = a.scale * this._scale,
        c = a.rect,
        d = a.sourceRect,
        e = this._data.images[a.img],
        f = e.getContext("2d");return a.funct && a.funct(a.source, a.data), f.save(), f.beginPath(), f.rect(c.x, c.y, c.width, c.height), f.clip(), f.translate(Math.ceil(c.x - d.x * b), Math.ceil(c.y - d.y * b)), f.scale(b, b), a.source.draw(f), f.restore(), ++this._index < this._frames.length;
  }, createjs.SpriteSheetBuilder = createjs.promote(a, "EventDispatcher");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a) {
    this.DisplayObject_constructor(), "string" == typeof a && (a = document.getElementById(a)), this.mouseEnabled = !1;var b = a.style;b.position = "absolute", b.transformOrigin = b.WebkitTransformOrigin = b.msTransformOrigin = b.MozTransformOrigin = b.OTransformOrigin = "0% 0%", this.htmlElement = a, this._oldProps = null;
  }var b = createjs.extend(a, createjs.DisplayObject);b.isVisible = function () {
    return null != this.htmlElement;
  }, b.draw = function () {
    return !0;
  }, b.cache = function () {}, b.uncache = function () {}, b.updateCache = function () {}, b.hitTest = function () {}, b.localToGlobal = function () {}, b.globalToLocal = function () {}, b.localToLocal = function () {}, b.clone = function () {
    throw "DOMElement cannot be cloned.";
  }, b.toString = function () {
    return "[DOMElement (name=" + this.name + ")]";
  }, b._tick = function (a) {
    var b = this.getStage();b && b.on("drawend", this._handleDrawEnd, this, !0), this.DisplayObject__tick(a);
  }, b._handleDrawEnd = function () {
    var a = this.htmlElement;if (a) {
      var b = a.style,
          c = this.getConcatenatedDisplayProps(this._props),
          d = c.matrix,
          e = c.visible ? "visible" : "hidden";if (e != b.visibility && (b.visibility = e), c.visible) {
        var f = this._oldProps,
            g = f && f.matrix,
            h = 1e4;if (!g || !g.equals(d)) {
          var i = "matrix(" + (d.a * h | 0) / h + "," + (d.b * h | 0) / h + "," + (d.c * h | 0) / h + "," + (d.d * h | 0) / h + "," + (d.tx + .5 | 0);b.transform = b.WebkitTransform = b.OTransform = b.msTransform = i + "," + (d.ty + .5 | 0) + ")", b.MozTransform = i + "px," + (d.ty + .5 | 0) + "px)", f || (f = this._oldProps = new createjs.DisplayProps(!0, 0 / 0)), f.matrix.copy(d);
        }f.alpha != c.alpha && (b.opacity = "" + (c.alpha * h | 0) / h, f.alpha = c.alpha);
      }
    }
  }, createjs.DOMElement = createjs.promote(a, "DisplayObject");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a() {}var b = a.prototype;b.getBounds = function (a) {
    return a;
  }, b.applyFilter = function (a, b, c, d, e, f, g, h) {
    f = f || a, null == g && (g = b), null == h && (h = c);try {
      var i = a.getImageData(b, c, d, e);
    } catch (j) {
      return !1;
    }return this._applyFilter(i) ? (f.putImageData(i, g, h), !0) : !1;
  }, b.toString = function () {
    return "[Filter]";
  }, b.clone = function () {
    return new a();
  }, b._applyFilter = function () {
    return !0;
  }, createjs.Filter = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a, b, c) {
    (isNaN(a) || 0 > a) && (a = 0), (isNaN(b) || 0 > b) && (b = 0), (isNaN(c) || 1 > c) && (c = 1), this.blurX = 0 | a, this.blurY = 0 | b, this.quality = 0 | c;
  }var b = createjs.extend(a, createjs.Filter);a.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], a.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], b.getBounds = function (a) {
    var b = 0 | this.blurX,
        c = 0 | this.blurY;if (0 >= b && 0 >= c) return a;var d = Math.pow(this.quality, .2);return (a || new createjs.Rectangle()).pad(b * d + 1, c * d + 1, b * d + 1, c * d + 1);
  }, b.clone = function () {
    return new a(this.blurX, this.blurY, this.quality);
  }, b.toString = function () {
    return "[BlurFilter]";
  }, b._applyFilter = function (b) {
    var c = this.blurX >> 1;if (isNaN(c) || 0 > c) return !1;var d = this.blurY >> 1;if (isNaN(d) || 0 > d) return !1;if (0 == c && 0 == d) return !1;var e = this.quality;(isNaN(e) || 1 > e) && (e = 1), e |= 0, e > 3 && (e = 3), 1 > e && (e = 1);var f = b.data,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = c + c + 1 | 0,
        w = d + d + 1 | 0,
        x = 0 | b.width,
        y = 0 | b.height,
        z = x - 1 | 0,
        A = y - 1 | 0,
        B = c + 1 | 0,
        C = d + 1 | 0,
        D = { r: 0, b: 0, g: 0, a: 0 },
        E = D;for (i = 1; v > i; i++) {
      E = E.n = { r: 0, b: 0, g: 0, a: 0 };
    }E.n = D;var F = { r: 0, b: 0, g: 0, a: 0 },
        G = F;for (i = 1; w > i; i++) {
      G = G.n = { r: 0, b: 0, g: 0, a: 0 };
    }G.n = F;for (var H = null, I = 0 | a.MUL_TABLE[c], J = 0 | a.SHG_TABLE[c], K = 0 | a.MUL_TABLE[d], L = 0 | a.SHG_TABLE[d]; e-- > 0;) {
      m = l = 0;var M = I,
          N = J;for (h = y; --h > -1;) {
        for (n = B * (r = f[0 | l]), o = B * (s = f[l + 1 | 0]), p = B * (t = f[l + 2 | 0]), q = B * (u = f[l + 3 | 0]), E = D, i = B; --i > -1;) {
          E.r = r, E.g = s, E.b = t, E.a = u, E = E.n;
        }for (i = 1; B > i; i++) {
          j = l + ((i > z ? z : i) << 2) | 0, n += E.r = f[j], o += E.g = f[j + 1], p += E.b = f[j + 2], q += E.a = f[j + 3], E = E.n;
        }for (H = D, g = 0; x > g; g++) {
          f[l++] = n * M >>> N, f[l++] = o * M >>> N, f[l++] = p * M >>> N, f[l++] = q * M >>> N, j = m + ((j = g + c + 1) < z ? j : z) << 2, n -= H.r - (H.r = f[j]), o -= H.g - (H.g = f[j + 1]), p -= H.b - (H.b = f[j + 2]), q -= H.a - (H.a = f[j + 3]), H = H.n;
        }m += x;
      }for (M = K, N = L, g = 0; x > g; g++) {
        for (l = g << 2 | 0, n = C * (r = f[l]) | 0, o = C * (s = f[l + 1 | 0]) | 0, p = C * (t = f[l + 2 | 0]) | 0, q = C * (u = f[l + 3 | 0]) | 0, G = F, i = 0; C > i; i++) {
          G.r = r, G.g = s, G.b = t, G.a = u, G = G.n;
        }for (k = x, i = 1; d >= i; i++) {
          l = k + g << 2, n += G.r = f[l], o += G.g = f[l + 1], p += G.b = f[l + 2], q += G.a = f[l + 3], G = G.n, A > i && (k += x);
        }if (l = g, H = F, e > 0) for (h = 0; y > h; h++) {
          j = l << 2, f[j + 3] = u = q * M >>> N, u > 0 ? (f[j] = n * M >>> N, f[j + 1] = o * M >>> N, f[j + 2] = p * M >>> N) : f[j] = f[j + 1] = f[j + 2] = 0, j = g + ((j = h + C) < A ? j : A) * x << 2, n -= H.r - (H.r = f[j]), o -= H.g - (H.g = f[j + 1]), p -= H.b - (H.b = f[j + 2]), q -= H.a - (H.a = f[j + 3]), H = H.n, l += x;
        } else for (h = 0; y > h; h++) {
          j = l << 2, f[j + 3] = u = q * M >>> N, u > 0 ? (u = 255 / u, f[j] = (n * M >>> N) * u, f[j + 1] = (o * M >>> N) * u, f[j + 2] = (p * M >>> N) * u) : f[j] = f[j + 1] = f[j + 2] = 0, j = g + ((j = h + C) < A ? j : A) * x << 2, n -= H.r - (H.r = f[j]), o -= H.g - (H.g = f[j + 1]), p -= H.b - (H.b = f[j + 2]), q -= H.a - (H.a = f[j + 3]), H = H.n, l += x;
        }
      }
    }return !0;
  }, createjs.BlurFilter = createjs.promote(a, "Filter");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a) {
    this.alphaMap = a, this._alphaMap = null, this._mapData = null;
  }var b = createjs.extend(a, createjs.Filter);b.clone = function () {
    var b = new a(this.alphaMap);return b._alphaMap = this._alphaMap, b._mapData = this._mapData, b;
  }, b.toString = function () {
    return "[AlphaMapFilter]";
  }, b._applyFilter = function (a) {
    if (!this.alphaMap) return !0;if (!this._prepAlphaMap()) return !1;for (var b = a.data, c = this._mapData, d = 0, e = b.length; e > d; d += 4) {
      b[d + 3] = c[d] || 0;
    }return !0;
  }, b._prepAlphaMap = function () {
    if (!this.alphaMap) return !1;if (this.alphaMap == this._alphaMap && this._mapData) return !0;this._mapData = null;var a,
        b = this._alphaMap = this.alphaMap,
        c = b;b instanceof HTMLCanvasElement ? a = c.getContext("2d") : (c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), c.width = b.width, c.height = b.height, a = c.getContext("2d"), a.drawImage(b, 0, 0));try {
      var d = a.getImageData(0, 0, b.width, b.height);
    } catch (e) {
      return !1;
    }return this._mapData = d.data, !0;
  }, createjs.AlphaMapFilter = createjs.promote(a, "Filter");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a) {
    this.mask = a;
  }var b = createjs.extend(a, createjs.Filter);b.applyFilter = function (a, b, c, d, e, f, g, h) {
    return this.mask ? (f = f || a, null == g && (g = b), null == h && (h = c), f.save(), a != f ? !1 : (f.globalCompositeOperation = "destination-in", f.drawImage(this.mask, g, h), f.restore(), !0)) : !0;
  }, b.clone = function () {
    return new a(this.mask);
  }, b.toString = function () {
    return "[AlphaMaskFilter]";
  }, createjs.AlphaMaskFilter = createjs.promote(a, "Filter");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a, b, c, d, e, f, g, h) {
    this.redMultiplier = null != a ? a : 1, this.greenMultiplier = null != b ? b : 1, this.blueMultiplier = null != c ? c : 1, this.alphaMultiplier = null != d ? d : 1, this.redOffset = e || 0, this.greenOffset = f || 0, this.blueOffset = g || 0, this.alphaOffset = h || 0;
  }var b = createjs.extend(a, createjs.Filter);b.toString = function () {
    return "[ColorFilter]";
  }, b.clone = function () {
    return new a(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset);
  }, b._applyFilter = function (a) {
    for (var b = a.data, c = b.length, d = 0; c > d; d += 4) {
      b[d] = b[d] * this.redMultiplier + this.redOffset, b[d + 1] = b[d + 1] * this.greenMultiplier + this.greenOffset, b[d + 2] = b[d + 2] * this.blueMultiplier + this.blueOffset, b[d + 3] = b[d + 3] * this.alphaMultiplier + this.alphaOffset;
    }return !0;
  }, createjs.ColorFilter = createjs.promote(a, "Filter");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a, b, c, d) {
    this.setColor(a, b, c, d);
  }var b = a.prototype;a.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], a.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], a.LENGTH = a.IDENTITY_MATRIX.length, b.setColor = function (a, b, c, d) {
    return this.reset().adjustColor(a, b, c, d);
  }, b.reset = function () {
    return this.copy(a.IDENTITY_MATRIX);
  }, b.adjustColor = function (a, b, c, d) {
    return this.adjustHue(d), this.adjustContrast(b), this.adjustBrightness(a), this.adjustSaturation(c);
  }, b.adjustBrightness = function (a) {
    return 0 == a || isNaN(a) ? this : (a = this._cleanValue(a, 255), this._multiplyMatrix([1, 0, 0, 0, a, 0, 1, 0, 0, a, 0, 0, 1, 0, a, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this);
  }, b.adjustContrast = function (b) {
    if (0 == b || isNaN(b)) return this;b = this._cleanValue(b, 100);var c;return 0 > b ? c = 127 + b / 100 * 127 : (c = b % 1, c = 0 == c ? a.DELTA_INDEX[b] : a.DELTA_INDEX[b << 0] * (1 - c) + a.DELTA_INDEX[(b << 0) + 1] * c, c = 127 * c + 127), this._multiplyMatrix([c / 127, 0, 0, 0, .5 * (127 - c), 0, c / 127, 0, 0, .5 * (127 - c), 0, 0, c / 127, 0, .5 * (127 - c), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this;
  }, b.adjustSaturation = function (a) {
    if (0 == a || isNaN(a)) return this;a = this._cleanValue(a, 100);var b = 1 + (a > 0 ? 3 * a / 100 : a / 100),
        c = .3086,
        d = .6094,
        e = .082;return this._multiplyMatrix([c * (1 - b) + b, d * (1 - b), e * (1 - b), 0, 0, c * (1 - b), d * (1 - b) + b, e * (1 - b), 0, 0, c * (1 - b), d * (1 - b), e * (1 - b) + b, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this;
  }, b.adjustHue = function (a) {
    if (0 == a || isNaN(a)) return this;a = this._cleanValue(a, 180) / 180 * Math.PI;var b = Math.cos(a),
        c = Math.sin(a),
        d = .213,
        e = .715,
        f = .072;return this._multiplyMatrix([d + b * (1 - d) + c * -d, e + b * -e + c * -e, f + b * -f + c * (1 - f), 0, 0, d + b * -d + .143 * c, e + b * (1 - e) + .14 * c, f + b * -f + c * -.283, 0, 0, d + b * -d + c * -(1 - d), e + b * -e + c * e, f + b * (1 - f) + c * f, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this;
  }, b.concat = function (b) {
    return b = this._fixMatrix(b), b.length != a.LENGTH ? this : (this._multiplyMatrix(b), this);
  }, b.clone = function () {
    return new a().copy(this);
  }, b.toArray = function () {
    for (var b = [], c = 0, d = a.LENGTH; d > c; c++) {
      b[c] = this[c];
    }return b;
  }, b.copy = function (b) {
    for (var c = a.LENGTH, d = 0; c > d; d++) {
      this[d] = b[d];
    }return this;
  }, b.toString = function () {
    return "[ColorMatrix]";
  }, b._multiplyMatrix = function (a) {
    var b,
        c,
        d,
        e = [];for (b = 0; 5 > b; b++) {
      for (c = 0; 5 > c; c++) {
        e[c] = this[c + 5 * b];
      }for (c = 0; 5 > c; c++) {
        var f = 0;for (d = 0; 5 > d; d++) {
          f += a[c + 5 * d] * e[d];
        }this[c + 5 * b] = f;
      }
    }
  }, b._cleanValue = function (a, b) {
    return Math.min(b, Math.max(-b, a));
  }, b._fixMatrix = function (b) {
    return b instanceof a && (b = b.toArray()), b.length < a.LENGTH ? b = b.slice(0, b.length).concat(a.IDENTITY_MATRIX.slice(b.length, a.LENGTH)) : b.length > a.LENGTH && (b = b.slice(0, a.LENGTH)), b;
  }, createjs.ColorMatrix = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a) {
    this.matrix = a;
  }var b = createjs.extend(a, createjs.Filter);b.toString = function () {
    return "[ColorMatrixFilter]";
  }, b.clone = function () {
    return new a(this.matrix);
  }, b._applyFilter = function (a) {
    for (var b, c, d, e, f = a.data, g = f.length, h = this.matrix, i = h[0], j = h[1], k = h[2], l = h[3], m = h[4], n = h[5], o = h[6], p = h[7], q = h[8], r = h[9], s = h[10], t = h[11], u = h[12], v = h[13], w = h[14], x = h[15], y = h[16], z = h[17], A = h[18], B = h[19], C = 0; g > C; C += 4) {
      b = f[C], c = f[C + 1], d = f[C + 2], e = f[C + 3], f[C] = b * i + c * j + d * k + e * l + m, f[C + 1] = b * n + c * o + d * p + e * q + r, f[C + 2] = b * s + c * t + d * u + e * v + w, f[C + 3] = b * x + c * y + d * z + e * A + B;
    }return !0;
  }, createjs.ColorMatrixFilter = createjs.promote(a, "Filter");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a() {
    throw "Touch cannot be instantiated";
  }a.isSupported = function () {
    return !!("ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0);
  }, a.enable = function (b, c, d) {
    return b && b.canvas && a.isSupported() ? b.__touch ? !0 : (b.__touch = { pointers: {}, multitouch: !c, preventDefault: !d, count: 0 }, "ontouchstart" in window ? a._IOS_enable(b) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && a._IE_enable(b), !0) : !1;
  }, a.disable = function (b) {
    b && ("ontouchstart" in window ? a._IOS_disable(b) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && a._IE_disable(b), delete b.__touch);
  }, a._IOS_enable = function (b) {
    var c = b.canvas,
        d = b.__touch.f = function (c) {
      a._IOS_handleEvent(b, c);
    };c.addEventListener("touchstart", d, !1), c.addEventListener("touchmove", d, !1), c.addEventListener("touchend", d, !1), c.addEventListener("touchcancel", d, !1);
  }, a._IOS_disable = function (a) {
    var b = a.canvas;if (b) {
      var c = a.__touch.f;b.removeEventListener("touchstart", c, !1), b.removeEventListener("touchmove", c, !1), b.removeEventListener("touchend", c, !1), b.removeEventListener("touchcancel", c, !1);
    }
  }, a._IOS_handleEvent = function (a, b) {
    if (a) {
      a.__touch.preventDefault && b.preventDefault && b.preventDefault();for (var c = b.changedTouches, d = b.type, e = 0, f = c.length; f > e; e++) {
        var g = c[e],
            h = g.identifier;g.target == a.canvas && ("touchstart" == d ? this._handleStart(a, h, b, g.pageX, g.pageY) : "touchmove" == d ? this._handleMove(a, h, b, g.pageX, g.pageY) : ("touchend" == d || "touchcancel" == d) && this._handleEnd(a, h, b));
      }
    }
  }, a._IE_enable = function (b) {
    var c = b.canvas,
        d = b.__touch.f = function (c) {
      a._IE_handleEvent(b, c);
    };void 0 === window.navigator.pointerEnabled ? (c.addEventListener("MSPointerDown", d, !1), window.addEventListener("MSPointerMove", d, !1), window.addEventListener("MSPointerUp", d, !1), window.addEventListener("MSPointerCancel", d, !1), b.__touch.preventDefault && (c.style.msTouchAction = "none")) : (c.addEventListener("pointerdown", d, !1), window.addEventListener("pointermove", d, !1), window.addEventListener("pointerup", d, !1), window.addEventListener("pointercancel", d, !1), b.__touch.preventDefault && (c.style.touchAction = "none")), b.__touch.activeIDs = {};
  }, a._IE_disable = function (a) {
    var b = a.__touch.f;void 0 === window.navigator.pointerEnabled ? (window.removeEventListener("MSPointerMove", b, !1), window.removeEventListener("MSPointerUp", b, !1), window.removeEventListener("MSPointerCancel", b, !1), a.canvas && a.canvas.removeEventListener("MSPointerDown", b, !1)) : (window.removeEventListener("pointermove", b, !1), window.removeEventListener("pointerup", b, !1), window.removeEventListener("pointercancel", b, !1), a.canvas && a.canvas.removeEventListener("pointerdown", b, !1));
  }, a._IE_handleEvent = function (a, b) {
    if (a) {
      a.__touch.preventDefault && b.preventDefault && b.preventDefault();var c = b.type,
          d = b.pointerId,
          e = a.__touch.activeIDs;if ("MSPointerDown" == c || "pointerdown" == c) {
        if (b.srcElement != a.canvas) return;e[d] = !0, this._handleStart(a, d, b, b.pageX, b.pageY);
      } else e[d] && ("MSPointerMove" == c || "pointermove" == c ? this._handleMove(a, d, b, b.pageX, b.pageY) : ("MSPointerUp" == c || "MSPointerCancel" == c || "pointerup" == c || "pointercancel" == c) && (delete e[d], this._handleEnd(a, d, b)));
    }
  }, a._handleStart = function (a, b, c, d, e) {
    var f = a.__touch;if (f.multitouch || !f.count) {
      var g = f.pointers;g[b] || (g[b] = !0, f.count++, a._handlePointerDown(b, c, d, e));
    }
  }, a._handleMove = function (a, b, c, d, e) {
    a.__touch.pointers[b] && a._handlePointerMove(b, c, d, e);
  }, a._handleEnd = function (a, b, c) {
    var d = a.__touch,
        e = d.pointers;e[b] && (d.count--, a._handlePointerUp(b, c, !0), delete e[b]);
  }, createjs.Touch = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  var a = createjs.EaselJS = createjs.EaselJS || {};a.version = "0.8.1", a.buildDate = "Thu, 21 May 2015 16:17:39 GMT";
}();

(function (b) {
  try {
    document.createEvent("TouchEvent");return;
  } catch (d) {}var c = { mousedown: "touchstart", mouseup: "touchend", mousemove: "touchmove" };b.addEventListener("load", function () {
    for (var e in c) {
      document.body.addEventListener(e, function (h) {
        var g = a(c[h.type], h);h.target.dispatchEvent(g);var f = h.target["on" + c[h.type]];if (typeof f === "function") {
          f(h);
        }
      }, false);
    }
  }, false);var a = function a(f, h) {
    var g = document.createEvent("MouseEvents");g.initMouseEvent(f, h.bubbles, h.cancelable, h.view, h.detail, h.screenX, h.screenY, h.clientX, h.clientY, h.ctrlKey, h.altKey, h.shiftKey, h.metaKey, h.button, h.relatedTarget);return g;
  };
})(window);

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
  };if (typeof define === "function" && babelHelpers_typeof(define.amd) === "object" && define.amd) {
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

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : babelHelpers_typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Store = t();
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
      } }, { key: "reset", value: function value() {
        return this.data = this.init, this.save(), this;
      } }, { key: "clear", value: function value() {
        return r.remove(this.name), this;
      } }], [{ key: "clear", value: function value() {
        r.clear();
      } }]), n;
  }();return i;
});

!function (n, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : babelHelpers_typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.CordovaUtils = t();
}(this, function () {
  "use strict";
  var n = "function" == typeof Symbol && "symbol" == babelHelpers_typeof(Symbol.iterator) ? function (n) {
    return typeof n === "undefined" ? "undefined" : babelHelpers_typeof(n);
  } : function (n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n === "undefined" ? "undefined" : babelHelpers_typeof(n);
  },
      t = "object" === ("undefined" == typeof cordova ? "undefined" : n(cordova)),
      o = { isCordova: t, ready: function ready(n) {
      t ? document.addEventListener("deviceready", n) : window.onload = n;
    }, exit: function exit() {
      t && navigator.app.exitApp();
    }, back: function back(n) {
      t && document.addEventListener("backbutton", n);
    }, menu: function menu(n) {
      t && document.addEventListener("menubutton", n);
    }, pause: function pause(n) {
      t && document.addEventListener("pause", n);
    }, resume: function resume(n) {
      t && document.addEventListener("resume", n);
    }, screenshot: function e(n, o, i, r) {
      if (t) {
        var e = navigator.screenshot;n = n || function () {}, o = o || "jpg", i = i || 50, e && e.save(n, o, i, r);
      }
    }, vibrate: function i(n) {
      if (t) {
        var i = navigator.vibrate;i && i(n);
      }
    }, splashscreen: { hide: function hide() {
        if (t) {
          var n = navigator.splashscreen;n && n.hide();
        }
      }, show: function show() {
        if (t) {
          var n = navigator.splashscreen;n && n.show();
        }
      } }, toast: function r(n, o, e) {
      if (t) {
        var r = window.plugins.toast;r && (n = n || "", o = o || "long", e = e || "center", r.show(n, o, e));
      }
    }, rotate: function a(n) {
      if (t) {
        var a = screen.lockOrientation;a && a(n);
      }
    }, dialog: { alert: function c(n, o, e, i) {
        if (t) {
          var c = navigator.notification.alert;n = n || "Alert", e = e || function () {}, i = i || "OK", c && c(o, e, n, i);
        }
      }, confirm: function f(n, o, e, i) {
        if (t) {
          var f = navigator.notification.confirm;n = n || "Confirm", e = e || function () {}, i = i || ["Cancel", "OK"], f && f(o, e, n, i);
        }
      } } };return o;
});

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : babelHelpers_typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.V = e();
}(this, function () {
  "use strict";
  function t(t) {
    var e = /^#[-\w]+$/;return t.nodeType > 0 ? t : document[t] ? document[t] : e.test(t) ? document.querySelector(t) : document.querySelectorAll(t);
  }function e(i) {
    var n = t(i);if (!(this instanceof e)) {
      if (n instanceof NodeList) {
        for (var o = [], r = 0; r < n.length; r++) {
          o.push(new e(n[r]));
        }return o;
      }return new e(i);
    }this.el = n, this.classList = n.classList;
  }var i = "function" == typeof Symbol && "symbol" == babelHelpers_typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : babelHelpers_typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t === "undefined" ? "undefined" : babelHelpers_typeof(t);
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

function givePressingClass(el, className) {

	el = V(el);

	el.on("touchstart", function () {

		el.classList.add(className);
	});

	el.on("touchmove touchend", function () {

		el.classList.remove(className);
	});
}

Vue.directive("pressing-class", {

	isLiteral: true,

	bind: function bind() {

		givePressingClass(this.el, this.expression);
	}

});

// Voyga

function playSound (sound) {

	var files = {

		eat: "sound/eat.wav",
		go: "sound/go.wav",
		start: "sound/start.wav",
		die: "sound/die.wav",
		shoot: "sound/shoot.wav",
		powerUp: "sound/powerUp.wav"

	};

	if (files[sound]) {

		new Audio(files[sound]).play();
	}
}

function Tail(stage) {

	this.shape = new createjs.Shape();
	stage.addChild(this.shape);

	this.width = 24;
	this.height = 18;

	this.shape.name = "tail";
	this.shape.color = "#99c6e5";
	this.shape.graphics.beginFill(this.shape.color).drawRect(0, 0, 16, 2);
	this.shape.graphics.beginFill(this.shape.color).drawRect(0, 8, 24, 2);
	this.shape.graphics.beginFill(this.shape.color).drawRect(0, 16, 16, 2);
	this.shape.regX = this.width / 2;
	this.shape.regY = this.height / 2;
}

Tail.prototype = {
	rotate: function rotate(dir) {

		var degrees = {

			left: 0,
			right: 180,
			up: 90,
			down: 270

		};

		this.shape.rotation = degrees[dir];
	},
	appear: function appear() {

		this.shape.visible = true;
		this.shape.stage.update();
	},
	disappear: function disappear() {

		this.shape.visible = false;
		this.shape.stage.update();
	}
};

function Snave(config) {

	this.shape = new createjs.Shape();
	config.stage.addChild(this.shape);

	this.food = config.food;
	this.boss = config.boss;
	this.onGo = typeof config.onGo === "function" ? config.onGo.bind(this) : function () {};
	this.onDead = typeof config.onDead === "function" ? config.onDead.bind(this) : function () {};
	this.onEat = typeof config.onEat === "function" ? config.onEat.bind(this) : function () {};
	this.onMove = typeof config.onMove === "function" ? config.onMove.bind(this) : function () {};
	this.width = 32;
	this.height = 32;
	this.animation = 0;
	this.initSpeed = 3;
	this.initX = Math.floor(this.shape.stage.canvas.width * 0.2);
	this.initY = Math.floor(this.shape.stage.canvas.height * 0.7);

	this.shape.name = "snave";
	this.shape.color = "#99c6e5";

	this.shape.graphics.append(new createjs.Graphics.Rect(0, 0, this.width, this.height)).append({
		exec: function exec(ctx, shape) {

			ctx.fillStyle = shape.color;
			ctx.fill();
		}
	});

	this.tail = new Tail(this.shape.stage);
	this.setTailPos();

	this.init();
}

Snave.prototype = {
	init: function init() {

		playSound("start");
		this.reverse = false;
		this.reversing = false;
		this.start = false;
		this.score = 0;
		this.dead = false;
		this.dir = null;
		this.enemy = "food";
		this.speed = this.initSpeed;
		this.shape.x = this.initX;
		this.shape.y = this.initY;
		this.alphaPoint = 50;
		this.alpha();
	},
	setTailPos: function setTailPos() {

		if (this.dir) {

			this.tail.appear();

			if (this.dir === "left") {

				this.tail.shape.x = this.shape.x + this.width + 22;
				this.tail.shape.y = this.shape.y + this.height / 2;
			} else if (this.dir === "right") {

				this.tail.shape.x = this.shape.x - this.tail.width;
				this.tail.shape.y = this.shape.y + this.height / 2;
			} else if (this.dir === "up") {

				this.tail.shape.x = this.shape.x + this.width / 2;
				this.tail.shape.y = this.shape.y + this.height + 22;
			} else if (this.dir === "down") {

				this.tail.shape.x = this.shape.x + this.width / 2;
				this.tail.shape.y = this.shape.y - this.tail.width;
			}
		} else {

			this.tail.disappear();
		}
	},
	alpha: function alpha() {

		this.shape.alpha = this.alphaPoint / 100;
		this.tail.shape.alpha = this.alphaPoint / 100;
	},
	fade: function fade() {
		var val = arguments.length <= 0 || arguments[0] === undefined ? 30 : arguments[0];

		this.alphaPoint -= val;

		if (this.alphaPoint > 0) {

			this.alpha();
		} else {

			this.die();
		}
	},
	enhance: function enhance() {
		var val = arguments.length <= 0 || arguments[0] === undefined ? 2 : arguments[0];

		this.alphaPoint += val;

		if (this.alphaPoint <= 100) {

			this.alpha();
		}
	},
	stop: function stop() {

		cancelAnimationFrame(this.animation);
	},
	move: function move(dir) {

		this.stop();

		if (!this.start) {

			playSound("go");
			this.onGo();
			this.start = true;
		}

		if (this.reversing) {

			this.reverse = !this.reverse;
			this.reversing = false;
		}

		var reverseDirs = {

			"left": "right",
			"right": "left",
			"up": "down",
			"down": "up"

		};

		if (this.reverse) {

			dir = reverseDirs[dir];
		}

		this.dir = dir;
		this.tail.rotate(this.dir);

		(function animate() {
			var _this = this;

			var dirMoves = {
				left: function left() {
					this.shape.x -= this.speed;
				},
				right: function right() {
					this.shape.x += this.speed;
				},
				up: function up() {
					this.shape.y -= this.speed;
				},
				down: function down() {
					this.shape.y += this.speed;
				}
			};

			this.animation = requestAnimationFrame(animate.bind(this));
			dirMoves[this.dir].call(this);
			this.setTailPos();
			this.onMove();

			this.hit(this.boss, function () {

				_this.eat();
				_this.speed += 1;
				_this.boss.disappear();
				_this.food.appear();
				_this.enemy = "food";
			});

			this.hit(this.boss.lasers, function () {

				_this.boss.initLasers();
				_this.boss.stop();
				_this.boss.shoot();
				_this.fade();
			});

			this.hit(this.food, function () {

				_this.eat();
			});

			this.out(function () {

				_this.dir = reverseDirs[_this.dir];
				_this.tail.rotate(_this.dir);
				_this.fade();
			});
		}).call(this);
	},
	eat: function eat() {

		var bossTurn = 10;

		this.reversing = true;
		this.score += 1;
		this.onEat();

		if (this.enemy === "boss") {

			playSound("powerUp");
			this.enhance(10);
		} else {

			playSound("eat");
			this.enhance();
		}

		if ((this.score + 1) % bossTurn === 0 && this.score + 1 >= bossTurn) {

			this.food.changePos(this.boss.shape.x + this.boss.width / 2, this.boss.shape.y + this.boss.height / 2);
		} else {

			this.food.changePos(this.shape.x + this.width / 2, this.shape.y + this.height / 2);
		}

		if (this.score % bossTurn === 0 && this.score >= bossTurn) {

			this.food.disappear();
			this.boss.appear();
			this.boss.shoot();
			this.enemy = "boss";
		}
	},
	die: function die() {

		playSound("die");
		this.dead = true;
		this.stop();
		this.boss.stop();
		this.onDead();
	},
	hit: function hit(thing, callback) {
		var _this2 = this;

		var ifHit = function ifHit(obj) {

			if (obj.shape.isVisible()) {

				var x = _this2.shape.x;
				var y = _this2.shape.y;
				var size = _this2.width;
				var objX = obj.shape.x;
				var objY = obj.shape.y;
				var objWidth = obj.width;
				var objHeight = obj.height;

				return x + size >= objX && x <= objX + objWidth && y + size >= objY && y <= objY + objHeight;
			} else {

				return false;
			}
		};

		if (Array.isArray(thing)) {

			for (var i = 0; i < thing.length; i++) {

				this.hit(thing[i], callback);
			}
		} else {

			if (ifHit(thing)) {

				callback.call(this);
			}
		}
	},
	out: function out(callback) {

		var x = this.shape.x;
		var y = this.shape.y;
		var size = this.width;
		var width = this.shape.stage.canvas.width;
		var height = this.shape.stage.canvas.height;

		if (x <= 0 || y <= 0 || x >= width - size || y >= height - size) {

			callback.call(this);
		}
	},
	appear: function appear() {

		this.shape.visible = true;
		this.shape.stage.update();
	},
	disappear: function disappear() {

		this.shape.visible = false;
		this.shape.stage.update();
	}
};

// Voyga

function Food(config) {

	this.shape = new createjs.Shape();
	config.stage.addChild(this.shape);

	this.width = 20;
	this.height = 20;
	this.initX = Math.floor(this.shape.stage.canvas.width * 0.7);
	this.initY = Math.floor(this.shape.stage.canvas.height * 0.2);
	this.init();

	this.shape.name = "food";
	this.shape.color = "#d2e2f1";
	this.shape.graphics.beginFill(this.shape.color).drawRect(0, 0, this.width, this.height);
}

Food.prototype = {
	init: function init() {

		this.shape.x = this.initX;
		this.shape.y = this.initY;
	},
	changePos: function changePos(avoidX, avoidY) {
		var _this = this;

		var x = Math.floor(10 + (this.shape.stage.canvas.width - this.width - 20) * Math.random());
		var y = Math.floor(10 + (this.shape.stage.canvas.height - this.height - 20) * Math.random());

		var generatePos = function generatePos() {

			x = Math.floor(10 + (_this.shape.stage.canvas.width - _this.width - 20) * Math.random());
			y = Math.floor(10 + (_this.shape.stage.canvas.height - _this.height - 20) * Math.random());

			if (Math.abs(x - avoidX) < 48 || Math.abs(y - avoidY) < 48) {

				generatePos();
			}
		};

		if (avoidX && avoidY) {

			generatePos();
		}

		this.shape.x = x;
		this.shape.y = y;
	},
	appear: function appear() {

		this.shape.visible = true;
		this.shape.stage.update();
	},
	disappear: function disappear() {

		this.shape.visible = false;
		this.shape.stage.update();
	}
};

function Laser(config) {

	this.shape = new createjs.Shape();
	config.stage.addChild(this.shape);

	this.move = typeof config.move === "function" ? config.move.bind(this) : function () {};
	this.color = "#eea9aa";
	this.width = config.width;
	this.height = config.height;

	this.shape.name = "laser";
	this.shape.graphics.beginFill(this.color).drawRect(0, 0, this.width, this.height);
	this.initX = config.x;
	this.initY = config.y;

	this.init();
}

Laser.prototype = {
	init: function init() {

		this.shape.x = this.initX;
		this.shape.y = this.initY;
	},
	appear: function appear() {

		this.shape.visible = true;
		this.shape.stage.update();
	},
	disappear: function disappear() {

		this.shape.visible = false;
		this.shape.stage.update();
	}
};

function Boss(config) {

	this.shape = new createjs.Shape();
	config.stage.addChild(this.shape);

	this.onShoot = typeof config.onShoot === "function" ? config.onShoot.bind(this) : function () {};
	this.animation = 0;
	this.timer = 0;
	this.color = "#eea9aa";
	this.width = 28;
	this.height = 28;
	this.laserSpeed = 2;
	this.shape.x = Math.floor(this.shape.stage.canvas.width * 0.5 - this.width / 2);
	this.shape.y = Math.floor(this.shape.stage.canvas.height * 0.5 - this.height / 2);

	this.shape.name = "boss";
	this.shape.graphics.beginFill(this.color).drawRect(0, 0, this.width, this.height);

	this.laserOne = new Laser({

		stage: this.shape.stage,
		width: 18,
		height: 4,
		x: this.shape.x + 10,
		y: this.shape.y + 12,
		move: function move() {
			this.shape.x += 2;
		}
	});

	this.laserTwo = new Laser({

		stage: this.shape.stage,
		width: 18,
		height: 4,
		x: this.shape.x,
		y: this.shape.y + 12,
		move: function move() {
			this.shape.x -= 2;
		}
	});

	this.laserThree = new Laser({

		stage: this.shape.stage,
		width: 4,
		height: 18,
		x: this.shape.x + 12,
		y: this.shape.y,
		move: function move() {
			this.shape.y -= 2;
		}
	});

	this.laserFour = new Laser({

		stage: this.shape.stage,
		width: 4,
		height: 18,
		x: this.shape.x + 12,
		y: this.shape.y + 10,
		move: function move() {
			this.shape.y += 2;
		}
	});

	this.lasers = [this.laserOne, this.laserTwo, this.laserThree, this.laserFour];

	this.disappear();
}

Boss.prototype = {
	loopLasers: function loopLasers(callback) {

		for (var i = 0; i < this.lasers.length; i++) {

			callback(this.lasers[i], i);
		}
	},
	initLasers: function initLasers() {

		this.loopLasers(function (laser) {
			laser.init();
		});
	},
	hideLasers: function hideLasers() {

		this.loopLasers(function (laser) {
			laser.disappear();
		});
	},
	stop: function stop() {

		clearInterval(this.timer);
		cancelAnimationFrame(this.animation);
	},
	shoot: function shoot() {
		var _this = this;

		var go = function go() {

			_this.animation = requestAnimationFrame(go);

			if (_this.laserTwo.shape.x <= -160) {

				_this.initLasers();
			}

			if (_this.laserOne.shape.x === _this.laserOne.initX) {

				playSound("shoot");
				_this.onShoot();
			}

			_this.loopLasers(function (laser) {
				laser.move();
			});
		};

		this.timer = setTimeout(function () {

			for (var i = 0; i < _this.lasers.length; i++) {

				_this.lasers[i].appear();
			}

			go();
		}, 750);
	},
	appear: function appear() {

		this.shape.visible = true;
		this.shape.stage.update();
	},
	disappear: function disappear() {

		this.stop();
		this.hideLasers();
		this.initLasers();
		this.shape.visible = false;
		this.shape.stage.update();
	}
};

new Vue({

	el: "body",

	data: {

		hideIntro: false,
		stage: null,
		food: null,
		snave: null,
		status: "normal",
		record: new Store("record", 0)

	},

	methods: {
		move: function move(dir) {

			if (this.status === "normal" && this.hideIntro) {

				this.snave.move(dir);
			}
		},
		init: function init() {

			if (this.status === "dead") {

				this.snave.init();
				this.food.init();
				this.status = "normal";
			}
		}
	},

	created: function created() {

		var bodyWidth = V("body").width();
		var bodyHeight = V("body").height();
		var stageSize = bodyWidth - 64 > 360 ? 360 : bodyWidth - 64;

		V("#stageBox").width(stageSize).height(stageSize);

		V("#stage").attr({

			width: stageSize - 8,
			height: stageSize - 8

		});

		var buttonBox = V("#buttonBox");
		var buttons = V(".buttons");
		var buttonBoxHeight = bodyHeight - 32 - stageSize - 24 - 32;
		var buttonHeight = (buttonBoxHeight - 36) / 3;
		var buttonWidth = buttonHeight * 2;
		var buttonBoxWidth = buttonWidth * 2 + 18;

		buttonBox.width(buttonBoxWidth);
		buttonBox.height(buttonBoxHeight);

		for (var i = 0; i < buttons.length; i++) {

			buttons[i].width(buttonWidth);
			buttons[i].height(buttonHeight);
		}
	},
	ready: function ready() {

		var self = this;

		this.stage = new createjs.Stage("stage");
		this.food = new Food({ stage: this.stage });

		this.boss = new Boss({

			stage: this.stage

		});

		this.snave = new Snave({

			stage: this.stage,
			food: this.food,
			boss: this.boss,

			onDead: function onDead() {

				self.status = "dead";

				if (this.score > self.record.data) {

					self.record.set(this.score);
				}
			}
		});

		this.stage.update();

		CordovaUtils.ready(function () {

			FastClick.attach(V("body").el);
			CordovaUtils.splashscreen.hide();
			V("body").appear();
		});
	},

	watch: {
		status: function status() {

			if (this.status !== "normal") {

				this.snave.disappear();
				this.snave.tail.disappear();
				this.boss.disappear();
				this.food.disappear();
			} else {

				this.snave.appear();
				this.food.appear();
			}
		}
	}

});
//# sourceMappingURL=app.js.map
