import { jsx as h, jsxs as I, Fragment as Oe } from "react/jsx-runtime";
import * as d from "react";
import _, { useLayoutEffect as Mi, useState as Ii } from "react";
import * as kn from "react-dom";
import ss from "react-dom";
function lo(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function as(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = lo(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : lo(e[o], null);
        }
      };
  };
}
function ue(...e) {
  return d.useCallback(as(...e), e);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  const t = /* @__PURE__ */ ki(e), n = d.forwardRef((r, o) => {
    const { children: s, ...a } = r, i = d.Children.toArray(s), l = i.find(Oi);
    if (l) {
      const c = l.props.children, f = i.map((u) => u === l ? d.Children.count(c) > 1 ? d.Children.only(null) : d.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ h(t, { ...a, ref: o, children: d.isValidElement(c) ? d.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ h(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Ai = /* @__PURE__ */ xt("Slot");
// @__NO_SIDE_EFFECTS__
function ki(e) {
  const t = d.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (d.isValidElement(o)) {
      const a = $i(o), i = Di(s, o.props);
      return o.type !== d.Fragment && (i.ref = r ? as(r, a) : a), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ti = Symbol("radix.slottable");
function Oi(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ti;
}
function Di(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const l = s(...i);
      return o(...i), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function $i(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function is(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = is(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ls() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = is(e)) && (r && (r += " "), r += t);
  return r;
}
const co = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, uo = ls, ne = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return uo(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((c) => {
    const f = n == null ? void 0 : n[c], u = s == null ? void 0 : s[c];
    if (f === null) return null;
    const g = co(f) || co(u);
    return o[c][g];
  }), i = n && Object.entries(n).reduce((c, f) => {
    let [u, g] = f;
    return g === void 0 || (c[u] = g), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, f) => {
    let { class: u, className: g, ...m } = f;
    return Object.entries(m).every((b) => {
      let [p, v] = b;
      return Array.isArray(v) ? v.includes({
        ...s,
        ...i
      }[p]) : {
        ...s,
        ...i
      }[p] === v;
    }) ? [
      ...c,
      u,
      g
    ] : c;
  }, []);
  return uo(e, a, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
var cs = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M10 6a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Z"
  }), /* @__PURE__ */ _.createElement("path", {
    d: "M10 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 8.25a4.75 4.75 0 0 1 4.75-4.75h3.5a4.75 4.75 0 0 1 4.75 4.75v2.5a4.75 4.75 0 0 1-4.573 4.747l-1.335 1.714a.75.75 0 0 1-1.189-.006l-1.3-1.707a4.75 4.75 0 0 1-4.603-4.748v-2.5Zm4.75-3.25a3.25 3.25 0 0 0-3.25 3.25v2.5a3.25 3.25 0 0 0 3.25 3.25h.226a.75.75 0 0 1 .597.296l.934 1.225.96-1.232a.75.75 0 0 1 .591-.289h.192a3.25 3.25 0 0 0 3.25-3.25v-2.5a3.25 3.25 0 0 0-3.25-3.25h-3.5Z"
  }));
};
cs.displayName = "AlertBubbleIcon";
var _n = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
_n.displayName = "CheckIcon";
var Tn = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
Tn.displayName = "ChevronDownIcon";
var kr = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M11.764 5.204a.75.75 0 0 1 .032 1.06l-3.516 3.736 3.516 3.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.028l4-4.25a.75.75 0 0 1 1.06-.032Z"
  }));
};
kr.displayName = "ChevronLeftIcon";
var Tr = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
  }));
};
Tr.displayName = "ChevronRightIcon";
var Or = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
Or.displayName = "ChevronUpIcon";
var us = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M3 6a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /* @__PURE__ */ _.createElement("path", {
    d: "M6.75 14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
  }), /* @__PURE__ */ _.createElement("path", {
    d: "M5.5 9.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
  }));
};
us.displayName = "FilterIcon";
var ds = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"
  }), /* @__PURE__ */ _.createElement("path", {
    d: "M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"
  }));
};
ds.displayName = "RefreshIcon";
var fs = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};
fs.displayName = "SearchIcon";
var gs = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M9.377 2.5c-.926 0-1.676.75-1.676 1.676v.688c0 .056-.043.17-.198.251-.153.08-.303.168-.448.262-.147.097-.268.076-.318.048l-.6-.346a1.676 1.676 0 0 0-2.29.613l-.622 1.08a1.676 1.676 0 0 0 .613 2.289l.648.374c.048.028.124.12.119.29a5.484 5.484 0 0 0 .005.465c.009.175-.07.27-.119.299l-.653.377a1.676 1.676 0 0 0-.613 2.29l.623 1.08a1.676 1.676 0 0 0 2.29.613l.7-.405c.048-.028.166-.048.312.043.115.071.233.139.353.202.155.08.198.195.198.251v.811c0 .926.75 1.676 1.676 1.676h1.246c.926 0 1.676-.75 1.676-1.676v-.81c0-.057.042-.171.197-.252.121-.063.239-.13.354-.202.146-.091.264-.07.312-.043l.7.405a1.676 1.676 0 0 0 2.29-.614l.623-1.08a1.676 1.676 0 0 0-.613-2.289l-.653-.377c-.05-.029-.128-.123-.119-.3a5.494 5.494 0 0 0 .005-.463c-.005-.171.07-.263.12-.291l.647-.374a1.676 1.676 0 0 0 .613-2.29l-.623-1.079a1.676 1.676 0 0 0-2.29-.613l-.6.346c-.049.028-.17.048-.318-.048a5.4 5.4 0 0 0-.448-.262c-.155-.081-.197-.195-.197-.251v-.688c0-.926-.75-1.676-1.676-1.676h-1.246Zm-.176 1.676c0-.097.078-.176.176-.176h1.246c.097 0 .176.079.176.176v.688c0 .728.462 1.298 1.003 1.58.11.058.219.122.323.19.517.337 1.25.458 1.888.09l.6-.346a.176.176 0 0 1 .24.064l.623 1.08a.176.176 0 0 1-.064.24l-.648.374c-.623.36-.888 1.034-.868 1.638a4.184 4.184 0 0 1-.004.337c-.032.615.23 1.31.867 1.677l.653.377a.176.176 0 0 1 .064.24l-.623 1.08a.176.176 0 0 1-.24.065l-.701-.405c-.624-.36-1.341-.251-1.855.069a3.91 3.91 0 0 1-.255.145c-.54.283-1.003.853-1.003 1.581v.811a.176.176 0 0 1-.176.176h-1.246a.176.176 0 0 1-.176-.176v-.81c0-.73-.462-1.3-1.003-1.582a3.873 3.873 0 0 1-.255-.146c-.514-.32-1.23-.428-1.855-.068l-.7.405a.176.176 0 0 1-.241-.065l-.623-1.08a.176.176 0 0 1 .064-.24l.653-.377c.637-.368.899-1.062.867-1.677a3.97 3.97 0 0 1-.004-.337c.02-.604-.245-1.278-.868-1.638l-.648-.374a.176.176 0 0 1-.064-.24l.623-1.08a.176.176 0 0 1 .24-.064l.6.346c.638.368 1.37.247 1.888-.09a3.85 3.85 0 0 1 .323-.19c.54-.282 1.003-.852 1.003-1.58v-.688Z"
  }));
};
gs.displayName = "SettingsIcon";
var ps = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M7.75 6.06v7.69a.75.75 0 0 1-1.5 0v-7.69l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72Z"
  }), /* @__PURE__ */ _.createElement("path", {
    d: "M13.75 6.25a.75.75 0 0 0-1.5 0v7.69l-1.72-1.72a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-7.69Z"
  }));
};
ps.displayName = "SortIcon";
var ms = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
  }), /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
