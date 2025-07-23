import { jsx as x, jsxs as H, Fragment as _i } from "react/jsx-runtime";
import * as m from "react";
import j, { useLayoutEffect as Ri, useState as Ei } from "react";
import * as kr from "react-dom";
import Pi from "react-dom";
function Qn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Lr(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Qn(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Qn(e[o], null);
        }
      };
  };
}
function ke(...e) {
  return m.useCallback(Lr(...e), e);
}
// @__NO_SIDE_EFFECTS__
function wn(e) {
  const t = /* @__PURE__ */ Ai(e), n = m.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = m.Children.toArray(i), c = a.find(Ii);
    if (c) {
      const l = c.props.children, u = a.map((g) => g === c ? m.Children.count(l) > 1 ? m.Children.only(null) : m.isValidElement(l) ? l.props.children : null : g);
      return /* @__PURE__ */ x(t, { ...s, ref: o, children: m.isValidElement(l) ? m.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ x(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Mi = /* @__PURE__ */ wn("Slot");
// @__NO_SIDE_EFFECTS__
function Ai(e) {
  const t = m.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (m.isValidElement(o)) {
      const s = Oi(o), a = $i(i, o.props);
      return o.type !== m.Fragment && (a.ref = r ? Lr(r, s) : s), m.cloneElement(o, a);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Fi = Symbol("radix.slottable");
function Ii(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Fi;
}
function $i(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      const c = i(...a);
      return o(...a), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Oi(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Dr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Dr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Tr() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Dr(e)) && (r && (r += " "), r += t);
  return r;
}
const Jn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, er = Tr, X = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return er(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], g = i == null ? void 0 : i[l];
    if (u === null) return null;
    const d = Jn(u) || Jn(g);
    return o[l][d];
  }), a = n && Object.entries(n).reduce((l, u) => {
    let [g, d] = u;
    return d === void 0 || (l[g] = d), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: g, className: d, ...f } = u;
    return Object.entries(f).every((h) => {
      let [p, b] = h;
      return Array.isArray(b) ? b.includes({
        ...i,
        ...a
      }[p]) : {
        ...i,
        ...a
      }[p] === b;
    }) ? [
      ...l,
      g,
      d
    ] : l;
  }, []);
  return er(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
var zr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
zr.displayName = "CheckIcon";
var Hr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
Hr.displayName = "ChevronDownIcon";
var yn = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M11.764 5.204a.75.75 0 0 1 .032 1.06l-3.516 3.736 3.516 3.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.028l4-4.25a.75.75 0 0 1 1.06-.032Z"
  }));
};
yn.displayName = "ChevronLeftIcon";
var Cn = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
  }));
};
Cn.displayName = "ChevronRightIcon";
var Br = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
Br.displayName = "ChevronUpIcon";
var Gr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    d: "M3 6a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M6.75 14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M5.5 9.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
  }));
};
Gr.displayName = "FilterIcon";
var jr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    d: "M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"
  }));
};
jr.displayName = "RefreshIcon";
var Wr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};
Wr.displayName = "SearchIcon";
var Ur = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    d: "M7.75 6.06v7.69a.75.75 0 0 1-1.5 0v-7.69l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72Z"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M13.75 6.25a.75.75 0 0 0-1.5 0v7.69l-1.72-1.72a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-7.69Z"
  }));
};
Ur.displayName = "SortIcon";
var qr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
  }), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
qr.displayName = "XCircleIcon";
var Xr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    d: "M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z"
  }));
};
Xr.displayName = "XIcon";
const Sn = "-", Ni = (e) => {
  const t = ki(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const a = s.split(Sn);
      return a[0] === "" && a.length !== 1 && a.shift(), Zr(a, t) || Vi(s);
    },
    getConflictingClassGroupIds: (s, a) => {
      const c = n[s] || [];
      return a && r[s] ? [...c, ...r[s]] : c;
    }
  };
}, Zr = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Zr(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Sn);
  return (s = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
}, tr = /^\[(.+)\]$/, Vi = (e) => {
  if (tr.test(e)) {
    const t = tr.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ki = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Di(Object.entries(e.classGroups), n).forEach(([i, s]) => {
    cn(s, r, i, t);
  }), r;
}, cn = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : nr(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Li(o)) {
        cn(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      cn(s, nr(t, i), n, r);
    });
  });
}, nr = (e, t) => {
  let n = e;
  return t.split(Sn).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Li = (e) => e.isThemeGetter, Di = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
  return [n, o];
}) : e, Ti = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (i, s) => {
    n.set(i, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let s = n.get(i);
      if (s !== void 0)
        return s;
      if ((s = r.get(i)) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      n.has(i) ? n.set(i, s) : o(i, s);
    }
  };
}, Yr = "!", zi = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, s = (a) => {
    const c = [];
    let l = 0, u = 0, g;
    for (let b = 0; b < a.length; b++) {
      let v = a[b];
      if (l === 0) {
        if (v === o && (r || a.slice(b, b + i) === t)) {
          c.push(a.slice(u, b)), u = b + i;
          continue;
        }
        if (v === "/") {
          g = b;
          continue;
        }
      }
      v === "[" ? l++ : v === "]" && l--;
    }
    const d = c.length === 0 ? a : a.substring(u), f = d.startsWith(Yr), h = f ? d.substring(1) : d, p = g && g > u ? g - u : void 0;
    return {
      modifiers: c,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: p
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: s
  }) : s;
}, Hi = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, Bi = (e) => ({
  cache: Ti(e.cacheSize),
  parseClassName: zi(e),
  ...Ni(e)
}), Gi = /\s+/, ji = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], s = e.trim().split(Gi);
  let a = "";
  for (let c = s.length - 1; c >= 0; c -= 1) {
    const l = s[c], {
      modifiers: u,
      hasImportantModifier: g,
      baseClassName: d,
      maybePostfixModifierPosition: f
    } = n(l);
    let h = !!f, p = r(h ? d.substring(0, f) : d);
    if (!p) {
      if (!h) {
        a = l + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (p = r(d), !p) {
        a = l + (a.length > 0 ? " " + a : a);
        continue;
      }
      h = !1;
    }
    const b = Hi(u).join(":"), v = g ? b + Yr : b, w = v + p;
    if (i.includes(w))
      continue;
    i.push(w);
    const y = o(p, h);
    for (let C = 0; C < y.length; ++C) {
      const S = y[C];
      i.push(v + S);
    }
    a = l + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Wi() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Kr(t)) && (r && (r += " "), r += n);
  return r;
}
const Kr = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Kr(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Ui(e, ...t) {
  let n, r, o, i = s;
  function s(c) {
    const l = t.reduce((u, g) => g(u), e());
    return n = Bi(l), r = n.cache.get, o = n.cache.set, i = a, a(c);
  }
  function a(c) {
    const l = r(c);
    if (l)
      return l;
    const u = ji(c, n);
    return o(c, u), u;
  }
  return function() {
    return i(Wi.apply(null, arguments));
  };
}
const U = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Qr = /^\[(?:([a-z-]+):)?(.+)\]$/i, qi = /^\d+\/\d+$/, Xi = /* @__PURE__ */ new Set(["px", "full", "screen"]), Zi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Yi = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ki = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Qi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ji = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ce = (e) => qe(e) || Xi.has(e) || qi.test(e), Pe = (e) => Je(e, "length", as), qe = (e) => !!e && !Number.isNaN(Number(e)), Wt = (e) => Je(e, "number", qe), at = (e) => !!e && Number.isInteger(Number(e)), es = (e) => e.endsWith("%") && qe(e.slice(0, -1)), N = (e) => Qr.test(e), Me = (e) => Zi.test(e), ts = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ns = (e) => Je(e, ts, Jr), rs = (e) => Je(e, "position", Jr), os = /* @__PURE__ */ new Set(["image", "url"]), is = (e) => Je(e, os, cs), ss = (e) => Je(e, "", ls), lt = () => !0, Je = (e, t, n) => {
  const r = Qr.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, as = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Yi.test(e) && !Ki.test(e)
), Jr = () => !1, ls = (e) => Qi.test(e), cs = (e) => Ji.test(e), us = () => {
  const e = U("colors"), t = U("spacing"), n = U("blur"), r = U("brightness"), o = U("borderColor"), i = U("borderRadius"), s = U("borderSpacing"), a = U("borderWidth"), c = U("contrast"), l = U("grayscale"), u = U("hueRotate"), g = U("invert"), d = U("gap"), f = U("gradientColorStops"), h = U("gradientColorStopPositions"), p = U("inset"), b = U("margin"), v = U("opacity"), w = U("padding"), y = U("saturate"), C = U("scale"), S = U("sepia"), E = U("skew"), R = U("space"), _ = U("translate"), O = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", N, t], M = () => [N, t], D = () => ["", Ce, Pe], V = () => ["auto", qe, N], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], L = () => ["solid", "dashed", "dotted", "double", "none"], T = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], I = () => ["", "0", N], z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [qe, N];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [lt],
      spacing: [Ce, Pe],
      blur: ["none", "", Me, N],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Me, N],
      borderSpacing: M(),
      borderWidth: D(),
      contrast: W(),
      grayscale: I(),
      hueRotate: W(),
      invert: I(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [es, Pe],
      inset: k(),
      margin: k(),
      opacity: W(),
      padding: M(),
      saturate: W(),
      scale: W(),
      sepia: I(),
      skew: W(),
      space: M(),
      translate: M()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", N]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Me]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": z()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": z()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...B(), N]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: O()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": O()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": O()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [p]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [p]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [p]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [p]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [p]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [p]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [p]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [p]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [p]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", at, N]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: k()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", N]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: I()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: I()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", at, N]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [lt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", at, N]
        }, N]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": V()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": V()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [lt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [at, N]
        }, N]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": V()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": V()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", N]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", N]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [d]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [d]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [d]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...P()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...P(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...P(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [R]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [R]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", N, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [N, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [N, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Me]
        }, Me]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [N, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [N, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Me, Pe]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Wt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [lt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", N]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", qe, Wt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ce, N]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", N]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", N]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [v]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [v]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ce, Pe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ce, N]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: M()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", N]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", N]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [v]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...B(), rs]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", ns]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, is]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [v]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...L(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [v]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: L()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...L()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ce, N]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ce, Pe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: D()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ce, Pe]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Me, ss]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [lt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...T(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": T()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Me, N]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [g]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [S]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [g]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [S]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", N]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: W()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", N]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: W()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", N]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [at, N]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [_]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [_]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [E]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [E]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", N]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", N]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": M()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": M()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": M()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": M()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": M()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": M()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": M()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": M()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": M()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": M()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": M()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": M()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": M()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": M()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": M()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": M()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": M()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": M()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", N]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ce, Pe, Wt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, ds = /* @__PURE__ */ Ui(us);
