(function () {
    try {
        !function (t) {
            function e(t, e, n) {
                n = (t = Eo(n))[1], "track" === t[0] && e({version: "0", ac: n})
            }

            function n(t, e) {
                if (!e) return !1;
                var n = _i(t);
                return new RegExp(e).test("" + n.pathname + n.hash + n.search)
            }

            function r(t, e, n, r, i) {
                n = c(t, t.document.body, n), r = c(t, t.document.body, r), Cu(i.target, [n, r]) && u(t, e)
            }

            function i(t, e, n, r) {
                (n = rm(t, r, n)) && u(t, e, n)
            }

            function o(t, e) {
                var n = a(t, e);
                return Qv(t, n)
            }

            function a(t, e) {
                var n = c(t, t.document.body, e);
                return n ? function (t, e) {
                    if (!e) return "";
                    var n = [], r = io(t, "document");
                    return W(t, e, (function (t) {
                        t.nodeType === r.TEXT_NODE && t.textContent ? n.push(t.textContent.trim()) : t instanceof HTMLImageElement && t.alt && n.push(t.alt.trim())
                    })), 0 === n.length ? "" : n.join(" ")
                }(t, n) : ""
            }

            function u(t, e, n) {
                (e = fn(t, e)) && e.params(ro(["__ym", "dr", n || no(f, So)(t)]))
            }

            function c(t, e, n) {
                var r = null;
                try {
                    r = n ? Kr(t, e, n) : r
                } catch (t) {
                }
                return r
            }

            function s(t, e, n) {
                try {
                    var r = Pi(t.atob(e));
                    return ku((function (t) {
                        return t = t.charCodeAt(0).toString(2), Kf("0", 8 - t.length) + t
                    }), r).join(n)
                } catch (t) {
                    return ""
                }
            }

            function f(t) {
                return Gr(t, 10, 99)
            }

            function h(t, e, n, r) {
                if (Ro(t = io(r, "data"))) {
                    var i = t.split("*");
                    t = i[0];
                    var o = i[1];
                    i = i[2], "sc.frame" === t ? r.source.postMessage("sc.images*" + e, "*") : "sc.image" === t && o === e && n(i)
                }
            }

            function l(t, e, n, r) {
                (r = ri("button,input", t, r = io(r, "target"))) && "submit" === r.type && (r = Ep(t, r)) && (n.push(r), Sr(t, so([!1, t, e, n, r], d), 300))
            }

            function d(t, e, n, r, i) {
                var o = Wi(e)(i, r), a = -1 !== o;
                (t || a) && (a && r.splice(o, 1), t = "?" + Ci(t = Z(e, i)), r = so([e, n, "Form goal. Counter " + n.id + ". Form: " + t + "."], p), Kl(e, n, "form", r)(t))
            }

            function p(t, e, n) {
                return Xv(t, e).then((function (r) {
                    r && Qe(t, e, n)()
                }))
            }

            function v(t) {
                return eo(t = function (t) {
                    if (!(t = Zc(t))) return "";
                    t = t("video");
                    try {
                        var e = uo("canPlayType", t), n = Ru((function (t) {
                            return ku(no(Ki, uo("concat", t + "; codecs=")), ad)
                        }), od);
                        return ku(e, [].concat(od, n))
                    } catch (t) {
                        return "canPlayType"
                    }
                }(t)) ? Ya("x", t) : t
            }

            function m(t) {
                return Ya("x", function (t) {
                    var e = io(t, "speechSynthesis.getVoices");
                    return e ? (t = tu(e, t.speechSynthesis), Ru((function (t) {
                        return ku(co(t, io), Uv)
                    }), t())) : ""
                }(t) || [])
            }

            function g(t) {
                if (t = Yf(t)) try {
                    for (var e = [], n = 0; n < zf.length; n += 1) {
                        var r = t(zf[n]);
                        e.push(r)
                    }
                    var i = e
                } catch (t) {
                    i = []
                } else i = [];
                return i ? Ya("x", i) : ""
            }

            function b(t) {
                var e = function (t) {
                    var e = io(t, "matchMedia");
                    if (!e || !Io("matchMedia", e)) return "";
                    var n = uo("matchMedia", t);
                    return iu((function (t, e) {
                        return t[e] = n("(" + e + ")"), t
                    }), {}, ud)
                }(t);
                return e ? Ya("x", ku((function (t) {
                    return t = e[t], Ya("x", ku(no(Ki, uo("concat", ""), co(t, io)), ["matches", "media"]))
                }), hu(e))) : ""
            }

            function y(t, e) {
                var n = e.Tg;
                if (!function (t, e) {
                    if (!vo(t.Float32Array)) return !1;
                    var n = io(e, "canvas");
                    if (!n || !Io("toDataUrl", n.toDataURL)) return !1;
                    try {
                        e.createBuffer()
                    } catch (t) {
                        return !1
                    }
                    return !0
                }(t, n)) return "";
                var r = [];
                t:{
                    var i = function (t, e) {
                        return [function () {
                            var n = e.createBuffer();
                            n && e.getParameter && Io("getParameter", e.getParameter) || hd(), e.bindBuffer(e.ARRAY_BUFFER, n);
                            var r = new t.Float32Array(fd);
                            e.bufferData(e.ARRAY_BUFFER, r, e.STATIC_DRAW), n.ai = 3, n.oi = 3, r = e.createProgram();
                            var i = e.createShader(e.VERTEX_SHADER);
                            return r && i || hd(), {je: r, nj: i, mj: n}
                        }, function (t) {
                            var n = t.je, r = t.nj;
                            return e.shaderSource(r, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(r), e.attachShader(n, r), (n = e.createShader(e.FRAGMENT_SHADER)) || hd(), lu(t, {xh: n})
                        }, function (t) {
                            var n = t.je, r = t.xh;
                            return e.shaderSource(r, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(r), e.attachShader(n, r), e.linkProgram(n), e.useProgram(n), t
                        }, function (t) {
                            var n = t.je;
                            return t = t.mj, n.lj = e.getAttribLocation(n, "attrVertex"), n.si = e.getUniformLocation(n, "uniformOffset"), e.enableVertexAttribArray(n.ck), e.vertexAttribPointer(n.lj, t.ai, e.FLOAT, !1, 0, 0), e.uniform2f(n.si, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, t.oi), e.canvas
                        }]
                    }(t, n);
                    try {
                        var o = so(i, no)()();
                        break t
                    } catch (t) {
                        if ("ccf" === t.message) {
                            o = null;
                            break t
                        }
                        ji(t)
                    }
                    o = void 0
                }
                if ($a(o)) var a = ""; else try {
                    a = o.toDataURL()
                } catch (t) {
                    a = ""
                }
                (o = a) && r.push(o);
                var u = n.getContextAttributes();
                try {
                    var c = No(n.getSupportedExtensions, "getSupportedExtensions") && n.getSupportedExtensions() || []
                } catch (t) {
                    c = []
                }
                c = Ya(";", c), o = _t(n.getParameter(n.ALIASED_LINE_WIDTH_RANGE), n), i = _t(n.getParameter(n.ALIASED_POINT_SIZE_RANGE), n), a = n.getParameter(n.ALPHA_BITS), u = u && u.antialias ? "yes" : "no";
                var s = n.getParameter(n.BLUE_BITS), f = n.getParameter(n.DEPTH_BITS), h = n.getParameter(n.GREEN_BITS),
                    l = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (l) {
                    var d = n.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === d && (d = 2)
                }
                w(r, d = {
                    Jj: c,
                    "webgl aliased line width range": o,
                    "webgl aliased point size range": i,
                    "webgl alpha bits": a,
                    "webgl antialiasing": u,
                    "webgl blue bits": s,
                    "webgl depth bits": f,
                    "webgl green bits": h,
                    "webgl max anisotropy": l ? d : null,
                    "webgl max combined texture image units": n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": n.getParameter(n.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": n.getParameter(n.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": n.getParameter(n.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": n.getParameter(n.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": _t(n.getParameter(n.MAX_VIEWPORT_DIMS), n),
                    "webgl red bits": n.getParameter(n.RED_BITS),
                    "webgl renderer": n.getParameter(n.RENDERER),
                    "webgl shading language version": n.getParameter(n.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": n.getParameter(n.STENCIL_BITS),
                    "webgl vendor": n.getParameter(n.VENDOR),
                    "webgl version": n.getParameter(n.VERSION)
                }, ": ");
                t:{
                    try {
                        var p = n.getExtension("WEBGL_debug_renderer_info");
                        if (p) {
                            var v = {
                                "webgl unmasked vendor": n.getParameter(p.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": n.getParameter(p.UNMASKED_RENDERER_WEBGL)
                            };
                            break t
                        }
                    } catch (t) {
                    }
                    v = {}
                }
                return w(r, v), n.getShaderPrecisionFormat ? (w(r, function (t) {
                    return iu((function (t, e) {
                        var n = e[0], r = e[1];
                        return t[n + " precision"] = io(r, "precision") || "n", t[n + " precision rangeMin"] = io(r, "rangeMin") || "n", t[n + " precision rangeMax"] = io(r, "rangeMax") || "n", t
                    }), {}, [["webgl vertex shader high float", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT)], ["webgl vertex shader medium", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT)], ["webgl vertex shader low float", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT)], ["webgl fragment shader high float", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT)], ["webgl fragment shader medium float", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT)], ["webgl fragment shader low float", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT)], ["webgl vertex shader high int", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT)], ["webgl vertex shader medium int", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT)], ["webgl vertex shader low int", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT)], ["webgl fragment shader high int", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT)], ["webgl fragment shader medium int", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT)], ["webgl fragment shader low int precision", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT)]])
                }(n)), Ya("~", r)) : Ya("~", r)
            }

            function w(t, e, n) {
                void 0 === n && (n = ":"), _u((function (e) {
                    return t.push("" + e[0] + n + e[1])
                }), fu(e))
            }

            function E(t) {
                var e = function (t) {
                    var e = io(t, "ApplePaySession"), n = _i(t).protocol;
                    return !e || "https:" !== n || Zu(t) ? "" : e
                }(t);
                return e ? iu((function (t, n, r) {
                    n = "" + (r + 1);
                    var i = e.supportsVersion;
                    return vo(i) ? i.call(e, r + 1) ? t + n : t + "0" : t
                }), "", function (t) {
                    if (0 > t) return [];
                    for (var e = [], n = 0; n <= t; n += 1) e.push(n);
                    return e
                }(19)) + e.canMakePayments() : ""
            }

            function C(t, e) {
                var n = qs(t), r = "wv2rf:" + mc(e), i = e.qb, o = vd(t), a = n.l(r), u = e.dj;
                return Za(o) || $a(a) ? Ja((function (a, c) {
                    gn(t, e, (function (e) {
                        var a = io(e, "settings.webvisor.forms");
                        a = !io(e, "settings.x3") && a, o = vd(t) || io(e, "settings.eu"), n.o(r, ff(a)), c({
                            qb: i,
                            uf: !!o,
                            Lf: a,
                            ng: u
                        })
                    }))
                })) : Un({qb: i, uf: o, Lf: !!parseInt(a, 10), ng: u})
            }

            function x(t, e, n, r) {
                function i() {
                    c || (c = !0, Fn(t, s, (function (t) {
                        o(t[0], t[1])
                    }), 20, "s.w2.sf.ms"), s = [])
                }

                function o(n, r) {
                    a(n, e, r).catch(Mr(t, "s.w2.p"))
                }

                void 0 === r && (r = Hi);
                var a = rl(t, "W", e), u = !1, c = !1, s = [], f = [];
                return Sr(t, i, 5e3), function (t, e, a, h) {
                    var l = "m" === t;
                    if (e = {
                        G: r(a),
                        H: yc(),
                        Z: e,
                        Re: !l && Bt(a),
                        tf: n
                    }, "m" === t) if (e.H.o("bt", 1), u) o(e, h); else {
                        var d = iu((function (t, e) {
                            var n = "page" === e.type && !e.L, r = "eof" === e.data.type, i = n && !!e.partNum;
                            return {hd: t.hd || i, gd: t.gd || n, fd: t.fd || r}
                        }), {gd: !1, fd: !1, hd: !1}, a);
                        t = d.gd, l = d.fd, d = d.hd, t && (d ? (f.push([e, h, a[0]]), function () {
                            var t = !1;
                            return iu((function (e, n, r) {
                                return f = Di((function (t, e) {
                                    return t[2].partNum - e[2].partNum
                                }), f), n = n[2], t = t || n.end, e && r + 1 === n.partNum
                            }), !0, f) && t
                        }() && (_u((function (t) {
                            return o(t[0], t[1])
                        }), f), u = !0, f = [])) : (u = !0, o(e, h))), c ? t || o(e, h) : (t || s.push([e, h]), (u || l) && i())
                    } else o(e, h)
                }
            }

            function A(t) {
                if (t.type && t.event) switch (t.type) {
                    case"page":
                        var e = t.data, n = e.wa, r = e.Tc, i = e.content;
                        return delete e.wa, delete e.Tc, delete e.content, e = {
                            type: "page",
                            data: {L: t.L || 0, content: i, wa: n, Tc: r, Y: e}
                        }, t.K && (e.K = t.K), e;
                    case"event":
                        t:{
                            switch (e = {
                                type: "event",
                                K: t.K,
                                data: {L: t.L, type: t.event, Y: {}}
                            }, n = lu({}, t.data), t.event) {
                                case"zoom":
                                    e.data.Y = {vg: {x: 0, y: 0, level: 0}, xg: n, duration: 1};
                                    break;
                                case"keystroke":
                                    e.data.Y = n.wc;
                                    break;
                                case"deviceRotation":
                                case"resize":
                                    e.data.Y = n;
                                    break;
                                case"windowfocus":
                                case"windowblur":
                                case"focus":
                                    e.data.target = n.target, e.data.Y = null;
                                    break;
                                case"touchmove":
                                case"touchstart":
                                case"touchend":
                                case"touchcancel":
                                case"touchforcechange":
                                case"scroll":
                                case"change":
                                case"click":
                                case"mousemove":
                                case"mousedown":
                                case"mouseup":
                                case"selection":
                                case"stylechange":
                                    e.data.target = n.target, delete n.target, e.data.Y = n;
                                    break;
                                case"srcset":
                                    t = {
                                        type: "mutation",
                                        K: t.K,
                                        data: {
                                            L: t.L,
                                            Y: {
                                                ya: [{
                                                    dd: [{
                                                        id: n.target,
                                                        pb: {src: {Ac: "", n: n.value, r: !1}},
                                                        ua: 0
                                                    }]
                                                }], index: 0
                                            }
                                        }
                                    };
                                    break t
                            }
                            t = e
                        }
                        break;
                    case"mutation":
                        return function (t) {
                            var e = lu({}, t.data), n = [];
                            switch (t.event) {
                                case"tc":
                                    n = [{d: [{id: e.target, Wb: {Ac: "", n: e.value}, ua: e.index}]}];
                                    break;
                                case"ac":
                                    n = [{
                                        dd: [{
                                            id: e.target, pb: iu((function (t, e) {
                                                var n = e[1];
                                                return t[e[0]] = {Ac: "", n: n, r: po(n)}, t
                                            }), {}, fu(e.attributes)), ua: e.index
                                        }]
                                    }];
                                    break;
                                case"re":
                                    n = [{
                                        Ke: ku((function (t) {
                                            return {id: t, ua: e.index}
                                        }), e.fa)
                                    }];
                                    break;
                                case"ad":
                                    n = [{
                                        Ne: ku((function (t) {
                                            return {
                                                id: t.id,
                                                Cf: t.name,
                                                Df: t.Bf,
                                                Xd: t.parent,
                                                $d: t.ce,
                                                Rd: t.next,
                                                pb: t.attributes,
                                                ua: e.index,
                                                Wb: t.content,
                                                La: t.hidden
                                            }
                                        }), e.fa)
                                    }]
                            }
                            return {type: "mutation", K: t.K, data: {L: t.L, Y: {ya: n, index: e.index}}}
                        }(t)
                }
                return t
            }

            function T(t, e) {
                try {
                    return Eu(no(ou("contentWindow"), qa(e)), Pi(t.document.querySelectorAll("iframe")))
                } catch (t) {
                    return null
                }
            }

            function S(t, e, n) {
                t = Ei(t, n), e.postMessage(t, "*")
            }

            function k() {
                return _() + _() + "-" + _() + "-" + _() + "-" + _() + "-" + _() + _() + _()
            }

            function _() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            function R(t, e, n, r, i) {
                void 0 === r && (r = {}), void 0 === i && (i = oi(e));
                var o = lu(iu((function (t, e) {
                    return t[e.name] = e.value, t
                }), {}, Pi(e.attributes)), r);
                return lu(o, function (t, e, n) {
                    var r = {};
                    return bt(t) ? r.value = t.value || n.value : "IMG" !== e || n.src || (r.src = ""), r
                }(e, i, o)), (r = iu((function (r, a) {
                    var u = a[0], c = M(t, e, u, a[1], n, i), s = c.value;
                    return po(s) ? delete o[u] : o[u] = s, r || c.Id
                }), !1, fu(o)) && ci(e)) && (o.width = r.width, o.height = r.height), o
            }

            function M(t, e, n, r, i, o) {
                void 0 === o && (o = oi(e));
                var a = {Id: !1, value: r};
                return bt(e) ? "value" === n ? !po(r) && "" !== r && (n = i.uf, i = i.Lf, o = Et(t, e), (i ? pt(t, e, n) : !wt(e)) || o) && (a.Id = o, a.value = Ya("", ku(co("•", Ki), ("" + r).split("")))) : "checked" === n && Cu((e.getAttribute("type") || "").toLowerCase(), Kp) && (a.value = e.checked ? "checked" : null) : "IMG" === o && "src" === n ? (o = Et(t, e)) ? (a.Id = o, a.value = qp) : a.value = (e.getAttribute("srcset") ? e.currentSrc : "") || e.src : "A" === o && "href" === n ? a.value = r ? "#" : "" : (Cu(n, ["srcset", "integrity", "crossorigin", "password"]) || 2 < n.length && 0 === _o(n, "on") || "IFRAME" === o && "src" === n || "SCRIPT" === o && Cu(n, ["src", "type"])) && (a.value = null), a
            }

            function N(t, e, n, r) {
                return void 0 === r && (r = "wv2"), {
                    F: function (i, o) {
                        return Mr(t, r + "." + n + "." + o, i, void 0, e)
                    }
                }
            }

            function I(t, e) {
                var n = xh(t), r = rl(t, "r", e), i = Mr(t, "rts.p");
                return gn(t, e, tu(iu, null, (function (t, e) {
                    var n = {id: e.$g, aa: e.aa};
                    return n = r({Z: e.Bi, H: yc(e.Pg), G: e.R, Gb: e.Gb}, n, e.Hi).catch(i), t.then(co(n, Ki))
                }), jc.resolve(""), n)).catch(i)
            }

            function D(t, e, n) {
                e = Ko(t, void 0, e);
                var r = io(e = Op(t, e.l("phc_settings") || ""), "clientId"), i = io(e, "orderId"),
                    o = io(e, "service_id"), a = io(e, "phones") || [];
                return r && i && a ? Pp(t, n.Se, {lg: P}).Nf(a).then((function (t) {
                    return function (t, e, n, r, i) {
                        var o;
                        e.sb && e.Cb && (e.sb === t.sb && e.Cb === t.Cb || lu(t, e, {
                            ga: {},
                            Va: !0
                        }), 0 < i && Ii(t.oa, [i]), _u((function (e) {
                            var n, r, i = e[0];
                            e = e[1];
                            var o = +(t.ga[i] && t.ga[i][e] ? t.ga[i][e] : 0);
                            lu(t.ga, ((n = {})[i] = ((r = {})[e] = o, r), n))
                        }), r), _u((function (e) {
                            var n, r, i = e[0];
                            e = e[1];
                            var o = 1 + (t.ga[i] ? t.ga[i][e] : 0);
                            lu(t.ga, ((n = {})[i] = ((r = {})[e] = o, r), n))
                        }), n), t.xf && (t.Va || n.length) && ((e = fn(t.b, t.Se)) && e.params("__ym", "phc", ((o = {}).clientId = t.sb, o.orderId = t.Cb, o.service_id = t.bg, o.phones = t.ga, o.performance = t.oa, o)), t.Va = !1))
                    }(n, {sb: r, Cb: i, bg: o}, t.ga, a, t.oa)
                })).catch((function () {
                })) : jc.resolve()
            }

            function P(t, e, n) {
                if (t = Ap(n.Kc), "href" === n.le) {
                    var r = n.hb;
                    if (n = (e = r.href).replace(t, n.Qa), e !== n) return r.href = n, !0
                } else if ((t = null === (r = n.hb.textContent) || void 0 === r ? void 0 : r.replace(t, n.Qa)) && t !== n.hb.textContent) return n.hb.textContent = t, !0;
                return !1
            }

            function O(t, e) {
                try {
                    var n = e.origin
                } catch (t) {
                }
                if (n) {
                    var r = Iu(no(ao, Ja(n)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]);
                    n = Cu(n.replace(/\/?$/, "/"), _p), (r || n) && ("appendremote" === io(r = Yo(t, e.data), "action") && Np(t, e, r))
                }
            }

            function L(t, e) {
                var n, r, i, o, a = e.data;
                a = void 0 === a ? "" : a;
                var u = e.id;
                u = void 0 === u ? "" : u;
                var c = mu(t), s = {};
                s.getCachedTags = fs, s.form = ((n = {}).closest = co(t, Ep), n.select = co(t, Cp), n.getData = co(t, Z), n), s.button = ((r = {}).closest = co(t, Vr), r.select = co(t, ws), r.getData = co(t, Xr), r), s.phone = ((i = {}).hidePhones = so([t, null, [a]], F), i), s.status = ((o = {}).checkStatus = so([t, parseInt(u, 10)], j), o), c.o("_u", s), n = void 0 === (n = e.lang) ? "" : n, r = void 0 === (r = e.appVersion) ? "" : r, i = void 0 === (i = e.fileId) ? "" : i, o = void 0 !== (o = e.beta) && o, r = Ya(".", no(Mu(no(Ki, parseInt)), wu(Boolean))(r.split("."))), Cu(i, Mp) && Cu(n, ["ru", "en", "tr"]) ? n = Rp(n = (o ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (r ? "/" + r : "") + "/form-selector/" + i + "_" + n + ".js") ? n : "" : n = "", n && Jr(t, {src: n})
            }

            function j(t) {
                var e, n = parseInt(B(t), 10);
                return t = mu(t).l("getCounters", Gi)(), t = ku(ou("id"), t), (e = {id: n}).counterFound = !!n && Cu(n, t), e
            }

            function B(t) {
                return function (t) {
                    return t ? no(Mu((function (t) {
                        var e = t.split("=");
                        if (t = e[1], e = e[0], po(t)) t = void 0; else {
                            var n = "";
                            try {
                                n = decodeURIComponent(t)
                            } catch (t) {
                            }
                            t = n
                        }
                        return [e, t]
                    })), oo((function (t, e) {
                        return t[e[0]] = e[1], t
                    }), {}))(t.split("&")) : {}
                }(t = _i(t).search.substring(1))["_ym_status-check"] || ""
            }

            function F(t, e, n) {
                var r;
                e = U(t, e, {lg: G, ki: (r = {}, r.href = !0, r)}), n = yu(Boolean, ku((function (t) {
                    return "*" === t ? t : Tp(t)
                }), n));
                var i = ku(no(Ki, uo("concat", [""]), nu("reverse"), Vi), n);
                r = Ar(t, n = _r(t), 1e3), e = tu(e.Nf, e, i, !1), r.C(e), function (t, e) {
                    Oc(t).C(t, ["load"], e.V)
                }(t, n), H(t, n), e()
            }

            function G(t, e, n) {
                var r = Zc(t), i = n.hb, o = n.Kc, a = i.parentNode, u = i.textContent;
                if ("text" === n.le && u && r && a) {
                    n = r("small"), kp(n);
                    var c = u.split(""), s = u.replace(/\s/g, "").length;
                    return _u(uo("appendChild", n), iu((function (t, e) {
                        var n = t.fa, i = t.sg, o = r("small");
                        o.innerHTML = e;
                        var a = Sp.test(e);
                        return kp(o), a && (o.style.opacity = "" + (s - i - 1) / s), n.push(o), {
                            fa: n,
                            sg: i + (a ? 1 : 0)
                        }
                    }), {fa: [], sg: 0}, c).fa), function (t, e, n, r) {
                        function i() {
                            if (_u(co(["style", "opacity", ""], ro), Pi(n.childNodes)), e) {
                                var i = fn(t, e);
                                i && i.extLink("tel:" + r, {})
                            }
                            a(), u()
                        }

                        var o = Oc(t), a = Po, u = Po;
                        a = o.C(n, ["mouseenter"], (function (e) {
                            if (e.target === n) {
                                var r = Sr(t, i, 200, "ph.h.e");
                                (u || Po)(), u = o.C(n, ["mouseleave"], (function (e) {
                                    e.target === n && Fi(t, r)
                                }))
                            }
                        }))
                    }(t, e, n, o), a.insertBefore(n, i), i.textContent = "", !0
                }
                return !1
            }

            function H(t, e) {
                return $(t).then((function () {
                    var n, r = t.document.body, i = ((n = {}).attributes = !0, n.childList = !0, n.subtree = !0, n);
                    Io("MutationObserver", t.MutationObserver) && new MutationObserver(e.V).observe(r, i)
                }))
            }

            function U(t, e, n) {
                function r(n) {
                    var r;
                    return a(t, e, n) ? null === (r = o[n.Kc]) || void 0 === r ? void 0 : r.Yc : null
                }

                var i, o, a = n.lg, u = void 0 === (n = n.ki) ? ((i = {}).href = !0, i.text = !0, i) : n;
                return {
                    Nf: function (e) {
                        return new jc((function (n, i) {
                            e && e.length || i(), o = V()(e), n($(t).then((function () {
                                var e = Ws(t), n = e(ur), i = u.href ? function (t, e) {
                                    var n = t.document.body;
                                    if (!n) return [];
                                    var r = q(e);
                                    return iu((function (n, i) {
                                        var o = io(i, "href");
                                        try {
                                            var a = decodeURI(o || "")
                                        } catch (t) {
                                            a = ""
                                        }
                                        if ("tel:" === a.slice(0, 4)) {
                                            var u = (r.exec(a) || [])[0], c = u ? Tp(u) : "", s = e[c];
                                            Za(s) || !c && "*" !== s.Yc[0] || (n.push({
                                                le: "href",
                                                hb: i,
                                                Kc: c,
                                                Qa: z(u, e[c].Qa),
                                                Ti: o
                                            }), o = Tp(a.slice(4)), c = V()([c ? s.Yc : [o, ""]]), n.push.apply(n, X(t, c, i)))
                                        }
                                        return n
                                    }), [], Pi(n.querySelectorAll("a")))
                                }(t, o) : [], a = u.text ? X(t, o) : [];
                                return {ga: yu(eo, yu(Boolean, ku(r, i.concat(a)))), oa: e(ur) - n}
                            })).catch((function () {
                                return {ga: [], oa: 0}
                            })))
                        }))
                    }
                }
            }

            function X(t, e, n) {
                if (void 0 === n && (n = t.document.body), !n) return [];
                var r = [], i = q(e);
                return W(t, n, (function (t) {
                    if (t !== n && "script" !== (io(t, "parentNode.nodeName") || "").toLowerCase()) {
                        var o = yu(Boolean, i.exec(t.textContent || "") || []);
                        _u((function (n) {
                            var i = Tp(n);
                            Za(e[i]) || r.push({le: "text", hb: t, Kc: i, Qa: z(n, e[i].Qa), Ti: t.textContent || ""})
                        }), o)
                    }
                }), (function (t) {
                    return i.test(t.textContent || "") ? 1 : 0
                }), t.NodeFilter.SHOW_TEXT), r
            }

            function V() {
                return oo((function (t, e) {
                    var n = ku(Tp, e), r = n[0];
                    n = n[1], t[r] = {Qa: n, Yc: e};
                    var i = Y(r);
                    return i !== r && (t[i] = {Qa: Y(n), Yc: e}), t
                }), {})
            }

            function z(t, e) {
                for (var n = [], r = t.split(""), i = e.split(""), o = 0, a = 0; a < t.length && !(o >= i.length); a += 1) {
                    var u = r[a];
                    "0" <= u && "9" >= u ? (n.push(i[o]), o += 1) : n.push(r[a])
                }
                return Ya("", n) + e.slice(o + 1)
            }

            function Y(t) {
                var e = {7: "8", 8: "7"};
                return 11 === t.length && e[t[0]] ? "" + e[t[0]] + t.slice(1) : t
            }

            function q(t) {
                return new RegExp("(?:" + Ya("|", ku(xp, hu(t))) + ")")
            }

            function K(t, e, n, r) {
                if (e) {
                    var i = [];
                    e && (t.document.documentElement.contains(e) ? W(t, e, uo("push", i), r) : Ii(i, J(t, e, r))), _u(n, i)
                }
            }

            function W(t, e, n, r, i) {
                function o(e) {
                    return vo(r) ? r(e) ? t.NodeFilter.FILTER_ACCEPT : t.NodeFilter.FILTER_REJECT : t.NodeFilter.FILTER_ACCEPT
                }

                if (void 0 === i && (i = -1), vo(n) && o(e) === t.NodeFilter.FILTER_ACCEPT && (n(e), !gi(e))) for (e = t.document.createTreeWalker(e, i, r ? {acceptNode: o} : null, !1); e.nextNode() && !1 !== n(e.currentNode);) ;
            }

            function J(t, e, n) {
                var r = [], i = no(Ki, uo("push", r));
                if (vo(n) ? (po(n = n(e)) || n === t.NodeFilter.FILTER_ACCEPT) && i(e) : i(e), e.childNodes && 0 < e.childNodes.length) {
                    n = 0;
                    for (var o = (e = e.childNodes).length; n < o; n += 1) {
                        var a = J(t, e[n]);
                        _u(i, a)
                    }
                }
                return r
            }

            function $(t, e) {
                void 0 === e && (e = t);
                var n = (e.nodeType ? "contentWindow." : "") + "document.body";
                return new jc((function r(i) {
                    io(e, n) ? i() : Sr(t, co(i, r), 100)
                }))
            }

            function Z(t, e, n) {
                return zr(t, e, ["i", "n", "p"], void 0, n)
            }

            function Q(t, e, n) {
                var r, i, o = io(n, "ecommerce") || {}, a = io(n, "event") || "";
                (o = (a = hp[a]) ? tt(a, o, "items") : void 0) || (o = n, !eo(n) && Hr(t, au(n)) && (o = Eo(o)), o = eo(o) && (t = hp[o[1]], "event" === o[0] && t) ? tt(t, o[2], "items") : void 0), (n = o || function (t) {
                    var e = io(t, "ecommerce") || {};
                    return t = yu(xu(lp), hu(e)), t = iu((function (t, n) {
                        return t[n] = e[n], t
                    }), {}, t), hu(t).length ? t : void 0
                }(n)) && e && e(((r = {}).__ym = ((i = {}).ecommerce = [n], i), r))
            }

            function tt(t, e, n) {
                var r, i;
                if (e) {
                    var o = e.purchase || e;
                    e = hu(o);
                    var a = o[n];
                    if (a) {
                        var u = ((r = {})[t] = ((i = {}).products = ku(et, a), i), r);
                        return 1 < e.length && (u[t].actionField = iu((function (t, e) {
                            return e === n ? t : "currency" === e ? (u.currencyCode = o.currency, t) : (t[fp[e] || e] = o[e], t)
                        }), {}, e)), u
                    }
                }
            }

            function et(t) {
                var e = {};
                return _u((function (n) {
                    var r = fp[n] || n;
                    -1 !== n.indexOf("item_category") ? (r = fp.item_category, e[r] = e[r] ? e[r] + "/" + t[n] : t[n]) : e[r] = t[n]
                }), hu(t)), e
            }

            function nt(t, e) {
                var n = up(t), r = mc(e), i = n[r];
                i || (i = {}, n[r] = i), i.Vh = !0, (n = i.cg) && (r = sp(t), _u(r, n))
            }

            function rt(t, e, n, r) {
                var i;
                if (t = fn(t, n)) {
                    var o = r.data;
                    n = "" + n.id;
                    var a = r.sended || [];
                    r.sended || (r.sended = a), Cu(n, a) || !t.params || r.counter && "" + r.counter !== n || (t.params(o), a.push(n), r.parent && e.$f(((i = {}).type = "params", i.data = o, i)))
                }
            }

            function it(t, e, n) {
                var r = io(t, "AppMetricaInitializer"), i = io(r, "init");
                if (i) try {
                    tu(i, r)(Ei(t, e))
                } catch (t) {
                } else _l = Sr(t, so([t, e, 2 * n], it), n, "ai.d");
                return function () {
                    return Fi(t, _l)
                }
            }

            function ot(t, e, n) {
                if (n && (n = Xr(t, n = Vr(t, n)))) {
                    n = "?" + Ci(n);
                    var r = Qe(t, e, "Button goal. Counter " + e.id + ". Button: " + n + ".");
                    Kl(t, e, "btn", r)(n)
                }
            }

            function at(t, e) {
                var n = qs(t);
                if ("" !== n.l("cc")) return 0;
                var r = co("cc", n.o);
                r(0);
                var i = Ws(t), o = mu(t);
                o = no(ou(Jd({Mc: 1}) + ".c"), Ka((function (t) {
                    r(t + "&" + i(ar))
                })), co("cc", o.o)), rl(t, "6", e)({}).then(o).catch(no(Ka((function () {
                    var t = i(ar);
                    n.o("cc", "&" + t)
                })), Mr(t, "cc")))
            }

            function ut(t, e) {
                var n;
                t(((n = {}).clickmap = !!Za(e) || e, n))
            }

            function ct(t, e, n, r, i) {
                function o() {
                    c && c.stop()
                }

                if (!e.Ra) return jc.resolve(Po);
                var a = rl(t, "4", e), u = {G: {"wv-type": "0"}, H: yc()};
                n = new gd(t, n, (function (n, r, i) {
                    if (a) {
                        r = "wv-data=" + kn(n, !0);
                        for (var o, c, s, f = n.length, h = 0, l = 255, d = 255; f;) {
                            f -= o = 21 < f ? 21 : f;
                            do {
                                c = "string" == typeof n ? n.charCodeAt(h) : n[h], h += 1, 255 < c && (s = c >> 8, c &= 255, c ^= s), d += l += c
                            } while (--o);
                            l = (255 & l) + (l >> 8), d = (255 & d) + (d >> 8)
                        }
                        a(lu({}, u, {
                            Z: r,
                            G: {
                                "wv-check": 65535 === (n = (255 & l) + (l >> 8) << 8 | (255 & d) + (d >> 8)) ? 0 : n,
                                "wv-type": "0"
                            }
                        }), e, i).catch(Mr(t, "m.n.m.s"))
                    }
                }));
                var c = function (t, e, n, r) {
                    var i = t.document, o = [], a = Oc(t), u = ":submit" + Math.random(), c = [], s = tu(e.flush, e),
                        f = yo((function (n, i) {
                            Mr(t, "hfv." + n, (function () {
                                try {
                                    var t = i.type
                                } catch (t) {
                                    return
                                }
                                t = Cu(t, r), e.push(i, {type: n}), t && s()
                            }))()
                        })), h = Mr(t, "sfv", (function () {
                            if (!vf(t)) {
                                var e = n(t), r = Ud(t);
                                _u((function (t) {
                                    o.push(a.C(t.target, [t.event], f(t.type)))
                                }), e), _u((function (e) {
                                    o.push(a.C(e.target, [e.event], Mr(t, "hff." + e.type + "." + e.event, (function (n) {
                                        _u(Ja({b: t, ha: n, flush: s}), e.M)
                                    }))))
                                }), r), c = Yr(t, "form", i), i.attachEvent && (e = Yr(t, "form *", i), _u((function (t) {
                                    o.push(a.C(t, ["submit"], f("form")))
                                }), c), _u((function (t) {
                                    is(t) && o.push(a.C(t, ["change"], f("formInput")))
                                }), e)), _u((function (e) {
                                    var n = e.submit;
                                    (vo(n) || "object" == typeof n && Yd.test("" + n)) && (e[u] = n, e.submit = Mr(t, "fv", (function () {
                                        var t = {target: e, type: "submit"};
                                        return f("document")(t), e[u]()
                                    })))
                                }), c)
                            }
                        })), l = Mr(t, "ufv", (function () {
                            _u(Vi, o), _u((function (t) {
                                t && (t.submit = t[u])
                            }), c), e.flush()
                        }));
                    return {start: h, stop: l}
                }(t, n, r, i);
                return gn(t, e, (function (e) {
                    return e && mu(t).o("isEU", io(e, "settings.eu")), !In(t) && c && st(t, e) && c.start(), o
                }))
            }

            function st(t, e) {
                var n = zs(t), r = n.l("visorc");
                Cu(r, ["w", "b"]) || (r = ""), vr(t) && gr(t, mr, "visorc") && !qd.test(Bu(t) || "") || (r = "b");
                var i = io(e, "settings.webvisor.recp");
                return (!t.isFinite(i) || 0 > i || 1 < i) && (r = "w"), r || (r = mu(t).l("hitId") % 1e4 / 1e4 < i ? "w" : "b"), n.o("visorc", r, 30), "w" === r
            }

            function ft(t, e) {
                var n = t.b, r = [], i = e.form;
                if (!e[bd] && i) {
                    var o = i.elements;
                    i = i.length;
                    for (var a = 0; a < i; a += 1) {
                        var u = o[a];
                        os(u) && !u[bd] && Ii(r, ya(n, u))
                    }
                } else Ii(r, ya(n, e));
                return r
            }

            function ht(t) {
                if (Od) {
                    Od = !1;
                    var e = rr(t.b), n = [];
                    return va(t.b, n, 15) ? t = [] : (ma(n, e), t = n), t
                }
            }

            function lt(t) {
                if (!Od) {
                    Od = !0, t = rr(t.b);
                    var e = [];
                    return pa(e, 14), ma(e, t), e
                }
            }

            function dt(t, e, n) {
                var r = e[bd];
                if (r) {
                    t:{
                        var i = rr(t), o = e[bd];
                        if (0 < o) {
                            var a = [];
                            e = ti(t, e);
                            var u = yd[o], c = e[0] + "x" + e[1], s = e[2] + "x" + e[3];
                            if (c !== u.Hf) {
                                if (u.Hf = c, va(t, a, 9)) {
                                    t = [];
                                    break t
                                }
                                ma(a, i), ma(a, o), ma(a, e[0]), ma(a, e[1])
                            }
                            if (s !== u.size) {
                                if (u.size = s, va(t, a, 10)) {
                                    t = [];
                                    break t
                                }
                                ma(a, i), ma(a, o), ma(a, e[2]), ma(a, e[3])
                            }
                            if (a.length) {
                                t = a;
                                break t
                            }
                        }
                        t = []
                    }
                    Ii(n, t)
                }
                return r
            }

            function pt(t, e, n) {
                if (void 0 === n && (n = !1), "button" === e.getAttribute("type")) return !1;
                var r = wt(e), i = mt(e);
                return t = vt(t, e) || n && i, !r && t
            }

            function vt(t, e) {
                return !(!la(t, e) && !ha(t, e)) || Et(t, e)
            }

            function mt(t) {
                if (!t) return !1;
                var e = t.placeholder, n = t.type;
                return t = yu(gt, [t.className, t.id, t.name]), n && Cu(n, Ed) || Iu(ao(_d), t) || gt(e) && Md.test(e)
            }

            function gt(t) {
                return !!(t && 2 < t.length)
            }

            function bt(t) {
                try {
                    var e = oi(t);
                    if (Cu(e, as)) {
                        if ("INPUT" === e) {
                            var n = t.type;
                            return !n || Cu(n.toLocaleLowerCase(), kd)
                        }
                        return !0
                    }
                } catch (t) {
                }
                return !1
            }

            function yt(t, e) {
                return e && pi("(ym-disable-submit|-metrika-noform)", e)
            }

            function wt(t) {
                return t && pi("ym-record-keys", t)
            }

            function Et(t, e) {
                if (po(e)) return !1;
                if (gi(e)) {
                    var n = e.parentNode;
                    return !(!po(n) && 11 === n.nodeType) && Et(t, e.parentNode)
                }
                if (Cd.test(e.className)) return !0;
                if (!(n = Qc(t))) return !1;
                var r = n.call(e, ".ym-hide-content *");
                return (!r || !xd.test(e.className) && !n.call(e, ".ym-hide-content .ym-show-content *")) && r
            }

            function Ct(t, e) {
                var n = null;
                try {
                    (n = e.target || e.srcElement) && (!n.ownerDocument && n.documentElement ? n = n.documentElement : n.ownerDocument !== t.document && (n = null))
                } catch (t) {
                }
                return n
            }

            function xt(t) {
                var e = t.which;
                return t = t.button, e || void 0 === t ? e : 1 === t || 3 === t ? 1 : 2 === t ? 3 : 4 === t ? 2 : 0
            }

            function At(t, e) {
                var n = li(t), r = si(t);
                return {
                    x: e.pageX || e.clientX + r.x - (n.clientLeft || 0) || 0,
                    y: e.pageY || e.clientY + r.y - (n.clientTop || 0) || 0
                }
            }

            function Tt(t) {
                var e = void 0;
                void 0 === e && (e = ld);
                var n = io(t, "navigator") || {};
                e = ku(co(n, io), e), e = Ya("x", e);
                try {
                    var r = No(io(t, "navigator.getGamepads"), "getGamepads") && t.navigator.getGamepads() || []
                } catch (t) {
                    r = []
                }
                return e + "x" + au(r)
            }

            function St(t) {
                try {
                    var e = au(t) ? t : [];
                    return Ya(",", [t.name, t.description, no(Pi, wu(Boolean), Mu(kt), Wa(","))(e)])
                } catch (t) {
                    return ""
                }
            }

            function kt(t) {
                return Ya(",", [t.description, t.suffixes, t.type])
            }

            function _t(t, e) {
                return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + io(t, "0") + ", " + io(t, "1") + "]"
            }

            function Rt(t) {
                return t = io(t, "screen") || {}, Ya("x", ku(co(t, io), cd))
            }

            function Mt(t) {
                return (t = io(t, "navigator") || {}).doNotTrack || t.msDoNotTrack || "unknown"
            }

            function Nt(t, e, n, r, i) {
                var o = i(ur);
                return function (t, e, n) {
                    var r = rl(t, "s", e);
                    return function (t) {
                        var e = [], n = !1;
                        return Ja((function (r, i) {
                            function o(n) {
                                e.push(n) === t.length && r(e)
                            }

                            _u((function (t) {
                                t(ef(o, (function (t) {
                                    if (!n) try {
                                        i(t), n = !0
                                    } catch (t) {
                                        o(t)
                                    }
                                })))
                            }), t)
                        }))
                    }(ku((function (t) {
                        return function (t) {
                            return Ja((function (e, n) {
                                t.then(n, e)
                            }))
                        }(r(Ql, ku((function (t) {
                            var e = t[1];
                            return "http" + (t[2] ? "s" : "") + "://" + (t = Ya("", ku((function (t) {
                                return String.fromCharCode(t.charCodeAt(0) + 10)
                            }), t[0].split("")))) + ":" + e + "/p"
                        }), t), {ug: !1, Ji: !0}).then((function (e) {
                            return lu({}, e, {host: t[e.jj]})
                        })))
                    }), n))
                }(t, n, e)(ef((function (e) {
                    _u((function (e) {
                        Pr(t, "d.s", e)
                    }), e), e = i(ar), r.o("ds", e)
                }), (function (e) {
                    var n, a, u = e.Mc, c = e.host;
                    return io(u, "settings") ? ji(Ti("ds.e")) : (r.o("ds", i(ar)), e = i(ur) - o, c = c[1], u = yc(((n = {}).di = u, n.dit = e, n.dip = c, n)), (a = {})["page-url"] = _i(t).href, n = a, rl(t, "S", td)({
                        H: u,
                        G: n
                    }, td).catch(Mr(t, "ds.rs")))
                })))
            }

            function It(t, e) {
                if (t.bj()) {
                    var n = null;
                    try {
                        n = e.target || e.srcElement
                    } catch (t) {
                    }
                    if (n) {
                        3 === n.nodeType && (n = n.parentNode);
                        for (var r = n && n.nodeName && ("" + n.nodeName).toLowerCase(); io(n, "parentNode.nodeName") && ("a" !== r && "area" !== r || !n.href && !n.getAttribute("xlink:href"));) r = (n = n.parentNode) && n.nodeName && ("" + n.nodeName).toLowerCase();
                        var i = n.href ? n : null
                    } else i = null;
                    if (i && !pi("ym-disable-tracklink", i)) {
                        var o = t.b, a = t.globalStorage;
                        n = t.ah;
                        var u = t.bh, c = t.Th, s = t.sender, f = t.oh, h = u.fc, l = i.href;
                        if (r = l === (r = To(i && i.innerHTML && i.innerHTML.replace(/<\/?[^>]+>/gi, ""))) ? "" : r, pi("ym-external-link", i)) Dt(o, u, {
                            url: l,
                            yb: !0,
                            title: r,
                            sender: s
                        }); else {
                            h = h ? Wo(o, h).hostname : _i(o).hostname, f = RegExp("\\.(" + Ya("|", ku(Ao, f)) + ")$", "i");
                            var d = i.protocol + "//" + i.hostname + i.pathname;
                            f = lf.test(d) || lf.test(l) || f.test(l) || f.test(d), i = i.hostname, Tc(h) === Tc(i) ? f ? Dt(o, u, {
                                url: l,
                                tc: !0,
                                title: r,
                                sender: s
                            }) : ((c = (o = a.l("pai", Po)()) && o + "-" + c) && n.o("pai", c), r && n.o("il", To(r).slice(0, 100))) : l && hf.test(l) || Dt(o, u, {
                                url: l,
                                yc: !0,
                                yb: !0,
                                tc: f,
                                title: r,
                                sender: s
                            })
                        }
                    }
                }
            }

            function Dt(t, e, n, r) {
                var i, o = yc();
                return n.tc && o.o("dl", "1"), n.yb && o.o("ln", "1"), o = {
                    H: o,
                    title: n.title,
                    yc: !!n.yc,
                    R: n.R,
                    G: (i = {}, i["page-url"] = n.url, i["page-ref"] = e.fc || _i(t).href, i)
                }, i = "Link", n.tc ? i = n.yb ? "Ext link - File" : "File" : n.yb && (i = "Ext link"), Ze(t, "cl.p.s", e = n.sender(o, e).then(r || Po).then(Qe(t, e, i + ". Counter " + e.id + ". Url: " + n.url, n)), n.Sa || Po, n.b)
            }

            function Pt(t, e) {
                var n, r, i = (n = {}, n.string = !0, n.object = !0, n.boolean = e, n)[typeof e] || !1;
                t(((r = {}).trackLinks = i, r))
            }

            function Ot(t, e) {
                return no(Dl(e), jt(t))
            }

            function Lt(t, e) {
                return no(Pl(e), jt(t))
            }

            function jt(t) {
                var e = (t = mu(t)).l("dsjf") || Ja({});
                return t.Ea("dsjf", e), e
            }

            function Bt(t) {
                return !!Eu((function (t) {
                    return Cu(t.type, ["articleInfo", "publishersHeader"])
                }), t)
            }

            function Ft(t) {
                var e = en(t).isEnabled, n = !1;
                try {
                    n = (n = 2 === new t.Blob(["ä"]).size) && 2 === new t.Blob([new t.Uint8Array([1, 2])]).size
                } catch (t) {
                }
                return gu(Boolean, [!e, n, t.Uint8Array, io(t, "Uint8Array.prototype.slice")])
            }

            function Gt(t, e) {
                var n = e[1][3], r = 0, i = new t.Uint8Array(e[0]);
                return Xn([n], (function (e, n) {
                    return e ? (e[0](t, e[2], i, r), r += e[1], n.push(e[3]), i) : i
                }))
            }

            function Ht(t, e, n) {
                t = e(n);
                var r = [0, e = [Po, 0, 0], e, void 0];
                return Xn(t, (function (t, e) {
                    var n = t[0], i = t[1], o = t[2];
                    if (0 === n) return o(r, i), r;
                    if (null == i) return r;
                    var a = n >> 3;
                    if (1 & n) Vt(r, He(a)), i = o(i), 2 & a && Vt(r, He(i[1])), Vt(r, i); else if (4 & n) for (n = i.length - 1; 0 <= n;) {
                        var u = o(i[n]);
                        u.push([0, 0, Xt]), u.push([0, He(a), Vt]), u.unshift([0, 0, Ut]), e.push.apply(e, u), --n
                    } else if (2 & n) {
                        o = t[2];
                        var c = t[3], s = t[4], f = t[5], h = hu(i);
                        for (n = h.length - 1; 0 <= n;) u = [[0, 0, Ut], [s, i[u = h[n]], f], [o, u, c], [0, 0, Xt], [0, He(a), Vt]], e.push.apply(e, u), --n
                    } else (u = o(i)).push([0, 0, Xt]), u.push([0, He(a), Vt]), u.unshift([0, 0, Ut]), e.push.apply(e, u);
                    return r
                }))
            }

            function Ut(t) {
                var e = t[1], n = t[0], r = t[2];
                t[3] ? (t[0] = t[3][0], t[1] = t[3][1], t[2] = t[3][2], t[3] = t[3][3]) : (t[0] = 0, t[1] = [Po, 0, 0], t[2] = t[1]), Vt(t, He(n)), n && (t[2][3] = e[3], t[2] = r, t[0] += n)
            }

            function Xt(t) {
                t[3] = [t[0], t[1], t[2], t[3]], t[1] = [Po, 0, 0], t[2] = t[1], t[0] = 0
            }

            function Vt(t, e) {
                t[0] += e[1], t[2][3] = e, t[2] = e
            }

            function zt(t) {
                return [[385, t.Ig, He], [336, t.Ei, Qt], [272, t.Lg, $t], [208, t.event, ye], [144, t.ji, we], [80, t.page, _e]]
            }

            function Yt(t) {
                return [[321, t.end, Le], [273, t.Xg, Oe], [193, t.page, Ge], [144, t.data, zt], [65, t.K, Ge]]
            }

            function qt(t) {
                return [[84, t.buffer, Yt]]
            }

            function Kt(t) {
                return [[129, t.position, Ge], [81, t.name, Pe]]
            }

            function Wt(t) {
                return [[81, t.name, Pe]]
            }

            function Jt(t) {
                return [[81, t.name, Pe]]
            }

            function $t(t) {
                return [[593, t.hj, Pe], [532, t.Ki, Kt], [449, t.Qe, Ge], [401, t.Di, Pe], [340, t.Wi, Wt], [276, t.Ng, Jt], [209, t.zi, Pe], [145, t.Ai, Pe], [65, t.id, He]]
            }

            function Zt(t) {
                return [[513, t.Qe, Ge], [489, t.gi, Be], [385, t.ab, Ge], [321, t.height, Ge], [257, t.width, Ge], [193, t.y, Ge], [129, t.x, Ge], [65, t.id, He]]
            }

            function Qt(t) {
                return [[129, t.ab, Ge], [84, t.Mg, Zt]]
            }

            function te(t) {
                return [[81, t.hash, Pe]]
            }

            function ee(t) {
                return [[209, t.stack, Pe], [145, t.Ij, Pe], [81, t.code, Pe]]
            }

            function ne(t) {
                return [[193, t.orientation, Ge], [129, t.height, Ge], [65, t.width, Ge]]
            }

            function re(t) {
                return [[84, t.wc, ie]]
            }

            function ie(t) {
                return [[273, t.xc, Pe], [193, t.wf, Le], [145, t.key, Pe], [65, t.id, Ge]]
            }

            function oe(t) {
                return [[145, t.value, Pe], [81, t.Wj, Pe]]
            }

            function ae(t) {
                return [[149, t.Ob, Pe], [81, t.method, Pe]]
            }

            function ue(t) {
                return [[257, t.fb, Ge], [193, t.gb, Ge], [129, t.height, Ge], [65, t.width, Ge]]
            }

            function ce(t) {
                return [[144, t.xg, se], [80, t.vg, se]]
            }

            function se(t) {
                return [[193, t.y, Ge], [129, t.x, Ge], [105, t.level, Be]]
            }

            function fe(t) {
                return [[84, t.touches, he]]
            }

            function he(t) {
                return [[297, t.force, Be], [233, t.y, Be], [169, t.x, Be], [81, t.id, Pe]]
            }

            function le(t) {
                return [[193, t.hidden, Le], [129, t.checked, Le], [81, t.value, Pe]]
            }

            function de(t) {
                return [[257, t.We, Ge], [193, t.dg, Ge], [129, t.end, Ge], [65, t.start, Ge]]
            }

            function pe() {
                return []
            }

            function ve(t) {
                return [[193, t.page, Le], [129, t.y, Ge], [65, t.x, Ge]]
            }

            function me(t) {
                return [[129, t.y, Ge], [65, t.x, Ge]]
            }

            function ge(t) {
                return [[84, t.ya, be]]
            }

            function be(t) {
                return [[257, t.index, Ge], [209, t.Wd, Pe], [145, t.style, Pe], [65, t.target, Ge]]
            }

            function ye(t) {
                return [[1168, t.Ri, ge], [1104, t.Sh, te], [1040, t.nh, ee], [976, t.fh, ne], [912, t.ci, re], [848, t.Gi, ue], [784, t.rj, ce], [720, t.Xj, oe], [656, t.Tj, ae], [592, t.Xi, fe], [528, t.Ug, le], [464, t.Mi, de], [400, t.oj, pe], [336, t.Li, ve], [272, t.hi, me], [193, t.L, Fe], [129, t.target, Fe], [65, t.type, He]]
            }

            function we(t) {
                return [[257, t.L, Fe], [208, t.Y, Ee], [129, t.K, Ge], [65, t.target, Ge]]
            }

            function Ee(t) {
                return [[148, t.ya, Ce], [65, t.index, Ge]]
            }

            function Ce(t) {
                return [[276, t.d, xe], [212, t.dd, Ae], [148, t.Ne, Se], [84, t.Ke, ke]]
            }

            function xe(t) {
                return [[193, t.ua, Ge], [144, t.Wb, Te], [65, t.id, Ge]]
            }

            function Ae(t) {
                return [[193, t.ua, Ge], [146, t.pb, 81, Pe, 144, Te], [65, t.id, Ge]]
            }

            function Te(t) {
                return [[193, t.r, Le], [145, t.n, Pe], [81, t.Ac, Pe]]
            }

            function Se(t) {
                return [[641, t.La, Le], [577, t.ua, Ge], [513, t.Rd, Ge], [465, t.Wb, Pe], [402, t.pb, 81, Pe, 145, Pe], [321, t.$d, Ge], [273, t.Df, Pe], [193, t.Xd, Ge], [145, t.Cf, Pe], [65, t.id, Ge]]
            }

            function ke(t) {
                return [[321, t.ua, Ge], [257, t.Xd, Ge], [193, t.Rd, Ge], [129, t.$d, Ge], [65, t.id, Ge]]
            }

            function _e(t) {
                return [[321, t.wa, je], [273, t.Tc, Pe], [193, t.L, Fe], [148, t.content, Re], [80, t.Y, Me]]
            }

            function Re(t) {
                return [[513, t.hidden, Le], [449, t.ce, Ge], [385, t.next, Ge], [337, t.content, Pe], [257, t.parent, Ge], [210, t.attributes, 81, Pe, 145, Pe], [145, t.name, Pe], [65, t.id, Ge]]
            }

            function Me(t) {
                return [[724, t.Pj, Ne], [656, t.location, Ie], [592, t.viewport, De], [528, t.screen, De], [449, t.lf, Le], [401, t.Oe, Pe], [337, t.referrer, Pe], [273, t.og, Pe], [209, t.Le, Pe], [145, t.title, Pe], [81, t.doctype, Pe]]
            }

            function Ne(t) {
                return [[133, t.scroll, Ge], [65, t.target, Ge]]
            }

            function Ie(t) {
                return [[209, t.path, Pe], [145, t.protocol, Pe], [81, t.host, Pe]]
            }

            function De(t) {
                return [[129, t.height, Ge], [65, t.width, Ge]]
            }

            function Pe(t) {
                var e = pl({}, t, [], 0);
                return e ? [dl, e, t] : [Xe, 1, 0]
            }

            function Oe(t) {
                return [Ve, t.length, t]
            }

            function Le(t) {
                return [Xe, 1, t ? 1 : 0]
            }

            function je(t) {
                var e = (t = Je(t))[0], n = t[1], r = (n >>> 28 | e << 4) >>> 0;
                return [We, 0 === (e >>>= 24) ? 0 === r ? 16384 > n ? 128 > n ? 1 : 2 : 2097152 > n ? 3 : 4 : 16384 > r ? 128 > r ? 5 : 6 : 2097152 > r ? 7 : 8 : 128 > e ? 9 : 10, t]
            }

            function Be(t) {
                return [Ye, 4, t]
            }

            function Fe(t) {
                return He((t << 1 ^ t >> 31) >>> 0)
            }

            function Ge(t) {
                return 0 > t ? [We, 10, Je(t)] : He(t)
            }

            function He(t) {
                return [Ue, 128 > t ? 1 : 16384 > t ? 2 : 2097152 > t ? 3 : 268435456 > t ? 4 : 5, t]
            }

            function Ue(t, e, n, r) {
                for (t = e; 127 < t;) n[r++] = 127 & t | 128, t >>>= 7;
                n[r] = t
            }

            function Xe(t, e, n, r) {
                n[r] = e
            }

            function Ve(t, e, n, r) {
                for (t = 0; t < e.length; ++t) n[r + t] = e[t]
            }

            function ze(t) {
                return function (e, n, r, i) {
                    for (var o, a = 0, u = 0; u < n.length; ++u) if (128 > (e = n.charCodeAt(u))) t ? a += 1 : r[i++] = e; else {
                        if (2048 > e) {
                            if (t) {
                                a += 2;
                                continue
                            }
                            r[i++] = e >> 6 | 192
                        } else {
                            if (55296 == (64512 & e) && 56320 == (64512 & (o = n.charCodeAt(u + 1)))) {
                                if (t) {
                                    a += 4;
                                    continue
                                }
                                e = 65536 + ((1023 & e) << 10) + (1023 & o), ++u, r[i++] = e >> 18 | 240, r[i++] = e >> 12 & 63 | 128
                            } else {
                                if (t) {
                                    a += 3;
                                    continue
                                }
                                r[i++] = e >> 12 | 224
                            }
                            r[i++] = e >> 6 & 63 | 128
                        }
                        r[i++] = 63 & e | 128
                    }
                    return t ? a : i
                }
            }

            function Ye(t, e, n, r) {
                return ll(t)(t, e, n, r)
            }

            function qe(t, e, n, r) {
                var i = 0 > e ? 1 : 0;
                if (i && (e = -e), 0 === e) Ke(0 < 1 / e ? 0 : 2147483648, n, r); else if (t.isNaN(e)) Ke(2143289344, n, r); else if (34028234663852886e22 < e) Ke((i << 31 | 2139095040) >>> 0, n, r); else if (11754943508222875e-54 > e) Ke((i << 31 | t.Math.round(e / 1401298464324817e-60)) >>> 0, n, r); else {
                    var o = t.Math.floor(t.Math.log(e) / Math.LN2);
                    Ke((i << 31 | o + 127 << 23 | 8388607 & Math.round(e * t.Math.pow(2, -o) * 8388608)) >>> 0, n, r)
                }
            }

            function Ke(t, e, n) {
                e[n] = 255 & t, e[n + 1] = t >>> 8 & 255, e[n + 2] = t >>> 16 & 255, e[n + 3] = t >>> 24
            }

            function We(t, e, n, r) {
                for (t = e[0], e = e[1]; t;) n[r++] = 127 & e | 128, e = (e >>> 7 | t << 25) >>> 0, t >>>= 7;
                for (; 127 < e;) n[r++] = 127 & e | 128, e >>>= 7;
                n[r++] = e
            }

            function Je(t) {
                if (!t) return [0, 0];
                var e = 0 > t;
                e && (t = -t);
                var n = t >>> 0;
                return t = (t - n) / 4294967296 >>> 0, e && (t = ~t >>> 0, n = ~n >>> 0, 4294967295 < ++n && (n = 0, 4294967295 < ++t && (t = 0))), [t, n]
            }

            function $e(t) {
                return eo(t) ? ku($e, t) : po(t) || "object" != typeof t ? t : iu((function (t, e) {
                    var n = e[0], r = e[1], i = sl[n];
                    return Za(i) && (i = n), r = Cu(i, fl) ? r : $e(r), i ? t[i] = r : t[n] = r, t
                }), {}, fu(t))
            }

            function Ze(t, e, n, r, i) {
                var o = tu(Li, null, t, r, i);
                return n.then(o, (function (n) {
                    o(), Pr(t, e, n)
                }))
            }

            function Qe(t, e, n, r) {
                return il(e) ? Po : co(so(Lo([t], r ? [n + ". Params:", r] : [n]), tn), Vi)
            }

            function tn() {
                var t = Eo(arguments), e = t.slice(1);
                ol(t[0]).log.apply(tn, e)
            }

            function en(t) {
                var e = zs(t), n = _i(t);
                return e = "1" === e.l("debug"), n = -1 < n.href.indexOf("_ym_debug=1"), {
                    Ph: e,
                    Yh: (t = t._ym_debug) || n,
                    isEnabled: Iu(Boolean, [e, t, n])
                }
            }

            function nn(t, e) {
                var n = _i(t), r = n.href, i = n.host, o = -1;
                if (!Ro(e) || Za(e)) return r;
                if (-1 !== (n = e.replace(Xa, "")).search(Uh)) return n;
                var a = n.charAt(0);
                return "?" === a && -1 === (o = r.search(/\?/)) || "#" === a && -1 === (o = r.search(/#/)) ? r + n : -1 !== o ? r.substr(0, o) + n : "/" !== a ? ((r = r.split("/"))[r.length - 1] = n, Ya("/", r)) : -1 !== (o = r.indexOf(i)) ? r.substr(0, o + i.length) + n : ""
            }

            function rn(t) {
                return {
                    ba: function (e, n) {
                        if (!e.H) return n();
                        var r = mu(t).l("fid");
                        return !Hh && r && (Br(e, "fid", r), Hh = !0), n()
                    }
                }
            }

            function on(t) {
                return {
                    ba: function (e, n) {
                        var r = e.H;
                        if (r) {
                            var i = mu(t).l("adBlockEnabled");
                            i && r.o("adb", i)
                        }
                        n()
                    }
                }
            }

            function an(t) {
                return {
                    ba: function (e, n) {
                        In(t) || n()
                    }
                }
            }

            function un(t) {
                return t = xc(t), Ih[t] || t
            }

            function cn(t, e, n) {
                return {
                    ba: function (e, r) {
                        !function (t, e, n, r) {
                            var i = e.H;
                            if (n.pj || !i) r(); else {
                                var o = Cr(t), a = Ko(t, "");
                                if (r = no((function () {
                                    var t = _h(o);
                                    t = "" + t + Mh(t, a), i.o("gdpr", t), Br(e, "gdpr", t)
                                }), r), 3 === n.id) r(); else {
                                    var u = mu(t), c = u.l("f1");
                                    if (c) c(r); else if (c = (c = _h(o)) ? ku(co(Gs, io), c.split(",")) : [], Rh(c)) r(); else {
                                        var s = kc(t), f = _i(t),
                                            h = s && (-1 !== f.href.indexOf("yagdprcheck=1") || a.l("yaGdprCheck"));
                                        f = a.l("gdpr"), a.l("yandex_login") ? (c.push("13"), a.o("gdpr", Ls, 525600)) : s ? Cu(f, Os) ? f === js ? c.push("12") : c.push("3") : Hu(t) || Xu(t) ? c.push("17") : ac(t) && c.push("28") : c.push("14");
                                        var l = co(o, xr);
                                        Rh(c) ? (_u(l, c), r()) : (kh.push(r), u.o("f1", (function (e, n) {
                                            var r = 0;
                                            n && (r += (Ei(t, n) || "").length);
                                            kh.push(e), 1e6 >= r && kh.push(e)
                                        })), (0, Ah[0])(t).then(ou("params.eu")).then((function (e) {
                                            if (e || h) {
                                                if (a.o("gdpr_popup", js), function (t, e) {
                                                    var n = Af(t, e);
                                                    n && n.$.C("isYandex", (function () {
                                                        var e;
                                                        return (e = {type: "isYandex"}).isYandex = kc(t), e
                                                    }))
                                                }(t, n), Zu(t)) return function (t, e, n) {
                                                    var r = Af(t, n);
                                                    return new jc((function (n) {
                                                        var i;
                                                        if (r) {
                                                            var o = r.$, a = no(co("4", e), co(null, n)),
                                                                u = Sr(t, a, 2e3, "gdp.f.t");
                                                            r.$f((i = {}, i.type = "isYandex", i)).then((function (t) {
                                                                t.isYandex ? (e("5"), o.C(Ya(",", Lo(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Fs)), (function (t) {
                                                                    n({value: br(t[1].type)})
                                                                }))) : (e("6"), n(null))
                                                            })).catch(a).then(so([t, u], Fi))
                                                        } else n({value: js, Jd: !0})
                                                    }))
                                                }(t, l, n);
                                                var r = yr(t, o);
                                                if (r) return (e = function (t, e, n, r) {
                                                    var i = function (t, e) {
                                                        var n = e || $u(t);
                                                        return Cu(n, Th) ? n : "en"
                                                    }(t, r.qj), o = Af(t, r);
                                                    if (!o) return jc.resolve({value: Ls, Jd: !0});
                                                    i = (r = function (t, e) {
                                                        var n = ($s(t, e) || "").slice(-1);
                                                        return n = parseInt(n, 10), !t.isNaN(n) && 1 > n
                                                    }(t, r)) ? i + "_inversed_buttons" : i, e(r ? "30" : "29");
                                                    var a = Jr(t, {src: "https://yastatic.net/s3/gdpr/popup/v2/" + i + ".js"});
                                                    return new jc((function (t, r) {
                                                        a ? (e("7"), a.onerror = function () {
                                                            var n;
                                                            e("9"), o.Zf(((n = {}).type = "GDPR-ok-view-default", n)), t(null)
                                                        }, a.onload = function () {
                                                            e("10"), n.C(Ya(",", Lo(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Fs)), (function (e) {
                                                                var n;
                                                                e = e.type, o.Zf(((n = {}).type = e, n)), t({value: br(e)})
                                                            }))
                                                        }) : (e("9"), r(Ti("gdp.e")))
                                                    }))
                                                }(t, l, r, n)).then(so([t, n], sn)), e
                                            }
                                            return e || l("8"), jc.resolve({value: Ls, Jd: !0})
                                        })).then((function (e) {
                                            if (a.Zb("gdpr_popup"), e) {
                                                var n = e.value;
                                                e = e.Jd, Cu(n, Os) && a.o("gdpr", n, e ? void 0 : 525600)
                                            }
                                            n = Xn(kh, Vi), Hn(t, n, 20)(ef(Mr(t, "gdr"), Po)), u.o("f1", Vi)
                                        })).catch(Mr(t, "gdp.a")))
                                    }
                                }
                            }
                        }(t, e, n, r)
                    }
                }
            }

            function sn(t, e) {
                if (kc(t)) {
                    var n = Cr(t), r = fn(t, e);
                    r = r && r.params, n = ku(co(Sh, io), Us(n)), r && n.length && r("gdpr", yu(Boolean, n))
                }
            }

            function fn(t, e) {
                return mu(t).l("counters", {})[mc(e)]
            }

            function hn() {
                return function (t, e, n) {
                    return {
                        ba: function (e, r) {
                            var i, o = e.H, a = e.G;
                            if (o && a) {
                                var u = Cu(a["wv-type"], Ch);
                                if (!a["wv-type"] || u) {
                                    var c = Ws(t);
                                    o.se("rqnl", 1), o = o.b();
                                    for (var s = Eh(t), f = 1; s[f];) f += 1;
                                    e.Gb = f, s[f] = ((i = {}).protocol = fc.Ja, i.host = "mc.yandex.ru", i.resource = u ? "webvisor" : "watch", i.postParams = e.Z, i.time = c(ur), i.counterType = n.aa, i.params = a, i.browserInfo = o, i.counterId = n.id, i.ghid = Nn(t), i), dn(t)
                                }
                            }
                            r()
                        }, Ha: function (e, n) {
                            ln(t, e), n()
                        }
                    }
                }
            }

            function ln(t, e) {
                var n = Eh(t);
                e.H && !$a(n) && (delete n[e.Gb], dn(t))
            }

            function dn(t) {
                var e = Eh(t);
                qs(t).o("retryReqs", e)
            }

            function pn(t, e, n) {
                var r = On(t, e, n);
                return function (e, n, i) {
                    var o;
                    (e = lu({H: yc()}, e)).G || (e.G = {});
                    var a = e.G;
                    if (a.wmode = "0", a["wv-part"] = "" + i, a["wv-hit"] = a["wv-hit"] || "" + Nn(t), a["page-url"] = a["page-url"] || t.location.href, a.rn = a.rn || "" + Gr(t), !a["wv-type"]) {
                        i = e.Re;
                        var u = "4", c = "2";
                        e.tf && (u = "5", c = "3"), a["wv-type"] = i ? u : c
                    }
                    return n = "webvisor/" + n.id, r(lu(e, {G: a}), n, {
                        Eb: (o = {}, o["Content-Type"] = "text/plain", o),
                        rg: "POST"
                    })
                }
            }

            function vn(t, e, n, r) {
                if (e = r.l("cc"), r = so(["cc", ""], r.o), e) {
                    var i = e.split("&");
                    if (e = i[0], (i = (i = i[1]) && parseInt(i, 10)) && 1440 < Ws(t)(ar) - i) return r();
                    n.o("cc", e)
                } else qa(0)(e) || r()
            }

            function mn(t, e, n, r) {
                return gn(t, e, (function (e) {
                    if ("0" === io(e, "settings.pcs") && !ju(t)) if (e = r.l("zzlc"), Za(e) || $a(e) || "na" === e) {
                        e = "ru";
                        var i = Tn(t, 68), o = Sn(t, 79);
                        if ((i || o) && (e = "md"), i = Zc(t)) {
                            var a = i("iframe");
                            if (lu(a.style, {
                                display: "none",
                                width: "1px",
                                height: "1px",
                                visibility: "hidden"
                            }), a.src = "https://mc.yandex." + e + function (t, e) {
                                void 0 === e && (e = !1);
                                var n = t, r = "", i = 0;
                                if (!n) return "";
                                for (e && (n = _n(n)); n.length % 4;) n += "=";
                                do {
                                    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n.charAt(i++)),
                                        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n.charAt(i++)),
                                        u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n.charAt(i++)),
                                        c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n.charAt(i++));
                                    if (0 > o || 0 > a || 0 > u || 0 > c) return null;
                                    var s = o << 18 | a << 12 | u << 6 | c;
                                    o = s >> 16 & 255, a = s >> 8 & 255, s &= 255, r = 64 === u ? r + String.fromCharCode(o) : 64 === c ? r + String.fromCharCode(o, a) : r + String.fromCharCode(o, a, s)
                                } while (i < n.length);
                                return r
                            }("L21ldHJpa2EvenpsYy5odG1s"), e = li(t)) {
                                e.appendChild(a);
                                var u = 0, c = Oc(t).C(t, ["message"], Mr(t, "zz.m", (function (e) {
                                    (e = io(e, "data")) && e.substr && "__ym__zz" === e.substr(0, 8) && (mi(a), e = e.substr(8), r.o("zzlc", e), n.o("zzlc", e), c(), Fi(t, u))
                                })));
                                u = Sr(t, no(c, co(a, mi)), 3e3)
                            }
                        }
                    } else n.o("zzlc", e)
                }))
            }

            function gn(t, e, n) {
                return t = mc(e), yh()(bh(t)).then(n)
            }

            function bn(t, e, n) {
                return e = mc(e), t = cr(t), n = lu({qh: t(ur)}, n), yh()(gh(e, n))
            }

            function yn(t, e, n) {
                var r, i;
                if (e = Eu(co(t, io), mh), e = Za(e) ? null : io(t, e), io(t, "navigator.onLine") && e && e && io(e, "prototype.constructor.name")) {
                    var o = new e(((r = {}).iceServers = [], r));
                    vo(t = io(o, "createDataChannel")) && (tu(t, o, "y.metrika")(), vo(t = io(o, "createOffer")) && !t.length && (vo(r = io(t = tu(t, o)(), "then")) && tu(r, t, (function (t) {
                        var e = io(o, "setLocalDescription");
                        vo(e) && tu(e, o, t, Po, Po)()
                    }))(), lu(o, ((i = {}).onicecandidate = function () {
                        var t, e = io(o, "close");
                        if (vo(e)) {
                            e = tu(e, o);
                            try {
                                var r = (t = io(o, "localDescription.sdp")) && t.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (t) {
                                return o.onicecandidate = Po, void ("closed" !== o.iceConnectionState && e())
                            }
                            r && 0 < r.length && (t = jo(r[1]), n.o("pp", t)), o.onicecandidate = Po, e()
                        }
                    }, i))))
                }
            }

            function wn(t, e, n) {
                var r, i = Ef(t, e);
                if (i) {
                    i.$.C("gpu-get", (function () {
                        var t;
                        return (t = {}).type = "gpu-get", t.pu = n.l("pu"), t
                    }));
                    var o = io(t, "opener");
                    if (o) {
                        var a = Sr(t, so([t, e, n], En), 200, "pu.m");
                        i.ne(o, ((r = {}).type = "gpu-get", r), (function (e, r) {
                            var i = io(r, "pu");
                            i && (Fi(t, a), n.o("pu", i))
                        }))
                    } else En(t, e, n)
                }
            }

            function En(t, e, n) {
                var r = io(t, "location.host");
                t = $s(t, e), n.o("pu", "" + jo(r) + t)
            }

            function Cn(t, e, n) {
                return {
                    ba: function (e, r) {
                        var i = e.H;
                        if (i && (!n || n.Yf)) {
                            var o = t.document.title;
                            e.title && (o = e.title);
                            var a = Ui("getElementsByTagName", t.document);
                            "string" != typeof o && a && (o = (o = io(o = a("title"), "0.innerHtml")) ? o : ""), o = o.slice(0, fc.Bg), i.o("t", o)
                        }
                        r()
                    }
                }
            }

            function xn(t) {
                return void 0 === t && (t = vh), function (e, n, r) {
                    return {
                        ba: function (n, i) {
                            var o = n.H, a = n.G;
                            o && a && _u((function (t) {
                                var i = sh[t], a = "bi", u = o;
                                i || (i = kf[t], a = "tel", u = Br(n)), i && (i = Rr(a + ":" + t, i, null)(e, r, n), u.se(t, i))
                            }), t), i()
                        }
                    }
                }
            }

            function An(t, e, n, r, i, o, a, u) {
                var c = n.l(o);
                return po(c) && (n.o(o, a), i(t, e, n, r), c = n.l(o, a)), Za(u) || u.se(o, "" + c), c
            }

            function Tn(t, e) {
                if (Tu(t) && e) {
                    var n = Bu(t).match(Gf);
                    if (n && n.length) return +n[1] >= e
                }
                return !1
            }

            function Sn(t, e) {
                var n = Bu(t);
                return !!(n && (n = n.match(Xf)) && 1 < n.length) && parseInt(n[1], 10) >= e
            }

            function kn(t, e) {
                void 0 === e && (e = !1);
                for (var n = t.length, r = n - n % 3, i = [], o = 0; o < r; o += 3) {
                    var a = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2];
                    i.push.apply(i, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[a >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[a >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[a >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[63 & a]])
                }
                switch (n - r) {
                    case 1:
                        n = t[r] << 4, i.push.apply(i, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[n >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[63 & n], "=", "="]);
                        break;
                    case 2:
                        n = (t[r] << 10) + (t[r + 1] << 2), i.push.apply(i, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[n >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[n >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[63 & n], "="])
                }
                return i = i.join(""), e ? _n(i, !0) : i
            }

            function _n(t, e) {
                return void 0 === e && (e = !1), t ? t.replace(e ? /[+/=]/g : /[-*_]/g, (function (t) {
                    return jf[t] || t
                })) : ""
            }

            function Rn(t, e, n) {
                return {
                    ba: function (t, e) {
                        var r = If(n), i = t.H;
                        i ? i.l("pv") && !i.l("ar") ? (r.$e = i, e()) : r.qc ? r.qc.push(e) : e() : e()
                    }, Ha: function (e, r) {
                        var i = e.H, o = e.Ii, a = If(n);
                        if (i) {
                            var u = a.qc;
                            a.$e === i && u && (o && mu(t).o("isEU", io(o, "settings.eu")), _u(Vi, u), a.qc = null)
                        }
                        r()
                    }
                }
            }

            function Mn(t, e) {
                var n = Ef(t, e), r = [], i = [];
                if (!n) return null;
                var o = Cf(t, n.ne), a = xf(o);
                return n.$.C("initToParent", (function (t) {
                    a(r, n.rb[t[1].counterId])
                })).C("parentConnect", (function (t) {
                    a(i, n.Db[t[1].counterId])
                })), {
                    $: n.$, $j: function (e, r) {
                        return new jc((function (i, o) {
                            n.ne(e, r, (function (t, e) {
                                i([t, e])
                            })), Sr(t, co(Ti(), o), 5100, "is.o")
                        }))
                    }, Zf: function (t) {
                        var e = {ag: [], Be: [], data: t};
                        return r.push(e), o(n.rb, e, t)
                    }, $f: function (t) {
                        var e = {ag: [], Be: [], data: t};
                        return i.push(e), o(n.Db, e, t)
                    }
                }
            }

            function Nn(t) {
                var e = mu(t), n = e.l("hitId");
                return n || (n = Gr(t), e.o("hitId", n)), n
            }

            function In(t) {
                return !!mu(t).l("oo") || vf(t)
            }

            function Dn(t) {
                return {
                    ba: function (e, n) {
                        var r = t.document, i = e.H;
                        if (i && Ni(t)) {
                            var o = Oc(t), a = function (e) {
                                return Ni(t) || (o.Kb(r, cf, a), n()), e
                            };
                            o.C(r, cf, a), i.o("pr", "1")
                        } else n()
                    }
                }
            }

            function Pn(t, e, n) {
                var r = On(t, e, n);
                return function (e, n) {
                    var i, o = lu({H: yc()}, e), a = o.G, u = o.H;
                    if ((i = {})["page-url"] = a && a["page-url"] || "", i.charset = "utf-8", a = i, "0" !== n.aa && (a["cnt-class"] = n.aa), i = lu(o, {G: lu(o.G || {}, a)}), o = "", i.H) {
                        a = mc(n);
                        var c = (a = Zs(n)[a] || {}).status;
                        "rt" === a.Kf && c ? (1 === c && (o = Qs(t, n) + "."), i.H.o("rt", c)) : o = ""
                    }
                    return lu(i, {nf: o}), r(i, "watch/" + n.id, {He: !(!u.l("pv") || u.l("ar") || u.l("wh"))})
                }
            }

            function On(t, e, n) {
                var r = Qn(t, e);
                return function (e, i, o) {
                    void 0 === o && (o = {});
                    var a = function (t) {
                        var e = "mc.yandex.ru", n = io(t, "document.referrer");
                        return n ? ((t = Wo(t, n).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/)) ? (t = t[0].split("yandex").reverse()[0].substring(1), t = !!Cu(t, Cc) && t) : t = !1, "mc.yandex." + (t || "ru")) : e
                    }(t);
                    return e.nf && (a = "" + e.nf + a), i = [fc.Ja + "//" + (a || "mc.yandex.ru") + "/" + i], jn(t, n, e, !0).then(so([e, i, o], r)).then((function (r) {
                        return e.Ii = r.Mc, jn(t, n, e).then(co(r.Mc, Ki))
                    }))
                }
            }

            function Ln(t) {
                return (t.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function jn(t, e, n, r) {
                return void 0 === r && (r = !1), new jc((function (t, i) {
                    function o(e, n) {
                        n(), t()
                    }

                    var a = e.slice();
                    a.push({ba: o, Ha: o});
                    var u = Xn(a, (function (t, e) {
                        var o = r ? t.ba : t.Ha;
                        if (o) try {
                            o(n, e)
                        } catch (t) {
                            u($n), i(t)
                        } else e()
                    }));
                    u(Vn)
                }))
            }

            function Bn(t, e, n) {
                var r = n || "as";
                if (t.postMessage && !t.attachEvent) {
                    n = Oc(t);
                    var i = "__ym__promise_" + Gr(t) + "_" + Gr(t), o = Po;
                    r = Mr(t, r, (function (t) {
                        try {
                            var n = t.data
                        } catch (t) {
                            return
                        }
                        n === i && (o(), t.stopPropagation && t.stopPropagation(), e())
                    })), o = n.C(t, ["message"], r), t.postMessage(i, "*")
                } else Sr(t, e, 0, r)
            }

            function Fn(t, e, n, r, i) {
                void 0 === r && (r = 1), void 0 === i && (i = "itc"), Hn(t, e = Xn(e, n), r)(ef(Mr(t, i), Po))
            }

            function Gn(t) {
                t.flush = !0
            }

            function Hn(t, e, n, r) {
                return void 0 === n && (n = 1), void 0 === r && (r = zn), Ja((function i(o, a) {
                    var u = [];
                    !function (t) {
                        af ? of.push(t) : (af = !0, t())
                    }((function c() {
                        try {
                            var s = e(r(t, n));
                            u = u.concat(s)
                        } catch (t) {
                            return o(t)
                        }
                        e(Wn), e(Zn) ? (a(u), of.length ? Sr(t, of.shift(), 100) : af = !1) : i.flush ? (e(r(t, 1e4)), a(u), of.length ? Sr(t, of.shift(), 100) : af = !1) : Sr(t, c, 100)
                    }))
                }))
            }

            function Un(t) {
                return Ja((function (e, n) {
                    n(t)
                }))
            }

            function Xn(t, e) {
                return void 0 === e && (e = Ki), Ja({Ma: t, Kd: e, ve: !1, na: 0})
            }

            function Vn(t) {
                function e() {
                    function e() {
                        n = !0, t.na += 1
                    }

                    n = !1, t.Kd(t.Ma[t.na], (function () {
                        e()
                    })), n || (t.na += 1, e = tu(Vn, null, t))
                }

                for (var n = !0; !Zn(t) && n;) e()
            }

            function zn(t, e) {
                return function (n) {
                    var r = Ws(t), i = r(ur);
                    return tf((function (t, n) {
                        r(ur) - i >= e && n(Jn)
                    }), n)
                }
            }

            function Yn(t, e) {
                return function (n) {
                    var r = Ws(t), i = r(ur);
                    return qn((function (t) {
                        r(ur) - i >= e && Jn(t)
                    }))(n)
                }
            }

            function qn(t) {
                return function (e) {
                    for (var n; e.Ma.length && !Zn(e);) n = e.Ma.pop(), n = e.Kd(n, e.Ma), t(e);
                    return n
                }
            }

            function Kn(t) {
                Zn(t) && ji(Yc("i"));
                var e = t.Kd(t.Ma[t.na]);
                return t.na += 1, e
            }

            function Wn(t) {
                t.ve = !1
            }

            function Jn(t) {
                t.ve = !0
            }

            function $n(t) {
                t.na = t.Ma.length
            }

            function Zn(t) {
                return t.ve || t.Ma.length <= t.na
            }

            function Qn(t, e) {
                return function (n, r, i) {
                    return void 0 === i && (i = {}), tr(t, e, r, n, lu(i, {za: n.za || [], Z: i.Z || n.Z}))
                }
            }

            function tr(t, e, n, r, i, o, a) {
                var u;
                void 0 === o && (o = 0), void 0 === a && (a = 0);
                var c = lu({}, i), s = e[a], f = s[0];
                s = s[1];
                var h = lu({}, r.G), l = Ws(t);
                return r.H && (h["browser-info"] = yc(r.H.b()).o("st", l(or)).Ca()), !h.t && (l = r.Uc) && (l.o("ti", f), h.t = l.Ca()), l = n[o], c.Eb && c.Eb["Content-Type"] || !c.Z || (c.Eb = lu({}, c.Eb, ((u = {})["Content-Type"] = "application/x-www-form-urlencoded", u)), c.Z = "site-info=" + xi(c.Z)), c.rg = c.Z ? "POST" : "GET", c.Fb = h, c.za.push(f), s(l + (r.li ? "/1" : ""), c).then((function (t) {
                    return {Mc: t, jj: o}
                })).catch((function (u) {
                    var c = a + 1 >= e.length, s = o + 1 >= n.length;
                    return c && s && ji(u), tr(t, e, n, r, i, !s && c ? o + 1 : o, c ? 0 : a + 1)
                }))
            }

            function er(t, e) {
                var n = e.Nd, r = n || "uid";
                n = n ? t.location.hostname : void 0;
                var i = zs(t), o = qs(t), a = Ws(t), u = a(or), c = nr(t, e), s = c[0];
                c = c[1];
                var f = i.l("d");
                Js(t, e);
                var h = !1;
                return !c && s && (c = s, h = !0), c ? (!f || 15768e3 < u - parseInt(f, 10)) && (h = !0) : (c = Ya("", [a(or), Gr(t)]), h = !0), h && !e.bb && (i.o(r, c, 525600, n), i.o("d", "" + u, 525600, n)), o.o(r, c), c
            }

            function nr(t, e) {
                var n = qs(t), r = zs(t), i = e.Nd || "uid";
                return [n.l(i), r.l(i)]
            }

            function rr(t) {
                return t = Ws(t), Math.round(t(ir) / 50)
            }

            function ir(t) {
                var e = t.oa, n = e[1];
                return t = e[0] && n ? n() : ur(t) - t.Uh, Math.round(t)
            }

            function or(t) {
                return Math.round(ur(t) / 1e3)
            }

            function ar(t) {
                return Math.floor(ur(t) / 1e3 / 60)
            }

            function ur(t) {
                var e = t.De;
                return 0 !== e ? e : Nr(t.b, t.oa)
            }

            function cr(t) {
                var e = Oc(t), n = Ir(t), r = {b: t, De: 0, oa: n, Uh: Nr(t, n)}, i = n[1];
                return n[0] && i || e.C(t, ["beforeunload", "unload"], (function () {
                    0 === r.De && (r.De = Nr(t, r.oa))
                })), Ja(r)
            }

            function sr(t) {
                return (10 > t ? "0" : "") + t
            }

            function fr(t, e, n) {
                void 0 === e && (e = ""), void 0 === n && (n = "_ym");
                var r = "" + n + e + "_";
                return {
                    Hd: Ys(t), l: function (e, n) {
                        var i = lr(t, "" + r + e);
                        return $a(i) && !Za(n) ? n : i
                    }, o: function (e, n) {
                        return hr(t, "" + r + e, n), this
                    }, Zb: function (e) {
                        return dr(t, "" + r + e), this
                    }
                }
            }

            function hr(t, e, n) {
                var r = pr(t);
                if (t = Ei(t, n), !$a(t)) try {
                    r.setItem(e, t)
                } catch (t) {
                }
            }

            function lr(t, e) {
                var n = pr(t);
                try {
                    return Yo(t, n.getItem(e))
                } catch (t) {
                }
                return null
            }

            function dr(t, e) {
                var n = pr(t);
                try {
                    n.removeItem(e)
                } catch (t) {
                }
            }

            function pr(t) {
                try {
                    return t.localStorage
                } catch (t) {
                }
                return null
            }

            function vr(t, e, n) {
                return qo(t, "metrika_enabled", "1", 0, e, n), (n = mr(t, "metrika_enabled")) && qo(t, "metrika_enabled", "", -100, e, void 0), !!n
            }

            function mr(t, e) {
                var n = null;
                try {
                    n = t.document.cookie
                } catch (t) {
                    return null
                }
                return (n = new RegExp("(?:^|;\\s*)" + e + "=([^;]*)").exec(n)) && 2 <= n.length ? decodeURIComponent(n[1]) : null
            }

            function gr(t, e, n) {
                return Cu(n, ["gdpr", "gdpr_popup", "metrika_enabled"]) ? t = !0 : (n = Cr(t), n = Us(n), t = e(t, "gdpr"), t = !!yu(xu(Hs), n).length || Cu(t, [Ls, Bs])), t
            }

            function br(t) {
                return Cu(t, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"]) ? Ls : (t = t.replace("GDPR-ok-view-detailed-", ""), Cu(t, Os) ? t : Ls)
            }

            function yr(t, e, n) {
                void 0 === n && (n = Ki);
                var r = kr(t);
                n(r);
                var i = co(r, wr);
                return Er(t, e, (function (t) {
                    t.C(i)
                })), r
            }

            function wr(t, e) {
                var n = io(e, "ymetrikaEvent");
                n && t.V(io(n, "type"), n)
            }

            function Er(t, e, n, r) {
                void 0 === n && (n = Po), void 0 === r && (r = !1);
                var i = _r(t);
                if (e && vo(e.push)) {
                    var o = e.push;
                    return e.push = function () {
                        var t = Eo(arguments), n = t[0];
                        return r && i.V(n), t = o.apply(e, t), r || i.V(n), t
                    }, n(i), _u(i.V, e), i
                }
            }

            function Cr(t) {
                var e = (t = mu(t)).l("dataLayer", []);
                return t.o("dataLayer", e), e
            }

            function xr(t, e) {
                var n, r;
                t.push(((n = {}).ymetrikaEvent = ((r = {}).type = e, r), n))
            }

            function Ar(t, e, n) {
                function r() {
                    i = 0, u && (u = !1, i = Sr(t, r, n), a.V(o))
                }

                var i, o, a = _r(t), u = !1;
                return e.C((function (t) {
                    return u = !0, o = t, i || r(), Po
                })), a
            }

            function Tr(t, e) {
                return t.clearInterval(e)
            }

            function Sr(t, e, n, r) {
                return Bi(t, Mr(t, "d.err." + (r || "def"), e), n)
            }

            function kr(t) {
                var e = {};
                return {
                    C: function (n, r) {
                        return _u((function (n) {
                            io(e, n) || (e[n] = _r(t)), e[n].C(r)
                        }), n.split(",")), this
                    }, da: function (t, n) {
                        return _u((function (t) {
                            io(e, t) && e[t].da(n)
                        }), t.split(",")), this
                    }, V: function (n, r) {
                        return iu((function (n, i) {
                            return io(e, i) ? n.concat(Mr(t, "e." + i, e[i].V)(r)) : n
                        }), [], n.split(","))
                    }
                }
            }

            function _r(t) {
                var e = [], n = {};
                return n.Sj = e, n.C = no(uo("push", e), co(n, Ki)), n.da = no(mo(Wi(t))(e), mo(uo("splice", e))(1), co(n, Ki)), n.V = no(Ki, mo(Vi), Nu(e)), n
            }

            function Rr(t, e, n) {
                return function () {
                    return Mr(arguments[0], t, e, n).apply(this, arguments)
                }
            }

            function Mr(t, e, n, r, i) {
                var o = n || ji;
                return function () {
                    var n = r;
                    try {
                        n = o.apply(i || null, arguments)
                    } catch (n) {
                        Pr(t, e, n)
                    }
                    return n
                }
            }

            function Nr(t, e) {
                var n = e || Ir(t), r = n[0];
                return n = n[1], !isNaN(r) && vo(n) ? Math.round(n() + r) : t.Date.now ? t.Date.now() : (new t.Date).getTime()
            }

            function Ir(t) {
                var e = io(t = Dr(t), "timing.navigationStart"), n = io(t, "now");
                return n && (n = tu(n, t)), [e, n]
            }

            function Dr(t) {
                return io(t, "performance") || io(t, "webkitPerformance")
            }

            function Pr(t, e, n) {
                var r, i, o, a, u;
                if (!(.01 >= t.Math.random())) {
                    var c = "u.a.e", s = "";
                    if (n && ("object" == typeof n ? (c = n.message, s = "string" == typeof n.stack && n.stack.replace(/\n/g, "\\n") || "n.s.e.s") : c = "" + n), !(Kc(c) || Iu(no(uo("indexOf", c), qa(-1), Yi), zc) || qc(c) && .1 <= t.Math.random())) {
                        (r = {}).jserrs = ((i = {})[fc.Ia] = ((o = {})[c] = ((a = {})[e] = ((u = {})[t.location.href] = s, u), a), o), i), e = r;
                        t:{
                            var f;
                            r = fc.Ja + "//mc.yandex.ru/watch/" + fc.yg;
                            try {
                                var h = Ps(t, "er")[0], l = (void 0 === h ? [] : h)[1], d = void 0 === l ? null : l
                            } catch (t) {
                                break t
                            }
                            (f = {})["browser-info"] = "ar:1:pv:1:v:" + fc.Ia + ":vf:" + Ga.version, f["page-url"] = t.location && "" + t.location.href, h = f, t = Ei(t, e), d && t && d(r, {
                                Fb: h,
                                za: [],
                                Z: "site-info=" + xi(t)
                            }).catch(Po)
                        }
                    }
                }
            }

            function Or(t) {
                return ku((function (e) {
                    return !e || Cu(e, t) ? e : 0
                }), Ss)
            }

            function Lr(t) {
                var e = io(t, "navigator.sendBeacon");
                return !(!e || !Io("sendBeacon", e) || Xu(t)) && As(t, tu(e, io(t, "navigator")))
            }

            function jr(t) {
                return !!Zc(t) && xs(t)
            }

            function Br(t, e, n) {
                return void 0 === n && (n = null), t.Uc || (t.Uc = Ts()), e && !$a(n) && t.Uc.o(e, n), t.Uc
            }

            function Fr(t, e) {
                try {
                    delete t[e]
                } catch (n) {
                    t[e] = void 0
                }
            }

            function Gr(t, e, n) {
                var r = Za(n);
                return Za(e) && r ? (r = 1, e = 1073741824) : r ? r = 1 : (r = e, e = n), t.Math.floor(t.Math.random() * (e - r)) + r
            }

            function Hr(t, e) {
                return t.isFinite(e) && !t.isNaN(e) && "[object Number]" === Mo(e)
            }

            function Ur(t) {
                var e = Zc(t);
                return !!e && Cs(t, e)
            }

            function Xr(t, e, n) {
                var r = oi(e);
                return r && zr(t, e, yu(Boolean, ["p", Es[r], "c"]), ws(t), n)
            }

            function Vr(t, e) {
                var n = ri(ys, t, e);
                if (!n) {
                    var r = ri("div", t, e);
                    r && (Wr(ys + ",div", t, r).length || (n = r))
                }
                return n
            }

            function zr(t, e, n, r, i) {
                return iu((function (n, o) {
                    var a = null;
                    return o in vs ? a = e.getAttribute && e.getAttribute(vs[o]) : o in ms && (a = "p" === o ? ms[o](t, e, i) : "c" === o ? ms[o](t, e, r) : ms[o](t, e)), a && (a = a.slice(0, ds[o] || 100), n[o] = ps[o] ? "" + jo(a) : a), n
                }), {}, n)
            }

            function Yr(t, e, n) {
                if (t.document.querySelectorAll && Io("querySelectorAll", io(t, "Element.prototype.querySelectorAll"))) return Pi(n.querySelectorAll(e));
                var r = qr(e.split(" "), n);
                return yu((function (e, n) {
                    return Wi(t)(e, r) === n
                }), r)
            }

            function qr(t, e) {
                var n = Lo(t), r = n.shift();
                return r ? (r = e.getElementsByTagName(r), n.length ? Ru(co(n, qr), Pi(r)) : Pi(r)) : []
            }

            function Kr(t, e, n) {
                return (t = Wr(n, t, e)) && t.length ? t[0] : null
            }

            function Wr(t, e, n) {
                return n && (t = n.querySelectorAll(t)) ? Pi(t) : []
            }

            function Jr(t, e) {
                var n = t.document, r = lu({type: "text/javascript", charset: "utf-8", async: !0}, e), i = Zc(t);
                if (i) {
                    var o = i("script");
                    uu(fu, Mu((function (t) {
                        var e = t[0];
                        t = t[1], "async" === e && t ? o.async = !0 : o[e] = t
                    })))(r);
                    try {
                        var a = Ui("getElementsByTagName", n), u = a("head")[0];
                        if (!u) {
                            var c = a("html")[0];
                            u = i("head"), c && c.appendChild(u)
                        }
                        return u.insertBefore(o, u.firstChild), o
                    } catch (t) {
                    }
                }
            }

            function $r(t, e, n) {
                for (var r = "", i = fs(), o = oi(e) || "*"; e && e.parentNode && !Cu(o, ["BODY", "HTML"]);) r += i[o] || "*", r += Zr(t, e, n) || "", o = oi(e = e.parentElement) || "*";
                return To(r, 128)
            }

            function Zr(t, e, n) {
                if (t = Qr(t, e)) {
                    t = t.childNodes;
                    for (var r = e && e.nodeName, i = 0, o = 0; o < t.length; o += 1) if (r === (t[o] && t[o].nodeName)) {
                        if (e === t[o]) return i;
                        n && t[o] === n || (i += 1)
                    }
                }
                return 0
            }

            function Qr(t, e) {
                var n = io(t, "document");
                if (!e || e === n.documentElement) return null;
                if (e === di(t)) return n.documentElement;
                n = null;
                try {
                    n = e.parentNode
                } catch (t) {
                }
                return n
            }

            function ti(t, e) {
                var n = ni(t, e), r = n.left;
                n = n.top;
                var i = ei(t, e);
                return [r, n, i[0], i[1]]
            }

            function ei(t, e) {
                var n = io(t, "document");
                if (e === di(t) || e === n.documentElement) {
                    n = li(t);
                    var r = fi(t);
                    return [Math.max(n.scrollWidth, r[0]), Math.max(n.scrollHeight, r[1])]
                }
                return (n = ci(e)) ? [n.width, n.height] : [e.offsetWidth, e.offsetHeight]
            }

            function ni(t, e) {
                var n = e, r = io(t, "document"), i = oi(n);
                if (!n || !n.ownerDocument || "PARAM" === i || n === di(t) || n === r.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (r = n.getBoundingClientRect && ci(n)) return n = si(t), {
                    left: Math.round(r.left + n.x),
                    top: Math.round(r.top + n.y)
                };
                for (i = r = 0; n;) r += n.offsetLeft, i += n.offsetTop, n = n.offsetParent;
                return {left: r, top: i}
            }

            function ri(t, e, n) {
                if (!(e && e.Element && e.Element.prototype && e.document)) return null;
                if (e.Element.prototype.closest && Io("closest", e.Element.prototype.closest) && n.closest) return n.closest(t);
                var r = Qc(e);
                if (r) {
                    for (; n && 1 === n.nodeType && !r.call(n, t);) n = n.parentElement || n.parentNode;
                    return n && 1 === n.nodeType ? n : null
                }
                if (e.document.querySelectorAll && Io("querySelectorAll", io(e, "Element.prototype.querySelectorAll"))) {
                    for (t = Pi((e.document || e.ownerDocument).querySelectorAll(t)); n && 1 === n.nodeType && -1 === Wi(e)(n, t);) n = n.parentElement || n.parentNode;
                    return n && 1 === n.nodeType ? n : null
                }
                return null
            }

            function ii(t) {
                return ts(t) && !Iu(qa(t.type), us) ? rs(t) ? !t.checked : !t.value : es(t) ? !t.value : !ns(t) || 0 > t.selectedIndex
            }

            function oi(t) {
                if (t) try {
                    var e = t.nodeName;
                    if (Ro(e)) return e;
                    if (Ro(e = t.tagName)) return e
                } catch (t) {
                }
            }

            function ai(t, e) {
                var n = t.document.getElementsByTagName("form");
                return Wi(t)(e, Pi(n))
            }

            function ui(t, e, n) {
                n = Ui("dispatchEvent", n || t.document);
                var r = null, i = io(t, "Event.prototype.constructor");
                if (i && (Io("(Event|Object|constructor)", i) || Wu(t) && "[object Event]" == "" + i)) try {
                    r = new t.Event(e)
                } catch (n) {
                    if ((t = Ui("createEvent", io(t, "document"))) && vo(t)) {
                        try {
                            r = t(e)
                        } catch (t) {
                        }
                        r && r.initEvent && r.initEvent(e, !1, !1)
                    }
                }
                r && n(r)
            }

            function ci(t) {
                try {
                    return t.getBoundingClientRect && t.getBoundingClientRect()
                } catch (t) {
                    return "object" == typeof t && null !== t && 16389 === (t.Ef && 65535 & t.Ef) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function si(t) {
                var e = di(t), n = io(t, "document");
                return {
                    x: t.pageXOffset || n.documentElement && n.documentElement.scrollLeft || e && e.scrollLeft || 0,
                    y: t.pageYOffset || n.documentElement && n.documentElement.scrollTop || e && e.scrollTop || 0
                }
            }

            function fi(t) {
                var e = hi(t);
                if (e) {
                    var n = e[2];
                    return [t.Math.round(e[0] * n), t.Math.round(e[1] * n)]
                }
                return [io(e = li(t), "clientWidth") || t.innerWidth, io(e, "clientHeight") || t.innerHeight]
            }

            function hi(t) {
                var e = io(t, "visualViewport.width"), n = io(t, "visualViewport.height");
                return t = io(t, "visualViewport.scale"), po(e) || po(n) ? null : [Math.floor(e), Math.floor(n), t]
            }

            function li(t) {
                var e = io(t, "document") || {}, n = e.documentElement;
                return "CSS1Compat" === e.compatMode ? n : di(t) || n
            }

            function di(t) {
                t = io(t, "document");
                try {
                    return t.getElementsByTagName("body")[0]
                } catch (t) {
                    return null
                }
            }

            function pi(t, e) {
                try {
                    return new RegExp("(?:^|\\s)" + t + "(?:\\s|$)").test(e.className)
                } catch (t) {
                    return !1
                }
            }

            function vi(t) {
                var e;
                try {
                    (e = t.target || t.srcElement) && (!e.ownerDocument && e.documentElement ? e = e.documentElement : e.ownerDocument !== document && (e = null))
                } catch (t) {
                }
                return e
            }

            function mi(t) {
                var e = t && t.parentNode;
                e && e.removeChild(t)
            }

            function gi(t) {
                return !po(t) && (3 === (t = t.nodeType) || 8 === t)
            }

            function bi(t) {
                var e;
                return (e = io(t, "XMLHttpRequest")) && (e = "withCredentials" in new t.XMLHttpRequest) && (e = !(e = !!(Wc.test(t.location.host) && t.opera && vo(t.opera.version) && ("string" == typeof (e = t.opera.version()) && "12" === e.split(".")[0])))), !!e && Jc(t)
            }

            function yi(t, e, n, r, i, o, a, u) {
                if (4 === e.readyState) if (200 === e.status || i || a(n), i) 200 === e.status ? o(e.responseText) : a(Yc("http." + e.status + ".st." + e.statusText + ".rt." + ("" + e.responseText).substring(0, 50))); else {
                    if (i = null, r) try {
                        (i = Yo(t, e.responseText)) || a(n)
                    } catch (t) {
                        a(n)
                    }
                    o(i)
                }
                return u
            }

            function wi(t, e, n) {
                return (n = Ci(n)) && (t += "?" + n), e.Z && (t += (n ? "&" : "?") + e.Z), t
            }

            function Ei(t, e) {
                try {
                    return t.JSON.stringify(e)
                } catch (t) {
                    return null
                }
            }

            function Ci(t) {
                return t ? no(fu, oo((function (t, e) {
                    var n = e[0], r = e[1];
                    return Za(r) || po(r) || t.push(n + "=" + xi(r)), t
                }), []), Wa("&"))(t) : ""
            }

            function xi(t) {
                try {
                    return encodeURIComponent(t)
                } catch (t) {
                }
                return t = Ya("", yu((function (t) {
                    return 55296 >= t.charCodeAt(0)
                }), t.split(""))), encodeURIComponent(t)
            }

            function Ai() {
                var t = Eo(arguments);
                return ji(Ti(t))
            }

            function Ti(t) {
                var e = "";
                return eo(t) ? e = Ya(".", t) : Ro(t) && (e = t), Yc("err.kn(" + fc.Ia + ")" + e)
            }

            function Si(t) {
                this.message = t
            }

            function ki(t, e, n, r, i) {
                var o = t.addEventListener && t.removeEventListener, a = !o && t.attachEvent && t.detachEvent;
                (o || a) && (i = i ? o ? "removeEventListener" : "detachEvent" : o ? "addEventListener" : "attachEvent", o ? t[i](e, n, r) : t[i]("on" + e, n))
            }

            function _i(t) {
                return iu((function (e, n) {
                    var r = io(t, "location." + n);
                    return e[n] = r ? "" + r : "", e
                }), {}, Ec)
            }

            function Ri(t) {
                return t = mc(t), vc[t] && vc[t].Zi
            }

            function Mi(t, e) {
                var n = mc(t), r = io(e, "__ym.turbo_page"), i = io(e, "__ym.turbo_page_id");
                vc[n] || (vc[n] = {}), (r || i) && (vc[n].Zi = r, vc[n].$i = i)
            }

            function Ni(t) {
                return Cu("prerender", ku(co(io(t, "document"), io), ["webkitVisibilityState", "visibilityState"]))
            }

            function Ii(t, e) {
                return _u(no(Ki, uo("push", t)), e), t
            }

            function Di(t, e) {
                return Array.prototype.sort.call(e, t)
            }

            function Pi(t) {
                return t ? eo(t) ? t : Va ? Va(t) : "number" == typeof t.length && 0 <= t.length ? Co(t) : [] : []
            }

            function Oi(t, e, n) {
                return n ? t : e
            }

            function Li(t, e, n) {
                try {
                    if (vo(e)) {
                        var r = Eo(arguments).slice(3);
                        po(n) ? e.apply(void 0, r) : tu.apply(void 0, Lo([e, n], r))()
                    }
                } catch (e) {
                    Bi(t, co(e, ji), 0)
                }
            }

            function ji(t) {
                throw t
            }

            function Bi(t, e, n) {
                return Ui("setTimeout", t)(e, n)
            }

            function Fi(t, e) {
                return Ui("clearTimeout", t)(e)
            }

            function Gi() {
                return []
            }

            function Hi() {
                return {}
            }

            function Ui(t, e) {
                var n = io(e, t), r = io(e, "constructor.prototype." + t) || n;
                try {
                    if (r && r.apply) return function () {
                        return r.apply(e, arguments)
                    }
                } catch (t) {
                    return n
                }
                return r
            }

            function Xi(t, e) {
                return function () {
                    var n = Eo(arguments), r = n[0];
                    n = n.slice(1);
                    var i = mu(r), o = i.l("m730", {}), a = io(o, t);
                    return a || (a = zi(e), o[t] = a, i.o("m730", o)), a.apply(void 0, Lo([r], n))
                }
            }

            function Vi(t, e) {
                return e ? t(e) : t()
            }

            function zi(t, e) {
                var n = [], r = [], i = e || Ki;
                return function () {
                    var e = Eo(arguments), o = i.apply(void 0, e), a = pu(o, r);
                    return -1 !== a ? n[a] : (e = t.apply(void 0, e), n.push(e), r.push(o), e)
                }
            }

            function Yi(t) {
                return !t
            }

            function qi(t, e) {
                return e
            }

            function Ki(t) {
                return t
            }

            function Wi(t) {
                if (Fa) return Fa;
                var e = !1;
                try {
                    e = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (t) {
                }
                var n = t.Array && t.Array.prototype && No(t.Array.prototype.indexOf, "indexOf");
                return Fa = e && n ? function (t, e) {
                    return n.call(e, t)
                } : Ji
            }

            function Ji(t, e) {
                for (var n = 0; n < e.length; n += 1) if (e[n] === t) return n;
                return -1
            }

            function $i(t) {
                var e = (t = t.Ya = t.Ya || {})._metrika = t._metrika || {};
                return {
                    Ea: function (t, n) {
                        return su.call(e, t) || (e[t] = n), this
                    }, o: function (t, n) {
                        return e[t] = n, this
                    }, l: function (t, n) {
                        var r = e[t];
                        return su.call(e, t) || Za(n) ? r : n
                    }
                }
            }

            function Zi(t) {
                var e, n = [];
                for (e in t) to(t, e) && n.push(e);
                return n
            }

            function Qi(t, e) {
                return ho((function (e, n, r) {
                    return t(n, r) && e.push(n), e
                }), [], e)
            }

            function to(t, e) {
                return !po(t) && su.call(t, e)
            }

            function eo(t) {
                return Ba || (Ba = No(Array.isArray, "isArray")) || (Ba = cu), Ba(t)
            }

            function no() {
                var t = Eo(arguments), e = t.shift();
                return function () {
                    var n = e.apply(void 0, arguments);
                    return iu(wo, n, t)
                }
            }

            function ro(t, e) {
                return void 0 === e && (e = {}), !t || 1 > t.length || iu((function (e, n, r) {
                    return r === t.length - 1 ? e : (r === t.length - 2 ? e[n] = t[r + 1] : e[n] || (e[n] = {}), e[n])
                }), e, t), e
            }

            function io(t, e) {
                return t ? iu((function (t, e) {
                    if (po(t)) return t;
                    try {
                        return t[e]
                    } catch (t) {
                    }
                    return null
                }), t, e.split(".")) : null
            }

            function oo(t, e) {
                return so([t, e], iu)
            }

            function ao(t) {
                return uo("test", t)
            }

            function uo(t, e) {
                return tu(e[t], e)
            }

            function co(t, e) {
                return so([t], e)
            }

            function so(t, e) {
                return tu.apply(void 0, Lo([e, null], t))
            }

            function fo(t, e, n) {
                void 0 === e && (e = []), n = n || {};
                var r, i = e.length, o = t;
                return vo(o) && (n[o = "d"] = t), i ? 1 === i ? r = n[o](e[0]) : 2 === i ? r = n[o](e[0], e[1]) : 3 === i ? r = n[o](e[0], e[1], e[2]) : 4 === i && (r = n[o](e[0], e[1], e[2], e[3])) : r = n[o](), r
            }

            function ho(t, e, n) {
                for (var r = 0, i = n.length; r < i;) e = t(e, n[r], r), r += 1;
                return e
            }

            function lo(t) {
                return !$a(t) && !Za(t) && "[object Object]" === Mo(t)
            }

            function po(t) {
                return Za(t) || $a(t)
            }

            function vo(t) {
                return "function" == typeof t
            }

            function mo(t) {
                return go((function (e, n) {
                    return t(n, e)
                }))
            }

            function go() {
                var t = Eo(arguments), e = t.shift();
                return function () {
                    var n = Eo(arguments);
                    return e.length > n.length + t.length ? go.apply(void 0, Lo([e], t, n)) : e.apply(void 0, Lo(t, n))
                }
            }

            function bo(t) {
                return function (e) {
                    return function (n) {
                        return t(n, e)
                    }
                }
            }

            function yo(t) {
                return function (e) {
                    return function (n) {
                        return t(e, n)
                    }
                }
            }

            function wo(t, e) {
                return e(t)
            }

            function Eo(t) {
                if (Va) try {
                    return Va(t)
                } catch (t) {
                }
                return Co(t)
            }

            function Co(t) {
                for (var e = t.length, n = [], r = 0; r < e; r += 1) n.push(t[r]);
                return n
            }

            function xo(t, e) {
                return (xo = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
            }

            function Ao(t) {
                return t.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function To(t, e) {
                if (t) {
                    var n = ("" + t).replace(Xa, "");
                    return e && n.length > e ? n.substr(0, e) : n
                }
                return ""
            }

            function So(t) {
                return "" + t
            }

            function ko(t, e) {
                return !(!t || -1 === _o(t, e))
            }

            function _o(t, e) {
                if (Ua) var n = Ua.call(t, e); else t:{
                    n = 0;
                    for (var r = t.length - e.length, i = 0; i < t.length; i += 1) {
                        if ((n = t[i] === e[n] ? n + 1 : 0) === e.length) {
                            n = i - e.length + 1;
                            break t
                        }
                        if (!n && i > r) break
                    }
                    n = -1
                }
                return n
            }

            function Ro(t) {
                return "string" == typeof t
            }

            function Mo(t) {
                return Object.prototype.toString.call(t)
            }

            function No(t, e) {
                return Io(e, t) && t
            }

            function Io(t, e) {
                var n = Do(t, e);
                return e && !n && Ha.push([t, e]), n
            }

            function Do(t, e) {
                if (!e || "function" != typeof e) return !1;
                var n = new RegExp("function\\s*(" + t + ")?\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}", "i");
                try {
                    return n.test("" + e)
                } catch (t) {
                }
                return !1
            }

            function Po() {
            }

            function Oo(t, e) {
                function n() {
                    this.constructor = t
                }

                xo(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }

            function Lo() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                t = Array(t);
                var r = 0;
                for (e = 0; e < n; e++) for (var i = arguments[e], o = 0, a = i.length; o < a; o++, r++) t[r] = i[o];
                return t
            }

            function jo(t) {
                for (var e = 2166136261, n = (t = "" + t).length, r = 0; r < n; r += 1) e ^= t.charCodeAt(r), e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24);
                return e >>> 0
            }

            function Bo() {
            }

            function Fo(t) {
                if (!(this instanceof Fo)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t) throw new TypeError("not a function");
                this.xa = 0, this.Ie = !1, this.Ga = void 0, this.mb = [], zo(t, this)
            }

            function Go(t, e) {
                for (; 3 === t.xa;) t = t.Ga;
                0 === t.xa ? t.mb.push(e) : (t.Ie = !0, Fo.Je((function () {
                    var n = 1 === t.xa ? e.ui : e.wi;
                    if (null === n) (1 === t.xa ? Ho : Uo)(e.Oa, t.Ga); else {
                        try {
                            var r = n(t.Ga)
                        } catch (t) {
                            return void Uo(e.Oa, t)
                        }
                        Ho(e.Oa, r)
                    }
                })))
            }

            function Ho(t, e) {
                try {
                    if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if (e instanceof Fo) return t.xa = 3, t.Ga = e, void Xo(t);
                        if ("function" == typeof n) return void zo(function (t, e) {
                            return function () {
                                t.apply(e, arguments)
                            }
                        }(n, e), t)
                    }
                    t.xa = 1, t.Ga = e, Xo(t)
                } catch (e) {
                    Uo(t, e)
                }
            }

            function Uo(t, e) {
                t.xa = 2, t.Ga = e, Xo(t)
            }

            function Xo(t) {
                2 === t.xa && 0 === t.mb.length && Fo.Je((function () {
                    t.Ie || Fo.Hg(t.Ga)
                }));
                for (var e = 0, n = t.mb.length; e < n; e++) Go(t, t.mb[e]);
                t.mb = null
            }

            function Vo(t, e, n) {
                this.ui = "function" == typeof t ? t : null, this.wi = "function" == typeof e ? e : null, this.Oa = n
            }

            function zo(t, e) {
                var n = !1;
                try {
                    t((function (t) {
                        n || (n = !0, Ho(e, t))
                    }), (function (t) {
                        n || (n = !0, Uo(e, t))
                    }))
                } catch (t) {
                    n || (n = !0, Uo(e, t))
                }
            }

            function Yo(t, e) {
                if (!e) return null;
                try {
                    return t.JSON.parse(e)
                } catch (t) {
                    return null
                }
            }

            function qo(t, e, n, r, i, o) {
                if (gr(t, mr, e)) {
                    e = (e = [e + "=" + encodeURIComponent(n)]).concat(Ic(t)), r && ((n = new Date).setTime(n.getTime() + 6e4 * r), e.push("expires=" + n.toUTCString())), i && (r = i.replace(Xs, ""), e.push("domain=" + r)), e.push("path=" + (o || "/")), o = Ya(";", e);
                    try {
                        t.document.cookie = o
                    } catch (t) {
                    }
                }
            }

            function Ko(t, e, n) {
                void 0 === e && (e = "_ym_"), void 0 === n && (n = "");
                var r = Vs(t), i = 1 === (r || "").split(".").length ? r : "." + r, o = n ? "_" + n : "";
                return {
                    Zb: function (n, r, a) {
                        return qo(t, "" + e + n + o, "", -100, r || i, a), this
                    }, l: function (n) {
                        return mr(t, "" + e + n + o)
                    }, o: function (n, r, a, u, c) {
                        return qo(t, "" + e + n + o, r, a, u || i, c), this
                    }
                }
            }

            function Wo(t, e) {
                var n = uf(t);
                return n ? (n.href = e, {
                    protocol: n.protocol,
                    host: n.host,
                    port: n.port,
                    hostname: n.hostname,
                    hash: n.hash,
                    search: n.search,
                    query: n.search.replace(/^\?/, ""),
                    pathname: n.pathname || "/",
                    path: (n.pathname || "/") + n.search,
                    href: n.href
                }) : {}
            }

            function Jo(t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var n = [0, 0, 0, 0];
                return n[3] += t[3] * e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] * e[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += t[3] * e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] * e[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[2] * e[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[3] * e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }

            function $o(t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var n = [0, 0, 0, 0];
                return n[3] += t[3] + e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] + e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] + e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] + e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }

            function Zo(t, e) {
                return 32 === (e %= 64) ? [t[1], t[0]] : 32 > e ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e])
            }

            function Qo(t, e) {
                return 0 === (e %= 64) ? t : 32 > e ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0]
            }

            function ta(t, e) {
                return [t[0] ^ e[0], t[1] ^ e[1]]
            }

            function ea(t) {
                return t = ta(t, [0, t[0] >>> 1]), t = ta(t = Jo(t, [4283543511, 3981806797]), [0, t[0] >>> 1]), ta(t = Jo(t, [3301882366, 444984403]), [0, t[0] >>> 1])
            }

            function na(t, e) {
                void 0 === e && (e = 210);
                var n = t || "", r = e || 0, i = n.length - n.length % 16;
                r = {N: [0, r], O: [0, r]};
                for (var o = 0; o < i; o += 16) {
                    var a = r,
                        u = [255 & t.charCodeAt(o + 4) | (255 & t.charCodeAt(o + 5)) << 8 | (255 & t.charCodeAt(o + 6)) << 16 | (255 & t.charCodeAt(o + 7)) << 24, 255 & t.charCodeAt(o) | (255 & t.charCodeAt(o + 1)) << 8 | (255 & t.charCodeAt(o + 2)) << 16 | (255 & t.charCodeAt(o + 3)) << 24],
                        c = [255 & t.charCodeAt(o + 12) | (255 & t.charCodeAt(o + 13)) << 8 | (255 & t.charCodeAt(o + 14)) << 16 | (255 & t.charCodeAt(o + 15)) << 24, 255 & t.charCodeAt(o + 8) | (255 & t.charCodeAt(o + 9)) << 8 | (255 & t.charCodeAt(o + 10)) << 16 | (255 & t.charCodeAt(o + 11)) << 24];
                    u = Jo(u, Wf), u = Jo(u = Zo(u, 31), Jf), a.N = ta(a.N, u), a.N = Zo(a.N, 27), a.N = $o(a.N, a.O), a.N = $o(Jo(a.N, [0, 5]), [0, 1390208809]), c = Jo(c, Jf), c = Jo(c = Zo(c, 33), Wf), a.O = ta(a.O, c), a.O = Zo(a.O, 31), a.O = $o(a.O, a.N), a.O = $o(Jo(a.O, [0, 5]), [0, 944331445])
                }
                switch (i = n.length % 16, o = n.length - i, a = [0, 0], u = [0, 0], i) {
                    case 15:
                        u = ta(u, Qo([0, n.charCodeAt(o + 14)], 48));
                    case 14:
                        u = ta(u, Qo([0, n.charCodeAt(o + 13)], 40));
                    case 13:
                        u = ta(u, Qo([0, n.charCodeAt(o + 12)], 32));
                    case 12:
                        u = ta(u, Qo([0, n.charCodeAt(o + 11)], 24));
                    case 11:
                        u = ta(u, Qo([0, n.charCodeAt(o + 10)], 16));
                    case 10:
                        u = ta(u, Qo([0, n.charCodeAt(o + 9)], 8));
                    case 9:
                        u = Jo(u = ta(u, [0, n.charCodeAt(o + 8)]), Jf), u = Jo(u = Zo(u, 33), Wf), r.O = ta(r.O, u);
                    case 8:
                        a = ta(a, Qo([0, n.charCodeAt(o + 7)], 56));
                    case 7:
                        a = ta(a, Qo([0, n.charCodeAt(o + 6)], 48));
                    case 6:
                        a = ta(a, Qo([0, n.charCodeAt(o + 5)], 40));
                    case 5:
                        a = ta(a, Qo([0, n.charCodeAt(o + 4)], 32));
                    case 4:
                        a = ta(a, Qo([0, n.charCodeAt(o + 3)], 24));
                    case 3:
                        a = ta(a, Qo([0, n.charCodeAt(o + 2)], 16));
                    case 2:
                        a = ta(a, Qo([0, n.charCodeAt(o + 1)], 8));
                    case 1:
                        a = Jo(a = ta(a, [0, n.charCodeAt(o)]), Wf), a = Jo(a = Zo(a, 31), Jf), r.N = ta(r.N, a)
                }
                return r.N = ta(r.N, [0, n.length]), r.O = ta(r.O, [0, n.length]), r.N = $o(r.N, r.O), r.O = $o(r.O, r.N), r.N = ea(r.N), r.O = ea(r.O), r.N = $o(r.N, r.O), r.O = $o(r.O, r.N), ("00000000" + (r.N[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r.N[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (r.O[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r.O[1] >>> 0).toString(16)).slice(-8)
            }

            function ra(t, e, n) {
                var r = e.getAttribute("itemtype");
                return n = Wr('[itemprop~="' + n + '"]', 0, e), r ? yu((function (n) {
                    return n.parentNode && ri("[itemtype]", t, n.parentNode) === e
                }), n) : n
            }

            function ia(t, e, n) {
                return (t = ra(t, e, n)) && t.length ? t[0] : null
            }

            function oa(t) {
                return t && (t = eo(t) ? t : [t]).length && (t[0].getAttribute("content") || t[0].innerText) || ""
            }

            function aa(t) {
                return t ? t.attributes && t.getAttribute("datetime") ? t.getAttribute("datetime") : oa(t) : ""
            }

            function ua(t) {
                return (t = _i(t).hash.split("#")[1]) ? t.split("?")[0] : ""
            }

            function ca(t, e) {
                var n = ua(t);
                return kl = function (t, e, n, r) {
                    return t.setInterval(Mr(t, "i.err." + (r || "def"), e), n)
                }(t, (function () {
                    var r = ua(t);
                    r !== n && (e(), n = r)
                }), 200, "t.h"), tu(Tr, null, t, kl)
            }

            function sa(t, e, n) {
                var r, i, o = e.aa, a = e.Ee, u = e.fc, c = mu(t), s = yc(((r = {}).wh = "1", r.pv = "1", r));
                gc(o) && t.Gg && t.Gg.uj && s.o("ad", "1"), a && s.o("ut", "1"), o = c.l("lastReferrer"), r = _i(t).href, n(u = {
                    G: (i = {}, i["page-url"] = u || r, i["page-ref"] = o, i),
                    H: s
                }, e).catch(Mr(t, "g.s")), c.o("lastReferrer", r)
            }

            function fa(t, e) {
                var n, r = vi(e), i = fc.Rb;
                if (r && pi("ym-advanced-informer", r)) {
                    var o = r.getAttribute("data-lang"), a = parseInt(r.getAttribute("data-cid") || "", 10);
                    (a || 0 === a) && (io(t, "Ya." + i + ".informer")(((n = {}).i = r, n.id = a, n.lang = o, n)), (n = e || window.event).preventDefault ? n.preventDefault() : n.returnValue = !1)
                }
            }

            function ha(t, e, n) {
                return t = e && (ko(e.className, "ym-disable-keys") || ko(e.className, "-metrika-nokeys")), n && e ? t || !!function (t, e) {
                    var n = eo(t) ? t : [t];
                    if ((e = e || document).querySelectorAll) {
                        var r = Ya(", ", ku((function (t) {
                            return "." + t
                        }), n));
                        return Pi(e.querySelectorAll(r))
                    }
                    return e.getElementsByClassName ? Ru(no(uo("getElementsByClassName", e), Pi), n) : (r = e.getElementsByTagName("*"), n = "(" + Ya("|", n) + ")", yu(co(n, pi), Pi(r)))
                }(["ym-disable-keys", "-metrika-nokeys"], e).length : t
            }

            function la(t, e) {
                return !!ts(e) && ("password" === e.type || e.name && Cu(e.name.toLowerCase(), Rd) || e.id && Cu(e.id.toLowerCase(), Rd))
            }

            function da(t, e) {
                var n = Math.max(0, Math.min(e, 65535));
                Ii(t, [n >> 8, 255 & n])
            }

            function pa(t, e) {
                Ii(t, [255 & e])
            }

            function va(t, e, n) {
                return -1 === Wi(t)(n, Id) || (pa(e, n), !1)
            }

            function ma(t, e) {
                for (var n = Math.max(0, 0 | e); 127 < n;) Ii(t, [127 & n | 128]), n >>= 7;
                Ii(t, [n])
            }

            function ga(t, e) {
                ma(t, e.length);
                for (var n = 0; n < e.length; n += 1) ma(t, e.charCodeAt(n))
            }

            function ba(t, e) {
                var n = e;
                255 < n.length && (n = n.substr(0, 255)), t.push(n.length);
                for (var r = 0; r < n.length; r += 1) da(t, n.charCodeAt(r))
            }

            function ya(t, e, n) {
                void 0 === n && (n = []);
                for (var r = []; e && !dt(t, e, n); e = Qr(t, e)) r.push(e);
                return _u((function (e) {
                    yd.jd += 1;
                    var r = yd.jd;
                    e[bd] = r, yd[r] = {}, r = function (t, e) {
                        var n = oi(e);
                        if (!n) return e[bd] = -1, null;
                        var r = +e[bd];
                        if (!isFinite(r) || 0 >= r) return null;
                        if (e.attributes) for (var i = e; i;) {
                            if (i.attributes.Bj) return null;
                            i = i.parentElement
                        }
                        i = 64;
                        var o = Qr(t, e), a = o && o[bd] ? o[bd] : 0;
                        0 > a && (a = 0), n = (n || "").toUpperCase();
                        var u = Nd()[n];
                        u || (i |= 2);
                        var c = Zr(t, e);
                        c || (i |= 4);
                        var s = ti(t, e);
                        return (o = o ? ti(t, o) : null) && s[0] === o[0] && s[1] === o[1] && s[2] === o[2] && s[3] === o[3] && (i |= 8), yd[r].Hf = s[0] + "x" + s[1], yd[r].size = s[2] + "x" + s[3], e.id && "string" == typeof e.id && (i |= 32), va(t, o = [], 1) ? null : (ma(o, r), pa(o, i), ma(o, a), u ? pa(o, u) : ba(o, n), c && ma(o, c), 8 & i || (ma(o, s[0]), ma(o, s[1]), ma(o, s[2]), ma(o, s[3])), 32 & i && ba(o, e.id), pa(o, 0), o)
                    }(t, e), e = function (t, e) {
                        var n = e[bd];
                        if (!n || 0 > n || !is(e) || !e.form || yt(0, e.form)) return [];
                        var r = ai(t, e.form);
                        if (0 > r) return [];
                        if (ts(e)) {
                            var i = {
                                text: 0,
                                color: 0,
                                Yb: 0,
                                Hj: 0,
                                "datetime-local": 0,
                                email: 0,
                                Ef: 0,
                                Zj: 0,
                                search: 0,
                                bk: 0,
                                time: 0,
                                url: 0,
                                month: 0,
                                dk: 0,
                                password: 2,
                                Yj: 3,
                                Ej: 4,
                                file: 6,
                                image: 7
                            };
                            i = i[e.type]
                        } else {
                            i = {yj: 1, zj: 5};
                            var o = oi(e);
                            i = Za(o) ? "" : i[o]
                        }
                        if ("number" != typeof i) return [];
                        o = -1;
                        for (var a = e.form.elements, u = a.length, c = 0, s = 0; c < u; c += 1) if (a[c].name === e.name) {
                            if (a[c] === e) {
                                o = s;
                                break
                            }
                            s += 1
                        }
                        return 0 > o || va(t, a = [], 7) ? [] : (ma(a, n), ma(a, r), ma(a, i), ga(a, e.name || ""), ma(a, o), a)
                    }(t, e), r && e && (Ii(n, r), Ii(n, e))
                }), Lu(r)), n
            }

            function wa(t) {
                var e = t.ha;
                if (!Od || e && !e.fromElement) return lt(t)
            }

            function Ea(t) {
                var e = t.ha;
                if (e && !e.toElement) return ht(t)
            }

            function Ca(t) {
                var e = vi(t.ha);
                if (e && os(e)) {
                    var n = ft(t, e), r = rr(t.b), i = [];
                    return va(t.b, i, 17) ? t = [] : (ma(i, r), ma(i, e[bd]), t = i), Lo(n, t)
                }
            }

            function xa(t) {
                var e = t.b, n = t.ha.target;
                if (n && os(n)) {
                    e = ya(e, n);
                    var r = rr(t.b), i = [];
                    return va(t.b, i, 18) ? t = [] : (ma(i, r), ma(i, n[bd]), t = i), Lo(e, t)
                }
            }

            function Aa(t) {
                var e = t.b, n = vi(t.ha);
                if (!n || la(0, n) || ha(e, n)) return [];
                if (is(n)) {
                    var r = mu(e).l("isEU"), i = pt(e, n, r);
                    if (r = pt(e, n), rs(n)) var o = n.checked; else o = n.value, o = i ? Ya("", Pd(o.split(""))) : o;
                    e = ya(e, n), i = rr(t.b);
                    var a = [];
                    return va(t.b, a, 39) ? t = [] : (ma(a, i), ma(a, n[bd]), ba(a, String(o)), pa(a, r ? 1 : 0), t = a), Lo(e, t)
                }
            }

            function Ta(t) {
                var e = t.b, n = t.ha, r = vi(n);
                if (!r || "SCROLLBAR" === r.nodeName) return [];
                var i = [], o = co(i, Ii);
                r && os(r) ? o(ft(t, r)) : o(ya(e, r));
                var a = At(e, n);
                t = rr(t.b), o = n.type;
                var u, c = [a.x, a.y];
                a = n.which, n = n.button;
                var s = ei(e, r), f = s[0];
                for (s = s[1]; r && (!f || !s);) (r = Qr(e, r)) && (f = (s = ei(e, r))[0], s = s[1]);
                return r ? !(f = r[bd]) || 0 > f ? e = [] : (s = (u = {}, u.mousemove = 2, u.click = 32, u.dblclick = 33, u.mousedown = 4, u.mouseup = 30, u.touch = 12, u)[o]) ? (u = [], r = ni(e, r), va(e, u, s) ? e = [] : (ma(u, t), ma(u, f), ma(u, Math.max(0, c[0] - r.left)), ma(u, Math.max(0, c[1] - r.top)), /^mouse(up|down)|click$/.test(o) && pa(u, 2 > (e = a || n) ? 1 : e === (a ? 2 : 4) ? 4 : 2), e = u)) : e = [] : e = [], Lo(i, e)
            }

            function Sa(t) {
                return Lo(Ta(t), function (t) {
                    var e = null, n = t.b, r = n.document;
                    if (n.getSelection) {
                        r = void 0;
                        try {
                            r = n.getSelection()
                        } catch (t) {
                            return []
                        }
                        if ($a(r)) return [];
                        var i = "" + r;
                        e = r.anchorNode
                    } else r.selection && r.selection.createRange && (i = (r = r.selection.createRange()).text, e = r.parentElement());
                    if ("string" != typeof i) return [];
                    try {
                        for (; e && 1 !== e.nodeType;) e = e.parentNode
                    } catch (t) {
                        return []
                    }
                    if (!e) return [];
                    r = pt(n, e) || ha(n, e, !0), e = e.getElementsByTagName("*");
                    for (var o = 0; o < e.length && !r;) r = pt(n, r = e[o]) || ha(n, r, !0), o += 1;
                    return i !== Ld ? (Ld = i, r = r ? Ya("", Pd(i.split(""))) : i, i = rr(t.b), 0 === r.length ? r = n = "" : 100 >= r.length ? (n = r, r = "") : 200 >= r.length ? (n = r.substr(0, 100), r = r.substr(100)) : (n = r.substr(0, 97), r = r.substr(r.length - 97)), e = [], va(t.b, e, 29) ? t = [] : (ma(e, i), ga(e, n), ga(e, r), t = e), t) : void 0
                }(t) || [])
            }

            function ka(t) {
                return (t.shiftKey ? 2 : 0) | (t.ctrlKey ? 4 : 0) | (t.altKey ? 1 : 0) | (t.metaKey ? 8 : 0) | (t.ctrlKey || t.altKey ? 16 : 0)
            }

            function _a(t) {
                var e = [];
                return jd || (jd = !0, Ld && e.push.apply(e, function (t, e) {
                    var n = [];
                    return va(t, n, 27) ? [] : (ma(n, e), n)
                }(t.b, rr(t.b))), Bn(t.b, (function () {
                    jd = !1
                }), "fv.c")), e
            }

            function Ra(t, e, n, r) {
                var i = vi(e);
                if (!i || vt(t, i)) return [];
                var o = wt(i), a = mt(i);
                e = pt(t, i);
                var u = mu(t);
                return !o && (a && u.l("isEU") || ha(t, i)) ? t = [] : (o = ya(t, i), u = rr(t), va(t, a = [], 38) ? t = [] : (ma(a, u), da(a, n), pa(a, r), (!(t = i[bd]) || 0 > t) && (t = 0), ma(a, t), pa(a, e ? 1 : 0), t = a), t = Lo(o, t)), t
            }

            function Ma(t) {
                var e = t.b, n = t.ha, r = n.keyCode, i = ka(n), o = [], a = co(o, Ii);
                return ({
                    3: 1,
                    8: 1,
                    9: 1,
                    13: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    45: 1,
                    46: 1,
                    91: 1,
                    92: 1,
                    93: 1,
                    106: 1,
                    110: 1,
                    111: 1,
                    144: 1,
                    145: 1
                }[r] || 112 <= r && 123 >= r || 96 <= r && 105 >= r || 16 & i) && (19 === r && 4 == (-17 & i) && (r = 144), a(Ra(e, n, r, 16 | i)), Bd = !1, Bn(e, (function () {
                    Bd = !0
                }), "fv.kd"), !(67 === r && 4 & i) || 1 & i || 2 & i || a(_a(t))), o
            }

            function Na(t) {
                var e = t.b;
                t = t.ha;
                var n = [];
                return Bd && !Fd && 0 !== t.which && (n.push.apply(n, Ra(e, t, t.charCode || t.keyCode, ka(t))), Fd = !0, Bn(e, (function () {
                    Fd = !1
                }), "fv.kp")), n
            }

            function Ia(t) {
                var e = t.b, n = vi(t.ha);
                if (!n || yt(0, n)) return [];
                var r = [];
                if ("FORM" === n.nodeName) {
                    for (var i = n.elements, o = 0; o < i.length; o += 1) ii(i[o]) || r.push.apply(r, ya(e, i[o]));
                    r.push.apply(r, function (t, e, n) {
                        var r = ai(t, n);
                        if (0 > r) return [];
                        var i = n.elements, o = i.length;
                        n = [];
                        for (var a = 0; a < o; a += 1) if (!ii(i[a])) {
                            var u = i[a][bd];
                            u && 0 < u && n.push(u)
                        }
                        if (va(t, i = [], 11)) return [];
                        for (ma(i, e), ma(i, r), ma(i, n.length), t = 0; t < n.length; t += 1) ma(i, n[t]);
                        return i
                    }(e, rr(t.b), n))
                }
                return r
            }

            function Da(t) {
                var e = t.flush;
                "BODY" === oi(t = vi(t.ha)) && e()
            }

            function Pa(t, e, n, r) {
                return function () {
                    var n = fn(t, e), i = Eo(arguments);
                    if (n) return r.apply(void 0, i)
                }
            }

            function Oa(t, e, n, r) {
                var i = df[n];
                return i ? function () {
                    var e = Eo(arguments);
                    try {
                        var n = r.apply(void 0, e), o = mu(t);
                        o.Ea("mt", {});
                        var a = o.l("mt"), u = a[i];
                        a[i] = u ? u + 1 : 1
                    } catch (t) {
                        ji(t)
                    }
                    return n
                } : r
            }

            function La(t, e, n, r) {
                return function () {
                    var n = fn(t, e), i = Eo(arguments);
                    return r.apply(void 0, i), n
                }
            }

            function ja(t, e, n, r) {
                return Mr(t, "cm." + n, r)
            }

            var Ba, Fa, Ga = {construct: "Metrika2", callbackPostfix: "2", version: "3u9fu6axod71lkz4p33"}, Ha = [],
                Ua = No(String.prototype.indexOf, "indexOf"), Xa = /^\s+|\s+$/g, Va = No(Array.from, "from"),
                za = No(Array.prototype.join, "join"), Ya = za ? function (t, e) {
                    return za.call(e, t)
                } : function (t, e) {
                    for (var n = "", r = 0; r < e.length; r += 1) n += "" + (r ? t : "") + e[r];
                    return n
                }, qa = yo((function (t, e) {
                    return t === e
                })), Ka = yo((function (t, e) {
                    return t(e), e
                })), Wa = yo(Ya), Ja = yo(wo), $a = qa(null), Za = qa(void 0), Qa = No(Function.prototype.bind, "bind"),
                tu = Qa ? function () {
                    var t = Eo(arguments);
                    return Qa.apply(t[0], Lo([t[1]], t.slice(2)))
                } : function () {
                    var t = Eo(arguments), e = t[0], n = t[1], r = t.slice(2);
                    return function () {
                        var t = Lo(r, Eo(arguments));
                        if (Function.prototype.call) return Function.prototype.call.apply(e, Lo([n], t));
                        if (n) {
                            for (var i = "_b"; n[i];) i += "_" + i.length;
                            return n[i] = e, t = n[i] && fo(i, t, n), delete n[i], t
                        }
                        return fo(e, t)
                    }
                }, eu = yo(so), nu = yo(uo), ru = No(Array.prototype.reduce, "reduce"), iu = ru ? function (t, e, n) {
                    return ru.call(n, t, e)
                } : ho, ou = bo(io), au = ou("length"), uu = no, cu = no(Mo, qa("[object Array]")),
                su = Object.prototype.hasOwnProperty, fu = Object.entries ? function (t) {
                    return t ? Object.entries(t) : []
                } : function (t) {
                    return Za(t) ? [] : ho((function (e, n) {
                        return e.push([n, t[n]]), e
                    }), [], Zi(t))
                }, hu = Object.keys ? Object.keys : Zi, lu = Object.assign || function () {
                    var t = Eo(arguments), e = t[0];
                    for (t = t.slice(1); t.length;) {
                        var n, r = t.shift();
                        for (n in r) to(r, n) && (e[n] = r[n]);
                        to(r, "toString") && (e.toString = r.toString)
                    }
                    return e
                }, du = yo((function (t, e) {
                    return lu({}, t, e)
                })), pu = Wi(window), vu = bo(pu), mu = zi($i), gu = Array.prototype.every ? function (t, e) {
                    return Array.prototype.every.call(e, t)
                } : function (t, e) {
                    return iu((function (e, n) {
                        return !!e && t(n)
                    }), !0, e)
                }, bu = No(Array.prototype.filter, "filter"), yu = bu ? function (t, e) {
                    return bu.call(e, t)
                } : Qi, wu = yo(yu), Eu = Oi((function (t, e) {
                    return Array.prototype.find.call(e, t)
                }), (function (t, e) {
                    for (var n = 0; n < e.length; n += 1) if (t.call(e, e[n], n)) return e[n]
                }), Io("find", Array.prototype.find)), Cu = Array.prototype.includes ? function (t, e) {
                    return Array.prototype.includes.call(e, t)
                } : function (t, e) {
                    return 1 <= Qi(qa(t), e).length
                }, xu = bo(Cu), Au = zi((function (t) {
                    t = io(t, "navigator") || {};
                    var e = io(t, "userAgent") || "";
                    return {sf: -1 < (io(t, "vendor") || "").indexOf("Apple"), qg: e}
                })), Tu = zi((function (t) {
                    var e = io(t, "document.documentElement.style");
                    return t = io(t, "InstallTrigger"), !(!e || !("MozAppearance" in e) || po(t))
                })), Su = No(Array.prototype.map, "map"), ku = Su && function (t, e) {
                    if (!Tu(t)) return !0;
                    try {
                        e.call({0: !0, length: 1 - Math.pow(2, 32)}, (function () {
                            throw 1
                        }))
                    } catch (t) {
                        return !1
                    }
                    return !0
                }(window, Array.prototype.map) ? function (t, e) {
                    return e && 0 < e.length ? Su.call(e, t) : []
                } : function (t, e) {
                    return ho((function (e, n, r) {
                        return e.push(t(n, r)), e
                    }), [], e)
                }, _u = ku, Ru = Array.prototype.flatMap ? function (t, e) {
                    return Array.prototype.flatMap.call(e, t)
                } : function (t, e) {
                    return ho((function (e, n, r) {
                        return n = t(n, r), e.concat(eo(n) ? n : [n])
                    }), [], e)
                }, Mu = yo(ku), Nu = bo(ku), Iu = Oi((function (t, e) {
                    return Array.prototype.some.call(e, t)
                }), (function (t, e) {
                    for (var n = 0; n < e.length; n += 1) if (n in e && t.call(e, e[n], n)) return !0;
                    return !1
                }), Io("some", Array.prototype.some)), Du = zi(Wi), Pu = yo(Di),
                Ou = No(Array.prototype.reverse, "reverse"), Lu = Ou ? function (t) {
                    return Ou.call(t)
                } : function (t) {
                    for (var e = [], n = t.length - 1; 0 <= n; --n) e[t.length - 1 - n] = t[n];
                    return e
                }, ju = zi(no(ou("String.fromCharCode"), co("fromCharCode", Io), Yi)), Bu = zi(ou("navigator.userAgent")),
                Fu = zi(no(Bu, ao(/ipad|iphone|ipod/i))), Gu = zi((function (t) {
                    return io(t, "navigator.platform") || ""
                })), Hu = zi((function (t) {
                    var e = (t = Au(t)).qg;
                    return t.sf && (!e.match(/Safari/) && e.match(/Mobile/) || e.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) || -1 !== e.indexOf("FB_IAB") || -1 !== e.indexOf("FBAV") || -1 !== e.indexOf("OKApp") || -1 !== e.indexOf("GSA/"))
                })), Uu = zi((function (t) {
                    var e = (t = Au(t)).qg;
                    return t.sf && !e.match("CriOS")
                })),
                Xu = zi(no(Bu, uo("test", /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/))),
                Vu = /Chrome\/(\d+)\./, zu = zi((function (t) {
                    return !(!(t = (io(t, "navigator.userAgent") || "").match(Vu)) || !t.length) && 76 <= parseInt(t[1], 10)
                })), Yu = zi((function (t) {
                    var e = (Bu(t) || "").toLowerCase();
                    return t = Gu(t), !(-1 === e.indexOf("android") || -1 === e.indexOf(e, "mobile") || !/^android|linux armv/i.test(t))
                })), qu = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                Ku = zi((function (t) {
                    var e = io(t, "navigator.connection.type");
                    return Za(e) ? null : -1 === (t = Du(t)(e, qu)) ? e : "" + t
                })), Wu = zi(no(ou("document.addEventListener"), Yi)), Ju = zi((function (t) {
                    var e = io(t, "navigator") || {};
                    return iu((function (t, n) {
                        return t || io(e, n)
                    }), "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                })), $u = zi((function (t) {
                    var e = io(t, "navigator") || {};
                    return Ro(t = Ju(t)) || (t = "", Ro(e = io(e, "languages.0")) && (t = e)), t.toLowerCase().split("-")[0]
                })), Zu = zi((function (t) {
                    var e = !1;
                    try {
                        e = t.top !== t
                    } catch (t) {
                    }
                    return e
                })), Qu = zi((function (t) {
                    var e = !1;
                    try {
                        e = t.top.contentWindow
                    } catch (t) {
                    }
                    return e
                })), tc = zi((function (t) {
                    var e = !1;
                    try {
                        e = t.navigator.javaEnabled()
                    } catch (t) {
                    }
                    return e
                })), ec = zi((function (t) {
                    var e = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        n = io(t, "external");
                    n = -1 !== (io(n, "toString") ? "" + n.toString() : "").indexOf("Sequentum");
                    var r = io(t, "document.documentElement");
                    return !!(Iu(co(t, io), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Iu(co(io(t, "document"), io), e) || n || r && Iu(tu(r.getAttribute, r), ["selenium", "webdriver", "driver"]))
                })), nc = zi((function (t) {
                    return !!(Iu(co(t, io), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(Bu(t)) || io(t, "navigator.webdriver") || io(t, "isChrome") && !io(t, "chrome"))
                })), rc = zi((function (t) {
                    return gu(co(t, io), ["ia_document.shareURL", "ia_document.referrer"])
                })), ic = zi((function (t) {
                    return !!((t = io(t, "navigator.plugins")) && au(t) && Iu(no(ou("name"), ao(/Chrome PDF Viewer/)), t))
                })),
                oc = new RegExp(Ya("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")),
                ac = zi(no(ou("navigator.userAgent"), ao(oc))), uc = zi((function (t) {
                    var e = Bu(t) || "", n = e.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    return n = n ? [+n[1], +n[2]] : [0, 0], 14 <= ((e = e.match(/iPhone OS ([1-9]+)_([0-9]+)/)) ? +e[1] : 0) || (Fu(t) || 10 < n[0] || 10 === n[0] && 13 <= n[1]) && Uu(t)
                })), cc = Ga.construct, sc = Wu(window), fc = {
                    Dg: 24226447,
                    yg: 26302566,
                    Fg: 51533966,
                    vj: 65446441,
                    Ja: "https:",
                    Ia: "730",
                    Rb: cc,
                    Cg: sc ? 512 : 2048,
                    Ag: sc ? 512 : 2048,
                    Bg: sc ? 100 : 400,
                    wj: 100,
                    xj: "noindex"
                }, hc = {id: "id", Ee: "ut", aa: "type", Nd: "ldc", bb: "nck", fc: "url", vh: "referrer"}, lc = /^\d+$/,
                dc = {
                    id: function (t) {
                        t = "" + (t || "0"), lc.test(t) || (t = "0");
                        try {
                            var e = parseInt(t, 10)
                        } catch (t) {
                            e = 0
                        }
                        return e
                    }, aa: function (t) {
                        return "" + (t || 0 === t ? t : "0")
                    }, bb: Boolean, Ee: Boolean
                };
            hc.Sb = "defer", dc.Sb = Boolean, hc.pj = "yaDisableGDPR", hc.qj = "yaGDPRLang", hc.exp = "experiments", hc.qd = "ecommerce", dc.qd = function (t) {
                if (t) return !0 === t ? "dataLayer" : "" + t
            }, hc.R = "params", hc.$c = "userParams", hc.Nb = "accurateTrackBounce", hc.mg = "triggerEvent", dc.mg = Boolean, hc.Yf = "sendTitle", dc.Yf = function (t) {
                return !!t || Za(t)
            }, hc.Ae = "trackHash", dc.Ae = Boolean, hc.Yg = "clickmap", hc.Ra = "webvisor", dc.Ra = Boolean, hc.dj = "trustedDomains", hc.qb = "childIframe", dc.qb = Boolean, hc.Xc = "trackLinks", hc.hh = "enableAll";
            var pc = iu((function (t, e) {
                    var n = e[0];
                    return t[n] = {Gf: e[1], mi: dc[n]}, t
                }), {}, fu(hc)), vc = {}, mc = zi((function (t) {
                    return t.id + ":" + t.aa
                })), gc = qa("1"), bc = yo((function (t, e) {
                    var n = e || {};
                    return {
                        b: co(n, Ki), l: function (t, e) {
                            var r = n[t];
                            return Za(r) && !Za(e) ? e : r
                        }, o: function (t, e) {
                            return n[t] = e, this
                        }, se: function (t, e) {
                            return "" === e || po(e) ? this : this.o(t, e)
                        }, Ca: co(n, t)
                    }
                })), yc = bc((function (t) {
                    var e = "";
                    return t = iu((function (t, n) {
                        var r = n[0], i = r + ":" + n[1];
                        return "t" === r ? e = i : t.push(i), t
                    }), [], fu(t)), e && t.push(e), Ya(":", t)
                })), wc = fc.Ja + "//mc.yandex.ru/metrika/metrika_match.html",
                Ec = "hash host hostname href pathname port protocol search".split(" "),
                Cc = "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(" "),
                xc = zi((function (t) {
                    return (t = _i(t).hostname.split("."))[t.length - 1]
                })), Ac = zi((function (t) {
                    return -1 !== _i(t).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                })), Tc = zi((function (t) {
                    return (t ? t.replace(/^www\./, "") : "").toLowerCase()
                })),
                Sc = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|deli\.yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/,
                kc = zi((function (t) {
                    var e = !1;
                    return (t = _i(t).hostname) && (e = -1 !== t.search(Sc)), e
                })),
                _c = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                Rc = zi((function (t) {
                    var e = !1;
                    return (t = _i(t).hostname) && (e = -1 !== t.search(_c)), e
                })), Mc = /(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/, Nc = zi((function (t) {
                    var e = !1;
                    return (t = _i(t).hostname) && (e = -1 !== t.search(Mc)), e
                })), Ic = zi((function (t) {
                    var e = [];
                    return zu(t) && "https:" === _i(t).protocol && (e.push("SameSite=None"), e.push("Secure")), e
                })), Dc = zi((function (t) {
                    var e = !1;
                    if (!t.addEventListener) return e;
                    try {
                        var n = Object.defineProperty({}, "passive", {
                            get: function () {
                                return e = !0, 1
                            }
                        });
                        t.addEventListener("test", Po, n)
                    } catch (t) {
                    }
                    return e
                })), Pc = yo((function (t, e) {
                    return t ? lu({capture: !0, passive: !0}, e || {}) : !!e
                })), Oc = zi((function (t) {
                    t = Dc(t);
                    var e = Pc(t), n = {};
                    return lu(n, {
                        C: function (t, r, i, o) {
                            return _u((function (n) {
                                var r = e(o);
                                ki(t, n, i, r, !1)
                            }), r), tu(n.Kb, n, t, r, i, o)
                        }, Kb: function (t, n, r, i) {
                            _u((function (n) {
                                var o = e(i);
                                ki(t, n, r, o, !0)
                            }), n)
                        }
                    })
                })), Lc = setTimeout;
            Fo.prototype.catch = function (t) {
                return this.then(null, t)
            }, Fo.prototype.then = function (t, e) {
                var n = new this.constructor(Bo);
                return Go(this, new Vo(t, e, n)), n
            }, Fo.prototype.finally = function (t) {
                var e = this.constructor;
                return this.then((function (n) {
                    return e.resolve(t()).then((function () {
                        return n
                    }))
                }), (function (n) {
                    return e.resolve(t()).then((function () {
                        return e.reject(n)
                    }))
                }))
            }, Fo.all = function (t) {
                return new Fo((function (e, n) {
                    function r(t, a) {
                        try {
                            if (a && ("object" == typeof a || "function" == typeof a)) {
                                var u = a.then;
                                if ("function" == typeof u) return void u.call(a, (function (e) {
                                    r(t, e)
                                }), n)
                            }
                            i[t] = a, 0 == --o && e(i)
                        } catch (t) {
                            n(t)
                        }
                    }

                    if (!t || void 0 === t.length) return n(new TypeError("Promise.all accepts an array"));
                    var i = Array.prototype.slice.call(t);
                    if (0 === i.length) return e([]);
                    for (var o = i.length, a = 0; a < i.length; a++) r(a, i[a])
                }))
            }, Fo.resolve = function (t) {
                return t && "object" == typeof t && t.constructor === Fo ? t : new Fo((function (e) {
                    e(t)
                }))
            }, Fo.reject = function (t) {
                return new Fo((function (e, n) {
                    n(t)
                }))
            }, Fo.race = function (t) {
                return new Fo((function (e, n) {
                    if (!t || void 0 === t.length) return n(new TypeError("Promise.race accepts an array"));
                    for (var r = 0, i = t.length; r < i; r++) Fo.resolve(t[r]).then(e, n)
                }))
            }, Fo.Je = "function" == typeof setImmediate && function (t) {
                setImmediate(t)
            } || function (t) {
                Lc(t, 0)
            }, Fo.Hg = function (t) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
            };
            var jc = window.Promise, Bc = No(jc, "Promise"), Fc = No(io(jc, "resolve"), "resolve"),
                Gc = No(io(jc, "reject"), "reject"), Hc = No(io(jc, "all"), "all");
            if (Cu(!1, [Bc, Fc, Gc, Hc])) jc = Fo; else {
                var Uc = function (t) {
                    return new Promise(t)
                };
                Uc.resolve = tu(Fc, jc), Uc.reject = tu(Gc, jc), Uc.all = tu(Hc, jc), jc = Uc
            }
            var Xc, Vc,
                zc = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                Yc = (Vc = window, function (t) {
                    return Xc ? new Xc(t) : Io("Error", Vc.Error) ? (Xc = Vc.Error, new Vc.Error(t)) : new (Xc = Si)(t)
                }), qc = ao(/^http./), Kc = ao(/^err.kn/), Wc = /[^a-z0-9.:-]/, Jc = go((function (t, e, n) {
                    var r, i = new t.XMLHttpRequest, o = n.Z, a = lu(n.He ? ((r = {}).wmode = "7", r) : {}, n.Fb);
                    return new jc((function (r, u) {
                        i.open(n.rg || "GET", e + "?" + Ci(a), !0), i.withCredentials = !1 !== n.ug, n.Vc && (i.timeout = n.Vc), uu(fu, Mu((function (t) {
                            i.setRequestHeader(t[0], t[1])
                        })))(n.Eb);
                        var c = go(yi)(t, i, Ti(n.za), n.He, n.Ji, r, u);
                        i.onreadystatechange = c;
                        try {
                            i.send(o)
                        } catch (t) {
                        }
                    }))
                })), $c = zi((function (t) {
                    return ("" + ((t = io(t, "document") || {}).characterSet || t.charset || "")).toLowerCase()
                })), Zc = zi(no(ou("document"), co("createElement", Ui))), Qc = zi((function (t) {
                    var e = io(t, "Element.prototype");
                    return e && (t = Eu((function (t) {
                        return Io(t, e[t])
                    }), ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? e[t] : null
                })), ts = no(oi, qa("INPUT")), es = no(oi, qa("TEXTAREA")), ns = no(oi, qa("SELECT")),
                rs = no(ou("type"), ao(/^(checkbox|radio)$/)), is = no(oi, ao(/^INPUT|SELECT|TEXTAREA$/)),
                os = no(oi, ao(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                as = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "), us = ["submit", "image", "hidden"],
                cs = go(ri),
                ss = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                fs = zi((function () {
                    for (var t = 59, e = {}, n = 0; n < ss.length; n += 1) e[ss[n]] = String.fromCharCode(t), t += 1;
                    return e
                })), hs = zi((function (t) {
                    return {Lj: t, Wa: null, eb: []}
                })), ls = go(Wr), ds = {}, ps = {};
            ds.p = 500;
            var vs = {i: "id", n: "name", h: "href", ty: "type"};
            ps.h = !0, ps.c = !0;
            var ms = {};
            ms.p = $r, ms.c = function (t, e, n) {
                return (t = To(io(e, "textContent"))) && n && ((n = n(e)).length && Iu(no(ou("textContent"), To, qa(t)), n) && (t = "")), ts(e) && (t = To(e.getAttribute && e.getAttribute("value") || t)), t
            };
            var gs, bs, ys = "button," + ku((function (t) {
                    return 'input[type="' + t + '"]'
                }), ["button", "submit", "reset", "file"]).join(",") + ",a", ws = ls(ys),
                Es = ((gs = {}).A = "h", gs.BUTTON = "i", gs.DIV = "i", gs.INPUT = "ty", gs),
                Cs = go((function (t, e, n, r) {
                    return new jc((function (i, o) {
                        var a = li(t), u = e("img"), c = no(co(u, mi), co(Ti(r.za), o)), s = Bi(t, c, r.Vc || 3e3);
                        u.onerror = c, u.onload = no(co(u, mi), co(null, i), so([t, s], Fi)), delete (c = lu({}, r.Fb)).wmode, u.src = wi(n, r, c), Uu(t) && (lu(u.style, {
                            position: "absolute",
                            visibility: "hidden",
                            width: "0px",
                            height: "0px"
                        }), a.appendChild(u))
                    }))
                })), xs = go((function (t, e, n) {
                    return new jc((function (r, i) {
                        var o, a, u = "_ymjsp" + Gr(t), c = lu(((o = {}).callback = u, o), n.Fb), s = so([t, u], Fr);
                        t[u] = function (t) {
                            try {
                                s(), mi(f), r(t)
                            } catch (t) {
                                i(t)
                            }
                        }, c.wmode = "5";
                        var f = Jr(t, ((a = {}).src = wi(e, n, c), a));
                        if (!f) return s(), i(Yc("jp.s"));
                        o = no(o = co(f, mi), co(Ti(n.za), i)), a = Bi(t, o, n.Vc || 1e4), a = so([t, a], Fi), f.onload = a, f.onerror = no(s, a, o)
                    }))
                })), As = go((function (t, e, n, r) {
                    return new jc((function (i, o) {
                        if (!io(t, "navigator.onLine")) return o();
                        var a = lu(r.Fb, {"force-urlencoded": 1});
                        return 2e3 < (a = n + "?" + Ci(a) + (r.Z ? "&" + r.Z : "")).length ? o(Ti("sb.tlq")) : e(a) ? i("") : o()
                    }))
                })), Ts = bc((function (t) {
                    return t = fu(t), Ya("", ku((function (t) {
                        var e = t[0];
                        return t = t[1], $a(t) ? "" : e + "(" + t + ")"
                    }), t))
                })), Ss = [Lr, 0, bi, jr, Ur], ks = [bi];
            ks.push(jr);
            var _s = Or(ks), Rs = Or([Ur]), Ms = Or([Lr, Ur]), Ns = Or([0, bi, jr, Ur]),
                Is = ((bs = {}).h = _s, bs.f = _s, bs.er = Rs, bs);
            Is.d = Rs, Is.s = Or([bi]), Is.S = Is.s, Is.u = Rs, Is.pi = Rs, Is.m = Ms, Is[2] = Ss, Is[6] = Or([0, bi]), Is.t = Ss, Is.a = Ns, Is.n = Ss, Is.p = Or([0, bi]), Is[4] = Or([0, bi, Ur]), Is.r = Ns, Is[1] = Ss, Is.g = Ss, Is.c = Rs, Is.e = Ss, Is.adb = Rs, Is.W = Or([0, bi]), Is[5] = Ss;
            var Ds, Ps = zi((function (t, e) {
                    var n;
                    return (n = e ? Is[e] : Ss) || (n = []), (n = iu((function (e, n, r) {
                        return (n = n && n(t)) && e.push([r, n]), e
                    }), [], n)).length || Ai(), n
                }), qi), Os = ["0", "1", "2", "3"], Ls = Os[0], js = Os[1], Bs = Os[2],
                Fs = ku(no(Ki, uo("concat", "GDPR-ok-view-detailed-")), Os),
                Gs = Lo("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), Fs, ["28", "29", "30"]),
                Hs = "3 13 14 15 16 17 28".split(" "), Us = no(Mu(ou("ymetrikaEvent.type")), wu(xu(Gs))), Xs = /:\d+$/,
                Vs = zi((function (t) {
                    var e = (_i(t).host || "").split(".");
                    return 1 === e.length ? e[0] : iu((function (n, r, i) {
                        return 2 <= (i += 1) && !n && (i = Ya(".", e.slice(-i)), vr(t, i) && (n = i)), n
                    }), "", e)
                })), zs = zi(Ko), Ys = zi((function (t) {
                    hr(t, "_ymBRC", "1");
                    var e = "1" !== lr(t, "_ymBRC");
                    return e || dr(t, "_ymBRC"), e
                })), qs = zi(fr), Ks = zi(fr, (function (t, e, n) {
                    return "" + e + n
                })), Ws = zi(cr), Js = Xi("r", (function (t, e) {
                    var n = nr(t, e), r = n[0];
                    return !n[1] && r
                })), $s = zi(er, (function (t, e) {
                    return "{" + e.Nd + e.bb
                })), Zs = zi(Hi, mc), Qs = no($s, jo), tf = go((function (t, e) {
                    for (var n = []; !Zn(e);) {
                        var r = Kn(e);
                        t(r, (function (t) {
                            return t(e)
                        })), n.push(r)
                    }
                    return n
                })), ef = go((function (t, e, n) {
                    return n(t, e)
                })), nf = go((function (t, e) {
                    return Ja((function (n, r) {
                        return e(n, (function (e) {
                            try {
                                r(t(e))
                            } catch (t) {
                                n(t)
                            }
                        }))
                    }))
                })), rf = go((function (t, e) {
                    return Ja((function (n, r) {
                        return e(n, (function (e) {
                            try {
                                t(e)(ef(n, r))
                            } catch (t) {
                                n(t)
                            }
                        }))
                    }))
                })), of = [], af = !1, uf = zi((function (t) {
                    if (t = Zc(t)) return t("a")
                })), cf = ["webkitvisibilitychange", "visibilitychange"], sf = so([1, null], Oi), ff = so([1, 0], Oi),
                hf = /^ *(data|javascript):/i,
                lf = new RegExp(Ya("", ["\\.(" + Ya("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                df = ((Ds = {}).hit = "h", Ds.experiments = "ex", Ds.params = "p", Ds.reachGoal = "g", Ds.userParams = "up", Ds.trackHash = "th", Ds.accurateTrackBounce = "atb", Ds.notBounce = "nb", Ds.addFileExtension = "fe", Ds.extLink = "el", Ds.file = "fc", Ds.trackLinks = "tl", Ds.destruct = "d", Ds.setUserID = "ui", Ds.getClientID = "ci", Ds.clickmap = "cm", Ds.enableAll = "ea", Ds),
                pf = ao(/^.+\.mtproxy\.yandex\.net$/), vf = zi((function (t) {
                    return "MetrikaPlayer" === t.name || (t = _i(t).hostname, pf(t))
                })), mf = zi((function () {
                    return {Db: {}, pending: {}, rb: {}}
                })), gf = ou("postMessage"), bf = go((function (t, e, n, r) {
                    var i, o = {Yb: Ws(t)(ur), key: t.Math.random(), dir: 0};
                    return n.length && (o.Yb = parseInt(n[0], 10), o.key = parseFloat(n[1]), o.dir = parseInt(n[2], 10)), lu(r, e), (i = {data: r}).__yminfo = Ya(":", ["__yminfo", o.Yb, o.key, o.dir]), {
                        Y: o,
                        fg: Ei(t, e = i) || ""
                    }
                })), yf = Rr("s.f", go((function (t, e, n, r, i) {
                    e = e(r);
                    var o = mf(t), a = Ya(":", [e.Y.Yb, e.Y.key]);
                    if (gf(n)) {
                        o.pending[a] = i;
                        try {
                            n.postMessage(e.fg, "*")
                        } catch (t) {
                            return void delete o.pending[a]
                        }
                        Sr(t, (function () {
                            delete o.pending[a]
                        }), 5e3, "if.s")
                    }
                }))), wf = Rr("s.fh", go((function (t, e, n, r, i, o) {
                    var a = null, u = null, c = mf(t), s = null;
                    try {
                        u = (a = Yo(t, o.data)).__yminfo, s = a.data
                    } catch (t) {
                        return
                    }
                    if (!po(u) && u.substring && "__yminfo" === u.substring(0, 8) && !po(s) && 4 === (a = u.split(":")).length) if (u = e.id, e = a[1], t = a[2], a = a[3], !eo(s) && s.type && "0" === a && s.counterId) {
                        if (!s.toCounter || s.toCounter == u) {
                            c = null;
                            try {
                                c = o.source
                            } catch (t) {
                            }
                            !$a(c) && gf(c) && (o = r.V(s.type, [o, s]), i = ku(no(Ki, du(i)), o.concat([{}])), s = n([e, t, s.counterId], i), c.postMessage(s.fg, "*"))
                        }
                    } else a === "" + u && eo(s) && yu((function (t) {
                        return !(!t.hid || !t.counterId)
                    }), s).length === s.length && (n = c.pending[Ya(":", [e, t])]) && n.apply(null, [o].concat(s))
                }))), Ef = zi((function (t, e) {
                    var n, r = Ui("getElementsByTagName", io(t, "document")), i = mf(t), o = gf(t), a = kr(t), u = Oc(t);
                    if (!r || !o) return null;
                    r = r.call(t.document, "iframe"), (n = {}).counterId = e.id, n.hid = "" + Nn(t), o = n, function (t, e) {
                        var n = mf(t);
                        e.C("initToParent", (function (t) {
                            var e = t[1];
                            n.rb[e.counterId] = {info: e, window: t[0].source}
                        })).C("initToChild", (function (n) {
                            var r = n[0];
                            n = n[1], r.source === t.parent && e.V("parentConnect", [r, n])
                        })).C("parentConnect", (function (t) {
                            var e = t[1];
                            e.counterId && (n.Db[e.counterId] = {info: e, window: t[0].source})
                        }))
                    }(t, a), n = bf(t, o);
                    var c = yf(t, n([]));
                    return _u((function (t) {
                        var e = null;
                        try {
                            e = t.contentWindow
                        } catch (t) {
                        }
                        e && c(e, {type: "initToChild"}, (function (t, e) {
                            a.V("initToParent", [t, e])
                        }))
                    }), r), Zu(t) && c(t.parent, {type: "initToParent"}, (function (t, e) {
                        a.V("parentConnect", [t, e])
                    })), u.C(t, ["message"], wf(t, e, n, a, o)), {$: a, Db: i.Db, rb: i.rb, ne: c}
                }), no(qi, mc)), Cf = go((function (t, e, n, r, i) {
                    return new jc((function (o, a) {
                        var u = hu(n), c = no(r.resolve ? r.resolve : Ki, Ka(o)), s = no(r.reject ? r.reject : Ki, Ka(a));
                        r.resolve = c, r.reject = s, _u((function (o) {
                            var a;
                            r.Be.push(o);
                            var u = n[o], c = Sr(t, co(Ti(), s), 5100, "is.m");
                            e(u.window, lu(i, ((a = {}).toCounter = parseInt(o, 10), a)), (function (e, n) {
                                Fi(t, c), r.ag.push(o), r.resolve && r.resolve(n)
                            }))
                        }), u)
                    })).catch(Mr(t, "if.b"))
                })), xf = go((function (t, e, n) {
                    e = yu((function (t) {
                        return !Cu(n.info.counterId, t.Be)
                    }), e), _u((function (e) {
                        var r;
                        n.info.counterId && t(((r = {})[n.info.counterId] = n, r), e, e.data)
                    }), e)
                })), Af = zi(Mn, no(qi, mc)), Tf = Rr("pa.plgn", (function (t, e) {
                    var n = Af(t, e);
                    n && n.$.C("pluginInfo", Mr(t, "c.plgn", (function () {
                        var n = mu(t);
                        return n.o("cmc", n.l("cmc", 0) + 1), function (t, e) {
                            return iu((function (t, n) {
                                return t[e[n[0]].Gf] = n[1], t
                            }), {}, fu(t))
                        }(e, pc)
                    })))
                })), Sf = yo((function (t, e) {
                    return mu(e).l(t, null)
                })), kf = {
                    mc: function (t) {
                        return t = $i(t).l("mt", {}), (t = fu(t)).length ? iu((function (t, e, n) {
                            return t + (n ? "-" : "") + e[0] + "-" + e[1]
                        }), "", t) : null
                    }
                };
            kf.oo = Sf("oo"), kf.pmc = Sf("cmc"), kf.clc = Sf("cls"), kf.lt = function (t) {
                var e = $i(t).l("lt", null);
                return e ? t.Math.round(100 * e) : e
            }, kf.aw = function (t) {
                return po(t = Eu(no(po, Yi), [t.document.hidden, t.document.msHidden, t.document.webkitHidden])) ? null : ff(!t)
            };
            var _f, Rf, Mf, Nf = hu(kf), If = zi((function () {
                    return {$e: null, qc: []}
                }), mc),
                Df = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function (t, e) {
                    return io(e, "redirectCount") || io(t, "navigation.redirectCount")
                }], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]],
                Pf = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]],
                Of = ((_f = {}).responseEnd = 1, _f.domInteractive = 1, _f.domContentLoadedEventStart = 1, _f.domContentLoadedEventEnd = 1, _f.domComplete = 1, _f.loadEventStart = 1, _f.loadEventEnd = 1, _f.unloadEventStart = 1, _f.unloadEventEnd = 1, _f.secureConnectionStart = 1, _f),
                Lf = zi(Gi), jf = {"*": "+", "-": "/", Aj: "=", "+": "*", "/": "-", "=": "_"}, Bf = zi((function (t) {
                    t = io(t, "console");
                    var e = io(t, "log");
                    e = Do("log", e) ? tu(e, t) : Po;
                    var n = io(t, "warn");
                    n = Do("warn", n) ? tu(n, t) : e;
                    var r = io(t, "error");
                    return {log: e, error: t = Do("error", r) ? tu(r, t) : e, warn: n}
                })), Ff = Rr("p.cd", (function (t) {
                    if (Yu(t) || Fu(t)) {
                        var e = qs(t);
                        if (po(e.l("jn"))) {
                            e.o("jn", !1);
                            var n = t.Fj || Uu(t) ? function () {
                            } : /./;
                            t = Bf(t), n.toString = function () {
                                return e.o("jn", !0), "Yandex.Metrika counter is initialized"
                            }, t.log("%c%s", "color: inherit", n)
                        }
                    }
                })), Gf = /Firefox\/([0-9]+)/, Hf = /([0-9\\.]+) Safari/, Uf = /\sYptp\/\d\.(\d+)\s/, Xf = /Edg\/(\d+)\./,
                Vf = zi((function (t) {
                    var e;
                    return !(50 <= (e = (e = Bu(t)) && (e = Uf.exec(e)) && 1 < e.length ? parseInt(e[1], 10) : 0) && 99 >= e || Sn(t, 79)) && (!uc(t) || Hu(t))
                })),
                zf = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                Yf = zi((function (t) {
                    var e = io(t = Zc(t)("canvas"), "getContext");
                    if (!e) return null;
                    try {
                        var n = tu(e, t)("2d");
                        n.font = "72px mmmmmmmmmmlli";
                        var r = n.measureText("mmmmmmmmmmlli").width;
                        return function (t) {
                            return n.font = "72px " + t, n.measureText("mmmmmmmmmmlli").width === r
                        }
                    } catch (t) {
                        return null
                    }
                })), qf = No(String.prototype.repeat, "repeat"), Kf = qf ? function (t, e) {
                    return qf.call(t, e)
                } : function (t, e) {
                    for (var n = "", r = 0; r < e; r += 1) n += t;
                    return n
                }, Wf = [2277735313, 289559509], Jf = [1291169091, 658871167], $f = /\/$/, Zf = zi(no(Ws, Ja((function (t) {
                    return -(new t.b.Date).getTimezoneOffset()
                })))), Qf = no(Ws, Ja((function (t) {
                    return t = new t.b.Date, Ya("", ku(sr, [t.getFullYear(), t.getMonth() + 1, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()]))
                }))), th = no(Ws, Ja(or)), eh = zi(no(Ws, Ja((function (t) {
                    return t.oa[0]
                })))), nh = zi(Hi), rh = zi(Hi), ih = zi((function (t) {
                    var e = io(t, "webkitRequestFileSystem");
                    if (vo(e) && !Yu(t)) return new jc(tu(e, t, 0, 0)).then((function () {
                        var e = io(t, "navigator.storage") || {};
                        return e.estimate ? e.estimate() : {}
                    })).then((function (t) {
                        return !!((t = t.quota) && 12e7 > t)
                    })).catch(co(!0, Ki));
                    if (Tu(t)) return e = io(t, "navigator.serviceWorker"), jc.resolve(Za(e));
                    if (e = io(t, "openDatabase"), Uu(t) && vo(e)) {
                        var n = !1;
                        try {
                            e(null, null, null, null)
                        } catch (t) {
                            n = !0
                        }
                        return jc.resolve(n)
                    }
                    return jc.resolve(!io(t, "indexedDB") && (io(t, "PointerEvent") || io(t, "MSPointerEvent")))
                })), oh = /(\?|&)turbo_uid=([\w\d]+)($|&)/, ah = zi((function (t, e) {
                    var n = zs(t), r = _i(t).search.match(oh);
                    return r && 2 <= r.length ? (r = r[2], e.bb || n.o("turbo_uid", r), r) : (n = n.l("turbo_uid")) ? n : ""
                })), uh = zi((function (t) {
                    return vo(io(t, "yandex.getSiteUid")) ? t.yandex.getSiteUid() : null
                })), ch = zi((function (t) {
                    var e = (t = mu(t)).l("counterNum", 0) + 1;
                    return t.o("counterNum", e), e
                }), no(qi, mc)), sh = ((Rf = {}).vf = co(Ga.version, Ki), Rf.nt = Ku, Rf.fp = function (t, e, n) {
                    if (n.G && n.G.nohit) return null;
                    if (e = mc(e), (n = nh(t))[e]) return null;
                    t:{
                        var r = eh(t), i = io(t, "performance.getEntriesByType");
                        if (vo(i)) {
                            if ((t = yu(no(Ki, ou("name"), qa("first-contentful-paint")), i.call(t.performance, "paint"))).length) {
                                t = t[0].startTime;
                                break t
                            }
                        } else {
                            if (vo(i = io(t, "chrome.loadTimes")) && (i = io(i = i.call(t.chrome), "firstPaintTime"), r && i)) {
                                t = 1e3 * i - r;
                                break t
                            }
                            if (t = io(t, "performance.timing.msFirstPaint")) {
                                t -= r;
                                break t
                            }
                        }
                        t = void 0
                    }
                    return t ? (n[e] = t, Math.round(t)) : null
                }, Rf.fu = function (t, e, n) {
                    var r = n.G;
                    return r ? (e = (io(t, "document.referrer") || "").replace($f, ""), n = (r["page-ref"] || "").replace($f, ""), r = r["page-url"], e = e !== n, n = 0, (t = _i(t).href !== r) && e ? n = 3 : e ? n = 1 : t && (n = 2), n) : null
                }, Rf.en = $c, Rf.la = Ju, Rf.ut = function (t, e, n) {
                    var r = n.yc;
                    return (n = n.G) && (Nc(t) || e.Ee || r) && (n.ut = "noindex"), null
                }, Rf.v = co(fc.Ia, Ki), Rf.cn = ch, Rf.dp = function (t) {
                    var e = mu(t), n = e.l("bt", {});
                    if (Za(e.l("bt"))) {
                        var r = io(t, "navigator.getBattery");
                        try {
                            n.p = r ? r.call(t.navigator) : null
                        } catch (t) {
                        }
                        e.o("bt", n), n.p && n.p.then && n.p.then((function (t) {
                            n.kj = t.charging && 0 === t.chargingTime
                        }))
                    }
                    return n.kj ? "1" : "0"
                }, Rf.ls = zi((function (t, e) {
                    var n = Ks(t, e.id), r = Ws(t), i = n.l("lsid");
                    return +i ? i : (r = Gr(t, 0, r(ur)), n.o("lsid", r), r)
                }), qi), Rf.hid = Nn, Rf.z = Zf, Rf.i = Qf, Rf.et = th, Rf.c = no(ou("navigator.cookieEnabled"), sf), Rf.rn = no(Ki, Gr), Rf.rqn = function (t, e, n) {
                    return !(n = n.G) || n.nohit ? null : (e = ((t = Ks(t, e.id)).l("reqNum", 0) || 0) + 1, t.o("reqNum", e), t.l("reqNum") === e ? e : (t.Zb("reqNum"), null))
                }, Rf.u = $s, Rf.tp = no(qi, Ri, sf), Rf.tpid = no(qi, (function (t) {
                    return t = mc(t), vc[t] && vc[t].$i || null
                })), Rf.w = function (t) {
                    return (t = fi(t))[0] + "x" + t[1]
                }, Rf.s = function (t) {
                    var e = io(t, "screen");
                    if (e) {
                        t = io(e, "width");
                        var n = io(e, "height");
                        return e = io(e, "colorDepth") || io(e, "pixelDepth"), Ya("x", [t, n, e])
                    }
                    return null
                }, Rf.sk = ou("devicePixelRatio"), Rf.ifr = no(Zu, sf), Rf.j = no(tc, sf), Rf.sti = function (t) {
                    return Zu(t) && Qu(t) ? "1" : null
                }, Rf);
            sh.pri = function (t) {
                if (Xu(t)) return null;
                var e = rh(t), n = e.Jf;
                return Za(n) && (e.Jf = null, ih(t).then((function (t) {
                    e.Jf = t
                }))), n ? 1 : null
            }, lu(sh, ((Mf = {}).iss = no(ec, sf), Mf.hdl = no(nc, sf), Mf.iia = no(rc, sf), Mf.cpf = no(ic, sf), Mf.ntf = zi((function (t) {
                t:switch (io(t, "Notification.permission")) {
                    case"denied":
                        t = !1;
                        break t;
                    case"granted":
                        t = !0;
                        break t;
                    default:
                        t = null
                }
                return $a(t) ? null : t ? 2 : 1
            })), Mf.eu = Sf("isEU"), Mf.ns = eh, Mf.np = function (t) {
                if (Gr(t, 0, 100)) t = null; else {
                    t = To(Gu(t), 100);
                    for (var e = [], n = 0; n < t.length; n++) {
                        var r = t.charCodeAt(n);
                        128 > r ? e.push(r) : (127 < r && 2048 > r ? e.push(r >> 6 | 192) : (e.push(r >> 12 | 224), e.push(r >> 6 & 63 | 128)), e.push(63 & r | 128))
                    }
                    t = kn(e)
                }
                return t
            }, Mf.re = no((function (t, e) {
                return !e.bb && Js(t, e)
            }), sf), Mf)), sh.ds = function (t, e, n) {
                if (e = mc(e), t = Dr(t), (void 0 === (n = n.G) ? {} : n).nohit) return null;
                var r = n = null;
                if (io(t, "getEntriesByType") && (r = io(t.getEntriesByType("navigation"), "0")) && (n = Pf), !n) {
                    var i = io(t, "timing");
                    i && (n = Df, r = i)
                }
                return n ? (t = function (t, e, n) {
                    return ku((function (n) {
                        var r = n[0], i = n[1];
                        if (vo(r)) return r(t, e) || null;
                        if (vo(i)) return null;
                        var o = !(!e[r] || !e[i]);
                        return !o && 2 === n.length && (o = 0 === e[r] && 0 === e[i]) && (o = n[1], o = !(Of[n[0]] || Of[o])), o ? 0 > (n = Math.round(e[r]) - Math.round(e[i])) || 36e5 < n ? null : n : 1 === n.length && e[r] ? Math.round(e[r]) : null
                    }), n)
                }(t, r, n), (e = function (t, e) {
                    var n = t.length ? ku((function (t, n) {
                        var r = e[n];
                        return r === t ? null : r
                    }), t) : e;
                    return t.length = 0, _u(no(Ki, uo("push", t)), e), yu(qa(null), n).length === t.length ? null : n
                }(e = Lf(e), t)) && Ya(",", e)) : null
            }, sh.bu = uh, sh.td = ah, sh.wv = co(2, Ki), sh.co = function (t) {
                return ff(mu(t).l("jn"))
            };
            var fh = hu(sh);
            sh.we = function (t, e) {
                return sf(e.Ra)
            };
            var hh, lh, dh, ph, vh = fh.concat(Nf),
                mh = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                gh = go((function (t, e, n) {
                    var r = n[t];
                    r ? (r.Fi = e, r.Qf = !0, r.Pf ? r.Pf(e) : r.Oa = jc.resolve(e)) : n[t] = {
                        Oa: jc.resolve(e),
                        Fi: e,
                        Qf: !0
                    }
                })), bh = go((function (t, e) {
                    if (!e[t]) {
                        var n, r = new jc((function (t) {
                            n = t
                        }));
                        e[t] = {Pf: n, Oa: r, Qf: !1}
                    }
                    return e[t].Oa
                })), yh = zi(no(Hi, Ja)), wh = zi((function (t, e, n) {
                    var r = mu(t);
                    e = qs(t);
                    var i = [];
                    n = so([t, n, r, e], An), Xu(t) || function (t, e) {
                        if (Uu(t)) {
                            var n = Bu(t).match(Hf);
                            if (n && n.length) return n[1] === e
                        }
                        return !1
                    }(t, "14.1") || i.push(so([yn, "pp", ""], n));
                    var o = Vf(t) && !Tn(t, 68);
                    return o || i.push(so([wn, "pu", ""], n)), o || e.Hd || uc(t) || (i.push(so([mn, "zzlc", "na"], n)), i.push(so([vn, "cc", ""], n))), i.length ? {
                        Ha: function (t, e) {
                            if (0 === r.l("isEU")) try {
                                _u(no(Ki, Vi), i)
                            } catch (t) {
                            }
                            e()
                        }, ba: function (t, e) {
                            var n = t.H;
                            if (n && 0 === r.l("isEU")) try {
                                _u(Ja(n), i)
                            } catch (t) {
                            }
                            e()
                        }
                    } : {}
                }), (function (t, e, n) {
                    return mc(n)
                })), Eh = Xi("retryReqs", (function (t) {
                    return qs(t).l("retryReqs", {})
                })), Ch = ["0"], xh = Rr("g.r", (function (t) {
                    var e = Ws(t), n = Eh(t), r = e(ur), i = Nn(t);
                    return iu((function (t, e) {
                        var n = e[0], o = e[1];
                        return o && !o.d && o.ghid && o.ghid !== i && o.time && 500 < r - o.time && o.time + 864e5 > r && 2 >= o.browserInfo.rqnl && (o.d = 1, t.push({
                            protocol: o.protocol,
                            host: o.host,
                            Hi: o.resource,
                            Bi: o.postParams,
                            R: o.params,
                            Pg: o.browserInfo,
                            Nj: o.ghid,
                            time: o.time,
                            Gb: parseInt(n, 10),
                            $g: o.counterId,
                            aa: o.counterType
                        })), t
                    }), [], fu(n))
                })), Ah = [], Th = "ru en et fi lt lv pl fr no sr".split(" "),
                Sh = ((hh = {})["GDPR-ok"] = "ok", hh["GDPR-ok-view-default"] = "ok-default", hh["GDPR-ok-view-detailed"] = "ok-detailed", hh["GDPR-ok-view-detailed-0"] = "ok-detailed-all", hh["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", hh["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", hh["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", hh),
                kh = [], _h = no(Us, Mu(vu(Gs)), Wa(",")), Rh = no(wu(xu(Gs)), au, Boolean), Mh = zi((function (t, e) {
                    var n = e.l("gdpr");
                    return Cu(n, Os) ? "-" + n : ""
                })), Nh = zi(Gi),
                Ih = ((lh = {}).am = "com.am", lh.tr = "com.tr", lh.ge = "com.ge", lh.il = "co.il", lh["рф"] = "ru", lh["xn--p1ai"] = "ru", lh["укр"] = "ua", lh["xn--j1amh"] = "ua", lh["бел"] = "by", lh["xn--90ais"] = "by", lh),
                Dh = "85822663:0 21279832:0 34273590:0 64681882:0 42639109:0 23731303:0 86821095:0".split(" "), Ph = {
                    "an.yandex.ru/mapuid/google/?partner-tag=yandex_llc": {Tb: Dh},
                    "an.yandex.ru/mapuid/google/?partner-tag=yandexcom": {Tb: Dh},
                    "an.yandex.ru/mapuid/google/?partner-tag=yandexru": {Tb: Dh},
                    "mc.edadeal.ru": {Ic: /^([^/]+\.)?edadeal\.ru$/, kg: "ru"},
                    "mc.yandexsport.ru": {Ic: /^([^/]+\.)?yandexsport\.ru$/, kg: "ru"},
                    "mc.kinopoisk.ru": {Ic: /^([^/]+\.)?kinopoisk\.ru$/, kg: "ru"}
                },
                Oh = ((dh = {}).ka = "ge", dh.ro = "md", dh.tg = "tj", dh.tk = "tm", dh.et = "ee", dh.hy = "com.am", dh.he = "co.li", dh.ky = "kg", dh.uk = "ua", dh.be = "by", dh.tr = "com.tr", dh.kk = "kz", dh),
                Lh = zi(Gi), jh = zi((function (t) {
                    var e = no(wu(no(Ki, qa("ru"), Yi)), oo((function (t, e) {
                        return t[e] = ["mc.yandex." + e], t
                    }), {}))(Cc);
                    return _u((function (n) {
                        var r = n[0];
                        (n = n[1]).Tb && !Cu(t, n.Tb) || (e[r] = [r])
                    }), fu(Ph)), e
                })), Bh = zi((function (t) {
                    var e = _i(t).hostname;
                    return iu((function (t, n) {
                        var r = n[0], i = n[1];
                        return i.Ic && !i.Ic.test(e) || t.push(r), t
                    }), [], fu(Ph))
                })), Fh = yo((function (t, e) {
                    var n = Ac(e), r = function (t) {
                        return t = $u(t), Oh[t] || "ru"
                    }(e), i = Bh(e) || [un(e)], o = Ws(e), a = qs(e), u = a.l("synced", {});
                    return n = n ? i.concat(r) : i, u && (n = yu((function (t) {
                        var e = (u[t] || 1) + 1440 < o(ar);
                        return e && delete u[t], e
                    }), n)), a.o("synced", u), iu((function (e, n) {
                        return _u((function (t) {
                            var r = {domain: t, fi: n};
                            ko(t, "/") && (r.Qh = 1), e.push(r)
                        }), t[n] || []), e
                    }), [], n)
                })), Gh = function (t, e) {
                    return function (e, n, r) {
                        n = mc(r), r = jh(n);
                        var i = Fh(r), o = Cu(n, Dh);
                        return uc(e) || Tu(e) ? {} : {
                            ba: function (n, r) {
                                var a = n.H, u = mu(e);
                                if (!Ac(e) && !o || Zu(e) || !a || !a.l("pv")) return r();
                                if (!(a = i(e)).length) return r();
                                if (u.l("startSync")) Lh(e).push(r); else {
                                    if (u.o("startSync", !0), o) return t(e, a).then(r, r);
                                    if (!(u = Ah[0])) return r();
                                    u(e).then(so([e, a], t)).then(r, no(Ka(r), Mr(e, "sy.c"))).catch(Po)
                                }
                            }
                        }
                    }
                }((function (t, e) {
                    var n = Ws(t), r = mu(t), i = qs(t), o = Ps(t, "c"), a = Qn(t, o);
                    return iu((function (e, o) {
                        function u() {
                            var e = i.l("synced");
                            r.o("startSync", !1), e && (e[o.fi] = c, i.o("synced", e)), _u(Vi, Lh(t))
                        }

                        var c,
                            s = a({za: ["sync.cook"]}, [fc.Ja + "//" + o.domain + (o.Qh ? "" : "/sync_cookie_image_check")], {Vc: 1500});
                        return s.then((function () {
                            c = n(ar), u()
                        })).catch((function () {
                            c = n(ar) - 1435, u()
                        })), s = co(s, Ki), e.then(s)
                    }), jc.resolve(""), e).catch(Mr(t, "ctl"))
                })), Hh = !1, Uh = /^[a-z][\w.+-]+:/i, Xh = {}, Vh = [Dn, Rn, xn(), Cn], zh = "et w v z i u vf".split(" ");
            zh.push("we");
            var Yh = xn(zh);
            Vh.push(Gh), Vh.unshift((function (t, e, n) {
                return {
                    Ha: function (e, r) {
                        var i = fn(t, n);
                        (i = i && i.userParams) && e.$c && i(e.$c), r()
                    }
                }
            })), Vh.unshift((function (t, e, n) {
                return {
                    ba: function (e, r) {
                        if (e.R && (Mi(n, e.R), !e.Z && e.H && e.G)) {
                            var i = Ei(t, e.R), o = Nh(t), a = e.H.l("pv");
                            i && !e.G.nohit && (a ? encodeURIComponent(i).length > fc.Ag ? o.push([e.H, e.R]) : e.G["site-info"] = i : (e.Z = i, e.li = !0))
                        }
                        r()
                    }, Ha: function (e, r) {
                        var i = Nh(t), o = fn(t, n), a = o && o.params;
                        a && (o = yu(no(ou("0"), qa(e.H)), i), _u((function (e) {
                            a(e[1]), e = Du(t)(e, i), i.splice(e, 1)
                        }), o)), r()
                    }
                }
            })), Vh.push(on), Vh.push(rn), Vh.push(wh), Vh.push((function (t) {
                return {
                    ba: function (e, n) {
                        var r = e.H, i = qs(t).l("fip");
                        i && r && (r.o("fip", i), Br(e, "fip", ff(i))), n()
                    }
                }
            })), Vh.push(hn());
            var qh = ((ph = {}).h = Vh, ph.er = [], ph);
            qh.adb = [];
            var Kh = [xn(), Cn];
            Kh.push(wh), qh.f = Kh, qh[2] = Vh, qh[1] = function (t, e) {
                return yu(no(xu(e), Yi), t)
            }(Vh, [Cn]), qh.a = Vh, qh.g = Vh, qh.e = Vh;
            var Wh = [Rn];
            Wh.push((function (t) {
                return {
                    ba: function (e, n) {
                        var r = e.H, i = void 0 === r ? yc() : r, o = e.Gb, a = Eh(t);
                        r = i.l("rqnl", 0) + 1, i.o("rqnl", r), (i = io(a, Ya(".", [o, "browserInfo"]))) && (i.rqnl = r, dn(t)), n()
                    }, Ha: function (e, n) {
                        ln(t, e), n()
                    }
                }
            })), qh.r = Wh;
            var Jh = [];
            Jh.push(Yh), Jh.push(hn()), qh.p = Jh, qh[6] = [Rn], qh.t = Vh, qh[4] = [Yh], qh.W = [Yh];
            var $h = [Dn, Rn, xn()];
            $h.push(on), $h.push(wh), $h.push(rn), $h.push(hn()), qh.n = $h, qh.d = [xn(["hid", "u", "v", "vf"])], qh.m = [xn(["u", "v", "vf"]), hn()], qh.s = [], qh.u = [], qh.S = [xn(["v", "hid", "u", "vf", "rn"])], qh.pi = [], Vh.unshift((function (t, e, n) {
                return {
                    ba: function (e, r) {
                        var i = e.H, o = e.G;
                        if (!i || !o) return r();
                        !Xh[n.id] && i.l("pv") && n.exp && !o.nohit && (o.exp = n.exp, Xh[n.id] = !0), i = o["page-ref"];
                        var a = o["page-url"];
                        return i && a !== i ? o["page-ref"] = nn(t, i) : delete o["page-ref"], o["page-url"] = nn(t, a).slice(0, fc.Cg), r()
                    }
                }
            })), qh[5] = yu(no(xu([Dn, Rn]), Yi), Vh);
            var Zh, Qh = tu(jc.reject, jc, Ti()), tl = ((Zh = {}).h = Pn, Zh.er = co(Qh, Ki), Zh);
            tl.a = Pn, tl.p = pn, tl[4] = pn, tl.f = Pn, tl.n = Pn, tl[6] = function (t, e, n) {
                var r = Qn(t, e);
                return function (t) {
                    return jn(0, n, t, !0).then(so([t, ["https://mc.yandex.md/cc"], {He: !0, ug: !1}], r))
                }
            }, tl[1] = Pn, tl.n = Pn, tl.c = Qn, tl.g = Pn, tl.e = Pn, tl[2] = Pn, tl.r = function (t, e, n) {
                var r = pn(t, e, n), i = Pn(t, e, n);
                return function (t, e, n) {
                    return "webvisor" === n ? r(t, e, t.G["wv-part"]) : i(t, e)
                }
            }, tl.adb = On, tl.s = Qn, tl.S = Pn, tl.u = Qn, tl.pi = Qn, tl.m = function (t, e, n) {
                return function (r, i) {
                    var o, a = r.G;
                    return (o = {})["page-url"] = a && a["page-url"] || "", a = o, o = lu(r, {G: lu(r.G || {}, a)}), On(t, e, n)(o, "clmap/" + i.id).catch(Mr(t, "c.m"))
                }
            }, tl.d = Pn, tl.t = Pn, tl.W = pn, tl[5] = Pn;
            var el, nl, rl = Rr("g.sen", (function (t, e, n) {
                    var r = Ps(t, e);
                    n = function (t, e, n) {
                        var r;
                        return (r = qh[e]) || (r = Vh), (r = r.slice()).unshift(cn), r.unshift(an), ku(no(eu([t, e, n]), Vi), r)
                    }(t, e, n);
                    var i = tl[e], o = i ? i(t, r, n) : Pn(t, r, n);
                    return function () {
                        var t = Eo(arguments), n = t.slice(1);
                        return t = lu(t[0], {za: [e]}), o.apply(void 0, Lo([t], n))
                    }
                }), Qh), il = zi(no(ou("id"), xu([26812653])), mc), ol = zi(Rr("dc.init", (function (t) {
                    var e = _i(t), n = Bf(t), r = zs(t), i = en(t), o = i.Yh;
                    return i = i.Ph, o && !i && r.o("debug", "1", void 0, e.host), In(t) || !o && !i ? {
                        log: Po,
                        warn: Po,
                        error: Po
                    } : n
                }))), al = Mr(window, "h.p", (function (t, e) {
                    var n, r, i = rl(t, "h", e), o = e.fc || "" + _i(t).href, a = e.vh || t.document.referrer,
                        u = {H: yc((n = {}, n.pv = 1, n)), G: (r = {}, r["page-url"] = o, r["page-ref"] = a, r)};
                    return u.R = e.R, u.$c = e.$c, e.Sb && u.G && (u.G.nohit = "1"), i(u, e).then((function (n) {
                        n && (e.Sb || Qe(t, e, "PageView. Counter " + e.id + ". URL: " + o + ". Referrer: " + a, e.R)(), Bn(t, so([t, e, n], bn)))
                    })).catch(Mr(t, "h.g.s"))
                })), ul = zi(Hi, mc), cl = Rr("p.ar", (function (t, e) {
                    var n = rl(t, "a", e);
                    return function (r, i, o, a, u, c) {
                        var s, f, h = {G: {}, H: yc((s = {}, s.pv = 1, s.ar = 1, s))};
                        if (r) return i = lo(i) ? {
                            title: i.title,
                            Mf: i.referer,
                            R: i.params,
                            Sa: i.callback,
                            b: i.ctx
                        } : {
                            title: i,
                            Mf: o,
                            R: a,
                            Sa: u,
                            b: c
                        }, (o = ul(e)).url !== r && (o.ref = o.url, o.url = r), r = r || _i(t).href, o = i.Mf || o.ref || t.document.referrer, a = Qe(t, e, "PageView. Counter " + e.id + ". URL: " + r + ". Referrer: " + o, i.R), h = n(lu(h, {
                            R: i.R,
                            title: i.title,
                            G: lu(h.G, (f = {}, f["page-url"] = r, f["page-ref"] = o, f))
                        }), e).then(a), Ze(t, "p.ar.s", h, i.Sa || Po, i.b)
                    }
                })), sl = {
                    K: "stamp",
                    L: "frameId",
                    Y: "meta",
                    Oe: "base",
                    lf: "hasBase",
                    Le: "address",
                    og: "ua",
                    ce: "prev",
                    Bf: "namespace",
                    wc: "keystrokes",
                    wf: "isMeta",
                    xc: "modifier",
                    gb: "pageWidth",
                    fb: "pageHeight",
                    dg: "startNode",
                    We: "endNode",
                    vg: "zoomFrom",
                    xg: "zoomTo",
                    level: "level",
                    duration: "duration",
                    ua: "i",
                    Ac: "o",
                    n: "n",
                    r: "r",
                    Wb: "ct",
                    pb: "at",
                    Cf: "nm",
                    Df: "ns",
                    Xd: "pa",
                    $d: "pr",
                    Rd: "nx",
                    La: "h",
                    ya: "changes",
                    Ke: "a",
                    Ne: "b",
                    dd: "c",
                    Wd: "op"
                }, fl = ["attributes", "attrs"], hl = function () {
                    function t(t) {
                        this.b = t
                    }

                    return t.prototype.Ca = function (t) {
                        var e = $e(t);
                        return t = ku(tu(this.Da, this), e), Un(Ei(this.b, ku((function (t, n) {
                            var r;
                            return lu({}, e[n], ((r = {}).data = t, r))
                        }), t)))
                    }, t.prototype.Da = function (t) {
                        var e = t.data;
                        return "string" != typeof e && (e = Ei(this.b, $e(t.data))), e
                    }, t.prototype.Ka = function (t) {
                        return encodeURIComponent(t).length
                    }, t.prototype.Sc = function (t, e) {
                        for (var n = Math.ceil(t.length / e), r = [], i = 0; i < e; i += 1) r.push(t.slice(i * n, n * (i + 1)));
                        return r
                    }, t.prototype.isEnabled = function () {
                        return !!this.b.JSON
                    }, t
                }(), ll = zi((function (t) {
                    if (void 0 === t.Float32Array || void 0 === t.Uint8Array) return qe;
                    var e = new Float32Array([-0]), n = new Uint8Array(e.buffer);
                    return 128 === n[3] ? function (t, r, i, o) {
                        e[0] = r, i[o] = n[0], i[o + 1] = n[1], i[o + 2] = n[2], i[o + 3] = n[3]
                    } : function (t, r, i, o) {
                        e[0] = r, i[o] = n[3], i[o + 1] = n[2], i[o + 2] = n[1], i[o + 3] = n[0]
                    }
                })), dl = ze(!1), pl = ze(!0), vl = {
                    Wi: "topics",
                    Di: "publicationDate",
                    Ai: "pageUrlCanonical",
                    hj: "updateDate",
                    Ng: "authors",
                    Lg: "articleInfo",
                    Ki: "rubric",
                    Ei: "publishersHeader",
                    ab: "involvedTime",
                    zi: "pageTitle",
                    gi: "maxScrolled",
                    Qe: "chars",
                    Mg: "articleMeta"
                }, ml = function () {
                    function t(t) {
                        this.b = t, this.zb = no(fu, oo((function (t, e) {
                            return t[e[1]] = e[0], t
                        }), {}))(vl)
                    }

                    return t.prototype.hg = function (t) {
                        var e, n = this.ae(t.data);
                        return {K: Ws(this.b)(ir), data: (e = {}, e[this.zb[t.type]] = n, e)}
                    }, t.prototype.ae = function (t) {
                        var e = this;
                        return eo(t) ? ku(tu(this.ae, this), t) : lo(t) ? no(fu, oo((function (t, n) {
                            var r = n[0];
                            return t[e.zb[r] || r] = e.ae(n[1]), t
                        }), {}))(t) : t
                    }, t.prototype.Da = function (t) {
                        return Ht(this.b, zt, this.hg(t))(qn(Po))
                    }, t.prototype.Ka = function (t) {
                        return t[0]
                    }, t.prototype.Sc = function (t) {
                        return [t]
                    }, t.prototype.Ca = function (t) {
                        var e = this;
                        return t = Ht(this.b, qt, {buffer: ku(tu(this.hg, this), t)}), Hn(this.b, t, 20, Yn)(rf((function (t) {
                            return t = Gt(e.b, t.slice(-4)), Hn(e.b, t, 20, Yn)
                        })))(nf((function (t) {
                            return t[t.length - 1]
                        })))
                    }, t.prototype.isEnabled = function () {
                        return Ft(this.b)
                    }, t
                }(), gl = function () {
                    function t(t, e, n) {
                        this.Ue = 0, this.Zd = 1, this.ad = 5e3, this.b = t, this.qa = e, this.pe = n
                    }

                    return t.prototype.Rc = function () {
                        this.Ue = Sr(this.b, no(tu(this.flush, this), tu(this.Rc, this)), this.ad, "b.f")
                    }, t.prototype.send = function (t, e) {
                        this.pe(t, e || [], this.Zd), this.Zd += 1
                    }, t.prototype.push = function () {
                    }, t.prototype.flush = function () {
                    }, t
                }(), bl = ((el = function (t) {
                    function e(e, n, r, i) {
                        return void 0 === i && (i = 0), (n = t.call(this, e, n, r) || this).ze = 0, n.ob = 0, n.ye = 0, n.buffer = [], n.ad = 2e3, n.$ = kr(e), n.Rc(), n.ye = i, n
                    }

                    return Oo(e, t), e.prototype.df = function (t) {
                        return yu(Boolean, this.$.V("ag", t))
                    }, e.prototype.cf = function (t, e) {
                        var n = this;
                        t(ef(Mr(this.b, "wv2.b.st"), (function (t) {
                            n.send(t, e)
                        })))
                    }, e.prototype.Qi = function (t, e) {
                        var n = this;
                        Fi(this.b, this.Ue);
                        var r = Math.ceil(this.qa.Ka(e) / 63e4), i = this.qa.Sc(e, r);
                        _u((function (e, i) {
                            var o, a = lu({}, t, ((o = {}).data = e, o.partNum = i + 1, o.end = i + 1 === r, o));
                            o = n.qa.Ca([a], !1), n.cf(o, [a])
                        }), i), this.Rc()
                    }, e.prototype.send = function (e, n) {
                        this.$.V("se", n), t.prototype.send.call(this, e, n)
                    }, e.wd = function (t, n, r, i, o) {
                        return e.cd["" + t + n] || (this.cd[n] = new e(o, i, r, "m" === n ? 31457280 : 0)), this.cd[n]
                    }, e.prototype.$h = function () {
                        return this.ye && this.ze >= this.ye
                    }, e.prototype.push = function (t) {
                        var e = this;
                        if (!this.$h()) {
                            this.$.V("p", t);
                            var n = this.qa.Da(t), r = this.qa.Ka(n);
                            7e5 < r ? this.Qi(t, n) : (n = this.df(this.buffer.concat([t])), n = iu((function (t, n) {
                                return t + e.qa.Ka(e.qa.Da(n))
                            }), 0, n), this.ob + n + r >= 7e5 * .7 && this.flush(), this.buffer.push(t), this.ob += r)
                        }
                    }, e.prototype.C = function (t, e) {
                        this.$.C(t, e)
                    }, e.prototype.da = function (t, e) {
                        this.$.da(t, e)
                    }, e.prototype.flush = function () {
                        var t = this.buffer.concat(this.df(this.buffer));
                        if (t.length) {
                            this.buffer = [], this.ze += this.ob, this.ob = 0;
                            var e = this.qa.Ca(t);
                            this.cf(e, t)
                        }
                    }, e
                }(gl)).cd = {}, el), yl = ((nl = {})[1] = 500, nl[2] = 500, nl[3] = 0, nl), wl = function () {
                    function t(t) {
                        var e, n = this;
                        this.id = "a", this.Gd = !1, this.ub = {}, this.ib = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            Ff: ["article"]
                        }, this.Ce = ((e = {}).Answer = 3, e.Review = 2, e), this.Zg = zi((function (t, e) {
                            tn(n.b, "Warning: content has only " + e.chars + " chars. Required " + yl[e.type], e)
                        })), this.b = t, this.root = li(t)
                    }

                    return t.prototype.Aa = function (t) {
                        return t.element
                    }, t.prototype.ef = function (t, e) {
                        var n, r = this;
                        return Mr(this.b, "P.s." + e, (function () {
                            n = r.ub[e].call(r, t)
                        }))(), n
                    }, t.prototype.Ci = function (t) {
                        var e = lu({}, t);
                        return this.Gd && !e.id && Cu(t.type, [3, 2]) && (t = Ya(", ", ku(ou("name"), e.authors || [])), e.pageTitle = t + ": " + e.pageTitle), e.pageTitle || (e.pageTitle = this.Mh(e.tb)), e.pageUrlCanonical || (t = e.id, e.pageUrlCanonical = "string" == typeof t && /^(https?:)\/\//.test(t) ? e.id : this.Jh()), e.id || (e.id = e.pageTitle || e.pageUrlCanonical), e
                    }, t.prototype.sa = function (t) {
                        var e = this, n = {}, r = this.Aa(t);
                        if (!r) return null;
                        n.type = t.type, _u((function (r) {
                            n[r] = e.ef(t, r)
                        }), hu(this.ub));
                        var i = Ws(this.b);
                        return n.stamp = i(ir), n.element = t.element, n.tb = r, (n = this.Ci(n)).id = n.id ? jo(n.id) : 1, n.update = function (n) {
                            return e.Aa(t) ? e.ef(t, n) : void 0
                        }, n
                    }, t.prototype.Mh = function (t) {
                        for (var e = 1; 5 >= e; e += 1) {
                            var n = oa(Kr(this.b, t, "h" + e));
                            if (n) return n
                        }
                    }, t.prototype.Jh = function () {
                        var t = Kr(this.b, this.root, '[rel="canonical"]');
                        if (t) return t.href
                    }, t.prototype.jf = function () {
                        return 1
                    }, t.prototype.ec = function () {
                        return []
                    }, t.prototype.ph = function () {
                        var t = this, e = this.ec(), n = 1;
                        return iu((function (e, r) {
                            var i = t.sa({element: r, type: t.jf(r)}) || [];
                            return eo(i) || (i = [i]), i = iu((function (e, n) {
                                var r = e.values, i = e.pf;
                                return n && n.chars > yl[n.type] && !Cu(n.id, i) ? (r.push(n), i.push(n.id)) : n && n.chars <= yl[n.type] && t.Zg(n.id, n), {
                                    values: r,
                                    pf: i
                                }
                            }), {values: [], pf: ku(ou("id"), e)}, i).values, e.concat(ku((function (t) {
                                var e;
                                return t = lu(((e = {index: n, oe: !1}).involvedTime = 0, e), t), n += 1, t
                            }), i))
                        }), [], e)
                    }, t
                }(), El = function (t) {
                    function e() {
                        var e, n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "j", n.Gd = !0, n.Te = Ya(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']), n.ub = ((e = {}).id = function (t) {
                            var e = t.data["@id"];
                            return t = t.data.mainEntity || t.data.mainEntityOfPage, !e && t && (e = t["@id"]), e
                        }, e.chars = function (t) {
                            return "string" == typeof t.data.text ? t.data.text.length : this.Aa(t).innerText.length
                        }, e.authors = function (t) {
                            var e = [];
                            return (e = (e = e.concat(this.dc(t.data, "author"))).concat(this.dc(t.data.mainEntity, "author"))).concat(this.dc(t.data.mainEntityOfPage, "author"))
                        }, e.pageTitle = function (t) {
                            var e = t.data.headline || "";
                            return t.data.Cj && (e += " " + t.data.alternativeHeadline), "" === e && (t.data.name ? e = t.data.name : t.data.itemReviewed && (e = t.data.itemReviewed)), 3 === t.type && t.data.parentItem && (e = t.data.parentItem.text), e
                        }, e.updateDate = function (t) {
                            return t.data.dateModified || ""
                        }, e.publicationDate = function (t) {
                            return t.data.datePublished || ""
                        }, e.pageUrlCanonical = function (t) {
                            return t.data.url
                        }, e.topics = function (t) {
                            return this.dc(t.data, "about", ["name", "alternateName"])
                        }, e.rubric = function (t) {
                            var e = this, n = this.Aa(t);
                            return (t = yu(Boolean, ku((function (t) {
                                if (t = Yo(e.b, t.innerText)) {
                                    var n = e.ff(t);
                                    if (n) return iu((function (t, e) {
                                        return t || ("BreadcrumbList" === e["@type"] ? e : t)
                                    }), null, n);
                                    if ("BreadcrumbList" === t["@type"]) return t
                                }
                                return null
                            }), [t.element].concat(Pi(Wr(this.Te, this.b, document.body === n ? document.documentElement : n)))))).length && eo(t = t[0].itemListElement) ? yu(Boolean, ku((function (t) {
                                return t.item && !e.b.isNaN(t.position) ? {
                                    name: t.item.name || t.name,
                                    position: t.position
                                } : null
                            }), t)) : []
                        }, e), n
                    }

                    return Oo(e, t), e.prototype.dc = function (t, e, n) {
                        return void 0 === n && (n = ["name"]), t && t[e] ? (t = eo(t[e]) ? t[e] : [t[e]], t = yu(Boolean, ku((function (t) {
                            return t ? "string" == typeof t ? t : iu((function (e, n) {
                                return e || t[n]
                            }), "", n) : null
                        }), t)), ku((function (t) {
                            var e;
                            return (e = {}).name = t, e
                        }), t)) : []
                    }, e.prototype.Aa = function (t) {
                        var e = t.element, n = t.data["@id"], r = t.data.url;
                        return t = null, r && "string" == typeof r && (t = this.Ze(r)), !t && n && "string" == typeof n && (t = this.Ze(n)), t || (t = n = e.parentNode, !ri("head", this.b, e) && n && 0 !== n.innerText.length) || (t = this.b.document.body), t
                    }, e.prototype.Ze = function (t) {
                        try {
                            var e = Wo(this.b, t).hash;
                            if (e) {
                                var n = Kr(this.b, this.b.document.body, e);
                                if (n) return n
                            }
                        } catch (t) {
                        }
                        return null
                    }, e.prototype.Yd = function (t) {
                        return this.Ce[t["@type"]] || 1
                    }, e.prototype.sa = function (e) {
                        var n = this, r = e.element;
                        if (!e.data && (e.data = Yo(this.b, r.innerText), !e.data || !/schema\.org/.test(e.data["@context"]) && !eo(e.data))) return null;
                        var i = this.ff(e.data);
                        if (i) return ku((function (e) {
                            return Cu(e["@type"], n.ib["schema.org"]) ? (e = {
                                element: r,
                                data: e,
                                type: n.Yd(e)
                            }, t.prototype.sa.call(n, e)) : null
                        }), i);
                        if ("QAPage" === e.data["@type"]) {
                            var o = e.data.mainEntity || e.data.mainEntityOfPage;
                            if (!o) return null
                        }
                        return "Question" === e.data["@type"] && (o = e.data), o ? (e = Ru(co(o, io), ["acceptedAnswer", "suggestedAnswer"]), ku((function (e) {
                            var i;
                            return e && Cu(e["@type"], n.ib["schema.org"]) ? (e = {
                                element: r,
                                type: n.Yd(e),
                                data: lu((i = {}, i.parentItem = o, i), e)
                            }, t.prototype.sa.call(n, e)) : null
                        }), e)) : Cu(e.data["@type"], this.ib["schema.org"]) ? t.prototype.sa.call(this, lu(e, {type: this.Yd(e.data)})) : null
                    }, e.prototype.ec = function () {
                        return Wr(this.Te, this.b, this.root)
                    }, e.prototype.ff = function (t) {
                        return eo(t) && t || t && eo(t["@graph"]) && t["@graph"]
                    }, e
                }(wl), Cl = function (t) {
                    function e() {
                        var e, n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "s", n.Gd = !0, n.ej = uo("exec", new RegExp("schema.org\\/(" + Ya("|", hu(n.Ce)) + ")$")), n.ub = ((e = {}).id = function (t) {
                            t = t.element;
                            var e = ia(this.b, t, "identifier");
                            return e ? oa(e) : (e = ia(this.b, t, "mainEntityOfPage")) && e.getAttribute("itemid") ? e.getAttribute("itemid") : null
                        }, e.chars = function (t) {
                            var e = 0;
                            t = t.element;
                            for (var n = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], r = 0; r < n.length; r += 1) {
                                var i = ia(this.b, t, n[r]);
                                if (i) {
                                    e = oa(i).length;
                                    break
                                }
                            }
                            return 0 === e && t.innerText && (e += t.innerText.length), e
                        }, e.topics = function (t) {
                            var e = this, n = ra(this.b, t.element, "about");
                            return ku((function (t) {
                                var r = {name: oa(t)};
                                return (n = ia(e.b, t, "name")) && (r.name = oa(n)), r
                            }), n)
                        }, e.rubric = function (t) {
                            var e = this;
                            return (t = Kr(this.b, t.element, '[itemtype$="schema.org/BreadcrumbList"]')) || (t = Kr(this.b, this.root, '[itemtype$="schema.org/BreadcrumbList"]')), t ? ku((function (t) {
                                return {name: oa(ia(e.b, t, "name")), position: oa(ia(e.b, t, "position"))}
                            }), ra(this.b, t, "itemListElement")) : []
                        }, e.updateDate = function (t) {
                            return (t = ia(this.b, t.element, "dateModified")) ? aa(t) : ""
                        }, e.publicationDate = function (t) {
                            return (t = ia(this.b, t.element, "datePublished")) ? aa(t) : ""
                        }, e.pageUrlCanonical = function (t) {
                            return (t = ra(this.b, t.element, "url")).length ? t[0].href ? t[0].href : oa(t) : null
                        }, e.pageTitle = function (t) {
                            var e = "", n = t.element, r = ia(this.b, n, "headline");
                            return r && (e += oa(r)), (r = ia(this.b, n, "alternativeHeadline")) && (e += " " + oa(r)), "" === e && ((r = ia(this.b, n, "name")) || (r = ia(this.b, n, "itemReviewed")), r && (e += oa(r))), 3 === t.type && (t = ri('[itemtype$="schema.org/Question"]', this.b, n)) && (t = ia(this.b, t, "text")) && (e += oa(t)), e
                        }, e.authors = function (t) {
                            var e = this;
                            return t = ra(this.b, t.element, "author"), ku((function (t) {
                                var n, r = ((n = {}).name = "", n);
                                return /.+schema.org\/(Person|Organization)/.test(t.getAttribute("itemtype") || "") && (n = ia(e.b, t, "name")) && (r.name = oa(n)), r.name || (r.name = t.getAttribute("content") || t.innerText || t.getAttribute("href")), r
                            }), t)
                        }, e), n
                    }

                    return Oo(e, t), e.prototype.jf = function (t) {
                        return t = t.getAttribute("itemtype") || "", (t = this.ej(t)) ? this.Ce[t[1]] : 1
                    }, e.prototype.sa = function (e) {
                        return e.element && e.element.innerText && e.element.innerText.length ? t.prototype.sa.call(this, e) : null
                    }, e.prototype.ec = function () {
                        return Wr(Ya(",", ku((function (t) {
                            return '[itemtype$="schema.org/' + t + '"]'
                        }), this.ib["schema.org"])), this.b, this.root)
                    }, e
                }(wl), xl = function (t) {
                    function e(e) {
                        var n;
                        return (e = t.call(this, e) || this).id = "o", e.ub = ((n = {}).chars = function (t) {
                            return (t = this.Aa(t)).innerText ? t.innerText.length : 0
                        }, n.authors = function (t) {
                            return this.vd(t.data.author)
                        }, n.pageTitle = function (t) {
                            return this.lc(t.data.title) || ""
                        }, n.updateDate = function (t) {
                            return this.lc(t.data.modified_time)
                        }, n.publicationDate = function (t) {
                            return this.lc(t.data.published_time)
                        }, n.pageUrlCanonical = function (t) {
                            return this.lc(t.data.url)
                        }, n.rubric = function (t) {
                            return this.vd(t.data.section)
                        }, n.topics = function (t) {
                            return this.vd(t.data.tag)
                        }, n), e.ih = new RegExp("^(og:)?((" + Ya("|", e.ib.Ff) + "):)?"), e
                    }

                    return Oo(e, t), e.prototype.vd = function (t) {
                        var e;
                        return t ? eo(t) ? ku((function (t) {
                            var e;
                            return (e = {}).name = t, e
                        }), t) : [(e = {}, e.name = t, e)] : []
                    }, e.prototype.lc = function (t) {
                        return eo(t) ? t.length ? t[0] : null : t
                    }, e.prototype.ec = function () {
                        var t = Wr('meta[property="og:type"]', this.b, this.b.document.body);
                        return [this.b.document.head].concat(t)
                    }, e.prototype.Ch = function (t) {
                        var e = this, n = t.element, r = {}, i = this.Aa(t);
                        return (n = Wr("meta[property]", this.b, n === this.b.document.head ? n : i)).length ? (_u((function (t) {
                            try {
                                if (t.parentNode === i || t.parentNode === e.b.document.head) {
                                    var n = t.getAttribute("property").replace(e.ih, ""), o = oa(t);
                                    r[n] ? eo(r[n]) ? r[n].push(o) : r[n] = [r[n], o] : r[n] = o
                                }
                            } catch (t) {
                                Pr(e.b, "og.ed", t)
                            }
                        }), n), Cu(r.type, this.ib.Ff) ? lu(t, {data: r}) : null) : null
                    }, e.prototype.Aa = function (t) {
                        t = t.element;
                        var e = this.b.document;
                        return t === e.head ? e.body : t.parentNode
                    }, e.prototype.sa = function (e) {
                        return (e = this.Ch(e)) ? t.prototype.sa.call(this, e) : null
                    }, e
                }(wl),
                Al = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                Tl = function () {
                    function t(t, e, n, r) {
                        this.uc = !1, this.Y = {}, this.scroll = {
                            x: 0,
                            y: 0
                        }, this.ab = this.Af = 0, this.Pd = this.If = "", this.ea = [], this.Fa = 0, this.lb = {
                            La: 0,
                            Fe: 0
                        }, this.buffer = n, this.Mb = tu(this.Mb, this), this.hc = tu(this.hc, this), this.Cc = tu(this.Cc, this), this.b = t, this.ld = r, this.Nc = e, this.Ld = "pai" + e.id, this.vb(), this.Xe = Oc(this.b), this.time = Ws(this.b), this.pg(), this.nc = mu(this.b)
                    }

                    return t.prototype.start = function () {
                        var t = this;
                        if (!this.uc) {
                            this.buffer.C("ag", this.hc), this.buffer.C("se", this.Cc), this.Si();
                            var e = this.nc.l(this.Ld, []), n = !e.length;
                            e.push(tu(this.bi, this)), this.nc.Ea(this.Ld, e), n && this.Sf(), this.nc.Ea("pai", (function () {
                                return t.ea.length ? iu((function (t, e) {
                                    return (t.Oc || 0) <= (e.Oc || 0) ? e : t
                                }), t.ea[0], t.ea.slice(1)).id : 0
                            })), this.Mb({type: "page", target: this.b})
                        }
                    }, t.prototype.stop = function () {
                        this.buffer.da("se", this.Cc), this.buffer.da("ag", this.hc), this.fj(), this.uc = !0
                    }, t.prototype.yf = function (t) {
                        return ri("html", this.b, t) !== this.b.document.documentElement
                    }, t.prototype.Sf = function () {
                        var t = this;
                        Mr(this.b, "p.ic" + this.Nc.id, (function () {
                            if (!t.uc) {
                                var e = t.nc.l(t.Ld), n = t.Nc.ph();
                                _u((function (t) {
                                    var e = ku((function (t) {
                                        return lu({}, t)
                                    }), n);
                                    vo(t) && t(e)
                                }), e), t.Fa = Sr(t.b, tu(t.Sf, t), 1e3, "p")
                            }
                        }))()
                    }, t.prototype.bi = function (t) {
                        this.uc || (this.gj(t), this.ij(), this.Ni())
                    }, t.prototype.Mb = function (t) {
                        var e = this;
                        Mr(this.b, "p.ec." + this.Nc.id, (function () {
                            try {
                                var n = t.type, r = t.target
                            } catch (t) {
                                return
                            }
                            var i = "page" === n;
                            if ("scroll" === n || i) {
                                var o = [e.b, e.b.document, e.b.document.documentElement, di(e.b)];
                                Cu(r, o) && e.vb()
                            }
                            ("resize" === n || i) && e.pg(), n = e.time(ur);
                            var a = Math.min(n - e.Af, 5e3);
                            if (e.ab += Math.round(a), e.Af = n, e.Y && e.scroll && e.lb) {
                                var u = e.lb.La * e.lb.Fe;
                                e.ea = ku((function (t) {
                                    var n = lu({}, t), r = e.Y[n.id], i = ci(t.tb);
                                    if (!r || e.yf(n.element) || !i) return n;
                                    r = (t = e.b.Math).max((e.scroll.y + e.lb.La - r.y) / r.height, 0);
                                    var o = i.height * i.width;
                                    return i = e.Rg(i), n.Oc = i / u, n.visibility = i / o, (.9 <= n.visibility || .1 <= n.Oc) && (n.involvedTime += a), n.maxScrolled = t.round(1e4 * r) / 1e4, n
                                }), e.ea)
                            }
                        }))()
                    }, t.prototype.Rg = function (t) {
                        var e = t.top, n = t.bottom, r = t.left, i = this.lb, o = i.Fe;
                        i = i.La;
                        var a = this.b.Math;
                        return t = a.min(a.max(t.right, 0), o) - a.min(a.max(r, 0), o), (a.min(a.max(n, 0), i) - a.min(a.max(e, 0), i)) * t
                    }, t.prototype.gj = function (t) {
                        var e = ku((function (t) {
                            return t.id
                        }), this.ea);
                        this.ea = this.ea.concat(yu((function (t) {
                            return !Cu(t.id, e)
                        }), t))
                    }, t.prototype.pg = function () {
                        var t = hi(this.b) || fi(this.b);
                        this.lb = {Fe: t[0], La: t[1]}
                    }, t.prototype.ij = function () {
                        var t = this;
                        Mr(this.b, "p.um." + this.Nc.id, (function () {
                            var e = [];
                            t.vb(), t.Y = iu((function (n, r) {
                                var i;
                                if (t.yf(r.element)) e.push(r), delete n[r.id]; else {
                                    var o = ((i = {}).id = r.id, i.involvedTime = Math.max(r.involvedTime, 0), i.maxScrolled = r.maxScrolled || 0, i.chars = r.update && r.update("chars") || 0, i);
                                    r.tb && (i = ci(r.tb)) && (o.x = Math.max(Math.round(i.left) + t.scroll.x, 0), o.y = Math.max(Math.round(i.top) + t.scroll.y, 0), o.width = Math.round(i.width), o.height = Math.round(i.height)), n[r.id] = o
                                }
                                return n
                            }), {}, t.ea), _u((function (e) {
                                e = Du(t.b)(e, t.ea), t.ea.splice(e, 1)
                            }), e)
                        }))()
                    }, t.prototype.Cc = function () {
                        this.If = this.Pd
                    }, t.prototype.hc = function () {
                        var t, e, n = ku(co(this.Y, io), hu(this.Y));
                        return n.length && (this.Pd = Ei(this.b, n), this.If !== this.Pd) ? ((t = {}).type = "publishersHeader", t.data = ((e = {}).articleMeta = n || [], e.involvedTime = this.ab, e), t) : null
                    }, t.prototype.Ni = function () {
                        var t = this;
                        if (this.ea.length) {
                            var e = yu((function (t) {
                                return !t.oe
                            }), this.ea);
                            _u((function (e) {
                                var n, r = lu({}, e);
                                delete r.tb, delete r.oe, delete r.index, delete r.involvedTime, delete r.visibility, delete r.Oc, delete r.maxScrolled, delete r.update, delete r.element, delete r.type, t.buffer.push(((n = {}).type = "articleInfo", n.stamp = r.stamp, n.data = r, n)), e.oe = !0
                            }), e), e.length && tn(this.b, "Publisher content info found: ", e)
                        }
                    }, t.prototype.Si = function () {
                        this.Xe.C(this.b, Al, this.Mb)
                    }, t.prototype.fj = function () {
                        this.Xe.Kb(this.b, Al, this.Mb)
                    }, t.prototype.vb = function () {
                        this.scroll = {
                            x: this.b.pageXOffset || io(this.b, "document.documentElement.scrollLeft") || 0,
                            y: this.b.pageYOffset || io(this.b, "document.documentElement.scrollLeft") || 0
                        }
                    }, t
                }(), Sl = {};
            El && (Sl.json_ld = El), Cl && (Sl.schema = Cl, Sl.microdata = Cl), xl && (Sl.opengraph = xl);
            var kl, _l, Rl, Ml, Nl, Il = Rr("p.p", (function (t, e) {
                    function n(n, r, o) {
                        i(lu({}, c, {Z: n, Re: Bt(r)}), e, o).catch(Mr(t, "s.ww.p"))
                    }

                    if (!Io("querySelectorAll", t.document.querySelectorAll)) return jc.resolve();
                    var r = [new hl(t)];
                    r.unshift(new ml(t));
                    var i = rl(t, "p", e), o = Eu((function (t) {
                        return t.isEnabled()
                    }), r);
                    r = yc();
                    var a = Ks(t, e.id), u = a.l("pai");
                    u && (a.Zb("pai"), r.o("pai", u));
                    var c = {G: {}, H: r, tf: !(o instanceof hl)};
                    return gn(t, e, Mr(t, "ps.s", (function (r) {
                        if (r = io(r, "settings.publisher.schema")) {
                            r = Ri(e) ? "microdata" : r;
                            var i = Sl[r];
                            if (i && o) {
                                var a = mc(e), u = bl.wd(a, "e", n, o, t);
                                i = new i(t), new Tl(t, i, u, a).start(), tn(t, 'Publishers analytics schema "' + r + '"')
                            }
                        }
                    })))
                })), Dl = go((function (t, e) {
                    return e[t] || {}
                })), Pl = go((function (t, e, n) {
                    var r = Dl(t, n);
                    n[t] = lu(r, e)
                })), Ol = go((function (t, e) {
                    delete e[t]
                })), Ll = Rr("c.c.cc", (function (t) {
                    var e = mu(t), n = no(co(t, Ot), Vi, (function (e) {
                        var n;
                        return lu({}, e, ((n = {}).oldCode = !!t.ya_cid, n.clickmap = e.clickmap && !!e.clickmap, n))
                    }));
                    return Mr(t, "g.c.cc", no(tu(e.l, e, "counters", {}), hu, Mu(n)))
                })), jl = Rr("gt.c.rs", (function (t, e) {
                    var n, r = mc(e), i = Lt(t, r), o = e.id, a = e.aa, u = e.Yg, c = e.Ra, s = e.Ae;
                    return r = no(co(r, Ol), jt(t)), i(((n = {}).id = o, n.type = +a, n.clickmap = u, n.webvisor = !!c, n.trackHash = !!s, n)), r
                })), Bl = Rr("th.e", (function (t, e) {
                    function n() {
                        o || (u = to(t, "onhashchange") ? Oc(t).C(t, ["hashchange"], a) : ca(t, a))
                    }

                    var r = rl(t, "t", e), i = Lt(t, mc(e)), o = !1, a = Mr(t, "h.h.ch", tu(sa, null, t, e, r)), u = Po;
                    return e.Ae && (n(), o = !0), {
                        aj: Mr(t, "tr.hs.h", (function (t) {
                            var e;
                            t ? n() : u(), i(((e = {}).trackHash = o = !!t, e))
                        })), unsubscribe: u
                    }
                })), Fl = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1
                }, Gl = zi((function () {
                    return iu((function (t, e) {
                        var n = jo(e + "/tag.js");
                        return Fl[n] || (t[n] = 1), t
                    }), {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                })), Hl = 1, Ul = {}, Xl = {}, Vl = Rr("nb.p", (function (t, e) {
                    function n(e) {
                        s() || (e = "number" == typeof e ? e : 15e3, e = function (t, e, n) {
                            function r() {
                                Ul[p] = !0, o(!1), e()
                            }

                            function i() {
                                if (Fi(t, Xl[p]), Ul[p]) o(!1); else {
                                    var e = Math.max(0, n - (f ? h : h + u(ur) - l));
                                    e ? Xl[p] = Sr(t, r, e, "u.t.d.c") : r()
                                }
                            }

                            function o(t) {
                                _u((function (e) {
                                    var n = e[0], r = e[1];
                                    e = e[2], t ? d.C(n, r, e) : d.Kb(n, r, e)
                                }), v)
                            }

                            var a = co(!1, o);
                            if (Wu(t)) return {id: Sr(t, e, n, "u.t.d"), Ve: a};
                            var u = Ws(t), c = !1, s = !1, f = !0, h = 0, l = u(ur), d = Oc(t), p = Hl;
                            Hl += 1, Xl[p] = 0;
                            var v = [[t, ["blur"], function () {
                                f = c = s = !0, h += u(ur) - l, l = u(ur), i()
                            }], [t, ["focus"], function () {
                                c || s || (h = 0), l = u(ur), c = s = !0, f = !1, i()
                            }], [t.document, ["click", "mousemove", "keydown", "scroll"], function () {
                                s || (c = !0, f = !1, s = !0, i())
                            }]];
                            return o(!0), i(), {id: p, Ve: a}
                        }(t, r(!1), e), p = e.id, o = e.Ve, f())
                    }

                    function r(n) {
                        return function (r) {
                            var i, o, u;
                            if (void 0 === r && ((i = {}).ctx = {}, i.callback = Po, r = i), n || !d && !c.Hd) {
                                d = !0, f(), p && function (t, e) {
                                    Wu(t) ? Fi(t, e) : (Ul[e] = !0, Fi(t, Xl[e] || 0))
                                }(t, p);
                                var s = h(ur);
                                i = (parseInt(c.l("lastHit"), 10) || 0) < s - 18e5;
                                var l = .1 > Math.random();
                                if (c.o("lastHit", s), s = yc(((o = {}).nb = "1", o.cl = v, o.ar = "1", o)), o = ul(e), o = {
                                    G: (u = {}, u["page-url"] = o.url || _i(t).href, u),
                                    H: s
                                }, u = Bf(t).warn, !r.callback && r.ctx && u('"callback" argument missing'), n || i || l || !function (t, e) {
                                    return t && e ? Ln(t) === Ln(e) : !t && !e
                                }(t.location.href, t.document.referrer)) return u = a(o, e).then((function () {
                                    if (!n) {
                                        var r, i, o, a, u, c = .002, s = e.id === fc.Dg ? 1 : .002;
                                        void 0 === c && (c = 1), void 0 === s && (s = 1);
                                        var f = t.performance;
                                        if (f && vo(f.getEntriesByType) && (c = Math.random() > c, s = Math.random() > s, !c || !s)) {
                                            f = t.performance.getEntriesByType("resource");
                                            for (var h = {}, l = {}, d = {}, p = Gl(t), v = 0; v < f.length; v += 1) {
                                                var m = f[v], g = m.name.replace(/^https?:\/\//, "").split("?")[0],
                                                    b = jo(g),
                                                    y = ((r = {}).dns = Math.round(m.domainLookupEnd - m.domainLookupStart), r.tcp = Math.round(m.connectEnd - m.connectStart), r.duration = Math.round(m.duration), r.response = Math.round(m.responseEnd - m.requestStart), r);
                                                "script" !== m.initiatorType || c || (l[g] = lu(y, ((i = {}).name = m.name, i.decodedBodySize = m.decodedBodySize, i))), !Fl[b] && !p[b] || h[g] || s || (h[g] = lu(y, ((o = {}).pages = t.location.href, o)))
                                            }
                                            hu(h).length && (d.timings8 = h), hu(l).length && (d.scripts = l), hu(d).length && rl(t, "d", e)({
                                                H: yc((a = {}, a.ar = "1", a.pv = "1", a)),
                                                Z: Ei(t, d) || void 0,
                                                G: (u = {}, u["page-url"] = t.location && "" + t.location.href, u)
                                            }, {id: fc.Fg, aa: "0"}).catch(Mr(t, "r.tim.ng2"))
                                        }
                                    }
                                })), Ze(t, "l.o.l", u, r.callback, r.ctx)
                            }
                            return null
                        }
                    }

                    var i, o, a = rl(t, "n", e), u = mc(e), c = Ks(t, e.id),
                        s = co(Ot(t, u), no(Vi, ou("accurateTrackBounce"))),
                        f = co(((i = {}).accurateTrackBounce = !0, i), Lt(t, u)), h = Ws(t), l = h(ur), d = !1, p = 0,
                        v = 0;
                    return gn(t, e, (function (t) {
                        v = t.qh - l
                    })), e.Nb && n(e.Nb), {ni: r(!0), Nb: n, pd: o}
                })), zl = ["yandex_metrika_callback" + Ga.callbackPostfix, "yandex_metrika_callbacks" + Ga.callbackPostfix],
                Yl = Rr("cb.i", (function (t) {
                    var e = zl[0], n = zl[1];
                    vo(t[e]) && t[e](), "object" == typeof t[n] && _u((function (e, r) {
                        t[n][r] = null, Li(t, e)
                    }), t[n]), _u((function (e) {
                        try {
                            delete t[e]
                        } catch (n) {
                            t[e] = void 0
                        }
                    }), zl)
                })), ql = {Oj: ao(/[/&=?#]/)}, Kl = Rr("go.in", (function (t, e, n, r) {
                    return void 0 === n && (n = "goal"), function (i, o, a, u) {
                        var c, s;
                        if (!i || ql[n] && ql[n](i)) return null;
                        var f = o, h = a || Po;
                        vo(o) && (h = o, f = void 0, u = a);
                        var l = Qe(t, e, "Reach goal. Counter: " + e.id + ". Goal id: " + i, f), d = "goal" === n;
                        return o = rl(t, "g", e), a = function (t, e, n, r) {
                            var i = _i(t), o = i.hostname;
                            return i = i.href, (e = ul(e).url) && (o = (t = Wo(t, e)).hostname, i = t.href), [r + "://" + o + "/" + n, i || ""]
                        }(t, e, i, n), i = a[0], a = a[1], f = o({
                            R: f,
                            H: yc((c = {}, c.ar = 1, c)),
                            G: (s = {}, s["page-url"] = i, s["page-ref"] = a, s)
                        }, e).then((function () {
                            d && l(), r && r()
                        })), Ze(t, "g.s", f, h, u)
                    }
                })), Wl = yo((function (t, e) {
                    Ro(e) ? t.push(e) : _u(no(Ki, uo("push", t)), e)
                })), Jl = Rr("cl.p", (function (t, e) {
                    function n(n, i, a, u) {
                        void 0 === u && (u = {}), a ? Dt(t, e, {
                            url: a,
                            yb: !0,
                            tc: n,
                            yc: i,
                            sender: r,
                            b: u.ctx,
                            Sa: u.callback,
                            title: u.title,
                            R: u.params
                        }) : o.warn("Empty link")
                    }

                    var r = rl(t, "2", e), i = [], o = Bf(t), a = mc(e), u = Mr(t, "s.s.tr", co(Lt(t, a), Pt));
                    return a = {
                        b: t,
                        bh: e,
                        oh: i,
                        sender: r,
                        globalStorage: mu(t),
                        ah: Ks(t, e.id),
                        Th: Nn(t),
                        bj: co(Ot(t, a), no(Vi, ou("trackLinks")))
                    }, a = Mr(t, "cl.p.c", co(a, It)), a = Oc(t).C(t, ["click"], a), e.Xc && u(e.Xc), {
                        file: Mr(t, "file.clc", so([!0, !1], n)),
                        kh: Mr(t, "e.l.l.clc", so([!1, !0], n)),
                        Jg: i = Mr(t, "add.f.e.clc", Wl(i)),
                        Xc: u,
                        pd: a
                    }
                })),
                $l = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]],
                Zl = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]],
                Ql = {G: {t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'}}, td = {id: 42822899, aa: "0"},
                ed = Xi("csp", (function (t, e) {
                    return rl(t, "s", e)({}, ["https://ymetrica1.com/watch/3/1"])
                })), nd = no(ou("settings.pcs"), qa("1")), rd = Rr("s", (function (t, e) {
                    return gn(t, e, (function (n) {
                        var r = Ws(t), i = function (t, e, n) {
                            var r = e || {}, i = rl(t, "u", n), o = qs(t);
                            return {
                                l: function (t, e) {
                                    return Za(r[t]) ? o.l(t, e) : r[t]
                                }, o: function (e, n) {
                                    var a, u = "" + n;
                                    return r[e] = u, o.o(e, u), i({G: (a = {}, a.key = e, a.value = u, a)}, [fc.Ja + "//mc.yandex.ru/user_storage_set"], {}).catch(Mr(t, "u.d.s.s"))
                                }
                            }
                        }(t, n.userData, e), o = Yu(t), a = no(Gu, xu(["iPhone", "iPad"]))(t);
                        return (o || a) && function (t, e, n, r, i) {
                            return new jc((function (o, a) {
                                var u = mu(t);
                                return u.l("dSync", !1) ? a() : (u.o("dSync", !0), u = r.l("ds", 0), u = parseInt("" + u, 10), 60 >= e(ar) - u ? a() : Rc(t) ? o(void 0) : nd(i) ? a() : o(ed(t, n)))
                            }))
                        }(t, r, e, i, n).then((function () {
                            if (o) var n = $l; else {
                                if (!a) return;
                                n = Zl
                            }
                            return Nt(t, n, e, i, r)
                        }), Po)
                    }))
                })), id = zi(no(ou("performance.memory.jsHeapSizeLimit"), uo("concat", ""))),
                od = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                ad = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                ud = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                cd = ["availWidth", "availHeight", "availTop"], sd = ["webgl", "experimental-webgl"],
                fd = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0], hd = co(Ti("ccf"), ji),
                ld = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                dd = yo(pi)("(ym-disable-clickmap|ym-clickmap-ignore)"), pd = Rr("clm.p", (function (t, e) {
                    if (ju(t)) return Po;
                    var n, r = rl(t, "m", e), i = mc(e), o = Ws(t), a = o(ur), u = co(Ot(t, i), no(Vi, ou("clickmap"))),
                        c = null, s = mu(t);
                    return i = Mr(t, "clm.p.c", (function (i) {
                        var f = u();
                        if (f) {
                            var h = s.l("cls", 0);
                            s.o("cls", h + 1);
                            var l = (h = "object" == typeof f ? f : {}).filter;
                            f = h.isTrackHash || !1;
                            var d = ku((function (t) {
                                return ("" + t).toUpperCase()
                            }), h.ignoreTags || []);
                            Za(n) && (n = h.quota || null);
                            var p = !!h.quota;
                            if (i = {
                                element: Ct(t, i),
                                position: At(t, i),
                                button: xt(i),
                                time: o(ur)
                            }, h = _i(t).href, function (t, e, n, r, i) {
                                if (to(t, "ymDisabledClickmap") || vf(t) || !e || !e.element) return !1;
                                if (t = oi(e.element), i && !i(e.element, t) || Cu(e.button, [2, 3]) && "A" !== t || Iu(qa(t), r)) return !1;
                                if (r = e.element, e && n) {
                                    if (50 > e.time - n.time) return !1;
                                    if (i = Math.abs(n.position.x - e.position.x), t = Math.abs(n.position.y - e.position.y), e = e.time - n.time, n.element === r && 2 > i && 2 > t && 1e3 > e) return !1
                                }
                                for (; r;) {
                                    if (dd(r)) return !1;
                                    r = r.parentElement
                                }
                                return !0
                            }(t, i, c, d, l)) {
                                if (p) {
                                    if (!n) return;
                                    --n
                                }
                                l = (d = ei(t, i.element))[0], d = d[1], p = ni(t, i.element), l = ["rn", Gr(t), "x", Math.floor(65535 * (i.position.x - p.left) / (l || 1)), "y", Math.floor(65535 * (i.position.y - p.top) / (d || 1)), "t", Math.floor((i.time - a) / 100), "p", $r(t, i.element), "X", i.position.x, "Y", i.position.y], l = Ya(":", l), f && (l += ":wh:1"), function (t, e, n, r, i) {
                                    var o;
                                    r(e = {
                                        H: yc(),
                                        G: (o = {}, o["page-url"] = e, o["pointer-click"] = n, o)
                                    }, i).catch(Mr(t, "c.s.c"))
                                }(t, h, l, r, e), c = i
                            }
                        }
                    })), Oc(t).C(io(t, "document"), ["click"], i)
                })), vd = Rr("i.e", zi((function (t) {
                    var e = mu(t), n = e.l("isEU");
                    if (Za(n)) {
                        var r = parseInt(mr(t, "is_gdpr") || "", 10);
                        Cu(r, [0, 1]) ? (e.o("isEU", r), n = !!r) : (t = io(t = qs(t).l("wasSynced"), "params.eu")) && (e.o("isEU", t), n = !!t)
                    }
                    return n
                }), (function (t) {
                    return mu(t).l("isEU")
                }))), md = function () {
                    function t(t, e) {
                        this.b = t, this.Ah = e
                    }

                    return t.prototype.Ca = function (t) {
                        return Un(Ru(tu(this.Da, this), t))
                    }, t.prototype.Da = function (t, e) {
                        var n = this, r = [], i = this.Ah(this.b, e && e.type, t.type);
                        return i && (r = Ru((function (e) {
                            return e({b: n.b, ha: t}) || []
                        }), i)), r
                    }, t.prototype.Ka = function (t) {
                        return t.length
                    }, t.prototype.Sc = function (t) {
                        return [t]
                    }, t.prototype.isEnabled = function () {
                        return !0
                    }, t
                }(), gd = function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).buffer = [], e.zg = 7500, e.ad = 3e4, e.Rc(), e
                    }

                    return Oo(e, t), e.prototype.push = function (t, e) {
                        var n = this.qa.Da(t, e);
                        Ii(this.buffer, n), this.qa.Ka(this.buffer) > this.zg && this.flush()
                    }, e.prototype.flush = function () {
                        var t = this.buffer;
                        t.length && (this.send(t), this.buffer = [])
                    }, e
                }(gl), bd = "metrikaId_" + Math.random(), yd = {jd: 0},
                wd = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                Ed = ["email", "tel"], Cd = /ym-hide-content/, xd = /ym-show-content/,
                Ad = /^[\w\u0410-\u042f\u0430-\u044f]$/, Td = [65, 90], Sd = [97, 122],
                kd = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
                _d = new RegExp("(" + Ya("|", wd) + ")", "i"), Rd = ["password", "passwd", "pswd"],
                Md = new RegExp("(" + Ya("|", wd.concat("имя фамилия отчество индекс телефон адрес паспорт номер(-|\\.|_|\\s){0,2}карты электронная(-|\\.|_|\\s){0,2}почта дата(-|\\.|_|\\s){0,2}рождения дом улица квартира город область".split(" "))) + ")", "i"),
                Nd = zi((function () {
                    var t;
                    return (t = {}).A = 1, t.ABBR = 2, t.ACRONYM = 3, t.ADDRESS = 4, t.APPLET = 5, t.AREA = 6, t.B = 7, t.BASE = 8, t.BASEFONT = 9, t.BDO = 10, t.BIG = 11, t.BLOCKQUOTE = 12, t.BODY = 13, t.BR = 14, t.BUTTON = 15, t.CAPTION = 16, t.CENTER = 17, t.CITE = 18, t.CODE = 19, t.COL = 20, t.COLGROUP = 21, t.DD = 22, t.DEL = 23, t.DFN = 24, t.DIR = 25, t.DIV = 26, t.DL = 27, t.DT = 28, t.EM = 29, t.FIELDSET = 30, t.FONT = 31, t.FORM = 32, t.FRAME = 33, t.FRAMESET = 34, t.H1 = 35, t.H2 = 36, t.H3 = 37, t.H4 = 38, t.H5 = 39, t.H6 = 40, t.HEAD = 41, t.HR = 42, t.HTML = 43, t.I = 44, t.IFRAME = 45, t.IMG = 46, t.INPUT = 47, t.INS = 48, t.ISINDEX = 49, t.KBD = 50, t.LABEL = 51, t.LEGEND = 52, t.LI = 53, t.LINK = 54, t.MAP = 55, t.MENU = 56, t.META = 57, t.NOFRAMES = 58, t.NOSCRIPT = 59, t.OBJECT = 60, t.OL = 61, t.OPTGROUP = 62, t.OPTION = 63, t.P = 64, t.PARAM = 65, t.PRE = 66, t.Q = 67, t.S = 68, t.SAMP = 69, t.SCRIPT = 70, t.SELECT = 71, t.SMALL = 72, t.SPAN = 73, t.STRIKE = 74, t.STRONG = 75, t.STYLE = 76, t.SUB = 77, t.SUP = 78, t.TABLE = 79, t.TBODY = 80, t.TD = 81, t.TEXTAREA = 82, t.TFOOT = 83, t.TH = 84, t.THEAD = 85, t.TITLE = 86, t.TR = 87, t.TT = 88, t.U = 89, t.UL = 90, t.VAR = 91, t.NOINDEX = 100, t
                })), Id = [17, 18, 38, 32, 39, 15, 11, 7, 1], Dd = function () {
                    var t = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        Mj: new RegExp("(" + Ya("|", t) + ")", "i"),
                        Vj: new RegExp("(" + Ya("|", t.concat("имя;фамилия;отчество;индекс;телефон;адрес;паспорт;Номер(-|\\.|_|\\s){0,2}карты;дата(-|\\.|_|\\s){0,2} рождения;дом;улица;квартира;город;область".split(";"))) + ")", "i"),
                        Kj: /ym-record-keys/i,
                        ri: "•",
                        Uj: 88
                    }
                }(), Pd = Mu(co(Dd.ri, Ki)), Od = !0, Ld = "", jd = !1, Bd = !0, Fd = !1, Gd = yo((function (t, e) {
                    var n = so([t, "efv." + e.event], Mr);
                    return e.M = ku(no(Ki, n), e.M), e
                })), Hd = zi((function (t) {
                    var e = [], n = [], r = [];
                    return t.document.attachEvent && !t.opera && (e.push(ht), n.push(wa), n.push(Ea)), t.document.addEventListener ? e.push(xa) : (n.push(Ca), r.push(xa)), function (t, e) {
                        var n = yu((function (t) {
                            return 0 < t.M.length
                        }), e), r = du({target: t.document, type: "document"});
                        return ku(no(Ki, r, Gd(t)), n)
                    }(t, e = Lo([{target: t, type: "window", event: "beforeunload", M: [Po]}, {
                        target: t,
                        type: "window",
                        event: "unload",
                        M: [Po]
                    }, {event: "click", M: [Ta]}, {event: "dblclick", M: [Ta]}, {
                        event: "mousedown",
                        M: [Ta]
                    }, {event: "mouseup", M: [Sa]}, {event: "keydown", M: [Ma]}, {
                        event: "keypress",
                        M: [Na]
                    }, {event: "copy", M: [_a]}, {event: "blur", M: e}, {event: "focusin", M: n}, {
                        event: "focusout",
                        M: r
                    }], !t.document.attachEvent || t.opera ? [{
                        target: t,
                        type: "window",
                        event: "focus",
                        M: [lt]
                    }, {
                        target: t,
                        type: "window",
                        event: "blur",
                        M: [ht]
                    }] : [], t.document.addEventListener ? [{event: "focus", M: [Ca]}, {
                        event: "change",
                        M: [Aa]
                    }, {event: "submit", M: [Ia]}] : [{type: "formInput", event: "change", M: [Aa]}, {
                        type: "form",
                        event: "submit",
                        M: [Ia]
                    }]))
                })), Ud = zi((function (t) {
                    return Lo(di(t) ? [{target: t, type: "document", event: "mouseleave", M: [Da]}] : [])
                })), Xd = ["submit", "beforeunload", "unload"], Vd = zi((function (t, e) {
                    var n = e(t);
                    return iu((function (t, e) {
                        return t[e.type + ":" + e.event] = e.M, t
                    }), {}, n)
                })), zd = co(Hd, (function (t, e, n, r) {
                    return Vd(e, t)[n + ":" + r] || []
                })), Yd = /^\s*function submit\(\)/, qd = /opera mini/i, Kd = Rr("fw.p", (function (t, e) {
                    return e.Ra ? ct(t, e, new md(t, zd), Hd, Xd) : jc.resolve(Po)
                })), Wd = Rr("pr.p", (function (t, e) {
                    var n, r;
                    Ni(t) && rl(t, "5", e)({
                        H: yc(((n = {}).pq = 1, n.ar = 1, n)),
                        G: (r = {}, r["page-url"] = _i(t).href, r["page-ref"] = io(t, "document.referrer") || "", r)
                    }, e).catch(Mr(t, "pr.p.s"))
                })), Jd = no(hu, ou("0")), $d = Rr("c.m.p", (function (t, e) {
                    return co(Lt(t, mc(e)), ut)
                })), Zd = Rr("e.a.p", (function (t, e) {
                    var n = fn(t, e);
                    return n = so([no(Ki, Ja(!0)), yu(Boolean, ku(co(n, io), ["clickmap", "trackLinks", "accurateTrackBounce"]))], ku), e.hh && n(), n
                })), Qd = Rr("cc.i", (function (t, e) {
                    var n = so([t, e], at);
                    gn(t, e, n = so([t, n, 300], Sr))
                })), tp = Rr("s.f.i", (function (t, e) {
                    return gn(t, e, (function (n) {
                        (io(n, "settings.button_goals") || -1 !== _i(t).href.indexOf("yagoalsbuttons=1")) && (Oc(t).C(t, ["click"], Mr(t, "c.t.c", no(ou("target"), so([t, e], Pa(t, e, 0, ot))))), Qe(t, e, "Button goal. Counter " + e.id + ". Init.")())
                    }))
                })), ep = Rr("p.ai", (function (t, e) {
                    return new jc((function (n) {
                        (Xu(t) || Hu(t)) && n(gn(t, e, (function (n) {
                            var r;
                            return (n = io(n, "settings.sbp")) ? it(t, lu({}, n, ((r = {}).c = e.id, r)), 10) : Po
                        }))), n(Po)
                    }))
                })), np = Rr("p.fh", (function (t, e) {
                    var n, r;
                    void 0 === e && (e = !0);
                    var i = qs(t), o = Ws(t), a = i.l("wasSynced"), u = {id: 3, aa: "0"};
                    return e && a && a.time + 864e5 > o(ur) ? jc.resolve(a) : rl(t, "f", u)({
                        H: yc((n = {}, n.pv = 1, n)),
                        G: (r = {}, r["page-url"] = _i(t).href, r["page-ref"] = t.document.referrer, r)
                    }, u).then((function (t) {
                        var e;
                        return (e = {}).time = o(ur), e.params = io(t, "settings"), e.bkParams = io(t, "userData"), t = e, i.o("wasSynced", t), t
                    })).catch(Mr(t, "f.h"))
                })), rp = Rr("pa.int", (function (t, e) {
                    return function () {
                        var n, r, i = Eo(arguments), o = Po, a = null, u = i.length;
                        if (0 !== i.length && i[0]) {
                            var c = i.slice(-1)[0];
                            vo(c) && (o = c, u = i.length + -1);
                            var s = i.slice(-2)[0];
                            vo(s) && (o = s, a = c, u = i.length + -2), a = {
                                dh: a,
                                Sa: o,
                                R: 1 === (u = i.slice(0, u)).length ? i[0] : ro(u)
                            }
                        } else a = void 0;
                        if (!a) return null;
                        if (i = a.dh, o = a.R, a = a.Sa, !lo(o) && !eo(o)) return null;
                        u = rl(t, "1", e), c = ul(e).url, s = io(o, "__ym.user_id");
                        var f = hu(o), h = Cu("__ymu", f), l = Cu("__ym", f) && s;
                        return f = !il(e), s = Qe(t, e, l ? "Set user id " + s : (h ? "User p" : "P") + "arams. Counter " + e.id, l ? void 0 : JSON.stringify(o)), o = u({
                            R: o,
                            H: yc((n = {}, n.pa = 1, n.ar = 1, n)),
                            G: (r = {}, r["page-url"] = c || _i(t).href, r)
                        }, e).then(f ? s : Po), Ze(t, "p.s", o, a, i)
                    }
                })), ip = Rr("exps.int", (function (t, e) {
                    return function (n, r, i) {
                        var o, a;
                        if (void 0 === r && (r = Po), n && 0 < n.length) {
                            var u = rl(t, "e", e), c = ul(e).url;
                            return n = u({
                                H: yc((o = {}, o.ex = 1, o.ar = 1, o)),
                                G: (a = {}, a["page-url"] = c || _i(t).href, a.exp = n, a)
                            }, e), Ze(t, "exps.s", n, r, i)
                        }
                    }
                })), op = Rr("y.p", (function (t, e) {
                    var n = Mn(t, e);
                    if (n) {
                        var r = Cr(t), i = so([t, n, e], rt);
                        yr(t, r, (function (t) {
                            t.C("params", i)
                        })), n.$.C("params", no(ou("1"), i))
                    }
                })), ap = Xi("is", (function (t) {
                    var e = zs(t), n = "" + fc.Ia + jo("Wjw75ghm7fa7JW8p");
                    if (_i(t).hash.substring(1, n.length + 1) === n || e.l("debug_build") === fc.Ia) return e.o("debug_build", fc.Ia), Jr(t, {src: "https://yastatic.net/metrika-static-watch/tag.js"})
                })), up = zi(Hi), cp = no(uo("exec", /counterID=(\d+)/), ou("1")), sp = yo((function (t, e) {
                    var n = up(t), r = Pi(e), i = r[0], o = r[1];
                    if (r = r.slice(2), o) {
                        var a = "" + i, u = {id: 1, aa: "0"}, c = cp(a);
                        c ? u.id = c : -1 === a.indexOf(":") ? u.id = parseInt(a, 10) : (c = (a = a.split(":"))[1], u.id = parseInt(a[0], 10), u.aa = gc(c) ? "1" : "0"), a = (u = [fn(t, u), u])[0], u = u[1], n[c = mc(u)] || (n[c] = {}), n = n[c], "init" === o ? t[i = "yaCounter" + u.id] || (o = r[0], ap(t) || (t[i] = new t.Ya[fc.Rb](lu({}, o, u)))) : a && a[o] && n.Vh ? a[o].apply(a, r) : ((u = n.cg) || (u = [], n.cg = u), u.push(Lo([i, o], r)))
                    }
                })),
                fp = ((Rl = {}).transaction_id = "id", Rl.item_id = "id", Rl.item_name = "name", Rl.item_brand = "brand", Rl.promotion_name = "coupon", Rl.index = "position", Rl.item_variant = "variant", Rl.value = "revenue", Rl.item_category = "category", Rl),
                hp = ((Ml = {}).view_item = "detail", Ml.add_to_cart = "add", Ml.remove_from_cart = "remove", Ml.begin_checkout = "checkout", Ml.purchase = "purchase", Ml),
                lp = "currencyCode add delete remove purchase checkout detail".split(" "),
                dp = Rr("dl.w", (function (t, e, n) {
                    var r;
                    return Er(t, t[e], (function (t) {
                        n(t)
                    })) || (r = Sr(t, (function () {
                        dp(t, e, n)
                    }), 1e3, "ec.dl")), tu(Fi, null, t, r)
                })), pp = Rr("p.e", (function (t, e) {
                    var n = fn(t, e);
                    if (n && e.qd) {
                        var r = Mr(t, "h.ee", so([t, n = tu(n.params, n)], Q));
                        return dp(t, e.qd, (function (t) {
                            t.C(r)
                        }))
                    }
                })), vp = Rr("fid", (function (t) {
                    var e, n = Po;
                    if (!vo(t.PerformanceObserver)) return n;
                    var r = mu(t);
                    if (r.l("fido")) return n;
                    r.o("fido", !0);
                    var i = new t.PerformanceObserver(Mr(t, "fid", (function (e) {
                        e = e.getEntries()[0], r.o("fid", t.Math.round(100 * (e.processingStart - e.startTime))), n()
                    })));
                    n = function () {
                        return i.disconnect()
                    };
                    try {
                        i.observe(((e = {}).type = "first-input", e.buffered = !0, e))
                    } catch (t) {
                    }
                    return n
                })), mp = go((function (t, e, n, r) {
                    var i, o;
                    (n = fn(e, n)) && function (t, e, n) {
                        var r = !1, i = "";
                        if (!lo(e)) return tn(n, "Ecommerce data should be an object"), r;
                        var o = e.goods;
                        switch (t) {
                            case"detail":
                            case"add":
                            case"remove":
                                eo(o) && o.length ? (r = gu((function (t) {
                                    return lo(t) && (Ro(t.id) || Hr(n, t.id) || Ro(t.name))
                                }), o)) || (i = "All items in 'goods' should be objects and contain 'id' or 'name' field") : i = "Ecommerce data should contain 'goods' non-empty array";
                                break;
                            case"purchase":
                                Hr(n, e.id) || Ro(e.id) ? r = !0 : i = "Purchase object should contain string or number 'id' field"
                        }
                        return tn(n, i), r
                    }(t, r, e) && (e = tu(n.params, n), (t = tt(t, r, "goods")) && e && e(((i = {}).__ym = ((o = {}).ecommerce = [t], o), i)))
                })), gp = Rr("ecm.a", mp("add")), bp = Rr("ecm.r", mp("remove")), yp = Rr("ecm.d", mp("detail")),
                wp = Rr("ecm.p", mp("purchase")), Ep = cs("form"), Cp = ls("form"), xp = zi((function (t) {
                    return Ya("[^\\d<>]*", t.split(""))
                })), Ap = zi((function (t) {
                    return new RegExp(xp(t), "g")
                })), Tp = no(co("replace", uo), eu([/\D/g, ""]), Vi), Sp = /\S/,
                kp = co(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], ro),
                _p = ["https://iframe-toloka.com/"],
                Rp = ao(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                Mp = ["form", "button", "phone", "status"], Np = zi((function (t, e, n) {
                    n.inline ? L(t, n) : (t._ym__postMessageEvent = e, t._ym__inpageMode = n.inpageMode, t._ym__initMessage = n.initMessage, function (t, e) {
                        var n = Zc(t);
                        if (n) {
                            n = n("div");
                            var r = li(t);
                            if (r) {
                                n.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                                var i = n.firstChild;
                                i.onload = function () {
                                    Jr(i.contentWindow, {src: e})
                                }, t._ym__remoteIframeEl = i, r.appendChild(n), n.removeChild(i);
                                var o = null;
                                n.attachShadow ? o = n.attachShadow({mode: "open"}) : n.createShadowRoot ? o = n.createShadowRoot() : n.webkitCreateShadowRoot && (o = n.webkitCreateShadowRoot()), o ? o.appendChild(i) : (r.appendChild(i), t._ym__remoteIframeContainer = i)
                            }
                        }
                    }(t, n.resource))
                }), (function (t, e, n) {
                    return n.id
                })), Ip = Rr("cs.init", (function (t, e) {
                    var n;
                    -1 < _i(t).search.indexOf("_ym_status-check=") && e.id === parseInt(B(t), 10) && "0" === e.aa && Sr(t, so([t, ((n = {}).lang = "ru", n.fileId = "status", n.id = "" + e.id, n), !1], L), 0, "cs")
                })), Dp = zi((function (t) {
                    return ju(t) || !Io("querySelectorAll", t.document.querySelectorAll)
                })), Pp = zi(U), Op = zi(Yo, qi), Lp = Rr("phc.p", (function (t, e) {
                    return Dp(t) ? Po : gn(t, e, (function (n) {
                        var r = e.id, i = Ko(t, void 0, r), o = i.l("phc_settings") || "";
                        if (n = io(n, "settings.phchange")) {
                            var a = Ei(t, n) || "";
                            a !== o && i.o("phc_settings", a)
                        } else o && (n = Op(t, o));
                        i = io(n, "clientId"), o = io(n, "orderId"), n = io(n, "phones") || [], i && o && n.length && (lu(o = {
                            sb: "",
                            Cb: "",
                            bg: 0,
                            ga: {},
                            oa: [],
                            xf: !1,
                            Va: !0,
                            b: t,
                            Se: e
                        }, {xf: !0}), D(t, r, o), n = _r(t), i = Ar(t, n, 1e3), r = tu(D, null, t, r, o), i.C(r), H(t, n))
                    }))
                })), jp = Rr("phc.h", (function (t, e) {
                    return function (t) {
                        return Fu(t) || Yu(t) || /mobile/i.test(Bu(t)) || !Za(io(t, "orientation"))
                    }(t) || Dp(t) ? null : gn(t, e, (function (n) {
                        if (!io(n, "settings.phchange")) {
                            var r = Ko(t, "").l("yaHidePhones");
                            r = r ? Yo(t, r) : "", (n = io(n, "settings.phhide") || r) && F(t, e, n)
                        }
                    }))
                })), Bp = Rr("up.int", (function (t, e) {
                    return Mr(t, "up.c", (function (n, r, i) {
                        var o, a = fn(t, e), u = ol(t).warn;
                        a ? lo(n) ? ((o = {}).__ymu = n, n = o, (o = a.params) && o(n, r || Po, i)) : u("Wrong user params") : u("No counter instance found")
                    }))
                })), Fp = Rr("trigger.in", (function (t, e) {
                    e.mg && Bn(t, so([t, "yacounter" + e.id + "inited"], ui), "t.i")
                })), Gp = Rr("destruct.e", (function (t, e, n) {
                    return function () {
                        var r = mu(t), i = e.id;
                        _u((function (e, n) {
                            return vo(e) && Mr(t, "dest.fr." + n, e)()
                        }), n), delete r.l("counters")[mc(e)], delete t["yaCounter" + i]
                    }
                })), Hp = Rr("fip", (function (t, e) {
                    if (!Vf(t) || Tu(t)) {
                        var n = qs(t);
                        if (!n.l("fip")) {
                            var r = no(Mu(no((function (e, n) {
                                return Rr("fip." + n, e)(t)
                            }), tu(na, null))), Wa("-"))(e);
                            n.o("fip", r)
                        }
                    }
                })), Up = co("9-d5ve+.r%7", Ki), Xp = Rr("ad", (function (t, e) {
                    if (!e.bb) {
                        var n = mu(t);
                        if (!n.l("adBlockEnabled")) {
                            var r = function (t) {
                                Cu(t, ["2", "1"]) && n.o("adBlockEnabled", t)
                            }, i = zs(t), o = i.l("isad");
                            if (o) r(o); else {
                                var a = co("adStatus", n.o), u = function (t) {
                                    return r(t = t ? "1" : "2"), a("complete"), i.o("isad", t, 1200), t
                                }, c = rl(t, "adb", e);
                                if (!n.l("adStatus")) {
                                    a("process");
                                    var s = "metrika/a" + Up().replace(/[^a-v]+/g, "") + "t.gif";
                                    !function (t, e) {
                                        var n = t.document;
                                        if (Cu(n.readyState, ["interactive", "complete"])) Bn(t, e); else {
                                            var r = Oc(t), i = r.C, o = r.Kb, a = function () {
                                                o(n, ["DOMContentLoaded"], a), o(t, ["load"], a), e()
                                            };
                                            i(n, ["DOMContentLoaded"], a), i(t, ["load"], a)
                                        }
                                    }(t, (function () {
                                        return c({}, s).then(co(!1, u)).catch(co(!0, u))
                                    }))
                                }
                            }
                        }
                    }
                })), Vp = Rr("suid.int", (function (t, e) {
                    return function (n, r, i) {
                        var o = fn(t, e), a = Bf(t);
                        Ro(n) || Hr(t, n) ? (n = ro(["__ym", "user_id", n]), o.params(n, r || Po, i)) : a.error("Incorrect user ID")
                    }
                })), zp = Rr("guid.int", (function (t, e) {
                    return function (n) {
                        var r = er(t, e);
                        return n && Li(t, n, null, r), r
                    }
                })), Yp = function () {
                    function t(t, e, n) {
                        this.ei = "wv2.c", this.Bb = [], this.ta = {}, this.b = t, this.J = N(t, this, n, this.ei), this.D = e, this.Ua = this.D.Eh(), this.start = this.J.F(this.start, "st"), this.stop = this.J.F(this.stop, "sp")
                    }

                    return t.prototype.start = function () {
                        var t = this;
                        this.Bb = ku((function (e) {
                            var n = e[0], r = e[1];
                            return e = vo(r) ? r : r.Dd, r = vo(r) ? t.b : r.target, e = tu(t.J.F(e, n), t), t.Ua.C(r, [n], e)
                        }), fu(this.ta))
                    }, t.prototype.stop = function () {
                        _u(Vi, this.Bb)
                    }, t.prototype.X = function (t) {
                        return this.D.ja().X(t)
                    }, t
                }(),
                qp = Ya("", ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQA", "AAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="]),
                Kp = ["checkbox", "radio"], Wp = ou("location.href"), Jp = function (t) {
                    function e(e, n, r) {
                        return (n = t.call(this, e, n, r) || this).ia = {
                            elements: [],
                            attributes: []
                        }, n.index = 0, n.Sd = n.J.F(n.Sd, "o"), n.md = n.J.F(n.md, "io"), n.bd = n.J.F(n.bd, "ao"), n.fe = n.J.F(n.fe, "a"), n.de = n.J.F(n.de, "at"), n.ie = n.J.F(n.ie, "r"), n.ee = n.J.F(n.ee, "c"), n.Bc = new e.MutationObserver(n.Sd), n
                    }

                    return Oo(e, t), e.prototype.start = function () {
                        this.Bc.observe(this.b.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    }, e.prototype.stop = function () {
                        this.Bc.disconnect()
                    }, e.prototype.bd = function (t) {
                        var e = t.target;
                        t = t.attributeName;
                        var n = this.ia.elements.indexOf(e);
                        -1 === n && (n = this.ia.elements.push(e) - 1, this.ia.attributes[n] = {}), this.ia.attributes[n] || (this.ia.attributes[n] = {}), n = this.ia.attributes[n];
                        var r = e.getAttribute(t);
                        n[t] = M(this.b, e, t, r, this.D.jc()).value
                    }, e.prototype.md = function (t) {
                        function e(t) {
                            var e = Wi(n.b)(t, r);
                            return -1 === e ? (r.push(t), t = {sd: {}}, i.push(t), t) : i[e]
                        }

                        var n = this, r = [], i = [];
                        _u((function (t) {
                            var r = t.attributeName, i = t.removedNodes, o = t.oldValue, a = t.target, u = t.nextSibling,
                                c = t.previousSibling;
                            switch (t.type) {
                                case"attributes":
                                    n.bd(t);
                                    var s = e(a);
                                    s.sd[r] || (s.sd[r] = M(n.b, a, r, o, n.D.jc()).value);
                                    break;
                                case"childList":
                                    i && _u((function (t) {
                                        (s = e(t)).af || lu(s, {af: a, th: u || void 0, uh: c || void 0})
                                    }), Pi(i));
                                    break;
                                case"characterData":
                                    (s = e(a)).bf || (s.bf = o)
                            }
                        }), t);
                        var o = this.D.ja();
                        _u((function (t, e) {
                            o.qe(t, i[e])
                        }), r)
                    }, e.prototype.Sd = function (t) {
                        var e = this;
                        if (Wp(this.b)) {
                            var n = this.D.K();
                            this.md(t), _u((function (t) {
                                var r = t.addedNodes, i = t.removedNodes, o = t.target;
                                switch (t.type) {
                                    case"childList":
                                        i && i.length && e.ie(Pi(i), n), r && r.length && e.fe(Pi(r), n);
                                        break;
                                    case"characterData":
                                        e.ee(o, n)
                                }
                            }), t), this.de(n)
                        } else this.stop()
                    }, e.prototype.de = function (t) {
                        var e = this;
                        _u((function (n, r) {
                            var i = e.ic();
                            e.D.T("mutation", {index: i, attributes: e.ia.attributes[r], target: e.X(n)}, "ac", t)
                        }), this.ia.elements), this.ia.elements = [], this.ia.attributes = []
                    }, e.prototype.fe = function (t, e) {
                        var n = this, r = this.ic();
                        this.D.ja().pc({
                            fa: t, Qc: function (t) {
                                t = ku((function (t) {
                                    return delete (t = lu({}, t)).node, t
                                }), t), n.D.T("mutation", {index: r, fa: t}, "ad", e)
                            }
                        })
                    }, e.prototype.ie = function (t, e) {
                        var n = this, r = this.ic(), i = this.D.ja(), o = ku((function (t) {
                            var e = i.removeNode(t);
                            return K(n.b, t, (function (t) {
                                i.removeNode(t)
                            })), e
                        }), t);
                        this.D.T("mutation", {index: r, fa: o}, "re", e)
                    }, e.prototype.ee = function (t, e) {
                        var n = this.ic();
                        this.D.T("mutation", {value: t.textContent, target: this.X(t), index: n}, "tc", e)
                    }, e.prototype.ic = function () {
                        var t = this.index;
                        return this.index += 1, t
                    }, e
                }(Yp), $p = function () {
                    function t(t, e) {
                        var n = this;
                        this.bc = [], this.cc = {}, this.Qd = 1, this.Fa = 0, this.cb = {}, this.sc = {}, this.removeNode = function (t) {
                            var e = n.X(t), r = oi(t);
                            if (r) return r = "NR:" + r.toLowerCase(), n.cc[r] && n.$.V(r, {data: {node: t, id: e}}), e
                        }, this.Za = function (t) {
                            var e = oi(t);
                            if (e) {
                                var r = t.__ym_indexer;
                                return r || (r = n.Qd, t.__ym_indexer = r, n.Qd += 1, e = "NA:" + e.toLowerCase(), n.cc[e] && n.$.V(e, {
                                    data: {
                                        node: t,
                                        id: r
                                    }
                                })), r
                            }
                            return null
                        }, this.b = t;
                        var r = N(t, this, "i");
                        this.$ = kr(t), this.options = e, this.start = r.F(this.start, "st"), this.stop = r.F(this.stop, "sp"), this.X = r.F(this.X, "i"), this.qe = r.F(this.qe, "o"), this.pc = r.F(this.pc, "a"), this.removeNode = r.F(this.removeNode, "r"), this.ca = r.F(this.ca, "s")
                    }

                    return t.prototype.qe = function (t, e) {
                        var n = this.Za(t);
                        $a(n) || (this.sc[n] && this.X(t), this.sc[n] = e)
                    }, t.prototype.C = function (t, e, n) {
                        t = "" + e + t, this.cc[t] = !0, this.$.C(t, n)
                    }, t.prototype.da = function (t, e, n) {
                        t = "" + e + t, delete this.cc[t], this.$.da(t, n)
                    }, t.prototype.start = function () {
                        this.Fa = Sr(this.b, no(tu(this.ca, this, !1), this.start), 50, "i.s")
                    }, t.prototype.stop = function () {
                        this.flush(), Fi(this.b, this.Fa), this.bc = []
                    }, t.prototype.pc = function (t) {
                        var e = this, n = [], r = 0, i = {Qc: t.Qc, result: [], rc: 0, fa: n};
                        this.bc.push(i), _u((function (t) {
                            K(e.b, t, (function (t) {
                                var o = e.Za(t);
                                $a(o) || (n.push(t), e.cb[o] && e.X(t), e.cb[o] = {node: t, event: i, cj: r}, r += 1)
                            }))
                        }), t.fa)
                    }, t.prototype.X = function (t) {
                        if (t === this.b) return 0;
                        var e = this.Za(t), n = this.cb[e], r = this.yh(e), i = r.af, o = r.sd, a = r.bf, u = r.th,
                            c = r.uh;
                        if (n) {
                            r = n.event, n = n.cj;
                            var s = this.b.document.documentElement === t;
                            u = u || t.nextSibling;
                            var f = c || t.previousSibling;
                            c = !s && u ? this.Za(u) : null, f = !s && f ? this.Za(f) : null, s = this.b, u = this.options, i = this.Za(i || t.parentNode || t.parentElement) || 0;
                            var h = void 0;
                            if (void 0 === f && (f = null), void 0 === c && (c = null), void 0 === o && (o = {}), void 0 === h && (h = oi(t)), Za(h) ? t = void 0 : (i = {
                                id: e,
                                ce: f !== i ? f : null,
                                next: c !== i ? c : null,
                                parent: i,
                                name: h.toLowerCase(),
                                node: t
                            }, gi(t) ? (a = function (t, e) {
                                if (Ro(e)) return e;
                                var n = t.textContent;
                                return Ro(n) || Ro(n = t.data) || Ro(n = t.nodeValue) ? n : ""
                            }(t, a), i.attributes = {}, (i.content = a) && (t = Et(s, t)) && (i.content = "" !== a.trim() ? function (t, e) {
                                return Ya("", ku((function (e) {
                                    return t.isNaN(e) ? Ad.test(e) ? (e = e.toUpperCase() === e ? Td : Sd, String.fromCharCode(Gr(t, e[0], e[1]))) : e : "" + Gr(t, 0, 9)
                                }), e.split("")))
                            }(s, a) : a, i.hidden = t)) : (i.attributes = R(s, t, u, o, h), (a = bt(t) && mt(t)) && (i.hidden = a), t.namespaceURI && ko(t.namespaceURI, "svg") && (i.Bf = t.namespaceURI)), t = i), Za(t)) return;
                            delete this.cb[e], r.result[n] = t, r.rc += 1, r.fa.length === r.rc && r.Qc(r.result)
                        }
                        return e
                    }, t.prototype.flush = function () {
                        this.ca(!0)
                    }, t.prototype.ca = function (t) {
                        var e = this;
                        if (Wp(this.b)) {
                            var n = hu(this.cb);
                            (n = Xn(n = ku((function (t) {
                                return e.cb[t].node
                            }), n), this.X))(t = t ? tf(Po) : zn(this.b, 20)), this.bc = yu((function (t) {
                                return t.rc !== t.result.length
                            }), this.bc)
                        }
                    }, t.prototype.yh = function (t) {
                        if ($a(t)) return {};
                        var e = this.sc[t];
                        return e ? (delete this.sc[t], e) : {}
                    }, t
                }(), Zp = ["input", "change", "keyup", "paste", "cut"], Qp = function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).inputs = {}, e.od = !1, e.Dc = e.J.F(e.Dc, "ii"), e.Ec = e.J.F(e.Ec, "ir"), e.Jc = e.J.F(e.Jc, "ri"), e.Zc = e.J.F(e.Zc, "ur"), e.Cd = e.J.F(e.Cd, "ce"), e.oc = e.J.F(e.oc, "vc"), e
                    }

                    return Oo(e, t), e.prototype.start = function () {
                        var t = this, e = this.D.ja();
                        this.od = this.Vg(), _u((function (n) {
                            n = n.toLowerCase(), e.C(n, "NA:", tu(t.Dc, t)), e.C(n, "NR:", tu(t.Ec, t))
                        }), as), this.Bb = [this.Ua.C(this.b.document, Zp, tu(this.Cd, this)), function () {
                            _u((function (n) {
                                n = n.toLowerCase(), e.da(n, "NA:", t.Dc), e.da(n, "NR:", t.Ec)
                            }), as), _u(t.Zc, hu(t.inputs))
                        }]
                    }, e.prototype.Zc = function (t) {
                        if (this.od) {
                            var e = this.inputs[t];
                            e && (t = e.xi, e = e.element, t && this.b.Object.defineProperty(e, this.kc(e), t))
                        }
                    }, e.prototype.Ec = function (t) {
                        t && this.Zc(t.data.id)
                    }, e.prototype.Dc = function (t) {
                        t && (t = t.data, this.Jc(t.node, t.id))
                    }, e.prototype.kc = function (t) {
                        return rs(t) ? "checked" : "value"
                    }, e.prototype.Cd = function (t) {
                        if (t = t.target) {
                            var e = this.kc(t);
                            this.oc(t[e], t)
                        }
                    }, e.prototype.oc = function (t, e) {
                        var n = this.X(e), r = this.inputs[n];
                        if (r || (r = this.Jc(r, n))) {
                            n = r.Wg;
                            var i = r.value, o = this.kc(e);
                            t && !Cu(typeof t, ["string", "boolean", "number"]) || t === i || (i = M(this.b, e, o, t, this.D.jc()).value, n ? this.D.T("event", {
                                target: this.X(e),
                                checked: !!t
                            }, "change") : (n = wt(e), o = mt(e), this.D.T("event", {
                                value: i,
                                hidden: o && !n,
                                target: this.X(e)
                            }, "change")), r.value = t)
                        }
                    }, e.prototype.Jc = function (t, e) {
                        var n = this;
                        if (!bt(t) || "__ym_input_override_test" === t.getAttribute("class") || this.inputs[e]) return null;
                        var r = rs(t), i = this.kc(t), o = {element: t, Wg: r, value: t[i]};
                        return this.inputs[e] = o, this.od && Bn(this.b, (function () {
                            var e = n.b.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), i) || {},
                                r = n.b.Object.getOwnPropertyDescriptor(t, i) || {}, a = lu({}, e, r);
                            if (Io("((set)?(\\s?" + i + ")?)?", a.set)) {
                                try {
                                    n.b.Object.defineProperty(t, i, lu({}, a, {
                                        configurable: !0, set: function (t) {
                                            return n.oc(t, this), a.set.call(this, t)
                                        }
                                    }))
                                } catch (t) {
                                }
                                o.xi = a
                            }
                        })), o
                    }, e.prototype.Vg = function () {
                        var t = !0, e = Zc(this.b)("input");
                        try {
                            (e = Zc(this.b)("input")).value = "INPUT_VALUE", e.style.setProperty("display", "none", "important"), e.setAttribute("type", "text"), e.setAttribute("class", "__ym_input_override_test");
                            var n = this.b.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") || {},
                                r = this.b.Object.getOwnPropertyDescriptor(e, "value") || {}, i = lu({}, n, r);
                            this.b.Object.defineProperty(e, "value", lu({}, i, {
                                configurable: !0, set: function (t) {
                                    return i.set.call(e, t)
                                }
                            })), "INPUT_VALUE" !== e.value && (t = !1), e.value = "INPUT_TEST", "INPUT_TEST" !== e.value && (t = !1)
                        } catch (e) {
                            t = !1
                        }
                        return t
                    }, e
                }(Yp), tv = function (t) {
                    function e() {
                        var e, n = null !== t && t.apply(this, arguments) || this;
                        return n.Na = {
                            width: 0,
                            height: 0,
                            fb: 0,
                            gb: 0,
                            orientation: 0
                        }, n.ta = ((e = {}).resize = function () {
                            var t = this.Bd();
                            this.Rh(t) && (this.Na = t, this.Wf(t))
                        }, e.orientationchange = function () {
                            var t = this.Bd();
                            this.Na.orientation !== t.orientation && (this.Na = t, this.Oi(t))
                        }, e), n
                    }

                    return Oo(e, t), e.prototype.start = function () {
                        t.prototype.start.call(this), this.Vf()
                    }, e.prototype.zf = function (t) {
                        return !(t.height && t.width && t.gb && t.fb)
                    }, e.prototype.Rh = function (t) {
                        return t.height !== this.Na.height || t.width !== this.Na.width
                    }, e.prototype.Bd = function () {
                        var t = this.D.Xa(), e = fi(this.b);
                        return {
                            width: e[0],
                            height: e = e[1],
                            gb: (t = t.Ad()) ? t.scrollWidth : 0,
                            fb: t ? t.scrollHeight : 0,
                            orientation: this.D.Xa().Gh()
                        }
                    }, e.prototype.Oi = function (t) {
                        var e;
                        void 0 === e && (e = this.D.K()), this.D.T("event", {
                            width: t.width,
                            height: t.height,
                            orientation: t.orientation
                        }, "deviceRotation", e)
                    }, e.prototype.Wf = function (t, e) {
                        void 0 === e && (e = this.D.K()), this.D.T("event", {
                            width: t.width,
                            height: t.height,
                            gb: t.gb,
                            fb: t.fb
                        }, "resize", e)
                    }, e.prototype.Vf = function () {
                        var t = this.Bd();
                        this.zf(t) ? Sr(this.b, tu(this.Vf, this), 300) : (this.zf(this.Na) && (this.Na = t), this.Wf(t, 0))
                    }, e
                }(Yp), ev = function () {
                    function t(t) {
                        this.index = 0, this.kb = {}, this.b = t
                    }

                    return t.prototype.Vb = function (t, e, n) {
                        void 0 === n && (n = {});
                        var r = Ws(this.b), i = this.index;
                        this.index += 1, this.kb[i] = {Fa: 0, Hb: !1, rh: t, Ob: [], Md: r(ur)};
                        var o = this;
                        return function () {
                            var a = Eo(arguments), u = n.Va && !o.kb[i].Hb, c = o.kb[i];
                            Fi(o.b, c.Fa), c.Ob = a, c.Hb = !0;
                            var s = r(ur);
                            (u || s - c.Md >= e) && (t.apply(void 0, a), c.Md = s), c.Fa = Sr(o.b, (function () {
                                u || (t.apply(void 0, a), c.Md = r(ur)), c.Hb = !1, c.Ob = []
                            }), e, "th")
                        }
                    }, t.prototype.flush = function () {
                        var t = this;
                        _u((function (e) {
                            var n = t.kb[e], r = n.Fa, i = n.rh, o = n.Ob;
                            n.Hb && (t.kb[e].Hb = !1, i.apply(void 0, o), Fi(t.b, r))
                        }), hu(this.kb))
                    }, t
                }(), nv = function (t) {
                    function e(e, n, r) {
                        var i;
                        return (n = t.call(this, e, n, r) || this).ig = [], n.Ge = {
                            x: 0,
                            y: 0
                        }, n.ta = ((i = {}).scroll = function (t) {
                            if (this.D.Xa().rf()) this.Hc(t); else {
                                var e = t.target, n = yu((function (t) {
                                    return t[0] === e
                                }), this.ig).pop();
                                n ? n = n[1] : (n = this.ra.Vb(tu(this.Hc, this), 100, {Va: !0}), this.ig.push([e, n])), n(t)
                            }
                        }, i), n.ra = new ev(e), n.Hc = n.J.F(n.Hc, "o"), n
                    }

                    return Oo(e, t), e.prototype.start = function () {
                        t.prototype.start.call(this), this.D.T("event", {
                            x: Math.max(this.b.scrollX, 0),
                            y: Math.max(this.b.scrollY, 0),
                            page: !0,
                            target: -1
                        }, "scroll", 0)
                    }, e.prototype.stop = function () {
                        t.prototype.stop.call(this), this.ra.flush()
                    }, e.prototype.Hc = function (t) {
                        var e = this.D.Xa().Ad();
                        t = t.target;
                        var n = this.vb(t);
                        e = Iu(qa(t), [e, this.b, this.b.document]);
                        var r = Math.max(n.left, 0);
                        if (n = Math.max(n.top, 0), e) {
                            if (this.Ge.x === r && this.Ge.y === n) return;
                            this.Ge = {x: r, y: n}
                        }
                        this.D.T("event", {x: r, y: n, page: e, target: e ? -1 : this.X(t)}, "scroll")
                    }, e.prototype.vb = function (t) {
                        var e = {left: 0, top: 0};
                        if (!t) return e;
                        if (t.window === t) return {top: t.scrollY || 0, left: t.scrollX || 0};
                        var n = t.ownerDocument || t, r = t.documentElement, i = n.defaultView || n.parentWindow,
                            o = n.body;
                        return t !== n || (t = this.D.Xa().Ad()) ? Cu(t, [r, o]) ? {
                            top: t.scrollTop || i.scrollY,
                            left: t.scrollLeft || i.scrollX
                        } : {top: t.scrollTop || 0, left: t.scrollLeft || 0} : e
                    }, e
                }(Yp), rv = ["mousemove", "mousedown", "mouseup", "click"], iv = function (t) {
                    function e(e, n, r) {
                        var i = t.call(this, e, n, r) || this;
                        return i.ta = iu((function (t, e) {
                            return t[e] = i.vi, t
                        }), {}, rv), i.ra = new ev(e), i.zc = i.J.F(i.zc, "n"), i.Ui = i.J.F(i.ra.Vb(tu(i.zc, i), 100), "t"), i
                    }

                    return Oo(e, t), e.prototype.stop = function () {
                        t.prototype.stop.call(this), this.ra.flush()
                    }, e.prototype.vi = function (t) {
                        var e = null;
                        try {
                            e = t.type
                        } catch (t) {
                            return
                        }
                        "mousemove" === e ? this.Ui(t) : this.zc(t)
                    }, e.prototype.zc = function (t) {
                        var e = t.type, n = t.clientX;
                        n = void 0 === n ? null : n;
                        var r = t.clientY;
                        r = void 0 === r ? null : r, t = t.target || this.b.document.elementFromPoint(n, r), this.D.T("event", {
                            x: n || 0,
                            y: r || 0,
                            target: this.X(t)
                        }, e)
                    }, e
                }(Yp), ov = ["focus", "blur"], av = function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.ta = iu((function (t, n) {
                            return t[n] = e.sh, t
                        }), {}, ov), e
                    }

                    return Oo(e, t), e.prototype.sh = function (t) {
                        var e = t.target;
                        t = t.type, this.D.T("event", {target: this.X(e === this.b ? this.b.document.documentElement : e)}, t)
                    }, e
                }(Yp), uv = no(zi((function (t) {
                    var e = No(t.getSelection, "getSelection");
                    return e ? tu(e, t) : Po
                })), Vi), cv = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
                sv = /text|search|password|tel|url/, fv = function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.Ed = !1, e.ta = iu((function (t, n) {
                            return t[n] = e.Oh, t
                        }), {}, cv), e
                    }

                    return Oo(e, t), e.prototype.Oh = function (t) {
                        var e = this.D, n = t.type, r = t.which;
                        t = t.target, "mousemove" === n && 1 !== r || ((n = "select" === n ? this.Kh(t) : this.Ih()) && n.start !== n.end ? (this.Ed = !0, e.T("event", n, "selection")) : this.Ed && (this.Ed = !1, e.T("event", {
                            start: 0,
                            end: 0
                        }, "selection")))
                    }, e.prototype.Ih = function () {
                        var t = uv(this.b);
                        if (t && 0 < t.rangeCount) {
                            t = t.getRangeAt(0) || this.b.document.createRange();
                            var e = this.X(t.startContainer), n = this.X(t.endContainer);
                            if (!Za(e) && !Za(n)) return {start: t.startOffset, end: t.endOffset, dg: e, We: n}
                        }
                    }, e.prototype.Kh = function (t) {
                        if (sv.test(t.type || "")) {
                            var e = this.X(t);
                            if (!Za(e)) return {start: t.selectionStart, end: t.selectionEnd, target: e}
                        }
                    }, e
                }(Yp), hv = {focus: "windowfocus", blur: "windowblur"}, lv = function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).visibility = null, Za(e.b.document.hidden) ? Za(e.b.document.msHidden) ? Za(e.b.document.webkitHidden) || (e.visibility = {
                            hidden: "webkitHidden",
                            event: "webkitvisibilitychange"
                        }) : e.visibility = {
                            hidden: "msHidden",
                            event: "msvisibilitychange"
                        } : e.visibility = {
                            hidden: "hidden",
                            event: "visibilitychange"
                        }, e.handleEvent = e.J.F(e.handleEvent, "e"), e
                    }

                    return Oo(e, t), e.prototype.start = function () {
                        this.Bb = [this.Ua.C(this.b, this.visibility ? [this.visibility.event] : ["focus", "blur"], tu(this.handleEvent, this))]
                    }, e.prototype.handleEvent = function (t) {
                        this.D.T("event", {}, hv[this.visibility ? this.b.document[this.visibility.hidden] ? "blur" : "focus" : t.type])
                    }, e
                }(Yp), dv = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], pv = function (t) {
                    function e(e, n, r) {
                        var i, o = t.call(this, e, n, r) || this;
                        return o.Wc = {}, o.scrolling = !1, o.Tf = 0, o.ta = iu((function (t, e) {
                            return t[e] = {Dd: o.Yi, target: o.b.document}, t
                        }), ((i = {}).scroll = {
                            Dd: function () {
                                var t = this;
                                this.scrolling = !0, Fi(this.b, this.Tf), this.Tf = Sr(this.b, (function () {
                                    t.scrolling = !1
                                }), 150)
                            }, target: o.b.document
                        }, i), dv), o.ra = new ev(e), o.Ab = o.J.F(o.Ab, "nh"), o.Vi = o.J.F(o.ra.Vb(o.Ab, o.D.Xa().rf() ? 0 : 50, {Va: !0}), "th"), o
                    }

                    return Oo(e, t), e.prototype.Yi = function (t) {
                        var e = this, n = "touchcancel" === t.type || "touchend" === t.type;
                        t.changedTouches && 0 < t.changedTouches.length && _u((function (t) {
                            var r = e.Nh(t);
                            t.__ym_touch_id = r, n && delete e.Wc[t.identifier]
                        }), Pi(t.changedTouches)), "touchmove" === t.type ? this.scrolling ? this.Ab(t) : this.Vi(t, this.D.K()) : this.Ab(t)
                    }, e.prototype.Nh = function (t) {
                        return this.Wc[t.identifier] || (this.Wc[t.identifier] = k()), this.Wc[t.identifier]
                    }, e.prototype.Ab = function (t, e) {
                        void 0 === e && (e = this.D.K());
                        var n = t.type, r = ku((function (t) {
                            return {id: t.__ym_touch_id, x: Math.round(t.clientX), y: Math.round(t.clientY), force: t.force}
                        }), Pi(t.changedTouches));
                        0 < r.length && this.D.T("event", {touches: r, target: this.X(t.target)}, n, e)
                    }, e
                }(Yp), vv = function (t) {
                    function e() {
                        var e, n = null !== t && t.apply(this, arguments) || this;
                        return n.ta = ((e = {}).load = {
                            Dd: function (t) {
                                "IMG" === oi(t = t.target) && t.getAttribute("srcset") && this.D.T("event", {
                                    target: this.X(t),
                                    value: t.currentSrc
                                }, "srcset")
                            }, target: n.b.document
                        }, e), n
                    }

                    return Oo(e, t), e
                }(Yp), mv = function (t) {
                    function e(e, n, r) {
                        return (n = t.call(this, e, n, r) || this).wg = 1, n.ra = new ev(e), n.Qb = n.J.F(n.Qb, "z"), n
                    }

                    return Oo(e, t), e.prototype.start = function () {
                        if (this.kf()) {
                            t.prototype.start.call(this), this.Qb();
                            var e = this.Ua.C(io(this.b, "visualViewport"), ["resize"], this.ra.Vb(this.Qb, 10));
                            this.Bb.push(e)
                        }
                    }, e.prototype.stop = function () {
                        t.prototype.stop.call(this), this.ra.flush()
                    }, e.prototype.Qb = function () {
                        var t = this.kf();
                        t && t !== this.wg && (this.wg = t, this.Pi(t))
                    }, e.prototype.kf = function () {
                        var t = hi(this.b);
                        return t ? t[2] : null
                    }, e.prototype.Pi = function (t) {
                        var e = si(this.b);
                        this.D.T("event", {x: e.x, y: e.y, level: t}, "zoom")
                    }, e
                }(Yp), gv = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete"
                }, bv = {super: 1, Gj: 2, alt: 3, shift: 4, ak: 5, delete: 6, Dj: 6},
                yv = [4, 9, 8, 32, 37, 38, 39, 40, 46], wv = ((Nl = {})[1] = {
                    91: "&#8984;",
                    93: "&#8984;",
                    224: "&#8984;",
                    18: "&#8997;",
                    17: "&#8963;",
                    16: "&#8679;",
                    9: "&#8677;",
                    8: "&#9003;",
                    46: "&#9003;"
                }, Nl[2] = {
                    91: "&#xff;",
                    93: "&#xff;",
                    224: "&#xff;",
                    18: "Alt",
                    17: "Ctrl",
                    16: "Shift",
                    9: "Tab",
                    8: "Backspace",
                    46: "Delete"
                }, Nl.ii = {32: "SPACEBAR", 37: "&larr;", 38: "&uarr;", 39: "&rarr;", 40: "&darr;", 13: "Enter"}, Nl),
                Ev = /flash/, Cv = /ym-disable-keys/, xv = /^&#/, Av = function (t) {
                    function e(e, n, r) {
                        var i;
                        return (n = t.call(this, e, n, r) || this).$a = {}, n.Ba = 0, n.va = [], n.gg = [], n.$b = 0, n.Of = 0, n.ta = ((i = {}).keydown = function (t) {
                            if (this.vc(t) && !this.Zh(t)) {
                                var e = t.keyCode;
                                t.repeat || this.$a[e] || (this.$a[t.keyCode] = !0, gv[t.keyCode] && !this.Ba ? (this.Ba += 1, this.te(t), this.reset(300)) : this.Ba ? (this.Sg(), this.ke(t), this.rd()) : (this.reset(), this.ke(t)))
                            }
                        }, i.keyup = function (t) {
                            if (this.vc(t)) {
                                var e = t.keyCode, n = gv[t.keyCode];
                                this.$a[t.keyCode] && (this.$a[e] = !1), n && this.Ba && (this.Ba = 0, this.$a = {}), 1 === this.va.length && (t = this.va[0], Cu(t.keyCode, yv) && (this.Pc([t], !0), this.reset())), this.va = yu(no(qa(e), Yi), this.va), Fi(this.b, this.$b)
                            }
                        }, i), n.Eg = -1 !== (io(e, "navigator.appVersion") || "").indexOf("Mac") ? "1" : "2", n.vc = n.J.F(n.vc, "v"), n.rd = n.J.F(n.rd, "ec"), n.Pc = n.J.F(n.Pc, "sk"), n.zd = n.J.F(n.zd, "gk"), n.te = n.J.F(n.te, "sc"), n.Pb = n.J.F(n.Pb, "cc"), n.reset = n.J.F(n.reset, "r"), n.Lc = n.J.F(n.Lc, "rs"), n
                    }

                    return Oo(e, t), e.prototype.vc = function (t) {
                        var e = this.b.document.activeElement;
                        return t = t.target, !Iu(Boolean, [e && "OBJECT" === e.nodeName && Ev.test(e.getAttribute("type") || ""), "INPUT" === t.nodeName && "password" === t.getAttribute("type") && Cv.test(t.className)])
                    }, e.prototype.rd = function () {
                        this.gg = this.va.slice(0), Fi(this.b, this.$b), this.$b = Sr(this.b, co(this.gg, tu(this.Pc, this)), 0, "e.c")
                    }, e.prototype.Pc = function (t, e) {
                        if (void 0 === e && (e = !1), 1 < t.length || e) {
                            var n = this.zd(t);
                            this.D.T("event", {wc: n}, "keystroke")
                        }
                    }, e.prototype.zd = function (t) {
                        var e = this;
                        return Di((function (t, e) {
                            return (bv[t.xc] || 100) - (bv[e.xc] || 100)
                        }), t = ku((function (t) {
                            t = t.keyCode;
                            var n = gv[t], r = e.Fh(t);
                            return {id: t, key: r, wf: !!n && xv.test(r), xc: n}
                        }), t))
                    }, e.prototype.Fh = function (t) {
                        return wv[this.Eg][t] || wv.ii[t] || String.fromCharCode(t)
                    }, e.prototype.ke = function (t) {
                        Cu(t, this.va) || this.va.push(t)
                    }, e.prototype.te = function (t) {
                        this.ke(t), this.Pb()
                    }, e.prototype.Pb = function () {
                        this.Ba ? Sr(this.b, this.Pb, 100) : this.va = []
                    }, e.prototype.Sg = function () {
                        Fi(this.b, this.Of)
                    }, e.prototype.reset = function (t) {
                        t ? this.Of = Sr(this.b, tu(this.Lc, this), t) : this.Lc()
                    }, e.prototype.Lc = function () {
                        this.Ba = 0, this.va = [], this.$a = {}, Fi(this.b, this.$b)
                    }, e.prototype.Zh = function (t) {
                        return !(!t.target || "INPUT" !== t.target.nodeName) && (t.shiftKey || 32 === t.keyCode || "shift" === gv[t.keyCode])
                    }, e
                }(Yp), Tv = ["sr", "sd", "н"], Sv = /allow-same-origin/, kv = function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).Ib = [], e.ud = {}, e.Td = e.J.F(e.Td, "fi"), e.Ud = e.J.F(e.Ud, "sd"), e.Vd = e.J.F(e.Vd, "src"), e.Bc = new MutationObserver(e.Vd), e
                    }

                    return Oo(e, t), e.prototype.start = function () {
                        t.prototype.start.call(this), this.D.jc().qb && this.D.ja().C("iframe", "NA:", tu(this.Td, this)), this.D.gf().xd().C("sdr", tu(this.Ud, this))
                    }, e.prototype.stop = function () {
                        t.prototype.stop.call(this), _u((function (t) {
                            t.D.stop()
                        }), this.Ib)
                    }, e.prototype.Vd = function (t) {
                        var e = t.pop().target;
                        if (t = Eu((function (t) {
                            return t.qf === e
                        }), this.Ib)) {
                            this.Ib = yu((function (t) {
                                return t.qf !== e
                            }), this.Ib);
                            var n = t.D.yd();
                            try {
                                t.D.stop()
                            } catch (t) {
                            }
                            this.Ub(e, n)
                        }
                    }, e.prototype.Td = function (t) {
                        if (t) {
                            var e = t.data.node;
                            this.Bc.observe(e, {attributes: !0, attributeFilter: ["src"]}), this.Ub(e, t.data.id)
                        }
                    }, e.prototype.Ub = function (t, e) {
                        var n = this;
                        this.Xh(t) && $(this.b, t).then((function () {
                            var r = n.D.Ub(t.contentWindow, e);
                            n.Ib.push({D: r, qf: t})
                        })).catch(Po)
                    }, e.prototype.Ud = function (t) {
                        var e = this, n = t.L;
                        t = t.data, this.ud[n] || (this.ud[n] = {data: []});
                        var r = this.ud[n];
                        r.data = r.data.concat(t), this.b.isNaN(r.nd) && _u((function (t) {
                            "page" === t.type && (r.nd = t.data.wa - e.D.hf())
                        }), r.data), this.b.isNaN(r.nd) || (this.D.ca(ku((function (t) {
                            return t.K += r.nd, t.K = e.b.Math.max(0, t.K), t
                        }), r.data)), r.data = [])
                    }, e.prototype.Xh = function (t) {
                        var e = t.getAttribute("src"), n = t.getAttribute("sandbox");
                        return !(t.getAttribute("_ym_ignore") || n && !n.match(Sv) || e && "about:blank" !== e && (e = Wo(this.b, e).host) && _i(this.b).host !== e) && io(t, "contentWindow.location.href")
                    }, e
                }(Yp), _v = function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).me = e.J.F(e.me, "ps"), e
                    }

                    return Oo(e, t), e.prototype.start = function () {
                        this.D.ja().pc({fa: [this.b.document.documentElement], Qc: this.me})
                    }, e.prototype.me = function (t) {
                        var e = this.D.Hh(), n = e.zh(), r = _i(this.b), i = r.host, o = r.protocol;
                        r = r.pathname;
                        var a = fi(this.b), u = a[0];
                        a = a[1], this.D.T("page", {
                            content: ku((function (t) {
                                return delete (t = lu({}, t)).node, t
                            }), t),
                            Oe: n || "",
                            lf: !!n,
                            viewport: {width: u, height: a},
                            title: this.b.document.title,
                            doctype: e.Bh() || "",
                            Le: this.b.location.href,
                            og: this.b.navigator.userAgent,
                            referrer: this.b.document.referrer,
                            screen: {width: this.b.screen.width, height: this.b.screen.height},
                            location: {host: i, protocol: o, path: r},
                            wa: this.D.hf(),
                            Tc: e.Lh()
                        }, "page", 0)
                    }, e
                }(Yp), Rv = ["addRule", "removeRule", "insertRule", "deleteRule"], Mv = [[function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).Pa = {}, e.Jb = {}, e.Me = 0, e.Fc = e.J.F(e.Fc, "a"), e.jb = e.J.F(e.jb, "sr"), e.Gc = e.J.F(e.Gc, "r"), e.ca = e.J.F(e.ca, "d"), e
                    }

                    return Oo(e, t), e.prototype.start = function () {
                        var t = this.D.ja();
                        t.C("style", "NA:", this.Fc), t.C("style", "NR:", this.Gc), this.ca()
                    }, e.prototype.stop = function () {
                        var e = this;
                        t.prototype.stop.call(this);
                        var n = this.D.ja();
                        n.da("style", "NA:", this.Fc), n.da("style", "NR:", this.Gc), this.ca(), Fi(this.b, this.Me), _u((function (t) {
                            e.Pa[t].sheet && e.Rf(e.Pa[t].sheet)
                        }), hu(this.Pa)), this.Pa = {}
                    }, e.prototype.ca = function () {
                        var t = this;
                        _u((function (e) {
                            var n = e[0];
                            if ((e = e[1]).length) {
                                for (var r = [], i = e[0].K, o = [], a = 0; a < e.length; a += 1) {
                                    var u = e[a], c = u.K;
                                    delete u.K, c <= i + 50 ? r.push(u) : (o.push(r), i = c, r = [u])
                                }
                                r.length && o.push(r), o.length && _u((function (e) {
                                    t.D.T("event", {target: parseInt(n, 10), ya: e}, "stylechange", i)
                                }), o), delete t.Jb[n]
                            }
                        }), fu(this.Jb)), this.Me = Sr(this.b, this.ca, 100)
                    }, e.prototype.jb = function (t, e, n, r, i) {
                        void 0 === r && (r = ""), void 0 === i && (i = -1), this.Jb[t] || (this.Jb[t] = []), this.Jb[t].push({
                            Wd: e,
                            style: r,
                            index: i,
                            K: n
                        })
                    }, e.prototype.yi = function (t, e) {
                        var n = this, r = t.addRule, i = t.removeRule, o = t.insertRule, a = t.deleteRule;
                        vo(r) && (t.addRule = function (i, o, a) {
                            return n.jb(e, "a", n.D.K(), i + "{" + o + "}", a), r.call(t, i, o, a)
                        }), vo(i) && (t.removeRule = function (r) {
                            return n.jb(e, "r", n.D.K(), "", r), i.call(t, r)
                        }), vo(o) && (t.insertRule = function (r, i) {
                            return n.jb(e, "a", n.D.K(), r, i), o.call(t, r, i)
                        }), vo(a) && (t.deleteRule = function (r) {
                            return n.jb(e, "r", n.D.K(), "", r), a.call(t, r)
                        })
                    }, e.prototype.Rf = function (t) {
                        var e = this;
                        _u((function (n) {
                            var r = e.b.CSSStyleSheet.prototype[n];
                            vo(r) && (t[n] = tu(r, t))
                        }), Rv)
                    }, e.prototype.lh = function (t) {
                        try {
                            return t.cssRules || t.rules
                        } catch (t) {
                            return null
                        }
                    }, e.prototype.Fc = function (t) {
                        var e = t.data;
                        if (t = e.id, (e = e.node).sheet && !e.getAttribute("src") && !e.innerText) {
                            var n = e.sheet, r = this.lh(n);
                            if (r && r.length) {
                                for (var i = [], o = 0; o < r.length; o += 1) i.push({
                                    style: r[o].cssText,
                                    index: o,
                                    Wd: "a"
                                });
                                this.D.T("event", {ya: i, target: t}, "stylechange")
                            }
                            this.yi(n, t), this.Pa[t] = e
                        }
                    }, e.prototype.Gc = function (t) {
                        t = t.data.id;
                        var e = this.Pa[t];
                        e && (delete this.Pa[t], e.sheet && this.Rf(e.sheet))
                    }, e
                }(Yp), "ss"], [Qp, "in"], [Jp, "mu"], [tv, "r"], [nv, "sc"], [iv, "mo"], [av, "f"], [fv, "se"], [lv, "wf"], [pv, "t"], [vv, "src"], [mv, "z"], [Av, "ks"]];
            Mv.push([kv, "if"]), Mv.push([_v, "pa"]);
            var Nv, Iv = zi((function (t) {
                    var e = t.document;
                    return {
                        Ad: function () {
                            if (e.scrollingElement) return e.scrollingElement;
                            var t = 0 === e.compatMode.indexOf("CSS1") ? e.documentElement : e.body;
                            return io(e, "documentElement.scrollHeight") >= io(e, "body.scrollHeight") ? t : null
                        }, Gh: function () {
                            var e = t.screen;
                            return e && io(e, Eu(co(e, io), ["orientation", "mozOrientation", "msOrientation"]) + ".angle") || 0
                        }, Rj: co(t, Zu), rf: co(t, Yu), Qj: co(t, Fu)
                    }
                })), Dv = function () {
                    function t(t, e) {
                        var n = this;
                        this.xb = 0, this.Xb = [], this.wb = null, this.ma = this.Lb = this.eg = !1, this.wa = 0, this.Hh = function () {
                            return n.page
                        }, this.yd = function () {
                            return n.xb
                        }, this.hf = function () {
                            return n.wa
                        }, this.Eh = function () {
                            return n.Ua
                        }, this.gf = function () {
                            return n.wb
                        }, this.ja = function () {
                            return n.Fd
                        }, this.K = function () {
                            return n.xe ? n.b.Math.max(n.xe(ur) - n.wa, 0) : 0
                        }, this.jc = function () {
                            return n.options
                        }, this.Xa = function () {
                            return n.Og
                        }, this.T = function (t, e, r, i) {
                            void 0 === i && (i = n.K()), t = n.Dh(t, e, r, i), n.ca(t)
                        }, this.Dh = function (t, e, r, i) {
                            return void 0 === i && (i = n.K()), {type: t, data: e, K: i, L: n.xb, event: r}
                        }, this.ca = function (t) {
                            t = eo(t) ? t : [t], n.eg && !n.Lb ? n.ma ? (t = ku((function (t) {
                                return t.L ? t : lu(t, {L: n.xb})
                            }), t), n.gf().Xf(t)) : (t = ku(A, t), n.pe(t)) : n.Xb = n.Xb.concat(t)
                        }, this.b = t;
                        var r = N(t, this, "R");
                        this.ue = r.F(this.ue, "s"), this.ca = r.F(this.ca, "sd"), (r = mu(t)).l("wv2e") && Ai(), r.o("wv2e", !0), this.options = e, this.Ua = Oc(t), this.Fd = new $p(this.b, e), this.Og = Iv(t), this.Pe = ku((function (e) {
                            return new e[0](t, n, e[1])
                        }), Mv), this.Wh(), this.page = function (t) {
                            return {
                                zh: function () {
                                    var e = t.document.querySelector("base[href]");
                                    return e ? e.getAttribute("href") : null
                                }, Bh: function () {
                                    if (t.document.doctype) {
                                        var e = lu({name: "html", publicId: "", systemId: ""}, t.document.doctype),
                                            n = e.publicId, r = e.systemId;
                                        return "<!DOCTYPE " + Ya("", [e.name, n ? ' PUBLIC "' + n + '"' : "", !n && r ? " SYSTEM" : "", r ? ' "' + r + '"' : ""]) + ">"
                                    }
                                    return null
                                }, Lh: function () {
                                    try {
                                        if (!t.sessionStorage) return null;
                                        var e = t.sessionStorage.getItem("__vw_tab_guid"), n = !1;
                                        try {
                                            var r = t.opener ? t.opener.sessionStorage : null;
                                            n = !!r && e === r.getItem("__vw_tab_guid")
                                        } catch (t) {
                                            n = !0
                                        }
                                        return e && !n || (e = k(), t.sessionStorage.setItem("__vw_tab_guid", e)), e
                                    } catch (t) {
                                        return null
                                    }
                                }
                            }
                        }(this.b), this.ue()
                    }

                    return t.prototype.start = function (t) {
                        this.eg = !0, this.pe = t, this.Uf()
                    }, t.prototype.stop = function () {
                        Wp(this.b) && (_u((function (t) {
                            return t.stop()
                        }), this.Pe), this.Fd.stop(), this.wb && this.wb.stop(), this.ma || this.T("event", {}, "eof"))
                    }, t.prototype.Ub = function (e, n) {
                        var r = new t(e, lu({}, this.options, {L: n}));
                        return r.start(Po), r
                    }, t.prototype.Wh = function () {
                        var t = this;
                        this.ma = !!this.options.L, this.xb = this.options.L || 0, this.Lb = !this.ma;
                        var e = this.options.ng || [];
                        e.push(_i(this.b).host), this.wb = function (t, e, n) {
                            var r = kr(t), i = Oc(t), o = Zu(t), a = e.yd(),
                                u = !io(t, "postMessage") || o && !io(t, "parent.postMessage"), c = co(r, Ki);
                            if (u) {
                                if (!a) return Sr(t, tu(r.V, r, "i", {ma: !1}), 10), {xd: c, Xf: Po, stop: Po};
                                ji(Ti())
                            }
                            if (r.C("sr", (function (n) {
                                var r, i = T(t, n.source);
                                i && S(t, n.source, ((r = {}).type = "н", r.frameId = e.ja().X(i), r))
                            })), r.C("sd", (function (e) {
                                var n = e.data;
                                e = e.source, (t === e || T(t, e)) && r.V("sdr", {data: n.data, L: n.frameId})
                            })), o && !a) {
                                var s = !1, f = 0, h = function () {
                                    var e;
                                    S(t, t.parent, ((e = {}).type = "sr", e)), f = Sr(t, h, 100, "if.i")
                                };
                                h();
                                var l = function (e) {
                                    r.da("н", l), Fi(t, f);
                                    var i = Wo(t, e.origin).host;
                                    s || e.source !== t.parent || !e.data.frameId || "about:blank" !== _i(t).host && !Cu(i, n) || (s = !0, r.V("i", {
                                        L: e.data.frameId,
                                        ma: !0
                                    }))
                                };
                                r.C("н", l), Sr(t, (function () {
                                    r.da("н", l), Fi(t, f), s || (s = !0, r.V("i", {ma: !1}))
                                }), 2e3, "if.r")
                            }
                            return {
                                xd: c, Xf: function (n) {
                                    var r;
                                    return S(t, t.parent, ((r = {}).frameId = e.yd(), r.data = n, r.type = "sd", r))
                                }, stop: i = i.C(t, ["message"], (function (e) {
                                    var n = Yo(t, e.data);
                                    n && n.type && Cu(n.type, Tv) && r.V(n.type, {
                                        data: n,
                                        source: e.source,
                                        origin: e.origin
                                    })
                                }))
                            }
                        }(this.b, this, e), e = this.wb.xd(), Zu(this.b) ? this.Lb && e.C("i", (function (e) {
                            t.ma = e.ma, t.Lb = !1, e.L && (t.xb = e.L), t.Uf()
                        })) : this.Lb = this.ma = !1
                    }, t.prototype.Uf = function () {
                        var t = this.Xb.splice(0, this.Xb.length);
                        this.ca(t)
                    }, t.prototype.ue = function () {
                        this.xe = cr(this.b), this.wa = this.xe(ur), _u((function (t) {
                            t.start()
                        }), this.Pe), this.Fd.start()
                    }, t
                }(),
                Pv = ((Nv = {}).mousemove = 0, Nv.mouseup = 1, Nv.mousedown = 2, Nv.click = 3, Nv.scroll = 4, Nv.windowblur = 5, Nv.windowfocus = 6, Nv.focus = 7, Nv.blur = 8, Nv.eof = 9, Nv.selection = 10, Nv.change = 11, Nv.input = 12, Nv.touchmove = 13, Nv.touchstart = 14, Nv.touchend = 15, Nv.touchcancel = 16, Nv.touchforcechange = 17, Nv.canvasMethod = 18, Nv.canvasProperty = 19, Nv.zoom = 20, Nv.resize = 21, Nv.mediaMethod = 22, Nv.mediaProperty = 23, Nv.keystroke = 24, Nv.deviceRotation = 25, Nv.fatalError = 26, Nv.hashchange = 27, Nv.stylechange = 28, Nv),
                Ov = yo((function (t, e) {
                    var n;
                    return (n = {})[Jd(t)] = e, n
                })), Lv = function () {
                    function t(t) {
                        var e;
                        this.isSync = !1, this.Ta = [], this.Ye = [], this.b = t, this.zb = ((e = {}).event = tu(this.jh, this), e.page = Ov({page: 1}), e.mutation = Ov({ji: 1}), e.activity = Ov({Ig: 1}), e), this.Ye = [[["scroll"], {Li: 1}], [["selection"], {Mi: 1}], [["change", "input"], {Ug: 1}], [["keystroke"], {ci: 1}, {wc: 1}], [["zoom"], {rj: 1}], [["resize"], {Gi: 1}], [["windowfocus", "windowblur", "focus", "blur", "eof"], {oj: 1}], [["mousemove", "mouseup", "mousedown", "click"], {hi: 1}], [["deviceRotation"], {fh: 1}], [["fatalError"], {nh: 1}], [["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], {Xi: 1}, {touches: 1}, {touches: 1}], [["hashchange"], {Sh: 1}], [["stylechange"], {Ri: 1}, {ya: 1}, {ya: 1}]]
                    }

                    return t.prototype.jh = function (t) {
                        var e, n, r = t.type, i = Eu(no(ou("0"), co(r, Cu)), this.Ye);
                        i || ji(Yc("vem." + r)), "eof" === r && (this.isSync = !0, _u(Ja(Gn), this.Ta));
                        var o = i[1], a = i[2];
                        i = i[3];
                        var u = t.Y;
                        return {
                            event: (e = {
                                type: Pv[r],
                                target: t.target,
                                L: t.L
                            }, e[Jd(o)] = a ? (n = {}, n[Jd(a)] = i ? u[Jd(i)] : u, n) : u, e)
                        }
                    }, t.prototype.Ca = function (t, e) {
                        var n = this;
                        void 0 === e && (e = !1);
                        var r = Xn(t, (function (t) {
                            var e = !Za(t.partNum);
                            return {
                                data: e ? void 0 : n.zb[t.type](t.data),
                                Xg: e ? t.data : void 0,
                                page: t.partNum,
                                end: t.end,
                                K: t.K
                            }
                        })), i = this.isSync || e ? 1 / 0 : 10, o = [r = Hn(this.b, r, i)];
                        return this.Ta.push(r), r(rf((function (t) {
                            return t = Ht(n.b, qt, {buffer: t}), t = Hn(n.b, t, i, Yn), o.push(t), n.Ta.push(t), t
                        })))(rf((function (t) {
                            return t = Gt(n.b, t.slice(-4)), t = Hn(n.b, t, i, Yn), o.push(t), n.Ta.push(t), t
                        })))(nf((function (t) {
                            return t = t[t.length - 1], _u((function (t) {
                                t = Du(n.b)(t, n.Ta), n.Ta.splice(t, 1)
                            }), o), t
                        })))
                    }, t.prototype.Da = function (t) {
                        return Ht(this.b, zt, this.zb[t.type](t.data))(qn(Po))
                    }, t.prototype.Ka = function (t) {
                        return t[0]
                    }, t.prototype.Sc = function (t, e) {
                        for (var n = Gt(this.b, t)(qn(Po)), r = Math.ceil(n.length / e), i = [], o = 0; o < e; o += 1) i.push(n.slice(o * r, r * (o + 1)));
                        return i
                    }, t.prototype.isEnabled = function () {
                        return Ft(this.b)
                    }, t
                }(), jv = Rr("w2", (function (t, e) {
                    var n = mu(t), r = mc(e);
                    if (e.Ra && !ju(t) && t.MutationObserver && Io("Element", t.Element)) {
                        Io("MutationObserver", t.MutationObserver) || ol(t).warn("MutationObserver is overriden, webvisor is not guaranteed to work in this environment");
                        var i = Ja((function (n, r) {
                            gn(t, e, r).catch(n)
                        }));
                        !function (t) {
                            var e = [], n = 0;
                            return Ja((function (r, i) {
                                _u((function (o, a) {
                                    o(ef(r, (function (o) {
                                        try {
                                            e[a] = o, (n += 1) === t.length && i(e)
                                        } catch (t) {
                                            r(t)
                                        }
                                    })))
                                }), t)
                            }))
                        }([function (t, e) {
                            function n(i) {
                                io(e, r) ? i() : Sr(t, co(i, n), 100)
                            }

                            void 0 === e && (e = t);
                            var r = (e.nodeType ? "contentWindow." : "") + "document.body";
                            return Ja((function (t, e) {
                                n(e)
                            }))
                        }(t)(rf(so([t, e], C)))(nf((function (e) {
                            return new Dv(t, e)
                        }))), i])(ef(Mr(t, "wv2.R.c"), (function (i) {
                            function o() {
                                u || (u = !0, a && a.stop())
                            }

                            var a = i[0];
                            i = i[1];
                            var u = !1, c = n.l("wv2Counter");
                            if (!st(t, i) || c) o(); else if (Oc(t).C(t, ["beforeunload", "unload"], o), n.o("wv2Counter", r), n.o("stopRecorder", o), (i = [new hl(t)]).unshift(new Lv(t)), i = Eu((function (t) {
                                return t.isEnabled()
                            }), i)) {
                                c = x(t, e, !(i instanceof hl), (function () {
                                    return {}
                                }));
                                var s = bl.wd(r, "m", co("m", c), i, t), f = bl.wd(r, "e", co("e", c), i, t);
                                c = (i = function () {
                                    var t = iu((function (t, e) {
                                        return t[e[0]] = {ed: 0, Qg: 1 / e[1]}, t
                                    }), {}, [["blur", .0034], ["change", .0155], ["click", .01095], ["deviceRotation", 2e-4], ["focus", .0061], ["mousemove", .5132], ["scroll", .4795], ["selection", .0109], ["touchcancel", 2e-4], ["touchend", .0265], ["touchforcechange", .0233], ["touchmove", .1442], ["touchstart", .027], ["zoom", .0014]]);
                                    return {
                                        Kg: function (e) {
                                            if (e.length) return {
                                                type: "activity", data: iu((function (e, n) {
                                                    var r = t[n];
                                                    return Math.round(e + r.ed * r.Qg)
                                                }), 0, hu(t))
                                            }
                                        }, ti: function (e) {
                                            e && (e = t[e.data.type]) && (e.ed += 1)
                                        }
                                    }
                                }()).ti, f.C("ag", i.Kg), f.C("p", c);
                                var h = Mu((function (t) {
                                    "eof" === io(t, "data.type") ? (f.push(t), s.push(t), f.flush(), s.flush()) : ("event" === t.type ? f : s).push(t)
                                }));
                                Sr(t, o, 864e5), Bn(t, (function () {
                                    a.start(h)
                                }))
                            }
                        })))
                    }
                })), Bv = yo((function (t, e) {
                    0 === parseFloat(io(e, "settings.c_recp")) && (t.Od.o("ymoo" + t.ld, t.jg(ar)), t.kd && t.kd.destruct && t.kd.destruct())
                })), Fv = Rr("wsa", (function (t, e) {
                    var n = {ld: mc(e), kd: fn(t, e), jg: Ws(t), Od: qs(t)}, r = n.jg(ar);
                    if (n.Od.Hd) return !1;
                    var i = n.Od.l("ymoo" + n.ld);
                    return !!(i && 30 > r - i) || (gn(t, e, Bv(n)).catch(Mr(t, "d.f")), !1)
                })), Gv = no((function (t) {
                    return t = io(t, "navigator.plugins") || [], au(t) ? no(Pi, wu(Boolean), Pu((function (t, e) {
                        return t.name > e.name ? 1 : 2
                    })), Mu(St))(t) : ""
                }), Wa(",")), Hv = function (t) {
                    var e = Zc(t);
                    if (!e) return "";
                    e = e("canvas");
                    var n = [], r = {eh: sd, mh: y}, i = r.mh;
                    r = r.eh;
                    try {
                        var o = uo("getContext", e);
                        n = ku(no(Ki, o), r)
                    } catch (t) {
                        return ""
                    }
                    return (o = Eu(Ki, n)) ? i(t, {canvas: e, Tg: o}) : ""
                }, Uv = ["name", "lang", "localService", "voiceURI", "default"], Xv = zi((function (t, e) {
                    return gn(t, e, ou("settings.form_goals"))
                }), qi), Vv = co(!0, d), zv = Rr("s.f.i", (function (t, e) {
                    var n = [];
                    Oc(t).C(t, ["click"], Mr(t, "s.f.c", so([t, e, n], l))), Oc(t).C(t, ["submit"], Mr(t, "s.f.e", no(ou("target"), so([t, e, n], Vv)))), p(t, e, "Form goal. Counter " + e.id + ". Init.")
                })), Yv = Po, qv = Xi("isp.stat", (function (t, e, n) {
                    var r, i = mc(e);
                    return i = Zs(e)[i].Kf, rl(t, "pi", e)({H: yc((r = {}, r[i] = 1, r))}, [n])
                })), Kv = Xi("isp.stat", (function (t, e, n) {
                    return new jc((function (e, r) {
                        if (function (t, e, n) {
                            var r = hs(e);
                            if (Cu(n, r.eb) || r.eb.push(n), $a(r.Wa)) {
                                if (!(n = Zc(t))) return null;
                                if (n = n("iframe"), lu(n.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                }), n.src = e, !(t = li(t))) return null;
                                t.appendChild(n), r.Wa = n
                            } else (t = io(r.Wa, "contentWindow")) && t.postMessage("frameReinit", "*");
                            return r.Wa
                        }(t, wc, "isp")) {
                            var i = function (t) {
                                ("1" === t ? e : r)(), Yv(), t = hs(wc), Cu("isp", t.eb) && (t.eb = yu(no(qa("isp"), Yi), t.eb), t.eb.length || (mi(t.Wa), t.Wa = null))
                            };
                            Yv = Oc(t).C(t, ["message"], so([t, n, i], h)), Sr(t, i, 1500)
                        } else r()
                    }))
                })), Wv = Xi("isp", (function (t, e) {
                    gn(t, e, (function (n) {
                        var r = Eu((function (t) {
                            return io(n, "settings." + t)
                        }), ["rt", "mf"]);
                        if (r && uc(t)) {
                            var i = nd(n) && !kc(t), o = mc(e), a = Zs(e);
                            if (a[o] = {Kf: r, status: i ? 3 : 4}, !i) return i = function (t, e, n) {
                                var r;
                                return t = Qs(t, e), (r = {}, r.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + t, r.rt = "https://" + t + ".mc.yandex.ru/watch/3/1", r)[n]
                            }(t, e, r), ("mf" === r ? Kv : qv)(t, e, i).then((function () {
                                a[o].status = 1
                            })).catch((function () {
                                a[o].status = 2
                            }))
                        }
                    })).catch(Mr(t, "l.isp"))
                })), Jv = /[^\d]/g, $v = /[^\d.,]/g, Zv = /[.,]$/, Qv = Rr("ep.pp", (function (t, e) {
                    if (!e) return 0;
                    t:{
                        for (var n = e.replace($v, "").replace(Zv, ""), r = "0" === n[n.length - 1], i = n.length; 0 < i && !(3 < n.length - i + 1 && r); --i) {
                            var o = n[i - 1];
                            if (Cu(o, [",", "."])) {
                                r = o;
                                break t
                            }
                        }
                        r = ""
                    }
                    return n = r ? e.split(r) : [e], r = r ? n[1] : "00", n = parseFloat(n[0].replace(Jv, "") + "." + r.replace(Jv, "")), r = Math.pow(10, 8) - .01, t.isNaN(n) ? n = 0 : (n = Math.min(n, r), n = Math.max(n, 0)), n
                })),
                tm = [[["EUR", "€"], "978"], [["USD", "У\\.Е\\.", "\\$"], "840"], [["UAH", "ГРН", "₴"], "980"], ["ТГ KZT ₸ ТҢГ TENGE ТЕНГЕ".split(" "), "398"], [["GBP", "£", "UKL"], "826"], ["RUR RUB Р РУБ ₽ P РUB PУБ PУB PYБ РYБ РУB PУБ".split(" "), "643"]],
                em = zi((function (t) {
                    return new RegExp(t.join("|"), "i")
                })), nm = Rr("ep.cp", (function (t) {
                    if (!t) return "643";
                    var e = t.replace(/\s/g, "");
                    return (t = Eu((function (t) {
                        return em(t[0]).test(e)
                    }), tm)) ? t[1] : "643"
                })), rm = Rr("ep.en", (function (t, e, n) {
                    return 0 > (n = 16 - (e = "" + 100 * e + n + (t = f(t))).length) ? "" : (n = (e = Kf("0", n) + e).slice(0, 8), e = e.slice(-8), (n = (92844 ^ +n).toString(35)) + "z" + (e = (92844 ^ +e).toString(35)))
                })), im = no(a, nm), om = Rr("ep.ctp", (function (t, e, n, r) {
                    var a = im(t, n), u = o(t, r);
                    i(t, e, a, u), Io("MutationObserver", t.MutationObserver) && new MutationObserver((function () {
                        var c = im(t, n), s = o(t, r);
                        a === c && u === s || i(t, e, a = c, u = s)
                    })).observe(t.document.body, {attributes: !0, childList: !0, subtree: !0, characterData: !0})
                })), am = Rr("ep.chp", (function (t, e, n, i, o) {
                    return n && u(t, e), i || o ? Oc(t).C(t.document, ["click"], Mr(t, "ep.chp.cl", so([t, e, i, o], r))) : Po
                })), um = Rr("ep.dec", (function (t, e) {
                    if (!e || ju(t)) return [];
                    var n = s(t, e, " ").split(" "), r = n[1], i = n[2], o = n.slice(3);
                    if (1 === (n = parseInt(n[0], 2))) n = "AT5T6ku06kEsXK3iyBRgo6lk8rCtX4Kjf0qpRe74vtAplOkkpSi8E9FDTBJlIV6szGuWawyILrLlztwl4KEqs1pNFvNdtIrYtROBN1gSGS1adp+myrzmZKoqErtCv20WyWiRlEqZQUzvV3sRa1nScmlxptwLLY7o"; else {
                        if (2 !== n) return [];
                        n = "Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA=="
                    }
                    n = function (t, e) {
                        function n() {
                            var t = f + "0", e = f + "1";
                            u[t] ? u[e] ? (f = f.slice(0, -1), --c) : (a[e] = i(8), u[e] = 1) : (a[t] = i(8), u[t] = 1)
                        }

                        function r() {
                            var t = f + "1";
                            u[f + "0"] ? u[t] ? (f = f.slice(0, -1), --c) : u[f += "1"] = 1 : u[f += "0"] = 1
                        }

                        function i(t) {
                            void 0 === t && (t = 1);
                            var e = o.slice(c, c + t);
                            return c += t, e
                        }

                        for (var o = s(t, e, ""), a = {}, u = {}, c = 1, f = ""; c < o.length - 1;) ("0" === i() ? r : n)();
                        return a
                    }(t, n), o = o.join(""), i = parseInt(r + i, 2);
                    var a = "";
                    r = "";
                    for (var u = 0; r.length < i && o[u];) n[a += o[u]] && (r += String.fromCharCode(parseInt(n[a], 2)), a = ""), u += 1;
                    for (n = "", i = 0; i < r.length;) 128 > (o = r.charCodeAt(i)) ? (n += String.fromCharCode(o), i++) : 191 < o && 224 > o ? (a = r.charCodeAt(i + 1), n += String.fromCharCode((31 & o) << 6 | 63 & a), i += 2) : (a = r.charCodeAt(i + 1), n += String.fromCharCode((15 & o) << 12 | (63 & a) << 6 | 63 & r.charCodeAt(i + 2)), i += 3);
                    return eo(r = Yo(t, n)) ? r : []
                })), cm = Rr("ep.i", (function (t, e) {
                    return Io("querySelectorAll", t.document.querySelectorAll) ? function (t, e) {
                        return gn(t, e, (function (e) {
                            var n = io(e, "settings.dr");
                            return {gh: um(t, n), isEnabled: io(e, "settings.auto_goals")}
                        }))
                    }(t, e).then((function (r) {
                        var i = r.gh, o = i[0], a = i[1], u = i[2], c = i[3], s = i[4], f = i[5], h = i[6], l = i[7],
                            d = i[8], p = i[9];
                        if (!r.isEnabled) return jc.resolve(Po);
                        var v = n(t, o), m = n(t, c), g = n(t, h), b = n(t, d), y = "" + o + a + u == "" + c + s + f;
                        return $(t).then((function () {
                            return v && om(t, e, a, u), m && !y && om(t, e, s, f), am(t, e, g || b, l, p)
                        }))
                    })) : jc.resolve(Po)
                })), sm = /[\*\.\?\(\)]/g, fm = zi((function (t, e, n) {
                    try {
                        var r = n.replace("\\s", " ").replace(sm, "");
                        ol(t).warn('Function "' + r + '" has been overriden, this may cause issues with Metrika counter')
                    } catch (t) {
                    }
                }), qi), hm = Rr("r.nn", (function (t) {
                    en(t).isEnabled && Er(t, Ha, (function (e) {
                        e.C((function (e) {
                            fm(t, e[1], e[0]), Ha.splice(100)
                        }))
                    }))
                })), lm = Rr("lt.p", Xi("lt.p", (function (t) {
                    var e;
                    if (Io("PerformanceObserver", t.PerformanceObserver)) {
                        var n = 0, r = new t.PerformanceObserver(Mr(t, "lt.o", (function (e) {
                            e && e.getEntries && (e = e.getEntries(), n = iu((function (t, e) {
                                return t + e.duration
                            }), n, e), $i(t).o("lt", n))
                        })));
                        try {
                            r.observe(((e = {}).type = "longtask", e.buffered = !0, e))
                        } catch (t) {
                            return Po
                        }
                        return function () {
                            return r.disconnect()
                        }
                    }
                    return Po
                })));
            "function" == typeof Promise && Promise.resolve();
            var dm, pm, vm, mm = /(.*[\\?&])(ysclid=[^&]+&?)(.*)/, gm = Rr("yid.e", (function (t) {
                    var e, n = _i(t), r = n.href;
                    ko(n.search, "ysclid") && (n = function (t) {
                        return t.replace(mm, (function (t, e, n, r) {
                            return "" + e + r
                        }))
                    }(r), null !== (e = null == t ? void 0 : t.history) && void 0 !== e && e.replaceState && Io("replaceState", t.history.replaceState) && t.history.replaceState(void 0, "", n))
                })), bm = Rr("fbq.o", (function (t, e, n) {
                    var r = io(t, "fbq");
                    if (r && r.callMethod) {
                        var i = function () {
                            var t = Eo(arguments), n = r.apply(void 0, t);
                            return e(t), n
                        };
                        lu(i, r), n && _u(e, n), t.fbq = i
                    } else var o = Sr(t, so([t, e, Lo(Pi(r && r.queue))], bm), 1e3, "fbq.d");
                    return tu(Fi, null, t, o)
                })),
                ym = ((dm = {}).add_to_wishlist = "add-to-whishlist", dm.begin_checkout = "begin-checkout", dm.generate_lead = "lead", dm.add_payment_info = "add-payment-info", dm),
                wm = ((pm = {}).AddToCart = "add-to-cart", pm.Lead = "lead", pm.InitiateCheckout = "begin-checkout", pm.Purchase = "purchase", pm.CompleteRegistration = "register", pm.Contact = "contact", pm.AddPaymentInfo = "add-payment-info", pm.AddToWishlist = "add-to-whishlist", pm.Subscribe = "subscribe", pm),
                Em = ((vm = {})[1] = ym, vm[2] = ym, vm[3] = ym, vm[0] = wm, vm), Cm = yo((function (t, e) {
                    if (e) {
                        var n = e.version, r = io(Em, n + "." + e.ac);
                        r && t("ym-" + r + "-" + n)
                    }
                })), xm = yo((function (t, e) {
                    var n = io(e, "ecommerce"), r = io(e, "event") || "";
                    (n = n && r && {
                        version: "3",
                        ac: r
                    }) || (n = (eo(e) || au(e)) && (r = (n = Eo(e))[1], "event" === n[0] && r) ? {
                        version: "2",
                        ac: r
                    } : void 0), n || (n = (n = io(e, "ecommerce")) && {version: "1", ac: Ya(",", hu(n))}), n && t(n)
                })), Am = Rr("ag.e", (function (t, n) {
                    var r = [], i = Mr(t, "ag.s", so([Vi, r], _u));
                    return gn(t, n, (function (i) {
                        if (io(i, "settings.auto_goals") && fn(t, n) && (i = Kl(t, n, "autogoal"))) {
                            i = Cm(i);
                            var o = xm(i);
                            i = so([t, i], e), r.push(bm(t, i)), r.push(dp(t, "dataLayer", (function (t) {
                                t.C(o)
                            })))
                        }
                    })), i
                })), Tm = mu(window);
            Tm.Ea("hitParam", {}), Tm.Ea("lastReferrer", window.location.href), Tm.Ea("getCounters", Ll(window)), Ah.push(np);
            var Sm = function (t, e, n, r) {
                var i = this;
                return Mr(window, "c.i", (function () {
                    function o(t, e, n) {
                        i[e] = function (t, e, n, r, i) {
                            return n.length && i ? so(iu((function (i, o, a) {
                                return n[a] ? i.concat(so([t, e, r], o)) : i
                            }), [], n), no)()(i) : i
                        }(u, c, n || d, e, t)
                    }

                    function a(t) {
                        return Pa(u, c, 0, t)(u, c)
                    }

                    (!window || isNaN(t) && !t) && Ai();
                    var u = window, c = function (t, e, n, r, i) {
                        var o = "object" == typeof t ? t : {id: t, aa: r, Sb: i, R: n};
                        return Mi(t = iu((function (t, e) {
                            var n = e[1], r = n.mi;
                            return n = o[n.Gf], t[e[0]] = r ? r(n) : n, t
                        }), {}, fu(e)), t.R || {}), t
                    }(t, pc, e, n, r);
                    c.id || tn(u, "Invalid Metrika id: " + c.id);
                    var s = mc(c), f = Tm.l("counters", {}), h = [], l = [], d = [ja, Pa, La];
                    if (d.unshift(Oa), f[s]) return tn(u, "Duplicate counter " + s + " initialization"), f[s];
                    var p = !1, y = Tm.l("hitParam", {});
                    y[s] && (p = !(!gc(c.aa) || f[s])), y[s] = 1, i._webvisor = c.Ra || !1, f[s] = i, Tm.o("counters", f), Tm.Ea("counter", i), y = jl(window, c), h.push(y), vd(window), Fv(window, c) && delete f[s], a(Xp), Hp(u, [Hv, Gv, E, Mt, g, Tt, id, Rt, m, v, b]), l.push(co(Ff, a)), a(al), l.push(co(I, a)), a(Lp), a(jp), o(cl(u, c), "hit"), o(rp(u, c), "params"), s = a(Bl), h.push(io(s, Jd({unsubscribe: 1}))), i.trackHash = Pa(u, c, 0, io(s, Jd({aj: 1}))), o(Kl(u, c), "reachGoal"), o(ip(u, c), "experiments"), a(Fp), l.push(co(Il, a)), p || l.push(co(Kd, a)), h.push(Am(u, c)), p = a(Vl), h.push(io(p, Jd({pd: 1}))), o(io(p, Jd({ni: 1})), "notBounce"), o(io(p, Jd({Nb: 1})), "accurateTrackBounce"), a(op), p = a(Jl), h.push(io(p, Jd({pd: 1}))), o(io(p, Jd({kh: 1})), "extLink"), o(io(p, Jd({Jg: 1})), "addFileExtension"), o(io(p, Jd({file: 1})), "file"), o(io(p, Jd({Xc: 1})), "trackLinks"), h.push(pp(u, c)), h.push(vp(u)), o(gp(u, c), "ecommerceAdd"), o(bp(u, c), "ecommerceRemove"), o(yp(u, c), "ecommerceDetail"), o(wp(u, c), "ecommercePurchase"), o((p = a(Bp)) || Po, "userParams"), o(Gp(u, c, h), "destruct", [ja, La]), a(Tf), a(rd), o((p = a(Vp)) || Po, "setUserID"), i.getClientID = a(zp) || Po, h.push(a(pd)), o($d(u, c), "clickmap"), (p = a(cm)) && p.then(uo("push", h)), a(Wd), o(Zd(u, c), "enableAll"), a(zv), a(Wv), a(Qd), a(tp), a(gm), a(lm), l.push(co(Ip, a)), (p = a(ep)) && p.then(uo("push", h)), Bn(u, so([u, l, Vi, 1, "a.i"], Fn)), a(nt), a(jv), hm(u)
                }))()
            };
            if (function (t) {
                var e = mu(t);
                e.l("i") || (e.o("i", !0), Oc(t).C(t, ["message"], co(t, O)))
            }(window), window.Ya && Sm) {
                var km = fc.Rb;
                window.Ya[km] = Sm, Yl(window);
                var _m = window.Ya[km];
                _m.informer = function (t) {
                    var e = Mr(t, "i.clch", fa);
                    return Oc(t).C(t.document, ["click"], tu(e, null, t), {passive: !1}), function (e) {
                        var n = fc.Ja, r = t.Ya[fc.Rb], i = !!r._informer;
                        r._informer = lu({domain: "informer.yandex.ru"}, e), i || Jr(t, {src: n + "//informer.yandex.ru/metrika/informer.js"})
                    }
                }(window), _m.counters = Tm.l("getCounters")
            }
            (function (t) {
                var e = io(t, "ym");
                if (e) {
                    var n = io(e, "a");
                    n || (e.a = [], n = e.a);
                    var r = sp(t);
                    Er(t, n, (function (t) {
                        t.C(r)
                    }), !0)
                }
            })(window), t.sj = 1, t.tj = 10
        }({})
    } catch (t) {
    }
}).call(this);