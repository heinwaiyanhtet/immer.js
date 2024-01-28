"use strict";
var ne = Object.defineProperty;
var xe = Object.getOwnPropertyDescriptor;
var be = Object.getOwnPropertyNames;
var Te = Object.prototype.hasOwnProperty;

var Ae = (e, t) => {
        for (var r in t) ne(e, r, {
            get: t[r],
            enumerable: !0
        })
    },
    Ie = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of be(t)) !Te.call(e, i) && i !== r && ne(e, i, {
                get: () => t[i],
                enumerable: !(n = xe(t, i)) || n.enumerable
            });
        return e
    };
var De = e => Ie(ne({}, "__esModule", {
    value: !0
}), e);
var Be = {};
Ae(Be, {
    Immer: () => J,
    applyPatches: () => Ce,
    castDraft: () => ke,
    castImmutable: () => Ke,
    createDraft: () => Re,
    current: () => re,
    enableMapSet: () => ge,
    enablePatches: () => Pe,
    finishDraft: () => ve,
    freeze: () => K,
    immerable: () => N,
    isDraft: () => O,
    isDraftable: () => A,
    nothing: () => z,
    original: () => le,
    produce: () => Fe,
    produceWithPatches: () => Ne,
    setAutoFreeze: () => je,
    setUseStrictShallowCopy: () => ze
});
module.exports = De(Be);
var z = Symbol.for("immer-nothing"),
    N = Symbol.for("immer-draftable"),
    f = Symbol.for("immer-state");

function h(e, ...t) {
    throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
}
var j = Object.getPrototypeOf;

function O(e) {
    return !!e && !!e[f]
}

function A(e) {
    return e ? ye(e) || Array.isArray(e) || !!e[N] || !!e.constructor?.[N] || v(e) || k(e) : !1
}
var Oe = Object.prototype.constructor.toString();

function ye(e) {
    if (!e || typeof e != "object") return !1;
    let t = j(e);
    if (t === null) return !0;
    let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Oe
}

function le(e) {
    return O(e) || h(15, e), e[f].t
}

function M(e, t) {
    C(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
        t(r, n, e)
    }) : e.forEach((r, n) => t(n, r, e))
}

function C(e) {
    let t = e[f];
    return t ? t.o : Array.isArray(e) ? 1 : v(e) ? 2 : k(e) ? 3 : 0
}

