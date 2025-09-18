import { jsx as p, jsxs as I, Fragment as Ie } from "react/jsx-runtime";
import * as d from "react";
import R, { useLayoutEffect as ki, useState as Oi } from "react";
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
function de(...e) {
  return d.useCallback(as(...e), e);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  const t = /* @__PURE__ */ $i(e), n = d.forwardRef((r, o) => {
    const { children: s, ...a } = r, i = d.Children.toArray(s), l = i.find(Vi);
    if (l) {
      const c = l.props.children, f = i.map((u) => u === l ? d.Children.count(c) > 1 ? d.Children.only(null) : d.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ p(t, { ...a, ref: o, children: d.isValidElement(c) ? d.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ p(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Di = /* @__PURE__ */ xt("Slot");
// @__NO_SIDE_EFFECTS__
function $i(e) {
  const t = d.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (d.isValidElement(o)) {
      const a = Bi(o), i = Li(s, o.props);
      return o.type !== d.Fragment && (i.ref = r ? as(r, a) : a), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Fi = Symbol("radix.slottable");
function Vi(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Fi;
}
function Li(e, t) {
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
function Bi(e) {
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
const co = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, uo = ls, Q = (e, t) => (n) => {
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
    let { class: u, className: g, ...h } = f;
    return Object.entries(h).every((b) => {
      let [m, v] = b;
      return Array.isArray(v) ? v.includes({
        ...s,
        ...i
      }[m]) : {
        ...s,
        ...i
      }[m] === v;
    }) ? [
      ...c,
      u,
      g
    ] : c;
  }, []);
  return uo(e, a, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
var cs = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    d: "M10 6a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Z"
  }), /* @__PURE__ */ R.createElement("path", {
    d: "M10 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /* @__PURE__ */ R.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 8.25a4.75 4.75 0 0 1 4.75-4.75h3.5a4.75 4.75 0 0 1 4.75 4.75v2.5a4.75 4.75 0 0 1-4.573 4.747l-1.335 1.714a.75.75 0 0 1-1.189-.006l-1.3-1.707a4.75 4.75 0 0 1-4.603-4.748v-2.5Zm4.75-3.25a3.25 3.25 0 0 0-3.25 3.25v2.5a3.25 3.25 0 0 0 3.25 3.25h.226a.75.75 0 0 1 .597.296l.934 1.225.96-1.232a.75.75 0 0 1 .591-.289h.192a3.25 3.25 0 0 0 3.25-3.25v-2.5a3.25 3.25 0 0 0-3.25-3.25h-3.5Z"
  }));
};
cs.displayName = "AlertBubbleIcon";
var us = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    fillRule: "evenodd",
    d: "M16.5 10a.75.75 0 0 1-.75.75h-9.69l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 1 1 1.06 1.06l-2.72 2.72h9.69a.75.75 0 0 1 .75.75Z"
  }));
};
us.displayName = "ArrowLeftIcon";
var Rn = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
Rn.displayName = "CheckIcon";
var Jt = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
Jt.displayName = "ChevronDownIcon";
var kr = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    fillRule: "evenodd",
    d: "M11.764 5.204a.75.75 0 0 1 .032 1.06l-3.516 3.736 3.516 3.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.028l4-4.25a.75.75 0 0 1 1.06-.032Z"
  }));
};
kr.displayName = "ChevronLeftIcon";
var Or = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    fillRule: "evenodd",
    d: "M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
  }));
};
Or.displayName = "ChevronRightIcon";
var Dr = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
Dr.displayName = "ChevronUpIcon";
var ds = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    d: "M3 6a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /* @__PURE__ */ R.createElement("path", {
    d: "M6.75 14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
  }), /* @__PURE__ */ R.createElement("path", {
    d: "M5.5 9.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
  }));
};
ds.displayName = "FilterIcon";
var fs = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    d: "M10.75 5.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.5h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5Z"
  }));
};
fs.displayName = "PlusIcon";
var gs = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    d: "M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"
  }), /* @__PURE__ */ R.createElement("path", {
    d: "M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"
  }));
};
gs.displayName = "RefreshIcon";
var ps = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    fillRule: "evenodd",
    d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};
ps.displayName = "SearchIcon";
var ms = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    fillRule: "evenodd",
    d: "M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /* @__PURE__ */ R.createElement("path", {
    fillRule: "evenodd",
    d: "M9.377 2.5c-.926 0-1.676.75-1.676 1.676v.688c0 .056-.043.17-.198.251-.153.08-.303.168-.448.262-.147.097-.268.076-.318.048l-.6-.346a1.676 1.676 0 0 0-2.29.613l-.622 1.08a1.676 1.676 0 0 0 .613 2.289l.648.374c.048.028.124.12.119.29a5.484 5.484 0 0 0 .005.465c.009.175-.07.27-.119.299l-.653.377a1.676 1.676 0 0 0-.613 2.29l.623 1.08a1.676 1.676 0 0 0 2.29.613l.7-.405c.048-.028.166-.048.312.043.115.071.233.139.353.202.155.08.198.195.198.251v.811c0 .926.75 1.676 1.676 1.676h1.246c.926 0 1.676-.75 1.676-1.676v-.81c0-.057.042-.171.197-.252.121-.063.239-.13.354-.202.146-.091.264-.07.312-.043l.7.405a1.676 1.676 0 0 0 2.29-.614l.623-1.08a1.676 1.676 0 0 0-.613-2.289l-.653-.377c-.05-.029-.128-.123-.119-.3a5.494 5.494 0 0 0 .005-.463c-.005-.171.07-.263.12-.291l.647-.374a1.676 1.676 0 0 0 .613-2.29l-.623-1.079a1.676 1.676 0 0 0-2.29-.613l-.6.346c-.049.028-.17.048-.318-.048a5.4 5.4 0 0 0-.448-.262c-.155-.081-.197-.195-.197-.251v-.688c0-.926-.75-1.676-1.676-1.676h-1.246Zm-.176 1.676c0-.097.078-.176.176-.176h1.246c.097 0 .176.079.176.176v.688c0 .728.462 1.298 1.003 1.58.11.058.219.122.323.19.517.337 1.25.458 1.888.09l.6-.346a.176.176 0 0 1 .24.064l.623 1.08a.176.176 0 0 1-.064.24l-.648.374c-.623.36-.888 1.034-.868 1.638a4.184 4.184 0 0 1-.004.337c-.032.615.23 1.31.867 1.677l.653.377a.176.176 0 0 1 .064.24l-.623 1.08a.176.176 0 0 1-.24.065l-.701-.405c-.624-.36-1.341-.251-1.855.069a3.91 3.91 0 0 1-.255.145c-.54.283-1.003.853-1.003 1.581v.811a.176.176 0 0 1-.176.176h-1.246a.176.176 0 0 1-.176-.176v-.81c0-.73-.462-1.3-1.003-1.582a3.873 3.873 0 0 1-.255-.146c-.514-.32-1.23-.428-1.855-.068l-.7.405a.176.176 0 0 1-.241-.065l-.623-1.08a.176.176 0 0 1 .064-.24l.653-.377c.637-.368.899-1.062.867-1.677a3.97 3.97 0 0 1-.004-.337c.02-.604-.245-1.278-.868-1.638l-.648-.374a.176.176 0 0 1-.064-.24l.623-1.08a.176.176 0 0 1 .24-.064l.6.346c.638.368 1.37.247 1.888-.09a3.85 3.85 0 0 1 .323-.19c.54-.282 1.003-.852 1.003-1.58v-.688Z"
  }));
};
ms.displayName = "SettingsIcon";
var hs = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    d: "M7.75 6.06v7.69a.75.75 0 0 1-1.5 0v-7.69l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72Z"
  }), /* @__PURE__ */ R.createElement("path", {
    d: "M13.75 6.25a.75.75 0 0 0-1.5 0v7.69l-1.72-1.72a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-7.69Z"
  }));
};
hs.displayName = "SortIcon";
var vs = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
  }), /* @__PURE__ */ R.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
