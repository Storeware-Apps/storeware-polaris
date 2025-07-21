import { jsx as C, jsxs as re } from "react/jsx-runtime";
import * as u from "react";
import Y, { useLayoutEffect as ho, useState as mo } from "react";
import * as Kr from "react-dom";
import vo from "react-dom";
function br(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Zr(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const s = br(o, t);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const s = n[o];
          typeof s == "function" ? s() : br(e[o], null);
        }
      };
  };
}
function Ee(...e) {
  return u.useCallback(Zr(...e), e);
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  const t = /* @__PURE__ */ yo(e), r = u.forwardRef((n, o) => {
    const { children: s, ...a } = n, i = u.Children.toArray(s), l = i.find(_o);
    if (l) {
      const c = l.props.children, d = i.map((f) => f === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : f);
      return /* @__PURE__ */ C(t, { ...a, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ C(t, { ...a, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
var xo = /* @__PURE__ */ jt("Slot");
// @__NO_SIDE_EFFECTS__
function yo(e) {
  const t = u.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if (u.isValidElement(o)) {
      const a = Eo(o), i = Co(s, o.props);
      return o.type !== u.Fragment && (i.ref = n ? Zr(n, a) : a), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var wo = Symbol("radix.slottable");
function _o(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === wo;
}
function Co(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...i) => {
      const l = s(...i);
      return o(...i), l;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Eo(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function qr(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = qr(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Qr() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = qr(e)) && (n && (n += " "), n += t);
  return n;
}
const hr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, mr = Qr, Se = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return mr(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((c) => {
    const d = r == null ? void 0 : r[c], f = s == null ? void 0 : s[c];
    if (d === null) return null;
    const p = hr(d) || hr(f);
    return o[c][p];
  }), i = r && Object.entries(r).reduce((c, d) => {
    let [f, p] = d;
    return p === void 0 || (c[f] = p), c;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, d) => {
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
  return mr(e, a, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
var Jr = function(t) {
  return /* @__PURE__ */ Y.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ Y.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
Jr.displayName = "CheckIcon";
var en = function(t) {
  return /* @__PURE__ */ Y.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ Y.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
en.displayName = "ChevronDownIcon";
var tn = function(t) {
  return /* @__PURE__ */ Y.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ Y.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
tn.displayName = "ChevronUpIcon";
var rn = function(t) {
  return /* @__PURE__ */ Y.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ Y.createElement("path", {
    d: "M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"
  }), /* @__PURE__ */ Y.createElement("path", {
    d: "M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"
  }));
};
rn.displayName = "RefreshIcon";
var nn = function(t) {
  return /* @__PURE__ */ Y.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ Y.createElement("path", {
    d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
  }), /* @__PURE__ */ Y.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
nn.displayName = "XCircleIcon";
const Ht = "-", So = (e) => {
  const t = Po(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(Ht);
      return i[0] === "" && i.length !== 1 && i.shift(), on(i, t) || Ao(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const l = r[a] || [];
      return i && n[a] ? [...l, ...n[a]] : l;
    }
  };
}, on = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? on(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Ht);
  return (a = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : a.classGroupId;
}, vr = /^\[(.+)\]$/, Ao = (e) => {
  if (vr.test(e)) {
    const t = vr.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Po = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Oo(Object.entries(e.classGroups), r).forEach(([s, a]) => {
    Ft(a, n, s, t);
  }), n;
}, Ft = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : xr(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Ro(o)) {
        Ft(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      Ft(a, xr(t, s), r, n);
    });
  });
}, xr = (e, t) => {
  let r = e;
  return t.split(Ht).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Ro = (e) => e.isThemeGetter, Oo = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([a, i]) => [t + a, i])) : s);
  return [r, o];
}) : e, No = (e) => {
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
}, sn = "!", ko = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], s = t.length, a = (i) => {
    const l = [];
    let c = 0, d = 0, f;
    for (let h = 0; h < i.length; h++) {
      let v = i[h];
      if (c === 0) {
        if (v === o && (n || i.slice(h, h + s) === t)) {
          l.push(i.slice(d, h)), d = h + s;
          continue;
        }
        if (v === "/") {
          f = h;
          continue;
        }
      }
      v === "[" ? c++ : v === "]" && c--;
    }
    const p = l.length === 0 ? i : i.substring(d), b = p.startsWith(sn), m = b ? p.substring(1) : p, g = f && f > d ? f - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: b,
      baseClassName: m,
      maybePostfixModifierPosition: g
    };
  };
  return r ? (i) => r({
    className: i,
    parseClassName: a
  }) : a;
}, Mo = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, To = (e) => ({
  cache: No(e.cacheSize),
  parseClassName: ko(e),
  ...So(e)
}), Lo = /\s+/, Io = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, s = [], a = e.trim().split(Lo);
  let i = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const c = a[l], {
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
    const h = Mo(d).join(":"), v = f ? h + sn : h, x = v + g;
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
function Do() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = an(t)) && (n && (n += " "), n += r);
  return n;
}
const an = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = an(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Fo(e, ...t) {
  let r, n, o, s = a;
  function a(l) {
    const c = t.reduce((d, f) => f(d), e());
    return r = To(c), n = r.cache.get, o = r.cache.set, s = i, i(l);
  }
  function i(l) {
    const c = n(l);
    if (c)
      return c;
    const d = Io(l, r);
    return o(l, d), d;
  }
  return function() {
    return s(Do.apply(null, arguments));
  };
}
const $ = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, cn = /^\[(?:([a-z-]+):)?(.+)\]$/i, $o = /^\d+\/\d+$/, Bo = /* @__PURE__ */ new Set(["px", "full", "screen"]), Wo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, zo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Vo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, jo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ho = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, fe = (e) => Fe(e) || Bo.has(e) || $o.test(e), me = (e) => je(e, "length", Qo), Fe = (e) => !!e && !Number.isNaN(Number(e)), Pt = (e) => je(e, "number", Fe), qe = (e) => !!e && Number.isInteger(Number(e)), Uo = (e) => e.endsWith("%") && Fe(e.slice(0, -1)), O = (e) => cn.test(e), ve = (e) => Wo.test(e), Go = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Xo = (e) => je(e, Go, ln), Yo = (e) => je(e, "position", ln), Ko = /* @__PURE__ */ new Set(["image", "url"]), Zo = (e) => je(e, Ko, es), qo = (e) => je(e, "", Jo), Qe = () => !0, je = (e, t, r) => {
  const n = cn.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Qo = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  zo.test(e) && !Vo.test(e)
), ln = () => !1, Jo = (e) => jo.test(e), es = (e) => Ho.test(e), ts = () => {
  const e = $("colors"), t = $("spacing"), r = $("blur"), n = $("brightness"), o = $("borderColor"), s = $("borderRadius"), a = $("borderSpacing"), i = $("borderWidth"), l = $("contrast"), c = $("grayscale"), d = $("hueRotate"), f = $("invert"), p = $("gap"), b = $("gradientColorStops"), m = $("gradientColorStopPositions"), g = $("inset"), h = $("margin"), v = $("opacity"), x = $("padding"), w = $("saturate"), y = $("scale"), _ = $("sepia"), S = $("skew"), E = $("space"), R = $("translate"), M = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", O, t], A = () => [O, t], L = () => ["", fe, me], k = () => ["auto", Fe, O], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], T = () => ["solid", "dashed", "dotted", "double", "none"], I = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], F = () => ["", "0", O], j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], z = () => [Fe, O];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Qe],
      spacing: [fe, me],
      blur: ["none", "", ve, O],
      brightness: z(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ve, O],
      borderSpacing: A(),
      borderWidth: L(),
      contrast: z(),
      grayscale: F(),
      hueRotate: z(),
      invert: F(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Uo, me],
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
        columns: [ve]
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
        z: ["auto", qe, O]
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
        order: ["first", "last", "none", qe, O]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Qe]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", qe, O]
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
        "grid-rows": [Qe]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [qe, O]
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
          screen: [ve]
        }, ve]
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
        text: ["base", ve, me]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Pt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Qe]
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
        "line-clamp": ["none", Fe, Pt]
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
        decoration: ["auto", "from-font", fe, me]
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
        bg: [...W(), Yo]
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
        bg: ["auto", "cover", "contain", Xo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Zo]
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
        outline: [fe, me]
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
        "ring-offset": [fe, me]
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
        shadow: ["", "inner", "none", ve, qo]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Qe]
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
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ve, O]
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
        "backdrop-contrast": [l]
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
        rotate: [qe, O]
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
        stroke: [fe, me, Pt]
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
}, rs = /* @__PURE__ */ Fo(ts);
function ge(...e) {
  return rs(Qr(e));
}
const ns = Se(
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
), os = (e) => e ? e === !0 || e === "down" ? /* @__PURE__ */ C(en, { className: "size-4" }) : e === "up" ? /* @__PURE__ */ C(tn, { className: "size-4" }) : e === "select" ? /* @__PURE__ */ C(Jr, { className: "size-4" }) : null : null, yr = () => /* @__PURE__ */ C(rn, { className: "size-4 animate-spin" }), ss = u.forwardRef(
  ({
    children: e,
    size: t = "medium",
    textAlign: r = "center",
    fullWidth: n = !1,
    disclosure: o,
    removeUnderline: s,
    icon: a,
    dataPrimaryLink: i,
    tone: l = "default",
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
    const ee = !!f, ce = F ? xo : ee ? "a" : "button", U = v, le = h || U, K = os(o), H = ge(
      ns({
        variant: c,
        size: t,
        tone: l === "critical" ? "critical" : l === "success" ? "success" : "default",
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
          U && /* @__PURE__ */ C(yr, {}),
          e && /* @__PURE__ */ C("span", { className: "inline-flex", children: e }),
          K && !U && /* @__PURE__ */ C("span", { className: "inline-flex shrink-0", children: K })
        ]
      }
    ) : /* @__PURE__ */ re(ce, { ...te, type: g ? "submit" : "button", children: [
      a && !U && /* @__PURE__ */ C("span", { className: "inline-flex shrink-0", children: a }),
      U && /* @__PURE__ */ C(yr, {}),
      e && /* @__PURE__ */ C("span", { className: "inline-flex", children: e }),
      K && !U && /* @__PURE__ */ C("span", { className: "inline-flex shrink-0", children: K })
    ] });
  }
);
ss.displayName = "Button";
const is = Se("flex items-center", {
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
}), as = u.forwardRef(
  ({
    children: e,
    gap: t = "tight",
    variant: r,
    fullWidth: n = !1,
    connectedTop: o = !1,
    noWrap: s = !1,
    className: a,
    ...i
  }, l) => {
    const c = ge(
      is({
        gap: r === "segmented" ? void 0 : t,
        variant: r,
        fullWidth: n,
        connectedTop: o,
        noWrap: s
      }),
      a
    );
    return /* @__PURE__ */ C("div", { className: c, ref: l, ...i, children: e });
  }
);
as.displayName = "ButtonGroup";
const cs = (e) => e && {
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
}[e] || "", wr = (e) => e ? e === "transparent" ? "border-transparent" : {
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
}[e] || "" : "", ls = (e) => e && {
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
}[e] || "", _r = (e) => e && {
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
}[e] || "", us = (e) => e && {
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
}[e] || "", Cr = (e) => e && {
  0: "border-0",
  "0165": "border-[0.66px]",
  "025": "border",
  "050": "border-2",
  100: "border-4"
}[e] || "", ds = (e) => e && {
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
    const n = _r(e);
    return n ? `${t}-${n}` : "";
  }
  const r = [];
  return Object.entries(e).forEach(([n, o]) => {
    const s = _r(o);
    if (s) {
      const a = n === "xs" ? "" : `${n}:`;
      r.push(`${a}${t}-${s}`);
    }
  }), r.join(" ");
}, ot = (e, t) => {
  const n = {
    0: "0",
    "0165": "[0.66px]",
    "025": "",
    "050": "2",
    100: "4"
  }[e];
  return n ? `border-${t}-${n}` : `border-${t}`;
}, st = (e, t) => {
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
}, fs = Se("", {
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
}), gs = u.forwardRef(
  ({
    children: e,
    as: t = "div",
    background: r,
    borderColor: n,
    borderStyle: o,
    borderRadius: s,
    borderEndStartRadius: a,
    borderEndEndRadius: i,
    borderStartStartRadius: l,
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
  }, Pe) => {
    const ke = t, Z = ge(
      fs({
        visuallyHidden: H,
        printHidden: K
      }),
      // Background
      cs(r),
      // Border
      wr(n),
      o === "dashed" ? "border-dashed" : "border-solid",
      us(s),
      Cr(d),
      // Individual border widths
      f && ot(f, "t"),
      p && ot(p, "b"),
      b && ot(b, "l"),
      m && ot(m, "r"),
      // Individual border radius
      a && st(a, "bl"),
      i && st(i, "br"),
      l && st(l, "tl"),
      c && st(c, "tr"),
      // Text color
      ls(g),
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
      ds(k),
      // Position
      I && `${I}`,
      // Inset (positioning)
      q(P, "top"),
      q(F, "bottom"),
      q(j, "left"),
      q(z, "right"),
      // Outline
      ce && wr(ce).replace("border-", "outline-"),
      U === "dashed" ? "outline-dashed" : U === "solid" ? "outline-solid" : "",
      le && Cr(le).replace("border-", "outline-"),
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
        ref: Pe,
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
gs.displayName = "Box";
const ps = Se("", {
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
}), bs = u.forwardRef(
  ({
    children: e,
    as: t = "span",
    alignment: r,
    breakWord: n = !1,
    tone: o,
    fontWeight: s,
    id: a,
    numeric: i = !1,
    truncate: l = !1,
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
      className: ge(
        ps({
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
          truncate: l,
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
bs.displayName = "Text";
const hs = Se(
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
), ms = () => {
  const [e] = u.useState(
    () => Math.random().toString(36).substring(2, 11)
  );
  return e;
}, vs = (e) => {
  if (e)
    return typeof e == "number" ? e : 3;
}, xs = (e) => {
  if (e)
    return e || typeof e == "number" && e > 0 ? { "aria-multiline": !0 } : void 0;
}, Er = (e) => `${e}Label`, Sr = (e) => `${e}HelpText`, ys = u.forwardRef(
  ({
    prefix: e,
    suffix: t,
    verticalContent: r,
    placeholder: n,
    value: o = "",
    helpText: s,
    label: a,
    labelAction: i,
    labelHidden: l = !1,
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
    autoSize: Pe = !1,
    loading: ke = !1,
    onClearButtonClick: Z,
    onChange: ue,
    onSpinnerChange: rr,
    onFocus: Ge,
    onBlur: Xe,
    className: Et,
    ...Me
  }, Ye) => {
    const so = ms(), V = y ?? so, [io, nr] = u.useState(!!b), St = u.useRef(null), or = u.useRef(null), sr = u.useRef(null), nt = u.useCallback(() => m ? or.current : St.current, [m]);
    u.useEffect(() => {
      const B = nt();
      !B || b === void 0 || (b ? B.focus() : B.blur());
    }, [b, nt]), u.useEffect(() => {
      const B = St.current;
      !B || !(x === "text" || x === "tel" || x === "search" || x === "url" || x === "password") || !H || B.setSelectionRange(o.length, H.length);
    }, [io, o, x, H]);
    const At = H || o, ao = x === "currency" ? "text" : x, co = ge(
      hs({
        size: Oe,
        variant: te,
        align: ce,
        tone: Ne,
        error: !!g,
        monospaced: le,
        multiline: !!m
      }),
      Pe && "w-auto min-w-0",
      Et
    ), ir = u.useCallback(
      (B) => {
        ue && ue(B.currentTarget.value, V);
      },
      [ue, V]
    ), lo = u.useCallback(
      (B) => {
        if (nr(!0), K && !H) {
          const de = nt();
          de == null || de.select();
        }
        Ge && Ge(B);
      },
      [K, H, nt, Ge]
    ), uo = u.useCallback(
      (B) => {
        var de;
        nr(!1), !((de = sr.current) != null && de.contains(B == null ? void 0 : B.relatedTarget)) && Xe && Xe(B);
      },
      [Xe]
    ), fo = u.useCallback(() => {
      Z && Z(V);
    }, [Z, V]), Ke = [];
    g && Ke.push(`${V}Error`), s && Ke.push(Sr(V)), ee && Ke.push(`${V}-CharacterCounter`);
    const Ze = [];
    e && Ze.push(`${V}-Prefix`), t && Ze.push(`${V}-Suffix`), r && Ze.push(`${V}-VerticalContent`), Ze.unshift(Er(V));
    let ar = null;
    if (ee) {
      const B = At.length, de = N ? `${B}/${N}` : B;
      ar = /* @__PURE__ */ C(
        "div",
        {
          id: `${V}-CharacterCounter`,
          className: "text-xs text-muted-foreground mt-1",
          children: de
        }
      );
    }
    const cr = d && At !== "" ? /* @__PURE__ */ C(
      "button",
      {
        type: "button",
        className: "absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground focus:outline-hidden focus:ring-3 focus:ring-ring focus:ring-offset-2 rounded-sm",
        onClick: fo,
        tabIndex: -1,
        "aria-label": "Clear",
        children: /* @__PURE__ */ C(nn, { className: "h-4 w-4" })
      }
    ) : null, lr = e ? /* @__PURE__ */ C(
      "div",
      {
        id: `${V}-Prefix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-r border-input bg-muted/50",
        children: e
      }
    ) : null, ur = t ? /* @__PURE__ */ C(
      "div",
      {
        id: `${V}-Suffix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-l border-input bg-muted/50",
        children: t
      }
    ) : null, dr = ke ? /* @__PURE__ */ C("div", { className: "absolute right-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ C("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-foreground" }) }) : null, go = l ? null : /* @__PURE__ */ re(
      "label",
      {
        id: Er(V),
        htmlFor: V,
        className: ge(
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
    ), po = s ? /* @__PURE__ */ C("div", { id: Sr(V), className: "text-xs text-muted-foreground mt-1", children: s }) : null, bo = g && typeof g != "boolean" ? /* @__PURE__ */ C(
      "div",
      {
        id: `${V}Error`,
        className: "text-xs text-destructive mt-1",
        role: "alert",
        children: g
      }
    ) : null, fr = r ? /* @__PURE__ */ C(
      "div",
      {
        id: `${V}-VerticalContent`,
        className: "text-sm text-muted-foreground mb-2",
        children: r
      }
    ) : null, gr = {
      ...D && { maxHeight: D }
    }, pr = u.createElement(m ? "textarea" : "input", {
      ref: u.useCallback(
        (B) => {
          m ? or.current = B : St.current = B, typeof Ye == "function" ? Ye(B) : Ye && (Ye.current = B);
        },
        [m, Ye]
      ),
      id: V,
      name: w,
      type: ao,
      value: At,
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
      rows: vs(m),
      size: Pe ? 1 : void 0,
      style: Object.keys(gr).length > 0 ? gr : void 0,
      className: co,
      "aria-describedby": Ke.length ? Ke.join(" ") : void 0,
      "aria-labelledby": Ze.join(" "),
      "aria-invalid": !!g,
      "aria-owns": I,
      "aria-activedescendant": j,
      "aria-autocomplete": z,
      "aria-controls": P,
      "aria-expanded": F,
      "aria-required": U,
      ...xs(m),
      onChange: H ? void 0 : ir,
      onInput: H ? ir : void 0,
      onFocus: lo,
      onBlur: uo,
      // Password manager disable attributes
      "data-1p-ignore": R === "off" || void 0,
      "data-lpignore": R === "off" || void 0,
      "data-form-type": R === "off" ? "other" : void 0,
      ...Me
    });
    return /* @__PURE__ */ re("div", { ref: sr, className: "space-y-2", children: [
      go,
      v || h ? /* @__PURE__ */ re("div", { className: "flex", children: [
        v,
        /* @__PURE__ */ re("div", { className: "flex-1 relative", children: [
          fr,
          /* @__PURE__ */ re("div", { className: "relative flex", children: [
            lr,
            pr,
            ur,
            cr,
            dr
          ] })
        ] }),
        h
      ] }) : /* @__PURE__ */ re("div", { className: "relative", children: [
        fr,
        /* @__PURE__ */ re("div", { className: "relative flex", children: [
          lr,
          pr,
          ur,
          cr,
          dr
        ] })
      ] }),
      bo,
      po,
      ar
    ] });
  }
);
ys.displayName = "TextField";
function ye(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function un(e, t = []) {
  let r = [];
  function n(s, a) {
    const i = u.createContext(a), l = r.length;
    r = [...r, a];
    const c = (f) => {
      var v;
      const { scope: p, children: b, ...m } = f, g = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[l]) || i, h = u.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ C(g.Provider, { value: h, children: b });
    };
    c.displayName = s + "Provider";
    function d(f, p) {
      var g;
      const b = ((g = p == null ? void 0 : p[e]) == null ? void 0 : g[l]) || i, m = u.useContext(b);
      if (m) return m;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [c, d];
  }
  const o = () => {
    const s = r.map((a) => u.createContext(a));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || s;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: l } }),
        [i, l]
      );
    };
  };
  return o.scopeName = e, [n, ws(o, ...t)];
}
function ws(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = n.reduce((i, { useScope: l, scopeName: c }) => {
        const f = l(s)[`__scope${c}`];
        return { ...i, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var _s = [
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
], he = _s.reduce((e, t) => {
  const r = /* @__PURE__ */ jt(`Primitive.${t}`), n = u.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, l = a ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ C(l, { ...i, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Cs(e, t) {
  e && Kr.flushSync(() => e.dispatchEvent(t));
}
function We(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function Es(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = We(e);
  u.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Ss = "DismissableLayer", $t = "dismissableLayer.update", As = "dismissableLayer.pointerDownOutside", Ps = "dismissableLayer.focusOutside", Ar, dn = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), fn = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...l
    } = e, c = u.useContext(dn), [d, f] = u.useState(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, b] = u.useState({}), m = Ee(t, (E) => f(E)), g = Array.from(c.layers), [h] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(h), x = d ? g.indexOf(d) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, y = x >= v, _ = Ns((E) => {
      const R = E.target, M = [...c.branches].some((N) => N.contains(R));
      !y || M || (o == null || o(E), a == null || a(E), E.defaultPrevented || i == null || i());
    }, p), S = ks((E) => {
      const R = E.target;
      [...c.branches].some((N) => N.contains(R)) || (s == null || s(E), a == null || a(E), E.defaultPrevented || i == null || i());
    }, p);
    return Es((E) => {
      x === c.layers.size - 1 && (n == null || n(E), !E.defaultPrevented && i && (E.preventDefault(), i()));
    }, p), u.useEffect(() => {
      if (d)
        return r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Ar = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), Pr(), () => {
          r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Ar);
        };
    }, [d, p, r, c]), u.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Pr());
    }, [d, c]), u.useEffect(() => {
      const E = () => b({});
      return document.addEventListener($t, E), () => document.removeEventListener($t, E);
    }, []), /* @__PURE__ */ C(
      he.div,
      {
        ...l,
        ref: m,
        style: {
          pointerEvents: w ? y ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ye(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: ye(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: ye(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
fn.displayName = Ss;
var Rs = "DismissableLayerBranch", Os = u.forwardRef((e, t) => {
  const r = u.useContext(dn), n = u.useRef(null), o = Ee(t, n);
  return u.useEffect(() => {
    const s = n.current;
    if (s)
      return r.branches.add(s), () => {
        r.branches.delete(s);
      };
  }, [r.branches]), /* @__PURE__ */ C(he.div, { ...e, ref: o });
});
Os.displayName = Rs;
function Ns(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = We(e), n = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const s = (i) => {
      if (i.target && !n.current) {
        let l = function() {
          gn(
            As,
            r,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
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
function ks(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = We(e), n = u.useRef(!1);
  return u.useEffect(() => {
    const o = (s) => {
      s.target && !n.current && gn(Ps, r, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Pr() {
  const e = new CustomEvent($t);
  document.dispatchEvent(e);
}
function gn(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Cs(o, s) : o.dispatchEvent(s);
}
var Rt = 0;
function Ms() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Rr()), document.body.insertAdjacentElement("beforeend", e[1] ?? Rr()), Rt++, () => {
      Rt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Rt--;
    };
  }, []);
}
function Rr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ot = "focusScope.autoFocusOnMount", Nt = "focusScope.autoFocusOnUnmount", Or = { bubbles: !1, cancelable: !0 }, Ts = "FocusScope", pn = u.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, l] = u.useState(null), c = We(o), d = We(s), f = u.useRef(null), p = Ee(t, (g) => l(g)), b = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (n) {
      let g = function(w) {
        if (b.paused || !i) return;
        const y = w.target;
        i.contains(y) ? f.current = y : xe(f.current, { select: !0 });
      }, h = function(w) {
        if (b.paused || !i) return;
        const y = w.relatedTarget;
        y !== null && (i.contains(y) || xe(f.current, { select: !0 }));
      }, v = function(w) {
        if (document.activeElement === document.body)
          for (const _ of w)
            _.removedNodes.length > 0 && xe(i);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", h);
      const x = new MutationObserver(v);
      return i && x.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", h), x.disconnect();
      };
    }
  }, [n, i, b.paused]), u.useEffect(() => {
    if (i) {
      kr.add(b);
      const g = document.activeElement;
      if (!i.contains(g)) {
        const v = new CustomEvent(Ot, Or);
        i.addEventListener(Ot, c), i.dispatchEvent(v), v.defaultPrevented || (Ls(Bs(bn(i)), { select: !0 }), document.activeElement === g && xe(i));
      }
      return () => {
        i.removeEventListener(Ot, c), setTimeout(() => {
          const v = new CustomEvent(Nt, Or);
          i.addEventListener(Nt, d), i.dispatchEvent(v), v.defaultPrevented || xe(g ?? document.body, { select: !0 }), i.removeEventListener(Nt, d), kr.remove(b);
        }, 0);
      };
    }
  }, [i, c, d, b]);
  const m = u.useCallback(
    (g) => {
      if (!r && !n || b.paused) return;
      const h = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, v = document.activeElement;
      if (h && v) {
        const x = g.currentTarget, [w, y] = Is(x);
        w && y ? !g.shiftKey && v === y ? (g.preventDefault(), r && xe(w, { select: !0 })) : g.shiftKey && v === w && (g.preventDefault(), r && xe(y, { select: !0 })) : v === x && g.preventDefault();
      }
    },
    [r, n, b.paused]
  );
  return /* @__PURE__ */ C(he.div, { tabIndex: -1, ...a, ref: p, onKeyDown: m });
});
pn.displayName = Ts;
function Ls(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (xe(n, { select: t }), document.activeElement !== r) return;
}
function Is(e) {
  const t = bn(e), r = Nr(t, e), n = Nr(t.reverse(), e);
  return [r, n];
}
function bn(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Nr(e, t) {
  for (const r of e)
    if (!Ds(r, { upTo: t })) return r;
}
function Ds(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Fs(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function xe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && Fs(e) && t && e.select();
  }
}
var kr = $s();
function $s() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = Mr(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = Mr(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function Mr(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function Bs(e) {
  return e.filter((t) => t.tagName !== "A");
}
var we = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, Ws = u[" useId ".trim().toString()] || (() => {
}), zs = 0;
function Vs(e) {
  const [t, r] = u.useState(Ws());
  return we(() => {
    r((n) => n ?? String(zs++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const js = ["top", "right", "bottom", "left"], _e = Math.min, G = Math.max, bt = Math.round, it = Math.floor, se = (e) => ({
  x: e,
  y: e
}), Hs = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Us = {
  start: "end",
  end: "start"
};
function Bt(e, t, r) {
  return G(e, _e(t, r));
}
function pe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function be(e) {
  return e.split("-")[0];
}
function He(e) {
  return e.split("-")[1];
}
function Ut(e) {
  return e === "x" ? "y" : "x";
}
function Gt(e) {
  return e === "y" ? "height" : "width";
}
const Gs = /* @__PURE__ */ new Set(["top", "bottom"]);
function oe(e) {
  return Gs.has(be(e)) ? "y" : "x";
}
function Xt(e) {
  return Ut(oe(e));
}
function Xs(e, t, r) {
  r === void 0 && (r = !1);
  const n = He(e), o = Xt(e), s = Gt(o);
  let a = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = ht(a)), [a, ht(a)];
}
function Ys(e) {
  const t = ht(e);
  return [Wt(e), t, Wt(t)];
}
function Wt(e) {
  return e.replace(/start|end/g, (t) => Us[t]);
}
const Tr = ["left", "right"], Lr = ["right", "left"], Ks = ["top", "bottom"], Zs = ["bottom", "top"];
function qs(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Lr : Tr : t ? Tr : Lr;
    case "left":
    case "right":
      return t ? Ks : Zs;
    default:
      return [];
  }
}
function Qs(e, t, r, n) {
  const o = He(e);
  let s = qs(be(e), r === "start", n);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(Wt)))), s;
}
function ht(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Hs[t]);
}
function Js(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function hn(e) {
  return typeof e != "number" ? Js(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function mt(e) {
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
function Ir(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const s = oe(t), a = Xt(t), i = Gt(a), l = be(t), c = s === "y", d = n.x + n.width / 2 - o.width / 2, f = n.y + n.height / 2 - o.height / 2, p = n[i] / 2 - o[i] / 2;
  let b;
  switch (l) {
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
  switch (He(t)) {
    case "start":
      b[a] -= p * (r && c ? -1 : 1);
      break;
    case "end":
      b[a] += p * (r && c ? -1 : 1);
      break;
  }
  return b;
}
const ei = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = r, i = s.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let c = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = Ir(c, n, l), p = n, b = {}, m = 0;
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
    } = Ir(c, p, l)), g = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: b
  };
};
async function Je(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: s,
    rects: a,
    elements: i,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: b = 0
  } = pe(t, e), m = hn(b), h = i[p ? f === "floating" ? "reference" : "floating" : f], v = mt(await s.getClippingRect({
    element: (r = await (s.isElement == null ? void 0 : s.isElement(h))) == null || r ? h : h.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
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
  }, _ = mt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: x,
    offsetParent: w,
    strategy: l
  }) : x);
  return {
    top: (v.top - _.top + m.top) / y.y,
    bottom: (_.bottom - v.bottom + m.bottom) / y.y,
    left: (v.left - _.left + m.left) / y.x,
    right: (_.right - v.right + m.right) / y.x
  };
}
const ti = (e) => ({
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
      middlewareData: l
    } = t, {
      element: c,
      padding: d = 0
    } = pe(e, t) || {};
    if (c == null)
      return {};
    const f = hn(d), p = {
      x: r,
      y: n
    }, b = Xt(o), m = Gt(b), g = await a.getDimensions(c), h = b === "y", v = h ? "top" : "left", x = h ? "bottom" : "right", w = h ? "clientHeight" : "clientWidth", y = s.reference[m] + s.reference[b] - p[b] - s.floating[m], _ = p[b] - s.reference[b], S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let E = S ? S[w] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(S))) && (E = i.floating[w] || s.floating[m]);
    const R = y / 2 - _ / 2, M = E / 2 - g[m] / 2 - 1, N = _e(f[v], M), D = _e(f[x], M), A = N, L = E - g[m] - D, k = E / 2 - g[m] / 2 + R, W = Bt(A, k, L), T = !l.arrow && He(o) != null && k !== W && s.reference[m] / 2 - (k < A ? N : D) - g[m] / 2 < 0, I = T ? k < A ? k - A : k - L : 0;
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
}), ri = function(e) {
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
        platform: l,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: b = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...h
      } = pe(e, t);
      if ((r = s.arrow) != null && r.alignmentOffset)
        return {};
      const v = be(o), x = oe(i), w = be(i) === i, y = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), _ = p || (w || !g ? [ht(i)] : Ys(i)), S = m !== "none";
      !p && S && _.push(...Qs(i, g, m, y));
      const E = [i, ..._], R = await Je(t, h), M = [];
      let N = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (d && M.push(R[v]), f) {
        const k = Xs(o, a, y);
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
function Dr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Fr(e) {
  return js.some((t) => e[t] >= 0);
}
const ni = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = pe(e, t);
      switch (n) {
        case "referenceHidden": {
          const s = await Je(t, {
            ...o,
            elementContext: "reference"
          }), a = Dr(s, r.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Fr(a)
            }
          };
        }
        case "escaped": {
          const s = await Je(t, {
            ...o,
            altBoundary: !0
          }), a = Dr(s, r.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Fr(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, mn = /* @__PURE__ */ new Set(["left", "top"]);
async function oi(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), a = be(r), i = He(r), l = oe(r) === "y", c = mn.has(a) ? -1 : 1, d = s && l ? -1 : 1, f = pe(t, e);
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
  return i && typeof m == "number" && (b = i === "end" ? m * -1 : m), l ? {
    x: b * d,
    y: p * c
  } : {
    x: p * c,
    y: b * d
  };
}
const si = function(e) {
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
      } = t, l = await oi(t, e);
      return a === ((r = i.offset) == null ? void 0 : r.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, ii = function(e) {
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
        ...l
      } = pe(e, t), c = {
        x: r,
        y: n
      }, d = await Je(t, l), f = oe(be(o)), p = Ut(f);
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
}, ai = function(e) {
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
        mainAxis: l = !0,
        crossAxis: c = !0
      } = pe(e, t), d = {
        x: r,
        y: n
      }, f = oe(o), p = Ut(f);
      let b = d[p], m = d[f];
      const g = pe(i, t), h = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const w = p === "y" ? "height" : "width", y = s.reference[p] - s.floating[w] + h.mainAxis, _ = s.reference[p] + s.reference[w] - h.mainAxis;
        b < y ? b = y : b > _ && (b = _);
      }
      if (c) {
        var v, x;
        const w = p === "y" ? "width" : "height", y = mn.has(be(o)), _ = s.reference[f] - s.floating[w] + (y && ((v = a.offset) == null ? void 0 : v[f]) || 0) + (y ? 0 : h.crossAxis), S = s.reference[f] + s.reference[w] + (y ? 0 : ((x = a.offset) == null ? void 0 : x[f]) || 0) - (y ? h.crossAxis : 0);
        m < _ ? m = _ : m > S && (m = S);
      }
      return {
        [p]: b,
        [f]: m
      };
    }
  };
}, ci = function(e) {
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
        apply: l = () => {
        },
        ...c
      } = pe(e, t), d = await Je(t, c), f = be(o), p = He(o), b = oe(o) === "y", {
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
      await l({
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
function xt() {
  return typeof window < "u";
}
function Ue(e) {
  return vn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function X(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ae(e) {
  var t;
  return (t = (vn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vn(e) {
  return xt() ? e instanceof Node || e instanceof X(e).Node : !1;
}
function Q(e) {
  return xt() ? e instanceof Element || e instanceof X(e).Element : !1;
}
function ie(e) {
  return xt() ? e instanceof HTMLElement || e instanceof X(e).HTMLElement : !1;
}
function $r(e) {
  return !xt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof X(e).ShadowRoot;
}
const li = /* @__PURE__ */ new Set(["inline", "contents"]);
function tt(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = J(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !li.has(o);
}
const ui = /* @__PURE__ */ new Set(["table", "td", "th"]);
function di(e) {
  return ui.has(Ue(e));
}
const fi = [":popover-open", ":modal"];
function yt(e) {
  return fi.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const gi = ["transform", "translate", "scale", "rotate", "perspective"], pi = ["transform", "translate", "scale", "rotate", "perspective", "filter"], bi = ["paint", "layout", "strict", "content"];
function Yt(e) {
  const t = Kt(), r = Q(e) ? J(e) : e;
  return gi.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || pi.some((n) => (r.willChange || "").includes(n)) || bi.some((n) => (r.contain || "").includes(n));
}
function hi(e) {
  let t = Ce(e);
  for (; ie(t) && !ze(t); ) {
    if (Yt(t))
      return t;
    if (yt(t))
      return null;
    t = Ce(t);
  }
  return null;
}
function Kt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const mi = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ze(e) {
  return mi.has(Ue(e));
}
function J(e) {
  return X(e).getComputedStyle(e);
}
function wt(e) {
  return Q(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ce(e) {
  if (Ue(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    $r(e) && e.host || // Fallback.
    ae(e)
  );
  return $r(t) ? t.host : t;
}
function xn(e) {
  const t = Ce(e);
  return ze(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ie(t) && tt(t) ? t : xn(t);
}
function et(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = xn(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = X(o);
  if (s) {
    const i = zt(a);
    return t.concat(a, a.visualViewport || [], tt(o) ? o : [], i && r ? et(i) : []);
  }
  return t.concat(o, et(o, [], r));
}
function zt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function yn(e) {
  const t = J(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = ie(e), s = o ? e.offsetWidth : r, a = o ? e.offsetHeight : n, i = bt(r) !== s || bt(n) !== a;
  return i && (r = s, n = a), {
    width: r,
    height: n,
    $: i
  };
}
function Zt(e) {
  return Q(e) ? e : e.contextElement;
}
function $e(e) {
  const t = Zt(e);
  if (!ie(t))
    return se(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = yn(t);
  let a = (s ? bt(r.width) : r.width) / n, i = (s ? bt(r.height) : r.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const vi = /* @__PURE__ */ se(0);
function wn(e) {
  const t = X(e);
  return !Kt() || !t.visualViewport ? vi : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function xi(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== X(e) ? !1 : t;
}
function Re(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), s = Zt(e);
  let a = se(1);
  t && (n ? Q(n) && (a = $e(n)) : a = $e(e));
  const i = xi(s, r, n) ? wn(s) : se(0);
  let l = (o.left + i.x) / a.x, c = (o.top + i.y) / a.y, d = o.width / a.x, f = o.height / a.y;
  if (s) {
    const p = X(s), b = n && Q(n) ? X(n) : n;
    let m = p, g = zt(m);
    for (; g && n && b !== m; ) {
      const h = $e(g), v = g.getBoundingClientRect(), x = J(g), w = v.left + (g.clientLeft + parseFloat(x.paddingLeft)) * h.x, y = v.top + (g.clientTop + parseFloat(x.paddingTop)) * h.y;
      l *= h.x, c *= h.y, d *= h.x, f *= h.y, l += w, c += y, m = X(g), g = zt(m);
    }
  }
  return mt({
    width: d,
    height: f,
    x: l,
    y: c
  });
}
function qt(e, t) {
  const r = wt(e).scrollLeft;
  return t ? t.left + r : Re(ae(e)).left + r;
}
function _n(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    qt(e, n)
  )), s = n.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function yi(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const s = o === "fixed", a = ae(n), i = t ? yt(t.floating) : !1;
  if (n === a || i && s)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = se(1);
  const d = se(0), f = ie(n);
  if ((f || !f && !s) && ((Ue(n) !== "body" || tt(a)) && (l = wt(n)), ie(n))) {
    const b = Re(n);
    c = $e(n), d.x = b.x + n.clientLeft, d.y = b.y + n.clientTop;
  }
  const p = a && !f && !s ? _n(a, l, !0) : se(0);
  return {
    width: r.width * c.x,
    height: r.height * c.y,
    x: r.x * c.x - l.scrollLeft * c.x + d.x + p.x,
    y: r.y * c.y - l.scrollTop * c.y + d.y + p.y
  };
}
function wi(e) {
  return Array.from(e.getClientRects());
}
function _i(e) {
  const t = ae(e), r = wt(e), n = e.ownerDocument.body, o = G(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = G(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -r.scrollLeft + qt(e);
  const i = -r.scrollTop;
  return J(n).direction === "rtl" && (a += G(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
function Ci(e, t) {
  const r = X(e), n = ae(e), o = r.visualViewport;
  let s = n.clientWidth, a = n.clientHeight, i = 0, l = 0;
  if (o) {
    s = o.width, a = o.height;
    const c = Kt();
    (!c || c && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: i,
    y: l
  };
}
const Ei = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Si(e, t) {
  const r = Re(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, s = ie(e) ? $e(e) : se(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, l = o * s.x, c = n * s.y;
  return {
    width: a,
    height: i,
    x: l,
    y: c
  };
}
function Br(e, t, r) {
  let n;
  if (t === "viewport")
    n = Ci(e, r);
  else if (t === "document")
    n = _i(ae(e));
  else if (Q(t))
    n = Si(t, r);
  else {
    const o = wn(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return mt(n);
}
function Cn(e, t) {
  const r = Ce(e);
  return r === t || !Q(r) || ze(r) ? !1 : J(r).position === "fixed" || Cn(r, t);
}
function Ai(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = et(e, [], !1).filter((i) => Q(i) && Ue(i) !== "body"), o = null;
  const s = J(e).position === "fixed";
  let a = s ? Ce(e) : e;
  for (; Q(a) && !ze(a); ) {
    const i = J(a), l = Yt(a);
    !l && i.position === "fixed" && (o = null), (s ? !l && !o : !l && i.position === "static" && !!o && Ei.has(o.position) || tt(a) && !l && Cn(e, a)) ? n = n.filter((d) => d !== a) : o = i, a = Ce(a);
  }
  return t.set(e, n), n;
}
function Pi(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const a = [...r === "clippingAncestors" ? yt(t) ? [] : Ai(t, this._c) : [].concat(r), n], i = a[0], l = a.reduce((c, d) => {
    const f = Br(t, d, o);
    return c.top = G(f.top, c.top), c.right = _e(f.right, c.right), c.bottom = _e(f.bottom, c.bottom), c.left = G(f.left, c.left), c;
  }, Br(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Ri(e) {
  const {
    width: t,
    height: r
  } = yn(e);
  return {
    width: t,
    height: r
  };
}
function Oi(e, t, r) {
  const n = ie(t), o = ae(t), s = r === "fixed", a = Re(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = se(0);
  function c() {
    l.x = qt(o);
  }
  if (n || !n && !s)
    if ((Ue(t) !== "body" || tt(o)) && (i = wt(t)), n) {
      const b = Re(t, !0, s, t);
      l.x = b.x + t.clientLeft, l.y = b.y + t.clientTop;
    } else o && c();
  s && !n && o && c();
  const d = o && !n && !s ? _n(o, i) : se(0), f = a.left + i.scrollLeft - l.x - d.x, p = a.top + i.scrollTop - l.y - d.y;
  return {
    x: f,
    y: p,
    width: a.width,
    height: a.height
  };
}
function kt(e) {
  return J(e).position === "static";
}
function Wr(e, t) {
  if (!ie(e) || J(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return ae(e) === r && (r = r.ownerDocument.body), r;
}
function En(e, t) {
  const r = X(e);
  if (yt(e))
    return r;
  if (!ie(e)) {
    let o = Ce(e);
    for (; o && !ze(o); ) {
      if (Q(o) && !kt(o))
        return o;
      o = Ce(o);
    }
    return r;
  }
  let n = Wr(e, t);
  for (; n && di(n) && kt(n); )
    n = Wr(n, t);
  return n && ze(n) && kt(n) && !Yt(n) ? r : n || hi(e) || r;
}
const Ni = async function(e) {
  const t = this.getOffsetParent || En, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Oi(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function ki(e) {
  return J(e).direction === "rtl";
}
const Mi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: yi,
  getDocumentElement: ae,
  getClippingRect: Pi,
  getOffsetParent: En,
  getElementRects: Ni,
  getClientRects: wi,
  getDimensions: Ri,
  getScale: $e,
  isElement: Q,
  isRTL: ki
};
function Sn(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ti(e, t) {
  let r = null, n;
  const o = ae(e);
  function s() {
    var i;
    clearTimeout(n), (i = r) == null || i.disconnect(), r = null;
  }
  function a(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), s();
    const c = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: p,
      height: b
    } = c;
    if (i || t(), !p || !b)
      return;
    const m = it(f), g = it(o.clientWidth - (d + p)), h = it(o.clientHeight - (f + b)), v = it(d), w = {
      rootMargin: -m + "px " + -g + "px " + -h + "px " + -v + "px",
      threshold: G(0, _e(1, l)) || 1
    };
    let y = !0;
    function _(S) {
      const E = S[0].intersectionRatio;
      if (E !== l) {
        if (!y)
          return a();
        E ? a(!1, E) : n = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !Sn(c, e.getBoundingClientRect()) && a(), y = !1;
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
function Li(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = Zt(e), d = o || s ? [...c ? et(c) : [], ...et(t)] : [];
  d.forEach((v) => {
    o && v.addEventListener("scroll", r, {
      passive: !0
    }), s && v.addEventListener("resize", r);
  });
  const f = c && i ? Ti(c, r) : null;
  let p = -1, b = null;
  a && (b = new ResizeObserver((v) => {
    let [x] = v;
    x && x.target === c && b && (b.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = b) == null || w.observe(t);
    })), r();
  }), c && !l && b.observe(c), b.observe(t));
  let m, g = l ? Re(e) : null;
  l && h();
  function h() {
    const v = Re(e);
    g && !Sn(g, v) && r(), g = v, m = requestAnimationFrame(h);
  }
  return r(), () => {
    var v;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", r), s && x.removeEventListener("resize", r);
    }), f == null || f(), (v = b) == null || v.disconnect(), b = null, l && cancelAnimationFrame(m);
  };
}
const Ii = si, Di = ii, Fi = ri, $i = ci, Bi = ni, zr = ti, Wi = ai, zi = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Mi,
    ...r
  }, s = {
    ...o.platform,
    _c: n
  };
  return ei(e, t, {
    ...o,
    platform: s
  });
};
var Vi = typeof document < "u", ji = function() {
}, ft = Vi ? ho : ji;
function vt(e, t) {
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
        if (!vt(e[n], t[n]))
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
      if (!(s === "_owner" && e.$$typeof) && !vt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function An(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vr(e, t) {
  const r = An(e);
  return Math.round(t * r) / r;
}
function Mt(e) {
  const t = u.useRef(e);
  return ft(() => {
    t.current = e;
  }), t;
}
function Hi(e) {
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
    whileElementsMounted: l,
    open: c
  } = e, [d, f] = u.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, b] = u.useState(n);
  vt(p, n) || b(n);
  const [m, g] = u.useState(null), [h, v] = u.useState(null), x = u.useCallback((P) => {
    P !== S.current && (S.current = P, g(P));
  }, []), w = u.useCallback((P) => {
    P !== E.current && (E.current = P, v(P));
  }, []), y = s || m, _ = a || h, S = u.useRef(null), E = u.useRef(null), R = u.useRef(d), M = l != null, N = Mt(l), D = Mt(o), A = Mt(c), L = u.useCallback(() => {
    if (!S.current || !E.current)
      return;
    const P = {
      placement: t,
      strategy: r,
      middleware: p
    };
    D.current && (P.platform = D.current), zi(S.current, E.current, P).then((F) => {
      const j = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      k.current && !vt(R.current, j) && (R.current = j, Kr.flushSync(() => {
        f(j);
      }));
    });
  }, [p, t, r, D, A]);
  ft(() => {
    c === !1 && R.current.isPositioned && (R.current.isPositioned = !1, f((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [c]);
  const k = u.useRef(!1);
  ft(() => (k.current = !0, () => {
    k.current = !1;
  }), []), ft(() => {
    if (y && (S.current = y), _ && (E.current = _), y && _) {
      if (N.current)
        return N.current(y, _, L);
      L();
    }
  }, [y, _, L, N, M]);
  const W = u.useMemo(() => ({
    reference: S,
    floating: E,
    setReference: x,
    setFloating: w
  }), [x, w]), T = u.useMemo(() => ({
    reference: y,
    floating: _
  }), [y, _]), I = u.useMemo(() => {
    const P = {
      position: r,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return P;
    const F = Vr(T.floating, d.x), j = Vr(T.floating, d.y);
    return i ? {
      ...P,
      transform: "translate(" + F + "px, " + j + "px)",
      ...An(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: F,
      top: j
    };
  }, [r, i, T.floating, d.x, d.y]);
  return u.useMemo(() => ({
    ...d,
    update: L,
    refs: W,
    elements: T,
    floatingStyles: I
  }), [d, L, W, T, I]);
}
const Ui = (e) => {
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
      return n && t(n) ? n.current != null ? zr({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? zr({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, Gi = (e, t) => ({
  ...Ii(e),
  options: [e, t]
}), Xi = (e, t) => ({
  ...Di(e),
  options: [e, t]
}), Yi = (e, t) => ({
  ...Wi(e),
  options: [e, t]
}), Ki = (e, t) => ({
  ...Fi(e),
  options: [e, t]
}), Zi = (e, t) => ({
  ...$i(e),
  options: [e, t]
}), qi = (e, t) => ({
  ...Bi(e),
  options: [e, t]
}), Qi = (e, t) => ({
  ...Ui(e),
  options: [e, t]
});
var Ji = "Arrow", Pn = u.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ C(
    he.svg,
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
Pn.displayName = Ji;
var ea = Pn;
function ta(e) {
  const [t, r] = u.useState(void 0);
  return we(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let a, i;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
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
var Qt = "Popper", [Rn, On] = un(Qt), [ra, Nn] = Rn(Qt), kn = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = u.useState(null);
  return /* @__PURE__ */ C(ra, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
kn.displayName = Qt;
var Mn = "PopperAnchor", Tn = u.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, s = Nn(Mn, r), a = u.useRef(null), i = Ee(t, a);
    return u.useEffect(() => {
      s.onAnchorChange((n == null ? void 0 : n.current) || a.current);
    }), n ? null : /* @__PURE__ */ C(he.div, { ...o, ref: i });
  }
);
Tn.displayName = Mn;
var Jt = "PopperContent", [na, oa] = Rn(Jt), Ln = u.forwardRef(
  (e, t) => {
    var H, te, Oe, Ne, Pe, ke;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: d = 0,
      sticky: f = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: b = "optimized",
      onPlaced: m,
      ...g
    } = e, h = Nn(Jt, r), [v, x] = u.useState(null), w = Ee(t, (Z) => x(Z)), [y, _] = u.useState(null), S = ta(y), E = (S == null ? void 0 : S.width) ?? 0, R = (S == null ? void 0 : S.height) ?? 0, M = n + (s !== "center" ? "-" + s : ""), N = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, D = Array.isArray(c) ? c : [c], A = D.length > 0, L = {
      padding: N,
      boundary: D.filter(ia),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: A
    }, { refs: k, floatingStyles: W, placement: T, isPositioned: I, middlewareData: P } = Hi({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: M,
      whileElementsMounted: (...Z) => Li(...Z, {
        animationFrame: b === "always"
      }),
      elements: {
        reference: h.anchor
      },
      middleware: [
        Gi({ mainAxis: o + R, alignmentAxis: a }),
        l && Xi({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Yi() : void 0,
          ...L
        }),
        l && Ki({ ...L }),
        Zi({
          ...L,
          apply: ({ elements: Z, rects: ue, availableWidth: rr, availableHeight: Ge }) => {
            const { width: Xe, height: Et } = ue.reference, Me = Z.floating.style;
            Me.setProperty("--radix-popper-available-width", `${rr}px`), Me.setProperty("--radix-popper-available-height", `${Ge}px`), Me.setProperty("--radix-popper-anchor-width", `${Xe}px`), Me.setProperty("--radix-popper-anchor-height", `${Et}px`);
          }
        }),
        y && Qi({ element: y, padding: i }),
        aa({ arrowWidth: E, arrowHeight: R }),
        p && qi({ strategy: "referenceHidden", ...L })
      ]
    }), [F, j] = Fn(T), z = We(m);
    we(() => {
      I && (z == null || z());
    }, [I, z]);
    const ee = (H = P.arrow) == null ? void 0 : H.x, ce = (te = P.arrow) == null ? void 0 : te.y, U = ((Oe = P.arrow) == null ? void 0 : Oe.centerOffset) !== 0, [le, K] = u.useState();
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
            (Pe = P.transformOrigin) == null ? void 0 : Pe.y
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
          na,
          {
            scope: r,
            placedSide: F,
            onArrowChange: _,
            arrowX: ee,
            arrowY: ce,
            shouldHideArrow: U,
            children: /* @__PURE__ */ C(
              he.div,
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
Ln.displayName = Jt;
var In = "PopperArrow", sa = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Dn = u.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, s = oa(In, n), a = sa[s.placedSide];
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
          ea,
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
Dn.displayName = In;
function ia(e) {
  return e !== null;
}
var aa = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var h, v, x;
    const { placement: r, rects: n, middlewareData: o } = t, a = ((h = o.arrow) == null ? void 0 : h.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [c, d] = Fn(r), f = { start: "0%", center: "50%", end: "100%" }[d], p = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + i / 2, b = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + l / 2;
    let m = "", g = "";
    return c === "bottom" ? (m = a ? f : `${p}px`, g = `${-l}px`) : c === "top" ? (m = a ? f : `${p}px`, g = `${n.floating.height + l}px`) : c === "right" ? (m = `${-l}px`, g = a ? f : `${b}px`) : c === "left" && (m = `${n.floating.width + l}px`, g = a ? f : `${b}px`), { data: { x: m, y: g } };
  }
});
function Fn(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var ca = kn, $n = Tn, la = Ln, ua = Dn, da = "Portal", Bn = u.forwardRef((e, t) => {
  var i;
  const { container: r, ...n } = e, [o, s] = u.useState(!1);
  we(() => s(!0), []);
  const a = r || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? vo.createPortal(/* @__PURE__ */ C(he.div, { ...n, ref: t }), a) : null;
});
Bn.displayName = da;
function fa(e, t) {
  return u.useReducer((r, n) => t[r][n] ?? r, e);
}
var er = (e) => {
  const { present: t, children: r } = e, n = ga(t), o = typeof r == "function" ? r({ present: n.isPresent }) : u.Children.only(r), s = Ee(n.ref, pa(o));
  return typeof r == "function" || n.isPresent ? u.cloneElement(o, { ref: s }) : null;
};
er.displayName = "Presence";
function ga(e) {
  const [t, r] = u.useState(), n = u.useRef(null), o = u.useRef(e), s = u.useRef("none"), a = e ? "mounted" : "unmounted", [i, l] = fa(a, {
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
  return u.useEffect(() => {
    const c = at(n.current);
    s.current = i === "mounted" ? c : "none";
  }, [i]), we(() => {
    const c = n.current, d = o.current;
    if (d !== e) {
      const p = s.current, b = at(c);
      e ? l("MOUNT") : b === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && p !== b ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), we(() => {
    if (t) {
      let c;
      const d = t.ownerDocument.defaultView ?? window, f = (b) => {
        const g = at(n.current).includes(b.animationName);
        if (b.target === t && g && (l("ANIMATION_END"), !o.current)) {
          const h = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = h);
          });
        }
      }, p = (b) => {
        b.target === t && (s.current = at(n.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: u.useCallback((c) => {
      n.current = c ? getComputedStyle(c) : null, r(c);
    }, [])
  };
}
function at(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function pa(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var ba = u[" useInsertionEffect ".trim().toString()] || we;
function ha({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, s, a] = ma({
    defaultProp: t,
    onChange: r
  }), i = e !== void 0, l = i ? e : o;
  {
    const d = u.useRef(e !== void 0);
    u.useEffect(() => {
      const f = d.current;
      f !== i && console.warn(
        `${n} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = i;
    }, [i, n]);
  }
  const c = u.useCallback(
    (d) => {
      var f;
      if (i) {
        const p = va(d) ? d(e) : d;
        p !== e && ((f = a.current) == null || f.call(a, p));
      } else
        s(d);
    },
    [i, e, s, a]
  );
  return [l, c];
}
function ma({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = u.useState(e), o = u.useRef(r), s = u.useRef(t);
  return ba(() => {
    s.current = t;
  }, [t]), u.useEffect(() => {
    var a;
    o.current !== r && ((a = s.current) == null || a.call(s, r), o.current = r);
  }, [r, o]), [r, n, s];
}
function va(e) {
  return typeof e == "function";
}
var xa = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Te = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), lt = {}, Tt = 0, Wn = function(e) {
  return e && (e.host || Wn(e.parentNode));
}, ya = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Wn(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, wa = function(e, t, r, n) {
  var o = ya(t, Array.isArray(e) ? e : [e]);
  lt[r] || (lt[r] = /* @__PURE__ */ new WeakMap());
  var s = lt[r], a = [], i = /* @__PURE__ */ new Set(), l = new Set(o), c = function(f) {
    !f || i.has(f) || (i.add(f), c(f.parentNode));
  };
  o.forEach(c);
  var d = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        d(p);
      else
        try {
          var b = p.getAttribute(n), m = b !== null && b !== "false", g = (Te.get(p) || 0) + 1, h = (s.get(p) || 0) + 1;
          Te.set(p, g), s.set(p, h), a.push(p), g === 1 && m && ct.set(p, !0), h === 1 && p.setAttribute(r, "true"), m || p.setAttribute(n, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", p, v);
        }
    });
  };
  return d(t), i.clear(), Tt++, function() {
    a.forEach(function(f) {
      var p = Te.get(f) - 1, b = s.get(f) - 1;
      Te.set(f, p), s.set(f, b), p || (ct.has(f) || f.removeAttribute(n), ct.delete(f)), b || f.removeAttribute(r);
    }), Tt--, Tt || (Te = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), lt = {});
  };
}, _a = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = xa(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), wa(n, o, r, "aria-hidden")) : function() {
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
function zn(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function Ca(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, s; n < o; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var gt = "right-scroll-bar-position", pt = "width-before-scroll-bar", Ea = "with-scroll-bars-hidden", Sa = "--removed-body-scroll-bar-size";
function Lt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Aa(e, t) {
  var r = mo(function() {
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
var Pa = typeof window < "u" ? u.useLayoutEffect : u.useEffect, jr = /* @__PURE__ */ new WeakMap();
function Ra(e, t) {
  var r = Aa(null, function(n) {
    return e.forEach(function(o) {
      return Lt(o, n);
    });
  });
  return Pa(function() {
    var n = jr.get(r);
    if (n) {
      var o = new Set(n), s = new Set(e), a = r.current;
      o.forEach(function(i) {
        s.has(i) || Lt(i, null);
      }), s.forEach(function(i) {
        o.has(i) || Lt(i, a);
      });
    }
    jr.set(r, e);
  }, [e]), r;
}
function Oa(e) {
  return e;
}
function Na(e, t) {
  t === void 0 && (t = Oa);
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
      var l = function() {
        var d = a;
        a = [], d.forEach(s);
      }, c = function() {
        return Promise.resolve().then(l);
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
function ka(e) {
  e === void 0 && (e = {});
  var t = Na(null);
  return t.options = ne({ async: !0, ssr: !1 }, e), t;
}
var Vn = function(e) {
  var t = e.sideCar, r = zn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return u.createElement(n, ne({}, r));
};
Vn.isSideCarExport = !0;
function Ma(e, t) {
  return e.useMedium(t), Vn;
}
var jn = ka(), It = function() {
}, _t = u.forwardRef(function(e, t) {
  var r = u.useRef(null), n = u.useState({
    onScrollCapture: It,
    onWheelCapture: It,
    onTouchMoveCapture: It
  }), o = n[0], s = n[1], a = e.forwardProps, i = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, b = e.noRelative, m = e.noIsolation, g = e.inert, h = e.allowPinchZoom, v = e.as, x = v === void 0 ? "div" : v, w = e.gapMode, y = zn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = p, S = Ra([r, t]), E = ne(ne({}, y), o);
  return u.createElement(
    u.Fragment,
    null,
    d && u.createElement(_, { sideCar: jn, removeScrollBar: c, shards: f, noRelative: b, noIsolation: m, inert: g, setCallbacks: s, allowPinchZoom: !!h, lockRef: r, gapMode: w }),
    a ? u.cloneElement(u.Children.only(i), ne(ne({}, E), { ref: S })) : u.createElement(x, ne({}, E, { className: l, ref: S }), i)
  );
});
_t.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
_t.classNames = {
  fullWidth: pt,
  zeroRight: gt
};
var Ta = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function La() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ta();
  return t && e.setAttribute("nonce", t), e;
}
function Ia(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Da(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Fa = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = La()) && (Ia(t, r), Da(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, $a = function() {
  var e = Fa();
  return function(t, r) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Hn = function() {
  var e = $a(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, Ba = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Dt = function(e) {
  return parseInt(e || "", 10) || 0;
}, Wa = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Dt(r), Dt(n), Dt(o)];
}, za = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ba;
  var t = Wa(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Va = Hn(), Be = "data-scroll-locked", ja = function(e, t, r, n) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Ea, ` {
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
  
  .`).concat(gt, ` {
    right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(pt, ` {
    margin-right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(gt, " .").concat(gt, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(pt, " .").concat(pt, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Be, `] {
    `).concat(Sa, ": ").concat(i, `px;
  }
`);
}, Hr = function() {
  var e = parseInt(document.body.getAttribute(Be) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ha = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Be, (Hr() + 1).toString()), function() {
      var e = Hr() - 1;
      e <= 0 ? document.body.removeAttribute(Be) : document.body.setAttribute(Be, e.toString());
    };
  }, []);
}, Ua = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  Ha();
  var s = u.useMemo(function() {
    return za(o);
  }, [o]);
  return u.createElement(Va, { styles: ja(s, !t, o, r ? "" : "!important") });
}, Vt = !1;
if (typeof window < "u")
  try {
    var ut = Object.defineProperty({}, "passive", {
      get: function() {
        return Vt = !0, !0;
      }
    });
    window.addEventListener("test", ut, ut), window.removeEventListener("test", ut, ut);
  } catch {
    Vt = !1;
  }
var Le = Vt ? { passive: !1 } : !1, Ga = function(e) {
  return e.tagName === "TEXTAREA";
}, Un = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Ga(e) && r[t] === "visible")
  );
}, Xa = function(e) {
  return Un(e, "overflowY");
}, Ya = function(e) {
  return Un(e, "overflowX");
}, Ur = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Gn(e, n);
    if (o) {
      var s = Xn(e, n), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, Ka = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, Za = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Gn = function(e, t) {
  return e === "v" ? Xa(t) : Ya(t);
}, Xn = function(e, t) {
  return e === "v" ? Ka(t) : Za(t);
}, qa = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Qa = function(e, t, r, n, o) {
  var s = qa(e, window.getComputedStyle(t).direction), a = s * n, i = r.target, l = t.contains(i), c = !1, d = a > 0, f = 0, p = 0;
  do {
    if (!i)
      break;
    var b = Xn(e, i), m = b[0], g = b[1], h = b[2], v = g - h - s * m;
    (m || v) && Gn(e, i) && (f += v, p += m);
    var x = i.parentNode;
    i = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(p) < 1) && (c = !0), c;
}, dt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Gr = function(e) {
  return [e.deltaX, e.deltaY];
}, Xr = function(e) {
  return e && "current" in e ? e.current : e;
}, Ja = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ec = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, tc = 0, Ie = [];
function rc(e) {
  var t = u.useRef([]), r = u.useRef([0, 0]), n = u.useRef(), o = u.useState(tc++)[0], s = u.useState(Hn)[0], a = u.useRef(e);
  u.useEffect(function() {
    a.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = Ca([e.lockRef.current], (e.shards || []).map(Xr), !0).filter(Boolean);
      return g.forEach(function(h) {
        return h.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(h) {
          return h.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = u.useCallback(function(g, h) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !a.current.allowPinchZoom;
    var v = dt(g), x = r.current, w = "deltaX" in g ? g.deltaX : x[0] - v[0], y = "deltaY" in g ? g.deltaY : x[1] - v[1], _, S = g.target, E = Math.abs(w) > Math.abs(y) ? "h" : "v";
    if ("touches" in g && E === "h" && S.type === "range")
      return !1;
    var R = Ur(E, S);
    if (!R)
      return !0;
    if (R ? _ = E : (_ = E === "v" ? "h" : "v", R = Ur(E, S)), !R)
      return !1;
    if (!n.current && "changedTouches" in g && (w || y) && (n.current = _), !_)
      return !0;
    var M = n.current || _;
    return Qa(M, h, g, M === "h" ? w : y);
  }, []), l = u.useCallback(function(g) {
    var h = g;
    if (!(!Ie.length || Ie[Ie.length - 1] !== s)) {
      var v = "deltaY" in h ? Gr(h) : dt(h), x = t.current.filter(function(_) {
        return _.name === h.type && (_.target === h.target || h.target === _.shadowParent) && Ja(_.delta, v);
      })[0];
      if (x && x.should) {
        h.cancelable && h.preventDefault();
        return;
      }
      if (!x) {
        var w = (a.current.shards || []).map(Xr).filter(Boolean).filter(function(_) {
          return _.contains(h.target);
        }), y = w.length > 0 ? i(h, w[0]) : !a.current.noIsolation;
        y && h.cancelable && h.preventDefault();
      }
    }
  }, []), c = u.useCallback(function(g, h, v, x) {
    var w = { name: g, delta: h, target: v, should: x, shadowParent: nc(v) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== w;
      });
    }, 1);
  }, []), d = u.useCallback(function(g) {
    r.current = dt(g), n.current = void 0;
  }, []), f = u.useCallback(function(g) {
    c(g.type, Gr(g), g.target, i(g, e.lockRef.current));
  }, []), p = u.useCallback(function(g) {
    c(g.type, dt(g), g.target, i(g, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Ie.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, Le), document.addEventListener("touchmove", l, Le), document.addEventListener("touchstart", d, Le), function() {
      Ie = Ie.filter(function(g) {
        return g !== s;
      }), document.removeEventListener("wheel", l, Le), document.removeEventListener("touchmove", l, Le), document.removeEventListener("touchstart", d, Le);
    };
  }, []);
  var b = e.removeScrollBar, m = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    m ? u.createElement(s, { styles: ec(o) }) : null,
    b ? u.createElement(Ua, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function nc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const oc = Ma(jn, rc);
var Yn = u.forwardRef(function(e, t) {
  return u.createElement(_t, ne({}, e, { ref: t, sideCar: oc }));
});
Yn.classNames = _t.classNames;
var Ct = "Popover", [Kn, Lc] = un(Ct, [
  On
]), rt = On(), [sc, Ae] = Kn(Ct), Zn = (e) => {
  const {
    __scopePopover: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !1
  } = e, i = rt(t), l = u.useRef(null), [c, d] = u.useState(!1), [f, p] = ha({
    prop: n,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Ct
  });
  return /* @__PURE__ */ C(ca, { ...i, children: /* @__PURE__ */ C(
    sc,
    {
      scope: t,
      contentId: Vs(),
      triggerRef: l,
      open: f,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((b) => !b), [p]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: u.useCallback(() => d(!0), []),
      onCustomAnchorRemove: u.useCallback(() => d(!1), []),
      modal: a,
      children: r
    }
  ) });
};
Zn.displayName = Ct;
var qn = "PopoverAnchor", ic = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Ae(qn, r), s = rt(r), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = o;
    return u.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ C($n, { ...s, ...n, ref: t });
  }
);
ic.displayName = qn;
var Qn = "PopoverTrigger", Jn = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Ae(Qn, r), s = rt(r), a = Ee(t, o.triggerRef), i = /* @__PURE__ */ C(
      he.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": oo(o.open),
        ...n,
        ref: a,
        onClick: ye(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ C($n, { asChild: !0, ...s, children: i });
  }
);
Jn.displayName = Qn;
var tr = "PopoverPortal", [ac, cc] = Kn(tr, {
  forceMount: void 0
}), eo = (e) => {
  const { __scopePopover: t, forceMount: r, children: n, container: o } = e, s = Ae(tr, t);
  return /* @__PURE__ */ C(ac, { scope: t, forceMount: r, children: /* @__PURE__ */ C(er, { present: r || s.open, children: /* @__PURE__ */ C(Bn, { asChild: !0, container: o, children: n }) }) });
};
eo.displayName = tr;
var Ve = "PopoverContent", to = u.forwardRef(
  (e, t) => {
    const r = cc(Ve, e.__scopePopover), { forceMount: n = r.forceMount, ...o } = e, s = Ae(Ve, e.__scopePopover);
    return /* @__PURE__ */ C(er, { present: n || s.open, children: s.modal ? /* @__PURE__ */ C(uc, { ...o, ref: t }) : /* @__PURE__ */ C(dc, { ...o, ref: t }) });
  }
);
to.displayName = Ve;
var lc = /* @__PURE__ */ jt("PopoverContent.RemoveScroll"), uc = u.forwardRef(
  (e, t) => {
    const r = Ae(Ve, e.__scopePopover), n = u.useRef(null), o = Ee(t, n), s = u.useRef(!1);
    return u.useEffect(() => {
      const a = n.current;
      if (a) return _a(a);
    }, []), /* @__PURE__ */ C(Yn, { as: lc, allowPinchZoom: !0, children: /* @__PURE__ */ C(
      ro,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ye(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), s.current || (i = r.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: ye(
          e.onPointerDownOutside,
          (a) => {
            const i = a.detail.originalEvent, l = i.button === 0 && i.ctrlKey === !0, c = i.button === 2 || l;
            s.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: ye(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), dc = u.forwardRef(
  (e, t) => {
    const r = Ae(Ve, e.__scopePopover), n = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ C(
      ro,
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
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (n.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          ((c = r.triggerRef.current) == null ? void 0 : c.contains(a)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), ro = u.forwardRef(
  (e, t) => {
    const {
      __scopePopover: r,
      trapFocus: n,
      onOpenAutoFocus: o,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEscapeKeyDown: i,
      onPointerDownOutside: l,
      onFocusOutside: c,
      onInteractOutside: d,
      ...f
    } = e, p = Ae(Ve, r), b = rt(r);
    return Ms(), /* @__PURE__ */ C(
      pn,
      {
        asChild: !0,
        loop: !0,
        trapped: n,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ C(
          fn,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: d,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ C(
              la,
              {
                "data-state": oo(p.open),
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
), no = "PopoverClose", fc = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Ae(no, r);
    return /* @__PURE__ */ C(
      he.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: ye(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
fc.displayName = no;
var gc = "PopoverArrow", pc = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = rt(r);
    return /* @__PURE__ */ C(ua, { ...o, ...n, ref: t });
  }
);
pc.displayName = gc;
function oo(e) {
  return e ? "open" : "closed";
}
var bc = Zn, hc = Jn, mc = eo, vc = to;
const xc = Se(
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
), yc = (e) => {
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
}, wc = (e) => {
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
}, _c = u.forwardRef(
  ({
    children: e,
    preferredPosition: t = "below",
    preferredAlignment: r = "center",
    active: n,
    activator: o,
    preferInputActivator: s = !0,
    activatorWrapper: a = "div",
    zIndexOverride: i = 400,
    preventFocusOnClose: l = !1,
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
    }, N = ge(
      xc({
        sectioned: c,
        fullWidth: d,
        fullHeight: f,
        fluidContent: p,
        hideOnPrint: g
      }),
      y
    ), D = yc(t), A = wc(r);
    return /* @__PURE__ */ re(bc, { open: n, onOpenChange: E, children: [
      /* @__PURE__ */ C(hc, { asChild: !0, children: /* @__PURE__ */ C(a, { children: o }) }),
      /* @__PURE__ */ C(mc, { children: /* @__PURE__ */ C(
        vc,
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
_c.displayName = "Popover";
const Cc = (e) => e && {
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
}[e] || "bg-white", Ec = Se(
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
), Sc = (e) => {
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
}, Ac = u.forwardRef(
  ({
    children: e,
    background: t = "bg-surface",
    padding: r,
    roundedAbove: n = "sm",
    className: o,
    ...s
  }, a) => {
    const i = ge(
      Ec({
        roundedAbove: n
      }),
      Cc(t),
      Sc(r),
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
Ac.displayName = "Card";
const Yr = (e) => e && {
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
}[e] || "", De = (e, t = "m") => {
  if (!e) return "";
  if (typeof e == "string") {
    const n = Yr(e);
    return n ? `-m${t}-${n}` : "";
  }
  const r = [];
  return Object.entries(e).forEach(([n, o]) => {
    const s = Yr(o);
    if (s) {
      const a = n === "xs" ? "" : `${n}:`;
      r.push(`${a}-m${t}-${s}`);
    }
  }), r.join(" ");
}, Pc = Se("", {
  variants: {
    // Base styling variants can be added here if needed
  },
  defaultVariants: {}
}), Rc = u.forwardRef(
  ({
    children: e,
    marginInline: t,
    marginBlock: r,
    marginBlockStart: n,
    marginBlockEnd: o,
    marginInlineStart: s,
    marginInlineEnd: a,
    className: i,
    ...l
  }, c) => {
    const d = ge(
      Pc(),
      // Negative margins for bleeding effect
      De(t, "x"),
      De(r, "y"),
      De(n, "t"),
      De(o, "b"),
      De(s, "l"),
      De(a, "r"),
      i
    );
    return /* @__PURE__ */ C("div", { ref: c, className: d, ...l, children: e });
  }
);
Rc.displayName = "Bleed";
export {
  Rc as Bleed,
  gs as Box,
  ss as Button,
  as as ButtonGroup,
  Ac as Card,
  _c as Popover,
  bs as Text,
  ys as TextField,
  Pc as bleedVariants,
  fs as boxVariants,
  is as buttonGroupVariants,
  ns as buttonVariants,
  ge as cn,
  Ec as polarisCardVariants,
  xc as polarisPopoverVariants,
  hs as textFieldVariants,
  ps as textVariants
};
//# sourceMappingURL=index.js.map