function R(e, t) {
    return C(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function X(e, t) {
    return C(e) === 2 ? e.get(t) : e[t]
}

function Q(e, t, r) {
    let n = C(e);
    n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r
}

function pe(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}

function v(e) {
    return e instanceof Map
}

function k(e) {
    return e instanceof Set
}

function T(e) {
    return e.e || e.t
}

function L(e, t) {
    if (v(e)) return new Map(e);
    if (k(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    if (!t && ye(e)) return j(e) ? {
        ...e
    } : Object.assign(Object.create(null), e);
    let r = Object.getOwnPropertyDescriptors(e);
    delete r[f];
    let n = Reflect.ownKeys(r);
    for (let i = 0; i < n.length; i++) {
        let c = n[i],
            y = r[c];
        y.writable === !1 && (y.writable = !0, y.configurable = !0), (y.get || y.set) && (r[c] = {
            configurable: !0,
            writable: !0,
            enumerable: y.enumerable,
            value: e[c]
        })
    }
    return Object.create(j(e), r)
}

function K(e, t = !1) {
    return $(e) || O(e) || !A(e) || (C(e) > 1 && (e.set = e.add = e.clear = e.delete = _e), Object.freeze(e), t && M(e, (r, n) => K(n, !0), !0)), e
}

function _e() {
    h(2)
}

function $(e) {
    return Object.isFrozen(e)
}
var ae = {};

function w(e) {
    let t = ae[e];
    return t || h(0, e), t
}

function Y(e, t) {
    ae[e] || (ae[e] = t)
}
var U;

function B() {
    return U
}

function Me(e, t) {
    return {
        a: [],
        i: e,
        p: t,
        P: !0,
        d: 0
    }
}

function oe(e, t) {
    t && (w("Patches"), e.f = [], e.h = [], e.b = t)
}

function V(e) {
    Z(e), e.a.forEach(we), e.a = null
}

function Z(e) {
    e === U && (U = e.i)
}

function ie(e) {
    return U = Me(U, e)
}

function we(e) {
    let t = e[f];
    t.o === 0 || t.o === 1 ? t.x() : t.m = !0
}

function se(e, t) {
    t.d = t.a.length;
    let r = t.a[0];
    return e !== void 0 && e !== r ? (r[f].s && (V(t), h(4)), A(e) && (e = ee(t, e), t.i || te(t, e)), t.f && w("Patches").T(r[f].t, e, t.f, t.h)) : e = ee(t, r, []), V(t), t.f && t.b(t.f, t.h), e !== z ? e : void 0
}

function ee(e, t, r) {
    if ($(t)) return t;
    let n = t[f];
    if (!n) return M(t, (i, c) => de(e, n, t, i, c, r), !0), t;
    if (n.n !== e) return t;
    if (!n.s) return te(e, n.t, !0), n.t;
    if (!n.c) {
        n.c = !0, n.n.d--;
        let i = n.e,
            c = i,
            y = !1;
        n.o === 3 && (c = new Set(i), i.clear(), y = !0), M(c, (u, b) => de(e, n, i, u, b, r, y)), te(e, i, !1), r && e.f && w("Patches").g(n, r, e.f, e.h)
    }
    return n.e
}

function de(e, t, r, n, i, c, y) {
    if (O(i)) {
        let u = c && t && t.o !== 3 && !R(t.r, n) ? c.concat(n) : void 0,
            b = ee(e, i, u);
        if (Q(r, n, b), O(b)) e.P = !1;
        else return
    } else y && r.add(i);
    if (A(i) && !$(i)) {
        if (!e.p.y && e.d < 1) return;
        ee(e, i), (!t || !t.n.i) && te(e, i)
    }
}

function te(e, t, r = !1) {
    !e.i && e.p.y && e.P && K(t, r)
}

function he(e, t) {
    let r = Array.isArray(e),
        n = {
            o: r ? 1 : 0,
            n: t ? t.n : B(),
            s: !1,
            c: !1,
            r: {},
            i: t,
            t: e,
            u: null,
            e: null,
            x: null,
            l: !1
        },
        i = n,
        c = ue;
    r && (i = [n], c = q);
    let {
        revoke: y,
        proxy: u
    } = Proxy.revocable(i, c);
    return n.u = u, n.x = y, u
}
var ue = {
        get(e, t) {
            if (t === f) return e;
            let r = T(e);
            if (!R(r, t)) return Ee(e, r, t);
            let n = r[t];
            return e.c || !A(n) ? n : n === ce(e.t, t) ? (fe(e), e.e[t] = W(n, e)) : n
        },
        has(e, t) {
            return t in T(e)
        },
        ownKeys(e) {
            return Reflect.ownKeys(T(e))
        },
        set(e, t, r) {
            let n = me(T(e), t);
            if (n?.set) return n.set.call(e.u, r), !0;
            if (!e.s) {
                let i = ce(T(e), t),
                    c = i?.[f];
                if (c && c.t === r) return e.e[t] = r, e.r[t] = !1, !0;
                if (pe(r, i) && (r !== void 0 || R(e.t, t))) return !0;
                fe(e), E(e)
            }
            return e.e[t] === r && (r !== void 0 || t in e.e) || Number.isNaN(r) && Number.isNaN(e.e[t]) || (e.e[t] = r, e.r[t] = !0), !0
        },
        deleteProperty(e, t) {
            return ce(e.t, t) !== void 0 || t in e.t ? (e.r[t] = !1, fe(e), E(e)) : delete e.r[t], e.e && delete e.e[t], !0
        },
        getOwnPropertyDescriptor(e, t) {
            let r = T(e),
                n = Reflect.getOwnPropertyDescriptor(r, t);
            return n && {
                writable: !0,
                configurable: e.o !== 1 || t !== "length",
                enumerable: n.enumerable,
                value: r[t]
            }
        },
        defineProperty() {
            h(11)
        },
        getPrototypeOf(e) {
            return j(e.t)
        },
        setPrototypeOf() {
            h(12)
        }
    },
    q = {};
M(ue, (e, t) => {
    q[e] = function() {
        return arguments[0] = arguments[0][0], t.apply(this, arguments)
    }
});
q.deleteProperty = function(e, t) {
    return q.set.call(this, e, t, void 0)
};
q.set = function(e, t, r) {
    return ue.set.call(this, e[0], t, r, e[0])
};

function ce(e, t) {
    let r = e[f];
    return (r ? T(r) : e)[t]
}

function Ee(e, t, r) {
    let n = me(t, r);
    return n ? "value" in n ? n.value : n.get?.call(e.u) : void 0
}

function me(e, t) {
    if (!(t in e)) return;
    let r = j(e);
    for (; r;) {
        let n = Object.getOwnPropertyDescriptor(r, t);
        if (n) return n;
        r = j(r)
    }
}

function E(e) {
    e.s || (e.s = !0, e.i && E(e.i))
}

function fe(e) {
    e.e || (e.e = L(e.t, e.n.p.S))
}
var J = class {
    constructor(t) {
        this.y = !0;
        this.S = !1;
        this.produce = (t, r, n) => {
            if (typeof t == "function" && typeof r != "function") {
                let c = r;
                r = t;
                let y = this;
                return function(b = c, ...a) {
                    return y.produce(b, o => r.call(this, o, ...a))
                }
            }
            typeof r != "function" && h(6), n !== void 0 && typeof n != "function" && h(7);
            let i;
            if (A(t)) {
                let c = ie(this),
                    y = W(t, void 0),
                    u = !0;
                try {
                    i = r(y), u = !1
                } finally {
                    u ? V(c) : Z(c)
                }
                return oe(c, n), se(i, c)
            } else if (!t || typeof t != "object") {
                if (i = r(t), i === void 0 && (i = t), i === z && (i = void 0), this.y && K(i, !0), n) {
                    let c = [],
                        y = [];
                    w("Patches").T(t, i, c, y), n(c, y)
                }
                return i
            } else h(1, t)
        };
        this.produceWithPatches = (t, r) => {
            if (typeof t == "function") return (y, ...u) => this.produceWithPatches(y, b => t(b, ...u));
            let n, i;
            return [this.produce(t, r, (y, u) => {
                n = y, i = u
            }), n, i]
        };
        typeof t?.autoFreeze == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof t?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy)
    }
    createDraft(t) {
        A(t) || h(8), O(t) && (t = re(t));
        let r = ie(this),
            n = W(t, void 0);
        return n[f].l = !0, Z(r), n
    }
    finishDraft(t, r) {
        let n = t && t[f];
        (!n || !n.l) && h(9);
        let {
            n: i
        } = n;
        return oe(i, r), se(void 0, i)
    }
    setAutoFreeze(t) {
        this.y = t
    }
    setUseStrictShallowCopy(t) {
        this.S = t
    }
    applyPatches(t, r) {
        let n;
        for (n = r.length - 1; n >= 0; n--) {
            let c = r[n];
            if (c.path.length === 0 && c.op === "replace") {
                t = c.value;
                break
            }
        }
        n > -1 && (r = r.slice(n + 1));
        let i = w("Patches").A;
        return O(t) ? i(t, r) : this.produce(t, c => i(c, r))
    }
};

function W(e, t) {
    let r = v(e) ? w("MapSet").I(e, t) : k(e) ? w("MapSet").D(e, t) : he(e, t);
    return (t ? t.n : B()).a.push(r), r
}

function re(e) {
    return O(e) || h(10, e), Se(e)
}

function Se(e) {
    if (!A(e) || $(e)) return e;
    let t = e[f],
        r;
    if (t) {
        if (!t.s) return t.t;
        t.c = !0, r = L(e, t.n.p.S)
    } else r = L(e, !0);
    return M(r, (n, i) => {
        Q(r, n, Se(i))
    }), t && (t.c = !1), r
}

function Pe() {
    let t = "replace",
        r = "add",
        n = "remove";

    function i(s, S, m, g) {
        switch (s.o) {
            case 0:
            case 2:
                return y(s, S, m, g);
            case 1:
                return c(s, S, m, g);
            case 3:
                return u(s, S, m, g)
        }
    }

    function c(s, S, m, g) {
        let {
            t: I,
            r: P
        } = s, x = s.e;
        x.length < I.length && ([I, x] = [x, I], [m, g] = [g, m]);
        for (let l = 0; l < I.length; l++)
            if (P[l] && x[l] !== I[l]) {
                let d = S.concat([l]);
                m.push({
                    op: t,
                    path: d,
                    value: p(x[l])
                }), g.push({
                    op: t,
                    path: d,
                    value: p(I[l])
                })
            } for (let l = I.length; l < x.length; l++) {
            let d = S.concat([l]);
            m.push({
                op: r,
                path: d,
                value: p(x[l])
            })
        }
        for (let l = x.length - 1; I.length <= l; --l) {
            let d = S.concat([l]);
            g.push({
                op: n,
                path: d
            })
        }
    }

    function y(s, S, m, g) {
        let {
            t: I,
            e: P
        } = s;
        M(s.r, (x, l) => {
            let d = X(I, x),
                H = X(P, x),
                F = l ? R(I, x) ? t : r : n;
            if (d === H && F === t) return;
            let D = S.concat(x);
            m.push(F === n ? {
                op: F,
                path: D
            } : {
                op: F,
                path: D,
                value: H
            }), g.push(F === r ? {
                op: n,
                path: D
            } : F === n ? {
                op: r,
                path: D,
                value: p(d)
            } : {
                op: t,
                path: D,
                value: p(d)
            })
        })
    }

    function u(s, S, m, g) {
        let {
            t: I,
            e: P
        } = s, x = 0;
        I.forEach(l => {
            if (!P.has(l)) {
                let d = S.concat([x]);
                m.push({
                    op: n,
                    path: d,
                    value: l
                }), g.unshift({
                    op: r,
                    path: d,
                    value: l
                })
            }
            x++
        }), x = 0, P.forEach(l => {
            if (!I.has(l)) {
                let d = S.concat([x]);
                m.push({
                    op: r,
                    path: d,
                    value: l
                }), g.unshift({
                    op: n,
                    path: d,
                    value: l
                })
            }
            x++
        })
    }

    function b(s, S, m, g) {
        m.push({
            op: t,
            path: [],
            value: S === z ? void 0 : S
        }), g.push({
            op: t,
            path: [],
            value: s
        })
    }

    function a(s, S) {
        return S.forEach(m => {
            let {
                path: g,
                op: I
            } = m, P = s;
            for (let H = 0; H < g.length - 1; H++) {
                let F = C(P),
                    D = g[H];
                typeof D != "string" && typeof D != "number" && (D = "" + D), (F === 0 || F === 1) && (D === "__proto__" || D === "constructor") && h(16 + 3), typeof P == "function" && D === "prototype" && h(16 + 3), P = X(P, D), typeof P != "object" && h(16 + 2, g.join("/"))
            }
            let x = C(P),
                l = o(m.value),
                d = g[g.length - 1];
            switch (I) {
                case t:
                    switch (x) {
                        case 2:
                            return P.set(d, l);
                        case 3:
                            h(16);
                        default:
                            return P[d] = l
                    }
                case r:
                    switch (x) {
                        case 1:
                            return d === "-" ? P.push(l) : P.splice(d, 0, l);
                        case 2:
                            return P.set(d, l);
                        case 3:
                            return P.add(l);
                        default:
                            return P[d] = l
                    }
                case n:
                    switch (x) {
                        case 1:
                            return P.splice(d, 1);
                        case 2:
                            return P.delete(d);
                        case 3:
                            return P.delete(m.value);
                        default:
                            return delete P[d]
                    }
                default:
                    h(16 + 1, I)
            }
        }), s
    }

    function o(s) {
        if (!A(s)) return s;
        if (Array.isArray(s)) return s.map(o);
        if (v(s)) return new Map(Array.from(s.entries()).map(([m, g]) => [m, o(g)]));
        if (k(s)) return new Set(Array.from(s).map(o));
        let S = Object.create(j(s));
        for (let m in s) S[m] = o(s[m]);
        return R(s, N) && (S[N] = s[N]), S
    }

    function p(s) {
        return O(s) ? o(s) : s
    }
    Y("Patches", {
        A: a,
        g: i,
        T: b
    })
}

function ge() {
    class e extends Map {
        constructor(a, o) {
            super();
            this[f] = {
                o: 2,
                i: o,
                n: o ? o.n : B(),
                s: !1,
                c: !1,
                e: void 0,
                r: void 0,
                t: a,
                u: this,
                l: !1,
                m: !1
            }
        }
        get size() {
            return T(this[f]).size
        }
        has(a) {
            return T(this[f]).has(a)
        }
        set(a, o) {
            let p = this[f];
            return y(p), (!T(p).has(a) || T(p).get(a) !== o) && (r(p), E(p), p.r.set(a, !0), p.e.set(a, o), p.r.set(a, !0)), this
        }
        delete(a) {
            if (!this.has(a)) return !1;
            let o = this[f];
            return y(o), r(o), E(o), o.t.has(a) ? o.r.set(a, !1) : o.r.delete(a), o.e.delete(a), !0
        }
        clear() {
            let a = this[f];
            y(a), T(a).size && (r(a), E(a), a.r = new Map, M(a.t, o => {
                a.r.set(o, !1)
            }), a.e.clear())
        }
        forEach(a, o) {
            let p = this[f];
            T(p).forEach((s, S, m) => {
                a.call(o, this.get(S), S, this)
            })
        }
        get(a) {
            let o = this[f];
            y(o);
            let p = T(o).get(a);
            if (o.c || !A(p) || p !== o.t.get(a)) return p;
            let s = W(p, o);
            return r(o), o.e.set(a, s), s
        }
        keys() {
            return T(this[f]).keys()
        }
        values() {
            let a = this.keys();
            return {
                [Symbol.iterator]: () => this.values(),
                next: () => {
                    let o = a.next();
                    return o.done ? o : {
                        done: !1,
                        value: this.get(o.value)
                    }
                }
            }
        }
        entries() {
            let a = this.keys();
            return {
                [Symbol.iterator]: () => this.entries(),
                next: () => {
                    let o = a.next();
                    if (o.done) return o;
                    let p = this.get(o.value);
                    return {
                        done: !1,
                        value: [o.value, p]
                    }
                }
            }
        } [(f, Symbol.iterator)]() {
            return this.entries()
        }
    }

    function t(u, b) {
        return new e(u, b)
    }

    function r(u) {
        u.e || (u.r = new Map, u.e = new Map(u.t))
    }
    class n extends Set {
        constructor(a, o) {
            super();
            this[f] = {
                o: 3,
                i: o,
                n: o ? o.n : B(),
                s: !1,
                c: !1,
                e: void 0,
                t: a,
                u: this,
                a: new Map,
                m: !1,
                l: !1
            }
        }
        get size() {
            return T(this[f]).size
        }
        has(a) {
            let o = this[f];
            return y(o), o.e ? !!(o.e.has(a) || o.a.has(a) && o.e.has(o.a.get(a))) : o.t.has(a)
        }
        add(a) {
            let o = this[f];
            return y(o), this.has(a) || (c(o), E(o), o.e.add(a)), this
        }
        delete(a) {
            if (!this.has(a)) return !1;
            let o = this[f];
            return y(o), c(o), E(o), o.e.delete(a) || (o.a.has(a) ? o.e.delete(o.a.get(a)) : !1)
        }
        clear() {
            let a = this[f];
            y(a), T(a).size && (c(a), E(a), a.e.clear())
        }
        values() {
            let a = this[f];
            return y(a), c(a), a.e.values()
        }
        entries() {
            let a = this[f];
            return y(a), c(a), a.e.entries()
        }
        keys() {
            return this.values()
        } [(f, Symbol.iterator)]() {
            return this.values()
        }
        forEach(a, o) {
            let p = this.values(),
                s = p.next();
            for (; !s.done;) a.call(o, s.value, s.value, this), s = p.next()
        }
    }

    function i(u, b) {
        return new n(u, b)
    }

    function c(u) {
        u.e || (u.e = new Set, u.t.forEach(b => {
            if (A(b)) {
                let a = W(b, u);
                u.a.set(b, a), u.e.add(a)
            } else u.e.add(b)
        }))
    }

    function y(u) {
        u.m && h(3, JSON.stringify(T(u)))
    }
    Y("MapSet", {
        I: t,
        D: i
    })
}
var _ = new J,
    Fe = _.produce,
    Ne = _.produceWithPatches.bind(_),
    je = _.setAutoFreeze.bind(_),
    ze = _.setUseStrictShallowCopy.bind(_),
    Ce = _.applyPatches.bind(_),
    Re = _.createDraft.bind(_),
    ve = _.finishDraft.bind(_);

function ke(e) {
    return e
}

function Ke(e) {
    return e
}
0 && (module.exports = {
    Immer,
    applyPatches,
    castDraft,
    castImmutable,
    createDraft,
    current,
    enableMapSet,
    enablePatches,
    finishDraft,
    freeze,
    immerable,
    isDraft,
    isDraftable,
    nothing,
    original,
    produce,
    produceWithPatches,
    setAutoFreeze,
    setUseStrictShallowCopy
});
//# sourceMappingURL=immer.cjs.production.js.map