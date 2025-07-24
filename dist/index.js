import { jsx as h, jsxs as A, Fragment as mt } from "react/jsx-runtime";
import * as g from "react";
import j, { useLayoutEffect as ns, useState as rs } from "react";
import * as to from "react-dom";
import os from "react-dom";
function pr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function no(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = pr(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : pr(e[o], null);
        }
      };
  };
}
function he(...e) {
  return g.useCallback(no(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  const t = /* @__PURE__ */ ss(e), n = g.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = g.Children.toArray(i), l = a.find(ls);
    if (l) {
      const c = l.props.children, u = a.map((p) => p === l ? g.Children.count(c) > 1 ? g.Children.only(null) : g.isValidElement(c) ? c.props.children : null : p);
      return /* @__PURE__ */ h(t, { ...s, ref: o, children: g.isValidElement(c) ? g.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ h(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var is = /* @__PURE__ */ Ht("Slot");
// @__NO_SIDE_EFFECTS__
function ss(e) {
  const t = g.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (g.isValidElement(o)) {
      const s = us(o), a = cs(i, o.props);
      return o.type !== g.Fragment && (a.ref = r ? no(r, s) : s), g.cloneElement(o, a);
    }
    return g.Children.count(o) > 1 ? g.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var as = Symbol("radix.slottable");
function ls(e) {
  return g.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === as;
}
function cs(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      const l = i(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function us(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ro(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ro(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function oo() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ro(e)) && (r && (r += " "), r += t);
  return r;
}
const mr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, hr = oo, W = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return hr(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((c) => {
    const u = n == null ? void 0 : n[c], p = i == null ? void 0 : i[c];
    if (u === null) return null;
    const d = mr(u) || mr(p);
    return o[c][d];
  }), a = n && Object.entries(n).reduce((c, u) => {
    let [p, d] = u;
    return d === void 0 || (c[p] = d), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
    let { class: p, className: d, ...f } = u;
    return Object.entries(f).every((b) => {
      let [m, x] = b;
      return Array.isArray(x) ? x.includes({
        ...i,
        ...a
      }[m]) : {
        ...i,
        ...a
      }[m] === x;
    }) ? [
      ...c,
      p,
      d
    ] : c;
  }, []);
  return hr(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
var io = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
io.displayName = "CheckIcon";
var so = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
so.displayName = "ChevronDownIcon";
var Mn = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M11.764 5.204a.75.75 0 0 1 .032 1.06l-3.516 3.736 3.516 3.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.028l4-4.25a.75.75 0 0 1 1.06-.032Z"
  }));
};
Mn.displayName = "ChevronLeftIcon";
var An = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
  }));
};
An.displayName = "ChevronRightIcon";
var ao = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
ao.displayName = "ChevronUpIcon";
var lo = function(t) {
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
lo.displayName = "FilterIcon";
var co = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    d: "M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"
  }));
};
co.displayName = "RefreshIcon";
var uo = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};
uo.displayName = "SearchIcon";
var fo = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M9.377 2.5c-.926 0-1.676.75-1.676 1.676v.688c0 .056-.043.17-.198.251-.153.08-.303.168-.448.262-.147.097-.268.076-.318.048l-.6-.346a1.676 1.676 0 0 0-2.29.613l-.622 1.08a1.676 1.676 0 0 0 .613 2.289l.648.374c.048.028.124.12.119.29a5.484 5.484 0 0 0 .005.465c.009.175-.07.27-.119.299l-.653.377a1.676 1.676 0 0 0-.613 2.29l.623 1.08a1.676 1.676 0 0 0 2.29.613l.7-.405c.048-.028.166-.048.312.043.115.071.233.139.353.202.155.08.198.195.198.251v.811c0 .926.75 1.676 1.676 1.676h1.246c.926 0 1.676-.75 1.676-1.676v-.81c0-.057.042-.171.197-.252.121-.063.239-.13.354-.202.146-.091.264-.07.312-.043l.7.405a1.676 1.676 0 0 0 2.29-.614l.623-1.08a1.676 1.676 0 0 0-.613-2.289l-.653-.377c-.05-.029-.128-.123-.119-.3a5.494 5.494 0 0 0 .005-.463c-.005-.171.07-.263.12-.291l.647-.374a1.676 1.676 0 0 0 .613-2.29l-.623-1.079a1.676 1.676 0 0 0-2.29-.613l-.6.346c-.049.028-.17.048-.318-.048a5.4 5.4 0 0 0-.448-.262c-.155-.081-.197-.195-.197-.251v-.688c0-.926-.75-1.676-1.676-1.676h-1.246Zm-.176 1.676c0-.097.078-.176.176-.176h1.246c.097 0 .176.079.176.176v.688c0 .728.462 1.298 1.003 1.58.11.058.219.122.323.19.517.337 1.25.458 1.888.09l.6-.346a.176.176 0 0 1 .24.064l.623 1.08a.176.176 0 0 1-.064.24l-.648.374c-.623.36-.888 1.034-.868 1.638a4.184 4.184 0 0 1-.004.337c-.032.615.23 1.31.867 1.677l.653.377a.176.176 0 0 1 .064.24l-.623 1.08a.176.176 0 0 1-.24.065l-.701-.405c-.624-.36-1.341-.251-1.855.069a3.91 3.91 0 0 1-.255.145c-.54.283-1.003.853-1.003 1.581v.811a.176.176 0 0 1-.176.176h-1.246a.176.176 0 0 1-.176-.176v-.81c0-.73-.462-1.3-1.003-1.582a3.873 3.873 0 0 1-.255-.146c-.514-.32-1.23-.428-1.855-.068l-.7.405a.176.176 0 0 1-.241-.065l-.623-1.08a.176.176 0 0 1 .064-.24l.653-.377c.637-.368.899-1.062.867-1.677a3.97 3.97 0 0 1-.004-.337c.02-.604-.245-1.278-.868-1.638l-.648-.374a.176.176 0 0 1-.064-.24l.623-1.08a.176.176 0 0 1 .24-.064l.6.346c.638.368 1.37.247 1.888-.09a3.85 3.85 0 0 1 .323-.19c.54-.282 1.003-.852 1.003-1.58v-.688Z"
  }));
};
fo.displayName = "SettingsIcon";
var go = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    d: "M7.75 6.06v7.69a.75.75 0 0 1-1.5 0v-7.69l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72Z"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M13.75 6.25a.75.75 0 0 0-1.5 0v7.69l-1.72-1.72a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-7.69Z"
  }));
};
go.displayName = "SortIcon";
var po = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
  }), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