ms.displayName = "XCircleIcon";
var Dr = function(t) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ _.createElement("path", {
    d: "M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z"
  }));
};
Dr.displayName = "XIcon";
const $r = "-", Fi = (e) => {
  const t = Li(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split($r);
      return i[0] === "" && i.length !== 1 && i.shift(), hs(i, t) || Vi(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const l = n[a] || [];
      return i && r[a] ? [...l, ...r[a]] : l;
    }
  };
}, hs = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? hs(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join($r);
  return (a = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : a.classGroupId;
}, fo = /^\[(.+)\]$/, Vi = (e) => {
  if (fo.test(e)) {
    const t = fo.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Li = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return zi(Object.entries(e.classGroups), n).forEach(([s, a]) => {
    mr(a, r, s, t);
  }), r;
}, mr = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : go(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Bi(o)) {
        mr(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      mr(a, go(t, s), n, r);
    });
  });
}, go = (e, t) => {
  let n = e;
  return t.split($r).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Bi = (e) => e.isThemeGetter, zi = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([a, i]) => [t + a, i])) : s);
  return [n, o];
}) : e, Hi = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (s, a) => {
    n.set(s, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = n.get(s);
      if (a !== void 0)
        return a;
      if ((a = r.get(s)) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      n.has(s) ? n.set(s, a) : o(s, a);
    }
  };
}, vs = "!", ji = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], s = t.length, a = (i) => {
    const l = [];
    let c = 0, f = 0, u;
    for (let v = 0; v < i.length; v++) {
      let y = i[v];
      if (c === 0) {
        if (y === o && (r || i.slice(v, v + s) === t)) {
          l.push(i.slice(f, v)), f = v + s;
          continue;
        }
        if (y === "/") {
          u = v;
          continue;
        }
      }
      y === "[" ? c++ : y === "]" && c--;
    }
    const g = l.length === 0 ? i : i.substring(f), m = g.startsWith(vs), b = m ? g.substring(1) : g, p = u && u > f ? u - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: m,
      baseClassName: b,
      maybePostfixModifierPosition: p
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: a
  }) : a;
}, Gi = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, Wi = (e) => ({
  cache: Hi(e.cacheSize),
  parseClassName: ji(e),
  ...Fi(e)
}), Ui = /\s+/, qi = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], a = e.trim().split(Ui);
  let i = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const c = a[l], {
      modifiers: f,
      hasImportantModifier: u,
      baseClassName: g,
      maybePostfixModifierPosition: m
    } = n(c);
    let b = !!m, p = r(b ? g.substring(0, m) : g);
    if (!p) {
      if (!b) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (p = r(g), !p) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      b = !1;
    }
    const v = Gi(f).join(":"), y = u ? v + vs : v, x = y + p;
    if (s.includes(x))
      continue;
    s.push(x);
    const w = o(p, b);
    for (let C = 0; C < w.length; ++C) {
      const S = w[C];
      s.push(y + S);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Yi() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = bs(t)) && (r && (r += " "), r += n);
  return r;
}
const bs = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = bs(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Xi(e, ...t) {
  let n, r, o, s = a;
  function a(l) {
    const c = t.reduce((f, u) => u(f), e());
    return n = Wi(c), r = n.cache.get, o = n.cache.set, s = i, i(l);
  }
  function i(l) {
    const c = r(l);
    if (c)
      return c;
    const f = qi(l, n);
    return o(l, f), f;
  }
  return function() {
    return s(Yi.apply(null, arguments));
  };
}
const ce = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, xs = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ki = /^\d+\/\d+$/, Zi = /* @__PURE__ */ new Set(["px", "full", "screen"]), Qi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ji = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, el = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, tl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, nl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ue = (e) => At(e) || Zi.has(e) || Ki.test(e), et = (e) => $t(e, "length", ul), At = (e) => !!e && !Number.isNaN(Number(e)), Qn = (e) => $t(e, "number", At), Gt = (e) => !!e && Number.isInteger(Number(e)), rl = (e) => e.endsWith("%") && At(e.slice(0, -1)), J = (e) => xs.test(e), tt = (e) => Qi.test(e), ol = /* @__PURE__ */ new Set(["length", "size", "percentage"]), sl = (e) => $t(e, ol, ys), al = (e) => $t(e, "position", ys), il = /* @__PURE__ */ new Set(["image", "url"]), ll = (e) => $t(e, il, fl), cl = (e) => $t(e, "", dl), Wt = () => !0, $t = (e, t, n) => {
  const r = xs.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, ul = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ji.test(e) && !el.test(e)
), ys = () => !1, dl = (e) => tl.test(e), fl = (e) => nl.test(e), gl = () => {
  const e = ce("colors"), t = ce("spacing"), n = ce("blur"), r = ce("brightness"), o = ce("borderColor"), s = ce("borderRadius"), a = ce("borderSpacing"), i = ce("borderWidth"), l = ce("contrast"), c = ce("grayscale"), f = ce("hueRotate"), u = ce("invert"), g = ce("gap"), m = ce("gradientColorStops"), b = ce("gradientColorStopPositions"), p = ce("inset"), v = ce("margin"), y = ce("opacity"), x = ce("padding"), w = ce("saturate"), C = ce("scale"), S = ce("sepia"), N = ce("skew"), R = ce("space"), E = ce("translate"), $ = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", J, t], A = () => [J, t], j = () => ["", Ue, et], B = () => ["auto", At, J], z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], P = () => ["solid", "dashed", "dotted", "double", "none"], V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], M = () => ["", "0", J], G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], O = () => [At, J];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Wt],
      spacing: [Ue, et],
      blur: ["none", "", tt, J],
      brightness: O(),
      borderColor: [e],
      borderRadius: ["none", "", "full", tt, J],
      borderSpacing: A(),
      borderWidth: j(),
      contrast: O(),
      grayscale: M(),
      hueRotate: O(),
      invert: M(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [rl, et],
      inset: L(),
      margin: L(),
      opacity: O(),
      padding: A(),
      saturate: O(),
      scale: O(),
      sepia: M(),
      skew: O(),
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
        aspect: ["auto", "square", "video", J]
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
        columns: [tt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": G()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": G()
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
        object: [...z(), J]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: $()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": $()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": $()
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
        z: ["auto", Gt, J]
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
        flex: ["1", "auto", "initial", "none", J]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: M()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: M()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Gt, J]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Wt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Gt, J]
        }, J]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Wt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Gt, J]
        }, J]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        "auto-cols": ["auto", "min", "max", "fr", J]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", J]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...k()]
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
        content: ["normal", ...k(), "baseline"]
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
        "place-content": [...k(), "baseline"]
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
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", J, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [J, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [J, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [tt]
        }, tt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [J, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [J, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [J, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [J, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", tt, et]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Qn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Wt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", J]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", At, Qn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ue, J]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", J]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", J]
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
        "placeholder-opacity": [y]
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
        "text-opacity": [y]
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
        decoration: [...P(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ue, et]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ue, J]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", J]
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
        content: ["none", J]
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
        "bg-opacity": [y]
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
        bg: [...z(), al]
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
        bg: ["auto", "cover", "contain", sl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ll]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
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
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...P(), "hidden"]
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
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: P()
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
        outline: ["", ...P()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ue, J]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ue, et]
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
        ring: j()
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
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ue, et]
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
        shadow: ["", "inner", "none", tt, cl]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Wt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...V(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": V()
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
        "drop-shadow": ["", "none", tt, J]
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
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
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
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", J]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: O()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", J]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: O()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", J]
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
        rotate: [Gt, J]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [E]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [E]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", J]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", J]
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
        "will-change": ["auto", "scroll", "contents", "transform", J]
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
        stroke: [Ue, et, Qn]
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
}, pl = /* @__PURE__ */ Xi(gl);
function F(...e) {
  return pl(ls(e));
}
const ml = ne(
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
), hl = (e) => e ? e === !0 || e === "down" ? /* @__PURE__ */ h(Tn, { className: "size-4" }) : e === "up" ? /* @__PURE__ */ h(Or, { className: "size-4" }) : e === "select" ? /* @__PURE__ */ h(_n, { className: "size-4" }) : null : null, po = () => /* @__PURE__ */ h(ds, { className: "size-4 animate-spin" }), de = d.forwardRef(
  ({
    children: e,
    size: t = "medium",
    textAlign: n = "center",
    fullWidth: r = !1,
    disclosure: o,
    removeUnderline: s,
    icon: a,
    dataPrimaryLink: i,
    tone: l = "default",
    variant: c = "default",
    id: f,
    url: u,
    external: g,
    target: m,
    download: b,
    submit: p,
    disabled: v,
    loading: y,
    pressed: x = !1,
    accessibilityLabel: w,
    role: C,
    ariaControls: S,
    ariaExpanded: N,
    ariaDescribedBy: R,
    ariaChecked: E,
    onClick: $,
    onFocus: D,
    onBlur: L,
    onKeyPress: A,
    onKeyUp: j,
    onKeyDown: B,
    onMouseEnter: z,
    onTouchStart: P,
    onPointerDown: V,
    className: k,
    asChild: M = !1,
    ...G
  }, O) => {
    const W = !!u, X = M ? Ai : W ? "a" : "button", Q = y, le = v || Q, Y = hl(o), T = F(
      ml({
        variant: c,
        size: t,
        tone: l === "critical" ? "critical" : l === "success" ? "success" : "default",
        textAlign: n,
        fullWidth: r,
        pressed: x
      }),
      // Handle underline removal for plain variants
      s && (c === "plain" || c === "monochromePlain") && "no-underline hover:no-underline",
      k
    ), K = {
      id: f,
      className: T,
      disabled: le,
      "aria-label": w,
      "aria-controls": S,
      "aria-expanded": N,
      "aria-describedby": R,
      "aria-checked": E,
      "aria-pressed": x,
      "data-primary-link": i,
      role: C,
      onClick: le ? void 0 : $,
      onFocus: D,
      onBlur: L,
      onKeyPress: A,
      onKeyUp: j,
      onKeyDown: B,
      onMouseEnter: z,
      onTouchStart: P,
      onPointerDown: V,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: O,
      ...G
    };
    return W ? /* @__PURE__ */ I(
      X,
      {
        ...K,
        href: u,
        target: g ? "_blank" : m,
        rel: g ? "noopener noreferrer" : void 0,
        download: b,
        children: [
          a && !Q && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: a }),
          Q && /* @__PURE__ */ h(po, {}),
          e && /* @__PURE__ */ h("span", { className: "inline-flex", children: e }),
          Y && !Q && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: Y })
        ]
      }
    ) : /* @__PURE__ */ I(X, { ...K, type: p ? "submit" : "button", children: [
      a && !Q && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: a }),
      Q && /* @__PURE__ */ h(po, {}),
      e && /* @__PURE__ */ h("span", { className: "inline-flex", children: e }),
      Y && !Q && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: Y })
    ] });
  }
);
de.displayName = "Button";
const vl = ne("flex items-center", {
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
}), ws = d.forwardRef(
  ({
    children: e,
    gap: t = "tight",
    variant: n,
    fullWidth: r = !1,
    connectedTop: o = !1,
    noWrap: s = !1,
    className: a,
    ...i
  }, l) => {
    const c = F(
      vl({
        gap: n === "segmented" ? void 0 : t,
        variant: n,
        fullWidth: r,
        connectedTop: o,
        noWrap: s
      }),
      a
    );
    return /* @__PURE__ */ h("div", { className: c, ref: l, ...i, children: e });
  }
);
ws.displayName = "ButtonGroup";
const bl = (e) => e && {
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
}[e] || "", mo = (e) => e ? e === "transparent" ? "border-transparent" : {
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
}[e] || "" : "", xl = (e) => e && {
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
}[e] || "", ho = (e) => e && {
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
}[e] || "", yl = (e) => e && {
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
}[e] || "", vo = (e) => e && {
  0: "border-0",
  "0165": "border-[0.66px]",
  "025": "border",
  "050": "border-2",
  100: "border-4"
}[e] || "", wl = (e) => e && {
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
}[e] || "", Ae = (e, t = "p") => {
  if (!e) return "";
  if (typeof e == "string") {
    const r = ho(e);
    return r ? `${t}-${r}` : "";
  }
  const n = [];
  return Object.entries(e).forEach(([r, o]) => {
    const s = ho(o);
    if (s) {
      const a = r === "xs" ? "" : `${r}:`;
      n.push(`${a}${t}-${s}`);
    }
  }), n.join(" ");
}, cn = (e, t) => {
  const r = {
    0: "0",
    "0165": "[0.66px]",
    "025": "",
    "050": "2",
    100: "4"
  }[e];
  return r ? `border-${t}-${r}` : `border-${t}`;
}, un = (e, t) => {
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
}, Cl = ne("", {
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
}), Sl = d.forwardRef(
  ({
    children: e,
    as: t = "div",
    background: n,
    borderColor: r,
    borderStyle: o,
    borderRadius: s,
    borderEndStartRadius: a,
    borderEndEndRadius: i,
    borderStartStartRadius: l,
    borderStartEndRadius: c,
    borderWidth: f,
    borderBlockStartWidth: u,
    borderBlockEndWidth: g,
    borderInlineStartWidth: m,
    borderInlineEndWidth: b,
    color: p,
    id: v,
    minHeight: y,
    minWidth: x,
    maxWidth: w,
    overflowX: C,
    overflowY: S,
    padding: N,
    paddingBlock: R,
    paddingBlockStart: E,
    paddingBlockEnd: $,
    paddingInline: D,
    paddingInlineStart: L,
    paddingInlineEnd: A,
    role: j,
    shadow: B,
    tabIndex: z,
    width: P,
    position: V,
    insetBlockStart: k,
    insetBlockEnd: M,
    insetInlineStart: G,
    insetInlineEnd: O,
    opacity: W,
    outlineColor: X,
    outlineStyle: Q,
    outlineWidth: le,
    printHidden: Y = !1,
    visuallyHidden: T = !1,
    zIndex: K,
    className: se,
    ...te
  }, H) => {
    const ee = t, fe = F(
      Cl({
        visuallyHidden: T,
        printHidden: Y
      }),
      // Background
      bl(n),
      // Border
      mo(r),
      o === "dashed" ? "border-dashed" : "border-solid",
      yl(s),
      vo(f),
      // Individual border widths
      u && cn(u, "t"),
      g && cn(g, "b"),
      m && cn(m, "l"),
      b && cn(b, "r"),
      // Individual border radius
      a && un(a, "bl"),
      i && un(i, "br"),
      l && un(l, "tl"),
      c && un(c, "tr"),
      // Text color
      xl(p),
      // Overflow
      C && `overflow-x-${C}`,
      S && `overflow-y-${S}`,
      // Padding
      Ae(N, "p"),
      Ae(R, "py"),
      Ae(E, "pt"),
      Ae($, "pb"),
      Ae(D, "px"),
      Ae(L, "pl"),
      Ae(A, "pr"),
      // Shadow
      wl(B),
      // Position
      V && `${V}`,
      // Inset (positioning)
      Ae(k, "top"),
      Ae(M, "bottom"),
      Ae(G, "left"),
      Ae(O, "right"),
      // Outline
      X && mo(X).replace("border-", "outline-"),
      Q === "dashed" ? "outline-dashed" : Q === "solid" ? "outline-solid" : "",
      le && vo(le).replace("border-", "outline-"),
      se
    ), ge = {
      ...y && { minHeight: y },
      ...x && { minWidth: x },
      ...w && { maxWidth: w },
      ...P && { width: P },
      ...W && { opacity: W },
      ...K && { zIndex: K }
    };
    return /* @__PURE__ */ h(
      ee,
      {
        ref: H,
        className: fe,
        style: Object.keys(ge).length > 0 ? ge : void 0,
        id: v,
        role: j,
        tabIndex: z,
        ...te,
        children: e
      }
    );
  }
);
Sl.displayName = "Box";
const _l = ne("", {
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
}), Me = d.forwardRef(
  ({
    children: e,
    as: t = "span",
    alignment: n,
    breakWord: r = !1,
    tone: o,
    fontWeight: s,
    id: a,
    numeric: i = !1,
    truncate: l = !1,
    variant: c = "bodyMd",
    visuallyHidden: f = !1,
    textDecorationLine: u,
    className: g,
    ...m
  }, b) => /* @__PURE__ */ h(
    t,
    {
      ref: b,
      id: a,
      className: F(
        _l({
          variant: c,
          alignment: n,
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
          breakWord: r,
          truncate: l,
          numeric: i,
          visuallyHidden: f,
          textDecorationLine: u ? "line-through" : "none"
        }),
        g
      ),
      ...m,
      children: e
    }
  )
);
Me.displayName = "Text";
const Rl = ne(
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
), El = () => {
  const [e] = d.useState(
    () => Math.random().toString(36).substring(2, 11)
  );
  return e;
}, Pl = (e) => {
  if (e)
    return typeof e == "number" ? e : 3;
}, Nl = (e) => {
  if (e)
    return e || typeof e == "number" && e > 0 ? { "aria-multiline": !0 } : void 0;
}, bo = (e) => `${e}Label`, xo = (e) => `${e}HelpText`, Cs = d.forwardRef(
  ({
    prefix: e,
    suffix: t,
    verticalContent: n,
    placeholder: r,
    value: o = "",
    helpText: s,
    label: a,
    labelAction: i,
    labelHidden: l = !1,
    disabled: c = !1,
    clearButton: f = !1,
    readOnly: u = !1,
    autoFocus: g = !1,
    focused: m,
    multiline: b = !1,
    error: p,
    connectedRight: v,
    connectedLeft: y,
    type: x = "text",
    name: w,
    id: C,
    role: S,
    step: N,
    largeStep: R,
    autoComplete: E,
    max: $,
    maxLength: D,
    maxHeight: L,
    min: A,
    minLength: j,
    pattern: B,
    inputMode: z,
    spellCheck: P,
    ariaOwns: V,
    ariaControls: k,
    ariaExpanded: M,
    ariaActiveDescendant: G,
    ariaAutocomplete: O,
    showCharacterCount: W = !1,
    align: X = "left",
    requiredIndicator: Q = !1,
    monospaced: le = !1,
    selectTextOnFocus: Y = !1,
    suggestion: T,
    variant: K = "inherit",
    size: se = "medium",
    tone: te,
    autoSize: H = !1,
    loading: ee = !1,
    onClearButtonClick: fe,
    onChange: ge,
    onSpinnerChange: Ke,
    onFocus: Ne,
    onBlur: Ce,
    className: Rt,
    ...be
  }, ut) => {
    const Xn = El(), re = C ?? Xn, [Ze, nn] = d.useState(!!m), zt = d.useRef(null), dt = d.useRef(null), rn = d.useRef(null), ft = d.useCallback(() => b ? dt.current : zt.current, [b]);
    d.useEffect(() => {
      const ae = ft();
      !ae || m === void 0 || (m ? ae.focus() : ae.blur());
    }, [m, ft]), d.useEffect(() => {
      const ae = zt.current;
      !ae || !(x === "text" || x === "tel" || x === "search" || x === "url" || x === "password") || !T || ae.setSelectionRange(o.length, T.length);
    }, [Ze, o, x, T]);
    const gt = T || o, Qe = x === "currency" ? "text" : x, on = F(
      Rl({
        size: se,
        variant: K,
        align: X,
        tone: te,
        error: !!p,
        monospaced: le,
        multiline: !!b
      }),
      H && "w-auto min-w-0",
      Rt
    ), Ge = d.useCallback(
      (ae) => {
        ge && ge(ae.currentTarget.value, re);
      },
      [ge, re]
    ), Kn = d.useCallback(
      (ae) => {
        if (nn(!0), Y && !T) {
          const pe = ft();
          pe == null || pe.select();
        }
        Ne && Ne(ae);
      },
      [Y, T, ft, Ne]
    ), Zn = d.useCallback(
      (ae) => {
        var pe;
        nn(!1), !((pe = rn.current) != null && pe.contains(ae == null ? void 0 : ae.relatedTarget)) && Ce && Ce(ae);
      },
      [Ce]
    ), sn = d.useCallback(() => {
      fe && fe(re);
    }, [fe, re]), Je = [];
    p && Je.push(`${re}Error`), s && Je.push(xo(re)), W && Je.push(`${re}-CharacterCounter`);
    const pt = [];
    e && pt.push(`${re}-Prefix`), t && pt.push(`${re}-Suffix`), n && pt.push(`${re}-VerticalContent`), pt.unshift(bo(re));
    let Et = null;
    if (W) {
      const ae = gt.length, pe = D ? `${ae}/${D}` : ae;
      Et = /* @__PURE__ */ h(
        "div",
        {
          id: `${re}-CharacterCounter`,
          className: "text-xs text-muted-foreground mt-1",
          children: pe
        }
      );
    }
    const an = f && gt !== "" ? /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        className: "absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground focus:outline-hidden focus:ring-3 focus:ring-ring focus:ring-offset-2 rounded-sm",
        onClick: sn,
        tabIndex: -1,
        "aria-label": "Clear",
        children: /* @__PURE__ */ h(ms, { className: "h-4 w-4" })
      }
    ) : null, ln = e ? /* @__PURE__ */ h(
      "div",
      {
        id: `${re}-Prefix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-r border-input bg-muted/50",
        children: e
      }
    ) : null, Ht = t ? /* @__PURE__ */ h(
      "div",
      {
        id: `${re}-Suffix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-l border-input bg-muted/50",
        children: t
      }
    ) : null, jt = ee ? /* @__PURE__ */ h("div", { className: "absolute right-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ h("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-foreground" }) }) : null, Z = l ? null : /* @__PURE__ */ I(
      "label",
      {
        id: bo(re),
        htmlFor: re,
        className: F(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          Q && "after:content-['*'] after:ml-1 after:text-destructive"
        ),
        children: [
          a,
          i && /* @__PURE__ */ h(
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
    ), me = s ? /* @__PURE__ */ h("div", { id: xo(re), className: "text-xs text-muted-foreground mt-1", children: s }) : null, ve = p && typeof p != "boolean" ? /* @__PURE__ */ h(
      "div",
      {
        id: `${re}Error`,
        className: "text-xs text-red-400 text-destructive mt-1",
        role: "alert",
        children: p
      }
    ) : null, xe = n ? /* @__PURE__ */ h(
      "div",
      {
        id: `${re}-VerticalContent`,
        className: "text-sm text-muted-foreground mb-2",
        children: n
      }
    ) : null, mt = {
      ...L && { maxHeight: L }
    }, he = d.createElement(b ? "textarea" : "input", {
      ref: d.useCallback(
        (ae) => {
          b ? dt.current = ae : zt.current = ae, typeof ut == "function" ? ut(ae) : ut && (ut.current = ae);
        },
        [b, ut]
      ),
      id: re,
      name: w,
      type: Qe,
      value: gt,
      placeholder: r,
      disabled: c,
      readOnly: u,
      autoFocus: g,
      role: S,
      min: A,
      max: $,
      step: N,
      minLength: j,
      maxLength: D,
      pattern: B,
      inputMode: z,
      spellCheck: P,
      autoComplete: E,
      rows: Pl(b),
      size: H ? 1 : void 0,
      style: Object.keys(mt).length > 0 ? mt : void 0,
      className: on,
      "aria-describedby": Je.length ? Je.join(" ") : void 0,
      "aria-labelledby": pt.join(" "),
      "aria-invalid": !!p,
      "aria-owns": V,
      "aria-activedescendant": G,
      "aria-autocomplete": O,
      "aria-controls": k,
      "aria-expanded": M,
      "aria-required": Q,
      ...Nl(b),
      onChange: T ? void 0 : Ge,
      onInput: T ? Ge : void 0,
      onFocus: Kn,
      onBlur: Zn,
      // Password manager disable attributes
      "data-1p-ignore": E === "off" || void 0,
      "data-lpignore": E === "off" || void 0,
      "data-form-type": E === "off" ? "other" : void 0,
      ...be
    });
    return /* @__PURE__ */ I("div", { ref: rn, className: "space-y-2", children: [
      Z,
      y || v ? /* @__PURE__ */ I("div", { className: "flex", children: [
        y,
        /* @__PURE__ */ I("div", { className: "flex-1 relative", children: [
          xe,
          /* @__PURE__ */ I("div", { className: "relative flex", children: [
            ln,
            he,
            Ht,
            an,
            jt
          ] })
        ] }),
        v
      ] }) : /* @__PURE__ */ I("div", { className: "relative", children: [
        xe,
        /* @__PURE__ */ I("div", { className: "relative flex", children: [
          ln,
          he,
          Ht,
          an,
          jt
        ] })
      ] }),
      ve,
      me,
      Et
    ] });
  }
);
Cs.displayName = "TextField";
function yo(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function oe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Ml(e, t) {
  const n = d.createContext(t), r = (s) => {
    const { children: a, ...i } = s, l = d.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ h(n.Provider, { value: l, children: a });
  };
  r.displayName = e + "Provider";
  function o(s) {
    const a = d.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Jt(e, t = []) {
  let n = [];
  function r(s, a) {
    const i = d.createContext(a), l = n.length;
    n = [...n, a];
    const c = (u) => {
      var y;
      const { scope: g, children: m, ...b } = u, p = ((y = g == null ? void 0 : g[e]) == null ? void 0 : y[l]) || i, v = d.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ h(p.Provider, { value: v, children: m });
    };
    c.displayName = s + "Provider";
    function f(u, g) {
      var p;
      const m = ((p = g == null ? void 0 : g[e]) == null ? void 0 : p[l]) || i, b = d.useContext(m);
      if (b) return b;
      if (a !== void 0) return a;
      throw new Error(`\`${u}\` must be used within \`${s}\``);
    }
    return [c, f];
  }
  const o = () => {
    const s = n.map((a) => d.createContext(a));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || s;
      return d.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: l } }),
        [i, l]
      );
    };
  };
  return o.scopeName = e, [r, Il(o, ...t)];
}
function Il(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = r.reduce((i, { useScope: l, scopeName: c }) => {
        const u = l(s)[`__scope${c}`];
        return { ...i, ...u };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Al(e) {
  const t = e + "CollectionProvider", [n, r] = Jt(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (p) => {
    const { scope: v, children: y } = p, x = _.useRef(null), w = _.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ h(o, { scope: v, itemMap: w, collectionRef: x, children: y });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ xt(i), c = _.forwardRef(
    (p, v) => {
      const { scope: y, children: x } = p, w = s(i, y), C = ue(v, w.collectionRef);
      return /* @__PURE__ */ h(l, { ref: C, children: x });
    }
  );
  c.displayName = i;
  const f = e + "CollectionItemSlot", u = "data-radix-collection-item", g = /* @__PURE__ */ xt(f), m = _.forwardRef(
    (p, v) => {
      const { scope: y, children: x, ...w } = p, C = _.useRef(null), S = ue(v, C), N = s(f, y);
      return _.useEffect(() => (N.itemMap.set(C, { ref: C, ...w }), () => void N.itemMap.delete(C))), /* @__PURE__ */ h(g, { [u]: "", ref: S, children: x });
    }
  );
  m.displayName = f;
  function b(p) {
    const v = s(e + "CollectionConsumer", p);
    return _.useCallback(() => {
      const x = v.collectionRef.current;
      if (!x) return [];
      const w = Array.from(x.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort(
        (N, R) => w.indexOf(N.ref.current) - w.indexOf(R.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: a, Slot: c, ItemSlot: m },
    b,
    r
  ];
}
var kl = d.createContext(void 0);
function Tl(e) {
  const t = d.useContext(kl);
  return e || t || "ltr";
}
var Ol = [
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
], ie = Ol.reduce((e, t) => {
  const n = /* @__PURE__ */ xt(`Primitive.${t}`), r = d.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, l = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h(l, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Dl(e, t) {
  e && kn.flushSync(() => e.dispatchEvent(t));
}
function yt(e) {
  const t = d.useRef(e);
  return d.useEffect(() => {
    t.current = e;
  }), d.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function $l(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = yt(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Fl = "DismissableLayer", hr = "dismissableLayer.update", Vl = "dismissableLayer.pointerDownOutside", Ll = "dismissableLayer.focusOutside", wo, Ss = d.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), On = d.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...l
    } = e, c = d.useContext(Ss), [f, u] = d.useState(null), g = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = d.useState({}), b = ue(t, (R) => u(R)), p = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = p.indexOf(v), x = f ? p.indexOf(f) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= y, S = Hl((R) => {
      const E = R.target, $ = [...c.branches].some((D) => D.contains(E));
      !C || $ || (o == null || o(R), a == null || a(R), R.defaultPrevented || i == null || i());
    }, g), N = jl((R) => {
      const E = R.target;
      [...c.branches].some((D) => D.contains(E)) || (s == null || s(R), a == null || a(R), R.defaultPrevented || i == null || i());
    }, g);
    return $l((R) => {
      x === c.layers.size - 1 && (r == null || r(R), !R.defaultPrevented && i && (R.preventDefault(), i()));
    }, g), d.useEffect(() => {
      if (f)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (wo = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), Co(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = wo);
        };
    }, [f, g, n, c]), d.useEffect(() => () => {
      f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), Co());
    }, [f, c]), d.useEffect(() => {
      const R = () => m({});
      return document.addEventListener(hr, R), () => document.removeEventListener(hr, R);
    }, []), /* @__PURE__ */ h(
      ie.div,
      {
        ...l,
        ref: b,
        style: {
          pointerEvents: w ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: oe(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: oe(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: oe(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
On.displayName = Fl;
var Bl = "DismissableLayerBranch", zl = d.forwardRef((e, t) => {
  const n = d.useContext(Ss), r = d.useRef(null), o = ue(t, r);
  return d.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ h(ie.div, { ...e, ref: o });
});
zl.displayName = Bl;
function Hl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = yt(e), r = d.useRef(!1), o = d.useRef(() => {
  });
  return d.useEffect(() => {
    const s = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          _s(
            Vl,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function jl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = yt(e), r = d.useRef(!1);
  return d.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && _s(Ll, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Co() {
  const e = new CustomEvent(hr);
  document.dispatchEvent(e);
}
function _s(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Dl(o, s) : o.dispatchEvent(s);
}
var Jn = 0;
function Fr() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? So()), document.body.insertAdjacentElement("beforeend", e[1] ?? So()), Jn++, () => {
      Jn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Jn--;
    };
  }, []);
}
function So() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var er = "focusScope.autoFocusOnMount", tr = "focusScope.autoFocusOnUnmount", _o = { bubbles: !1, cancelable: !0 }, Gl = "FocusScope", Dn = d.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, l] = d.useState(null), c = yt(o), f = yt(s), u = d.useRef(null), g = ue(t, (p) => l(p)), m = d.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  d.useEffect(() => {
    if (r) {
      let p = function(w) {
        if (m.paused || !i) return;
        const C = w.target;
        i.contains(C) ? u.current = C : nt(u.current, { select: !0 });
      }, v = function(w) {
        if (m.paused || !i) return;
        const C = w.relatedTarget;
        C !== null && (i.contains(C) || nt(u.current, { select: !0 }));
      }, y = function(w) {
        if (document.activeElement === document.body)
          for (const S of w)
            S.removedNodes.length > 0 && nt(i);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", v);
      const x = new MutationObserver(y);
      return i && x.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", v), x.disconnect();
      };
    }
  }, [r, i, m.paused]), d.useEffect(() => {
    if (i) {
      Eo.add(m);
      const p = document.activeElement;
      if (!i.contains(p)) {
        const y = new CustomEvent(er, _o);
        i.addEventListener(er, c), i.dispatchEvent(y), y.defaultPrevented || (Wl(Kl(Rs(i)), { select: !0 }), document.activeElement === p && nt(i));
      }
      return () => {
        i.removeEventListener(er, c), setTimeout(() => {
          const y = new CustomEvent(tr, _o);
          i.addEventListener(tr, f), i.dispatchEvent(y), y.defaultPrevented || nt(p ?? document.body, { select: !0 }), i.removeEventListener(tr, f), Eo.remove(m);
        }, 0);
      };
    }
  }, [i, c, f, m]);
  const b = d.useCallback(
    (p) => {
      if (!n && !r || m.paused) return;
      const v = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, y = document.activeElement;
      if (v && y) {
        const x = p.currentTarget, [w, C] = Ul(x);
        w && C ? !p.shiftKey && y === C ? (p.preventDefault(), n && nt(w, { select: !0 })) : p.shiftKey && y === w && (p.preventDefault(), n && nt(C, { select: !0 })) : y === x && p.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ h(ie.div, { tabIndex: -1, ...a, ref: g, onKeyDown: b });
});
Dn.displayName = Gl;
function Wl(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (nt(r, { select: t }), document.activeElement !== n) return;
}
function Ul(e) {
  const t = Rs(e), n = Ro(t, e), r = Ro(t.reverse(), e);
  return [n, r];
}
function Rs(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ro(e, t) {
  for (const n of e)
    if (!ql(n, { upTo: t })) return n;
}
function ql(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Yl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function nt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Yl(e) && t && e.select();
  }
}
var Eo = Xl();
function Xl() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Po(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Po(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Po(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Kl(e) {
  return e.filter((t) => t.tagName !== "A");
}
var we = globalThis != null && globalThis.document ? d.useLayoutEffect : () => {
}, Zl = d[" useId ".trim().toString()] || (() => {
}), Ql = 0;
function bt(e) {
  const [t, n] = d.useState(Zl());
  return we(() => {
    n((r) => r ?? String(Ql++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const Jl = ["top", "right", "bottom", "left"], ot = Math.min, Re = Math.max, Rn = Math.round, dn = Math.floor, ze = (e) => ({
  x: e,
  y: e
}), ec = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, tc = {
  start: "end",
  end: "start"
};
function vr(e, t, n) {
  return Re(e, ot(t, n));
}
function Ye(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xe(e) {
  return e.split("-")[0];
}
function Ft(e) {
  return e.split("-")[1];
}
function Vr(e) {
  return e === "x" ? "y" : "x";
}
function Lr(e) {
  return e === "y" ? "height" : "width";
}
const nc = /* @__PURE__ */ new Set(["top", "bottom"]);
function Be(e) {
  return nc.has(Xe(e)) ? "y" : "x";
}
function Br(e) {
  return Vr(Be(e));
}
function rc(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ft(e), o = Br(e), s = Lr(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = En(a)), [a, En(a)];
}
function oc(e) {
  const t = En(e);
  return [br(e), t, br(t)];
}
function br(e) {
  return e.replace(/start|end/g, (t) => tc[t]);
}
const No = ["left", "right"], Mo = ["right", "left"], sc = ["top", "bottom"], ac = ["bottom", "top"];
function ic(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Mo : No : t ? No : Mo;
    case "left":
    case "right":
      return t ? sc : ac;
    default:
      return [];
  }
}
function lc(e, t, n, r) {
  const o = Ft(e);
  let s = ic(Xe(e), n === "start", r);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(br)))), s;
}
function En(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ec[t]);
}
function cc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Es(e) {
  return typeof e != "number" ? cc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Pn(e) {
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
function Io(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Be(t), a = Br(t), i = Lr(a), l = Xe(t), c = s === "y", f = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, g = r[i] / 2 - o[i] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ft(t)) {
    case "start":
      m[a] -= g * (n && c ? -1 : 1);
      break;
    case "end":
      m[a] += g * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const uc = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = s.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let c = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: u
  } = Io(c, r, l), g = r, m = {}, b = 0;
  for (let p = 0; p < i.length; p++) {
    const {
      name: v,
      fn: y
    } = i[p], {
      x,
      y: w,
      data: C,
      reset: S
    } = await y({
      x: f,
      y: u,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: m,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = x ?? f, u = w ?? u, m = {
      ...m,
      [v]: {
        ...m[v],
        ...C
      }
    }, S && b <= 50 && (b++, typeof S == "object" && (S.placement && (g = S.placement), S.rects && (c = S.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: f,
      y: u
    } = Io(c, g, l)), p = -1);
  }
  return {
    x: f,
    y: u,
    placement: g,
    strategy: o,
    middlewareData: m
  };
};
async function Zt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: a,
    elements: i,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: g = !1,
    padding: m = 0
  } = Ye(t, e), b = Es(m), v = i[g ? u === "floating" ? "reference" : "floating" : u], y = Pn(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: l
  })), x = u === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), C = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Pn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: x,
    offsetParent: w,
    strategy: l
  }) : x);
  return {
    top: (y.top - S.top + b.top) / C.y,
    bottom: (S.bottom - y.bottom + b.bottom) / C.y,
    left: (y.left - S.left + b.left) / C.x,
    right: (S.right - y.right + b.right) / C.x
  };
}
const dc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: l
    } = t, {
      element: c,
      padding: f = 0
    } = Ye(e, t) || {};
    if (c == null)
      return {};
    const u = Es(f), g = {
      x: n,
      y: r
    }, m = Br(o), b = Lr(m), p = await a.getDimensions(c), v = m === "y", y = v ? "top" : "left", x = v ? "bottom" : "right", w = v ? "clientHeight" : "clientWidth", C = s.reference[b] + s.reference[m] - g[m] - s.floating[b], S = g[m] - s.reference[m], N = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let R = N ? N[w] : 0;
    (!R || !await (a.isElement == null ? void 0 : a.isElement(N))) && (R = i.floating[w] || s.floating[b]);
    const E = C / 2 - S / 2, $ = R / 2 - p[b] / 2 - 1, D = ot(u[y], $), L = ot(u[x], $), A = D, j = R - p[b] - L, B = R / 2 - p[b] / 2 + E, z = vr(A, B, j), P = !l.arrow && Ft(o) != null && B !== z && s.reference[b] / 2 - (B < A ? D : L) - p[b] / 2 < 0, V = P ? B < A ? B - A : B - j : 0;
    return {
      [m]: g[m] + V,
      data: {
        [m]: z,
        centerOffset: B - z - V,
        ...P && {
          alignmentOffset: V
        }
      },
      reset: P
    };
  }
}), fc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: a,
        initialPlacement: i,
        platform: l,
        elements: c
      } = t, {
        mainAxis: f = !0,
        crossAxis: u = !0,
        fallbackPlacements: g,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: p = !0,
        ...v
      } = Ye(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const y = Xe(o), x = Be(i), w = Xe(i) === i, C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = g || (w || !p ? [En(i)] : oc(i)), N = b !== "none";
      !g && N && S.push(...lc(i, p, b, C));
      const R = [i, ...S], E = await Zt(t, v), $ = [];
      let D = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (f && $.push(E[y]), u) {
        const B = rc(o, a, C);
        $.push(E[B[0]], E[B[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: $
      }], !$.every((B) => B <= 0)) {
        var L, A;
        const B = (((L = s.flip) == null ? void 0 : L.index) || 0) + 1, z = R[B];
        if (z && (!(u === "alignment" ? x !== Be(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((k) => k.overflows[0] > 0 && Be(k.placement) === x)))
          return {
            data: {
              index: B,
              overflows: D
            },
            reset: {
              placement: z
            }
          };
        let P = (A = D.filter((V) => V.overflows[0] <= 0).sort((V, k) => V.overflows[1] - k.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!P)
          switch (m) {
            case "bestFit": {
              var j;
              const V = (j = D.filter((k) => {
                if (N) {
                  const M = Be(k.placement);
                  return M === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((M) => M > 0).reduce((M, G) => M + G, 0)]).sort((k, M) => k[1] - M[1])[0]) == null ? void 0 : j[0];
              V && (P = V);
              break;
            }
            case "initialPlacement":
              P = i;
              break;
          }
        if (o !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
};
function Ao(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ko(e) {
  return Jl.some((t) => e[t] >= 0);
}
const gc = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Ye(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await Zt(t, {
            ...o,
            elementContext: "reference"
          }), a = Ao(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: ko(a)
            }
          };
        }
        case "escaped": {
          const s = await Zt(t, {
            ...o,
            altBoundary: !0
          }), a = Ao(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: ko(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ps = /* @__PURE__ */ new Set(["left", "top"]);
async function pc(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Xe(n), i = Ft(n), l = Be(n) === "y", c = Ps.has(a) ? -1 : 1, f = s && l ? -1 : 1, u = Ye(t, e);
  let {
    mainAxis: g,
    crossAxis: m,
    alignmentAxis: b
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return i && typeof b == "number" && (m = i === "end" ? b * -1 : b), l ? {
    x: m * f,
    y: g * c
  } : {
    x: g * c,
    y: m * f
  };
}
const mc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: a,
        middlewareData: i
      } = t, l = await pc(t, e);
      return a === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, hc = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: i = {
          fn: (v) => {
            let {
              x: y,
              y: x
            } = v;
            return {
              x: y,
              y: x
            };
          }
        },
        ...l
      } = Ye(e, t), c = {
        x: n,
        y: r
      }, f = await Zt(t, l), u = Be(Xe(o)), g = Vr(u);
      let m = c[g], b = c[u];
      if (s) {
        const v = g === "y" ? "top" : "left", y = g === "y" ? "bottom" : "right", x = m + f[v], w = m - f[y];
        m = vr(x, m, w);
      }
      if (a) {
        const v = u === "y" ? "top" : "left", y = u === "y" ? "bottom" : "right", x = b + f[v], w = b - f[y];
        b = vr(x, b, w);
      }
      const p = i.fn({
        ...t,
        [g]: m,
        [u]: b
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [g]: s,
            [u]: a
          }
        }
      };
    }
  };
}, vc = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = Ye(e, t), f = {
        x: n,
        y: r
      }, u = Be(o), g = Vr(u);
      let m = f[g], b = f[u];
      const p = Ye(i, t), v = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (l) {
        const w = g === "y" ? "height" : "width", C = s.reference[g] - s.floating[w] + v.mainAxis, S = s.reference[g] + s.reference[w] - v.mainAxis;
        m < C ? m = C : m > S && (m = S);
      }
      if (c) {
        var y, x;
        const w = g === "y" ? "width" : "height", C = Ps.has(Xe(o)), S = s.reference[u] - s.floating[w] + (C && ((y = a.offset) == null ? void 0 : y[u]) || 0) + (C ? 0 : v.crossAxis), N = s.reference[u] + s.reference[w] + (C ? 0 : ((x = a.offset) == null ? void 0 : x[u]) || 0) - (C ? v.crossAxis : 0);
        b < S ? b = S : b > N && (b = N);
      }
      return {
        [g]: m,
        [u]: b
      };
    }
  };
}, bc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: a,
        elements: i
      } = t, {
        apply: l = () => {
        },
        ...c
      } = Ye(e, t), f = await Zt(t, c), u = Xe(o), g = Ft(o), m = Be(o) === "y", {
        width: b,
        height: p
      } = s.floating;
      let v, y;
      u === "top" || u === "bottom" ? (v = u, y = g === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = u, v = g === "end" ? "top" : "bottom");
      const x = p - f.top - f.bottom, w = b - f.left - f.right, C = ot(p - f[v], x), S = ot(b - f[y], w), N = !t.middlewareData.shift;
      let R = C, E = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = w), (r = t.middlewareData.shift) != null && r.enabled.y && (R = x), N && !g) {
        const D = Re(f.left, 0), L = Re(f.right, 0), A = Re(f.top, 0), j = Re(f.bottom, 0);
        m ? E = b - 2 * (D !== 0 || L !== 0 ? D + L : Re(f.left, f.right)) : R = p - 2 * (A !== 0 || j !== 0 ? A + j : Re(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: E,
        availableHeight: R
      });
      const $ = await a.getDimensions(i.floating);
      return b !== $.width || p !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function $n() {
  return typeof window < "u";
}
function Vt(e) {
  return Ns(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ee(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function je(e) {
  var t;
  return (t = (Ns(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ns(e) {
  return $n() ? e instanceof Node || e instanceof Ee(e).Node : !1;
}
function De(e) {
  return $n() ? e instanceof Element || e instanceof Ee(e).Element : !1;
}
function He(e) {
  return $n() ? e instanceof HTMLElement || e instanceof Ee(e).HTMLElement : !1;
}
function To(e) {
  return !$n() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ee(e).ShadowRoot;
}
const xc = /* @__PURE__ */ new Set(["inline", "contents"]);
function en(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = $e(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !xc.has(o);
}
const yc = /* @__PURE__ */ new Set(["table", "td", "th"]);
function wc(e) {
  return yc.has(Vt(e));
}
const Cc = [":popover-open", ":modal"];
function Fn(e) {
  return Cc.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Sc = ["transform", "translate", "scale", "rotate", "perspective"], _c = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Rc = ["paint", "layout", "strict", "content"];
function zr(e) {
  const t = Hr(), n = De(e) ? $e(e) : e;
  return Sc.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || _c.some((r) => (n.willChange || "").includes(r)) || Rc.some((r) => (n.contain || "").includes(r));
}
function Ec(e) {
  let t = st(e);
  for (; He(t) && !Ot(t); ) {
    if (zr(t))
      return t;
    if (Fn(t))
      return null;
    t = st(t);
  }
  return null;
}
function Hr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Pc = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ot(e) {
  return Pc.has(Vt(e));
}
function $e(e) {
  return Ee(e).getComputedStyle(e);
}
function Vn(e) {
  return De(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function st(e) {
  if (Vt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    To(e) && e.host || // Fallback.
    je(e)
  );
  return To(t) ? t.host : t;
}
function Ms(e) {
  const t = st(e);
  return Ot(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : He(t) && en(t) ? t : Ms(t);
}
function Qt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ms(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ee(o);
  if (s) {
    const i = xr(a);
    return t.concat(a, a.visualViewport || [], en(o) ? o : [], i && n ? Qt(i) : []);
  }
  return t.concat(o, Qt(o, [], n));
}
function xr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Is(e) {
  const t = $e(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = He(e), s = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, i = Rn(n) !== s || Rn(r) !== a;
  return i && (n = s, r = a), {
    width: n,
    height: r,
    $: i
  };
}
function jr(e) {
  return De(e) ? e : e.contextElement;
}
function kt(e) {
  const t = jr(e);
  if (!He(t))
    return ze(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Is(t);
  let a = (s ? Rn(n.width) : n.width) / r, i = (s ? Rn(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const Nc = /* @__PURE__ */ ze(0);
function As(e) {
  const t = Ee(e);
  return !Hr() || !t.visualViewport ? Nc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Mc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ee(e) ? !1 : t;
}
function wt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = jr(e);
  let a = ze(1);
  t && (r ? De(r) && (a = kt(r)) : a = kt(e));
  const i = Mc(s, n, r) ? As(s) : ze(0);
  let l = (o.left + i.x) / a.x, c = (o.top + i.y) / a.y, f = o.width / a.x, u = o.height / a.y;
  if (s) {
    const g = Ee(s), m = r && De(r) ? Ee(r) : r;
    let b = g, p = xr(b);
    for (; p && r && m !== b; ) {
      const v = kt(p), y = p.getBoundingClientRect(), x = $e(p), w = y.left + (p.clientLeft + parseFloat(x.paddingLeft)) * v.x, C = y.top + (p.clientTop + parseFloat(x.paddingTop)) * v.y;
      l *= v.x, c *= v.y, f *= v.x, u *= v.y, l += w, c += C, b = Ee(p), p = xr(b);
    }
  }
  return Pn({
    width: f,
    height: u,
    x: l,
    y: c
  });
}
function Gr(e, t) {
  const n = Vn(e).scrollLeft;
  return t ? t.left + n : wt(je(e)).left + n;
}
function ks(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Gr(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Ic(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", a = je(r), i = t ? Fn(t.floating) : !1;
  if (r === a || i && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ze(1);
  const f = ze(0), u = He(r);
  if ((u || !u && !s) && ((Vt(r) !== "body" || en(a)) && (l = Vn(r)), He(r))) {
    const m = wt(r);
    c = kt(r), f.x = m.x + r.clientLeft, f.y = m.y + r.clientTop;
  }
  const g = a && !u && !s ? ks(a, l, !0) : ze(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + f.x + g.x,
    y: n.y * c.y - l.scrollTop * c.y + f.y + g.y
  };
}
function Ac(e) {
  return Array.from(e.getClientRects());
}
function kc(e) {
  const t = je(e), n = Vn(e), r = e.ownerDocument.body, o = Re(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Re(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Gr(e);
  const i = -n.scrollTop;
  return $e(r).direction === "rtl" && (a += Re(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
function Tc(e, t) {
  const n = Ee(e), r = je(e), o = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, i = 0, l = 0;
  if (o) {
    s = o.width, a = o.height;
    const c = Hr();
    (!c || c && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: i,
    y: l
  };
}
const Oc = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Dc(e, t) {
  const n = wt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = He(e) ? kt(e) : ze(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: a,
    height: i,
    x: l,
    y: c
  };
}
function Oo(e, t, n) {
  let r;
  if (t === "viewport")
    r = Tc(e, n);
  else if (t === "document")
    r = kc(je(e));
  else if (De(t))
    r = Dc(t, n);
  else {
    const o = As(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Pn(r);
}
function Ts(e, t) {
  const n = st(e);
  return n === t || !De(n) || Ot(n) ? !1 : $e(n).position === "fixed" || Ts(n, t);
}
function $c(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Qt(e, [], !1).filter((i) => De(i) && Vt(i) !== "body"), o = null;
  const s = $e(e).position === "fixed";
  let a = s ? st(e) : e;
  for (; De(a) && !Ot(a); ) {
    const i = $e(a), l = zr(a);
    !l && i.position === "fixed" && (o = null), (s ? !l && !o : !l && i.position === "static" && !!o && Oc.has(o.position) || en(a) && !l && Ts(e, a)) ? r = r.filter((f) => f !== a) : o = i, a = st(a);
  }
  return t.set(e, r), r;
}
function Fc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Fn(t) ? [] : $c(t, this._c) : [].concat(n), r], i = a[0], l = a.reduce((c, f) => {
    const u = Oo(t, f, o);
    return c.top = Re(u.top, c.top), c.right = ot(u.right, c.right), c.bottom = ot(u.bottom, c.bottom), c.left = Re(u.left, c.left), c;
  }, Oo(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Vc(e) {
  const {
    width: t,
    height: n
  } = Is(e);
  return {
    width: t,
    height: n
  };
}
function Lc(e, t, n) {
  const r = He(t), o = je(t), s = n === "fixed", a = wt(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ze(0);
  function c() {
    l.x = Gr(o);
  }
  if (r || !r && !s)
    if ((Vt(t) !== "body" || en(o)) && (i = Vn(t)), r) {
      const m = wt(t, !0, s, t);
      l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
    } else o && c();
  s && !r && o && c();
  const f = o && !r && !s ? ks(o, i) : ze(0), u = a.left + i.scrollLeft - l.x - f.x, g = a.top + i.scrollTop - l.y - f.y;
  return {
    x: u,
    y: g,
    width: a.width,
    height: a.height
  };
}
function nr(e) {
  return $e(e).position === "static";
}
function Do(e, t) {
  if (!He(e) || $e(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return je(e) === n && (n = n.ownerDocument.body), n;
}
function Os(e, t) {
  const n = Ee(e);
  if (Fn(e))
    return n;
  if (!He(e)) {
    let o = st(e);
    for (; o && !Ot(o); ) {
      if (De(o) && !nr(o))
        return o;
      o = st(o);
    }
    return n;
  }
  let r = Do(e, t);
  for (; r && wc(r) && nr(r); )
    r = Do(r, t);
  return r && Ot(r) && nr(r) && !zr(r) ? n : r || Ec(e) || n;
}
const Bc = async function(e) {
  const t = this.getOffsetParent || Os, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Lc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function zc(e) {
  return $e(e).direction === "rtl";
}
const Hc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ic,
  getDocumentElement: je,
  getClippingRect: Fc,
  getOffsetParent: Os,
  getElementRects: Bc,
  getClientRects: Ac,
  getDimensions: Vc,
  getScale: kt,
  isElement: De,
  isRTL: zc
};
function Ds(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function jc(e, t) {
  let n = null, r;
  const o = je(e);
  function s() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), s();
    const c = e.getBoundingClientRect(), {
      left: f,
      top: u,
      width: g,
      height: m
    } = c;
    if (i || t(), !g || !m)
      return;
    const b = dn(u), p = dn(o.clientWidth - (f + g)), v = dn(o.clientHeight - (u + m)), y = dn(f), w = {
      rootMargin: -b + "px " + -p + "px " + -v + "px " + -y + "px",
      threshold: Re(0, ot(1, l)) || 1
    };
    let C = !0;
    function S(N) {
      const R = N[0].intersectionRatio;
      if (R !== l) {
        if (!C)
          return a();
        R ? a(!1, R) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !Ds(c, e.getBoundingClientRect()) && a(), C = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, w);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function Gc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = jr(e), f = o || s ? [...c ? Qt(c) : [], ...Qt(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), s && y.addEventListener("resize", n);
  });
  const u = c && i ? jc(c, n) : null;
  let g = -1, m = null;
  a && (m = new ResizeObserver((y) => {
    let [x] = y;
    x && x.target === c && m && (m.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var w;
      (w = m) == null || w.observe(t);
    })), n();
  }), c && !l && m.observe(c), m.observe(t));
  let b, p = l ? wt(e) : null;
  l && v();
  function v() {
    const y = wt(e);
    p && !Ds(p, y) && n(), p = y, b = requestAnimationFrame(v);
  }
  return n(), () => {
    var y;
    f.forEach((x) => {
      o && x.removeEventListener("scroll", n), s && x.removeEventListener("resize", n);
    }), u == null || u(), (y = m) == null || y.disconnect(), m = null, l && cancelAnimationFrame(b);
  };
}
const Wc = mc, Uc = hc, qc = fc, Yc = bc, Xc = gc, $o = dc, Kc = vc, Zc = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Hc,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return uc(e, t, {
    ...o,
    platform: s
  });
};
var Qc = typeof document < "u", Jc = function() {
}, wn = Qc ? Mi : Jc;
function Nn(e, t) {
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
        if (!Nn(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Nn(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function $s(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fo(e, t) {
  const n = $s(e);
  return Math.round(t * n) / n;
}
function rr(e) {
  const t = d.useRef(e);
  return wn(() => {
    t.current = e;
  }), t;
}
function eu(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: i = !0,
    whileElementsMounted: l,
    open: c
  } = e, [f, u] = d.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, m] = d.useState(r);
  Nn(g, r) || m(r);
  const [b, p] = d.useState(null), [v, y] = d.useState(null), x = d.useCallback((k) => {
    k !== N.current && (N.current = k, p(k));
  }, []), w = d.useCallback((k) => {
    k !== R.current && (R.current = k, y(k));
  }, []), C = s || b, S = a || v, N = d.useRef(null), R = d.useRef(null), E = d.useRef(f), $ = l != null, D = rr(l), L = rr(o), A = rr(c), j = d.useCallback(() => {
    if (!N.current || !R.current)
      return;
    const k = {
      placement: t,
      strategy: n,
      middleware: g
    };
    L.current && (k.platform = L.current), Zc(N.current, R.current, k).then((M) => {
      const G = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      B.current && !Nn(E.current, G) && (E.current = G, kn.flushSync(() => {
        u(G);
      }));
    });
  }, [g, t, n, L, A]);
  wn(() => {
    c === !1 && E.current.isPositioned && (E.current.isPositioned = !1, u((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [c]);
  const B = d.useRef(!1);
  wn(() => (B.current = !0, () => {
    B.current = !1;
  }), []), wn(() => {
    if (C && (N.current = C), S && (R.current = S), C && S) {
      if (D.current)
        return D.current(C, S, j);
      j();
    }
  }, [C, S, j, D, $]);
  const z = d.useMemo(() => ({
    reference: N,
    floating: R,
    setReference: x,
    setFloating: w
  }), [x, w]), P = d.useMemo(() => ({
    reference: C,
    floating: S
  }), [C, S]), V = d.useMemo(() => {
    const k = {
      position: n,
      left: 0,
      top: 0
    };
    if (!P.floating)
      return k;
    const M = Fo(P.floating, f.x), G = Fo(P.floating, f.y);
    return i ? {
      ...k,
      transform: "translate(" + M + "px, " + G + "px)",
      ...$s(P.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: G
    };
  }, [n, i, P.floating, f.x, f.y]);
  return d.useMemo(() => ({
    ...f,
    update: j,
    refs: z,
    elements: P,
    floatingStyles: V
  }), [f, j, z, P, V]);
}
const tu = (e) => {
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
      return r && t(r) ? r.current != null ? $o({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? $o({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, nu = (e, t) => ({
  ...Wc(e),
  options: [e, t]
}), ru = (e, t) => ({
  ...Uc(e),
  options: [e, t]
}), ou = (e, t) => ({
  ...Kc(e),
  options: [e, t]
}), su = (e, t) => ({
  ...qc(e),
  options: [e, t]
}), au = (e, t) => ({
  ...Yc(e),
  options: [e, t]
}), iu = (e, t) => ({
  ...Xc(e),
  options: [e, t]
}), lu = (e, t) => ({
  ...tu(e),
  options: [e, t]
});
var cu = "Arrow", Fs = d.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ h(
    ie.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ h("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Fs.displayName = cu;
var uu = Fs;
function du(e) {
  const [t, n] = d.useState(void 0);
  return we(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let a, i;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          a = c.inlineSize, i = c.blockSize;
        } else
          a = e.offsetWidth, i = e.offsetHeight;
        n({ width: a, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Wr = "Popper", [Vs, Ln] = Jt(Wr), [fu, Ls] = Vs(Wr), Bs = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = d.useState(null);
  return /* @__PURE__ */ h(fu, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Bs.displayName = Wr;
var zs = "PopperAnchor", Hs = d.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Ls(zs, n), a = d.useRef(null), i = ue(t, a);
    return d.useEffect(() => {
      s.onAnchorChange((r == null ? void 0 : r.current) || a.current);
    }), r ? null : /* @__PURE__ */ h(ie.div, { ...o, ref: i });
  }
);
Hs.displayName = zs;
var Ur = "PopperContent", [gu, pu] = Vs(Ur), js = d.forwardRef(
  (e, t) => {
    var T, K, se, te, H, ee;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: f = 0,
      sticky: u = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: b,
      ...p
    } = e, v = Ls(Ur, n), [y, x] = d.useState(null), w = ue(t, (fe) => x(fe)), [C, S] = d.useState(null), N = du(C), R = (N == null ? void 0 : N.width) ?? 0, E = (N == null ? void 0 : N.height) ?? 0, $ = r + (s !== "center" ? "-" + s : ""), D = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, L = Array.isArray(c) ? c : [c], A = L.length > 0, j = {
      padding: D,
      boundary: L.filter(hu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: A
    }, { refs: B, floatingStyles: z, placement: P, isPositioned: V, middlewareData: k } = eu({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: $,
      whileElementsMounted: (...fe) => Gc(...fe, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        nu({ mainAxis: o + E, alignmentAxis: a }),
        l && ru({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? ou() : void 0,
          ...j
        }),
        l && su({ ...j }),
        au({
          ...j,
          apply: ({ elements: fe, rects: ge, availableWidth: Ke, availableHeight: Ne }) => {
            const { width: Ce, height: Rt } = ge.reference, be = fe.floating.style;
            be.setProperty("--radix-popper-available-width", `${Ke}px`), be.setProperty("--radix-popper-available-height", `${Ne}px`), be.setProperty("--radix-popper-anchor-width", `${Ce}px`), be.setProperty("--radix-popper-anchor-height", `${Rt}px`);
          }
        }),
        C && lu({ element: C, padding: i }),
        vu({ arrowWidth: R, arrowHeight: E }),
        g && iu({ strategy: "referenceHidden", ...j })
      ]
    }), [M, G] = Us(P), O = yt(b);
    we(() => {
      V && (O == null || O());
    }, [V, O]);
    const W = (T = k.arrow) == null ? void 0 : T.x, X = (K = k.arrow) == null ? void 0 : K.y, Q = ((se = k.arrow) == null ? void 0 : se.centerOffset) !== 0, [le, Y] = d.useState();
    return we(() => {
      y && Y(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ h(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: V ? z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: le,
          "--radix-popper-transform-origin": [
            (te = k.transformOrigin) == null ? void 0 : te.x,
            (H = k.transformOrigin) == null ? void 0 : H.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ee = k.hide) == null ? void 0 : ee.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ h(
          gu,
          {
            scope: n,
            placedSide: M,
            onArrowChange: S,
            arrowX: W,
            arrowY: X,
            shouldHideArrow: Q,
            children: /* @__PURE__ */ h(
              ie.div,
              {
                "data-side": M,
                "data-align": G,
                ...p,
                ref: w,
                style: {
                  ...p.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: V ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
js.displayName = Ur;
var Gs = "PopperArrow", mu = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ws = d.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = pu(Gs, r), a = mu[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ h(
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
        children: /* @__PURE__ */ h(
          uu,
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
Ws.displayName = Gs;
function hu(e) {
  return e !== null;
}
var vu = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, y, x;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((v = o.arrow) == null ? void 0 : v.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [c, f] = Us(n), u = { start: "0%", center: "50%", end: "100%" }[f], g = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + i / 2, m = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + l / 2;
    let b = "", p = "";
    return c === "bottom" ? (b = a ? u : `${g}px`, p = `${-l}px`) : c === "top" ? (b = a ? u : `${g}px`, p = `${r.floating.height + l}px`) : c === "right" ? (b = `${-l}px`, p = a ? u : `${m}px`) : c === "left" && (b = `${r.floating.width + l}px`, p = a ? u : `${m}px`), { data: { x: b, y: p } };
  }
});
function Us(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var qs = Bs, qr = Hs, Ys = js, Xs = Ws, bu = "Portal", Bn = d.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, s] = d.useState(!1);
  we(() => s(!0), []);
  const a = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? ss.createPortal(/* @__PURE__ */ h(ie.div, { ...r, ref: t }), a) : null;
});
Bn.displayName = bu;
var xu = d[" useInsertionEffect ".trim().toString()] || we;
function Mn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, a] = yu({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : o;
  {
    const f = d.useRef(e !== void 0);
    d.useEffect(() => {
      const u = f.current;
      u !== i && console.warn(
        `${r} is changing from ${u ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = i;
    }, [i, r]);
  }
  const c = d.useCallback(
    (f) => {
      var u;
      if (i) {
        const g = wu(f) ? f(e) : f;
        g !== e && ((u = a.current) == null || u.call(a, g));
      } else
        s(f);
    },
    [i, e, s, a]
  );
  return [l, c];
}
function yu({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = d.useState(e), o = d.useRef(n), s = d.useRef(t);
  return xu(() => {
    s.current = t;
  }, [t]), d.useEffect(() => {
    var a;
    o.current !== n && ((a = s.current) == null || a.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function wu(e) {
  return typeof e == "function";
}
function Cu(e) {
  const t = d.useRef({ value: e, previous: e });
  return d.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Ks = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Su = "VisuallyHidden", _u = d.forwardRef(
  (e, t) => /* @__PURE__ */ h(
    ie.span,
    {
      ...e,
      ref: t,
      style: { ...Ks, ...e.style }
    }
  )
);
_u.displayName = Su;
var Ru = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Pt = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), gn = {}, or = 0, Zs = function(e) {
  return e && (e.host || Zs(e.parentNode));
}, Eu = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Zs(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Pu = function(e, t, n, r) {
  var o = Eu(t, Array.isArray(e) ? e : [e]);
  gn[n] || (gn[n] = /* @__PURE__ */ new WeakMap());
  var s = gn[n], a = [], i = /* @__PURE__ */ new Set(), l = new Set(o), c = function(u) {
    !u || i.has(u) || (i.add(u), c(u.parentNode));
  };
  o.forEach(c);
  var f = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(g) {
      if (i.has(g))
        f(g);
      else
        try {
          var m = g.getAttribute(r), b = m !== null && m !== "false", p = (Pt.get(g) || 0) + 1, v = (s.get(g) || 0) + 1;
          Pt.set(g, p), s.set(g, v), a.push(g), p === 1 && b && fn.set(g, !0), v === 1 && g.setAttribute(n, "true"), b || g.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", g, y);
        }
    });
  };
  return f(t), i.clear(), or++, function() {
    a.forEach(function(u) {
      var g = Pt.get(u) - 1, m = s.get(u) - 1;
      Pt.set(u, g), s.set(u, m), g || (fn.has(u) || u.removeAttribute(r), fn.delete(u)), m || u.removeAttribute(n);
    }), or--, or || (Pt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), gn = {});
  };
}, Yr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Ru(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Pu(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Le = function() {
  return Le = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Le.apply(this, arguments);
};
function Qs(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Nu(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Cn = "right-scroll-bar-position", Sn = "width-before-scroll-bar", Mu = "with-scroll-bars-hidden", Iu = "--removed-body-scroll-bar-size";
function sr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Au(e, t) {
  var n = Ii(function() {
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
var ku = typeof window < "u" ? d.useLayoutEffect : d.useEffect, Vo = /* @__PURE__ */ new WeakMap();
function Tu(e, t) {
  var n = Au(null, function(r) {
    return e.forEach(function(o) {
      return sr(o, r);
    });
  });
  return ku(function() {
    var r = Vo.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), a = n.current;
      o.forEach(function(i) {
        s.has(i) || sr(i, null);
      }), s.forEach(function(i) {
        o.has(i) || sr(i, a);
      });
    }
    Vo.set(n, e);
  }, [e]), n;
}
function Ou(e) {
  return e;
}
function Du(e, t) {
  t === void 0 && (t = Ou);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, r);
      return n.push(a), function() {
        n = n.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(s);
      }
      n = {
        push: function(i) {
          return s(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var a = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(s), a = n;
      }
      var l = function() {
        var f = a;
        a = [], f.forEach(s);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(f) {
          a.push(f), c();
        },
        filter: function(f) {
          return a = a.filter(f), n;
        }
      };
    }
  };
  return o;
}
function $u(e) {
  e === void 0 && (e = {});
  var t = Du(null);
  return t.options = Le({ async: !0, ssr: !1 }, e), t;
}
var Js = function(e) {
  var t = e.sideCar, n = Qs(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return d.createElement(r, Le({}, n));
};
Js.isSideCarExport = !0;
function Fu(e, t) {
  return e.useMedium(t), Js;
}
var ea = $u(), ar = function() {
}, zn = d.forwardRef(function(e, t) {
  var n = d.useRef(null), r = d.useState({
    onScrollCapture: ar,
    onWheelCapture: ar,
    onTouchMoveCapture: ar
  }), o = r[0], s = r[1], a = e.forwardProps, i = e.children, l = e.className, c = e.removeScrollBar, f = e.enabled, u = e.shards, g = e.sideCar, m = e.noRelative, b = e.noIsolation, p = e.inert, v = e.allowPinchZoom, y = e.as, x = y === void 0 ? "div" : y, w = e.gapMode, C = Qs(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = g, N = Tu([n, t]), R = Le(Le({}, C), o);
  return d.createElement(
    d.Fragment,
    null,
    f && d.createElement(S, { sideCar: ea, removeScrollBar: c, shards: u, noRelative: m, noIsolation: b, inert: p, setCallbacks: s, allowPinchZoom: !!v, lockRef: n, gapMode: w }),
    a ? d.cloneElement(d.Children.only(i), Le(Le({}, R), { ref: N })) : d.createElement(x, Le({}, R, { className: l, ref: N }), i)
  );
});
zn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
zn.classNames = {
  fullWidth: Sn,
  zeroRight: Cn
};
var Vu = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Lu() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Vu();
  return t && e.setAttribute("nonce", t), e;
}
function Bu(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function zu(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Hu = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Lu()) && (Bu(t, n), zu(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ju = function() {
  var e = Hu();
  return function(t, n) {
    d.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ta = function() {
  var e = ju(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Gu = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ir = function(e) {
  return parseInt(e || "", 10) || 0;
}, Wu = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ir(n), ir(r), ir(o)];
}, Uu = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Gu;
  var t = Wu(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, qu = ta(), Tt = "data-scroll-locked", Yu = function(e, t, n, r) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Mu, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Tt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Cn, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Sn, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Cn, " .").concat(Cn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Sn, " .").concat(Sn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Tt, `] {
    `).concat(Iu, ": ").concat(i, `px;
  }
`);
}, Lo = function() {
  var e = parseInt(document.body.getAttribute(Tt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Xu = function() {
  d.useEffect(function() {
    return document.body.setAttribute(Tt, (Lo() + 1).toString()), function() {
      var e = Lo() - 1;
      e <= 0 ? document.body.removeAttribute(Tt) : document.body.setAttribute(Tt, e.toString());
    };
  }, []);
}, Ku = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Xu();
  var s = d.useMemo(function() {
    return Uu(o);
  }, [o]);
  return d.createElement(qu, { styles: Yu(s, !t, o, n ? "" : "!important") });
}, yr = !1;
if (typeof window < "u")
  try {
    var pn = Object.defineProperty({}, "passive", {
      get: function() {
        return yr = !0, !0;
      }
    });
    window.addEventListener("test", pn, pn), window.removeEventListener("test", pn, pn);
  } catch {
    yr = !1;
  }
var Nt = yr ? { passive: !1 } : !1, Zu = function(e) {
  return e.tagName === "TEXTAREA";
}, na = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Zu(e) && n[t] === "visible")
  );
}, Qu = function(e) {
  return na(e, "overflowY");
}, Ju = function(e) {
  return na(e, "overflowX");
}, Bo = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = ra(e, r);
    if (o) {
      var s = oa(e, r), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, ed = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, td = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ra = function(e, t) {
  return e === "v" ? Qu(t) : Ju(t);
}, oa = function(e, t) {
  return e === "v" ? ed(t) : td(t);
}, nd = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, rd = function(e, t, n, r, o) {
  var s = nd(e, window.getComputedStyle(t).direction), a = s * r, i = n.target, l = t.contains(i), c = !1, f = a > 0, u = 0, g = 0;
  do {
    if (!i)
      break;
    var m = oa(e, i), b = m[0], p = m[1], v = m[2], y = p - v - s * b;
    (b || y) && ra(e, i) && (u += y, g += b);
    var x = i.parentNode;
    i = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (f && Math.abs(u) < 1 || !f && Math.abs(g) < 1) && (c = !0), c;
}, mn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, zo = function(e) {
  return [e.deltaX, e.deltaY];
}, Ho = function(e) {
  return e && "current" in e ? e.current : e;
}, od = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, sd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ad = 0, Mt = [];
function id(e) {
  var t = d.useRef([]), n = d.useRef([0, 0]), r = d.useRef(), o = d.useState(ad++)[0], s = d.useState(ta)[0], a = d.useRef(e);
  d.useEffect(function() {
    a.current = e;
  }, [e]), d.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = Nu([e.lockRef.current], (e.shards || []).map(Ho), !0).filter(Boolean);
      return p.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = d.useCallback(function(p, v) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !a.current.allowPinchZoom;
    var y = mn(p), x = n.current, w = "deltaX" in p ? p.deltaX : x[0] - y[0], C = "deltaY" in p ? p.deltaY : x[1] - y[1], S, N = p.target, R = Math.abs(w) > Math.abs(C) ? "h" : "v";
    if ("touches" in p && R === "h" && N.type === "range")
      return !1;
    var E = Bo(R, N);
    if (!E)
      return !0;
    if (E ? S = R : (S = R === "v" ? "h" : "v", E = Bo(R, N)), !E)
      return !1;
    if (!r.current && "changedTouches" in p && (w || C) && (r.current = S), !S)
      return !0;
    var $ = r.current || S;
    return rd($, v, p, $ === "h" ? w : C);
  }, []), l = d.useCallback(function(p) {
    var v = p;
    if (!(!Mt.length || Mt[Mt.length - 1] !== s)) {
      var y = "deltaY" in v ? zo(v) : mn(v), x = t.current.filter(function(S) {
        return S.name === v.type && (S.target === v.target || v.target === S.shadowParent) && od(S.delta, y);
      })[0];
      if (x && x.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!x) {
        var w = (a.current.shards || []).map(Ho).filter(Boolean).filter(function(S) {
          return S.contains(v.target);
        }), C = w.length > 0 ? i(v, w[0]) : !a.current.noIsolation;
        C && v.cancelable && v.preventDefault();
      }
    }
  }, []), c = d.useCallback(function(p, v, y, x) {
    var w = { name: p, delta: v, target: y, should: x, shadowParent: ld(y) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== w;
      });
    }, 1);
  }, []), f = d.useCallback(function(p) {
    n.current = mn(p), r.current = void 0;
  }, []), u = d.useCallback(function(p) {
    c(p.type, zo(p), p.target, i(p, e.lockRef.current));
  }, []), g = d.useCallback(function(p) {
    c(p.type, mn(p), p.target, i(p, e.lockRef.current));
  }, []);
  d.useEffect(function() {
    return Mt.push(s), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", l, Nt), document.addEventListener("touchmove", l, Nt), document.addEventListener("touchstart", f, Nt), function() {
      Mt = Mt.filter(function(p) {
        return p !== s;
      }), document.removeEventListener("wheel", l, Nt), document.removeEventListener("touchmove", l, Nt), document.removeEventListener("touchstart", f, Nt);
    };
  }, []);
  var m = e.removeScrollBar, b = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    b ? d.createElement(s, { styles: sd(o) }) : null,
    m ? d.createElement(Ku, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function ld(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const cd = Fu(ea, id);
var Hn = d.forwardRef(function(e, t) {
  return d.createElement(zn, Le({}, e, { ref: t, sideCar: cd }));
});
Hn.classNames = zn.classNames;
var ud = [" ", "Enter", "ArrowUp", "ArrowDown"], dd = [" ", "Enter"], Ct = "Select", [jn, Gn, fd] = Al(Ct), [Lt, zp] = Jt(Ct, [
  fd,
  Ln
]), Wn = Ln(), [gd, it] = Lt(Ct), [pd, md] = Lt(Ct), sa = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: a,
    defaultValue: i,
    onValueChange: l,
    dir: c,
    name: f,
    autoComplete: u,
    disabled: g,
    required: m,
    form: b
  } = e, p = Wn(t), [v, y] = d.useState(null), [x, w] = d.useState(null), [C, S] = d.useState(!1), N = Tl(c), [R, E] = Mn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Ct
  }), [$, D] = Mn({
    prop: a,
    defaultProp: i,
    onChange: l,
    caller: Ct
  }), L = d.useRef(null), A = v ? b || !!v.closest("form") : !0, [j, B] = d.useState(/* @__PURE__ */ new Set()), z = Array.from(j).map((P) => P.props.value).join(";");
  return /* @__PURE__ */ h(qs, { ...p, children: /* @__PURE__ */ I(
    gd,
    {
      required: m,
      scope: t,
      trigger: v,
      onTriggerChange: y,
      valueNode: x,
      onValueNodeChange: w,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: S,
      contentId: bt(),
      value: $,
      onValueChange: D,
      open: R,
      onOpenChange: E,
      dir: N,
      triggerPointerDownPosRef: L,
      disabled: g,
      children: [
        /* @__PURE__ */ h(jn.Provider, { scope: t, children: /* @__PURE__ */ h(
          pd,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: d.useCallback((P) => {
              B((V) => new Set(V).add(P));
            }, []),
            onNativeOptionRemove: d.useCallback((P) => {
              B((V) => {
                const k = new Set(V);
                return k.delete(P), k;
              });
            }, []),
            children: n
          }
        ) }),
        A ? /* @__PURE__ */ I(
          Pa,
          {
            "aria-hidden": !0,
            required: m,
            tabIndex: -1,
            name: f,
            autoComplete: u,
            value: $,
            onChange: (P) => D(P.target.value),
            disabled: g,
            form: b,
            children: [
              $ === void 0 ? /* @__PURE__ */ h("option", { value: "" }) : null,
              Array.from(j)
            ]
          },
          z
        ) : null
      ]
    }
  ) });
};
sa.displayName = Ct;
var aa = "SelectTrigger", ia = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Wn(n), a = it(aa, n), i = a.disabled || r, l = ue(t, a.onTriggerChange), c = Gn(n), f = d.useRef("touch"), [u, g, m] = Ma((p) => {
      const v = c().filter((w) => !w.disabled), y = v.find((w) => w.value === a.value), x = Ia(v, p, y);
      x !== void 0 && a.onValueChange(x.value);
    }), b = (p) => {
      i || (a.onOpenChange(!0), m()), p && (a.triggerPointerDownPosRef.current = {
        x: Math.round(p.pageX),
        y: Math.round(p.pageY)
      });
    };
    return /* @__PURE__ */ h(qr, { asChild: !0, ...s, children: /* @__PURE__ */ h(
      ie.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": Na(a.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: oe(o.onClick, (p) => {
          p.currentTarget.focus(), f.current !== "mouse" && b(p);
        }),
        onPointerDown: oe(o.onPointerDown, (p) => {
          f.current = p.pointerType;
          const v = p.target;
          v.hasPointerCapture(p.pointerId) && v.releasePointerCapture(p.pointerId), p.button === 0 && p.ctrlKey === !1 && p.pointerType === "mouse" && (b(p), p.preventDefault());
        }),
        onKeyDown: oe(o.onKeyDown, (p) => {
          const v = u.current !== "";
          !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && g(p.key), !(v && p.key === " ") && ud.includes(p.key) && (b(), p.preventDefault());
        })
      }
    ) });
  }
);
ia.displayName = aa;
var la = "SelectValue", ca = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: a = "", ...i } = e, l = it(la, n), { onValueNodeHasChildrenChange: c } = l, f = s !== void 0, u = ue(t, l.onValueNodeChange);
    return we(() => {
      c(f);
    }, [c, f]), /* @__PURE__ */ h(
      ie.span,
      {
        ...i,
        ref: u,
        style: { pointerEvents: "none" },
        children: Na(l.value) ? /* @__PURE__ */ h(Oe, { children: a }) : s
      }
    );
  }
);
ca.displayName = la;
var hd = "SelectIcon", ua = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ h(ie.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
ua.displayName = hd;
var vd = "SelectPortal", da = (e) => /* @__PURE__ */ h(Bn, { asChild: !0, ...e });
da.displayName = vd;
var St = "SelectContent", fa = d.forwardRef(
  (e, t) => {
    const n = it(St, e.__scopeSelect), [r, o] = d.useState();
    if (we(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? kn.createPortal(
        /* @__PURE__ */ h(ga, { scope: e.__scopeSelect, children: /* @__PURE__ */ h(jn.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ h("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ h(pa, { ...e, ref: t });
  }
);
fa.displayName = St;
var ke = 10, [ga, lt] = Lt(St), bd = "SelectContentImpl", xd = /* @__PURE__ */ xt("SelectContent.RemoveScroll"), pa = d.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: i,
      sideOffset: l,
      align: c,
      alignOffset: f,
      arrowPadding: u,
      collisionBoundary: g,
      collisionPadding: m,
      sticky: b,
      hideWhenDetached: p,
      avoidCollisions: v,
      //
      ...y
    } = e, x = it(St, n), [w, C] = d.useState(null), [S, N] = d.useState(null), R = ue(t, (T) => C(T)), [E, $] = d.useState(null), [D, L] = d.useState(
      null
    ), A = Gn(n), [j, B] = d.useState(!1), z = d.useRef(!1);
    d.useEffect(() => {
      if (w) return Yr(w);
    }, [w]), Fr();
    const P = d.useCallback(
      (T) => {
        const [K, ...se] = A().map((ee) => ee.ref.current), [te] = se.slice(-1), H = document.activeElement;
        for (const ee of T)
          if (ee === H || (ee == null || ee.scrollIntoView({ block: "nearest" }), ee === K && S && (S.scrollTop = 0), ee === te && S && (S.scrollTop = S.scrollHeight), ee == null || ee.focus(), document.activeElement !== H)) return;
      },
      [A, S]
    ), V = d.useCallback(
      () => P([E, w]),
      [P, E, w]
    );
    d.useEffect(() => {
      j && V();
    }, [j, V]);
    const { onOpenChange: k, triggerPointerDownPosRef: M } = x;
    d.useEffect(() => {
      if (w) {
        let T = { x: 0, y: 0 };
        const K = (te) => {
          var H, ee;
          T = {
            x: Math.abs(Math.round(te.pageX) - (((H = M.current) == null ? void 0 : H.x) ?? 0)),
            y: Math.abs(Math.round(te.pageY) - (((ee = M.current) == null ? void 0 : ee.y) ?? 0))
          };
        }, se = (te) => {
          T.x <= 10 && T.y <= 10 ? te.preventDefault() : w.contains(te.target) || k(!1), document.removeEventListener("pointermove", K), M.current = null;
        };
        return M.current !== null && (document.addEventListener("pointermove", K), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", K), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [w, k, M]), d.useEffect(() => {
      const T = () => k(!1);
      return window.addEventListener("blur", T), window.addEventListener("resize", T), () => {
        window.removeEventListener("blur", T), window.removeEventListener("resize", T);
      };
    }, [k]);
    const [G, O] = Ma((T) => {
      const K = A().filter((H) => !H.disabled), se = K.find((H) => H.ref.current === document.activeElement), te = Ia(K, T, se);
      te && setTimeout(() => te.ref.current.focus());
    }), W = d.useCallback(
      (T, K, se) => {
        const te = !z.current && !se;
        (x.value !== void 0 && x.value === K || te) && ($(T), te && (z.current = !0));
      },
      [x.value]
    ), X = d.useCallback(() => w == null ? void 0 : w.focus(), [w]), Q = d.useCallback(
      (T, K, se) => {
        const te = !z.current && !se;
        (x.value !== void 0 && x.value === K || te) && L(T);
      },
      [x.value]
    ), le = r === "popper" ? wr : ma, Y = le === wr ? {
      side: i,
      sideOffset: l,
      align: c,
      alignOffset: f,
      arrowPadding: u,
      collisionBoundary: g,
      collisionPadding: m,
      sticky: b,
      hideWhenDetached: p,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ h(
      ga,
      {
        scope: n,
        content: w,
        viewport: S,
        onViewportChange: N,
        itemRefCallback: W,
        selectedItem: E,
        onItemLeave: X,
        itemTextRefCallback: Q,
        focusSelectedItem: V,
        selectedItemText: D,
        position: r,
        isPositioned: j,
        searchRef: G,
        children: /* @__PURE__ */ h(Hn, { as: xd, allowPinchZoom: !0, children: /* @__PURE__ */ h(
          Dn,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (T) => {
              T.preventDefault();
            },
            onUnmountAutoFocus: oe(o, (T) => {
              var K;
              (K = x.trigger) == null || K.focus({ preventScroll: !0 }), T.preventDefault();
            }),
            children: /* @__PURE__ */ h(
              On,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (T) => T.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ h(
                  le,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (T) => T.preventDefault(),
                    ...y,
                    ...Y,
                    onPlaced: () => B(!0),
                    ref: R,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: oe(y.onKeyDown, (T) => {
                      const K = T.ctrlKey || T.altKey || T.metaKey;
                      if (T.key === "Tab" && T.preventDefault(), !K && T.key.length === 1 && O(T.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(T.key)) {
                        let te = A().filter((H) => !H.disabled).map((H) => H.ref.current);
                        if (["ArrowUp", "End"].includes(T.key) && (te = te.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(T.key)) {
                          const H = T.target, ee = te.indexOf(H);
                          te = te.slice(ee + 1);
                        }
                        setTimeout(() => P(te)), T.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
pa.displayName = bd;
var yd = "SelectItemAlignedPosition", ma = d.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = it(St, n), a = lt(St, n), [i, l] = d.useState(null), [c, f] = d.useState(null), u = ue(t, (R) => f(R)), g = Gn(n), m = d.useRef(!1), b = d.useRef(!0), { viewport: p, selectedItem: v, selectedItemText: y, focusSelectedItem: x } = a, w = d.useCallback(() => {
    if (s.trigger && s.valueNode && i && c && p && v && y) {
      const R = s.trigger.getBoundingClientRect(), E = c.getBoundingClientRect(), $ = s.valueNode.getBoundingClientRect(), D = y.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const H = D.left - E.left, ee = $.left - H, fe = R.left - ee, ge = R.width + fe, Ke = Math.max(ge, E.width), Ne = window.innerWidth - ke, Ce = yo(ee, [
          ke,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ke, Ne - Ke)
        ]);
        i.style.minWidth = ge + "px", i.style.left = Ce + "px";
      } else {
        const H = E.right - D.right, ee = window.innerWidth - $.right - H, fe = window.innerWidth - R.right - ee, ge = R.width + fe, Ke = Math.max(ge, E.width), Ne = window.innerWidth - ke, Ce = yo(ee, [
          ke,
          Math.max(ke, Ne - Ke)
        ]);
        i.style.minWidth = ge + "px", i.style.right = Ce + "px";
      }
      const L = g(), A = window.innerHeight - ke * 2, j = p.scrollHeight, B = window.getComputedStyle(c), z = parseInt(B.borderTopWidth, 10), P = parseInt(B.paddingTop, 10), V = parseInt(B.borderBottomWidth, 10), k = parseInt(B.paddingBottom, 10), M = z + P + j + k + V, G = Math.min(v.offsetHeight * 5, M), O = window.getComputedStyle(p), W = parseInt(O.paddingTop, 10), X = parseInt(O.paddingBottom, 10), Q = R.top + R.height / 2 - ke, le = A - Q, Y = v.offsetHeight / 2, T = v.offsetTop + Y, K = z + P + T, se = M - K;
      if (K <= Q) {
        const H = L.length > 0 && v === L[L.length - 1].ref.current;
        i.style.bottom = "0px";
        const ee = c.clientHeight - p.offsetTop - p.offsetHeight, fe = Math.max(
          le,
          Y + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (H ? X : 0) + ee + V
        ), ge = K + fe;
        i.style.height = ge + "px";
      } else {
        const H = L.length > 0 && v === L[0].ref.current;
        i.style.top = "0px";
        const fe = Math.max(
          Q,
          z + p.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (H ? W : 0) + Y
        ) + se;
        i.style.height = fe + "px", p.scrollTop = K - Q + p.offsetTop;
      }
      i.style.margin = `${ke}px 0`, i.style.minHeight = G + "px", i.style.maxHeight = A + "px", r == null || r(), requestAnimationFrame(() => m.current = !0);
    }
  }, [
    g,
    s.trigger,
    s.valueNode,
    i,
    c,
    p,
    v,
    y,
    s.dir,
    r
  ]);
  we(() => w(), [w]);
  const [C, S] = d.useState();
  we(() => {
    c && S(window.getComputedStyle(c).zIndex);
  }, [c]);
  const N = d.useCallback(
    (R) => {
      R && b.current === !0 && (w(), x == null || x(), b.current = !1);
    },
    [w, x]
  );
  return /* @__PURE__ */ h(
    Cd,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: N,
      children: /* @__PURE__ */ h(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ h(
            ie.div,
            {
              ...o,
              ref: u,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
ma.displayName = yd;
var wd = "SelectPopperPosition", wr = d.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = ke,
    ...s
  } = e, a = Wn(n);
  return /* @__PURE__ */ h(
    Ys,
    {
      ...a,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
wr.displayName = wd;
var [Cd, Xr] = Lt(St, {}), Cr = "SelectViewport", ha = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = lt(Cr, n), a = Xr(Cr, n), i = ue(t, s.onViewportChange), l = d.useRef(0);
    return /* @__PURE__ */ I(Oe, { children: [
      /* @__PURE__ */ h(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ h(jn.Slot, { scope: n, children: /* @__PURE__ */ h(
        ie.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: i,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: oe(o.onScroll, (c) => {
            const f = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: g } = a;
            if (g != null && g.current && u) {
              const m = Math.abs(l.current - f.scrollTop);
              if (m > 0) {
                const b = window.innerHeight - ke * 2, p = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), y = Math.max(p, v);
                if (y < b) {
                  const x = y + m, w = Math.min(b, x), C = x - w;
                  u.style.height = w + "px", u.style.bottom === "0px" && (f.scrollTop = C > 0 ? C : 0, u.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
ha.displayName = Cr;
var va = "SelectGroup", [Sd, _d] = Lt(va), ba = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = bt();
    return /* @__PURE__ */ h(Sd, { scope: n, id: o, children: /* @__PURE__ */ h(ie.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
ba.displayName = va;
var xa = "SelectLabel", ya = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = _d(xa, n);
    return /* @__PURE__ */ h(ie.div, { id: o.id, ...r, ref: t });
  }
);
ya.displayName = xa;
var In = "SelectItem", [Rd, wa] = Lt(In), Ca = d.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = it(In, n), l = lt(In, n), c = i.value === r, [f, u] = d.useState(s ?? ""), [g, m] = d.useState(!1), b = ue(
      t,
      (x) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, x, r, o);
      }
    ), p = bt(), v = d.useRef("touch"), y = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ h(
      Rd,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: p,
        isSelected: c,
        onItemTextChange: d.useCallback((x) => {
          u((w) => w || ((x == null ? void 0 : x.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ h(
          jn.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ h(
              ie.div,
              {
                role: "option",
                "aria-labelledby": p,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": c && g,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: b,
                onFocus: oe(a.onFocus, () => m(!0)),
                onBlur: oe(a.onBlur, () => m(!1)),
                onClick: oe(a.onClick, () => {
                  v.current !== "mouse" && y();
                }),
                onPointerUp: oe(a.onPointerUp, () => {
                  v.current === "mouse" && y();
                }),
                onPointerDown: oe(a.onPointerDown, (x) => {
                  v.current = x.pointerType;
                }),
                onPointerMove: oe(a.onPointerMove, (x) => {
                  var w;
                  v.current = x.pointerType, o ? (w = l.onItemLeave) == null || w.call(l) : v.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: oe(a.onPointerLeave, (x) => {
                  var w;
                  x.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: oe(a.onKeyDown, (x) => {
                  var C;
                  ((C = l.searchRef) == null ? void 0 : C.current) !== "" && x.key === " " || (dd.includes(x.key) && y(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Ca.displayName = In;
var Yt = "SelectItemText", Sa = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, a = it(Yt, n), i = lt(Yt, n), l = wa(Yt, n), c = md(Yt, n), [f, u] = d.useState(null), g = ue(
      t,
      (y) => u(y),
      l.onItemTextChange,
      (y) => {
        var x;
        return (x = i.itemTextRefCallback) == null ? void 0 : x.call(i, y, l.value, l.disabled);
      }
    ), m = f == null ? void 0 : f.textContent, b = d.useMemo(
      () => /* @__PURE__ */ h("option", { value: l.value, disabled: l.disabled, children: m }, l.value),
      [l.disabled, l.value, m]
    ), { onNativeOptionAdd: p, onNativeOptionRemove: v } = c;
    return we(() => (p(b), () => v(b)), [p, v, b]), /* @__PURE__ */ I(Oe, { children: [
      /* @__PURE__ */ h(ie.span, { id: l.textId, ...s, ref: g }),
      l.isSelected && a.valueNode && !a.valueNodeHasChildren ? kn.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
Sa.displayName = Yt;
var _a = "SelectItemIndicator", Ra = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return wa(_a, n).isSelected ? /* @__PURE__ */ h(ie.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Ra.displayName = _a;
var Sr = "SelectScrollUpButton", Ed = d.forwardRef((e, t) => {
  const n = lt(Sr, e.__scopeSelect), r = Xr(Sr, e.__scopeSelect), [o, s] = d.useState(!1), a = ue(t, r.onScrollButtonChange);
  return we(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const c = l.scrollTop > 0;
        s(c);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ h(
    Ea,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: l } = n;
        i && l && (i.scrollTop = i.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Ed.displayName = Sr;
var _r = "SelectScrollDownButton", Pd = d.forwardRef((e, t) => {
  const n = lt(_r, e.__scopeSelect), r = Xr(_r, e.__scopeSelect), [o, s] = d.useState(!1), a = ue(t, r.onScrollButtonChange);
  return we(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const c = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < c;
        s(f);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ h(
    Ea,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: l } = n;
        i && l && (i.scrollTop = i.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Pd.displayName = _r;
var Ea = d.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = lt("SelectScrollButton", n), a = d.useRef(null), i = Gn(n), l = d.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return d.useEffect(() => () => l(), [l]), we(() => {
    var f;
    const c = i().find((u) => u.ref.current === document.activeElement);
    (f = c == null ? void 0 : c.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ h(
    ie.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: oe(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: oe(o.onPointerMove, () => {
        var c;
        (c = s.onItemLeave) == null || c.call(s), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: oe(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), Nd = "SelectSeparator", Md = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ h(ie.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Md.displayName = Nd;
var Rr = "SelectArrow", Id = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Wn(n), s = it(Rr, n), a = lt(Rr, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ h(Xs, { ...o, ...r, ref: t }) : null;
  }
);
Id.displayName = Rr;
var Ad = "SelectBubbleInput", Pa = d.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = d.useRef(null), s = ue(r, o), a = Cu(t);
    return d.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (a !== t && f) {
        const u = new Event("change", { bubbles: !0 });
        f.call(i, t), i.dispatchEvent(u);
      }
    }, [a, t]), /* @__PURE__ */ h(
      ie.select,
      {
        ...n,
        style: { ...Ks, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Pa.displayName = Ad;
function Na(e) {
  return e === "" || e === void 0;
}
function Ma(e) {
  const t = yt(e), n = d.useRef(""), r = d.useRef(0), o = d.useCallback(
    (a) => {
      const i = n.current + a;
      t(i), function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(i);
    },
    [t]
  ), s = d.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return d.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function Ia(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = kd(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((c) => c !== n));
  const l = a.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function kd(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Td = sa, Od = ia, Dd = ca, $d = ua, Fd = da, Vd = fa, Ld = ha, Bd = ba, zd = ya, jo = Ca, Go = Sa, Wo = Ra;
const Hd = ne(
  "flex h-10 w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-inter",
  {
    variants: {
      tone: {
        magic: "border-purple-500 focus:ring-purple-500",
        default: "border-gray-300 focus:ring-blue-500"
      },
      error: {
        true: "border-red-500 focus:ring-red-500",
        false: ""
      },
      labelInline: {
        true: "rounded-r-lg rounded-l-none border-l-0",
        false: ""
      }
    },
    defaultVariants: {
      tone: "default",
      error: !1,
      labelInline: !1
    }
  }
), jd = ne(
  "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 font-inter",
  {
    variants: {
      position: {
        "item-aligned": "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
        popper: "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
      }
    },
    defaultVariants: {
      position: "popper"
    }
  }
), Uo = ne(
  "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      disabled: {
        true: "opacity-50 pointer-events-none",
        false: ""
      }
    },
    defaultVariants: {
      disabled: !1
    }
  }
), qo = (e) => typeof e == "string" ? { value: e, label: e } : e, Gd = (e) => typeof e == "object" && "title" in e && "options" in e, Wd = d.forwardRef(
  ({
    options: e = [],
    label: t,
    labelAction: n,
    labelHidden: r = !1,
    labelInline: o = !1,
    disabled: s = !1,
    helpText: a,
    placeholder: i,
    id: l,
    name: c,
    value: f,
    error: u,
    onChange: g,
    onFocus: m,
    onBlur: b,
    requiredIndicator: p = !1,
    tone: v,
    className: y,
    ...x
  }, w) => {
    const C = d.useId(), S = l || C, N = d.useCallback(
      (j) => {
        g && g(j, S);
      },
      [g, S]
    ), R = F(
      Hd({
        tone: v === "magic" ? "magic" : "default",
        error: !!u,
        labelInline: o
      }),
      y
    ), E = n && /* @__PURE__ */ h(
      de,
      {
        variant: "plain",
        size: "micro",
        onClick: n.onAction,
        url: n.url,
        external: n.external,
        target: n.target,
        onMouseEnter: n.onMouseEnter,
        onTouchStart: n.onTouchStart,
        accessibilityLabel: n.accessibilityLabel,
        children: n.content
      }
    ), $ = /* @__PURE__ */ I(
      "div",
      {
        className: F(
          "flex items-center justify-between",
          o && "sr-only",
          r && "sr-only"
        ),
        children: [
          /* @__PURE__ */ I(
            "label",
            {
              htmlFor: S,
              className: F(
                "block text-sm font-medium text-gray-900 mb-1",
                o && "sr-only",
                r && "sr-only"
              ),
              children: [
                t,
                p && /* @__PURE__ */ h("span", { className: "text-red-500 ml-1", children: "*" })
              ]
            }
          ),
          !o && E
        ]
      }
    ), D = o && !r && /* @__PURE__ */ I("div", { className: "flex items-center bg-gray-50 border border-gray-300 border-r-0 rounded-l-lg px-3 py-2 text-sm font-medium text-gray-700", children: [
      t,
      p && /* @__PURE__ */ h("span", { className: "text-red-500 ml-1", children: "*" }),
      E && /* @__PURE__ */ h("div", { className: "ml-2", children: E })
    ] }), L = a && /* @__PURE__ */ h("div", { className: "mt-1 text-sm text-gray-600", children: a }), A = u && typeof u == "string" && /* @__PURE__ */ h("div", { className: "mt-1 text-sm text-red-600", children: u });
    return /* @__PURE__ */ I("div", { className: "w-full", children: [
      $,
      /* @__PURE__ */ I("div", { className: F("flex", o && "w-full"), children: [
        D,
        /* @__PURE__ */ I(
          Td,
          {
            value: f,
            onValueChange: N,
            disabled: s,
            name: c,
            ...x,
            children: [
              /* @__PURE__ */ I(
                Od,
                {
                  ref: w,
                  id: S,
                  className: R,
                  onFocus: m,
                  onBlur: b,
                  children: [
                    /* @__PURE__ */ h(Dd, { placeholder: i }),
                    /* @__PURE__ */ h($d, { asChild: !0, children: /* @__PURE__ */ h(Tn, { className: "h-4 w-4 opacity-50" }) })
                  ]
                }
              ),
              /* @__PURE__ */ h(Fd, { children: /* @__PURE__ */ h(
                Vd,
                {
                  className: F(jd()),
                  position: "popper",
                  sideOffset: 4,
                  children: /* @__PURE__ */ h(Ld, { className: "p-1", children: e.map((j, B) => {
                    if (Gd(j))
                      return /* @__PURE__ */ I(Bd, { children: [
                        /* @__PURE__ */ h(zd, { className: "py-1.5 pl-8 pr-2 text-sm font-semibold text-gray-900", children: j.title }),
                        j.options.map((z) => {
                          const P = qo(z);
                          return /* @__PURE__ */ I(
                            jo,
                            {
                              value: P.value,
                              disabled: P.disabled,
                              className: F(
                                Uo({
                                  disabled: P.disabled
                                })
                              ),
                              children: [
                                /* @__PURE__ */ h("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ h(Wo, { children: /* @__PURE__ */ h(_n, { className: "h-4 w-4" }) }) }),
                                /* @__PURE__ */ h(Go, { children: /* @__PURE__ */ I("div", { className: "flex items-center", children: [
                                  P.prefix && /* @__PURE__ */ h("span", { className: "mr-2", children: P.prefix }),
                                  P.label
                                ] }) })
                              ]
                            },
                            P.key || P.value
                          );
                        })
                      ] }, `group-${B}`);
                    {
                      const z = qo(j);
                      return /* @__PURE__ */ I(
                        jo,
                        {
                          value: z.value,
                          disabled: z.disabled,
                          className: F(
                            Uo({
                              disabled: z.disabled
                            })
                          ),
                          children: [
                            /* @__PURE__ */ h("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ h(Wo, { children: /* @__PURE__ */ h(_n, { className: "h-4 w-4" }) }) }),
                            /* @__PURE__ */ h(Go, { children: /* @__PURE__ */ I("div", { className: "flex items-center", children: [
                              z.prefix && /* @__PURE__ */ h("span", { className: "mr-2", children: z.prefix }),
                              z.label
                            ] }) })
                          ]
                        },
                        z.key || z.value
                      );
                    }
                  }) })
                }
              ) })
            ]
          }
        )
      ] }),
      L,
      A
    ] });
  }
);
Wd.displayName = "Select";
function Ud(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var Bt = (e) => {
  const { present: t, children: n } = e, r = qd(t), o = typeof n == "function" ? n({ present: r.isPresent }) : d.Children.only(n), s = ue(r.ref, Yd(o));
  return typeof n == "function" || r.isPresent ? d.cloneElement(o, { ref: s }) : null;
};
Bt.displayName = "Presence";
function qd(e) {
  const [t, n] = d.useState(), r = d.useRef(null), o = d.useRef(e), s = d.useRef("none"), a = e ? "mounted" : "unmounted", [i, l] = Ud(a, {
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
  return d.useEffect(() => {
    const c = hn(r.current);
    s.current = i === "mounted" ? c : "none";
  }, [i]), we(() => {
    const c = r.current, f = o.current;
    if (f !== e) {
      const g = s.current, m = hn(c);
      e ? l("MOUNT") : m === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(f && g !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), we(() => {
    if (t) {
      let c;
      const f = t.ownerDocument.defaultView ?? window, u = (m) => {
        const p = hn(r.current).includes(m.animationName);
        if (m.target === t && p && (l("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, g = (m) => {
        m.target === t && (s.current = hn(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        f.clearTimeout(c), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: d.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function hn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Yd(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Un = "Popover", [Aa, Hp] = Jt(Un, [
  Ln
]), tn = Ln(), [Xd, ct] = Aa(Un), ka = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !1
  } = e, i = tn(t), l = d.useRef(null), [c, f] = d.useState(!1), [u, g] = Mn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Un
  });
  return /* @__PURE__ */ h(qs, { ...i, children: /* @__PURE__ */ h(
    Xd,
    {
      scope: t,
      contentId: bt(),
      triggerRef: l,
      open: u,
      onOpenChange: g,
      onOpenToggle: d.useCallback(() => g((m) => !m), [g]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: d.useCallback(() => f(!0), []),
      onCustomAnchorRemove: d.useCallback(() => f(!1), []),
      modal: a,
      children: n
    }
  ) });
};
ka.displayName = Un;
var Ta = "PopoverAnchor", Kd = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ct(Ta, n), s = tn(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = o;
    return d.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ h(qr, { ...s, ...r, ref: t });
  }
);
Kd.displayName = Ta;
var Oa = "PopoverTrigger", Da = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ct(Oa, n), s = tn(n), a = ue(t, o.triggerRef), i = /* @__PURE__ */ h(
      ie.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ba(o.open),
        ...r,
        ref: a,
        onClick: oe(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ h(qr, { asChild: !0, ...s, children: i });
  }
);
Da.displayName = Oa;
var Kr = "PopoverPortal", [Zd, Qd] = Aa(Kr, {
  forceMount: void 0
}), $a = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = ct(Kr, t);
  return /* @__PURE__ */ h(Zd, { scope: t, forceMount: n, children: /* @__PURE__ */ h(Bt, { present: n || s.open, children: /* @__PURE__ */ h(Bn, { asChild: !0, container: o, children: r }) }) });
};
$a.displayName = Kr;
var Dt = "PopoverContent", Fa = d.forwardRef(
  (e, t) => {
    const n = Qd(Dt, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = ct(Dt, e.__scopePopover);
    return /* @__PURE__ */ h(Bt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ h(ef, { ...o, ref: t }) : /* @__PURE__ */ h(tf, { ...o, ref: t }) });
  }
);
Fa.displayName = Dt;
var Jd = /* @__PURE__ */ xt("PopoverContent.RemoveScroll"), ef = d.forwardRef(
  (e, t) => {
    const n = ct(Dt, e.__scopePopover), r = d.useRef(null), o = ue(t, r), s = d.useRef(!1);
    return d.useEffect(() => {
      const a = r.current;
      if (a) return Yr(a);
    }, []), /* @__PURE__ */ h(Hn, { as: Jd, allowPinchZoom: !0, children: /* @__PURE__ */ h(
      Va,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: oe(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), s.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: oe(
          e.onPointerDownOutside,
          (a) => {
            const i = a.detail.originalEvent, l = i.button === 0 && i.ctrlKey === !0, c = i.button === 2 || l;
            s.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: oe(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), tf = d.forwardRef(
  (e, t) => {
    const n = ct(Dt, e.__scopePopover), r = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ h(
      Va,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var a, i;
          (a = e.onCloseAutoFocus) == null || a.call(e, s), s.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(a)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), Va = d.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEscapeKeyDown: i,
      onPointerDownOutside: l,
      onFocusOutside: c,
      onInteractOutside: f,
      ...u
    } = e, g = ct(Dt, n), m = tn(n);
    return Fr(), /* @__PURE__ */ h(
      Dn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ h(
          On,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: f,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => g.onOpenChange(!1),
            children: /* @__PURE__ */ h(
              Ys,
              {
                "data-state": Ba(g.open),
                role: "dialog",
                id: g.contentId,
                ...m,
                ...u,
                ref: t,
                style: {
                  ...u.style,
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
), La = "PopoverClose", nf = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ct(La, n);
    return /* @__PURE__ */ h(
      ie.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: oe(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
nf.displayName = La;
var rf = "PopoverArrow", of = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = tn(n);
    return /* @__PURE__ */ h(Xs, { ...o, ...r, ref: t });
  }
);
of.displayName = rf;
function Ba(e) {
  return e ? "open" : "closed";
}
var sf = ka, af = Da, lf = $a, cf = Fa;
const uf = ne(
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
), df = (e) => {
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
}, ff = (e) => {
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
}, Zr = d.forwardRef(
  ({
    children: e,
    preferredPosition: t = "below",
    preferredAlignment: n = "center",
    active: r,
    activator: o,
    preferInputActivator: s = !0,
    activatorWrapper: a = "div",
    zIndexOverride: i = 400,
    preventFocusOnClose: l = !1,
    sectioned: c = !1,
    fullWidth: f = !1,
    fullHeight: u = !1,
    fluidContent: g = !1,
    fixed: m = !1,
    ariaHaspopup: b,
    hideOnPrint: p = !1,
    onClose: v,
    autofocusTarget: y = "container",
    preventCloseOnChildOverlayClick: x = !1,
    captureOverscroll: w = !1,
    className: C,
    ...S
  }, N) => {
    const R = (B) => {
      B || v("click-outside");
    }, E = () => {
      v("escape");
    }, $ = (B) => {
      x || v("click-outside");
    }, D = F(
      uf({
        sectioned: c,
        fullWidth: f,
        fullHeight: u,
        fluidContent: g,
        hideOnPrint: p
      }),
      C
    ), L = df(t), A = ff(n);
    return /* @__PURE__ */ I(sf, { open: r, onOpenChange: R, children: [
      /* @__PURE__ */ h(af, { asChild: !0, children: /* @__PURE__ */ h(a, { children: o }) }),
      /* @__PURE__ */ h(lf, { children: /* @__PURE__ */ h(
        cf,
        {
          ref: N,
          side: L,
          align: A,
          className: D,
          style: { zIndex: i },
          onEscapeKeyDown: E,
          onInteractOutside: $,
          ...S,
          children: c ? /* @__PURE__ */ h("div", { className: "p-4", children: e }) : e
        }
      ) })
    ] });
  }
);
Zr.displayName = "Popover";
const gf = ne("space-y-1", {
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
}), pf = ne(
  "flex items-center justify-center gap-2 rounded-lg transition-colors",
  {
    variants: {
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "cursor-pointer"
      },
      selected: {
        true: "border-black",
        false: ""
      }
    },
    defaultVariants: {
      disabled: !1,
      selected: !1
    }
  }
), za = d.forwardRef(
  ({
    title: e,
    choices: t,
    selected: n,
    name: r = "choiceList",
    allowMultiple: o = !1,
    titleHidden: s = !1,
    error: a,
    disabled: i = !1,
    onChange: l,
    tone: c,
    className: f,
    ...u
  }, g) => {
    const m = (v, y) => {
      if (i) return;
      let x;
      o ? y ? x = [...n, v] : x = n.filter((w) => w !== v) : x = y ? [v] : [], l && l(x, r);
    }, b = () => {
      i || l && l([], r);
    }, p = F(
      gf({
        tone: c === "magic" ? "magic" : "default",
        disabled: i
      }),
      f
    );
    return /* @__PURE__ */ I(
      "fieldset",
      {
        ref: g,
        className: p,
        disabled: i,
        ...u,
        children: [
          !s && /* @__PURE__ */ h("legend", { className: "text-sm font-medium text-gray-900 mb-3", children: e }),
          /* @__PURE__ */ h(Oe, { children: t.map((v, y) => {
            const x = n.includes(v.value), w = `${r}-${v.value}-${y}`, C = o ? "checkbox" : "radio";
            return /* @__PURE__ */ I(
              "label",
              {
                className: F(
                  pf({
                    disabled: i || v.disabled,
                    selected: x
                  })
                ),
                children: [
                  /* @__PURE__ */ h(
                    "input",
                    {
                      type: C,
                      id: w,
                      name: o ? `${r}[]` : r,
                      value: v.value,
                      checked: x,
                      disabled: i || v.disabled,
                      onChange: (S) => m(v.value, S.target.checked),
                      className: "mt-0.5 h-4 w-4 text-black rounded accent-black cursor-pointer"
                    }
                  ),
                  /* @__PURE__ */ I("div", { className: "flex-1", children: [
                    /* @__PURE__ */ h(Me, { variant: "bodyMd", as: "span", children: v.label }),
                    v.helpText && /* @__PURE__ */ h(Me, { variant: "bodySm", as: "p", tone: "subdued", children: v.helpText })
                  ] })
                ]
              },
              v.value
            );
          }) }),
          n.length > 0 && /* @__PURE__ */ h(de, { variant: "plain", onClick: b, disabled: i, children: "Clear" }),
          a && /* @__PURE__ */ h(Me, { variant: "bodySm", tone: "critical", as: "p", className: "mt-2", children: a })
        ]
      }
    );
  }
);
za.displayName = "ChoiceList";
const mf = (e) => e && {
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
}[e] || "bg-white", hf = ne(
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
), vf = (e) => {
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
    var i;
    const s = n[r], a = {
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
}, bf = d.forwardRef(
  ({
    children: e,
    background: t = "bg-surface",
    padding: n,
    roundedAbove: r = "sm",
    className: o,
    ...s
  }, a) => {
    const i = F(
      hf({
        roundedAbove: r
      }),
      mf(t),
      vf(n),
      // Exact Polaris border color: rgba(227, 227, 227, 1)
      "[border-color:rgba(227,227,227,1)]",
      // Exact Polaris shadow-300: 0px 4px 6px -2px rgba(26, 26, 26, 0.20)
      "[box-shadow:0px_4px_6px_-2px_rgba(26,26,26,0.20)]",
      // Exact Polaris text color: rgba(48, 48, 48, 1)
      "[color:rgba(48,48,48,1)]",
      o
    );
    return /* @__PURE__ */ h("div", { ref: a, className: i, ...s, children: e });
  }
);
bf.displayName = "Card";
var qn = "Dialog", [Ha, jp] = Jt(qn), [xf, Fe] = Ha(qn), ja = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = e, i = d.useRef(null), l = d.useRef(null), [c, f] = Mn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: qn
  });
  return /* @__PURE__ */ h(
    xf,
    {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: bt(),
      titleId: bt(),
      descriptionId: bt(),
      open: c,
      onOpenChange: f,
      onOpenToggle: d.useCallback(() => f((u) => !u), [f]),
      modal: a,
      children: n
    }
  );
};
ja.displayName = qn;
var Ga = "DialogTrigger", yf = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(Ga, n), s = ue(t, o.triggerRef);
    return /* @__PURE__ */ h(
      ie.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": eo(o.open),
        ...r,
        ref: s,
        onClick: oe(e.onClick, o.onOpenToggle)
      }
    );
  }
);
yf.displayName = Ga;
var Qr = "DialogPortal", [wf, Wa] = Ha(Qr, {
  forceMount: void 0
}), Ua = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Fe(Qr, t);
  return /* @__PURE__ */ h(wf, { scope: t, forceMount: n, children: d.Children.map(r, (a) => /* @__PURE__ */ h(Bt, { present: n || s.open, children: /* @__PURE__ */ h(Bn, { asChild: !0, container: o, children: a }) })) });
};
Ua.displayName = Qr;
var An = "DialogOverlay", qa = d.forwardRef(
  (e, t) => {
    const n = Wa(An, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Fe(An, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ h(Bt, { present: r || s.open, children: /* @__PURE__ */ h(Sf, { ...o, ref: t }) }) : null;
  }
);
qa.displayName = An;
var Cf = /* @__PURE__ */ xt("DialogOverlay.RemoveScroll"), Sf = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(An, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ h(Hn, { as: Cf, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ h(
        ie.div,
        {
          "data-state": eo(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), _t = "DialogContent", Ya = d.forwardRef(
  (e, t) => {
    const n = Wa(_t, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Fe(_t, e.__scopeDialog);
    return /* @__PURE__ */ h(Bt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ h(_f, { ...o, ref: t }) : /* @__PURE__ */ h(Rf, { ...o, ref: t }) });
  }
);
Ya.displayName = _t;
var _f = d.forwardRef(
  (e, t) => {
    const n = Fe(_t, e.__scopeDialog), r = d.useRef(null), o = ue(t, n.contentRef, r);
    return d.useEffect(() => {
      const s = r.current;
      if (s) return Yr(s);
    }, []), /* @__PURE__ */ h(
      Xa,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: oe(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: oe(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: oe(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Rf = d.forwardRef(
  (e, t) => {
    const n = Fe(_t, e.__scopeDialog), r = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ h(
      Xa,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var a, i;
          (a = e.onCloseAutoFocus) == null || a.call(e, s), s.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(a)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), Xa = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = Fe(_t, n), l = d.useRef(null), c = ue(t, l);
    return Fr(), /* @__PURE__ */ I(Oe, { children: [
      /* @__PURE__ */ h(
        Dn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ h(
            On,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": eo(i.open),
              ...a,
              ref: c,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ I(Oe, { children: [
        /* @__PURE__ */ h(Ef, { titleId: i.titleId }),
        /* @__PURE__ */ h(Nf, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Jr = "DialogTitle", Ka = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(Jr, n);
    return /* @__PURE__ */ h(ie.h2, { id: o.titleId, ...r, ref: t });
  }
);
Ka.displayName = Jr;
var Za = "DialogDescription", Qa = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(Za, n);
    return /* @__PURE__ */ h(ie.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Qa.displayName = Za;
var Ja = "DialogClose", ei = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(Ja, n);
    return /* @__PURE__ */ h(
      ie.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: oe(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ei.displayName = Ja;
function eo(e) {
  return e ? "open" : "closed";
}
var ti = "DialogTitleWarning", [Gp, ni] = Ml(ti, {
  contentName: _t,
  titleName: Jr,
  docsSlug: "dialog"
}), Ef = ({ titleId: e }) => {
  const t = ni(ti), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return d.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Pf = "DialogDescriptionWarning", Nf = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ni(Pf).contentName}}.`;
  return d.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, ri = ja, oi = Ua, to = qa, no = Ya, si = Ka, ai = Qa, Mf = ei;
function If({
  ...e
}) {
  return /* @__PURE__ */ h(ri, { "data-slot": "dialog", ...e });
}
function ii({
  ...e
}) {
  return /* @__PURE__ */ h(oi, { "data-slot": "dialog-portal", ...e });
}
function li({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ h(
    to,
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
function Af({
  className: e,
  children: t,
  showCloseButton: n = !0,
  ...r
}) {
  return /* @__PURE__ */ I(ii, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ h(li, {}),
    /* @__PURE__ */ I(
      no,
      {
        "data-slot": "dialog-content",
        className: F(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...r,
        children: [
          t,
          n && /* @__PURE__ */ I(
            Mf,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ h(Dr, {}),
                /* @__PURE__ */ h("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
const kf = ne(
  // Base styles for all modals
  "bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-0 rounded-lg border border-gray-200 shadow-lg duration-200 font-inter",
  {
    variants: {
      variant: {
        small: "!max-w-sm",
        base: "!max-w-lg",
        large: "!max-w-2xl",
        max: "max-w-[90vw] max-h-[90vh]"
      }
    },
    defaultVariants: {
      variant: "base"
    }
  }
), Tf = d.forwardRef(
  ({
    // id,
    children: e,
    src: t,
    variant: n = "base",
    open: r,
    onShow: o,
    onHide: s,
    onOpenChange: a,
    className: i,
    showCloseButton: l = !0,
    actions: c,
    ...f
  }, u) => {
    const g = d.useCallback(
      (b) => {
        b && o ? o() : !b && s && s(), a && a(b);
      },
      [o, s, a]
    ), m = () => t ? /* @__PURE__ */ I("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ h(
        "iframe",
        {
          src: t,
          className: "w-full flex-1 min-h-[400px] border-0",
          title: `Modal content from ${t}`,
          ...f
        }
      ),
      c && /* @__PURE__ */ h("div", { className: "border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-2", children: c })
    ] }) : /* @__PURE__ */ I("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ h("div", { className: "flex-1", children: e }),
      c && /* @__PURE__ */ h("div", { className: "border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-2", children: c })
    ] });
    return /* @__PURE__ */ h(If, { open: r, onOpenChange: g, children: /* @__PURE__ */ I(ii, { children: [
      /* @__PURE__ */ h(li, { className: "bg-black/50" }),
      /* @__PURE__ */ h(
        Af,
        {
          ref: u,
          className: F(
            kf({ variant: n }),
            "p-0 overflow-hidden",
            // Remove default padding and handle overflow
            i
          ),
          showCloseButton: l,
          ...f,
          children: m()
        }
      )
    ] }) });
  }
);
Tf.displayName = "Modal";
const Of = ne(
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
), Df = ne("text-lg font-semibold text-gray-900 leading-6"), $f = ne("flex items-center gap-2 cursor-pointer"), Ff = d.forwardRef(
  ({ title: e, children: t, className: n, showBorder: r = !0, ...o }, s) => /* @__PURE__ */ I(
    "div",
    {
      ref: s,
      className: F(Of({ showBorder: r }), n),
      ...o,
      children: [
        e && /* @__PURE__ */ h("h2", { className: F(Df()), children: e }),
        t && /* @__PURE__ */ h("div", { className: F($f()), children: t }),
        !e && t && /* @__PURE__ */ h("div", { className: "flex-1" })
      ]
    }
  )
);
Ff.displayName = "TitleBar";
const Yo = (e) => e && {
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
}[e] || "", It = (e, t = "m") => {
  if (!e) return "";
  if (typeof e == "string") {
    const r = Yo(e);
    return r ? `-m${t}-${r}` : "";
  }
  const n = [];
  return Object.entries(e).forEach(([r, o]) => {
    const s = Yo(o);
    if (s) {
      const a = r === "xs" ? "" : `${r}:`;
      n.push(`${a}-m${t}-${s}`);
    }
  }), n.join(" ");
}, Vf = ne("", {
  variants: {
    // Base styling variants can be added here if needed
  },
  defaultVariants: {}
}), Lf = d.forwardRef(
  ({
    children: e,
    marginInline: t,
    marginBlock: n,
    marginBlockStart: r,
    marginBlockEnd: o,
    marginInlineStart: s,
    marginInlineEnd: a,
    className: i,
    ...l
  }, c) => {
    const f = F(
      Vf(),
      // Negative margins for bleeding effect
      It(t, "x"),
      It(n, "y"),
      It(r, "t"),
      It(o, "b"),
      It(s, "l"),
      It(a, "r"),
      i
    );
    return /* @__PURE__ */ h("div", { ref: c, className: f, ...l, children: e });
  }
);
Lf.displayName = "Bleed";
const Bf = ne(
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
), zf = ne(
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
), Hf = ne("px-6 py-6", {
  variants: {},
  defaultVariants: {}
}), jf = d.forwardRef(
  ({
    children: e,
    title: t,
    subtitle: n,
    titleMetadata: r,
    compactTitle: o = !1,
    titleHidden: s = !1,
    fullWidth: a = !1,
    narrowWidth: i = !1,
    primaryAction: l,
    secondaryActions: c = [],
    actionGroups: f = [],
    backAction: u,
    pagination: g,
    pageReadyAccessibilityLabel: m,
    filterActions: b = !1,
    additionalMetadata: p,
    onActionRollup: v,
    hasSubtitleMaxWidth: y = !1,
    className: x,
    ...w
  }, C) => {
    const S = a ? "full" : i ? "narrow" : "default", N = (E, $ = "secondary") => {
      var L;
      const D = "url" in E && E.url;
      return /* @__PURE__ */ h(
        de,
        {
          variant: $ === "primary" ? "primary" : "secondary",
          onClick: E.onAction,
          url: D ? E.url : void 0,
          external: "external" in E ? E.external : void 0,
          target: "target" in E ? E.target : void 0,
          download: "download" in E ? E.download : void 0,
          disabled: "disabled" in E ? E.disabled : void 0,
          loading: "loading" in E ? E.loading : void 0,
          icon: "icon" in E ? E.icon : void 0,
          accessibilityLabel: E.accessibilityLabel,
          children: E.content
        },
        E.id || ((L = E.content) == null ? void 0 : L.toString())
      );
    }, R = () => {
      var E, $;
      return g ? /* @__PURE__ */ I("div", { className: "flex items-center justify-between px-6 py-4 bg-white border-t border-[rgb(227,227,227)]", children: [
        /* @__PURE__ */ h(
          de,
          {
            variant: "secondary",
            disabled: !g.hasPrevious,
            onClick: g.onPrevious,
            url: g.previousURL,
            icon: /* @__PURE__ */ h(kr, {}),
            accessibilityLabel: ((E = g.accessibilityLabels) == null ? void 0 : E.previous) || "Previous",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ h(
          de,
          {
            variant: "secondary",
            disabled: !g.hasNext,
            onClick: g.onNext,
            url: g.nextURL,
            icon: /* @__PURE__ */ h(Tr, {}),
            accessibilityLabel: (($ = g.accessibilityLabels) == null ? void 0 : $.next) || "Next",
            children: "Next"
          }
        )
      ] }) : null;
    };
    return /* @__PURE__ */ I(
      "div",
      {
        ref: C,
        className: F(Bf({ width: S }), x),
        "aria-label": m,
        ...w,
        children: [
          (t || u || l || c.length > 0 || f.length > 0) && /* @__PURE__ */ I("header", { className: F(zf({ compact: o })), children: [
            u && /* @__PURE__ */ h("div", { className: "mb-4", children: N(u, "secondary") }),
            (t || l || c.length > 0 || f.length > 0) && /* @__PURE__ */ I("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ I("div", { className: "flex-1 min-w-0", children: [
                t && !s && /* @__PURE__ */ I("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ h(Me, { as: "h1", variant: "headingLg", fontWeight: "semibold", children: t }),
                  r && /* @__PURE__ */ h("div", { className: "flex items-center", children: r })
                ] }),
                n && /* @__PURE__ */ h(
                  "div",
                  {
                    className: F(
                      "mt-1",
                      y && "max-w-[640px]"
                    ),
                    children: /* @__PURE__ */ h(Me, { variant: "bodyMd", tone: "subdued", children: n })
                  }
                ),
                p && /* @__PURE__ */ h("div", { className: "mt-2", children: p })
              ] }),
              (l || c.length > 0 || f.length > 0) && /* @__PURE__ */ h("div", { className: "flex items-center gap-2 ml-4", children: /* @__PURE__ */ I(ws, { children: [
                c.map(
                  (E) => N(E, "secondary")
                ),
                l && N(l, "primary")
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ h("main", { className: F(Hf()), children: e }),
          R()
        ]
      }
    );
  }
);
jf.displayName = "Page";
const ci = ne(
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
), Wp = ci, Gf = d.forwardRef(
  ({
    children: e,
    tone: t = "default",
    progress: n = "complete",
    icon: r,
    size: o = "medium",
    className: s,
    ...a
  }, i) => {
    const l = F(
      ci({
        tone: t,
        size: o,
        progress: n
      }),
      s
    ), c = d.useMemo(() => {
      var f;
      return r ? typeof r == "string" ? r === "placeholder" ? /* @__PURE__ */ h("span", { className: "w-3 h-3 bg-current rounded-full opacity-50 mr-1" }) : /* @__PURE__ */ h("span", { className: "mr-1", children: r }) : d.isValidElement(r) ? d.cloneElement(r, {
        className: F(
          "w-3 h-3 mr-1",
          (f = r.props) == null ? void 0 : f.className
        )
      }) : typeof r == "function" ? /* @__PURE__ */ h(r, { className: "w-3 h-3 mr-1" }) : null : null;
    }, [r]);
    return /* @__PURE__ */ I("span", { ref: i, className: l, ...a, children: [
      c,
      e
    ] });
  }
);
Gf.displayName = "Badge";
const Xo = (e) => e && {
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
}[e] || "", Wf = (e) => {
  if (!e) return "";
  if (typeof e == "string") {
    const n = Xo(e);
    return n ? `gap-${n}` : "";
  }
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    const o = Xo(r);
    if (o) {
      const s = n === "xs" ? "" : `${n}:`;
      t.push(`${s}gap-${o}`);
    }
  }), t.join(" ");
}, Uf = ne(
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
), qf = d.forwardRef(
  ({
    children: e,
    as: t = "div",
    align: n = "start",
    direction: r = "row",
    blockAlign: o = "start",
    gap: s,
    wrap: a = !0,
    className: i,
    ...l
  }, c) => {
    const f = t, u = Wf(s), g = F(
      Uf({
        align: n,
        direction: r,
        blockAlign: o,
        wrap: a
      }),
      u,
      i
    );
    return /* @__PURE__ */ h(f, { ref: c, className: g, ...l, children: e });
  }
);
qf.displayName = "InlineStack";
const Ko = (e) => e && {
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
}[e] || "", Yf = (e) => {
  if (!e) return "";
  if (typeof e == "string") {
    const n = Ko(e);
    return n ? `gap-${n}` : "";
  }
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    const o = Ko(r);
    if (o) {
      const s = n === "xs" ? "" : `${n}:`;
      t.push(`${s}gap-${o}`);
    }
  }), t.join(" ");
}, Xf = ne(
  "flex flex-col",
  // Base flexbox styling with column direction - children stretch by default with items-stretch
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
      inlineAlign: "stretch",
      // Default to stretch for full-width children behavior
      reverseOrder: !1
    }
  }
), Kf = d.forwardRef(
  ({
    children: e,
    as: t = "div",
    align: n = "start",
    inlineAlign: r = "stretch",
    // Default to stretch for full-width children behavior
    gap: o,
    id: s,
    reverseOrder: a = !1,
    role: i,
    className: l,
    ...c
  }, f) => {
    const u = t, g = Yf(o), m = F(
      Xf({
        align: n,
        inlineAlign: r,
        reverseOrder: a
      }),
      g,
      l
    );
    return /* @__PURE__ */ h(
      u,
      {
        ref: f,
        className: m,
        id: s,
        role: i,
        ...c,
        children: e
      }
    );
  }
);
Kf.displayName = "BlockStack";
const Zf = (e) => e && {
  border: "border-gray-300",
  "border-secondary": "border-gray-200",
  "border-tertiary": "border-gray-100",
  "border-inverse": "border-gray-800",
  "border-brand": "border-blue-600",
  "border-info": "border-blue-500",
  "border-success": "border-green-500",
  "border-warning": "border-yellow-500",
  "border-critical": "border-red-500",
  transparent: "border-transparent"
}[e] || "", Qf = (e) => e && {
  0: "border-t-0",
  "025": "border-t",
  "050": "border-t-2",
  100: "border-t-4",
  150: "border-t-[6px]",
  200: "border-t-8",
  300: "border-t-[12px]",
  400: "border-t-[16px]",
  500: "border-t-[20px]"
}[e] || "", Jf = ne(
  "w-full border-solid",
  // Base divider styling - border-t width will be applied separately
  {
    variants: {
      // No additional variants needed for basic divider
    },
    defaultVariants: {}
  }
), eg = d.forwardRef(
  ({
    borderColor: e = "border-secondary",
    borderWidth: t = "025",
    className: n,
    ...r
  }, o) => {
    const s = Zf(e), a = Qf(t), i = F(
      Jf(),
      s,
      a,
      n
    );
    return /* @__PURE__ */ h("hr", { ref: o, className: i, ...r });
  }
);
eg.displayName = "Divider";
const Ut = (e, t) => {
  if (!e) return "";
  const r = {
    0: "0",
    "025": "0.5",
    "050": "1",
    100: "2",
    150: "3",
    200: "4",
    300: "6",
    400: "8",
    500: "10",
    600: "12",
    800: "16",
    1e3: "20",
    1200: "24",
    1600: "32",
    2e3: "40",
    2400: "48",
    2800: "56",
    3200: "64"
  }[e] || "0";
  switch (t) {
    case "bleed":
      return `p-${r}`;
    case "bleedBlockStart":
      return `pt-${r}`;
    case "bleedBlockEnd":
      return `pb-${r}`;
    case "bleedInlineStart":
      return `pl-${r}`;
    case "bleedInlineEnd":
      return `pr-${r}`;
    default:
      return "";
  }
}, tg = ne(
  "flex items-start gap-3 cursor-pointer",
  // Base radio button styling
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "cursor-pointer"
      },
      fill: {
        true: "w-full h-full",
        false: ""
      },
      tone: {
        magic: "text-purple-600",
        default: "text-gray-900"
      }
    },
    defaultVariants: {
      disabled: !1,
      fill: !1,
      tone: "default"
    }
  }
), ng = ne(
  [
    "mt-0.5 h-4 w-4 rounded-full border-2 border-gray-300",
    // "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
    "checked:border-blue-600 checked:bg-blue-600",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "transition-colors duration-200"
  ],
  {
    variants: {
      tone: {
        magic: "checked:border-purple-600 checked:bg-purple-600 focus:ring-purple-500",
        default: "checked:border-blue-600 checked:bg-blue-600 focus:ring-blue-500"
      }
    },
    defaultVariants: {
      tone: "default"
    }
  }
), rg = d.forwardRef(
  ({
    ariaDescribedBy: e,
    label: t,
    labelHidden: n = !1,
    checked: r = !1,
    disabled: o = !1,
    id: s,
    name: a,
    value: i,
    onChange: l,
    onFocus: c,
    onBlur: f,
    fill: u = !1,
    helpText: g,
    tone: m,
    bleed: b,
    bleedBlockStart: p,
    bleedBlockEnd: v,
    bleedInlineStart: y,
    bleedInlineEnd: x,
    className: w,
    ...C
  }, S) => {
    const N = d.useId(), R = s || N, E = d.useCallback(
      (A) => {
        o || l && l(A.target.checked, R);
      },
      [l, R, o]
    ), $ = F(
      Ut(b, "bleed"),
      Ut(p, "bleedBlockStart"),
      Ut(v, "bleedBlockEnd"),
      Ut(y, "bleedInlineStart"),
      Ut(x, "bleedInlineEnd")
    ), D = F(
      tg({
        disabled: o,
        fill: u,
        tone: m === "magic" ? "magic" : "default"
      }),
      $,
      w
    ), L = F(
      ng({
        tone: m === "magic" ? "magic" : "default"
      })
    );
    return /* @__PURE__ */ I("label", { className: D, children: [
      /* @__PURE__ */ h(
        "input",
        {
          ref: S,
          type: "radio",
          id: R,
          name: a,
          value: i,
          checked: r,
          disabled: o,
          onChange: E,
          onFocus: c,
          onBlur: f,
          "aria-describedby": e,
          className: L,
          ...C
        }
      ),
      /* @__PURE__ */ I("div", { className: "flex-1", children: [
        !n && /* @__PURE__ */ h("div", { className: "text-sm font-medium text-gray-900", children: t }),
        g && /* @__PURE__ */ h("div", { className: "text-xs text-gray-600 mt-1", children: g })
      ] })
    ] });
  }
);
rg.displayName = "RadioButton";
const og = ne(
  [
    // Base link styling matching Polaris
    "inline-flex items-center font-medium transition-colors duration-200",
    // Default link color and underline
    "text-blue-600 underline decoration-1 underline-offset-2",
    // Hover and focus states
    "hover:text-blue-800 hover:decoration-2",
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:rounded-sm",
    // Active state
    "active:text-blue-900"
  ],
  {
    variants: {
      monochrome: {
        true: [
          // Monochrome styling - same color as surrounding text with underline
          "text-current underline decoration-1 underline-offset-2",
          "hover:decoration-2",
          "focus:ring-gray-500"
        ],
        false: [
          // Default blue link styling
          "text-blue-600",
          "hover:text-blue-800",
          "active:text-blue-900"
        ]
      },
      removeUnderline: {
        true: "no-underline hover:no-underline",
        false: ""
      },
      dataPrimaryLink: {
        true: "font-semibold",
        false: ""
      }
    },
    defaultVariants: {
      monochrome: !1,
      removeUnderline: !1,
      dataPrimaryLink: !1
    }
  }
), sg = d.forwardRef(
  ({
    id: e,
    url: t,
    children: n,
    external: r = !1,
    target: o,
    monochrome: s = !1,
    removeUnderline: a = !1,
    onClick: i,
    accessibilityLabel: l,
    dataPrimaryLink: c = !1,
    className: f,
    ...u
  }, g) => {
    const m = o || (r ? "_blank" : void 0), b = d.useCallback(
      (x) => {
        i && i();
      },
      [i]
    ), p = F(
      og({
        monochrome: s,
        removeUnderline: a,
        dataPrimaryLink: c
      }),
      f
    );
    return /* @__PURE__ */ h(
      "a",
      {
        ref: g,
        id: e,
        href: t,
        target: m,
        rel: m === "_blank" ? "noopener noreferrer" : void 0,
        onClick: b,
        "aria-label": l,
        "data-primary-link": c || void 0,
        className: p,
        ...u,
        children: n
      }
    );
  }
);
sg.displayName = "Link";
const ag = ne("flex items-center !text-red-200", {
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
}), Zo = ne(
  "inline-flex items-center h-6 justify-center gap-1 p-1 text-sm font-medium transition-colors",
  {
    variants: {
      position: {
        previous: "rounded-l-md border-r-0",
        next: "rounded-r-md",
        single: "rounded-md"
      },
      disabled: {
        true: "bg-gray-100 cursor-not-allowed",
        false: "bg-gray-100 cursor-pointer hover:bg-gray-200"
      }
    },
    defaultVariants: {
      position: "single",
      disabled: !1
    }
  }
), ui = d.forwardRef(
  ({
    nextKeys: e,
    previousKeys: t,
    nextTooltip: n,
    previousTooltip: r,
    nextURL: o,
    previousURL: s,
    hasNext: a = !1,
    hasPrevious: i = !1,
    accessibilityLabel: l = "Pagination",
    accessibilityLabels: c,
    onNext: f,
    onPrevious: u,
    label: g,
    type: m = "page",
    className: b,
    asChild: p = !1,
    ...v
  }, y) => {
    d.useEffect(() => {
      const N = (R) => {
        t != null && t.includes(R.key) && i && u && (R.preventDefault(), u()), e != null && e.includes(R.key) && a && f && (R.preventDefault(), f());
      };
      return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
    }, [t, e, i, a, u, f]);
    const x = c == null ? void 0 : c.previous, w = c == null ? void 0 : c.next, C = () => /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        disabled: !i,
        onClick: i ? u : void 0,
        "aria-label": x || "Previous",
        className: F(
          Zo({
            position: g ? "previous" : "single",
            disabled: !i
          })
        ),
        children: /* @__PURE__ */ h(
          kr,
          {
            className: "size-5",
            fill: i ? "black" : "#b0b0bc"
          }
        )
      }
    ), S = () => /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        disabled: !a,
        onClick: a ? f : void 0,
        "aria-label": w || "Next",
        className: F(
          Zo({
            position: g ? "next" : "single",
            disabled: !a
          })
        ),
        children: /* @__PURE__ */ h(
          Tr,
          {
            className: "size-5",
            fill: a ? "black" : "#b0b0bc"
          }
        )
      }
    );
    return /* @__PURE__ */ h(
      "nav",
      {
        ref: y,
        "aria-label": l,
        className: F(
          ag({ type: m, hasLabel: !!g }),
          b
        ),
        ...v,
        children: g ? (
          // With label: Previous - Label - Next (spaced apart)
          /* @__PURE__ */ I(Oe, { children: [
            /* @__PURE__ */ h(C, {}),
            /* @__PURE__ */ h("div", { className: "flex-1 flex justify-center gap-2", children: typeof g == "string" ? /* @__PURE__ */ h(Me, { className: "mx-1", variant: "bodySm", tone: "subdued", children: g }) : g }),
            /* @__PURE__ */ h(S, {})
          ] })
        ) : (
          // Without label: Connected Previous/Next buttons
          /* @__PURE__ */ I("div", { className: "inline-flex", children: [
            /* @__PURE__ */ h(C, {}),
            /* @__PURE__ */ h(S, {})
          ] })
        )
      }
    );
  }
);
ui.displayName = "Pagination";
const ig = ne("w-full", {
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
}), Up = () => {
  const [e, t] = d.useState(
    "DEFAULT"
    /* Default */
  );
  return { mode: e, setMode: t };
}, lg = ({
  filter: e,
  disabled: t = !1,
  isOpen: n,
  onToggle: r
}) => {
  const o = (i) => {
    e.onChange(i, e.key);
  }, a = (() => {
    if (!e.selected || e.selected.length === 0)
      return null;
    const i = e.choices.filter(
      (l) => e.selected.includes(l.value)
    );
    return i.length === 0 ? null : i.length === 1 ? i[0].label : `${i.length} selected`;
  })();
  return /* @__PURE__ */ h(
    Zr,
    {
      active: n,
      activator: /* @__PURE__ */ I(
        de,
        {
          size: "micro",
          variant: "tertiary",
          className: "border-dashed ml-2",
          onClick: r,
          disabled: t,
          pressed: n,
          children: [
            e.label,
            a && /* @__PURE__ */ h("span", { className: "ml-1 text-xs text-gray-600", children: a })
          ]
        }
      ),
      onClose: () => {
      },
      preferredPosition: "below",
      sectioned: !0,
      children: /* @__PURE__ */ h(
        za,
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
}, Qo = ({ sortOptions: e, onSort: t, disabled: n, isOpen: r, onToggle: o, onClose: s }) => /* @__PURE__ */ h(
  Zr,
  {
    active: r,
    activator: /* @__PURE__ */ h(
      de,
      {
        variant: "tertiary",
        icon: /* @__PURE__ */ h(ps, { className: "size-4" }),
        disclosure: !0,
        disabled: n,
        onClick: o,
        children: "Sort"
      }
    ),
    onClose: s,
    children: /* @__PURE__ */ h("div", { className: "p-2 min-w-48", children: e.map((a) => /* @__PURE__ */ I(
      "button",
      {
        className: "w-full text-left px-3 py-2 hover:bg-[#f6f6f6] rounded text-sm",
        onClick: () => {
          t && t([a.value]), s();
        },
        children: [
          a.label,
          " (",
          a.directionLabel,
          ")"
        ]
      },
      a.value
    )) })
  }
), cg = d.forwardRef(
  ({
    sortOptions: e,
    sortSelected: t,
    onSort: n,
    onSortKeyChange: r,
    onSortDirectionChange: o,
    onAddFilterClick: s,
    primaryAction: a,
    cancelAction: i,
    onEditStart: l,
    mode: c,
    disclosureZIndexOverride: f,
    setMode: u,
    disabled: g = !1,
    disableQueryField: m = !1,
    disableStickyMode: b,
    isFlushWhenSticky: p,
    canCreateNewView: v,
    onCreateNewView: y,
    filteringAccessibilityLabel: x = "Filter",
    filteringAccessibilityTooltip: w,
    closeOnChildOverlayClick: C,
    disableKeyboardShortcuts: S,
    showEditColumnsButton: N = !1,
    autoFocusSearchField: R = !1,
    tabs: E,
    selected: $ = 0,
    onSelect: D,
    filters: L,
    appliedFilters: A,
    onClearAll: j,
    pinnedFilters: B,
    queryValue: z = "",
    queryPlaceholder: P = "Searching in all..",
    onQueryChange: V,
    onQueryClear: k,
    className: M,
    ...G
  }, O) => {
    const [W, X] = d.useState(
      c === "FILTERING"
      /* Filtering */
    ), [Q, le] = d.useState(null);
    d.useEffect(() => {
      X(
        c === "FILTERING"
        /* Filtering */
      );
    }, [c]);
    const Y = (H) => {
      le((ee) => ee === H ? null : H);
    }, T = () => {
      le(null);
    }, K = () => {
      u(W ? "DEFAULT" : "FILTERING"), X(!W), !W && l && l(
        "FILTERING"
        /* Filtering */
      );
    }, se = (H) => {
      V && V(H);
    }, te = () => {
      k && k();
    };
    return /* @__PURE__ */ h(
      "div",
      {
        ref: O,
        className: F(
          ig({ mode: c, disabled: g }),
          M
        ),
        ...G,
        children: /* @__PURE__ */ h("div", { className: "p-1 border border-[#e3e3e3] rounded-md border-b-0 rounded-b-none", children: W ? /* @__PURE__ */ I("div", { className: "space-y-2", children: [
          /* @__PURE__ */ I("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: e && e.length > 0 && /* @__PURE__ */ h(
              Qo,
              {
                sortOptions: e,
                onSort: n,
                disabled: g,
                isOpen: Q === "sort",
                onToggle: () => Y("sort"),
                onClose: T
              }
            ) }),
            /* @__PURE__ */ h("div", { className: "flex-1", children: /* @__PURE__ */ h(
              Cs,
              {
                label: "",
                labelHidden: !0,
                value: z,
                onChange: se,
                placeholder: P,
                clearButton: z.length > 0,
                onClearButtonClick: te,
                disabled: m || g,
                autoFocus: R,
                autoComplete: "off",
                size: "slim",
                className: "border border-[#e3e3e3] hover:border-[#e3e3e3] bg-white"
              }
            ) }),
            /* @__PURE__ */ h(
              de,
              {
                onClick: K,
                disabled: g,
                size: "medium",
                children: "Cancel"
              }
            )
          ] }),
          B && B.length > 0 && /* @__PURE__ */ h("div", { className: "border-t border-gray-200 pt-0.5", children: /* @__PURE__ */ h("div", { className: "flex flex-wrap gap-2", children: B.map((H) => /* @__PURE__ */ h(
            lg,
            {
              filter: H,
              disabled: g,
              isOpen: Q === `filter-${H.key}`,
              onToggle: () => Y(`filter-${H.key}`),
              onClose: T
            },
            H.key
          )) }) }),
          A && A.length > 0 && /* @__PURE__ */ I("div", { className: "flex flex-wrap gap-2", children: [
            A.map((H) => /* @__PURE__ */ I(
              "div",
              {
                className: "inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-black rounded-md text-sm",
                children: [
                  /* @__PURE__ */ h(Me, { variant: "bodySm", children: H.label }),
                  /* @__PURE__ */ h(
                    "button",
                    {
                      onClick: H.onRemove,
                      className: "p-0.5 hover:bg-black rounded",
                      children: /* @__PURE__ */ h(Dr, { className: "size-3" })
                    }
                  )
                ]
              },
              H.key
            )),
            j && /* @__PURE__ */ h(de, { variant: "plain", size: "micro", onClick: j, children: "Clear all" })
          ] }),
          (a || i) && /* @__PURE__ */ I("div", { className: "flex justify-end gap-2", children: [
            i && /* @__PURE__ */ h(
              de,
              {
                variant: "secondary",
                onClick: i.onAction,
                disabled: i.disabled,
                loading: i.loading,
                children: "Cancel"
              }
            ),
            a && /* @__PURE__ */ h(
              de,
              {
                variant: "primary",
                onClick: () => {
                  if (a.type === "save-as" && y) {
                    const H = prompt("Enter view name:");
                    H && a.onAction(H);
                  } else
                    a.onAction();
                },
                disabled: a.disabled,
                loading: a.loading,
                children: a.type === "save" ? "Save" : "Save as"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ I("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ I("div", { className: "flex items-center gap-2", children: [
            e && e.length > 0 && /* @__PURE__ */ h(
              Qo,
              {
                sortOptions: e,
                onSort: n,
                disabled: g,
                isOpen: Q === "sort",
                onToggle: () => Y("sort"),
                onClose: T
              }
            ),
            E && E.length > 0 && /* @__PURE__ */ h(Oe, { children: E.map((H, ee) => /* @__PURE__ */ h(
              de,
              {
                size: "micro",
                variant: "tertiary",
                pressed: ee === $,
                onClick: () => {
                  H.onAction(), D && D(ee);
                },
                disabled: g,
                children: H.content
              },
              H.id
            )) })
          ] }),
          /* @__PURE__ */ I("div", { className: "flex items-center gap-2", children: [
            N && /* @__PURE__ */ h(
              de,
              {
                variant: "tertiary",
                icon: /* @__PURE__ */ h(gs, { className: "size-4" }),
                accessibilityLabel: "Edit columns",
                disabled: g,
                children: "Edit columns"
              }
            ),
            /* @__PURE__ */ h(
              de,
              {
                variant: "tertiary",
                className: "flex w-12 justify-items-end",
                icon: /* @__PURE__ */ I(Oe, { children: [
                  /* @__PURE__ */ h(fs, { className: "size-5" }),
                  /* @__PURE__ */ h(us, { className: "size-5" })
                ] }),
                onClick: K,
                pressed: !1,
                accessibilityLabel: x,
                disabled: g
              }
            )
          ] })
        ] }) })
      }
    );
  }
);
cg.displayName = "IndexFilters";
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
function rt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pe(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: rt(n, r[e])
    }));
  };
}
function Yn(e) {
  return e instanceof Function;
}
function ug(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function dg(e, t) {
  const n = [], r = (o) => {
    o.forEach((s) => {
      n.push(s);
      const a = t(s);
      a != null && a.length && r(a);
    });
  };
  return r(e), n;
}
function U(e, t, n) {
  let r = [], o;
  return (s) => {
    let a;
    n.key && n.debug && (a = Date.now());
    const i = e(s);
    if (!(i.length !== r.length || i.some((f, u) => r[u] !== f)))
      return o;
    r = i;
    let c;
    if (n.key && n.debug && (c = Date.now()), o = t(...i), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const f = Math.round((Date.now() - a) * 100) / 100, u = Math.round((Date.now() - c) * 100) / 100, g = u / 16, m = (b, p) => {
        for (b = String(b); b.length < p; )
          b = " " + b;
        return b;
      };
      console.info(`%c⏱ ${m(u, 5)} /${m(f, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * g, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function q(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: r
  };
}
function fg(e, t, n, r) {
  const o = () => {
    var a;
    return (a = s.getValue()) != null ? a : e.options.renderFallbackValue;
  }, s = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: U(() => [e, n, t, s], (a, i, l, c) => ({
      table: a,
      column: i,
      row: l,
      cell: c,
      getValue: c.getValue,
      renderValue: c.renderValue
    }), q(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((a) => {
    a.createCell == null || a.createCell(s, n, t, e);
  }, {}), s;
}
function gg(e, t, n, r) {
  var o, s;
  const i = {
    ...e._getDefaultColumnDef(),
    ...t
  }, l = i.accessorKey;
  let c = (o = (s = i.id) != null ? s : l ? typeof String.prototype.replaceAll == "function" ? l.replaceAll(".", "_") : l.replace(/\./g, "_") : void 0) != null ? o : typeof i.header == "string" ? i.header : void 0, f;
  if (i.accessorFn ? f = i.accessorFn : l && (l.includes(".") ? f = (g) => {
    let m = g;
    for (const p of l.split(".")) {
      var b;
      m = (b = m) == null ? void 0 : b[p], process.env.NODE_ENV !== "production" && m === void 0 && console.warn(`"${p}" in deeply nested key "${l}" returned undefined.`);
    }
    return m;
  } : f = (g) => g[i.accessorKey]), !c)
    throw process.env.NODE_ENV !== "production" ? new Error(i.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let u = {
    id: `${String(c)}`,
    accessorFn: f,
    parent: r,
    depth: n,
    columnDef: i,
    columns: [],
    getFlatColumns: U(() => [!0], () => {
      var g;
      return [u, ...(g = u.columns) == null ? void 0 : g.flatMap((m) => m.getFlatColumns())];
    }, q(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: U(() => [e._getOrderColumnsFn()], (g) => {
      var m;
      if ((m = u.columns) != null && m.length) {
        let b = u.columns.flatMap((p) => p.getLeafColumns());
        return g(b);
      }
      return [u];
    }, q(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const g of e._features)
    g.createColumn == null || g.createColumn(u, e);
  return u;
}
const ye = "debugHeaders";
function Jo(e, t, n) {
  var r;
  let s = {
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
      const a = [], i = (l) => {
        l.subHeaders && l.subHeaders.length && l.subHeaders.map(i), a.push(l);
      };
      return i(s), a;
    },
    getContext: () => ({
      table: e,
      header: s,
      column: t
    })
  };
  return e._features.forEach((a) => {
    a.createHeader == null || a.createHeader(s, e);
  }), s;
}
const pg = {
  createTable: (e) => {
    e.getHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var s, a;
      const i = (s = r == null ? void 0 : r.map((u) => n.find((g) => g.id === u)).filter(Boolean)) != null ? s : [], l = (a = o == null ? void 0 : o.map((u) => n.find((g) => g.id === u)).filter(Boolean)) != null ? a : [], c = n.filter((u) => !(r != null && r.includes(u.id)) && !(o != null && o.includes(u.id)));
      return vn(t, [...i, ...c, ...l], e);
    }, q(e.options, ye, "getHeaderGroups")), e.getCenterHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((s) => !(r != null && r.includes(s.id)) && !(o != null && o.includes(s.id))), vn(t, n, e, "center")), q(e.options, ye, "getCenterHeaderGroups")), e.getLeftHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const s = (o = r == null ? void 0 : r.map((a) => n.find((i) => i.id === a)).filter(Boolean)) != null ? o : [];
      return vn(t, s, e, "left");
    }, q(e.options, ye, "getLeftHeaderGroups")), e.getRightHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const s = (o = r == null ? void 0 : r.map((a) => n.find((i) => i.id === a)).filter(Boolean)) != null ? o : [];
      return vn(t, s, e, "right");
    }, q(e.options, ye, "getRightHeaderGroups")), e.getFooterGroups = U(() => [e.getHeaderGroups()], (t) => [...t].reverse(), q(e.options, ye, "getFooterGroups")), e.getLeftFooterGroups = U(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), q(e.options, ye, "getLeftFooterGroups")), e.getCenterFooterGroups = U(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), q(e.options, ye, "getCenterFooterGroups")), e.getRightFooterGroups = U(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), q(e.options, ye, "getRightFooterGroups")), e.getFlatHeaders = U(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), q(e.options, ye, "getFlatHeaders")), e.getLeftFlatHeaders = U(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), q(e.options, ye, "getLeftFlatHeaders")), e.getCenterFlatHeaders = U(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), q(e.options, ye, "getCenterFlatHeaders")), e.getRightFlatHeaders = U(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), q(e.options, ye, "getRightFlatHeaders")), e.getCenterLeafHeaders = U(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), q(e.options, ye, "getCenterLeafHeaders")), e.getLeftLeafHeaders = U(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), q(e.options, ye, "getLeftLeafHeaders")), e.getRightLeafHeaders = U(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), q(e.options, ye, "getRightLeafHeaders")), e.getLeafHeaders = U(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, s, a, i, l, c;
      return [...(o = (s = t[0]) == null ? void 0 : s.headers) != null ? o : [], ...(a = (i = n[0]) == null ? void 0 : i.headers) != null ? a : [], ...(l = (c = r[0]) == null ? void 0 : c.headers) != null ? l : []].map((f) => f.getLeafHeaders()).flat();
    }, q(e.options, ye, "getLeafHeaders"));
  }
};
function vn(e, t, n, r) {
  var o, s;
  let a = 0;
  const i = function(g, m) {
    m === void 0 && (m = 1), a = Math.max(a, m), g.filter((b) => b.getIsVisible()).forEach((b) => {
      var p;
      (p = b.columns) != null && p.length && i(b.columns, m + 1);
    }, 0);
  };
  i(e);
  let l = [];
  const c = (g, m) => {
    const b = {
      depth: m,
      id: [r, `${m}`].filter(Boolean).join("_"),
      headers: []
    }, p = [];
    g.forEach((v) => {
      const y = [...p].reverse()[0], x = v.column.depth === b.depth;
      let w, C = !1;
      if (x && v.column.parent ? w = v.column.parent : (w = v.column, C = !0), y && (y == null ? void 0 : y.column) === w)
        y.subHeaders.push(v);
      else {
        const S = Jo(n, w, {
          id: [r, m, w.id, v == null ? void 0 : v.id].filter(Boolean).join("_"),
          isPlaceholder: C,
          placeholderId: C ? `${p.filter((N) => N.column === w).length}` : void 0,
          depth: m,
          index: p.length
        });
        S.subHeaders.push(v), p.push(S);
      }
      b.headers.push(v), v.headerGroup = b;
    }), l.push(b), m > 0 && c(p, m - 1);
  }, f = t.map((g, m) => Jo(n, g, {
    depth: a,
    index: m
  }));
  c(f, a - 1), l.reverse();
  const u = (g) => g.filter((b) => b.column.getIsVisible()).map((b) => {
    let p = 0, v = 0, y = [0];
    b.subHeaders && b.subHeaders.length ? (y = [], u(b.subHeaders).forEach((w) => {
      let {
        colSpan: C,
        rowSpan: S
      } = w;
      p += C, y.push(S);
    })) : p = 1;
    const x = Math.min(...y);
    return v = v + x, b.colSpan = p, b.rowSpan = v, {
      colSpan: p,
      rowSpan: v
    };
  });
  return u((o = (s = l[0]) == null ? void 0 : s.headers) != null ? o : []), l;
}
const mg = (e, t, n, r, o, s, a) => {
  let i = {
    id: t,
    index: r,
    original: n,
    depth: o,
    parentId: a,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (l) => {
      if (i._valuesCache.hasOwnProperty(l))
        return i._valuesCache[l];
      const c = e.getColumn(l);
      if (c != null && c.accessorFn)
        return i._valuesCache[l] = c.accessorFn(i.original, r), i._valuesCache[l];
    },
    getUniqueValues: (l) => {
      if (i._uniqueValuesCache.hasOwnProperty(l))
        return i._uniqueValuesCache[l];
      const c = e.getColumn(l);
      if (c != null && c.accessorFn)
        return c.columnDef.getUniqueValues ? (i._uniqueValuesCache[l] = c.columnDef.getUniqueValues(i.original, r), i._uniqueValuesCache[l]) : (i._uniqueValuesCache[l] = [i.getValue(l)], i._uniqueValuesCache[l]);
    },
    renderValue: (l) => {
      var c;
      return (c = i.getValue(l)) != null ? c : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => dg(i.subRows, (l) => l.subRows),
    getParentRow: () => i.parentId ? e.getRow(i.parentId, !0) : void 0,
    getParentRows: () => {
      let l = [], c = i;
      for (; ; ) {
        const f = c.getParentRow();
        if (!f) break;
        l.push(f), c = f;
      }
      return l.reverse();
    },
    getAllCells: U(() => [e.getAllLeafColumns()], (l) => l.map((c) => fg(e, i, c, c.id)), q(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: U(() => [i.getAllCells()], (l) => l.reduce((c, f) => (c[f.column.id] = f, c), {}), q(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const c = e._features[l];
    c == null || c.createRow == null || c.createRow(i, e);
  }
  return i;
}, hg = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, di = (e, t, n) => {
  var r, o;
  const s = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(s));
};
di.autoRemove = (e) => Te(e);
const fi = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
fi.autoRemove = (e) => Te(e);
const gi = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
gi.autoRemove = (e) => Te(e);
const pi = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
pi.autoRemove = (e) => Te(e);
const mi = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
mi.autoRemove = (e) => Te(e) || !(e != null && e.length);
const hi = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
hi.autoRemove = (e) => Te(e) || !(e != null && e.length);
const vi = (e, t, n) => e.getValue(t) === n;
vi.autoRemove = (e) => Te(e);
const bi = (e, t, n) => e.getValue(t) == n;
bi.autoRemove = (e) => Te(e);
const ro = (e, t, n) => {
  let [r, o] = n;
  const s = e.getValue(t);
  return s >= r && s <= o;
};
ro.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, s = t === null || Number.isNaN(r) ? -1 / 0 : r, a = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (s > a) {
    const i = s;
    s = a, a = i;
  }
  return [s, a];
};
ro.autoRemove = (e) => Te(e) || Te(e[0]) && Te(e[1]);
const qe = {
  includesString: di,
  includesStringSensitive: fi,
  equalsString: gi,
  arrIncludes: pi,
  arrIncludesAll: mi,
  arrIncludesSome: hi,
  equals: vi,
  weakEquals: bi,
  inNumberRange: ro
};
function Te(e) {
  return e == null || e === "";
}
const vg = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Pe("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? qe.includesString : typeof r == "number" ? qe.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? qe.equals : Array.isArray(r) ? qe.arrIncludes : qe.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return Yn(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : qe[e.columnDef.filterFn]
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
        const o = e.getFilterFn(), s = r == null ? void 0 : r.find((f) => f.id === e.id), a = rt(n, s ? s.value : void 0);
        if (es(o, a, e)) {
          var i;
          return (i = r == null ? void 0 : r.filter((f) => f.id !== e.id)) != null ? i : [];
        }
        const l = {
          id: e.id,
          value: a
        };
        if (s) {
          var c;
          return (c = r == null ? void 0 : r.map((f) => f.id === e.id ? l : f)) != null ? c : [];
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
        var s;
        return (s = rt(t, o)) == null ? void 0 : s.filter((a) => {
          const i = n.find((l) => l.id === a.id);
          if (i) {
            const l = i.getFilterFn();
            if (es(l, a.value, i))
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
function es(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const bg = (e, t, n) => n.reduce((r, o) => {
  const s = o.getValue(e);
  return r + (typeof s == "number" ? s : 0);
}, 0), xg = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const s = o.getValue(e);
    s != null && (r > s || r === void 0 && s >= s) && (r = s);
  }), r;
}, yg = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const s = o.getValue(e);
    s != null && (r < s || r === void 0 && s >= s) && (r = s);
  }), r;
}, wg = (e, t, n) => {
  let r, o;
  return n.forEach((s) => {
    const a = s.getValue(e);
    a != null && (r === void 0 ? a >= a && (r = o = a) : (r > a && (r = a), o < a && (o = a)));
  }), [r, o];
}, Cg = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let s = o.getValue(e);
    s != null && (s = +s) >= s && (++n, r += s);
  }), n) return r / n;
}, Sg = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((s) => s.getValue(e));
  if (!ug(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((s, a) => s - a);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, _g = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Rg = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Eg = (e, t) => t.length, lr = {
  sum: bg,
  min: xg,
  max: yg,
  extent: wg,
  mean: Cg,
  median: Sg,
  unique: _g,
  uniqueCount: Rg,
  count: Eg
}, Pg = {
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
    onGroupingChange: Pe("grouping", e),
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
        return lr.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return lr.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Yn(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : lr[e.columnDef.aggregationFn];
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
function Ng(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((s) => !t.includes(s.id));
  return n === "remove" ? r : [...t.map((s) => e.find((a) => a.id === s)).filter(Boolean), ...r];
}
const Mg = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Pe("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = U((n) => [Xt(t, n)], (n) => n.findIndex((r) => r.id === e.id), q(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = Xt(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = Xt(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = U(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
      let s = [];
      if (!(t != null && t.length))
        s = o;
      else {
        const a = [...t], i = [...o];
        for (; i.length && a.length; ) {
          const l = a.shift(), c = i.findIndex((f) => f.id === l);
          c > -1 && s.push(i.splice(c, 1)[0]);
        }
        s = [...s, ...i];
      }
      return Ng(s, n, r);
    }, q(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, cr = () => ({
  left: [],
  right: []
}), Ig = {
  getInitialState: (e) => ({
    columnPinning: cr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Pe("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      t.setColumnPinning((o) => {
        var s, a;
        if (n === "right") {
          var i, l;
          return {
            left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((u) => !(r != null && r.includes(u))),
            right: [...((l = o == null ? void 0 : o.right) != null ? l : []).filter((u) => !(r != null && r.includes(u))), ...r]
          };
        }
        if (n === "left") {
          var c, f;
          return {
            left: [...((c = o == null ? void 0 : o.left) != null ? c : []).filter((u) => !(r != null && r.includes(u))), ...r],
            right: ((f = o == null ? void 0 : o.right) != null ? f : []).filter((u) => !(r != null && r.includes(u)))
          };
        }
        return {
          left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((u) => !(r != null && r.includes(u))),
          right: ((a = o == null ? void 0 : o.right) != null ? a : []).filter((u) => !(r != null && r.includes(u)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var o, s, a;
      return ((o = r.columnDef.enablePinning) != null ? o : !0) && ((s = (a = t.options.enableColumnPinning) != null ? a : t.options.enablePinning) != null ? s : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((i) => i.id), {
        left: r,
        right: o
      } = t.getState().columnPinning, s = n.some((i) => r == null ? void 0 : r.includes(i)), a = n.some((i) => o == null ? void 0 : o.includes(i));
      return s ? "left" : a ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      return o ? (n = (r = t.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, t) => {
    e.getCenterVisibleCells = U(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const s = [...r ?? [], ...o ?? []];
      return n.filter((a) => !s.includes(a.column.id));
    }, q(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = U(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((s) => n.find((a) => a.column.id === s)).filter(Boolean).map((s) => ({
      ...s,
      position: "left"
    })), q(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = U(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((s) => n.find((a) => a.column.id === s)).filter(Boolean).map((s) => ({
      ...s,
      position: "right"
    })), q(t.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? cr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : cr());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, s;
        return !!((o = r.left) != null && o.length || (s = r.right) != null && s.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), q(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), q(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((s) => !o.includes(s.id));
    }, q(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function Ag(e) {
  return e || (typeof document < "u" ? document : null);
}
const bn = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, ur = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), kg = {
  getDefaultColumnDef: () => bn,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: ur(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Pe("columnSizing", e),
    onColumnSizingInfoChange: Pe("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const s = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : bn.minSize, (r = s ?? e.columnDef.size) != null ? r : bn.size), (o = e.columnDef.maxSize) != null ? o : bn.maxSize);
    }, e.getStart = U((n) => [n, Xt(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, s) => o + s.getSize(), 0), q(t.options, "debugColumns", "getStart")), e.getAfter = U((n) => [n, Xt(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, s) => o + s.getSize(), 0), q(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
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
          var s;
          n += (s = o.column.getSize()) != null ? s : 0;
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
      return (s) => {
        if (!r || !o || (s.persist == null || s.persist(), dr(s) && s.touches && s.touches.length > 1))
          return;
        const a = e.getSize(), i = e ? e.getLeafHeaders().map((y) => [y.column.id, y.column.getSize()]) : [[r.id, r.getSize()]], l = dr(s) ? Math.round(s.touches[0].clientX) : s.clientX, c = {}, f = (y, x) => {
          typeof x == "number" && (t.setColumnSizingInfo((w) => {
            var C, S;
            const N = t.options.columnResizeDirection === "rtl" ? -1 : 1, R = (x - ((C = w == null ? void 0 : w.startOffset) != null ? C : 0)) * N, E = Math.max(R / ((S = w == null ? void 0 : w.startSize) != null ? S : 0), -0.999999);
            return w.columnSizingStart.forEach(($) => {
              let [D, L] = $;
              c[D] = Math.round(Math.max(L + L * E, 0) * 100) / 100;
            }), {
              ...w,
              deltaOffset: R,
              deltaPercentage: E
            };
          }), (t.options.columnResizeMode === "onChange" || y === "end") && t.setColumnSizing((w) => ({
            ...w,
            ...c
          })));
        }, u = (y) => f("move", y), g = (y) => {
          f("end", y), t.setColumnSizingInfo((x) => ({
            ...x,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, m = Ag(n), b = {
          moveHandler: (y) => u(y.clientX),
          upHandler: (y) => {
            m == null || m.removeEventListener("mousemove", b.moveHandler), m == null || m.removeEventListener("mouseup", b.upHandler), g(y.clientX);
          }
        }, p = {
          moveHandler: (y) => (y.cancelable && (y.preventDefault(), y.stopPropagation()), u(y.touches[0].clientX), !1),
          upHandler: (y) => {
            var x;
            m == null || m.removeEventListener("touchmove", p.moveHandler), m == null || m.removeEventListener("touchend", p.upHandler), y.cancelable && (y.preventDefault(), y.stopPropagation()), g((x = y.touches[0]) == null ? void 0 : x.clientX);
          }
        }, v = Tg() ? {
          passive: !1
        } : !1;
        dr(s) ? (m == null || m.addEventListener("touchmove", p.moveHandler, v), m == null || m.addEventListener("touchend", p.upHandler, v)) : (m == null || m.addEventListener("mousemove", b.moveHandler, v), m == null || m.addEventListener("mouseup", b.upHandler, v)), t.setColumnSizingInfo((y) => ({
          ...y,
          startOffset: l,
          startSize: a,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: i,
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
      e.setColumnSizingInfo(t ? ur() : (n = e.initialState.columnSizingInfo) != null ? n : ur());
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
let xn = null;
function Tg() {
  if (typeof xn == "boolean") return xn;
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
  return xn = e, xn;
}
function dr(e) {
  return e.type === "touchstart";
}
const Og = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Pe("columnVisibility", e)
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
      return (n = o.length ? o.some((s) => s.getIsVisible()) : (r = t.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, r;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((r = t.options.enableHiding) != null ? r : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, t) => {
    e._getAllVisibleCells = U(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), q(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = U(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], q(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, r) => U(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((s) => s.getIsVisible == null ? void 0 : s.getIsVisible()), q(e.options, "debugColumns", n));
    e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var r;
      e.setColumnVisibility(n ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var r;
      n = (r = n) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, s) => ({
        ...o,
        [s.id]: n || !(s.getCanHide != null && s.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var r;
      e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
    };
  }
};
function Xt(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Dg = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, $g = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Pe("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (t) => {
      var n;
      const r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
      return typeof r == "string" || typeof r == "number";
    }
  }),
  createColumn: (e, t) => {
    e.getCanGlobalFilter = () => {
      var n, r, o, s;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((r = t.options.enableGlobalFilter) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && ((s = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? s : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => qe.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return Yn(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : qe[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, Fg = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Pe("expanded", e),
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
      var o, s;
      e.setExpanded(r ? {} : (o = (s = e.initialState) == null ? void 0 : s.expanded) != null ? o : {});
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
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((s) => {
        const a = s.split(".");
        r = Math.max(r, a.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, t) => {
    e.toggleExpanded = (n) => {
      t.setExpanded((r) => {
        var o;
        const s = r === !0 ? !0 : !!(r != null && r[e.id]);
        let a = {};
        if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((i) => {
          a[i] = !0;
        }) : a = r, n = (o = n) != null ? o : !s, !s && n)
          return {
            ...a,
            [e.id]: !0
          };
        if (s && !n) {
          const {
            [e.id]: i,
            ...l
          } = a;
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
}, Er = 0, Pr = 10, fr = () => ({
  pageIndex: Er,
  pageSize: Pr
}), Vg = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...fr(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Pe("pagination", e)
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
      const o = (s) => rt(r, s);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? fr() : (o = e.initialState.pagination) != null ? o : fr());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let s = rt(r, o.pageIndex);
        const a = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return s = Math.max(0, Math.min(s, a)), {
          ...o,
          pageIndex: s
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, s;
      e.setPageIndex(r ? Er : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageIndex) != null ? o : Er);
    }, e.resetPageSize = (r) => {
      var o, s;
      e.setPageSize(r ? Pr : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageSize) != null ? o : Pr);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const s = Math.max(1, rt(r, o.pageSize)), a = o.pageSize * o.pageIndex, i = Math.floor(a / s);
        return {
          ...o,
          pageIndex: i,
          pageSize: s
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var s;
      let a = rt(r, (s = e.options.pageCount) != null ? s : -1);
      return typeof a == "number" && (a = Math.max(-1, a)), {
        ...o,
        pageCount: a
      };
    }), e.getPageOptions = U(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((s, a) => a)), o;
    }, q(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}, gr = () => ({
  top: [],
  bottom: []
}), Lg = {
  getInitialState: (e) => ({
    rowPinning: gr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Pe("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, r, o) => {
      const s = r ? e.getLeafRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], a = o ? e.getParentRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], i = /* @__PURE__ */ new Set([...a, e.id, ...s]);
      t.setRowPinning((l) => {
        var c, f;
        if (n === "bottom") {
          var u, g;
          return {
            top: ((u = l == null ? void 0 : l.top) != null ? u : []).filter((p) => !(i != null && i.has(p))),
            bottom: [...((g = l == null ? void 0 : l.bottom) != null ? g : []).filter((p) => !(i != null && i.has(p))), ...Array.from(i)]
          };
        }
        if (n === "top") {
          var m, b;
          return {
            top: [...((m = l == null ? void 0 : l.top) != null ? m : []).filter((p) => !(i != null && i.has(p))), ...Array.from(i)],
            bottom: ((b = l == null ? void 0 : l.bottom) != null ? b : []).filter((p) => !(i != null && i.has(p)))
          };
        }
        return {
          top: ((c = l == null ? void 0 : l.top) != null ? c : []).filter((p) => !(i != null && i.has(p))),
          bottom: ((f = l == null ? void 0 : l.bottom) != null ? f : []).filter((p) => !(i != null && i.has(p)))
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
      } = t.getState().rowPinning, s = n.some((i) => r == null ? void 0 : r.includes(i)), a = n.some((i) => o == null ? void 0 : o.includes(i));
      return s ? "top" : a ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      if (!o) return -1;
      const s = (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((a) => {
        let {
          id: i
        } = a;
        return i;
      });
      return (r = s == null ? void 0 : s.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
      var n, r;
      return e.setRowPinning(t ? gr() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : gr());
    }, e.getIsSomeRowsPinned = (t) => {
      var n;
      const r = e.getState().rowPinning;
      if (!t) {
        var o, s;
        return !!((o = r.top) != null && o.length || (s = r.bottom) != null && s.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e._getPinnedRows = (t, n, r) => {
      var o;
      return ((o = e.options.keepPinnedRows) == null || o ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (n ?? []).map((a) => {
          const i = e.getRow(a, !0);
          return i.getIsAllParentsExpanded() ? i : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (n ?? []).map((a) => t.find((i) => i.id === a))
      )).filter(Boolean).map((a) => ({
        ...a,
        position: r
      }));
    }, e.getTopRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), q(e.options, "debugRows", "getTopRows")), e.getBottomRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), q(e.options, "debugRows", "getBottomRows")), e.getCenterRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((s) => !o.has(s.id));
    }, q(e.options, "debugRows", "getCenterRows"));
  }
}, Bg = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Pe("rowSelection", e),
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
        return t ? o.forEach((s) => {
          s.getCanSelect() && (r[s.id] = !0);
        }) : o.forEach((s) => {
          delete r[s.id];
        }), r;
      });
    }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
      const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), o = {
        ...n
      };
      return e.getRowModel().rows.forEach((s) => {
        Nr(o, s.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = U(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? pr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, q(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = U(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? pr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, q(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = U(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? pr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, q(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
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
      t.setRowSelection((s) => {
        var a;
        if (n = typeof n < "u" ? n : !o, e.getCanSelect() && o === n)
          return s;
        const i = {
          ...s
        };
        return Nr(i, e.id, n, (a = r == null ? void 0 : r.selectChildren) != null ? a : !0, t), i;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return oo(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Mr(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Mr(e, n) === "all";
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
}, Nr = (e, t, n, r, o) => {
  var s;
  const a = o.getRow(t, !0);
  n ? (a.getCanMultiSelect() || Object.keys(e).forEach((i) => delete e[i]), a.getCanSelect() && (e[t] = !0)) : delete e[t], r && (s = a.subRows) != null && s.length && a.getCanSelectSubRows() && a.subRows.forEach((i) => Nr(e, i.id, n, r, o));
};
function pr(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, s = function(a, i) {
    return a.map((l) => {
      var c;
      const f = oo(l, n);
      if (f && (r.push(l), o[l.id] = l), (c = l.subRows) != null && c.length && (l = {
        ...l,
        subRows: s(l.subRows)
      }), f)
        return l;
    }).filter(Boolean);
  };
  return {
    rows: s(t.rows),
    flatRows: r,
    rowsById: o
  };
}
function oo(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function Mr(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, s = !1;
  return e.subRows.forEach((a) => {
    if (!(s && !o) && (a.getCanSelect() && (oo(a, t) ? s = !0 : o = !1), a.subRows && a.subRows.length)) {
      const i = Mr(a, t);
      i === "all" ? s = !0 : (i === "some" && (s = !0), o = !1);
    }
  }), o ? "all" : s ? "some" : !1;
}
const Ir = /([0-9]+)/gm, zg = (e, t, n) => xi(at(e.getValue(n)).toLowerCase(), at(t.getValue(n)).toLowerCase()), Hg = (e, t, n) => xi(at(e.getValue(n)), at(t.getValue(n))), jg = (e, t, n) => so(at(e.getValue(n)).toLowerCase(), at(t.getValue(n)).toLowerCase()), Gg = (e, t, n) => so(at(e.getValue(n)), at(t.getValue(n))), Wg = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, Ug = (e, t, n) => so(e.getValue(n), t.getValue(n));
function so(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function at(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function xi(e, t) {
  const n = e.split(Ir).filter(Boolean), r = t.split(Ir).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(), s = r.shift(), a = parseInt(o, 10), i = parseInt(s, 10), l = [a, i].sort();
    if (isNaN(l[0])) {
      if (o > s)
        return 1;
      if (s > o)
        return -1;
      continue;
    }
    if (isNaN(l[1]))
      return isNaN(a) ? -1 : 1;
    if (a > i)
      return 1;
    if (i > a)
      return -1;
  }
  return n.length - r.length;
}
const qt = {
  alphanumeric: zg,
  alphanumericCaseSensitive: Hg,
  text: jg,
  textCaseSensitive: Gg,
  datetime: Wg,
  basic: Ug
}, qg = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Pe("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const s = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(s) === "[object Date]")
          return qt.datetime;
        if (typeof s == "string" && (r = !0, s.split(Ir).length > 1))
          return qt.alphanumeric;
      }
      return r ? qt.text : qt.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Yn(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : qt[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), s = typeof n < "u" && n !== null;
      t.setSorting((a) => {
        const i = a == null ? void 0 : a.find((m) => m.id === e.id), l = a == null ? void 0 : a.findIndex((m) => m.id === e.id);
        let c = [], f, u = s ? n : o === "desc";
        if (a != null && a.length && e.getCanMultiSort() && r ? i ? f = "toggle" : f = "add" : a != null && a.length && l !== a.length - 1 ? f = "replace" : i ? f = "toggle" : f = "replace", f === "toggle" && (s || o || (f = "remove")), f === "add") {
          var g;
          c = [...a, {
            id: e.id,
            desc: u
          }], c.splice(0, c.length - ((g = t.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
        } else f === "toggle" ? c = a.map((m) => m.id === e.id ? {
          ...m,
          desc: u
        } : m) : f === "remove" ? c = a.filter((m) => m.id !== e.id) : c = [{
          id: e.id,
          desc: u
        }];
        return c;
      });
    }, e.getFirstSortDir = () => {
      var n, r;
      return ((n = (r = e.columnDef.sortDescFirst) != null ? r : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var r, o;
      const s = e.getFirstSortDir(), a = e.getIsSorted();
      return a ? a !== s && ((r = t.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(n && (o = t.options.enableMultiRemove) != null) || o) ? !1 : a === "desc" ? "asc" : "desc" : s;
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
}, Yg = [
  pg,
  Og,
  Mg,
  Ig,
  hg,
  vg,
  Dg,
  //depends on ColumnFaceting
  $g,
  //depends on ColumnFiltering
  qg,
  Pg,
  //depends on RowSorting
  Fg,
  Vg,
  Lg,
  Bg,
  kg
];
function Xg(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...Yg, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const s = o._features.reduce((g, m) => Object.assign(g, m.getDefaultOptions == null ? void 0 : m.getDefaultOptions(o)), {}), a = (g) => o.options.mergeOptions ? o.options.mergeOptions(s, g) : {
    ...s,
    ...g
  };
  let l = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((g) => {
    var m;
    l = (m = g.getInitialState == null ? void 0 : g.getInitialState(l)) != null ? m : l;
  });
  const c = [];
  let f = !1;
  const u = {
    _features: r,
    options: {
      ...s,
      ...e
    },
    initialState: l,
    _queue: (g) => {
      c.push(g), f || (f = !0, Promise.resolve().then(() => {
        for (; c.length; )
          c.shift()();
        f = !1;
      }).catch((m) => setTimeout(() => {
        throw m;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (g) => {
      const m = rt(g, o.options);
      o.options = a(m);
    },
    getState: () => o.options.state,
    setState: (g) => {
      o.options.onStateChange == null || o.options.onStateChange(g);
    },
    _getRowId: (g, m, b) => {
      var p;
      return (p = o.options.getRowId == null ? void 0 : o.options.getRowId(g, m, b)) != null ? p : `${b ? [b.id, m].join(".") : m}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (g, m) => {
      let b = (m ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[g];
      if (!b && (b = o.getCoreRowModel().rowsById[g], !b))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${g}`) : new Error();
      return b;
    },
    _getDefaultColumnDef: U(() => [o.options.defaultColumn], (g) => {
      var m;
      return g = (m = g) != null ? m : {}, {
        header: (b) => {
          const p = b.header.column.columnDef;
          return p.accessorKey ? p.accessorKey : p.accessorFn ? p.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (b) => {
          var p, v;
          return (p = (v = b.renderValue()) == null || v.toString == null ? void 0 : v.toString()) != null ? p : null;
        },
        ...o._features.reduce((b, p) => Object.assign(b, p.getDefaultColumnDef == null ? void 0 : p.getDefaultColumnDef()), {}),
        ...g
      };
    }, q(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: U(() => [o._getColumnDefs()], (g) => {
      const m = function(b, p, v) {
        return v === void 0 && (v = 0), b.map((y) => {
          const x = gg(o, y, v, p), w = y;
          return x.columns = w.columns ? m(w.columns, x, v + 1) : [], x;
        });
      };
      return m(g);
    }, q(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: U(() => [o.getAllColumns()], (g) => g.flatMap((m) => m.getFlatColumns()), q(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: U(() => [o.getAllFlatColumns()], (g) => g.reduce((m, b) => (m[b.id] = b, m), {}), q(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: U(() => [o.getAllColumns(), o._getOrderColumnsFn()], (g, m) => {
      let b = g.flatMap((p) => p.getLeafColumns());
      return m(b);
    }, q(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (g) => {
      const m = o._getAllFlatColumnsById()[g];
      return process.env.NODE_ENV !== "production" && !m && console.error(`[Table] Column with id '${g}' does not exist.`), m;
    }
  };
  Object.assign(o, u);
  for (let g = 0; g < o._features.length; g++) {
    const m = o._features[g];
    m == null || m.createTable == null || m.createTable(o);
  }
  return o;
}
function Kg() {
  return (e) => U(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, s, a) {
      s === void 0 && (s = 0);
      const i = [];
      for (let c = 0; c < o.length; c++) {
        const f = mg(e, e._getRowId(o[c], c, a), o[c], c, s, void 0, a == null ? void 0 : a.id);
        if (n.flatRows.push(f), n.rowsById[f.id] = f, i.push(f), e.options.getSubRows) {
          var l;
          f.originalSubRows = e.options.getSubRows(o[c], c), (l = f.originalSubRows) != null && l.length && (f.subRows = r(f.originalSubRows, s + 1, f));
        }
      }
      return i;
    };
    return n.rows = r(t), n;
  }, q(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
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
function ts(e, t) {
  return e ? Zg(e) ? /* @__PURE__ */ d.createElement(e, t) : e : null;
}
function Zg(e) {
  return Qg(e) || typeof e == "function" || Jg(e);
}
function Qg(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function Jg(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function ep(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = d.useState(() => ({
    current: Xg(t)
  })), [r, o] = d.useState(() => n.current.initialState);
  return n.current.setOptions((s) => ({
    ...s,
    ...e,
    state: {
      ...r,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (a) => {
      o(a), e.onStateChange == null || e.onStateChange(a);
    }
  })), n.current;
}
const Kt = d.forwardRef(
  ({
    checked: e,
    onChange: t,
    disabled: n,
    "aria-label": r,
    className: o,
    ...s
  }, a) => {
    const i = d.useRef(null);
    return d.useImperativeHandle(a, () => i.current), d.useEffect(() => {
      i.current && (i.current.indeterminate = e === "indeterminate");
    }, [e]), /* @__PURE__ */ h(
      "input",
      {
        ref: i,
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
        ...s
      }
    );
  }
);
Kt.displayName = "Checkbox";
const tp = ne(
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
), vt = ne(
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
), yi = ne("p-2 whitespace-nowrap text-sm text-gray-900", {
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
}), wi = d.forwardRef(
  ({
    headings: e,
    promotedBulkActions: t,
    bulkActions: n,
    children: r,
    emptyState: o,
    sort: s,
    paginatedSelectAllActionText: a,
    paginatedSelectAllText: i,
    lastColumnSticky: l = !1,
    selectable: c = !0,
    sortable: f,
    sortDirection: u,
    sortColumnIndex: g,
    onSort: m,
    sortToggleLabels: b,
    hasZebraStriping: p = !1,
    pagination: v,
    itemCount: y,
    selectedItemsCount: x,
    resourceName: w,
    loading: C = !1,
    hasMoreItems: S,
    condensed: N = !1,
    onSelectionChange: R,
    className: E,
    data: $,
    columns: D,
    hasIndexFilters: L = !1,
    ...A
  }, j) => {
    const B = d.useMemo(() => $ && D ? ep({
      data: $,
      columns: D,
      getCoreRowModel: Kg()
    }) : null, [$, D]), z = () => {
      const V = typeof x == "number" && x > 0 || x === "All", k = () => !n || n.length === 0 || !V ? null : /* @__PURE__ */ h("div", { className: "flex items-center gap-2 ml-auto", children: n.map((M, G) => "actions" in M ? M.actions.map((O, W) => /* @__PURE__ */ h(
        de,
        {
          variant: "primary",
          size: "slim",
          onClick: O.onAction,
          disabled: O.disabled,
          tone: O.destructive ? "critical" : void 0,
          children: O.content
        },
        `${G}-${W}`
      )) : /* @__PURE__ */ h(
        de,
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
      return B ? /* @__PURE__ */ h("thead", { className: "sticky top-0 z-10", children: B.getHeaderGroups().map((M) => /* @__PURE__ */ I("tr", { children: [
        c && /* @__PURE__ */ h(
          "th",
          {
            className: F(
              vt({
                isSelectionColumn: !0
              })
            ),
            children: /* @__PURE__ */ h(
              Kt,
              {
                checked: x === "All" || x === y && y > 0 ? !0 : typeof x == "number" && x > 0 ? "indeterminate" : !1,
                onChange: (G) => {
                  R && R(
                    "page",
                    G,
                    void 0,
                    void 0
                  );
                },
                "aria-label": `Select all ${(w == null ? void 0 : w.plural) || "items"}`
              }
            )
          }
        ),
        V ? /* @__PURE__ */ h(
          "th",
          {
            colSpan: M.headers.length,
            className: F(
              vt({
                alignment: "start"
              }),
              "text-left"
            ),
            children: /* @__PURE__ */ I("div", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ h(Me, { variant: "bodyMd", as: "span", children: x === "All" ? `All ${(w == null ? void 0 : w.plural) || "items"} selected` : `${x} ${x === 1 ? (w == null ? void 0 : w.singular) || "item" : (w == null ? void 0 : w.plural) || "items"} selected` }),
              k()
            ] })
          }
        ) : M.headers.map((G, O) => /* @__PURE__ */ h(
          "th",
          {
            className: F(
              vt({
                alignment: "start",
                sortable: G.column.getCanSort(),
                sticky: l && O === M.headers.length - 1
              })
            ),
            children: G.isPlaceholder ? null : ts(
              G.column.columnDef.header,
              G.getContext()
            )
          },
          G.id
        ))
      ] }, M.id)) }) : /* @__PURE__ */ I("thead", { className: "sticky top-0 z-10", children: [
        V && /* @__PURE__ */ I("tr", { children: [
          c && /* @__PURE__ */ h(
            "th",
            {
              className: F(
                vt({
                  isSelectionColumn: !0
                })
              ),
              children: /* @__PURE__ */ h(
                Kt,
                {
                  checked: x === "All" || x === y && y > 0 ? !0 : typeof x == "number" && x > 0 ? "indeterminate" : !1,
                  onChange: (M) => {
                    R && R(
                      "page",
                      M,
                      void 0,
                      void 0
                    );
                  },
                  "aria-label": `Select all ${(w == null ? void 0 : w.plural) || "items"}`
                }
              )
            }
          ),
          /* @__PURE__ */ h(
            "th",
            {
              colSpan: e.length,
              className: F(
                vt({
                  alignment: "start"
                }),
                "text-left"
              ),
              children: /* @__PURE__ */ I("div", { className: "flex items-center justify-between w-full", children: [
                /* @__PURE__ */ h(Me, { variant: "bodyMd", as: "span", children: x === "All" ? `All ${(w == null ? void 0 : w.plural) || "items"} selected` : `${x} ${x === 1 ? (w == null ? void 0 : w.singular) || "item" : (w == null ? void 0 : w.plural) || "items"} selected` }),
                k()
              ] })
            }
          )
        ] }),
        !V && /* @__PURE__ */ I("tr", { children: [
          c && /* @__PURE__ */ h(
            "th",
            {
              className: F(
                vt({
                  isSelectionColumn: !0
                })
              ),
              children: /* @__PURE__ */ h(
                Kt,
                {
                  checked: x === "All" || x === y && y > 0 ? !0 : typeof x == "number" && x > 0 ? "indeterminate" : !1,
                  onChange: (M) => {
                    R && R(
                      "page",
                      M,
                      void 0,
                      void 0
                    );
                  },
                  "aria-label": `Select all ${(w == null ? void 0 : w.plural) || "items"}`
                }
              )
            }
          ),
          e.map((M, G) => {
            const O = (f == null ? void 0 : f[G]) || !1, W = g === G, X = W ? u : void 0, Q = () => W ? X === "ascending" ? "descending" : "ascending" : "descending", le = () => !O || !W || !X ? null : X === "descending" ? /* @__PURE__ */ h(Or, { className: "ml-1 h-4 w-4" }) : /* @__PURE__ */ h(Tn, { className: "ml-1 h-4 w-4" }), Y = () => {
              if (!O || !m) return;
              const T = Q();
              m(G, T);
            };
            return /* @__PURE__ */ h(
              "th",
              {
                className: F(
                  vt({
                    alignment: M.alignment || "start",
                    sortable: O,
                    sticky: l && G === e.length - 1
                  }),
                  O && "cursor-pointer hover:bg-gray-50"
                ),
                onClick: Y,
                children: /* @__PURE__ */ I("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ h(Me, { variant: "bodyMd", fontWeight: "semibold", children: (typeof M.title == "string", M.title) }),
                  le()
                ] })
              },
              G
            );
          })
        ] })
      ] });
    }, P = () => {
      var k;
      if (B)
        return /* @__PURE__ */ h("tbody", { children: (k = B.getRowModel().rows) != null && k.length ? B.getRowModel().rows.map((M) => /* @__PURE__ */ h("tr", { className: "hover:bg-gray-50", children: M.getVisibleCells().map((G, O) => /* @__PURE__ */ h(
          "td",
          {
            className: F(
              yi({
                alignment: "start",
                sticky: l && O === M.getVisibleCells().length - 1
              })
            ),
            children: ts(
              G.column.columnDef.cell,
              G.getContext()
            )
          },
          G.id
        )) }, M.id)) : /* @__PURE__ */ h("tr", { children: /* @__PURE__ */ h(
          "td",
          {
            colSpan: (D == null ? void 0 : D.length) || e.length,
            className: "h-24 text-center",
            children: o || /* @__PURE__ */ h(Me, { variant: "bodyMd", tone: "subdued", children: "No results." })
          }
        ) }) });
      const V = d.Children.map(r, (M) => d.isValidElement(M) && M.type === ao ? d.cloneElement(M, {
        selectable: c,
        onSelectionChange: R,
        resourceName: w,
        ...M.props
      }) : M);
      return /* @__PURE__ */ h("tbody", { children: V });
    };
    return y === 0 && o ? /* @__PURE__ */ h("div", { className: "flex items-center justify-center p-8", children: o }) : /* @__PURE__ */ I("div", { className: "overflow-x-auto", children: [
      /* @__PURE__ */ I(
        "table",
        {
          ref: j,
          className: F(
            tp({
              condensed: N,
              hasZebraStriping: p,
              loading: C,
              hasIndexFilters: L
            }),
            E
          ),
          ...A,
          children: [
            z(),
            P()
          ]
        }
      ),
      v && /* @__PURE__ */ h("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ h(ui, { type: "table", ...v }) })
    ] });
  }
);
wi.displayName = "IndexTable";
const ao = d.forwardRef(
  ({
    children: e,
    id: t,
    selected: n = !1,
    position: r,
    tone: o,
    disabled: s = !1,
    selectionRange: a,
    rowType: i = "data",
    accessibilityLabel: l,
    onClick: c,
    onNavigation: f,
    className: u,
    selectable: g = !0,
    onSelectionChange: m,
    resourceName: b,
    ...p
  }, v) => {
    const y = ne(
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
    ), x = (w) => {
      const C = w.target;
      C.type === "checkbox" || C.closest('input[type="checkbox"]') || C.closest("button") || C.closest("a") || (g && m && !s && m("single", !0, t, r), c && c());
    };
    return /* @__PURE__ */ I(
      "tr",
      {
        ref: v,
        className: F(
          y({
            selected: n === !0 ? !0 : n === "indeterminate" ? "indeterminate" : !1,
            tone: o,
            disabled: s,
            rowType: i
          }),
          // Add cursor pointer when selectable
          g && !s && "cursor-pointer",
          u
        ),
        onClick: x,
        ...p,
        children: [
          g && /* @__PURE__ */ h(
            "td",
            {
              className: F(
                yi({
                  isSelectionColumn: !0
                })
              ),
              children: /* @__PURE__ */ h(
                Kt,
                {
                  checked: n === !0,
                  onChange: () => {
                    m && m("single", !0, t, r);
                  },
                  disabled: s,
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
ao.displayName = "IndexTable.Row";
const Ci = d.forwardRef(
  ({
    as: e = "td",
    id: t,
    children: n,
    className: r,
    flush: o = !1,
    colSpan: s,
    scope: a,
    headers: i,
    ...l
  }, c) => {
    const f = ne("border-gray-200 text-xs", {
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
        className: F(f({ flush: o }), r),
        colSpan: s,
        scope: a,
        headers: i,
        ...l,
        children: n
      }
    );
  }
);
Ci.displayName = "IndexTable.Cell";
const qp = (e, t) => {
  const [n, r] = d.useState(
    (t == null ? void 0 : t.selectedResources) || []
  ), [o, s] = d.useState(
    (t == null ? void 0 : t.allResourcesSelected) || !1
  ), a = d.useCallback(
    (l, c, f, u) => {
      if (l === "single" && typeof f == "string")
        r(
          c ? (g) => g.includes(f) ? g.filter((m) => m !== f) : [...g, f] : [f]
        );
      else if (l === "multiple" && typeof f == "object") {
        const { start: g, end: m } = f, b = e.slice(g, m + 1).map((p) => p.id);
        r(c ? (p) => [.../* @__PURE__ */ new Set([...p, ...b])] : b);
      } else if (l === "page")
        if (c) {
          const g = e.map((m) => m.id);
          r(g), s(!1);
        } else
          r([]), s(!1);
      else l === "all" && (s(c), c && r([]));
    },
    [e]
  ), i = d.useCallback(() => {
    r([]), s(!1);
  }, []);
  return {
    selectedResources: n,
    allResourcesSelected: o,
    handleSelectionChange: a,
    clearSelection: i
  };
}, Si = wi;
Si.Row = ao;
Si.Cell = Ci;
const np = ne("inline-block shrink-0 w-5 h-5", {
  variants: {
    tone: {
      base: "text-white",
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
}), _i = d.forwardRef(
  ({ source: e, tone: t = "base", accessibilityLabel: n, className: r, ...o }, s) => {
    const a = F(np({ tone: t }), r), i = d.useMemo(() => {
      var c;
      return e ? typeof e == "function" ? /* @__PURE__ */ h(e, { className: a }) : d.isValidElement(e) ? d.cloneElement(e, {
        className: F(
          a,
          (c = e.props) == null ? void 0 : c.className
        )
      }) : typeof e == "string" ? /* @__PURE__ */ h(
        "div",
        {
          className: a,
          dangerouslySetInnerHTML: { __html: e }
        }
      ) : e : null;
    }, [e, a]);
    return /* @__PURE__ */ h(
      "span",
      {
        ref: s,
        className: "inline-block shrink-0 w-5 h-5",
        ...n ? { "aria-label": n } : { "aria-hidden": !0 },
        ...o,
        children: i
      }
    );
  }
);
_i.displayName = "Icon";
const rp = ne(
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
), op = ri, sp = oi, Ri = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h(
  to,
  {
    ref: n,
    className: F(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Ri.displayName = to.displayName;
const Ei = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ I(sp, { children: [
  /* @__PURE__ */ h(Ri, {}),
  /* @__PURE__ */ h(
    no,
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
Ei.displayName = no.displayName;
const Pi = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h(
  si,
  {
    ref: n,
    className: F(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Pi.displayName = si.displayName;
const Ni = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h(
  ai,
  {
    ref: n,
    className: F("text-sm text-gray-600", e),
    ...t
  }
));
Ni.displayName = ai.displayName;
const ap = d.forwardRef(
  ({
    id: e,
    children: t,
    discardConfirmation: n = !1,
    open: r = !1,
    className: o,
    onSave: s,
    onDiscard: a,
    saveText: i = "Save",
    discardText: l = "Discard",
    saveLoading: c = !1,
    discardLoading: f = !1,
    ...u
  }, g) => {
    const [m, b] = d.useState(!1), [p, v] = d.useState(null), y = !!(s || a), x = d.useCallback(
      (R) => {
        n ? (v(() => R), b(!0)) : R();
      },
      [n]
    ), w = d.useMemo(() => y || !t ? null : d.Children.map(t, (R) => {
      if (d.isValidElement(R) && (R.type === "button" || R.type === de)) {
        const E = R.props;
        if (E.variant === "primary" && n && typeof E.onClick == "function")
          return d.cloneElement(
            R,
            {
              ...E,
              onClick: ($) => {
                $.preventDefault(), x(E.onClick);
              }
            }
          );
      }
      return R;
    }), [
      t,
      n,
      y,
      x
    ]), C = d.useMemo(() => y ? /* @__PURE__ */ I(Oe, { children: [
      a && /* @__PURE__ */ h(
        de,
        {
          variant: "primary",
          loading: f,
          onClick: () => x(a),
          children: l
        }
      ),
      s && /* @__PURE__ */ h(de, { loading: c, onClick: s, children: i })
    ] }) : null, [
      y,
      a,
      s,
      f,
      c,
      l,
      i,
      x
    ]), S = d.useCallback(() => {
      b(!1), p && (p(), v(null));
    }, [p]), N = d.useCallback(() => {
      b(!1);
    }, []);
    return /* @__PURE__ */ I(Oe, { children: [
      /* @__PURE__ */ h(
        "div",
        {
          ref: g,
          id: e,
          className: F(rp({ open: r }), o),
          ...u,
          children: /* @__PURE__ */ I("div", { className: "flex items-center justify-between p-2", children: [
            /* @__PURE__ */ I("div", { className: "flex items-center !justify-center gap-1", children: [
              /* @__PURE__ */ h(_i, { source: cs, tone: "base" }),
              /* @__PURE__ */ h("span", { className: "text-sm font-medium", children: "Unsaved changes" })
            ] }),
            /* @__PURE__ */ h("div", { className: "flex items-center gap-3", children: y ? C : w })
          ] })
        }
      ),
      /* @__PURE__ */ h(op, { open: m, onOpenChange: b, children: /* @__PURE__ */ I(Ei, { className: "p-0 overflow-hidden bg-white", children: [
        /* @__PURE__ */ h("div", { className: "px-6 py-4 bg-[#e3e3e3] border-b border-gray-200", children: /* @__PURE__ */ h(Pi, { className: "text-lg font-semibold text-gray-900 leading-6", children: "Discard changes" }) }),
        /* @__PURE__ */ h("div", { className: "px-6 py-4", children: /* @__PURE__ */ h(Ni, { className: "text-sm text-gray-600", children: "Are you sure you want to discard your changes? This action cannot be undone." }) }),
        /* @__PURE__ */ I("div", { className: "border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-3", children: [
          /* @__PURE__ */ h(de, { onClick: N, children: "Cancel" }),
          /* @__PURE__ */ h(
            de,
            {
              variant: "primary",
              tone: "critical",
              onClick: S,
              children: "Discard changes"
            }
          )
        ] })
      ] }) })
    ] });
  }
);
ap.displayName = "ContextualSaveBar";
function ip(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const lp = (e) => {
  switch (e) {
    case "success":
      return dp;
    case "info":
      return gp;
    case "warning":
      return fp;
    case "error":
      return pp;
    default:
      return null;
  }
}, cp = Array(12).fill(0), up = ({ visible: e, className: t }) => /* @__PURE__ */ _.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ _.createElement("div", {
  className: "sonner-spinner"
}, cp.map((n, r) => /* @__PURE__ */ _.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), dp = /* @__PURE__ */ _.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ _.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), fp = /* @__PURE__ */ _.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ _.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), gp = /* @__PURE__ */ _.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ _.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), pp = /* @__PURE__ */ _.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ _.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), mp = /* @__PURE__ */ _.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ _.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ _.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), hp = () => {
  const [e, t] = _.useState(document.hidden);
  return _.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let Ar = 1;
class vp {
  constructor() {
    this.subscribe = (t) => (this.subscribers.push(t), () => {
      const n = this.subscribers.indexOf(t);
      this.subscribers.splice(n, 1);
    }), this.publish = (t) => {
      this.subscribers.forEach((n) => n(t));
    }, this.addToast = (t) => {
      this.publish(t), this.toasts = [
        ...this.toasts,
        t
      ];
    }, this.create = (t) => {
      var n;
      const { message: r, ...o } = t, s = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : Ar++, a = this.toasts.find((l) => l.id === s), i = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s), a ? this.toasts = this.toasts.map((l) => l.id === s ? (this.publish({
        ...l,
        ...t,
        id: s,
        title: r
      }), {
        ...l,
        ...t,
        id: s,
        dismissible: i,
        title: r
      }) : l) : this.addToast({
        title: r,
        ...o,
        dismissible: i,
        id: s
      }), s;
    }, this.dismiss = (t) => (t ? (this.dismissedToasts.add(t), requestAnimationFrame(() => this.subscribers.forEach((n) => n({
      id: t,
      dismiss: !0
    })))) : this.toasts.forEach((n) => {
      this.subscribers.forEach((r) => r({
        id: n.id,
        dismiss: !0
      }));
    }), t), this.message = (t, n) => this.create({
      ...n,
      message: t
    }), this.error = (t, n) => this.create({
      ...n,
      message: t,
      type: "error"
    }), this.success = (t, n) => this.create({
      ...n,
      type: "success",
      message: t
    }), this.info = (t, n) => this.create({
      ...n,
      type: "info",
      message: t
    }), this.warning = (t, n) => this.create({
      ...n,
      type: "warning",
      message: t
    }), this.loading = (t, n) => this.create({
      ...n,
      type: "loading",
      message: t
    }), this.promise = (t, n) => {
      if (!n)
        return;
      let r;
      n.loading !== void 0 && (r = this.create({
        ...n,
        promise: t,
        type: "loading",
        message: n.loading,
        description: typeof n.description != "function" ? n.description : void 0
      }));
      const o = Promise.resolve(t instanceof Function ? t() : t);
      let s = r !== void 0, a;
      const i = o.then(async (c) => {
        if (a = [
          "resolve",
          c
        ], _.isValidElement(c))
          s = !1, this.create({
            id: r,
            type: "default",
            message: c
          });
        else if (xp(c) && !c.ok) {
          s = !1;
          const u = typeof n.error == "function" ? await n.error(`HTTP error! status: ${c.status}`) : n.error, g = typeof n.description == "function" ? await n.description(`HTTP error! status: ${c.status}`) : n.description, b = typeof u == "object" && !_.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "error",
            description: g,
            ...b
          });
        } else if (c instanceof Error) {
          s = !1;
          const u = typeof n.error == "function" ? await n.error(c) : n.error, g = typeof n.description == "function" ? await n.description(c) : n.description, b = typeof u == "object" && !_.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "error",
            description: g,
            ...b
          });
        } else if (n.success !== void 0) {
          s = !1;
          const u = typeof n.success == "function" ? await n.success(c) : n.success, g = typeof n.description == "function" ? await n.description(c) : n.description, b = typeof u == "object" && !_.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "success",
            description: g,
            ...b
          });
        }
      }).catch(async (c) => {
        if (a = [
          "reject",
          c
        ], n.error !== void 0) {
          s = !1;
          const f = typeof n.error == "function" ? await n.error(c) : n.error, u = typeof n.description == "function" ? await n.description(c) : n.description, m = typeof f == "object" && !_.isValidElement(f) ? f : {
            message: f
          };
          this.create({
            id: r,
            type: "error",
            description: u,
            ...m
          });
        }
      }).finally(() => {
        s && (this.dismiss(r), r = void 0), n.finally == null || n.finally.call(n);
      }), l = () => new Promise((c, f) => i.then(() => a[0] === "reject" ? f(a[1]) : c(a[1])).catch(f));
      return typeof r != "string" && typeof r != "number" ? {
        unwrap: l
      } : Object.assign(r, {
        unwrap: l
      });
    }, this.custom = (t, n) => {
      const r = (n == null ? void 0 : n.id) || Ar++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const Se = new vp(), bp = (e, t) => {
  const n = (t == null ? void 0 : t.id) || Ar++;
  return Se.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, xp = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", yp = bp, wp = () => Se.toasts, Cp = () => Se.getActiveToasts(), ns = Object.assign(yp, {
  success: Se.success,
  info: Se.info,
  warning: Se.warning,
  error: Se.error,
  custom: Se.custom,
  message: Se.message,
  promise: Se.promise,
  dismiss: Se.dismiss,
  loading: Se.loading
}, {
  getHistory: wp,
  getToasts: Cp
});
ip("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function yn(e) {
  return e.label !== void 0;
}
const Sp = 3, _p = "24px", Rp = "16px", rs = 4e3, Ep = 356, Pp = 14, Np = 45, Mp = 200;
function Ve(...e) {
  return e.filter(Boolean).join(" ");
}
function Ip(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const Ap = (e) => {
  var t, n, r, o, s, a, i, l, c;
  const { invert: f, toast: u, unstyled: g, interacting: m, setHeights: b, visibleToasts: p, heights: v, index: y, toasts: x, expanded: w, removeToast: C, defaultRichColors: S, closeButton: N, style: R, cancelButtonStyle: E, actionButtonStyle: $, className: D = "", descriptionClassName: L = "", duration: A, position: j, gap: B, expandByDefault: z, classNames: P, icons: V, closeButtonAriaLabel: k = "Close toast" } = e, [M, G] = _.useState(null), [O, W] = _.useState(null), [X, Q] = _.useState(!1), [le, Y] = _.useState(!1), [T, K] = _.useState(!1), [se, te] = _.useState(!1), [H, ee] = _.useState(!1), [fe, ge] = _.useState(0), [Ke, Ne] = _.useState(0), Ce = _.useRef(u.duration || A || rs), Rt = _.useRef(null), be = _.useRef(null), ut = y === 0, Xn = y + 1 <= p, re = u.type, Ze = u.dismissible !== !1, nn = u.className || "", zt = u.descriptionClassName || "", dt = _.useMemo(() => v.findIndex((Z) => Z.toastId === u.id) || 0, [
    v,
    u.id
  ]), rn = _.useMemo(() => {
    var Z;
    return (Z = u.closeButton) != null ? Z : N;
  }, [
    u.closeButton,
    N
  ]), ft = _.useMemo(() => u.duration || A || rs, [
    u.duration,
    A
  ]), gt = _.useRef(0), Qe = _.useRef(0), on = _.useRef(0), Ge = _.useRef(null), [Kn, Zn] = j.split("-"), sn = _.useMemo(() => v.reduce((Z, me, ve) => ve >= dt ? Z : Z + me.height, 0), [
    v,
    dt
  ]), Je = hp(), pt = u.invert || f, Et = re === "loading";
  Qe.current = _.useMemo(() => dt * B + sn, [
    dt,
    sn
  ]), _.useEffect(() => {
    Ce.current = ft;
  }, [
    ft
  ]), _.useEffect(() => {
    Q(!0);
  }, []), _.useEffect(() => {
    const Z = be.current;
    if (Z) {
      const me = Z.getBoundingClientRect().height;
      return Ne(me), b((ve) => [
        {
          toastId: u.id,
          height: me,
          position: u.position
        },
        ...ve
      ]), () => b((ve) => ve.filter((xe) => xe.toastId !== u.id));
    }
  }, [
    b,
    u.id
  ]), _.useLayoutEffect(() => {
    if (!X) return;
    const Z = be.current, me = Z.style.height;
    Z.style.height = "auto";
    const ve = Z.getBoundingClientRect().height;
    Z.style.height = me, Ne(ve), b((xe) => xe.find((he) => he.toastId === u.id) ? xe.map((he) => he.toastId === u.id ? {
      ...he,
      height: ve
    } : he) : [
      {
        toastId: u.id,
        height: ve,
        position: u.position
      },
      ...xe
    ]);
  }, [
    X,
    u.title,
    u.description,
    b,
    u.id,
    u.jsx,
    u.action,
    u.cancel
  ]);
  const We = _.useCallback(() => {
    Y(!0), ge(Qe.current), b((Z) => Z.filter((me) => me.toastId !== u.id)), setTimeout(() => {
      C(u);
    }, Mp);
  }, [
    u,
    C,
    b,
    Qe
  ]);
  _.useEffect(() => {
    if (u.promise && re === "loading" || u.duration === 1 / 0 || u.type === "loading") return;
    let Z;
    return w || m || Je ? (() => {
      if (on.current < gt.current) {
        const xe = (/* @__PURE__ */ new Date()).getTime() - gt.current;
        Ce.current = Ce.current - xe;
      }
      on.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      Ce.current !== 1 / 0 && (gt.current = (/* @__PURE__ */ new Date()).getTime(), Z = setTimeout(() => {
        u.onAutoClose == null || u.onAutoClose.call(u, u), We();
      }, Ce.current));
    })(), () => clearTimeout(Z);
  }, [
    w,
    m,
    u,
    re,
    Je,
    We
  ]), _.useEffect(() => {
    u.delete && (We(), u.onDismiss == null || u.onDismiss.call(u, u));
  }, [
    We,
    u.delete
  ]);
  function an() {
    var Z;
    if (V != null && V.loading) {
      var me;
      return /* @__PURE__ */ _.createElement("div", {
        className: Ve(P == null ? void 0 : P.loader, u == null || (me = u.classNames) == null ? void 0 : me.loader, "sonner-loader"),
        "data-visible": re === "loading"
      }, V.loading);
    }
    return /* @__PURE__ */ _.createElement(up, {
      className: Ve(P == null ? void 0 : P.loader, u == null || (Z = u.classNames) == null ? void 0 : Z.loader),
      visible: re === "loading"
    });
  }
  const ln = u.icon || (V == null ? void 0 : V[re]) || lp(re);
  var Ht, jt;
  return /* @__PURE__ */ _.createElement("li", {
    tabIndex: 0,
    ref: be,
    className: Ve(D, nn, P == null ? void 0 : P.toast, u == null || (t = u.classNames) == null ? void 0 : t.toast, P == null ? void 0 : P.default, P == null ? void 0 : P[re], u == null || (n = u.classNames) == null ? void 0 : n[re]),
    "data-sonner-toast": "",
    "data-rich-colors": (Ht = u.richColors) != null ? Ht : S,
    "data-styled": !(u.jsx || u.unstyled || g),
    "data-mounted": X,
    "data-promise": !!u.promise,
    "data-swiped": H,
    "data-removed": le,
    "data-visible": Xn,
    "data-y-position": Kn,
    "data-x-position": Zn,
    "data-index": y,
    "data-front": ut,
    "data-swiping": T,
    "data-dismissible": Ze,
    "data-type": re,
    "data-invert": pt,
    "data-swipe-out": se,
    "data-swipe-direction": O,
    "data-expanded": !!(w || z && X),
    style: {
      "--index": y,
      "--toasts-before": y,
      "--z-index": x.length - y,
      "--offset": `${le ? fe : Qe.current}px`,
      "--initial-height": z ? "auto" : `${Ke}px`,
      ...R,
      ...u.style
    },
    onDragEnd: () => {
      K(!1), G(null), Ge.current = null;
    },
    onPointerDown: (Z) => {
      Z.button !== 2 && (Et || !Ze || (Rt.current = /* @__PURE__ */ new Date(), ge(Qe.current), Z.target.setPointerCapture(Z.pointerId), Z.target.tagName !== "BUTTON" && (K(!0), Ge.current = {
        x: Z.clientX,
        y: Z.clientY
      })));
    },
    onPointerUp: () => {
      var Z, me, ve;
      if (se || !Ze) return;
      Ge.current = null;
      const xe = Number(((Z = be.current) == null ? void 0 : Z.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), mt = Number(((me = be.current) == null ? void 0 : me.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), he = (/* @__PURE__ */ new Date()).getTime() - ((ve = Rt.current) == null ? void 0 : ve.getTime()), _e = M === "x" ? xe : mt, ae = Math.abs(_e) / he;
      if (Math.abs(_e) >= Np || ae > 0.11) {
        ge(Qe.current), u.onDismiss == null || u.onDismiss.call(u, u), W(M === "x" ? xe > 0 ? "right" : "left" : mt > 0 ? "down" : "up"), We(), te(!0);
        return;
      } else {
        var pe, Ie;
        (pe = be.current) == null || pe.style.setProperty("--swipe-amount-x", "0px"), (Ie = be.current) == null || Ie.style.setProperty("--swipe-amount-y", "0px");
      }
      ee(!1), K(!1), G(null);
    },
    onPointerMove: (Z) => {
      var me, ve, xe;
      if (!Ge.current || !Ze || ((me = window.getSelection()) == null ? void 0 : me.toString().length) > 0) return;
      const he = Z.clientY - Ge.current.y, _e = Z.clientX - Ge.current.x;
      var ae;
      const pe = (ae = e.swipeDirections) != null ? ae : Ip(j);
      !M && (Math.abs(_e) > 1 || Math.abs(he) > 1) && G(Math.abs(_e) > Math.abs(he) ? "x" : "y");
      let Ie = {
        x: 0,
        y: 0
      };
      const io = (ht) => 1 / (1.5 + Math.abs(ht) / 20);
      if (M === "y") {
        if (pe.includes("top") || pe.includes("bottom"))
          if (pe.includes("top") && he < 0 || pe.includes("bottom") && he > 0)
            Ie.y = he;
          else {
            const ht = he * io(he);
            Ie.y = Math.abs(ht) < Math.abs(he) ? ht : he;
          }
      } else if (M === "x" && (pe.includes("left") || pe.includes("right")))
        if (pe.includes("left") && _e < 0 || pe.includes("right") && _e > 0)
          Ie.x = _e;
        else {
          const ht = _e * io(_e);
          Ie.x = Math.abs(ht) < Math.abs(_e) ? ht : _e;
        }
      (Math.abs(Ie.x) > 0 || Math.abs(Ie.y) > 0) && ee(!0), (ve = be.current) == null || ve.style.setProperty("--swipe-amount-x", `${Ie.x}px`), (xe = be.current) == null || xe.style.setProperty("--swipe-amount-y", `${Ie.y}px`);
    }
  }, rn && !u.jsx && re !== "loading" ? /* @__PURE__ */ _.createElement("button", {
    "aria-label": k,
    "data-disabled": Et,
    "data-close-button": !0,
    onClick: Et || !Ze ? () => {
    } : () => {
      We(), u.onDismiss == null || u.onDismiss.call(u, u);
    },
    className: Ve(P == null ? void 0 : P.closeButton, u == null || (r = u.classNames) == null ? void 0 : r.closeButton)
  }, (jt = V == null ? void 0 : V.close) != null ? jt : mp) : null, (re || u.icon || u.promise) && u.icon !== null && ((V == null ? void 0 : V[re]) !== null || u.icon) ? /* @__PURE__ */ _.createElement("div", {
    "data-icon": "",
    className: Ve(P == null ? void 0 : P.icon, u == null || (o = u.classNames) == null ? void 0 : o.icon)
  }, u.promise || u.type === "loading" && !u.icon ? u.icon || an() : null, u.type !== "loading" ? ln : null) : null, /* @__PURE__ */ _.createElement("div", {
    "data-content": "",
    className: Ve(P == null ? void 0 : P.content, u == null || (s = u.classNames) == null ? void 0 : s.content)
  }, /* @__PURE__ */ _.createElement("div", {
    "data-title": "",
    className: Ve(P == null ? void 0 : P.title, u == null || (a = u.classNames) == null ? void 0 : a.title)
  }, u.jsx ? u.jsx : typeof u.title == "function" ? u.title() : u.title), u.description ? /* @__PURE__ */ _.createElement("div", {
    "data-description": "",
    className: Ve(L, zt, P == null ? void 0 : P.description, u == null || (i = u.classNames) == null ? void 0 : i.description)
  }, typeof u.description == "function" ? u.description() : u.description) : null), /* @__PURE__ */ _.isValidElement(u.cancel) ? u.cancel : u.cancel && yn(u.cancel) ? /* @__PURE__ */ _.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: u.cancelButtonStyle || E,
    onClick: (Z) => {
      yn(u.cancel) && Ze && (u.cancel.onClick == null || u.cancel.onClick.call(u.cancel, Z), We());
    },
    className: Ve(P == null ? void 0 : P.cancelButton, u == null || (l = u.classNames) == null ? void 0 : l.cancelButton)
  }, u.cancel.label) : null, /* @__PURE__ */ _.isValidElement(u.action) ? u.action : u.action && yn(u.action) ? /* @__PURE__ */ _.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: u.actionButtonStyle || $,
    onClick: (Z) => {
      yn(u.action) && (u.action.onClick == null || u.action.onClick.call(u.action, Z), !Z.defaultPrevented && We());
    },
    className: Ve(P == null ? void 0 : P.actionButton, u == null || (c = u.classNames) == null ? void 0 : c.actionButton)
  }, u.action.label) : null);
};
function os() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function kp(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, o) => {
    const s = o === 1, a = s ? "--mobile-offset" : "--offset", i = s ? Rp : _p;
    function l(c) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((f) => {
        n[`${a}-${f}`] = typeof c == "number" ? `${c}px` : c;
      });
    }
    typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((c) => {
      r[c] === void 0 ? n[`${a}-${c}`] = i : n[`${a}-${c}`] = typeof r[c] == "number" ? `${r[c]}px` : r[c];
    }) : l(i);
  }), n;
}
const Tp = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const { invert: r, position: o = "bottom-right", hotkey: s = [
    "altKey",
    "KeyT"
  ], expand: a, closeButton: i, className: l, offset: c, mobileOffset: f, theme: u = "light", richColors: g, duration: m, style: b, visibleToasts: p = Sp, toastOptions: v, dir: y = os(), gap: x = Pp, icons: w, containerAriaLabel: C = "Notifications" } = t, [S, N] = _.useState([]), R = _.useMemo(() => Array.from(new Set([
    o
  ].concat(S.filter((O) => O.position).map((O) => O.position)))), [
    S,
    o
  ]), [E, $] = _.useState([]), [D, L] = _.useState(!1), [A, j] = _.useState(!1), [B, z] = _.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), P = _.useRef(null), V = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), k = _.useRef(null), M = _.useRef(!1), G = _.useCallback((O) => {
    N((W) => {
      var X;
      return (X = W.find((Q) => Q.id === O.id)) != null && X.delete || Se.dismiss(O.id), W.filter(({ id: Q }) => Q !== O.id);
    });
  }, []);
  return _.useEffect(() => Se.subscribe((O) => {
    if (O.dismiss) {
      requestAnimationFrame(() => {
        N((W) => W.map((X) => X.id === O.id ? {
          ...X,
          delete: !0
        } : X));
      });
      return;
    }
    setTimeout(() => {
      ss.flushSync(() => {
        N((W) => {
          const X = W.findIndex((Q) => Q.id === O.id);
          return X !== -1 ? [
            ...W.slice(0, X),
            {
              ...W[X],
              ...O
            },
            ...W.slice(X + 1)
          ] : [
            O,
            ...W
          ];
        });
      });
    });
  }), [
    S
  ]), _.useEffect(() => {
    if (u !== "system") {
      z(u);
      return;
    }
    if (u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")), typeof window > "u") return;
    const O = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      O.addEventListener("change", ({ matches: W }) => {
        z(W ? "dark" : "light");
      });
    } catch {
      O.addListener(({ matches: X }) => {
        try {
          z(X ? "dark" : "light");
        } catch (Q) {
          console.error(Q);
        }
      });
    }
  }, [
    u
  ]), _.useEffect(() => {
    S.length <= 1 && L(!1);
  }, [
    S
  ]), _.useEffect(() => {
    const O = (W) => {
      var X;
      if (s.every((Y) => W[Y] || W.code === Y)) {
        var le;
        L(!0), (le = P.current) == null || le.focus();
      }
      W.code === "Escape" && (document.activeElement === P.current || (X = P.current) != null && X.contains(document.activeElement)) && L(!1);
    };
    return document.addEventListener("keydown", O), () => document.removeEventListener("keydown", O);
  }, [
    s
  ]), _.useEffect(() => {
    if (P.current)
      return () => {
        k.current && (k.current.focus({
          preventScroll: !0
        }), k.current = null, M.current = !1);
      };
  }, [
    P.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ _.createElement("section", {
    ref: n,
    "aria-label": `${C} ${V}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, R.map((O, W) => {
    var X;
    const [Q, le] = O.split("-");
    return S.length ? /* @__PURE__ */ _.createElement("ol", {
      key: O,
      dir: y === "auto" ? os() : y,
      tabIndex: -1,
      ref: P,
      className: l,
      "data-sonner-toaster": !0,
      "data-sonner-theme": B,
      "data-y-position": Q,
      "data-x-position": le,
      style: {
        "--front-toast-height": `${((X = E[0]) == null ? void 0 : X.height) || 0}px`,
        "--width": `${Ep}px`,
        "--gap": `${x}px`,
        ...b,
        ...kp(c, f)
      },
      onBlur: (Y) => {
        M.current && !Y.currentTarget.contains(Y.relatedTarget) && (M.current = !1, k.current && (k.current.focus({
          preventScroll: !0
        }), k.current = null));
      },
      onFocus: (Y) => {
        Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || M.current || (M.current = !0, k.current = Y.relatedTarget);
      },
      onMouseEnter: () => L(!0),
      onMouseMove: () => L(!0),
      onMouseLeave: () => {
        A || L(!1);
      },
      onDragEnd: () => L(!1),
      onPointerDown: (Y) => {
        Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || j(!0);
      },
      onPointerUp: () => j(!1)
    }, S.filter((Y) => !Y.position && W === 0 || Y.position === O).map((Y, T) => {
      var K, se;
      return /* @__PURE__ */ _.createElement(Ap, {
        key: Y.id,
        icons: w,
        index: T,
        toast: Y,
        defaultRichColors: g,
        duration: (K = v == null ? void 0 : v.duration) != null ? K : m,
        className: v == null ? void 0 : v.className,
        descriptionClassName: v == null ? void 0 : v.descriptionClassName,
        invert: r,
        visibleToasts: p,
        closeButton: (se = v == null ? void 0 : v.closeButton) != null ? se : i,
        interacting: A,
        position: O,
        style: v == null ? void 0 : v.style,
        unstyled: v == null ? void 0 : v.unstyled,
        classNames: v == null ? void 0 : v.classNames,
        cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
        actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
        closeButtonAriaLabel: v == null ? void 0 : v.closeButtonAriaLabel,
        removeToast: G,
        toasts: S.filter((te) => te.position == Y.position),
        heights: E.filter((te) => te.position == Y.position),
        setHeights: $,
        expandByDefault: a,
        gap: x,
        expanded: D,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), Op = ne(
  // Base styles for all toasts - custom dark styling with content-fit width
  "font-inter text-sm font-medium rounded-lg border shadow-lg !w-fit !max-w-md",
  {
    variants: {
      variant: {
        default: "bg-[#0d1213] border-gray-700 text-white",
        success: "bg-[#0d1213] border-green-600 text-green-200",
        error: "bg-[#0d1213] border-red-600 text-red-200",
        warning: "bg-[#0d1213] border-yellow-600 text-yellow-200",
        info: "bg-[#0d1213] border-blue-600 text-blue-200"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Dp = d.forwardRef(
  ({
    className: e,
    theme: t = "light",
    position: n = "bottom-center",
    visibleToasts: r = 3,
    closeButton: o = !0,
    richColors: s = !1,
    expand: a = !1,
    gap: i = 14,
    offset: l = "20px",
    ...c
  }, f) => /* @__PURE__ */ h(
    Tp,
    {
      ref: f,
      className: F("toaster group", e),
      theme: t,
      position: n,
      visibleToasts: r,
      closeButton: o,
      richColors: s,
      expand: a,
      gap: i,
      offset: l,
      toastOptions: {
        classNames: {
          toast: F(
            Op({ variant: "default" }),
            // Add flex layout here to control order
            "group toast flex items-start justify-between gap-4 p-4"
          ),
          description: "group-[.toast]:text-gray-300",
          actionButton: "group-[.toast]:bg-white group-[.toast]:text-[#0d1213] group-[.toast]:hover:bg-gray-200 group-[.toast]:rounded group-[.toast]:px-3 group-[.toast]:py-1 group-[.toast]:text-sm group-[.toast]:font-medium",
          cancelButton: "group-[.toast]:bg-gray-700 group-[.toast]:text-white group-[.toast]:hover:bg-gray-600 group-[.toast]:rounded group-[.toast]:px-3 group-[.toast]:py-1 group-[.toast]:text-sm group-[.toast]:font-medium",
          closeButton: (
            // Remove any absolute or top/left rules if present in the default
            "group-[.toast]:ml-auto group-[.toast]:bg-transparent group-[.toast]:border-0 group-[.toast]:text-white group-[.toast]:hover:bg-gray-700 group-[.toast]:hover:text-white group-[.toast]:p-1"
          )
        }
      },
      ...c
    }
  )
);
Dp.displayName = "Toaster";
const $p = () => ({
  show: (e, t = {}) => {
    const {
      duration: n = 4e3,
      action: r,
      onDismiss: o,
      dismissible: s = !0
    } = t, a = ns(e, {
      duration: n,
      dismissible: s,
      action: r ? {
        label: r.label,
        onClick: r.onClick
      } : void 0,
      onDismiss: o
    });
    return String(a);
  },
  hide: (e) => {
    ns.dismiss(e);
  }
}), Yp = $p();
export {
  Gf as Badge,
  Lf as Bleed,
  Kf as BlockStack,
  Sl as Box,
  de as Button,
  ws as ButtonGroup,
  bf as Card,
  za as ChoiceList,
  ap as ContextualSaveBar,
  eg as Divider,
  _i as Icon,
  cg as IndexFilters,
  Si as IndexTable,
  qf as InlineStack,
  sg as Link,
  Tf as Modal,
  jf as Page,
  ui as Pagination,
  Zr as Popover,
  rg as RadioButton,
  Wd as Select,
  Me as Text,
  Cs as TextField,
  Ff as TitleBar,
  Dp as Toaster,
  Wp as badgeVariants,
  Vf as bleedVariants,
  Xf as blockStackVariants,
  Cl as boxVariants,
  vl as buttonGroupVariants,
  ml as buttonVariants,
  F as cn,
  Jf as dividerVariants,
  np as iconVariants,
  ig as indexFiltersVariants,
  tp as indexTableVariants,
  Uf as inlineStackVariants,
  og as linkVariants,
  kf as modalVariants,
  ag as paginationVariants,
  hf as polarisCardVariants,
  gf as polarisChoiceListVariants,
  Bf as polarisPageVariants,
  uf as polarisPopoverVariants,
  Hd as polarisSelectVariants,
  tg as radioButtonVariants,
  rp as saveBarVariants,
  Rl as textFieldVariants,
  _l as textVariants,
  Of as titleBarVariants,
  Yp as toast,
  Op as toastVariants,
  qp as useIndexResourceState,
  Up as useSetIndexFiltersMode
};
//# sourceMappingURL=index.js.map
