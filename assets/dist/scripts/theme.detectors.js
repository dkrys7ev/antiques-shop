/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssfilters-cssgradients-flexbox-objectfit-video-addtest-domprefixes-hasevent-mq-prefixed-prefixes-setclasses-shiv-testallprops-testprop !*/
!function(e, t, n) {
    function r(e) {
        return e.replace(/([a-z])-([a-z])/g, (function(e, t, n) {
            return t + n.toUpperCase();
        })).replace(/^-/, "");
    }
    function o(e, t) {
        return typeof e === t;
    }
    function a(e, t) {
        return !!~("" + e).indexOf(t);
    }
    function s(e) {
        var t = P.className, n = Modernizr._config.classPrefix || "";
        if (j && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2");
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), j ? P.className.baseVal = t : P.className = t);
    }
    function l(e, t) {
        if ("object" == typeof e) for (var n in e) T(e, n) && l(n, e[n]); else {
            var r = (e = e.toLowerCase()).split("."), o = Modernizr[r[0]];
            if (2 == r.length && (o = o[r[1]]), void 0 !== o) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), 
            Modernizr[r[0]][r[1]] = t), s([ (t && 0 != t ? "" : "no-") + r.join("-") ]), Modernizr._trigger(e, t);
        }
        return Modernizr;
    }
    function u() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : j ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
    }
    function f(e, n, r, o) {
        var i, a, s, l, f = "modernizr", d = u("div"), p = function c() {
            var e = t.body;
            return e || ((e = u(j ? "svg" : "body")).fake = !0), e;
        }();
        if (parseInt(r, 10)) for (;r--; ) (s = u("div")).id = o ? o[r] : f + (r + 1), d.appendChild(s);
        return (i = u("style")).type = "text/css", i.id = "s" + f, (p.fake ? p : d).appendChild(i), 
        p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), 
        d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = P.style.overflow, 
        P.style.overflow = "hidden", P.appendChild(p)), a = n(d, e), p.fake ? (p.parentNode.removeChild(p), 
        P.style.overflow = l, P.offsetHeight) : d.parentNode.removeChild(d), !!a;
    }
    function d(e, t) {
        return function() {
            return e.apply(t, arguments);
        };
    }
    function m(e) {
        return e.replace(/([A-Z])/g, (function(e, t) {
            return "-" + t.toLowerCase();
        })).replace(/^ms-/, "-ms-");
    }
    function h(t, n, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, t, n);
            var i = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r)); else if (i) {
                i[i.error ? "error" : "log"].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
            }
        } else o = !n && t.currentStyle && t.currentStyle[r];
        return o;
    }
    function v(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (;o--; ) if (e.CSS.supports(m(t[o]), r)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--; ) i.push("(" + m(t[o]) + ":" + r + ")");
            return f("@supports (" + (i = i.join(" or ")) + ") { #modernizr { position: absolute; } }", (function(e) {
                return "absolute" == h(e, null, "position");
            }));
        }
        return n;
    }
    function g(e, t, i, s) {
        function l() {
            f && (delete A.style, delete A.modElem);
        }
        if (s = !o(s, "undefined") && s, !o(i, "undefined")) {
            var c = v(e, i);
            if (!o(c, "undefined")) return c;
        }
        for (var f, d, p, m, h, g = [ "modernizr", "tspan", "samp" ]; !A.style && g.length; ) f = !0, 
        A.modElem = u(g.shift()), A.style = A.modElem.style;
        for (p = e.length, d = 0; p > d; d++) if (m = e[d], h = A.style[m], a(m, "-") && (m = r(m)), 
        A.style[m] !== n) {
            if (s || o(i, "undefined")) return l(), "pfx" != t || m;
            try {
                A.style[m] = i;
            } catch (y) {}
            if (A.style[m] != h) return l(), "pfx" != t || m;
        }
        return l(), !1;
    }
    function y(e, t, n, r, i) {
        var a = e.charAt(0).toUpperCase() + e.slice(1), s = (e + " " + M.join(a + " ") + a).split(" ");
        return o(t, "string") || o(t, "undefined") ? g(s, t, r, i) : function p(e, t, n) {
            var r;
            for (var i in e) if (e[i] in t) return !1 === n ? e[i] : o(r = t[e[i]], "function") ? d(r, n || t) : r;
            return !1;
        }(s = (e + " " + w.join(a + " ") + a).split(" "), t, n);
    }
    function b(e, t, r) {
        return y(e, n, n, t, r);
    }
    var C = [], S = [], x = {
        _version: "3.6.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout((function() {
                t(n[e]);
            }), 0);
        },
        addTest: function(e, t, n) {
            S.push({
                name: e,
                fn: t,
                options: n
            });
        },
        addAsyncTest: function(e) {
            S.push({
                name: null,
                fn: e
            });
        }
    }, Modernizr = function() {};
    Modernizr.prototype = x, Modernizr = new Modernizr;
    var E = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [ "", "" ];
    x._prefixes = E;
    var T, _ = "Moz O ms Webkit", w = x._config.usePrefixes ? _.toLowerCase().split(" ") : [];
    x._domPrefixes = w, function() {
        var e = {}.hasOwnProperty;
        T = o(e, "undefined") || o(e.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined");
        } : function(t, n) {
            return e.call(t, n);
        };
    }();
    var P = t.documentElement, j = "svg" === P.nodeName.toLowerCase();
    j || function(e, t) {
        function r() {
            var e = b.elements;
            return "string" == typeof e ? e.split(" ") : e;
        }
        function i(e) {
            var t = y[e[v]];
            return t || (t = {}, g++, e[v] = g, y[g] = t), t;
        }
        function a(e, n, r) {
            return n || (n = t), f ? n.createElement(e) : (r || (r = i(n)), !(o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e)).canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o));
            var o;
        }
        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, 
            t.frag = t.createFrag()), e.createElement = function(n) {
                return b.shivMethods ? a(n, e, t) : t.createElem(n);
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, (function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
            })) + ");return n}")(b, t.frag);
        }
        function u(e) {
            e || (e = t);
            var r = i(e);
            return !b.shivCSS || c || r.hasCSS || (r.hasCSS = !!function n(e, t) {
                var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild);
            }(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), 
            f || l(e, r), e;
        }
        var c, f, p = e.html5 || {}, m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, v = "_html5shiv", g = 0, y = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden" in e, f = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement;
                }();
            } catch (n) {
                c = !0, f = !0;
            }
        }();
        var b = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: "3.7.3",
            shivCSS: !1 !== p.shivCSS,
            supportsUnknownElements: f,
            shivMethods: !1 !== p.shivMethods,
            type: "default",
            shivDocument: u,
            createElement: a,
            createDocumentFragment: function s(e, n) {
                if (e || (e = t), f) return e.createDocumentFragment();
                for (var o = (n = n || i(e)).frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++) o.createElement(s[a]);
                return o;
            },
            addElements: function o(e, t) {
                var n = b.elements;
                "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), 
                b.elements = n + " " + e, u(t);
            }
        };
        e.html5 = b, u(t), "object" == typeof module && module.exports && (module.exports = b);
    }(void 0 !== e ? e : this, t), x._l = {}, x.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout((function() {
            Modernizr._trigger(e, Modernizr[e]);
        }), 0);
    }, x._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout((function() {
                var e;
                for (e = 0; e < n.length; e++) (0, n[e])(t);
            }), 0), delete this._l[e];
        }
    }, Modernizr._q.push((function() {
        x.addTest = l;
    }));
    var N = function() {
        var r = !("onblur" in t.documentElement);
        return function e(e, t) {
            var o;
            return !!e && (t && "string" != typeof t || (t = u(t || "div")), !(o = (e = "on" + e) in t) && r && (t.setAttribute || (t = u("div")), 
            t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), 
            t.removeAttribute(e)), o);
        };
    }();
    x.hasEvent = N, Modernizr.addTest("video", (function() {
        var e = u("video"), t = !1;
        try {
            (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), 
            t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), 
            t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""));
        } catch (n) {}
        return t;
    })), Modernizr.addTest("cssgradients", (function() {
        for (var e, t = "background-image:", r = "", o = 0, i = E.length - 1; i > o; o++) e = 0 === o ? "to " : "", 
        r += t + E[o] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (r += t + "-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");
        var s = u("a").style;
        return s.cssText = r, ("" + s.backgroundImage).indexOf("gradient") > -1;
    }));
    var k = "CSS" in e && "supports" in e.CSS, z = "supportsCSS" in e;
    Modernizr.addTest("supports", k || z);
    var M = x._config.usePrefixes ? _.split(" ") : [];
    x._cssomPrefixes = M;
    var F = function(t) {
        var r, o = E.length, i = e.CSSRule;
        if (void 0 === i) return n;
        if (!t) return !1;
        if ((r = (t = t.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in i) return "@" + t;
        for (var a = 0; o > a; a++) {
            var s = E[a];
            if (s.toUpperCase() + "_" + r in i) return "@-" + s.toLowerCase() + "-" + t;
        }
        return !1;
    };
    x.atRule = F;
    var L = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1;
        } : function(t) {
            var n = !1;
            return f("@media " + t + " { #modernizr { position: absolute; } }", (function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position;
            })), n;
        };
    }();
    x.mq = L;
    var $ = {
        elem: u("modernizr")
    };
    Modernizr._q.push((function() {
        delete $.elem;
    }));
    var A = {
        style: $.elem.style
    };
    Modernizr._q.unshift((function() {
        delete A.style;
    })), x.testProp = function(e, t, r) {
        return g([ e ], n, t, r);
    }, x.testAllProps = y;
    var O = x.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? F(e) : (-1 != e.indexOf("-") && (e = r(e)), t ? y(e, t, n) : y(e, "pfx"));
    };
    Modernizr.addTest("objectfit", !!O("objectFit"), {
        aliases: [ "object-fit" ]
    }), x.testAllProps = b, Modernizr.addTest("cssfilters", (function() {
        if (Modernizr.supports) return b("filter", "blur(2px)");
        var e = u("a");
        return e.style.cssText = E.join("filter:blur(2px); "), !!e.style.length && (t.documentMode === n || t.documentMode > 9);
    })), Modernizr.addTest("flexbox", b("flexBasis", "1px", !0)), function i() {
        var e, t, n, r, i, s;
        for (var l in S) if (S.hasOwnProperty(l)) {
            if (e = [], (t = S[l]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
            for (r = o(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) 1 === (s = e[i].split(".")).length ? Modernizr[s[0]] = r : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), 
            Modernizr[s[0]][s[1]] = r), C.push((r ? "" : "no-") + s.join("-"));
        }
    }(), s(C), delete x.addTest, delete x.addAsyncTest;
    for (var q = 0; q < Modernizr._q.length; q++) Modernizr._q[q]();
    e.Modernizr = Modernizr;
}(window, document), 
/*! Detectizr v2.2.0 | (c) 2012 Baris Aydinoglu | Licensed  */
window.Detectizr = function(a, b, c, d) {
    var l, m, e = {}, f = a.Modernizr, g = [ "tv", "tablet", "mobile", "desktop" ], h = {
        addAllFeaturesAsClass: !1,
        detectDevice: !0,
        detectDeviceModel: !0,
        detectScreen: !0,
        detectOS: !0,
        detectBrowser: !0,
        detectPlugins: !0
    }, i = [ {
        name: "adobereader",
        substrs: [ "Adobe", "Acrobat" ],
        progIds: [ "AcroPDF.PDF", "PDF.PDFCtrl.5" ]
    }, {
        name: "flash",
        substrs: [ "Shockwave Flash" ],
        progIds: [ "ShockwaveFlash.ShockwaveFlash.1" ]
    }, {
        name: "wmplayer",
        substrs: [ "Windows Media" ],
        progIds: [ "wmplayer.ocx" ]
    }, {
        name: "silverlight",
        substrs: [ "Silverlight" ],
        progIds: [ "AgControl.AgControl" ]
    }, {
        name: "quicktime",
        substrs: [ "QuickTime" ],
        progIds: [ "QuickTime.QuickTime" ]
    } ], j = /[\t\r\n]/g, k = c.documentElement;
    function n(a, b) {
        var c, d, e;
        if (arguments.length > 2) for (c = 1, d = arguments.length; d > c; c += 1) n(a, arguments[c]); else for (e in b) b.hasOwnProperty(e) && (a[e] = b[e]);
        return a;
    }
    function o(a) {
        return e.browser.userAgent.indexOf(a) > -1;
    }
    function p(a) {
        return a.test(e.browser.userAgent);
    }
    function q(a) {
        return a.exec(e.browser.userAgent);
    }
    function s(a) {
        return null === a || a === d ? "" : String(a).replace(/((\s|\-|\.)+[a-z0-9])/g, (function(a) {
            return a.toUpperCase().replace(/(\s|\-|\.)/g, "");
        }));
    }
    function u(a, b, c) {
        a && (a = s(a), b && (v(a + (b = s(b)), !0), c && v(a + b + "_" + c, !0)));
    }
    function v(a, b) {
        a && f && (h.addAllFeaturesAsClass ? f.addTest(a, b) : (b = "function" == typeof b ? b() : b) ? f.addTest(a, !0) : (delete f[a], 
        function t(a, b) {
            var c = b || "", d = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(j, " ") : "");
            if (d) {
                for (;d.indexOf(" " + c + " ") >= 0; ) d = d.replace(" " + c + " ", " ");
                a.className = b ? function r(a) {
                    return a.replace(/^\s+|\s+$/g, "");
                }(d) : "";
            }
        }(k, a)));
    }
    function w(a, b) {
        a.version = b;
        var c = b.split(".");
        c.length > 0 ? (c = c.reverse(), a.major = c.pop(), c.length > 0 ? (a.minor = c.pop(), 
        c.length > 0 ? (c = c.reverse(), a.patch = c.join(".")) : a.patch = "0") : a.minor = "0") : a.major = "0";
    }
    function x() {
        a.clearTimeout(l), l = a.setTimeout((function() {
            m = e.device.orientation, a.innerHeight > a.innerWidth ? e.device.orientation = "portrait" : e.device.orientation = "landscape", 
            v(e.device.orientation, !0), m !== e.device.orientation && v(m, !1);
        }), 10);
    }
    function y(a) {
        var d, e, f, g, h, c = b.plugins;
        for (g = c.length - 1; g >= 0; g--) {
            for (e = (d = c[g]).name + d.description, f = 0, h = a.length; h >= 0; h--) -1 !== e.indexOf(a[h]) && (f += 1);
            if (f === a.length) return !0;
        }
        return !1;
    }
    function z(a) {
        var b;
        for (b = a.length - 1; b >= 0; b--) try {
            new ActiveXObject(a[b]);
        } catch (c) {}
        return !1;
    }
    function A(d) {
        var j, k, l, m, r, t, A;
        if ((h = n({}, h, d || {})).detectDevice) {
            for (e.device = {
                type: "",
                model: "",
                orientation: ""
            }, l = e.device, p(/googletv|smarttv|smart-tv|internet.tv|netcast|nettv|appletv|boxee|kylo|roku|dlnadoc|roku|pov_tv|hbbtv|ce\-html/) ? (l.type = g[0], 
            l.model = "smartTv") : p(/xbox|playstation.3|wii/) ? (l.type = g[0], l.model = "gameConsole") : p(/ip(a|ro)d/) ? (l.type = g[1], 
            l.model = "ipad") : p(/tablet/) && !p(/rx-34/) && !p(/shield/) || p(/folio/) ? (l.type = g[1], 
            l.model = String(q(/playbook/) || "")) : p(/linux/) && p(/android/) && !p(/fennec|mobi|htc.magic|htcX06ht|nexus.one|sc-02b|fone.945/) ? (l.type = g[1], 
            l.model = "android") : p(/kindle/) || p(/mac.os/) && p(/silk/) ? (l.type = g[1], 
            l.model = "kindle") : p(/gt-p10|sc-01c|shw-m180s|sgh-t849|sch-i800|shw-m180l|sph-p100|sgh-i987|zt180|htc(.flyer|\_flyer)|sprint.atp51|viewpad7|pandigital(sprnova|nova)|ideos.s7|dell.streak.7|advent.vega|a101it|a70bht|mid7015|next2|nook/) || p(/mb511/) && p(/rutem/) ? (l.type = g[1], 
            l.model = "android") : p(/bb10/) ? (l.type = g[2], l.model = "blackberry") : (l.model = q(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/), 
            null !== l.model ? (l.type = g[2], l.model = String(l.model)) : (l.model = "", p(/bolt|fennec|iris|maemo|minimo|mobi|mowser|netfront|novarra|prism|rx-34|skyfire|tear|xv6875|xv6975|google.wireless.transcoder/) || p(/opera/) && p(/windows.nt.5/) && p(/htc|xda|mini|vario|samsung\-gt\-i8000|samsung\-sgh\-i9/) ? l.type = g[2] : p(/windows.(nt|xp|me|9)/) && !p(/phone/) || p(/win(9|.9|nt)/) || p(/\(windows 8\)/) ? l.type = g[3] : p(/macintosh|powerpc/) && !p(/silk/) ? (l.type = g[3], 
            l.model = "mac") : p(/linux/) && p(/x11/) || p(/solaris|sunos|bsd/) || p(/cros/) ? l.type = g[3] : p(/bot|crawler|spider|yahoo|ia_archiver|covario-ids|findlinks|dataparksearch|larbin|mediapartners-google|ng-search|snappy|teoma|jeeves|tineye/) && !p(/mobile/) ? (l.type = g[3], 
            l.model = "crawler") : l.type = g[2])), j = 0, k = g.length; k > j; j += 1) v(g[j], l.type === g[j]);
            h.detectDeviceModel && v(s(l.model), !0);
        }
        if (h.detectScreen && (l.screen = {}, f && f.mq && (f.mq("only screen and (max-width: 240px)") ? (l.screen.size = "veryVerySmall", 
        v("veryVerySmallScreen", !0)) : f.mq("only screen and (max-width: 320px)") ? (l.screen.size = "verySmall", 
        v("verySmallScreen", !0)) : f.mq("only screen and (max-width: 480px)") && (l.screen.size = "small", 
        v("smallScreen", !0)), l.type !== g[1] && l.type !== g[2] || f.mq("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)") && (l.screen.resolution = "high", 
        v("highresolution", !0))), l.type === g[1] || l.type === g[2] ? (a.onresize = function(a) {
            x();
        }, x()) : (l.orientation = "landscape", v(l.orientation, !0))), h.detectOS && (e.os = {}, 
        m = e.os, "" !== l.model && ("ipad" === l.model || "iphone" === l.model || "ipod" === l.model ? (m.name = "ios", 
        w(m, (p(/os\s([\d_]+)/) ? RegExp.$1 : "").replace(/_/g, "."))) : "android" === l.model ? (m.name = "android", 
        w(m, p(/android\s([\d\.]+)/) ? RegExp.$1 : "")) : "blackberry" === l.model ? (m.name = "blackberry", 
        w(m, p(/version\/([^\s]+)/) ? RegExp.$1 : "")) : "playbook" === l.model && (m.name = "blackberry", 
        w(m, p(/os ([^\s]+)/) ? RegExp.$1.replace(";", "") : ""))), m.name || (o("win") || o("16bit") ? (m.name = "windows", 
        o("windows nt 10") ? w(m, "10") : o("windows nt 6.3") ? w(m, "8.1") : o("windows nt 6.2") || p(/\(windows 8\)/) ? w(m, "8") : o("windows nt 6.1") ? w(m, "7") : o("windows nt 6.0") ? w(m, "vista") : o("windows nt 5.2") || o("windows nt 5.1") || o("windows xp") ? w(m, "xp") : o("windows nt 5.0") || o("windows 2000") ? w(m, "2k") : o("winnt") || o("windows nt") ? w(m, "nt") : o("win98") || o("windows 98") ? w(m, "98") : (o("win95") || o("windows 95")) && w(m, "95")) : o("mac") || o("darwin") ? (m.name = "mac os", 
        o("68k") || o("68000") ? w(m, "68k") : o("ppc") || o("powerpc") ? w(m, "ppc") : o("os x") && w(m, (p(/os\sx\s([\d_]+)/) ? RegExp.$1 : "os x").replace(/_/g, "."))) : o("webtv") ? m.name = "webtv" : o("x11") || o("inux") ? m.name = "linux" : o("sunos") ? m.name = "sun" : o("irix") ? m.name = "irix" : o("freebsd") ? m.name = "freebsd" : o("bsd") && (m.name = "bsd")), 
        m.name && (v(m.name, !0), m.major && (u(m.name, m.major), m.minor && u(m.name, m.major, m.minor))), 
        p(/\sx64|\sx86|\swin64|\swow64|\samd64/) ? m.addressRegisterSize = "64bit" : m.addressRegisterSize = "32bit", 
        v(m.addressRegisterSize, !0)), h.detectBrowser && (r = e.browser, p(/opera|webtv/) || !p(/msie\s([\d\w\.]+)/) && !o("trident") ? o("firefox") ? (r.engine = "gecko", 
        r.name = "firefox", w(r, p(/firefox\/([\d\w\.]+)/) ? RegExp.$1 : "")) : o("gecko/") ? r.engine = "gecko" : o("opera") ? (r.name = "opera", 
        r.engine = "presto", w(r, p(/version\/([\d\.]+)/) ? RegExp.$1 : p(/opera(\s|\/)([\d\.]+)/) ? RegExp.$2 : "")) : o("konqueror") ? r.name = "konqueror" : o("edge") ? (r.engine = "webkit", 
        r.name = "edge", w(r, p(/edge\/([\d\.]+)/) ? RegExp.$1 : "")) : o("chrome") ? (r.engine = "webkit", 
        r.name = "chrome", w(r, p(/chrome\/([\d\.]+)/) ? RegExp.$1 : "")) : o("iron") ? (r.engine = "webkit", 
        r.name = "iron") : o("crios") ? (r.name = "chrome", r.engine = "webkit", w(r, p(/crios\/([\d\.]+)/) ? RegExp.$1 : "")) : o("applewebkit/") ? (r.name = "safari", 
        r.engine = "webkit", w(r, p(/version\/([\d\.]+)/) ? RegExp.$1 : "")) : o("mozilla/") && (r.engine = "gecko") : (r.engine = "trident", 
        r.name = "ie", !a.addEventListener && c.documentMode && 7 === c.documentMode ? w(r, "8.compat") : p(/trident.*rv[ :](\d+)\./) ? w(r, RegExp.$1) : w(r, p(/trident\/4\.0/) ? "8" : RegExp.$1)), 
        r.name && (v(r.name, !0), r.major && (u(r.name, r.major), r.minor && u(r.name, r.major, r.minor))), 
        v(r.engine, !0), r.language = b.userLanguage || b.language, v(r.language, !0)), 
        h.detectPlugins) {
            for (r.plugins = [], j = i.length - 1; j >= 0; j--) t = i[j], A = !1, a.ActiveXObject ? A = z(t.progIds) : b.plugins && (A = y(t.substrs)), 
            A && (r.plugins.push(t.name), v(t.name, !0));
            "function" == typeof b.javaEnabled && b.javaEnabled() && (r.plugins.push("java"), 
            v("java", !0));
        }
    }
    return e.detect = function(a) {
        return A(a);
    }, e.init = function() {
        e !== d && (e.browser = {
            userAgent: (b.userAgent || b.vendor || a.opera || "").toLowerCase()
        }, e.detect());
    }, e.init(), e;
}(this, this.navigator, this.document);