po.displayName = "XCircleIcon";
var Fn = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    d: "M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z"
  }));
};
Fn.displayName = "XIcon";
const $n = "-", ds = (e) => {
  const t = gs(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const a = s.split($n);
      return a[0] === "" && a.length !== 1 && a.shift(), mo(a, t) || fs(s);
    },
    getConflictingClassGroupIds: (s, a) => {
      const l = n[s] || [];
      return a && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, mo = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? mo(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join($n);
  return (s = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
}, br = /^\[(.+)\]$/, fs = (e) => {
  if (br.test(e)) {
    const t = br.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, gs = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ms(Object.entries(e.classGroups), n).forEach(([i, s]) => {
    bn(s, r, i, t);
  }), r;
}, bn = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : vr(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (ps(o)) {
        bn(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      bn(s, vr(t, i), n, r);
    });
  });
}, vr = (e, t) => {
  let n = e;
  return t.split($n).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, ps = (e) => e.isThemeGetter, ms = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
  return [n, o];
}) : e, hs = (e) => {
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
}, ho = "!", bs = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, s = (a) => {
    const l = [];
    let c = 0, u = 0, p;
    for (let x = 0; x < a.length; x++) {
      let v = a[x];
      if (c === 0) {
        if (v === o && (r || a.slice(x, x + i) === t)) {
          l.push(a.slice(u, x)), u = x + i;
          continue;
        }
        if (v === "/") {
          p = x;
          continue;
        }
      }
      v === "[" ? c++ : v === "]" && c--;
    }
    const d = l.length === 0 ? a : a.substring(u), f = d.startsWith(ho), b = f ? d.substring(1) : d, m = p && p > u ? p - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: f,
      baseClassName: b,
      maybePostfixModifierPosition: m
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: s
  }) : s;
}, vs = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, xs = (e) => ({
  cache: hs(e.cacheSize),
  parseClassName: bs(e),
  ...ds(e)
}), ws = /\s+/, ys = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], s = e.trim().split(ws);
  let a = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const c = s[l], {
      modifiers: u,
      hasImportantModifier: p,
      baseClassName: d,
      maybePostfixModifierPosition: f
    } = n(c);
    let b = !!f, m = r(b ? d.substring(0, f) : d);
    if (!m) {
      if (!b) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (m = r(d), !m) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      b = !1;
    }
    const x = vs(u).join(":"), v = p ? x + ho : x, w = v + m;
    if (i.includes(w))
      continue;
    i.push(w);
    const y = o(m, b);
    for (let C = 0; C < y.length; ++C) {
      const S = y[C];
      i.push(v + S);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Cs() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = bo(t)) && (r && (r += " "), r += n);
  return r;
}
const bo = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = bo(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Ss(e, ...t) {
  let n, r, o, i = s;
  function s(l) {
    const c = t.reduce((u, p) => p(u), e());
    return n = xs(c), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const u = ys(l, n);
    return o(l, u), u;
  }
  return function() {
    return i(Cs.apply(null, arguments));
  };
}
const Z = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, vo = /^\[(?:([a-z-]+):)?(.+)\]$/i, _s = /^\d+\/\d+$/, Rs = /* @__PURE__ */ new Set(["px", "full", "screen"]), Es = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ps = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ms = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, As = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Fs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ee = (e) => Ye(e) || Rs.has(e) || _s.test(e), Fe = (e) => nt(e, "length", Ls), Ye = (e) => !!e && !Number.isNaN(Number(e)), Jt = (e) => nt(e, "number", Ye), dt = (e) => !!e && Number.isInteger(Number(e)), $s = (e) => e.endsWith("%") && Ye(e.slice(0, -1)), V = (e) => vo.test(e), $e = (e) => Es.test(e), Ns = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Is = (e) => nt(e, Ns, xo), Os = (e) => nt(e, "position", xo), ks = /* @__PURE__ */ new Set(["image", "url"]), Vs = (e) => nt(e, ks, zs), Ds = (e) => nt(e, "", Ts), ft = () => !0, nt = (e, t, n) => {
  const r = vo.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Ls = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ps.test(e) && !Ms.test(e)
), xo = () => !1, Ts = (e) => As.test(e), zs = (e) => Fs.test(e), Bs = () => {
  const e = Z("colors"), t = Z("spacing"), n = Z("blur"), r = Z("brightness"), o = Z("borderColor"), i = Z("borderRadius"), s = Z("borderSpacing"), a = Z("borderWidth"), l = Z("contrast"), c = Z("grayscale"), u = Z("hueRotate"), p = Z("invert"), d = Z("gap"), f = Z("gradientColorStops"), b = Z("gradientColorStopPositions"), m = Z("inset"), x = Z("margin"), v = Z("opacity"), w = Z("padding"), y = Z("saturate"), C = Z("scale"), S = Z("sepia"), E = Z("skew"), R = Z("space"), _ = Z("translate"), O = () => ["auto", "contain", "none"], I = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", V, t], P = () => [V, t], B = () => ["", Ee, Fe], k = () => ["auto", Ye, V], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], T = () => ["solid", "dashed", "dotted", "double", "none"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", V], X = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], M = () => [Ye, V];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ft],
      spacing: [Ee, Fe],
      blur: ["none", "", $e, V],
      brightness: M(),
      borderColor: [e],
      borderRadius: ["none", "", "full", $e, V],
      borderSpacing: P(),
      borderWidth: B(),
      contrast: M(),
      grayscale: z(),
      hueRotate: M(),
      invert: z(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [$s, Fe],
      inset: L(),
      margin: L(),
      opacity: M(),
      padding: P(),
      saturate: M(),
      scale: M(),
      sepia: z(),
      skew: M(),
      space: P(),
      translate: P()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", V]
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
        columns: [$e]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": X()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": X()
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
        object: [...U(), V]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: I()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": I()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": I()
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
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
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
        z: ["auto", dt, V]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: L()
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
        flex: ["1", "auto", "initial", "none", V]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: z()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: z()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", dt, V]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ft]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", dt, V]
        }, V]
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
        "grid-rows": [ft]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [dt, V]
        }, V]
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
        "auto-cols": ["auto", "min", "max", "fr", V]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", V]
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
        justify: ["normal", ...F()]
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
        content: ["normal", ...F(), "baseline"]
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
        "place-content": [...F(), "baseline"]
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
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", V, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [V, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [V, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [$e]
        }, $e]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [V, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [V, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", $e, Fe]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Jt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ft]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", V]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ye, Jt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ee, V]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", V]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", V]
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
        decoration: ["auto", "from-font", Ee, Fe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ee, V]
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
        indent: P()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V]
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
        content: ["none", V]
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
        bg: [...U(), Os]
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
        bg: ["auto", "cover", "contain", Is]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Vs]
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
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
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
        border: [...T(), "hidden"]
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
        "outline-offset": [Ee, V]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ee, Fe]
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
        ring: B()
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
        "ring-offset": [Ee, Fe]
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
        shadow: ["", "inner", "none", $e, Ds]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ft]
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
        "mix-blend": [...H(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": H()
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
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", $e, V]
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
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
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
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", V]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: M()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", V]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: M()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", V]
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
        rotate: [dt, V]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", V]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V]
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
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
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
        "will-change": ["auto", "scroll", "contents", "transform", V]
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
        stroke: [Ee, Fe, Jt]
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
}, Hs = /* @__PURE__ */ Ss(Bs);
function D(...e) {
  return Hs(oo(e));
}
const Gs = W(
  "cursor-pointer inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-hidden focus-visible:ring-3 focus-visible:ring-offset-2 relative m-0 border-0 font-sans !text-xs font-medium !leading-[20.15px] !rounded-lg",
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
), js = (e) => e ? e === !0 || e === "down" ? /* @__PURE__ */ h(so, { className: "size-4" }) : e === "up" ? /* @__PURE__ */ h(ao, { className: "size-4" }) : e === "select" ? /* @__PURE__ */ h(io, { className: "size-4" }) : null : null, xr = () => /* @__PURE__ */ h(co, { className: "size-4 animate-spin" }), ne = g.forwardRef(
  ({
    children: e,
    size: t = "medium",
    textAlign: n = "center",
    fullWidth: r = !1,
    disclosure: o,
    removeUnderline: i,
    icon: s,
    dataPrimaryLink: a,
    tone: l = "default",
    variant: c = "default",
    id: u,
    url: p,
    external: d,
    target: f,
    download: b,
    submit: m,
    disabled: x,
    loading: v,
    pressed: w = !1,
    accessibilityLabel: y,
    role: C,
    ariaControls: S,
    ariaExpanded: E,
    ariaDescribedBy: R,
    ariaChecked: _,
    onClick: O,
    onFocus: I,
    onBlur: L,
    onKeyPress: P,
    onKeyUp: B,
    onKeyDown: k,
    onMouseEnter: U,
    onTouchStart: T,
    onPointerDown: H,
    className: F,
    asChild: z = !1,
    ...X
  }, M) => {
    const G = !!p, Y = z ? is : G ? "a" : "button", Q = v, ce = x || Q, oe = js(o), ee = D(
      Gs({
        variant: c,
        size: t,
        tone: l === "critical" ? "critical" : l === "success" ? "success" : "default",
        textAlign: n,
        fullWidth: r,
        pressed: w
      }),
      // Handle underline removal for plain variants
      i && (c === "plain" || c === "monochromePlain") && "no-underline hover:no-underline",
      F
    ), q = {
      id: u,
      className: ee,
      disabled: ce,
      "aria-label": y,
      "aria-controls": S,
      "aria-expanded": E,
      "aria-describedby": R,
      "aria-checked": _,
      "aria-pressed": w,
      "data-primary-link": a,
      role: C,
      onClick: ce ? void 0 : O,
      onFocus: I,
      onBlur: L,
      onKeyPress: P,
      onKeyUp: B,
      onKeyDown: k,
      onMouseEnter: U,
      onTouchStart: T,
      onPointerDown: H,
      ref: M,
      ...X
    };
    return G ? /* @__PURE__ */ A(
      Y,
      {
        ...q,
        href: p,
        target: d ? "_blank" : f,
        rel: d ? "noopener noreferrer" : void 0,
        download: b,
        children: [
          s && !Q && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: s }),
          Q && /* @__PURE__ */ h(xr, {}),
          e && /* @__PURE__ */ h("span", { className: "inline-flex", children: e }),
          oe && !Q && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: oe })
        ]
      }
    ) : /* @__PURE__ */ A(Y, { ...q, type: m ? "submit" : "button", children: [
      s && !Q && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: s }),
      Q && /* @__PURE__ */ h(xr, {}),
      e && /* @__PURE__ */ h("span", { className: "inline-flex", children: e }),
      oe && !Q && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: oe })
    ] });
  }
);
ne.displayName = "Button";
const Ws = W("flex items-center", {
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
}), wo = g.forwardRef(
  ({
    children: e,
    gap: t = "tight",
    variant: n,
    fullWidth: r = !1,
    connectedTop: o = !1,
    noWrap: i = !1,
    className: s,
    ...a
  }, l) => {
    const c = D(
      Ws({
        gap: n === "segmented" ? void 0 : t,
        variant: n,
        fullWidth: r,
        connectedTop: o,
        noWrap: i
      }),
      s
    );
    return /* @__PURE__ */ h("div", { className: c, ref: l, ...a, children: e });
  }
);
wo.displayName = "ButtonGroup";
const Us = (e) => e && {
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
}[e] || "" : "", qs = (e) => e && {
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
}[e] || "", yr = (e) => e && {
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
}[e] || "", Xs = (e) => e && {
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
}[e] || "", Zs = (e) => e && {
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
}[e] || "", fe = (e, t = "p") => {
  if (!e) return "";
  if (typeof e == "string") {
    const r = yr(e);
    return r ? `${t}-${r}` : "";
  }
  const n = [];
  return Object.entries(e).forEach(([r, o]) => {
    const i = yr(o);
    if (i) {
      const s = r === "xs" ? "" : `${r}:`;
      n.push(`${s}${t}-${i}`);
    }
  }), n.join(" ");
}, yt = (e, t) => {
  const r = {
    0: "0",
    "0165": "[0.66px]",
    "025": "",
    "050": "2",
    100: "4"
  }[e];
  return r ? `border-${t}-${r}` : `border-${t}`;
}, Ct = (e, t) => {
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
}, Ys = W("", {
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
}), Ks = g.forwardRef(
  ({
    children: e,
    as: t = "div",
    background: n,
    borderColor: r,
    borderStyle: o,
    borderRadius: i,
    borderEndStartRadius: s,
    borderEndEndRadius: a,
    borderStartStartRadius: l,
    borderStartEndRadius: c,
    borderWidth: u,
    borderBlockStartWidth: p,
    borderBlockEndWidth: d,
    borderInlineStartWidth: f,
    borderInlineEndWidth: b,
    color: m,
    id: x,
    minHeight: v,
    minWidth: w,
    maxWidth: y,
    overflowX: C,
    overflowY: S,
    padding: E,
    paddingBlock: R,
    paddingBlockStart: _,
    paddingBlockEnd: O,
    paddingInline: I,
    paddingInlineStart: L,
    paddingInlineEnd: P,
    role: B,
    shadow: k,
    tabIndex: U,
    width: T,
    position: H,
    insetBlockStart: F,
    insetBlockEnd: z,
    insetInlineStart: X,
    insetInlineEnd: M,
    opacity: G,
    outlineColor: Y,
    outlineStyle: Q,
    outlineWidth: ce,
    printHidden: oe = !1,
    visuallyHidden: ee = !1,
    zIndex: q,
    className: Se,
    ...He
  }, Te) => {
    const Ge = t, de = D(
      Ys({
        visuallyHidden: ee,
        printHidden: oe
      }),
      // Background
      Us(n),
      // Border
      wr(r),
      o === "dashed" ? "border-dashed" : "border-solid",
      Xs(i),
      Cr(u),
      // Individual border widths
      p && yt(p, "t"),
      d && yt(d, "b"),
      f && yt(f, "l"),
      b && yt(b, "r"),
      // Individual border radius
      s && Ct(s, "bl"),
      a && Ct(a, "br"),
      l && Ct(l, "tl"),
      c && Ct(c, "tr"),
      // Text color
      qs(m),
      // Overflow
      C && `overflow-x-${C}`,
      S && `overflow-y-${S}`,
      // Padding
      fe(E, "p"),
      fe(R, "py"),
      fe(_, "pt"),
      fe(O, "pb"),
      fe(I, "px"),
      fe(L, "pl"),
      fe(P, "pr"),
      // Shadow
      Zs(k),
      // Position
      H && `${H}`,
      // Inset (positioning)
      fe(F, "top"),
      fe(z, "bottom"),
      fe(X, "left"),
      fe(M, "right"),
      // Outline
      Y && wr(Y).replace("border-", "outline-"),
      Q === "dashed" ? "outline-dashed" : Q === "solid" ? "outline-solid" : "",
      ce && Cr(ce).replace("border-", "outline-"),
      Se
    ), _e = {
      ...v && { minHeight: v },
      ...w && { minWidth: w },
      ...y && { maxWidth: y },
      ...T && { width: T },
      ...G && { opacity: G },
      ...q && { zIndex: q }
    };
    return /* @__PURE__ */ h(
      Ge,
      {
        ref: Te,
        className: de,
        style: Object.keys(_e).length > 0 ? _e : void 0,
        id: x,
        role: B,
        tabIndex: U,
        ...He,
        children: e
      }
    );
  }
);
Ks.displayName = "Box";
const Qs = W("", {
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
}), ue = g.forwardRef(
  ({
    children: e,
    as: t = "span",
    alignment: n,
    breakWord: r = !1,
    tone: o,
    fontWeight: i,
    id: s,
    numeric: a = !1,
    truncate: l = !1,
    variant: c = "bodyMd",
    visuallyHidden: u = !1,
    textDecorationLine: p,
    className: d,
    ...f
  }, b) => /* @__PURE__ */ h(
    t,
    {
      ref: b,
      id: s,
      className: D(
        Qs({
          variant: c,
          alignment: n,
          tone: o,
          fontWeight: (() => {
            if (i) return i;
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
          breakWord: r,
          truncate: l,
          numeric: a,
          visuallyHidden: u,
          textDecorationLine: p ? "line-through" : "none"
        }),
        d
      ),
      ...f,
      children: e
    }
  )
);
ue.displayName = "Text";
const Js = W(
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
), ea = () => {
  const [e] = g.useState(
    () => Math.random().toString(36).substring(2, 11)
  );
  return e;
}, ta = (e) => {
  if (e)
    return typeof e == "number" ? e : 3;
}, na = (e) => {
  if (e)
    return e || typeof e == "number" && e > 0 ? { "aria-multiline": !0 } : void 0;
}, Sr = (e) => `${e}Label`, _r = (e) => `${e}HelpText`, yo = g.forwardRef(
  ({
    prefix: e,
    suffix: t,
    verticalContent: n,
    placeholder: r,
    value: o = "",
    helpText: i,
    label: s,
    labelAction: a,
    labelHidden: l = !1,
    disabled: c = !1,
    clearButton: u = !1,
    readOnly: p = !1,
    autoFocus: d = !1,
    focused: f,
    multiline: b = !1,
    error: m,
    connectedRight: x,
    connectedLeft: v,
    type: w = "text",
    name: y,
    id: C,
    role: S,
    step: E,
    largeStep: R,
    autoComplete: _,
    max: O,
    maxLength: I,
    maxHeight: L,
    min: P,
    minLength: B,
    pattern: k,
    inputMode: U,
    spellCheck: T,
    ariaOwns: H,
    ariaControls: F,
    ariaExpanded: z,
    ariaActiveDescendant: X,
    ariaAutocomplete: M,
    showCharacterCount: G = !1,
    align: Y = "left",
    requiredIndicator: Q = !1,
    monospaced: ce = !1,
    selectTextOnFocus: oe = !1,
    suggestion: ee,
    variant: q = "inherit",
    size: Se = "medium",
    tone: He,
    autoSize: Te = !1,
    loading: Ge = !1,
    onClearButtonClick: de,
    onChange: _e,
    onSpinnerChange: tr,
    onFocus: st,
    onBlur: at,
    className: Yt,
    ...je
  }, lt) => {
    const Ui = ea(), J = C ?? Ui, [qi, nr] = g.useState(!!f), Kt = g.useRef(null), rr = g.useRef(null), or = g.useRef(null), wt = g.useCallback(() => b ? rr.current : Kt.current, [b]);
    g.useEffect(() => {
      const K = wt();
      !K || f === void 0 || (f ? K.focus() : K.blur());
    }, [f, wt]), g.useEffect(() => {
      const K = Kt.current;
      !K || !(w === "text" || w === "tel" || w === "search" || w === "url" || w === "password") || !ee || K.setSelectionRange(o.length, ee.length);
    }, [qi, o, w, ee]);
    const Qt = ee || o, Xi = w === "currency" ? "text" : w, Zi = D(
      Js({
        size: Se,
        variant: q,
        align: Y,
        tone: He,
        error: !!m,
        monospaced: ce,
        multiline: !!b
      }),
      Te && "w-auto min-w-0",
      Yt
    ), ir = g.useCallback(
      (K) => {
        _e && _e(K.currentTarget.value, J);
      },
      [_e, J]
    ), Yi = g.useCallback(
      (K) => {
        if (nr(!0), oe && !ee) {
          const Re = wt();
          Re == null || Re.select();
        }
        st && st(K);
      },
      [oe, ee, wt, st]
    ), Ki = g.useCallback(
      (K) => {
        var Re;
        nr(!1), !((Re = or.current) != null && Re.contains(K == null ? void 0 : K.relatedTarget)) && at && at(K);
      },
      [at]
    ), Qi = g.useCallback(() => {
      de && de(J);
    }, [de, J]), ct = [];
    m && ct.push(`${J}Error`), i && ct.push(_r(J)), G && ct.push(`${J}-CharacterCounter`);
    const ut = [];
    e && ut.push(`${J}-Prefix`), t && ut.push(`${J}-Suffix`), n && ut.push(`${J}-VerticalContent`), ut.unshift(Sr(J));
    let sr = null;
    if (G) {
      const K = Qt.length, Re = I ? `${K}/${I}` : K;
      sr = /* @__PURE__ */ h(
        "div",
        {
          id: `${J}-CharacterCounter`,
          className: "text-xs text-muted-foreground mt-1",
          children: Re
        }
      );
    }
    const ar = u && Qt !== "" ? /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        className: "absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground focus:outline-hidden focus:ring-3 focus:ring-ring focus:ring-offset-2 rounded-sm",
        onClick: Qi,
        tabIndex: -1,
        "aria-label": "Clear",
        children: /* @__PURE__ */ h(po, { className: "h-4 w-4" })
      }
    ) : null, lr = e ? /* @__PURE__ */ h(
      "div",
      {
        id: `${J}-Prefix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-r border-input bg-muted/50",
        children: e
      }
    ) : null, cr = t ? /* @__PURE__ */ h(
      "div",
      {
        id: `${J}-Suffix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-l border-input bg-muted/50",
        children: t
      }
    ) : null, ur = Ge ? /* @__PURE__ */ h("div", { className: "absolute right-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ h("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-foreground" }) }) : null, Ji = l ? null : /* @__PURE__ */ A(
      "label",
      {
        id: Sr(J),
        htmlFor: J,
        className: D(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          Q && "after:content-['*'] after:ml-1 after:text-destructive"
        ),
        children: [
          s,
          a && /* @__PURE__ */ h(
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
    ), es = i ? /* @__PURE__ */ h("div", { id: _r(J), className: "text-xs text-muted-foreground mt-1", children: i }) : null, ts = m && typeof m != "boolean" ? /* @__PURE__ */ h(
      "div",
      {
        id: `${J}Error`,
        className: "text-xs text-destructive mt-1",
        role: "alert",
        children: m
      }
    ) : null, dr = n ? /* @__PURE__ */ h(
      "div",
      {
        id: `${J}-VerticalContent`,
        className: "text-sm text-muted-foreground mb-2",
        children: n
      }
    ) : null, fr = {
      ...L && { maxHeight: L }
    }, gr = g.createElement(b ? "textarea" : "input", {
      ref: g.useCallback(
        (K) => {
          b ? rr.current = K : Kt.current = K, typeof lt == "function" ? lt(K) : lt && (lt.current = K);
        },
        [b, lt]
      ),
      id: J,
      name: y,
      type: Xi,
      value: Qt,
      placeholder: r,
      disabled: c,
      readOnly: p,
      autoFocus: d,
      role: S,
      min: P,
      max: O,
      step: E,
      minLength: B,
      maxLength: I,
      pattern: k,
      inputMode: U,
      spellCheck: T,
      autoComplete: _,
      rows: ta(b),
      size: Te ? 1 : void 0,
      style: Object.keys(fr).length > 0 ? fr : void 0,
      className: Zi,
      "aria-describedby": ct.length ? ct.join(" ") : void 0,
      "aria-labelledby": ut.join(" "),
      "aria-invalid": !!m,
      "aria-owns": H,
      "aria-activedescendant": X,
      "aria-autocomplete": M,
      "aria-controls": F,
      "aria-expanded": z,
      "aria-required": Q,
      ...na(b),
      onChange: ee ? void 0 : ir,
      onInput: ee ? ir : void 0,
      onFocus: Yi,
      onBlur: Ki,
      // Password manager disable attributes
      "data-1p-ignore": _ === "off" || void 0,
      "data-lpignore": _ === "off" || void 0,
      "data-form-type": _ === "off" ? "other" : void 0,
      ...je
    });
    return /* @__PURE__ */ A("div", { ref: or, className: "space-y-2", children: [
      Ji,
      v || x ? /* @__PURE__ */ A("div", { className: "flex", children: [
        v,
        /* @__PURE__ */ A("div", { className: "flex-1 relative", children: [
          dr,
          /* @__PURE__ */ A("div", { className: "relative flex", children: [
            lr,
            gr,
            cr,
            ar,
            ur
          ] })
        ] }),
        x
      ] }) : /* @__PURE__ */ A("div", { className: "relative", children: [
        dr,
        /* @__PURE__ */ A("div", { className: "relative flex", children: [
          lr,
          gr,
          cr,
          ar,
          ur
        ] })
      ] }),
      ts,
      es,
      sr
    ] });
  }
);
yo.displayName = "TextField";
function se(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function ra(e, t) {
  const n = g.createContext(t), r = (i) => {
    const { children: s, ...a } = i, l = g.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ h(n.Provider, { value: l, children: s });
  };
  r.displayName = e + "Provider";
  function o(i) {
    const s = g.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Nn(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = g.createContext(s), l = n.length;
    n = [...n, s];
    const c = (p) => {
      var v;
      const { scope: d, children: f, ...b } = p, m = ((v = d == null ? void 0 : d[e]) == null ? void 0 : v[l]) || a, x = g.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ h(m.Provider, { value: x, children: f });
    };
    c.displayName = i + "Provider";
    function u(p, d) {
      var m;
      const f = ((m = d == null ? void 0 : d[e]) == null ? void 0 : m[l]) || a, b = g.useContext(f);
      if (b) return b;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [c, u];
  }
  const o = () => {
    const i = n.map((s) => g.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return g.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, oa(o, ...t)];
}
function oa(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: l, scopeName: c }) => {
        const p = l(i)[`__scope${c}`];
        return { ...a, ...p };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var ia = [
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
], re = ia.reduce((e, t) => {
  const n = /* @__PURE__ */ Ht(`Primitive.${t}`), r = g.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function sa(e, t) {
  e && to.flushSync(() => e.dispatchEvent(t));
}
function Je(e) {
  const t = g.useRef(e);
  return g.useEffect(() => {
    t.current = e;
  }), g.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function aa(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e);
  g.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var la = "DismissableLayer", vn = "dismissableLayer.update", ca = "dismissableLayer.pointerDownOutside", ua = "dismissableLayer.focusOutside", Rr, Co = g.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), In = g.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, c = g.useContext(Co), [u, p] = g.useState(null), d = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, f] = g.useState({}), b = he(t, (R) => p(R)), m = Array.from(c.layers), [x] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), v = m.indexOf(x), w = u ? m.indexOf(u) : -1, y = c.layersWithOutsidePointerEventsDisabled.size > 0, C = w >= v, S = ga((R) => {
      const _ = R.target, O = [...c.branches].some((I) => I.contains(_));
      !C || O || (o == null || o(R), s == null || s(R), R.defaultPrevented || a == null || a());
    }, d), E = pa((R) => {
      const _ = R.target;
      [...c.branches].some((I) => I.contains(_)) || (i == null || i(R), s == null || s(R), R.defaultPrevented || a == null || a());
    }, d);
    return aa((R) => {
      w === c.layers.size - 1 && (r == null || r(R), !R.defaultPrevented && a && (R.preventDefault(), a()));
    }, d), g.useEffect(() => {
      if (u)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Rr = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Er(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = Rr);
        };
    }, [u, d, n, c]), g.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Er());
    }, [u, c]), g.useEffect(() => {
      const R = () => f({});
      return document.addEventListener(vn, R), () => document.removeEventListener(vn, R);
    }, []), /* @__PURE__ */ h(
      re.div,
      {
        ...l,
        ref: b,
        style: {
          pointerEvents: y ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: se(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: se(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: se(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
In.displayName = la;
var da = "DismissableLayerBranch", fa = g.forwardRef((e, t) => {
  const n = g.useContext(Co), r = g.useRef(null), o = he(t, r);
  return g.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ h(re.div, { ...e, ref: o });
});
fa.displayName = da;
function ga(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = g.useRef(!1), o = g.useRef(() => {
  });
  return g.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          So(
            ca,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
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
function pa(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = g.useRef(!1);
  return g.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && So(ua, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Er() {
  const e = new CustomEvent(vn);
  document.dispatchEvent(e);
}
function So(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? sa(o, i) : o.dispatchEvent(i);
}
var en = 0;
function _o() {
  g.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Pr()), document.body.insertAdjacentElement("beforeend", e[1] ?? Pr()), en++, () => {
      en === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), en--;
    };
  }, []);
}
function Pr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var tn = "focusScope.autoFocusOnMount", nn = "focusScope.autoFocusOnUnmount", Mr = { bubbles: !1, cancelable: !0 }, ma = "FocusScope", On = g.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, l] = g.useState(null), c = Je(o), u = Je(i), p = g.useRef(null), d = he(t, (m) => l(m)), f = g.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  g.useEffect(() => {
    if (r) {
      let m = function(y) {
        if (f.paused || !a) return;
        const C = y.target;
        a.contains(C) ? p.current = C : Ne(p.current, { select: !0 });
      }, x = function(y) {
        if (f.paused || !a) return;
        const C = y.relatedTarget;
        C !== null && (a.contains(C) || Ne(p.current, { select: !0 }));
      }, v = function(y) {
        if (document.activeElement === document.body)
          for (const S of y)
            S.removedNodes.length > 0 && Ne(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", x);
      const w = new MutationObserver(v);
      return a && w.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", x), w.disconnect();
      };
    }
  }, [r, a, f.paused]), g.useEffect(() => {
    if (a) {
      Fr.add(f);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const v = new CustomEvent(tn, Mr);
        a.addEventListener(tn, c), a.dispatchEvent(v), v.defaultPrevented || (ha(ya(Ro(a)), { select: !0 }), document.activeElement === m && Ne(a));
      }
      return () => {
        a.removeEventListener(tn, c), setTimeout(() => {
          const v = new CustomEvent(nn, Mr);
          a.addEventListener(nn, u), a.dispatchEvent(v), v.defaultPrevented || Ne(m ?? document.body, { select: !0 }), a.removeEventListener(nn, u), Fr.remove(f);
        }, 0);
      };
    }
  }, [a, c, u, f]);
  const b = g.useCallback(
    (m) => {
      if (!n && !r || f.paused) return;
      const x = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, v = document.activeElement;
      if (x && v) {
        const w = m.currentTarget, [y, C] = ba(w);
        y && C ? !m.shiftKey && v === C ? (m.preventDefault(), n && Ne(y, { select: !0 })) : m.shiftKey && v === y && (m.preventDefault(), n && Ne(C, { select: !0 })) : v === w && m.preventDefault();
      }
    },
    [n, r, f.paused]
  );
  return /* @__PURE__ */ h(re.div, { tabIndex: -1, ...s, ref: d, onKeyDown: b });
});
On.displayName = ma;
function ha(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ne(r, { select: t }), document.activeElement !== n) return;
}
function ba(e) {
  const t = Ro(e), n = Ar(t, e), r = Ar(t.reverse(), e);
  return [n, r];
}
function Ro(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ar(e, t) {
  for (const n of e)
    if (!va(n, { upTo: t })) return n;
}
function va(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function xa(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ne(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && xa(e) && t && e.select();
  }
}
var Fr = wa();
function wa() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = $r(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = $r(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function $r(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ya(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Oe = globalThis != null && globalThis.document ? g.useLayoutEffect : () => {
}, Ca = g[" useId ".trim().toString()] || (() => {
}), Sa = 0;
function Nt(e) {
  const [t, n] = g.useState(Ca());
  return Oe(() => {
    n((r) => r ?? String(Sa++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const _a = ["top", "right", "bottom", "left"], ke = Math.min, ie = Math.max, Vt = Math.round, St = Math.floor, we = (e) => ({
  x: e,
  y: e
}), Ra = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ea = {
  start: "end",
  end: "start"
};
function xn(e, t, n) {
  return ie(e, ke(t, n));
}
function Me(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ae(e) {
  return e.split("-")[0];
}
function rt(e) {
  return e.split("-")[1];
}
function kn(e) {
  return e === "x" ? "y" : "x";
}
function Vn(e) {
  return e === "y" ? "height" : "width";
}
const Pa = /* @__PURE__ */ new Set(["top", "bottom"]);
function xe(e) {
  return Pa.has(Ae(e)) ? "y" : "x";
}
function Dn(e) {
  return kn(xe(e));
}
function Ma(e, t, n) {
  n === void 0 && (n = !1);
  const r = rt(e), o = Dn(e), i = Vn(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Dt(s)), [s, Dt(s)];
}
function Aa(e) {
  const t = Dt(e);
  return [wn(e), t, wn(t)];
}
function wn(e) {
  return e.replace(/start|end/g, (t) => Ea[t]);
}
const Nr = ["left", "right"], Ir = ["right", "left"], Fa = ["top", "bottom"], $a = ["bottom", "top"];
function Na(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ir : Nr : t ? Nr : Ir;
    case "left":
    case "right":
      return t ? Fa : $a;
    default:
      return [];
  }
}
function Ia(e, t, n, r) {
  const o = rt(e);
  let i = Na(Ae(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(wn)))), i;
}
function Dt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ra[t]);
}
function Oa(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Eo(e) {
  return typeof e != "number" ? Oa(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Lt(e) {
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
function Or(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = xe(t), s = Dn(t), a = Vn(s), l = Ae(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
  let f;
  switch (l) {
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
        y: p
      };
      break;
    case "left":
      f = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (rt(t)) {
    case "start":
      f[s] -= d * (n && c ? -1 : 1);
      break;
    case "end":
      f[s] += d * (n && c ? -1 : 1);
      break;
  }
  return f;
}
const ka = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: p
  } = Or(c, r, l), d = r, f = {}, b = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: x,
      fn: v
    } = a[m], {
      x: w,
      y,
      data: C,
      reset: S
    } = await v({
      x: u,
      y: p,
      initialPlacement: r,
      placement: d,
      strategy: o,
      middlewareData: f,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = w ?? u, p = y ?? p, f = {
      ...f,
      [x]: {
        ...f[x],
        ...C
      }
    }, S && b <= 50 && (b++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (c = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: u,
      y: p
    } = Or(c, d, l)), m = -1);
  }
  return {
    x: u,
    y: p,
    placement: d,
    strategy: o,
    middlewareData: f
  };
};
async function ht(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: p = "floating",
    altBoundary: d = !1,
    padding: f = 0
  } = Me(t, e), b = Eo(f), x = a[d ? p === "floating" ? "reference" : "floating" : p], v = Lt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), w = p === "floating" ? {
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
  }, S = Lt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: y,
    strategy: l
  }) : w);
  return {
    top: (v.top - S.top + b.top) / C.y,
    bottom: (S.bottom - v.bottom + b.bottom) / C.y,
    left: (v.left - S.left + b.left) / C.x,
    right: (S.right - v.right + b.right) / C.x
  };
}
const Va = (e) => ({
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
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = Me(e, t) || {};
    if (c == null)
      return {};
    const p = Eo(u), d = {
      x: n,
      y: r
    }, f = Dn(o), b = Vn(f), m = await s.getDimensions(c), x = f === "y", v = x ? "top" : "left", w = x ? "bottom" : "right", y = x ? "clientHeight" : "clientWidth", C = i.reference[b] + i.reference[f] - d[f] - i.floating[b], S = d[f] - i.reference[f], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let R = E ? E[y] : 0;
    (!R || !await (s.isElement == null ? void 0 : s.isElement(E))) && (R = a.floating[y] || i.floating[b]);
    const _ = C / 2 - S / 2, O = R / 2 - m[b] / 2 - 1, I = ke(p[v], O), L = ke(p[w], O), P = I, B = R - m[b] - L, k = R / 2 - m[b] / 2 + _, U = xn(P, k, B), T = !l.arrow && rt(o) != null && k !== U && i.reference[b] / 2 - (k < P ? I : L) - m[b] / 2 < 0, H = T ? k < P ? k - P : k - B : 0;
    return {
      [f]: d[f] + H,
      data: {
        [f]: U,
        centerOffset: k - U - H,
        ...T && {
          alignmentOffset: H
        }
      },
      reset: T
    };
  }
}), Da = function(e) {
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
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: p = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: m = !0,
        ...x
      } = Me(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const v = Ae(o), w = xe(a), y = Ae(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = d || (y || !m ? [Dt(a)] : Aa(a)), E = b !== "none";
      !d && E && S.push(...Ia(a, m, b, C));
      const R = [a, ...S], _ = await ht(t, x), O = [];
      let I = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && O.push(_[v]), p) {
        const k = Ma(o, s, C);
        O.push(_[k[0]], _[k[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: O
      }], !O.every((k) => k <= 0)) {
        var L, P;
        const k = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, U = R[k];
        if (U && (!(p === "alignment" ? w !== xe(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((F) => F.overflows[0] > 0 && xe(F.placement) === w)))
          return {
            data: {
              index: k,
              overflows: I
            },
            reset: {
              placement: U
            }
          };
        let T = (P = I.filter((H) => H.overflows[0] <= 0).sort((H, F) => H.overflows[1] - F.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!T)
          switch (f) {
            case "bestFit": {
              var B;
              const H = (B = I.filter((F) => {
                if (E) {
                  const z = xe(F.placement);
                  return z === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((z) => z > 0).reduce((z, X) => z + X, 0)]).sort((F, z) => F[1] - z[1])[0]) == null ? void 0 : B[0];
              H && (T = H);
              break;
            }
            case "initialPlacement":
              T = a;
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
function kr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Vr(e) {
  return _a.some((t) => e[t] >= 0);
}
const La = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Me(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await ht(t, {
            ...o,
            elementContext: "reference"
          }), s = kr(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Vr(s)
            }
          };
        }
        case "escaped": {
          const i = await ht(t, {
            ...o,
            altBoundary: !0
          }), s = kr(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Vr(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Po = /* @__PURE__ */ new Set(["left", "top"]);
async function Ta(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Ae(n), a = rt(n), l = xe(n) === "y", c = Po.has(s) ? -1 : 1, u = i && l ? -1 : 1, p = Me(t, e);
  let {
    mainAxis: d,
    crossAxis: f,
    alignmentAxis: b
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof b == "number" && (f = a === "end" ? b * -1 : b), l ? {
    x: f * u,
    y: d * c
  } : {
    x: d * c,
    y: f * u
  };
}
const za = function(e) {
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
      } = t, l = await Ta(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Ba = function(e) {
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
          fn: (x) => {
            let {
              x: v,
              y: w
            } = x;
            return {
              x: v,
              y: w
            };
          }
        },
        ...l
      } = Me(e, t), c = {
        x: n,
        y: r
      }, u = await ht(t, l), p = xe(Ae(o)), d = kn(p);
      let f = c[d], b = c[p];
      if (i) {
        const x = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", w = f + u[x], y = f - u[v];
        f = xn(w, f, y);
      }
      if (s) {
        const x = p === "y" ? "top" : "left", v = p === "y" ? "bottom" : "right", w = b + u[x], y = b - u[v];
        b = xn(w, b, y);
      }
      const m = a.fn({
        ...t,
        [d]: f,
        [p]: b
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [d]: i,
            [p]: s
          }
        }
      };
    }
  };
}, Ha = function(e) {
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
        mainAxis: l = !0,
        crossAxis: c = !0
      } = Me(e, t), u = {
        x: n,
        y: r
      }, p = xe(o), d = kn(p);
      let f = u[d], b = u[p];
      const m = Me(a, t), x = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const y = d === "y" ? "height" : "width", C = i.reference[d] - i.floating[y] + x.mainAxis, S = i.reference[d] + i.reference[y] - x.mainAxis;
        f < C ? f = C : f > S && (f = S);
      }
      if (c) {
        var v, w;
        const y = d === "y" ? "width" : "height", C = Po.has(Ae(o)), S = i.reference[p] - i.floating[y] + (C && ((v = s.offset) == null ? void 0 : v[p]) || 0) + (C ? 0 : x.crossAxis), E = i.reference[p] + i.reference[y] + (C ? 0 : ((w = s.offset) == null ? void 0 : w[p]) || 0) - (C ? x.crossAxis : 0);
        b < S ? b = S : b > E && (b = E);
      }
      return {
        [d]: f,
        [p]: b
      };
    }
  };
}, Ga = function(e) {
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
        apply: l = () => {
        },
        ...c
      } = Me(e, t), u = await ht(t, c), p = Ae(o), d = rt(o), f = xe(o) === "y", {
        width: b,
        height: m
      } = i.floating;
      let x, v;
      p === "top" || p === "bottom" ? (x = p, v = d === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = p, x = d === "end" ? "top" : "bottom");
      const w = m - u.top - u.bottom, y = b - u.left - u.right, C = ke(m - u[x], w), S = ke(b - u[v], y), E = !t.middlewareData.shift;
      let R = C, _ = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (_ = y), (r = t.middlewareData.shift) != null && r.enabled.y && (R = w), E && !d) {
        const I = ie(u.left, 0), L = ie(u.right, 0), P = ie(u.top, 0), B = ie(u.bottom, 0);
        f ? _ = b - 2 * (I !== 0 || L !== 0 ? I + L : ie(u.left, u.right)) : R = m - 2 * (P !== 0 || B !== 0 ? P + B : ie(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: _,
        availableHeight: R
      });
      const O = await s.getDimensions(a.floating);
      return b !== O.width || m !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Gt() {
  return typeof window < "u";
}
function ot(e) {
  return Mo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ae(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ce(e) {
  var t;
  return (t = (Mo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Mo(e) {
  return Gt() ? e instanceof Node || e instanceof ae(e).Node : !1;
}
function pe(e) {
  return Gt() ? e instanceof Element || e instanceof ae(e).Element : !1;
}
function ye(e) {
  return Gt() ? e instanceof HTMLElement || e instanceof ae(e).HTMLElement : !1;
}
function Dr(e) {
  return !Gt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ae(e).ShadowRoot;
}
const ja = /* @__PURE__ */ new Set(["inline", "contents"]);
function vt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = me(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ja.has(o);
}
const Wa = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Ua(e) {
  return Wa.has(ot(e));
}
const qa = [":popover-open", ":modal"];
function jt(e) {
  return qa.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Xa = ["transform", "translate", "scale", "rotate", "perspective"], Za = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ya = ["paint", "layout", "strict", "content"];
function Ln(e) {
  const t = Tn(), n = pe(e) ? me(e) : e;
  return Xa.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Za.some((r) => (n.willChange || "").includes(r)) || Ya.some((r) => (n.contain || "").includes(r));
}
function Ka(e) {
  let t = Ve(e);
  for (; ye(t) && !et(t); ) {
    if (Ln(t))
      return t;
    if (jt(t))
      return null;
    t = Ve(t);
  }
  return null;
}
function Tn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Qa = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function et(e) {
  return Qa.has(ot(e));
}
function me(e) {
  return ae(e).getComputedStyle(e);
}
function Wt(e) {
  return pe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ve(e) {
  if (ot(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Dr(e) && e.host || // Fallback.
    Ce(e)
  );
  return Dr(t) ? t.host : t;
}
function Ao(e) {
  const t = Ve(e);
  return et(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ye(t) && vt(t) ? t : Ao(t);
}
function bt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ao(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ae(o);
  if (i) {
    const a = yn(s);
    return t.concat(s, s.visualViewport || [], vt(o) ? o : [], a && n ? bt(a) : []);
  }
  return t.concat(o, bt(o, [], n));
}
function yn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Fo(e) {
  const t = me(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ye(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Vt(n) !== i || Vt(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function zn(e) {
  return pe(e) ? e : e.contextElement;
}
function Ke(e) {
  const t = zn(e);
  if (!ye(t))
    return we(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Fo(t);
  let s = (i ? Vt(n.width) : n.width) / r, a = (i ? Vt(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Ja = /* @__PURE__ */ we(0);
function $o(e) {
  const t = ae(e);
  return !Tn() || !t.visualViewport ? Ja : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function el(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ae(e) ? !1 : t;
}
function ze(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = zn(e);
  let s = we(1);
  t && (r ? pe(r) && (s = Ke(r)) : s = Ke(e));
  const a = el(i, n, r) ? $o(i) : we(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, u = o.width / s.x, p = o.height / s.y;
  if (i) {
    const d = ae(i), f = r && pe(r) ? ae(r) : r;
    let b = d, m = yn(b);
    for (; m && r && f !== b; ) {
      const x = Ke(m), v = m.getBoundingClientRect(), w = me(m), y = v.left + (m.clientLeft + parseFloat(w.paddingLeft)) * x.x, C = v.top + (m.clientTop + parseFloat(w.paddingTop)) * x.y;
      l *= x.x, c *= x.y, u *= x.x, p *= x.y, l += y, c += C, b = ae(m), m = yn(b);
    }
  }
  return Lt({
    width: u,
    height: p,
    x: l,
    y: c
  });
}
function Bn(e, t) {
  const n = Wt(e).scrollLeft;
  return t ? t.left + n : ze(Ce(e)).left + n;
}
function No(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Bn(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function tl(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Ce(r), a = t ? jt(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = we(1);
  const u = we(0), p = ye(r);
  if ((p || !p && !i) && ((ot(r) !== "body" || vt(s)) && (l = Wt(r)), ye(r))) {
    const f = ze(r);
    c = Ke(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  const d = s && !p && !i ? No(s, l, !0) : we(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + d.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + d.y
  };
}
function nl(e) {
  return Array.from(e.getClientRects());
}
function rl(e) {
  const t = Ce(e), n = Wt(e), r = e.ownerDocument.body, o = ie(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ie(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Bn(e);
  const a = -n.scrollTop;
  return me(r).direction === "rtl" && (s += ie(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function ol(e, t) {
  const n = ae(e), r = Ce(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = Tn();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const il = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function sl(e, t) {
  const n = ze(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ye(e) ? Ke(e) : we(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Lr(e, t, n) {
  let r;
  if (t === "viewport")
    r = ol(e, n);
  else if (t === "document")
    r = rl(Ce(e));
  else if (pe(t))
    r = sl(t, n);
  else {
    const o = $o(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Lt(r);
}
function Io(e, t) {
  const n = Ve(e);
  return n === t || !pe(n) || et(n) ? !1 : me(n).position === "fixed" || Io(n, t);
}
function al(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = bt(e, [], !1).filter((a) => pe(a) && ot(a) !== "body"), o = null;
  const i = me(e).position === "fixed";
  let s = i ? Ve(e) : e;
  for (; pe(s) && !et(s); ) {
    const a = me(s), l = Ln(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && il.has(o.position) || vt(s) && !l && Io(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Ve(s);
  }
  return t.set(e, r), r;
}
function ll(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? jt(t) ? [] : al(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, u) => {
    const p = Lr(t, u, o);
    return c.top = ie(p.top, c.top), c.right = ke(p.right, c.right), c.bottom = ke(p.bottom, c.bottom), c.left = ie(p.left, c.left), c;
  }, Lr(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function cl(e) {
  const {
    width: t,
    height: n
  } = Fo(e);
  return {
    width: t,
    height: n
  };
}
function ul(e, t, n) {
  const r = ye(t), o = Ce(t), i = n === "fixed", s = ze(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = we(0);
  function c() {
    l.x = Bn(o);
  }
  if (r || !r && !i)
    if ((ot(t) !== "body" || vt(o)) && (a = Wt(t)), r) {
      const f = ze(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const u = o && !r && !i ? No(o, a) : we(0), p = s.left + a.scrollLeft - l.x - u.x, d = s.top + a.scrollTop - l.y - u.y;
  return {
    x: p,
    y: d,
    width: s.width,
    height: s.height
  };
}
function rn(e) {
  return me(e).position === "static";
}
function Tr(e, t) {
  if (!ye(e) || me(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ce(e) === n && (n = n.ownerDocument.body), n;
}
function Oo(e, t) {
  const n = ae(e);
  if (jt(e))
    return n;
  if (!ye(e)) {
    let o = Ve(e);
    for (; o && !et(o); ) {
      if (pe(o) && !rn(o))
        return o;
      o = Ve(o);
    }
    return n;
  }
  let r = Tr(e, t);
  for (; r && Ua(r) && rn(r); )
    r = Tr(r, t);
  return r && et(r) && rn(r) && !Ln(r) ? n : r || Ka(e) || n;
}
const dl = async function(e) {
  const t = this.getOffsetParent || Oo, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: ul(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function fl(e) {
  return me(e).direction === "rtl";
}
const gl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: tl,
  getDocumentElement: Ce,
  getClippingRect: ll,
  getOffsetParent: Oo,
  getElementRects: dl,
  getClientRects: nl,
  getDimensions: cl,
  getScale: Ke,
  isElement: pe,
  isRTL: fl
};
function ko(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function pl(e, t) {
  let n = null, r;
  const o = Ce(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const c = e.getBoundingClientRect(), {
      left: u,
      top: p,
      width: d,
      height: f
    } = c;
    if (a || t(), !d || !f)
      return;
    const b = St(p), m = St(o.clientWidth - (u + d)), x = St(o.clientHeight - (p + f)), v = St(u), y = {
      rootMargin: -b + "px " + -m + "px " + -x + "px " + -v + "px",
      threshold: ie(0, ke(1, l)) || 1
    };
    let C = !0;
    function S(E) {
      const R = E[0].intersectionRatio;
      if (R !== l) {
        if (!C)
          return s();
        R ? s(!1, R) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !ko(c, e.getBoundingClientRect()) && s(), C = !1;
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
function ml(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = zn(e), u = o || i ? [...c ? bt(c) : [], ...bt(t)] : [];
  u.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const p = c && a ? pl(c, n) : null;
  let d = -1, f = null;
  s && (f = new ResizeObserver((v) => {
    let [w] = v;
    w && w.target === c && f && (f.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var y;
      (y = f) == null || y.observe(t);
    })), n();
  }), c && !l && f.observe(c), f.observe(t));
  let b, m = l ? ze(e) : null;
  l && x();
  function x() {
    const v = ze(e);
    m && !ko(m, v) && n(), m = v, b = requestAnimationFrame(x);
  }
  return n(), () => {
    var v;
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), p == null || p(), (v = f) == null || v.disconnect(), f = null, l && cancelAnimationFrame(b);
  };
}
const hl = za, bl = Ba, vl = Da, xl = Ga, wl = La, zr = Va, yl = Ha, Cl = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: gl,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return ka(e, t, {
    ...o,
    platform: i
  });
};
var Sl = typeof document < "u", _l = function() {
}, It = Sl ? ns : _l;
function Tt(e, t) {
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
        if (!Tt(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Tt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Vo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Br(e, t) {
  const n = Vo(e);
  return Math.round(t * n) / n;
}
function on(e) {
  const t = g.useRef(e);
  return It(() => {
    t.current = e;
  }), t;
}
function Rl(e) {
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
    whileElementsMounted: l,
    open: c
  } = e, [u, p] = g.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [d, f] = g.useState(r);
  Tt(d, r) || f(r);
  const [b, m] = g.useState(null), [x, v] = g.useState(null), w = g.useCallback((F) => {
    F !== E.current && (E.current = F, m(F));
  }, []), y = g.useCallback((F) => {
    F !== R.current && (R.current = F, v(F));
  }, []), C = i || b, S = s || x, E = g.useRef(null), R = g.useRef(null), _ = g.useRef(u), O = l != null, I = on(l), L = on(o), P = on(c), B = g.useCallback(() => {
    if (!E.current || !R.current)
      return;
    const F = {
      placement: t,
      strategy: n,
      middleware: d
    };
    L.current && (F.platform = L.current), Cl(E.current, R.current, F).then((z) => {
      const X = {
        ...z,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: P.current !== !1
      };
      k.current && !Tt(_.current, X) && (_.current = X, to.flushSync(() => {
        p(X);
      }));
    });
  }, [d, t, n, L, P]);
  It(() => {
    c === !1 && _.current.isPositioned && (_.current.isPositioned = !1, p((F) => ({
      ...F,
      isPositioned: !1
    })));
  }, [c]);
  const k = g.useRef(!1);
  It(() => (k.current = !0, () => {
    k.current = !1;
  }), []), It(() => {
    if (C && (E.current = C), S && (R.current = S), C && S) {
      if (I.current)
        return I.current(C, S, B);
      B();
    }
  }, [C, S, B, I, O]);
  const U = g.useMemo(() => ({
    reference: E,
    floating: R,
    setReference: w,
    setFloating: y
  }), [w, y]), T = g.useMemo(() => ({
    reference: C,
    floating: S
  }), [C, S]), H = g.useMemo(() => {
    const F = {
      position: n,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return F;
    const z = Br(T.floating, u.x), X = Br(T.floating, u.y);
    return a ? {
      ...F,
      transform: "translate(" + z + "px, " + X + "px)",
      ...Vo(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: z,
      top: X
    };
  }, [n, a, T.floating, u.x, u.y]);
  return g.useMemo(() => ({
    ...u,
    update: B,
    refs: U,
    elements: T,
    floatingStyles: H
  }), [u, B, U, T, H]);
}
const El = (e) => {
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
      return r && t(r) ? r.current != null ? zr({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? zr({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Pl = (e, t) => ({
  ...hl(e),
  options: [e, t]
}), Ml = (e, t) => ({
  ...bl(e),
  options: [e, t]
}), Al = (e, t) => ({
  ...yl(e),
  options: [e, t]
}), Fl = (e, t) => ({
  ...vl(e),
  options: [e, t]
}), $l = (e, t) => ({
  ...xl(e),
  options: [e, t]
}), Nl = (e, t) => ({
  ...wl(e),
  options: [e, t]
}), Il = (e, t) => ({
  ...El(e),
  options: [e, t]
});
var Ol = "Arrow", Do = g.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ h(
    re.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ h("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Do.displayName = Ol;
var kl = Do;
function Vl(e) {
  const [t, n] = g.useState(void 0);
  return Oe(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          s = c.inlineSize, a = c.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Hn = "Popper", [Lo, To] = Nn(Hn), [Dl, zo] = Lo(Hn), Bo = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = g.useState(null);
  return /* @__PURE__ */ h(Dl, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Bo.displayName = Hn;
var Ho = "PopperAnchor", Go = g.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = zo(Ho, n), s = g.useRef(null), a = he(t, s);
    return g.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
    }), r ? null : /* @__PURE__ */ h(re.div, { ...o, ref: a });
  }
);
Go.displayName = Ho;
var Gn = "PopperContent", [Ll, Tl] = Lo(Gn), jo = g.forwardRef(
  (e, t) => {
    var ee, q, Se, He, Te, Ge;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: u = 0,
      sticky: p = "partial",
      hideWhenDetached: d = !1,
      updatePositionStrategy: f = "optimized",
      onPlaced: b,
      ...m
    } = e, x = zo(Gn, n), [v, w] = g.useState(null), y = he(t, (de) => w(de)), [C, S] = g.useState(null), E = Vl(C), R = (E == null ? void 0 : E.width) ?? 0, _ = (E == null ? void 0 : E.height) ?? 0, O = r + (i !== "center" ? "-" + i : ""), I = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, L = Array.isArray(c) ? c : [c], P = L.length > 0, B = {
      padding: I,
      boundary: L.filter(Bl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: P
    }, { refs: k, floatingStyles: U, placement: T, isPositioned: H, middlewareData: F } = Rl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: (...de) => ml(...de, {
        animationFrame: f === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        Pl({ mainAxis: o + _, alignmentAxis: s }),
        l && Ml({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? Al() : void 0,
          ...B
        }),
        l && Fl({ ...B }),
        $l({
          ...B,
          apply: ({ elements: de, rects: _e, availableWidth: tr, availableHeight: st }) => {
            const { width: at, height: Yt } = _e.reference, je = de.floating.style;
            je.setProperty("--radix-popper-available-width", `${tr}px`), je.setProperty("--radix-popper-available-height", `${st}px`), je.setProperty("--radix-popper-anchor-width", `${at}px`), je.setProperty("--radix-popper-anchor-height", `${Yt}px`);
          }
        }),
        C && Il({ element: C, padding: a }),
        Hl({ arrowWidth: R, arrowHeight: _ }),
        d && Nl({ strategy: "referenceHidden", ...B })
      ]
    }), [z, X] = qo(T), M = Je(b);
    Oe(() => {
      H && (M == null || M());
    }, [H, M]);
    const G = (ee = F.arrow) == null ? void 0 : ee.x, Y = (q = F.arrow) == null ? void 0 : q.y, Q = ((Se = F.arrow) == null ? void 0 : Se.centerOffset) !== 0, [ce, oe] = g.useState();
    return Oe(() => {
      v && oe(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ h(
      "div",
      {
        ref: k.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: H ? U.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ce,
          "--radix-popper-transform-origin": [
            (He = F.transformOrigin) == null ? void 0 : He.x,
            (Te = F.transformOrigin) == null ? void 0 : Te.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Ge = F.hide) == null ? void 0 : Ge.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ h(
          Ll,
          {
            scope: n,
            placedSide: z,
            onArrowChange: S,
            arrowX: G,
            arrowY: Y,
            shouldHideArrow: Q,
            children: /* @__PURE__ */ h(
              re.div,
              {
                "data-side": z,
                "data-align": X,
                ...m,
                ref: y,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: H ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
jo.displayName = Gn;
var Wo = "PopperArrow", zl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Uo = g.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = Tl(Wo, r), s = zl[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ h(
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
        children: /* @__PURE__ */ h(
          kl,
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
Uo.displayName = Wo;
function Bl(e) {
  return e !== null;
}
var Hl = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, v, w;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, u] = qo(n), p = { start: "0%", center: "50%", end: "100%" }[u], d = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2, f = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
    let b = "", m = "";
    return c === "bottom" ? (b = s ? p : `${d}px`, m = `${-l}px`) : c === "top" ? (b = s ? p : `${d}px`, m = `${r.floating.height + l}px`) : c === "right" ? (b = `${-l}px`, m = s ? p : `${f}px`) : c === "left" && (b = `${r.floating.width + l}px`, m = s ? p : `${f}px`), { data: { x: b, y: m } };
  }
});
function qo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Gl = Bo, Xo = Go, jl = jo, Wl = Uo, Ul = "Portal", jn = g.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, i] = g.useState(!1);
  Oe(() => i(!0), []);
  const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? os.createPortal(/* @__PURE__ */ h(re.div, { ...r, ref: t }), s) : null;
});
jn.displayName = Ul;
function ql(e, t) {
  return g.useReducer((n, r) => t[n][r] ?? n, e);
}
var it = (e) => {
  const { present: t, children: n } = e, r = Xl(t), o = typeof n == "function" ? n({ present: r.isPresent }) : g.Children.only(n), i = he(r.ref, Zl(o));
  return typeof n == "function" || r.isPresent ? g.cloneElement(o, { ref: i }) : null;
};
it.displayName = "Presence";
function Xl(e) {
  const [t, n] = g.useState(), r = g.useRef(null), o = g.useRef(e), i = g.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = ql(s, {
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
  return g.useEffect(() => {
    const c = _t(r.current);
    i.current = a === "mounted" ? c : "none";
  }, [a]), Oe(() => {
    const c = r.current, u = o.current;
    if (u !== e) {
      const d = i.current, f = _t(c);
      e ? l("MOUNT") : f === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && d !== f ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Oe(() => {
    if (t) {
      let c;
      const u = t.ownerDocument.defaultView ?? window, p = (f) => {
        const m = _t(r.current).includes(f.animationName);
        if (f.target === t && m && (l("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, d = (f) => {
        f.target === t && (i.current = _t(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        u.clearTimeout(c), t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: g.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function _t(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Zl(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Yl = g[" useInsertionEffect ".trim().toString()] || Oe;
function Zo({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = Kl({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o;
  {
    const u = g.useRef(e !== void 0);
    g.useEffect(() => {
      const p = u.current;
      p !== a && console.warn(
        `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = a;
    }, [a, r]);
  }
  const c = g.useCallback(
    (u) => {
      var p;
      if (a) {
        const d = Ql(u) ? u(e) : u;
        d !== e && ((p = s.current) == null || p.call(s, d));
      } else
        i(u);
    },
    [a, e, i, s]
  );
  return [l, c];
}
function Kl({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = g.useState(e), o = g.useRef(n), i = g.useRef(t);
  return Yl(() => {
    i.current = t;
  }, [t]), g.useEffect(() => {
    var s;
    o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function Ql(e) {
  return typeof e == "function";
}
var Jl = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, We = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), Et = {}, sn = 0, Yo = function(e) {
  return e && (e.host || Yo(e.parentNode));
}, ec = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Yo(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, tc = function(e, t, n, r) {
  var o = ec(t, Array.isArray(e) ? e : [e]);
  Et[n] || (Et[n] = /* @__PURE__ */ new WeakMap());
  var i = Et[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(p) {
    !p || a.has(p) || (a.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var u = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(d) {
      if (a.has(d))
        u(d);
      else
        try {
          var f = d.getAttribute(r), b = f !== null && f !== "false", m = (We.get(d) || 0) + 1, x = (i.get(d) || 0) + 1;
          We.set(d, m), i.set(d, x), s.push(d), m === 1 && b && Rt.set(d, !0), x === 1 && d.setAttribute(n, "true"), b || d.setAttribute(r, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", d, v);
        }
    });
  };
  return u(t), a.clear(), sn++, function() {
    s.forEach(function(p) {
      var d = We.get(p) - 1, f = i.get(p) - 1;
      We.set(p, d), i.set(p, f), d || (Rt.has(p) || p.removeAttribute(r), Rt.delete(p)), f || p.removeAttribute(n);
    }), sn--, sn || (We = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), Et = {});
  };
}, Ko = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Jl(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), tc(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ve = function() {
  return ve = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, ve.apply(this, arguments);
};
function Qo(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function nc(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ot = "right-scroll-bar-position", kt = "width-before-scroll-bar", rc = "with-scroll-bars-hidden", oc = "--removed-body-scroll-bar-size";
function an(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ic(e, t) {
  var n = rs(function() {
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
var sc = typeof window < "u" ? g.useLayoutEffect : g.useEffect, Hr = /* @__PURE__ */ new WeakMap();
function ac(e, t) {
  var n = ic(null, function(r) {
    return e.forEach(function(o) {
      return an(o, r);
    });
  });
  return sc(function() {
    var r = Hr.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || an(a, null);
      }), i.forEach(function(a) {
        o.has(a) || an(a, s);
      });
    }
    Hr.set(n, e);
  }, [e]), n;
}
function lc(e) {
  return e;
}
function cc(e, t) {
  t === void 0 && (t = lc);
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
      var l = function() {
        var u = s;
        s = [], u.forEach(i);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(u) {
          s.push(u), c();
        },
        filter: function(u) {
          return s = s.filter(u), n;
        }
      };
    }
  };
  return o;
}
function uc(e) {
  e === void 0 && (e = {});
  var t = cc(null);
  return t.options = ve({ async: !0, ssr: !1 }, e), t;
}
var Jo = function(e) {
  var t = e.sideCar, n = Qo(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return g.createElement(r, ve({}, n));
};
Jo.isSideCarExport = !0;
function dc(e, t) {
  return e.useMedium(t), Jo;
}
var ei = uc(), ln = function() {
}, Ut = g.forwardRef(function(e, t) {
  var n = g.useRef(null), r = g.useState({
    onScrollCapture: ln,
    onWheelCapture: ln,
    onTouchMoveCapture: ln
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, p = e.shards, d = e.sideCar, f = e.noRelative, b = e.noIsolation, m = e.inert, x = e.allowPinchZoom, v = e.as, w = v === void 0 ? "div" : v, y = e.gapMode, C = Qo(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = d, E = ac([n, t]), R = ve(ve({}, C), o);
  return g.createElement(
    g.Fragment,
    null,
    u && g.createElement(S, { sideCar: ei, removeScrollBar: c, shards: p, noRelative: f, noIsolation: b, inert: m, setCallbacks: i, allowPinchZoom: !!x, lockRef: n, gapMode: y }),
    s ? g.cloneElement(g.Children.only(a), ve(ve({}, R), { ref: E })) : g.createElement(w, ve({}, R, { className: l, ref: E }), a)
  );
});
Ut.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ut.classNames = {
  fullWidth: kt,
  zeroRight: Ot
};
var fc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function gc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = fc();
  return t && e.setAttribute("nonce", t), e;
}
function pc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function mc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var hc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = gc()) && (pc(t, n), mc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, bc = function() {
  var e = hc();
  return function(t, n) {
    g.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ti = function() {
  var e = bc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, vc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, cn = function(e) {
  return parseInt(e || "", 10) || 0;
}, xc = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [cn(n), cn(r), cn(o)];
}, wc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return vc;
  var t = xc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, yc = ti(), Qe = "data-scroll-locked", Cc = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(rc, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Qe, `] {
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
  
  .`).concat(Ot, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(kt, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ot, " .").concat(Ot, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(kt, " .").concat(kt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Qe, `] {
    `).concat(oc, ": ").concat(a, `px;
  }
`);
}, Gr = function() {
  var e = parseInt(document.body.getAttribute(Qe) || "0", 10);
  return isFinite(e) ? e : 0;
}, Sc = function() {
  g.useEffect(function() {
    return document.body.setAttribute(Qe, (Gr() + 1).toString()), function() {
      var e = Gr() - 1;
      e <= 0 ? document.body.removeAttribute(Qe) : document.body.setAttribute(Qe, e.toString());
    };
  }, []);
}, _c = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Sc();
  var i = g.useMemo(function() {
    return wc(o);
  }, [o]);
  return g.createElement(yc, { styles: Cc(i, !t, o, n ? "" : "!important") });
}, Cn = !1;
if (typeof window < "u")
  try {
    var Pt = Object.defineProperty({}, "passive", {
      get: function() {
        return Cn = !0, !0;
      }
    });
    window.addEventListener("test", Pt, Pt), window.removeEventListener("test", Pt, Pt);
  } catch {
    Cn = !1;
  }
var Ue = Cn ? { passive: !1 } : !1, Rc = function(e) {
  return e.tagName === "TEXTAREA";
}, ni = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Rc(e) && n[t] === "visible")
  );
}, Ec = function(e) {
  return ni(e, "overflowY");
}, Pc = function(e) {
  return ni(e, "overflowX");
}, jr = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = ri(e, r);
    if (o) {
      var i = oi(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Mc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Ac = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ri = function(e, t) {
  return e === "v" ? Ec(t) : Pc(t);
}, oi = function(e, t) {
  return e === "v" ? Mc(t) : Ac(t);
}, Fc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, $c = function(e, t, n, r, o) {
  var i = Fc(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, l = t.contains(a), c = !1, u = s > 0, p = 0, d = 0;
  do {
    if (!a)
      break;
    var f = oi(e, a), b = f[0], m = f[1], x = f[2], v = m - x - i * b;
    (b || v) && ri(e, a) && (p += v, d += b);
    var w = a.parentNode;
    a = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (u && Math.abs(p) < 1 || !u && Math.abs(d) < 1) && (c = !0), c;
}, Mt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Wr = function(e) {
  return [e.deltaX, e.deltaY];
}, Ur = function(e) {
  return e && "current" in e ? e.current : e;
}, Nc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Ic = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Oc = 0, qe = [];
function kc(e) {
  var t = g.useRef([]), n = g.useRef([0, 0]), r = g.useRef(), o = g.useState(Oc++)[0], i = g.useState(ti)[0], s = g.useRef(e);
  g.useEffect(function() {
    s.current = e;
  }, [e]), g.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = nc([e.lockRef.current], (e.shards || []).map(Ur), !0).filter(Boolean);
      return m.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = g.useCallback(function(m, x) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !s.current.allowPinchZoom;
    var v = Mt(m), w = n.current, y = "deltaX" in m ? m.deltaX : w[0] - v[0], C = "deltaY" in m ? m.deltaY : w[1] - v[1], S, E = m.target, R = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in m && R === "h" && E.type === "range")
      return !1;
    var _ = jr(R, E);
    if (!_)
      return !0;
    if (_ ? S = R : (S = R === "v" ? "h" : "v", _ = jr(R, E)), !_)
      return !1;
    if (!r.current && "changedTouches" in m && (y || C) && (r.current = S), !S)
      return !0;
    var O = r.current || S;
    return $c(O, x, m, O === "h" ? y : C);
  }, []), l = g.useCallback(function(m) {
    var x = m;
    if (!(!qe.length || qe[qe.length - 1] !== i)) {
      var v = "deltaY" in x ? Wr(x) : Mt(x), w = t.current.filter(function(S) {
        return S.name === x.type && (S.target === x.target || x.target === S.shadowParent) && Nc(S.delta, v);
      })[0];
      if (w && w.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!w) {
        var y = (s.current.shards || []).map(Ur).filter(Boolean).filter(function(S) {
          return S.contains(x.target);
        }), C = y.length > 0 ? a(x, y[0]) : !s.current.noIsolation;
        C && x.cancelable && x.preventDefault();
      }
    }
  }, []), c = g.useCallback(function(m, x, v, w) {
    var y = { name: m, delta: x, target: v, should: w, shadowParent: Vc(v) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), u = g.useCallback(function(m) {
    n.current = Mt(m), r.current = void 0;
  }, []), p = g.useCallback(function(m) {
    c(m.type, Wr(m), m.target, a(m, e.lockRef.current));
  }, []), d = g.useCallback(function(m) {
    c(m.type, Mt(m), m.target, a(m, e.lockRef.current));
  }, []);
  g.useEffect(function() {
    return qe.push(i), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", l, Ue), document.addEventListener("touchmove", l, Ue), document.addEventListener("touchstart", u, Ue), function() {
      qe = qe.filter(function(m) {
        return m !== i;
      }), document.removeEventListener("wheel", l, Ue), document.removeEventListener("touchmove", l, Ue), document.removeEventListener("touchstart", u, Ue);
    };
  }, []);
  var f = e.removeScrollBar, b = e.inert;
  return g.createElement(
    g.Fragment,
    null,
    b ? g.createElement(i, { styles: Ic(o) }) : null,
    f ? g.createElement(_c, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Vc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Dc = dc(ei, kc);
var Wn = g.forwardRef(function(e, t) {
  return g.createElement(Ut, ve({}, e, { ref: t, sideCar: Dc }));
});
Wn.classNames = Ut.classNames;
var qt = "Popover", [ii, Ud] = Nn(qt, [
  To
]), xt = To(), [Lc, Le] = ii(qt), si = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !1
  } = e, a = xt(t), l = g.useRef(null), [c, u] = g.useState(!1), [p, d] = Zo({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: qt
  });
  return /* @__PURE__ */ h(Gl, { ...a, children: /* @__PURE__ */ h(
    Lc,
    {
      scope: t,
      contentId: Nt(),
      triggerRef: l,
      open: p,
      onOpenChange: d,
      onOpenToggle: g.useCallback(() => d((f) => !f), [d]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: g.useCallback(() => u(!0), []),
      onCustomAnchorRemove: g.useCallback(() => u(!1), []),
      modal: s,
      children: n
    }
  ) });
};
si.displayName = qt;
var ai = "PopoverAnchor", Tc = g.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Le(ai, n), i = xt(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = o;
    return g.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ h(Xo, { ...i, ...r, ref: t });
  }
);
Tc.displayName = ai;
var li = "PopoverTrigger", ci = g.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Le(li, n), i = xt(n), s = he(t, o.triggerRef), a = /* @__PURE__ */ h(
      re.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": pi(o.open),
        ...r,
        ref: s,
        onClick: se(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ h(Xo, { asChild: !0, ...i, children: a });
  }
);
ci.displayName = li;
var Un = "PopoverPortal", [zc, Bc] = ii(Un, {
  forceMount: void 0
}), ui = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = Le(Un, t);
  return /* @__PURE__ */ h(zc, { scope: t, forceMount: n, children: /* @__PURE__ */ h(it, { present: n || i.open, children: /* @__PURE__ */ h(jn, { asChild: !0, container: o, children: r }) }) });
};
ui.displayName = Un;
var tt = "PopoverContent", di = g.forwardRef(
  (e, t) => {
    const n = Bc(tt, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Le(tt, e.__scopePopover);
    return /* @__PURE__ */ h(it, { present: r || i.open, children: i.modal ? /* @__PURE__ */ h(Gc, { ...o, ref: t }) : /* @__PURE__ */ h(jc, { ...o, ref: t }) });
  }
);
di.displayName = tt;
var Hc = /* @__PURE__ */ Ht("PopoverContent.RemoveScroll"), Gc = g.forwardRef(
  (e, t) => {
    const n = Le(tt, e.__scopePopover), r = g.useRef(null), o = he(t, r), i = g.useRef(!1);
    return g.useEffect(() => {
      const s = r.current;
      if (s) return Ko(s);
    }, []), /* @__PURE__ */ h(Wn, { as: Hc, allowPinchZoom: !0, children: /* @__PURE__ */ h(
      fi,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: se(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), i.current || (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: se(
          e.onPointerDownOutside,
          (s) => {
            const a = s.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0, c = a.button === 2 || l;
            i.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: se(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), jc = g.forwardRef(
  (e, t) => {
    const n = Le(tt, e.__scopePopover), r = g.useRef(!1), o = g.useRef(!1);
    return /* @__PURE__ */ h(
      fi,
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
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), fi = g.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      onFocusOutside: c,
      onInteractOutside: u,
      ...p
    } = e, d = Le(tt, n), f = xt(n);
    return _o(), /* @__PURE__ */ h(
      On,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ h(
          In,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: u,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => d.onOpenChange(!1),
            children: /* @__PURE__ */ h(
              jl,
              {
                "data-state": pi(d.open),
                role: "dialog",
                id: d.contentId,
                ...f,
                ...p,
                ref: t,
                style: {
                  ...p.style,
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
), gi = "PopoverClose", Wc = g.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Le(gi, n);
    return /* @__PURE__ */ h(
      re.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: se(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Wc.displayName = gi;
var Uc = "PopoverArrow", qc = g.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = xt(n);
    return /* @__PURE__ */ h(Wl, { ...o, ...r, ref: t });
  }
);
qc.displayName = Uc;
function pi(e) {
  return e ? "open" : "closed";
}
var Xc = si, Zc = ci, Yc = ui, Kc = di;
const Qc = W(
  "z-50 w-auto rounded-md border bg-white mt-2 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      sectioned: {
        true: "p-0",
        false: "p-0"
      },
      fullWidth: {
        true: "w-full",
        false: "w-48"
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
), Jc = (e) => {
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
}, eu = (e) => {
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
}, qn = g.forwardRef(
  ({
    children: e,
    preferredPosition: t = "below",
    preferredAlignment: n = "center",
    active: r,
    activator: o,
    preferInputActivator: i = !0,
    activatorWrapper: s = "div",
    zIndexOverride: a = 400,
    preventFocusOnClose: l = !1,
    sectioned: c = !1,
    fullWidth: u = !1,
    fullHeight: p = !1,
    fluidContent: d = !1,
    fixed: f = !1,
    ariaHaspopup: b,
    hideOnPrint: m = !1,
    onClose: x,
    autofocusTarget: v = "container",
    preventCloseOnChildOverlayClick: w = !1,
    captureOverscroll: y = !1,
    className: C,
    ...S
  }, E) => {
    const R = (k) => {
      k || x("click-outside");
    }, _ = () => {
      x("escape");
    }, O = (k) => {
      w || x("click-outside");
    }, I = D(
      Qc({
        sectioned: c,
        fullWidth: u,
        fullHeight: p,
        fluidContent: d,
        hideOnPrint: m
      }),
      C
    ), L = Jc(t), P = eu(n);
    return /* @__PURE__ */ A(Xc, { open: r, onOpenChange: R, children: [
      /* @__PURE__ */ h(Zc, { asChild: !0, children: /* @__PURE__ */ h(s, { children: o }) }),
      /* @__PURE__ */ h(Yc, { children: /* @__PURE__ */ h(
        Kc,
        {
          ref: E,
          side: L,
          align: P,
          className: I,
          style: { zIndex: a },
          onEscapeKeyDown: _,
          onInteractOutside: O,
          ...S,
          children: c ? /* @__PURE__ */ h("div", { className: "p-4", children: e }) : e
        }
      ) })
    ] });
  }
);
qn.displayName = "Popover";
const tu = W("space-y-1", {
  variants: {
    tone: {
      magic: "border-l-4 border-purple-500 pl-4",
      default: ""
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
      false: ""
    }
  },
  defaultVariants: {
    tone: "default",
    disabled: !1
  }
}), nu = W(
  "flex items-start gap-1 p-1 rounded-lg transition-colors",
  {
    variants: {
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "cursor-pointer"
      },
      selected: {
        true: "bg-black border-black",
        false: ""
      }
    },
    defaultVariants: {
      disabled: !1,
      selected: !1
    }
  }
), mi = g.forwardRef(
  ({
    title: e,
    choices: t,
    selected: n,
    name: r = "choiceList",
    allowMultiple: o = !1,
    titleHidden: i = !1,
    error: s,
    disabled: a = !1,
    onChange: l,
    tone: c,
    className: u,
    asChild: p = !1,
    ...d
  }, f) => {
    const b = (v, w) => {
      if (a) return;
      let y;
      o ? w ? y = [...n, v] : y = n.filter((C) => C !== v) : y = w ? [v] : [], l && l(y, r);
    }, m = () => {
      a || l && l([], r);
    }, x = D(
      tu({
        tone: c === "magic" ? "magic" : "default",
        disabled: a
      }),
      u
    );
    return /* @__PURE__ */ A(
      "fieldset",
      {
        ref: f,
        className: x,
        disabled: a,
        ...d,
        children: [
          !i && /* @__PURE__ */ h("legend", { className: "text-sm font-medium text-gray-900 mb-3", children: e }),
          /* @__PURE__ */ h("div", { children: t.map((v, w) => {
            const y = n.includes(v.value), C = `${r}-${v.value}-${w}`, S = o ? "checkbox" : "radio";
            return /* @__PURE__ */ A(
              "label",
              {
                htmlFor: C,
                className: D(
                  nu({
                    disabled: a || v.disabled,
                    selected: y
                  })
                ),
                children: [
                  /* @__PURE__ */ h(
                    "input",
                    {
                      type: S,
                      id: C,
                      name: o ? `${r}[]` : r,
                      value: v.value,
                      checked: y,
                      disabled: a || v.disabled,
                      onChange: (E) => b(v.value, E.target.checked),
                      className: "mt-0.5 h-4 w-4 text-black rounded hover:bg-gray-400 accent-black"
                    }
                  ),
                  /* @__PURE__ */ A("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ h(ue, { variant: "bodyMd", as: "span", children: v.label }),
                    v.helpText && /* @__PURE__ */ h(
                      ue,
                      {
                        variant: "bodySm",
                        as: "p",
                        tone: "subdued",
                        className: "mt-1",
                        children: v.helpText
                      }
                    )
                  ] })
                ]
              },
              v.value
            );
          }) }),
          /* @__PURE__ */ h(ne, { variant: "plain", onClick: m, disabled: a, children: "Clear" }),
          s && /* @__PURE__ */ h(ue, { variant: "bodySm", tone: "critical", as: "p", className: "mt-2", children: s })
        ]
      }
    );
  }
);
mi.displayName = "ChoiceList";
const ru = (e) => e && {
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
}[e] || "bg-white", ou = W(
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
), iu = (e) => {
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
}, su = g.forwardRef(
  ({
    children: e,
    background: t = "bg-surface",
    padding: n,
    roundedAbove: r = "sm",
    className: o,
    ...i
  }, s) => {
    const a = D(
      ou({
        roundedAbove: r
      }),
      ru(t),
      iu(n),
      // Exact Polaris border color: rgba(227, 227, 227, 1)
      "[border-color:rgba(227,227,227,1)]",
      // Exact Polaris shadow-300: 0px 4px 6px -2px rgba(26, 26, 26, 0.20)
      "[box-shadow:0px_4px_6px_-2px_rgba(26,26,26,0.20)]",
      // Exact Polaris text color: rgba(48, 48, 48, 1)
      "[color:rgba(48,48,48,1)]",
      o
    );
    return /* @__PURE__ */ h("div", { ref: s, className: a, ...i, children: e });
  }
);
su.displayName = "Card";
var Xt = "Dialog", [hi, qd] = Nn(Xt), [au, be] = hi(Xt), bi = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, a = g.useRef(null), l = g.useRef(null), [c, u] = Zo({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Xt
  });
  return /* @__PURE__ */ h(
    au,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: Nt(),
      titleId: Nt(),
      descriptionId: Nt(),
      open: c,
      onOpenChange: u,
      onOpenToggle: g.useCallback(() => u((p) => !p), [u]),
      modal: s,
      children: n
    }
  );
};
bi.displayName = Xt;
var vi = "DialogTrigger", lu = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = be(vi, n), i = he(t, o.triggerRef);
    return /* @__PURE__ */ h(
      re.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Yn(o.open),
        ...r,
        ref: i,
        onClick: se(e.onClick, o.onOpenToggle)
      }
    );
  }
);
lu.displayName = vi;
var Xn = "DialogPortal", [cu, xi] = hi(Xn, {
  forceMount: void 0
}), wi = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = be(Xn, t);
  return /* @__PURE__ */ h(cu, { scope: t, forceMount: n, children: g.Children.map(r, (s) => /* @__PURE__ */ h(it, { present: n || i.open, children: /* @__PURE__ */ h(jn, { asChild: !0, container: o, children: s }) })) });
};
wi.displayName = Xn;
var zt = "DialogOverlay", yi = g.forwardRef(
  (e, t) => {
    const n = xi(zt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = be(zt, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ h(it, { present: r || i.open, children: /* @__PURE__ */ h(du, { ...o, ref: t }) }) : null;
  }
);
yi.displayName = zt;
var uu = /* @__PURE__ */ Ht("DialogOverlay.RemoveScroll"), du = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = be(zt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ h(Wn, { as: uu, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ h(
        re.div,
        {
          "data-state": Yn(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Be = "DialogContent", Ci = g.forwardRef(
  (e, t) => {
    const n = xi(Be, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = be(Be, e.__scopeDialog);
    return /* @__PURE__ */ h(it, { present: r || i.open, children: i.modal ? /* @__PURE__ */ h(fu, { ...o, ref: t }) : /* @__PURE__ */ h(gu, { ...o, ref: t }) });
  }
);
Ci.displayName = Be;
var fu = g.forwardRef(
  (e, t) => {
    const n = be(Be, e.__scopeDialog), r = g.useRef(null), o = he(t, n.contentRef, r);
    return g.useEffect(() => {
      const i = r.current;
      if (i) return Ko(i);
    }, []), /* @__PURE__ */ h(
      Si,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: se(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: se(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: se(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), gu = g.forwardRef(
  (e, t) => {
    const n = be(Be, e.__scopeDialog), r = g.useRef(!1), o = g.useRef(!1);
    return /* @__PURE__ */ h(
      Si,
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
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), Si = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...s } = e, a = be(Be, n), l = g.useRef(null), c = he(t, l);
    return _o(), /* @__PURE__ */ A(mt, { children: [
      /* @__PURE__ */ h(
        On,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ h(
            In,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Yn(a.open),
              ...s,
              ref: c,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ A(mt, { children: [
        /* @__PURE__ */ h(hu, { titleId: a.titleId }),
        /* @__PURE__ */ h(vu, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Zn = "DialogTitle", pu = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = be(Zn, n);
    return /* @__PURE__ */ h(re.h2, { id: o.titleId, ...r, ref: t });
  }
);
pu.displayName = Zn;
var _i = "DialogDescription", mu = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = be(_i, n);
    return /* @__PURE__ */ h(re.p, { id: o.descriptionId, ...r, ref: t });
  }
);
mu.displayName = _i;
var Ri = "DialogClose", Ei = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = be(Ri, n);
    return /* @__PURE__ */ h(
      re.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: se(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Ei.displayName = Ri;
function Yn(e) {
  return e ? "open" : "closed";
}
var Pi = "DialogTitleWarning", [Xd, Mi] = ra(Pi, {
  contentName: Be,
  titleName: Zn,
  docsSlug: "dialog"
}), hu = ({ titleId: e }) => {
  const t = Mi(Pi), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return g.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, bu = "DialogDescriptionWarning", vu = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Mi(bu).contentName}}.`;
  return g.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, xu = bi, wu = wi, yu = yi, Cu = Ci, Su = Ei;
function _u({
  ...e
}) {
  return /* @__PURE__ */ h(xu, { "data-slot": "dialog", ...e });
}
function Ai({
  ...e
}) {
  return /* @__PURE__ */ h(wu, { "data-slot": "dialog-portal", ...e });
}
function Fi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ h(
    yu,
    {
      "data-slot": "dialog-overlay",
      className: D(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Ru({
  className: e,
  children: t,
  showCloseButton: n = !0,
  ...r
}) {
  return /* @__PURE__ */ A(Ai, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ h(Fi, {}),
    /* @__PURE__ */ A(
      Cu,
      {
        "data-slot": "dialog-content",
        className: D(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...r,
        children: [
          t,
          n && /* @__PURE__ */ A(
            Su,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ h(Fn, {}),
                /* @__PURE__ */ h("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
const Eu = W(
  // Base styles for all modals
  "bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-0 rounded-lg border border-gray-200 shadow-lg duration-200 font-inter",
  {
    variants: {
      variant: {
        small: "max-w-sm",
        base: "max-w-lg",
        large: "max-w-2xl",
        max: "max-w-[90vw] max-h-[90vh]"
      }
    },
    defaultVariants: {
      variant: "base"
    }
  }
), Pu = g.forwardRef(
  ({
    id: e,
    children: t,
    src: n,
    variant: r = "base",
    open: o,
    onShow: i,
    onHide: s,
    onOpenChange: a,
    className: l,
    showCloseButton: c = !0,
    actions: u,
    ...p
  }, d) => {
    const f = g.useCallback(
      (m) => {
        m && i ? i() : !m && s && s(), a && a(m);
      },
      [i, s, a]
    ), b = () => n ? /* @__PURE__ */ A("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ h(
        "iframe",
        {
          src: n,
          className: "w-full flex-1 min-h-[400px] border-0",
          title: `Modal content from ${n}`,
          ...p
        }
      ),
      u && /* @__PURE__ */ h("div", { className: "border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-2", children: u })
    ] }) : /* @__PURE__ */ A("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ h("div", { className: "flex-1", children: t }),
      u && /* @__PURE__ */ h("div", { className: "border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-2", children: u })
    ] });
    return /* @__PURE__ */ h(_u, { open: o, onOpenChange: f, children: /* @__PURE__ */ A(Ai, { children: [
      /* @__PURE__ */ h(Fi, { className: "bg-black/50" }),
      /* @__PURE__ */ h(
        Ru,
        {
          ref: d,
          className: D(
            Eu({ variant: r }),
            "p-0 overflow-hidden",
            // Remove default padding and handle overflow
            l
          ),
          showCloseButton: c,
          ...p,
          children: b()
        }
      )
    ] }) });
  }
);
Pu.displayName = "Modal";
const Mu = W(
  // Base styles for title bar
  "flex items-center justify-between px-6 py-4 bg-[#e3e3e3] font-inter",
  {
    variants: {
      showBorder: {
        true: "border-b border-gray-200",
        false: ""
      }
    },
    defaultVariants: {
      showBorder: !0
    }
  }
), Au = W("text-lg font-semibold text-gray-900 leading-6"), Fu = W("flex items-center gap-2"), $u = g.forwardRef(
  ({ title: e, children: t, className: n, showBorder: r = !0, ...o }, i) => /* @__PURE__ */ A(
    "div",
    {
      ref: i,
      className: D(Mu({ showBorder: r }), n),
      ...o,
      children: [
        e && /* @__PURE__ */ h("h2", { className: D(Au()), children: e }),
        t && /* @__PURE__ */ h("div", { className: D(Fu()), children: t }),
        !e && t && /* @__PURE__ */ h("div", { className: "flex-1" })
      ]
    }
  )
);
$u.displayName = "TitleBar";
const qr = (e) => e && {
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
}[e] || "", Xe = (e, t = "m") => {
  if (!e) return "";
  if (typeof e == "string") {
    const r = qr(e);
    return r ? `-m${t}-${r}` : "";
  }
  const n = [];
  return Object.entries(e).forEach(([r, o]) => {
    const i = qr(o);
    if (i) {
      const s = r === "xs" ? "" : `${r}:`;
      n.push(`${s}-m${t}-${i}`);
    }
  }), n.join(" ");
}, Nu = W("", {
  variants: {
    // Base styling variants can be added here if needed
  },
  defaultVariants: {}
}), Iu = g.forwardRef(
  ({
    children: e,
    marginInline: t,
    marginBlock: n,
    marginBlockStart: r,
    marginBlockEnd: o,
    marginInlineStart: i,
    marginInlineEnd: s,
    className: a,
    ...l
  }, c) => {
    const u = D(
      Nu(),
      // Negative margins for bleeding effect
      Xe(t, "x"),
      Xe(n, "y"),
      Xe(r, "t"),
      Xe(o, "b"),
      Xe(i, "l"),
      Xe(s, "r"),
      a
    );
    return /* @__PURE__ */ h("div", { ref: c, className: u, ...l, children: e });
  }
);
Iu.displayName = "Bleed";
const Ou = W(
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
), ku = W(
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
), Vu = W("px-6 py-6", {
  variants: {},
  defaultVariants: {}
}), Du = g.forwardRef(
  ({
    children: e,
    title: t,
    subtitle: n,
    titleMetadata: r,
    compactTitle: o = !1,
    titleHidden: i = !1,
    fullWidth: s = !1,
    narrowWidth: a = !1,
    primaryAction: l,
    secondaryActions: c = [],
    actionGroups: u = [],
    backAction: p,
    pagination: d,
    pageReadyAccessibilityLabel: f,
    filterActions: b = !1,
    additionalMetadata: m,
    onActionRollup: x,
    hasSubtitleMaxWidth: v = !1,
    className: w,
    ...y
  }, C) => {
    const S = s ? "full" : a ? "narrow" : "default", E = (_, O = "secondary") => {
      var L;
      const I = "url" in _ && _.url;
      return /* @__PURE__ */ h(
        ne,
        {
          variant: O === "primary" ? "primary" : "secondary",
          onClick: _.onAction,
          url: I ? _.url : void 0,
          external: "external" in _ ? _.external : void 0,
          target: "target" in _ ? _.target : void 0,
          download: "download" in _ ? _.download : void 0,
          disabled: "disabled" in _ ? _.disabled : void 0,
          loading: "loading" in _ ? _.loading : void 0,
          icon: "icon" in _ ? _.icon : void 0,
          accessibilityLabel: _.accessibilityLabel,
          children: _.content
        },
        _.id || ((L = _.content) == null ? void 0 : L.toString())
      );
    }, R = () => {
      var _, O;
      return d ? /* @__PURE__ */ A("div", { className: "flex items-center justify-between px-6 py-4 bg-white border-t border-[rgb(227,227,227)]", children: [
        /* @__PURE__ */ h(
          ne,
          {
            variant: "secondary",
            disabled: !d.hasPrevious,
            onClick: d.onPrevious,
            url: d.previousURL,
            icon: /* @__PURE__ */ h(Mn, {}),
            accessibilityLabel: ((_ = d.accessibilityLabels) == null ? void 0 : _.previous) || "Previous",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ h(
          ne,
          {
            variant: "secondary",
            disabled: !d.hasNext,
            onClick: d.onNext,
            url: d.nextURL,
            icon: /* @__PURE__ */ h(An, {}),
            accessibilityLabel: ((O = d.accessibilityLabels) == null ? void 0 : O.next) || "Next",
            children: "Next"
          }
        )
      ] }) : null;
    };
    return /* @__PURE__ */ A(
      "div",
      {
        ref: C,
        className: D(Ou({ width: S }), w),
        "aria-label": f,
        ...y,
        children: [
          (t || p || l || c.length > 0 || u.length > 0) && /* @__PURE__ */ A("header", { className: D(ku({ compact: o })), children: [
            p && /* @__PURE__ */ h("div", { className: "mb-4", children: E(p, "secondary") }),
            (t || l || c.length > 0 || u.length > 0) && /* @__PURE__ */ A("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ A("div", { className: "flex-1 min-w-0", children: [
                t && !i && /* @__PURE__ */ A("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ h(ue, { as: "h1", variant: "headingLg", fontWeight: "semibold", children: t }),
                  r && /* @__PURE__ */ h("div", { className: "flex items-center", children: r })
                ] }),
                n && /* @__PURE__ */ h(
                  "div",
                  {
                    className: D(
                      "mt-1",
                      v && "max-w-[640px]"
                    ),
                    children: /* @__PURE__ */ h(ue, { variant: "bodyMd", tone: "subdued", children: n })
                  }
                ),
                m && /* @__PURE__ */ h("div", { className: "mt-2", children: m })
              ] }),
              (l || c.length > 0 || u.length > 0) && /* @__PURE__ */ h("div", { className: "flex items-center gap-2 ml-4", children: /* @__PURE__ */ A(wo, { children: [
                c.map(
                  (_) => E(_, "secondary")
                ),
                l && E(l, "primary")
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ h("main", { className: D(Vu()), children: e }),
          R()
        ]
      }
    );
  }
);
Du.displayName = "Page";
const $i = W(
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
), Zd = $i, Lu = g.forwardRef(
  ({
    children: e,
    tone: t = "default",
    progress: n = "complete",
    icon: r,
    size: o = "medium",
    className: i,
    asChild: s = !1,
    ...a
  }, l) => {
    const c = D(
      $i({
        tone: t,
        size: o,
        progress: n
      }),
      i
    ), u = g.useMemo(() => {
      var p;
      return r ? typeof r == "string" ? r === "placeholder" ? /* @__PURE__ */ h("span", { className: "w-3 h-3 bg-current rounded-full opacity-50 mr-1" }) : /* @__PURE__ */ h("span", { className: "mr-1", children: r }) : g.isValidElement(r) ? g.cloneElement(r, {
        className: D("w-3 h-3 mr-1", (p = r.props) == null ? void 0 : p.className)
      }) : typeof r == "function" ? /* @__PURE__ */ h(r, { className: "w-3 h-3 mr-1" }) : null : null;
    }, [r]);
    return /* @__PURE__ */ A("span", { ref: l, className: c, ...a, children: [
      u,
      e
    ] });
  }
);
Lu.displayName = "Badge";
const Xr = (e) => e && {
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
}[e] || "", Tu = (e) => {
  if (!e) return "";
  if (typeof e == "string") {
    const n = Xr(e);
    return n ? `gap-${n}` : "";
  }
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    const o = Xr(r);
    if (o) {
      const i = n === "xs" ? "" : `${n}:`;
      t.push(`${i}gap-${o}`);
    }
  }), t.join(" ");
}, zu = W(
  "flex",
  // Base flexbox styling
  {
    variants: {
      align: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        "space-around": "justify-around",
        "space-between": "justify-between",
        "space-evenly": "justify-evenly"
      },
      direction: {
        row: "flex-row",
        "row-reverse": "flex-row-reverse"
      },
      blockAlign: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        baseline: "items-baseline",
        stretch: "items-stretch"
      },
      wrap: {
        true: "flex-wrap",
        false: "flex-nowrap"
      }
    },
    defaultVariants: {
      align: "start",
      direction: "row",
      blockAlign: "start",
      wrap: !0
    }
  }
), Bu = g.forwardRef(
  ({
    children: e,
    as: t = "div",
    align: n = "start",
    direction: r = "row",
    blockAlign: o = "start",
    gap: i,
    wrap: s = !0,
    className: a,
    ...l
  }, c) => {
    const u = t, p = Tu(i), d = D(
      zu({
        align: n,
        direction: r,
        blockAlign: o,
        wrap: s
      }),
      p,
      a
    );
    return /* @__PURE__ */ h(
      u,
      {
        ref: c,
        className: d,
        ...l,
        children: e
      }
    );
  }
);
Bu.displayName = "InlineStack";
const Zr = (e) => e && {
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
}[e] || "", Hu = (e) => {
  if (!e) return "";
  if (typeof e == "string") {
    const n = Zr(e);
    return n ? `gap-${n}` : "";
  }
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    const o = Zr(r);
    if (o) {
      const i = n === "xs" ? "" : `${n}:`;
      t.push(`${i}gap-${o}`);
    }
  }), t.join(" ");
}, Gu = W(
  "flex flex-col",
  // Base flexbox styling with column direction
  {
    variants: {
      align: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        "space-around": "justify-around",
        "space-between": "justify-between",
        "space-evenly": "justify-evenly"
      },
      inlineAlign: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        baseline: "items-baseline",
        stretch: "items-stretch"
      },
      reverseOrder: {
        true: "flex-col-reverse",
        false: "flex-col"
      }
    },
    defaultVariants: {
      align: "start",
      inlineAlign: "start",
      reverseOrder: !1
    }
  }
), ju = g.forwardRef(
  ({
    children: e,
    as: t = "div",
    align: n = "start",
    inlineAlign: r = "start",
    gap: o,
    id: i,
    reverseOrder: s = !1,
    role: a,
    className: l,
    ...c
  }, u) => {
    const p = t, d = Hu(o), f = D(
      Gu({
        align: n,
        inlineAlign: r,
        reverseOrder: s
      }),
      d,
      l
    );
    return /* @__PURE__ */ h(
      p,
      {
        ref: u,
        className: f,
        id: i,
        role: a,
        ...c,
        children: e
      }
    );
  }
);
ju.displayName = "BlockStack";
const Wu = W("flex items-center", {
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
}), Yr = W(
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
), Ni = g.forwardRef(
  ({
    nextKeys: e,
    previousKeys: t,
    nextTooltip: n,
    previousTooltip: r,
    nextURL: o,
    previousURL: i,
    hasNext: s = !1,
    hasPrevious: a = !1,
    accessibilityLabel: l = "Pagination",
    accessibilityLabels: c,
    onNext: u,
    onPrevious: p,
    label: d,
    type: f = "page",
    className: b,
    asChild: m = !1,
    ...x
  }, v) => {
    g.useEffect(() => {
      const E = (R) => {
        t != null && t.includes(R.key) && a && p && (R.preventDefault(), p()), e != null && e.includes(R.key) && s && u && (R.preventDefault(), u());
      };
      return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
    }, [t, e, a, s, p, u]);
    const w = c == null ? void 0 : c.previous, y = c == null ? void 0 : c.next, C = () => /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        disabled: !a,
        onClick: p,
        "aria-label": w || "Previous",
        className: D(
          Yr({
            position: d ? "previous" : "single",
            disabled: !a
          })
        ),
        children: /* @__PURE__ */ h(Mn, { className: "size-6" })
      }
    ), S = () => /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        disabled: !s,
        onClick: u,
        "aria-label": y || "Next",
        className: D(
          Yr({
            position: d ? "next" : "single",
            disabled: !s
          })
        ),
        children: /* @__PURE__ */ h(An, { className: "size-6" })
      }
    );
    return /* @__PURE__ */ h(
      "nav",
      {
        ref: v,
        "aria-label": l,
        className: D(
          Wu({ type: f, hasLabel: !!d }),
          b
        ),
        ...x,
        children: d ? (
          // With label: Previous - Label - Next (spaced apart)
          /* @__PURE__ */ A(mt, { children: [
            /* @__PURE__ */ h(C, {}),
            /* @__PURE__ */ h("div", { className: "flex-1 flex justify-center", children: typeof d == "string" ? /* @__PURE__ */ h(ue, { variant: "bodySm", tone: "subdued", children: d }) : d }),
            /* @__PURE__ */ h(S, {})
          ] })
        ) : (
          // Without label: Connected Previous/Next buttons
          /* @__PURE__ */ A("div", { className: "inline-flex", children: [
            /* @__PURE__ */ h(C, {}),
            /* @__PURE__ */ h(S, {})
          ] })
        )
      }
    );
  }
);
Ni.displayName = "Pagination";
const Uu = W("w-full", {
  variants: {
    mode: {
      DEFAULT: "",
      FILTERING: ""
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
}), Yd = () => {
  const [e, t] = g.useState(
    "DEFAULT"
    /* Default */
  );
  return { mode: e, setMode: t };
}, qu = ({
  filter: e,
  disabled: t = !1
}) => {
  const [n, r] = g.useState(!1), o = (a) => {
    e.onChange(a, e.key);
  }, i = () => {
    r(!n);
  }, s = () => {
    r(!1);
  };
  return /* @__PURE__ */ h(
    qn,
    {
      active: n,
      activator: /* @__PURE__ */ A(
        ne,
        {
          size: "micro",
          variant: "tertiary",
          onClick: i,
          disabled: t,
          pressed: n,
          children: [
            e.label,
            e.selected.length > 0 && /* @__PURE__ */ h("span", { className: "ml-1 px-1.5 py-0.5 text-xs bg-blue-100 text-black rounded-full", children: e.selected.length })
          ]
        }
      ),
      onClose: s,
      preferredPosition: "below",
      sectioned: !0,
      children: /* @__PURE__ */ h(
        mi,
        {
          title: e.label,
          titleHidden: !0,
          choices: e.choices,
          selected: e.selected,
          onChange: o,
          allowMultiple: e.allowMultiple
        }
      )
    }
  );
}, Kr = ({ sortOptions: e, onSort: t, disabled: n }) => {
  const [r, o] = g.useState(!1);
  return /* @__PURE__ */ h(
    qn,
    {
      active: r,
      activator: /* @__PURE__ */ h(
        ne,
        {
          variant: "tertiary",
          icon: /* @__PURE__ */ h(go, { className: "size-4" }),
          disclosure: !0,
          disabled: n,
          onClick: () => o(!r),
          children: "Sort"
        }
      ),
      onClose: () => o(!1),
      children: /* @__PURE__ */ h("div", { className: "p-2 min-w-48", children: e.map((i) => /* @__PURE__ */ A(
        "button",
        {
          className: "w-full text-left px-3 py-2 hover:bg-[#f6f6f6] rounded text-sm",
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
}, Xu = g.forwardRef(
  ({
    sortOptions: e,
    sortSelected: t,
    onSort: n,
    onSortKeyChange: r,
    onSortDirectionChange: o,
    onAddFilterClick: i,
    primaryAction: s,
    cancelAction: a,
    onEditStart: l,
    mode: c,
    disclosureZIndexOverride: u,
    setMode: p,
    disabled: d = !1,
    disableQueryField: f = !1,
    disableStickyMode: b,
    isFlushWhenSticky: m,
    canCreateNewView: x,
    onCreateNewView: v,
    filteringAccessibilityLabel: w = "Filter",
    filteringAccessibilityTooltip: y,
    closeOnChildOverlayClick: C,
    disableKeyboardShortcuts: S,
    showEditColumnsButton: E = !1,
    autoFocusSearchField: R = !1,
    tabs: _,
    selected: O = 0,
    onSelect: I,
    filters: L,
    appliedFilters: P,
    onClearAll: B,
    pinnedFilters: k,
    queryValue: U = "",
    queryPlaceholder: T = "Searching in all..",
    onQueryChange: H,
    onQueryClear: F,
    className: z,
    asChild: X = !1,
    ...M
  }, G) => {
    const [Y, Q] = g.useState(
      c === "FILTERING"
      /* Filtering */
    );
    g.useEffect(() => {
      Q(
        c === "FILTERING"
        /* Filtering */
      );
    }, [c]);
    const ce = () => {
      p(Y ? "DEFAULT" : "FILTERING"), Q(!Y), !Y && l && l(
        "FILTERING"
        /* Filtering */
      );
    }, oe = (q) => {
      H && H(q);
    }, ee = () => {
      F && F();
    };
    return /* @__PURE__ */ h(
      "div",
      {
        ref: G,
        className: D(
          Uu({ mode: c, disabled: d }),
          z
        ),
        ...M,
        children: /* @__PURE__ */ h("div", { className: "p-1 border border-[#e3e3e3] rounded-md border-b-0 rounded-b-none", children: Y ? /* @__PURE__ */ A("div", { className: "space-y-2", children: [
          /* @__PURE__ */ A("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: e && e.length > 0 && /* @__PURE__ */ h(
              Kr,
              {
                sortOptions: e,
                onSort: n,
                disabled: d
              }
            ) }),
            /* @__PURE__ */ h("div", { className: "flex-1", children: /* @__PURE__ */ h(
              yo,
              {
                label: "",
                labelHidden: !0,
                value: U,
                onChange: oe,
                placeholder: T,
                clearButton: U.length > 0,
                onClearButtonClick: ee,
                disabled: f || d,
                autoFocus: R,
                autoComplete: "off",
                size: "slim"
              }
            ) }),
            /* @__PURE__ */ h(
              ne,
              {
                onClick: ce,
                disabled: d,
                size: "medium",
                children: "Cancel"
              }
            )
          ] }),
          k && k.length > 0 && /* @__PURE__ */ h("div", { className: "border-t border-gray-200 pt-0.5", children: /* @__PURE__ */ h("div", { className: "flex flex-wrap gap-2", children: k.map((q) => /* @__PURE__ */ h(
            qu,
            {
              filter: q,
              disabled: d
            },
            q.key
          )) }) }),
          P && P.length > 0 && /* @__PURE__ */ A("div", { className: "flex flex-wrap gap-2", children: [
            P.map((q) => /* @__PURE__ */ A(
              "div",
              {
                className: "inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-black rounded-md text-sm",
                children: [
                  /* @__PURE__ */ h(ue, { variant: "bodySm", children: q.label }),
                  /* @__PURE__ */ h(
                    "button",
                    {
                      onClick: q.onRemove,
                      className: "p-0.5 hover:bg-black rounded",
                      children: /* @__PURE__ */ h(Fn, { className: "size-3" })
                    }
                  )
                ]
              },
              q.key
            )),
            B && /* @__PURE__ */ h(ne, { variant: "plain", size: "micro", onClick: B, children: "Clear all" })
          ] }),
          (s || a) && /* @__PURE__ */ A("div", { className: "flex justify-end gap-2", children: [
            a && /* @__PURE__ */ h(
              ne,
              {
                variant: "secondary",
                onClick: a.onAction,
                disabled: a.disabled,
                loading: a.loading,
                children: "Cancel"
              }
            ),
            s && /* @__PURE__ */ h(
              ne,
              {
                variant: "primary",
                onClick: () => {
                  if (s.type === "save-as" && v) {
                    const q = prompt("Enter view name:");
                    q && s.onAction(q);
                  } else
                    s.onAction();
                },
                disabled: s.disabled,
                loading: s.loading,
                children: s.type === "save" ? "Save" : "Save as"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ A("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ A("div", { className: "flex items-center gap-2", children: [
            e && e.length > 0 && /* @__PURE__ */ h(
              Kr,
              {
                sortOptions: e,
                onSort: n,
                disabled: d
              }
            ),
            _ && _.length > 0 && /* @__PURE__ */ h(mt, { children: _.map((q, Se) => /* @__PURE__ */ h(
              ne,
              {
                size: "micro",
                variant: "tertiary",
                pressed: Se === O,
                onClick: () => {
                  q.onAction(), I && I(Se);
                },
                disabled: d,
                children: q.content
              },
              q.id
            )) })
          ] }),
          /* @__PURE__ */ A("div", { className: "flex items-center gap-2", children: [
            E && /* @__PURE__ */ h(
              ne,
              {
                variant: "tertiary",
                icon: /* @__PURE__ */ h(fo, { className: "size-4" }),
                accessibilityLabel: "Edit columns",
                disabled: d,
                children: "Edit columns"
              }
            ),
            /* @__PURE__ */ h(
              ne,
              {
                variant: "tertiary",
                className: "flex w-12 justify-items-end",
                icon: /* @__PURE__ */ A(mt, { children: [
                  /* @__PURE__ */ h(uo, { className: "size-5" }),
                  /* @__PURE__ */ h(lo, { className: "size-5" })
                ] }),
                onClick: ce,
                pressed: !1,
                accessibilityLabel: w,
                disabled: d
              }
            )
          ] })
        ] }) })
      }
    );
  }
);
Xu.displayName = "IndexFilters";
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
function Ie(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function le(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: Ie(n, r[e])
    }));
  };
}
function Zt(e) {
  return e instanceof Function;
}
function Zu(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function Yu(e, t) {
  const n = [], r = (o) => {
    o.forEach((i) => {
      n.push(i);
      const s = t(i);
      s != null && s.length && r(s);
    });
  };
  return r(e), n;
}
function $(e, t, n) {
  let r = [], o;
  return (i) => {
    let s;
    n.key && n.debug && (s = Date.now());
    const a = e(i);
    if (!(a.length !== r.length || a.some((u, p) => r[p] !== u)))
      return o;
    r = a;
    let c;
    if (n.key && n.debug && (c = Date.now()), o = t(...a), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const u = Math.round((Date.now() - s) * 100) / 100, p = Math.round((Date.now() - c) * 100) / 100, d = p / 16, f = (b, m) => {
        for (b = String(b); b.length < m; )
          b = " " + b;
        return b;
      };
      console.info(`%c⏱ ${f(p, 5)} /${f(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * d, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function N(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: r
  };
}
function Ku(e, t, n, r) {
  const o = () => {
    var s;
    return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
  }, i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: $(() => [e, n, t, i], (s, a, l, c) => ({
      table: s,
      column: a,
      row: l,
      cell: c,
      getValue: c.getValue,
      renderValue: c.renderValue
    }), N(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, n, t, e);
  }, {}), i;
}
function Qu(e, t, n, r) {
  var o, i;
  const a = {
    ...e._getDefaultColumnDef(),
    ...t
  }, l = a.accessorKey;
  let c = (o = (i = a.id) != null ? i : l ? typeof String.prototype.replaceAll == "function" ? l.replaceAll(".", "_") : l.replace(/\./g, "_") : void 0) != null ? o : typeof a.header == "string" ? a.header : void 0, u;
  if (a.accessorFn ? u = a.accessorFn : l && (l.includes(".") ? u = (d) => {
    let f = d;
    for (const m of l.split(".")) {
      var b;
      f = (b = f) == null ? void 0 : b[m], process.env.NODE_ENV !== "production" && f === void 0 && console.warn(`"${m}" in deeply nested key "${l}" returned undefined.`);
    }
    return f;
  } : u = (d) => d[a.accessorKey]), !c)
    throw process.env.NODE_ENV !== "production" ? new Error(a.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let p = {
    id: `${String(c)}`,
    accessorFn: u,
    parent: r,
    depth: n,
    columnDef: a,
    columns: [],
    getFlatColumns: $(() => [!0], () => {
      var d;
      return [p, ...(d = p.columns) == null ? void 0 : d.flatMap((f) => f.getFlatColumns())];
    }, N(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: $(() => [e._getOrderColumnsFn()], (d) => {
      var f;
      if ((f = p.columns) != null && f.length) {
        let b = p.columns.flatMap((m) => m.getLeafColumns());
        return d(b);
      }
      return [p];
    }, N(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const d of e._features)
    d.createColumn == null || d.createColumn(p, e);
  return p;
}
const te = "debugHeaders";
function Qr(e, t, n) {
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
      const s = [], a = (l) => {
        l.subHeaders && l.subHeaders.length && l.subHeaders.map(a), s.push(l);
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
const Ju = {
  createTable: (e) => {
    e.getHeaderGroups = $(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, s;
      const a = (i = r == null ? void 0 : r.map((p) => n.find((d) => d.id === p)).filter(Boolean)) != null ? i : [], l = (s = o == null ? void 0 : o.map((p) => n.find((d) => d.id === p)).filter(Boolean)) != null ? s : [], c = n.filter((p) => !(r != null && r.includes(p.id)) && !(o != null && o.includes(p.id)));
      return At(t, [...a, ...c, ...l], e);
    }, N(e.options, te, "getHeaderGroups")), e.getCenterHeaderGroups = $(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), At(t, n, e, "center")), N(e.options, te, "getCenterHeaderGroups")), e.getLeftHeaderGroups = $(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return At(t, i, e, "left");
    }, N(e.options, te, "getLeftHeaderGroups")), e.getRightHeaderGroups = $(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return At(t, i, e, "right");
    }, N(e.options, te, "getRightHeaderGroups")), e.getFooterGroups = $(() => [e.getHeaderGroups()], (t) => [...t].reverse(), N(e.options, te, "getFooterGroups")), e.getLeftFooterGroups = $(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), N(e.options, te, "getLeftFooterGroups")), e.getCenterFooterGroups = $(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), N(e.options, te, "getCenterFooterGroups")), e.getRightFooterGroups = $(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), N(e.options, te, "getRightFooterGroups")), e.getFlatHeaders = $(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), N(e.options, te, "getFlatHeaders")), e.getLeftFlatHeaders = $(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), N(e.options, te, "getLeftFlatHeaders")), e.getCenterFlatHeaders = $(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), N(e.options, te, "getCenterFlatHeaders")), e.getRightFlatHeaders = $(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), N(e.options, te, "getRightFlatHeaders")), e.getCenterLeafHeaders = $(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), N(e.options, te, "getCenterLeafHeaders")), e.getLeftLeafHeaders = $(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), N(e.options, te, "getLeftLeafHeaders")), e.getRightLeafHeaders = $(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), N(e.options, te, "getRightLeafHeaders")), e.getLeafHeaders = $(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, s, a, l, c;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(s = (a = n[0]) == null ? void 0 : a.headers) != null ? s : [], ...(l = (c = r[0]) == null ? void 0 : c.headers) != null ? l : []].map((u) => u.getLeafHeaders()).flat();
    }, N(e.options, te, "getLeafHeaders"));
  }
};
function At(e, t, n, r) {
  var o, i;
  let s = 0;
  const a = function(d, f) {
    f === void 0 && (f = 1), s = Math.max(s, f), d.filter((b) => b.getIsVisible()).forEach((b) => {
      var m;
      (m = b.columns) != null && m.length && a(b.columns, f + 1);
    }, 0);
  };
  a(e);
  let l = [];
  const c = (d, f) => {
    const b = {
      depth: f,
      id: [r, `${f}`].filter(Boolean).join("_"),
      headers: []
    }, m = [];
    d.forEach((x) => {
      const v = [...m].reverse()[0], w = x.column.depth === b.depth;
      let y, C = !1;
      if (w && x.column.parent ? y = x.column.parent : (y = x.column, C = !0), v && (v == null ? void 0 : v.column) === y)
        v.subHeaders.push(x);
      else {
        const S = Qr(n, y, {
          id: [r, f, y.id, x == null ? void 0 : x.id].filter(Boolean).join("_"),
          isPlaceholder: C,
          placeholderId: C ? `${m.filter((E) => E.column === y).length}` : void 0,
          depth: f,
          index: m.length
        });
        S.subHeaders.push(x), m.push(S);
      }
      b.headers.push(x), x.headerGroup = b;
    }), l.push(b), f > 0 && c(m, f - 1);
  }, u = t.map((d, f) => Qr(n, d, {
    depth: s,
    index: f
  }));
  c(u, s - 1), l.reverse();
  const p = (d) => d.filter((b) => b.column.getIsVisible()).map((b) => {
    let m = 0, x = 0, v = [0];
    b.subHeaders && b.subHeaders.length ? (v = [], p(b.subHeaders).forEach((y) => {
      let {
        colSpan: C,
        rowSpan: S
      } = y;
      m += C, v.push(S);
    })) : m = 1;
    const w = Math.min(...v);
    return x = x + w, b.colSpan = m, b.rowSpan = x, {
      colSpan: m,
      rowSpan: x
    };
  });
  return p((o = (i = l[0]) == null ? void 0 : i.headers) != null ? o : []), l;
}
const ed = (e, t, n, r, o, i, s) => {
  let a = {
    id: t,
    index: r,
    original: n,
    depth: o,
    parentId: s,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (l) => {
      if (a._valuesCache.hasOwnProperty(l))
        return a._valuesCache[l];
      const c = e.getColumn(l);
      if (c != null && c.accessorFn)
        return a._valuesCache[l] = c.accessorFn(a.original, r), a._valuesCache[l];
    },
    getUniqueValues: (l) => {
      if (a._uniqueValuesCache.hasOwnProperty(l))
        return a._uniqueValuesCache[l];
      const c = e.getColumn(l);
      if (c != null && c.accessorFn)
        return c.columnDef.getUniqueValues ? (a._uniqueValuesCache[l] = c.columnDef.getUniqueValues(a.original, r), a._uniqueValuesCache[l]) : (a._uniqueValuesCache[l] = [a.getValue(l)], a._uniqueValuesCache[l]);
    },
    renderValue: (l) => {
      var c;
      return (c = a.getValue(l)) != null ? c : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => Yu(a.subRows, (l) => l.subRows),
    getParentRow: () => a.parentId ? e.getRow(a.parentId, !0) : void 0,
    getParentRows: () => {
      let l = [], c = a;
      for (; ; ) {
        const u = c.getParentRow();
        if (!u) break;
        l.push(u), c = u;
      }
      return l.reverse();
    },
    getAllCells: $(() => [e.getAllLeafColumns()], (l) => l.map((c) => Ku(e, a, c, c.id)), N(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: $(() => [a.getAllCells()], (l) => l.reduce((c, u) => (c[u.column.id] = u, c), {}), N(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const c = e._features[l];
    c == null || c.createRow == null || c.createRow(a, e);
  }
  return a;
}, td = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Ii = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
Ii.autoRemove = (e) => ge(e);
const Oi = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
Oi.autoRemove = (e) => ge(e);
const ki = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
ki.autoRemove = (e) => ge(e);
const Vi = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
Vi.autoRemove = (e) => ge(e);
const Di = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
Di.autoRemove = (e) => ge(e) || !(e != null && e.length);
const Li = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
Li.autoRemove = (e) => ge(e) || !(e != null && e.length);
const Ti = (e, t, n) => e.getValue(t) === n;
Ti.autoRemove = (e) => ge(e);
const zi = (e, t, n) => e.getValue(t) == n;
zi.autoRemove = (e) => ge(e);
const Kn = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
Kn.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, s = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const a = i;
    i = s, s = a;
  }
  return [i, s];
};
Kn.autoRemove = (e) => ge(e) || ge(e[0]) && ge(e[1]);
const Pe = {
  includesString: Ii,
  includesStringSensitive: Oi,
  equalsString: ki,
  arrIncludes: Vi,
  arrIncludesAll: Di,
  arrIncludesSome: Li,
  equals: Ti,
  weakEquals: zi,
  inNumberRange: Kn
};
function ge(e) {
  return e == null || e === "";
}
const nd = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: le("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? Pe.includesString : typeof r == "number" ? Pe.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? Pe.equals : Array.isArray(r) ? Pe.arrIncludes : Pe.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return Zt(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : Pe[e.columnDef.filterFn]
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
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((u) => u.id === e.id), s = Ie(n, i ? i.value : void 0);
        if (Jr(o, s, e)) {
          var a;
          return (a = r == null ? void 0 : r.filter((u) => u.id !== e.id)) != null ? a : [];
        }
        const l = {
          id: e.id,
          value: s
        };
        if (i) {
          var c;
          return (c = r == null ? void 0 : r.map((u) => u.id === e.id ? l : u)) != null ? c : [];
        }
        return r != null && r.length ? [...r, l] : [l];
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
        return (i = Ie(t, o)) == null ? void 0 : i.filter((s) => {
          const a = n.find((l) => l.id === s.id);
          if (a) {
            const l = a.getFilterFn();
            if (Jr(l, s.value, a))
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
function Jr(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const rd = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), od = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, id = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, sd = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, ad = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, ld = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!Zu(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, s) => i - s);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, cd = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), ud = (e, t) => new Set(t.map((n) => n.getValue(e))).size, dd = (e, t) => t.length, un = {
  sum: rd,
  min: od,
  max: id,
  extent: sd,
  mean: ad,
  median: ld,
  unique: cd,
  uniqueCount: ud,
  count: dd
}, fd = {
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
    onGroupingChange: le("grouping", e),
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
        return un.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return un.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Zt(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : un[e.columnDef.aggregationFn];
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
function gd(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const pd = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: le("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = $((n) => [pt(t, n)], (n) => n.findIndex((r) => r.id === e.id), N(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = pt(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = pt(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = $(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
      let i = [];
      if (!(t != null && t.length))
        i = o;
      else {
        const s = [...t], a = [...o];
        for (; a.length && s.length; ) {
          const l = s.shift(), c = a.findIndex((u) => u.id === l);
          c > -1 && i.push(a.splice(c, 1)[0]);
        }
        i = [...i, ...a];
      }
      return gd(i, n, r);
    }, N(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, dn = () => ({
  left: [],
  right: []
}), md = {
  getInitialState: (e) => ({
    columnPinning: dn(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: le("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      t.setColumnPinning((o) => {
        var i, s;
        if (n === "right") {
          var a, l;
          return {
            left: ((a = o == null ? void 0 : o.left) != null ? a : []).filter((p) => !(r != null && r.includes(p))),
            right: [...((l = o == null ? void 0 : o.right) != null ? l : []).filter((p) => !(r != null && r.includes(p))), ...r]
          };
        }
        if (n === "left") {
          var c, u;
          return {
            left: [...((c = o == null ? void 0 : o.left) != null ? c : []).filter((p) => !(r != null && r.includes(p))), ...r],
            right: ((u = o == null ? void 0 : o.right) != null ? u : []).filter((p) => !(r != null && r.includes(p)))
          };
        }
        return {
          left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((p) => !(r != null && r.includes(p))),
          right: ((s = o == null ? void 0 : o.right) != null ? s : []).filter((p) => !(r != null && r.includes(p)))
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
    e.getCenterVisibleCells = $(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return n.filter((s) => !i.includes(s.column.id));
    }, N(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = $(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), N(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = $(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), N(t.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? dn() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : dn());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = $(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), N(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = $(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), N(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = $(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, N(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function hd(e) {
  return e || (typeof document < "u" ? document : null);
}
const Ft = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, fn = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), bd = {
  getDefaultColumnDef: () => Ft,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: fn(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: le("columnSizing", e),
    onColumnSizingInfoChange: le("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Ft.minSize, (r = i ?? e.columnDef.size) != null ? r : Ft.size), (o = e.columnDef.maxSize) != null ? o : Ft.maxSize);
    }, e.getStart = $((n) => [n, pt(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), N(t.options, "debugColumns", "getStart")), e.getAfter = $((n) => [n, pt(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), N(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
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
        if (!r || !o || (i.persist == null || i.persist(), gn(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), a = e ? e.getLeafHeaders().map((v) => [v.column.id, v.column.getSize()]) : [[r.id, r.getSize()]], l = gn(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, u = (v, w) => {
          typeof w == "number" && (t.setColumnSizingInfo((y) => {
            var C, S;
            const E = t.options.columnResizeDirection === "rtl" ? -1 : 1, R = (w - ((C = y == null ? void 0 : y.startOffset) != null ? C : 0)) * E, _ = Math.max(R / ((S = y == null ? void 0 : y.startSize) != null ? S : 0), -0.999999);
            return y.columnSizingStart.forEach((O) => {
              let [I, L] = O;
              c[I] = Math.round(Math.max(L + L * _, 0) * 100) / 100;
            }), {
              ...y,
              deltaOffset: R,
              deltaPercentage: _
            };
          }), (t.options.columnResizeMode === "onChange" || v === "end") && t.setColumnSizing((y) => ({
            ...y,
            ...c
          })));
        }, p = (v) => u("move", v), d = (v) => {
          u("end", v), t.setColumnSizingInfo((w) => ({
            ...w,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, f = hd(n), b = {
          moveHandler: (v) => p(v.clientX),
          upHandler: (v) => {
            f == null || f.removeEventListener("mousemove", b.moveHandler), f == null || f.removeEventListener("mouseup", b.upHandler), d(v.clientX);
          }
        }, m = {
          moveHandler: (v) => (v.cancelable && (v.preventDefault(), v.stopPropagation()), p(v.touches[0].clientX), !1),
          upHandler: (v) => {
            var w;
            f == null || f.removeEventListener("touchmove", m.moveHandler), f == null || f.removeEventListener("touchend", m.upHandler), v.cancelable && (v.preventDefault(), v.stopPropagation()), d((w = v.touches[0]) == null ? void 0 : w.clientX);
          }
        }, x = vd() ? {
          passive: !1
        } : !1;
        gn(i) ? (f == null || f.addEventListener("touchmove", m.moveHandler, x), f == null || f.addEventListener("touchend", m.upHandler, x)) : (f == null || f.addEventListener("mousemove", b.moveHandler, x), f == null || f.addEventListener("mouseup", b.upHandler, x)), t.setColumnSizingInfo((v) => ({
          ...v,
          startOffset: l,
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
      e.setColumnSizingInfo(t ? fn() : (n = e.initialState.columnSizingInfo) != null ? n : fn());
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
let $t = null;
function vd() {
  if (typeof $t == "boolean") return $t;
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
  return $t = e, $t;
}
function gn(e) {
  return e.type === "touchstart";
}
const xd = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: le("columnVisibility", e)
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
    e._getAllVisibleCells = $(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), N(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = $(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], N(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, r) => $(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), N(e.options, "debugColumns", n));
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
function pt(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const wd = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, yd = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: le("globalFilter", e),
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
    e.getGlobalAutoFilterFn = () => Pe.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return Zt(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : Pe[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, Cd = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: le("expanded", e),
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
            ...l
          } = s;
          return l;
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
}, Sn = 0, _n = 10, pn = () => ({
  pageIndex: Sn,
  pageSize: _n
}), Sd = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...pn(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: le("pagination", e)
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
      const o = (i) => Ie(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? pn() : (o = e.initialState.pagination) != null ? o : pn());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = Ie(r, o.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? Sn : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : Sn);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? _n : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : _n);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, Ie(r, o.pageSize)), s = o.pageSize * o.pageIndex, a = Math.floor(s / i);
        return {
          ...o,
          pageIndex: a,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let s = Ie(r, (i = e.options.pageCount) != null ? i : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...o,
        pageCount: s
      };
    }), e.getPageOptions = $(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, s) => s)), o;
    }, N(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}, mn = () => ({
  top: [],
  bottom: []
}), _d = {
  getInitialState: (e) => ({
    rowPinning: mn(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: le("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, r, o) => {
      const i = r ? e.getLeafRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], s = o ? e.getParentRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], a = /* @__PURE__ */ new Set([...s, e.id, ...i]);
      t.setRowPinning((l) => {
        var c, u;
        if (n === "bottom") {
          var p, d;
          return {
            top: ((p = l == null ? void 0 : l.top) != null ? p : []).filter((m) => !(a != null && a.has(m))),
            bottom: [...((d = l == null ? void 0 : l.bottom) != null ? d : []).filter((m) => !(a != null && a.has(m))), ...Array.from(a)]
          };
        }
        if (n === "top") {
          var f, b;
          return {
            top: [...((f = l == null ? void 0 : l.top) != null ? f : []).filter((m) => !(a != null && a.has(m))), ...Array.from(a)],
            bottom: ((b = l == null ? void 0 : l.bottom) != null ? b : []).filter((m) => !(a != null && a.has(m)))
          };
        }
        return {
          top: ((c = l == null ? void 0 : l.top) != null ? c : []).filter((m) => !(a != null && a.has(m))),
          bottom: ((u = l == null ? void 0 : l.bottom) != null ? u : []).filter((m) => !(a != null && a.has(m)))
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
      return e.setRowPinning(t ? mn() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : mn());
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
    }, e.getTopRows = $(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), N(e.options, "debugRows", "getTopRows")), e.getBottomRows = $(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), N(e.options, "debugRows", "getBottomRows")), e.getCenterRows = $(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, N(e.options, "debugRows", "getCenterRows"));
  }
}, Rd = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: le("rowSelection", e),
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
        Rn(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = $(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? hn(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, N(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = $(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? hn(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, N(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = $(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? hn(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, N(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
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
        return Rn(a, e.id, n, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, t), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Qn(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return En(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return En(e, n) === "all";
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
}, Rn = (e, t, n, r, o) => {
  var i;
  const s = o.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), s.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((a) => Rn(e, a.id, n, r, o));
};
function hn(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(s, a) {
    return s.map((l) => {
      var c;
      const u = Qn(l, n);
      if (u && (r.push(l), o[l.id] = l), (c = l.subRows) != null && c.length && (l = {
        ...l,
        subRows: i(l.subRows)
      }), u)
        return l;
    }).filter(Boolean);
  };
  return {
    rows: i(t.rows),
    flatRows: r,
    rowsById: o
  };
}
function Qn(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function En(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (Qn(s, t) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const a = En(s, t);
      a === "all" ? i = !0 : (a === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const Pn = /([0-9]+)/gm, Ed = (e, t, n) => Bi(De(e.getValue(n)).toLowerCase(), De(t.getValue(n)).toLowerCase()), Pd = (e, t, n) => Bi(De(e.getValue(n)), De(t.getValue(n))), Md = (e, t, n) => Jn(De(e.getValue(n)).toLowerCase(), De(t.getValue(n)).toLowerCase()), Ad = (e, t, n) => Jn(De(e.getValue(n)), De(t.getValue(n))), Fd = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, $d = (e, t, n) => Jn(e.getValue(n), t.getValue(n));
function Jn(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function De(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Bi(e, t) {
  const n = e.split(Pn).filter(Boolean), r = t.split(Pn).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(), i = r.shift(), s = parseInt(o, 10), a = parseInt(i, 10), l = [s, a].sort();
    if (isNaN(l[0])) {
      if (o > i)
        return 1;
      if (i > o)
        return -1;
      continue;
    }
    if (isNaN(l[1]))
      return isNaN(s) ? -1 : 1;
    if (s > a)
      return 1;
    if (a > s)
      return -1;
  }
  return n.length - r.length;
}
const gt = {
  alphanumeric: Ed,
  alphanumericCaseSensitive: Pd,
  text: Md,
  textCaseSensitive: Ad,
  datetime: Fd,
  basic: $d
}, Nd = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: le("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return gt.datetime;
        if (typeof i == "string" && (r = !0, i.split(Pn).length > 1))
          return gt.alphanumeric;
      }
      return r ? gt.text : gt.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Zt(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : gt[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((s) => {
        const a = s == null ? void 0 : s.find((f) => f.id === e.id), l = s == null ? void 0 : s.findIndex((f) => f.id === e.id);
        let c = [], u, p = i ? n : o === "desc";
        if (s != null && s.length && e.getCanMultiSort() && r ? a ? u = "toggle" : u = "add" : s != null && s.length && l !== s.length - 1 ? u = "replace" : a ? u = "toggle" : u = "replace", u === "toggle" && (i || o || (u = "remove")), u === "add") {
          var d;
          c = [...s, {
            id: e.id,
            desc: p
          }], c.splice(0, c.length - ((d = t.options.maxMultiSortColCount) != null ? d : Number.MAX_SAFE_INTEGER));
        } else u === "toggle" ? c = s.map((f) => f.id === e.id ? {
          ...f,
          desc: p
        } : f) : u === "remove" ? c = s.filter((f) => f.id !== e.id) : c = [{
          id: e.id,
          desc: p
        }];
        return c;
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
}, Id = [
  Ju,
  xd,
  pd,
  md,
  td,
  nd,
  wd,
  //depends on ColumnFaceting
  yd,
  //depends on ColumnFiltering
  Nd,
  fd,
  //depends on RowSorting
  Cd,
  Sd,
  _d,
  Rd,
  bd
];
function Od(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...Id, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((d, f) => Object.assign(d, f.getDefaultOptions == null ? void 0 : f.getDefaultOptions(o)), {}), s = (d) => o.options.mergeOptions ? o.options.mergeOptions(i, d) : {
    ...i,
    ...d
  };
  let l = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((d) => {
    var f;
    l = (f = d.getInitialState == null ? void 0 : d.getInitialState(l)) != null ? f : l;
  });
  const c = [];
  let u = !1;
  const p = {
    _features: r,
    options: {
      ...i,
      ...e
    },
    initialState: l,
    _queue: (d) => {
      c.push(d), u || (u = !0, Promise.resolve().then(() => {
        for (; c.length; )
          c.shift()();
        u = !1;
      }).catch((f) => setTimeout(() => {
        throw f;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (d) => {
      const f = Ie(d, o.options);
      o.options = s(f);
    },
    getState: () => o.options.state,
    setState: (d) => {
      o.options.onStateChange == null || o.options.onStateChange(d);
    },
    _getRowId: (d, f, b) => {
      var m;
      return (m = o.options.getRowId == null ? void 0 : o.options.getRowId(d, f, b)) != null ? m : `${b ? [b.id, f].join(".") : f}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (d, f) => {
      let b = (f ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[d];
      if (!b && (b = o.getCoreRowModel().rowsById[d], !b))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${d}`) : new Error();
      return b;
    },
    _getDefaultColumnDef: $(() => [o.options.defaultColumn], (d) => {
      var f;
      return d = (f = d) != null ? f : {}, {
        header: (b) => {
          const m = b.header.column.columnDef;
          return m.accessorKey ? m.accessorKey : m.accessorFn ? m.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (b) => {
          var m, x;
          return (m = (x = b.renderValue()) == null || x.toString == null ? void 0 : x.toString()) != null ? m : null;
        },
        ...o._features.reduce((b, m) => Object.assign(b, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}),
        ...d
      };
    }, N(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: $(() => [o._getColumnDefs()], (d) => {
      const f = function(b, m, x) {
        return x === void 0 && (x = 0), b.map((v) => {
          const w = Qu(o, v, x, m), y = v;
          return w.columns = y.columns ? f(y.columns, w, x + 1) : [], w;
        });
      };
      return f(d);
    }, N(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: $(() => [o.getAllColumns()], (d) => d.flatMap((f) => f.getFlatColumns()), N(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: $(() => [o.getAllFlatColumns()], (d) => d.reduce((f, b) => (f[b.id] = b, f), {}), N(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: $(() => [o.getAllColumns(), o._getOrderColumnsFn()], (d, f) => {
      let b = d.flatMap((m) => m.getLeafColumns());
      return f(b);
    }, N(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (d) => {
      const f = o._getAllFlatColumnsById()[d];
      return process.env.NODE_ENV !== "production" && !f && console.error(`[Table] Column with id '${d}' does not exist.`), f;
    }
  };
  Object.assign(o, p);
  for (let d = 0; d < o._features.length; d++) {
    const f = o._features[d];
    f == null || f.createTable == null || f.createTable(o);
  }
  return o;
}
function kd() {
  return (e) => $(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const a = [];
      for (let c = 0; c < o.length; c++) {
        const u = ed(e, e._getRowId(o[c], c, s), o[c], c, i, void 0, s == null ? void 0 : s.id);
        if (n.flatRows.push(u), n.rowsById[u.id] = u, a.push(u), e.options.getSubRows) {
          var l;
          u.originalSubRows = e.options.getSubRows(o[c], c), (l = u.originalSubRows) != null && l.length && (u.subRows = r(u.originalSubRows, i + 1, u));
        }
      }
      return a;
    };
    return n.rows = r(t), n;
  }, N(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
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
function eo(e, t) {
  return e ? Vd(e) ? /* @__PURE__ */ g.createElement(e, t) : e : null;
}
function Vd(e) {
  return Dd(e) || typeof e == "function" || Ld(e);
}
function Dd(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function Ld(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Td(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = g.useState(() => ({
    current: Od(t)
  })), [r, o] = g.useState(() => n.current.initialState);
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
const Bt = g.forwardRef(
  ({
    checked: e,
    onChange: t,
    disabled: n,
    "aria-label": r,
    className: o,
    ...i
  }, s) => {
    const a = g.useRef(null);
    return g.useImperativeHandle(s, () => a.current), g.useEffect(() => {
      a.current && (a.current.indeterminate = e === "indeterminate");
    }, [e]), /* @__PURE__ */ h(
      "input",
      {
        ref: a,
        type: "checkbox",
        checked: e === !0,
        onChange: (l) => t == null ? void 0 : t(l.target.checked),
        disabled: n,
        "aria-label": r,
        className: D(
          "h-4 w-4 rounded border border-gray-300 focus:ring-2 focus:ring-black focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Custom styling to ensure black checkmark and proper appearance
          "accent-black [&:checked]:bg-black [&:checked]:border-black",
          "checked:bg-black checked:border-black",
          o
        ),
        ...i
      }
    );
  }
);
Bt.displayName = "Checkbox";
const zd = W(
  "w-full border-collapse bg-white overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:z-[101] before:pointer-events-none before:border before:border-[#e3e3e3] before:mix-blend-luminosity before:shadow-[var(--p-shadow-bevel-100)]",
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
      },
      hasIndexFilters: {
        true: "before:rounded-b-[8px]",
        false: "before:rounded-[8px]"
      }
    },
    defaultVariants: {
      condensed: !1,
      hasZebraStriping: !1,
      loading: !1,
      hasIndexFilters: !1
    }
  }
), Ze = W(
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
), Hi = W("p-2 whitespace-nowrap text-sm text-gray-900", {
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
}), Gi = g.forwardRef(
  ({
    headings: e,
    promotedBulkActions: t,
    bulkActions: n,
    children: r,
    emptyState: o,
    sort: i,
    paginatedSelectAllActionText: s,
    paginatedSelectAllText: a,
    lastColumnSticky: l = !1,
    selectable: c = !0,
    sortable: u,
    defaultSortDirection: p = "descending",
    sortDirection: d,
    sortColumnIndex: f,
    onSort: b,
    sortToggleLabels: m,
    hasZebraStriping: x = !1,
    pagination: v,
    itemCount: w,
    selectedItemsCount: y,
    resourceName: C,
    loading: S = !1,
    hasMoreItems: E,
    condensed: R = !1,
    onSelectionChange: _,
    className: O,
    asChild: I = !1,
    data: L,
    columns: P,
    hasIndexFilters: B = !1,
    ...k
  }, U) => {
    const T = g.useMemo(() => L && P ? Td({
      data: L,
      columns: P,
      getCoreRowModel: kd()
    }) : null, [L, P]), H = () => {
      const z = typeof y == "number" && y > 0 || y === "All", X = () => !n || n.length === 0 || !z ? null : /* @__PURE__ */ h("div", { className: "flex items-center gap-2 ml-auto", children: n.map((M, G) => "actions" in M ? M.actions.map((Y, Q) => /* @__PURE__ */ h(
        ne,
        {
          variant: "primary",
          size: "slim",
          onClick: Y.onAction,
          disabled: Y.disabled,
          tone: Y.destructive ? "critical" : void 0,
          children: Y.content
        },
        `${G}-${Q}`
      )) : /* @__PURE__ */ h(
        ne,
        {
          variant: "primary",
          size: "slim",
          onClick: M.onAction,
          disabled: M.disabled,
          tone: M.destructive ? "critical" : void 0,
          children: M.content
        },
        G
      )) });
      return T ? /* @__PURE__ */ h("thead", { children: T.getHeaderGroups().map((M) => /* @__PURE__ */ A("tr", { children: [
        c && /* @__PURE__ */ h(
          "th",
          {
            className: D(
              Ze({
                isSelectionColumn: !0
              })
            ),
            children: /* @__PURE__ */ h(
              Bt,
              {
                checked: y === "All" || y === w && w > 0 ? !0 : typeof y == "number" && y > 0 ? "indeterminate" : !1,
                onChange: (G) => {
                  _ && _(
                    "page",
                    G,
                    void 0,
                    void 0
                  );
                },
                "aria-label": `Select all ${(C == null ? void 0 : C.plural) || "items"}`
              }
            )
          }
        ),
        z ? /* @__PURE__ */ h(
          "th",
          {
            colSpan: M.headers.length,
            className: D(
              Ze({
                alignment: "start"
              }),
              "text-left"
            ),
            children: /* @__PURE__ */ A("div", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ h(ue, { variant: "bodyMd", as: "span", children: y === "All" ? `All ${(C == null ? void 0 : C.plural) || "items"} selected` : `${y} ${y === 1 ? (C == null ? void 0 : C.singular) || "item" : (C == null ? void 0 : C.plural) || "items"} selected` }),
              X()
            ] })
          }
        ) : M.headers.map((G, Y) => /* @__PURE__ */ h(
          "th",
          {
            className: D(
              Ze({
                alignment: "start",
                sortable: G.column.getCanSort(),
                sticky: l && Y === M.headers.length - 1
              })
            ),
            children: G.isPlaceholder ? null : eo(
              G.column.columnDef.header,
              G.getContext()
            )
          },
          G.id
        ))
      ] }, M.id)) }) : /* @__PURE__ */ h("thead", { children: /* @__PURE__ */ A("tr", { children: [
        c && /* @__PURE__ */ h(
          "th",
          {
            className: D(
              Ze({
                isSelectionColumn: !0
              })
            ),
            children: /* @__PURE__ */ h(
              Bt,
              {
                checked: y === "All" || y === w && w > 0 ? !0 : typeof y == "number" && y > 0 ? "indeterminate" : !1,
                onChange: (M) => {
                  _ && _(
                    "page",
                    M,
                    void 0,
                    void 0
                  );
                },
                "aria-label": `Select all ${(C == null ? void 0 : C.plural) || "items"}`
              }
            )
          }
        ),
        z ? /* @__PURE__ */ h(
          "th",
          {
            colSpan: e.length,
            className: D(
              Ze({
                alignment: "start"
              }),
              "text-left"
            ),
            children: /* @__PURE__ */ A("div", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ h(ue, { variant: "bodyMd", as: "span", children: y === "All" ? `All ${(C == null ? void 0 : C.plural) || "items"} selected` : `${y} ${y === 1 ? (C == null ? void 0 : C.singular) || "item" : (C == null ? void 0 : C.plural) || "items"} selected` }),
              X()
            ] })
          }
        ) : e.map((M, G) => /* @__PURE__ */ h(
          "th",
          {
            className: D(
              Ze({
                alignment: M.alignment || "start",
                sortable: (u == null ? void 0 : u[G]) || !1,
                sticky: l && G === e.length - 1
              })
            ),
            children: /* @__PURE__ */ h(ue, { variant: "bodyMd", fontWeight: "semibold", children: (typeof M.title == "string", M.title) })
          },
          G
        ))
      ] }) });
    }, F = () => {
      var X;
      if (T)
        return /* @__PURE__ */ h("tbody", { children: (X = T.getRowModel().rows) != null && X.length ? T.getRowModel().rows.map((M) => /* @__PURE__ */ h("tr", { className: "hover:bg-gray-50", children: M.getVisibleCells().map((G, Y) => /* @__PURE__ */ h(
          "td",
          {
            className: D(
              Hi({
                alignment: "start",
                sticky: l && Y === M.getVisibleCells().length - 1
              })
            ),
            children: eo(
              G.column.columnDef.cell,
              G.getContext()
            )
          },
          G.id
        )) }, M.id)) : /* @__PURE__ */ h("tr", { children: /* @__PURE__ */ h(
          "td",
          {
            colSpan: (P == null ? void 0 : P.length) || e.length,
            className: "h-24 text-center",
            children: o || /* @__PURE__ */ h(ue, { variant: "bodyMd", tone: "subdued", children: "No results." })
          }
        ) }) });
      const z = g.Children.map(r, (M) => g.isValidElement(M) && M.type === er ? g.cloneElement(M, {
        selectable: c,
        onSelectionChange: _,
        resourceName: C,
        ...M.props
      }) : M);
      return /* @__PURE__ */ h("tbody", { children: z });
    };
    return w === 0 && o ? /* @__PURE__ */ h("div", { className: "flex items-center justify-center p-8", children: o }) : /* @__PURE__ */ A("div", { className: "overflow-x-auto", children: [
      /* @__PURE__ */ A(
        "table",
        {
          ref: U,
          className: D(
            zd({
              condensed: R,
              hasZebraStriping: x,
              loading: S,
              hasIndexFilters: B
            }),
            O
          ),
          ...k,
          children: [
            H(),
            F()
          ]
        }
      ),
      v && /* @__PURE__ */ h("div", { className: "", children: /* @__PURE__ */ h(Ni, { type: "table", ...v }) })
    ] });
  }
);
Gi.displayName = "IndexTable";
const er = g.forwardRef(
  ({
    children: e,
    id: t,
    selected: n = !1,
    position: r,
    tone: o,
    disabled: i = !1,
    selectionRange: s,
    rowType: a = "data",
    accessibilityLabel: l,
    onClick: c,
    onNavigation: u,
    className: p,
    selectable: d = !0,
    onSelectionChange: f,
    resourceName: b,
    ...m
  }, x) => {
    const v = W(
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
    ), w = (y) => {
      const C = y.target;
      C.type === "checkbox" || C.closest('input[type="checkbox"]') || C.closest("button") || C.closest("a") || (d && f && !i && f("single", !n, t, r), c && c());
    };
    return /* @__PURE__ */ A(
      "tr",
      {
        ref: x,
        className: D(
          v({
            selected: n === !0 ? !0 : n === "indeterminate" ? "indeterminate" : !1,
            tone: o,
            disabled: i,
            rowType: a
          }),
          // Add cursor pointer when selectable
          d && !i && "cursor-pointer",
          p
        ),
        onClick: w,
        ...m,
        children: [
          d && /* @__PURE__ */ h(
            "td",
            {
              className: D(
                Hi({
                  isSelectionColumn: !0
                })
              ),
              children: /* @__PURE__ */ h(
                Bt,
                {
                  checked: n === !0,
                  onChange: (y) => {
                    f && f("single", y, t, r);
                  },
                  disabled: i,
                  "aria-label": l || `Select ${(b == null ? void 0 : b.singular) || "item"}`
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
er.displayName = "IndexTable.Row";
const ji = g.forwardRef(
  ({
    as: e = "td",
    id: t,
    children: n,
    className: r,
    flush: o = !1,
    colSpan: i,
    scope: s,
    headers: a,
    ...l
  }, c) => {
    const u = W("border-gray-200 text-xs", {
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
    return /* @__PURE__ */ h(
      e,
      {
        ref: c,
        id: t,
        className: D(u({ flush: o }), r),
        colSpan: i,
        scope: s,
        headers: a,
        ...l,
        children: n
      }
    );
  }
);
ji.displayName = "IndexTable.Cell";
const Kd = (e, t) => {
  const [n, r] = g.useState(
    (t == null ? void 0 : t.selectedResources) || []
  ), [o, i] = g.useState(
    (t == null ? void 0 : t.allResourcesSelected) || !1
  ), s = g.useCallback(
    (l, c, u, p) => {
      if (l === "single" && typeof u == "string")
        r(
          c ? (d) => d.includes(u) ? d.filter((f) => f !== u) : [...d, u] : [u]
        );
      else if (l === "multiple" && typeof u == "object") {
        const { start: d, end: f } = u, b = e.slice(d, f + 1).map((m) => m.id);
        r(c ? (m) => [.../* @__PURE__ */ new Set([...m, ...b])] : b);
      } else if (l === "page")
        if (c) {
          const d = e.map((f) => f.id);
          r(d), i(!1);
        } else
          r([]), i(!1);
      else l === "all" && (i(c), c && r([]));
    },
    [e]
  ), a = g.useCallback(() => {
    r([]), i(!1);
  }, []);
  return {
    selectedResources: n,
    allResourcesSelected: o,
    handleSelectionChange: s,
    clearSelection: a
  };
}, Wi = Gi;
Wi.Row = er;
Wi.Cell = ji;
export {
  Lu as Badge,
  Iu as Bleed,
  ju as BlockStack,
  Ks as Box,
  ne as Button,
  wo as ButtonGroup,
  su as Card,
  mi as ChoiceList,
  Xu as IndexFilters,
  Wi as IndexTable,
  Bu as InlineStack,
  Pu as Modal,
  Du as Page,
  Ni as Pagination,
  qn as Popover,
  ue as Text,
  yo as TextField,
  $u as TitleBar,
  Zd as badgeVariants,
  Nu as bleedVariants,
  Gu as blockStackVariants,
  Ys as boxVariants,
  Ws as buttonGroupVariants,
  Gs as buttonVariants,
  D as cn,
  Uu as indexFiltersVariants,
  zd as indexTableVariants,
  zu as inlineStackVariants,
  Eu as modalVariants,
  Wu as paginationVariants,
  ou as polarisCardVariants,
  tu as polarisChoiceListVariants,
  Ou as polarisPageVariants,
  Qc as polarisPopoverVariants,
  Js as textFieldVariants,
  Qs as textVariants,
  Mu as titleBarVariants,
  Kd as useIndexResourceState,
  Yd as useSetIndexFiltersMode
};
//# sourceMappingURL=index.js.map
