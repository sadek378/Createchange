function _extends() {
    return (_extends =
        Object.assign ||
        function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
            }
            return t;
        }).apply(this, arguments);
}
function _typeof(t) {
    return (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                  return typeof t;
              }
            : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
              })(t);
}
function runPackery() {
    $(window).width() > 600 &&
        ($(".card__posts-container").packery({ itemSelector: ".card__post", gutter: ".gutter-sizer", percentPosition: !0 }),
        $("body").hasClass("home") && window.location.href.includes("#contact") && $("html,body").animate({ scrollTop: $("#contact").offset().top }, 0));
}
!(function (t, e) {
    "function" == typeof define && define.amd
        ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
              return e(t, i);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = e(t, require("jquery")))
        : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
    "use strict";
    function i(i, s, a) {
        function l(t, e, o) {
            var n,
                s = "$()." + i + '("' + e + '")';
            return (
                t.each(function (t, l) {
                    var d = a.data(l, i);
                    if (!d) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                    var c = d[e];
                    if (!c || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                    var h = c.apply(d, o);
                    n = void 0 === n ? h : n;
                }),
                void 0 !== n ? n : t
            );
        }
        function d(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);
                n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
            });
        }
        (a = a || e || t.jQuery),
            a &&
                (s.prototype.option ||
                    (s.prototype.option = function (t) {
                        a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
                    }),
                (a.fn[i] = function (t) {
                    if ("string" == typeof t) {
                        var e = n.call(arguments, 1);
                        return l(this, t, e);
                    }
                    return d(this, t), this;
                }),
                o(a));
    }
    function o(t) {
        !t || (t && t.bridget) || (t.bridget = i);
    }
    var n = Array.prototype.slice,
        s = t.console,
        r =
            "undefined" == typeof s
                ? function () {}
                : function (t) {
                      s.error(t);
                  };
    return o(e || t.jQuery), i;
}),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.getSize = e());
    })(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t),
                i = -1 == t.indexOf("%") && !isNaN(e);
            return i && e;
        }
        function e() {}
        function i() {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; d > e; e++) {
                var i = l[e];
                t[i] = 0;
            }
            return t;
        }
        function o(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
        }
        function n() {
            if (!c) {
                c = !0;
                var e = document.createElement("div");
                (e.style.width = "200px"), (e.style.padding = "1px 2px 3px 4px"), (e.style.borderStyle = "solid"), (e.style.borderWidth = "1px 2px 3px 4px"), (e.style.boxSizing = "border-box");
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var n = o(e);
                (r = 200 == Math.round(t(n.width))), (s.isBoxSizeOuter = r), i.removeChild(e);
            }
        }
        function s(e) {
            if ((n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType)) {
                var s = o(e);
                if ("none" == s.display) return i();
                var a = {};
                (a.width = e.offsetWidth), (a.height = e.offsetHeight);
                for (var c = (a.isBorderBox = "border-box" == s.boxSizing), h = 0; d > h; h++) {
                    var u = l[h],
                        p = s[u],
                        f = parseFloat(p);
                    a[u] = isNaN(f) ? 0 : f;
                }
                var g = a.paddingLeft + a.paddingRight,
                    m = a.paddingTop + a.paddingBottom,
                    v = a.marginLeft + a.marginRight,
                    y = a.marginTop + a.marginBottom,
                    w = a.borderLeftWidth + a.borderRightWidth,
                    k = a.borderTopWidth + a.borderBottomWidth,
                    b = c && r,
                    S = t(s.width);
                S !== !1 && (a.width = S + (b ? 0 : g + w));
                var T = t(s.height);
                return T !== !1 && (a.height = T + (b ? 0 : m + k)), (a.innerWidth = a.width - (g + w)), (a.innerHeight = a.height - (m + k)), (a.outerWidth = a.width + v), (a.outerHeight = a.height + y), a;
            }
        }
        var r,
            a =
                "undefined" == typeof console
                    ? e
                    : function (t) {
                          console.error(t);
                      },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            d = l.length,
            c = !1;
        return s;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        o = (i[t] = i[t] || []);
                    return -1 == o.indexOf(e) && o.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {}),
                        o = (i[t] = i[t] || {});
                    return (o[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var o = i.indexOf(e);
                    return -1 != o && i.splice(o, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    (i = i.slice(0)), (e = e || []);
                    for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                        var s = i[n],
                            r = o && o[s];
                        r && (this.off(t, s), delete o[s]), s.apply(this, e);
                    }
                    return this;
                }
            }),
            (e.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            t
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var t = (function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var o = e[i],
                    n = o + "MatchesSelector";
                if (t[n]) return n;
            }
        })();
        return function (e, i) {
            return e[t](i);
        };
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("desandro-matches-selector")))
            : (t.fizzyUIUtils = e(t, t.matchesSelector));
    })(window, function (t, e) {
        var i = {};
        (i.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }),
            (i.modulo = function (t, e) {
                return ((t % e) + e) % e;
            });
        var o = Array.prototype.slice;
        (i.makeArray = function (t) {
            if (Array.isArray(t)) return t;
            if (null === t || void 0 === t) return [];
            var e = "object" == typeof t && "number" == typeof t.length;
            return e ? o.call(t) : [t];
        }),
            (i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                -1 != i && t.splice(i, 1);
            }),
            (i.getParent = function (t, i) {
                for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), e(t, i))) return t;
            }),
            (i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }),
            (i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (i.filterFindElements = function (t, o) {
                t = i.makeArray(t);
                var n = [];
                return (
                    t.forEach(function (t) {
                        if (t instanceof HTMLElement) {
                            if (!o) return void n.push(t);
                            e(t, o) && n.push(t);
                            for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s]);
                        }
                    }),
                    n
                );
            }),
            (i.debounceMethod = function (t, e, i) {
                i = i || 100;
                var o = t.prototype[e],
                    n = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[n];
                    clearTimeout(t);
                    var e = arguments,
                        s = this;
                    this[n] = setTimeout(function () {
                        o.apply(s, e), delete s[n];
                    }, i);
                };
            }),
            (i.docReady = function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
            }),
            (i.toDashed = function (t) {
                return t
                    .replace(/(.)([A-Z])/g, function (t, e, i) {
                        return e + "-" + i;
                    })
                    .toLowerCase();
            });
        var n = t.console;
        return (
            (i.htmlInit = function (e, o) {
                i.docReady(function () {
                    var s = i.toDashed(o),
                        r = "data-" + s,
                        a = document.querySelectorAll("[" + r + "]"),
                        l = document.querySelectorAll(".js-" + s),
                        d = i.makeArray(a).concat(i.makeArray(l)),
                        c = r + "-options",
                        h = t.jQuery;
                    d.forEach(function (t) {
                        var i,
                            s = t.getAttribute(r) || t.getAttribute(c);
                        try {
                            i = s && JSON.parse(s);
                        } catch (a) {
                            return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a));
                        }
                        var l = new e(t, i);
                        h && h.data(t, o, l);
                    });
                });
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("ev-emitter"), require("get-size")))
            : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            for (var e in t) return !1;
            return (e = null), !0;
        }
        function o(t, e) {
            t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
        }
        function n(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        }
        var s = document.documentElement.style,
            r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
            l = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
            d = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
            c = (o.prototype = Object.create(t.prototype));
        (c.constructor = o),
            (c._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
            }),
            (c.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (c.getSize = function () {
                this.size = e(this.element);
            }),
            (c.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    var o = d[i] || i;
                    e[o] = t[i];
                }
            }),
            (c.getPosition = function () {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    o = t[e ? "left" : "right"],
                    n = t[i ? "top" : "bottom"],
                    s = parseFloat(o),
                    r = parseFloat(n),
                    a = this.layout.size;
                -1 != o.indexOf("%") && (s = (s / 100) * a.width),
                    -1 != n.indexOf("%") && (r = (r / 100) * a.height),
                    (s = isNaN(s) ? 0 : s),
                    (r = isNaN(r) ? 0 : r),
                    (s -= e ? a.paddingLeft : a.paddingRight),
                    (r -= i ? a.paddingTop : a.paddingBottom),
                    (this.position.x = s),
                    (this.position.y = r);
            }),
            (c.layoutPosition = function () {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop"),
                    n = i ? "paddingLeft" : "paddingRight",
                    s = i ? "left" : "right",
                    r = i ? "right" : "left",
                    a = this.position.x + t[n];
                (e[s] = this.getXValue(a)), (e[r] = "");
                var l = o ? "paddingTop" : "paddingBottom",
                    d = o ? "top" : "bottom",
                    c = o ? "bottom" : "top",
                    h = this.position.y + t[l];
                (e[d] = this.getYValue(h)), (e[c] = ""), this.css(e), this.emitEvent("layout", [this]);
            }),
            (c.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
            }),
            (c.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
            }),
            (c._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    o = this.position.y,
                    n = t == this.position.x && e == this.position.y;
                if ((this.setPosition(t, e), n && !this.isTransitioning)) return void this.layoutPosition();
                var s = t - i,
                    r = e - o,
                    a = {};
                (a.transform = this.getTranslate(s, r)), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
            }),
            (c.getTranslate = function (t, e) {
                var i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop");
                return (t = i ? t : -t), (e = o ? e : -e), "translate3d(" + t + "px, " + e + "px, 0)";
            }),
            (c.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }),
            (c.moveTo = c._transitionTo),
            (c.setPosition = function (t, e) {
                (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
            }),
            (c._nonTransition = function (t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
            }),
            (c.transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var o = this.element.offsetHeight;
                    o = null;
                }
                this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
            });
        var h = "opacity," + n(a);
        (c.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                (t = "number" == typeof t ? t + "ms" : t), this.css({ transitionProperty: h, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(l, this, !1);
            }
        }),
            (c.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }),
            (c.onotransitionend = function (t) {
                this.ontransitionend(t);
            });
        var u = { "-webkit-transform": "transform" };
        (c.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    o = u[t.propertyName] || t.propertyName;
                if ((delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[o]), o in e.onEnd)) {
                    var n = e.onEnd[o];
                    n.call(this), delete e.onEnd[o];
                }
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (c.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), (this.isTransitioning = !1);
            }),
            (c._removeStyles = function (t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e);
            });
        var p = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return (
            (c.removeTransitionStyles = function () {
                this.css(p);
            }),
            (c.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (c.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
            }),
            (c.remove = function () {
                return r && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      void this.hide())
                    : void this.removeElem();
            }),
            (c.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("visibleStyle");
                (e[i] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (c.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (c.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }),
            (c.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                (e[i] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (c.onHideTransitionEnd = function () {
                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (c.destroy = function () {
                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
            }),
            o
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
                  return e(t, i, o, n, s);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
            : (t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item));
    })(window, function (t, e, i, o, n) {
        "use strict";
        function s(t, e) {
            var i = o.getQueryElement(t);
            if (!i) return void (l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            (this.element = i), d && (this.$element = d(this.element)), (this.options = o.extend({}, this.constructor.defaults)), this.option(e);
            var n = ++h;
            (this.element.outlayerGUID = n), (u[n] = this), this._create();
            var s = this._getOption("initLayout");
            s && this.layout();
        }
        function r(t) {
            function e() {
                t.apply(this, arguments);
            }
            return (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), e;
        }
        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                o = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var n = f[o] || 1;
            return i * n;
        }
        var l = t.console,
            d = t.jQuery,
            c = function () {},
            h = 0,
            u = {};
        (s.namespace = "outlayer"),
            (s.Item = n),
            (s.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var p = s.prototype;
        o.extend(p, e.prototype),
            (p.option = function (t) {
                o.extend(this.options, t);
            }),
            (p._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
            }),
            (s.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (p._create = function () {
                this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize();
            }),
            (p.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (p._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
                    var s = e[n],
                        r = new i(s, this);
                    o.push(r);
                }
                return o;
            }),
            (p._filterFindItemElements = function (t) {
                return o.filterFindElements(t, this.options.itemSelector);
            }),
            (p.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }),
            (p.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (p._init = p.layout),
            (p._resetLayout = function () {
                this.getSize();
            }),
            (p.getSize = function () {
                this.size = i(this.element);
            }),
            (p._getMeasurement = function (t, e) {
                var o,
                    n = this.options[t];
                n ? ("string" == typeof n ? (o = this.element.querySelector(n)) : n instanceof HTMLElement && (o = n), (this[t] = o ? i(o)[e] : n)) : (this[t] = 0);
            }),
            (p.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
            }),
            (p._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }),
            (p._layoutItems = function (t, e) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                    var i = [];
                    t.forEach(function (t) {
                        var o = this._getItemLayoutPosition(t);
                        (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
                    }, this),
                        this._processLayoutQueue(i);
                }
            }),
            (p._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (p._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (p.updateStagger = function () {
                var t = this.options.stagger;
                return null === t || void 0 === t ? void (this.stagger = 0) : ((this.stagger = a(t)), this.stagger);
            }),
            (p._positionItem = function (t, e, i, o, n) {
                o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
            }),
            (p._postLayout = function () {
                this.resizeContainer();
            }),
            (p.resizeContainer = function () {
                var t = this._getOption("resizeContainer");
                if (t) {
                    var e = this._getContainerSize();
                    e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
                }
            }),
            (p._getContainerSize = c),
            (p._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                }
            }),
            (p._emitCompleteOnItems = function (t, e) {
                function i() {
                    n.dispatchEvent(t + "Complete", null, [e]);
                }
                function o() {
                    r++, r == s && i();
                }
                var n = this,
                    s = e.length;
                if (!e || !s) return void i();
                var r = 0;
                e.forEach(function (e) {
                    e.once(t, o);
                });
            }),
            (p.dispatchEvent = function (t, e, i) {
                var o = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, o), d))
                    if (((this.$element = this.$element || d(this.element)), e)) {
                        var n = d.Event(e);
                        (n.type = t), this.$element.trigger(n, i);
                    } else this.$element.trigger(t, i);
            }),
            (p.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (p.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (p.stamp = function (t) {
                (t = this._find(t)), t && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
            }),
            (p.unstamp = function (t) {
                (t = this._find(t)),
                    t &&
                        t.forEach(function (t) {
                            o.removeFrom(this.stamps, t), this.unignore(t);
                        }, this);
            }),
            (p._find = function (t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), (t = o.makeArray(t))) : void 0;
            }),
            (p._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }),
            (p._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
            }),
            (p._manageStamp = c),
            (p._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    o = this._boundingRect,
                    n = i(t),
                    s = { left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom };
                return s;
            }),
            (p.handleEvent = o.handleEvent),
            (p.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (p.unbindResize = function () {
                t.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (p.onresize = function () {
                this.resize();
            }),
            o.debounceMethod(s, "onresize", 100),
            (p.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (p.needsResizeLayout = function () {
                var t = i(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth;
            }),
            (p.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (p.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (p.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    (this.items = e.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
                }
            }),
            (p.reveal = function (t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.reveal();
                    });
                }
            }),
            (p.hide = function (t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.hide();
                    });
                }
            }),
            (p.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (p.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (p.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }),
            (p.getItems = function (t) {
                t = o.makeArray(t);
                var e = [];
                return (
                    t.forEach(function (t) {
                        var i = this.getItem(t);
                        i && e.push(i);
                    }, this),
                    e
                );
            }),
            (p.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                        e.length &&
                        e.forEach(function (t) {
                            t.remove(), o.removeFrom(this.items, t);
                        }, this);
            }),
            (p.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                    (t.position = ""),
                    (t.width = ""),
                    this.items.forEach(function (t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete u[e], delete this.element.outlayerGUID, d && d.removeData(this.element, this.constructor.namespace);
            }),
            (s.data = function (t) {
                t = o.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && u[e];
            }),
            (s.create = function (t, e) {
                var i = r(s);
                return (
                    (i.defaults = o.extend({}, s.defaults)),
                    o.extend(i.defaults, e),
                    (i.compatOptions = o.extend({}, s.compatOptions)),
                    (i.namespace = t),
                    (i.data = s.data),
                    (i.Item = r(n)),
                    o.htmlInit(i, t),
                    d && d.bridget && d.bridget(t, i),
                    i
                );
            });
        var f = { ms: 1, s: 1e3 };
        return (s.Item = n), s;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof module && module.exports ? (module.exports = e()) : ((t.Packery = t.Packery || {}), (t.Packery.Rect = e()));
    })(window, function () {
        "use strict";
        function t(e) {
            for (var i in t.defaults) this[i] = t.defaults[i];
            for (i in e) this[i] = e[i];
        }
        t.defaults = { x: 0, y: 0, width: 0, height: 0 };
        var e = t.prototype;
        return (
            (e.contains = function (t) {
                var e = t.width || 0,
                    i = t.height || 0;
                return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i;
            }),
            (e.overlaps = function (t) {
                var e = this.x + this.width,
                    i = this.y + this.height,
                    o = t.x + t.width,
                    n = t.y + t.height;
                return this.x < o && e > t.x && this.y < n && i > t.y;
            }),
            (e.getMaximalFreeRects = function (e) {
                if (!this.overlaps(e)) return !1;
                var i,
                    o = [],
                    n = this.x + this.width,
                    s = this.y + this.height,
                    r = e.x + e.width,
                    a = e.y + e.height;
                return (
                    this.y < e.y && ((i = new t({ x: this.x, y: this.y, width: this.width, height: e.y - this.y })), o.push(i)),
                    n > r && ((i = new t({ x: r, y: this.y, width: n - r, height: this.height })), o.push(i)),
                    s > a && ((i = new t({ x: this.x, y: a, width: this.width, height: s - a })), o.push(i)),
                    this.x < e.x && ((i = new t({ x: this.x, y: this.y, width: e.x - this.x, height: this.height })), o.push(i)),
                    o
                );
            }),
            (e.canFit = function (t) {
                return this.width >= t.width && this.height >= t.height;
            }),
            t
        );
    }),
    (function (t, e) {
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], e);
        else if ("object" == typeof module && module.exports) module.exports = e(require("./rect"));
        else {
            var i = (t.Packery = t.Packery || {});
            i.Packer = e(i.Rect);
        }
    })(window, function (t) {
        "use strict";
        function e(t, e, i) {
            (this.width = t || 0), (this.height = e || 0), (this.sortDirection = i || "downwardLeftToRight"), this.reset();
        }
        var i = e.prototype;
        (i.reset = function () {
            this.spaces = [];
            var e = new t({ x: 0, y: 0, width: this.width, height: this.height });
            this.spaces.push(e), (this.sorter = o[this.sortDirection] || o.downwardLeftToRight);
        }),
            (i.pack = function (t) {
                for (var e = 0; e < this.spaces.length; e++) {
                    var i = this.spaces[e];
                    if (i.canFit(t)) {
                        this.placeInSpace(t, i);
                        break;
                    }
                }
            }),
            (i.columnPack = function (t) {
                for (var e = 0; e < this.spaces.length; e++) {
                    var i = this.spaces[e],
                        o = i.x <= t.x && i.x + i.width >= t.x + t.width && i.height >= t.height - 0.01;
                    if (o) {
                        (t.y = i.y), this.placed(t);
                        break;
                    }
                }
            }),
            (i.rowPack = function (t) {
                for (var e = 0; e < this.spaces.length; e++) {
                    var i = this.spaces[e],
                        o = i.y <= t.y && i.y + i.height >= t.y + t.height && i.width >= t.width - 0.01;
                    if (o) {
                        (t.x = i.x), this.placed(t);
                        break;
                    }
                }
            }),
            (i.placeInSpace = function (t, e) {
                (t.x = e.x), (t.y = e.y), this.placed(t);
            }),
            (i.placed = function (t) {
                for (var e = [], i = 0; i < this.spaces.length; i++) {
                    var o = this.spaces[i],
                        n = o.getMaximalFreeRects(t);
                    n ? e.push.apply(e, n) : e.push(o);
                }
                (this.spaces = e), this.mergeSortSpaces();
            }),
            (i.mergeSortSpaces = function () {
                e.mergeRects(this.spaces), this.spaces.sort(this.sorter);
            }),
            (i.addSpace = function (t) {
                this.spaces.push(t), this.mergeSortSpaces();
            }),
            (e.mergeRects = function (t) {
                var e = 0,
                    i = t[e];
                t: for (; i; ) {
                    for (var o = 0, n = t[e + o]; n; ) {
                        if (n == i) o++;
                        else {
                            if (n.contains(i)) {
                                t.splice(e, 1), (i = t[e]);
                                continue t;
                            }
                            i.contains(n) ? t.splice(e + o, 1) : o++;
                        }
                        n = t[e + o];
                    }
                    e++, (i = t[e]);
                }
                return t;
            });
        var o = {
            downwardLeftToRight: function (t, e) {
                return t.y - e.y || t.x - e.x;
            },
            rightwardTopToBottom: function (t, e) {
                return t.x - e.x || t.y - e.y;
            },
        };
        return e;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("packery/js/item", ["outlayer/outlayer", "./rect"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer"), require("./rect")))
            : (t.Packery.Item = e(t.Outlayer, t.Packery.Rect));
    })(window, function (t, e) {
        "use strict";
        var i = document.documentElement.style,
            o = "string" == typeof i.transform ? "transform" : "WebkitTransform",
            n = function () {
                t.Item.apply(this, arguments);
            },
            s = (n.prototype = Object.create(t.Item.prototype)),
            r = s._create;
        s._create = function () {
            r.call(this), (this.rect = new e());
        };
        var a = s.moveTo;
        return (
            (s.moveTo = function (t, e) {
                var i = Math.abs(this.position.x - t),
                    o = Math.abs(this.position.y - e),
                    n = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > i && 1 > o;
                return n ? void this.goTo(t, e) : void a.apply(this, arguments);
            }),
            (s.enablePlacing = function () {
                this.removeTransitionStyles(), this.isTransitioning && o && (this.element.style[o] = "none"), (this.isTransitioning = !1), this.getSize(), this.layout._setRectSize(this.element, this.rect), (this.isPlacing = !0);
            }),
            (s.disablePlacing = function () {
                this.isPlacing = !1;
            }),
            (s.removeElem = function () {
                var t = this.element.parentNode;
                t && t.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this]);
            }),
            (s.showDropPlaceholder = function () {
                var t = this.dropPlaceholder;
                t || ((t = this.dropPlaceholder = document.createElement("div")), (t.className = "packery-drop-placeholder"), (t.style.position = "absolute")),
                    (t.style.width = this.size.width + "px"),
                    (t.style.height = this.size.height + "px"),
                    this.positionDropPlaceholder(),
                    this.layout.element.appendChild(t);
            }),
            (s.positionDropPlaceholder = function () {
                this.dropPlaceholder.style[o] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)";
            }),
            (s.hideDropPlaceholder = function () {
                var t = this.dropPlaceholder.parentNode;
                t && t.removeChild(this.dropPlaceholder);
            }),
            n
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(["get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")))
            : (t.Packery = e(t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item));
    })(window, function (t, e, i, o, n) {
        "use strict";
        function s(t, e) {
            return t.position.y - e.position.y || t.position.x - e.position.x;
        }
        function r(t, e) {
            return t.position.x - e.position.x || t.position.y - e.position.y;
        }
        function a(t, e) {
            var i = e.x - t.x,
                o = e.y - t.y;
            return Math.sqrt(i * i + o * o);
        }
        i.prototype.canFit = function (t) {
            return this.width >= t.width - 1 && this.height >= t.height - 1;
        };
        var l = e.create("packery");
        l.Item = n;
        var d = l.prototype;
        (d._create = function () {
            e.prototype._create.call(this), (this.packer = new o()), (this.shiftPacker = new o()), (this.isEnabled = !0), (this.dragItemCount = 0);
            var t = this;
            (this.handleDraggabilly = {
                dragStart: function () {
                    t.itemDragStart(this.element);
                },
                dragMove: function () {
                    t.itemDragMove(this.element, this.position.x, this.position.y);
                },
                dragEnd: function () {
                    t.itemDragEnd(this.element);
                },
            }),
                (this.handleUIDraggable = {
                    start: function (e, i) {
                        i && t.itemDragStart(e.currentTarget);
                    },
                    drag: function (e, i) {
                        i && t.itemDragMove(e.currentTarget, i.position.left, i.position.top);
                    },
                    stop: function (e, i) {
                        i && t.itemDragEnd(e.currentTarget);
                    },
                });
        }),
            (d._resetLayout = function () {
                this.getSize(), this._getMeasurements();
                var t, e, i;
                this._getOption("horizontal") ? ((t = 1 / 0), (e = this.size.innerHeight + this.gutter), (i = "rightwardTopToBottom")) : ((t = this.size.innerWidth + this.gutter), (e = 1 / 0), (i = "downwardLeftToRight")),
                    (this.packer.width = this.shiftPacker.width = t),
                    (this.packer.height = this.shiftPacker.height = e),
                    (this.packer.sortDirection = this.shiftPacker.sortDirection = i),
                    this.packer.reset(),
                    (this.maxY = 0),
                    (this.maxX = 0);
            }),
            (d._getMeasurements = function () {
                this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width");
            }),
            (d._getItemLayoutPosition = function (t) {
                if ((this._setRectSize(t.element, t.rect), this.isShifting || this.dragItemCount > 0)) {
                    var e = this._getPackMethod();
                    this.packer[e](t.rect);
                } else this.packer.pack(t.rect);
                return this._setMaxXY(t.rect), t.rect;
            }),
            (d.shiftLayout = function () {
                (this.isShifting = !0), this.layout(), delete this.isShifting;
            }),
            (d._getPackMethod = function () {
                return this._getOption("horizontal") ? "rowPack" : "columnPack";
            }),
            (d._setMaxXY = function (t) {
                (this.maxX = Math.max(t.x + t.width, this.maxX)), (this.maxY = Math.max(t.y + t.height, this.maxY));
            }),
            (d._setRectSize = function (e, i) {
                var o = t(e),
                    n = o.outerWidth,
                    s = o.outerHeight;
                (n || s) && ((n = this._applyGridGutter(n, this.columnWidth)), (s = this._applyGridGutter(s, this.rowHeight))), (i.width = Math.min(n, this.packer.width)), (i.height = Math.min(s, this.packer.height));
            }),
            (d._applyGridGutter = function (t, e) {
                if (!e) return t + this.gutter;
                e += this.gutter;
                var i = t % e,
                    o = i && 1 > i ? "round" : "ceil";
                return (t = Math[o](t / e) * e);
            }),
            (d._getContainerSize = function () {
                return this._getOption("horizontal") ? { width: this.maxX - this.gutter } : { height: this.maxY - this.gutter };
            }),
            (d._manageStamp = function (t) {
                var e,
                    o = this.getItem(t);
                if (o && o.isPlacing) e = o.rect;
                else {
                    var n = this._getElementOffset(t);
                    e = new i({ x: this._getOption("originLeft") ? n.left : n.right, y: this._getOption("originTop") ? n.top : n.bottom });
                }
                this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e);
            }),
            (d.sortItemsByPosition = function () {
                var t = this._getOption("horizontal") ? r : s;
                this.items.sort(t);
            }),
            (d.fit = function (t, e, i) {
                var o = this.getItem(t);
                o &&
                    (this.stamp(o.element),
                    o.enablePlacing(),
                    this.updateShiftTargets(o),
                    (e = void 0 === e ? o.rect.x : e),
                    (i = void 0 === i ? o.rect.y : i),
                    this.shift(o, e, i),
                    this._bindFitEvents(o),
                    o.moveTo(o.rect.x, o.rect.y),
                    this.shiftLayout(),
                    this.unstamp(o.element),
                    this.sortItemsByPosition(),
                    o.disablePlacing());
            }),
            (d._bindFitEvents = function (t) {
                function e() {
                    o++, 2 == o && i.dispatchEvent("fitComplete", null, [t]);
                }
                var i = this,
                    o = 0;
                t.once("layout", e), this.once("layoutComplete", e);
            }),
            (d.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout());
            }),
            (d.needsResizeLayout = function () {
                var e = t(this.element),
                    i = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
                return e[i] != this.size[i];
            }),
            (d.resizeShiftPercentLayout = function () {
                var e = this._getItemsForLayout(this.items),
                    i = this._getOption("horizontal"),
                    o = i ? "y" : "x",
                    n = i ? "height" : "width",
                    s = i ? "rowHeight" : "columnWidth",
                    r = i ? "innerHeight" : "innerWidth",
                    a = this[s];
                if ((a = a && a + this.gutter)) {
                    this._getMeasurements();
                    var l = this[s] + this.gutter;
                    e.forEach(function (t) {
                        var e = Math.round(t.rect[o] / a);
                        t.rect[o] = e * l;
                    });
                } else {
                    var d = t(this.element)[r] + this.gutter,
                        c = this.packer[n];
                    e.forEach(function (t) {
                        t.rect[o] = (t.rect[o] / c) * d;
                    });
                }
                this.shiftLayout();
            }),
            (d.itemDragStart = function (t) {
                if (this.isEnabled) {
                    this.stamp(t);
                    var e = this.getItem(t);
                    e && (e.enablePlacing(), e.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(e));
                }
            }),
            (d.updateShiftTargets = function (t) {
                this.shiftPacker.reset(), this._getBoundingRect();
                var e = this._getOption("originLeft"),
                    o = this._getOption("originTop");
                this.stamps.forEach(function (t) {
                    var n = this.getItem(t);
                    if (!n || !n.isPlacing) {
                        var s = this._getElementOffset(t),
                            r = new i({ x: e ? s.left : s.right, y: o ? s.top : s.bottom });
                        this._setRectSize(t, r), this.shiftPacker.placed(r);
                    }
                }, this);
                var n = this._getOption("horizontal"),
                    s = n ? "rowHeight" : "columnWidth",
                    r = n ? "height" : "width";
                (this.shiftTargetKeys = []), (this.shiftTargets = []);
                var a,
                    l = this[s];
                if ((l = l && l + this.gutter)) {
                    var d = Math.ceil(t.rect[r] / l),
                        c = Math.floor((this.shiftPacker[r] + this.gutter) / l);
                    a = (c - d) * l;
                    for (var h = 0; c > h; h++) {
                        var u = n ? 0 : h * l,
                            p = n ? h * l : 0;
                        this._addShiftTarget(u, p, a);
                    }
                } else (a = this.shiftPacker[r] + this.gutter - t.rect[r]), this._addShiftTarget(0, 0, a);
                var f = this._getItemsForLayout(this.items),
                    g = this._getPackMethod();
                f.forEach(function (t) {
                    var e = t.rect;
                    this._setRectSize(t.element, e), this.shiftPacker[g](e), this._addShiftTarget(e.x, e.y, a);
                    var i = n ? e.x + e.width : e.x,
                        o = n ? e.y : e.y + e.height;
                    if ((this._addShiftTarget(i, o, a), l))
                        for (var s = Math.round(e[r] / l), d = 1; s > d; d++) {
                            var c = n ? i : e.x + l * d,
                                h = n ? e.y + l * d : o;
                            this._addShiftTarget(c, h, a);
                        }
                }, this);
            }),
            (d._addShiftTarget = function (t, e, i) {
                var o = this._getOption("horizontal") ? e : t;
                if (!(0 !== o && o > i)) {
                    var n = t + "," + e,
                        s = -1 != this.shiftTargetKeys.indexOf(n);
                    s || (this.shiftTargetKeys.push(n), this.shiftTargets.push({ x: t, y: e }));
                }
            }),
            (d.shift = function (t, e, i) {
                var o,
                    n = 1 / 0,
                    s = { x: e, y: i };
                this.shiftTargets.forEach(function (t) {
                    var e = a(t, s);
                    n > e && ((o = t), (n = e));
                }),
                    (t.rect.x = o.x),
                    (t.rect.y = o.y);
            });
        var c = 120;
        (d.itemDragMove = function (t, e, i) {
            function o() {
                s.shift(n, e, i), n.positionDropPlaceholder(), s.layout();
            }
            var n = this.isEnabled && this.getItem(t);
            if (n) {
                (e -= this.size.paddingLeft), (i -= this.size.paddingTop);
                var s = this,
                    r = new Date(),
                    a = this._itemDragTime && r - this._itemDragTime < c;
                a ? (clearTimeout(this.dragTimeout), (this.dragTimeout = setTimeout(o, c))) : (o(), (this._itemDragTime = r));
            }
        }),
            (d.itemDragEnd = function (t) {
                function e() {
                    o++, 2 == o && (i.element.classList.remove("is-positioning-post-drag"), i.hideDropPlaceholder(), n.dispatchEvent("dragItemPositioned", null, [i]));
                }
                var i = this.isEnabled && this.getItem(t);
                if (i) {
                    clearTimeout(this.dragTimeout), i.element.classList.add("is-positioning-post-drag");
                    var o = 0,
                        n = this;
                    i.once("layout", e),
                        this.once("layoutComplete", e),
                        i.moveTo(i.rect.x, i.rect.y),
                        this.layout(),
                        (this.dragItemCount = Math.max(0, this.dragItemCount - 1)),
                        this.sortItemsByPosition(),
                        i.disablePlacing(),
                        this.unstamp(i.element);
                }
            }),
            (d.bindDraggabillyEvents = function (t) {
                this._bindDraggabillyEvents(t, "on");
            }),
            (d.unbindDraggabillyEvents = function (t) {
                this._bindDraggabillyEvents(t, "off");
            }),
            (d._bindDraggabillyEvents = function (t, e) {
                var i = this.handleDraggabilly;
                t[e]("dragStart", i.dragStart), t[e]("dragMove", i.dragMove), t[e]("dragEnd", i.dragEnd);
            }),
            (d.bindUIDraggableEvents = function (t) {
                this._bindUIDraggableEvents(t, "on");
            }),
            (d.unbindUIDraggableEvents = function (t) {
                this._bindUIDraggableEvents(t, "off");
            }),
            (d._bindUIDraggableEvents = function (t, e) {
                var i = this.handleUIDraggable;
                t[e]("dragstart", i.start)[e]("drag", i.drag)[e]("dragstop", i.stop);
            });
        var h = d.destroy;
        return (
            (d.destroy = function () {
                h.apply(this, arguments), (this.isEnabled = !1);
            }),
            (l.Rect = i),
            (l.Packer = o),
            l
        );
    }),
    !(function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? (module.exports = t(require("jquery"))) : t(jQuery);
    })(function (t) {
        "use strict";
        var e = window.Slick || {};
        ((e = (function () {
            var e = 0;
            return function (i, o) {
                var n,
                    s = this;
                (s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(i),
                    appendDots: t(i),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (e, i) {
                        return t('<button type="button" />').text(i + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
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
                    zIndex: 1e3,
                }),
                    (s.initials = {
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
                        unslicked: !1,
                    }),
                    t.extend(s, s.initials),
                    (s.activeBreakpoint = null),
                    (s.animType = null),
                    (s.animProp = null),
                    (s.breakpoints = []),
                    (s.breakpointSettings = []),
                    (s.cssTransitions = !1),
                    (s.focussed = !1),
                    (s.interrupted = !1),
                    (s.hidden = "hidden"),
                    (s.paused = !0),
                    (s.positionProp = null),
                    (s.respondTo = null),
                    (s.rowCount = 1),
                    (s.shouldClick = !0),
                    (s.$slider = t(i)),
                    (s.$slidesCache = null),
                    (s.transformType = null),
                    (s.transitionType = null),
                    (s.visibilityChange = "visibilitychange"),
                    (s.windowWidth = 0),
                    (s.windowTimer = null),
                    (n = t(i).data("slick") || {}),
                    (s.options = t.extend({}, s.defaults, o, n)),
                    (s.currentSlide = s.options.initialSlide),
                    (s.originalSettings = s.options),
                    void 0 !== document.mozHidden
                        ? ((s.hidden = "mozHidden"), (s.visibilityChange = "mozvisibilitychange"))
                        : void 0 !== document.webkitHidden && ((s.hidden = "webkitHidden"), (s.visibilityChange = "webkitvisibilitychange")),
                    (s.autoPlay = t.proxy(s.autoPlay, s)),
                    (s.autoPlayClear = t.proxy(s.autoPlayClear, s)),
                    (s.autoPlayIterator = t.proxy(s.autoPlayIterator, s)),
                    (s.changeSlide = t.proxy(s.changeSlide, s)),
                    (s.clickHandler = t.proxy(s.clickHandler, s)),
                    (s.selectHandler = t.proxy(s.selectHandler, s)),
                    (s.setPosition = t.proxy(s.setPosition, s)),
                    (s.swipeHandler = t.proxy(s.swipeHandler, s)),
                    (s.dragHandler = t.proxy(s.dragHandler, s)),
                    (s.keyHandler = t.proxy(s.keyHandler, s)),
                    (s.instanceUid = e++),
                    (s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    s.registerBreakpoints(),
                    s.init(!0);
            };
        })()).prototype.activateADA = function () {
            this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
        }),
            (e.prototype.addSlide = e.prototype.slickAdd = function (e, i, o) {
                var n = this;
                if ("boolean" == typeof i) (o = i), (i = null);
                else if (i < 0 || i >= n.slideCount) return !1;
                n.unload(),
                    "number" == typeof i
                        ? 0 === i && 0 === n.$slides.length
                            ? t(e).appendTo(n.$slideTrack)
                            : o
                            ? t(e).insertBefore(n.$slides.eq(i))
                            : t(e).insertAfter(n.$slides.eq(i))
                        : !0 === o
                        ? t(e).prependTo(n.$slideTrack)
                        : t(e).appendTo(n.$slideTrack),
                    (n.$slides = n.$slideTrack.children(this.options.slide)),
                    n.$slideTrack.children(this.options.slide).detach(),
                    n.$slideTrack.append(n.$slides),
                    n.$slides.each(function (e, i) {
                        t(i).attr("data-slick-index", e);
                    }),
                    (n.$slidesCache = n.$slides),
                    n.reinit();
            }),
            (e.prototype.animateHeight = function () {
                var t = this;
                if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.animate({ height: e }, t.options.speed);
                }
            }),
            (e.prototype.animateSlide = function (e, i) {
                var o = {},
                    n = this;
                n.animateHeight(),
                    !0 === n.options.rtl && !1 === n.options.vertical && (e = -e),
                    !1 === n.transformsEnabled
                        ? !1 === n.options.vertical
                            ? n.$slideTrack.animate({ left: e }, n.options.speed, n.options.easing, i)
                            : n.$slideTrack.animate({ top: e }, n.options.speed, n.options.easing, i)
                        : !1 === n.cssTransitions
                        ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft),
                          t({ animStart: n.currentLeft }).animate(
                              { animStart: e },
                              {
                                  duration: n.options.speed,
                                  easing: n.options.easing,
                                  step: function (t) {
                                      (t = Math.ceil(t)), !1 === n.options.vertical ? ((o[n.animType] = "translate(" + t + "px, 0px)"), n.$slideTrack.css(o)) : ((o[n.animType] = "translate(0px," + t + "px)"), n.$slideTrack.css(o));
                                  },
                                  complete: function () {
                                      i && i.call();
                                  },
                              }
                          ))
                        : (n.applyTransition(),
                          (e = Math.ceil(e)),
                          !1 === n.options.vertical ? (o[n.animType] = "translate3d(" + e + "px, 0px, 0px)") : (o[n.animType] = "translate3d(0px," + e + "px, 0px)"),
                          n.$slideTrack.css(o),
                          i &&
                              setTimeout(function () {
                                  n.disableTransition(), i.call();
                              }, n.options.speed));
            }),
            (e.prototype.getNavTarget = function () {
                var e = this,
                    i = e.options.asNavFor;
                return i && null !== i && (i = t(i).not(e.$slider)), i;
            }),
            (e.prototype.asNavFor = function (e) {
                var i = this.getNavTarget();
                null !== i &&
                    "object" == typeof i &&
                    i.each(function () {
                        var i = t(this).slick("getSlick");
                        i.unslicked || i.slideHandler(e, !0);
                    });
            }),
            (e.prototype.applyTransition = function (t) {
                var e = this,
                    i = {};
                !1 === e.options.fade ? (i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase) : (i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
                    !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
            }),
            (e.prototype.autoPlay = function () {
                var t = this;
                t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed));
            }),
            (e.prototype.autoPlayClear = function () {
                var t = this;
                t.autoPlayTimer && clearInterval(t.autoPlayTimer);
            }),
            (e.prototype.autoPlayIterator = function () {
                var t = this,
                    e = t.currentSlide + t.options.slidesToScroll;
                t.paused ||
                    t.interrupted ||
                    t.focussed ||
                    (!1 === t.options.infinite &&
                        (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? (t.direction = 0) : 0 === t.direction && ((e = t.currentSlide - t.options.slidesToScroll), t.currentSlide - 1 == 0 && (t.direction = 1))),
                    t.slideHandler(e));
            }),
            (e.prototype.buildArrows = function () {
                var e = this;
                !0 === e.options.arrows &&
                    ((e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow")),
                    (e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow")),
                    e.slideCount > e.options.slidesToShow
                        ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                          e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                          !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                        : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
            }),
            (e.prototype.buildDots = function () {
                var e,
                    i,
                    o = this;
                if (!0 === o.options.dots) {
                    for (o.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) i.append(t("<li />").append(o.options.customPaging.call(this, o, e)));
                    (o.$dots = i.appendTo(o.options.appendDots)), o.$dots.find("li").first().addClass("slick-active");
                }
            }),
            (e.prototype.buildOut = function () {
                var e = this;
                (e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                    (e.slideCount = e.$slides.length),
                    e.$slides.each(function (e, i) {
                        t(i)
                            .attr("data-slick-index", e)
                            .data("originalStyling", t(i).attr("style") || "");
                    }),
                    e.$slider.addClass("slick-slider"),
                    (e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
                    (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                    e.$slideTrack.css("opacity", 0),
                    (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) || (e.options.slidesToScroll = 1),
                    t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                    e.setupInfinite(),
                    e.buildArrows(),
                    e.buildDots(),
                    e.updateDots(),
                    e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                    !0 === e.options.draggable && e.$list.addClass("draggable");
            }),
            (e.prototype.buildRows = function () {
                var t,
                    e,
                    i,
                    o,
                    n,
                    s,
                    r,
                    a = this;
                if (((o = document.createDocumentFragment()), (s = a.$slider.children()), a.options.rows > 1)) {
                    for (r = a.options.slidesPerRow * a.options.rows, n = Math.ceil(s.length / r), t = 0; t < n; t++) {
                        var l = document.createElement("div");
                        for (e = 0; e < a.options.rows; e++) {
                            var d = document.createElement("div");
                            for (i = 0; i < a.options.slidesPerRow; i++) {
                                var c = t * r + (e * a.options.slidesPerRow + i);
                                s.get(c) && d.appendChild(s.get(c));
                            }
                            l.appendChild(d);
                        }
                        o.appendChild(l);
                    }
                    a.$slider.empty().append(o),
                        a.$slider
                            .children()
                            .children()
                            .children()
                            .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
                }
            }),
            (e.prototype.checkResponsive = function (e, i) {
                var o,
                    n,
                    s,
                    r = this,
                    a = !1,
                    l = r.$slider.width(),
                    d = window.innerWidth || t(window).width();
                if (("window" === r.respondTo ? (s = d) : "slider" === r.respondTo ? (s = l) : "min" === r.respondTo && (s = Math.min(d, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive)) {
                    n = null;
                    for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[o] && (n = r.breakpoints[o]) : s > r.breakpoints[o] && (n = r.breakpoints[o]));
                    null !== n
                        ? null !== r.activeBreakpoint
                            ? (n !== r.activeBreakpoint || i) &&
                              ((r.activeBreakpoint = n),
                              "unslick" === r.breakpointSettings[n] ? r.unslick(n) : ((r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n])), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)),
                              (a = n))
                            : ((r.activeBreakpoint = n),
                              "unslick" === r.breakpointSettings[n] ? r.unslick(n) : ((r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n])), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)),
                              (a = n))
                        : null !== r.activeBreakpoint && ((r.activeBreakpoint = null), (r.options = r.originalSettings), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), (a = n)),
                        e || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
                }
            }),
            (e.prototype.changeSlide = function (e, i) {
                var o,
                    n,
                    s,
                    r = this,
                    a = t(e.currentTarget);
                switch ((a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), (s = r.slideCount % r.options.slidesToScroll != 0), (o = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll), e.data.message)) {
                    case "previous":
                        (n = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o), r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - n, !1, i);
                        break;
                    case "next":
                        (n = 0 === o ? r.options.slidesToScroll : o), r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + n, !1, i);
                        break;
                    case "index":
                        var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
                        r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                        break;
                    default:
                        return;
                }
            }),
            (e.prototype.checkNavigable = function (t) {
                var e, i;
                if (((e = this.getNavigableIndexes()), (i = 0), t > e[e.length - 1])) t = e[e.length - 1];
                else
                    for (var o in e) {
                        if (t < e[o]) {
                            t = i;
                            break;
                        }
                        i = e[o];
                    }
                return t;
            }),
            (e.prototype.cleanUpEvents = function () {
                var e = this;
                e.options.dots &&
                    null !== e.$dots &&
                    (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
                    !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
                    e.$slider.off("focus.slick blur.slick"),
                    !0 === e.options.arrows &&
                        e.slideCount > e.options.slidesToShow &&
                        (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
                        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
                        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
                    e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                    e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                    e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                    e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                    e.$list.off("click.slick", e.clickHandler),
                    t(document).off(e.visibilityChange, e.visibility),
                    e.cleanUpSlideEvents(),
                    !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
                    !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
                    t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
                    t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                    t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
                    t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
            }),
            (e.prototype.cleanUpSlideEvents = function () {
                var e = this;
                e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1));
            }),
            (e.prototype.cleanUpRows = function () {
                var t,
                    e = this;
                e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t));
            }),
            (e.prototype.clickHandler = function (t) {
                !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
            }),
            (e.prototype.destroy = function (e) {
                var i = this;
                i.autoPlayClear(),
                    (i.touchObject = {}),
                    i.cleanUpEvents(),
                    t(".slick-cloned", i.$slider).detach(),
                    i.$dots && i.$dots.remove(),
                    i.$prevArrow &&
                        i.$prevArrow.length &&
                        (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
                    i.$nextArrow &&
                        i.$nextArrow.length &&
                        (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
                    i.$slides &&
                        (i.$slides
                            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                            .removeAttr("aria-hidden")
                            .removeAttr("data-slick-index")
                            .each(function () {
                                t(this).attr("style", t(this).data("originalStyling"));
                            }),
                        i.$slideTrack.children(this.options.slide).detach(),
                        i.$slideTrack.detach(),
                        i.$list.detach(),
                        i.$slider.append(i.$slides)),
                    i.cleanUpRows(),
                    i.$slider.removeClass("slick-slider"),
                    i.$slider.removeClass("slick-initialized"),
                    i.$slider.removeClass("slick-dotted"),
                    (i.unslicked = !0),
                    e || i.$slider.trigger("destroy", [i]);
            }),
            (e.prototype.disableTransition = function (t) {
                var e = this,
                    i = {};
                (i[e.transitionType] = ""), !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
            }),
            (e.prototype.fadeSlide = function (t, e) {
                var i = this;
                !1 === i.cssTransitions
                    ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }), i.$slides.eq(t).animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
                    : (i.applyTransition(t),
                      i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
                      e &&
                          setTimeout(function () {
                              i.disableTransition(t), e.call();
                          }, i.options.speed));
            }),
            (e.prototype.fadeSlideOut = function (t) {
                var e = this;
                !1 === e.cssTransitions ? e.$slides.eq(t).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
            }),
            (e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
                var e = this;
                null !== t && ((e.$slidesCache = e.$slides), e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit());
            }),
            (e.prototype.focusHandler = function () {
                var e = this;
                e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
                    i.stopImmediatePropagation();
                    var o = t(this);
                    setTimeout(function () {
                        e.options.pauseOnFocus && ((e.focussed = o.is(":focus")), e.autoPlay());
                    }, 0);
                });
            }),
            (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
                return this.currentSlide;
            }),
            (e.prototype.getDotCount = function () {
                var t = this,
                    e = 0,
                    i = 0,
                    o = 0;
                if (!0 === t.options.infinite)
                    if (t.slideCount <= t.options.slidesToShow) ++o;
                    else for (; e < t.slideCount; ) ++o, (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                else if (!0 === t.options.centerMode) o = t.slideCount;
                else if (t.options.asNavFor) for (; e < t.slideCount; ) ++o, (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                else o = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
                return o - 1;
            }),
            (e.prototype.getLeft = function (t) {
                var e,
                    i,
                    o,
                    n,
                    s = this,
                    r = 0;
                return (
                    (s.slideOffset = 0),
                    (i = s.$slides.first().outerHeight(!0)),
                    !0 === s.options.infinite
                        ? (s.slideCount > s.options.slidesToShow &&
                              ((s.slideOffset = s.slideWidth * s.options.slidesToShow * -1),
                              (n = -1),
                              !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? (n = -1.5) : 1 === s.options.slidesToShow && (n = -2)),
                              (r = i * s.options.slidesToShow * n)),
                          s.slideCount % s.options.slidesToScroll != 0 &&
                              t + s.options.slidesToScroll > s.slideCount &&
                              s.slideCount > s.options.slidesToShow &&
                              (t > s.slideCount
                                  ? ((s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1), (r = (s.options.slidesToShow - (t - s.slideCount)) * i * -1))
                                  : ((s.slideOffset = (s.slideCount % s.options.slidesToScroll) * s.slideWidth * -1), (r = (s.slideCount % s.options.slidesToScroll) * i * -1))))
                        : t + s.options.slidesToShow > s.slideCount && ((s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth), (r = (t + s.options.slidesToShow - s.slideCount) * i)),
                    s.slideCount <= s.options.slidesToShow && ((s.slideOffset = 0), (r = 0)),
                    !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow
                        ? (s.slideOffset = (s.slideWidth * Math.floor(s.options.slidesToShow)) / 2 - (s.slideWidth * s.slideCount) / 2)
                        : !0 === s.options.centerMode && !0 === s.options.infinite
                        ? (s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth)
                        : !0 === s.options.centerMode && ((s.slideOffset = 0), (s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2))),
                    (e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + r),
                    !0 === s.options.variableWidth &&
                        ((o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow)),
                        (e = !0 === s.options.rtl ? (o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0) : o[0] ? -1 * o[0].offsetLeft : 0),
                        !0 === s.options.centerMode &&
                            ((o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1)),
                            (e = !0 === s.options.rtl ? (o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0) : o[0] ? -1 * o[0].offsetLeft : 0),
                            (e += (s.$list.width() - o.outerWidth()) / 2))),
                    e
                );
            }),
            (e.prototype.getOption = e.prototype.slickGetOption = function (t) {
                return this.options[t];
            }),
            (e.prototype.getNavigableIndexes = function () {
                var t,
                    e = this,
                    i = 0,
                    o = 0,
                    n = [];
                for (!1 === e.options.infinite ? (t = e.slideCount) : ((i = -1 * e.options.slidesToScroll), (o = -1 * e.options.slidesToScroll), (t = 2 * e.slideCount)); i < t; )
                    n.push(i), (i = o + e.options.slidesToScroll), (o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                return n;
            }),
            (e.prototype.getSlick = function () {
                return this;
            }),
            (e.prototype.getSlideCount = function () {
                var e,
                    i,
                    o = this;
                return (
                    (i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0),
                    !0 === o.options.swipeToSlide
                        ? (o.$slideTrack.find(".slick-slide").each(function (n, s) {
                              if (s.offsetLeft - i + t(s).outerWidth() / 2 > -1 * o.swipeLeft) return (e = s), !1;
                          }),
                          Math.abs(t(e).attr("data-slick-index") - o.currentSlide) || 1)
                        : o.options.slidesToScroll
                );
            }),
            (e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
                this.changeSlide({ data: { message: "index", index: parseInt(t) } }, e);
            }),
            (e.prototype.init = function (e) {
                var i = this;
                t(i.$slider).hasClass("slick-initialized") ||
                    (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()),
                    e && i.$slider.trigger("init", [i]),
                    !0 === i.options.accessibility && i.initADA(),
                    i.options.autoplay && ((i.paused = !1), i.autoPlay());
            }),
            (e.prototype.initADA = function () {
                var e = this,
                    i = Math.ceil(e.slideCount / e.options.slidesToShow),
                    o = e.getNavigableIndexes().filter(function (t) {
                        return t >= 0 && t < e.slideCount;
                    });
                e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                    null !== e.$dots &&
                        (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
                            var n = o.indexOf(i);
                            t(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + i, tabindex: -1 }), -1 !== n && t(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + n });
                        }),
                        e.$dots
                            .attr("role", "tablist")
                            .find("li")
                            .each(function (n) {
                                var s = o[n];
                                t(this).attr({ role: "presentation" }),
                                    t(this)
                                        .find("button")
                                        .first()
                                        .attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + n, "aria-controls": "slick-slide" + e.instanceUid + s, "aria-label": n + 1 + " of " + i, "aria-selected": null, tabindex: "-1" });
                            })
                            .eq(e.currentSlide)
                            .find("button")
                            .attr({ "aria-selected": "true", tabindex: "0" })
                            .end());
                for (var n = e.currentSlide, s = n + e.options.slidesToShow; n < s; n++) e.$slides.eq(n).attr("tabindex", 0);
                e.activateADA();
            }),
            (e.prototype.initArrowEvents = function () {
                var t = this;
                !0 === t.options.arrows &&
                    t.slideCount > t.options.slidesToShow &&
                    (t.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, t.changeSlide),
                    t.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, t.changeSlide),
                    !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)));
            }),
            (e.prototype.initDotEvents = function () {
                var e = this;
                !0 === e.options.dots && (t("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
                    !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1));
            }),
            (e.prototype.initSlideEvents = function () {
                var e = this;
                e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)));
            }),
            (e.prototype.initializeEvents = function () {
                var e = this;
                e.initArrowEvents(),
                    e.initDotEvents(),
                    e.initSlideEvents(),
                    e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler),
                    e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler),
                    e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler),
                    e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler),
                    e.$list.on("click.slick", e.clickHandler),
                    t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
                    !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
                    !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                    t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
                    t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
                    t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                    t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                    t(e.setPosition);
            }),
            (e.prototype.initUI = function () {
                var t = this;
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show();
            }),
            (e.prototype.keyHandler = function (t) {
                var e = this;
                t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === t.keyCode && !0 === e.options.accessibility
                        ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } })
                        : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
            }),
            (e.prototype.lazyLoad = function () {
                function e(e) {
                    t("img[data-lazy]", e).each(function () {
                        var e = t(this),
                            i = t(this).attr("data-lazy"),
                            o = t(this).attr("data-srcset"),
                            n = t(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                            r = document.createElement("img");
                        (r.onload = function () {
                            e.animate({ opacity: 0 }, 100, function () {
                                o && (e.attr("srcset", o), n && e.attr("sizes", n)),
                                    e.attr("src", i).animate({ opacity: 1 }, 200, function () {
                                        e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                    }),
                                    s.$slider.trigger("lazyLoaded", [s, e, i]);
                            });
                        }),
                            (r.onerror = function () {
                                e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i]);
                            }),
                            (r.src = i);
                    });
                }
                var i,
                    o,
                    n,
                    s = this;
                if (
                    (!0 === s.options.centerMode
                        ? !0 === s.options.infinite
                            ? (n = (o = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2)
                            : ((o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1))), (n = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide))
                        : ((o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide), (n = Math.ceil(o + s.options.slidesToShow)), !0 === s.options.fade && (o > 0 && o--, n <= s.slideCount && n++)),
                    (i = s.$slider.find(".slick-slide").slice(o, n)),
                    "anticipated" === s.options.lazyLoad)
                )
                    for (var r = o - 1, a = n, l = s.$slider.find(".slick-slide"), d = 0; d < s.options.slidesToScroll; d++) r < 0 && (r = s.slideCount - 1), (i = (i = i.add(l.eq(r))).add(l.eq(a))), r--, a++;
                e(i),
                    s.slideCount <= s.options.slidesToShow
                        ? e(s.$slider.find(".slick-slide"))
                        : s.currentSlide >= s.slideCount - s.options.slidesToShow
                        ? e(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow))
                        : 0 === s.currentSlide && e(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow));
            }),
            (e.prototype.loadSlider = function () {
                var t = this;
                t.setPosition(), t.$slideTrack.css({ opacity: 1 }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
            }),
            (e.prototype.next = e.prototype.slickNext = function () {
                this.changeSlide({ data: { message: "next" } });
            }),
            (e.prototype.orientationChange = function () {
                var t = this;
                t.checkResponsive(), t.setPosition();
            }),
            (e.prototype.pause = e.prototype.slickPause = function () {
                var t = this;
                t.autoPlayClear(), (t.paused = !0);
            }),
            (e.prototype.play = e.prototype.slickPlay = function () {
                var t = this;
                t.autoPlay(), (t.options.autoplay = !0), (t.paused = !1), (t.focussed = !1), (t.interrupted = !1);
            }),
            (e.prototype.postSlide = function (e) {
                var i = this;
                i.unslicked ||
                    (i.$slider.trigger("afterChange", [i, e]),
                    (i.animating = !1),
                    i.slideCount > i.options.slidesToShow && i.setPosition(),
                    (i.swipeLeft = null),
                    i.options.autoplay && i.autoPlay(),
                    !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()));
            }),
            (e.prototype.prev = e.prototype.slickPrev = function () {
                this.changeSlide({ data: { message: "previous" } });
            }),
            (e.prototype.preventDefault = function (t) {
                t.preventDefault();
            }),
            (e.prototype.progressiveLazyLoad = function (e) {
                e = e || 1;
                var i,
                    o,
                    n,
                    s,
                    r,
                    a = this,
                    l = t("img[data-lazy]", a.$slider);
                l.length
                    ? ((i = l.first()),
                      (o = i.attr("data-lazy")),
                      (n = i.attr("data-srcset")),
                      (s = i.attr("data-sizes") || a.$slider.attr("data-sizes")),
                      ((r = document.createElement("img")).onload = function () {
                          n && (i.attr("srcset", n), s && i.attr("sizes", s)),
                              i.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                              !0 === a.options.adaptiveHeight && a.setPosition(),
                              a.$slider.trigger("lazyLoaded", [a, i, o]),
                              a.progressiveLazyLoad();
                      }),
                      (r.onerror = function () {
                          e < 3
                              ? setTimeout(function () {
                                    a.progressiveLazyLoad(e + 1);
                                }, 500)
                              : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, o]), a.progressiveLazyLoad());
                      }),
                      (r.src = o))
                    : a.$slider.trigger("allImagesLoaded", [a]);
            }),
            (e.prototype.refresh = function (e) {
                var i,
                    o,
                    n = this;
                (o = n.slideCount - n.options.slidesToShow),
                    !n.options.infinite && n.currentSlide > o && (n.currentSlide = o),
                    n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0),
                    (i = n.currentSlide),
                    n.destroy(!0),
                    t.extend(n, n.initials, { currentSlide: i }),
                    n.init(),
                    e || n.changeSlide({ data: { message: "index", index: i } }, !1);
            }),
            (e.prototype.registerBreakpoints = function () {
                var e,
                    i,
                    o,
                    n = this,
                    s = n.options.responsive || null;
                if ("array" === t.type(s) && s.length) {
                    n.respondTo = n.options.respondTo || "window";
                    for (e in s)
                        if (((o = n.breakpoints.length - 1), s.hasOwnProperty(e))) {
                            for (i = s[e].breakpoint; o >= 0; ) n.breakpoints[o] && n.breakpoints[o] === i && n.breakpoints.splice(o, 1), o--;
                            n.breakpoints.push(i), (n.breakpointSettings[i] = s[e].settings);
                        }
                    n.breakpoints.sort(function (t, e) {
                        return n.options.mobileFirst ? t - e : e - t;
                    });
                }
            }),
            (e.prototype.reinit = function () {
                var e = this;
                (e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide")),
                    (e.slideCount = e.$slides.length),
                    e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                    e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                    e.registerBreakpoints(),
                    e.setProps(),
                    e.setupInfinite(),
                    e.buildArrows(),
                    e.updateArrows(),
                    e.initArrowEvents(),
                    e.buildDots(),
                    e.updateDots(),
                    e.initDotEvents(),
                    e.cleanUpSlideEvents(),
                    e.initSlideEvents(),
                    e.checkResponsive(!1, !0),
                    !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                    e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                    e.setPosition(),
                    e.focusHandler(),
                    (e.paused = !e.options.autoplay),
                    e.autoPlay(),
                    e.$slider.trigger("reInit", [e]);
            }),
            (e.prototype.resize = function () {
                var e = this;
                t(window).width() !== e.windowWidth &&
                    (clearTimeout(e.windowDelay),
                    (e.windowDelay = window.setTimeout(function () {
                        (e.windowWidth = t(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
                    }, 50)));
            }),
            (e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
                var o = this;
                return (
                    (t = "boolean" == typeof t ? (!0 === (e = t) ? 0 : o.slideCount - 1) : !0 === e ? --t : t),
                    !(o.slideCount < 1 || t < 0 || t > o.slideCount - 1) &&
                        (o.unload(),
                        !0 === i ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(t).remove(),
                        (o.$slides = o.$slideTrack.children(this.options.slide)),
                        o.$slideTrack.children(this.options.slide).detach(),
                        o.$slideTrack.append(o.$slides),
                        (o.$slidesCache = o.$slides),
                        o.reinit(),
                        void 0)
                );
            }),
            (e.prototype.setCSS = function (t) {
                var e,
                    i,
                    o = this,
                    n = {};
                !0 === o.options.rtl && (t = -t),
                    (e = "left" == o.positionProp ? Math.ceil(t) + "px" : "0px"),
                    (i = "top" == o.positionProp ? Math.ceil(t) + "px" : "0px"),
                    (n[o.positionProp] = t),
                    !1 === o.transformsEnabled
                        ? o.$slideTrack.css(n)
                        : ((n = {}), !1 === o.cssTransitions ? ((n[o.animType] = "translate(" + e + ", " + i + ")"), o.$slideTrack.css(n)) : ((n[o.animType] = "translate3d(" + e + ", " + i + ", 0px)"), o.$slideTrack.css(n)));
            }),
            (e.prototype.setDimensions = function () {
                var t = this;
                !1 === t.options.vertical
                    ? !0 === t.options.centerMode && t.$list.css({ padding: "0px " + t.options.centerPadding })
                    : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({ padding: t.options.centerPadding + " 0px" })),
                    (t.listWidth = t.$list.width()),
                    (t.listHeight = t.$list.height()),
                    !1 === t.options.vertical && !1 === t.options.variableWidth
                        ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length)))
                        : !0 === t.options.variableWidth
                        ? t.$slideTrack.width(5e3 * t.slideCount)
                        : ((t.slideWidth = Math.ceil(t.listWidth)), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
                var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
                !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
            }),
            (e.prototype.setFade = function () {
                var e,
                    i = this;
                i.$slides.each(function (o, n) {
                    (e = i.slideWidth * o * -1),
                        !0 === i.options.rtl ? t(n).css({ position: "relative", right: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) : t(n).css({ position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 });
                }),
                    i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 });
            }),
            (e.prototype.setHeight = function () {
                var t = this;
                if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.css("height", e);
                }
            }),
            (e.prototype.setOption = e.prototype.slickSetOption = function () {
                var e,
                    i,
                    o,
                    n,
                    s,
                    r = this,
                    a = !1;
                if (
                    ("object" === t.type(arguments[0])
                        ? ((o = arguments[0]), (a = arguments[1]), (s = "multiple"))
                        : "string" === t.type(arguments[0]) &&
                          ((o = arguments[0]), (n = arguments[1]), (a = arguments[2]), "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? (s = "responsive") : void 0 !== arguments[1] && (s = "single")),
                    "single" === s)
                )
                    r.options[o] = n;
                else if ("multiple" === s)
                    t.each(o, function (t, e) {
                        r.options[t] = e;
                    });
                else if ("responsive" === s)
                    for (i in n)
                        if ("array" !== t.type(r.options.responsive)) r.options.responsive = [n[i]];
                        else {
                            for (e = r.options.responsive.length - 1; e >= 0; ) r.options.responsive[e].breakpoint === n[i].breakpoint && r.options.responsive.splice(e, 1), e--;
                            r.options.responsive.push(n[i]);
                        }
                a && (r.unload(), r.reinit());
            }),
            (e.prototype.setPosition = function () {
                var t = this;
                t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t]);
            }),
            (e.prototype.setProps = function () {
                var t = this,
                    e = document.body.style;
                (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
                    "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
                    (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) || (!0 === t.options.useCSS && (t.cssTransitions = !0)),
                    t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : (t.options.zIndex = t.defaults.zIndex)),
                    void 0 !== e.OTransform && ((t.animType = "OTransform"), (t.transformType = "-o-transform"), (t.transitionType = "OTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                    void 0 !== e.MozTransform &&
                        ((t.animType = "MozTransform"), (t.transformType = "-moz-transform"), (t.transitionType = "MozTransition"), void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
                    void 0 !== e.webkitTransform &&
                        ((t.animType = "webkitTransform"), (t.transformType = "-webkit-transform"), (t.transitionType = "webkitTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                    void 0 !== e.msTransform && ((t.animType = "msTransform"), (t.transformType = "-ms-transform"), (t.transitionType = "msTransition"), void 0 === e.msTransform && (t.animType = !1)),
                    void 0 !== e.transform && !1 !== t.animType && ((t.animType = "transform"), (t.transformType = "transform"), (t.transitionType = "transition")),
                    (t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType);
            }),
            (e.prototype.setSlideClasses = function (t) {
                var e,
                    i,
                    o,
                    n,
                    s = this;
                if (((i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode)) {
                    var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
                    (e = Math.floor(s.options.slidesToShow / 2)),
                        !0 === s.options.infinite &&
                            (t >= e && t <= s.slideCount - 1 - e
                                ? s.$slides
                                      .slice(t - e + r, t + e + 1)
                                      .addClass("slick-active")
                                      .attr("aria-hidden", "false")
                                : ((o = s.options.slidesToShow + t),
                                  i
                                      .slice(o - e + 1 + r, o + e + 2)
                                      .addClass("slick-active")
                                      .attr("aria-hidden", "false")),
                            0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")),
                        s.$slides.eq(t).addClass("slick-center");
                } else
                    t >= 0 && t <= s.slideCount - s.options.slidesToShow
                        ? s.$slides
                              .slice(t, t + s.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                        : i.length <= s.options.slidesToShow
                        ? i.addClass("slick-active").attr("aria-hidden", "false")
                        : ((n = s.slideCount % s.options.slidesToShow),
                          (o = !0 === s.options.infinite ? s.options.slidesToShow + t : t),
                          s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow
                              ? i
                                    .slice(o - (s.options.slidesToShow - n), o + n)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")
                              : i
                                    .slice(o, o + s.options.slidesToShow)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false"));
                ("ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad) || s.lazyLoad();
            }),
            (e.prototype.setupInfinite = function () {
                var e,
                    i,
                    o,
                    n = this;
                if ((!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && ((i = null), n.slideCount > n.options.slidesToShow))) {
                    for (o = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - o; e -= 1)
                        (i = e - 1),
                            t(n.$slides[i])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", i - n.slideCount)
                                .prependTo(n.$slideTrack)
                                .addClass("slick-cloned");
                    for (e = 0; e < o + n.slideCount; e += 1)
                        (i = e),
                            t(n.$slides[i])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", i + n.slideCount)
                                .appendTo(n.$slideTrack)
                                .addClass("slick-cloned");
                    n.$slideTrack
                        .find(".slick-cloned")
                        .find("[id]")
                        .each(function () {
                            t(this).attr("id", "");
                        });
                }
            }),
            (e.prototype.interrupt = function (t) {
                var e = this;
                t || e.autoPlay(), (e.interrupted = t);
            }),
            (e.prototype.selectHandler = function (e) {
                var i = this,
                    o = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                    n = parseInt(o.attr("data-slick-index"));
                n || (n = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(n, !1, !0) : i.slideHandler(n);
            }),
            (e.prototype.slideHandler = function (t, e, i) {
                var o,
                    n,
                    s,
                    r,
                    a,
                    l = null,
                    d = this;
                if (((e = e || !1), !((!0 === d.animating && !0 === d.options.waitForAnimate) || (!0 === d.options.fade && d.currentSlide === t))))
                    if (
                        (!1 === e && d.asNavFor(t),
                        (o = t),
                        (l = d.getLeft(o)),
                        (r = d.getLeft(d.currentSlide)),
                        (d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft),
                        !1 === d.options.infinite && !1 === d.options.centerMode && (t < 0 || t > d.getDotCount() * d.options.slidesToScroll))
                    )
                        !1 === d.options.fade &&
                            ((o = d.currentSlide),
                            !0 !== i
                                ? d.animateSlide(r, function () {
                                      d.postSlide(o);
                                  })
                                : d.postSlide(o));
                    else if (!1 === d.options.infinite && !0 === d.options.centerMode && (t < 0 || t > d.slideCount - d.options.slidesToScroll))
                        !1 === d.options.fade &&
                            ((o = d.currentSlide),
                            !0 !== i
                                ? d.animateSlide(r, function () {
                                      d.postSlide(o);
                                  })
                                : d.postSlide(o));
                    else {
                        if (
                            (d.options.autoplay && clearInterval(d.autoPlayTimer),
                            (n =
                                o < 0
                                    ? d.slideCount % d.options.slidesToScroll != 0
                                        ? d.slideCount - (d.slideCount % d.options.slidesToScroll)
                                        : d.slideCount + o
                                    : o >= d.slideCount
                                    ? d.slideCount % d.options.slidesToScroll != 0
                                        ? 0
                                        : o - d.slideCount
                                    : o),
                            (d.animating = !0),
                            d.$slider.trigger("beforeChange", [d, d.currentSlide, n]),
                            (s = d.currentSlide),
                            (d.currentSlide = n),
                            d.setSlideClasses(d.currentSlide),
                            d.options.asNavFor && (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide),
                            d.updateDots(),
                            d.updateArrows(),
                            !0 === d.options.fade)
                        )
                            return (
                                !0 !== i
                                    ? (d.fadeSlideOut(s),
                                      d.fadeSlide(n, function () {
                                          d.postSlide(n);
                                      }))
                                    : d.postSlide(n),
                                void d.animateHeight()
                            );
                        !0 !== i
                            ? d.animateSlide(l, function () {
                                  d.postSlide(n);
                              })
                            : d.postSlide(n);
                    }
            }),
            (e.prototype.startLoad = function () {
                var t = this;
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()),
                    !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
                    t.$slider.addClass("slick-loading");
            }),
            (e.prototype.swipeDirection = function () {
                var t,
                    e,
                    i,
                    o,
                    n = this;
                return (
                    (t = n.touchObject.startX - n.touchObject.curX),
                    (e = n.touchObject.startY - n.touchObject.curY),
                    (i = Math.atan2(e, t)),
                    (o = Math.round((180 * i) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
                    o <= 45 && o >= 0
                        ? !1 === n.options.rtl
                            ? "left"
                            : "right"
                        : o <= 360 && o >= 315
                        ? !1 === n.options.rtl
                            ? "left"
                            : "right"
                        : o >= 135 && o <= 225
                        ? !1 === n.options.rtl
                            ? "right"
                            : "left"
                        : !0 === n.options.verticalSwiping
                        ? o >= 35 && o <= 135
                            ? "down"
                            : "up"
                        : "vertical"
                );
            }),
            (e.prototype.swipeEnd = function (t) {
                var e,
                    i,
                    o = this;
                if (((o.dragging = !1), (o.swiping = !1), o.scrolling)) return (o.scrolling = !1), !1;
                if (((o.interrupted = !1), (o.shouldClick = !(o.touchObject.swipeLength > 10)), void 0 === o.touchObject.curX)) return !1;
                if ((!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe)) {
                    switch ((i = o.swipeDirection())) {
                        case "left":
                        case "down":
                            (e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount()), (o.currentDirection = 0);
                            break;
                        case "right":
                        case "up":
                            (e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount()), (o.currentDirection = 1);
                    }
                    "vertical" != i && (o.slideHandler(e), (o.touchObject = {}), o.$slider.trigger("swipe", [o, i]));
                } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), (o.touchObject = {}));
            }),
            (e.prototype.swipeHandler = function (t) {
                var e = this;
                if (!(!1 === e.options.swipe || ("ontouchend" in document && !1 === e.options.swipe) || (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))))
                    switch (
                        ((e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1),
                        (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
                        !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                        t.data.action)
                    ) {
                        case "start":
                            e.swipeStart(t);
                            break;
                        case "move":
                            e.swipeMove(t);
                            break;
                        case "end":
                            e.swipeEnd(t);
                    }
            }),
            (e.prototype.swipeMove = function (t) {
                var e,
                    i,
                    o,
                    n,
                    s,
                    r,
                    a = this;
                return (
                    (s = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
                    !(!a.dragging || a.scrolling || (s && 1 !== s.length)) &&
                        ((e = a.getLeft(a.currentSlide)),
                        (a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX),
                        (a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY),
                        (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2)))),
                        (r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
                        !a.options.verticalSwiping && !a.swiping && r > 4
                            ? ((a.scrolling = !0), !1)
                            : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r),
                              (i = a.swipeDirection()),
                              void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && ((a.swiping = !0), t.preventDefault()),
                              (n = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                              !0 === a.options.verticalSwiping && (n = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                              (o = a.touchObject.swipeLength),
                              (a.touchObject.edgeHit = !1),
                              !1 === a.options.infinite &&
                                  ((0 === a.currentSlide && "right" === i) || (a.currentSlide >= a.getDotCount() && "left" === i)) &&
                                  ((o = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                              !1 === a.options.vertical ? (a.swipeLeft = e + o * n) : (a.swipeLeft = e + o * (a.$list.height() / a.listWidth) * n),
                              !0 === a.options.verticalSwiping && (a.swipeLeft = e + o * n),
                              !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
                );
            }),
            (e.prototype.swipeStart = function (t) {
                var e,
                    i = this;
                return (
                    (i.interrupted = !0),
                    1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow
                        ? ((i.touchObject = {}), !1)
                        : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
                          (i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX),
                          (i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY),
                          (i.dragging = !0),
                          void 0)
                );
            }),
            (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
                var t = this;
                null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit());
            }),
            (e.prototype.unload = function () {
                var e = this;
                t(".slick-cloned", e.$slider).remove(),
                    e.$dots && e.$dots.remove(),
                    e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
                    e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
                    e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
            }),
            (e.prototype.unslick = function (t) {
                var e = this;
                e.$slider.trigger("unslick", [e, t]), e.destroy();
            }),
            (e.prototype.updateArrows = function () {
                var t = this;
                Math.floor(t.options.slidesToShow / 2),
                    !0 === t.options.arrows &&
                        t.slideCount > t.options.slidesToShow &&
                        !t.options.infinite &&
                        (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        0 === t.currentSlide
                            ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode
                            ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : t.currentSlide >= t.slideCount - 1 &&
                              !0 === t.options.centerMode &&
                              (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
            }),
            (e.prototype.updateDots = function () {
                var t = this;
                null !== t.$dots &&
                    (t.$dots.find("li").removeClass("slick-active").end(),
                    t.$dots
                        .find("li")
                        .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
                        .addClass("slick-active"));
            }),
            (e.prototype.visibility = function () {
                var t = this;
                t.options.autoplay && (document[t.hidden] ? (t.interrupted = !0) : (t.interrupted = !1));
            }),
            (t.fn.slick = function () {
                var t,
                    i,
                    o = this,
                    n = arguments[0],
                    s = Array.prototype.slice.call(arguments, 1),
                    r = o.length;
                for (t = 0; t < r; t++) if (("object" == typeof n || void 0 === n ? (o[t].slick = new e(o[t], n)) : (i = o[t].slick[n].apply(o[t].slick, s)), void 0 !== i)) return i;
                return o;
            });
    }),
    !(function (t, e) {
        "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : ((t = t || self).LazyLoad = e());
    })(this, function () {
        "use strict";
        var t = "undefined" != typeof window,
            e = (t && !("onscroll" in window)) || ("undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            o = t && "classList" in document.createElement("p"),
            n = {
                elements_selector: "img",
                container: e || t ? document : null,
                threshold: 300,
                thresholds: null,
                data_src: "src",
                data_srcset: "srcset",
                data_sizes: "sizes",
                data_bg: "bg",
                data_poster: "poster",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                load_delay: 0,
                auto_unobserve: !0,
                callback_enter: null,
                callback_exit: null,
                callback_reveal: null,
                callback_loaded: null,
                callback_error: null,
                callback_finish: null,
                use_native: !1,
            },
            s = function (t, e) {
                var i,
                    o = new t(e);
                try {
                    i = new CustomEvent("LazyLoad::Initialized", { detail: { instance: o } });
                } catch (t) {
                    (i = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: o });
                }
                window.dispatchEvent(i);
            },
            r = function (t, e) {
                return t.getAttribute("data-" + e);
            },
            a = function (t, e, i) {
                var o = "data-" + e;
                null !== i ? t.setAttribute(o, i) : t.removeAttribute(o);
            },
            l = function (t) {
                return "true" === r(t, "was-processed");
            },
            d = function (t, e) {
                return a(t, "ll-timeout", e);
            },
            c = function (t) {
                return r(t, "ll-timeout");
            },
            h = function (t, e, i, o) {
                t && (void 0 === o ? (void 0 === i ? t(e) : t(e, i)) : t(e, i, o));
            },
            u = function (t, e) {
                (t.loadingCount += e), 0 === t._elements.length && 0 === t.loadingCount && h(t._settings.callback_finish, t);
            },
            p = function (t) {
                for (var e, i = [], o = 0; (e = t.children[o]); o += 1) "SOURCE" === e.tagName && i.push(e);
                return i;
            },
            f = function (t, e, i) {
                i && t.setAttribute(e, i);
            },
            g = function (t, e) {
                f(t, "sizes", r(t, e.data_sizes)), f(t, "srcset", r(t, e.data_srcset)), f(t, "src", r(t, e.data_src));
            },
            m = {
                IMG: function (t, e) {
                    var i = t.parentNode;
                    i &&
                        "PICTURE" === i.tagName &&
                        p(i).forEach(function (t) {
                            g(t, e);
                        }),
                        g(t, e);
                },
                IFRAME: function (t, e) {
                    f(t, "src", r(t, e.data_src));
                },
                VIDEO: function (t, e) {
                    p(t).forEach(function (t) {
                        f(t, "src", r(t, e.data_src));
                    }),
                        f(t, "poster", r(t, e.data_poster)),
                        f(t, "src", r(t, e.data_src)),
                        t.load();
                },
            },
            v = function (t, e) {
                var i,
                    o,
                    n = e._settings,
                    s = t.tagName,
                    a = m[s];
                return a
                    ? (a(t, n),
                      u(e, 1),
                      void (e._elements =
                          ((i = e._elements),
                          (o = t),
                          i.filter(function (t) {
                              return t !== o;
                          }))))
                    : void !(function (t, e) {
                          var i = r(t, e.data_src),
                              o = r(t, e.data_bg);
                          i && (t.style.backgroundImage = 'url("'.concat(i, '")')), o && (t.style.backgroundImage = o);
                      })(t, n);
            },
            y = function (t, e) {
                o ? t.classList.add(e) : (t.className += (t.className ? " " : "") + e);
            },
            w = function (t, e) {
                o
                    ? t.classList.remove(e)
                    : (t.className = t.className
                          .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                          .replace(/^\s+/, "")
                          .replace(/\s+$/, ""));
            },
            k = function (t, e, i) {
                t.addEventListener(e, i);
            },
            b = function (t, e, i) {
                t.removeEventListener(e, i);
            },
            S = function (t, e, i) {
                b(t, "load", e), b(t, "loadeddata", e), b(t, "error", i);
            },
            T = function (t, e, i) {
                var o = i._settings,
                    n = e ? o.class_loaded : o.class_error,
                    s = e ? o.callback_loaded : o.callback_error,
                    r = t.target;
                w(r, o.class_loading), y(r, n), h(s, r, i), u(i, -1);
            },
            x = function (t, e) {
                var i = function n(i) {
                        T(i, !0, e), S(t, n, o);
                    },
                    o = function s(o) {
                        T(o, !1, e), S(t, i, s);
                    };
                !(function (t, e, i) {
                    k(t, "load", e), k(t, "loadeddata", e), k(t, "error", i);
                })(t, i, o);
            },
            C = ["IMG", "IFRAME", "VIDEO"],
            _ = function (t, e) {
                var i = e._observer;
                z(t, e), i && e._settings.auto_unobserve && i.unobserve(t);
            },
            $ = function (t) {
                var e = c(t);
                e && (clearTimeout(e), d(t, null));
            },
            E = function (t, e) {
                var i = e._settings.load_delay,
                    o = c(t);
                o ||
                    ((o = setTimeout(function () {
                        _(t, e), $(t);
                    }, i)),
                    d(t, o));
            },
            z = function (t, e, i) {
                var o = e._settings;
                (!i && l(t)) ||
                    (C.indexOf(t.tagName) > -1 && (x(t, e), y(t, o.class_loading)),
                    v(t, e),
                    (function (t) {
                        a(t, "was-processed", "true");
                    })(t),
                    h(o.callback_reveal, t, e),
                    h(o.callback_set, t, e));
            },
            P = function (t) {
                return (
                    !!i &&
                    ((t._observer = new IntersectionObserver(
                        function (e) {
                            e.forEach(function (e) {
                                return (function (t) {
                                    return t.isIntersecting || t.intersectionRatio > 0;
                                })(e)
                                    ? (function (t, e, i) {
                                          var o = i._settings;
                                          h(o.callback_enter, t, e, i), o.load_delay ? E(t, i) : _(t, i);
                                      })(e.target, e, t)
                                    : (function (t, e, i) {
                                          var o = i._settings;
                                          h(o.callback_exit, t, e, i), o.load_delay && $(t);
                                      })(e.target, e, t);
                            });
                        },
                        { root: (e = t._settings).container === document ? null : e.container, rootMargin: e.thresholds || e.threshold + "px" }
                    )),
                    !0)
                );
                var e;
            },
            A = ["IMG", "IFRAME"],
            O = function (t, e) {
                return (function (t) {
                    return t.filter(function (t) {
                        return !l(t);
                    });
                })(
                    ((i =
                        t ||
                        (function (t) {
                            return t.container.querySelectorAll(t.elements_selector);
                        })(e)),
                    Array.prototype.slice.call(i))
                );
                var i;
            },
            I = function (t) {
                var e = t._settings;
                e.container.querySelectorAll("." + e.class_error).forEach(function (t) {
                    w(t, e.class_error),
                        (function (t) {
                            a(t, "was-processed", null);
                        })(t);
                }),
                    t.update();
            },
            L = function (e, i) {
                var o;
                (this._settings = (function (t) {
                    return _extends({}, n, t);
                })(e)),
                    (this.loadingCount = 0),
                    P(this),
                    this.update(i),
                    (o = this),
                    t &&
                        window.addEventListener("online", function (t) {
                            I(o);
                        });
            };
        return (
            (L.prototype = {
                update: function (t) {
                    var i,
                        o = this,
                        n = this._settings;
                    (this._elements = O(t, n)),
                        !e && this._observer
                            ? ((function (t) {
                                  return t.use_native && "loading" in HTMLImageElement.prototype;
                              })(n) &&
                                  ((i = this)._elements.forEach(function (t) {
                                      -1 !== A.indexOf(t.tagName) && (t.setAttribute("loading", "lazy"), z(t, i));
                                  }),
                                  (this._elements = O(t, n))),
                              this._elements.forEach(function (t) {
                                  o._observer.observe(t);
                              }))
                            : this.loadAll();
                },
                destroy: function () {
                    var t = this;
                    this._observer &&
                        (this._elements.forEach(function (e) {
                            t._observer.unobserve(e);
                        }),
                        (this._observer = null)),
                        (this._elements = null),
                        (this._settings = null);
                },
                load: function (t, e) {
                    z(t, this, e);
                },
                loadAll: function () {
                    var t = this;
                    this._elements.forEach(function (e) {
                        _(e, t);
                    });
                },
            }),
            t &&
                (function (t, e) {
                    if (e)
                        if (e.length) for (var i, o = 0; (i = e[o]); o += 1) s(t, i);
                        else s(t, e);
                })(L, window.lazyLoadOptions),
            L
        );
    }),
    !(function () {
        "use strict";
        function t(o) {
            if (!o) throw new Error("No options passed to Waypoint constructor");
            if (!o.element) throw new Error("No element option passed to Waypoint constructor");
            if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
            (this.key = "waypoint-" + e),
                (this.options = t.Adapter.extend({}, t.defaults, o)),
                (this.element = this.options.element),
                (this.adapter = new t.Adapter(this.element)),
                (this.callback = o.handler),
                (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
                (this.enabled = this.options.enabled),
                (this.triggerPoint = null),
                (this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis })),
                (this.context = t.Context.findOrCreateByElement(this.options.context)),
                t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
                this.group.add(this),
                this.context.add(this),
                (i[this.key] = this),
                (e += 1);
        }
        var e = 0,
            i = {};
        (t.prototype.queueTrigger = function (t) {
            this.group.queueTrigger(this, t);
        }),
            (t.prototype.trigger = function (t) {
                this.enabled && this.callback && this.callback.apply(this, t);
            }),
            (t.prototype.destroy = function () {
                this.context.remove(this), this.group.remove(this), delete i[this.key];
            }),
            (t.prototype.disable = function () {
                return (this.enabled = !1), this;
            }),
            (t.prototype.enable = function () {
                return this.context.refresh(), (this.enabled = !0), this;
            }),
            (t.prototype.next = function () {
                return this.group.next(this);
            }),
            (t.prototype.previous = function () {
                return this.group.previous(this);
            }),
            (t.invokeAll = function (t) {
                var e = [];
                for (var o in i) e.push(i[o]);
                for (var n = 0, s = e.length; s > n; n++) e[n][t]();
            }),
            (t.destroyAll = function () {
                t.invokeAll("destroy");
            }),
            (t.disableAll = function () {
                t.invokeAll("disable");
            }),
            (t.enableAll = function () {
                t.Context.refreshAll();
                for (var e in i) i[e].enabled = !0;
                return this;
            }),
            (t.refreshAll = function () {
                t.Context.refreshAll();
            }),
            (t.viewportHeight = function () {
                return window.innerHeight || document.documentElement.clientHeight;
            }),
            (t.viewportWidth = function () {
                return document.documentElement.clientWidth;
            }),
            (t.adapters = []),
            (t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }),
            (t.offsetAliases = {
                "bottom-in-view": function () {
                    return this.context.innerHeight() - this.adapter.outerHeight();
                },
                "right-in-view": function () {
                    return this.context.innerWidth() - this.adapter.outerWidth();
                },
            }),
            (window.Waypoint = t);
    })(),
    (function () {
        "use strict";
        function t(t) {
            window.setTimeout(t, 1e3 / 60);
        }
        function e(t) {
            (this.element = t),
                (this.Adapter = n.Adapter),
                (this.adapter = new this.Adapter(t)),
                (this.key = "waypoint-context-" + i),
                (this.didScroll = !1),
                (this.didResize = !1),
                (this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }),
                (this.waypoints = { vertical: {}, horizontal: {} }),
                (t.waypointContextKey = this.key),
                (o[t.waypointContextKey] = this),
                (i += 1),
                n.windowContext || ((n.windowContext = !0), (n.windowContext = new e(window))),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
        }
        var i = 0,
            o = {},
            n = window.Waypoint,
            s = window.onload;
        (e.prototype.add = function (t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            (this.waypoints[e][t.key] = t), this.refresh();
        }),
            (e.prototype.checkEmpty = function () {
                var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                    e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                    i = this.element == this.element.window;
                t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
            }),
            (e.prototype.createThrottledResizeHandler = function () {
                function t() {
                    e.handleResize(), (e.didResize = !1);
                }
                var e = this;
                this.adapter.on("resize.waypoints", function () {
                    e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
                });
            }),
            (e.prototype.createThrottledScrollHandler = function () {
                function t() {
                    e.handleScroll(), (e.didScroll = !1);
                }
                var e = this;
                this.adapter.on("scroll.waypoints", function () {
                    (!e.didScroll || n.isTouch) && ((e.didScroll = !0), n.requestAnimationFrame(t));
                });
            }),
            (e.prototype.handleResize = function () {
                n.Context.refreshAll();
            }),
            (e.prototype.handleScroll = function () {
                var t = {},
                    e = {
                        horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" },
                        vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" },
                    };
                for (var i in e) {
                    var o = e[i],
                        n = o.newScroll > o.oldScroll,
                        s = n ? o.forward : o.backward;
                    for (var r in this.waypoints[i]) {
                        var a = this.waypoints[i][r];
                        if (null !== a.triggerPoint) {
                            var l = o.oldScroll < a.triggerPoint,
                                d = o.newScroll >= a.triggerPoint,
                                c = l && d,
                                h = !l && !d;
                            (c || h) && (a.queueTrigger(s), (t[a.group.id] = a.group));
                        }
                    }
                }
                for (var u in t) t[u].flushTriggers();
                this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
            }),
            (e.prototype.innerHeight = function () {
                return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
            }),
            (e.prototype.remove = function (t) {
                delete this.waypoints[t.axis][t.key], this.checkEmpty();
            }),
            (e.prototype.innerWidth = function () {
                return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
            }),
            (e.prototype.destroy = function () {
                var t = [];
                for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
                for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
            }),
            (e.prototype.refresh = function () {
                var t,
                    e = this.element == this.element.window,
                    i = e ? void 0 : this.adapter.offset(),
                    o = {};
                this.handleScroll(),
                    (t = {
                        horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" },
                        vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" },
                    });
                for (var s in t) {
                    var r = t[s];
                    for (var a in this.waypoints[s]) {
                        var l,
                            d,
                            c,
                            h,
                            u,
                            p = this.waypoints[s][a],
                            f = p.options.offset,
                            g = p.triggerPoint,
                            m = 0,
                            v = null == g;
                        p.element !== p.element.window && (m = p.adapter.offset()[r.offsetProp]),
                            "function" == typeof f ? (f = f.apply(p)) : "string" == typeof f && ((f = parseFloat(f)), p.options.offset.indexOf("%") > -1 && (f = Math.ceil((r.contextDimension * f) / 100))),
                            (l = r.contextScroll - r.contextOffset),
                            (p.triggerPoint = Math.floor(m + l - f)),
                            (d = g < r.oldScroll),
                            (c = p.triggerPoint >= r.oldScroll),
                            (h = d && c),
                            (u = !d && !c),
                            !v && h
                                ? (p.queueTrigger(r.backward), (o[p.group.id] = p.group))
                                : !v && u
                                ? (p.queueTrigger(r.forward), (o[p.group.id] = p.group))
                                : v && r.oldScroll >= p.triggerPoint && (p.queueTrigger(r.forward), (o[p.group.id] = p.group));
                    }
                }
                return (
                    n.requestAnimationFrame(function () {
                        for (var t in o) o[t].flushTriggers();
                    }),
                    this
                );
            }),
            (e.findOrCreateByElement = function (t) {
                return e.findByElement(t) || new e(t);
            }),
            (e.refreshAll = function () {
                for (var t in o) o[t].refresh();
            }),
            (e.findByElement = function (t) {
                return o[t.waypointContextKey];
            }),
            (window.onload = function () {
                s && s(), e.refreshAll();
            }),
            (n.requestAnimationFrame = function (e) {
                var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
                i.call(window, e);
            }),
            (n.Context = e);
    })(),
    (function () {
        "use strict";
        function t(t, e) {
            return t.triggerPoint - e.triggerPoint;
        }
        function e(t, e) {
            return e.triggerPoint - t.triggerPoint;
        }
        function i(t) {
            (this.name = t.name), (this.axis = t.axis), (this.id = this.name + "-" + this.axis), (this.waypoints = []), this.clearTriggerQueues(), (o[this.axis][this.name] = this);
        }
        var o = { vertical: {}, horizontal: {} },
            n = window.Waypoint;
        (i.prototype.add = function (t) {
            this.waypoints.push(t);
        }),
            (i.prototype.clearTriggerQueues = function () {
                this.triggerQueues = { up: [], down: [], left: [], right: [] };
            }),
            (i.prototype.flushTriggers = function () {
                for (var i in this.triggerQueues) {
                    var o = this.triggerQueues[i],
                        n = "up" === i || "left" === i;
                    o.sort(n ? e : t);
                    for (var s = 0, r = o.length; r > s; s += 1) {
                        var a = o[s];
                        (a.options.continuous || s === o.length - 1) && a.trigger([i]);
                    }
                }
                this.clearTriggerQueues();
            }),
            (i.prototype.next = function (e) {
                this.waypoints.sort(t);
                var i = n.Adapter.inArray(e, this.waypoints),
                    o = i === this.waypoints.length - 1;
                return o ? null : this.waypoints[i + 1];
            }),
            (i.prototype.previous = function (e) {
                this.waypoints.sort(t);
                var i = n.Adapter.inArray(e, this.waypoints);
                return i ? this.waypoints[i - 1] : null;
            }),
            (i.prototype.queueTrigger = function (t, e) {
                this.triggerQueues[e].push(t);
            }),
            (i.prototype.remove = function (t) {
                var e = n.Adapter.inArray(t, this.waypoints);
                e > -1 && this.waypoints.splice(e, 1);
            }),
            (i.prototype.first = function () {
                return this.waypoints[0];
            }),
            (i.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1];
            }),
            (i.findOrCreate = function (t) {
                return o[t.axis][t.name] || new i(t);
            }),
            (n.Group = i);
    })(),
    (function () {
        "use strict";
        function t(t) {
            this.$element = e(t);
        }
        var e = window.jQuery,
            i = window.Waypoint;
        e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
            t.prototype[i] = function () {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[i].apply(this.$element, t);
            };
        }),
            e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
                t[o] = e[o];
            }),
            i.adapters.push({ name: "jquery", Adapter: t }),
            (i.Adapter = t);
    })(),
    (function () {
        "use strict";
        function t(t) {
            return function () {
                var i = [],
                    o = arguments[0];
                return (
                    t.isFunction(arguments[0]) && ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
                    this.each(function () {
                        var n = t.extend({}, o, { element: this });
                        "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n));
                    }),
                    i
                );
            };
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
    })(),
    jQuery(document).ready(function (t) {
        function e(e) {
            t(e).slick({ autoplay: !0, autoplaySpeed: 4e3, arrows: !1, fade: !0, pauseOnHover: !1, pauseOnFocus: !1 });
        }
        function i(e) {
            return t(t(e).attr("href"));
        }
        if (
            (String.prototype.includes ||
                (String.prototype.includes = function (t) {
                    return "string" == typeof t && this.indexOf(t) !== -1;
                }),
            t(window).width() > 900
                ? t(window).on({
                      scroll: function () {
                          var e = t(this).scrollTop();
                          e > 50 && t("#header").addClass("logoMove--move"), t("#header").hasClass("logoMove--move") && e < 50 && (t("#header").addClass("logoMove--default"), t("#header").removeClass("logoMove--move"));
                      },
                  })
                : t("#header .icon-burger").on({
                      click: function () {
                          t("#header").toggleClass("menu-header-expand--mobile");
                      },
                  }),
            t(".js--fitvids").fitVids(),
            t("body").hasClass("home"))
        ) {
            t(".hero__slideshow .slide").length > 1 && ("yes" == t(".hero__slideshow").attr("data-disable-desktop") ? t(window).width() < 1001 && e(".hero__slideshow") : e(".hero__slideshow"));
            var o = "ontouchstart" in document.documentElement ? "touchstart" : "click";
            t(".about__container ul li").bind(o, function () {
                var e = t(this).index() + 1;
                t(".about__container ul li").removeClass("about__list--active"),
                    t(this).addClass("about__list--active"),
                    t(".about__content-container .about__content").removeClass("about__content--active"),
                    t(".about__content-container .about__content:nth-child(" + e + ")").addClass("about__content--active");
                var i = t(this).text();
                t(".about__content-selected").text(i), t(window).width() <= 1e3 && t(this).parent().removeClass("about__list--visible");
            }),
                t(".about__container .about__content-selected").on({
                    click: function (e) {
                        t(this).next().hasClass("about__list--visible") ? t(this).next().removeClass("about__list--visible") : t(this).next().addClass("about__list--visible");
                    },
                }),
                t(window).width() < 601 &&
                    (t(".services__lists").removeClass("services__lists--active"),
                    t(".services h2").on("click", function () {
                        t(".services__lists").toggleClass("services__lists--active"), Waypoint.refreshAll();
                    })),
                t(window).width() > 1e3 &&
                    (t(".hero .icon-arrow-down2").on({
                        click: function () {
                            t("html,body").animate({ scrollTop: t(window).height() + 1 }, 800);
                        },
                    }),
                    t(window).on({
                        scroll: function () {
                            t(window).scrollTop() > t(window).height() && (t(".cc-slider").hasClass("video--in-view") || (t(".cc-slider").addClass("video--in-view"), t(".video__media").get(0).play()));
                        },
                    })),
                t(".navigation-main a").on("click", function (e) {
                    t(this).attr("href").includes("#")
                        ? (e.preventDefault(), Waypoint.refreshAll(), t("html,body").animate({ scrollTop: i(this).offset().top }))
                        : "/work" == t(this).attr("href") && window.location.replace("/case-studies/work/"),
                        t(window).width() < 901 && t("#header").removeClass("menu-header-expand--mobile");
                });
            var n = 1,
                s = t("#about");
            s.waypoint(function (e) {
                "down" === e &&
                    (t(".navigation-main li").removeClass("current-menu-item"),
                    t(".navigation-main li a[href='#" + this.element.id + "']")
                        .parent()
                        .addClass("current-menu-item"));
            }),
                s.waypoint(
                    function (e) {
                        "up" === e &&
                            (t(".navigation-main li").removeClass("current-menu-item"),
                            t(".navigation-main li a[href='#" + this.element.id + "']")
                                .parent()
                                .addClass("current-menu-item"));
                    },
                    { offset: "-" + n }
                );
            var r = t("#services");
            r.waypoint(function (e) {
                "down" === e &&
                    (t(".navigation-main li").removeClass("current-menu-item"),
                    t(".navigation-main li a[href='#" + this.element.id + "']")
                        .parent()
                        .addClass("current-menu-item"));
            }),
                r.waypoint(
                    function (e) {
                        "up" === e &&
                            (t(".navigation-main li").removeClass("current-menu-item"),
                            t(".navigation-main li a[href='#" + this.element.id + "']")
                                .parent()
                                .addClass("current-menu-item"));
                    },
                    { offset: "-" + n }
                );
            var a = t("#work");
            a.waypoint(function (e) {
                "down" === e &&
                    (t(".navigation-main li").removeClass("current-menu-item"),
                    t(".navigation-main li a[href='/" + this.element.id + "']")
                        .parent()
                        .addClass("current-menu-item"));
            }),
                a.waypoint(
                    function (e) {
                        "up" === e &&
                            (t(".navigation-main li").removeClass("current-menu-item"),
                            t(".navigation-main li a[href='/" + this.element.id + "']")
                                .parent()
                                .addClass("current-menu-item"));
                    },
                    { offset: "-" + n }
                );
            var l = t("#blog");
            l.waypoint(function (e) {
                "down" === e &&
                    (t(".navigation-main li").removeClass("current-menu-item"),
                    t(".navigation-main li a[href='#" + this.element.id + "']")
                        .parent()
                        .addClass("current-menu-item"));
            }),
                l.waypoint(
                    function (e) {
                        "up" === e &&
                            (t(".navigation-main li").removeClass("current-menu-item"),
                            t(".navigation-main li a[href='#" + this.element.id + "']")
                                .parent()
                                .addClass("current-menu-item"));
                    },
                    { offset: "-" + n }
                );
            t("#contact").waypoint({
                handler: function (e) {
                    t(".navigation-main li").removeClass("current-menu-item"),
                        t(".navigation-main li a[href='#" + this.element.id + "']")
                            .parent()
                            .addClass("current-menu-item");
                },
                offset: "bottom-in-view",
            });
            t(window).on({
                scroll: function () {
                    0 == t(window).scrollTop() && (t(".navigation-main li").removeClass("current-menu-item"), t(".navigation-main li a[href='#home']").parent().addClass("current-menu-item"));
                },
            }),
                t(window).load(function () {
                    Waypoint.refreshAll();
                    var e = window.location.href,
                        i = e.includes("#");
                    if (i) {
                        var o = e.substring(e.lastIndexOf("/") + 1),
                            n = t(o).offset().top;
                        t("html,body").animate({ scrollTop: n }, 0);
                    }
                });
        } else
            t(".navigation-main ul li a").each(function () {
                var e = t(this).attr("href");
                t(this).attr("href").includes("#") ? t(this).attr("href", "/" + e) : t(this).attr("href").includes("/work") && t(this).attr("href", "/case-studies/work/");
            }),
                window.location.href.includes("case-studies") && (t(".navigation-main li").removeClass("current-menu-item"), t(".navigation-main li a[href*='/work/']").parent().addClass("current-menu-item"));
    }),
    window.addEventListener ? window.addEventListener("load", runPackery, !1) : window.attachEvent && window.attachEvent("onload", runPackery);

var mainSlider = jQuery('.slider-wrapper');
mainSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
    fadeIn: true,
    prevArrow: mainSlider.closest('.slider-section').find('.slide-prev-nav'),
    nextArrow: mainSlider.closest('.slider-section').find('.slide-next-nav'),
});
