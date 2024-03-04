"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[273], {
    7458: function(e, n, t) {
        t.r(n),
        t.d(n, {
            GlobalContextProvider: function() {
                return a
            },
            useGlobalContext: function() {
                return l
            }
        });
        var o = t(7437)
          , r = t(2265);
        let i = (0,
        r.createContext)();
        function a(e) {
            let {children: n} = e
              , [t,a] = (0,
            r.useState)(!0);
            return (0,
            r.useEffect)(()=>{
                let e = "fancyGraphics";
                null === localStorage.getItem(e) ? localStorage.setItem(e, JSON.stringify(t)) : "true" !== localStorage.getItem(e) && a(!1)
            }
            , []),
            (0,
            o.jsx)(i.Provider, {
                value: [t, e=>{
                    localStorage.setItem("fancyGraphics", JSON.stringify(e)),
                    a(e)
                }
                ],
                children: n
            })
        }
        function l() {
            return (0,
            r.useContext)(i)
        }
    },
    790: function(e, n, t) {
        var o = t(7437);
        t(2265),
        n.Z = ()=>(0,
        o.jsx)("div", {
            className: "w-full text-sm text-center px-4 py-2",
            children: "2022-2023 \xa0 ― \xa0 Developed by @kishimisu"
        })
    },
    1104: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return g
            }
        });
        var o = t(7437)
          , r = t(1396)
          , i = t.n(r)
          , a = t(2265)
          , l = t(7218)
          , c = t(3244)
          , u = t(5012)
          , s = t(2815)
          , f = t(9123)
          , d = t(7458);
        t(6691);
        var m = t(4686);
        s.p8.registerPlugin(m.i);
        var g = e=>{
            let {className: n, showPowerSaving: t=!0, currentPath: r="home"} = e
              , m = (0,
            a.useRef)()
              , [g,h] = (0,
            a.useState)([0, 0])
              , [x,v] = (0,
            d.useGlobalContext)()
              , p = "home" == r;
            (0,
            a.useEffect)(()=>{
                let e = s.p8.context(()=>{
                    p && s.p8.fromTo(m.current.children, {
                        opacity: 0,
                        y: -40
                    }, {
                        opacity: 1,
                        y: 0,
                        stagger: .15,
                        delay: 1.5,
                        ease: f.Aq.easeOut
                    })
                }
                );
                return ()=>{
                    e.revert()
                }
            }
            , []);
            let R = "w-full text-lg text-white font-bold pl-2  " + (p ? "opacity-0" : "");
            return (0,
            o.jsx)("div", {
                className: (0,
                u.cn)(n, "absolute flex justify-center 2xl:fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-10"),
                children: (0,
                o.jsx)("div", {
                    className: "relative w-full max-w-screen-2xl font-bold",
                    children: (0,
                    o.jsxs)("div", {
                        className: "absolute top-0 right-0 flex flex-col py-6 lg:py-12 pr-6 md:pr-12 pointer-events-auto",
                        ref: m,
                        children: [(0,
                        o.jsx)(i(), {
                            href: "/",
                            className: R,
                            children: (0,
                            o.jsx)(c.Z, {
                                className: (0,
                                u.cn)("px-2", p ? "border-y italic" : ""),
                                children: "HOME"
                            })
                        }), (0,
                        o.jsx)(i(), {
                            href: "/collection",
                            className: R,
                            children: (0,
                            o.jsx)(c.Z, {
                                className: (0,
                                u.cn)("px-2", "collection" == r ? "border-y italic" : ""),
                                children: "COLLECTION"
                            })
                        }), p ? (0,
                        o.jsx)(l.Z, {
                            href: "#tutorials",
                            className: R,
                            children: (0,
                            o.jsx)(c.Z, {
                                className: "px-2",
                                children: "TUTORIALS"
                            })
                        }) : (0,
                        o.jsx)(i(), {
                            href: "/#tutorials",
                            className: R,
                            children: (0,
                            o.jsx)(c.Z, {
                                className: "px-2",
                                children: "TUTORIALS"
                            })
                        }), p ? (0,
                        o.jsx)(l.Z, {
                            href: "#contact",
                            className: R,
                            children: (0,
                            o.jsx)(c.Z, {
                                className: "px-2",
                                children: "CONTACT"
                            })
                        }) : (0,
                        o.jsx)(i(), {
                            href: "/#contact",
                            className: R,
                            children: (0,
                            o.jsx)(c.Z, {
                                className: "px-2",
                                children: "CONTACT"
                            })
                        }), t && (0,
                        o.jsxs)("div", {
                            className: (0,
                            u.cn)("flex text-xs font-normal mt-6 pl-4", p ? "opacity-0" : ""),
                            children: [(0,
                            o.jsx)("span", {
                                className: "",
                                children: "POWER SAVING:"
                            }), (0,
                            o.jsxs)("label", {
                                className: "relative inline-flex items-center ml-2 cursor-pointer",
                                children: [(0,
                                o.jsx)("input", {
                                    type: "checkbox",
                                    checked: !x,
                                    className: "sr-only peer",
                                    onChange: e=>v(!e.target.checked)
                                }), (0,
                                o.jsx)("div", {
                                    className: "w-7 h-4 bg-gray-200 rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                                })]
                            })]
                        })]
                    })
                })
            })
        }
    },
    3244: function(e, n, t) {
        var o = t(7437)
          , r = t(5012);
        t(2265),
        n.Z = e=>{
            let {children: n, className: t} = e;
            return (0,
            o.jsxs)("div", {
                className: (0,
                r.cn)("relative group", t),
                children: [n, (0,
                o.jsx)("div", {
                    className: "absolute top-0 left-0 bottom-0 right-[100%] group-hover:right-0 bg-white mix-blend-difference duration-200"
                })]
            })
        }
    },
    7218: function(e, n, t) {
        var o = t(7437)
          , r = t(1396)
          , i = t.n(r);
        t(2265),
        n.Z = e=>{
            let {children: n, href: t, className: r} = e;
            return (0,
            o.jsx)(i(), {
                href: t,
                className: r,
                onClick: e=>{
                    e.preventDefault();
                    let n = e.currentTarget.href
                      , t = n.replace(/.*\#/, "")
                      , o = document.getElementById(t);
                    window.scrollTo({
                        top: null == o ? void 0 : o.getBoundingClientRect().top,
                        behavior: "smooth"
                    })
                }
                ,
                children: n
            })
        }
    },
    97: function(e, n, t) {
        t.d(n, {
            w: function() {
                return r
            }
        });
        var o = t(5012);
        function r(e, n, t, r) {
            let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "N/A"
              , a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "N/A"
              , l = {
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                browserName: function() {
                    let e = navigator.userAgent;
                    return e.includes("Chrome") ? "Chrome" : e.includes("Firefox") ? "Firefox" : e.includes("Edge") ? "Edge" : e.includes("Safari") ? "Safari" : "Unknown"
                }(),
                browserVersion: navigator.appVersion,
                operatingSystem: navigator.platform,
                gpuInfo: function() {
                    let e = document.createElement("canvas")
                      , n = e.getContext("webgl") || e.getContext("experimental-webgl");
                    if (n) {
                        let e = n.getExtension("WEBGL_debug_renderer_info");
                        if (e) {
                            let t = n.getParameter(e.UNMASKED_VENDOR_WEBGL)
                              , o = n.getParameter(e.UNMASKED_RENDERER_WEBGL);
                            return "".concat(t, " - ").concat(o)
                        }
                    }
                    return "GPU information not available"
                }(),
                screenResolution: "".concat(window.screen.width, "x").concat(window.screen.height),
                windowSize: "".concat(window.innerWidth, "x").concat(window.innerHeight),
                gl: null != n,
                glVersion: t,
                program: null != r,
                source: null != i,
                sourceES1: null != a
            };
            (0,
            o.oc)(e, l)
        }
    },
    5012: function(e, n, t) {
        t.d(n, {
            Xy: function() {
                return c
            },
            a2: function() {
                return f
            },
            cn: function() {
                return o
            },
            oc: function() {
                return a
            },
            p6: function() {
                return s
            },
            pc: function() {
                return l
            },
            pe: function() {
                return r
            },
            sC: function() {
                return i
            },
            tq: function() {
                return u
            }
        });
        let o = function() {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
                n[t] = arguments[t];
            return n.join(" ")
        };
        function r(e) {
            let n = e.indexOf("<?");
            if (-1 === n)
                return e;
            let t = n + 2 + e.slice(n + 2).indexOf("<?");
            return e.slice(0, n) + atob(e.slice(n + 2, t)).split("").map((e,n)=>String.fromCharCode(e.charCodeAt() - Math.PI.toString().replace(".", "").split("").map(e=>10 * Number(e))[n % Math.PI.toString().replace(".", "").split("").map(e=>10 * Number(e)).length])).join("") + e.slice(t + 2)
        }
        function i(e, n) {
            return -1 == e.indexOf("<shader version 2>") ? e : e.replace("<shader version 2>", "\n#define vUv (".concat(2 === n ? "_fragCoord" : "v_texCoord", ".xy / iResolution.xy)\n#define color O\n// #define uTime iTime\n#define uAspect iAspect\n#define uResolution iResolution.xy")).replace("in vec2 vUv;", "").replace("out vec4 color;", "").replace("main()", "mainImage(out vec4 O, vec2 F)")
        }
        function a(e, n) {
            window.gtag && window.gtag("event", e, n)
        }
        function l(e, n) {
            let[t,o] = e.split("/").map(Number)
              , r = 2e3
              , i = 2e3;
            return t > o ? r *= t / o : t < o && (i *= o / t),
            r = Math.round(r),
            i = Math.round(i),
            n && ([r,i] = [i, r]),
            {
                width: r,
                height: i
            }
        }
        function c(e) {
            return [e.slice(0, 2), e.slice(2, 4), e.slice(4, 6)].join("-")
        }
        function u() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(navigator.userAgent)
        }
        function s(e) {
            let[n,t,o] = e.split("-")
              , r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][parseInt(t) - 1];
            return "".concat(r, " ").concat(parseInt(o), ", 20").concat(n)
        }
        function f(e, n, t, o, r) {
            let i = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5]
              , a = (e - n) / (t - n) * (r - o) + o;
            return o > r ? i ? Math.max(r, Math.min(o, a)) : a : i ? Math.min(r, Math.max(o, a)) : a
        }
    },
    4883: function(e, n, t) {
        t.d(n, {
            HO: function() {
                return c
            },
            ap: function() {
                return u
            },
            Xm: function() {
                return l
            },
            TQ: function() {
                return f
            },
            Lo: function() {
                return s
            }
        });
        var o = t(5012);
        let r = e=>"#version 300 es\nprecision highp float;\n  \nuniform float iAspect;\nuniform float iTime;\nuniform vec4 iMouse;\nuniform vec3 iResolution;\nuniform float iScale;\nuniform float iRotation;\nuniform sampler2D iChannel0;\n\nin vec2 _fragCoord;\nout vec4 _outColor;\n" + (e.includes("mainImage") ? e + "\n" : "<?".concat(e, "<?\n")) + "\nvoid main() {\n    vec4 outColor = vec4(0);\n    vec2 inCoord = _fragCoord;\n\n    // Handle user rotation\n    float c = cos(iRotation);\n    float s = sin(iRotation);\n    vec2 hR = iResolution.xy * .5;\n    inCoord -= hR;\n    inCoord *= mat2(c, -s, s, c);\n    inCoord += hR;\n\n    mainImage(outColor, inCoord);\n\n    _outColor = vec4(outColor.rgb, 1);\n}"
          , i = e=>"precision mediump float;\nvarying vec2 v_texCoord;\nuniform float iTime;\nuniform float iScale;\nuniform float iAspect;\nuniform float iRotation;\nvarying vec3 iResolution;\nuniform vec4 iMouse;\nuniform sampler2D iChannel0;\n\nfloat round(float x) {\n    return floor(x + 0.5);\n}\n\n\n" + (e.includes("mainImage") ? e + "\n" : "<?".concat(e, "<?\n")) + "\nvoid main() {\n    vec4 color = vec4(0);\n    vec2 inCoord = v_texCoord;\n\n    // Handle user rotation\n    float c = cos(iRotation);\n    float s = sin(iRotation);\n    vec2 hR = iResolution.xy * .5;\n    inCoord -= hR;\n    inCoord *= mat2(c, -s, s, c);\n    inCoord += hR;\n\n    mainImage(color, inCoord);\n    gl_FragColor = vec4(color.rgb, 1);\n}";
        function a(e, n, t, r) {
            let i = e.createShader(t);
            return e.shaderSource(i, (0,
            o.sC)((0,
            o.pe)(r), n)),
            e.compileShader(i),
            e.getShaderParameter(i, e.COMPILE_STATUS) || e.deleteShader(i),
            i
        }
        function l(e) {
            let n = e.getContext("webgl2")
              , t = 2;
            return null == n && (t = null == (n = e.getContext("webgl")) ? 0 : 1),
            null == n ? console.log("Webgl is not supported") : console.log("Webgl version:", t),
            {
                gl: n,
                glVersion: t
            }
        }
        function c(e, n, t, o) {
            let l = a(e, n, e.VERTEX_SHADER, null != o ? o : 2 === n ? "#version 300 es\n\nuniform vec3 iResolution;\nuniform float iScale;\nout vec2 _fragCoord;\n\nvoid main() {\n    // https://www.saschawillems.de/blog/2016/08/13/vulkan-tutorial-on-rendering-a-fullscreen-quad-without-buffers/\n    _fragCoord = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);\n    \n    gl_Position = vec4(_fragCoord*2.-1., 0, 1);\n\n    // Handle user scaling\n    _fragCoord *= iScale;\n    _fragCoord += (1.-iScale)*.5;\n    _fragCoord *= iResolution.xy;\n}" : "precision mediump float;\n\nattribute vec2 a_position;\nuniform vec3 v_iResolution;\nuniform float iScale;\nvarying vec2 v_texCoord;\nvarying vec3 iResolution;\n\nvoid main() {\n    gl_Position = vec4(a_position, 0, 1);\n    v_texCoord = a_position * 0.5 + 0.5;\n\n    iResolution = v_iResolution;\n\n    // Handle user scaling\n    v_texCoord *= iScale;\n    v_texCoord += (1.-iScale)*.5;\n    v_texCoord *= iResolution.xy;\n}")
              , c = a(e, n, e.FRAGMENT_SHADER, 2 === n ? r(t) : i(t))
              , u = e.createProgram();
            if (e.attachShader(u, l),
            e.attachShader(u, c),
            e.linkProgram(u),
            !e.getProgramParameter(u, e.LINK_STATUS))
                return e.deleteProgram(u),
                null;
            if (e.useProgram(u),
            1 === n) {
                let n = e.getAttribLocation(u, "a_position")
                  , t = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1])
                  , o = e.createBuffer();
                e.bindBuffer(e.ARRAY_BUFFER, o),
                e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW),
                e.enableVertexAttribArray(n),
                e.vertexAttribPointer(n, 2, e.FLOAT, !1, 0, 0)
            }
            return u
        }
        function u(e, n) {
            let t = e.createTexture()
              , o = new Image;
            o.src = n.src,
            o.onload = ()=>{
                e.bindTexture(e.TEXTURE_2D, t),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, o),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
                e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0)
            }
        }
        function s(e, n) {
            let[t,o] = n
              , r = e.width !== t || e.height !== o;
            return r && (e.width = t,
            e.height = o),
            r
        }
        function f(e) {
            for (let n of e) {
                let e, t;
                let o = window.devicePixelRatio;
                return n.devicePixelContentBoxSize ? (e = n.devicePixelContentBoxSize[0].inlineSize,
                t = n.devicePixelContentBoxSize[0].blockSize,
                o = 1) : n.contentBoxSize ? n.contentBoxSize[0] ? (e = n.contentBoxSize[0].inlineSize,
                t = n.contentBoxSize[0].blockSize) : (e = n.contentBoxSize.inlineSize,
                t = n.contentBoxSize.blockSize) : (e = n.contentRect.width,
                t = n.contentRect.height),
                [e * o, t * o]
            }
        }
    }
}]);
