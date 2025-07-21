import { jsx as C, jsxs as re } from "react/jsx-runtime";
import * as l from "react";
import Y, { useLayoutEffect as po, useState as bo } from "react";
import * as Xr from "react-dom";
import ho from "react-dom";
function pr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Yr(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const s = pr(o, t);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const s = n[o];
          typeof s == "function" ? s() : pr(e[o], null);
        }
      };
  };
}
function Ee(...e) {
  return l.useCallback(Yr(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
  const t = /* @__PURE__ */ vo(e), r = l.forwardRef((n, o) => {
    const { children: s, ...a } = n, i = l.Children.toArray(s), u = i.find(yo);
    if (u) {
      const c = u.props.children, d = i.map((f) => f === u ? l.Children.count(c) > 1 ? l.Children.only(null) : l.isValidElement(c) ? c.props.children : null : f);
      return /* @__PURE__ */ C(t, { ...a, ref: o, children: l.isValidElement(c) ? l.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ C(t, { ...a, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
var mo = /* @__PURE__ */ Vt("Slot");
// @__NO_SIDE_EFFECTS__
function vo(e) {
  const t = l.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if (l.isValidElement(o)) {
      const a = _o(o), i = wo(s, o.props);
      return o.type !== l.Fragment && (i.ref = n ? Yr(n, a) : a), l.cloneElement(o, i);
    }
    return l.Children.count(o) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var xo = Symbol("radix.slottable");
function yo(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === xo;
}
function wo(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...i) => {
      const u = s(...i);
      return o(...i), u;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function _o(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Kr(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Kr(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Zr() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Kr(e)) && (n && (n += " "), n += t);
  return n;
}
const br = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, hr = Zr, Re = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return hr(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((c) => {
    const d = r == null ? void 0 : r[c], f = s == null ? void 0 : s[c];
    if (d === null) return null;
    const p = br(d) || br(f);
    return o[c][p];
  }), i = r && Object.entries(r).reduce((c, d) => {
    let [f, p] = d;
    return p === void 0 || (c[f] = p), c;
  }, {}), u = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, d) => {
    let { class: f, className: p, ...b } = d;
    return Object.entries(b).every((m) => {
      let [g, h] = m;
      return Array.isArray(h) ? h.includes({
        ...s,
        ...i
      }[g]) : {
        ...s,
        ...i
      }[g] === h;
    }) ? [
      ...c,
      f,
      p
    ] : c;
  }, []);
  return hr(e, a, u, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
var qr = function(t) {
  return /* @__PURE__ */ Y.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ Y.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
qr.displayName = "CheckIcon";
var Qr = function(t) {
  return /* @__PURE__ */ Y.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ Y.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
Qr.displayName = "ChevronDownIcon";
var Jr = function(t) {
  return /* @__PURE__ */ Y.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ Y.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
Jr.displayName = "ChevronUpIcon";
var en = function(t) {
  return /* @__PURE__ */ Y.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ Y.createElement("path", {
    d: "M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"
  }), /* @__PURE__ */ Y.createElement("path", {
    d: "M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"
  }));
};
en.displayName = "RefreshIcon";
var tn = function(t) {
  return /* @__PURE__ */ Y.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ Y.createElement("path", {
    d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
  }), /* @__PURE__ */ Y.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
tn.displayName = "XCircleIcon";
const jt = "-", Co = (e) => {
  const t = So(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(jt);
      return i[0] === "" && i.length !== 1 && i.shift(), rn(i, t) || Eo(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const u = r[a] || [];
      return i && n[a] ? [...u, ...n[a]] : u;
    }
  };
}, rn = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? rn(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(jt);
  return (a = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : a.classGroupId;
}, mr = /^\[(.+)\]$/, Eo = (e) => {
  if (mr.test(e)) {
    const t = mr.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, So = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Po(Object.entries(e.classGroups), r).forEach(([s, a]) => {
    Dt(a, n, s, t);
  }), n;
}, Dt = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : vr(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Ao(o)) {
        Dt(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      Dt(a, vr(t, s), r, n);
    });
  });
}, vr = (e, t) => {
  let r = e;
  return t.split(jt).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Ao = (e) => e.isThemeGetter, Po = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([a, i]) => [t + a, i])) : s);
  return [r, o];
}) : e, Ro = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (s, a) => {
    r.set(s, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = r.get(s);
      if (a !== void 0)
        return a;
      if ((a = n.get(s)) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      r.has(s) ? r.set(s, a) : o(s, a);
    }
  };
}, nn = "!", Oo = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], s = t.length, a = (i) => {
    const u = [];
    let c = 0, d = 0, f;
    for (let h = 0; h < i.length; h++) {
      let v = i[h];
      if (c === 0) {
        if (v === o && (n || i.slice(h, h + s) === t)) {
          u.push(i.slice(d, h)), d = h + s;
          continue;
        }
        if (v === "/") {
          f = h;
          continue;
        }
      }
      v === "[" ? c++ : v === "]" && c--;
    }
    const p = u.length === 0 ? i : i.substring(d), b = p.startsWith(nn), m = b ? p.substring(1) : p, g = f && f > d ? f - d : void 0;
    return {
      modifiers: u,
      hasImportantModifier: b,
      baseClassName: m,
      maybePostfixModifierPosition: g
    };
  };
  return r ? (i) => r({
    className: i,
    parseClassName: a
  }) : a;
}, No = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, ko = (e) => ({
  cache: Ro(e.cacheSize),
  parseClassName: Oo(e),
  ...Co(e)
}), Mo = /\s+/, To = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, s = [], a = e.trim().split(Mo);
  let i = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const c = a[u], {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: p,
      maybePostfixModifierPosition: b
    } = r(c);
    let m = !!b, g = n(m ? p.substring(0, b) : p);
    if (!g) {
      if (!m) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = n(p), !g) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      m = !1;
    }
    const h = No(d).join(":"), v = f ? h + nn : h, x = v + g;
    if (s.includes(x))
      continue;
    s.push(x);
    const w = o(g, m);
    for (let y = 0; y < w.length; ++y) {
      const _ = w[y];
      s.push(v + _);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Lo() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = on(t)) && (n && (n += " "), n += r);
  return n;
}
const on = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = on(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Io(e, ...t) {
  let r, n, o, s = a;
  function a(u) {
    const c = t.reduce((d, f) => f(d), e());
    return r = ko(c), n = r.cache.get, o = r.cache.set, s = i, i(u);
  }
  function i(u) {
    const c = n(u);
    if (c)
      return c;
    const d = To(u, r);
    return o(u, d), d;
  }
  return function() {
    return s(Lo.apply(null, arguments));
  };
}
const B = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, sn = /^\[(?:([a-z-]+):)?(.+)\]$/i, Do = /^\d+\/\d+$/, Fo = /* @__PURE__ */ new Set(["px", "full", "screen"]), Bo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $o = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Wo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, zo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Vo = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, fe = (e) => De(e) || Fo.has(e) || Do.test(e), he = (e) => Ve(e, "length", Zo), De = (e) => !!e && !Number.isNaN(Number(e)), At = (e) => Ve(e, "number", De), Ze = (e) => !!e && Number.isInteger(Number(e)), jo = (e) => e.endsWith("%") && De(e.slice(0, -1)), O = (e) => sn.test(e), me = (e) => Bo.test(e), Ho = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Uo = (e) => Ve(e, Ho, an), Go = (e) => Ve(e, "position", an), Xo = /* @__PURE__ */ new Set(["image", "url"]), Yo = (e) => Ve(e, Xo, Qo), Ko = (e) => Ve(e, "", qo), qe = () => !0, Ve = (e, t, r) => {
  const n = sn.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Zo = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  $o.test(e) && !Wo.test(e)
), an = () => !1, qo = (e) => zo.test(e), Qo = (e) => Vo.test(e), Jo = () => {
  const e = B("colors"), t = B("spacing"), r = B("blur"), n = B("brightness"), o = B("borderColor"), s = B("borderRadius"), a = B("borderSpacing"), i = B("borderWidth"), u = B("contrast"), c = B("grayscale"), d = B("hueRotate"), f = B("invert"), p = B("gap"), b = B("gradientColorStops"), m = B("gradientColorStopPositions"), g = B("inset"), h = B("margin"), v = B("opacity"), x = B("padding"), w = B("saturate"), y = B("scale"), _ = B("sepia"), S = B("skew"), E = B("space"), R = B("translate"), M = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", O, t], A = () => [O, t], L = () => ["", fe, he], k = () => ["auto", De, O], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], T = () => ["solid", "dashed", "dotted", "double", "none"], I = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], F = () => ["", "0", O], j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], z = () => [De, O];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [qe],
      spacing: [fe, he],
      blur: ["none", "", me, O],
      brightness: z(),
      borderColor: [e],
      borderRadius: ["none", "", "full", me, O],
      borderSpacing: A(),
      borderWidth: L(),
      contrast: z(),
      grayscale: F(),
      hueRotate: z(),
      invert: F(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [jo, he],
      inset: D(),
      margin: D(),
      opacity: z(),
      padding: A(),
      saturate: z(),
      scale: z(),
      sepia: F(),
      skew: z(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", O]
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
        columns: [me]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": j()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": j()
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
        object: [...W(), O]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
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
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
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
        z: ["auto", Ze, O]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: D()
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
        flex: ["1", "auto", "initial", "none", O]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: F()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: F()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ze, O]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [qe]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ze, O]
        }, O]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": k()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": k()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [qe]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ze, O]
        }, O]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": k()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": k()
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
        "auto-cols": ["auto", "min", "max", "fr", O]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", O]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
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
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [h]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [h]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [h]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [h]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [h]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [h]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [h]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [h]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [h]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [E]
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
        "space-y": [E]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", O, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [O, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [O, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [me]
        }, me]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [O, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [O, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", me, he]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", At]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [qe]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", O]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", De, At]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", fe, O]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", O]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", O]
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
        decoration: [...T(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", fe, he]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", fe, O]
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
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O]
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
        content: ["none", O]
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
        bg: [...W(), Go]
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
        bg: ["auto", "cover", "contain", Uo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Yo]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
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
        border: [...T(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
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
        "divide-y": [i]
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
        divide: T()
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
        outline: ["", ...T()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [fe, O]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [fe, he]
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
        ring: L()
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
        "ring-offset": [fe, he]
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
        shadow: ["", "inner", "none", me, Ko]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [qe]
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
        "mix-blend": [...I(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": I()
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
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", me, O]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [_]
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
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [u]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
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
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [_]
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
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", O]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: z()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", O]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: z()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", O]
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
        scale: [y]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [y]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [y]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ze, O]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [R]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [R]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [S]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [S]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", O]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O]
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
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
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
        "will-change": ["auto", "scroll", "contents", "transform", O]
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
        stroke: [fe, he, At]
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
}, es = /* @__PURE__ */ Io(Jo);
function ye(...e) {
  return es(Zr(e));
}
const ts = Re(
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
), rs = (e) => e ? e === !0 || e === "down" ? /* @__PURE__ */ C(Qr, { className: "size-4" }) : e === "up" ? /* @__PURE__ */ C(Jr, { className: "size-4" }) : e === "select" ? /* @__PURE__ */ C(qr, { className: "size-4" }) : null : null, xr = () => /* @__PURE__ */ C(en, { className: "size-4 animate-spin" }), ns = l.forwardRef(
  ({
    children: e,
    size: t = "medium",
    textAlign: r = "center",
    fullWidth: n = !1,
    disclosure: o,
    removeUnderline: s,
    icon: a,
    dataPrimaryLink: i,
    tone: u = "default",
    variant: c = "default",
    id: d,
    url: f,
    external: p,
    target: b,
    download: m,
    submit: g,
    disabled: h,
    loading: v,
    pressed: x = !1,
    accessibilityLabel: w,
    role: y,
    ariaControls: _,
    ariaExpanded: S,
    ariaDescribedBy: E,
    ariaChecked: R,
    onClick: M,
    onFocus: N,
    onBlur: D,
    onKeyPress: A,
    onKeyUp: L,
    onKeyDown: k,
    onMouseEnter: W,
    onTouchStart: T,
    onPointerDown: I,
    className: P,
    asChild: F = !1,
    ...j
  }, z) => {
    const ee = !!f, ce = F ? mo : ee ? "a" : "button", U = v, le = h || U, K = rs(o), H = ye(
      ts({
        variant: c,
        size: t,
        tone: u === "critical" ? "critical" : u === "success" ? "success" : "default",
        textAlign: r,
        fullWidth: n,
        pressed: x
      }),
      // Handle underline removal for plain variants
      s && (c === "plain" || c === "monochromePlain") && "no-underline hover:no-underline",
      P
    ), te = {
      id: d,
      className: H,
      disabled: le,
      "aria-label": w,
      "aria-controls": _,
      "aria-expanded": S,
      "aria-describedby": E,
      "aria-checked": R,
      "aria-pressed": x,
      "data-primary-link": i,
      role: y,
      onClick: le ? void 0 : M,
      onFocus: N,
      onBlur: D,
      onKeyPress: A,
      onKeyUp: L,
      onKeyDown: k,
      onMouseEnter: W,
      onTouchStart: T,
      onPointerDown: I,
      ref: z,
      ...j
    };
    return ee ? /* @__PURE__ */ re(
      ce,
      {
        ...te,
        href: f,
        target: p ? "_blank" : b,
        rel: p ? "noopener noreferrer" : void 0,
        download: m,
        children: [
          a && !U && /* @__PURE__ */ C("span", { className: "inline-flex shrink-0", children: a }),
          U && /* @__PURE__ */ C(xr, {}),
          e && /* @__PURE__ */ C("span", { className: "inline-flex", children: e }),
          K && !U && /* @__PURE__ */ C("span", { className: "inline-flex shrink-0", children: K })
        ]
      }
    ) : /* @__PURE__ */ re(ce, { ...te, type: g ? "submit" : "button", children: [
      a && !U && /* @__PURE__ */ C("span", { className: "inline-flex shrink-0", children: a }),
      U && /* @__PURE__ */ C(xr, {}),
      e && /* @__PURE__ */ C("span", { className: "inline-flex", children: e }),
      K && !U && /* @__PURE__ */ C("span", { className: "inline-flex shrink-0", children: K })
    ] });
  }
);
ns.displayName = "Button";
const os = Re("flex items-center", {
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
}), ss = l.forwardRef(
  ({
    children: e,
    gap: t = "tight",
    variant: r,
    fullWidth: n = !1,
    connectedTop: o = !1,
    noWrap: s = !1,
    className: a,
    ...i
  }, u) => {
    const c = ye(
      os({
        gap: r === "segmented" ? void 0 : t,
        variant: r,
        fullWidth: n,
        connectedTop: o,
        noWrap: s
      }),
      a
    );
    return /* @__PURE__ */ C("div", { className: c, ref: u, ...i, children: e });
  }
);
ss.displayName = "ButtonGroup";
const is = (e) => e && {
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
}[e] || "", yr = (e) => e ? e === "transparent" ? "border-transparent" : {
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
}[e] || "" : "", as = (e) => e && {
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
}[e] || "", wr = (e) => e && {
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
}[e] || "", cs = (e) => e && {
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
}[e] || "", _r = (e) => e && {
  0: "border-0",
  "0165": "border-[0.66px]",
  "025": "border",
  "050": "border-2",
  100: "border-4"
}[e] || "", ls = (e) => e && {
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
}[e] || "", q = (e, t = "p") => {
  if (!e) return "";
  if (typeof e == "string") {
    const n = wr(e);
    return n ? `${t}-${n}` : "";
  }
  const r = [];
  return Object.entries(e).forEach(([n, o]) => {
    const s = wr(o);
    if (s) {
      const a = n === "xs" ? "" : `${n}:`;
      r.push(`${a}${t}-${s}`);
    }
  }), r.join(" ");
}, nt = (e, t) => {
  const n = {
    0: "0",
    "0165": "[0.66px]",
    "025": "",
    "050": "2",
    100: "4"
  }[e];
  return n ? `border-${t}-${n}` : `border-${t}`;
}, ot = (e, t) => {
  const n = {
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
  return n ? `rounded-${t}-${n}` : `rounded-${t}`;
}, us = Re("", {
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
}), ds = l.forwardRef(
  ({
    children: e,
    as: t = "div",
    background: r,
    borderColor: n,
    borderStyle: o,
    borderRadius: s,
    borderEndStartRadius: a,
    borderEndEndRadius: i,
    borderStartStartRadius: u,
    borderStartEndRadius: c,
    borderWidth: d,
    borderBlockStartWidth: f,
    borderBlockEndWidth: p,
    borderInlineStartWidth: b,
    borderInlineEndWidth: m,
    color: g,
    id: h,
    minHeight: v,
    minWidth: x,
    maxWidth: w,
    overflowX: y,
    overflowY: _,
    padding: S,
    paddingBlock: E,
    paddingBlockStart: R,
    paddingBlockEnd: M,
    paddingInline: N,
    paddingInlineStart: D,
    paddingInlineEnd: A,
    role: L,
    shadow: k,
    tabIndex: W,
    width: T,
    position: I,
    insetBlockStart: P,
    insetBlockEnd: F,
    insetInlineStart: j,
    insetInlineEnd: z,
    opacity: ee,
    outlineColor: ce,
    outlineStyle: U,
    outlineWidth: le,
    printHidden: K = !1,
    visuallyHidden: H = !1,
    zIndex: te,
    className: Oe,
    ...Ne
  }, Ae) => {
    const ke = t, Z = ye(
      us({
        visuallyHidden: H,
        printHidden: K
      }),
      // Background
      is(r),
      // Border
      yr(n),
      o === "dashed" ? "border-dashed" : "border-solid",
      cs(s),
      _r(d),
      // Individual border widths
      f && nt(f, "t"),
      p && nt(p, "b"),
      b && nt(b, "l"),
      m && nt(m, "r"),
      // Individual border radius
      a && ot(a, "bl"),
      i && ot(i, "br"),
      u && ot(u, "tl"),
      c && ot(c, "tr"),
      // Text color
      as(g),
      // Overflow
      y && `overflow-x-${y}`,
      _ && `overflow-y-${_}`,
      // Padding
      q(S, "p"),
      q(E, "py"),
      q(R, "pt"),
      q(M, "pb"),
      q(N, "px"),
      q(D, "pl"),
      q(A, "pr"),
      // Shadow
      ls(k),
      // Position
      I && `${I}`,
      // Inset (positioning)
      q(P, "top"),
      q(F, "bottom"),
      q(j, "left"),
      q(z, "right"),
      // Outline
      ce && yr(ce).replace("border-", "outline-"),
      U === "dashed" ? "outline-dashed" : U === "solid" ? "outline-solid" : "",
      le && _r(le).replace("border-", "outline-"),
      Oe
    ), ue = {
      ...v && { minHeight: v },
      ...x && { minWidth: x },
      ...w && { maxWidth: w },
      ...T && { width: T },
      ...ee && { opacity: ee },
      ...te && { zIndex: te }
    };
    return /* @__PURE__ */ C(
      ke,
      {
        ref: Ae,
        className: Z,
        style: Object.keys(ue).length > 0 ? ue : void 0,
        id: h,
        role: L,
        tabIndex: W,
        ...Ne,
        children: e
      }
    );
  }
);
ds.displayName = "Box";
const fs = Re("", {
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
}), gs = l.forwardRef(
  ({
    children: e,
    as: t = "span",
    alignment: r,
    breakWord: n = !1,
    tone: o,
    fontWeight: s,
    id: a,
    numeric: i = !1,
    truncate: u = !1,
    variant: c = "bodyMd",
    visuallyHidden: d = !1,
    textDecorationLine: f,
    className: p,
    ...b
  }, m) => /* @__PURE__ */ C(
    t,
    {
      ref: m,
      id: a,
      className: ye(
        fs({
          variant: c,
          alignment: r,
          tone: o,
          fontWeight: (() => {
            if (s) return s;
            switch (c) {
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
          breakWord: n,
          truncate: u,
          numeric: i,
          visuallyHidden: d,
          textDecorationLine: f ? "line-through" : "none"
        }),
        p
      ),
      ...b,
      children: e
    }
  )
);
gs.displayName = "Text";
const ps = Re(
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
), bs = () => {
  const [e] = l.useState(
    () => Math.random().toString(36).substring(2, 11)
  );
  return e;
}, hs = (e) => {
  if (e)
    return typeof e == "number" ? e : 3;
}, ms = (e) => {
  if (e)
    return e || typeof e == "number" && e > 0 ? { "aria-multiline": !0 } : void 0;
}, Cr = (e) => `${e}Label`, Er = (e) => `${e}HelpText`, vs = l.forwardRef(
  ({
    prefix: e,
    suffix: t,
    verticalContent: r,
    placeholder: n,
    value: o = "",
    helpText: s,
    label: a,
    labelAction: i,
    labelHidden: u = !1,
    disabled: c = !1,
    clearButton: d = !1,
    readOnly: f = !1,
    autoFocus: p = !1,
    focused: b,
    multiline: m = !1,
    error: g,
    connectedRight: h,
    connectedLeft: v,
    type: x = "text",
    name: w,
    id: y,
    role: _,
    step: S,
    largeStep: E,
    autoComplete: R,
    max: M,
    maxLength: N,
    maxHeight: D,
    min: A,
    minLength: L,
    pattern: k,
    inputMode: W,
    spellCheck: T,
    ariaOwns: I,
    ariaControls: P,
    ariaExpanded: F,
    ariaActiveDescendant: j,
    ariaAutocomplete: z,
    showCharacterCount: ee = !1,
    align: ce = "left",
    requiredIndicator: U = !1,
    monospaced: le = !1,
    selectTextOnFocus: K = !1,
    suggestion: H,
    variant: te = "inherit",
    size: Oe = "medium",
    tone: Ne,
    autoSize: Ae = !1,
    loading: ke = !1,
    onClearButtonClick: Z,
    onChange: ue,
    onSpinnerChange: tr,
    onFocus: Ue,
    onBlur: Ge,
    className: Ct,
    ...Me
  }, Xe) => {
    const no = bs(), V = y ?? no, [oo, rr] = l.useState(!!b), Et = l.useRef(null), nr = l.useRef(null), or = l.useRef(null), rt = l.useCallback(() => m ? nr.current : Et.current, [m]);
    l.useEffect(() => {
      const $ = rt();
      !$ || b === void 0 || (b ? $.focus() : $.blur());
    }, [b, rt]), l.useEffect(() => {
      const $ = Et.current;
      !$ || !(x === "text" || x === "tel" || x === "search" || x === "url" || x === "password") || !H || $.setSelectionRange(o.length, H.length);
    }, [oo, o, x, H]);
    const St = H || o, so = x === "currency" ? "text" : x, io = ye(
      ps({
        size: Oe,
        variant: te,
        align: ce,
        tone: Ne,
        error: !!g,
        monospaced: le,
        multiline: !!m
      }),
      Ae && "w-auto min-w-0",
      Ct
    ), sr = l.useCallback(
      ($) => {
        ue && ue($.currentTarget.value, V);
      },
      [ue, V]
    ), ao = l.useCallback(
      ($) => {
        if (rr(!0), K && !H) {
          const de = rt();
          de == null || de.select();
        }
        Ue && Ue($);
      },
      [K, H, rt, Ue]
    ), co = l.useCallback(
      ($) => {
        var de;
        rr(!1), !((de = or.current) != null && de.contains($ == null ? void 0 : $.relatedTarget)) && Ge && Ge($);
      },
      [Ge]
    ), lo = l.useCallback(() => {
      Z && Z(V);
    }, [Z, V]), Ye = [];
    g && Ye.push(`${V}Error`), s && Ye.push(Er(V)), ee && Ye.push(`${V}-CharacterCounter`);
    const Ke = [];
    e && Ke.push(`${V}-Prefix`), t && Ke.push(`${V}-Suffix`), r && Ke.push(`${V}-VerticalContent`), Ke.unshift(Cr(V));
    let ir = null;
    if (ee) {
      const $ = St.length, de = N ? `${$}/${N}` : $;
      ir = /* @__PURE__ */ C(
        "div",
        {
          id: `${V}-CharacterCounter`,
          className: "text-xs text-muted-foreground mt-1",
          children: de
        }
      );
    }
    const ar = d && St !== "" ? /* @__PURE__ */ C(
      "button",
      {
        type: "button",
        className: "absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground focus:outline-hidden focus:ring-3 focus:ring-ring focus:ring-offset-2 rounded-sm",
        onClick: lo,
        tabIndex: -1,
        "aria-label": "Clear",
        children: /* @__PURE__ */ C(tn, { className: "h-4 w-4" })
      }
    ) : null, cr = e ? /* @__PURE__ */ C(
      "div",
      {
        id: `${V}-Prefix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-r border-input bg-muted/50",
        children: e
      }
    ) : null, lr = t ? /* @__PURE__ */ C(
      "div",
      {
        id: `${V}-Suffix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-l border-input bg-muted/50",
        children: t
      }
    ) : null, ur = ke ? /* @__PURE__ */ C("div", { className: "absolute right-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ C("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-foreground" }) }) : null, uo = u ? null : /* @__PURE__ */ re(
      "label",
      {
        id: Cr(V),
        htmlFor: V,
        className: ye(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          U && "after:content-['*'] after:ml-1 after:text-destructive"
        ),
        children: [
          a,
          i && /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              onClick: i.onAction,
              className: "ml-2 text-xs text-primary hover:underline focus:outline-hidden focus:underline",
              children: i.content
            }
          )
        ]
      }
    ), fo = s ? /* @__PURE__ */ C("div", { id: Er(V), className: "text-xs text-muted-foreground mt-1", children: s }) : null, go = g && typeof g != "boolean" ? /* @__PURE__ */ C(
      "div",
      {
        id: `${V}Error`,
        className: "text-xs text-destructive mt-1",
        role: "alert",
        children: g
      }
    ) : null, dr = r ? /* @__PURE__ */ C(
      "div",
      {
        id: `${V}-VerticalContent`,
        className: "text-sm text-muted-foreground mb-2",
        children: r
      }
    ) : null, fr = {
      ...D && { maxHeight: D }
    }, gr = l.createElement(m ? "textarea" : "input", {
      ref: l.useCallback(
        ($) => {
          m ? nr.current = $ : Et.current = $, typeof Xe == "function" ? Xe($) : Xe && (Xe.current = $);
        },
        [m, Xe]
      ),
      id: V,
      name: w,
      type: so,
      value: St,
      placeholder: n,
      disabled: c,
      readOnly: f,
      autoFocus: p,
      role: _,
      min: A,
      max: M,
      step: S,
      minLength: L,
      maxLength: N,
      pattern: k,
      inputMode: W,
      spellCheck: T,
      autoComplete: R,
      rows: hs(m),
      size: Ae ? 1 : void 0,
      style: Object.keys(fr).length > 0 ? fr : void 0,
      className: io,
      "aria-describedby": Ye.length ? Ye.join(" ") : void 0,
      "aria-labelledby": Ke.join(" "),
      "aria-invalid": !!g,
      "aria-owns": I,
      "aria-activedescendant": j,
      "aria-autocomplete": z,
      "aria-controls": P,
      "aria-expanded": F,
      "aria-required": U,
      ...ms(m),
      onChange: H ? void 0 : sr,
      onInput: H ? sr : void 0,
      onFocus: ao,
      onBlur: co,
      // Password manager disable attributes
      "data-1p-ignore": R === "off" || void 0,
      "data-lpignore": R === "off" || void 0,
      "data-form-type": R === "off" ? "other" : void 0,
      ...Me
    });
    return /* @__PURE__ */ re("div", { ref: or, className: "space-y-2", children: [
      uo,
      v || h ? /* @__PURE__ */ re("div", { className: "flex", children: [
        v,
        /* @__PURE__ */ re("div", { className: "flex-1 relative", children: [
          dr,
          /* @__PURE__ */ re("div", { className: "relative flex", children: [
            cr,
            gr,
            lr,
            ar,
            ur
          ] })
        ] }),
        h
      ] }) : /* @__PURE__ */ re("div", { className: "relative", children: [
        dr,
        /* @__PURE__ */ re("div", { className: "relative flex", children: [
          cr,
          gr,
          lr,
          ar,
          ur
        ] })
      ] }),
      go,
      fo,
      ir
    ] });
  }
);
vs.displayName = "TextField";
function xe(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function cn(e, t = []) {
  let r = [];
  function n(s, a) {
    const i = l.createContext(a), u = r.length;
    r = [...r, a];
    const c = (f) => {
      var v;
      const { scope: p, children: b, ...m } = f, g = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[u]) || i, h = l.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ C(g.Provider, { value: h, children: b });
    };
    c.displayName = s + "Provider";
    function d(f, p) {
      var g;
      const b = ((g = p == null ? void 0 : p[e]) == null ? void 0 : g[u]) || i, m = l.useContext(b);
      if (m) return m;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [c, d];
  }
  const o = () => {
    const s = r.map((a) => l.createContext(a));
    return function(i) {
      const u = (i == null ? void 0 : i[e]) || s;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: u } }),
        [i, u]
      );
    };
  };
  return o.scopeName = e, [n, xs(o, ...t)];
}
function xs(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = n.reduce((i, { useScope: u, scopeName: c }) => {
        const f = u(s)[`__scope${c}`];
        return { ...i, ...f };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var ys = [
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
], be = ys.reduce((e, t) => {
  const r = /* @__PURE__ */ Vt(`Primitive.${t}`), n = l.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, u = a ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ C(u, { ...i, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function ws(e, t) {
  e && Xr.flushSync(() => e.dispatchEvent(t));
}
function $e(e) {
  const t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e;
  }), l.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function _s(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $e(e);
  l.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Cs = "DismissableLayer", Ft = "dismissableLayer.update", Es = "dismissableLayer.pointerDownOutside", Ss = "dismissableLayer.focusOutside", Sr, ln = l.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), un = l.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...u
    } = e, c = l.useContext(ln), [d, f] = l.useState(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, b] = l.useState({}), m = Ee(t, (E) => f(E)), g = Array.from(c.layers), [h] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(h), x = d ? g.indexOf(d) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, y = x >= v, _ = Rs((E) => {
      const R = E.target, M = [...c.branches].some((N) => N.contains(R));
      !y || M || (o == null || o(E), a == null || a(E), E.defaultPrevented || i == null || i());
    }, p), S = Os((E) => {
      const R = E.target;
      [...c.branches].some((N) => N.contains(R)) || (s == null || s(E), a == null || a(E), E.defaultPrevented || i == null || i());
    }, p);
    return _s((E) => {
      x === c.layers.size - 1 && (n == null || n(E), !E.defaultPrevented && i && (E.preventDefault(), i()));
    }, p), l.useEffect(() => {
      if (d)
        return r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Sr = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), Ar(), () => {
          r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Sr);
        };
    }, [d, p, r, c]), l.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Ar());
    }, [d, c]), l.useEffect(() => {
      const E = () => b({});
      return document.addEventListener(Ft, E), () => document.removeEventListener(Ft, E);
    }, []), /* @__PURE__ */ C(
      be.div,
      {
        ...u,
        ref: m,
        style: {
          pointerEvents: w ? y ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: xe(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: xe(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: xe(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
un.displayName = Cs;
var As = "DismissableLayerBranch", Ps = l.forwardRef((e, t) => {
  const r = l.useContext(ln), n = l.useRef(null), o = Ee(t, n);
  return l.useEffect(() => {
    const s = n.current;
    if (s)
      return r.branches.add(s), () => {
        r.branches.delete(s);
      };
  }, [r.branches]), /* @__PURE__ */ C(be.div, { ...e, ref: o });
});
Ps.displayName = As;
function Rs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $e(e), n = l.useRef(!1), o = l.useRef(() => {
  });
  return l.useEffect(() => {
    const s = (i) => {
      if (i.target && !n.current) {
        let u = function() {
          dn(
            Es,
            r,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, { once: !0 })) : u();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Os(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $e(e), n = l.useRef(!1);
  return l.useEffect(() => {
    const o = (s) => {
      s.target && !n.current && dn(Ss, r, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Ar() {
  const e = new CustomEvent(Ft);
  document.dispatchEvent(e);
}
function dn(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? ws(o, s) : o.dispatchEvent(s);
}
var Pt = 0;
function Ns() {
  l.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Pr()), document.body.insertAdjacentElement("beforeend", e[1] ?? Pr()), Pt++, () => {
      Pt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Pt--;
    };
  }, []);
}
function Pr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Rt = "focusScope.autoFocusOnMount", Ot = "focusScope.autoFocusOnUnmount", Rr = { bubbles: !1, cancelable: !0 }, ks = "FocusScope", fn = l.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, u] = l.useState(null), c = $e(o), d = $e(s), f = l.useRef(null), p = Ee(t, (g) => u(g)), b = l.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  l.useEffect(() => {
    if (n) {
      let g = function(w) {
        if (b.paused || !i) return;
        const y = w.target;
        i.contains(y) ? f.current = y : ve(f.current, { select: !0 });
      }, h = function(w) {
        if (b.paused || !i) return;
        const y = w.relatedTarget;
        y !== null && (i.contains(y) || ve(f.current, { select: !0 }));
      }, v = function(w) {
        if (document.activeElement === document.body)
          for (const _ of w)
            _.removedNodes.length > 0 && ve(i);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", h);
      const x = new MutationObserver(v);
      return i && x.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", h), x.disconnect();
      };
    }
  }, [n, i, b.paused]), l.useEffect(() => {
    if (i) {
      Nr.add(b);
      const g = document.activeElement;
      if (!i.contains(g)) {
        const v = new CustomEvent(Rt, Rr);
        i.addEventListener(Rt, c), i.dispatchEvent(v), v.defaultPrevented || (Ms(Fs(gn(i)), { select: !0 }), document.activeElement === g && ve(i));
      }
      return () => {
        i.removeEventListener(Rt, c), setTimeout(() => {
          const v = new CustomEvent(Ot, Rr);
          i.addEventListener(Ot, d), i.dispatchEvent(v), v.defaultPrevented || ve(g ?? document.body, { select: !0 }), i.removeEventListener(Ot, d), Nr.remove(b);
        }, 0);
      };
    }
  }, [i, c, d, b]);
  const m = l.useCallback(
    (g) => {
      if (!r && !n || b.paused) return;
      const h = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, v = document.activeElement;
      if (h && v) {
        const x = g.currentTarget, [w, y] = Ts(x);
        w && y ? !g.shiftKey && v === y ? (g.preventDefault(), r && ve(w, { select: !0 })) : g.shiftKey && v === w && (g.preventDefault(), r && ve(y, { select: !0 })) : v === x && g.preventDefault();
      }
    },
    [r, n, b.paused]
  );
  return /* @__PURE__ */ C(be.div, { tabIndex: -1, ...a, ref: p, onKeyDown: m });
});
fn.displayName = ks;
function Ms(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (ve(n, { select: t }), document.activeElement !== r) return;
}
function Ts(e) {
  const t = gn(e), r = Or(t, e), n = Or(t.reverse(), e);
  return [r, n];
}
function gn(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Or(e, t) {
  for (const r of e)
    if (!Ls(r, { upTo: t })) return r;
}
function Ls(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Is(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ve(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && Is(e) && t && e.select();
  }
}
var Nr = Ds();
function Ds() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = kr(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = kr(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function kr(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function Fs(e) {
  return e.filter((t) => t.tagName !== "A");
}
var we = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {
}, Bs = l[" useId ".trim().toString()] || (() => {
}), $s = 0;
function Ws(e) {
  const [t, r] = l.useState(Bs());
  return we(() => {
    r((n) => n ?? String($s++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const zs = ["top", "right", "bottom", "left"], _e = Math.min, G = Math.max, pt = Math.round, st = Math.floor, se = (e) => ({
  x: e,
  y: e
}), Vs = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, js = {
  start: "end",
  end: "start"
};
function Bt(e, t, r) {
  return G(e, _e(t, r));
}
function ge(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pe(e) {
  return e.split("-")[0];
}
function je(e) {
  return e.split("-")[1];
}
function Ht(e) {
  return e === "x" ? "y" : "x";
}
function Ut(e) {
  return e === "y" ? "height" : "width";
}
const Hs = /* @__PURE__ */ new Set(["top", "bottom"]);
function oe(e) {
  return Hs.has(pe(e)) ? "y" : "x";
}
function Gt(e) {
  return Ht(oe(e));
}
function Us(e, t, r) {
  r === void 0 && (r = !1);
  const n = je(e), o = Gt(e), s = Ut(o);
  let a = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = bt(a)), [a, bt(a)];
}
function Gs(e) {
  const t = bt(e);
  return [$t(e), t, $t(t)];
}
function $t(e) {
  return e.replace(/start|end/g, (t) => js[t]);
}
const Mr = ["left", "right"], Tr = ["right", "left"], Xs = ["top", "bottom"], Ys = ["bottom", "top"];
function Ks(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Tr : Mr : t ? Mr : Tr;
    case "left":
    case "right":
      return t ? Xs : Ys;
    default:
      return [];
  }
}
function Zs(e, t, r, n) {
  const o = je(e);
  let s = Ks(pe(e), r === "start", n);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map($t)))), s;
}
function bt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Vs[t]);
}
function qs(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function pn(e) {
  return typeof e != "number" ? qs(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ht(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: o
  } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r
  };
}
function Lr(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const s = oe(t), a = Gt(t), i = Ut(a), u = pe(t), c = s === "y", d = n.x + n.width / 2 - o.width / 2, f = n.y + n.height / 2 - o.height / 2, p = n[i] / 2 - o[i] / 2;
  let b;
  switch (u) {
    case "top":
      b = {
        x: d,
        y: n.y - o.height
      };
      break;
    case "bottom":
      b = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      b = {
        x: n.x + n.width,
        y: f
      };
      break;
    case "left":
      b = {
        x: n.x - o.width,
        y: f
      };
      break;
    default:
      b = {
        x: n.x,
        y: n.y
      };
  }
  switch (je(t)) {
    case "start":
      b[a] -= p * (r && c ? -1 : 1);
      break;
    case "end":
      b[a] += p * (r && c ? -1 : 1);
      break;
  }
  return b;
}
const Qs = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = r, i = s.filter(Boolean), u = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let c = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = Lr(c, n, u), p = n, b = {}, m = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: h,
      fn: v
    } = i[g], {
      x,
      y: w,
      data: y,
      reset: _
    } = await v({
      x: d,
      y: f,
      initialPlacement: n,
      placement: p,
      strategy: o,
      middlewareData: b,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = x ?? d, f = w ?? f, b = {
      ...b,
      [h]: {
        ...b[h],
        ...y
      }
    }, _ && m <= 50 && (m++, typeof _ == "object" && (_.placement && (p = _.placement), _.rects && (c = _.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: d,
      y: f
    } = Lr(c, p, u)), g = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: b
  };
};
async function Qe(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: s,
    rects: a,
    elements: i,
    strategy: u
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: b = 0
  } = ge(t, e), m = pn(b), h = i[p ? f === "floating" ? "reference" : "floating" : f], v = ht(await s.getClippingRect({
    element: (r = await (s.isElement == null ? void 0 : s.isElement(h))) == null || r ? h : h.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: u
  })), x = f === "floating" ? {
    x: n,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), y = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = ht(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: x,
    offsetParent: w,
    strategy: u
  }) : x);
  return {
    top: (v.top - _.top + m.top) / y.y,
    bottom: (_.bottom - v.bottom + m.bottom) / y.y,
    left: (v.left - _.left + m.left) / y.x,
    right: (_.right - v.right + m.right) / y.x
  };
}
const Js = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: u
    } = t, {
      element: c,
      padding: d = 0
    } = ge(e, t) || {};
    if (c == null)
      return {};
    const f = pn(d), p = {
      x: r,
      y: n
    }, b = Gt(o), m = Ut(b), g = await a.getDimensions(c), h = b === "y", v = h ? "top" : "left", x = h ? "bottom" : "right", w = h ? "clientHeight" : "clientWidth", y = s.reference[m] + s.reference[b] - p[b] - s.floating[m], _ = p[b] - s.reference[b], S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let E = S ? S[w] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(S))) && (E = i.floating[w] || s.floating[m]);
    const R = y / 2 - _ / 2, M = E / 2 - g[m] / 2 - 1, N = _e(f[v], M), D = _e(f[x], M), A = N, L = E - g[m] - D, k = E / 2 - g[m] / 2 + R, W = Bt(A, k, L), T = !u.arrow && je(o) != null && k !== W && s.reference[m] / 2 - (k < A ? N : D) - g[m] / 2 < 0, I = T ? k < A ? k - A : k - L : 0;
    return {
      [b]: p[b] + I,
      data: {
        [b]: W,
        centerOffset: k - W - I,
        ...T && {
          alignmentOffset: I
        }
      },
      reset: T
    };
  }
}), ei = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        middlewareData: s,
        rects: a,
        initialPlacement: i,
        platform: u,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: b = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...h
      } = ge(e, t);
      if ((r = s.arrow) != null && r.alignmentOffset)
        return {};
      const v = pe(o), x = oe(i), w = pe(i) === i, y = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), _ = p || (w || !g ? [bt(i)] : Gs(i)), S = m !== "none";
      !p && S && _.push(...Zs(i, g, m, y));
      const E = [i, ..._], R = await Qe(t, h), M = [];
      let N = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (d && M.push(R[v]), f) {
        const k = Us(o, a, y);
        M.push(R[k[0]], R[k[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: M
      }], !M.every((k) => k <= 0)) {
        var D, A;
        const k = (((D = s.flip) == null ? void 0 : D.index) || 0) + 1, W = E[k];
        if (W && (!(f === "alignment" ? x !== oe(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        N.every((P) => P.overflows[0] > 0 && oe(P.placement) === x)))
          return {
            data: {
              index: k,
              overflows: N
            },
            reset: {
              placement: W
            }
          };
        let T = (A = N.filter((I) => I.overflows[0] <= 0).sort((I, P) => I.overflows[1] - P.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!T)
          switch (b) {
            case "bestFit": {
              var L;
              const I = (L = N.filter((P) => {
                if (S) {
                  const F = oe(P.placement);
                  return F === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((F) => F > 0).reduce((F, j) => F + j, 0)]).sort((P, F) => P[1] - F[1])[0]) == null ? void 0 : L[0];
              I && (T = I);
              break;
            }
            case "initialPlacement":
              T = i;
              break;
          }
        if (o !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
function Ir(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Dr(e) {
  return zs.some((t) => e[t] >= 0);
}
const ti = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = ge(e, t);
      switch (n) {
        case "referenceHidden": {
          const s = await Qe(t, {
            ...o,
            elementContext: "reference"
          }), a = Ir(s, r.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Dr(a)
            }
          };
        }
        case "escaped": {
          const s = await Qe(t, {
            ...o,
            altBoundary: !0
          }), a = Ir(s, r.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Dr(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, bn = /* @__PURE__ */ new Set(["left", "top"]);
async function ri(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), a = pe(r), i = je(r), u = oe(r) === "y", c = bn.has(a) ? -1 : 1, d = s && u ? -1 : 1, f = ge(t, e);
  let {
    mainAxis: p,
    crossAxis: b,
    alignmentAxis: m
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof m == "number" && (b = i === "end" ? m * -1 : m), u ? {
    x: b * d,
    y: p * c
  } : {
    x: p * c,
    y: b * d
  };
}
const ni = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: o,
        y: s,
        placement: a,
        middlewareData: i
      } = t, u = await ri(t, e);
      return a === ((r = i.offset) == null ? void 0 : r.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: o + u.x,
        y: s + u.y,
        data: {
          ...u,
          placement: a
        }
      };
    }
  };
}, oi = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: i = {
          fn: (h) => {
            let {
              x: v,
              y: x
            } = h;
            return {
              x: v,
              y: x
            };
          }
        },
        ...u
      } = ge(e, t), c = {
        x: r,
        y: n
      }, d = await Qe(t, u), f = oe(pe(o)), p = Ht(f);
      let b = c[p], m = c[f];
      if (s) {
        const h = p === "y" ? "top" : "left", v = p === "y" ? "bottom" : "right", x = b + d[h], w = b - d[v];
        b = Bt(x, b, w);
      }
      if (a) {
        const h = f === "y" ? "top" : "left", v = f === "y" ? "bottom" : "right", x = m + d[h], w = m - d[v];
        m = Bt(x, m, w);
      }
      const g = i.fn({
        ...t,
        [p]: b,
        [f]: m
      });
      return {
        ...g,
        data: {
          x: g.x - r,
          y: g.y - n,
          enabled: {
            [p]: s,
            [f]: a
          }
        }
      };
    }
  };
}, si = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: s,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: c = !0
      } = ge(e, t), d = {
        x: r,
        y: n
      }, f = oe(o), p = Ht(f);
      let b = d[p], m = d[f];
      const g = ge(i, t), h = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const w = p === "y" ? "height" : "width", y = s.reference[p] - s.floating[w] + h.mainAxis, _ = s.reference[p] + s.reference[w] - h.mainAxis;
        b < y ? b = y : b > _ && (b = _);
      }
      if (c) {
        var v, x;
        const w = p === "y" ? "width" : "height", y = bn.has(pe(o)), _ = s.reference[f] - s.floating[w] + (y && ((v = a.offset) == null ? void 0 : v[f]) || 0) + (y ? 0 : h.crossAxis), S = s.reference[f] + s.reference[w] + (y ? 0 : ((x = a.offset) == null ? void 0 : x[f]) || 0) - (y ? h.crossAxis : 0);
        m < _ ? m = _ : m > S && (m = S);
      }
      return {
        [p]: b,
        [f]: m
      };
    }
  };
}, ii = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        rects: s,
        platform: a,
        elements: i
      } = t, {
        apply: u = () => {
        },
        ...c
      } = ge(e, t), d = await Qe(t, c), f = pe(o), p = je(o), b = oe(o) === "y", {
        width: m,
        height: g
      } = s.floating;
      let h, v;
      f === "top" || f === "bottom" ? (h = f, v = p === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (v = f, h = p === "end" ? "top" : "bottom");
      const x = g - d.top - d.bottom, w = m - d.left - d.right, y = _e(g - d[h], x), _ = _e(m - d[v], w), S = !t.middlewareData.shift;
      let E = y, R = _;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (R = w), (n = t.middlewareData.shift) != null && n.enabled.y && (E = x), S && !p) {
        const N = G(d.left, 0), D = G(d.right, 0), A = G(d.top, 0), L = G(d.bottom, 0);
        b ? R = m - 2 * (N !== 0 || D !== 0 ? N + D : G(d.left, d.right)) : E = g - 2 * (A !== 0 || L !== 0 ? A + L : G(d.top, d.bottom));
      }
      await u({
        ...t,
        availableWidth: R,
        availableHeight: E
      });
      const M = await a.getDimensions(i.floating);
      return m !== M.width || g !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function vt() {
  return typeof window < "u";
}
function He(e) {
  return hn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function X(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ae(e) {
  var t;
  return (t = (hn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function hn(e) {
  return vt() ? e instanceof Node || e instanceof X(e).Node : !1;
}
function Q(e) {
  return vt() ? e instanceof Element || e instanceof X(e).Element : !1;
}
function ie(e) {
  return vt() ? e instanceof HTMLElement || e instanceof X(e).HTMLElement : !1;
}
function Fr(e) {
  return !vt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof X(e).ShadowRoot;
}
const ai = /* @__PURE__ */ new Set(["inline", "contents"]);
function et(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = J(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !ai.has(o);
}
const ci = /* @__PURE__ */ new Set(["table", "td", "th"]);
function li(e) {
  return ci.has(He(e));
}
const ui = [":popover-open", ":modal"];
function xt(e) {
  return ui.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const di = ["transform", "translate", "scale", "rotate", "perspective"], fi = ["transform", "translate", "scale", "rotate", "perspective", "filter"], gi = ["paint", "layout", "strict", "content"];
function Xt(e) {
  const t = Yt(), r = Q(e) ? J(e) : e;
  return di.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || fi.some((n) => (r.willChange || "").includes(n)) || gi.some((n) => (r.contain || "").includes(n));
}
function pi(e) {
  let t = Ce(e);
  for (; ie(t) && !We(t); ) {
    if (Xt(t))
      return t;
    if (xt(t))
      return null;
    t = Ce(t);
  }
  return null;
}
function Yt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const bi = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function We(e) {
  return bi.has(He(e));
}
function J(e) {
  return X(e).getComputedStyle(e);
}
function yt(e) {
  return Q(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ce(e) {
  if (He(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Fr(e) && e.host || // Fallback.
    ae(e)
  );
  return Fr(t) ? t.host : t;
}
function mn(e) {
  const t = Ce(e);
  return We(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ie(t) && et(t) ? t : mn(t);
}
function Je(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = mn(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = X(o);
  if (s) {
    const i = Wt(a);
    return t.concat(a, a.visualViewport || [], et(o) ? o : [], i && r ? Je(i) : []);
  }
  return t.concat(o, Je(o, [], r));
}
function Wt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function vn(e) {
  const t = J(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = ie(e), s = o ? e.offsetWidth : r, a = o ? e.offsetHeight : n, i = pt(r) !== s || pt(n) !== a;
  return i && (r = s, n = a), {
    width: r,
    height: n,
    $: i
  };
}
function Kt(e) {
  return Q(e) ? e : e.contextElement;
}
function Fe(e) {
  const t = Kt(e);
  if (!ie(t))
    return se(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = vn(t);
  let a = (s ? pt(r.width) : r.width) / n, i = (s ? pt(r.height) : r.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const hi = /* @__PURE__ */ se(0);
function xn(e) {
  const t = X(e);
  return !Yt() || !t.visualViewport ? hi : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function mi(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== X(e) ? !1 : t;
}
function Pe(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), s = Kt(e);
  let a = se(1);
  t && (n ? Q(n) && (a = Fe(n)) : a = Fe(e));
  const i = mi(s, r, n) ? xn(s) : se(0);
  let u = (o.left + i.x) / a.x, c = (o.top + i.y) / a.y, d = o.width / a.x, f = o.height / a.y;
  if (s) {
    const p = X(s), b = n && Q(n) ? X(n) : n;
    let m = p, g = Wt(m);
    for (; g && n && b !== m; ) {
      const h = Fe(g), v = g.getBoundingClientRect(), x = J(g), w = v.left + (g.clientLeft + parseFloat(x.paddingLeft)) * h.x, y = v.top + (g.clientTop + parseFloat(x.paddingTop)) * h.y;
      u *= h.x, c *= h.y, d *= h.x, f *= h.y, u += w, c += y, m = X(g), g = Wt(m);
    }
  }
  return ht({
    width: d,
    height: f,
    x: u,
    y: c
  });
}
function Zt(e, t) {
  const r = yt(e).scrollLeft;
  return t ? t.left + r : Pe(ae(e)).left + r;
}
function yn(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Zt(e, n)
  )), s = n.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function vi(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const s = o === "fixed", a = ae(n), i = t ? xt(t.floating) : !1;
  if (n === a || i && s)
    return r;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = se(1);
  const d = se(0), f = ie(n);
  if ((f || !f && !s) && ((He(n) !== "body" || et(a)) && (u = yt(n)), ie(n))) {
    const b = Pe(n);
    c = Fe(n), d.x = b.x + n.clientLeft, d.y = b.y + n.clientTop;
  }
  const p = a && !f && !s ? yn(a, u, !0) : se(0);
  return {
    width: r.width * c.x,
    height: r.height * c.y,
    x: r.x * c.x - u.scrollLeft * c.x + d.x + p.x,
    y: r.y * c.y - u.scrollTop * c.y + d.y + p.y
  };
}
function xi(e) {
  return Array.from(e.getClientRects());
}
function yi(e) {
  const t = ae(e), r = yt(e), n = e.ownerDocument.body, o = G(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = G(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -r.scrollLeft + Zt(e);
  const i = -r.scrollTop;
  return J(n).direction === "rtl" && (a += G(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
function wi(e, t) {
  const r = X(e), n = ae(e), o = r.visualViewport;
  let s = n.clientWidth, a = n.clientHeight, i = 0, u = 0;
  if (o) {
    s = o.width, a = o.height;
    const c = Yt();
    (!c || c && t === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: i,
    y: u
  };
}
const _i = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ci(e, t) {
  const r = Pe(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, s = ie(e) ? Fe(e) : se(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, u = o * s.x, c = n * s.y;
  return {
    width: a,
    height: i,
    x: u,
    y: c
  };
}
function Br(e, t, r) {
  let n;
  if (t === "viewport")
    n = wi(e, r);
  else if (t === "document")
    n = yi(ae(e));
  else if (Q(t))
    n = Ci(t, r);
  else {
    const o = xn(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ht(n);
}
function wn(e, t) {
  const r = Ce(e);
  return r === t || !Q(r) || We(r) ? !1 : J(r).position === "fixed" || wn(r, t);
}
function Ei(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Je(e, [], !1).filter((i) => Q(i) && He(i) !== "body"), o = null;
  const s = J(e).position === "fixed";
  let a = s ? Ce(e) : e;
  for (; Q(a) && !We(a); ) {
    const i = J(a), u = Xt(a);
    !u && i.position === "fixed" && (o = null), (s ? !u && !o : !u && i.position === "static" && !!o && _i.has(o.position) || et(a) && !u && wn(e, a)) ? n = n.filter((d) => d !== a) : o = i, a = Ce(a);
  }
  return t.set(e, n), n;
}
function Si(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const a = [...r === "clippingAncestors" ? xt(t) ? [] : Ei(t, this._c) : [].concat(r), n], i = a[0], u = a.reduce((c, d) => {
    const f = Br(t, d, o);
    return c.top = G(f.top, c.top), c.right = _e(f.right, c.right), c.bottom = _e(f.bottom, c.bottom), c.left = G(f.left, c.left), c;
  }, Br(t, i, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Ai(e) {
  const {
    width: t,
    height: r
  } = vn(e);
  return {
    width: t,
    height: r
  };
}
function Pi(e, t, r) {
  const n = ie(t), o = ae(t), s = r === "fixed", a = Pe(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = se(0);
  function c() {
    u.x = Zt(o);
  }
  if (n || !n && !s)
    if ((He(t) !== "body" || et(o)) && (i = yt(t)), n) {
      const b = Pe(t, !0, s, t);
      u.x = b.x + t.clientLeft, u.y = b.y + t.clientTop;
    } else o && c();
  s && !n && o && c();
  const d = o && !n && !s ? yn(o, i) : se(0), f = a.left + i.scrollLeft - u.x - d.x, p = a.top + i.scrollTop - u.y - d.y;
  return {
    x: f,
    y: p,
    width: a.width,
    height: a.height
  };
}
function Nt(e) {
  return J(e).position === "static";
}
function $r(e, t) {
  if (!ie(e) || J(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return ae(e) === r && (r = r.ownerDocument.body), r;
}
function _n(e, t) {
  const r = X(e);
  if (xt(e))
    return r;
  if (!ie(e)) {
    let o = Ce(e);
    for (; o && !We(o); ) {
      if (Q(o) && !Nt(o))
        return o;
      o = Ce(o);
    }
    return r;
  }
  let n = $r(e, t);
  for (; n && li(n) && Nt(n); )
    n = $r(n, t);
  return n && We(n) && Nt(n) && !Xt(n) ? r : n || pi(e) || r;
}
const Ri = async function(e) {
  const t = this.getOffsetParent || _n, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Pi(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Oi(e) {
  return J(e).direction === "rtl";
}
const Ni = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vi,
  getDocumentElement: ae,
  getClippingRect: Si,
  getOffsetParent: _n,
  getElementRects: Ri,
  getClientRects: xi,
  getDimensions: Ai,
  getScale: Fe,
  isElement: Q,
  isRTL: Oi
};
function Cn(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ki(e, t) {
  let r = null, n;
  const o = ae(e);
  function s() {
    var i;
    clearTimeout(n), (i = r) == null || i.disconnect(), r = null;
  }
  function a(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), s();
    const c = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: p,
      height: b
    } = c;
    if (i || t(), !p || !b)
      return;
    const m = st(f), g = st(o.clientWidth - (d + p)), h = st(o.clientHeight - (f + b)), v = st(d), w = {
      rootMargin: -m + "px " + -g + "px " + -h + "px " + -v + "px",
      threshold: G(0, _e(1, u)) || 1
    };
    let y = !0;
    function _(S) {
      const E = S[0].intersectionRatio;
      if (E !== u) {
        if (!y)
          return a();
        E ? a(!1, E) : n = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !Cn(c, e.getBoundingClientRect()) && a(), y = !1;
    }
    try {
      r = new IntersectionObserver(_, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(_, w);
    }
    r.observe(e);
  }
  return a(!0), s;
}
function Mi(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, c = Kt(e), d = o || s ? [...c ? Je(c) : [], ...Je(t)] : [];
  d.forEach((v) => {
    o && v.addEventListener("scroll", r, {
      passive: !0
    }), s && v.addEventListener("resize", r);
  });
  const f = c && i ? ki(c, r) : null;
  let p = -1, b = null;
  a && (b = new ResizeObserver((v) => {
    let [x] = v;
    x && x.target === c && b && (b.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = b) == null || w.observe(t);
    })), r();
  }), c && !u && b.observe(c), b.observe(t));
  let m, g = u ? Pe(e) : null;
  u && h();
  function h() {
    const v = Pe(e);
    g && !Cn(g, v) && r(), g = v, m = requestAnimationFrame(h);
  }
  return r(), () => {
    var v;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", r), s && x.removeEventListener("resize", r);
    }), f == null || f(), (v = b) == null || v.disconnect(), b = null, u && cancelAnimationFrame(m);
  };
}
const Ti = ni, Li = oi, Ii = ei, Di = ii, Fi = ti, Wr = Js, Bi = si, $i = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Ni,
    ...r
  }, s = {
    ...o.platform,
    _c: n
  };
  return Qs(e, t, {
    ...o,
    platform: s
  });
};
var Wi = typeof document < "u", zi = function() {
}, dt = Wi ? po : zi;
function mt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!mt(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const s = o[n];
      if (!(s === "_owner" && e.$$typeof) && !mt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function En(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function zr(e, t) {
  const r = En(e);
  return Math.round(t * r) / r;
}
function kt(e) {
  const t = l.useRef(e);
  return dt(() => {
    t.current = e;
  }), t;
}
function Vi(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: i = !0,
    whileElementsMounted: u,
    open: c
  } = e, [d, f] = l.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, b] = l.useState(n);
  mt(p, n) || b(n);
  const [m, g] = l.useState(null), [h, v] = l.useState(null), x = l.useCallback((P) => {
    P !== S.current && (S.current = P, g(P));
  }, []), w = l.useCallback((P) => {
    P !== E.current && (E.current = P, v(P));
  }, []), y = s || m, _ = a || h, S = l.useRef(null), E = l.useRef(null), R = l.useRef(d), M = u != null, N = kt(u), D = kt(o), A = kt(c), L = l.useCallback(() => {
    if (!S.current || !E.current)
      return;
    const P = {
      placement: t,
      strategy: r,
      middleware: p
    };
    D.current && (P.platform = D.current), $i(S.current, E.current, P).then((F) => {
      const j = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      k.current && !mt(R.current, j) && (R.current = j, Xr.flushSync(() => {
        f(j);
      }));
    });
  }, [p, t, r, D, A]);
  dt(() => {
    c === !1 && R.current.isPositioned && (R.current.isPositioned = !1, f((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [c]);
  const k = l.useRef(!1);
  dt(() => (k.current = !0, () => {
    k.current = !1;
  }), []), dt(() => {
    if (y && (S.current = y), _ && (E.current = _), y && _) {
      if (N.current)
        return N.current(y, _, L);
      L();
    }
  }, [y, _, L, N, M]);
  const W = l.useMemo(() => ({
    reference: S,
    floating: E,
    setReference: x,
    setFloating: w
  }), [x, w]), T = l.useMemo(() => ({
    reference: y,
    floating: _
  }), [y, _]), I = l.useMemo(() => {
    const P = {
      position: r,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return P;
    const F = zr(T.floating, d.x), j = zr(T.floating, d.y);
    return i ? {
      ...P,
      transform: "translate(" + F + "px, " + j + "px)",
      ...En(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: F,
      top: j
    };
  }, [r, i, T.floating, d.x, d.y]);
  return l.useMemo(() => ({
    ...d,
    update: L,
    refs: W,
    elements: T,
    floatingStyles: I
  }), [d, L, W, T, I]);
}
const ji = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: o
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? Wr({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? Wr({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, Hi = (e, t) => ({
  ...Ti(e),
  options: [e, t]
}), Ui = (e, t) => ({
  ...Li(e),
  options: [e, t]
}), Gi = (e, t) => ({
  ...Bi(e),
  options: [e, t]
}), Xi = (e, t) => ({
  ...Ii(e),
  options: [e, t]
}), Yi = (e, t) => ({
  ...Di(e),
  options: [e, t]
}), Ki = (e, t) => ({
  ...Fi(e),
  options: [e, t]
}), Zi = (e, t) => ({
  ...ji(e),
  options: [e, t]
});
var qi = "Arrow", Sn = l.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ C(
    be.svg,
    {
      ...s,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ C("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Sn.displayName = qi;
var Qi = Sn;
function Ji(e) {
  const [t, r] = l.useState(void 0);
  return we(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let a, i;
        if ("borderBoxSize" in s) {
          const u = s.borderBoxSize, c = Array.isArray(u) ? u[0] : u;
          a = c.inlineSize, i = c.blockSize;
        } else
          a = e.offsetWidth, i = e.offsetHeight;
        r({ width: a, height: i });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var qt = "Popper", [An, Pn] = cn(qt), [ea, Rn] = An(qt), On = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = l.useState(null);
  return /* @__PURE__ */ C(ea, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
On.displayName = qt;
var Nn = "PopperAnchor", kn = l.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, s = Rn(Nn, r), a = l.useRef(null), i = Ee(t, a);
    return l.useEffect(() => {
      s.onAnchorChange((n == null ? void 0 : n.current) || a.current);
    }), n ? null : /* @__PURE__ */ C(be.div, { ...o, ref: i });
  }
);
kn.displayName = Nn;
var Qt = "PopperContent", [ta, ra] = An(Qt), Mn = l.forwardRef(
  (e, t) => {
    var H, te, Oe, Ne, Ae, ke;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: u = !0,
      collisionBoundary: c = [],
      collisionPadding: d = 0,
      sticky: f = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: b = "optimized",
      onPlaced: m,
      ...g
    } = e, h = Rn(Qt, r), [v, x] = l.useState(null), w = Ee(t, (Z) => x(Z)), [y, _] = l.useState(null), S = Ji(y), E = (S == null ? void 0 : S.width) ?? 0, R = (S == null ? void 0 : S.height) ?? 0, M = n + (s !== "center" ? "-" + s : ""), N = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, D = Array.isArray(c) ? c : [c], A = D.length > 0, L = {
      padding: N,
      boundary: D.filter(oa),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: A
    }, { refs: k, floatingStyles: W, placement: T, isPositioned: I, middlewareData: P } = Vi({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: M,
      whileElementsMounted: (...Z) => Mi(...Z, {
        animationFrame: b === "always"
      }),
      elements: {
        reference: h.anchor
      },
      middleware: [
        Hi({ mainAxis: o + R, alignmentAxis: a }),
        u && Ui({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Gi() : void 0,
          ...L
        }),
        u && Xi({ ...L }),
        Yi({
          ...L,
          apply: ({ elements: Z, rects: ue, availableWidth: tr, availableHeight: Ue }) => {
            const { width: Ge, height: Ct } = ue.reference, Me = Z.floating.style;
            Me.setProperty("--radix-popper-available-width", `${tr}px`), Me.setProperty("--radix-popper-available-height", `${Ue}px`), Me.setProperty("--radix-popper-anchor-width", `${Ge}px`), Me.setProperty("--radix-popper-anchor-height", `${Ct}px`);
          }
        }),
        y && Zi({ element: y, padding: i }),
        sa({ arrowWidth: E, arrowHeight: R }),
        p && Ki({ strategy: "referenceHidden", ...L })
      ]
    }), [F, j] = In(T), z = $e(m);
    we(() => {
      I && (z == null || z());
    }, [I, z]);
    const ee = (H = P.arrow) == null ? void 0 : H.x, ce = (te = P.arrow) == null ? void 0 : te.y, U = ((Oe = P.arrow) == null ? void 0 : Oe.centerOffset) !== 0, [le, K] = l.useState();
    return we(() => {
      v && K(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ C(
      "div",
      {
        ref: k.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: I ? W.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: le,
          "--radix-popper-transform-origin": [
            (Ne = P.transformOrigin) == null ? void 0 : Ne.x,
            (Ae = P.transformOrigin) == null ? void 0 : Ae.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ke = P.hide) == null ? void 0 : ke.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ C(
          ta,
          {
            scope: r,
            placedSide: F,
            onArrowChange: _,
            arrowX: ee,
            arrowY: ce,
            shouldHideArrow: U,
            children: /* @__PURE__ */ C(
              be.div,
              {
                "data-side": F,
                "data-align": j,
                ...g,
                ref: w,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: I ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Mn.displayName = Qt;
var Tn = "PopperArrow", na = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ln = l.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, s = ra(Tn, n), a = na[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ C(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ C(
          Qi,
          {
            ...o,
            ref: r,
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
Ln.displayName = Tn;
function oa(e) {
  return e !== null;
}
var sa = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var h, v, x;
    const { placement: r, rects: n, middlewareData: o } = t, a = ((h = o.arrow) == null ? void 0 : h.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, u = a ? 0 : e.arrowHeight, [c, d] = In(r), f = { start: "0%", center: "50%", end: "100%" }[d], p = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + i / 2, b = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + u / 2;
    let m = "", g = "";
    return c === "bottom" ? (m = a ? f : `${p}px`, g = `${-u}px`) : c === "top" ? (m = a ? f : `${p}px`, g = `${n.floating.height + u}px`) : c === "right" ? (m = `${-u}px`, g = a ? f : `${b}px`) : c === "left" && (m = `${n.floating.width + u}px`, g = a ? f : `${b}px`), { data: { x: m, y: g } };
  }
});
function In(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var ia = On, Dn = kn, aa = Mn, ca = Ln, la = "Portal", Fn = l.forwardRef((e, t) => {
  var i;
  const { container: r, ...n } = e, [o, s] = l.useState(!1);
  we(() => s(!0), []);
  const a = r || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? ho.createPortal(/* @__PURE__ */ C(be.div, { ...n, ref: t }), a) : null;
});
Fn.displayName = la;
function ua(e, t) {
  return l.useReducer((r, n) => t[r][n] ?? r, e);
}
var Jt = (e) => {
  const { present: t, children: r } = e, n = da(t), o = typeof r == "function" ? r({ present: n.isPresent }) : l.Children.only(r), s = Ee(n.ref, fa(o));
  return typeof r == "function" || n.isPresent ? l.cloneElement(o, { ref: s }) : null;
};
Jt.displayName = "Presence";
function da(e) {
  const [t, r] = l.useState(), n = l.useRef(null), o = l.useRef(e), s = l.useRef("none"), a = e ? "mounted" : "unmounted", [i, u] = ua(a, {
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
  return l.useEffect(() => {
    const c = it(n.current);
    s.current = i === "mounted" ? c : "none";
  }, [i]), we(() => {
    const c = n.current, d = o.current;
    if (d !== e) {
      const p = s.current, b = it(c);
      e ? u("MOUNT") : b === "none" || (c == null ? void 0 : c.display) === "none" ? u("UNMOUNT") : u(d && p !== b ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), we(() => {
    if (t) {
      let c;
      const d = t.ownerDocument.defaultView ?? window, f = (b) => {
        const g = it(n.current).includes(b.animationName);
        if (b.target === t && g && (u("ANIMATION_END"), !o.current)) {
          const h = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = h);
          });
        }
      }, p = (b) => {
        b.target === t && (s.current = it(n.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: l.useCallback((c) => {
      n.current = c ? getComputedStyle(c) : null, r(c);
    }, [])
  };
}
function it(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function fa(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var ga = l[" useInsertionEffect ".trim().toString()] || we;
function pa({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, s, a] = ba({
    defaultProp: t,
    onChange: r
  }), i = e !== void 0, u = i ? e : o;
  {
    const d = l.useRef(e !== void 0);
    l.useEffect(() => {
      const f = d.current;
      f !== i && console.warn(
        `${n} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = i;
    }, [i, n]);
  }
  const c = l.useCallback(
    (d) => {
      var f;
      if (i) {
        const p = ha(d) ? d(e) : d;
        p !== e && ((f = a.current) == null || f.call(a, p));
      } else
        s(d);
    },
    [i, e, s, a]
  );
  return [u, c];
}
function ba({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = l.useState(e), o = l.useRef(r), s = l.useRef(t);
  return ga(() => {
    s.current = t;
  }, [t]), l.useEffect(() => {
    var a;
    o.current !== r && ((a = s.current) == null || a.call(s, r), o.current = r);
  }, [r, o]), [r, n, s];
}
function ha(e) {
  return typeof e == "function";
}
var ma = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Te = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), ct = {}, Mt = 0, Bn = function(e) {
  return e && (e.host || Bn(e.parentNode));
}, va = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Bn(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, xa = function(e, t, r, n) {
  var o = va(t, Array.isArray(e) ? e : [e]);
  ct[r] || (ct[r] = /* @__PURE__ */ new WeakMap());
  var s = ct[r], a = [], i = /* @__PURE__ */ new Set(), u = new Set(o), c = function(f) {
    !f || i.has(f) || (i.add(f), c(f.parentNode));
  };
  o.forEach(c);
  var d = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        d(p);
      else
        try {
          var b = p.getAttribute(n), m = b !== null && b !== "false", g = (Te.get(p) || 0) + 1, h = (s.get(p) || 0) + 1;
          Te.set(p, g), s.set(p, h), a.push(p), g === 1 && m && at.set(p, !0), h === 1 && p.setAttribute(r, "true"), m || p.setAttribute(n, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", p, v);
        }
    });
  };
  return d(t), i.clear(), Mt++, function() {
    a.forEach(function(f) {
      var p = Te.get(f) - 1, b = s.get(f) - 1;
      Te.set(f, p), s.set(f, b), p || (at.has(f) || f.removeAttribute(n), at.delete(f)), b || f.removeAttribute(r);
    }), Mt--, Mt || (Te = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), ct = {});
  };
}, ya = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = ma(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), xa(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, ne = function() {
  return ne = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, ne.apply(this, arguments);
};
function $n(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function wa(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, s; n < o; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var ft = "right-scroll-bar-position", gt = "width-before-scroll-bar", _a = "with-scroll-bars-hidden", Ca = "--removed-body-scroll-bar-size";
function Tt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Ea(e, t) {
  var r = bo(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var Sa = typeof window < "u" ? l.useLayoutEffect : l.useEffect, Vr = /* @__PURE__ */ new WeakMap();
function Aa(e, t) {
  var r = Ea(null, function(n) {
    return e.forEach(function(o) {
      return Tt(o, n);
    });
  });
  return Sa(function() {
    var n = Vr.get(r);
    if (n) {
      var o = new Set(n), s = new Set(e), a = r.current;
      o.forEach(function(i) {
        s.has(i) || Tt(i, null);
      }), s.forEach(function(i) {
        o.has(i) || Tt(i, a);
      });
    }
    Vr.set(r, e);
  }, [e]), r;
}
function Pa(e) {
  return e;
}
function Ra(e, t) {
  t === void 0 && (t = Pa);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, n);
      return r.push(a), function() {
        r = r.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (n = !0; r.length; ) {
        var a = r;
        r = [], a.forEach(s);
      }
      r = {
        push: function(i) {
          return s(i);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(s) {
      n = !0;
      var a = [];
      if (r.length) {
        var i = r;
        r = [], i.forEach(s), a = r;
      }
      var u = function() {
        var d = a;
        a = [], d.forEach(s);
      }, c = function() {
        return Promise.resolve().then(u);
      };
      c(), r = {
        push: function(d) {
          a.push(d), c();
        },
        filter: function(d) {
          return a = a.filter(d), r;
        }
      };
    }
  };
  return o;
}
function Oa(e) {
  e === void 0 && (e = {});
  var t = Ra(null);
  return t.options = ne({ async: !0, ssr: !1 }, e), t;
}
var Wn = function(e) {
  var t = e.sideCar, r = $n(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return l.createElement(n, ne({}, r));
};
Wn.isSideCarExport = !0;
function Na(e, t) {
  return e.useMedium(t), Wn;
}
var zn = Oa(), Lt = function() {
}, wt = l.forwardRef(function(e, t) {
  var r = l.useRef(null), n = l.useState({
    onScrollCapture: Lt,
    onWheelCapture: Lt,
    onTouchMoveCapture: Lt
  }), o = n[0], s = n[1], a = e.forwardProps, i = e.children, u = e.className, c = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, b = e.noRelative, m = e.noIsolation, g = e.inert, h = e.allowPinchZoom, v = e.as, x = v === void 0 ? "div" : v, w = e.gapMode, y = $n(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = p, S = Aa([r, t]), E = ne(ne({}, y), o);
  return l.createElement(
    l.Fragment,
    null,
    d && l.createElement(_, { sideCar: zn, removeScrollBar: c, shards: f, noRelative: b, noIsolation: m, inert: g, setCallbacks: s, allowPinchZoom: !!h, lockRef: r, gapMode: w }),
    a ? l.cloneElement(l.Children.only(i), ne(ne({}, E), { ref: S })) : l.createElement(x, ne({}, E, { className: u, ref: S }), i)
  );
});
wt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
wt.classNames = {
  fullWidth: gt,
  zeroRight: ft
};
var ka = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Ma() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ka();
  return t && e.setAttribute("nonce", t), e;
}
function Ta(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function La(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Ia = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Ma()) && (Ta(t, r), La(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Da = function() {
  var e = Ia();
  return function(t, r) {
    l.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Vn = function() {
  var e = Da(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, Fa = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, It = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ba = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [It(r), It(n), It(o)];
}, $a = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Fa;
  var t = Ba(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Wa = Vn(), Be = "data-scroll-locked", za = function(e, t, r, n) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(_a, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(i, "px ").concat(n, `;
  }
  body[`).concat(Be, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(i, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ft, ` {
    right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(gt, ` {
    margin-right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(ft, " .").concat(ft, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(gt, " .").concat(gt, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Be, `] {
    `).concat(Ca, ": ").concat(i, `px;
  }
`);
}, jr = function() {
  var e = parseInt(document.body.getAttribute(Be) || "0", 10);
  return isFinite(e) ? e : 0;
}, Va = function() {
  l.useEffect(function() {
    return document.body.setAttribute(Be, (jr() + 1).toString()), function() {
      var e = jr() - 1;
      e <= 0 ? document.body.removeAttribute(Be) : document.body.setAttribute(Be, e.toString());
    };
  }, []);
}, ja = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  Va();
  var s = l.useMemo(function() {
    return $a(o);
  }, [o]);
  return l.createElement(Wa, { styles: za(s, !t, o, r ? "" : "!important") });
}, zt = !1;
if (typeof window < "u")
  try {
    var lt = Object.defineProperty({}, "passive", {
      get: function() {
        return zt = !0, !0;
      }
    });
    window.addEventListener("test", lt, lt), window.removeEventListener("test", lt, lt);
  } catch {
    zt = !1;
  }
var Le = zt ? { passive: !1 } : !1, Ha = function(e) {
  return e.tagName === "TEXTAREA";
}, jn = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Ha(e) && r[t] === "visible")
  );
}, Ua = function(e) {
  return jn(e, "overflowY");
}, Ga = function(e) {
  return jn(e, "overflowX");
}, Hr = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Hn(e, n);
    if (o) {
      var s = Un(e, n), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, Xa = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, Ya = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Hn = function(e, t) {
  return e === "v" ? Ua(t) : Ga(t);
}, Un = function(e, t) {
  return e === "v" ? Xa(t) : Ya(t);
}, Ka = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Za = function(e, t, r, n, o) {
  var s = Ka(e, window.getComputedStyle(t).direction), a = s * n, i = r.target, u = t.contains(i), c = !1, d = a > 0, f = 0, p = 0;
  do {
    if (!i)
      break;
    var b = Un(e, i), m = b[0], g = b[1], h = b[2], v = g - h - s * m;
    (m || v) && Hn(e, i) && (f += v, p += m);
    var x = i.parentNode;
    i = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !u && i !== document.body || // self content
    u && (t.contains(i) || t === i)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(p) < 1) && (c = !0), c;
}, ut = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ur = function(e) {
  return [e.deltaX, e.deltaY];
}, Gr = function(e) {
  return e && "current" in e ? e.current : e;
}, qa = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Qa = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Ja = 0, Ie = [];
function ec(e) {
  var t = l.useRef([]), r = l.useRef([0, 0]), n = l.useRef(), o = l.useState(Ja++)[0], s = l.useState(Vn)[0], a = l.useRef(e);
  l.useEffect(function() {
    a.current = e;
  }, [e]), l.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = wa([e.lockRef.current], (e.shards || []).map(Gr), !0).filter(Boolean);
      return g.forEach(function(h) {
        return h.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(h) {
          return h.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = l.useCallback(function(g, h) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !a.current.allowPinchZoom;
    var v = ut(g), x = r.current, w = "deltaX" in g ? g.deltaX : x[0] - v[0], y = "deltaY" in g ? g.deltaY : x[1] - v[1], _, S = g.target, E = Math.abs(w) > Math.abs(y) ? "h" : "v";
    if ("touches" in g && E === "h" && S.type === "range")
      return !1;
    var R = Hr(E, S);
    if (!R)
      return !0;
    if (R ? _ = E : (_ = E === "v" ? "h" : "v", R = Hr(E, S)), !R)
      return !1;
    if (!n.current && "changedTouches" in g && (w || y) && (n.current = _), !_)
      return !0;
    var M = n.current || _;
    return Za(M, h, g, M === "h" ? w : y);
  }, []), u = l.useCallback(function(g) {
    var h = g;
    if (!(!Ie.length || Ie[Ie.length - 1] !== s)) {
      var v = "deltaY" in h ? Ur(h) : ut(h), x = t.current.filter(function(_) {
        return _.name === h.type && (_.target === h.target || h.target === _.shadowParent) && qa(_.delta, v);
      })[0];
      if (x && x.should) {
        h.cancelable && h.preventDefault();
        return;
      }
      if (!x) {
        var w = (a.current.shards || []).map(Gr).filter(Boolean).filter(function(_) {
          return _.contains(h.target);
        }), y = w.length > 0 ? i(h, w[0]) : !a.current.noIsolation;
        y && h.cancelable && h.preventDefault();
      }
    }
  }, []), c = l.useCallback(function(g, h, v, x) {
    var w = { name: g, delta: h, target: v, should: x, shadowParent: tc(v) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== w;
      });
    }, 1);
  }, []), d = l.useCallback(function(g) {
    r.current = ut(g), n.current = void 0;
  }, []), f = l.useCallback(function(g) {
    c(g.type, Ur(g), g.target, i(g, e.lockRef.current));
  }, []), p = l.useCallback(function(g) {
    c(g.type, ut(g), g.target, i(g, e.lockRef.current));
  }, []);
  l.useEffect(function() {
    return Ie.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", u, Le), document.addEventListener("touchmove", u, Le), document.addEventListener("touchstart", d, Le), function() {
      Ie = Ie.filter(function(g) {
        return g !== s;
      }), document.removeEventListener("wheel", u, Le), document.removeEventListener("touchmove", u, Le), document.removeEventListener("touchstart", d, Le);
    };
  }, []);
  var b = e.removeScrollBar, m = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    m ? l.createElement(s, { styles: Qa(o) }) : null,
    b ? l.createElement(ja, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function tc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const rc = Na(zn, ec);
var Gn = l.forwardRef(function(e, t) {
  return l.createElement(wt, ne({}, e, { ref: t, sideCar: rc }));
});
Gn.classNames = wt.classNames;
var _t = "Popover", [Xn, Nc] = cn(_t, [
  Pn
]), tt = Pn(), [nc, Se] = Xn(_t), Yn = (e) => {
  const {
    __scopePopover: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !1
  } = e, i = tt(t), u = l.useRef(null), [c, d] = l.useState(!1), [f, p] = pa({
    prop: n,
    defaultProp: o ?? !1,
    onChange: s,
    caller: _t
  });
  return /* @__PURE__ */ C(ia, { ...i, children: /* @__PURE__ */ C(
    nc,
    {
      scope: t,
      contentId: Ws(),
      triggerRef: u,
      open: f,
      onOpenChange: p,
      onOpenToggle: l.useCallback(() => p((b) => !b), [p]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: l.useCallback(() => d(!0), []),
      onCustomAnchorRemove: l.useCallback(() => d(!1), []),
      modal: a,
      children: r
    }
  ) });
};
Yn.displayName = _t;
var Kn = "PopoverAnchor", oc = l.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Se(Kn, r), s = tt(r), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = o;
    return l.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ C(Dn, { ...s, ...n, ref: t });
  }
);
oc.displayName = Kn;
var Zn = "PopoverTrigger", qn = l.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Se(Zn, r), s = tt(r), a = Ee(t, o.triggerRef), i = /* @__PURE__ */ C(
      be.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ro(o.open),
        ...n,
        ref: a,
        onClick: xe(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ C(Dn, { asChild: !0, ...s, children: i });
  }
);
qn.displayName = Zn;
var er = "PopoverPortal", [sc, ic] = Xn(er, {
  forceMount: void 0
}), Qn = (e) => {
  const { __scopePopover: t, forceMount: r, children: n, container: o } = e, s = Se(er, t);
  return /* @__PURE__ */ C(sc, { scope: t, forceMount: r, children: /* @__PURE__ */ C(Jt, { present: r || s.open, children: /* @__PURE__ */ C(Fn, { asChild: !0, container: o, children: n }) }) });
};
Qn.displayName = er;
var ze = "PopoverContent", Jn = l.forwardRef(
  (e, t) => {
    const r = ic(ze, e.__scopePopover), { forceMount: n = r.forceMount, ...o } = e, s = Se(ze, e.__scopePopover);
    return /* @__PURE__ */ C(Jt, { present: n || s.open, children: s.modal ? /* @__PURE__ */ C(cc, { ...o, ref: t }) : /* @__PURE__ */ C(lc, { ...o, ref: t }) });
  }
);
Jn.displayName = ze;
var ac = /* @__PURE__ */ Vt("PopoverContent.RemoveScroll"), cc = l.forwardRef(
  (e, t) => {
    const r = Se(ze, e.__scopePopover), n = l.useRef(null), o = Ee(t, n), s = l.useRef(!1);
    return l.useEffect(() => {
      const a = n.current;
      if (a) return ya(a);
    }, []), /* @__PURE__ */ C(Gn, { as: ac, allowPinchZoom: !0, children: /* @__PURE__ */ C(
      eo,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: xe(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), s.current || (i = r.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: xe(
          e.onPointerDownOutside,
          (a) => {
            const i = a.detail.originalEvent, u = i.button === 0 && i.ctrlKey === !0, c = i.button === 2 || u;
            s.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: xe(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), lc = l.forwardRef(
  (e, t) => {
    const r = Se(ze, e.__scopePopover), n = l.useRef(!1), o = l.useRef(!1);
    return /* @__PURE__ */ C(
      eo,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var a, i;
          (a = e.onCloseAutoFocus) == null || a.call(e, s), s.defaultPrevented || (n.current || (i = r.triggerRef.current) == null || i.focus(), s.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var u, c;
          (u = e.onInteractOutside) == null || u.call(e, s), s.defaultPrevented || (n.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          ((c = r.triggerRef.current) == null ? void 0 : c.contains(a)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), eo = l.forwardRef(
  (e, t) => {
    const {
      __scopePopover: r,
      trapFocus: n,
      onOpenAutoFocus: o,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEscapeKeyDown: i,
      onPointerDownOutside: u,
      onFocusOutside: c,
      onInteractOutside: d,
      ...f
    } = e, p = Se(ze, r), b = tt(r);
    return Ns(), /* @__PURE__ */ C(
      fn,
      {
        asChild: !0,
        loop: !0,
        trapped: n,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ C(
          un,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: d,
            onEscapeKeyDown: i,
            onPointerDownOutside: u,
            onFocusOutside: c,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ C(
              aa,
              {
                "data-state": ro(p.open),
                role: "dialog",
                id: p.contentId,
                ...b,
                ...f,
                ref: t,
                style: {
                  ...f.style,
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
), to = "PopoverClose", uc = l.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Se(to, r);
    return /* @__PURE__ */ C(
      be.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: xe(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
uc.displayName = to;
var dc = "PopoverArrow", fc = l.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = tt(r);
    return /* @__PURE__ */ C(ca, { ...o, ...n, ref: t });
  }
);
fc.displayName = dc;
function ro(e) {
  return e ? "open" : "closed";
}
var gc = Yn, pc = qn, bc = Qn, hc = Jn;
const mc = Re(
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
), vc = (e) => {
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
}, xc = (e) => {
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
}, yc = l.forwardRef(
  ({
    children: e,
    preferredPosition: t = "below",
    preferredAlignment: r = "center",
    active: n,
    activator: o,
    preferInputActivator: s = !0,
    activatorWrapper: a = "div",
    zIndexOverride: i = 400,
    preventFocusOnClose: u = !1,
    sectioned: c = !1,
    fullWidth: d = !1,
    fullHeight: f = !1,
    fluidContent: p = !1,
    fixed: b = !1,
    ariaHaspopup: m,
    hideOnPrint: g = !1,
    onClose: h,
    autofocusTarget: v = "container",
    preventCloseOnChildOverlayClick: x = !1,
    captureOverscroll: w = !1,
    className: y,
    ..._
  }, S) => {
    const E = (k) => {
      k || h("click-outside");
    }, R = () => {
      h("escape");
    }, M = (k) => {
      x || h("click-outside");
    }, N = ye(
      mc({
        sectioned: c,
        fullWidth: d,
        fullHeight: f,
        fluidContent: p,
        hideOnPrint: g
      }),
      y
    ), D = vc(t), A = xc(r);
    return /* @__PURE__ */ re(gc, { open: n, onOpenChange: E, children: [
      /* @__PURE__ */ C(pc, { asChild: !0, children: /* @__PURE__ */ C(a, { children: o }) }),
      /* @__PURE__ */ C(bc, { children: /* @__PURE__ */ C(
        hc,
        {
          ref: S,
          side: D,
          align: A,
          className: N,
          style: { zIndex: i },
          onEscapeKeyDown: R,
          onInteractOutside: M,
          ..._,
          children: c ? /* @__PURE__ */ C("div", { className: "p-4", children: e }) : e
        }
      ) })
    ] });
  }
);
yc.displayName = "Popover";
const wc = (e) => e && {
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
}[e] || "bg-white", _c = Re(
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
), Cc = (e) => {
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
  const t = [], r = {
    xs: "",
    sm: "sm:",
    md: "md:",
    lg: "lg:",
    xl: "xl:"
  };
  return Object.entries(e).forEach(([n, o]) => {
    var i;
    const s = r[n], a = {
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
      `${s}${((i = a[o]) == null ? void 0 : i.replace("p-", "p-")) || "p-4"}`
    );
  }), t.join(" ") || "p-4 sm:p-5";
}, Ec = l.forwardRef(
  ({
    children: e,
    background: t = "bg-surface",
    padding: r,
    roundedAbove: n = "sm",
    className: o,
    ...s
  }, a) => {
    const i = ye(
      _c({
        roundedAbove: n
      }),
      wc(t),
      Cc(r),
      // Exact Polaris border color: rgba(227, 227, 227, 1)
      "[border-color:rgba(227,227,227,1)]",
      // Exact Polaris shadow-300: 0px 4px 6px -2px rgba(26, 26, 26, 0.20)
      "[box-shadow:0px_4px_6px_-2px_rgba(26,26,26,0.20)]",
      // Exact Polaris text color: rgba(48, 48, 48, 1)
      "[color:rgba(48,48,48,1)]",
      o
    );
    return /* @__PURE__ */ C("div", { ref: a, className: i, ...s, children: e });
  }
);
Ec.displayName = "Card";
export {
  ds as Box,
  ns as Button,
  ss as ButtonGroup,
  Ec as Card,
  yc as Popover,
  gs as Text,
  vs as TextField,
  us as boxVariants,
  os as buttonGroupVariants,
  ts as buttonVariants,
  ye as cn,
  _c as polarisCardVariants,
  mc as polarisPopoverVariants,
  ps as textFieldVariants,
  fs as textVariants
};
//# sourceMappingURL=index.js.map
