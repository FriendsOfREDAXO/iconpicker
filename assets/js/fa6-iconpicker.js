(() => {
    "use strict";
    var e = {
            243: (e, n, t) => {
                t.d(n, { Z: () => r });
                var i = t(645),
                    o = t.n(i)()((function(e) { return e[1] }));
                o.push([e.id, ".iconpicker-dropdown{visibility:hidden;opacity:0}.iconpicker-dropdown.show{visibility:visible;opacity:1}.iconpicker-dropdown ul{position:absolute;width:100%;height:200px;background:#fff;overflow:scroll;box-shadow:0 0 28px rgba(0,0,0,0.1);padding:1rem;z-index:999;left:0;list-style:none}.iconpicker-dropdown ul li{display:inline-block;width:40px;height:40px;line-height:40px;text-align:center;border:1px solid rgba(178,178,178,0.45098);cursor:pointer;margin:.1rem}.iconpicker-dropdown ul li.selected{background-color:#007eff;color:#fff}.iconpicker-dropdown ul li.hidden{display:none}\n", ""]);
                const r = o
            },
            645: e => {
                e.exports = function(e) {
                    var n = [];
                    return n.toString = function() { return this.map((function(n) { var t = e(n); return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t })).join("") }, n.i = function(e, t, i) {
                        "string" == typeof e && (e = [
                            [null, e, ""]
                        ]);
                        var o = {};
                        if (i)
                            for (var r = 0; r < this.length; r++) {
                                var a = this[r][0];
                                null != a && (o[a] = !0)
                            }
                        for (var l = 0; l < e.length; l++) {
                            var c = [].concat(e[l]);
                            i && o[c[0]] || (t && (c[2] ? c[2] = "".concat(t, " and ").concat(c[2]) : c[2] = t), n.push(c))
                        }
                    }, n
                }
            },
            379: (e, n, t) => {
                var i, o = function() {
                        var e = {};
                        return function(n) {
                            if (void 0 === e[n]) {
                                var t = document.querySelector(n);
                                if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try { t = t.contentDocument.head } catch (e) { t = null }
                                e[n] = t
                            }
                            return e[n]
                        }
                    }(),
                    r = [];

                function a(e) {
                    for (var n = -1, t = 0; t < r.length; t++)
                        if (r[t].identifier === e) { n = t; break }
                    return n
                }

                function l(e, n) {
                    for (var t = {}, i = [], o = 0; o < e.length; o++) {
                        var l = e[o],
                            c = n.base ? l[0] + n.base : l[0],
                            s = t[c] || 0,
                            u = "".concat(c, " ").concat(s);
                        t[c] = s + 1;
                        var d = a(u),
                            f = { css: l[1], media: l[2], sourceMap: l[3] }; - 1 !== d ? (r[d].references++, r[d].updater(f)) : r.push({ identifier: u, updater: h(f, n), references: 1 }), i.push(u)
                    }
                    return i
                }

                function c(e) {
                    var n = document.createElement("style"),
                        i = e.attributes || {};
                    if (void 0 === i.nonce) {
                        var r = t.nc;
                        r && (i.nonce = r)
                    }
                    if (Object.keys(i).forEach((function(e) { n.setAttribute(e, i[e]) })), "function" == typeof e.insert) e.insert(n);
                    else {
                        var a = o(e.insert || "head");
                        if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        a.appendChild(n)
                    }
                    return n
                }
                var s, u = (s = [], function(e, n) { return s[e] = n, s.filter(Boolean).join("\n") });

                function d(e, n, t, i) {
                    var o = t ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
                    if (e.styleSheet) e.styleSheet.cssText = u(n, o);
                    else {
                        var r = document.createTextNode(o),
                            a = e.childNodes;
                        a[n] && e.removeChild(a[n]), a.length ? e.insertBefore(r, a[n]) : e.appendChild(r)
                    }
                }

                function f(e, n, t) {
                    var i = t.css,
                        o = t.media,
                        r = t.sourceMap;
                    if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), r && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), e.styleSheet) e.styleSheet.cssText = i;
                    else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(i))
                    }
                }
                var v = null,
                    p = 0;

                function h(e, n) {
                    var t, i, o;
                    if (n.singleton) {
                        var r = p++;
                        t = v || (v = c(n)), i = d.bind(null, t, r, !1), o = d.bind(null, t, r, !0)
                    } else t = c(n), i = f.bind(null, t, n), o = function() {
                        ! function(e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    };
                    return i(e),
                        function(n) {
                            if (n) {
                                if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                                i(e = n)
                            } else o()
                        }
                }
                e.exports = function(e, n) {
                    (n = n || {}).singleton || "boolean" == typeof n.singleton || (n.singleton = (void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i));
                    var t = l(e = e || [], n);
                    return function(e) {
                        if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                            for (var i = 0; i < t.length; i++) {
                                var o = a(t[i]);
                                r[o].references--
                            }
                            for (var c = l(e, n), s = 0; s < t.length; s++) {
                                var u = a(t[s]);
                                0 === r[u].references && (r[u].updater(), r.splice(u, 1))
                            }
                            t = c
                        }
                    }
                }
            }
        },
        n = {};

    function t(i) { if (n[i]) return n[i].exports; var o = n[i] = { id: i, exports: {} }; return e[i](o, o.exports, t), o.exports }
    t.n = e => { var n = e && e.__esModule ? () => e.default : () => e; return t.d(n, { a: n }), n }, t.d = (e, n) => { for (var i in n) t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: n[i] }) }, t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), (() => {
        var e = t(379),
            n = t.n(e),
            i = t(243);

        function o(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function r(e, n, t) { return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e }
        n()(i.Z, { insert: "head", singleton: !1 }), i.Z.locals;
        var a = function() {
            function e(n, t) {
                var i = this;
                ! function(e, n) { if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function") }(this, e), r(this, "setIconOnChange", (function() {
                    var e;
                    null !== (e = i.options) && void 0 !== e && e.showSelectedIn && (i.options.showSelectedIn.innerHTML = '<i class="rex-icon '.concat(i.el.value, '"></i>'))
                })), r(this, "focusIn", (function() {
                    var e, n, t, o;
                    null !== (e = i.el.nextElementSibling) && void 0 !== e && null !== (n = e.classList) && void 0 !== n && n.contains("iconpicker-dropdown") && (i.el.nextElementSibling.querySelector("ul").style.top = i.el.offsetHeight + "px", null !== (t = null === (o = i.options) || void 0 === o ? void 0 : o.fade) && void 0 !== t && t && (i.el.nextElementSibling.style.transition = "0.25s ease-in-out"), i.el.nextElementSibling.classList.add("show"))
                })), r(this, "set", (function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return i.el.value = i.valueFormat(e) })), this.el = n, this.options = t;
                var o = t.hideOnSelect,
                    a = void 0 === o || o,
                    l = t.selectedClass,
                    c = void 0 === l ? "selected" : l,
                    s = t.defaultValue,
                    u = void 0 === s ? "" : s,
                    d = t.icons,
                    f = void 0 === d ? [] : d,
                    v = t.searchable,
                    p = void 0 === v || v,
                    h = t.containerClass,
                    m = void 0 === h ? "" : h,
                    b = t.showSelectedIn,
                    g = void 0 === b ? null : b;
                this.valueFormat = "function" == typeof(null == t ? void 0 : t.valueFormat) ? t.valueFormat : function(e) { return e }, this.el.insertAdjacentHTML("afterend", '\n            <div class="iconpicker-dropdown '.concat(m, '">\n                <ul>\n                    ').concat(f.map((function(e) { return '<li value="'.concat(i.valueFormat(e), '" class="').concat(u === e ? c : "", '"><i class="rex-icon ').concat(i.valueFormat(e), '"></i></li>') })).join(""), "\n                </ul>\n            </div>\n        ")), this.el.nextElementSibling.querySelectorAll("li").forEach((function(e) {
                    return e.addEventListener("click", (function(n) {
                        var t;
                        null === (t = i.el.nextElementSibling.querySelector("li.selected")) || void 0 === t || t.classList.remove(c), e.classList.add(c);
                        var o = e.getAttribute("value");
                        i.el.value = o, a && i.el.nextElementSibling.classList.remove("show"), g && (i.options.showSelectedIn.innerHTML = '<i class="rex-icon '.concat(o, '"></i>'))
                    }))
                })), p && this.el.addEventListener("keyup", this.search), this.el.addEventListener("focusin", this.focusIn), this.el.addEventListener("change", this.setIconOnChange), this.el.value = this.valueFormat(u), this.el.dispatchEvent(new Event("change"))
            }
            var n, t;
            return n = e, (t = [{
                key: "search",
                value: function() {
                    for (var e = this.nextElementSibling.getElementsByTagName("li"), n = new RegExp(this.value, "i"), t = 0; t < e.length; t++) {
                        var i = e[t];
                        n.test(i.getAttribute("value")) ? i.classList.remove("hidden") : i.classList.add("hidden")
                    }
                }
            }]) && o(n.prototype, t), e
        }();
        window.Iconpicker = a, document.addEventListener("click", (function(e) { document.querySelectorAll(".iconpicker-dropdown").forEach((function(n) { n.contains(e.target) || n.previousElementSibling.contains(e.target) || n.classList.remove("show") })) }))
    })()
})();
