import { jsx as h, jsxs as $, Fragment as et } from "react/jsx-runtime";
import * as p from "react";
import C, { useLayoutEffect as As, useState as Ns } from "react";
import * as Mo from "react-dom";
import Ao from "react-dom";
function Tr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function No(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Tr(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Tr(e[o], null);
        }
      };
  };
}
function Ie(...e) {
  return p.useCallback(No(...e), e);
}
// @__NO_SIDE_EFFECTS__
function xn(e) {
  const t = /* @__PURE__ */ Is(e), n = p.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = p.Children.toArray(i), u = a.find(Fs);
    if (u) {
      const l = u.props.children, d = a.map((c) => c === u ? p.Children.count(l) > 1 ? p.Children.only(null) : p.isValidElement(l) ? l.props.children : null : c);
      return /* @__PURE__ */ h(t, { ...s, ref: o, children: p.isValidElement(l) ? p.cloneElement(l, void 0, d) : null });
    }
    return /* @__PURE__ */ h(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var ks = /* @__PURE__ */ xn("Slot");
// @__NO_SIDE_EFFECTS__
function Is(e) {
  const t = p.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (p.isValidElement(o)) {
      const s = Ds(o), a = Os(i, o.props);
      return o.type !== p.Fragment && (a.ref = r ? No(r, s) : s), p.cloneElement(o, a);
    }
    return p.Children.count(o) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var $s = Symbol("radix.slottable");
function Fs(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === $s;
}
function Os(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      const u = i(...a);
      return o(...a), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Ds(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ko(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ko(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Io() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ko(e)) && (r && (r += " "), r += t);
  return r;
}
const Vr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Lr = Io, J = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Lr(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((l) => {
    const d = n == null ? void 0 : n[l], c = i == null ? void 0 : i[l];
    if (d === null) return null;
    const f = Vr(d) || Vr(c);
    return o[l][f];
  }), a = n && Object.entries(n).reduce((l, d) => {
    let [c, f] = d;
    return f === void 0 || (l[c] = f), l;
  }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, d) => {
    let { class: c, className: f, ...g } = d;
    return Object.entries(g).every((b) => {
      let [m, v] = b;
      return Array.isArray(v) ? v.includes({
        ...i,
        ...a
      }[m]) : {
        ...i,
        ...a
      }[m] === v;
    }) ? [
      ...l,
      c,
      f
    ] : l;
  }, []);
  return Lr(e, s, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
var $o = function(t) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ C.createElement("path", {
    d: "M10 6a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Z"
  }), /* @__PURE__ */ C.createElement("path", {
    d: "M10 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 8.25a4.75 4.75 0 0 1 4.75-4.75h3.5a4.75 4.75 0 0 1 4.75 4.75v2.5a4.75 4.75 0 0 1-4.573 4.747l-1.335 1.714a.75.75 0 0 1-1.189-.006l-1.3-1.707a4.75 4.75 0 0 1-4.603-4.748v-2.5Zm4.75-3.25a3.25 3.25 0 0 0-3.25 3.25v2.5a3.25 3.25 0 0 0 3.25 3.25h.226a.75.75 0 0 1 .597.296l.934 1.225.96-1.232a.75.75 0 0 1 .591-.289h.192a3.25 3.25 0 0 0 3.25-3.25v-2.5a3.25 3.25 0 0 0-3.25-3.25h-3.5Z"
  }));
};
$o.displayName = "AlertBubbleIcon";
var Fo = function(t) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
Fo.displayName = "CheckIcon";
var ir = function(t) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
ir.displayName = "ChevronDownIcon";
var sr = function(t) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M11.764 5.204a.75.75 0 0 1 .032 1.06l-3.516 3.736 3.516 3.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.028l4-4.25a.75.75 0 0 1 1.06-.032Z"
  }));
};
sr.displayName = "ChevronLeftIcon";
var ar = function(t) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
  }));
};
ar.displayName = "ChevronRightIcon";
var lr = function(t) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
lr.displayName = "ChevronUpIcon";
var Oo = function(t) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ C.createElement("path", {
    d: "M3 6a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z"
  }), /* @__PURE__ */ C.createElement("path", {
    d: "M6.75 14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
  }), /* @__PURE__ */ C.createElement("path", {
    d: "M5.5 9.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
  }));
};
Oo.displayName = "FilterIcon";
var Do = function(t) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ C.createElement("path", {
    d: "M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"
  }), /* @__PURE__ */ C.createElement("path", {
    d: "M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"
  }));
};
Do.displayName = "RefreshIcon";
var To = function(t) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};
To.displayName = "SearchIcon";
var Vo = function(t) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }), /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M9.377 2.5c-.926 0-1.676.75-1.676 1.676v.688c0 .056-.043.17-.198.251-.153.08-.303.168-.448.262-.147.097-.268.076-.318.048l-.6-.346a1.676 1.676 0 0 0-2.29.613l-.622 1.08a1.676 1.676 0 0 0 .613 2.289l.648.374c.048.028.124.12.119.29a5.484 5.484 0 0 0 .005.465c.009.175-.07.27-.119.299l-.653.377a1.676 1.676 0 0 0-.613 2.29l.623 1.08a1.676 1.676 0 0 0 2.29.613l.7-.405c.048-.028.166-.048.312.043.115.071.233.139.353.202.155.08.198.195.198.251v.811c0 .926.75 1.676 1.676 1.676h1.246c.926 0 1.676-.75 1.676-1.676v-.81c0-.057.042-.171.197-.252.121-.063.239-.13.354-.202.146-.091.264-.07.312-.043l.7.405a1.676 1.676 0 0 0 2.29-.614l.623-1.08a1.676 1.676 0 0 0-.613-2.289l-.653-.377c-.05-.029-.128-.123-.119-.3a5.494 5.494 0 0 0 .005-.463c-.005-.171.07-.263.12-.291l.647-.374a1.676 1.676 0 0 0 .613-2.29l-.623-1.079a1.676 1.676 0 0 0-2.29-.613l-.6.346c-.049.028-.17.048-.318-.048a5.4 5.4 0 0 0-.448-.262c-.155-.081-.197-.195-.197-.251v-.688c0-.926-.75-1.676-1.676-1.676h-1.246Zm-.176 1.676c0-.097.078-.176.176-.176h1.246c.097 0 .176.079.176.176v.688c0 .728.462 1.298 1.003 1.58.11.058.219.122.323.19.517.337 1.25.458 1.888.09l.6-.346a.176.176 0 0 1 .24.064l.623 1.08a.176.176 0 0 1-.064.24l-.648.374c-.623.36-.888 1.034-.868 1.638a4.184 4.184 0 0 1-.004.337c-.032.615.23 1.31.867 1.677l.653.377a.176.176 0 0 1 .064.24l-.623 1.08a.176.176 0 0 1-.24.065l-.701-.405c-.624-.36-1.341-.251-1.855.069a3.91 3.91 0 0 1-.255.145c-.54.283-1.003.853-1.003 1.581v.811a.176.176 0 0 1-.176.176h-1.246a.176.176 0 0 1-.176-.176v-.81c0-.73-.462-1.3-1.003-1.582a3.873 3.873 0 0 1-.255-.146c-.514-.32-1.23-.428-1.855-.068l-.7.405a.176.176 0 0 1-.241-.065l-.623-1.08a.176.176 0 0 1 .064-.24l.653-.377c.637-.368.899-1.062.867-1.677a3.97 3.97 0 0 1-.004-.337c.02-.604-.245-1.278-.868-1.638l-.648-.374a.176.176 0 0 1-.064-.24l.623-1.08a.176.176 0 0 1 .24-.064l.6.346c.638.368 1.37.247 1.888-.09a3.85 3.85 0 0 1 .323-.19c.54-.282 1.003-.852 1.003-1.58v-.688Z"
  }));
};
Vo.displayName = "SettingsIcon";
var Lo = function(t) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ C.createElement("path", {
    d: "M7.75 6.06v7.69a.75.75 0 0 1-1.5 0v-7.69l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72Z"
  }), /* @__PURE__ */ C.createElement("path", {
    d: "M13.75 6.25a.75.75 0 0 0-1.5 0v7.69l-1.72-1.72a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-7.69Z"
  }));
};
Lo.displayName = "SortIcon";
var Bo = function(t) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ C.createElement("path", {
    d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
  }), /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
