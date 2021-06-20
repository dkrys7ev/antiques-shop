!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.AOS = t();
}(this, (function() {
    "use strict";
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, t = "Expected a function", i = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, c = /^0o[0-7]+$/i, s = parseInt, u = "object" == typeof e && e && e.Object === Object && e, d = "object" == typeof self && self && self.Object === Object && self, l = u || d || Function("return this")(), f = Object.prototype.toString, m = Math.max, p = Math.min, b = function() {
        return l.Date.now();
    };
    function g(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }
    function w(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
                return !!e && "object" == typeof e;
            }(e) && "[object Symbol]" == f.call(e);
        }(e)) return NaN;
        if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var u = r.test(e);
        return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : a.test(e) ? NaN : +e;
    }
    var y = function(e, n, o) {
        var i = !0, a = !0;
        if ("function" != typeof e) throw new TypeError(t);
        return g(o) && (i = "leading" in o ? !!o.leading : i, a = "trailing" in o ? !!o.trailing : a), 
        function v(e, n, o) {
            var i, a, r, c, s, u, d = 0, l = !1, f = !1, v = !0;
            if ("function" != typeof e) throw new TypeError(t);
            function y(t) {
                var n = i, o = a;
                return i = a = void 0, d = t, c = e.apply(o, n);
            }
            function h(e) {
                var t = e - u;
                return void 0 === u || t >= n || t < 0 || f && e - d >= r;
            }
            function k() {
                var e = b();
                if (h(e)) return x(e);
                s = setTimeout(k, function(e) {
                    var t = n - (e - u);
                    return f ? p(t, r - (e - d)) : t;
                }(e));
            }
            function x(e) {
                return s = void 0, v && i ? y(e) : (i = a = void 0, c);
            }
            function O() {
                var e = b(), t = h(e);
                if (i = arguments, a = this, u = e, t) {
                    if (void 0 === s) return function(e) {
                        return d = e, s = setTimeout(k, n), l ? y(e) : c;
                    }(u);
                    if (f) return s = setTimeout(k, n), y(u);
                }
                return void 0 === s && (s = setTimeout(k, n)), c;
            }
            return n = w(n) || 0, g(o) && (l = !!o.leading, r = (f = "maxWait" in o) ? m(w(o.maxWait) || 0, n) : r, 
            v = "trailing" in o ? !!o.trailing : v), O.cancel = function() {
                void 0 !== s && clearTimeout(s), d = 0, i = u = a = s = void 0;
            }, O.flush = function() {
                return void 0 === s ? c : x(b());
            }, O;
        }(e, n, {
            leading: i,
            maxWait: n,
            trailing: a
        });
    }, O = /^\s+|\s+$/g, j = /^[-+]0x[0-9a-f]+$/i, E = /^0b[01]+$/i, N = /^0o[0-7]+$/i, z = parseInt, C = "object" == typeof e && e && e.Object === Object && e, A = "object" == typeof self && self && self.Object === Object && self, q = C || A || Function("return this")(), L = Object.prototype.toString, T = Math.max, M = Math.min, S = function() {
        return q.Date.now();
    };
    function D(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }
    function H(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
                return !!e && "object" == typeof e;
            }(e) && "[object Symbol]" == L.call(e);
        }(e)) return NaN;
        if (D(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = D(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(O, "");
        var n = E.test(e);
        return n || N.test(e) ? z(e.slice(2), n ? 2 : 8) : j.test(e) ? NaN : +e;
    }
    var $ = function(e, t, n) {
        var o, i, a, r, c, s, u = 0, d = !1, l = !1, f = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function m(t) {
            var n = o, a = i;
            return o = i = void 0, u = t, r = e.apply(a, n);
        }
        function p(e) {
            var n = e - s;
            return void 0 === s || n >= t || n < 0 || l && e - u >= a;
        }
        function b() {
            var e = S();
            if (p(e)) return v(e);
            c = setTimeout(b, function(e) {
                var n = t - (e - s);
                return l ? M(n, a - (e - u)) : n;
            }(e));
        }
        function v(e) {
            return c = void 0, f && o ? m(e) : (o = i = void 0, r);
        }
        function g() {
            var e = S(), n = p(e);
            if (o = arguments, i = this, s = e, n) {
                if (void 0 === c) return function(e) {
                    return u = e, c = setTimeout(b, t), d ? m(e) : r;
                }(s);
                if (l) return c = setTimeout(b, t), m(s);
            }
            return void 0 === c && (c = setTimeout(b, t)), r;
        }
        return t = H(t) || 0, D(n) && (d = !!n.leading, a = (l = "maxWait" in n) ? T(H(n.maxWait) || 0, t) : a, 
        f = "trailing" in n ? !!n.trailing : f), g.cancel = function() {
            void 0 !== c && clearTimeout(c), u = 0, o = s = i = c = void 0;
        }, g.flush = function() {
            return void 0 === c ? r : v(S());
        }, g;
    }, W = function() {};
    function P(e) {
        e && e.forEach((function(e) {
            var t = Array.prototype.slice.call(e.addedNodes), n = Array.prototype.slice.call(e.removedNodes);
            if (function e(t) {
                var n = void 0, o = void 0;
                for (n = 0; n < t.length; n += 1) {
                    if ((o = t[n]).dataset && o.dataset.aos) return !0;
                    if (o.children && e(o.children)) return !0;
                }
                return !1;
            }(t.concat(n))) return W();
        }));
    }
    function Y() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }
    var __isSupported = function() {
        return !!Y();
    }, __ready = function(e, t) {
        var n = window.document, o = new (Y())(P);
        W = t, o.observe(n.documentElement, {
            childList: !0,
            subtree: !0,
            removedNodes: !0
        });
    }, F = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), I = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
    }, K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, J = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, Q = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
    function R() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
    }
    var U = new (function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e);
        }
        return F(e, [ {
            key: "phone",
            value: function() {
                var e = R();
                return !(!K.test(e) && !G.test(e.substr(0, 4)));
            }
        }, {
            key: "mobile",
            value: function() {
                var e = R();
                return !(!J.test(e) && !Q.test(e.substr(0, 4)));
            }
        }, {
            key: "tablet",
            value: function() {
                return this.mobile() && !this.phone();
            }
        }, {
            key: "ie11",
            value: function() {
                return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
            }
        } ]), e;
    }()), V = function(e, t) {
        var n = void 0;
        return U.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {
            detail: t
        }) : n = new CustomEvent(e, {
            detail: t
        }), document.dispatchEvent(n);
    }, X = function(e) {
        return e.forEach((function(e, t) {
            return function(e, t) {
                var n = e.options, o = e.position, i = e.node, a = (e.data, function() {
                    e.animated && (function(e, t) {
                        t && t.forEach((function(t) {
                            return e.classList.remove(t);
                        }));
                    }(i, n.animatedClassNames), V("aos:out", i), e.options.id && V("aos:in:" + e.options.id, i), 
                    e.animated = !1);
                });
                n.mirror && t >= o.out && !n.once ? a() : t >= o.in ? e.animated || (function(e, t) {
                    t && t.forEach((function(t) {
                        return e.classList.add(t);
                    }));
                }(i, n.animatedClassNames), V("aos:in", i), e.options.id && V("aos:in:" + e.options.id, i), 
                e.animated = !0) : e.animated && !n.once && a();
            }(e, window.pageYOffset);
        }));
    }, Z = function(e) {
        for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); ) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), 
        n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
        return {
            top: n,
            left: t
        };
    }, ee = function(e, t, n) {
        var o = e.getAttribute("data-aos-" + t);
        if (void 0 !== o) {
            if ("true" === o) return !0;
            if ("false" === o) return !1;
        }
        return o || n;
    }, te = function(e, t) {
        return e.forEach((function(e, n) {
            var o = ee(e.node, "mirror", t.mirror), i = ee(e.node, "once", t.once), a = ee(e.node, "id"), r = t.useClassNames && e.node.getAttribute("data-aos"), c = [ t.animatedClassName ].concat(r ? r.split(" ") : []).filter((function(e) {
                return "string" == typeof e;
            }));
            t.initClassName && e.node.classList.add(t.initClassName), e.position = {
                in: function(e, t, n) {
                    var o = window.innerHeight, i = ee(e, "anchor"), a = ee(e, "anchor-placement"), r = Number(ee(e, "offset", a ? 0 : t)), c = a || n, s = e;
                    i && document.querySelectorAll(i) && (s = document.querySelectorAll(i)[0]);
                    var u = Z(s).top - o;
                    switch (c) {
                      case "top-bottom":
                        break;

                      case "center-bottom":
                        u += s.offsetHeight / 2;
                        break;

                      case "bottom-bottom":
                        u += s.offsetHeight;
                        break;

                      case "top-center":
                        u += o / 2;
                        break;

                      case "center-center":
                        u += o / 2 + s.offsetHeight / 2;
                        break;

                      case "bottom-center":
                        u += o / 2 + s.offsetHeight;
                        break;

                      case "top-top":
                        u += o;
                        break;

                      case "bottom-top":
                        u += o + s.offsetHeight;
                        break;

                      case "center-top":
                        u += o + s.offsetHeight / 2;
                    }
                    return u + r;
                }(e.node, t.offset, t.anchorPlacement),
                out: o && function(e, t) {
                    window.innerHeight;
                    var n = ee(e, "anchor"), o = ee(e, "offset", t), i = e;
                    return n && document.querySelectorAll(n) && (i = document.querySelectorAll(n)[0]), 
                    Z(i).top + i.offsetHeight - o;
                }(e.node, t.offset)
            }, e.options = {
                once: i,
                mirror: o,
                animatedClassNames: c,
                id: a
            };
        })), e;
    }, ne = function() {
        var e = document.querySelectorAll("[data-aos]");
        return Array.prototype.map.call(e, (function(e) {
            return {
                node: e
            };
        }));
    }, oe = [], ie = !1, ae = {
        offset: 120,
        delay: 0,
        easing: "ease",
        duration: 400,
        disable: !1,
        once: !1,
        mirror: !1,
        anchorPlacement: "top-bottom",
        startEvent: "DOMContentLoaded",
        animatedClassName: "aos-animate",
        initClassName: "aos-init",
        useClassNames: !1,
        disableMutationObserver: !1,
        throttleDelay: 99,
        debounceDelay: 50
    }, re = function() {
        return document.all && !window.atob;
    }, ce = function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ie = !0), ie && (oe = te(oe, ae), 
        X(oe), window.addEventListener("scroll", y((function() {
            X(oe, ae.once);
        }), ae.throttleDelay)));
    }, se = function() {
        if (oe = ne(), de(ae.disable) || re()) return ue();
        ce();
    }, ue = function() {
        oe.forEach((function(e, t) {
            e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), 
            e.node.removeAttribute("data-aos-delay"), ae.initClassName && e.node.classList.remove(ae.initClassName), 
            ae.animatedClassName && e.node.classList.remove(ae.animatedClassName);
        }));
    }, de = function(e) {
        return !0 === e || "mobile" === e && U.mobile() || "phone" === e && U.phone() || "tablet" === e && U.tablet() || "function" == typeof e && !0 === e();
    };
    return {
        init: function(e) {
            return ae = I(ae, e), oe = ne(), ae.disableMutationObserver || __isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), 
            ae.disableMutationObserver = !0), ae.disableMutationObserver || __ready("[data-aos]", se), 
            de(ae.disable) || re() ? ue() : (document.querySelector("body").setAttribute("data-aos-easing", ae.easing), 
            document.querySelector("body").setAttribute("data-aos-duration", ae.duration), document.querySelector("body").setAttribute("data-aos-delay", ae.delay), 
            -1 === [ "DOMContentLoaded", "load" ].indexOf(ae.startEvent) ? document.addEventListener(ae.startEvent, (function() {
                ce(!0);
            })) : window.addEventListener("load", (function() {
                ce(!0);
            })), "DOMContentLoaded" === ae.startEvent && [ "complete", "interactive" ].indexOf(document.readyState) > -1 && ce(!0), 
            window.addEventListener("resize", $(ce, ae.debounceDelay, !0)), window.addEventListener("orientationchange", $(ce, ae.debounceDelay, !0)), 
            oe);
        },
        refresh: ce,
        refreshHard: se
    };
})), function(e, i) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", [ "jquery" ], (function(t) {
        return i(e, t);
    })) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery);
}(window, (function(t, e) {
    "use strict";
    var i = Array.prototype.slice, n = t.console, d = void 0 === n ? function() {} : function(t) {
        n.error(t);
    };
    function s(h, s, c) {
        (c = c || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
            c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t));
        }), c.fn[h] = function(t) {
            return "string" == typeof t ? function(t, o, r) {
                var a, l = "$()." + h + '("' + o + '")';
                return t.each((function(t, e) {
                    var i = c.data(e, h);
                    if (i) {
                        var n = i[o];
                        if (n && "_" != o.charAt(0)) {
                            var s = n.apply(i, r);
                            a = void 0 === a ? s : a;
                        } else d(l + " is not a valid method");
                    } else d(h + " not initialized. Cannot call methods, i.e. " + l);
                })), void 0 !== a ? a : t;
            }(this, t, i.call(arguments, 1)) : (function(t, n) {
                t.each((function(t, e) {
                    var i = c.data(e, h);
                    i ? (i.option(n), i._init()) : (i = new s(e, n), c.data(e, h, i));
                }));
            }(this, t), this);
        }, o(c));
    }
    function o(t) {
        !t || t && t.bridget || (t.bridget = s);
    }
    return o(e || t.jQuery), s;
})), function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, (function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this;
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this;
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this;
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                var o = i[s];
                n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e);
            }
            return this;
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents;
    }, t;
})), function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e();
}(window, (function() {
    "use strict";
    function m(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    var i = "undefined" == typeof console ? function() {} : function(t) {
        console.error(t);
    }, y = [ "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth" ], b = y.length;
    function E(t) {
        var e = getComputedStyle(t);
        return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), 
        e;
    }
    var S, C = !1;
    return function x(t) {
        if (function() {
            if (!C) {
                C = !0;
                var t = document.createElement("div");
                t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", 
                t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                var e = document.body || document.documentElement;
                e.appendChild(t);
                var i = E(t);
                S = 200 == Math.round(m(i.width)), x.isBoxSizeOuter = S, e.removeChild(t);
            }
        }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
            var e = E(t);
            if ("none" == e.display) return function() {
                for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; e < b; e++) t[y[e]] = 0;
                return t;
            }();
            var i = {};
            i.width = t.offsetWidth, i.height = t.offsetHeight;
            for (var n = i.isBorderBox = "border-box" == e.boxSizing, s = 0; s < b; s++) {
                var o = y[s], r = e[o], a = parseFloat(r);
                i[o] = isNaN(a) ? 0 : a;
            }
            var l = i.paddingLeft + i.paddingRight, h = i.paddingTop + i.paddingBottom, c = i.marginLeft + i.marginRight, d = i.marginTop + i.marginBottom, u = i.borderLeftWidth + i.borderRightWidth, f = i.borderTopWidth + i.borderBottomWidth, p = n && S, g = m(e.width);
            !1 !== g && (i.width = g + (p ? 0 : l + u));
            var v = m(e.height);
            return !1 !== v && (i.height = v + (p ? 0 : h + f)), i.innerWidth = i.width - (l + u), 
            i.innerHeight = i.height - (h + f), i.outerWidth = i.width + c, i.outerHeight = i.height + d, 
            i;
        }
    };
})), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, (function() {
    "use strict";
    var i = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = [ "webkit", "moz", "ms", "o" ], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n]) return n;
        }
    }();
    return function(t, e) {
        return t[i](e);
    };
})), function(e, i) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", [ "desandro-matches-selector/matches-selector" ], (function(t) {
        return i(e, t);
    })) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector);
}(window, (function(h, o) {
    var c = {
        extend: function(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        },
        modulo: function(t, e) {
            return (t % e + e) % e;
        }
    }, e = Array.prototype.slice;
    c.makeArray = function(t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [ t ];
    }, c.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
    }, c.getParent = function(t, e) {
        for (;t.parentNode && t != document.body; ) if (t = t.parentNode, o(t, e)) return t;
    }, c.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t;
    }, c.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, c.filterFindElements = function(t, n) {
        t = c.makeArray(t);
        var s = [];
        return t.forEach((function(t) {
            if (t instanceof HTMLElement) if (n) {
                o(t, n) && s.push(t);
                for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) s.push(e[i]);
            } else s.push(t);
        })), s;
    }, c.debounceMethod = function(t, e, n) {
        n = n || 100;
        var s = t.prototype[e], o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            clearTimeout(t);
            var e = arguments, i = this;
            this[o] = setTimeout((function() {
                s.apply(i, e), delete i[o];
            }), n);
        };
    }, c.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
    }, c.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
            return e + "-" + i;
        })).toLowerCase();
    };
    var d = h.console;
    return c.htmlInit = function(a, l) {
        c.docReady((function() {
            var t = c.toDashed(l), s = "data-" + t, e = document.querySelectorAll("[" + s + "]"), i = document.querySelectorAll(".js-" + t), n = c.makeArray(e).concat(c.makeArray(i)), o = s + "-options", r = h.jQuery;
            n.forEach((function(e) {
                var t, i = e.getAttribute(s) || e.getAttribute(o);
                try {
                    t = i && JSON.parse(i);
                } catch (t) {
                    return void (d && d.error("Error parsing " + s + " on " + e.className + ": " + t));
                }
                var n = new a(e, t);
                r && r.data(e, l, n);
            }));
        }));
    }, c;
})), function(e, i) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", [ "get-size/get-size" ], (function(t) {
        return i(e, t);
    })) : "object" == typeof module && module.exports ? module.exports = i(e, require("get-size")) : (e.Flickity = e.Flickity || {}, 
    e.Flickity.Cell = i(e, e.getSize));
}(window, (function(t, e) {
    function i(t, e) {
        this.element = t, this.parent = e, this.create();
    }
    var n = i.prototype;
    return n.create = function() {
        this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), 
        this.x = 0, this.shift = 0;
    }, n.destroy = function() {
        this.unselect(), this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = "";
    }, n.getSize = function() {
        this.size = e(this.element);
    }, n.setPosition = function(t) {
        this.x = t, this.updateTarget(), this.renderPosition(t);
    }, n.updateTarget = n.setDefaultTarget = function() {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign;
    }, n.renderPosition = function(t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t);
    }, n.select = function() {
        this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden");
    }, n.unselect = function() {
        this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true");
    }, n.wrapShift = function(t) {
        this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t);
    }, n.remove = function() {
        this.element.parentNode.removeChild(this.element);
    }, i;
})), function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, 
    t.Flickity.Slide = e());
}(window, (function() {
    "use strict";
    function t(t) {
        this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, 
        this.height = 0;
    }
    var e = t.prototype;
    return e.addCell = function(t) {
        if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 
        1 == this.cells.length) {
            this.x = t.x;
            var e = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = t.size[e];
        }
    }, e.updateTarget = function() {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft", e = this.getLastCell(), i = e ? e.size[t] : 0, n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
    }, e.getLastCell = function() {
        return this.cells[this.cells.length - 1];
    }, e.select = function() {
        this.cells.forEach((function(t) {
            t.select();
        }));
    }, e.unselect = function() {
        this.cells.forEach((function(t) {
            t.unselect();
        }));
    }, e.getCellElements = function() {
        return this.cells.map((function(t) {
            return t.element;
        }));
    }, t;
})), function(e, i) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", [ "fizzy-ui-utils/utils" ], (function(t) {
        return i(e, t);
    })) : "object" == typeof module && module.exports ? module.exports = i(e, require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {}, 
    e.Flickity.animatePrototype = i(e, e.fizzyUIUtils));
}(window, (function(t, e) {
    return {
        startAnimation: function() {
            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate());
        },
        animate: function() {
            this.applyDragForce(), this.applySelectedAttraction();
            var t = this.x;
            if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                var e = this;
                requestAnimationFrame((function() {
                    e.animate();
                }));
            }
        },
        positionSlider: function() {
            var t = this.x;
            this.options.wrapAround && 1 < this.cells.length && (t = e.modulo(t, this.slideableWidth), 
            t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), 
            this.dispatchScrollEvent();
        },
        setTranslateX: function(t, e) {
            t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
            var i = this.getPositionValue(t);
            this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
        },
        dispatchScrollEvent: function() {
            var t = this.slides[0];
            if (t) {
                var e = -this.x - t.target, i = e / this.slidesWidth;
                this.dispatchEvent("scroll", null, [ i, e ]);
            }
        },
        positionSliderAtSelected: function() {
            this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider());
        },
        getPositionValue: function(t) {
            return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px";
        },
        settle: function(t) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, 
            2 < this.restingFrames && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), 
            this.dispatchEvent("settle", null, [ this.selectedIndex ]));
        },
        shiftWrapCells: function(t) {
            var e = this.cursorPosition + t;
            this._shiftCells(this.beforeShiftCells, e, -1);
            var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, i, 1);
        },
        _shiftCells: function(t, e, i) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n], o = 0 < e ? i : 0;
                s.wrapShift(o), e -= s.size.outerWidth;
            }
        },
        _unshiftCells: function(t) {
            if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
        },
        integratePhysics: function() {
            this.x += this.velocity, this.velocity *= this.getFrictionFactor();
        },
        applyForce: function(t) {
            this.velocity += t;
        },
        getFrictionFactor: function() {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
        },
        getRestingPosition: function() {
            return this.x + this.velocity / (1 - this.getFrictionFactor());
        },
        applyDragForce: function() {
            if (this.isDraggable && this.isPointerDown) {
                var t = this.dragX - this.x - this.velocity;
                this.applyForce(t);
            }
        },
        applySelectedAttraction: function() {
            if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                this.applyForce(t);
            }
        }
    };
})), function(r, a) {
    if ("function" == typeof define && define.amd) define("flickity/js/flickity", [ "ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate" ], (function(t, e, i, n, s, o) {
        return a(r, t, e, i, n, s, o);
    })); else if ("object" == typeof module && module.exports) module.exports = a(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate")); else {
        var t = r.Flickity;
        r.Flickity = a(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, t.Cell, t.Slide, t.animatePrototype);
    }
}(window, (function(n, t, e, a, i, r, s) {
    var l = n.jQuery, o = n.getComputedStyle, h = n.console;
    function c(t, e) {
        for (t = a.makeArray(t); t.length; ) e.appendChild(t.shift());
    }
    var d = 0, u = {};
    function f(t, e) {
        var i = a.getQueryElement(t);
        if (i) {
            if (this.element = i, this.element.flickityGUID) {
                var n = u[this.element.flickityGUID];
                return n.option(e), n;
            }
            l && (this.$element = l(this.element)), this.options = a.extend({}, this.constructor.defaults), 
            this.option(e), this._create();
        } else h && h.error("Bad element for Flickity: " + (i || t));
    }
    f.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    }, f.createMethods = [];
    var p = f.prototype;
    a.extend(p, t.prototype), p._create = function() {
        var t = this.guid = ++d;
        for (var e in this.element.flickityGUID = t, (u[t] = this).selectedIndex = 0, this.restingFrames = 0, 
        this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", 
        this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", 
        this._createSlider(), (this.options.resize || this.options.watchCSS) && n.addEventListener("resize", this), 
        this.options.on) {
            var i = this.options.on[e];
            this.on(e, i);
        }
        f.createMethods.forEach((function(t) {
            this[t]();
        }), this), this.options.watchCSS ? this.watchCSS() : this.activate();
    }, p.option = function(t) {
        a.extend(this.options, t);
    }, p.activate = function() {
        this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), 
        this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), 
        c(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), 
        this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, 
        this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), 
        this.isInitActivated = !0, this.dispatchEvent("ready"));
    }, p._createSlider = function() {
        var t = document.createElement("div");
        t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t;
    }, p._filterFindCellElements = function(t) {
        return a.filterFindElements(t, this.options.cellSelector);
    }, p.reloadCells = function() {
        this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), 
        this.setGallerySize();
    }, p._makeCells = function(t) {
        return this._filterFindCellElements(t).map((function(t) {
            return new i(t, this);
        }), this);
    }, p.getLastCell = function() {
        return this.cells[this.cells.length - 1];
    }, p.getLastSlide = function() {
        return this.slides[this.slides.length - 1];
    }, p.positionCells = function() {
        this._sizeCells(this.cells), this._positionCells(0);
    }, p._positionCells = function(t) {
        t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
        var e = 0;
        if (0 < t) {
            var i = this.cells[t - 1];
            e = i.x + i.size.outerWidth;
        }
        for (var n = this.cells.length, s = t; s < n; s++) {
            var o = this.cells[s];
            o.setPosition(e), e += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight);
        }
        this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0;
    }, p._sizeCells = function(t) {
        t.forEach((function(t) {
            t.getSize();
        }));
    }, p.updateSlides = function() {
        if (this.slides = [], this.cells.length) {
            var n = new r(this);
            this.slides.push(n);
            var s = "left" == this.originSide ? "marginRight" : "marginLeft", o = this._getCanCellFit();
            this.cells.forEach((function(t, e) {
                if (n.cells.length) {
                    var i = n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]);
                    o.call(this, e, i) || (n.updateTarget(), n = new r(this), this.slides.push(n)), 
                    n.addCell(t);
                } else n.addCell(t);
            }), this), n.updateTarget(), this.updateSelectedSlide();
        }
    }, p._getCanCellFit = function() {
        var t = this.options.groupCells;
        if (!t) return function() {
            return !1;
        };
        if ("number" == typeof t) {
            var e = parseInt(t, 10);
            return function(t) {
                return t % e != 0;
            };
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/), n = i ? parseInt(i[1], 10) / 100 : 1;
        return function(t, e) {
            return e <= (this.size.innerWidth + 1) * n;
        };
    }, p._init = p.reposition = function() {
        this.positionCells(), this.positionSliderAtSelected();
    }, p.getSize = function() {
        this.size = e(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign;
    };
    var g = {
        center: {
            left: .5,
            right: .5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    return p.setCellAlign = function() {
        var t = g[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
    }, p.setGallerySize = function() {
        if (this.options.setGallerySize) {
            var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = t + "px";
        }
    }, p._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
            var t = this.cursorPosition, e = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, 
            this.afterShiftCells = this._getGapCells(t, 0, 1);
        }
    }, p._getGapCells = function(t, e, i) {
        for (var n = []; 0 < t; ) {
            var s = this.cells[e];
            if (!s) break;
            n.push(s), e += i, t -= s.size.outerWidth;
        }
        return n;
    }, p._containSlides = function() {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
            var t = this.options.rightToLeft, e = t ? "marginRight" : "marginLeft", i = t ? "marginLeft" : "marginRight", n = this.slideableWidth - this.getLastCell().size[i], s = n < this.size.innerWidth, o = this.cursorPosition + this.cells[0].size[e], r = n - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach((function(t) {
                s ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, o), t.target = Math.min(t.target, r));
            }), this);
        }
    }, p.dispatchEvent = function(t, e, i) {
        var n = e ? [ e ].concat(i) : i;
        if (this.emitEvent(t, n), l && this.$element) {
            var s = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
            if (e) {
                var o = l.Event(e);
                o.type = t, s = o;
            }
            this.$element.trigger(s, i);
        }
    }, p.select = function(t, e, i) {
        if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = a.modulo(t, this.slides.length)), 
        this.slides[t])) {
            var n = this.selectedIndex;
            this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), 
            this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [ t ]), 
            t != n && this.dispatchEvent("change", null, [ t ]), this.dispatchEvent("cellSelect");
        }
    }, p._wrapSelect = function(t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && 1 < e)) return t;
        var i = a.modulo(t, e), n = Math.abs(i - this.selectedIndex), s = Math.abs(i + e - this.selectedIndex), o = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && s < n ? t += e : !this.isDragSelect && o < n && (t -= e), 
        t < 0 ? this.x -= this.slideableWidth : e <= t && (this.x += this.slideableWidth);
    }, p.previous = function(t, e) {
        this.select(this.selectedIndex - 1, t, e);
    }, p.next = function(t, e) {
        this.select(this.selectedIndex + 1, t, e);
    }, p.updateSelectedSlide = function() {
        var t = this.slides[this.selectedIndex];
        t && (this.unselectSelectedSlide(), (this.selectedSlide = t).select(), this.selectedCells = t.cells, 
        this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0]);
    }, p.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect();
    }, p.selectInitialIndex = function() {
        var t = this.options.initialIndex;
        if (this.isInitActivated) this.select(this.selectedIndex, !1, !0); else {
            if (t && "string" == typeof t && this.queryCell(t)) return void this.selectCell(t, !1, !0);
            var e = 0;
            t && this.slides[t] && (e = t), this.select(e, !1, !0);
        }
    }, p.selectCell = function(t, e, i) {
        var n = this.queryCell(t);
        if (n) {
            var s = this.getCellSlideIndex(n);
            this.select(s, e, i);
        }
    }, p.getCellSlideIndex = function(t) {
        for (var e = 0; e < this.slides.length; e++) if (-1 != this.slides[e].cells.indexOf(t)) return e;
    }, p.getCell = function(t) {
        for (var e = 0; e < this.cells.length; e++) {
            var i = this.cells[e];
            if (i.element == t) return i;
        }
    }, p.getCells = function(t) {
        t = a.makeArray(t);
        var i = [];
        return t.forEach((function(t) {
            var e = this.getCell(t);
            e && i.push(e);
        }), this), i;
    }, p.getCellElements = function() {
        return this.cells.map((function(t) {
            return t.element;
        }));
    }, p.getParentCell = function(t) {
        return this.getCell(t) || (t = a.getParent(t, ".flickity-slider > *"), this.getCell(t));
    }, p.getAdjacentCellElements = function(t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (i <= 1 + 2 * t) return this.getCellElements();
        for (var n = [], s = e - t; s <= e + t; s++) {
            var o = this.options.wrapAround ? a.modulo(s, i) : s, r = this.slides[o];
            r && (n = n.concat(r.getCellElements()));
        }
        return n;
    }, p.queryCell = function(t) {
        if ("number" == typeof t) return this.cells[t];
        if ("string" == typeof t) {
            if (t.match(/^[#\.]?[\d\/]/)) return;
            t = this.element.querySelector(t);
        }
        return this.getCell(t);
    }, p.uiChange = function() {
        this.emitEvent("uiChange");
    }, p.childUIPointerDown = function(t) {
        "touchstart" != t.type && t.preventDefault(), this.focus();
    }, p.onresize = function() {
        this.watchCSS(), this.resize();
    }, a.debounceMethod(f, "onresize", 150), p.resize = function() {
        if (this.isActive) {
            this.getSize(), this.options.wrapAround && (this.x = a.modulo(this.x, this.slideableWidth)), 
            this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
            var t = this.selectedElements && this.selectedElements[0];
            this.selectCell(t, !1, !0);
        }
    }, p.watchCSS = function() {
        this.options.watchCSS && (-1 != o(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate());
    }, p.onkeydown = function(t) {
        var e = document.activeElement && document.activeElement != this.element;
        if (this.options.accessibility && !e) {
            var i = f.keyboardHandlers[t.keyCode];
            i && i.call(this);
        }
    }, f.keyboardHandlers = {
        37: function() {
            var t = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(), this[t]();
        },
        39: function() {
            var t = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(), this[t]();
        }
    }, p.focus = function() {
        var t = n.pageYOffset;
        this.element.focus({
            preventScroll: !0
        }), n.pageYOffset != t && n.scrollTo(n.pageXOffset, t);
    }, p.deactivate = function() {
        this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), 
        this.unselectSelectedSlide(), this.cells.forEach((function(t) {
            t.destroy();
        })), this.element.removeChild(this.viewport), c(this.slider.children, this.element), 
        this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), 
        this.isActive = !1, this.emitEvent("deactivate"));
    }, p.destroy = function() {
        this.deactivate(), n.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), 
        l && this.$element && l.removeData(this.element, "flickity"), delete this.element.flickityGUID, 
        delete u[this.guid];
    }, a.extend(p, s), f.data = function(t) {
        var e = (t = a.getQueryElement(t)) && t.flickityGUID;
        return e && u[e];
    }, a.htmlInit(f, "flickity"), l && l.bridget && l.bridget("flickity", f), f.setJQuery = function(t) {
        l = t;
    }, f.Cell = i, f.Slide = r, f;
})), function(e, i) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", [ "ev-emitter/ev-emitter" ], (function(t) {
        return i(e, t);
    })) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.Unipointer = i(e, e.EvEmitter);
}(window, (function(s, t) {
    function e() {}
    var i = e.prototype = Object.create(t.prototype);
    i.bindStartEvent = function(t) {
        this._bindStartEvent(t, !0);
    }, i.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1);
    }, i._bindStartEvent = function(t, e) {
        var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", n = "mousedown";
        s.PointerEvent ? n = "pointerdown" : "ontouchstart" in s && (n = "touchstart"), 
        t[i](n, this);
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, i.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.identifier == this.pointerIdentifier) return i;
        }
    }, i.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t);
    }, i.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0]);
    }, i.onpointerdown = function(t) {
        this._pointerDown(t, t);
    }, i._pointerDown = function(t, e) {
        t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, 
        this.pointerDown(t, e));
    }, i.pointerDown = function(t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [ t, e ]);
    };
    var n = {
        mousedown: [ "mousemove", "mouseup" ],
        touchstart: [ "touchmove", "touchend", "touchcancel" ],
        pointerdown: [ "pointermove", "pointerup", "pointercancel" ]
    };
    return i._bindPostStartEvents = function(t) {
        if (t) {
            var e = n[t.type];
            e.forEach((function(t) {
                s.addEventListener(t, this);
            }), this), this._boundPointerEvents = e;
        }
    }, i._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach((function(t) {
            s.removeEventListener(t, this);
        }), this), delete this._boundPointerEvents);
    }, i.onmousemove = function(t) {
        this._pointerMove(t, t);
    }, i.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
    }, i.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e);
    }, i._pointerMove = function(t, e) {
        this.pointerMove(t, e);
    }, i.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [ t, e ]);
    }, i.onmouseup = function(t) {
        this._pointerUp(t, t);
    }, i.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
    }, i.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e);
    }, i._pointerUp = function(t, e) {
        this._pointerDone(), this.pointerUp(t, e);
    }, i.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [ t, e ]);
    }, i._pointerDone = function() {
        this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
    }, i._pointerReset = function() {
        this.isPointerDown = !1, delete this.pointerIdentifier;
    }, i.pointerDone = function() {}, i.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
    }, i.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e);
    }, i._pointerCancel = function(t, e) {
        this._pointerDone(), this.pointerCancel(t, e);
    }, i.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [ t, e ]);
    }, e.getPointerPoint = function(t) {
        return {
            x: t.pageX,
            y: t.pageY
        };
    }, e;
})), function(e, i) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", [ "unipointer/unipointer" ], (function(t) {
        return i(e, t);
    })) : "object" == typeof module && module.exports ? module.exports = i(e, require("unipointer")) : e.Unidragger = i(e, e.Unipointer);
}(window, (function(o, t) {
    function e() {}
    var i = e.prototype = Object.create(t.prototype);
    i.bindHandles = function() {
        this._bindHandles(!0);
    }, i.unbindHandles = function() {
        this._bindHandles(!1);
    }, i._bindHandles = function(t) {
        for (var e = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", i = t ? this._touchActionValue : "", n = 0; n < this.handles.length; n++) {
            var s = this.handles[n];
            this._bindStartEvent(s, t), s[e]("click", this), o.PointerEvent && (s.style.touchAction = i);
        }
    }, i._touchActionValue = "none", i.pointerDown = function(t, e) {
        this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), 
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [ t, e ]));
    };
    var s = {
        TEXTAREA: !0,
        INPUT: !0,
        SELECT: !0,
        OPTION: !0
    }, r = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0
    };
    return i.okayPointerDown = function(t) {
        var e = s[t.target.nodeName], i = r[t.target.type], n = !e || i;
        return n || this._pointerReset(), n;
    }, i.pointerDownBlur = function() {
        var t = document.activeElement;
        t && t.blur && t != document.body && t.blur();
    }, i.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [ t, e, i ]), this._dragMove(t, e, i);
    }, i._dragPointerMove = function(t, e) {
        var i = {
            x: e.pageX - this.pointerDownPointer.pageX,
            y: e.pageY - this.pointerDownPointer.pageY
        };
        return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i;
    }, i.hasDragStarted = function(t) {
        return 3 < Math.abs(t.x) || 3 < Math.abs(t.y);
    }, i.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [ t, e ]), this._dragPointerUp(t, e);
    }, i._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
    }, i._dragStart = function(t, e) {
        this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e);
    }, i.dragStart = function(t, e) {
        this.emitEvent("dragStart", [ t, e ]);
    }, i._dragMove = function(t, e, i) {
        this.isDragging && this.dragMove(t, e, i);
    }, i.dragMove = function(t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [ t, e, i ]);
    }, i._dragEnd = function(t, e) {
        this.isDragging = !1, setTimeout(function() {
            delete this.isPreventingClicks;
        }.bind(this)), this.dragEnd(t, e);
    }, i.dragEnd = function(t, e) {
        this.emitEvent("dragEnd", [ t, e ]);
    }, i.onclick = function(t) {
        this.isPreventingClicks && t.preventDefault();
    }, i._staticClick = function(t, e) {
        this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, 
        setTimeout(function() {
            delete this.isIgnoringMouseUp;
        }.bind(this), 400)));
    }, i.staticClick = function(t, e) {
        this.emitEvent("staticClick", [ t, e ]);
    }, e.getPointerPoint = t.getPointerPoint, e;
})), function(n, s) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", [ "./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils" ], (function(t, e, i) {
        return s(n, t, e, i);
    })) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils);
}(window, (function(i, t, e, a) {
    a.extend(t.defaults, {
        draggable: ">1",
        dragThreshold: 3
    }), t.createMethods.push("_createDrag");
    var n = t.prototype;
    a.extend(n, e.prototype), n._touchActionValue = "pan-y";
    var s = "createTouch" in document, o = !1;
    n._createDrag = function() {
        this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), 
        this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), 
        s && !o && (i.addEventListener("touchmove", (function() {})), o = !0);
    }, n.onActivateDrag = function() {
        this.handles = [ this.viewport ], this.bindHandles(), this.updateDraggable();
    }, n.onDeactivateDrag = function() {
        this.unbindHandles(), this.element.classList.remove("is-draggable");
    }, n.updateDraggable = function() {
        ">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable, 
        this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable");
    }, n.bindDrag = function() {
        this.options.draggable = !0, this.updateDraggable();
    }, n.unbindDrag = function() {
        this.options.draggable = !1, this.updateDraggable();
    }, n._uiChangeDrag = function() {
        delete this.isFreeScrolling;
    }, n.pointerDown = function(t, e) {
        this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t), 
        this.pointerDownFocus(t), document.activeElement != this.element && this.pointerDownBlur(), 
        this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), 
        i.addEventListener("scroll", this), this._pointerDownDefault(t, e)) : this._pointerDownDefault(t, e);
    }, n._pointerDownDefault = function(t, e) {
        this.pointerDownPointer = {
            pageX: e.pageX,
            pageY: e.pageY
        }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [ e ]);
    };
    var r = {
        INPUT: !0,
        TEXTAREA: !0,
        SELECT: !0
    };
    function l() {
        return {
            x: i.pageXOffset,
            y: i.pageYOffset
        };
    }
    return n.pointerDownFocus = function(t) {
        r[t.target.nodeName] || this.focus();
    }, n._pointerDownPreventDefault = function(t) {
        var e = "touchstart" == t.type, i = "touch" == t.pointerType, n = r[t.target.nodeName];
        e || i || n || t.preventDefault();
    }, n.hasDragStarted = function(t) {
        return Math.abs(t.x) > this.options.dragThreshold;
    }, n.pointerUp = function(t, e) {
        delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), 
        this.dispatchEvent("pointerUp", t, [ e ]), this._dragPointerUp(t, e);
    }, n.pointerDone = function() {
        i.removeEventListener("scroll", this), delete this.pointerDownScroll;
    }, n.dragStart = function(t, e) {
        this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), i.removeEventListener("scroll", this), 
        this.dispatchEvent("dragStart", t, [ e ]));
    }, n.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [ e, i ]), this._dragMove(t, e, i);
    }, n.dragMove = function(t, e, i) {
        if (this.isDraggable) {
            t.preventDefault(), this.previousDragX = this.dragX;
            var n = this.options.rightToLeft ? -1 : 1;
            this.options.wrapAround && (i.x = i.x % this.slideableWidth);
            var s = this.dragStartPosition + i.x * n;
            if (!this.options.wrapAround && this.slides.length) {
                var o = Math.max(-this.slides[0].target, this.dragStartPosition);
                s = o < s ? .5 * (s + o) : s;
                var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                s = s < r ? .5 * (s + r) : s;
            }
            this.dragX = s, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [ e, i ]);
        }
    }, n.dragEnd = function(t, e) {
        if (this.isDraggable) {
            this.options.freeScroll && (this.isFreeScrolling = !0);
            var i = this.dragEndRestingSelect();
            if (this.options.freeScroll && !this.options.wrapAround) {
                var n = this.getRestingPosition();
                this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target;
            } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
            delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), 
            delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [ e ]);
        }
    }, n.dragEndRestingSelect = function() {
        var t = this.getRestingPosition(), e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)), i = this._getClosestResting(t, e, 1), n = this._getClosestResting(t, e, -1);
        return i.distance < n.distance ? i.index : n.index;
    }, n._getClosestResting = function(t, e, i) {
        for (var n = this.selectedIndex, s = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) {
            return t <= e;
        } : function(t, e) {
            return t < e;
        }; o(e, s) && (n += i, s = e, null !== (e = this.getSlideDistance(-t, n))); ) e = Math.abs(e);
        return {
            distance: s,
            index: n - i
        };
    }, n.getSlideDistance = function(t, e) {
        var i = this.slides.length, n = this.options.wrapAround && 1 < i, s = n ? a.modulo(e, i) : e, o = this.slides[s];
        if (!o) return null;
        var r = n ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (o.target + r);
    }, n.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime) return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex), e = this.previousDragX - this.dragX;
        return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0;
    }, n.staticClick = function(t, e) {
        var i = this.getParentCell(t.target), n = i && i.element, s = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [ e, n, s ]);
    }, n.onscroll = function() {
        var t = l(), e = this.pointerDownScroll.x - t.x, i = this.pointerDownScroll.y - t.y;
        (3 < Math.abs(e) || 3 < Math.abs(i)) && this._pointerDone();
    }, t;
})), function(n, s) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", [ "./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils" ], (function(t, e, i) {
        return s(n, t, e, i);
    })) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
}(window, (function(t, e, i, n) {
    "use strict";
    var s = "http://www.w3.org/2000/svg";
    function o(t, e) {
        this.direction = t, this.parent = e, this._create();
    }
    (o.prototype = Object.create(i.prototype))._create = function() {
        this.isEnabled = !0, this.isPrevious = -1 == this.direction;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", 
        e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        var i = this.createSVG();
        e.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
    }, o.prototype.activate = function() {
        this.bindStartEvent(this.element), this.element.addEventListener("click", this), 
        this.parent.element.appendChild(this.element);
    }, o.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), 
        this.element.removeEventListener("click", this);
    }, o.prototype.createSVG = function() {
        var t = document.createElementNS(s, "svg");
        t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(s, "path"), i = function(t) {
            return "string" != typeof t ? "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z" : t;
        }(this.parent.options.arrowShape);
        return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), 
        t.appendChild(e), t;
    }, o.prototype.handleEvent = n.handleEvent, o.prototype.onclick = function() {
        if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? "previous" : "next";
            this.parent[t]();
        }
    }, o.prototype.enable = function() {
        this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0);
    }, o.prototype.disable = function() {
        this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1);
    }, o.prototype.update = function() {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && 1 < t.length) this.enable(); else {
            var e = t.length ? t.length - 1 : 0, i = this.isPrevious ? 0 : e;
            this[this.parent.selectedIndex == i ? "disable" : "enable"]();
        }
    }, o.prototype.destroy = function() {
        this.deactivate(), this.allOff();
    }, n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    }), e.createMethods.push("_createPrevNextButtons");
    var r = e.prototype;
    return r._createPrevNextButtons = function() {
        this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), 
        this.on("activate", this.activatePrevNextButtons));
    }, r.activatePrevNextButtons = function() {
        this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
    }, r.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
    }, e.PrevNextButton = o, e;
})), function(n, s) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", [ "./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils" ], (function(t, e, i) {
        return s(n, t, e, i);
    })) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
}(window, (function(t, e, i, n) {
    function s(t) {
        this.parent = t, this._create();
    }
    (s.prototype = Object.create(i.prototype))._create = function() {
        this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", 
        this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
    }, s.prototype.activate = function() {
        this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), 
        this.parent.element.appendChild(this.holder);
    }, s.prototype.deactivate = function() {
        this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), 
        this.parent.element.removeChild(this.holder);
    }, s.prototype.setDots = function() {
        var t = this.parent.slides.length - this.dots.length;
        0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t);
    }, s.prototype.addDots = function(t) {
        for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, s = n + t, o = n; o < s; o++) {
            var r = document.createElement("li");
            r.className = "dot", r.setAttribute("aria-label", "Page dot " + (o + 1)), e.appendChild(r), 
            i.push(r);
        }
        this.holder.appendChild(e), this.dots = this.dots.concat(i);
    }, s.prototype.removeDots = function(t) {
        this.dots.splice(this.dots.length - t, t).forEach((function(t) {
            this.holder.removeChild(t);
        }), this);
    }, s.prototype.updateSelected = function() {
        this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), 
        this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", 
        this.selectedDot.setAttribute("aria-current", "step"));
    }, s.prototype.onTap = s.prototype.onClick = function(t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i);
        }
    }, s.prototype.destroy = function() {
        this.deactivate(), this.allOff();
    }, e.PageDots = s, n.extend(e.defaults, {
        pageDots: !0
    }), e.createMethods.push("_createPageDots");
    var o = e.prototype;
    return o._createPageDots = function() {
        this.options.pageDots && (this.pageDots = new s(this), this.on("activate", this.activatePageDots), 
        this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), 
        this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots));
    }, o.activatePageDots = function() {
        this.pageDots.activate();
    }, o.updateSelectedPageDots = function() {
        this.pageDots.updateSelected();
    }, o.updatePageDots = function() {
        this.pageDots.setDots();
    }, o.deactivatePageDots = function() {
        this.pageDots.deactivate();
    }, e.PageDots = s, e;
})), function(t, n) {
    "function" == typeof define && define.amd ? define("flickity/js/player", [ "ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity" ], (function(t, e, i) {
        return n(t, e, i);
    })) : "object" == typeof module && module.exports ? module.exports = n(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : n(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
}(window, (function(t, e, i) {
    function n(t) {
        this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), 
        this.onVisibilityPlay = this.visibilityPlay.bind(this);
    }
    (n.prototype = Object.create(t.prototype)).play = function() {
        "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", 
        document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()));
    }, n.prototype.tick = function() {
        if ("playing" == this.state) {
            var t = this.parent.options.autoPlay;
            t = "number" == typeof t ? t : 3e3;
            var e = this;
            this.clear(), this.timeout = setTimeout((function() {
                e.parent.next(!0), e.tick();
            }), t);
        }
    }, n.prototype.stop = function() {
        this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange);
    }, n.prototype.clear = function() {
        clearTimeout(this.timeout);
    }, n.prototype.pause = function() {
        "playing" == this.state && (this.state = "paused", this.clear());
    }, n.prototype.unpause = function() {
        "paused" == this.state && this.play();
    }, n.prototype.visibilityChange = function() {
        this[document.hidden ? "pause" : "unpause"]();
    }, n.prototype.visibilityPlay = function() {
        this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay);
    }, e.extend(i.defaults, {
        pauseAutoPlayOnHover: !0
    }), i.createMethods.push("_createPlayer");
    var s = i.prototype;
    return s._createPlayer = function() {
        this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), 
        this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
    }, s.activatePlayer = function() {
        this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this));
    }, s.playPlayer = function() {
        this.player.play();
    }, s.stopPlayer = function() {
        this.player.stop();
    }, s.pausePlayer = function() {
        this.player.pause();
    }, s.unpausePlayer = function() {
        this.player.unpause();
    }, s.deactivatePlayer = function() {
        this.player.stop(), this.element.removeEventListener("mouseenter", this);
    }, s.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this));
    }, s.onmouseleave = function() {
        this.player.unpause(), this.element.removeEventListener("mouseleave", this);
    }, i.Player = n, i;
})), function(i, n) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", [ "./flickity", "fizzy-ui-utils/utils" ], (function(t, e) {
        return n(i, t, e);
    })) : "object" == typeof module && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils);
}(window, (function(t, e, n) {
    var i = e.prototype;
    return i.insert = function(t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
            var n = this.cells.length;
            e = void 0 === e ? n : e;
            var s = function(t) {
                var e = document.createDocumentFragment();
                return t.forEach((function(t) {
                    e.appendChild(t.element);
                })), e;
            }(i), o = e == n;
            if (o) this.slider.appendChild(s); else {
                var r = this.cells[e].element;
                this.slider.insertBefore(s, r);
            }
            if (0 === e) this.cells = i.concat(this.cells); else if (o) this.cells = this.cells.concat(i); else {
                var a = this.cells.splice(e, n - e);
                this.cells = this.cells.concat(i).concat(a);
            }
            this._sizeCells(i), this.cellChange(e, !0);
        }
    }, i.append = function(t) {
        this.insert(t, this.cells.length);
    }, i.prepend = function(t) {
        this.insert(t, 0);
    }, i.remove = function(t) {
        var e = this.getCells(t);
        if (e && e.length) {
            var i = this.cells.length - 1;
            e.forEach((function(t) {
                t.remove();
                var e = this.cells.indexOf(t);
                i = Math.min(e, i), n.removeFrom(this.cells, t);
            }), this), this.cellChange(i, !0);
        }
    }, i.cellSizeChange = function(t) {
        var e = this.getCell(t);
        if (e) {
            e.getSize();
            var i = this.cells.indexOf(e);
            this.cellChange(i);
        }
    }, i.cellChange = function(t, e) {
        var i = this.selectedElement;
        this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
        var n = this.getCell(i);
        n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), 
        this.emitEvent("cellChange", [ t ]), this.select(this.selectedIndex), e && this.positionSliderAtSelected();
    }, e;
})), function(i, n) {
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", [ "./flickity", "fizzy-ui-utils/utils" ], (function(t, e) {
        return n(i, t, e);
    })) : "object" == typeof module && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils);
}(window, (function(t, e, o) {
    "use strict";
    e.createMethods.push("_createLazyload");
    var i = e.prototype;
    function s(t, e) {
        this.img = t, this.flickity = e, this.load();
    }
    return i._createLazyload = function() {
        this.on("select", this.lazyLoad);
    }, i.lazyLoad = function() {
        var t = this.options.lazyLoad;
        if (t) {
            var e = "number" == typeof t ? t : 0, i = this.getAdjacentCellElements(e), n = [];
            i.forEach((function(t) {
                var e = function(t) {
                    if ("IMG" == t.nodeName) {
                        var e = t.getAttribute("data-flickity-lazyload"), i = t.getAttribute("data-flickity-lazyload-src"), n = t.getAttribute("data-flickity-lazyload-srcset");
                        if (e || i || n) return [ t ];
                    }
                    var s = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                    return o.makeArray(s);
                }(t);
                n = n.concat(e);
            })), n.forEach((function(t) {
                new s(t, this);
            }), this);
        }
    }, s.prototype.handleEvent = o.handleEvent, s.prototype.load = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this);
        var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"), e = this.img.getAttribute("data-flickity-lazyload-srcset");
        this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), 
        this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset");
    }, s.prototype.onload = function(t) {
        this.complete(t, "flickity-lazyloaded");
    }, s.prototype.onerror = function(t) {
        this.complete(t, "flickity-lazyerror");
    }, s.prototype.complete = function(t, e) {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img), n = i && i.element;
        this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n);
    }, e.LazyLoader = s, e;
})), function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/index", [ "./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload" ], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")));
}(window, (function(t) {
    return t;
})), function(t, e) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", [ "flickity/js/index", "fizzy-ui-utils/utils" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils);
}(window, (function(n, s) {
    n.createMethods.push("_createAsNavFor");
    var t = n.prototype;
    return t._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), 
        this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
            var e = this;
            setTimeout((function() {
                e.setNavCompanion(t);
            }));
        }
    }, t.setNavCompanion = function(t) {
        t = s.getQueryElement(t);
        var e = n.data(t);
        if (e && e != this) {
            this.navCompanion = e;
            var i = this;
            this.onNavCompanionSelect = function() {
                i.navCompanionSelect();
            }, e.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), 
            this.navCompanionSelect(!0);
        }
    }, t.navCompanionSelect = function(t) {
        var e = this.navCompanion && this.navCompanion.selectedCells;
        if (e) {
            var i = e[0], n = this.navCompanion.cells.indexOf(i), s = n + e.length - 1, o = Math.floor(function(t, e, i) {
                return (e - t) * i + t;
            }(n, s, this.navCompanion.cellAlign));
            if (this.selectCell(o, !1, t), this.removeNavSelectedElements(), !(o >= this.cells.length)) {
                var r = this.cells.slice(n, 1 + s);
                this.navSelectedElements = r.map((function(t) {
                    return t.element;
                })), this.changeNavSelectedClass("add");
            }
        }
    }, t.changeNavSelectedClass = function(e) {
        this.navSelectedElements.forEach((function(t) {
            t.classList[e]("is-nav-selected");
        }));
    }, t.activateAsNavFor = function() {
        this.navCompanionSelect(!0);
    }, t.removeNavSelectedElements = function() {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements);
    }, t.onNavStaticClick = function(t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n);
    }, t.deactivateAsNavFor = function() {
        this.removeNavSelectedElements();
    }, t.destroyAsNavFor = function() {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), 
        this.off("staticClick", this.onNavStaticClick), delete this.navCompanion);
    }, n;
})), function(e, i) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", [ "ev-emitter/ev-emitter" ], (function(t) {
        return i(e, t);
    })) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter);
}("undefined" != typeof window ? window : this, (function(e, t) {
    var s = e.jQuery, o = e.console;
    function r(t, e) {
        for (var i in e) t[i] = e[i];
        return t;
    }
    var a = Array.prototype.slice;
    function l(t, e, i) {
        if (!(this instanceof l)) return new l(t, e, i);
        var n = t;
        "string" == typeof t && (n = document.querySelectorAll(t)), n ? (this.elements = function(t) {
            return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? a.call(t) : [ t ];
        }(n), this.options = r({}, this.options), "function" == typeof e ? i = e : r(this.options, e), 
        i && this.on("always", i), this.getImages(), s && (this.jqDeferred = new s.Deferred), 
        setTimeout(this.check.bind(this))) : o.error("Bad element for imagesLoaded " + (n || t));
    }
    (l.prototype = Object.create(t.prototype)).options = {}, l.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this);
    }, l.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && h[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var s = i[n];
                this.addImage(s);
            }
            if ("string" == typeof this.options.background) {
                var o = t.querySelectorAll(this.options.background);
                for (n = 0; n < o.length; n++) {
                    var r = o[n];
                    this.addElementBackgroundImages(r);
                }
            }
        }
    };
    var h = {
        1: !0,
        9: !0,
        11: !0
    };
    function i(t) {
        this.img = t;
    }
    function n(t, e) {
        this.url = t, this.element = e, this.img = new Image;
    }
    return l.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
            var s = n && n[2];
            s && this.addBackground(s, t), n = i.exec(e.backgroundImage);
        }
    }, l.prototype.addImage = function(t) {
        var e = new i(t);
        this.images.push(e);
    }, l.prototype.addBackground = function(t, e) {
        var i = new n(t, e);
        this.images.push(i);
    }, l.prototype.check = function() {
        var n = this;
        function e(t, e, i) {
            setTimeout((function() {
                n.progress(t, e, i);
            }));
        }
        this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function(t) {
            t.once("progress", e), t.check();
        })) : this.complete();
    }, l.prototype.progress = function(t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [ this, t, e ]), 
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), 
        this.options.debug && o && o.log("progress: " + i, t, e);
    }, l.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [ this ]), this.emitEvent("always", [ this ]), 
        this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this);
        }
    }, (i.prototype = Object.create(t.prototype)).check = function() {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, 
        this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), 
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), 
        this.proxyImage.src = this.img.src);
    }, i.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth;
    }, i.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [ this, this.img, e ]);
    }, i.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, i.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents();
    }, i.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents();
    }, i.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), 
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
    }, (n.prototype = Object.create(i.prototype)).check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), 
        this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), 
        this.unbindEvents());
    }, n.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
    }, n.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [ this, this.element, e ]);
    }, l.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function(t, e) {
            return new l(this, t, e).jqDeferred.promise(s(this));
        });
    }, l.makeJQueryPlugin(), l;
})), function(i, n) {
    "function" == typeof define && define.amd ? define([ "flickity/js/index", "imagesloaded/imagesloaded" ], (function(t, e) {
        return n(i, t, e);
    })) : "object" == typeof module && module.exports ? module.exports = n(i, require("flickity"), require("imagesloaded")) : i.Flickity = n(i, i.Flickity, i.imagesLoaded);
}(window, (function(t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return n._createImagesLoaded = function() {
        this.on("activate", this.imagesLoaded);
    }, n.imagesLoaded = function() {
        if (this.options.imagesLoaded) {
            var n = this;
            i(this.slider).on("progress", (function(t, e) {
                var i = n.getParentCell(e.img);
                n.cellSizeChange(i && i.element), n.options.freeScroll || n.positionSliderAtSelected();
            }));
        }
    }, e;
})), function(b, c, d, e) {
    b.fn.CanvasJSChart = function(a) {
        if (a) {
            var b = this.first();
            return a = new CanvasJS.Chart(this[0], a), b.children(".canvasjs-chart-container").data("canvasjsChartRef", a), 
            a.render(), this;
        }
        return this.first().children(".canvasjs-chart-container").data("canvasjsChartRef");
    };
}(jQuery, window, document), function() {
    function na(h, m) {
        h.prototype = function cb(h) {
            function m() {}
            return m.prototype = h, new m;
        }(m.prototype), h.prototype.constructor = h, h.base = m.prototype;
    }
    function Va(h, m, w) {
        return "millisecond" === w ? h.setMilliseconds(h.getMilliseconds() + 1 * m) : "second" === w ? h.setSeconds(h.getSeconds() + 1 * m) : "minute" === w ? h.setMinutes(h.getMinutes() + 1 * m) : "hour" === w ? h.setHours(h.getHours() + 1 * m) : "day" === w ? h.setDate(h.getDate() + 1 * m) : "week" === w ? h.setDate(h.getDate() + 7 * m) : "month" === w ? h.setMonth(h.getMonth() + 1 * m) : "year" === w && h.setFullYear(h.getFullYear() + 1 * m), 
        h;
    }
    function Y(h, m) {
        var w = !1;
        for (0 > h && (w = !0, h *= -1), h = "" + h, m = m || 1; h.length < m; ) h = "0" + h;
        return w ? "-" + h : h;
    }
    function Ea(h) {
        if (!h) return h;
        for (var m = /\s/, w = (h = h.replace(/^\s\s*/, "")).length; m.test(h.charAt(--w)); ) ;
        return h.slice(0, w + 1);
    }
    function Aa(h) {
        h.roundRect = function(h, w, s, v, qa, D, y, F) {
            y && (this.fillStyle = y), F && (this.strokeStyle = F), void 0 === qa && (qa = 5), 
            this.lineWidth = D, this.beginPath(), this.moveTo(h + qa, w), this.lineTo(h + s - qa, w), 
            this.quadraticCurveTo(h + s, w, h + s, w + qa), this.lineTo(h + s, w + v - qa), 
            this.quadraticCurveTo(h + s, w + v, h + s - qa, w + v), this.lineTo(h + qa, w + v), 
            this.quadraticCurveTo(h, w + v, h, w + v - qa), this.lineTo(h, w + qa), this.quadraticCurveTo(h, w, h + qa, w), 
            this.closePath(), y && this.fill(), F && 0 < D && this.stroke();
        };
    }
    function Pa(h, m) {
        return h - m;
    }
    function Q(h) {
        var m = ((16711680 & h) >> 16).toString(16), w = ((65280 & h) >> 8).toString(16);
        return h = ((255 & h) >> 0).toString(16), "#" + (m = 2 > m.length ? "0" + m : m) + (w = 2 > w.length ? "0" + w : w) + (h = 2 > h.length ? "0" + h : h);
    }
    function db(h, m) {
        var s, w = this.length >>> 0;
        for (0 > (s = 0 > (s = Number(m) || 0) ? Math.ceil(s) : Math.floor(s)) && (s += w); s < w; s++) if (s in this && this[s] === h) return s;
        return -1;
    }
    function s(h) {
        return null == h;
    }
    function Ba(h) {
        return h.indexOf || (h.indexOf = db), h;
    }
    function eb(h) {
        T.fSDec && h[X("`eeDwdouMhrudods")](X("e`u`@ohl`uhnoHuds`uhnoDoe"), (function() {
            T._fTWm && T._fTWm(h);
        }));
    }
    function Wa(h, m, w) {
        var s = h + "_" + m + "_" + (w = w || "normal"), v = Xa[s];
        if (isNaN(v)) {
            try {
                if (h = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + h + "; font-size:" + m + "px; font-weight:" + w + ";", 
                !va) {
                    var qa = document.body;
                    (va = document.createElement("span")).innerHTML = "";
                    var D = document.createTextNode("Mpgyi");
                    va.appendChild(D), qa.appendChild(va);
                }
                va.style.display = "", va.setAttribute("style", h), v = Math.round(va.offsetHeight), 
                va.style.display = "none";
            } catch (y) {
                v = Math.ceil(1.1 * m);
            }
            v = Math.max(v, m), Xa[s] = v;
        }
        return v;
    }
    function N(h, m) {
        var w = [];
        if (w = {
            solid: [],
            shortDash: [ 3, 1 ],
            shortDot: [ 1, 1 ],
            shortDashDot: [ 3, 1, 1, 1 ],
            shortDashDotDot: [ 3, 1, 1, 1, 1, 1 ],
            dot: [ 1, 2 ],
            dash: [ 4, 2 ],
            dashDot: [ 4, 2, 1, 2 ],
            longDash: [ 8, 2 ],
            longDashDot: [ 8, 2, 1, 2 ],
            longDashDotDot: [ 8, 2, 1, 2, 1, 2 ]
        }[h || "solid"]) for (var s = 0; s < w.length; s++) w[s] *= m; else w = [];
        return w;
    }
    function J(h, m, w, v, Fa) {
        return v = v || [], Fa = s(Fa) ? !!fb && {
            passive: !1,
            capture: !1
        } : Fa, v.push([ h, m, w, Fa ]), h.addEventListener ? (h.addEventListener(m, w, Fa), 
        w) : !!h.attachEvent && (v = function(m) {
            (m = m || window.event).preventDefault = m.preventDefault || function() {
                m.returnValue = !1;
            }, m.stopPropagation = m.stopPropagation || function() {
                m.cancelBubble = !0;
            }, w.call(h, m);
        }, h.attachEvent("on" + m, v), v);
    }
    function Ya(h, m, w) {
        for (h *= ga, m *= ga, h = w.getImageData(h, m, 2, 2).data, m = !0, w = 0; 4 > w; w++) if (h[w] !== h[w + 4] | h[w] !== h[w + 8] | h[w] !== h[w + 12]) {
            m = !1;
            break;
        }
        return m ? h[0] << 16 | h[1] << 8 | h[2] : 0;
    }
    function ka(h, m, w) {
        return h in m ? m[h] : w[h];
    }
    function La(h, m, w) {
        if (v && Za) {
            var s = h.getContext("2d");
            Ma = s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1, 
            ga = Qa / Ma, h.width = m * ga, h.height = w * ga, Qa !== Ma && (h.style.width = m + "px", 
            h.style.height = w + "px", s.scale(ga, ga));
        } else h.width = m, h.height = w;
    }
    function hb(h) {
        if (!ib) {
            var m = !1, w = !1;
            void 0 === pa.Chart.creditHref ? (h.creditHref = X("iuuqr;..b`ow`rkr/bnl."), h.creditText = X("B`ow`rKR/bnl")) : (m = h.updateOption("creditText"), 
            w = h.updateOption("creditHref")), h.creditHref && h.creditText && (h._creditLink || (h._creditLink = document.createElement("a"), 
            h._creditLink.setAttribute("class", "canvasjs-chart-credit"), h._creditLink.setAttribute("title", "JavaScript Charts"), 
            h._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:2px;top:" + (h.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"), 
            h._creditLink.setAttribute("tabIndex", -1), h._creditLink.setAttribute("target", "_blank")), 
            (0 === h.renderCount || m || w) && (h._creditLink.setAttribute("href", h.creditHref), 
            h._creditLink.innerHTML = h.creditText), h._creditLink && h.creditHref && h.creditText ? (h._creditLink.parentElement || h._canvasJSContainer.appendChild(h._creditLink), 
            h._creditLink.style.top = h.height - 14 + "px") : h._creditLink.parentElement && h._canvasJSContainer.removeChild(h._creditLink));
        }
    }
    function sa(h, m) {
        Ga && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
        var w = document.createElement("canvas");
        return w.setAttribute("class", "canvasjs-chart-canvas"), La(w, h, m), v || "undefined" == typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(w), 
        w;
    }
    function oa(h, m) {
        for (var w in m) h.style[w] = m[w];
    }
    function ua(h, m, w) {
        m.getAttribute("state") || (m.style.backgroundColor = h.toolbar.backgroundColor, 
        m.style.color = h.toolbar.fontColor, m.style.border = "none", oa(m, {
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none"
        })), m.getAttribute("state") !== w && (m.setAttribute("state", w), m.setAttribute("type", "button"), 
        oa(m, {
            padding: "5px 12px",
            cursor: "pointer",
            float: "left",
            width: "40px",
            height: "25px",
            outline: "0px",
            verticalAlign: "baseline",
            lineHeight: "0"
        }), m.setAttribute("title", h._cultureInfo[w + "Text"]), m.innerHTML = "<img style='height:95%; pointer-events: none;' src='" + jb[w].image + "' alt='" + h._cultureInfo[w + "Text"] + "' />");
    }
    function Ka() {
        for (var h = null, m = 0; m < arguments.length; m++) (h = arguments[m]).style && (h.style.display = "inline");
    }
    function ta() {
        for (var h = null, m = 0; m < arguments.length; m++) (h = arguments[m]) && h.style && (h.style.display = "none");
    }
    function Ra(h, m, w, s, v) {
        return null == h ? void 0 === w ? m : w : (h = parseFloat(h.toString()) * (0 <= h.toString().indexOf("%") ? m / 100 : 1), 
        void 0 !== s && (h = Math.min(s, h), void 0 !== v && (h = Math.max(v, h))), !isNaN(h) && h <= m && 0 <= h ? h : void 0 === w ? m : w);
    }
    function V(h, m, w, v, y) {
        this._defaultsKey = h, this._themeOptionsKey = m, this._index = v, this.parent = y, 
        this._eventListeners = [], h = {}, this.theme && s(this.parent) && s(m) && s(v) ? h = s(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && this.parent.themeOptions && this.parent.themeOptions[m] && (null === v ? h = this.parent.themeOptions[m] : 0 < this.parent.themeOptions[m].length && (v = Math.min(this.parent.themeOptions[m].length - 1, v), 
        h = this.parent.themeOptions[m][v])), this.themeOptions = h, this.options = w || {
            _isPlaceholder: !0
        }, this.setOptions(this.options, h);
    }
    function Ca(h, m, w, s, v) {
        void 0 === v && (v = 0), this._padding = v, this._x1 = h, this._y1 = m, this._x2 = w, 
        this._y2 = s, this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
    }
    function ia(h, m) {
        ia.base.constructor.call(this, "TextBlock", null, m, null, null), this.ctx = h, 
        this._isDirty = !0, this._wrappedText = null, this._initialize();
    }
    function Sa(h, m) {
        Sa.base.constructor.call(this, "Toolbar", "toolbar", m, null, h), this.chart = h, 
        this.canvas = h.canvas, this.ctx = this.chart.ctx, this.optionsName = "toolbar";
    }
    function xa(h, m) {
        if (xa.base.constructor.call(this, "Title", "title", m, null, h), this.chart = h, 
        this.canvas = h.canvas, this.ctx = this.chart.ctx, this.optionsName = "title", s(this.options.margin) && h.options.subtitles) for (var w = h.options.subtitles, v = 0; v < w.length; v++) if ((s(w[v].horizontalAlign) && "center" === this.horizontalAlign || w[v].horizontalAlign === this.horizontalAlign) && (s(w[v].verticalAlign) && "top" === this.verticalAlign || w[v].verticalAlign === this.verticalAlign) && !w[v].dockInsidePlotArea == !this.dockInsidePlotArea) {
            this.margin = 0;
            break;
        }
        void 0 === this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize)), 
        this.height = this.width = null, this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        };
    }
    function Ha(h, m, w) {
        Ha.base.constructor.call(this, "Subtitle", "subtitles", m, w, h), this.chart = h, 
        this.canvas = h.canvas, this.ctx = this.chart.ctx, this.optionsName = "subtitles", 
        this.isOptionsInArray = !0, void 0 === this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize)), 
        this.height = this.width = null, this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        };
    }
    function Ta() {
        this.pool = [];
    }
    function Ia(h) {
        var m;
        h && Ja[h] && (m = Ja[h]), Ia.base.constructor.call(this, "CultureInfo", null, m, null, null);
    }
    var H, $, Z, da, ha, Ga = !1, T = {}, v = !!document.createElement("canvas").getContext, pa = {
        Chart: {
            width: 500,
            height: 400,
            zoomEnabled: !1,
            zoomType: "x",
            backgroundColor: "white",
            theme: "light1",
            animationEnabled: !1,
            animationDuration: 1200,
            dataPointWidth: null,
            dataPointMinWidth: null,
            dataPointMaxWidth: null,
            colorSet: "colorSet1",
            culture: "en",
            creditHref: "",
            creditText: "CanvasJS",
            interactivityEnabled: !0,
            exportEnabled: !1,
            exportFileName: "Chart",
            rangeChanging: null,
            rangeChanged: null,
            publicProperties: {
                title: "readWrite",
                subtitles: "readWrite",
                toolbar: "readWrite",
                toolTip: "readWrite",
                legend: "readWrite",
                axisX: "readWrite",
                axisY: "readWrite",
                axisX2: "readWrite",
                axisY2: "readWrite",
                data: "readWrite",
                options: "readWrite",
                bounds: "readOnly",
                container: "readOnly",
                selectedColorSet: "readOnly"
            }
        },
        Title: {
            padding: 0,
            text: null,
            verticalAlign: "top",
            horizontalAlign: "center",
            fontSize: 20,
            fontFamily: "Calibri",
            fontWeight: "normal",
            fontColor: "black",
            fontStyle: "normal",
            borderThickness: 0,
            borderColor: "black",
            cornerRadius: 0,
            backgroundColor: v ? "transparent" : null,
            margin: 5,
            wrap: !0,
            maxWidth: null,
            dockInsidePlotArea: !1,
            publicProperties: {
                options: "readWrite",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        Subtitle: {
            padding: 0,
            text: null,
            verticalAlign: "top",
            horizontalAlign: "center",
            fontSize: 14,
            fontFamily: "Calibri",
            fontWeight: "normal",
            fontColor: "black",
            fontStyle: "normal",
            borderThickness: 0,
            borderColor: "black",
            cornerRadius: 0,
            backgroundColor: null,
            margin: 2,
            wrap: !0,
            maxWidth: null,
            dockInsidePlotArea: !1,
            publicProperties: {
                options: "readWrite",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        Toolbar: {
            backgroundColor: "white",
            backgroundColorOnHover: "#2196f3",
            borderColor: "#2196f3",
            borderThickness: 1,
            fontColor: "black",
            fontColorOnHover: "white",
            publicProperties: {
                options: "readWrite",
                chart: "readOnly"
            }
        },
        Legend: {
            name: null,
            verticalAlign: "center",
            horizontalAlign: "right",
            fontSize: 14,
            fontFamily: "calibri",
            fontWeight: "normal",
            fontColor: "black",
            fontStyle: "normal",
            cursor: null,
            itemmouseover: null,
            itemmouseout: null,
            itemmousemove: null,
            itemclick: null,
            dockInsidePlotArea: !1,
            reversed: !1,
            backgroundColor: v ? "transparent" : null,
            borderColor: v ? "transparent" : null,
            borderThickness: 0,
            cornerRadius: 0,
            maxWidth: null,
            maxHeight: null,
            markerMargin: null,
            itemMaxWidth: null,
            itemWidth: null,
            itemWrap: !0,
            itemTextFormatter: null,
            publicProperties: {
                options: "readWrite",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        ToolTip: {
            enabled: !0,
            shared: !1,
            animationEnabled: !0,
            content: null,
            contentFormatter: null,
            reversed: !1,
            backgroundColor: v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
            borderColor: null,
            borderThickness: 2,
            cornerRadius: 5,
            fontSize: 14,
            fontColor: "black",
            fontFamily: "Calibri, Arial, Georgia, serif;",
            fontWeight: "normal",
            fontStyle: "italic",
            updated: null,
            hidden: null,
            publicProperties: {
                options: "readWrite",
                chart: "readOnly"
            }
        },
        Axis: {
            minimum: null,
            maximum: null,
            viewportMinimum: null,
            viewportMaximum: null,
            interval: null,
            intervalType: null,
            reversed: !1,
            logarithmic: !1,
            logarithmBase: 10,
            title: null,
            titleFontColor: "black",
            titleFontSize: 20,
            titleFontFamily: "arial",
            titleFontWeight: "normal",
            titleFontStyle: "normal",
            titleWrap: !0,
            titleMaxWidth: null,
            titleBackgroundColor: v ? "transparent" : null,
            titleBorderColor: v ? "transparent" : null,
            titleBorderThickness: 0,
            titleCornerRadius: 0,
            labelAngle: 0,
            labelFontFamily: "arial",
            labelFontColor: "black",
            labelFontSize: 12,
            labelFontWeight: "normal",
            labelFontStyle: "normal",
            labelAutoFit: !0,
            labelWrap: !0,
            labelMaxWidth: null,
            labelFormatter: null,
            labelBackgroundColor: v ? "transparent" : null,
            labelBorderColor: v ? "transparent" : null,
            labelBorderThickness: 0,
            labelCornerRadius: 0,
            labelPlacement: "outside",
            labelTextAlign: "left",
            prefix: "",
            suffix: "",
            includeZero: !1,
            tickLength: 5,
            tickColor: "black",
            tickThickness: 1,
            tickPlacement: "outside",
            lineColor: "black",
            lineThickness: 1,
            lineDashType: "solid",
            gridColor: "#A0A0A0",
            gridThickness: 0,
            gridDashType: "solid",
            interlacedColor: v ? "transparent" : null,
            valueFormatString: null,
            margin: 2,
            publicProperties: {
                options: "readWrite",
                stripLines: "readWrite",
                scaleBreaks: "readWrite",
                crosshair: "readWrite",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        StripLine: {
            value: null,
            startValue: null,
            endValue: null,
            color: "orange",
            opacity: null,
            thickness: 2,
            lineDashType: "solid",
            label: "",
            labelPlacement: "inside",
            labelAlign: "far",
            labelWrap: !0,
            labelMaxWidth: null,
            labelBackgroundColor: null,
            labelBorderColor: v ? "transparent" : null,
            labelBorderThickness: 0,
            labelCornerRadius: 0,
            labelFontFamily: "arial",
            labelFontColor: "orange",
            labelFontSize: 12,
            labelFontWeight: "normal",
            labelFontStyle: "normal",
            labelFormatter: null,
            showOnTop: !1,
            publicProperties: {
                options: "readWrite",
                axis: "readOnly",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        ScaleBreaks: {
            autoCalculate: !1,
            collapsibleThreshold: "25%",
            maxNumberOfAutoBreaks: 2,
            spacing: 8,
            type: "straight",
            color: "#FFFFFF",
            fillOpacity: .9,
            lineThickness: 2,
            lineColor: "#E16E6E",
            lineDashType: "solid",
            publicProperties: {
                options: "readWrite",
                customBreaks: "readWrite",
                axis: "readOnly",
                autoBreaks: "readOnly",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        Break: {
            startValue: null,
            endValue: null,
            spacing: 8,
            type: "straight",
            color: "#FFFFFF",
            fillOpacity: .9,
            lineThickness: 2,
            lineColor: "#E16E6E",
            lineDashType: "solid",
            publicProperties: {
                options: "readWrite",
                scaleBreaks: "readOnly",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        Crosshair: {
            enabled: !1,
            snapToDataPoint: !1,
            color: "grey",
            opacity: null,
            thickness: 2,
            lineDashType: "solid",
            label: "",
            labelWrap: !0,
            labelMaxWidth: null,
            labelBackgroundColor: v ? "grey" : null,
            labelBorderColor: v ? "grey" : null,
            labelBorderThickness: 0,
            labelCornerRadius: 0,
            labelFontFamily: v ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
            labelFontSize: 12,
            labelFontColor: "#fff",
            labelFontWeight: "normal",
            labelFontStyle: "normal",
            labelFormatter: null,
            valueFormatString: null,
            updated: null,
            hidden: null,
            publicProperties: {
                options: "readWrite",
                axis: "readOnly",
                bounds: "readOnly",
                chart: "readOnly"
            }
        },
        DataSeries: {
            name: null,
            dataPoints: null,
            label: "",
            bevelEnabled: !1,
            highlightEnabled: !0,
            cursor: "default",
            indexLabel: "",
            indexLabelPlacement: "auto",
            indexLabelOrientation: "horizontal",
            indexLabelFontColor: "black",
            indexLabelFontSize: 12,
            indexLabelFontStyle: "normal",
            indexLabelFontFamily: "Arial",
            indexLabelFontWeight: "normal",
            indexLabelBackgroundColor: null,
            indexLabelLineColor: "gray",
            indexLabelLineThickness: 1,
            indexLabelLineDashType: "solid",
            indexLabelMaxWidth: null,
            indexLabelWrap: !0,
            indexLabelFormatter: null,
            lineThickness: 2,
            lineDashType: "solid",
            connectNullData: !1,
            nullDataLineDashType: "dash",
            color: null,
            lineColor: null,
            risingColor: "white",
            fallingColor: "red",
            fillOpacity: null,
            startAngle: 0,
            radius: null,
            innerRadius: null,
            neckHeight: null,
            neckWidth: null,
            reversed: !1,
            valueRepresents: null,
            linkedDataSeriesIndex: null,
            whiskerThickness: 2,
            whiskerDashType: "solid",
            whiskerColor: null,
            whiskerLength: null,
            stemThickness: 2,
            stemColor: null,
            stemDashType: "solid",
            upperBoxColor: "white",
            lowerBoxColor: "white",
            type: "column",
            xValueType: "number",
            axisXType: "primary",
            axisYType: "primary",
            axisXIndex: 0,
            axisYIndex: 0,
            xValueFormatString: null,
            yValueFormatString: null,
            zValueFormatString: null,
            percentFormatString: null,
            showInLegend: null,
            legendMarkerType: null,
            legendMarkerColor: null,
            legendText: null,
            legendMarkerBorderColor: v ? "transparent" : null,
            legendMarkerBorderThickness: 0,
            markerType: "circle",
            markerColor: null,
            markerSize: null,
            markerBorderColor: v ? "transparent" : null,
            markerBorderThickness: 0,
            mouseover: null,
            mouseout: null,
            mousemove: null,
            click: null,
            toolTipContent: null,
            visible: !0,
            publicProperties: {
                options: "readWrite",
                axisX: "readWrite",
                axisY: "readWrite",
                chart: "readOnly"
            }
        },
        TextBlock: {
            x: 0,
            y: 0,
            width: null,
            height: null,
            maxWidth: null,
            maxHeight: null,
            padding: 0,
            angle: 0,
            text: "",
            horizontalAlign: "center",
            textAlign: "left",
            fontSize: 12,
            fontFamily: "calibri",
            fontWeight: "normal",
            fontColor: "black",
            fontStyle: "normal",
            borderThickness: 0,
            borderColor: "black",
            cornerRadius: 0,
            backgroundColor: null,
            textBaseline: "top"
        },
        CultureInfo: {
            decimalSeparator: ".",
            digitGroupSeparator: ",",
            zoomText: "Zoom",
            panText: "Pan",
            resetText: "Reset",
            menuText: "More Options",
            saveJPGText: "Save as JPEG",
            savePNGText: "Save as PNG",
            printText: "Print",
            days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            months: "January February March April May June July August September October November December".split(" "),
            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
        }
    }, Ja = {
        en: {}
    }, y = v ? "Trebuchet MS, Helvetica, sans-serif" : "Arial", Da = v ? "Impact, Charcoal, sans-serif" : "Arial", ya = {
        colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
        colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
        colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
    }, Ua = {
        colorSet: "colorSet1",
        backgroundColor: "#FFFFFF",
        title: {
            fontFamily: Da,
            fontSize: 32,
            fontColor: $ = "#333333",
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        },
        subtitles: [ {
            fontFamily: Da,
            fontSize: F = 14,
            fontColor: $,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        } ],
        data: [ {
            indexLabelFontFamily: y,
            indexLabelFontSize: F,
            indexLabelFontColor: $,
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1
        } ],
        axisX: [ {
            titleFontFamily: y,
            titleFontSize: U = 20,
            titleFontColor: $,
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: F,
            labelFontColor: Z = "#000000",
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: H = "#666666",
            tickThickness: 1,
            tickColor: H,
            gridThickness: 0,
            gridColor: H,
            stripLines: [ {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            } ],
            crosshair: {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: ha = da = "#000000",
                color: da,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        } ],
        axisX2: [ {
            titleFontFamily: y,
            titleFontSize: U,
            titleFontColor: $,
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: F,
            labelFontColor: Z,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: H,
            tickThickness: 1,
            tickColor: H,
            gridThickness: 0,
            gridColor: H,
            stripLines: [ {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            } ],
            crosshair: {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: ha,
                color: da,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        } ],
        axisY: [ {
            titleFontFamily: y,
            titleFontSize: U,
            titleFontColor: $,
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: F,
            labelFontColor: Z,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: H,
            tickThickness: 1,
            tickColor: H,
            gridThickness: 1,
            gridColor: H,
            stripLines: [ {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            } ],
            crosshair: {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: ha,
                color: da,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        } ],
        axisY2: [ {
            titleFontFamily: y,
            titleFontSize: U,
            titleFontColor: $,
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: F,
            labelFontColor: Z,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: H,
            tickThickness: 1,
            tickColor: H,
            gridThickness: 1,
            gridColor: H,
            stripLines: [ {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            } ],
            crosshair: {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: ha,
                color: da,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        } ],
        legend: {
            fontFamily: y,
            fontSize: 14,
            fontColor: $,
            fontWeight: "bold",
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        toolTip: {
            fontFamily: y,
            fontSize: 14,
            fontStyle: "normal",
            cornerRadius: 0,
            borderThickness: 1
        }
    };
    Z = $ = "#F5F5F5", H = "#FFFFFF", da = "#40BAF1", ha = "#F5F5F5";
    var $a = {
        colorSet: "colorSet2",
        title: {
            fontFamily: y,
            fontSize: 33,
            fontColor: "#3A3A3A",
            fontWeight: "bold",
            verticalAlign: "top",
            margin: 5
        },
        subtitles: [ {
            fontFamily: y,
            fontSize: F = 14,
            fontColor: "#3A3A3A",
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        } ],
        data: [ {
            indexLabelFontFamily: y,
            indexLabelFontSize: F,
            indexLabelFontColor: "#666666",
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1
        } ],
        axisX: [ {
            titleFontFamily: y,
            titleFontSize: U = 20,
            titleFontColor: "#666666",
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: F,
            labelFontColor: "#666666",
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: "#BBBBBB",
            tickThickness: 1,
            tickColor: "#BBBBBB",
            gridThickness: 1,
            gridColor: "#BBBBBB",
            stripLines: [ {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#FFA500",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FFA500",
                thickness: 1
            } ],
            crosshair: {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: "black",
                color: "black",
                thickness: 1,
                lineDashType: "dot"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        } ],
        axisX2: [ {
            titleFontFamily: y,
            titleFontSize: U,
            titleFontColor: "#666666",
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: F,
            labelFontColor: "#666666",
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: "#BBBBBB",
            tickColor: "#BBBBBB",
            tickThickness: 1,
            gridThickness: 1,
            gridColor: "#BBBBBB",
            stripLines: [ {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#FFA500",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FFA500",
                thickness: 1
            } ],
            crosshair: {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: "black",
                color: "black",
                thickness: 1,
                lineDashType: "dot"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        } ],
        axisY: [ {
            titleFontFamily: y,
            titleFontSize: U,
            titleFontColor: "#666666",
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: F,
            labelFontColor: "#666666",
            labelFontWeight: "normal",
            lineThickness: 0,
            lineColor: "#BBBBBB",
            tickColor: "#BBBBBB",
            tickThickness: 1,
            gridThickness: 1,
            gridColor: "#BBBBBB",
            stripLines: [ {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#FFA500",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FFA500",
                thickness: 1
            } ],
            crosshair: {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: "black",
                color: "black",
                thickness: 1,
                lineDashType: "dot"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        } ],
        axisY2: [ {
            titleFontFamily: y,
            titleFontSize: U,
            titleFontColor: "#666666",
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: F,
            labelFontColor: "#666666",
            labelFontWeight: "normal",
            lineThickness: 0,
            lineColor: "#BBBBBB",
            tickColor: "#BBBBBB",
            tickThickness: 1,
            gridThickness: 1,
            gridColor: "#BBBBBB",
            stripLines: [ {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#FFA500",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FFA500",
                thickness: 1
            } ],
            crosshair: {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#EEEEEE",
                labelFontWeight: "normal",
                labelBackgroundColor: "black",
                color: "black",
                thickness: 1,
                lineDashType: "dot"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#BBBBBB",
                lineThickness: 1,
                lineDashType: "solid"
            }
        } ],
        legend: {
            fontFamily: y,
            fontSize: 14,
            fontColor: "#3A3A3A",
            fontWeight: "bold",
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        toolTip: {
            fontFamily: y,
            fontSize: 14,
            fontStyle: "normal",
            cornerRadius: 0,
            borderThickness: 1
        }
    };
    Z = $ = "#F5F5F5", Da = {
        colorSet: "colorSet12",
        backgroundColor: "#2A2A2A",
        title: {
            fontFamily: Da,
            fontSize: 32,
            fontColor: $,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        },
        subtitles: [ {
            fontFamily: Da,
            fontSize: F = 14,
            fontColor: $,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        } ],
        toolbar: {
            backgroundColor: "#666666",
            backgroundColorOnHover: "#FF7372",
            borderColor: "#FF7372",
            borderThickness: 1,
            fontColor: "#F5F5F5",
            fontColorOnHover: "#F5F5F5"
        },
        data: [ {
            indexLabelFontFamily: y,
            indexLabelFontSize: F,
            indexLabelFontColor: Z,
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1
        } ],
        axisX: [ {
            titleFontFamily: y,
            titleFontSize: U = 20,
            titleFontColor: Z,
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: F,
            labelFontColor: Z,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: H = "#FFFFFF",
            tickThickness: 1,
            tickColor: H,
            gridThickness: 0,
            gridColor: H,
            stripLines: [ {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            } ],
            crosshair: {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: ha = "#F5F5F5",
                color: da = "#40BAF1",
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        } ],
        axisX2: [ {
            titleFontFamily: y,
            titleFontSize: U,
            titleFontColor: Z,
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: F,
            labelFontColor: Z,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: H,
            tickThickness: 1,
            tickColor: H,
            gridThickness: 0,
            gridColor: H,
            stripLines: [ {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            } ],
            crosshair: {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: ha,
                color: da,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        } ],
        axisY: [ {
            titleFontFamily: y,
            titleFontSize: U,
            titleFontColor: Z,
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: F,
            labelFontColor: Z,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: H,
            tickThickness: 1,
            tickColor: H,
            gridThickness: 1,
            gridColor: H,
            stripLines: [ {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            } ],
            crosshair: {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: ha,
                color: da,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        } ],
        axisY2: [ {
            titleFontFamily: y,
            titleFontSize: U,
            titleFontColor: Z,
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: F,
            labelFontColor: Z,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: H,
            tickThickness: 1,
            tickColor: H,
            gridThickness: 1,
            gridColor: H,
            stripLines: [ {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            } ],
            crosshair: {
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: ha,
                color: da,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        } ],
        legend: {
            fontFamily: y,
            fontSize: 14,
            fontColor: $,
            fontWeight: "bold",
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        toolTip: {
            fontFamily: y,
            fontSize: 14,
            fontStyle: "normal",
            cornerRadius: 0,
            borderThickness: 1,
            fontColor: Z,
            backgroundColor: "rgba(0, 0, 0, .7)"
        }
    }, Z = $ = "#FAFAFA";
    var U, F, ab = {
        light1: Ua,
        light2: $a,
        dark1: Da,
        dark2: {
            colorSet: "colorSet2",
            backgroundColor: "#32373A",
            title: {
                fontFamily: y,
                fontSize: 32,
                fontColor: $,
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            },
            subtitles: [ {
                fontFamily: y,
                fontSize: F = 14,
                fontColor: $,
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            } ],
            toolbar: {
                backgroundColor: "#666666",
                backgroundColorOnHover: "#FF7372",
                borderColor: "#FF7372",
                borderThickness: 1,
                fontColor: "#F5F5F5",
                fontColorOnHover: "#F5F5F5"
            },
            data: [ {
                indexLabelFontFamily: y,
                indexLabelFontSize: F,
                indexLabelFontColor: Z,
                indexLabelFontWeight: "normal",
                indexLabelLineThickness: 1
            } ],
            axisX: [ {
                titleFontFamily: y,
                titleFontSize: U = 20,
                titleFontColor: Z,
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: Z,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: H = "#FFFFFF",
                tickThickness: 1,
                tickColor: H,
                gridThickness: 0,
                gridColor: H,
                stripLines: [ {
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                } ],
                crosshair: {
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: "#000000",
                    labelFontWeight: "normal",
                    labelBackgroundColor: ha = "#F5F5F5",
                    color: da = "#40BAF1",
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#777777",
                    lineThickness: 1,
                    lineDashType: "solid",
                    color: "#111111"
                }
            } ],
            axisX2: [ {
                titleFontFamily: y,
                titleFontSize: U,
                titleFontColor: Z,
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: Z,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: H,
                tickThickness: 1,
                tickColor: H,
                gridThickness: 0,
                gridColor: H,
                stripLines: [ {
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                } ],
                crosshair: {
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: "#000000",
                    labelFontWeight: "normal",
                    labelBackgroundColor: ha,
                    color: da,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#777777",
                    lineThickness: 1,
                    lineDashType: "solid",
                    color: "#111111"
                }
            } ],
            axisY: [ {
                titleFontFamily: y,
                titleFontSize: U,
                titleFontColor: Z,
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: Z,
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: H,
                tickThickness: 1,
                tickColor: H,
                gridThickness: 1,
                gridColor: H,
                stripLines: [ {
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                } ],
                crosshair: {
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: "#000000",
                    labelFontWeight: "normal",
                    labelBackgroundColor: ha,
                    color: da,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#777777",
                    lineThickness: 1,
                    lineDashType: "solid",
                    color: "#111111"
                }
            } ],
            axisY2: [ {
                titleFontFamily: y,
                titleFontSize: U,
                titleFontColor: Z,
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: Z,
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: H,
                tickThickness: 1,
                tickColor: H,
                gridThickness: 1,
                gridColor: H,
                stripLines: [ {
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                } ],
                crosshair: {
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: "#000000",
                    labelFontWeight: "normal",
                    labelBackgroundColor: ha,
                    color: da,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#777777",
                    lineThickness: 1,
                    lineDashType: "solid",
                    color: "#111111"
                }
            } ],
            legend: {
                fontFamily: y,
                fontSize: 14,
                fontColor: $,
                fontWeight: "bold",
                verticalAlign: "bottom",
                horizontalAlign: "center"
            },
            toolTip: {
                fontFamily: y,
                fontSize: 14,
                fontStyle: "normal",
                cornerRadius: 0,
                borderThickness: 1,
                fontColor: Z,
                backgroundColor: "rgba(0, 0, 0, .7)"
            }
        },
        theme1: Ua,
        theme2: $a,
        theme3: Ua
    }, R = {
        numberDuration: 1,
        yearDuration: 314496e5,
        monthDuration: 2592e6,
        weekDuration: 6048e5,
        dayDuration: 864e5,
        hourDuration: 36e5,
        minuteDuration: 6e4,
        secondDuration: 1e3,
        millisecondDuration: 1,
        dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
    };
    T.fSDec = function(h) {
        for (var m = "", w = 0; w < h.length; w++) m += String.fromCharCode(Math.ceil(h.length / 57 / 5) ^ h.charCodeAt(w));
        return m;
    }, T.obj = {
        trVs: "B`ow`rKR!Ush`m",
        fntStr: "qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg",
        txtBl: "udyuC`rdmhod",
        fnt: "gnou",
        fSy: "ghmmRuxmd",
        fTx: "ghmmUdyu",
        grClr: "fsdx",
        cntx: "buy",
        tp: "unq",
        msTxt: "ld`rtsdUdyu"
    }, delete pa[T.fSDec("Bi`su")][T.fSDec("bsdehuIsdg")], T.pro = {
        sCH: pa[T.fSDec("Bi`su")][T.fSDec("bsdehuIsdg")]
    }, T.pos = [ "cm", "cs", "um" ], T._fTWm = function(h) {
        if (void 0 === T.pro.sCH && !bb) try {
            var w, s, m = (new Date).getMonth() % 3, v = h[T.fSDec(T.obj.cntx)];
            v[T.fSDec(T.obj.txtBl)] = T.fSDec(T.obj.tp), v[T.fSDec(T.obj.fnt)] = 11 + T.fSDec(T.obj.fntStr), 
            v[T.fSDec(T.obj.fSy)] = T.fSDec(T.obj.grClr), w = "cm" === T.pos[m] || "um" === T.pos[m] ? 0 : h.width - v[T.fSDec(T.obj.msTxt)](T.fSDec(T.obj.trVs)).width, 
            s = "um" === T.pos[m] ? 0 : h.height - 11, v[T.fSDec(T.obj.fTx)](T.fSDec(T.obj.trVs), w, s), 
            "cs" === T.pos[m] && (h[T.fSDec("^bsdehuMhoj")].style.right = T.fSDec("`tun"));
        } catch (y) {}
    };
    var fb = function() {
        var h = !1;
        try {
            var m = Object.defineProperty && Object.defineProperty({}, "passive", {
                get: function() {
                    return h = !0, !1;
                }
            });
            window.addEventListener && (window.addEventListener("test", null, m), window.removeEventListener("test", null, m));
        } catch (w) {
            h = !1;
        }
        return h;
    }(), Xa = {}, va = null, kb = function() {
        this.ctx.clearRect(0, 0, this.width, this.height), this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, 
        this.ctx.fillRect(0, 0, this.width, this.height));
    }, lb = function(h, m, w) {
        return m = Math.min(this.width, this.height), Math.max("theme4" === this.theme ? 0 : 300 <= m ? 12 : 11, Math.round(m * (h / 400)));
    }, za = function() {
        var h = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g, m = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), w = "Sun Mon Tue Wed Thu Fri Sat".split(" "), s = "January February March April May June July August September October November December".split(" "), v = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, D = /[^-+\dA-Z]/g;
        return function(F, N, M) {
            var T = M ? M.days : m, H = M ? M.months : s, Q = M ? M.shortDays : w, J = M ? M.shortMonths : v;
            M = "";
            var R = !1;
            if (F = F && F.getTime ? F : F ? new Date(F) : new Date, isNaN(F)) throw SyntaxError("invalid date");
            "UTC:" === N.slice(0, 4) && (N = N.slice(4), R = !0);
            var V = F[(M = R ? "getUTC" : "get") + "Date"](), L = F[M + "Day"](), W = F[M + "Month"](), a = F[M + "FullYear"](), d = F[M + "Hours"](), c = F[M + "Minutes"](), b = F[M + "Seconds"](), e = F[M + "Milliseconds"](), f = R ? 0 : F.getTimezoneOffset();
            return N.replace(h, (function(l) {
                switch (l) {
                  case "D":
                    return V;

                  case "DD":
                    return Y(V, 2);

                  case "DDD":
                    return Q[L];

                  case "DDDD":
                    return T[L];

                  case "M":
                    return W + 1;

                  case "MM":
                    return Y(W + 1, 2);

                  case "MMM":
                    return J[W];

                  case "MMMM":
                    return H[W];

                  case "Y":
                    return parseInt(String(a).slice(-2));

                  case "YY":
                    return Y(String(a).slice(-2), 2);

                  case "YYY":
                    return Y(String(a).slice(-3), 3);

                  case "YYYY":
                    return Y(a, 4);

                  case "h":
                    return d % 12 || 12;

                  case "hh":
                    return Y(d % 12 || 12, 2);

                  case "H":
                    return d;

                  case "HH":
                    return Y(d, 2);

                  case "m":
                    return c;

                  case "mm":
                    return Y(c, 2);

                  case "s":
                    return b;

                  case "ss":
                    return Y(b, 2);

                  case "f":
                    return Y(String(e), 3).slice(0, 1);

                  case "ff":
                    return Y(String(e), 3).slice(0, 2);

                  case "fff":
                    return Y(String(e), 3).slice(0, 3);

                  case "t":
                    return 12 > d ? "a" : "p";

                  case "tt":
                    return 12 > d ? "am" : "pm";

                  case "T":
                    return 12 > d ? "A" : "P";

                  case "TT":
                    return 12 > d ? "AM" : "PM";

                  case "K":
                    return R ? "UTC" : (String(F).match(y) || [ "" ]).pop().replace(D, "");

                  case "z":
                    return (0 < f ? "-" : "+") + Math.floor(Math.abs(f) / 60);

                  case "zz":
                    return (0 < f ? "-" : "+") + Y(Math.floor(Math.abs(f) / 60), 2);

                  case "zzz":
                    return (0 < f ? "-" : "+") + Y(Math.floor(Math.abs(f) / 60), 2) + Y(Math.abs(f) % 60, 2);

                  default:
                    return l.slice(1, l.length - 1);
                }
            }));
        };
    }(), ea = function(h, m, w) {
        if (null === h) return "";
        if (!isFinite(h)) return h;
        var s = 0 > (h = Number(h));
        s && (h *= -1);
        var v = w ? w.decimalSeparator : ".", y = w ? w.digitGroupSeparator : ",", D = "";
        m = String(m);
        D = 1;
        var F = w = "", N = -1, M = [], T = [], H = 0, Q = 0, R = 0, J = !1, V = 0;
        F = m.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
        m = null;
        for (var L = 0; F && L < F.length; L++) if ("." === (m = F[L]) && 0 > N) N = L; else {
            if ("%" === m) D *= 100; else {
                if ("‰" === m) {
                    D *= 1e3;
                    continue;
                }
                if ("," === m[0] && "." === m[m.length - 1]) {
                    D /= Math.pow(1e3, m.length - 1), N = L + m.length - 1;
                    continue;
                }
                "E" !== m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || (J = !0);
            }
            0 > N ? (M.push(m), "#" === m || "0" === m ? H++ : "," === m && R++) : (T.push(m), 
            "#" !== m && "0" !== m || Q++);
        }
        for (J && (m = Math.floor(h), F = -Math.floor(Math.log(h) / Math.LN10 + 1), V = 0 === h ? 0 : 0 === m ? -(H + F) : String(m).length - H, 
        D /= Math.pow(10, V)), 0 > N && (N = L), m = (D = (h * D).toFixed(Q)).split("."), 
        D = (m[0] + "").split(""), h = (m[1] + "").split(""), D && "0" === D[0] && D.shift(), 
        J = F = L = Q = N = 0; 0 < M.length; ) if ("#" === (m = M.pop()) || "0" === m) if (++N === H) {
            var W = D;
            D = [];
            if ("0" === m) for (m = H - Q - (W ? W.length : 0); 0 < m; ) W.unshift("0"), m--;
            for (;0 < W.length; ) w = W.pop() + w, 0 == ++J % F && L === R && 0 < W.length && (w = y + w);
        } else 0 < D.length ? (w = D.pop() + w, Q++, J++) : "0" === m && (w = "0" + w, Q++, 
        J++), 0 == J % F && L === R && 0 < D.length && (w = y + w); else "E" !== m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || !/[eE][+-]*[0]+/.test(m) ? "," === m ? (L++, 
        F = J, J = 0, 0 < D.length && (w = y + w)) : w = 1 < m.length && ('"' === m[0] && '"' === m[m.length - 1] || "'" === m[0] && "'" === m[m.length - 1]) ? m.slice(1, m.length - 1) + w : m + w : w += (m = 0 > V ? m.replace("+", "").replace("-", "") : m.replace("-", "")).replace(/[0]+/, (function(a) {
            return Y(V, a.length);
        }));
        for (y = "", M = !1; 0 < T.length; ) "#" === (m = T.shift()) || "0" === m ? 0 < h.length && 0 !== Number(h.join("")) ? (y += h.shift(), 
        M = !0) : "0" === m && (y += "0", M = !0) : 1 < m.length && ('"' === m[0] && '"' === m[m.length - 1] || "'" === m[0] && "'" === m[m.length - 1]) ? y += m.slice(1, m.length - 1) : "E" !== m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || !/[eE][+-]*[0]+/.test(m) ? y += m : y += (m = 0 > V ? m.replace("+", "").replace("-", "") : m.replace("-", "")).replace(/[0]+/, (function(a) {
            return Y(V, a.length);
        }));
        return w += (M ? v : "") + y, s ? "-" + w : w;
    }, Na = function(h) {
        var m = 0, w = 0;
        return (h = h || window.event).offsetX || 0 === h.offsetX ? (m = h.offsetX, w = h.offsetY) : h.layerX || 0 == h.layerX ? (m = h.layerX, 
        w = h.layerY) : (m = h.pageX - h.target.offsetLeft, w = h.pageY - h.target.offsetTop), 
        {
            x: m,
            y: w
        };
    }, Za = !0, Qa = window.devicePixelRatio || 1, Ma = 1, ga = Za ? Qa / Ma : 1, ca = function(h, m, w, s, v, y, D, F, N, M, T, Q, J) {
        void 0 === J && (J = 1), D = D || 0, F = F || "black";
        var H = 15 < s - m && 15 < v - w ? 8 : .35 * Math.min(s - m, v - w);
        h.beginPath(), h.moveTo(m, w), h.save(), h.fillStyle = y, h.globalAlpha = J, h.fillRect(m, w, s - m, v - w), 
        h.globalAlpha = 1, 0 < D && (J = 0 == D % 2 ? 0 : .5, h.beginPath(), h.lineWidth = D, 
        h.strokeStyle = F, h.moveTo(m, w), h.rect(m - J, w - J, s - m + 2 * J, v - w + 2 * J), 
        h.stroke()), h.restore(), !0 === N && (h.save(), h.beginPath(), h.moveTo(m, w), 
        h.lineTo(m + H, w + H), h.lineTo(s - H, w + H), h.lineTo(s, w), h.closePath(), (D = h.createLinearGradient((s + m) / 2, w + H, (s + m) / 2, w)).addColorStop(0, y), 
        D.addColorStop(1, "rgba(255, 255, 255, .4)"), h.fillStyle = D, h.fill(), h.restore()), 
        !0 === M && (h.save(), h.beginPath(), h.moveTo(m, v), h.lineTo(m + H, v - H), h.lineTo(s - H, v - H), 
        h.lineTo(s, v), h.closePath(), (D = h.createLinearGradient((s + m) / 2, v - H, (s + m) / 2, v)).addColorStop(0, y), 
        D.addColorStop(1, "rgba(255, 255, 255, .4)"), h.fillStyle = D, h.fill(), h.restore()), 
        !0 === T && (h.save(), h.beginPath(), h.moveTo(m, w), h.lineTo(m + H, w + H), h.lineTo(m + H, v - H), 
        h.lineTo(m, v), h.closePath(), (D = h.createLinearGradient(m + H, (v + w) / 2, m, (v + w) / 2)).addColorStop(0, y), 
        D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = D, h.fill(), h.restore()), 
        !0 === Q && (h.save(), h.beginPath(), h.moveTo(s, w), h.lineTo(s - H, w + H), h.lineTo(s - H, v - H), 
        h.lineTo(s, v), (D = h.createLinearGradient(s - H, (v + w) / 2, s, (v + w) / 2)).addColorStop(0, y), 
        D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = D, D.addColorStop(0, y), 
        D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = D, h.fill(), h.closePath(), 
        h.restore());
    }, X = function(h) {
        for (var m = "", s = 0; s < h.length; s++) m += String.fromCharCode(Math.ceil(h.length / 57 / 5) ^ h.charCodeAt(s));
        return m;
    }, bb = window && window[X("mnb`uhno")] && window[X("mnb`uhno")].href && window[X("mnb`uhno")].href.indexOf && (-1 !== window[X("mnb`uhno")].href.indexOf(X("b`ow`rkr/bnl")) || -1 !== window[X("mnb`uhno")].href.indexOf(X("gdonqhy/bnl")) || -1 !== window[X("mnb`uhno")].href.indexOf(X("gheemd"))), ib = bb && -1 === window[X("mnb`uhno")].href.indexOf(X("gheemd")), jb = {
        reset: {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg=="
        },
        pan: {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC"
        },
        zoom: {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII="
        },
        menu: {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC"
        }
    };
    V.prototype.setOptions = function(h, m) {
        if (pa[this._defaultsKey]) {
            var v, s = pa[this._defaultsKey];
            for (v in s) "publicProperties" !== v && s.hasOwnProperty(v) && (this[v] = h && v in h ? h[v] : m && v in m ? m[v] : s[v]);
        } else Ga && window.console && console.log("defaults not set");
    }, V.prototype.get = function(h) {
        var m = pa[this._defaultsKey];
        return "options" === h ? this.options && this.options._isPlaceholder ? null : this.options : m.hasOwnProperty(h) || m.publicProperties && m.publicProperties.hasOwnProperty(h) ? this[h] : void (window.console && window.console.log('Property "' + h + "\" doesn't exist. Please check for typo."));
    }, V.prototype.set = function(h, m, s) {
        s = void 0 === s || s;
        var v = pa[this._defaultsKey];
        if ("options" === h) this.createUserOptions(m); else {
            if (!(v.hasOwnProperty(h) || v.publicProperties && v.publicProperties.hasOwnProperty(h) && "readWrite" === v.publicProperties[h])) return void (window.console && (v.publicProperties && v.publicProperties.hasOwnProperty(h) && "readOnly" === v.publicProperties[h] ? window.console.log('Property "' + h + '" is read-only.') : window.console.log('Property "' + h + "\" doesn't exist. Please check for typo.")));
            this.options._isPlaceholder && this.createUserOptions(), this.options[h] = m;
        }
        s && (this.stockChart || this.chart || this).render();
    }, V.prototype.addTo = function(h, m, s, v) {
        v = void 0 === v || v;
        var y = pa[this._defaultsKey];
        y.hasOwnProperty(h) || y.publicProperties && y.publicProperties.hasOwnProperty(h) && "readWrite" === y.publicProperties[h] ? (this.options._isPlaceholder && this.createUserOptions(), 
        void 0 === this.options[h] && (this.options[h] = []), h = this.options[h], s = null == s ? h.length : s, 
        h.splice(s, 0, m), v && (this.stockChart || this.chart || this).render()) : window.console && (y.publicProperties && y.publicProperties.hasOwnProperty(h) && "readOnly" === y.publicProperties[h] ? window.console.log('Property "' + h + '" is read-only.') : window.console.log('Property "' + h + "\" doesn't exist. Please check for typo."));
    }, V.prototype.createUserOptions = function(h) {
        if (void 0 !== h || this.options._isPlaceholder) if (this.parent.options._isPlaceholder && this.parent.createUserOptions(), 
        this.isOptionsInArray) {
            this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
            var m = this.parent.options[this.optionsName], s = m.length;
            this.options._isPlaceholder || (Ba(m), s = m.indexOf(this.options)), this.options = void 0 === h ? {} : h, 
            m[s] = this.options;
        } else this.options = void 0 === h ? {} : h, h = this.parent.options, this.optionsName ? m = this.optionsName : (m = this._defaultsKey) && 0 !== m.length ? (s = m.charAt(0).toLowerCase(), 
        1 < m.length && (s = s.concat(m.slice(1))), m = s) : m = void 0, h[m] = this.options;
    }, V.prototype.remove = function(h) {
        if (h = void 0 === h || h, this.isOptionsInArray) {
            var m = this.parent.options[this.optionsName];
            Ba(m);
            var s = m.indexOf(this.options);
            0 <= s && m.splice(s, 1);
        } else delete this.parent.options[this.optionsName];
        h && (this.stockChart || this.chart || this).render();
    }, V.prototype.updateOption = function(h) {
        !pa[this._defaultsKey] && Ga && window.console && console.log("defaults not set");
        var m = pa[this._defaultsKey], v = {}, y = this[h], F = this._themeOptionsKey, H = this._index;
        return this.theme && s(this.parent) && s(F) && s(H) ? v = s(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && this.parent.themeOptions && this.parent.themeOptions[F] && (null === H ? v = this.parent.themeOptions[F] : 0 < this.parent.themeOptions[F].length && (v = Math.min(this.parent.themeOptions[F].length - 1, H), 
        v = this.parent.themeOptions[F][v])), this.themeOptions = v, h in m && (y = h in this.options ? this.options[h] : v && h in v ? v[h] : m[h]), 
        y !== this[h] && (this[h] = y, !0);
    }, V.prototype.trackChanges = function(h) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[h] = this.options[h];
    }, V.prototype.isBeingTracked = function(h) {
        return this.options._oldOptions || (this.options._oldOptions = {}), !!this.options._oldOptions[h];
    }, V.prototype.hasOptionChanged = function(h) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        return this.sessionVariables[h] !== this.options[h];
    }, V.prototype.addEventListener = function(h, m, s) {
        h && m && (this._eventListeners[h] = this._eventListeners[h] || [], this._eventListeners[h].push({
            context: s || this,
            eventHandler: m
        }));
    }, V.prototype.removeEventListener = function(h, m) {
        if (h && m && this._eventListeners[h]) for (var s = this._eventListeners[h], v = 0; v < s.length; v++) if (s[v].eventHandler === m) {
            s[v].splice(v, 1);
            break;
        }
    }, V.prototype.removeAllEventListeners = function() {
        this._eventListeners = [];
    }, V.prototype.dispatchEvent = function(h, m, s) {
        if (h && this._eventListeners[h]) {
            m = m || {};
            for (var v = this._eventListeners[h], y = 0; y < v.length; y++) v[y].eventHandler.call(v[y].context, m);
        }
        "function" == typeof this[h] && this[h].call(s || this.chart, m);
    }, Ca.prototype.registerSpace = function(h, m) {
        "top" === h ? this._topOccupied += m.height : "bottom" === h ? this._bottomOccupied += m.height : "left" === h ? this._leftOccupied += m.width : "right" === h && (this._rightOccupied += m.width);
    }, Ca.prototype.unRegisterSpace = function(h, m) {
        "top" === h ? this._topOccupied -= m.height : "bottom" === h ? this._bottomOccupied -= m.height : "left" === h ? this._leftOccupied -= m.width : "right" === h && (this._rightOccupied -= m.width);
    }, Ca.prototype.getFreeSpace = function() {
        return {
            x1: this._x1 + this._leftOccupied,
            y1: this._y1 + this._topOccupied,
            x2: this._x2 - this._rightOccupied,
            y2: this._y2 - this._bottomOccupied,
            width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
            height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
        };
    }, Ca.prototype.reset = function() {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
    }, na(ia, V), ia.prototype._initialize = function() {
        s(this.padding) || "object" != typeof this.padding ? this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = 0 | Number(this.padding) : (this.topPadding = s(this.padding.top) ? 0 : 0 | Number(this.padding.top), 
        this.rightPadding = s(this.padding.right) ? 0 : 0 | Number(this.padding.right), 
        this.bottomPadding = s(this.padding.bottom) ? 0 : 0 | Number(this.padding.bottom), 
        this.leftPadding = s(this.padding.left) ? 0 : 0 | Number(this.padding.left));
    }, ia.prototype.render = function(h) {
        if (0 !== this.fontSize) {
            h && this.ctx.save();
            var m = this.ctx.font;
            this.ctx.textBaseline = this.textBaseline;
            var s = 0;
            this._isDirty && this.measureText(this.ctx), this.ctx.translate(this.x, this.y + s), 
            "middle" === this.textBaseline && (s = -this._lineHeight / 2), this.ctx.font = this._getFontString(), 
            this.ctx.rotate(Math.PI / 180 * this.angle);
            var v = 0, y = this.topPadding, F = null;
            for (this.ctx.roundRect || Aa(this.ctx), (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, s, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor), 
            this.ctx.fillStyle = this.fontColor, s = 0; s < this._wrappedText.lines.length; s++) F = this._wrappedText.lines[s], 
            "right" === this.horizontalAlign || "right" === this.textAlign ? v = this.width - F.width - this.rightPadding : "left" === this.horizontalAlign || "left" === this.textAlign ? v = this.leftPadding : "center" !== this.horizontalAlign && "center" !== this.textAlign || (v = (this.width - (this.leftPadding + this.rightPadding)) / 2 - F.width / 2 + this.leftPadding), 
            this.ctx.fillText(F.text, v, y), y += F.height;
            this.ctx.font = m, h && this.ctx.restore();
        }
    }, ia.prototype.setText = function(h) {
        this.text = h, this._isDirty = !0, this._wrappedText = null;
    }, ia.prototype.measureText = function() {
        if (this._lineHeight = Wa(this.fontFamily, this.fontSize, this.fontWeight), null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        return this._wrapText(this.ctx), this._isDirty = !1, {
            width: this.width,
            height: this.height
        };
    }, ia.prototype._getLineWithWidth = function(h, m, s) {
        if (!(h = String(h))) return {
            text: "",
            width: 0
        };
        var v = s = 0, y = h.length - 1, F = 1 / 0;
        for (this.ctx.font = this._getFontString(); v <= y; ) {
            F = Math.floor((v + y) / 2);
            var D = h.substr(0, F + 1);
            if ((s = this.ctx.measureText(D).width) < m) v = F + 1; else {
                if (!(s > m)) break;
                y = F - 1;
            }
        }
        return s > m && 1 < D.length && (D = D.substr(0, D.length - 1), s = this.ctx.measureText(D).width), 
        m = !0, D.length !== h.length && " " !== h[D.length] || (m = !1), m && (1 < (h = D.split(" ")).length && h.pop(), 
        D = h.join(" "), s = this.ctx.measureText(D).width), {
            text: D,
            width: s
        };
    }, ia.prototype._wrapText = function() {
        var h = new String(Ea(String(this.text))), m = [], s = this.ctx.font, v = 0, y = 0;
        if (this.ctx.font = this._getFontString(), 0 === this.frontSize) y = v = 0; else for (;0 < h.length; ) {
            var F = this.maxHeight - (this.topPadding + this.bottomPadding), D = this._getLineWithWidth(h, this.maxWidth - (this.leftPadding + this.rightPadding), !1);
            D.height = this._lineHeight, m.push(D);
            var H = y;
            y = Math.max(y, D.width), v = v + D.height, h = Ea(h.slice(D.text.length, h.length));
            F && v > F && (v -= (D = m.pop()).height, y = H);
        }
        this._wrappedText = {
            lines: m,
            width: y,
            height: v
        }, this.width = y + (this.leftPadding + this.rightPadding), this.height = v + (this.topPadding + this.bottomPadding), 
        this.ctx.font = s;
    }, ia.prototype._getFontString = function() {
        var h;
        h = this.fontStyle ? this.fontStyle + " " : "", h += this.fontWeight ? this.fontWeight + " " : "", 
        h += this.fontSize ? this.fontSize + "px " : "";
        var m = this.fontFamily ? this.fontFamily + "" : "";
        return !v && m && ("'" !== (m = m.split(",")[0])[0] && '"' !== m[0] && (m = "'" + m + "'")), 
        h + m;
    }, na(Sa, V), na(xa, V), xa.prototype.setLayout = function() {
        if (this.text) {
            var N, J, M, h = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, m = h.layoutManager.getFreeSpace(), v = m.x1, y = m.y1, F = 0, H = 0, D = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = m.width - 4 - D * ("center" === this.horizontalAlign ? 2 : 1)), 
            H = .5 * m.height - this.margin - 2, F = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = m.height - 4), 
            H = .5 * m.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = m.width - 4), 
            H = .5 * m.height - 4)), s(this.padding) || "number" != typeof this.padding ? s(this.padding) || "object" != typeof this.padding || (M = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, 
            M += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : M = 2 * this.padding, 
            this.wrap || (H = Math.min(H, 1.5 * this.fontSize + M)), M = (H = new ia(this.ctx, {
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                fontWeight: this.fontWeight,
                horizontalAlign: this.horizontalAlign,
                verticalAlign: this.verticalAlign,
                borderColor: this.borderColor,
                borderThickness: this.borderThickness,
                backgroundColor: this.backgroundColor,
                maxWidth: this.maxWidth,
                maxHeight: H,
                cornerRadius: this.cornerRadius,
                text: this.text,
                padding: this.padding,
                textBaseline: "top"
            })).measureText(), "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (y = m.y1 + 2, 
            J = "top") : "bottom" === this.verticalAlign && (y = m.y2 - 2 - M.height, J = "bottom"), 
            "left" === this.horizontalAlign ? v = m.x1 + 2 : "center" === this.horizontalAlign ? v = m.x1 + m.width / 2 - M.width / 2 : "right" === this.horizontalAlign && (v = m.x2 - 2 - M.width - D), 
            N = this.horizontalAlign, this.width = M.width, this.height = M.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (v = m.x1 + 2, 
            y = m.y2 - 2 - (this.maxWidth / 2 - M.width / 2), F = -90, J = "left", this.width = M.height, 
            this.height = M.width) : "right" === this.horizontalAlign ? (v = m.x2 - 2, y = m.y1 + 2 + (this.maxWidth / 2 - M.width / 2), 
            F = 90, J = "right", this.width = M.height, this.height = M.width) : "center" === this.horizontalAlign && (y = h.y1 + (h.height / 2 - M.height / 2), 
            v = h.x1 + (h.width / 2 - M.width / 2), J = "center", this.width = M.width, this.height = M.height), 
            N = "center"), H.x = v, H.y = y, H.angle = F, H.horizontalAlign = N, this._textBlock = H, 
            h.layoutManager.registerSpace(J, {
                width: this.width + ("left" === J || "right" === J ? this.margin + 2 : 0),
                height: this.height + ("top" === J || "bottom" === J ? this.margin + 2 : 0)
            }), this.bounds = {
                x1: v,
                y1: y,
                x2: v + this.width,
                y2: y + this.height
            }, this.ctx.textBaseline = "top";
        }
    }, xa.prototype.render = function() {
        this._textBlock && this._textBlock.render(!0);
    }, na(Ha, V), Ha.prototype.setLayout = xa.prototype.setLayout, Ha.prototype.render = xa.prototype.render, 
    Ta.prototype.get = function(h, m) {
        var v = null;
        return 0 < this.pool.length ? La(v = this.pool.pop(), h, m) : v = sa(h, m), v;
    }, Ta.prototype.release = function(h) {
        this.pool.push(h);
    }, na(Ia, V);
    var Oa = {
        addTheme: function(h, m) {
            ab[h] = m;
        },
        addColorSet: function(h, m) {
            ya[h] = m;
        },
        addCultureInfo: function(h, m) {
            Ja[h] = m;
        },
        formatNumber: function(h, m, v) {
            if (Ja[v = v || "en"]) return ea(h, m || "#,##0.##", new Ia(v));
            throw "Unknown Culture Name";
        },
        formatDate: function(h, m, v) {
            if (Ja[v = v || "en"]) return za(h, m || "DD MMM YYYY", new Ia(v));
            throw "Unknown Culture Name";
        }
    };
    "undefined" != typeof module && void 0 !== module.exports ? module.exports = Oa : "function" == typeof define && define.amd ? define([], (function() {
        return Oa;
    })) : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), 
    window.CanvasJS = window.CanvasJS ? window.CanvasJS : Oa), (y = Oa.Chart = function() {
        function h(a, d) {
            return a.x - d.x;
        }
        function m(a, d, c) {
            d = d || {}, s(c) ? (this.predefinedThemes = ab, this.optionsName = this.parent = this.index = null) : (this.parent = c.parent, 
            this.index = c.index, this.predefinedThemes = c.predefinedThemes, this.optionsName = c.optionsName, 
            this.stockChart = c.stockChart, this.panel = a, this.isOptionsInArray = c.isOptionsInArray), 
            this.theme = s(d.theme) || s(this.predefinedThemes[d.theme]) ? "light1" : d.theme, 
            m.base.constructor.call(this, "Chart", this.optionsName, d, this.index, this.parent);
            var b = this;
            this._containerId = a, this._objectsInitialized = !1, this.overlaidCanvasCtx = this.ctx = null, 
            this._indexLabels = [], this._panTimerId = 0, this._lastTouchEventType = "", this._lastTouchData = null, 
            this.isAnimating = !1, this.renderCount = 0, this.disableToolTip = this.animatedRender = !1, 
            this.canvasPool = new Ta, this.allDOMEventHandlers = [], this.panEnabled = !1, this._defaultCursor = "default", 
            this.plotArea = {
                canvas: null,
                ctx: null,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                width: 0,
                height: 0
            }, this._dataInRenderedOrder = [], (this.container = "string" == typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", 
            d = a = 0, a = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width, 
            d = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height, 
            this.width = a, this.height = d, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, 
            this.selectedColorSet = void 0 !== ya[this.colorSet] ? ya[this.colorSet] : ya.colorSet1, 
            this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), 
            this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", 
            this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", 
            v || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), 
            this.canvas = sa(a, d), this._preRenderCanvas = sa(a, d), this.canvas.style.position = "absolute", 
            this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", 
            this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", 
            this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), 
            this.ctx.textBaseline = "top", Aa(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), 
            this._preRenderCtx.textBaseline = "top", Aa(this._preRenderCtx), v ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = sa(a, d), 
            this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), 
            this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), 
            this.overlaidCanvas = sa(a, d), this.overlaidCanvas.style.position = "absolute", 
            this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", 
            this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", 
            this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), 
            this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", 
            Aa(this.overlaidCanvasCtx)), this._eventManager = new da(this), this.windowResizeHandler = J(window, "resize", (function() {
                b._updateSize() && b.render();
            }), this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), 
            this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px;", this._canvasJSContainer.appendChild(this._toolBar), 
            this.bounds = {
                x1: 0,
                y1: 0,
                x2: this.width,
                y2: this.height
            }, J(this.overlaidCanvas, "click", (function(a) {
                b._mouseEventHandler(a);
            }), this.allDOMEventHandlers), J(this.overlaidCanvas, "mousemove", (function(a) {
                b._mouseEventHandler(a);
            }), this.allDOMEventHandlers), J(this.overlaidCanvas, "mouseup", (function(a) {
                b._mouseEventHandler(a);
            }), this.allDOMEventHandlers), J(this.overlaidCanvas, "mousedown", (function(a) {
                b._mouseEventHandler(a), ta(b._dropdownMenu);
            }), this.allDOMEventHandlers), J(this.overlaidCanvas, "mouseout", (function(a) {
                b._mouseEventHandler(a);
            }), this.allDOMEventHandlers), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", (function(a) {
                b._touchEventHandler(a);
            }), this.allDOMEventHandlers), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", (function(a) {
                b._touchEventHandler(a);
            }), this.allDOMEventHandlers), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", (function(a) {
                b._touchEventHandler(a);
            }), this.allDOMEventHandlers), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", (function(a) {
                b._touchEventHandler(a);
            }), this.allDOMEventHandlers), this.toolTip = new Y(this, this.options.toolTip), 
            this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], 
            this.sessionVariables = {
                axisX: [],
                axisX2: [],
                axisY: [],
                axisY2: []
            })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found');
        }
        function w(a, d) {
            for (var b, c = [], e = 0; e < a.length; e++) if (0 == e) c.push(a[0]); else {
                var f, l, u;
                f = 0 === (u = e - 1) ? 0 : u - 1, l = u === a.length - 1 ? u : u + 1, b = Math.abs((a[l].x - a[f].x) / (0 == a[l].x - a[u].x ? .01 : a[l].x - a[u].x)) * (d - 1) / 2 + 1;
                var A = (a[l].x - a[f].x) / b;
                b = (a[l].y - a[f].y) / b, c[c.length] = a[u].x > a[f].x && 0 < A || a[u].x < a[f].x && 0 > A ? {
                    x: a[u].x + A / 3,
                    y: a[u].y + b / 3
                } : {
                    x: a[u].x,
                    y: a[u].y + b / 9
                }, f = 0 === (u = e) ? 0 : u - 1, l = u === a.length - 1 ? u : u + 1, b = Math.abs((a[l].x - a[f].x) / (0 == a[u].x - a[f].x ? .01 : a[u].x - a[f].x)) * (d - 1) / 2 + 1, 
                A = (a[l].x - a[f].x) / b, b = (a[l].y - a[f].y) / b, c[c.length] = a[u].x > a[f].x && 0 < A || a[u].x < a[f].x && 0 > A ? {
                    x: a[u].x - A / 3,
                    y: a[u].y - b / 3
                } : {
                    x: a[u].x,
                    y: a[u].y - b / 9
                }, c[c.length] = a[e];
            }
            return c;
        }
        function y(a, d, c, b, e, f, l, u, A, k) {
            var n = 0;
            k ? (l.color = f, u.color = f) : k = 1, n = A ? Math.abs(e - c) : Math.abs(b - d), 
            n = 0 < l.trimLength ? Math.abs(n * l.trimLength / 100) : Math.abs(n - l.length), 
            A ? (c += n / 2, e -= n / 2) : (d += n / 2, b -= n / 2);
            n = 1 == Math.round(l.thickness) % 2 ? .5 : 0;
            var p = 1 == Math.round(u.thickness) % 2 ? .5 : 0;
            a.save(), a.globalAlpha = k, a.strokeStyle = u.color || f, a.lineWidth = u.thickness || 2, 
            a.setLineDash && a.setLineDash(N(u.dashType, u.thickness)), a.beginPath(), A && 0 < u.thickness ? (a.moveTo(b - l.thickness / 2, Math.round((c + e) / 2) - p), 
            a.lineTo(d + l.thickness / 2, Math.round((c + e) / 2) - p)) : 0 < u.thickness && (a.moveTo(Math.round((d + b) / 2) - p, c + l.thickness / 2), 
            a.lineTo(Math.round((d + b) / 2) - p, e - l.thickness / 2)), a.stroke(), a.strokeStyle = l.color || f, 
            a.lineWidth = l.thickness || 2, a.setLineDash && a.setLineDash(N(l.dashType, l.thickness)), 
            a.beginPath(), A && 0 < l.thickness ? (a.moveTo(b - n, c), a.lineTo(b - n, e), a.moveTo(d + n, c), 
            a.lineTo(d + n, e)) : 0 < l.thickness && (a.moveTo(d, c + n), a.lineTo(b, c + n), 
            a.moveTo(d, e - n), a.lineTo(b, e - n)), a.stroke(), a.restore();
        }
        function F(a, d) {
            F.base.constructor.call(this, "Legend", "legend", d, null, a), this.chart = a, this.canvas = a.canvas, 
            this.ctx = this.chart.ctx, this.ghostCtx = this.chart._eventManager.ghostCtx, this.items = [], 
            this.optionsName = "legend", this.height = this.width = 0, this.orientation = null, 
            this.dataSeries = [], this.bounds = {
                x1: null,
                y1: null,
                x2: null,
                y2: null
            }, void 0 === this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize)), 
            this.lineHeight = Wa(this.fontFamily, this.fontSize, this.fontWeight), this.horizontalSpacing = this.fontSize;
        }
        function H(a, d, c, b) {
            for (H.base.constructor.call(this, "DataSeries", "data", d, c, a), this.chart = a, 
            this.canvas = a.canvas, this._ctx = a.canvas.ctx, this.index = c, this.noDataPointsInPlotArea = 0, 
            this.id = b, this.chart._eventManager.objectMap[b] = {
                id: b,
                objectType: "dataSeries",
                dataSeriesIndex: c
            }, a = d.dataPoints ? d.dataPoints.length : 0, this.dataPointEOs = [], d = 0; d < a; d++) this.dataPointEOs[d] = {};
            this.dataPointIds = [], this.plotUnit = [], this.axisY = this.axisX = null, this.optionsName = "data", 
            this.isOptionsInArray = !0, null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = .7 : this.fillOpacity = 1), 
            this.axisPlacement = this.getDefaultAxisPlacement(), void 0 === this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize));
        }
        function D(a, d, c, b, e, f) {
            if (D.base.constructor.call(this, "Axis", d, c, b, a), this.chart = a, this.canvas = a.canvas, 
            this.ctx = a.ctx, this.intervalStartPosition = this.maxHeight = this.maxWidth = 0, 
            this.labels = [], this.dataSeries = [], this._stripLineLabels = this._ticks = this._labels = null, 
            this.dataInfo = {
                min: 1 / 0,
                max: -1 / 0,
                viewPortMin: 1 / 0,
                viewPortMax: -1 / 0,
                minDiff: 1 / 0
            }, this.isOptionsInArray = !0, "axisX" === e ? ("left" === f || "bottom" === f ? (this.optionsName = "axisX", 
            s(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), 
            this.sessionVariables = this.chart.sessionVariables.axisX[b]) : (this.optionsName = "axisX2", 
            s(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), 
            this.sessionVariables = this.chart.sessionVariables.axisX2[b]), this.options.interval || (this.intervalType = null)) : "left" === f || "bottom" === f ? (this.optionsName = "axisY", 
            s(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), 
            this.sessionVariables = this.chart.sessionVariables.axisY[b]) : (this.optionsName = "axisY2", 
            s(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), 
            this.sessionVariables = this.chart.sessionVariables.axisY2[b]), void 0 === this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize)), 
            void 0 === this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize)), 
            this.type = e, "axisX" !== e || c && void 0 !== c.gridThickness || (this.gridThickness = 0), 
            this._position = f, this.lineCoordinates = {
                x1: null,
                y1: null,
                x2: null,
                y2: null,
                width: null
            }, this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360), 
            this.options.scaleBreaks && (this.scaleBreaks = new Z(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this)), 
            this.stripLines = [], this.options.stripLines && 0 < this.options.stripLines.length) for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new M(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
            this.options.crosshair && (this.crosshair = new $(this.chart, this.options.crosshair, this)), 
            this._titleTextBlock = null, this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, 
            this.sessionVariables.viewportMinimum = null), this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum, 
            this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, 
            this.sessionVariables.viewportMaximum = null), this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum, 
            null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum)), 
            null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum)), 
            this.trackChanges("viewportMinimum"), this.trackChanges("viewportMaximum");
        }
        function Z(a, d, c, b) {
            if (Z.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", d, null, b), this.id = c, 
            this.chart = a, this.ctx = this.chart.ctx, this.axis = b, this.optionsName = "scaleBreaks", 
            this.isOptionsInArray = !1, this._appliedBreaks = [], this.customBreaks = [], this.autoBreaks = [], 
            "string" == typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" != typeof this.spacing && (this.spacing = 8), 
            this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5)), 
            this.options.customBreaks && 0 < this.options.customBreaks.length) {
                for (a = 0; a < this.options.customBreaks.length; a++) this.customBreaks.push(new U(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)), 
                "number" == typeof this.customBreaks[a].startValue && "number" == typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue && this._appliedBreaks.push(this.customBreaks[a]);
                for (this._appliedBreaks.sort((function(a, b) {
                    return a.startValue - b.startValue;
                })), a = 0; a < this._appliedBreaks.length - 1; a++) this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), 
                window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), 
                this._appliedBreaks.splice(a, 2), a--);
            }
        }
        function U(a, d, c, b, e, f) {
            U.base.constructor.call(this, "Break", d, c, b, f), this.id = e, this.chart = a, 
            this.ctx = this.chart.ctx, this.scaleBreaks = f, this.optionsName = d, this.isOptionsInArray = !0, 
            this.type = c.type ? this.type : f.type, this.fillOpacity = s(c.fillOpacity) ? f.fillOpacity : this.fillOpacity, 
            this.lineThickness = s(c.lineThickness) ? f.lineThickness : this.lineThickness, 
            this.color = c.color ? this.color : f.color, this.lineColor = c.lineColor ? this.lineColor : f.lineColor, 
            this.lineDashType = c.lineDashType ? this.lineDashType : f.lineDashType, !s(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime()), 
            !s(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime()), 
            "number" == typeof this.startValue && "number" == typeof this.endValue && this.endValue < this.startValue && (a = this.startValue, 
            this.startValue = this.endValue, this.endValue = a), this.spacing = void 0 === c.spacing ? f.spacing : c.spacing, 
            "string" == typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), 
            this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" != typeof this.options.spacing && (this.spacing = f.spacing), 
            this.size = f.parent.logarithmic ? 1 : 0;
        }
        function M(a, d, c, b, e) {
            M.base.constructor.call(this, "StripLine", "stripLines", d, c, e), this.id = b, 
            this.chart = a, this.ctx = this.chart.ctx, this.label = this.label, this.axis = e, 
            this.optionsName = "stripLines", this.isOptionsInArray = !0, this._thicknessType = "pixel", 
            null !== this.startValue && null !== this.endValue && (this.value = e.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, 
            this._thicknessType = null);
        }
        function $(a, d, c) {
            $.base.constructor.call(this, "Crosshair", "crosshair", d, null, c), this.chart = a, 
            this.ctx = this.chart.ctx, this.axis = c, this.optionsName = "crosshair", this._thicknessType = "pixel";
        }
        function Y(a, d) {
            Y.base.constructor.call(this, "ToolTip", "toolTip", d, null, a), this.chart = a, 
            this.canvas = a.canvas, this.ctx = this.chart.ctx, this.currentDataPointIndex = this.currentSeriesIndex = -1, 
            this._prevY = this._prevX = NaN, this.containerTransitionDuration = .1, this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration), 
            this.optionsName = "toolTip", this._initialize();
        }
        function da(a) {
            this.chart = a, this.lastObjectId = 0, this.objectMap = [], this.rectangularRegionEventSubscriptions = [], 
            this.previousDataPointEventObject = null, this.ghostCanvas = sa(this.chart.width, this.chart.height), 
            this.ghostCtx = this.ghostCanvas.getContext("2d"), this.mouseoveredObjectMaps = [];
        }
        function ha(a) {
            this.chart = a, this.ctx = this.chart.plotArea.ctx, this.animations = [], this.animationRequestId = null;
        }
        na(m, V), m.prototype.destroy = function() {
            var a = this.allDOMEventHandlers;
            this._animator && this._animator.cancelAllAnimations(), this._panTimerId && clearTimeout(this._panTimerId);
            for (var d = 0; d < a.length; d++) {
                var c = a[d][0], b = a[d][1], e = a[d][2], f = (f = a[d][3]) || !1;
                c.removeEventListener ? c.removeEventListener(b, e, f) : c.detachEvent && c.detachEvent("on" + b, e);
            }
            for (this.allDOMEventHandlers = [], this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes(); ) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
            for (;this.container && this.container.hasChildNodes(); ) this.container.removeChild(this.container.lastChild);
            for (;this._dropdownMenu && this._dropdownMenu.hasChildNodes(); ) this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
            this.overlaidCanvas = this.canvas = this.container = this._canvasJSContainer = null, 
            this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = this._breaksCanvas = this._preRenderCanvas = this.toolTip.container = null;
        }, m.prototype._updateOptions = function() {
            var a = this;
            if (this.updateOption("width"), this.updateOption("height"), this.updateOption("dataPointWidth"), 
            this.updateOption("dataPointMinWidth"), this.updateOption("dataPointMaxWidth"), 
            this.updateOption("interactivityEnabled"), this.updateOption("theme"), this.updateOption("colorSet") && (this.selectedColorSet = void 0 !== ya[this.colorSet] ? ya[this.colorSet] : ya.colorSet1), 
            this.updateOption("backgroundColor"), this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)"), 
            this.updateOption("culture"), this._cultureInfo = new Ia(this.options.culture), 
            this.updateOption("animationEnabled"), this.animationEnabled = this.animationEnabled && v, 
            this.updateOption("animationDuration"), this.updateOption("rangeChanging"), this.updateOption("rangeChanged"), 
            this.updateOption("exportEnabled"), this.updateOption("exportFileName"), this.updateOption("zoomType"), 
            this.options.zoomEnabled || this.panEnabled) {
                if (!this._zoomButton) {
                    var d = !1;
                    ta(this._zoomButton = document.createElement("button")), ua(this, this._zoomButton, "pan"), 
                    this._toolBar.appendChild(this._zoomButton), this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, 
                    J(this._zoomButton, "touchstart", (function(a) {
                        d = !0;
                    }), this.allDOMEventHandlers), J(this._zoomButton, "click", (function() {
                        a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, ua(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, 
                        a.panEnabled = !1, ua(a, a._zoomButton, "pan")), a.render();
                    }), this.allDOMEventHandlers), J(this._zoomButton, "mouseover", (function() {
                        d ? d = !1 : (oa(a._zoomButton, {
                            backgroundColor: a.toolbar.backgroundColorOnHover,
                            color: a.toolbar.fontColorOnHover,
                            transition: "0.4s",
                            WebkitTransition: "0.4s"
                        }), 0 >= navigator.userAgent.search("MSIE") && oa(a._zoomButton.childNodes[0], {
                            WebkitFilter: "invert(100%)",
                            filter: "invert(100%)"
                        }));
                    }), this.allDOMEventHandlers), J(this._zoomButton, "mouseout", (function() {
                        d || (oa(a._zoomButton, {
                            backgroundColor: a.toolbar.backgroundColor,
                            color: a.toolbar.fontColor,
                            transition: "0.4s",
                            WebkitTransition: "0.4s"
                        }), 0 >= navigator.userAgent.search("MSIE") && oa(a._zoomButton.childNodes[0], {
                            WebkitFilter: "invert(0%)",
                            filter: "invert(0%)"
                        }));
                    }), this.allDOMEventHandlers);
                }
                this._resetButton || (d = !1, ta(this._resetButton = document.createElement("button")), 
                ua(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness : 0) + "px solid " + this.toolbar.borderColor, 
                this._toolBar.appendChild(this._resetButton), J(this._resetButton, "touchstart", (function(a) {
                    d = !0;
                }), this.allDOMEventHandlers), J(this._resetButton, "click", (function() {
                    if (a.toolTip.hide(), a.toolTip.dispatchEvent("hidden", {
                        chart: a,
                        toolTip: a.toolTip
                    }, a.toolTip), a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, 
                    ua(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, 
                    a.panEnabled = !1), a.sessionVariables.axisX) for (var b = 0; b < a.sessionVariables.axisX.length; b++) a.sessionVariables.axisX[b].newViewportMinimum = null, 
                    a.sessionVariables.axisX[b].newViewportMaximum = null;
                    if (a.sessionVariables.axisX2) for (b = 0; b < a.sessionVariables.axisX2.length; b++) a.sessionVariables.axisX2[b].newViewportMinimum = null, 
                    a.sessionVariables.axisX2[b].newViewportMaximum = null;
                    if (a.sessionVariables.axisY) for (b = 0; b < a.sessionVariables.axisY.length; b++) a.sessionVariables.axisY[b].newViewportMinimum = null, 
                    a.sessionVariables.axisY[b].newViewportMaximum = null;
                    if (a.sessionVariables.axisY2) for (b = 0; b < a.sessionVariables.axisY2.length; b++) a.sessionVariables.axisY2[b].newViewportMinimum = null, 
                    a.sessionVariables.axisY2[b].newViewportMaximum = null;
                    a.resetOverlayedCanvas(), ta(a._zoomButton, a._resetButton), a.stockChart && (a.stockChart._rangeEventParameter = {
                        stockChart: a.stockChart,
                        source: "chart",
                        index: a.stockChart.charts.indexOf(a),
                        minimum: null,
                        maximum: null
                    }), a._dispatchRangeEvent("rangeChanging", "reset"), a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", 
                    a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart)), 
                    a.render(), a.syncCharts && a.syncCharts(null, null), a._dispatchRangeEvent("rangeChanged", "reset"), 
                    a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged", a.stockChart._rangeEventParameter, a.stockChart));
                }), this.allDOMEventHandlers), J(this._resetButton, "mouseover", (function() {
                    d || (oa(a._resetButton, {
                        backgroundColor: a.toolbar.backgroundColorOnHover,
                        color: a.toolbar.hoverFfontColorOnHoverontColor,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    }), 0 >= navigator.userAgent.search("MSIE") && oa(a._resetButton.childNodes[0], {
                        WebkitFilter: "invert(100%)",
                        filter: "invert(100%)"
                    }));
                }), this.allDOMEventHandlers), J(this._resetButton, "mouseout", (function() {
                    d || (oa(a._resetButton, {
                        backgroundColor: a.toolbar.backgroundColor,
                        color: a.toolbar.fontColor,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    }), 0 >= navigator.userAgent.search("MSIE") && oa(a._resetButton.childNodes[0], {
                        WebkitFilter: "invert(0%)",
                        filter: "invert(0%)"
                    }));
                }), this.allDOMEventHandlers), this.overlaidCanvas.style.cursor = a._defaultCursor), 
                this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, 
                this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), Ka(a._zoomButton, a._resetButton)) : (this.zoomEnabled = !0, 
                this.panEnabled = !1));
            } else this.panEnabled = this.zoomEnabled = !1;
            for (var c in function gb(h) {
                if (h._menuButton) h.exportEnabled ? Ka(h._menuButton) : ta(h._menuButton); else if (h.exportEnabled && v) {
                    var m = !1;
                    h._menuButton = document.createElement("button"), ua(h, h._menuButton, "menu"), 
                    h._toolBar.appendChild(h._menuButton), J(h._menuButton, "touchstart", (function(h) {
                        m = !0;
                    }), h.allDOMEventHandlers), J(h._menuButton, "click", (function() {
                        "none" !== h._dropdownMenu.style.display || h._dropDownCloseTime && 500 >= (new Date).getTime() - h._dropDownCloseTime.getTime() || (h._dropdownMenu.style.display = "block", 
                        h._menuButton.blur(), h._dropdownMenu.focus());
                    }), h.allDOMEventHandlers, !0), J(h._menuButton, "mouseover", (function() {
                        m || (oa(h._menuButton, {
                            backgroundColor: h.toolbar.backgroundColorOnHover,
                            color: h.toolbar.fontColorOnHover
                        }), 0 >= navigator.userAgent.search("MSIE") && oa(h._menuButton.childNodes[0], {
                            WebkitFilter: "invert(100%)",
                            filter: "invert(100%)"
                        }));
                    }), h.allDOMEventHandlers, !0), J(h._menuButton, "mouseout", (function() {
                        m || (oa(h._menuButton, {
                            backgroundColor: h.toolbar.backgroundColor,
                            color: h.toolbar.fontColor
                        }), 0 >= navigator.userAgent.search("MSIE") && oa(h._menuButton.childNodes[0], {
                            WebkitFilter: "invert(0%)",
                            filter: "invert(0%)"
                        }));
                    }), h.allDOMEventHandlers, !0);
                }
                if (!h._dropdownMenu && h.exportEnabled && v) {
                    m = !1, h._dropdownMenu = document.createElement("div"), h._dropdownMenu.setAttribute("tabindex", -1);
                    var w = -1 !== h.theme.indexOf("dark") ? "black" : "#888888";
                    h._dropdownMenu.style.cssText = "position: absolute; z-index: 1; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 0px;top: 25px;min-width: 120px;outline: 0;font-size: 14px; font-family: Arial, Helvetica, sans-serif;padding: 5px 0px 5px 0px;text-align: left;line-height: 10px;background-color:" + h.toolbar.backgroundColor + ";box-shadow: 2px 2px 10px " + w, 
                    h._dropdownMenu.style.display = "none", h._toolBar.appendChild(h._dropdownMenu), 
                    J(h._dropdownMenu, "blur", (function() {
                        ta(h._dropdownMenu), h._dropDownCloseTime = new Date;
                    }), h.allDOMEventHandlers, !0), (w = document.createElement("div")).style.cssText = "padding: 12px 8px 12px 8px", 
                    w.innerHTML = h._cultureInfo.printText, w.style.backgroundColor = h.toolbar.backgroundColor, 
                    w.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(w), J(w, "touchstart", (function(h) {
                        m = !0;
                    }), h.allDOMEventHandlers), J(w, "mouseover", (function() {
                        m || (this.style.backgroundColor = h.toolbar.backgroundColorOnHover, this.style.color = h.toolbar.fontColorOnHover);
                    }), h.allDOMEventHandlers, !0), J(w, "mouseout", (function() {
                        m || (this.style.backgroundColor = h.toolbar.backgroundColor, this.style.color = h.toolbar.fontColor);
                    }), h.allDOMEventHandlers, !0), J(w, "click", (function() {
                        h.print(), ta(h._dropdownMenu);
                    }), h.allDOMEventHandlers, !0), (w = document.createElement("div")).style.cssText = "padding: 12px 8px 12px 8px", 
                    w.innerHTML = h._cultureInfo.saveJPGText, w.style.backgroundColor = h.toolbar.backgroundColor, 
                    w.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(w), J(w, "touchstart", (function(h) {
                        m = !0;
                    }), h.allDOMEventHandlers), J(w, "mouseover", (function() {
                        m || (this.style.backgroundColor = h.toolbar.backgroundColorOnHover, this.style.color = h.toolbar.fontColorOnHover);
                    }), h.allDOMEventHandlers, !0), J(w, "mouseout", (function() {
                        m || (this.style.backgroundColor = h.toolbar.backgroundColor, this.style.color = h.toolbar.fontColor);
                    }), h.allDOMEventHandlers, !0), J(w, "click", (function() {
                        h.exportChart({
                            format: "jpeg",
                            fileName: h.exportFileName
                        }), ta(h._dropdownMenu);
                    }), h.allDOMEventHandlers, !0), (w = document.createElement("div")).style.cssText = "padding: 12px 8px 12px 8px", 
                    w.innerHTML = h._cultureInfo.savePNGText, w.style.backgroundColor = h.toolbar.backgroundColor, 
                    w.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(w), J(w, "touchstart", (function(h) {
                        m = !0;
                    }), h.allDOMEventHandlers), J(w, "mouseover", (function() {
                        m || (this.style.backgroundColor = h.toolbar.backgroundColorOnHover, this.style.color = h.toolbar.fontColorOnHover);
                    }), h.allDOMEventHandlers, !0), J(w, "mouseout", (function() {
                        m || (this.style.backgroundColor = h.toolbar.backgroundColor, this.style.color = h.toolbar.fontColor);
                    }), h.allDOMEventHandlers, !0), J(w, "click", (function() {
                        h.exportChart({
                            format: "png",
                            fileName: h.exportFileName
                        }), ta(h._dropdownMenu);
                    }), h.allDOMEventHandlers, !0);
                }
            }(this), "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? ua(a, a._zoomButton, "zoom") : ua(a, a._zoomButton, "pan"), 
            a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && ua(a, a._resetButton, "reset")), 
            this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip), 
            this.toolTip.options) this.toolTip.options.hasOwnProperty(c) && this.toolTip.updateOption(c);
        }, m.prototype._updateSize = function() {
            var a;
            a = [ this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas ];
            var d = 0, c = 0;
            if (this.options.width ? d = this.width : this.width = d = 0 < this.container.clientWidth ? this.container.clientWidth : this.width, 
            this.options.height ? c = this.height : this.height = c = 0 < this.container.clientHeight ? this.container.clientHeight : this.height, 
            this.canvas.width !== d * ga || this.canvas.height !== c * ga) {
                for (var b = 0; b < a.length; b++) La(a[b], d, c);
                this.bounds = {
                    x1: 0,
                    y1: 0,
                    x2: this.width,
                    y2: this.height,
                    width: this.width,
                    height: this.height
                }, a = !0;
            } else a = !1;
            return a;
        }, m.prototype._initialize = function() {
            this.isNavigator = !s(this.parent) && !s(this.parent._defaultsKey) && "Navigator" === this.parent._defaultsKey, 
            this.toolbar = new Sa(this, this.options.toolbar), this._animator ? this._animator.cancelAllAnimations() : this._animator = new ha(this), 
            this.removeAllEventListeners(), this.disableToolTip = !1, this._axes = [], this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null, 
            this._updateOptions(), this.animatedRender = v && this.animationEnabled && 0 === this.renderCount, 
            this._updateSize(), this.clearCanvas(), this.ctx.beginPath(), this.axisX = [], this.axisX2 = [], 
            this.axisY = [], this.axisY2 = [], this._indexLabels = [], this._dataInRenderedOrder = [], 
            this._events = [], this._eventManager && this._eventManager.reset(), this.plotInfo = {
                axisPlacement: null,
                plotTypes: []
            }, this.layoutManager = new Ca(0, 0, this.width, this.height, this.isNavigator ? 0 : 2), 
            this.plotArea.layoutManager && this.plotArea.layoutManager.reset(), this.data = [], 
            this.title = null, this.subtitles = [];
            var a = 0, d = null;
            if (this.options.data) {
                for (var c = 0; c < this.options.data.length; c++) if (a++, !this.options.data[c].type || 0 <= m._supportedChartTypes.indexOf(this.options.data[c].type)) {
                    var b = new H(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
                    "error" === b.type && (b.linkedDataSeriesIndex = s(this.options.data[c].linkedDataSeriesIndex) ? c - 1 : this.options.data[c].linkedDataSeriesIndex, 
                    0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" != typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) && (b.linkedDataSeriesIndex = null), 
                    null === b.name && (b.name = "DataSeries " + a), null === b.color ? 1 < this.options.data.length ? (b._colorSet = [ this.selectedColorSet[b.index % this.selectedColorSet.length] ], 
                    b.color = this.selectedColorSet[b.index % this.selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type || "waterfall" === b.type || "boxAndWhisker" === b.type ? [ this.selectedColorSet[0] ] : this.selectedColorSet : b._colorSet = [ b.color ], 
                    null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8), 
                    "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some((function(a) {
                        return a.x;
                    })) && b.dataPoints.sort(h) : b.dataPoints.sort(h)), this.data.push(b);
                    var f, e = b.axisPlacement;
                    d = d || e;
                    if ("normal" === e ? "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === e ? "normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === e ? "normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === e && "none" === this.plotInfo.axisPlacement && (f = 'You cannot combine "' + b.type + '" with pie chart'), 
                    f && window.console) return void window.console.log(f);
                }
                for (c = 0; c < this.data.length; c++) {
                    if ("none" == d && "error" === this.data[c].type && window.console) return void window.console.log('You cannot combine "' + b.type + '" with error chart');
                    "error" === this.data[c].type && (this.data[c].axisPlacement = this.plotInfo.axisPlacement = d || "normal", 
                    this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex]);
                }
            }
            this._objectsInitialized = !0, this._plotAreaElements = [];
        }, m._supportedChartTypes = Ba("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" ")), 
        m.prototype.setLayout = function() {
            for (var a = this._plotAreaElements, d = 0; d < this.data.length; d++) if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
                if (!this.data[d].axisYType || "primary" === this.data[d].axisYType) if (this.options.axisY && 0 < this.options.axisY.length) {
                    if (!this.axisY.length) for (var c = 0; c < this.options.axisY.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[c] = new D(this, "axisY", this.options.axisY[c], c, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[c] = new D(this, "axisY", this.options.axisY[c], c, "axisY", "bottom"));
                    this.data[d].axisY = this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0], 
                    this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d]);
                } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new D(this, "axisY", this.options.axisY, 0, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new D(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), 
                this.data[d].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[d]);
                if ("secondary" === this.data[d].axisYType) if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                    if (!this.axisY2.length) for (c = 0; c < this.options.axisY2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[c] = new D(this, "axisY2", this.options.axisY2[c], c, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[c] = new D(this, "axisY2", this.options.axisY2[c], c, "axisY", "top"));
                    this.data[d].axisY = this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0], 
                    this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d]);
                } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new D(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new D(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), 
                this.data[d].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[d]);
                if (!this.data[d].axisXType || "primary" === this.data[d].axisXType) if (this.options.axisX && 0 < this.options.axisX.length) {
                    if (!this.axisX.length) for (c = 0; c < this.options.axisX.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[c] = new D(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[c] = new D(this, "axisX", this.options.axisX[c], c, "axisX", "left"));
                    this.data[d].axisX = this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0], 
                    this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d]);
                } else this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new D(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new D(this, "axisX", this.options.axisX, 0, "axisX", "left"))), 
                this.data[d].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[d]);
                if ("secondary" === this.data[d].axisXType) if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                    if (!this.axisX2.length) for (c = 0; c < this.options.axisX2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[c] = new D(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[c] = new D(this, "axisX2", this.options.axisX2[c], c, "axisX", "right"));
                    this.data[d].axisX = this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0], 
                    this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d]);
                } else this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new D(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new D(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), 
                this.data[d].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[d]);
            }
            if (this.axisY) {
                for (c = 1; c < this.axisY.length; c++) void 0 === this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
                for (c = 0; c < this.axisY.length - 1; c++) void 0 === this.axisY[c].options.margin && (this.axisY[c].margin = 10);
            }
            if (this.axisY2) {
                for (c = 1; c < this.axisY2.length; c++) void 0 === this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0);
                for (c = 0; c < this.axisY2.length - 1; c++) void 0 === this.axisY2[c].options.margin && (this.axisY2[c].margin = 10);
            }
            if (this.axisY && 0 < this.axisY.length && this.axisY2 && 0 < this.axisY2.length && (0 < this.axisY[0].gridThickness && void 0 === this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness && void 0 === this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0)), 
            this.axisX) for (c = 0; c < this.axisX.length; c++) void 0 === this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
            if (this.axisX2) for (c = 0; c < this.axisX2.length; c++) void 0 === this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
            if (this.axisX && 0 < this.axisX.length && this.axisX2 && 0 < this.axisX2.length && (0 < this.axisX[0].gridThickness && void 0 === this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && void 0 === this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0)), 
            c = !1, 0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled)) for (d = 0; d < this._axes.length; d++) if (null !== this._axes[d].viewportMinimum || null !== this._axes[d].viewportMaximum) {
                c = !0;
                break;
            }
            if (c ? (Ka(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, 
            this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, 
            this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness : 0) + "px solid " + this.toolbar.borderColor) : (ta(this._zoomButton, this._resetButton), 
            this._toolBar.style.border = this.toolbar.borderThickness + "px solid transparent", 
            this.options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1)), eb(this), 
            this._processData(), this.options.title && (this.title = new xa(this, this.options.title), 
            this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout()), this.options.subtitles) for (d = 0; d < this.options.subtitles.length; d++) c = new Ha(this, this.options.subtitles[d], d), 
            this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
            for (this.legend = new F(this, this.options.legend), d = 0; d < this.data.length; d++) (this.data[d].showInLegend || "pie" === this.data[d].type || "doughnut" === this.data[d].type || "funnel" === this.data[d].type || "pyramid" === this.data[d].type) && this.legend.dataSeries.push(this.data[d]);
            for (this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout(), 
            d = 0; d < this._axes.length; d++) if (this._axes[d].scaleBreaks && this._axes[d].scaleBreaks._appliedBreaks.length) {
                v ? (this._breaksCanvas = sa(this.width, this.height), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, 
                this._breaksCanvasCtx = this.ctx);
                break;
            }
            this._preRenderCanvas = sa(this.width, this.height), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), 
            "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || D.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        }, m.prototype.renderElements = function() {
            var a = this._plotAreaElements;
            this.title && !this.title.dockInsidePlotArea && this.title.render();
            for (var d = 0; d < this.subtitles.length; d++) this.subtitles[d].dockInsidePlotArea || this.subtitles[d].render();
            if (this.legend.dockInsidePlotArea || this.legend.render(), "normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) D.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement); else {
                if ("none" !== this.plotInfo.axisPlacement) return;
                this.preparePlotArea();
            }
            for (d = 0; d < a.length; d++) a[d].setLayout(), a[d].render();
            var c = [];
            if (this.animatedRender) {
                var b = sa(this.width, this.height);
                b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height);
            }
            hb(this);
            var e;
            a = this.ctx.miterLimit;
            for (this.ctx.miterLimit = 3, v && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), 
            this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), 
            this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
            this._preRenderCtx.clearRect(0, 0, this.width, this.height)), d = 0; d < this.plotInfo.plotTypes.length; d++) for (var f = this.plotInfo.plotTypes[d], l = 0; l < f.plotUnits.length; l++) {
                var u = f.plotUnits[l], A = null;
                u.targetCanvas = null, this.animatedRender && (u.targetCanvas = sa(this.width, this.height), 
                u.targetCanvasCtx = u.targetCanvas.getContext("2d"), e = u.targetCanvasCtx.miterLimit, 
                u.targetCanvasCtx.miterLimit = 3), "line" === u.type ? A = this.renderLine(u) : "stepLine" === u.type ? A = this.renderStepLine(u) : "spline" === u.type ? A = this.renderSpline(u) : "column" === u.type ? A = this.renderColumn(u) : "bar" === u.type ? A = this.renderBar(u) : "area" === u.type ? A = this.renderArea(u) : "stepArea" === u.type ? A = this.renderStepArea(u) : "splineArea" === u.type ? A = this.renderSplineArea(u) : "stackedColumn" === u.type ? A = this.renderStackedColumn(u) : "stackedColumn100" === u.type ? A = this.renderStackedColumn100(u) : "stackedBar" === u.type ? A = this.renderStackedBar(u) : "stackedBar100" === u.type ? A = this.renderStackedBar100(u) : "stackedArea" === u.type ? A = this.renderStackedArea(u) : "stackedArea100" === u.type ? A = this.renderStackedArea100(u) : "bubble" === u.type ? A = A = this.renderBubble(u) : "scatter" === u.type ? A = this.renderScatter(u) : "pie" === u.type || "doughnut" === u.type ? this.renderPie(u) : "funnel" === u.type || "pyramid" === u.type ? A = this.renderFunnel(u) : "candlestick" === u.type || "ohlc" === u.type ? A = this.renderCandlestick(u) : "rangeColumn" === u.type ? A = this.renderRangeColumn(u) : "error" === u.type ? A = this.renderError(u) : "rangeBar" === u.type ? A = this.renderRangeBar(u) : "rangeArea" === u.type ? A = this.renderRangeArea(u) : "rangeSplineArea" === u.type ? A = this.renderRangeSplineArea(u) : "waterfall" === u.type ? A = this.renderWaterfall(u) : "boxAndWhisker" === u.type && (A = this.renderBoxAndWhisker(u));
                for (var k = 0; k < u.dataSeriesIndexes.length; k++) this._dataInRenderedOrder.push(this.data[u.dataSeriesIndexes[k]]);
                this.animatedRender && (u.targetCanvasCtx.miterLimit = e, A && c.push(A));
            }
            this.ctx.miterLimit = a, this.animatedRender && this._breaksCanvasCtx && c.push({
                source: this._breaksCanvasCtx,
                dest: this.plotArea.ctx,
                animationCallback: L.fadeInAnimation,
                easingFunction: L.easing.easeInQuad,
                animationBase: 0,
                startTimePercent: .7
            }), this.animatedRender && 0 < this._indexLabels.length && (e = sa(this.width, this.height).getContext("2d"), 
            c.push(this.renderIndexLabels(e)));
            var n = this;
            if (0 < c.length) n.disableToolTip = !0, n._animator.animate(200, n.animationDuration, (function(a) {
                n.ctx.clearRect(0, 0, n.width, n.height), n.ctx.drawImage(b, 0, 0, Math.floor(n.width * ga), Math.floor(n.height * ga), 0, 0, n.width, n.height);
                for (var e = 0; e < c.length; e++) A = c[e], 1 > a && void 0 !== A.startTimePercent ? a >= A.startTimePercent && A.animationCallback(A.easingFunction(a - A.startTimePercent, 0, 1, 1 - A.startTimePercent), A) : A.animationCallback(A.easingFunction(a, 0, 1, 1), A);
                n.dispatchEvent("dataAnimationIterationEnd", {
                    chart: n
                });
            }), (function() {
                c = [];
                for (var a = 0; a < n.plotInfo.plotTypes.length; a++) for (var e = n.plotInfo.plotTypes[a], d = 0; d < e.plotUnits.length; d++) e.plotUnits[d].targetCanvas = null;
                b = null, n.disableToolTip = !1, n.dispatchEvent("dataAnimationEnd", {
                    chart: n
                });
            })); else {
                if (n._breaksCanvas) if (v) n.plotArea.ctx.drawImage(n._breaksCanvas, 0, 0, this.width, this.height); else for (k = 0; k < n._axes.length; k++) n._axes[k].createMask();
                0 < n._indexLabels.length && n.renderIndexLabels(), n.dispatchEvent("dataAnimationIterationEnd", {
                    chart: n
                }), n.dispatchEvent("dataAnimationEnd", {
                    chart: n
                });
            }
            for (this.attachPlotAreaEventHandlers(), this.zoomEnabled || this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display || ta(this._zoomButton, this._resetButton), 
            this.toolTip._updateToolTip(), this.renderCount++, Ga && (n = this, setTimeout((function() {
                var a = document.getElementById("ghostCanvasCopy");
                a && (La(a, n.width, n.height), a.getContext("2d").drawImage(n._eventManager.ghostCanvas, 0, 0));
            }), 2e3)), this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx), 
            k = 0; k < this._axes.length; k++) this._axes[k].maskCanvas && (delete this._axes[k].maskCanvas, 
            delete this._axes[k].maskCtx);
        }, m.prototype.render = function(a) {
            a && (this.options = a), this._initialize(), this.setLayout(), this.renderElements(), 
            this._preRenderCanvas = null;
        }, m.prototype.attachPlotAreaEventHandlers = function() {
            this.attachEvent({
                context: this,
                chart: this,
                mousedown: this._plotAreaMouseDown,
                mouseup: this._plotAreaMouseUp,
                mousemove: this._plotAreaMouseMove,
                cursor: this.panEnabled ? "move" : "default",
                capture: !0,
                bounds: this.plotArea
            });
        }, m.prototype.categoriseDataSeries = function() {
            for (var a = "", d = 0; d < this.data.length; d++) if ((a = this.data[d]).dataPoints && 0 !== a.dataPoints.length && a.visible && 0 <= m._supportedChartTypes.indexOf(a.type)) {
                for (var c = null, b = !1, e = null, f = !1, l = 0; l < this.plotInfo.plotTypes.length; l++) if (this.plotInfo.plotTypes[l].type === a.type) {
                    b = !0, c = this.plotInfo.plotTypes[l];
                    break;
                }
                for (b || (c = {
                    type: a.type,
                    totalDataSeries: 0,
                    plotUnits: []
                }, this.plotInfo.plotTypes.push(c)), l = 0; l < c.plotUnits.length; l++) if (c.plotUnits[l].axisYType === a.axisYType && c.plotUnits[l].axisXType === a.axisXType && c.plotUnits[l].axisYIndex === a.axisYIndex && c.plotUnits[l].axisXIndex === a.axisXIndex) {
                    f = !0, e = c.plotUnits[l];
                    break;
                }
                f || (e = {
                    type: a.type,
                    previousDataSeriesCount: 0,
                    index: c.plotUnits.length,
                    plotType: c,
                    axisXType: a.axisXType,
                    axisYType: a.axisYType,
                    axisYIndex: a.axisYIndex,
                    axisXIndex: a.axisXIndex,
                    axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                    axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                    dataSeriesIndexes: [],
                    yTotals: [],
                    yAbsTotals: []
                }, c.plotUnits.push(e)), c.totalDataSeries++, e.dataSeriesIndexes.push(d), a.plotUnit = e;
            }
            for (d = 0; d < this.plotInfo.plotTypes.length; d++) for (c = this.plotInfo.plotTypes[d], 
            l = a = 0; l < c.plotUnits.length; l++) c.plotUnits[l].previousDataSeriesCount = a, 
            a += c.plotUnits[l].dataSeriesIndexes.length;
        }, m.prototype.assignIdToDataPoints = function() {
            for (var a = 0; a < this.data.length; a++) {
                var d = this.data[a];
                if (d.dataPoints) for (var c = d.dataPoints.length, b = 0; b < c; b++) d.dataPointIds[b] = ++this._eventManager.lastObjectId;
            }
        }, m.prototype._processData = function() {
            this.assignIdToDataPoints(), this.categoriseDataSeries();
            for (var a = 0; a < this.plotInfo.plotTypes.length; a++) for (var d = this.plotInfo.plotTypes[a], c = 0; c < d.plotUnits.length; c++) {
                var b = d.plotUnits[c];
                "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type ? this._processMultiseriesPlotUnit(b) : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type ? this._processStackedPlotUnit(b) : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type ? this._processStacked100PlotUnit(b) : "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? this._processMultiYPlotUnit(b) : "waterfall" === b.type && this._processSpecificPlotUnit(b);
            }
            this.calculateAutoBreaks();
        }, m.prototype._processMultiseriesPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) for (var b, e, d = a.axisY.dataInfo, c = a.axisX.dataInfo, f = !1, l = 0; l < a.dataSeriesIndexes.length; l++) {
                var p, u = this.data[a.dataSeriesIndexes[l]], A = 0, k = !1, n = !1;
                if ("normal" === u.axisPlacement || "xySwapped" === u.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -1 / 0, g = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : 1 / 0;
                for ((u.dataPoints[A].x && u.dataPoints[A].x.getTime || "dateTime" === u.xValueType) && (f = !0), 
                A = 0; A < u.dataPoints.length; A++) {
                    if (void 0 === u.dataPoints[A].x && (u.dataPoints[A].x = A + (a.axisX.logarithmic ? 1 : 0)), 
                    u.dataPoints[A].x.getTime ? (f = !0, b = u.dataPoints[A].x.getTime()) : b = u.dataPoints[A].x, 
                    e = u.dataPoints[A].y, b < c.min && (c.min = b), b > c.max && (c.max = b), e < d.min && "number" == typeof e && (d.min = e), 
                    e > d.max && "number" == typeof e && (d.max = e), 0 < A) {
                        if (a.axisX.logarithmic) {
                            var r = b / u.dataPoints[A - 1].x;
                            1 > r && (r = 1 / r), c.minDiff > r && 1 !== r && (c.minDiff = r);
                        } else 0 > (r = b - u.dataPoints[A - 1].x) && (r *= -1), c.minDiff > r && 0 !== r && (c.minDiff = r);
                        null !== e && null !== u.dataPoints[A - 1].y && (a.axisY.logarithmic ? (1 > (r = e / u.dataPoints[A - 1].y) && (r = 1 / r), 
                        d.minDiff > r && 1 !== r && (d.minDiff = r)) : (0 > (r = e - u.dataPoints[A - 1].y) && (r *= -1), 
                        d.minDiff > r && 0 !== r && (d.minDiff = r)));
                    }
                    if (b < q && !k) null !== e && (p = b); else {
                        if (!k && (k = !0, 0 < A)) {
                            A -= 2;
                            continue;
                        }
                        if (b > g && !n) n = !0; else if (b > g && n) continue;
                        u.dataPoints[A].label && (a.axisX.labels[b] = u.dataPoints[A].label), b < c.viewPortMin && (c.viewPortMin = b), 
                        b > c.viewPortMax && (c.viewPortMax = b), null === e ? c.viewPortMin === b && p < b && (c.viewPortMin = p) : (e < d.viewPortMin && "number" == typeof e && (d.viewPortMin = e), 
                        e > d.viewPortMax && "number" == typeof e && (d.viewPortMax = e));
                    }
                }
                u.axisX.valueType = u.xValueType = f ? "dateTime" : "number";
            }
        }, m.prototype._processStackedPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var b, e, d = a.axisY.dataInfo, c = a.axisX.dataInfo, f = !1, l = [], u = [], A = 1 / 0, k = -1 / 0, n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var h, p = this.data[a.dataSeriesIndexes[n]], q = 0, g = !1, r = !1;
                    if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement) var m = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -1 / 0, t = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : 1 / 0;
                    for ((p.dataPoints[q].x && p.dataPoints[q].x.getTime || "dateTime" === p.xValueType) && (f = !0), 
                    q = 0; q < p.dataPoints.length; q++) {
                        if (void 0 === p.dataPoints[q].x && (p.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0)), 
                        p.dataPoints[q].x.getTime ? (f = !0, b = p.dataPoints[q].x.getTime()) : b = p.dataPoints[q].x, 
                        e = s(p.dataPoints[q].y) ? 0 : p.dataPoints[q].y, b < c.min && (c.min = b), b > c.max && (c.max = b), 
                        0 < q) {
                            if (a.axisX.logarithmic) {
                                var x = b / p.dataPoints[q - 1].x;
                                1 > x && (x = 1 / x), c.minDiff > x && 1 !== x && (c.minDiff = x);
                            } else 0 > (x = b - p.dataPoints[q - 1].x) && (x *= -1), c.minDiff > x && 0 !== x && (c.minDiff = x);
                            null !== e && null !== p.dataPoints[q - 1].y && (a.axisY.logarithmic ? 0 < e && (1 > (x = e / p.dataPoints[q - 1].y) && (x = 1 / x), 
                            d.minDiff > x && 1 !== x && (d.minDiff = x)) : (0 > (x = e - p.dataPoints[q - 1].y) && (x *= -1), 
                            d.minDiff > x && 0 !== x && (d.minDiff = x)));
                        }
                        if (b < m && !g) null !== p.dataPoints[q].y && (h = b); else {
                            if (!g && (g = !0, 0 < q)) {
                                q -= 2;
                                continue;
                            }
                            if (b > t && !r) r = !0; else if (b > t && r) continue;
                            p.dataPoints[q].label && (a.axisX.labels[b] = p.dataPoints[q].label), b < c.viewPortMin && (c.viewPortMin = b), 
                            b > c.viewPortMax && (c.viewPortMax = b), null === p.dataPoints[q].y ? c.viewPortMin === b && h < b && (c.viewPortMin = h) : (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, 
                            a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? l[b] ? l[b] += e : (l[b] = e, 
                            A = Math.min(e, A)) : u[b] ? u[b] += e : (u[b] = e, k = Math.max(e, k)));
                        }
                    }
                    a.axisY.scaleBreaks && a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks && (d.dataPointYPositiveSums ? (d.dataPointYPositiveSums.push.apply(d.dataPointYPositiveSums, l), 
                    d.dataPointYNegativeSums.push.apply(d.dataPointYPositiveSums, u)) : (d.dataPointYPositiveSums = l, 
                    d.dataPointYNegativeSums = u)), p.axisX.valueType = p.xValueType = f ? "dateTime" : "number";
                }
                for (q in l) l.hasOwnProperty(q) && !isNaN(q) && ((a = l[q]) < d.min && (d.min = Math.min(a, A)), 
                a > d.max && (d.max = a), q < c.viewPortMin || q > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = Math.min(a, A)), 
                a > d.viewPortMax && (d.viewPortMax = a)));
                for (q in u) u.hasOwnProperty(q) && !isNaN(q) && ((a = u[q]) < d.min && (d.min = a), 
                a > d.max && (d.max = Math.max(a, k)), q < c.viewPortMin || q > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = a), 
                a > d.viewPortMax && (d.viewPortMax = Math.max(a, k))));
            }
        }, m.prototype._processStacked100PlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var b, e, d = a.axisY.dataInfo, c = a.axisX.dataInfo, f = !1, l = !1, u = !1, A = [], k = 0; k < a.dataSeriesIndexes.length; k++) {
                    var r, n = this.data[a.dataSeriesIndexes[k]], p = 0, q = !1, g = !1;
                    if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement) var h = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -1 / 0, m = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : 1 / 0;
                    for ((n.dataPoints[p].x && n.dataPoints[p].x.getTime || "dateTime" === n.xValueType) && (f = !0), 
                    p = 0; p < n.dataPoints.length; p++) {
                        if (void 0 === n.dataPoints[p].x && (n.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0)), 
                        n.dataPoints[p].x.getTime ? (f = !0, b = n.dataPoints[p].x.getTime()) : b = n.dataPoints[p].x, 
                        e = s(n.dataPoints[p].y) ? null : n.dataPoints[p].y, b < c.min && (c.min = b), b > c.max && (c.max = b), 
                        0 < p) {
                            if (a.axisX.logarithmic) {
                                var t = b / n.dataPoints[p - 1].x;
                                1 > t && (t = 1 / t), c.minDiff > t && 1 !== t && (c.minDiff = t);
                            } else 0 > (t = b - n.dataPoints[p - 1].x) && (t *= -1), c.minDiff > t && 0 !== t && (c.minDiff = t);
                            s(e) || null === n.dataPoints[p - 1].y || (a.axisY.logarithmic ? 0 < e && (1 > (t = e / n.dataPoints[p - 1].y) && (t = 1 / t), 
                            d.minDiff > t && 1 !== t && (d.minDiff = t)) : (0 > (t = e - n.dataPoints[p - 1].y) && (t *= -1), 
                            d.minDiff > t && 0 !== t && (d.minDiff = t)));
                        }
                        if (b < h && !q) null !== e && (r = b); else {
                            if (!q && (q = !0, 0 < p)) {
                                p -= 2;
                                continue;
                            }
                            if (b > m && !g) g = !0; else if (b > m && g) continue;
                            n.dataPoints[p].label && (a.axisX.labels[b] = n.dataPoints[p].label), b < c.viewPortMin && (c.viewPortMin = b), 
                            b > c.viewPortMax && (c.viewPortMax = b), null === e ? c.viewPortMin === b && r < b && (c.viewPortMin = r) : (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, 
                            a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? l = !0 : 0 > e && (u = !0), 
                            A[b] = A[b] ? A[b] + Math.abs(e) : Math.abs(e));
                        }
                    }
                    n.axisX.valueType = n.xValueType = f ? "dateTime" : "number";
                }
                a.axisY.logarithmic ? (d.max = s(d.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -.05) : Math.max(d.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -.05)), 
                d.min = s(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : l && !u ? (d.max = s(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), 
                d.min = s(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : l && u ? (d.max = s(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), 
                d.min = s(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99)) : !l && u && (d.max = s(d.viewPortMax) ? -1 : Math.max(d.viewPortMax, -1), 
                d.min = s(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99)), d.viewPortMin = d.min, 
                d.viewPortMax = d.max, a.dataPointYSums = A;
            }
        }, m.prototype._processMultiYPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) for (var b, e, f, l, d = a.axisY.dataInfo, c = a.axisX.dataInfo, u = !1, A = 0; A < a.dataSeriesIndexes.length; A++) {
                var g, r, h, k = this.data[a.dataSeriesIndexes[A]], n = 0, p = !1, q = !1;
                if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement) var m = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -1 / 0, t = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : 1 / 0;
                for ((k.dataPoints[n].x && k.dataPoints[n].x.getTime || "dateTime" === k.xValueType) && (u = !0), 
                n = 0; n < k.dataPoints.length; n++) {
                    if (void 0 === k.dataPoints[n].x && (k.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0)), 
                    k.dataPoints[n].x.getTime ? (u = !0, b = k.dataPoints[n].x.getTime()) : b = k.dataPoints[n].x, 
                    (e = k.dataPoints[n].y) && e.length) {
                        f = Math.min.apply(null, e), l = Math.max.apply(null, e), r = !0;
                        for (var x = 0; x < e.length; x++) null === e.k && (r = !1);
                        r && (p || (h = g), g = b);
                    }
                    if (b < c.min && (c.min = b), b > c.max && (c.max = b), f < d.min && (d.min = f), 
                    l > d.max && (d.max = l), 0 < n && (a.axisX.logarithmic ? (1 > (r = b / k.dataPoints[n - 1].x) && (r = 1 / r), 
                    c.minDiff > r && 1 !== r && (c.minDiff = r)) : (0 > (r = b - k.dataPoints[n - 1].x) && (r *= -1), 
                    c.minDiff > r && 0 !== r && (c.minDiff = r)), e && null !== e[0] && k.dataPoints[n - 1].y && null !== k.dataPoints[n - 1].y[0] && (a.axisY.logarithmic ? (1 > (r = e[0] / k.dataPoints[n - 1].y[0]) && (r = 1 / r), 
                    d.minDiff > r && 1 !== r && (d.minDiff = r)) : (0 > (r = e[0] - k.dataPoints[n - 1].y[0]) && (r *= -1), 
                    d.minDiff > r && 0 !== r && (d.minDiff = r)))), !(b < m) || p) {
                        if (!p && (p = !0, 0 < n)) {
                            n -= 2, g = h;
                            continue;
                        }
                        if (b > t && !q) q = !0; else if (b > t && q) continue;
                        if (k.dataPoints[n].label && (a.axisX.labels[b] = k.dataPoints[n].label), b < c.viewPortMin && (c.viewPortMin = b), 
                        b > c.viewPortMax && (c.viewPortMax = b), c.viewPortMin === b && e) for (x = 0; x < e.length; x++) if (null === e[x] && g < b) {
                            c.viewPortMin = g;
                            break;
                        }
                        null === e ? c.viewPortMin === b && g < b && (c.viewPortMin = g) : (f < d.viewPortMin && (d.viewPortMin = f), 
                        l > d.viewPortMax && (d.viewPortMax = l));
                    }
                }
                k.axisX.valueType = k.xValueType = u ? "dateTime" : "number";
            }
        }, m.prototype._processSpecificPlotUnit = function(a) {
            if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) for (var b, e, d = a.axisY.dataInfo, c = a.axisX.dataInfo, f = !1, l = 0; l < a.dataSeriesIndexes.length; l++) {
                var u = this.data[a.dataSeriesIndexes[l]], A = 0, k = !1, n = !1, p = b = 0;
                if ("normal" === u.axisPlacement || "xySwapped" === u.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -1 / 0, g = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : 1 / 0;
                for ((u.dataPoints[A].x && u.dataPoints[A].x.getTime || "dateTime" === u.xValueType) && (f = !0), 
                A = 0; A < u.dataPoints.length; A++) void 0 !== u.dataPoints[A].isCumulativeSum && !0 === u.dataPoints[A].isCumulativeSum ? (u.dataPointEOs[A].cumulativeSumYStartValue = 0, 
                u.dataPointEOs[A].cumulativeSum = 0 === A ? 0 : u.dataPointEOs[A - 1].cumulativeSum, 
                u.dataPoints[A].y = 0 === A ? 0 : u.dataPointEOs[A - 1].cumulativeSum) : void 0 !== u.dataPoints[A].isIntermediateSum && !0 === u.dataPoints[A].isIntermediateSum ? (u.dataPointEOs[A].cumulativeSumYStartValue = p, 
                u.dataPointEOs[A].cumulativeSum = 0 === A ? 0 : u.dataPointEOs[A - 1].cumulativeSum, 
                u.dataPoints[A].y = 0 === A ? 0 : b, p = 0 === A ? 0 : u.dataPointEOs[A - 1].cumulativeSum, 
                b = 0) : (e = "number" != typeof u.dataPoints[A].y ? 0 : u.dataPoints[A].y, u.dataPointEOs[A].cumulativeSumYStartValue = 0 === A ? 0 : u.dataPointEOs[A - 1].cumulativeSum, 
                u.dataPointEOs[A].cumulativeSum = 0 === A ? e : u.dataPointEOs[A - 1].cumulativeSum + e, 
                b += e);
                for (A = 0; A < u.dataPoints.length; A++) if (void 0 === u.dataPoints[A].x && (u.dataPoints[A].x = A + (a.axisX.logarithmic ? 1 : 0)), 
                u.dataPoints[A].x.getTime ? (f = !0, b = u.dataPoints[A].x.getTime()) : b = u.dataPoints[A].x, 
                e = u.dataPoints[A].y, b < c.min && (c.min = b), b > c.max && (c.max = b), u.dataPointEOs[A].cumulativeSum < d.min && (d.min = u.dataPointEOs[A].cumulativeSum), 
                u.dataPointEOs[A].cumulativeSum > d.max && (d.max = u.dataPointEOs[A].cumulativeSum), 
                0 < A && (a.axisX.logarithmic ? (1 > (p = b / u.dataPoints[A - 1].x) && (p = 1 / p), 
                c.minDiff > p && 1 !== p && (c.minDiff = p)) : (0 > (p = b - u.dataPoints[A - 1].x) && (p *= -1), 
                c.minDiff > p && 0 !== p && (c.minDiff = p)), null !== e && null !== u.dataPoints[A - 1].y && (a.axisY.logarithmic ? (1 > (e = u.dataPointEOs[A].cumulativeSum / u.dataPointEOs[A - 1].cumulativeSum) && (e = 1 / e), 
                d.minDiff > e && 1 !== e && (d.minDiff = e)) : (0 > (e = u.dataPointEOs[A].cumulativeSum - u.dataPointEOs[A - 1].cumulativeSum) && (e *= -1), 
                d.minDiff > e && 0 !== e && (d.minDiff = e)))), !(b < q) || k) {
                    if (!k && (k = !0, 0 < A)) {
                        A -= 2;
                        continue;
                    }
                    if (b > g && !n) n = !0; else if (b > g && n) continue;
                    u.dataPoints[A].label && (a.axisX.labels[b] = u.dataPoints[A].label), b < c.viewPortMin && (c.viewPortMin = b), 
                    b > c.viewPortMax && (c.viewPortMax = b), 0 < A && (u.dataPointEOs[A - 1].cumulativeSum < d.viewPortMin && (d.viewPortMin = u.dataPointEOs[A - 1].cumulativeSum), 
                    u.dataPointEOs[A - 1].cumulativeSum > d.viewPortMax && (d.viewPortMax = u.dataPointEOs[A - 1].cumulativeSum)), 
                    u.dataPointEOs[A].cumulativeSum < d.viewPortMin && (d.viewPortMin = u.dataPointEOs[A].cumulativeSum), 
                    u.dataPointEOs[A].cumulativeSum > d.viewPortMax && (d.viewPortMax = u.dataPointEOs[A].cumulativeSum);
                }
                u.axisX.valueType = u.xValueType = f ? "dateTime" : "number";
            }
        }, m.prototype.calculateAutoBreaks = function() {
            function a(a, b, c, e) {
                return e ? (1 >= (c = Math.pow(Math.min(c * a / b, b / a), .2)) && (c = Math.pow(1 > a ? 1 / a : Math.min(b / a, a), .25)), 
                {
                    startValue: a * c,
                    endValue: b / c
                }) : (0 >= (c = .2 * Math.min(c - b + a, b - a)) && (c = .25 * Math.min(b - a, Math.abs(a))), 
                {
                    startValue: a + c,
                    endValue: b - c
                });
            }
            function d(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                    var b = a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks, c = a.axisY.scaleBreaks && a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks;
                    if (b || c) for (var g, q, d = a.axisY.dataInfo, k = (f = a.axisX.dataInfo).min, l = f.max, n = d.min, p = d.max, f = f._dataRanges, u = (d = d._dataRanges, 
                    0), A = 0; A < a.dataSeriesIndexes.length; A++) {
                        var h = e.data[a.dataSeriesIndexes[A]];
                        if (!(4 > h.dataPoints.length)) for (u = 0; u < h.dataPoints.length; u++) if (b && (q = (l + 1 - k) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, 
                        (g = h.dataPoints[u].x.getTime ? h.dataPoints[u].x.getTime() : h.dataPoints[u].x) < f[q = Math.floor((g - k) / q)].min && (f[q].min = g), 
                        g > f[q].max && (f[q].max = g)), c) {
                            var m = (p + 1 - n) * Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                            if ((g = "waterfall" === a.type ? h.dataPointEOs[u].cumulativeSum : h.dataPoints[u].y) && g.length) for (var v = 0; v < g.length; v++) q = Math.floor((g[v] - n) / m), 
                            g[v] < d[q].min && (d[q].min = g[v]), g[v] > d[q].max && (d[q].max = g[v]); else s(g) || (g < d[q = Math.floor((g - n) / m)].min && (d[q].min = g), 
                            g > d[q].max && (d[q].max = g));
                        }
                    }
                }
            }
            function c(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length) && a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks) for (var g, b = a.axisX.dataInfo, c = b.min, d = b.max, f = b._dataRanges, k = 0, l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var n = e.data[a.dataSeriesIndexes[l]];
                    if (!(4 > n.dataPoints.length)) for (k = 0; k < n.dataPoints.length; k++) g = (d + 1 - c) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, 
                    (b = n.dataPoints[k].x.getTime ? n.dataPoints[k].x.getTime() : n.dataPoints[k].x) < f[g = Math.floor((b - c) / g)].min && (f[g].min = b), 
                    b > f[g].max && (f[g].max = b);
                }
            }
            for (var b, e = this, f = !1, l = 0; l < this._axes.length; l++) if (this._axes[l].scaleBreaks && this._axes[l].scaleBreaks.autoCalculate && 1 <= this._axes[l].scaleBreaks.maxNumberOfAutoBreaks) {
                f = !0, this._axes[l].dataInfo._dataRanges = [];
                for (var u = 0; u < 100 / Math.max(parseFloat(this._axes[l].scaleBreaks.collapsibleThreshold) || 10, 10); u++) this._axes[l].dataInfo._dataRanges.push({
                    min: 1 / 0,
                    max: -1 / 0
                });
            }
            if (f) {
                for (l = 0; l < this.plotInfo.plotTypes.length; l++) for (f = this.plotInfo.plotTypes[l], 
                u = 0; u < f.plotUnits.length; u++) "line" === (b = f.plotUnits[u]).type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type || "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "waterfall" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? d(b) : 0 <= b.type.indexOf("stacked") && c(b);
                for (l = 0; l < this._axes.length; l++) if (this._axes[l].dataInfo._dataRanges) {
                    var A = this._axes[l].dataInfo.min;
                    b = (this._axes[l].dataInfo.max + 1 - A) * Math.max(parseFloat(this._axes[l].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                    var n, p, k = this._axes[l].dataInfo._dataRanges;
                    f = [];
                    if (this._axes[l].dataInfo.dataPointYPositiveSums) {
                        var q = this._axes[l].dataInfo.dataPointYPositiveSums;
                        for (u in n = k, q) if (q.hasOwnProperty(u) && !isNaN(u) && !s(p = q[u])) {
                            var g = Math.floor((p - A) / b);
                            p < n[g].min && (n[g].min = p), p > n[g].max && (n[g].max = p);
                        }
                        delete this._axes[l].dataInfo.dataPointYPositiveSums;
                    }
                    if (this._axes[l].dataInfo.dataPointYNegativeSums) {
                        for (u in n = k, q = this._axes[l].dataInfo.dataPointYNegativeSums) q.hasOwnProperty(u) && !isNaN(u) && (s(p = -1 * q[u]) || (p < n[g = Math.floor((p - A) / b)].min && (n[g].min = p), 
                        p > n[g].max && (n[g].max = p)));
                        delete this._axes[l].dataInfo.dataPointYNegativeSums;
                    }
                    for (u = 0; u < k.length - 1; u++) if (n = k[u].max, isFinite(n)) for (;u < k.length - 1; ) {
                        if (A = k[u + 1].min, isFinite(A)) {
                            (p = A - n) > b && f.push({
                                diff: p,
                                start: n,
                                end: A
                            });
                            break;
                        }
                        u++;
                    }
                    if (this._axes[l].scaleBreaks.customBreaks) for (u = 0; u < this._axes[l].scaleBreaks.customBreaks.length; u++) for (b = 0; b < f.length; b++) (this._axes[l].scaleBreaks.customBreaks[u].startValue <= f[b].start && f[b].start <= this._axes[l].scaleBreaks.customBreaks[u].endValue || this._axes[l].scaleBreaks.customBreaks[u].startValue <= f[b].start && f[b].start <= this._axes[l].scaleBreaks.customBreaks[u].endValue || f[b].start <= this._axes[l].scaleBreaks.customBreaks[u].startValue && this._axes[l].scaleBreaks.customBreaks[u].startValue <= f[b].end || f[b].start <= this._axes[l].scaleBreaks.customBreaks[u].endValue && this._axes[l].scaleBreaks.customBreaks[u].endValue <= f[b].end) && (f.splice(b, 1), 
                    b--);
                    for (f.sort((function(a, b) {
                        return b.diff - a.diff;
                    })), u = 0; u < Math.min(f.length, this._axes[l].scaleBreaks.maxNumberOfAutoBreaks); u++) b = a(f[u].start, f[u].end, this._axes[l].logarithmic ? this._axes[l].dataInfo.max / this._axes[l].dataInfo.min : this._axes[l].dataInfo.max - this._axes[l].dataInfo.min, this._axes[l].logarithmic), 
                    this._axes[l].scaleBreaks.autoBreaks.push(new U(this, "autoBreaks", b, u, ++this._eventManager.lastObjectId, this._axes[l].scaleBreaks)), 
                    this._axes[l].scaleBreaks._appliedBreaks.push(this._axes[l].scaleBreaks.autoBreaks[this._axes[l].scaleBreaks.autoBreaks.length - 1]);
                    this._axes[l].scaleBreaks._appliedBreaks.sort((function(a, b) {
                        return a.startValue - b.startValue;
                    }));
                }
            }
        }, m.prototype.renderCrosshairs = function(a) {
            for (var d = 0; d < this.axisX.length; d++) this.axisX[d] != a && this.axisX[d].crosshair && this.axisX[d].crosshair.enabled && !this.axisX[d].crosshair._hidden && this.axisX[d].showCrosshair(this.axisX[d].crosshair._updatedValue);
            for (d = 0; d < this.axisX2.length; d++) this.axisX2[d] != a && this.axisX2[d].crosshair && this.axisX2[d].crosshair.enabled && !this.axisX2[d].crosshair._hidden && this.axisX2[d].showCrosshair(this.axisX2[d].crosshair._updatedValue);
            for (d = 0; d < this.axisY.length; d++) this.axisY[d] != a && this.axisY[d].crosshair && this.axisY[d].crosshair.enabled && !this.axisY[d].crosshair._hidden && this.axisY[d].showCrosshair(this.axisY[d].crosshair._updatedValue);
            for (d = 0; d < this.axisY2.length; d++) this.axisY2[d] != a && this.axisY2[d].crosshair && this.axisY2[d].crosshair.enabled && !this.axisY2[d].crosshair._hidden && this.axisY2[d].showCrosshair(this.axisY2[d].crosshair._updatedValue);
        }, m.prototype.getDataPointAtXY = function(a, d, c) {
            c = c || !1;
            for (var b = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
                var f;
                (f = this._dataInRenderedOrder[e].getDataPointAtXY(a, d, c)) && b.push(f);
            }
            for (a = null, d = !1, c = 0; c < b.length; c++) if (("line" === b[c].dataSeries.type || "stepLine" === b[c].dataSeries.type || "area" === b[c].dataSeries.type || "stepArea" === b[c].dataSeries.type) && (e = ka("markerSize", b[c].dataPoint, b[c].dataSeries) || 8, 
            b[c].distance <= e / 2)) {
                d = !0;
                break;
            }
            for (c = 0; c < b.length; c++) d && "line" !== b[c].dataSeries.type && "stepLine" !== b[c].dataSeries.type && "area" !== b[c].dataSeries.type && "stepArea" !== b[c].dataSeries.type || (a ? b[c].distance <= a.distance && (a = b[c]) : a = b[c]);
            return a;
        }, m.prototype.getObjectAtXY = function(a, d, c) {
            var b = null;
            if (c = this.getDataPointAtXY(a, d, c || !1)) b = c.dataSeries.dataPointIds[c.dataPointIndex]; else if (v) b = Ya(a, d, this._eventManager.ghostCtx); else for (c = 0; c < this.legend.items.length; c++) {
                var e = this.legend.items[c];
                a >= e.x1 && a <= e.x2 && d >= e.y1 && d <= e.y2 && (b = e.id);
            }
            return b;
        }, m.prototype.getAutoFontSize = lb, m.prototype.resetOverlayedCanvas = function() {
            this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
        }, m.prototype.clearCanvas = kb, m.prototype.attachEvent = function(a) {
            this._events.push(a);
        }, m.prototype._touchEventHandler = function(a) {
            if (a.changedTouches && this.interactivityEnabled) {
                var d = [], c = a.changedTouches, b = c ? c[0] : a, e = null;
                switch (a.type) {
                  case "touchstart":
                  case "MSPointerDown":
                    d = [ "mousemove", "mousedown" ], this._lastTouchData = Na(b), this._lastTouchData.time = new Date;
                    break;

                  case "touchmove":
                  case "MSPointerMove":
                    d = [ "mousemove" ];
                    break;

                  case "touchend":
                  case "MSPointerUp":
                    var f = this._lastTouchData && this._lastTouchData.time ? new Date - this._lastTouchData.time : 0;
                    d = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > f ? [ "mouseup", "click" ] : [ "mouseup" ];
                    break;

                  default:
                    return;
                }
                if (!(c && 1 < c.length)) {
                    (e = Na(b)).time = new Date;
                    try {
                        var l = e.y - this._lastTouchData.y;
                        f = e.time - this._lastTouchData.time;
                        (1 < Math.abs(l) && this._lastTouchData.scroll || 5 < Math.abs(l) && 250 > f) && (this._lastTouchData.scroll = !0);
                    } catch (u) {}
                    if (this._lastTouchEventType = a.type, this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), 
                    this.isDrag = !1; else for (c = 0; c < d.length; c++) e = d[c], (l = document.createEvent("MouseEvent")).initMouseEvent(e, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null), 
                    b.target.dispatchEvent(l), (!s(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < f || "click" === e) && (a.preventManipulation && a.preventManipulation(), 
                    a.preventDefault && a.cancelable && a.preventDefault());
                }
            }
        }, m.prototype._dispatchRangeEvent = function(a, d) {
            var c = {
                chart: this
            };
            c.type = a, c.trigger = d;
            var b = [];
            this.axisX && 0 < this.axisX.length && b.push("axisX"), this.axisX2 && 0 < this.axisX2.length && b.push("axisX2"), 
            this.axisY && 0 < this.axisY.length && b.push("axisY"), this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
            for (var e = 0; e < b.length; e++) if (s(c[b[e]]) && (c[b[e]] = []), "axisY" === b[e]) for (var f = 0; f < this.axisY.length; f++) c[b[e]].push({
                viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum,
                viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum
            }); else if ("axisY2" === b[e]) for (f = 0; f < this.axisY2.length; f++) c[b[e]].push({
                viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum,
                viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum
            }); else if ("axisX" === b[e]) for (f = 0; f < this.axisX.length; f++) c[b[e]].push({
                viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum,
                viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum
            }); else if ("axisX2" === b[e]) for (f = 0; f < this.axisX2.length; f++) c[b[e]].push({
                viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum,
                viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum
            });
            this.dispatchEvent(a, c, this);
        }, m.prototype._mouseEventHandler = function(a) {
            void 0 === a.target && a.srcElement && (a.target = a.srcElement);
            var b, e, d = Na(a), c = a.type;
            if (a.which ? e = 3 == a.which : a.button && (e = 2 == a.button), m.capturedEventParam && (b = m.capturedEventParam, 
            "mouseup" === c && (m.capturedEventParam = null, b.chart.overlaidCanvas.releaseCapture ? b.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", b.chart._mouseEventHandler, !1)), 
            b.hasOwnProperty(c) && ("mouseup" !== c || b.chart.overlaidCanvas.releaseCapture ? a.target !== b.chart.overlaidCanvas && v || b[c].call(b.context, d.x, d.y) : a.target !== b.chart.overlaidCanvas && (b.chart.isDrag = !1))), 
            this.interactivityEnabled) if (this._ignoreNextEvent) this._ignoreNextEvent = !1; else if (a.preventManipulation && a.preventManipulation(), 
            a.preventDefault && a.preventDefault(), Ga && window.console && (window.console.log(c + " --\x3e x: " + d.x + "; y:" + d.y), 
            e && window.console.log(a.which), "mouseup" === c && window.console.log("mouseup")), 
            !e) {
                if (!m.capturedEventParam && this._events) {
                    for (var f = 0; f < this._events.length; f++) if (this._events[f].hasOwnProperty(c)) {
                        if (e = (b = this._events[f]).bounds, d.x >= e.x1 && d.x <= e.x2 && d.y >= e.y1 && d.y <= e.y2) {
                            b[c].call(b.context, d.x, d.y), "mousedown" === c && !0 === b.capture ? (m.capturedEventParam = b, 
                            this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === c && (b.chart.overlaidCanvas.releaseCapture ? b.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                            break;
                        }
                        b = null;
                    }
                    a.target.style.cursor = b && b.cursor ? b.cursor : this._defaultCursor;
                }
                if (c = this.plotArea, d.x < c.x1 || d.x > c.x2 || d.y < c.y1 || d.y > c.y2) if (this.toolTip && this.toolTip.enabled) {
                    for (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", {
                        chart: this,
                        toolTip: this.toolTip
                    }, this.toolTip), f = 0; f < this.axisX.length; f++) this.axisX[f].crosshair && this.axisX[f].crosshair.enabled && this.axisX[f].crosshair.dispatchEvent("hidden", {
                        chart: this,
                        axis: this.axisX[f].options
                    }, this.axisX[f].crosshair);
                    for (f = 0; f < this.axisX2.length; f++) this.axisX2[f].crosshair && this.axisX2[f].crosshair.enabled && this.axisX2[f].crosshair.dispatchEvent("hidden", {
                        chart: this,
                        axis: this.axisX2[f].options
                    }, this.axisX2[f].crosshair);
                    for (f = 0; f < this.axisY.length; f++) this.axisY[f].crosshair && this.axisY[f].crosshair.enabled && this.axisY[f].crosshair.dispatchEvent("hidden", {
                        chart: this,
                        axis: this.axisY[f].options
                    }, this.axisY[f].crosshair);
                    for (f = 0; f < this.axisY2.length; f++) this.axisY2[f].crosshair && this.axisY2[f].crosshair.enabled && this.axisY2[f].crosshair.dispatchEvent("hidden", {
                        chart: this,
                        axis: this.axisY2[f].options
                    }, this.axisY2[f].crosshair);
                } else this.resetOverlayedCanvas();
                this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a);
            }
        }, m.prototype._plotAreaMouseDown = function(a, d) {
            this.isDrag = !0, this.dragStartPoint = {
                x: a,
                y: d
            };
        }, m.prototype._plotAreaMouseUp = function(a, d) {
            if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
                var c = d - this.dragStartPoint.y, b = a - this.dragStartPoint.x, e = 0 <= this.zoomType.indexOf("x"), f = 0 <= this.zoomType.indexOf("y"), l = !1;
                if (this.resetOverlayedCanvas(), "xySwapped" === this.plotInfo.axisPlacement) {
                    var u = f;
                    f = e, e = u;
                }
                if (this.panEnabled || this.zoomEnabled) {
                    if (this.panEnabled) for (e = f = 0; e < this._axes.length; e++) (c = this._axes[e]).logarithmic ? c.viewportMinimum < c.minimum ? (f = c.minimum / c.viewportMinimum, 
                    c.sessionVariables.newViewportMinimum = c.viewportMinimum * f, c.sessionVariables.newViewportMaximum = c.viewportMaximum * f, 
                    l = !0) : c.viewportMaximum > c.maximum && (f = c.viewportMaximum / c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum / f, 
                    c.sessionVariables.newViewportMaximum = c.viewportMaximum / f, l = !0) : c.viewportMinimum < c.minimum ? (f = c.minimum - c.viewportMinimum, 
                    c.sessionVariables.newViewportMinimum = c.viewportMinimum + f, c.sessionVariables.newViewportMaximum = c.viewportMaximum + f, 
                    l = !0) : c.viewportMaximum > c.maximum && (f = c.viewportMaximum - c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum - f, 
                    c.sessionVariables.newViewportMaximum = c.viewportMaximum - f, l = !0); else if ((!e || 2 < Math.abs(b)) && (!f || 2 < Math.abs(c)) && this.zoomEnabled) {
                        if (!this.dragStartPoint) return;
                        c = e ? this.dragStartPoint.x : this.plotArea.x1, b = f ? this.dragStartPoint.y : this.plotArea.y1, 
                        e = e ? a : this.plotArea.x2, f = f ? d : this.plotArea.y2, 2 < Math.abs(c - e) && 2 < Math.abs(b - f) && this._zoomPanToSelectedRegion(c, b, e, f) && (l = !0);
                    }
                    l && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), 
                    this.stockChart && this.stockChart.navigator && this.stockChart.navigator.enabled && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = {
                        stockChart: this.stockChart,
                        source: "chart",
                        index: this.stockChart.charts.indexOf(this),
                        minimum: this.stockChart.sessionVariables._axisXMin,
                        maximum: this.stockChart.sessionVariables._axisXMax
                    }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)), 
                    this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && this.stockChart.navigator && this.stockChart.navigator.enabled && (this.stockChart._rangeEventParameter.type = "rangeChanged", 
                    this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart)), 
                    l && this.zoomEnabled && "none" === this._zoomButton.style.display && (Ka(this._zoomButton, this._resetButton), 
                    ua(this, this._zoomButton, "pan"), ua(this, this._resetButton, "reset")));
                }
            }
            if (this.isDrag = !1, "none" !== this.plotInfo.axisPlacement) {
                if (this.resetOverlayedCanvas(), this.axisX && 0 < this.axisX.length) for (l = 0; l < this.axisX.length; l++) this.axisX[l].crosshair && this.axisX[l].crosshair.enabled && this.axisX[l].renderCrosshair(a, d);
                if (this.axisX2 && 0 < this.axisX2.length) for (l = 0; l < this.axisX2.length; l++) this.axisX2[l].crosshair && this.axisX2[l].crosshair.enabled && this.axisX2[l].renderCrosshair(a, d);
                if (this.axisY && 0 < this.axisY.length) for (l = 0; l < this.axisY.length; l++) this.axisY[l].crosshair && this.axisY[l].crosshair.enabled && this.axisY[l].renderCrosshair(a, d);
                if (this.axisY2 && 0 < this.axisY2.length) for (l = 0; l < this.axisY2.length; l++) this.axisY2[l].crosshair && this.axisY2[l].crosshair.enabled && this.axisY2[l].renderCrosshair(a, d);
            }
        }, m.prototype._plotAreaMouseMove = function(a, d) {
            if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
                var c = 0, b = 0, e = c = null, f = (e = 0 <= this.zoomType.indexOf("x"), 0 <= this.zoomType.indexOf("y")), l = this;
                if ("xySwapped" === this.plotInfo.axisPlacement && (c = f, f = e, e = c), c = this.dragStartPoint.x - a, 
                b = this.dragStartPoint.y - d, 2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled) ? (this.toolTip.hide(), 
                this.toolTip.dispatchEvent("hidden", {
                    chart: this,
                    toolTip: this.toolTip
                }, this.toolTip)) : this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, d), 
                (!e || 2 < Math.abs(c) || !f || 2 < Math.abs(b)) && (this.panEnabled || this.zoomEnabled)) if (this.panEnabled) e = {
                    x1: e ? this.plotArea.x1 + c : this.plotArea.x1,
                    y1: f ? this.plotArea.y1 + b : this.plotArea.y1,
                    x2: e ? this.plotArea.x2 + c : this.plotArea.x2,
                    y2: f ? this.plotArea.y2 + b : this.plotArea.y2
                }, clearTimeout(l._panTimerId), l._panTimerId = setTimeout(function(b, c, e, f) {
                    return function() {
                        l._zoomPanToSelectedRegion(b, c, e, f, !0) && (l._dispatchRangeEvent("rangeChanging", "pan"), 
                        l.stockChart && l.stockChart.navigator && l.stockChart.navigator.enabled && (l.stockChart._rangeEventParameter.type = "rangeChanging", 
                        l.stockChart.dispatchEvent("rangeChanging", l.stockChart._rangeEventParameter, l.stockChart)), 
                        l.render(), l._dispatchRangeEvent("rangeChanged", "pan"), l.stockChart && l.stockChart.navigator && l.stockChart.navigator.enabled && (l.stockChart._rangeEventParameter.type = "rangeChanged", 
                        l.stockChart.dispatchEvent("rangeChanged", l.stockChart._rangeEventParameter, l.stockChart)), 
                        l.dragStartPoint.x = a, l.dragStartPoint.y = d);
                    };
                }(e.x1, e.y1, e.x2, e.y2), 0); else if (this.zoomEnabled) {
                    this.resetOverlayedCanvas(), c = this.overlaidCanvasCtx.globalAlpha, this.overlaidCanvasCtx.fillStyle = "#A89896";
                    b = e ? this.dragStartPoint.x : this.plotArea.x1;
                    var u = f ? this.dragStartPoint.y : this.plotArea.y1, A = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1, k = f ? d - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                    this.validateRegion(b, u, e ? a : this.plotArea.x2 - this.plotArea.x1, f ? d : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), 
                    this.overlaidCanvasCtx.fillStyle = "#99B2B5"), this.overlaidCanvasCtx.globalAlpha = .7, 
                    this.overlaidCanvasCtx.fillRect(b, u, A, k), this.overlaidCanvasCtx.globalAlpha = c;
                }
            } else if (this.toolTip.mouseMoveHandler(a, d), "none" !== this.plotInfo.axisPlacement) {
                if (this.axisX && 0 < this.axisX.length) for (e = 0; e < this.axisX.length; e++) this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, d);
                if (this.axisX2 && 0 < this.axisX2.length) for (e = 0; e < this.axisX2.length; e++) this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, d);
                if (this.axisY && 0 < this.axisY.length) for (e = 0; e < this.axisY.length; e++) this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a, d);
                if (this.axisY2 && 0 < this.axisY2.length) for (e = 0; e < this.axisY2.length; e++) this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(a, d);
            }
        }, m.prototype._zoomPanToSelectedRegion = function(a, d, c, b, e) {
            if (d = (a = this.validateRegion(a, d, c, b, e)).axesWithValidRange, c = a.axesRanges, 
            a.isValid) for (b = 0; b < d.length; b++) e = c[b], d[b].setViewPortRange(e.val1, e.val2), 
            this.syncCharts && "y" != this.zoomType && this.syncCharts(e.val1, e.val2), this.stockChart && (this.stockChart._rangeEventParameter = {
                stockChart: this.stockChart,
                source: "chart",
                index: this.stockChart.charts.indexOf(this),
                minimum: e.val1,
                maximum: e.val2
            });
            return a.isValid;
        }, m.prototype.validateRegion = function(a, d, c, b, e) {
            e = e || !1;
            for (var f = 0 <= this.zoomType.indexOf("x"), l = 0 <= this.zoomType.indexOf("y"), u = !1, A = [], k = [], n = [], p = 0; p < this._axes.length; p++) ("axisX" === this._axes[p].type && f || "axisY" === this._axes[p].type && l) && k.push(this._axes[p]);
            for (l = 0; l < k.length; l++) {
                f = !1;
                if ((q = (p = k[l]).convertPixelToValue({
                    x: a,
                    y: d
                })) > (g = p.convertPixelToValue({
                    x: c,
                    y: b
                }))) var r = g, g = q, q = r;
                if (p.scaleBreaks) for (r = 0; !f && r < p.scaleBreaks._appliedBreaks.length; r++) f = p.scaleBreaks._appliedBreaks[r].startValue <= q && p.scaleBreaks._appliedBreaks[r].endValue >= g;
                if (isFinite(p.dataInfo.minDiff)) if (r = p.getApparentDifference(q, g, null, !0), 
                f || !(this.panEnabled && p.scaleBreaks && p.scaleBreaks._appliedBreaks.length) && (p.logarithmic && r < Math.pow(p.dataInfo.minDiff, 3) || !p.logarithmic && r < 3 * Math.abs(p.dataInfo.minDiff)) || q < p.minimum || g > p.maximum) {
                    if (!e) {
                        u = !1;
                        break;
                    }
                } else A.push(p), n.push({
                    val1: q,
                    val2: g
                }), u = !0;
            }
            return {
                isValid: u,
                axesWithValidRange: A,
                axesRanges: n
            };
        }, m.prototype.preparePlotArea = function() {
            var a = this.plotArea;
            if (!v && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1), (this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
                var d = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
                if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
                    var c = this.axisY[0];
                    a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1, a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1, 
                    a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2, a.y2 = d.y2 > d.y1 ? d.y2 : c.lineCoordinates.y2, 
                    a.width = a.x2 - a.x1, a.height = a.y2 - a.y1;
                }
                this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (c = this.axisY2[0], 
                a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1, a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1, 
                a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2, a.y2 = d.y2 > d.y1 ? d.y2 : c.lineCoordinates.y2, 
                a.width = a.x2 - a.x1, a.height = a.y2 - a.y1);
            } else d = this.layoutManager.getFreeSpace(), a.x1 = d.x1, a.x2 = d.x2, a.y1 = d.y1, 
            a.y2 = d.y2, a.width = d.width, a.height = d.height;
            v || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", 
            a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1)), 
            a.layoutManager = new Ca(a.x1, a.y1, a.x2, a.y2, 2);
        }, m.prototype.renderIndexLabels = function(a) {
            var d = a || this.plotArea.ctx, c = this.plotArea, b = 0, e = 0, f = 0, l = f = e = 0, u = 0, A = b = 0, k = 0;
            for (a = 0; a < this._indexLabels.length; a++) {
                var q, g, n = this._indexLabels[a], p = n.chartType.toLowerCase(), r = (l = ka("indexLabelFontColor", n.dataPoint, n.dataSeries), 
                ka("indexLabelFontSize", n.dataPoint, n.dataSeries)), h = (u = ka("indexLabelFontFamily", n.dataPoint, n.dataSeries), 
                A = ka("indexLabelFontStyle", n.dataPoint, n.dataSeries), k = ka("indexLabelFontWeight", n.dataPoint, n.dataSeries), 
                ka("indexLabelBackgroundColor", n.dataPoint, n.dataSeries));
                q = ka("indexLabelMaxWidth", n.dataPoint, n.dataSeries), g = ka("indexLabelWrap", n.dataPoint, n.dataSeries);
                var m = ka("indexLabelLineDashType", n.dataPoint, n.dataSeries), t = ka("indexLabelLineColor", n.dataPoint, n.dataSeries), x = s(n.dataPoint.indexLabelLineThickness) ? s(n.dataSeries.options.indexLabelLineThickness) ? 0 : n.dataSeries.options.indexLabelLineThickness : n.dataPoint.indexLabelLineThickness, z = (b = 0 < x ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0, 
                {
                    percent: null,
                    total: null
                }), E = null;
                (0 <= n.dataSeries.type.indexOf("stacked") || "pie" === n.dataSeries.type || "doughnut" === n.dataSeries.type) && (z = this.getPercentAndTotal(n.dataSeries, n.dataPoint)), 
                (n.dataSeries.indexLabelFormatter || n.dataPoint.indexLabelFormatter) && (E = {
                    chart: this,
                    dataSeries: n.dataSeries,
                    dataPoint: n.dataPoint,
                    index: n.indexKeyword,
                    total: z.total,
                    percent: z.percent
                });
                var C = n.dataPoint.indexLabelFormatter ? n.dataPoint.indexLabelFormatter(E) : n.dataPoint.indexLabel ? this.replaceKeywordsWithValue(n.dataPoint.indexLabel, n.dataPoint, n.dataSeries, null, n.indexKeyword) : n.dataSeries.indexLabelFormatter ? n.dataSeries.indexLabelFormatter(E) : n.dataSeries.indexLabel ? this.replaceKeywordsWithValue(n.dataSeries.indexLabel, n.dataPoint, n.dataSeries, null, n.indexKeyword) : null;
                if (null !== C && "" !== C) {
                    z = ka("indexLabelPlacement", n.dataPoint, n.dataSeries), E = ka("indexLabelOrientation", n.dataPoint, n.dataSeries);
                    var B = n.direction, w = (e = n.dataSeries.axisX, f = n.dataSeries.axisY, !1);
                    if ((h = new ia(d, {
                        x: 0,
                        y: 0,
                        maxWidth: q || .5 * this.width,
                        maxHeight: g ? 5 * r : 1.5 * r,
                        angle: "horizontal" === E ? 0 : -90,
                        text: C,
                        padding: 0,
                        backgroundColor: h,
                        horizontalAlign: "left",
                        fontSize: r,
                        fontFamily: u,
                        fontWeight: k,
                        fontColor: l,
                        fontStyle: A,
                        textBaseline: "middle"
                    })).measureText(), n.dataSeries.indexLabelMaxWidth = h.maxWidth, "stackedarea100" === p) {
                        if (n.point.x < c.x1 || n.point.x > c.x2 || n.point.y < c.y1 - 1 || n.point.y > c.y2 + 1) continue;
                    } else if ("rangearea" === p || "rangesplinearea" === p) {
                        if (n.dataPoint.x < e.viewportMinimum || n.dataPoint.x > e.viewportMaximum || Math.max.apply(null, n.dataPoint.y) < f.viewportMinimum || Math.min.apply(null, n.dataPoint.y) > f.viewportMaximum) continue;
                    } else if (0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("bubble") || 0 <= p.indexOf("scatter")) {
                        if (n.dataPoint.x < e.viewportMinimum || n.dataPoint.x > e.viewportMaximum || n.dataPoint.y < f.viewportMinimum || n.dataPoint.y > f.viewportMaximum) continue;
                    } else if (0 <= p.indexOf("column") || "waterfall" === p || "error" === p && !n.axisSwapped) {
                        if (n.dataPoint.x < e.viewportMinimum || n.dataPoint.x > e.viewportMaximum || n.bounds.y1 > c.y2 || n.bounds.y2 < c.y1) continue;
                    } else if (0 <= p.indexOf("bar") || "error" === p) {
                        if (n.dataPoint.x < e.viewportMinimum || n.dataPoint.x > e.viewportMaximum || n.bounds.x1 > c.x2 || n.bounds.x2 < c.x1) continue;
                    } else if ("candlestick" === p || "ohlc" === p) {
                        if (n.dataPoint.x < e.viewportMinimum || n.dataPoint.x > e.viewportMaximum || Math.max.apply(null, n.dataPoint.y) < f.viewportMinimum || Math.min.apply(null, n.dataPoint.y) > f.viewportMaximum) continue;
                    } else if (n.dataPoint.x < e.viewportMinimum || n.dataPoint.x > e.viewportMaximum) continue;
                    l = u = 2, "horizontal" === E ? (A = h.width, k = h.height) : (k = h.width, A = h.height), 
                    "normal" === this.plotInfo.axisPlacement ? (0 <= p.indexOf("line") || 0 <= p.indexOf("area") ? (z = "auto", 
                    u = 4) : 0 <= p.indexOf("stacked") ? "auto" === z && (z = "inside") : "bubble" !== p && "scatter" !== p || (z = "inside"), 
                    q = n.point.x - ("horizontal" === E ? A / 2 : A / 2 - r / 2), "inside" !== z ? (e = c.y1, 
                    f = c.y2, 0 < B ? (g = n.point.y + ("horizontal" === E ? r / 2 : 0) - k - u - b) < e && (w = (g = "auto" === z ? Math.max(n.point.y, e) + r / 2 + u : e + r / 2 + u) + k > n.point.y) : (g = n.point.y + r / 2 + u + b) > f - k && (w = (g = "auto" === z ? Math.min(n.point.y, f) + r / 2 - k - u : f + r / 2 - k) < n.point.y)) : (e = Math.max(n.bounds.y1, c.y1), 
                    f = Math.min(n.bounds.y2, c.y2 - k + r / 2), b = 0 <= p.indexOf("range") || "error" === p ? 0 < B ? Math.max(n.bounds.y1, c.y1) + r / 2 + u : Math.min(n.bounds.y2, c.y2) + r / 2 - k + u : (Math.max(n.bounds.y1, c.y1) + Math.min(n.bounds.y2, c.y2)) / 2 - k / 2 + r / 2 + ("horizontal" === E ? u : 0), 
                    0 < B ? (g = Math.max(n.point.y, b)) < e && ("bubble" === p || "scatter" === p) && (g = Math.max(n.point.y - k - u, c.y1 + u)) : (g = Math.min(n.point.y, b)) > f - k - u && ("bubble" === p || "scatter" === p) && (g = Math.min(n.point.y + u, c.y2 - k - u)), 
                    g = Math.min(g, f))) : (0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("scatter") ? (z = "auto", 
                    l = 4) : 0 <= p.indexOf("stacked") ? "auto" === z && (z = "inside") : "bubble" === p && (z = "inside"), 
                    g = n.point.y + r / 2 - k / 2 + u, "inside" !== z ? (e = c.x1, f = c.x2, 0 > B ? (q = n.point.x - ("horizontal" === E ? A : A - r / 2) - l - b) < e && (w = (q = "auto" === z ? Math.max(n.point.x, e) + l : e + l) + A > n.point.x) : (q = n.point.x + ("horizontal" === E ? 0 : r / 2) + l + b) > f - A - l - b && (w = (q = "auto" === z ? Math.min(n.point.x, f) - ("horizontal" === E ? A : A / 2) - l : f - A - l) < n.point.x)) : (e = Math.max(n.bounds.x1, c.x1), 
                    Math.min(n.bounds.x2, c.x2), b = 0 <= p.indexOf("range") || "error" === p ? 0 > B ? Math.max(n.bounds.x1, c.x1) + r / 2 + l : Math.min(n.bounds.x2, c.x2) - A / 2 - l + ("horizontal" === E ? 0 : r / 2) : (Math.max(n.bounds.x1, c.x1) + Math.min(n.bounds.x2, c.x2)) / 2 + ("horizontal" === E ? 0 : r / 2), 
                    q = 0 > B ? Math.max(n.point.x, b) - ("horizontal" === E ? A / 2 : 0) : Math.min(n.point.x, b) - A / 2, 
                    q = Math.max(q, e))), "vertical" === E && (g += k - r / 2), h.x = q, h.y = g, h.render(!0), 
                    x && "inside" !== z && (0 > p.indexOf("bar") && ("error" !== p || !n.axisSwapped) && n.point.x > c.x1 && n.point.x < c.x2 || !w) && (0 > p.indexOf("column") && ("error" !== p || n.axisSwapped) && n.point.y > c.y1 && n.point.y < c.y2 || !w) && (d.lineWidth = x, 
                    d.strokeStyle = t || "gray", d.setLineDash && d.setLineDash(N(m, x)), d.beginPath(), 
                    d.moveTo(n.point.x, n.point.y), 0 <= p.indexOf("bar") || "error" === p && n.axisSwapped ? d.lineTo(q + (0 < n.direction ? -l : A + l) + ("vertical" === E ? -r / 2 : 0), g + ("vertical" === E ? -k / 2 : k / 2 - r / 2) - u) : 0 <= p.indexOf("column") || "error" === p && !n.axisSwapped ? d.lineTo(q + A / 2 - ("horizontal" === E ? 0 : r / 2), g + ("vertical" === E ? (g - k < n.point.y ? 0 : -k) + u : (g - r / 2 < n.point.y ? k : 0) - r / 2)) : d.lineTo(q + A / 2 - ("horizontal" === E ? 0 : r / 2), g + ("vertical" === E ? g - k < n.point.y ? 0 : -k : (g - r / 2 < n.point.y ? k : 0) - r / 2)), 
                    d.stroke());
                }
            }
            for (d = {
                source: d,
                dest: this.plotArea.ctx,
                animationCallback: L.fadeInAnimation,
                easingFunction: L.easing.easeInQuad,
                animationBase: 0,
                startTimePercent: .7
            }, a = 0; a < this._indexLabels.length; a++) h = ka("indexLabelBackgroundColor", (n = this._indexLabels[a]).dataPoint, n.dataSeries), 
            n.dataSeries.indexLabelBackgroundColor = s(h) ? v ? "transparent" : null : h;
            return d;
        }, m.prototype.renderLine = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this._eventManager.ghostCtx;
                c.save();
                var e = this.plotArea;
                c.beginPath(), c.rect(e.x1, e.y1, e.width, e.height), c.clip();
                for (var l, f = [], u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var A = a.dataSeriesIndexes[u], k = this.data[A];
                    c.lineWidth = k.lineThickness;
                    var n = k.dataPoints, p = "solid";
                    if (c.setLineDash) {
                        var q = N(k.nullDataLineDashType, k.lineThickness), g = N(p = k.lineDashType, k.lineThickness);
                        c.setLineDash(g);
                    }
                    var r = k.id;
                    this._eventManager.objectMap[r] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: A
                    }, r = Q(r), b.strokeStyle = r, b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    r = k._colorSet;
                    var h = r = k.lineColor = k.options.lineColor ? k.options.lineColor : r[0];
                    c.strokeStyle = r;
                    var x, s, m = !0, t = 0;
                    if (c.beginPath(), 0 < n.length) {
                        var E = !1;
                        for (t = 0; t < n.length; t++) if (!((x = n[t].x.getTime ? n[t].x.getTime() : n[t].x) < a.axisX.dataInfo.viewPortMin || x > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !E))) if ("number" != typeof n[t].y) 0 < t && !(k.connectNullData || E || m) && (c.stroke(), 
                        v && b.stroke()), E = !0; else {
                            x = a.axisX.convertValueToPixel(x), s = a.axisY.convertValueToPixel(n[t].y);
                            var C = k.dataPointIds[t];
                            if (this._eventManager.objectMap[C] = {
                                id: C,
                                objectType: "dataPoint",
                                dataSeriesIndex: A,
                                dataPointIndex: t,
                                x1: x,
                                y1: s
                            }, m || E ? (!m && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || p === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), 
                            c.beginPath(), c.moveTo(l.x, l.y), p = k.nullDataLineDashType, c.setLineDash(q)), 
                            c.lineTo(x, s), v && b.lineTo(x, s)) : (c.beginPath(), c.moveTo(x, s), v && (b.beginPath(), 
                            b.moveTo(x, s))), E = m = !1) : (c.lineTo(x, s), v && b.lineTo(x, s), 0 == t % 500 && (c.stroke(), 
                            c.beginPath(), c.moveTo(x, s), v && (b.stroke(), b.beginPath(), b.moveTo(x, s)))), 
                            l = {
                                x: x,
                                y: s
                            }, t < n.length - 1 && (h !== (n[t].lineColor || r) || p !== (n[t].lineDashType || k.lineDashType)) && (c.stroke(), 
                            c.beginPath(), c.moveTo(x, s), h = n[t].lineColor || r, c.strokeStyle = h, c.setLineDash && (n[t].lineDashType ? (p = n[t].lineDashType, 
                            c.setLineDash(N(p, k.lineThickness))) : (p = k.lineDashType, c.setLineDash(g)))), 
                            0 < n[t].markerSize || 0 < k.markerSize) {
                                var B = k.getMarkerProperties(t, x, s, c);
                                f.push(B), C = Q(C), v && f.push({
                                    x: x,
                                    y: s,
                                    ctx: b,
                                    type: B.type,
                                    size: B.size,
                                    color: C,
                                    borderColor: C,
                                    borderThickness: B.borderThickness
                                });
                            }
                            (n[t].indexLabel || k.indexLabel || n[t].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "line",
                                dataPoint: n[t],
                                dataSeries: k,
                                point: {
                                    x: x,
                                    y: s
                                },
                                direction: 0 > n[t].y === a.axisY.reversed ? 1 : -1,
                                color: r
                            });
                        }
                        c.stroke(), v && b.stroke();
                    }
                }
                return W.drawMarkers(f), v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath()), c.restore(), c.beginPath(), 
                {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                };
            }
        }, m.prototype.renderStepLine = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this._eventManager.ghostCtx;
                c.save();
                var e = this.plotArea;
                c.beginPath(), c.rect(e.x1, e.y1, e.width, e.height), c.clip();
                for (var l, f = [], u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var A = a.dataSeriesIndexes[u], k = this.data[A];
                    c.lineWidth = k.lineThickness;
                    var n = k.dataPoints, p = "solid";
                    if (c.setLineDash) {
                        var q = N(k.nullDataLineDashType, k.lineThickness), g = N(p = k.lineDashType, k.lineThickness);
                        c.setLineDash(g);
                    }
                    var r = k.id;
                    this._eventManager.objectMap[r] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: A
                    }, r = Q(r), b.strokeStyle = r, b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    r = k._colorSet;
                    var h = r = k.lineColor = k.options.lineColor ? k.options.lineColor : r[0];
                    c.strokeStyle = r;
                    var x, s, m = !0, t = 0;
                    if (c.beginPath(), 0 < n.length) {
                        var E = !1;
                        for (t = 0; t < n.length; t++) if (!((x = n[t].getTime ? n[t].x.getTime() : n[t].x) < a.axisX.dataInfo.viewPortMin || x > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !E))) if ("number" != typeof n[t].y) 0 < t && !(k.connectNullData || E || m) && (c.stroke(), 
                        v && b.stroke()), E = !0; else {
                            var C = s;
                            x = a.axisX.convertValueToPixel(x), s = a.axisY.convertValueToPixel(n[t].y);
                            var B = k.dataPointIds[t];
                            this._eventManager.objectMap[B] = {
                                id: B,
                                objectType: "dataPoint",
                                dataSeriesIndex: A,
                                dataPointIndex: t,
                                x1: x,
                                y1: s
                            }, m || E ? (!m && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || p === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), 
                            c.beginPath(), c.moveTo(l.x, l.y), p = k.nullDataLineDashType, c.setLineDash(q)), 
                            c.lineTo(x, C), c.lineTo(x, s), v && (b.lineTo(x, C), b.lineTo(x, s))) : (c.beginPath(), 
                            c.moveTo(x, s), v && (b.beginPath(), b.moveTo(x, s))), E = m = !1) : (c.lineTo(x, C), 
                            v && b.lineTo(x, C), c.lineTo(x, s), v && b.lineTo(x, s), 0 == t % 500 && (c.stroke(), 
                            c.beginPath(), c.moveTo(x, s), v && (b.stroke(), b.beginPath(), b.moveTo(x, s)))), 
                            l = {
                                x: x,
                                y: s
                            }, t < n.length - 1 && (h !== (n[t].lineColor || r) || p !== (n[t].lineDashType || k.lineDashType)) && (c.stroke(), 
                            c.beginPath(), c.moveTo(x, s), h = n[t].lineColor || r, c.strokeStyle = h, c.setLineDash && (n[t].lineDashType ? (p = n[t].lineDashType, 
                            c.setLineDash(N(p, k.lineThickness))) : (p = k.lineDashType, c.setLineDash(g)))), 
                            (0 < n[t].markerSize || 0 < k.markerSize) && (C = k.getMarkerProperties(t, x, s, c), 
                            f.push(C), B = Q(B), v && f.push({
                                x: x,
                                y: s,
                                ctx: b,
                                type: C.type,
                                size: C.size,
                                color: B,
                                borderColor: B,
                                borderThickness: C.borderThickness
                            })), (n[t].indexLabel || k.indexLabel || n[t].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stepLine",
                                dataPoint: n[t],
                                dataSeries: k,
                                point: {
                                    x: x,
                                    y: s
                                },
                                direction: 0 > n[t].y === a.axisY.reversed ? 1 : -1,
                                color: r
                            });
                        }
                        c.stroke(), v && b.stroke();
                    }
                }
                return W.drawMarkers(f), v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath()), c.restore(), c.beginPath(), 
                {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                };
            }
        }, m.prototype.renderSpline = function(a) {
            function d(a) {
                if (0 < (a = w(a, 2)).length) {
                    b.beginPath(), v && e.beginPath(), b.moveTo(a[0].x, a[0].y), a[0].newStrokeStyle && (b.strokeStyle = a[0].newStrokeStyle), 
                    a[0].newLineDashArray && b.setLineDash(a[0].newLineDashArray), v && e.moveTo(a[0].x, a[0].y);
                    for (var c = 0; c < a.length - 3; c += 3) b.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y), 
                    v && e.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y), 
                    (0 < c && 0 == c % 3e3 || a[c + 3].newStrokeStyle || a[c + 3].newLineDashArray) && (b.stroke(), 
                    b.beginPath(), b.moveTo(a[c + 3].x, a[c + 3].y), a[c + 3].newStrokeStyle && (b.strokeStyle = a[c + 3].newStrokeStyle), 
                    a[c + 3].newLineDashArray && b.setLineDash(a[c + 3].newLineDashArray), v && (e.stroke(), 
                    e.beginPath(), e.moveTo(a[c + 3].x, a[c + 3].y)));
                    b.stroke(), v && e.stroke();
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx;
                b.save();
                var f = this.plotArea;
                b.beginPath(), b.rect(f.x1, f.y1, f.width, f.height), b.clip();
                for (var l = [], u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var A = a.dataSeriesIndexes[u], k = this.data[A];
                    b.lineWidth = k.lineThickness;
                    var n = k.dataPoints, p = "solid";
                    if (b.setLineDash) {
                        var q = N(k.nullDataLineDashType, k.lineThickness), g = N(p = k.lineDashType, k.lineThickness);
                        b.setLineDash(g);
                    }
                    var r = k.id;
                    this._eventManager.objectMap[r] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: A
                    }, r = Q(r), e.strokeStyle = r, e.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    r = k._colorSet;
                    var h = r = k.lineColor = k.options.lineColor ? k.options.lineColor : r[0];
                    b.strokeStyle = r;
                    var t, x, m = 0, s = [];
                    if (b.beginPath(), 0 < n.length) for (x = !1, m = 0; m < n.length; m++) if (!((t = n[m].getTime ? n[m].x.getTime() : n[m].x) < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !x))) if ("number" != typeof n[m].y) 0 < m && !x && (k.connectNullData ? b.setLineDash && 0 < s.length && (k.options.nullDataLineDashType || !n[m - 1].lineDashType) && (s[s.length - 1].newLineDashArray = q, 
                    p = k.nullDataLineDashType) : (d(s), s = [])), x = !0; else {
                        t = a.axisX.convertValueToPixel(t), x = a.axisY.convertValueToPixel(n[m].y);
                        var E = k.dataPointIds[m];
                        if (this._eventManager.objectMap[E] = {
                            id: E,
                            objectType: "dataPoint",
                            dataSeriesIndex: A,
                            dataPointIndex: m,
                            x1: t,
                            y1: x
                        }, s[s.length] = {
                            x: t,
                            y: x
                        }, m < n.length - 1 && (h !== (n[m].lineColor || r) || p !== (n[m].lineDashType || k.lineDashType)) && (h = n[m].lineColor || r, 
                        s[s.length - 1].newStrokeStyle = h, b.setLineDash && (n[m].lineDashType ? (p = n[m].lineDashType, 
                        s[s.length - 1].newLineDashArray = N(p, k.lineThickness)) : (p = k.lineDashType, 
                        s[s.length - 1].newLineDashArray = g))), 0 < n[m].markerSize || 0 < k.markerSize) {
                            var C = k.getMarkerProperties(m, t, x, b);
                            l.push(C), E = Q(E), v && l.push({
                                x: t,
                                y: x,
                                ctx: e,
                                type: C.type,
                                size: C.size,
                                color: E,
                                borderColor: E,
                                borderThickness: C.borderThickness
                            });
                        }
                        (n[m].indexLabel || k.indexLabel || n[m].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                            chartType: "spline",
                            dataPoint: n[m],
                            dataSeries: k,
                            point: {
                                x: t,
                                y: x
                            },
                            direction: 0 > n[m].y === a.axisY.reversed ? 1 : -1,
                            color: r
                        }), x = !1;
                    }
                    d(s);
                }
                return W.drawMarkers(l), v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                b.clearRect(f.x1, f.y1, f.width, f.height), e.beginPath()), b.restore(), b.beginPath(), 
                {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                };
            }
        }, m.prototype.renderColumn = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var l, u, A, b = null, e = this.plotArea, f = 0, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), n = (f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, 
                this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(.15 * this.width, this.plotArea.width / a.plotType.totalDataSeries * .9) << 0), p = a.axisX.dataInfo.minDiff;
                for (isFinite(p) || (p = .3 * Math.abs(a.axisX.range)), p = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : e.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries * .9 << 0, 
                this.dataPointMaxWidth && f > n && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : 1 / 0, n)), 
                !this.dataPointMaxWidth && this.dataPointMinWidth && n < f && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -1 / 0, f)), 
                p < f && (p = f), p > n && (p = n), c.save(), v && this._eventManager.ghostCtx.save(), 
                c.beginPath(), c.rect(e.x1, e.y1, e.width, e.height), c.clip(), v && (this._eventManager.ghostCtx.beginPath(), 
                this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip()), 
                n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var q = a.dataSeriesIndexes[n], g = this.data[q], r = g.dataPoints;
                    if (0 < r.length) {
                        var h = !!(5 < p && g.bevelEnabled);
                        for (f = 0; f < r.length; f++) if (!((A = r[f].getTime ? r[f].x.getTime() : r[f].x) < a.axisX.dataInfo.viewPortMin || A > a.axisX.dataInfo.viewPortMax) && "number" == typeof r[f].y) {
                            l = a.axisX.convertValueToPixel(A), u = a.axisY.convertValueToPixel(r[f].y), l = a.axisX.reversed ? l + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + n) * p << 0 : l - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + n) * p << 0;
                            var t, m = a.axisX.reversed ? l - p << 0 : l + p << 0;
                            0 <= r[f].y ? t = k : (t = u, u = k), u > t && (b = u, u = t, t = b), b = r[f].color ? r[f].color : g._colorSet[f % g._colorSet.length], 
                            ca(c, l, u, m, t, b, 0, null, h && 0 <= r[f].y, 0 > r[f].y && h, !1, !1, g.fillOpacity), 
                            b = g.dataPointIds[f], this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: q,
                                dataPointIndex: f,
                                x1: l,
                                y1: u,
                                x2: m,
                                y2: t
                            }, b = Q(b), v && ca(this._eventManager.ghostCtx, l, u, m, t, b, 0, null, !1, !1, !1, !1), 
                            (r[f].indexLabel || g.indexLabel || r[f].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "column",
                                dataPoint: r[f],
                                dataSeries: g,
                                point: {
                                    x: l + (m - l) / 2,
                                    y: 0 > r[f].y === a.axisY.reversed ? u : t
                                },
                                direction: 0 > r[f].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: l,
                                    y1: Math.min(u, t),
                                    x2: m,
                                    y2: Math.max(u, t)
                                },
                                color: b
                            });
                        }
                    }
                }
                return v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore()), 
                c.restore(), {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.yScaleAnimation,
                    easingFunction: L.easing.easeOutQuart,
                    animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k
                };
            }
        }, m.prototype.renderStackedColumn = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var n, p, b = null, e = this.plotArea, f = [], l = [], u = [], A = [], k = 0, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0);
                k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : .15 * this.width << 0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) || (g = .3 * Math.abs(a.axisX.range)), g = this.options.dataPointWidth ? this.dataPointWidth : e.width * (a.axisX.logarithmic ? Math.log(g) / Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length * .9 << 0, 
                this.dataPointMaxWidth && k > n && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : 1 / 0, n)), 
                !this.dataPointMaxWidth && this.dataPointMinWidth && n < k && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -1 / 0, k)), 
                g < k && (g = k), g > n && (g = n), c.save(), v && this._eventManager.ghostCtx.save(), 
                c.beginPath(), c.rect(e.x1, e.y1, e.width, e.height), c.clip(), v && (this._eventManager.ghostCtx.beginPath(), 
                this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var h = a.dataSeriesIndexes[r], m = this.data[h], t = m.dataPoints;
                    if (0 < t.length) {
                        var x = !!(5 < g && m.bevelEnabled);
                        for (c.strokeStyle = "#4572A7 ", k = 0; k < t.length; k++) if (!((b = t[k].x.getTime ? t[k].x.getTime() : t[k].x) < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" == typeof t[k].y) {
                            var C, s = (n = a.axisX.convertValueToPixel(b)) - a.plotType.plotUnits.length * g / 2 + a.index * g << 0, E = s + g << 0;
                            if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[k].y) u[b] = t[k].y + (u[b] ? u[b] : 0), 
                            0 < u[b] && (p = a.axisY.convertValueToPixel(u[b]), C = void 0 !== f[b] ? f[b] : q, 
                            f[b] = p); else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[k].y) A[b] = t[k].y + (A[b] ? A[b] : 0), 
                            C = a.axisY.convertValueToPixel(A[b]), p = void 0 !== l[b] ? l[b] : q, l[b] = C; else if (p = a.axisY.convertValueToPixel(t[k].y), 
                            0 <= t[k].y) {
                                var B = void 0 !== f[b] ? f[b] : 0;
                                p -= B, C = q - B, f[b] = B + (C - p);
                            } else C = p + (B = l[b] ? l[b] : 0), p = q + B, l[b] = B + (C - p);
                            b = t[k].color ? t[k].color : m._colorSet[k % m._colorSet.length], ca(c, s, p, E, C, b, 0, null, x && 0 <= t[k].y, 0 > t[k].y && x, !1, !1, m.fillOpacity), 
                            b = m.dataPointIds[k], this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: h,
                                dataPointIndex: k,
                                x1: s,
                                y1: p,
                                x2: E,
                                y2: C
                            }, b = Q(b), v && ca(this._eventManager.ghostCtx, s, p, E, C, b, 0, null, !1, !1, !1, !1), 
                            (t[k].indexLabel || m.indexLabel || t[k].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedColumn",
                                dataPoint: t[k],
                                dataSeries: m,
                                point: {
                                    x: n,
                                    y: 0 <= t[k].y ? p : C
                                },
                                direction: 0 > t[k].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: s,
                                    y1: Math.min(p, C),
                                    x2: E,
                                    y2: Math.max(p, C)
                                },
                                color: b
                            });
                        }
                    }
                }
                return v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore()), 
                c.restore(), {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.yScaleAnimation,
                    easingFunction: L.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q
                };
            }
        }, m.prototype.renderStackedColumn100 = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var n, p, b = null, e = this.plotArea, f = [], l = [], u = [], A = [], k = 0, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0);
                k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : .15 * this.width << 0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) || (g = .3 * Math.abs(a.axisX.range)), g = this.options.dataPointWidth ? this.dataPointWidth : e.width * (a.axisX.logarithmic ? Math.log(g) / Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length * .9 << 0, 
                this.dataPointMaxWidth && k > n && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : 1 / 0, n)), 
                !this.dataPointMaxWidth && this.dataPointMinWidth && n < k && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -1 / 0, k)), 
                g < k && (g = k), g > n && (g = n), c.save(), v && this._eventManager.ghostCtx.save(), 
                c.beginPath(), c.rect(e.x1, e.y1, e.width, e.height), c.clip(), v && (this._eventManager.ghostCtx.beginPath(), 
                this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var h = a.dataSeriesIndexes[r], m = this.data[h], t = m.dataPoints;
                    if (0 < t.length) {
                        var x = !!(5 < g && m.bevelEnabled);
                        for (k = 0; k < t.length; k++) if (!((b = t[k].x.getTime ? t[k].x.getTime() : t[k].x) < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" == typeof t[k].y) {
                            n = a.axisX.convertValueToPixel(b), p = 0 !== a.dataPointYSums[b] ? t[k].y / a.dataPointYSums[b] * 100 : 0;
                            var C, s = n - a.plotType.plotUnits.length * g / 2 + a.index * g << 0, E = s + g << 0;
                            if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[k].y) {
                                if (u[b] = p + (void 0 !== u[b] ? u[b] : 0), 0 >= u[b]) continue;
                                p = a.axisY.convertValueToPixel(u[b]), C = f[b] ? f[b] : q, f[b] = p;
                            } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[k].y) A[b] = p + (void 0 !== A[b] ? A[b] : 0), 
                            C = a.axisY.convertValueToPixel(A[b]), p = l[b] ? l[b] : q, l[b] = C; else if (p = a.axisY.convertValueToPixel(p), 
                            0 <= t[k].y) {
                                var B = void 0 !== f[b] ? f[b] : 0;
                                p -= B, C = q - B, a.dataSeriesIndexes.length - 1 === r && 1 >= Math.abs(e.y1 - p) && (p = e.y1), 
                                f[b] = B + (C - p);
                            } else C = p + (B = void 0 !== l[b] ? l[b] : 0), p = q + B, a.dataSeriesIndexes.length - 1 === r && 1 >= Math.abs(e.y2 - C) && (C = e.y2), 
                            l[b] = B + (C - p);
                            b = t[k].color ? t[k].color : m._colorSet[k % m._colorSet.length], ca(c, s, p, E, C, b, 0, null, x && 0 <= t[k].y, 0 > t[k].y && x, !1, !1, m.fillOpacity), 
                            b = m.dataPointIds[k], this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: h,
                                dataPointIndex: k,
                                x1: s,
                                y1: p,
                                x2: E,
                                y2: C
                            }, b = Q(b), v && ca(this._eventManager.ghostCtx, s, p, E, C, b, 0, null, !1, !1, !1, !1), 
                            (t[k].indexLabel || m.indexLabel || t[k].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedColumn100",
                                dataPoint: t[k],
                                dataSeries: m,
                                point: {
                                    x: n,
                                    y: 0 <= t[k].y ? p : C
                                },
                                direction: 0 > t[k].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: s,
                                    y1: Math.min(p, C),
                                    x2: E,
                                    y2: Math.max(p, C)
                                },
                                color: b
                            });
                        }
                    }
                }
                return v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore()), 
                c.restore(), {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.yScaleAnimation,
                    easingFunction: L.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q
                };
            }
        }, m.prototype.renderBar = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var l, u, A, b = null, e = this.plotArea, f = 0, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), n = (f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, 
                this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(.15 * this.height, this.plotArea.height / a.plotType.totalDataSeries * .9) << 0), p = a.axisX.dataInfo.minDiff;
                for (isFinite(p) || (p = .3 * Math.abs(a.axisX.range)), p = this.options.dataPointWidth ? this.dataPointWidth : e.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries * .9 << 0, 
                this.dataPointMaxWidth && f > n && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : 1 / 0, n)), 
                !this.dataPointMaxWidth && this.dataPointMinWidth && n < f && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -1 / 0, f)), 
                p < f && (p = f), p > n && (p = n), c.save(), v && this._eventManager.ghostCtx.save(), 
                c.beginPath(), c.rect(e.x1, e.y1, e.width, e.height), c.clip(), v && (this._eventManager.ghostCtx.beginPath(), 
                this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip()), 
                n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var q = a.dataSeriesIndexes[n], g = this.data[q], r = g.dataPoints;
                    if (0 < r.length) {
                        var h = !!(5 < p && g.bevelEnabled);
                        for (c.strokeStyle = "#4572A7 ", f = 0; f < r.length; f++) if (!((A = r[f].getTime ? r[f].x.getTime() : r[f].x) < a.axisX.dataInfo.viewPortMin || A > a.axisX.dataInfo.viewPortMax) && "number" == typeof r[f].y) {
                            u = a.axisX.convertValueToPixel(A), l = a.axisY.convertValueToPixel(r[f].y), u = a.axisX.reversed ? u + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + n) * p << 0 : u - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + n) * p << 0;
                            var t, m = a.axisX.reversed ? u - p << 0 : u + p << 0;
                            0 <= r[f].y ? t = k : (t = l, l = k), b = r[f].color ? r[f].color : g._colorSet[f % g._colorSet.length], 
                            ca(c, t, u, l, m, b, 0, null, h, !1, !1, !1, g.fillOpacity), b = g.dataPointIds[f], 
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: q,
                                dataPointIndex: f,
                                x1: t,
                                y1: u,
                                x2: l,
                                y2: m
                            }, b = Q(b), v && ca(this._eventManager.ghostCtx, t, u, l, m, b, 0, null, !1, !1, !1, !1), 
                            (r[f].indexLabel || g.indexLabel || r[f].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "bar",
                                dataPoint: r[f],
                                dataSeries: g,
                                point: {
                                    x: 0 <= r[f].y ? l : t,
                                    y: u + (m - u) / 2
                                },
                                direction: 0 > r[f].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: Math.min(t, l),
                                    y1: u,
                                    x2: Math.max(t, l),
                                    y2: m
                                },
                                color: b
                            });
                        }
                    }
                }
                return v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore()), 
                c.restore(), {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xScaleAnimation,
                    easingFunction: L.easing.easeOutQuart,
                    animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k
                };
            }
        }, m.prototype.renderStackedBar = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var n, p, b = null, e = this.plotArea, f = [], l = [], u = [], A = [], k = 0, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0);
                k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : .15 * this.height << 0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) || (g = .3 * Math.abs(a.axisX.range)), g = this.options.dataPointWidth ? this.dataPointWidth : e.height * (a.axisX.logarithmic ? Math.log(g) / Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length * .9 << 0, 
                this.dataPointMaxWidth && k > p && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : 1 / 0, p)), 
                !this.dataPointMaxWidth && this.dataPointMinWidth && p < k && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -1 / 0, k)), 
                g < k && (g = k), g > p && (g = p), c.save(), v && this._eventManager.ghostCtx.save(), 
                c.beginPath(), c.rect(e.x1, e.y1, e.width, e.height), c.clip(), v && (this._eventManager.ghostCtx.beginPath(), 
                this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var h = a.dataSeriesIndexes[r], m = this.data[h], t = m.dataPoints;
                    if (0 < t.length) {
                        var x = !!(5 < g && m.bevelEnabled);
                        for (c.strokeStyle = "#4572A7 ", k = 0; k < t.length; k++) if (!((b = t[k].x.getTime ? t[k].x.getTime() : t[k].x) < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" == typeof t[k].y) {
                            var C, s = (p = a.axisX.convertValueToPixel(b)) - a.plotType.plotUnits.length * g / 2 + a.index * g << 0, E = s + g << 0;
                            if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[k].y) u[b] = t[k].y + (u[b] ? u[b] : 0), 
                            0 < u[b] && (C = f[b] ? f[b] : q, f[b] = n = a.axisY.convertValueToPixel(u[b])); else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[k].y) A[b] = t[k].y + (A[b] ? A[b] : 0), 
                            n = l[b] ? l[b] : q, l[b] = C = a.axisY.convertValueToPixel(A[b]); else if (n = a.axisY.convertValueToPixel(t[k].y), 
                            0 <= t[k].y) {
                                var B = f[b] ? f[b] : 0;
                                C = q + B, n += B, f[b] = B + (n - C);
                            } else C = n - (B = l[b] ? l[b] : 0), n = q - B, l[b] = B + (n - C);
                            b = t[k].color ? t[k].color : m._colorSet[k % m._colorSet.length], ca(c, C, s, n, E, b, 0, null, x, !1, !1, !1, m.fillOpacity), 
                            b = m.dataPointIds[k], this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: h,
                                dataPointIndex: k,
                                x1: C,
                                y1: s,
                                x2: n,
                                y2: E
                            }, b = Q(b), v && ca(this._eventManager.ghostCtx, C, s, n, E, b, 0, null, !1, !1, !1, !1), 
                            (t[k].indexLabel || m.indexLabel || t[k].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedBar",
                                dataPoint: t[k],
                                dataSeries: m,
                                point: {
                                    x: 0 <= t[k].y ? n : C,
                                    y: p
                                },
                                direction: 0 > t[k].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: Math.min(C, n),
                                    y1: s,
                                    x2: Math.max(C, n),
                                    y2: E
                                },
                                color: b
                            });
                        }
                    }
                }
                return v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore()), 
                c.restore(), {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xScaleAnimation,
                    easingFunction: L.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
                };
            }
        }, m.prototype.renderStackedBar100 = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var n, p, b = null, e = this.plotArea, f = [], l = [], u = [], A = [], k = 0, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0);
                k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : .15 * this.height << 0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) || (g = .3 * Math.abs(a.axisX.range)), g = this.options.dataPointWidth ? this.dataPointWidth : e.height * (a.axisX.logarithmic ? Math.log(g) / Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length * .9 << 0, 
                this.dataPointMaxWidth && k > p && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : 1 / 0, p)), 
                !this.dataPointMaxWidth && this.dataPointMinWidth && p < k && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -1 / 0, k)), 
                g < k && (g = k), g > p && (g = p), c.save(), v && this._eventManager.ghostCtx.save(), 
                c.beginPath(), c.rect(e.x1, e.y1, e.width, e.height), c.clip(), v && (this._eventManager.ghostCtx.beginPath(), 
                this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var h = a.dataSeriesIndexes[r], m = this.data[h], t = m.dataPoints;
                    if (0 < t.length) {
                        var x = !!(5 < g && m.bevelEnabled);
                        for (c.strokeStyle = "#4572A7 ", k = 0; k < t.length; k++) if (!((b = t[k].x.getTime ? t[k].x.getTime() : t[k].x) < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" == typeof t[k].y) {
                            var s;
                            p = a.axisX.convertValueToPixel(b), s = 0 !== a.dataPointYSums[b] ? t[k].y / a.dataPointYSums[b] * 100 : 0;
                            var E = p - a.plotType.plotUnits.length * g / 2 + a.index * g << 0, C = E + g << 0;
                            if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[k].y) {
                                if (u[b] = s + (u[b] ? u[b] : 0), 0 >= u[b]) continue;
                                s = f[b] ? f[b] : q, f[b] = n = a.axisY.convertValueToPixel(u[b]);
                            } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[k].y) A[b] = s + (A[b] ? A[b] : 0), 
                            n = l[b] ? l[b] : q, l[b] = s = a.axisY.convertValueToPixel(A[b]); else if (n = a.axisY.convertValueToPixel(s), 
                            0 <= t[k].y) {
                                var B = f[b] ? f[b] : 0;
                                s = q + B, n += B, a.dataSeriesIndexes.length - 1 === r && 1 >= Math.abs(e.x2 - n) && (n = e.x2), 
                                f[b] = B + (n - s);
                            } else s = n - (B = l[b] ? l[b] : 0), n = q - B, a.dataSeriesIndexes.length - 1 === r && 1 >= Math.abs(e.x1 - s) && (s = e.x1), 
                            l[b] = B + (n - s);
                            b = t[k].color ? t[k].color : m._colorSet[k % m._colorSet.length], ca(c, s, E, n, C, b, 0, null, x, !1, !1, !1, m.fillOpacity), 
                            b = m.dataPointIds[k], this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: h,
                                dataPointIndex: k,
                                x1: s,
                                y1: E,
                                x2: n,
                                y2: C
                            }, b = Q(b), v && ca(this._eventManager.ghostCtx, s, E, n, C, b, 0, null, !1, !1, !1, !1), 
                            (t[k].indexLabel || m.indexLabel || t[k].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedBar100",
                                dataPoint: t[k],
                                dataSeries: m,
                                point: {
                                    x: 0 <= t[k].y ? n : s,
                                    y: p
                                },
                                direction: 0 > t[k].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: Math.min(s, n),
                                    y1: E,
                                    x2: Math.max(s, n),
                                    y2: C
                                },
                                color: b
                            });
                        }
                    }
                }
                return v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore()), 
                c.restore(), {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xScaleAnimation,
                    easingFunction: L.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
                };
            }
        }, m.prototype.renderArea = function(a) {
            var d, c;
            function b() {
                C && (0 < g.lineThickness && f.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? E = z : 0 > a.axisY.viewportMaximum ? E = u.y1 : 0 < a.axisY.viewportMinimum && (E = z), 
                f.lineTo(m, E), f.lineTo(C.x, E), f.closePath(), f.globalAlpha = g.fillOpacity, 
                f.fill(), f.globalAlpha = 1, v && (l.lineTo(m, E), l.lineTo(C.x, E), l.closePath(), 
                l.fill()), f.beginPath(), f.moveTo(m, t), l.beginPath(), l.moveTo(m, t), C = {
                    x: m,
                    y: t
                });
            }
            var e = a.targetCanvasCtx || this.plotArea.ctx, f = v ? this._preRenderCtx : e;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var n, l = this._eventManager.ghostCtx, u = a.axisY.lineCoordinates, A = [], k = this.plotArea;
                f.save(), v && l.save(), f.beginPath(), f.rect(k.x1, k.y1, k.width, k.height), f.clip(), 
                v && (l.beginPath(), l.rect(k.x1, k.y1, k.width, k.height), l.clip());
                for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var q = a.dataSeriesIndexes[p], g = this.data[q], r = g.dataPoints;
                    A = g.id;
                    this._eventManager.objectMap[A] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: q
                    }, A = Q(A), l.fillStyle = A, A = [], d = !0;
                    var m, t, s, E, h = 0, z = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), C = null;
                    if (0 < r.length) {
                        var B = g._colorSet[h % g._colorSet.length], w = g.lineColor = g.options.lineColor || B, y = w;
                        if (f.fillStyle = B, f.strokeStyle = w, f.lineWidth = g.lineThickness, c = "solid", 
                        f.setLineDash) {
                            var S = N(g.nullDataLineDashType, g.lineThickness), P = N(c = g.lineDashType, g.lineThickness);
                            f.setLineDash(P);
                        }
                        for (var ja = !0; h < r.length; h++) if (!((s = r[h].x.getTime ? r[h].x.getTime() : r[h].x) < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !ja))) if ("number" != typeof r[h].y) g.connectNullData || ja || d || b(), 
                        ja = !0; else {
                            m = a.axisX.convertValueToPixel(s), t = a.axisY.convertValueToPixel(r[h].y), d || ja ? (!d && g.connectNullData ? (f.setLineDash && (g.options.nullDataLineDashType || c === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (d = m, 
                            c = t, m = n.x, t = n.y, b(), f.moveTo(n.x, n.y), m = d, t = c, C = n, c = g.nullDataLineDashType, 
                            f.setLineDash(S)), f.lineTo(m, t), v && l.lineTo(m, t)) : (f.beginPath(), f.moveTo(m, t), 
                            v && (l.beginPath(), l.moveTo(m, t)), C = {
                                x: m,
                                y: t
                            }), ja = d = !1) : (f.lineTo(m, t), v && l.lineTo(m, t), 0 == h % 250 && b()), n = {
                                x: m,
                                y: t
                            }, h < r.length - 1 && (y !== (r[h].lineColor || w) || c !== (r[h].lineDashType || g.lineDashType)) && (b(), 
                            y = r[h].lineColor || w, f.strokeStyle = y, f.setLineDash && (r[h].lineDashType ? (c = r[h].lineDashType, 
                            f.setLineDash(N(c, g.lineThickness))) : (c = g.lineDashType, f.setLineDash(P))));
                            var aa = g.dataPointIds[h];
                            this._eventManager.objectMap[aa] = {
                                id: aa,
                                objectType: "dataPoint",
                                dataSeriesIndex: q,
                                dataPointIndex: h,
                                x1: m,
                                y1: t
                            }, 0 !== r[h].markerSize && (0 < r[h].markerSize || 0 < g.markerSize) && (s = g.getMarkerProperties(h, m, t, f), 
                            A.push(s), aa = Q(aa), v && A.push({
                                x: m,
                                y: t,
                                ctx: l,
                                type: s.type,
                                size: s.size,
                                color: aa,
                                borderColor: aa,
                                borderThickness: s.borderThickness
                            })), (r[h].indexLabel || g.indexLabel || r[h].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "area",
                                dataPoint: r[h],
                                dataSeries: g,
                                point: {
                                    x: m,
                                    y: t
                                },
                                direction: 0 > r[h].y === a.axisY.reversed ? 1 : -1,
                                color: B
                            });
                        }
                        b(), W.drawMarkers(A);
                    }
                }
                return v && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                f.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && f.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && f.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                f.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore()), 
                f.restore(), {
                    source: e,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                };
            }
        }, m.prototype.renderSplineArea = function(a) {
            function d() {
                var c = w(s, 2);
                if (0 < c.length) {
                    if (0 < n.lineThickness) {
                        b.beginPath(), b.moveTo(c[0].x, c[0].y), c[0].newStrokeStyle && (b.strokeStyle = c[0].newStrokeStyle), 
                        c[0].newLineDashArray && b.setLineDash(c[0].newLineDashArray);
                        for (var d = 0; d < c.length - 3; d += 3) b.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y), 
                        v && e.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y), 
                        (c[d + 3].newStrokeStyle || c[d + 3].newLineDashArray) && (b.stroke(), b.beginPath(), 
                        b.moveTo(c[d + 3].x, c[d + 3].y), c[d + 3].newStrokeStyle && (b.strokeStyle = c[d + 3].newStrokeStyle), 
                        c[d + 3].newLineDashArray && b.setLineDash(c[d + 3].newLineDashArray));
                        b.stroke();
                    }
                    for (b.beginPath(), b.moveTo(c[0].x, c[0].y), v && (e.beginPath(), e.moveTo(c[0].x, c[0].y)), 
                    d = 0; d < c.length - 3; d += 3) b.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y), 
                    v && e.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y);
                    a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? m = h : 0 > a.axisY.viewportMaximum ? m = f.y1 : 0 < a.axisY.viewportMinimum && (m = h), 
                    t = {
                        x: c[0].x,
                        y: c[0].y
                    }, b.lineTo(c[c.length - 1].x, m), b.lineTo(t.x, m), b.closePath(), b.globalAlpha = n.fillOpacity, 
                    b.fill(), b.globalAlpha = 1, v && (e.lineTo(c[c.length - 1].x, m), e.lineTo(t.x, m), 
                    e.closePath(), e.fill());
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx, f = a.axisY.lineCoordinates, l = [], u = this.plotArea;
                b.save(), v && e.save(), b.beginPath(), b.rect(u.x1, u.y1, u.width, u.height), b.clip(), 
                v && (e.beginPath(), e.rect(u.x1, u.y1, u.width, u.height), e.clip());
                for (var A = 0; A < a.dataSeriesIndexes.length; A++) {
                    var k = a.dataSeriesIndexes[A], n = this.data[k], p = n.dataPoints;
                    l = n.id;
                    this._eventManager.objectMap[l] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: k
                    }, l = Q(l), e.fillStyle = l;
                    l = [];
                    var g, r, m, q = 0, h = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), t = null, s = [];
                    if (0 < p.length) {
                        var z = n._colorSet[q % n._colorSet.length], E = n.lineColor = n.options.lineColor || z, C = E;
                        b.fillStyle = z, b.strokeStyle = E, b.lineWidth = n.lineThickness;
                        var B = "solid";
                        if (b.setLineDash) {
                            var y = N(n.nullDataLineDashType, n.lineThickness), D = N(B = n.lineDashType, n.lineThickness);
                            b.setLineDash(D);
                        }
                        for (r = !1; q < p.length; q++) if (!((g = p[q].x.getTime ? p[q].x.getTime() : p[q].x) < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !r))) if ("number" != typeof p[q].y) 0 < q && !r && (n.connectNullData ? b.setLineDash && 0 < s.length && (n.options.nullDataLineDashType || !p[q - 1].lineDashType) && (s[s.length - 1].newLineDashArray = y, 
                        B = n.nullDataLineDashType) : (d(), s = [])), r = !0; else {
                            g = a.axisX.convertValueToPixel(g), r = a.axisY.convertValueToPixel(p[q].y);
                            var S = n.dataPointIds[q];
                            if (this._eventManager.objectMap[S] = {
                                id: S,
                                objectType: "dataPoint",
                                dataSeriesIndex: k,
                                dataPointIndex: q,
                                x1: g,
                                y1: r
                            }, s[s.length] = {
                                x: g,
                                y: r
                            }, q < p.length - 1 && (C !== (p[q].lineColor || E) || B !== (p[q].lineDashType || n.lineDashType)) && (C = p[q].lineColor || E, 
                            s[s.length - 1].newStrokeStyle = C, b.setLineDash && (p[q].lineDashType ? (B = p[q].lineDashType, 
                            s[s.length - 1].newLineDashArray = N(B, n.lineThickness)) : (B = n.lineDashType, 
                            s[s.length - 1].newLineDashArray = D))), 0 !== p[q].markerSize && (0 < p[q].markerSize || 0 < n.markerSize)) {
                                var P = n.getMarkerProperties(q, g, r, b);
                                l.push(P), S = Q(S), v && l.push({
                                    x: g,
                                    y: r,
                                    ctx: e,
                                    type: P.type,
                                    size: P.size,
                                    color: S,
                                    borderColor: S,
                                    borderThickness: P.borderThickness
                                });
                            }
                            (p[q].indexLabel || n.indexLabel || p[q].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "splineArea",
                                dataPoint: p[q],
                                dataSeries: n,
                                point: {
                                    x: g,
                                    y: r
                                },
                                direction: 0 > p[q].y === a.axisY.reversed ? 1 : -1,
                                color: z
                            }), r = !1;
                        }
                        d(), W.drawMarkers(l);
                    }
                }
                return v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                b.clearRect(u.x1, u.y1, u.width, u.height), this._eventManager.ghostCtx.restore()), 
                b.restore(), {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                };
            }
        }, m.prototype.renderStepArea = function(a) {
            var d, c;
            function b() {
                C && (0 < g.lineThickness && f.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? E = z : 0 > a.axisY.viewportMaximum ? E = u.y1 : 0 < a.axisY.viewportMinimum && (E = z), 
                f.lineTo(m, E), f.lineTo(C.x, E), f.closePath(), f.globalAlpha = g.fillOpacity, 
                f.fill(), f.globalAlpha = 1, v && (l.lineTo(m, E), l.lineTo(C.x, E), l.closePath(), 
                l.fill()), f.beginPath(), f.moveTo(m, t), l.beginPath(), l.moveTo(m, t), C = {
                    x: m,
                    y: t
                });
            }
            var e = a.targetCanvasCtx || this.plotArea.ctx, f = v ? this._preRenderCtx : e;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var n, l = this._eventManager.ghostCtx, u = a.axisY.lineCoordinates, A = [], k = this.plotArea;
                f.save(), v && l.save(), f.beginPath(), f.rect(k.x1, k.y1, k.width, k.height), f.clip(), 
                v && (l.beginPath(), l.rect(k.x1, k.y1, k.width, k.height), l.clip());
                for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var q = a.dataSeriesIndexes[p], g = this.data[q], r = g.dataPoints;
                    A = g.id;
                    this._eventManager.objectMap[A] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: q
                    }, A = Q(A), l.fillStyle = A, A = [], d = !0;
                    var m, t, s, E, h = 0, z = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), C = null;
                    if (c = !1, 0 < r.length) {
                        var B = g._colorSet[h % g._colorSet.length], w = g.lineColor = g.options.lineColor || B, y = w;
                        f.fillStyle = B, f.strokeStyle = w, f.lineWidth = g.lineThickness;
                        var S = "solid";
                        if (f.setLineDash) {
                            var P = N(g.nullDataLineDashType, g.lineThickness), D = N(S = g.lineDashType, g.lineThickness);
                            f.setLineDash(D);
                        }
                        for (;h < r.length; h++) if (!((s = r[h].x.getTime ? r[h].x.getTime() : r[h].x) < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !c))) {
                            var aa = t;
                            "number" != typeof r[h].y ? (g.connectNullData || c || d || b(), c = !0) : (m = a.axisX.convertValueToPixel(s), 
                            t = a.axisY.convertValueToPixel(r[h].y), d || c ? (!d && g.connectNullData ? (f.setLineDash && (g.options.nullDataLineDashType || S === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (d = m, 
                            c = t, m = n.x, t = n.y, b(), f.moveTo(n.x, n.y), m = d, t = c, C = n, S = g.nullDataLineDashType, 
                            f.setLineDash(P)), f.lineTo(m, aa), f.lineTo(m, t), v && (l.lineTo(m, aa), l.lineTo(m, t))) : (f.beginPath(), 
                            f.moveTo(m, t), v && (l.beginPath(), l.moveTo(m, t)), C = {
                                x: m,
                                y: t
                            }), c = d = !1) : (f.lineTo(m, aa), v && l.lineTo(m, aa), f.lineTo(m, t), v && l.lineTo(m, t), 
                            0 == h % 250 && b()), n = {
                                x: m,
                                y: t
                            }, h < r.length - 1 && (y !== (r[h].lineColor || w) || S !== (r[h].lineDashType || g.lineDashType)) && (b(), 
                            y = r[h].lineColor || w, f.strokeStyle = y, f.setLineDash && (r[h].lineDashType ? (S = r[h].lineDashType, 
                            f.setLineDash(N(S, g.lineThickness))) : (S = g.lineDashType, f.setLineDash(D)))), 
                            s = g.dataPointIds[h], this._eventManager.objectMap[s] = {
                                id: s,
                                objectType: "dataPoint",
                                dataSeriesIndex: q,
                                dataPointIndex: h,
                                x1: m,
                                y1: t
                            }, 0 !== r[h].markerSize && (0 < r[h].markerSize || 0 < g.markerSize) && (aa = g.getMarkerProperties(h, m, t, f), 
                            A.push(aa), s = Q(s), v && A.push({
                                x: m,
                                y: t,
                                ctx: l,
                                type: aa.type,
                                size: aa.size,
                                color: s,
                                borderColor: s,
                                borderThickness: aa.borderThickness
                            })), (r[h].indexLabel || g.indexLabel || r[h].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stepArea",
                                dataPoint: r[h],
                                dataSeries: g,
                                point: {
                                    x: m,
                                    y: t
                                },
                                direction: 0 > r[h].y === a.axisY.reversed ? 1 : -1,
                                color: B
                            }));
                        }
                        b(), W.drawMarkers(A);
                    }
                }
                return v && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                f.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && f.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && f.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                f.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore()), 
                f.restore(), {
                    source: e,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                };
            }
        }, m.prototype.renderStackedArea = function(a) {
            function d() {
                if (!(1 > k.length)) {
                    for (0 < B.lineThickness && b.stroke(); 0 < k.length; ) {
                        var a = k.pop();
                        b.lineTo(a.x, a.y), v && s.lineTo(a.x, a.y);
                    }
                    b.closePath(), b.globalAlpha = B.fillOpacity, b.fill(), b.globalAlpha = 1, b.beginPath(), 
                    v && (s.closePath(), s.fill(), s.beginPath()), k = [];
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var g, r, t, x, z, e = null, f = null, l = [], u = this.plotArea, h = [], k = [], n = [], p = [], q = 0, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), s = this._eventManager.ghostCtx;
                v && s.beginPath(), b.save(), v && s.save(), b.beginPath(), b.rect(u.x1, u.y1, u.width, u.height), 
                b.clip(), v && (s.beginPath(), s.rect(u.x1, u.y1, u.width, u.height), s.clip());
                e = [];
                for (var E = 0; E < a.dataSeriesIndexes.length; E++) {
                    var C = a.dataSeriesIndexes[E], B = this.data[C], w = B.dataPoints;
                    for (B.dataPointIndexes = [], q = 0; q < w.length; q++) C = w[q].x.getTime ? w[q].x.getTime() : w[q].x, 
                    B.dataPointIndexes[C] = q, e[C] || (n.push(C), e[C] = !0);
                    n.sort(Pa);
                }
                for (E = 0; E < a.dataSeriesIndexes.length; E++) {
                    if (C = a.dataSeriesIndexes[E], w = (B = this.data[C]).dataPoints, x = !0, k = [], 
                    q = B.id, this._eventManager.objectMap[q] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: C
                    }, q = Q(q), s.fillStyle = q, 0 < n.length) {
                        e = B._colorSet[0];
                        var y = B.lineColor = B.options.lineColor || e, S = y;
                        if (b.fillStyle = e, b.strokeStyle = y, b.lineWidth = B.lineThickness, z = "solid", 
                        b.setLineDash) {
                            var P = N(B.nullDataLineDashType, B.lineThickness), D = N(z = B.lineDashType, B.lineThickness);
                            b.setLineDash(D);
                        }
                        var aa = !0;
                        for (q = 0; q < n.length; q++) {
                            f = n[q];
                            var fa = 0 <= B.dataPointIndexes[f] ? w[B.dataPointIndexes[f]] : {
                                x: f,
                                y: null
                            };
                            if (!(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!B.connectNullData || !aa))) if ("number" != typeof fa.y) B.connectNullData || aa || x || d(), 
                            aa = !0; else {
                                g = a.axisX.convertValueToPixel(f);
                                var la = h[f] ? h[f] : 0;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                    if (p[f] = fa.y + (p[f] ? p[f] : 0), 0 >= p[f] && a.axisY.logarithmic) continue;
                                    r = a.axisY.convertValueToPixel(p[f]);
                                } else r = a.axisY.convertValueToPixel(fa.y), r -= la;
                                if (k.push({
                                    x: g,
                                    y: m - la
                                }), h[f] = m - r, x || aa ? (!x && B.connectNullData ? (b.setLineDash && (B.options.nullDataLineDashType || z === B.lineDashType && B.lineDashType !== B.nullDataLineDashType) && (x = k.pop(), 
                                z = k[k.length - 1], d(), b.moveTo(t.x, t.y), k.push(z), k.push(x), z = B.nullDataLineDashType, 
                                b.setLineDash(P)), b.lineTo(g, r), v && s.lineTo(g, r)) : (b.beginPath(), b.moveTo(g, r), 
                                v && (s.beginPath(), s.moveTo(g, r))), aa = x = !1) : (b.lineTo(g, r), v && s.lineTo(g, r), 
                                0 == q % 250 && (d(), b.moveTo(g, r), v && s.moveTo(g, r), k.push({
                                    x: g,
                                    y: m - la
                                }))), t = {
                                    x: g,
                                    y: r
                                }, q < w.length - 1 && (S !== (w[q].lineColor || y) || z !== (w[q].lineDashType || B.lineDashType)) && (d(), 
                                b.beginPath(), b.moveTo(g, r), k.push({
                                    x: g,
                                    y: m - la
                                }), S = w[q].lineColor || y, b.strokeStyle = S, b.setLineDash && (w[q].lineDashType ? (z = w[q].lineDashType, 
                                b.setLineDash(N(z, B.lineThickness))) : (z = B.lineDashType, b.setLineDash(D)))), 
                                0 <= B.dataPointIndexes[f]) {
                                    var F = B.dataPointIds[B.dataPointIndexes[f]];
                                    this._eventManager.objectMap[F] = {
                                        id: F,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: C,
                                        dataPointIndex: B.dataPointIndexes[f],
                                        x1: g,
                                        y1: r
                                    };
                                }
                                0 <= B.dataPointIndexes[f] && 0 !== fa.markerSize && (0 < fa.markerSize || 0 < B.markerSize) && (la = B.getMarkerProperties(B.dataPointIndexes[f], g, r, b), 
                                l.push(la), f = Q(F), v && l.push({
                                    x: g,
                                    y: r,
                                    ctx: s,
                                    type: la.type,
                                    size: la.size,
                                    color: f,
                                    borderColor: f,
                                    borderThickness: la.borderThickness
                                })), (fa.indexLabel || B.indexLabel || fa.indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedArea",
                                    dataPoint: fa,
                                    dataSeries: B,
                                    point: {
                                        x: g,
                                        y: r
                                    },
                                    direction: 0 > w[q].y === a.axisY.reversed ? 1 : -1,
                                    color: e
                                });
                            }
                        }
                        d(), b.moveTo(g, r), v && s.moveTo(g, r);
                    }
                    delete B.dataPointIndexes;
                }
                return W.drawMarkers(l), v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                b.clearRect(u.x1, u.y1, u.width, u.height), s.restore()), b.restore(), {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                };
            }
        }, m.prototype.renderStackedArea100 = function(a) {
            function d() {
                for (0 < B.lineThickness && b.stroke(); 0 < k.length; ) {
                    var a = k.pop();
                    b.lineTo(a.x, a.y), v && z.lineTo(a.x, a.y);
                }
                b.closePath(), b.globalAlpha = B.fillOpacity, b.fill(), b.globalAlpha = 1, b.beginPath(), 
                v && (z.closePath(), z.fill(), z.beginPath()), k = [];
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var g, r, m, s, t, e = null, f = null, l = this.plotArea, u = [], h = [], k = [], n = [], p = [], q = 0, x = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), z = this._eventManager.ghostCtx;
                b.save(), v && z.save(), b.beginPath(), b.rect(l.x1, l.y1, l.width, l.height), b.clip(), 
                v && (z.beginPath(), z.rect(l.x1, l.y1, l.width, l.height), z.clip());
                e = [];
                for (var E = 0; E < a.dataSeriesIndexes.length; E++) {
                    var w = a.dataSeriesIndexes[E], B = this.data[w], y = B.dataPoints;
                    for (B.dataPointIndexes = [], q = 0; q < y.length; q++) w = y[q].x.getTime ? y[q].x.getTime() : y[q].x, 
                    B.dataPointIndexes[w] = q, e[w] || (n.push(w), e[w] = !0);
                    n.sort(Pa);
                }
                for (E = 0; E < a.dataSeriesIndexes.length; E++) {
                    if (w = a.dataSeriesIndexes[E], y = (B = this.data[w]).dataPoints, s = !0, e = B.id, 
                    this._eventManager.objectMap[e] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: w
                    }, e = Q(e), z.fillStyle = e, k = [], 0 < n.length) {
                        e = B._colorSet[q % B._colorSet.length];
                        var D = B.lineColor = B.options.lineColor || e, S = D;
                        if (b.fillStyle = e, b.strokeStyle = D, b.lineWidth = B.lineThickness, t = "solid", 
                        b.setLineDash) {
                            var P = N(B.nullDataLineDashType, B.lineThickness), F = N(t = B.lineDashType, B.lineThickness);
                            b.setLineDash(F);
                        }
                        var aa = !0;
                        for (q = 0; q < n.length; q++) {
                            f = n[q];
                            var fa = 0 <= B.dataPointIndexes[f] ? y[B.dataPointIndexes[f]] : {
                                x: f,
                                y: null
                            };
                            if (!(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!B.connectNullData || !aa))) if ("number" != typeof fa.y) B.connectNullData || aa || s || d(), 
                            aa = !0; else {
                                var la;
                                la = 0 !== a.dataPointYSums[f] ? fa.y / a.dataPointYSums[f] * 100 : 0, g = a.axisX.convertValueToPixel(f);
                                var ba = h[f] ? h[f] : 0;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                    if (p[f] = la + (p[f] ? p[f] : 0), 0 >= p[f] && a.axisY.logarithmic) continue;
                                    r = a.axisY.convertValueToPixel(p[f]);
                                } else r = a.axisY.convertValueToPixel(la), r -= ba;
                                if (k.push({
                                    x: g,
                                    y: x - ba
                                }), h[f] = x - r, s || aa ? (!s && B.connectNullData ? (b.setLineDash && (B.options.nullDataLineDashType || t === B.lineDashType && B.lineDashType !== B.nullDataLineDashType) && (s = k.pop(), 
                                t = k[k.length - 1], d(), b.moveTo(m.x, m.y), k.push(t), k.push(s), t = B.nullDataLineDashType, 
                                b.setLineDash(P)), b.lineTo(g, r), v && z.lineTo(g, r)) : (b.beginPath(), b.moveTo(g, r), 
                                v && (z.beginPath(), z.moveTo(g, r))), aa = s = !1) : (b.lineTo(g, r), v && z.lineTo(g, r), 
                                0 == q % 250 && (d(), b.moveTo(g, r), v && z.moveTo(g, r), k.push({
                                    x: g,
                                    y: x - ba
                                }))), m = {
                                    x: g,
                                    y: r
                                }, q < y.length - 1 && (S !== (y[q].lineColor || D) || t !== (y[q].lineDashType || B.lineDashType)) && (d(), 
                                b.beginPath(), b.moveTo(g, r), k.push({
                                    x: g,
                                    y: x - ba
                                }), S = y[q].lineColor || D, b.strokeStyle = S, b.setLineDash && (y[q].lineDashType ? (t = y[q].lineDashType, 
                                b.setLineDash(N(t, B.lineThickness))) : (t = B.lineDashType, b.setLineDash(F)))), 
                                0 <= B.dataPointIndexes[f]) {
                                    var G = B.dataPointIds[B.dataPointIndexes[f]];
                                    this._eventManager.objectMap[G] = {
                                        id: G,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: w,
                                        dataPointIndex: B.dataPointIndexes[f],
                                        x1: g,
                                        y1: r
                                    };
                                }
                                0 <= B.dataPointIndexes[f] && 0 !== fa.markerSize && (0 < fa.markerSize || 0 < B.markerSize) && (ba = B.getMarkerProperties(q, g, r, b), 
                                u.push(ba), f = Q(G), v && u.push({
                                    x: g,
                                    y: r,
                                    ctx: z,
                                    type: ba.type,
                                    size: ba.size,
                                    color: f,
                                    borderColor: f,
                                    borderThickness: ba.borderThickness
                                })), (fa.indexLabel || B.indexLabel || fa.indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedArea100",
                                    dataPoint: fa,
                                    dataSeries: B,
                                    point: {
                                        x: g,
                                        y: r
                                    },
                                    direction: 0 > y[q].y === a.axisY.reversed ? 1 : -1,
                                    color: e
                                });
                            }
                        }
                        d(), b.moveTo(g, r), v && z.moveTo(g, r);
                    }
                    delete B.dataPointIndexes;
                }
                return W.drawMarkers(u), v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                b.clearRect(l.x1, l.y1, l.width, l.height), z.restore()), b.restore(), {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                };
            }
        }, m.prototype.renderBubble = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var f, l, b = this.plotArea, e = 0;
                c.save(), v && this._eventManager.ghostCtx.save(), c.beginPath(), c.rect(b.x1, b.y1, b.width, b.height), 
                c.clip(), v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), 
                this._eventManager.ghostCtx.clip());
                for (var u = -1 / 0, h = 1 / 0, k = 0; k < a.dataSeriesIndexes.length; k++) {
                    var n = a.dataSeriesIndexes[k], p = this.data[n], q = p.dataPoints, g = 0;
                    for (e = 0; e < q.length; e++) (f = f = q[e].getTime ? q[e].x.getTime() : q[e].x) < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax || void 0 === q[e].z || ((g = q[e].z) > u && (u = g), 
                    g < h && (h = g));
                }
                var r = 25 * Math.PI, m = Math.max(Math.pow(.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI, r);
                for (k = 0; k < a.dataSeriesIndexes.length; k++) if (n = a.dataSeriesIndexes[k], 
                0 < (q = (p = this.data[n]).dataPoints).length) for (c.strokeStyle = "#4572A7 ", 
                e = 0; e < q.length; e++) if (!((f = f = q[e].getTime ? q[e].x.getTime() : q[e].x) < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" == typeof q[e].y) {
                    f = a.axisX.convertValueToPixel(f), l = a.axisY.convertValueToPixel(q[e].y);
                    g = q[e].z;
                    var s = 2 * Math.max(Math.sqrt((u === h ? m / 2 : r + (m - r) / (u - h) * (g - h)) / Math.PI) << 0, 1);
                    (g = p.getMarkerProperties(e, c)).size = s, c.globalAlpha = p.fillOpacity, W.drawMarker(f, l, c, g.type, g.size, g.color, g.borderColor, g.borderThickness), 
                    c.globalAlpha = 1;
                    var t = p.dataPointIds[e];
                    this._eventManager.objectMap[t] = {
                        id: t,
                        objectType: "dataPoint",
                        dataSeriesIndex: n,
                        dataPointIndex: e,
                        x1: f,
                        y1: l,
                        size: s
                    }, s = Q(t), v && W.drawMarker(f, l, this._eventManager.ghostCtx, g.type, g.size, s, s, g.borderThickness), 
                    (q[e].indexLabel || p.indexLabel || q[e].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({
                        chartType: "bubble",
                        dataPoint: q[e],
                        dataSeries: p,
                        point: {
                            x: f,
                            y: l
                        },
                        direction: 1,
                        bounds: {
                            x1: f - g.size / 2,
                            y1: l - g.size / 2,
                            x2: f + g.size / 2,
                            y2: l + g.size / 2
                        },
                        color: null
                    });
                }
                return v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore()), 
                c.restore(), {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                };
            }
        }, m.prototype.renderScatter = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var f, l, b = this.plotArea, e = 0;
                c.save(), v && this._eventManager.ghostCtx.save(), c.beginPath(), c.rect(b.x1, b.y1, b.width, b.height), 
                c.clip(), v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), 
                this._eventManager.ghostCtx.clip());
                for (var u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var h = a.dataSeriesIndexes[u], k = this.data[h], n = k.dataPoints;
                    if (0 < n.length) {
                        c.strokeStyle = "#4572A7 ", Math.pow(.3 * Math.min(b.height, b.width) / 2, 2);
                        var p = 0, q = 0;
                        for (e = 0; e < n.length; e++) if (!((f = f = n[e].getTime ? n[e].x.getTime() : n[e].x) < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" == typeof n[e].y) {
                            f = a.axisX.convertValueToPixel(f), l = a.axisY.convertValueToPixel(n[e].y);
                            var g = k.getMarkerProperties(e, f, l, c);
                            c.globalAlpha = k.fillOpacity, W.drawMarker(g.x, g.y, g.ctx, g.type, g.size, g.color, g.borderColor, g.borderThickness), 
                            c.globalAlpha = 1, Math.sqrt((p - f) * (p - f) + (q - l) * (q - l)) < Math.min(g.size, 5) && n.length > Math.min(this.plotArea.width, this.plotArea.height) || (p = k.dataPointIds[e], 
                            this._eventManager.objectMap[p] = {
                                id: p,
                                objectType: "dataPoint",
                                dataSeriesIndex: h,
                                dataPointIndex: e,
                                x1: f,
                                y1: l
                            }, p = Q(p), v && W.drawMarker(g.x, g.y, this._eventManager.ghostCtx, g.type, g.size, p, p, g.borderThickness), 
                            (n[e].indexLabel || k.indexLabel || n[e].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "scatter",
                                dataPoint: n[e],
                                dataSeries: k,
                                point: {
                                    x: f,
                                    y: l
                                },
                                direction: 1,
                                bounds: {
                                    x1: f - g.size / 2,
                                    y1: l - g.size / 2,
                                    x2: f + g.size / 2,
                                    y2: l + g.size / 2
                                },
                                color: null
                            }), p = f, q = l);
                        }
                    }
                }
                return v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore()), 
                c.restore(), {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                };
            }
        }, m.prototype.renderCandlestick = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d, b = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h, k, n, p, q, g, e = null, f = null, l = this.plotArea, u = 0, r = (e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, 
                f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : .015 * this.width, 
                a.axisX.dataInfo.minDiff);
                isFinite(r) || (r = .3 * Math.abs(a.axisX.range)), r = this.options.dataPointWidth ? this.dataPointWidth : .7 * l.width * (a.axisX.logarithmic ? Math.log(r) / Math.log(a.axisX.range) : Math.abs(r) / Math.abs(a.axisX.range)) << 0, 
                this.dataPointMaxWidth && e > f && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : 1 / 0, f)), 
                !this.dataPointMaxWidth && this.dataPointMinWidth && f < e && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -1 / 0, e)), 
                r < e && (r = e), r > f && (r = f), c.save(), v && b.save(), c.beginPath(), c.rect(l.x1, l.y1, l.width, l.height), 
                c.clip(), v && (b.beginPath(), b.rect(l.x1, l.y1, l.width, l.height), b.clip());
                for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var w = a.dataSeriesIndexes[m], t = this.data[w], x = t.dataPoints;
                    if (0 < x.length) {
                        var z = !!(5 < r && t.bevelEnabled);
                        for (u = 0; u < x.length; u++) if (!((g = x[u].getTime ? x[u].x.getTime() : x[u].x) < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && !s(x[u].y) && x[u].y.length && "number" == typeof x[u].y[0] && "number" == typeof x[u].y[1] && "number" == typeof x[u].y[2] && "number" == typeof x[u].y[3]) {
                            h = a.axisX.convertValueToPixel(g), k = a.axisY.convertValueToPixel(x[u].y[0]), 
                            n = a.axisY.convertValueToPixel(x[u].y[1]), p = a.axisY.convertValueToPixel(x[u].y[2]), 
                            q = a.axisY.convertValueToPixel(x[u].y[3]);
                            var E = h - r / 2 << 0, C = E + r << 0, B = (f = t.options.fallingColor ? t.fallingColor : t._colorSet[0], 
                            e = x[u].color ? x[u].color : t._colorSet[0], Math.round(Math.max(1, .15 * r))), y = 0 == B % 2 ? 0 : .5, D = t.dataPointIds[u];
                            this._eventManager.objectMap[D] = {
                                id: D,
                                objectType: "dataPoint",
                                dataSeriesIndex: w,
                                dataPointIndex: u,
                                x1: E,
                                y1: k,
                                x2: C,
                                y2: n,
                                x3: h,
                                y3: p,
                                x4: h,
                                y4: q,
                                borderThickness: B,
                                color: e
                            }, c.strokeStyle = e, c.beginPath(), c.lineWidth = B, b.lineWidth = Math.max(B, 4), 
                            "candlestick" === t.type ? (c.moveTo(h - y, n), c.lineTo(h - y, Math.min(k, q)), 
                            c.stroke(), c.moveTo(h - y, Math.max(k, q)), c.lineTo(h - y, p), c.stroke(), ca(c, E, Math.min(k, q), C, Math.max(k, q), x[u].y[0] <= x[u].y[3] ? t.risingColor : f, B, e, z, z, !1, !1, t.fillOpacity), 
                            v && (e = Q(D), b.strokeStyle = e, b.moveTo(h - y, n), b.lineTo(h - y, Math.min(k, q)), 
                            b.stroke(), b.moveTo(h - y, Math.max(k, q)), b.lineTo(h - y, p), b.stroke(), ca(b, E, Math.min(k, q), C, Math.max(k, q), e, 0, null, !1, !1, !1, !1))) : "ohlc" === t.type && (c.moveTo(h - y, n), 
                            c.lineTo(h - y, p), c.stroke(), c.beginPath(), c.moveTo(h, k), c.lineTo(E, k), c.stroke(), 
                            c.beginPath(), c.moveTo(h, q), c.lineTo(C, q), c.stroke(), v && (e = Q(D), b.strokeStyle = e, 
                            b.moveTo(h - y, n), b.lineTo(h - y, p), b.stroke(), b.beginPath(), b.moveTo(h, k), 
                            b.lineTo(E, k), b.stroke(), b.beginPath(), b.moveTo(h, q), b.lineTo(C, q), b.stroke())), 
                            (x[u].indexLabel || t.indexLabel || x[u].indexLabelFormatter || t.indexLabelFormatter) && this._indexLabels.push({
                                chartType: t.type,
                                dataPoint: x[u],
                                dataSeries: t,
                                point: {
                                    x: E + (C - E) / 2,
                                    y: a.axisY.reversed ? p : n
                                },
                                direction: 1,
                                bounds: {
                                    x1: E,
                                    y1: Math.min(n, p),
                                    x2: C,
                                    y2: Math.max(n, p)
                                },
                                color: e
                            });
                        }
                    }
                }
                return v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(l.x1, l.y1, l.width, l.height), b.restore()), c.restore(), {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                };
            }
        }, m.prototype.renderBoxAndWhisker = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d, b = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var u, h, k, n, p, q, g, e = null, f = this.plotArea, l = 0, r = (e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, 
                l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : .015 * this.width, 
                a.axisX.dataInfo.minDiff);
                isFinite(r) || (r = .3 * Math.abs(a.axisX.range)), r = this.options.dataPointWidth ? this.dataPointWidth : .7 * f.width * (a.axisX.logarithmic ? Math.log(r) / Math.log(a.axisX.range) : Math.abs(r) / Math.abs(a.axisX.range)) << 0, 
                this.dataPointMaxWidth && e > l && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : 1 / 0, l)), 
                !this.dataPointMaxWidth && this.dataPointMinWidth && l < e && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -1 / 0, e)), 
                r < e && (r = e), r > l && (r = l), c.save(), v && b.save(), c.beginPath(), c.rect(f.x1, f.y1, f.width, f.height), 
                c.clip(), v && (b.beginPath(), b.rect(f.x1, f.y1, f.width, f.height), b.clip());
                for (var m = !!a.axisY.reversed, w = 0; w < a.dataSeriesIndexes.length; w++) {
                    var t = a.dataSeriesIndexes[w], x = this.data[t], z = x.dataPoints;
                    if (0 < z.length) {
                        var E = !!(5 < r && x.bevelEnabled);
                        for (l = 0; l < z.length; l++) if (!((g = z[l].getTime ? z[l].x.getTime() : z[l].x) < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && !s(z[l].y) && z[l].y.length && "number" == typeof z[l].y[0] && "number" == typeof z[l].y[1] && "number" == typeof z[l].y[2] && "number" == typeof z[l].y[3] && "number" == typeof z[l].y[4] && 5 === z[l].y.length) {
                            u = a.axisX.convertValueToPixel(g), h = a.axisY.convertValueToPixel(z[l].y[0]), 
                            k = a.axisY.convertValueToPixel(z[l].y[1]), n = a.axisY.convertValueToPixel(z[l].y[2]), 
                            p = a.axisY.convertValueToPixel(z[l].y[3]), q = a.axisY.convertValueToPixel(z[l].y[4]);
                            var C = u - r / 2 << 0, B = u + r / 2 << 0, y = (e = z[l].color ? z[l].color : x._colorSet[0], 
                            Math.round(Math.max(1, .15 * r))), D = 0 == y % 2 ? 0 : .5, S = z[l].whiskerColor ? z[l].whiskerColor : z[l].color ? x.whiskerColor ? x.whiskerColor : z[l].color : x.whiskerColor ? x.whiskerColor : e, P = "number" == typeof z[l].whiskerThickness ? z[l].whiskerThickness : "number" == typeof x.options.whiskerThickness ? x.whiskerThickness : y, F = z[l].whiskerDashType ? z[l].whiskerDashType : x.whiskerDashType, aa = "number" == typeof (aa = s(z[l].whiskerLength) ? s(x.options.whiskerLength) ? r : x.whiskerLength : z[l].whiskerLength) ? 0 >= aa ? 0 : aa >= r ? r : aa : "string" == typeof aa ? parseInt(aa) * r / 100 > r ? r : parseInt(aa) * r / 100 : r, fa = 1 == Math.round(P) % 2 ? .5 : 0, la = z[l].stemColor ? z[l].stemColor : z[l].color ? x.stemColor ? x.stemColor : z[l].color : x.stemColor ? x.stemColor : e, ba = "number" == typeof z[l].stemThickness ? z[l].stemThickness : "number" == typeof x.options.stemThickness ? x.stemThickness : y, G = 1 == Math.round(ba) % 2 ? .5 : 0, H = z[l].stemDashType ? z[l].stemDashType : x.stemDashType, J = z[l].lineColor ? z[l].lineColor : z[l].color ? x.lineColor ? x.lineColor : z[l].color : x.lineColor ? x.lineColor : e, M = "number" == typeof z[l].lineThickness ? z[l].lineThickness : "number" == typeof x.options.lineThickness ? x.lineThickness : y, T = z[l].lineDashType ? z[l].lineDashType : x.lineDashType, K = 1 == Math.round(M) % 2 ? .5 : 0, R = x.upperBoxColor, wa = x.lowerBoxColor, ra = s(x.options.fillOpacity) ? 1 : x.fillOpacity, O = x.dataPointIds[l];
                            this._eventManager.objectMap[O] = {
                                id: O,
                                objectType: "dataPoint",
                                dataSeriesIndex: t,
                                dataPointIndex: l,
                                x1: C,
                                y1: h,
                                x2: B,
                                y2: k,
                                x3: u,
                                y3: n,
                                x4: u,
                                y4: p,
                                y5: q,
                                borderThickness: y,
                                color: e,
                                stemThickness: ba,
                                stemColor: la,
                                whiskerThickness: P,
                                whiskerLength: aa,
                                whiskerColor: S,
                                lineThickness: M,
                                lineColor: J
                            }, c.save(), 0 < ba && (c.beginPath(), c.strokeStyle = la, c.lineWidth = ba, c.setLineDash && c.setLineDash(N(H, ba)), 
                            c.moveTo(u - G, k), c.lineTo(u - G, h), c.stroke(), c.moveTo(u - G, p), c.lineTo(u - G, n), 
                            c.stroke()), c.restore(), b.lineWidth = Math.max(y, 4), c.beginPath(), ca(c, C, Math.min(q, k), B, Math.max(k, q), wa, 0, e, !!m && E, !m && E, !1, !1, ra), 
                            c.beginPath(), ca(c, C, Math.min(n, q), B, Math.max(q, n), R, 0, e, !m && E, !!m && E, !1, !1, ra), 
                            c.beginPath(), c.lineWidth = y, c.strokeStyle = e, c.rect(C - D, Math.min(k, n) - D, B - C + 2 * D, Math.max(k, n) - Math.min(k, n) + 2 * D), 
                            c.stroke(), c.save(), 0 < M && (c.beginPath(), c.globalAlpha = 1, c.setLineDash && c.setLineDash(N(T, M)), 
                            c.strokeStyle = J, c.lineWidth = M, c.moveTo(C, q - K), c.lineTo(B, q - K), c.stroke()), 
                            c.restore(), c.save(), 0 < P && (c.beginPath(), c.setLineDash && c.setLineDash(N(F, P)), 
                            c.strokeStyle = S, c.lineWidth = P, c.moveTo(u - aa / 2 << 0, p - fa), c.lineTo(u + aa / 2 << 0, p - fa), 
                            c.stroke(), c.moveTo(u - aa / 2 << 0, h + fa), c.lineTo(u + aa / 2 << 0, h + fa), 
                            c.stroke()), c.restore(), v && (e = Q(O), b.strokeStyle = e, b.lineWidth = ba, 0 < ba && (b.moveTo(u - D - G, k), 
                            b.lineTo(u - D - G, Math.max(h, p)), b.stroke(), b.moveTo(u - D - G, Math.min(h, p)), 
                            b.lineTo(u - D - G, n), b.stroke()), ca(b, C, Math.max(k, n), B, Math.min(k, n), e, 0, null, !1, !1, !1, !1), 
                            0 < P && (b.beginPath(), b.lineWidth = P, b.moveTo(u + aa / 2, p - fa), b.lineTo(u - aa / 2, p - fa), 
                            b.stroke(), b.moveTo(u + aa / 2, h + fa), b.lineTo(u - aa / 2, h + fa), b.stroke())), 
                            (z[l].indexLabel || x.indexLabel || z[l].indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({
                                chartType: x.type,
                                dataPoint: z[l],
                                dataSeries: x,
                                point: {
                                    x: C + (B - C) / 2,
                                    y: a.axisY.reversed ? h : p
                                },
                                direction: 1,
                                bounds: {
                                    x1: C,
                                    y1: Math.min(h, p),
                                    x2: B,
                                    y2: Math.max(h, p)
                                },
                                color: e
                            });
                        }
                    }
                }
                return v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(f.x1, f.y1, f.width, f.height), b.restore()), c.restore(), {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                };
            }
        }, m.prototype.renderRangeColumn = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var l, u, h, b = null, e = this.plotArea, f = 0;
                f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : .03 * this.width;
                var k = a.axisX.dataInfo.minDiff;
                isFinite(k) || (k = .3 * Math.abs(a.axisX.range)), k = this.options.dataPointWidth ? this.dataPointWidth : e.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries * .9 << 0, 
                this.dataPointMaxWidth && f > l && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : 1 / 0, l)), 
                !this.dataPointMaxWidth && this.dataPointMinWidth && l < f && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -1 / 0, f)), 
                k < f && (k = f), k > l && (k = l), c.save(), v && this._eventManager.ghostCtx.save(), 
                c.beginPath(), c.rect(e.x1, e.y1, e.width, e.height), c.clip(), v && (this._eventManager.ghostCtx.beginPath(), 
                this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var p = a.dataSeriesIndexes[n], q = this.data[p], g = q.dataPoints;
                    if (0 < g.length) {
                        var r = !!(5 < k && q.bevelEnabled);
                        for (f = 0; f < g.length; f++) if (!((h = g[f].getTime ? g[f].x.getTime() : g[f].x) < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && !s(g[f].y) && g[f].y.length && "number" == typeof g[f].y[0] && "number" == typeof g[f].y[1]) {
                            b = a.axisX.convertValueToPixel(h), l = a.axisY.convertValueToPixel(g[f].y[0]), 
                            u = a.axisY.convertValueToPixel(g[f].y[1]);
                            var m = a.axisX.reversed ? b + a.plotType.totalDataSeries * k / 2 - (a.previousDataSeriesCount + n) * k << 0 : b - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + n) * k << 0, w = a.axisX.reversed ? m - k << 0 : m + k << 0;
                            b = g[f].color ? g[f].color : q._colorSet[f % q._colorSet.length];
                            if (l > u) {
                                var t = l;
                                l = u, u = t;
                            }
                            t = q.dataPointIds[f], this._eventManager.objectMap[t] = {
                                id: t,
                                objectType: "dataPoint",
                                dataSeriesIndex: p,
                                dataPointIndex: f,
                                x1: m,
                                y1: l,
                                x2: w,
                                y2: u
                            }, ca(c, m, l, w, u, b, 0, b, r, r, !1, !1, q.fillOpacity), b = Q(t), v && ca(this._eventManager.ghostCtx, m, l, w, u, b, 0, null, !1, !1, !1, !1), 
                            (g[f].indexLabel || q.indexLabel || g[f].indexLabelFormatter || q.indexLabelFormatter) && (this._indexLabels.push({
                                chartType: "rangeColumn",
                                dataPoint: g[f],
                                dataSeries: q,
                                indexKeyword: 0,
                                point: {
                                    x: m + (w - m) / 2,
                                    y: g[f].y[1] >= g[f].y[0] ? u : l
                                },
                                direction: g[f].y[1] >= g[f].y[0] ? -1 : 1,
                                bounds: {
                                    x1: m,
                                    y1: Math.min(l, u),
                                    x2: w,
                                    y2: Math.max(l, u)
                                },
                                color: b
                            }), this._indexLabels.push({
                                chartType: "rangeColumn",
                                dataPoint: g[f],
                                dataSeries: q,
                                indexKeyword: 1,
                                point: {
                                    x: m + (w - m) / 2,
                                    y: g[f].y[1] >= g[f].y[0] ? l : u
                                },
                                direction: g[f].y[1] >= g[f].y[0] ? 1 : -1,
                                bounds: {
                                    x1: m,
                                    y1: Math.min(l, u),
                                    x2: w,
                                    y2: Math.max(l, u)
                                },
                                color: b
                            }));
                        }
                    }
                }
                return v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore()), 
                c.restore(), {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                };
            }
        }, m.prototype.renderError = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d, b = !!a.axisY._position && ("left" !== a.axisY._position && "right" !== a.axisY._position);
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h, k, n, p, q, g, r, e = null, f = !1, l = this.plotArea, u = 0, m = a.axisX.dataInfo.minDiff;
                isFinite(m) || (m = .3 * Math.abs(a.axisX.range)), c.save(), v && this._eventManager.ghostCtx.save(), 
                c.beginPath(), c.rect(l.x1, l.y1, l.width, l.height), c.clip(), v && (this._eventManager.ghostCtx.beginPath(), 
                this._eventManager.ghostCtx.rect(l.x1, l.y1, l.width, l.height), this._eventManager.ghostCtx.clip());
                for (var w = 0, t = 0; t < this.data.length; t++) !this.data[t].type.match(/(bar|column)/gi) || !this.data[t].visible || this.data[t].type.match(/(stacked)/gi) && w || w++;
                for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
                    var z = a.dataSeriesIndexes[x], E = this.data[z], C = E.dataPoints, B = !s(E._linkedSeries) && !(!E._linkedSeries.type.match(/(bar|column)/gi) || !E._linkedSeries.visible), D = 0;
                    if (B) for (e = E._linkedSeries.id, t = 0; t < e; t++) !this.data[t].type.match(/(bar|column)/gi) || !this.data[t].visible || this.data[t].type.match(/(stacked)/gi) && D || (this.data[t].type.match(/(range)/gi) && (f = !0), 
                    D++);
                    if (e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, 
                    u = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(.15 * this.height, this.plotArea.height / (B ? w : 1) * .9) << 0 : .3 * this.width, 
                    f && (u = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(.15 * this.height, this.plotArea.height / (B ? w : 1) * .9) << 0 : .03 * this.width), 
                    t = this.options.dataPointWidth ? this.dataPointWidth : (b ? l.height : l.width) * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range)) / (B ? w : 1) * .9 << 0, 
                    this.dataPointMaxWidth && e > u && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : 1 / 0, u)), 
                    !this.dataPointMaxWidth && this.dataPointMinWidth && u < e && (u = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -1 / 0, e)), 
                    t < e && (t = e), t > u && (t = u), 0 < C.length) {
                        var F = E._colorSet;
                        for (u = 0; u < C.length; u++) {
                            e = E.lineColor = E.options.color ? E.options.color : F[0];
                            var S = {
                                color: C[u].whiskerColor ? C[u].whiskerColor : C[u].color ? E.whiskerColor ? E.whiskerColor : C[u].color : E.whiskerColor ? E.whiskerColor : e,
                                thickness: s(C[u].whiskerThickness) ? E.whiskerThickness : C[u].whiskerThickness,
                                dashType: C[u].whiskerDashType ? C[u].whiskerDashType : E.whiskerDashType,
                                length: s(C[u].whiskerLength) ? s(E.options.whiskerLength) ? t : E.options.whiskerLength : C[u].whiskerLength,
                                trimLength: s(C[u].whiskerLength) && s(E.options.whiskerLength) ? 50 : 0
                            };
                            S.length = "number" == typeof S.length ? 0 >= S.length ? 0 : S.length >= t ? t : S.length : "string" == typeof S.length ? parseInt(S.length) * t / 100 > t ? t : parseInt(S.length) * t / 100 > t : t, 
                            S.thickness = "number" == typeof S.thickness ? 0 > S.thickness ? 0 : Math.round(S.thickness) : 2;
                            var P = {
                                color: C[u].stemColor ? C[u].stemColor : C[u].color ? E.stemColor ? E.stemColor : C[u].color : E.stemColor ? E.stemColor : e,
                                thickness: C[u].stemThickness ? C[u].stemThickness : E.stemThickness,
                                dashType: C[u].stemDashType ? C[u].stemDashType : E.stemDashType
                            };
                            if (P.thickness = "number" == typeof P.thickness ? 0 > P.thickness ? 0 : Math.round(P.thickness) : 2, 
                            !((r = C[u].getTime ? C[u].x.getTime() : C[u].x) < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax) && !s(C[u].y) && C[u].y.length && "number" == typeof C[u].y[0] && "number" == typeof C[u].y[1]) {
                                var ja = a.axisX.convertValueToPixel(r);
                                b ? k = ja : h = ja, ja = a.axisY.convertValueToPixel(C[u].y[0]), b ? n = ja : q = ja, 
                                ja = a.axisY.convertValueToPixel(C[u].y[1]), b ? p = ja : g = ja, b ? (q = a.axisX.reversed ? k + (B ? w : 1) * t / 2 - (B ? D - 1 : 0) * t << 0 : k - (B ? w : 1) * t / 2 + (B ? D - 1 : 0) * t << 0, 
                                g = a.axisX.reversed ? q - t << 0 : q + t << 0) : (n = a.axisX.reversed ? h + (B ? w : 1) * t / 2 - (B ? D - 1 : 0) * t << 0 : h - (B ? w : 1) * t / 2 + (B ? D - 1 : 0) * t << 0, 
                                p = a.axisX.reversed ? n - t << 0 : n + t << 0), !b && q > g && (ja = q, q = g, 
                                g = ja), b && n > p && (ja = n, n = p, p = ja), ja = E.dataPointIds[u], this._eventManager.objectMap[ja] = {
                                    id: ja,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: z,
                                    dataPointIndex: u,
                                    x1: Math.min(n, p),
                                    y1: Math.min(q, g),
                                    x2: Math.max(p, n),
                                    y2: Math.max(g, q),
                                    isXYSwapped: b,
                                    stemProperties: P,
                                    whiskerProperties: S
                                }, y(c, Math.min(n, p), Math.min(q, g), Math.max(p, n), Math.max(g, q), e, S, P, b), 
                                v && y(this._eventManager.ghostCtx, n, q, p, g, e, S, P, b), (C[u].indexLabel || E.indexLabel || C[u].indexLabelFormatter || E.indexLabelFormatter) && (this._indexLabels.push({
                                    chartType: "error",
                                    dataPoint: C[u],
                                    dataSeries: E,
                                    indexKeyword: 0,
                                    point: {
                                        x: b ? C[u].y[1] >= C[u].y[0] ? n : p : n + (p - n) / 2,
                                        y: b ? q + (g - q) / 2 : C[u].y[1] >= C[u].y[0] ? g : q
                                    },
                                    direction: C[u].y[1] >= C[u].y[0] ? -1 : 1,
                                    bounds: {
                                        x1: b ? Math.min(n, p) : n,
                                        y1: b ? q : Math.min(q, g),
                                        x2: b ? Math.max(n, p) : p,
                                        y2: b ? g : Math.max(q, g)
                                    },
                                    color: e,
                                    axisSwapped: b
                                }), this._indexLabels.push({
                                    chartType: "error",
                                    dataPoint: C[u],
                                    dataSeries: E,
                                    indexKeyword: 1,
                                    point: {
                                        x: b ? C[u].y[1] >= C[u].y[0] ? p : n : n + (p - n) / 2,
                                        y: b ? q + (g - q) / 2 : C[u].y[1] >= C[u].y[0] ? q : g
                                    },
                                    direction: C[u].y[1] >= C[u].y[0] ? 1 : -1,
                                    bounds: {
                                        x1: b ? Math.min(n, p) : n,
                                        y1: b ? q : Math.min(q, g),
                                        x2: b ? Math.max(n, p) : p,
                                        y2: b ? g : Math.max(q, g)
                                    },
                                    color: e,
                                    axisSwapped: b
                                }));
                            }
                        }
                    }
                }
                return v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(l.x1, l.y1, l.width, l.height), this._eventManager.ghostCtx.restore()), 
                c.restore(), {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                };
            }
        }, m.prototype.renderRangeBar = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var l, u, h, k, b = null, e = this.plotArea, f = 0;
                f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(.15 * this.height, this.plotArea.height / a.plotType.totalDataSeries * .9) << 0;
                var n = a.axisX.dataInfo.minDiff;
                isFinite(n) || (n = .3 * Math.abs(a.axisX.range)), n = this.options.dataPointWidth ? this.dataPointWidth : e.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries * .9 << 0, 
                this.dataPointMaxWidth && f > l && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : 1 / 0, l)), 
                !this.dataPointMaxWidth && this.dataPointMinWidth && l < f && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -1 / 0, f)), 
                n < f && (n = f), n > l && (n = l), c.save(), v && this._eventManager.ghostCtx.save(), 
                c.beginPath(), c.rect(e.x1, e.y1, e.width, e.height), c.clip(), v && (this._eventManager.ghostCtx.beginPath(), 
                this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var q = a.dataSeriesIndexes[p], g = this.data[q], r = g.dataPoints;
                    if (0 < r.length) {
                        var m = !!(5 < n && g.bevelEnabled);
                        for (c.strokeStyle = "#4572A7 ", f = 0; f < r.length; f++) if (!((k = r[f].getTime ? r[f].x.getTime() : r[f].x) < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !s(r[f].y) && r[f].y.length && "number" == typeof r[f].y[0] && "number" == typeof r[f].y[1]) {
                            l = a.axisY.convertValueToPixel(r[f].y[0]), u = a.axisY.convertValueToPixel(r[f].y[1]), 
                            h = a.axisX.convertValueToPixel(k), h = a.axisX.reversed ? h + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + p) * n << 0 : h - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + p) * n << 0;
                            var w = a.axisX.reversed ? h - n << 0 : h + n << 0;
                            l > u && (b = l, l = u, u = b), b = r[f].color ? r[f].color : g._colorSet[f % g._colorSet.length], 
                            ca(c, l, h, u, w, b, 0, null, m, !1, !1, !1, g.fillOpacity), b = g.dataPointIds[f], 
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: q,
                                dataPointIndex: f,
                                x1: l,
                                y1: h,
                                x2: u,
                                y2: w
                            }, b = Q(b), v && ca(this._eventManager.ghostCtx, l, h, u, w, b, 0, null, !1, !1, !1, !1), 
                            (r[f].indexLabel || g.indexLabel || r[f].indexLabelFormatter || g.indexLabelFormatter) && (this._indexLabels.push({
                                chartType: "rangeBar",
                                dataPoint: r[f],
                                dataSeries: g,
                                indexKeyword: 0,
                                point: {
                                    x: r[f].y[1] >= r[f].y[0] ? l : u,
                                    y: h + (w - h) / 2
                                },
                                direction: r[f].y[1] >= r[f].y[0] ? -1 : 1,
                                bounds: {
                                    x1: Math.min(l, u),
                                    y1: h,
                                    x2: Math.max(l, u),
                                    y2: w
                                },
                                color: b
                            }), this._indexLabels.push({
                                chartType: "rangeBar",
                                dataPoint: r[f],
                                dataSeries: g,
                                indexKeyword: 1,
                                point: {
                                    x: r[f].y[1] >= r[f].y[0] ? u : l,
                                    y: h + (w - h) / 2
                                },
                                direction: r[f].y[1] >= r[f].y[0] ? 1 : -1,
                                bounds: {
                                    x1: Math.min(l, u),
                                    y1: h,
                                    x2: Math.max(l, u),
                                    y2: w
                                },
                                color: b
                            }));
                        }
                    }
                }
                return v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore()), 
                c.restore(), {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                };
            }
        }, m.prototype.renderRangeArea = function(a) {
            function d() {
                if (x) {
                    for (var a = null, c = h.length - 1; 0 <= c; c--) a = h[c], b.lineTo(a.x, a.y2), 
                    e.lineTo(a.x, a.y2);
                    if (b.closePath(), b.globalAlpha = n.fillOpacity, b.fill(), b.globalAlpha = 1, e.fill(), 
                    0 < n.lineThickness) {
                        for (b.beginPath(), b.moveTo(a.x, a.y2), c = 0; c < h.length; c++) a = h[c], b.lineTo(a.x, a.y2);
                        for (b.moveTo(h[0].x, h[0].y1), c = 0; c < h.length; c++) a = h[c], b.lineTo(a.x, a.y1);
                        b.stroke();
                    }
                    b.beginPath(), b.moveTo(r, m), e.beginPath(), e.moveTo(r, m), x = {
                        x: r,
                        y: m
                    }, (h = []).push({
                        x: r,
                        y1: m,
                        y2: s
                    });
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx, f = [], l = this.plotArea;
                b.save(), v && e.save(), b.beginPath(), b.rect(l.x1, l.y1, l.width, l.height), b.clip(), 
                v && (e.beginPath(), e.rect(l.x1, l.y1, l.width, l.height), e.clip());
                for (var u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var h = [], k = a.dataSeriesIndexes[u], n = this.data[k], p = n.dataPoints;
                    f = n.id;
                    this._eventManager.objectMap[f] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: k
                    }, f = Q(f), e.fillStyle = f;
                    f = [];
                    var r, m, s, t, q = !0, g = 0, x = null;
                    if (0 < p.length) {
                        var w = n._colorSet[g % n._colorSet.length], E = n.lineColor = n.options.lineColor || w, C = E;
                        b.fillStyle = w, b.strokeStyle = E, b.lineWidth = n.lineThickness;
                        var B = "solid";
                        if (b.setLineDash) {
                            var y = N(n.nullDataLineDashType, n.lineThickness), D = N(B = n.lineDashType, n.lineThickness);
                            b.setLineDash(D);
                        }
                        for (var S = !0; g < p.length; g++) if (!((t = p[g].x.getTime ? p[g].x.getTime() : p[g].x) < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !S))) if (null !== p[g].y && p[g].y.length && "number" == typeof p[g].y[0] && "number" == typeof p[g].y[1]) {
                            if (r = a.axisX.convertValueToPixel(t), m = a.axisY.convertValueToPixel(p[g].y[0]), 
                            s = a.axisY.convertValueToPixel(p[g].y[1]), q || S ? (n.connectNullData && !q ? (b.setLineDash && (n.options.nullDataLineDashType || B === n.lineDashType && n.lineDashType !== n.nullDataLineDashType) && (h[h.length - 1].newLineDashArray = D, 
                            B = n.nullDataLineDashType, b.setLineDash(y)), b.lineTo(r, m), v && e.lineTo(r, m), 
                            h.push({
                                x: r,
                                y1: m,
                                y2: s
                            })) : (b.beginPath(), b.moveTo(r, m), x = {
                                x: r,
                                y: m
                            }, (h = []).push({
                                x: r,
                                y1: m,
                                y2: s
                            }), v && (e.beginPath(), e.moveTo(r, m))), S = q = !1) : (b.lineTo(r, m), h.push({
                                x: r,
                                y1: m,
                                y2: s
                            }), v && e.lineTo(r, m), 0 == g % 250 && d()), t = n.dataPointIds[g], this._eventManager.objectMap[t] = {
                                id: t,
                                objectType: "dataPoint",
                                dataSeriesIndex: k,
                                dataPointIndex: g,
                                x1: r,
                                y1: m,
                                y2: s
                            }, g < p.length - 1 && (C !== (p[g].lineColor || E) || B !== (p[g].lineDashType || n.lineDashType)) && (d(), 
                            C = p[g].lineColor || E, h[h.length - 1].newStrokeStyle = C, b.strokeStyle = C, 
                            b.setLineDash && (p[g].lineDashType ? (B = p[g].lineDashType, h[h.length - 1].newLineDashArray = N(B, n.lineThickness), 
                            b.setLineDash(h[h.length - 1].newLineDashArray)) : (B = n.lineDashType, h[h.length - 1].newLineDashArray = D, 
                            b.setLineDash(D)))), 0 !== p[g].markerSize && (0 < p[g].markerSize || 0 < n.markerSize)) {
                                var P = n.getMarkerProperties(g, r, s, b);
                                f.push(P);
                                var F = Q(t);
                                v && f.push({
                                    x: r,
                                    y: s,
                                    ctx: e,
                                    type: P.type,
                                    size: P.size,
                                    color: F,
                                    borderColor: F,
                                    borderThickness: P.borderThickness
                                }), P = n.getMarkerProperties(g, r, m, b), f.push(P), F = Q(t), v && f.push({
                                    x: r,
                                    y: m,
                                    ctx: e,
                                    type: P.type,
                                    size: P.size,
                                    color: F,
                                    borderColor: F,
                                    borderThickness: P.borderThickness
                                });
                            }
                            (p[g].indexLabel || n.indexLabel || p[g].indexLabelFormatter || n.indexLabelFormatter) && (this._indexLabels.push({
                                chartType: "rangeArea",
                                dataPoint: p[g],
                                dataSeries: n,
                                indexKeyword: 0,
                                point: {
                                    x: r,
                                    y: m
                                },
                                direction: p[g].y[0] > p[g].y[1] === a.axisY.reversed ? -1 : 1,
                                color: w
                            }), this._indexLabels.push({
                                chartType: "rangeArea",
                                dataPoint: p[g],
                                dataSeries: n,
                                indexKeyword: 1,
                                point: {
                                    x: r,
                                    y: s
                                },
                                direction: p[g].y[0] > p[g].y[1] === a.axisY.reversed ? 1 : -1,
                                color: w
                            }));
                        } else S || q || d(), S = !0;
                        d(), W.drawMarkers(f);
                    }
                }
                return v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                b.clearRect(l.x1, l.y1, l.width, l.height), this._eventManager.ghostCtx.restore()), 
                b.restore(), {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                };
            }
        }, m.prototype.renderRangeSplineArea = function(a) {
            function d(a, c) {
                var d = w(s, 2);
                if (0 < d.length) {
                    if (0 < k.lineThickness) {
                        b.strokeStyle = c, b.setLineDash && b.setLineDash(a), b.beginPath(), b.moveTo(d[0].x, d[0].y);
                        for (var f = 0; f < d.length - 3; f += 3) (d[f].newStrokeStyle || d[f].newLineDashArray) && (b.stroke(), 
                        b.beginPath(), b.moveTo(d[f].x, d[f].y), d[f].newStrokeStyle && (b.strokeStyle = d[f].newStrokeStyle), 
                        d[f].newLineDashArray && b.setLineDash(d[f].newLineDashArray)), b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y);
                    }
                    for (b.beginPath(), b.moveTo(d[0].x, d[0].y), v && (e.beginPath(), e.moveTo(d[0].x, d[0].y)), 
                    f = 0; f < d.length - 3; f += 3) b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y), 
                    v && e.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y);
                    for (d = w(y, 2), b.lineTo(y[y.length - 1].x, y[y.length - 1].y), f = d.length - 1; 2 < f; f -= 3) b.bezierCurveTo(d[f - 1].x, d[f - 1].y, d[f - 2].x, d[f - 2].y, d[f - 3].x, d[f - 3].y), 
                    v && e.bezierCurveTo(d[f - 1].x, d[f - 1].y, d[f - 2].x, d[f - 2].y, d[f - 3].x, d[f - 3].y);
                    if (b.closePath(), b.globalAlpha = k.fillOpacity, b.fill(), v && (e.closePath(), 
                    e.fill()), b.globalAlpha = 1, 0 < k.lineThickness) {
                        b.strokeStyle = c, b.setLineDash && b.setLineDash(a), b.beginPath(), b.moveTo(d[0].x, d[0].y);
                        for (var g = f = 0; f < d.length - 3; f += 3, g++) (s[g].newStrokeStyle || s[g].newLineDashArray) && (b.stroke(), 
                        b.beginPath(), b.moveTo(d[f].x, d[f].y), s[g].newStrokeStyle && (b.strokeStyle = s[g].newStrokeStyle), 
                        s[g].newLineDashArray && b.setLineDash(s[g].newLineDashArray)), b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y);
                        for (d = w(s, 2), b.moveTo(d[0].x, d[0].y), g = f = 0; f < d.length - 3; f += 3, 
                        g++) (s[g].newStrokeStyle || s[g].newLineDashArray) && (b.stroke(), b.beginPath(), 
                        b.moveTo(d[f].x, d[f].y), s[g].newStrokeStyle && (b.strokeStyle = s[g].newStrokeStyle), 
                        s[g].newLineDashArray && b.setLineDash(s[g].newLineDashArray)), b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y);
                        b.stroke();
                    }
                    b.beginPath();
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx, f = [], l = this.plotArea;
                b.save(), v && e.save(), b.beginPath(), b.rect(l.x1, l.y1, l.width, l.height), b.clip(), 
                v && (e.beginPath(), e.rect(l.x1, l.y1, l.width, l.height), e.clip());
                for (var h = 0; h < a.dataSeriesIndexes.length; h++) {
                    var m = a.dataSeriesIndexes[h], k = this.data[m], n = k.dataPoints;
                    f = k.id;
                    this._eventManager.objectMap[f] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: m
                    }, f = Q(f), e.fillStyle = f;
                    f = [];
                    var q, g, r, p = 0, s = [], y = [];
                    if (0 < n.length) {
                        var t = k._colorSet[p % k._colorSet.length], x = k.lineColor = k.options.lineColor || t, z = x;
                        b.fillStyle = t, b.lineWidth = k.lineThickness;
                        var C, E = "solid";
                        if (b.setLineDash) {
                            var B = N(k.nullDataLineDashType, k.lineThickness);
                            C = N(E = k.lineDashType, k.lineThickness);
                        }
                        for (g = !1; p < n.length; p++) if (!((q = n[p].x.getTime ? n[p].x.getTime() : n[p].x) < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !g))) if (null !== n[p].y && n[p].y.length && "number" == typeof n[p].y[0] && "number" == typeof n[p].y[1]) {
                            q = a.axisX.convertValueToPixel(q), g = a.axisY.convertValueToPixel(n[p].y[0]), 
                            r = a.axisY.convertValueToPixel(n[p].y[1]);
                            var D = k.dataPointIds[p];
                            if (this._eventManager.objectMap[D] = {
                                id: D,
                                objectType: "dataPoint",
                                dataSeriesIndex: m,
                                dataPointIndex: p,
                                x1: q,
                                y1: g,
                                y2: r
                            }, s[s.length] = {
                                x: q,
                                y: g
                            }, y[y.length] = {
                                x: q,
                                y: r
                            }, p < n.length - 1 && (z !== (n[p].lineColor || x) || E !== (n[p].lineDashType || k.lineDashType)) && (z = n[p].lineColor || x, 
                            s[s.length - 1].newStrokeStyle = z, b.setLineDash && (n[p].lineDashType ? (E = n[p].lineDashType, 
                            s[s.length - 1].newLineDashArray = N(E, k.lineThickness)) : (E = k.lineDashType, 
                            s[s.length - 1].newLineDashArray = C))), 0 !== n[p].markerSize && (0 < n[p].markerSize || 0 < k.markerSize)) {
                                var F = k.getMarkerProperties(p, q, g, b);
                                f.push(F);
                                var S = Q(D);
                                v && f.push({
                                    x: q,
                                    y: g,
                                    ctx: e,
                                    type: F.type,
                                    size: F.size,
                                    color: S,
                                    borderColor: S,
                                    borderThickness: F.borderThickness
                                }), F = k.getMarkerProperties(p, q, r, b), f.push(F), S = Q(D), v && f.push({
                                    x: q,
                                    y: r,
                                    ctx: e,
                                    type: F.type,
                                    size: F.size,
                                    color: S,
                                    borderColor: S,
                                    borderThickness: F.borderThickness
                                });
                            }
                            (n[p].indexLabel || k.indexLabel || n[p].indexLabelFormatter || k.indexLabelFormatter) && (this._indexLabels.push({
                                chartType: "rangeSplineArea",
                                dataPoint: n[p],
                                dataSeries: k,
                                indexKeyword: 0,
                                point: {
                                    x: q,
                                    y: g
                                },
                                direction: n[p].y[0] <= n[p].y[1] ? -1 : 1,
                                color: t
                            }), this._indexLabels.push({
                                chartType: "rangeSplineArea",
                                dataPoint: n[p],
                                dataSeries: k,
                                indexKeyword: 1,
                                point: {
                                    x: q,
                                    y: r
                                },
                                direction: n[p].y[0] <= n[p].y[1] ? 1 : -1,
                                color: t
                            })), g = !1;
                        } else 0 < p && !g && (k.connectNullData ? b.setLineDash && 0 < s.length && (k.options.nullDataLineDashType || !n[p - 1].lineDashType) && (s[s.length - 1].newLineDashArray = B, 
                        E = k.nullDataLineDashType) : (d(C, x), s = [], y = [])), g = !0;
                        d(C, x), W.drawMarkers(f);
                    }
                }
                return v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                b.clearRect(l.x1, l.y1, l.width, l.height), this._eventManager.ghostCtx.restore()), 
                b.restore(), {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                };
            }
        }, m.prototype.renderWaterfall = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h, m, k, n, b = this._eventManager.ghostCtx, e = null, f = this.plotArea, l = 0, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0);
                l = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(.15 * this.width, this.plotArea.width / a.plotType.totalDataSeries * .9) << 0;
                var q = a.axisX.dataInfo.minDiff;
                isFinite(q) || (q = .3 * Math.abs(a.axisX.range)), q = this.options.dataPointWidth ? this.dataPointWidth : f.width * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) : Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries * .6 << 0, 
                this.dataPointMaxWidth && l > m && (l = Math.min(this.options.dataPointWidth ? this.dataPointWidth : 1 / 0, m)), 
                !this.dataPointMaxWidth && this.dataPointMinWidth && m < l && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -1 / 0, l)), 
                q < l && (q = l), q > m && (q = m), c.save(), v && this._eventManager.ghostCtx.save(), 
                c.beginPath(), c.rect(f.x1, f.y1, f.width, f.height), c.clip(), v && (this._eventManager.ghostCtx.beginPath(), 
                this._eventManager.ghostCtx.rect(f.x1, f.y1, f.width, f.height), this._eventManager.ghostCtx.clip());
                for (var g = 0; g < a.dataSeriesIndexes.length; g++) {
                    var r = a.dataSeriesIndexes[g], s = this.data[r], w = s.dataPoints;
                    e = s._colorSet[0];
                    s.risingColor = s.options.risingColor ? s.options.risingColor : e, s.fallingColor = s.options.fallingColor ? s.options.fallingColor : "#e40a0a";
                    var t = "number" == typeof s.options.lineThickness ? Math.round(s.lineThickness) : 1, x = 1 == Math.round(t) % 2 ? -.5 : 0;
                    if (0 < w.length) {
                        var z = !!(5 < q && s.bevelEnabled), E = !1, C = null, B = null;
                        for (l = 0; l < w.length; l++) if (n = w[l].getTime ? w[l].x.getTime() : w[l].x, 
                        "number" != typeof w[l].y) {
                            if (0 < l && !E && s.connectNullData) var y = s.options.nullDataLineDashType || !w[l - 1].lineDashType ? s.nullDataLineDashType : w[l - 1].lineDashType;
                            E = !0;
                        } else {
                            h = a.axisX.convertValueToPixel(n), m = 0 === s.dataPointEOs[l].cumulativeSum ? p : a.axisY.convertValueToPixel(s.dataPointEOs[l].cumulativeSum), 
                            k = 0 === s.dataPointEOs[l].cumulativeSumYStartValue ? p : a.axisY.convertValueToPixel(s.dataPointEOs[l].cumulativeSumYStartValue), 
                            h = a.axisX.reversed ? h + a.plotType.totalDataSeries * q / 2 - (a.previousDataSeriesCount + g) * q << 0 : h - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount + g) * q << 0;
                            var D = a.axisX.reversed ? h - q << 0 : h + q << 0;
                            m > k && (e = m, m = k, k = e), a.axisY.reversed && (e = m, m = k, k = e), e = s.dataPointIds[l], 
                            this._eventManager.objectMap[e] = {
                                id: e,
                                objectType: "dataPoint",
                                dataSeriesIndex: r,
                                dataPointIndex: l,
                                x1: h,
                                y1: m,
                                x2: D,
                                y2: k
                            };
                            var S = w[l].color ? w[l].color : 0 < w[l].y ? s.risingColor : s.fallingColor;
                            ca(c, h, m, D, k, S, 0, S, z, z, !1, !1, s.fillOpacity), e = Q(e), v && ca(this._eventManager.ghostCtx, h, m, D, k, e, 0, null, !1, !1, !1, !1);
                            var P;
                            S = h;
                            P = void 0 !== w[l].isIntermediateSum && !0 === w[l].isIntermediateSum || void 0 !== w[l].isCumulativeSum && !0 === w[l].isCumulativeSum ? 0 < w[l].y ? m : k : 0 < w[l].y ? k : m, 
                            0 < l && C && (!E || s.connectNullData) && (E && c.setLineDash && c.setLineDash(N(y, t)), 
                            c.beginPath(), c.moveTo(C, B - x), c.lineTo(S, P - x), 0 < t && c.stroke(), v && (b.beginPath(), 
                            b.moveTo(C, B - x), b.lineTo(S, P - x), 0 < t && b.stroke())), E = !1, C = D, B = 0 < w[l].y ? m : k, 
                            S = w[l].lineDashType ? w[l].lineDashType : s.options.lineDashType ? s.options.lineDashType : "shortDash", 
                            c.strokeStyle = w[l].lineColor ? w[l].lineColor : s.options.lineColor ? s.options.lineColor : "#9e9e9e", 
                            c.lineWidth = t, c.setLineDash && (S = N(S, t), c.setLineDash(S)), (w[l].indexLabel || s.indexLabel || w[l].indexLabelFormatter || s.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "waterfall",
                                dataPoint: w[l],
                                dataSeries: s,
                                point: {
                                    x: h + (D - h) / 2,
                                    y: 0 <= w[l].y ? m : k
                                },
                                direction: 0 > w[l].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: h,
                                    y1: Math.min(m, k),
                                    x2: D,
                                    y2: Math.max(m, k)
                                },
                                color: e
                            });
                        }
                    }
                }
                return v && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), 
                a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), 
                this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), 
                c.clearRect(f.x1, f.y1, f.width, f.height), this._eventManager.ghostCtx.restore()), 
                c.restore(), {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                };
            }
        };
        var X = function(a, d, c, b, e, f, l, h, m) {
            if (!(0 > c)) {
                if (void 0 === h && (h = 1), !v) {
                    var k = Number((l % (2 * Math.PI)).toFixed(8));
                    Number((f % (2 * Math.PI)).toFixed(8)) === k && (l -= 1e-4);
                }
                a.save(), a.globalAlpha = h, "pie" === e ? (a.beginPath(), a.moveTo(d.x, d.y), a.arc(d.x, d.y, c, f, l, !1), 
                a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), 
                a.arc(d.x, d.y, c, f, l, !1), 0 <= m && a.arc(d.x, d.y, m * c, l, f, !0), a.closePath(), 
                a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.fill()), a.globalAlpha = 1, 
                a.restore();
            }
        };
        m.prototype.renderPie = function(a) {
            function c(a) {
                var b = m.plotArea.ctx;
                for (b.clearRect(q.x1, q.y1, q.width, q.height), b.fillStyle = m.backgroundColor, 
                b.fillRect(q.x1, q.y1, q.width, q.height), b = 0; b < n.length; b++) {
                    var c = g[b].startAngle, d = g[b].endAngle;
                    if (d > c) {
                        var e = .07 * B * Math.cos(g[b].midAngle), f = .07 * B * Math.sin(g[b].midAngle), l = !1;
                        n[b].exploded ? (1e-9 < Math.abs(g[b].center.x - (z.x + e)) || 1e-9 < Math.abs(g[b].center.y - (z.y + f))) && (g[b].center.x = z.x + e * a, 
                        g[b].center.y = z.y + f * a, l = !0) : (0 < Math.abs(g[b].center.x - z.x) || 0 < Math.abs(g[b].center.y - z.y)) && (g[b].center.x = z.x + e * (1 - a), 
                        g[b].center.y = z.y + f * (1 - a), l = !0), l && ((e = {}).dataSeries = k, e.dataPoint = k.dataPoints[b], 
                        e.index = b, m.toolTip.highlightObjects([ e ])), X(m.plotArea.ctx, g[b].center, g[b].radius, n[b].color ? n[b].color : k._colorSet[b % k._colorSet.length], k.type, c, d, k.fillOpacity, g[b].percentInnerRadius);
                    }
                }
                for ((a = m.plotArea.ctx).save(), a.fillStyle = "black", a.strokeStyle = "grey", 
                a.textBaseline = "middle", a.lineJoin = "round", b = b = 0; b < n.length; b++) (c = g[b]).indexLabelText && (c.indexLabelTextBlock.y -= c.indexLabelTextBlock.height / 2, 
                d = 0, d = "left" === c.hemisphere ? "inside" !== k.indexLabelPlacement ? -(c.indexLabelTextBlock.width + p) : -c.indexLabelTextBlock.width / 2 : "inside" !== k.indexLabelPlacement ? p : -c.indexLabelTextBlock.width / 2, 
                c.indexLabelTextBlock.x += d, c.indexLabelTextBlock.render(!0), c.indexLabelTextBlock.x -= d, 
                c.indexLabelTextBlock.y += c.indexLabelTextBlock.height / 2, "inside" !== c.indexLabelPlacement && 0 < c.indexLabelLineThickness && (d = c.center.x + B * Math.cos(c.midAngle), 
                e = c.center.y + B * Math.sin(c.midAngle), a.strokeStyle = c.indexLabelLineColor, 
                a.lineWidth = c.indexLabelLineThickness, a.setLineDash && a.setLineDash(N(c.indexLabelLineDashType, c.indexLabelLineThickness)), 
                a.beginPath(), a.moveTo(d, e), a.lineTo(c.indexLabelTextBlock.x, c.indexLabelTextBlock.y), 
                a.lineTo(c.indexLabelTextBlock.x + ("left" === c.hemisphere ? -p : p), c.indexLabelTextBlock.y), 
                a.stroke()), a.lineJoin = "miter");
                a.save();
            }
            function b(a, b) {
                var c = 0, d = (c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2, 
                a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2), e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2, f = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
                return b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? e - d : c - f;
            }
            function e(a) {
                for (var c = null, d = 1; d < n.length; d++) {
                    if (c = (a + d + g.length) % g.length, g[c].hemisphere !== g[a].hemisphere) {
                        c = null;
                        break;
                    }
                    if (g[c].indexLabelText && c !== a && (0 > b(g[c], g[a]) || ("right" === g[a].hemisphere ? g[c].indexLabelTextBlock.y >= g[a].indexLabelTextBlock.y : g[c].indexLabelTextBlock.y <= g[a].indexLabelTextBlock.y))) break;
                    c = null;
                }
                return c;
            }
            function f(a, c, d) {
                if (1e3 < (d = (d || 0) + 1)) return 0;
                c = c || 0;
                var k = 0, l = z.y - 1 * v, p = z.y + 1 * v;
                if (0 <= a && a < n.length) {
                    var h = g[a];
                    if (0 > c && h.indexLabelTextBlock.y < l || 0 < c && h.indexLabelTextBlock.y > p) return 0;
                    var q = 0, u = 0;
                    u = q = q = 0;
                    for (0 > c ? h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 > l && h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 + c < l && (c = -(l - (h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 + c))) : h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2 < l && h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2 + c > p && (c = h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2 + c - p), 
                    c = h.indexLabelTextBlock.y + c, l = 0, l = "right" === h.hemisphere ? z.x + Math.sqrt(Math.pow(v, 2) - Math.pow(c - z.y, 2)) : z.x - Math.sqrt(Math.pow(v, 2) - Math.pow(c - z.y, 2)), 
                    u = z.x + B * Math.cos(h.midAngle), q = z.y + B * Math.sin(h.midAngle), q = Math.sqrt(Math.pow(l - u, 2) + Math.pow(c - q, 2)), 
                    u = Math.acos(B / v), c = (q = Math.acos((v * v + B * B - q * q) / (2 * B * v))) < u ? c - h.indexLabelTextBlock.y : 0, 
                    l = null, p = 1; p < n.length; p++) {
                        if (l = (a - p + g.length) % g.length, g[l].hemisphere !== g[a].hemisphere) {
                            l = null;
                            break;
                        }
                        if (g[l].indexLabelText && g[l].hemisphere === g[a].hemisphere && l !== a && (0 > b(g[l], g[a]) || ("right" === g[a].hemisphere ? g[l].indexLabelTextBlock.y <= g[a].indexLabelTextBlock.y : g[l].indexLabelTextBlock.y >= g[a].indexLabelTextBlock.y))) break;
                        l = null;
                    }
                    u = l, q = e(a), p = l = 0, 0 > c ? (k = c, null !== (p = "right" === h.hemisphere ? u : q) && (u = -c, 
                    (c = h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 - (g[p].indexLabelTextBlock.y + g[p].indexLabelTextBlock.height / 2)) - u < r && (+(p = f(p, l = -u, d + 1)).toFixed(x) > +l.toFixed(x) && (k = c > r ? -(c - r) : -(u - (p - l)))))) : 0 < c && (k = c, 
                    null !== (p = "right" === h.hemisphere ? q : u) && (u = c, (c = g[p].indexLabelTextBlock.y - g[p].indexLabelTextBlock.height / 2 - (h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2)) - u < r && (+(p = f(p, l = u, d + 1)).toFixed(x) < +l.toFixed(x) && (k = c > r ? c - r : u - (l - p))))), 
                    k && (d = h.indexLabelTextBlock.y + k, c = 0, c = "right" === h.hemisphere ? z.x + Math.sqrt(Math.pow(v, 2) - Math.pow(d - z.y, 2)) : z.x - Math.sqrt(Math.pow(v, 2) - Math.pow(d - z.y, 2)), 
                    h.midAngle > Math.PI / 2 - t && h.midAngle < Math.PI / 2 + t ? (l = (a - 1 + g.length) % g.length, 
                    l = g[l], a = g[(a + 1 + g.length) % g.length], "left" === h.hemisphere && "right" === l.hemisphere && c > l.indexLabelTextBlock.x ? c = l.indexLabelTextBlock.x - 15 : "right" === h.hemisphere && "left" === a.hemisphere && c < a.indexLabelTextBlock.x && (c = a.indexLabelTextBlock.x + 15)) : h.midAngle > 3 * Math.PI / 2 - t && h.midAngle < 3 * Math.PI / 2 + t && (l = (a - 1 + g.length) % g.length, 
                    l = g[l], a = g[(a + 1 + g.length) % g.length], "right" === h.hemisphere && "left" === l.hemisphere && c < l.indexLabelTextBlock.x ? c = l.indexLabelTextBlock.x + 15 : "left" === h.hemisphere && "right" === a.hemisphere && c > a.indexLabelTextBlock.x && (c = a.indexLabelTextBlock.x - 15)), 
                    h.indexLabelTextBlock.y = d, h.indexLabelTextBlock.x = c, h.indexLabelAngle = Math.atan2(h.indexLabelTextBlock.y - z.y, h.indexLabelTextBlock.x - z.x));
                }
                return k;
            }
            function l() {
                (a = m.plotArea.ctx).fillStyle = "grey", a.strokeStyle = "grey", a.font = "16px Arial", 
                a.textBaseline = "middle";
                var c = a = 0, d = 0, l = !0;
                for (c = 0; 10 > c && (1 > c || 0 < d); c++) {
                    if ((k.radius || !k.radius && void 0 !== k.innerRadius && null !== k.innerRadius && B - d <= y) && (l = !1), 
                    l && (B -= d), d = 0, "inside" !== k.indexLabelPlacement) {
                        for (v = B * w, a = 0; a < n.length; a++) {
                            (h = g[a]).indexLabelTextBlock.x = z.x + v * Math.cos(h.midAngle), h.indexLabelTextBlock.y = z.y + v * Math.sin(h.midAngle), 
                            h.indexLabelAngle = h.midAngle, h.radius = B, h.percentInnerRadius = D;
                        }
                        for (var u, s, a = 0; a < n.length; a++) {
                            var h = g[a], t = e(a);
                            if (null !== t) {
                                u = g[a], s = g[t];
                                var E = 0;
                                if (0 > (E = b(u, s) - r)) {
                                    for (var C = s = 0, F = 0; F < n.length; F++) F !== a && g[F].hemisphere === h.hemisphere && (g[F].indexLabelTextBlock.y < h.indexLabelTextBlock.y ? s++ : C++);
                                    C = -1 * (E - (s = E / (s + C || 1) * C));
                                    var H = F = 0;
                                    "right" === h.hemisphere ? (F = f(a, s), +(H = f(t, C = -1 * (E - F))).toFixed(x) < +C.toFixed(x) && +F.toFixed(x) <= +s.toFixed(x) && f(a, -(C - H))) : (F = f(t, s), 
                                    +(H = f(a, C = -1 * (E - F))).toFixed(x) < +C.toFixed(x) && +F.toFixed(x) <= +s.toFixed(x) && f(t, -(C - H)));
                                }
                            }
                        }
                    } else for (a = 0; a < n.length; a++) h = g[a], v = "pie" === k.type ? .7 * B : .8 * B, 
                    t = z.x + v * Math.cos(h.midAngle), s = z.y + v * Math.sin(h.midAngle), h.indexLabelTextBlock.x = t, 
                    h.indexLabelTextBlock.y = s;
                    for (a = 0; a < n.length; a++) 0 !== (t = (h = g[a]).indexLabelTextBlock.measureText()).height && 0 !== t.width && (t = t = 0, 
                    "right" === h.hemisphere ? (t = q.x2 - (h.indexLabelTextBlock.x + h.indexLabelTextBlock.width + p), 
                    t *= -1) : t = q.x1 - (h.indexLabelTextBlock.x - h.indexLabelTextBlock.width - p), 
                    0 < t && (!l && h.indexLabelText && (s = "right" === h.hemisphere ? q.x2 - h.indexLabelTextBlock.x : h.indexLabelTextBlock.x - q.x1, 
                    .3 * h.indexLabelTextBlock.maxWidth > s ? h.indexLabelText = "" : h.indexLabelTextBlock.maxWidth = .85 * s, 
                    .3 * h.indexLabelTextBlock.maxWidth < s && (h.indexLabelTextBlock.x -= "right" === h.hemisphere ? 2 : -2)), 
                    Math.abs(h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 - z.y) < B || Math.abs(h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2 - z.y) < B) && (9 < (t /= Math.abs(Math.cos(h.indexLabelAngle))) && (t *= .3), 
                    t > d && (d = t)), t = t = 0, 0 < h.indexLabelAngle && h.indexLabelAngle < Math.PI ? (t = q.y2 - (h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2 + 5), 
                    t *= -1) : t = q.y1 - (h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 - 5), 
                    0 < t && (!l && h.indexLabelText && (0 === f(a, t * (s = 0 < h.indexLabelAngle && h.indexLabelAngle < Math.PI ? -1 : 1)) && f(a, 2 * s)), 
                    Math.abs(h.indexLabelTextBlock.x - z.x) < B && (9 < (t /= Math.abs(Math.sin(h.indexLabelAngle))) && (t *= .3), 
                    t > d && (d = t))));
                    var K = function(a, b, c) {
                        for (var d = [], e = 0; d.push(g[b]), b !== c; b = (b + 1 + n.length) % n.length) ;
                        for (d.sort((function(a, b) {
                            return a.y - b.y;
                        })), b = 0; b < d.length && (c = d[b], e < .7 * a); b++) e += c.indexLabelTextBlock.height, 
                        c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                    };
                    !function() {
                        for (var a = -1, c = -1, d = 0, f = !1, k = 0; k < n.length; k++) if (f = !1, (u = g[k]).indexLabelText) {
                            var l = e(k);
                            if (null !== l) {
                                var q, h = g[l];
                                if (E = 0, q = 0 > (E = b(u, h))) {
                                    q = u.indexLabelTextBlock.x;
                                    var m = u.indexLabelTextBlock.y - u.indexLabelTextBlock.height / 2, r = u.indexLabelTextBlock.y + u.indexLabelTextBlock.height / 2, s = h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2, t = h.indexLabelTextBlock.x + h.indexLabelTextBlock.width, A = h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2;
                                    q = !(u.indexLabelTextBlock.x + u.indexLabelTextBlock.width < h.indexLabelTextBlock.x - p || q > t + p || m > A + p || r < s - p);
                                }
                                q ? (0 > a && (a = k), l !== a && (c = l, d += -E), 0 == k % Math.max(n.length / 10, 3) && (f = !0)) : f = !0, 
                                f && 0 < d && 0 <= a && 0 <= c && (K(d, a, c), c = a = -1, d = 0);
                            }
                        }
                        0 < d && K(d, a, c);
                    }();
                }
            }
            function h() {
                if (m.plotArea.layoutManager.reset(), m.title && (m.title.dockInsidePlotArea || "center" === m.title.horizontalAlign && "center" === m.title.verticalAlign) && m.title.render(), 
                m.subtitles) for (var a = 0; a < m.subtitles.length; a++) {
                    var b = m.subtitles[a];
                    (b.dockInsidePlotArea || "center" === b.horizontalAlign && "center" === b.verticalAlign) && b.render();
                }
                m.legend && (m.legend.dockInsidePlotArea || "center" === m.legend.horizontalAlign && "center" === m.legend.verticalAlign) && (m.legend.setLayout(), 
                m.legend.render());
            }
            var m = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var v, k = this.data[a.dataSeriesIndexes[0]], n = k.dataPoints, p = 10, q = this.plotArea, g = k.dataPointEOs, r = 2, w = 1.3, t = 20 / 180 * Math.PI, x = 6, z = {
                    x: (q.x2 + q.x1) / 2,
                    y: (q.y2 + q.y1) / 2
                }, E = 0;
                a = !1;
                for (var C = 0; C < n.length; C++) E += Math.abs(n[C].y), !a && void 0 !== n[C].indexLabel && null !== n[C].indexLabel && 0 < n[C].indexLabel.toString().length && (a = !0), 
                !a && void 0 !== n[C].label && null !== n[C].label && 0 < n[C].label.toString().length && (a = !0);
                if (0 !== E) {
                    a = a || void 0 !== k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length;
                    var B = "inside" !== k.indexLabelPlacement && a ? .75 * Math.min(q.width, q.height) / 2 : .92 * Math.min(q.width, q.height) / 2;
                    k.radius && (B = Ra(k.radius, B));
                    var y = void 0 !== k.innerRadius && null !== k.innerRadius ? Ra(k.innerRadius, B) : .7 * B;
                    k.radius = B, "doughnut" === k.type && (k.innerRadius = y);
                    var D = Math.min(y / B, (B - 1) / B);
                    this.pieDoughnutClickHandler = function(a) {
                        m.isAnimating || !s(a.dataSeries.explodeOnClick) && !a.dataSeries.explodeOnClick || ((a = a.dataPoint).exploded = !a.exploded, 
                        1 < this.dataPoints.length && m._animator.animate(0, 500, (function(a) {
                            c(a), h(), m.dispatchEvent("dataAnimationIterationEnd", {
                                chart: m
                            }), m.dispatchEvent("dataAnimationEnd", {
                                chart: m
                            });
                        })));
                    }, function d() {
                        if (k && n) {
                            for (var a = 0, b = 0, c = 0, d = 0, e = 0; e < n.length; e++) {
                                var f = n[e], l = k.dataPointIds[e];
                                g[e].id = l, g[e].objectType = "dataPoint", g[e].dataPointIndex = e, g[e].dataSeriesIndex = 0;
                                var p = g[e], h = {
                                    percent: null,
                                    total: null
                                }, u = null;
                                h = m.getPercentAndTotal(k, f), (k.indexLabelFormatter || f.indexLabelFormatter) && (u = {
                                    chart: m.options,
                                    dataSeries: k,
                                    dataPoint: f,
                                    total: h.total,
                                    percent: h.percent
                                }), h = f.indexLabelFormatter ? f.indexLabelFormatter(u) : f.indexLabel ? m.replaceKeywordsWithValue(f.indexLabel, f, k, e) : k.indexLabelFormatter ? k.indexLabelFormatter(u) : k.indexLabel ? m.replaceKeywordsWithValue(k.indexLabel, f, k, e) : f.label ? f.label : "", 
                                m._eventManager.objectMap[l] = p, p.center = {
                                    x: z.x,
                                    y: z.y
                                }, p.y = f.y, p.radius = B, p.percentInnerRadius = D, p.indexLabelText = h, p.indexLabelPlacement = k.indexLabelPlacement, 
                                p.indexLabelLineColor = f.indexLabelLineColor ? f.indexLabelLineColor : k.options.indexLabelLineColor ? k.options.indexLabelLineColor : f.color ? f.color : k._colorSet[e % k._colorSet.length], 
                                p.indexLabelLineThickness = s(f.indexLabelLineThickness) ? k.indexLabelLineThickness : f.indexLabelLineThickness, 
                                p.indexLabelLineDashType = f.indexLabelLineDashType ? f.indexLabelLineDashType : k.indexLabelLineDashType, 
                                p.indexLabelFontColor = f.indexLabelFontColor ? f.indexLabelFontColor : k.indexLabelFontColor, 
                                p.indexLabelFontStyle = f.indexLabelFontStyle ? f.indexLabelFontStyle : k.indexLabelFontStyle, 
                                p.indexLabelFontWeight = f.indexLabelFontWeight ? f.indexLabelFontWeight : k.indexLabelFontWeight, 
                                p.indexLabelFontSize = s(f.indexLabelFontSize) ? k.indexLabelFontSize : f.indexLabelFontSize, 
                                p.indexLabelFontFamily = f.indexLabelFontFamily ? f.indexLabelFontFamily : k.indexLabelFontFamily, 
                                p.indexLabelBackgroundColor = f.indexLabelBackgroundColor ? f.indexLabelBackgroundColor : k.options.indexLabelBackgroundColor ? k.options.indexLabelBackgroundColor : k.indexLabelBackgroundColor, 
                                p.indexLabelMaxWidth = f.indexLabelMaxWidth ? f.indexLabelMaxWidth : k.indexLabelMaxWidth ? k.indexLabelMaxWidth : .33 * q.width, 
                                p.indexLabelWrap = void 0 !== f.indexLabelWrap ? f.indexLabelWrap : k.indexLabelWrap, 
                                p.startAngle = 0 === e ? k.startAngle ? k.startAngle / 180 * Math.PI : 0 : g[e - 1].endAngle, 
                                p.startAngle = (p.startAngle + 2 * Math.PI) % (2 * Math.PI), p.endAngle = p.startAngle + 2 * Math.PI / E * Math.abs(f.y), 
                                f = ((f = (p.endAngle + p.startAngle) / 2) + 2 * Math.PI) % (2 * Math.PI), p.midAngle = f, 
                                p.midAngle > Math.PI / 2 - t && p.midAngle < Math.PI / 2 + t ? ((0 === a || g[c].midAngle > p.midAngle) && (c = e), 
                                a++) : p.midAngle > 3 * Math.PI / 2 - t && p.midAngle < 3 * Math.PI / 2 + t && ((0 === b || g[d].midAngle > p.midAngle) && (d = e), 
                                b++), p.hemisphere = f > Math.PI / 2 && f <= 3 * Math.PI / 2 ? "left" : "right", 
                                p.indexLabelTextBlock = new ia(m.plotArea.ctx, {
                                    fontSize: p.indexLabelFontSize,
                                    fontFamily: p.indexLabelFontFamily,
                                    fontColor: p.indexLabelFontColor,
                                    fontStyle: p.indexLabelFontStyle,
                                    fontWeight: p.indexLabelFontWeight,
                                    horizontalAlign: "left",
                                    backgroundColor: p.indexLabelBackgroundColor,
                                    maxWidth: p.indexLabelMaxWidth,
                                    maxHeight: p.indexLabelWrap ? 5 * p.indexLabelFontSize : 1.5 * p.indexLabelFontSize,
                                    text: p.indexLabelText,
                                    padding: 0,
                                    textBaseline: "top"
                                }), p.indexLabelTextBlock.measureText();
                            }
                            for (l = f = 0, h = !1, e = 0; e < n.length; e++) p = g[(c + e) % n.length], 1 < a && p.midAngle > Math.PI / 2 - t && p.midAngle < Math.PI / 2 + t && (f <= a / 2 && !h ? (p.hemisphere = "right", 
                            f++) : (p.hemisphere = "left", h = !0));
                            for (h = !1, e = 0; e < n.length; e++) p = g[(d + e) % n.length], 1 < b && p.midAngle > 3 * Math.PI / 2 - t && p.midAngle < 3 * Math.PI / 2 + t && (l <= b / 2 && !h ? (p.hemisphere = "left", 
                            l++) : (p.hemisphere = "right", h = !0));
                        }
                    }(), l(), l(), l(), l(), this.disableToolTip = !0, this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, (function(a) {
                        (b = m.plotArea.ctx).clearRect(q.x1, q.y1, q.width, q.height), b.fillStyle = m.backgroundColor, 
                        b.fillRect(q.x1, q.y1, q.width, q.height);
                        for (var b = g[0].startAngle + 2 * Math.PI * a, c = 0; c < n.length; c++) {
                            var d = 0 === c ? g[c].startAngle : e, e = d + (g[c].endAngle - g[c].startAngle), f = !1;
                            e > b && (e = b, f = !0);
                            var l = n[c].color ? n[c].color : k._colorSet[c % k._colorSet.length];
                            if (e > d && X(m.plotArea.ctx, g[c].center, g[c].radius, l, k.type, d, e, k.fillOpacity, g[c].percentInnerRadius), 
                            f) break;
                        }
                        h(), m.dispatchEvent("dataAnimationIterationEnd", {
                            chart: m
                        }), 1 <= a && m.dispatchEvent("dataAnimationEnd", {
                            chart: m
                        });
                    }), (function() {
                        m.disableToolTip = !1, m._animator.animate(0, m.animatedRender ? 500 : 0, (function(a) {
                            c(a), h(), m.dispatchEvent("dataAnimationIterationEnd", {
                                chart: m
                            });
                        })), m.dispatchEvent("dataAnimationEnd", {
                            chart: m
                        });
                    }));
                }
            }
        };
        var pa = function(a, d, c, b) {
            void 0 === c && (c = 1), 0 >= Math.round(d.y4 - d.y1) || (a.save(), a.globalAlpha = c, 
            a.beginPath(), a.moveTo(Math.round(d.x1), Math.round(d.y1)), a.lineTo(Math.round(d.x2), Math.round(d.y2)), 
            a.lineTo(Math.round(d.x3), Math.round(d.y3)), a.lineTo(Math.round(d.x4), Math.round(d.y4)), 
            "undefined" !== d.x5 && (a.lineTo(Math.round(d.x5), Math.round(d.y5)), a.lineTo(Math.round(d.x6), Math.round(d.y6))), 
            a.closePath(), a.fillStyle = b || d.color, a.fill(), a.globalAplha = 1, a.restore());
        };
        m.prototype.renderFunnel = function(a) {
            function f() {
                var a, b, c, d;
                if ("inside" !== t.indexLabelPlacement) for (var e = 0; e < O.length; e++) 0 == I[e].textBlock.text.length ? I[e].isDirty = !0 : (c = void 0 !== (a = O[e]).x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, 
                b = t.reversed ? void 0 !== a.x5 && c > wa ? g(c).x2 + 1 : (a.x2 + a.x3) / 2 + 1 : void 0 !== a.x5 ? c < wa ? g(c).x2 + 1 : (a.x4 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1, 
                I[e].textBlock.x = b + V, I[e].textBlock.y = c - I[e].height / 2, t.reversed ? (I[e].textBlock.y + I[e].height > ma + E && (I[e].textBlock.y = ma + E - I[e].height), 
                I[e].textBlock.y < ra - E && (I[e].textBlock.y = ra - E)) : (I[e].textBlock.y < ma - E && (I[e].textBlock.y = ma - E), 
                I[e].textBlock.y + I[e].height > ra + E && (I[e].textBlock.y = ra + E - I[e].height))); else for (e = 0; e < O.length; e++) 0 == I[e].textBlock.text.length ? I[e].isDirty = !0 : (b = (a = O[e]).height, 
                c = I[e].height, d = I[e].width, b >= c ? (b = e != ca ? (a.x4 + a.x3) / 2 - d / 2 : (a.x5 + a.x4) / 2 - d / 2, 
                c = e != ca ? (a.y1 + a.y3) / 2 - c / 2 : (a.y1 + a.y4) / 2 - c / 2, I[e].textBlock.x = b, 
                I[e].textBlock.y = c) : I[e].isDirty = !0);
            }
            function h(a, b) {
                return (b < O.length ? I[b].textBlock.y : t.reversed ? ma + E : ra + E) - (0 > a ? t.reversed ? ra - E : ma - E : I[a].textBlock.y + I[a].height + da);
            }
            function m(a, b, c) {
                var d, e, g, l = [], h = E, p = [];
                if (-1 !== b && (0 <= X.indexOf(b) ? (e = X.indexOf(b), X.splice(e, 1)) : (X.push(b), 
                X = X.sort((function(a, b) {
                    return a - b;
                })))), 0 === X.length) l = ga; else {
                    e = E * (1 != X.length || 0 != X[0] && X[0] != O.length - 1 ? 2 : 1) / function k() {
                        for (var a = 0, b = 0; b < O.length - 1; b++) (0 <= X.indexOf(b) || 0 <= X.indexOf(b + 1)) && a++;
                        return a;
                    }();
                    for (var q = 0; q < O.length; q++) {
                        if (1 == X.length && 0 == X[0]) {
                            if (0 === q) {
                                l.push(ga[q]), d = h;
                                continue;
                            }
                        } else 0 === q && (d = -1 * h);
                        l.push(ga[q] + d), (0 <= X.indexOf(q) || q < O.length && 0 <= X.indexOf(q + 1)) && (d += e);
                    }
                }
                g = function() {
                    for (var a = [], b = 0; b < O.length; b++) a.push(l[b] - O[b].y1);
                    return a;
                }();
                (new Date).getTime();
                var u_changeSection = function(a) {
                    for (var b, c, d = 0; d < O.length; d++) b = g[d], c = O[d], b *= a, void 0 === p[d] && (p[d] = 0), 
                    0 > p && (p *= -1), c.y1 += b - p[d], c.y2 += b - p[d], c.y3 += b - p[d], c.y4 += b - p[d], 
                    c.y5 && (c.y5 += b - p[d], c.y6 += b - p[d]), p[d] = b;
                };
                a._animator.animate(0, c, (function(c) {
                    var d = a.plotArea.ctx || a.ctx;
                    ha = !0, d.clearRect(z.x1, z.y1, z.x2 - z.x1, z.y2 - z.y1), d.fillStyle = a.backgroundColor, 
                    d.fillRect(z.x1, z.y1, z.width, z.height), u_changeSection(c, b);
                    var e = {};
                    for (e.dataSeries = t, e.dataPoint = t.reversed ? t.dataPoints[x.length - 1 - b] : t.dataPoints[b], 
                    e.index = t.reversed ? x.length - 1 - b : b, a.toolTip.highlightObjects([ e ]), 
                    e = 0; e < O.length; e++) pa(d, O[e], t.fillOpacity);
                    w(d), H && ("inside" !== t.indexLabelPlacement ? n(d) : f(), r(d)), 1 <= c && (ha = !1);
                }), null, L.easing.easeOutQuart);
            }
            function n(a) {
                for (var b, c, d, e, f = 0; f < O.length; f++) e = 1 == I[f].lineThickness % 2 ? .5 : 0, 
                b = g(c = ((O[f].y2 + O[f].y4) / 2 << 0) + e).x2 - 1, d = I[f].textBlock.x, e = (I[f].textBlock.y + I[f].height / 2 << 0) + e, 
                I[f].isDirty || 0 == I[f].lineThickness || (a.strokeStyle = I[f].lineColor, a.lineWidth = I[f].lineThickness, 
                a.setLineDash && a.setLineDash(N(I[f].lineDashType, I[f].lineThickness)), a.beginPath(), 
                a.moveTo(b, c), a.lineTo(d, e), a.stroke());
            }
            function p(a) {
                for (a -= 1; -1 <= a && -1 != a && I[a].isDirty; a--) ;
                return a;
            }
            function q(a) {
                for (a += 1; a <= O.length && a != O.length && I[a].isDirty; a++) ;
                return a;
            }
            function g(a) {
                for (var b, c = 0; c < x.length; c++) if (O[c].y1 < a && O[c].y4 > a) {
                    b = O[c];
                    break;
                }
                return b ? {
                    x1: a = b.y6 && a > b.y6 ? b.x3 + (b.x4 - b.x3) / (b.y4 - b.y3) * (a - b.y3) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2),
                    x2: a
                } : -1;
            }
            function r(a) {
                for (var b = 0; b < O.length; b++) I[b].isDirty || (a && (I[b].textBlock.ctx = a), 
                I[b].textBlock.render(!0));
            }
            function w(a) {
                if (y.plotArea.layoutManager.reset(), a.roundRect || Aa(a), y.title && (y.title.dockInsidePlotArea || "center" === y.title.horizontalAlign && "center" === y.title.verticalAlign) && (y.title.ctx = a, 
                y.title.render()), y.subtitles) for (var b = 0; b < y.subtitles.length; b++) {
                    var c = y.subtitles[b];
                    (c.dockInsidePlotArea || "center" === c.horizontalAlign && "center" === c.verticalAlign) && (y.subtitles.ctx = a, 
                    c.render());
                }
                y.legend && (y.legend.dockInsidePlotArea || "center" === y.legend.horizontalAlign && "center" === y.legend.verticalAlign) && (y.legend.ctx = a, 
                y.legend.setLayout(), y.legend.render()), T.fNg && T.fNg(y);
            }
            var y = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                for (var t = this.data[a.dataSeriesIndexes[0]], x = t.dataPoints, z = this.plotArea, E = .025 * z.width, C = .01 * z.width, B = 0, D = z.height - 2 * E, F = Math.min(z.width - 2 * C, 2.8 * z.height), H = !1, P = 0; P < x.length; P++) !H && void 0 !== x[P].indexLabel && null !== x[P].indexLabel && 0 < x[P].indexLabel.toString().length && (H = !0), 
                !H && void 0 !== x[P].label && null !== x[P].label && 0 < x[P].label.toString().length && (H = !0), 
                (!H && "function" == typeof t.indexLabelFormatter || "function" == typeof x[P].indexLabelFormatter) && (H = !0);
                H = H || void 0 !== t.indexLabel && null !== t.indexLabel && 0 < t.indexLabel.toString().length, 
                "inside" !== t.indexLabelPlacement && H || (C = (z.width - .75 * F) / 2);
                P = z.x1 + C;
                var J = z.x2 - C, M = z.y1 + E, Q = z.y2 - E, R = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
                if (0 != t.length && t.dataPoints && t.visible && 0 !== x.length) {
                    var ba, G, V = 30 * (J - (a = 75 * F / 100)) / 100;
                    "funnel" === t.type ? (ba = s(t.options.neckHeight) ? .35 * D : t.neckHeight, G = s(t.options.neckWidth) ? .25 * a : t.neckWidth, 
                    "string" == typeof ba && ba.match(/%$/) ? ba = (ba = parseInt(ba)) * D / 100 : ba = parseInt(ba), 
                    "string" == typeof G && G.match(/%$/) ? G = (G = parseInt(G)) * a / 100 : G = parseInt(G), 
                    ba > D ? ba = D : 0 >= ba && (ba = 0), G > a ? G = a - .5 : 0 >= G && (G = 0)) : "pyramid" === t.type && (G = ba = 0, 
                    t.reversed = !t.reversed);
                    C = P + a / 2;
                    var Y = P, Z = P + a, ma = t.reversed ? Q : M, K = C - G / 2, W = C + G / 2, wa = t.reversed ? M + ba : Q - ba, ra = t.reversed ? M : Q;
                    a = [];
                    C = [];
                    var ca, O = [], U = (F = [], M), $ = (wa - ma) / (K - Y), ea = -$;
                    if (-1 !== (P = "area" === (t.valueRepresents ? t.valueRepresents : "height") ? function c() {
                        var e, f, a = Y, b = Z, c = K, d = W;
                        e = M, f = Q - ba, d = Math.abs((f - e) * (b - a + (d - c)) / 2), e = f - e, f = (c = W - K) * (f - Q), 
                        f = d + (f = Math.abs(f)), d = [];
                        for (var g = 0, k = 0; k < x.length; k++) {
                            if (void 0 === x[k].y) return -1;
                            x[k].y = "number" == typeof x[k].y ? x[k].y : 0, g += Math.abs(x[k].y);
                        }
                        if (0 === g) return -1;
                        var h, p, l = d[0] = 0, n = 0;
                        for (b -= a, l = !1, k = 0; k < x.length; k++) a = Math.abs(x[k].y) * f / g, l ? h = 0 == Number(c.toFixed(3)) ? 0 : a / c : 0 > (p = $ * $ * b * b - 4 * Math.abs($) * a) ? (a -= l = (b + (p = c)) * (e - n) / 2, 
                        h = e - n, n += e - n, h += 0 == p ? 0 : a / p, n += a / p, l = !0) : (p = b - 2 * (h = (Math.abs($) * b - Math.sqrt(p)) / 2) / Math.abs($), 
                        (n += h) > e && (l = (b + (p = c)) * (e - (n -= h)) / 2, h = e - n, n += e - n, 
                        h += (a -= l) / p, n += a / p, l = !0), b = p), d.push(h);
                        return d;
                    }() : function d() {
                        for (var a = 0, b = [], c = 0; c < x.length; c++) {
                            if (void 0 === x[c].y) return -1;
                            x[c].y = "number" == typeof x[c].y ? x[c].y : 0, a += Math.abs(x[c].y);
                        }
                        if (0 === a) return -1;
                        for (c = b[0] = 0; c < x.length; c++) b.push(Math.abs(x[c].y) * D / a);
                        return b;
                    }())) {
                        if (t.reversed) for (F.push(U), G = P.length - 1; 0 < G; G--) U += P[G], F.push(U); else for (G = 0; G < P.length; G++) U += P[G], 
                        F.push(U);
                        if (t.reversed) for (G = 0; G < P.length; G++) F[G] < wa ? (a.push(K), C.push(W), 
                        ca = G) : (a.push((F[G] - ma + $ * Y) / $), C.push((F[G] - ma + ea * Z) / ea)); else for (G = 0; G < P.length; G++) F[G] < wa ? (a.push((F[G] - ma + $ * Y) / $), 
                        C.push((F[G] - ma + ea * Z) / ea), ca = G) : (a.push(K), C.push(W));
                        for (G = 0; G < P.length - 1; G++) U = t.reversed ? x[x.length - 1 - G].color ? x[x.length - 1 - G].color : t._colorSet[(x.length - 1 - G) % t._colorSet.length] : x[G].color ? x[G].color : t._colorSet[G % t._colorSet.length], 
                        G === ca ? O.push({
                            x1: a[G],
                            y1: F[G],
                            x2: C[G],
                            y2: F[G],
                            x3: W,
                            y3: wa,
                            x4: C[G + 1],
                            y4: F[G + 1],
                            x5: a[G + 1],
                            y5: F[G + 1],
                            x6: K,
                            y6: wa,
                            id: G,
                            height: F[G + 1] - F[G],
                            color: U
                        }) : O.push({
                            x1: a[G],
                            y1: F[G],
                            x2: C[G],
                            y2: F[G],
                            x3: C[G + 1],
                            y3: F[G + 1],
                            x4: a[G + 1],
                            y4: F[G + 1],
                            id: G,
                            height: F[G + 1] - F[G],
                            color: U
                        });
                        var da = 2, I = [], ha = !1, X = [], ga = [];
                        P = !1;
                        for (a = a = 0, Ba(X), G = 0; G < x.length; G++) x[G].exploded && (P = !0, t.reversed ? X.push(x.length - 1 - G) : X.push(G));
                        if (R.clearRect(z.x1, z.y1, z.width, z.height), R.fillStyle = y.backgroundColor, 
                        R.fillRect(z.x1, z.y1, z.width, z.height), H && t.visible && (function b() {
                            if (t && x) {
                                for (var a, b, c, d, e, f, k, l, n, h, p, q, u, m, r = [], A = [], w = {
                                    percent: null,
                                    total: null
                                }, E = null, z = 0; z < x.length; z++) m = g(m = void 0 !== (m = O[z]).x5 ? (m.y2 + m.y4) / 2 : (m.y2 + m.y3) / 2).x2 + 1, 
                                r[z] = J - m - V;
                                m = .5 * V, z = 0;
                                for (var B = x.length - 1; z < x.length || 0 <= B; z++, B--) a = (b = t.reversed ? x[B] : x[z]).color ? b.color : t.reversed ? t._colorSet[(x.length - 1 - z) % t._colorSet.length] : t._colorSet[z % t._colorSet.length], 
                                c = b.indexLabelPlacement || t.indexLabelPlacement || "outside", d = b.indexLabelBackgroundColor || t.indexLabelBackgroundColor || (v ? "transparent" : null), 
                                e = b.indexLabelFontColor || t.indexLabelFontColor || "#979797", f = s(b.indexLabelFontSize) ? t.indexLabelFontSize : b.indexLabelFontSize, 
                                k = b.indexLabelFontStyle || t.indexLabelFontStyle || "normal", l = b.indexLabelFontFamily || t.indexLabelFontFamily || "arial", 
                                n = b.indexLabelFontWeight || t.indexLabelFontWeight || "normal", a = b.indexLabelLineColor || t.options.indexLabelLineColor || a, 
                                h = "number" == typeof b.indexLabelLineThickness ? b.indexLabelLineThickness : "number" == typeof t.indexLabelLineThickness ? t.indexLabelLineThickness : 2, 
                                p = b.indexLabelLineDashType || t.indexLabelLineDashType || "solid", q = void 0 !== b.indexLabelWrap ? b.indexLabelWrap : void 0 === t.indexLabelWrap || t.indexLabelWrap, 
                                u = t.dataPointIds[z], y._eventManager.objectMap[u] = {
                                    id: u,
                                    objectType: "dataPoint",
                                    dataPointIndex: z,
                                    dataSeriesIndex: 0,
                                    funnelSection: O[t.reversed ? x.length - 1 - z : z]
                                }, "inside" === t.indexLabelPlacement && (r[z] = z !== ca ? t.reversed ? O[z].x2 - O[z].x1 : O[z].x3 - O[z].x4 : O[z].x3 - O[z].x6, 
                                20 > r[z] && (r[z] = z !== ca && t.reversed ? O[z].x3 - O[z].x4 : O[z].x2 - O[z].x1, 
                                r[z] /= 2)), ((u = b.indexLabelMaxWidth ? b.indexLabelMaxWidth : t.options.indexLabelMaxWidth ? t.indexLabelMaxWidth : r[z]) > r[z] || 0 > u) && (u = r[z]), 
                                A[z] = "inside" === t.indexLabelPlacement && O[z].height, w = y.getPercentAndTotal(t, b), 
                                (t.indexLabelFormatter || b.indexLabelFormatter) && (E = {
                                    chart: y.options,
                                    dataSeries: t,
                                    dataPoint: b,
                                    total: w.total,
                                    percent: w.percent
                                }), b = b.indexLabelFormatter ? b.indexLabelFormatter(E) : b.indexLabel ? y.replaceKeywordsWithValue(b.indexLabel, b, t, z) : t.indexLabelFormatter ? t.indexLabelFormatter(E) : t.indexLabel ? y.replaceKeywordsWithValue(t.indexLabel, b, t, z) : b.label ? b.label : "", 
                                0 >= h && (h = 0), 1e3 > u && 1e3 - u < m && (u += 1e3 - u), R.roundRect || Aa(R), 
                                (c = new ia(R, {
                                    fontSize: f,
                                    fontFamily: l,
                                    fontColor: e,
                                    fontStyle: k,
                                    fontWeight: n,
                                    horizontalAlign: c,
                                    backgroundColor: d,
                                    maxWidth: u,
                                    maxHeight: !1 === A[z] ? q ? 4.28571429 * f : 1.5 * f : A[z],
                                    text: b,
                                    padding: da
                                })).measureText(), I.push({
                                    textBlock: c,
                                    id: t.reversed ? B : z,
                                    isDirty: !1,
                                    lineColor: a,
                                    lineThickness: h,
                                    lineDashType: p,
                                    height: c.height < c.maxHeight ? c.height : c.maxHeight,
                                    width: c.width < c.maxWidth ? c.width : c.maxWidth
                                });
                            }
                        }(), f(), function e() {
                            var a, b, c, d, e, f = [];
                            e = !1, c = 0;
                            for (var g, k = J - Z - V / 2, l = (k = t.options.indexLabelMaxWidth ? t.indexLabelMaxWidth > k ? k : t.indexLabelMaxWidth : k, 
                            I.length - 1); 0 <= l; l--) g = x[I[l].id], d = (c = I[l]).textBlock, b = (a = q(l) < O.length ? I[q(l)] : null) ? a.textBlock : null, 
                            c = c.height, a && d.y + c + da > b.y && (e = !0), ((c = g.indexLabelMaxWidth || k) > k || 0 > c) && (c = k), 
                            f.push(c);
                            if (e) for (l = I.length - 1; 0 <= l; l--) a = O[l], I[l].textBlock.maxWidth = f[f.length - (l + 1)], 
                            I[l].textBlock.measureText(), I[l].textBlock.x = J - k, c = I[l].textBlock.height < I[l].textBlock.maxHeight ? I[l].textBlock.height : I[l].textBlock.maxHeight, 
                            e = I[l].textBlock.width < I[l].textBlock.maxWidth ? I[l].textBlock.width : I[l].textBlock.maxWidth, 
                            I[l].height = c, I[l].width = e, c = void 0 !== a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, 
                            I[l].textBlock.y = c - I[l].height / 2, t.reversed ? (I[l].textBlock.y + I[l].height > ma + E && (I[l].textBlock.y = ma + E - I[l].height), 
                            I[l].textBlock.y < ra - E && (I[l].textBlock.y = ra - E)) : (I[l].textBlock.y < ma - E && (I[l].textBlock.y = ma - E), 
                            I[l].textBlock.y + I[l].height > ra + E && (I[l].textBlock.y = ra + E - I[l].height));
                        }(), "inside" !== t.indexLabelPlacement)) {
                            for (function l() {
                                function a(b, c) {
                                    var d;
                                    if (0 > b || b >= I.length) return 0;
                                    var e, f = I[b].textBlock;
                                    return 0 > c ? (c *= -1, (d = h(e = p(b), b)) >= c ? (f.y -= c, c) : 0 == b ? (0 < d && (f.y -= d), 
                                    d) : (0 < (d += a(e, -(c - d))) && (f.y -= d), d)) : (d = h(b, e = q(b))) >= c ? (f.y += c, 
                                    c) : b == O.length - 1 ? (0 < d && (f.y += d), d) : (0 < (d += a(e, c - d)) && (f.y += d), 
                                    d);
                                }
                                function b() {
                                    var a, d, e, f, k, g = 0;
                                    f = (Q - M + 2 * E) / n, k = n;
                                    for (var l, h = 1; h < k; h++) {
                                        e = h * f;
                                        for (var u = I.length - 1; 0 <= u; u--) !I[u].isDirty && I[u].textBlock.y < e && I[u].textBlock.y + I[u].height > e && !((l = q(u)) >= I.length - 1) && I[u].textBlock.y + I[u].height + da > I[l].textBlock.y && (I[u].textBlock.y = I[u].textBlock.y + I[u].height - e > e - I[u].textBlock.y ? e + 1 : e - I[u].height - 1);
                                    }
                                    for (l = O.length - 1; 0 < l; l--) if (!I[l].isDirty) {
                                        if (0 > (e = p(l)) && I[e = 0].isDirty) break;
                                        if (I[l].textBlock.y < I[e].textBlock.y + I[e].height) {
                                            for (d = d || l, f = l, k = 0; I[f].textBlock.y < I[e].textBlock.y + I[e].height + da; ) {
                                                if (a = a || I[f].textBlock.y + I[f].height, k += I[f].height, k += da, 0 >= (f = e)) {
                                                    k += I[f = 0].height;
                                                    break;
                                                }
                                                if (0 > (e = p(f))) {
                                                    k += I[f = 0].height;
                                                    break;
                                                }
                                            }
                                            if (f != l) {
                                                g = c(a = k - (a -= g = I[f].textBlock.y), d, f);
                                                break;
                                            }
                                        }
                                    }
                                    return g;
                                }
                                function c(a, b, d) {
                                    var e = [], f = 0, g = 0;
                                    for (a = Math.abs(a); d <= b; d++) e.push(O[d]);
                                    for (e.sort((function(a, b) {
                                        return a.height - b.height;
                                    })), d = 0; d < e.length && (b = e[d], f < a); d++) g++, f += I[b.id].height + da, 
                                    I[b.id].textBlock.text = "", I[b.id].indexLabelText = "", I[b.id].isDirty = !0, 
                                    I[b.id].textBlock.measureText();
                                    return g;
                                }
                                for (var d, e, f, g, k, l, n = 1, m = 0; m < 2 * n; m++) {
                                    for (var r = I.length - 1; 0 <= r && (0 <= p(r) && p(r), g = (f = I[r]).textBlock, 
                                    l = (k = q(r) < O.length ? I[q(r)] : null) ? k.textBlock : null, d = +f.height.toFixed(6), 
                                    e = +g.y.toFixed(6), !(!f.isDirty && k && e + d + da > +l.y.toFixed(6) && (d = g.y + d + da - l.y, 
                                    e = a(r, -d), e < d && (0 < e && (d -= e), e = a(q(r), d), e != d)))); r--) ;
                                    b();
                                }
                            }(), G = 0; G < x.length; G++) I[G].isDirty || (a = I[G].textBlock.x + I[G].width, 
                            a = (J - a) / 2, 0 == G && (B = a), B > a && (B = a));
                            for (G = 0; G < O.length; G++) O[G].x1 += B, O[G].x2 += B, O[G].x3 += B, O[G].x4 += B, 
                            O[G].x5 && (O[G].x5 += B, O[G].x6 += B), I[G].textBlock.x += B;
                        }
                        for (G = 0; G < O.length; G++) B = O[G], pa(R, B, t.fillOpacity), ga.push(B.y1);
                        if (w(R), H && t.visible && ("inside" === t.indexLabelPlacement || y.animationEnabled || n(R), 
                        y.animationEnabled || r()), !H) for (G = 0; G < x.length; G++) a = {
                            id: B = t.dataPointIds[G],
                            objectType: "dataPoint",
                            dataPointIndex: G,
                            dataSeriesIndex: 0,
                            funnelSection: O[t.reversed ? x.length - 1 - G : G]
                        }, y._eventManager.objectMap[B] = a;
                        return (!y.animationEnabled && P || y.animationEnabled && !y.animatedRender) && m(y, -1, 0), 
                        this.funnelPyramidClickHandler = function(a) {
                            var b = -1;
                            !ha && !y.isAnimating && (s(a.dataSeries.explodeOnClick) || a.dataSeries.explodeOnClick) && 0 <= (b = t.reversed ? x.length - 1 - a.dataPointIndex : a.dataPointIndex) && (a = b, 
                            "funnel" !== t.type && "pyramid" !== t.type || (t.reversed ? x[x.length - 1 - a].exploded = !x[x.length - 1 - a].exploded : x[a].exploded = !x[a].exploded), 
                            m(y, b, 500));
                        }, {
                            source: R,
                            dest: this.plotArea.ctx,
                            animationCallback: function(a, b) {
                                L.fadeInAnimation(a, b), 1 <= a && (m(y, -1, 500), w(y.plotArea.ctx || y.ctx));
                            },
                            easingFunction: L.easing.easeInQuad,
                            animationBase: 0
                        };
                    }
                }
            }
        }, m.prototype.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1e3 / 60);
        }, m.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, 
        m.prototype.set = function(a, d, c) {
            c = void 0 === c || c, "options" === a ? (this.options = d, c && this.render()) : m.base.set.call(this, a, d, c);
        }, m.prototype.exportChart = function(a) {
            var d = (a = void 0 === a ? {} : a).format ? a.format : "png", c = a.fileName ? a.fileName : this.exportFileName;
            if (a.toDataURL) return this.canvas.toDataURL("image/" + d);
            if ((b = this.canvas) && d && c) {
                c = c + "." + d, a = "image/" + d;
                var b = b.toDataURL(a), e = !1, f = document.createElement("a");
                if (f.download = c, f.href = b, "undefined" != typeof Blob && new Blob) {
                    for (var l = b.replace(/^data:[a-z\/]*;base64,/, ""), h = (l = atob(l), new ArrayBuffer(l.length)), m = (h = new Uint8Array(h), 
                    0); m < l.length; m++) h[m] = l.charCodeAt(m);
                    d = new Blob([ h.buffer ], {
                        type: "image/" + d
                    });
                    try {
                        window.navigator.msSaveBlob(d, c), e = !0;
                    } catch (k) {
                        f.dataset.downloadurl = [ a, f.download, f.href ].join(":"), f.href = window.URL.createObjectURL(d);
                    }
                }
                if (!e) try {
                    event = document.createEvent("MouseEvents"), event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), 
                    f.dispatchEvent ? f.dispatchEvent(event) : f.fireEvent && f.fireEvent("onclick");
                } catch (n) {
                    (d = window.open()).document.write("<img src='" + b + "'></img><div>Please right click on the image and save it to your device</div>"), 
                    d.document.close();
                }
            }
        }, m.prototype.print = function() {
            var a = this.exportChart({
                toDataURL: !0
            }), d = document.createElement("iframe");
            d.setAttribute("class", "canvasjs-chart-print-frame"), d.setAttribute("style", "position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;"), 
            d.style.height = this.height + "px", this._canvasJSContainer.appendChild(d);
            var c = this, b = d.contentWindow || d.contentDocument.document || d.contentDocument;
            b.document.open(), b.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="' + a + '"/><body/></html>'), 
            b.document.close(), setTimeout((function() {
                b.focus(), b.print(), setTimeout((function() {
                    c._canvasJSContainer.removeChild(d);
                }), 1e3);
            }), 500);
        }, m.prototype.getPercentAndTotal = function(a, d) {
            var c = null, b = null, e = c = null;
            if (0 <= a.type.indexOf("stacked")) b = 0, (c = d.x.getTime ? d.x.getTime() : d.x) in a.plotUnit.yTotals && (b = a.plotUnit.yTotals[c], 
            c = a.plotUnit.yAbsTotals[c], e = isNaN(d.y) || 0 === c ? 0 : d.y / c * 100); else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
                for (c = b = 0; c < a.dataPoints.length; c++) isNaN(a.dataPoints[c].y) || (b += a.dataPoints[c].y);
                e = isNaN(d.y) ? 0 : d.y / b * 100;
            }
            return {
                percent: e,
                total: b
            };
        }, m.prototype.replaceKeywordsWithValue = function(a, d, c, b, e) {
            var f = this;
            if (e = void 0 === e ? 0 : e, (0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
                var l = "#percent", h = "#total", m = this.getPercentAndTotal(c, d);
                h = isNaN(m.total) ? h : m.total, l = isNaN(m.percent) ? l : m.percent;
                do {
                    if (m = "", c.percentFormatString) m = c.percentFormatString; else {
                        m = "#,##0.";
                        var k = Math.max(Math.ceil(Math.log(1 / Math.abs(l)) / Math.LN10), 2);
                        !isNaN(k) && isFinite(k) || (k = 2);
                        for (var n = 0; n < k; n++) m += "#";
                        c.percentFormatString = m;
                    }
                    a = (a = a.replace("#percent", ea(l, m, f._cultureInfo))).replace("#total", ea(h, c.yValueFormatString ? c.yValueFormatString : "#,##0.########", f._cultureInfo));
                } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"));
            }
            return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, (function(a) {
                if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1, a.length - 1);
                a = (a = Ea(a.slice(1, a.length - 1))).replace("#index", e);
                var k = null;
                try {
                    var g = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                    g && 0 < g.length && (k = Ea(g[2]), a = Ea(g[1]));
                } catch (l) {}
                if (g = null, "color" === a) return "waterfall" === c.type ? d.color ? d.color : 0 < d.y ? c.risingColor : c.fallingColor : "error" === c.type ? c.color ? c.color : c._colorSet[k % c._colorSet.length] : d.color ? d.color : c.color ? c.color : c._colorSet[b % c._colorSet.length];
                if (d.hasOwnProperty(a)) g = d; else {
                    if (!c.hasOwnProperty(a)) return "";
                    g = c;
                }
                return g = g[a], null !== k && (g = g[k]), "x" !== a ? "y" === a ? ea(g, d.yValueFormatString ? d.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : c.yValueFormatString = "#,##0.########", f._cultureInfo) : "z" === a ? ea(g, d.zValueFormatString ? d.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : c.zValueFormatString = "#,##0.########", f._cultureInfo) : g : "dateTime" === c.axisX.valueType || "dateTime" === c.xValueType || d.x && d.x.getTime ? c.axisX.logarithmic ? void 0 : za(g, d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = f.axisX && f.axisX.autoValueFormatString ? f.axisX.autoValueFormatString : "DD MMM YY", f._cultureInfo) : ea(g, d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = "#,##0.########", f._cultureInfo);
            }));
        }, na(F, V), F.prototype.setLayout = function() {
            var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, d = a.layoutManager.getFreeSpace(), c = null, b = 0, e = 0, f = 0, l = 0, h = this.markerMargin = this.chart.options.legend && !s(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : .3 * this.fontSize;
            this.height = 0;
            var m = [], k = [];
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation = "horizontal", 
            c = this.verticalAlign, f = this.maxWidth = null !== this.maxWidth ? this.maxWidth : d.width, 
            l = this.maxHeight = null !== this.maxHeight ? this.maxHeight : .5 * d.height) : "center" === this.verticalAlign && (this.orientation = "vertical", 
            c = this.horizontalAlign, f = this.maxWidth = null !== this.maxWidth ? this.maxWidth : .5 * d.width, 
            l = this.maxHeight = null !== this.maxHeight ? this.maxHeight : d.height), this.errorMarkerColor = [];
            for (var n = 0; n < this.dataSeries.length; n++) {
                var p = this.dataSeries[n];
                if (p.dataPoints && p.dataPoints.length) if ("pie" !== p.type && "doughnut" !== p.type && "funnel" !== p.type && "pyramid" !== p.type) {
                    var q = p.legendMarkerType = p.legendMarkerType ? p.legendMarkerType : "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type && "scatter" !== p.type && "bubble" !== p.type || !p.markerType ? "error" === p.type && p._linkedSeries ? p._linkedSeries.legendMarkerType ? p._linkedSeries.legendMarkerType : H.getDefaultLegendMarker(p._linkedSeries.type) : H.getDefaultLegendMarker(p.type) : p.markerType, g = p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                        chart: this.chart,
                        legend: this.options,
                        dataSeries: p,
                        dataPoint: null
                    }) : p.name, r = p.legendMarkerColor = p.legendMarkerColor ? p.legendMarkerColor : p.markerColor ? p.markerColor : "error" === p.type ? s(p.whiskerColor) ? p._colorSet[0] : p.whiskerColor : p._colorSet[0], v = p.markerSize || "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type ? .75 * this.lineHeight : 0, w = p.legendMarkerBorderColor ? p.legendMarkerBorderColor : p.markerBorderColor, t = p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : p.markerBorderThickness ? Math.max(1, Math.round(.2 * v)) : 0;
                    "error" === p.type && this.errorMarkerColor.push(r), q = {
                        markerType: q,
                        markerColor: r,
                        text: g = this.chart.replaceKeywordsWithValue(g, p.dataPoints[0], p, n),
                        textBlock: null,
                        chartType: p.type,
                        markerSize: v,
                        lineColor: p._colorSet[0],
                        dataSeriesIndex: p.index,
                        dataPointIndex: null,
                        markerBorderColor: w,
                        markerBorderThickness: t
                    }, m.push(q);
                } else for (var x = 0; x < p.dataPoints.length; x++) {
                    var z = p.dataPoints[x];
                    q = z.legendMarkerType ? z.legendMarkerType : p.legendMarkerType ? p.legendMarkerType : H.getDefaultLegendMarker(p.type), 
                    g = z.legendText ? z.legendText : p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                        chart: this.chart,
                        legend: this.options,
                        dataSeries: p,
                        dataPoint: z
                    }) : z.name ? z.name : "DataPoint: " + (x + 1), r = z.legendMarkerColor ? z.legendMarkerColor : p.legendMarkerColor ? p.legendMarkerColor : z.color ? z.color : p.color ? p.color : p._colorSet[x % p._colorSet.length], 
                    v = .75 * this.lineHeight, w = z.legendMarkerBorderColor ? z.legendMarkerBorderColor : p.legendMarkerBorderColor ? p.legendMarkerBorderColor : z.markerBorderColor ? z.markerBorderColor : p.markerBorderColor, 
                    t = z.legendMarkerBorderThickness ? z.legendMarkerBorderThickness : p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : z.markerBorderThickness || p.markerBorderThickness ? Math.max(1, Math.round(.2 * v)) : 0, 
                    q = {
                        markerType: q,
                        markerColor: r,
                        text: g = this.chart.replaceKeywordsWithValue(g, z, p, x),
                        textBlock: null,
                        chartType: p.type,
                        markerSize: v,
                        dataSeriesIndex: n,
                        dataPointIndex: x,
                        markerBorderColor: w,
                        markerBorderThickness: t
                    };
                    (z.showInLegend || p.showInLegend && !1 !== z.showInLegend) && m.push(q);
                }
            }
            if (!0 === this.reversed && m.reverse(), 0 < m.length) {
                for (p = null, r = g = z = x = 0, z = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, f) : this.itemMaxWidth = Math.min(this.itemWidth, f) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, f) : this.itemMaxWidth = f, 
                z -= (v = 0 === v ? .75 * this.lineHeight : v) + h, n = 0; n < m.length; n++) w = z, 
                "line" !== (q = m[n]).chartType && "spline" !== q.chartType && "stepLine" !== q.chartType || (w -= .2 * this.lineHeight), 
                0 >= l || void 0 === l || 0 >= w || void 0 === w || ("horizontal" === this.orientation ? (q.textBlock = new ia(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: w,
                    maxHeight: this.itemWrap ? l : this.lineHeight,
                    angle: 0,
                    text: q.text,
                    horizontalAlign: "left",
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontWeight: this.fontWeight,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    textBaseline: "middle"
                }), q.textBlock.measureText(), null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (v + h + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? .2 * this.lineHeight : 0))), 
                (!p || p.width + Math.round(q.textBlock.width + v + h + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? .2 * this.lineHeight : 0)) > f) && (p = {
                    items: [],
                    width: 0
                }, k.push(p), this.height += g, g = 0), g = Math.max(g, q.textBlock.height)) : (q.textBlock = new ia(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: z,
                    maxHeight: !0 === this.itemWrap ? l : 1.5 * this.fontSize,
                    angle: 0,
                    text: q.text,
                    horizontalAlign: "left",
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontWeight: this.fontWeight,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    textBaseline: "middle"
                }), q.textBlock.measureText(), null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (v + h + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? .2 * this.lineHeight : 0))), 
                this.height < l - this.lineHeight ? (p = {
                    items: [],
                    width: 0
                }, k.push(p)) : (p = k[x], x = (x + 1) % k.length), this.height += q.textBlock.height), 
                q.textBlock.x = p.width, q.textBlock.y = 0, p.width += Math.round(q.textBlock.width + v + h + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? .2 * this.lineHeight : 0)), 
                p.items.push(q), this.width = Math.max(p.width, this.width), r = q.textBlock.width + (v + h + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? .2 * this.lineHeight : 0)));
                this.itemWidth = r, this.height = !1 === this.itemWrap ? k.length * this.lineHeight : this.height + g, 
                this.height = Math.min(l, this.height), this.width = Math.min(f, this.width);
            }
            for ("top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, 
            b = d.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, 
            b = d.y1 + d.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, 
            b = d.y2 - this.height), this.items = m, n = 0; n < this.items.length; n++) (q = m[n]).id = ++this.chart._eventManager.lastObjectId, 
            this.chart._eventManager.objectMap[q.id] = {
                id: q.id,
                objectType: "legendItem",
                legendItemIndex: n,
                dataSeriesIndex: q.dataSeriesIndex,
                dataPointIndex: q.dataPointIndex
            };
            this.markerSize = v, this.rows = k, 0 < m.length && a.layoutManager.registerSpace(c, {
                width: this.width + 2 + 2,
                height: this.height + 5 + 5
            }), this.bounds = {
                x1: e,
                y1: b,
                x2: e + this.width,
                y2: b + this.height
            };
        }, F.prototype.render = function() {
            var a = this.bounds.x1, d = this.bounds.y1, c = this.markerMargin, b = this.maxWidth, e = this.maxHeight, f = this.markerSize, l = this.rows;
            (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, d, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            for (var h = 0, m = 0; m < l.length; m++) {
                for (var k = l[m], n = 0, p = 0; p < k.items.length; p++) {
                    var q = k.items[p], g = q.textBlock.x + a + (0 === p ? .2 * f : this.horizontalSpacing), r = d + h, s = g;
                    if (this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = .5), this.ctx.save(), 
                    this.ctx.beginPath(), this.ctx.rect(a, d, b, Math.max(e - e % this.lineHeight, 0)), 
                    this.ctx.clip(), "line" !== q.chartType && "stepLine" !== q.chartType && "spline" !== q.chartType || (this.ctx.strokeStyle = q.lineColor, 
                    this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(g - .1 * this.lineHeight, r + this.lineHeight / 2), 
                    this.ctx.lineTo(g + .85 * this.lineHeight, r + this.lineHeight / 2), this.ctx.stroke(), 
                    s -= .1 * this.lineHeight), "error" === q.chartType) {
                        this.ctx.strokeStyle = this.errorMarkerColor[0], this.ctx.lineWidth = f / 8, this.ctx.beginPath();
                        var v = g - .08 * this.lineHeight + .1 * this.lineHeight, t = r + .15 * this.lineHeight, x = .7 * this.lineHeight, w = x + .02 * this.lineHeight;
                        this.ctx.moveTo(v, t), this.ctx.lineTo(v + x, t), this.ctx.stroke(), this.ctx.beginPath(), 
                        this.ctx.moveTo(v + x / 2, t), this.ctx.lineTo(v + x / 2, t + w), this.ctx.stroke(), 
                        this.ctx.beginPath(), this.ctx.moveTo(v, t + w), this.ctx.lineTo(v + x, t + w), 
                        this.ctx.stroke(), this.errorMarkerColor.shift();
                    }
                    W.drawMarker(g + f / 2, r + this.lineHeight / 2, this.ctx, q.markerType, "error" === q.chartType || "line" === q.chartType || "spline" === q.chartType ? q.markerSize / 2 : q.markerSize, q.markerColor, q.markerBorderColor, q.markerBorderThickness), 
                    q.textBlock.x = g + c + f, "line" !== q.chartType && "stepLine" !== q.chartType && "spline" !== q.chartType || (q.textBlock.x += .1 * this.lineHeight), 
                    q.textBlock.y = Math.round(r + this.lineHeight / 2), q.textBlock.render(!0), this.ctx.restore(), 
                    n = 0 < p ? Math.max(n, q.textBlock.height) : q.textBlock.height, this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1), 
                    g = Q(q.id), this.ghostCtx.fillStyle = g, this.ghostCtx.beginPath(), this.ghostCtx.fillRect(s, q.textBlock.y - this.lineHeight / 2, q.textBlock.x + q.textBlock.width - s, q.textBlock.height), 
                    q.x1 = this.chart._eventManager.objectMap[q.id].x1 = s, q.y1 = this.chart._eventManager.objectMap[q.id].y1 = q.textBlock.y - this.lineHeight / 2, 
                    q.x2 = this.chart._eventManager.objectMap[q.id].x2 = q.textBlock.x + q.textBlock.width, 
                    q.y2 = this.chart._eventManager.objectMap[q.id].y2 = q.textBlock.y + q.textBlock.height - this.lineHeight / 2;
                }
                h += n;
            }
        }, na(H, V), H.prototype.getDefaultAxisPlacement = function() {
            var a = this.type;
            return "column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a ? "normal" : "bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a ? "xySwapped" : "pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a ? "none" : ("error" !== a && window.console.log("Unknown Chart Type: " + a), 
            null);
        }, H.getDefaultLegendMarker = function(a) {
            return "column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a ? "square" : "line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a ? "circle" : "area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a ? "triangle" : "error" === a ? "none" : (window.console.log("Unknown Chart Type: " + a), 
            null);
        }, H.prototype.getDataPointAtX = function(a, d) {
            if (!this.dataPoints || 0 === this.dataPoints.length) return null;
            var c = {
                dataPoint: null,
                distance: 1 / 0,
                index: NaN
            }, b = null, e = 0, f = 0, l = 1, h = 1 / 0, m = 0, k = 0, n = 0;
            for ("none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? n = 1 < (n = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x)) ? Math.min(Math.max((this.dataPoints.length - 1) / n * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0 : n = 0 < (n = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x) ? Math.min(Math.max((this.dataPoints.length - 1) / n * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0); ;) {
                if (0 <= (f = 0 < l ? n + e : n - e) && f < this.dataPoints.length) {
                    b = this.dataPoints[f];
                    var p = this.axisX.logarithmic ? b.x > a ? b.x / a : a / b.x : Math.abs(b.x - a);
                    if (p < c.distance && (c.dataPoint = b, c.distance = p, c.index = f), (b = p) <= h ? h = b : 0 < l ? m++ : k++, 
                    1e3 < m && 1e3 < k) break;
                } else if (0 > n - e && n + e >= this.dataPoints.length) break;
                -1 === l ? (e++, l = 1) : l = -1;
            }
            return d || (c.dataPoint.x.getTime ? c.dataPoint.x.getTime() : c.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? d && null !== c.dataPoint ? c : null : c;
        }, H.prototype.getDataPointAtXY = function(a, d, c) {
            if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || d < this.chart.plotArea.y1 || d > this.chart.plotArea.y2) return null;
            c = c || !1;
            var b = [], e = 0, f = 0, l = 1, h = !1, m = 1 / 0, k = 0, n = 0, p = 0;
            if ("none" !== this.chart.plotInfo.axisPlacement) if (p = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({
                x: a,
                y: d
            }), this.axisX.logarithmic) p = 1 < (q = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x)) ? Math.min(Math.max((this.dataPoints.length - 1) / q * Math.log(p / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0; else p = 0 < (q = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x) ? Math.min(Math.max((this.dataPoints.length - 1) / q * (p - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
            for (;;) {
                if (0 <= (f = 0 < l ? p + e : p - e) && f < this.dataPoints.length) {
                    var q = this.chart._eventManager.objectMap[this.dataPointIds[f]], g = this.dataPoints[f], r = null;
                    if (q) {
                        switch (this.type) {
                          case "column":
                          case "stackedColumn":
                          case "stackedColumn100":
                          case "bar":
                          case "stackedBar":
                          case "stackedBar100":
                          case "rangeColumn":
                          case "rangeBar":
                          case "waterfall":
                          case "error":
                            a >= q.x1 && a <= q.x2 && d >= q.y1 && d <= q.y2 && (b.push({
                                dataPoint: g,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y1 - d), Math.abs(q.y2 - d))
                            }), h = !0);
                            break;

                          case "line":
                          case "stepLine":
                          case "spline":
                          case "area":
                          case "stepArea":
                          case "stackedArea":
                          case "stackedArea100":
                          case "splineArea":
                          case "scatter":
                            var s = ka("markerSize", g, this) || 4, v = c ? 20 : s;
                            (r = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2))) <= v && b.push({
                                dataPoint: g,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: r
                            }), (q = Math.abs(q.x1 - a)) <= m ? m = q : 0 < l ? k++ : n++, r <= s / 2 && (h = !0);
                            break;

                          case "rangeArea":
                          case "rangeSplineArea":
                            s = ka("markerSize", g, this) || 4, v = c ? 20 : s, (r = Math.min(Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2)), Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y2 - d, 2)))) <= v && b.push({
                                dataPoint: g,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: r
                            }), (q = Math.abs(q.x1 - a)) <= m ? m = q : 0 < l ? k++ : n++, r <= s / 2 && (h = !0);
                            break;

                          case "bubble":
                            s = q.size, (r = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2))) <= s / 2 && (b.push({
                                dataPoint: g,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: r
                            }), h = !0);
                            break;

                          case "pie":
                          case "doughnut":
                            s = q.center, v = "doughnut" === this.type ? q.percentInnerRadius * q.radius : 0, 
                            (r = Math.sqrt(Math.pow(s.x - a, 2) + Math.pow(s.y - d, 2))) < q.radius && r > v && (0 > (r = Math.atan2(d - s.y, a - s.x)) && (r += 2 * Math.PI), 
                            r = Number(((r / Math.PI * 180 % 360 + 360) % 360).toFixed(12)), s = Number(((q.startAngle / Math.PI * 180 % 360 + 360) % 360).toFixed(12)), 
                            0 === (v = Number(((q.endAngle / Math.PI * 180 % 360 + 360) % 360).toFixed(12))) && 1 < q.endAngle && (v = 360), 
                            s >= v && 0 !== g.y && (v += 360, r < s && (r += 360)), r > s && r < v && (b.push({
                                dataPoint: g,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: 0
                            }), h = !0));
                            break;

                          case "funnel":
                          case "pyramid":
                            d > (r = q.funnelSection).y1 && d < r.y4 && (r.y6 ? d > r.y6 ? (f = r.x6 + (r.x5 - r.x6) / (r.y5 - r.y6) * (d - r.y6), 
                            r = r.x3 + (r.x4 - r.x3) / (r.y4 - r.y3) * (d - r.y3)) : (f = r.x1 + (r.x6 - r.x1) / (r.y6 - r.y1) * (d - r.y1), 
                            r = r.x2 + (r.x3 - r.x2) / (r.y3 - r.y2) * (d - r.y2)) : (f = r.x1 + (r.x4 - r.x1) / (r.y4 - r.y1) * (d - r.y1), 
                            r = r.x2 + (r.x3 - r.x2) / (r.y3 - r.y2) * (d - r.y2)), a > f && a < r && (b.push({
                                dataPoint: g,
                                dataPointIndex: q.dataPointIndex,
                                dataSeries: this,
                                distance: 0
                            }), h = !0));
                            break;

                          case "boxAndWhisker":
                            (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && d >= q.y4 - q.borderThickness / 2 && d <= q.y1 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y1 && d <= q.y4) && (b.push({
                                dataPoint: g,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d))
                            }), h = !0);
                            break;

                          case "candlestick":
                            (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && d >= q.y2 - q.borderThickness / 2 && d <= q.y3 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y1 && d <= q.y4) && (b.push({
                                dataPoint: g,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d))
                            }), h = !0);
                            break;

                          case "ohlc":
                            (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y2 && d <= q.y3 || a >= q.x1 && a <= (q.x2 + q.x1) / 2 && d >= q.y1 - q.borderThickness / 2 && d <= q.y1 + q.borderThickness / 2 || a >= (q.x1 + q.x2) / 2 && a <= q.x2 && d >= q.y4 - q.borderThickness / 2 && d <= q.y4 + q.borderThickness / 2) && (b.push({
                                dataPoint: g,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d))
                            }), h = !0);
                        }
                        if (h || 1e3 < k && 1e3 < n) break;
                    }
                } else if (0 > p - e && p + e >= this.dataPoints.length) break;
                -1 === l ? (e++, l = 1) : l = -1;
            }
            for (a = null, d = 0; d < b.length; d++) a ? b[d].distance <= a.distance && (a = b[d]) : a = b[d];
            return a;
        }, H.prototype.getMarkerProperties = function(a, d, c, b) {
            var e = this.dataPoints;
            return {
                x: d,
                y: c,
                ctx: b,
                type: e[a].markerType ? e[a].markerType : this.markerType,
                size: e[a].markerSize ? e[a].markerSize : this.markerSize,
                color: e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
                borderColor: e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
                borderThickness: e[a].markerBorderThickness ? e[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null
            };
        }, na(D, V), D.prototype.createExtraLabelsForLog = function(a) {
            if (!(5 < (a = (a || 0) + 1))) {
                var d = this.logLabelValues[0] || this.intervalStartPosition;
                if (Math.log(this.range) / Math.log(d / this.viewportMinimum) < this.noTicks - 1) {
                    for (var c = D.getNiceNumber((d - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), !0), b = Math.ceil(this.viewportMinimum / c) * c; b < d; b += c) b < this.viewportMinimum || this.logLabelValues.push(b);
                    this.logLabelValues.sort(Pa), this.createExtraLabelsForLog(a);
                }
            }
        }, D.prototype.createLabels = function() {
            var a, d, e, m, n, c = 0, b = 0, f = 0, l = 0, h = (b = 0, b = this.interval, 0), k = .6 * this.chart.height;
            a = !1;
            var p = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], q = p.length ? s(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
            if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
                if (e = this.viewportMaximum, this.labels) {
                    a = Math.ceil(b);
                    var g = !1;
                    for (c = b = Math.ceil(this.intervalStartPosition); c < this.viewportMaximum; c += a) {
                        if (!this.labels[c]) {
                            g = !1;
                            break;
                        }
                        g = !0;
                    }
                    g && (this.interval = a, this.intervalStartPosition = b);
                }
                if (this.logarithmic && !this.equidistantInterval) for (this.logLabelValues || (this.logLabelValues = [], 
                this.createExtraLabelsForLog()), b = 0, g = q; b < this.logLabelValues.length; b++) if ((c = this.logLabelValues[b]) < this.viewportMinimum) b++; else {
                    for (;g < p.length && c > p[g].endValue; g++) ;
                    n = c, (a = g < p.length && c >= p[g].startValue && c <= p[g].endValue) || (a = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.options,
                        value: n,
                        label: this.labels[n] ? this.labels[n] : null
                    }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : ea(n, this.valueFormatString, this.chart._cultureInfo), 
                    a = new ia(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: f,
                        maxHeight: l,
                        angle: this.labelAngle,
                        text: this.prefix + a + this.suffix,
                        backgroundColor: this.labelBackgroundColor,
                        borderColor: this.labelBorderColor,
                        cornerRadius: this.labelCornerRadius,
                        textAlign: this.labelTextAlign,
                        fontSize: this.labelFontSize,
                        fontFamily: this.labelFontFamily,
                        fontWeight: this.labelFontWeight,
                        fontColor: this.labelFontColor,
                        fontStyle: this.labelFontStyle,
                        textBaseline: "middle",
                        borderThickness: 0
                    }), this._labels.push({
                        position: n,
                        textBlock: a,
                        effectiveHeight: null
                    }));
                }
                for (g = q, c = this.intervalStartPosition; c <= e; c = parseFloat(1e-12 > this.interval ? this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval).toFixed(12))) {
                    for (;g < p.length && c > p[g].endValue; g++) ;
                    n = c, (a = g < p.length && c >= p[g].startValue && c <= p[g].endValue) || (a = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.options,
                        value: n,
                        label: this.labels[n] ? this.labels[n] : null
                    }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : ea(n, this.valueFormatString, this.chart._cultureInfo), 
                    a = new ia(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: f,
                        maxHeight: l,
                        angle: this.labelAngle,
                        text: this.prefix + a + this.suffix,
                        textAlign: this.labelTextAlign,
                        backgroundColor: this.labelBackgroundColor,
                        borderColor: this.labelBorderColor,
                        borderThickness: this.labelBorderThickness,
                        cornerRadius: this.labelCornerRadius,
                        fontSize: this.labelFontSize,
                        fontFamily: this.labelFontFamily,
                        fontWeight: this.labelFontWeight,
                        fontColor: this.labelFontColor,
                        fontStyle: this.labelFontStyle,
                        textBaseline: "middle"
                    }), this._labels.push({
                        position: n,
                        textBlock: a,
                        effectiveHeight: null
                    }));
                }
            } else for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), 
            e = Va(new Date(this.viewportMaximum), this.interval, this.intervalType), g = q, 
            c = this.intervalStartPosition; c < e; Va(c, b, this.intervalType)) {
                for (a = c.getTime(); g < p.length && a > p[g].endValue; g++) ;
                n = a, (a = g < p.length && a >= p[g].startValue && a <= p[g].endValue) || (a = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.options,
                    value: new Date(n),
                    label: this.labels[n] ? this.labels[n] : null
                }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : za(n, this.valueFormatString, this.chart._cultureInfo), 
                a = new ia(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: f,
                    backgroundColor: this.labelBackgroundColor,
                    borderColor: this.labelBorderColor,
                    borderThickness: this.labelBorderThickness,
                    cornerRadius: this.labelCornerRadius,
                    maxHeight: l,
                    angle: this.labelAngle,
                    text: this.prefix + a + this.suffix,
                    textAlign: this.labelTextAlign,
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle"
                }), this._labels.push({
                    position: n,
                    textBlock: a,
                    effectiveHeight: null,
                    breaksLabelType: void 0
                }));
            }
            for ("bottom" === this._position || "top" === this._position ? (h = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * R[this.intervalType + "Duration"] * this.interval, 
            f = void 0 === this.options.labelMaxWidth ? .5 * this.chart.width >> 0 : this.options.labelMaxWidth, 
            this.chart.panEnabled || (l = void 0 === this.options.labelWrap || this.labelWrap ? .8 * this.chart.height >> 0 : 1.5 * this.labelFontSize)) : "left" !== this._position && "right" !== this._position || (h = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * R[this.intervalType + "Duration"] * this.interval, 
            this.chart.panEnabled || (f = void 0 === this.options.labelMaxWidth ? .3 * this.chart.width >> 0 : this.options.labelMaxWidth), 
            l = void 0 === this.options.labelWrap || this.labelWrap ? .3 * this.chart.height >> 0 : 1.5 * this.labelFontSize), 
            b = 0; b < this._labels.length; b++) {
                (a = this._labels[b].textBlock).maxWidth = f, a.maxHeight = l;
                var r = a.measureText();
                m = r.height;
            }
            if (e = [], q = p = 0, this.labelAutoFit || this.options.labelAutoFit) if (s(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 
            90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), 
            "bottom" === this._position || "top" === this._position) if (f = .9 * h >> 0, q = 0, 
            !this.chart.panEnabled && 1 <= this._labels.length) {
                for (this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelMaxWidth = f, 
                this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelAngle = this.labelAngle, 
                this.sessionVariables.labelWrap = this.labelWrap, c = 0; c < this._labels.length; c++) if (!this._labels[c].breaksLabelType) {
                    var w;
                    for (g = (a = this._labels[c].textBlock).text.split(" "), b = 0; b < g.length; b++) n = g[b], 
                    this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, 
                    (n = this.ctx.measureText(n)).width > q && (w = c, q = n.width);
                }
                for (c = 0, c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++) if (!this._labels[c].breaksLabelType) {
                    for (r = (a = this._labels[c].textBlock).measureText(), g = c + 1; g < this._labels.length; g++) if (!this._labels[g].breaksLabelType) {
                        d = (d = this._labels[g].textBlock).measureText();
                        break;
                    }
                    if (e.push(a.height), this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e), 
                    Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), 
                    b = f * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (l - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), 
                    s(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle) if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? l : Math.min((b - f * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), 
                    n = (k - (m + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), 
                    s(this.options.labelWrap)) {
                        if (s(this.options.labelWrap)) if (s(this.options.labelMaxWidth)) {
                            if (!s(d)) if (b = r.width + d.width >> 0, g = this.labelFontSize, q < f) b - 2 * f > p && (p = b - 2 * f, 
                            b >= 2 * f && b < 2.2 * f ? (this.sessionVariables.labelMaxWidth = f, s(this.options.labelFontSize) && 12 < g && (g = Math.floor(12 / 13 * g), 
                            a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? g : this.options.labelFontSize, 
                            this.sessionVariables.labelAngle = this.labelAngle) : b >= 2.2 * f && b < 2.8 * f ? (this.sessionVariables.labelAngle = -25, 
                            this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelFontSize = g) : b >= 2.8 * f && b < 3.2 * f ? (this.sessionVariables.labelMaxWidth = Math.max(f, q), 
                            this.sessionVariables.labelWrap = !0, s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), 
                            a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? g : this.options.labelFontSize, 
                            this.sessionVariables.labelAngle = this.labelAngle) : b >= 3.2 * f && b < 3.6 * f ? (this.sessionVariables.labelAngle = -25, 
                            this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelFontSize = this.labelFontSize) : b > 3.6 * f && b < 5 * f ? (s(this.options.labelFontSize) && 12 < g && (g = Math.floor(12 / 13 * g), 
                            a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? g : this.options.labelFontSize, 
                            this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n) : b > 5 * f && (this.sessionVariables.labelWrap = !0, 
                            this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelFontSize = g, 
                            this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelAngle = this.labelAngle)); else if (w === c && (0 === w && q + this._labels[w + 1].textBlock.measureText().width - 2 * f > p || w === this._labels.length - 1 && q + this._labels[w - 1].textBlock.measureText().width - 2 * f > p || 0 < w && w < this._labels.length - 1 && q + this._labels[w + 1].textBlock.measureText().width - 2 * f > p && q + this._labels[w - 1].textBlock.measureText().width - 2 * f > p)) p = 0 === w ? q + this._labels[w + 1].textBlock.measureText().width - 2 * f : q + this._labels[w - 1].textBlock.measureText().width - 2 * f, 
                            this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? g : this.options.labelFontSize, 
                            this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n; else if (0 === p) for (this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? g : this.options.labelFontSize, 
                            this.sessionVariables.labelWrap = !0, b = 0; b < this._labels.length; b++) (a = this._labels[b].textBlock).maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), n), 
                            r = a.measureText(), b < this._labels.length - 1 && (g = b + 1, (d = this._labels[g].textBlock).maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), n), 
                            d = d.measureText(), r.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25));
                        } else this.options.labelMaxWidth < f ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, 
                        this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelAngle = -25, 
                        this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = l);
                    } else this.labelWrap ? s(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), n), 
                    this.sessionVariables.labelWrap = this.labelWrap, d && r.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, 
                    this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle) : s(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, 
                    this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelMaxWidth = f, 
                    d && r.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25, 
                    this.sessionVariables.labelMaxWidth = n)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle, 
                    this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = l, 
                    this.sessionVariables.labelWrap = this.labelWrap); else this.sessionVariables.labelAngle = this.labelAngle, 
                    this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? l : Math.min((b - f * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), 
                    n = 0 != this.labelAngle ? (k - (m + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : f, 
                    this.sessionVariables.labelMaxHeight = this.labelWrap ? (k - n * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, 
                    s(this.options.labelWrap) ? s(this.options.labelWrap) && (this.labelWrap && !s(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, 
                    this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n, 
                    this.sessionVariables.labelMaxHeight = l) : (this.sessionVariables.labelAngle = this.labelAngle, 
                    this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelMaxHeight = b < .9 * h ? .9 * h : b, 
                    this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, 
                    this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n) : (s(this.options.labelMaxWidth), 
                    this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n, 
                    this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = l);
                }
                for (b = 0; b < this._labels.length; b++) (a = this._labels[b].textBlock).maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, 
                a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, 
                a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, 
                a.measureText();
            } else for (c = 0; c < this._labels.length; c++) (a = this._labels[c].textBlock).maxWidth = this.labelMaxWidth = s(this.options.labelMaxWidth) ? s(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = f : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, 
            a.fontSize = this.labelFontSize = s(this.options.labelFontSize) ? s(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, 
            a.angle = this.labelAngle = s(this.options.labelAngle) ? s(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, 
            a.wrap = this.labelWrap = s(this.options.labelWrap) ? s(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, 
            a.maxHeight = s(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = l : this.sessionVariables.labelMaxHeight, 
            a.measureText(); else if ("left" === this._position || "right" === this._position) if (f = s(this.options.labelMaxWidth) ? .3 * this.chart.width >> 0 : this.options.labelMaxWidth, 
            l = void 0 === this.options.labelWrap || this.labelWrap ? .3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, 
            !this.chart.panEnabled && 1 <= this._labels.length) {
                for (this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelMaxWidth = f, 
                this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle, 
                this.sessionVariables.labelWrap = this.labelWrap, c = 0; c < this._labels.length; c++) if (!this._labels[c].breaksLabelType) {
                    for (r = (a = this._labels[c].textBlock).measureText(), g = c + 1; g < this._labels.length; g++) if (!this._labels[g].breaksLabelType) {
                        d = (d = this._labels[g].textBlock).measureText();
                        break;
                    }
                    e.push(a.height), this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e), 
                    b = f * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (l - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), 
                    Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), 
                    s(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? s(this.options.labelWrap) ? s(this.options.labelWrap) && (s(this.options.labelMaxWidth) ? s(d) || (h = r.height + d.height >> 0) - 2 * l > q && (q = h - 2 * l, 
                    h >= 2 * l && h < 2.4 * l ? (s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), 
                    a.measureText()), this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : h >= 2.4 * l && h < 2.8 * l ? (this.sessionVariables.labelMaxHeight = b, 
                    this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = !0) : h >= 2.8 * l && h < 3.2 * l ? (this.sessionVariables.labelMaxHeight = l, 
                    this.sessionVariables.labelWrap = !0, s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), 
                    a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, 
                    this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : h >= 3.2 * l && h < 3.6 * l ? (this.sessionVariables.labelMaxHeight = b, 
                    this.sessionVariables.labelWrap = !0, this.sessionVariables.labelFontSize = this.labelFontSize) : h > 3.6 * l && h < 10 * l ? (s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), 
                    a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, 
                    this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelMaxHeight = l, 
                    this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : h > 10 * l && h < 50 * l && (s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), 
                    a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, 
                    this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelMaxWidth = f, 
                    this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle)) : (this.sessionVariables.labelMaxHeight = l, 
                    this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap || this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : f, 
                    this.sessionVariables.labelMaxHeight = l) : (this.sessionVariables.labelAngle = this.labelAngle, 
                    this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? f : Math.min((b - l * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), l), 
                    s(this.options.labelWrap) ? s(this.options.labelWrap) && (this.labelWrap && !s(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, 
                    this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : f, 
                    this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? l : b, s(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? l : b, 
                    this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = f) : (this.sessionVariables.labelMaxHeight = l, 
                    s(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, 
                    this.sessionVariables.labelWrap = this.labelWrap));
                }
                for (b = 0; b < this._labels.length; b++) (a = this._labels[b].textBlock).maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, 
                a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, 
                a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, 
                a.measureText();
            } else for (c = 0; c < this._labels.length; c++) (a = this._labels[c].textBlock).maxWidth = this.labelMaxWidth = s(this.options.labelMaxWidth) ? s(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = f : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, 
            a.fontSize = this.labelFontSize = s(this.options.labelFontSize) ? s(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, 
            a.angle = this.labelAngle = s(this.options.labelAngle) ? s(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, 
            a.wrap = this.labelWrap = s(this.options.labelWrap) ? s(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, 
            a.maxHeight = s(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = l : this.sessionVariables.labelMaxHeight, 
            a.measureText();
            for (c = 0; c < this.stripLines.length; c++) {
                var y;
                "outside" === (f = this.stripLines[c]).labelPlacement ? (l = this.sessionVariables.labelMaxWidth, 
                "bottom" !== this._position && "top" !== this._position || (s(f.options.labelWrap) && !s(this.sessionVariables.stripLineLabelMaxHeight) ? y = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = y = f.labelWrap ? .8 * this.chart.height >> 0 : 1.5 * this.labelFontSize), 
                "left" !== this._position && "right" !== this._position || (s(f.options.labelWrap) && !s(this.sessionVariables.stripLineLabelMaxHeight) ? y = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = y = f.labelWrap ? .8 * this.chart.width >> 0 : 1.5 * this.labelFontSize), 
                s(f.labelBackgroundColor) && (f.labelBackgroundColor = "#EEEEEE")) : (l = "bottom" === this._position || "top" === this._position ? .9 * this.chart.width >> 0 : .9 * this.chart.height >> 0, 
                y = s(f.options.labelWrap) || f.labelWrap ? "bottom" === this._position || "top" === this._position ? .8 * this.chart.width >> 0 : .8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, 
                s(f.labelBackgroundColor) && (s(f.startValue) && 0 !== f.startValue ? f.labelBackgroundColor = v ? "transparent" : null : f.labelBackgroundColor = "#EEEEEE")), 
                a = new ia(this.ctx, {
                    x: 0,
                    y: 0,
                    backgroundColor: f.labelBackgroundColor,
                    borderColor: f.labelBorderColor,
                    borderThickness: f.labelBorderThickness,
                    cornerRadius: f.labelCornerRadius,
                    maxWidth: f.options.labelMaxWidth ? f.options.labelMaxWidth : l,
                    maxHeight: y,
                    angle: this.labelAngle,
                    text: f.labelFormatter ? f.labelFormatter({
                        chart: this.chart,
                        axis: this,
                        stripLine: f
                    }) : f.label,
                    textAlign: this.labelTextAlign,
                    fontSize: "outside" === f.labelPlacement ? f.options.labelFontSize ? f.labelFontSize : this.labelFontSize : f.labelFontSize,
                    fontFamily: "outside" === f.labelPlacement ? f.options.labelFontFamily ? f.labelFontFamily : this.labelFontFamily : f.labelFontFamily,
                    fontWeight: "outside" === f.labelPlacement ? f.options.labelFontWeight ? f.labelFontWeight : this.labelFontWeight : f.labelFontWeight,
                    fontColor: f.labelFontColor || f.color,
                    fontStyle: "outside" === f.labelPlacement ? f.options.labelFontStyle ? f.labelFontStyle : this.fontWeight : f.labelFontStyle,
                    textBaseline: "middle"
                }), this._stripLineLabels.push({
                    position: f.value,
                    textBlock: a,
                    effectiveHeight: null,
                    stripLine: f
                });
            }
        }, D.prototype.createLabelsAndCalculateWidth = function() {
            var a = 0, d = 0;
            this._labels = [], this._stripLineLabels = [];
            var c = this.chart.isNavigator ? 0 : 5;
            if ("left" === this._position || "right" === this._position) {
                if (this.createLabels(), "inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index) for (d = 0; d < this._labels.length; d++) {
                    var b = this._labels[d].textBlock, e = b.measureText(), f = 0;
                    a < (f = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) && (a = f), 
                    this._labels[d].effectiveWidth = f;
                }
                for (d = 0; d < this._stripLineLabels.length; d++) "outside" === this._stripLineLabels[d].stripLine.labelPlacement && this._stripLineLabels[d].stripLine.value >= this.viewportMinimum && this._stripLineLabels[d].stripLine.value <= this.viewportMaximum && (e = (b = this._stripLineLabels[d].textBlock).measureText(), 
                a < (f = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) && (a = f), 
                this._stripLineLabels[d].effectiveWidth = f);
            }
            return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + c;
        }, D.prototype.createLabelsAndCalculateHeight = function() {
            var a = 0;
            this._labels = [], this._stripLineLabels = [];
            var d, c = 0, b = this.chart.isNavigator ? 0 : 5;
            if ("bottom" === this._position || "top" === this._position) {
                if (this.createLabels(), "inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index) for (c = 0; c < this._labels.length; c++) {
                    var e = (d = this._labels[c].textBlock).measureText(), f = 0;
                    a < (f = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) && (a = f), 
                    this._labels[c].effectiveHeight = f;
                }
                for (c = 0; c < this._stripLineLabels.length; c++) "outside" === this._stripLineLabels[c].stripLine.labelPlacement && this._stripLineLabels[c].stripLine.value >= this.viewportMinimum && this._stripLineLabels[c].stripLine.value <= this.viewportMaximum && (e = (d = this._stripLineLabels[c].textBlock).measureText(), 
                a < (f = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) && (a = f), 
                this._stripLineLabels[c].effectiveHeight = f);
            }
            return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + b;
        }, D.setLayout = function(a, d, c, b, e, f) {
            var l, h, m, k, n = a[0] ? a[0].chart : d[0].chart, p = n.isNavigator ? 0 : 10, q = n._axes;
            if (a && 0 < a.length) for (var g = 0; g < a.length; g++) a[g] && a[g].calculateAxisParameters();
            if (d && 0 < d.length) for (g = 0; g < d.length; g++) d[g].calculateAxisParameters();
            if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].calculateAxisParameters();
            if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].calculateAxisParameters();
            for (g = 0; g < q.length; g++) if (q[g] && q[g].scaleBreaks && q[g].scaleBreaks._appliedBreaks.length) for (var r = q[g].scaleBreaks._appliedBreaks, v = 0; v < r.length && !(r[v].startValue > q[g].viewportMaximum); v++) r[v].endValue < q[g].viewportMinimum || (s(q[g].scaleBreaks.firstBreakIndex) && (q[g].scaleBreaks.firstBreakIndex = v), 
            r[v].startValue >= q[g].viewPortMinimum && (q[g].scaleBreaks.lastBreakIndex = v));
            var B, D, H, J, L, w = v = 0, t = 0, x = 0, z = 0, y = 0, C = 0, F = h = 0;
            for (r = H = J = L = !1, g = 0; g < q.length; g++) q[g] && q[g].title && (q[g]._titleTextBlock = new ia(q[g].ctx, {
                text: q[g].title,
                horizontalAlign: "center",
                fontSize: q[g].titleFontSize,
                fontFamily: q[g].titleFontFamily,
                fontWeight: q[g].titleFontWeight,
                fontColor: q[g].titleFontColor,
                fontStyle: q[g].titleFontStyle,
                borderColor: q[g].titleBorderColor,
                borderThickness: q[g].titleBorderThickness,
                backgroundColor: q[g].titleBackgroundColor,
                cornerRadius: q[g].titleCornerRadius,
                textBaseline: "top"
            }));
            for (g = 0; g < q.length; g++) if (q[g].title) switch (q[g]._position) {
              case "left":
                q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.height, q[g]._titleTextBlock.maxHeight = q[g].titleWrap ? .8 * f.width : 1.5 * q[g].titleFontSize, 
                q[g]._titleTextBlock.angle = -90;
                break;

              case "right":
                q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.height, q[g]._titleTextBlock.maxHeight = q[g].titleWrap ? .8 * f.width : 1.5 * q[g].titleFontSize, 
                q[g]._titleTextBlock.angle = 90;
                break;

              default:
                q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.width, q[g]._titleTextBlock.maxHeight = q[g].titleWrap ? .8 * f.height : 1.5 * q[g].titleFontSize, 
                q[g]._titleTextBlock.angle = 0;
            }
            if ("normal" === e) {
                x = [], z = [], y = [], C = [];
                for (var M = [], N = [], Q = [], R = []; 4 > v; ) {
                    var G = 0, T = 0, V = 0, Y = 0, X = e = 0, K = 0, Z = 0, U = 0, W = 0, O = 0, $ = 0;
                    if (c && 0 < c.length) for (y = [], g = O = 0; g < c.length; g++) y.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateWidth() : 0)), 
                    O += y[g], K += c[g] && !n.isNavigator ? c[g].margin : 0; else y.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
                    if (Q.push(y), b && 0 < b.length) for (C = [], g = $ = 0; g < b.length; g++) C.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateWidth() : 0)), 
                    $ += C[g], Z += b[g] ? b[g].margin : 0; else C.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
                    if (R.push(C), l = Math.round(f.x1 + O + K), m = Math.round(f.x2 - $ - Z > n.width - p ? n.width - p : f.x2 - $ - Z), 
                    a && 0 < a.length) for (x = [], g = U = 0; g < a.length; g++) a[g] && (a[g].lineCoordinates = {}), 
                    a[g].lineCoordinates.width = Math.abs(m - l), a[g].title && (a[g]._titleTextBlock.maxWidth = 0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.width ? a[g].titleMaxWidth : a[g].lineCoordinates.width), 
                    x.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateHeight() : 0)), U += x[g], 
                    e += a[g] && !n.isNavigator ? a[g].margin : 0; else x.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
                    if (M.push(x), d && 0 < d.length) for (z = [], g = W = 0; g < d.length; g++) d[g] && (d[g].lineCoordinates = {}), 
                    d[g].lineCoordinates.width = Math.abs(m - l), d[g].title && (d[g]._titleTextBlock.maxWidth = 0 < d[g].titleMaxWidth && d[g].titleMaxWidth < d[g].lineCoordinates.width ? d[g].titleMaxWidth : d[g].lineCoordinates.width), 
                    z.push(Math.ceil(d[g] ? d[g].createLabelsAndCalculateHeight() : 0)), W += z[g], 
                    X += d[g] && !n.isNavigator ? d[g].margin : 0; else z.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateHeight() : 0));
                    if (N.push(z), a && 0 < a.length) for (g = 0; g < a.length; g++) a[g] && (a[g].lineCoordinates.x1 = l, 
                    m = Math.round(f.x2 - $ - Z > n.width - p ? n.width - p : f.x2 - $ - Z), a[g]._labels && 1 < a[g]._labels.length && (h = k = 0, 
                    k = a[g]._labels[1], h = "dateTime" === a[g].valueType ? a[g]._labels[a[g]._labels.length - 2] : a[g]._labels[a[g]._labels.length - 1], 
                    w = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), 
                    t = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle))), 
                    !a[g] || !a[g].labelAutoFit || s(B) || s(D) || n.isNavigator || n.stockChart || (h = 0, 
                    0 < a[g].labelAngle ? D + t > m && (h += 0 < a[g].labelAngle ? D + t - m - $ : 0) : 0 > a[g].labelAngle ? B - w < l && B - w < a[g].viewportMinimum && (F = l - (K + a[g].tickLength + y + B - w + a[g].labelFontSize / 2)) : 0 === a[g].labelAngle && (D + t > m && (h = D + t / 2 - m - $), 
                    B - w < l && B - w < a[g].viewportMinimum && (F = l - K - a[g].tickLength - y - B + w / 2)), 
                    a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 < a[g].labelAngle && 0 < h ? m -= h : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 > a[g].labelAngle && 0 < F ? l += F : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 === a[g].labelAngle && (0 < F && (l += F), 
                    0 < h && (m -= h))), n.panEnabled ? U = s(n.sessionVariables.axisX.height) ? n.sessionVariables.axisX.height = U : n.sessionVariables.axisX.height : n.sessionVariables.axisX.height = U, 
                    h = Math.round(f.y2 - U - e + G), k = Math.round(f.y2), a[g].lineCoordinates.x2 = m, 
                    a[g].lineCoordinates.width = m - l, a[g].lineCoordinates.y1 = h, a[g].lineCoordinates.y2 = h + a[g].lineThickness / 2, 
                    "inside" === a[g].labelPlacement && 0 < g && (a[g].lineCoordinates.y1 = a[g].lineCoordinates.y1 + x[g] - (a[g]._titleTextBlock ? a[g]._titleTextBlock.height : 0) - ("inside" === a[g].tickPlacement ? a[g].tickLength : 0), 
                    a[g].lineCoordinates.y2 = a[g].lineCoordinates.y1 + a[g].lineThickness / 2), a[g].bounds = {
                        x1: l,
                        y1: h,
                        x2: m,
                        y2: k - (U + e - x[g] - G),
                        width: m - l,
                        height: k - h
                    }), G += x[g] + a[g].margin;
                    if (d && 0 < d.length) for (g = 0; g < d.length; g++) d[g].lineCoordinates.x1 = Math.round(f.x1 + O + K), 
                    d[g].lineCoordinates.x2 = Math.round(f.x2 - $ - Z > n.width - p ? n.width - p : f.x2 - $ - Z), 
                    d[g].lineCoordinates.width = Math.abs(m - l), d[g]._labels && 1 < d[g]._labels.length && (k = d[g]._labels[1], 
                    h = "dateTime" === d[g].valueType ? d[g]._labels[d[g]._labels.length - 2] : d[g]._labels[d[g]._labels.length - 1], 
                    w = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), 
                    t = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle))), 
                    n.panEnabled ? W = s(n.sessionVariables.axisX2.height) ? n.sessionVariables.axisX2.height = W : n.sessionVariables.axisX2.height : n.sessionVariables.axisX2.height = W, 
                    h = Math.round(f.y1), k = Math.round(f.y2 + d[g].margin), d[g].lineCoordinates.y1 = h + W + X - T, 
                    d[g].lineCoordinates.y2 = h, "inside" === d[g].labelPlacement && 0 < g && (d[g].lineCoordinates.y1 = d[g - 1].bounds.y1 - z[g] + (d[g]._titleTextBlock ? d[g]._titleTextBlock.height : 0)), 
                    d[g].bounds = {
                        x1: l,
                        y1: h + (W + X - z[g] - T),
                        x2: m,
                        y2: k,
                        width: m - l,
                        height: k - h
                    }, T += z[g] + d[g].margin;
                    if (c && 0 < c.length) for (g = 0; g < c.length; g++) K = n.isNavigator ? 0 : 10, 
                    c[g] && (l = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), 
                    K = c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[c[g]._labels.length - 1].textBlock.height / 2 : p, 
                    h = Math.round(f.y1 + W + X < Math.max(K, p) ? Math.max(K, p) : f.y1 + W + X), m = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), 
                    K = 0 < a.length ? 0 : c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[0].textBlock.height / 2 : p, 
                    k = Math.round(f.y2 - U - e - K), c[g].lineCoordinates = {
                        x1: l - V,
                        y1: h,
                        x2: m - V,
                        y2: k,
                        height: Math.abs(k - h)
                    }, "inside" === c[g].labelPlacement && 0 < g && (c[g].lineCoordinates.x1 = c[g].lineCoordinates.x1 - (y[g] - c[g]._titleTextBlock ? c[g]._titleTextBlock.height : 0) + ("outside" === c[g].tickPlacement ? c[g].tickLength : 0), 
                    c[g].lineCoordinates.x2 = c[g].lineCoordinates.x1 + c[g].lineThickness / 2), c[g].bounds = {
                        x1: l - (y[g] + V),
                        y1: h,
                        x2: m,
                        y2: k,
                        width: m - l,
                        height: k - h
                    }, c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.height ? c[g].titleMaxWidth : c[g].lineCoordinates.height), 
                    V += y[g] + c[g].margin);
                    if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g] && (l = Math.round(a[0] ? a[0].lineCoordinates.x2 : d[0].lineCoordinates.x2), 
                    m = Math.round(l), K = b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[b[g]._labels.length - 1].textBlock.height / 2 : 0, 
                    h = Math.round(f.y1 + W + X < Math.max(K, p) ? Math.max(K, p) : f.y1 + W + X), K = 0 < a.length ? 0 : b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[0].textBlock.height / 2 : 0, 
                    k = Math.round(f.y2 - (U + e + K)), b[g].lineCoordinates = {
                        x1: l + Y,
                        y1: h,
                        x2: l + Y,
                        y2: k,
                        height: Math.abs(k - h)
                    }, "inside" === b[g].labelPlacement && 0 < g && (b[g].lineCoordinates.x1 = b[g].lineCoordinates.x1 + (C[g] - b[g]._titleTextBlock ? b[g]._titleTextBlock.height : 0) - ("outside" === b[g].tickPlacement ? b[g].tickLength : 0) - 2, 
                    b[g].lineCoordinates.x2 = b[g].lineCoordinates.x1 + b[g].lineThickness / 2), b[g].bounds = {
                        x1: l,
                        y1: h,
                        x2: m + (C[g] + Y),
                        y2: k,
                        width: m - l,
                        height: k - h
                    }, b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.height ? b[g].titleMaxWidth : b[g].lineCoordinates.height), 
                    Y += C[g] + b[g].margin);
                    if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g] && (a[g].calculateValueToPixelConversionParameters(), 
                    a[g].calculateBreaksSizeInValues(), a[g]._labels && 1 < a[g]._labels.length && (B = (a[g].logarithmic ? Math.log(a[g]._labels[1].position / a[g].viewportMinimum) / a[g].conversionParameters.lnLogarithmBase : a[g]._labels[1].position - a[g].viewportMinimum) * Math.abs(a[g].conversionParameters.pixelPerUnit) + a[g].lineCoordinates.x1, 
                    l = a[g]._labels[a[g]._labels.length - ("dateTime" === a[g].valueType ? 2 : 1)].position, 
                    l = a[g].getApparentDifference(a[g].viewportMinimum, l), D = a[g].logarithmic ? (1 < l ? Math.log(l) / a[g].conversionParameters.lnLogarithmBase * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1 : (0 < l ? l * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1));
                    if (d && 0 < d.length) for (g = 0; g < d.length; g++) d[g].calculateValueToPixelConversionParameters(), 
                    d[g].calculateBreaksSizeInValues(), d[g]._labels && 1 < d[g]._labels.length && (B = (d[g].logarithmic ? Math.log(d[g]._labels[1].position / d[g].viewportMinimum) / d[g].conversionParameters.lnLogarithmBase : d[g]._labels[1].position - d[g].viewportMinimum) * Math.abs(d[g].conversionParameters.pixelPerUnit) + d[g].lineCoordinates.x1, 
                    l = d[g]._labels[d[g]._labels.length - ("dateTime" === d[g].valueType ? 2 : 1)].position, 
                    l = d[g].getApparentDifference(d[g].viewportMinimum, l), D = d[g].logarithmic ? (1 < l ? Math.log(l) / d[g].conversionParameters.lnLogarithmBase * Math.abs(d[g].conversionParameters.pixelPerUnit) : 0) + d[g].lineCoordinates.x1 : (0 < l ? l * Math.abs(d[g].conversionParameters.pixelPerUnit) : 0) + d[g].lineCoordinates.x1);
                    for (g = 0; g < q.length; g++) "axisY" === q[g].type && (q[g].calculateValueToPixelConversionParameters(), 
                    q[g].calculateBreaksSizeInValues());
                    if (0 < v) {
                        if (a && 0 < a.length) for (g = 0; g < a.length; g++) r = M[v - 1][g] === M[v][g]; else r = !0;
                        if (d && 0 < d.length) for (g = 0; g < d.length; g++) H = N[v - 1][g] === N[v][g]; else H = !0;
                        if (c && 0 < c.length) for (g = 0; g < c.length; g++) J = Q[v - 1][g] === Q[v][g]; else J = !0;
                        if (b && 0 < b.length) for (g = 0; g < b.length; g++) L = R[v - 1][g] === R[v][g]; else L = !0;
                    }
                    if (r && H && J && L) break;
                    v++;
                }
                if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(), 
                a[g].calculateBreaksInPixels();
                if (d && 0 < d.length) for (g = 0; g < d.length; g++) d[g].calculateStripLinesThicknessInValues(), 
                d[g].calculateBreaksInPixels();
                if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), 
                c[g].calculateBreaksInPixels();
                if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), 
                b[g].calculateBreaksInPixels();
            } else {
                for (p = [], B = [], F = [], w = [], D = [], t = [], M = [], N = []; 4 > v; ) {
                    if (U = Y = T = V = Z = K = X = e = R = Q = G = W = 0, a && 0 < a.length) for (F = [], 
                    g = Y = 0; g < a.length; g++) F.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateWidth() : 0)), 
                    Y += F[g], e += a[g] && !n.isNavigator ? a[g].margin : 0; else F.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
                    if (M.push(F), d && 0 < d.length) for (w = [], g = U = 0; g < d.length; g++) w.push(Math.ceil(d[g] ? d[g].createLabelsAndCalculateWidth() : 0)), 
                    U += w[g], X += d[g] ? d[g].margin : 0; else w.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateWidth() : 0));
                    if (N.push(w), c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].lineCoordinates = {}, 
                    l = Math.round(f.x1 + Y + e), m = Math.round(f.x2 - U - X > n.width - 10 ? n.width - 10 : f.x2 - U - X), 
                    c[g].labelAutoFit && !s(x) && (0 < !a.length && (l = 0 > c[g].labelAngle ? Math.max(l, x) : 0 === c[g].labelAngle ? Math.max(l, x / 2) : l), 
                    0 < !d.length && (m = 0 < c[g].labelAngle || 0 === c[g].labelAngle ? m - z / 2 : m)), 
                    c[g].lineCoordinates.x1 = l, c[g].lineCoordinates.x2 = m, c[g].lineCoordinates.width = Math.abs(m - l), 
                    c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width);
                    if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].lineCoordinates = {}, 
                    l = Math.round(f.x1 + Y + e), m = Math.round(f.x2 - U - X > b[g].chart.width - 10 ? b[g].chart.width - 10 : f.x2 - U - X), 
                    b[g] && b[g].labelAutoFit && !s(y) && (0 < !a.length && (l = 0 < b[g].labelAngle ? Math.max(l, y) : 0 === b[g].labelAngle ? Math.max(l, y / 2) : l), 
                    0 < !d.length && (m -= C / 2)), b[g].lineCoordinates.x1 = l, b[g].lineCoordinates.x2 = m, 
                    b[g].lineCoordinates.width = Math.abs(m - l), b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width);
                    if (c && 0 < c.length) for (p = [], g = V = 0; g < c.length; g++) p.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateHeight() : 0)), 
                    V += p[g] + c[g].margin, K += c[g].margin; else p.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
                    if (D.push(p), b && 0 < b.length) for (B = [], g = T = 0; g < b.length; g++) B.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateHeight() : 0)), 
                    T += B[g], Z += b[g].margin; else B.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
                    if (t.push(B), c && 0 < c.length) for (g = 0; g < c.length; g++) 0 < c[g]._labels.length && (k = c[g]._labels[0], 
                    h = c[g]._labels[c[g]._labels.length - 1], x = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), 
                    z = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)));
                    if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g] && 0 < b[g]._labels.length && (k = b[g]._labels[0], 
                    h = b[g]._labels[b[g]._labels.length - 1], y = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), 
                    C = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)));
                    if (n.panEnabled) for (g = 0; g < c.length; g++) p[g] = s(n.sessionVariables.axisY.height) ? n.sessionVariables.axisY.height = p[g] : n.sessionVariables.axisY.height; else for (g = 0; g < c.length; g++) n.sessionVariables.axisY.height = p[g];
                    if (c && 0 < c.length) for (g = c.length - 1; 0 <= g; g--) h = Math.round(f.y2), 
                    k = Math.round(f.y2 > c[g].chart.height ? c[g].chart.height : f.y2), c[g].lineCoordinates.y1 = h - (p[g] + c[g].margin + W), 
                    c[g].lineCoordinates.y2 = h - (p[g] + c[g].margin + W), "inside" === c[g].labelPlacement && 0 < g && (c[g].lineCoordinates.y1 = c[g].lineCoordinates.y1 + p[g] - (c[g]._titleTextBlock ? c[g]._titleTextBlock.height : 0) - ("inside" === c[g].tickPlacement ? c[g].tickLength : 0), 
                    c[g].lineCoordinates.y2 = c[g].lineCoordinates.y1 + c[g].lineThickness / 2), c[g].bounds = {
                        x1: l,
                        y1: h - (p[g] + W + c[g].margin),
                        x2: m,
                        y2: k - (W + c[g].margin),
                        width: m - l,
                        height: p[g]
                    }, c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width), 
                    W += p[g] + c[g].margin;
                    if (b && 0 < b.length) for (g = b.length - 1; 0 <= g; g--) b[g] && (h = Math.round(f.y1), 
                    k = Math.round(f.y1 + (B[g] + b[g].margin + G)), b[g].lineCoordinates.y1 = k, b[g].lineCoordinates.y2 = k, 
                    "inside" === b[g].labelPlacement && 0 < g && (b[g].lineCoordinates.y1 = k - B[g] + (b[g]._titleTextBlock ? b[g]._titleTextBlock.height : 0)), 
                    b[g].bounds = {
                        x1: l,
                        y1: h + (b[g].margin + G),
                        x2: m,
                        y2: k,
                        width: m - l,
                        height: T
                    }, b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width), 
                    G += B[g] + b[g].margin);
                    if (a && 0 < a.length) for (g = 0; g < a.length; g++) {
                        if (K = a[g]._labels && 0 < a[g]._labels.length ? a[g]._labels[0].textBlock.fontSize / 2 : 0, 
                        l = Math.round(f.x1 + e), h = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : f.y1 < Math.max(K, 10) ? Math.max(K, 10) : f.y1) : f.y1 < Math.max(K, 10) ? Math.max(K, 10) : f.y1, 
                        m = Math.round(f.x1 + Y + e), k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : f.y2 - V > n.height - Math.max(K, 10) ? n.height - Math.max(K, 10) : f.y2 - V) : f.y2 > n.height - Math.max(K, 10) ? n.height - Math.max(K, 10) : f.y2, 
                        c && 0 < c.length) for (K = 0; K < c.length; K++) c[K] && c[K].labelAutoFit && (m = 0 > c[K].labelAngle ? Math.max(m, x) : 0 === c[K].labelAngle ? Math.max(m, x / 2) : m, 
                        l = 0 > c[K].labelAngle || 0 === c[K].labelAngle ? m - Y : l);
                        if (b && 0 < b.length) for (K = 0; K < b.length; K++) b[K] && b[K].labelAutoFit && (l = (m = b[K].lineCoordinates.x1) - Y);
                        a[g].lineCoordinates = {
                            x1: m - Q,
                            y1: h,
                            x2: m - Q,
                            y2: k,
                            height: Math.abs(k - h)
                        }, "inside" === a[g].labelPlacement && 0 < g && (a[g].lineCoordinates.x1 = a[g].lineCoordinates.x1 - (F[g] - (a[g]._titleTextBlock ? a[g]._titleTextBlock.height : 0)) + ("outside" === a[g].tickPlacement ? a[g].tickLength : 0), 
                        a[g].lineCoordinates.x2 = a[g].lineCoordinates.x1 + a[g].lineThickness / 2), a[g].bounds = {
                            x1: m - (F[g] + Q),
                            y1: h,
                            x2: m,
                            y2: k,
                            width: m - l,
                            height: k - h
                        }, a[g].title && (a[g]._titleTextBlock.maxWidth = 0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.height ? a[g].titleMaxWidth : a[g].lineCoordinates.height), 
                        a[g].calculateValueToPixelConversionParameters(), a[g].calculateBreaksSizeInValues(), 
                        Q += F[g] + a[g].margin;
                    }
                    if (d && 0 < d.length) for (g = 0; g < d.length; g++) {
                        if (K = d[g]._labels && 0 < d[g]._labels.length ? d[g]._labels[0].textBlock.fontSize / 2 : 0, 
                        l = Math.round(f.x1 - e), h = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : f.y1 < Math.max(K, 10) ? Math.max(K, 10) : f.y1) : f.y1 < Math.max(K, 10) ? Math.max(K, 10) : f.y1, 
                        m = Math.round(f.x2 - U - X), k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : f.y2 - V > n.height - Math.max(K, 10) ? n.height - Math.max(K, 10) : f.y2 - V) : f.y2 > n.height - Math.max(K, 10) ? n.height - Math.max(K, 10) : f.y2, 
                        c && 0 < c.length) for (K = 0; K < c.length; K++) c[K] && c[K].labelAutoFit && (m = 0 > c[K].labelAngle ? Math.max(m, x) : 0 === c[K].labelAngle ? Math.max(m, x / 2) : m, 
                        l = 0 > c[K].labelAngle || 0 === c[K].labelAngle ? m - U : l);
                        if (b && 0 < b.length) for (K = 0; K < b.length; K++) b[K] && b[K].labelAutoFit && (l = (m = b[K].lineCoordinates.x2) - U);
                        d[g].lineCoordinates = {
                            x1: m + R,
                            y1: h,
                            x2: m + R,
                            y2: k,
                            height: Math.abs(k - h)
                        }, "inside" === d[g].labelPlacement && 0 < g && (d[g].lineCoordinates.x1 = d[g].lineCoordinates.x1 + (w[g] - (d[g]._titleTextBlock ? d[g]._titleTextBlock.height : 0) - 2) - ("outside" === d[g].tickPlacement ? d[g].tickLength : 0), 
                        d[g].lineCoordinates.x2 = d[g].lineCoordinates.x1 + d[g].lineThickness / 2), d[g].bounds = {
                            x1: d[g].lineCoordinates.x1,
                            y1: h,
                            x2: m + w[g] + R,
                            y2: k,
                            width: m - l,
                            height: k - h
                        }, d[g].title && (d[g]._titleTextBlock.maxWidth = 0 < d[g].titleMaxWidth && d[g].titleMaxWidth < d[g].lineCoordinates.height ? d[g].titleMaxWidth : d[g].lineCoordinates.height), 
                        d[g].calculateValueToPixelConversionParameters(), d[g].calculateBreaksSizeInValues(), 
                        R += w[g] + d[g].margin;
                    }
                    for (g = 0; g < q.length; g++) "axisY" === q[g].type && (q[g].calculateValueToPixelConversionParameters(), 
                    q[g].calculateBreaksSizeInValues());
                    if (0 < v) {
                        if (a && 0 < a.length) for (g = 0; g < a.length; g++) r = M[v - 1][g] === M[v][g]; else r = !0;
                        if (d && 0 < d.length) for (g = 0; g < d.length; g++) H = N[v - 1][g] === N[v][g]; else H = !0;
                        if (c && 0 < c.length) for (g = 0; g < c.length; g++) J = D[v - 1][g] === D[v][g]; else J = !0;
                        if (b && 0 < b.length) for (g = 0; g < b.length; g++) L = t[v - 1][g] === t[v][g]; else L = !0;
                    }
                    if (r && H && J && L) break;
                    v++;
                }
                if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), 
                c[g].calculateBreaksInPixels();
                if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), 
                b[g].calculateBreaksInPixels();
                if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(), 
                a[g].calculateBreaksInPixels();
                if (d && 0 < d.length) for (g = 0; g < d.length; g++) d[g].calculateStripLinesThicknessInValues(), 
                d[g].calculateBreaksInPixels();
            }
        }, D.render = function(a, d, c, b, e) {
            var f = a[0] ? a[0].chart : d[0].chart;
            if (e = f.ctx, f.alignVerticalAxes && f.alignVerticalAxes(), e.save(), e.beginPath(), 
            a[0] && e.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[0].bounds.height), d[0] && e.rect(5, d[d.length - 1].bounds.y1, d[0].chart.width - 10, d[0].bounds.height), 
            e.clip(), a && 0 < a.length) for (var l = 0; l < a.length; l++) a[l].renderLabelsTicksAndTitle();
            if (d && 0 < d.length) for (l = 0; l < d.length; l++) d[l].renderLabelsTicksAndTitle();
            if (e.restore(), c && 0 < c.length) for (l = 0; l < c.length; l++) c[l].renderLabelsTicksAndTitle();
            if (b && 0 < b.length) for (l = 0; l < b.length; l++) b[l].renderLabelsTicksAndTitle();
            if (f.preparePlotArea(), f = f.plotArea, e.save(), e.beginPath(), e.rect(f.x1, f.y1, Math.abs(f.x2 - f.x1), Math.abs(f.y2 - f.y1)), 
            e.clip(), a && 0 < a.length) for (l = 0; l < a.length; l++) a[l].renderStripLinesOfThicknessType("value");
            if (d && 0 < d.length) for (l = 0; l < d.length; l++) d[l].renderStripLinesOfThicknessType("value");
            if (c && 0 < c.length) for (l = 0; l < c.length; l++) c[l].renderStripLinesOfThicknessType("value");
            if (b && 0 < b.length) for (l = 0; l < b.length; l++) b[l].renderStripLinesOfThicknessType("value");
            if (a && 0 < a.length) for (l = 0; l < a.length; l++) a[l].renderInterlacedColors();
            if (d && 0 < d.length) for (l = 0; l < d.length; l++) d[l].renderInterlacedColors();
            if (c && 0 < c.length) for (l = 0; l < c.length; l++) c[l].renderInterlacedColors();
            if (b && 0 < b.length) for (l = 0; l < b.length; l++) b[l].renderInterlacedColors();
            if (e.restore(), a && 0 < a.length) for (l = 0; l < a.length; l++) a[l].renderGrid(), 
            v && (a[l].createMask(), a[l].renderBreaksBackground());
            if (d && 0 < d.length) for (l = 0; l < d.length; l++) d[l].renderGrid(), v && (d[l].createMask(), 
            d[l].renderBreaksBackground());
            if (c && 0 < c.length) for (l = 0; l < c.length; l++) c[l].renderGrid(), v && (c[l].createMask(), 
            c[l].renderBreaksBackground());
            if (b && 0 < b.length) for (l = 0; l < b.length; l++) b[l].renderGrid(), v && (b[l].createMask(), 
            b[l].renderBreaksBackground());
            if (a && 0 < a.length) for (l = 0; l < a.length; l++) a[l].renderAxisLine();
            if (d && 0 < d.length) for (l = 0; l < d.length; l++) d[l].renderAxisLine();
            if (c && 0 < c.length) for (l = 0; l < c.length; l++) c[l].renderAxisLine();
            if (b && 0 < b.length) for (l = 0; l < b.length; l++) b[l].renderAxisLine();
            if (a && 0 < a.length) for (l = 0; l < a.length; l++) a[l].renderStripLinesOfThicknessType("pixel");
            if (d && 0 < d.length) for (l = 0; l < d.length; l++) d[l].renderStripLinesOfThicknessType("pixel");
            if (c && 0 < c.length) for (l = 0; l < c.length; l++) c[l].renderStripLinesOfThicknessType("pixel");
            if (b && 0 < b.length) for (l = 0; l < b.length; l++) b[l].renderStripLinesOfThicknessType("pixel");
        }, D.prototype.calculateStripLinesThicknessInValues = function() {
            for (var a = 0; a < this.stripLines.length; a++) if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
                var d = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue), c = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue);
                d = this.getApparentDifference(d, c);
                this.stripLines[a].value = this.logarithmic ? this.stripLines[a].value * Math.sqrt(Math.log(Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue) / Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue)) / Math.log(d)) : this.stripLines[a].value + (Math.abs(this.stripLines[a].endValue - this.stripLines[a].startValue) - d) / 2, 
                this.stripLines[a].thickness = d, this.stripLines[a]._thicknessType = "value";
            }
        }, D.prototype.calculateBreaksSizeInValues = function() {
            for (var e, a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), b = this.scaleBreaks && !s(this.scaleBreaks.options.spacing), f = 0; f < d.length; f++) e = b || !s(d[f].options.spacing), 
            d[f].spacing = Ra(d[f].spacing, a, 8, e ? .1 * a : 8, e ? 0 : 3) << 0, d[f].size = 0 > d[f].spacing ? 0 : Math.abs(d[f].spacing / c), 
            this.logarithmic && (d[f].size = Math.pow(this.logarithmBase, d[f].size));
        }, D.prototype.calculateBreaksInPixels = function() {
            if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
                var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
                a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
                for (var d = 0; d < a.length && !(a[d].startValue > this.conversionParameters.maximum); d++) a[d].endValue < this.conversionParameters.minimum || (s(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = d), 
                a[d].startValue >= this.conversionParameters.minimum && (a[d].startPixel = this.convertValueToPixel(a[d].startValue), 
                this.scaleBreaks.lastBreakIndex = d), a[d].endValue <= this.conversionParameters.maximum && (a[d].endPixel = this.convertValueToPixel(a[d].endValue)));
            }
        }, D.prototype.renderLabelsTicksAndTitle = function() {
            var a = this, d = !1, c = 0, b = 0, e = 1, f = 0;
            if (0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2), void 0 === this.options.interval) {
                if ("bottom" === this._position || "top" === this._position) if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                    c = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2;
                    for (var l, h = this.viewportMaximum, m = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length - 1; 0 <= k && !((p = this._labels[k]).position < this.viewportMinimum); k--) p.position > this.viewportMaximum || !(k === this._labels.length - 1 || l < Math.log(h / p.position) * m / e) || (c.push(p), 
                    h = p.position, l = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
                    this._labels = c;
                } else {
                    for (k = 0; k < this._labels.length; k++) (p = this._labels[k]).position < this.viewportMinimum || (c += l = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
                    c > this.lineCoordinates.width * e && this.labelAutoFit && (d = !0);
                }
                if ("left" === this._position || "right" === this._position) if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                    var n;
                    for (c = [], h = this.viewportMaximum, m = this.lineCoordinates.height / Math.log(this.range), 
                    k = this._labels.length - 1; 0 <= k && !((p = this._labels[k]).position < this.viewportMinimum); k--) p.position > this.viewportMaximum || !(k === this._labels.length - 1 || n < Math.log(h / p.position) * m) || (c.push(p), 
                    h = p.position, n = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
                    this._labels = c;
                } else {
                    for (k = 0; k < this._labels.length; k++) (p = this._labels[k]).position < this.viewportMinimum || (b += n = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
                    b > this.lineCoordinates.height * e && this.labelAutoFit && (d = !0);
                }
            }
            this.logarithmic && !this.equidistantInterval && this.labelAutoFit && this._labels.sort((function(a, b) {
                return a.position - b.position;
            }));
            var p, q;
            k = 0;
            if ("bottom" === this._position) {
                for (k = 0; k < this._labels.length; k++) (p = this._labels[k]).position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), 
                this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, 
                this.ctx.strokeStyle = this.tickColor, b = 1 == this.ctx.lineWidth % 2 ? .5 + (q.x << 0) : q.x << 0, 
                this.ctx.beginPath(), this.ctx.moveTo(b, q.y << 0), this.ctx.lineTo(b, q.y + this.tickLength << 0), 
                this.ctx.stroke()), d && 0 != f++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, 
                q.y = "inside" === this.labelPlacement ? q.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + p.textBlock.height - p.textBlock.fontSize / 2) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.fontSize / 2 + 5) : (q.x = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.x : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x - (0 > this.labelAngle ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), 
                q.y = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - Math.abs(p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + Math.abs(0 > this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), 
                p.textBlock.x = q.x, p.textBlock.y = q.y));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", (function() {
                    for (k = 0; k < a._labels.length; k++) if (!((p = a._labels[k]).position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), 
                    a.tickThickness)) {
                        a.ctx.lineWidth = a.tickThickness, a.ctx.strokeStyle = a.tickColor;
                        var b = 1 == a.ctx.lineWidth % 2 ? .5 + (q.x << 0) : q.x << 0;
                        a.ctx.save(), a.ctx.beginPath(), a.ctx.moveTo(b, q.y << 0), a.ctx.lineTo(b, q.y - a.tickLength << 0), 
                        a.ctx.stroke(), a.ctx.restore();
                    }
                }), this), this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, 
                this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height - 3, this.titleMaxWidth = this._titleTextBlock.maxWidth, 
                this._titleTextBlock.render(!0));
            } else if ("top" === this._position) {
                for (k = 0; k < this._labels.length; k++) (p = this._labels[k]).position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), 
                this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, 
                this.ctx.strokeStyle = this.tickColor, b = 1 == this.ctx.lineWidth % 2 ? .5 + (q.x << 0) : q.x << 0, 
                this.ctx.beginPath(), this.ctx.moveTo(b, q.y << 0), this.ctx.lineTo(b, q.y - this.tickLength << 0), 
                this.ctx.stroke()), d && 0 != f++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, 
                q.y = "inside" === this.labelPlacement ? q.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.height - p.textBlock.fontSize / 2)) : (q.x = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.x : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x + (p.textBlock.height - this.labelFontSize) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), 
                q.y = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + ((p.textBlock.height - p.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))), 
                p.textBlock.x = q.x, p.textBlock.y = q.y));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", (function() {
                    for (k = 0; k < a._labels.length; k++) if (!((p = a._labels[k]).position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), 
                    a.tickThickness)) {
                        a.ctx.lineWidth = a.tickThickness, a.ctx.strokeStyle = a.tickColor;
                        var b = 1 == a.ctx.lineWidth % 2 ? .5 + (q.x << 0) : q.x << 0;
                        a.ctx.save(), a.ctx.beginPath(), a.ctx.moveTo(b, q.y << 0), a.ctx.lineTo(b, q.y + a.tickLength << 0), 
                        a.ctx.stroke(), a.ctx.restore();
                    }
                }), this), this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, 
                this._titleTextBlock.y = this.bounds.y1 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, 
                this._titleTextBlock.render(!0));
            } else if ("left" === this._position) {
                for (k = 0; k < this._labels.length; k++) (p = this._labels[k]).position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), 
                this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, 
                this.ctx.strokeStyle = this.tickColor, b = 1 == this.ctx.lineWidth % 2 ? .5 + (q.y << 0) : q.y << 0, 
                this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x - this.tickLength << 0, b), 
                this.ctx.stroke()), d && 0 != f++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (p.textBlock.y = q.y, 
                p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), 
                p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : 0 < this.labelAngle ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength))));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", (function() {
                    for (k = 0; k < a._labels.length; k++) if (!((p = a._labels[k]).position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), 
                    a.tickThickness)) {
                        a.ctx.lineWidth = a.tickThickness, a.ctx.strokeStyle = a.tickColor;
                        var b = 1 == a.ctx.lineWidth % 2 ? .5 + (q.y << 0) : q.y << 0;
                        a.ctx.save(), a.ctx.beginPath(), a.ctx.moveTo(q.x << 0, b), a.ctx.lineTo(q.x + a.tickLength << 0, b), 
                        a.ctx.stroke(), a.ctx.restore();
                    }
                }), this), this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + 1, 
                this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, 
                this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0));
            } else if ("right" === this._position) {
                for (k = 0; k < this._labels.length; k++) (p = this._labels[k]).position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), 
                this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, 
                this.ctx.strokeStyle = this.tickColor, b = 1 == this.ctx.lineWidth % 2 ? .5 + (q.y << 0) : q.y << 0, 
                this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x + this.tickLength << 0, b), 
                this.ctx.stroke()), d && 0 != f++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (p.textBlock.y = q.y, 
                p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0 > this.labelAngle ? q.y : q.y - (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), 
                p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : 0 < this.labelAngle ? q.x + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", (function() {
                    for (k = 0; k < a._labels.length; k++) if (!((p = a._labels[k]).position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), 
                    a.tickThickness)) {
                        a.ctx.lineWidth = a.tickThickness, a.ctx.strokeStyle = a.tickColor;
                        var b = 1 == a.ctx.lineWidth % 2 ? .5 + (q.y << 0) : q.y << 0;
                        a.ctx.save(), a.ctx.beginPath(), a.ctx.moveTo(q.x << 0, b), a.ctx.lineTo(q.x - a.tickLength << 0, b), 
                        a.ctx.stroke(), a.ctx.restore();
                    }
                }), this), this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - 1, 
                this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, 
                this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0));
            }
            if (f = 0, "inside" === this.labelPlacement) this.chart.addEventListener("dataAnimationEnd", (function() {
                for (k = 0; k < a._labels.length; k++) (p = a._labels[k]).position < a.viewportMinimum || p.position > a.viewportMaximum || d && 0 != f++ % 2 && a.labelAutoFit || (a.ctx.save(), 
                a.ctx.beginPath(), p.textBlock.render(!0), a.ctx.restore());
            }), this); else for (k = 0; k < this._labels.length; k++) (p = this._labels[k]).position < this.viewportMinimum || p.position > this.viewportMaximum || d && 0 != f++ % 2 && this.labelAutoFit || p.textBlock.render(!0);
        }, D.prototype.renderInterlacedColors = function() {
            var d, c, a = this.chart.plotArea.ctx, b = this.chart.plotArea, e = 0;
            if (d = !0, "bottom" !== this._position && "top" !== this._position || !this.interlacedColor) {
                if (("left" === this._position || "right" === this._position) && this.interlacedColor) for (a.fillStyle = this.interlacedColor, 
                e = 0; e < this._labels.length; e++) d ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position), 
                d = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), 
                a.fillRect(b.x1, Math.min(c.y, d.y), Math.abs(b.x1 - b.x2), Math.abs(d.y - c.y)), 
                d = !1) : d = !0;
            } else for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) d ? (d = this.getPixelCoordinatesOnAxis(this._labels[e].position), 
            c = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), 
            a.fillRect(Math.min(c.x, d.x), b.y1, Math.abs(c.x - d.x), Math.abs(b.y1 - b.y2)), 
            d = !1) : d = !0;
            a.beginPath();
        }, D.prototype.renderStripLinesOfThicknessType = function(a) {
            if (this.stripLines && 0 < this.stripLines.length && a) {
                var c, d = this, b = 0, e = 0, f = !1, l = !1, h = [], m = [];
                for (l = !1, b = 0; b < this.stripLines.length; b++) {
                    var k = this.stripLines[b];
                    k._thicknessType === a && ("pixel" === a && (k.value < this.viewportMinimum || k.value > this.viewportMaximum || s(k.value) || isNaN(this.range)) || "value" === a && (k.startValue <= this.viewportMinimum && k.endValue <= this.viewportMinimum || k.startValue >= this.viewportMaximum && k.endValue >= this.viewportMaximum || s(k.startValue) || s(k.endValue) || isNaN(this.range)) || h.push(k));
                }
                for (b = 0; b < this._stripLineLabels.length; b++) if (k = this.stripLines[b], !((c = this._stripLineLabels[b]).position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range))) {
                    if (a = this.getPixelCoordinatesOnAxis(c.position), "outside" === c.stripLine.labelPlacement) if (k && (this.ctx.strokeStyle = k.color, 
                    "pixel" === k._thicknessType && (this.ctx.lineWidth = k.thickness)), "bottom" === this._position) {
                        var n = 1 == this.ctx.lineWidth % 2 ? .5 + (a.x << 0) : a.x << 0;
                        this.ctx.beginPath(), this.ctx.moveTo(n, a.y << 0), this.ctx.lineTo(n, a.y + this.tickLength << 0), 
                        this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= c.textBlock.width / 2, a.y += this.tickLength + c.textBlock.fontSize / 2) : (a.x -= 0 > this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, 
                        a.y += this.tickLength + Math.abs(0 > this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5));
                    } else "top" === this._position ? (n = 1 == this.ctx.lineWidth % 2 ? .5 + (a.x << 0) : a.x << 0, 
                    this.ctx.beginPath(), this.ctx.moveTo(n, a.y << 0), this.ctx.lineTo(n, a.y - this.tickLength << 0), 
                    this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= c.textBlock.width / 2, a.y -= this.tickLength + c.textBlock.height) : (a.x += (c.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), 
                    a.y -= this.tickLength + (c.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" === this._position ? (n = 1 == this.ctx.lineWidth % 2 ? .5 + (a.y << 0) : a.y << 0, 
                    this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n), this.ctx.lineTo(a.x - this.tickLength << 0, n), 
                    this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (a.y -= c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), 
                    a.x = 0 < this.labelAngle ? a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" === this._position && (n = 1 == this.ctx.lineWidth % 2 ? .5 + (a.y << 0) : a.y << 0, 
                    this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n), this.ctx.lineTo(a.x + this.tickLength << 0, n), 
                    this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), 
                    a.x = 0 < this.labelAngle ? a.x + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5)); else c.textBlock.angle = -90, 
                    "bottom" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.height - 3, 
                    c.textBlock.measureText(), a.x - c.textBlock.height > this.chart.plotArea.x1 ? s(k.startValue) ? a.x -= c.textBlock.height - c.textBlock.fontSize / 2 : a.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3 : (c.textBlock.angle = 90, 
                    s(k.startValue) ? a.x += c.textBlock.height - c.textBlock.fontSize / 2 : a.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3), 
                    a.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y1 + c.textBlock.width + 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.height - 3, 
                    c.textBlock.measureText(), a.x - c.textBlock.height > this.chart.plotArea.x1 ? s(k.startValue) ? a.x -= c.textBlock.height - c.textBlock.fontSize / 2 : a.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3 : (c.textBlock.angle = 90, 
                    s(k.startValue) ? a.x += c.textBlock.height - c.textBlock.fontSize / 2 : a.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3), 
                    a.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + c.textBlock.width + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y2 - c.textBlock.width - 3) : "left" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.width - 3, 
                    c.textBlock.angle = 0, c.textBlock.measureText(), a.y - c.textBlock.height > this.chart.plotArea.y1 ? s(k.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize + 3 : a.y - c.textBlock.height < this.chart.plotArea.y2 ? a.y += c.textBlock.fontSize / 2 + 3 : s(k.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize + 3, 
                    a.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x2 - c.textBlock.width - 3) : "right" === this._position && (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.width - 3, 
                    c.textBlock.angle = 0, c.textBlock.measureText(), a.y - +c.textBlock.height > this.chart.plotArea.y1 ? s(k.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 - 3 : a.y - c.textBlock.height < this.chart.plotArea.y2 ? a.y += c.textBlock.fontSize / 2 + 3 : s(k.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3, 
                    a.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x1 + 3);
                    c.textBlock.x = a.x, c.textBlock.y = a.y, m.push(c);
                }
                if (!l) {
                    for (l = !1, this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), 
                    this.ctx.clip(), b = 0; b < h.length; b++) (k = h[b]).showOnTop ? f || (f = !0, 
                    this.chart.addEventListener("dataAnimationIterationEnd", (function() {
                        for (this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), 
                        this.ctx.clip(), e = 0; e < h.length; e++) (k = h[e]).showOnTop && k.render();
                        this.ctx.restore();
                    }), k)) : k.render();
                    for (b = 0; b < m.length; b++) (c = m[b]).stripLine.showOnTop ? l || (l = !0, this.chart.addEventListener("dataAnimationIterationEnd", (function() {
                        for (e = 0; e < m.length; e++) "inside" === (c = m[e]).stripLine.labelPlacement && c.stripLine.showOnTop && (d.ctx.save(), 
                        d.ctx.beginPath(), d.ctx.rect(d.chart.plotArea.x1, d.chart.plotArea.y1, d.chart.plotArea.width, d.chart.plotArea.height), 
                        d.ctx.clip(), c.textBlock.render(!0), d.ctx.restore());
                    }), c.textBlock)) : "inside" === c.stripLine.labelPlacement && c.textBlock.render(!0);
                    this.ctx.restore(), l = !0;
                }
                if (l) for (l = !1, b = 0; b < m.length; b++) "outside" === (c = m[b]).stripLine.labelPlacement && c.textBlock.render(!0);
            }
        }, D.prototype.renderBreaksBackground = function() {
            this.chart._breaksCanvas && this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas && (this.chart._breaksCanvasCtx.save(), 
            this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), 
            this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), 
            this.chart._breaksCanvasCtx.restore());
        }, D.prototype.createMask = function() {
            if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
                var a = this.scaleBreaks._appliedBreaks;
                v ? (this.maskCanvas = sa(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, 
                this.maskCtx = this.chart.plotArea.ctx), this.maskCtx.save(), this.maskCtx.beginPath(), 
                this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), 
                this.maskCtx.clip();
                for (var d = 0; d < a.length; d++) a[d].endValue < this.viewportMinimum || a[d].startValue > this.viewportMaximum || isNaN(this.range) || a[d].render(this.maskCtx);
                this.maskCtx.restore();
            }
        }, D.prototype.renderCrosshair = function(a, d) {
            isFinite(this.minimum) && isFinite(this.maximum) && (this.crosshair.render(a, d), 
            this.crosshair.dispatchEvent("updated", {
                chart: this.chart,
                crosshair: this.options,
                axis: this,
                value: this.crosshair.value
            }, this));
        }, D.prototype.showCrosshair = function(a) {
            s(a) || a < this.viewportMinimum || a > this.viewportMaximum || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a), null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a));
        }, D.prototype.renderGrid = function() {
            if (this.gridThickness && 0 < this.gridThickness) {
                var a = this.chart.ctx;
                a.save();
                var d, c = this.chart.plotArea;
                if (a.lineWidth = this.gridThickness, a.strokeStyle = this.gridColor, a.setLineDash && a.setLineDash(N(this.gridDashType, this.gridThickness)), 
                "bottom" === this._position || "top" === this._position) for (b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType || (a.beginPath(), 
                d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d = 1 == a.lineWidth % 2 ? .5 + (d.x << 0) : d.x << 0, 
                a.moveTo(d, c.y1 << 0), a.lineTo(d, c.y2 << 0), a.stroke()); else if ("left" === this._position || "right" === this._position) for (var b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType || (a.beginPath(), 
                d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d = 1 == a.lineWidth % 2 ? .5 + (d.y << 0) : d.y << 0, 
                a.moveTo(c.x1 << 0, d), a.lineTo(c.x2 << 0, d), a.stroke());
                a.restore();
            }
        }, D.prototype.renderAxisLine = function() {
            var e, f, a = this.chart.ctx, d = v ? this.chart._preRenderCtx : a, c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)), b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2));
            if (d.save(), "bottom" === this._position || "top" === this._position) {
                if (this.lineThickness) {
                    this.reversed ? (e = this.lineCoordinates.x2, f = this.lineCoordinates.x1) : (e = this.lineCoordinates.x1, 
                    f = this.lineCoordinates.x2), d.lineWidth = this.lineThickness, d.strokeStyle = this.lineColor ? this.lineColor : "black", 
                    d.setLineDash && d.setLineDash(N(this.lineDashType, this.lineThickness));
                    var l = 1 == this.lineThickness % 2 ? .5 + (this.lineCoordinates.y1 << 0) : this.lineCoordinates.y1 << 0;
                    if (d.beginPath(), this.scaleBreaks && !s(this.scaleBreaks.firstBreakIndex)) if (s(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b; else for (var h = this.scaleBreaks.firstBreakIndex; h <= this.scaleBreaks.lastBreakIndex; h++) d.moveTo(e, l), 
                    d.lineTo(this.scaleBreaks._appliedBreaks[h].startPixel + c, l), e = this.scaleBreaks._appliedBreaks[h].endPixel + b;
                    e && (d.moveTo(e, l), d.lineTo(f, l)), d.stroke();
                }
            } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
                if (this.reversed ? (e = this.lineCoordinates.y1, f = this.lineCoordinates.y2) : (e = this.lineCoordinates.y2, 
                f = this.lineCoordinates.y1), d.lineWidth = this.lineThickness, d.strokeStyle = this.lineColor, 
                d.setLineDash && d.setLineDash(N(this.lineDashType, this.lineThickness)), l = 1 == this.lineThickness % 2 ? .5 + (this.lineCoordinates.x1 << 0) : this.lineCoordinates.x1 << 0, 
                d.beginPath(), this.scaleBreaks && !s(this.scaleBreaks.firstBreakIndex)) if (s(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c; else for (h = this.scaleBreaks.firstBreakIndex; h <= this.scaleBreaks.lastBreakIndex; h++) d.moveTo(l, e), 
                d.lineTo(l, this.scaleBreaks._appliedBreaks[h].startPixel + b), e = this.scaleBreaks._appliedBreaks[h].endPixel + c;
                e && (d.moveTo(l, e), d.lineTo(l, f)), d.stroke();
            }
            v && (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), 
            this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), 
            d.clearRect(0, 0, this.chart.width, this.chart.height)), d.restore();
        }, D.prototype.getPixelCoordinatesOnAxis = function(a) {
            var d = {};
            return "bottom" !== this._position && "top" !== this._position || (d.x = this.convertValueToPixel(a), 
            d.y = this.lineCoordinates.y1), "left" !== this._position && "right" !== this._position || (d.y = this.convertValueToPixel(a), 
            d.x = this.lineCoordinates.x2), d;
        }, D.prototype.convertPixelToValue = function(a) {
            if (void 0 === a) return null;
            var b, d = 0, c = 0, e = (d = !0, this.scaleBreaks ? this.scaleBreaks._appliedBreaks : []);
            c = "number" == typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
            if (this.logarithmic) {
                if (a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit), 
                c <= this.conversionParameters.reference == ("left" === this._position || "right" === this._position) !== this.reversed) {
                    for (c = 0; c < e.length; c++) if (!(e[c].endValue < this.conversionParameters.minimum)) if (d) if (e[c].startValue < this.conversionParameters.minimum) {
                        if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) < e[c].endValue) {
                            a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                            break;
                        }
                        a *= e[c].endValue / this.conversionParameters.minimum / Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)), 
                        b /= Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)), 
                        d = !1;
                    } else {
                        if (!(b > e[c].startValue / this.conversionParameters.minimum)) break;
                        if ((b /= e[c].startValue / this.conversionParameters.minimum) < e[c].size) {
                            a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                            break;
                        }
                        a *= e[c].endValue / e[c].startValue / e[c].size, b /= e[c].size, d = !1;
                    } else {
                        if (!(b > e[c].startValue / e[c - 1].endValue)) break;
                        if ((b /= e[c].startValue / e[c - 1].endValue) < e[c].size) {
                            a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                            break;
                        }
                        a *= e[c].endValue / e[c].startValue / e[c].size, b /= e[c].size;
                    }
                } else for (c = e.length - 1; 0 <= c; c--) if (!(e[c].startValue > this.conversionParameters.minimum)) if (d) if (e[c].endValue > this.conversionParameters.minimum) {
                    if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) > e[c].startValue) {
                        a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                        break;
                    }
                    a *= e[c].startValue / this.conversionParameters.minimum * Math.pow(e[c].size, Math.log(e[c].startValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)) * b, 
                    b *= Math.pow(e[c].size, Math.log(this.conversionParameters.minimum / e[c].startValue) / Math.log(e[c].endValue / e[c].startValue)), 
                    d = !1;
                } else {
                    if (!(b < e[c].endValue / this.conversionParameters.minimum)) break;
                    if ((b /= e[c].endValue / this.conversionParameters.minimum) > 1 / e[c].size) {
                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                        break;
                    }
                    a /= e[c].endValue / e[c].startValue / e[c].size, b *= e[c].size, d = !1;
                } else {
                    if (!(b < e[c].endValue / e[c + 1].startValue)) break;
                    if ((b /= e[c].endValue / e[c + 1].startValue) > 1 / e[c].size) {
                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                        break;
                    }
                    a /= e[c].endValue / e[c].startValue / e[c].size, b *= e[c].size;
                }
                d = a * this.viewportMinimum;
            } else {
                if (a = b = (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit, 
                c <= this.conversionParameters.reference == ("left" === this._position || "right" === this._position) !== this.reversed) {
                    for (c = 0; c < e.length; c++) if (!(e[c].endValue < this.conversionParameters.minimum)) if (d) if (e[c].startValue < this.conversionParameters.minimum) {
                        if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size < e[c].endValue) {
                            a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                            break;
                        }
                        a += e[c].endValue - this.conversionParameters.minimum - e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue), 
                        b -= e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue), 
                        d = !1;
                    } else {
                        if (!(b > e[c].startValue - this.conversionParameters.minimum)) break;
                        if ((b -= e[c].startValue - this.conversionParameters.minimum) < e[c].size) {
                            a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                            break;
                        }
                        a += e[c].endValue - e[c].startValue - e[c].size, b -= e[c].size, d = !1;
                    } else {
                        if (!(b > e[c].startValue - e[c - 1].endValue)) break;
                        if ((b -= e[c].startValue - e[c - 1].endValue) < e[c].size) {
                            a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                            break;
                        }
                        a += e[c].endValue - e[c].startValue - e[c].size, b -= e[c].size;
                    }
                } else for (c = e.length - 1; 0 <= c; c--) if (!(e[c].startValue > this.conversionParameters.minimum)) if (d) if (e[c].endValue > this.conversionParameters.minimum) {
                    if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size > e[c].startValue) {
                        a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                        break;
                    }
                    a += e[c].startValue - this.conversionParameters.minimum + e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), 
                    b += e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), 
                    d = !1;
                } else {
                    if (!(b < e[c].endValue - this.conversionParameters.minimum)) break;
                    if ((b -= e[c].endValue - this.conversionParameters.minimum) > -1 * e[c].size) {
                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                        break;
                    }
                    a -= e[c].endValue - e[c].startValue - e[c].size, b += e[c].size, d = !1;
                } else {
                    if (!(b < e[c].endValue - e[c + 1].startValue)) break;
                    if ((b -= e[c].endValue - e[c + 1].startValue) > -1 * e[c].size) {
                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                        break;
                    }
                    a -= e[c].endValue - e[c].startValue - e[c].size, b += e[c].size;
                }
                d = this.conversionParameters.minimum + a;
            }
            return d;
        }, D.prototype.convertValueToPixel = function(a) {
            return a = this.getApparentDifference(this.conversionParameters.minimum, a, a), 
            this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + .5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + .5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + .5;
        }, D.prototype.getApparentDifference = function(a, d, c, b) {
            var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            if (this.logarithmic) {
                c = s(c) ? d / a : c;
                for (var f = 0; f < e.length && !(d < e[f].startValue); f++) a > e[f].endValue || (a <= e[f].startValue && d >= e[f].endValue ? c = c / e[f].endValue * e[f].startValue * e[f].size : a >= e[f].startValue && d >= e[f].endValue ? c = c / e[f].endValue * a * Math.pow(e[f].size, Math.log(e[f].endValue / a) / Math.log(e[f].endValue / e[f].startValue)) : a <= e[f].startValue && d <= e[f].endValue ? c = c / d * e[f].startValue * Math.pow(e[f].size, Math.log(d / e[f].startValue) / Math.log(e[f].endValue / e[f].startValue)) : !b && a > e[f].startValue && d < e[f].endValue && (c = a * Math.pow(e[f].size, Math.log(d / a) / Math.log(e[f].endValue / e[f].startValue))));
            } else for (c = s(c) ? Math.abs(d - a) : c, f = 0; f < e.length && !(d < e[f].startValue); f++) a > e[f].endValue || (a <= e[f].startValue && d >= e[f].endValue ? c = c - e[f].endValue + e[f].startValue + e[f].size : a > e[f].startValue && d >= e[f].endValue ? c = c - e[f].endValue + a + e[f].size * (e[f].endValue - a) / (e[f].endValue - e[f].startValue) : a <= e[f].startValue && d < e[f].endValue ? c = c - d + e[f].startValue + e[f].size * (d - e[f].startValue) / (e[f].endValue - e[f].startValue) : !b && a > e[f].startValue && d < e[f].endValue && (c = a + e[f].size * (d - a) / (e[f].endValue - e[f].startValue)));
            return c;
        }, D.prototype.setViewPortRange = function(a, d) {
            this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, d), 
            this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, d);
        }, D.prototype.getXValueAt = function(a) {
            if (!a) return null;
            var d = null;
            return "left" === this._position ? d = this.convertPixelToValue(a.y) : "bottom" === this._position && (d = this.convertPixelToValue(a.x)), 
            d;
        }, D.prototype.calculateValueToPixelConversionParameters = function(a) {
            a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            var d = {
                pixelPerUnit: null,
                minimum: null,
                reference: null
            }, c = this.lineCoordinates.width, b = this.lineCoordinates.height;
            c = "bottom" === this._position || "top" === this._position ? c : b, b = Math.abs(this.range);
            if (this.logarithmic) for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++) this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * a[e].startValue, 
            c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, .1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * this.viewportMinimum, 
            c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, .1 * c) * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b / this.viewportMaximum * a[e].startValue, 
            c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, .1 * c) * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue))); else for (e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++) this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + a[e].startValue, 
            c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, .1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + this.viewportMinimum, 
            c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, .1 * c) * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b - this.viewportMaximum + a[e].startValue, 
            c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, .1 * c) * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)));
            d.minimum = this.viewportMinimum, d.maximum = this.viewportMaximum, d.range = b, 
            "bottom" !== this._position && "top" !== this._position || (this.logarithmic ? (d.lnLogarithmBase = Math.log(this.logarithmBase), 
            d.pixelPerUnit = (this.reversed ? -1 : 1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(b), 
            d.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1), 
            "left" !== this._position && "right" !== this._position || (this.logarithmic ? (d.lnLogarithmBase = Math.log(this.logarithmBase), 
            d.pixelPerUnit = (this.reversed ? 1 : -1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(b), 
            d.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2), 
            this.conversionParameters = d;
        }, D.prototype.calculateAxisParameters = function() {
            if (this.logarithmic) this.calculateLogarithmicAxisParameters(); else {
                var a = this.chart.layoutManager.getFreeSpace(), d = !1, c = !1;
                "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, 
                this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
                a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40;
                var b = 4;
                "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
                var e, f, l;
                a = Math.max(b, Math.floor(this.maxWidth / a)), b = 0;
                if (!s(this.options.viewportMinimum) && !s(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum && (this.viewportMinimum = this.viewportMaximum = null), 
                !s(this.options.viewportMinimum) || s(this.sessionVariables.newViewportMinimum) || isNaN(this.sessionVariables.newViewportMinimum) ? (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && (this.viewportMinimum = this.minimum) : this.viewportMinimum = this.sessionVariables.newViewportMinimum, 
                !s(this.options.viewportMaximum) || s(this.sessionVariables.newViewportMaximum) || isNaN(this.sessionVariables.newViewportMaximum) ? (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && (this.viewportMaximum = this.maximum) : this.viewportMaximum = this.sessionVariables.newViewportMaximum, 
                this.scaleBreaks) for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++) if ((!s(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue || !s(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue || !s(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) && (!s(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue || !s(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue || !s(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue)) {
                    this.scaleBreaks._appliedBreaks.splice(b, 1);
                    break;
                }
                if ("axisX" === this.type) {
                    if (this.dataSeries && 0 < this.dataSeries.length) for (e = 0; e < this.dataSeries.length; e++) "dateTime" === this.dataSeries[e].xValueType && (c = !0);
                    e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, 
                    0 == (f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax) - e && (f += b = void 0 === this.options.interval ? .4 : this.options.interval, 
                    e -= b), 1 / 0 !== this.dataInfo.minDiff ? l = this.dataInfo.minDiff : 1 < f - e ? l = .5 * Math.abs(f - e) : (l = 1, 
                    c && (d = !0));
                } else "axisY" === this.type && (e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, 
                f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 
                isFinite(e) || isFinite(f) ? isFinite(e) ? isFinite(f) || (f = e) : e = f : (f = void 0 === this.options.interval ? -1 / 0 : this.options.interval, 
                e = void 0 !== this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : 1 / 0), 
                0 === e && 0 === f ? (f += 9, e = 0) : 0 == f - e ? (f += b = Math.min(Math.abs(.01 * Math.abs(f)), 5), 
                e -= b) : e > f ? (b = Math.min(.01 * Math.abs(this.getApparentDifference(f, e, null, !0)), 5), 
                0 <= f ? e = f - b : f = isFinite(e) ? e + b : 0) : (b = Math.min(.01 * Math.abs(this.getApparentDifference(e, f, null, !0)), .05), 
                0 !== f && (f += b), 0 !== e && (e -= b)), l = 1 / 0 !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? .5 * Math.abs(f - e) : 1, 
                this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < e && (e = 0), 
                this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > f && (f = 0));
                b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? f : this.viewportMaximum, null, !0), 
                "axisX" === this.type && c ? (this.intervalType || (b / 1 <= a ? (this.interval = 1, 
                this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, 
                this.intervalType = "millisecond") : b / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, 
                this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, 
                this.intervalType = "millisecond") : b / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : b / 250 <= a ? (this.interval = 250, 
                this.intervalType = "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, 
                this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : b / (1 * R.secondDuration) <= a ? (this.interval = 1, 
                this.intervalType = "second") : b / (2 * R.secondDuration) <= a ? (this.interval = 2, 
                this.intervalType = "second") : b / (5 * R.secondDuration) <= a ? (this.interval = 5, 
                this.intervalType = "second") : b / (10 * R.secondDuration) <= a ? (this.interval = 10, 
                this.intervalType = "second") : b / (15 * R.secondDuration) <= a ? (this.interval = 15, 
                this.intervalType = "second") : b / (20 * R.secondDuration) <= a ? (this.interval = 20, 
                this.intervalType = "second") : b / (30 * R.secondDuration) <= a ? (this.interval = 30, 
                this.intervalType = "second") : b / (1 * R.minuteDuration) <= a ? (this.interval = 1, 
                this.intervalType = "minute") : b / (2 * R.minuteDuration) <= a ? (this.interval = 2, 
                this.intervalType = "minute") : b / (5 * R.minuteDuration) <= a ? (this.interval = 5, 
                this.intervalType = "minute") : b / (10 * R.minuteDuration) <= a ? (this.interval = 10, 
                this.intervalType = "minute") : b / (15 * R.minuteDuration) <= a ? (this.interval = 15, 
                this.intervalType = "minute") : b / (20 * R.minuteDuration) <= a ? (this.interval = 20, 
                this.intervalType = "minute") : b / (30 * R.minuteDuration) <= a ? (this.interval = 30, 
                this.intervalType = "minute") : b / (1 * R.hourDuration) <= a ? (this.interval = 1, 
                this.intervalType = "hour") : b / (2 * R.hourDuration) <= a ? (this.interval = 2, 
                this.intervalType = "hour") : b / (3 * R.hourDuration) <= a ? (this.interval = 3, 
                this.intervalType = "hour") : b / (6 * R.hourDuration) <= a ? (this.interval = 6, 
                this.intervalType = "hour") : b / (1 * R.dayDuration) <= a ? (this.interval = 1, 
                this.intervalType = "day") : b / (2 * R.dayDuration) <= a ? (this.interval = 2, 
                this.intervalType = "day") : b / (4 * R.dayDuration) <= a ? (this.interval = 4, 
                this.intervalType = "day") : b / (1 * R.weekDuration) <= a ? (this.interval = 1, 
                this.intervalType = "week") : b / (2 * R.weekDuration) <= a ? (this.interval = 2, 
                this.intervalType = "week") : b / (3 * R.weekDuration) <= a ? (this.interval = 3, 
                this.intervalType = "week") : b / (1 * R.monthDuration) <= a ? (this.interval = 1, 
                this.intervalType = "month") : b / (2 * R.monthDuration) <= a ? (this.interval = 2, 
                this.intervalType = "month") : b / (3 * R.monthDuration) <= a ? (this.interval = 3, 
                this.intervalType = "month") : b / (6 * R.monthDuration) <= a ? (this.interval = 6, 
                this.intervalType = "month") : (this.interval = b / (1 * R.yearDuration) <= a ? 1 : b / (2 * R.yearDuration) <= a ? 2 : b / (4 * R.yearDuration) <= a ? 4 : Math.floor(D.getNiceNumber(b / (a - 1), !0) / R.yearDuration), 
                this.intervalType = "year")), (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && (this.viewportMinimum = e - l / 2), 
                (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && (this.viewportMaximum = f + l / 2), 
                d ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType || "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType || "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'"), 
                this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)) : (this.intervalType = "number", 
                b = D.getNiceNumber(b, !1), this.interval = this.options && 0 < this.options.interval ? this.options.interval : D.getNiceNumber(b / (a - 1), !0), 
                (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && (this.viewportMinimum = "axisX" === this.type ? e - l / 2 : Math.floor(e / this.interval) * this.interval), 
                (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && (this.viewportMaximum = "axisX" === this.type ? f + l / 2 : Math.ceil(f / this.interval) * this.interval), 
                0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), 
                this.options && void 0 === this.options.interval && (this.interval = D.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))), 
                null !== this.minimum && null !== this.maximum || ("axisX" === this.type ? (e = null !== this.minimum ? this.minimum : this.dataInfo.min, 
                0 == (f = null !== this.maximum ? this.maximum : this.dataInfo.max) - e && (f += b = void 0 === this.options.interval ? .4 : this.options.interval, 
                e -= b), l = 1 / 0 !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? .5 * Math.abs(f - e) : 1) : "axisY" === this.type && (e = null !== this.minimum ? this.minimum : this.dataInfo.min, 
                f = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(e) || isFinite(f) ? 0 === e && 0 === f ? (f += 9, 
                e = 0) : 0 == f - e ? (f += b = Math.min(Math.abs(.01 * Math.abs(f)), 5), e -= b) : e > f ? (b = Math.min(.01 * Math.abs(this.getApparentDifference(f, e, null, !0)), 5), 
                0 <= f ? e = f - b : f = isFinite(e) ? e + b : 0) : (b = Math.min(.01 * Math.abs(this.getApparentDifference(e, f, null, !0)), .05), 
                0 !== f && (f += b), 0 !== e && (e -= b)) : (f = void 0 === this.options.interval ? -1 / 0 : this.options.interval, 
                e = void 0 !== this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : 1 / 0), 
                l = 1 / 0 !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? .5 * Math.abs(f - e) : 1, 
                this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < e && (e = 0), 
                this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > f && (f = 0)), 
                Math.abs(this.getApparentDifference(e, f, null, !0)), "axisX" === this.type && c ? (this.valueType = "dateTime", 
                (null === this.minimum || isNaN(this.minimum)) && (this.minimum = e - l / 2), (null === this.maximum || isNaN(this.maximum)) && (this.maximum = f + l / 2)) : (this.intervalType = this.valueType = "number", 
                null === this.minimum && (this.minimum = "axisX" === this.type ? e - l / 2 : Math.floor(e / this.interval) * this.interval, 
                this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? 1 / 0 : this.sessionVariables.viewportMinimum)), 
                null === this.maximum && (this.maximum = "axisX" === this.type ? f + l / 2 : Math.ceil(f / this.interval) * this.interval, 
                this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -1 / 0 : this.sessionVariables.viewportMaximum)), 
                0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10)))), 
                s(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum)), 
                s(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum)), 
                this.range = this.viewportMaximum - this.viewportMinimum, this.intervalStartPosition = "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + .2 * this.interval) / this.interval) * this.interval, 
                this.valueFormatString || (this.valueFormatString = D.generateValueFormatString(this.range, 2));
            }
        }, D.prototype.calculateLogarithmicAxisParameters = function() {
            var c, a = this.chart.layoutManager.getFreeSpace(), d = Math.log(this.logarithmBase);
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, 
            this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var b, e, f, l;
            a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3);
            if (l = 1, (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && (this.viewportMinimum = this.minimum), 
            (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && (this.viewportMaximum = this.maximum), 
            this.scaleBreaks) for (l = 0; l < this.scaleBreaks._appliedBreaks.length; l++) if ((!s(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[l].startValue || !s(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[l].startValue || !s(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[l].startValue) && (!s(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[l].endValue || !s(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[l].endValue || !s(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[l].endValue)) {
                this.scaleBreaks._appliedBreaks.splice(l, 1);
                break;
            }
            "axisX" === this.type ? (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, 
            1 == (e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax) / b && (e *= l = Math.pow(this.logarithmBase, void 0 === this.options.interval ? .4 : this.options.interval), 
            b /= l), f = 1 / 0 !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, .5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, 
            e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 
            0 >= b && !isFinite(e) ? (e = void 0 === this.options.interval ? 0 : this.options.interval, 
            b = 1) : 0 >= b ? b = e : isFinite(e) || (e = b), 1 === b && 1 === e ? (e *= this.logarithmBase - 1 / this.logarithmBase, 
            b = 1) : 1 == e / b ? (e *= l = Math.min(e * Math.pow(this.logarithmBase, .01), Math.pow(this.logarithmBase, 5)), 
            b /= l) : b > e ? (l = Math.min(b / e * Math.pow(this.logarithmBase, .01), Math.pow(this.logarithmBase, 5)), 
            1 <= e ? b = e / l : e = b * l) : (l = Math.min(e / b * Math.pow(this.logarithmBase, .01), Math.pow(this.logarithmBase, .04)), 
            1 !== e && (e *= l), 1 !== b && (b /= l)), f = 1 / 0 !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, .5) : this.logarithmBase, 
            this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < b && (b = 1), 
            this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1)), 
            l = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
            var h = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
            if (this.intervalType = "number", l = Math.pow(this.logarithmBase, D.getNiceNumber(Math.abs(Math.log(l) / d), !1)), 
            this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = D.getNiceExponent(Math.log(l) / d / (a - 1), !0), 
            c = D.getNiceNumber(h / (a - 1), !0)), (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && (this.viewportMinimum = "axisX" === this.type ? b / Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / d / this.interval))), 
            (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && (this.viewportMaximum = "axisX" === this.type ? e * Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval))), 
            1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), 
            this.options && void 0 === this.options.interval && (this.interval = D.getNiceExponent(Math.ceil(Math.log(l) / d) / (a - 1)), 
            c = D.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0))), 
            null !== this.minimum && null !== this.maximum || ("axisX" === this.type ? (b = null !== this.minimum ? this.minimum : this.dataInfo.min, 
            1 == (e = null !== this.maximum ? this.maximum : this.dataInfo.max) / b && (e *= l = Math.pow(this.logarithmBase, void 0 === this.options.interval ? .4 : this.options.interval), 
            b /= l), f = 1 / 0 !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, .5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.minimum ? this.minimum : this.dataInfo.min, 
            e = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(b) || isFinite(e) ? 1 === b && 1 === e ? (e *= this.logarithmBase, 
            b /= this.logarithmBase) : 1 == e / b ? (e *= l = Math.pow(this.logarithmBase, this.interval), 
            b /= l) : b > e ? (l = Math.min(b / e * .01, 5), 1 <= e ? b = e / l : e = b * l) : (l = Math.min(e / b * Math.pow(this.logarithmBase, .01), Math.pow(this.logarithmBase, .04)), 
            1 !== e && (e *= l), 1 !== b && (b /= l)) : (e = void 0 === this.options.interval ? 0 : this.options.interval, 
            b = 1), f = 1 / 0 !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, .5) : this.logarithmBase, 
            this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < b && (b = 1), 
            this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)), 
            this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? b / Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / d / this.interval)), 
            s(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? void 0 === this.sessionVariables.newViewportMinimum ? 1 / 0 : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? void 0 === this.sessionVariables.newViewportMinimum ? 1 / 0 : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum))), 
            null === this.maximum && (this.maximum = "axisX" === this.type ? e * Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval)), 
            s(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? void 0 === this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? void 0 === this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))), 
            1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase))), 
            this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum), this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum), 
            this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum), 
            b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + .2) * this.interval), 
            this.range = this.viewportMaximum / this.viewportMinimum, this.noTicks = a, !this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
                for (d = Math.floor(this.viewportMinimum / c + .5) * c; d < this.viewportMinimum; ) d += c;
                this.equidistantInterval = !1, this.intervalStartPosition = d, this.interval = c;
            } else this.options.interval || (c = Math.ceil(this.interval), this.range > this.interval && (this.interval = c, 
            b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + .2) * this.interval))), 
            this.equidistantInterval = !0, this.intervalStartPosition = b;
            if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum) && (d = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2, 
            !isNaN(d) && isFinite(d) || (d = 2), 2 < d)) for (l = 0; l < d - 2; l++) this.valueFormatString += "#";
        }, D.generateValueFormatString = function(a, d) {
            var c = "#,##0.", b = d;
            1 > a && (b += Math.floor(Math.abs(Math.log(a) / Math.LN10)), isNaN(b) || !isFinite(b)) && (b = d);
            for (var e = 0; e < b; e++) c += "#";
            return c;
        }, D.getNiceExponent = function(a, d) {
            var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c);
            b = 0 > c ? 1 >= b ? 1 : 5 >= b ? 5 : 10 : Math.max(Math.floor(b), 1);
            return Number(-20 > c ? b * Math.pow(10, c) : (b * Math.pow(10, c)).toFixed(20));
        }, D.getNiceNumber = function(a, d) {
            var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c);
            b = d ? 1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10 : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10;
            return Number(-20 > c ? b * Math.pow(10, c) : (b * Math.pow(10, c)).toFixed(20));
        }, D.prototype.getLabelStartPoint = function() {
            var a = R[this.intervalType + "Duration"] * this.interval;
            a = new Date(Math.floor(this.viewportMinimum / a) * a);
            return "millisecond" !== this.intervalType && ("second" === this.intervalType ? 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), 
            a.setMilliseconds(0)) : "minute" === this.intervalType ? (0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setMinutes(a.getMinutes() + 1), 
            a.setSeconds(0), a.setMilliseconds(0)) : "hour" === this.intervalType ? (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setHours(a.getHours() + 1), 
            a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)) : "day" === this.intervalType ? (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setDate(a.getDate() + 1), 
            a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)) : "week" === this.intervalType ? (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setDate(a.getDate() + (7 - a.getDay())), 
            a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)) : "month" === this.intervalType ? (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setMonth(a.getMonth() + 1), 
            a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)) : "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), 
            a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0))), 
            a;
        }, na(Z, V), na(U, V), U.prototype.createUserOptions = function(a) {
            if (void 0 !== a || this.options._isPlaceholder) {
                var d = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.options._isPlaceholder || (Ba(this.parent[this.optionsName]), 
                d = this.parent.options[this.optionsName].indexOf(this.options)), this.options = void 0 === a ? {} : a, 
                this.parent.options[this.optionsName][d] = this.options;
            }
        }, U.prototype.render = function(a) {
            if (0 !== this.spacing || 0 !== this.options.lineThickness && (void 0 !== this.options.lineThickness || 0 !== this.parent.lineThickness)) {
                var d = this.ctx, c = this.ctx.globalAlpha;
                this.ctx = a || this.ctx, this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), 
                this.ctx.clip();
                var f, l, h, m, k, n, b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue), e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
                this.ctx.strokeStyle = this.lineColor, this.ctx.fillStyle = this.color, this.ctx.beginPath(), 
                this.ctx.globalAlpha = 1, Q(this.id), a = Math.max(this.spacing, 3);
                var p = Math.max(0, this.lineThickness);
                if (this.ctx.lineWidth = p, this.ctx.setLineDash && this.ctx.setLineDash(N(this.lineDashType, p)), 
                "bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position) {
                    if (b = 1 == p % 2 ? .5 + (b.x << 0) : b.x << 0, l = 1 == p % 2 ? .5 + (e.x << 0) : e.x << 0, 
                    "top" === this.scaleBreaks.parent._position ? (e = this.chart.plotArea.y1, h = this.chart.plotArea.y2 + p / 2 + .5 << 0) : (e = this.chart.plotArea.y2, 
                    h = this.chart.plotArea.y1 - p / 2 + .5 << 0, a *= -1), this.bounds = {
                        x1: b - p / 2,
                        y1: e,
                        x2: l + p / 2,
                        y2: h
                    }, this.ctx.moveTo(b, e), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(b, h), 
                    this.ctx.lineTo(l, h), this.ctx.lineTo(l, e); else if ("wavy" === this.type) {
                        m = b, f = .5, n = (h - (k = e)) / a / 3;
                        for (var q = 0; q < n; q++) this.ctx.bezierCurveTo(m + f * a, k + a, m + f * a, k + 2 * a, m, k + 3 * a), 
                        k += 3 * a, f *= -1;
                        for (this.ctx.bezierCurveTo(m + f * a, k + a, m + f * a, k + 2 * a, m, k + 3 * a), 
                        m = l, f *= -1, this.ctx.lineTo(m, k), q = 0; q < n; q++) this.ctx.bezierCurveTo(m + f * a, k - a, m + f * a, k - 2 * a, m, k - 3 * a), 
                        k -= 3 * a, f *= -1;
                    } else if ("zigzag" === this.type) {
                        for (f = -1, m = b + a, n = (h - (k = e + a)) / a / 2, q = 0; q < n; q++) this.ctx.lineTo(m, k), 
                        m += 2 * f * a, k += 2 * a, f *= -1;
                        for (this.ctx.lineTo(m, k), m += l - b, q = 0; q < n + 1; q++) this.ctx.lineTo(m, k), 
                        m += 2 * f * a, k -= 2 * a, f *= -1;
                        this.ctx.lineTo(m + f * a, k + a);
                    }
                } else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position) if (e = 1 == p % 2 ? .5 + (e.y << 0) : e.y << 0, 
                h = 1 == p % 2 ? .5 + (b.y << 0) : b.y << 0, "left" === this.scaleBreaks.parent._position ? (b = this.chart.plotArea.x1, 
                l = this.chart.plotArea.x2 + p / 2 + .5 << 0) : (b = this.chart.plotArea.x2, l = this.chart.plotArea.x1 - p / 2 + .5 << 0, 
                a *= -1), this.bounds = {
                    x1: b,
                    y1: e - p / 2,
                    x2: l,
                    y2: h + p / 2
                }, this.ctx.moveTo(b, e), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(l, e), 
                this.ctx.lineTo(l, h), this.ctx.lineTo(b, h); else if ("wavy" === this.type) {
                    for (k = e, f = .5, n = (l - (m = b)) / a / 3, q = 0; q < n; q++) this.ctx.bezierCurveTo(m + a, k + f * a, m + 2 * a, k + f * a, m + 3 * a, k), 
                    m += 3 * a, f *= -1;
                    for (this.ctx.bezierCurveTo(m + a, k + f * a, m + 2 * a, k + f * a, m + 3 * a, k), 
                    k = h, f *= -1, this.ctx.lineTo(m, k), q = 0; q < n; q++) this.ctx.bezierCurveTo(m - a, k + f * a, m - 2 * a, k + f * a, m - 3 * a, k), 
                    m -= 3 * a, f *= -1;
                } else if ("zigzag" === this.type) {
                    for (f = 1, k = e - a, n = (l - (m = b + a)) / a / 2, q = 0; q < n; q++) this.ctx.lineTo(m, k), 
                    k += 2 * f * a, m += 2 * a, f *= -1;
                    for (this.ctx.lineTo(m, k), k += h - e, q = 0; q < n + 1; q++) this.ctx.lineTo(m, k), 
                    k += 2 * f * a, m -= 2 * a, f *= -1;
                    this.ctx.lineTo(m + a, k + f * a);
                }
                0 < p && this.ctx.stroke(), this.ctx.closePath(), this.ctx.globalAlpha = this.fillOpacity, 
                this.ctx.globalCompositeOperation = "destination-over", this.ctx.fill(), this.ctx.restore(), 
                this.ctx.globalAlpha = c, this.ctx = d;
            }
        }, na(M, V), M.prototype.createUserOptions = function(a) {
            if (void 0 !== a || this.options._isPlaceholder) {
                var d = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.options._isPlaceholder || (Ba(this.parent.stripLines), 
                d = this.parent.options.stripLines.indexOf(this.options)), this.options = void 0 === a ? {} : a, 
                this.parent.options.stripLines[d] = this.options;
            }
        }, M.prototype.render = function() {
            this.ctx.save();
            var a = this.parent.getPixelCoordinatesOnAxis(this.value), d = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
            if (0 < d) {
                var c = null === this.opacity ? 1 : this.opacity;
                this.ctx.strokeStyle = this.color, this.ctx.beginPath();
                var e, f, l, h, b = this.ctx.globalAlpha;
                this.ctx.globalAlpha = c, Q(this.id), this.ctx.lineWidth = d, this.ctx.setLineDash && this.ctx.setLineDash(N(this.lineDashType, d)), 
                "bottom" === this.parent._position || "top" === this.parent._position ? (e = f = 1 == this.ctx.lineWidth % 2 ? .5 + (a.x << 0) : a.x << 0, 
                l = this.chart.plotArea.y1, h = this.chart.plotArea.y2, this.bounds = {
                    x1: e - d / 2,
                    y1: l,
                    x2: f + d / 2,
                    y2: h
                }) : "left" !== this.parent._position && "right" !== this.parent._position || (l = h = 1 == this.ctx.lineWidth % 2 ? .5 + (a.y << 0) : a.y << 0, 
                e = this.chart.plotArea.x1, f = this.chart.plotArea.x2, this.bounds = {
                    x1: e,
                    y1: l - d / 2,
                    x2: f,
                    y2: h + d / 2
                }), this.ctx.moveTo(e, l), this.ctx.lineTo(f, h), this.ctx.stroke(), this.ctx.globalAlpha = b;
            }
            this.ctx.restore();
        }, na($, V), $.prototype.showAt = function(a) {
            if (!this.enabled) return !1;
            var d = this.chart, c = !1;
            if (d.resetOverlayedCanvas(), d.clearedOverlayedCanvas = this.parent.type, "xySwapped" === d.plotInfo.axisPlacement) {
                if ("bottom" === this.parent._position) for (var b = 0; b < d.axisY.length; b++) this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null); else if ("top" === this.parent._position) for (b = 0; b < d.axisY2.length; b++) this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null); else if ("left" === this.parent._position) for (b = 0; b < d.axisX.length; b++) this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null); else if ("right" === this.parent._position) for (b = 0; b < d.axisX2.length; b++) this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null);
            } else if ("bottom" === this.parent._position) for (b = 0; b < d.axisX.length; b++) this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null); else if ("top" === this.parent._position) for (b = 0; b < d.axisX2.length; b++) this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null); else if ("left" === this.parent._position) for (b = 0; b < d.axisY.length; b++) this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null); else if ("right" === this.parent._position) for (b = 0; b < d.axisY2.length; b++) this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
            for (b = 0; b < d.axisX.length; b++) a = d.axisX[b]._crosshairValue, d.axisX[b].crosshair && d.axisX[b].crosshair.enabled && !s(a) && a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum && (d.axisX[b].showCrosshair(a), 
            d.axisX[b].crosshair._updatedValue = a, this === d.axisX[b].crosshair && (c = !0));
            for (b = 0; b < d.axisX2.length; b++) a = d.axisX2[b]._crosshairValue, d.axisX2[b].crosshair && d.axisX2[b].crosshair.enabled && !s(a) && a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum && (d.axisX2[b].showCrosshair(a), 
            d.axisX2[b].crosshair._updatedValue = a, this === d.axisX2[b].crosshair && (c = !0));
            for (b = 0; b < d.axisY.length; b++) a = d.axisY[b]._crosshairValue, d.axisY[b].crosshair && d.axisY[b].crosshair.enabled && !s(a) && a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum && (d.axisY[b].showCrosshair(a), 
            d.axisY[b].crosshair._updatedValue = a, this === d.axisY[b].crosshair && (c = !0));
            for (b = 0; b < d.axisY2.length; b++) a = d.axisY2[b]._crosshairValue, d.axisY2[b].crosshair && d.axisY2[b].crosshair.enabled && !s(a) && d._crosshairY2Value >= d.axisY2[b].viewportMinimum && d._crosshairY2Value <= d.axisY2[b].viewportMaximum && (d.axisY2[b].showCrosshair(a), 
            d.axisY2[b].crosshair._updatedValue = a, this === d.axisY2[b].crosshair && (c = !0));
            return this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries), 
            c;
        }, $.prototype.hide = function() {
            this.chart.resetOverlayedCanvas(), this.chart.renderCrosshairs(this.parent), this._hidden = !0;
        }, $.prototype.render = function(a, d, c) {
            var b, e, f, l, h = null, m = null, k = null, n = "";
            if (!this.valueFormatString) if ("dateTime" === this.parent.valueType) this.valueFormatString = this.parent.valueFormatString; else {
                var p = 0;
                p = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0);
                this.valueFormatString = D.generateValueFormatString(this.parent.range, p);
            }
            k = null === this.opacity ? 1 : this.opacity, p = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness);
            var q = this.chart.overlaidCanvasCtx, g = q.globalAlpha;
            if (q.globalAlpha = k, q.beginPath(), q.strokeStyle = this.color, q.lineWidth = p, 
            q.save(), this.labelFontSize = s(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize, 
            this.labelMaxWidth = s(this.options.labelMaxWidth) ? .3 * this.chart.width : this.labelMaxWidth, 
            this.labelMaxHeight = s(this.options.labelWrap) || this.labelWrap ? .3 * this.chart.height : 2 * this.labelFontSize, 
            0 < p && q.setLineDash && q.setLineDash(N(this.lineDashType, p)), k = new ia(q, {
                x: 0,
                y: 0,
                padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 4
                },
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxWidth: this.labelMaxWidth,
                maxHeight: this.labelMaxHeight,
                angle: this.labelAngle,
                text: n,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            }), this.snapToDataPoint) {
                var r = 0;
                n = [];
                if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                    var v = null;
                    "bottom" === this.parent._position || "top" === this.parent._position ? r = this.parent.dataSeries[0].axisX.convertPixelToValue({
                        y: d
                    }) : "left" !== this.parent._position && "right" !== this.parent._position || (r = this.parent.convertPixelToValue({
                        y: d
                    }));
                    for (var w = 0; w < this.parent.dataSeries.length; w++) (v = this.parent.dataSeries[w].getDataPointAtX(r, !0)) && 0 <= v.index && (v.dataSeries = this.parent.dataSeries[w], 
                    null !== v.dataPoint.y && v.dataSeries.visible && n.push(v));
                    if (v = null, 0 === n.length) return;
                    if (n.sort((function(a, b) {
                        return a.distance - b.distance;
                    })), v = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), w = 0, 
                    "rangeBar" === n[0].dataSeries.type || "error" === n[0].dataSeries.type) {
                        v = Math.abs(a - this.parent.convertValueToPixel(n[w].dataPoint.y[0]));
                        var t = 0;
                        for (r = 0; r < n.length; r++) if (n[r].dataPoint.y && n[r].dataPoint.y.length) for (var x = 0; x < n[r].dataPoint.y.length; x++) (t = Math.abs(a - this.parent.convertValueToPixel(n[r].dataPoint.y[x]))) < v && (v = t, 
                        w = r); else (t = Math.abs(a - this.parent.convertValueToPixel(n[r].dataPoint.y))) < v && (v = t, 
                        w = r);
                    } else if ("stackedBar" === n[0].dataSeries.type) {
                        v = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
                        var z = t = 0;
                        for (r = w = 0; r < n.length; r++) if (n[r].dataPoint.y && n[r].dataPoint.y.length) for (x = 0; x < n[r].dataPoint.y.length; x++) (t = Math.abs(a - this.parent.convertValueToPixel(n[r].dataPoint.y[x]))) < v && (v = t, 
                        w = r); else z += n[r].dataPoint.y, (t = Math.abs(a - this.parent.convertValueToPixel(z))) < v && (v = t, 
                        w = r);
                    } else if ("stackedBar100" === n[0].dataSeries.type) {
                        v = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
                        var y = z = t = 0;
                        for (r = 0; r < n.length; r++) if (n[r].dataPoint.y && n[r].dataPoint.y.length) for (x = 0; x < n[r].dataPoint.y.length; x++) (t = Math.abs(a - this.parent.convertValueToPixel(n[r].dataPoint.y[x]))) < v && (v = t, 
                        w = r); else z += n[r].dataPoint.y, y = n[r].dataPoint.x.getTime ? n[r].dataPoint.x.getTime() : n[r].dataPoint.x, 
                        y = z / n[r].dataSeries.plotUnit.dataPointYSums[y] * 100, (t = Math.abs(a - this.parent.convertValueToPixel(y))) < v && (v = t, 
                        w = r);
                    } else for (v = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), 
                    r = w = t = 0; r < n.length; r++) if (n[r].dataPoint.y && n[r].dataPoint.y.length) for (x = 0; x < n[r].dataPoint.y.length; x++) (t = Math.abs(a - this.parent.convertValueToPixel(n[r].dataPoint.y[x]))) < v && (v = t, 
                    w = r); else (t = Math.abs(a - this.parent.convertValueToPixel(n[r].dataPoint.y))) < v && (v = t, 
                    w = r);
                    if (x = n[w], "bottom" === this.parent._position || "top" === this.parent._position) {
                        if (b = 0, "rangeBar" === this.parent.dataSeries[w].type || "error" === this.parent.dataSeries[w].type) {
                            for (v = Math.abs(a - this.parent.convertValueToPixel(x.dataPoint.y[0])), r = t = 0; r < x.dataPoint.y.length; r++) (t = Math.abs(a - this.parent.convertValueToPixel(x.dataPoint.y[r]))) < v && (v = t, 
                            b = r);
                            h = 1 == q.lineWidth % 2 ? .5 + (this.parent.convertValueToPixel(x.dataPoint.y[b]) << 0) : this.parent.convertValueToPixel(x.dataPoint.y[b]) << 0, 
                            this.value = x.dataPoint.y[b], k.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: c || x.dataPoint.y[b]
                            }) : s(this.options.label) ? ea(c || x.dataPoint.y[b], this.valueFormatString, this.chart._cultureInfo) : this.label;
                        } else if ("stackedBar" === this.parent.dataSeries[w].type) {
                            for (v = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), z = t = 0, 
                            r = w; 0 <= r; r--) z += n[r].dataPoint.y, (t = Math.abs(a - this.parent.convertValueToPixel(z))) < v && (v = t, 
                            b = r);
                            h = 1 == q.lineWidth % 2 ? .5 + (this.parent.convertValueToPixel(z) << 0) : this.parent.convertValueToPixel(z) << 0, 
                            this.value = z, k.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: c || x.dataPoint.y
                            }) : s(this.options.label) ? ea(c || x.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        } else if ("stackedBar100" === this.parent.dataSeries[w].type) {
                            for (v = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), y = z = t = 0, 
                            r = w; 0 <= r; r--) z += n[r].dataPoint.y, y = n[r].dataPoint.x.getTime ? n[r].dataPoint.x.getTime() : n[r].dataPoint.x, 
                            y = z / n[r].dataSeries.plotUnit.dataPointYSums[y] * 100, (t = Math.abs(a - this.parent.convertValueToPixel(y))) < v && (v = t, 
                            b = r);
                            h = 1 == q.lineWidth % 2 ? .5 + (this.parent.convertValueToPixel(y) << 0) : this.parent.convertValueToPixel(y) << 0, 
                            this.value = y, k.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: c || y
                            }) : s(this.options.label) ? ea(c || y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        } else h = 1 == q.lineWidth % 2 ? .5 + (this.parent.convertValueToPixel(x.dataPoint.y) << 0) : this.parent.convertValueToPixel(x.dataPoint.y) << 0, 
                        this.value = x.dataPoint.y, k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c || x.dataPoint.y
                        }) : s(this.options.label) ? ea(c || x.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        b = e = h, f = this.chart.plotArea.y1, l = this.chart.plotArea.y2, this.bounds = {
                            x1: b - p / 2,
                            y1: f,
                            x2: e + p / 2,
                            y2: l
                        }, k.x = b - k.measureText().width / 2, k.x + k.width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.width : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), 
                        k.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -k.height + this.parent.tickLength : k.fontSize / 2) + 2, 
                        k.y + k.height > this.chart.bounds.y2 ? k.y = this.chart.bounds.y2 - k.height : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1);
                    } else if ("left" === this.parent._position || "right" === this.parent._position) {
                        if (f = l = m = 1 == q.lineWidth % 2 ? .5 + (this.parent.convertValueToPixel(x.dataPoint.x) << 0) : this.parent.convertValueToPixel(x.dataPoint.x) << 0, 
                        b = this.chart.plotArea.x1, e = this.chart.plotArea.x2, this.bounds = {
                            x1: b,
                            y1: f - p / 2,
                            x2: e,
                            y2: l + p / 2
                        }, y = !1, this.parent.labels) for (n = Math.ceil(this.parent.interval), r = 0; r < this.parent.viewportMaximum; r += n) {
                            if (!this.parent.labels[r]) {
                                y = !1;
                                break;
                            }
                            y = !0;
                        }
                        if (y) {
                            if ("axisX" === this.parent.type) for (r = this.parent.convertPixelToValue({
                                y: d
                            }), v = null, w = 0; w < this.parent.dataSeries.length; w++) (v = this.parent.dataSeries[w].getDataPointAtX(r, !0)) && 0 <= v.index && (k.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: x.dataPoint.x
                            }) : s(this.options.label) ? v.dataPoint.label : this.label);
                        } else "dateTime" === this.parent.valueType ? k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c || x.dataPoint.x
                        }) : s(this.options.label) ? za(c || x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c || x.dataPoint.x
                        }) : s(this.options.label) ? ea(c || x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
                        this.value = x.dataPoint.x, k.y = l + k.fontSize / 2 - k.measureText().height / 2 + 2, 
                        k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2), 
                        "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
                    }
                } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    for (r = this.parent.convertPixelToValue({
                        x: a
                    }), w = 0; w < this.parent.dataSeries.length; w++) (v = this.parent.dataSeries[w].getDataPointAtX(r, !0)) && 0 <= v.index && (v.dataSeries = this.parent.dataSeries[w], 
                    null !== v.dataPoint.y && v.dataSeries.visible && n.push(v));
                    if (0 === n.length) return;
                    if (n.sort((function(a, b) {
                        return a.distance - b.distance;
                    })), x = n[0], b = e = h = 1 == q.lineWidth % 2 ? .5 + (this.parent.convertValueToPixel(x.dataPoint.x) << 0) : this.parent.convertValueToPixel(x.dataPoint.x) << 0, 
                    f = this.chart.plotArea.y1, l = this.chart.plotArea.y2, this.bounds = {
                        x1: b - p / 2,
                        y1: f,
                        x2: e + p / 2,
                        y2: l
                    }, y = !1, this.parent.labels) for (n = Math.ceil(this.parent.interval), r = 0; r < this.parent.viewportMaximum; r += n) {
                        if (!this.parent.labels[r]) {
                            y = !1;
                            break;
                        }
                        y = !0;
                    }
                    if (y) {
                        if ("axisX" === this.parent.type) for (r = this.parent.convertPixelToValue({
                            x: a
                        }), v = null, w = 0; w < this.parent.dataSeries.length; w++) (v = this.parent.dataSeries[w].getDataPointAtX(r, !0)) && 0 <= v.index && (k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: x.dataPoint.x
                        }) : s(this.options.label) ? v.dataPoint.label : this.label);
                    } else "dateTime" === this.parent.valueType ? k.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: x.dataPoint.x
                    }) : s(this.options.label) ? za(c || x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (k.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: x.dataPoint.x
                    }) : s(this.options.label) ? ea(c || x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
                    this.value = x.dataPoint.x, k.x = b - k.measureText().width / 2, k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width), 
                    k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
                } else if ("left" === this.parent._position || "right" === this.parent._position) {
                    for (!s(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (r = this.parent.dataSeries[0].axisX.convertPixelToValue({
                        x: a
                    })), w = 0; w < this.parent.dataSeries.length; w++) (v = this.parent.dataSeries[w].getDataPointAtX(r, !0)) && 0 <= v.index && (v.dataSeries = this.parent.dataSeries[w], 
                    null !== v.dataPoint.y && v.dataSeries.visible && n.push(v));
                    if (0 === n.length) return;
                    if (n.sort((function(a, b) {
                        return a.distance - b.distance;
                    })), w = 0, "rangeColumn" === n[0].dataSeries.type || "rangeArea" === n[0].dataSeries.type || "error" === n[0].dataSeries.type || "rangeSplineArea" === n[0].dataSeries.type || "candlestick" === n[0].dataSeries.type || "ohlc" === n[0].dataSeries.type || "boxAndWhisker" === n[0].dataSeries.type) for (v = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y[0])), 
                    r = t = 0; r < n.length; r++) if (n[r].dataPoint.y && n[r].dataPoint.y.length) for (x = 0; x < n[r].dataPoint.y.length; x++) (t = Math.abs(d - this.parent.convertValueToPixel(n[r].dataPoint.y[x]))) < v && (v = t, 
                    w = r); else (t = Math.abs(d - this.parent.convertValueToPixel(n[r].dataPoint.y))) < v && (v = t, 
                    w = r); else if ("stackedColumn" === n[0].dataSeries.type || "stackedArea" === n[0].dataSeries.type) for (v = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)), 
                    r = z = t = 0; r < n.length; r++) if (n[r].dataPoint.y && n[r].dataPoint.y.length) for (x = 0; x < n[r].dataPoint.y.length; x++) (t = Math.abs(d - this.parent.convertValueToPixel(n[r].dataPoint.y[x]))) < v && (v = t, 
                    w = r); else z += n[r].dataPoint.y, (t = Math.abs(d - this.parent.convertValueToPixel(z))) < v && (v = t, 
                    w = r); else if ("stackedColumn100" === n[0].dataSeries.type || "stackedArea100" === n[0].dataSeries.type) for (v = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)), 
                    r = y = z = t = 0; r < n.length; r++) if (n[r].dataPoint.y && n[r].dataPoint.y.length) for (x = 0; x < n[r].dataPoint.y.length; x++) (t = Math.abs(d - this.parent.convertValueToPixel(n[r].dataPoint.y[x]))) < v && (v = t, 
                    w = r); else z += n[r].dataPoint.y, y = n[r].dataPoint.x.getTime ? n[r].dataPoint.x.getTime() : n[r].dataPoint.x, 
                    y = z / n[r].dataSeries.plotUnit.dataPointYSums[y] * 100, (t = Math.abs(d - this.parent.convertValueToPixel(y))) < v && (v = t, 
                    w = r); else for (v = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)), 
                    r = t = 0; r < n.length; r++) if (n[r].dataPoint.y && n[r].dataPoint.y.length) for (x = 0; x < n[r].dataPoint.y.length; x++) (t = Math.abs(d - this.parent.convertValueToPixel(n[r].dataPoint.y[x]))) < v && (v = t, 
                    w = r); else (t = Math.abs(d - this.parent.convertValueToPixel(n[r].dataPoint.y))) < v && (v = t, 
                    w = r);
                    if (x = n[w], b = 0, "rangeColumn" === this.parent.dataSeries[w].type || "rangeArea" === this.parent.dataSeries[w].type || "error" === this.parent.dataSeries[w].type || "rangeSplineArea" === this.parent.dataSeries[w].type || "candlestick" === this.parent.dataSeries[w].type || "ohlc" === this.parent.dataSeries[w].type || "boxAndWhisker" === this.parent.dataSeries[w].type) {
                        for (v = Math.abs(d - this.parent.convertValueToPixel(x.dataPoint.y[0])), r = t = 0; r < x.dataPoint.y.length; r++) (t = Math.abs(d - this.parent.convertValueToPixel(x.dataPoint.y[r]))) < v && (v = t, 
                        b = r);
                        m = 1 == q.lineWidth % 2 ? .5 + (this.parent.convertValueToPixel(x.dataPoint.y[b]) << 0) : this.parent.convertValueToPixel(x.dataPoint.y[b]) << 0, 
                        k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c || x.dataPoint.y[b]
                        }) : s(this.options.label) ? ea(c || x.dataPoint.y[b], this.valueFormatString, this.chart._cultureInfo) : this.label, 
                        this.value = x.dataPoint.y[b];
                    } else if ("stackedColumn" === this.parent.dataSeries[w].type || "stackedArea" === this.parent.dataSeries[w].type) {
                        for (v = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)), z = t = 0, 
                        r = w; 0 <= r; r--) z += n[r].dataPoint.y, (t = Math.abs(d - this.parent.convertValueToPixel(z))) < v && (v = t, 
                        b = r);
                        m = 1 == q.lineWidth % 2 ? .5 + (this.parent.convertValueToPixel(z) << 0) : this.parent.convertValueToPixel(z) << 0, 
                        k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c || x.dataPoint.y
                        }) : s(this.options.label) ? ea(c || x.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label, 
                        this.value = z;
                    } else if ("stackedColumn100" === this.parent.dataSeries[w].type || "stackedArea100" === this.parent.dataSeries[w].type) {
                        for (v = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)), z = t = 0, 
                        r = w; 0 <= r; r--) z += n[r].dataPoint.y, y = n[r].dataPoint.x.getTime ? n[r].dataPoint.x.getTime() : n[r].dataPoint.x, 
                        y = z / n[r].dataSeries.plotUnit.dataPointYSums[y] * 100, (t = Math.abs(d - this.parent.convertValueToPixel(y))) < v && (v = t, 
                        b = r);
                        m = 1 == q.lineWidth % 2 ? .5 + (this.parent.convertValueToPixel(y) << 0) : this.parent.convertValueToPixel(y) << 0, 
                        k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c || y
                        }) : s(this.options.label) ? ea(c || y, this.valueFormatString, this.chart._cultureInfo) : this.label, 
                        this.value = y;
                    } else "waterfall" === this.parent.dataSeries[w].type ? (m = 1 == q.lineWidth % 2 ? .5 + (this.parent.convertValueToPixel(x.dataSeries.dataPointEOs[x.index].cumulativeSum) << 0) : this.parent.convertValueToPixel(x.dataSeries.dataPointEOs[x.index].cumulativeSum) << 0, 
                    k.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: c || x.dataSeries.dataPointEOs[x.index].cumulativeSum
                    }) : s(this.options.label) ? ea(c || x.dataSeries.dataPointEOs[x.index].cumulativeSum, this.valueFormatString, this.chart._cultureInfo) : this.label, 
                    this.value = x.dataSeries.dataPointEOs[x.index].cumulativeSum) : (m = 1 == q.lineWidth % 2 ? (s(a) ? d : this.parent.convertValueToPixel(x.dataPoint.y) << 0) + .5 : s(a) ? d : this.parent.convertValueToPixel(x.dataPoint.y) << 0, 
                    k.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: x.dataPoint.y
                    }) : s(this.options.label) ? ea(c || x.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label, 
                    this.value = x.dataPoint.y);
                    f = l = m, b = this.chart.plotArea.x1, e = this.chart.plotArea.x2, this.bounds = {
                        x1: b,
                        y1: f - p / 2,
                        x2: e,
                        y2: l + p / 2
                    }, k.y = l + k.fontSize / 2 - k.measureText().height / 2 + 2, k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2), 
                    "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
                }
                n = null, "bottom" !== this.parent._position && "top" !== this.parent._position || ("top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1 + k.fontSize / 2), 
                "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2), 
                b >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && e <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) && (0 < p && (q.moveTo(b, f), 
                q.lineTo(e, l), q.stroke(), this._hidden = !1), q.restore(), !s(k.text) && ("number" == typeof k.text.valueOf() || 0 < k.text.length) && k.render(!0))), 
                "left" !== this.parent._position && "right" !== this.parent._position || ("left" === this.parent._position && k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), 
                "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.measureText().width), 
                l >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) && f <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && (0 < p && (q.moveTo(b, f), 
                q.lineTo(e, l), q.stroke(), this._hidden = !1), q.restore(), !s(k.text) && ("number" == typeof k.text.valueOf() || 0 < k.text.length) && k.render(!0)));
            } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position ? (b = e = h = 1 == q.lineWidth % 2 ? .5 + (a << 0) : a << 0, 
                f = this.chart.plotArea.y1, l = this.chart.plotArea.y2, this.bounds = {
                    x1: b - p / 2,
                    y1: f,
                    x2: e + p / 2,
                    y2: l
                }) : "left" !== this.parent._position && "right" !== this.parent._position || (f = l = m = 1 == q.lineWidth % 2 ? .5 + (d << 0) : d << 0, 
                b = this.chart.plotArea.x1, e = this.chart.plotArea.x2, this.bounds = {
                    x1: b,
                    y1: f - p / 2,
                    x2: e,
                    y2: l + p / 2
                }), "xySwapped" === this.chart.plotInfo.axisPlacement) if ("left" === this.parent._position || "right" === this.parent._position) {
                    if (y = !1, this.parent.labels) for (n = Math.ceil(this.parent.interval), r = 0; r < this.parent.viewportMaximum; r += n) {
                        if (!this.parent.labels[r]) {
                            y = !1;
                            break;
                        }
                        y = !0;
                    }
                    if (y) {
                        if ("axisX" === this.parent.type) for (r = this.parent.convertPixelToValue({
                            y: d
                        }), v = null, w = 0; w < this.parent.dataSeries.length; w++) (v = this.parent.dataSeries[w].getDataPointAtX(r, !0)) && 0 <= v.index && (k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c || this.parent.convertPixelToValue(a)
                        }) : s(this.options.label) ? v.dataPoint.label : this.label);
                    } else "dateTime" === this.parent.valueType ? k.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: c || this.parent.convertPixelToValue(d)
                    }) : s(this.options.label) ? za(c || this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (k.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: c || this.parent.convertPixelToValue(d)
                    }) : s(this.options.label) ? ea(c || this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label);
                    k.y = d + k.fontSize / 2 - k.measureText().height / 2 + 2, k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2), 
                    "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x1 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
                } else "bottom" !== this.parent._position && "top" !== this.parent._position || (k.text = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: c || this.parent.convertPixelToValue(a)
                }) : s(this.options.label) ? ea(c || this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label, 
                k.x = b - k.measureText().width / 2, k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width), 
                k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2)); else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    if (y = !1, n = "", this.parent.labels) for (n = Math.ceil(this.parent.interval), 
                    r = 0; r < this.parent.viewportMaximum; r += n) {
                        if (!this.parent.labels[r]) {
                            y = !1;
                            break;
                        }
                        y = !0;
                    }
                    if (y) {
                        if ("axisX" === this.parent.type) for (r = this.parent.convertPixelToValue({
                            x: a
                        }), v = null, w = 0; w < this.parent.dataSeries.length; w++) (v = this.parent.dataSeries[w].getDataPointAtX(r, !0)) && 0 <= v.index && (k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c || this.parent.convertPixelToValue(a)
                        }) : s(this.options.label) ? c || v.dataPoint.label : this.label);
                    } else "dateTime" === this.parent.valueType ? k.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: c || this.parent.convertPixelToValue(a)
                    }) : s(this.options.label) ? za(c || this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (k.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: c || (0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "")
                    }) : s(this.options.label) ? ea(c || this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label);
                    k.x = b - k.measureText().width / 2, k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width), 
                    k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
                } else "left" !== this.parent._position && "right" !== this.parent._position || (k.text = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: c || this.parent.convertPixelToValue(d)
                }) : s(this.options.label) ? ea(c || this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label, 
                k.y = d + k.fontSize / 2 - k.measureText().height / 2 + 2, k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2), 
                "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2));
                "left" === this.parent._position && k.x < this.chart.bounds.x1 ? k.x = this.chart.bounds.x1 : "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.measureText().width : "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2), 
                0 < p && (q.moveTo(b, f), q.lineTo(e, l), q.stroke(), this._hidden = !1), q.restore(), 
                !s(k.text) && ("number" == typeof k.text.valueOf() || 0 < k.text.length) && k.render(!0), 
                this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(d);
            }
            "bottom" !== this.parent._position && "top" !== this.parent._position || (this._updatedValue = this.parent.convertPixelToValue(h)), 
            "left" !== this.parent._position && "right" !== this.parent._position || (this._updatedValue = this.parent.convertPixelToValue(m)), 
            q.globalAlpha = g;
        }, na(Y, V), Y.prototype._initialize = function() {
            var a;
            (this.updateOption("updated"), this.updateOption("hidden"), this.enabled) && (this.container = document.createElement("div"), 
            this.container.setAttribute("class", "canvasjs-chart-tooltip"), this.container.style.position = "absolute", 
            this.container.style.height = "auto", this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)", 
            this.container.style.zIndex = "1000", this.container.style.pointerEvents = "none", 
            this.container.style.display = "none", a = '<div style=" width: auto;height: auto;min-width: 50px;', 
            a += "line-height: auto;", a += "margin: 0px 0px 0px 0px;", a += "padding: 5px;", 
            a += "font-family: Calibri, Arial, Georgia, serif;", a += "font-weight: normal;", 
            a += "font-style: " + (v ? "italic;" : "normal;"), a += "font-size: 14px;", a += "color: #000000;", 
            a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);", a += "text-align: left;", a += "border: 2px solid gray;", 
            a += v ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);", 
            a += "text-indent: 0px;", a += "white-space: nowrap;", a += "border-radius: 5px;", 
            a += "-moz-user-select:none;", a += "-khtml-user-select: none;", a += "-webkit-user-select: none;", 
            a += "-ms-user-select: none;", a += "user-select: none;", v || (a += "filter: alpha(opacity = 90);", 
            a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');"), 
            a += '} "> Sample Tooltip</div>', this.container.innerHTML = a, this.contentDiv = this.container.firstChild, 
            this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.chart._canvasJSContainer.appendChild(this.container));
        }, Y.prototype.mouseMoveHandler = function(a, d) {
            this._lastUpdated && 4 > (new Date).getTime() - this._lastUpdated || (this._lastUpdated = (new Date).getTime(), 
            this.chart.resetOverlayedCanvas(), this._updateToolTip(a, d));
        }, Y.prototype._updateToolTip = function(a, d, c) {
            if (c = void 0 === c || c, this.container || this._initialize(), this.enabled || (this.hide(), 
            this.dispatchEvent("hidden", {
                chart: this.chart,
                toolTip: this
            }, this)), !this.chart.disableToolTip) {
                if (void 0 === a || void 0 === d) {
                    if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                    a = this._prevX, d = this._prevY;
                } else this._prevX = a, this._prevY = d;
                var b = null, e = null, f = [], l = 0;
                if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                    if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                        var h = [];
                        if (this.chart.axisX) for (var m = 0; m < this.chart.axisX.length; m++) {
                            l = this.chart.axisX[m].convertPixelToValue({
                                y: d
                            });
                            var k = null;
                            for (b = 0; b < this.chart.axisX[m].dataSeries.length; b++) (k = this.chart.axisX[m].dataSeries[b].getDataPointAtX(l, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[m].dataSeries[b], 
                            null !== k.dataPoint.y && h.push(k));
                            k = null;
                        }
                        if (this.chart.axisX2) for (m = 0; m < this.chart.axisX2.length; m++) {
                            for (l = this.chart.axisX2[m].convertPixelToValue({
                                y: d
                            }), k = null, b = 0; b < this.chart.axisX2[m].dataSeries.length; b++) (k = this.chart.axisX2[m].dataSeries[b].getDataPointAtX(l, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[m].dataSeries[b], 
                            null !== k.dataPoint.y && h.push(k));
                            k = null;
                        }
                    } else {
                        if (h = [], this.chart.axisX) for (m = 0; m < this.chart.axisX.length; m++) for (l = this.chart.axisX[m].convertPixelToValue({
                            x: a
                        }), k = null, b = 0; b < this.chart.axisX[m].dataSeries.length; b++) (k = this.chart.axisX[m].dataSeries[b].getDataPointAtX(l, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[m].dataSeries[b], 
                        null !== k.dataPoint.y && h.push(k));
                        if (this.chart.axisX2) for (m = 0; m < this.chart.axisX2.length; m++) for (l = this.chart.axisX2[m].convertPixelToValue({
                            x: a
                        }), k = null, b = 0; b < this.chart.axisX2[m].dataSeries.length; b++) (k = this.chart.axisX2[m].dataSeries[b].getDataPointAtX(l, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[m].dataSeries[b], 
                        null !== k.dataPoint.y && h.push(k));
                    }
                    if (0 === h.length) return;
                    for (h.sort((function(a, b) {
                        return a.distance - b.distance;
                    })), c = h[0], b = 0; b < h.length; b++) h[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() && f.push(h[b]);
                    h = null;
                } else {
                    if (k = this.chart.getDataPointAtXY(a, d, c)) this.currentDataPointIndex = k.dataPointIndex, 
                    this.currentSeriesIndex = k.dataSeries.index; else if (v) if (0 < (k = Ya(a, d, this.chart._eventManager.ghostCtx)) && void 0 !== this.chart._eventManager.objectMap[k]) {
                        if ("legendItem" === (k = this.chart._eventManager.objectMap[k]).objectType) return;
                        this.currentSeriesIndex = k.dataSeriesIndex, this.currentDataPointIndex = 0 <= k.dataPointIndex ? k.dataPointIndex : -1;
                    } else this.currentDataPointIndex = -1; else this.currentDataPointIndex = -1;
                    if (0 <= this.currentSeriesIndex) {
                        if (e = this.chart.data[this.currentSeriesIndex], k = {}, 0 <= this.currentDataPointIndex) b = e.dataPoints[this.currentDataPointIndex], 
                        k.dataSeries = e, k.dataPoint = b, k.index = this.currentDataPointIndex, k.distance = Math.abs(b.x - l), 
                        "waterfall" === e.type && (k.cumulativeSumYStartValue = e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, 
                        k.cumulativeSum = e.dataPointEOs[this.currentDataPointIndex].cumulativeSum); else {
                            if (!this.enabled || "line" !== e.type && "stepLine" !== e.type && "spline" !== e.type && "area" !== e.type && "stepArea" !== e.type && "splineArea" !== e.type && "stackedArea" !== e.type && "stackedArea100" !== e.type && "rangeArea" !== e.type && "rangeSplineArea" !== e.type && "candlestick" !== e.type && "ohlc" !== e.type && "boxAndWhisker" !== e.type) return;
                            l = e.axisX.convertPixelToValue({
                                x: a
                            }), s(k = e.getDataPointAtX(l, c)) || (k.dataSeries = e, this.currentDataPointIndex = k.index, 
                            b = k.dataPoint);
                        }
                        if (!s(k) && !s(k.dataPoint) && !s(k.dataPoint.y)) if (k.dataSeries.axisY) if (0 < k.dataPoint.y.length) {
                            for (b = c = 0; b < k.dataPoint.y.length; b++) k.dataPoint.y[b] < k.dataSeries.axisY.viewportMinimum ? c-- : k.dataPoint.y[b] > k.dataSeries.axisY.viewportMaximum && c++;
                            c < k.dataPoint.y.length && c > -k.dataPoint.y.length && f.push(k);
                        } else "column" === e.type || "bar" === e.type ? 0 > k.dataPoint.y ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && f.push(k) : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && f.push(k) : "bubble" === e.type ? (c = this.chart._eventManager.objectMap[e.dataPointIds[k.index]].size / 2, 
                        k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - c && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + c && f.push(k)) : "waterfall" === e.type ? (c = 0, 
                        k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && c++, 
                        k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && c++, 
                        2 > c && -2 < c && f.push(k)) : (0 <= k.dataSeries.type.indexOf("100") || "stackedColumn" === e.type || "stackedBar" === e.type || k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum) && f.push(k); else f.push(k);
                    }
                }
                if (0 < f.length) {
                    if (this.highlightObjects(f), this.enabled) {
                        var n = "";
                        if (null !== (n = this.getToolTipInnerHTML({
                            entries: f
                        }))) {
                            this.contentDiv.innerHTML = n, c = !1, "none" === this.container.style.display && (c = !0, 
                            this.container.style.display = "block");
                            try {
                                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", 
                                this.borderColor = "waterfall" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : 0 < f[0].dataPoint.y ? f[0].dataSeries.risingColor : f[0].dataSeries.fallingColor : "error" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[e.index % f[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[f[0].index % f[0].dataSeries._colorSet.length], 
                                this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", 
                                this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", 
                                this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", 
                                this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", 
                                this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", 
                                this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : v ? "italic" : "normal";
                            } catch (p) {}
                            "pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type || "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type || "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) - this.container.clientWidth << 0, 
                            a -= 10), 0 > a && (a += this.container.clientWidth + 20), a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth)), 
                            0 < (d = 10 - (d = 1 !== f.length || this.shared || "line" !== f[0].dataSeries.type && "stepLine" !== f[0].dataSeries.type && "spline" !== f[0].dataSeries.type && "area" !== f[0].dataSeries.type && "stepArea" !== f[0].dataSeries.type && "splineArea" !== f[0].dataSeries.type ? "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) : d : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y))) + this.container.clientHeight + 5 && (d -= d + this.container.clientHeight + 5 - 0), 
                            this.fixMozTransitionDelay(a, d), !this.animationEnabled || c ? this.disableAnimation() : (this.enableAnimation(), 
                            this.container.style.MozTransition = this.mozContainerTransition), this.positionLeft = a, 
                            this.positionBottom = d, this.container.style.left = a + "px", this.container.style.bottom = d + "px";
                        } else this.hide(!1), this.dispatchEvent("hidden", {
                            chart: this.chart,
                            toolTip: this
                        }, this);
                    }
                    for (d = [], b = 0; b < f.length; b++) d.push({
                        xValue: f[b].dataPoint.x,
                        dataPoint: f[b].dataPoint,
                        dataSeries: f[b].dataSeries,
                        dataPointIndex: f[b].index,
                        dataSeriesIndex: f[b].dataSeries._index
                    });
                    n = {
                        chart: this.chart,
                        toolTip: this.options,
                        content: n,
                        entries: d
                    }, this._entries = f, this.dispatchEvent("updated", n, this);
                } else this.hide();
            }
        }, Y.prototype.highlightObjects = function(a) {
            var d = this.chart.overlaidCanvasCtx;
            (s(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas) && (this.chart.resetOverlayedCanvas(), 
            d.clearRect(0, 0, this.chart.width, this.chart.height), this.chart.clearedOverlayedCanvas = "toolTip"), 
            d.save();
            var c = this.chart.plotArea, b = 0;
            for (d.beginPath(), d.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1), d.clip(), c = 0; c < a.length; c++) {
                var e = a[c];
                if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
                    var f = (b = this.chart.data[e.dataSeriesIndex]).dataPoints[e.dataPointIndex], h = e.dataPointIndex;
                    !1 === f.highlightEnabled || !0 !== b.highlightEnabled && !0 !== f.highlightEnabled || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "scatter" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type ? ((f = b.getMarkerProperties(h, e.x1, e.y1, this.chart.overlaidCanvasCtx)).size = Math.max(1.5 * f.size << 0, 10), 
                    f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(.1 * f.size), 
                    W.drawMarkers([ f ]), void 0 !== e.y2 && ((f = b.getMarkerProperties(h, e.x1, e.y2, this.chart.overlaidCanvasCtx)).size = Math.max(1.5 * f.size << 0, 10), 
                    f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(.1 * f.size), 
                    W.drawMarkers([ f ]))) : "bubble" === b.type ? ((f = b.getMarkerProperties(h, e.x1, e.y1, this.chart.overlaidCanvasCtx)).size = e.size, 
                    f.color = "white", f.borderColor = "white", d.globalAlpha = .3, W.drawMarkers([ f ]), 
                    d.globalAlpha = 1) : "column" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "bar" === b.type || "rangeBar" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "rangeColumn" === b.type || "waterfall" === b.type ? ca(d, e.x1, e.y1, e.x2, e.y2, "white", 0, null, !1, !1, !1, !1, .3) : "pie" === b.type || "doughnut" === b.type ? X(d, e.center, e.radius, "white", b.type, e.startAngle, e.endAngle, .3, e.percentInnerRadius) : "funnel" === b.type || "pyramid" === b.type ? pa(d, e.funnelSection, .3, "white") : "candlestick" === b.type ? (d.globalAlpha = 1, 
                    d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 == d.lineWidth % 2 ? 0 : .5, 
                    d.beginPath(), d.moveTo(e.x3 - b, Math.min(e.y2, e.y3)), d.lineTo(e.x3 - b, Math.min(e.y1, e.y4)), 
                    d.stroke(), d.beginPath(), d.moveTo(e.x3 - b, Math.max(e.y1, e.y4)), d.lineTo(e.x3 - b, Math.max(e.y2, e.y3)), 
                    d.stroke(), ca(d, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, !1, !1, !1, !1), 
                    d.globalAlpha = 1) : "ohlc" === b.type ? (d.globalAlpha = 1, d.strokeStyle = e.color, 
                    d.lineWidth = 2 * e.borderThickness, b = 0 == d.lineWidth % 2 ? 0 : .5, d.beginPath(), 
                    d.moveTo(e.x3 - b, e.y2), d.lineTo(e.x3 - b, e.y3), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y1), 
                    d.lineTo(e.x1, e.y1), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4), d.lineTo(e.x2, e.y4), 
                    d.stroke(), d.globalAlpha = 1) : "boxAndWhisker" === b.type ? (d.save(), d.globalAlpha = 1, 
                    d.strokeStyle = e.stemColor, d.lineWidth = 2 * e.stemThickness, 0 < e.stemThickness && (d.beginPath(), 
                    d.moveTo(e.x3, e.y2 + e.borderThickness / 2), d.lineTo(e.x3, e.y1 + e.whiskerThickness / 2), 
                    d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4 - e.whiskerThickness / 2), d.lineTo(e.x3, e.y3 - e.borderThickness / 2), 
                    d.stroke()), d.beginPath(), ca(d, e.x1 - e.borderThickness / 2, Math.max(e.y2 + e.borderThickness / 2, e.y3 + e.borderThickness / 2), e.x2 + e.borderThickness / 2, Math.min(e.y2 - e.borderThickness / 2, e.y3 - e.borderThickness / 2), "transparent", e.borderThickness, e.color, !1, !1, !1, !1), 
                    d.globalAlpha = 1, d.strokeStyle = e.whiskerColor, d.lineWidth = 2 * e.whiskerThickness, 
                    0 < e.whiskerThickness && (d.beginPath(), d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y4), 
                    d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4), d.stroke(), d.beginPath(), 
                    d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1), 
                    d.stroke()), d.globalAlpha = 1, d.strokeStyle = e.lineColor, d.lineWidth = 2 * e.lineThickness, 
                    0 < e.lineThickness && (d.beginPath(), d.moveTo(e.x1, e.y5), d.lineTo(e.x2, e.y5), 
                    d.stroke()), d.restore(), d.globalAlpha = 1) : "error" === b.type && y(d, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, .3));
                }
            }
            d.restore(), d.globalAlpha = 1, d.beginPath();
        }, Y.prototype.getToolTipInnerHTML = function(a) {
            a = a.entries;
            for (var d = null, c = null, b = null, e = 0, f = "", h = !0, m = 0; m < a.length; m++) if (a[m].dataSeries.toolTipContent || a[m].dataPoint.toolTipContent) {
                h = !1;
                break;
            }
            if (h && (this.content && "function" == typeof this.content || this.contentFormatter)) a = {
                chart: this.chart,
                toolTip: this.options,
                entries: a
            }, d = this.contentFormatter ? this.contentFormatter(a) : this.content(a); else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
                var s = null, k = "";
                for (m = 0; m < a.length; m++) c = a[m].dataSeries, b = a[m].dataPoint, e = a[m].index, 
                f = "", 0 === m && h && !this.content && (this.chart.axisX && 0 < this.chart.axisX.length ? k += void 0 !== this.chart.axisX[0].labels[b.x] ? this.chart.axisX[0].labels[b.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (k += void 0 !== this.chart.axisX2[0].labels[b.x] ? this.chart.axisX2[0].labels[b.x] : "{x}"), 
                k += "</br>", k = this.chart.replaceKeywordsWithValue(k, b, c, e)), null === b.toolTipContent || void 0 === b.toolTipContent && null === c.options.toolTipContent || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += s != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), 
                f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}", 
                s = c.axisXIndex) : "bubble" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += s != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), 
                f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}") : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += s != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), 
                f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}") : "candlestick" === c.type || "ohlc" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += s != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), 
                f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}") : "boxAndWhisker" === c.type && (this.chart.axisX && 1 < this.chart.axisX.length && (f += s != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), 
                f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"), 
                null === d && (d = ""), !0 === this.reversed ? (d = this.chart.replaceKeywordsWithValue(f, b, c, e) + d, 
                m < a.length - 1 && (d = "</br>" + d)) : (d += this.chart.replaceKeywordsWithValue(f, b, c, e), 
                m < a.length - 1 && (d += "</br>")));
                null !== d && (d = k + d);
            } else {
                if (c = a[0].dataSeries, b = a[0].dataPoint, e = a[0].index, null === b.toolTipContent || void 0 === b.toolTipContent && null === c.options.toolTipContent) return null;
                "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.name ? "{name}:</span>&nbsp;&nbsp;" : b.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" === c.type || "ohlc" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === c.type && (f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"), 
                null === d && (d = ""), d += this.chart.replaceKeywordsWithValue(f, b, c, e);
            }
            return d;
        }, Y.prototype.enableAnimation = function() {
            if (!this.container.style.WebkitTransition) {
                var a = this.getContainerTransition(this.containerTransitionDuration);
                this.container.style.WebkitTransition = a, this.container.style.MsTransition = a, 
                this.container.style.transition = a, this.container.style.MozTransition = this.mozContainerTransition;
            }
        }, Y.prototype.disableAnimation = function() {
            this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", 
            this.container.style.MozTransition = "", this.container.style.MsTransition = "", 
            this.container.style.transition = "");
        }, Y.prototype.hide = function(a) {
            this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, 
            this._prevY = this._prevX = NaN, (void 0 === a || a) && this.chart.resetOverlayedCanvas());
        }, Y.prototype.show = function(a, d, c) {
            this._updateToolTip(a, d, void 0 !== c && c);
        }, Y.prototype.showAtIndex = function(a, d) {}, Y.prototype.showAtX = function(a, d) {
            if (!this.enabled) return !1;
            this.chart.clearedOverlayedCanvas = null;
            var c, b, e, f = [];
            if (e = !1, d = !s(d) && 0 <= d && d < this.chart.data.length ? d : 0, this.shared) for (var h = 0; h < this.chart.data.length; h++) (b = (c = this.chart.data[h]).getDataPointAtX(a, !1)) && b.dataPoint && !s(b.dataPoint.y) && c.visible && (b.dataSeries = c, 
            f.push(b)); else (b = (c = this.chart.data[d]).getDataPointAtX(a, !1)) && b.dataPoint && !s(b.dataPoint.y) && c.visible && (b.dataSeries = c, 
            f.push(b));
            if (!(0 < f.length)) return this.hide(), !1;
            for (h = 0; h < f.length; h++) {
                if (!((b = f[h]).dataPoint.x < b.dataSeries.axisX.viewportMinimum || b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || b.dataPoint.y < b.dataSeries.axisY.viewportMinimum || b.dataPoint.y > b.dataSeries.axisY.viewportMaximum)) {
                    e = !1;
                    break;
                }
                e = !0;
            }
            if (e) return this.hide(), !1;
            if (this.highlightObjects(f), this._entries = f, b = "", null === (b = this.getToolTipInnerHTML({
                entries: f
            }))) return this.hide(!1), !1;
            this.contentDiv.innerHTML = b, b = !1, "none" === this.container.style.display && (b = !0, 
            this.container.style.display = "block");
            try {
                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", 
                this.borderColor = "waterfall" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : 0 < f[0].dataPoint.y ? f[0].dataSeries.risingColor : f[0].dataSeries.fallingColor : "error" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[c.index % f[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[f[0].index % f[0].dataSeries._colorSet.length], 
                this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", 
                this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", 
                this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", 
                this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", 
                this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", 
                this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : v ? "italic" : "normal";
            } catch (m) {}
            return "pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type || "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type ? c = mouseX - 10 - this.container.clientWidth : (c = "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y) - this.container.clientWidth << 0 : f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) - this.container.clientWidth << 0, 
            c -= 10), 0 > c && (c += this.container.clientWidth + 20), c + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (c = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth)), 
            0 < (f = 10 - (f = (1 !== f.length || this.shared || "line" !== f[0].dataSeries.type && "stepLine" !== f[0].dataSeries.type && "spline" !== f[0].dataSeries.type && "area" !== f[0].dataSeries.type && "stepArea" !== f[0].dataSeries.type && "splineArea" !== f[0].dataSeries.type) && ("bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type) ? f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y))) + this.container.clientHeight + 5 && (f -= f + this.container.clientHeight + 5 - 0), 
            this.fixMozTransitionDelay(c, f), !this.animationEnabled || b ? this.disableAnimation() : (this.enableAnimation(), 
            this.container.style.MozTransition = this.mozContainerTransition), this.container.style.left = c + "px", 
            this.container.style.bottom = f + "px", !0;
        }, Y.prototype.fixMozTransitionDelay = function(a, d) {
            if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition = this.getContainerTransition(0); else {
                var c = parseFloat(this.container.style.left), b = (c = isNaN(c) ? 0 : c, parseFloat(this.container.style.bottom));
                b = isNaN(b) ? 0 : b;
                10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d, 2)) ? this.mozContainerTransition = this.getContainerTransition(.1) : this.mozContainerTransition = this.getContainerTransition(0);
            }
        }, Y.prototype.getContainerTransition = function(a) {
            return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s";
        }, da.prototype.reset = function() {
            this.lastObjectId = 0, this.objectMap = [], this.rectangularRegionEventSubscriptions = [], 
            this.previousDataPointEventObject = null, this.eventObjects = [], v && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), 
            this.ghostCtx.beginPath());
        }, da.prototype.getNewObjectTrackingId = function() {
            return ++this.lastObjectId;
        }, da.prototype.mouseEventHandler = function(a) {
            if ("mousemove" === a.type || "click" === a.type) {
                var d = [], c = Na(a), b = null;
                if ((b = this.chart.getObjectAtXY(c.x, c.y, !1)) && void 0 !== this.objectMap[b]) if ("dataPoint" === (b = this.objectMap[b]).objectType) {
                    var e = this.chart.data[b.dataSeriesIndex], f = e.dataPoints[b.dataPointIndex], h = b.dataPointIndex;
                    b.eventParameter = {
                        x: c.x,
                        y: c.y,
                        dataPoint: f,
                        dataSeries: e.options,
                        dataPointIndex: h,
                        dataSeriesIndex: e.index,
                        chart: this.chart
                    }, b.eventContext = {
                        context: f,
                        userContext: f,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    }, d.push(b), (b = this.objectMap[e.id]).eventParameter = {
                        x: c.x,
                        y: c.y,
                        dataPoint: f,
                        dataSeries: e.options,
                        dataPointIndex: h,
                        dataSeriesIndex: e.index,
                        chart: this.chart
                    }, b.eventContext = {
                        context: e,
                        userContext: e.options,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    }, d.push(this.objectMap[e.id]);
                } else "legendItem" === b.objectType && (e = this.chart.data[b.dataSeriesIndex], 
                f = null !== b.dataPointIndex ? e.dataPoints[b.dataPointIndex] : null, b.eventParameter = {
                    x: c.x,
                    y: c.y,
                    dataSeries: e.options,
                    dataPoint: f,
                    dataPointIndex: b.dataPointIndex,
                    dataSeriesIndex: b.dataSeriesIndex,
                    chart: this.chart
                }, b.eventContext = {
                    context: this.chart.legend,
                    userContext: this.chart.legend.options,
                    mouseover: "itemmouseover",
                    mousemove: "itemmousemove",
                    mouseout: "itemmouseout",
                    click: "itemclick"
                }, d.push(b));
                for (e = [], c = 0; c < this.mouseoveredObjectMaps.length; c++) {
                    for (f = !0, b = 0; b < d.length; b++) if (d[b].id === this.mouseoveredObjectMaps[c].id) {
                        f = !1;
                        break;
                    }
                    f ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : e.push(this.mouseoveredObjectMaps[c]);
                }
                for (this.mouseoveredObjectMaps = e, c = 0; c < d.length; c++) {
                    for (e = !1, b = 0; b < this.mouseoveredObjectMaps.length; b++) if (d[c].id === this.mouseoveredObjectMaps[b].id) {
                        e = !0;
                        break;
                    }
                    e || (this.fireEvent(d[c], "mouseover", a), this.mouseoveredObjectMaps.push(d[c])), 
                    "click" === a.type ? this.fireEvent(d[c], "click", a) : "mousemove" === a.type && this.fireEvent(d[c], "mousemove", a);
                }
            }
        }, da.prototype.fireEvent = function(a, d, c) {
            if (a && d) {
                var b = a.eventParameter, e = a.eventContext, f = a.eventContext.userContext;
                f && e && f[e[d]] && f[e[d]].call(f, b), "mouseout" !== d ? f.cursor && f.cursor !== c.target.style.cursor && (c.target.style.cursor = f.cursor) : (c.target.style.cursor = this.chart._defaultCursor, 
                delete a.eventParameter, delete a.eventContext), "click" === d && "dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], b), 
                "click" === d && "dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
            }
        }, ha.prototype.animate = function(a, d, c, b, e) {
            var f = this;
            for (this.chart.isAnimating = !0, e = e || L.easing.linear, c && this.animations.push({
                startTime: (new Date).getTime() + (a || 0),
                duration: d,
                animationCallback: c,
                onComplete: b
            }), a = []; 0 < this.animations.length; ) d = this.animations.shift(), c = (new Date).getTime(), 
            b = 0, d.startTime <= c && (b = e(Math.min(c - d.startTime, d.duration), 0, 1, d.duration), 
            b = Math.min(b, 1), isNaN(b) || !isFinite(b)) && (b = 1), 1 > b && a.push(d), d.animationCallback(b), 
            1 <= b && d.onComplete && d.onComplete();
            this.animations = a, 0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, (function() {
                f.animate.call(f);
            })) : this.chart.isAnimating = !1;
        }, ha.prototype.cancelAllAnimations = function() {
            this.animations = [], this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId), 
            this.animationRequestId = null, this.chart.isAnimating = !1;
        };
        var L = {
            yScaleAnimation: function(a, d) {
                if (0 !== a) {
                    var c = d.dest, b = d.source.canvas, e = d.animationBase;
                    c.drawImage(b, 0, 0, b.width, b.height, 0, e - e * a, c.canvas.width / ga, a * c.canvas.height / ga);
                }
            },
            xScaleAnimation: function(a, d) {
                if (0 !== a) {
                    var c = d.dest, b = d.source.canvas, e = d.animationBase;
                    c.drawImage(b, 0, 0, b.width, b.height, e - e * a, 0, a * c.canvas.width / ga, c.canvas.height / ga);
                }
            },
            xClipAnimation: function(a, d) {
                if (0 !== a) {
                    var c = d.dest, b = d.source.canvas;
                    c.save(), 0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, b.width * a / ga, b.height / ga), 
                    c.restore();
                }
            },
            fadeInAnimation: function(a, d) {
                if (0 !== a) {
                    var c = d.dest, b = d.source.canvas;
                    c.save(), c.globalAlpha = a, c.drawImage(b, 0, 0, b.width, b.height, 0, 0, c.canvas.width / ga, c.canvas.height / ga), 
                    c.restore();
                }
            },
            easing: {
                linear: function(a, d, c, b) {
                    return c * a / b + d;
                },
                easeOutQuad: function(a, d, c, b) {
                    return -c * (a /= b) * (a - 2) + d;
                },
                easeOutQuart: function(a, d, c, b) {
                    return -c * ((a = a / b - 1) * a * a * a - 1) + d;
                },
                easeInQuad: function(a, d, c, b) {
                    return c * (a /= b) * a + d;
                },
                easeInQuart: function(a, d, c, b) {
                    return c * (a /= b) * a * a * a + d;
                }
            }
        }, W = {
            drawMarker: function(a, d, c, b, e, f, h, m) {
                if (c) {
                    var s = 1;
                    c.fillStyle = f || "#000000", c.strokeStyle = h || "#000000", c.lineWidth = m || 0, 
                    c.setLineDash && c.setLineDash(N("solid", m)), "circle" === b ? (c.moveTo(a, d), 
                    c.beginPath(), c.arc(a, d, e / 2, 0, 2 * Math.PI, !1), f && c.fill(), m && (h ? c.stroke() : (s = c.globalAlpha, 
                    c.globalAlpha = .15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = s))) : "square" === b ? (c.beginPath(), 
                    c.rect(a - e / 2, d - e / 2, e, e), f && c.fill(), m && (h ? c.stroke() : (s = c.globalAlpha, 
                    c.globalAlpha = .15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = s))) : "triangle" === b ? (c.beginPath(), 
                    c.moveTo(a - e / 2, d + e / 2), c.lineTo(a + e / 2, d + e / 2), c.lineTo(a, d - e / 2), 
                    c.closePath(), f && c.fill(), m && (h ? c.stroke() : (s = c.globalAlpha, c.globalAlpha = .15, 
                    c.strokeStyle = "black", c.stroke(), c.globalAlpha = s)), c.beginPath()) : "cross" === b && (c.strokeStyle = f, 
                    c.lineWidth = e / 4, c.beginPath(), c.moveTo(a - e / 2, d - e / 2), c.lineTo(a + e / 2, d + e / 2), 
                    c.stroke(), c.moveTo(a + e / 2, d - e / 2), c.lineTo(a - e / 2, d + e / 2), c.stroke());
                }
            },
            drawMarkers: function(a) {
                for (var d = 0; d < a.length; d++) {
                    var c = a[d];
                    W.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness);
                }
            }
        };
        return m;
    }()).version = "v3.2.17 GA", window.CanvasJS && y && !window.CanvasJS.Chart && (window.CanvasJS.Chart = y);
}(), document.createElement("canvas").getContext || function() {
    function V() {
        return this.context_ || (this.context_ = new C(this));
    }
    function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
    }
    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML"), 
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML"), 
        a.styleSheets.ex_canvas_ || ((a = a.createStyleSheet()).owningElement.id = "ex_canvas_", 
        a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}");
    }
    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
          case "width":
            b.getContext().clearRect(), b.style.width = b.attributes.width.nodeValue + "px", 
            b.firstChild.style.width = b.clientWidth + "px";
            break;

          case "height":
            b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", 
            b.firstChild.style.height = b.clientHeight + "px";
        }
    }
    function Y(a) {
        (a = a.srcElement).firstChild && (a.firstChild.style.width = a.clientWidth + "px", 
        a.firstChild.style.height = a.clientHeight + "px");
    }
    function t(a, b) {
        for (var c = [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ], g = 0; 3 > g; g++) for (var e = 0; 3 > e; e++) {
            for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
            c[g][e] = f;
        }
        return c;
    }
    function P(a, b) {
        b.fillStyle = a.fillStyle, b.lineCap = a.lineCap, b.lineJoin = a.lineJoin, b.lineWidth = a.lineWidth, 
        b.miterLimit = a.miterLimit, b.shadowBlur = a.shadowBlur, b.shadowColor = a.shadowColor, 
        b.shadowOffsetX = a.shadowOffsetX, b.shadowOffsetY = a.shadowOffsetY, b.strokeStyle = a.strokeStyle, 
        b.globalAlpha = a.globalAlpha, b.font = a.font, b.textAlign = a.textAlign, b.textBaseline = a.textBaseline, 
        b.arcScaleX_ = a.arcScaleX_, b.arcScaleY_ = a.arcScaleY_, b.lineScale_ = a.lineScale_;
    }
    function Q(a) {
        var b = a.indexOf("(", 3), c = a.indexOf(")", b + 1);
        return 4 == (b = a.substring(b + 1, c).split(",")).length && "a" == a.charAt(3) || (b[3] = 1), 
        b;
    }
    function E(a, b, c) {
        return Math.min(c, Math.max(b, a));
    }
    function F(a, b, c) {
        return 0 > c && c++, 1 < c && c--, 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a;
    }
    function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        if ("#" == (a = String(a)).charAt(0)) b = a; else if (/^rgb/.test(a)) {
            c = Q(a), b = "#";
            for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(parseFloat(c[e]) / 100 * 255) : +c[e], 
            b += v[E(g, 0, 255)];
            c = +c[3];
        } else if (/^hsl/.test(a)) {
            if (e = c = Q(a), 0 > (b = parseFloat(e[0]) / 360 % 360) && b++, g = E(parseFloat(e[1]) / 100, 0, 1), 
            e = E(parseFloat(e[2]) / 100, 0, 1), 0 == g) g = e = b = e; else {
                var f = .5 > e ? e * (1 + g) : e + g - e * g, d = 2 * e - f;
                g = F(d, f, b + 1 / 3), e = F(d, f, b), b = F(d, f, b - 1 / 3);
            }
            b = "#" + v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)], 
            c = c[3];
        } else b = Z[a] || a;
        return H[a] = {
            color: b,
            alpha: c
        };
    }
    function C(a) {
        this.m_ = [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ], this.mStack_ = [], this.aStack_ = [], 
        this.currentPath_ = [], this.fillStyle = this.strokeStyle = "#000", this.lineWidth = 1, 
        this.lineJoin = "miter", this.lineCap = "butt", this.miterLimit = 1 * q, this.globalAlpha = 1, 
        this.font = "10px sans-serif", this.textAlign = "left", this.textBaseline = "alphabetic", 
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute", c = a.ownerDocument.createElement("div");
        c.style.cssText = b, a.appendChild(c), (b = c.cloneNode(!1)).style.backgroundColor = "red", 
        b.style.filter = "alpha(opacity=0)", a.appendChild(b), this.element_ = c, this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1;
    }
    function R(a, b, c, g) {
        a.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: b.x,
            cp1y: b.y,
            cp2x: c.x,
            cp2y: c.y,
            x: g.x,
            y: g.y
        }), a.currentX_ = g.x, a.currentY_ = g.y;
    }
    function S(a, b) {
        var g = (c = G(a.strokeStyle)).color, c = c.alpha * a.globalAlpha, e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e), b.push("<g_vml_:stroke", ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />');
    }
    function T(a, b, c, g) {
        var e = a.fillStyle, f = a.arcScaleX_, d = a.arcScaleY_, k = g.x - c.x, n = g.y - c.y;
        if (e instanceof w) {
            var h = 0, l = g = 0, u = 0, m = 1;
            if ("gradient" == e.type_) {
                h = e.x1_ / f, c = e.y1_ / d;
                var p = s(a, e.x0_ / f, e.y0_ / d);
                h = s(a, h, c);
                0 > (h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI) && (h += 360), 1e-6 > h && (h = 0);
            } else g = ((p = s(a, e.x0_, e.y0_)).x - c.x) / k, l = (p.y - c.y) / n, k /= f * q, 
            n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
            (f = e.colors_).sort((function(a, b) {
                return a.offset - b.offset;
            })), d = f.length, p = f[0].color, c = f[d - 1].color, k = f[0].alpha * a.globalAlpha, 
            a = f[d - 1].alpha * a.globalAlpha;
            n = [];
            for (var r = 0; r < d; r++) {
                var t = f[r];
                n.push(t.offset * m + u + " " + t.color);
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />');
        } else e instanceof I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), 
        b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'));
    }
    function s(a, b, c) {
        return a = a.m_, {
            x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
            y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r
        };
    }
    function z(a, b, c) {
        isFinite(b[0][0]) && isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1]) && (a.m_ = b, 
        c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))));
    }
    function w(a) {
        this.type_ = a, this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0, 
        this.colors_ = [];
    }
    function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
        switch (b) {
          case "repeat":
          case null:
          case "":
            this.repetition_ = "repeat";
            break;

          case "repeat-x":
          case "repeat-y":
          case "no-repeat":
            this.repetition_ = b;
            break;

          default:
            throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src, this.width_ = a.width, this.height_ = a.height;
    }
    function A(a) {
        this.code = this[a], this.message = a + ": DOM Exception " + this.code;
    }
    var x = Math, k = x.round, J = x.sin, K = x.cos, ba = x.abs, aa = x.sqrt, q = 10, r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
        init: function(a) {
            (a = a || document).createElement("canvas"), a.attachEvent("onreadystatechange", function W(a, b, c) {
                var g = M.call(arguments, 2);
                return function() {
                    return a.apply(b, g.concat(M.call(arguments)));
                };
            }(this.init_, this, a));
        },
        init_: function(a) {
            a = a.getElementsByTagName("canvas");
            for (var b = 0; b < a.length; b++) this.initElement(a[b]);
        },
        initElement: function(a) {
            if (!a.getContext) {
                a.getContext = V, O(a.ownerDocument), a.innerHTML = "", a.attachEvent("onpropertychange", X), 
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth, 
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight;
            }
            return a;
        }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++) for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32"
    }, H = {}, L = {}, $ = {
        butt: "flat",
        round: "round"
    };
    (d = C.prototype).clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null), 
        this.element_.innerHTML = "";
    }, d.beginPath = function() {
        this.currentPath_ = [];
    }, d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "moveTo",
            x: c.x,
            y: c.y
        }), this.currentX_ = c.x, this.currentY_ = c.y;
    }, d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "lineTo",
            x: c.x,
            y: c.y
        }), this.currentX_ = c.x, this.currentY_ = c.y;
    }, d.bezierCurveTo = function(a, b, c, g, e, f) {
        e = s(this, e, f), R(this, a = s(this, a, b), c = s(this, c, g), e);
    }, d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b), c = s(this, c, g), R(this, g = {
            x: this.currentX_ + 2 / 3 * (a.x - this.currentX_),
            y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)
        }, {
            x: g.x + (c.x - this.currentX_) / 3,
            y: g.y + (c.y - this.currentY_) / 3
        }, c);
    }, d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa", k = a + K(g) * c - r, n = b + J(g) * c - r;
        g = a + K(e) * c - r, e = b + J(e) * c - r, k != g || f || (k += .125), a = s(this, a, b), 
        k = s(this, k, n), g = s(this, g, e), this.currentPath_.push({
            type: d,
            x: a.x,
            y: a.y,
            radius: c,
            xStart: k.x,
            yStart: k.y,
            xEnd: g.x,
            yEnd: g.y
        });
    }, d.rect = function(a, b, c, g) {
        this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + g), this.lineTo(a, b + g), 
        this.closePath();
    }, d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath(), this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + g), 
        this.lineTo(a, b + g), this.closePath(), this.stroke(), this.currentPath_ = e;
    }, d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath(), this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + g), 
        this.lineTo(a, b + g), this.closePath(), this.fill(), this.currentPath_ = e;
    }, d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        return e.x0_ = a, e.y0_ = b, e.x1_ = c, e.y1_ = g, e;
    }, d.createRadialGradient = function(a, b, c, g, e, f) {
        var d = new w("gradientradial");
        return d.x0_ = a, d.y0_ = b, d.r0_ = c, d.x1_ = g, d.y1_ = e, d.r1_ = f, d;
    }, d.drawImage = function(a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width, d = a.runtimeStyle.height, a.runtimeStyle.width = "auto", 
        a.runtimeStyle.height = "auto";
        var l = a.width, u = a.height;
        if (a.runtimeStyle.width = e, a.runtimeStyle.height = d, 3 == arguments.length) c = arguments[1], 
        g = arguments[2], r = y = 0, n = e = l, h = d = u; else if (5 == arguments.length) c = arguments[1], 
        g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u; else {
            if (9 != arguments.length) throw Error("Invalid number of arguments");
            r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], 
            g = arguments[6], e = arguments[7], d = arguments[8];
        }
        var m = s(this, c, g), p = [];
        if (p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:', 10, "px;height:", 10, "px;position:absolute;"), 
        1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
            var v = s(this, c + e, g), w = s(this, c, g + d);
            c = s(this, c + e, g + d), m.x = x.max(m.x, v.x, w.x, c.x), m.y = x.max(m.y, v.y, w.y, c.y), 
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');");
        } else p.push("top:", k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>"), 
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""));
    }, d.stroke = function(a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"', ' stroked="', !a, '"', ' path="');
        for (var c = {
            x: null,
            y: null
        }, d = {
            x: null,
            y: null
        }, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
              case "moveTo":
                b.push(" m ", k(f.x), ",", k(f.y));
                break;

              case "lineTo":
                b.push(" l ", k(f.x), ",", k(f.y));
                break;

              case "close":
                b.push(" x "), f = null;
                break;

              case "bezierCurveTo":
                b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                break;

              case "at":
              case "wa":
                b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ * f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd));
            }
            f && ((null == c.x || f.x < c.x) && (c.x = f.x), (null == d.x || f.x > d.x) && (d.x = f.x), 
            (null == c.y || f.y < c.y) && (c.y = f.y), (null == d.y || f.y > d.y) && (d.y = f.y));
        }
        b.push(' ">'), a ? T(this, b, c, d) : S(this, b), b.push("</g_vml_:shape>"), this.element_.insertAdjacentHTML("beforeEnd", b.join(""));
    }, d.fill = function() {
        this.stroke(!0);
    }, d.closePath = function() {
        this.currentPath_.push({
            type: "close"
        });
    }, d.save = function() {
        var a = {};
        P(this, a), this.aStack_.push(a), this.mStack_.push(this.m_), this.m_ = t([ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ], this.m_);
    }, d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop());
    }, d.translate = function(a, b) {
        z(this, t([ [ 1, 0, 0 ], [ 0, 1, 0 ], [ a, b, 1 ] ], this.m_), !1);
    }, d.rotate = function(a) {
        var b = K(a);
        z(this, t([ [ b, a = J(a), 0 ], [ -a, b, 0 ], [ 0, 0, 1 ] ], this.m_), !1);
    }, d.scale = function(a, b) {
        this.arcScaleX_ *= a, this.arcScaleY_ *= b, z(this, t([ [ a, 0, 0 ], [ 0, b, 0 ], [ 0, 0, 1 ] ], this.m_), !0);
    }, d.transform = function(a, b, c, d, e, f) {
        z(this, t([ [ a, b, 0 ], [ c, d, 0 ], [ e, f, 1 ] ], this.m_), !0);
    }, d.setTransform = function(a, b, c, d, e, f) {
        z(this, [ [ a, b, 0 ], [ c, d, 0 ], [ e, f, 1 ] ], !0);
    }, d.drawText_ = function(a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var h, r = 1e3, t = 0, n = [];
        if (h = this.font, L[h]) h = L[h]; else {
            var l = document.createElement("div").style;
            try {
                l.font = h;
            } catch (u) {}
            h = L[h] = {
                style: l.fontStyle || "normal",
                variant: l.fontVariant || "normal",
                weight: l.fontWeight || "normal",
                size: l.fontSize || 10,
                family: l.fontFamily || "sans-serif"
            };
        }
        l = h;
        var m = this.element_;
        for (var p in h = {}, l) h[p] = l[p];
        switch (p = parseFloat(m.currentStyle.fontSize), m = parseFloat(l.size), "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / .75 : h.size = p, 
        h.size *= .981, p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family, 
        m = this.element_.currentStyle, l = this.textAlign.toLowerCase()) {
          case "left":
          case "center":
          case "right":
            break;

          case "end":
            l = "ltr" == m.direction ? "right" : "left";
            break;

          case "start":
            l = "rtl" == m.direction ? "right" : "left";
            break;

          default:
            l = "left";
        }
        switch (this.textBaseline) {
          case "hanging":
          case "top":
            t = h.size / 1.75;
            break;

          case "middle":
            break;

          default:
          case null:
          case "alphabetic":
          case "ideographic":
          case "bottom":
            t = -h.size / 2.25;
        }
        switch (l) {
          case "right":
            d = 1e3, r = .05;
            break;

          case "center":
            d = r = 500;
        }
        b = s(this, b + 0, c + t), n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">'), 
        e ? S(this, n) : T(this, n, {
            x: -d,
            y: 0
        }, {
            x: r,
            y: h.size
        }), e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0", 
        b = k(b.x / q) + "," + k(b.y / q), n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>'), 
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""));
    }, d.fillText = function(a, b, c, d) {
        this.drawText_(a, b, c, d, !1);
    }, d.strokeText = function(a, b, c, d) {
        this.drawText_(a, b, c, d, !0);
    }, d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), 
        this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        return this.textMeasureEl_.innerHTML = "", this.textMeasureEl_.style.font = this.font, 
        this.textMeasureEl_.appendChild(b.createTextNode(a)), {
            width: this.textMeasureEl_.offsetWidth
        };
    }, d.clip = function() {}, d.arcTo = function() {}, d.createPattern = function(a, b) {
        return new I(a, b);
    }, w.prototype.addColorStop = function(a, b) {
        b = G(b), this.colors_.push({
            offset: a,
            color: b.color,
            alpha: b.alpha
        });
    }, (d = A.prototype = Error()).INDEX_SIZE_ERR = 1, d.DOMSTRING_SIZE_ERR = 2, d.HIERARCHY_REQUEST_ERR = 3, 
    d.WRONG_DOCUMENT_ERR = 4, d.INVALID_CHARACTER_ERR = 5, d.NO_DATA_ALLOWED_ERR = 6, 
    d.NO_MODIFICATION_ALLOWED_ERR = 7, d.NOT_FOUND_ERR = 8, d.NOT_SUPPORTED_ERR = 9, 
    d.INUSE_ATTRIBUTE_ERR = 10, d.INVALID_STATE_ERR = 11, d.SYNTAX_ERR = 12, d.INVALID_MODIFICATION_ERR = 13, 
    d.NAMESPACE_ERR = 14, d.INVALID_ACCESS_ERR = 15, d.VALIDATION_ERR = 16, d.TYPE_MISMATCH_ERR = 17, 
    G_vmlCanvasManager = U, CanvasRenderingContext2D = C, CanvasGradient = w, CanvasPattern = I, 
    DOMException = A;
}(), function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : "object" == typeof exports ? factory(require("jquery")) : factory(window.jQuery || window.Zepto);
}((function($) {
    var mfp, _prevStatus, _document, _prevContentType, _wrapClasses, _currPopupType, MagnificPopup = function() {}, _isJQ = !!window.jQuery, _window = $(window), _mfpOn = function(name, f) {
        mfp.ev.on("mfp" + name + ".mfp", f);
    }, _getEl = function(className, appendTo, html, raw) {
        var el = document.createElement("div");
        return el.className = "mfp-" + className, html && (el.innerHTML = html), raw ? appendTo && appendTo.appendChild(el) : (el = $(el), 
        appendTo && el.appendTo(appendTo)), el;
    }, _mfpTrigger = function(e, data) {
        mfp.ev.triggerHandler("mfp" + e, data), mfp.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1), 
        mfp.st.callbacks[e] && mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [ data ]));
    }, _getCloseBtn = function(type) {
        return type === _currPopupType && mfp.currTemplate.closeBtn || (mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace("%title%", mfp.st.tClose)), 
        _currPopupType = type), mfp.currTemplate.closeBtn;
    }, _checkInstance = function() {
        $.magnificPopup.instance || ((mfp = new MagnificPopup).init(), $.magnificPopup.instance = mfp);
    };
    MagnificPopup.prototype = {
        constructor: MagnificPopup,
        init: function() {
            var appVersion = navigator.appVersion;
            mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener, mfp.isAndroid = /android/gi.test(appVersion), 
            mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion), mfp.supportsTransition = function() {
                var s = document.createElement("p").style, v = [ "ms", "O", "Moz", "Webkit" ];
                if (void 0 !== s.transition) return !0;
                for (;v.length; ) if (v.pop() + "Transition" in s) return !0;
                return !1;
            }(), mfp.probablyMobile = mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), 
            _document = $(document), mfp.popupsCache = {};
        },
        open: function(data) {
            var i;
            if (!1 === data.isObj) {
                mfp.items = data.items.toArray(), mfp.index = 0;
                var item, items = data.items;
                for (i = 0; i < items.length; i++) if ((item = items[i]).parsed && (item = item.el[0]), 
                item === data.el[0]) {
                    mfp.index = i;
                    break;
                }
            } else mfp.items = $.isArray(data.items) ? data.items : [ data.items ], mfp.index = data.index || 0;
            if (!mfp.isOpen) {
                mfp.types = [], _wrapClasses = "", data.mainEl && data.mainEl.length ? mfp.ev = data.mainEl.eq(0) : mfp.ev = _document, 
                data.key ? (mfp.popupsCache[data.key] || (mfp.popupsCache[data.key] = {}), mfp.currTemplate = mfp.popupsCache[data.key]) : mfp.currTemplate = {}, 
                mfp.st = $.extend(!0, {}, $.magnificPopup.defaults, data), mfp.fixedContentPos = "auto" === mfp.st.fixedContentPos ? !mfp.probablyMobile : mfp.st.fixedContentPos, 
                mfp.st.modal && (mfp.st.closeOnContentClick = !1, mfp.st.closeOnBgClick = !1, mfp.st.showCloseBtn = !1, 
                mfp.st.enableEscapeKey = !1), mfp.bgOverlay || (mfp.bgOverlay = _getEl("bg").on("click.mfp", (function() {
                    mfp.close();
                })), mfp.wrap = _getEl("wrap").attr("tabindex", -1).on("click.mfp", (function(e) {
                    mfp._checkIfClose(e.target) && mfp.close();
                })), mfp.container = _getEl("container", mfp.wrap)), mfp.contentContainer = _getEl("content"), 
                mfp.st.preloader && (mfp.preloader = _getEl("preloader", mfp.container, mfp.st.tLoading));
                var modules = $.magnificPopup.modules;
                for (i = 0; i < modules.length; i++) {
                    var n = modules[i];
                    n = n.charAt(0).toUpperCase() + n.slice(1), mfp["init" + n].call(mfp);
                }
                _mfpTrigger("BeforeOpen"), mfp.st.showCloseBtn && (mfp.st.closeBtnInside ? (_mfpOn("MarkupParse", (function(e, template, values, item) {
                    values.close_replaceWith = _getCloseBtn(item.type);
                })), _wrapClasses += " mfp-close-btn-in") : mfp.wrap.append(_getCloseBtn())), mfp.st.alignTop && (_wrapClasses += " mfp-align-top"), 
                mfp.fixedContentPos ? mfp.wrap.css({
                    overflow: mfp.st.overflowY,
                    overflowX: "hidden",
                    overflowY: mfp.st.overflowY
                }) : mfp.wrap.css({
                    top: _window.scrollTop(),
                    position: "absolute"
                }), (!1 === mfp.st.fixedBgPos || "auto" === mfp.st.fixedBgPos && !mfp.fixedContentPos) && mfp.bgOverlay.css({
                    height: _document.height(),
                    position: "absolute"
                }), mfp.st.enableEscapeKey && _document.on("keyup.mfp", (function(e) {
                    27 === e.keyCode && mfp.close();
                })), _window.on("resize.mfp", (function() {
                    mfp.updateSize();
                })), mfp.st.closeOnContentClick || (_wrapClasses += " mfp-auto-cursor"), _wrapClasses && mfp.wrap.addClass(_wrapClasses);
                var windowHeight = mfp.wH = _window.height(), windowStyles = {};
                if (mfp.fixedContentPos && mfp._hasScrollBar(windowHeight)) {
                    var s = mfp._getScrollbarSize();
                    s && (windowStyles.marginRight = s);
                }
                mfp.fixedContentPos && (mfp.isIE7 ? $("body, html").css("overflow", "hidden") : windowStyles.overflow = "hidden");
                var classesToadd = mfp.st.mainClass;
                return mfp.isIE7 && (classesToadd += " mfp-ie7"), classesToadd && mfp._addClassToMFP(classesToadd), 
                mfp.updateItemHTML(), _mfpTrigger("BuildControls"), $("html").css(windowStyles), 
                mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body)), mfp._lastFocusedEl = document.activeElement, 
                setTimeout((function() {
                    mfp.content ? (mfp._addClassToMFP("mfp-ready"), mfp._setFocus()) : mfp.bgOverlay.addClass("mfp-ready"), 
                    _document.on("focusin.mfp", mfp._onFocusIn);
                }), 16), mfp.isOpen = !0, mfp.updateSize(windowHeight), _mfpTrigger("Open"), data;
            }
            mfp.updateItemHTML();
        },
        close: function() {
            mfp.isOpen && (_mfpTrigger("BeforeClose"), mfp.isOpen = !1, mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition ? (mfp._addClassToMFP("mfp-removing"), 
            setTimeout((function() {
                mfp._close();
            }), mfp.st.removalDelay)) : mfp._close());
        },
        _close: function() {
            _mfpTrigger("Close");
            var classesToRemove = "mfp-removing mfp-ready ";
            if (mfp.bgOverlay.detach(), mfp.wrap.detach(), mfp.container.empty(), mfp.st.mainClass && (classesToRemove += mfp.st.mainClass + " "), 
            mfp._removeClassFromMFP(classesToRemove), mfp.fixedContentPos) {
                var windowStyles = {
                    marginRight: ""
                };
                mfp.isIE7 ? $("body, html").css("overflow", "") : windowStyles.overflow = "", $("html").css(windowStyles);
            }
            _document.off("keyup.mfp focusin.mfp"), mfp.ev.off(".mfp"), mfp.wrap.attr("class", "mfp-wrap").removeAttr("style"), 
            mfp.bgOverlay.attr("class", "mfp-bg"), mfp.container.attr("class", "mfp-container"), 
            !mfp.st.showCloseBtn || mfp.st.closeBtnInside && !0 !== mfp.currTemplate[mfp.currItem.type] || mfp.currTemplate.closeBtn && mfp.currTemplate.closeBtn.detach(), 
            mfp.st.autoFocusLast && mfp._lastFocusedEl && $(mfp._lastFocusedEl).focus(), mfp.currItem = null, 
            mfp.content = null, mfp.currTemplate = null, mfp.prevHeight = 0, _mfpTrigger("AfterClose");
        },
        updateSize: function(winHeight) {
            if (mfp.isIOS) {
                var zoomLevel = document.documentElement.clientWidth / window.innerWidth, height = window.innerHeight * zoomLevel;
                mfp.wrap.css("height", height), mfp.wH = height;
            } else mfp.wH = winHeight || _window.height();
            mfp.fixedContentPos || mfp.wrap.css("height", mfp.wH), _mfpTrigger("Resize");
        },
        updateItemHTML: function() {
            var item = mfp.items[mfp.index];
            mfp.contentContainer.detach(), mfp.content && mfp.content.detach(), item.parsed || (item = mfp.parseEl(mfp.index));
            var type = item.type;
            if (_mfpTrigger("BeforeChange", [ mfp.currItem ? mfp.currItem.type : "", type ]), 
            mfp.currItem = item, !mfp.currTemplate[type]) {
                var markup = !!mfp.st[type] && mfp.st[type].markup;
                _mfpTrigger("FirstMarkupParse", markup), mfp.currTemplate[type] = !markup || $(markup);
            }
            _prevContentType && _prevContentType !== item.type && mfp.container.removeClass("mfp-" + _prevContentType + "-holder");
            var newContent = mfp["get" + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
            mfp.appendContent(newContent, type), item.preloaded = !0, _mfpTrigger("Change", item), 
            _prevContentType = item.type, mfp.container.prepend(mfp.contentContainer), _mfpTrigger("AfterChange");
        },
        appendContent: function(newContent, type) {
            mfp.content = newContent, newContent ? mfp.st.showCloseBtn && mfp.st.closeBtnInside && !0 === mfp.currTemplate[type] ? mfp.content.find(".mfp-close").length || mfp.content.append(_getCloseBtn()) : mfp.content = newContent : mfp.content = "", 
            _mfpTrigger("BeforeAppend"), mfp.container.addClass("mfp-" + type + "-holder"), 
            mfp.contentContainer.append(mfp.content);
        },
        parseEl: function(index) {
            var type, item = mfp.items[index];
            if (item.tagName ? item = {
                el: $(item)
            } : (type = item.type, item = {
                data: item,
                src: item.src
            }), item.el) {
                for (var types = mfp.types, i = 0; i < types.length; i++) if (item.el.hasClass("mfp-" + types[i])) {
                    type = types[i];
                    break;
                }
                item.src = item.el.attr("data-mfp-src"), item.src || (item.src = item.el.attr("href"));
            }
            return item.type = type || mfp.st.type || "inline", item.index = index, item.parsed = !0, 
            mfp.items[index] = item, _mfpTrigger("ElementParse", item), mfp.items[index];
        },
        addGroup: function(el, options) {
            var eHandler = function(e) {
                e.mfpEl = this, mfp._openClick(e, el, options);
            };
            options || (options = {});
            var eName = "click.magnificPopup";
            options.mainEl = el, options.items ? (options.isObj = !0, el.off(eName).on(eName, eHandler)) : (options.isObj = !1, 
            options.delegate ? el.off(eName).on(eName, options.delegate, eHandler) : (options.items = el, 
            el.off(eName).on(eName, eHandler)));
        },
        _openClick: function(e, el, options) {
            if ((void 0 !== options.midClick ? options.midClick : $.magnificPopup.defaults.midClick) || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                var disableOn = void 0 !== options.disableOn ? options.disableOn : $.magnificPopup.defaults.disableOn;
                if (disableOn) if ($.isFunction(disableOn)) {
                    if (!disableOn.call(mfp)) return !0;
                } else if (_window.width() < disableOn) return !0;
                e.type && (e.preventDefault(), mfp.isOpen && e.stopPropagation()), options.el = $(e.mfpEl), 
                options.delegate && (options.items = el.find(options.delegate)), mfp.open(options);
            }
        },
        updateStatus: function(status, text) {
            if (mfp.preloader) {
                _prevStatus !== status && mfp.container.removeClass("mfp-s-" + _prevStatus), text || "loading" !== status || (text = mfp.st.tLoading);
                var data = {
                    status: status,
                    text: text
                };
                _mfpTrigger("UpdateStatus", data), status = data.status, text = data.text, mfp.preloader.html(text), 
                mfp.preloader.find("a").on("click", (function(e) {
                    e.stopImmediatePropagation();
                })), mfp.container.addClass("mfp-s-" + status), _prevStatus = status;
            }
        },
        _checkIfClose: function(target) {
            if (!$(target).hasClass("mfp-prevent-close")) {
                var closeOnContent = mfp.st.closeOnContentClick, closeOnBg = mfp.st.closeOnBgClick;
                if (closeOnContent && closeOnBg) return !0;
                if (!mfp.content || $(target).hasClass("mfp-close") || mfp.preloader && target === mfp.preloader[0]) return !0;
                if (target === mfp.content[0] || $.contains(mfp.content[0], target)) {
                    if (closeOnContent) return !0;
                } else if (closeOnBg && $.contains(document, target)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function(cName) {
            mfp.bgOverlay.addClass(cName), mfp.wrap.addClass(cName);
        },
        _removeClassFromMFP: function(cName) {
            this.bgOverlay.removeClass(cName), mfp.wrap.removeClass(cName);
        },
        _hasScrollBar: function(winHeight) {
            return (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height());
        },
        _setFocus: function() {
            (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
        },
        _onFocusIn: function(e) {
            if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) return mfp._setFocus(), 
            !1;
        },
        _parseMarkup: function(template, values, item) {
            var arr;
            item.data && (values = $.extend(item.data, values)), _mfpTrigger("MarkupParse", [ template, values, item ]), 
            $.each(values, (function(key, value) {
                if (void 0 === value || !1 === value) return !0;
                if ((arr = key.split("_")).length > 1) {
                    var el = template.find(".mfp-" + arr[0]);
                    if (el.length > 0) {
                        var attr = arr[1];
                        "replaceWith" === attr ? el[0] !== value[0] && el.replaceWith(value) : "img" === attr ? el.is("img") ? el.attr("src", value) : el.replaceWith($("<img>").attr("src", value).attr("class", el.attr("class"))) : el.attr(arr[1], value);
                    }
                } else template.find(".mfp-" + key).html(value);
            }));
        },
        _getScrollbarSize: function() {
            if (void 0 === mfp.scrollbarSize) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", 
                document.body.appendChild(scrollDiv), mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth, 
                document.body.removeChild(scrollDiv);
            }
            return mfp.scrollbarSize;
        }
    }, $.magnificPopup = {
        instance: null,
        proto: MagnificPopup.prototype,
        modules: [],
        open: function(options, index) {
            return _checkInstance(), (options = options ? $.extend(!0, {}, options) : {}).isObj = !0, 
            options.index = index || 0, this.instance.open(options);
        },
        close: function() {
            return $.magnificPopup.instance && $.magnificPopup.instance.close();
        },
        registerModule: function(name, module) {
            module.options && ($.magnificPopup.defaults[name] = module.options), $.extend(this.proto, module.proto), 
            this.modules.push(name);
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, $.fn.magnificPopup = function(options) {
        _checkInstance();
        var jqEl = $(this);
        if ("string" == typeof options) if ("open" === options) {
            var items, itemOpts = _isJQ ? jqEl.data("magnificPopup") : jqEl[0].magnificPopup, index = parseInt(arguments[1], 10) || 0;
            itemOpts.items ? items = itemOpts.items[index] : (items = jqEl, itemOpts.delegate && (items = items.find(itemOpts.delegate)), 
            items = items.eq(index)), mfp._openClick({
                mfpEl: items
            }, jqEl, itemOpts);
        } else mfp.isOpen && mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1)); else options = $.extend(!0, {}, options), 
        _isJQ ? jqEl.data("magnificPopup", options) : jqEl[0].magnificPopup = options, mfp.addGroup(jqEl, options);
        return jqEl;
    };
    var _hiddenClass, _inlinePlaceholder, _lastInlineElement, _putInlineElementsBack = function() {
        _lastInlineElement && (_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach(), 
        _lastInlineElement = null);
    };
    $.magnificPopup.registerModule("inline", {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                mfp.types.push("inline"), _mfpOn("Close.inline", (function() {
                    _putInlineElementsBack();
                }));
            },
            getInline: function(item, template) {
                if (_putInlineElementsBack(), item.src) {
                    var inlineSt = mfp.st.inline, el = $(item.src);
                    if (el.length) {
                        var parent = el[0].parentNode;
                        parent && parent.tagName && (_inlinePlaceholder || (_hiddenClass = inlineSt.hiddenClass, 
                        _inlinePlaceholder = _getEl(_hiddenClass), _hiddenClass = "mfp-" + _hiddenClass), 
                        _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass)), 
                        mfp.updateStatus("ready");
                    } else mfp.updateStatus("error", inlineSt.tNotFound), el = $("<div>");
                    return item.inlineElement = el, el;
                }
                return mfp.updateStatus("ready"), mfp._parseMarkup(template, {}, item), template;
            }
        }
    });
    var _ajaxCur, _removeAjaxCursor = function() {
        _ajaxCur && $(document.body).removeClass(_ajaxCur);
    }, _destroyAjaxRequest = function() {
        _removeAjaxCursor(), mfp.req && mfp.req.abort();
    };
    $.magnificPopup.registerModule("ajax", {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                mfp.types.push("ajax"), _ajaxCur = mfp.st.ajax.cursor, _mfpOn("Close.ajax", _destroyAjaxRequest), 
                _mfpOn("BeforeChange.ajax", _destroyAjaxRequest);
            },
            getAjax: function(item) {
                _ajaxCur && $(document.body).addClass(_ajaxCur), mfp.updateStatus("loading");
                var opts = $.extend({
                    url: item.src,
                    success: function(data, textStatus, jqXHR) {
                        var temp = {
                            data: data,
                            xhr: jqXHR
                        };
                        _mfpTrigger("ParseAjax", temp), mfp.appendContent($(temp.data), "ajax"), item.finished = !0, 
                        _removeAjaxCursor(), mfp._setFocus(), setTimeout((function() {
                            mfp.wrap.addClass("mfp-ready");
                        }), 16), mfp.updateStatus("ready"), _mfpTrigger("AjaxContentAdded");
                    },
                    error: function() {
                        _removeAjaxCursor(), item.finished = item.loadError = !0, mfp.updateStatus("error", mfp.st.ajax.tError.replace("%url%", item.src));
                    }
                }, mfp.st.ajax.settings);
                return mfp.req = $.ajax(opts), "";
            }
        }
    });
    var _imgInterval, _getTitle = function(item) {
        if (item.data && void 0 !== item.data.title) return item.data.title;
        var src = mfp.st.image.titleSrc;
        if (src) {
            if ($.isFunction(src)) return src.call(mfp, item);
            if (item.el) return item.el.attr(src) || "";
        }
        return "";
    };
    $.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var imgSt = mfp.st.image, ns = ".image";
                mfp.types.push("image"), _mfpOn("Open" + ns, (function() {
                    "image" === mfp.currItem.type && imgSt.cursor && $(document.body).addClass(imgSt.cursor);
                })), _mfpOn("Close" + ns, (function() {
                    imgSt.cursor && $(document.body).removeClass(imgSt.cursor), _window.off("resize.mfp");
                })), _mfpOn("Resize" + ns, mfp.resizeImage), mfp.isLowIE && _mfpOn("AfterChange", mfp.resizeImage);
            },
            resizeImage: function() {
                var item = mfp.currItem;
                if (item && item.img && mfp.st.image.verticalFit) {
                    var decr = 0;
                    mfp.isLowIE && (decr = parseInt(item.img.css("padding-top"), 10) + parseInt(item.img.css("padding-bottom"), 10)), 
                    item.img.css("max-height", mfp.wH - decr);
                }
            },
            _onImageHasSize: function(item) {
                item.img && (item.hasSize = !0, _imgInterval && clearInterval(_imgInterval), item.isCheckingImgSize = !1, 
                _mfpTrigger("ImageHasSize", item), item.imgHidden && (mfp.content && mfp.content.removeClass("mfp-loading"), 
                item.imgHidden = !1));
            },
            findImageSize: function(item) {
                var counter = 0, img = item.img[0], mfpSetInterval = function(delay) {
                    _imgInterval && clearInterval(_imgInterval), _imgInterval = setInterval((function() {
                        img.naturalWidth > 0 ? mfp._onImageHasSize(item) : (counter > 200 && clearInterval(_imgInterval), 
                        3 === ++counter ? mfpSetInterval(10) : 40 === counter ? mfpSetInterval(50) : 100 === counter && mfpSetInterval(500));
                    }), delay);
                };
                mfpSetInterval(1);
            },
            getImage: function(item, template) {
                var guard = 0, onLoadComplete = function() {
                    item && (item.img[0].complete ? (item.img.off(".mfploader"), item === mfp.currItem && (mfp._onImageHasSize(item), 
                    mfp.updateStatus("ready")), item.hasSize = !0, item.loaded = !0, _mfpTrigger("ImageLoadComplete")) : ++guard < 200 ? setTimeout(onLoadComplete, 100) : onLoadError());
                }, onLoadError = function() {
                    item && (item.img.off(".mfploader"), item === mfp.currItem && (mfp._onImageHasSize(item), 
                    mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src))), item.hasSize = !0, 
                    item.loaded = !0, item.loadError = !0);
                }, imgSt = mfp.st.image, el = template.find(".mfp-img");
                if (el.length) {
                    var img = document.createElement("img");
                    img.className = "mfp-img", item.el && item.el.find("img").length && (img.alt = item.el.find("img").attr("alt")), 
                    item.img = $(img).on("load.mfploader", onLoadComplete).on("error.mfploader", onLoadError), 
                    img.src = item.src, el.is("img") && (item.img = item.img.clone()), (img = item.img[0]).naturalWidth > 0 ? item.hasSize = !0 : img.width || (item.hasSize = !1);
                }
                return mfp._parseMarkup(template, {
                    title: _getTitle(item),
                    img_replaceWith: item.img
                }, item), mfp.resizeImage(), item.hasSize ? (_imgInterval && clearInterval(_imgInterval), 
                item.loadError ? (template.addClass("mfp-loading"), mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src))) : (template.removeClass("mfp-loading"), 
                mfp.updateStatus("ready")), template) : (mfp.updateStatus("loading"), item.loading = !0, 
                item.hasSize || (item.imgHidden = !0, template.addClass("mfp-loading"), mfp.findImageSize(item)), 
                template);
            }
        }
    });
    var hasMozTransform;
    $.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(element) {
                return element.is("img") ? element : element.find("img");
            }
        },
        proto: {
            initZoom: function() {
                var image, zoomSt = mfp.st.zoom, ns = ".zoom";
                if (zoomSt.enabled && mfp.supportsTransition) {
                    var openTimeout, animatedImg, duration = zoomSt.duration, getElToAnimate = function(image) {
                        var newImg = image.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), transition = "all " + zoomSt.duration / 1e3 + "s " + zoomSt.easing, cssObj = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }, t = "transition";
                        return cssObj["-webkit-" + t] = cssObj["-moz-" + t] = cssObj["-o-" + t] = cssObj[t] = transition, 
                        newImg.css(cssObj), newImg;
                    }, showMainContent = function() {
                        mfp.content.css("visibility", "visible");
                    };
                    _mfpOn("BuildControls" + ns, (function() {
                        if (mfp._allowZoom()) {
                            if (clearTimeout(openTimeout), mfp.content.css("visibility", "hidden"), !(image = mfp._getItemToZoom())) return void showMainContent();
                            (animatedImg = getElToAnimate(image)).css(mfp._getOffset()), mfp.wrap.append(animatedImg), 
                            openTimeout = setTimeout((function() {
                                animatedImg.css(mfp._getOffset(!0)), openTimeout = setTimeout((function() {
                                    showMainContent(), setTimeout((function() {
                                        animatedImg.remove(), image = animatedImg = null, _mfpTrigger("ZoomAnimationEnded");
                                    }), 16);
                                }), duration);
                            }), 16);
                        }
                    })), _mfpOn("BeforeClose" + ns, (function() {
                        if (mfp._allowZoom()) {
                            if (clearTimeout(openTimeout), mfp.st.removalDelay = duration, !image) {
                                if (!(image = mfp._getItemToZoom())) return;
                                animatedImg = getElToAnimate(image);
                            }
                            animatedImg.css(mfp._getOffset(!0)), mfp.wrap.append(animatedImg), mfp.content.css("visibility", "hidden"), 
                            setTimeout((function() {
                                animatedImg.css(mfp._getOffset());
                            }), 16);
                        }
                    })), _mfpOn("Close" + ns, (function() {
                        mfp._allowZoom() && (showMainContent(), animatedImg && animatedImg.remove(), image = null);
                    }));
                }
            },
            _allowZoom: function() {
                return "image" === mfp.currItem.type;
            },
            _getItemToZoom: function() {
                return !!mfp.currItem.hasSize && mfp.currItem.img;
            },
            _getOffset: function(isLarge) {
                var el, offset = (el = isLarge ? mfp.currItem.img : mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem)).offset(), paddingTop = parseInt(el.css("padding-top"), 10), paddingBottom = parseInt(el.css("padding-bottom"), 10);
                offset.top -= $(window).scrollTop() - paddingTop;
                var obj = {
                    width: el.width(),
                    height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                };
                return void 0 === hasMozTransform && (hasMozTransform = void 0 !== document.createElement("p").style.MozTransform), 
                hasMozTransform ? obj["-moz-transform"] = obj.transform = "translate(" + offset.left + "px," + offset.top + "px)" : (obj.left = offset.left, 
                obj.top = offset.top), obj;
            }
        }
    });
    var _fixIframeBugs = function(isShowing) {
        if (mfp.currTemplate.iframe) {
            var el = mfp.currTemplate.iframe.find("iframe");
            el.length && (isShowing || (el[0].src = "//about:blank"), mfp.isIE8 && el.css("display", isShowing ? "block" : "none"));
        }
    };
    $.magnificPopup.registerModule("iframe", {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                mfp.types.push("iframe"), _mfpOn("BeforeChange", (function(e, prevType, newType) {
                    prevType !== newType && ("iframe" === prevType ? _fixIframeBugs() : "iframe" === newType && _fixIframeBugs(!0));
                })), _mfpOn("Close.iframe", (function() {
                    _fixIframeBugs();
                }));
            },
            getIframe: function(item, template) {
                var embedSrc = item.src, iframeSt = mfp.st.iframe;
                $.each(iframeSt.patterns, (function() {
                    if (embedSrc.indexOf(this.index) > -1) return this.id && (embedSrc = "string" == typeof this.id ? embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length) : this.id.call(this, embedSrc)), 
                    embedSrc = this.src.replace("%id%", embedSrc), !1;
                }));
                var dataObj = {};
                return iframeSt.srcAction && (dataObj[iframeSt.srcAction] = embedSrc), mfp._parseMarkup(template, dataObj, item), 
                mfp.updateStatus("ready"), template;
            }
        }
    });
    var _getLoopedId = function(index) {
        var numSlides = mfp.items.length;
        return index > numSlides - 1 ? index - numSlides : index < 0 ? numSlides + index : index;
    }, _replaceCurrTotal = function(text, curr, total) {
        return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
    };
    $.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [ 0, 2 ],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var gSt = mfp.st.gallery, ns = ".mfp-gallery";
                if (mfp.direction = !0, !gSt || !gSt.enabled) return !1;
                _wrapClasses += " mfp-gallery", _mfpOn("Open" + ns, (function() {
                    gSt.navigateByImgClick && mfp.wrap.on("click" + ns, ".mfp-img", (function() {
                        if (mfp.items.length > 1) return mfp.next(), !1;
                    })), _document.on("keydown" + ns, (function(e) {
                        37 === e.keyCode ? mfp.prev() : 39 === e.keyCode && mfp.next();
                    }));
                })), _mfpOn("UpdateStatus" + ns, (function(e, data) {
                    data.text && (data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length));
                })), _mfpOn("MarkupParse" + ns, (function(e, element, values, item) {
                    var l = mfp.items.length;
                    values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : "";
                })), _mfpOn("BuildControls" + ns, (function() {
                    if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                        var markup = gSt.arrowMarkup, arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"), arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");
                        arrowLeft.click((function() {
                            mfp.prev();
                        })), arrowRight.click((function() {
                            mfp.next();
                        })), mfp.container.append(arrowLeft.add(arrowRight));
                    }
                })), _mfpOn("Change" + ns, (function() {
                    mfp._preloadTimeout && clearTimeout(mfp._preloadTimeout), mfp._preloadTimeout = setTimeout((function() {
                        mfp.preloadNearbyImages(), mfp._preloadTimeout = null;
                    }), 16);
                })), _mfpOn("Close" + ns, (function() {
                    _document.off(ns), mfp.wrap.off("click" + ns), mfp.arrowRight = mfp.arrowLeft = null;
                }));
            },
            next: function() {
                mfp.direction = !0, mfp.index = _getLoopedId(mfp.index + 1), mfp.updateItemHTML();
            },
            prev: function() {
                mfp.direction = !1, mfp.index = _getLoopedId(mfp.index - 1), mfp.updateItemHTML();
            },
            goTo: function(newIndex) {
                mfp.direction = newIndex >= mfp.index, mfp.index = newIndex, mfp.updateItemHTML();
            },
            preloadNearbyImages: function() {
                var i, p = mfp.st.gallery.preload, preloadBefore = Math.min(p[0], mfp.items.length), preloadAfter = Math.min(p[1], mfp.items.length);
                for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) mfp._preloadItem(mfp.index + i);
                for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) mfp._preloadItem(mfp.index - i);
            },
            _preloadItem: function(index) {
                if (index = _getLoopedId(index), !mfp.items[index].preloaded) {
                    var item = mfp.items[index];
                    item.parsed || (item = mfp.parseEl(index)), _mfpTrigger("LazyLoad", item), "image" === item.type && (item.img = $('<img class="mfp-img" />').on("load.mfploader", (function() {
                        item.hasSize = !0;
                    })).on("error.mfploader", (function() {
                        item.hasSize = !0, item.loadError = !0, _mfpTrigger("LazyLoadError", item);
                    })).attr("src", item.src)), item.preloaded = !0;
                }
            }
        }
    });
    $.magnificPopup.registerModule("retina", {
        options: {
            replaceSrc: function(item) {
                return item.src.replace(/\.\w+$/, (function(m) {
                    return "@2x" + m;
                }));
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var st = mfp.st.retina, ratio = st.ratio;
                    (ratio = isNaN(ratio) ? ratio() : ratio) > 1 && (_mfpOn("ImageHasSize.retina", (function(e, item) {
                        item.img.css({
                            "max-width": item.img[0].naturalWidth / ratio,
                            width: "100%"
                        });
                    })), _mfpOn("ElementParse.retina", (function(e, item) {
                        item.src = st.replaceSrc(item, ratio);
                    })));
                }
            }
        }
    }), _checkInstance();
})), function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : "object" == typeof module && module.exports ? module.exports = function(root, jQuery) {
        return void 0 === jQuery && (jQuery = "undefined" != typeof window ? require("jquery") : require("jquery")(root)), 
        factory(jQuery), jQuery;
    } : factory(jQuery);
}((function($) {
    "use strict";
    var $doc = $(document), $win = $(window), chars = [ "a", "e", "i", "o", "u", "n", "c", "y" ], diacritics = [ /[\xE0-\xE5]/g, /[\xE8-\xEB]/g, /[\xEC-\xEF]/g, /[\xF2-\xF6]/g, /[\xF9-\xFC]/g, /[\xF1]/g, /[\xE7]/g, /[\xFD-\xFF]/g ], Selectric = function(element, opts) {
        this.element = element, this.$element = $(element), this.state = {
            multiple: !!this.$element.attr("multiple"),
            enabled: !1,
            opened: !1,
            currValue: -1,
            selectedIdx: -1,
            highlightedIdx: -1
        }, this.eventTriggers = {
            open: this.open,
            close: this.close,
            destroy: this.destroy,
            refresh: this.refresh,
            init: this.init
        }, this.init(opts);
    };
    Selectric.prototype = {
        utils: {
            isMobile: function() {
                return /android|ip(hone|od|ad)/i.test(navigator.userAgent);
            },
            escapeRegExp: function(str) {
                return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            },
            replaceDiacritics: function(str) {
                for (var k = diacritics.length; k--; ) str = str.toLowerCase().replace(diacritics[k], chars[k]);
                return str;
            },
            format: function(f) {
                var a = arguments;
                return ("" + f).replace(/\{(?:(\d+)|(\w+))\}/g, (function(s, i, p) {
                    return p && a[1] ? a[1][p] : a[i];
                }));
            },
            nextEnabledItem: function(selectItems, selected) {
                for (;selectItems[selected = (selected + 1) % selectItems.length].disabled; ) ;
                return selected;
            },
            previousEnabledItem: function(selectItems, selected) {
                for (;selectItems[selected = (selected > 0 ? selected : selectItems.length) - 1].disabled; ) ;
                return selected;
            },
            toDash: function(str) {
                return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
            },
            triggerCallback: function(fn, scope) {
                var elm = scope.element, func = scope.options["on" + fn], args = [ elm ].concat([].slice.call(arguments).slice(1));
                $.isFunction(func) && func.apply(elm, args), $(elm).trigger("selectric-" + this.toDash(fn), args);
            },
            arrayToClassname: function(arr) {
                var newArr = $.grep(arr, (function(item) {
                    return !!item;
                }));
                return $.trim(newArr.join(" "));
            }
        },
        init: function(opts) {
            var _this = this;
            if (_this.options = $.extend(!0, {}, $.fn.selectric.defaults, _this.options, opts), 
            _this.utils.triggerCallback("BeforeInit", _this), _this.destroy(!0), _this.options.disableOnMobile && _this.utils.isMobile()) _this.disableOnMobile = !0; else {
                _this.classes = _this.getClassNames();
                var input = $("<input/>", {
                    class: _this.classes.input,
                    readonly: _this.utils.isMobile()
                }), items = $("<div/>", {
                    class: _this.classes.items,
                    tabindex: -1
                }), itemsScroll = $("<div/>", {
                    class: _this.classes.scroll
                }), wrapper = $("<div/>", {
                    class: _this.classes.prefix,
                    html: _this.options.arrowButtonMarkup
                }), label = $("<span/>", {
                    class: "label"
                }), outerWrapper = _this.$element.wrap("<div/>").parent().append(wrapper.prepend(label), items, input), hideSelectWrapper = $("<div/>", {
                    class: _this.classes.hideselect
                });
                _this.elements = {
                    input: input,
                    items: items,
                    itemsScroll: itemsScroll,
                    wrapper: wrapper,
                    label: label,
                    outerWrapper: outerWrapper
                }, _this.options.nativeOnMobile && _this.utils.isMobile() && (_this.elements.input = void 0, 
                hideSelectWrapper.addClass(_this.classes.prefix + "-is-native"), _this.$element.on("change", (function() {
                    _this.refresh();
                }))), _this.$element.on(_this.eventTriggers).wrap(hideSelectWrapper), _this.originalTabindex = _this.$element.prop("tabindex"), 
                _this.$element.prop("tabindex", -1), _this.populate(), _this.activate(), _this.utils.triggerCallback("Init", _this);
            }
        },
        activate: function() {
            var hiddenChildren = this.elements.items.closest(":visible").children(":hidden").addClass(this.classes.tempshow), originalWidth = this.$element.width();
            hiddenChildren.removeClass(this.classes.tempshow), this.utils.triggerCallback("BeforeActivate", this), 
            this.elements.outerWrapper.prop("class", this.utils.arrayToClassname([ this.classes.wrapper, this.$element.prop("class").replace(/\S+/g, this.classes.prefix + "-$&"), this.options.responsive ? this.classes.responsive : "" ])), 
            this.options.inheritOriginalWidth && originalWidth > 0 && this.elements.outerWrapper.width(originalWidth), 
            this.unbindEvents(), this.$element.prop("disabled") ? (this.elements.outerWrapper.addClass(this.classes.disabled), 
            this.elements.input && this.elements.input.prop("disabled", !0)) : (this.state.enabled = !0, 
            this.elements.outerWrapper.removeClass(this.classes.disabled), this.$li = this.elements.items.removeAttr("style").find("li"), 
            this.bindEvents()), this.utils.triggerCallback("Activate", this);
        },
        getClassNames: function() {
            var _this = this, customClass = _this.options.customClass, classesObj = {};
            return $.each("Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel".split(" "), (function(i, currClass) {
                var c = customClass.prefix + currClass;
                classesObj[currClass.toLowerCase()] = customClass.camelCase ? c : _this.utils.toDash(c);
            })), classesObj.prefix = customClass.prefix, classesObj;
        },
        setLabel: function() {
            var _this = this, labelBuilder = _this.options.labelBuilder;
            if (_this.state.multiple) {
                var currentValues = $.isArray(_this.state.currValue) ? _this.state.currValue : [ _this.state.currValue ];
                currentValues = 0 === currentValues.length ? [ 0 ] : currentValues;
                var labelMarkup = $.map(currentValues, (function(value) {
                    return $.grep(_this.lookupItems, (function(item) {
                        return item.index === value;
                    }))[0];
                }));
                labelMarkup = $.grep(labelMarkup, (function(item) {
                    return labelMarkup.length > 1 || 0 === labelMarkup.length ? "" !== $.trim(item.value) : item;
                })), labelMarkup = $.map(labelMarkup, (function(item) {
                    return $.isFunction(labelBuilder) ? labelBuilder(item) : _this.utils.format(labelBuilder, item);
                })), _this.options.multiple.maxLabelEntries && (labelMarkup.length >= _this.options.multiple.maxLabelEntries + 1 ? (labelMarkup = labelMarkup.slice(0, _this.options.multiple.maxLabelEntries)).push($.isFunction(labelBuilder) ? labelBuilder({
                    text: "..."
                }) : _this.utils.format(labelBuilder, {
                    text: "..."
                })) : labelMarkup.slice(labelMarkup.length - 1)), _this.elements.label.html(labelMarkup.join(_this.options.multiple.separator));
            } else {
                var currItem = _this.lookupItems[_this.state.currValue];
                _this.elements.label.html($.isFunction(labelBuilder) ? labelBuilder(currItem) : _this.utils.format(labelBuilder, currItem));
            }
        },
        populate: function() {
            var _this = this, $options = _this.$element.children(), $justOptions = _this.$element.find("option"), $selected = $justOptions.filter(":selected"), selectedIndex = $justOptions.index($selected), currIndex = 0, emptyValue = _this.state.multiple ? [] : 0;
            $selected.length > 1 && _this.state.multiple && (selectedIndex = [], $selected.each((function() {
                selectedIndex.push($(this).index());
            }))), _this.state.currValue = ~selectedIndex ? selectedIndex : emptyValue, _this.state.selectedIdx = _this.state.currValue, 
            _this.state.highlightedIdx = _this.state.currValue, _this.items = [], _this.lookupItems = [], 
            $options.length && ($options.each((function(i) {
                var $elm = $(this);
                if ($elm.is("optgroup")) {
                    var optionsGroup = {
                        element: $elm,
                        label: $elm.prop("label"),
                        groupDisabled: $elm.prop("disabled"),
                        items: []
                    };
                    $elm.children().each((function(i) {
                        var $elm = $(this);
                        optionsGroup.items[i] = _this.getItemData(currIndex, $elm, optionsGroup.groupDisabled || $elm.prop("disabled")), 
                        _this.lookupItems[currIndex] = optionsGroup.items[i], currIndex++;
                    })), _this.items[i] = optionsGroup;
                } else _this.items[i] = _this.getItemData(currIndex, $elm, $elm.prop("disabled")), 
                _this.lookupItems[currIndex] = _this.items[i], currIndex++;
            })), _this.setLabel(), _this.elements.items.append(_this.elements.itemsScroll.html(_this.getItemsMarkup(_this.items))));
        },
        getItemData: function(index, $elm, isDisabled) {
            return {
                index: index,
                element: $elm,
                value: $elm.val(),
                className: $elm.prop("class"),
                text: $elm.html(),
                slug: $.trim(this.utils.replaceDiacritics($elm.html())),
                alt: $elm.attr("data-alt"),
                selected: $elm.prop("selected"),
                disabled: isDisabled
            };
        },
        getItemsMarkup: function(items) {
            var _this = this, markup = "<ul>";
            return $.isFunction(_this.options.listBuilder) && _this.options.listBuilder && (items = _this.options.listBuilder(items)), 
            $.each(items, (function(i, elm) {
                void 0 !== elm.label ? (markup += _this.utils.format('<ul class="{1}"><li class="{2}">{3}</li>', _this.utils.arrayToClassname([ _this.classes.group, elm.groupDisabled ? "disabled" : "", elm.element.prop("class") ]), _this.classes.grouplabel, elm.element.prop("label")), 
                $.each(elm.items, (function(i, elm) {
                    markup += _this.getItemMarkup(elm.index, elm);
                })), markup += "</ul>") : markup += _this.getItemMarkup(elm.index, elm);
            })), markup + "</ul>";
        },
        getItemMarkup: function(index, itemData) {
            var itemBuilder = this.options.optionsItemBuilder, filteredItemData = {
                value: itemData.value,
                text: itemData.text,
                slug: itemData.slug,
                index: itemData.index
            };
            return this.utils.format('<li data-index="{1}" class="{2}">{3}</li>', index, this.utils.arrayToClassname([ itemData.className, index === this.items.length - 1 ? "last" : "", itemData.disabled ? "disabled" : "", itemData.selected ? "selected" : "" ]), $.isFunction(itemBuilder) ? this.utils.format(itemBuilder(itemData, this.$element, index), itemData) : this.utils.format(itemBuilder, filteredItemData));
        },
        unbindEvents: function() {
            this.elements.wrapper.add(this.$element).add(this.elements.outerWrapper).add(this.elements.input).off(".sl");
        },
        bindEvents: function() {
            var _this = this;
            _this.elements.outerWrapper.on("mouseenter.sl mouseleave.sl", (function(e) {
                $(this).toggleClass(_this.classes.hover, "mouseenter" === e.type), _this.options.openOnHover && (clearTimeout(_this.closeTimer), 
                "mouseleave" === e.type ? _this.closeTimer = setTimeout($.proxy(_this.close, _this), _this.options.hoverIntentTimeout) : _this.open());
            })), _this.elements.wrapper.on("click.sl", (function(e) {
                _this.state.opened ? _this.close() : _this.open(e);
            })), _this.options.nativeOnMobile && _this.utils.isMobile() || (_this.$element.on("focus.sl", (function() {
                _this.elements.input.focus();
            })), _this.elements.input.prop({
                tabindex: _this.originalTabindex,
                disabled: !1
            }).on("keydown.sl", $.proxy(_this.handleKeys, _this)).on("focusin.sl", (function(e) {
                _this.elements.outerWrapper.addClass(_this.classes.focus), _this.elements.input.one("blur", (function() {
                    _this.elements.input.blur();
                })), _this.options.openOnFocus && !_this.state.opened && _this.open(e);
            })).on("focusout.sl", (function() {
                _this.elements.outerWrapper.removeClass(_this.classes.focus);
            })).on("input propertychange", (function() {
                var val = _this.elements.input.val(), searchRegExp = new RegExp("^" + _this.utils.escapeRegExp(val), "i");
                clearTimeout(_this.resetStr), _this.resetStr = setTimeout((function() {
                    _this.elements.input.val("");
                }), _this.options.keySearchTimeout), val.length && $.each(_this.items, (function(i, elm) {
                    if (!elm.disabled) {
                        if (searchRegExp.test(elm.text) || searchRegExp.test(elm.slug)) return _this.highlight(i), 
                        !1;
                        if (elm.alt) for (var altItems = elm.alt.split("|"), ai = 0; ai < altItems.length && altItems[ai]; ai++) if (searchRegExp.test(altItems[ai].trim())) return _this.highlight(i), 
                        !1;
                    }
                }));
            }))), _this.$li.on({
                mousedown: function(e) {
                    e.preventDefault(), e.stopPropagation();
                },
                click: function() {
                    return _this.select($(this).data("index")), !1;
                }
            });
        },
        handleKeys: function(e) {
            var key = e.which, keys = this.options.keys, isPrevKey = $.inArray(key, keys.previous) > -1, isNextKey = $.inArray(key, keys.next) > -1, isSelectKey = $.inArray(key, keys.select) > -1, isOpenKey = $.inArray(key, keys.open) > -1, idx = this.state.highlightedIdx, isFirstOrLastItem = isPrevKey && 0 === idx || isNextKey && idx + 1 === this.items.length, goToItem = 0;
            if (13 !== key && 32 !== key || e.preventDefault(), isPrevKey || isNextKey) {
                if (!this.options.allowWrap && isFirstOrLastItem) return;
                isPrevKey && (goToItem = this.utils.previousEnabledItem(this.lookupItems, idx)), 
                isNextKey && (goToItem = this.utils.nextEnabledItem(this.lookupItems, idx)), this.highlight(goToItem);
            }
            if (isSelectKey && this.state.opened) return this.select(idx), void (this.state.multiple && this.options.multiple.keepMenuOpen || this.close());
            isOpenKey && !this.state.opened && this.open();
        },
        refresh: function() {
            this.populate(), this.activate(), this.utils.triggerCallback("Refresh", this);
        },
        setOptionsDimensions: function() {
            var hiddenChildren = this.elements.items.closest(":visible").children(":hidden").addClass(this.classes.tempshow), maxHeight = this.options.maxHeight, itemsWidth = this.elements.items.outerWidth(), wrapperWidth = this.elements.wrapper.outerWidth() - (itemsWidth - this.elements.items.width());
            !this.options.expandToItemText || wrapperWidth > itemsWidth ? this.finalWidth = wrapperWidth : (this.elements.items.css("overflow", "scroll"), 
            this.elements.outerWrapper.width(9e4), this.finalWidth = this.elements.items.width(), 
            this.elements.items.css("overflow", ""), this.elements.outerWrapper.width("")), 
            this.elements.items.width(this.finalWidth).height() > maxHeight && this.elements.items.height(maxHeight), 
            hiddenChildren.removeClass(this.classes.tempshow);
        },
        isInViewport: function() {
            if (!0 === this.options.forceRenderAbove) this.elements.outerWrapper.addClass(this.classes.above); else if (!0 === this.options.forceRenderBelow) this.elements.outerWrapper.addClass(this.classes.below); else {
                var scrollTop = $win.scrollTop(), winHeight = $win.height(), uiPosX = this.elements.outerWrapper.offset().top, fitsDown = uiPosX + this.elements.outerWrapper.outerHeight() + this.itemsHeight <= scrollTop + winHeight, fitsAbove = uiPosX - this.itemsHeight > scrollTop, renderAbove = !fitsDown && fitsAbove, renderBelow = !renderAbove;
                this.elements.outerWrapper.toggleClass(this.classes.above, renderAbove), this.elements.outerWrapper.toggleClass(this.classes.below, renderBelow);
            }
        },
        detectItemVisibility: function(index) {
            var $filteredLi = this.$li.filter("[data-index]");
            this.state.multiple && (index = $.isArray(index) && 0 === index.length ? 0 : index, 
            index = $.isArray(index) ? Math.min.apply(Math, index) : index);
            var liHeight = $filteredLi.eq(index).outerHeight(), liTop = $filteredLi[index].offsetTop, itemsScrollTop = this.elements.itemsScroll.scrollTop(), scrollT = liTop + 2 * liHeight;
            this.elements.itemsScroll.scrollTop(scrollT > itemsScrollTop + this.itemsHeight ? scrollT - this.itemsHeight : liTop - liHeight < itemsScrollTop ? liTop - liHeight : itemsScrollTop);
        },
        open: function(e) {
            var _this = this;
            if (_this.options.nativeOnMobile && _this.utils.isMobile()) return !1;
            _this.utils.triggerCallback("BeforeOpen", _this), e && (e.preventDefault(), _this.options.stopPropagation && e.stopPropagation()), 
            _this.state.enabled && (_this.setOptionsDimensions(), $("." + _this.classes.hideselect, "." + _this.classes.open).children().selectric("close"), 
            _this.state.opened = !0, _this.itemsHeight = _this.elements.items.outerHeight(), 
            _this.itemsInnerHeight = _this.elements.items.height(), _this.elements.outerWrapper.addClass(_this.classes.open), 
            _this.elements.input.val(""), e && "focusin" !== e.type && _this.elements.input.focus(), 
            setTimeout((function() {
                $doc.on("click.sl", $.proxy(_this.close, _this)).on("scroll.sl", $.proxy(_this.isInViewport, _this));
            }), 1), _this.isInViewport(), _this.options.preventWindowScroll && $doc.on("mousewheel.sl DOMMouseScroll.sl", "." + _this.classes.scroll, (function(e) {
                var orgEvent = e.originalEvent, scrollTop = $(this).scrollTop(), deltaY = 0;
                "detail" in orgEvent && (deltaY = -1 * orgEvent.detail), "wheelDelta" in orgEvent && (deltaY = orgEvent.wheelDelta), 
                "wheelDeltaY" in orgEvent && (deltaY = orgEvent.wheelDeltaY), "deltaY" in orgEvent && (deltaY = -1 * orgEvent.deltaY), 
                (scrollTop === this.scrollHeight - _this.itemsInnerHeight && deltaY < 0 || 0 === scrollTop && deltaY > 0) && e.preventDefault();
            })), _this.detectItemVisibility(_this.state.selectedIdx), _this.highlight(_this.state.multiple ? -1 : _this.state.selectedIdx), 
            _this.utils.triggerCallback("Open", _this));
        },
        close: function() {
            this.utils.triggerCallback("BeforeClose", this), $doc.off(".sl"), this.elements.outerWrapper.removeClass(this.classes.open), 
            this.state.opened = !1, this.utils.triggerCallback("Close", this);
        },
        change: function() {
            var _this = this;
            _this.utils.triggerCallback("BeforeChange", _this), _this.state.multiple ? ($.each(_this.lookupItems, (function(idx) {
                _this.lookupItems[idx].selected = !1, _this.$element.find("option").prop("selected", !1);
            })), $.each(_this.state.selectedIdx, (function(idx, value) {
                _this.lookupItems[value].selected = !0, _this.$element.find("option").eq(value).prop("selected", !0);
            })), _this.state.currValue = _this.state.selectedIdx, _this.setLabel(), _this.utils.triggerCallback("Change", _this)) : _this.state.currValue !== _this.state.selectedIdx && (_this.$element.prop("selectedIndex", _this.state.currValue = _this.state.selectedIdx).data("value", _this.lookupItems[_this.state.selectedIdx].text), 
            _this.setLabel(), _this.utils.triggerCallback("Change", _this));
        },
        highlight: function(index) {
            var $filteredLi = this.$li.filter("[data-index]").removeClass("highlighted");
            this.utils.triggerCallback("BeforeHighlight", this), void 0 === index || -1 === index || this.lookupItems[index].disabled || ($filteredLi.eq(this.state.highlightedIdx = index).addClass("highlighted"), 
            this.detectItemVisibility(index), this.utils.triggerCallback("Highlight", this));
        },
        select: function(index) {
            var _this = this, $filteredLi = _this.$li.filter("[data-index]");
            if (_this.utils.triggerCallback("BeforeSelect", _this, index), void 0 !== index && -1 !== index && !_this.lookupItems[index].disabled) {
                if (_this.state.multiple) {
                    _this.state.selectedIdx = $.isArray(_this.state.selectedIdx) ? _this.state.selectedIdx : [ _this.state.selectedIdx ];
                    var hasSelectedIndex = $.inArray(index, _this.state.selectedIdx);
                    -1 !== hasSelectedIndex ? _this.state.selectedIdx.splice(hasSelectedIndex, 1) : _this.state.selectedIdx.push(index), 
                    $filteredLi.removeClass("selected").filter((function(index) {
                        return -1 !== $.inArray(index, _this.state.selectedIdx);
                    })).addClass("selected");
                } else $filteredLi.removeClass("selected").eq(_this.state.selectedIdx = index).addClass("selected");
                _this.state.multiple && _this.options.multiple.keepMenuOpen || _this.close(), _this.change(), 
                _this.utils.triggerCallback("Select", _this, index);
            }
        },
        destroy: function(preserveData) {
            this.state && this.state.enabled && (this.elements.items.add(this.elements.wrapper).add(this.elements.input).remove(), 
            preserveData || this.$element.removeData("selectric").removeData("value"), this.$element.prop("tabindex", this.originalTabindex).off(".sl").off(this.eventTriggers).unwrap().unwrap(), 
            this.state.enabled = !1);
        }
    }, $.fn.selectric = function(args) {
        return this.each((function() {
            var data = $.data(this, "selectric");
            data && !data.disableOnMobile ? "string" == typeof args && data[args] ? data[args]() : data.init(args) : $.data(this, "selectric", new Selectric(this, args));
        }));
    }, $.fn.selectric.defaults = {
        onChange: function(elm) {
            $(elm).change();
        },
        maxHeight: 300,
        keySearchTimeout: 500,
        arrowButtonMarkup: '<b class="button">&#x25be;</b>',
        disableOnMobile: !1,
        nativeOnMobile: !0,
        openOnFocus: !0,
        openOnHover: !1,
        hoverIntentTimeout: 500,
        expandToItemText: !1,
        responsive: !1,
        preventWindowScroll: !0,
        inheritOriginalWidth: !1,
        allowWrap: !0,
        forceRenderAbove: !1,
        forceRenderBelow: !1,
        stopPropagation: !0,
        optionsItemBuilder: "{text}",
        labelBuilder: "{text}",
        listBuilder: !1,
        keys: {
            previous: [ 37, 38 ],
            next: [ 39, 40 ],
            select: [ 9, 13, 27 ],
            open: [ 13, 32, 37, 38, 39, 40 ],
            close: [ 9, 27 ]
        },
        customClass: {
            prefix: "selectric",
            camelCase: !1
        },
        multiple: {
            separator: ", ",
            keepMenuOpen: !0,
            maxLabelEntries: !1
        }
    };
}));

/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages = function() {
    "use strict";
    var OFI = "fregante:object-fit-images", propRegex = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g, testImg = "undefined" == typeof Image ? {
        style: {
            "object-position": 1
        }
    } : new Image, supportsObjectFit = "object-fit" in testImg.style, supportsObjectPosition = "object-position" in testImg.style, supportsOFI = "background-size" in testImg.style, supportsCurrentSrc = "string" == typeof testImg.currentSrc, nativeGetAttribute = testImg.getAttribute, nativeSetAttribute = testImg.setAttribute, autoModeEnabled = !1;
    function setPlaceholder(img, width, height) {
        var placeholder = function createPlaceholder(w, h) {
            return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "'%3E%3C/svg%3E";
        }(width || 1, height || 0);
        nativeGetAttribute.call(img, "src") !== placeholder && nativeSetAttribute.call(img, "src", placeholder);
    }
    function onImageReady(img, callback) {
        img.naturalWidth ? callback(img) : setTimeout(onImageReady, 100, img, callback);
    }
    function fixOne(el) {
        var style = function getStyle(el) {
            for (var parsed, style = getComputedStyle(el).fontFamily, props = {}; null !== (parsed = propRegex.exec(style)); ) props[parsed[1]] = parsed[2];
            return props;
        }(el), ofi = el[OFI];
        if (style["object-fit"] = style["object-fit"] || "fill", !ofi.img) {
            if ("fill" === style["object-fit"]) return;
            if (!ofi.skipTest && supportsObjectFit && !style["object-position"]) return;
        }
        if (!ofi.img) {
            ofi.img = new Image(el.width, el.height), ofi.img.srcset = nativeGetAttribute.call(el, "data-ofi-srcset") || el.srcset, 
            ofi.img.src = nativeGetAttribute.call(el, "data-ofi-src") || el.src, nativeSetAttribute.call(el, "data-ofi-src", el.src), 
            el.srcset && nativeSetAttribute.call(el, "data-ofi-srcset", el.srcset), setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height), 
            el.srcset && (el.srcset = "");
            try {
                !function keepSrcUsable(el) {
                    var descriptors = {
                        get: function get(prop) {
                            return el[OFI].img[prop || "src"];
                        },
                        set: function set(value, prop) {
                            return el[OFI].img[prop || "src"] = value, nativeSetAttribute.call(el, "data-ofi-" + prop, value), 
                            fixOne(el), value;
                        }
                    };
                    Object.defineProperty(el, "src", descriptors), Object.defineProperty(el, "currentSrc", {
                        get: function() {
                            return descriptors.get("currentSrc");
                        }
                    }), Object.defineProperty(el, "srcset", {
                        get: function() {
                            return descriptors.get("srcset");
                        },
                        set: function(ss) {
                            return descriptors.set(ss, "srcset");
                        }
                    });
                }(el);
            } catch (err) {
                window.console && console.warn("https://bit.ly/ofi-old-browser");
            }
        }
        !function polyfillCurrentSrc(el) {
            if (el.srcset && !supportsCurrentSrc && window.picturefill) {
                var pf = window.picturefill._;
                el[pf.ns] && el[pf.ns].evaled || pf.fillImg(el, {
                    reselect: !0
                }), el[pf.ns].curSrc || (el[pf.ns].supported = !1, pf.fillImg(el, {
                    reselect: !0
                })), el.currentSrc = el[pf.ns].curSrc || el.src;
            }
        }(ofi.img), el.style.backgroundImage = 'url("' + (ofi.img.currentSrc || ofi.img.src).replace(/"/g, '\\"') + '")', 
        el.style.backgroundPosition = style["object-position"] || "center", el.style.backgroundRepeat = "no-repeat", 
        el.style.backgroundOrigin = "content-box", /scale-down/.test(style["object-fit"]) ? onImageReady(ofi.img, (function() {
            ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height ? el.style.backgroundSize = "contain" : el.style.backgroundSize = "auto";
        })) : el.style.backgroundSize = style["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), 
        onImageReady(ofi.img, (function(img) {
            setPlaceholder(el, img.naturalWidth, img.naturalHeight);
        }));
    }
    function fix(imgs, opts) {
        var startAutoMode = !autoModeEnabled && !imgs;
        if (opts = opts || {}, imgs = imgs || "img", supportsObjectPosition && !opts.skipTest || !supportsOFI) return !1;
        "img" === imgs ? imgs = document.getElementsByTagName("img") : "string" == typeof imgs ? imgs = document.querySelectorAll(imgs) : "length" in imgs || (imgs = [ imgs ]);
        for (var i = 0; i < imgs.length; i++) imgs[i][OFI] = imgs[i][OFI] || {
            skipTest: opts.skipTest
        }, fixOne(imgs[i]);
        startAutoMode && (document.body.addEventListener("load", (function(e) {
            "IMG" === e.target.tagName && fix(e.target, {
                skipTest: opts.skipTest
            });
        }), !0), autoModeEnabled = !0, imgs = "img"), opts.watchMQ && window.addEventListener("resize", fix.bind(null, imgs, {
            skipTest: opts.skipTest
        }));
    }
    return fix.supportsObjectFit = supportsObjectFit, fix.supportsObjectPosition = supportsObjectPosition, 
    function hijackAttributes() {
        function getOfiImageMaybe(el, name) {
            return el[OFI] && el[OFI].img && ("src" === name || "srcset" === name) ? el[OFI].img : el;
        }
        supportsObjectPosition || (HTMLImageElement.prototype.getAttribute = function(name) {
            return nativeGetAttribute.call(getOfiImageMaybe(this, name), name);
        }, HTMLImageElement.prototype.setAttribute = function(name, value) {
            return nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));
        });
    }(), fix;
}();

!function(factory) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : "undefined" != typeof exports ? module.exports = factory(require("jquery")) : factory(jQuery);
}((function($) {
    "use strict";
    var instanceUid, Slick = window.Slick || {};
    instanceUid = 0, (Slick = function Slick(element, settings) {
        var dataSettings, _ = this;
        _.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: $(element),
            appendDots: $(element),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(slider, i) {
                return $('<button type="button" />').text(i + 1);
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, _.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, $.extend(_, _.initials), _.activeBreakpoint = null, _.animType = null, _.animProp = null, 
        _.breakpoints = [], _.breakpointSettings = [], _.cssTransitions = !1, _.focussed = !1, 
        _.interrupted = !1, _.hidden = "hidden", _.paused = !0, _.positionProp = null, _.respondTo = null, 
        _.rowCount = 1, _.shouldClick = !0, _.$slider = $(element), _.$slidesCache = null, 
        _.transformType = null, _.transitionType = null, _.visibilityChange = "visibilitychange", 
        _.windowWidth = 0, _.windowTimer = null, dataSettings = $(element).data("slick") || {}, 
        _.options = $.extend({}, _.defaults, settings, dataSettings), _.currentSlide = _.options.initialSlide, 
        _.originalSettings = _.options, void 0 !== document.mozHidden ? (_.hidden = "mozHidden", 
        _.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (_.hidden = "webkitHidden", 
        _.visibilityChange = "webkitvisibilitychange"), _.autoPlay = $.proxy(_.autoPlay, _), 
        _.autoPlayClear = $.proxy(_.autoPlayClear, _), _.autoPlayIterator = $.proxy(_.autoPlayIterator, _), 
        _.changeSlide = $.proxy(_.changeSlide, _), _.clickHandler = $.proxy(_.clickHandler, _), 
        _.selectHandler = $.proxy(_.selectHandler, _), _.setPosition = $.proxy(_.setPosition, _), 
        _.swipeHandler = $.proxy(_.swipeHandler, _), _.dragHandler = $.proxy(_.dragHandler, _), 
        _.keyHandler = $.proxy(_.keyHandler, _), _.instanceUid = instanceUid++, _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, 
        _.registerBreakpoints(), _.init(!0);
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        });
    }, Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
        var _ = this;
        if ("boolean" == typeof index) addBefore = index, index = null; else if (index < 0 || index >= _.slideCount) return !1;
        _.unload(), "number" == typeof index ? 0 === index && 0 === _.$slides.length ? $(markup).appendTo(_.$slideTrack) : addBefore ? $(markup).insertBefore(_.$slides.eq(index)) : $(markup).insertAfter(_.$slides.eq(index)) : !0 === addBefore ? $(markup).prependTo(_.$slideTrack) : $(markup).appendTo(_.$slideTrack), 
        _.$slides = _.$slideTrack.children(this.options.slide), _.$slideTrack.children(this.options.slide).detach(), 
        _.$slideTrack.append(_.$slides), _.$slides.each((function(index, element) {
            $(element).attr("data-slick-index", index);
        })), _.$slidesCache = _.$slides, _.reinit();
    }, Slick.prototype.animateHeight = function() {
        var _ = this;
        if (1 === _.options.slidesToShow && !0 === _.options.adaptiveHeight && !1 === _.options.vertical) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(!0);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    }, Slick.prototype.animateSlide = function(targetLeft, callback) {
        var animProps = {}, _ = this;
        _.animateHeight(), !0 === _.options.rtl && !1 === _.options.vertical && (targetLeft = -targetLeft), 
        !1 === _.transformsEnabled ? !1 === _.options.vertical ? _.$slideTrack.animate({
            left: targetLeft
        }, _.options.speed, _.options.easing, callback) : _.$slideTrack.animate({
            top: targetLeft
        }, _.options.speed, _.options.easing, callback) : !1 === _.cssTransitions ? (!0 === _.options.rtl && (_.currentLeft = -_.currentLeft), 
        $({
            animStart: _.currentLeft
        }).animate({
            animStart: targetLeft
        }, {
            duration: _.options.speed,
            easing: _.options.easing,
            step: function(now) {
                now = Math.ceil(now), !1 === _.options.vertical ? (animProps[_.animType] = "translate(" + now + "px, 0px)", 
                _.$slideTrack.css(animProps)) : (animProps[_.animType] = "translate(0px," + now + "px)", 
                _.$slideTrack.css(animProps));
            },
            complete: function() {
                callback && callback.call();
            }
        })) : (_.applyTransition(), targetLeft = Math.ceil(targetLeft), !1 === _.options.vertical ? animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)" : animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)", 
        _.$slideTrack.css(animProps), callback && setTimeout((function() {
            _.disableTransition(), callback.call();
        }), _.options.speed));
    }, Slick.prototype.getNavTarget = function() {
        var asNavFor = this.options.asNavFor;
        return asNavFor && null !== asNavFor && (asNavFor = $(asNavFor).not(this.$slider)), 
        asNavFor;
    }, Slick.prototype.asNavFor = function(index) {
        var asNavFor = this.getNavTarget();
        null !== asNavFor && "object" == typeof asNavFor && asNavFor.each((function() {
            var target = $(this).slick("getSlick");
            target.unslicked || target.slideHandler(index, !0);
        }));
    }, Slick.prototype.applyTransition = function(slide) {
        var _ = this, transition = {};
        !1 === _.options.fade ? transition[_.transitionType] = _.transformType + " " + _.options.speed + "ms " + _.options.cssEase : transition[_.transitionType] = "opacity " + _.options.speed + "ms " + _.options.cssEase, 
        !1 === _.options.fade ? _.$slideTrack.css(transition) : _.$slides.eq(slide).css(transition);
    }, Slick.prototype.autoPlay = function() {
        var _ = this;
        _.autoPlayClear(), _.slideCount > _.options.slidesToShow && (_.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed));
    }, Slick.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }, Slick.prototype.autoPlayIterator = function() {
        var _ = this, slideTo = _.currentSlide + _.options.slidesToScroll;
        _.paused || _.interrupted || _.focussed || (!1 === _.options.infinite && (1 === _.direction && _.currentSlide + 1 === _.slideCount - 1 ? _.direction = 0 : 0 === _.direction && (slideTo = _.currentSlide - _.options.slidesToScroll, 
        _.currentSlide - 1 == 0 && (_.direction = 1))), _.slideHandler(slideTo));
    }, Slick.prototype.buildArrows = function() {
        var _ = this;
        !0 === _.options.arrows && (_.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow"), 
        _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow"), _.slideCount > _.options.slidesToShow ? (_.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), 
        _.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), _.htmlExpr.test(_.options.prevArrow) && _.$prevArrow.prependTo(_.options.appendArrows), 
        _.htmlExpr.test(_.options.nextArrow) && _.$nextArrow.appendTo(_.options.appendArrows), 
        !0 !== _.options.infinite && _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : _.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }));
    }, Slick.prototype.buildDots = function() {
        var i, dot, _ = this;
        if (!0 === _.options.dots && _.slideCount > _.options.slidesToShow) {
            for (_.$slider.addClass("slick-dotted"), dot = $("<ul />").addClass(_.options.dotsClass), 
            i = 0; i <= _.getDotCount(); i += 1) dot.append($("<li />").append(_.options.customPaging.call(this, _, i)));
            _.$dots = dot.appendTo(_.options.appendDots), _.$dots.find("li").first().addClass("slick-active");
        }
    }, Slick.prototype.buildOut = function() {
        var _ = this;
        _.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), 
        _.slideCount = _.$slides.length, _.$slides.each((function(index, element) {
            $(element).attr("data-slick-index", index).data("originalStyling", $(element).attr("style") || "");
        })), _.$slider.addClass("slick-slider"), _.$slideTrack = 0 === _.slideCount ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent(), 
        _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent(), _.$slideTrack.css("opacity", 0), 
        !0 !== _.options.centerMode && !0 !== _.options.swipeToSlide || (_.options.slidesToScroll = 1), 
        $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading"), _.setupInfinite(), 
        _.buildArrows(), _.buildDots(), _.updateDots(), _.setSlideClasses("number" == typeof _.currentSlide ? _.currentSlide : 0), 
        !0 === _.options.draggable && _.$list.addClass("draggable");
    }, Slick.prototype.buildRows = function() {
        var a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection, _ = this;
        if (newSlides = document.createDocumentFragment(), originalSlides = _.$slider.children(), 
        _.options.rows > 0) {
            for (slidesPerSection = _.options.slidesPerRow * _.options.rows, numOfSlides = Math.ceil(originalSlides.length / slidesPerSection), 
            a = 0; a < numOfSlides; a++) {
                var slide = document.createElement("div");
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement("div");
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                        originalSlides.get(target) && row.appendChild(originalSlides.get(target));
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }
            _.$slider.empty().append(newSlides), _.$slider.children().children().children().css({
                width: 100 / _.options.slidesPerRow + "%",
                display: "inline-block"
            });
        }
    }, Slick.prototype.checkResponsive = function(initial, forceUpdate) {
        var breakpoint, targetBreakpoint, respondToWidth, _ = this, triggerBreakpoint = !1, sliderWidth = _.$slider.width(), windowWidth = window.innerWidth || $(window).width();
        if ("window" === _.respondTo ? respondToWidth = windowWidth : "slider" === _.respondTo ? respondToWidth = sliderWidth : "min" === _.respondTo && (respondToWidth = Math.min(windowWidth, sliderWidth)), 
        _.options.responsive && _.options.responsive.length && null !== _.options.responsive) {
            for (breakpoint in targetBreakpoint = null, _.breakpoints) _.breakpoints.hasOwnProperty(breakpoint) && (!1 === _.originalSettings.mobileFirst ? respondToWidth < _.breakpoints[breakpoint] && (targetBreakpoint = _.breakpoints[breakpoint]) : respondToWidth > _.breakpoints[breakpoint] && (targetBreakpoint = _.breakpoints[breakpoint]));
            null !== targetBreakpoint ? null !== _.activeBreakpoint ? (targetBreakpoint !== _.activeBreakpoint || forceUpdate) && (_.activeBreakpoint = targetBreakpoint, 
            "unslick" === _.breakpointSettings[targetBreakpoint] ? _.unslick(targetBreakpoint) : (_.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]), 
            !0 === initial && (_.currentSlide = _.options.initialSlide), _.refresh(initial)), 
            triggerBreakpoint = targetBreakpoint) : (_.activeBreakpoint = targetBreakpoint, 
            "unslick" === _.breakpointSettings[targetBreakpoint] ? _.unslick(targetBreakpoint) : (_.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]), 
            !0 === initial && (_.currentSlide = _.options.initialSlide), _.refresh(initial)), 
            triggerBreakpoint = targetBreakpoint) : null !== _.activeBreakpoint && (_.activeBreakpoint = null, 
            _.options = _.originalSettings, !0 === initial && (_.currentSlide = _.options.initialSlide), 
            _.refresh(initial), triggerBreakpoint = targetBreakpoint), initial || !1 === triggerBreakpoint || _.$slider.trigger("breakpoint", [ _, triggerBreakpoint ]);
        }
    }, Slick.prototype.changeSlide = function(event, dontAnimate) {
        var indexOffset, slideOffset, _ = this, $target = $(event.currentTarget);
        switch ($target.is("a") && event.preventDefault(), $target.is("li") || ($target = $target.closest("li")), 
        indexOffset = _.slideCount % _.options.slidesToScroll != 0 ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll, 
        event.data.message) {
          case "previous":
            slideOffset = 0 === indexOffset ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset, 
            _.slideCount > _.options.slidesToShow && _.slideHandler(_.currentSlide - slideOffset, !1, dontAnimate);
            break;

          case "next":
            slideOffset = 0 === indexOffset ? _.options.slidesToScroll : indexOffset, _.slideCount > _.options.slidesToShow && _.slideHandler(_.currentSlide + slideOffset, !1, dontAnimate);
            break;

          case "index":
            var index = 0 === event.data.index ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
            _.slideHandler(_.checkNavigable(index), !1, dontAnimate), $target.children().trigger("focus");
            break;

          default:
            return;
        }
    }, Slick.prototype.checkNavigable = function(index) {
        var navigables, prevNavigable;
        if (prevNavigable = 0, index > (navigables = this.getNavigableIndexes())[navigables.length - 1]) index = navigables[navigables.length - 1]; else for (var n in navigables) {
            if (index < navigables[n]) {
                index = prevNavigable;
                break;
            }
            prevNavigable = navigables[n];
        }
        return index;
    }, Slick.prototype.cleanUpEvents = function() {
        var _ = this;
        _.options.dots && null !== _.$dots && ($("li", _.$dots).off("click.slick", _.changeSlide).off("mouseenter.slick", $.proxy(_.interrupt, _, !0)).off("mouseleave.slick", $.proxy(_.interrupt, _, !1)), 
        !0 === _.options.accessibility && _.$dots.off("keydown.slick", _.keyHandler)), _.$slider.off("focus.slick blur.slick"), 
        !0 === _.options.arrows && _.slideCount > _.options.slidesToShow && (_.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide), 
        _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide), !0 === _.options.accessibility && (_.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler), 
        _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler))), _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler), 
        _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler), _.$list.off("touchend.slick mouseup.slick", _.swipeHandler), 
        _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler), _.$list.off("click.slick", _.clickHandler), 
        $(document).off(_.visibilityChange, _.visibility), _.cleanUpSlideEvents(), !0 === _.options.accessibility && _.$list.off("keydown.slick", _.keyHandler), 
        !0 === _.options.focusOnSelect && $(_.$slideTrack).children().off("click.slick", _.selectHandler), 
        $(window).off("orientationchange.slick.slick-" + _.instanceUid, _.orientationChange), 
        $(window).off("resize.slick.slick-" + _.instanceUid, _.resize), $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault), 
        $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition);
    }, Slick.prototype.cleanUpSlideEvents = function() {
        var _ = this;
        _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, !0)), _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, !1));
    }, Slick.prototype.cleanUpRows = function() {
        var originalSlides, _ = this;
        _.options.rows > 0 && ((originalSlides = _.$slides.children().children()).removeAttr("style"), 
        _.$slider.empty().append(originalSlides));
    }, Slick.prototype.clickHandler = function(event) {
        !1 === this.shouldClick && (event.stopImmediatePropagation(), event.stopPropagation(), 
        event.preventDefault());
    }, Slick.prototype.destroy = function(refresh) {
        var _ = this;
        _.autoPlayClear(), _.touchObject = {}, _.cleanUpEvents(), $(".slick-cloned", _.$slider).detach(), 
        _.$dots && _.$dots.remove(), _.$prevArrow && _.$prevArrow.length && (_.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        _.htmlExpr.test(_.options.prevArrow) && _.$prevArrow.remove()), _.$nextArrow && _.$nextArrow.length && (_.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        _.htmlExpr.test(_.options.nextArrow) && _.$nextArrow.remove()), _.$slides && (_.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
            $(this).attr("style", $(this).data("originalStyling"));
        })), _.$slideTrack.children(this.options.slide).detach(), _.$slideTrack.detach(), 
        _.$list.detach(), _.$slider.append(_.$slides)), _.cleanUpRows(), _.$slider.removeClass("slick-slider"), 
        _.$slider.removeClass("slick-initialized"), _.$slider.removeClass("slick-dotted"), 
        _.unslicked = !0, refresh || _.$slider.trigger("destroy", [ _ ]);
    }, Slick.prototype.disableTransition = function(slide) {
        var _ = this, transition = {};
        transition[_.transitionType] = "", !1 === _.options.fade ? _.$slideTrack.css(transition) : _.$slides.eq(slide).css(transition);
    }, Slick.prototype.fadeSlide = function(slideIndex, callback) {
        var _ = this;
        !1 === _.cssTransitions ? (_.$slides.eq(slideIndex).css({
            zIndex: _.options.zIndex
        }), _.$slides.eq(slideIndex).animate({
            opacity: 1
        }, _.options.speed, _.options.easing, callback)) : (_.applyTransition(slideIndex), 
        _.$slides.eq(slideIndex).css({
            opacity: 1,
            zIndex: _.options.zIndex
        }), callback && setTimeout((function() {
            _.disableTransition(slideIndex), callback.call();
        }), _.options.speed));
    }, Slick.prototype.fadeSlideOut = function(slideIndex) {
        var _ = this;
        !1 === _.cssTransitions ? _.$slides.eq(slideIndex).animate({
            opacity: 0,
            zIndex: _.options.zIndex - 2
        }, _.options.speed, _.options.easing) : (_.applyTransition(slideIndex), _.$slides.eq(slideIndex).css({
            opacity: 0,
            zIndex: _.options.zIndex - 2
        }));
    }, Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
        var _ = this;
        null !== filter && (_.$slidesCache = _.$slides, _.unload(), _.$slideTrack.children(this.options.slide).detach(), 
        _.$slidesCache.filter(filter).appendTo(_.$slideTrack), _.reinit());
    }, Slick.prototype.focusHandler = function() {
        var _ = this;
        _.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(event) {
            event.stopImmediatePropagation();
            var $sf = $(this);
            setTimeout((function() {
                _.options.pauseOnFocus && (_.focussed = $sf.is(":focus"), _.autoPlay());
            }), 0);
        }));
    }, Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
    }, Slick.prototype.getDotCount = function() {
        var _ = this, breakPoint = 0, counter = 0, pagerQty = 0;
        if (!0 === _.options.infinite) if (_.slideCount <= _.options.slidesToShow) ++pagerQty; else for (;breakPoint < _.slideCount; ) ++pagerQty, 
        breakPoint = counter + _.options.slidesToScroll, counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow; else if (!0 === _.options.centerMode) pagerQty = _.slideCount; else if (_.options.asNavFor) for (;breakPoint < _.slideCount; ) ++pagerQty, 
        breakPoint = counter + _.options.slidesToScroll, counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow; else pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        return pagerQty - 1;
    }, Slick.prototype.getLeft = function(slideIndex) {
        var targetLeft, verticalHeight, targetSlide, coef, _ = this, verticalOffset = 0;
        return _.slideOffset = 0, verticalHeight = _.$slides.first().outerHeight(!0), !0 === _.options.infinite ? (_.slideCount > _.options.slidesToShow && (_.slideOffset = _.slideWidth * _.options.slidesToShow * -1, 
        coef = -1, !0 === _.options.vertical && !0 === _.options.centerMode && (2 === _.options.slidesToShow ? coef = -1.5 : 1 === _.options.slidesToShow && (coef = -2)), 
        verticalOffset = verticalHeight * _.options.slidesToShow * coef), _.slideCount % _.options.slidesToScroll != 0 && slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow && (slideIndex > _.slideCount ? (_.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1, 
        verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1) : (_.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1, 
        verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1))) : slideIndex + _.options.slidesToShow > _.slideCount && (_.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth, 
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight), 
        _.slideCount <= _.options.slidesToShow && (_.slideOffset = 0, verticalOffset = 0), 
        !0 === _.options.centerMode && _.slideCount <= _.options.slidesToShow ? _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2 : !0 === _.options.centerMode && !0 === _.options.infinite ? _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth : !0 === _.options.centerMode && (_.slideOffset = 0, 
        _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2)), targetLeft = !1 === _.options.vertical ? slideIndex * _.slideWidth * -1 + _.slideOffset : slideIndex * verticalHeight * -1 + verticalOffset, 
        !0 === _.options.variableWidth && (targetSlide = _.slideCount <= _.options.slidesToShow || !1 === _.options.infinite ? _.$slideTrack.children(".slick-slide").eq(slideIndex) : _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow), 
        targetLeft = !0 === _.options.rtl ? targetSlide[0] ? -1 * (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) : 0 : targetSlide[0] ? -1 * targetSlide[0].offsetLeft : 0, 
        !0 === _.options.centerMode && (targetSlide = _.slideCount <= _.options.slidesToShow || !1 === _.options.infinite ? _.$slideTrack.children(".slick-slide").eq(slideIndex) : _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow + 1), 
        targetLeft = !0 === _.options.rtl ? targetSlide[0] ? -1 * (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) : 0 : targetSlide[0] ? -1 * targetSlide[0].offsetLeft : 0, 
        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2)), targetLeft;
    }, Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
        return this.options[option];
    }, Slick.prototype.getNavigableIndexes = function() {
        var max, _ = this, breakPoint = 0, counter = 0, indexes = [];
        for (!1 === _.options.infinite ? max = _.slideCount : (breakPoint = -1 * _.options.slidesToScroll, 
        counter = -1 * _.options.slidesToScroll, max = 2 * _.slideCount); breakPoint < max; ) indexes.push(breakPoint), 
        breakPoint = counter + _.options.slidesToScroll, counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        return indexes;
    }, Slick.prototype.getSlick = function() {
        return this;
    }, Slick.prototype.getSlideCount = function() {
        var swipedSlide, centerOffset, _ = this;
        return centerOffset = !0 === _.options.centerMode ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0, 
        !0 === _.options.swipeToSlide ? (_.$slideTrack.find(".slick-slide").each((function(index, slide) {
            if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > -1 * _.swipeLeft) return swipedSlide = slide, 
            !1;
        })), Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1) : _.options.slidesToScroll;
    }, Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(slide)
            }
        }, dontAnimate);
    }, Slick.prototype.init = function(creation) {
        var _ = this;
        $(_.$slider).hasClass("slick-initialized") || ($(_.$slider).addClass("slick-initialized"), 
        _.buildRows(), _.buildOut(), _.setProps(), _.startLoad(), _.loadSlider(), _.initializeEvents(), 
        _.updateArrows(), _.updateDots(), _.checkResponsive(!0), _.focusHandler()), creation && _.$slider.trigger("init", [ _ ]), 
        !0 === _.options.accessibility && _.initADA(), _.options.autoplay && (_.paused = !1, 
        _.autoPlay());
    }, Slick.prototype.initADA = function() {
        var _ = this, numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow), tabControlIndexes = _.getNavigableIndexes().filter((function(val) {
            return val >= 0 && val < _.slideCount;
        }));
        _.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== _.$dots && (_.$slides.not(_.$slideTrack.find(".slick-cloned")).each((function(i) {
            var slideControlIndex = tabControlIndexes.indexOf(i);
            if ($(this).attr({
                role: "tabpanel",
                id: "slick-slide" + _.instanceUid + i,
                tabindex: -1
            }), -1 !== slideControlIndex) {
                var ariaButtonControl = "slick-slide-control" + _.instanceUid + slideControlIndex;
                $("#" + ariaButtonControl).length && $(this).attr({
                    "aria-describedby": ariaButtonControl
                });
            }
        })), _.$dots.attr("role", "tablist").find("li").each((function(i) {
            var mappedSlideIndex = tabControlIndexes[i];
            $(this).attr({
                role: "presentation"
            }), $(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + _.instanceUid + i,
                "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex,
                "aria-label": i + 1 + " of " + numDotGroups,
                "aria-selected": null,
                tabindex: "-1"
            });
        })).eq(_.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) _.options.focusOnChange ? _.$slides.eq(i).attr({
            tabindex: "0"
        }) : _.$slides.eq(i).removeAttr("tabindex");
        _.activateADA();
    }, Slick.prototype.initArrowEvents = function() {
        var _ = this;
        !0 === _.options.arrows && _.slideCount > _.options.slidesToShow && (_.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, _.changeSlide), _.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, _.changeSlide), !0 === _.options.accessibility && (_.$prevArrow.on("keydown.slick", _.keyHandler), 
        _.$nextArrow.on("keydown.slick", _.keyHandler)));
    }, Slick.prototype.initDotEvents = function() {
        var _ = this;
        !0 === _.options.dots && _.slideCount > _.options.slidesToShow && ($("li", _.$dots).on("click.slick", {
            message: "index"
        }, _.changeSlide), !0 === _.options.accessibility && _.$dots.on("keydown.slick", _.keyHandler)), 
        !0 === _.options.dots && !0 === _.options.pauseOnDotsHover && _.slideCount > _.options.slidesToShow && $("li", _.$dots).on("mouseenter.slick", $.proxy(_.interrupt, _, !0)).on("mouseleave.slick", $.proxy(_.interrupt, _, !1));
    }, Slick.prototype.initSlideEvents = function() {
        var _ = this;
        _.options.pauseOnHover && (_.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, !0)), 
        _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, !1)));
    }, Slick.prototype.initializeEvents = function() {
        var _ = this;
        _.initArrowEvents(), _.initDotEvents(), _.initSlideEvents(), _.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, _.swipeHandler), _.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, _.swipeHandler), _.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, _.swipeHandler), _.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, _.swipeHandler), _.$list.on("click.slick", _.clickHandler), $(document).on(_.visibilityChange, $.proxy(_.visibility, _)), 
        !0 === _.options.accessibility && _.$list.on("keydown.slick", _.keyHandler), !0 === _.options.focusOnSelect && $(_.$slideTrack).children().on("click.slick", _.selectHandler), 
        $(window).on("orientationchange.slick.slick-" + _.instanceUid, $.proxy(_.orientationChange, _)), 
        $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _)), $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault), 
        $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition), $(_.setPosition);
    }, Slick.prototype.initUI = function() {
        var _ = this;
        !0 === _.options.arrows && _.slideCount > _.options.slidesToShow && (_.$prevArrow.show(), 
        _.$nextArrow.show()), !0 === _.options.dots && _.slideCount > _.options.slidesToShow && _.$dots.show();
    }, Slick.prototype.keyHandler = function(event) {
        var _ = this;
        event.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === event.keyCode && !0 === _.options.accessibility ? _.changeSlide({
            data: {
                message: !0 === _.options.rtl ? "next" : "previous"
            }
        }) : 39 === event.keyCode && !0 === _.options.accessibility && _.changeSlide({
            data: {
                message: !0 === _.options.rtl ? "previous" : "next"
            }
        }));
    }, Slick.prototype.lazyLoad = function() {
        var loadRange, rangeStart, rangeEnd, _ = this;
        function loadImages(imagesScope) {
            $("img[data-lazy]", imagesScope).each((function() {
                var image = $(this), imageSource = $(this).attr("data-lazy"), imageSrcSet = $(this).attr("data-srcset"), imageSizes = $(this).attr("data-sizes") || _.$slider.attr("data-sizes"), imageToLoad = document.createElement("img");
                imageToLoad.onload = function() {
                    image.animate({
                        opacity: 0
                    }, 100, (function() {
                        imageSrcSet && (image.attr("srcset", imageSrcSet), imageSizes && image.attr("sizes", imageSizes)), 
                        image.attr("src", imageSource).animate({
                            opacity: 1
                        }, 200, (function() {
                            image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                        })), _.$slider.trigger("lazyLoaded", [ _, image, imageSource ]);
                    }));
                }, imageToLoad.onerror = function() {
                    image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                    _.$slider.trigger("lazyLoadError", [ _, image, imageSource ]);
                }, imageToLoad.src = imageSource;
            }));
        }
        if (!0 === _.options.centerMode ? !0 === _.options.infinite ? rangeEnd = (rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1)) + _.options.slidesToShow + 2 : (rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1)), 
        rangeEnd = _.options.slidesToShow / 2 + 1 + 2 + _.currentSlide) : (rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide, 
        rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow), !0 === _.options.fade && (rangeStart > 0 && rangeStart--, 
        rangeEnd <= _.slideCount && rangeEnd++)), loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd), 
        "anticipated" === _.options.lazyLoad) for (var prevSlide = rangeStart - 1, nextSlide = rangeEnd, $slides = _.$slider.find(".slick-slide"), i = 0; i < _.options.slidesToScroll; i++) prevSlide < 0 && (prevSlide = _.slideCount - 1), 
        loadRange = (loadRange = loadRange.add($slides.eq(prevSlide))).add($slides.eq(nextSlide)), 
        prevSlide--, nextSlide++;
        loadImages(loadRange), _.slideCount <= _.options.slidesToShow ? loadImages(_.$slider.find(".slick-slide")) : _.currentSlide >= _.slideCount - _.options.slidesToShow ? loadImages(_.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow)) : 0 === _.currentSlide && loadImages(_.$slider.find(".slick-cloned").slice(-1 * _.options.slidesToShow));
    }, Slick.prototype.loadSlider = function() {
        var _ = this;
        _.setPosition(), _.$slideTrack.css({
            opacity: 1
        }), _.$slider.removeClass("slick-loading"), _.initUI(), "progressive" === _.options.lazyLoad && _.progressiveLazyLoad();
    }, Slick.prototype.next = Slick.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        });
    }, Slick.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition();
    }, Slick.prototype.pause = Slick.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0;
    }, Slick.prototype.play = Slick.prototype.slickPlay = function() {
        var _ = this;
        _.autoPlay(), _.options.autoplay = !0, _.paused = !1, _.focussed = !1, _.interrupted = !1;
    }, Slick.prototype.postSlide = function(index) {
        var _ = this;
        _.unslicked || (_.$slider.trigger("afterChange", [ _, index ]), _.animating = !1, 
        _.slideCount > _.options.slidesToShow && _.setPosition(), _.swipeLeft = null, _.options.autoplay && _.autoPlay(), 
        !0 === _.options.accessibility && (_.initADA(), _.options.focusOnChange && $(_.$slides.get(_.currentSlide)).attr("tabindex", 0).focus()));
    }, Slick.prototype.prev = Slick.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        });
    }, Slick.prototype.preventDefault = function(event) {
        event.preventDefault();
    }, Slick.prototype.progressiveLazyLoad = function(tryCount) {
        tryCount = tryCount || 1;
        var image, imageSource, imageSrcSet, imageSizes, imageToLoad, _ = this, $imgsToLoad = $("img[data-lazy]", _.$slider);
        $imgsToLoad.length ? (image = $imgsToLoad.first(), imageSource = image.attr("data-lazy"), 
        imageSrcSet = image.attr("data-srcset"), imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes"), 
        (imageToLoad = document.createElement("img")).onload = function() {
            imageSrcSet && (image.attr("srcset", imageSrcSet), imageSizes && image.attr("sizes", imageSizes)), 
            image.attr("src", imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), 
            !0 === _.options.adaptiveHeight && _.setPosition(), _.$slider.trigger("lazyLoaded", [ _, image, imageSource ]), 
            _.progressiveLazyLoad();
        }, imageToLoad.onerror = function() {
            tryCount < 3 ? setTimeout((function() {
                _.progressiveLazyLoad(tryCount + 1);
            }), 500) : (image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
            _.$slider.trigger("lazyLoadError", [ _, image, imageSource ]), _.progressiveLazyLoad());
        }, imageToLoad.src = imageSource) : _.$slider.trigger("allImagesLoaded", [ _ ]);
    }, Slick.prototype.refresh = function(initializing) {
        var currentSlide, lastVisibleIndex, _ = this;
        lastVisibleIndex = _.slideCount - _.options.slidesToShow, !_.options.infinite && _.currentSlide > lastVisibleIndex && (_.currentSlide = lastVisibleIndex), 
        _.slideCount <= _.options.slidesToShow && (_.currentSlide = 0), currentSlide = _.currentSlide, 
        _.destroy(!0), $.extend(_, _.initials, {
            currentSlide: currentSlide
        }), _.init(), initializing || _.changeSlide({
            data: {
                message: "index",
                index: currentSlide
            }
        }, !1);
    }, Slick.prototype.registerBreakpoints = function() {
        var breakpoint, currentBreakpoint, l, _ = this, responsiveSettings = _.options.responsive || null;
        if ("array" === $.type(responsiveSettings) && responsiveSettings.length) {
            for (breakpoint in _.respondTo = _.options.respondTo || "window", responsiveSettings) if (l = _.breakpoints.length - 1, 
            responsiveSettings.hasOwnProperty(breakpoint)) {
                for (currentBreakpoint = responsiveSettings[breakpoint].breakpoint; l >= 0; ) _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint && _.breakpoints.splice(l, 1), 
                l--;
                _.breakpoints.push(currentBreakpoint), _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
            }
            _.breakpoints.sort((function(a, b) {
                return _.options.mobileFirst ? a - b : b - a;
            }));
        }
    }, Slick.prototype.reinit = function() {
        var _ = this;
        _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide"), _.slideCount = _.$slides.length, 
        _.currentSlide >= _.slideCount && 0 !== _.currentSlide && (_.currentSlide = _.currentSlide - _.options.slidesToScroll), 
        _.slideCount <= _.options.slidesToShow && (_.currentSlide = 0), _.registerBreakpoints(), 
        _.setProps(), _.setupInfinite(), _.buildArrows(), _.updateArrows(), _.initArrowEvents(), 
        _.buildDots(), _.updateDots(), _.initDotEvents(), _.cleanUpSlideEvents(), _.initSlideEvents(), 
        _.checkResponsive(!1, !0), !0 === _.options.focusOnSelect && $(_.$slideTrack).children().on("click.slick", _.selectHandler), 
        _.setSlideClasses("number" == typeof _.currentSlide ? _.currentSlide : 0), _.setPosition(), 
        _.focusHandler(), _.paused = !_.options.autoplay, _.autoPlay(), _.$slider.trigger("reInit", [ _ ]);
    }, Slick.prototype.resize = function() {
        var _ = this;
        $(window).width() !== _.windowWidth && (clearTimeout(_.windowDelay), _.windowDelay = window.setTimeout((function() {
            _.windowWidth = $(window).width(), _.checkResponsive(), _.unslicked || _.setPosition();
        }), 50));
    }, Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
        var _ = this;
        if (index = "boolean" == typeof index ? !0 === (removeBefore = index) ? 0 : _.slideCount - 1 : !0 === removeBefore ? --index : index, 
        _.slideCount < 1 || index < 0 || index > _.slideCount - 1) return !1;
        _.unload(), !0 === removeAll ? _.$slideTrack.children().remove() : _.$slideTrack.children(this.options.slide).eq(index).remove(), 
        _.$slides = _.$slideTrack.children(this.options.slide), _.$slideTrack.children(this.options.slide).detach(), 
        _.$slideTrack.append(_.$slides), _.$slidesCache = _.$slides, _.reinit();
    }, Slick.prototype.setCSS = function(position) {
        var x, y, _ = this, positionProps = {};
        !0 === _.options.rtl && (position = -position), x = "left" == _.positionProp ? Math.ceil(position) + "px" : "0px", 
        y = "top" == _.positionProp ? Math.ceil(position) + "px" : "0px", positionProps[_.positionProp] = position, 
        !1 === _.transformsEnabled ? _.$slideTrack.css(positionProps) : (positionProps = {}, 
        !1 === _.cssTransitions ? (positionProps[_.animType] = "translate(" + x + ", " + y + ")", 
        _.$slideTrack.css(positionProps)) : (positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)", 
        _.$slideTrack.css(positionProps)));
    }, Slick.prototype.setDimensions = function() {
        var _ = this;
        !1 === _.options.vertical ? !0 === _.options.centerMode && _.$list.css({
            padding: "0px " + _.options.centerPadding
        }) : (_.$list.height(_.$slides.first().outerHeight(!0) * _.options.slidesToShow), 
        !0 === _.options.centerMode && _.$list.css({
            padding: _.options.centerPadding + " 0px"
        })), _.listWidth = _.$list.width(), _.listHeight = _.$list.height(), !1 === _.options.vertical && !1 === _.options.variableWidth ? (_.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow), 
        _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length))) : !0 === _.options.variableWidth ? _.$slideTrack.width(5e3 * _.slideCount) : (_.slideWidth = Math.ceil(_.listWidth), 
        _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(!0) * _.$slideTrack.children(".slick-slide").length)));
        var offset = _.$slides.first().outerWidth(!0) - _.$slides.first().width();
        !1 === _.options.variableWidth && _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset);
    }, Slick.prototype.setFade = function() {
        var targetLeft, _ = this;
        _.$slides.each((function(index, element) {
            targetLeft = _.slideWidth * index * -1, !0 === _.options.rtl ? $(element).css({
                position: "relative",
                right: targetLeft,
                top: 0,
                zIndex: _.options.zIndex - 2,
                opacity: 0
            }) : $(element).css({
                position: "relative",
                left: targetLeft,
                top: 0,
                zIndex: _.options.zIndex - 2,
                opacity: 0
            });
        })), _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
    }, Slick.prototype.setHeight = function() {
        var _ = this;
        if (1 === _.options.slidesToShow && !0 === _.options.adaptiveHeight && !1 === _.options.vertical) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(!0);
            _.$list.css("height", targetHeight);
        }
    }, Slick.prototype.setOption = Slick.prototype.slickSetOption = function() {
        var l, item, option, value, type, _ = this, refresh = !1;
        if ("object" === $.type(arguments[0]) ? (option = arguments[0], refresh = arguments[1], 
        type = "multiple") : "string" === $.type(arguments[0]) && (option = arguments[0], 
        value = arguments[1], refresh = arguments[2], "responsive" === arguments[0] && "array" === $.type(arguments[1]) ? type = "responsive" : void 0 !== arguments[1] && (type = "single")), 
        "single" === type) _.options[option] = value; else if ("multiple" === type) $.each(option, (function(opt, val) {
            _.options[opt] = val;
        })); else if ("responsive" === type) for (item in value) if ("array" !== $.type(_.options.responsive)) _.options.responsive = [ value[item] ]; else {
            for (l = _.options.responsive.length - 1; l >= 0; ) _.options.responsive[l].breakpoint === value[item].breakpoint && _.options.responsive.splice(l, 1), 
            l--;
            _.options.responsive.push(value[item]);
        }
        refresh && (_.unload(), _.reinit());
    }, Slick.prototype.setPosition = function() {
        var _ = this;
        _.setDimensions(), _.setHeight(), !1 === _.options.fade ? _.setCSS(_.getLeft(_.currentSlide)) : _.setFade(), 
        _.$slider.trigger("setPosition", [ _ ]);
    }, Slick.prototype.setProps = function() {
        var _ = this, bodyStyle = document.body.style;
        _.positionProp = !0 === _.options.vertical ? "top" : "left", "top" === _.positionProp ? _.$slider.addClass("slick-vertical") : _.$slider.removeClass("slick-vertical"), 
        void 0 === bodyStyle.WebkitTransition && void 0 === bodyStyle.MozTransition && void 0 === bodyStyle.msTransition || !0 === _.options.useCSS && (_.cssTransitions = !0), 
        _.options.fade && ("number" == typeof _.options.zIndex ? _.options.zIndex < 3 && (_.options.zIndex = 3) : _.options.zIndex = _.defaults.zIndex), 
        void 0 !== bodyStyle.OTransform && (_.animType = "OTransform", _.transformType = "-o-transform", 
        _.transitionType = "OTransition", void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.webkitPerspective && (_.animType = !1)), 
        void 0 !== bodyStyle.MozTransform && (_.animType = "MozTransform", _.transformType = "-moz-transform", 
        _.transitionType = "MozTransition", void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.MozPerspective && (_.animType = !1)), 
        void 0 !== bodyStyle.webkitTransform && (_.animType = "webkitTransform", _.transformType = "-webkit-transform", 
        _.transitionType = "webkitTransition", void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.webkitPerspective && (_.animType = !1)), 
        void 0 !== bodyStyle.msTransform && (_.animType = "msTransform", _.transformType = "-ms-transform", 
        _.transitionType = "msTransition", void 0 === bodyStyle.msTransform && (_.animType = !1)), 
        void 0 !== bodyStyle.transform && !1 !== _.animType && (_.animType = "transform", 
        _.transformType = "transform", _.transitionType = "transition"), _.transformsEnabled = _.options.useTransform && null !== _.animType && !1 !== _.animType;
    }, Slick.prototype.setSlideClasses = function(index) {
        var centerOffset, allSlides, indexOffset, remainder, _ = this;
        if (allSlides = _.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), 
        _.$slides.eq(index).addClass("slick-current"), !0 === _.options.centerMode) {
            var evenCoef = _.options.slidesToShow % 2 == 0 ? 1 : 0;
            centerOffset = Math.floor(_.options.slidesToShow / 2), !0 === _.options.infinite && (index >= centerOffset && index <= _.slideCount - 1 - centerOffset ? _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass("slick-active").attr("aria-hidden", "false") : (indexOffset = _.options.slidesToShow + index, 
            allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass("slick-active").attr("aria-hidden", "false")), 
            0 === index ? allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center") : index === _.slideCount - 1 && allSlides.eq(_.options.slidesToShow).addClass("slick-center")), 
            _.$slides.eq(index).addClass("slick-center");
        } else index >= 0 && index <= _.slideCount - _.options.slidesToShow ? _.$slides.slice(index, index + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : allSlides.length <= _.options.slidesToShow ? allSlides.addClass("slick-active").attr("aria-hidden", "false") : (remainder = _.slideCount % _.options.slidesToShow, 
        indexOffset = !0 === _.options.infinite ? _.options.slidesToShow + index : index, 
        _.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow ? allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass("slick-active").attr("aria-hidden", "false") : allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== _.options.lazyLoad && "anticipated" !== _.options.lazyLoad || _.lazyLoad();
    }, Slick.prototype.setupInfinite = function() {
        var i, slideIndex, infiniteCount, _ = this;
        if (!0 === _.options.fade && (_.options.centerMode = !1), !0 === _.options.infinite && !1 === _.options.fade && (slideIndex = null, 
        _.slideCount > _.options.slidesToShow)) {
            for (infiniteCount = !0 === _.options.centerMode ? _.options.slidesToShow + 1 : _.options.slidesToShow, 
            i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) slideIndex = i - 1, 
            $(_.$slides[slideIndex]).clone(!0).attr("id", "").attr("data-slick-index", slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned");
            for (i = 0; i < infiniteCount + _.slideCount; i += 1) slideIndex = i, $(_.$slides[slideIndex]).clone(!0).attr("id", "").attr("data-slick-index", slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned");
            _.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                $(this).attr("id", "");
            }));
        }
    }, Slick.prototype.interrupt = function(toggle) {
        toggle || this.autoPlay(), this.interrupted = toggle;
    }, Slick.prototype.selectHandler = function(event) {
        var _ = this, targetElement = $(event.target).is(".slick-slide") ? $(event.target) : $(event.target).parents(".slick-slide"), index = parseInt(targetElement.attr("data-slick-index"));
        index || (index = 0), _.slideCount <= _.options.slidesToShow ? _.slideHandler(index, !1, !0) : _.slideHandler(index);
    }, Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft, navTarget, _ = this;
        if (sync = sync || !1, !(!0 === _.animating && !0 === _.options.waitForAnimate || !0 === _.options.fade && _.currentSlide === index)) if (!1 === sync && _.asNavFor(index), 
        targetSlide = index, targetLeft = _.getLeft(targetSlide), slideLeft = _.getLeft(_.currentSlide), 
        _.currentLeft = null === _.swipeLeft ? slideLeft : _.swipeLeft, !1 === _.options.infinite && !1 === _.options.centerMode && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) !1 === _.options.fade && (targetSlide = _.currentSlide, 
        !0 !== dontAnimate && _.slideCount > _.options.slidesToShow ? _.animateSlide(slideLeft, (function() {
            _.postSlide(targetSlide);
        })) : _.postSlide(targetSlide)); else if (!1 === _.options.infinite && !0 === _.options.centerMode && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) !1 === _.options.fade && (targetSlide = _.currentSlide, 
        !0 !== dontAnimate && _.slideCount > _.options.slidesToShow ? _.animateSlide(slideLeft, (function() {
            _.postSlide(targetSlide);
        })) : _.postSlide(targetSlide)); else {
            if (_.options.autoplay && clearInterval(_.autoPlayTimer), animSlide = targetSlide < 0 ? _.slideCount % _.options.slidesToScroll != 0 ? _.slideCount - _.slideCount % _.options.slidesToScroll : _.slideCount + targetSlide : targetSlide >= _.slideCount ? _.slideCount % _.options.slidesToScroll != 0 ? 0 : targetSlide - _.slideCount : targetSlide, 
            _.animating = !0, _.$slider.trigger("beforeChange", [ _, _.currentSlide, animSlide ]), 
            oldSlide = _.currentSlide, _.currentSlide = animSlide, _.setSlideClasses(_.currentSlide), 
            _.options.asNavFor && (navTarget = (navTarget = _.getNavTarget()).slick("getSlick")).slideCount <= navTarget.options.slidesToShow && navTarget.setSlideClasses(_.currentSlide), 
            _.updateDots(), _.updateArrows(), !0 === _.options.fade) return !0 !== dontAnimate ? (_.fadeSlideOut(oldSlide), 
            _.fadeSlide(animSlide, (function() {
                _.postSlide(animSlide);
            }))) : _.postSlide(animSlide), void _.animateHeight();
            !0 !== dontAnimate && _.slideCount > _.options.slidesToShow ? _.animateSlide(targetLeft, (function() {
                _.postSlide(animSlide);
            })) : _.postSlide(animSlide);
        }
    }, Slick.prototype.startLoad = function() {
        var _ = this;
        !0 === _.options.arrows && _.slideCount > _.options.slidesToShow && (_.$prevArrow.hide(), 
        _.$nextArrow.hide()), !0 === _.options.dots && _.slideCount > _.options.slidesToShow && _.$dots.hide(), 
        _.$slider.addClass("slick-loading");
    }, Slick.prototype.swipeDirection = function() {
        var xDist, yDist, r, swipeAngle, _ = this;
        return xDist = _.touchObject.startX - _.touchObject.curX, yDist = _.touchObject.startY - _.touchObject.curY, 
        r = Math.atan2(yDist, xDist), (swipeAngle = Math.round(180 * r / Math.PI)) < 0 && (swipeAngle = 360 - Math.abs(swipeAngle)), 
        swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315 ? !1 === _.options.rtl ? "left" : "right" : swipeAngle >= 135 && swipeAngle <= 225 ? !1 === _.options.rtl ? "right" : "left" : !0 === _.options.verticalSwiping ? swipeAngle >= 35 && swipeAngle <= 135 ? "down" : "up" : "vertical";
    }, Slick.prototype.swipeEnd = function(event) {
        var slideCount, direction, _ = this;
        if (_.dragging = !1, _.swiping = !1, _.scrolling) return _.scrolling = !1, !1;
        if (_.interrupted = !1, _.shouldClick = !(_.touchObject.swipeLength > 10), void 0 === _.touchObject.curX) return !1;
        if (!0 === _.touchObject.edgeHit && _.$slider.trigger("edge", [ _, _.swipeDirection() ]), 
        _.touchObject.swipeLength >= _.touchObject.minSwipe) {
            switch (direction = _.swipeDirection()) {
              case "left":
              case "down":
                slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount(), 
                _.currentDirection = 0;
                break;

              case "right":
              case "up":
                slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount(), 
                _.currentDirection = 1;
            }
            "vertical" != direction && (_.slideHandler(slideCount), _.touchObject = {}, _.$slider.trigger("swipe", [ _, direction ]));
        } else _.touchObject.startX !== _.touchObject.curX && (_.slideHandler(_.currentSlide), 
        _.touchObject = {});
    }, Slick.prototype.swipeHandler = function(event) {
        var _ = this;
        if (!(!1 === _.options.swipe || "ontouchend" in document && !1 === _.options.swipe || !1 === _.options.draggable && -1 !== event.type.indexOf("mouse"))) switch (_.touchObject.fingerCount = event.originalEvent && void 0 !== event.originalEvent.touches ? event.originalEvent.touches.length : 1, 
        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold, !0 === _.options.verticalSwiping && (_.touchObject.minSwipe = _.listHeight / _.options.touchThreshold), 
        event.data.action) {
          case "start":
            _.swipeStart(event);
            break;

          case "move":
            _.swipeMove(event);
            break;

          case "end":
            _.swipeEnd(event);
        }
    }, Slick.prototype.swipeMove = function(event) {
        var curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength, _ = this;
        return touches = void 0 !== event.originalEvent ? event.originalEvent.touches : null, 
        !(!_.dragging || _.scrolling || touches && 1 !== touches.length) && (curLeft = _.getLeft(_.currentSlide), 
        _.touchObject.curX = void 0 !== touches ? touches[0].pageX : event.clientX, _.touchObject.curY = void 0 !== touches ? touches[0].pageY : event.clientY, 
        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2))), 
        verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2))), 
        !_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4 ? (_.scrolling = !0, 
        !1) : (!0 === _.options.verticalSwiping && (_.touchObject.swipeLength = verticalSwipeLength), 
        swipeDirection = _.swipeDirection(), void 0 !== event.originalEvent && _.touchObject.swipeLength > 4 && (_.swiping = !0, 
        event.preventDefault()), positionOffset = (!1 === _.options.rtl ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1), 
        !0 === _.options.verticalSwiping && (positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1), 
        swipeLength = _.touchObject.swipeLength, _.touchObject.edgeHit = !1, !1 === _.options.infinite && (0 === _.currentSlide && "right" === swipeDirection || _.currentSlide >= _.getDotCount() && "left" === swipeDirection) && (swipeLength = _.touchObject.swipeLength * _.options.edgeFriction, 
        _.touchObject.edgeHit = !0), !1 === _.options.vertical ? _.swipeLeft = curLeft + swipeLength * positionOffset : _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset, 
        !0 === _.options.verticalSwiping && (_.swipeLeft = curLeft + swipeLength * positionOffset), 
        !0 !== _.options.fade && !1 !== _.options.touchMove && (!0 === _.animating ? (_.swipeLeft = null, 
        !1) : void _.setCSS(_.swipeLeft))));
    }, Slick.prototype.swipeStart = function(event) {
        var touches, _ = this;
        if (_.interrupted = !0, 1 !== _.touchObject.fingerCount || _.slideCount <= _.options.slidesToShow) return _.touchObject = {}, 
        !1;
        void 0 !== event.originalEvent && void 0 !== event.originalEvent.touches && (touches = event.originalEvent.touches[0]), 
        _.touchObject.startX = _.touchObject.curX = void 0 !== touches ? touches.pageX : event.clientX, 
        _.touchObject.startY = _.touchObject.curY = void 0 !== touches ? touches.pageY : event.clientY, 
        _.dragging = !0;
    }, Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
        var _ = this;
        null !== _.$slidesCache && (_.unload(), _.$slideTrack.children(this.options.slide).detach(), 
        _.$slidesCache.appendTo(_.$slideTrack), _.reinit());
    }, Slick.prototype.unload = function() {
        var _ = this;
        $(".slick-cloned", _.$slider).remove(), _.$dots && _.$dots.remove(), _.$prevArrow && _.htmlExpr.test(_.options.prevArrow) && _.$prevArrow.remove(), 
        _.$nextArrow && _.htmlExpr.test(_.options.nextArrow) && _.$nextArrow.remove(), _.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, Slick.prototype.unslick = function(fromBreakpoint) {
        var _ = this;
        _.$slider.trigger("unslick", [ _, fromBreakpoint ]), _.destroy();
    }, Slick.prototype.updateArrows = function() {
        var _ = this;
        Math.floor(_.options.slidesToShow / 2), !0 === _.options.arrows && _.slideCount > _.options.slidesToShow && !_.options.infinite && (_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 
        _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === _.currentSlide ? (_.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (_.currentSlide >= _.slideCount - _.options.slidesToShow && !1 === _.options.centerMode || _.currentSlide >= _.slideCount - 1 && !0 === _.options.centerMode) && (_.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, Slick.prototype.updateDots = function() {
        var _ = this;
        null !== _.$dots && (_.$dots.find("li").removeClass("slick-active").end(), _.$dots.find("li").eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass("slick-active"));
    }, Slick.prototype.visibility = function() {
        var _ = this;
        _.options.autoplay && (document[_.hidden] ? _.interrupted = !0 : _.interrupted = !1);
    }, $.fn.slick = function() {
        var i, ret, _ = this, opt = arguments[0], args = Array.prototype.slice.call(arguments, 1), l = _.length;
        for (i = 0; i < l; i++) if ("object" == typeof opt || void 0 === opt ? _[i].slick = new Slick(_[i], opt) : ret = _[i].slick[opt].apply(_[i].slick, args), 
        void 0 !== ret) return ret;
        return _;
    };
}));