import { jsx as h, jsxs as M, Fragment as Je } from "react/jsx-runtime";
import * as g from "react";
import G, { useLayoutEffect as hs, useState as bs } from "react";
import * as ro from "react-dom";
import vs from "react-dom";
function hr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function oo(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = hr(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : hr(e[o], null);
        }
      };
  };
}
function he(...e) {
  return g.useCallback(oo(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  const t = /* @__PURE__ */ ws(e), n = g.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = g.Children.toArray(i), l = a.find(Cs);
    if (l) {
      const c = l.props.children, u = a.map((p) => p === l ? g.Children.count(c) > 1 ? g.Children.only(null) : g.isValidElement(c) ? c.props.children : null : p);
      return /* @__PURE__ */ h(t, { ...s, ref: o, children: g.isValidElement(c) ? g.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ h(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var xs = /* @__PURE__ */ Ht("Slot");
// @__NO_SIDE_EFFECTS__
function ws(e) {
  const t = g.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (g.isValidElement(o)) {
      const s = _s(o), a = Ss(i, o.props);
      return o.type !== g.Fragment && (a.ref = r ? oo(r, s) : s), g.cloneElement(o, a);
    }
    return g.Children.count(o) > 1 ? g.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ys = Symbol("radix.slottable");
function Cs(e) {
  return g.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ys;
}
function Ss(e, t) {
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
function _s(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function io(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = io(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function so() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = io(e)) && (r && (r += " "), r += t);
  return r;
}
const br = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, vr = so, W = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return vr(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((c) => {
    const u = n == null ? void 0 : n[c], p = i == null ? void 0 : i[c];
    if (u === null) return null;
    const d = br(u) || br(p);
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
  return vr(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
var ao = function(t) {
  return /* @__PURE__ */ G.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ G.createElement("path", {
    d: "M10 6a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Z"
  }), /* @__PURE__ */ G.createElement("path", {
    d: "M10 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /* @__PURE__ */ G.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 8.25a4.75 4.75 0 0 1 4.75-4.75h3.5a4.75 4.75 0 0 1 4.75 4.75v2.5a4.75 4.75 0 0 1-4.573 4.747l-1.335 1.714a.75.75 0 0 1-1.189-.006l-1.3-1.707a4.75 4.75 0 0 1-4.603-4.748v-2.5Zm4.75-3.25a3.25 3.25 0 0 0-3.25 3.25v2.5a3.25 3.25 0 0 0 3.25 3.25h.226a.75.75 0 0 1 .597.296l.934 1.225.96-1.232a.75.75 0 0 1 .591-.289h.192a3.25 3.25 0 0 0 3.25-3.25v-2.5a3.25 3.25 0 0 0-3.25-3.25h-3.5Z"
  }));
};
ao.displayName = "AlertBubbleIcon";
var lo = function(t) {
  return /* @__PURE__ */ G.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ G.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
lo.displayName = "CheckIcon";
var co = function(t) {
  return /* @__PURE__ */ G.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ G.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
co.displayName = "ChevronDownIcon";
var Mn = function(t) {
  return /* @__PURE__ */ G.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ G.createElement("path", {
    fillRule: "evenodd",
    d: "M11.764 5.204a.75.75 0 0 1 .032 1.06l-3.516 3.736 3.516 3.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.028l4-4.25a.75.75 0 0 1 1.06-.032Z"
  }));
};
Mn.displayName = "ChevronLeftIcon";
var An = function(t) {
  return /* @__PURE__ */ G.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ G.createElement("path", {
    fillRule: "evenodd",
    d: "M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
  }));
};
An.displayName = "ChevronRightIcon";
var uo = function(t) {
  return /* @__PURE__ */ G.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ G.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
uo.displayName = "ChevronUpIcon";
var fo = function(t) {
  return /* @__PURE__ */ G.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ G.createElement("path", {
    d: "M3 6a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /* @__PURE__ */ G.createElement("path", {
    d: "M6.75 14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
  }), /* @__PURE__ */ G.createElement("path", {
    d: "M5.5 9.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
  }));
};
fo.displayName = "FilterIcon";
var go = function(t) {
  return /* @__PURE__ */ G.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ G.createElement("path", {
    d: "M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"
  }), /* @__PURE__ */ G.createElement("path", {
    d: "M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"
  }));
};
go.displayName = "RefreshIcon";
var po = function(t) {
  return /* @__PURE__ */ G.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ G.createElement("path", {
    fillRule: "evenodd",
    d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};
po.displayName = "SearchIcon";
var mo = function(t) {
  return /* @__PURE__ */ G.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ G.createElement("path", {
    fillRule: "evenodd",
    d: "M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /* @__PURE__ */ G.createElement("path", {
    fillRule: "evenodd",
    d: "M9.377 2.5c-.926 0-1.676.75-1.676 1.676v.688c0 .056-.043.17-.198.251-.153.08-.303.168-.448.262-.147.097-.268.076-.318.048l-.6-.346a1.676 1.676 0 0 0-2.29.613l-.622 1.08a1.676 1.676 0 0 0 .613 2.289l.648.374c.048.028.124.12.119.29a5.484 5.484 0 0 0 .005.465c.009.175-.07.27-.119.299l-.653.377a1.676 1.676 0 0 0-.613 2.29l.623 1.08a1.676 1.676 0 0 0 2.29.613l.7-.405c.048-.028.166-.048.312.043.115.071.233.139.353.202.155.08.198.195.198.251v.811c0 .926.75 1.676 1.676 1.676h1.246c.926 0 1.676-.75 1.676-1.676v-.81c0-.057.042-.171.197-.252.121-.063.239-.13.354-.202.146-.091.264-.07.312-.043l.7.405a1.676 1.676 0 0 0 2.29-.614l.623-1.08a1.676 1.676 0 0 0-.613-2.289l-.653-.377c-.05-.029-.128-.123-.119-.3a5.494 5.494 0 0 0 .005-.463c-.005-.171.07-.263.12-.291l.647-.374a1.676 1.676 0 0 0 .613-2.29l-.623-1.079a1.676 1.676 0 0 0-2.29-.613l-.6.346c-.049.028-.17.048-.318-.048a5.4 5.4 0 0 0-.448-.262c-.155-.081-.197-.195-.197-.251v-.688c0-.926-.75-1.676-1.676-1.676h-1.246Zm-.176 1.676c0-.097.078-.176.176-.176h1.246c.097 0 .176.079.176.176v.688c0 .728.462 1.298 1.003 1.58.11.058.219.122.323.19.517.337 1.25.458 1.888.09l.6-.346a.176.176 0 0 1 .24.064l.623 1.08a.176.176 0 0 1-.064.24l-.648.374c-.623.36-.888 1.034-.868 1.638a4.184 4.184 0 0 1-.004.337c-.032.615.23 1.31.867 1.677l.653.377a.176.176 0 0 1 .064.24l-.623 1.08a.176.176 0 0 1-.24.065l-.701-.405c-.624-.36-1.341-.251-1.855.069a3.91 3.91 0 0 1-.255.145c-.54.283-1.003.853-1.003 1.581v.811a.176.176 0 0 1-.176.176h-1.246a.176.176 0 0 1-.176-.176v-.81c0-.73-.462-1.3-1.003-1.582a3.873 3.873 0 0 1-.255-.146c-.514-.32-1.23-.428-1.855-.068l-.7.405a.176.176 0 0 1-.241-.065l-.623-1.08a.176.176 0 0 1 .064-.24l.653-.377c.637-.368.899-1.062.867-1.677a3.97 3.97 0 0 1-.004-.337c.02-.604-.245-1.278-.868-1.638l-.648-.374a.176.176 0 0 1-.064-.24l.623-1.08a.176.176 0 0 1 .24-.064l.6.346c.638.368 1.37.247 1.888-.09a3.85 3.85 0 0 1 .323-.19c.54-.282 1.003-.852 1.003-1.58v-.688Z"
  }));
};
mo.displayName = "SettingsIcon";
var ho = function(t) {
  return /* @__PURE__ */ G.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ G.createElement("path", {
    d: "M7.75 6.06v7.69a.75.75 0 0 1-1.5 0v-7.69l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72Z"
  }), /* @__PURE__ */ G.createElement("path", {
    d: "M13.75 6.25a.75.75 0 0 0-1.5 0v7.69l-1.72-1.72a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-7.69Z"
  }));
};
ho.displayName = "SortIcon";
var bo = function(t) {
  return /* @__PURE__ */ G.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ G.createElement("path", {
    d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
  }), /* @__PURE__ */ G.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
bo.displayName = "XCircleIcon";
var Nn = function(t) {
  return /* @__PURE__ */ G.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ G.createElement("path", {
    d: "M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z"
  }));
};
Nn.displayName = "XIcon";
const Fn = "-", Rs = (e) => {
  const t = Ps(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const a = s.split(Fn);
      return a[0] === "" && a.length !== 1 && a.shift(), vo(a, t) || Es(s);
    },
    getConflictingClassGroupIds: (s, a) => {
      const l = n[s] || [];
      return a && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, vo = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? vo(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Fn);
  return (s = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
}, xr = /^\[(.+)\]$/, Es = (e) => {
  if (xr.test(e)) {
    const t = xr.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Ps = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return As(Object.entries(e.classGroups), n).forEach(([i, s]) => {
    bn(s, r, i, t);
  }), r;
}, bn = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : wr(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Ms(o)) {
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
      bn(s, wr(t, i), n, r);
    });
  });
}, wr = (e, t) => {
  let n = e;
  return t.split(Fn).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Ms = (e) => e.isThemeGetter, As = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
  return [n, o];
}) : e, Ns = (e) => {
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
}, xo = "!", Fs = (e) => {
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
    const d = l.length === 0 ? a : a.substring(u), f = d.startsWith(xo), b = f ? d.substring(1) : d, m = p && p > u ? p - u : void 0;
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
}, $s = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, Is = (e) => ({
  cache: Ns(e.cacheSize),
  parseClassName: Fs(e),
  ...Rs(e)
}), Os = /\s+/, ks = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], s = e.trim().split(Os);
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
    const x = $s(u).join(":"), v = p ? x + xo : x, w = v + m;
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
function Ds() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = wo(t)) && (r && (r += " "), r += n);
  return r;
}
const wo = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = wo(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Vs(e, ...t) {
  let n, r, o, i = s;
  function s(l) {
    const c = t.reduce((u, p) => p(u), e());
    return n = Is(c), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const u = ks(l, n);
    return o(l, u), u;
  }
  return function() {
    return i(Ds.apply(null, arguments));
  };
}
const X = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, yo = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ls = /^\d+\/\d+$/, Ts = /* @__PURE__ */ new Set(["px", "full", "screen"]), zs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Bs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Hs = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Gs = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, js = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ee = (e) => Ye(e) || Ts.has(e) || Ls.test(e), Ne = (e) => rt(e, "length", Qs), Ye = (e) => !!e && !Number.isNaN(Number(e)), Jt = (e) => rt(e, "number", Ye), ft = (e) => !!e && Number.isInteger(Number(e)), Ws = (e) => e.endsWith("%") && Ye(e.slice(0, -1)), V = (e) => yo.test(e), Fe = (e) => zs.test(e), Us = /* @__PURE__ */ new Set(["length", "size", "percentage"]), qs = (e) => rt(e, Us, Co), Zs = (e) => rt(e, "position", Co), Xs = /* @__PURE__ */ new Set(["image", "url"]), Ys = (e) => rt(e, Xs, ea), Ks = (e) => rt(e, "", Js), gt = () => !0, rt = (e, t, n) => {
  const r = yo.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Qs = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Bs.test(e) && !Hs.test(e)
), Co = () => !1, Js = (e) => Gs.test(e), ea = (e) => js.test(e), ta = () => {
  const e = X("colors"), t = X("spacing"), n = X("blur"), r = X("brightness"), o = X("borderColor"), i = X("borderRadius"), s = X("borderSpacing"), a = X("borderWidth"), l = X("contrast"), c = X("grayscale"), u = X("hueRotate"), p = X("invert"), d = X("gap"), f = X("gradientColorStops"), b = X("gradientColorStopPositions"), m = X("inset"), x = X("margin"), v = X("opacity"), w = X("padding"), y = X("saturate"), C = X("scale"), S = X("sepia"), E = X("skew"), R = X("space"), _ = X("translate"), k = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", V, t], P = () => [V, t], B = () => ["", Ee, Ne], D = () => ["auto", Ye, V], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], T = () => ["solid", "dashed", "dotted", "double", "none"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", V], Z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], A = () => [Ye, V];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [gt],
      spacing: [Ee, Ne],
      blur: ["none", "", Fe, V],
      brightness: A(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Fe, V],
      borderSpacing: P(),
      borderWidth: B(),
      contrast: A(),
      grayscale: z(),
      hueRotate: A(),
      invert: z(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ws, Ne],
      inset: L(),
      margin: L(),
      opacity: A(),
      padding: P(),
      saturate: A(),
      scale: A(),
      sepia: z(),
      skew: A(),
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
        columns: [Fe]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Z()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Z()
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
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
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
        z: ["auto", ft, V]
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
        order: ["first", "last", "none", ft, V]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [gt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ft, V]
        }, V]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [gt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ft, V]
        }, V]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
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
        justify: ["normal", ...N()]
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
        content: ["normal", ...N(), "baseline"]
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
        "place-content": [...N(), "baseline"]
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
          screen: [Fe]
        }, Fe]
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
        text: ["base", Fe, Ne]
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
        font: [gt]
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
        decoration: ["auto", "from-font", Ee, Ne]
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
        bg: [...U(), Zs]
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
        bg: ["auto", "cover", "contain", qs]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ys]
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
        outline: [Ee, Ne]
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
        "ring-offset": [Ee, Ne]
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
        shadow: ["", "inner", "none", Fe, Ks]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [gt]
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
        "drop-shadow": ["", "none", Fe, V]
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
        duration: A()
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
        delay: A()
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
        rotate: [ft, V]
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
        stroke: [Ee, Ne, Jt]
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
}, na = /* @__PURE__ */ Vs(ta);
function F(...e) {
  return na(so(e));
}
const ra = W(
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
), oa = (e) => e ? e === !0 || e === "down" ? /* @__PURE__ */ h(co, { className: "size-4" }) : e === "up" ? /* @__PURE__ */ h(uo, { className: "size-4" }) : e === "select" ? /* @__PURE__ */ h(lo, { className: "size-4" }) : null : null, yr = () => /* @__PURE__ */ h(go, { className: "size-4 animate-spin" }), ee = g.forwardRef(
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
    onClick: k,
    onFocus: O,
    onBlur: L,
    onKeyPress: P,
    onKeyUp: B,
    onKeyDown: D,
    onMouseEnter: U,
    onTouchStart: T,
    onPointerDown: H,
    className: N,
    asChild: z = !1,
    ...Z
  }, A) => {
    const j = !!p, Y = z ? xs : j ? "a" : "button", Q = v, ce = x || Q, oe = oa(o), te = F(
      ra({
        variant: c,
        size: t,
        tone: l === "critical" ? "critical" : l === "success" ? "success" : "default",
        textAlign: n,
        fullWidth: r,
        pressed: w
      }),
      // Handle underline removal for plain variants
      i && (c === "plain" || c === "monochromePlain") && "no-underline hover:no-underline",
      N
    ), q = {
      id: u,
      className: te,
      disabled: ce,
      "aria-label": y,
      "aria-controls": S,
      "aria-expanded": E,
      "aria-describedby": R,
      "aria-checked": _,
      "aria-pressed": w,
      "data-primary-link": a,
      role: C,
      onClick: ce ? void 0 : k,
      onFocus: O,
      onBlur: L,
      onKeyPress: P,
      onKeyUp: B,
      onKeyDown: D,
      onMouseEnter: U,
      onTouchStart: T,
      onPointerDown: H,
      ref: A,
      ...Z
    };
    return j ? /* @__PURE__ */ M(
      Y,
      {
        ...q,
        href: p,
        target: d ? "_blank" : f,
        rel: d ? "noopener noreferrer" : void 0,
        download: b,
        children: [
          s && !Q && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: s }),
          Q && /* @__PURE__ */ h(yr, {}),
          e && /* @__PURE__ */ h("span", { className: "inline-flex", children: e }),
          oe && !Q && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: oe })
        ]
      }
    ) : /* @__PURE__ */ M(Y, { ...q, type: m ? "submit" : "button", children: [
      s && !Q && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: s }),
      Q && /* @__PURE__ */ h(yr, {}),
      e && /* @__PURE__ */ h("span", { className: "inline-flex", children: e }),
      oe && !Q && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: oe })
    ] });
  }
);
ee.displayName = "Button";
const ia = W("flex items-center", {
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
}), So = g.forwardRef(
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
    const c = F(
      ia({
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
So.displayName = "ButtonGroup";
const sa = (e) => e && {
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
}[e] || "", Cr = (e) => e ? e === "transparent" ? "border-transparent" : {
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
}[e] || "" : "", aa = (e) => e && {
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
}[e] || "", Sr = (e) => e && {
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
}[e] || "", la = (e) => e && {
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
}[e] || "", ca = (e) => e && {
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
    const r = Sr(e);
    return r ? `${t}-${r}` : "";
  }
  const n = [];
  return Object.entries(e).forEach(([r, o]) => {
    const i = Sr(o);
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
}, ua = W("", {
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
}), da = g.forwardRef(
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
    paddingBlockEnd: k,
    paddingInline: O,
    paddingInlineStart: L,
    paddingInlineEnd: P,
    role: B,
    shadow: D,
    tabIndex: U,
    width: T,
    position: H,
    insetBlockStart: N,
    insetBlockEnd: z,
    insetInlineStart: Z,
    insetInlineEnd: A,
    opacity: j,
    outlineColor: Y,
    outlineStyle: Q,
    outlineWidth: ce,
    printHidden: oe = !1,
    visuallyHidden: te = !1,
    zIndex: q,
    className: Se,
    ...He
  }, Te) => {
    const Ge = t, de = F(
      ua({
        visuallyHidden: te,
        printHidden: oe
      }),
      // Background
      sa(n),
      // Border
      Cr(r),
      o === "dashed" ? "border-dashed" : "border-solid",
      la(i),
      _r(u),
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
      aa(m),
      // Overflow
      C && `overflow-x-${C}`,
      S && `overflow-y-${S}`,
      // Padding
      fe(E, "p"),
      fe(R, "py"),
      fe(_, "pt"),
      fe(k, "pb"),
      fe(O, "px"),
      fe(L, "pl"),
      fe(P, "pr"),
      // Shadow
      ca(D),
      // Position
      H && `${H}`,
      // Inset (positioning)
      fe(N, "top"),
      fe(z, "bottom"),
      fe(Z, "left"),
      fe(A, "right"),
      // Outline
      Y && Cr(Y).replace("border-", "outline-"),
      Q === "dashed" ? "outline-dashed" : Q === "solid" ? "outline-solid" : "",
      ce && _r(ce).replace("border-", "outline-"),
      Se
    ), _e = {
      ...v && { minHeight: v },
      ...w && { minWidth: w },
      ...y && { maxWidth: y },
      ...T && { width: T },
      ...j && { opacity: j },
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
da.displayName = "Box";
const fa = W("", {
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
      className: F(
        fa({
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
const ga = W(
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
), pa = () => {
  const [e] = g.useState(
    () => Math.random().toString(36).substring(2, 11)
  );
  return e;
}, ma = (e) => {
  if (e)
    return typeof e == "number" ? e : 3;
}, ha = (e) => {
  if (e)
    return e || typeof e == "number" && e > 0 ? { "aria-multiline": !0 } : void 0;
}, Rr = (e) => `${e}Label`, Er = (e) => `${e}HelpText`, _o = g.forwardRef(
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
    max: k,
    maxLength: O,
    maxHeight: L,
    min: P,
    minLength: B,
    pattern: D,
    inputMode: U,
    spellCheck: T,
    ariaOwns: H,
    ariaControls: N,
    ariaExpanded: z,
    ariaActiveDescendant: Z,
    ariaAutocomplete: A,
    showCharacterCount: j = !1,
    align: Y = "left",
    requiredIndicator: Q = !1,
    monospaced: ce = !1,
    selectTextOnFocus: oe = !1,
    suggestion: te,
    variant: q = "inherit",
    size: Se = "medium",
    tone: He,
    autoSize: Te = !1,
    loading: Ge = !1,
    onClearButtonClick: de,
    onChange: _e,
    onSpinnerChange: rr,
    onFocus: at,
    onBlur: lt,
    className: Yt,
    ...je
  }, ct) => {
    const ss = pa(), J = C ?? ss, [as, or] = g.useState(!!f), Kt = g.useRef(null), ir = g.useRef(null), sr = g.useRef(null), wt = g.useCallback(() => b ? ir.current : Kt.current, [b]);
    g.useEffect(() => {
      const K = wt();
      !K || f === void 0 || (f ? K.focus() : K.blur());
    }, [f, wt]), g.useEffect(() => {
      const K = Kt.current;
      !K || !(w === "text" || w === "tel" || w === "search" || w === "url" || w === "password") || !te || K.setSelectionRange(o.length, te.length);
    }, [as, o, w, te]);
    const Qt = te || o, ls = w === "currency" ? "text" : w, cs = F(
      ga({
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
    ), ar = g.useCallback(
      (K) => {
        _e && _e(K.currentTarget.value, J);
      },
      [_e, J]
    ), us = g.useCallback(
      (K) => {
        if (or(!0), oe && !te) {
          const Re = wt();
          Re == null || Re.select();
        }
        at && at(K);
      },
      [oe, te, wt, at]
    ), ds = g.useCallback(
      (K) => {
        var Re;
        or(!1), !((Re = sr.current) != null && Re.contains(K == null ? void 0 : K.relatedTarget)) && lt && lt(K);
      },
      [lt]
    ), fs = g.useCallback(() => {
      de && de(J);
    }, [de, J]), ut = [];
    m && ut.push(`${J}Error`), i && ut.push(Er(J)), j && ut.push(`${J}-CharacterCounter`);
    const dt = [];
    e && dt.push(`${J}-Prefix`), t && dt.push(`${J}-Suffix`), n && dt.push(`${J}-VerticalContent`), dt.unshift(Rr(J));
    let lr = null;
    if (j) {
      const K = Qt.length, Re = O ? `${K}/${O}` : K;
      lr = /* @__PURE__ */ h(
        "div",
        {
          id: `${J}-CharacterCounter`,
          className: "text-xs text-muted-foreground mt-1",
          children: Re
        }
      );
    }
    const cr = u && Qt !== "" ? /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        className: "absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground focus:outline-hidden focus:ring-3 focus:ring-ring focus:ring-offset-2 rounded-sm",
        onClick: fs,
        tabIndex: -1,
        "aria-label": "Clear",
        children: /* @__PURE__ */ h(bo, { className: "h-4 w-4" })
      }
    ) : null, ur = e ? /* @__PURE__ */ h(
      "div",
      {
        id: `${J}-Prefix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-r border-input bg-muted/50",
        children: e
      }
    ) : null, dr = t ? /* @__PURE__ */ h(
      "div",
      {
        id: `${J}-Suffix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-l border-input bg-muted/50",
        children: t
      }
    ) : null, fr = Ge ? /* @__PURE__ */ h("div", { className: "absolute right-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ h("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-foreground" }) }) : null, gs = l ? null : /* @__PURE__ */ M(
      "label",
      {
        id: Rr(J),
        htmlFor: J,
        className: F(
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
    ), ps = i ? /* @__PURE__ */ h("div", { id: Er(J), className: "text-xs text-muted-foreground mt-1", children: i }) : null, ms = m && typeof m != "boolean" ? /* @__PURE__ */ h(
      "div",
      {
        id: `${J}Error`,
        className: "text-xs text-destructive mt-1",
        role: "alert",
        children: m
      }
    ) : null, gr = n ? /* @__PURE__ */ h(
      "div",
      {
        id: `${J}-VerticalContent`,
        className: "text-sm text-muted-foreground mb-2",
        children: n
      }
    ) : null, pr = {
      ...L && { maxHeight: L }
    }, mr = g.createElement(b ? "textarea" : "input", {
      ref: g.useCallback(
        (K) => {
          b ? ir.current = K : Kt.current = K, typeof ct == "function" ? ct(K) : ct && (ct.current = K);
        },
        [b, ct]
      ),
      id: J,
      name: y,
      type: ls,
      value: Qt,
      placeholder: r,
      disabled: c,
      readOnly: p,
      autoFocus: d,
      role: S,
      min: P,
      max: k,
      step: E,
      minLength: B,
      maxLength: O,
      pattern: D,
      inputMode: U,
      spellCheck: T,
      autoComplete: _,
      rows: ma(b),
      size: Te ? 1 : void 0,
      style: Object.keys(pr).length > 0 ? pr : void 0,
      className: cs,
      "aria-describedby": ut.length ? ut.join(" ") : void 0,
      "aria-labelledby": dt.join(" "),
      "aria-invalid": !!m,
      "aria-owns": H,
      "aria-activedescendant": Z,
      "aria-autocomplete": A,
      "aria-controls": N,
      "aria-expanded": z,
      "aria-required": Q,
      ...ha(b),
      onChange: te ? void 0 : ar,
      onInput: te ? ar : void 0,
      onFocus: us,
      onBlur: ds,
      // Password manager disable attributes
      "data-1p-ignore": _ === "off" || void 0,
      "data-lpignore": _ === "off" || void 0,
      "data-form-type": _ === "off" ? "other" : void 0,
      ...je
    });
    return /* @__PURE__ */ M("div", { ref: sr, className: "space-y-2", children: [
      gs,
      v || x ? /* @__PURE__ */ M("div", { className: "flex", children: [
        v,
        /* @__PURE__ */ M("div", { className: "flex-1 relative", children: [
          gr,
          /* @__PURE__ */ M("div", { className: "relative flex", children: [
            ur,
            mr,
            dr,
            cr,
            fr
          ] })
        ] }),
        x
      ] }) : /* @__PURE__ */ M("div", { className: "relative", children: [
        gr,
        /* @__PURE__ */ M("div", { className: "relative flex", children: [
          ur,
          mr,
          dr,
          cr,
          fr
        ] })
      ] }),
      ms,
      ps,
      lr
    ] });
  }
);
_o.displayName = "TextField";
function se(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function ba(e, t) {
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
function $n(e, t = []) {
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
  return o.scopeName = e, [r, va(o, ...t)];
}
function va(...e) {
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
var xa = [
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
], re = xa.reduce((e, t) => {
  const n = /* @__PURE__ */ Ht(`Primitive.${t}`), r = g.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function wa(e, t) {
  e && ro.flushSync(() => e.dispatchEvent(t));
}
function et(e) {
  const t = g.useRef(e);
  return g.useEffect(() => {
    t.current = e;
  }), g.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function ya(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = et(e);
  g.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Ca = "DismissableLayer", vn = "dismissableLayer.update", Sa = "dismissableLayer.pointerDownOutside", _a = "dismissableLayer.focusOutside", Pr, Ro = g.createContext({
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
    } = e, c = g.useContext(Ro), [u, p] = g.useState(null), d = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, f] = g.useState({}), b = he(t, (R) => p(R)), m = Array.from(c.layers), [x] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), v = m.indexOf(x), w = u ? m.indexOf(u) : -1, y = c.layersWithOutsidePointerEventsDisabled.size > 0, C = w >= v, S = Pa((R) => {
      const _ = R.target, k = [...c.branches].some((O) => O.contains(_));
      !C || k || (o == null || o(R), s == null || s(R), R.defaultPrevented || a == null || a());
    }, d), E = Ma((R) => {
      const _ = R.target;
      [...c.branches].some((O) => O.contains(_)) || (i == null || i(R), s == null || s(R), R.defaultPrevented || a == null || a());
    }, d);
    return ya((R) => {
      w === c.layers.size - 1 && (r == null || r(R), !R.defaultPrevented && a && (R.preventDefault(), a()));
    }, d), g.useEffect(() => {
      if (u)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Pr = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Mr(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = Pr);
        };
    }, [u, d, n, c]), g.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Mr());
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
In.displayName = Ca;
var Ra = "DismissableLayerBranch", Ea = g.forwardRef((e, t) => {
  const n = g.useContext(Ro), r = g.useRef(null), o = he(t, r);
  return g.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ h(re.div, { ...e, ref: o });
});
Ea.displayName = Ra;
function Pa(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = et(e), r = g.useRef(!1), o = g.useRef(() => {
  });
  return g.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Eo(
            Sa,
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
function Ma(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = et(e), r = g.useRef(!1);
  return g.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Eo(_a, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Mr() {
  const e = new CustomEvent(vn);
  document.dispatchEvent(e);
}
function Eo(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? wa(o, i) : o.dispatchEvent(i);
}
var en = 0;
function Po() {
  g.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ar()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ar()), en++, () => {
      en === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), en--;
    };
  }, []);
}
function Ar() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var tn = "focusScope.autoFocusOnMount", nn = "focusScope.autoFocusOnUnmount", Nr = { bubbles: !1, cancelable: !0 }, Aa = "FocusScope", On = g.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, l] = g.useState(null), c = et(o), u = et(i), p = g.useRef(null), d = he(t, (m) => l(m)), f = g.useRef({
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
        a.contains(C) ? p.current = C : $e(p.current, { select: !0 });
      }, x = function(y) {
        if (f.paused || !a) return;
        const C = y.relatedTarget;
        C !== null && (a.contains(C) || $e(p.current, { select: !0 }));
      }, v = function(y) {
        if (document.activeElement === document.body)
          for (const S of y)
            S.removedNodes.length > 0 && $e(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", x);
      const w = new MutationObserver(v);
      return a && w.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", x), w.disconnect();
      };
    }
  }, [r, a, f.paused]), g.useEffect(() => {
    if (a) {
      $r.add(f);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const v = new CustomEvent(tn, Nr);
        a.addEventListener(tn, c), a.dispatchEvent(v), v.defaultPrevented || (Na(ka(Mo(a)), { select: !0 }), document.activeElement === m && $e(a));
      }
      return () => {
        a.removeEventListener(tn, c), setTimeout(() => {
          const v = new CustomEvent(nn, Nr);
          a.addEventListener(nn, u), a.dispatchEvent(v), v.defaultPrevented || $e(m ?? document.body, { select: !0 }), a.removeEventListener(nn, u), $r.remove(f);
        }, 0);
      };
    }
  }, [a, c, u, f]);
  const b = g.useCallback(
    (m) => {
      if (!n && !r || f.paused) return;
      const x = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, v = document.activeElement;
      if (x && v) {
        const w = m.currentTarget, [y, C] = Fa(w);
        y && C ? !m.shiftKey && v === C ? (m.preventDefault(), n && $e(y, { select: !0 })) : m.shiftKey && v === y && (m.preventDefault(), n && $e(C, { select: !0 })) : v === w && m.preventDefault();
      }
    },
    [n, r, f.paused]
  );
  return /* @__PURE__ */ h(re.div, { tabIndex: -1, ...s, ref: d, onKeyDown: b });
});
On.displayName = Aa;
function Na(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ($e(r, { select: t }), document.activeElement !== n) return;
}
function Fa(e) {
  const t = Mo(e), n = Fr(t, e), r = Fr(t.reverse(), e);
  return [n, r];
}
function Mo(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Fr(e, t) {
  for (const n of e)
    if (!$a(n, { upTo: t })) return n;
}
function $a(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ia(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function $e(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ia(e) && t && e.select();
  }
}
var $r = Oa();
function Oa() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ir(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ir(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Ir(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ka(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Oe = globalThis != null && globalThis.document ? g.useLayoutEffect : () => {
}, Da = g[" useId ".trim().toString()] || (() => {
}), Va = 0;
function $t(e) {
  const [t, n] = g.useState(Da());
  return Oe(() => {
    n((r) => r ?? String(Va++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const La = ["top", "right", "bottom", "left"], ke = Math.min, ie = Math.max, Dt = Math.round, St = Math.floor, we = (e) => ({
  x: e,
  y: e
}), Ta = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, za = {
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
function ot(e) {
  return e.split("-")[1];
}
function kn(e) {
  return e === "x" ? "y" : "x";
}
function Dn(e) {
  return e === "y" ? "height" : "width";
}
const Ba = /* @__PURE__ */ new Set(["top", "bottom"]);
function xe(e) {
  return Ba.has(Ae(e)) ? "y" : "x";
}
function Vn(e) {
  return kn(xe(e));
}
function Ha(e, t, n) {
  n === void 0 && (n = !1);
  const r = ot(e), o = Vn(e), i = Dn(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Vt(s)), [s, Vt(s)];
}
function Ga(e) {
  const t = Vt(e);
  return [wn(e), t, wn(t)];
}
function wn(e) {
  return e.replace(/start|end/g, (t) => za[t]);
}
const Or = ["left", "right"], kr = ["right", "left"], ja = ["top", "bottom"], Wa = ["bottom", "top"];
function Ua(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? kr : Or : t ? Or : kr;
    case "left":
    case "right":
      return t ? ja : Wa;
    default:
      return [];
  }
}
function qa(e, t, n, r) {
  const o = ot(e);
  let i = Ua(Ae(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(wn)))), i;
}
function Vt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ta[t]);
}
function Za(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ao(e) {
  return typeof e != "number" ? Za(e) : {
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
function Dr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = xe(t), s = Vn(t), a = Dn(s), l = Ae(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
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
  switch (ot(t)) {
    case "start":
      f[s] -= d * (n && c ? -1 : 1);
      break;
    case "end":
      f[s] += d * (n && c ? -1 : 1);
      break;
  }
  return f;
}
const Xa = async (e, t, n) => {
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
  } = Dr(c, r, l), d = r, f = {}, b = 0;
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
    } = Dr(c, d, l)), m = -1);
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
  } = Me(t, e), b = Ao(f), x = a[d ? p === "floating" ? "reference" : "floating" : p], v = Lt(await i.getClippingRect({
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
const Ya = (e) => ({
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
    const p = Ao(u), d = {
      x: n,
      y: r
    }, f = Vn(o), b = Dn(f), m = await s.getDimensions(c), x = f === "y", v = x ? "top" : "left", w = x ? "bottom" : "right", y = x ? "clientHeight" : "clientWidth", C = i.reference[b] + i.reference[f] - d[f] - i.floating[b], S = d[f] - i.reference[f], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let R = E ? E[y] : 0;
    (!R || !await (s.isElement == null ? void 0 : s.isElement(E))) && (R = a.floating[y] || i.floating[b]);
    const _ = C / 2 - S / 2, k = R / 2 - m[b] / 2 - 1, O = ke(p[v], k), L = ke(p[w], k), P = O, B = R - m[b] - L, D = R / 2 - m[b] / 2 + _, U = xn(P, D, B), T = !l.arrow && ot(o) != null && D !== U && i.reference[b] / 2 - (D < P ? O : L) - m[b] / 2 < 0, H = T ? D < P ? D - P : D - B : 0;
    return {
      [f]: d[f] + H,
      data: {
        [f]: U,
        centerOffset: D - U - H,
        ...T && {
          alignmentOffset: H
        }
      },
      reset: T
    };
  }
}), Ka = function(e) {
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
      const v = Ae(o), w = xe(a), y = Ae(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = d || (y || !m ? [Vt(a)] : Ga(a)), E = b !== "none";
      !d && E && S.push(...qa(a, m, b, C));
      const R = [a, ...S], _ = await ht(t, x), k = [];
      let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && k.push(_[v]), p) {
        const D = Ha(o, s, C);
        k.push(_[D[0]], _[D[1]]);
      }
      if (O = [...O, {
        placement: o,
        overflows: k
      }], !k.every((D) => D <= 0)) {
        var L, P;
        const D = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, U = R[D];
        if (U && (!(p === "alignment" ? w !== xe(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        O.every((N) => N.overflows[0] > 0 && xe(N.placement) === w)))
          return {
            data: {
              index: D,
              overflows: O
            },
            reset: {
              placement: U
            }
          };
        let T = (P = O.filter((H) => H.overflows[0] <= 0).sort((H, N) => H.overflows[1] - N.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!T)
          switch (f) {
            case "bestFit": {
              var B;
              const H = (B = O.filter((N) => {
                if (E) {
                  const z = xe(N.placement);
                  return z === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((z) => z > 0).reduce((z, Z) => z + Z, 0)]).sort((N, z) => N[1] - z[1])[0]) == null ? void 0 : B[0];
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
function Vr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Lr(e) {
  return La.some((t) => e[t] >= 0);
}
const Qa = function(e) {
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
          }), s = Vr(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Lr(s)
            }
          };
        }
        case "escaped": {
          const i = await ht(t, {
            ...o,
            altBoundary: !0
          }), s = Vr(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Lr(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, No = /* @__PURE__ */ new Set(["left", "top"]);
async function Ja(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Ae(n), a = ot(n), l = xe(n) === "y", c = No.has(s) ? -1 : 1, u = i && l ? -1 : 1, p = Me(t, e);
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
const el = function(e) {
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
      } = t, l = await Ja(t, e);
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
}, tl = function(e) {
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
}, nl = function(e) {
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
        const y = d === "y" ? "width" : "height", C = No.has(Ae(o)), S = i.reference[p] - i.floating[y] + (C && ((v = s.offset) == null ? void 0 : v[p]) || 0) + (C ? 0 : x.crossAxis), E = i.reference[p] + i.reference[y] + (C ? 0 : ((w = s.offset) == null ? void 0 : w[p]) || 0) - (C ? x.crossAxis : 0);
        b < S ? b = S : b > E && (b = E);
      }
      return {
        [d]: f,
        [p]: b
      };
    }
  };
}, rl = function(e) {
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
      } = Me(e, t), u = await ht(t, c), p = Ae(o), d = ot(o), f = xe(o) === "y", {
        width: b,
        height: m
      } = i.floating;
      let x, v;
      p === "top" || p === "bottom" ? (x = p, v = d === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = p, x = d === "end" ? "top" : "bottom");
      const w = m - u.top - u.bottom, y = b - u.left - u.right, C = ke(m - u[x], w), S = ke(b - u[v], y), E = !t.middlewareData.shift;
      let R = C, _ = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (_ = y), (r = t.middlewareData.shift) != null && r.enabled.y && (R = w), E && !d) {
        const O = ie(u.left, 0), L = ie(u.right, 0), P = ie(u.top, 0), B = ie(u.bottom, 0);
        f ? _ = b - 2 * (O !== 0 || L !== 0 ? O + L : ie(u.left, u.right)) : R = m - 2 * (P !== 0 || B !== 0 ? P + B : ie(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: _,
        availableHeight: R
      });
      const k = await s.getDimensions(a.floating);
      return b !== k.width || m !== k.height ? {
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
function it(e) {
  return Fo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ae(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ce(e) {
  var t;
  return (t = (Fo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Fo(e) {
  return Gt() ? e instanceof Node || e instanceof ae(e).Node : !1;
}
function pe(e) {
  return Gt() ? e instanceof Element || e instanceof ae(e).Element : !1;
}
function ye(e) {
  return Gt() ? e instanceof HTMLElement || e instanceof ae(e).HTMLElement : !1;
}
function Tr(e) {
  return !Gt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ae(e).ShadowRoot;
}
const ol = /* @__PURE__ */ new Set(["inline", "contents"]);
function vt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = me(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ol.has(o);
}
const il = /* @__PURE__ */ new Set(["table", "td", "th"]);
function sl(e) {
  return il.has(it(e));
}
const al = [":popover-open", ":modal"];
function jt(e) {
  return al.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const ll = ["transform", "translate", "scale", "rotate", "perspective"], cl = ["transform", "translate", "scale", "rotate", "perspective", "filter"], ul = ["paint", "layout", "strict", "content"];
function Ln(e) {
  const t = Tn(), n = pe(e) ? me(e) : e;
  return ll.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || cl.some((r) => (n.willChange || "").includes(r)) || ul.some((r) => (n.contain || "").includes(r));
}
function dl(e) {
  let t = De(e);
  for (; ye(t) && !tt(t); ) {
    if (Ln(t))
      return t;
    if (jt(t))
      return null;
    t = De(t);
  }
  return null;
}
function Tn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const fl = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function tt(e) {
  return fl.has(it(e));
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
function De(e) {
  if (it(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Tr(e) && e.host || // Fallback.
    Ce(e)
  );
  return Tr(t) ? t.host : t;
}
function $o(e) {
  const t = De(e);
  return tt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ye(t) && vt(t) ? t : $o(t);
}
function bt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = $o(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ae(o);
  if (i) {
    const a = yn(s);
    return t.concat(s, s.visualViewport || [], vt(o) ? o : [], a && n ? bt(a) : []);
  }
  return t.concat(o, bt(o, [], n));
}
function yn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Io(e) {
  const t = me(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ye(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Dt(n) !== i || Dt(r) !== s;
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
  } = Io(t);
  let s = (i ? Dt(n.width) : n.width) / r, a = (i ? Dt(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const gl = /* @__PURE__ */ we(0);
function Oo(e) {
  const t = ae(e);
  return !Tn() || !t.visualViewport ? gl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function pl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ae(e) ? !1 : t;
}
function ze(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = zn(e);
  let s = we(1);
  t && (r ? pe(r) && (s = Ke(r)) : s = Ke(e));
  const a = pl(i, n, r) ? Oo(i) : we(0);
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
function ko(e, t, n) {
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
function ml(e) {
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
  if ((p || !p && !i) && ((it(r) !== "body" || vt(s)) && (l = Wt(r)), ye(r))) {
    const f = ze(r);
    c = Ke(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  const d = s && !p && !i ? ko(s, l, !0) : we(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + d.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + d.y
  };
}
function hl(e) {
  return Array.from(e.getClientRects());
}
function bl(e) {
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
function vl(e, t) {
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
const xl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function wl(e, t) {
  const n = ze(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ye(e) ? Ke(e) : we(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function zr(e, t, n) {
  let r;
  if (t === "viewport")
    r = vl(e, n);
  else if (t === "document")
    r = bl(Ce(e));
  else if (pe(t))
    r = wl(t, n);
  else {
    const o = Oo(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Lt(r);
}
function Do(e, t) {
  const n = De(e);
  return n === t || !pe(n) || tt(n) ? !1 : me(n).position === "fixed" || Do(n, t);
}
function yl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = bt(e, [], !1).filter((a) => pe(a) && it(a) !== "body"), o = null;
  const i = me(e).position === "fixed";
  let s = i ? De(e) : e;
  for (; pe(s) && !tt(s); ) {
    const a = me(s), l = Ln(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && xl.has(o.position) || vt(s) && !l && Do(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = De(s);
  }
  return t.set(e, r), r;
}
function Cl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? jt(t) ? [] : yl(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, u) => {
    const p = zr(t, u, o);
    return c.top = ie(p.top, c.top), c.right = ke(p.right, c.right), c.bottom = ke(p.bottom, c.bottom), c.left = ie(p.left, c.left), c;
  }, zr(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Sl(e) {
  const {
    width: t,
    height: n
  } = Io(e);
  return {
    width: t,
    height: n
  };
}
function _l(e, t, n) {
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
    if ((it(t) !== "body" || vt(o)) && (a = Wt(t)), r) {
      const f = ze(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const u = o && !r && !i ? ko(o, a) : we(0), p = s.left + a.scrollLeft - l.x - u.x, d = s.top + a.scrollTop - l.y - u.y;
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
function Br(e, t) {
  if (!ye(e) || me(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ce(e) === n && (n = n.ownerDocument.body), n;
}
function Vo(e, t) {
  const n = ae(e);
  if (jt(e))
    return n;
  if (!ye(e)) {
    let o = De(e);
    for (; o && !tt(o); ) {
      if (pe(o) && !rn(o))
        return o;
      o = De(o);
    }
    return n;
  }
  let r = Br(e, t);
  for (; r && sl(r) && rn(r); )
    r = Br(r, t);
  return r && tt(r) && rn(r) && !Ln(r) ? n : r || dl(e) || n;
}
const Rl = async function(e) {
  const t = this.getOffsetParent || Vo, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: _l(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function El(e) {
  return me(e).direction === "rtl";
}
const Pl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ml,
  getDocumentElement: Ce,
  getClippingRect: Cl,
  getOffsetParent: Vo,
  getElementRects: Rl,
  getClientRects: hl,
  getDimensions: Sl,
  getScale: Ke,
  isElement: pe,
  isRTL: El
};
function Lo(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ml(e, t) {
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
      R === 1 && !Lo(c, e.getBoundingClientRect()) && s(), C = !1;
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
function Al(e, t, n, r) {
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
  const p = c && a ? Ml(c, n) : null;
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
    m && !Lo(m, v) && n(), m = v, b = requestAnimationFrame(x);
  }
  return n(), () => {
    var v;
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), p == null || p(), (v = f) == null || v.disconnect(), f = null, l && cancelAnimationFrame(b);
  };
}
const Nl = el, Fl = tl, $l = Ka, Il = rl, Ol = Qa, Hr = Ya, kl = nl, Dl = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Pl,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Xa(e, t, {
    ...o,
    platform: i
  });
};
var Vl = typeof document < "u", Ll = function() {
}, It = Vl ? hs : Ll;
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
function To(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Gr(e, t) {
  const n = To(e);
  return Math.round(t * n) / n;
}
function on(e) {
  const t = g.useRef(e);
  return It(() => {
    t.current = e;
  }), t;
}
function Tl(e) {
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
  const [b, m] = g.useState(null), [x, v] = g.useState(null), w = g.useCallback((N) => {
    N !== E.current && (E.current = N, m(N));
  }, []), y = g.useCallback((N) => {
    N !== R.current && (R.current = N, v(N));
  }, []), C = i || b, S = s || x, E = g.useRef(null), R = g.useRef(null), _ = g.useRef(u), k = l != null, O = on(l), L = on(o), P = on(c), B = g.useCallback(() => {
    if (!E.current || !R.current)
      return;
    const N = {
      placement: t,
      strategy: n,
      middleware: d
    };
    L.current && (N.platform = L.current), Dl(E.current, R.current, N).then((z) => {
      const Z = {
        ...z,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: P.current !== !1
      };
      D.current && !Tt(_.current, Z) && (_.current = Z, ro.flushSync(() => {
        p(Z);
      }));
    });
  }, [d, t, n, L, P]);
  It(() => {
    c === !1 && _.current.isPositioned && (_.current.isPositioned = !1, p((N) => ({
      ...N,
      isPositioned: !1
    })));
  }, [c]);
  const D = g.useRef(!1);
  It(() => (D.current = !0, () => {
    D.current = !1;
  }), []), It(() => {
    if (C && (E.current = C), S && (R.current = S), C && S) {
      if (O.current)
        return O.current(C, S, B);
      B();
    }
  }, [C, S, B, O, k]);
  const U = g.useMemo(() => ({
    reference: E,
    floating: R,
    setReference: w,
    setFloating: y
  }), [w, y]), T = g.useMemo(() => ({
    reference: C,
    floating: S
  }), [C, S]), H = g.useMemo(() => {
    const N = {
      position: n,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return N;
    const z = Gr(T.floating, u.x), Z = Gr(T.floating, u.y);
    return a ? {
      ...N,
      transform: "translate(" + z + "px, " + Z + "px)",
      ...To(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: z,
      top: Z
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
const zl = (e) => {
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
      return r && t(r) ? r.current != null ? Hr({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Hr({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Bl = (e, t) => ({
  ...Nl(e),
  options: [e, t]
}), Hl = (e, t) => ({
  ...Fl(e),
  options: [e, t]
}), Gl = (e, t) => ({
  ...kl(e),
  options: [e, t]
}), jl = (e, t) => ({
  ...$l(e),
  options: [e, t]
}), Wl = (e, t) => ({
  ...Il(e),
  options: [e, t]
}), Ul = (e, t) => ({
  ...Ol(e),
  options: [e, t]
}), ql = (e, t) => ({
  ...zl(e),
  options: [e, t]
});
var Zl = "Arrow", zo = g.forwardRef((e, t) => {
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
zo.displayName = Zl;
var Xl = zo;
function Yl(e) {
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
var Hn = "Popper", [Bo, Ho] = $n(Hn), [Kl, Go] = Bo(Hn), jo = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = g.useState(null);
  return /* @__PURE__ */ h(Kl, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
jo.displayName = Hn;
var Wo = "PopperAnchor", Uo = g.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = Go(Wo, n), s = g.useRef(null), a = he(t, s);
    return g.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
    }), r ? null : /* @__PURE__ */ h(re.div, { ...o, ref: a });
  }
);
Uo.displayName = Wo;
var Gn = "PopperContent", [Ql, Jl] = Bo(Gn), qo = g.forwardRef(
  (e, t) => {
    var te, q, Se, He, Te, Ge;
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
    } = e, x = Go(Gn, n), [v, w] = g.useState(null), y = he(t, (de) => w(de)), [C, S] = g.useState(null), E = Yl(C), R = (E == null ? void 0 : E.width) ?? 0, _ = (E == null ? void 0 : E.height) ?? 0, k = r + (i !== "center" ? "-" + i : ""), O = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, L = Array.isArray(c) ? c : [c], P = L.length > 0, B = {
      padding: O,
      boundary: L.filter(tc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: P
    }, { refs: D, floatingStyles: U, placement: T, isPositioned: H, middlewareData: N } = Tl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: k,
      whileElementsMounted: (...de) => Al(...de, {
        animationFrame: f === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        Bl({ mainAxis: o + _, alignmentAxis: s }),
        l && Hl({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? Gl() : void 0,
          ...B
        }),
        l && jl({ ...B }),
        Wl({
          ...B,
          apply: ({ elements: de, rects: _e, availableWidth: rr, availableHeight: at }) => {
            const { width: lt, height: Yt } = _e.reference, je = de.floating.style;
            je.setProperty("--radix-popper-available-width", `${rr}px`), je.setProperty("--radix-popper-available-height", `${at}px`), je.setProperty("--radix-popper-anchor-width", `${lt}px`), je.setProperty("--radix-popper-anchor-height", `${Yt}px`);
          }
        }),
        C && ql({ element: C, padding: a }),
        nc({ arrowWidth: R, arrowHeight: _ }),
        d && Ul({ strategy: "referenceHidden", ...B })
      ]
    }), [z, Z] = Yo(T), A = et(b);
    Oe(() => {
      H && (A == null || A());
    }, [H, A]);
    const j = (te = N.arrow) == null ? void 0 : te.x, Y = (q = N.arrow) == null ? void 0 : q.y, Q = ((Se = N.arrow) == null ? void 0 : Se.centerOffset) !== 0, [ce, oe] = g.useState();
    return Oe(() => {
      v && oe(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ h(
      "div",
      {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: H ? U.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ce,
          "--radix-popper-transform-origin": [
            (He = N.transformOrigin) == null ? void 0 : He.x,
            (Te = N.transformOrigin) == null ? void 0 : Te.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Ge = N.hide) == null ? void 0 : Ge.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ h(
          Ql,
          {
            scope: n,
            placedSide: z,
            onArrowChange: S,
            arrowX: j,
            arrowY: Y,
            shouldHideArrow: Q,
            children: /* @__PURE__ */ h(
              re.div,
              {
                "data-side": z,
                "data-align": Z,
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
qo.displayName = Gn;
var Zo = "PopperArrow", ec = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Xo = g.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = Jl(Zo, r), s = ec[i.placedSide];
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
          Xl,
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
Xo.displayName = Zo;
function tc(e) {
  return e !== null;
}
var nc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, v, w;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, u] = Yo(n), p = { start: "0%", center: "50%", end: "100%" }[u], d = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2, f = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
    let b = "", m = "";
    return c === "bottom" ? (b = s ? p : `${d}px`, m = `${-l}px`) : c === "top" ? (b = s ? p : `${d}px`, m = `${r.floating.height + l}px`) : c === "right" ? (b = `${-l}px`, m = s ? p : `${f}px`) : c === "left" && (b = `${r.floating.width + l}px`, m = s ? p : `${f}px`), { data: { x: b, y: m } };
  }
});
function Yo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var rc = jo, Ko = Uo, oc = qo, ic = Xo, sc = "Portal", jn = g.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, i] = g.useState(!1);
  Oe(() => i(!0), []);
  const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? vs.createPortal(/* @__PURE__ */ h(re.div, { ...r, ref: t }), s) : null;
});
jn.displayName = sc;
function ac(e, t) {
  return g.useReducer((n, r) => t[n][r] ?? n, e);
}
var st = (e) => {
  const { present: t, children: n } = e, r = lc(t), o = typeof n == "function" ? n({ present: r.isPresent }) : g.Children.only(n), i = he(r.ref, cc(o));
  return typeof n == "function" || r.isPresent ? g.cloneElement(o, { ref: i }) : null;
};
st.displayName = "Presence";
function lc(e) {
  const [t, n] = g.useState(), r = g.useRef(null), o = g.useRef(e), i = g.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = ac(s, {
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
function cc(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var uc = g[" useInsertionEffect ".trim().toString()] || Oe;
function Qo({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = dc({
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
        const d = fc(u) ? u(e) : u;
        d !== e && ((p = s.current) == null || p.call(s, d));
      } else
        i(u);
    },
    [a, e, i, s]
  );
  return [l, c];
}
function dc({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = g.useState(e), o = g.useRef(n), i = g.useRef(t);
  return uc(() => {
    i.current = t;
  }, [t]), g.useEffect(() => {
    var s;
    o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function fc(e) {
  return typeof e == "function";
}
var gc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, We = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), Et = {}, sn = 0, Jo = function(e) {
  return e && (e.host || Jo(e.parentNode));
}, pc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Jo(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, mc = function(e, t, n, r) {
  var o = pc(t, Array.isArray(e) ? e : [e]);
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
}, ei = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = gc(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), mc(r, o, n, "aria-hidden")) : function() {
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
function ti(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function hc(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ot = "right-scroll-bar-position", kt = "width-before-scroll-bar", bc = "with-scroll-bars-hidden", vc = "--removed-body-scroll-bar-size";
function an(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function xc(e, t) {
  var n = bs(function() {
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
var wc = typeof window < "u" ? g.useLayoutEffect : g.useEffect, jr = /* @__PURE__ */ new WeakMap();
function yc(e, t) {
  var n = xc(null, function(r) {
    return e.forEach(function(o) {
      return an(o, r);
    });
  });
  return wc(function() {
    var r = jr.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || an(a, null);
      }), i.forEach(function(a) {
        o.has(a) || an(a, s);
      });
    }
    jr.set(n, e);
  }, [e]), n;
}
function Cc(e) {
  return e;
}
function Sc(e, t) {
  t === void 0 && (t = Cc);
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
function _c(e) {
  e === void 0 && (e = {});
  var t = Sc(null);
  return t.options = ve({ async: !0, ssr: !1 }, e), t;
}
var ni = function(e) {
  var t = e.sideCar, n = ti(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return g.createElement(r, ve({}, n));
};
ni.isSideCarExport = !0;
function Rc(e, t) {
  return e.useMedium(t), ni;
}
var ri = _c(), ln = function() {
}, Ut = g.forwardRef(function(e, t) {
  var n = g.useRef(null), r = g.useState({
    onScrollCapture: ln,
    onWheelCapture: ln,
    onTouchMoveCapture: ln
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, p = e.shards, d = e.sideCar, f = e.noRelative, b = e.noIsolation, m = e.inert, x = e.allowPinchZoom, v = e.as, w = v === void 0 ? "div" : v, y = e.gapMode, C = ti(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = d, E = yc([n, t]), R = ve(ve({}, C), o);
  return g.createElement(
    g.Fragment,
    null,
    u && g.createElement(S, { sideCar: ri, removeScrollBar: c, shards: p, noRelative: f, noIsolation: b, inert: m, setCallbacks: i, allowPinchZoom: !!x, lockRef: n, gapMode: y }),
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
var Ec = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Pc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ec();
  return t && e.setAttribute("nonce", t), e;
}
function Mc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ac(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Nc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Pc()) && (Mc(t, n), Ac(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Fc = function() {
  var e = Nc();
  return function(t, n) {
    g.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, oi = function() {
  var e = Fc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, $c = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, cn = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ic = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [cn(n), cn(r), cn(o)];
}, Oc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return $c;
  var t = Ic(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, kc = oi(), Qe = "data-scroll-locked", Dc = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(bc, ` {
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
    `).concat(vc, ": ").concat(a, `px;
  }
`);
}, Wr = function() {
  var e = parseInt(document.body.getAttribute(Qe) || "0", 10);
  return isFinite(e) ? e : 0;
}, Vc = function() {
  g.useEffect(function() {
    return document.body.setAttribute(Qe, (Wr() + 1).toString()), function() {
      var e = Wr() - 1;
      e <= 0 ? document.body.removeAttribute(Qe) : document.body.setAttribute(Qe, e.toString());
    };
  }, []);
}, Lc = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Vc();
  var i = g.useMemo(function() {
    return Oc(o);
  }, [o]);
  return g.createElement(kc, { styles: Dc(i, !t, o, n ? "" : "!important") });
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
var Ue = Cn ? { passive: !1 } : !1, Tc = function(e) {
  return e.tagName === "TEXTAREA";
}, ii = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Tc(e) && n[t] === "visible")
  );
}, zc = function(e) {
  return ii(e, "overflowY");
}, Bc = function(e) {
  return ii(e, "overflowX");
}, Ur = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = si(e, r);
    if (o) {
      var i = ai(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Hc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Gc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, si = function(e, t) {
  return e === "v" ? zc(t) : Bc(t);
}, ai = function(e, t) {
  return e === "v" ? Hc(t) : Gc(t);
}, jc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Wc = function(e, t, n, r, o) {
  var i = jc(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, l = t.contains(a), c = !1, u = s > 0, p = 0, d = 0;
  do {
    if (!a)
      break;
    var f = ai(e, a), b = f[0], m = f[1], x = f[2], v = m - x - i * b;
    (b || v) && si(e, a) && (p += v, d += b);
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
}, qr = function(e) {
  return [e.deltaX, e.deltaY];
}, Zr = function(e) {
  return e && "current" in e ? e.current : e;
}, Uc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, qc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Zc = 0, qe = [];
function Xc(e) {
  var t = g.useRef([]), n = g.useRef([0, 0]), r = g.useRef(), o = g.useState(Zc++)[0], i = g.useState(oi)[0], s = g.useRef(e);
  g.useEffect(function() {
    s.current = e;
  }, [e]), g.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = hc([e.lockRef.current], (e.shards || []).map(Zr), !0).filter(Boolean);
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
    var _ = Ur(R, E);
    if (!_)
      return !0;
    if (_ ? S = R : (S = R === "v" ? "h" : "v", _ = Ur(R, E)), !_)
      return !1;
    if (!r.current && "changedTouches" in m && (y || C) && (r.current = S), !S)
      return !0;
    var k = r.current || S;
    return Wc(k, x, m, k === "h" ? y : C);
  }, []), l = g.useCallback(function(m) {
    var x = m;
    if (!(!qe.length || qe[qe.length - 1] !== i)) {
      var v = "deltaY" in x ? qr(x) : Mt(x), w = t.current.filter(function(S) {
        return S.name === x.type && (S.target === x.target || x.target === S.shadowParent) && Uc(S.delta, v);
      })[0];
      if (w && w.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!w) {
        var y = (s.current.shards || []).map(Zr).filter(Boolean).filter(function(S) {
          return S.contains(x.target);
        }), C = y.length > 0 ? a(x, y[0]) : !s.current.noIsolation;
        C && x.cancelable && x.preventDefault();
      }
    }
  }, []), c = g.useCallback(function(m, x, v, w) {
    var y = { name: m, delta: x, target: v, should: w, shadowParent: Yc(v) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), u = g.useCallback(function(m) {
    n.current = Mt(m), r.current = void 0;
  }, []), p = g.useCallback(function(m) {
    c(m.type, qr(m), m.target, a(m, e.lockRef.current));
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
    b ? g.createElement(i, { styles: qc(o) }) : null,
    f ? g.createElement(Lc, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Yc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Kc = Rc(ri, Xc);
var Wn = g.forwardRef(function(e, t) {
  return g.createElement(Ut, ve({}, e, { ref: t, sideCar: Kc }));
});
Wn.classNames = Ut.classNames;
var qt = "Popover", [li, sf] = $n(qt, [
  Ho
]), xt = Ho(), [Qc, Le] = li(qt), ci = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !1
  } = e, a = xt(t), l = g.useRef(null), [c, u] = g.useState(!1), [p, d] = Qo({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: qt
  });
  return /* @__PURE__ */ h(rc, { ...a, children: /* @__PURE__ */ h(
    Qc,
    {
      scope: t,
      contentId: $t(),
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
ci.displayName = qt;
var ui = "PopoverAnchor", Jc = g.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Le(ui, n), i = xt(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = o;
    return g.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ h(Ko, { ...i, ...r, ref: t });
  }
);
Jc.displayName = ui;
var di = "PopoverTrigger", fi = g.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Le(di, n), i = xt(n), s = he(t, o.triggerRef), a = /* @__PURE__ */ h(
      re.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": bi(o.open),
        ...r,
        ref: s,
        onClick: se(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ h(Ko, { asChild: !0, ...i, children: a });
  }
);
fi.displayName = di;
var Un = "PopoverPortal", [eu, tu] = li(Un, {
  forceMount: void 0
}), gi = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = Le(Un, t);
  return /* @__PURE__ */ h(eu, { scope: t, forceMount: n, children: /* @__PURE__ */ h(st, { present: n || i.open, children: /* @__PURE__ */ h(jn, { asChild: !0, container: o, children: r }) }) });
};
gi.displayName = Un;
var nt = "PopoverContent", pi = g.forwardRef(
  (e, t) => {
    const n = tu(nt, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Le(nt, e.__scopePopover);
    return /* @__PURE__ */ h(st, { present: r || i.open, children: i.modal ? /* @__PURE__ */ h(ru, { ...o, ref: t }) : /* @__PURE__ */ h(ou, { ...o, ref: t }) });
  }
);
pi.displayName = nt;
var nu = /* @__PURE__ */ Ht("PopoverContent.RemoveScroll"), ru = g.forwardRef(
  (e, t) => {
    const n = Le(nt, e.__scopePopover), r = g.useRef(null), o = he(t, r), i = g.useRef(!1);
    return g.useEffect(() => {
      const s = r.current;
      if (s) return ei(s);
    }, []), /* @__PURE__ */ h(Wn, { as: nu, allowPinchZoom: !0, children: /* @__PURE__ */ h(
      mi,
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
), ou = g.forwardRef(
  (e, t) => {
    const n = Le(nt, e.__scopePopover), r = g.useRef(!1), o = g.useRef(!1);
    return /* @__PURE__ */ h(
      mi,
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
), mi = g.forwardRef(
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
    } = e, d = Le(nt, n), f = xt(n);
    return Po(), /* @__PURE__ */ h(
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
              oc,
              {
                "data-state": bi(d.open),
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
), hi = "PopoverClose", iu = g.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Le(hi, n);
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
iu.displayName = hi;
var su = "PopoverArrow", au = g.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = xt(n);
    return /* @__PURE__ */ h(ic, { ...o, ...r, ref: t });
  }
);
au.displayName = su;
function bi(e) {
  return e ? "open" : "closed";
}
var lu = ci, cu = fi, uu = gi, du = pi;
const fu = W(
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
), gu = (e) => {
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
}, pu = (e) => {
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
    const R = (D) => {
      D || x("click-outside");
    }, _ = () => {
      x("escape");
    }, k = (D) => {
      w || x("click-outside");
    }, O = F(
      fu({
        sectioned: c,
        fullWidth: u,
        fullHeight: p,
        fluidContent: d,
        hideOnPrint: m
      }),
      C
    ), L = gu(t), P = pu(n);
    return /* @__PURE__ */ M(lu, { open: r, onOpenChange: R, children: [
      /* @__PURE__ */ h(cu, { asChild: !0, children: /* @__PURE__ */ h(s, { children: o }) }),
      /* @__PURE__ */ h(uu, { children: /* @__PURE__ */ h(
        du,
        {
          ref: E,
          side: L,
          align: P,
          className: O,
          style: { zIndex: a },
          onEscapeKeyDown: _,
          onInteractOutside: k,
          ...S,
          children: c ? /* @__PURE__ */ h("div", { className: "p-4", children: e }) : e
        }
      ) })
    ] });
  }
);
qn.displayName = "Popover";
const mu = W("space-y-1", {
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
}), hu = W(
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
), vi = g.forwardRef(
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
    }, x = F(
      mu({
        tone: c === "magic" ? "magic" : "default",
        disabled: a
      }),
      u
    );
    return /* @__PURE__ */ M(
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
            return /* @__PURE__ */ M(
              "label",
              {
                htmlFor: C,
                className: F(
                  hu({
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
                  /* @__PURE__ */ M("div", { className: "flex-1 min-w-0", children: [
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
          /* @__PURE__ */ h(ee, { variant: "plain", onClick: m, disabled: a, children: "Clear" }),
          s && /* @__PURE__ */ h(ue, { variant: "bodySm", tone: "critical", as: "p", className: "mt-2", children: s })
        ]
      }
    );
  }
);
vi.displayName = "ChoiceList";
const bu = (e) => e && {
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
}[e] || "bg-white", vu = W(
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
), xu = (e) => {
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
}, wu = g.forwardRef(
  ({
    children: e,
    background: t = "bg-surface",
    padding: n,
    roundedAbove: r = "sm",
    className: o,
    ...i
  }, s) => {
    const a = F(
      vu({
        roundedAbove: r
      }),
      bu(t),
      xu(n),
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
wu.displayName = "Card";
var Zt = "Dialog", [xi, af] = $n(Zt), [yu, be] = xi(Zt), wi = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, a = g.useRef(null), l = g.useRef(null), [c, u] = Qo({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Zt
  });
  return /* @__PURE__ */ h(
    yu,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: $t(),
      titleId: $t(),
      descriptionId: $t(),
      open: c,
      onOpenChange: u,
      onOpenToggle: g.useCallback(() => u((p) => !p), [u]),
      modal: s,
      children: n
    }
  );
};
wi.displayName = Zt;
var yi = "DialogTrigger", Cu = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = be(yi, n), i = he(t, o.triggerRef);
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
Cu.displayName = yi;
var Zn = "DialogPortal", [Su, Ci] = xi(Zn, {
  forceMount: void 0
}), Si = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = be(Zn, t);
  return /* @__PURE__ */ h(Su, { scope: t, forceMount: n, children: g.Children.map(r, (s) => /* @__PURE__ */ h(st, { present: n || i.open, children: /* @__PURE__ */ h(jn, { asChild: !0, container: o, children: s }) })) });
};
Si.displayName = Zn;
var zt = "DialogOverlay", _i = g.forwardRef(
  (e, t) => {
    const n = Ci(zt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = be(zt, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ h(st, { present: r || i.open, children: /* @__PURE__ */ h(Ru, { ...o, ref: t }) }) : null;
  }
);
_i.displayName = zt;
var _u = /* @__PURE__ */ Ht("DialogOverlay.RemoveScroll"), Ru = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = be(zt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ h(Wn, { as: _u, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ h(
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
), Be = "DialogContent", Ri = g.forwardRef(
  (e, t) => {
    const n = Ci(Be, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = be(Be, e.__scopeDialog);
    return /* @__PURE__ */ h(st, { present: r || i.open, children: i.modal ? /* @__PURE__ */ h(Eu, { ...o, ref: t }) : /* @__PURE__ */ h(Pu, { ...o, ref: t }) });
  }
);
Ri.displayName = Be;
var Eu = g.forwardRef(
  (e, t) => {
    const n = be(Be, e.__scopeDialog), r = g.useRef(null), o = he(t, n.contentRef, r);
    return g.useEffect(() => {
      const i = r.current;
      if (i) return ei(i);
    }, []), /* @__PURE__ */ h(
      Ei,
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
), Pu = g.forwardRef(
  (e, t) => {
    const n = be(Be, e.__scopeDialog), r = g.useRef(!1), o = g.useRef(!1);
    return /* @__PURE__ */ h(
      Ei,
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
), Ei = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...s } = e, a = be(Be, n), l = g.useRef(null), c = he(t, l);
    return Po(), /* @__PURE__ */ M(Je, { children: [
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
      /* @__PURE__ */ M(Je, { children: [
        /* @__PURE__ */ h(Mu, { titleId: a.titleId }),
        /* @__PURE__ */ h(Nu, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Xn = "DialogTitle", Pi = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = be(Xn, n);
    return /* @__PURE__ */ h(re.h2, { id: o.titleId, ...r, ref: t });
  }
);
Pi.displayName = Xn;
var Mi = "DialogDescription", Ai = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = be(Mi, n);
    return /* @__PURE__ */ h(re.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Ai.displayName = Mi;
var Ni = "DialogClose", Fi = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = be(Ni, n);
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
Fi.displayName = Ni;
function Yn(e) {
  return e ? "open" : "closed";
}
var $i = "DialogTitleWarning", [lf, Ii] = ba($i, {
  contentName: Be,
  titleName: Xn,
  docsSlug: "dialog"
}), Mu = ({ titleId: e }) => {
  const t = Ii($i), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return g.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Au = "DialogDescriptionWarning", Nu = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ii(Au).contentName}}.`;
  return g.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Oi = wi, ki = Si, Kn = _i, Qn = Ri, Di = Pi, Vi = Ai, Fu = Fi;
function $u({
  ...e
}) {
  return /* @__PURE__ */ h(Oi, { "data-slot": "dialog", ...e });
}
function Li({
  ...e
}) {
  return /* @__PURE__ */ h(ki, { "data-slot": "dialog-portal", ...e });
}
function Ti({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ h(
    Kn,
    {
      "data-slot": "dialog-overlay",
      className: F(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Iu({
  className: e,
  children: t,
  showCloseButton: n = !0,
  ...r
}) {
  return /* @__PURE__ */ M(Li, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ h(Ti, {}),
    /* @__PURE__ */ M(
      Qn,
      {
        "data-slot": "dialog-content",
        className: F(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...r,
        children: [
          t,
          n && /* @__PURE__ */ M(
            Fu,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ h(Nn, {}),
                /* @__PURE__ */ h("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
const Ou = W(
  // Base styles for all modals
  "bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid !w-full translate-x-[-50%] translate-y-[-50%] gap-0 rounded-lg border border-gray-200 shadow-lg duration-200 font-inter",
  {
    variants: {
      variant: {
        small: "w-[384px]",
        base: "w-[512px]",
        large: "w-[672px]",
        max: "max-w-[90vw] max-h-[90vh]"
      }
    },
    defaultVariants: {
      variant: "base"
    }
  }
), ku = g.forwardRef(
  ({
    // id,
    children: e,
    src: t,
    variant: n = "base",
    open: r,
    onShow: o,
    onHide: i,
    onOpenChange: s,
    className: a,
    showCloseButton: l = !0,
    actions: c,
    ...u
  }, p) => {
    const d = g.useCallback(
      (b) => {
        b && o ? o() : !b && i && i(), s && s(b);
      },
      [o, i, s]
    ), f = () => t ? /* @__PURE__ */ M("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ h(
        "iframe",
        {
          src: t,
          className: "w-full flex-1 min-h-[400px] border-0",
          title: `Modal content from ${t}`,
          ...u
        }
      ),
      c && /* @__PURE__ */ h("div", { className: "border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-2", children: c })
    ] }) : /* @__PURE__ */ M("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ h("div", { className: "flex-1", children: e }),
      c && /* @__PURE__ */ h("div", { className: "border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-2", children: c })
    ] });
    return /* @__PURE__ */ h($u, { open: r, onOpenChange: d, children: /* @__PURE__ */ M(Li, { children: [
      /* @__PURE__ */ h(Ti, { className: "bg-black/50" }),
      /* @__PURE__ */ h(
        Iu,
        {
          ref: p,
          className: F(
            Ou({ variant: n }),
            "p-0 overflow-hidden",
            // Remove default padding and handle overflow
            a
          ),
          showCloseButton: l,
          ...u,
          children: f()
        }
      )
    ] }) });
  }
);
ku.displayName = "Modal";
const Du = W(
  // Base styles for title bar
  "flex items-center justify-between px-6 py-4 bg-gray-100 font-inter",
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
), Vu = W("text-lg font-semibold text-gray-900 leading-6"), Lu = W("flex items-center gap-2 cursor-pointer"), Tu = g.forwardRef(
  ({ title: e, children: t, className: n, showBorder: r = !0, ...o }, i) => /* @__PURE__ */ M(
    "div",
    {
      ref: i,
      className: F(Du({ showBorder: r }), n),
      ...o,
      children: [
        e && /* @__PURE__ */ h("h2", { className: F(Vu()), children: e }),
        t && /* @__PURE__ */ h("div", { className: F(Lu()), children: t }),
        !e && t && /* @__PURE__ */ h("div", { className: "flex-1" })
      ]
    }
  )
);
Tu.displayName = "TitleBar";
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
}[e] || "", Ze = (e, t = "m") => {
  if (!e) return "";
  if (typeof e == "string") {
    const r = Xr(e);
    return r ? `-m${t}-${r}` : "";
  }
  const n = [];
  return Object.entries(e).forEach(([r, o]) => {
    const i = Xr(o);
    if (i) {
      const s = r === "xs" ? "" : `${r}:`;
      n.push(`${s}-m${t}-${i}`);
    }
  }), n.join(" ");
}, zu = W("", {
  variants: {
    // Base styling variants can be added here if needed
  },
  defaultVariants: {}
}), Bu = g.forwardRef(
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
    const u = F(
      zu(),
      // Negative margins for bleeding effect
      Ze(t, "x"),
      Ze(n, "y"),
      Ze(r, "t"),
      Ze(o, "b"),
      Ze(i, "l"),
      Ze(s, "r"),
      a
    );
    return /* @__PURE__ */ h("div", { ref: c, className: u, ...l, children: e });
  }
);
Bu.displayName = "Bleed";
const Hu = W(
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
), Gu = W(
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
), ju = W("px-6 py-6", {
  variants: {},
  defaultVariants: {}
}), Wu = g.forwardRef(
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
    const S = s ? "full" : a ? "narrow" : "default", E = (_, k = "secondary") => {
      var L;
      const O = "url" in _ && _.url;
      return /* @__PURE__ */ h(
        ee,
        {
          variant: k === "primary" ? "primary" : "secondary",
          onClick: _.onAction,
          url: O ? _.url : void 0,
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
      var _, k;
      return d ? /* @__PURE__ */ M("div", { className: "flex items-center justify-between px-6 py-4 bg-white border-t border-[rgb(227,227,227)]", children: [
        /* @__PURE__ */ h(
          ee,
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
          ee,
          {
            variant: "secondary",
            disabled: !d.hasNext,
            onClick: d.onNext,
            url: d.nextURL,
            icon: /* @__PURE__ */ h(An, {}),
            accessibilityLabel: ((k = d.accessibilityLabels) == null ? void 0 : k.next) || "Next",
            children: "Next"
          }
        )
      ] }) : null;
    };
    return /* @__PURE__ */ M(
      "div",
      {
        ref: C,
        className: F(Hu({ width: S }), w),
        "aria-label": f,
        ...y,
        children: [
          (t || p || l || c.length > 0 || u.length > 0) && /* @__PURE__ */ M("header", { className: F(Gu({ compact: o })), children: [
            p && /* @__PURE__ */ h("div", { className: "mb-4", children: E(p, "secondary") }),
            (t || l || c.length > 0 || u.length > 0) && /* @__PURE__ */ M("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ M("div", { className: "flex-1 min-w-0", children: [
                t && !i && /* @__PURE__ */ M("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ h(ue, { as: "h1", variant: "headingLg", fontWeight: "semibold", children: t }),
                  r && /* @__PURE__ */ h("div", { className: "flex items-center", children: r })
                ] }),
                n && /* @__PURE__ */ h(
                  "div",
                  {
                    className: F(
                      "mt-1",
                      v && "max-w-[640px]"
                    ),
                    children: /* @__PURE__ */ h(ue, { variant: "bodyMd", tone: "subdued", children: n })
                  }
                ),
                m && /* @__PURE__ */ h("div", { className: "mt-2", children: m })
              ] }),
              (l || c.length > 0 || u.length > 0) && /* @__PURE__ */ h("div", { className: "flex items-center gap-2 ml-4", children: /* @__PURE__ */ M(So, { children: [
                c.map(
                  (_) => E(_, "secondary")
                ),
                l && E(l, "primary")
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ h("main", { className: F(ju()), children: e }),
          R()
        ]
      }
    );
  }
);
Wu.displayName = "Page";
const zi = W(
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
), cf = zi, Uu = g.forwardRef(
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
    const c = F(
      zi({
        tone: t,
        size: o,
        progress: n
      }),
      i
    ), u = g.useMemo(() => {
      var p;
      return r ? typeof r == "string" ? r === "placeholder" ? /* @__PURE__ */ h("span", { className: "w-3 h-3 bg-current rounded-full opacity-50 mr-1" }) : /* @__PURE__ */ h("span", { className: "mr-1", children: r }) : g.isValidElement(r) ? g.cloneElement(r, {
        className: F("w-3 h-3 mr-1", (p = r.props) == null ? void 0 : p.className)
      }) : typeof r == "function" ? /* @__PURE__ */ h(r, { className: "w-3 h-3 mr-1" }) : null : null;
    }, [r]);
    return /* @__PURE__ */ M("span", { ref: l, className: c, ...a, children: [
      u,
      e
    ] });
  }
);
Uu.displayName = "Badge";
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
}[e] || "", qu = (e) => {
  if (!e) return "";
  if (typeof e == "string") {
    const n = Yr(e);
    return n ? `gap-${n}` : "";
  }
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    const o = Yr(r);
    if (o) {
      const i = n === "xs" ? "" : `${n}:`;
      t.push(`${i}gap-${o}`);
    }
  }), t.join(" ");
}, Zu = W(
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
), Xu = g.forwardRef(
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
    const u = t, p = qu(i), d = F(
      Zu({
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
Xu.displayName = "InlineStack";
const Kr = (e) => e && {
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
}[e] || "", Yu = (e) => {
  if (!e) return "";
  if (typeof e == "string") {
    const n = Kr(e);
    return n ? `gap-${n}` : "";
  }
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    const o = Kr(r);
    if (o) {
      const i = n === "xs" ? "" : `${n}:`;
      t.push(`${i}gap-${o}`);
    }
  }), t.join(" ");
}, Ku = W(
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
), Qu = g.forwardRef(
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
    const p = t, d = Yu(o), f = F(
      Ku({
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
Qu.displayName = "BlockStack";
const Ju = W("flex items-center", {
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
}), Qr = W(
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
), Bi = g.forwardRef(
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
        className: F(
          Qr({
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
        className: F(
          Qr({
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
        className: F(
          Ju({ type: f, hasLabel: !!d }),
          b
        ),
        ...x,
        children: d ? (
          // With label: Previous - Label - Next (spaced apart)
          /* @__PURE__ */ M(Je, { children: [
            /* @__PURE__ */ h(C, {}),
            /* @__PURE__ */ h("div", { className: "flex-1 flex justify-center", children: typeof d == "string" ? /* @__PURE__ */ h(ue, { variant: "bodySm", tone: "subdued", children: d }) : d }),
            /* @__PURE__ */ h(S, {})
          ] })
        ) : (
          // Without label: Connected Previous/Next buttons
          /* @__PURE__ */ M("div", { className: "inline-flex", children: [
            /* @__PURE__ */ h(C, {}),
            /* @__PURE__ */ h(S, {})
          ] })
        )
      }
    );
  }
);
Bi.displayName = "Pagination";
const ed = W("w-full", {
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
}), uf = () => {
  const [e, t] = g.useState(
    "DEFAULT"
    /* Default */
  );
  return { mode: e, setMode: t };
}, td = ({
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
      activator: /* @__PURE__ */ M(
        ee,
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
        vi,
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
}, Jr = ({ sortOptions: e, onSort: t, disabled: n }) => {
  const [r, o] = g.useState(!1);
  return /* @__PURE__ */ h(
    qn,
    {
      active: r,
      activator: /* @__PURE__ */ h(
        ee,
        {
          variant: "tertiary",
          icon: /* @__PURE__ */ h(ho, { className: "size-4" }),
          disclosure: !0,
          disabled: n,
          onClick: () => o(!r),
          children: "Sort"
        }
      ),
      onClose: () => o(!1),
      children: /* @__PURE__ */ h("div", { className: "p-2 min-w-48", children: e.map((i) => /* @__PURE__ */ M(
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
}, nd = g.forwardRef(
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
    selected: k = 0,
    onSelect: O,
    filters: L,
    appliedFilters: P,
    onClearAll: B,
    pinnedFilters: D,
    queryValue: U = "",
    queryPlaceholder: T = "Searching in all..",
    onQueryChange: H,
    onQueryClear: N,
    className: z,
    asChild: Z = !1,
    ...A
  }, j) => {
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
    }, te = () => {
      N && N();
    };
    return /* @__PURE__ */ h(
      "div",
      {
        ref: j,
        className: F(
          ed({ mode: c, disabled: d }),
          z
        ),
        ...A,
        children: /* @__PURE__ */ h("div", { className: "p-1 border border-[#e3e3e3] rounded-md border-b-0 rounded-b-none", children: Y ? /* @__PURE__ */ M("div", { className: "space-y-2", children: [
          /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: e && e.length > 0 && /* @__PURE__ */ h(
              Jr,
              {
                sortOptions: e,
                onSort: n,
                disabled: d
              }
            ) }),
            /* @__PURE__ */ h("div", { className: "flex-1", children: /* @__PURE__ */ h(
              _o,
              {
                label: "",
                labelHidden: !0,
                value: U,
                onChange: oe,
                placeholder: T,
                clearButton: U.length > 0,
                onClearButtonClick: te,
                disabled: f || d,
                autoFocus: R,
                autoComplete: "off",
                size: "slim"
              }
            ) }),
            /* @__PURE__ */ h(
              ee,
              {
                onClick: ce,
                disabled: d,
                size: "medium",
                children: "Cancel"
              }
            )
          ] }),
          D && D.length > 0 && /* @__PURE__ */ h("div", { className: "border-t border-gray-200 pt-0.5", children: /* @__PURE__ */ h("div", { className: "flex flex-wrap gap-2", children: D.map((q) => /* @__PURE__ */ h(
            td,
            {
              filter: q,
              disabled: d
            },
            q.key
          )) }) }),
          P && P.length > 0 && /* @__PURE__ */ M("div", { className: "flex flex-wrap gap-2", children: [
            P.map((q) => /* @__PURE__ */ M(
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
                      children: /* @__PURE__ */ h(Nn, { className: "size-3" })
                    }
                  )
                ]
              },
              q.key
            )),
            B && /* @__PURE__ */ h(ee, { variant: "plain", size: "micro", onClick: B, children: "Clear all" })
          ] }),
          (s || a) && /* @__PURE__ */ M("div", { className: "flex justify-end gap-2", children: [
            a && /* @__PURE__ */ h(
              ee,
              {
                variant: "secondary",
                onClick: a.onAction,
                disabled: a.disabled,
                loading: a.loading,
                children: "Cancel"
              }
            ),
            s && /* @__PURE__ */ h(
              ee,
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
        ] }) : /* @__PURE__ */ M("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
            e && e.length > 0 && /* @__PURE__ */ h(
              Jr,
              {
                sortOptions: e,
                onSort: n,
                disabled: d
              }
            ),
            _ && _.length > 0 && /* @__PURE__ */ h(Je, { children: _.map((q, Se) => /* @__PURE__ */ h(
              ee,
              {
                size: "micro",
                variant: "tertiary",
                pressed: Se === k,
                onClick: () => {
                  q.onAction(), O && O(Se);
                },
                disabled: d,
                children: q.content
              },
              q.id
            )) })
          ] }),
          /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
            E && /* @__PURE__ */ h(
              ee,
              {
                variant: "tertiary",
                icon: /* @__PURE__ */ h(mo, { className: "size-4" }),
                accessibilityLabel: "Edit columns",
                disabled: d,
                children: "Edit columns"
              }
            ),
            /* @__PURE__ */ h(
              ee,
              {
                variant: "tertiary",
                className: "flex w-12 justify-items-end",
                icon: /* @__PURE__ */ M(Je, { children: [
                  /* @__PURE__ */ h(po, { className: "size-5" }),
                  /* @__PURE__ */ h(fo, { className: "size-5" })
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
nd.displayName = "IndexFilters";
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
function Xt(e) {
  return e instanceof Function;
}
function rd(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function od(e, t) {
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
function I(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: r
  };
}
function id(e, t, n, r) {
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
    }), I(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, n, t, e);
  }, {}), i;
}
function sd(e, t, n, r) {
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
    }, I(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: $(() => [e._getOrderColumnsFn()], (d) => {
      var f;
      if ((f = p.columns) != null && f.length) {
        let b = p.columns.flatMap((m) => m.getLeafColumns());
        return d(b);
      }
      return [p];
    }, I(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const d of e._features)
    d.createColumn == null || d.createColumn(p, e);
  return p;
}
const ne = "debugHeaders";
function eo(e, t, n) {
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
const ad = {
  createTable: (e) => {
    e.getHeaderGroups = $(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, s;
      const a = (i = r == null ? void 0 : r.map((p) => n.find((d) => d.id === p)).filter(Boolean)) != null ? i : [], l = (s = o == null ? void 0 : o.map((p) => n.find((d) => d.id === p)).filter(Boolean)) != null ? s : [], c = n.filter((p) => !(r != null && r.includes(p.id)) && !(o != null && o.includes(p.id)));
      return At(t, [...a, ...c, ...l], e);
    }, I(e.options, ne, "getHeaderGroups")), e.getCenterHeaderGroups = $(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), At(t, n, e, "center")), I(e.options, ne, "getCenterHeaderGroups")), e.getLeftHeaderGroups = $(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return At(t, i, e, "left");
    }, I(e.options, ne, "getLeftHeaderGroups")), e.getRightHeaderGroups = $(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return At(t, i, e, "right");
    }, I(e.options, ne, "getRightHeaderGroups")), e.getFooterGroups = $(() => [e.getHeaderGroups()], (t) => [...t].reverse(), I(e.options, ne, "getFooterGroups")), e.getLeftFooterGroups = $(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), I(e.options, ne, "getLeftFooterGroups")), e.getCenterFooterGroups = $(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), I(e.options, ne, "getCenterFooterGroups")), e.getRightFooterGroups = $(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), I(e.options, ne, "getRightFooterGroups")), e.getFlatHeaders = $(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), I(e.options, ne, "getFlatHeaders")), e.getLeftFlatHeaders = $(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), I(e.options, ne, "getLeftFlatHeaders")), e.getCenterFlatHeaders = $(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), I(e.options, ne, "getCenterFlatHeaders")), e.getRightFlatHeaders = $(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), I(e.options, ne, "getRightFlatHeaders")), e.getCenterLeafHeaders = $(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), I(e.options, ne, "getCenterLeafHeaders")), e.getLeftLeafHeaders = $(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), I(e.options, ne, "getLeftLeafHeaders")), e.getRightLeafHeaders = $(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), I(e.options, ne, "getRightLeafHeaders")), e.getLeafHeaders = $(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, s, a, l, c;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(s = (a = n[0]) == null ? void 0 : a.headers) != null ? s : [], ...(l = (c = r[0]) == null ? void 0 : c.headers) != null ? l : []].map((u) => u.getLeafHeaders()).flat();
    }, I(e.options, ne, "getLeafHeaders"));
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
        const S = eo(n, y, {
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
  }, u = t.map((d, f) => eo(n, d, {
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
const ld = (e, t, n, r, o, i, s) => {
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
    getLeafRows: () => od(a.subRows, (l) => l.subRows),
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
    getAllCells: $(() => [e.getAllLeafColumns()], (l) => l.map((c) => id(e, a, c, c.id)), I(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: $(() => [a.getAllCells()], (l) => l.reduce((c, u) => (c[u.column.id] = u, c), {}), I(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const c = e._features[l];
    c == null || c.createRow == null || c.createRow(a, e);
  }
  return a;
}, cd = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Hi = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
Hi.autoRemove = (e) => ge(e);
const Gi = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
Gi.autoRemove = (e) => ge(e);
const ji = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
ji.autoRemove = (e) => ge(e);
const Wi = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
Wi.autoRemove = (e) => ge(e);
const Ui = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
Ui.autoRemove = (e) => ge(e) || !(e != null && e.length);
const qi = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
qi.autoRemove = (e) => ge(e) || !(e != null && e.length);
const Zi = (e, t, n) => e.getValue(t) === n;
Zi.autoRemove = (e) => ge(e);
const Xi = (e, t, n) => e.getValue(t) == n;
Xi.autoRemove = (e) => ge(e);
const Jn = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
Jn.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, s = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const a = i;
    i = s, s = a;
  }
  return [i, s];
};
Jn.autoRemove = (e) => ge(e) || ge(e[0]) && ge(e[1]);
const Pe = {
  includesString: Hi,
  includesStringSensitive: Gi,
  equalsString: ji,
  arrIncludes: Wi,
  arrIncludesAll: Ui,
  arrIncludesSome: qi,
  equals: Zi,
  weakEquals: Xi,
  inNumberRange: Jn
};
function ge(e) {
  return e == null || e === "";
}
const ud = {
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
      return Xt(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
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
        if (to(o, s, e)) {
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
            if (to(l, s.value, a))
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
function to(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const dd = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), fd = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, gd = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, pd = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, md = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, hd = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!rd(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, s) => i - s);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, bd = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), vd = (e, t) => new Set(t.map((n) => n.getValue(e))).size, xd = (e, t) => t.length, un = {
  sum: dd,
  min: fd,
  max: gd,
  extent: pd,
  mean: md,
  median: hd,
  unique: bd,
  uniqueCount: vd,
  count: xd
}, wd = {
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
      return Xt(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : un[e.columnDef.aggregationFn];
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
function yd(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const Cd = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: le("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = $((n) => [mt(t, n)], (n) => n.findIndex((r) => r.id === e.id), I(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = mt(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = mt(t, n);
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
      return yd(i, n, r);
    }, I(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, dn = () => ({
  left: [],
  right: []
}), Sd = {
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
    }, I(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = $(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), I(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = $(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), I(t.options, "debugRows", "getRightVisibleCells"));
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
    }, e.getLeftLeafColumns = $(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), I(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = $(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), I(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = $(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, I(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function _d(e) {
  return e || (typeof document < "u" ? document : null);
}
const Nt = {
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
}), Rd = {
  getDefaultColumnDef: () => Nt,
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
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Nt.minSize, (r = i ?? e.columnDef.size) != null ? r : Nt.size), (o = e.columnDef.maxSize) != null ? o : Nt.maxSize);
    }, e.getStart = $((n) => [n, mt(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), I(t.options, "debugColumns", "getStart")), e.getAfter = $((n) => [n, mt(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), I(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
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
            return y.columnSizingStart.forEach((k) => {
              let [O, L] = k;
              c[O] = Math.round(Math.max(L + L * _, 0) * 100) / 100;
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
        }, f = _d(n), b = {
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
        }, x = Ed() ? {
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
let Ft = null;
function Ed() {
  if (typeof Ft == "boolean") return Ft;
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
  return Ft = e, Ft;
}
function gn(e) {
  return e.type === "touchstart";
}
const Pd = {
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
    e._getAllVisibleCells = $(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), I(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = $(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], I(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, r) => $(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), I(e.options, "debugColumns", n));
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
function mt(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Md = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, Ad = {
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
      return Xt(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : Pe[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, Nd = {
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
}), Fd = {
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
    }, I(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}), $d = {
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
    }, e.getTopRows = $(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), I(e.options, "debugRows", "getTopRows")), e.getBottomRows = $(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), I(e.options, "debugRows", "getBottomRows")), e.getCenterRows = $(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, I(e.options, "debugRows", "getCenterRows"));
  }
}, Id = {
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
    }, I(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = $(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? hn(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, I(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = $(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? hn(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, I(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
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
      return er(e, n);
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
      const u = er(l, n);
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
function er(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function En(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (er(s, t) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const a = En(s, t);
      a === "all" ? i = !0 : (a === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const Pn = /([0-9]+)/gm, Od = (e, t, n) => Yi(Ve(e.getValue(n)).toLowerCase(), Ve(t.getValue(n)).toLowerCase()), kd = (e, t, n) => Yi(Ve(e.getValue(n)), Ve(t.getValue(n))), Dd = (e, t, n) => tr(Ve(e.getValue(n)).toLowerCase(), Ve(t.getValue(n)).toLowerCase()), Vd = (e, t, n) => tr(Ve(e.getValue(n)), Ve(t.getValue(n))), Ld = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, Td = (e, t, n) => tr(e.getValue(n), t.getValue(n));
function tr(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function Ve(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Yi(e, t) {
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
const pt = {
  alphanumeric: Od,
  alphanumericCaseSensitive: kd,
  text: Dd,
  textCaseSensitive: Vd,
  datetime: Ld,
  basic: Td
}, zd = {
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
          return pt.datetime;
        if (typeof i == "string" && (r = !0, i.split(Pn).length > 1))
          return pt.alphanumeric;
      }
      return r ? pt.text : pt.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Xt(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : pt[e.columnDef.sortingFn];
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
}, Bd = [
  ad,
  Pd,
  Cd,
  Sd,
  cd,
  ud,
  Md,
  //depends on ColumnFaceting
  Ad,
  //depends on ColumnFiltering
  zd,
  wd,
  //depends on RowSorting
  Nd,
  Fd,
  $d,
  Id,
  Rd
];
function Hd(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...Bd, ...(t = e._features) != null ? t : []];
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
    }, I(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: $(() => [o._getColumnDefs()], (d) => {
      const f = function(b, m, x) {
        return x === void 0 && (x = 0), b.map((v) => {
          const w = sd(o, v, x, m), y = v;
          return w.columns = y.columns ? f(y.columns, w, x + 1) : [], w;
        });
      };
      return f(d);
    }, I(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: $(() => [o.getAllColumns()], (d) => d.flatMap((f) => f.getFlatColumns()), I(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: $(() => [o.getAllFlatColumns()], (d) => d.reduce((f, b) => (f[b.id] = b, f), {}), I(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: $(() => [o.getAllColumns(), o._getOrderColumnsFn()], (d, f) => {
      let b = d.flatMap((m) => m.getLeafColumns());
      return f(b);
    }, I(e, "debugColumns", "getAllLeafColumns")),
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
function Gd() {
  return (e) => $(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const a = [];
      for (let c = 0; c < o.length; c++) {
        const u = ld(e, e._getRowId(o[c], c, s), o[c], c, i, void 0, s == null ? void 0 : s.id);
        if (n.flatRows.push(u), n.rowsById[u.id] = u, a.push(u), e.options.getSubRows) {
          var l;
          u.originalSubRows = e.options.getSubRows(o[c], c), (l = u.originalSubRows) != null && l.length && (u.subRows = r(u.originalSubRows, i + 1, u));
        }
      }
      return a;
    };
    return n.rows = r(t), n;
  }, I(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
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
function no(e, t) {
  return e ? jd(e) ? /* @__PURE__ */ g.createElement(e, t) : e : null;
}
function jd(e) {
  return Wd(e) || typeof e == "function" || Ud(e);
}
function Wd(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function Ud(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function qd(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = g.useState(() => ({
    current: Hd(t)
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
        className: F(
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
const Zd = W(
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
), Xe = W(
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
), Ki = W("p-2 whitespace-nowrap text-sm text-gray-900", {
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
}), Qi = g.forwardRef(
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
    className: k,
    asChild: O = !1,
    data: L,
    columns: P,
    hasIndexFilters: B = !1,
    ...D
  }, U) => {
    const T = g.useMemo(() => L && P ? qd({
      data: L,
      columns: P,
      getCoreRowModel: Gd()
    }) : null, [L, P]), H = () => {
      const z = typeof y == "number" && y > 0 || y === "All", Z = () => !n || n.length === 0 || !z ? null : /* @__PURE__ */ h("div", { className: "flex items-center gap-2 ml-auto", children: n.map((A, j) => "actions" in A ? A.actions.map((Y, Q) => /* @__PURE__ */ h(
        ee,
        {
          variant: "primary",
          size: "slim",
          onClick: Y.onAction,
          disabled: Y.disabled,
          tone: Y.destructive ? "critical" : void 0,
          children: Y.content
        },
        `${j}-${Q}`
      )) : /* @__PURE__ */ h(
        ee,
        {
          variant: "primary",
          size: "slim",
          onClick: A.onAction,
          disabled: A.disabled,
          tone: A.destructive ? "critical" : void 0,
          children: A.content
        },
        j
      )) });
      return T ? /* @__PURE__ */ h("thead", { children: T.getHeaderGroups().map((A) => /* @__PURE__ */ M("tr", { children: [
        c && /* @__PURE__ */ h(
          "th",
          {
            className: F(
              Xe({
                isSelectionColumn: !0
              })
            ),
            children: /* @__PURE__ */ h(
              Bt,
              {
                checked: y === "All" || y === w && w > 0 ? !0 : typeof y == "number" && y > 0 ? "indeterminate" : !1,
                onChange: (j) => {
                  _ && _(
                    "page",
                    j,
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
            colSpan: A.headers.length,
            className: F(
              Xe({
                alignment: "start"
              }),
              "text-left"
            ),
            children: /* @__PURE__ */ M("div", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ h(ue, { variant: "bodyMd", as: "span", children: y === "All" ? `All ${(C == null ? void 0 : C.plural) || "items"} selected` : `${y} ${y === 1 ? (C == null ? void 0 : C.singular) || "item" : (C == null ? void 0 : C.plural) || "items"} selected` }),
              Z()
            ] })
          }
        ) : A.headers.map((j, Y) => /* @__PURE__ */ h(
          "th",
          {
            className: F(
              Xe({
                alignment: "start",
                sortable: j.column.getCanSort(),
                sticky: l && Y === A.headers.length - 1
              })
            ),
            children: j.isPlaceholder ? null : no(
              j.column.columnDef.header,
              j.getContext()
            )
          },
          j.id
        ))
      ] }, A.id)) }) : /* @__PURE__ */ h("thead", { children: /* @__PURE__ */ M("tr", { children: [
        c && /* @__PURE__ */ h(
          "th",
          {
            className: F(
              Xe({
                isSelectionColumn: !0
              })
            ),
            children: /* @__PURE__ */ h(
              Bt,
              {
                checked: y === "All" || y === w && w > 0 ? !0 : typeof y == "number" && y > 0 ? "indeterminate" : !1,
                onChange: (A) => {
                  _ && _(
                    "page",
                    A,
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
            className: F(
              Xe({
                alignment: "start"
              }),
              "text-left"
            ),
            children: /* @__PURE__ */ M("div", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ h(ue, { variant: "bodyMd", as: "span", children: y === "All" ? `All ${(C == null ? void 0 : C.plural) || "items"} selected` : `${y} ${y === 1 ? (C == null ? void 0 : C.singular) || "item" : (C == null ? void 0 : C.plural) || "items"} selected` }),
              Z()
            ] })
          }
        ) : e.map((A, j) => /* @__PURE__ */ h(
          "th",
          {
            className: F(
              Xe({
                alignment: A.alignment || "start",
                sortable: (u == null ? void 0 : u[j]) || !1,
                sticky: l && j === e.length - 1
              })
            ),
            children: /* @__PURE__ */ h(ue, { variant: "bodyMd", fontWeight: "semibold", children: (typeof A.title == "string", A.title) })
          },
          j
        ))
      ] }) });
    }, N = () => {
      var Z;
      if (T)
        return /* @__PURE__ */ h("tbody", { children: (Z = T.getRowModel().rows) != null && Z.length ? T.getRowModel().rows.map((A) => /* @__PURE__ */ h("tr", { className: "hover:bg-gray-50", children: A.getVisibleCells().map((j, Y) => /* @__PURE__ */ h(
          "td",
          {
            className: F(
              Ki({
                alignment: "start",
                sticky: l && Y === A.getVisibleCells().length - 1
              })
            ),
            children: no(
              j.column.columnDef.cell,
              j.getContext()
            )
          },
          j.id
        )) }, A.id)) : /* @__PURE__ */ h("tr", { children: /* @__PURE__ */ h(
          "td",
          {
            colSpan: (P == null ? void 0 : P.length) || e.length,
            className: "h-24 text-center",
            children: o || /* @__PURE__ */ h(ue, { variant: "bodyMd", tone: "subdued", children: "No results." })
          }
        ) }) });
      const z = g.Children.map(r, (A) => g.isValidElement(A) && A.type === nr ? g.cloneElement(A, {
        selectable: c,
        onSelectionChange: _,
        resourceName: C,
        ...A.props
      }) : A);
      return /* @__PURE__ */ h("tbody", { children: z });
    };
    return w === 0 && o ? /* @__PURE__ */ h("div", { className: "flex items-center justify-center p-8", children: o }) : /* @__PURE__ */ M("div", { className: "overflow-x-auto", children: [
      /* @__PURE__ */ M(
        "table",
        {
          ref: U,
          className: F(
            Zd({
              condensed: R,
              hasZebraStriping: x,
              loading: S,
              hasIndexFilters: B
            }),
            k
          ),
          ...D,
          children: [
            H(),
            N()
          ]
        }
      ),
      v && /* @__PURE__ */ h("div", { className: "", children: /* @__PURE__ */ h(Bi, { type: "table", ...v }) })
    ] });
  }
);
Qi.displayName = "IndexTable";
const nr = g.forwardRef(
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
    return /* @__PURE__ */ M(
      "tr",
      {
        ref: x,
        className: F(
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
              className: F(
                Ki({
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
nr.displayName = "IndexTable.Row";
const Ji = g.forwardRef(
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
        className: F(u({ flush: o }), r),
        colSpan: i,
        scope: s,
        headers: a,
        ...l,
        children: n
      }
    );
  }
);
Ji.displayName = "IndexTable.Cell";
const df = (e, t) => {
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
}, es = Qi;
es.Row = nr;
es.Cell = Ji;
const Xd = W("inline-block shrink-0 w-5 h-5", {
  variants: {
    tone: {
      base: "text-foreground",
      inherit: "text-inherit",
      subdued: "text-muted-foreground",
      caution: "text-amber-600",
      warning: "text-orange-600",
      critical: "text-destructive",
      interactive: "text-primary",
      info: "text-blue-600",
      success: "text-green-600",
      primary: "text-primary",
      emphasis: "text-foreground font-semibold",
      magic: "text-purple-600",
      textCaution: "text-amber-700",
      textWarning: "text-orange-700",
      textCritical: "text-red-700",
      textInfo: "text-blue-700",
      textSuccess: "text-green-700",
      textPrimary: "text-primary",
      textMagic: "text-purple-700"
    }
  },
  defaultVariants: {
    tone: "base"
  }
}), ts = g.forwardRef(
  ({ source: e, tone: t = "base", accessibilityLabel: n, className: r, ...o }, i) => {
    const s = g.useMemo(() => {
      var c;
      return e ? typeof e == "function" ? /* @__PURE__ */ h(e, { className: "w-5 h-5" }) : g.isValidElement(e) ? g.cloneElement(e, {
        className: F("w-5 h-5", (c = e.props) == null ? void 0 : c.className)
      }) : typeof e == "string" ? /* @__PURE__ */ h(
        "div",
        {
          className: "w-5 h-5",
          dangerouslySetInnerHTML: { __html: e }
        }
      ) : e : null;
    }, [e]), a = F(Xd({ tone: t }), r);
    return /* @__PURE__ */ h(
      "span",
      {
        ref: i,
        className: a,
        ...n ? { "aria-label": n } : { "aria-hidden": !0 },
        ...o,
        children: s
      }
    );
  }
);
ts.displayName = "Icon";
const Yd = W(
  // Base styles for save bar - positioned at top with 50% width and dark background
  "fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-1/2 bg-[#303030] text-white shadow-lg border border-[#2c2c2c] font-inter transition-transform duration-200 ease-in-out rounded-[40px] p-0",
  {
    variants: {
      open: {
        true: "translate-y-0",
        false: "-translate-y-full"
      }
    },
    defaultVariants: {
      open: !1
    }
  }
), Kd = Oi, Qd = ki, ns = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h(
  Kn,
  {
    ref: n,
    className: F(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
ns.displayName = Kn.displayName;
const rs = g.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ M(Qd, { children: [
  /* @__PURE__ */ h(ns, {}),
  /* @__PURE__ */ h(
    Qn,
    {
      ref: r,
      className: F(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg font-inter rounded-[40px] border border-[#e3e3e3] bg-[#303030] text-white",
        e
      ),
      ...n,
      children: t
    }
  )
] }));
rs.displayName = Qn.displayName;
const os = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h(
  Di,
  {
    ref: n,
    className: F(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
os.displayName = Di.displayName;
const is = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h(
  Vi,
  {
    ref: n,
    className: F("text-sm text-gray-600", e),
    ...t
  }
));
is.displayName = Vi.displayName;
const Jd = g.forwardRef(
  ({
    id: e,
    children: t,
    discardConfirmation: n = !1,
    open: r = !1,
    className: o,
    ...i
  }, s) => {
    const [a, l] = g.useState(!1), [c, u] = g.useState(null), p = g.useMemo(() => t ? g.Children.map(t, (b) => {
      if (g.isValidElement(b) && (b.type === "button" || b.type === ee)) {
        const m = b.props;
        if (m.variant === "primary" && n)
          return g.cloneElement(b, {
            ...m,
            onClick: (x) => {
              x.preventDefault(), u(() => m.onClick), l(!0);
            }
          });
      }
      return b;
    }) : null, [t, n]), d = g.useCallback(() => {
      l(!1), c && (c(), u(null));
    }, [c]), f = g.useCallback(() => {
      l(!1);
    }, []);
    return /* @__PURE__ */ M(Je, { children: [
      /* @__PURE__ */ h(
        "div",
        {
          ref: s,
          id: e,
          className: F(Yd({ open: r }), o),
          ...i,
          children: /* @__PURE__ */ M("div", { className: "flex items-center justify-between p-2", children: [
            /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ h(ts, { source: ao, tone: "base" }),
              /* @__PURE__ */ h("span", { className: "text-sm font-medium", children: "Unsaved changes" })
            ] }),
            /* @__PURE__ */ h("div", { className: "flex items-center gap-3", children: p })
          ] })
        }
      ),
      /* @__PURE__ */ h(Kd, { open: a, onOpenChange: l, children: /* @__PURE__ */ M(rs, { className: "p-0 overflow-hidden", children: [
        /* @__PURE__ */ h("div", { className: "px-6 py-4 bg-[#e3e3e3] border-b border-gray-200", children: /* @__PURE__ */ h(os, { className: "text-lg font-semibold text-gray-900 leading-6", children: "Discard changes" }) }),
        /* @__PURE__ */ h("div", { className: "px-6 py-4", children: /* @__PURE__ */ h(is, { className: "text-sm text-gray-600", children: "Are you sure you want to discard your changes? This action cannot be undone." }) }),
        /* @__PURE__ */ M("div", { className: "border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-3", children: [
          /* @__PURE__ */ h(ee, { onClick: f, children: "Cancel" }),
          /* @__PURE__ */ h(
            ee,
            {
              variant: "primary",
              tone: "critical",
              onClick: d,
              children: "Discard changes"
            }
          )
        ] })
      ] }) })
    ] });
  }
);
Jd.displayName = "ContextualSaveBar";
export {
  Uu as Badge,
  Bu as Bleed,
  Qu as BlockStack,
  da as Box,
  ee as Button,
  So as ButtonGroup,
  wu as Card,
  vi as ChoiceList,
  Jd as ContextualSaveBar,
  ts as Icon,
  nd as IndexFilters,
  es as IndexTable,
  Xu as InlineStack,
  ku as Modal,
  Wu as Page,
  Bi as Pagination,
  qn as Popover,
  ue as Text,
  _o as TextField,
  Tu as TitleBar,
  cf as badgeVariants,
  zu as bleedVariants,
  Ku as blockStackVariants,
  ua as boxVariants,
  ia as buttonGroupVariants,
  ra as buttonVariants,
  F as cn,
  Xd as iconVariants,
  ed as indexFiltersVariants,
  Zd as indexTableVariants,
  Zu as inlineStackVariants,
  Ou as modalVariants,
  Ju as paginationVariants,
  vu as polarisCardVariants,
  mu as polarisChoiceListVariants,
  Hu as polarisPageVariants,
  fu as polarisPopoverVariants,
  Yd as saveBarVariants,
  ga as textFieldVariants,
  fa as textVariants,
  Du as titleBarVariants,
  df as useIndexResourceState,
  uf as useSetIndexFiltersMode
};
//# sourceMappingURL=index.js.map
