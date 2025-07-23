import { jsx as x, jsxs as V, Fragment as cn } from "react/jsx-runtime";
import * as m from "react";
import j, { useLayoutEffect as Mi, useState as Ai } from "react";
import * as Tr from "react-dom";
import Fi from "react-dom";
function er(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function zr(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = er(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : er(e[o], null);
        }
      };
  };
}
function Ve(...e) {
  return m.useCallback(zr(...e), e);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  const t = /* @__PURE__ */ Ii(e), n = m.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = m.Children.toArray(i), l = a.find(Ni);
    if (l) {
      const c = l.props.children, u = a.map((p) => p === l ? m.Children.count(c) > 1 ? m.Children.only(null) : m.isValidElement(c) ? c.props.children : null : p);
      return /* @__PURE__ */ x(t, { ...s, ref: o, children: m.isValidElement(c) ? m.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ x(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var $i = /* @__PURE__ */ yn("Slot");
// @__NO_SIDE_EFFECTS__
function Ii(e) {
  const t = m.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (m.isValidElement(o)) {
      const s = Vi(o), a = ki(i, o.props);
      return o.type !== m.Fragment && (a.ref = r ? zr(r, s) : s), m.cloneElement(o, a);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Oi = Symbol("radix.slottable");
function Ni(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Oi;
}
function ki(e, t) {
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
function Vi(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Br(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Br(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Hr() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Br(e)) && (r && (r += " "), r += t);
  return r;
}
const tr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, nr = Hr, K = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return nr(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((c) => {
    const u = n == null ? void 0 : n[c], p = i == null ? void 0 : i[c];
    if (u === null) return null;
    const d = tr(u) || tr(p);
    return o[c][d];
  }), a = n && Object.entries(n).reduce((c, u) => {
    let [p, d] = u;
    return d === void 0 || (c[p] = d), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
    let { class: p, className: d, ...f } = u;
    return Object.entries(f).every((h) => {
      let [g, v] = h;
      return Array.isArray(v) ? v.includes({
        ...i,
        ...a
      }[g]) : {
        ...i,
        ...a
      }[g] === v;
    }) ? [
      ...c,
      p,
      d
    ] : c;
  }, []);
  return nr(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
var Gr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
Gr.displayName = "CheckIcon";
var jr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
jr.displayName = "ChevronDownIcon";
var Cn = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M11.764 5.204a.75.75 0 0 1 .032 1.06l-3.516 3.736 3.516 3.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.028l4-4.25a.75.75 0 0 1 1.06-.032Z"
  }));
};
Cn.displayName = "ChevronLeftIcon";
var Sn = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
  }));
};
Sn.displayName = "ChevronRightIcon";
var Wr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
Wr.displayName = "ChevronUpIcon";
var Ur = function(t) {
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
Ur.displayName = "FilterIcon";
var qr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    d: "M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"
  }));
};
qr.displayName = "RefreshIcon";
var Xr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};
Xr.displayName = "SearchIcon";
var Zr = function(t) {
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
Zr.displayName = "SettingsIcon";
var Yr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    d: "M7.75 6.06v7.69a.75.75 0 0 1-1.5 0v-7.69l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72Z"
  }), /* @__PURE__ */ j.createElement("path", {
    d: "M13.75 6.25a.75.75 0 0 0-1.5 0v7.69l-1.72-1.72a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-7.69Z"
  }));
};
Yr.displayName = "SortIcon";
var Kr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
  }), /* @__PURE__ */ j.createElement("path", {
    fillRule: "evenodd",
    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
  }));
};
Kr.displayName = "XCircleIcon";
var Qr = function(t) {
  return /* @__PURE__ */ j.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, t), /* @__PURE__ */ j.createElement("path", {
    d: "M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z"
  }));
};
Qr.displayName = "XIcon";
const _n = "-", Li = (e) => {
  const t = Ti(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const a = s.split(_n);
      return a[0] === "" && a.length !== 1 && a.shift(), Jr(a, t) || Di(s);
    },
    getConflictingClassGroupIds: (s, a) => {
      const l = n[s] || [];
      return a && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, Jr = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Jr(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(_n);
  return (s = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
}, rr = /^\[(.+)\]$/, Di = (e) => {
  if (rr.test(e)) {
    const t = rr.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Ti = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Bi(Object.entries(e.classGroups), n).forEach(([i, s]) => {
    un(s, r, i, t);
  }), r;
}, un = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : or(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (zi(o)) {
        un(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      un(s, or(t, i), n, r);
    });
  });
}, or = (e, t) => {
  let n = e;
  return t.split(_n).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, zi = (e) => e.isThemeGetter, Bi = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
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
}, eo = "!", Gi = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, s = (a) => {
    const l = [];
    let c = 0, u = 0, p;
    for (let v = 0; v < a.length; v++) {
      let b = a[v];
      if (c === 0) {
        if (b === o && (r || a.slice(v, v + i) === t)) {
          l.push(a.slice(u, v)), u = v + i;
          continue;
        }
        if (b === "/") {
          p = v;
          continue;
        }
      }
      b === "[" ? c++ : b === "]" && c--;
    }
    const d = l.length === 0 ? a : a.substring(u), f = d.startsWith(eo), h = f ? d.substring(1) : d, g = p && p > u ? p - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: s
  }) : s;
}, ji = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, Wi = (e) => ({
  cache: Hi(e.cacheSize),
  parseClassName: Gi(e),
  ...Li(e)
}), Ui = /\s+/, qi = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], s = e.trim().split(Ui);
  let a = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const c = s[l], {
      modifiers: u,
      hasImportantModifier: p,
      baseClassName: d,
      maybePostfixModifierPosition: f
    } = n(c);
    let h = !!f, g = r(h ? d.substring(0, f) : d);
    if (!g) {
      if (!h) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (g = r(d), !g) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      h = !1;
    }
    const v = ji(u).join(":"), b = p ? v + eo : v, w = b + g;
    if (i.includes(w))
      continue;
    i.push(w);
    const y = o(g, h);
    for (let C = 0; C < y.length; ++C) {
      const S = y[C];
      i.push(b + S);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Xi() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = to(t)) && (r && (r += " "), r += n);
  return r;
}
const to = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = to(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Zi(e, ...t) {
  let n, r, o, i = s;
  function s(l) {
    const c = t.reduce((u, p) => p(u), e());
    return n = Wi(c), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const u = qi(l, n);
    return o(l, u), u;
  }
  return function() {
    return i(Xi.apply(null, arguments));
  };
}
const X = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, no = /^\[(?:([a-z-]+):)?(.+)\]$/i, Yi = /^\d+\/\d+$/, Ki = /* @__PURE__ */ new Set(["px", "full", "screen"]), Qi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ji = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, es = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ts = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ns = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ce = (e) => Xe(e) || Ki.has(e) || Yi.test(e), Pe = (e) => et(e, "length", us), Xe = (e) => !!e && !Number.isNaN(Number(e)), Wt = (e) => et(e, "number", Xe), lt = (e) => !!e && Number.isInteger(Number(e)), rs = (e) => e.endsWith("%") && Xe(e.slice(0, -1)), k = (e) => no.test(e), Me = (e) => Qi.test(e), os = /* @__PURE__ */ new Set(["length", "size", "percentage"]), is = (e) => et(e, os, ro), ss = (e) => et(e, "position", ro), as = /* @__PURE__ */ new Set(["image", "url"]), ls = (e) => et(e, as, fs), cs = (e) => et(e, "", ds), ct = () => !0, et = (e, t, n) => {
  const r = no.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, us = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ji.test(e) && !es.test(e)
), ro = () => !1, ds = (e) => ts.test(e), fs = (e) => ns.test(e), gs = () => {
  const e = X("colors"), t = X("spacing"), n = X("blur"), r = X("brightness"), o = X("borderColor"), i = X("borderRadius"), s = X("borderSpacing"), a = X("borderWidth"), l = X("contrast"), c = X("grayscale"), u = X("hueRotate"), p = X("invert"), d = X("gap"), f = X("gradientColorStops"), h = X("gradientColorStopPositions"), g = X("inset"), v = X("margin"), b = X("opacity"), w = X("padding"), y = X("saturate"), C = X("scale"), S = X("sepia"), E = X("skew"), R = X("space"), _ = X("translate"), O = () => ["auto", "contain", "none"], I = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", k, t], P = () => [k, t], z = () => ["", Ce, Pe], N = () => ["auto", Xe, k], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], D = () => ["solid", "dashed", "dotted", "double", "none"], B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], A = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], T = () => ["", "0", k], q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], M = () => [Xe, k];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ct],
      spacing: [Ce, Pe],
      blur: ["none", "", Me, k],
      brightness: M(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Me, k],
      borderSpacing: P(),
      borderWidth: z(),
      contrast: M(),
      grayscale: T(),
      hueRotate: M(),
      invert: T(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [rs, Pe],
      inset: L(),
      margin: L(),
      opacity: M(),
      padding: P(),
      saturate: M(),
      scale: M(),
      sepia: T(),
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
        aspect: ["auto", "square", "video", k]
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
        "break-after": q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": q()
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
        object: [...W(), k]
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
        z: ["auto", lt, k]
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
        flex: ["1", "auto", "initial", "none", k]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: T()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: T()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", lt, k]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ct]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", lt, k]
        }, k]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": N()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": N()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ct]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [lt, k]
        }, k]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": N()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": N()
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
        "auto-cols": ["auto", "min", "max", "fr", k]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", k]
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
        justify: ["normal", ...A()]
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
        content: ["normal", ...A(), "baseline"]
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
        "place-content": [...A(), "baseline"]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [k, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [k, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Me]
        }, Me]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [k, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [k, t, "auto", "min", "max", "fit"]
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
        font: [ct]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Xe, Wt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ce, k]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", k]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", k]
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
        "placeholder-opacity": [b]
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
        "text-opacity": [b]
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
        decoration: [...D(), "wavy"]
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
        "underline-offset": ["auto", Ce, k]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k]
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
        content: ["none", k]
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
        "bg-opacity": [b]
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
        bg: [...W(), ss]
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
        bg: ["auto", "cover", "contain", is]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ls]
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
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...D(), "hidden"]
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
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: D()
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
        outline: ["", ...D()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ce, k]
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
        ring: z()
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
        "ring-opacity": [b]
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
        shadow: ["", "inner", "none", Me, cs]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ct]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...B(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": B()
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
        "drop-shadow": ["", "none", Me, k]
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
        "backdrop-opacity": [b]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", k]
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
        ease: ["linear", "in", "out", "in-out", k]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", k]
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
        rotate: [lt, k]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", k]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k]
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
        "will-change": ["auto", "scroll", "contents", "transform", k]
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
}, ps = /* @__PURE__ */ Zi(gs);
function H(...e) {
  return ps(Hr(e));
}
const ms = K(
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
), hs = (e) => e ? e === !0 || e === "down" ? /* @__PURE__ */ x(jr, { className: "size-4" }) : e === "up" ? /* @__PURE__ */ x(Wr, { className: "size-4" }) : e === "select" ? /* @__PURE__ */ x(Gr, { className: "size-4" }) : null : null, ir = () => /* @__PURE__ */ x(qr, { className: "size-4 animate-spin" }), ne = m.forwardRef(
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
    download: h,
    submit: g,
    disabled: v,
    loading: b,
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
    onKeyUp: z,
    onKeyDown: N,
    onMouseEnter: W,
    onTouchStart: D,
    onPointerDown: B,
    className: A,
    asChild: T = !1,
    ...q
  }, M) => {
    const G = !!p, Z = T ? $i : G ? "a" : "button", Q = b, ae = v || Q, re = hs(o), ee = H(
      ms({
        variant: c,
        size: t,
        tone: l === "critical" ? "critical" : l === "success" ? "success" : "default",
        textAlign: n,
        fullWidth: r,
        pressed: w
      }),
      // Handle underline removal for plain variants
      i && (c === "plain" || c === "monochromePlain") && "no-underline hover:no-underline",
      A
    ), U = {
      id: u,
      className: ee,
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
      onFocus: I,
      onBlur: L,
      onKeyPress: P,
      onKeyUp: z,
      onKeyDown: N,
      onMouseEnter: W,
      onTouchStart: D,
      onPointerDown: B,
      ref: M,
      ...q
    };
    return G ? /* @__PURE__ */ V(
      Z,
      {
        ...U,
        href: p,
        target: d ? "_blank" : f,
        rel: d ? "noopener noreferrer" : void 0,
        download: h,
        children: [
          s && !Q && /* @__PURE__ */ x("span", { className: "inline-flex shrink-0", children: s }),
          Q && /* @__PURE__ */ x(ir, {}),
          e && /* @__PURE__ */ x("span", { className: "inline-flex", children: e }),
          re && !Q && /* @__PURE__ */ x("span", { className: "inline-flex shrink-0", children: re })
        ]
      }
    ) : /* @__PURE__ */ V(Z, { ...U, type: g ? "submit" : "button", children: [
      s && !Q && /* @__PURE__ */ x("span", { className: "inline-flex shrink-0", children: s }),
      Q && /* @__PURE__ */ x(ir, {}),
      e && /* @__PURE__ */ x("span", { className: "inline-flex", children: e }),
      re && !Q && /* @__PURE__ */ x("span", { className: "inline-flex shrink-0", children: re })
    ] });
  }
);
ne.displayName = "Button";
const bs = K("flex items-center", {
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
}), oo = m.forwardRef(
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
    const c = H(
      bs({
        gap: n === "segmented" ? void 0 : t,
        variant: n,
        fullWidth: r,
        connectedTop: o,
        noWrap: i
      }),
      s
    );
    return /* @__PURE__ */ x("div", { className: c, ref: l, ...a, children: e });
  }
);
oo.displayName = "ButtonGroup";
const vs = (e) => e && {
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
}[e] || "", sr = (e) => e ? e === "transparent" ? "border-transparent" : {
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
}[e] || "" : "", xs = (e) => e && {
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
}[e] || "", ar = (e) => e && {
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
}[e] || "", ws = (e) => e && {
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
}[e] || "", lr = (e) => e && {
  0: "border-0",
  "0165": "border-[0.66px]",
  "025": "border",
  "050": "border-2",
  100: "border-4"
}[e] || "", ys = (e) => e && {
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
}[e] || "", ue = (e, t = "p") => {
  if (!e) return "";
  if (typeof e == "string") {
    const r = ar(e);
    return r ? `${t}-${r}` : "";
  }
  const n = [];
  return Object.entries(e).forEach(([r, o]) => {
    const i = ar(o);
    if (i) {
      const s = r === "xs" ? "" : `${r}:`;
      n.push(`${s}${t}-${i}`);
    }
  }), n.join(" ");
}, bt = (e, t) => {
  const r = {
    0: "0",
    "0165": "[0.66px]",
    "025": "",
    "050": "2",
    100: "4"
  }[e];
  return r ? `border-${t}-${r}` : `border-${t}`;
}, vt = (e, t) => {
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
}, Cs = K("", {
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
}), Ss = m.forwardRef(
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
    borderInlineEndWidth: h,
    color: g,
    id: v,
    minHeight: b,
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
    role: z,
    shadow: N,
    tabIndex: W,
    width: D,
    position: B,
    insetBlockStart: A,
    insetBlockEnd: T,
    insetInlineStart: q,
    insetInlineEnd: M,
    opacity: G,
    outlineColor: Z,
    outlineStyle: Q,
    outlineWidth: ae,
    printHidden: re = !1,
    visuallyHidden: ee = !1,
    zIndex: U,
    className: xe,
    ...ze
  }, De) => {
    const Be = t, ce = H(
      Cs({
        visuallyHidden: ee,
        printHidden: re
      }),
      // Background
      vs(n),
      // Border
      sr(r),
      o === "dashed" ? "border-dashed" : "border-solid",
      ws(i),
      lr(u),
      // Individual border widths
      p && bt(p, "t"),
      d && bt(d, "b"),
      f && bt(f, "l"),
      h && bt(h, "r"),
      // Individual border radius
      s && vt(s, "bl"),
      a && vt(a, "br"),
      l && vt(l, "tl"),
      c && vt(c, "tr"),
      // Text color
      xs(g),
      // Overflow
      C && `overflow-x-${C}`,
      S && `overflow-y-${S}`,
      // Padding
      ue(E, "p"),
      ue(R, "py"),
      ue(_, "pt"),
      ue(O, "pb"),
      ue(I, "px"),
      ue(L, "pl"),
      ue(P, "pr"),
      // Shadow
      ys(N),
      // Position
      B && `${B}`,
      // Inset (positioning)
      ue(A, "top"),
      ue(T, "bottom"),
      ue(q, "left"),
      ue(M, "right"),
      // Outline
      Z && sr(Z).replace("border-", "outline-"),
      Q === "dashed" ? "outline-dashed" : Q === "solid" ? "outline-solid" : "",
      ae && lr(ae).replace("border-", "outline-"),
      xe
    ), we = {
      ...b && { minHeight: b },
      ...w && { minWidth: w },
      ...y && { maxWidth: y },
      ...D && { width: D },
      ...G && { opacity: G },
      ...U && { zIndex: U }
    };
    return /* @__PURE__ */ x(
      Be,
      {
        ref: De,
        className: ce,
        style: Object.keys(we).length > 0 ? we : void 0,
        id: v,
        role: z,
        tabIndex: W,
        ...ze,
        children: e
      }
    );
  }
);
Ss.displayName = "Box";
const _s = K("", {
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
}), le = m.forwardRef(
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
  }, h) => /* @__PURE__ */ x(
    t,
    {
      ref: h,
      id: s,
      className: H(
        _s({
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
le.displayName = "Text";
const Rs = K(
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
), Es = () => {
  const [e] = m.useState(
    () => Math.random().toString(36).substring(2, 11)
  );
  return e;
}, Ps = (e) => {
  if (e)
    return typeof e == "number" ? e : 3;
}, Ms = (e) => {
  if (e)
    return e || typeof e == "number" && e > 0 ? { "aria-multiline": !0 } : void 0;
}, cr = (e) => `${e}Label`, ur = (e) => `${e}HelpText`, io = m.forwardRef(
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
    multiline: h = !1,
    error: g,
    connectedRight: v,
    connectedLeft: b,
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
    minLength: z,
    pattern: N,
    inputMode: W,
    spellCheck: D,
    ariaOwns: B,
    ariaControls: A,
    ariaExpanded: T,
    ariaActiveDescendant: q,
    ariaAutocomplete: M,
    showCharacterCount: G = !1,
    align: Z = "left",
    requiredIndicator: Q = !1,
    monospaced: ae = !1,
    selectTextOnFocus: re = !1,
    suggestion: ee,
    variant: U = "inherit",
    size: xe = "medium",
    tone: ze,
    autoSize: De = !1,
    loading: Be = !1,
    onClearButtonClick: ce,
    onChange: we,
    onSpinnerChange: Bn,
    onFocus: rt,
    onBlur: ot,
    className: Ht,
    ...He
  }, it) => {
    const vi = Es(), J = C ?? vi, [xi, Hn] = m.useState(!!f), Gt = m.useRef(null), Gn = m.useRef(null), jn = m.useRef(null), ht = m.useCallback(() => h ? Gn.current : Gt.current, [h]);
    m.useEffect(() => {
      const Y = ht();
      !Y || f === void 0 || (f ? Y.focus() : Y.blur());
    }, [f, ht]), m.useEffect(() => {
      const Y = Gt.current;
      !Y || !(w === "text" || w === "tel" || w === "search" || w === "url" || w === "password") || !ee || Y.setSelectionRange(o.length, ee.length);
    }, [xi, o, w, ee]);
    const jt = ee || o, wi = w === "currency" ? "text" : w, yi = H(
      Rs({
        size: xe,
        variant: U,
        align: Z,
        tone: ze,
        error: !!g,
        monospaced: ae,
        multiline: !!h
      }),
      De && "w-auto min-w-0",
      Ht
    ), Wn = m.useCallback(
      (Y) => {
        we && we(Y.currentTarget.value, J);
      },
      [we, J]
    ), Ci = m.useCallback(
      (Y) => {
        if (Hn(!0), re && !ee) {
          const ye = ht();
          ye == null || ye.select();
        }
        rt && rt(Y);
      },
      [re, ee, ht, rt]
    ), Si = m.useCallback(
      (Y) => {
        var ye;
        Hn(!1), !((ye = jn.current) != null && ye.contains(Y == null ? void 0 : Y.relatedTarget)) && ot && ot(Y);
      },
      [ot]
    ), _i = m.useCallback(() => {
      ce && ce(J);
    }, [ce, J]), st = [];
    g && st.push(`${J}Error`), i && st.push(ur(J)), G && st.push(`${J}-CharacterCounter`);
    const at = [];
    e && at.push(`${J}-Prefix`), t && at.push(`${J}-Suffix`), n && at.push(`${J}-VerticalContent`), at.unshift(cr(J));
    let Un = null;
    if (G) {
      const Y = jt.length, ye = I ? `${Y}/${I}` : Y;
      Un = /* @__PURE__ */ x(
        "div",
        {
          id: `${J}-CharacterCounter`,
          className: "text-xs text-muted-foreground mt-1",
          children: ye
        }
      );
    }
    const qn = u && jt !== "" ? /* @__PURE__ */ x(
      "button",
      {
        type: "button",
        className: "absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground focus:outline-hidden focus:ring-3 focus:ring-ring focus:ring-offset-2 rounded-sm",
        onClick: _i,
        tabIndex: -1,
        "aria-label": "Clear",
        children: /* @__PURE__ */ x(Kr, { className: "h-4 w-4" })
      }
    ) : null, Xn = e ? /* @__PURE__ */ x(
      "div",
      {
        id: `${J}-Prefix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-r border-input bg-muted/50",
        children: e
      }
    ) : null, Zn = t ? /* @__PURE__ */ x(
      "div",
      {
        id: `${J}-Suffix`,
        className: "flex items-center px-3 text-sm text-muted-foreground border-l border-input bg-muted/50",
        children: t
      }
    ) : null, Yn = Be ? /* @__PURE__ */ x("div", { className: "absolute right-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ x("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-foreground" }) }) : null, Ri = l ? null : /* @__PURE__ */ V(
      "label",
      {
        id: cr(J),
        htmlFor: J,
        className: H(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          Q && "after:content-['*'] after:ml-1 after:text-destructive"
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
    ), Ei = i ? /* @__PURE__ */ x("div", { id: ur(J), className: "text-xs text-muted-foreground mt-1", children: i }) : null, Pi = g && typeof g != "boolean" ? /* @__PURE__ */ x(
      "div",
      {
        id: `${J}Error`,
        className: "text-xs text-destructive mt-1",
        role: "alert",
        children: g
      }
    ) : null, Kn = n ? /* @__PURE__ */ x(
      "div",
      {
        id: `${J}-VerticalContent`,
        className: "text-sm text-muted-foreground mb-2",
        children: n
      }
    ) : null, Qn = {
      ...L && { maxHeight: L }
    }, Jn = m.createElement(h ? "textarea" : "input", {
      ref: m.useCallback(
        (Y) => {
          h ? Gn.current = Y : Gt.current = Y, typeof it == "function" ? it(Y) : it && (it.current = Y);
        },
        [h, it]
      ),
      id: J,
      name: y,
      type: wi,
      value: jt,
      placeholder: r,
      disabled: c,
      readOnly: p,
      autoFocus: d,
      role: S,
      min: P,
      max: O,
      step: E,
      minLength: z,
      maxLength: I,
      pattern: N,
      inputMode: W,
      spellCheck: D,
      autoComplete: _,
      rows: Ps(h),
      size: De ? 1 : void 0,
      style: Object.keys(Qn).length > 0 ? Qn : void 0,
      className: yi,
      "aria-describedby": st.length ? st.join(" ") : void 0,
      "aria-labelledby": at.join(" "),
      "aria-invalid": !!g,
      "aria-owns": B,
      "aria-activedescendant": q,
      "aria-autocomplete": M,
      "aria-controls": A,
      "aria-expanded": T,
      "aria-required": Q,
      ...Ms(h),
      onChange: ee ? void 0 : Wn,
      onInput: ee ? Wn : void 0,
      onFocus: Ci,
      onBlur: Si,
      // Password manager disable attributes
      "data-1p-ignore": _ === "off" || void 0,
      "data-lpignore": _ === "off" || void 0,
      "data-form-type": _ === "off" ? "other" : void 0,
      ...He
    });
    return /* @__PURE__ */ V("div", { ref: jn, className: "space-y-2", children: [
      Ri,
      b || v ? /* @__PURE__ */ V("div", { className: "flex", children: [
        b,
        /* @__PURE__ */ V("div", { className: "flex-1 relative", children: [
          Kn,
          /* @__PURE__ */ V("div", { className: "relative flex", children: [
            Xn,
            Jn,
            Zn,
            qn,
            Yn
          ] })
        ] }),
        v
      ] }) : /* @__PURE__ */ V("div", { className: "relative", children: [
        Kn,
        /* @__PURE__ */ V("div", { className: "relative flex", children: [
          Xn,
          Jn,
          Zn,
          qn,
          Yn
        ] })
      ] }),
      Pi,
      Ei,
      Un
    ] });
  }
);
io.displayName = "TextField";
function $e(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function so(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = m.createContext(s), l = n.length;
    n = [...n, s];
    const c = (p) => {
      var b;
      const { scope: d, children: f, ...h } = p, g = ((b = d == null ? void 0 : d[e]) == null ? void 0 : b[l]) || a, v = m.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ x(g.Provider, { value: v, children: f });
    };
    c.displayName = i + "Provider";
    function u(p, d) {
      var g;
      const f = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[l]) || a, h = m.useContext(f);
      if (h) return h;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [c, u];
  }
  const o = () => {
    const i = n.map((s) => m.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, As(o, ...t)];
}
function As(...e) {
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
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Fs = [
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
], Ee = Fs.reduce((e, t) => {
  const n = /* @__PURE__ */ yn(`Primitive.${t}`), r = m.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ x(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function $s(e, t) {
  e && Tr.flushSync(() => e.dispatchEvent(t));
}
function Ke(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Is(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ke(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Os = "DismissableLayer", dn = "dismissableLayer.update", Ns = "dismissableLayer.pointerDownOutside", ks = "dismissableLayer.focusOutside", dr, ao = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), lo = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, c = m.useContext(ao), [u, p] = m.useState(null), d = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, f] = m.useState({}), h = Ve(t, (R) => p(R)), g = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = g.indexOf(v), w = u ? g.indexOf(u) : -1, y = c.layersWithOutsidePointerEventsDisabled.size > 0, C = w >= b, S = Ds((R) => {
      const _ = R.target, O = [...c.branches].some((I) => I.contains(_));
      !C || O || (o == null || o(R), s == null || s(R), R.defaultPrevented || a == null || a());
    }, d), E = Ts((R) => {
      const _ = R.target;
      [...c.branches].some((I) => I.contains(_)) || (i == null || i(R), s == null || s(R), R.defaultPrevented || a == null || a());
    }, d);
    return Is((R) => {
      w === c.layers.size - 1 && (r == null || r(R), !R.defaultPrevented && a && (R.preventDefault(), a()));
    }, d), m.useEffect(() => {
      if (u)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (dr = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), fr(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = dr);
        };
    }, [u, d, n, c]), m.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), fr());
    }, [u, c]), m.useEffect(() => {
      const R = () => f({});
      return document.addEventListener(dn, R), () => document.removeEventListener(dn, R);
    }, []), /* @__PURE__ */ x(
      Ee.div,
      {
        ...l,
        ref: h,
        style: {
          pointerEvents: y ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: $e(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: $e(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: $e(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
lo.displayName = Os;
var Vs = "DismissableLayerBranch", Ls = m.forwardRef((e, t) => {
  const n = m.useContext(ao), r = m.useRef(null), o = Ve(t, r);
  return m.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ x(Ee.div, { ...e, ref: o });
});
Ls.displayName = Vs;
function Ds(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ke(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          co(
            Ns,
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
function Ts(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ke(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && co(ks, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function fr() {
  const e = new CustomEvent(dn);
  document.dispatchEvent(e);
}
function co(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? $s(o, i) : o.dispatchEvent(i);
}
var Ut = 0;
function zs() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? gr()), document.body.insertAdjacentElement("beforeend", e[1] ?? gr()), Ut++, () => {
      Ut === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ut--;
    };
  }, []);
}
function gr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var qt = "focusScope.autoFocusOnMount", Xt = "focusScope.autoFocusOnUnmount", pr = { bubbles: !1, cancelable: !0 }, Bs = "FocusScope", uo = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, l] = m.useState(null), c = Ke(o), u = Ke(i), p = m.useRef(null), d = Ve(t, (g) => l(g)), f = m.useRef({
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
      let g = function(y) {
        if (f.paused || !a) return;
        const C = y.target;
        a.contains(C) ? p.current = C : Ae(p.current, { select: !0 });
      }, v = function(y) {
        if (f.paused || !a) return;
        const C = y.relatedTarget;
        C !== null && (a.contains(C) || Ae(p.current, { select: !0 }));
      }, b = function(y) {
        if (document.activeElement === document.body)
          for (const S of y)
            S.removedNodes.length > 0 && Ae(a);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", v);
      const w = new MutationObserver(b);
      return a && w.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", v), w.disconnect();
      };
    }
  }, [r, a, f.paused]), m.useEffect(() => {
    if (a) {
      hr.add(f);
      const g = document.activeElement;
      if (!a.contains(g)) {
        const b = new CustomEvent(qt, pr);
        a.addEventListener(qt, c), a.dispatchEvent(b), b.defaultPrevented || (Hs(qs(fo(a)), { select: !0 }), document.activeElement === g && Ae(a));
      }
      return () => {
        a.removeEventListener(qt, c), setTimeout(() => {
          const b = new CustomEvent(Xt, pr);
          a.addEventListener(Xt, u), a.dispatchEvent(b), b.defaultPrevented || Ae(g ?? document.body, { select: !0 }), a.removeEventListener(Xt, u), hr.remove(f);
        }, 0);
      };
    }
  }, [a, c, u, f]);
  const h = m.useCallback(
    (g) => {
      if (!n && !r || f.paused) return;
      const v = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, b = document.activeElement;
      if (v && b) {
        const w = g.currentTarget, [y, C] = Gs(w);
        y && C ? !g.shiftKey && b === C ? (g.preventDefault(), n && Ae(y, { select: !0 })) : g.shiftKey && b === y && (g.preventDefault(), n && Ae(C, { select: !0 })) : b === w && g.preventDefault();
      }
    },
    [n, r, f.paused]
  );
  return /* @__PURE__ */ x(Ee.div, { tabIndex: -1, ...s, ref: d, onKeyDown: h });
});
uo.displayName = Bs;
function Hs(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ae(r, { select: t }), document.activeElement !== n) return;
}
function Gs(e) {
  const t = fo(e), n = mr(t, e), r = mr(t.reverse(), e);
  return [n, r];
}
function fo(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function mr(e, t) {
  for (const n of e)
    if (!js(n, { upTo: t })) return n;
}
function js(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ws(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ae(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ws(e) && t && e.select();
  }
}
var hr = Us();
function Us() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = br(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = br(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function br(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function qs(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ie = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, Xs = m[" useId ".trim().toString()] || (() => {
}), Zs = 0;
function Ys(e) {
  const [t, n] = m.useState(Xs());
  return Ie(() => {
    n((r) => r ?? String(Zs++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const Ks = ["top", "right", "bottom", "left"], Oe = Math.min, oe = Math.max, $t = Math.round, xt = Math.floor, he = (e) => ({
  x: e,
  y: e
}), Qs = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Js = {
  start: "end",
  end: "start"
};
function fn(e, t, n) {
  return oe(e, Oe(t, n));
}
function _e(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Re(e) {
  return e.split("-")[0];
}
function tt(e) {
  return e.split("-")[1];
}
function Rn(e) {
  return e === "x" ? "y" : "x";
}
function En(e) {
  return e === "y" ? "height" : "width";
}
const ea = /* @__PURE__ */ new Set(["top", "bottom"]);
function me(e) {
  return ea.has(Re(e)) ? "y" : "x";
}
function Pn(e) {
  return Rn(me(e));
}
function ta(e, t, n) {
  n === void 0 && (n = !1);
  const r = tt(e), o = Pn(e), i = En(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = It(s)), [s, It(s)];
}
function na(e) {
  const t = It(e);
  return [gn(e), t, gn(t)];
}
function gn(e) {
  return e.replace(/start|end/g, (t) => Js[t]);
}
const vr = ["left", "right"], xr = ["right", "left"], ra = ["top", "bottom"], oa = ["bottom", "top"];
function ia(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? xr : vr : t ? vr : xr;
    case "left":
    case "right":
      return t ? ra : oa;
    default:
      return [];
  }
}
function sa(e, t, n, r) {
  const o = tt(e);
  let i = ia(Re(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(gn)))), i;
}
function It(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Qs[t]);
}
function aa(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function go(e) {
  return typeof e != "number" ? aa(e) : {
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
function wr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = me(t), s = Pn(t), a = En(s), l = Re(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
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
  switch (tt(t)) {
    case "start":
      f[s] -= d * (n && c ? -1 : 1);
      break;
    case "end":
      f[s] += d * (n && c ? -1 : 1);
      break;
  }
  return f;
}
const la = async (e, t, n) => {
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
  } = wr(c, r, l), d = r, f = {}, h = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: v,
      fn: b
    } = a[g], {
      x: w,
      y,
      data: C,
      reset: S
    } = await b({
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
      [v]: {
        ...f[v],
        ...C
      }
    }, S && h <= 50 && (h++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (c = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: u,
      y: p
    } = wr(c, d, l)), g = -1);
  }
  return {
    x: u,
    y: p,
    placement: d,
    strategy: o,
    middlewareData: f
  };
};
async function ft(e, t) {
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
  } = _e(t, e), h = go(f), v = a[d ? p === "floating" ? "reference" : "floating" : p], b = Ot(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
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
  }, S = Ot(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: y,
    strategy: l
  }) : w);
  return {
    top: (b.top - S.top + h.top) / C.y,
    bottom: (S.bottom - b.bottom + h.bottom) / C.y,
    left: (b.left - S.left + h.left) / C.x,
    right: (S.right - b.right + h.right) / C.x
  };
}
const ca = (e) => ({
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
    } = _e(e, t) || {};
    if (c == null)
      return {};
    const p = go(u), d = {
      x: n,
      y: r
    }, f = Pn(o), h = En(f), g = await s.getDimensions(c), v = f === "y", b = v ? "top" : "left", w = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", C = i.reference[h] + i.reference[f] - d[f] - i.floating[h], S = d[f] - i.reference[f], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let R = E ? E[y] : 0;
    (!R || !await (s.isElement == null ? void 0 : s.isElement(E))) && (R = a.floating[y] || i.floating[h]);
    const _ = C / 2 - S / 2, O = R / 2 - g[h] / 2 - 1, I = Oe(p[b], O), L = Oe(p[w], O), P = I, z = R - g[h] - L, N = R / 2 - g[h] / 2 + _, W = fn(P, N, z), D = !l.arrow && tt(o) != null && N !== W && i.reference[h] / 2 - (N < P ? I : L) - g[h] / 2 < 0, B = D ? N < P ? N - P : N - z : 0;
    return {
      [f]: d[f] + B,
      data: {
        [f]: W,
        centerOffset: N - W - B,
        ...D && {
          alignmentOffset: B
        }
      },
      reset: D
    };
  }
}), ua = function(e) {
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
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...v
      } = _e(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = Re(o), w = me(a), y = Re(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = d || (y || !g ? [It(a)] : na(a)), E = h !== "none";
      !d && E && S.push(...sa(a, g, h, C));
      const R = [a, ...S], _ = await ft(t, v), O = [];
      let I = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && O.push(_[b]), p) {
        const N = ta(o, s, C);
        O.push(_[N[0]], _[N[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: O
      }], !O.every((N) => N <= 0)) {
        var L, P;
        const N = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, W = R[N];
        if (W && (!(p === "alignment" ? w !== me(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((A) => A.overflows[0] > 0 && me(A.placement) === w)))
          return {
            data: {
              index: N,
              overflows: I
            },
            reset: {
              placement: W
            }
          };
        let D = (P = I.filter((B) => B.overflows[0] <= 0).sort((B, A) => B.overflows[1] - A.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!D)
          switch (f) {
            case "bestFit": {
              var z;
              const B = (z = I.filter((A) => {
                if (E) {
                  const T = me(A.placement);
                  return T === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  T === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((T) => T > 0).reduce((T, q) => T + q, 0)]).sort((A, T) => A[1] - T[1])[0]) == null ? void 0 : z[0];
              B && (D = B);
              break;
            }
            case "initialPlacement":
              D = a;
              break;
          }
        if (o !== D)
          return {
            reset: {
              placement: D
            }
          };
      }
      return {};
    }
  };
};
function yr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Cr(e) {
  return Ks.some((t) => e[t] >= 0);
}
const da = function(e) {
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
          const i = await ft(t, {
            ...o,
            elementContext: "reference"
          }), s = yr(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Cr(s)
            }
          };
        }
        case "escaped": {
          const i = await ft(t, {
            ...o,
            altBoundary: !0
          }), s = yr(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Cr(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, po = /* @__PURE__ */ new Set(["left", "top"]);
async function fa(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Re(n), a = tt(n), l = me(n) === "y", c = po.has(s) ? -1 : 1, u = i && l ? -1 : 1, p = _e(t, e);
  let {
    mainAxis: d,
    crossAxis: f,
    alignmentAxis: h
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof h == "number" && (f = a === "end" ? h * -1 : h), l ? {
    x: f * u,
    y: d * c
  } : {
    x: d * c,
    y: f * u
  };
}
const ga = function(e) {
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
      } = t, l = await fa(t, e);
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
}, pa = function(e) {
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
              x: b,
              y: w
            } = v;
            return {
              x: b,
              y: w
            };
          }
        },
        ...l
      } = _e(e, t), c = {
        x: n,
        y: r
      }, u = await ft(t, l), p = me(Re(o)), d = Rn(p);
      let f = c[d], h = c[p];
      if (i) {
        const v = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", w = f + u[v], y = f - u[b];
        f = fn(w, f, y);
      }
      if (s) {
        const v = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", w = h + u[v], y = h - u[b];
        h = fn(w, h, y);
      }
      const g = a.fn({
        ...t,
        [d]: f,
        [p]: h
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [d]: i,
            [p]: s
          }
        }
      };
    }
  };
}, ma = function(e) {
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
      } = _e(e, t), u = {
        x: n,
        y: r
      }, p = me(o), d = Rn(p);
      let f = u[d], h = u[p];
      const g = _e(a, t), v = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const y = d === "y" ? "height" : "width", C = i.reference[d] - i.floating[y] + v.mainAxis, S = i.reference[d] + i.reference[y] - v.mainAxis;
        f < C ? f = C : f > S && (f = S);
      }
      if (c) {
        var b, w;
        const y = d === "y" ? "width" : "height", C = po.has(Re(o)), S = i.reference[p] - i.floating[y] + (C && ((b = s.offset) == null ? void 0 : b[p]) || 0) + (C ? 0 : v.crossAxis), E = i.reference[p] + i.reference[y] + (C ? 0 : ((w = s.offset) == null ? void 0 : w[p]) || 0) - (C ? v.crossAxis : 0);
        h < S ? h = S : h > E && (h = E);
      }
      return {
        [d]: f,
        [p]: h
      };
    }
  };
}, ha = function(e) {
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
      } = _e(e, t), u = await ft(t, c), p = Re(o), d = tt(o), f = me(o) === "y", {
        width: h,
        height: g
      } = i.floating;
      let v, b;
      p === "top" || p === "bottom" ? (v = p, b = d === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = p, v = d === "end" ? "top" : "bottom");
      const w = g - u.top - u.bottom, y = h - u.left - u.right, C = Oe(g - u[v], w), S = Oe(h - u[b], y), E = !t.middlewareData.shift;
      let R = C, _ = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (_ = y), (r = t.middlewareData.shift) != null && r.enabled.y && (R = w), E && !d) {
        const I = oe(u.left, 0), L = oe(u.right, 0), P = oe(u.top, 0), z = oe(u.bottom, 0);
        f ? _ = h - 2 * (I !== 0 || L !== 0 ? I + L : oe(u.left, u.right)) : R = g - 2 * (P !== 0 || z !== 0 ? P + z : oe(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: _,
        availableHeight: R
      });
      const O = await s.getDimensions(a.floating);
      return h !== O.width || g !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Vt() {
  return typeof window < "u";
}
function nt(e) {
  return mo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ie(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ve(e) {
  var t;
  return (t = (mo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function mo(e) {
  return Vt() ? e instanceof Node || e instanceof ie(e).Node : !1;
}
function fe(e) {
  return Vt() ? e instanceof Element || e instanceof ie(e).Element : !1;
}
function be(e) {
  return Vt() ? e instanceof HTMLElement || e instanceof ie(e).HTMLElement : !1;
}
function Sr(e) {
  return !Vt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ie(e).ShadowRoot;
}
const ba = /* @__PURE__ */ new Set(["inline", "contents"]);
function pt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ge(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ba.has(o);
}
const va = /* @__PURE__ */ new Set(["table", "td", "th"]);
function xa(e) {
  return va.has(nt(e));
}
const wa = [":popover-open", ":modal"];
function Lt(e) {
  return wa.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const ya = ["transform", "translate", "scale", "rotate", "perspective"], Ca = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Sa = ["paint", "layout", "strict", "content"];
function Mn(e) {
  const t = An(), n = fe(e) ? ge(e) : e;
  return ya.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Ca.some((r) => (n.willChange || "").includes(r)) || Sa.some((r) => (n.contain || "").includes(r));
}
function _a(e) {
  let t = Ne(e);
  for (; be(t) && !Qe(t); ) {
    if (Mn(t))
      return t;
    if (Lt(t))
      return null;
    t = Ne(t);
  }
  return null;
}
function An() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Ra = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Qe(e) {
  return Ra.has(nt(e));
}
function ge(e) {
  return ie(e).getComputedStyle(e);
}
function Dt(e) {
  return fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ne(e) {
  if (nt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Sr(e) && e.host || // Fallback.
    ve(e)
  );
  return Sr(t) ? t.host : t;
}
function ho(e) {
  const t = Ne(e);
  return Qe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : be(t) && pt(t) ? t : ho(t);
}
function gt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ho(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ie(o);
  if (i) {
    const a = pn(s);
    return t.concat(s, s.visualViewport || [], pt(o) ? o : [], a && n ? gt(a) : []);
  }
  return t.concat(o, gt(o, [], n));
}
function pn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bo(e) {
  const t = ge(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = be(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = $t(n) !== i || $t(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Fn(e) {
  return fe(e) ? e : e.contextElement;
}
function Ze(e) {
  const t = Fn(e);
  if (!be(t))
    return he(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = bo(t);
  let s = (i ? $t(n.width) : n.width) / r, a = (i ? $t(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Ea = /* @__PURE__ */ he(0);
function vo(e) {
  const t = ie(e);
  return !An() || !t.visualViewport ? Ea : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Pa(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ie(e) ? !1 : t;
}
function Te(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Fn(e);
  let s = he(1);
  t && (r ? fe(r) && (s = Ze(r)) : s = Ze(e));
  const a = Pa(i, n, r) ? vo(i) : he(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, u = o.width / s.x, p = o.height / s.y;
  if (i) {
    const d = ie(i), f = r && fe(r) ? ie(r) : r;
    let h = d, g = pn(h);
    for (; g && r && f !== h; ) {
      const v = Ze(g), b = g.getBoundingClientRect(), w = ge(g), y = b.left + (g.clientLeft + parseFloat(w.paddingLeft)) * v.x, C = b.top + (g.clientTop + parseFloat(w.paddingTop)) * v.y;
      l *= v.x, c *= v.y, u *= v.x, p *= v.y, l += y, c += C, h = ie(g), g = pn(h);
    }
  }
  return Ot({
    width: u,
    height: p,
    x: l,
    y: c
  });
}
function $n(e, t) {
  const n = Dt(e).scrollLeft;
  return t ? t.left + n : Te(ve(e)).left + n;
}
function xo(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    $n(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Ma(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = ve(r), a = t ? Lt(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = he(1);
  const u = he(0), p = be(r);
  if ((p || !p && !i) && ((nt(r) !== "body" || pt(s)) && (l = Dt(r)), be(r))) {
    const f = Te(r);
    c = Ze(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  const d = s && !p && !i ? xo(s, l, !0) : he(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + d.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + d.y
  };
}
function Aa(e) {
  return Array.from(e.getClientRects());
}
function Fa(e) {
  const t = ve(e), n = Dt(e), r = e.ownerDocument.body, o = oe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = oe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + $n(e);
  const a = -n.scrollTop;
  return ge(r).direction === "rtl" && (s += oe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function $a(e, t) {
  const n = ie(e), r = ve(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = An();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const Ia = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Oa(e, t) {
  const n = Te(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = be(e) ? Ze(e) : he(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function _r(e, t, n) {
  let r;
  if (t === "viewport")
    r = $a(e, n);
  else if (t === "document")
    r = Fa(ve(e));
  else if (fe(t))
    r = Oa(t, n);
  else {
    const o = vo(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ot(r);
}
function wo(e, t) {
  const n = Ne(e);
  return n === t || !fe(n) || Qe(n) ? !1 : ge(n).position === "fixed" || wo(n, t);
}
function Na(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = gt(e, [], !1).filter((a) => fe(a) && nt(a) !== "body"), o = null;
  const i = ge(e).position === "fixed";
  let s = i ? Ne(e) : e;
  for (; fe(s) && !Qe(s); ) {
    const a = ge(s), l = Mn(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && Ia.has(o.position) || pt(s) && !l && wo(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Ne(s);
  }
  return t.set(e, r), r;
}
function ka(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Lt(t) ? [] : Na(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, u) => {
    const p = _r(t, u, o);
    return c.top = oe(p.top, c.top), c.right = Oe(p.right, c.right), c.bottom = Oe(p.bottom, c.bottom), c.left = oe(p.left, c.left), c;
  }, _r(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Va(e) {
  const {
    width: t,
    height: n
  } = bo(e);
  return {
    width: t,
    height: n
  };
}
function La(e, t, n) {
  const r = be(t), o = ve(t), i = n === "fixed", s = Te(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = he(0);
  function c() {
    l.x = $n(o);
  }
  if (r || !r && !i)
    if ((nt(t) !== "body" || pt(o)) && (a = Dt(t)), r) {
      const f = Te(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const u = o && !r && !i ? xo(o, a) : he(0), p = s.left + a.scrollLeft - l.x - u.x, d = s.top + a.scrollTop - l.y - u.y;
  return {
    x: p,
    y: d,
    width: s.width,
    height: s.height
  };
}
function Zt(e) {
  return ge(e).position === "static";
}
function Rr(e, t) {
  if (!be(e) || ge(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ve(e) === n && (n = n.ownerDocument.body), n;
}
function yo(e, t) {
  const n = ie(e);
  if (Lt(e))
    return n;
  if (!be(e)) {
    let o = Ne(e);
    for (; o && !Qe(o); ) {
      if (fe(o) && !Zt(o))
        return o;
      o = Ne(o);
    }
    return n;
  }
  let r = Rr(e, t);
  for (; r && xa(r) && Zt(r); )
    r = Rr(r, t);
  return r && Qe(r) && Zt(r) && !Mn(r) ? n : r || _a(e) || n;
}
const Da = async function(e) {
  const t = this.getOffsetParent || yo, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: La(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Ta(e) {
  return ge(e).direction === "rtl";
}
const za = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ma,
  getDocumentElement: ve,
  getClippingRect: ka,
  getOffsetParent: yo,
  getElementRects: Da,
  getClientRects: Aa,
  getDimensions: Va,
  getScale: Ze,
  isElement: fe,
  isRTL: Ta
};
function Co(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ba(e, t) {
  let n = null, r;
  const o = ve(e);
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
    const h = xt(p), g = xt(o.clientWidth - (u + d)), v = xt(o.clientHeight - (p + f)), b = xt(u), y = {
      rootMargin: -h + "px " + -g + "px " + -v + "px " + -b + "px",
      threshold: oe(0, Oe(1, l)) || 1
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
      R === 1 && !Co(c, e.getBoundingClientRect()) && s(), C = !1;
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
function Ha(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Fn(e), u = o || i ? [...c ? gt(c) : [], ...gt(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const p = c && a ? Ba(c, n) : null;
  let d = -1, f = null;
  s && (f = new ResizeObserver((b) => {
    let [w] = b;
    w && w.target === c && f && (f.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var y;
      (y = f) == null || y.observe(t);
    })), n();
  }), c && !l && f.observe(c), f.observe(t));
  let h, g = l ? Te(e) : null;
  l && v();
  function v() {
    const b = Te(e);
    g && !Co(g, b) && n(), g = b, h = requestAnimationFrame(v);
  }
  return n(), () => {
    var b;
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), p == null || p(), (b = f) == null || b.disconnect(), f = null, l && cancelAnimationFrame(h);
  };
}
const Ga = ga, ja = pa, Wa = ua, Ua = ha, qa = da, Er = ca, Xa = ma, Za = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: za,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return la(e, t, {
    ...o,
    platform: i
  });
};
var Ya = typeof document < "u", Ka = function() {
}, Mt = Ya ? Mi : Ka;
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
function So(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Pr(e, t) {
  const n = So(e);
  return Math.round(t * n) / n;
}
function Yt(e) {
  const t = m.useRef(e);
  return Mt(() => {
    t.current = e;
  }), t;
}
function Qa(e) {
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
  } = e, [u, p] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [d, f] = m.useState(r);
  Nt(d, r) || f(r);
  const [h, g] = m.useState(null), [v, b] = m.useState(null), w = m.useCallback((A) => {
    A !== E.current && (E.current = A, g(A));
  }, []), y = m.useCallback((A) => {
    A !== R.current && (R.current = A, b(A));
  }, []), C = i || h, S = s || v, E = m.useRef(null), R = m.useRef(null), _ = m.useRef(u), O = l != null, I = Yt(l), L = Yt(o), P = Yt(c), z = m.useCallback(() => {
    if (!E.current || !R.current)
      return;
    const A = {
      placement: t,
      strategy: n,
      middleware: d
    };
    L.current && (A.platform = L.current), Za(E.current, R.current, A).then((T) => {
      const q = {
        ...T,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: P.current !== !1
      };
      N.current && !Nt(_.current, q) && (_.current = q, Tr.flushSync(() => {
        p(q);
      }));
    });
  }, [d, t, n, L, P]);
  Mt(() => {
    c === !1 && _.current.isPositioned && (_.current.isPositioned = !1, p((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [c]);
  const N = m.useRef(!1);
  Mt(() => (N.current = !0, () => {
    N.current = !1;
  }), []), Mt(() => {
    if (C && (E.current = C), S && (R.current = S), C && S) {
      if (I.current)
        return I.current(C, S, z);
      z();
    }
  }, [C, S, z, I, O]);
  const W = m.useMemo(() => ({
    reference: E,
    floating: R,
    setReference: w,
    setFloating: y
  }), [w, y]), D = m.useMemo(() => ({
    reference: C,
    floating: S
  }), [C, S]), B = m.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return A;
    const T = Pr(D.floating, u.x), q = Pr(D.floating, u.y);
    return a ? {
      ...A,
      transform: "translate(" + T + "px, " + q + "px)",
      ...So(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: T,
      top: q
    };
  }, [n, a, D.floating, u.x, u.y]);
  return m.useMemo(() => ({
    ...u,
    update: z,
    refs: W,
    elements: D,
    floatingStyles: B
  }), [u, z, W, D, B]);
}
const Ja = (e) => {
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
      return r && t(r) ? r.current != null ? Er({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Er({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, el = (e, t) => ({
  ...Ga(e),
  options: [e, t]
}), tl = (e, t) => ({
  ...ja(e),
  options: [e, t]
}), nl = (e, t) => ({
  ...Xa(e),
  options: [e, t]
}), rl = (e, t) => ({
  ...Wa(e),
  options: [e, t]
}), ol = (e, t) => ({
  ...Ua(e),
  options: [e, t]
}), il = (e, t) => ({
  ...qa(e),
  options: [e, t]
}), sl = (e, t) => ({
  ...Ja(e),
  options: [e, t]
});
var al = "Arrow", _o = m.forwardRef((e, t) => {
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
_o.displayName = al;
var ll = _o;
function cl(e) {
  const [t, n] = m.useState(void 0);
  return Ie(() => {
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
var In = "Popper", [Ro, Eo] = so(In), [ul, Po] = Ro(In), Mo = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null);
  return /* @__PURE__ */ x(ul, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Mo.displayName = In;
var Ao = "PopperAnchor", Fo = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = Po(Ao, n), s = m.useRef(null), a = Ve(t, s);
    return m.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
    }), r ? null : /* @__PURE__ */ x(Ee.div, { ...o, ref: a });
  }
);
Fo.displayName = Ao;
var On = "PopperContent", [dl, fl] = Ro(On), $o = m.forwardRef(
  (e, t) => {
    var ee, U, xe, ze, De, Be;
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
      onPlaced: h,
      ...g
    } = e, v = Po(On, n), [b, w] = m.useState(null), y = Ve(t, (ce) => w(ce)), [C, S] = m.useState(null), E = cl(C), R = (E == null ? void 0 : E.width) ?? 0, _ = (E == null ? void 0 : E.height) ?? 0, O = r + (i !== "center" ? "-" + i : ""), I = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, L = Array.isArray(c) ? c : [c], P = L.length > 0, z = {
      padding: I,
      boundary: L.filter(pl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: P
    }, { refs: N, floatingStyles: W, placement: D, isPositioned: B, middlewareData: A } = Qa({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: (...ce) => Ha(...ce, {
        animationFrame: f === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        el({ mainAxis: o + _, alignmentAxis: s }),
        l && tl({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? nl() : void 0,
          ...z
        }),
        l && rl({ ...z }),
        ol({
          ...z,
          apply: ({ elements: ce, rects: we, availableWidth: Bn, availableHeight: rt }) => {
            const { width: ot, height: Ht } = we.reference, He = ce.floating.style;
            He.setProperty("--radix-popper-available-width", `${Bn}px`), He.setProperty("--radix-popper-available-height", `${rt}px`), He.setProperty("--radix-popper-anchor-width", `${ot}px`), He.setProperty("--radix-popper-anchor-height", `${Ht}px`);
          }
        }),
        C && sl({ element: C, padding: a }),
        ml({ arrowWidth: R, arrowHeight: _ }),
        d && il({ strategy: "referenceHidden", ...z })
      ]
    }), [T, q] = No(D), M = Ke(h);
    Ie(() => {
      B && (M == null || M());
    }, [B, M]);
    const G = (ee = A.arrow) == null ? void 0 : ee.x, Z = (U = A.arrow) == null ? void 0 : U.y, Q = ((xe = A.arrow) == null ? void 0 : xe.centerOffset) !== 0, [ae, re] = m.useState();
    return Ie(() => {
      b && re(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ x(
      "div",
      {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: B ? W.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ae,
          "--radix-popper-transform-origin": [
            (ze = A.transformOrigin) == null ? void 0 : ze.x,
            (De = A.transformOrigin) == null ? void 0 : De.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Be = A.hide) == null ? void 0 : Be.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ x(
          dl,
          {
            scope: n,
            placedSide: T,
            onArrowChange: S,
            arrowX: G,
            arrowY: Z,
            shouldHideArrow: Q,
            children: /* @__PURE__ */ x(
              Ee.div,
              {
                "data-side": T,
                "data-align": q,
                ...g,
                ref: y,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: B ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
$o.displayName = On;
var Io = "PopperArrow", gl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Oo = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = fl(Io, r), s = gl[i.placedSide];
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
          ll,
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
Oo.displayName = Io;
function pl(e) {
  return e !== null;
}
var ml = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, b, w;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((v = o.arrow) == null ? void 0 : v.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, u] = No(n), p = { start: "0%", center: "50%", end: "100%" }[u], d = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + a / 2, f = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
    let h = "", g = "";
    return c === "bottom" ? (h = s ? p : `${d}px`, g = `${-l}px`) : c === "top" ? (h = s ? p : `${d}px`, g = `${r.floating.height + l}px`) : c === "right" ? (h = `${-l}px`, g = s ? p : `${f}px`) : c === "left" && (h = `${r.floating.width + l}px`, g = s ? p : `${f}px`), { data: { x: h, y: g } };
  }
});
function No(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var hl = Mo, ko = Fo, bl = $o, vl = Oo, xl = "Portal", Vo = m.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, i] = m.useState(!1);
  Ie(() => i(!0), []);
  const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? Fi.createPortal(/* @__PURE__ */ x(Ee.div, { ...r, ref: t }), s) : null;
});
Vo.displayName = xl;
function wl(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var Nn = (e) => {
  const { present: t, children: n } = e, r = yl(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), i = Ve(r.ref, Cl(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: i }) : null;
};
Nn.displayName = "Presence";
function yl(e) {
  const [t, n] = m.useState(), r = m.useRef(null), o = m.useRef(e), i = m.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = wl(s, {
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
    const c = wt(r.current);
    i.current = a === "mounted" ? c : "none";
  }, [a]), Ie(() => {
    const c = r.current, u = o.current;
    if (u !== e) {
      const d = i.current, f = wt(c);
      e ? l("MOUNT") : f === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && d !== f ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ie(() => {
    if (t) {
      let c;
      const u = t.ownerDocument.defaultView ?? window, p = (f) => {
        const g = wt(r.current).includes(f.animationName);
        if (f.target === t && g && (l("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, d = (f) => {
        f.target === t && (i.current = wt(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        u.clearTimeout(c), t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: m.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function wt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Cl(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Sl = m[" useInsertionEffect ".trim().toString()] || Ie;
function _l({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = Rl({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o;
  {
    const u = m.useRef(e !== void 0);
    m.useEffect(() => {
      const p = u.current;
      p !== a && console.warn(
        `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = a;
    }, [a, r]);
  }
  const c = m.useCallback(
    (u) => {
      var p;
      if (a) {
        const d = El(u) ? u(e) : u;
        d !== e && ((p = s.current) == null || p.call(s, d));
      } else
        i(u);
    },
    [a, e, i, s]
  );
  return [l, c];
}
function Rl({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), o = m.useRef(n), i = m.useRef(t);
  return Sl(() => {
    i.current = t;
  }, [t]), m.useEffect(() => {
    var s;
    o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function El(e) {
  return typeof e == "function";
}
var Pl = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ge = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), Ct = {}, Kt = 0, Lo = function(e) {
  return e && (e.host || Lo(e.parentNode));
}, Ml = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Lo(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Al = function(e, t, n, r) {
  var o = Ml(t, Array.isArray(e) ? e : [e]);
  Ct[n] || (Ct[n] = /* @__PURE__ */ new WeakMap());
  var i = Ct[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(p) {
    !p || a.has(p) || (a.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var u = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(d) {
      if (a.has(d))
        u(d);
      else
        try {
          var f = d.getAttribute(r), h = f !== null && f !== "false", g = (Ge.get(d) || 0) + 1, v = (i.get(d) || 0) + 1;
          Ge.set(d, g), i.set(d, v), s.push(d), g === 1 && h && yt.set(d, !0), v === 1 && d.setAttribute(n, "true"), h || d.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", d, b);
        }
    });
  };
  return u(t), a.clear(), Kt++, function() {
    s.forEach(function(p) {
      var d = Ge.get(p) - 1, f = i.get(p) - 1;
      Ge.set(p, d), i.set(p, f), d || (yt.has(p) || p.removeAttribute(r), yt.delete(p)), f || p.removeAttribute(n);
    }), Kt--, Kt || (Ge = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), Ct = {});
  };
}, Fl = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Pl(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Al(r, o, n, "aria-hidden")) : function() {
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
function Do(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function $l(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var At = "right-scroll-bar-position", Ft = "width-before-scroll-bar", Il = "with-scroll-bars-hidden", Ol = "--removed-body-scroll-bar-size";
function Qt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Nl(e, t) {
  var n = Ai(function() {
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
var kl = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Mr = /* @__PURE__ */ new WeakMap();
function Vl(e, t) {
  var n = Nl(null, function(r) {
    return e.forEach(function(o) {
      return Qt(o, r);
    });
  });
  return kl(function() {
    var r = Mr.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || Qt(a, null);
      }), i.forEach(function(a) {
        o.has(a) || Qt(a, s);
      });
    }
    Mr.set(n, e);
  }, [e]), n;
}
function Ll(e) {
  return e;
}
function Dl(e, t) {
  t === void 0 && (t = Ll);
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
function Tl(e) {
  e === void 0 && (e = {});
  var t = Dl(null);
  return t.options = pe({ async: !0, ssr: !1 }, e), t;
}
var To = function(e) {
  var t = e.sideCar, n = Do(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, pe({}, n));
};
To.isSideCarExport = !0;
function zl(e, t) {
  return e.useMedium(t), To;
}
var zo = Tl(), Jt = function() {
}, Tt = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: Jt,
    onWheelCapture: Jt,
    onTouchMoveCapture: Jt
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, p = e.shards, d = e.sideCar, f = e.noRelative, h = e.noIsolation, g = e.inert, v = e.allowPinchZoom, b = e.as, w = b === void 0 ? "div" : b, y = e.gapMode, C = Do(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = d, E = Vl([n, t]), R = pe(pe({}, C), o);
  return m.createElement(
    m.Fragment,
    null,
    u && m.createElement(S, { sideCar: zo, removeScrollBar: c, shards: p, noRelative: f, noIsolation: h, inert: g, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: y }),
    s ? m.cloneElement(m.Children.only(a), pe(pe({}, R), { ref: E })) : m.createElement(w, pe({}, R, { className: l, ref: E }), a)
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
var Bl = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Hl() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Bl();
  return t && e.setAttribute("nonce", t), e;
}
function Gl(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function jl(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Wl = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Hl()) && (Gl(t, n), jl(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ul = function() {
  var e = Wl();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Bo = function() {
  var e = Ul(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, ql = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, en = function(e) {
  return parseInt(e || "", 10) || 0;
}, Xl = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [en(n), en(r), en(o)];
}, Zl = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ql;
  var t = Xl(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Yl = Bo(), Ye = "data-scroll-locked", Kl = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Il, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Ye, `] {
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
  
  body[`).concat(Ye, `] {
    `).concat(Ol, ": ").concat(a, `px;
  }
`);
}, Ar = function() {
  var e = parseInt(document.body.getAttribute(Ye) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ql = function() {
  m.useEffect(function() {
    return document.body.setAttribute(Ye, (Ar() + 1).toString()), function() {
      var e = Ar() - 1;
      e <= 0 ? document.body.removeAttribute(Ye) : document.body.setAttribute(Ye, e.toString());
    };
  }, []);
}, Jl = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Ql();
  var i = m.useMemo(function() {
    return Zl(o);
  }, [o]);
  return m.createElement(Yl, { styles: Kl(i, !t, o, n ? "" : "!important") });
}, mn = !1;
if (typeof window < "u")
  try {
    var St = Object.defineProperty({}, "passive", {
      get: function() {
        return mn = !0, !0;
      }
    });
    window.addEventListener("test", St, St), window.removeEventListener("test", St, St);
  } catch {
    mn = !1;
  }
var je = mn ? { passive: !1 } : !1, ec = function(e) {
  return e.tagName === "TEXTAREA";
}, Ho = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ec(e) && n[t] === "visible")
  );
}, tc = function(e) {
  return Ho(e, "overflowY");
}, nc = function(e) {
  return Ho(e, "overflowX");
}, Fr = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Go(e, r);
    if (o) {
      var i = jo(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, rc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, oc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Go = function(e, t) {
  return e === "v" ? tc(t) : nc(t);
}, jo = function(e, t) {
  return e === "v" ? rc(t) : oc(t);
}, ic = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, sc = function(e, t, n, r, o) {
  var i = ic(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, l = t.contains(a), c = !1, u = s > 0, p = 0, d = 0;
  do {
    if (!a)
      break;
    var f = jo(e, a), h = f[0], g = f[1], v = f[2], b = g - v - i * h;
    (h || b) && Go(e, a) && (p += b, d += h);
    var w = a.parentNode;
    a = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (u && Math.abs(p) < 1 || !u && Math.abs(d) < 1) && (c = !0), c;
}, _t = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, $r = function(e) {
  return [e.deltaX, e.deltaY];
}, Ir = function(e) {
  return e && "current" in e ? e.current : e;
}, ac = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, lc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, cc = 0, We = [];
function uc(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(cc++)[0], i = m.useState(Bo)[0], s = m.useRef(e);
  m.useEffect(function() {
    s.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = $l([e.lockRef.current], (e.shards || []).map(Ir), !0).filter(Boolean);
      return g.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = m.useCallback(function(g, v) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !s.current.allowPinchZoom;
    var b = _t(g), w = n.current, y = "deltaX" in g ? g.deltaX : w[0] - b[0], C = "deltaY" in g ? g.deltaY : w[1] - b[1], S, E = g.target, R = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in g && R === "h" && E.type === "range")
      return !1;
    var _ = Fr(R, E);
    if (!_)
      return !0;
    if (_ ? S = R : (S = R === "v" ? "h" : "v", _ = Fr(R, E)), !_)
      return !1;
    if (!r.current && "changedTouches" in g && (y || C) && (r.current = S), !S)
      return !0;
    var O = r.current || S;
    return sc(O, v, g, O === "h" ? y : C);
  }, []), l = m.useCallback(function(g) {
    var v = g;
    if (!(!We.length || We[We.length - 1] !== i)) {
      var b = "deltaY" in v ? $r(v) : _t(v), w = t.current.filter(function(S) {
        return S.name === v.type && (S.target === v.target || v.target === S.shadowParent) && ac(S.delta, b);
      })[0];
      if (w && w.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!w) {
        var y = (s.current.shards || []).map(Ir).filter(Boolean).filter(function(S) {
          return S.contains(v.target);
        }), C = y.length > 0 ? a(v, y[0]) : !s.current.noIsolation;
        C && v.cancelable && v.preventDefault();
      }
    }
  }, []), c = m.useCallback(function(g, v, b, w) {
    var y = { name: g, delta: v, target: b, should: w, shadowParent: dc(b) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), u = m.useCallback(function(g) {
    n.current = _t(g), r.current = void 0;
  }, []), p = m.useCallback(function(g) {
    c(g.type, $r(g), g.target, a(g, e.lockRef.current));
  }, []), d = m.useCallback(function(g) {
    c(g.type, _t(g), g.target, a(g, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return We.push(i), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", l, je), document.addEventListener("touchmove", l, je), document.addEventListener("touchstart", u, je), function() {
      We = We.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", l, je), document.removeEventListener("touchmove", l, je), document.removeEventListener("touchstart", u, je);
    };
  }, []);
  var f = e.removeScrollBar, h = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    h ? m.createElement(i, { styles: lc(o) }) : null,
    f ? m.createElement(Jl, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function dc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const fc = zl(zo, uc);
var Wo = m.forwardRef(function(e, t) {
  return m.createElement(Tt, pe({}, e, { ref: t, sideCar: fc }));
});
Wo.classNames = Tt.classNames;
var zt = "Popover", [Uo, ju] = so(zt, [
  Eo
]), mt = Eo(), [gc, Le] = Uo(zt), qo = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !1
  } = e, a = mt(t), l = m.useRef(null), [c, u] = m.useState(!1), [p, d] = _l({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: zt
  });
  return /* @__PURE__ */ x(hl, { ...a, children: /* @__PURE__ */ x(
    gc,
    {
      scope: t,
      contentId: Ys(),
      triggerRef: l,
      open: p,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((f) => !f), [d]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: m.useCallback(() => u(!0), []),
      onCustomAnchorRemove: m.useCallback(() => u(!1), []),
      modal: s,
      children: n
    }
  ) });
};
qo.displayName = zt;
var Xo = "PopoverAnchor", pc = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Le(Xo, n), i = mt(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = o;
    return m.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ x(ko, { ...i, ...r, ref: t });
  }
);
pc.displayName = Xo;
var Zo = "PopoverTrigger", Yo = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Le(Zo, n), i = mt(n), s = Ve(t, o.triggerRef), a = /* @__PURE__ */ x(
      Ee.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ti(o.open),
        ...r,
        ref: s,
        onClick: $e(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ x(ko, { asChild: !0, ...i, children: a });
  }
);
Yo.displayName = Zo;
var kn = "PopoverPortal", [mc, hc] = Uo(kn, {
  forceMount: void 0
}), Ko = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = Le(kn, t);
  return /* @__PURE__ */ x(mc, { scope: t, forceMount: n, children: /* @__PURE__ */ x(Nn, { present: n || i.open, children: /* @__PURE__ */ x(Vo, { asChild: !0, container: o, children: r }) }) });
};
Ko.displayName = kn;
var Je = "PopoverContent", Qo = m.forwardRef(
  (e, t) => {
    const n = hc(Je, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Le(Je, e.__scopePopover);
    return /* @__PURE__ */ x(Nn, { present: r || i.open, children: i.modal ? /* @__PURE__ */ x(vc, { ...o, ref: t }) : /* @__PURE__ */ x(xc, { ...o, ref: t }) });
  }
);
Qo.displayName = Je;
var bc = /* @__PURE__ */ yn("PopoverContent.RemoveScroll"), vc = m.forwardRef(
  (e, t) => {
    const n = Le(Je, e.__scopePopover), r = m.useRef(null), o = Ve(t, r), i = m.useRef(!1);
    return m.useEffect(() => {
      const s = r.current;
      if (s) return Fl(s);
    }, []), /* @__PURE__ */ x(Wo, { as: bc, allowPinchZoom: !0, children: /* @__PURE__ */ x(
      Jo,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: $e(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), i.current || (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: $e(
          e.onPointerDownOutside,
          (s) => {
            const a = s.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0, c = a.button === 2 || l;
            i.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: $e(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), xc = m.forwardRef(
  (e, t) => {
    const n = Le(Je, e.__scopePopover), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ x(
      Jo,
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
), Jo = m.forwardRef(
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
    } = e, d = Le(Je, n), f = mt(n);
    return zs(), /* @__PURE__ */ x(
      uo,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ x(
          lo,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: u,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => d.onOpenChange(!1),
            children: /* @__PURE__ */ x(
              bl,
              {
                "data-state": ti(d.open),
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
), ei = "PopoverClose", wc = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Le(ei, n);
    return /* @__PURE__ */ x(
      Ee.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: $e(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
wc.displayName = ei;
var yc = "PopoverArrow", Cc = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ x(vl, { ...o, ...r, ref: t });
  }
);
Cc.displayName = yc;
function ti(e) {
  return e ? "open" : "closed";
}
var Sc = qo, _c = Yo, Rc = Ko, Ec = Qo;
const Pc = K(
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
), Mc = (e) => {
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
}, Ac = (e) => {
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
}, Vn = m.forwardRef(
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
    ariaHaspopup: h,
    hideOnPrint: g = !1,
    onClose: v,
    autofocusTarget: b = "container",
    preventCloseOnChildOverlayClick: w = !1,
    captureOverscroll: y = !1,
    className: C,
    ...S
  }, E) => {
    const R = (N) => {
      N || v("click-outside");
    }, _ = () => {
      v("escape");
    }, O = (N) => {
      w || v("click-outside");
    }, I = H(
      Pc({
        sectioned: c,
        fullWidth: u,
        fullHeight: p,
        fluidContent: d,
        hideOnPrint: g
      }),
      C
    ), L = Mc(t), P = Ac(n);
    return /* @__PURE__ */ V(Sc, { open: r, onOpenChange: R, children: [
      /* @__PURE__ */ x(_c, { asChild: !0, children: /* @__PURE__ */ x(s, { children: o }) }),
      /* @__PURE__ */ x(Rc, { children: /* @__PURE__ */ x(
        Ec,
        {
          ref: E,
          side: L,
          align: P,
          className: I,
          style: { zIndex: a },
          onEscapeKeyDown: _,
          onInteractOutside: O,
          ...S,
          children: c ? /* @__PURE__ */ x("div", { className: "p-4", children: e }) : e
        }
      ) })
    ] });
  }
);
Vn.displayName = "Popover";
const Fc = K("space-y-1", {
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
}), $c = K(
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
), ni = m.forwardRef(
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
    const h = (b, w) => {
      if (a) return;
      let y;
      o ? w ? y = [...n, b] : y = n.filter((C) => C !== b) : y = w ? [b] : [], l && l(y, r);
    }, g = () => {
      a || l && l([], r);
    }, v = H(
      Fc({
        tone: c === "magic" ? "magic" : "default",
        disabled: a
      }),
      u
    );
    return /* @__PURE__ */ V(
      "fieldset",
      {
        ref: f,
        className: v,
        disabled: a,
        ...d,
        children: [
          !i && /* @__PURE__ */ x("legend", { className: "text-sm font-medium text-gray-900 mb-3", children: e }),
          /* @__PURE__ */ x("div", { children: t.map((b, w) => {
            const y = n.includes(b.value), C = `${r}-${b.value}-${w}`, S = o ? "checkbox" : "radio";
            return /* @__PURE__ */ V(
              "label",
              {
                htmlFor: C,
                className: H(
                  $c({
                    disabled: a || b.disabled,
                    selected: y
                  })
                ),
                children: [
                  /* @__PURE__ */ x(
                    "input",
                    {
                      type: S,
                      id: C,
                      name: o ? `${r}[]` : r,
                      value: b.value,
                      checked: y,
                      disabled: a || b.disabled,
                      onChange: (E) => h(b.value, E.target.checked),
                      className: "mt-0.5 h-4 w-4 text-black rounded hover:bg-gray-400 accent-black"
                    }
                  ),
                  /* @__PURE__ */ V("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ x(le, { variant: "bodyMd", as: "span", children: b.label }),
                    b.helpText && /* @__PURE__ */ x(
                      le,
                      {
                        variant: "bodySm",
                        as: "p",
                        tone: "subdued",
                        className: "mt-1",
                        children: b.helpText
                      }
                    )
                  ] })
                ]
              },
              b.value
            );
          }) }),
          /* @__PURE__ */ x(ne, { variant: "plain", onClick: g, disabled: a, children: "Clear" }),
          s && /* @__PURE__ */ x(le, { variant: "bodySm", tone: "critical", as: "p", className: "mt-2", children: s })
        ]
      }
    );
  }
);
ni.displayName = "ChoiceList";
const Ic = (e) => e && {
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
}[e] || "bg-white", Oc = K(
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
), Nc = (e) => {
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
}, kc = m.forwardRef(
  ({
    children: e,
    background: t = "bg-surface",
    padding: n,
    roundedAbove: r = "sm",
    className: o,
    ...i
  }, s) => {
    const a = H(
      Oc({
        roundedAbove: r
      }),
      Ic(t),
      Nc(n),
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
kc.displayName = "Card";
const Or = (e) => e && {
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
    const r = Or(e);
    return r ? `-m${t}-${r}` : "";
  }
  const n = [];
  return Object.entries(e).forEach(([r, o]) => {
    const i = Or(o);
    if (i) {
      const s = r === "xs" ? "" : `${r}:`;
      n.push(`${s}-m${t}-${i}`);
    }
  }), n.join(" ");
}, Vc = K("", {
  variants: {
    // Base styling variants can be added here if needed
  },
  defaultVariants: {}
}), Lc = m.forwardRef(
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
    const u = H(
      Vc(),
      // Negative margins for bleeding effect
      Ue(t, "x"),
      Ue(n, "y"),
      Ue(r, "t"),
      Ue(o, "b"),
      Ue(i, "l"),
      Ue(s, "r"),
      a
    );
    return /* @__PURE__ */ x("div", { ref: c, className: u, ...l, children: e });
  }
);
Lc.displayName = "Bleed";
const Dc = K(
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
), Tc = K(
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
), zc = K("px-6 py-6", {
  variants: {},
  defaultVariants: {}
}), Bc = m.forwardRef(
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
    filterActions: h = !1,
    additionalMetadata: g,
    onActionRollup: v,
    hasSubtitleMaxWidth: b = !1,
    className: w,
    ...y
  }, C) => {
    const S = s ? "full" : a ? "narrow" : "default", E = (_, O = "secondary") => {
      var L;
      const I = "url" in _ && _.url;
      return /* @__PURE__ */ x(
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
      return d ? /* @__PURE__ */ V("div", { className: "flex items-center justify-between px-6 py-4 bg-white border-t border-[rgb(227,227,227)]", children: [
        /* @__PURE__ */ x(
          ne,
          {
            variant: "secondary",
            disabled: !d.hasPrevious,
            onClick: d.onPrevious,
            url: d.previousURL,
            icon: /* @__PURE__ */ x(Cn, {}),
            accessibilityLabel: ((_ = d.accessibilityLabels) == null ? void 0 : _.previous) || "Previous",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ x(
          ne,
          {
            variant: "secondary",
            disabled: !d.hasNext,
            onClick: d.onNext,
            url: d.nextURL,
            icon: /* @__PURE__ */ x(Sn, {}),
            accessibilityLabel: ((O = d.accessibilityLabels) == null ? void 0 : O.next) || "Next",
            children: "Next"
          }
        )
      ] }) : null;
    };
    return /* @__PURE__ */ V(
      "div",
      {
        ref: C,
        className: H(Dc({ width: S }), w),
        "aria-label": f,
        ...y,
        children: [
          (t || p || l || c.length > 0 || u.length > 0) && /* @__PURE__ */ V("header", { className: H(Tc({ compact: o })), children: [
            p && /* @__PURE__ */ x("div", { className: "mb-4", children: E(p, "secondary") }),
            (t || l || c.length > 0 || u.length > 0) && /* @__PURE__ */ V("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ V("div", { className: "flex-1 min-w-0", children: [
                t && !i && /* @__PURE__ */ V("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ x(le, { as: "h1", variant: "headingLg", fontWeight: "semibold", children: t }),
                  r && /* @__PURE__ */ x("div", { className: "flex items-center", children: r })
                ] }),
                n && /* @__PURE__ */ x(
                  "div",
                  {
                    className: H(
                      "mt-1",
                      b && "max-w-[640px]"
                    ),
                    children: /* @__PURE__ */ x(le, { variant: "bodyMd", tone: "subdued", children: n })
                  }
                ),
                g && /* @__PURE__ */ x("div", { className: "mt-2", children: g })
              ] }),
              (l || c.length > 0 || u.length > 0) && /* @__PURE__ */ x("div", { className: "flex items-center gap-2 ml-4", children: /* @__PURE__ */ V(oo, { children: [
                c.map(
                  (_) => E(_, "secondary")
                ),
                l && E(l, "primary")
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ x("main", { className: H(zc()), children: e }),
          R()
        ]
      }
    );
  }
);
Bc.displayName = "Page";
const ri = K(
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
), Wu = ri, Hc = m.forwardRef(
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
    const c = H(
      ri({
        tone: t,
        size: o,
        progress: n
      }),
      i
    ), u = m.useMemo(() => {
      var p;
      return r ? typeof r == "string" ? r === "placeholder" ? /* @__PURE__ */ x("span", { className: "w-3 h-3 bg-current rounded-full opacity-50 mr-1" }) : /* @__PURE__ */ x("span", { className: "mr-1", children: r }) : m.isValidElement(r) ? m.cloneElement(r, {
        className: H("w-3 h-3 mr-1", (p = r.props) == null ? void 0 : p.className)
      }) : typeof r == "function" ? /* @__PURE__ */ x(r, { className: "w-3 h-3 mr-1" }) : null : null;
    }, [r]);
    return /* @__PURE__ */ V("span", { ref: l, className: c, ...a, children: [
      u,
      e
    ] });
  }
);
Hc.displayName = "Badge";
const Gc = K("flex items-center", {
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
}), Nr = K(
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
), oi = m.forwardRef(
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
    className: h,
    asChild: g = !1,
    ...v
  }, b) => {
    m.useEffect(() => {
      const E = (R) => {
        t != null && t.includes(R.key) && a && p && (R.preventDefault(), p()), e != null && e.includes(R.key) && s && u && (R.preventDefault(), u());
      };
      return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
    }, [t, e, a, s, p, u]);
    const w = c == null ? void 0 : c.previous, y = c == null ? void 0 : c.next, C = () => /* @__PURE__ */ x(
      "button",
      {
        type: "button",
        disabled: !a,
        onClick: p,
        "aria-label": w || "Previous",
        className: H(
          Nr({
            position: d ? "previous" : "single",
            disabled: !a
          })
        ),
        children: /* @__PURE__ */ x(Cn, { className: "size-6" })
      }
    ), S = () => /* @__PURE__ */ x(
      "button",
      {
        type: "button",
        disabled: !s,
        onClick: u,
        "aria-label": y || "Next",
        className: H(
          Nr({
            position: d ? "next" : "single",
            disabled: !s
          })
        ),
        children: /* @__PURE__ */ x(Sn, { className: "size-6" })
      }
    );
    return /* @__PURE__ */ x(
      "nav",
      {
        ref: b,
        "aria-label": l,
        className: H(
          Gc({ type: f, hasLabel: !!d }),
          h
        ),
        ...v,
        children: d ? (
          // With label: Previous - Label - Next (spaced apart)
          /* @__PURE__ */ V(cn, { children: [
            /* @__PURE__ */ x(C, {}),
            /* @__PURE__ */ x("div", { className: "flex-1 flex justify-center", children: typeof d == "string" ? /* @__PURE__ */ x(le, { variant: "bodySm", tone: "subdued", children: d }) : d }),
            /* @__PURE__ */ x(S, {})
          ] })
        ) : (
          // Without label: Connected Previous/Next buttons
          /* @__PURE__ */ V("div", { className: "inline-flex", children: [
            /* @__PURE__ */ x(C, {}),
            /* @__PURE__ */ x(S, {})
          ] })
        )
      }
    );
  }
);
oi.displayName = "Pagination";
const jc = K("w-full", {
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
}), Uu = () => {
  const [e, t] = m.useState(
    "DEFAULT"
    /* Default */
  );
  return { mode: e, setMode: t };
}, Wc = ({
  filter: e,
  disabled: t = !1
}) => {
  const [n, r] = m.useState(!1), o = (a) => {
    e.onChange(a, e.key);
  }, i = () => {
    r(!n);
  }, s = () => {
    r(!1);
  };
  return /* @__PURE__ */ x(
    Vn,
    {
      active: n,
      activator: /* @__PURE__ */ V(
        ne,
        {
          size: "micro",
          variant: "tertiary",
          onClick: i,
          disabled: t,
          pressed: n,
          children: [
            e.label,
            e.selected.length > 0 && /* @__PURE__ */ x("span", { className: "ml-1 px-1.5 py-0.5 text-xs bg-blue-100 text-black rounded-full", children: e.selected.length })
          ]
        }
      ),
      onClose: s,
      preferredPosition: "below",
      sectioned: !0,
      children: /* @__PURE__ */ x(
        ni,
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
}, kr = ({ sortOptions: e, onSort: t, disabled: n }) => {
  const [r, o] = m.useState(!1);
  return /* @__PURE__ */ x(
    Vn,
    {
      active: r,
      activator: /* @__PURE__ */ x(
        ne,
        {
          variant: "tertiary",
          icon: /* @__PURE__ */ x(Yr, { className: "size-4" }),
          disclosure: !0,
          disabled: n,
          onClick: () => o(!r),
          children: "Sort"
        }
      ),
      onClose: () => o(!1),
      children: /* @__PURE__ */ x("div", { className: "p-2 min-w-48", children: e.map((i) => /* @__PURE__ */ V(
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
}, Uc = m.forwardRef(
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
    disableStickyMode: h,
    isFlushWhenSticky: g,
    canCreateNewView: v,
    onCreateNewView: b,
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
    onClearAll: z,
    pinnedFilters: N,
    queryValue: W = "",
    queryPlaceholder: D = "Searching in all..",
    onQueryChange: B,
    onQueryClear: A,
    className: T,
    asChild: q = !1,
    ...M
  }, G) => {
    const [Z, Q] = m.useState(
      c === "FILTERING"
      /* Filtering */
    );
    m.useEffect(() => {
      Q(
        c === "FILTERING"
        /* Filtering */
      );
    }, [c]);
    const ae = () => {
      p(Z ? "DEFAULT" : "FILTERING"), Q(!Z), !Z && l && l(
        "FILTERING"
        /* Filtering */
      );
    }, re = (U) => {
      B && B(U);
    }, ee = () => {
      A && A();
    };
    return /* @__PURE__ */ x(
      "div",
      {
        ref: G,
        className: H(
          jc({ mode: c, disabled: d }),
          T
        ),
        ...M,
        children: /* @__PURE__ */ x("div", { className: "p-1 border border-[#e3e3e3] rounded-md border-b-0 rounded-b-none", children: Z ? /* @__PURE__ */ V("div", { className: "space-y-2", children: [
          /* @__PURE__ */ V("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ x("div", { className: "flex items-center gap-2", children: e && e.length > 0 && /* @__PURE__ */ x(
              kr,
              {
                sortOptions: e,
                onSort: n,
                disabled: d
              }
            ) }),
            /* @__PURE__ */ x("div", { className: "flex-1", children: /* @__PURE__ */ x(
              io,
              {
                label: "",
                labelHidden: !0,
                value: W,
                onChange: re,
                placeholder: D,
                clearButton: W.length > 0,
                onClearButtonClick: ee,
                disabled: f || d,
                autoFocus: R,
                autoComplete: "off",
                size: "slim"
              }
            ) }),
            /* @__PURE__ */ x(
              ne,
              {
                onClick: ae,
                disabled: d,
                size: "medium",
                children: "Cancel"
              }
            )
          ] }),
          N && N.length > 0 && /* @__PURE__ */ x("div", { className: "border-t border-gray-200 pt-0.5", children: /* @__PURE__ */ x("div", { className: "flex flex-wrap gap-2", children: N.map((U) => /* @__PURE__ */ x(
            Wc,
            {
              filter: U,
              disabled: d
            },
            U.key
          )) }) }),
          P && P.length > 0 && /* @__PURE__ */ V("div", { className: "flex flex-wrap gap-2", children: [
            P.map((U) => /* @__PURE__ */ V(
              "div",
              {
                className: "inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-black rounded-md text-sm",
                children: [
                  /* @__PURE__ */ x(le, { variant: "bodySm", children: U.label }),
                  /* @__PURE__ */ x(
                    "button",
                    {
                      onClick: U.onRemove,
                      className: "p-0.5 hover:bg-black rounded",
                      children: /* @__PURE__ */ x(Qr, { className: "size-3" })
                    }
                  )
                ]
              },
              U.key
            )),
            z && /* @__PURE__ */ x(ne, { variant: "plain", size: "micro", onClick: z, children: "Clear all" })
          ] }),
          (s || a) && /* @__PURE__ */ V("div", { className: "flex justify-end gap-2", children: [
            a && /* @__PURE__ */ x(
              ne,
              {
                variant: "secondary",
                onClick: a.onAction,
                disabled: a.disabled,
                loading: a.loading,
                children: "Cancel"
              }
            ),
            s && /* @__PURE__ */ x(
              ne,
              {
                variant: "primary",
                onClick: () => {
                  if (s.type === "save-as" && b) {
                    const U = prompt("Enter view name:");
                    U && s.onAction(U);
                  } else
                    s.onAction();
                },
                disabled: s.disabled,
                loading: s.loading,
                children: s.type === "save" ? "Save" : "Save as"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ V("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ V("div", { className: "flex items-center gap-2", children: [
            e && e.length > 0 && /* @__PURE__ */ x(
              kr,
              {
                sortOptions: e,
                onSort: n,
                disabled: d
              }
            ),
            _ && _.length > 0 && /* @__PURE__ */ x(cn, { children: _.map((U, xe) => /* @__PURE__ */ x(
              ne,
              {
                size: "micro",
                variant: "tertiary",
                pressed: xe === O,
                onClick: () => {
                  U.onAction(), I && I(xe);
                },
                disabled: d,
                children: U.content
              },
              U.id
            )) })
          ] }),
          /* @__PURE__ */ V("div", { className: "flex items-center gap-2", children: [
            E && /* @__PURE__ */ x(
              ne,
              {
                variant: "tertiary",
                icon: /* @__PURE__ */ x(Zr, { className: "size-4" }),
                accessibilityLabel: "Edit columns",
                disabled: d,
                children: "Edit columns"
              }
            ),
            /* @__PURE__ */ x(
              ne,
              {
                variant: "tertiary",
                className: "flex w-12 justify-items-end",
                icon: /* @__PURE__ */ V(cn, { children: [
                  /* @__PURE__ */ x(Xr, { className: "size-5" }),
                  /* @__PURE__ */ x(Ur, { className: "size-5" })
                ] }),
                onClick: ae,
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
Uc.displayName = "IndexFilters";
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
function se(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: Fe(n, r[e])
    }));
  };
}
function Bt(e) {
  return e instanceof Function;
}
function qc(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function Xc(e, t) {
  const n = [], r = (o) => {
    o.forEach((i) => {
      n.push(i);
      const s = t(i);
      s != null && s.length && r(s);
    });
  };
  return r(e), n;
}
function F(e, t, n) {
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
      const u = Math.round((Date.now() - s) * 100) / 100, p = Math.round((Date.now() - c) * 100) / 100, d = p / 16, f = (h, g) => {
        for (h = String(h); h.length < g; )
          h = " " + h;
        return h;
      };
      console.info(`%c⏱ ${f(p, 5)} /${f(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * d, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function $(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: r
  };
}
function Zc(e, t, n, r) {
  const o = () => {
    var s;
    return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
  }, i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: F(() => [e, n, t, i], (s, a, l, c) => ({
      table: s,
      column: a,
      row: l,
      cell: c,
      getValue: c.getValue,
      renderValue: c.renderValue
    }), $(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, n, t, e);
  }, {}), i;
}
function Yc(e, t, n, r) {
  var o, i;
  const a = {
    ...e._getDefaultColumnDef(),
    ...t
  }, l = a.accessorKey;
  let c = (o = (i = a.id) != null ? i : l ? typeof String.prototype.replaceAll == "function" ? l.replaceAll(".", "_") : l.replace(/\./g, "_") : void 0) != null ? o : typeof a.header == "string" ? a.header : void 0, u;
  if (a.accessorFn ? u = a.accessorFn : l && (l.includes(".") ? u = (d) => {
    let f = d;
    for (const g of l.split(".")) {
      var h;
      f = (h = f) == null ? void 0 : h[g], process.env.NODE_ENV !== "production" && f === void 0 && console.warn(`"${g}" in deeply nested key "${l}" returned undefined.`);
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
    getFlatColumns: F(() => [!0], () => {
      var d;
      return [p, ...(d = p.columns) == null ? void 0 : d.flatMap((f) => f.getFlatColumns())];
    }, $(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: F(() => [e._getOrderColumnsFn()], (d) => {
      var f;
      if ((f = p.columns) != null && f.length) {
        let h = p.columns.flatMap((g) => g.getLeafColumns());
        return d(h);
      }
      return [p];
    }, $(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const d of e._features)
    d.createColumn == null || d.createColumn(p, e);
  return p;
}
const te = "debugHeaders";
function Vr(e, t, n) {
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
const Kc = {
  createTable: (e) => {
    e.getHeaderGroups = F(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, s;
      const a = (i = r == null ? void 0 : r.map((p) => n.find((d) => d.id === p)).filter(Boolean)) != null ? i : [], l = (s = o == null ? void 0 : o.map((p) => n.find((d) => d.id === p)).filter(Boolean)) != null ? s : [], c = n.filter((p) => !(r != null && r.includes(p.id)) && !(o != null && o.includes(p.id)));
      return Rt(t, [...a, ...c, ...l], e);
    }, $(e.options, te, "getHeaderGroups")), e.getCenterHeaderGroups = F(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), Rt(t, n, e, "center")), $(e.options, te, "getCenterHeaderGroups")), e.getLeftHeaderGroups = F(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return Rt(t, i, e, "left");
    }, $(e.options, te, "getLeftHeaderGroups")), e.getRightHeaderGroups = F(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return Rt(t, i, e, "right");
    }, $(e.options, te, "getRightHeaderGroups")), e.getFooterGroups = F(() => [e.getHeaderGroups()], (t) => [...t].reverse(), $(e.options, te, "getFooterGroups")), e.getLeftFooterGroups = F(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), $(e.options, te, "getLeftFooterGroups")), e.getCenterFooterGroups = F(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), $(e.options, te, "getCenterFooterGroups")), e.getRightFooterGroups = F(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), $(e.options, te, "getRightFooterGroups")), e.getFlatHeaders = F(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), $(e.options, te, "getFlatHeaders")), e.getLeftFlatHeaders = F(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), $(e.options, te, "getLeftFlatHeaders")), e.getCenterFlatHeaders = F(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), $(e.options, te, "getCenterFlatHeaders")), e.getRightFlatHeaders = F(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), $(e.options, te, "getRightFlatHeaders")), e.getCenterLeafHeaders = F(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), $(e.options, te, "getCenterLeafHeaders")), e.getLeftLeafHeaders = F(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), $(e.options, te, "getLeftLeafHeaders")), e.getRightLeafHeaders = F(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), $(e.options, te, "getRightLeafHeaders")), e.getLeafHeaders = F(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, s, a, l, c;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(s = (a = n[0]) == null ? void 0 : a.headers) != null ? s : [], ...(l = (c = r[0]) == null ? void 0 : c.headers) != null ? l : []].map((u) => u.getLeafHeaders()).flat();
    }, $(e.options, te, "getLeafHeaders"));
  }
};
function Rt(e, t, n, r) {
  var o, i;
  let s = 0;
  const a = function(d, f) {
    f === void 0 && (f = 1), s = Math.max(s, f), d.filter((h) => h.getIsVisible()).forEach((h) => {
      var g;
      (g = h.columns) != null && g.length && a(h.columns, f + 1);
    }, 0);
  };
  a(e);
  let l = [];
  const c = (d, f) => {
    const h = {
      depth: f,
      id: [r, `${f}`].filter(Boolean).join("_"),
      headers: []
    }, g = [];
    d.forEach((v) => {
      const b = [...g].reverse()[0], w = v.column.depth === h.depth;
      let y, C = !1;
      if (w && v.column.parent ? y = v.column.parent : (y = v.column, C = !0), b && (b == null ? void 0 : b.column) === y)
        b.subHeaders.push(v);
      else {
        const S = Vr(n, y, {
          id: [r, f, y.id, v == null ? void 0 : v.id].filter(Boolean).join("_"),
          isPlaceholder: C,
          placeholderId: C ? `${g.filter((E) => E.column === y).length}` : void 0,
          depth: f,
          index: g.length
        });
        S.subHeaders.push(v), g.push(S);
      }
      h.headers.push(v), v.headerGroup = h;
    }), l.push(h), f > 0 && c(g, f - 1);
  }, u = t.map((d, f) => Vr(n, d, {
    depth: s,
    index: f
  }));
  c(u, s - 1), l.reverse();
  const p = (d) => d.filter((h) => h.column.getIsVisible()).map((h) => {
    let g = 0, v = 0, b = [0];
    h.subHeaders && h.subHeaders.length ? (b = [], p(h.subHeaders).forEach((y) => {
      let {
        colSpan: C,
        rowSpan: S
      } = y;
      g += C, b.push(S);
    })) : g = 1;
    const w = Math.min(...b);
    return v = v + w, h.colSpan = g, h.rowSpan = v, {
      colSpan: g,
      rowSpan: v
    };
  });
  return p((o = (i = l[0]) == null ? void 0 : i.headers) != null ? o : []), l;
}
const Qc = (e, t, n, r, o, i, s) => {
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
    getLeafRows: () => Xc(a.subRows, (l) => l.subRows),
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
    getAllCells: F(() => [e.getAllLeafColumns()], (l) => l.map((c) => Zc(e, a, c, c.id)), $(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: F(() => [a.getAllCells()], (l) => l.reduce((c, u) => (c[u.column.id] = u, c), {}), $(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const c = e._features[l];
    c == null || c.createRow == null || c.createRow(a, e);
  }
  return a;
}, Jc = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, ii = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
ii.autoRemove = (e) => de(e);
const si = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
si.autoRemove = (e) => de(e);
const ai = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
ai.autoRemove = (e) => de(e);
const li = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
li.autoRemove = (e) => de(e);
const ci = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
ci.autoRemove = (e) => de(e) || !(e != null && e.length);
const ui = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
ui.autoRemove = (e) => de(e) || !(e != null && e.length);
const di = (e, t, n) => e.getValue(t) === n;
di.autoRemove = (e) => de(e);
const fi = (e, t, n) => e.getValue(t) == n;
fi.autoRemove = (e) => de(e);
const Ln = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
Ln.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, s = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const a = i;
    i = s, s = a;
  }
  return [i, s];
};
Ln.autoRemove = (e) => de(e) || de(e[0]) && de(e[1]);
const Se = {
  includesString: ii,
  includesStringSensitive: si,
  equalsString: ai,
  arrIncludes: li,
  arrIncludesAll: ci,
  arrIncludesSome: ui,
  equals: di,
  weakEquals: fi,
  inNumberRange: Ln
};
function de(e) {
  return e == null || e === "";
}
const eu = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: se("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? Se.includesString : typeof r == "number" ? Se.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? Se.equals : Array.isArray(r) ? Se.arrIncludes : Se.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return Bt(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
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
        if (Lr(o, s, e)) {
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
        return (i = Fe(t, o)) == null ? void 0 : i.filter((s) => {
          const a = n.find((l) => l.id === s.id);
          if (a) {
            const l = a.getFilterFn();
            if (Lr(l, s.value, a))
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
function Lr(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const tu = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), nu = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, ru = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, ou = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, iu = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, su = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!qc(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, s) => i - s);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, au = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), lu = (e, t) => new Set(t.map((n) => n.getValue(e))).size, cu = (e, t) => t.length, tn = {
  sum: tu,
  min: nu,
  max: ru,
  extent: ou,
  mean: iu,
  median: su,
  unique: au,
  uniqueCount: lu,
  count: cu
}, uu = {
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
    onGroupingChange: se("grouping", e),
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
      return Bt(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : tn[e.columnDef.aggregationFn];
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
function du(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const fu = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: se("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = F((n) => [dt(t, n)], (n) => n.findIndex((r) => r.id === e.id), $(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = dt(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = dt(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = F(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
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
      return du(i, n, r);
    }, $(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, nn = () => ({
  left: [],
  right: []
}), gu = {
  getInitialState: (e) => ({
    columnPinning: nn(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: se("columnPinning", e)
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
    e.getCenterVisibleCells = F(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return n.filter((s) => !i.includes(s.column.id));
    }, $(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = F(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), $(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = F(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), $(t.options, "debugRows", "getRightVisibleCells"));
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
    }, e.getLeftLeafColumns = F(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), $(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = F(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), $(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = F(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, $(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function pu(e) {
  return e || (typeof document < "u" ? document : null);
}
const Et = {
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
}), mu = {
  getDefaultColumnDef: () => Et,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: rn(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: se("columnSizing", e),
    onColumnSizingInfoChange: se("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Et.minSize, (r = i ?? e.columnDef.size) != null ? r : Et.size), (o = e.columnDef.maxSize) != null ? o : Et.maxSize);
    }, e.getStart = F((n) => [n, dt(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), $(t.options, "debugColumns", "getStart")), e.getAfter = F((n) => [n, dt(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), $(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
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
        const s = e.getSize(), a = e ? e.getLeafHeaders().map((b) => [b.column.id, b.column.getSize()]) : [[r.id, r.getSize()]], l = on(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, u = (b, w) => {
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
          }), (t.options.columnResizeMode === "onChange" || b === "end") && t.setColumnSizing((y) => ({
            ...y,
            ...c
          })));
        }, p = (b) => u("move", b), d = (b) => {
          u("end", b), t.setColumnSizingInfo((w) => ({
            ...w,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, f = pu(n), h = {
          moveHandler: (b) => p(b.clientX),
          upHandler: (b) => {
            f == null || f.removeEventListener("mousemove", h.moveHandler), f == null || f.removeEventListener("mouseup", h.upHandler), d(b.clientX);
          }
        }, g = {
          moveHandler: (b) => (b.cancelable && (b.preventDefault(), b.stopPropagation()), p(b.touches[0].clientX), !1),
          upHandler: (b) => {
            var w;
            f == null || f.removeEventListener("touchmove", g.moveHandler), f == null || f.removeEventListener("touchend", g.upHandler), b.cancelable && (b.preventDefault(), b.stopPropagation()), d((w = b.touches[0]) == null ? void 0 : w.clientX);
          }
        }, v = hu() ? {
          passive: !1
        } : !1;
        on(i) ? (f == null || f.addEventListener("touchmove", g.moveHandler, v), f == null || f.addEventListener("touchend", g.upHandler, v)) : (f == null || f.addEventListener("mousemove", h.moveHandler, v), f == null || f.addEventListener("mouseup", h.upHandler, v)), t.setColumnSizingInfo((b) => ({
          ...b,
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
let Pt = null;
function hu() {
  if (typeof Pt == "boolean") return Pt;
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
  return Pt = e, Pt;
}
function on(e) {
  return e.type === "touchstart";
}
const bu = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: se("columnVisibility", e)
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
    e._getAllVisibleCells = F(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), $(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = F(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], $(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, r) => F(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), $(e.options, "debugColumns", n));
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
function dt(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const vu = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, xu = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: se("globalFilter", e),
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
      return Bt(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : Se[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, wu = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: se("expanded", e),
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
}, hn = 0, bn = 10, sn = () => ({
  pageIndex: hn,
  pageSize: bn
}), yu = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...sn(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: se("pagination", e)
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
      e.setPageIndex(r ? hn : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : hn);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? bn : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : bn);
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
    }), e.getPageOptions = F(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, s) => s)), o;
    }, $(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}), Cu = {
  getInitialState: (e) => ({
    rowPinning: an(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: se("rowPinning", e)
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
            top: ((p = l == null ? void 0 : l.top) != null ? p : []).filter((g) => !(a != null && a.has(g))),
            bottom: [...((d = l == null ? void 0 : l.bottom) != null ? d : []).filter((g) => !(a != null && a.has(g))), ...Array.from(a)]
          };
        }
        if (n === "top") {
          var f, h;
          return {
            top: [...((f = l == null ? void 0 : l.top) != null ? f : []).filter((g) => !(a != null && a.has(g))), ...Array.from(a)],
            bottom: ((h = l == null ? void 0 : l.bottom) != null ? h : []).filter((g) => !(a != null && a.has(g)))
          };
        }
        return {
          top: ((c = l == null ? void 0 : l.top) != null ? c : []).filter((g) => !(a != null && a.has(g))),
          bottom: ((u = l == null ? void 0 : l.bottom) != null ? u : []).filter((g) => !(a != null && a.has(g)))
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
    }, e.getTopRows = F(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), $(e.options, "debugRows", "getTopRows")), e.getBottomRows = F(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), $(e.options, "debugRows", "getBottomRows")), e.getCenterRows = F(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, $(e.options, "debugRows", "getCenterRows"));
  }
}, Su = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: se("rowSelection", e),
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
        vn(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = F(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? ln(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, $(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = F(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? ln(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, $(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = F(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? ln(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, $(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
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
        return vn(a, e.id, n, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, t), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Dn(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return xn(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return xn(e, n) === "all";
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
}, vn = (e, t, n, r, o) => {
  var i;
  const s = o.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), s.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((a) => vn(e, a.id, n, r, o));
};
function ln(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(s, a) {
    return s.map((l) => {
      var c;
      const u = Dn(l, n);
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
function Dn(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function xn(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (Dn(s, t) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const a = xn(s, t);
      a === "all" ? i = !0 : (a === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const wn = /([0-9]+)/gm, _u = (e, t, n) => gi(ke(e.getValue(n)).toLowerCase(), ke(t.getValue(n)).toLowerCase()), Ru = (e, t, n) => gi(ke(e.getValue(n)), ke(t.getValue(n))), Eu = (e, t, n) => Tn(ke(e.getValue(n)).toLowerCase(), ke(t.getValue(n)).toLowerCase()), Pu = (e, t, n) => Tn(ke(e.getValue(n)), ke(t.getValue(n))), Mu = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, Au = (e, t, n) => Tn(e.getValue(n), t.getValue(n));
function Tn(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function ke(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function gi(e, t) {
  const n = e.split(wn).filter(Boolean), r = t.split(wn).filter(Boolean);
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
const ut = {
  alphanumeric: _u,
  alphanumericCaseSensitive: Ru,
  text: Eu,
  textCaseSensitive: Pu,
  datetime: Mu,
  basic: Au
}, Fu = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: se("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return ut.datetime;
        if (typeof i == "string" && (r = !0, i.split(wn).length > 1))
          return ut.alphanumeric;
      }
      return r ? ut.text : ut.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Bt(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : ut[e.columnDef.sortingFn];
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
}, $u = [
  Kc,
  bu,
  fu,
  gu,
  Jc,
  eu,
  vu,
  //depends on ColumnFaceting
  xu,
  //depends on ColumnFiltering
  Fu,
  uu,
  //depends on RowSorting
  wu,
  yu,
  Cu,
  Su,
  mu
];
function Iu(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...$u, ...(t = e._features) != null ? t : []];
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
      const f = Fe(d, o.options);
      o.options = s(f);
    },
    getState: () => o.options.state,
    setState: (d) => {
      o.options.onStateChange == null || o.options.onStateChange(d);
    },
    _getRowId: (d, f, h) => {
      var g;
      return (g = o.options.getRowId == null ? void 0 : o.options.getRowId(d, f, h)) != null ? g : `${h ? [h.id, f].join(".") : f}`;
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
    _getDefaultColumnDef: F(() => [o.options.defaultColumn], (d) => {
      var f;
      return d = (f = d) != null ? f : {}, {
        header: (h) => {
          const g = h.header.column.columnDef;
          return g.accessorKey ? g.accessorKey : g.accessorFn ? g.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (h) => {
          var g, v;
          return (g = (v = h.renderValue()) == null || v.toString == null ? void 0 : v.toString()) != null ? g : null;
        },
        ...o._features.reduce((h, g) => Object.assign(h, g.getDefaultColumnDef == null ? void 0 : g.getDefaultColumnDef()), {}),
        ...d
      };
    }, $(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: F(() => [o._getColumnDefs()], (d) => {
      const f = function(h, g, v) {
        return v === void 0 && (v = 0), h.map((b) => {
          const w = Yc(o, b, v, g), y = b;
          return w.columns = y.columns ? f(y.columns, w, v + 1) : [], w;
        });
      };
      return f(d);
    }, $(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: F(() => [o.getAllColumns()], (d) => d.flatMap((f) => f.getFlatColumns()), $(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: F(() => [o.getAllFlatColumns()], (d) => d.reduce((f, h) => (f[h.id] = h, f), {}), $(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: F(() => [o.getAllColumns(), o._getOrderColumnsFn()], (d, f) => {
      let h = d.flatMap((g) => g.getLeafColumns());
      return f(h);
    }, $(e, "debugColumns", "getAllLeafColumns")),
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
function Ou() {
  return (e) => F(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const a = [];
      for (let c = 0; c < o.length; c++) {
        const u = Qc(e, e._getRowId(o[c], c, s), o[c], c, i, void 0, s == null ? void 0 : s.id);
        if (n.flatRows.push(u), n.rowsById[u.id] = u, a.push(u), e.options.getSubRows) {
          var l;
          u.originalSubRows = e.options.getSubRows(o[c], c), (l = u.originalSubRows) != null && l.length && (u.subRows = r(u.originalSubRows, i + 1, u));
        }
      }
      return a;
    };
    return n.rows = r(t), n;
  }, $(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
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
function Dr(e, t) {
  return e ? Nu(e) ? /* @__PURE__ */ m.createElement(e, t) : e : null;
}
function Nu(e) {
  return ku(e) || typeof e == "function" || Vu(e);
}
function ku(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function Vu(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Lu(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = m.useState(() => ({
    current: Iu(t)
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
const kt = m.forwardRef(
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
        onChange: (l) => t == null ? void 0 : t(l.target.checked),
        disabled: n,
        "aria-label": r,
        className: H(
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
kt.displayName = "Checkbox";
const Du = K(
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
), qe = K(
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
), pi = K("p-2 whitespace-nowrap text-sm text-gray-900", {
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
}), mi = m.forwardRef(
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
    onSort: h,
    sortToggleLabels: g,
    hasZebraStriping: v = !1,
    pagination: b,
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
    hasIndexFilters: z = !1,
    ...N
  }, W) => {
    const D = m.useMemo(() => L && P ? Lu({
      data: L,
      columns: P,
      getCoreRowModel: Ou()
    }) : null, [L, P]), B = () => {
      const T = typeof y == "number" && y > 0 || y === "All", q = () => !n || n.length === 0 || !T ? null : /* @__PURE__ */ x("div", { className: "flex items-center gap-2 ml-auto", children: n.map((M, G) => "actions" in M ? M.actions.map((Z, Q) => /* @__PURE__ */ x(
        ne,
        {
          variant: "primary",
          size: "slim",
          onClick: Z.onAction,
          disabled: Z.disabled,
          tone: Z.destructive ? "critical" : void 0,
          children: Z.content
        },
        `${G}-${Q}`
      )) : /* @__PURE__ */ x(
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
      return D ? /* @__PURE__ */ x("thead", { children: D.getHeaderGroups().map((M) => /* @__PURE__ */ V("tr", { children: [
        c && /* @__PURE__ */ x(
          "th",
          {
            className: H(
              qe({
                isSelectionColumn: !0
              })
            ),
            children: /* @__PURE__ */ x(
              kt,
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
        T ? /* @__PURE__ */ x(
          "th",
          {
            colSpan: M.headers.length,
            className: H(
              qe({
                alignment: "start"
              }),
              "text-left"
            ),
            children: /* @__PURE__ */ V("div", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ x(le, { variant: "bodyMd", as: "span", children: y === "All" ? `All ${(C == null ? void 0 : C.plural) || "items"} selected` : `${y} ${y === 1 ? (C == null ? void 0 : C.singular) || "item" : (C == null ? void 0 : C.plural) || "items"} selected` }),
              q()
            ] })
          }
        ) : M.headers.map((G, Z) => /* @__PURE__ */ x(
          "th",
          {
            className: H(
              qe({
                alignment: "start",
                sortable: G.column.getCanSort(),
                sticky: l && Z === M.headers.length - 1
              })
            ),
            children: G.isPlaceholder ? null : Dr(
              G.column.columnDef.header,
              G.getContext()
            )
          },
          G.id
        ))
      ] }, M.id)) }) : /* @__PURE__ */ x("thead", { children: /* @__PURE__ */ V("tr", { children: [
        c && /* @__PURE__ */ x(
          "th",
          {
            className: H(
              qe({
                isSelectionColumn: !0
              })
            ),
            children: /* @__PURE__ */ x(
              kt,
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
        T ? /* @__PURE__ */ x(
          "th",
          {
            colSpan: e.length,
            className: H(
              qe({
                alignment: "start"
              }),
              "text-left"
            ),
            children: /* @__PURE__ */ V("div", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ x(le, { variant: "bodyMd", as: "span", children: y === "All" ? `All ${(C == null ? void 0 : C.plural) || "items"} selected` : `${y} ${y === 1 ? (C == null ? void 0 : C.singular) || "item" : (C == null ? void 0 : C.plural) || "items"} selected` }),
              q()
            ] })
          }
        ) : e.map((M, G) => /* @__PURE__ */ x(
          "th",
          {
            className: H(
              qe({
                alignment: M.alignment || "start",
                sortable: (u == null ? void 0 : u[G]) || !1,
                sticky: l && G === e.length - 1
              })
            ),
            children: /* @__PURE__ */ x(le, { variant: "bodyMd", fontWeight: "semibold", children: (typeof M.title == "string", M.title) })
          },
          G
        ))
      ] }) });
    }, A = () => {
      var q;
      if (D)
        return /* @__PURE__ */ x("tbody", { children: (q = D.getRowModel().rows) != null && q.length ? D.getRowModel().rows.map((M) => /* @__PURE__ */ x("tr", { className: "hover:bg-gray-50", children: M.getVisibleCells().map((G, Z) => /* @__PURE__ */ x(
          "td",
          {
            className: H(
              pi({
                alignment: "start",
                sticky: l && Z === M.getVisibleCells().length - 1
              })
            ),
            children: Dr(
              G.column.columnDef.cell,
              G.getContext()
            )
          },
          G.id
        )) }, M.id)) : /* @__PURE__ */ x("tr", { children: /* @__PURE__ */ x(
          "td",
          {
            colSpan: (P == null ? void 0 : P.length) || e.length,
            className: "h-24 text-center",
            children: o || /* @__PURE__ */ x(le, { variant: "bodyMd", tone: "subdued", children: "No results." })
          }
        ) }) });
      const T = m.Children.map(r, (M) => m.isValidElement(M) && M.type === zn ? m.cloneElement(M, {
        selectable: c,
        onSelectionChange: _,
        resourceName: C,
        ...M.props
      }) : M);
      return /* @__PURE__ */ x("tbody", { children: T });
    };
    return w === 0 && o ? /* @__PURE__ */ x("div", { className: "flex items-center justify-center p-8", children: o }) : /* @__PURE__ */ V("div", { className: "overflow-x-auto", children: [
      /* @__PURE__ */ V(
        "table",
        {
          ref: W,
          className: H(
            Du({
              condensed: R,
              hasZebraStriping: v,
              loading: S,
              hasIndexFilters: z
            }),
            O
          ),
          ...N,
          children: [
            B(),
            A()
          ]
        }
      ),
      b && /* @__PURE__ */ x("div", { className: "", children: /* @__PURE__ */ x(oi, { type: "table", ...b }) })
    ] });
  }
);
mi.displayName = "IndexTable";
const zn = m.forwardRef(
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
    resourceName: h,
    ...g
  }, v) => {
    const b = K(
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
    return /* @__PURE__ */ V(
      "tr",
      {
        ref: v,
        className: H(
          b({
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
        ...g,
        children: [
          d && /* @__PURE__ */ x(
            "td",
            {
              className: H(
                pi({
                  isSelectionColumn: !0
                })
              ),
              children: /* @__PURE__ */ x(
                kt,
                {
                  checked: n === !0,
                  onChange: (y) => {
                    f && f("single", y, t, r);
                  },
                  disabled: i,
                  "aria-label": l || `Select ${(h == null ? void 0 : h.singular) || "item"}`
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
zn.displayName = "IndexTable.Row";
const hi = m.forwardRef(
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
    const u = K("border-gray-200 text-xs", {
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
        ref: c,
        id: t,
        className: H(u({ flush: o }), r),
        colSpan: i,
        scope: s,
        headers: a,
        ...l,
        children: n
      }
    );
  }
);
hi.displayName = "IndexTable.Cell";
const qu = (e, t) => {
  const [n, r] = m.useState(
    (t == null ? void 0 : t.selectedResources) || []
  ), [o, i] = m.useState(
    (t == null ? void 0 : t.allResourcesSelected) || !1
  ), s = m.useCallback(
    (l, c, u, p) => {
      if (l === "single" && typeof u == "string")
        r(
          c ? (d) => d.includes(u) ? d.filter((f) => f !== u) : [...d, u] : [u]
        );
      else if (l === "multiple" && typeof u == "object") {
        const { start: d, end: f } = u, h = e.slice(d, f + 1).map((g) => g.id);
        r(c ? (g) => [.../* @__PURE__ */ new Set([...g, ...h])] : h);
      } else if (l === "page")
        if (c) {
          const d = e.map((f) => f.id);
          r(d), i(!1);
        } else
          r([]), i(!1);
      else l === "all" && (i(c), c && r([]));
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
}, bi = mi;
bi.Row = zn;
bi.Cell = hi;
export {
  Hc as Badge,
  Lc as Bleed,
  Ss as Box,
  ne as Button,
  oo as ButtonGroup,
  kc as Card,
  ni as ChoiceList,
  Uc as IndexFilters,
  bi as IndexTable,
  Bc as Page,
  oi as Pagination,
  Vn as Popover,
  le as Text,
  io as TextField,
  Wu as badgeVariants,
  Vc as bleedVariants,
  Cs as boxVariants,
  bs as buttonGroupVariants,
  ms as buttonVariants,
  H as cn,
  jc as indexFiltersVariants,
  Du as indexTableVariants,
  Gc as paginationVariants,
  Oc as polarisCardVariants,
  Fc as polarisChoiceListVariants,
  Dc as polarisPageVariants,
  Pc as polarisPopoverVariants,
  Rs as textFieldVariants,
  _s as textVariants,
  qu as useIndexResourceState,
  Uu as useSetIndexFiltersMode
};
//# sourceMappingURL=index.js.map