vs.displayName = "XCircleIcon";
var $r = function(t) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ R.createElement("path", {
    d: "M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z"
  }));
};
$r.displayName = "XIcon";
const Fr = "-", zi = (e) => {
  const t = ji(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(Fr);
      return i[0] === "" && i.length !== 1 && i.shift(), bs(i, t) || Hi(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const l = n[a] || [];
      return i && r[a] ? [...l, ...r[a]] : l;
    }
  };
}, bs = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? bs(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Fr);
  return (a = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : a.classGroupId;
}, fo = /^\[(.+)\]$/, Hi = (e) => {
  if (fo.test(e)) {
    const t = fo.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ji = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Wi(Object.entries(e.classGroups), n).forEach(([s, a]) => {
    hr(a, r, s, t);
  }), r;
}, hr = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : go(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Gi(o)) {
        hr(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      hr(a, go(t, s), n, r);
    });
  });
}, go = (e, t) => {
  let n = e;
  return t.split(Fr).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Gi = (e) => e.isThemeGetter, Wi = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([a, i]) => [t + a, i])) : s);
  return [n, o];
}) : e, Ui = (e) => {
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
}, xs = "!", qi = (e) => {
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
    const g = l.length === 0 ? i : i.substring(f), h = g.startsWith(xs), b = h ? g.substring(1) : g, m = u && u > f ? u - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: h,
      baseClassName: b,
      maybePostfixModifierPosition: m
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: a
  }) : a;
}, Yi = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, Xi = (e) => ({
  cache: Ui(e.cacheSize),
  parseClassName: qi(e),
  ...zi(e)
}), Zi = /\s+/, Ki = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], a = e.trim().split(Zi);
  let i = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const c = a[l], {
      modifiers: f,
      hasImportantModifier: u,
      baseClassName: g,
      maybePostfixModifierPosition: h
    } = n(c);
    let b = !!h, m = r(b ? g.substring(0, h) : g);
    if (!m) {
      if (!b) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (m = r(g), !m) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      b = !1;
    }
    const v = Yi(f).join(":"), y = u ? v + xs : v, x = y + m;
    if (s.includes(x))
      continue;
    s.push(x);
    const w = o(m, b);
    for (let C = 0; C < w.length; ++C) {
      const S = w[C];
      s.push(y + S);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Qi() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ys(t)) && (r && (r += " "), r += n);
  return r;
}
const ys = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ys(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Ji(e, ...t) {
  let n, r, o, s = a;
  function a(l) {
    const c = t.reduce((f, u) => u(f), e());
    return n = Xi(c), r = n.cache.get, o = n.cache.set, s = i, i(l);
  }
  function i(l) {
    const c = r(l);
    if (c)
      return c;
    const f = Ki(l, n);
    return o(l, f), f;
  }
  return function() {
    return s(Qi.apply(null, arguments));
  };
}
const ce = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, ws = /^\[(?:([a-z-]+):)?(.+)\]$/i, el = /^\d+\/\d+$/, tl = /* @__PURE__ */ new Set(["px", "full", "screen"]), nl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, rl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ol = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, sl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, al = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ue = (e) => At(e) || tl.has(e) || el.test(e), et = (e) => $t(e, "length", pl), At = (e) => !!e && !Number.isNaN(Number(e)), Jn = (e) => $t(e, "number", At), Gt = (e) => !!e && Number.isInteger(Number(e)), il = (e) => e.endsWith("%") && At(e.slice(0, -1)), ee = (e) => ws.test(e), tt = (e) => nl.test(e), ll = /* @__PURE__ */ new Set(["length", "size", "percentage"]), cl = (e) => $t(e, ll, Cs), ul = (e) => $t(e, "position", Cs), dl = /* @__PURE__ */ new Set(["image", "url"]), fl = (e) => $t(e, dl, hl), gl = (e) => $t(e, "", ml), Wt = () => !0, $t = (e, t, n) => {
  const r = ws.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, pl = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  rl.test(e) && !ol.test(e)
), Cs = () => !1, ml = (e) => sl.test(e), hl = (e) => al.test(e), vl = () => {
  const e = ce("colors"), t = ce("spacing"), n = ce("blur"), r = ce("brightness"), o = ce("borderColor"), s = ce("borderRadius"), a = ce("borderSpacing"), i = ce("borderWidth"), l = ce("contrast"), c = ce("grayscale"), f = ce("hueRotate"), u = ce("invert"), g = ce("gap"), h = ce("gradientColorStops"), b = ce("gradientColorStopPositions"), m = ce("inset"), v = ce("margin"), y = ce("opacity"), x = ce("padding"), w = ce("saturate"), C = ce("scale"), S = ce("sepia"), P = ce("skew"), _ = ce("space"), E = ce("translate"), F = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", ee, t], A = () => [ee, t], j = () => ["", Ue, et], B = () => ["auto", At, ee], z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], N = () => ["solid", "dashed", "dotted", "double", "none"], V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], M = () => ["", "0", ee], G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], O = () => [At, ee];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Wt],
      spacing: [Ue, et],
      blur: ["none", "", tt, ee],
      brightness: O(),
      borderColor: [e],
      borderRadius: ["none", "", "full", tt, ee],
      borderSpacing: A(),
      borderWidth: j(),
      contrast: O(),
      grayscale: M(),
      hueRotate: O(),
      invert: M(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [il, et],
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
        aspect: ["auto", "square", "video", ee]
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
        object: [...z(), ee]
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
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
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
        z: ["auto", Gt, ee]
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
        flex: ["1", "auto", "initial", "none", ee]
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
        order: ["first", "last", "none", Gt, ee]
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
          span: ["full", Gt, ee]
        }, ee]
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
          span: [Gt, ee]
        }, ee]
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
        "auto-cols": ["auto", "min", "max", "fr", ee]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ee]
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
        justify: ["normal", ...T()]
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
        content: ["normal", ...T(), "baseline"]
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
        "place-content": [...T(), "baseline"]
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
        "space-x": [_]
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
        "space-y": [_]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ee, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ee, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ee, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [tt]
        }, tt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ee, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ee, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ee, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ee, t, "auto", "min", "max", "fit"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Jn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ee]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", At, Jn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ue, ee]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ee]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ee]
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
        decoration: [...N(), "wavy"]
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
        "underline-offset": ["auto", Ue, ee]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ee]
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
        content: ["none", ee]
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
        bg: [...z(), ul]
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
        bg: ["auto", "cover", "contain", cl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, fl]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
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
        border: [...N(), "hidden"]
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
        divide: N()
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
        outline: ["", ...N()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ue, ee]
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
        shadow: ["", "inner", "none", tt, gl]
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
        "drop-shadow": ["", "none", tt, ee]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ee]
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
        ease: ["linear", "in", "out", "in-out", ee]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", ee]
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
        rotate: [Gt, ee]
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
        "skew-x": [P]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [P]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ee]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ee]
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
        "will-change": ["auto", "scroll", "contents", "transform", ee]
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
        stroke: [Ue, et, Jn]
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
}, bl = /* @__PURE__ */ Ji(vl);
function D(...e) {
  return bl(ls(e));
}
const xl = Q(
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
), yl = (e) => e ? e === !0 || e === "down" ? /* @__PURE__ */ p(Jt, { className: "size-4" }) : e === "up" ? /* @__PURE__ */ p(Dr, { className: "size-4" }) : e === "select" ? /* @__PURE__ */ p(Rn, { className: "size-4" }) : null : null, po = () => /* @__PURE__ */ p(gs, { className: "size-4 animate-spin" }), ue = d.forwardRef(
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
    target: h,
    download: b,
    submit: m,
    disabled: v,
    loading: y,
    pressed: x = !1,
    accessibilityLabel: w,
    role: C,
    ariaControls: S,
    ariaExpanded: P,
    ariaDescribedBy: _,
    ariaChecked: E,
    onClick: F,
    onFocus: $,
    onBlur: L,
    onKeyPress: A,
    onKeyUp: j,
    onKeyDown: B,
    onMouseEnter: z,
    onTouchStart: N,
    onPointerDown: V,
    className: T,
    asChild: M = !1,
    ...G
  }, O) => {
    const W = !!u, X = M ? Di : W ? "a" : "button", J = y, le = v || J, Y = yl(o), k = D(
      xl({
        variant: c,
        size: t,
        tone: l === "critical" ? "critical" : l === "success" ? "success" : "default",
        textAlign: n,
        fullWidth: r,
        pressed: x
      }),
      // Handle underline removal for plain variants
      s && (c === "plain" || c === "monochromePlain") && "no-underline hover:no-underline",
      T
    ), Z = {
      id: f,
      className: k,
      disabled: le,
      "aria-label": w,
      "aria-controls": S,
      "aria-expanded": P,
      "aria-describedby": _,
      "aria-checked": E,
      "aria-pressed": x,
      "data-primary-link": i,
      role: C,
      onClick: le ? void 0 : F,
      onFocus: $,
      onBlur: L,
      onKeyPress: A,
      onKeyUp: j,
      onKeyDown: B,
      onMouseEnter: z,
      onTouchStart: N,
      onPointerDown: V,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: O,
      ...G
    };
    return W ? /* @__PURE__ */ I(
      X,
      {
        ...Z,
        href: u,
        target: g ? "_blank" : h,
        rel: g ? "noopener noreferrer" : void 0,
        download: b,
        children: [
          a && !J && /* @__PURE__ */ p("span", { className: "inline-flex shrink-0", children: a }),
          J && /* @__PURE__ */ p(po, {}),
          e && /* @__PURE__ */ p("span", { className: "inline-flex", children: e }),
          Y && !J && /* @__PURE__ */ p("span", { className: "inline-flex shrink-0", children: Y })
        ]
      }
    ) : /* @__PURE__ */ I(X, { ...Z, type: m ? "submit" : "button", children: [
      a && !J && /* @__PURE__ */ p("span", { className: "inline-flex shrink-0", children: a }),
      J && /* @__PURE__ */ p(po, {}),
      e && /* @__PURE__ */ p("span", { className: "inline-flex", children: e }),
      Y && !J && /* @__PURE__ */ p("span", { className: "inline-flex shrink-0", children: Y })
    ] });
  }
);
ue.displayName = "Button";
const wl = Q("flex items-center", {
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
}), Ss = d.forwardRef(
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
    const c = D(
      wl({
        gap: n === "segmented" ? void 0 : t,
        variant: n,
        fullWidth: r,
        connectedTop: o,
        noWrap: s
      }),
      a
    );
    return /* @__PURE__ */ p("div", { className: c, ref: l, ...i, children: e });
  }
);
Ss.displayName = "ButtonGroup";
const Cl = (e) => e && {
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
}[e] || "" : "", Sl = (e) => e && {
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
}[e] || "", _l = (e) => e && {
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
}[e] || "", Rl = (e) => e && {
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
}[e] || "", Te = (e, t = "p") => {
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
}, un = (e, t) => {
  const r = {
    0: "0",
    "0165": "[0.66px]",
    "025": "",
    "050": "2",
    100: "4"
  }[e];
  return r ? `border-${t}-${r}` : `border-${t}`;
}, dn = (e, t) => {
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
}, El = Q("", {
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
}), Pl = d.forwardRef(
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
    borderInlineStartWidth: h,
    borderInlineEndWidth: b,
    color: m,
    id: v,
    minHeight: y,
    minWidth: x,
    maxWidth: w,
    overflowX: C,
    overflowY: S,
    padding: P,
    paddingBlock: _,
    paddingBlockStart: E,
    paddingBlockEnd: F,
    paddingInline: $,
    paddingInlineStart: L,
    paddingInlineEnd: A,
    role: j,
    shadow: B,
    tabIndex: z,
    width: N,
    position: V,
    insetBlockStart: T,
    insetBlockEnd: M,
    insetInlineStart: G,
    insetInlineEnd: O,
    opacity: W,
    outlineColor: X,
    outlineStyle: J,
    outlineWidth: le,
    printHidden: Y = !1,
    visuallyHidden: k = !1,
    zIndex: Z,
    className: se,
    ...ne
  }, H) => {
    const te = t, fe = D(
      El({
        visuallyHidden: k,
        printHidden: Y
      }),
      // Background
      Cl(n),
      // Border
      mo(r),
      o === "dashed" ? "border-dashed" : "border-solid",
      _l(s),
      vo(f),
      // Individual border widths
      u && un(u, "t"),
      g && un(g, "b"),
      h && un(h, "l"),
      b && un(b, "r"),
      // Individual border radius
      a && dn(a, "bl"),
      i && dn(i, "br"),
      l && dn(l, "tl"),
      c && dn(c, "tr"),
      // Text color
      Sl(m),
      // Overflow
      C && `overflow-x-${C}`,
      S && `overflow-y-${S}`,
      // Padding
      Te(P, "p"),
      Te(_, "py"),
      Te(E, "pt"),
      Te(F, "pb"),
      Te($, "px"),
      Te(L, "pl"),
      Te(A, "pr"),
      // Shadow
      Rl(B),
      // Position
      V && `${V}`,
      // Inset (positioning)
      Te(T, "top"),
      Te(M, "bottom"),
      Te(G, "left"),
      Te(O, "right"),
      // Outline
      X && mo(X).replace("border-", "outline-"),
      J === "dashed" ? "outline-dashed" : J === "solid" ? "outline-solid" : "",
      le && vo(le).replace("border-", "outline-"),
      se
    ), ge = {
      ...y && { minHeight: y },
      ...x && { minWidth: x },
      ...w && { maxWidth: w },
      ...N && { width: N },
      ...W && { opacity: W },
      ...Z && { zIndex: Z }
    };
    return /* @__PURE__ */ p(
      te,
      {
        ref: H,
        className: fe,
        style: Object.keys(ge).length > 0 ? ge : void 0,
        id: v,
        role: j,
        tabIndex: z,
        ...ne,
        children: e
      }
    );
  }
);
Pl.displayName = "Box";
const Nl = Q("", {
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
    ...h
  }, b) => /* @__PURE__ */ p(
    t,
    {
      ref: b,
      id: a,
      className: D(
        Nl({
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
      ...h,
      children: e
    }
  )
);
Me.displayName = "Text";
const Ml = Q(
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
), Il = () => {
  const [e] = d.useState(
    () => Math.random().toString(36).substring(2, 11)
  );
  return e;
}, Al = (e) => {
  if (e)
    return typeof e == "number" ? e : 3;
}, Tl = (e) => {
  if (e)
    return e || typeof e == "number" && e > 0 ? { "aria-multiline": !0 } : void 0;
}, bo = (e) => `${e}Label`, xo = (e) => `${e}HelpText`, _s = d.forwardRef(
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
    focused: h,
    multiline: b = !1,
    error: m,
    connectedRight: v,
    connectedLeft: y,
    type: x = "text",
    name: w,
    id: C,
    role: S,
    step: P,
    largeStep: _,
    autoComplete: E,
    max: F,
    maxLength: $,
    maxHeight: L,
    min: A,
    minLength: j,
    pattern: B,
    inputMode: z,
    spellCheck: N,
    ariaOwns: V,
    ariaControls: T,
    ariaExpanded: M,
    ariaActiveDescendant: G,
    ariaAutocomplete: O,
    showCharacterCount: W = !1,
    align: X = "left",
    requiredIndicator: J = !1,
    monospaced: le = !1,
    selectTextOnFocus: Y = !1,
    suggestion: k,
    variant: Z = "inherit",
    size: se = "medium",
    tone: ne,
    autoSize: H = !1,
    loading: te = !1,
    onClearButtonClick: fe,
    onChange: ge,
    onSpinnerChange: Ze,
    onFocus: Ne,
    onBlur: Ce,
    className: Rt,
    ...be
  }, ut) => {
    const Zn = Il(), re = C ?? Zn, [Ke, rn] = d.useState(!!h), zt = d.useRef(null), dt = d.useRef(null), on = d.useRef(null), ft = d.useCallback(() => b ? dt.current : zt.current, [b]);
    d.useEffect(() => {
      const ae = ft();
      !ae || h === void 0 || (h ? ae.focus() : ae.blur());
    }, [h, ft]), d.useEffect(() => {
      const ae = zt.current;
      !ae || !(x === "text" || x === "tel" || x === "search" || x === "url" || x === "password") || !k || ae.setSelectionRange(o.length, k.length);
    }, [Ke, o, x, k]);
    const gt = k || o, Qe = x === "currency" ? "text" : x, sn = D(
      Ml({
        size: se,
        variant: Z,
        align: X,
        tone: ne,
        error: !!m,
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
        if (rn(!0), Y && !k) {
          const pe = ft();
          pe == null || pe.select();
        }
        Ne && Ne(ae);
      },
      [Y, k, ft, Ne]
    ), Qn = d.useCallback(
      (ae) => {
        var pe;
        rn(!1), !((pe = on.current) != null && pe.contains(ae == null ? void 0 : ae.relatedTarget)) && Ce && Ce(ae);
      },
      [Ce]
    ), an = d.useCallback(() => {
      fe && fe(re);
    }, [fe, re]), Je = [];
    m && Je.push(`${re}Error`), s && Je.push(xo(re)), W && Je.push(`${re}-CharacterCounter`);
    const pt = [];
    e && pt.push(`${re}-Prefix`), t && pt.push(`${re}-Suffix`), n && pt.push(`${re}-VerticalContent`), pt.unshift(bo(re));
    let Et = null;
    if (W) {
      const ae = gt.length, pe = $ ? `${ae}/${$}` : ae;
      Et = /* @__PURE__ */ p(
        "div",
        {
          id: `${re}-CharacterCounter`,
          className: "text-xs text-muted-foreground mt-1",
          children: pe
        }
      );
    }
    const ln = f && gt !== "" ? /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        className: "absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground focus:outline-hidden focus:ring-3 focus:ring-ring focus:ring-offset-2 rounded-sm",
        onClick: an,
        tabIndex: -1,
        "aria-label": "Clear",
        children: /* @__PURE__ */ p(vs, { className: "h-4 w-4" })
      }
    ) : null, cn = e ? /* @__PURE__ */ p(
      "div",
      {
        id: `${re}-Prefix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-r border-input bg-muted/50",
        children: e
      }
    ) : null, Ht = t ? /* @__PURE__ */ p(
      "div",
      {
        id: `${re}-Suffix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-l border-input bg-muted/50",
        children: t
      }
    ) : null, jt = te ? /* @__PURE__ */ p("div", { className: "absolute right-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ p("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-foreground" }) }) : null, K = l ? null : /* @__PURE__ */ I(
      "label",
      {
        id: bo(re),
        htmlFor: re,
        className: D(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          J && "after:content-['*'] after:ml-1 after:text-destructive"
        ),
        children: [
          a,
          i && /* @__PURE__ */ p(
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
    ), me = s ? /* @__PURE__ */ p("div", { id: xo(re), className: "text-xs text-muted-foreground mt-1", children: s }) : null, ve = m && typeof m != "boolean" ? /* @__PURE__ */ p(
      "div",
      {
        id: `${re}Error`,
        className: "text-xs text-red-400 text-destructive mt-1",
        role: "alert",
        children: m
      }
    ) : null, xe = n ? /* @__PURE__ */ p(
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
      max: F,
      step: P,
      minLength: j,
      maxLength: $,
      pattern: B,
      inputMode: z,
      spellCheck: N,
      autoComplete: E,
      rows: Al(b),
      size: H ? 1 : void 0,
      style: Object.keys(mt).length > 0 ? mt : void 0,
      className: sn,
      "aria-describedby": Je.length ? Je.join(" ") : void 0,
      "aria-labelledby": pt.join(" "),
      "aria-invalid": !!m,
      "aria-owns": V,
      "aria-activedescendant": G,
      "aria-autocomplete": O,
      "aria-controls": T,
      "aria-expanded": M,
      "aria-required": J,
      ...Tl(b),
      onChange: k ? void 0 : Ge,
      onInput: k ? Ge : void 0,
      onFocus: Kn,
      onBlur: Qn,
      // Password manager disable attributes
      "data-1p-ignore": E === "off" || void 0,
      "data-lpignore": E === "off" || void 0,
      "data-form-type": E === "off" ? "other" : void 0,
      ...be
    });
    return /* @__PURE__ */ I("div", { ref: on, className: "space-y-2", children: [
      K,
      y || v ? /* @__PURE__ */ I("div", { className: "flex", children: [
        y,
        /* @__PURE__ */ I("div", { className: "flex-1 relative", children: [
          xe,
          /* @__PURE__ */ I("div", { className: "relative flex", children: [
            cn,
            he,
            Ht,
            ln,
            jt
          ] })
        ] }),
        v
      ] }) : /* @__PURE__ */ I("div", { className: "relative", children: [
        xe,
        /* @__PURE__ */ I("div", { className: "relative flex", children: [
          cn,
          he,
          Ht,
          ln,
          jt
        ] })
      ] }),
      ve,
      me,
      Et
    ] });
  }
);
_s.displayName = "TextField";
function yo(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function oe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function kl(e, t) {
  const n = d.createContext(t), r = (s) => {
    const { children: a, ...i } = s, l = d.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ p(n.Provider, { value: l, children: a });
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
function en(e, t = []) {
  let n = [];
  function r(s, a) {
    const i = d.createContext(a), l = n.length;
    n = [...n, a];
    const c = (u) => {
      var y;
      const { scope: g, children: h, ...b } = u, m = ((y = g == null ? void 0 : g[e]) == null ? void 0 : y[l]) || i, v = d.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ p(m.Provider, { value: v, children: h });
    };
    c.displayName = s + "Provider";
    function f(u, g) {
      var m;
      const h = ((m = g == null ? void 0 : g[e]) == null ? void 0 : m[l]) || i, b = d.useContext(h);
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
  return o.scopeName = e, [r, Ol(o, ...t)];
}
function Ol(...e) {
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
function Dl(e) {
  const t = e + "CollectionProvider", [n, r] = en(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (m) => {
    const { scope: v, children: y } = m, x = R.useRef(null), w = R.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p(o, { scope: v, itemMap: w, collectionRef: x, children: y });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ xt(i), c = R.forwardRef(
    (m, v) => {
      const { scope: y, children: x } = m, w = s(i, y), C = de(v, w.collectionRef);
      return /* @__PURE__ */ p(l, { ref: C, children: x });
    }
  );
  c.displayName = i;
  const f = e + "CollectionItemSlot", u = "data-radix-collection-item", g = /* @__PURE__ */ xt(f), h = R.forwardRef(
    (m, v) => {
      const { scope: y, children: x, ...w } = m, C = R.useRef(null), S = de(v, C), P = s(f, y);
      return R.useEffect(() => (P.itemMap.set(C, { ref: C, ...w }), () => void P.itemMap.delete(C))), /* @__PURE__ */ p(g, { [u]: "", ref: S, children: x });
    }
  );
  h.displayName = f;
  function b(m) {
    const v = s(e + "CollectionConsumer", m);
    return R.useCallback(() => {
      const x = v.collectionRef.current;
      if (!x) return [];
      const w = Array.from(x.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort(
        (P, _) => w.indexOf(P.ref.current) - w.indexOf(_.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: a, Slot: c, ItemSlot: h },
    b,
    r
  ];
}
var $l = d.createContext(void 0);
function Fl(e) {
  const t = d.useContext($l);
  return e || t || "ltr";
}
var Vl = [
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
], ie = Vl.reduce((e, t) => {
  const n = /* @__PURE__ */ xt(`Primitive.${t}`), r = d.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, l = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(l, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ll(e, t) {
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
function Bl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = yt(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var zl = "DismissableLayer", vr = "dismissableLayer.update", Hl = "dismissableLayer.pointerDownOutside", jl = "dismissableLayer.focusOutside", wo, Rs = d.createContext({
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
    } = e, c = d.useContext(Rs), [f, u] = d.useState(null), g = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = d.useState({}), b = de(t, (_) => u(_)), m = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(v), x = f ? m.indexOf(f) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= y, S = Ul((_) => {
      const E = _.target, F = [...c.branches].some(($) => $.contains(E));
      !C || F || (o == null || o(_), a == null || a(_), _.defaultPrevented || i == null || i());
    }, g), P = ql((_) => {
      const E = _.target;
      [...c.branches].some(($) => $.contains(E)) || (s == null || s(_), a == null || a(_), _.defaultPrevented || i == null || i());
    }, g);
    return Bl((_) => {
      x === c.layers.size - 1 && (r == null || r(_), !_.defaultPrevented && i && (_.preventDefault(), i()));
    }, g), d.useEffect(() => {
      if (f)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (wo = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), Co(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = wo);
        };
    }, [f, g, n, c]), d.useEffect(() => () => {
      f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), Co());
    }, [f, c]), d.useEffect(() => {
      const _ = () => h({});
      return document.addEventListener(vr, _), () => document.removeEventListener(vr, _);
    }, []), /* @__PURE__ */ p(
      ie.div,
      {
        ...l,
        ref: b,
        style: {
          pointerEvents: w ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: oe(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: oe(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: oe(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
On.displayName = zl;
var Gl = "DismissableLayerBranch", Wl = d.forwardRef((e, t) => {
  const n = d.useContext(Rs), r = d.useRef(null), o = de(t, r);
  return d.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p(ie.div, { ...e, ref: o });
});
Wl.displayName = Gl;
function Ul(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = yt(e), r = d.useRef(!1), o = d.useRef(() => {
  });
  return d.useEffect(() => {
    const s = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Es(
            Hl,
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
function ql(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = yt(e), r = d.useRef(!1);
  return d.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Es(jl, n, { originalEvent: s }, {
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
  const e = new CustomEvent(vr);
  document.dispatchEvent(e);
}
function Es(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ll(o, s) : o.dispatchEvent(s);
}
var er = 0;
function Vr() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? So()), document.body.insertAdjacentElement("beforeend", e[1] ?? So()), er++, () => {
      er === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), er--;
    };
  }, []);
}
function So() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var tr = "focusScope.autoFocusOnMount", nr = "focusScope.autoFocusOnUnmount", _o = { bubbles: !1, cancelable: !0 }, Yl = "FocusScope", Dn = d.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, l] = d.useState(null), c = yt(o), f = yt(s), u = d.useRef(null), g = de(t, (m) => l(m)), h = d.useRef({
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
      let m = function(w) {
        if (h.paused || !i) return;
        const C = w.target;
        i.contains(C) ? u.current = C : nt(u.current, { select: !0 });
      }, v = function(w) {
        if (h.paused || !i) return;
        const C = w.relatedTarget;
        C !== null && (i.contains(C) || nt(u.current, { select: !0 }));
      }, y = function(w) {
        if (document.activeElement === document.body)
          for (const S of w)
            S.removedNodes.length > 0 && nt(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", v);
      const x = new MutationObserver(y);
      return i && x.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", v), x.disconnect();
      };
    }
  }, [r, i, h.paused]), d.useEffect(() => {
    if (i) {
      Eo.add(h);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const y = new CustomEvent(tr, _o);
        i.addEventListener(tr, c), i.dispatchEvent(y), y.defaultPrevented || (Xl(ec(Ps(i)), { select: !0 }), document.activeElement === m && nt(i));
      }
      return () => {
        i.removeEventListener(tr, c), setTimeout(() => {
          const y = new CustomEvent(nr, _o);
          i.addEventListener(nr, f), i.dispatchEvent(y), y.defaultPrevented || nt(m ?? document.body, { select: !0 }), i.removeEventListener(nr, f), Eo.remove(h);
        }, 0);
      };
    }
  }, [i, c, f, h]);
  const b = d.useCallback(
    (m) => {
      if (!n && !r || h.paused) return;
      const v = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, y = document.activeElement;
      if (v && y) {
        const x = m.currentTarget, [w, C] = Zl(x);
        w && C ? !m.shiftKey && y === C ? (m.preventDefault(), n && nt(w, { select: !0 })) : m.shiftKey && y === w && (m.preventDefault(), n && nt(C, { select: !0 })) : y === x && m.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ p(ie.div, { tabIndex: -1, ...a, ref: g, onKeyDown: b });
});
Dn.displayName = Yl;
function Xl(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (nt(r, { select: t }), document.activeElement !== n) return;
}
function Zl(e) {
  const t = Ps(e), n = Ro(t, e), r = Ro(t.reverse(), e);
  return [n, r];
}
function Ps(e) {
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
    if (!Kl(n, { upTo: t })) return n;
}
function Kl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ql(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function nt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ql(e) && t && e.select();
  }
}
var Eo = Jl();
function Jl() {
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
function ec(e) {
  return e.filter((t) => t.tagName !== "A");
}
var we = globalThis != null && globalThis.document ? d.useLayoutEffect : () => {
}, tc = d[" useId ".trim().toString()] || (() => {
}), nc = 0;
function bt(e) {
  const [t, n] = d.useState(tc());
  return we(() => {
    n((r) => r ?? String(nc++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const rc = ["top", "right", "bottom", "left"], ot = Math.min, Re = Math.max, En = Math.round, fn = Math.floor, ze = (e) => ({
  x: e,
  y: e
}), oc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, sc = {
  start: "end",
  end: "start"
};
function br(e, t, n) {
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
function Lr(e) {
  return e === "x" ? "y" : "x";
}
function Br(e) {
  return e === "y" ? "height" : "width";
}
const ac = /* @__PURE__ */ new Set(["top", "bottom"]);
function Be(e) {
  return ac.has(Xe(e)) ? "y" : "x";
}
function zr(e) {
  return Lr(Be(e));
}
function ic(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ft(e), o = zr(e), s = Br(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = Pn(a)), [a, Pn(a)];
}
function lc(e) {
  const t = Pn(e);
  return [xr(e), t, xr(t)];
}
function xr(e) {
  return e.replace(/start|end/g, (t) => sc[t]);
}
const No = ["left", "right"], Mo = ["right", "left"], cc = ["top", "bottom"], uc = ["bottom", "top"];
function dc(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Mo : No : t ? No : Mo;
    case "left":
    case "right":
      return t ? cc : uc;
    default:
      return [];
  }
}
function fc(e, t, n, r) {
  const o = Ft(e);
  let s = dc(Xe(e), n === "start", r);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(xr)))), s;
}
function Pn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => oc[t]);
}
function gc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ns(e) {
  return typeof e != "number" ? gc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Nn(e) {
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
  const s = Be(t), a = zr(t), i = Br(a), l = Xe(t), c = s === "y", f = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, g = r[i] / 2 - o[i] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ft(t)) {
    case "start":
      h[a] -= g * (n && c ? -1 : 1);
      break;
    case "end":
      h[a] += g * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const pc = async (e, t, n) => {
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
  } = Io(c, r, l), g = r, h = {}, b = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: v,
      fn: y
    } = i[m], {
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
      middlewareData: h,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = x ?? f, u = w ?? u, h = {
      ...h,
      [v]: {
        ...h[v],
        ...C
      }
    }, S && b <= 50 && (b++, typeof S == "object" && (S.placement && (g = S.placement), S.rects && (c = S.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: f,
      y: u
    } = Io(c, g, l)), m = -1);
  }
  return {
    x: f,
    y: u,
    placement: g,
    strategy: o,
    middlewareData: h
  };
};
async function Kt(e, t) {
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
    padding: h = 0
  } = Ye(t, e), b = Ns(h), v = i[g ? u === "floating" ? "reference" : "floating" : u], y = Nn(await s.getClippingRect({
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
  }, S = Nn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const mc = (e) => ({
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
    const u = Ns(f), g = {
      x: n,
      y: r
    }, h = zr(o), b = Br(h), m = await a.getDimensions(c), v = h === "y", y = v ? "top" : "left", x = v ? "bottom" : "right", w = v ? "clientHeight" : "clientWidth", C = s.reference[b] + s.reference[h] - g[h] - s.floating[b], S = g[h] - s.reference[h], P = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let _ = P ? P[w] : 0;
    (!_ || !await (a.isElement == null ? void 0 : a.isElement(P))) && (_ = i.floating[w] || s.floating[b]);
    const E = C / 2 - S / 2, F = _ / 2 - m[b] / 2 - 1, $ = ot(u[y], F), L = ot(u[x], F), A = $, j = _ - m[b] - L, B = _ / 2 - m[b] / 2 + E, z = br(A, B, j), N = !l.arrow && Ft(o) != null && B !== z && s.reference[b] / 2 - (B < A ? $ : L) - m[b] / 2 < 0, V = N ? B < A ? B - A : B - j : 0;
    return {
      [h]: g[h] + V,
      data: {
        [h]: z,
        centerOffset: B - z - V,
        ...N && {
          alignmentOffset: V
        }
      },
      reset: N
    };
  }
}), hc = function(e) {
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
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: m = !0,
        ...v
      } = Ye(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const y = Xe(o), x = Be(i), w = Xe(i) === i, C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = g || (w || !m ? [Pn(i)] : lc(i)), P = b !== "none";
      !g && P && S.push(...fc(i, m, b, C));
      const _ = [i, ...S], E = await Kt(t, v), F = [];
      let $ = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (f && F.push(E[y]), u) {
        const B = ic(o, a, C);
        F.push(E[B[0]], E[B[1]]);
      }
      if ($ = [...$, {
        placement: o,
        overflows: F
      }], !F.every((B) => B <= 0)) {
        var L, A;
        const B = (((L = s.flip) == null ? void 0 : L.index) || 0) + 1, z = _[B];
        if (z && (!(u === "alignment" ? x !== Be(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        $.every((T) => T.overflows[0] > 0 && Be(T.placement) === x)))
          return {
            data: {
              index: B,
              overflows: $
            },
            reset: {
              placement: z
            }
          };
        let N = (A = $.filter((V) => V.overflows[0] <= 0).sort((V, T) => V.overflows[1] - T.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!N)
          switch (h) {
            case "bestFit": {
              var j;
              const V = (j = $.filter((T) => {
                if (P) {
                  const M = Be(T.placement);
                  return M === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((M) => M > 0).reduce((M, G) => M + G, 0)]).sort((T, M) => T[1] - M[1])[0]) == null ? void 0 : j[0];
              V && (N = V);
              break;
            }
            case "initialPlacement":
              N = i;
              break;
          }
        if (o !== N)
          return {
            reset: {
              placement: N
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
function To(e) {
  return rc.some((t) => e[t] >= 0);
}
const vc = function(e) {
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
          const s = await Kt(t, {
            ...o,
            elementContext: "reference"
          }), a = Ao(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: To(a)
            }
          };
        }
        case "escaped": {
          const s = await Kt(t, {
            ...o,
            altBoundary: !0
          }), a = Ao(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: To(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ms = /* @__PURE__ */ new Set(["left", "top"]);
async function bc(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Xe(n), i = Ft(n), l = Be(n) === "y", c = Ms.has(a) ? -1 : 1, f = s && l ? -1 : 1, u = Ye(t, e);
  let {
    mainAxis: g,
    crossAxis: h,
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
  return i && typeof b == "number" && (h = i === "end" ? b * -1 : b), l ? {
    x: h * f,
    y: g * c
  } : {
    x: g * c,
    y: h * f
  };
}
const xc = function(e) {
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
      } = t, l = await bc(t, e);
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
}, yc = function(e) {
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
      }, f = await Kt(t, l), u = Be(Xe(o)), g = Lr(u);
      let h = c[g], b = c[u];
      if (s) {
        const v = g === "y" ? "top" : "left", y = g === "y" ? "bottom" : "right", x = h + f[v], w = h - f[y];
        h = br(x, h, w);
      }
      if (a) {
        const v = u === "y" ? "top" : "left", y = u === "y" ? "bottom" : "right", x = b + f[v], w = b - f[y];
        b = br(x, b, w);
      }
      const m = i.fn({
        ...t,
        [g]: h,
        [u]: b
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [g]: s,
            [u]: a
          }
        }
      };
    }
  };
}, wc = function(e) {
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
      }, u = Be(o), g = Lr(u);
      let h = f[g], b = f[u];
      const m = Ye(i, t), v = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const w = g === "y" ? "height" : "width", C = s.reference[g] - s.floating[w] + v.mainAxis, S = s.reference[g] + s.reference[w] - v.mainAxis;
        h < C ? h = C : h > S && (h = S);
      }
      if (c) {
        var y, x;
        const w = g === "y" ? "width" : "height", C = Ms.has(Xe(o)), S = s.reference[u] - s.floating[w] + (C && ((y = a.offset) == null ? void 0 : y[u]) || 0) + (C ? 0 : v.crossAxis), P = s.reference[u] + s.reference[w] + (C ? 0 : ((x = a.offset) == null ? void 0 : x[u]) || 0) - (C ? v.crossAxis : 0);
        b < S ? b = S : b > P && (b = P);
      }
      return {
        [g]: h,
        [u]: b
      };
    }
  };
}, Cc = function(e) {
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
      } = Ye(e, t), f = await Kt(t, c), u = Xe(o), g = Ft(o), h = Be(o) === "y", {
        width: b,
        height: m
      } = s.floating;
      let v, y;
      u === "top" || u === "bottom" ? (v = u, y = g === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = u, v = g === "end" ? "top" : "bottom");
      const x = m - f.top - f.bottom, w = b - f.left - f.right, C = ot(m - f[v], x), S = ot(b - f[y], w), P = !t.middlewareData.shift;
      let _ = C, E = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = w), (r = t.middlewareData.shift) != null && r.enabled.y && (_ = x), P && !g) {
        const $ = Re(f.left, 0), L = Re(f.right, 0), A = Re(f.top, 0), j = Re(f.bottom, 0);
        h ? E = b - 2 * ($ !== 0 || L !== 0 ? $ + L : Re(f.left, f.right)) : _ = m - 2 * (A !== 0 || j !== 0 ? A + j : Re(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: E,
        availableHeight: _
      });
      const F = await a.getDimensions(i.floating);
      return b !== F.width || m !== F.height ? {
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
  return Is(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ee(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function je(e) {
  var t;
  return (t = (Is(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Is(e) {
  return $n() ? e instanceof Node || e instanceof Ee(e).Node : !1;
}
function De(e) {
  return $n() ? e instanceof Element || e instanceof Ee(e).Element : !1;
}
function He(e) {
  return $n() ? e instanceof HTMLElement || e instanceof Ee(e).HTMLElement : !1;
}
function ko(e) {
  return !$n() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ee(e).ShadowRoot;
}
const Sc = /* @__PURE__ */ new Set(["inline", "contents"]);
function tn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = $e(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Sc.has(o);
}
const _c = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Rc(e) {
  return _c.has(Vt(e));
}
const Ec = [":popover-open", ":modal"];
function Fn(e) {
  return Ec.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Pc = ["transform", "translate", "scale", "rotate", "perspective"], Nc = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Mc = ["paint", "layout", "strict", "content"];
function Hr(e) {
  const t = jr(), n = De(e) ? $e(e) : e;
  return Pc.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Nc.some((r) => (n.willChange || "").includes(r)) || Mc.some((r) => (n.contain || "").includes(r));
}
function Ic(e) {
  let t = st(e);
  for (; He(t) && !Ot(t); ) {
    if (Hr(t))
      return t;
    if (Fn(t))
      return null;
    t = st(t);
  }
  return null;
}
function jr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Ac = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ot(e) {
  return Ac.has(Vt(e));
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
    ko(e) && e.host || // Fallback.
    je(e)
  );
  return ko(t) ? t.host : t;
}
function As(e) {
  const t = st(e);
  return Ot(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : He(t) && tn(t) ? t : As(t);
}
function Qt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = As(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ee(o);
  if (s) {
    const i = yr(a);
    return t.concat(a, a.visualViewport || [], tn(o) ? o : [], i && n ? Qt(i) : []);
  }
  return t.concat(o, Qt(o, [], n));
}
function yr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ts(e) {
  const t = $e(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = He(e), s = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, i = En(n) !== s || En(r) !== a;
  return i && (n = s, r = a), {
    width: n,
    height: r,
    $: i
  };
}
function Gr(e) {
  return De(e) ? e : e.contextElement;
}
function Tt(e) {
  const t = Gr(e);
  if (!He(t))
    return ze(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Ts(t);
  let a = (s ? En(n.width) : n.width) / r, i = (s ? En(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const Tc = /* @__PURE__ */ ze(0);
function ks(e) {
  const t = Ee(e);
  return !jr() || !t.visualViewport ? Tc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function kc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ee(e) ? !1 : t;
}
function wt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Gr(e);
  let a = ze(1);
  t && (r ? De(r) && (a = Tt(r)) : a = Tt(e));
  const i = kc(s, n, r) ? ks(s) : ze(0);
  let l = (o.left + i.x) / a.x, c = (o.top + i.y) / a.y, f = o.width / a.x, u = o.height / a.y;
  if (s) {
    const g = Ee(s), h = r && De(r) ? Ee(r) : r;
    let b = g, m = yr(b);
    for (; m && r && h !== b; ) {
      const v = Tt(m), y = m.getBoundingClientRect(), x = $e(m), w = y.left + (m.clientLeft + parseFloat(x.paddingLeft)) * v.x, C = y.top + (m.clientTop + parseFloat(x.paddingTop)) * v.y;
      l *= v.x, c *= v.y, f *= v.x, u *= v.y, l += w, c += C, b = Ee(m), m = yr(b);
    }
  }
  return Nn({
    width: f,
    height: u,
    x: l,
    y: c
  });
}
function Wr(e, t) {
  const n = Vn(e).scrollLeft;
  return t ? t.left + n : wt(je(e)).left + n;
}
function Os(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Wr(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Oc(e) {
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
  if ((u || !u && !s) && ((Vt(r) !== "body" || tn(a)) && (l = Vn(r)), He(r))) {
    const h = wt(r);
    c = Tt(r), f.x = h.x + r.clientLeft, f.y = h.y + r.clientTop;
  }
  const g = a && !u && !s ? Os(a, l, !0) : ze(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + f.x + g.x,
    y: n.y * c.y - l.scrollTop * c.y + f.y + g.y
  };
}
function Dc(e) {
  return Array.from(e.getClientRects());
}
function $c(e) {
  const t = je(e), n = Vn(e), r = e.ownerDocument.body, o = Re(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Re(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Wr(e);
  const i = -n.scrollTop;
  return $e(r).direction === "rtl" && (a += Re(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
function Fc(e, t) {
  const n = Ee(e), r = je(e), o = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, i = 0, l = 0;
  if (o) {
    s = o.width, a = o.height;
    const c = jr();
    (!c || c && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: i,
    y: l
  };
}
const Vc = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Lc(e, t) {
  const n = wt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = He(e) ? Tt(e) : ze(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
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
    r = Fc(e, n);
  else if (t === "document")
    r = $c(je(e));
  else if (De(t))
    r = Lc(t, n);
  else {
    const o = ks(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Nn(r);
}
function Ds(e, t) {
  const n = st(e);
  return n === t || !De(n) || Ot(n) ? !1 : $e(n).position === "fixed" || Ds(n, t);
}
function Bc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Qt(e, [], !1).filter((i) => De(i) && Vt(i) !== "body"), o = null;
  const s = $e(e).position === "fixed";
  let a = s ? st(e) : e;
  for (; De(a) && !Ot(a); ) {
    const i = $e(a), l = Hr(a);
    !l && i.position === "fixed" && (o = null), (s ? !l && !o : !l && i.position === "static" && !!o && Vc.has(o.position) || tn(a) && !l && Ds(e, a)) ? r = r.filter((f) => f !== a) : o = i, a = st(a);
  }
  return t.set(e, r), r;
}
function zc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Fn(t) ? [] : Bc(t, this._c) : [].concat(n), r], i = a[0], l = a.reduce((c, f) => {
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
function Hc(e) {
  const {
    width: t,
    height: n
  } = Ts(e);
  return {
    width: t,
    height: n
  };
}
function jc(e, t, n) {
  const r = He(t), o = je(t), s = n === "fixed", a = wt(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ze(0);
  function c() {
    l.x = Wr(o);
  }
  if (r || !r && !s)
    if ((Vt(t) !== "body" || tn(o)) && (i = Vn(t)), r) {
      const h = wt(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && c();
  s && !r && o && c();
  const f = o && !r && !s ? Os(o, i) : ze(0), u = a.left + i.scrollLeft - l.x - f.x, g = a.top + i.scrollTop - l.y - f.y;
  return {
    x: u,
    y: g,
    width: a.width,
    height: a.height
  };
}
function rr(e) {
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
function $s(e, t) {
  const n = Ee(e);
  if (Fn(e))
    return n;
  if (!He(e)) {
    let o = st(e);
    for (; o && !Ot(o); ) {
      if (De(o) && !rr(o))
        return o;
      o = st(o);
    }
    return n;
  }
  let r = Do(e, t);
  for (; r && Rc(r) && rr(r); )
    r = Do(r, t);
  return r && Ot(r) && rr(r) && !Hr(r) ? n : r || Ic(e) || n;
}
const Gc = async function(e) {
  const t = this.getOffsetParent || $s, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: jc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Wc(e) {
  return $e(e).direction === "rtl";
}
const Uc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Oc,
  getDocumentElement: je,
  getClippingRect: zc,
  getOffsetParent: $s,
  getElementRects: Gc,
  getClientRects: Dc,
  getDimensions: Hc,
  getScale: Tt,
  isElement: De,
  isRTL: Wc
};
function Fs(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function qc(e, t) {
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
      height: h
    } = c;
    if (i || t(), !g || !h)
      return;
    const b = fn(u), m = fn(o.clientWidth - (f + g)), v = fn(o.clientHeight - (u + h)), y = fn(f), w = {
      rootMargin: -b + "px " + -m + "px " + -v + "px " + -y + "px",
      threshold: Re(0, ot(1, l)) || 1
    };
    let C = !0;
    function S(P) {
      const _ = P[0].intersectionRatio;
      if (_ !== l) {
        if (!C)
          return a();
        _ ? a(!1, _) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      _ === 1 && !Fs(c, e.getBoundingClientRect()) && a(), C = !1;
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
function Yc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Gr(e), f = o || s ? [...c ? Qt(c) : [], ...Qt(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), s && y.addEventListener("resize", n);
  });
  const u = c && i ? qc(c, n) : null;
  let g = -1, h = null;
  a && (h = new ResizeObserver((y) => {
    let [x] = y;
    x && x.target === c && h && (h.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var w;
      (w = h) == null || w.observe(t);
    })), n();
  }), c && !l && h.observe(c), h.observe(t));
  let b, m = l ? wt(e) : null;
  l && v();
  function v() {
    const y = wt(e);
    m && !Fs(m, y) && n(), m = y, b = requestAnimationFrame(v);
  }
  return n(), () => {
    var y;
    f.forEach((x) => {
      o && x.removeEventListener("scroll", n), s && x.removeEventListener("resize", n);
    }), u == null || u(), (y = h) == null || y.disconnect(), h = null, l && cancelAnimationFrame(b);
  };
}
const Xc = xc, Zc = yc, Kc = hc, Qc = Cc, Jc = vc, $o = mc, eu = wc, tu = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Uc,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return pc(e, t, {
    ...o,
    platform: s
  });
};
var nu = typeof document < "u", ru = function() {
}, Cn = nu ? ki : ru;
function Mn(e, t) {
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
        if (!Mn(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !Mn(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Vs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fo(e, t) {
  const n = Vs(e);
  return Math.round(t * n) / n;
}
function or(e) {
  const t = d.useRef(e);
  return Cn(() => {
    t.current = e;
  }), t;
}
function ou(e) {
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
  }), [g, h] = d.useState(r);
  Mn(g, r) || h(r);
  const [b, m] = d.useState(null), [v, y] = d.useState(null), x = d.useCallback((T) => {
    T !== P.current && (P.current = T, m(T));
  }, []), w = d.useCallback((T) => {
    T !== _.current && (_.current = T, y(T));
  }, []), C = s || b, S = a || v, P = d.useRef(null), _ = d.useRef(null), E = d.useRef(f), F = l != null, $ = or(l), L = or(o), A = or(c), j = d.useCallback(() => {
    if (!P.current || !_.current)
      return;
    const T = {
      placement: t,
      strategy: n,
      middleware: g
    };
    L.current && (T.platform = L.current), tu(P.current, _.current, T).then((M) => {
      const G = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      B.current && !Mn(E.current, G) && (E.current = G, kn.flushSync(() => {
        u(G);
      }));
    });
  }, [g, t, n, L, A]);
  Cn(() => {
    c === !1 && E.current.isPositioned && (E.current.isPositioned = !1, u((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [c]);
  const B = d.useRef(!1);
  Cn(() => (B.current = !0, () => {
    B.current = !1;
  }), []), Cn(() => {
    if (C && (P.current = C), S && (_.current = S), C && S) {
      if ($.current)
        return $.current(C, S, j);
      j();
    }
  }, [C, S, j, $, F]);
  const z = d.useMemo(() => ({
    reference: P,
    floating: _,
    setReference: x,
    setFloating: w
  }), [x, w]), N = d.useMemo(() => ({
    reference: C,
    floating: S
  }), [C, S]), V = d.useMemo(() => {
    const T = {
      position: n,
      left: 0,
      top: 0
    };
    if (!N.floating)
      return T;
    const M = Fo(N.floating, f.x), G = Fo(N.floating, f.y);
    return i ? {
      ...T,
      transform: "translate(" + M + "px, " + G + "px)",
      ...Vs(N.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: G
    };
  }, [n, i, N.floating, f.x, f.y]);
  return d.useMemo(() => ({
    ...f,
    update: j,
    refs: z,
    elements: N,
    floatingStyles: V
  }), [f, j, z, N, V]);
}
const su = (e) => {
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
}, au = (e, t) => ({
  ...Xc(e),
  options: [e, t]
}), iu = (e, t) => ({
  ...Zc(e),
  options: [e, t]
}), lu = (e, t) => ({
  ...eu(e),
  options: [e, t]
}), cu = (e, t) => ({
  ...Kc(e),
  options: [e, t]
}), uu = (e, t) => ({
  ...Qc(e),
  options: [e, t]
}), du = (e, t) => ({
  ...Jc(e),
  options: [e, t]
}), fu = (e, t) => ({
  ...su(e),
  options: [e, t]
});
var gu = "Arrow", Ls = d.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ p(
    ie.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ p("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Ls.displayName = gu;
var pu = Ls;
function mu(e) {
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
var Ur = "Popper", [Bs, Ln] = en(Ur), [hu, zs] = Bs(Ur), Hs = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = d.useState(null);
  return /* @__PURE__ */ p(hu, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Hs.displayName = Ur;
var js = "PopperAnchor", Gs = d.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = zs(js, n), a = d.useRef(null), i = de(t, a);
    return d.useEffect(() => {
      s.onAnchorChange((r == null ? void 0 : r.current) || a.current);
    }), r ? null : /* @__PURE__ */ p(ie.div, { ...o, ref: i });
  }
);
Gs.displayName = js;
var qr = "PopperContent", [vu, bu] = Bs(qr), Ws = d.forwardRef(
  (e, t) => {
    var k, Z, se, ne, H, te;
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
      updatePositionStrategy: h = "optimized",
      onPlaced: b,
      ...m
    } = e, v = zs(qr, n), [y, x] = d.useState(null), w = de(t, (fe) => x(fe)), [C, S] = d.useState(null), P = mu(C), _ = (P == null ? void 0 : P.width) ?? 0, E = (P == null ? void 0 : P.height) ?? 0, F = r + (s !== "center" ? "-" + s : ""), $ = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, L = Array.isArray(c) ? c : [c], A = L.length > 0, j = {
      padding: $,
      boundary: L.filter(yu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: A
    }, { refs: B, floatingStyles: z, placement: N, isPositioned: V, middlewareData: T } = ou({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...fe) => Yc(...fe, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        au({ mainAxis: o + E, alignmentAxis: a }),
        l && iu({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? lu() : void 0,
          ...j
        }),
        l && cu({ ...j }),
        uu({
          ...j,
          apply: ({ elements: fe, rects: ge, availableWidth: Ze, availableHeight: Ne }) => {
            const { width: Ce, height: Rt } = ge.reference, be = fe.floating.style;
            be.setProperty("--radix-popper-available-width", `${Ze}px`), be.setProperty("--radix-popper-available-height", `${Ne}px`), be.setProperty("--radix-popper-anchor-width", `${Ce}px`), be.setProperty("--radix-popper-anchor-height", `${Rt}px`);
          }
        }),
        C && fu({ element: C, padding: i }),
        wu({ arrowWidth: _, arrowHeight: E }),
        g && du({ strategy: "referenceHidden", ...j })
      ]
    }), [M, G] = Ys(N), O = yt(b);
    we(() => {
      V && (O == null || O());
    }, [V, O]);
    const W = (k = T.arrow) == null ? void 0 : k.x, X = (Z = T.arrow) == null ? void 0 : Z.y, J = ((se = T.arrow) == null ? void 0 : se.centerOffset) !== 0, [le, Y] = d.useState();
    return we(() => {
      y && Y(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ p(
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
            (ne = T.transformOrigin) == null ? void 0 : ne.x,
            (H = T.transformOrigin) == null ? void 0 : H.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((te = T.hide) == null ? void 0 : te.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p(
          vu,
          {
            scope: n,
            placedSide: M,
            onArrowChange: S,
            arrowX: W,
            arrowY: X,
            shouldHideArrow: J,
            children: /* @__PURE__ */ p(
              ie.div,
              {
                "data-side": M,
                "data-align": G,
                ...m,
                ref: w,
                style: {
                  ...m.style,
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
Ws.displayName = qr;
var Us = "PopperArrow", xu = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, qs = d.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = bu(Us, r), a = xu[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ p(
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
        children: /* @__PURE__ */ p(
          pu,
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
qs.displayName = Us;
function yu(e) {
  return e !== null;
}
var wu = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, y, x;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((v = o.arrow) == null ? void 0 : v.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [c, f] = Ys(n), u = { start: "0%", center: "50%", end: "100%" }[f], g = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + i / 2, h = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + l / 2;
    let b = "", m = "";
    return c === "bottom" ? (b = a ? u : `${g}px`, m = `${-l}px`) : c === "top" ? (b = a ? u : `${g}px`, m = `${r.floating.height + l}px`) : c === "right" ? (b = `${-l}px`, m = a ? u : `${h}px`) : c === "left" && (b = `${r.floating.width + l}px`, m = a ? u : `${h}px`), { data: { x: b, y: m } };
  }
});
function Ys(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Xs = Hs, Yr = Gs, Zs = Ws, Ks = qs, Cu = "Portal", Bn = d.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, s] = d.useState(!1);
  we(() => s(!0), []);
  const a = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? ss.createPortal(/* @__PURE__ */ p(ie.div, { ...r, ref: t }), a) : null;
});
Bn.displayName = Cu;
var Su = d[" useInsertionEffect ".trim().toString()] || we;
function In({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, a] = _u({
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
        const g = Ru(f) ? f(e) : f;
        g !== e && ((u = a.current) == null || u.call(a, g));
      } else
        s(f);
    },
    [i, e, s, a]
  );
  return [l, c];
}
function _u({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = d.useState(e), o = d.useRef(n), s = d.useRef(t);
  return Su(() => {
    s.current = t;
  }, [t]), d.useEffect(() => {
    var a;
    o.current !== n && ((a = s.current) == null || a.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function Ru(e) {
  return typeof e == "function";
}
function Eu(e) {
  const t = d.useRef({ value: e, previous: e });
  return d.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Qs = Object.freeze({
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
}), Pu = "VisuallyHidden", Nu = d.forwardRef(
  (e, t) => /* @__PURE__ */ p(
    ie.span,
    {
      ...e,
      ref: t,
      style: { ...Qs, ...e.style }
    }
  )
);
Nu.displayName = Pu;
var Mu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Pt = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), pn = {}, sr = 0, Js = function(e) {
  return e && (e.host || Js(e.parentNode));
}, Iu = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Js(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Au = function(e, t, n, r) {
  var o = Iu(t, Array.isArray(e) ? e : [e]);
  pn[n] || (pn[n] = /* @__PURE__ */ new WeakMap());
  var s = pn[n], a = [], i = /* @__PURE__ */ new Set(), l = new Set(o), c = function(u) {
    !u || i.has(u) || (i.add(u), c(u.parentNode));
  };
  o.forEach(c);
  var f = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(g) {
      if (i.has(g))
        f(g);
      else
        try {
          var h = g.getAttribute(r), b = h !== null && h !== "false", m = (Pt.get(g) || 0) + 1, v = (s.get(g) || 0) + 1;
          Pt.set(g, m), s.set(g, v), a.push(g), m === 1 && b && gn.set(g, !0), v === 1 && g.setAttribute(n, "true"), b || g.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", g, y);
        }
    });
  };
  return f(t), i.clear(), sr++, function() {
    a.forEach(function(u) {
      var g = Pt.get(u) - 1, h = s.get(u) - 1;
      Pt.set(u, g), s.set(u, h), g || (gn.has(u) || u.removeAttribute(r), gn.delete(u)), h || u.removeAttribute(n);
    }), sr--, sr || (Pt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), pn = {});
  };
}, Xr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Mu(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Au(r, o, n, "aria-hidden")) : function() {
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
function ea(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Tu(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Sn = "right-scroll-bar-position", _n = "width-before-scroll-bar", ku = "with-scroll-bars-hidden", Ou = "--removed-body-scroll-bar-size";
function ar(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Du(e, t) {
  var n = Oi(function() {
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
var $u = typeof window < "u" ? d.useLayoutEffect : d.useEffect, Vo = /* @__PURE__ */ new WeakMap();
function Fu(e, t) {
  var n = Du(null, function(r) {
    return e.forEach(function(o) {
      return ar(o, r);
    });
  });
  return $u(function() {
    var r = Vo.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), a = n.current;
      o.forEach(function(i) {
        s.has(i) || ar(i, null);
      }), s.forEach(function(i) {
        o.has(i) || ar(i, a);
      });
    }
    Vo.set(n, e);
  }, [e]), n;
}
function Vu(e) {
  return e;
}
function Lu(e, t) {
  t === void 0 && (t = Vu);
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
function Bu(e) {
  e === void 0 && (e = {});
  var t = Lu(null);
  return t.options = Le({ async: !0, ssr: !1 }, e), t;
}
var ta = function(e) {
  var t = e.sideCar, n = ea(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return d.createElement(r, Le({}, n));
};
ta.isSideCarExport = !0;
function zu(e, t) {
  return e.useMedium(t), ta;
}
var na = Bu(), ir = function() {
}, zn = d.forwardRef(function(e, t) {
  var n = d.useRef(null), r = d.useState({
    onScrollCapture: ir,
    onWheelCapture: ir,
    onTouchMoveCapture: ir
  }), o = r[0], s = r[1], a = e.forwardProps, i = e.children, l = e.className, c = e.removeScrollBar, f = e.enabled, u = e.shards, g = e.sideCar, h = e.noRelative, b = e.noIsolation, m = e.inert, v = e.allowPinchZoom, y = e.as, x = y === void 0 ? "div" : y, w = e.gapMode, C = ea(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = g, P = Fu([n, t]), _ = Le(Le({}, C), o);
  return d.createElement(
    d.Fragment,
    null,
    f && d.createElement(S, { sideCar: na, removeScrollBar: c, shards: u, noRelative: h, noIsolation: b, inert: m, setCallbacks: s, allowPinchZoom: !!v, lockRef: n, gapMode: w }),
    a ? d.cloneElement(d.Children.only(i), Le(Le({}, _), { ref: P })) : d.createElement(x, Le({}, _, { className: l, ref: P }), i)
  );
});
zn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
zn.classNames = {
  fullWidth: _n,
  zeroRight: Sn
};
var Hu = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ju() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Hu();
  return t && e.setAttribute("nonce", t), e;
}
function Gu(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Wu(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Uu = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ju()) && (Gu(t, n), Wu(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, qu = function() {
  var e = Uu();
  return function(t, n) {
    d.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ra = function() {
  var e = qu(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Yu = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, lr = function(e) {
  return parseInt(e || "", 10) || 0;
}, Xu = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [lr(n), lr(r), lr(o)];
}, Zu = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Yu;
  var t = Xu(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Ku = ra(), kt = "data-scroll-locked", Qu = function(e, t, n, r) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ku, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(kt, `] {
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
  
  .`).concat(Sn, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(_n, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Sn, " .").concat(Sn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(_n, " .").concat(_n, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(kt, `] {
    `).concat(Ou, ": ").concat(i, `px;
  }
`);
}, Lo = function() {
  var e = parseInt(document.body.getAttribute(kt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ju = function() {
  d.useEffect(function() {
    return document.body.setAttribute(kt, (Lo() + 1).toString()), function() {
      var e = Lo() - 1;
      e <= 0 ? document.body.removeAttribute(kt) : document.body.setAttribute(kt, e.toString());
    };
  }, []);
}, ed = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Ju();
  var s = d.useMemo(function() {
    return Zu(o);
  }, [o]);
  return d.createElement(Ku, { styles: Qu(s, !t, o, n ? "" : "!important") });
}, wr = !1;
if (typeof window < "u")
  try {
    var mn = Object.defineProperty({}, "passive", {
      get: function() {
        return wr = !0, !0;
      }
    });
    window.addEventListener("test", mn, mn), window.removeEventListener("test", mn, mn);
  } catch {
    wr = !1;
  }
var Nt = wr ? { passive: !1 } : !1, td = function(e) {
  return e.tagName === "TEXTAREA";
}, oa = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !td(e) && n[t] === "visible")
  );
}, nd = function(e) {
  return oa(e, "overflowY");
}, rd = function(e) {
  return oa(e, "overflowX");
}, Bo = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = sa(e, r);
    if (o) {
      var s = aa(e, r), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, od = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, sd = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, sa = function(e, t) {
  return e === "v" ? nd(t) : rd(t);
}, aa = function(e, t) {
  return e === "v" ? od(t) : sd(t);
}, ad = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, id = function(e, t, n, r, o) {
  var s = ad(e, window.getComputedStyle(t).direction), a = s * r, i = n.target, l = t.contains(i), c = !1, f = a > 0, u = 0, g = 0;
  do {
    if (!i)
      break;
    var h = aa(e, i), b = h[0], m = h[1], v = h[2], y = m - v - s * b;
    (b || y) && sa(e, i) && (u += y, g += b);
    var x = i.parentNode;
    i = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (f && Math.abs(u) < 1 || !f && Math.abs(g) < 1) && (c = !0), c;
}, hn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, zo = function(e) {
  return [e.deltaX, e.deltaY];
}, Ho = function(e) {
  return e && "current" in e ? e.current : e;
}, ld = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, cd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ud = 0, Mt = [];
function dd(e) {
  var t = d.useRef([]), n = d.useRef([0, 0]), r = d.useRef(), o = d.useState(ud++)[0], s = d.useState(ra)[0], a = d.useRef(e);
  d.useEffect(function() {
    a.current = e;
  }, [e]), d.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = Tu([e.lockRef.current], (e.shards || []).map(Ho), !0).filter(Boolean);
      return m.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = d.useCallback(function(m, v) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !a.current.allowPinchZoom;
    var y = hn(m), x = n.current, w = "deltaX" in m ? m.deltaX : x[0] - y[0], C = "deltaY" in m ? m.deltaY : x[1] - y[1], S, P = m.target, _ = Math.abs(w) > Math.abs(C) ? "h" : "v";
    if ("touches" in m && _ === "h" && P.type === "range")
      return !1;
    var E = Bo(_, P);
    if (!E)
      return !0;
    if (E ? S = _ : (S = _ === "v" ? "h" : "v", E = Bo(_, P)), !E)
      return !1;
    if (!r.current && "changedTouches" in m && (w || C) && (r.current = S), !S)
      return !0;
    var F = r.current || S;
    return id(F, v, m, F === "h" ? w : C);
  }, []), l = d.useCallback(function(m) {
    var v = m;
    if (!(!Mt.length || Mt[Mt.length - 1] !== s)) {
      var y = "deltaY" in v ? zo(v) : hn(v), x = t.current.filter(function(S) {
        return S.name === v.type && (S.target === v.target || v.target === S.shadowParent) && ld(S.delta, y);
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
  }, []), c = d.useCallback(function(m, v, y, x) {
    var w = { name: m, delta: v, target: y, should: x, shadowParent: fd(y) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== w;
      });
    }, 1);
  }, []), f = d.useCallback(function(m) {
    n.current = hn(m), r.current = void 0;
  }, []), u = d.useCallback(function(m) {
    c(m.type, zo(m), m.target, i(m, e.lockRef.current));
  }, []), g = d.useCallback(function(m) {
    c(m.type, hn(m), m.target, i(m, e.lockRef.current));
  }, []);
  d.useEffect(function() {
    return Mt.push(s), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", l, Nt), document.addEventListener("touchmove", l, Nt), document.addEventListener("touchstart", f, Nt), function() {
      Mt = Mt.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", l, Nt), document.removeEventListener("touchmove", l, Nt), document.removeEventListener("touchstart", f, Nt);
    };
  }, []);
  var h = e.removeScrollBar, b = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    b ? d.createElement(s, { styles: cd(o) }) : null,
    h ? d.createElement(ed, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function fd(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const gd = zu(na, dd);
var Hn = d.forwardRef(function(e, t) {
  return d.createElement(zn, Le({}, e, { ref: t, sideCar: gd }));
});
Hn.classNames = zn.classNames;
var pd = [" ", "Enter", "ArrowUp", "ArrowDown"], md = [" ", "Enter"], Ct = "Select", [jn, Gn, hd] = Dl(Ct), [Lt, n0] = en(Ct, [
  hd,
  Ln
]), Wn = Ln(), [vd, it] = Lt(Ct), [bd, xd] = Lt(Ct), ia = (e) => {
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
    required: h,
    form: b
  } = e, m = Wn(t), [v, y] = d.useState(null), [x, w] = d.useState(null), [C, S] = d.useState(!1), P = Fl(c), [_, E] = In({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Ct
  }), [F, $] = In({
    prop: a,
    defaultProp: i,
    onChange: l,
    caller: Ct
  }), L = d.useRef(null), A = v ? b || !!v.closest("form") : !0, [j, B] = d.useState(/* @__PURE__ */ new Set()), z = Array.from(j).map((N) => N.props.value).join(";");
  return /* @__PURE__ */ p(Xs, { ...m, children: /* @__PURE__ */ I(
    vd,
    {
      required: h,
      scope: t,
      trigger: v,
      onTriggerChange: y,
      valueNode: x,
      onValueNodeChange: w,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: S,
      contentId: bt(),
      value: F,
      onValueChange: $,
      open: _,
      onOpenChange: E,
      dir: P,
      triggerPointerDownPosRef: L,
      disabled: g,
      children: [
        /* @__PURE__ */ p(jn.Provider, { scope: t, children: /* @__PURE__ */ p(
          bd,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: d.useCallback((N) => {
              B((V) => new Set(V).add(N));
            }, []),
            onNativeOptionRemove: d.useCallback((N) => {
              B((V) => {
                const T = new Set(V);
                return T.delete(N), T;
              });
            }, []),
            children: n
          }
        ) }),
        A ? /* @__PURE__ */ I(
          Ma,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: f,
            autoComplete: u,
            value: F,
            onChange: (N) => $(N.target.value),
            disabled: g,
            form: b,
            children: [
              F === void 0 ? /* @__PURE__ */ p("option", { value: "" }) : null,
              Array.from(j)
            ]
          },
          z
        ) : null
      ]
    }
  ) });
};
ia.displayName = Ct;
var la = "SelectTrigger", ca = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Wn(n), a = it(la, n), i = a.disabled || r, l = de(t, a.onTriggerChange), c = Gn(n), f = d.useRef("touch"), [u, g, h] = Aa((m) => {
      const v = c().filter((w) => !w.disabled), y = v.find((w) => w.value === a.value), x = Ta(v, m, y);
      x !== void 0 && a.onValueChange(x.value);
    }), b = (m) => {
      i || (a.onOpenChange(!0), h()), m && (a.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ p(Yr, { asChild: !0, ...s, children: /* @__PURE__ */ p(
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
        "data-placeholder": Ia(a.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: oe(o.onClick, (m) => {
          m.currentTarget.focus(), f.current !== "mouse" && b(m);
        }),
        onPointerDown: oe(o.onPointerDown, (m) => {
          f.current = m.pointerType;
          const v = m.target;
          v.hasPointerCapture(m.pointerId) && v.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (b(m), m.preventDefault());
        }),
        onKeyDown: oe(o.onKeyDown, (m) => {
          const v = u.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && g(m.key), !(v && m.key === " ") && pd.includes(m.key) && (b(), m.preventDefault());
        })
      }
    ) });
  }
);
ca.displayName = la;
var ua = "SelectValue", da = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: a = "", ...i } = e, l = it(ua, n), { onValueNodeHasChildrenChange: c } = l, f = s !== void 0, u = de(t, l.onValueNodeChange);
    return we(() => {
      c(f);
    }, [c, f]), /* @__PURE__ */ p(
      ie.span,
      {
        ...i,
        ref: u,
        style: { pointerEvents: "none" },
        children: Ia(l.value) ? /* @__PURE__ */ p(Ie, { children: a }) : s
      }
    );
  }
);
da.displayName = ua;
var yd = "SelectIcon", fa = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p(ie.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
fa.displayName = yd;
var wd = "SelectPortal", ga = (e) => /* @__PURE__ */ p(Bn, { asChild: !0, ...e });
ga.displayName = wd;
var St = "SelectContent", pa = d.forwardRef(
  (e, t) => {
    const n = it(St, e.__scopeSelect), [r, o] = d.useState();
    if (we(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? kn.createPortal(
        /* @__PURE__ */ p(ma, { scope: e.__scopeSelect, children: /* @__PURE__ */ p(jn.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ p(ha, { ...e, ref: t });
  }
);
pa.displayName = St;
var ke = 10, [ma, lt] = Lt(St), Cd = "SelectContentImpl", Sd = /* @__PURE__ */ xt("SelectContent.RemoveScroll"), ha = d.forwardRef(
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
      collisionPadding: h,
      sticky: b,
      hideWhenDetached: m,
      avoidCollisions: v,
      //
      ...y
    } = e, x = it(St, n), [w, C] = d.useState(null), [S, P] = d.useState(null), _ = de(t, (k) => C(k)), [E, F] = d.useState(null), [$, L] = d.useState(
      null
    ), A = Gn(n), [j, B] = d.useState(!1), z = d.useRef(!1);
    d.useEffect(() => {
      if (w) return Xr(w);
    }, [w]), Vr();
    const N = d.useCallback(
      (k) => {
        const [Z, ...se] = A().map((te) => te.ref.current), [ne] = se.slice(-1), H = document.activeElement;
        for (const te of k)
          if (te === H || (te == null || te.scrollIntoView({ block: "nearest" }), te === Z && S && (S.scrollTop = 0), te === ne && S && (S.scrollTop = S.scrollHeight), te == null || te.focus(), document.activeElement !== H)) return;
      },
      [A, S]
    ), V = d.useCallback(
      () => N([E, w]),
      [N, E, w]
    );
    d.useEffect(() => {
      j && V();
    }, [j, V]);
    const { onOpenChange: T, triggerPointerDownPosRef: M } = x;
    d.useEffect(() => {
      if (w) {
        let k = { x: 0, y: 0 };
        const Z = (ne) => {
          var H, te;
          k = {
            x: Math.abs(Math.round(ne.pageX) - (((H = M.current) == null ? void 0 : H.x) ?? 0)),
            y: Math.abs(Math.round(ne.pageY) - (((te = M.current) == null ? void 0 : te.y) ?? 0))
          };
        }, se = (ne) => {
          k.x <= 10 && k.y <= 10 ? ne.preventDefault() : w.contains(ne.target) || T(!1), document.removeEventListener("pointermove", Z), M.current = null;
        };
        return M.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [w, T, M]), d.useEffect(() => {
      const k = () => T(!1);
      return window.addEventListener("blur", k), window.addEventListener("resize", k), () => {
        window.removeEventListener("blur", k), window.removeEventListener("resize", k);
      };
    }, [T]);
    const [G, O] = Aa((k) => {
      const Z = A().filter((H) => !H.disabled), se = Z.find((H) => H.ref.current === document.activeElement), ne = Ta(Z, k, se);
      ne && setTimeout(() => ne.ref.current.focus());
    }), W = d.useCallback(
      (k, Z, se) => {
        const ne = !z.current && !se;
        (x.value !== void 0 && x.value === Z || ne) && (F(k), ne && (z.current = !0));
      },
      [x.value]
    ), X = d.useCallback(() => w == null ? void 0 : w.focus(), [w]), J = d.useCallback(
      (k, Z, se) => {
        const ne = !z.current && !se;
        (x.value !== void 0 && x.value === Z || ne) && L(k);
      },
      [x.value]
    ), le = r === "popper" ? Cr : va, Y = le === Cr ? {
      side: i,
      sideOffset: l,
      align: c,
      alignOffset: f,
      arrowPadding: u,
      collisionBoundary: g,
      collisionPadding: h,
      sticky: b,
      hideWhenDetached: m,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ p(
      ma,
      {
        scope: n,
        content: w,
        viewport: S,
        onViewportChange: P,
        itemRefCallback: W,
        selectedItem: E,
        onItemLeave: X,
        itemTextRefCallback: J,
        focusSelectedItem: V,
        selectedItemText: $,
        position: r,
        isPositioned: j,
        searchRef: G,
        children: /* @__PURE__ */ p(Hn, { as: Sd, allowPinchZoom: !0, children: /* @__PURE__ */ p(
          Dn,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (k) => {
              k.preventDefault();
            },
            onUnmountAutoFocus: oe(o, (k) => {
              var Z;
              (Z = x.trigger) == null || Z.focus({ preventScroll: !0 }), k.preventDefault();
            }),
            children: /* @__PURE__ */ p(
              On,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (k) => k.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ p(
                  le,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (k) => k.preventDefault(),
                    ...y,
                    ...Y,
                    onPlaced: () => B(!0),
                    ref: _,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: oe(y.onKeyDown, (k) => {
                      const Z = k.ctrlKey || k.altKey || k.metaKey;
                      if (k.key === "Tab" && k.preventDefault(), !Z && k.key.length === 1 && O(k.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key)) {
                        let ne = A().filter((H) => !H.disabled).map((H) => H.ref.current);
                        if (["ArrowUp", "End"].includes(k.key) && (ne = ne.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(k.key)) {
                          const H = k.target, te = ne.indexOf(H);
                          ne = ne.slice(te + 1);
                        }
                        setTimeout(() => N(ne)), k.preventDefault();
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
ha.displayName = Cd;
var _d = "SelectItemAlignedPosition", va = d.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = it(St, n), a = lt(St, n), [i, l] = d.useState(null), [c, f] = d.useState(null), u = de(t, (_) => f(_)), g = Gn(n), h = d.useRef(!1), b = d.useRef(!0), { viewport: m, selectedItem: v, selectedItemText: y, focusSelectedItem: x } = a, w = d.useCallback(() => {
    if (s.trigger && s.valueNode && i && c && m && v && y) {
      const _ = s.trigger.getBoundingClientRect(), E = c.getBoundingClientRect(), F = s.valueNode.getBoundingClientRect(), $ = y.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const H = $.left - E.left, te = F.left - H, fe = _.left - te, ge = _.width + fe, Ze = Math.max(ge, E.width), Ne = window.innerWidth - ke, Ce = yo(te, [
          ke,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ke, Ne - Ze)
        ]);
        i.style.minWidth = ge + "px", i.style.left = Ce + "px";
      } else {
        const H = E.right - $.right, te = window.innerWidth - F.right - H, fe = window.innerWidth - _.right - te, ge = _.width + fe, Ze = Math.max(ge, E.width), Ne = window.innerWidth - ke, Ce = yo(te, [
          ke,
          Math.max(ke, Ne - Ze)
        ]);
        i.style.minWidth = ge + "px", i.style.right = Ce + "px";
      }
      const L = g(), A = window.innerHeight - ke * 2, j = m.scrollHeight, B = window.getComputedStyle(c), z = parseInt(B.borderTopWidth, 10), N = parseInt(B.paddingTop, 10), V = parseInt(B.borderBottomWidth, 10), T = parseInt(B.paddingBottom, 10), M = z + N + j + T + V, G = Math.min(v.offsetHeight * 5, M), O = window.getComputedStyle(m), W = parseInt(O.paddingTop, 10), X = parseInt(O.paddingBottom, 10), J = _.top + _.height / 2 - ke, le = A - J, Y = v.offsetHeight / 2, k = v.offsetTop + Y, Z = z + N + k, se = M - Z;
      if (Z <= J) {
        const H = L.length > 0 && v === L[L.length - 1].ref.current;
        i.style.bottom = "0px";
        const te = c.clientHeight - m.offsetTop - m.offsetHeight, fe = Math.max(
          le,
          Y + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (H ? X : 0) + te + V
        ), ge = Z + fe;
        i.style.height = ge + "px";
      } else {
        const H = L.length > 0 && v === L[0].ref.current;
        i.style.top = "0px";
        const fe = Math.max(
          J,
          z + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (H ? W : 0) + Y
        ) + se;
        i.style.height = fe + "px", m.scrollTop = Z - J + m.offsetTop;
      }
      i.style.margin = `${ke}px 0`, i.style.minHeight = G + "px", i.style.maxHeight = A + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    g,
    s.trigger,
    s.valueNode,
    i,
    c,
    m,
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
  const P = d.useCallback(
    (_) => {
      _ && b.current === !0 && (w(), x == null || x(), b.current = !1);
    },
    [w, x]
  );
  return /* @__PURE__ */ p(
    Ed,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ p(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ p(
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
va.displayName = _d;
var Rd = "SelectPopperPosition", Cr = d.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = ke,
    ...s
  } = e, a = Wn(n);
  return /* @__PURE__ */ p(
    Zs,
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
Cr.displayName = Rd;
var [Ed, Zr] = Lt(St, {}), Sr = "SelectViewport", ba = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = lt(Sr, n), a = Zr(Sr, n), i = de(t, s.onViewportChange), l = d.useRef(0);
    return /* @__PURE__ */ I(Ie, { children: [
      /* @__PURE__ */ p(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ p(jn.Slot, { scope: n, children: /* @__PURE__ */ p(
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
              const h = Math.abs(l.current - f.scrollTop);
              if (h > 0) {
                const b = window.innerHeight - ke * 2, m = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), y = Math.max(m, v);
                if (y < b) {
                  const x = y + h, w = Math.min(b, x), C = x - w;
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
ba.displayName = Sr;
var xa = "SelectGroup", [Pd, Nd] = Lt(xa), ya = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = bt();
    return /* @__PURE__ */ p(Pd, { scope: n, id: o, children: /* @__PURE__ */ p(ie.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
ya.displayName = xa;
var wa = "SelectLabel", Ca = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Nd(wa, n);
    return /* @__PURE__ */ p(ie.div, { id: o.id, ...r, ref: t });
  }
);
Ca.displayName = wa;
var An = "SelectItem", [Md, Sa] = Lt(An), _a = d.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = it(An, n), l = lt(An, n), c = i.value === r, [f, u] = d.useState(s ?? ""), [g, h] = d.useState(!1), b = de(
      t,
      (x) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, x, r, o);
      }
    ), m = bt(), v = d.useRef("touch"), y = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p(
      Md,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: m,
        isSelected: c,
        onItemTextChange: d.useCallback((x) => {
          u((w) => w || ((x == null ? void 0 : x.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p(
          jn.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ p(
              ie.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": c && g,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: b,
                onFocus: oe(a.onFocus, () => h(!0)),
                onBlur: oe(a.onBlur, () => h(!1)),
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
                  ((C = l.searchRef) == null ? void 0 : C.current) !== "" && x.key === " " || (md.includes(x.key) && y(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
_a.displayName = An;
var Yt = "SelectItemText", Ra = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, a = it(Yt, n), i = lt(Yt, n), l = Sa(Yt, n), c = xd(Yt, n), [f, u] = d.useState(null), g = de(
      t,
      (y) => u(y),
      l.onItemTextChange,
      (y) => {
        var x;
        return (x = i.itemTextRefCallback) == null ? void 0 : x.call(i, y, l.value, l.disabled);
      }
    ), h = f == null ? void 0 : f.textContent, b = d.useMemo(
      () => /* @__PURE__ */ p("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: v } = c;
    return we(() => (m(b), () => v(b)), [m, v, b]), /* @__PURE__ */ I(Ie, { children: [
      /* @__PURE__ */ p(ie.span, { id: l.textId, ...s, ref: g }),
      l.isSelected && a.valueNode && !a.valueNodeHasChildren ? kn.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
Ra.displayName = Yt;
var Ea = "SelectItemIndicator", Pa = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Sa(Ea, n).isSelected ? /* @__PURE__ */ p(ie.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Pa.displayName = Ea;
var _r = "SelectScrollUpButton", Id = d.forwardRef((e, t) => {
  const n = lt(_r, e.__scopeSelect), r = Zr(_r, e.__scopeSelect), [o, s] = d.useState(!1), a = de(t, r.onScrollButtonChange);
  return we(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const c = l.scrollTop > 0;
        s(c);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p(
    Na,
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
Id.displayName = _r;
var Rr = "SelectScrollDownButton", Ad = d.forwardRef((e, t) => {
  const n = lt(Rr, e.__scopeSelect), r = Zr(Rr, e.__scopeSelect), [o, s] = d.useState(!1), a = de(t, r.onScrollButtonChange);
  return we(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const c = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < c;
        s(f);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p(
    Na,
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
Ad.displayName = Rr;
var Na = d.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = lt("SelectScrollButton", n), a = d.useRef(null), i = Gn(n), l = d.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return d.useEffect(() => () => l(), [l]), we(() => {
    var f;
    const c = i().find((u) => u.ref.current === document.activeElement);
    (f = c == null ? void 0 : c.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ p(
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
}), Td = "SelectSeparator", kd = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p(ie.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
kd.displayName = Td;
var Er = "SelectArrow", Od = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Wn(n), s = it(Er, n), a = lt(Er, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ p(Ks, { ...o, ...r, ref: t }) : null;
  }
);
Od.displayName = Er;
var Dd = "SelectBubbleInput", Ma = d.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = d.useRef(null), s = de(r, o), a = Eu(t);
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
    }, [a, t]), /* @__PURE__ */ p(
      ie.select,
      {
        ...n,
        style: { ...Qs, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Ma.displayName = Dd;
function Ia(e) {
  return e === "" || e === void 0;
}
function Aa(e) {
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
function Ta(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = $d(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((c) => c !== n));
  const l = a.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function $d(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Fd = ia, Vd = ca, Ld = da, Bd = fa, zd = ga, Hd = pa, jd = ba, Gd = ya, Wd = Ca, jo = _a, Go = Ra, Wo = Pa;
const Ud = Q(
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
), qd = Q(
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
), Uo = Q(
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
), qo = (e) => typeof e == "string" ? { value: e, label: e } : e, Yd = (e) => typeof e == "object" && "title" in e && "options" in e, Xd = d.forwardRef(
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
    onFocus: h,
    onBlur: b,
    requiredIndicator: m = !1,
    tone: v,
    className: y,
    ...x
  }, w) => {
    const C = d.useId(), S = l || C, P = d.useCallback(
      (j) => {
        g && g(j, S);
      },
      [g, S]
    ), _ = D(
      Ud({
        tone: v === "magic" ? "magic" : "default",
        error: !!u,
        labelInline: o
      }),
      y
    ), E = n && /* @__PURE__ */ p(
      ue,
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
    ), F = /* @__PURE__ */ I(
      "div",
      {
        className: D(
          "flex items-center justify-between",
          o && "sr-only",
          r && "sr-only"
        ),
        children: [
          /* @__PURE__ */ I(
            "label",
            {
              htmlFor: S,
              className: D(
                "block text-sm font-medium text-gray-900 mb-1",
                o && "sr-only",
                r && "sr-only"
              ),
              children: [
                t,
                m && /* @__PURE__ */ p("span", { className: "text-red-500 ml-1", children: "*" })
              ]
            }
          ),
          !o && E
        ]
      }
    ), $ = o && !r && /* @__PURE__ */ I("div", { className: "flex items-center bg-gray-50 border border-gray-300 border-r-0 rounded-l-lg px-3 py-2 text-sm font-medium text-gray-700", children: [
      t,
      m && /* @__PURE__ */ p("span", { className: "text-red-500 ml-1", children: "*" }),
      E && /* @__PURE__ */ p("div", { className: "ml-2", children: E })
    ] }), L = a && /* @__PURE__ */ p("div", { className: "mt-1 text-sm text-gray-600", children: a }), A = u && typeof u == "string" && /* @__PURE__ */ p("div", { className: "mt-1 text-sm text-red-600", children: u });
    return /* @__PURE__ */ I("div", { className: "w-full", children: [
      F,
      /* @__PURE__ */ I("div", { className: D("flex", o && "w-full"), children: [
        $,
        /* @__PURE__ */ I(
          Fd,
          {
            value: f,
            onValueChange: P,
            disabled: s,
            name: c,
            ...x,
            children: [
              /* @__PURE__ */ I(
                Vd,
                {
                  ref: w,
                  id: S,
                  className: _,
                  onFocus: h,
                  onBlur: b,
                  children: [
                    /* @__PURE__ */ p(Ld, { placeholder: i }),
                    /* @__PURE__ */ p(Bd, { asChild: !0, children: /* @__PURE__ */ p(Jt, { className: "h-4 w-4 opacity-50" }) })
                  ]
                }
              ),
              /* @__PURE__ */ p(zd, { children: /* @__PURE__ */ p(
                Hd,
                {
                  className: D(qd()),
                  position: "popper",
                  sideOffset: 4,
                  children: /* @__PURE__ */ p(jd, { className: "p-1", children: e.map((j, B) => {
                    if (Yd(j))
                      return /* @__PURE__ */ I(Gd, { children: [
                        /* @__PURE__ */ p(Wd, { className: "py-1.5 pl-8 pr-2 text-sm font-semibold text-gray-900", children: j.title }),
                        j.options.map((z) => {
                          const N = qo(z);
                          return /* @__PURE__ */ I(
                            jo,
                            {
                              value: N.value,
                              disabled: N.disabled,
                              className: D(
                                Uo({
                                  disabled: N.disabled
                                })
                              ),
                              children: [
                                /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(Wo, { children: /* @__PURE__ */ p(Rn, { className: "h-4 w-4" }) }) }),
                                /* @__PURE__ */ p(Go, { children: /* @__PURE__ */ I("div", { className: "flex items-center", children: [
                                  N.prefix && /* @__PURE__ */ p("span", { className: "mr-2", children: N.prefix }),
                                  N.label
                                ] }) })
                              ]
                            },
                            N.key || N.value
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
                          className: D(
                            Uo({
                              disabled: z.disabled
                            })
                          ),
                          children: [
                            /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(Wo, { children: /* @__PURE__ */ p(Rn, { className: "h-4 w-4" }) }) }),
                            /* @__PURE__ */ p(Go, { children: /* @__PURE__ */ I("div", { className: "flex items-center", children: [
                              z.prefix && /* @__PURE__ */ p("span", { className: "mr-2", children: z.prefix }),
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
Xd.displayName = "Select";
function Zd(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var Bt = (e) => {
  const { present: t, children: n } = e, r = Kd(t), o = typeof n == "function" ? n({ present: r.isPresent }) : d.Children.only(n), s = de(r.ref, Qd(o));
  return typeof n == "function" || r.isPresent ? d.cloneElement(o, { ref: s }) : null;
};
Bt.displayName = "Presence";
function Kd(e) {
  const [t, n] = d.useState(), r = d.useRef(null), o = d.useRef(e), s = d.useRef("none"), a = e ? "mounted" : "unmounted", [i, l] = Zd(a, {
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
    const c = vn(r.current);
    s.current = i === "mounted" ? c : "none";
  }, [i]), we(() => {
    const c = r.current, f = o.current;
    if (f !== e) {
      const g = s.current, h = vn(c);
      e ? l("MOUNT") : h === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(f && g !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), we(() => {
    if (t) {
      let c;
      const f = t.ownerDocument.defaultView ?? window, u = (h) => {
        const m = vn(r.current).includes(h.animationName);
        if (h.target === t && m && (l("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, g = (h) => {
        h.target === t && (s.current = vn(r.current));
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
function vn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Qd(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Un = "Popover", [ka, r0] = en(Un, [
  Ln
]), nn = Ln(), [Jd, ct] = ka(Un), Oa = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !1
  } = e, i = nn(t), l = d.useRef(null), [c, f] = d.useState(!1), [u, g] = In({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Un
  });
  return /* @__PURE__ */ p(Xs, { ...i, children: /* @__PURE__ */ p(
    Jd,
    {
      scope: t,
      contentId: bt(),
      triggerRef: l,
      open: u,
      onOpenChange: g,
      onOpenToggle: d.useCallback(() => g((h) => !h), [g]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: d.useCallback(() => f(!0), []),
      onCustomAnchorRemove: d.useCallback(() => f(!1), []),
      modal: a,
      children: n
    }
  ) });
};
Oa.displayName = Un;
var Da = "PopoverAnchor", ef = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ct(Da, n), s = nn(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = o;
    return d.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ p(Yr, { ...s, ...r, ref: t });
  }
);
ef.displayName = Da;
var $a = "PopoverTrigger", Fa = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ct($a, n), s = nn(n), a = de(t, o.triggerRef), i = /* @__PURE__ */ p(
      ie.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ha(o.open),
        ...r,
        ref: a,
        onClick: oe(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ p(Yr, { asChild: !0, ...s, children: i });
  }
);
Fa.displayName = $a;
var Kr = "PopoverPortal", [tf, nf] = ka(Kr, {
  forceMount: void 0
}), Va = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = ct(Kr, t);
  return /* @__PURE__ */ p(tf, { scope: t, forceMount: n, children: /* @__PURE__ */ p(Bt, { present: n || s.open, children: /* @__PURE__ */ p(Bn, { asChild: !0, container: o, children: r }) }) });
};
Va.displayName = Kr;
var Dt = "PopoverContent", La = d.forwardRef(
  (e, t) => {
    const n = nf(Dt, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = ct(Dt, e.__scopePopover);
    return /* @__PURE__ */ p(Bt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p(of, { ...o, ref: t }) : /* @__PURE__ */ p(sf, { ...o, ref: t }) });
  }
);
La.displayName = Dt;
var rf = /* @__PURE__ */ xt("PopoverContent.RemoveScroll"), of = d.forwardRef(
  (e, t) => {
    const n = ct(Dt, e.__scopePopover), r = d.useRef(null), o = de(t, r), s = d.useRef(!1);
    return d.useEffect(() => {
      const a = r.current;
      if (a) return Xr(a);
    }, []), /* @__PURE__ */ p(Hn, { as: rf, allowPinchZoom: !0, children: /* @__PURE__ */ p(
      Ba,
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
), sf = d.forwardRef(
  (e, t) => {
    const n = ct(Dt, e.__scopePopover), r = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ p(
      Ba,
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
), Ba = d.forwardRef(
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
    } = e, g = ct(Dt, n), h = nn(n);
    return Vr(), /* @__PURE__ */ p(
      Dn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ p(
          On,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: f,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => g.onOpenChange(!1),
            children: /* @__PURE__ */ p(
              Zs,
              {
                "data-state": Ha(g.open),
                role: "dialog",
                id: g.contentId,
                ...h,
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
), za = "PopoverClose", af = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ct(za, n);
    return /* @__PURE__ */ p(
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
af.displayName = za;
var lf = "PopoverArrow", cf = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = nn(n);
    return /* @__PURE__ */ p(Ks, { ...o, ...r, ref: t });
  }
);
cf.displayName = lf;
function Ha(e) {
  return e ? "open" : "closed";
}
var uf = Oa, df = Fa, ff = Va, gf = La;
const pf = Q(
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
), mf = (e) => {
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
}, hf = (e) => {
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
}, qn = d.forwardRef(
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
    fixed: h = !1,
    ariaHaspopup: b,
    hideOnPrint: m = !1,
    onClose: v,
    autofocusTarget: y = "container",
    preventCloseOnChildOverlayClick: x = !1,
    captureOverscroll: w = !1,
    className: C,
    ...S
  }, P) => {
    const _ = (B) => {
      B || v("click-outside");
    }, E = () => {
      v("escape");
    }, F = (B) => {
      x || v("click-outside");
    }, $ = D(
      pf({
        sectioned: c,
        fullWidth: f,
        fullHeight: u,
        fluidContent: g,
        hideOnPrint: m
      }),
      C
    ), L = mf(t), A = hf(n);
    return /* @__PURE__ */ I(uf, { open: r, onOpenChange: _, children: [
      /* @__PURE__ */ p(df, { asChild: !0, children: /* @__PURE__ */ p(a, { children: o }) }),
      /* @__PURE__ */ p(ff, { children: /* @__PURE__ */ p(
        gf,
        {
          ref: P,
          side: L,
          align: A,
          className: $,
          style: { zIndex: i },
          onEscapeKeyDown: E,
          onInteractOutside: F,
          ...S,
          children: c ? /* @__PURE__ */ p("div", { className: "p-4", children: e }) : e
        }
      ) })
    ] });
  }
);
qn.displayName = "Popover";
const vf = Q("space-y-1", {
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
}), bf = Q(
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
), ja = d.forwardRef(
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
    const h = (v, y) => {
      if (i) return;
      let x;
      o ? y ? x = [...n, v] : x = n.filter((w) => w !== v) : x = y ? [v] : [], l && l(x, r);
    }, b = () => {
      i || l && l([], r);
    }, m = D(
      vf({
        tone: c === "magic" ? "magic" : "default",
        disabled: i
      }),
      f
    );
    return /* @__PURE__ */ I(
      "fieldset",
      {
        ref: g,
        className: m,
        disabled: i,
        ...u,
        children: [
          !s && /* @__PURE__ */ p("legend", { className: "text-sm font-medium text-gray-900 mb-3", children: e }),
          /* @__PURE__ */ p(Ie, { children: t.map((v, y) => {
            const x = n.includes(v.value), w = `${r}-${v.value}-${y}`, C = o ? "checkbox" : "radio";
            return /* @__PURE__ */ I(
              "label",
              {
                className: D(
                  bf({
                    disabled: i || v.disabled,
                    selected: x
                  })
                ),
                children: [
                  /* @__PURE__ */ p(
                    "input",
                    {
                      type: C,
                      id: w,
                      name: o ? `${r}[]` : r,
                      value: v.value,
                      checked: x,
                      disabled: i || v.disabled,
                      onChange: (S) => h(v.value, S.target.checked),
                      className: "mt-0.5 h-4 w-4 text-black rounded accent-black cursor-pointer"
                    }
                  ),
                  /* @__PURE__ */ I("div", { className: "flex-1", children: [
                    /* @__PURE__ */ p(Me, { variant: "bodyMd", as: "span", children: v.label }),
                    v.helpText && /* @__PURE__ */ p(Me, { variant: "bodySm", as: "p", tone: "subdued", children: v.helpText })
                  ] })
                ]
              },
              v.value
            );
          }) }),
          n.length > 0 && /* @__PURE__ */ p(ue, { variant: "plain", onClick: b, disabled: i, children: "Clear" }),
          a && /* @__PURE__ */ p(Me, { variant: "bodySm", tone: "critical", as: "p", className: "mt-2", children: a })
        ]
      }
    );
  }
);
ja.displayName = "ChoiceList";
const xf = (e) => e && {
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
}[e] || "bg-white", yf = Q(
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
), wf = (e) => {
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
}, Cf = d.forwardRef(
  ({
    children: e,
    background: t = "bg-surface",
    padding: n,
    roundedAbove: r = "sm",
    className: o,
    ...s
  }, a) => {
    const i = D(
      yf({
        roundedAbove: r
      }),
      xf(t),
      wf(n),
      // Exact Polaris border color: rgba(227, 227, 227, 1)
      "[border-color:rgba(227,227,227,1)]",
      // Exact Polaris shadow-300: 0px 4px 6px -2px rgba(26, 26, 26, 0.20)
      "[box-shadow:0px_4px_6px_-2px_rgba(26,26,26,0.20)]",
      // Exact Polaris text color: rgba(48, 48, 48, 1)
      "[color:rgba(48,48,48,1)]",
      o
    );
    return /* @__PURE__ */ p("div", { ref: a, className: i, ...s, children: e });
  }
);
Cf.displayName = "Card";
var Yn = "Dialog", [Ga, o0] = en(Yn), [Sf, Fe] = Ga(Yn), Wa = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = e, i = d.useRef(null), l = d.useRef(null), [c, f] = In({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Yn
  });
  return /* @__PURE__ */ p(
    Sf,
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
Wa.displayName = Yn;
var Ua = "DialogTrigger", _f = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(Ua, n), s = de(t, o.triggerRef);
    return /* @__PURE__ */ p(
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
_f.displayName = Ua;
var Qr = "DialogPortal", [Rf, qa] = Ga(Qr, {
  forceMount: void 0
}), Ya = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Fe(Qr, t);
  return /* @__PURE__ */ p(Rf, { scope: t, forceMount: n, children: d.Children.map(r, (a) => /* @__PURE__ */ p(Bt, { present: n || s.open, children: /* @__PURE__ */ p(Bn, { asChild: !0, container: o, children: a }) })) });
};
Ya.displayName = Qr;
var Tn = "DialogOverlay", Xa = d.forwardRef(
  (e, t) => {
    const n = qa(Tn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Fe(Tn, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p(Bt, { present: r || s.open, children: /* @__PURE__ */ p(Pf, { ...o, ref: t }) }) : null;
  }
);
Xa.displayName = Tn;
var Ef = /* @__PURE__ */ xt("DialogOverlay.RemoveScroll"), Pf = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(Tn, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p(Hn, { as: Ef, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p(
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
), _t = "DialogContent", Za = d.forwardRef(
  (e, t) => {
    const n = qa(_t, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Fe(_t, e.__scopeDialog);
    return /* @__PURE__ */ p(Bt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p(Nf, { ...o, ref: t }) : /* @__PURE__ */ p(Mf, { ...o, ref: t }) });
  }
);
Za.displayName = _t;
var Nf = d.forwardRef(
  (e, t) => {
    const n = Fe(_t, e.__scopeDialog), r = d.useRef(null), o = de(t, n.contentRef, r);
    return d.useEffect(() => {
      const s = r.current;
      if (s) return Xr(s);
    }, []), /* @__PURE__ */ p(
      Ka,
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
), Mf = d.forwardRef(
  (e, t) => {
    const n = Fe(_t, e.__scopeDialog), r = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ p(
      Ka,
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
), Ka = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = Fe(_t, n), l = d.useRef(null), c = de(t, l);
    return Vr(), /* @__PURE__ */ I(Ie, { children: [
      /* @__PURE__ */ p(
        Dn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ p(
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
      /* @__PURE__ */ I(Ie, { children: [
        /* @__PURE__ */ p(If, { titleId: i.titleId }),
        /* @__PURE__ */ p(Tf, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Jr = "DialogTitle", Qa = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(Jr, n);
    return /* @__PURE__ */ p(ie.h2, { id: o.titleId, ...r, ref: t });
  }
);
Qa.displayName = Jr;
var Ja = "DialogDescription", ei = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(Ja, n);
    return /* @__PURE__ */ p(ie.p, { id: o.descriptionId, ...r, ref: t });
  }
);
ei.displayName = Ja;
var ti = "DialogClose", ni = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(ti, n);
    return /* @__PURE__ */ p(
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
ni.displayName = ti;
function eo(e) {
  return e ? "open" : "closed";
}
var ri = "DialogTitleWarning", [s0, oi] = kl(ri, {
  contentName: _t,
  titleName: Jr,
  docsSlug: "dialog"
}), If = ({ titleId: e }) => {
  const t = oi(ri), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return d.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Af = "DialogDescriptionWarning", Tf = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${oi(Af).contentName}}.`;
  return d.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, si = Wa, ai = Ya, to = Xa, no = Za, ii = Qa, li = ei, kf = ni;
function Of({
  ...e
}) {
  return /* @__PURE__ */ p(si, { "data-slot": "dialog", ...e });
}
function ci({
  ...e
}) {
  return /* @__PURE__ */ p(ai, { "data-slot": "dialog-portal", ...e });
}
function ui({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    to,
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
function Df({
  className: e,
  children: t,
  showCloseButton: n = !0,
  ...r
}) {
  return /* @__PURE__ */ I(ci, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ p(ui, {}),
    /* @__PURE__ */ I(
      no,
      {
        "data-slot": "dialog-content",
        className: D(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...r,
        children: [
          t,
          n && /* @__PURE__ */ I(
            kf,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ p($r, {}),
                /* @__PURE__ */ p("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
const $f = Q(
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
), Ff = d.forwardRef(
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
    ), h = () => t ? /* @__PURE__ */ I("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ p(
        "iframe",
        {
          src: t,
          className: "w-full flex-1 min-h-[400px] border-0",
          title: `Modal content from ${t}`,
          ...f
        }
      ),
      c && /* @__PURE__ */ p("div", { className: "border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-2", children: c })
    ] }) : /* @__PURE__ */ I("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ p("div", { className: "flex-1", children: e }),
      c && /* @__PURE__ */ p("div", { className: "border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-2", children: c })
    ] });
    return /* @__PURE__ */ p(Of, { open: r, onOpenChange: g, children: /* @__PURE__ */ I(ci, { children: [
      /* @__PURE__ */ p(ui, { className: "bg-black/50" }),
      /* @__PURE__ */ p(
        Df,
        {
          ref: u,
          className: D(
            $f({ variant: n }),
            "p-0 overflow-hidden",
            // Remove default padding and handle overflow
            i
          ),
          showCloseButton: l,
          ...f,
          children: h()
        }
      )
    ] }) });
  }
);
Ff.displayName = "Modal";
const Vf = Q(
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
), Lf = Q("text-lg font-semibold text-gray-900 leading-6"), Bf = Q("flex items-center gap-2 cursor-pointer"), zf = d.forwardRef(
  ({ title: e, children: t, className: n, showBorder: r = !0, ...o }, s) => /* @__PURE__ */ I(
    "div",
    {
      ref: s,
      className: D(Vf({ showBorder: r }), n),
      ...o,
      children: [
        e && /* @__PURE__ */ p("h2", { className: D(Lf()), children: e }),
        t && /* @__PURE__ */ p("div", { className: D(Bf()), children: t }),
        !e && t && /* @__PURE__ */ p("div", { className: "flex-1" })
      ]
    }
  )
);
zf.displayName = "TitleBar";
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
}, Hf = Q("", {
  variants: {
    // Base styling variants can be added here if needed
  },
  defaultVariants: {}
}), jf = d.forwardRef(
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
    const f = D(
      Hf(),
      // Negative margins for bleeding effect
      It(t, "x"),
      It(n, "y"),
      It(r, "t"),
      It(o, "b"),
      It(s, "l"),
      It(a, "r"),
      i
    );
    return /* @__PURE__ */ p("div", { ref: c, className: f, ...l, children: e });
  }
);
jf.displayName = "Bleed";
const Gf = Q(
  // Base styles matching Polaris Page - simple layout wrapper without background
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
), Wf = Q("px-6 py-4", {
  variants: {
    compact: {
      true: "pb-2",
      false: "pb-4"
    }
  },
  defaultVariants: {
    compact: !1
  }
}), Uf = Q("px-6 py-6", {
  variants: {},
  defaultVariants: {}
}), qf = d.forwardRef(
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
    pageReadyAccessibilityLabel: h,
    filterActions: b = !1,
    additionalMetadata: m,
    onActionRollup: v,
    hasSubtitleMaxWidth: y = !1,
    className: x,
    ...w
  }, C) => {
    const S = a ? "full" : i ? "narrow" : "default", P = (E, F = "secondary") => {
      var L;
      const $ = "url" in E && E.url;
      return /* @__PURE__ */ p(
        ue,
        {
          variant: F === "primary" ? "primary" : "secondary",
          onClick: E.onAction,
          url: $ ? E.url : void 0,
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
    }, _ = () => {
      var E, F;
      return g ? /* @__PURE__ */ I("div", { className: "flex items-center justify-between px-6 py-4", children: [
        /* @__PURE__ */ p(
          ue,
          {
            variant: "secondary",
            disabled: !g.hasPrevious,
            onClick: g.onPrevious,
            url: g.previousURL,
            icon: /* @__PURE__ */ p(kr, {}),
            accessibilityLabel: ((E = g.accessibilityLabels) == null ? void 0 : E.previous) || "Previous",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ p(
          ue,
          {
            variant: "secondary",
            disabled: !g.hasNext,
            onClick: g.onNext,
            url: g.nextURL,
            icon: /* @__PURE__ */ p(Or, {}),
            accessibilityLabel: ((F = g.accessibilityLabels) == null ? void 0 : F.next) || "Next",
            children: "Next"
          }
        )
      ] }) : null;
    };
    return /* @__PURE__ */ I(
      "div",
      {
        ref: C,
        className: D(Gf({ width: S }), x),
        "aria-label": h,
        ...w,
        children: [
          (t || u || l || c.length > 0 || f.length > 0) && /* @__PURE__ */ p("header", { className: D(Wf({ compact: o })), children: /* @__PURE__ */ I("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ I("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ I("div", { className: "flex items-center gap-1 mb-1", children: [
                u && /* @__PURE__ */ p(
                  ue,
                  {
                    variant: "plain",
                    onClick: u.onAction,
                    url: "url" in u ? u.url : void 0,
                    external: "external" in u ? u.external : void 0,
                    target: "target" in u ? u.target : void 0,
                    download: "download" in u ? u.download : void 0,
                    accessibilityLabel: u.accessibilityLabel || (typeof u.content == "string" ? u.content : "Back"),
                    className: "hover:bg-gray-200 rounded-md p-1 -ml-1",
                    icon: /* @__PURE__ */ p(us, { className: "size-5" })
                  }
                ),
                t && !s && /* @__PURE__ */ I(Ie, { children: [
                  /* @__PURE__ */ p(Me, { as: "h1", variant: "headingLg", fontWeight: "semibold", children: t }),
                  r && /* @__PURE__ */ p("div", { className: "flex items-center", children: r })
                ] })
              ] }),
              n && /* @__PURE__ */ p(
                "div",
                {
                  className: D(
                    u && "ml-12",
                    // Offset to align with title when back action is present
                    y && "max-w-[640px]"
                  ),
                  children: /* @__PURE__ */ p(Me, { variant: "bodyLg", tone: "subdued", children: n })
                }
              ),
              m && /* @__PURE__ */ p("div", { className: "mt-2", children: m })
            ] }),
            (l || c.length > 0 || f.length > 0) && /* @__PURE__ */ p("div", { className: "flex items-center gap-2 ml-4", children: /* @__PURE__ */ I(Ss, { children: [
              c.map(
                (E) => P(E, "secondary")
              ),
              l && P(l, "primary")
            ] }) })
          ] }) }),
          /* @__PURE__ */ p("main", { className: D(Uf()), children: e }),
          _()
        ]
      }
    );
  }
);
qf.displayName = "Page";
const di = Q(
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
), a0 = di, Yf = d.forwardRef(
  ({
    children: e,
    tone: t = "default",
    progress: n = "complete",
    icon: r,
    size: o = "medium",
    className: s,
    ...a
  }, i) => {
    const l = D(
      di({
        tone: t,
        size: o,
        progress: n
      }),
      s
    ), c = d.useMemo(() => {
      var f;
      return r ? typeof r == "string" ? r === "placeholder" ? /* @__PURE__ */ p("span", { className: "w-3 h-3 bg-current rounded-full opacity-50 mr-1" }) : /* @__PURE__ */ p("span", { className: "mr-1", children: r }) : d.isValidElement(r) ? d.cloneElement(r, {
        className: D(
          "w-3 h-3 mr-1",
          (f = r.props) == null ? void 0 : f.className
        )
      }) : typeof r == "function" ? /* @__PURE__ */ p(r, { className: "w-3 h-3 mr-1" }) : null : null;
    }, [r]);
    return /* @__PURE__ */ I("span", { ref: i, className: l, ...a, children: [
      c,
      e
    ] });
  }
);
Yf.displayName = "Badge";
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
}[e] || "", Xf = (e) => {
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
}, Zf = Q(
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
), Kf = d.forwardRef(
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
    const f = t, u = Xf(s), g = D(
      Zf({
        align: n,
        direction: r,
        blockAlign: o,
        wrap: a
      }),
      u,
      i
    );
    return /* @__PURE__ */ p(f, { ref: c, className: g, ...l, children: e });
  }
);
Kf.displayName = "InlineStack";
const Zo = (e) => e && {
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
}[e] || "", Qf = (e) => {
  if (!e) return "";
  if (typeof e == "string") {
    const n = Zo(e);
    return n ? `gap-${n}` : "";
  }
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    const o = Zo(r);
    if (o) {
      const s = n === "xs" ? "" : `${n}:`;
      t.push(`${s}gap-${o}`);
    }
  }), t.join(" ");
}, Jf = Q(
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
), eg = d.forwardRef(
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
    const u = t, g = Qf(o), h = D(
      Jf({
        align: n,
        inlineAlign: r,
        reverseOrder: a
      }),
      g,
      l
    );
    return /* @__PURE__ */ p(
      u,
      {
        ref: f,
        className: h,
        id: s,
        role: i,
        ...c,
        children: e
      }
    );
  }
);
eg.displayName = "BlockStack";
const tg = (e) => e && {
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
}[e] || "", ng = (e) => e && {
  0: "border-t-0",
  "025": "border-t",
  "050": "border-t-2",
  100: "border-t-4",
  150: "border-t-[6px]",
  200: "border-t-8",
  300: "border-t-[12px]",
  400: "border-t-[16px]",
  500: "border-t-[20px]"
}[e] || "", rg = Q(
  "w-full border-solid",
  // Base divider styling - border-t width will be applied separately
  {
    variants: {
      // No additional variants needed for basic divider
    },
    defaultVariants: {}
  }
), og = d.forwardRef(
  ({
    borderColor: e = "border-secondary",
    borderWidth: t = "025",
    className: n,
    ...r
  }, o) => {
    const s = tg(e), a = ng(t), i = D(
      rg(),
      s,
      a,
      n
    );
    return /* @__PURE__ */ p("hr", { ref: o, className: i, ...r });
  }
);
og.displayName = "Divider";
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
}, sg = Q(
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
), ag = Q(
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
), ig = d.forwardRef(
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
    tone: h,
    bleed: b,
    bleedBlockStart: m,
    bleedBlockEnd: v,
    bleedInlineStart: y,
    bleedInlineEnd: x,
    className: w,
    ...C
  }, S) => {
    const P = d.useId(), _ = s || P, E = d.useCallback(
      (A) => {
        o || l && l(A.target.checked, _);
      },
      [l, _, o]
    ), F = D(
      Ut(b, "bleed"),
      Ut(m, "bleedBlockStart"),
      Ut(v, "bleedBlockEnd"),
      Ut(y, "bleedInlineStart"),
      Ut(x, "bleedInlineEnd")
    ), $ = D(
      sg({
        disabled: o,
        fill: u,
        tone: h === "magic" ? "magic" : "default"
      }),
      F,
      w
    ), L = D(
      ag({
        tone: h === "magic" ? "magic" : "default"
      })
    );
    return /* @__PURE__ */ I("label", { className: $, children: [
      /* @__PURE__ */ p(
        "input",
        {
          ref: S,
          type: "radio",
          id: _,
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
        !n && /* @__PURE__ */ p("div", { className: "text-sm font-medium text-gray-900", children: t }),
        g && /* @__PURE__ */ p("div", { className: "text-xs text-gray-600 mt-1", children: g })
      ] })
    ] });
  }
);
ig.displayName = "RadioButton";
const lg = Q(
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
), cg = d.forwardRef(
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
    const h = o || (r ? "_blank" : void 0), b = d.useCallback(
      (x) => {
        i && i();
      },
      [i]
    ), m = D(
      lg({
        monochrome: s,
        removeUnderline: a,
        dataPrimaryLink: c
      }),
      f
    );
    return /* @__PURE__ */ p(
      "a",
      {
        ref: g,
        id: e,
        href: t,
        target: h,
        rel: h === "_blank" ? "noopener noreferrer" : void 0,
        onClick: b,
        "aria-label": l,
        "data-primary-link": c || void 0,
        className: m,
        ...u,
        children: n
      }
    );
  }
);
cg.displayName = "Link";
const ug = Q("flex items-center !text-red-200", {
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
}), Ko = Q(
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
), fi = d.forwardRef(
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
    type: h = "page",
    className: b,
    asChild: m = !1,
    ...v
  }, y) => {
    d.useEffect(() => {
      const P = (_) => {
        t != null && t.includes(_.key) && i && u && (_.preventDefault(), u()), e != null && e.includes(_.key) && a && f && (_.preventDefault(), f());
      };
      return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
    }, [t, e, i, a, u, f]);
    const x = c == null ? void 0 : c.previous, w = c == null ? void 0 : c.next, C = () => /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        disabled: !i,
        onClick: i ? u : void 0,
        "aria-label": x || "Previous",
        className: D(
          Ko({
            position: g ? "previous" : "single",
            disabled: !i
          })
        ),
        children: /* @__PURE__ */ p(
          kr,
          {
            className: "size-5",
            fill: i ? "black" : "#b0b0bc"
          }
        )
      }
    ), S = () => /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        disabled: !a,
        onClick: a ? f : void 0,
        "aria-label": w || "Next",
        className: D(
          Ko({
            position: g ? "next" : "single",
            disabled: !a
          })
        ),
        children: /* @__PURE__ */ p(
          Or,
          {
            className: "size-5",
            fill: a ? "black" : "#b0b0bc"
          }
        )
      }
    );
    return /* @__PURE__ */ p(
      "nav",
      {
        ref: y,
        "aria-label": l,
        className: D(
          ug({ type: h, hasLabel: !!g }),
          b
        ),
        ...v,
        children: g ? (
          // With label: Previous - Label - Next (spaced apart)
          /* @__PURE__ */ I(Ie, { children: [
            /* @__PURE__ */ p(C, {}),
            /* @__PURE__ */ p("div", { className: "flex-1 flex justify-center gap-2", children: typeof g == "string" ? /* @__PURE__ */ p(Me, { className: "mx-1", variant: "bodySm", tone: "subdued", children: g }) : g }),
            /* @__PURE__ */ p(S, {})
          ] })
        ) : (
          // Without label: Connected Previous/Next buttons
          /* @__PURE__ */ I("div", { className: "inline-flex", children: [
            /* @__PURE__ */ p(C, {}),
            /* @__PURE__ */ p(S, {})
          ] })
        )
      }
    );
  }
);
fi.displayName = "Pagination";
const dg = Q("w-full", {
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
}), i0 = () => {
  const [e, t] = d.useState(
    "DEFAULT"
    /* Default */
  );
  return { mode: e, setMode: t };
}, fg = ({
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
  return /* @__PURE__ */ p(
    qn,
    {
      active: n,
      activator: /* @__PURE__ */ I(
        ue,
        {
          size: "micro",
          variant: "tertiary",
          className: "border-dashed ml-2",
          onClick: r,
          disabled: t,
          pressed: n,
          children: [
            e.label,
            a && /* @__PURE__ */ p("span", { className: "ml-1 text-xs text-gray-600", children: a })
          ]
        }
      ),
      onClose: () => {
      },
      preferredPosition: "below",
      sectioned: !0,
      children: /* @__PURE__ */ p(
        ja,
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
}, Qo = ({ sortOptions: e, onSort: t, disabled: n, isOpen: r, onToggle: o, onClose: s }) => /* @__PURE__ */ p(
  qn,
  {
    active: r,
    activator: /* @__PURE__ */ p(
      ue,
      {
        variant: "tertiary",
        icon: /* @__PURE__ */ p(hs, { className: "size-4" }),
        disclosure: !0,
        disabled: n,
        onClick: o,
        children: "Sort"
      }
    ),
    onClose: s,
    children: /* @__PURE__ */ p("div", { className: "p-2 min-w-48", children: e.map((a) => /* @__PURE__ */ I(
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
), gg = d.forwardRef(
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
    disableQueryField: h = !1,
    disableStickyMode: b,
    isFlushWhenSticky: m,
    canCreateNewView: v,
    onCreateNewView: y,
    filteringAccessibilityLabel: x = "Filter",
    filteringAccessibilityTooltip: w,
    closeOnChildOverlayClick: C,
    disableKeyboardShortcuts: S,
    showEditColumnsButton: P = !1,
    autoFocusSearchField: _ = !1,
    tabs: E,
    selected: F = 0,
    onSelect: $,
    filters: L,
    appliedFilters: A,
    onClearAll: j,
    pinnedFilters: B,
    queryValue: z = "",
    queryPlaceholder: N = "Searching in all..",
    onQueryChange: V,
    onQueryClear: T,
    className: M,
    ...G
  }, O) => {
    const [W, X] = d.useState(
      c === "FILTERING"
      /* Filtering */
    ), [J, le] = d.useState(null);
    d.useEffect(() => {
      X(
        c === "FILTERING"
        /* Filtering */
      );
    }, [c]);
    const Y = (H) => {
      le((te) => te === H ? null : H);
    }, k = () => {
      le(null);
    }, Z = () => {
      u(W ? "DEFAULT" : "FILTERING"), X(!W), !W && l && l(
        "FILTERING"
        /* Filtering */
      );
    }, se = (H) => {
      V && V(H);
    }, ne = () => {
      T && T();
    };
    return /* @__PURE__ */ p(
      "div",
      {
        ref: O,
        className: D(
          dg({ mode: c, disabled: g }),
          M
        ),
        ...G,
        children: /* @__PURE__ */ p("div", { className: "p-1 border border-[#e3e3e3] rounded-md border-b-0 rounded-b-none", children: W ? /* @__PURE__ */ I("div", { className: "space-y-2", children: [
          /* @__PURE__ */ I("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ p("div", { className: "flex items-center gap-2", children: e && e.length > 0 && /* @__PURE__ */ p(
              Qo,
              {
                sortOptions: e,
                onSort: n,
                disabled: g,
                isOpen: J === "sort",
                onToggle: () => Y("sort"),
                onClose: k
              }
            ) }),
            /* @__PURE__ */ p("div", { className: "flex-1", children: /* @__PURE__ */ p(
              _s,
              {
                label: "",
                labelHidden: !0,
                value: z,
                onChange: se,
                placeholder: N,
                clearButton: z.length > 0,
                onClearButtonClick: ne,
                disabled: h || g,
                autoFocus: _,
                autoComplete: "off",
                size: "slim",
                className: "border border-[#e3e3e3] hover:border-[#e3e3e3] bg-white"
              }
            ) }),
            /* @__PURE__ */ p(
              ue,
              {
                onClick: Z,
                disabled: g,
                size: "medium",
                children: "Cancel"
              }
            )
          ] }),
          B && B.length > 0 && /* @__PURE__ */ p("div", { className: "border-t border-gray-200 pt-0.5", children: /* @__PURE__ */ p("div", { className: "flex flex-wrap gap-2", children: B.map((H) => /* @__PURE__ */ p(
            fg,
            {
              filter: H,
              disabled: g,
              isOpen: J === `filter-${H.key}`,
              onToggle: () => Y(`filter-${H.key}`),
              onClose: k
            },
            H.key
          )) }) }),
          A && A.length > 0 && /* @__PURE__ */ I("div", { className: "flex flex-wrap gap-2", children: [
            A.map((H) => /* @__PURE__ */ I(
              "div",
              {
                className: "inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-black rounded-md text-sm",
                children: [
                  /* @__PURE__ */ p(Me, { variant: "bodySm", children: H.label }),
                  /* @__PURE__ */ p(
                    "button",
                    {
                      onClick: H.onRemove,
                      className: "p-0.5 hover:bg-black rounded",
                      children: /* @__PURE__ */ p($r, { className: "size-3" })
                    }
                  )
                ]
              },
              H.key
            )),
            j && /* @__PURE__ */ p(ue, { variant: "plain", size: "micro", onClick: j, children: "Clear all" })
          ] }),
          (a || i) && /* @__PURE__ */ I("div", { className: "flex justify-end gap-2", children: [
            i && /* @__PURE__ */ p(
              ue,
              {
                variant: "secondary",
                onClick: i.onAction,
                disabled: i.disabled,
                loading: i.loading,
                children: "Cancel"
              }
            ),
            a && /* @__PURE__ */ p(
              ue,
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
            e && e.length > 0 && /* @__PURE__ */ p(
              Qo,
              {
                sortOptions: e,
                onSort: n,
                disabled: g,
                isOpen: J === "sort",
                onToggle: () => Y("sort"),
                onClose: k
              }
            ),
            E && E.length > 0 && /* @__PURE__ */ p(Ie, { children: E.map((H, te) => /* @__PURE__ */ p(
              ue,
              {
                size: "micro",
                variant: "tertiary",
                pressed: te === F,
                onClick: () => {
                  H.onAction(), $ && $(te);
                },
                disabled: g,
                children: H.content
              },
              H.id
            )) })
          ] }),
          /* @__PURE__ */ I("div", { className: "flex items-center gap-2", children: [
            P && /* @__PURE__ */ p(
              ue,
              {
                variant: "tertiary",
                icon: /* @__PURE__ */ p(ms, { className: "size-4" }),
                accessibilityLabel: "Edit columns",
                disabled: g,
                children: "Edit columns"
              }
            ),
            /* @__PURE__ */ p(
              ue,
              {
                variant: "tertiary",
                className: "flex w-12 justify-items-end",
                icon: /* @__PURE__ */ I(Ie, { children: [
                  /* @__PURE__ */ p(ps, { className: "size-5" }),
                  /* @__PURE__ */ p(ds, { className: "size-5" })
                ] }),
                onClick: Z,
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
gg.displayName = "IndexFilters";
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
function Xn(e) {
  return e instanceof Function;
}
function pg(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function mg(e, t) {
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
      const f = Math.round((Date.now() - a) * 100) / 100, u = Math.round((Date.now() - c) * 100) / 100, g = u / 16, h = (b, m) => {
        for (b = String(b); b.length < m; )
          b = " " + b;
        return b;
      };
      console.info(`%c⏱ ${h(u, 5)} /${h(f, 5)} ms`, `
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
function hg(e, t, n, r) {
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
function vg(e, t, n, r) {
  var o, s;
  const i = {
    ...e._getDefaultColumnDef(),
    ...t
  }, l = i.accessorKey;
  let c = (o = (s = i.id) != null ? s : l ? typeof String.prototype.replaceAll == "function" ? l.replaceAll(".", "_") : l.replace(/\./g, "_") : void 0) != null ? o : typeof i.header == "string" ? i.header : void 0, f;
  if (i.accessorFn ? f = i.accessorFn : l && (l.includes(".") ? f = (g) => {
    let h = g;
    for (const m of l.split(".")) {
      var b;
      h = (b = h) == null ? void 0 : b[m], process.env.NODE_ENV !== "production" && h === void 0 && console.warn(`"${m}" in deeply nested key "${l}" returned undefined.`);
    }
    return h;
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
      return [u, ...(g = u.columns) == null ? void 0 : g.flatMap((h) => h.getFlatColumns())];
    }, q(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: U(() => [e._getOrderColumnsFn()], (g) => {
      var h;
      if ((h = u.columns) != null && h.length) {
        let b = u.columns.flatMap((m) => m.getLeafColumns());
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
const bg = {
  createTable: (e) => {
    e.getHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var s, a;
      const i = (s = r == null ? void 0 : r.map((u) => n.find((g) => g.id === u)).filter(Boolean)) != null ? s : [], l = (a = o == null ? void 0 : o.map((u) => n.find((g) => g.id === u)).filter(Boolean)) != null ? a : [], c = n.filter((u) => !(r != null && r.includes(u.id)) && !(o != null && o.includes(u.id)));
      return bn(t, [...i, ...c, ...l], e);
    }, q(e.options, ye, "getHeaderGroups")), e.getCenterHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((s) => !(r != null && r.includes(s.id)) && !(o != null && o.includes(s.id))), bn(t, n, e, "center")), q(e.options, ye, "getCenterHeaderGroups")), e.getLeftHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const s = (o = r == null ? void 0 : r.map((a) => n.find((i) => i.id === a)).filter(Boolean)) != null ? o : [];
      return bn(t, s, e, "left");
    }, q(e.options, ye, "getLeftHeaderGroups")), e.getRightHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const s = (o = r == null ? void 0 : r.map((a) => n.find((i) => i.id === a)).filter(Boolean)) != null ? o : [];
      return bn(t, s, e, "right");
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
function bn(e, t, n, r) {
  var o, s;
  let a = 0;
  const i = function(g, h) {
    h === void 0 && (h = 1), a = Math.max(a, h), g.filter((b) => b.getIsVisible()).forEach((b) => {
      var m;
      (m = b.columns) != null && m.length && i(b.columns, h + 1);
    }, 0);
  };
  i(e);
  let l = [];
  const c = (g, h) => {
    const b = {
      depth: h,
      id: [r, `${h}`].filter(Boolean).join("_"),
      headers: []
    }, m = [];
    g.forEach((v) => {
      const y = [...m].reverse()[0], x = v.column.depth === b.depth;
      let w, C = !1;
      if (x && v.column.parent ? w = v.column.parent : (w = v.column, C = !0), y && (y == null ? void 0 : y.column) === w)
        y.subHeaders.push(v);
      else {
        const S = Jo(n, w, {
          id: [r, h, w.id, v == null ? void 0 : v.id].filter(Boolean).join("_"),
          isPlaceholder: C,
          placeholderId: C ? `${m.filter((P) => P.column === w).length}` : void 0,
          depth: h,
          index: m.length
        });
        S.subHeaders.push(v), m.push(S);
      }
      b.headers.push(v), v.headerGroup = b;
    }), l.push(b), h > 0 && c(m, h - 1);
  }, f = t.map((g, h) => Jo(n, g, {
    depth: a,
    index: h
  }));
  c(f, a - 1), l.reverse();
  const u = (g) => g.filter((b) => b.column.getIsVisible()).map((b) => {
    let m = 0, v = 0, y = [0];
    b.subHeaders && b.subHeaders.length ? (y = [], u(b.subHeaders).forEach((w) => {
      let {
        colSpan: C,
        rowSpan: S
      } = w;
      m += C, y.push(S);
    })) : m = 1;
    const x = Math.min(...y);
    return v = v + x, b.colSpan = m, b.rowSpan = v, {
      colSpan: m,
      rowSpan: v
    };
  });
  return u((o = (s = l[0]) == null ? void 0 : s.headers) != null ? o : []), l;
}
const xg = (e, t, n, r, o, s, a) => {
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
    getLeafRows: () => mg(i.subRows, (l) => l.subRows),
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
    getAllCells: U(() => [e.getAllLeafColumns()], (l) => l.map((c) => hg(e, i, c, c.id)), q(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: U(() => [i.getAllCells()], (l) => l.reduce((c, f) => (c[f.column.id] = f, c), {}), q(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const c = e._features[l];
    c == null || c.createRow == null || c.createRow(i, e);
  }
  return i;
}, yg = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, gi = (e, t, n) => {
  var r, o;
  const s = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(s));
};
gi.autoRemove = (e) => Oe(e);
const pi = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
pi.autoRemove = (e) => Oe(e);
const mi = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
mi.autoRemove = (e) => Oe(e);
const hi = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
hi.autoRemove = (e) => Oe(e);
const vi = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
vi.autoRemove = (e) => Oe(e) || !(e != null && e.length);
const bi = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
bi.autoRemove = (e) => Oe(e) || !(e != null && e.length);
const xi = (e, t, n) => e.getValue(t) === n;
xi.autoRemove = (e) => Oe(e);
const yi = (e, t, n) => e.getValue(t) == n;
yi.autoRemove = (e) => Oe(e);
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
ro.autoRemove = (e) => Oe(e) || Oe(e[0]) && Oe(e[1]);
const qe = {
  includesString: gi,
  includesStringSensitive: pi,
  equalsString: mi,
  arrIncludes: hi,
  arrIncludesAll: vi,
  arrIncludesSome: bi,
  equals: xi,
  weakEquals: yi,
  inNumberRange: ro
};
function Oe(e) {
  return e == null || e === "";
}
const wg = {
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
      return Xn(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
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
const Cg = (e, t, n) => n.reduce((r, o) => {
  const s = o.getValue(e);
  return r + (typeof s == "number" ? s : 0);
}, 0), Sg = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const s = o.getValue(e);
    s != null && (r > s || r === void 0 && s >= s) && (r = s);
  }), r;
}, _g = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const s = o.getValue(e);
    s != null && (r < s || r === void 0 && s >= s) && (r = s);
  }), r;
}, Rg = (e, t, n) => {
  let r, o;
  return n.forEach((s) => {
    const a = s.getValue(e);
    a != null && (r === void 0 ? a >= a && (r = o = a) : (r > a && (r = a), o < a && (o = a)));
  }), [r, o];
}, Eg = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let s = o.getValue(e);
    s != null && (s = +s) >= s && (++n, r += s);
  }), n) return r / n;
}, Pg = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((s) => s.getValue(e));
  if (!pg(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((s, a) => s - a);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, Ng = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Mg = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Ig = (e, t) => t.length, cr = {
  sum: Cg,
  min: Sg,
  max: _g,
  extent: Rg,
  mean: Eg,
  median: Pg,
  unique: Ng,
  uniqueCount: Mg,
  count: Ig
}, Ag = {
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
        return cr.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return cr.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Xn(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : cr[e.columnDef.aggregationFn];
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
function Tg(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((s) => !t.includes(s.id));
  return n === "remove" ? r : [...t.map((s) => e.find((a) => a.id === s)).filter(Boolean), ...r];
}
const kg = {
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
      return Tg(s, n, r);
    }, q(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, ur = () => ({
  left: [],
  right: []
}), Og = {
  getInitialState: (e) => ({
    columnPinning: ur(),
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
      return e.setColumnPinning(t ? ur() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : ur());
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
function Dg(e) {
  return e || (typeof document < "u" ? document : null);
}
const xn = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, dr = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), $g = {
  getDefaultColumnDef: () => xn,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: dr(),
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
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : xn.minSize, (r = s ?? e.columnDef.size) != null ? r : xn.size), (o = e.columnDef.maxSize) != null ? o : xn.maxSize);
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
        if (!r || !o || (s.persist == null || s.persist(), fr(s) && s.touches && s.touches.length > 1))
          return;
        const a = e.getSize(), i = e ? e.getLeafHeaders().map((y) => [y.column.id, y.column.getSize()]) : [[r.id, r.getSize()]], l = fr(s) ? Math.round(s.touches[0].clientX) : s.clientX, c = {}, f = (y, x) => {
          typeof x == "number" && (t.setColumnSizingInfo((w) => {
            var C, S;
            const P = t.options.columnResizeDirection === "rtl" ? -1 : 1, _ = (x - ((C = w == null ? void 0 : w.startOffset) != null ? C : 0)) * P, E = Math.max(_ / ((S = w == null ? void 0 : w.startSize) != null ? S : 0), -0.999999);
            return w.columnSizingStart.forEach((F) => {
              let [$, L] = F;
              c[$] = Math.round(Math.max(L + L * E, 0) * 100) / 100;
            }), {
              ...w,
              deltaOffset: _,
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
        }, h = Dg(n), b = {
          moveHandler: (y) => u(y.clientX),
          upHandler: (y) => {
            h == null || h.removeEventListener("mousemove", b.moveHandler), h == null || h.removeEventListener("mouseup", b.upHandler), g(y.clientX);
          }
        }, m = {
          moveHandler: (y) => (y.cancelable && (y.preventDefault(), y.stopPropagation()), u(y.touches[0].clientX), !1),
          upHandler: (y) => {
            var x;
            h == null || h.removeEventListener("touchmove", m.moveHandler), h == null || h.removeEventListener("touchend", m.upHandler), y.cancelable && (y.preventDefault(), y.stopPropagation()), g((x = y.touches[0]) == null ? void 0 : x.clientX);
          }
        }, v = Fg() ? {
          passive: !1
        } : !1;
        fr(s) ? (h == null || h.addEventListener("touchmove", m.moveHandler, v), h == null || h.addEventListener("touchend", m.upHandler, v)) : (h == null || h.addEventListener("mousemove", b.moveHandler, v), h == null || h.addEventListener("mouseup", b.upHandler, v)), t.setColumnSizingInfo((y) => ({
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
      e.setColumnSizingInfo(t ? dr() : (n = e.initialState.columnSizingInfo) != null ? n : dr());
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
let yn = null;
function Fg() {
  if (typeof yn == "boolean") return yn;
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
  return yn = e, yn;
}
function fr(e) {
  return e.type === "touchstart";
}
const Vg = {
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
const Lg = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, Bg = {
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
      return Xn(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : qe[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, zg = {
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
}, Pr = 0, Nr = 10, gr = () => ({
  pageIndex: Pr,
  pageSize: Nr
}), Hg = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...gr(),
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
      e.setPagination(r ? gr() : (o = e.initialState.pagination) != null ? o : gr());
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
      e.setPageIndex(r ? Pr : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageIndex) != null ? o : Pr);
    }, e.resetPageSize = (r) => {
      var o, s;
      e.setPageSize(r ? Nr : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageSize) != null ? o : Nr);
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
}, pr = () => ({
  top: [],
  bottom: []
}), jg = {
  getInitialState: (e) => ({
    rowPinning: pr(),
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
            top: ((u = l == null ? void 0 : l.top) != null ? u : []).filter((m) => !(i != null && i.has(m))),
            bottom: [...((g = l == null ? void 0 : l.bottom) != null ? g : []).filter((m) => !(i != null && i.has(m))), ...Array.from(i)]
          };
        }
        if (n === "top") {
          var h, b;
          return {
            top: [...((h = l == null ? void 0 : l.top) != null ? h : []).filter((m) => !(i != null && i.has(m))), ...Array.from(i)],
            bottom: ((b = l == null ? void 0 : l.bottom) != null ? b : []).filter((m) => !(i != null && i.has(m)))
          };
        }
        return {
          top: ((c = l == null ? void 0 : l.top) != null ? c : []).filter((m) => !(i != null && i.has(m))),
          bottom: ((f = l == null ? void 0 : l.bottom) != null ? f : []).filter((m) => !(i != null && i.has(m)))
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
      return e.setRowPinning(t ? pr() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : pr());
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
}, Gg = {
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
        Mr(o, s.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = U(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? mr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, q(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = U(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? mr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, q(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = U(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? mr(e, n) : {
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
        return Mr(i, e.id, n, (a = r == null ? void 0 : r.selectChildren) != null ? a : !0, t), i;
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
      return Ir(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Ir(e, n) === "all";
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
}, Mr = (e, t, n, r, o) => {
  var s;
  const a = o.getRow(t, !0);
  n ? (a.getCanMultiSelect() || Object.keys(e).forEach((i) => delete e[i]), a.getCanSelect() && (e[t] = !0)) : delete e[t], r && (s = a.subRows) != null && s.length && a.getCanSelectSubRows() && a.subRows.forEach((i) => Mr(e, i.id, n, r, o));
};
function mr(e, t) {
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
function Ir(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, s = !1;
  return e.subRows.forEach((a) => {
    if (!(s && !o) && (a.getCanSelect() && (oo(a, t) ? s = !0 : o = !1), a.subRows && a.subRows.length)) {
      const i = Ir(a, t);
      i === "all" ? s = !0 : (i === "some" && (s = !0), o = !1);
    }
  }), o ? "all" : s ? "some" : !1;
}
const Ar = /([0-9]+)/gm, Wg = (e, t, n) => wi(at(e.getValue(n)).toLowerCase(), at(t.getValue(n)).toLowerCase()), Ug = (e, t, n) => wi(at(e.getValue(n)), at(t.getValue(n))), qg = (e, t, n) => so(at(e.getValue(n)).toLowerCase(), at(t.getValue(n)).toLowerCase()), Yg = (e, t, n) => so(at(e.getValue(n)), at(t.getValue(n))), Xg = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, Zg = (e, t, n) => so(e.getValue(n), t.getValue(n));
function so(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function at(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function wi(e, t) {
  const n = e.split(Ar).filter(Boolean), r = t.split(Ar).filter(Boolean);
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
  alphanumeric: Wg,
  alphanumericCaseSensitive: Ug,
  text: qg,
  textCaseSensitive: Yg,
  datetime: Xg,
  basic: Zg
}, Kg = {
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
        if (typeof s == "string" && (r = !0, s.split(Ar).length > 1))
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
      return Xn(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : qt[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), s = typeof n < "u" && n !== null;
      t.setSorting((a) => {
        const i = a == null ? void 0 : a.find((h) => h.id === e.id), l = a == null ? void 0 : a.findIndex((h) => h.id === e.id);
        let c = [], f, u = s ? n : o === "desc";
        if (a != null && a.length && e.getCanMultiSort() && r ? i ? f = "toggle" : f = "add" : a != null && a.length && l !== a.length - 1 ? f = "replace" : i ? f = "toggle" : f = "replace", f === "toggle" && (s || o || (f = "remove")), f === "add") {
          var g;
          c = [...a, {
            id: e.id,
            desc: u
          }], c.splice(0, c.length - ((g = t.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
        } else f === "toggle" ? c = a.map((h) => h.id === e.id ? {
          ...h,
          desc: u
        } : h) : f === "remove" ? c = a.filter((h) => h.id !== e.id) : c = [{
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
}, Qg = [
  bg,
  Vg,
  kg,
  Og,
  yg,
  wg,
  Lg,
  //depends on ColumnFaceting
  Bg,
  //depends on ColumnFiltering
  Kg,
  Ag,
  //depends on RowSorting
  zg,
  Hg,
  jg,
  Gg,
  $g
];
function Jg(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...Qg, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const s = o._features.reduce((g, h) => Object.assign(g, h.getDefaultOptions == null ? void 0 : h.getDefaultOptions(o)), {}), a = (g) => o.options.mergeOptions ? o.options.mergeOptions(s, g) : {
    ...s,
    ...g
  };
  let l = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((g) => {
    var h;
    l = (h = g.getInitialState == null ? void 0 : g.getInitialState(l)) != null ? h : l;
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
      }).catch((h) => setTimeout(() => {
        throw h;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (g) => {
      const h = rt(g, o.options);
      o.options = a(h);
    },
    getState: () => o.options.state,
    setState: (g) => {
      o.options.onStateChange == null || o.options.onStateChange(g);
    },
    _getRowId: (g, h, b) => {
      var m;
      return (m = o.options.getRowId == null ? void 0 : o.options.getRowId(g, h, b)) != null ? m : `${b ? [b.id, h].join(".") : h}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (g, h) => {
      let b = (h ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[g];
      if (!b && (b = o.getCoreRowModel().rowsById[g], !b))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${g}`) : new Error();
      return b;
    },
    _getDefaultColumnDef: U(() => [o.options.defaultColumn], (g) => {
      var h;
      return g = (h = g) != null ? h : {}, {
        header: (b) => {
          const m = b.header.column.columnDef;
          return m.accessorKey ? m.accessorKey : m.accessorFn ? m.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (b) => {
          var m, v;
          return (m = (v = b.renderValue()) == null || v.toString == null ? void 0 : v.toString()) != null ? m : null;
        },
        ...o._features.reduce((b, m) => Object.assign(b, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}),
        ...g
      };
    }, q(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: U(() => [o._getColumnDefs()], (g) => {
      const h = function(b, m, v) {
        return v === void 0 && (v = 0), b.map((y) => {
          const x = vg(o, y, v, m), w = y;
          return x.columns = w.columns ? h(w.columns, x, v + 1) : [], x;
        });
      };
      return h(g);
    }, q(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: U(() => [o.getAllColumns()], (g) => g.flatMap((h) => h.getFlatColumns()), q(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: U(() => [o.getAllFlatColumns()], (g) => g.reduce((h, b) => (h[b.id] = b, h), {}), q(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: U(() => [o.getAllColumns(), o._getOrderColumnsFn()], (g, h) => {
      let b = g.flatMap((m) => m.getLeafColumns());
      return h(b);
    }, q(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (g) => {
      const h = o._getAllFlatColumnsById()[g];
      return process.env.NODE_ENV !== "production" && !h && console.error(`[Table] Column with id '${g}' does not exist.`), h;
    }
  };
  Object.assign(o, u);
  for (let g = 0; g < o._features.length; g++) {
    const h = o._features[g];
    h == null || h.createTable == null || h.createTable(o);
  }
  return o;
}
function ep() {
  return (e) => U(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, s, a) {
      s === void 0 && (s = 0);
      const i = [];
      for (let c = 0; c < o.length; c++) {
        const f = xg(e, e._getRowId(o[c], c, a), o[c], c, s, void 0, a == null ? void 0 : a.id);
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
  return e ? tp(e) ? /* @__PURE__ */ d.createElement(e, t) : e : null;
}
function tp(e) {
  return np(e) || typeof e == "function" || rp(e);
}
function np(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function rp(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function op(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = d.useState(() => ({
    current: Jg(t)
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
const Zt = d.forwardRef(
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
    }, [e]), /* @__PURE__ */ p(
      "input",
      {
        ref: i,
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
        ...s
      }
    );
  }
);
Zt.displayName = "Checkbox";
const sp = Q(
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
), vt = Q(
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
), Ci = Q("p-2 whitespace-nowrap text-sm text-gray-900", {
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
}), Si = d.forwardRef(
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
    onSort: h,
    sortToggleLabels: b,
    hasZebraStriping: m = !1,
    pagination: v,
    itemCount: y,
    selectedItemsCount: x,
    resourceName: w,
    loading: C = !1,
    hasMoreItems: S,
    condensed: P = !1,
    onSelectionChange: _,
    className: E,
    data: F,
    columns: $,
    hasIndexFilters: L = !1,
    ...A
  }, j) => {
    const B = d.useMemo(() => F && $ ? op({
      data: F,
      columns: $,
      getCoreRowModel: ep()
    }) : null, [F, $]), z = () => {
      const V = typeof x == "number" && x > 0 || x === "All", T = () => !n || n.length === 0 || !V ? null : /* @__PURE__ */ p("div", { className: "flex items-center gap-2 ml-auto", children: n.map((M, G) => "actions" in M ? M.actions.map((O, W) => /* @__PURE__ */ p(
        ue,
        {
          variant: "primary",
          size: "slim",
          onClick: O.onAction,
          disabled: O.disabled,
          tone: O.destructive ? "critical" : void 0,
          children: O.content
        },
        `${G}-${W}`
      )) : /* @__PURE__ */ p(
        ue,
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
      return B ? /* @__PURE__ */ p("thead", { className: "sticky top-0 z-10", children: B.getHeaderGroups().map((M) => /* @__PURE__ */ I("tr", { children: [
        c && /* @__PURE__ */ p(
          "th",
          {
            className: D(
              vt({
                isSelectionColumn: !0
              })
            ),
            children: /* @__PURE__ */ p(
              Zt,
              {
                checked: x === "All" || x === y && y > 0 ? !0 : typeof x == "number" && x > 0 ? "indeterminate" : !1,
                onChange: (G) => {
                  _ && _(
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
        V ? /* @__PURE__ */ p(
          "th",
          {
            colSpan: M.headers.length,
            className: D(
              vt({
                alignment: "start"
              }),
              "text-left"
            ),
            children: /* @__PURE__ */ I("div", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ p(Me, { variant: "bodyMd", as: "span", children: x === "All" ? `All ${(w == null ? void 0 : w.plural) || "items"} selected` : `${x} ${x === 1 ? (w == null ? void 0 : w.singular) || "item" : (w == null ? void 0 : w.plural) || "items"} selected` }),
              T()
            ] })
          }
        ) : M.headers.map((G, O) => /* @__PURE__ */ p(
          "th",
          {
            className: D(
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
          c && /* @__PURE__ */ p(
            "th",
            {
              className: D(
                vt({
                  isSelectionColumn: !0
                })
              ),
              children: /* @__PURE__ */ p(
                Zt,
                {
                  checked: x === "All" || x === y && y > 0 ? !0 : typeof x == "number" && x > 0 ? "indeterminate" : !1,
                  onChange: (M) => {
                    _ && _(
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
          /* @__PURE__ */ p(
            "th",
            {
              colSpan: e.length,
              className: D(
                vt({
                  alignment: "start"
                }),
                "text-left"
              ),
              children: /* @__PURE__ */ I("div", { className: "flex items-center justify-between w-full", children: [
                /* @__PURE__ */ p(Me, { variant: "bodyMd", as: "span", children: x === "All" ? `All ${(w == null ? void 0 : w.plural) || "items"} selected` : `${x} ${x === 1 ? (w == null ? void 0 : w.singular) || "item" : (w == null ? void 0 : w.plural) || "items"} selected` }),
                T()
              ] })
            }
          )
        ] }),
        !V && /* @__PURE__ */ I("tr", { children: [
          c && /* @__PURE__ */ p(
            "th",
            {
              className: D(
                vt({
                  isSelectionColumn: !0
                })
              ),
              children: /* @__PURE__ */ p(
                Zt,
                {
                  checked: x === "All" || x === y && y > 0 ? !0 : typeof x == "number" && x > 0 ? "indeterminate" : !1,
                  onChange: (M) => {
                    _ && _(
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
            const O = (f == null ? void 0 : f[G]) || !1, W = g === G, X = W ? u : void 0, J = () => W ? X === "ascending" ? "descending" : "ascending" : "descending", le = () => !O || !W || !X ? null : X === "descending" ? /* @__PURE__ */ p(Dr, { className: "ml-1 h-4 w-4" }) : /* @__PURE__ */ p(Jt, { className: "ml-1 h-4 w-4" }), Y = () => {
              if (!O || !h) return;
              const k = J();
              h(G, k);
            };
            return /* @__PURE__ */ p(
              "th",
              {
                className: D(
                  vt({
                    alignment: M.alignment || "start",
                    sortable: O,
                    sticky: l && G === e.length - 1
                  }),
                  O && "cursor-pointer hover:bg-gray-50"
                ),
                onClick: Y,
                children: /* @__PURE__ */ I("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ p(Me, { variant: "bodyMd", fontWeight: "semibold", children: (typeof M.title == "string", M.title) }),
                  le()
                ] })
              },
              G
            );
          })
        ] })
      ] });
    }, N = () => {
      var T;
      if (B)
        return /* @__PURE__ */ p("tbody", { children: (T = B.getRowModel().rows) != null && T.length ? B.getRowModel().rows.map((M) => /* @__PURE__ */ p("tr", { className: "hover:bg-gray-50", children: M.getVisibleCells().map((G, O) => /* @__PURE__ */ p(
          "td",
          {
            className: D(
              Ci({
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
        )) }, M.id)) : /* @__PURE__ */ p("tr", { children: /* @__PURE__ */ p(
          "td",
          {
            colSpan: ($ == null ? void 0 : $.length) || e.length,
            className: "h-24 text-center",
            children: o || /* @__PURE__ */ p(Me, { variant: "bodyMd", tone: "subdued", children: "No results." })
          }
        ) }) });
      const V = d.Children.map(r, (M) => d.isValidElement(M) && M.type === ao ? d.cloneElement(M, {
        selectable: c,
        onSelectionChange: _,
        resourceName: w,
        ...M.props
      }) : M);
      return /* @__PURE__ */ p("tbody", { children: V });
    };
    return y === 0 && o ? /* @__PURE__ */ p("div", { className: "flex items-center justify-center p-8", children: o }) : /* @__PURE__ */ I("div", { className: "overflow-x-auto", children: [
      /* @__PURE__ */ I(
        "table",
        {
          ref: j,
          className: D(
            sp({
              condensed: P,
              hasZebraStriping: m,
              loading: C,
              hasIndexFilters: L
            }),
            E
          ),
          ...A,
          children: [
            z(),
            N()
          ]
        }
      ),
      v && /* @__PURE__ */ p("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ p(fi, { type: "table", ...v }) })
    ] });
  }
);
Si.displayName = "IndexTable";
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
    onSelectionChange: h,
    resourceName: b,
    ...m
  }, v) => {
    const y = Q(
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
      C.type === "checkbox" || C.closest('input[type="checkbox"]') || C.closest("button") || C.closest("a") || (g && h && !s && h("single", !0, t, r), c && c());
    };
    return /* @__PURE__ */ I(
      "tr",
      {
        ref: v,
        className: D(
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
        ...m,
        children: [
          g && /* @__PURE__ */ p(
            "td",
            {
              className: D(
                Ci({
                  isSelectionColumn: !0
                })
              ),
              children: /* @__PURE__ */ p(
                Zt,
                {
                  checked: n === !0,
                  onChange: () => {
                    h && h("single", !0, t, r);
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
const _i = d.forwardRef(
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
    const f = Q("border-gray-200 text-xs", {
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
    return /* @__PURE__ */ p(
      e,
      {
        ref: c,
        id: t,
        className: D(f({ flush: o }), r),
        colSpan: s,
        scope: a,
        headers: i,
        ...l,
        children: n
      }
    );
  }
);
_i.displayName = "IndexTable.Cell";
const l0 = (e, t) => {
  const [n, r] = d.useState(
    (t == null ? void 0 : t.selectedResources) || []
  ), [o, s] = d.useState(
    (t == null ? void 0 : t.allResourcesSelected) || !1
  ), a = d.useCallback(
    (l, c, f, u) => {
      if (l === "single" && typeof f == "string")
        r(
          c ? (g) => g.includes(f) ? g.filter((h) => h !== f) : [...g, f] : [f]
        );
      else if (l === "multiple" && typeof f == "object") {
        const { start: g, end: h } = f, b = e.slice(g, h + 1).map((m) => m.id);
        r(c ? (m) => [.../* @__PURE__ */ new Set([...m, ...b])] : b);
      } else if (l === "page")
        if (c) {
          const g = e.map((h) => h.id);
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
}, Ri = Si;
Ri.Row = ao;
Ri.Cell = _i;
const ap = Q("inline-block shrink-0 w-5 h-5", {
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
}), Ei = d.forwardRef(
  ({ source: e, tone: t = "base", accessibilityLabel: n, className: r, ...o }, s) => {
    const a = D(ap({ tone: t }), r), i = d.useMemo(() => {
      var c;
      return e ? typeof e == "function" ? /* @__PURE__ */ p(e, { className: a }) : d.isValidElement(e) ? d.cloneElement(e, {
        className: D(
          a,
          (c = e.props) == null ? void 0 : c.className
        )
      }) : typeof e == "string" ? /* @__PURE__ */ p(
        "div",
        {
          className: a,
          dangerouslySetInnerHTML: { __html: e }
        }
      ) : e : null;
    }, [e, a]);
    return /* @__PURE__ */ p(
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
Ei.displayName = "Icon";
const ip = Q(
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
), lp = si, cp = ai, Pi = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  to,
  {
    ref: n,
    className: D(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Pi.displayName = to.displayName;
const Ni = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ I(cp, { children: [
  /* @__PURE__ */ p(Pi, {}),
  /* @__PURE__ */ p(
    no,
    {
      ref: r,
      className: D(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg font-inter rounded-[40px] border border-[#e3e3e3] bg-[#303030] text-white",
        e
      ),
      ...n,
      children: t
    }
  )
] }));
Ni.displayName = no.displayName;
const Mi = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  ii,
  {
    ref: n,
    className: D(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Mi.displayName = ii.displayName;
const Ii = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  li,
  {
    ref: n,
    className: D("text-sm text-gray-600", e),
    ...t
  }
));
Ii.displayName = li.displayName;
const up = d.forwardRef(
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
    const [h, b] = d.useState(!1), [m, v] = d.useState(null), y = !!(s || a), x = d.useCallback(
      (_) => {
        n ? (v(() => _), b(!0)) : _();
      },
      [n]
    ), w = d.useMemo(() => y || !t ? null : d.Children.map(t, (_) => {
      if (d.isValidElement(_) && (_.type === "button" || _.type === ue)) {
        const E = _.props;
        if (E.variant === "primary" && n && typeof E.onClick == "function")
          return d.cloneElement(
            _,
            {
              ...E,
              onClick: (F) => {
                F.preventDefault(), x(E.onClick);
              }
            }
          );
      }
      return _;
    }), [
      t,
      n,
      y,
      x
    ]), C = d.useMemo(() => y ? /* @__PURE__ */ I(Ie, { children: [
      a && /* @__PURE__ */ p(
        ue,
        {
          variant: "primary",
          loading: f,
          onClick: () => x(a),
          children: l
        }
      ),
      s && /* @__PURE__ */ p(ue, { loading: c, onClick: s, children: i })
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
      b(!1), m && (m(), v(null));
    }, [m]), P = d.useCallback(() => {
      b(!1);
    }, []);
    return /* @__PURE__ */ I(Ie, { children: [
      /* @__PURE__ */ p(
        "div",
        {
          ref: g,
          id: e,
          className: D(ip({ open: r }), o),
          ...u,
          children: /* @__PURE__ */ I("div", { className: "flex items-center justify-between p-2", children: [
            /* @__PURE__ */ I("div", { className: "flex items-center !justify-center gap-1", children: [
              /* @__PURE__ */ p(Ei, { source: cs, tone: "base" }),
              /* @__PURE__ */ p("span", { className: "text-sm font-medium", children: "Unsaved changes" })
            ] }),
            /* @__PURE__ */ p("div", { className: "flex items-center gap-3", children: y ? C : w })
          ] })
        }
      ),
      /* @__PURE__ */ p(lp, { open: h, onOpenChange: b, children: /* @__PURE__ */ I(Ni, { className: "p-0 overflow-hidden bg-white", children: [
        /* @__PURE__ */ p("div", { className: "px-6 py-4 bg-[#e3e3e3] border-b border-gray-200", children: /* @__PURE__ */ p(Mi, { className: "text-lg font-semibold text-gray-900 leading-6", children: "Discard changes" }) }),
        /* @__PURE__ */ p("div", { className: "px-6 py-4", children: /* @__PURE__ */ p(Ii, { className: "text-sm text-gray-600", children: "Are you sure you want to discard your changes? This action cannot be undone." }) }),
        /* @__PURE__ */ I("div", { className: "border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-3", children: [
          /* @__PURE__ */ p(ue, { onClick: P, children: "Cancel" }),
          /* @__PURE__ */ p(
            ue,
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
up.displayName = "ContextualSaveBar";
function dp(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const fp = (e) => {
  switch (e) {
    case "success":
      return mp;
    case "info":
      return vp;
    case "warning":
      return hp;
    case "error":
      return bp;
    default:
      return null;
  }
}, gp = Array(12).fill(0), pp = ({ visible: e, className: t }) => /* @__PURE__ */ R.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ R.createElement("div", {
  className: "sonner-spinner"
}, gp.map((n, r) => /* @__PURE__ */ R.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), mp = /* @__PURE__ */ R.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ R.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), hp = /* @__PURE__ */ R.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ R.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), vp = /* @__PURE__ */ R.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ R.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), bp = /* @__PURE__ */ R.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ R.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), xp = /* @__PURE__ */ R.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ R.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ R.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), yp = () => {
  const [e, t] = R.useState(document.hidden);
  return R.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let Tr = 1;
class wp {
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
      const { message: r, ...o } = t, s = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : Tr++, a = this.toasts.find((l) => l.id === s), i = t.dismissible === void 0 ? !0 : t.dismissible;
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
        ], R.isValidElement(c))
          s = !1, this.create({
            id: r,
            type: "default",
            message: c
          });
        else if (Sp(c) && !c.ok) {
          s = !1;
          const u = typeof n.error == "function" ? await n.error(`HTTP error! status: ${c.status}`) : n.error, g = typeof n.description == "function" ? await n.description(`HTTP error! status: ${c.status}`) : n.description, b = typeof u == "object" && !R.isValidElement(u) ? u : {
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
          const u = typeof n.error == "function" ? await n.error(c) : n.error, g = typeof n.description == "function" ? await n.description(c) : n.description, b = typeof u == "object" && !R.isValidElement(u) ? u : {
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
          const u = typeof n.success == "function" ? await n.success(c) : n.success, g = typeof n.description == "function" ? await n.description(c) : n.description, b = typeof u == "object" && !R.isValidElement(u) ? u : {
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
          const f = typeof n.error == "function" ? await n.error(c) : n.error, u = typeof n.description == "function" ? await n.description(c) : n.description, h = typeof f == "object" && !R.isValidElement(f) ? f : {
            message: f
          };
          this.create({
            id: r,
            type: "error",
            description: u,
            ...h
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
      const r = (n == null ? void 0 : n.id) || Tr++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const Se = new wp(), Cp = (e, t) => {
  const n = (t == null ? void 0 : t.id) || Tr++;
  return Se.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, Sp = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", _p = Cp, Rp = () => Se.toasts, Ep = () => Se.getActiveToasts(), ns = Object.assign(_p, {
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
  getHistory: Rp,
  getToasts: Ep
});
dp("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function wn(e) {
  return e.label !== void 0;
}
const Pp = 3, Np = "24px", Mp = "16px", rs = 4e3, Ip = 356, Ap = 14, Tp = 45, kp = 200;
function Ve(...e) {
  return e.filter(Boolean).join(" ");
}
function Op(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const Dp = (e) => {
  var t, n, r, o, s, a, i, l, c;
  const { invert: f, toast: u, unstyled: g, interacting: h, setHeights: b, visibleToasts: m, heights: v, index: y, toasts: x, expanded: w, removeToast: C, defaultRichColors: S, closeButton: P, style: _, cancelButtonStyle: E, actionButtonStyle: F, className: $ = "", descriptionClassName: L = "", duration: A, position: j, gap: B, expandByDefault: z, classNames: N, icons: V, closeButtonAriaLabel: T = "Close toast" } = e, [M, G] = R.useState(null), [O, W] = R.useState(null), [X, J] = R.useState(!1), [le, Y] = R.useState(!1), [k, Z] = R.useState(!1), [se, ne] = R.useState(!1), [H, te] = R.useState(!1), [fe, ge] = R.useState(0), [Ze, Ne] = R.useState(0), Ce = R.useRef(u.duration || A || rs), Rt = R.useRef(null), be = R.useRef(null), ut = y === 0, Zn = y + 1 <= m, re = u.type, Ke = u.dismissible !== !1, rn = u.className || "", zt = u.descriptionClassName || "", dt = R.useMemo(() => v.findIndex((K) => K.toastId === u.id) || 0, [
    v,
    u.id
  ]), on = R.useMemo(() => {
    var K;
    return (K = u.closeButton) != null ? K : P;
  }, [
    u.closeButton,
    P
  ]), ft = R.useMemo(() => u.duration || A || rs, [
    u.duration,
    A
  ]), gt = R.useRef(0), Qe = R.useRef(0), sn = R.useRef(0), Ge = R.useRef(null), [Kn, Qn] = j.split("-"), an = R.useMemo(() => v.reduce((K, me, ve) => ve >= dt ? K : K + me.height, 0), [
    v,
    dt
  ]), Je = yp(), pt = u.invert || f, Et = re === "loading";
  Qe.current = R.useMemo(() => dt * B + an, [
    dt,
    an
  ]), R.useEffect(() => {
    Ce.current = ft;
  }, [
    ft
  ]), R.useEffect(() => {
    J(!0);
  }, []), R.useEffect(() => {
    const K = be.current;
    if (K) {
      const me = K.getBoundingClientRect().height;
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
  ]), R.useLayoutEffect(() => {
    if (!X) return;
    const K = be.current, me = K.style.height;
    K.style.height = "auto";
    const ve = K.getBoundingClientRect().height;
    K.style.height = me, Ne(ve), b((xe) => xe.find((he) => he.toastId === u.id) ? xe.map((he) => he.toastId === u.id ? {
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
  const We = R.useCallback(() => {
    Y(!0), ge(Qe.current), b((K) => K.filter((me) => me.toastId !== u.id)), setTimeout(() => {
      C(u);
    }, kp);
  }, [
    u,
    C,
    b,
    Qe
  ]);
  R.useEffect(() => {
    if (u.promise && re === "loading" || u.duration === 1 / 0 || u.type === "loading") return;
    let K;
    return w || h || Je ? (() => {
      if (sn.current < gt.current) {
        const xe = (/* @__PURE__ */ new Date()).getTime() - gt.current;
        Ce.current = Ce.current - xe;
      }
      sn.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      Ce.current !== 1 / 0 && (gt.current = (/* @__PURE__ */ new Date()).getTime(), K = setTimeout(() => {
        u.onAutoClose == null || u.onAutoClose.call(u, u), We();
      }, Ce.current));
    })(), () => clearTimeout(K);
  }, [
    w,
    h,
    u,
    re,
    Je,
    We
  ]), R.useEffect(() => {
    u.delete && (We(), u.onDismiss == null || u.onDismiss.call(u, u));
  }, [
    We,
    u.delete
  ]);
  function ln() {
    var K;
    if (V != null && V.loading) {
      var me;
      return /* @__PURE__ */ R.createElement("div", {
        className: Ve(N == null ? void 0 : N.loader, u == null || (me = u.classNames) == null ? void 0 : me.loader, "sonner-loader"),
        "data-visible": re === "loading"
      }, V.loading);
    }
    return /* @__PURE__ */ R.createElement(pp, {
      className: Ve(N == null ? void 0 : N.loader, u == null || (K = u.classNames) == null ? void 0 : K.loader),
      visible: re === "loading"
    });
  }
  const cn = u.icon || (V == null ? void 0 : V[re]) || fp(re);
  var Ht, jt;
  return /* @__PURE__ */ R.createElement("li", {
    tabIndex: 0,
    ref: be,
    className: Ve($, rn, N == null ? void 0 : N.toast, u == null || (t = u.classNames) == null ? void 0 : t.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[re], u == null || (n = u.classNames) == null ? void 0 : n[re]),
    "data-sonner-toast": "",
    "data-rich-colors": (Ht = u.richColors) != null ? Ht : S,
    "data-styled": !(u.jsx || u.unstyled || g),
    "data-mounted": X,
    "data-promise": !!u.promise,
    "data-swiped": H,
    "data-removed": le,
    "data-visible": Zn,
    "data-y-position": Kn,
    "data-x-position": Qn,
    "data-index": y,
    "data-front": ut,
    "data-swiping": k,
    "data-dismissible": Ke,
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
      "--initial-height": z ? "auto" : `${Ze}px`,
      ..._,
      ...u.style
    },
    onDragEnd: () => {
      Z(!1), G(null), Ge.current = null;
    },
    onPointerDown: (K) => {
      K.button !== 2 && (Et || !Ke || (Rt.current = /* @__PURE__ */ new Date(), ge(Qe.current), K.target.setPointerCapture(K.pointerId), K.target.tagName !== "BUTTON" && (Z(!0), Ge.current = {
        x: K.clientX,
        y: K.clientY
      })));
    },
    onPointerUp: () => {
      var K, me, ve;
      if (se || !Ke) return;
      Ge.current = null;
      const xe = Number(((K = be.current) == null ? void 0 : K.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), mt = Number(((me = be.current) == null ? void 0 : me.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), he = (/* @__PURE__ */ new Date()).getTime() - ((ve = Rt.current) == null ? void 0 : ve.getTime()), _e = M === "x" ? xe : mt, ae = Math.abs(_e) / he;
      if (Math.abs(_e) >= Tp || ae > 0.11) {
        ge(Qe.current), u.onDismiss == null || u.onDismiss.call(u, u), W(M === "x" ? xe > 0 ? "right" : "left" : mt > 0 ? "down" : "up"), We(), ne(!0);
        return;
      } else {
        var pe, Ae;
        (pe = be.current) == null || pe.style.setProperty("--swipe-amount-x", "0px"), (Ae = be.current) == null || Ae.style.setProperty("--swipe-amount-y", "0px");
      }
      te(!1), Z(!1), G(null);
    },
    onPointerMove: (K) => {
      var me, ve, xe;
      if (!Ge.current || !Ke || ((me = window.getSelection()) == null ? void 0 : me.toString().length) > 0) return;
      const he = K.clientY - Ge.current.y, _e = K.clientX - Ge.current.x;
      var ae;
      const pe = (ae = e.swipeDirections) != null ? ae : Op(j);
      !M && (Math.abs(_e) > 1 || Math.abs(he) > 1) && G(Math.abs(_e) > Math.abs(he) ? "x" : "y");
      let Ae = {
        x: 0,
        y: 0
      };
      const io = (ht) => 1 / (1.5 + Math.abs(ht) / 20);
      if (M === "y") {
        if (pe.includes("top") || pe.includes("bottom"))
          if (pe.includes("top") && he < 0 || pe.includes("bottom") && he > 0)
            Ae.y = he;
          else {
            const ht = he * io(he);
            Ae.y = Math.abs(ht) < Math.abs(he) ? ht : he;
          }
      } else if (M === "x" && (pe.includes("left") || pe.includes("right")))
        if (pe.includes("left") && _e < 0 || pe.includes("right") && _e > 0)
          Ae.x = _e;
        else {
          const ht = _e * io(_e);
          Ae.x = Math.abs(ht) < Math.abs(_e) ? ht : _e;
        }
      (Math.abs(Ae.x) > 0 || Math.abs(Ae.y) > 0) && te(!0), (ve = be.current) == null || ve.style.setProperty("--swipe-amount-x", `${Ae.x}px`), (xe = be.current) == null || xe.style.setProperty("--swipe-amount-y", `${Ae.y}px`);
    }
  }, on && !u.jsx && re !== "loading" ? /* @__PURE__ */ R.createElement("button", {
    "aria-label": T,
    "data-disabled": Et,
    "data-close-button": !0,
    onClick: Et || !Ke ? () => {
    } : () => {
      We(), u.onDismiss == null || u.onDismiss.call(u, u);
    },
    className: Ve(N == null ? void 0 : N.closeButton, u == null || (r = u.classNames) == null ? void 0 : r.closeButton)
  }, (jt = V == null ? void 0 : V.close) != null ? jt : xp) : null, (re || u.icon || u.promise) && u.icon !== null && ((V == null ? void 0 : V[re]) !== null || u.icon) ? /* @__PURE__ */ R.createElement("div", {
    "data-icon": "",
    className: Ve(N == null ? void 0 : N.icon, u == null || (o = u.classNames) == null ? void 0 : o.icon)
  }, u.promise || u.type === "loading" && !u.icon ? u.icon || ln() : null, u.type !== "loading" ? cn : null) : null, /* @__PURE__ */ R.createElement("div", {
    "data-content": "",
    className: Ve(N == null ? void 0 : N.content, u == null || (s = u.classNames) == null ? void 0 : s.content)
  }, /* @__PURE__ */ R.createElement("div", {
    "data-title": "",
    className: Ve(N == null ? void 0 : N.title, u == null || (a = u.classNames) == null ? void 0 : a.title)
  }, u.jsx ? u.jsx : typeof u.title == "function" ? u.title() : u.title), u.description ? /* @__PURE__ */ R.createElement("div", {
    "data-description": "",
    className: Ve(L, zt, N == null ? void 0 : N.description, u == null || (i = u.classNames) == null ? void 0 : i.description)
  }, typeof u.description == "function" ? u.description() : u.description) : null), /* @__PURE__ */ R.isValidElement(u.cancel) ? u.cancel : u.cancel && wn(u.cancel) ? /* @__PURE__ */ R.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: u.cancelButtonStyle || E,
    onClick: (K) => {
      wn(u.cancel) && Ke && (u.cancel.onClick == null || u.cancel.onClick.call(u.cancel, K), We());
    },
    className: Ve(N == null ? void 0 : N.cancelButton, u == null || (l = u.classNames) == null ? void 0 : l.cancelButton)
  }, u.cancel.label) : null, /* @__PURE__ */ R.isValidElement(u.action) ? u.action : u.action && wn(u.action) ? /* @__PURE__ */ R.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: u.actionButtonStyle || F,
    onClick: (K) => {
      wn(u.action) && (u.action.onClick == null || u.action.onClick.call(u.action, K), !K.defaultPrevented && We());
    },
    className: Ve(N == null ? void 0 : N.actionButton, u == null || (c = u.classNames) == null ? void 0 : c.actionButton)
  }, u.action.label) : null);
};
function os() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function $p(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, o) => {
    const s = o === 1, a = s ? "--mobile-offset" : "--offset", i = s ? Mp : Np;
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
const Fp = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const { invert: r, position: o = "bottom-right", hotkey: s = [
    "altKey",
    "KeyT"
  ], expand: a, closeButton: i, className: l, offset: c, mobileOffset: f, theme: u = "light", richColors: g, duration: h, style: b, visibleToasts: m = Pp, toastOptions: v, dir: y = os(), gap: x = Ap, icons: w, containerAriaLabel: C = "Notifications" } = t, [S, P] = R.useState([]), _ = R.useMemo(() => Array.from(new Set([
    o
  ].concat(S.filter((O) => O.position).map((O) => O.position)))), [
    S,
    o
  ]), [E, F] = R.useState([]), [$, L] = R.useState(!1), [A, j] = R.useState(!1), [B, z] = R.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), N = R.useRef(null), V = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), T = R.useRef(null), M = R.useRef(!1), G = R.useCallback((O) => {
    P((W) => {
      var X;
      return (X = W.find((J) => J.id === O.id)) != null && X.delete || Se.dismiss(O.id), W.filter(({ id: J }) => J !== O.id);
    });
  }, []);
  return R.useEffect(() => Se.subscribe((O) => {
    if (O.dismiss) {
      requestAnimationFrame(() => {
        P((W) => W.map((X) => X.id === O.id ? {
          ...X,
          delete: !0
        } : X));
      });
      return;
    }
    setTimeout(() => {
      ss.flushSync(() => {
        P((W) => {
          const X = W.findIndex((J) => J.id === O.id);
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
  ]), R.useEffect(() => {
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
        } catch (J) {
          console.error(J);
        }
      });
    }
  }, [
    u
  ]), R.useEffect(() => {
    S.length <= 1 && L(!1);
  }, [
    S
  ]), R.useEffect(() => {
    const O = (W) => {
      var X;
      if (s.every((Y) => W[Y] || W.code === Y)) {
        var le;
        L(!0), (le = N.current) == null || le.focus();
      }
      W.code === "Escape" && (document.activeElement === N.current || (X = N.current) != null && X.contains(document.activeElement)) && L(!1);
    };
    return document.addEventListener("keydown", O), () => document.removeEventListener("keydown", O);
  }, [
    s
  ]), R.useEffect(() => {
    if (N.current)
      return () => {
        T.current && (T.current.focus({
          preventScroll: !0
        }), T.current = null, M.current = !1);
      };
  }, [
    N.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ R.createElement("section", {
    ref: n,
    "aria-label": `${C} ${V}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, _.map((O, W) => {
    var X;
    const [J, le] = O.split("-");
    return S.length ? /* @__PURE__ */ R.createElement("ol", {
      key: O,
      dir: y === "auto" ? os() : y,
      tabIndex: -1,
      ref: N,
      className: l,
      "data-sonner-toaster": !0,
      "data-sonner-theme": B,
      "data-y-position": J,
      "data-x-position": le,
      style: {
        "--front-toast-height": `${((X = E[0]) == null ? void 0 : X.height) || 0}px`,
        "--width": `${Ip}px`,
        "--gap": `${x}px`,
        ...b,
        ...$p(c, f)
      },
      onBlur: (Y) => {
        M.current && !Y.currentTarget.contains(Y.relatedTarget) && (M.current = !1, T.current && (T.current.focus({
          preventScroll: !0
        }), T.current = null));
      },
      onFocus: (Y) => {
        Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || M.current || (M.current = !0, T.current = Y.relatedTarget);
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
    }, S.filter((Y) => !Y.position && W === 0 || Y.position === O).map((Y, k) => {
      var Z, se;
      return /* @__PURE__ */ R.createElement(Dp, {
        key: Y.id,
        icons: w,
        index: k,
        toast: Y,
        defaultRichColors: g,
        duration: (Z = v == null ? void 0 : v.duration) != null ? Z : h,
        className: v == null ? void 0 : v.className,
        descriptionClassName: v == null ? void 0 : v.descriptionClassName,
        invert: r,
        visibleToasts: m,
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
        toasts: S.filter((ne) => ne.position == Y.position),
        heights: E.filter((ne) => ne.position == Y.position),
        setHeights: F,
        expandByDefault: a,
        gap: x,
        expanded: $,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), Vp = Q(
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
), Lp = d.forwardRef(
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
  }, f) => /* @__PURE__ */ p(
    Fp,
    {
      ref: f,
      className: D("toaster group", e),
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
          toast: D(
            Vp({ variant: "default" }),
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
Lp.displayName = "Toaster";
const Bp = () => ({
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
}), c0 = Bp(), zp = Q("w-full", {
  variants: {
    fitted: {
      true: "",
      false: ""
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
      false: ""
    }
  },
  defaultVariants: {
    fitted: !1,
    disabled: !1
  }
}), Hp = Q(
  "inline-flex items-center justify-center cursor-pointer whitespace-nowrap px-3 py-1.5 text-gray-600 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg mr-1",
  {
    variants: {
      selected: {
        true: "bg-gray-200",
        false: "hover:bg-gray-200"
      },
      fitted: {
        true: "flex-1 mr-0",
        false: ""
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
        false: ""
      }
    },
    defaultVariants: {
      selected: !1,
      fitted: !1,
      disabled: !1
    }
  }
), jp = ({
  tab: e,
  selected: t,
  fitted: n,
  disabled: r,
  onSelect: o
}) => /* @__PURE__ */ p(
  "button",
  {
    type: "button",
    role: "tab",
    "aria-selected": t,
    "aria-controls": e.panelID,
    "aria-label": e.accessibilityLabel || e.content,
    className: D(
      Hp({
        selected: t,
        fitted: n,
        disabled: r
      })
    ),
    onClick: o,
    disabled: r,
    children: /* @__PURE__ */ I("span", { className: "flex items-center gap-2", children: [
      e.content,
      e.badge && /* @__PURE__ */ p("span", { className: "inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-medium bg-gray-300 text-current rounded-full ml-1", children: e.badge })
    ] })
  }
), Gp = d.forwardRef(
  ({
    tabs: e,
    children: t,
    selected: n,
    disabled: r = !1,
    canCreateNewView: o = !1,
    newViewAccessibilityLabel: s = "Create new view",
    fitted: a = !1,
    disclosureText: i,
    disclosureZIndexOverride: l,
    onSelect: c,
    onCreateNewView: f,
    className: u,
    ...g
  }, h) => {
    var C, S;
    const [b, m] = d.useState(!1), v = e, y = [], x = (P) => {
      c && !r && c(P);
    }, w = async () => {
      if (f) {
        const P = prompt("Enter view name:");
        P && await f(P);
      }
    };
    return /* @__PURE__ */ I(
      "div",
      {
        ref: h,
        className: D(zp({ fitted: a, disabled: r }), u),
        ...g,
        children: [
          /* @__PURE__ */ I("div", { className: "flex items-center", children: [
            /* @__PURE__ */ p("div", { className: D("flex", a ? "flex-1" : ""), children: v.map((P, _) => /* @__PURE__ */ p(
              jp,
              {
                tab: P,
                selected: _ === n,
                fitted: a,
                disabled: r,
                onSelect: () => x(_)
              },
              P.id
            )) }),
            o && /* @__PURE__ */ p(
              ue,
              {
                variant: "plain",
                size: "micro",
                icon: /* @__PURE__ */ p(fs, { className: "size-4" }),
                onClick: w,
                disabled: r,
                accessibilityLabel: s
              }
            ),
            y.length > 0 && /* @__PURE__ */ p(
              qn,
              {
                active: b,
                activator: /* @__PURE__ */ p(
                  ue,
                  {
                    variant: "plain",
                    size: "micro",
                    icon: /* @__PURE__ */ p(Jt, { className: "size-4" }),
                    onClick: () => m(!b),
                    disabled: r,
                    accessibilityLabel: i || "More tabs"
                  }
                ),
                onClose: () => m(!1),
                preferredPosition: "below",
                children: /* @__PURE__ */ p("div", { className: "p-2 min-w-48", children: y.map((P, _) => /* @__PURE__ */ I(
                  "button",
                  {
                    className: "w-full text-left px-3 py-2 hover:bg-[#f6f6f6] rounded text-sm",
                    onClick: () => {
                      x(v.length + _), m(!1);
                    },
                    children: [
                      P.content,
                      P.badge && /* @__PURE__ */ p("span", { className: "inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full ml-2", children: P.badge })
                    ]
                  },
                  P.id
                )) })
              }
            )
          ] }),
          t && /* @__PURE__ */ p(
            "div",
            {
              role: "tabpanel",
              "aria-labelledby": (C = e[n]) == null ? void 0 : C.id,
              id: (S = e[n]) == null ? void 0 : S.panelID,
              children: t
            }
          )
        ]
      }
    );
  }
);
Gp.displayName = "Tabs";
const Wp = (e) => {
  if (!e) return "";
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    const o = n === "xs" ? "" : `${n}:`;
    t.push(`${o}grid-cols-${r}`);
  }), t.join(" ");
}, Up = (e) => {
  if (!e) return "";
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    const o = n === "xs" ? "" : `${n}:`, s = r.replace(/(\d+)px/, "gap-$1").replace(/(\d+)rem/, "gap-$1");
    t.push(`${o}${s}`);
  }), t.join(" ");
}, qp = (e) => "", Yp = (e) => {
  if (!e) return "";
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    const o = n === "xs" ? "" : `${n}:`;
    t.push(`${o}col-span-${r}`);
  }), t.join(" ");
}, Xp = Q("grid w-full", {
  variants: {},
  defaultVariants: {}
}), Zp = Q("", {
  variants: {},
  defaultVariants: {}
}), Ai = d.forwardRef(
  ({ columnSpan: e, area: t, children: n, className: r, ...o }, s) => {
    const a = t ? { gridArea: t } : void 0;
    return /* @__PURE__ */ p(
      "div",
      {
        ref: s,
        className: D(
          Zp(),
          Yp(e),
          r
        ),
        style: a,
        ...o,
        children: n
      }
    );
  }
);
Ai.displayName = "GridCell";
const Ti = d.forwardRef(
  ({ areas: e, columns: t, gap: n, children: r, className: o, ...s }, a) => {
    const i = d.useMemo(() => {
      if (!e) return;
      const l = {};
      return Object.entries(e).forEach(([c, f]) => {
        const u = f.map((g) => `"${g}"`).join(" ");
        l.gridTemplateAreas = u;
      }), l;
    }, [e]);
    return /* @__PURE__ */ p(
      "div",
      {
        ref: a,
        className: D(
          Xp(),
          Wp(t),
          Up(n),
          qp(e),
          // Default grid setup if no columns specified
          !t && "grid-cols-12",
          // Default gap if none specified
          !n && "gap-4",
          o
        ),
        style: i,
        ...s,
        children: r
      }
    );
  }
);
Ti.displayName = "Grid";
const Kp = Ti;
Kp.Cell = Ai;
export {
  Yf as Badge,
  jf as Bleed,
  eg as BlockStack,
  Pl as Box,
  ue as Button,
  Ss as ButtonGroup,
  Cf as Card,
  ja as ChoiceList,
  up as ContextualSaveBar,
  og as Divider,
  Kp as Grid,
  Ai as GridCell,
  Ei as Icon,
  gg as IndexFilters,
  Ri as IndexTable,
  Kf as InlineStack,
  cg as Link,
  Ff as Modal,
  qf as Page,
  fi as Pagination,
  qn as Popover,
  ig as RadioButton,
  Xd as Select,
  Gp as Tabs,
  Me as Text,
  _s as TextField,
  zf as TitleBar,
  Lp as Toaster,
  a0 as badgeVariants,
  Hf as bleedVariants,
  Jf as blockStackVariants,
  El as boxVariants,
  wl as buttonGroupVariants,
  xl as buttonVariants,
  D as cn,
  rg as dividerVariants,
  Zp as gridCellVariants,
  Xp as gridVariants,
  ap as iconVariants,
  dg as indexFiltersVariants,
  sp as indexTableVariants,
  Zf as inlineStackVariants,
  lg as linkVariants,
  $f as modalVariants,
  ug as paginationVariants,
  yf as polarisCardVariants,
  vf as polarisChoiceListVariants,
  Gf as polarisPageVariants,
  pf as polarisPopoverVariants,
  Ud as polarisSelectVariants,
  sg as radioButtonVariants,
  ip as saveBarVariants,
  Hp as tabVariants,
  zp as tabsVariants,
  Ml as textFieldVariants,
  Nl as textVariants,
  Vf as titleBarVariants,
  c0 as toast,
  Vp as toastVariants,
  l0 as useIndexResourceState,
  i0 as useSetIndexFiltersMode
};
//# sourceMappingURL=index.js.map