Bo.displayName = "XCircleIcon";
var cr = function(t) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ C.createElement("path", {
    d: "M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z"
  }));
};
cr.displayName = "XIcon";
const ur = "-", Ts = (e) => {
  const t = Ls(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const a = s.split(ur);
      return a[0] === "" && a.length !== 1 && a.shift(), zo(a, t) || Vs(s);
    },
    getConflictingClassGroupIds: (s, a) => {
      const u = n[s] || [];
      return a && r[s] ? [...u, ...r[s]] : u;
    }
  };
}, zo = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? zo(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(ur);
  return (s = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
}, Br = /^\[(.+)\]$/, Vs = (e) => {
  if (Br.test(e)) {
    const t = Br.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Ls = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return zs(Object.entries(e.classGroups), n).forEach(([i, s]) => {
    qn(s, r, i, t);
  }), r;
}, qn = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : zr(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Bs(o)) {
        qn(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      qn(s, zr(t, i), n, r);
    });
  });
}, zr = (e, t) => {
  let n = e;
  return t.split(ur).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Bs = (e) => e.isThemeGetter, zs = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
  return [n, o];
}) : e, Hs = (e) => {
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
}, Ho = "!", js = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, s = (a) => {
    const u = [];
    let l = 0, d = 0, c;
    for (let v = 0; v < a.length; v++) {
      let x = a[v];
      if (l === 0) {
        if (x === o && (r || a.slice(v, v + i) === t)) {
          u.push(a.slice(d, v)), d = v + i;
          continue;
        }
        if (x === "/") {
          c = v;
          continue;
        }
      }
      x === "[" ? l++ : x === "]" && l--;
    }
    const f = u.length === 0 ? a : a.substring(d), g = f.startsWith(Ho), b = g ? f.substring(1) : f, m = c && c > d ? c - d : void 0;
    return {
      modifiers: u,
      hasImportantModifier: g,
      baseClassName: b,
      maybePostfixModifierPosition: m
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: s
  }) : s;
}, Gs = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, Ws = (e) => ({
  cache: Hs(e.cacheSize),
  parseClassName: js(e),
  ...Ts(e)
}), Us = /\s+/, qs = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], s = e.trim().split(Us);
  let a = "";
  for (let u = s.length - 1; u >= 0; u -= 1) {
    const l = s[u], {
      modifiers: d,
      hasImportantModifier: c,
      baseClassName: f,
      maybePostfixModifierPosition: g
    } = n(l);
    let b = !!g, m = r(b ? f.substring(0, g) : f);
    if (!m) {
      if (!b) {
        a = l + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (m = r(f), !m) {
        a = l + (a.length > 0 ? " " + a : a);
        continue;
      }
      b = !1;
    }
    const v = Gs(d).join(":"), x = c ? v + Ho : v, y = x + m;
    if (i.includes(y))
      continue;
    i.push(y);
    const w = o(m, b);
    for (let S = 0; S < w.length; ++S) {
      const _ = w[S];
      i.push(x + _);
    }
    a = l + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Xs() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = jo(t)) && (r && (r += " "), r += n);
  return r;
}
const jo = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = jo(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Ys(e, ...t) {
  let n, r, o, i = s;
  function s(u) {
    const l = t.reduce((d, c) => c(d), e());
    return n = Ws(l), r = n.cache.get, o = n.cache.set, i = a, a(u);
  }
  function a(u) {
    const l = r(u);
    if (l)
      return l;
    const d = qs(u, n);
    return o(u, d), d;
  }
  return function() {
    return i(Xs.apply(null, arguments));
  };
}
const ne = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Go = /^\[(?:([a-z-]+):)?(.+)\]$/i, Zs = /^\d+\/\d+$/, Ks = /* @__PURE__ */ new Set(["px", "full", "screen"]), Qs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Js = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ea = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ta = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, na = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, He = (e) => Ct(e) || Ks.has(e) || Zs.test(e), Ze = (e) => Mt(e, "length", ua), Ct = (e) => !!e && !Number.isNaN(Number(e)), Nn = (e) => Mt(e, "number", Ct), Ot = (e) => !!e && Number.isInteger(Number(e)), ra = (e) => e.endsWith("%") && Ct(e.slice(0, -1)), U = (e) => Go.test(e), Ke = (e) => Qs.test(e), oa = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ia = (e) => Mt(e, oa, Wo), sa = (e) => Mt(e, "position", Wo), aa = /* @__PURE__ */ new Set(["image", "url"]), la = (e) => Mt(e, aa, fa), ca = (e) => Mt(e, "", da), Dt = () => !0, Mt = (e, t, n) => {
  const r = Go.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, ua = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Js.test(e) && !ea.test(e)
), Wo = () => !1, da = (e) => ta.test(e), fa = (e) => na.test(e), ga = () => {
  const e = ne("colors"), t = ne("spacing"), n = ne("blur"), r = ne("brightness"), o = ne("borderColor"), i = ne("borderRadius"), s = ne("borderSpacing"), a = ne("borderWidth"), u = ne("contrast"), l = ne("grayscale"), d = ne("hueRotate"), c = ne("invert"), f = ne("gap"), g = ne("gradientColorStops"), b = ne("gradientColorStopPositions"), m = ne("inset"), v = ne("margin"), x = ne("opacity"), y = ne("padding"), w = ne("saturate"), S = ne("scale"), _ = ne("sepia"), M = ne("skew"), R = ne("space"), E = ne("translate"), O = () => ["auto", "contain", "none"], F = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", U, t], I = () => [U, t], q = () => ["", He, Ze], V = () => ["auto", Ct, U], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], A = () => ["solid", "dashed", "dotted", "double", "none"], D = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], P = () => ["", "0", U], L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [Ct, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Dt],
      spacing: [He, Ze],
      blur: ["none", "", Ke, U],
      brightness: k(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ke, U],
      borderSpacing: I(),
      borderWidth: q(),
      contrast: k(),
      grayscale: P(),
      hueRotate: k(),
      invert: P(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [ra, Ze],
      inset: B(),
      margin: B(),
      opacity: k(),
      padding: I(),
      saturate: k(),
      scale: k(),
      sepia: P(),
      skew: k(),
      space: I(),
      translate: I()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", U]
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
        columns: [Ke]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": L()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": L()
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
        object: [...Y(), U]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: F()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": F()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": F()
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
        z: ["auto", Ot, U]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: B()
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
        flex: ["1", "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: P()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: P()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ot, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Dt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ot, U]
        }, U]
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
        "grid-rows": [Dt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ot, U]
        }, U]
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
        "auto-cols": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
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
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", U, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [U, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [U, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ke]
        }, Ke]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [U, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [U, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ke, Ze]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Nn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Dt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ct, Nn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", He, U]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", U]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", U]
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
        "placeholder-opacity": [x]
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
        "text-opacity": [x]
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
        decoration: [...A(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", He, Ze]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", He, U]
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
        indent: I()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
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
        content: ["none", U]
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
        "bg-opacity": [x]
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
        bg: [...Y(), sa]
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
        bg: ["auto", "cover", "contain", ia]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, la]
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
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
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
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...A(), "hidden"]
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
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: A()
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
        outline: ["", ...A()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [He, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [He, Ze]
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
        ring: q()
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
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [He, Ze]
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
        shadow: ["", "inner", "none", Ke, ca]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Dt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...D(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": D()
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
        contrast: [u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ke, U]
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
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [c]
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
        "backdrop-contrast": [u]
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
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: k()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: k()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", U]
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
        scale: [S]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ot, U]
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
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
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
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
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
        "will-change": ["auto", "scroll", "contents", "transform", U]
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
        stroke: [He, Ze, Nn]
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
}, pa = /* @__PURE__ */ Ys(ga);
function T(...e) {
  return pa(Io(e));
}
const ma = J(
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
), ha = (e) => e ? e === !0 || e === "down" ? /* @__PURE__ */ h(ir, { className: "size-4" }) : e === "up" ? /* @__PURE__ */ h(lr, { className: "size-4" }) : e === "select" ? /* @__PURE__ */ h(Fo, { className: "size-4" }) : null : null, Hr = () => /* @__PURE__ */ h(Do, { className: "size-4 animate-spin" }), ie = p.forwardRef(
  ({
    children: e,
    size: t = "medium",
    textAlign: n = "center",
    fullWidth: r = !1,
    disclosure: o,
    removeUnderline: i,
    icon: s,
    dataPrimaryLink: a,
    tone: u = "default",
    variant: l = "default",
    id: d,
    url: c,
    external: f,
    target: g,
    download: b,
    submit: m,
    disabled: v,
    loading: x,
    pressed: y = !1,
    accessibilityLabel: w,
    role: S,
    ariaControls: _,
    ariaExpanded: M,
    ariaDescribedBy: R,
    ariaChecked: E,
    onClick: O,
    onFocus: F,
    onBlur: B,
    onKeyPress: I,
    onKeyUp: q,
    onKeyDown: V,
    onMouseEnter: Y,
    onTouchStart: A,
    onPointerDown: D,
    className: N,
    asChild: P = !1,
    ...L
  }, k) => {
    const j = !!c, W = P ? ks : j ? "a" : "button", Z = x, re = v || Z, X = ha(o), te = T(
      ma({
        variant: l,
        size: t,
        tone: u === "critical" ? "critical" : u === "success" ? "success" : "default",
        textAlign: n,
        fullWidth: r,
        pressed: y
      }),
      // Handle underline removal for plain variants
      i && (l === "plain" || l === "monochromePlain") && "no-underline hover:no-underline",
      N
    ), se = {
      id: d,
      className: te,
      disabled: re,
      "aria-label": w,
      "aria-controls": _,
      "aria-expanded": M,
      "aria-describedby": R,
      "aria-checked": E,
      "aria-pressed": y,
      "data-primary-link": a,
      role: S,
      onClick: re ? void 0 : O,
      onFocus: F,
      onBlur: B,
      onKeyPress: I,
      onKeyUp: q,
      onKeyDown: V,
      onMouseEnter: Y,
      onTouchStart: A,
      onPointerDown: D,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: k,
      ...L
    };
    return j ? /* @__PURE__ */ $(
      W,
      {
        ...se,
        href: c,
        target: f ? "_blank" : g,
        rel: f ? "noopener noreferrer" : void 0,
        download: b,
        children: [
          s && !Z && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: s }),
          Z && /* @__PURE__ */ h(Hr, {}),
          e && /* @__PURE__ */ h("span", { className: "inline-flex", children: e }),
          X && !Z && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: X })
        ]
      }
    ) : /* @__PURE__ */ $(W, { ...se, type: m ? "submit" : "button", children: [
      s && !Z && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: s }),
      Z && /* @__PURE__ */ h(Hr, {}),
      e && /* @__PURE__ */ h("span", { className: "inline-flex", children: e }),
      X && !Z && /* @__PURE__ */ h("span", { className: "inline-flex shrink-0", children: X })
    ] });
  }
);
ie.displayName = "Button";
const ba = J("flex items-center", {
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
}), Uo = p.forwardRef(
  ({
    children: e,
    gap: t = "tight",
    variant: n,
    fullWidth: r = !1,
    connectedTop: o = !1,
    noWrap: i = !1,
    className: s,
    ...a
  }, u) => {
    const l = T(
      ba({
        gap: n === "segmented" ? void 0 : t,
        variant: n,
        fullWidth: r,
        connectedTop: o,
        noWrap: i
      }),
      s
    );
    return /* @__PURE__ */ h("div", { className: l, ref: u, ...a, children: e });
  }
);
Uo.displayName = "ButtonGroup";
const va = (e) => e && {
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
}[e] || "", jr = (e) => e ? e === "transparent" ? "border-transparent" : {
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
}[e] || "" : "", xa = (e) => e && {
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
}[e] || "", Gr = (e) => e && {
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
}[e] || "", ya = (e) => e && {
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
}[e] || "", Wr = (e) => e && {
  0: "border-0",
  "0165": "border-[0.66px]",
  "025": "border",
  "050": "border-2",
  100: "border-4"
}[e] || "", wa = (e) => e && {
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
}[e] || "", Me = (e, t = "p") => {
  if (!e) return "";
  if (typeof e == "string") {
    const r = Gr(e);
    return r ? `${t}-${r}` : "";
  }
  const n = [];
  return Object.entries(e).forEach(([r, o]) => {
    const i = Gr(o);
    if (i) {
      const s = r === "xs" ? "" : `${r}:`;
      n.push(`${s}${t}-${i}`);
    }
  }), n.join(" ");
}, Kt = (e, t) => {
  const r = {
    0: "0",
    "0165": "[0.66px]",
    "025": "",
    "050": "2",
    100: "4"
  }[e];
  return r ? `border-${t}-${r}` : `border-${t}`;
}, Qt = (e, t) => {
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
}, Ca = J("", {
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
}), Sa = p.forwardRef(
  ({
    children: e,
    as: t = "div",
    background: n,
    borderColor: r,
    borderStyle: o,
    borderRadius: i,
    borderEndStartRadius: s,
    borderEndEndRadius: a,
    borderStartStartRadius: u,
    borderStartEndRadius: l,
    borderWidth: d,
    borderBlockStartWidth: c,
    borderBlockEndWidth: f,
    borderInlineStartWidth: g,
    borderInlineEndWidth: b,
    color: m,
    id: v,
    minHeight: x,
    minWidth: y,
    maxWidth: w,
    overflowX: S,
    overflowY: _,
    padding: M,
    paddingBlock: R,
    paddingBlockStart: E,
    paddingBlockEnd: O,
    paddingInline: F,
    paddingInlineStart: B,
    paddingInlineEnd: I,
    role: q,
    shadow: V,
    tabIndex: Y,
    width: A,
    position: D,
    insetBlockStart: N,
    insetBlockEnd: P,
    insetInlineStart: L,
    insetInlineEnd: k,
    opacity: j,
    outlineColor: W,
    outlineStyle: Z,
    outlineWidth: re,
    printHidden: X = !1,
    visuallyHidden: te = !1,
    zIndex: se,
    className: ge,
    ...pe
  }, Q) => {
    const me = t, ve = T(
      Ca({
        visuallyHidden: te,
        printHidden: X
      }),
      // Background
      va(n),
      // Border
      jr(r),
      o === "dashed" ? "border-dashed" : "border-solid",
      ya(i),
      Wr(d),
      // Individual border widths
      c && Kt(c, "t"),
      f && Kt(f, "b"),
      g && Kt(g, "l"),
      b && Kt(b, "r"),
      // Individual border radius
      s && Qt(s, "bl"),
      a && Qt(a, "br"),
      u && Qt(u, "tl"),
      l && Qt(l, "tr"),
      // Text color
      xa(m),
      // Overflow
      S && `overflow-x-${S}`,
      _ && `overflow-y-${_}`,
      // Padding
      Me(M, "p"),
      Me(R, "py"),
      Me(E, "pt"),
      Me(O, "pb"),
      Me(F, "px"),
      Me(B, "pl"),
      Me(I, "pr"),
      // Shadow
      wa(V),
      // Position
      D && `${D}`,
      // Inset (positioning)
      Me(N, "top"),
      Me(P, "bottom"),
      Me(L, "left"),
      Me(k, "right"),
      // Outline
      W && jr(W).replace("border-", "outline-"),
      Z === "dashed" ? "outline-dashed" : Z === "solid" ? "outline-solid" : "",
      re && Wr(re).replace("border-", "outline-"),
      ge
    ), xe = {
      ...x && { minHeight: x },
      ...y && { minWidth: y },
      ...w && { maxWidth: w },
      ...A && { width: A },
      ...j && { opacity: j },
      ...se && { zIndex: se }
    };
    return /* @__PURE__ */ h(
      me,
      {
        ref: Q,
        className: ve,
        style: Object.keys(xe).length > 0 ? xe : void 0,
        id: v,
        role: q,
        tabIndex: Y,
        ...pe,
        children: e
      }
    );
  }
);
Sa.displayName = "Box";
const _a = J("", {
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
}), Re = p.forwardRef(
  ({
    children: e,
    as: t = "span",
    alignment: n,
    breakWord: r = !1,
    tone: o,
    fontWeight: i,
    id: s,
    numeric: a = !1,
    truncate: u = !1,
    variant: l = "bodyMd",
    visuallyHidden: d = !1,
    textDecorationLine: c,
    className: f,
    ...g
  }, b) => /* @__PURE__ */ h(
    t,
    {
      ref: b,
      id: s,
      className: T(
        _a({
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
          truncate: u,
          numeric: a,
          visuallyHidden: d,
          textDecorationLine: c ? "line-through" : "none"
        }),
        f
      ),
      ...g,
      children: e
    }
  )
);
Re.displayName = "Text";
const Ra = J(
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
), Ea = () => {
  const [e] = p.useState(
    () => Math.random().toString(36).substring(2, 11)
  );
  return e;
}, Pa = (e) => {
  if (e)
    return typeof e == "number" ? e : 3;
}, Ma = (e) => {
  if (e)
    return e || typeof e == "number" && e > 0 ? { "aria-multiline": !0 } : void 0;
}, Ur = (e) => `${e}Label`, qr = (e) => `${e}HelpText`, qo = p.forwardRef(
  ({
    prefix: e,
    suffix: t,
    verticalContent: n,
    placeholder: r,
    value: o = "",
    helpText: i,
    label: s,
    labelAction: a,
    labelHidden: u = !1,
    disabled: l = !1,
    clearButton: d = !1,
    readOnly: c = !1,
    autoFocus: f = !1,
    focused: g,
    multiline: b = !1,
    error: m,
    connectedRight: v,
    connectedLeft: x,
    type: y = "text",
    name: w,
    id: S,
    role: _,
    step: M,
    largeStep: R,
    autoComplete: E,
    max: O,
    maxLength: F,
    maxHeight: B,
    min: I,
    minLength: q,
    pattern: V,
    inputMode: Y,
    spellCheck: A,
    ariaOwns: D,
    ariaControls: N,
    ariaExpanded: P,
    ariaActiveDescendant: L,
    ariaAutocomplete: k,
    showCharacterCount: j = !1,
    align: W = "left",
    requiredIndicator: Z = !1,
    monospaced: re = !1,
    selectTextOnFocus: X = !1,
    suggestion: te,
    variant: se = "inherit",
    size: ge = "medium",
    tone: pe,
    autoSize: Q = !1,
    loading: me = !1,
    onClearButtonClick: ve,
    onChange: xe,
    onSpinnerChange: Gt,
    onFocus: Ue,
    onBlur: Ee,
    className: ht,
    ...ue
  }, st) => {
    const Pn = Ea(), K = S ?? Pn, [qe, Wt] = p.useState(!!g), It = p.useRef(null), at = p.useRef(null), Ut = p.useRef(null), lt = p.useCallback(() => b ? at.current : It.current, [b]);
    p.useEffect(() => {
      const ee = lt();
      !ee || g === void 0 || (g ? ee.focus() : ee.blur());
    }, [g, lt]), p.useEffect(() => {
      const ee = It.current;
      !ee || !(y === "text" || y === "tel" || y === "search" || y === "url" || y === "password") || !te || ee.setSelectionRange(o.length, te.length);
    }, [qe, o, y, te]);
    const ct = te || o, Xe = y === "currency" ? "text" : y, qt = T(
      Ra({
        size: ge,
        variant: se,
        align: W,
        tone: pe,
        error: !!m,
        monospaced: re,
        multiline: !!b
      }),
      Q && "w-auto min-w-0",
      ht
    ), Be = p.useCallback(
      (ee) => {
        xe && xe(ee.currentTarget.value, K);
      },
      [xe, K]
    ), Mn = p.useCallback(
      (ee) => {
        if (Wt(!0), X && !te) {
          const oe = lt();
          oe == null || oe.select();
        }
        Ue && Ue(ee);
      },
      [X, te, lt, Ue]
    ), An = p.useCallback(
      (ee) => {
        var oe;
        Wt(!1), !((oe = Ut.current) != null && oe.contains(ee == null ? void 0 : ee.relatedTarget)) && Ee && Ee(ee);
      },
      [Ee]
    ), Xt = p.useCallback(() => {
      ve && ve(K);
    }, [ve, K]), Ye = [];
    m && Ye.push(`${K}Error`), i && Ye.push(qr(K)), j && Ye.push(`${K}-CharacterCounter`);
    const ut = [];
    e && ut.push(`${K}-Prefix`), t && ut.push(`${K}-Suffix`), n && ut.push(`${K}-VerticalContent`), ut.unshift(Ur(K));
    let bt = null;
    if (j) {
      const ee = ct.length, oe = F ? `${ee}/${F}` : ee;
      bt = /* @__PURE__ */ h(
        "div",
        {
          id: `${K}-CharacterCounter`,
          className: "text-xs text-muted-foreground mt-1",
          children: oe
        }
      );
    }
    const Yt = d && ct !== "" ? /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        className: "absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground focus:outline-hidden focus:ring-3 focus:ring-ring focus:ring-offset-2 rounded-sm",
        onClick: Xt,
        tabIndex: -1,
        "aria-label": "Clear",
        children: /* @__PURE__ */ h(Bo, { className: "h-4 w-4" })
      }
    ) : null, Zt = e ? /* @__PURE__ */ h(
      "div",
      {
        id: `${K}-Prefix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-r border-input bg-muted/50",
        children: e
      }
    ) : null, $t = t ? /* @__PURE__ */ h(
      "div",
      {
        id: `${K}-Suffix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-l border-input bg-muted/50",
        children: t
      }
    ) : null, Ft = me ? /* @__PURE__ */ h("div", { className: "absolute right-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ h("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-foreground" }) }) : null, G = u ? null : /* @__PURE__ */ $(
      "label",
      {
        id: Ur(K),
        htmlFor: K,
        className: T(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          Z && "after:content-['*'] after:ml-1 after:text-destructive"
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
    ), ae = i ? /* @__PURE__ */ h("div", { id: qr(K), className: "text-xs text-muted-foreground mt-1", children: i }) : null, ce = m && typeof m != "boolean" ? /* @__PURE__ */ h(
      "div",
      {
        id: `${K}Error`,
        className: "text-xs text-destructive mt-1",
        role: "alert",
        children: m
      }
    ) : null, de = n ? /* @__PURE__ */ h(
      "div",
      {
        id: `${K}-VerticalContent`,
        className: "text-sm text-muted-foreground mb-2",
        children: n
      }
    ) : null, dt = {
      ...B && { maxHeight: B }
    }, le = p.createElement(b ? "textarea" : "input", {
      ref: p.useCallback(
        (ee) => {
          b ? at.current = ee : It.current = ee, typeof st == "function" ? st(ee) : st && (st.current = ee);
        },
        [b, st]
      ),
      id: K,
      name: w,
      type: Xe,
      value: ct,
      placeholder: r,
      disabled: l,
      readOnly: c,
      autoFocus: f,
      role: _,
      min: I,
      max: O,
      step: M,
      minLength: q,
      maxLength: F,
      pattern: V,
      inputMode: Y,
      spellCheck: A,
      autoComplete: E,
      rows: Pa(b),
      size: Q ? 1 : void 0,
      style: Object.keys(dt).length > 0 ? dt : void 0,
      className: qt,
      "aria-describedby": Ye.length ? Ye.join(" ") : void 0,
      "aria-labelledby": ut.join(" "),
      "aria-invalid": !!m,
      "aria-owns": D,
      "aria-activedescendant": L,
      "aria-autocomplete": k,
      "aria-controls": N,
      "aria-expanded": P,
      "aria-required": Z,
      ...Ma(b),
      onChange: te ? void 0 : Be,
      onInput: te ? Be : void 0,
      onFocus: Mn,
      onBlur: An,
      // Password manager disable attributes
      "data-1p-ignore": E === "off" || void 0,
      "data-lpignore": E === "off" || void 0,
      "data-form-type": E === "off" ? "other" : void 0,
      ...ue
    });
    return /* @__PURE__ */ $("div", { ref: Ut, className: "space-y-2", children: [
      G,
      x || v ? /* @__PURE__ */ $("div", { className: "flex", children: [
        x,
        /* @__PURE__ */ $("div", { className: "flex-1 relative", children: [
          de,
          /* @__PURE__ */ $("div", { className: "relative flex", children: [
            Zt,
            le,
            $t,
            Yt,
            Ft
          ] })
        ] }),
        v
      ] }) : /* @__PURE__ */ $("div", { className: "relative", children: [
        de,
        /* @__PURE__ */ $("div", { className: "relative flex", children: [
          Zt,
          le,
          $t,
          Yt,
          Ft
        ] })
      ] }),
      ce,
      ae,
      bt
    ] });
  }
);
qo.displayName = "TextField";
function Ce(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Aa(e, t) {
  const n = p.createContext(t), r = (i) => {
    const { children: s, ...a } = i, u = p.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ h(n.Provider, { value: u, children: s });
  };
  r.displayName = e + "Provider";
  function o(i) {
    const s = p.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function dr(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = p.createContext(s), u = n.length;
    n = [...n, s];
    const l = (c) => {
      var x;
      const { scope: f, children: g, ...b } = c, m = ((x = f == null ? void 0 : f[e]) == null ? void 0 : x[u]) || a, v = p.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ h(m.Provider, { value: v, children: g });
    };
    l.displayName = i + "Provider";
    function d(c, f) {
      var m;
      const g = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[u]) || a, b = p.useContext(g);
      if (b) return b;
      if (s !== void 0) return s;
      throw new Error(`\`${c}\` must be used within \`${i}\``);
    }
    return [l, d];
  }
  const o = () => {
    const i = n.map((s) => p.createContext(s));
    return function(a) {
      const u = (a == null ? void 0 : a[e]) || i;
      return p.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: u } }),
        [a, u]
      );
    };
  };
  return o.scopeName = e, [r, Na(o, ...t)];
}
function Na(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: u, scopeName: l }) => {
        const c = u(i)[`__scope${l}`];
        return { ...a, ...c };
      }, {});
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var ka = [
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
], be = ka.reduce((e, t) => {
  const n = /* @__PURE__ */ xn(`Primitive.${t}`), r = p.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, u = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h(u, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ia(e, t) {
  e && Mo.flushSync(() => e.dispatchEvent(t));
}
function Rt(e) {
  const t = p.useRef(e);
  return p.useEffect(() => {
    t.current = e;
  }), p.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function $a(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Rt(e);
  p.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Fa = "DismissableLayer", Xn = "dismissableLayer.update", Oa = "dismissableLayer.pointerDownOutside", Da = "dismissableLayer.focusOutside", Xr, Xo = p.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), fr = p.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...u
    } = e, l = p.useContext(Xo), [d, c] = p.useState(null), f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = p.useState({}), b = Ie(t, (R) => c(R)), m = Array.from(l.layers), [v] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), x = m.indexOf(v), y = d ? m.indexOf(d) : -1, w = l.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= x, _ = La((R) => {
      const E = R.target, O = [...l.branches].some((F) => F.contains(E));
      !S || O || (o == null || o(R), s == null || s(R), R.defaultPrevented || a == null || a());
    }, f), M = Ba((R) => {
      const E = R.target;
      [...l.branches].some((F) => F.contains(E)) || (i == null || i(R), s == null || s(R), R.defaultPrevented || a == null || a());
    }, f);
    return $a((R) => {
      y === l.layers.size - 1 && (r == null || r(R), !R.defaultPrevented && a && (R.preventDefault(), a()));
    }, f), p.useEffect(() => {
      if (d)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Xr = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), Yr(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Xr);
        };
    }, [d, f, n, l]), p.useEffect(() => () => {
      d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), Yr());
    }, [d, l]), p.useEffect(() => {
      const R = () => g({});
      return document.addEventListener(Xn, R), () => document.removeEventListener(Xn, R);
    }, []), /* @__PURE__ */ h(
      be.div,
      {
        ...u,
        ref: b,
        style: {
          pointerEvents: w ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Ce(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: Ce(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: Ce(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
fr.displayName = Fa;
var Ta = "DismissableLayerBranch", Va = p.forwardRef((e, t) => {
  const n = p.useContext(Xo), r = p.useRef(null), o = Ie(t, r);
  return p.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ h(be.div, { ...e, ref: o });
});
Va.displayName = Ta;
function La(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Rt(e), r = p.useRef(!1), o = p.useRef(() => {
  });
  return p.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let u = function() {
          Yo(
            Oa,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, { once: !0 })) : u();
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
function Ba(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Rt(e), r = p.useRef(!1);
  return p.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Yo(Da, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Yr() {
  const e = new CustomEvent(Xn);
  document.dispatchEvent(e);
}
function Yo(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ia(o, i) : o.dispatchEvent(i);
}
var kn = 0;
function Zo() {
  p.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Zr()), document.body.insertAdjacentElement("beforeend", e[1] ?? Zr()), kn++, () => {
      kn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), kn--;
    };
  }, []);
}
function Zr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var In = "focusScope.autoFocusOnMount", $n = "focusScope.autoFocusOnUnmount", Kr = { bubbles: !1, cancelable: !0 }, za = "FocusScope", gr = p.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, u] = p.useState(null), l = Rt(o), d = Rt(i), c = p.useRef(null), f = Ie(t, (m) => u(m)), g = p.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  p.useEffect(() => {
    if (r) {
      let m = function(w) {
        if (g.paused || !a) return;
        const S = w.target;
        a.contains(S) ? c.current = S : Qe(c.current, { select: !0 });
      }, v = function(w) {
        if (g.paused || !a) return;
        const S = w.relatedTarget;
        S !== null && (a.contains(S) || Qe(c.current, { select: !0 }));
      }, x = function(w) {
        if (document.activeElement === document.body)
          for (const _ of w)
            _.removedNodes.length > 0 && Qe(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", v);
      const y = new MutationObserver(x);
      return a && y.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", v), y.disconnect();
      };
    }
  }, [r, a, g.paused]), p.useEffect(() => {
    if (a) {
      Jr.add(g);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const x = new CustomEvent(In, Kr);
        a.addEventListener(In, l), a.dispatchEvent(x), x.defaultPrevented || (Ha(qa(Ko(a)), { select: !0 }), document.activeElement === m && Qe(a));
      }
      return () => {
        a.removeEventListener(In, l), setTimeout(() => {
          const x = new CustomEvent($n, Kr);
          a.addEventListener($n, d), a.dispatchEvent(x), x.defaultPrevented || Qe(m ?? document.body, { select: !0 }), a.removeEventListener($n, d), Jr.remove(g);
        }, 0);
      };
    }
  }, [a, l, d, g]);
  const b = p.useCallback(
    (m) => {
      if (!n && !r || g.paused) return;
      const v = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, x = document.activeElement;
      if (v && x) {
        const y = m.currentTarget, [w, S] = ja(y);
        w && S ? !m.shiftKey && x === S ? (m.preventDefault(), n && Qe(w, { select: !0 })) : m.shiftKey && x === w && (m.preventDefault(), n && Qe(S, { select: !0 })) : x === y && m.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ h(be.div, { tabIndex: -1, ...s, ref: f, onKeyDown: b });
});
gr.displayName = za;
function Ha(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Qe(r, { select: t }), document.activeElement !== n) return;
}
function ja(e) {
  const t = Ko(e), n = Qr(t, e), r = Qr(t.reverse(), e);
  return [n, r];
}
function Ko(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Qr(e, t) {
  for (const n of e)
    if (!Ga(n, { upTo: t })) return n;
}
function Ga(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Wa(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Wa(e) && t && e.select();
  }
}
var Jr = Ua();
function Ua() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = eo(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = eo(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function eo(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function qa(e) {
  return e.filter((t) => t.tagName !== "A");
}
var tt = globalThis != null && globalThis.document ? p.useLayoutEffect : () => {
}, Xa = p[" useId ".trim().toString()] || (() => {
}), Ya = 0;
function un(e) {
  const [t, n] = p.useState(Xa());
  return tt(() => {
    n((r) => r ?? String(Ya++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const Za = ["top", "right", "bottom", "left"], nt = Math.min, we = Math.max, pn = Math.round, Jt = Math.floor, Te = (e) => ({
  x: e,
  y: e
}), Ka = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Qa = {
  start: "end",
  end: "start"
};
function Yn(e, t, n) {
  return we(e, nt(t, n));
}
function Ge(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function We(e) {
  return e.split("-")[0];
}
function At(e) {
  return e.split("-")[1];
}
function pr(e) {
  return e === "x" ? "y" : "x";
}
function mr(e) {
  return e === "y" ? "height" : "width";
}
const Ja = /* @__PURE__ */ new Set(["top", "bottom"]);
function De(e) {
  return Ja.has(We(e)) ? "y" : "x";
}
function hr(e) {
  return pr(De(e));
}
function el(e, t, n) {
  n === void 0 && (n = !1);
  const r = At(e), o = hr(e), i = mr(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = mn(s)), [s, mn(s)];
}
function tl(e) {
  const t = mn(e);
  return [Zn(e), t, Zn(t)];
}
function Zn(e) {
  return e.replace(/start|end/g, (t) => Qa[t]);
}
const to = ["left", "right"], no = ["right", "left"], nl = ["top", "bottom"], rl = ["bottom", "top"];
function ol(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? no : to : t ? to : no;
    case "left":
    case "right":
      return t ? nl : rl;
    default:
      return [];
  }
}
function il(e, t, n, r) {
  const o = At(e);
  let i = ol(We(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Zn)))), i;
}
function mn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ka[t]);
}
function sl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Qo(e) {
  return typeof e != "number" ? sl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function hn(e) {
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
function ro(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = De(t), s = hr(t), a = mr(s), u = We(t), l = i === "y", d = r.x + r.width / 2 - o.width / 2, c = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let g;
  switch (u) {
    case "top":
      g = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: c
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: c
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (At(t)) {
    case "start":
      g[s] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      g[s] += f * (n && l ? -1 : 1);
      break;
  }
  return g;
}
const al = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: c
  } = ro(l, r, u), f = r, g = {}, b = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: v,
      fn: x
    } = a[m], {
      x: y,
      y: w,
      data: S,
      reset: _
    } = await x({
      x: d,
      y: c,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: g,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = y ?? d, c = w ?? c, g = {
      ...g,
      [v]: {
        ...g[v],
        ...S
      }
    }, _ && b <= 50 && (b++, typeof _ == "object" && (_.placement && (f = _.placement), _.rects && (l = _.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: d,
      y: c
    } = ro(l, f, u)), m = -1);
  }
  return {
    x: d,
    y: c,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function Bt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: u
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: c = "floating",
    altBoundary: f = !1,
    padding: g = 0
  } = Ge(t, e), b = Qo(g), v = a[f ? c === "floating" ? "reference" : "floating" : c], x = hn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: u
  })), y = c === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), S = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = hn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: w,
    strategy: u
  }) : y);
  return {
    top: (x.top - _.top + b.top) / S.y,
    bottom: (_.bottom - x.bottom + b.bottom) / S.y,
    left: (x.left - _.left + b.left) / S.x,
    right: (_.right - x.right + b.right) / S.x
  };
}
const ll = (e) => ({
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
      middlewareData: u
    } = t, {
      element: l,
      padding: d = 0
    } = Ge(e, t) || {};
    if (l == null)
      return {};
    const c = Qo(d), f = {
      x: n,
      y: r
    }, g = hr(o), b = mr(g), m = await s.getDimensions(l), v = g === "y", x = v ? "top" : "left", y = v ? "bottom" : "right", w = v ? "clientHeight" : "clientWidth", S = i.reference[b] + i.reference[g] - f[g] - i.floating[b], _ = f[g] - i.reference[g], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let R = M ? M[w] : 0;
    (!R || !await (s.isElement == null ? void 0 : s.isElement(M))) && (R = a.floating[w] || i.floating[b]);
    const E = S / 2 - _ / 2, O = R / 2 - m[b] / 2 - 1, F = nt(c[x], O), B = nt(c[y], O), I = F, q = R - m[b] - B, V = R / 2 - m[b] / 2 + E, Y = Yn(I, V, q), A = !u.arrow && At(o) != null && V !== Y && i.reference[b] / 2 - (V < I ? F : B) - m[b] / 2 < 0, D = A ? V < I ? V - I : V - q : 0;
    return {
      [g]: f[g] + D,
      data: {
        [g]: Y,
        centerOffset: V - Y - D,
        ...A && {
          alignmentOffset: D
        }
      },
      reset: A
    };
  }
}), cl = function(e) {
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
        platform: u,
        elements: l
      } = t, {
        mainAxis: d = !0,
        crossAxis: c = !0,
        fallbackPlacements: f,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: m = !0,
        ...v
      } = Ge(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const x = We(o), y = De(a), w = We(a) === a, S = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)), _ = f || (w || !m ? [mn(a)] : tl(a)), M = b !== "none";
      !f && M && _.push(...il(a, m, b, S));
      const R = [a, ..._], E = await Bt(t, v), O = [];
      let F = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && O.push(E[x]), c) {
        const V = el(o, s, S);
        O.push(E[V[0]], E[V[1]]);
      }
      if (F = [...F, {
        placement: o,
        overflows: O
      }], !O.every((V) => V <= 0)) {
        var B, I;
        const V = (((B = i.flip) == null ? void 0 : B.index) || 0) + 1, Y = R[V];
        if (Y && (!(c === "alignment" ? y !== De(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        F.every((N) => N.overflows[0] > 0 && De(N.placement) === y)))
          return {
            data: {
              index: V,
              overflows: F
            },
            reset: {
              placement: Y
            }
          };
        let A = (I = F.filter((D) => D.overflows[0] <= 0).sort((D, N) => D.overflows[1] - N.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!A)
          switch (g) {
            case "bestFit": {
              var q;
              const D = (q = F.filter((N) => {
                if (M) {
                  const P = De(N.placement);
                  return P === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  P === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((P) => P > 0).reduce((P, L) => P + L, 0)]).sort((N, P) => N[1] - P[1])[0]) == null ? void 0 : q[0];
              D && (A = D);
              break;
            }
            case "initialPlacement":
              A = a;
              break;
          }
        if (o !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
function oo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function io(e) {
  return Za.some((t) => e[t] >= 0);
}
const ul = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Ge(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Bt(t, {
            ...o,
            elementContext: "reference"
          }), s = oo(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: io(s)
            }
          };
        }
        case "escaped": {
          const i = await Bt(t, {
            ...o,
            altBoundary: !0
          }), s = oo(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: io(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Jo = /* @__PURE__ */ new Set(["left", "top"]);
async function dl(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = We(n), a = At(n), u = De(n) === "y", l = Jo.has(s) ? -1 : 1, d = i && u ? -1 : 1, c = Ge(t, e);
  let {
    mainAxis: f,
    crossAxis: g,
    alignmentAxis: b
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: c.mainAxis || 0,
    crossAxis: c.crossAxis || 0,
    alignmentAxis: c.alignmentAxis
  };
  return a && typeof b == "number" && (g = a === "end" ? b * -1 : b), u ? {
    x: g * d,
    y: f * l
  } : {
    x: f * l,
    y: g * d
  };
}
const fl = function(e) {
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
      } = t, u = await dl(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + u.x,
        y: i + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, gl = function(e) {
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
          fn: (v) => {
            let {
              x,
              y
            } = v;
            return {
              x,
              y
            };
          }
        },
        ...u
      } = Ge(e, t), l = {
        x: n,
        y: r
      }, d = await Bt(t, u), c = De(We(o)), f = pr(c);
      let g = l[f], b = l[c];
      if (i) {
        const v = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", y = g + d[v], w = g - d[x];
        g = Yn(y, g, w);
      }
      if (s) {
        const v = c === "y" ? "top" : "left", x = c === "y" ? "bottom" : "right", y = b + d[v], w = b - d[x];
        b = Yn(y, b, w);
      }
      const m = a.fn({
        ...t,
        [f]: g,
        [c]: b
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [f]: i,
            [c]: s
          }
        }
      };
    }
  };
}, pl = function(e) {
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
        mainAxis: u = !0,
        crossAxis: l = !0
      } = Ge(e, t), d = {
        x: n,
        y: r
      }, c = De(o), f = pr(c);
      let g = d[f], b = d[c];
      const m = Ge(a, t), v = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (u) {
        const w = f === "y" ? "height" : "width", S = i.reference[f] - i.floating[w] + v.mainAxis, _ = i.reference[f] + i.reference[w] - v.mainAxis;
        g < S ? g = S : g > _ && (g = _);
      }
      if (l) {
        var x, y;
        const w = f === "y" ? "width" : "height", S = Jo.has(We(o)), _ = i.reference[c] - i.floating[w] + (S && ((x = s.offset) == null ? void 0 : x[c]) || 0) + (S ? 0 : v.crossAxis), M = i.reference[c] + i.reference[w] + (S ? 0 : ((y = s.offset) == null ? void 0 : y[c]) || 0) - (S ? v.crossAxis : 0);
        b < _ ? b = _ : b > M && (b = M);
      }
      return {
        [f]: g,
        [c]: b
      };
    }
  };
}, ml = function(e) {
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
        apply: u = () => {
        },
        ...l
      } = Ge(e, t), d = await Bt(t, l), c = We(o), f = At(o), g = De(o) === "y", {
        width: b,
        height: m
      } = i.floating;
      let v, x;
      c === "top" || c === "bottom" ? (v = c, x = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (x = c, v = f === "end" ? "top" : "bottom");
      const y = m - d.top - d.bottom, w = b - d.left - d.right, S = nt(m - d[v], y), _ = nt(b - d[x], w), M = !t.middlewareData.shift;
      let R = S, E = _;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = w), (r = t.middlewareData.shift) != null && r.enabled.y && (R = y), M && !f) {
        const F = we(d.left, 0), B = we(d.right, 0), I = we(d.top, 0), q = we(d.bottom, 0);
        g ? E = b - 2 * (F !== 0 || B !== 0 ? F + B : we(d.left, d.right)) : R = m - 2 * (I !== 0 || q !== 0 ? I + q : we(d.top, d.bottom));
      }
      await u({
        ...t,
        availableWidth: E,
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
function yn() {
  return typeof window < "u";
}
function Nt(e) {
  return ei(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Le(e) {
  var t;
  return (t = (ei(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ei(e) {
  return yn() ? e instanceof Node || e instanceof Se(e).Node : !1;
}
function Ne(e) {
  return yn() ? e instanceof Element || e instanceof Se(e).Element : !1;
}
function Ve(e) {
  return yn() ? e instanceof HTMLElement || e instanceof Se(e).HTMLElement : !1;
}
function so(e) {
  return !yn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Se(e).ShadowRoot;
}
const hl = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ht(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ke(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !hl.has(o);
}
const bl = /* @__PURE__ */ new Set(["table", "td", "th"]);
function vl(e) {
  return bl.has(Nt(e));
}
const xl = [":popover-open", ":modal"];
function wn(e) {
  return xl.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const yl = ["transform", "translate", "scale", "rotate", "perspective"], wl = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Cl = ["paint", "layout", "strict", "content"];
function br(e) {
  const t = vr(), n = Ne(e) ? ke(e) : e;
  return yl.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || wl.some((r) => (n.willChange || "").includes(r)) || Cl.some((r) => (n.contain || "").includes(r));
}
function Sl(e) {
  let t = rt(e);
  for (; Ve(t) && !Et(t); ) {
    if (br(t))
      return t;
    if (wn(t))
      return null;
    t = rt(t);
  }
  return null;
}
function vr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const _l = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Et(e) {
  return _l.has(Nt(e));
}
function ke(e) {
  return Se(e).getComputedStyle(e);
}
function Cn(e) {
  return Ne(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function rt(e) {
  if (Nt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    so(e) && e.host || // Fallback.
    Le(e)
  );
  return so(t) ? t.host : t;
}
function ti(e) {
  const t = rt(e);
  return Et(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ve(t) && Ht(t) ? t : ti(t);
}
function zt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ti(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Se(o);
  if (i) {
    const a = Kn(s);
    return t.concat(s, s.visualViewport || [], Ht(o) ? o : [], a && n ? zt(a) : []);
  }
  return t.concat(o, zt(o, [], n));
}
function Kn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ni(e) {
  const t = ke(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ve(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = pn(n) !== i || pn(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function xr(e) {
  return Ne(e) ? e : e.contextElement;
}
function St(e) {
  const t = xr(e);
  if (!Ve(t))
    return Te(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ni(t);
  let s = (i ? pn(n.width) : n.width) / r, a = (i ? pn(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Rl = /* @__PURE__ */ Te(0);
function ri(e) {
  const t = Se(e);
  return !vr() || !t.visualViewport ? Rl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function El(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Se(e) ? !1 : t;
}
function pt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = xr(e);
  let s = Te(1);
  t && (r ? Ne(r) && (s = St(r)) : s = St(e));
  const a = El(i, n, r) ? ri(i) : Te(0);
  let u = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, d = o.width / s.x, c = o.height / s.y;
  if (i) {
    const f = Se(i), g = r && Ne(r) ? Se(r) : r;
    let b = f, m = Kn(b);
    for (; m && r && g !== b; ) {
      const v = St(m), x = m.getBoundingClientRect(), y = ke(m), w = x.left + (m.clientLeft + parseFloat(y.paddingLeft)) * v.x, S = x.top + (m.clientTop + parseFloat(y.paddingTop)) * v.y;
      u *= v.x, l *= v.y, d *= v.x, c *= v.y, u += w, l += S, b = Se(m), m = Kn(b);
    }
  }
  return hn({
    width: d,
    height: c,
    x: u,
    y: l
  });
}
function yr(e, t) {
  const n = Cn(e).scrollLeft;
  return t ? t.left + n : pt(Le(e)).left + n;
}
function oi(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    yr(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Pl(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Le(r), a = t ? wn(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Te(1);
  const d = Te(0), c = Ve(r);
  if ((c || !c && !i) && ((Nt(r) !== "body" || Ht(s)) && (u = Cn(r)), Ve(r))) {
    const g = pt(r);
    l = St(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !c && !i ? oi(s, u, !0) : Te(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - u.scrollLeft * l.x + d.x + f.x,
    y: n.y * l.y - u.scrollTop * l.y + d.y + f.y
  };
}
function Ml(e) {
  return Array.from(e.getClientRects());
}
function Al(e) {
  const t = Le(e), n = Cn(e), r = e.ownerDocument.body, o = we(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = we(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + yr(e);
  const a = -n.scrollTop;
  return ke(r).direction === "rtl" && (s += we(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function Nl(e, t) {
  const n = Se(e), r = Le(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, u = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = vr();
    (!l || l && t === "fixed") && (a = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: u
  };
}
const kl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Il(e, t) {
  const n = pt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ve(e) ? St(e) : Te(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, u = o * i.x, l = r * i.y;
  return {
    width: s,
    height: a,
    x: u,
    y: l
  };
}
function ao(e, t, n) {
  let r;
  if (t === "viewport")
    r = Nl(e, n);
  else if (t === "document")
    r = Al(Le(e));
  else if (Ne(t))
    r = Il(t, n);
  else {
    const o = ri(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return hn(r);
}
function ii(e, t) {
  const n = rt(e);
  return n === t || !Ne(n) || Et(n) ? !1 : ke(n).position === "fixed" || ii(n, t);
}
function $l(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = zt(e, [], !1).filter((a) => Ne(a) && Nt(a) !== "body"), o = null;
  const i = ke(e).position === "fixed";
  let s = i ? rt(e) : e;
  for (; Ne(s) && !Et(s); ) {
    const a = ke(s), u = br(s);
    !u && a.position === "fixed" && (o = null), (i ? !u && !o : !u && a.position === "static" && !!o && kl.has(o.position) || Ht(s) && !u && ii(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = rt(s);
  }
  return t.set(e, r), r;
}
function Fl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? wn(t) ? [] : $l(t, this._c) : [].concat(n), r], a = s[0], u = s.reduce((l, d) => {
    const c = ao(t, d, o);
    return l.top = we(c.top, l.top), l.right = nt(c.right, l.right), l.bottom = nt(c.bottom, l.bottom), l.left = we(c.left, l.left), l;
  }, ao(t, a, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Ol(e) {
  const {
    width: t,
    height: n
  } = ni(e);
  return {
    width: t,
    height: n
  };
}
function Dl(e, t, n) {
  const r = Ve(t), o = Le(t), i = n === "fixed", s = pt(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Te(0);
  function l() {
    u.x = yr(o);
  }
  if (r || !r && !i)
    if ((Nt(t) !== "body" || Ht(o)) && (a = Cn(t)), r) {
      const g = pt(t, !0, i, t);
      u.x = g.x + t.clientLeft, u.y = g.y + t.clientTop;
    } else o && l();
  i && !r && o && l();
  const d = o && !r && !i ? oi(o, a) : Te(0), c = s.left + a.scrollLeft - u.x - d.x, f = s.top + a.scrollTop - u.y - d.y;
  return {
    x: c,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Fn(e) {
  return ke(e).position === "static";
}
function lo(e, t) {
  if (!Ve(e) || ke(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Le(e) === n && (n = n.ownerDocument.body), n;
}
function si(e, t) {
  const n = Se(e);
  if (wn(e))
    return n;
  if (!Ve(e)) {
    let o = rt(e);
    for (; o && !Et(o); ) {
      if (Ne(o) && !Fn(o))
        return o;
      o = rt(o);
    }
    return n;
  }
  let r = lo(e, t);
  for (; r && vl(r) && Fn(r); )
    r = lo(r, t);
  return r && Et(r) && Fn(r) && !br(r) ? n : r || Sl(e) || n;
}
const Tl = async function(e) {
  const t = this.getOffsetParent || si, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Dl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Vl(e) {
  return ke(e).direction === "rtl";
}
const Ll = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Pl,
  getDocumentElement: Le,
  getClippingRect: Fl,
  getOffsetParent: si,
  getElementRects: Tl,
  getClientRects: Ml,
  getDimensions: Ol,
  getScale: St,
  isElement: Ne,
  isRTL: Vl
};
function ai(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Bl(e, t) {
  let n = null, r;
  const o = Le(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, u) {
    a === void 0 && (a = !1), u === void 0 && (u = 1), i();
    const l = e.getBoundingClientRect(), {
      left: d,
      top: c,
      width: f,
      height: g
    } = l;
    if (a || t(), !f || !g)
      return;
    const b = Jt(c), m = Jt(o.clientWidth - (d + f)), v = Jt(o.clientHeight - (c + g)), x = Jt(d), w = {
      rootMargin: -b + "px " + -m + "px " + -v + "px " + -x + "px",
      threshold: we(0, nt(1, u)) || 1
    };
    let S = !0;
    function _(M) {
      const R = M[0].intersectionRatio;
      if (R !== u) {
        if (!S)
          return s();
        R ? s(!1, R) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !ai(l, e.getBoundingClientRect()) && s(), S = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, w);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function zl(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, l = xr(e), d = o || i ? [...l ? zt(l) : [], ...zt(t)] : [];
  d.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), i && x.addEventListener("resize", n);
  });
  const c = l && a ? Bl(l, n) : null;
  let f = -1, g = null;
  s && (g = new ResizeObserver((x) => {
    let [y] = x;
    y && y.target === l && g && (g.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var w;
      (w = g) == null || w.observe(t);
    })), n();
  }), l && !u && g.observe(l), g.observe(t));
  let b, m = u ? pt(e) : null;
  u && v();
  function v() {
    const x = pt(e);
    m && !ai(m, x) && n(), m = x, b = requestAnimationFrame(v);
  }
  return n(), () => {
    var x;
    d.forEach((y) => {
      o && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n);
    }), c == null || c(), (x = g) == null || x.disconnect(), g = null, u && cancelAnimationFrame(b);
  };
}
const Hl = fl, jl = gl, Gl = cl, Wl = ml, Ul = ul, co = ll, ql = pl, Xl = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ll,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return al(e, t, {
    ...o,
    platform: i
  });
};
var Yl = typeof document < "u", Zl = function() {
}, dn = Yl ? As : Zl;
function bn(e, t) {
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
        if (!bn(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !bn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function li(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function uo(e, t) {
  const n = li(e);
  return Math.round(t * n) / n;
}
function On(e) {
  const t = p.useRef(e);
  return dn(() => {
    t.current = e;
  }), t;
}
function Kl(e) {
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
    whileElementsMounted: u,
    open: l
  } = e, [d, c] = p.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, g] = p.useState(r);
  bn(f, r) || g(r);
  const [b, m] = p.useState(null), [v, x] = p.useState(null), y = p.useCallback((N) => {
    N !== M.current && (M.current = N, m(N));
  }, []), w = p.useCallback((N) => {
    N !== R.current && (R.current = N, x(N));
  }, []), S = i || b, _ = s || v, M = p.useRef(null), R = p.useRef(null), E = p.useRef(d), O = u != null, F = On(u), B = On(o), I = On(l), q = p.useCallback(() => {
    if (!M.current || !R.current)
      return;
    const N = {
      placement: t,
      strategy: n,
      middleware: f
    };
    B.current && (N.platform = B.current), Xl(M.current, R.current, N).then((P) => {
      const L = {
        ...P,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: I.current !== !1
      };
      V.current && !bn(E.current, L) && (E.current = L, Mo.flushSync(() => {
        c(L);
      }));
    });
  }, [f, t, n, B, I]);
  dn(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, c((N) => ({
      ...N,
      isPositioned: !1
    })));
  }, [l]);
  const V = p.useRef(!1);
  dn(() => (V.current = !0, () => {
    V.current = !1;
  }), []), dn(() => {
    if (S && (M.current = S), _ && (R.current = _), S && _) {
      if (F.current)
        return F.current(S, _, q);
      q();
    }
  }, [S, _, q, F, O]);
  const Y = p.useMemo(() => ({
    reference: M,
    floating: R,
    setReference: y,
    setFloating: w
  }), [y, w]), A = p.useMemo(() => ({
    reference: S,
    floating: _
  }), [S, _]), D = p.useMemo(() => {
    const N = {
      position: n,
      left: 0,
      top: 0
    };
    if (!A.floating)
      return N;
    const P = uo(A.floating, d.x), L = uo(A.floating, d.y);
    return a ? {
      ...N,
      transform: "translate(" + P + "px, " + L + "px)",
      ...li(A.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: P,
      top: L
    };
  }, [n, a, A.floating, d.x, d.y]);
  return p.useMemo(() => ({
    ...d,
    update: q,
    refs: Y,
    elements: A,
    floatingStyles: D
  }), [d, q, Y, A, D]);
}
const Ql = (e) => {
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
      return r && t(r) ? r.current != null ? co({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? co({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Jl = (e, t) => ({
  ...Hl(e),
  options: [e, t]
}), ec = (e, t) => ({
  ...jl(e),
  options: [e, t]
}), tc = (e, t) => ({
  ...ql(e),
  options: [e, t]
}), nc = (e, t) => ({
  ...Gl(e),
  options: [e, t]
}), rc = (e, t) => ({
  ...Wl(e),
  options: [e, t]
}), oc = (e, t) => ({
  ...Ul(e),
  options: [e, t]
}), ic = (e, t) => ({
  ...Ql(e),
  options: [e, t]
});
var sc = "Arrow", ci = p.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ h(
    be.svg,
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
ci.displayName = sc;
var ac = ci;
function lc(e) {
  const [t, n] = p.useState(void 0);
  return tt(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const u = i.borderBoxSize, l = Array.isArray(u) ? u[0] : u;
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
var wr = "Popper", [ui, di] = dr(wr), [cc, fi] = ui(wr), gi = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = p.useState(null);
  return /* @__PURE__ */ h(cc, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
gi.displayName = wr;
var pi = "PopperAnchor", mi = p.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = fi(pi, n), s = p.useRef(null), a = Ie(t, s);
    return p.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
    }), r ? null : /* @__PURE__ */ h(be.div, { ...o, ref: a });
  }
);
mi.displayName = pi;
var Cr = "PopperContent", [uc, dc] = ui(Cr), hi = p.forwardRef(
  (e, t) => {
    var te, se, ge, pe, Q, me;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: u = !0,
      collisionBoundary: l = [],
      collisionPadding: d = 0,
      sticky: c = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: b,
      ...m
    } = e, v = fi(Cr, n), [x, y] = p.useState(null), w = Ie(t, (ve) => y(ve)), [S, _] = p.useState(null), M = lc(S), R = (M == null ? void 0 : M.width) ?? 0, E = (M == null ? void 0 : M.height) ?? 0, O = r + (i !== "center" ? "-" + i : ""), F = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, B = Array.isArray(l) ? l : [l], I = B.length > 0, q = {
      padding: F,
      boundary: B.filter(gc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: I
    }, { refs: V, floatingStyles: Y, placement: A, isPositioned: D, middlewareData: N } = Kl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: (...ve) => zl(...ve, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        Jl({ mainAxis: o + E, alignmentAxis: s }),
        u && ec({
          mainAxis: !0,
          crossAxis: !1,
          limiter: c === "partial" ? tc() : void 0,
          ...q
        }),
        u && nc({ ...q }),
        rc({
          ...q,
          apply: ({ elements: ve, rects: xe, availableWidth: Gt, availableHeight: Ue }) => {
            const { width: Ee, height: ht } = xe.reference, ue = ve.floating.style;
            ue.setProperty("--radix-popper-available-width", `${Gt}px`), ue.setProperty("--radix-popper-available-height", `${Ue}px`), ue.setProperty("--radix-popper-anchor-width", `${Ee}px`), ue.setProperty("--radix-popper-anchor-height", `${ht}px`);
          }
        }),
        S && ic({ element: S, padding: a }),
        pc({ arrowWidth: R, arrowHeight: E }),
        f && oc({ strategy: "referenceHidden", ...q })
      ]
    }), [P, L] = xi(A), k = Rt(b);
    tt(() => {
      D && (k == null || k());
    }, [D, k]);
    const j = (te = N.arrow) == null ? void 0 : te.x, W = (se = N.arrow) == null ? void 0 : se.y, Z = ((ge = N.arrow) == null ? void 0 : ge.centerOffset) !== 0, [re, X] = p.useState();
    return tt(() => {
      x && X(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ h(
      "div",
      {
        ref: V.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: D ? Y.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: re,
          "--radix-popper-transform-origin": [
            (pe = N.transformOrigin) == null ? void 0 : pe.x,
            (Q = N.transformOrigin) == null ? void 0 : Q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((me = N.hide) == null ? void 0 : me.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ h(
          uc,
          {
            scope: n,
            placedSide: P,
            onArrowChange: _,
            arrowX: j,
            arrowY: W,
            shouldHideArrow: Z,
            children: /* @__PURE__ */ h(
              be.div,
              {
                "data-side": P,
                "data-align": L,
                ...m,
                ref: w,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: D ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
hi.displayName = Cr;
var bi = "PopperArrow", fc = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, vi = p.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = dc(bi, r), s = fc[i.placedSide];
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
          ac,
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
vi.displayName = bi;
function gc(e) {
  return e !== null;
}
var pc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, x, y;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((v = o.arrow) == null ? void 0 : v.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [l, d] = xi(n), c = { start: "0%", center: "50%", end: "100%" }[d], f = (((x = o.arrow) == null ? void 0 : x.x) ?? 0) + a / 2, g = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + u / 2;
    let b = "", m = "";
    return l === "bottom" ? (b = s ? c : `${f}px`, m = `${-u}px`) : l === "top" ? (b = s ? c : `${f}px`, m = `${r.floating.height + u}px`) : l === "right" ? (b = `${-u}px`, m = s ? c : `${g}px`) : l === "left" && (b = `${r.floating.width + u}px`, m = s ? c : `${g}px`), { data: { x: b, y: m } };
  }
});
function xi(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var mc = gi, yi = mi, hc = hi, bc = vi, vc = "Portal", Sr = p.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, i] = p.useState(!1);
  tt(() => i(!0), []);
  const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? Ao.createPortal(/* @__PURE__ */ h(be.div, { ...r, ref: t }), s) : null;
});
Sr.displayName = vc;
function xc(e, t) {
  return p.useReducer((n, r) => t[n][r] ?? n, e);
}
var kt = (e) => {
  const { present: t, children: n } = e, r = yc(t), o = typeof n == "function" ? n({ present: r.isPresent }) : p.Children.only(n), i = Ie(r.ref, wc(o));
  return typeof n == "function" || r.isPresent ? p.cloneElement(o, { ref: i }) : null;
};
kt.displayName = "Presence";
function yc(e) {
  const [t, n] = p.useState(), r = p.useRef(null), o = p.useRef(e), i = p.useRef("none"), s = e ? "mounted" : "unmounted", [a, u] = xc(s, {
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
  return p.useEffect(() => {
    const l = en(r.current);
    i.current = a === "mounted" ? l : "none";
  }, [a]), tt(() => {
    const l = r.current, d = o.current;
    if (d !== e) {
      const f = i.current, g = en(l);
      e ? u("MOUNT") : g === "none" || (l == null ? void 0 : l.display) === "none" ? u("UNMOUNT") : u(d && f !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), tt(() => {
    if (t) {
      let l;
      const d = t.ownerDocument.defaultView ?? window, c = (g) => {
        const m = en(r.current).includes(g.animationName);
        if (g.target === t && m && (u("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, f = (g) => {
        g.target === t && (i.current = en(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", c), t.addEventListener("animationend", c), () => {
        d.clearTimeout(l), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: p.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, n(l);
    }, [])
  };
}
function en(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function wc(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Cc = p[" useInsertionEffect ".trim().toString()] || tt;
function wi({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = Sc({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, u = a ? e : o;
  {
    const d = p.useRef(e !== void 0);
    p.useEffect(() => {
      const c = d.current;
      c !== a && console.warn(
        `${r} is changing from ${c ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = a;
    }, [a, r]);
  }
  const l = p.useCallback(
    (d) => {
      var c;
      if (a) {
        const f = _c(d) ? d(e) : d;
        f !== e && ((c = s.current) == null || c.call(s, f));
      } else
        i(d);
    },
    [a, e, i, s]
  );
  return [u, l];
}
function Sc({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = p.useState(e), o = p.useRef(n), i = p.useRef(t);
  return Cc(() => {
    i.current = t;
  }, [t]), p.useEffect(() => {
    var s;
    o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function _c(e) {
  return typeof e == "function";
}
var Rc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, vt = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ new WeakMap(), nn = {}, Dn = 0, Ci = function(e) {
  return e && (e.host || Ci(e.parentNode));
}, Ec = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ci(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Pc = function(e, t, n, r) {
  var o = Ec(t, Array.isArray(e) ? e : [e]);
  nn[n] || (nn[n] = /* @__PURE__ */ new WeakMap());
  var i = nn[n], s = [], a = /* @__PURE__ */ new Set(), u = new Set(o), l = function(c) {
    !c || a.has(c) || (a.add(c), l(c.parentNode));
  };
  o.forEach(l);
  var d = function(c) {
    !c || u.has(c) || Array.prototype.forEach.call(c.children, function(f) {
      if (a.has(f))
        d(f);
      else
        try {
          var g = f.getAttribute(r), b = g !== null && g !== "false", m = (vt.get(f) || 0) + 1, v = (i.get(f) || 0) + 1;
          vt.set(f, m), i.set(f, v), s.push(f), m === 1 && b && tn.set(f, !0), v === 1 && f.setAttribute(n, "true"), b || f.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", f, x);
        }
    });
  };
  return d(t), a.clear(), Dn++, function() {
    s.forEach(function(c) {
      var f = vt.get(c) - 1, g = i.get(c) - 1;
      vt.set(c, f), i.set(c, g), f || (tn.has(c) || c.removeAttribute(r), tn.delete(c)), g || c.removeAttribute(n);
    }), Dn--, Dn || (vt = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ new WeakMap(), nn = {});
  };
}, Si = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Rc(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Pc(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Oe = function() {
  return Oe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Oe.apply(this, arguments);
};
function _i(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Mc(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var fn = "right-scroll-bar-position", gn = "width-before-scroll-bar", Ac = "with-scroll-bars-hidden", Nc = "--removed-body-scroll-bar-size";
function Tn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function kc(e, t) {
  var n = Ns(function() {
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
var Ic = typeof window < "u" ? p.useLayoutEffect : p.useEffect, fo = /* @__PURE__ */ new WeakMap();
function $c(e, t) {
  var n = kc(null, function(r) {
    return e.forEach(function(o) {
      return Tn(o, r);
    });
  });
  return Ic(function() {
    var r = fo.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || Tn(a, null);
      }), i.forEach(function(a) {
        o.has(a) || Tn(a, s);
      });
    }
    fo.set(n, e);
  }, [e]), n;
}
function Fc(e) {
  return e;
}
function Oc(e, t) {
  t === void 0 && (t = Fc);
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
      var u = function() {
        var d = s;
        s = [], d.forEach(i);
      }, l = function() {
        return Promise.resolve().then(u);
      };
      l(), n = {
        push: function(d) {
          s.push(d), l();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return o;
}
function Dc(e) {
  e === void 0 && (e = {});
  var t = Oc(null);
  return t.options = Oe({ async: !0, ssr: !1 }, e), t;
}
var Ri = function(e) {
  var t = e.sideCar, n = _i(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return p.createElement(r, Oe({}, n));
};
Ri.isSideCarExport = !0;
function Tc(e, t) {
  return e.useMedium(t), Ri;
}
var Ei = Dc(), Vn = function() {
}, Sn = p.forwardRef(function(e, t) {
  var n = p.useRef(null), r = p.useState({
    onScrollCapture: Vn,
    onWheelCapture: Vn,
    onTouchMoveCapture: Vn
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, u = e.className, l = e.removeScrollBar, d = e.enabled, c = e.shards, f = e.sideCar, g = e.noRelative, b = e.noIsolation, m = e.inert, v = e.allowPinchZoom, x = e.as, y = x === void 0 ? "div" : x, w = e.gapMode, S = _i(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = f, M = $c([n, t]), R = Oe(Oe({}, S), o);
  return p.createElement(
    p.Fragment,
    null,
    d && p.createElement(_, { sideCar: Ei, removeScrollBar: l, shards: c, noRelative: g, noIsolation: b, inert: m, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: w }),
    s ? p.cloneElement(p.Children.only(a), Oe(Oe({}, R), { ref: M })) : p.createElement(y, Oe({}, R, { className: u, ref: M }), a)
  );
});
Sn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Sn.classNames = {
  fullWidth: gn,
  zeroRight: fn
};
var Vc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Lc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Vc();
  return t && e.setAttribute("nonce", t), e;
}
function Bc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function zc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Hc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Lc()) && (Bc(t, n), zc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, jc = function() {
  var e = Hc();
  return function(t, n) {
    p.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Pi = function() {
  var e = jc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Gc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ln = function(e) {
  return parseInt(e || "", 10) || 0;
}, Wc = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ln(n), Ln(r), Ln(o)];
}, Uc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Gc;
  var t = Wc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, qc = Pi(), _t = "data-scroll-locked", Xc = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Ac, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(_t, `] {
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
  
  .`).concat(fn, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(gn, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(fn, " .").concat(fn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(gn, " .").concat(gn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(_t, `] {
    `).concat(Nc, ": ").concat(a, `px;
  }
`);
}, go = function() {
  var e = parseInt(document.body.getAttribute(_t) || "0", 10);
  return isFinite(e) ? e : 0;
}, Yc = function() {
  p.useEffect(function() {
    return document.body.setAttribute(_t, (go() + 1).toString()), function() {
      var e = go() - 1;
      e <= 0 ? document.body.removeAttribute(_t) : document.body.setAttribute(_t, e.toString());
    };
  }, []);
}, Zc = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Yc();
  var i = p.useMemo(function() {
    return Uc(o);
  }, [o]);
  return p.createElement(qc, { styles: Xc(i, !t, o, n ? "" : "!important") });
}, Qn = !1;
if (typeof window < "u")
  try {
    var rn = Object.defineProperty({}, "passive", {
      get: function() {
        return Qn = !0, !0;
      }
    });
    window.addEventListener("test", rn, rn), window.removeEventListener("test", rn, rn);
  } catch {
    Qn = !1;
  }
var xt = Qn ? { passive: !1 } : !1, Kc = function(e) {
  return e.tagName === "TEXTAREA";
}, Mi = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Kc(e) && n[t] === "visible")
  );
}, Qc = function(e) {
  return Mi(e, "overflowY");
}, Jc = function(e) {
  return Mi(e, "overflowX");
}, po = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ai(e, r);
    if (o) {
      var i = Ni(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, eu = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, tu = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ai = function(e, t) {
  return e === "v" ? Qc(t) : Jc(t);
}, Ni = function(e, t) {
  return e === "v" ? eu(t) : tu(t);
}, nu = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ru = function(e, t, n, r, o) {
  var i = nu(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, u = t.contains(a), l = !1, d = s > 0, c = 0, f = 0;
  do {
    if (!a)
      break;
    var g = Ni(e, a), b = g[0], m = g[1], v = g[2], x = m - v - i * b;
    (b || x) && Ai(e, a) && (c += x, f += b);
    var y = a.parentNode;
    a = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !u && a !== document.body || // self content
    u && (t.contains(a) || t === a)
  );
  return (d && Math.abs(c) < 1 || !d && Math.abs(f) < 1) && (l = !0), l;
}, on = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, mo = function(e) {
  return [e.deltaX, e.deltaY];
}, ho = function(e) {
  return e && "current" in e ? e.current : e;
}, ou = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, iu = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, su = 0, yt = [];
function au(e) {
  var t = p.useRef([]), n = p.useRef([0, 0]), r = p.useRef(), o = p.useState(su++)[0], i = p.useState(Pi)[0], s = p.useRef(e);
  p.useEffect(function() {
    s.current = e;
  }, [e]), p.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = Mc([e.lockRef.current], (e.shards || []).map(ho), !0).filter(Boolean);
      return m.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = p.useCallback(function(m, v) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !s.current.allowPinchZoom;
    var x = on(m), y = n.current, w = "deltaX" in m ? m.deltaX : y[0] - x[0], S = "deltaY" in m ? m.deltaY : y[1] - x[1], _, M = m.target, R = Math.abs(w) > Math.abs(S) ? "h" : "v";
    if ("touches" in m && R === "h" && M.type === "range")
      return !1;
    var E = po(R, M);
    if (!E)
      return !0;
    if (E ? _ = R : (_ = R === "v" ? "h" : "v", E = po(R, M)), !E)
      return !1;
    if (!r.current && "changedTouches" in m && (w || S) && (r.current = _), !_)
      return !0;
    var O = r.current || _;
    return ru(O, v, m, O === "h" ? w : S);
  }, []), u = p.useCallback(function(m) {
    var v = m;
    if (!(!yt.length || yt[yt.length - 1] !== i)) {
      var x = "deltaY" in v ? mo(v) : on(v), y = t.current.filter(function(_) {
        return _.name === v.type && (_.target === v.target || v.target === _.shadowParent) && ou(_.delta, x);
      })[0];
      if (y && y.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!y) {
        var w = (s.current.shards || []).map(ho).filter(Boolean).filter(function(_) {
          return _.contains(v.target);
        }), S = w.length > 0 ? a(v, w[0]) : !s.current.noIsolation;
        S && v.cancelable && v.preventDefault();
      }
    }
  }, []), l = p.useCallback(function(m, v, x, y) {
    var w = { name: m, delta: v, target: x, should: y, shadowParent: lu(x) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== w;
      });
    }, 1);
  }, []), d = p.useCallback(function(m) {
    n.current = on(m), r.current = void 0;
  }, []), c = p.useCallback(function(m) {
    l(m.type, mo(m), m.target, a(m, e.lockRef.current));
  }, []), f = p.useCallback(function(m) {
    l(m.type, on(m), m.target, a(m, e.lockRef.current));
  }, []);
  p.useEffect(function() {
    return yt.push(i), e.setCallbacks({
      onScrollCapture: c,
      onWheelCapture: c,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", u, xt), document.addEventListener("touchmove", u, xt), document.addEventListener("touchstart", d, xt), function() {
      yt = yt.filter(function(m) {
        return m !== i;
      }), document.removeEventListener("wheel", u, xt), document.removeEventListener("touchmove", u, xt), document.removeEventListener("touchstart", d, xt);
    };
  }, []);
  var g = e.removeScrollBar, b = e.inert;
  return p.createElement(
    p.Fragment,
    null,
    b ? p.createElement(i, { styles: iu(o) }) : null,
    g ? p.createElement(Zc, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function lu(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const cu = Tc(Ei, au);
var _r = p.forwardRef(function(e, t) {
  return p.createElement(Sn, Oe({}, e, { ref: t, sideCar: cu }));
});
_r.classNames = Sn.classNames;
var _n = "Popover", [ki, qf] = dr(_n, [
  di
]), jt = di(), [uu, it] = ki(_n), Ii = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !1
  } = e, a = jt(t), u = p.useRef(null), [l, d] = p.useState(!1), [c, f] = wi({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: _n
  });
  return /* @__PURE__ */ h(mc, { ...a, children: /* @__PURE__ */ h(
    uu,
    {
      scope: t,
      contentId: un(),
      triggerRef: u,
      open: c,
      onOpenChange: f,
      onOpenToggle: p.useCallback(() => f((g) => !g), [f]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: p.useCallback(() => d(!0), []),
      onCustomAnchorRemove: p.useCallback(() => d(!1), []),
      modal: s,
      children: n
    }
  ) });
};
Ii.displayName = _n;
var $i = "PopoverAnchor", du = p.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = it($i, n), i = jt(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = o;
    return p.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ h(yi, { ...i, ...r, ref: t });
  }
);
du.displayName = $i;
var Fi = "PopoverTrigger", Oi = p.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = it(Fi, n), i = jt(n), s = Ie(t, o.triggerRef), a = /* @__PURE__ */ h(
      be.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Bi(o.open),
        ...r,
        ref: s,
        onClick: Ce(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ h(yi, { asChild: !0, ...i, children: a });
  }
);
Oi.displayName = Fi;
var Rr = "PopoverPortal", [fu, gu] = ki(Rr, {
  forceMount: void 0
}), Di = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = it(Rr, t);
  return /* @__PURE__ */ h(fu, { scope: t, forceMount: n, children: /* @__PURE__ */ h(kt, { present: n || i.open, children: /* @__PURE__ */ h(Sr, { asChild: !0, container: o, children: r }) }) });
};
Di.displayName = Rr;
var Pt = "PopoverContent", Ti = p.forwardRef(
  (e, t) => {
    const n = gu(Pt, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = it(Pt, e.__scopePopover);
    return /* @__PURE__ */ h(kt, { present: r || i.open, children: i.modal ? /* @__PURE__ */ h(mu, { ...o, ref: t }) : /* @__PURE__ */ h(hu, { ...o, ref: t }) });
  }
);
Ti.displayName = Pt;
var pu = /* @__PURE__ */ xn("PopoverContent.RemoveScroll"), mu = p.forwardRef(
  (e, t) => {
    const n = it(Pt, e.__scopePopover), r = p.useRef(null), o = Ie(t, r), i = p.useRef(!1);
    return p.useEffect(() => {
      const s = r.current;
      if (s) return Si(s);
    }, []), /* @__PURE__ */ h(_r, { as: pu, allowPinchZoom: !0, children: /* @__PURE__ */ h(
      Vi,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ce(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), i.current || (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: Ce(
          e.onPointerDownOutside,
          (s) => {
            const a = s.detail.originalEvent, u = a.button === 0 && a.ctrlKey === !0, l = a.button === 2 || u;
            i.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Ce(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), hu = p.forwardRef(
  (e, t) => {
    const n = it(Pt, e.__scopePopover), r = p.useRef(!1), o = p.useRef(!1);
    return /* @__PURE__ */ h(
      Vi,
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
          var u, l;
          (u = e.onInteractOutside) == null || u.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((l = n.triggerRef.current) == null ? void 0 : l.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), Vi = p.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: u,
      onFocusOutside: l,
      onInteractOutside: d,
      ...c
    } = e, f = it(Pt, n), g = jt(n);
    return Zo(), /* @__PURE__ */ h(
      gr,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ h(
          fr,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: d,
            onEscapeKeyDown: a,
            onPointerDownOutside: u,
            onFocusOutside: l,
            onDismiss: () => f.onOpenChange(!1),
            children: /* @__PURE__ */ h(
              hc,
              {
                "data-state": Bi(f.open),
                role: "dialog",
                id: f.contentId,
                ...g,
                ...c,
                ref: t,
                style: {
                  ...c.style,
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
), Li = "PopoverClose", bu = p.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = it(Li, n);
    return /* @__PURE__ */ h(
      be.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Ce(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
bu.displayName = Li;
var vu = "PopoverArrow", xu = p.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = jt(n);
    return /* @__PURE__ */ h(bc, { ...o, ...r, ref: t });
  }
);
xu.displayName = vu;
function Bi(e) {
  return e ? "open" : "closed";
}
var yu = Ii, wu = Oi, Cu = Di, Su = Ti;
const _u = J(
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
), Ru = (e) => {
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
}, Eu = (e) => {
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
}, Er = p.forwardRef(
  ({
    children: e,
    preferredPosition: t = "below",
    preferredAlignment: n = "center",
    active: r,
    activator: o,
    preferInputActivator: i = !0,
    activatorWrapper: s = "div",
    zIndexOverride: a = 400,
    preventFocusOnClose: u = !1,
    sectioned: l = !1,
    fullWidth: d = !1,
    fullHeight: c = !1,
    fluidContent: f = !1,
    fixed: g = !1,
    ariaHaspopup: b,
    hideOnPrint: m = !1,
    onClose: v,
    autofocusTarget: x = "container",
    preventCloseOnChildOverlayClick: y = !1,
    captureOverscroll: w = !1,
    className: S,
    ..._
  }, M) => {
    const R = (V) => {
      V || v("click-outside");
    }, E = () => {
      v("escape");
    }, O = (V) => {
      y || v("click-outside");
    }, F = T(
      _u({
        sectioned: l,
        fullWidth: d,
        fullHeight: c,
        fluidContent: f,
        hideOnPrint: m
      }),
      S
    ), B = Ru(t), I = Eu(n);
    return /* @__PURE__ */ $(yu, { open: r, onOpenChange: R, children: [
      /* @__PURE__ */ h(wu, { asChild: !0, children: /* @__PURE__ */ h(s, { children: o }) }),
      /* @__PURE__ */ h(Cu, { children: /* @__PURE__ */ h(
        Su,
        {
          ref: M,
          side: B,
          align: I,
          className: F,
          style: { zIndex: a },
          onEscapeKeyDown: E,
          onInteractOutside: O,
          ..._,
          children: l ? /* @__PURE__ */ h("div", { className: "p-4", children: e }) : e
        }
      ) })
    ] });
  }
);
Er.displayName = "Popover";
const Pu = J("space-y-1", {
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
}), Mu = J(
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
), zi = p.forwardRef(
  ({
    title: e,
    choices: t,
    selected: n,
    name: r = "choiceList",
    allowMultiple: o = !1,
    titleHidden: i = !1,
    error: s,
    disabled: a = !1,
    onChange: u,
    tone: l,
    className: d,
    ...c
  }, f) => {
    const g = (v, x) => {
      if (a) return;
      let y;
      o ? x ? y = [...n, v] : y = n.filter((w) => w !== v) : y = x ? [v] : [], u && u(y, r);
    }, b = () => {
      a || u && u([], r);
    }, m = T(
      Pu({
        tone: l === "magic" ? "magic" : "default",
        disabled: a
      }),
      d
    );
    return /* @__PURE__ */ $(
      "fieldset",
      {
        ref: f,
        className: m,
        disabled: a,
        ...c,
        children: [
          !i && /* @__PURE__ */ h("legend", { className: "text-sm font-medium text-gray-900 mb-3", children: e }),
          /* @__PURE__ */ h(et, { children: t.map((v, x) => {
            const y = n.includes(v.value), w = `${r}-${v.value}-${x}`, S = o ? "checkbox" : "radio";
            return /* @__PURE__ */ $(
              "label",
              {
                className: T(
                  Mu({
                    disabled: a || v.disabled,
                    selected: y
                  })
                ),
                children: [
                  /* @__PURE__ */ h(
                    "input",
                    {
                      type: S,
                      id: w,
                      name: o ? `${r}[]` : r,
                      value: v.value,
                      checked: y,
                      disabled: a || v.disabled,
                      onChange: (_) => g(v.value, _.target.checked),
                      className: "mt-0.5 h-4 w-4 text-black rounded accent-black cursor-pointer"
                    }
                  ),
                  /* @__PURE__ */ $("div", { className: "flex-1", children: [
                    /* @__PURE__ */ h(Re, { variant: "bodyMd", as: "span", children: v.label }),
                    v.helpText && /* @__PURE__ */ h(Re, { variant: "bodySm", as: "p", tone: "subdued", children: v.helpText })
                  ] })
                ]
              },
              v.value
            );
          }) }),
          n.length > 0 && /* @__PURE__ */ h(ie, { variant: "plain", onClick: b, disabled: a, children: "Clear" }),
          s && /* @__PURE__ */ h(Re, { variant: "bodySm", tone: "critical", as: "p", className: "mt-2", children: s })
        ]
      }
    );
  }
);
zi.displayName = "ChoiceList";
const Au = (e) => e && {
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
}[e] || "bg-white", Nu = J(
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
), ku = (e) => {
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
}, Iu = p.forwardRef(
  ({
    children: e,
    background: t = "bg-surface",
    padding: n,
    roundedAbove: r = "sm",
    className: o,
    ...i
  }, s) => {
    const a = T(
      Nu({
        roundedAbove: r
      }),
      Au(t),
      ku(n),
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
Iu.displayName = "Card";
var Rn = "Dialog", [Hi, Xf] = dr(Rn), [$u, $e] = Hi(Rn), ji = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, a = p.useRef(null), u = p.useRef(null), [l, d] = wi({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Rn
  });
  return /* @__PURE__ */ h(
    $u,
    {
      scope: t,
      triggerRef: a,
      contentRef: u,
      contentId: un(),
      titleId: un(),
      descriptionId: un(),
      open: l,
      onOpenChange: d,
      onOpenToggle: p.useCallback(() => d((c) => !c), [d]),
      modal: s,
      children: n
    }
  );
};
ji.displayName = Rn;
var Gi = "DialogTrigger", Fu = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = $e(Gi, n), i = Ie(t, o.triggerRef);
    return /* @__PURE__ */ h(
      be.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ar(o.open),
        ...r,
        ref: i,
        onClick: Ce(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Fu.displayName = Gi;
var Pr = "DialogPortal", [Ou, Wi] = Hi(Pr, {
  forceMount: void 0
}), Ui = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = $e(Pr, t);
  return /* @__PURE__ */ h(Ou, { scope: t, forceMount: n, children: p.Children.map(r, (s) => /* @__PURE__ */ h(kt, { present: n || i.open, children: /* @__PURE__ */ h(Sr, { asChild: !0, container: o, children: s }) })) });
};
Ui.displayName = Pr;
var vn = "DialogOverlay", qi = p.forwardRef(
  (e, t) => {
    const n = Wi(vn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = $e(vn, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ h(kt, { present: r || i.open, children: /* @__PURE__ */ h(Tu, { ...o, ref: t }) }) : null;
  }
);
qi.displayName = vn;
var Du = /* @__PURE__ */ xn("DialogOverlay.RemoveScroll"), Tu = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = $e(vn, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ h(_r, { as: Du, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ h(
        be.div,
        {
          "data-state": Ar(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), mt = "DialogContent", Xi = p.forwardRef(
  (e, t) => {
    const n = Wi(mt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = $e(mt, e.__scopeDialog);
    return /* @__PURE__ */ h(kt, { present: r || i.open, children: i.modal ? /* @__PURE__ */ h(Vu, { ...o, ref: t }) : /* @__PURE__ */ h(Lu, { ...o, ref: t }) });
  }
);
Xi.displayName = mt;
var Vu = p.forwardRef(
  (e, t) => {
    const n = $e(mt, e.__scopeDialog), r = p.useRef(null), o = Ie(t, n.contentRef, r);
    return p.useEffect(() => {
      const i = r.current;
      if (i) return Si(i);
    }, []), /* @__PURE__ */ h(
      Yi,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ce(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: Ce(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: Ce(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), Lu = p.forwardRef(
  (e, t) => {
    const n = $e(mt, e.__scopeDialog), r = p.useRef(!1), o = p.useRef(!1);
    return /* @__PURE__ */ h(
      Yi,
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
          var u, l;
          (u = e.onInteractOutside) == null || u.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((l = n.triggerRef.current) == null ? void 0 : l.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), Yi = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...s } = e, a = $e(mt, n), u = p.useRef(null), l = Ie(t, u);
    return Zo(), /* @__PURE__ */ $(et, { children: [
      /* @__PURE__ */ h(
        gr,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ h(
            fr,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Ar(a.open),
              ...s,
              ref: l,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ $(et, { children: [
        /* @__PURE__ */ h(Bu, { titleId: a.titleId }),
        /* @__PURE__ */ h(Hu, { contentRef: u, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Mr = "DialogTitle", Zi = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = $e(Mr, n);
    return /* @__PURE__ */ h(be.h2, { id: o.titleId, ...r, ref: t });
  }
);
Zi.displayName = Mr;
var Ki = "DialogDescription", Qi = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = $e(Ki, n);
    return /* @__PURE__ */ h(be.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Qi.displayName = Ki;
var Ji = "DialogClose", es = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = $e(Ji, n);
    return /* @__PURE__ */ h(
      be.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Ce(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
es.displayName = Ji;
function Ar(e) {
  return e ? "open" : "closed";
}
var ts = "DialogTitleWarning", [Yf, ns] = Aa(ts, {
  contentName: mt,
  titleName: Mr,
  docsSlug: "dialog"
}), Bu = ({ titleId: e }) => {
  const t = ns(ts), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return p.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, zu = "DialogDescriptionWarning", Hu = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ns(zu).contentName}}.`;
  return p.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, rs = ji, os = Ui, Nr = qi, kr = Xi, is = Zi, ss = Qi, ju = es;
function Gu({
  ...e
}) {
  return /* @__PURE__ */ h(rs, { "data-slot": "dialog", ...e });
}
function as({
  ...e
}) {
  return /* @__PURE__ */ h(os, { "data-slot": "dialog-portal", ...e });
}
function ls({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ h(
    Nr,
    {
      "data-slot": "dialog-overlay",
      className: T(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Wu({
  className: e,
  children: t,
  showCloseButton: n = !0,
  ...r
}) {
  return /* @__PURE__ */ $(as, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ h(ls, {}),
    /* @__PURE__ */ $(
      kr,
      {
        "data-slot": "dialog-content",
        className: T(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...r,
        children: [
          t,
          n && /* @__PURE__ */ $(
            ju,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ h(cr, {}),
                /* @__PURE__ */ h("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
const Uu = J(
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
), qu = p.forwardRef(
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
    showCloseButton: u = !0,
    actions: l,
    ...d
  }, c) => {
    const f = p.useCallback(
      (b) => {
        b && o ? o() : !b && i && i(), s && s(b);
      },
      [o, i, s]
    ), g = () => t ? /* @__PURE__ */ $("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ h(
        "iframe",
        {
          src: t,
          className: "w-full flex-1 min-h-[400px] border-0",
          title: `Modal content from ${t}`,
          ...d
        }
      ),
      l && /* @__PURE__ */ h("div", { className: "border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-2", children: l })
    ] }) : /* @__PURE__ */ $("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ h("div", { className: "flex-1", children: e }),
      l && /* @__PURE__ */ h("div", { className: "border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-2", children: l })
    ] });
    return /* @__PURE__ */ h(Gu, { open: r, onOpenChange: f, children: /* @__PURE__ */ $(as, { children: [
      /* @__PURE__ */ h(ls, { className: "bg-black/50" }),
      /* @__PURE__ */ h(
        Wu,
        {
          ref: c,
          className: T(
            Uu({ variant: n }),
            "p-0 overflow-hidden",
            // Remove default padding and handle overflow
            a
          ),
          showCloseButton: u,
          ...d,
          children: g()
        }
      )
    ] }) });
  }
);
qu.displayName = "Modal";
const Xu = J(
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
), Yu = J("text-lg font-semibold text-gray-900 leading-6"), Zu = J("flex items-center gap-2 cursor-pointer"), Ku = p.forwardRef(
  ({ title: e, children: t, className: n, showBorder: r = !0, ...o }, i) => /* @__PURE__ */ $(
    "div",
    {
      ref: i,
      className: T(Xu({ showBorder: r }), n),
      ...o,
      children: [
        e && /* @__PURE__ */ h("h2", { className: T(Yu()), children: e }),
        t && /* @__PURE__ */ h("div", { className: T(Zu()), children: t }),
        !e && t && /* @__PURE__ */ h("div", { className: "flex-1" })
      ]
    }
  )
);
Ku.displayName = "TitleBar";
const bo = (e) => e && {
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
}[e] || "", wt = (e, t = "m") => {
  if (!e) return "";
  if (typeof e == "string") {
    const r = bo(e);
    return r ? `-m${t}-${r}` : "";
  }
  const n = [];
  return Object.entries(e).forEach(([r, o]) => {
    const i = bo(o);
    if (i) {
      const s = r === "xs" ? "" : `${r}:`;
      n.push(`${s}-m${t}-${i}`);
    }
  }), n.join(" ");
}, Qu = J("", {
  variants: {
    // Base styling variants can be added here if needed
  },
  defaultVariants: {}
}), Ju = p.forwardRef(
  ({
    children: e,
    marginInline: t,
    marginBlock: n,
    marginBlockStart: r,
    marginBlockEnd: o,
    marginInlineStart: i,
    marginInlineEnd: s,
    className: a,
    ...u
  }, l) => {
    const d = T(
      Qu(),
      // Negative margins for bleeding effect
      wt(t, "x"),
      wt(n, "y"),
      wt(r, "t"),
      wt(o, "b"),
      wt(i, "l"),
      wt(s, "r"),
      a
    );
    return /* @__PURE__ */ h("div", { ref: l, className: d, ...u, children: e });
  }
);
Ju.displayName = "Bleed";
const ed = J(
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
), td = J(
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
), nd = J("px-6 py-6", {
  variants: {},
  defaultVariants: {}
}), rd = p.forwardRef(
  ({
    children: e,
    title: t,
    subtitle: n,
    titleMetadata: r,
    compactTitle: o = !1,
    titleHidden: i = !1,
    fullWidth: s = !1,
    narrowWidth: a = !1,
    primaryAction: u,
    secondaryActions: l = [],
    actionGroups: d = [],
    backAction: c,
    pagination: f,
    pageReadyAccessibilityLabel: g,
    filterActions: b = !1,
    additionalMetadata: m,
    onActionRollup: v,
    hasSubtitleMaxWidth: x = !1,
    className: y,
    ...w
  }, S) => {
    const _ = s ? "full" : a ? "narrow" : "default", M = (E, O = "secondary") => {
      var B;
      const F = "url" in E && E.url;
      return /* @__PURE__ */ h(
        ie,
        {
          variant: O === "primary" ? "primary" : "secondary",
          onClick: E.onAction,
          url: F ? E.url : void 0,
          external: "external" in E ? E.external : void 0,
          target: "target" in E ? E.target : void 0,
          download: "download" in E ? E.download : void 0,
          disabled: "disabled" in E ? E.disabled : void 0,
          loading: "loading" in E ? E.loading : void 0,
          icon: "icon" in E ? E.icon : void 0,
          accessibilityLabel: E.accessibilityLabel,
          children: E.content
        },
        E.id || ((B = E.content) == null ? void 0 : B.toString())
      );
    }, R = () => {
      var E, O;
      return f ? /* @__PURE__ */ $("div", { className: "flex items-center justify-between px-6 py-4 bg-white border-t border-[rgb(227,227,227)]", children: [
        /* @__PURE__ */ h(
          ie,
          {
            variant: "secondary",
            disabled: !f.hasPrevious,
            onClick: f.onPrevious,
            url: f.previousURL,
            icon: /* @__PURE__ */ h(sr, {}),
            accessibilityLabel: ((E = f.accessibilityLabels) == null ? void 0 : E.previous) || "Previous",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ h(
          ie,
          {
            variant: "secondary",
            disabled: !f.hasNext,
            onClick: f.onNext,
            url: f.nextURL,
            icon: /* @__PURE__ */ h(ar, {}),
            accessibilityLabel: ((O = f.accessibilityLabels) == null ? void 0 : O.next) || "Next",
            children: "Next"
          }
        )
      ] }) : null;
    };
    return /* @__PURE__ */ $(
      "div",
      {
        ref: S,
        className: T(ed({ width: _ }), y),
        "aria-label": g,
        ...w,
        children: [
          (t || c || u || l.length > 0 || d.length > 0) && /* @__PURE__ */ $("header", { className: T(td({ compact: o })), children: [
            c && /* @__PURE__ */ h("div", { className: "mb-4", children: M(c, "secondary") }),
            (t || u || l.length > 0 || d.length > 0) && /* @__PURE__ */ $("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ $("div", { className: "flex-1 min-w-0", children: [
                t && !i && /* @__PURE__ */ $("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ h(Re, { as: "h1", variant: "headingLg", fontWeight: "semibold", children: t }),
                  r && /* @__PURE__ */ h("div", { className: "flex items-center", children: r })
                ] }),
                n && /* @__PURE__ */ h(
                  "div",
                  {
                    className: T(
                      "mt-1",
                      x && "max-w-[640px]"
                    ),
                    children: /* @__PURE__ */ h(Re, { variant: "bodyMd", tone: "subdued", children: n })
                  }
                ),
                m && /* @__PURE__ */ h("div", { className: "mt-2", children: m })
              ] }),
              (u || l.length > 0 || d.length > 0) && /* @__PURE__ */ h("div", { className: "flex items-center gap-2 ml-4", children: /* @__PURE__ */ $(Uo, { children: [
                l.map(
                  (E) => M(E, "secondary")
                ),
                u && M(u, "primary")
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ h("main", { className: T(nd()), children: e }),
          R()
        ]
      }
    );
  }
);
rd.displayName = "Page";
const cs = J(
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
), Zf = cs, od = p.forwardRef(
  ({
    children: e,
    tone: t = "default",
    progress: n = "complete",
    icon: r,
    size: o = "medium",
    className: i,
    ...s
  }, a) => {
    const u = T(
      cs({
        tone: t,
        size: o,
        progress: n
      }),
      i
    ), l = p.useMemo(() => {
      var d;
      return r ? typeof r == "string" ? r === "placeholder" ? /* @__PURE__ */ h("span", { className: "w-3 h-3 bg-current rounded-full opacity-50 mr-1" }) : /* @__PURE__ */ h("span", { className: "mr-1", children: r }) : p.isValidElement(r) ? p.cloneElement(r, {
        className: T(
          "w-3 h-3 mr-1",
          (d = r.props) == null ? void 0 : d.className
        )
      }) : typeof r == "function" ? /* @__PURE__ */ h(r, { className: "w-3 h-3 mr-1" }) : null : null;
    }, [r]);
    return /* @__PURE__ */ $("span", { ref: a, className: u, ...s, children: [
      l,
      e
    ] });
  }
);
od.displayName = "Badge";
const vo = (e) => e && {
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
}[e] || "", id = (e) => {
  if (!e) return "";
  if (typeof e == "string") {
    const n = vo(e);
    return n ? `gap-${n}` : "";
  }
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    const o = vo(r);
    if (o) {
      const i = n === "xs" ? "" : `${n}:`;
      t.push(`${i}gap-${o}`);
    }
  }), t.join(" ");
}, sd = J(
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
), ad = p.forwardRef(
  ({
    children: e,
    as: t = "div",
    align: n = "start",
    direction: r = "row",
    blockAlign: o = "start",
    gap: i,
    wrap: s = !0,
    className: a,
    ...u
  }, l) => {
    const d = t, c = id(i), f = T(
      sd({
        align: n,
        direction: r,
        blockAlign: o,
        wrap: s
      }),
      c,
      a
    );
    return /* @__PURE__ */ h(d, { ref: l, className: f, ...u, children: e });
  }
);
ad.displayName = "InlineStack";
const xo = (e) => e && {
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
}[e] || "", ld = (e) => {
  if (!e) return "";
  if (typeof e == "string") {
    const n = xo(e);
    return n ? `gap-${n}` : "";
  }
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    const o = xo(r);
    if (o) {
      const i = n === "xs" ? "" : `${n}:`;
      t.push(`${i}gap-${o}`);
    }
  }), t.join(" ");
}, cd = J(
  "flex flex-col [&>*]:w-full",
  // Base flexbox styling with column direction and full-width children
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
        true: "flex-col-reverse [&>*]:w-full",
        false: "flex-col [&>*]:w-full"
      }
    },
    defaultVariants: {
      align: "start",
      inlineAlign: "start",
      reverseOrder: !1
    }
  }
), ud = p.forwardRef(
  ({
    children: e,
    as: t = "div",
    align: n = "start",
    inlineAlign: r = "start",
    gap: o,
    id: i,
    reverseOrder: s = !1,
    role: a,
    className: u,
    ...l
  }, d) => {
    const c = t, f = ld(o), g = T(
      cd({
        align: n,
        inlineAlign: r,
        reverseOrder: s
      }),
      f,
      u
    );
    return /* @__PURE__ */ h(
      c,
      {
        ref: d,
        className: g,
        id: i,
        role: a,
        ...l,
        children: e
      }
    );
  }
);
ud.displayName = "BlockStack";
const dd = J("flex items-center !text-red-200", {
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
}), yo = J(
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
), us = p.forwardRef(
  ({
    nextKeys: e,
    previousKeys: t,
    nextTooltip: n,
    previousTooltip: r,
    nextURL: o,
    previousURL: i,
    hasNext: s = !1,
    hasPrevious: a = !1,
    accessibilityLabel: u = "Pagination",
    accessibilityLabels: l,
    onNext: d,
    onPrevious: c,
    label: f,
    type: g = "page",
    className: b,
    asChild: m = !1,
    ...v
  }, x) => {
    p.useEffect(() => {
      const M = (R) => {
        t != null && t.includes(R.key) && a && c && (R.preventDefault(), c()), e != null && e.includes(R.key) && s && d && (R.preventDefault(), d());
      };
      return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
    }, [t, e, a, s, c, d]);
    const y = l == null ? void 0 : l.previous, w = l == null ? void 0 : l.next, S = () => /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        disabled: !a,
        onClick: a ? c : void 0,
        "aria-label": y || "Previous",
        className: T(
          yo({
            position: f ? "previous" : "single",
            disabled: !a
          })
        ),
        children: /* @__PURE__ */ h(
          sr,
          {
            className: "size-5",
            fill: a ? "black" : "#b0b0bc"
          }
        )
      }
    ), _ = () => /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        disabled: !s,
        onClick: s ? d : void 0,
        "aria-label": w || "Next",
        className: T(
          yo({
            position: f ? "next" : "single",
            disabled: !s
          })
        ),
        children: /* @__PURE__ */ h(
          ar,
          {
            className: "size-5",
            fill: s ? "black" : "#b0b0bc"
          }
        )
      }
    );
    return /* @__PURE__ */ h(
      "nav",
      {
        ref: x,
        "aria-label": u,
        className: T(
          dd({ type: g, hasLabel: !!f }),
          b
        ),
        ...v,
        children: f ? (
          // With label: Previous - Label - Next (spaced apart)
          /* @__PURE__ */ $(et, { children: [
            /* @__PURE__ */ h(S, {}),
            /* @__PURE__ */ h("div", { className: "flex-1 flex justify-center gap-2", children: typeof f == "string" ? /* @__PURE__ */ h(Re, { className: "mx-1", variant: "bodySm", tone: "subdued", children: f }) : f }),
            /* @__PURE__ */ h(_, {})
          ] })
        ) : (
          // Without label: Connected Previous/Next buttons
          /* @__PURE__ */ $("div", { className: "inline-flex", children: [
            /* @__PURE__ */ h(S, {}),
            /* @__PURE__ */ h(_, {})
          ] })
        )
      }
    );
  }
);
us.displayName = "Pagination";
const fd = J("w-full", {
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
}), Kf = () => {
  const [e, t] = p.useState(
    "DEFAULT"
    /* Default */
  );
  return { mode: e, setMode: t };
}, gd = ({
  filter: e,
  disabled: t = !1,
  isOpen: n,
  onToggle: r
}) => {
  const o = (i) => {
    e.onChange(i, e.key);
  };
  return (
    // Sorting Popover buttons
    /* @__PURE__ */ h(
      Er,
      {
        active: n,
        activator: /* @__PURE__ */ $(
          ie,
          {
            size: "micro",
            variant: "tertiary",
            className: "border-dashed ml-2",
            onClick: r,
            disabled: t,
            pressed: n,
            children: [
              e.label,
              e.selected.length > 0 && /* @__PURE__ */ h("span", { className: "ml-1 px-1.5 py-0.5 text-xs bg-blue-100 text-black rounded-full", children: e.selected.length })
            ]
          }
        ),
        onClose: () => {
        },
        preferredPosition: "below",
        sectioned: !0,
        children: /* @__PURE__ */ h(
          zi,
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
    )
  );
}, wo = ({ sortOptions: e, onSort: t, disabled: n, isOpen: r, onToggle: o, onClose: i }) => /* @__PURE__ */ h(
  Er,
  {
    active: r,
    activator: /* @__PURE__ */ h(
      ie,
      {
        variant: "tertiary",
        icon: /* @__PURE__ */ h(Lo, { className: "size-4" }),
        disclosure: !0,
        disabled: n,
        onClick: o,
        children: "Sort"
      }
    ),
    onClose: i,
    children: /* @__PURE__ */ h("div", { className: "p-2 min-w-48", children: e.map((s) => /* @__PURE__ */ $(
      "button",
      {
        className: "w-full text-left px-3 py-2 hover:bg-[#f6f6f6] rounded text-sm",
        onClick: () => {
          t && t([s.value]), i();
        },
        children: [
          s.label,
          " (",
          s.directionLabel,
          ")"
        ]
      },
      s.value
    )) })
  }
), pd = p.forwardRef(
  ({
    sortOptions: e,
    sortSelected: t,
    onSort: n,
    onSortKeyChange: r,
    onSortDirectionChange: o,
    onAddFilterClick: i,
    primaryAction: s,
    cancelAction: a,
    onEditStart: u,
    mode: l,
    disclosureZIndexOverride: d,
    setMode: c,
    disabled: f = !1,
    disableQueryField: g = !1,
    disableStickyMode: b,
    isFlushWhenSticky: m,
    canCreateNewView: v,
    onCreateNewView: x,
    filteringAccessibilityLabel: y = "Filter",
    filteringAccessibilityTooltip: w,
    closeOnChildOverlayClick: S,
    disableKeyboardShortcuts: _,
    showEditColumnsButton: M = !1,
    autoFocusSearchField: R = !1,
    tabs: E,
    selected: O = 0,
    onSelect: F,
    filters: B,
    appliedFilters: I,
    onClearAll: q,
    pinnedFilters: V,
    queryValue: Y = "",
    queryPlaceholder: A = "Searching in all..",
    onQueryChange: D,
    onQueryClear: N,
    className: P,
    ...L
  }, k) => {
    const [j, W] = p.useState(
      l === "FILTERING"
      /* Filtering */
    ), [Z, re] = p.useState(null);
    p.useEffect(() => {
      W(
        l === "FILTERING"
        /* Filtering */
      );
    }, [l]);
    const X = (Q) => {
      re((me) => me === Q ? null : Q);
    }, te = () => {
      re(null);
    }, se = () => {
      c(j ? "DEFAULT" : "FILTERING"), W(!j), !j && u && u(
        "FILTERING"
        /* Filtering */
      );
    }, ge = (Q) => {
      D && D(Q);
    }, pe = () => {
      N && N();
    };
    return /* @__PURE__ */ h(
      "div",
      {
        ref: k,
        className: T(
          fd({ mode: l, disabled: f }),
          P
        ),
        ...L,
        children: /* @__PURE__ */ h("div", { className: "p-1 border border-[#e3e3e3] rounded-md border-b-0 rounded-b-none", children: j ? /* @__PURE__ */ $("div", { className: "space-y-2", children: [
          /* @__PURE__ */ $("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: e && e.length > 0 && /* @__PURE__ */ h(
              wo,
              {
                sortOptions: e,
                onSort: n,
                disabled: f,
                isOpen: Z === "sort",
                onToggle: () => X("sort"),
                onClose: te
              }
            ) }),
            /* @__PURE__ */ h("div", { className: "flex-1", children: /* @__PURE__ */ h(
              qo,
              {
                label: "",
                labelHidden: !0,
                value: Y,
                onChange: ge,
                placeholder: A,
                clearButton: Y.length > 0,
                onClearButtonClick: pe,
                disabled: g || f,
                autoFocus: R,
                autoComplete: "off",
                size: "slim",
                className: "border border-[#e3e3e3] hover:border-[#e3e3e3] bg-white"
              }
            ) }),
            /* @__PURE__ */ h(
              ie,
              {
                onClick: se,
                disabled: f,
                size: "medium",
                children: "Cancel"
              }
            )
          ] }),
          V && V.length > 0 && /* @__PURE__ */ h("div", { className: "border-t border-gray-200 pt-0.5", children: /* @__PURE__ */ h("div", { className: "flex flex-wrap gap-2", children: V.map((Q) => /* @__PURE__ */ h(
            gd,
            {
              filter: Q,
              disabled: f,
              isOpen: Z === `filter-${Q.key}`,
              onToggle: () => X(`filter-${Q.key}`)
            },
            Q.key
          )) }) }),
          I && I.length > 0 && /* @__PURE__ */ $("div", { className: "flex flex-wrap gap-2", children: [
            I.map((Q) => /* @__PURE__ */ $(
              "div",
              {
                className: "inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-black rounded-md text-sm",
                children: [
                  /* @__PURE__ */ h(Re, { variant: "bodySm", children: Q.label }),
                  /* @__PURE__ */ h(
                    "button",
                    {
                      onClick: Q.onRemove,
                      className: "p-0.5 hover:bg-black rounded",
                      children: /* @__PURE__ */ h(cr, { className: "size-3" })
                    }
                  )
                ]
              },
              Q.key
            )),
            q && /* @__PURE__ */ h(ie, { variant: "plain", size: "micro", onClick: q, children: "Clear all" })
          ] }),
          (s || a) && /* @__PURE__ */ $("div", { className: "flex justify-end gap-2", children: [
            a && /* @__PURE__ */ h(
              ie,
              {
                variant: "secondary",
                onClick: a.onAction,
                disabled: a.disabled,
                loading: a.loading,
                children: "Cancel"
              }
            ),
            s && /* @__PURE__ */ h(
              ie,
              {
                variant: "primary",
                onClick: () => {
                  if (s.type === "save-as" && x) {
                    const Q = prompt("Enter view name:");
                    Q && s.onAction(Q);
                  } else
                    s.onAction();
                },
                disabled: s.disabled,
                loading: s.loading,
                children: s.type === "save" ? "Save" : "Save as"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ $("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ $("div", { className: "flex items-center gap-2", children: [
            e && e.length > 0 && /* @__PURE__ */ h(
              wo,
              {
                sortOptions: e,
                onSort: n,
                disabled: f,
                isOpen: Z === "sort",
                onToggle: () => X("sort"),
                onClose: te
              }
            ),
            E && E.length > 0 && /* @__PURE__ */ h(et, { children: E.map((Q, me) => /* @__PURE__ */ h(
              ie,
              {
                size: "micro",
                variant: "tertiary",
                pressed: me === O,
                onClick: () => {
                  Q.onAction(), F && F(me);
                },
                disabled: f,
                children: Q.content
              },
              Q.id
            )) })
          ] }),
          /* @__PURE__ */ $("div", { className: "flex items-center gap-2", children: [
            M && /* @__PURE__ */ h(
              ie,
              {
                variant: "tertiary",
                icon: /* @__PURE__ */ h(Vo, { className: "size-4" }),
                accessibilityLabel: "Edit columns",
                disabled: f,
                children: "Edit columns"
              }
            ),
            /* @__PURE__ */ h(
              ie,
              {
                variant: "tertiary",
                className: "flex w-12 justify-items-end",
                icon: /* @__PURE__ */ $(et, { children: [
                  /* @__PURE__ */ h(To, { className: "size-5" }),
                  /* @__PURE__ */ h(Oo, { className: "size-5" })
                ] }),
                onClick: se,
                pressed: !1,
                accessibilityLabel: y,
                disabled: f
              }
            )
          ] })
        ] }) })
      }
    );
  }
);
pd.displayName = "IndexFilters";
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
function Je(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _e(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: Je(n, r[e])
    }));
  };
}
function En(e) {
  return e instanceof Function;
}
function md(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function hd(e, t) {
  const n = [], r = (o) => {
    o.forEach((i) => {
      n.push(i);
      const s = t(i);
      s != null && s.length && r(s);
    });
  };
  return r(e), n;
}
function z(e, t, n) {
  let r = [], o;
  return (i) => {
    let s;
    n.key && n.debug && (s = Date.now());
    const a = e(i);
    if (!(a.length !== r.length || a.some((d, c) => r[c] !== d)))
      return o;
    r = a;
    let l;
    if (n.key && n.debug && (l = Date.now()), o = t(...a), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const d = Math.round((Date.now() - s) * 100) / 100, c = Math.round((Date.now() - l) * 100) / 100, f = c / 16, g = (b, m) => {
        for (b = String(b); b.length < m; )
          b = " " + b;
        return b;
      };
      console.info(`%c⏱ ${g(c, 5)} /${g(d, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * f, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function H(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: r
  };
}
function bd(e, t, n, r) {
  const o = () => {
    var s;
    return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
  }, i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: z(() => [e, n, t, i], (s, a, u, l) => ({
      table: s,
      column: a,
      row: u,
      cell: l,
      getValue: l.getValue,
      renderValue: l.renderValue
    }), H(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, n, t, e);
  }, {}), i;
}
function vd(e, t, n, r) {
  var o, i;
  const a = {
    ...e._getDefaultColumnDef(),
    ...t
  }, u = a.accessorKey;
  let l = (o = (i = a.id) != null ? i : u ? typeof String.prototype.replaceAll == "function" ? u.replaceAll(".", "_") : u.replace(/\./g, "_") : void 0) != null ? o : typeof a.header == "string" ? a.header : void 0, d;
  if (a.accessorFn ? d = a.accessorFn : u && (u.includes(".") ? d = (f) => {
    let g = f;
    for (const m of u.split(".")) {
      var b;
      g = (b = g) == null ? void 0 : b[m], process.env.NODE_ENV !== "production" && g === void 0 && console.warn(`"${m}" in deeply nested key "${u}" returned undefined.`);
    }
    return g;
  } : d = (f) => f[a.accessorKey]), !l)
    throw process.env.NODE_ENV !== "production" ? new Error(a.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let c = {
    id: `${String(l)}`,
    accessorFn: d,
    parent: r,
    depth: n,
    columnDef: a,
    columns: [],
    getFlatColumns: z(() => [!0], () => {
      var f;
      return [c, ...(f = c.columns) == null ? void 0 : f.flatMap((g) => g.getFlatColumns())];
    }, H(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: z(() => [e._getOrderColumnsFn()], (f) => {
      var g;
      if ((g = c.columns) != null && g.length) {
        let b = c.columns.flatMap((m) => m.getLeafColumns());
        return f(b);
      }
      return [c];
    }, H(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const f of e._features)
    f.createColumn == null || f.createColumn(c, e);
  return c;
}
const fe = "debugHeaders";
function Co(e, t, n) {
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
      const s = [], a = (u) => {
        u.subHeaders && u.subHeaders.length && u.subHeaders.map(a), s.push(u);
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
const xd = {
  createTable: (e) => {
    e.getHeaderGroups = z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, s;
      const a = (i = r == null ? void 0 : r.map((c) => n.find((f) => f.id === c)).filter(Boolean)) != null ? i : [], u = (s = o == null ? void 0 : o.map((c) => n.find((f) => f.id === c)).filter(Boolean)) != null ? s : [], l = n.filter((c) => !(r != null && r.includes(c.id)) && !(o != null && o.includes(c.id)));
      return sn(t, [...a, ...l, ...u], e);
    }, H(e.options, fe, "getHeaderGroups")), e.getCenterHeaderGroups = z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), sn(t, n, e, "center")), H(e.options, fe, "getCenterHeaderGroups")), e.getLeftHeaderGroups = z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return sn(t, i, e, "left");
    }, H(e.options, fe, "getLeftHeaderGroups")), e.getRightHeaderGroups = z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return sn(t, i, e, "right");
    }, H(e.options, fe, "getRightHeaderGroups")), e.getFooterGroups = z(() => [e.getHeaderGroups()], (t) => [...t].reverse(), H(e.options, fe, "getFooterGroups")), e.getLeftFooterGroups = z(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), H(e.options, fe, "getLeftFooterGroups")), e.getCenterFooterGroups = z(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), H(e.options, fe, "getCenterFooterGroups")), e.getRightFooterGroups = z(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), H(e.options, fe, "getRightFooterGroups")), e.getFlatHeaders = z(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), H(e.options, fe, "getFlatHeaders")), e.getLeftFlatHeaders = z(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), H(e.options, fe, "getLeftFlatHeaders")), e.getCenterFlatHeaders = z(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), H(e.options, fe, "getCenterFlatHeaders")), e.getRightFlatHeaders = z(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), H(e.options, fe, "getRightFlatHeaders")), e.getCenterLeafHeaders = z(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), H(e.options, fe, "getCenterLeafHeaders")), e.getLeftLeafHeaders = z(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), H(e.options, fe, "getLeftLeafHeaders")), e.getRightLeafHeaders = z(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), H(e.options, fe, "getRightLeafHeaders")), e.getLeafHeaders = z(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, s, a, u, l;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(s = (a = n[0]) == null ? void 0 : a.headers) != null ? s : [], ...(u = (l = r[0]) == null ? void 0 : l.headers) != null ? u : []].map((d) => d.getLeafHeaders()).flat();
    }, H(e.options, fe, "getLeafHeaders"));
  }
};
function sn(e, t, n, r) {
  var o, i;
  let s = 0;
  const a = function(f, g) {
    g === void 0 && (g = 1), s = Math.max(s, g), f.filter((b) => b.getIsVisible()).forEach((b) => {
      var m;
      (m = b.columns) != null && m.length && a(b.columns, g + 1);
    }, 0);
  };
  a(e);
  let u = [];
  const l = (f, g) => {
    const b = {
      depth: g,
      id: [r, `${g}`].filter(Boolean).join("_"),
      headers: []
    }, m = [];
    f.forEach((v) => {
      const x = [...m].reverse()[0], y = v.column.depth === b.depth;
      let w, S = !1;
      if (y && v.column.parent ? w = v.column.parent : (w = v.column, S = !0), x && (x == null ? void 0 : x.column) === w)
        x.subHeaders.push(v);
      else {
        const _ = Co(n, w, {
          id: [r, g, w.id, v == null ? void 0 : v.id].filter(Boolean).join("_"),
          isPlaceholder: S,
          placeholderId: S ? `${m.filter((M) => M.column === w).length}` : void 0,
          depth: g,
          index: m.length
        });
        _.subHeaders.push(v), m.push(_);
      }
      b.headers.push(v), v.headerGroup = b;
    }), u.push(b), g > 0 && l(m, g - 1);
  }, d = t.map((f, g) => Co(n, f, {
    depth: s,
    index: g
  }));
  l(d, s - 1), u.reverse();
  const c = (f) => f.filter((b) => b.column.getIsVisible()).map((b) => {
    let m = 0, v = 0, x = [0];
    b.subHeaders && b.subHeaders.length ? (x = [], c(b.subHeaders).forEach((w) => {
      let {
        colSpan: S,
        rowSpan: _
      } = w;
      m += S, x.push(_);
    })) : m = 1;
    const y = Math.min(...x);
    return v = v + y, b.colSpan = m, b.rowSpan = v, {
      colSpan: m,
      rowSpan: v
    };
  });
  return c((o = (i = u[0]) == null ? void 0 : i.headers) != null ? o : []), u;
}
const yd = (e, t, n, r, o, i, s) => {
  let a = {
    id: t,
    index: r,
    original: n,
    depth: o,
    parentId: s,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (u) => {
      if (a._valuesCache.hasOwnProperty(u))
        return a._valuesCache[u];
      const l = e.getColumn(u);
      if (l != null && l.accessorFn)
        return a._valuesCache[u] = l.accessorFn(a.original, r), a._valuesCache[u];
    },
    getUniqueValues: (u) => {
      if (a._uniqueValuesCache.hasOwnProperty(u))
        return a._uniqueValuesCache[u];
      const l = e.getColumn(u);
      if (l != null && l.accessorFn)
        return l.columnDef.getUniqueValues ? (a._uniqueValuesCache[u] = l.columnDef.getUniqueValues(a.original, r), a._uniqueValuesCache[u]) : (a._uniqueValuesCache[u] = [a.getValue(u)], a._uniqueValuesCache[u]);
    },
    renderValue: (u) => {
      var l;
      return (l = a.getValue(u)) != null ? l : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => hd(a.subRows, (u) => u.subRows),
    getParentRow: () => a.parentId ? e.getRow(a.parentId, !0) : void 0,
    getParentRows: () => {
      let u = [], l = a;
      for (; ; ) {
        const d = l.getParentRow();
        if (!d) break;
        u.push(d), l = d;
      }
      return u.reverse();
    },
    getAllCells: z(() => [e.getAllLeafColumns()], (u) => u.map((l) => bd(e, a, l, l.id)), H(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: z(() => [a.getAllCells()], (u) => u.reduce((l, d) => (l[d.column.id] = d, l), {}), H(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let u = 0; u < e._features.length; u++) {
    const l = e._features[u];
    l == null || l.createRow == null || l.createRow(a, e);
  }
  return a;
}, wd = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, ds = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
ds.autoRemove = (e) => Ae(e);
const fs = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
fs.autoRemove = (e) => Ae(e);
const gs = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
gs.autoRemove = (e) => Ae(e);
const ps = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
ps.autoRemove = (e) => Ae(e);
const ms = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
ms.autoRemove = (e) => Ae(e) || !(e != null && e.length);
const hs = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
hs.autoRemove = (e) => Ae(e) || !(e != null && e.length);
const bs = (e, t, n) => e.getValue(t) === n;
bs.autoRemove = (e) => Ae(e);
const vs = (e, t, n) => e.getValue(t) == n;
vs.autoRemove = (e) => Ae(e);
const Ir = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
Ir.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, s = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const a = i;
    i = s, s = a;
  }
  return [i, s];
};
Ir.autoRemove = (e) => Ae(e) || Ae(e[0]) && Ae(e[1]);
const je = {
  includesString: ds,
  includesStringSensitive: fs,
  equalsString: gs,
  arrIncludes: ps,
  arrIncludesAll: ms,
  arrIncludesSome: hs,
  equals: bs,
  weakEquals: vs,
  inNumberRange: Ir
};
function Ae(e) {
  return e == null || e === "";
}
const Cd = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: _e("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? je.includesString : typeof r == "number" ? je.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? je.equals : Array.isArray(r) ? je.arrIncludes : je.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return En(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : je[e.columnDef.filterFn]
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
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((d) => d.id === e.id), s = Je(n, i ? i.value : void 0);
        if (So(o, s, e)) {
          var a;
          return (a = r == null ? void 0 : r.filter((d) => d.id !== e.id)) != null ? a : [];
        }
        const u = {
          id: e.id,
          value: s
        };
        if (i) {
          var l;
          return (l = r == null ? void 0 : r.map((d) => d.id === e.id ? u : d)) != null ? l : [];
        }
        return r != null && r.length ? [...r, u] : [u];
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
        return (i = Je(t, o)) == null ? void 0 : i.filter((s) => {
          const a = n.find((u) => u.id === s.id);
          if (a) {
            const u = a.getFilterFn();
            if (So(u, s.value, a))
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
function So(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const Sd = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), _d = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Rd = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Ed = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, Pd = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, Md = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!md(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, s) => i - s);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, Ad = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Nd = (e, t) => new Set(t.map((n) => n.getValue(e))).size, kd = (e, t) => t.length, Bn = {
  sum: Sd,
  min: _d,
  max: Rd,
  extent: Ed,
  mean: Pd,
  median: Md,
  unique: Ad,
  uniqueCount: Nd,
  count: kd
}, Id = {
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
    onGroupingChange: _e("grouping", e),
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
        return Bn.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return Bn.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return En(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : Bn[e.columnDef.aggregationFn];
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
function $d(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const Fd = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: _e("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = z((n) => [Vt(t, n)], (n) => n.findIndex((r) => r.id === e.id), H(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = Vt(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = Vt(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = z(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
      let i = [];
      if (!(t != null && t.length))
        i = o;
      else {
        const s = [...t], a = [...o];
        for (; a.length && s.length; ) {
          const u = s.shift(), l = a.findIndex((d) => d.id === u);
          l > -1 && i.push(a.splice(l, 1)[0]);
        }
        i = [...i, ...a];
      }
      return $d(i, n, r);
    }, H(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, zn = () => ({
  left: [],
  right: []
}), Od = {
  getInitialState: (e) => ({
    columnPinning: zn(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: _e("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      t.setColumnPinning((o) => {
        var i, s;
        if (n === "right") {
          var a, u;
          return {
            left: ((a = o == null ? void 0 : o.left) != null ? a : []).filter((c) => !(r != null && r.includes(c))),
            right: [...((u = o == null ? void 0 : o.right) != null ? u : []).filter((c) => !(r != null && r.includes(c))), ...r]
          };
        }
        if (n === "left") {
          var l, d;
          return {
            left: [...((l = o == null ? void 0 : o.left) != null ? l : []).filter((c) => !(r != null && r.includes(c))), ...r],
            right: ((d = o == null ? void 0 : o.right) != null ? d : []).filter((c) => !(r != null && r.includes(c)))
          };
        }
        return {
          left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((c) => !(r != null && r.includes(c))),
          right: ((s = o == null ? void 0 : o.right) != null ? s : []).filter((c) => !(r != null && r.includes(c)))
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
    e.getCenterVisibleCells = z(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return n.filter((s) => !i.includes(s.column.id));
    }, H(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = z(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), H(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = z(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), H(t.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? zn() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : zn());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = z(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), H(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = z(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), H(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = z(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, H(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function Dd(e) {
  return e || (typeof document < "u" ? document : null);
}
const an = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Hn = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), Td = {
  getDefaultColumnDef: () => an,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Hn(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: _e("columnSizing", e),
    onColumnSizingInfoChange: _e("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : an.minSize, (r = i ?? e.columnDef.size) != null ? r : an.size), (o = e.columnDef.maxSize) != null ? o : an.maxSize);
    }, e.getStart = z((n) => [n, Vt(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), H(t.options, "debugColumns", "getStart")), e.getAfter = z((n) => [n, Vt(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), H(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
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
        if (!r || !o || (i.persist == null || i.persist(), jn(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), a = e ? e.getLeafHeaders().map((x) => [x.column.id, x.column.getSize()]) : [[r.id, r.getSize()]], u = jn(i) ? Math.round(i.touches[0].clientX) : i.clientX, l = {}, d = (x, y) => {
          typeof y == "number" && (t.setColumnSizingInfo((w) => {
            var S, _;
            const M = t.options.columnResizeDirection === "rtl" ? -1 : 1, R = (y - ((S = w == null ? void 0 : w.startOffset) != null ? S : 0)) * M, E = Math.max(R / ((_ = w == null ? void 0 : w.startSize) != null ? _ : 0), -0.999999);
            return w.columnSizingStart.forEach((O) => {
              let [F, B] = O;
              l[F] = Math.round(Math.max(B + B * E, 0) * 100) / 100;
            }), {
              ...w,
              deltaOffset: R,
              deltaPercentage: E
            };
          }), (t.options.columnResizeMode === "onChange" || x === "end") && t.setColumnSizing((w) => ({
            ...w,
            ...l
          })));
        }, c = (x) => d("move", x), f = (x) => {
          d("end", x), t.setColumnSizingInfo((y) => ({
            ...y,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, g = Dd(n), b = {
          moveHandler: (x) => c(x.clientX),
          upHandler: (x) => {
            g == null || g.removeEventListener("mousemove", b.moveHandler), g == null || g.removeEventListener("mouseup", b.upHandler), f(x.clientX);
          }
        }, m = {
          moveHandler: (x) => (x.cancelable && (x.preventDefault(), x.stopPropagation()), c(x.touches[0].clientX), !1),
          upHandler: (x) => {
            var y;
            g == null || g.removeEventListener("touchmove", m.moveHandler), g == null || g.removeEventListener("touchend", m.upHandler), x.cancelable && (x.preventDefault(), x.stopPropagation()), f((y = x.touches[0]) == null ? void 0 : y.clientX);
          }
        }, v = Vd() ? {
          passive: !1
        } : !1;
        jn(i) ? (g == null || g.addEventListener("touchmove", m.moveHandler, v), g == null || g.addEventListener("touchend", m.upHandler, v)) : (g == null || g.addEventListener("mousemove", b.moveHandler, v), g == null || g.addEventListener("mouseup", b.upHandler, v)), t.setColumnSizingInfo((x) => ({
          ...x,
          startOffset: u,
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
      e.setColumnSizingInfo(t ? Hn() : (n = e.initialState.columnSizingInfo) != null ? n : Hn());
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
let ln = null;
function Vd() {
  if (typeof ln == "boolean") return ln;
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
  return ln = e, ln;
}
function jn(e) {
  return e.type === "touchstart";
}
const Ld = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: _e("columnVisibility", e)
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
    e._getAllVisibleCells = z(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), H(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = z(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], H(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, r) => z(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), H(e.options, "debugColumns", n));
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
function Vt(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Bd = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, zd = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: _e("globalFilter", e),
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
    e.getGlobalAutoFilterFn = () => je.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return En(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : je[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, Hd = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: _e("expanded", e),
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
            ...u
          } = s;
          return u;
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
}, Jn = 0, er = 10, Gn = () => ({
  pageIndex: Jn,
  pageSize: er
}), jd = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Gn(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: _e("pagination", e)
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
      const o = (i) => Je(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? Gn() : (o = e.initialState.pagination) != null ? o : Gn());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = Je(r, o.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? Jn : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : Jn);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? er : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : er);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, Je(r, o.pageSize)), s = o.pageSize * o.pageIndex, a = Math.floor(s / i);
        return {
          ...o,
          pageIndex: a,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let s = Je(r, (i = e.options.pageCount) != null ? i : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...o,
        pageCount: s
      };
    }), e.getPageOptions = z(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, s) => s)), o;
    }, H(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}, Wn = () => ({
  top: [],
  bottom: []
}), Gd = {
  getInitialState: (e) => ({
    rowPinning: Wn(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: _e("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, r, o) => {
      const i = r ? e.getLeafRows().map((u) => {
        let {
          id: l
        } = u;
        return l;
      }) : [], s = o ? e.getParentRows().map((u) => {
        let {
          id: l
        } = u;
        return l;
      }) : [], a = /* @__PURE__ */ new Set([...s, e.id, ...i]);
      t.setRowPinning((u) => {
        var l, d;
        if (n === "bottom") {
          var c, f;
          return {
            top: ((c = u == null ? void 0 : u.top) != null ? c : []).filter((m) => !(a != null && a.has(m))),
            bottom: [...((f = u == null ? void 0 : u.bottom) != null ? f : []).filter((m) => !(a != null && a.has(m))), ...Array.from(a)]
          };
        }
        if (n === "top") {
          var g, b;
          return {
            top: [...((g = u == null ? void 0 : u.top) != null ? g : []).filter((m) => !(a != null && a.has(m))), ...Array.from(a)],
            bottom: ((b = u == null ? void 0 : u.bottom) != null ? b : []).filter((m) => !(a != null && a.has(m)))
          };
        }
        return {
          top: ((l = u == null ? void 0 : u.top) != null ? l : []).filter((m) => !(a != null && a.has(m))),
          bottom: ((d = u == null ? void 0 : u.bottom) != null ? d : []).filter((m) => !(a != null && a.has(m)))
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
      return e.setRowPinning(t ? Wn() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : Wn());
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
    }, e.getTopRows = z(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), H(e.options, "debugRows", "getTopRows")), e.getBottomRows = z(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), H(e.options, "debugRows", "getBottomRows")), e.getCenterRows = z(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, H(e.options, "debugRows", "getCenterRows"));
  }
}, Wd = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: _e("rowSelection", e),
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
        tr(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = z(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Un(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, H(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = z(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Un(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, H(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = z(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Un(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, H(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
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
        return tr(a, e.id, n, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, t), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return $r(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return nr(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return nr(e, n) === "all";
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
}, tr = (e, t, n, r, o) => {
  var i;
  const s = o.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), s.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((a) => tr(e, a.id, n, r, o));
};
function Un(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(s, a) {
    return s.map((u) => {
      var l;
      const d = $r(u, n);
      if (d && (r.push(u), o[u.id] = u), (l = u.subRows) != null && l.length && (u = {
        ...u,
        subRows: i(u.subRows)
      }), d)
        return u;
    }).filter(Boolean);
  };
  return {
    rows: i(t.rows),
    flatRows: r,
    rowsById: o
  };
}
function $r(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function nr(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && ($r(s, t) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const a = nr(s, t);
      a === "all" ? i = !0 : (a === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const rr = /([0-9]+)/gm, Ud = (e, t, n) => xs(ot(e.getValue(n)).toLowerCase(), ot(t.getValue(n)).toLowerCase()), qd = (e, t, n) => xs(ot(e.getValue(n)), ot(t.getValue(n))), Xd = (e, t, n) => Fr(ot(e.getValue(n)).toLowerCase(), ot(t.getValue(n)).toLowerCase()), Yd = (e, t, n) => Fr(ot(e.getValue(n)), ot(t.getValue(n))), Zd = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, Kd = (e, t, n) => Fr(e.getValue(n), t.getValue(n));
function Fr(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function ot(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function xs(e, t) {
  const n = e.split(rr).filter(Boolean), r = t.split(rr).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(), i = r.shift(), s = parseInt(o, 10), a = parseInt(i, 10), u = [s, a].sort();
    if (isNaN(u[0])) {
      if (o > i)
        return 1;
      if (i > o)
        return -1;
      continue;
    }
    if (isNaN(u[1]))
      return isNaN(s) ? -1 : 1;
    if (s > a)
      return 1;
    if (a > s)
      return -1;
  }
  return n.length - r.length;
}
const Tt = {
  alphanumeric: Ud,
  alphanumericCaseSensitive: qd,
  text: Xd,
  textCaseSensitive: Yd,
  datetime: Zd,
  basic: Kd
}, Qd = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: _e("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return Tt.datetime;
        if (typeof i == "string" && (r = !0, i.split(rr).length > 1))
          return Tt.alphanumeric;
      }
      return r ? Tt.text : Tt.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return En(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : Tt[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((s) => {
        const a = s == null ? void 0 : s.find((g) => g.id === e.id), u = s == null ? void 0 : s.findIndex((g) => g.id === e.id);
        let l = [], d, c = i ? n : o === "desc";
        if (s != null && s.length && e.getCanMultiSort() && r ? a ? d = "toggle" : d = "add" : s != null && s.length && u !== s.length - 1 ? d = "replace" : a ? d = "toggle" : d = "replace", d === "toggle" && (i || o || (d = "remove")), d === "add") {
          var f;
          l = [...s, {
            id: e.id,
            desc: c
          }], l.splice(0, l.length - ((f = t.options.maxMultiSortColCount) != null ? f : Number.MAX_SAFE_INTEGER));
        } else d === "toggle" ? l = s.map((g) => g.id === e.id ? {
          ...g,
          desc: c
        } : g) : d === "remove" ? l = s.filter((g) => g.id !== e.id) : l = [{
          id: e.id,
          desc: c
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
}, Jd = [
  xd,
  Ld,
  Fd,
  Od,
  wd,
  Cd,
  Bd,
  //depends on ColumnFaceting
  zd,
  //depends on ColumnFiltering
  Qd,
  Id,
  //depends on RowSorting
  Hd,
  jd,
  Gd,
  Wd,
  Td
];
function ef(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...Jd, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((f, g) => Object.assign(f, g.getDefaultOptions == null ? void 0 : g.getDefaultOptions(o)), {}), s = (f) => o.options.mergeOptions ? o.options.mergeOptions(i, f) : {
    ...i,
    ...f
  };
  let u = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((f) => {
    var g;
    u = (g = f.getInitialState == null ? void 0 : f.getInitialState(u)) != null ? g : u;
  });
  const l = [];
  let d = !1;
  const c = {
    _features: r,
    options: {
      ...i,
      ...e
    },
    initialState: u,
    _queue: (f) => {
      l.push(f), d || (d = !0, Promise.resolve().then(() => {
        for (; l.length; )
          l.shift()();
        d = !1;
      }).catch((g) => setTimeout(() => {
        throw g;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (f) => {
      const g = Je(f, o.options);
      o.options = s(g);
    },
    getState: () => o.options.state,
    setState: (f) => {
      o.options.onStateChange == null || o.options.onStateChange(f);
    },
    _getRowId: (f, g, b) => {
      var m;
      return (m = o.options.getRowId == null ? void 0 : o.options.getRowId(f, g, b)) != null ? m : `${b ? [b.id, g].join(".") : g}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (f, g) => {
      let b = (g ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[f];
      if (!b && (b = o.getCoreRowModel().rowsById[f], !b))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${f}`) : new Error();
      return b;
    },
    _getDefaultColumnDef: z(() => [o.options.defaultColumn], (f) => {
      var g;
      return f = (g = f) != null ? g : {}, {
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
        ...f
      };
    }, H(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: z(() => [o._getColumnDefs()], (f) => {
      const g = function(b, m, v) {
        return v === void 0 && (v = 0), b.map((x) => {
          const y = vd(o, x, v, m), w = x;
          return y.columns = w.columns ? g(w.columns, y, v + 1) : [], y;
        });
      };
      return g(f);
    }, H(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: z(() => [o.getAllColumns()], (f) => f.flatMap((g) => g.getFlatColumns()), H(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: z(() => [o.getAllFlatColumns()], (f) => f.reduce((g, b) => (g[b.id] = b, g), {}), H(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: z(() => [o.getAllColumns(), o._getOrderColumnsFn()], (f, g) => {
      let b = f.flatMap((m) => m.getLeafColumns());
      return g(b);
    }, H(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (f) => {
      const g = o._getAllFlatColumnsById()[f];
      return process.env.NODE_ENV !== "production" && !g && console.error(`[Table] Column with id '${f}' does not exist.`), g;
    }
  };
  Object.assign(o, c);
  for (let f = 0; f < o._features.length; f++) {
    const g = o._features[f];
    g == null || g.createTable == null || g.createTable(o);
  }
  return o;
}
function tf() {
  return (e) => z(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const a = [];
      for (let l = 0; l < o.length; l++) {
        const d = yd(e, e._getRowId(o[l], l, s), o[l], l, i, void 0, s == null ? void 0 : s.id);
        if (n.flatRows.push(d), n.rowsById[d.id] = d, a.push(d), e.options.getSubRows) {
          var u;
          d.originalSubRows = e.options.getSubRows(o[l], l), (u = d.originalSubRows) != null && u.length && (d.subRows = r(d.originalSubRows, i + 1, d));
        }
      }
      return a;
    };
    return n.rows = r(t), n;
  }, H(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
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
function _o(e, t) {
  return e ? nf(e) ? /* @__PURE__ */ p.createElement(e, t) : e : null;
}
function nf(e) {
  return rf(e) || typeof e == "function" || of(e);
}
function rf(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function of(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function sf(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = p.useState(() => ({
    current: ef(t)
  })), [r, o] = p.useState(() => n.current.initialState);
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
const Lt = p.forwardRef(
  ({
    checked: e,
    onChange: t,
    disabled: n,
    "aria-label": r,
    className: o,
    ...i
  }, s) => {
    const a = p.useRef(null);
    return p.useImperativeHandle(s, () => a.current), p.useEffect(() => {
      a.current && (a.current.indeterminate = e === "indeterminate");
    }, [e]), /* @__PURE__ */ h(
      "input",
      {
        ref: a,
        type: "checkbox",
        checked: e === !0,
        onChange: (u) => t == null ? void 0 : t(u.target.checked),
        disabled: n,
        "aria-label": r,
        className: T(
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
Lt.displayName = "Checkbox";
const af = J(
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
), gt = J(
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
), ys = J("p-2 whitespace-nowrap text-sm text-gray-900", {
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
}), ws = p.forwardRef(
  ({
    headings: e,
    promotedBulkActions: t,
    bulkActions: n,
    children: r,
    emptyState: o,
    sort: i,
    paginatedSelectAllActionText: s,
    paginatedSelectAllText: a,
    lastColumnSticky: u = !1,
    selectable: l = !0,
    sortable: d,
    sortDirection: c,
    sortColumnIndex: f,
    onSort: g,
    sortToggleLabels: b,
    hasZebraStriping: m = !1,
    pagination: v,
    itemCount: x,
    selectedItemsCount: y,
    resourceName: w,
    loading: S = !1,
    hasMoreItems: _,
    condensed: M = !1,
    onSelectionChange: R,
    className: E,
    data: O,
    columns: F,
    hasIndexFilters: B = !1,
    ...I
  }, q) => {
    const V = p.useMemo(() => O && F ? sf({
      data: O,
      columns: F,
      getCoreRowModel: tf()
    }) : null, [O, F]), Y = () => {
      const D = typeof y == "number" && y > 0 || y === "All", N = () => !n || n.length === 0 || !D ? null : /* @__PURE__ */ h("div", { className: "flex items-center gap-2 ml-auto", children: n.map((P, L) => "actions" in P ? P.actions.map((k, j) => /* @__PURE__ */ h(
        ie,
        {
          variant: "primary",
          size: "slim",
          onClick: k.onAction,
          disabled: k.disabled,
          tone: k.destructive ? "critical" : void 0,
          children: k.content
        },
        `${L}-${j}`
      )) : /* @__PURE__ */ h(
        ie,
        {
          variant: "primary",
          size: "slim",
          onClick: P.onAction,
          disabled: P.disabled,
          tone: P.destructive ? "critical" : void 0,
          children: P.content
        },
        L
      )) });
      return V ? /* @__PURE__ */ h("thead", { className: "sticky top-0 z-10", children: V.getHeaderGroups().map((P) => /* @__PURE__ */ $("tr", { children: [
        l && /* @__PURE__ */ h(
          "th",
          {
            className: T(
              gt({
                isSelectionColumn: !0
              })
            ),
            children: /* @__PURE__ */ h(
              Lt,
              {
                checked: y === "All" || y === x && x > 0 ? !0 : typeof y == "number" && y > 0 ? "indeterminate" : !1,
                onChange: (L) => {
                  R && R(
                    "page",
                    L,
                    void 0,
                    void 0
                  );
                },
                "aria-label": `Select all ${(w == null ? void 0 : w.plural) || "items"}`
              }
            )
          }
        ),
        D ? /* @__PURE__ */ h(
          "th",
          {
            colSpan: P.headers.length,
            className: T(
              gt({
                alignment: "start"
              }),
              "text-left"
            ),
            children: /* @__PURE__ */ $("div", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ h(Re, { variant: "bodyMd", as: "span", children: y === "All" ? `All ${(w == null ? void 0 : w.plural) || "items"} selected` : `${y} ${y === 1 ? (w == null ? void 0 : w.singular) || "item" : (w == null ? void 0 : w.plural) || "items"} selected` }),
              N()
            ] })
          }
        ) : P.headers.map((L, k) => /* @__PURE__ */ h(
          "th",
          {
            className: T(
              gt({
                alignment: "start",
                sortable: L.column.getCanSort(),
                sticky: u && k === P.headers.length - 1
              })
            ),
            children: L.isPlaceholder ? null : _o(
              L.column.columnDef.header,
              L.getContext()
            )
          },
          L.id
        ))
      ] }, P.id)) }) : /* @__PURE__ */ $("thead", { className: "sticky top-0 z-10", children: [
        D && /* @__PURE__ */ $("tr", { children: [
          l && /* @__PURE__ */ h(
            "th",
            {
              className: T(
                gt({
                  isSelectionColumn: !0
                })
              ),
              children: /* @__PURE__ */ h(
                Lt,
                {
                  checked: y === "All" || y === x && x > 0 ? !0 : typeof y == "number" && y > 0 ? "indeterminate" : !1,
                  onChange: (P) => {
                    R && R(
                      "page",
                      P,
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
              className: T(
                gt({
                  alignment: "start"
                }),
                "text-left"
              ),
              children: /* @__PURE__ */ $("div", { className: "flex items-center justify-between w-full", children: [
                /* @__PURE__ */ h(Re, { variant: "bodyMd", as: "span", children: y === "All" ? `All ${(w == null ? void 0 : w.plural) || "items"} selected` : `${y} ${y === 1 ? (w == null ? void 0 : w.singular) || "item" : (w == null ? void 0 : w.plural) || "items"} selected` }),
                N()
              ] })
            }
          )
        ] }),
        !D && /* @__PURE__ */ $("tr", { children: [
          l && /* @__PURE__ */ h(
            "th",
            {
              className: T(
                gt({
                  isSelectionColumn: !0
                })
              ),
              children: /* @__PURE__ */ h(
                Lt,
                {
                  checked: y === "All" || y === x && x > 0 ? !0 : typeof y == "number" && y > 0 ? "indeterminate" : !1,
                  onChange: (P) => {
                    R && R(
                      "page",
                      P,
                      void 0,
                      void 0
                    );
                  },
                  "aria-label": `Select all ${(w == null ? void 0 : w.plural) || "items"}`
                }
              )
            }
          ),
          e.map((P, L) => {
            const k = (d == null ? void 0 : d[L]) || !1, j = f === L, W = j ? c : void 0, Z = () => j ? W === "ascending" ? "descending" : "ascending" : "descending", re = () => !k || !j || !W ? null : W === "descending" ? /* @__PURE__ */ h(lr, { className: "ml-1 h-4 w-4" }) : /* @__PURE__ */ h(ir, { className: "ml-1 h-4 w-4" }), X = () => {
              if (!k || !g) return;
              const te = Z();
              g(L, te);
            };
            return /* @__PURE__ */ h(
              "th",
              {
                className: T(
                  gt({
                    alignment: P.alignment || "start",
                    sortable: k,
                    sticky: u && L === e.length - 1
                  }),
                  k && "cursor-pointer hover:bg-gray-50"
                ),
                onClick: X,
                children: /* @__PURE__ */ $("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ h(Re, { variant: "bodyMd", fontWeight: "semibold", children: (typeof P.title == "string", P.title) }),
                  re()
                ] })
              },
              L
            );
          })
        ] })
      ] });
    }, A = () => {
      var N;
      if (V)
        return /* @__PURE__ */ h("tbody", { children: (N = V.getRowModel().rows) != null && N.length ? V.getRowModel().rows.map((P) => /* @__PURE__ */ h("tr", { className: "hover:bg-gray-50", children: P.getVisibleCells().map((L, k) => /* @__PURE__ */ h(
          "td",
          {
            className: T(
              ys({
                alignment: "start",
                sticky: u && k === P.getVisibleCells().length - 1
              })
            ),
            children: _o(
              L.column.columnDef.cell,
              L.getContext()
            )
          },
          L.id
        )) }, P.id)) : /* @__PURE__ */ h("tr", { children: /* @__PURE__ */ h(
          "td",
          {
            colSpan: (F == null ? void 0 : F.length) || e.length,
            className: "h-24 text-center",
            children: o || /* @__PURE__ */ h(Re, { variant: "bodyMd", tone: "subdued", children: "No results." })
          }
        ) }) });
      const D = p.Children.map(r, (P) => p.isValidElement(P) && P.type === Or ? p.cloneElement(P, {
        selectable: l,
        onSelectionChange: R,
        resourceName: w,
        ...P.props
      }) : P);
      return /* @__PURE__ */ h("tbody", { children: D });
    };
    return x === 0 && o ? /* @__PURE__ */ h("div", { className: "flex items-center justify-center p-8", children: o }) : /* @__PURE__ */ $("div", { className: "overflow-x-auto", children: [
      /* @__PURE__ */ $(
        "table",
        {
          ref: q,
          className: T(
            af({
              condensed: M,
              hasZebraStriping: m,
              loading: S,
              hasIndexFilters: B
            }),
            E
          ),
          ...I,
          children: [
            Y(),
            A()
          ]
        }
      ),
      v && /* @__PURE__ */ h("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ h(us, { type: "table", ...v }) })
    ] });
  }
);
ws.displayName = "IndexTable";
const Or = p.forwardRef(
  ({
    children: e,
    id: t,
    selected: n = !1,
    position: r,
    tone: o,
    disabled: i = !1,
    selectionRange: s,
    rowType: a = "data",
    accessibilityLabel: u,
    onClick: l,
    onNavigation: d,
    className: c,
    selectable: f = !0,
    onSelectionChange: g,
    resourceName: b,
    ...m
  }, v) => {
    const x = J(
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
    ), y = (w) => {
      const S = w.target;
      S.type === "checkbox" || S.closest('input[type="checkbox"]') || S.closest("button") || S.closest("a") || (f && g && !i && g("single", !0, t, r), l && l());
    };
    return /* @__PURE__ */ $(
      "tr",
      {
        ref: v,
        className: T(
          x({
            selected: n === !0 ? !0 : n === "indeterminate" ? "indeterminate" : !1,
            tone: o,
            disabled: i,
            rowType: a
          }),
          // Add cursor pointer when selectable
          f && !i && "cursor-pointer",
          c
        ),
        onClick: y,
        ...m,
        children: [
          f && /* @__PURE__ */ h(
            "td",
            {
              className: T(
                ys({
                  isSelectionColumn: !0
                })
              ),
              children: /* @__PURE__ */ h(
                Lt,
                {
                  checked: n === !0,
                  onChange: (w) => {
                    g && g("single", w, t, r);
                  },
                  disabled: i,
                  "aria-label": u || `Select ${(b == null ? void 0 : b.singular) || "item"}`
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
Or.displayName = "IndexTable.Row";
const Cs = p.forwardRef(
  ({
    as: e = "td",
    id: t,
    children: n,
    className: r,
    flush: o = !1,
    colSpan: i,
    scope: s,
    headers: a,
    ...u
  }, l) => {
    const d = J("border-gray-200 text-xs", {
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
        ref: l,
        id: t,
        className: T(d({ flush: o }), r),
        colSpan: i,
        scope: s,
        headers: a,
        ...u,
        children: n
      }
    );
  }
);
Cs.displayName = "IndexTable.Cell";
const Qf = (e, t) => {
  const [n, r] = p.useState(
    (t == null ? void 0 : t.selectedResources) || []
  ), [o, i] = p.useState(
    (t == null ? void 0 : t.allResourcesSelected) || !1
  ), s = p.useCallback(
    (u, l, d, c) => {
      if (u === "single" && typeof d == "string")
        r(
          l ? (f) => f.includes(d) ? f.filter((g) => g !== d) : [...f, d] : [d]
        );
      else if (u === "multiple" && typeof d == "object") {
        const { start: f, end: g } = d, b = e.slice(f, g + 1).map((m) => m.id);
        r(l ? (m) => [.../* @__PURE__ */ new Set([...m, ...b])] : b);
      } else if (u === "page")
        if (l) {
          const f = e.map((g) => g.id);
          r(f), i(!1);
        } else
          r([]), i(!1);
      else u === "all" && (i(l), l && r([]));
    },
    [e]
  ), a = p.useCallback(() => {
    r([]), i(!1);
  }, []);
  return {
    selectedResources: n,
    allResourcesSelected: o,
    handleSelectionChange: s,
    clearSelection: a
  };
}, Ss = ws;
Ss.Row = Or;
Ss.Cell = Cs;
const lf = J("inline-block shrink-0 w-5 h-5", {
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
}), _s = p.forwardRef(
  ({ source: e, tone: t = "base", accessibilityLabel: n, className: r, ...o }, i) => {
    const s = T(lf({ tone: t }), r), a = p.useMemo(() => {
      var l;
      return e ? typeof e == "function" ? /* @__PURE__ */ h(e, { className: s }) : p.isValidElement(e) ? p.cloneElement(e, {
        className: T(
          s,
          (l = e.props) == null ? void 0 : l.className
        )
      }) : typeof e == "string" ? /* @__PURE__ */ h(
        "div",
        {
          className: s,
          dangerouslySetInnerHTML: { __html: e }
        }
      ) : e : null;
    }, [e, s]);
    return /* @__PURE__ */ h(
      "span",
      {
        ref: i,
        className: "inline-block shrink-0 w-5 h-5",
        ...n ? { "aria-label": n } : { "aria-hidden": !0 },
        ...o,
        children: a
      }
    );
  }
);
_s.displayName = "Icon";
const cf = J(
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
), uf = rs, df = os, Rs = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h(
  Nr,
  {
    ref: n,
    className: T(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Rs.displayName = Nr.displayName;
const Es = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ $(df, { children: [
  /* @__PURE__ */ h(Rs, {}),
  /* @__PURE__ */ h(
    kr,
    {
      ref: r,
      className: T(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg font-inter rounded-[40px] border border-[#e3e3e3] bg-[#303030] text-white",
        e
      ),
      ...n,
      children: t
    }
  )
] }));
Es.displayName = kr.displayName;
const Ps = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h(
  is,
  {
    ref: n,
    className: T(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Ps.displayName = is.displayName;
const Ms = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h(
  ss,
  {
    ref: n,
    className: T("text-sm text-gray-600", e),
    ...t
  }
));
Ms.displayName = ss.displayName;
const ff = p.forwardRef(
  ({
    id: e,
    children: t,
    discardConfirmation: n = !1,
    open: r = !1,
    className: o,
    onSave: i,
    onDiscard: s,
    saveText: a = "Save",
    discardText: u = "Discard",
    saveLoading: l = !1,
    discardLoading: d = !1,
    ...c
  }, f) => {
    const [g, b] = p.useState(!1), [m, v] = p.useState(null), x = !!(i || s), y = p.useCallback(
      (R) => {
        n ? (v(() => R), b(!0)) : R();
      },
      [n]
    ), w = p.useMemo(() => x || !t ? null : p.Children.map(t, (R) => {
      if (p.isValidElement(R) && (R.type === "button" || R.type === ie)) {
        const E = R.props;
        if (E.variant === "primary" && n && typeof E.onClick == "function")
          return p.cloneElement(
            R,
            {
              ...E,
              onClick: (O) => {
                O.preventDefault(), y(E.onClick);
              }
            }
          );
      }
      return R;
    }), [
      t,
      n,
      x,
      y
    ]), S = p.useMemo(() => x ? /* @__PURE__ */ $(et, { children: [
      s && /* @__PURE__ */ h(
        ie,
        {
          variant: "primary",
          loading: d,
          onClick: () => y(s),
          children: u
        }
      ),
      i && /* @__PURE__ */ h(ie, { loading: l, onClick: i, children: a })
    ] }) : null, [
      x,
      s,
      i,
      d,
      l,
      u,
      a,
      y
    ]), _ = p.useCallback(() => {
      b(!1), m && (m(), v(null));
    }, [m]), M = p.useCallback(() => {
      b(!1);
    }, []);
    return /* @__PURE__ */ $(et, { children: [
      /* @__PURE__ */ h(
        "div",
        {
          ref: f,
          id: e,
          className: T(cf({ open: r }), o),
          ...c,
          children: /* @__PURE__ */ $("div", { className: "flex items-center justify-between p-2", children: [
            /* @__PURE__ */ $("div", { className: "flex items-center !justify-center gap-1", children: [
              /* @__PURE__ */ h(_s, { source: $o, tone: "base" }),
              /* @__PURE__ */ h("span", { className: "text-sm font-medium", children: "Unsaved changes" })
            ] }),
            /* @__PURE__ */ h("div", { className: "flex items-center gap-3", children: x ? S : w })
          ] })
        }
      ),
      /* @__PURE__ */ h(uf, { open: g, onOpenChange: b, children: /* @__PURE__ */ $(Es, { className: "p-0 overflow-hidden bg-white", children: [
        /* @__PURE__ */ h("div", { className: "px-6 py-4 bg-[#e3e3e3] border-b border-gray-200", children: /* @__PURE__ */ h(Ps, { className: "text-lg font-semibold text-gray-900 leading-6", children: "Discard changes" }) }),
        /* @__PURE__ */ h("div", { className: "px-6 py-4", children: /* @__PURE__ */ h(Ms, { className: "text-sm text-gray-600", children: "Are you sure you want to discard your changes? This action cannot be undone." }) }),
        /* @__PURE__ */ $("div", { className: "border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-3", children: [
          /* @__PURE__ */ h(ie, { onClick: M, children: "Cancel" }),
          /* @__PURE__ */ h(
            ie,
            {
              variant: "primary",
              tone: "critical",
              onClick: _,
              children: "Discard changes"
            }
          )
        ] })
      ] }) })
    ] });
  }
);
ff.displayName = "ContextualSaveBar";
function gf(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const pf = (e) => {
  switch (e) {
    case "success":
      return bf;
    case "info":
      return xf;
    case "warning":
      return vf;
    case "error":
      return yf;
    default:
      return null;
  }
}, mf = Array(12).fill(0), hf = ({ visible: e, className: t }) => /* @__PURE__ */ C.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ C.createElement("div", {
  className: "sonner-spinner"
}, mf.map((n, r) => /* @__PURE__ */ C.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), bf = /* @__PURE__ */ C.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ C.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), vf = /* @__PURE__ */ C.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ C.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), xf = /* @__PURE__ */ C.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ C.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), yf = /* @__PURE__ */ C.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ C.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), wf = /* @__PURE__ */ C.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ C.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ C.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), Cf = () => {
  const [e, t] = C.useState(document.hidden);
  return C.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let or = 1;
class Sf {
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
      const { message: r, ...o } = t, i = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : or++, s = this.toasts.find((u) => u.id === i), a = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i), s ? this.toasts = this.toasts.map((u) => u.id === i ? (this.publish({
        ...u,
        ...t,
        id: i,
        title: r
      }), {
        ...u,
        ...t,
        id: i,
        dismissible: a,
        title: r
      }) : u) : this.addToast({
        title: r,
        ...o,
        dismissible: a,
        id: i
      }), i;
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
      let i = r !== void 0, s;
      const a = o.then(async (l) => {
        if (s = [
          "resolve",
          l
        ], C.isValidElement(l))
          i = !1, this.create({
            id: r,
            type: "default",
            message: l
          });
        else if (Rf(l) && !l.ok) {
          i = !1;
          const c = typeof n.error == "function" ? await n.error(`HTTP error! status: ${l.status}`) : n.error, f = typeof n.description == "function" ? await n.description(`HTTP error! status: ${l.status}`) : n.description, b = typeof c == "object" && !C.isValidElement(c) ? c : {
            message: c
          };
          this.create({
            id: r,
            type: "error",
            description: f,
            ...b
          });
        } else if (l instanceof Error) {
          i = !1;
          const c = typeof n.error == "function" ? await n.error(l) : n.error, f = typeof n.description == "function" ? await n.description(l) : n.description, b = typeof c == "object" && !C.isValidElement(c) ? c : {
            message: c
          };
          this.create({
            id: r,
            type: "error",
            description: f,
            ...b
          });
        } else if (n.success !== void 0) {
          i = !1;
          const c = typeof n.success == "function" ? await n.success(l) : n.success, f = typeof n.description == "function" ? await n.description(l) : n.description, b = typeof c == "object" && !C.isValidElement(c) ? c : {
            message: c
          };
          this.create({
            id: r,
            type: "success",
            description: f,
            ...b
          });
        }
      }).catch(async (l) => {
        if (s = [
          "reject",
          l
        ], n.error !== void 0) {
          i = !1;
          const d = typeof n.error == "function" ? await n.error(l) : n.error, c = typeof n.description == "function" ? await n.description(l) : n.description, g = typeof d == "object" && !C.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: r,
            type: "error",
            description: c,
            ...g
          });
        }
      }).finally(() => {
        i && (this.dismiss(r), r = void 0), n.finally == null || n.finally.call(n);
      }), u = () => new Promise((l, d) => a.then(() => s[0] === "reject" ? d(s[1]) : l(s[1])).catch(d));
      return typeof r != "string" && typeof r != "number" ? {
        unwrap: u
      } : Object.assign(r, {
        unwrap: u
      });
    }, this.custom = (t, n) => {
      const r = (n == null ? void 0 : n.id) || or++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const he = new Sf(), _f = (e, t) => {
  const n = (t == null ? void 0 : t.id) || or++;
  return he.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, Rf = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Ef = _f, Pf = () => he.toasts, Mf = () => he.getActiveToasts(), Ro = Object.assign(Ef, {
  success: he.success,
  info: he.info,
  warning: he.warning,
  error: he.error,
  custom: he.custom,
  message: he.message,
  promise: he.promise,
  dismiss: he.dismiss,
  loading: he.loading
}, {
  getHistory: Pf,
  getToasts: Mf
});
gf("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function cn(e) {
  return e.label !== void 0;
}
const Af = 3, Nf = "24px", kf = "16px", Eo = 4e3, If = 356, $f = 14, Ff = 45, Of = 200;
function Fe(...e) {
  return e.filter(Boolean).join(" ");
}
function Df(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const Tf = (e) => {
  var t, n, r, o, i, s, a, u, l;
  const { invert: d, toast: c, unstyled: f, interacting: g, setHeights: b, visibleToasts: m, heights: v, index: x, toasts: y, expanded: w, removeToast: S, defaultRichColors: _, closeButton: M, style: R, cancelButtonStyle: E, actionButtonStyle: O, className: F = "", descriptionClassName: B = "", duration: I, position: q, gap: V, expandByDefault: Y, classNames: A, icons: D, closeButtonAriaLabel: N = "Close toast" } = e, [P, L] = C.useState(null), [k, j] = C.useState(null), [W, Z] = C.useState(!1), [re, X] = C.useState(!1), [te, se] = C.useState(!1), [ge, pe] = C.useState(!1), [Q, me] = C.useState(!1), [ve, xe] = C.useState(0), [Gt, Ue] = C.useState(0), Ee = C.useRef(c.duration || I || Eo), ht = C.useRef(null), ue = C.useRef(null), st = x === 0, Pn = x + 1 <= m, K = c.type, qe = c.dismissible !== !1, Wt = c.className || "", It = c.descriptionClassName || "", at = C.useMemo(() => v.findIndex((G) => G.toastId === c.id) || 0, [
    v,
    c.id
  ]), Ut = C.useMemo(() => {
    var G;
    return (G = c.closeButton) != null ? G : M;
  }, [
    c.closeButton,
    M
  ]), lt = C.useMemo(() => c.duration || I || Eo, [
    c.duration,
    I
  ]), ct = C.useRef(0), Xe = C.useRef(0), qt = C.useRef(0), Be = C.useRef(null), [Mn, An] = q.split("-"), Xt = C.useMemo(() => v.reduce((G, ae, ce) => ce >= at ? G : G + ae.height, 0), [
    v,
    at
  ]), Ye = Cf(), ut = c.invert || d, bt = K === "loading";
  Xe.current = C.useMemo(() => at * V + Xt, [
    at,
    Xt
  ]), C.useEffect(() => {
    Ee.current = lt;
  }, [
    lt
  ]), C.useEffect(() => {
    Z(!0);
  }, []), C.useEffect(() => {
    const G = ue.current;
    if (G) {
      const ae = G.getBoundingClientRect().height;
      return Ue(ae), b((ce) => [
        {
          toastId: c.id,
          height: ae,
          position: c.position
        },
        ...ce
      ]), () => b((ce) => ce.filter((de) => de.toastId !== c.id));
    }
  }, [
    b,
    c.id
  ]), C.useLayoutEffect(() => {
    if (!W) return;
    const G = ue.current, ae = G.style.height;
    G.style.height = "auto";
    const ce = G.getBoundingClientRect().height;
    G.style.height = ae, Ue(ce), b((de) => de.find((le) => le.toastId === c.id) ? de.map((le) => le.toastId === c.id ? {
      ...le,
      height: ce
    } : le) : [
      {
        toastId: c.id,
        height: ce,
        position: c.position
      },
      ...de
    ]);
  }, [
    W,
    c.title,
    c.description,
    b,
    c.id,
    c.jsx,
    c.action,
    c.cancel
  ]);
  const ze = C.useCallback(() => {
    X(!0), xe(Xe.current), b((G) => G.filter((ae) => ae.toastId !== c.id)), setTimeout(() => {
      S(c);
    }, Of);
  }, [
    c,
    S,
    b,
    Xe
  ]);
  C.useEffect(() => {
    if (c.promise && K === "loading" || c.duration === 1 / 0 || c.type === "loading") return;
    let G;
    return w || g || Ye ? (() => {
      if (qt.current < ct.current) {
        const de = (/* @__PURE__ */ new Date()).getTime() - ct.current;
        Ee.current = Ee.current - de;
      }
      qt.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      Ee.current !== 1 / 0 && (ct.current = (/* @__PURE__ */ new Date()).getTime(), G = setTimeout(() => {
        c.onAutoClose == null || c.onAutoClose.call(c, c), ze();
      }, Ee.current));
    })(), () => clearTimeout(G);
  }, [
    w,
    g,
    c,
    K,
    Ye,
    ze
  ]), C.useEffect(() => {
    c.delete && (ze(), c.onDismiss == null || c.onDismiss.call(c, c));
  }, [
    ze,
    c.delete
  ]);
  function Yt() {
    var G;
    if (D != null && D.loading) {
      var ae;
      return /* @__PURE__ */ C.createElement("div", {
        className: Fe(A == null ? void 0 : A.loader, c == null || (ae = c.classNames) == null ? void 0 : ae.loader, "sonner-loader"),
        "data-visible": K === "loading"
      }, D.loading);
    }
    return /* @__PURE__ */ C.createElement(hf, {
      className: Fe(A == null ? void 0 : A.loader, c == null || (G = c.classNames) == null ? void 0 : G.loader),
      visible: K === "loading"
    });
  }
  const Zt = c.icon || (D == null ? void 0 : D[K]) || pf(K);
  var $t, Ft;
  return /* @__PURE__ */ C.createElement("li", {
    tabIndex: 0,
    ref: ue,
    className: Fe(F, Wt, A == null ? void 0 : A.toast, c == null || (t = c.classNames) == null ? void 0 : t.toast, A == null ? void 0 : A.default, A == null ? void 0 : A[K], c == null || (n = c.classNames) == null ? void 0 : n[K]),
    "data-sonner-toast": "",
    "data-rich-colors": ($t = c.richColors) != null ? $t : _,
    "data-styled": !(c.jsx || c.unstyled || f),
    "data-mounted": W,
    "data-promise": !!c.promise,
    "data-swiped": Q,
    "data-removed": re,
    "data-visible": Pn,
    "data-y-position": Mn,
    "data-x-position": An,
    "data-index": x,
    "data-front": st,
    "data-swiping": te,
    "data-dismissible": qe,
    "data-type": K,
    "data-invert": ut,
    "data-swipe-out": ge,
    "data-swipe-direction": k,
    "data-expanded": !!(w || Y && W),
    style: {
      "--index": x,
      "--toasts-before": x,
      "--z-index": y.length - x,
      "--offset": `${re ? ve : Xe.current}px`,
      "--initial-height": Y ? "auto" : `${Gt}px`,
      ...R,
      ...c.style
    },
    onDragEnd: () => {
      se(!1), L(null), Be.current = null;
    },
    onPointerDown: (G) => {
      G.button !== 2 && (bt || !qe || (ht.current = /* @__PURE__ */ new Date(), xe(Xe.current), G.target.setPointerCapture(G.pointerId), G.target.tagName !== "BUTTON" && (se(!0), Be.current = {
        x: G.clientX,
        y: G.clientY
      })));
    },
    onPointerUp: () => {
      var G, ae, ce;
      if (ge || !qe) return;
      Be.current = null;
      const de = Number(((G = ue.current) == null ? void 0 : G.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), dt = Number(((ae = ue.current) == null ? void 0 : ae.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), le = (/* @__PURE__ */ new Date()).getTime() - ((ce = ht.current) == null ? void 0 : ce.getTime()), ye = P === "x" ? de : dt, ee = Math.abs(ye) / le;
      if (Math.abs(ye) >= Ff || ee > 0.11) {
        xe(Xe.current), c.onDismiss == null || c.onDismiss.call(c, c), j(P === "x" ? de > 0 ? "right" : "left" : dt > 0 ? "down" : "up"), ze(), pe(!0);
        return;
      } else {
        var oe, Pe;
        (oe = ue.current) == null || oe.style.setProperty("--swipe-amount-x", "0px"), (Pe = ue.current) == null || Pe.style.setProperty("--swipe-amount-y", "0px");
      }
      me(!1), se(!1), L(null);
    },
    onPointerMove: (G) => {
      var ae, ce, de;
      if (!Be.current || !qe || ((ae = window.getSelection()) == null ? void 0 : ae.toString().length) > 0) return;
      const le = G.clientY - Be.current.y, ye = G.clientX - Be.current.x;
      var ee;
      const oe = (ee = e.swipeDirections) != null ? ee : Df(q);
      !P && (Math.abs(ye) > 1 || Math.abs(le) > 1) && L(Math.abs(ye) > Math.abs(le) ? "x" : "y");
      let Pe = {
        x: 0,
        y: 0
      };
      const Dr = (ft) => 1 / (1.5 + Math.abs(ft) / 20);
      if (P === "y") {
        if (oe.includes("top") || oe.includes("bottom"))
          if (oe.includes("top") && le < 0 || oe.includes("bottom") && le > 0)
            Pe.y = le;
          else {
            const ft = le * Dr(le);
            Pe.y = Math.abs(ft) < Math.abs(le) ? ft : le;
          }
      } else if (P === "x" && (oe.includes("left") || oe.includes("right")))
        if (oe.includes("left") && ye < 0 || oe.includes("right") && ye > 0)
          Pe.x = ye;
        else {
          const ft = ye * Dr(ye);
          Pe.x = Math.abs(ft) < Math.abs(ye) ? ft : ye;
        }
      (Math.abs(Pe.x) > 0 || Math.abs(Pe.y) > 0) && me(!0), (ce = ue.current) == null || ce.style.setProperty("--swipe-amount-x", `${Pe.x}px`), (de = ue.current) == null || de.style.setProperty("--swipe-amount-y", `${Pe.y}px`);
    }
  }, Ut && !c.jsx && K !== "loading" ? /* @__PURE__ */ C.createElement("button", {
    "aria-label": N,
    "data-disabled": bt,
    "data-close-button": !0,
    onClick: bt || !qe ? () => {
    } : () => {
      ze(), c.onDismiss == null || c.onDismiss.call(c, c);
    },
    className: Fe(A == null ? void 0 : A.closeButton, c == null || (r = c.classNames) == null ? void 0 : r.closeButton)
  }, (Ft = D == null ? void 0 : D.close) != null ? Ft : wf) : null, (K || c.icon || c.promise) && c.icon !== null && ((D == null ? void 0 : D[K]) !== null || c.icon) ? /* @__PURE__ */ C.createElement("div", {
    "data-icon": "",
    className: Fe(A == null ? void 0 : A.icon, c == null || (o = c.classNames) == null ? void 0 : o.icon)
  }, c.promise || c.type === "loading" && !c.icon ? c.icon || Yt() : null, c.type !== "loading" ? Zt : null) : null, /* @__PURE__ */ C.createElement("div", {
    "data-content": "",
    className: Fe(A == null ? void 0 : A.content, c == null || (i = c.classNames) == null ? void 0 : i.content)
  }, /* @__PURE__ */ C.createElement("div", {
    "data-title": "",
    className: Fe(A == null ? void 0 : A.title, c == null || (s = c.classNames) == null ? void 0 : s.title)
  }, c.jsx ? c.jsx : typeof c.title == "function" ? c.title() : c.title), c.description ? /* @__PURE__ */ C.createElement("div", {
    "data-description": "",
    className: Fe(B, It, A == null ? void 0 : A.description, c == null || (a = c.classNames) == null ? void 0 : a.description)
  }, typeof c.description == "function" ? c.description() : c.description) : null), /* @__PURE__ */ C.isValidElement(c.cancel) ? c.cancel : c.cancel && cn(c.cancel) ? /* @__PURE__ */ C.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: c.cancelButtonStyle || E,
    onClick: (G) => {
      cn(c.cancel) && qe && (c.cancel.onClick == null || c.cancel.onClick.call(c.cancel, G), ze());
    },
    className: Fe(A == null ? void 0 : A.cancelButton, c == null || (u = c.classNames) == null ? void 0 : u.cancelButton)
  }, c.cancel.label) : null, /* @__PURE__ */ C.isValidElement(c.action) ? c.action : c.action && cn(c.action) ? /* @__PURE__ */ C.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: c.actionButtonStyle || O,
    onClick: (G) => {
      cn(c.action) && (c.action.onClick == null || c.action.onClick.call(c.action, G), !G.defaultPrevented && ze());
    },
    className: Fe(A == null ? void 0 : A.actionButton, c == null || (l = c.classNames) == null ? void 0 : l.actionButton)
  }, c.action.label) : null);
};
function Po() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function Vf(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, o) => {
    const i = o === 1, s = i ? "--mobile-offset" : "--offset", a = i ? kf : Nf;
    function u(l) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((d) => {
        n[`${s}-${d}`] = typeof l == "number" ? `${l}px` : l;
      });
    }
    typeof r == "number" || typeof r == "string" ? u(r) : typeof r == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((l) => {
      r[l] === void 0 ? n[`${s}-${l}`] = a : n[`${s}-${l}`] = typeof r[l] == "number" ? `${r[l]}px` : r[l];
    }) : u(a);
  }), n;
}
const Lf = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const { invert: r, position: o = "bottom-right", hotkey: i = [
    "altKey",
    "KeyT"
  ], expand: s, closeButton: a, className: u, offset: l, mobileOffset: d, theme: c = "light", richColors: f, duration: g, style: b, visibleToasts: m = Af, toastOptions: v, dir: x = Po(), gap: y = $f, icons: w, containerAriaLabel: S = "Notifications" } = t, [_, M] = C.useState([]), R = C.useMemo(() => Array.from(new Set([
    o
  ].concat(_.filter((k) => k.position).map((k) => k.position)))), [
    _,
    o
  ]), [E, O] = C.useState([]), [F, B] = C.useState(!1), [I, q] = C.useState(!1), [V, Y] = C.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), A = C.useRef(null), D = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), N = C.useRef(null), P = C.useRef(!1), L = C.useCallback((k) => {
    M((j) => {
      var W;
      return (W = j.find((Z) => Z.id === k.id)) != null && W.delete || he.dismiss(k.id), j.filter(({ id: Z }) => Z !== k.id);
    });
  }, []);
  return C.useEffect(() => he.subscribe((k) => {
    if (k.dismiss) {
      requestAnimationFrame(() => {
        M((j) => j.map((W) => W.id === k.id ? {
          ...W,
          delete: !0
        } : W));
      });
      return;
    }
    setTimeout(() => {
      Ao.flushSync(() => {
        M((j) => {
          const W = j.findIndex((Z) => Z.id === k.id);
          return W !== -1 ? [
            ...j.slice(0, W),
            {
              ...j[W],
              ...k
            },
            ...j.slice(W + 1)
          ] : [
            k,
            ...j
          ];
        });
      });
    });
  }), [
    _
  ]), C.useEffect(() => {
    if (c !== "system") {
      Y(c);
      return;
    }
    if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Y("dark") : Y("light")), typeof window > "u") return;
    const k = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      k.addEventListener("change", ({ matches: j }) => {
        Y(j ? "dark" : "light");
      });
    } catch {
      k.addListener(({ matches: W }) => {
        try {
          Y(W ? "dark" : "light");
        } catch (Z) {
          console.error(Z);
        }
      });
    }
  }, [
    c
  ]), C.useEffect(() => {
    _.length <= 1 && B(!1);
  }, [
    _
  ]), C.useEffect(() => {
    const k = (j) => {
      var W;
      if (i.every((X) => j[X] || j.code === X)) {
        var re;
        B(!0), (re = A.current) == null || re.focus();
      }
      j.code === "Escape" && (document.activeElement === A.current || (W = A.current) != null && W.contains(document.activeElement)) && B(!1);
    };
    return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [
    i
  ]), C.useEffect(() => {
    if (A.current)
      return () => {
        N.current && (N.current.focus({
          preventScroll: !0
        }), N.current = null, P.current = !1);
      };
  }, [
    A.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ C.createElement("section", {
    ref: n,
    "aria-label": `${S} ${D}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, R.map((k, j) => {
    var W;
    const [Z, re] = k.split("-");
    return _.length ? /* @__PURE__ */ C.createElement("ol", {
      key: k,
      dir: x === "auto" ? Po() : x,
      tabIndex: -1,
      ref: A,
      className: u,
      "data-sonner-toaster": !0,
      "data-sonner-theme": V,
      "data-y-position": Z,
      "data-x-position": re,
      style: {
        "--front-toast-height": `${((W = E[0]) == null ? void 0 : W.height) || 0}px`,
        "--width": `${If}px`,
        "--gap": `${y}px`,
        ...b,
        ...Vf(l, d)
      },
      onBlur: (X) => {
        P.current && !X.currentTarget.contains(X.relatedTarget) && (P.current = !1, N.current && (N.current.focus({
          preventScroll: !0
        }), N.current = null));
      },
      onFocus: (X) => {
        X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || P.current || (P.current = !0, N.current = X.relatedTarget);
      },
      onMouseEnter: () => B(!0),
      onMouseMove: () => B(!0),
      onMouseLeave: () => {
        I || B(!1);
      },
      onDragEnd: () => B(!1),
      onPointerDown: (X) => {
        X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || q(!0);
      },
      onPointerUp: () => q(!1)
    }, _.filter((X) => !X.position && j === 0 || X.position === k).map((X, te) => {
      var se, ge;
      return /* @__PURE__ */ C.createElement(Tf, {
        key: X.id,
        icons: w,
        index: te,
        toast: X,
        defaultRichColors: f,
        duration: (se = v == null ? void 0 : v.duration) != null ? se : g,
        className: v == null ? void 0 : v.className,
        descriptionClassName: v == null ? void 0 : v.descriptionClassName,
        invert: r,
        visibleToasts: m,
        closeButton: (ge = v == null ? void 0 : v.closeButton) != null ? ge : a,
        interacting: I,
        position: k,
        style: v == null ? void 0 : v.style,
        unstyled: v == null ? void 0 : v.unstyled,
        classNames: v == null ? void 0 : v.classNames,
        cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
        actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
        closeButtonAriaLabel: v == null ? void 0 : v.closeButtonAriaLabel,
        removeToast: L,
        toasts: _.filter((pe) => pe.position == X.position),
        heights: E.filter((pe) => pe.position == X.position),
        setHeights: O,
        expandByDefault: s,
        gap: y,
        expanded: F,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), Bf = J(
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
), zf = p.forwardRef(
  ({
    className: e,
    theme: t = "light",
    position: n = "bottom-center",
    visibleToasts: r = 3,
    closeButton: o = !0,
    richColors: i = !1,
    expand: s = !1,
    gap: a = 14,
    offset: u = "20px",
    ...l
  }, d) => /* @__PURE__ */ h(
    Lf,
    {
      ref: d,
      className: T("toaster group", e),
      theme: t,
      position: n,
      visibleToasts: r,
      closeButton: o,
      richColors: i,
      expand: s,
      gap: a,
      offset: u,
      toastOptions: {
        classNames: {
          toast: T(
            Bf({ variant: "default" }),
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
      ...l
    }
  )
);
zf.displayName = "Toaster";
const Hf = () => ({
  show: (e, t = {}) => {
    const {
      duration: n = 4e3,
      action: r,
      onDismiss: o,
      dismissible: i = !0
    } = t, s = Ro(e, {
      duration: n,
      dismissible: i,
      action: r ? {
        label: r.label,
        onClick: r.onClick
      } : void 0,
      onDismiss: o
    });
    return String(s);
  },
  hide: (e) => {
    Ro.dismiss(e);
  }
}), Jf = Hf();
export {
  od as Badge,
  Ju as Bleed,
  ud as BlockStack,
  Sa as Box,
  ie as Button,
  Uo as ButtonGroup,
  Iu as Card,
  zi as ChoiceList,
  ff as ContextualSaveBar,
  _s as Icon,
  pd as IndexFilters,
  Ss as IndexTable,
  ad as InlineStack,
  qu as Modal,
  rd as Page,
  us as Pagination,
  Er as Popover,
  Re as Text,
  qo as TextField,
  Ku as TitleBar,
  zf as Toaster,
  Zf as badgeVariants,
  Qu as bleedVariants,
  cd as blockStackVariants,
  Ca as boxVariants,
  ba as buttonGroupVariants,
  ma as buttonVariants,
  T as cn,
  lf as iconVariants,
  fd as indexFiltersVariants,
  af as indexTableVariants,
  sd as inlineStackVariants,
  Uu as modalVariants,
  dd as paginationVariants,
  Nu as polarisCardVariants,
  Pu as polarisChoiceListVariants,
  ed as polarisPageVariants,
  _u as polarisPopoverVariants,
  cf as saveBarVariants,
  Ra as textFieldVariants,
  _a as textVariants,
  Xu as titleBarVariants,
  Jf as toast,
  Bf as toastVariants,
  Qf as useIndexResourceState,
  Kf as useSetIndexFiltersMode
};
//# sourceMappingURL=index.js.map