function G(...e) {
  return ds(Tr(e));
}
const fs = X(
  "cursor-pointer inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-hidden focus-visible:ring-3 focus-visible:ring-offset-2 relative m-0 border-0 font-sans !text-[13px] font-medium !leading-[20.15px] !rounded-lg",
  {
    variants: {
      variant: {
        // Polaris default variant - white background with specific shadow styling
        default: "bg-white text-gray-700 hover:bg-[#f6f6f6] shadow-[inset_0px_0.5px_0px_#c6c6c6,_0px_1px_1px_#c6c6c6,_inset_0.5px_0px_0px_#c6c6c6,_inset_-0.5px_0px_0px_#c6c6c6] hover:shadow-[inset_0px_0.5px_0px_#c6c6c6,_0px_1px_0px_#c6c6c6,_inset_0.5px_0px_0px_#c6c6c6,_inset_-0.5px_0px_0px_#c6c6c6] focus-visible:ring-gray-500/20",
        // Polaris primary variant - dark background with white text
        primary: "bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-900/20",
        // Polaris secondary variant - light background with dark text
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500/20",
        // Polaris tertiary variant - outlined button
        tertiary: "!border !border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-500/20",
        // Polaris plain variant - link-like appearance with blue text and underline on hover
        plain: "text-blue-600 hover:text-blue-700 hover:underline focus-visible:ring-blue-600/20 bg-transparent !shadow-none",
        // Polaris monochrome plain variant - muted appearance
        monochromePlain: "text-gray-600 hover:text-gray-700 hover:underline focus-visible:ring-gray-500/20 bg-transparent !shadow-none"
      },
      size: {
        // Polaris size variants with proper dimensions
        micro: "!h-5 !px-2 !py-0.5 gap-1 text-xs",
        slim: "!h-6 !px-2.5 !py-1 gap-1.5",
        medium: "!h-6 !px-4 !py-2 gap-2",
        large: "!h-7 !px-5 !py-2.5 gap-2.5 text-sm"
      },
      tone: {
        default: "",
        success: "bg-green-700 text-white hover:bg-green-800 focus-visible:ring-green-700/20",
        critical: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600/20"
      },
      textAlign: {
        start: "justify-start text-left",
        center: "justify-center text-center",
        end: "justify-end text-right",
        left: "justify-start text-left",
        right: "justify-end text-right"
      },
      fullWidth: {
        true: "w-full",
        false: ""
      },
      pressed: {
        true: "bg-accent text-accent-foreground",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
      tone: "default",
      textAlign: "center",
      fullWidth: !1,
      pressed: !1
    }
  }
), gs = (e) => e ? e === !0 || e === "down" ? /* @__PURE__ */ x(Hr, { className: "size-4" }) : e === "up" ? /* @__PURE__ */ x(Br, { className: "size-4" }) : e === "select" ? /* @__PURE__ */ x(zr, { className: "size-4" }) : null : null, rr = () => /* @__PURE__ */ x(jr, { className: "size-4 animate-spin" }), ge = m.forwardRef(
  ({
    children: e,
    size: t = "medium",
    textAlign: n = "center",
    fullWidth: r = !1,
    disclosure: o,
    removeUnderline: i,
    icon: s,
    dataPrimaryLink: a,
    tone: c = "default",
    variant: l = "default",
    id: u,
    url: g,
    external: d,
    target: f,
    download: h,
    submit: p,
    disabled: b,
    loading: v,
    pressed: w = !1,
    accessibilityLabel: y,
    role: C,
    ariaControls: S,
    ariaExpanded: E,
    ariaDescribedBy: R,
    ariaChecked: _,
    onClick: O,
    onFocus: $,
    onBlur: k,
    onKeyPress: M,
    onKeyUp: D,
    onKeyDown: V,
    onMouseEnter: B,
    onTouchStart: L,
    onPointerDown: T,
    className: P,
    asChild: I = !1,
    ...z
  }, W) => {
    const K = !!g, ie = I ? Mi : K ? "a" : "button", J = v, ae = b || J, te = gs(o), Q = G(
      fs({
        variant: l,
        size: t,
        tone: c === "critical" ? "critical" : c === "success" ? "success" : "default",
        textAlign: n,
        fullWidth: r,
        pressed: w
      }),
      // Handle underline removal for plain variants
      i && (l === "plain" || l === "monochromePlain") && "no-underline hover:no-underline",
      P
    ), se = {
      id: u,
      className: Q,
      disabled: ae,
      "aria-label": y,
      "aria-controls": S,
      "aria-expanded": E,
      "aria-describedby": R,
      "aria-checked": _,
      "aria-pressed": w,
      "data-primary-link": a,
      role: C,
      onClick: ae ? void 0 : O,
      onFocus: $,
      onBlur: k,
      onKeyPress: M,
      onKeyUp: D,
      onKeyDown: V,
      onMouseEnter: B,
      onTouchStart: L,
      onPointerDown: T,
      ref: W,
      ...z
    };
    return K ? /* @__PURE__ */ H(
      ie,
      {
        ...se,
        href: g,
        target: d ? "_blank" : f,
        rel: d ? "noopener noreferrer" : void 0,
        download: h,
        children: [
          s && !J && /* @__PURE__ */ x("span", { className: "inline-flex shrink-0", children: s }),
          J && /* @__PURE__ */ x(rr, {}),
          e && /* @__PURE__ */ x("span", { className: "inline-flex", children: e }),
          te && !J && /* @__PURE__ */ x("span", { className: "inline-flex shrink-0", children: te })
        ]
      }
    ) : /* @__PURE__ */ H(ie, { ...se, type: p ? "submit" : "button", children: [
      s && !J && /* @__PURE__ */ x("span", { className: "inline-flex shrink-0", children: s }),
      J && /* @__PURE__ */ x(rr, {}),
      e && /* @__PURE__ */ x("span", { className: "inline-flex", children: e }),
      te && !J && /* @__PURE__ */ x("span", { className: "inline-flex shrink-0", children: te })
    ] });
  }
);
ge.displayName = "Button";
const ps = X("flex items-center", {
  variants: {
    gap: {
      extraTight: "gap-0.5",
      tight: "gap-2",
      loose: "gap-4"
    },
    variant: {
      segmented: "gap-0 [&>button]:ml-[-10px] [&>button]:[background-color:#ffffff] [&>button:hover]:[background-color:#f6f6f6] [&>button]:!rounded-none [&>button:first-child]:!rounded-tl-md [&>button:first-child]:!rounded-bl-md [&>button:last-child]:!rounded-tr-md [&>button:last-child]:!rounded-br-md"
    },
    fullWidth: {
      true: "w-full [&>*]:flex-1",
      false: ""
    },
    connectedTop: {
      true: "[&>*]:rounded-t-none",
      false: ""
    },
    noWrap: {
      true: "flex-nowrap",
      false: "flex-wrap"
    }
  },
  defaultVariants: {
    gap: "tight",
    fullWidth: !1,
    connectedTop: !1,
    noWrap: !1
  }
}), eo = m.forwardRef(
  ({
    children: e,
    gap: t = "tight",
    variant: n,
    fullWidth: r = !1,
    connectedTop: o = !1,
    noWrap: i = !1,
    className: s,
    ...a
  }, c) => {
    const l = G(
      ps({
        gap: n === "segmented" ? void 0 : t,
        variant: n,
        fullWidth: r,
        connectedTop: o,
        noWrap: i
      }),
      s
    );
    return /* @__PURE__ */ x("div", { className: l, ref: c, ...a, children: e });
  }
);
eo.displayName = "ButtonGroup";
const ms = (e) => e && {
  bg: "bg-[rgb(241,241,241)]",
  "bg-inverse": "bg-[rgb(26,26,26)]",
  "bg-surface": "bg-white",
  "bg-surface-hover": "bg-[rgb(247,247,247)]",
  "bg-surface-active": "bg-[rgb(243,243,243)]",
  "bg-surface-selected": "bg-[rgb(241,241,241)]",
  "bg-surface-disabled": "bg-black/5",
  "bg-surface-secondary": "bg-[rgb(247,247,247)]",
  "bg-surface-secondary-hover": "bg-[rgb(241,241,241)]",
  "bg-surface-secondary-active": "bg-[rgb(235,235,235)]",
  "bg-surface-secondary-selected": "bg-[rgb(235,235,235)]",
  "bg-surface-tertiary": "bg-[rgb(243,243,243)]",
  "bg-surface-tertiary-hover": "bg-[rgb(235,235,235)]",
  "bg-surface-tertiary-active": "bg-[rgb(227,227,227)]",
  "bg-surface-brand": "bg-[rgb(227,227,227)]",
  "bg-surface-brand-hover": "bg-[rgb(235,235,235)]",
  "bg-surface-brand-active": "bg-[rgb(241,241,241)]",
  "bg-surface-brand-selected": "bg-[rgb(241,241,241)]",
  "bg-surface-info": "bg-[rgb(234,244,255)]",
  "bg-surface-info-hover": "bg-[rgb(224,240,255)]",
  "bg-surface-info-active": "bg-[rgb(202,230,255)]",
  "bg-surface-success": "bg-[rgb(205,254,212)]",
  "bg-surface-success-hover": "bg-[rgb(175,254,191)]",
  "bg-surface-success-active": "bg-[rgb(146,252,172)]",
  "bg-surface-caution": "bg-[rgb(255,248,219)]",
  "bg-surface-caution-hover": "bg-[rgb(255,244,191)]",
  "bg-surface-caution-active": "bg-[rgb(255,239,157)]",
  "bg-surface-warning": "bg-[rgb(255,241,227)]",
  "bg-surface-warning-hover": "bg-[rgb(255,235,213)]",
  "bg-surface-warning-active": "bg-[rgb(255,228,198)]",
  "bg-surface-critical": "bg-[rgb(254,232,235)]",
  "bg-surface-critical-hover": "bg-[rgb(254,225,230)]",
  "bg-surface-critical-active": "bg-[rgb(254,217,223)]",
  "bg-surface-emphasis": "bg-[rgb(240,242,255)]",
  "bg-surface-emphasis-hover": "bg-[rgb(234,237,255)]",
  "bg-surface-emphasis-active": "bg-[rgb(226,231,255)]",
  "bg-surface-magic": "bg-[rgb(248,247,255)]",
  "bg-surface-magic-hover": "bg-[rgb(243,241,255)]",
  "bg-surface-magic-active": "bg-[rgb(233,229,255)]",
  "bg-surface-inverse": "bg-[rgb(48,48,48)]",
  "bg-surface-transparent": "bg-transparent",
  "bg-fill": "bg-white",
  "bg-fill-hover": "bg-[rgb(250,250,250)]",
  "bg-fill-active": "bg-[rgb(247,247,247)]",
  "bg-fill-selected": "bg-[rgb(204,204,204)]",
  "bg-fill-disabled": "bg-black/5",
  "bg-fill-secondary": "bg-[rgb(241,241,241)]",
  "bg-fill-secondary-hover": "bg-[rgb(235,235,235)]",
  "bg-fill-secondary-active": "bg-[rgb(227,227,227)]",
  "bg-fill-secondary-selected": "bg-[rgb(227,227,227)]",
  "bg-fill-tertiary": "bg-[rgb(227,227,227)]",
  "bg-fill-tertiary-hover": "bg-[rgb(212,212,212)]",
  "bg-fill-tertiary-active": "bg-[rgb(204,204,204)]",
  "bg-fill-brand": "bg-[rgb(48,48,48)]",
  "bg-fill-brand-hover": "bg-[rgb(26,26,26)]",
  "bg-fill-brand-active": "bg-[rgb(26,26,26)]",
  "bg-fill-brand-selected": "bg-[rgb(48,48,48)]",
  "bg-fill-brand-disabled": "bg-black/[0.17]",
  "bg-fill-info": "bg-[rgb(145,208,255)]",
  "bg-fill-info-hover": "bg-[rgb(81,192,255)]",
  "bg-fill-info-active": "bg-[rgb(0,148,213)]",
  "bg-fill-info-secondary": "bg-[rgb(213,235,255)]",
  "bg-fill-success": "bg-[rgb(4,123,93)]",
  "bg-fill-success-hover": "bg-[rgb(3,94,76)]",
  "bg-fill-success-active": "bg-[rgb(1,75,64)]",
  "bg-fill-success-secondary": "bg-[rgb(175,254,191)]",
  "bg-fill-warning": "bg-[rgb(255,184,0)]",
  "bg-fill-warning-hover": "bg-[rgb(229,165,0)]",
  "bg-fill-warning-active": "bg-[rgb(178,132,0)]",
  "bg-fill-warning-secondary": "bg-[rgb(255,214,164)]",
  "bg-fill-caution": "bg-[rgb(255,230,0)]",
  "bg-fill-caution-hover": "bg-[rgb(234,211,0)]",
  "bg-fill-caution-active": "bg-[rgb(225,203,0)]",
  "bg-fill-caution-secondary": "bg-[rgb(255,235,120)]",
  "bg-fill-critical": "bg-[rgb(199,10,36)]",
  "bg-fill-critical-hover": "bg-[rgb(163,10,36)]",
  "bg-fill-critical-active": "bg-[rgb(142,11,33)]",
  "bg-fill-critical-selected": "bg-[rgb(142,11,33)]",
  "bg-fill-critical-secondary": "bg-[rgb(254,209,215)]",
  "bg-fill-emphasis": "bg-[rgb(0,91,211)]",
  "bg-fill-emphasis-hover": "bg-[rgb(0,66,153)]",
  "bg-fill-emphasis-active": "bg-[rgb(0,46,106)]",
  "bg-fill-magic": "bg-[rgb(128,81,255)]",
  "bg-fill-magic-secondary": "bg-[rgb(233,229,255)]",
  "bg-fill-magic-secondary-hover": "bg-[rgb(228,222,255)]",
  "bg-fill-magic-secondary-active": "bg-[rgb(223,217,255)]",
  "bg-fill-inverse": "bg-[rgb(48,48,48)]",
  "bg-fill-inverse-hover": "bg-[rgb(74,74,74)]",
  "bg-fill-inverse-active": "bg-[rgb(97,97,97)]",
  "bg-fill-transparent": "bg-black/[0.02]",
  "bg-fill-transparent-hover": "bg-black/5",
  "bg-fill-transparent-active": "bg-black/[0.08]",
  "bg-fill-transparent-selected": "bg-black/[0.08]",
  "bg-fill-transparent-secondary": "bg-black/[0.06]",
  "bg-fill-transparent-secondary-hover": "bg-black/[0.08]",
  "bg-fill-transparent-secondary-active": "bg-black/[0.11]"
}[e] || "", or = (e) => e ? e === "transparent" ? "border-transparent" : {
  border: "border-[rgb(227,227,227)]",
  "border-hover": "border-[rgb(204,204,204)]",
  "border-disabled": "border-[rgb(235,235,235)]",
  "border-secondary": "border-[rgb(235,235,235)]",
  "border-tertiary": "border-[rgb(204,204,204)]",
  "border-focus": "border-[rgb(0,91,211)]",
  "border-brand": "border-[rgb(227,227,227)]",
  "border-info": "border-[rgb(168,216,255)]",
  "border-success": "border-[rgb(146,252,172)]",
  "border-caution": "border-[rgb(255,235,120)]",
  "border-warning": "border-[rgb(255,200,121)]",
  "border-critical": "border-[rgb(254,193,199)]",
  "border-critical-secondary": "border-[rgb(142,11,33)]",
  "border-emphasis": "border-[rgb(0,91,211)]",
  "border-emphasis-hover": "border-[rgb(0,66,153)]",
  "border-emphasis-active": "border-[rgb(0,46,106)]",
  "border-magic": "border-[rgb(228,222,255)]",
  "border-magic-secondary": "border-[rgb(148,116,255)]",
  "border-magic-secondary-hover": "border-[rgb(128,81,255)]",
  "border-inverse": "border-[rgb(97,97,97)]",
  "border-inverse-hover": "border-[rgb(204,204,204)]",
  "border-inverse-active": "border-[rgb(227,227,227)]"
}[e] || "" : "", hs = (e) => e && {
  text: "text-[rgb(48,48,48)]",
  "text-secondary": "text-[rgb(97,97,97)]",
  "text-disabled": "text-[rgb(181,181,181)]",
  "text-link": "text-[rgb(0,91,211)]",
  "text-link-hover": "text-[rgb(0,66,153)]",
  "text-link-active": "text-[rgb(0,46,106)]",
  "text-brand": "text-[rgb(74,74,74)]",
  "text-brand-hover": "text-[rgb(48,48,48)]",
  "text-brand-on-bg-fill": "text-white",
  "text-brand-on-bg-fill-hover": "text-[rgb(227,227,227)]",
  "text-brand-on-bg-fill-active": "text-[rgb(204,204,204)]",
  "text-brand-on-bg-fill-disabled": "text-white",
  "text-info": "text-[rgb(0,58,90)]",
  "text-info-hover": "text-[rgb(0,58,90)]",
  "text-info-active": "text-[rgb(0,33,51)]",
  "text-info-secondary": "text-[rgb(0,124,180)]",
  "text-info-on-bg-fill": "text-[rgb(0,33,51)]",
  "text-success": "text-[rgb(1,75,64)]",
  "text-success-hover": "text-[rgb(7,54,48)]",
  "text-success-active": "text-[rgb(2,38,34)]",
  "text-success-secondary": "text-[rgb(4,123,93)]",
  "text-success-on-bg-fill": "text-[rgb(250,255,251)]",
  "text-caution": "text-[rgb(79,71,0)]",
  "text-caution-hover": "text-[rgb(51,46,0)]",
  "text-caution-active": "text-[rgb(31,28,0)]",
  "text-caution-secondary": "text-[rgb(130,117,0)]",
  "text-caution-on-bg-fill": "text-[rgb(51,46,0)]",
  "text-warning": "text-[rgb(94,66,0)]",
  "text-warning-hover": "text-[rgb(65,45,0)]",
  "text-warning-active": "text-[rgb(37,26,0)]",
  "text-warning-secondary": "text-[rgb(149,111,0)]",
  "text-warning-on-bg-fill": "text-[rgb(37,26,0)]",
  "text-critical": "text-[rgb(142,11,33)]",
  "text-critical-hover": "text-[rgb(95,7,22)]",
  "text-critical-active": "text-[rgb(47,4,11)]",
  "text-critical-secondary": "text-[rgb(199,10,36)]",
  "text-critical-on-bg-fill": "text-[rgb(255,250,251)]",
  "text-emphasis": "text-[rgb(0,91,211)]",
  "text-emphasis-hover": "text-[rgb(0,66,153)]",
  "text-emphasis-active": "text-[rgb(0,46,106)]",
  "text-emphasis-on-bg-fill": "text-[rgb(252,253,255)]",
  "text-emphasis-on-bg-fill-hover": "text-[rgb(226,231,255)]",
  "text-emphasis-on-bg-fill-active": "text-[rgb(213,220,255)]",
  "text-magic": "text-[rgb(87,0,209)]",
  "text-magic-secondary": "text-[rgb(113,38,255)]",
  "text-magic-on-bg-fill": "text-[rgb(253,253,255)]",
  "text-inverse": "text-[rgb(227,227,227)]",
  "text-inverse-secondary": "text-[rgb(181,181,181)]",
  "text-link-inverse": "text-[rgb(197,208,255)]"
}[e] || "", ir = (e) => e && {
  0: "0",
  "025": "px",
  "050": "0.5",
  100: "1",
  150: "1.5",
  200: "2",
  300: "3",
  400: "4",
  500: "5",
  600: "6",
  800: "8",
  1e3: "10",
  1200: "12",
  1600: "16",
  2e3: "20",
  2400: "24",
  2800: "28",
  3200: "32"
}[e] || "", bs = (e) => e && {
  0: "rounded-none",
  "050": "rounded-sm",
  100: "rounded",
  150: "rounded-md",
  200: "rounded-lg",
  300: "rounded-xl",
  400: "rounded-2xl",
  500: "rounded-3xl",
  750: "rounded-[30px]",
  full: "rounded-full"
}[e] || "", sr = (e) => e && {
  0: "border-0",
  "0165": "border-[0.66px]",
  "025": "border",
  "050": "border-2",
  100: "border-4"
}[e] || "", vs = (e) => e && {
  0: "shadow-none",
  100: "shadow-[0px_1px_0px_0px_rgba(26,26,26,0.07)]",
  200: "shadow-[0px_3px_1px_-1px_rgba(26,26,26,0.07)]",
  300: "shadow-[0px_4px_6px_-2px_rgba(26,26,26,0.20)]",
  400: "shadow-[0px_8px_16px_-4px_rgba(26,26,26,0.22)]",
  500: "shadow-[0px_12px_20px_-8px_rgba(26,26,26,0.24)]",
  600: "shadow-[0px_20px_20px_-8px_rgba(26,26,26,0.28)]",
  "bevel-100": "shadow-[1px_0px_0px_0px_rgba(0,0,0,0.13)_inset,_-1px_0px_0px_0px_rgba(0,0,0,0.13)_inset,_0px_-1px_0px_0px_rgba(0,0,0,0.17)_inset,_0px_1px_0px_0px_rgba(204,204,204,0.5)_inset]",
  "inset-100": "shadow-[0px_1px_2px_0px_rgba(26,26,26,0.15)_inset,_0px_1px_1px_0px_rgba(26,26,26,0.15)_inset]",
  "inset-200": "shadow-[0px_2px_1px_0px_rgba(26,26,26,0.20)_inset,_1px_0px_1px_0px_rgba(26,26,26,0.12)_inset,_-1px_0px_1px_0px_rgba(26,26,26,0.12)_inset]",
  button: "shadow-[0px_-1px_0px_0px_#b5b5b5_inset,_0px_0px_0px_1px_rgba(0,0,0,0.1)_inset,_0px_0.5px_0px_1.5px_#FFF_inset]",
  "button-hover": "shadow-[0px_1px_0px_0px_#EBEBEB_inset,_-1px_0px_0px_0px_#EBEBEB_inset,_1px_0px_0px_0px_#EBEBEB_inset,_0px_-1px_0px_0px_#CCC_inset]",
  "button-inset": "shadow-[-1px_0px_1px_0px_rgba(26,26,26,0.122)_inset,_1px_0px_1px_0px_rgba(26,26,26,0.122)_inset,_0px_2px_1px_0px_rgba(26,26,26,0.2)_inset]",
  "button-primary": "shadow-[0px_-1px_0px_1px_rgba(0,0,0,0.8)_inset,_0px_0px_0px_1px_rgba(48,48,48,1)_inset,_0px_0.5px_0px_1.5px_rgba(255,255,255,0.25)_inset]",
  "button-primary-hover": "shadow-[0px_1px_0px_0px_rgba(255,255,255,0.24)_inset,_1px_0px_0px_0px_rgba(255,255,255,0.20)_inset,_-1px_0px_0px_0px_rgba(255,255,255,0.20)_inset,_0px_-1px_0px_0px_#000_inset,_0px_-1px_0px_1px_#1A1A1A]",
  "button-primary-inset": "shadow-[0px_3px_0px_0px_rgb(0,0,0)_inset]",
  "button-primary-critical": "shadow-[0px_-1px_0px_1px_rgba(142,31,11,0.8)_inset,_0px_0px_0px_1px_rgba(181,38,11,0.8)_inset,_0px_0.5px_0px_1.5px_rgba(255,255,255,0.349)_inset]",
  "button-primary-critical-hover": "shadow-[0px_1px_0px_0px_rgba(255,255,255,0.48)_inset,_1px_0px_0px_0px_rgba(255,255,255,0.20)_inset,_-1px_0px_0px_0px_rgba(255,255,255,0.20)_inset,_0px_-1.5px_0px_0px_rgba(0,0,0,0.25)_inset]",
  "button-primary-critical-inset": "shadow-[-1px_0px_1px_0px_rgba(0,0,0,0.2)_inset,_1px_0px_1px_0px_rgba(0,0,0,0.2)_inset,_0px_2px_0px_0px_rgba(0,0,0,0.6)_inset]",
  "button-primary-success": "shadow-[0px_-1px_0px_1px_rgba(12,81,50,0.8)_inset,_0px_0px_0px_1px_rgba(19,111,69,0.8)_inset,_0px_0.5px_0px_1.5px_rgba(255,255,255,0.251)_inset]",
  "button-primary-success-hover": "shadow-[0px_1px_0px_0px_rgba(255,255,255,0.48)_inset,_1px_0px_0px_0px_rgba(255,255,255,0.20)_inset,_-1px_0px_0px_0px_rgba(255,255,255,0.20)_inset,_0px_-1.5px_0px_0px_rgba(0,0,0,0.25)_inset]",
  "button-primary-success-inset": "shadow-[-1px_0px_1px_0px_rgba(0,0,0,0.2)_inset,_1px_0px_1px_0px_rgba(0,0,0,0.2)_inset,_0px_2px_0px_0px_rgba(0,0,0,0.6)_inset]",
  "border-inset": "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)_inset]"
}[e] || "", ce = (e, t = "p") => {
  if (!e) return "";
  if (typeof e == "string") {
    const r = ir(e);
    return r ? `${t}-${r}` : "";
  }
  const n = [];
  return Object.entries(e).forEach(([r, o]) => {
    const i = ir(o);
    if (i) {
      const s = r === "xs" ? "" : `${r}:`;
      n.push(`${s}${t}-${i}`);
    }
  }), n.join(" ");
}, ht = (e, t) => {
  const r = {
    0: "0",
    "0165": "[0.66px]",
    "025": "",
    "050": "2",
    100: "4"
  }[e];
  return r ? `border-${t}-${r}` : `border-${t}`;
}, bt = (e, t) => {
  const r = {
    0: "none",
    "050": "sm",
    100: "",
    150: "md",
    200: "lg",
    300: "xl",
    400: "2xl",
    500: "3xl",
    750: "[30px]",
    full: "full"
  }[e];
  return r ? `rounded-${t}-${r}` : `rounded-${t}`;
}, xs = X("", {
  variants: {
    // Base styling variants can be added here if needed
    visuallyHidden: {
      true: "sr-only",
      false: ""
    },
    printHidden: {
      true: "print:hidden",
      false: ""
    }
  },
  defaultVariants: {
    visuallyHidden: !1,
    printHidden: !1
  }
}), ws = m.forwardRef(
  ({
    children: e,
    as: t = "div",
    background: n,
    borderColor: r,
    borderStyle: o,
    borderRadius: i,
    borderEndStartRadius: s,
    borderEndEndRadius: a,
    borderStartStartRadius: c,
    borderStartEndRadius: l,
    borderWidth: u,
    borderBlockStartWidth: g,
    borderBlockEndWidth: d,
    borderInlineStartWidth: f,
    borderInlineEndWidth: h,
    color: p,
    id: b,
    minHeight: v,
    minWidth: w,
    maxWidth: y,
    overflowX: C,
    overflowY: S,
    padding: E,
    paddingBlock: R,
    paddingBlockStart: _,
    paddingBlockEnd: O,
    paddingInline: $,
    paddingInlineStart: k,
    paddingInlineEnd: M,
    role: D,
    shadow: V,
    tabIndex: B,
    width: L,
    position: T,
    insetBlockStart: P,
    insetBlockEnd: I,
    insetInlineStart: z,
    insetInlineEnd: W,
    opacity: K,
    outlineColor: ie,
    outlineStyle: J,
    outlineWidth: ae,
    printHidden: te = !1,
    visuallyHidden: Q = !1,
    zIndex: se,
    className: Z,
    ...xe
  }, De) => {
    const He = t, le = G(
      xs({
        visuallyHidden: Q,
        printHidden: te
      }),
      // Background
      ms(n),
      // Border
      or(r),
      o === "dashed" ? "border-dashed" : "border-solid",
      bs(i),
      sr(u),
      // Individual border widths
      g && ht(g, "t"),
      d && ht(d, "b"),
      f && ht(f, "l"),
      h && ht(h, "r"),
      // Individual border radius
      s && bt(s, "bl"),
      a && bt(a, "br"),
      c && bt(c, "tl"),
      l && bt(l, "tr"),
      // Text color
      hs(p),
      // Overflow
      C && `overflow-x-${C}`,
      S && `overflow-y-${S}`,
      // Padding
      ce(E, "p"),
      ce(R, "py"),
      ce(_, "pt"),
      ce(O, "pb"),
      ce($, "px"),
      ce(k, "pl"),
      ce(M, "pr"),
      // Shadow
      vs(V),
      // Position
      T && `${T}`,
      // Inset (positioning)
      ce(P, "top"),
      ce(I, "bottom"),
      ce(z, "left"),
      ce(W, "right"),
      // Outline
      ie && or(ie).replace("border-", "outline-"),
      J === "dashed" ? "outline-dashed" : J === "solid" ? "outline-solid" : "",
      ae && sr(ae).replace("border-", "outline-"),
      Z
    ), we = {
      ...v && { minHeight: v },
      ...w && { minWidth: w },
      ...y && { maxWidth: y },
      ...L && { width: L },
      ...K && { opacity: K },
      ...se && { zIndex: se }
    };
    return /* @__PURE__ */ x(
      He,
      {
        ref: De,
        className: le,
        style: Object.keys(we).length > 0 ? we : void 0,
        id: b,
        role: D,
        tabIndex: B,
        ...xe,
        children: e
      }
    );
  }
);
ws.displayName = "Box";
const ys = X("", {
  variants: {
    variant: {
      // Heading variants with responsive sizing (font weights handled separately)
      heading3xl: "text-4xl leading-tight sm:text-5xl sm:leading-tight",
      heading2xl: "text-3xl leading-tight sm:text-4xl sm:leading-tight",
      headingXl: "text-2xl leading-tight sm:text-3xl sm:leading-tight",
      headingLg: "text-xl leading-normal sm:text-2xl sm:leading-normal",
      headingMd: "text-sm leading-normal",
      headingSm: "text-xs leading-normal",
      headingXs: "text-xs leading-tight",
      // Body variants (font weights handled separately)
      bodyLg: "text-sm leading-normal",
      bodyMd: "text-xs leading-normal",
      bodySm: "text-xs leading-tight",
      bodyXs: "text-xs leading-tight"
    },
    alignment: {
      start: "text-left",
      center: "text-center",
      end: "text-right",
      justify: "text-justify"
    },
    tone: {
      base: "text-gray-900",
      disabled: "text-gray-400",
      inherit: "text-inherit",
      success: "text-green-600",
      critical: "text-red-600",
      caution: "text-yellow-600",
      subdued: "text-gray-600",
      "text-inverse": "text-white",
      "text-inverse-secondary": "text-gray-200",
      magic: "text-purple-600",
      "magic-subdued": "text-purple-400"
    },
    fontWeight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    },
    breakWord: {
      true: "break-words",
      false: ""
    },
    truncate: {
      true: "truncate",
      false: ""
    },
    numeric: {
      true: "font-mono tabular-nums",
      false: ""
    },
    visuallyHidden: {
      true: "sr-only",
      false: ""
    },
    textDecorationLine: {
      "line-through": "line-through",
      none: ""
    }
  },
  defaultVariants: {
    variant: "bodyMd",
    alignment: "start",
    tone: "base",
    fontWeight: "regular",
    breakWord: !1,
    truncate: !1,
    numeric: !1,
    visuallyHidden: !1,
    textDecorationLine: "none"
  }
}), Te = m.forwardRef(
  ({
    children: e,
    as: t = "span",
    alignment: n,
    breakWord: r = !1,
    tone: o,
    fontWeight: i,
    id: s,
    numeric: a = !1,
    truncate: c = !1,
    variant: l = "bodyMd",
    visuallyHidden: u = !1,
    textDecorationLine: g,
    className: d,
    ...f
  }, h) => /* @__PURE__ */ x(
    t,
    {
      ref: h,
      id: s,
      className: G(
        ys({
          variant: l,
          alignment: n,
          tone: o,
          fontWeight: (() => {
            if (i) return i;
            switch (l) {
              case "heading3xl":
              case "heading2xl":
              case "headingXl":
                return "bold";
              case "headingLg":
              case "headingMd":
              case "headingSm":
              case "headingXs":
                return "semibold";
              default:
                return "regular";
            }
          })(),
          breakWord: r,
          truncate: c,
          numeric: a,
          visuallyHidden: u,
          textDecorationLine: g ? "line-through" : "none"
        }),
        d
      ),
      ...f,
      children: e
    }
  )
);
Te.displayName = "Text";
const Cs = X(
  // Base styles matching Polaris TextField exactly
  [
    // Layout and positioning
    "relative flex items-center w-full",
    // Typography - Inter font family with Polaris-specific sizing
    "font-sans text-[13px] leading-[20px] font-normal",
    // Colors matching Polaris design tokens
    "text-[rgb(48,48,48)] placeholder:text-[rgb(97,97,97)]",
    // Background and borders
    "bg-white border border-[rgb(138,143,148)] border-t-[rgb(137,143,148)]",
    "rounded-lg",
    // Padding matching Polaris exactly: 6px 12px
    "px-3 py-[6px]",
    // Height matching Polaris exactly: 32px height and min-height
    "h-8 min-h-8",
    // Flex behavior
    "flex-grow flex-shrink",
    // Appearance and interaction
    "appearance-none outline-hidden cursor-text",
    // Focus styles matching Polaris
    "focus-visible:outline-hidden focus-visible:border-[rgb(0,123,255)] focus-visible:border-2",
    "focus-visible:bg-white focus-visible:ring-3 focus-visible:ring-[rgb(0,123,255)] focus-visible:ring-offset-1",
    // Hover styles
    "hover:border-[rgb(97,97,97)] hover:bg-[rgb(247,247,247)]",
    // Disabled styles
    "disabled:cursor-default disabled:text-[rgb(181,181,181)] disabled:bg-[rgb(247,247,247)] disabled:border-transparent",
    // File input styles
    "file:border-0 file:bg-transparent file:text-[13px] file:font-normal"
  ],
  {
    variants: {
      size: {
        // Slim size: 28px height (matching Polaris slim variant)
        slim: "h-7 min-h-7 py-[2px] text-[13px] leading-[20px]",
        // Medium size: 32px height (default Polaris size)
        medium: "h-8 min-h-8 py-[6px] text-[13px] leading-[20px]"
      },
      variant: {
        inherit: "",
        // Borderless variant matching Polaris
        borderless: [
          "border-0 shadow-none min-h-8",
          "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-0",
          "hover:border-0 hover:bg-transparent"
        ]
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right"
      },
      tone: {
        // Magic tone matching Polaris magic styling
        magic: [
          "text-[rgb(128,81,255)] bg-[rgb(248,247,255)]",
          "border-[rgb(153,124,255)]",
          "focus-visible:border-[rgb(0,123,255)] focus-visible:text-[rgb(48,48,48)]",
          "hover:bg-[rgb(243,240,255)] hover:border-[rgb(138,129,255)]"
        ]
      },
      error: {
        true: [
          "border-[rgb(253,75,146)] bg-[rgb(255,247,250)]",
          "focus-visible:border-[rgb(0,123,255)] focus-visible:bg-white",
          "hover:border-[rgb(253,75,146)] hover:bg-[rgb(255,247,250)]"
        ],
        false: ""
      },
      monospaced: {
        // Monospaced font matching Polaris
        true: "font-mono",
        false: "font-sans"
      },
      multiline: {
        // Multiline (textarea) styling
        true: [
          "min-h-[80px] resize-y overflow-auto",
          "items-start py-[6px]",
          "leading-[20px]"
        ],
        false: "items-center"
      }
    },
    defaultVariants: {
      size: "medium",
      variant: "inherit",
      align: "left",
      error: !1,
      monospaced: !1,
      multiline: !1
    }
  }
), Ss = () => {
  const [e] = m.useState(
    () => Math.random().toString(36).substring(2, 11)
  );
  return e;
}, _s = (e) => {
  if (e)
    return typeof e == "number" ? e : 3;
}, Rs = (e) => {
  if (e)
    return e || typeof e == "number" && e > 0 ? { "aria-multiline": !0 } : void 0;
}, ar = (e) => `${e}Label`, lr = (e) => `${e}HelpText`, to = m.forwardRef(
  ({
    prefix: e,
    suffix: t,
    verticalContent: n,
    placeholder: r,
    value: o = "",
    helpText: i,
    label: s,
    labelAction: a,
    labelHidden: c = !1,
    disabled: l = !1,
    clearButton: u = !1,
    readOnly: g = !1,
    autoFocus: d = !1,
    focused: f,
    multiline: h = !1,
    error: p,
    connectedRight: b,
    connectedLeft: v,
    type: w = "text",
    name: y,
    id: C,
    role: S,
    step: E,
    largeStep: R,
    autoComplete: _,
    max: O,
    maxLength: $,
    maxHeight: k,
    min: M,
    minLength: D,
    pattern: V,
    inputMode: B,
    spellCheck: L,
    ariaOwns: T,
    ariaControls: P,
    ariaExpanded: I,
    ariaActiveDescendant: z,
    ariaAutocomplete: W,
    showCharacterCount: K = !1,
    align: ie = "left",
    requiredIndicator: J = !1,
    monospaced: ae = !1,
    selectTextOnFocus: te = !1,
    suggestion: Q,
    variant: se = "inherit",
    size: Z = "medium",
    tone: xe,
    autoSize: De = !1,
    loading: He = !1,
    onClearButtonClick: le,
    onChange: we,
    onSpinnerChange: Tn,
    onFocus: nt,
    onBlur: rt,
    className: Bt,
    ...Be
  }, ot) => {
    const pi = Ss(), Y = C ?? pi, [mi, zn] = m.useState(!!f), Gt = m.useRef(null), Hn = m.useRef(null), Bn = m.useRef(null), mt = m.useCallback(() => h ? Hn.current : Gt.current, [h]);
    m.useEffect(() => {
      const q = mt();
      !q || f === void 0 || (f ? q.focus() : q.blur());
    }, [f, mt]), m.useEffect(() => {
      const q = Gt.current;
      !q || !(w === "text" || w === "tel" || w === "search" || w === "url" || w === "password") || !Q || q.setSelectionRange(o.length, Q.length);
    }, [mi, o, w, Q]);
    const jt = Q || o, hi = w === "currency" ? "text" : w, bi = G(
      Cs({
        size: Z,
        variant: se,
        align: ie,
        tone: xe,
        error: !!p,
        monospaced: ae,
        multiline: !!h
      }),
      De && "w-auto min-w-0",
      Bt
    ), Gn = m.useCallback(
      (q) => {
        we && we(q.currentTarget.value, Y);
      },
      [we, Y]
    ), vi = m.useCallback(
      (q) => {
        if (zn(!0), te && !Q) {
          const ye = mt();
          ye == null || ye.select();
        }
        nt && nt(q);
      },
      [te, Q, mt, nt]
    ), xi = m.useCallback(
      (q) => {
        var ye;
        zn(!1), !((ye = Bn.current) != null && ye.contains(q == null ? void 0 : q.relatedTarget)) && rt && rt(q);
      },
      [rt]
    ), wi = m.useCallback(() => {
      le && le(Y);
    }, [le, Y]), it = [];
    p && it.push(`${Y}Error`), i && it.push(lr(Y)), K && it.push(`${Y}-CharacterCounter`);
    const st = [];
    e && st.push(`${Y}-Prefix`), t && st.push(`${Y}-Suffix`), n && st.push(`${Y}-VerticalContent`), st.unshift(ar(Y));
    let jn = null;
    if (K) {
      const q = jt.length, ye = $ ? `${q}/${$}` : q;
      jn = /* @__PURE__ */ x(
        "div",
        {
          id: `${Y}-CharacterCounter`,
          className: "text-xs text-muted-foreground mt-1",
          children: ye
        }
      );
    }
    const Wn = u && jt !== "" ? /* @__PURE__ */ x(
      "button",
      {
        type: "button",
        className: "absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground focus:outline-hidden focus:ring-3 focus:ring-ring focus:ring-offset-2 rounded-sm",
        onClick: wi,
        tabIndex: -1,
        "aria-label": "Clear",
        children: /* @__PURE__ */ x(qr, { className: "h-4 w-4" })
      }
    ) : null, Un = e ? /* @__PURE__ */ x(
      "div",
      {
        id: `${Y}-Prefix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-r border-input bg-muted/50",
        children: e
      }
    ) : null, qn = t ? /* @__PURE__ */ x(
      "div",
      {
        id: `${Y}-Suffix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-l border-input bg-muted/50",
        children: t
      }
    ) : null, Xn = He ? /* @__PURE__ */ x("div", { className: "absolute right-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ x("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-foreground" }) }) : null, yi = c ? null : /* @__PURE__ */ H(
      "label",
      {
        id: ar(Y),
        htmlFor: Y,
        className: G(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          J && "after:content-['*'] after:ml-1 after:text-destructive"
        ),
        children: [
          s,
          a && /* @__PURE__ */ x(
            "button",
            {
              type: "button",
              onClick: a.onAction,
              className: "ml-2 text-xs text-primary hover:underline focus:outline-hidden focus:underline",
              children: a.content
            }
          )
        ]
      }
    ), Ci = i ? /* @__PURE__ */ x("div", { id: lr(Y), className: "text-xs text-muted-foreground mt-1", children: i }) : null, Si = p && typeof p != "boolean" ? /* @__PURE__ */ x(
      "div",
      {
        id: `${Y}Error`,
        className: "text-xs text-destructive mt-1",
        role: "alert",
        children: p
      }
    ) : null, Zn = n ? /* @__PURE__ */ x(
      "div",
      {
        id: `${Y}-VerticalContent`,
        className: "text-sm text-muted-foreground mb-2",
        children: n
      }
    ) : null, Yn = {
      ...k && { maxHeight: k }
    }, Kn = m.createElement(h ? "textarea" : "input", {
      ref: m.useCallback(
        (q) => {
          h ? Hn.current = q : Gt.current = q, typeof ot == "function" ? ot(q) : ot && (ot.current = q);
        },
        [h, ot]
      ),
      id: Y,
      name: y,
      type: hi,
      value: jt,
      placeholder: r,
      disabled: l,
      readOnly: g,
      autoFocus: d,
      role: S,
      min: M,
      max: O,
      step: E,
      minLength: D,
      maxLength: $,
      pattern: V,
      inputMode: B,
      spellCheck: L,
      autoComplete: _,
      rows: _s(h),
      size: De ? 1 : void 0,
      style: Object.keys(Yn).length > 0 ? Yn : void 0,
      className: bi,
      "aria-describedby": it.length ? it.join(" ") : void 0,
      "aria-labelledby": st.join(" "),
      "aria-invalid": !!p,
      "aria-owns": T,
      "aria-activedescendant": z,
      "aria-autocomplete": W,
      "aria-controls": P,
      "aria-expanded": I,
      "aria-required": J,
      ...Rs(h),
      onChange: Q ? void 0 : Gn,
      onInput: Q ? Gn : void 0,
      onFocus: vi,
      onBlur: xi,
      // Password manager disable attributes
      "data-1p-ignore": _ === "off" || void 0,
      "data-lpignore": _ === "off" || void 0,
      "data-form-type": _ === "off" ? "other" : void 0,
      ...Be
    });
    return /* @__PURE__ */ H("div", { ref: Bn, className: "space-y-2", children: [
      yi,
      v || b ? /* @__PURE__ */ H("div", { className: "flex", children: [
        v,
        /* @__PURE__ */ H("div", { className: "flex-1 relative", children: [
          Zn,
          /* @__PURE__ */ H("div", { className: "relative flex", children: [
            Un,
            Kn,
            qn,
            Wn,
            Xn
          ] })
        ] }),
        b
      ] }) : /* @__PURE__ */ H("div", { className: "relative", children: [
        Zn,
        /* @__PURE__ */ H("div", { className: "relative flex", children: [
          Un,
          Kn,
          qn,
          Wn,
          Xn
        ] })
      ] }),
      Si,
      Ci,
      jn
    ] });
  }
);
to.displayName = "TextField";
function Ie(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function no(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = m.createContext(s), c = n.length;
    n = [...n, s];
    const l = (g) => {
      var v;
      const { scope: d, children: f, ...h } = g, p = ((v = d == null ? void 0 : d[e]) == null ? void 0 : v[c]) || a, b = m.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ x(p.Provider, { value: b, children: f });
    };
    l.displayName = i + "Provider";
    function u(g, d) {
      var p;
      const f = ((p = d == null ? void 0 : d[e]) == null ? void 0 : p[c]) || a, h = m.useContext(f);
      if (h) return h;
      if (s !== void 0) return s;
      throw new Error(`\`${g}\` must be used within \`${i}\``);
    }
    return [l, u];
  }
  const o = () => {
    const i = n.map((s) => m.createContext(s));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || i;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    };
  };
  return o.scopeName = e, [r, Es(o, ...t)];
}
function Es(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: c, scopeName: l }) => {
        const g = c(i)[`__scope${l}`];
        return { ...a, ...g };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Ps = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Ee = Ps.reduce((e, t) => {
  const n = /* @__PURE__ */ wn(`Primitive.${t}`), r = m.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, c = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ x(c, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ms(e, t) {
  e && kr.flushSync(() => e.dispatchEvent(t));
}
function Ye(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function As(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ye(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Fs = "DismissableLayer", un = "dismissableLayer.update", Is = "dismissableLayer.pointerDownOutside", $s = "dismissableLayer.focusOutside", cr, ro = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), oo = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...c
    } = e, l = m.useContext(ro), [u, g] = m.useState(null), d = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, f] = m.useState({}), h = ke(t, (R) => g(R)), p = Array.from(l.layers), [b] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), v = p.indexOf(b), w = u ? p.indexOf(u) : -1, y = l.layersWithOutsidePointerEventsDisabled.size > 0, C = w >= v, S = Vs((R) => {
      const _ = R.target, O = [...l.branches].some(($) => $.contains(_));
      !C || O || (o == null || o(R), s == null || s(R), R.defaultPrevented || a == null || a());
    }, d), E = ks((R) => {
      const _ = R.target;
      [...l.branches].some(($) => $.contains(_)) || (i == null || i(R), s == null || s(R), R.defaultPrevented || a == null || a());
    }, d);
    return As((R) => {
      w === l.layers.size - 1 && (r == null || r(R), !R.defaultPrevented && a && (R.preventDefault(), a()));
    }, d), m.useEffect(() => {
      if (u)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (cr = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), ur(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = cr);
        };
    }, [u, d, n, l]), m.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), ur());
    }, [u, l]), m.useEffect(() => {
      const R = () => f({});
      return document.addEventListener(un, R), () => document.removeEventListener(un, R);
    }, []), /* @__PURE__ */ x(
      Ee.div,
      {
        ...c,
        ref: h,
        style: {
          pointerEvents: y ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Ie(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Ie(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Ie(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
oo.displayName = Fs;
var Os = "DismissableLayerBranch", Ns = m.forwardRef((e, t) => {
  const n = m.useContext(ro), r = m.useRef(null), o = ke(t, r);
  return m.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ x(Ee.div, { ...e, ref: o });
});
Ns.displayName = Os;
function Vs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ye(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let c = function() {
          io(
            Is,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function ks(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ye(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && io($s, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ur() {
  const e = new CustomEvent(un);
  document.dispatchEvent(e);
}
function io(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ms(o, i) : o.dispatchEvent(i);
}
var Ut = 0;
function Ls() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? dr()), document.body.insertAdjacentElement("beforeend", e[1] ?? dr()), Ut++, () => {
      Ut === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ut--;
    };
  }, []);
}
function dr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var qt = "focusScope.autoFocusOnMount", Xt = "focusScope.autoFocusOnUnmount", fr = { bubbles: !1, cancelable: !0 }, Ds = "FocusScope", so = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, c] = m.useState(null), l = Ye(o), u = Ye(i), g = m.useRef(null), d = ke(t, (p) => c(p)), f = m.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  m.useEffect(() => {
    if (r) {
      let p = function(y) {
        if (f.paused || !a) return;
        const C = y.target;
        a.contains(C) ? g.current = C : Ae(g.current, { select: !0 });
      }, b = function(y) {
        if (f.paused || !a) return;
        const C = y.relatedTarget;
        C !== null && (a.contains(C) || Ae(g.current, { select: !0 }));
      }, v = function(y) {
        if (document.activeElement === document.body)
          for (const S of y)
            S.removedNodes.length > 0 && Ae(a);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", b);
      const w = new MutationObserver(v);
      return a && w.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [r, a, f.paused]), m.useEffect(() => {
    if (a) {
      pr.add(f);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const v = new CustomEvent(qt, fr);
        a.addEventListener(qt, l), a.dispatchEvent(v), v.defaultPrevented || (Ts(js(ao(a)), { select: !0 }), document.activeElement === p && Ae(a));
      }
      return () => {
        a.removeEventListener(qt, l), setTimeout(() => {
          const v = new CustomEvent(Xt, fr);
          a.addEventListener(Xt, u), a.dispatchEvent(v), v.defaultPrevented || Ae(p ?? document.body, { select: !0 }), a.removeEventListener(Xt, u), pr.remove(f);
        }, 0);
      };
    }
  }, [a, l, u, f]);
  const h = m.useCallback(
    (p) => {
      if (!n && !r || f.paused) return;
      const b = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, v = document.activeElement;
      if (b && v) {
        const w = p.currentTarget, [y, C] = zs(w);
        y && C ? !p.shiftKey && v === C ? (p.preventDefault(), n && Ae(y, { select: !0 })) : p.shiftKey && v === y && (p.preventDefault(), n && Ae(C, { select: !0 })) : v === w && p.preventDefault();
      }
    },
    [n, r, f.paused]
  );
  return /* @__PURE__ */ x(Ee.div, { tabIndex: -1, ...s, ref: d, onKeyDown: h });
});
so.displayName = Ds;
function Ts(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ae(r, { select: t }), document.activeElement !== n) return;
}
function zs(e) {
  const t = ao(e), n = gr(t, e), r = gr(t.reverse(), e);
  return [n, r];
}
function ao(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function gr(e, t) {
  for (const n of e)
    if (!Hs(n, { upTo: t })) return n;
}
function Hs(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Bs(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ae(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Bs(e) && t && e.select();
  }
}
var pr = Gs();
function Gs() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = mr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = mr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function mr(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function js(e) {
  return e.filter((t) => t.tagName !== "A");
}
var $e = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, Ws = m[" useId ".trim().toString()] || (() => {
}), Us = 0;
function qs(e) {
  const [t, n] = m.useState(Ws());
  return $e(() => {
    n((r) => r ?? String(Us++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const Xs = ["top", "right", "bottom", "left"], Oe = Math.min, ne = Math.max, It = Math.round, vt = Math.floor, he = (e) => ({
  x: e,
  y: e
}), Zs = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ys = {
  start: "end",
  end: "start"
};
function dn(e, t, n) {
  return ne(e, Oe(t, n));
}
function _e(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Re(e) {
  return e.split("-")[0];
}
function et(e) {
  return e.split("-")[1];
}
function _n(e) {
  return e === "x" ? "y" : "x";
}
function Rn(e) {
  return e === "y" ? "height" : "width";
}
const Ks = /* @__PURE__ */ new Set(["top", "bottom"]);
function me(e) {
  return Ks.has(Re(e)) ? "y" : "x";
}
function En(e) {
  return _n(me(e));
}
function Qs(e, t, n) {
  n === void 0 && (n = !1);
  const r = et(e), o = En(e), i = Rn(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = $t(s)), [s, $t(s)];
}
function Js(e) {
  const t = $t(e);
  return [fn(e), t, fn(t)];
}
function fn(e) {
  return e.replace(/start|end/g, (t) => Ys[t]);
}
const hr = ["left", "right"], br = ["right", "left"], ea = ["top", "bottom"], ta = ["bottom", "top"];
function na(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? br : hr : t ? hr : br;
    case "left":
    case "right":
      return t ? ea : ta;
    default:
      return [];
  }
}
function ra(e, t, n, r) {
  const o = et(e);
  let i = na(Re(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(fn)))), i;
}
function $t(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Zs[t]);
}
function oa(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function lo(e) {
  return typeof e != "number" ? oa(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ot(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function vr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = me(t), s = En(t), a = Rn(s), c = Re(t), l = i === "y", u = r.x + r.width / 2 - o.width / 2, g = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
  let f;
  switch (c) {
    case "top":
      f = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: g
      };
      break;
    case "left":
      f = {
        x: r.x - o.width,
        y: g
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (et(t)) {
    case "start":
      f[s] -= d * (n && l ? -1 : 1);
      break;
    case "end":
      f[s] += d * (n && l ? -1 : 1);
      break;
  }
  return f;
}
const ia = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: g
  } = vr(l, r, c), d = r, f = {}, h = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: b,
      fn: v
    } = a[p], {
      x: w,
      y,
      data: C,
      reset: S
    } = await v({
      x: u,
      y: g,
      initialPlacement: r,
      placement: d,
      strategy: o,
      middlewareData: f,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = w ?? u, g = y ?? g, f = {
      ...f,
      [b]: {
        ...f[b],
        ...C
      }
    }, S && h <= 50 && (h++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (l = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: u,
      y: g
    } = vr(l, d, c)), p = -1);
  }
  return {
    x: u,
    y: g,
    placement: d,
    strategy: o,
    middlewareData: f
  };
};
async function dt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: g = "floating",
    altBoundary: d = !1,
    padding: f = 0
  } = _e(t, e), h = lo(f), b = a[d ? g === "floating" ? "reference" : "floating" : g], v = Ot(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), w = g === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), C = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Ot(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: y,
    strategy: c
  }) : w);
  return {
    top: (v.top - S.top + h.top) / C.y,
    bottom: (S.bottom - v.bottom + h.bottom) / C.y,
    left: (v.left - S.left + h.left) / C.x,
    right: (S.right - v.right + h.right) / C.x
  };
}
const sa = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = _e(e, t) || {};
    if (l == null)
      return {};
    const g = lo(u), d = {
      x: n,
      y: r
    }, f = En(o), h = Rn(f), p = await s.getDimensions(l), b = f === "y", v = b ? "top" : "left", w = b ? "bottom" : "right", y = b ? "clientHeight" : "clientWidth", C = i.reference[h] + i.reference[f] - d[f] - i.floating[h], S = d[f] - i.reference[f], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let R = E ? E[y] : 0;
    (!R || !await (s.isElement == null ? void 0 : s.isElement(E))) && (R = a.floating[y] || i.floating[h]);
    const _ = C / 2 - S / 2, O = R / 2 - p[h] / 2 - 1, $ = Oe(g[v], O), k = Oe(g[w], O), M = $, D = R - p[h] - k, V = R / 2 - p[h] / 2 + _, B = dn(M, V, D), L = !c.arrow && et(o) != null && V !== B && i.reference[h] / 2 - (V < M ? $ : k) - p[h] / 2 < 0, T = L ? V < M ? V - M : V - D : 0;
    return {
      [f]: d[f] + T,
      data: {
        [f]: B,
        centerOffset: V - B - T,
        ...L && {
          alignmentOffset: T
        }
      },
      reset: L
    };
  }
}), aa = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: g = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: p = !0,
        ...b
      } = _e(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const v = Re(o), w = me(a), y = Re(a) === a, C = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), S = d || (y || !p ? [$t(a)] : Js(a)), E = h !== "none";
      !d && E && S.push(...ra(a, p, h, C));
      const R = [a, ...S], _ = await dt(t, b), O = [];
      let $ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && O.push(_[v]), g) {
        const V = Qs(o, s, C);
        O.push(_[V[0]], _[V[1]]);
      }
      if ($ = [...$, {
        placement: o,
        overflows: O
      }], !O.every((V) => V <= 0)) {
        var k, M;
        const V = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1, B = R[V];
        if (B && (!(g === "alignment" ? w !== me(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        $.every((P) => P.overflows[0] > 0 && me(P.placement) === w)))
          return {
            data: {
              index: V,
              overflows: $
            },
            reset: {
              placement: B
            }
          };
        let L = (M = $.filter((T) => T.overflows[0] <= 0).sort((T, P) => T.overflows[1] - P.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!L)
          switch (f) {
            case "bestFit": {
              var D;
              const T = (D = $.filter((P) => {
                if (E) {
                  const I = me(P.placement);
                  return I === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((I) => I > 0).reduce((I, z) => I + z, 0)]).sort((P, I) => P[1] - I[1])[0]) == null ? void 0 : D[0];
              T && (L = T);
              break;
            }
            case "initialPlacement":
              L = a;
              break;
          }
        if (o !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
function xr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function wr(e) {
  return Xs.some((t) => e[t] >= 0);
}
const la = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = _e(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await dt(t, {
            ...o,
            elementContext: "reference"
          }), s = xr(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: wr(s)
            }
          };
        }
        case "escaped": {
          const i = await dt(t, {
            ...o,
            altBoundary: !0
          }), s = xr(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: wr(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, co = /* @__PURE__ */ new Set(["left", "top"]);
async function ca(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Re(n), a = et(n), c = me(n) === "y", l = co.has(s) ? -1 : 1, u = i && c ? -1 : 1, g = _e(t, e);
  let {
    mainAxis: d,
    crossAxis: f,
    alignmentAxis: h
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: g.mainAxis || 0,
    crossAxis: g.crossAxis || 0,
    alignmentAxis: g.alignmentAxis
  };
  return a && typeof h == "number" && (f = a === "end" ? h * -1 : h), c ? {
    x: f * u,
    y: d * l
  } : {
    x: d * l,
    y: f * u
  };
}
const ua = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, c = await ca(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, da = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (b) => {
            let {
              x: v,
              y: w
            } = b;
            return {
              x: v,
              y: w
            };
          }
        },
        ...c
      } = _e(e, t), l = {
        x: n,
        y: r
      }, u = await dt(t, c), g = me(Re(o)), d = _n(g);
      let f = l[d], h = l[g];
      if (i) {
        const b = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", w = f + u[b], y = f - u[v];
        f = dn(w, f, y);
      }
      if (s) {
        const b = g === "y" ? "top" : "left", v = g === "y" ? "bottom" : "right", w = h + u[b], y = h - u[v];
        h = dn(w, h, y);
      }
      const p = a.fn({
        ...t,
        [d]: f,
        [g]: h
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [d]: i,
            [g]: s
          }
        }
      };
    }
  };
}, fa = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = _e(e, t), u = {
        x: n,
        y: r
      }, g = me(o), d = _n(g);
      let f = u[d], h = u[g];
      const p = _e(a, t), b = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (c) {
        const y = d === "y" ? "height" : "width", C = i.reference[d] - i.floating[y] + b.mainAxis, S = i.reference[d] + i.reference[y] - b.mainAxis;
        f < C ? f = C : f > S && (f = S);
      }
      if (l) {
        var v, w;
        const y = d === "y" ? "width" : "height", C = co.has(Re(o)), S = i.reference[g] - i.floating[y] + (C && ((v = s.offset) == null ? void 0 : v[g]) || 0) + (C ? 0 : b.crossAxis), E = i.reference[g] + i.reference[y] + (C ? 0 : ((w = s.offset) == null ? void 0 : w[g]) || 0) - (C ? b.crossAxis : 0);
        h < S ? h = S : h > E && (h = E);
      }
      return {
        [d]: f,
        [g]: h
      };
    }
  };
}, ga = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = t, {
        apply: c = () => {
        },
        ...l
      } = _e(e, t), u = await dt(t, l), g = Re(o), d = et(o), f = me(o) === "y", {
        width: h,
        height: p
      } = i.floating;
      let b, v;
      g === "top" || g === "bottom" ? (b = g, v = d === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = g, b = d === "end" ? "top" : "bottom");
      const w = p - u.top - u.bottom, y = h - u.left - u.right, C = Oe(p - u[b], w), S = Oe(h - u[v], y), E = !t.middlewareData.shift;
      let R = C, _ = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (_ = y), (r = t.middlewareData.shift) != null && r.enabled.y && (R = w), E && !d) {
        const $ = ne(u.left, 0), k = ne(u.right, 0), M = ne(u.top, 0), D = ne(u.bottom, 0);
        f ? _ = h - 2 * ($ !== 0 || k !== 0 ? $ + k : ne(u.left, u.right)) : R = p - 2 * (M !== 0 || D !== 0 ? M + D : ne(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: _,
        availableHeight: R
      });
      const O = await s.getDimensions(a.floating);
      return h !== O.width || p !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function kt() {
  return typeof window < "u";
}
function tt(e) {
  return uo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function re(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ve(e) {
  var t;
  return (t = (uo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function uo(e) {
  return kt() ? e instanceof Node || e instanceof re(e).Node : !1;
}
function de(e) {
  return kt() ? e instanceof Element || e instanceof re(e).Element : !1;
}
function be(e) {
  return kt() ? e instanceof HTMLElement || e instanceof re(e).HTMLElement : !1;
}
function yr(e) {
  return !kt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof re(e).ShadowRoot;
}
const pa = /* @__PURE__ */ new Set(["inline", "contents"]);
function gt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !pa.has(o);
}
const ma = /* @__PURE__ */ new Set(["table", "td", "th"]);
function ha(e) {
  return ma.has(tt(e));
}
const ba = [":popover-open", ":modal"];
function Lt(e) {
  return ba.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const va = ["transform", "translate", "scale", "rotate", "perspective"], xa = ["transform", "translate", "scale", "rotate", "perspective", "filter"], wa = ["paint", "layout", "strict", "content"];
function Pn(e) {
  const t = Mn(), n = de(e) ? fe(e) : e;
  return va.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || xa.some((r) => (n.willChange || "").includes(r)) || wa.some((r) => (n.contain || "").includes(r));
}
function ya(e) {
  let t = Ne(e);
  for (; be(t) && !Ke(t); ) {
    if (Pn(t))
      return t;
    if (Lt(t))
      return null;
    t = Ne(t);
  }
  return null;
}
function Mn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Ca = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ke(e) {
  return Ca.has(tt(e));
}
function fe(e) {
  return re(e).getComputedStyle(e);
}
function Dt(e) {
  return de(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ne(e) {
  if (tt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    yr(e) && e.host || // Fallback.
    ve(e)
  );
  return yr(t) ? t.host : t;
}
function fo(e) {
  const t = Ne(e);
  return Ke(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : be(t) && gt(t) ? t : fo(t);
}
function ft(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = fo(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = re(o);
  if (i) {
    const a = gn(s);
    return t.concat(s, s.visualViewport || [], gt(o) ? o : [], a && n ? ft(a) : []);
  }
  return t.concat(o, ft(o, [], n));
}
function gn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function go(e) {
  const t = fe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = be(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = It(n) !== i || It(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function An(e) {
  return de(e) ? e : e.contextElement;
}
function Xe(e) {
  const t = An(e);
  if (!be(t))
    return he(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = go(t);
  let s = (i ? It(n.width) : n.width) / r, a = (i ? It(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Sa = /* @__PURE__ */ he(0);
function po(e) {
  const t = re(e);
  return !Mn() || !t.visualViewport ? Sa : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function _a(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== re(e) ? !1 : t;
}
function ze(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = An(e);
  let s = he(1);
  t && (r ? de(r) && (s = Xe(r)) : s = Xe(e));
  const a = _a(i, n, r) ? po(i) : he(0);
  let c = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, u = o.width / s.x, g = o.height / s.y;
  if (i) {
    const d = re(i), f = r && de(r) ? re(r) : r;
    let h = d, p = gn(h);
    for (; p && r && f !== h; ) {
      const b = Xe(p), v = p.getBoundingClientRect(), w = fe(p), y = v.left + (p.clientLeft + parseFloat(w.paddingLeft)) * b.x, C = v.top + (p.clientTop + parseFloat(w.paddingTop)) * b.y;
      c *= b.x, l *= b.y, u *= b.x, g *= b.y, c += y, l += C, h = re(p), p = gn(h);
    }
  }
  return Ot({
    width: u,
    height: g,
    x: c,
    y: l
  });
}
function Fn(e, t) {
  const n = Dt(e).scrollLeft;
  return t ? t.left + n : ze(ve(e)).left + n;
}
function mo(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Fn(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Ra(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = ve(r), a = t ? Lt(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = he(1);
  const u = he(0), g = be(r);
  if ((g || !g && !i) && ((tt(r) !== "body" || gt(s)) && (c = Dt(r)), be(r))) {
    const f = ze(r);
    l = Xe(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  const d = s && !g && !i ? mo(s, c, !0) : he(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + d.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + d.y
  };
}
function Ea(e) {
  return Array.from(e.getClientRects());
}
function Pa(e) {
  const t = ve(e), n = Dt(e), r = e.ownerDocument.body, o = ne(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ne(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Fn(e);
  const a = -n.scrollTop;
  return fe(r).direction === "rtl" && (s += ne(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function Ma(e, t) {
  const n = re(e), r = ve(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = Mn();
    (!l || l && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
const Aa = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Fa(e, t) {
  const n = ze(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = be(e) ? Xe(e) : he(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function Cr(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ma(e, n);
  else if (t === "document")
    r = Pa(ve(e));
  else if (de(t))
    r = Fa(t, n);
  else {
    const o = po(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ot(r);
}
function ho(e, t) {
  const n = Ne(e);
  return n === t || !de(n) || Ke(n) ? !1 : fe(n).position === "fixed" || ho(n, t);
}
function Ia(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ft(e, [], !1).filter((a) => de(a) && tt(a) !== "body"), o = null;
  const i = fe(e).position === "fixed";
  let s = i ? Ne(e) : e;
  for (; de(s) && !Ke(s); ) {
    const a = fe(s), c = Pn(s);
    !c && a.position === "fixed" && (o = null), (i ? !c && !o : !c && a.position === "static" && !!o && Aa.has(o.position) || gt(s) && !c && ho(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Ne(s);
  }
  return t.set(e, r), r;
}
function $a(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Lt(t) ? [] : Ia(t, this._c) : [].concat(n), r], a = s[0], c = s.reduce((l, u) => {
    const g = Cr(t, u, o);
    return l.top = ne(g.top, l.top), l.right = Oe(g.right, l.right), l.bottom = Oe(g.bottom, l.bottom), l.left = ne(g.left, l.left), l;
  }, Cr(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Oa(e) {
  const {
    width: t,
    height: n
  } = go(e);
  return {
    width: t,
    height: n
  };
}
function Na(e, t, n) {
  const r = be(t), o = ve(t), i = n === "fixed", s = ze(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = he(0);
  function l() {
    c.x = Fn(o);
  }
  if (r || !r && !i)
    if ((tt(t) !== "body" || gt(o)) && (a = Dt(t)), r) {
      const f = ze(t, !0, i, t);
      c.x = f.x + t.clientLeft, c.y = f.y + t.clientTop;
    } else o && l();
  i && !r && o && l();
  const u = o && !r && !i ? mo(o, a) : he(0), g = s.left + a.scrollLeft - c.x - u.x, d = s.top + a.scrollTop - c.y - u.y;
  return {
    x: g,
    y: d,
    width: s.width,
    height: s.height
  };
}
function Zt(e) {
  return fe(e).position === "static";
}
function Sr(e, t) {
  if (!be(e) || fe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ve(e) === n && (n = n.ownerDocument.body), n;
}
function bo(e, t) {
  const n = re(e);
  if (Lt(e))
    return n;
  if (!be(e)) {
    let o = Ne(e);
    for (; o && !Ke(o); ) {
      if (de(o) && !Zt(o))
        return o;
      o = Ne(o);
    }
    return n;
  }
  let r = Sr(e, t);
  for (; r && ha(r) && Zt(r); )
    r = Sr(r, t);
  return r && Ke(r) && Zt(r) && !Pn(r) ? n : r || ya(e) || n;
}
const Va = async function(e) {
  const t = this.getOffsetParent || bo, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Na(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ka(e) {
  return fe(e).direction === "rtl";
}
const La = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ra,
  getDocumentElement: ve,
  getClippingRect: $a,
  getOffsetParent: bo,
  getElementRects: Va,
  getClientRects: Ea,
  getDimensions: Oa,
  getScale: Xe,
  isElement: de,
  isRTL: ka
};
function vo(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Da(e, t) {
  let n = null, r;
  const o = ve(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), i();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: g,
      width: d,
      height: f
    } = l;
    if (a || t(), !d || !f)
      return;
    const h = vt(g), p = vt(o.clientWidth - (u + d)), b = vt(o.clientHeight - (g + f)), v = vt(u), y = {
      rootMargin: -h + "px " + -p + "px " + -b + "px " + -v + "px",
      threshold: ne(0, Oe(1, c)) || 1
    };
    let C = !0;
    function S(E) {
      const R = E[0].intersectionRatio;
      if (R !== c) {
        if (!C)
          return s();
        R ? s(!1, R) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !vo(l, e.getBoundingClientRect()) && s(), C = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, y);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Ta(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = An(e), u = o || i ? [...l ? ft(l) : [], ...ft(t)] : [];
  u.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const g = l && a ? Da(l, n) : null;
  let d = -1, f = null;
  s && (f = new ResizeObserver((v) => {
    let [w] = v;
    w && w.target === l && f && (f.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var y;
      (y = f) == null || y.observe(t);
    })), n();
  }), l && !c && f.observe(l), f.observe(t));
  let h, p = c ? ze(e) : null;
  c && b();
  function b() {
    const v = ze(e);
    p && !vo(p, v) && n(), p = v, h = requestAnimationFrame(b);
  }
  return n(), () => {
    var v;
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), g == null || g(), (v = f) == null || v.disconnect(), f = null, c && cancelAnimationFrame(h);
  };
}
const za = ua, Ha = da, Ba = aa, Ga = ga, ja = la, _r = sa, Wa = fa, Ua = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: La,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return ia(e, t, {
    ...o,
    platform: i
  });
};
var qa = typeof document < "u", Xa = function() {
}, Mt = qa ? Ri : Xa;
function Nt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Nt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Nt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function xo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Rr(e, t) {
  const n = xo(e);
  return Math.round(t * n) / n;
}
function Yt(e) {
  const t = m.useRef(e);
  return Mt(() => {
    t.current = e;
  }), t;
}
function Za(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, g] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [d, f] = m.useState(r);
  Nt(d, r) || f(r);
  const [h, p] = m.useState(null), [b, v] = m.useState(null), w = m.useCallback((P) => {
    P !== E.current && (E.current = P, p(P));
  }, []), y = m.useCallback((P) => {
    P !== R.current && (R.current = P, v(P));
  }, []), C = i || h, S = s || b, E = m.useRef(null), R = m.useRef(null), _ = m.useRef(u), O = c != null, $ = Yt(c), k = Yt(o), M = Yt(l), D = m.useCallback(() => {
    if (!E.current || !R.current)
      return;
    const P = {
      placement: t,
      strategy: n,
      middleware: d
    };
    k.current && (P.platform = k.current), Ua(E.current, R.current, P).then((I) => {
      const z = {
        ...I,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: M.current !== !1
      };
      V.current && !Nt(_.current, z) && (_.current = z, kr.flushSync(() => {
        g(z);
      }));
    });
  }, [d, t, n, k, M]);
  Mt(() => {
    l === !1 && _.current.isPositioned && (_.current.isPositioned = !1, g((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [l]);
  const V = m.useRef(!1);
  Mt(() => (V.current = !0, () => {
    V.current = !1;
  }), []), Mt(() => {
    if (C && (E.current = C), S && (R.current = S), C && S) {
      if ($.current)
        return $.current(C, S, D);
      D();
    }
  }, [C, S, D, $, O]);
  const B = m.useMemo(() => ({
    reference: E,
    floating: R,
    setReference: w,
    setFloating: y
  }), [w, y]), L = m.useMemo(() => ({
    reference: C,
    floating: S
  }), [C, S]), T = m.useMemo(() => {
    const P = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return P;
    const I = Rr(L.floating, u.x), z = Rr(L.floating, u.y);
    return a ? {
      ...P,
      transform: "translate(" + I + "px, " + z + "px)",
      ...xo(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: I,
      top: z
    };
  }, [n, a, L.floating, u.x, u.y]);
  return m.useMemo(() => ({
    ...u,
    update: D,
    refs: B,
    elements: L,
    floatingStyles: T
  }), [u, D, B, L, T]);
}
const Ya = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? _r({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? _r({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Ka = (e, t) => ({
  ...za(e),
  options: [e, t]
}), Qa = (e, t) => ({
  ...Ha(e),
  options: [e, t]
}), Ja = (e, t) => ({
  ...Wa(e),
  options: [e, t]
}), el = (e, t) => ({
  ...Ba(e),
  options: [e, t]
}), tl = (e, t) => ({
  ...Ga(e),
  options: [e, t]
}), nl = (e, t) => ({
  ...ja(e),
  options: [e, t]
}), rl = (e, t) => ({
  ...Ya(e),
  options: [e, t]
});
var ol = "Arrow", wo = m.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ x(
    Ee.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ x("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
wo.displayName = ol;
var il = wo;
function sl(e) {
  const [t, n] = m.useState(void 0);
  return $e(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          s = l.inlineSize, a = l.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var In = "Popper", [yo, Co] = no(In), [al, So] = yo(In), _o = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null);
  return /* @__PURE__ */ x(al, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
_o.displayName = In;
var Ro = "PopperAnchor", Eo = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = So(Ro, n), s = m.useRef(null), a = ke(t, s);
    return m.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
    }), r ? null : /* @__PURE__ */ x(Ee.div, { ...o, ref: a });
  }
);
Eo.displayName = Ro;
var $n = "PopperContent", [ll, cl] = yo($n), Po = m.forwardRef(
  (e, t) => {
    var Q, se, Z, xe, De, He;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: u = 0,
      sticky: g = "partial",
      hideWhenDetached: d = !1,
      updatePositionStrategy: f = "optimized",
      onPlaced: h,
      ...p
    } = e, b = So($n, n), [v, w] = m.useState(null), y = ke(t, (le) => w(le)), [C, S] = m.useState(null), E = sl(C), R = (E == null ? void 0 : E.width) ?? 0, _ = (E == null ? void 0 : E.height) ?? 0, O = r + (i !== "center" ? "-" + i : ""), $ = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, k = Array.isArray(l) ? l : [l], M = k.length > 0, D = {
      padding: $,
      boundary: k.filter(dl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: M
    }, { refs: V, floatingStyles: B, placement: L, isPositioned: T, middlewareData: P } = Za({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: (...le) => Ta(...le, {
        animationFrame: f === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Ka({ mainAxis: o + _, alignmentAxis: s }),
        c && Qa({
          mainAxis: !0,
          crossAxis: !1,
          limiter: g === "partial" ? Ja() : void 0,
          ...D
        }),
        c && el({ ...D }),
        tl({
          ...D,
          apply: ({ elements: le, rects: we, availableWidth: Tn, availableHeight: nt }) => {
            const { width: rt, height: Bt } = we.reference, Be = le.floating.style;
            Be.setProperty("--radix-popper-available-width", `${Tn}px`), Be.setProperty("--radix-popper-available-height", `${nt}px`), Be.setProperty("--radix-popper-anchor-width", `${rt}px`), Be.setProperty("--radix-popper-anchor-height", `${Bt}px`);
          }
        }),
        C && rl({ element: C, padding: a }),
        fl({ arrowWidth: R, arrowHeight: _ }),
        d && nl({ strategy: "referenceHidden", ...D })
      ]
    }), [I, z] = Fo(L), W = Ye(h);
    $e(() => {
      T && (W == null || W());
    }, [T, W]);
    const K = (Q = P.arrow) == null ? void 0 : Q.x, ie = (se = P.arrow) == null ? void 0 : se.y, J = ((Z = P.arrow) == null ? void 0 : Z.centerOffset) !== 0, [ae, te] = m.useState();
    return $e(() => {
      v && te(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ x(
      "div",
      {
        ref: V.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: T ? B.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ae,
          "--radix-popper-transform-origin": [
            (xe = P.transformOrigin) == null ? void 0 : xe.x,
            (De = P.transformOrigin) == null ? void 0 : De.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((He = P.hide) == null ? void 0 : He.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ x(
          ll,
          {
            scope: n,
            placedSide: I,
            onArrowChange: S,
            arrowX: K,
            arrowY: ie,
            shouldHideArrow: J,
            children: /* @__PURE__ */ x(
              Ee.div,
              {
                "data-side": I,
                "data-align": z,
                ...p,
                ref: y,
                style: {
                  ...p.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: T ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Po.displayName = $n;
var Mo = "PopperArrow", ul = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ao = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = cl(Mo, r), s = ul[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ x(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ x(
          il,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Ao.displayName = Mo;
function dl(e) {
  return e !== null;
}
var fl = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, v, w;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, u] = Fo(n), g = { start: "0%", center: "50%", end: "100%" }[u], d = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2, f = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + c / 2;
    let h = "", p = "";
    return l === "bottom" ? (h = s ? g : `${d}px`, p = `${-c}px`) : l === "top" ? (h = s ? g : `${d}px`, p = `${r.floating.height + c}px`) : l === "right" ? (h = `${-c}px`, p = s ? g : `${f}px`) : l === "left" && (h = `${r.floating.width + c}px`, p = s ? g : `${f}px`), { data: { x: h, y: p } };
  }
});
function Fo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var gl = _o, Io = Eo, pl = Po, ml = Ao, hl = "Portal", $o = m.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, i] = m.useState(!1);
  $e(() => i(!0), []);
  const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? Pi.createPortal(/* @__PURE__ */ x(Ee.div, { ...r, ref: t }), s) : null;
});
$o.displayName = hl;
function bl(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var On = (e) => {
  const { present: t, children: n } = e, r = vl(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), i = ke(r.ref, xl(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: i }) : null;
};
On.displayName = "Presence";
function vl(e) {
  const [t, n] = m.useState(), r = m.useRef(null), o = m.useRef(e), i = m.useRef("none"), s = e ? "mounted" : "unmounted", [a, c] = bl(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return m.useEffect(() => {
    const l = xt(r.current);
    i.current = a === "mounted" ? l : "none";
  }, [a]), $e(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const d = i.current, f = xt(l);
      e ? c("MOUNT") : f === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && d !== f ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), $e(() => {
    if (t) {
      let l;
      const u = t.ownerDocument.defaultView ?? window, g = (f) => {
        const p = xt(r.current).includes(f.animationName);
        if (f.target === t && p && (c("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, d = (f) => {
        f.target === t && (i.current = xt(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", g), t.addEventListener("animationend", g), () => {
        u.clearTimeout(l), t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", g), t.removeEventListener("animationend", g);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: m.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, n(l);
    }, [])
  };
}
function xt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function xl(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var wl = m[" useInsertionEffect ".trim().toString()] || $e;
function yl({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = Cl({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, c = a ? e : o;
  {
    const u = m.useRef(e !== void 0);
    m.useEffect(() => {
      const g = u.current;
      g !== a && console.warn(
        `${r} is changing from ${g ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = a;
    }, [a, r]);
  }
  const l = m.useCallback(
    (u) => {
      var g;
      if (a) {
        const d = Sl(u) ? u(e) : u;
        d !== e && ((g = s.current) == null || g.call(s, d));
      } else
        i(u);
    },
    [a, e, i, s]
  );
  return [c, l];
}
function Cl({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), o = m.useRef(n), i = m.useRef(t);
  return wl(() => {
    i.current = t;
  }, [t]), m.useEffect(() => {
    var s;
    o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function Sl(e) {
  return typeof e == "function";
}
var _l = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ge = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), yt = {}, Kt = 0, Oo = function(e) {
  return e && (e.host || Oo(e.parentNode));
}, Rl = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Oo(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, El = function(e, t, n, r) {
  var o = Rl(t, Array.isArray(e) ? e : [e]);
  yt[n] || (yt[n] = /* @__PURE__ */ new WeakMap());
  var i = yt[n], s = [], a = /* @__PURE__ */ new Set(), c = new Set(o), l = function(g) {
    !g || a.has(g) || (a.add(g), l(g.parentNode));
  };
  o.forEach(l);
  var u = function(g) {
    !g || c.has(g) || Array.prototype.forEach.call(g.children, function(d) {
      if (a.has(d))
        u(d);
      else
        try {
          var f = d.getAttribute(r), h = f !== null && f !== "false", p = (Ge.get(d) || 0) + 1, b = (i.get(d) || 0) + 1;
          Ge.set(d, p), i.set(d, b), s.push(d), p === 1 && h && wt.set(d, !0), b === 1 && d.setAttribute(n, "true"), h || d.setAttribute(r, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", d, v);
        }
    });
  };
  return u(t), a.clear(), Kt++, function() {
    s.forEach(function(g) {
      var d = Ge.get(g) - 1, f = i.get(g) - 1;
      Ge.set(g, d), i.set(g, f), d || (wt.has(g) || g.removeAttribute(r), wt.delete(g)), f || g.removeAttribute(n);
    }), Kt--, Kt || (Ge = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), yt = {});
  };
}, Pl = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = _l(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), El(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, pe = function() {
  return pe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, pe.apply(this, arguments);
};
function No(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ml(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var At = "right-scroll-bar-position", Ft = "width-before-scroll-bar", Al = "with-scroll-bars-hidden", Fl = "--removed-body-scroll-bar-size";
function Qt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Il(e, t) {
  var n = Ei(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var $l = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Er = /* @__PURE__ */ new WeakMap();
function Ol(e, t) {
  var n = Il(null, function(r) {
    return e.forEach(function(o) {
      return Qt(o, r);
    });
  });
  return $l(function() {
    var r = Er.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || Qt(a, null);
      }), i.forEach(function(a) {
        o.has(a) || Qt(a, s);
      });
    }
    Er.set(n, e);
  }, [e]), n;
}
function Nl(e) {
  return e;
}
function Vl(e, t) {
  t === void 0 && (t = Nl);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), s = n;
      }
      var c = function() {
        var u = s;
        s = [], u.forEach(i);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(u) {
          s.push(u), l();
        },
        filter: function(u) {
          return s = s.filter(u), n;
        }
      };
    }
  };
  return o;
}
function kl(e) {
  e === void 0 && (e = {});
  var t = Vl(null);
  return t.options = pe({ async: !0, ssr: !1 }, e), t;
}
var Vo = function(e) {
  var t = e.sideCar, n = No(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, pe({}, n));
};
Vo.isSideCarExport = !0;
function Ll(e, t) {
  return e.useMedium(t), Vo;
}
var ko = kl(), Jt = function() {
}, Tt = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: Jt,
    onWheelCapture: Jt,
    onTouchMoveCapture: Jt
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, g = e.shards, d = e.sideCar, f = e.noRelative, h = e.noIsolation, p = e.inert, b = e.allowPinchZoom, v = e.as, w = v === void 0 ? "div" : v, y = e.gapMode, C = No(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = d, E = Ol([n, t]), R = pe(pe({}, C), o);
  return m.createElement(
    m.Fragment,
    null,
    u && m.createElement(S, { sideCar: ko, removeScrollBar: l, shards: g, noRelative: f, noIsolation: h, inert: p, setCallbacks: i, allowPinchZoom: !!b, lockRef: n, gapMode: y }),
    s ? m.cloneElement(m.Children.only(a), pe(pe({}, R), { ref: E })) : m.createElement(w, pe({}, R, { className: c, ref: E }), a)
  );
});
Tt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Tt.classNames = {
  fullWidth: Ft,
  zeroRight: At
};
var Dl = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Tl() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Dl();
  return t && e.setAttribute("nonce", t), e;
}
function zl(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Hl(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Bl = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Tl()) && (zl(t, n), Hl(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Gl = function() {
  var e = Bl();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Lo = function() {
  var e = Gl(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, jl = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, en = function(e) {
  return parseInt(e || "", 10) || 0;
}, Wl = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [en(n), en(r), en(o)];
}, Ul = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return jl;
  var t = Wl(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, ql = Lo(), Ze = "data-scroll-locked", Xl = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Al, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Ze, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(At, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ft, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(At, " .").concat(At, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ft, " .").concat(Ft, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ze, `] {
    `).concat(Fl, ": ").concat(a, `px;
  }
`);
}, Pr = function() {
  var e = parseInt(document.body.getAttribute(Ze) || "0", 10);
  return isFinite(e) ? e : 0;
}, Zl = function() {
  m.useEffect(function() {
    return document.body.setAttribute(Ze, (Pr() + 1).toString()), function() {
      var e = Pr() - 1;
      e <= 0 ? document.body.removeAttribute(Ze) : document.body.setAttribute(Ze, e.toString());
    };
  }, []);
}, Yl = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Zl();
  var i = m.useMemo(function() {
    return Ul(o);
  }, [o]);
  return m.createElement(ql, { styles: Xl(i, !t, o, n ? "" : "!important") });
}, pn = !1;
if (typeof window < "u")
  try {
    var Ct = Object.defineProperty({}, "passive", {
      get: function() {
        return pn = !0, !0;
      }
    });
    window.addEventListener("test", Ct, Ct), window.removeEventListener("test", Ct, Ct);
  } catch {
    pn = !1;
  }
var je = pn ? { passive: !1 } : !1, Kl = function(e) {
  return e.tagName === "TEXTAREA";
}, Do = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Kl(e) && n[t] === "visible")
  );
}, Ql = function(e) {
  return Do(e, "overflowY");
}, Jl = function(e) {
  return Do(e, "overflowX");
}, Mr = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = To(e, r);
    if (o) {
      var i = zo(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, ec = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, tc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, To = function(e, t) {
  return e === "v" ? Ql(t) : Jl(t);
}, zo = function(e, t) {
  return e === "v" ? ec(t) : tc(t);
}, nc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, rc = function(e, t, n, r, o) {
  var i = nc(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, c = t.contains(a), l = !1, u = s > 0, g = 0, d = 0;
  do {
    if (!a)
      break;
    var f = zo(e, a), h = f[0], p = f[1], b = f[2], v = p - b - i * h;
    (h || v) && To(e, a) && (g += v, d += h);
    var w = a.parentNode;
    a = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (u && Math.abs(g) < 1 || !u && Math.abs(d) < 1) && (l = !0), l;
}, St = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ar = function(e) {
  return [e.deltaX, e.deltaY];
}, Fr = function(e) {
  return e && "current" in e ? e.current : e;
}, oc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ic = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, sc = 0, We = [];
function ac(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(sc++)[0], i = m.useState(Lo)[0], s = m.useRef(e);
  m.useEffect(function() {
    s.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = Ml([e.lockRef.current], (e.shards || []).map(Fr), !0).filter(Boolean);
      return p.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = m.useCallback(function(p, b) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !s.current.allowPinchZoom;
    var v = St(p), w = n.current, y = "deltaX" in p ? p.deltaX : w[0] - v[0], C = "deltaY" in p ? p.deltaY : w[1] - v[1], S, E = p.target, R = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in p && R === "h" && E.type === "range")
      return !1;
    var _ = Mr(R, E);
    if (!_)
      return !0;
    if (_ ? S = R : (S = R === "v" ? "h" : "v", _ = Mr(R, E)), !_)
      return !1;
    if (!r.current && "changedTouches" in p && (y || C) && (r.current = S), !S)
      return !0;
    var O = r.current || S;
    return rc(O, b, p, O === "h" ? y : C);
  }, []), c = m.useCallback(function(p) {
    var b = p;
    if (!(!We.length || We[We.length - 1] !== i)) {
      var v = "deltaY" in b ? Ar(b) : St(b), w = t.current.filter(function(S) {
        return S.name === b.type && (S.target === b.target || b.target === S.shadowParent) && oc(S.delta, v);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var y = (s.current.shards || []).map(Fr).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), C = y.length > 0 ? a(b, y[0]) : !s.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = m.useCallback(function(p, b, v, w) {
    var y = { name: p, delta: b, target: v, should: w, shadowParent: lc(v) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), u = m.useCallback(function(p) {
    n.current = St(p), r.current = void 0;
  }, []), g = m.useCallback(function(p) {
    l(p.type, Ar(p), p.target, a(p, e.lockRef.current));
  }, []), d = m.useCallback(function(p) {
    l(p.type, St(p), p.target, a(p, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return We.push(i), e.setCallbacks({
      onScrollCapture: g,
      onWheelCapture: g,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", c, je), document.addEventListener("touchmove", c, je), document.addEventListener("touchstart", u, je), function() {
      We = We.filter(function(p) {
        return p !== i;
      }), document.removeEventListener("wheel", c, je), document.removeEventListener("touchmove", c, je), document.removeEventListener("touchstart", u, je);
    };
  }, []);
  var f = e.removeScrollBar, h = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    h ? m.createElement(i, { styles: ic(o) }) : null,
    f ? m.createElement(Yl, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function lc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const cc = Ll(ko, ac);
var Ho = m.forwardRef(function(e, t) {
  return m.createElement(Tt, pe({}, e, { ref: t, sideCar: cc }));
});
Ho.classNames = Tt.classNames;
var zt = "Popover", [Bo, zu] = no(zt, [
  Co
]), pt = Co(), [uc, Le] = Bo(zt), Go = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !1
  } = e, a = pt(t), c = m.useRef(null), [l, u] = m.useState(!1), [g, d] = yl({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: zt
  });
  return /* @__PURE__ */ x(gl, { ...a, children: /* @__PURE__ */ x(
    uc,
    {
      scope: t,
      contentId: qs(),
      triggerRef: c,
      open: g,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((f) => !f), [d]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: m.useCallback(() => u(!0), []),
      onCustomAnchorRemove: m.useCallback(() => u(!1), []),
      modal: s,
      children: n
    }
  ) });
};
Go.displayName = zt;
var jo = "PopoverAnchor", dc = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Le(jo, n), i = pt(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = o;
    return m.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ x(Io, { ...i, ...r, ref: t });
  }
);
dc.displayName = jo;
var Wo = "PopoverTrigger", Uo = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Le(Wo, n), i = pt(n), s = ke(t, o.triggerRef), a = /* @__PURE__ */ x(
      Ee.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ko(o.open),
        ...r,
        ref: s,
        onClick: Ie(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ x(Io, { asChild: !0, ...i, children: a });
  }
);
Uo.displayName = Wo;
var Nn = "PopoverPortal", [fc, gc] = Bo(Nn, {
  forceMount: void 0
}), qo = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = Le(Nn, t);
  return /* @__PURE__ */ x(fc, { scope: t, forceMount: n, children: /* @__PURE__ */ x(On, { present: n || i.open, children: /* @__PURE__ */ x($o, { asChild: !0, container: o, children: r }) }) });
};
qo.displayName = Nn;
var Qe = "PopoverContent", Xo = m.forwardRef(
  (e, t) => {
    const n = gc(Qe, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Le(Qe, e.__scopePopover);
    return /* @__PURE__ */ x(On, { present: r || i.open, children: i.modal ? /* @__PURE__ */ x(mc, { ...o, ref: t }) : /* @__PURE__ */ x(hc, { ...o, ref: t }) });
  }
);
Xo.displayName = Qe;
var pc = /* @__PURE__ */ wn("PopoverContent.RemoveScroll"), mc = m.forwardRef(
  (e, t) => {
    const n = Le(Qe, e.__scopePopover), r = m.useRef(null), o = ke(t, r), i = m.useRef(!1);
    return m.useEffect(() => {
      const s = r.current;
      if (s) return Pl(s);
    }, []), /* @__PURE__ */ x(Ho, { as: pc, allowPinchZoom: !0, children: /* @__PURE__ */ x(
      Zo,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ie(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), i.current || (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: Ie(
          e.onPointerDownOutside,
          (s) => {
            const a = s.detail.originalEvent, c = a.button === 0 && a.ctrlKey === !0, l = a.button === 2 || c;
            i.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Ie(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), hc = m.forwardRef(
  (e, t) => {
    const n = Le(Qe, e.__scopePopover), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ x(
      Zo,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((l = n.triggerRef.current) == null ? void 0 : l.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), Zo = m.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: c,
      onFocusOutside: l,
      onInteractOutside: u,
      ...g
    } = e, d = Le(Qe, n), f = pt(n);
    return Ls(), /* @__PURE__ */ x(
      so,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ x(
          oo,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: u,
            onEscapeKeyDown: a,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => d.onOpenChange(!1),
            children: /* @__PURE__ */ x(
              pl,
              {
                "data-state": Ko(d.open),
                role: "dialog",
                id: d.contentId,
                ...f,
                ...g,
                ref: t,
                style: {
                  ...g.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Yo = "PopoverClose", bc = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Le(Yo, n);
    return /* @__PURE__ */ x(
      Ee.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Ie(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
bc.displayName = Yo;
var vc = "PopoverArrow", xc = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ x(ml, { ...o, ...r, ref: t });
  }
);
xc.displayName = vc;
function Ko(e) {
  return e ? "open" : "closed";
}
var wc = Go, yc = Uo, Cc = qo, Sc = Xo;
const _c = X(
  "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      sectioned: {
        true: "p-0",
        false: "p-4"
      },
      fullWidth: {
        true: "w-full",
        false: "w-72"
      },
      fullHeight: {
        true: "h-full",
        false: ""
      },
      fluidContent: {
        true: "w-auto h-auto",
        false: ""
      },
      hideOnPrint: {
        true: "print:hidden",
        false: ""
      }
    },
    defaultVariants: {
      sectioned: !1,
      fullWidth: !1,
      fullHeight: !1,
      fluidContent: !1,
      hideOnPrint: !1
    }
  }
), Rc = (e) => {
  switch (e) {
    case "above":
      return "top";
    case "below":
      return "bottom";
    case "cover":
    case "mostSpace":
    default:
      return "bottom";
  }
}, Ec = (e) => {
  switch (e) {
    case "left":
      return "start";
    case "center":
      return "center";
    case "right":
      return "end";
    default:
      return "center";
  }
}, Qo = m.forwardRef(
  ({
    children: e,
    preferredPosition: t = "below",
    preferredAlignment: n = "center",
    active: r,
    activator: o,
    preferInputActivator: i = !0,
    activatorWrapper: s = "div",
    zIndexOverride: a = 400,
    preventFocusOnClose: c = !1,
    sectioned: l = !1,
    fullWidth: u = !1,
    fullHeight: g = !1,
    fluidContent: d = !1,
    fixed: f = !1,
    ariaHaspopup: h,
    hideOnPrint: p = !1,
    onClose: b,
    autofocusTarget: v = "container",
    preventCloseOnChildOverlayClick: w = !1,
    captureOverscroll: y = !1,
    className: C,
    ...S
  }, E) => {
    const R = (V) => {
      V || b("click-outside");
    }, _ = () => {
      b("escape");
    }, O = (V) => {
      w || b("click-outside");
    }, $ = G(
      _c({
        sectioned: l,
        fullWidth: u,
        fullHeight: g,
        fluidContent: d,
        hideOnPrint: p
      }),
      C
    ), k = Rc(t), M = Ec(n);
    return /* @__PURE__ */ H(wc, { open: r, onOpenChange: R, children: [
      /* @__PURE__ */ x(yc, { asChild: !0, children: /* @__PURE__ */ x(s, { children: o }) }),
      /* @__PURE__ */ x(Cc, { children: /* @__PURE__ */ x(
        Sc,
        {
          ref: E,
          side: k,
          align: M,
          className: $,
          style: { zIndex: a },
          onEscapeKeyDown: _,
          onInteractOutside: O,
          ...S,
          children: l ? /* @__PURE__ */ x("div", { className: "p-4", children: e }) : e
        }
      ) })
    ] });
  }
);
Qo.displayName = "Popover";
const Pc = (e) => e && {
  bg: "bg-gray-50",
  "bg-inverse": "bg-gray-900",
  "bg-surface": "bg-white",
  "bg-surface-hover": "bg-gray-50",
  "bg-surface-active": "bg-gray-100",
  "bg-surface-selected": "bg-blue-50",
  "bg-surface-disabled": "bg-gray-100",
  "bg-surface-secondary": "bg-gray-25",
  "bg-surface-secondary-hover": "bg-gray-50",
  "bg-surface-secondary-active": "bg-gray-100",
  "bg-surface-secondary-selected": "bg-blue-50",
  "bg-surface-tertiary": "bg-gray-100",
  "bg-surface-tertiary-hover": "bg-gray-200",
  "bg-surface-tertiary-active": "bg-gray-300",
  "bg-surface-brand": "bg-gray-900",
  "bg-surface-brand-hover": "bg-gray-800",
  "bg-surface-brand-active": "bg-gray-700",
  "bg-surface-brand-selected": "bg-gray-800",
  "bg-surface-info": "bg-blue-50",
  "bg-surface-info-hover": "bg-blue-100",
  "bg-surface-info-active": "bg-blue-200",
  "bg-surface-success": "bg-green-50",
  "bg-surface-success-hover": "bg-green-100",
  "bg-surface-success-active": "bg-green-200",
  "bg-surface-caution": "bg-yellow-50",
  "bg-surface-caution-hover": "bg-yellow-100",
  "bg-surface-caution-active": "bg-yellow-200",
  "bg-surface-warning": "bg-orange-50",
  "bg-surface-warning-hover": "bg-orange-100",
  "bg-surface-warning-active": "bg-orange-200",
  "bg-surface-critical": "bg-red-50",
  "bg-surface-critical-hover": "bg-red-100",
  "bg-surface-critical-active": "bg-red-200",
  "bg-surface-emphasis": "bg-blue-600",
  "bg-surface-emphasis-hover": "bg-blue-700",
  "bg-surface-emphasis-active": "bg-blue-800",
  "bg-surface-magic": "bg-purple-50",
  "bg-surface-magic-hover": "bg-purple-100",
  "bg-surface-magic-active": "bg-purple-200",
  "bg-surface-inverse": "bg-gray-900",
  "bg-surface-transparent": "bg-transparent",
  // Additional subdued variants for backward compatibility
  "bg-surface-subdued": "bg-gray-25",
  "bg-surface-neutral": "bg-gray-50",
  "bg-surface-neutral-subdued": "bg-gray-100",
  "bg-surface-caution-subdued": "bg-yellow-25",
  "bg-surface-warning-subdued": "bg-orange-25",
  "bg-surface-critical-subdued": "bg-red-25",
  "bg-surface-success-subdued": "bg-green-25",
  "bg-surface-highlight": "bg-blue-50",
  "bg-surface-highlight-subdued": "bg-blue-25",
  "bg-surface-magic-subdued": "bg-purple-25",
  "bg-surface-info-subdued": "bg-blue-25",
  "bg-surface-brand-subdued": "bg-gray-800"
}[e] || "bg-white", Mc = X(
  // Base styles matching Polaris Card exactly:
  // - 8px border radius (rounded-lg)
  // - border with exact Polaris color: rgba(227, 227, 227, 1)
  // - shadow-300 exact specification: 0px 4px 6px -2px rgba(26, 26, 26, 0.20)
  // - text color matching Polaris: rgba(48, 48, 48, 1)
  "rounded-lg border text-gray-900",
  {
    variants: {
      roundedAbove: {
        xs: "rounded-lg",
        sm: "sm:rounded-lg",
        md: "md:rounded-lg",
        lg: "lg:rounded-lg",
        xl: "xl:rounded-lg"
      }
    },
    defaultVariants: {
      roundedAbove: "sm"
    }
  }
), Ac = (e) => {
  if (!e)
    return "p-4 sm:p-5";
  if (typeof e == "string")
    return {
      0: "p-0",
      "025": "p-0.5",
      "050": "p-1",
      100: "p-2",
      150: "p-3",
      200: "p-4",
      300: "p-6",
      400: "p-4",
      500: "p-5",
      600: "p-6",
      800: "p-8",
      1e3: "p-10",
      1200: "p-12",
      1600: "p-16",
      2e3: "p-20",
      2400: "p-24",
      2800: "p-28",
      3200: "p-32"
    }[e] || "p-4";
  const t = [], n = {
    xs: "",
    sm: "sm:",
    md: "md:",
    lg: "lg:",
    xl: "xl:"
  };
  return Object.entries(e).forEach(([r, o]) => {
    var a;
    const i = n[r], s = {
      0: "p-0",
      "025": "p-0.5",
      "050": "p-1",
      100: "p-2",
      150: "p-3",
      200: "p-4",
      300: "p-6",
      400: "p-4",
      500: "p-5",
      600: "p-6",
      800: "p-8",
      1e3: "p-10",
      1200: "p-12",
      1600: "p-16",
      2e3: "p-20",
      2400: "p-24",
      2800: "p-28",
      3200: "p-32"
    };
    o && t.push(
      `${i}${((a = s[o]) == null ? void 0 : a.replace("p-", "p-")) || "p-4"}`
    );
  }), t.join(" ") || "p-4 sm:p-5";
}, Fc = m.forwardRef(
  ({
    children: e,
    background: t = "bg-surface",
    padding: n,
    roundedAbove: r = "sm",
    className: o,
    ...i
  }, s) => {
    const a = G(
      Mc({
        roundedAbove: r
      }),
      Pc(t),
      Ac(n),
      // Exact Polaris border color: rgba(227, 227, 227, 1)
      "[border-color:rgba(227,227,227,1)]",
      // Exact Polaris shadow-300: 0px 4px 6px -2px rgba(26, 26, 26, 0.20)
      "[box-shadow:0px_4px_6px_-2px_rgba(26,26,26,0.20)]",
      // Exact Polaris text color: rgba(48, 48, 48, 1)
      "[color:rgba(48,48,48,1)]",
      o
    );
    return /* @__PURE__ */ x("div", { ref: s, className: a, ...i, children: e });
  }
);
Fc.displayName = "Card";
const Ir = (e) => e && {
  0: "0",
  "025": "px",
  "050": "0.5",
  100: "1",
  150: "1.5",
  200: "2",
  300: "3",
  400: "4",
  500: "5",
  600: "6",
  800: "8",
  1e3: "10",
  1200: "12",
  1600: "16",
  2e3: "20",
  2400: "24",
  2800: "28",
  3200: "32"
}[e] || "", Ue = (e, t = "m") => {
  if (!e) return "";
  if (typeof e == "string") {
    const r = Ir(e);
    return r ? `-m${t}-${r}` : "";
  }
  const n = [];
  return Object.entries(e).forEach(([r, o]) => {
    const i = Ir(o);
    if (i) {
      const s = r === "xs" ? "" : `${r}:`;
      n.push(`${s}-m${t}-${i}`);
    }
  }), n.join(" ");
}, Ic = X("", {
  variants: {
    // Base styling variants can be added here if needed
  },
  defaultVariants: {}
}), $c = m.forwardRef(
  ({
    children: e,
    marginInline: t,
    marginBlock: n,
    marginBlockStart: r,
    marginBlockEnd: o,
    marginInlineStart: i,
    marginInlineEnd: s,
    className: a,
    ...c
  }, l) => {
    const u = G(
      Ic(),
      // Negative margins for bleeding effect
      Ue(t, "x"),
      Ue(n, "y"),
      Ue(r, "t"),
      Ue(o, "b"),
      Ue(i, "l"),
      Ue(s, "r"),
      a
    );
    return /* @__PURE__ */ x("div", { ref: l, className: u, ...c, children: e });
  }
);
$c.displayName = "Bleed";
const Oc = X(
  // Base styles matching Polaris Page
  // "min-h-screen bg-[rgb(246,246,247)]",
  "min-h-screen",
  {
    variants: {
      width: {
        default: "max-w-[1200px] mx-auto",
        full: "w-full",
        narrow: "max-w-[760px] mx-auto"
      }
    },
    defaultVariants: {
      width: "default"
    }
  }
), Nc = X(
  "bg-white border-b border-[rgb(227,227,227)] px-6 py-4",
  {
    variants: {
      compact: {
        true: "pb-2",
        false: "pb-4"
      }
    },
    defaultVariants: {
      compact: !1
    }
  }
), Vc = X("px-6 py-6", {
  variants: {},
  defaultVariants: {}
}), kc = m.forwardRef(
  ({
    children: e,
    title: t,
    subtitle: n,
    titleMetadata: r,
    compactTitle: o = !1,
    titleHidden: i = !1,
    fullWidth: s = !1,
    narrowWidth: a = !1,
    primaryAction: c,
    secondaryActions: l = [],
    actionGroups: u = [],
    backAction: g,
    pagination: d,
    pageReadyAccessibilityLabel: f,
    filterActions: h = !1,
    additionalMetadata: p,
    onActionRollup: b,
    hasSubtitleMaxWidth: v = !1,
    className: w,
    ...y
  }, C) => {
    const S = s ? "full" : a ? "narrow" : "default", E = (_, O = "secondary") => {
      var k;
      const $ = "url" in _ && _.url;
      return /* @__PURE__ */ x(
        ge,
        {
          variant: O === "primary" ? "primary" : "secondary",
          onClick: _.onAction,
          url: $ ? _.url : void 0,
          external: "external" in _ ? _.external : void 0,
          target: "target" in _ ? _.target : void 0,
          download: "download" in _ ? _.download : void 0,
          disabled: "disabled" in _ ? _.disabled : void 0,
          loading: "loading" in _ ? _.loading : void 0,
          icon: "icon" in _ ? _.icon : void 0,
          accessibilityLabel: _.accessibilityLabel,
          children: _.content
        },
        _.id || ((k = _.content) == null ? void 0 : k.toString())
      );
    }, R = () => {
      var _, O;
      return d ? /* @__PURE__ */ H("div", { className: "flex items-center justify-between px-6 py-4 bg-white border-t border-[rgb(227,227,227)]", children: [
        /* @__PURE__ */ x(
          ge,
          {
            variant: "secondary",
            disabled: !d.hasPrevious,
            onClick: d.onPrevious,
            url: d.previousURL,
            icon: /* @__PURE__ */ x(yn, {}),
            accessibilityLabel: ((_ = d.accessibilityLabels) == null ? void 0 : _.previous) || "Previous",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ x(
          ge,
          {
            variant: "secondary",
            disabled: !d.hasNext,
            onClick: d.onNext,
            url: d.nextURL,
            icon: /* @__PURE__ */ x(Cn, {}),
            accessibilityLabel: ((O = d.accessibilityLabels) == null ? void 0 : O.next) || "Next",
            children: "Next"
          }
        )
      ] }) : null;
    };
    return /* @__PURE__ */ H(
      "div",
      {
        ref: C,
        className: G(Oc({ width: S }), w),
        "aria-label": f,
        ...y,
        children: [
          (t || g || c || l.length > 0 || u.length > 0) && /* @__PURE__ */ H("header", { className: G(Nc({ compact: o })), children: [
            g && /* @__PURE__ */ x("div", { className: "mb-4", children: E(g, "secondary") }),
            (t || c || l.length > 0 || u.length > 0) && /* @__PURE__ */ H("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ H("div", { className: "flex-1 min-w-0", children: [
                t && !i && /* @__PURE__ */ H("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ x(Te, { as: "h1", variant: "headingLg", fontWeight: "semibold", children: t }),
                  r && /* @__PURE__ */ x("div", { className: "flex items-center", children: r })
                ] }),
                n && /* @__PURE__ */ x(
                  "div",
                  {
                    className: G(
                      "mt-1",
                      v && "max-w-[640px]"
                    ),
                    children: /* @__PURE__ */ x(Te, { variant: "bodyMd", tone: "subdued", children: n })
                  }
                ),
                p && /* @__PURE__ */ x("div", { className: "mt-2", children: p })
              ] }),
              (c || l.length > 0 || u.length > 0) && /* @__PURE__ */ x("div", { className: "flex items-center gap-2 ml-4", children: /* @__PURE__ */ H(eo, { children: [
                l.map(
                  (_) => E(_, "secondary")
                ),
                c && E(c, "primary")
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ x("main", { className: G(Vc()), children: e }),
          R()
        ]
      }
    );
  }
);
kc.displayName = "Page";
const Jo = X(
  "inline-flex items-center justify-center whitespace-nowrap font-sans text-xs font-medium leading-none rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      tone: {
        // Default tone - neutral gray
        default: "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
        // Success tone - green
        success: "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
        // Critical tone - red
        critical: "bg-red-100 text-red-800 border-red-200 hover:bg-red-200",
        // Warning tone - yellow/orange
        warning: "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200",
        // Attention tone - orange
        attention: "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
        // Info tone - blue
        info: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
        // New tone - purple
        new: "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
        // Read-only tone - gray with different styling
        "read-only": "bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100",
        // Enabled tone - green variant
        enabled: "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200",
        // Subdued tone - muted gray
        subdued: "bg-gray-50 text-gray-500 border-gray-100 hover:bg-gray-100"
      },
      size: {
        small: "h-5 px-2 text-xs",
        medium: "h-6 px-2.5 text-xs"
      },
      progress: {
        incomplete: "opacity-60",
        partiallyComplete: "opacity-80",
        complete: "opacity-100"
      }
    },
    defaultVariants: {
      tone: "default",
      size: "medium",
      progress: "complete"
    }
  }
), Hu = Jo, Lc = m.forwardRef(
  ({
    children: e,
    tone: t = "default",
    progress: n = "complete",
    icon: r,
    size: o = "medium",
    className: i,
    asChild: s = !1,
    ...a
  }, c) => {
    const l = G(
      Jo({
        tone: t,
        size: o,
        progress: n
      }),
      i
    ), u = m.useMemo(() => {
      var g;
      return r ? typeof r == "string" ? r === "placeholder" ? /* @__PURE__ */ x("span", { className: "w-3 h-3 bg-current rounded-full opacity-50 mr-1" }) : /* @__PURE__ */ x("span", { className: "mr-1", children: r }) : m.isValidElement(r) ? m.cloneElement(r, {
        className: G("w-3 h-3 mr-1", (g = r.props) == null ? void 0 : g.className)
      }) : typeof r == "function" ? /* @__PURE__ */ x(r, { className: "w-3 h-3 mr-1" }) : null : null;
    }, [r]);
    return /* @__PURE__ */ H("span", { ref: c, className: l, ...a, children: [
      u,
      e
    ] });
  }
);
Lc.displayName = "Badge";
const Dc = X("flex items-center", {
  variants: {
    type: {
      page: "w-full",
      table: "w-auto"
    },
    hasLabel: {
      true: "justify-between",
      false: "justify-center"
    }
  },
  defaultVariants: {
    type: "page",
    hasLabel: !1
  }
}), $r = X(
  "inline-flex items-center justify-center cursor-pointer gap-1 p-1 text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white first:rounded-l-md last:rounded-r-md",
  {
    variants: {
      position: {
        previous: "rounded-l-md border-r-0",
        next: "rounded-r-md",
        single: ""
      },
      disabled: {
        true: "text-gray-400 bg-gray-50",
        false: ""
      }
    },
    defaultVariants: {
      position: "single",
      disabled: !1
    }
  }
), ei = m.forwardRef(
  ({
    nextKeys: e,
    previousKeys: t,
    nextTooltip: n,
    previousTooltip: r,
    nextURL: o,
    previousURL: i,
    hasNext: s = !1,
    hasPrevious: a = !1,
    accessibilityLabel: c = "Pagination",
    accessibilityLabels: l,
    onNext: u,
    onPrevious: g,
    label: d,
    type: f = "page",
    className: h,
    asChild: p = !1,
    ...b
  }, v) => {
    m.useEffect(() => {
      const E = (R) => {
        t != null && t.includes(R.key) && a && g && (R.preventDefault(), g()), e != null && e.includes(R.key) && s && u && (R.preventDefault(), u());
      };
      return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
    }, [t, e, a, s, g, u]);
    const w = l == null ? void 0 : l.previous, y = l == null ? void 0 : l.next, C = () => /* @__PURE__ */ x(
      "button",
      {
        type: "button",
        disabled: !a,
        onClick: g,
        "aria-label": w || "Previous",
        className: G(
          $r({
            position: d ? "previous" : "single",
            disabled: !a
          })
        ),
        children: /* @__PURE__ */ x(yn, { className: "size-6" })
      }
    ), S = () => /* @__PURE__ */ x(
      "button",
      {
        type: "button",
        disabled: !s,
        onClick: u,
        "aria-label": y || "Next",
        className: G(
          $r({
            position: d ? "next" : "single",
            disabled: !s
          })
        ),
        children: /* @__PURE__ */ x(Cn, { className: "size-6" })
      }
    );
    return /* @__PURE__ */ x(
      "nav",
      {
        ref: v,
        "aria-label": c,
        className: G(
          Dc({ type: f, hasLabel: !!d }),
          h
        ),
        ...b,
        children: d ? (
          // With label: Previous - Label - Next (spaced apart)
          /* @__PURE__ */ H(_i, { children: [
            /* @__PURE__ */ x(C, {}),
            /* @__PURE__ */ x("div", { className: "flex-1 flex justify-center", children: typeof d == "string" ? /* @__PURE__ */ x(Te, { variant: "bodySm", tone: "subdued", children: d }) : d }),
            /* @__PURE__ */ x(S, {})
          ] })
        ) : (
          // Without label: Connected Previous/Next buttons
          /* @__PURE__ */ H("div", { className: "inline-flex", children: [
            /* @__PURE__ */ x(C, {}),
            /* @__PURE__ */ x(S, {})
          ] })
        )
      }
    );
  }
);
ei.displayName = "Pagination";
const Tc = X(
  "w-full bg-white border-b border-gray-200",
  {
    variants: {
      mode: {
        DEFAULT: "",
        FILTERING: "shadow-sm"
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
        false: ""
      }
    },
    defaultVariants: {
      mode: "DEFAULT",
      disabled: !1
    }
  }
), zc = X(
  "px-4 py-2 text-sm font-medium transition-colors border-b-2",
  {
    variants: {
      selected: {
        true: "bg-blue-50 border-blue-500 text-blue-700",
        false: "hover:bg-gray-50 border-transparent text-gray-600 hover:text-gray-900"
      }
    },
    defaultVariants: {
      selected: !1
    }
  }
), Bu = () => {
  const [e, t] = m.useState(
    "DEFAULT"
    /* Default */
  );
  return { mode: e, setMode: t };
}, Hc = ({ sortOptions: e, onSort: t, disabled: n }) => {
  const [r, o] = m.useState(!1);
  return /* @__PURE__ */ x(
    Qo,
    {
      active: r,
      activator: /* @__PURE__ */ x(
        ge,
        {
          variant: "tertiary",
          icon: /* @__PURE__ */ x(Ur, { className: "size-4" }),
          disclosure: !0,
          disabled: n,
          onClick: () => o(!r),
          children: "Sort"
        }
      ),
      onClose: () => o(!1),
      children: /* @__PURE__ */ x("div", { className: "p-2 min-w-48", children: e.map((i) => /* @__PURE__ */ H(
        "button",
        {
          className: "w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm",
          onClick: () => {
            t && t([i.value]), o(!1);
          },
          children: [
            i.label,
            " (",
            i.directionLabel,
            ")"
          ]
        },
        i.value
      )) })
    }
  );
}, Bc = m.forwardRef(
  ({
    sortOptions: e,
    sortSelected: t,
    onSort: n,
    onSortKeyChange: r,
    onSortDirectionChange: o,
    onAddFilterClick: i,
    primaryAction: s,
    cancelAction: a,
    onEditStart: c,
    mode: l,
    disclosureZIndexOverride: u,
    setMode: g,
    disabled: d = !1,
    disableQueryField: f = !1,
    disableStickyMode: h,
    isFlushWhenSticky: p,
    canCreateNewView: b,
    onCreateNewView: v,
    filteringAccessibilityLabel: w = "Filter",
    filteringAccessibilityTooltip: y,
    closeOnChildOverlayClick: C,
    disableKeyboardShortcuts: S,
    showEditColumnsButton: E = !1,
    autoFocusSearchField: R = !1,
    tabs: _,
    selected: O = 0,
    onSelect: $,
    filters: k,
    appliedFilters: M,
    onClearAll: D,
    queryValue: V = "",
    queryPlaceholder: B = "Search",
    onQueryChange: L,
    onQueryClear: T,
    className: P,
    asChild: I = !1,
    ...z
  }, W) => {
    const [K, ie] = m.useState(
      l === "FILTERING"
      /* Filtering */
    );
    m.useEffect(() => {
      ie(
        l === "FILTERING"
        /* Filtering */
      );
    }, [l]);
    const J = () => {
      g(K ? "DEFAULT" : "FILTERING"), ie(!K), !K && c && c(
        "FILTERING"
        /* Filtering */
      );
    }, ae = (Z) => {
      L && L(Z);
    }, te = () => {
      T && T();
    }, Q = () => !_ || _.length === 0 ? null : /* @__PURE__ */ x("div", { className: "flex border-b border-gray-200", children: _.map((Z, xe) => /* @__PURE__ */ x(
      "button",
      {
        className: G(
          zc({ selected: xe === O }),
          "px-4 py-2 text-sm font-medium transition-colors"
        ),
        onClick: () => {
          Z.onAction(), $ && $(xe);
        },
        children: Z.content
      },
      Z.id
    )) }), se = () => K ? /* @__PURE__ */ H("div", { className: "p-4 space-y-4", children: [
      /* @__PURE__ */ x(
        to,
        {
          label: "",
          labelHidden: !0,
          value: V,
          onChange: ae,
          placeholder: B,
          prefix: /* @__PURE__ */ x(Wr, { className: "size-4 text-gray-500" }),
          clearButton: V.length > 0,
          onClearButtonClick: te,
          disabled: f || d,
          autoFocus: R,
          autoComplete: "off"
        }
      ),
      M && M.length > 0 && /* @__PURE__ */ H("div", { className: "flex flex-wrap gap-2", children: [
        M.map((Z) => /* @__PURE__ */ H(
          "div",
          {
            className: "inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm",
            children: [
              /* @__PURE__ */ x(Te, { variant: "bodySm", children: Z.label }),
              /* @__PURE__ */ x(
                "button",
                {
                  onClick: Z.onRemove,
                  className: "p-0.5 hover:bg-blue-200 rounded",
                  children: /* @__PURE__ */ x(Xr, { className: "size-3" })
                }
              )
            ]
          },
          Z.key
        )),
        D && /* @__PURE__ */ x(ge, { variant: "plain", size: "micro", onClick: D, children: "Clear all" })
      ] }),
      /* @__PURE__ */ H("div", { className: "flex justify-end gap-2", children: [
        a && /* @__PURE__ */ x(
          ge,
          {
            variant: "secondary",
            onClick: a.onAction,
            disabled: a.disabled,
            loading: a.loading,
            children: "Cancel"
          }
        ),
        s && /* @__PURE__ */ x(
          ge,
          {
            variant: "primary",
            onClick: () => {
              if (s.type === "save-as" && v) {
                const Z = prompt("Enter view name:");
                Z && s.onAction(Z);
              } else
                s.onAction();
            },
            disabled: s.disabled,
            loading: s.loading,
            children: s.type === "save" ? "Save" : "Save as"
          }
        )
      ] })
    ] }) : null;
    return /* @__PURE__ */ H(
      "div",
      {
        ref: W,
        className: G(
          Tc({ mode: l, disabled: d }),
          P
        ),
        ...z,
        children: [
          Q(),
          /* @__PURE__ */ H("div", { className: "flex items-center justify-between p-4", children: [
            /* @__PURE__ */ H("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ x(
                ge,
                {
                  variant: "tertiary",
                  icon: /* @__PURE__ */ x(Gr, { className: "size-4" }),
                  onClick: J,
                  pressed: K,
                  accessibilityLabel: w,
                  disabled: d,
                  children: "Filter"
                }
              ),
              e && e.length > 0 && /* @__PURE__ */ x(
                Hc,
                {
                  sortOptions: e,
                  onSort: n,
                  disabled: d
                }
              )
            ] }),
            E && /* @__PURE__ */ x(ge, { variant: "tertiary", disabled: d, children: "Edit columns" })
          ] }),
          se()
        ]
      }
    );
  }
);
Bc.displayName = "IndexFilters";
/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function Fe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function oe(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: Fe(n, r[e])
    }));
  };
}
function Ht(e) {
  return e instanceof Function;
}
function Gc(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function jc(e, t) {
  const n = [], r = (o) => {
    o.forEach((i) => {
      n.push(i);
      const s = t(i);
      s != null && s.length && r(s);
    });
  };
  return r(e), n;
}
function A(e, t, n) {
  let r = [], o;
  return (i) => {
    let s;
    n.key && n.debug && (s = Date.now());
    const a = e(i);
    if (!(a.length !== r.length || a.some((u, g) => r[g] !== u)))
      return o;
    r = a;
    let l;
    if (n.key && n.debug && (l = Date.now()), o = t(...a), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const u = Math.round((Date.now() - s) * 100) / 100, g = Math.round((Date.now() - l) * 100) / 100, d = g / 16, f = (h, p) => {
        for (h = String(h); h.length < p; )
          h = " " + h;
        return h;
      };
      console.info(`%c⏱ ${f(g, 5)} /${f(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * d, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function F(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: r
  };
}
function Wc(e, t, n, r) {
  const o = () => {
    var s;
    return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
  }, i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: A(() => [e, n, t, i], (s, a, c, l) => ({
      table: s,
      column: a,
      row: c,
      cell: l,
      getValue: l.getValue,
      renderValue: l.renderValue
    }), F(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, n, t, e);
  }, {}), i;
}
function Uc(e, t, n, r) {
  var o, i;
  const a = {
    ...e._getDefaultColumnDef(),
    ...t
  }, c = a.accessorKey;
  let l = (o = (i = a.id) != null ? i : c ? typeof String.prototype.replaceAll == "function" ? c.replaceAll(".", "_") : c.replace(/\./g, "_") : void 0) != null ? o : typeof a.header == "string" ? a.header : void 0, u;
  if (a.accessorFn ? u = a.accessorFn : c && (c.includes(".") ? u = (d) => {
    let f = d;
    for (const p of c.split(".")) {
      var h;
      f = (h = f) == null ? void 0 : h[p], process.env.NODE_ENV !== "production" && f === void 0 && console.warn(`"${p}" in deeply nested key "${c}" returned undefined.`);
    }
    return f;
  } : u = (d) => d[a.accessorKey]), !l)
    throw process.env.NODE_ENV !== "production" ? new Error(a.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let g = {
    id: `${String(l)}`,
    accessorFn: u,
    parent: r,
    depth: n,
    columnDef: a,
    columns: [],
    getFlatColumns: A(() => [!0], () => {
      var d;
      return [g, ...(d = g.columns) == null ? void 0 : d.flatMap((f) => f.getFlatColumns())];
    }, F(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: A(() => [e._getOrderColumnsFn()], (d) => {
      var f;
      if ((f = g.columns) != null && f.length) {
        let h = g.columns.flatMap((p) => p.getLeafColumns());
        return d(h);
      }
      return [g];
    }, F(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const d of e._features)
    d.createColumn == null || d.createColumn(g, e);
  return g;
}
const ee = "debugHeaders";
function Or(e, t, n) {
  var r;
  let i = {
    id: (r = n.id) != null ? r : t.id,
    column: t,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const s = [], a = (c) => {
        c.subHeaders && c.subHeaders.length && c.subHeaders.map(a), s.push(c);
      };
      return a(i), s;
    },
    getContext: () => ({
      table: e,
      header: i,
      column: t
    })
  };
  return e._features.forEach((s) => {
    s.createHeader == null || s.createHeader(i, e);
  }), i;
}
const qc = {
  createTable: (e) => {
    e.getHeaderGroups = A(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, s;
      const a = (i = r == null ? void 0 : r.map((g) => n.find((d) => d.id === g)).filter(Boolean)) != null ? i : [], c = (s = o == null ? void 0 : o.map((g) => n.find((d) => d.id === g)).filter(Boolean)) != null ? s : [], l = n.filter((g) => !(r != null && r.includes(g.id)) && !(o != null && o.includes(g.id)));
      return _t(t, [...a, ...l, ...c], e);
    }, F(e.options, ee, "getHeaderGroups")), e.getCenterHeaderGroups = A(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), _t(t, n, e, "center")), F(e.options, ee, "getCenterHeaderGroups")), e.getLeftHeaderGroups = A(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return _t(t, i, e, "left");
    }, F(e.options, ee, "getLeftHeaderGroups")), e.getRightHeaderGroups = A(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return _t(t, i, e, "right");
    }, F(e.options, ee, "getRightHeaderGroups")), e.getFooterGroups = A(() => [e.getHeaderGroups()], (t) => [...t].reverse(), F(e.options, ee, "getFooterGroups")), e.getLeftFooterGroups = A(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), F(e.options, ee, "getLeftFooterGroups")), e.getCenterFooterGroups = A(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), F(e.options, ee, "getCenterFooterGroups")), e.getRightFooterGroups = A(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), F(e.options, ee, "getRightFooterGroups")), e.getFlatHeaders = A(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), F(e.options, ee, "getFlatHeaders")), e.getLeftFlatHeaders = A(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), F(e.options, ee, "getLeftFlatHeaders")), e.getCenterFlatHeaders = A(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), F(e.options, ee, "getCenterFlatHeaders")), e.getRightFlatHeaders = A(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), F(e.options, ee, "getRightFlatHeaders")), e.getCenterLeafHeaders = A(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), F(e.options, ee, "getCenterLeafHeaders")), e.getLeftLeafHeaders = A(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), F(e.options, ee, "getLeftLeafHeaders")), e.getRightLeafHeaders = A(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), F(e.options, ee, "getRightLeafHeaders")), e.getLeafHeaders = A(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, s, a, c, l;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(s = (a = n[0]) == null ? void 0 : a.headers) != null ? s : [], ...(c = (l = r[0]) == null ? void 0 : l.headers) != null ? c : []].map((u) => u.getLeafHeaders()).flat();
    }, F(e.options, ee, "getLeafHeaders"));
  }
};
function _t(e, t, n, r) {
  var o, i;
  let s = 0;
  const a = function(d, f) {
    f === void 0 && (f = 1), s = Math.max(s, f), d.filter((h) => h.getIsVisible()).forEach((h) => {
      var p;
      (p = h.columns) != null && p.length && a(h.columns, f + 1);
    }, 0);
  };
  a(e);
  let c = [];
  const l = (d, f) => {
    const h = {
      depth: f,
      id: [r, `${f}`].filter(Boolean).join("_"),
      headers: []
    }, p = [];
    d.forEach((b) => {
      const v = [...p].reverse()[0], w = b.column.depth === h.depth;
      let y, C = !1;
      if (w && b.column.parent ? y = b.column.parent : (y = b.column, C = !0), v && (v == null ? void 0 : v.column) === y)
        v.subHeaders.push(b);
      else {
        const S = Or(n, y, {
          id: [r, f, y.id, b == null ? void 0 : b.id].filter(Boolean).join("_"),
          isPlaceholder: C,
          placeholderId: C ? `${p.filter((E) => E.column === y).length}` : void 0,
          depth: f,
          index: p.length
        });
        S.subHeaders.push(b), p.push(S);
      }
      h.headers.push(b), b.headerGroup = h;
    }), c.push(h), f > 0 && l(p, f - 1);
  }, u = t.map((d, f) => Or(n, d, {
    depth: s,
    index: f
  }));
  l(u, s - 1), c.reverse();
  const g = (d) => d.filter((h) => h.column.getIsVisible()).map((h) => {
    let p = 0, b = 0, v = [0];
    h.subHeaders && h.subHeaders.length ? (v = [], g(h.subHeaders).forEach((y) => {
      let {
        colSpan: C,
        rowSpan: S
      } = y;
      p += C, v.push(S);
    })) : p = 1;
    const w = Math.min(...v);
    return b = b + w, h.colSpan = p, h.rowSpan = b, {
      colSpan: p,
      rowSpan: b
    };
  });
  return g((o = (i = c[0]) == null ? void 0 : i.headers) != null ? o : []), c;
}
const Xc = (e, t, n, r, o, i, s) => {
  let a = {
    id: t,
    index: r,
    original: n,
    depth: o,
    parentId: s,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (c) => {
      if (a._valuesCache.hasOwnProperty(c))
        return a._valuesCache[c];
      const l = e.getColumn(c);
      if (l != null && l.accessorFn)
        return a._valuesCache[c] = l.accessorFn(a.original, r), a._valuesCache[c];
    },
    getUniqueValues: (c) => {
      if (a._uniqueValuesCache.hasOwnProperty(c))
        return a._uniqueValuesCache[c];
      const l = e.getColumn(c);
      if (l != null && l.accessorFn)
        return l.columnDef.getUniqueValues ? (a._uniqueValuesCache[c] = l.columnDef.getUniqueValues(a.original, r), a._uniqueValuesCache[c]) : (a._uniqueValuesCache[c] = [a.getValue(c)], a._uniqueValuesCache[c]);
    },
    renderValue: (c) => {
      var l;
      return (l = a.getValue(c)) != null ? l : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => jc(a.subRows, (c) => c.subRows),
    getParentRow: () => a.parentId ? e.getRow(a.parentId, !0) : void 0,
    getParentRows: () => {
      let c = [], l = a;
      for (; ; ) {
        const u = l.getParentRow();
        if (!u) break;
        c.push(u), l = u;
      }
      return c.reverse();
    },
    getAllCells: A(() => [e.getAllLeafColumns()], (c) => c.map((l) => Wc(e, a, l, l.id)), F(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: A(() => [a.getAllCells()], (c) => c.reduce((l, u) => (l[u.column.id] = u, l), {}), F(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let c = 0; c < e._features.length; c++) {
    const l = e._features[c];
    l == null || l.createRow == null || l.createRow(a, e);
  }
  return a;
}, Zc = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, ti = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
ti.autoRemove = (e) => ue(e);
const ni = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
ni.autoRemove = (e) => ue(e);
const ri = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
ri.autoRemove = (e) => ue(e);
const oi = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
oi.autoRemove = (e) => ue(e);
const ii = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
ii.autoRemove = (e) => ue(e) || !(e != null && e.length);
const si = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
si.autoRemove = (e) => ue(e) || !(e != null && e.length);
const ai = (e, t, n) => e.getValue(t) === n;
ai.autoRemove = (e) => ue(e);
const li = (e, t, n) => e.getValue(t) == n;
li.autoRemove = (e) => ue(e);
const Vn = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
Vn.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, s = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const a = i;
    i = s, s = a;
  }
  return [i, s];
};
Vn.autoRemove = (e) => ue(e) || ue(e[0]) && ue(e[1]);
const Se = {
  includesString: ti,
  includesStringSensitive: ni,
  equalsString: ri,
  arrIncludes: oi,
  arrIncludesAll: ii,
  arrIncludesSome: si,
  equals: ai,
  weakEquals: li,
  inNumberRange: Vn
};
function ue(e) {
  return e == null || e === "";
}
const Yc = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: oe("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? Se.includesString : typeof r == "number" ? Se.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? Se.equals : Array.isArray(r) ? Se.arrIncludes : Se.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return Ht(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : Se[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var n, r, o;
      return ((n = e.columnDef.enableColumnFilter) != null ? n : !0) && ((r = t.options.enableColumnFilters) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var n;
      return (n = t.getState().columnFilters) == null || (n = n.find((r) => r.id === e.id)) == null ? void 0 : n.value;
    }, e.getFilterIndex = () => {
      var n, r;
      return (n = (r = t.getState().columnFilters) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
    }, e.setFilterValue = (n) => {
      t.setColumnFilters((r) => {
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((u) => u.id === e.id), s = Fe(n, i ? i.value : void 0);
        if (Nr(o, s, e)) {
          var a;
          return (a = r == null ? void 0 : r.filter((u) => u.id !== e.id)) != null ? a : [];
        }
        const c = {
          id: e.id,
          value: s
        };
        if (i) {
          var l;
          return (l = r == null ? void 0 : r.map((u) => u.id === e.id ? c : u)) != null ? l : [];
        }
        return r != null && r.length ? [...r, c] : [c];
      });
    };
  },
  createRow: (e, t) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (t) => {
      const n = e.getAllLeafColumns(), r = (o) => {
        var i;
        return (i = Fe(t, o)) == null ? void 0 : i.filter((s) => {
          const a = n.find((c) => c.id === s.id);
          if (a) {
            const c = a.getFilterFn();
            if (Nr(c, s.value, a))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(r);
    }, e.resetColumnFilters = (t) => {
      var n, r;
      e.setColumnFilters(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.columnFilters) != null ? n : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function Nr(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const Kc = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), Qc = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Jc = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, eu = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, tu = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, nu = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!Gc(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, s) => i - s);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, ru = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), ou = (e, t) => new Set(t.map((n) => n.getValue(e))).size, iu = (e, t) => t.length, tn = {
  sum: Kc,
  min: Qc,
  max: Jc,
  extent: eu,
  mean: tu,
  median: nu,
  unique: ru,
  uniqueCount: ou,
  count: iu
}, su = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var t, n;
      return (t = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? t : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: oe("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, t) => {
    e.toggleGrouping = () => {
      t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((r) => r !== e.id) : [...n ?? [], e.id]);
    }, e.getCanGroup = () => {
      var n, r;
      return ((n = e.columnDef.enableGrouping) != null ? n : !0) && ((r = t.options.enableGrouping) != null ? r : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.includes(e.id);
    }, e.getGroupedIndex = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const n = e.getCanGroup();
      return () => {
        n && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      if (typeof r == "number")
        return tn.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return tn.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Ht(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : tn[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
      var n, r;
      e.setGrouping(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.grouping) != null ? n : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, t) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
      if (e._groupingValuesCache.hasOwnProperty(n))
        return e._groupingValuesCache[n];
      const r = t.getColumn(n);
      return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, t, n, r) => {
    e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
      var o;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((o = n.subRows) != null && o.length);
    };
  }
};
function au(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const lu = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: oe("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = A((n) => [ut(t, n)], (n) => n.findIndex((r) => r.id === e.id), F(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = ut(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = ut(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = A(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
      let i = [];
      if (!(t != null && t.length))
        i = o;
      else {
        const s = [...t], a = [...o];
        for (; a.length && s.length; ) {
          const c = s.shift(), l = a.findIndex((u) => u.id === c);
          l > -1 && i.push(a.splice(l, 1)[0]);
        }
        i = [...i, ...a];
      }
      return au(i, n, r);
    }, F(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, nn = () => ({
  left: [],
  right: []
}), cu = {
  getInitialState: (e) => ({
    columnPinning: nn(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: oe("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      t.setColumnPinning((o) => {
        var i, s;
        if (n === "right") {
          var a, c;
          return {
            left: ((a = o == null ? void 0 : o.left) != null ? a : []).filter((g) => !(r != null && r.includes(g))),
            right: [...((c = o == null ? void 0 : o.right) != null ? c : []).filter((g) => !(r != null && r.includes(g))), ...r]
          };
        }
        if (n === "left") {
          var l, u;
          return {
            left: [...((l = o == null ? void 0 : o.left) != null ? l : []).filter((g) => !(r != null && r.includes(g))), ...r],
            right: ((u = o == null ? void 0 : o.right) != null ? u : []).filter((g) => !(r != null && r.includes(g)))
          };
        }
        return {
          left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((g) => !(r != null && r.includes(g))),
          right: ((s = o == null ? void 0 : o.right) != null ? s : []).filter((g) => !(r != null && r.includes(g)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var o, i, s;
      return ((o = r.columnDef.enablePinning) != null ? o : !0) && ((i = (s = t.options.enableColumnPinning) != null ? s : t.options.enablePinning) != null ? i : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((a) => a.id), {
        left: r,
        right: o
      } = t.getState().columnPinning, i = n.some((a) => r == null ? void 0 : r.includes(a)), s = n.some((a) => o == null ? void 0 : o.includes(a));
      return i ? "left" : s ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      return o ? (n = (r = t.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, t) => {
    e.getCenterVisibleCells = A(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return n.filter((s) => !i.includes(s.column.id));
    }, F(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = A(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), F(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = A(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), F(t.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? nn() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : nn());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = A(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), F(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = A(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), F(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = A(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, F(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function uu(e) {
  return e || (typeof document < "u" ? document : null);
}
const Rt = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, rn = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), du = {
  getDefaultColumnDef: () => Rt,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: rn(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: oe("columnSizing", e),
    onColumnSizingInfoChange: oe("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Rt.minSize, (r = i ?? e.columnDef.size) != null ? r : Rt.size), (o = e.columnDef.maxSize) != null ? o : Rt.maxSize);
    }, e.getStart = A((n) => [n, ut(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), F(t.options, "debugColumns", "getStart")), e.getAfter = A((n) => [n, ut(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), F(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
      t.setColumnSizing((n) => {
        let {
          [e.id]: r,
          ...o
        } = n;
        return o;
      });
    }, e.getCanResize = () => {
      var n, r;
      return ((n = e.columnDef.enableResizing) != null ? n : !0) && ((r = t.options.enableColumnResizing) != null ? r : !0);
    }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, t) => {
    e.getSize = () => {
      let n = 0;
      const r = (o) => {
        if (o.subHeaders.length)
          o.subHeaders.forEach(r);
        else {
          var i;
          n += (i = o.column.getSize()) != null ? i : 0;
        }
      };
      return r(e), n;
    }, e.getStart = () => {
      if (e.index > 0) {
        const n = e.headerGroup.headers[e.index - 1];
        return n.getStart() + n.getSize();
      }
      return 0;
    }, e.getResizeHandler = (n) => {
      const r = t.getColumn(e.column.id), o = r == null ? void 0 : r.getCanResize();
      return (i) => {
        if (!r || !o || (i.persist == null || i.persist(), on(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), a = e ? e.getLeafHeaders().map((v) => [v.column.id, v.column.getSize()]) : [[r.id, r.getSize()]], c = on(i) ? Math.round(i.touches[0].clientX) : i.clientX, l = {}, u = (v, w) => {
          typeof w == "number" && (t.setColumnSizingInfo((y) => {
            var C, S;
            const E = t.options.columnResizeDirection === "rtl" ? -1 : 1, R = (w - ((C = y == null ? void 0 : y.startOffset) != null ? C : 0)) * E, _ = Math.max(R / ((S = y == null ? void 0 : y.startSize) != null ? S : 0), -0.999999);
            return y.columnSizingStart.forEach((O) => {
              let [$, k] = O;
              l[$] = Math.round(Math.max(k + k * _, 0) * 100) / 100;
            }), {
              ...y,
              deltaOffset: R,
              deltaPercentage: _
            };
          }), (t.options.columnResizeMode === "onChange" || v === "end") && t.setColumnSizing((y) => ({
            ...y,
            ...l
          })));
        }, g = (v) => u("move", v), d = (v) => {
          u("end", v), t.setColumnSizingInfo((w) => ({
            ...w,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, f = uu(n), h = {
          moveHandler: (v) => g(v.clientX),
          upHandler: (v) => {
            f == null || f.removeEventListener("mousemove", h.moveHandler), f == null || f.removeEventListener("mouseup", h.upHandler), d(v.clientX);
          }
        }, p = {
          moveHandler: (v) => (v.cancelable && (v.preventDefault(), v.stopPropagation()), g(v.touches[0].clientX), !1),
          upHandler: (v) => {
            var w;
            f == null || f.removeEventListener("touchmove", p.moveHandler), f == null || f.removeEventListener("touchend", p.upHandler), v.cancelable && (v.preventDefault(), v.stopPropagation()), d((w = v.touches[0]) == null ? void 0 : w.clientX);
          }
        }, b = fu() ? {
          passive: !1
        } : !1;
        on(i) ? (f == null || f.addEventListener("touchmove", p.moveHandler, b), f == null || f.addEventListener("touchend", p.upHandler, b)) : (f == null || f.addEventListener("mousemove", h.moveHandler, b), f == null || f.addEventListener("mouseup", h.upHandler, b)), t.setColumnSizingInfo((v) => ({
          ...v,
          startOffset: c,
          startSize: s,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: a,
          isResizingColumn: r.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
      var n;
      e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
    }, e.resetHeaderSizeInfo = (t) => {
      var n;
      e.setColumnSizingInfo(t ? rn() : (n = e.initialState.columnSizingInfo) != null ? n : rn());
    }, e.getTotalSize = () => {
      var t, n;
      return (t = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getLeftTotalSize = () => {
      var t, n;
      return (t = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getCenterTotalSize = () => {
      var t, n;
      return (t = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getRightTotalSize = () => {
      var t, n;
      return (t = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    };
  }
};
let Et = null;
function fu() {
  if (typeof Et == "boolean") return Et;
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    }, n = () => {
    };
    window.addEventListener("test", n, t), window.removeEventListener("test", n);
  } catch {
    e = !1;
  }
  return Et = e, Et;
}
function on(e) {
  return e.type === "touchstart";
}
const gu = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: oe("columnVisibility", e)
  }),
  createColumn: (e, t) => {
    e.toggleVisibility = (n) => {
      e.getCanHide() && t.setColumnVisibility((r) => ({
        ...r,
        [e.id]: n ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var n, r;
      const o = e.columns;
      return (n = o.length ? o.some((i) => i.getIsVisible()) : (r = t.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, r;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((r = t.options.enableHiding) != null ? r : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, t) => {
    e._getAllVisibleCells = A(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), F(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = A(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], F(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, r) => A(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), F(e.options, "debugColumns", n));
    e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var r;
      e.setColumnVisibility(n ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var r;
      n = (r = n) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, i) => ({
        ...o,
        [i.id]: n || !(i.getCanHide != null && i.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var r;
      e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
    };
  }
};
function ut(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const pu = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, mu = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: oe("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (t) => {
      var n;
      const r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
      return typeof r == "string" || typeof r == "number";
    }
  }),
  createColumn: (e, t) => {
    e.getCanGlobalFilter = () => {
      var n, r, o, i;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((r = t.options.enableGlobalFilter) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && ((i = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? i : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => Se.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return Ht(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : Se[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, hu = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: oe("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetExpanded = () => {
      var r, o;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetExpanded) != null ? r : !e.options.manualExpanding) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetExpanded(), n = !1;
        });
      }
    }, e.setExpanded = (r) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(r), e.toggleAllRowsExpanded = (r) => {
      r ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (r) => {
      var o, i;
      e.setExpanded(r ? {} : (o = (i = e.initialState) == null ? void 0 : i.expanded) != null ? o : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (r) => {
      r.persist == null || r.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const r = e.getState().expanded;
      return r === !0 || Object.values(r).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const r = e.getState().expanded;
      return typeof r == "boolean" ? r === !0 : !(!Object.keys(r).length || e.getRowModel().flatRows.some((o) => !o.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let r = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
        const s = i.split(".");
        r = Math.max(r, s.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, t) => {
    e.toggleExpanded = (n) => {
      t.setExpanded((r) => {
        var o;
        const i = r === !0 ? !0 : !!(r != null && r[e.id]);
        let s = {};
        if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((a) => {
          s[a] = !0;
        }) : s = r, n = (o = n) != null ? o : !i, !i && n)
          return {
            ...s,
            [e.id]: !0
          };
        if (i && !n) {
          const {
            [e.id]: a,
            ...c
          } = s;
          return c;
        }
        return r;
      });
    }, e.getIsExpanded = () => {
      var n;
      const r = t.getState().expanded;
      return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? n : r === !0 || r != null && r[e.id]);
    }, e.getCanExpand = () => {
      var n, r, o;
      return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? n : ((r = t.options.enableExpanding) != null ? r : !0) && !!((o = e.subRows) != null && o.length);
    }, e.getIsAllParentsExpanded = () => {
      let n = !0, r = e;
      for (; n && r.parentId; )
        r = t.getRow(r.parentId, !0), n = r.getIsExpanded();
      return n;
    }, e.getToggleExpandedHandler = () => {
      const n = e.getCanExpand();
      return () => {
        n && e.toggleExpanded();
      };
    };
  }
}, mn = 0, hn = 10, sn = () => ({
  pageIndex: mn,
  pageSize: hn
}), bu = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...sn(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: oe("pagination", e)
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetPageIndex = () => {
      var r, o;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetPageIndex) != null ? r : !e.options.manualPagination) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetPageIndex(), n = !1;
        });
      }
    }, e.setPagination = (r) => {
      const o = (i) => Fe(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? sn() : (o = e.initialState.pagination) != null ? o : sn());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = Fe(r, o.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? mn : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : mn);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? hn : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : hn);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, Fe(r, o.pageSize)), s = o.pageSize * o.pageIndex, a = Math.floor(s / i);
        return {
          ...o,
          pageIndex: a,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let s = Fe(r, (i = e.options.pageCount) != null ? i : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...o,
        pageCount: s
      };
    }), e.getPageOptions = A(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, s) => s)), o;
    }, F(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: r
      } = e.getState().pagination, o = e.getPageCount();
      return o === -1 ? !0 : o === 0 ? !1 : r < o - 1;
    }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var r;
      return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var r;
      return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
    };
  }
}, an = () => ({
  top: [],
  bottom: []
}), vu = {
  getInitialState: (e) => ({
    rowPinning: an(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: oe("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, r, o) => {
      const i = r ? e.getLeafRows().map((c) => {
        let {
          id: l
        } = c;
        return l;
      }) : [], s = o ? e.getParentRows().map((c) => {
        let {
          id: l
        } = c;
        return l;
      }) : [], a = /* @__PURE__ */ new Set([...s, e.id, ...i]);
      t.setRowPinning((c) => {
        var l, u;
        if (n === "bottom") {
          var g, d;
          return {
            top: ((g = c == null ? void 0 : c.top) != null ? g : []).filter((p) => !(a != null && a.has(p))),
            bottom: [...((d = c == null ? void 0 : c.bottom) != null ? d : []).filter((p) => !(a != null && a.has(p))), ...Array.from(a)]
          };
        }
        if (n === "top") {
          var f, h;
          return {
            top: [...((f = c == null ? void 0 : c.top) != null ? f : []).filter((p) => !(a != null && a.has(p))), ...Array.from(a)],
            bottom: ((h = c == null ? void 0 : c.bottom) != null ? h : []).filter((p) => !(a != null && a.has(p)))
          };
        }
        return {
          top: ((l = c == null ? void 0 : c.top) != null ? l : []).filter((p) => !(a != null && a.has(p))),
          bottom: ((u = c == null ? void 0 : c.bottom) != null ? u : []).filter((p) => !(a != null && a.has(p)))
        };
      });
    }, e.getCanPin = () => {
      var n;
      const {
        enableRowPinning: r,
        enablePinning: o
      } = t.options;
      return typeof r == "function" ? r(e) : (n = r ?? o) != null ? n : !0;
    }, e.getIsPinned = () => {
      const n = [e.id], {
        top: r,
        bottom: o
      } = t.getState().rowPinning, i = n.some((a) => r == null ? void 0 : r.includes(a)), s = n.some((a) => o == null ? void 0 : o.includes(a));
      return i ? "top" : s ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      if (!o) return -1;
      const i = (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((s) => {
        let {
          id: a
        } = s;
        return a;
      });
      return (r = i == null ? void 0 : i.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
      var n, r;
      return e.setRowPinning(t ? an() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : an());
    }, e.getIsSomeRowsPinned = (t) => {
      var n;
      const r = e.getState().rowPinning;
      if (!t) {
        var o, i;
        return !!((o = r.top) != null && o.length || (i = r.bottom) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e._getPinnedRows = (t, n, r) => {
      var o;
      return ((o = e.options.keepPinnedRows) == null || o ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (n ?? []).map((s) => {
          const a = e.getRow(s, !0);
          return a.getIsAllParentsExpanded() ? a : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (n ?? []).map((s) => t.find((a) => a.id === s))
      )).filter(Boolean).map((s) => ({
        ...s,
        position: r
      }));
    }, e.getTopRows = A(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), F(e.options, "debugRows", "getTopRows")), e.getBottomRows = A(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), F(e.options, "debugRows", "getBottomRows")), e.getCenterRows = A(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, F(e.options, "debugRows", "getCenterRows"));
  }
}, xu = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: oe("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => {
      var n;
      return e.setRowSelection(t ? {} : (n = e.initialState.rowSelection) != null ? n : {});
    }, e.toggleAllRowsSelected = (t) => {
      e.setRowSelection((n) => {
        t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
        const r = {
          ...n
        }, o = e.getPreGroupedRowModel().flatRows;
        return t ? o.forEach((i) => {
          i.getCanSelect() && (r[i.id] = !0);
        }) : o.forEach((i) => {
          delete r[i.id];
        }), r;
      });
    }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
      const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), o = {
        ...n
      };
      return e.getRowModel().rows.forEach((i) => {
        bn(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = A(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? ln(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, F(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = A(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? ln(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, F(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = A(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? ln(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, F(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const t = e.getFilteredRowModel().flatRows, {
        rowSelection: n
      } = e.getState();
      let r = !!(t.length && Object.keys(n).length);
      return r && t.some((o) => o.getCanSelect() && !n[o.id]) && (r = !1), r;
    }, e.getIsAllPageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows.filter((o) => o.getCanSelect()), {
        rowSelection: n
      } = e.getState();
      let r = !!t.length;
      return r && t.some((o) => !n[o.id]) && (r = !1), r;
    }, e.getIsSomeRowsSelected = () => {
      var t;
      const n = Object.keys((t = e.getState().rowSelection) != null ? t : {}).length;
      return n > 0 && n < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : t.filter((n) => n.getCanSelect()).some((n) => n.getIsSelected() || n.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (t) => {
      e.toggleAllRowsSelected(t.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
      e.toggleAllPageRowsSelected(t.target.checked);
    };
  },
  createRow: (e, t) => {
    e.toggleSelected = (n, r) => {
      const o = e.getIsSelected();
      t.setRowSelection((i) => {
        var s;
        if (n = typeof n < "u" ? n : !o, e.getCanSelect() && o === n)
          return i;
        const a = {
          ...i
        };
        return bn(a, e.id, n, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, t), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return kn(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return vn(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return vn(e, n) === "all";
    }, e.getCanSelect = () => {
      var n;
      return typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : (n = t.options.enableRowSelection) != null ? n : !0;
    }, e.getCanSelectSubRows = () => {
      var n;
      return typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : (n = t.options.enableSubRowSelection) != null ? n : !0;
    }, e.getCanMultiSelect = () => {
      var n;
      return typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : (n = t.options.enableMultiRowSelection) != null ? n : !0;
    }, e.getToggleSelectedHandler = () => {
      const n = e.getCanSelect();
      return (r) => {
        var o;
        n && e.toggleSelected((o = r.target) == null ? void 0 : o.checked);
      };
    };
  }
}, bn = (e, t, n, r, o) => {
  var i;
  const s = o.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), s.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((a) => bn(e, a.id, n, r, o));
};
function ln(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(s, a) {
    return s.map((c) => {
      var l;
      const u = kn(c, n);
      if (u && (r.push(c), o[c.id] = c), (l = c.subRows) != null && l.length && (c = {
        ...c,
        subRows: i(c.subRows)
      }), u)
        return c;
    }).filter(Boolean);
  };
  return {
    rows: i(t.rows),
    flatRows: r,
    rowsById: o
  };
}
function kn(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function vn(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (kn(s, t) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const a = vn(s, t);
      a === "all" ? i = !0 : (a === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const xn = /([0-9]+)/gm, wu = (e, t, n) => ci(Ve(e.getValue(n)).toLowerCase(), Ve(t.getValue(n)).toLowerCase()), yu = (e, t, n) => ci(Ve(e.getValue(n)), Ve(t.getValue(n))), Cu = (e, t, n) => Ln(Ve(e.getValue(n)).toLowerCase(), Ve(t.getValue(n)).toLowerCase()), Su = (e, t, n) => Ln(Ve(e.getValue(n)), Ve(t.getValue(n))), _u = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, Ru = (e, t, n) => Ln(e.getValue(n), t.getValue(n));
function Ln(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function Ve(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function ci(e, t) {
  const n = e.split(xn).filter(Boolean), r = t.split(xn).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(), i = r.shift(), s = parseInt(o, 10), a = parseInt(i, 10), c = [s, a].sort();
    if (isNaN(c[0])) {
      if (o > i)
        return 1;
      if (i > o)
        return -1;
      continue;
    }
    if (isNaN(c[1]))
      return isNaN(s) ? -1 : 1;
    if (s > a)
      return 1;
    if (a > s)
      return -1;
  }
  return n.length - r.length;
}
const ct = {
  alphanumeric: wu,
  alphanumericCaseSensitive: yu,
  text: Cu,
  textCaseSensitive: Su,
  datetime: _u,
  basic: Ru
}, Eu = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: oe("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return ct.datetime;
        if (typeof i == "string" && (r = !0, i.split(xn).length > 1))
          return ct.alphanumeric;
      }
      return r ? ct.text : ct.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Ht(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : ct[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((s) => {
        const a = s == null ? void 0 : s.find((f) => f.id === e.id), c = s == null ? void 0 : s.findIndex((f) => f.id === e.id);
        let l = [], u, g = i ? n : o === "desc";
        if (s != null && s.length && e.getCanMultiSort() && r ? a ? u = "toggle" : u = "add" : s != null && s.length && c !== s.length - 1 ? u = "replace" : a ? u = "toggle" : u = "replace", u === "toggle" && (i || o || (u = "remove")), u === "add") {
          var d;
          l = [...s, {
            id: e.id,
            desc: g
          }], l.splice(0, l.length - ((d = t.options.maxMultiSortColCount) != null ? d : Number.MAX_SAFE_INTEGER));
        } else u === "toggle" ? l = s.map((f) => f.id === e.id ? {
          ...f,
          desc: g
        } : f) : u === "remove" ? l = s.filter((f) => f.id !== e.id) : l = [{
          id: e.id,
          desc: g
        }];
        return l;
      });
    }, e.getFirstSortDir = () => {
      var n, r;
      return ((n = (r = e.columnDef.sortDescFirst) != null ? r : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var r, o;
      const i = e.getFirstSortDir(), s = e.getIsSorted();
      return s ? s !== i && ((r = t.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(n && (o = t.options.enableMultiRemove) != null) || o) ? !1 : s === "desc" ? "asc" : "desc" : i;
    }, e.getCanSort = () => {
      var n, r;
      return ((n = e.columnDef.enableSorting) != null ? n : !0) && ((r = t.options.enableSorting) != null ? r : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var n, r;
      return (n = (r = e.columnDef.enableMultiSort) != null ? r : t.options.enableMultiSort) != null ? n : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var n;
      const r = (n = t.getState().sorting) == null ? void 0 : n.find((o) => o.id === e.id);
      return r ? r.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var n, r;
      return (n = (r = t.getState().sorting) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
    }, e.clearSorting = () => {
      t.setSorting((n) => n != null && n.length ? n.filter((r) => r.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const n = e.getCanSort();
      return (r) => {
        n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
      var n, r;
      e.setSorting(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.sorting) != null ? n : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, Pu = [
  qc,
  gu,
  lu,
  cu,
  Zc,
  Yc,
  pu,
  //depends on ColumnFaceting
  mu,
  //depends on ColumnFiltering
  Eu,
  su,
  //depends on RowSorting
  hu,
  bu,
  vu,
  xu,
  du
];
function Mu(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...Pu, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((d, f) => Object.assign(d, f.getDefaultOptions == null ? void 0 : f.getDefaultOptions(o)), {}), s = (d) => o.options.mergeOptions ? o.options.mergeOptions(i, d) : {
    ...i,
    ...d
  };
  let c = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((d) => {
    var f;
    c = (f = d.getInitialState == null ? void 0 : d.getInitialState(c)) != null ? f : c;
  });
  const l = [];
  let u = !1;
  const g = {
    _features: r,
    options: {
      ...i,
      ...e
    },
    initialState: c,
    _queue: (d) => {
      l.push(d), u || (u = !0, Promise.resolve().then(() => {
        for (; l.length; )
          l.shift()();
        u = !1;
      }).catch((f) => setTimeout(() => {
        throw f;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (d) => {
      const f = Fe(d, o.options);
      o.options = s(f);
    },
    getState: () => o.options.state,
    setState: (d) => {
      o.options.onStateChange == null || o.options.onStateChange(d);
    },
    _getRowId: (d, f, h) => {
      var p;
      return (p = o.options.getRowId == null ? void 0 : o.options.getRowId(d, f, h)) != null ? p : `${h ? [h.id, f].join(".") : f}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (d, f) => {
      let h = (f ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[d];
      if (!h && (h = o.getCoreRowModel().rowsById[d], !h))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${d}`) : new Error();
      return h;
    },
    _getDefaultColumnDef: A(() => [o.options.defaultColumn], (d) => {
      var f;
      return d = (f = d) != null ? f : {}, {
        header: (h) => {
          const p = h.header.column.columnDef;
          return p.accessorKey ? p.accessorKey : p.accessorFn ? p.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (h) => {
          var p, b;
          return (p = (b = h.renderValue()) == null || b.toString == null ? void 0 : b.toString()) != null ? p : null;
        },
        ...o._features.reduce((h, p) => Object.assign(h, p.getDefaultColumnDef == null ? void 0 : p.getDefaultColumnDef()), {}),
        ...d
      };
    }, F(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: A(() => [o._getColumnDefs()], (d) => {
      const f = function(h, p, b) {
        return b === void 0 && (b = 0), h.map((v) => {
          const w = Uc(o, v, b, p), y = v;
          return w.columns = y.columns ? f(y.columns, w, b + 1) : [], w;
        });
      };
      return f(d);
    }, F(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: A(() => [o.getAllColumns()], (d) => d.flatMap((f) => f.getFlatColumns()), F(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: A(() => [o.getAllFlatColumns()], (d) => d.reduce((f, h) => (f[h.id] = h, f), {}), F(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: A(() => [o.getAllColumns(), o._getOrderColumnsFn()], (d, f) => {
      let h = d.flatMap((p) => p.getLeafColumns());
      return f(h);
    }, F(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (d) => {
      const f = o._getAllFlatColumnsById()[d];
      return process.env.NODE_ENV !== "production" && !f && console.error(`[Table] Column with id '${d}' does not exist.`), f;
    }
  };
  Object.assign(o, g);
  for (let d = 0; d < o._features.length; d++) {
    const f = o._features[d];
    f == null || f.createTable == null || f.createTable(o);
  }
  return o;
}
function Au() {
  return (e) => A(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const a = [];
      for (let l = 0; l < o.length; l++) {
        const u = Xc(e, e._getRowId(o[l], l, s), o[l], l, i, void 0, s == null ? void 0 : s.id);
        if (n.flatRows.push(u), n.rowsById[u.id] = u, a.push(u), e.options.getSubRows) {
          var c;
          u.originalSubRows = e.options.getSubRows(o[l], l), (c = u.originalSubRows) != null && c.length && (u.subRows = r(u.originalSubRows, i + 1, u));
        }
      }
      return a;
    };
    return n.rows = r(t), n;
  }, F(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function Vr(e, t) {
  return e ? Fu(e) ? /* @__PURE__ */ m.createElement(e, t) : e : null;
}
function Fu(e) {
  return Iu(e) || typeof e == "function" || $u(e);
}
function Iu(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function $u(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Ou(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = m.useState(() => ({
    current: Mu(t)
  })), [r, o] = m.useState(() => n.current.initialState);
  return n.current.setOptions((i) => ({
    ...i,
    ...e,
    state: {
      ...r,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (s) => {
      o(s), e.onStateChange == null || e.onStateChange(s);
    }
  })), n.current;
}
const Vt = m.forwardRef(
  ({
    checked: e,
    onChange: t,
    disabled: n,
    "aria-label": r,
    className: o,
    ...i
  }, s) => {
    const a = m.useRef(null);
    return m.useImperativeHandle(s, () => a.current), m.useEffect(() => {
      a.current && (a.current.indeterminate = e === "indeterminate");
    }, [e]), /* @__PURE__ */ x(
      "input",
      {
        ref: a,
        type: "checkbox",
        checked: e === !0,
        onChange: (c) => t == null ? void 0 : t(c.target.checked),
        disabled: n,
        "aria-label": r,
        className: G(
          "h-4 w-4 rounded border border-gray-300 text-black focus:ring-2 focus:ring-black focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          o
        ),
        ...i
      }
    );
  }
);
Vt.displayName = "Checkbox";
const Nu = X(
  "w-full border-collapse bg-white overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:z-[101] before:rounded-[8px] before:pointer-events-none before:border before:border-[#e3e3e3] before:mix-blend-luminosity before:shadow-[var(--p-shadow-bevel-100)]",
  {
    variants: {
      condensed: {
        true: "text-sm",
        false: ""
      },
      hasZebraStriping: {
        true: "[&_tbody_tr:nth-child(even)]:bg-gray-50",
        false: ""
      },
      loading: {
        true: "opacity-50 pointer-events-none",
        false: ""
      }
    },
    defaultVariants: {
      condensed: !1,
      hasZebraStriping: !1,
      loading: !1
    }
  }
), Pt = X(
  "border-b border-gray-100 overflow-hidden bg-[#f7fafc] p-2 text-left text-xs font-medium text-gray-500 capitalize",
  {
    variants: {
      alignment: {
        start: "text-left",
        center: "text-center",
        end: "text-right"
      },
      sortable: {
        true: "cursor-pointer hover:bg-gray-100",
        false: ""
      },
      sticky: {
        true: "sticky right-0 bg-gray-50",
        false: ""
      },
      isSelectionColumn: {
        true: "w-12",
        false: ""
      }
    },
    defaultVariants: {
      alignment: "start",
      sortable: !1,
      sticky: !1,
      isSelectionColumn: !1
    }
  }
), ui = X("p-2 whitespace-nowrap text-sm text-gray-900", {
  variants: {
    alignment: {
      start: "text-left",
      center: "text-center",
      end: "text-right"
    },
    sticky: {
      true: "sticky right-0 bg-white",
      false: ""
    },
    isSelectionColumn: {
      true: "w-12",
      false: ""
    }
  },
  defaultVariants: {
    alignment: "start",
    sticky: !1,
    isSelectionColumn: !1
  }
}), di = m.forwardRef(
  ({
    headings: e,
    promotedBulkActions: t,
    bulkActions: n,
    children: r,
    emptyState: o,
    sort: i,
    paginatedSelectAllActionText: s,
    paginatedSelectAllText: a,
    lastColumnSticky: c = !1,
    selectable: l = !0,
    sortable: u,
    defaultSortDirection: g = "descending",
    sortDirection: d,
    sortColumnIndex: f,
    onSort: h,
    sortToggleLabels: p,
    hasZebraStriping: b = !1,
    pagination: v,
    itemCount: w,
    selectedItemsCount: y,
    resourceName: C,
    loading: S = !1,
    hasMoreItems: E,
    condensed: R = !1,
    onSelectionChange: _,
    className: O,
    asChild: $ = !1,
    data: k,
    columns: M,
    ...D
  }, V) => {
    const B = m.useMemo(() => k && M ? Ou({
      data: k,
      columns: M,
      getCoreRowModel: Au()
    }) : null, [k, M]), L = () => B ? /* @__PURE__ */ x("thead", { children: B.getHeaderGroups().map((P) => /* @__PURE__ */ H("tr", { children: [
      l && /* @__PURE__ */ x(
        "th",
        {
          className: G(
            Pt({
              isSelectionColumn: !0
            })
          ),
          children: /* @__PURE__ */ x(
            Vt,
            {
              checked: y === "All" || y === w && w > 0 ? !0 : typeof y == "number" && y > 0 ? "indeterminate" : !1,
              onChange: (I) => {
                _ && _(
                  "page",
                  I,
                  void 0,
                  void 0
                );
              },
              "aria-label": `Select all ${(C == null ? void 0 : C.plural) || "items"}`
            }
          )
        }
      ),
      P.headers.map((I, z) => /* @__PURE__ */ x(
        "th",
        {
          className: G(
            Pt({
              alignment: "start",
              sortable: I.column.getCanSort(),
              sticky: c && z === P.headers.length - 1
            })
          ),
          children: I.isPlaceholder ? null : Vr(
            I.column.columnDef.header,
            I.getContext()
          )
        },
        I.id
      ))
    ] }, P.id)) }) : /* @__PURE__ */ x("thead", { children: /* @__PURE__ */ H("tr", { children: [
      l && /* @__PURE__ */ x(
        "th",
        {
          className: G(
            Pt({
              isSelectionColumn: !0
            })
          ),
          children: /* @__PURE__ */ x(
            Vt,
            {
              checked: y === "All" || y === w && w > 0 ? !0 : typeof y == "number" && y > 0 ? "indeterminate" : !1,
              onChange: (P) => {
                _ && _(
                  "page",
                  P,
                  void 0,
                  void 0
                );
              },
              "aria-label": `Select all ${(C == null ? void 0 : C.plural) || "items"}`
            }
          )
        }
      ),
      e.map((P, I) => /* @__PURE__ */ x(
        "th",
        {
          className: G(
            Pt({
              alignment: P.alignment || "start",
              sortable: (u == null ? void 0 : u[I]) || !1,
              sticky: c && I === e.length - 1
            })
          ),
          children: /* @__PURE__ */ x(Te, { variant: "bodyMd", fontWeight: "semibold", children: (typeof P.title == "string", P.title) })
        },
        I
      ))
    ] }) }), T = () => {
      var I;
      if (B)
        return /* @__PURE__ */ x("tbody", { children: (I = B.getRowModel().rows) != null && I.length ? B.getRowModel().rows.map((z) => /* @__PURE__ */ x("tr", { className: "hover:bg-gray-50", children: z.getVisibleCells().map((W, K) => /* @__PURE__ */ x(
          "td",
          {
            className: G(
              ui({
                alignment: "start",
                sticky: c && K === z.getVisibleCells().length - 1
              })
            ),
            children: Vr(
              W.column.columnDef.cell,
              W.getContext()
            )
          },
          W.id
        )) }, z.id)) : /* @__PURE__ */ x("tr", { children: /* @__PURE__ */ x(
          "td",
          {
            colSpan: (M == null ? void 0 : M.length) || e.length,
            className: "h-24 text-center",
            children: o || /* @__PURE__ */ x(Te, { variant: "bodyMd", tone: "subdued", children: "No results." })
          }
        ) }) });
      const P = m.Children.map(r, (z) => m.isValidElement(z) && z.type === Dn ? m.cloneElement(z, {
        selectable: l,
        onSelectionChange: _,
        resourceName: C,
        ...z.props
      }) : z);
      return /* @__PURE__ */ x("tbody", { children: P });
    };
    return w === 0 && o ? /* @__PURE__ */ x("div", { className: "flex items-center justify-center p-8", children: o }) : /* @__PURE__ */ H("div", { className: "overflow-x-auto", children: [
      /* @__PURE__ */ H(
        "table",
        {
          ref: V,
          className: G(
            Nu({
              condensed: R,
              hasZebraStriping: b,
              loading: S
            }),
            O
          ),
          ...D,
          children: [
            L(),
            T()
          ]
        }
      ),
      v && /* @__PURE__ */ x("div", { className: "", children: /* @__PURE__ */ x(ei, { type: "table", ...v }) })
    ] });
  }
);
di.displayName = "IndexTable";
const Dn = m.forwardRef(
  ({
    children: e,
    id: t,
    selected: n = !1,
    position: r,
    tone: o,
    disabled: i = !1,
    selectionRange: s,
    rowType: a = "data",
    accessibilityLabel: c,
    onClick: l,
    onNavigation: u,
    className: g,
    selectable: d = !0,
    onSelectionChange: f,
    resourceName: h,
    ...p
  }, b) => {
    const v = X(
      "hover:bg-[#f7fafc] transition-colors border-b border-[#e3e3e3] last:border-b-0 ",
      {
        variants: {
          selected: {
            true: "bg-blue-50",
            indeterminate: "bg-blue-25",
            false: ""
          },
          tone: {
            subdued: "opacity-60",
            success: "bg-green-50",
            warning: "bg-yellow-50",
            critical: "bg-red-50"
          },
          disabled: {
            true: "opacity-50 pointer-events-none",
            false: ""
          },
          rowType: {
            data: "",
            subheader: "bg-gray-100 font-semibold",
            child: "pl-8"
          }
        },
        defaultVariants: {
          selected: !1,
          disabled: !1,
          rowType: "data"
        }
      }
    );
    return /* @__PURE__ */ H(
      "tr",
      {
        ref: b,
        className: G(
          v({
            selected: n === !0 ? !0 : n === "indeterminate" ? "indeterminate" : !1,
            tone: o,
            disabled: i,
            rowType: a
          }),
          g
        ),
        onClick: l,
        ...p,
        children: [
          d && /* @__PURE__ */ x(
            "td",
            {
              className: G(
                ui({
                  isSelectionColumn: !0
                })
              ),
              children: /* @__PURE__ */ x(
                Vt,
                {
                  checked: n === !0,
                  onChange: (w) => {
                    f && f("single", w, t, r);
                  },
                  disabled: i,
                  "aria-label": c || `Select ${(h == null ? void 0 : h.singular) || "item"}`
                }
              )
            }
          ),
          e
        ]
      }
    );
  }
);
Dn.displayName = "IndexTable.Row";
const fi = m.forwardRef(
  ({
    as: e = "td",
    id: t,
    children: n,
    className: r,
    flush: o = !1,
    colSpan: i,
    scope: s,
    headers: a,
    ...c
  }, l) => {
    const u = X("border-gray-200 text-xs", {
      variants: {
        flush: {
          true: "",
          false: "p-2"
        }
      },
      defaultVariants: {
        flush: !1
      }
    });
    return /* @__PURE__ */ x(
      e,
      {
        ref: l,
        id: t,
        className: G(u({ flush: o }), r),
        colSpan: i,
        scope: s,
        headers: a,
        ...c,
        children: n
      }
    );
  }
);
fi.displayName = "IndexTable.Cell";
const Gu = (e, t) => {
  const [n, r] = m.useState(
    (t == null ? void 0 : t.selectedResources) || []
  ), [o, i] = m.useState(
    (t == null ? void 0 : t.allResourcesSelected) || !1
  ), s = m.useCallback(
    (c, l, u, g) => {
      if (c === "single" && typeof u == "string")
        r(
          l ? (d) => d.includes(u) ? d.filter((f) => f !== u) : [...d, u] : [u]
        );
      else if (c === "multiple" && typeof u == "object") {
        const { start: d, end: f } = u, h = e.slice(d, f + 1).map((p) => p.id);
        r(l ? (p) => [.../* @__PURE__ */ new Set([...p, ...h])] : h);
      } else if (c === "page")
        if (l) {
          const d = e.map((f) => f.id);
          r(d), i(!1);
        } else
          r([]), i(!1);
      else c === "all" && (i(l), l && r([]));
    },
    [e]
  ), a = m.useCallback(() => {
    r([]), i(!1);
  }, []);
  return {
    selectedResources: n,
    allResourcesSelected: o,
    handleSelectionChange: s,
    clearSelection: a
  };
}, gi = di;
gi.Row = Dn;
gi.Cell = fi;
export {
  Lc as Badge,
  $c as Bleed,
  ws as Box,
  ge as Button,
  eo as ButtonGroup,
  Fc as Card,
  Bc as IndexFilters,
  gi as IndexTable,
  kc as Page,
  ei as Pagination,
  Qo as Popover,
  Te as Text,
  to as TextField,
  Hu as badgeVariants,
  Ic as bleedVariants,
  xs as boxVariants,
  ps as buttonGroupVariants,
  fs as buttonVariants,
  G as cn,
  Tc as indexFiltersVariants,
  Nu as indexTableVariants,
  Dc as paginationVariants,
  Mc as polarisCardVariants,
  Oc as polarisPageVariants,
  _c as polarisPopoverVariants,
  Cs as textFieldVariants,
  ys as textVariants,
  Gu as useIndexResourceState,
  Bu as useSetIndexFiltersMode
};
//# sourceMappingURL=index.js.map
