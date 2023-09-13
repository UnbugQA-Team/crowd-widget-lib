(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.id="crowd-app-35.25138372279424",e.appendChild(document.createTextNode('.crowd-widget{position:fixed}.crowd-widget iframe{z-index:1100;background-color:transparent;border:none}.crowd-widget .crowd-widget-body-frame{width:400px;background:transparent;position:fixed}@media (max-width: 500px){.crowd-widget .crowd-widget-body-frame{width:100%}}.crowd-widget .crowd-widget-body-frame,.crowd-widget .crowd-widget-launcher-frame{opacity:1;transition:visibility 0s,opacity .9s}.crowd-widget-body-frame.widget-panel-bottom-right{position:fixed;right:10px;bottom:10px}.crowd-widget-body-frame.widget-panel-bottom-left{position:fixed;left:10px;bottom:10px}.crowd-widget-body-frame.widget-panel-middle-left{position:fixed;top:50%;left:10px;transform:translateY(-50%)}.crowd-widget-body-frame.widget-panel-middle-right{position:fixed;top:50%;right:10px;transform:translateY(-50%)}.crowd-widget-launcher-frame.widget-launcher-bottom-right{position:fixed;right:0;bottom:0}.crowd-widget-launcher-frame.widget-launcher-bottom-left{position:fixed;left:0;bottom:0}.crowd-widget-launcher-frame.widget-launcher-middle-left{position:fixed;left:-2px;top:50%;transform:translate(-50%) rotate(-90deg);transform-origin:50% 0%}.crowd-widget-launcher-frame.widget-launcher-middle-right{position:fixed;top:50%;right:0;transform:rotate(-90deg) translate(50%,-50%);transform-origin:100% 50%}@media (max-width: 500px){.crowd-widget-body-frame.widget-panel-bottom-right{right:0;bottom:0}.crowd-widget-body-frame.widget-panel-bottom-left{left:0;bottom:0}.crowd-widget-body-frame.widget-panel-middle-left{left:0;transform:translateY(0);top:auto!important;bottom:0}.crowd-widget-body-frame.widget-panel-middle-right{right:0;transform:translateY(0);top:auto!important;bottom:0}}.controller-frame{position:fixed;bottom:15px;left:calc(50% - 135px);right:calc(50% - 135px);padding:0;transform-origin:50% 50%;cursor:move;background-color:#fff!important;border-radius:7px;height:60px!important;display:flex;justify-content:center;align-items:center;width:300px;min-width:300px;max-width:300px}.controller-frame div{height:30px;width:30px}.controller-frame svg{height:30px;width:30px;stroke:#000}.controller-frame iframe{position:relative;height:60px!important;width:250px!important}.crowd-recording-frame{padding:10px}.crowd-recording-frame .recording-frame{position:fixed;border:5px solid red;top:0;left:0;right:0;bottom:0;z-index:-1}body.show-crowd-player{overflow:hidden!important}.crowd-widget .record-player-frame{position:fixed;background:rgba(0,0,0,.72);width:100vw;height:100vh;padding:80px 100px;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;flex-direction:column;align-items:center;gap:20px}.crowd-widget .player-action{width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;gap:20px}.crowd-widget .player-action button{display:flex;padding:8px 16px;justify-content:center;align-items:center;gap:10px;width:130px;border-radius:4px;border:1px solid #fff}.crowd-widget .crowd-player-container{width:100%;display:flex;justify-content:center}@media (max-width: 500px){.crowd-widget .record-player-frame{padding:40px 20px}}.replayer-wrapper{position:relative}.replayer-mouse{position:absolute;width:20px;height:20px;transition:left .05s linear,top .05s linear;background-size:contain;background-position:50%;background-repeat:no-repeat;background-image:url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMwMCIgd2lkdGg9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA1MCA1MCI+PHBhdGggZD0iTTQ4LjcxIDQyLjkxTDM0LjA4IDI4LjI5IDQ0LjMzIDE4YTEgMSAwIDAwLS4zMy0xLjYxTDIuMzUgMS4wNmExIDEgMCAwMC0xLjI5IDEuMjlMMTYuMzkgNDRhMSAxIDAgMDAxLjY1LjM2bDEwLjI1LTEwLjI4IDE0LjYyIDE0LjYzYTEgMSAwIDAwMS40MSAwbDQuMzgtNC4zOGExIDEgMCAwMC4wMS0xLjQyem0tNS4wOSAzLjY3TDI5IDMyYTEgMSAwIDAwLTEuNDEgMGwtOS44NSA5Ljg1TDMuNjkgMy42OWwzOC4xMiAxNEwzMiAyNy41OEExIDEgMCAwMDMyIDI5bDE0LjU5IDE0LjYyeiIvPjwvc3ZnPg==);border-color:transparent}.replayer-mouse:after{content:"";display:inline-block;width:20px;height:20px;background:#4950f6;border-radius:100%;transform:translate(-50%,-50%);opacity:.3}.replayer-mouse.active:after{animation:click .2s ease-in-out 1}.replayer-mouse.touch-device{background-image:none;width:70px;height:70px;border-radius:100%;margin-left:-37px;margin-top:-37px;border:4px solid rgba(73,80,246,0);transition:left 0s linear,top 0s linear,border-color .2s ease-in-out}.replayer-mouse.touch-device.touch-active{border-color:#4950f6;transition:left .25s linear,top .25s linear,border-color .2s ease-in-out}.replayer-mouse.touch-device:after{opacity:0}.replayer-mouse.touch-device.active:after{animation:touch-click .2s ease-in-out 1}.replayer-mouse-tail{position:absolute;pointer-events:none}@keyframes click{0%{opacity:.3;width:20px;height:20px}50%{opacity:.5;width:10px;height:10px}}@keyframes touch-click{0%{opacity:0;width:20px;height:20px}50%{opacity:.5;width:10px;height:10px}}.rr-player{position:relative;background:white;float:left;border-radius:5px;box-shadow:0 24px 48px #11103e1f}.rr-player__frame{overflow:hidden}.replayer-wrapper{float:left;clear:both;transform-origin:top left;left:50%;top:50%}.replayer-wrapper>iframe{border:none}.rr-controller.svelte-19ke1iv.svelte-19ke1iv{width:100%;height:80px;background:#fff;display:flex;flex-direction:column;justify-content:space-around;align-items:center;border-radius:0 0 5px 5px}.rr-timeline.svelte-19ke1iv.svelte-19ke1iv{width:80%;display:flex;align-items:center}.rr-timeline__time.svelte-19ke1iv.svelte-19ke1iv{display:inline-block;width:100px;text-align:center;color:#11103e}.rr-progress.svelte-19ke1iv.svelte-19ke1iv{flex:1;height:12px;background:#eee;position:relative;border-radius:3px;cursor:pointer;box-sizing:border-box;border-top:solid 4px #fff;border-bottom:solid 4px #fff}.rr-progress.disabled.svelte-19ke1iv.svelte-19ke1iv{cursor:not-allowed}.rr-progress__step.svelte-19ke1iv.svelte-19ke1iv{height:100%;position:absolute;left:0;top:0;background:#e0e1fe}.rr-progress__handler.svelte-19ke1iv.svelte-19ke1iv{width:20px;height:20px;border-radius:10px;position:absolute;top:2px;transform:translate(-50%,-50%);background:rgb(73,80,246)}.rr-controller__btns.svelte-19ke1iv.svelte-19ke1iv{display:flex;align-items:center;justify-content:center;font-size:13px}.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv{width:32px;height:32px;display:flex;padding:0;align-items:center;justify-content:center;background:none;border:none;border-radius:50%;cursor:pointer}.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv:active{background:#e0e1fe}.rr-controller__btns.svelte-19ke1iv button.active.svelte-19ke1iv{color:#fff;background:rgb(73,80,246)}.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv:disabled{cursor:not-allowed}.switch.svelte-9brlez.svelte-9brlez.svelte-9brlez{height:1em;display:flex;align-items:center}.switch.disabled.svelte-9brlez.svelte-9brlez.svelte-9brlez{opacity:.5}.label.svelte-9brlez.svelte-9brlez.svelte-9brlez{margin:0 8px}.switch.svelte-9brlez input[type=checkbox].svelte-9brlez.svelte-9brlez{position:absolute;opacity:0}.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez{width:2em;height:1em;position:relative;cursor:pointer;display:block}.switch.disabled.svelte-9brlez label.svelte-9brlez.svelte-9brlez{cursor:not-allowed}.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez:before{content:"";position:absolute;width:2em;height:1em;left:.1em;transition:background .1s ease;background:rgba(73,80,246,.5);border-radius:50px}.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez:after{content:"";position:absolute;width:1em;height:1em;border-radius:50px;left:0;transition:all .2s ease;box-shadow:0 2px 5px #0000004d;background:#fcfff4;animation:switch-off .2s ease-out;z-index:2}.switch.svelte-9brlez input[type=checkbox].svelte-9brlez:checked+label.svelte-9brlez:before{background:rgb(73,80,246)}.switch.svelte-9brlez input[type=checkbox].svelte-9brlez:checked+label.svelte-9brlez:after{animation:switch-on .2s ease-out;left:1.1em}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var Ci = Object.defineProperty;
var vi = (t, e, n) => e in t ? Ci(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var bi = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var Se = (t, e, n) => (vi(t, typeof e != "symbol" ? e + "" : e, n), n);
var na = bi((ia, We) => {
  var ce;
  (function(t) {
    t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment";
  })(ce || (ce = {}));
  function Ai(t) {
    return t.nodeType === t.ELEMENT_NODE;
  }
  function it(t) {
    var e = t == null ? void 0 : t.host;
    return (e == null ? void 0 : e.shadowRoot) === t;
  }
  function ot(t) {
    return Object.prototype.toString.call(t) === "[object ShadowRoot]";
  }
  function Si(t) {
    return t.includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")), t;
  }
  function jt(t) {
    try {
      var e = t.rules || t.cssRules;
      return e ? Si(Array.from(e).map(hr).join("")) : null;
    } catch {
      return null;
    }
  }
  function hr(t) {
    var e = t.cssText;
    if (wi(t))
      try {
        e = jt(t.styleSheet) || e;
      } catch {
      }
    return e;
  }
  function wi(t) {
    return "styleSheet" in t;
  }
  var gr = function() {
    function t() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }
    return t.prototype.getId = function(e) {
      var n;
      if (!e)
        return -1;
      var r = (n = this.getMeta(e)) === null || n === void 0 ? void 0 : n.id;
      return r ?? -1;
    }, t.prototype.getNode = function(e) {
      return this.idNodeMap.get(e) || null;
    }, t.prototype.getIds = function() {
      return Array.from(this.idNodeMap.keys());
    }, t.prototype.getMeta = function(e) {
      return this.nodeMetaMap.get(e) || null;
    }, t.prototype.removeNodeFromMap = function(e) {
      var n = this, r = this.getId(e);
      this.idNodeMap.delete(r), e.childNodes && e.childNodes.forEach(function(i) {
        return n.removeNodeFromMap(i);
      });
    }, t.prototype.has = function(e) {
      return this.idNodeMap.has(e);
    }, t.prototype.hasNode = function(e) {
      return this.nodeMetaMap.has(e);
    }, t.prototype.add = function(e, n) {
      var r = n.id;
      this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, n);
    }, t.prototype.replace = function(e, n) {
      var r = this.getNode(e);
      if (r) {
        var i = this.nodeMetaMap.get(r);
        i && this.nodeMetaMap.set(n, i);
      }
      this.idNodeMap.set(e, n);
    }, t.prototype.reset = function() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }, t;
  }();
  function Ni() {
    return new gr();
  }
  function dn(t) {
    var e = t.maskInputOptions, n = t.tagName, r = t.type, i = t.value, o = t.maskInputFn, s = i || "";
    return (e[n.toLowerCase()] || e[r]) && (o ? s = o(s) : s = "*".repeat(s.length)), s;
  }
  var yn = "__rrweb_original__";
  function Ei(t) {
    var e = t.getContext("2d");
    if (!e)
      return !0;
    for (var n = 50, r = 0; r < t.width; r += n)
      for (var i = 0; i < t.height; i += n) {
        var o = e.getImageData, s = yn in o ? o[yn] : o, a = new Uint32Array(s.call(e, r, i, Math.min(n, t.width - r), Math.min(n, t.height - i)).data.buffer);
        if (a.some(function(l) {
          return l !== 0;
        }))
          return !1;
      }
    return !0;
  }
  var Ti = 1, Mi = new RegExp("[^a-z0-9-_:]"), dt = -2;
  function pr() {
    return Ti++;
  }
  function Ri(t) {
    if (t instanceof HTMLFormElement)
      return "form";
    var e = t.tagName.toLowerCase().trim();
    return Mi.test(e) ? "div" : e;
  }
  function ki(t) {
    return t.cssRules ? Array.from(t.cssRules).map(function(e) {
      return e.cssText || "";
    }).join("") : "";
  }
  function Di(t) {
    var e = "";
    return t.indexOf("//") > -1 ? e = t.split("/").slice(0, 3).join("/") : e = t.split("/")[0], e = e.split("?")[0], e;
  }
  var _e, In, xi = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, Fi = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/, Oi = /^(data:)([^,]*),(.*)/i;
  function Et(t, e) {
    return (t || "").replace(xi, function(n, r, i, o, s, a) {
      var l = i || s || a, c = r || o || "";
      if (!l)
        return n;
      if (!Fi.test(l) || Oi.test(l))
        return "url(".concat(c).concat(l).concat(c, ")");
      if (l[0] === "/")
        return "url(".concat(c).concat(Di(e) + l).concat(c, ")");
      var d = e.split("/"), u = l.split("/");
      d.pop();
      for (var g = 0, m = u; g < m.length; g++) {
        var h = m[g];
        h !== "." && (h === ".." ? d.pop() : d.push(h));
      }
      return "url(".concat(c).concat(d.join("/")).concat(c, ")");
    });
  }
  var Li = /^[^ \t\n\r\u000c]+/, Wi = /^[, \t\n\r\u000c]+/;
  function Bi(t, e) {
    if (e.trim() === "")
      return e;
    var n = 0;
    function r(c) {
      var d, u = c.exec(e.substring(n));
      return u ? (d = u[0], n += d.length, d) : "";
    }
    for (var i = []; r(Wi), !(n >= e.length); ) {
      var o = r(Li);
      if (o.slice(-1) === ",")
        o = Pe(t, o.substring(0, o.length - 1)), i.push(o);
      else {
        var s = "";
        o = Pe(t, o);
        for (var a = !1; ; ) {
          var l = e.charAt(n);
          if (l === "") {
            i.push((o + s).trim());
            break;
          } else if (a)
            l === ")" && (a = !1);
          else if (l === ",") {
            n += 1, i.push((o + s).trim());
            break;
          } else
            l === "(" && (a = !0);
          s += l, n += 1;
        }
      }
    }
    return i.join(", ");
  }
  function Pe(t, e) {
    if (!e || e.trim() === "")
      return e;
    var n = t.createElement("a");
    return n.href = e, n.href;
  }
  function _i(t) {
    return !!(t.tagName === "svg" || t.ownerSVGElement);
  }
  function un() {
    var t = document.createElement("a");
    return t.href = "", t.href;
  }
  function mr(t, e, n, r) {
    return n === "src" || n === "href" && r && !(e === "use" && r[0] === "#") || n === "xlink:href" && r && r[0] !== "#" || n === "background" && r && (e === "table" || e === "td" || e === "th") ? Pe(t, r) : n === "srcset" && r ? Bi(t, r) : n === "style" && r ? Et(r, un()) : e === "object" && n === "data" && r ? Pe(t, r) : r;
  }
  function Gi(t, e, n) {
    if (typeof e == "string") {
      if (t.classList.contains(e))
        return !0;
    } else
      for (var r = t.classList.length; r--; ) {
        var i = t.classList[r];
        if (e.test(i))
          return !0;
      }
    return n ? t.matches(n) : !1;
  }
  function Tt(t, e, n) {
    if (!t)
      return !1;
    if (t.nodeType !== t.ELEMENT_NODE)
      return n ? Tt(t.parentNode, e, n) : !1;
    for (var r = t.classList.length; r--; ) {
      var i = t.classList[r];
      if (e.test(i))
        return !0;
    }
    return n ? Tt(t.parentNode, e, n) : !1;
  }
  function fr(t, e, n) {
    var r = t.nodeType === t.ELEMENT_NODE ? t : t.parentElement;
    if (r === null)
      return !1;
    if (typeof e == "string") {
      if (r.classList.contains(e) || r.closest(".".concat(e)))
        return !0;
    } else if (Tt(r, e, !0))
      return !0;
    return !!(n && (r.matches(n) || r.closest(n)));
  }
  function Vi(t, e, n) {
    var r = t.contentWindow;
    if (r) {
      var i = !1, o;
      try {
        o = r.document.readyState;
      } catch {
        return;
      }
      if (o !== "complete") {
        var s = setTimeout(function() {
          i || (e(), i = !0);
        }, n);
        t.addEventListener("load", function() {
          clearTimeout(s), i = !0, e();
        });
        return;
      }
      var a = "about:blank";
      if (r.location.href !== a || t.src === a || t.src === "")
        return setTimeout(e, 0), t.addEventListener("load", e);
      t.addEventListener("load", e);
    }
  }
  function Zi(t, e, n) {
    var r = !1, i;
    try {
      i = t.sheet;
    } catch {
      return;
    }
    if (!i) {
      var o = setTimeout(function() {
        r || (e(), r = !0);
      }, n);
      t.addEventListener("load", function() {
        clearTimeout(o), r = !0, e();
      });
    }
  }
  function Ui(t, e) {
    var n = e.doc, r = e.mirror, i = e.blockClass, o = e.blockSelector, s = e.maskTextClass, a = e.maskTextSelector, l = e.inlineStylesheet, c = e.maskInputOptions, d = c === void 0 ? {} : c, u = e.maskTextFn, g = e.maskInputFn, m = e.dataURLOptions, h = m === void 0 ? {} : m, p = e.inlineImages, y = e.recordCanvas, I = e.keepIframeSrcFn, f = e.newlyAddedElement, C = f === void 0 ? !1 : f, w = Pi(n, r);
    switch (t.nodeType) {
      case t.DOCUMENT_NODE:
        return t.compatMode !== "CSS1Compat" ? {
          type: ce.Document,
          childNodes: [],
          compatMode: t.compatMode
        } : {
          type: ce.Document,
          childNodes: []
        };
      case t.DOCUMENT_TYPE_NODE:
        return {
          type: ce.DocumentType,
          name: t.name,
          publicId: t.publicId,
          systemId: t.systemId,
          rootId: w
        };
      case t.ELEMENT_NODE:
        return Yi(t, {
          doc: n,
          blockClass: i,
          blockSelector: o,
          inlineStylesheet: l,
          maskInputOptions: d,
          maskInputFn: g,
          dataURLOptions: h,
          inlineImages: p,
          recordCanvas: y,
          keepIframeSrcFn: I,
          newlyAddedElement: C,
          rootId: w
        });
      case t.TEXT_NODE:
        return Ki(t, {
          maskTextClass: s,
          maskTextSelector: a,
          maskTextFn: u,
          rootId: w
        });
      case t.CDATA_SECTION_NODE:
        return {
          type: ce.CDATA,
          textContent: "",
          rootId: w
        };
      case t.COMMENT_NODE:
        return {
          type: ce.Comment,
          textContent: t.textContent || "",
          rootId: w
        };
      default:
        return !1;
    }
  }
  function Pi(t, e) {
    if (e.hasNode(t)) {
      var n = e.getId(t);
      return n === 1 ? void 0 : n;
    }
  }
  function Ki(t, e) {
    var n, r = e.maskTextClass, i = e.maskTextSelector, o = e.maskTextFn, s = e.rootId, a = t.parentNode && t.parentNode.tagName, l = t.textContent, c = a === "STYLE" ? !0 : void 0, d = a === "SCRIPT" ? !0 : void 0;
    if (c && l) {
      try {
        t.nextSibling || t.previousSibling || !((n = t.parentNode.sheet) === null || n === void 0) && n.cssRules && (l = ki(t.parentNode.sheet));
      } catch (u) {
        console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(u), t);
      }
      l = Et(l, un());
    }
    return d && (l = "SCRIPT_PLACEHOLDER"), !c && !d && l && fr(t, r, i) && (l = o ? o(l) : l.replace(/[\S]/g, "*")), {
      type: ce.Text,
      textContent: l || "",
      isStyle: c,
      rootId: s
    };
  }
  function Yi(t, e) {
    for (var n = e.doc, r = e.blockClass, i = e.blockSelector, o = e.inlineStylesheet, s = e.maskInputOptions, a = s === void 0 ? {} : s, l = e.maskInputFn, c = e.dataURLOptions, d = c === void 0 ? {} : c, u = e.inlineImages, g = e.recordCanvas, m = e.keepIframeSrcFn, h = e.newlyAddedElement, p = h === void 0 ? !1 : h, y = e.rootId, I = Gi(t, r, i), f = Ri(t), C = {}, w = t.attributes.length, O = 0; O < w; O++) {
      var F = t.attributes[O];
      C[F.name] = mr(n, f, F.name, F.value);
    }
    if (f === "link" && o) {
      var W = Array.from(n.styleSheets).find(function(Z) {
        return Z.href === t.href;
      }), R = null;
      W && (R = jt(W)), R && (delete C.rel, delete C.href, C._cssText = Et(R, W.href));
    }
    if (f === "style" && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
      var R = jt(t.sheet);
      R && (C._cssText = Et(R, un()));
    }
    if (f === "input" || f === "textarea" || f === "select") {
      var b = t.value, x = t.checked;
      C.type !== "radio" && C.type !== "checkbox" && C.type !== "submit" && C.type !== "button" && b ? C.value = dn({
        type: C.type,
        tagName: f,
        value: b,
        maskInputOptions: a,
        maskInputFn: l
      }) : x && (C.checked = x);
    }
    if (f === "option" && (t.selected && !a.select ? C.selected = !0 : delete C.selected), f === "canvas" && g) {
      if (t.__context === "2d")
        Ei(t) || (C.rr_dataURL = t.toDataURL(d.type, d.quality));
      else if (!("__context" in t)) {
        var A = t.toDataURL(d.type, d.quality), v = document.createElement("canvas");
        v.width = t.width, v.height = t.height;
        var M = v.toDataURL(d.type, d.quality);
        A !== M && (C.rr_dataURL = A);
      }
    }
    if (f === "img" && u) {
      _e || (_e = n.createElement("canvas"), In = _e.getContext("2d"));
      var T = t, G = T.crossOrigin;
      T.crossOrigin = "anonymous";
      var B = function() {
        try {
          _e.width = T.naturalWidth, _e.height = T.naturalHeight, In.drawImage(T, 0, 0), C.rr_dataURL = _e.toDataURL(d.type, d.quality);
        } catch (Z) {
          console.warn("Cannot inline img src=".concat(T.currentSrc, "! Error: ").concat(Z));
        }
        G ? C.crossOrigin = G : T.removeAttribute("crossorigin");
      };
      T.complete && T.naturalWidth !== 0 ? B() : T.onload = B;
    }
    if ((f === "audio" || f === "video") && (C.rr_mediaState = t.paused ? "paused" : "played", C.rr_mediaCurrentTime = t.currentTime), p || (t.scrollLeft && (C.rr_scrollLeft = t.scrollLeft), t.scrollTop && (C.rr_scrollTop = t.scrollTop)), I) {
      var S = t.getBoundingClientRect(), _ = S.width, D = S.height;
      C = {
        class: C.class,
        rr_width: "".concat(_, "px"),
        rr_height: "".concat(D, "px")
      };
    }
    return f === "iframe" && !m(C.src) && (t.contentDocument || (C.rr_src = C.src), delete C.src), {
      type: ce.Element,
      tagName: f,
      attributes: C,
      childNodes: [],
      isSVG: _i(t) || void 0,
      needBlock: I,
      rootId: y
    };
  }
  function ee(t) {
    return t === void 0 ? "" : t.toLowerCase();
  }
  function zi(t, e) {
    if (e.comment && t.type === ce.Comment)
      return !0;
    if (t.type === ce.Element) {
      if (e.script && (t.tagName === "script" || t.tagName === "link" && t.attributes.rel === "preload" && t.attributes.as === "script" || t.tagName === "link" && t.attributes.rel === "prefetch" && typeof t.attributes.href == "string" && t.attributes.href.endsWith(".js")))
        return !0;
      if (e.headFavicon && (t.tagName === "link" && t.attributes.rel === "shortcut icon" || t.tagName === "meta" && (ee(t.attributes.name).match(/^msapplication-tile(image|color)$/) || ee(t.attributes.name) === "application-name" || ee(t.attributes.rel) === "icon" || ee(t.attributes.rel) === "apple-touch-icon" || ee(t.attributes.rel) === "shortcut icon")))
        return !0;
      if (t.tagName === "meta") {
        if (e.headMetaDescKeywords && ee(t.attributes.name).match(/^description|keywords$/))
          return !0;
        if (e.headMetaSocial && (ee(t.attributes.property).match(/^(og|twitter|fb):/) || ee(t.attributes.name).match(/^(og|twitter):/) || ee(t.attributes.name) === "pinterest"))
          return !0;
        if (e.headMetaRobots && (ee(t.attributes.name) === "robots" || ee(t.attributes.name) === "googlebot" || ee(t.attributes.name) === "bingbot"))
          return !0;
        if (e.headMetaHttpEquiv && t.attributes["http-equiv"] !== void 0)
          return !0;
        if (e.headMetaAuthorship && (ee(t.attributes.name) === "author" || ee(t.attributes.name) === "generator" || ee(t.attributes.name) === "framework" || ee(t.attributes.name) === "publisher" || ee(t.attributes.name) === "progid" || ee(t.attributes.property).match(/^article:/) || ee(t.attributes.property).match(/^product:/)))
          return !0;
        if (e.headMetaVerification && (ee(t.attributes.name) === "google-site-verification" || ee(t.attributes.name) === "yandex-verification" || ee(t.attributes.name) === "csrf-token" || ee(t.attributes.name) === "p:domain_verify" || ee(t.attributes.name) === "verify-v1" || ee(t.attributes.name) === "verification" || ee(t.attributes.name) === "shopify-checkout-api-token"))
          return !0;
      }
    }
    return !1;
  }
  function Ke(t, e) {
    var n = e.doc, r = e.mirror, i = e.blockClass, o = e.blockSelector, s = e.maskTextClass, a = e.maskTextSelector, l = e.skipChild, c = l === void 0 ? !1 : l, d = e.inlineStylesheet, u = d === void 0 ? !0 : d, g = e.maskInputOptions, m = g === void 0 ? {} : g, h = e.maskTextFn, p = e.maskInputFn, y = e.slimDOMOptions, I = e.dataURLOptions, f = I === void 0 ? {} : I, C = e.inlineImages, w = C === void 0 ? !1 : C, O = e.recordCanvas, F = O === void 0 ? !1 : O, W = e.onSerialize, R = e.onIframeLoad, b = e.iframeLoadTimeout, x = b === void 0 ? 5e3 : b, A = e.onStylesheetLoad, v = e.stylesheetLoadTimeout, M = v === void 0 ? 5e3 : v, T = e.keepIframeSrcFn, G = T === void 0 ? function() {
      return !1;
    } : T, B = e.newlyAddedElement, S = B === void 0 ? !1 : B, _ = e.preserveWhiteSpace, D = _ === void 0 ? !0 : _, Z = Ui(t, {
      doc: n,
      mirror: r,
      blockClass: i,
      blockSelector: o,
      maskTextClass: s,
      maskTextSelector: a,
      inlineStylesheet: u,
      maskInputOptions: m,
      maskTextFn: h,
      maskInputFn: p,
      dataURLOptions: f,
      inlineImages: w,
      recordCanvas: F,
      keepIframeSrcFn: G,
      newlyAddedElement: S
    });
    if (!Z)
      return console.warn(t, "not serialized"), null;
    var X;
    r.hasNode(t) ? X = r.getId(t) : zi(Z, y) || !D && Z.type === ce.Text && !Z.isStyle && !Z.textContent.replace(/^\s+|\s+$/gm, "").length ? X = dt : X = pr();
    var $ = Object.assign(Z, { id: X });
    if (r.add(t, $), X === dt)
      return null;
    W && W(t);
    var z = !c;
    if ($.type === ce.Element) {
      z = z && !$.needBlock, delete $.needBlock;
      var N = t.shadowRoot;
      N && ot(N) && ($.isShadowHost = !0);
    }
    if (($.type === ce.Document || $.type === ce.Element) && z) {
      y.headWhitespace && $.type === ce.Element && $.tagName === "head" && (D = !1);
      for (var V = {
        doc: n,
        mirror: r,
        blockClass: i,
        blockSelector: o,
        maskTextClass: s,
        maskTextSelector: a,
        skipChild: c,
        inlineStylesheet: u,
        maskInputOptions: m,
        maskTextFn: h,
        maskInputFn: p,
        slimDOMOptions: y,
        dataURLOptions: f,
        inlineImages: w,
        recordCanvas: F,
        preserveWhiteSpace: D,
        onSerialize: W,
        onIframeLoad: R,
        iframeLoadTimeout: x,
        onStylesheetLoad: A,
        stylesheetLoadTimeout: M,
        keepIframeSrcFn: G
      }, E = 0, q = Array.from(t.childNodes); E < q.length; E++) {
        var k = q[E], P = Ke(k, V);
        P && $.childNodes.push(P);
      }
      if (Ai(t) && t.shadowRoot)
        for (var de = 0, Y = Array.from(t.shadowRoot.childNodes); de < Y.length; de++) {
          var k = Y[de], P = Ke(k, V);
          P && (ot(t.shadowRoot) && (P.isShadow = !0), $.childNodes.push(P));
        }
    }
    return t.parentNode && it(t.parentNode) && ot(t.parentNode) && ($.isShadow = !0), $.type === ce.Element && $.tagName === "iframe" && Vi(t, function() {
      var me = t.contentDocument;
      if (me && R) {
        var qe = Ke(me, {
          doc: me,
          mirror: r,
          blockClass: i,
          blockSelector: o,
          maskTextClass: s,
          maskTextSelector: a,
          skipChild: !1,
          inlineStylesheet: u,
          maskInputOptions: m,
          maskTextFn: h,
          maskInputFn: p,
          slimDOMOptions: y,
          dataURLOptions: f,
          inlineImages: w,
          recordCanvas: F,
          preserveWhiteSpace: D,
          onSerialize: W,
          onIframeLoad: R,
          iframeLoadTimeout: x,
          onStylesheetLoad: A,
          stylesheetLoadTimeout: M,
          keepIframeSrcFn: G
        });
        qe && R(t, qe);
      }
    }, x), $.type === ce.Element && $.tagName === "link" && $.attributes.rel === "stylesheet" && Zi(t, function() {
      if (A) {
        var me = Ke(t, {
          doc: n,
          mirror: r,
          blockClass: i,
          blockSelector: o,
          maskTextClass: s,
          maskTextSelector: a,
          skipChild: !1,
          inlineStylesheet: u,
          maskInputOptions: m,
          maskTextFn: h,
          maskInputFn: p,
          slimDOMOptions: y,
          dataURLOptions: f,
          inlineImages: w,
          recordCanvas: F,
          preserveWhiteSpace: D,
          onSerialize: W,
          onIframeLoad: R,
          iframeLoadTimeout: x,
          onStylesheetLoad: A,
          stylesheetLoadTimeout: M,
          keepIframeSrcFn: G
        });
        me && A(t, me);
      }
    }, M), $;
  }
  function Hi(t, e) {
    var n = e || {}, r = n.mirror, i = r === void 0 ? new gr() : r, o = n.blockClass, s = o === void 0 ? "rr-block" : o, a = n.blockSelector, l = a === void 0 ? null : a, c = n.maskTextClass, d = c === void 0 ? "rr-mask" : c, u = n.maskTextSelector, g = u === void 0 ? null : u, m = n.inlineStylesheet, h = m === void 0 ? !0 : m, p = n.inlineImages, y = p === void 0 ? !1 : p, I = n.recordCanvas, f = I === void 0 ? !1 : I, C = n.maskAllInputs, w = C === void 0 ? !1 : C, O = n.maskTextFn, F = n.maskInputFn, W = n.slimDOM, R = W === void 0 ? !1 : W, b = n.dataURLOptions, x = n.preserveWhiteSpace, A = n.onSerialize, v = n.onIframeLoad, M = n.iframeLoadTimeout, T = n.onStylesheetLoad, G = n.stylesheetLoadTimeout, B = n.keepIframeSrcFn, S = B === void 0 ? function() {
      return !1;
    } : B, _ = w === !0 ? {
      color: !0,
      date: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
      textarea: !0,
      select: !0,
      password: !0
    } : w === !1 ? {
      password: !0
    } : w, D = R === !0 || R === "all" ? {
      script: !0,
      comment: !0,
      headFavicon: !0,
      headWhitespace: !0,
      headMetaDescKeywords: R === "all",
      headMetaSocial: !0,
      headMetaRobots: !0,
      headMetaHttpEquiv: !0,
      headMetaAuthorship: !0,
      headMetaVerification: !0
    } : R === !1 ? {} : R;
    return Ke(t, {
      doc: t,
      mirror: i,
      blockClass: s,
      blockSelector: l,
      maskTextClass: d,
      maskTextSelector: g,
      skipChild: !1,
      inlineStylesheet: h,
      maskInputOptions: _,
      maskTextFn: O,
      maskInputFn: F,
      slimDOMOptions: D,
      dataURLOptions: b,
      inlineImages: y,
      recordCanvas: f,
      preserveWhiteSpace: x,
      onSerialize: A,
      onIframeLoad: v,
      iframeLoadTimeout: M,
      onStylesheetLoad: T,
      stylesheetLoadTimeout: G,
      keepIframeSrcFn: S,
      newlyAddedElement: !1
    });
  }
  function ge(t, e, n = document) {
    const r = { capture: !0, passive: !0 };
    return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r);
  }
  const Ge = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
  let Cn = {
    map: {},
    getId() {
      return console.error(Ge), -1;
    },
    getNode() {
      return console.error(Ge), null;
    },
    removeNodeFromMap() {
      console.error(Ge);
    },
    has() {
      return console.error(Ge), !1;
    },
    reset() {
      console.error(Ge);
    }
  };
  typeof window < "u" && window.Proxy && window.Reflect && (Cn = new Proxy(Cn, {
    get(t, e, n) {
      return e === "map" && console.error(Ge), Reflect.get(t, e, n);
    }
  }));
  function ut(t, e, n = {}) {
    let r = null, i = 0;
    return function(...o) {
      const s = Date.now();
      !i && n.leading === !1 && (i = s);
      const a = e - (s - i), l = this;
      a <= 0 || a > e ? (r && (clearTimeout(r), r = null), i = s, t.apply(l, o)) : !r && n.trailing !== !1 && (r = setTimeout(() => {
        i = n.leading === !1 ? 0 : Date.now(), r = null, t.apply(l, o);
      }, a));
    };
  }
  function Lt(t, e, n, r, i = window) {
    const o = i.Object.getOwnPropertyDescriptor(t, e);
    return i.Object.defineProperty(t, e, r ? n : {
      set(s) {
        setTimeout(() => {
          n.set.call(this, s);
        }, 0), o && o.set && o.set.call(this, s);
      }
    }), () => Lt(t, e, o || {}, !0);
  }
  function He(t, e, n) {
    try {
      if (!(e in t))
        return () => {
        };
      const r = t[e], i = n(r);
      return typeof i == "function" && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
        __rrweb_original__: {
          enumerable: !1,
          value: r
        }
      })), t[e] = i, () => {
        t[e] = r;
      };
    } catch {
      return () => {
      };
    }
  }
  function yr() {
    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
  }
  function Ir() {
    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
  }
  function pe(t, e, n, r) {
    if (!t)
      return !1;
    const i = t.nodeType === t.ELEMENT_NODE ? t : t.parentElement;
    if (!i)
      return !1;
    if (typeof e == "string") {
      if (i.classList.contains(e) || r && i.closest("." + e) !== null)
        return !0;
    } else if (Tt(i, e, r))
      return !0;
    return !!(n && (t.matches(n) || r && i.closest(n) !== null));
  }
  function Qi(t, e) {
    return e.getId(t) !== -1;
  }
  function Gt(t, e) {
    return e.getId(t) === dt;
  }
  function Cr(t, e) {
    if (it(t))
      return !1;
    const n = e.getId(t);
    return e.has(n) ? t.parentNode && t.parentNode.nodeType === t.DOCUMENT_NODE ? !1 : t.parentNode ? Cr(t.parentNode, e) : !0 : !0;
  }
  function vr(t) {
    return !!t.changedTouches;
  }
  function Ji(t = window) {
    "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...e) => {
      let n = e[0];
      if (!(0 in e))
        throw new TypeError("1 argument is required");
      do
        if (this === n)
          return !0;
      while (n = n && n.parentNode);
      return !1;
    });
  }
  function br(t, e) {
    return !!(t.nodeName === "IFRAME" && e.getMeta(t));
  }
  function Ar(t, e) {
    return !!(t.nodeName === "LINK" && t.nodeType === t.ELEMENT_NODE && t.getAttribute && t.getAttribute("rel") === "stylesheet" && e.getMeta(t));
  }
  function Sr(t) {
    return !!(t != null && t.shadowRoot);
  }
  class $i {
    constructor() {
      this.id = 1, this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map();
    }
    getId(e) {
      var n;
      return (n = this.styleIDMap.get(e)) !== null && n !== void 0 ? n : -1;
    }
    has(e) {
      return this.styleIDMap.has(e);
    }
    add(e, n) {
      if (this.has(e))
        return this.getId(e);
      let r;
      return n === void 0 ? r = this.id++ : r = n, this.styleIDMap.set(e, r), this.idStyleMap.set(r, e), r;
    }
    getStyle(e) {
      return this.idStyleMap.get(e) || null;
    }
    reset() {
      this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map(), this.id = 1;
    }
    generateId() {
      return this.id++;
    }
  }
  var Q = /* @__PURE__ */ ((t) => (t[t.DomContentLoaded = 0] = "DomContentLoaded", t[t.Load = 1] = "Load", t[t.FullSnapshot = 2] = "FullSnapshot", t[t.IncrementalSnapshot = 3] = "IncrementalSnapshot", t[t.Meta = 4] = "Meta", t[t.Custom = 5] = "Custom", t[t.Plugin = 6] = "Plugin", t))(Q || {}), K = /* @__PURE__ */ ((t) => (t[t.Mutation = 0] = "Mutation", t[t.MouseMove = 1] = "MouseMove", t[t.MouseInteraction = 2] = "MouseInteraction", t[t.Scroll = 3] = "Scroll", t[t.ViewportResize = 4] = "ViewportResize", t[t.Input = 5] = "Input", t[t.TouchMove = 6] = "TouchMove", t[t.MediaInteraction = 7] = "MediaInteraction", t[t.StyleSheetRule = 8] = "StyleSheetRule", t[t.CanvasMutation = 9] = "CanvasMutation", t[t.Font = 10] = "Font", t[t.Log = 11] = "Log", t[t.Drag = 12] = "Drag", t[t.StyleDeclaration = 13] = "StyleDeclaration", t[t.Selection = 14] = "Selection", t[t.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", t))(K || {}), qt = /* @__PURE__ */ ((t) => (t[t.MouseUp = 0] = "MouseUp", t[t.MouseDown = 1] = "MouseDown", t[t.Click = 2] = "Click", t[t.ContextMenu = 3] = "ContextMenu", t[t.DblClick = 4] = "DblClick", t[t.Focus = 5] = "Focus", t[t.Blur = 6] = "Blur", t[t.TouchStart = 7] = "TouchStart", t[t.TouchMove_Departed = 8] = "TouchMove_Departed", t[t.TouchEnd = 9] = "TouchEnd", t[t.TouchCancel = 10] = "TouchCancel", t))(qt || {}), Qe = /* @__PURE__ */ ((t) => (t[t["2D"] = 0] = "2D", t[t.WebGL = 1] = "WebGL", t[t.WebGL2 = 2] = "WebGL2", t))(Qe || {});
  function vn(t) {
    return "__ln" in t;
  }
  class Xi {
    constructor() {
      this.length = 0, this.head = null;
    }
    get(e) {
      if (e >= this.length)
        throw new Error("Position outside of list range");
      let n = this.head;
      for (let r = 0; r < e; r++)
        n = (n == null ? void 0 : n.next) || null;
      return n;
    }
    addNode(e) {
      const n = {
        value: e,
        previous: null,
        next: null
      };
      if (e.__ln = n, e.previousSibling && vn(e.previousSibling)) {
        const r = e.previousSibling.__ln.next;
        n.next = r, n.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = n, r && (r.previous = n);
      } else if (e.nextSibling && vn(e.nextSibling) && e.nextSibling.__ln.previous) {
        const r = e.nextSibling.__ln.previous;
        n.previous = r, n.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = n, r && (r.next = n);
      } else
        this.head && (this.head.previous = n), n.next = this.head, this.head = n;
      this.length++;
    }
    removeNode(e) {
      const n = e.__ln;
      this.head && (n.previous ? (n.previous.next = n.next, n.next && (n.next.previous = n.previous)) : (this.head = n.next, this.head && (this.head.previous = null)), e.__ln && delete e.__ln, this.length--);
    }
  }
  const bn = (t, e) => `${t}@${e}`;
  class ji {
    constructor() {
      this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = /* @__PURE__ */ new Set(), this.movedSet = /* @__PURE__ */ new Set(), this.droppedSet = /* @__PURE__ */ new Set(), this.processMutations = (e) => {
        e.forEach(this.processMutation), this.emit();
      }, this.emit = () => {
        if (this.frozen || this.locked)
          return;
        const e = [], n = new Xi(), r = (a) => {
          let l = a, c = dt;
          for (; c === dt; )
            l = l && l.nextSibling, c = l && this.mirror.getId(l);
          return c;
        }, i = (a) => {
          var l, c, d, u;
          let g = null;
          ((c = (l = a.getRootNode) === null || l === void 0 ? void 0 : l.call(a)) === null || c === void 0 ? void 0 : c.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && a.getRootNode().host && (g = a.getRootNode().host);
          let m = g;
          for (; ((u = (d = m == null ? void 0 : m.getRootNode) === null || d === void 0 ? void 0 : d.call(m)) === null || u === void 0 ? void 0 : u.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && m.getRootNode().host; )
            m = m.getRootNode().host;
          const h = !this.doc.contains(a) && (!m || !this.doc.contains(m));
          if (!a.parentNode || h)
            return;
          const p = it(a.parentNode) ? this.mirror.getId(g) : this.mirror.getId(a.parentNode), y = r(a);
          if (p === -1 || y === -1)
            return n.addNode(a);
          const I = Ke(a, {
            doc: this.doc,
            mirror: this.mirror,
            blockClass: this.blockClass,
            blockSelector: this.blockSelector,
            maskTextClass: this.maskTextClass,
            maskTextSelector: this.maskTextSelector,
            skipChild: !0,
            newlyAddedElement: !0,
            inlineStylesheet: this.inlineStylesheet,
            maskInputOptions: this.maskInputOptions,
            maskTextFn: this.maskTextFn,
            maskInputFn: this.maskInputFn,
            slimDOMOptions: this.slimDOMOptions,
            dataURLOptions: this.dataURLOptions,
            recordCanvas: this.recordCanvas,
            inlineImages: this.inlineImages,
            onSerialize: (f) => {
              br(f, this.mirror) && this.iframeManager.addIframe(f), Ar(f, this.mirror) && this.stylesheetManager.trackLinkElement(f), Sr(a) && this.shadowDomManager.addShadowRoot(a.shadowRoot, this.doc);
            },
            onIframeLoad: (f, C) => {
              this.iframeManager.attachIframe(f, C), this.shadowDomManager.observeAttachShadow(f);
            },
            onStylesheetLoad: (f, C) => {
              this.stylesheetManager.attachLinkElement(f, C);
            }
          });
          I && e.push({
            parentId: p,
            nextId: y,
            node: I
          });
        };
        for (; this.mapRemoves.length; )
          this.mirror.removeNodeFromMap(this.mapRemoves.shift());
        for (const a of Array.from(this.movedSet.values()))
          An(this.removes, a, this.mirror) && !this.movedSet.has(a.parentNode) || i(a);
        for (const a of Array.from(this.addedSet.values()))
          !Sn(this.droppedSet, a) && !An(this.removes, a, this.mirror) || Sn(this.movedSet, a) ? i(a) : this.droppedSet.add(a);
        let o = null;
        for (; n.length; ) {
          let a = null;
          if (o) {
            const l = this.mirror.getId(o.value.parentNode), c = r(o.value);
            l !== -1 && c !== -1 && (a = o);
          }
          if (!a)
            for (let l = n.length - 1; l >= 0; l--) {
              const c = n.get(l);
              if (c) {
                const d = this.mirror.getId(c.value.parentNode);
                if (r(c.value) === -1)
                  continue;
                if (d !== -1) {
                  a = c;
                  break;
                } else {
                  const g = c.value;
                  if (g.parentNode && g.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    const m = g.parentNode.host;
                    if (this.mirror.getId(m) !== -1) {
                      a = c;
                      break;
                    }
                  }
                }
              }
            }
          if (!a) {
            for (; n.head; )
              n.removeNode(n.head.value);
            break;
          }
          o = a.previous, n.removeNode(a.value), i(a.value);
        }
        const s = {
          texts: this.texts.map((a) => ({
            id: this.mirror.getId(a.node),
            value: a.value
          })).filter((a) => this.mirror.has(a.id)),
          attributes: this.attributes.map((a) => ({
            id: this.mirror.getId(a.node),
            attributes: a.attributes
          })).filter((a) => this.mirror.has(a.id)),
          removes: this.removes,
          adds: e
        };
        !s.texts.length && !s.attributes.length && !s.removes.length && !s.adds.length || (this.texts = [], this.attributes = [], this.removes = [], this.addedSet = /* @__PURE__ */ new Set(), this.movedSet = /* @__PURE__ */ new Set(), this.droppedSet = /* @__PURE__ */ new Set(), this.movedMap = {}, this.mutationCb(s));
      }, this.processMutation = (e) => {
        if (!Gt(e.target, this.mirror))
          switch (e.type) {
            case "characterData": {
              const n = e.target.textContent;
              !pe(e.target, this.blockClass, this.blockSelector, !1) && n !== e.oldValue && this.texts.push({
                value: fr(e.target, this.maskTextClass, this.maskTextSelector) && n ? this.maskTextFn ? this.maskTextFn(n) : n.replace(/[\S]/g, "*") : n,
                node: e.target
              });
              break;
            }
            case "attributes": {
              const n = e.target;
              let r = e.target.getAttribute(e.attributeName);
              if (e.attributeName === "value" && (r = dn({
                maskInputOptions: this.maskInputOptions,
                tagName: e.target.tagName,
                type: e.target.getAttribute("type"),
                value: r,
                maskInputFn: this.maskInputFn
              })), pe(e.target, this.blockClass, this.blockSelector, !1) || r === e.oldValue)
                return;
              let i = this.attributes.find((o) => o.node === e.target);
              if (n.tagName === "IFRAME" && e.attributeName === "src" && !this.keepIframeSrcFn(r))
                if (!n.contentDocument)
                  e.attributeName = "rr_src";
                else
                  return;
              if (i || (i = {
                node: e.target,
                attributes: {}
              }, this.attributes.push(i)), e.attributeName === "style") {
                const o = this.doc.createElement("span");
                e.oldValue && o.setAttribute("style", e.oldValue), (i.attributes.style === void 0 || i.attributes.style === null) && (i.attributes.style = {});
                const s = i.attributes.style;
                for (const a of Array.from(n.style)) {
                  const l = n.style.getPropertyValue(a), c = n.style.getPropertyPriority(a);
                  (l !== o.style.getPropertyValue(a) || c !== o.style.getPropertyPriority(a)) && (c === "" ? s[a] = l : s[a] = [l, c]);
                }
                for (const a of Array.from(o.style))
                  n.style.getPropertyValue(a) === "" && (s[a] = !1);
              } else
                i.attributes[e.attributeName] = mr(this.doc, n.tagName, e.attributeName, r);
              break;
            }
            case "childList": {
              if (pe(e.target, this.blockClass, this.blockSelector, !0))
                return;
              e.addedNodes.forEach((n) => this.genAdds(n, e.target)), e.removedNodes.forEach((n) => {
                const r = this.mirror.getId(n), i = it(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                pe(e.target, this.blockClass, this.blockSelector, !1) || Gt(n, this.mirror) || !Qi(n, this.mirror) || (this.addedSet.has(n) ? (en(this.addedSet, n), this.droppedSet.add(n)) : this.addedSet.has(e.target) && r === -1 || Cr(e.target, this.mirror) || (this.movedSet.has(n) && this.movedMap[bn(r, i)] ? en(this.movedSet, n) : this.removes.push({
                  parentId: i,
                  id: r,
                  isShadow: it(e.target) && ot(e.target) ? !0 : void 0
                })), this.mapRemoves.push(n));
              });
              break;
            }
          }
      }, this.genAdds = (e, n) => {
        if (this.mirror.hasNode(e)) {
          if (Gt(e, this.mirror))
            return;
          this.movedSet.add(e);
          let r = null;
          n && this.mirror.hasNode(n) && (r = this.mirror.getId(n)), r && r !== -1 && (this.movedMap[bn(this.mirror.getId(e), r)] = !0);
        } else
          this.addedSet.add(e), this.droppedSet.delete(e);
        pe(e, this.blockClass, this.blockSelector, !1) || e.childNodes.forEach((r) => this.genAdds(r));
      };
    }
    init(e) {
      [
        "mutationCb",
        "blockClass",
        "blockSelector",
        "maskTextClass",
        "maskTextSelector",
        "inlineStylesheet",
        "maskInputOptions",
        "maskTextFn",
        "maskInputFn",
        "keepIframeSrcFn",
        "recordCanvas",
        "inlineImages",
        "slimDOMOptions",
        "dataURLOptions",
        "doc",
        "mirror",
        "iframeManager",
        "stylesheetManager",
        "shadowDomManager",
        "canvasManager"
      ].forEach((n) => {
        this[n] = e[n];
      });
    }
    freeze() {
      this.frozen = !0, this.canvasManager.freeze();
    }
    unfreeze() {
      this.frozen = !1, this.canvasManager.unfreeze(), this.emit();
    }
    isFrozen() {
      return this.frozen;
    }
    lock() {
      this.locked = !0, this.canvasManager.lock();
    }
    unlock() {
      this.locked = !1, this.canvasManager.unlock(), this.emit();
    }
    reset() {
      this.shadowDomManager.reset(), this.canvasManager.reset();
    }
  }
  function en(t, e) {
    t.delete(e), e.childNodes.forEach((n) => en(t, n));
  }
  function An(t, e, n) {
    return t.length === 0 ? !1 : wr(t, e, n);
  }
  function wr(t, e, n) {
    const { parentNode: r } = e;
    if (!r)
      return !1;
    const i = n.getId(r);
    return t.some((o) => o.id === i) ? !0 : wr(t, r, n);
  }
  function Sn(t, e) {
    return t.size === 0 ? !1 : Nr(t, e);
  }
  function Nr(t, e) {
    const { parentNode: n } = e;
    return n ? t.has(n) ? !0 : Nr(t, n) : !1;
  }
  const Fe = [], Er = typeof CSSGroupingRule < "u", Tr = typeof CSSMediaRule < "u", Mr = typeof CSSSupportsRule < "u", Rr = typeof CSSConditionRule < "u";
  function gt(t) {
    try {
      if ("composedPath" in t) {
        const e = t.composedPath();
        if (e.length)
          return e[0];
      } else if ("path" in t && t.path.length)
        return t.path[0];
      return t.target;
    } catch {
      return t.target;
    }
  }
  function kr(t, e) {
    var n, r;
    const i = new ji();
    Fe.push(i), i.init(t);
    let o = window.MutationObserver || window.__rrMutationObserver;
    const s = (r = (n = window == null ? void 0 : window.Zone) === null || n === void 0 ? void 0 : n.__symbol__) === null || r === void 0 ? void 0 : r.call(n, "MutationObserver");
    s && window[s] && (o = window[s]);
    const a = new o(i.processMutations.bind(i));
    return a.observe(e, {
      attributes: !0,
      attributeOldValue: !0,
      characterData: !0,
      characterDataOldValue: !0,
      childList: !0,
      subtree: !0
    }), a;
  }
  function qi({ mousemoveCb: t, sampling: e, doc: n, mirror: r }) {
    if (e.mousemove === !1)
      return () => {
      };
    const i = typeof e.mousemove == "number" ? e.mousemove : 50, o = typeof e.mousemoveCallback == "number" ? e.mousemoveCallback : 500;
    let s = [], a;
    const l = ut((u) => {
      const g = Date.now() - a;
      t(s.map((m) => (m.timeOffset -= g, m)), u), s = [], a = null;
    }, o), c = ut((u) => {
      const g = gt(u), { clientX: m, clientY: h } = vr(u) ? u.changedTouches[0] : u;
      a || (a = Date.now()), s.push({
        x: m,
        y: h,
        id: r.getId(g),
        timeOffset: Date.now() - a
      }), l(typeof DragEvent < "u" && u instanceof DragEvent ? K.Drag : u instanceof MouseEvent ? K.MouseMove : K.TouchMove);
    }, i, {
      trailing: !1
    }), d = [
      ge("mousemove", c, n),
      ge("touchmove", c, n),
      ge("drag", c, n)
    ];
    return () => {
      d.forEach((u) => u());
    };
  }
  function eo({ mouseInteractionCb: t, doc: e, mirror: n, blockClass: r, blockSelector: i, sampling: o }) {
    if (o.mouseInteraction === !1)
      return () => {
      };
    const s = o.mouseInteraction === !0 || o.mouseInteraction === void 0 ? {} : o.mouseInteraction, a = [], l = (c) => (d) => {
      const u = gt(d);
      if (pe(u, r, i, !0))
        return;
      const g = vr(d) ? d.changedTouches[0] : d;
      if (!g)
        return;
      const m = n.getId(u), { clientX: h, clientY: p } = g;
      t({
        type: qt[c],
        id: m,
        x: h,
        y: p
      });
    };
    return Object.keys(qt).filter((c) => Number.isNaN(Number(c)) && !c.endsWith("_Departed") && s[c] !== !1).forEach((c) => {
      const d = c.toLowerCase(), u = l(c);
      a.push(ge(d, u, e));
    }), () => {
      a.forEach((c) => c());
    };
  }
  function Dr({ scrollCb: t, doc: e, mirror: n, blockClass: r, blockSelector: i, sampling: o }) {
    const s = ut((a) => {
      const l = gt(a);
      if (!l || pe(l, r, i, !0))
        return;
      const c = n.getId(l);
      if (l === e) {
        const d = e.scrollingElement || e.documentElement;
        t({
          id: c,
          x: d.scrollLeft,
          y: d.scrollTop
        });
      } else
        t({
          id: c,
          x: l.scrollLeft,
          y: l.scrollTop
        });
    }, o.scroll || 100);
    return ge("scroll", s, e);
  }
  function to({ viewportResizeCb: t }) {
    let e = -1, n = -1;
    const r = ut(() => {
      const i = yr(), o = Ir();
      (e !== i || n !== o) && (t({
        width: Number(o),
        height: Number(i)
      }), e = i, n = o);
    }, 200);
    return ge("resize", r, window);
  }
  function wn(t, e) {
    const n = Object.assign({}, t);
    return e || delete n.userTriggered, n;
  }
  const no = ["INPUT", "TEXTAREA", "SELECT"], Nn = /* @__PURE__ */ new WeakMap();
  function ro({ inputCb: t, doc: e, mirror: n, blockClass: r, blockSelector: i, ignoreClass: o, maskInputOptions: s, maskInputFn: a, sampling: l, userTriggeredOnInput: c }) {
    function d(I) {
      let f = gt(I);
      const C = I.isTrusted;
      if (f && f.tagName === "OPTION" && (f = f.parentElement), !f || !f.tagName || no.indexOf(f.tagName) < 0 || pe(f, r, i, !0))
        return;
      const w = f.type;
      if (f.classList.contains(o))
        return;
      let O = f.value, F = !1;
      w === "radio" || w === "checkbox" ? F = f.checked : (s[f.tagName.toLowerCase()] || s[w]) && (O = dn({
        maskInputOptions: s,
        tagName: f.tagName,
        type: w,
        value: O,
        maskInputFn: a
      })), u(f, wn({ text: O, isChecked: F, userTriggered: C }, c));
      const W = f.name;
      w === "radio" && W && F && e.querySelectorAll(`input[type="radio"][name="${W}"]`).forEach((R) => {
        R !== f && u(R, wn({
          text: R.value,
          isChecked: !F,
          userTriggered: !1
        }, c));
      });
    }
    function u(I, f) {
      const C = Nn.get(I);
      if (!C || C.text !== f.text || C.isChecked !== f.isChecked) {
        Nn.set(I, f);
        const w = n.getId(I);
        t(Object.assign(Object.assign({}, f), { id: w }));
      }
    }
    const m = (l.input === "last" ? ["change"] : ["input", "change"]).map((I) => ge(I, d, e)), h = e.defaultView;
    if (!h)
      return () => {
        m.forEach((I) => I());
      };
    const p = h.Object.getOwnPropertyDescriptor(h.HTMLInputElement.prototype, "value"), y = [
      [h.HTMLInputElement.prototype, "value"],
      [h.HTMLInputElement.prototype, "checked"],
      [h.HTMLSelectElement.prototype, "value"],
      [h.HTMLTextAreaElement.prototype, "value"],
      [h.HTMLSelectElement.prototype, "selectedIndex"],
      [h.HTMLOptionElement.prototype, "selected"]
    ];
    return p && p.set && m.push(...y.map((I) => Lt(I[0], I[1], {
      set() {
        d({ target: this });
      }
    }, !1, h))), () => {
      m.forEach((I) => I());
    };
  }
  function Mt(t) {
    const e = [];
    function n(r, i) {
      if (Er && r.parentRule instanceof CSSGroupingRule || Tr && r.parentRule instanceof CSSMediaRule || Mr && r.parentRule instanceof CSSSupportsRule || Rr && r.parentRule instanceof CSSConditionRule) {
        const s = Array.from(r.parentRule.cssRules).indexOf(r);
        i.unshift(s);
      } else if (r.parentStyleSheet) {
        const s = Array.from(r.parentStyleSheet.cssRules).indexOf(r);
        i.unshift(s);
      }
      return i;
    }
    return n(t, e);
  }
  function Te(t, e, n) {
    let r, i;
    return t ? (t.ownerNode ? r = e.getId(t.ownerNode) : i = n.getId(t), {
      styleId: i,
      id: r
    }) : {};
  }
  function io({ styleSheetRuleCb: t, mirror: e, stylesheetManager: n }, { win: r }) {
    const i = r.CSSStyleSheet.prototype.insertRule;
    r.CSSStyleSheet.prototype.insertRule = function(d, u) {
      const { id: g, styleId: m } = Te(this, e, n.styleMirror);
      return (g && g !== -1 || m && m !== -1) && t({
        id: g,
        styleId: m,
        adds: [{ rule: d, index: u }]
      }), i.apply(this, [d, u]);
    };
    const o = r.CSSStyleSheet.prototype.deleteRule;
    r.CSSStyleSheet.prototype.deleteRule = function(d) {
      const { id: u, styleId: g } = Te(this, e, n.styleMirror);
      return (u && u !== -1 || g && g !== -1) && t({
        id: u,
        styleId: g,
        removes: [{ index: d }]
      }), o.apply(this, [d]);
    };
    let s;
    r.CSSStyleSheet.prototype.replace && (s = r.CSSStyleSheet.prototype.replace, r.CSSStyleSheet.prototype.replace = function(d) {
      const { id: u, styleId: g } = Te(this, e, n.styleMirror);
      return (u && u !== -1 || g && g !== -1) && t({
        id: u,
        styleId: g,
        replace: d
      }), s.apply(this, [d]);
    });
    let a;
    r.CSSStyleSheet.prototype.replaceSync && (a = r.CSSStyleSheet.prototype.replaceSync, r.CSSStyleSheet.prototype.replaceSync = function(d) {
      const { id: u, styleId: g } = Te(this, e, n.styleMirror);
      return (u && u !== -1 || g && g !== -1) && t({
        id: u,
        styleId: g,
        replaceSync: d
      }), a.apply(this, [d]);
    });
    const l = {};
    Er ? l.CSSGroupingRule = r.CSSGroupingRule : (Tr && (l.CSSMediaRule = r.CSSMediaRule), Rr && (l.CSSConditionRule = r.CSSConditionRule), Mr && (l.CSSSupportsRule = r.CSSSupportsRule));
    const c = {};
    return Object.entries(l).forEach(([d, u]) => {
      c[d] = {
        insertRule: u.prototype.insertRule,
        deleteRule: u.prototype.deleteRule
      }, u.prototype.insertRule = function(g, m) {
        const { id: h, styleId: p } = Te(this.parentStyleSheet, e, n.styleMirror);
        return (h && h !== -1 || p && p !== -1) && t({
          id: h,
          styleId: p,
          adds: [
            {
              rule: g,
              index: [
                ...Mt(this),
                m || 0
              ]
            }
          ]
        }), c[d].insertRule.apply(this, [g, m]);
      }, u.prototype.deleteRule = function(g) {
        const { id: m, styleId: h } = Te(this.parentStyleSheet, e, n.styleMirror);
        return (m && m !== -1 || h && h !== -1) && t({
          id: m,
          styleId: h,
          removes: [
            { index: [...Mt(this), g] }
          ]
        }), c[d].deleteRule.apply(this, [g]);
      };
    }), () => {
      r.CSSStyleSheet.prototype.insertRule = i, r.CSSStyleSheet.prototype.deleteRule = o, s && (r.CSSStyleSheet.prototype.replace = s), a && (r.CSSStyleSheet.prototype.replaceSync = a), Object.entries(l).forEach(([d, u]) => {
        u.prototype.insertRule = c[d].insertRule, u.prototype.deleteRule = c[d].deleteRule;
      });
    };
  }
  function xr({ mirror: t, stylesheetManager: e }, n) {
    var r, i, o;
    let s = null;
    n.nodeName === "#document" ? s = t.getId(n) : s = t.getId(n.host);
    const a = n.nodeName === "#document" ? (r = n.defaultView) === null || r === void 0 ? void 0 : r.Document : (o = (i = n.ownerDocument) === null || i === void 0 ? void 0 : i.defaultView) === null || o === void 0 ? void 0 : o.ShadowRoot, l = Object.getOwnPropertyDescriptor(a == null ? void 0 : a.prototype, "adoptedStyleSheets");
    return s === null || s === -1 || !a || !l ? () => {
    } : (Object.defineProperty(n, "adoptedStyleSheets", {
      configurable: l.configurable,
      enumerable: l.enumerable,
      get() {
        var c;
        return (c = l.get) === null || c === void 0 ? void 0 : c.call(this);
      },
      set(c) {
        var d;
        const u = (d = l.set) === null || d === void 0 ? void 0 : d.call(this, c);
        if (s !== null && s !== -1)
          try {
            e.adoptStyleSheets(c, s);
          } catch {
          }
        return u;
      }
    }), () => {
      Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: l.configurable,
        enumerable: l.enumerable,
        get: l.get,
        set: l.set
      });
    });
  }
  function oo({ styleDeclarationCb: t, mirror: e, ignoreCSSAttributes: n, stylesheetManager: r }, { win: i }) {
    const o = i.CSSStyleDeclaration.prototype.setProperty;
    i.CSSStyleDeclaration.prototype.setProperty = function(a, l, c) {
      var d;
      if (n.has(a))
        return o.apply(this, [a, l, c]);
      const { id: u, styleId: g } = Te((d = this.parentRule) === null || d === void 0 ? void 0 : d.parentStyleSheet, e, r.styleMirror);
      return (u && u !== -1 || g && g !== -1) && t({
        id: u,
        styleId: g,
        set: {
          property: a,
          value: l,
          priority: c
        },
        index: Mt(this.parentRule)
      }), o.apply(this, [a, l, c]);
    };
    const s = i.CSSStyleDeclaration.prototype.removeProperty;
    return i.CSSStyleDeclaration.prototype.removeProperty = function(a) {
      var l;
      if (n.has(a))
        return s.apply(this, [a]);
      const { id: c, styleId: d } = Te((l = this.parentRule) === null || l === void 0 ? void 0 : l.parentStyleSheet, e, r.styleMirror);
      return (c && c !== -1 || d && d !== -1) && t({
        id: c,
        styleId: d,
        remove: {
          property: a
        },
        index: Mt(this.parentRule)
      }), s.apply(this, [a]);
    }, () => {
      i.CSSStyleDeclaration.prototype.setProperty = o, i.CSSStyleDeclaration.prototype.removeProperty = s;
    };
  }
  function so({ mediaInteractionCb: t, blockClass: e, blockSelector: n, mirror: r, sampling: i }) {
    const o = (a) => ut((l) => {
      const c = gt(l);
      if (!c || pe(c, e, n, !0))
        return;
      const { currentTime: d, volume: u, muted: g, playbackRate: m } = c;
      t({
        type: a,
        id: r.getId(c),
        currentTime: d,
        volume: u,
        muted: g,
        playbackRate: m
      });
    }, i.media || 500), s = [
      ge("play", o(0)),
      ge("pause", o(1)),
      ge("seeked", o(2)),
      ge("volumechange", o(3)),
      ge("ratechange", o(4))
    ];
    return () => {
      s.forEach((a) => a());
    };
  }
  function ao({ fontCb: t, doc: e }) {
    const n = e.defaultView;
    if (!n)
      return () => {
      };
    const r = [], i = /* @__PURE__ */ new WeakMap(), o = n.FontFace;
    n.FontFace = function(l, c, d) {
      const u = new o(l, c, d);
      return i.set(u, {
        family: l,
        buffer: typeof c != "string",
        descriptors: d,
        fontSource: typeof c == "string" ? c : JSON.stringify(Array.from(new Uint8Array(c)))
      }), u;
    };
    const s = He(e.fonts, "add", function(a) {
      return function(l) {
        return setTimeout(() => {
          const c = i.get(l);
          c && (t(c), i.delete(l));
        }, 0), a.apply(this, [l]);
      };
    });
    return r.push(() => {
      n.FontFace = o;
    }), r.push(s), () => {
      r.forEach((a) => a());
    };
  }
  function lo(t) {
    const { doc: e, mirror: n, blockClass: r, blockSelector: i, selectionCb: o } = t;
    let s = !0;
    const a = () => {
      const l = e.getSelection();
      if (!l || s && (l != null && l.isCollapsed))
        return;
      s = l.isCollapsed || !1;
      const c = [], d = l.rangeCount || 0;
      for (let u = 0; u < d; u++) {
        const g = l.getRangeAt(u), { startContainer: m, startOffset: h, endContainer: p, endOffset: y } = g;
        pe(m, r, i, !0) || pe(p, r, i, !0) || c.push({
          start: n.getId(m),
          startOffset: h,
          end: n.getId(p),
          endOffset: y
        });
      }
      o({ ranges: c });
    };
    return a(), ge("selectionchange", a);
  }
  function co(t, e) {
    const { mutationCb: n, mousemoveCb: r, mouseInteractionCb: i, scrollCb: o, viewportResizeCb: s, inputCb: a, mediaInteractionCb: l, styleSheetRuleCb: c, styleDeclarationCb: d, canvasMutationCb: u, fontCb: g, selectionCb: m } = t;
    t.mutationCb = (...h) => {
      e.mutation && e.mutation(...h), n(...h);
    }, t.mousemoveCb = (...h) => {
      e.mousemove && e.mousemove(...h), r(...h);
    }, t.mouseInteractionCb = (...h) => {
      e.mouseInteraction && e.mouseInteraction(...h), i(...h);
    }, t.scrollCb = (...h) => {
      e.scroll && e.scroll(...h), o(...h);
    }, t.viewportResizeCb = (...h) => {
      e.viewportResize && e.viewportResize(...h), s(...h);
    }, t.inputCb = (...h) => {
      e.input && e.input(...h), a(...h);
    }, t.mediaInteractionCb = (...h) => {
      e.mediaInteaction && e.mediaInteaction(...h), l(...h);
    }, t.styleSheetRuleCb = (...h) => {
      e.styleSheetRule && e.styleSheetRule(...h), c(...h);
    }, t.styleDeclarationCb = (...h) => {
      e.styleDeclaration && e.styleDeclaration(...h), d(...h);
    }, t.canvasMutationCb = (...h) => {
      e.canvasMutation && e.canvasMutation(...h), u(...h);
    }, t.fontCb = (...h) => {
      e.font && e.font(...h), g(...h);
    }, t.selectionCb = (...h) => {
      e.selection && e.selection(...h), m(...h);
    };
  }
  function uo(t, e = {}) {
    const n = t.doc.defaultView;
    if (!n)
      return () => {
      };
    co(t, e);
    const r = kr(t, t.doc), i = qi(t), o = eo(t), s = Dr(t), a = to(t), l = ro(t), c = so(t), d = io(t, { win: n }), u = xr(t, t.doc), g = oo(t, {
      win: n
    }), m = t.collectFonts ? ao(t) : () => {
    }, h = lo(t), p = [];
    for (const y of t.plugins)
      p.push(y.observer(y.callback, n, y.options));
    return () => {
      Fe.forEach((y) => y.reset()), r.disconnect(), i(), o(), s(), a(), l(), c(), d(), u(), g(), m(), h(), p.forEach((y) => y());
    };
  }
  class En {
    constructor(e) {
      this.generateIdFn = e, this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap(), this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
    }
    getId(e, n, r, i) {
      const o = r || this.getIdToRemoteIdMap(e), s = i || this.getRemoteIdToIdMap(e);
      let a = o.get(n);
      return a || (a = this.generateIdFn(), o.set(n, a), s.set(a, n)), a;
    }
    getIds(e, n) {
      const r = this.getIdToRemoteIdMap(e), i = this.getRemoteIdToIdMap(e);
      return n.map((o) => this.getId(e, o, r, i));
    }
    getRemoteId(e, n, r) {
      const i = r || this.getRemoteIdToIdMap(e);
      if (typeof n != "number")
        return n;
      const o = i.get(n);
      return o || -1;
    }
    getRemoteIds(e, n) {
      const r = this.getRemoteIdToIdMap(e);
      return n.map((i) => this.getRemoteId(e, i, r));
    }
    reset(e) {
      if (!e) {
        this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap(), this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
        return;
      }
      this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e);
    }
    getIdToRemoteIdMap(e) {
      let n = this.iframeIdToRemoteIdMap.get(e);
      return n || (n = /* @__PURE__ */ new Map(), this.iframeIdToRemoteIdMap.set(e, n)), n;
    }
    getRemoteIdToIdMap(e) {
      let n = this.iframeRemoteIdToIdMap.get(e);
      return n || (n = /* @__PURE__ */ new Map(), this.iframeRemoteIdToIdMap.set(e, n)), n;
    }
  }
  class ho {
    constructor(e) {
      this.iframes = /* @__PURE__ */ new WeakMap(), this.crossOriginIframeMap = /* @__PURE__ */ new WeakMap(), this.crossOriginIframeMirror = new En(pr), this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new En(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this));
    }
    addIframe(e) {
      this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e);
    }
    addLoadListener(e) {
      this.loadListener = e;
    }
    attachIframe(e, n) {
      var r;
      this.mutationCb({
        adds: [
          {
            parentId: this.mirror.getId(e),
            nextId: null,
            node: n
          }
        ],
        removes: [],
        texts: [],
        attributes: [],
        isAttachIframe: !0
      }), (r = this.loadListener) === null || r === void 0 || r.call(this, e), e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument));
    }
    handleMessage(e) {
      if (e.data.type === "rrweb") {
        if (!e.source)
          return;
        const r = this.crossOriginIframeMap.get(e.source);
        if (!r)
          return;
        const i = this.transformCrossOriginEvent(r, e.data.event);
        i && this.wrappedEmit(i, e.data.isCheckout);
      }
    }
    transformCrossOriginEvent(e, n) {
      var r;
      switch (n.type) {
        case Q.FullSnapshot:
          return this.crossOriginIframeMirror.reset(e), this.crossOriginIframeStyleMirror.reset(e), this.replaceIdOnNode(n.data.node, e), {
            timestamp: n.timestamp,
            type: Q.IncrementalSnapshot,
            data: {
              source: K.Mutation,
              adds: [
                {
                  parentId: this.mirror.getId(e),
                  nextId: null,
                  node: n.data.node
                }
              ],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0
            }
          };
        case Q.Meta:
        case Q.Load:
        case Q.DomContentLoaded:
          return !1;
        case Q.Plugin:
          return n;
        case Q.Custom:
          return this.replaceIds(n.data.payload, e, ["id", "parentId", "previousId", "nextId"]), n;
        case Q.IncrementalSnapshot:
          switch (n.data.source) {
            case K.Mutation:
              return n.data.adds.forEach((i) => {
                this.replaceIds(i, e, [
                  "parentId",
                  "nextId",
                  "previousId"
                ]), this.replaceIdOnNode(i.node, e);
              }), n.data.removes.forEach((i) => {
                this.replaceIds(i, e, ["parentId", "id"]);
              }), n.data.attributes.forEach((i) => {
                this.replaceIds(i, e, ["id"]);
              }), n.data.texts.forEach((i) => {
                this.replaceIds(i, e, ["id"]);
              }), n;
            case K.Drag:
            case K.TouchMove:
            case K.MouseMove:
              return n.data.positions.forEach((i) => {
                this.replaceIds(i, e, ["id"]);
              }), n;
            case K.ViewportResize:
              return !1;
            case K.MediaInteraction:
            case K.MouseInteraction:
            case K.Scroll:
            case K.CanvasMutation:
            case K.Input:
              return this.replaceIds(n.data, e, ["id"]), n;
            case K.StyleSheetRule:
            case K.StyleDeclaration:
              return this.replaceIds(n.data, e, ["id"]), this.replaceStyleIds(n.data, e, ["styleId"]), n;
            case K.Font:
              return n;
            case K.Selection:
              return n.data.ranges.forEach((i) => {
                this.replaceIds(i, e, ["start", "end"]);
              }), n;
            case K.AdoptedStyleSheet:
              return this.replaceIds(n.data, e, ["id"]), this.replaceStyleIds(n.data, e, ["styleIds"]), (r = n.data.styles) === null || r === void 0 || r.forEach((i) => {
                this.replaceStyleIds(i, e, ["styleId"]);
              }), n;
          }
      }
    }
    replace(e, n, r, i) {
      for (const o of i)
        !Array.isArray(n[o]) && typeof n[o] != "number" || (Array.isArray(n[o]) ? n[o] = e.getIds(r, n[o]) : n[o] = e.getId(r, n[o]));
      return n;
    }
    replaceIds(e, n, r) {
      return this.replace(this.crossOriginIframeMirror, e, n, r);
    }
    replaceStyleIds(e, n, r) {
      return this.replace(this.crossOriginIframeStyleMirror, e, n, r);
    }
    replaceIdOnNode(e, n) {
      this.replaceIds(e, n, ["id"]), "childNodes" in e && e.childNodes.forEach((r) => {
        this.replaceIdOnNode(r, n);
      });
    }
  }
  class go {
    constructor(e) {
      this.shadowDoms = /* @__PURE__ */ new WeakSet(), this.restorePatches = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror;
      const n = this;
      this.restorePatches.push(He(Element.prototype, "attachShadow", function(r) {
        return function(i) {
          const o = r.call(this, i);
          return this.shadowRoot && n.addShadowRoot(this.shadowRoot, this.ownerDocument), o;
        };
      }));
    }
    addShadowRoot(e, n) {
      ot(e) && (this.shadowDoms.has(e) || (this.shadowDoms.add(e), kr(Object.assign(Object.assign({}, this.bypassOptions), { doc: n, mutationCb: this.mutationCb, mirror: this.mirror, shadowDomManager: this }), e), Dr(Object.assign(Object.assign({}, this.bypassOptions), { scrollCb: this.scrollCb, doc: e, mirror: this.mirror })), setTimeout(() => {
        e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), xr({
          mirror: this.mirror,
          stylesheetManager: this.bypassOptions.stylesheetManager
        }, e);
      }, 0)));
    }
    observeAttachShadow(e) {
      if (e.contentWindow) {
        const n = this;
        this.restorePatches.push(He(e.contentWindow.HTMLElement.prototype, "attachShadow", function(r) {
          return function(i) {
            const o = r.call(this, i);
            return this.shadowRoot && n.addShadowRoot(this.shadowRoot, e.contentDocument), o;
          };
        }));
      }
    }
    reset() {
      this.restorePatches.forEach((e) => e()), this.shadowDoms = /* @__PURE__ */ new WeakSet();
    }
  }
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  function po(t, e) {
    var n = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
    return n;
  }
  function mo(t, e, n, r) {
    function i(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function a(d) {
        try {
          c(r.next(d));
        } catch (u) {
          s(u);
        }
      }
      function l(d) {
        try {
          c(r.throw(d));
        } catch (u) {
          s(u);
        }
      }
      function c(d) {
        d.done ? o(d.value) : i(d.value).then(a, l);
      }
      c((r = r.apply(t, e || [])).next());
    });
  }
  var Ye = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var yt = 0; yt < Ye.length; yt++)
    fo[Ye.charCodeAt(yt)] = yt;
  var yo = function(t) {
    var e = new Uint8Array(t), n, r = e.length, i = "";
    for (n = 0; n < r; n += 3)
      i += Ye[e[n] >> 2], i += Ye[(e[n] & 3) << 4 | e[n + 1] >> 4], i += Ye[(e[n + 1] & 15) << 2 | e[n + 2] >> 6], i += Ye[e[n + 2] & 63];
    return r % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i;
  };
  const Tn = /* @__PURE__ */ new Map();
  function Io(t, e) {
    let n = Tn.get(t);
    return n || (n = /* @__PURE__ */ new Map(), Tn.set(t, n)), n.has(e) || n.set(e, []), n.get(e);
  }
  const Fr = (t, e, n) => {
    if (!t || !(Lr(t, e) || typeof t == "object"))
      return;
    const r = t.constructor.name, i = Io(n, r);
    let o = i.indexOf(t);
    return o === -1 && (o = i.length, i.push(t)), o;
  };
  function At(t, e, n) {
    if (t instanceof Array)
      return t.map((r) => At(r, e, n));
    if (t === null)
      return t;
    if (t instanceof Float32Array || t instanceof Float64Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Uint8Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Int8Array || t instanceof Uint8ClampedArray)
      return {
        rr_type: t.constructor.name,
        args: [Object.values(t)]
      };
    if (t instanceof ArrayBuffer) {
      const r = t.constructor.name, i = yo(t);
      return {
        rr_type: r,
        base64: i
      };
    } else {
      if (t instanceof DataView)
        return {
          rr_type: t.constructor.name,
          args: [
            At(t.buffer, e, n),
            t.byteOffset,
            t.byteLength
          ]
        };
      if (t instanceof HTMLImageElement) {
        const r = t.constructor.name, { src: i } = t;
        return {
          rr_type: r,
          src: i
        };
      } else if (t instanceof HTMLCanvasElement) {
        const r = "HTMLImageElement", i = t.toDataURL();
        return {
          rr_type: r,
          src: i
        };
      } else {
        if (t instanceof ImageData)
          return {
            rr_type: t.constructor.name,
            args: [At(t.data, e, n), t.width, t.height]
          };
        if (Lr(t, e) || typeof t == "object") {
          const r = t.constructor.name, i = Fr(t, e, n);
          return {
            rr_type: r,
            index: i
          };
        }
      }
    }
    return t;
  }
  const Or = (t, e, n) => [...t].map((r) => At(r, e, n)), Lr = (t, e) => !![
    "WebGLActiveInfo",
    "WebGLBuffer",
    "WebGLFramebuffer",
    "WebGLProgram",
    "WebGLRenderbuffer",
    "WebGLShader",
    "WebGLShaderPrecisionFormat",
    "WebGLTexture",
    "WebGLUniformLocation",
    "WebGLVertexArrayObject",
    "WebGLVertexArrayObjectOES"
  ].filter((i) => typeof e[i] == "function").find((i) => t instanceof e[i]);
  function Co(t, e, n, r) {
    const i = [], o = Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype);
    for (const s of o)
      try {
        if (typeof e.CanvasRenderingContext2D.prototype[s] != "function")
          continue;
        const a = He(e.CanvasRenderingContext2D.prototype, s, function(l) {
          return function(...c) {
            return pe(this.canvas, n, r, !0) || setTimeout(() => {
              const d = Or([...c], e, this);
              t(this.canvas, {
                type: Qe["2D"],
                property: s,
                args: d
              });
            }, 0), l.apply(this, c);
          };
        });
        i.push(a);
      } catch {
        const l = Lt(e.CanvasRenderingContext2D.prototype, s, {
          set(c) {
            t(this.canvas, {
              type: Qe["2D"],
              property: s,
              args: [c],
              setter: !0
            });
          }
        });
        i.push(l);
      }
    return () => {
      i.forEach((s) => s());
    };
  }
  function Mn(t, e, n) {
    const r = [];
    try {
      const i = He(t.HTMLCanvasElement.prototype, "getContext", function(o) {
        return function(s, ...a) {
          return pe(this, e, n, !0) || "__context" in this || (this.__context = s), o.apply(this, [s, ...a]);
        };
      });
      r.push(i);
    } catch {
      console.error("failed to patch HTMLCanvasElement.prototype.getContext");
    }
    return () => {
      r.forEach((i) => i());
    };
  }
  function Rn(t, e, n, r, i, o, s) {
    const a = [], l = Object.getOwnPropertyNames(t);
    for (const c of l)
      if (![
        "isContextLost",
        "canvas",
        "drawingBufferWidth",
        "drawingBufferHeight"
      ].includes(c))
        try {
          if (typeof t[c] != "function")
            continue;
          const d = He(t, c, function(u) {
            return function(...g) {
              const m = u.apply(this, g);
              if (Fr(m, s, this), !pe(this.canvas, r, i, !0)) {
                const h = Or([...g], s, this), p = {
                  type: e,
                  property: c,
                  args: h
                };
                n(this.canvas, p);
              }
              return m;
            };
          });
          a.push(d);
        } catch {
          const u = Lt(t, c, {
            set(g) {
              n(this.canvas, {
                type: e,
                property: c,
                args: [g],
                setter: !0
              });
            }
          });
          a.push(u);
        }
    return a;
  }
  function vo(t, e, n, r, i) {
    const o = [];
    return o.push(...Rn(e.WebGLRenderingContext.prototype, Qe.WebGL, t, n, r, i, e)), typeof e.WebGL2RenderingContext < "u" && o.push(...Rn(e.WebGL2RenderingContext.prototype, Qe.WebGL2, t, n, r, i, e)), () => {
      o.forEach((s) => s());
    };
  }
  var Wr = null;
  try {
    var bo = typeof We < "u" && typeof We.require == "function" && We.require("worker_threads") || typeof __non_webpack_require__ == "function" && __non_webpack_require__("worker_threads") || typeof require == "function" && require("worker_threads");
    Wr = bo.Worker;
  } catch {
  }
  function Ao(t, e) {
    return Buffer.from(t, "base64").toString(e ? "utf16" : "utf8");
  }
  function So(t, e, n) {
    var r = e === void 0 ? null : e, i = n === void 0 ? !1 : n, o = Ao(t, i), s = o.indexOf(`
`, 10) + 1, a = o.substring(s) + (r ? "//# sourceMappingURL=" + r : "");
    return function(c) {
      return new Wr(a, Object.assign({}, c, { eval: !0 }));
    };
  }
  function wo(t, e) {
    var n = atob(t);
    if (e) {
      for (var r = new Uint8Array(n.length), i = 0, o = n.length; i < o; ++i)
        r[i] = n.charCodeAt(i);
      return String.fromCharCode.apply(null, new Uint16Array(r.buffer));
    }
    return n;
  }
  function No(t, e, n) {
    var r = e === void 0 ? null : e, i = n === void 0 ? !1 : n, o = wo(t, i), s = o.indexOf(`
`, 10) + 1, a = o.substring(s) + (r ? "//# sourceMappingURL=" + r : ""), l = new Blob([a], { type: "application/javascript" });
    return URL.createObjectURL(l);
  }
  function Eo(t, e, n) {
    var r;
    return function(o) {
      return r = r || No(t, e, n), new Worker(r, o);
    };
  }
  var To = Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
  function Mo() {
    return To;
  }
  function Ro(t, e, n) {
    return Mo() ? So(t, e, n) : Eo(t, e, n);
  }
  var ko = Ro("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo=", null, !1);
  class Do {
    constructor(e) {
      this.pendingCanvasMutations = /* @__PURE__ */ new Map(), this.rafStamps = { latestId: 0, invokeId: null }, this.frozen = !1, this.locked = !1, this.processMutation = (l, c) => {
        (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(l) || this.pendingCanvasMutations.set(l, []), this.pendingCanvasMutations.get(l).push(c);
      };
      const { sampling: n = "all", win: r, blockClass: i, blockSelector: o, recordCanvas: s, dataURLOptions: a } = e;
      this.mutationCb = e.mutationCb, this.mirror = e.mirror, s && n === "all" && this.initCanvasMutationObserver(r, i, o), s && typeof n == "number" && this.initCanvasFPSObserver(n, r, i, o, {
        dataURLOptions: a
      });
    }
    reset() {
      this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers();
    }
    freeze() {
      this.frozen = !0;
    }
    unfreeze() {
      this.frozen = !1;
    }
    lock() {
      this.locked = !0;
    }
    unlock() {
      this.locked = !1;
    }
    initCanvasFPSObserver(e, n, r, i, o) {
      const s = Mn(n, r, i), a = /* @__PURE__ */ new Map(), l = new ko();
      l.onmessage = (h) => {
        const { id: p } = h.data;
        if (a.set(p, !1), !("base64" in h.data))
          return;
        const { base64: y, type: I, width: f, height: C } = h.data;
        this.mutationCb({
          id: p,
          type: Qe["2D"],
          commands: [
            {
              property: "clearRect",
              args: [0, 0, f, C]
            },
            {
              property: "drawImage",
              args: [
                {
                  rr_type: "ImageBitmap",
                  args: [
                    {
                      rr_type: "Blob",
                      data: [{ rr_type: "ArrayBuffer", base64: y }],
                      type: I
                    }
                  ]
                },
                0,
                0
              ]
            }
          ]
        });
      };
      const c = 1e3 / e;
      let d = 0, u;
      const g = () => {
        const h = [];
        return n.document.querySelectorAll("canvas").forEach((p) => {
          pe(p, r, i, !0) || h.push(p);
        }), h;
      }, m = (h) => {
        if (d && h - d < c) {
          u = requestAnimationFrame(m);
          return;
        }
        d = h, g().forEach((p) => mo(this, void 0, void 0, function* () {
          var y;
          const I = this.mirror.getId(p);
          if (a.get(I))
            return;
          if (a.set(I, !0), ["webgl", "webgl2"].includes(p.__context)) {
            const C = p.getContext(p.__context);
            ((y = C == null ? void 0 : C.getContextAttributes()) === null || y === void 0 ? void 0 : y.preserveDrawingBuffer) === !1 && (C == null || C.clear(C.COLOR_BUFFER_BIT));
          }
          const f = yield createImageBitmap(p);
          l.postMessage({
            id: I,
            bitmap: f,
            width: p.width,
            height: p.height,
            dataURLOptions: o.dataURLOptions
          }, [f]);
        })), u = requestAnimationFrame(m);
      };
      u = requestAnimationFrame(m), this.resetObservers = () => {
        s(), cancelAnimationFrame(u);
      };
    }
    initCanvasMutationObserver(e, n, r) {
      this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
      const i = Mn(e, n, r), o = Co(this.processMutation.bind(this), e, n, r), s = vo(this.processMutation.bind(this), e, n, r, this.mirror);
      this.resetObservers = () => {
        i(), o(), s();
      };
    }
    startPendingCanvasMutationFlusher() {
      requestAnimationFrame(() => this.flushPendingCanvasMutations());
    }
    startRAFTimestamping() {
      const e = (n) => {
        this.rafStamps.latestId = n, requestAnimationFrame(e);
      };
      requestAnimationFrame(e);
    }
    flushPendingCanvasMutations() {
      this.pendingCanvasMutations.forEach((e, n) => {
        const r = this.mirror.getId(n);
        this.flushPendingCanvasMutationFor(n, r);
      }), requestAnimationFrame(() => this.flushPendingCanvasMutations());
    }
    flushPendingCanvasMutationFor(e, n) {
      if (this.frozen || this.locked)
        return;
      const r = this.pendingCanvasMutations.get(e);
      if (!r || n === -1)
        return;
      const i = r.map((s) => po(s, ["type"])), { type: o } = r[0];
      this.mutationCb({ id: n, type: o, commands: i }), this.pendingCanvasMutations.delete(e);
    }
  }
  class xo {
    constructor(e) {
      this.trackedLinkElements = /* @__PURE__ */ new WeakSet(), this.styleMirror = new $i(), this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb;
    }
    attachLinkElement(e, n) {
      "_cssText" in n.attributes && this.mutationCb({
        adds: [],
        removes: [],
        texts: [],
        attributes: [
          {
            id: n.id,
            attributes: n.attributes
          }
        ]
      }), this.trackLinkElement(e);
    }
    trackLinkElement(e) {
      this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e));
    }
    adoptStyleSheets(e, n) {
      if (e.length === 0)
        return;
      const r = {
        id: n,
        styleIds: []
      }, i = [];
      for (const o of e) {
        let s;
        if (this.styleMirror.has(o))
          s = this.styleMirror.getId(o);
        else {
          s = this.styleMirror.add(o);
          const a = Array.from(o.rules || CSSRule);
          i.push({
            styleId: s,
            rules: a.map((l, c) => ({
              rule: hr(l),
              index: c
            }))
          });
        }
        r.styleIds.push(s);
      }
      i.length > 0 && (r.styles = i), this.adoptedStyleSheetCb(r);
    }
    reset() {
      this.styleMirror.reset(), this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
    }
    trackStylesheetInLinkElement(e) {
    }
  }
  function se(t) {
    return Object.assign(Object.assign({}, t), { timestamp: Date.now() });
  }
  let ie, St, Vt, Rt = !1;
  const Ce = Ni();
  function pt(t = {}) {
    const { emit: e, checkoutEveryNms: n, checkoutEveryNth: r, blockClass: i = "rr-block", blockSelector: o = null, ignoreClass: s = "rr-ignore", maskTextClass: a = "rr-mask", maskTextSelector: l = null, inlineStylesheet: c = !0, maskAllInputs: d, maskInputOptions: u, slimDOMOptions: g, maskInputFn: m, maskTextFn: h, hooks: p, packFn: y, sampling: I = {}, dataURLOptions: f = {}, mousemoveWait: C, recordCanvas: w = !1, recordCrossOriginIframes: O = !1, userTriggeredOnInput: F = !1, collectFonts: W = !1, inlineImages: R = !1, plugins: b, keepIframeSrcFn: x = () => !1, ignoreCSSAttributes: A = /* @__PURE__ */ new Set([]) } = t, v = O ? window.parent === window : !0;
    let M = !1;
    if (!v)
      try {
        window.parent.document, M = !1;
      } catch {
        M = !0;
      }
    if (v && !e)
      throw new Error("emit function is required");
    C !== void 0 && I.mousemove === void 0 && (I.mousemove = C), Ce.reset();
    const T = d === !0 ? {
      color: !0,
      date: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
      textarea: !0,
      select: !0,
      password: !0
    } : u !== void 0 ? u : { password: !0 }, G = g === !0 || g === "all" ? {
      script: !0,
      comment: !0,
      headFavicon: !0,
      headWhitespace: !0,
      headMetaSocial: !0,
      headMetaRobots: !0,
      headMetaHttpEquiv: !0,
      headMetaVerification: !0,
      headMetaAuthorship: g === "all",
      headMetaDescKeywords: g === "all"
    } : g || {};
    Ji();
    let B, S = 0;
    const _ = (E) => {
      for (const q of b || [])
        q.eventProcessor && (E = q.eventProcessor(E));
      return y && (E = y(E)), E;
    };
    ie = (E, q) => {
      var k;
      if (!((k = Fe[0]) === null || k === void 0) && k.isFrozen() && E.type !== Q.FullSnapshot && !(E.type === Q.IncrementalSnapshot && E.data.source === K.Mutation) && Fe.forEach((P) => P.unfreeze()), v)
        e == null || e(_(E), q);
      else if (M) {
        const P = {
          type: "rrweb",
          event: _(E),
          isCheckout: q
        };
        window.parent.postMessage(P, "*");
      }
      if (E.type === Q.FullSnapshot)
        B = E, S = 0;
      else if (E.type === Q.IncrementalSnapshot) {
        if (E.data.source === K.Mutation && E.data.isAttachIframe)
          return;
        S++;
        const P = r && S >= r, de = n && E.timestamp - B.timestamp > n;
        (P || de) && St(!0);
      }
    };
    const D = (E) => {
      ie(se({
        type: Q.IncrementalSnapshot,
        data: Object.assign({ source: K.Mutation }, E)
      }));
    }, Z = (E) => ie(se({
      type: Q.IncrementalSnapshot,
      data: Object.assign({ source: K.Scroll }, E)
    })), X = (E) => ie(se({
      type: Q.IncrementalSnapshot,
      data: Object.assign({ source: K.CanvasMutation }, E)
    })), $ = (E) => ie(se({
      type: Q.IncrementalSnapshot,
      data: Object.assign({ source: K.AdoptedStyleSheet }, E)
    })), z = new xo({
      mutationCb: D,
      adoptedStyleSheetCb: $
    }), N = new ho({
      mirror: Ce,
      mutationCb: D,
      stylesheetManager: z,
      recordCrossOriginIframes: O,
      wrappedEmit: ie
    });
    for (const E of b || [])
      E.getMirror && E.getMirror({
        nodeMirror: Ce,
        crossOriginIframeMirror: N.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: N.crossOriginIframeStyleMirror
      });
    Vt = new Do({
      recordCanvas: w,
      mutationCb: X,
      win: window,
      blockClass: i,
      blockSelector: o,
      mirror: Ce,
      sampling: I.canvas,
      dataURLOptions: f
    });
    const V = new go({
      mutationCb: D,
      scrollCb: Z,
      bypassOptions: {
        blockClass: i,
        blockSelector: o,
        maskTextClass: a,
        maskTextSelector: l,
        inlineStylesheet: c,
        maskInputOptions: T,
        dataURLOptions: f,
        maskTextFn: h,
        maskInputFn: m,
        recordCanvas: w,
        inlineImages: R,
        sampling: I,
        slimDOMOptions: G,
        iframeManager: N,
        stylesheetManager: z,
        canvasManager: Vt,
        keepIframeSrcFn: x
      },
      mirror: Ce
    });
    St = (E = !1) => {
      var q, k, P, de, Y, me;
      ie(se({
        type: Q.Meta,
        data: {
          href: window.location.href,
          width: Ir(),
          height: yr()
        }
      }), E), z.reset(), Fe.forEach((ue) => ue.lock());
      const qe = Hi(document, {
        mirror: Ce,
        blockClass: i,
        blockSelector: o,
        maskTextClass: a,
        maskTextSelector: l,
        inlineStylesheet: c,
        maskAllInputs: T,
        maskTextFn: h,
        slimDOM: G,
        dataURLOptions: f,
        recordCanvas: w,
        inlineImages: R,
        onSerialize: (ue) => {
          br(ue, Ce) && N.addIframe(ue), Ar(ue, Ce) && z.trackLinkElement(ue), Sr(ue) && V.addShadowRoot(ue.shadowRoot, document);
        },
        onIframeLoad: (ue, _t) => {
          N.attachIframe(ue, _t), V.observeAttachShadow(ue);
        },
        onStylesheetLoad: (ue, _t) => {
          z.attachLinkElement(ue, _t);
        },
        keepIframeSrcFn: x
      });
      if (!qe)
        return console.warn("Failed to snapshot the document");
      ie(se({
        type: Q.FullSnapshot,
        data: {
          node: qe,
          initialOffset: {
            left: window.pageXOffset !== void 0 ? window.pageXOffset : (document == null ? void 0 : document.documentElement.scrollLeft) || ((k = (q = document == null ? void 0 : document.body) === null || q === void 0 ? void 0 : q.parentElement) === null || k === void 0 ? void 0 : k.scrollLeft) || ((P = document == null ? void 0 : document.body) === null || P === void 0 ? void 0 : P.scrollLeft) || 0,
            top: window.pageYOffset !== void 0 ? window.pageYOffset : (document == null ? void 0 : document.documentElement.scrollTop) || ((Y = (de = document == null ? void 0 : document.body) === null || de === void 0 ? void 0 : de.parentElement) === null || Y === void 0 ? void 0 : Y.scrollTop) || ((me = document == null ? void 0 : document.body) === null || me === void 0 ? void 0 : me.scrollTop) || 0
          }
        }
      })), Fe.forEach((ue) => ue.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && z.adoptStyleSheets(document.adoptedStyleSheets, Ce.getId(document));
    };
    try {
      const E = [];
      E.push(ge("DOMContentLoaded", () => {
        ie(se({
          type: Q.DomContentLoaded,
          data: {}
        }));
      }));
      const q = (P) => {
        var de;
        return uo({
          mutationCb: D,
          mousemoveCb: (Y, me) => ie(se({
            type: Q.IncrementalSnapshot,
            data: {
              source: me,
              positions: Y
            }
          })),
          mouseInteractionCb: (Y) => ie(se({
            type: Q.IncrementalSnapshot,
            data: Object.assign({ source: K.MouseInteraction }, Y)
          })),
          scrollCb: Z,
          viewportResizeCb: (Y) => ie(se({
            type: Q.IncrementalSnapshot,
            data: Object.assign({ source: K.ViewportResize }, Y)
          })),
          inputCb: (Y) => ie(se({
            type: Q.IncrementalSnapshot,
            data: Object.assign({ source: K.Input }, Y)
          })),
          mediaInteractionCb: (Y) => ie(se({
            type: Q.IncrementalSnapshot,
            data: Object.assign({ source: K.MediaInteraction }, Y)
          })),
          styleSheetRuleCb: (Y) => ie(se({
            type: Q.IncrementalSnapshot,
            data: Object.assign({ source: K.StyleSheetRule }, Y)
          })),
          styleDeclarationCb: (Y) => ie(se({
            type: Q.IncrementalSnapshot,
            data: Object.assign({ source: K.StyleDeclaration }, Y)
          })),
          canvasMutationCb: X,
          fontCb: (Y) => ie(se({
            type: Q.IncrementalSnapshot,
            data: Object.assign({ source: K.Font }, Y)
          })),
          selectionCb: (Y) => {
            ie(se({
              type: Q.IncrementalSnapshot,
              data: Object.assign({ source: K.Selection }, Y)
            }));
          },
          blockClass: i,
          ignoreClass: s,
          maskTextClass: a,
          maskTextSelector: l,
          maskInputOptions: T,
          inlineStylesheet: c,
          sampling: I,
          recordCanvas: w,
          inlineImages: R,
          userTriggeredOnInput: F,
          collectFonts: W,
          doc: P,
          maskInputFn: m,
          maskTextFn: h,
          keepIframeSrcFn: x,
          blockSelector: o,
          slimDOMOptions: G,
          dataURLOptions: f,
          mirror: Ce,
          iframeManager: N,
          stylesheetManager: z,
          shadowDomManager: V,
          canvasManager: Vt,
          ignoreCSSAttributes: A,
          plugins: ((de = b == null ? void 0 : b.filter((Y) => Y.observer)) === null || de === void 0 ? void 0 : de.map((Y) => ({
            observer: Y.observer,
            options: Y.options,
            callback: (me) => ie(se({
              type: Q.Plugin,
              data: {
                plugin: Y.name,
                payload: me
              }
            }))
          }))) || []
        }, p);
      };
      N.addLoadListener((P) => {
        E.push(q(P.contentDocument));
      });
      const k = () => {
        St(), E.push(q(document)), Rt = !0;
      };
      return document.readyState === "interactive" || document.readyState === "complete" ? k() : E.push(ge("load", () => {
        ie(se({
          type: Q.Load,
          data: {}
        })), k();
      }, window)), () => {
        E.forEach((P) => P()), Rt = !1;
      };
    } catch (E) {
      console.warn(E);
    }
  }
  pt.addCustomEvent = (t, e) => {
    if (!Rt)
      throw new Error("please add custom event after start recording");
    ie(se({
      type: Q.Custom,
      data: {
        tag: t,
        payload: e
      }
    }));
  };
  pt.freezePage = () => {
    Fe.forEach((t) => t.freeze());
  };
  pt.takeFullSnapshot = (t) => {
    if (!Rt)
      throw new Error("please take full snapshot after start recording");
    St(t);
  };
  pt.mirror = Ce;
  function kt() {
  }
  function kn(t, e) {
    for (const n in e)
      t[n] = e[n];
    return t;
  }
  function Br(t) {
    return t();
  }
  function Dn() {
    return /* @__PURE__ */ Object.create(null);
  }
  function Xe(t) {
    t.forEach(Br);
  }
  function Fo(t) {
    return typeof t == "function";
  }
  function hn(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
  }
  function xn(t) {
    const e = {};
    for (const n in t)
      n[0] !== "$" && (e[n] = t[n]);
    return e;
  }
  function J(t, e) {
    t.appendChild(e);
  }
  function Ee(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function Ae(t) {
    t.parentNode.removeChild(t);
  }
  function Zt(t, e) {
    for (let n = 0; n < t.length; n += 1)
      t[n] && t[n].d(e);
  }
  function ae(t) {
    return document.createElement(t);
  }
  function Dt(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function Be(t) {
    return document.createTextNode(t);
  }
  function fe() {
    return Be(" ");
  }
  function st(t, e, n, r) {
    return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
  }
  function L(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function xt(t, e) {
    e = "" + e, t.wholeText !== e && (t.data = e);
  }
  function oe(t, e, n, r) {
    n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
  }
  function Je(t, e, n) {
    t.classList[n ? "add" : "remove"](e);
  }
  let ht;
  function at(t) {
    ht = t;
  }
  function Wt() {
    if (!ht)
      throw new Error("Function called outside component initialization");
    return ht;
  }
  function _r(t) {
    Wt().$$.on_mount.push(t);
  }
  function Gr(t) {
    Wt().$$.on_destroy.push(t);
  }
  function Oo() {
    const t = Wt();
    return (e, n, { cancelable: r = !1 } = {}) => {
      const i = t.$$.callbacks[e];
      if (i) {
        const o = function(s, a, { bubbles: l = !1, cancelable: c = !1 } = {}) {
          const d = document.createEvent("CustomEvent");
          return d.initCustomEvent(s, l, c, a), d;
        }(e, n, { cancelable: r });
        return i.slice().forEach((s) => {
          s.call(t, o);
        }), !o.defaultPrevented;
      }
      return !0;
    };
  }
  const tt = [], ke = [], wt = [], tn = [], Lo = Promise.resolve();
  let nn = !1;
  function rn(t) {
    wt.push(t);
  }
  const Ut = /* @__PURE__ */ new Set();
  let It = 0;
  function Vr() {
    const t = ht;
    do {
      for (; It < tt.length; ) {
        const e = tt[It];
        It++, at(e), Wo(e.$$);
      }
      for (at(null), tt.length = 0, It = 0; ke.length; )
        ke.pop()();
      for (let e = 0; e < wt.length; e += 1) {
        const n = wt[e];
        Ut.has(n) || (Ut.add(n), n());
      }
      wt.length = 0;
    } while (tt.length);
    for (; tn.length; )
      tn.pop()();
    nn = !1, Ut.clear(), at(t);
  }
  function Wo(t) {
    if (t.fragment !== null) {
      t.update(), Xe(t.before_update);
      const e = t.dirty;
      t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(rn);
    }
  }
  const Nt = /* @__PURE__ */ new Set();
  let Oe;
  function Zr() {
    Oe = { r: 0, c: [], p: Oe };
  }
  function Ur() {
    Oe.r || Xe(Oe.c), Oe = Oe.p;
  }
  function Ne(t, e) {
    t && t.i && (Nt.delete(t), t.i(e));
  }
  function $e(t, e, n, r) {
    if (t && t.o) {
      if (Nt.has(t))
        return;
      Nt.add(t), Oe.c.push(() => {
        Nt.delete(t), r && (n && t.d(1), r());
      }), t.o(e);
    } else
      r && r();
  }
  function Pr(t) {
    t && t.c();
  }
  function gn(t, e, n, r) {
    const { fragment: i, on_mount: o, on_destroy: s, after_update: a } = t.$$;
    i && i.m(e, n), r || rn(() => {
      const l = o.map(Br).filter(Fo);
      s ? s.push(...l) : Xe(l), t.$$.on_mount = [];
    }), a.forEach(rn);
  }
  function pn(t, e) {
    const n = t.$$;
    n.fragment !== null && (Xe(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
  }
  function Bo(t, e) {
    t.$$.dirty[0] === -1 && (tt.push(t), nn || (nn = !0, Lo.then(Vr)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
  }
  function mn(t, e, n, r, i, o, s, a = [-1]) {
    const l = ht;
    at(t);
    const c = t.$$ = { fragment: null, ctx: null, props: o, update: kt, not_equal: i, bound: Dn(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(e.context || (l ? l.$$.context : [])), callbacks: Dn(), dirty: a, skip_bound: !1, root: e.target || l.$$.root };
    s && s(c.root);
    let d = !1;
    if (c.ctx = n ? n(t, e.props || {}, (u, g, ...m) => {
      const h = m.length ? m[0] : g;
      return c.ctx && i(c.ctx[u], c.ctx[u] = h) && (!c.skip_bound && c.bound[u] && c.bound[u](h), d && Bo(t, u)), g;
    }) : [], c.update(), d = !0, Xe(c.before_update), c.fragment = !!r && r(c.ctx), e.target) {
      if (e.hydrate) {
        const u = function(g) {
          return Array.from(g.childNodes);
        }(e.target);
        c.fragment && c.fragment.l(u), u.forEach(Ae);
      } else
        c.fragment && c.fragment.c();
      e.intro && Ne(t.$$.fragment), gn(t, e.target, e.anchor, e.customElement), Vr();
    }
    at(l);
  }
  class fn {
    $destroy() {
      pn(this, 1), this.$destroy = kt;
    }
    $on(e, n) {
      const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return r.push(n), () => {
        const i = r.indexOf(n);
        i !== -1 && r.splice(i, 1);
      };
    }
    $set(e) {
      var n;
      this.$$set && (n = e, Object.keys(n).length !== 0) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
    }
  }
  var le;
  function _o(t) {
    return t.nodeType === t.ELEMENT_NODE;
  }
  (function(t) {
    t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment";
  })(le || (le = {}));
  var Kr = function() {
    function t() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }
    return t.prototype.getId = function(e) {
      var n;
      if (!e)
        return -1;
      var r = (n = this.getMeta(e)) === null || n === void 0 ? void 0 : n.id;
      return r ?? -1;
    }, t.prototype.getNode = function(e) {
      return this.idNodeMap.get(e) || null;
    }, t.prototype.getIds = function() {
      return Array.from(this.idNodeMap.keys());
    }, t.prototype.getMeta = function(e) {
      return this.nodeMetaMap.get(e) || null;
    }, t.prototype.removeNodeFromMap = function(e) {
      var n = this, r = this.getId(e);
      this.idNodeMap.delete(r), e.childNodes && e.childNodes.forEach(function(i) {
        return n.removeNodeFromMap(i);
      });
    }, t.prototype.has = function(e) {
      return this.idNodeMap.has(e);
    }, t.prototype.hasNode = function(e) {
      return this.nodeMetaMap.has(e);
    }, t.prototype.add = function(e, n) {
      var r = n.id;
      this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, n);
    }, t.prototype.replace = function(e, n) {
      var r = this.getNode(e);
      if (r) {
        var i = this.nodeMetaMap.get(r);
        i && this.nodeMetaMap.set(n, i);
      }
      this.idNodeMap.set(e, n);
    }, t.prototype.reset = function() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }, t;
  }();
  function Go() {
    return new Kr();
  }
  var Fn = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
  function Vo(t, e) {
    e === void 0 && (e = {});
    var n = 1, r = 1;
    function i(A) {
      var v = A.match(/\n/g);
      v && (n += v.length);
      var M = A.lastIndexOf(`
`);
      r = M === -1 ? r + A.length : A.length - M;
    }
    function o() {
      var A = { line: n, column: r };
      return function(v) {
        return v.position = new s(A), m(), v;
      };
    }
    var s = function(A) {
      this.start = A, this.end = { line: n, column: r }, this.source = e.source;
    };
    s.prototype.content = t;
    var a = [];
    function l(A) {
      var v = new Error("".concat(e.source || "", ":").concat(n, ":").concat(r, ": ").concat(A));
      if (v.reason = A, v.filename = e.source, v.line = n, v.column = r, v.source = t, !e.silent)
        throw v;
      a.push(v);
    }
    function c() {
      return g(/^{\s*/);
    }
    function d() {
      return g(/^}/);
    }
    function u() {
      var A, v = [];
      for (m(), h(v); t.length && t.charAt(0) !== "}" && (A = b() || x()); )
        A !== !1 && (v.push(A), h(v));
      return v;
    }
    function g(A) {
      var v = A.exec(t);
      if (v) {
        var M = v[0];
        return i(M), t = t.slice(M.length), v;
      }
    }
    function m() {
      g(/^\s*/);
    }
    function h(A) {
      var v;
      for (A === void 0 && (A = []); v = p(); )
        v !== !1 && A.push(v), v = p();
      return A;
    }
    function p() {
      var A = o();
      if (t.charAt(0) === "/" && t.charAt(1) === "*") {
        for (var v = 2; t.charAt(v) !== "" && (t.charAt(v) !== "*" || t.charAt(v + 1) !== "/"); )
          ++v;
        if (v += 2, t.charAt(v - 1) === "")
          return l("End of comment missing");
        var M = t.slice(2, v - 2);
        return r += 2, i(M), t = t.slice(v), r += 2, A({ type: "comment", comment: M });
      }
    }
    function y() {
      var A = g(/^([^{]+)/);
      if (A)
        return we(A[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function(v) {
          return v.replace(/,/g, "‌");
        }).split(/\s*(?![^(]*\)),\s*/).map(function(v) {
          return v.replace(/\u200C/g, ",");
        });
    }
    function I() {
      var A = o(), v = g(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
      if (v) {
        var M = we(v[0]);
        if (!g(/^:\s*/))
          return l("property missing ':'");
        var T = g(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/), G = A({ type: "declaration", property: M.replace(Fn, ""), value: T ? we(T[0]).replace(Fn, "") : "" });
        return g(/^[;\s]*/), G;
      }
    }
    function f() {
      var A, v = [];
      if (!c())
        return l("missing '{'");
      for (h(v); A = I(); )
        A !== !1 && (v.push(A), h(v)), A = I();
      return d() ? v : l("missing '}'");
    }
    function C() {
      for (var A, v = [], M = o(); A = g(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/); )
        v.push(A[1]), g(/^,\s*/);
      if (v.length)
        return M({ type: "keyframe", values: v, declarations: f() });
    }
    var w, O = R("import"), F = R("charset"), W = R("namespace");
    function R(A) {
      var v = new RegExp("^@" + A + "\\s*([^;]+);");
      return function() {
        var M = o(), T = g(v);
        if (T) {
          var G = { type: A };
          return G[A] = T[1].trim(), M(G);
        }
      };
    }
    function b() {
      if (t[0] === "@")
        return function() {
          var A = o(), v = g(/^@([-\w]+)?keyframes\s*/);
          if (v) {
            var M = v[1];
            if (!(v = g(/^([-\w]+)\s*/)))
              return l("@keyframes missing name");
            var T, G = v[1];
            if (!c())
              return l("@keyframes missing '{'");
            for (var B = h(); T = C(); )
              B.push(T), B = B.concat(h());
            return d() ? A({ type: "keyframes", name: G, vendor: M, keyframes: B }) : l("@keyframes missing '}'");
          }
        }() || function() {
          var A = o(), v = g(/^@media *([^{]+)/);
          if (v) {
            var M = we(v[1]);
            if (!c())
              return l("@media missing '{'");
            var T = h().concat(u());
            return d() ? A({ type: "media", media: M, rules: T }) : l("@media missing '}'");
          }
        }() || function() {
          var A = o(), v = g(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
          if (v)
            return A({ type: "custom-media", name: we(v[1]), media: we(v[2]) });
        }() || function() {
          var A = o(), v = g(/^@supports *([^{]+)/);
          if (v) {
            var M = we(v[1]);
            if (!c())
              return l("@supports missing '{'");
            var T = h().concat(u());
            return d() ? A({ type: "supports", supports: M, rules: T }) : l("@supports missing '}'");
          }
        }() || O() || F() || W() || function() {
          var A = o(), v = g(/^@([-\w]+)?document *([^{]+)/);
          if (v) {
            var M = we(v[1]), T = we(v[2]);
            if (!c())
              return l("@document missing '{'");
            var G = h().concat(u());
            return d() ? A({ type: "document", document: T, vendor: M, rules: G }) : l("@document missing '}'");
          }
        }() || function() {
          var A = o();
          if (g(/^@page */)) {
            var v = y() || [];
            if (!c())
              return l("@page missing '{'");
            for (var M, T = h(); M = I(); )
              T.push(M), T = T.concat(h());
            return d() ? A({ type: "page", selectors: v, declarations: T }) : l("@page missing '}'");
          }
        }() || function() {
          var A = o();
          if (g(/^@host\s*/)) {
            if (!c())
              return l("@host missing '{'");
            var v = h().concat(u());
            return d() ? A({ type: "host", rules: v }) : l("@host missing '}'");
          }
        }() || function() {
          var A = o();
          if (g(/^@font-face\s*/)) {
            if (!c())
              return l("@font-face missing '{'");
            for (var v, M = h(); v = I(); )
              M.push(v), M = M.concat(h());
            return d() ? A({ type: "font-face", declarations: M }) : l("@font-face missing '}'");
          }
        }();
    }
    function x() {
      var A = o(), v = y();
      return v ? (h(), A({ type: "rule", selectors: v, declarations: f() })) : l("selector missing");
    }
    return on((w = u(), { type: "stylesheet", stylesheet: { source: e.source, rules: w, parsingErrors: a } }));
  }
  function we(t) {
    return t ? t.replace(/^\s+|\s+$/g, "") : "";
  }
  function on(t, e) {
    for (var n = t && typeof t.type == "string", r = n ? t : e, i = 0, o = Object.keys(t); i < o.length; i++) {
      var s = t[o[i]];
      Array.isArray(s) ? s.forEach(function(a) {
        on(a, r);
      }) : s && typeof s == "object" && on(s, r);
    }
    return n && Object.defineProperty(t, "parent", { configurable: !0, writable: !0, enumerable: !1, value: e || null }), t;
  }
  var On = { script: "noscript", altglyph: "altGlyph", altglyphdef: "altGlyphDef", altglyphitem: "altGlyphItem", animatecolor: "animateColor", animatemotion: "animateMotion", animatetransform: "animateTransform", clippath: "clipPath", feblend: "feBlend", fecolormatrix: "feColorMatrix", fecomponenttransfer: "feComponentTransfer", fecomposite: "feComposite", feconvolvematrix: "feConvolveMatrix", fediffuselighting: "feDiffuseLighting", fedisplacementmap: "feDisplacementMap", fedistantlight: "feDistantLight", fedropshadow: "feDropShadow", feflood: "feFlood", fefunca: "feFuncA", fefuncb: "feFuncB", fefuncg: "feFuncG", fefuncr: "feFuncR", fegaussianblur: "feGaussianBlur", feimage: "feImage", femerge: "feMerge", femergenode: "feMergeNode", femorphology: "feMorphology", feoffset: "feOffset", fepointlight: "fePointLight", fespecularlighting: "feSpecularLighting", fespotlight: "feSpotLight", fetile: "feTile", feturbulence: "feTurbulence", foreignobject: "foreignObject", glyphref: "glyphRef", lineargradient: "linearGradient", radialgradient: "radialGradient" }, Yr = /([^\\]):hover/, Zo = new RegExp(Yr.source, "g");
  function Ln(t, e) {
    var n = e == null ? void 0 : e.stylesWithHoverClass.get(t);
    if (n)
      return n;
    var r = Vo(t, { silent: !0 });
    if (!r.stylesheet)
      return t;
    var i = [];
    if (r.stylesheet.rules.forEach(function(a) {
      "selectors" in a && (a.selectors || []).forEach(function(l) {
        Yr.test(l) && i.push(l);
      });
    }), i.length === 0)
      return t;
    var o = new RegExp(i.filter(function(a, l) {
      return i.indexOf(a) === l;
    }).sort(function(a, l) {
      return l.length - a.length;
    }).map(function(a) {
      return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }).join("|"), "g"), s = t.replace(o, function(a) {
      var l = a.replace(Zo, "$1.\\:hover");
      return "".concat(a, ", ").concat(l);
    });
    return e == null || e.stylesWithHoverClass.set(t, s), s;
  }
  function Wn() {
    return { stylesWithHoverClass: /* @__PURE__ */ new Map() };
  }
  function Uo(t, e) {
    var n = e.doc, r = e.hackCss, i = e.cache;
    switch (t.type) {
      case le.Document:
        return n.implementation.createDocument(null, "", null);
      case le.DocumentType:
        return n.implementation.createDocumentType(t.name || "html", t.publicId, t.systemId);
      case le.Element:
        var o, s = function(f) {
          var C = On[f.tagName] ? On[f.tagName] : f.tagName;
          return C === "link" && f.attributes._cssText && (C = "style"), C;
        }(t);
        o = t.isSVG ? n.createElementNS("http://www.w3.org/2000/svg", s) : n.createElement(s);
        var a = {};
        for (var l in t.attributes)
          if (Object.prototype.hasOwnProperty.call(t.attributes, l)) {
            var c = t.attributes[l];
            if (s !== "option" || l !== "selected" || c !== !1)
              if (c === !0 && (c = ""), l.startsWith("rr_"))
                a[l] = c;
              else {
                var d = s === "textarea" && l === "value", u = s === "style" && l === "_cssText";
                if (u && r && typeof c == "string" && (c = Ln(c, i)), !d && !u || typeof c != "string")
                  try {
                    if (t.isSVG && l === "xlink:href")
                      o.setAttributeNS("http://www.w3.org/1999/xlink", l, c.toString());
                    else if (l === "onload" || l === "onclick" || l.substring(0, 7) === "onmouse")
                      o.setAttribute("_" + l, c.toString());
                    else {
                      if (s === "meta" && t.attributes["http-equiv"] === "Content-Security-Policy" && l === "content") {
                        o.setAttribute("csp-content", c.toString());
                        continue;
                      }
                      s === "link" && t.attributes.rel === "preload" && t.attributes.as === "script" || s === "link" && t.attributes.rel === "prefetch" && typeof t.attributes.href == "string" && t.attributes.href.endsWith(".js") || (s === "img" && t.attributes.srcset && t.attributes.rr_dataURL ? o.setAttribute("rrweb-original-srcset", t.attributes.srcset) : o.setAttribute(l, c.toString()));
                    }
                  } catch {
                  }
                else {
                  for (var g = n.createTextNode(c), m = 0, h = Array.from(o.childNodes); m < h.length; m++) {
                    var p = h[m];
                    p.nodeType === o.TEXT_NODE && o.removeChild(p);
                  }
                  o.appendChild(g);
                }
              }
          }
        var y = function(f) {
          var C = a[f];
          if (s === "canvas" && f === "rr_dataURL") {
            var w = document.createElement("img");
            w.onload = function() {
              var F = o.getContext("2d");
              F && F.drawImage(w, 0, 0, w.width, w.height);
            }, w.src = C.toString(), o.RRNodeType && (o.rr_dataURL = C.toString());
          } else if (s === "img" && f === "rr_dataURL") {
            var O = o;
            O.currentSrc.startsWith("data:") || (O.setAttribute("rrweb-original-src", t.attributes.src), O.src = C.toString());
          }
          if (f === "rr_width")
            o.style.width = C.toString();
          else if (f === "rr_height")
            o.style.height = C.toString();
          else if (f === "rr_mediaCurrentTime" && typeof C == "number")
            o.currentTime = C;
          else if (f === "rr_mediaState")
            switch (C) {
              case "played":
                o.play().catch(function(F) {
                  return console.warn("media playback error", F);
                });
                break;
              case "paused":
                o.pause();
            }
        };
        for (var I in a)
          y(I);
        if (t.isShadowHost)
          if (o.shadowRoot)
            for (; o.shadowRoot.firstChild; )
              o.shadowRoot.removeChild(o.shadowRoot.firstChild);
          else
            o.attachShadow({ mode: "open" });
        return o;
      case le.Text:
        return n.createTextNode(t.isStyle && r ? Ln(t.textContent, i) : t.textContent);
      case le.CDATA:
        return n.createCDATASection(t.textContent);
      case le.Comment:
        return n.createComment(t.textContent);
      default:
        return null;
    }
  }
  function lt(t, e) {
    var n = e.doc, r = e.mirror, i = e.skipChild, o = i !== void 0 && i, s = e.hackCss, a = s === void 0 || s, l = e.afterAppend, c = e.cache, d = Uo(t, { doc: n, hackCss: a, cache: c });
    if (!d)
      return null;
    if (t.rootId && r.getNode(t.rootId) !== n && r.replace(t.rootId, n), t.type === le.Document && (n.close(), n.open(), t.compatMode === "BackCompat" && t.childNodes && t.childNodes[0].type !== le.DocumentType && (t.childNodes[0].type === le.Element && "xmlns" in t.childNodes[0].attributes && t.childNodes[0].attributes.xmlns === "http://www.w3.org/1999/xhtml" ? n.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : n.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), d = n), r.add(d, t), (t.type === le.Document || t.type === le.Element) && !o)
      for (var u = 0, g = t.childNodes; u < g.length; u++) {
        var m = g[u], h = lt(m, { doc: n, mirror: r, skipChild: !1, hackCss: a, afterAppend: l, cache: c });
        h ? (m.isShadow && _o(d) && d.shadowRoot ? d.shadowRoot.appendChild(h) : d.appendChild(h), l && l(h, m.id)) : console.warn("Failed to rebuild", m);
      }
    return d;
  }
  function Po(t, e) {
    var n = e.doc, r = e.onVisit, i = e.hackCss, o = i === void 0 || i, s = e.afterAppend, a = e.cache, l = e.mirror, c = l === void 0 ? new Kr() : l, d = lt(t, { doc: n, mirror: c, skipChild: !1, hackCss: o, afterAppend: s, cache: a });
    return function(u, g) {
      for (var m = 0, h = u.getIds(); m < h.length; m++) {
        var p = h[m];
        u.has(p) && g(u.getNode(p));
      }
    }(c, function(u) {
      r && r(u), function(g, m) {
        var h = m.getMeta(g);
        if ((h == null ? void 0 : h.type) === le.Element) {
          var p = g;
          for (var y in h.attributes)
            if (Object.prototype.hasOwnProperty.call(h.attributes, y) && y.startsWith("rr_")) {
              var I = h.attributes[y];
              y === "rr_scrollLeft" && (p.scrollLeft = I), y === "rr_scrollTop" && (p.scrollTop = I);
            }
        }
      }(u, c);
    }), d;
  }
  const Ve = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
  let Bn = { map: {}, getId: () => (console.error(Ve), -1), getNode: () => (console.error(Ve), null), removeNodeFromMap() {
    console.error(Ve);
  }, has: () => (console.error(Ve), !1), reset() {
    console.error(Ve);
  } };
  function Ko(t) {
    const e = {}, n = (i, o) => {
      const s = { value: i, parent: o, children: [] };
      return e[i.node.id] = s, s;
    }, r = [];
    for (const i of t) {
      const { nextId: o, parentId: s } = i;
      if (o && o in e) {
        const a = e[o];
        if (a.parent) {
          const l = a.parent.children.indexOf(a);
          a.parent.children.splice(l, 0, n(i, a.parent));
        } else {
          const l = r.indexOf(a);
          r.splice(l, 0, n(i, null));
        }
      } else if (s in e) {
        const a = e[s];
        a.children.push(n(i, a));
      } else
        r.push(n(i, null));
    }
    return r;
  }
  function zr(t, e) {
    e(t.value);
    for (let n = t.children.length - 1; n >= 0; n--)
      zr(t.children[n], e);
  }
  function Pt(t, e) {
    return !!(t.nodeName === "IFRAME" && e.getMeta(t));
  }
  function Hr(t, e) {
    var n, r;
    const i = (r = (n = t.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView) === null || r === void 0 ? void 0 : r.frameElement;
    if (!i || i === e)
      return { x: 0, y: 0, relativeScale: 1, absoluteScale: 1 };
    const o = i.getBoundingClientRect(), s = Hr(i, e), a = o.height / i.clientHeight;
    return { x: o.x * s.relativeScale + s.x, y: o.y * s.relativeScale + s.y, relativeScale: a, absoluteScale: s.absoluteScale * a };
  }
  function Ct(t) {
    return !!(t != null && t.shadowRoot);
  }
  function nt(t, e) {
    const n = t[e[0]];
    return e.length === 1 ? n : nt(n.cssRules[e[1]].cssRules, e.slice(2));
  }
  function _n(t) {
    const e = [...t], n = e.pop();
    return { positions: e, index: n };
  }
  typeof window < "u" && window.Proxy && window.Reflect && (Bn = new Proxy(Bn, { get: (t, e, n) => (e === "map" && console.error(Ve), Reflect.get(t, e, n)) }));
  class Yo {
    constructor() {
      this.id = 1, this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map();
    }
    getId(e) {
      var n;
      return (n = this.styleIDMap.get(e)) !== null && n !== void 0 ? n : -1;
    }
    has(e) {
      return this.styleIDMap.has(e);
    }
    add(e, n) {
      if (this.has(e))
        return this.getId(e);
      let r;
      return r = n === void 0 ? this.id++ : n, this.styleIDMap.set(e, r), this.idStyleMap.set(r, e), r;
    }
    getStyle(e) {
      return this.idStyleMap.get(e) || null;
    }
    reset() {
      this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map(), this.id = 1;
    }
    generateId() {
      return this.id++;
    }
  }
  var te = ((t) => (t[t.DomContentLoaded = 0] = "DomContentLoaded", t[t.Load = 1] = "Load", t[t.FullSnapshot = 2] = "FullSnapshot", t[t.IncrementalSnapshot = 3] = "IncrementalSnapshot", t[t.Meta = 4] = "Meta", t[t.Custom = 5] = "Custom", t[t.Plugin = 6] = "Plugin", t))(te || {}), H = ((t) => (t[t.Mutation = 0] = "Mutation", t[t.MouseMove = 1] = "MouseMove", t[t.MouseInteraction = 2] = "MouseInteraction", t[t.Scroll = 3] = "Scroll", t[t.ViewportResize = 4] = "ViewportResize", t[t.Input = 5] = "Input", t[t.TouchMove = 6] = "TouchMove", t[t.MediaInteraction = 7] = "MediaInteraction", t[t.StyleSheetRule = 8] = "StyleSheetRule", t[t.CanvasMutation = 9] = "CanvasMutation", t[t.Font = 10] = "Font", t[t.Log = 11] = "Log", t[t.Drag = 12] = "Drag", t[t.StyleDeclaration = 13] = "StyleDeclaration", t[t.Selection = 14] = "Selection", t[t.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", t))(H || {}), he = ((t) => (t[t.MouseUp = 0] = "MouseUp", t[t.MouseDown = 1] = "MouseDown", t[t.Click = 2] = "Click", t[t.ContextMenu = 3] = "ContextMenu", t[t.DblClick = 4] = "DblClick", t[t.Focus = 5] = "Focus", t[t.Blur = 6] = "Blur", t[t.TouchStart = 7] = "TouchStart", t[t.TouchMove_Departed = 8] = "TouchMove_Departed", t[t.TouchEnd = 9] = "TouchEnd", t[t.TouchCancel = 10] = "TouchCancel", t))(he || {}), Ft = ((t) => (t[t["2D"] = 0] = "2D", t[t.WebGL = 1] = "WebGL", t[t.WebGL2 = 2] = "WebGL2", t))(Ft || {}), j = ((t) => (t.Start = "start", t.Pause = "pause", t.Resume = "resume", t.Resize = "resize", t.Finish = "finish", t.FullsnapshotRebuilded = "fullsnapshot-rebuilded", t.LoadStylesheetStart = "load-stylesheet-start", t.LoadStylesheetEnd = "load-stylesheet-end", t.SkipStart = "skip-start", t.SkipEnd = "skip-end", t.MouseInteraction = "mouse-interaction", t.EventCast = "event-cast", t.CustomEvent = "custom-event", t.Flush = "flush", t.StateChange = "state-change", t.PlayBack = "play-back", t.Destroy = "destroy", t))(j || {});
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  function Le(t, e, n, r) {
    return new (n || (n = Promise))(function(i, o) {
      function s(c) {
        try {
          l(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function a(c) {
        try {
          l(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function l(c) {
        var d;
        c.done ? i(c.value) : (d = c.value, d instanceof n ? d : new n(function(u) {
          u(d);
        })).then(s, a);
      }
      l((r = r.apply(t, e || [])).next());
    });
  }
  for (var Gn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", rt = typeof Uint8Array > "u" ? [] : new Uint8Array(256), vt = 0; vt < Gn.length; vt++)
    rt[Gn.charCodeAt(vt)] = vt;
  var Qr = null;
  try {
    var zo = typeof We < "u" && typeof We.require == "function" && We.require("worker_threads") || typeof __non_webpack_require__ == "function" && __non_webpack_require__("worker_threads") || typeof require == "function" && require("worker_threads");
    Qr = zo.Worker;
  } catch {
  }
  function Ho(t, e, n) {
    var r = e === void 0 ? null : e, i = function(a, l) {
      return Buffer.from(a, "base64").toString(l ? "utf16" : "utf8");
    }(t, n !== void 0 && n), o = i.indexOf(`
`, 10) + 1, s = i.substring(o) + (r ? "//# sourceMappingURL=" + r : "");
    return function(a) {
      return new Qr(s, Object.assign({}, a, { eval: !0 }));
    };
  }
  var Vn, Zn, Un, U, Qo = Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
  Vn = "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo=", Zn = null, Un = !1, Qo && Ho(Vn, Zn, Un), function(t) {
    t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment";
  }(U || (U = {}));
  var Jo = function() {
    function t() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }
    return t.prototype.getId = function(e) {
      var n;
      if (!e)
        return -1;
      var r = (n = this.getMeta(e)) === null || n === void 0 ? void 0 : n.id;
      return r ?? -1;
    }, t.prototype.getNode = function(e) {
      return this.idNodeMap.get(e) || null;
    }, t.prototype.getIds = function() {
      return Array.from(this.idNodeMap.keys());
    }, t.prototype.getMeta = function(e) {
      return this.nodeMetaMap.get(e) || null;
    }, t.prototype.removeNodeFromMap = function(e) {
      var n = this, r = this.getId(e);
      this.idNodeMap.delete(r), e.childNodes && e.childNodes.forEach(function(i) {
        return n.removeNodeFromMap(i);
      });
    }, t.prototype.has = function(e) {
      return this.idNodeMap.has(e);
    }, t.prototype.hasNode = function(e) {
      return this.nodeMetaMap.has(e);
    }, t.prototype.add = function(e, n) {
      var r = n.id;
      this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, n);
    }, t.prototype.replace = function(e, n) {
      var r = this.getNode(e);
      if (r) {
        var i = this.nodeMetaMap.get(r);
        i && this.nodeMetaMap.set(n, i);
      }
      this.idNodeMap.set(e, n);
    }, t.prototype.reset = function() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }, t;
  }();
  function Pn(t) {
    const e = [];
    for (const n in t) {
      const r = t[n];
      if (typeof r != "string")
        continue;
      const i = qo(n);
      e.push(`${i}: ${r};`);
    }
    return e.join(" ");
  }
  const $o = /-([a-z])/g, Xo = /^--[a-zA-Z0-9-]+$/, Kt = (t) => Xo.test(t) ? t : t.replace($o, (e, n) => n ? n.toUpperCase() : ""), jo = /\B([A-Z])/g, qo = (t) => t.replace(jo, "-$1").toLowerCase();
  class ve {
    constructor(...e) {
      this.childNodes = [], this.parentElement = null, this.parentNode = null, this.ELEMENT_NODE = re.ELEMENT_NODE, this.TEXT_NODE = re.TEXT_NODE;
    }
    get firstChild() {
      return this.childNodes[0] || null;
    }
    get lastChild() {
      return this.childNodes[this.childNodes.length - 1] || null;
    }
    get nextSibling() {
      const e = this.parentNode;
      if (!e)
        return null;
      const n = e.childNodes, r = n.indexOf(this);
      return n[r + 1] || null;
    }
    contains(e) {
      if (e === this)
        return !0;
      for (const n of this.childNodes)
        if (n.contains(e))
          return !0;
      return !1;
    }
    appendChild(e) {
      throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.");
    }
    insertBefore(e, n) {
      throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.");
    }
    removeChild(e) {
      throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.");
    }
    toString() {
      return "RRNode";
    }
  }
  function Jr(t) {
    return class extends t {
      constructor(e, n, r) {
        super(), this.nodeType = re.DOCUMENT_TYPE_NODE, this.RRNodeType = U.DocumentType, this.textContent = null, this.name = e, this.publicId = n, this.systemId = r, this.nodeName = e;
      }
      toString() {
        return "RRDocumentType";
      }
    };
  }
  function $r(t) {
    return class extends t {
      constructor(e) {
        super(), this.nodeType = re.ELEMENT_NODE, this.RRNodeType = U.Element, this.attributes = {}, this.shadowRoot = null, this.tagName = e.toUpperCase(), this.nodeName = e.toUpperCase();
      }
      get textContent() {
        let e = "";
        return this.childNodes.forEach((n) => e += n.textContent), e;
      }
      set textContent(e) {
        this.childNodes = [this.ownerDocument.createTextNode(e)];
      }
      get classList() {
        return new es(this.attributes.class, (e) => {
          this.attributes.class = e;
        });
      }
      get id() {
        return this.attributes.id || "";
      }
      get className() {
        return this.attributes.class || "";
      }
      get style() {
        const e = this.attributes.style ? function(r) {
          const i = {}, o = /:(.+)/;
          return r.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach(function(s) {
            if (s) {
              const a = s.split(o);
              a.length > 1 && (i[Kt(a[0].trim())] = a[1].trim());
            }
          }), i;
        }(this.attributes.style) : {}, n = /\B([A-Z])/g;
        return e.setProperty = (r, i, o) => {
          if (n.test(r))
            return;
          const s = Kt(r);
          i ? e[s] = i : delete e[s], o === "important" && (e[s] += " !important"), this.attributes.style = Pn(e);
        }, e.removeProperty = (r) => {
          if (n.test(r))
            return "";
          const i = Kt(r), o = e[i] || "";
          return delete e[i], this.attributes.style = Pn(e), o;
        }, e;
      }
      getAttribute(e) {
        return this.attributes[e] || null;
      }
      setAttribute(e, n) {
        this.attributes[e] = n;
      }
      setAttributeNS(e, n, r) {
        this.setAttribute(n, r);
      }
      removeAttribute(e) {
        delete this.attributes[e];
      }
      appendChild(e) {
        return this.childNodes.push(e), e.parentNode = this, e.parentElement = this, e;
      }
      insertBefore(e, n) {
        if (n === null)
          return this.appendChild(e);
        const r = this.childNodes.indexOf(n);
        if (r == -1)
          throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
        return this.childNodes.splice(r, 0, e), e.parentElement = this, e.parentNode = this, e;
      }
      removeChild(e) {
        const n = this.childNodes.indexOf(e);
        if (n === -1)
          throw new Error("Failed to execute 'removeChild' on 'RRElement': The RRNode to be removed is not a child of this RRNode.");
        return this.childNodes.splice(n, 1), e.parentElement = null, e.parentNode = null, e;
      }
      attachShadow(e) {
        const n = this.ownerDocument.createElement("SHADOWROOT");
        return this.shadowRoot = n, n;
      }
      dispatchEvent(e) {
        return !0;
      }
      toString() {
        let e = "";
        for (const n in this.attributes)
          e += `${n}="${this.attributes[n]}" `;
        return `${this.tagName} ${e}`;
      }
    };
  }
  function Xr(t) {
    return class extends t {
      constructor(e) {
        super(), this.nodeType = re.TEXT_NODE, this.nodeName = "#text", this.RRNodeType = U.Text, this.data = e;
      }
      get textContent() {
        return this.data;
      }
      set textContent(e) {
        this.data = e;
      }
      toString() {
        return `RRText text=${JSON.stringify(this.data)}`;
      }
    };
  }
  function jr(t) {
    return class extends t {
      constructor(e) {
        super(), this.nodeType = re.COMMENT_NODE, this.nodeName = "#comment", this.RRNodeType = U.Comment, this.data = e;
      }
      get textContent() {
        return this.data;
      }
      set textContent(e) {
        this.data = e;
      }
      toString() {
        return `RRComment text=${JSON.stringify(this.data)}`;
      }
    };
  }
  function qr(t) {
    return class extends t {
      constructor(e) {
        super(), this.nodeName = "#cdata-section", this.nodeType = re.CDATA_SECTION_NODE, this.RRNodeType = U.CDATA, this.data = e;
      }
      get textContent() {
        return this.data;
      }
      set textContent(e) {
        this.data = e;
      }
      toString() {
        return `RRCDATASection data=${JSON.stringify(this.data)}`;
      }
    };
  }
  class es {
    constructor(e, n) {
      if (this.classes = [], this.add = (...r) => {
        for (const i of r) {
          const o = String(i);
          this.classes.indexOf(o) >= 0 || this.classes.push(o);
        }
        this.onChange && this.onChange(this.classes.join(" "));
      }, this.remove = (...r) => {
        this.classes = this.classes.filter((i) => r.indexOf(i) === -1), this.onChange && this.onChange(this.classes.join(" "));
      }, e) {
        const r = e.trim().split(/\s+/);
        this.classes.push(...r);
      }
      this.onChange = n;
    }
  }
  var re;
  (function(t) {
    t[t.PLACEHOLDER = 0] = "PLACEHOLDER", t[t.ELEMENT_NODE = 1] = "ELEMENT_NODE", t[t.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", t[t.TEXT_NODE = 3] = "TEXT_NODE", t[t.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", t[t.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", t[t.ENTITY_NODE = 6] = "ENTITY_NODE", t[t.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", t[t.COMMENT_NODE = 8] = "COMMENT_NODE", t[t.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", t[t.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", t[t.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE";
  })(re || (re = {}));
  const sn = { svg: "http://www.w3.org/2000/svg", "xlink:href": "http://www.w3.org/1999/xlink", xmlns: "http://www.w3.org/2000/xmlns/" }, ts = { altglyph: "altGlyph", altglyphdef: "altGlyphDef", altglyphitem: "altGlyphItem", animatecolor: "animateColor", animatemotion: "animateMotion", animatetransform: "animateTransform", clippath: "clipPath", feblend: "feBlend", fecolormatrix: "feColorMatrix", fecomponenttransfer: "feComponentTransfer", fecomposite: "feComposite", feconvolvematrix: "feConvolveMatrix", fediffuselighting: "feDiffuseLighting", fedisplacementmap: "feDisplacementMap", fedistantlight: "feDistantLight", fedropshadow: "feDropShadow", feflood: "feFlood", fefunca: "feFuncA", fefuncb: "feFuncB", fefuncg: "feFuncG", fefuncr: "feFuncR", fegaussianblur: "feGaussianBlur", feimage: "feImage", femerge: "feMerge", femergenode: "feMergeNode", femorphology: "feMorphology", feoffset: "feOffset", fepointlight: "fePointLight", fespecularlighting: "feSpecularLighting", fespotlight: "feSpotLight", fetile: "feTile", feturbulence: "feTurbulence", foreignobject: "foreignObject", glyphref: "glyphRef", lineargradient: "linearGradient", radialgradient: "radialGradient" };
  function be(t, e, n, r) {
    const i = t.childNodes, o = e.childNodes;
    r = r || e.mirror || e.ownerDocument.mirror, (i.length > 0 || o.length > 0) && Kn(Array.from(i), o, t, n, r);
    let s = null, a = null;
    switch (e.RRNodeType) {
      case U.Document:
        a = e.scrollData;
        break;
      case U.Element: {
        const l = t, c = e;
        switch (function(d, u, g) {
          const m = d.attributes, h = u.attributes;
          for (const p in h) {
            const y = h[p], I = g.getMeta(u);
            if (I && "isSVG" in I && I.isSVG && sn[p])
              d.setAttributeNS(sn[p], p, y);
            else if (u.tagName === "CANVAS" && p === "rr_dataURL") {
              const f = document.createElement("img");
              f.src = y, f.onload = () => {
                const C = d.getContext("2d");
                C && C.drawImage(f, 0, 0, f.width, f.height);
              };
            } else
              d.setAttribute(p, y);
          }
          for (const { name: p } of Array.from(m))
            p in h || d.removeAttribute(p);
          u.scrollLeft && (d.scrollLeft = u.scrollLeft), u.scrollTop && (d.scrollTop = u.scrollTop);
        }(l, c, r), a = c.scrollData, s = c.inputData, c.tagName) {
          case "AUDIO":
          case "VIDEO": {
            const d = t, u = c;
            u.paused !== void 0 && (u.paused ? d.pause() : d.play()), u.muted !== void 0 && (d.muted = u.muted), u.volume !== void 0 && (d.volume = u.volume), u.currentTime !== void 0 && (d.currentTime = u.currentTime), u.playbackRate !== void 0 && (d.playbackRate = u.playbackRate);
            break;
          }
          case "CANVAS":
            {
              const d = e;
              if (d.rr_dataURL !== null) {
                const u = document.createElement("img");
                u.onload = () => {
                  const g = l.getContext("2d");
                  g && g.drawImage(u, 0, 0, u.width, u.height);
                }, u.src = d.rr_dataURL;
              }
              d.canvasMutations.forEach((u) => n.applyCanvas(u.event, u.mutation, t));
            }
            break;
          case "STYLE": {
            const d = l.sheet;
            d && e.rules.forEach((u) => n.applyStyleSheetMutation(u, d));
          }
        }
        if (c.shadowRoot) {
          l.shadowRoot || l.attachShadow({ mode: "open" });
          const d = l.shadowRoot.childNodes, u = c.shadowRoot.childNodes;
          (d.length > 0 || u.length > 0) && Kn(Array.from(d), u, l.shadowRoot, n, r);
        }
        break;
      }
      case U.Text:
      case U.Comment:
      case U.CDATA:
        t.textContent !== e.data && (t.textContent = e.data);
    }
    if (a && n.applyScroll(a, !0), s && n.applyInput(s), e.nodeName === "IFRAME") {
      const l = t.contentDocument, c = e;
      if (l) {
        const d = r.getMeta(c.contentDocument);
        d && n.mirror.add(l, Object.assign({}, d)), be(l, c.contentDocument, n, r);
      }
    }
  }
  function Kn(t, e, n, r, i) {
    var o;
    let s, a, l = 0, c = t.length - 1, d = 0, u = e.length - 1, g = t[l], m = t[c], h = e[d], p = e[u];
    for (; l <= c && d <= u; ) {
      const y = r.mirror.getId(g), I = r.mirror.getId(m), f = i.getId(h), C = i.getId(p);
      if (g === void 0)
        g = t[++l];
      else if (m === void 0)
        m = t[--c];
      else if (y !== -1 && y === f)
        be(g, h, r, i), g = t[++l], h = e[++d];
      else if (I !== -1 && I === C)
        be(m, p, r, i), m = t[--c], p = e[--u];
      else if (y !== -1 && y === C)
        n.insertBefore(g, m.nextSibling), be(g, p, r, i), g = t[++l], p = e[--u];
      else if (I !== -1 && I === f)
        n.insertBefore(m, g), be(m, h, r, i), m = t[--c], h = e[++d];
      else {
        if (!s) {
          s = {};
          for (let w = l; w <= c; w++) {
            const O = t[w];
            O && r.mirror.hasNode(O) && (s[r.mirror.getId(O)] = w);
          }
        }
        if (a = s[i.getId(h)], a) {
          const w = t[a];
          n.insertBefore(w, g), be(w, h, r, i), t[a] = void 0;
        } else {
          const w = an(h, r.mirror, i);
          n.nodeName === "#document" && ((o = r.mirror.getMeta(w)) === null || o === void 0 ? void 0 : o.type) === U.Element && n.documentElement && (n.removeChild(n.documentElement), t[l] = void 0, g = void 0), n.insertBefore(w, g || null), be(w, h, r, i);
        }
        h = e[++d];
      }
    }
    if (l > c) {
      const y = e[u + 1];
      let I = null;
      for (y && n.childNodes.forEach((f) => {
        r.mirror.getId(f) === i.getId(y) && (I = f);
      }); d <= u; ++d) {
        const f = an(e[d], r.mirror, i);
        n.insertBefore(f, I), be(f, e[d], r, i);
      }
    } else if (d > u)
      for (; l <= c; l++) {
        const y = t[l];
        y && (n.removeChild(y), r.mirror.removeNodeFromMap(y));
      }
  }
  function an(t, e, n) {
    const r = n.getId(t), i = n.getMeta(t);
    let o = null;
    if (r > -1 && (o = e.getNode(r)), o !== null)
      return o;
    switch (t.RRNodeType) {
      case U.Document:
        o = new Document();
        break;
      case U.DocumentType:
        o = document.implementation.createDocumentType(t.name, t.publicId, t.systemId);
        break;
      case U.Element: {
        let s = t.tagName.toLowerCase();
        s = ts[s] || s, o = i && "isSVG" in i && (i != null && i.isSVG) ? document.createElementNS(sn.svg, s) : document.createElement(t.tagName);
        break;
      }
      case U.Text:
        o = document.createTextNode(t.data);
        break;
      case U.Comment:
        o = document.createComment(t.data);
        break;
      case U.CDATA:
        o = document.createCDATASection(t.data);
    }
    return i && e.add(o, Object.assign({}, i)), o;
  }
  class je extends function(e) {
    return class ei extends e {
      constructor() {
        super(...arguments), this.nodeType = re.DOCUMENT_NODE, this.nodeName = "#document", this.compatMode = "CSS1Compat", this.RRNodeType = U.Document, this.textContent = null;
      }
      get documentElement() {
        return this.childNodes.find((r) => r.RRNodeType === U.Element && r.tagName === "HTML") || null;
      }
      get body() {
        var r;
        return ((r = this.documentElement) === null || r === void 0 ? void 0 : r.childNodes.find((i) => i.RRNodeType === U.Element && i.tagName === "BODY")) || null;
      }
      get head() {
        var r;
        return ((r = this.documentElement) === null || r === void 0 ? void 0 : r.childNodes.find((i) => i.RRNodeType === U.Element && i.tagName === "HEAD")) || null;
      }
      get implementation() {
        return this;
      }
      get firstElementChild() {
        return this.documentElement;
      }
      appendChild(r) {
        const i = r.RRNodeType;
        if ((i === U.Element || i === U.DocumentType) && this.childNodes.some((o) => o.RRNodeType === i))
          throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${i === U.Element ? "RRElement" : "RRDoctype"} on RRDocument allowed.`);
        return r.parentElement = null, r.parentNode = this, this.childNodes.push(r), r;
      }
      insertBefore(r, i) {
        const o = r.RRNodeType;
        if ((o === U.Element || o === U.DocumentType) && this.childNodes.some((a) => a.RRNodeType === o))
          throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${o === U.Element ? "RRElement" : "RRDoctype"} on RRDocument allowed.`);
        if (i === null)
          return this.appendChild(r);
        const s = this.childNodes.indexOf(i);
        if (s == -1)
          throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
        return this.childNodes.splice(s, 0, r), r.parentElement = null, r.parentNode = this, r;
      }
      removeChild(r) {
        const i = this.childNodes.indexOf(r);
        if (i === -1)
          throw new Error("Failed to execute 'removeChild' on 'RRDocument': The RRNode to be removed is not a child of this RRNode.");
        return this.childNodes.splice(i, 1), r.parentElement = null, r.parentNode = null, r;
      }
      open() {
        this.childNodes = [];
      }
      close() {
      }
      write(r) {
        let i;
        if (r === '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' ? i = "-//W3C//DTD XHTML 1.0 Transitional//EN" : r === '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' && (i = "-//W3C//DTD HTML 4.0 Transitional//EN"), i) {
          const o = this.createDocumentType("html", i, "");
          this.open(), this.appendChild(o);
        }
      }
      createDocument(r, i, o) {
        return new ei();
      }
      createDocumentType(r, i, o) {
        const s = new (Jr(ve))(r, i, o);
        return s.ownerDocument = this, s;
      }
      createElement(r) {
        const i = new ($r(ve))(r);
        return i.ownerDocument = this, i;
      }
      createElementNS(r, i) {
        return this.createElement(i);
      }
      createTextNode(r) {
        const i = new (Xr(ve))(r);
        return i.ownerDocument = this, i;
      }
      createComment(r) {
        const i = new (jr(ve))(r);
        return i.ownerDocument = this, i;
      }
      createCDATASection(r) {
        const i = new (qr(ve))(r);
        return i.ownerDocument = this, i;
      }
      toString() {
        return "RRDocument";
      }
    };
  }(ve) {
    constructor(e) {
      super(), this.UNSERIALIZED_STARTING_ID = -2, this._unserializedId = this.UNSERIALIZED_STARTING_ID, this.mirror = new us(), this.scrollData = null, e && (this.mirror = e);
    }
    get unserializedId() {
      return this._unserializedId--;
    }
    createDocument(e, n, r) {
      return new je();
    }
    createDocumentType(e, n, r) {
      const i = new ns(e, n, r);
      return i.ownerDocument = this, i;
    }
    createElement(e) {
      const n = e.toUpperCase();
      let r;
      switch (n) {
        case "AUDIO":
        case "VIDEO":
          r = new rs(n);
          break;
        case "IFRAME":
          r = new ss(n, this.mirror);
          break;
        case "CANVAS":
          r = new is(n);
          break;
        case "STYLE":
          r = new os(n);
          break;
        default:
          r = new mt(n);
      }
      return r.ownerDocument = this, r;
    }
    createComment(e) {
      const n = new ls(e);
      return n.ownerDocument = this, n;
    }
    createCDATASection(e) {
      const n = new cs(e);
      return n.ownerDocument = this, n;
    }
    createTextNode(e) {
      const n = new as(e);
      return n.ownerDocument = this, n;
    }
    destroyTree() {
      this.childNodes = [], this.mirror.reset();
    }
    open() {
      super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID;
    }
  }
  const ns = Jr(ve);
  class mt extends $r(ve) {
    constructor() {
      super(...arguments), this.inputData = null, this.scrollData = null;
    }
  }
  class rs extends function(e) {
    return class extends e {
      attachShadow(n) {
        throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow");
      }
      play() {
        this.paused = !1;
      }
      pause() {
        this.paused = !0;
      }
    };
  }(mt) {
  }
  class is extends mt {
    constructor() {
      super(...arguments), this.rr_dataURL = null, this.canvasMutations = [];
    }
    getContext() {
      return null;
    }
  }
  class os extends mt {
    constructor() {
      super(...arguments), this.rules = [];
    }
  }
  class ss extends mt {
    constructor(e, n) {
      super(e), this.contentDocument = new je(), this.contentDocument.mirror = n;
    }
  }
  const as = Xr(ve), ls = jr(ve), cs = qr(ve);
  function ti(t, e, n, r) {
    let i;
    switch (t.nodeType) {
      case re.DOCUMENT_NODE:
        r && r.nodeName === "IFRAME" ? i = r.contentDocument : (i = e, i.compatMode = t.compatMode);
        break;
      case re.DOCUMENT_TYPE_NODE: {
        const s = t;
        i = e.createDocumentType(s.name, s.publicId, s.systemId);
        break;
      }
      case re.ELEMENT_NODE: {
        const s = t, a = function(c) {
          return c instanceof HTMLFormElement ? "FORM" : c.tagName.toUpperCase();
        }(s);
        i = e.createElement(a);
        const l = i;
        for (const { name: c, value: d } of Array.from(s.attributes))
          l.attributes[c] = d;
        s.scrollLeft && (l.scrollLeft = s.scrollLeft), s.scrollTop && (l.scrollTop = s.scrollTop);
        break;
      }
      case re.TEXT_NODE:
        i = e.createTextNode(t.textContent || "");
        break;
      case re.CDATA_SECTION_NODE:
        i = e.createCDATASection(t.data);
        break;
      case re.COMMENT_NODE:
        i = e.createComment(t.textContent || "");
        break;
      case re.DOCUMENT_FRAGMENT_NODE:
        i = r.attachShadow({ mode: "open" });
        break;
      default:
        return null;
    }
    let o = n.getMeta(t);
    return e instanceof je && (o || (o = ni(i, e.unserializedId), n.add(t, o)), e.mirror.add(i, Object.assign({}, o))), i;
  }
  function ds(t, e = function() {
    return new Jo();
  }(), n = new je()) {
    return function r(i, o) {
      const s = ti(i, n, e, o);
      if (s !== null)
        if ((o == null ? void 0 : o.nodeName) !== "IFRAME" && i.nodeType !== re.DOCUMENT_FRAGMENT_NODE && (o == null || o.appendChild(s), s.parentNode = o, s.parentElement = o), i.nodeName === "IFRAME") {
          const a = i.contentDocument;
          a && r(a, s);
        } else
          i.nodeType !== re.DOCUMENT_NODE && i.nodeType !== re.ELEMENT_NODE && i.nodeType !== re.DOCUMENT_FRAGMENT_NODE || (i.nodeType === re.ELEMENT_NODE && i.shadowRoot && r(i.shadowRoot, s), i.childNodes.forEach((a) => r(a, s)));
    }(t, null), n;
  }
  class us {
    constructor() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }
    getId(e) {
      var n;
      if (!e)
        return -1;
      const r = (n = this.getMeta(e)) === null || n === void 0 ? void 0 : n.id;
      return r ?? -1;
    }
    getNode(e) {
      return this.idNodeMap.get(e) || null;
    }
    getIds() {
      return Array.from(this.idNodeMap.keys());
    }
    getMeta(e) {
      return this.nodeMetaMap.get(e) || null;
    }
    removeNodeFromMap(e) {
      const n = this.getId(e);
      this.idNodeMap.delete(n), e.childNodes && e.childNodes.forEach((r) => this.removeNodeFromMap(r));
    }
    has(e) {
      return this.idNodeMap.has(e);
    }
    hasNode(e) {
      return this.nodeMetaMap.has(e);
    }
    add(e, n) {
      const r = n.id;
      this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, n);
    }
    replace(e, n) {
      const r = this.getNode(e);
      if (r) {
        const i = this.nodeMetaMap.get(r);
        i && this.nodeMetaMap.set(n, i);
      }
      this.idNodeMap.set(e, n);
    }
    reset() {
      this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }
  }
  function ni(t, e) {
    switch (t.RRNodeType) {
      case U.Document:
        return { id: e, type: t.RRNodeType, childNodes: [] };
      case U.DocumentType: {
        const n = t;
        return { id: e, type: t.RRNodeType, name: n.name, publicId: n.publicId, systemId: n.systemId };
      }
      case U.Element:
        return { id: e, type: t.RRNodeType, tagName: t.tagName.toLowerCase(), attributes: {}, childNodes: [] };
      case U.Text:
      case U.Comment:
        return { id: e, type: t.RRNodeType, textContent: t.textContent || "" };
      case U.CDATA:
        return { id: e, type: t.RRNodeType, textContent: "" };
    }
  }
  var ye = Uint8Array, Me = Uint16Array, ln = Uint32Array, ri = new ye([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), ii = new ye([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), hs = new ye([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), oi = function(t, e) {
    for (var n = new Me(31), r = 0; r < 31; ++r)
      n[r] = e += 1 << t[r - 1];
    var i = new ln(n[30]);
    for (r = 1; r < 30; ++r)
      for (var o = n[r]; o < n[r + 1]; ++o)
        i[o] = o - n[r] << 5 | r;
    return [n, i];
  }, si = oi(ri, 2), ai = si[0], gs = si[1];
  ai[28] = 258, gs[258] = 28;
  for (var ps = oi(ii, 0)[0], cn = new Me(32768), ne = 0; ne < 32768; ++ne) {
    var De = (43690 & ne) >>> 1 | (21845 & ne) << 1;
    De = (61680 & (De = (52428 & De) >>> 2 | (13107 & De) << 2)) >>> 4 | (3855 & De) << 4, cn[ne] = ((65280 & De) >>> 8 | (255 & De) << 8) >>> 1;
  }
  var ct = function(t, e, n) {
    for (var r = t.length, i = 0, o = new Me(e); i < r; ++i)
      ++o[t[i] - 1];
    var s, a = new Me(e);
    for (i = 0; i < e; ++i)
      a[i] = a[i - 1] + o[i - 1] << 1;
    if (n) {
      s = new Me(1 << e);
      var l = 15 - e;
      for (i = 0; i < r; ++i)
        if (t[i])
          for (var c = i << 4 | t[i], d = e - t[i], u = a[t[i] - 1]++ << d, g = u | (1 << d) - 1; u <= g; ++u)
            s[cn[u] >>> l] = c;
    } else
      for (s = new Me(r), i = 0; i < r; ++i)
        s[i] = cn[a[t[i] - 1]++] >>> 15 - t[i];
    return s;
  }, ft = new ye(288);
  for (ne = 0; ne < 144; ++ne)
    ft[ne] = 8;
  for (ne = 144; ne < 256; ++ne)
    ft[ne] = 9;
  for (ne = 256; ne < 280; ++ne)
    ft[ne] = 7;
  for (ne = 280; ne < 288; ++ne)
    ft[ne] = 8;
  var li = new ye(32);
  for (ne = 0; ne < 32; ++ne)
    li[ne] = 5;
  var ms = ct(ft, 9, 1), fs = ct(li, 5, 1), Yt = function(t) {
    for (var e = t[0], n = 1; n < t.length; ++n)
      t[n] > e && (e = t[n]);
    return e;
  }, Ie = function(t, e, n) {
    var r = e / 8 >> 0;
    return (t[r] | t[r + 1] << 8) >>> (7 & e) & n;
  }, zt = function(t, e) {
    var n = e / 8 >> 0;
    return (t[n] | t[n + 1] << 8 | t[n + 2] << 16) >>> (7 & e);
  }, ci = function(t, e, n) {
    (e == null || e < 0) && (e = 0), (n == null || n > t.length) && (n = t.length);
    var r = new (t instanceof Me ? Me : t instanceof ln ? ln : ye)(n - e);
    return r.set(t.subarray(e, n)), r;
  };
  function ys(t, e) {
    return function(n, r, i) {
      var o = n.length, s = !r || i, a = !i || i.i;
      i || (i = {}), r || (r = new ye(3 * o));
      var l, c = function(P) {
        var de = r.length;
        if (P > de) {
          var Y = new ye(Math.max(2 * de, P));
          Y.set(r), r = Y;
        }
      }, d = i.f || 0, u = i.p || 0, g = i.b || 0, m = i.l, h = i.d, p = i.m, y = i.n, I = 8 * o;
      do {
        if (!m) {
          i.f = d = Ie(n, u, 1);
          var f = Ie(n, u + 1, 3);
          if (u += 3, !f) {
            var C = n[(T = ((l = u) / 8 >> 0) + (7 & l && 1) + 4) - 4] | n[T - 3] << 8, w = T + C;
            if (w > o) {
              if (a)
                throw "unexpected EOF";
              break;
            }
            s && c(g + C), r.set(n.subarray(T, w), g), i.b = g += C, i.p = u = 8 * w;
            continue;
          }
          if (f == 1)
            m = ms, h = fs, p = 9, y = 5;
          else {
            if (f != 2)
              throw "invalid block type";
            var O = Ie(n, u, 31) + 257, F = Ie(n, u + 10, 15) + 4, W = O + Ie(n, u + 5, 31) + 1;
            u += 14;
            for (var R = new ye(W), b = new ye(19), x = 0; x < F; ++x)
              b[hs[x]] = Ie(n, u + 3 * x, 7);
            u += 3 * F;
            var A = Yt(b), v = (1 << A) - 1;
            if (!a && u + W * (A + 7) > I)
              break;
            var M = ct(b, A, 1);
            for (x = 0; x < W; ) {
              var T, G = M[Ie(n, u, v)];
              if (u += 15 & G, (T = G >>> 4) < 16)
                R[x++] = T;
              else {
                var B = 0, S = 0;
                for (T == 16 ? (S = 3 + Ie(n, u, 3), u += 2, B = R[x - 1]) : T == 17 ? (S = 3 + Ie(n, u, 7), u += 3) : T == 18 && (S = 11 + Ie(n, u, 127), u += 7); S--; )
                  R[x++] = B;
              }
            }
            var _ = R.subarray(0, O), D = R.subarray(O);
            p = Yt(_), y = Yt(D), m = ct(_, p, 1), h = ct(D, y, 1);
          }
          if (u > I)
            throw "unexpected EOF";
        }
        s && c(g + 131072);
        for (var Z = (1 << p) - 1, X = (1 << y) - 1, $ = p + y + 18; a || u + $ < I; ) {
          var z = (B = m[zt(n, u) & Z]) >>> 4;
          if ((u += 15 & B) > I)
            throw "unexpected EOF";
          if (!B)
            throw "invalid length/literal";
          if (z < 256)
            r[g++] = z;
          else {
            if (z == 256) {
              m = null;
              break;
            }
            var N = z - 254;
            if (z > 264) {
              var V = ri[x = z - 257];
              N = Ie(n, u, (1 << V) - 1) + ai[x], u += V;
            }
            var E = h[zt(n, u) & X], q = E >>> 4;
            if (!E)
              throw "invalid distance";
            if (u += 15 & E, D = ps[q], q > 3 && (V = ii[q], D += zt(n, u) & (1 << V) - 1, u += V), u > I)
              throw "unexpected EOF";
            s && c(g + 131072);
            for (var k = g + N; g < k; g += 4)
              r[g] = r[g - D], r[g + 1] = r[g + 1 - D], r[g + 2] = r[g + 2 - D], r[g + 3] = r[g + 3 - D];
            g = k;
          }
        }
        i.l = m, i.p = u, i.b = g, m && (d = 1, i.m = p, i.d = h, i.n = y);
      } while (!d);
      return g == r.length ? r : ci(r, 0, g);
    }((function(n) {
      if ((15 & n[0]) != 8 || n[0] >>> 4 > 7 || (n[0] << 8 | n[1]) % 31)
        throw "invalid zlib data";
      if (32 & n[1])
        throw "invalid zlib data: preset dictionaries not supported";
    }(t), t.subarray(2, -4)), e);
  }
  const Is = (t) => {
    if (typeof t != "string")
      return t;
    try {
      const e = JSON.parse(t);
      if (e.timestamp)
        return e;
    } catch {
    }
    try {
      const e = JSON.parse(function(n, r) {
        var i = "";
        if (!r && typeof TextDecoder < "u")
          return new TextDecoder().decode(n);
        for (var o = 0; o < n.length; ) {
          var s = n[o++];
          s < 128 || r ? i += String.fromCharCode(s) : s < 224 ? i += String.fromCharCode((31 & s) << 6 | 63 & n[o++]) : s < 240 ? i += String.fromCharCode((15 & s) << 12 | (63 & n[o++]) << 6 | 63 & n[o++]) : (s = ((15 & s) << 18 | (63 & n[o++]) << 12 | (63 & n[o++]) << 6 | 63 & n[o++]) - 65536, i += String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s));
        }
        return i;
      }(ys(function(n, r) {
        var i = n.length;
        if (!r && typeof TextEncoder < "u")
          return new TextEncoder().encode(n);
        for (var o = new ye(n.length + (n.length >>> 1)), s = 0, a = function(u) {
          o[s++] = u;
        }, l = 0; l < i; ++l) {
          if (s + 5 > o.length) {
            var c = new ye(s + 8 + (i - l << 1));
            c.set(o), o = c;
          }
          var d = n.charCodeAt(l);
          d < 128 || r ? a(d) : d < 2048 ? (a(192 | d >>> 6), a(128 | 63 & d)) : d > 55295 && d < 57344 ? (a(240 | (d = 65536 + (1047552 & d) | 1023 & n.charCodeAt(++l)) >>> 18), a(128 | d >>> 12 & 63), a(128 | d >>> 6 & 63), a(128 | 63 & d)) : (a(224 | d >>> 12), a(128 | d >>> 6 & 63), a(128 | 63 & d));
        }
        return ci(o, 0, s);
      }(t, !0))));
      if (e.v === "v1")
        return e;
      throw new Error(`These events were packed with packer ${e.v} which is incompatible with current packer v1.`);
    } catch (e) {
      throw console.error(e), new Error("Unknown data format.");
    }
  };
  function di(t) {
    return { all: t = t || /* @__PURE__ */ new Map(), on: function(e, n) {
      var r = t.get(e);
      r ? r.push(n) : t.set(e, [n]);
    }, off: function(e, n) {
      var r = t.get(e);
      r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : t.set(e, []));
    }, emit: function(e, n) {
      var r = t.get(e);
      r && r.slice().map(function(i) {
        i(n);
      }), (r = t.get("*")) && r.slice().map(function(i) {
        i(e, n);
      });
    } };
  }
  var ze, Cs = Object.freeze({ __proto__: null, default: di });
  function vs(t = window, e = document) {
    if ("scrollBehavior" in e.documentElement.style && t.__forceSmoothScrollPolyfill__ !== !0)
      return;
    const n = t.HTMLElement || t.Element, r = { scroll: t.scroll || t.scrollTo, scrollBy: t.scrollBy, elementScroll: n.prototype.scroll || a, scrollIntoView: n.prototype.scrollIntoView }, i = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now, o = (s = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(s) ? 1 : 0);
    var s;
    function a(p, y) {
      this.scrollLeft = p, this.scrollTop = y;
    }
    function l(p) {
      if (p === null || typeof p != "object" || p.behavior === void 0 || p.behavior === "auto" || p.behavior === "instant")
        return !0;
      if (typeof p == "object" && p.behavior === "smooth")
        return !1;
      throw new TypeError("behavior member of ScrollOptions " + p.behavior + " is not a valid value for enumeration ScrollBehavior.");
    }
    function c(p, y) {
      return y === "Y" ? p.clientHeight + o < p.scrollHeight : y === "X" ? p.clientWidth + o < p.scrollWidth : void 0;
    }
    function d(p, y) {
      const I = t.getComputedStyle(p, null)["overflow" + y];
      return I === "auto" || I === "scroll";
    }
    function u(p) {
      const y = c(p, "Y") && d(p, "Y"), I = c(p, "X") && d(p, "X");
      return y || I;
    }
    function g(p) {
      for (; p !== e.body && u(p) === !1; )
        p = p.parentNode || p.host;
      return p;
    }
    function m(p) {
      let y, I, f, C = (i() - p.startTime) / 468;
      var w;
      C = C > 1 ? 1 : C, w = C, y = 0.5 * (1 - Math.cos(Math.PI * w)), I = p.startX + (p.x - p.startX) * y, f = p.startY + (p.y - p.startY) * y, p.method.call(p.scrollable, I, f), I === p.x && f === p.y || t.requestAnimationFrame(m.bind(t, p));
    }
    function h(p, y, I) {
      let f, C, w, O;
      const F = i();
      p === e.body ? (f = t, C = t.scrollX || t.pageXOffset, w = t.scrollY || t.pageYOffset, O = r.scroll) : (f = p, C = p.scrollLeft, w = p.scrollTop, O = a), m({ scrollable: f, method: O, startTime: F, startX: C, startY: w, x: y, y: I });
    }
    t.scroll = t.scrollTo = function() {
      arguments[0] !== void 0 && (l(arguments[0]) !== !0 ? h.call(t, e.body, arguments[0].left !== void 0 ? ~~arguments[0].left : t.scrollX || t.pageXOffset, arguments[0].top !== void 0 ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : r.scroll.call(t, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : t.scrollX || t.pageXOffset, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : t.scrollY || t.pageYOffset));
    }, t.scrollBy = function() {
      arguments[0] !== void 0 && (l(arguments[0]) ? r.scrollBy.call(t, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : 0, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0) : h.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)));
    }, n.prototype.scroll = n.prototype.scrollTo = function() {
      if (arguments[0] === void 0)
        return;
      if (l(arguments[0]) === !0) {
        if (typeof arguments[0] == "number" && arguments[1] === void 0)
          throw new SyntaxError("Value could not be converted");
        return void r.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] != "object" ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop);
      }
      const p = arguments[0].left, y = arguments[0].top;
      h.call(this, this, p === void 0 ? this.scrollLeft : ~~p, y === void 0 ? this.scrollTop : ~~y);
    }, n.prototype.scrollBy = function() {
      arguments[0] !== void 0 && (l(arguments[0]) !== !0 ? this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior }) : r.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop));
    }, n.prototype.scrollIntoView = function() {
      if (l(arguments[0]) === !0)
        return void r.scrollIntoView.call(this, arguments[0] === void 0 || arguments[0]);
      const p = g(this), y = p.getBoundingClientRect(), I = this.getBoundingClientRect();
      p !== e.body ? (h.call(this, p, p.scrollLeft + I.left - y.left, p.scrollTop + I.top - y.top), t.getComputedStyle(p).position !== "fixed" && t.scrollBy({ left: y.left, top: y.top, behavior: "smooth" })) : t.scrollBy({ left: I.left, top: I.top, behavior: "smooth" });
    };
  }
  class bs {
    constructor(e = [], n) {
      this.timeOffset = 0, this.raf = null, this.actions = e, this.speed = n.speed, this.liveMode = n.liveMode;
    }
    addAction(e) {
      if (!this.actions.length || this.actions[this.actions.length - 1].delay <= e.delay)
        return void this.actions.push(e);
      const n = this.findActionIndex(e);
      this.actions.splice(n, 0, e);
    }
    start() {
      this.timeOffset = 0;
      let e = performance.now();
      const n = () => {
        const r = performance.now();
        for (this.timeOffset += (r - e) * this.speed, e = r; this.actions.length; ) {
          const i = this.actions[0];
          if (!(this.timeOffset >= i.delay))
            break;
          this.actions.shift(), i.doAction();
        }
        (this.actions.length > 0 || this.liveMode) && (this.raf = requestAnimationFrame(n));
      };
      this.raf = requestAnimationFrame(n);
    }
    clear() {
      this.raf && (cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0;
    }
    setSpeed(e) {
      this.speed = e;
    }
    toggleLiveMode(e) {
      this.liveMode = e;
    }
    isActive() {
      return this.raf !== null;
    }
    findActionIndex(e) {
      let n = 0, r = this.actions.length - 1;
      for (; n <= r; ) {
        const i = Math.floor((n + r) / 2);
        if (this.actions[i].delay < e.delay)
          n = i + 1;
        else {
          if (!(this.actions[i].delay > e.delay))
            return i + 1;
          r = i - 1;
        }
      }
      return n;
    }
  }
  function Yn(t, e) {
    if (t.type === te.IncrementalSnapshot && t.data.source === H.MouseMove && t.data.positions && t.data.positions.length) {
      const n = t.data.positions[0].timeOffset, r = t.timestamp + n;
      return t.delay = r - e, r - e;
    }
    return t.delay = t.timestamp - e, t.delay;
  }
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  function zn(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n)
      return t;
    var r, i, o = n.call(t), s = [];
    try {
      for (; (e === void 0 || e-- > 0) && !(r = o.next()).done; )
        s.push(r.value);
    } catch (a) {
      i = { error: a };
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o);
      } finally {
        if (i)
          throw i.error;
      }
    }
    return s;
  }
  (function(t) {
    t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
  })(ze || (ze = {}));
  var ui = { type: "xstate.init" };
  function Ht(t) {
    return t === void 0 ? [] : [].concat(t);
  }
  function Ze(t) {
    return { type: "xstate.assign", assignment: t };
  }
  function Hn(t, e) {
    return typeof (t = typeof t == "string" && e && e[t] ? e[t] : t) == "string" ? { type: t } : typeof t == "function" ? { type: t.name, exec: t } : t;
  }
  function Ot(t) {
    return function(e) {
      return t === e;
    };
  }
  function hi(t) {
    return typeof t == "string" ? { type: t } : t;
  }
  function Qn(t, e) {
    return { value: t, context: e, actions: [], changed: !1, matches: Ot(t) };
  }
  function Jn(t, e, n) {
    var r = e, i = !1;
    return [t.filter(function(o) {
      if (o.type === "xstate.assign") {
        i = !0;
        var s = Object.assign({}, r);
        return typeof o.assignment == "function" ? s = o.assignment(r, n) : Object.keys(o.assignment).forEach(function(a) {
          s[a] = typeof o.assignment[a] == "function" ? o.assignment[a](r, n) : o.assignment[a];
        }), r = s, !1;
      }
      return !0;
    }), r, i];
  }
  function gi(t, e) {
    e === void 0 && (e = {});
    var n = zn(Jn(Ht(t.states[t.initial].entry).map(function(s) {
      return Hn(s, e.actions);
    }), t.context, ui), 2), r = n[0], i = n[1], o = { config: t, _options: e, initialState: { value: t.initial, actions: r, context: i, matches: Ot(t.initial) }, transition: function(s, a) {
      var l, c, d = typeof s == "string" ? { value: s, context: t.context } : s, u = d.value, g = d.context, m = hi(a), h = t.states[u];
      if (h.on) {
        var p = Ht(h.on[m.type]);
        try {
          for (var y = function(S) {
            var _ = typeof Symbol == "function" && Symbol.iterator, D = _ && S[_], Z = 0;
            if (D)
              return D.call(S);
            if (S && typeof S.length == "number")
              return { next: function() {
                return S && Z >= S.length && (S = void 0), { value: S && S[Z++], done: !S };
              } };
            throw new TypeError(_ ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }(p), I = y.next(); !I.done; I = y.next()) {
            var f = I.value;
            if (f === void 0)
              return Qn(u, g);
            var C = typeof f == "string" ? { target: f } : f, w = C.target, O = C.actions, F = O === void 0 ? [] : O, W = C.cond, R = W === void 0 ? function() {
              return !0;
            } : W, b = w === void 0, x = w ?? u, A = t.states[x];
            if (R(g, m)) {
              var v = zn(Jn((b ? Ht(F) : [].concat(h.exit, F, A.entry).filter(function(S) {
                return S;
              })).map(function(S) {
                return Hn(S, o._options.actions);
              }), g, m), 3), M = v[0], T = v[1], G = v[2], B = w ?? u;
              return { value: B, context: T, actions: M, changed: w !== u || M.length > 0 || G, matches: Ot(B) };
            }
          }
        } catch (S) {
          l = { error: S };
        } finally {
          try {
            I && !I.done && (c = y.return) && c.call(y);
          } finally {
            if (l)
              throw l.error;
          }
        }
      }
      return Qn(u, g);
    } };
    return o;
  }
  var $n = function(t, e) {
    return t.actions.forEach(function(n) {
      var r = n.exec;
      return r && r(t.context, e);
    });
  };
  function pi(t) {
    var e = t.initialState, n = ze.NotStarted, r = /* @__PURE__ */ new Set(), i = { _machine: t, send: function(o) {
      n === ze.Running && (e = t.transition(e, o), $n(e, hi(o)), r.forEach(function(s) {
        return s(e);
      }));
    }, subscribe: function(o) {
      return r.add(o), o(e), { unsubscribe: function() {
        return r.delete(o);
      } };
    }, start: function(o) {
      if (o) {
        var s = typeof o == "object" ? o : { context: t.config.context, value: o };
        e = { value: s.value, actions: [], context: s.context, matches: Ot(s.value) };
      }
      return n = ze.Running, $n(e, ui), i;
    }, stop: function() {
      return n = ze.Stopped, r.clear(), i;
    }, get state() {
      return e;
    }, get status() {
      return n;
    } };
    return i;
  }
  function As(t, { getCastFn: e, applyEventsSynchronously: n, emitter: r }) {
    const i = gi({ id: "player", context: t, initial: "paused", states: { playing: { on: { PAUSE: { target: "paused", actions: ["pause"] }, CAST_EVENT: { target: "playing", actions: "castEvent" }, END: { target: "paused", actions: ["resetLastPlayedEvent", "pause"] }, ADD_EVENT: { target: "playing", actions: ["addEvent"] } } }, paused: { on: { PLAY: { target: "playing", actions: ["recordTimeOffset", "play"] }, CAST_EVENT: { target: "paused", actions: "castEvent" }, TO_LIVE: { target: "live", actions: ["startLive"] }, ADD_EVENT: { target: "paused", actions: ["addEvent"] } } }, live: { on: { ADD_EVENT: { target: "live", actions: ["addEvent"] }, CAST_EVENT: { target: "live", actions: ["castEvent"] } } } } }, { actions: { castEvent: Ze({ lastPlayedEvent: (o, s) => s.type === "CAST_EVENT" ? s.payload.event : o.lastPlayedEvent }), recordTimeOffset: Ze((o, s) => {
      let a = o.timeOffset;
      return "payload" in s && "timeOffset" in s.payload && (a = s.payload.timeOffset), Object.assign(Object.assign({}, o), { timeOffset: a, baselineTime: o.events[0].timestamp + a });
    }), play(o) {
      var s;
      const { timer: a, events: l, baselineTime: c, lastPlayedEvent: d } = o;
      a.clear();
      for (const h of l)
        Yn(h, c);
      const u = function(h, p) {
        for (let y = h.length - 1; y >= 0; y--) {
          const I = h[y];
          if (I.type === te.Meta && I.timestamp <= p)
            return h.slice(y);
        }
        return h;
      }(l, c);
      let g = d == null ? void 0 : d.timestamp;
      (d == null ? void 0 : d.type) === te.IncrementalSnapshot && d.data.source === H.MouseMove && (g = d.timestamp + ((s = d.data.positions[0]) === null || s === void 0 ? void 0 : s.timeOffset)), c < (g || 0) && r.emit(j.PlayBack);
      const m = new Array();
      for (const h of u)
        if (!(g && g < c && (h.timestamp <= g || h === d)))
          if (h.timestamp < c)
            m.push(h);
          else {
            const p = e(h, !1);
            a.addAction({ doAction: () => {
              p();
            }, delay: h.delay });
          }
      n(m), r.emit(j.Flush), a.start();
    }, pause(o) {
      o.timer.clear();
    }, resetLastPlayedEvent: Ze((o) => Object.assign(Object.assign({}, o), { lastPlayedEvent: null })), startLive: Ze({ baselineTime: (o, s) => (o.timer.toggleLiveMode(!0), o.timer.start(), s.type === "TO_LIVE" && s.payload.baselineTime ? s.payload.baselineTime : Date.now()) }), addEvent: Ze((o, s) => {
      const { baselineTime: a, timer: l, events: c } = o;
      if (s.type === "ADD_EVENT") {
        const { event: d } = s.payload;
        Yn(d, a);
        let u = c.length - 1;
        if (!c[u] || c[u].timestamp <= d.timestamp)
          c.push(d);
        else {
          let h = -1, p = 0;
          for (; p <= u; ) {
            const y = Math.floor((p + u) / 2);
            c[y].timestamp <= d.timestamp ? p = y + 1 : u = y - 1;
          }
          h === -1 && (h = p), c.splice(h, 0, d);
        }
        const g = d.timestamp < a, m = e(d, g);
        g ? m() : l.isActive() && l.addAction({ doAction: () => {
          m();
        }, delay: d.delay });
      }
      return Object.assign(Object.assign({}, o), { events: c });
    }) } });
    return pi(i);
  }
  const Xn = /* @__PURE__ */ new Map();
  function mi(t, e) {
    let n = Xn.get(t);
    return n || (n = /* @__PURE__ */ new Map(), Xn.set(t, n)), n.has(e) || n.set(e, []), n.get(e);
  }
  function Re(t, e, n) {
    return (r) => Le(this, void 0, void 0, function* () {
      if (r && typeof r == "object" && "rr_type" in r) {
        if (n && (n.isUnchanged = !1), r.rr_type === "ImageBitmap" && "args" in r) {
          const i = yield Re(t, e, n)(r.args);
          return yield createImageBitmap.apply(null, i);
        }
        if ("index" in r) {
          if (n || e === null)
            return r;
          const { rr_type: i, index: o } = r;
          return mi(e, i)[o];
        }
        if ("args" in r) {
          const { rr_type: i, args: o } = r;
          return new window[i](...yield Promise.all(o.map(Re(t, e, n))));
        }
        if ("base64" in r)
          return function(i) {
            var o, s, a, l, c, d = 0.75 * i.length, u = i.length, g = 0;
            i[i.length - 1] === "=" && (d--, i[i.length - 2] === "=" && d--);
            var m = new ArrayBuffer(d), h = new Uint8Array(m);
            for (o = 0; o < u; o += 4)
              s = rt[i.charCodeAt(o)], a = rt[i.charCodeAt(o + 1)], l = rt[i.charCodeAt(o + 2)], c = rt[i.charCodeAt(o + 3)], h[g++] = s << 2 | a >> 4, h[g++] = (15 & a) << 4 | l >> 2, h[g++] = (3 & l) << 6 | 63 & c;
            return m;
          }(r.base64);
        if ("src" in r) {
          const i = t.get(r.src);
          if (i)
            return i;
          {
            const o = new Image();
            return o.src = r.src, t.set(r.src, o), o;
          }
        }
        if ("data" in r && r.rr_type === "Blob") {
          const i = yield Promise.all(r.data.map(Re(t, e, n)));
          return new Blob(i, { type: r.type });
        }
      } else if (Array.isArray(r))
        return yield Promise.all(r.map(Re(t, e, n)));
      return r;
    });
  }
  const Ss = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
  function ws({ mutation: t, target: e, type: n, imageMap: r, errorHandler: i }) {
    return Le(this, void 0, void 0, function* () {
      try {
        const o = function(l, c) {
          try {
            return c === Ft.WebGL ? l.getContext("webgl") || l.getContext("experimental-webgl") : l.getContext("webgl2");
          } catch {
            return null;
          }
        }(e, n);
        if (!o)
          return;
        if (t.setter)
          return void (o[t.property] = t.args[0]);
        const s = o[t.property], a = yield Promise.all(t.args.map(Re(r, o)));
        (function(l, c) {
          if (!(c != null && c.constructor))
            return;
          const { name: d } = c.constructor;
          if (!Ss.includes(d))
            return;
          const u = mi(l, d);
          u.includes(c) || u.push(c);
        })(o, s.apply(o, a));
      } catch (o) {
        i(t, o);
      }
    });
  }
  function Ns({ event: t, mutation: e, target: n, imageMap: r, errorHandler: i }) {
    return Le(this, void 0, void 0, function* () {
      try {
        const o = n.getContext("2d");
        if (e.setter)
          return void (o[e.property] = e.args[0]);
        const s = o[e.property];
        if (e.property === "drawImage" && typeof e.args[0] == "string")
          r.get(t), s.apply(o, e.args);
        else {
          const a = yield Promise.all(e.args.map(Re(r, o)));
          s.apply(o, a);
        }
      } catch (o) {
        i(e, o);
      }
    });
  }
  function jn({ event: t, mutation: e, target: n, imageMap: r, canvasEventMap: i, errorHandler: o }) {
    return Le(this, void 0, void 0, function* () {
      try {
        const s = i.get(t) || e, a = "commands" in s ? s.commands : [s];
        if ([Ft.WebGL, Ft.WebGL2].includes(e.type)) {
          for (let l = 0; l < a.length; l++) {
            const c = a[l];
            yield ws({ mutation: c, type: e.type, target: n, imageMap: r, errorHandler: o });
          }
          return;
        }
        for (let l = 0; l < a.length; l++) {
          const c = a[l];
          yield Ns({ event: t, mutation: c, target: n, imageMap: r, errorHandler: o });
        }
      } catch (s) {
        o(e, s);
      }
    });
  }
  const Es = di || Cs, Qt = { duration: 500, lineCap: "round", lineWidth: 3, strokeStyle: "red" };
  function qn(t) {
    return t.type == te.IncrementalSnapshot && (t.data.source == H.TouchMove || t.data.source == H.MouseInteraction && t.data.type == he.TouchStart);
  }
  class Ts {
    constructor(e, n) {
      if (this.usingVirtualDom = !1, this.virtualDom = new je(), this.mouseTail = null, this.tailPositions = [], this.emitter = Es(), this.legacy_missingNodeRetryMap = {}, this.cache = Wn(), this.imageMap = /* @__PURE__ */ new Map(), this.canvasEventMap = /* @__PURE__ */ new Map(), this.mirror = Go(), this.styleMirror = new Yo(), this.firstFullSnapshot = null, this.newDocumentQueue = [], this.mousePos = null, this.touchActive = null, this.lastSelectionData = null, this.constructedStyleMutations = [], this.adoptedStyleSheets = [], this.handleResize = (a) => {
        this.iframe.style.display = "inherit";
        for (const l of [this.mouseTail, this.iframe])
          l && (l.setAttribute("width", String(a.width)), l.setAttribute("height", String(a.height)));
      }, this.applyEventsSynchronously = (a) => {
        for (const l of a) {
          switch (l.type) {
            case te.DomContentLoaded:
            case te.Load:
            case te.Custom:
              continue;
            case te.FullSnapshot:
            case te.Meta:
            case te.Plugin:
            case te.IncrementalSnapshot:
          }
          this.getCastFn(l, !0)();
        }
        this.touchActive === !0 ? this.mouse.classList.add("touch-active") : this.touchActive === !1 && this.mouse.classList.remove("touch-active"), this.touchActive = null;
      }, this.getCastFn = (a, l = !1) => {
        let c;
        switch (a.type) {
          case te.DomContentLoaded:
          case te.Load:
            break;
          case te.Custom:
            c = () => {
              this.emitter.emit(j.CustomEvent, a);
            };
            break;
          case te.Meta:
            c = () => this.emitter.emit(j.Resize, { width: a.data.width, height: a.data.height });
            break;
          case te.FullSnapshot:
            c = () => {
              var d;
              if (this.firstFullSnapshot) {
                if (this.firstFullSnapshot === a)
                  return void (this.firstFullSnapshot = !0);
              } else
                this.firstFullSnapshot = !0;
              this.rebuildFullSnapshot(a, l), (d = this.iframe.contentWindow) === null || d === void 0 || d.scrollTo(a.data.initialOffset), this.styleMirror.reset();
            };
            break;
          case te.IncrementalSnapshot:
            c = () => {
              if (this.applyIncremental(a, l), !l && (a === this.nextUserInteractionEvent && (this.nextUserInteractionEvent = null, this.backToNormal()), this.config.skipInactive && !this.nextUserInteractionEvent)) {
                for (const d of this.service.state.context.events)
                  if (!(d.timestamp <= a.timestamp) && this.isUserInteraction(d)) {
                    d.delay - a.delay > 1e4 * this.speedService.state.context.timer.speed && (this.nextUserInteractionEvent = d);
                    break;
                  }
                if (this.nextUserInteractionEvent) {
                  const d = this.nextUserInteractionEvent.delay - a.delay, u = { speed: Math.min(Math.round(d / 5e3), this.config.maxSpeed) };
                  this.speedService.send({ type: "FAST_FORWARD", payload: u }), this.emitter.emit(j.SkipStart, u);
                }
              }
            };
        }
        return () => {
          c && c();
          for (const u of this.config.plugins || [])
            u.handler && u.handler(a, l, { replayer: this });
          this.service.send({ type: "CAST_EVENT", payload: { event: a } });
          const d = this.service.state.context.events.length - 1;
          if (a === this.service.state.context.events[d]) {
            const u = () => {
              d < this.service.state.context.events.length - 1 || (this.backToNormal(), this.service.send("END"), this.emitter.emit(j.Finish));
            };
            a.type === te.IncrementalSnapshot && a.data.source === H.MouseMove && a.data.positions.length ? setTimeout(() => {
              u();
            }, Math.max(0, 50 - a.data.positions[0].timeOffset)) : u();
          }
          this.emitter.emit(j.EventCast, a);
        };
      }, !(n != null && n.liveMode) && e.length < 2)
        throw new Error("Replayer need at least 2 events.");
      const r = { speed: 1, maxSpeed: 360, root: document.body, loadTimeout: 0, skipInactive: !1, showWarning: !0, showDebug: !1, blockClass: "rr-block", liveMode: !1, insertStyleRules: [], triggerFocus: !0, UNSAFE_replayCanvas: !1, pauseAnimation: !0, mouseTail: Qt, useVirtualDom: !0 };
      this.config = Object.assign({}, r, n), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(j.Resize, this.handleResize), this.setupDom();
      for (const a of this.config.plugins || [])
        a.getMirror && a.getMirror({ nodeMirror: this.mirror });
      this.emitter.on(j.Flush, () => {
        if (this.usingVirtualDom) {
          const a = { mirror: this.mirror, applyCanvas: (l, c, d) => {
            jn({ event: l, mutation: c, target: d, imageMap: this.imageMap, canvasEventMap: this.canvasEventMap, errorHandler: this.warnCanvasMutationFailed.bind(this) });
          }, applyInput: this.applyInput.bind(this), applyScroll: this.applyScroll.bind(this), applyStyleSheetMutation: (l, c) => {
            l.source === H.StyleSheetRule ? this.applyStyleSheetRule(l, c) : l.source === H.StyleDeclaration && this.applyStyleDeclaration(l, c);
          } };
          if (this.iframe.contentDocument && be(this.iframe.contentDocument, this.virtualDom, a, this.virtualDom.mirror), this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
            for (const l in this.legacy_missingNodeRetryMap)
              try {
                const c = this.legacy_missingNodeRetryMap[l], d = an(c.node, this.mirror, this.virtualDom.mirror);
                be(d, c.node, a, this.virtualDom.mirror), c.node = d;
              } catch (c) {
                this.config.showWarning && console.warn(c);
              }
          this.constructedStyleMutations.forEach((l) => {
            this.applyStyleSheetMutation(l);
          }), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((l) => {
            this.applyAdoptedStyleSheet(l);
          }), this.adoptedStyleSheets = [];
        }
        this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), this.lastSelectionData && (this.applySelection(this.lastSelectionData), this.lastSelectionData = null);
      }), this.emitter.on(j.PlayBack, () => {
        this.firstFullSnapshot = null, this.mirror.reset(), this.styleMirror.reset();
      });
      const i = new bs([], { speed: this.config.speed, liveMode: this.config.liveMode });
      this.service = As({ events: e.map((a) => n && n.unpackFn ? n.unpackFn(a) : a).sort((a, l) => a.timestamp - l.timestamp), timer: i, timeOffset: 0, baselineTime: 0, lastPlayedEvent: null }, { getCastFn: this.getCastFn, applyEventsSynchronously: this.applyEventsSynchronously, emitter: this.emitter }), this.service.start(), this.service.subscribe((a) => {
        this.emitter.emit(j.StateChange, { player: a });
      }), this.speedService = pi(gi({ id: "speed", context: { normalSpeed: -1, timer: i }, initial: "normal", states: { normal: { on: { FAST_FORWARD: { target: "skipping", actions: ["recordSpeed", "setSpeed"] }, SET_SPEED: { target: "normal", actions: ["setSpeed"] } } }, skipping: { on: { BACK_TO_NORMAL: { target: "normal", actions: ["restoreSpeed"] }, SET_SPEED: { target: "normal", actions: ["setSpeed"] } } } } }, { actions: { setSpeed: (a, l) => {
        "payload" in l && a.timer.setSpeed(l.payload.speed);
      }, recordSpeed: Ze({ normalSpeed: (a) => a.timer.speed }), restoreSpeed: (a) => {
        a.timer.setSpeed(a.normalSpeed);
      } } })), this.speedService.start(), this.speedService.subscribe((a) => {
        this.emitter.emit(j.StateChange, { speed: a });
      });
      const o = this.service.state.context.events.find((a) => a.type === te.Meta), s = this.service.state.context.events.find((a) => a.type === te.FullSnapshot);
      if (o) {
        const { width: a, height: l } = o.data;
        setTimeout(() => {
          this.emitter.emit(j.Resize, { width: a, height: l });
        }, 0);
      }
      s && setTimeout(() => {
        var a;
        this.firstFullSnapshot || (this.firstFullSnapshot = s, this.rebuildFullSnapshot(s), (a = this.iframe.contentWindow) === null || a === void 0 || a.scrollTo(s.data.initialOffset));
      }, 1), this.service.state.context.events.find(qn) && this.mouse.classList.add("touch-device");
    }
    get timer() {
      return this.service.state.context.timer;
    }
    on(e, n) {
      return this.emitter.on(e, n), this;
    }
    off(e, n) {
      return this.emitter.off(e, n), this;
    }
    setConfig(e) {
      Object.keys(e).forEach((n) => {
        e[n], this.config[n] = e[n];
      }), this.config.skipInactive || this.backToNormal(), e.speed !== void 0 && this.speedService.send({ type: "SET_SPEED", payload: { speed: e.speed } }), e.mouseTail !== void 0 && (e.mouseTail === !1 ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"));
    }
    getMetaData() {
      const e = this.service.state.context.events[0], n = this.service.state.context.events[this.service.state.context.events.length - 1];
      return { startTime: e.timestamp, endTime: n.timestamp, totalTime: n.timestamp - e.timestamp };
    }
    getCurrentTime() {
      return this.timer.timeOffset + this.getTimeOffset();
    }
    getTimeOffset() {
      const { baselineTime: e, events: n } = this.service.state.context;
      return e - n[0].timestamp;
    }
    getMirror() {
      return this.mirror;
    }
    play(e = 0) {
      var n, r;
      this.service.state.matches("paused") || this.service.send({ type: "PAUSE" }), this.service.send({ type: "PLAY", payload: { timeOffset: e } }), (r = (n = this.iframe.contentDocument) === null || n === void 0 ? void 0 : n.getElementsByTagName("html")[0]) === null || r === void 0 || r.classList.remove("rrweb-paused"), this.emitter.emit(j.Start);
    }
    pause(e) {
      var n, r;
      e === void 0 && this.service.state.matches("playing") && this.service.send({ type: "PAUSE" }), typeof e == "number" && (this.play(e), this.service.send({ type: "PAUSE" })), (r = (n = this.iframe.contentDocument) === null || n === void 0 ? void 0 : n.getElementsByTagName("html")[0]) === null || r === void 0 || r.classList.add("rrweb-paused"), this.emitter.emit(j.Pause);
    }
    resume(e = 0) {
      console.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(e), this.emitter.emit(j.Resume);
    }
    destroy() {
      this.pause(), this.config.root.removeChild(this.wrapper), this.emitter.emit(j.Destroy);
    }
    startLive(e) {
      this.service.send({ type: "TO_LIVE", payload: { baselineTime: e } });
    }
    addEvent(e) {
      const n = this.config.unpackFn ? this.config.unpackFn(e) : e;
      qn(n) && this.mouse.classList.add("touch-device"), Promise.resolve().then(() => this.service.send({ type: "ADD_EVENT", payload: { event: n } }));
    }
    enableInteract() {
      this.iframe.setAttribute("scrolling", "auto"), this.iframe.style.pointerEvents = "auto";
    }
    disableInteract() {
      this.iframe.setAttribute("scrolling", "no"), this.iframe.style.pointerEvents = "none";
    }
    resetCache() {
      this.cache = Wn();
    }
    setupDom() {
      this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), this.config.mouseTail !== !1 && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.iframe = document.createElement("iframe");
      const e = ["allow-same-origin"];
      this.config.UNSAFE_replayCanvas && e.push("allow-scripts"), this.iframe.style.display = "none", this.iframe.setAttribute("sandbox", e.join(" ")), this.disableInteract(), this.wrapper.appendChild(this.iframe), this.iframe.contentWindow && this.iframe.contentDocument && (vs(this.iframe.contentWindow, this.iframe.contentDocument), function(n = window) {
        "NodeList" in n && !n.NodeList.prototype.forEach && (n.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in n && !n.DOMTokenList.prototype.forEach && (n.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...r) => {
          let i = r[0];
          if (!(0 in r))
            throw new TypeError("1 argument is required");
          do
            if (this === i)
              return !0;
          while (i = i && i.parentNode);
          return !1;
        });
      }(this.iframe.contentWindow));
    }
    rebuildFullSnapshot(e, n = !1) {
      if (!this.iframe.contentDocument)
        return console.warn("Looks like your replayer has been destroyed.");
      Object.keys(this.legacy_missingNodeRetryMap).length && console.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
      const r = [], i = (a, l) => {
        this.collectIframeAndAttachDocument(r, a);
        for (const c of this.config.plugins || [])
          c.onBuild && c.onBuild(a, { id: l, replayer: this });
      };
      Po(e.data.node, { doc: this.iframe.contentDocument, afterAppend: i, cache: this.cache, mirror: this.mirror }), i(this.iframe.contentDocument, e.data.node.id);
      for (const { mutationInQueue: a, builtNode: l } of r)
        this.attachDocumentToIframe(a, l), this.newDocumentQueue = this.newDocumentQueue.filter((c) => c !== a);
      const { documentElement: o, head: s } = this.iframe.contentDocument;
      this.insertStyleRules(o, s), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(j.FullsnapshotRebuilded, e), n || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages();
    }
    insertStyleRules(e, n) {
      var r;
      const i = (o = this.config.blockClass, [`.${o} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
      var o;
      if (this.config.pauseAnimation && i.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), this.usingVirtualDom) {
        const s = this.virtualDom.createElement("style");
        this.virtualDom.mirror.add(s, ni(s, this.virtualDom.unserializedId)), e.insertBefore(s, n), s.rules.push({ source: H.StyleSheetRule, adds: i.map((a, l) => ({ rule: a, index: l })) });
      } else {
        const s = document.createElement("style");
        e.insertBefore(s, n);
        for (let a = 0; a < i.length; a++)
          (r = s.sheet) === null || r === void 0 || r.insertRule(i[a], a);
      }
    }
    attachDocumentToIframe(e, n) {
      const r = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror, i = [], o = (s, a) => {
        this.collectIframeAndAttachDocument(i, s);
        const l = r.getMeta(s);
        if ((l == null ? void 0 : l.type) === le.Element && (l == null ? void 0 : l.tagName.toUpperCase()) === "HTML") {
          const { documentElement: c, head: d } = n.contentDocument;
          this.insertStyleRules(c, d);
        }
        for (const c of this.config.plugins || [])
          c.onBuild && c.onBuild(s, { id: a, replayer: this });
      };
      lt(e.node, { doc: n.contentDocument, mirror: r, hackCss: !0, skipChild: !1, afterAppend: o, cache: this.cache }), o(n.contentDocument, e.node.id);
      for (const { mutationInQueue: s, builtNode: a } of i)
        this.attachDocumentToIframe(s, a), this.newDocumentQueue = this.newDocumentQueue.filter((l) => l !== s);
    }
    collectIframeAndAttachDocument(e, n) {
      if (Pt(n, this.mirror)) {
        const r = this.newDocumentQueue.find((i) => i.parentId === this.mirror.getId(n));
        r && e.push({ mutationInQueue: r, builtNode: n });
      }
    }
    waitForStylesheetLoad() {
      var e;
      const n = (e = this.iframe.contentDocument) === null || e === void 0 ? void 0 : e.head;
      if (n) {
        const r = /* @__PURE__ */ new Set();
        let i, o = this.service.state;
        const s = () => {
          o = this.service.state;
        };
        this.emitter.on(j.Start, s), this.emitter.on(j.Pause, s);
        const a = () => {
          this.emitter.off(j.Start, s), this.emitter.off(j.Pause, s);
        };
        n.querySelectorAll('link[rel="stylesheet"]').forEach((l) => {
          l.sheet || (r.add(l), l.addEventListener("load", () => {
            r.delete(l), r.size === 0 && i !== -1 && (o.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(j.LoadStylesheetEnd), i && clearTimeout(i), a());
          }));
        }), r.size > 0 && (this.service.send({ type: "PAUSE" }), this.emitter.emit(j.LoadStylesheetStart), i = setTimeout(() => {
          o.matches("playing") && this.play(this.getCurrentTime()), i = -1, a();
        }, this.config.loadTimeout));
      }
    }
    preloadAllImages() {
      return Le(this, void 0, void 0, function* () {
        this.service.state;
        const e = () => {
          this.service.state;
        };
        this.emitter.on(j.Start, e), this.emitter.on(j.Pause, e);
        const n = [];
        for (const r of this.service.state.context.events)
          r.type === te.IncrementalSnapshot && r.data.source === H.CanvasMutation && (n.push(this.deserializeAndPreloadCanvasEvents(r.data, r)), ("commands" in r.data ? r.data.commands : [r.data]).forEach((i) => {
            this.preloadImages(i, r);
          }));
        return Promise.all(n);
      });
    }
    preloadImages(e, n) {
      if (e.property === "drawImage" && typeof e.args[0] == "string" && !this.imageMap.has(n)) {
        const r = document.createElement("canvas"), i = r.getContext("2d"), o = i == null ? void 0 : i.createImageData(r.width, r.height);
        o == null || o.data, JSON.parse(e.args[0]), i == null || i.putImageData(o, 0, 0);
      }
    }
    deserializeAndPreloadCanvasEvents(e, n) {
      return Le(this, void 0, void 0, function* () {
        if (!this.canvasEventMap.has(n)) {
          const r = { isUnchanged: !0 };
          if ("commands" in e) {
            const i = yield Promise.all(e.commands.map((o) => Le(this, void 0, void 0, function* () {
              const s = yield Promise.all(o.args.map(Re(this.imageMap, null, r)));
              return Object.assign(Object.assign({}, o), { args: s });
            })));
            r.isUnchanged === !1 && this.canvasEventMap.set(n, Object.assign(Object.assign({}, e), { commands: i }));
          } else {
            const i = yield Promise.all(e.args.map(Re(this.imageMap, null, r)));
            r.isUnchanged === !1 && this.canvasEventMap.set(n, Object.assign(Object.assign({}, e), { args: i }));
          }
        }
      });
    }
    applyIncremental(e, n) {
      var r, i, o;
      const { data: s } = e;
      switch (s.source) {
        case H.Mutation:
          try {
            this.applyMutation(s, n);
          } catch (a) {
            this.warn(`Exception in mutation ${a.message || a}`, s);
          }
          break;
        case H.Drag:
        case H.TouchMove:
        case H.MouseMove:
          if (n) {
            const a = s.positions[s.positions.length - 1];
            this.mousePos = { x: a.x, y: a.y, id: a.id, debugData: s };
          } else
            s.positions.forEach((a) => {
              const l = { doAction: () => {
                this.moveAndHover(a.x, a.y, a.id, n, s);
              }, delay: a.timeOffset + e.timestamp - this.service.state.context.baselineTime };
              this.timer.addAction(l);
            }), this.timer.addAction({ doAction() {
            }, delay: e.delay - ((r = s.positions[0]) === null || r === void 0 ? void 0 : r.timeOffset) });
          break;
        case H.MouseInteraction: {
          if (s.id === -1 || n)
            break;
          const a = new Event(he[s.type].toLowerCase()), l = this.mirror.getNode(s.id);
          if (!l)
            return this.debugNodeNotFound(s, s.id);
          this.emitter.emit(j.MouseInteraction, { type: s.type, target: l });
          const { triggerFocus: c } = this.config;
          switch (s.type) {
            case he.Blur:
              "blur" in l && l.blur();
              break;
            case he.Focus:
              c && l.focus && l.focus({ preventScroll: !0 });
              break;
            case he.Click:
            case he.TouchStart:
            case he.TouchEnd:
              n ? (s.type === he.TouchStart ? this.touchActive = !0 : s.type === he.TouchEnd && (this.touchActive = !1), this.mousePos = { x: s.x, y: s.y, id: s.id, debugData: s }) : (s.type === he.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(s.x, s.y, s.id, n, s), s.type === he.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : s.type === he.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : s.type === he.TouchEnd && this.mouse.classList.remove("touch-active"));
              break;
            case he.TouchCancel:
              n ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
              break;
            default:
              l.dispatchEvent(a);
          }
          break;
        }
        case H.Scroll:
          if (s.id === -1)
            break;
          if (this.usingVirtualDom) {
            const a = this.virtualDom.mirror.getNode(s.id);
            if (!a)
              return this.debugNodeNotFound(s, s.id);
            a.scrollData = s;
            break;
          }
          this.applyScroll(s, n);
          break;
        case H.ViewportResize:
          this.emitter.emit(j.Resize, { width: s.width, height: s.height });
          break;
        case H.Input:
          if (s.id === -1)
            break;
          if (this.usingVirtualDom) {
            const a = this.virtualDom.mirror.getNode(s.id);
            if (!a)
              return this.debugNodeNotFound(s, s.id);
            a.inputData = s;
            break;
          }
          this.applyInput(s);
          break;
        case H.MediaInteraction: {
          const a = this.usingVirtualDom ? this.virtualDom.mirror.getNode(s.id) : this.mirror.getNode(s.id);
          if (!a)
            return this.debugNodeNotFound(s, s.id);
          const l = a;
          try {
            s.currentTime && (l.currentTime = s.currentTime), s.volume && (l.volume = s.volume), s.muted && (l.muted = s.muted), s.type === 1 && l.pause(), s.type === 0 && l.play(), s.type === 4 && (l.playbackRate = s.playbackRate);
          } catch (c) {
            this.config.showWarning && console.warn(`Failed to replay media interactions: ${c.message || c}`);
          }
          break;
        }
        case H.StyleSheetRule:
        case H.StyleDeclaration:
          this.usingVirtualDom ? s.styleId ? this.constructedStyleMutations.push(s) : s.id && ((i = this.virtualDom.mirror.getNode(s.id)) === null || i === void 0 || i.rules.push(s)) : this.applyStyleSheetMutation(s);
          break;
        case H.CanvasMutation:
          if (!this.config.UNSAFE_replayCanvas)
            return;
          if (this.usingVirtualDom) {
            const a = this.virtualDom.mirror.getNode(s.id);
            if (!a)
              return this.debugNodeNotFound(s, s.id);
            a.canvasMutations.push({ event: e, mutation: s });
          } else {
            const a = this.mirror.getNode(s.id);
            if (!a)
              return this.debugNodeNotFound(s, s.id);
            jn({ event: e, mutation: s, target: a, imageMap: this.imageMap, canvasEventMap: this.canvasEventMap, errorHandler: this.warnCanvasMutationFailed.bind(this) });
          }
          break;
        case H.Font:
          try {
            const a = new FontFace(s.family, s.buffer ? new Uint8Array(JSON.parse(s.fontSource)) : s.fontSource, s.descriptors);
            (o = this.iframe.contentDocument) === null || o === void 0 || o.fonts.add(a);
          } catch (a) {
            this.config.showWarning && console.warn(a);
          }
          break;
        case H.Selection:
          if (n) {
            this.lastSelectionData = s;
            break;
          }
          this.applySelection(s);
          break;
        case H.AdoptedStyleSheet:
          this.usingVirtualDom ? this.adoptedStyleSheets.push(s) : this.applyAdoptedStyleSheet(s);
      }
    }
    applyMutation(e, n) {
      if (this.config.useVirtualDom && !this.usingVirtualDom && n && (this.usingVirtualDom = !0, ds(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
        for (const l in this.legacy_missingNodeRetryMap)
          try {
            const c = this.legacy_missingNodeRetryMap[l], d = ti(c.node, this.virtualDom, this.mirror);
            d && (c.node = d);
          } catch (c) {
            this.config.showWarning && console.warn(c);
          }
      const r = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
      e.removes.forEach((l) => {
        var c;
        const d = r.getNode(l.id);
        if (!d)
          return e.removes.find((g) => g.id === l.parentId) ? void 0 : this.warnNodeNotFound(e, l.id);
        let u = r.getNode(l.parentId);
        if (!u)
          return this.warnNodeNotFound(e, l.parentId);
        if (l.isShadow && Ct(u) && (u = u.shadowRoot), r.removeNodeFromMap(d), u)
          try {
            u.removeChild(d), this.usingVirtualDom && d.nodeName === "#text" && u.nodeName === "STYLE" && ((c = u.rules) === null || c === void 0 ? void 0 : c.length) > 0 && (u.rules = []);
          } catch (g) {
            if (!(g instanceof DOMException))
              throw g;
            this.warn("parent could not remove child in mutation", u, d, e);
          }
      });
      const i = Object.assign({}, this.legacy_missingNodeRetryMap), o = [], s = (l) => {
        var c;
        if (!this.iframe.contentDocument)
          return console.warn("Looks like your replayer has been destroyed.");
        let d = r.getNode(l.parentId);
        if (!d)
          return l.node.type === le.Document ? this.newDocumentQueue.push(l) : o.push(l);
        l.node.isShadow && (Ct(d) || d.attachShadow({ mode: "open" }), d = d.shadowRoot);
        let u = null, g = null;
        if (l.previousId && (u = r.getNode(l.previousId)), l.nextId && (g = r.getNode(l.nextId)), ((I) => {
          let f = null;
          return I.nextId && (f = r.getNode(I.nextId)), I.nextId !== null && I.nextId !== void 0 && I.nextId !== -1 && !f;
        })(l))
          return o.push(l);
        if (l.node.rootId && !r.getNode(l.node.rootId))
          return;
        const m = l.node.rootId ? r.getNode(l.node.rootId) : this.usingVirtualDom ? this.virtualDom : this.iframe.contentDocument;
        if (Pt(d, r))
          return void this.attachDocumentToIframe(l, d);
        const h = (I, f) => {
          for (const C of this.config.plugins || [])
            C.onBuild && C.onBuild(I, { id: f, replayer: this });
        }, p = lt(l.node, { doc: m, mirror: r, skipChild: !0, hackCss: !0, cache: this.cache, afterAppend: h });
        if (l.previousId === -1 || l.nextId === -1)
          return void (i[l.node.id] = { node: p, mutation: l });
        const y = r.getMeta(d);
        if (y && y.type === le.Element && y.tagName === "textarea" && l.node.type === le.Text) {
          const I = Array.isArray(d.childNodes) ? d.childNodes : Array.from(d.childNodes);
          for (const f of I)
            f.nodeType === d.TEXT_NODE && d.removeChild(f);
        }
        if (u && u.nextSibling && u.nextSibling.parentNode)
          d.insertBefore(p, u.nextSibling);
        else if (g && g.parentNode)
          d.contains(g) ? d.insertBefore(p, g) : d.insertBefore(p, null);
        else {
          if (d === m)
            for (; m.firstChild; )
              m.removeChild(m.firstChild);
          d.appendChild(p);
        }
        if (h(p, l.node.id), this.usingVirtualDom && p.nodeName === "#text" && d.nodeName === "STYLE" && ((c = d.rules) === null || c === void 0 ? void 0 : c.length) > 0 && (d.rules = []), Pt(p, this.mirror)) {
          const I = this.mirror.getId(p), f = this.newDocumentQueue.find((C) => C.parentId === I);
          f && (this.attachDocumentToIframe(f, p), this.newDocumentQueue = this.newDocumentQueue.filter((C) => C !== f));
        }
        (l.previousId || l.nextId) && this.legacy_resolveMissingNode(i, d, p, l);
      };
      e.adds.forEach((l) => {
        s(l);
      });
      const a = Date.now();
      for (; o.length; ) {
        const l = Ko(o);
        if (o.length = 0, Date.now() - a > 500) {
          this.warn("Timeout in the loop, please check the resolve tree data:", l);
          break;
        }
        for (const c of l)
          r.getNode(c.value.parentId) ? zr(c, (d) => {
            s(d);
          }) : this.debug("Drop resolve tree since there is no parent for the root node.", c);
      }
      Object.keys(i).length && Object.assign(this.legacy_missingNodeRetryMap, i), function(l) {
        const c = /* @__PURE__ */ new Set(), d = [];
        for (let u = l.length; u--; ) {
          const g = l[u];
          c.has(g.id) || (d.push(g), c.add(g.id));
        }
        return d;
      }(e.texts).forEach((l) => {
        var c;
        const d = r.getNode(l.id);
        if (!d)
          return e.removes.find((u) => u.id === l.id) ? void 0 : this.warnNodeNotFound(e, l.id);
        if (d.textContent = l.value, this.usingVirtualDom) {
          const u = d.parentNode;
          ((c = u == null ? void 0 : u.rules) === null || c === void 0 ? void 0 : c.length) > 0 && (u.rules = []);
        }
      }), e.attributes.forEach((l) => {
        const c = r.getNode(l.id);
        if (!c)
          return e.removes.find((d) => d.id === l.id) ? void 0 : this.warnNodeNotFound(e, l.id);
        for (const d in l.attributes)
          if (typeof d == "string") {
            const u = l.attributes[d];
            if (u === null)
              c.removeAttribute(d);
            else if (typeof u == "string")
              try {
                if (d === "_cssText" && (c.nodeName === "LINK" || c.nodeName === "STYLE"))
                  try {
                    const g = r.getMeta(c);
                    Object.assign(g.attributes, l.attributes);
                    const m = lt(g, { doc: c.ownerDocument, mirror: r, skipChild: !0, hackCss: !0, cache: this.cache }), h = c.nextSibling, p = c.parentNode;
                    if (m && p) {
                      p.removeChild(c), p.insertBefore(m, h), r.replace(l.id, m);
                      break;
                    }
                  } catch {
                  }
                c.setAttribute(d, u);
              } catch (g) {
                this.config.showWarning && console.warn("An error occurred may due to the checkout feature.", g);
              }
            else if (d === "style") {
              const g = u, m = c;
              for (const h in g)
                if (g[h] === !1)
                  m.style.removeProperty(h);
                else if (g[h] instanceof Array) {
                  const p = g[h];
                  m.style.setProperty(h, p[0], p[1]);
                } else {
                  const p = g[h];
                  m.style.setProperty(h, p);
                }
            }
          }
      });
    }
    applyScroll(e, n) {
      var r, i;
      const o = this.mirror.getNode(e.id);
      if (!o)
        return this.debugNodeNotFound(e, e.id);
      const s = this.mirror.getMeta(o);
      if (o === this.iframe.contentDocument)
        (r = this.iframe.contentWindow) === null || r === void 0 || r.scrollTo({ top: e.y, left: e.x, behavior: n ? "auto" : "smooth" });
      else if ((s == null ? void 0 : s.type) === le.Document)
        (i = o.defaultView) === null || i === void 0 || i.scrollTo({ top: e.y, left: e.x, behavior: n ? "auto" : "smooth" });
      else
        try {
          o.scrollTo({ top: e.y, left: e.x, behavior: n ? "auto" : "smooth" });
        } catch {
        }
    }
    applyInput(e) {
      const n = this.mirror.getNode(e.id);
      if (!n)
        return this.debugNodeNotFound(e, e.id);
      try {
        n.checked = e.isChecked, n.value = e.text;
      } catch {
      }
    }
    applySelection(e) {
      try {
        const n = /* @__PURE__ */ new Set(), r = e.ranges.map(({ start: i, startOffset: o, end: s, endOffset: a }) => {
          const l = this.mirror.getNode(i), c = this.mirror.getNode(s);
          if (!l || !c)
            return;
          const d = new Range();
          d.setStart(l, o), d.setEnd(c, a);
          const u = l.ownerDocument, g = u == null ? void 0 : u.getSelection();
          return g && n.add(g), { range: d, selection: g };
        });
        n.forEach((i) => i.removeAllRanges()), r.forEach((i) => {
          var o;
          return i && ((o = i.selection) === null || o === void 0 ? void 0 : o.addRange(i.range));
        });
      } catch {
      }
    }
    applyStyleSheetMutation(e) {
      var n;
      let r = null;
      e.styleId ? r = this.styleMirror.getStyle(e.styleId) : e.id && (r = ((n = this.mirror.getNode(e.id)) === null || n === void 0 ? void 0 : n.sheet) || null), r && (e.source === H.StyleSheetRule ? this.applyStyleSheetRule(e, r) : e.source === H.StyleDeclaration && this.applyStyleDeclaration(e, r));
    }
    applyStyleSheetRule(e, n) {
      var r, i, o, s;
      if ((r = e.adds) === null || r === void 0 || r.forEach(({ rule: a, index: l }) => {
        try {
          if (Array.isArray(l)) {
            const { positions: c, index: d } = _n(l);
            nt(n.cssRules, c).insertRule(a, d);
          } else {
            const c = l === void 0 ? void 0 : Math.min(l, n.cssRules.length);
            n == null || n.insertRule(a, c);
          }
        } catch {
        }
      }), (i = e.removes) === null || i === void 0 || i.forEach(({ index: a }) => {
        try {
          if (Array.isArray(a)) {
            const { positions: l, index: c } = _n(a);
            nt(n.cssRules, l).deleteRule(c || 0);
          } else
            n == null || n.deleteRule(a);
        } catch {
        }
      }), e.replace)
        try {
          (o = n.replace) === null || o === void 0 || o.call(n, e.replace);
        } catch {
        }
      if (e.replaceSync)
        try {
          (s = n.replaceSync) === null || s === void 0 || s.call(n, e.replaceSync);
        } catch {
        }
    }
    applyStyleDeclaration(e, n) {
      e.set && nt(n.rules, e.index).style.setProperty(e.set.property, e.set.value, e.set.priority), e.remove && nt(n.rules, e.index).style.removeProperty(e.remove.property);
    }
    applyAdoptedStyleSheet(e) {
      var n;
      const r = this.mirror.getNode(e.id);
      if (!r)
        return;
      (n = e.styles) === null || n === void 0 || n.forEach((s) => {
        var a;
        let l = null, c = null;
        if (Ct(r) ? c = ((a = r.ownerDocument) === null || a === void 0 ? void 0 : a.defaultView) || null : r.nodeName === "#document" && (c = r.defaultView), c)
          try {
            l = new c.CSSStyleSheet(), this.styleMirror.add(l, s.styleId), this.applyStyleSheetRule({ source: H.StyleSheetRule, adds: s.rules }, l);
          } catch {
          }
      });
      let i = 0;
      const o = (s, a) => {
        const l = a.map((c) => this.styleMirror.getStyle(c)).filter((c) => c !== null);
        Ct(s) ? s.shadowRoot.adoptedStyleSheets = l : s.nodeName === "#document" && (s.adoptedStyleSheets = l), l.length !== a.length && i < 10 && (setTimeout(() => o(s, a), 0 + 100 * i), i++);
      };
      o(r, e.styleIds);
    }
    legacy_resolveMissingNode(e, n, r, i) {
      const { previousId: o, nextId: s } = i, a = o && e[o], l = s && e[s];
      if (a) {
        const { node: c, mutation: d } = a;
        n.insertBefore(c, r), delete e[d.node.id], delete this.legacy_missingNodeRetryMap[d.node.id], (d.previousId || d.nextId) && this.legacy_resolveMissingNode(e, n, c, d);
      }
      if (l) {
        const { node: c, mutation: d } = l;
        n.insertBefore(c, r.nextSibling), delete e[d.node.id], delete this.legacy_missingNodeRetryMap[d.node.id], (d.previousId || d.nextId) && this.legacy_resolveMissingNode(e, n, c, d);
      }
    }
    moveAndHover(e, n, r, i, o) {
      const s = this.mirror.getNode(r);
      if (!s)
        return this.debugNodeNotFound(o, r);
      const a = Hr(s, this.iframe), l = e * a.absoluteScale + a.x, c = n * a.absoluteScale + a.y;
      this.mouse.style.left = `${l}px`, this.mouse.style.top = `${c}px`, i || this.drawMouseTail({ x: l, y: c }), this.hoverElements(s);
    }
    drawMouseTail(e) {
      if (!this.mouseTail)
        return;
      const { lineCap: n, lineWidth: r, strokeStyle: i, duration: o } = this.config.mouseTail === !0 ? Qt : Object.assign({}, Qt, this.config.mouseTail), s = () => {
        if (!this.mouseTail)
          return;
        const a = this.mouseTail.getContext("2d");
        a && this.tailPositions.length && (a.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), a.beginPath(), a.lineWidth = r, a.lineCap = n, a.strokeStyle = i, a.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((l) => a.lineTo(l.x, l.y)), a.stroke());
      };
      this.tailPositions.push(e), s(), setTimeout(() => {
        this.tailPositions = this.tailPositions.filter((a) => a !== e), s();
      }, o / this.speedService.state.context.timer.speed);
    }
    hoverElements(e) {
      var n;
      (n = this.iframe.contentDocument) === null || n === void 0 || n.querySelectorAll(".\\:hover").forEach((i) => {
        i.classList.remove(":hover");
      });
      let r = e;
      for (; r; )
        r.classList && r.classList.add(":hover"), r = r.parentElement;
    }
    isUserInteraction(e) {
      return e.type === te.IncrementalSnapshot && e.data.source > H.Mutation && e.data.source <= H.Input;
    }
    backToNormal() {
      this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({ type: "BACK_TO_NORMAL" }), this.emitter.emit(j.SkipEnd, { speed: this.speedService.state.context.normalSpeed }));
    }
    warnNodeNotFound(e, n) {
      this.warn(`Node with id '${n}' not found. `, e);
    }
    warnCanvasMutationFailed(e, n) {
      this.warn("Has error on canvas update", n, "canvas mutation:", e);
    }
    debugNodeNotFound(e, n) {
      this.debug("[replayer]", `Node with id '${n}' not found. `, e);
    }
    warn(...e) {
      this.config.showWarning && console.warn("[replayer]", ...e);
    }
    debug(...e) {
      this.config.showDebug && console.log("[replayer]", ...e);
    }
  }
  function er(t) {
    let e = "";
    return Object.keys(t).forEach((n) => {
      e += `${n}: ${t[n]};`;
    }), e;
  }
  function et(t, e = 2) {
    let n = String(t);
    const r = Math.pow(10, e - 1);
    if (t < r)
      for (; String(r).length > n.length; )
        n = `0${t}`;
    return n;
  }
  function bt(t) {
    if (t <= 0)
      return "00:00";
    const e = Math.floor(t / 36e5);
    t %= 36e5;
    const n = Math.floor(t / 6e4);
    t %= 6e4;
    const r = Math.floor(t / 1e3);
    return e ? `${et(e)}:${et(n)}:${et(r)}` : `${et(n)}:${et(r)}`;
  }
  function tr() {
    let t = !1;
    return ["fullscreen", "webkitIsFullScreen", "mozFullScreen", "msFullscreenElement"].forEach((e) => {
      e in document && (t = t || !!document[e]);
    }), t;
  }
  function nr(t) {
    return { "[object Boolean]": "boolean", "[object Number]": "number", "[object String]": "string", "[object Function]": "function", "[object Array]": "array", "[object Date]": "date", "[object RegExp]": "regExp", "[object Undefined]": "undefined", "[object Null]": "null", "[object Object]": "object" }[Object.prototype.toString.call(t)];
  }
  function Ms(t) {
    return t.type === te.IncrementalSnapshot && t.data.source > H.Mutation && t.data.source <= H.Input;
  }
  function Rs(t) {
    let e, n, r, i, o, s, a, l, c;
    return { c() {
      e = ae("div"), n = ae("input"), r = fe(), i = ae("label"), o = fe(), s = ae("span"), a = Be(t[3]), L(n, "type", "checkbox"), L(n, "id", t[2]), n.disabled = t[1], L(n, "class", "svelte-9brlez"), L(i, "for", t[2]), L(i, "class", "svelte-9brlez"), L(s, "class", "label svelte-9brlez"), L(e, "class", "switch svelte-9brlez"), Je(e, "disabled", t[1]);
    }, m(d, u) {
      Ee(d, e, u), J(e, n), n.checked = t[0], J(e, r), J(e, i), J(e, o), J(e, s), J(s, a), l || (c = st(n, "change", t[4]), l = !0);
    }, p(d, [u]) {
      4 & u && L(n, "id", d[2]), 2 & u && (n.disabled = d[1]), 1 & u && (n.checked = d[0]), 4 & u && L(i, "for", d[2]), 8 & u && xt(a, d[3]), 2 & u && Je(e, "disabled", d[1]);
    }, i: kt, o: kt, d(d) {
      d && Ae(e), l = !1, c();
    } };
  }
  function ks(t, e, n) {
    let { disabled: r } = e, { checked: i } = e, { id: o } = e, { label: s } = e;
    return t.$$set = (a) => {
      "disabled" in a && n(1, r = a.disabled), "checked" in a && n(0, i = a.checked), "id" in a && n(2, o = a.id), "label" in a && n(3, s = a.label);
    }, [i, r, o, s, function() {
      i = this.checked, n(0, i);
    }];
  }
  class Ds extends fn {
    constructor(e) {
      super(), mn(this, e, ks, Rs, hn, { disabled: 1, checked: 0, id: 2, label: 3 });
    }
  }
  function rr(t, e, n) {
    const r = t.slice();
    return r[39] = e[n], r;
  }
  function ir(t, e, n) {
    const r = t.slice();
    return r[42] = e[n], r;
  }
  function or(t, e, n) {
    const r = t.slice();
    return r[45] = e[n], r;
  }
  function sr(t) {
    let e, n, r, i, o, s, a, l, c, d, u, g, m, h, p, y, I, f, C, w, O, F, W, R, b, x, A = bt(t[6]) + "", v = bt(t[8].totalTime) + "", M = t[14], T = [];
    for (let N = 0; N < M.length; N += 1)
      T[N] = ar(or(t, M, N));
    let G = t[9], B = [];
    for (let N = 0; N < G.length; N += 1)
      B[N] = lr(ir(t, G, N));
    function S(N, V) {
      return N[7] === "playing" ? Fs : xs;
    }
    let _ = S(t), D = _(t), Z = t[3], X = [];
    for (let N = 0; N < Z.length; N += 1)
      X[N] = cr(rr(t, Z, N));
    function $(N) {
      t[30](N);
    }
    let z = { id: "skip", disabled: t[10] === "skipping", label: "skip inactive" };
    return t[0] !== void 0 && (z.checked = t[0]), w = new Ds({ props: z }), ke.push(() => function(N, V, E) {
      const q = N.$$.props[V];
      q !== void 0 && (N.$$.bound[q] = E, E(N.$$.ctx[q]));
    }(w, "checked", $)), { c() {
      e = ae("div"), n = ae("div"), r = ae("span"), i = Be(A), o = fe(), s = ae("div"), a = ae("div"), l = fe();
      for (let N = 0; N < T.length; N += 1)
        T[N].c();
      c = fe();
      for (let N = 0; N < B.length; N += 1)
        B[N].c();
      d = fe(), u = ae("div"), g = fe(), m = ae("span"), h = Be(v), p = fe(), y = ae("div"), I = ae("button"), D.c(), f = fe();
      for (let N = 0; N < X.length; N += 1)
        X[N].c();
      C = fe(), Pr(w.$$.fragment), F = fe(), W = ae("button"), W.innerHTML = `<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M916 380c-26.4 0-48-21.6-48-48L868 223.2 613.6 477.6c-18.4
            18.4-48.8 18.4-68 0-18.4-18.4-18.4-48.8 0-68L800 156 692 156c-26.4
            0-48-21.6-48-48 0-26.4 21.6-48 48-48l224 0c26.4 0 48 21.6 48 48l0
            224C964 358.4 942.4 380 916 380zM231.2 860l108.8 0c26.4 0 48 21.6 48
            48s-21.6 48-48 48l-224 0c-26.4 0-48-21.6-48-48l0-224c0-26.4 21.6-48
            48-48 26.4 0 48 21.6 48 48L164 792l253.6-253.6c18.4-18.4 48.8-18.4
            68 0 18.4 18.4 18.4 48.8 0 68L231.2 860z" p-id="1286"></path></svg>`, L(r, "class", "rr-timeline__time svelte-19ke1iv"), L(a, "class", "rr-progress__step svelte-19ke1iv"), oe(a, "width", t[13]), L(u, "class", "rr-progress__handler svelte-19ke1iv"), oe(u, "left", t[13]), L(s, "class", "rr-progress svelte-19ke1iv"), Je(s, "disabled", t[10] === "skipping"), L(m, "class", "rr-timeline__time svelte-19ke1iv"), L(n, "class", "rr-timeline svelte-19ke1iv"), L(I, "class", "svelte-19ke1iv"), L(W, "class", "svelte-19ke1iv"), L(y, "class", "rr-controller__btns svelte-19ke1iv"), L(e, "class", "rr-controller svelte-19ke1iv");
    }, m(N, V) {
      Ee(N, e, V), J(e, n), J(n, r), J(r, i), J(n, o), J(n, s), J(s, a), t[27](a), J(s, l);
      for (let E = 0; E < T.length; E += 1)
        T[E].m(s, null);
      J(s, c);
      for (let E = 0; E < B.length; E += 1)
        B[E].m(s, null);
      J(s, d), J(s, u), t[28](s), J(n, g), J(n, m), J(m, h), J(e, p), J(e, y), J(y, I), D.m(I, null), J(y, f);
      for (let E = 0; E < X.length; E += 1)
        X[E].m(y, null);
      J(y, C), gn(w, y, null), J(y, F), J(y, W), R = !0, b || (x = [st(s, "click", t[16]), st(I, "click", t[4]), st(W, "click", t[31])], b = !0);
    }, p(N, V) {
      if ((!R || 64 & V[0]) && A !== (A = bt(N[6]) + "") && xt(i, A), (!R || 8192 & V[0]) && oe(a, "width", N[13]), 16384 & V[0]) {
        let k;
        for (M = N[14], k = 0; k < M.length; k += 1) {
          const P = or(N, M, k);
          T[k] ? T[k].p(P, V) : (T[k] = ar(P), T[k].c(), T[k].m(s, c));
        }
        for (; k < T.length; k += 1)
          T[k].d(1);
        T.length = M.length;
      }
      if (512 & V[0]) {
        let k;
        for (G = N[9], k = 0; k < G.length; k += 1) {
          const P = ir(N, G, k);
          B[k] ? B[k].p(P, V) : (B[k] = lr(P), B[k].c(), B[k].m(s, d));
        }
        for (; k < B.length; k += 1)
          B[k].d(1);
        B.length = G.length;
      }
      if ((!R || 8192 & V[0]) && oe(u, "left", N[13]), 1024 & V[0] && Je(s, "disabled", N[10] === "skipping"), (!R || 256 & V[0]) && v !== (v = bt(N[8].totalTime) + "") && xt(h, v), _ !== (_ = S(N)) && (D.d(1), D = _(N), D && (D.c(), D.m(I, null))), 1066 & V[0]) {
        let k;
        for (Z = N[3], k = 0; k < Z.length; k += 1) {
          const P = rr(N, Z, k);
          X[k] ? X[k].p(P, V) : (X[k] = cr(P), X[k].c(), X[k].m(y, C));
        }
        for (; k < X.length; k += 1)
          X[k].d(1);
        X.length = Z.length;
      }
      const E = {};
      var q;
      1024 & V[0] && (E.disabled = N[10] === "skipping"), !O && 1 & V[0] && (O = !0, E.checked = N[0], q = () => O = !1, tn.push(q)), w.$set(E);
    }, i(N) {
      R || (Ne(w.$$.fragment, N), R = !0);
    }, o(N) {
      $e(w.$$.fragment, N), R = !1;
    }, d(N) {
      N && Ae(e), t[27](null), Zt(T, N), Zt(B, N), t[28](null), D.d(), Zt(X, N), pn(w), b = !1, Xe(x);
    } };
  }
  function ar(t) {
    let e, n;
    return { c() {
      e = ae("div"), L(e, "title", n = t[45].name), oe(e, "width", t[45].width), oe(e, "height", "4px"), oe(e, "position", "absolute"), oe(e, "background", t[45].background), oe(e, "left", t[45].position);
    }, m(r, i) {
      Ee(r, e, i);
    }, p(r, i) {
      16384 & i[0] && n !== (n = r[45].name) && L(e, "title", n), 16384 & i[0] && oe(e, "width", r[45].width), 16384 & i[0] && oe(e, "background", r[45].background), 16384 & i[0] && oe(e, "left", r[45].position);
    }, d(r) {
      r && Ae(e);
    } };
  }
  function lr(t) {
    let e, n;
    return { c() {
      e = ae("div"), L(e, "title", n = t[42].name), oe(e, "width", "10px"), oe(e, "height", "5px"), oe(e, "position", "absolute"), oe(e, "top", "2px"), oe(e, "transform", "translate(-50%, -50%)"), oe(e, "background", t[42].background), oe(e, "left", t[42].position);
    }, m(r, i) {
      Ee(r, e, i);
    }, p(r, i) {
      512 & i[0] && n !== (n = r[42].name) && L(e, "title", n), 512 & i[0] && oe(e, "background", r[42].background), 512 & i[0] && oe(e, "left", r[42].position);
    }, d(r) {
      r && Ae(e);
    } };
  }
  function xs(t) {
    let e, n;
    return { c() {
      e = Dt("svg"), n = Dt("path"), L(n, "d", `M170.65984 896l0-768 640 384zM644.66944
              512l-388.66944-233.32864 0 466.65728z`), L(e, "class", "icon"), L(e, "viewBox", "0 0 1024 1024"), L(e, "version", "1.1"), L(e, "xmlns", "http://www.w3.org/2000/svg"), L(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), L(e, "width", "16"), L(e, "height", "16");
    }, m(r, i) {
      Ee(r, e, i), J(e, n);
    }, d(r) {
      r && Ae(e);
    } };
  }
  function Fs(t) {
    let e, n;
    return { c() {
      e = Dt("svg"), n = Dt("path"), L(n, "d", `M682.65984 128q53.00224 0 90.50112 37.49888t37.49888 90.50112l0
              512q0 53.00224-37.49888 90.50112t-90.50112
              37.49888-90.50112-37.49888-37.49888-90.50112l0-512q0-53.00224
              37.49888-90.50112t90.50112-37.49888zM341.34016 128q53.00224 0
              90.50112 37.49888t37.49888 90.50112l0 512q0 53.00224-37.49888
              90.50112t-90.50112
              37.49888-90.50112-37.49888-37.49888-90.50112l0-512q0-53.00224
              37.49888-90.50112t90.50112-37.49888zM341.34016 213.34016q-17.67424
              0-30.16704 12.4928t-12.4928 30.16704l0 512q0 17.67424 12.4928
              30.16704t30.16704 12.4928 30.16704-12.4928
              12.4928-30.16704l0-512q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM682.65984
              213.34016q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 512q0
              17.67424 12.4928 30.16704t30.16704 12.4928 30.16704-12.4928
              12.4928-30.16704l0-512q0-17.67424-12.4928-30.16704t-30.16704-12.4928z`), L(e, "class", "icon"), L(e, "viewBox", "0 0 1024 1024"), L(e, "version", "1.1"), L(e, "xmlns", "http://www.w3.org/2000/svg"), L(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), L(e, "width", "16"), L(e, "height", "16");
    }, m(r, i) {
      Ee(r, e, i), J(e, n);
    }, d(r) {
      r && Ae(e);
    } };
  }
  function cr(t) {
    let e, n, r, i, o, s, a = t[39] + "";
    function l() {
      return t[29](t[39]);
    }
    return { c() {
      e = ae("button"), n = Be(a), r = Be("x"), e.disabled = i = t[10] === "skipping", L(e, "class", "svelte-19ke1iv"), Je(e, "active", t[39] === t[1] && t[10] !== "skipping");
    }, m(c, d) {
      Ee(c, e, d), J(e, n), J(e, r), o || (s = st(e, "click", l), o = !0);
    }, p(c, d) {
      t = c, 8 & d[0] && a !== (a = t[39] + "") && xt(n, a), 1024 & d[0] && i !== (i = t[10] === "skipping") && (e.disabled = i), 1034 & d[0] && Je(e, "active", t[39] === t[1] && t[10] !== "skipping");
    }, d(c) {
      c && Ae(e), o = !1, s();
    } };
  }
  function Os(t) {
    let e, n, r = t[2] && sr(t);
    return { c() {
      r && r.c(), e = Be("");
    }, m(i, o) {
      r && r.m(i, o), Ee(i, e, o), n = !0;
    }, p(i, o) {
      i[2] ? r ? (r.p(i, o), 4 & o[0] && Ne(r, 1)) : (r = sr(i), r.c(), Ne(r, 1), r.m(e.parentNode, e)) : r && (Zr(), $e(r, 1, 1, () => {
        r = null;
      }), Ur());
    }, i(i) {
      n || (Ne(r), n = !0);
    }, o(i) {
      $e(r), n = !1;
    }, d(i) {
      r && r.d(i), i && Ae(e);
    } };
  }
  function dr(t, e, n) {
    return (100 - (e - n) / (e - t) * 100).toFixed(2);
  }
  function Ls(t, e, n) {
    const r = Oo();
    let i, o, s, a, l, c, d, u, g, m, { replayer: h } = e, { showController: p } = e, { autoPlay: y } = e, { skipInactive: I } = e, { speedOption: f } = e, { speed: C = f.length ? f[0] : 1 } = e, { tags: w = {} } = e, { inactiveColor: O } = e, F = 0, W = null, R = !1, b = null;
    const x = () => {
      W && (cancelAnimationFrame(W), W = null);
    }, A = () => {
      i === "paused" && (l ? (h.play(), l = !1) : h.play(F));
    }, v = () => {
      i === "playing" && (h.pause(), R = !1);
    }, M = (S, _) => {
      n(6, F = S), R = !1, (typeof _ == "boolean" ? _ : i === "playing") ? h.play(S) : h.pause(S);
    }, T = (S, _, D = !1, Z) => {
      b = D ? { start: S, end: _ } : null, n(6, F = S), R = _, c = Z, h.play(S);
    }, G = (S) => {
      let _ = i === "playing";
      n(1, C = S), _ && h.pause(), h.setConfig({ speed: C }), _ && h.play(F);
    };
    var B;
    return _r(() => {
      n(7, i = h.service.state.value), n(10, o = h.speedService.state.value), h.on("state-change", (S) => {
        const { player: _, speed: D } = S;
        if (_ != null && _.value && i !== _.value)
          switch (n(7, i = _.value), i) {
            case "playing":
              x(), W = requestAnimationFrame(function Z() {
                n(6, F = h.getCurrentTime()), R && F >= R && (b ? T(b.start, b.end, !0, void 0) : (h.pause(), c && (c(), c = null))), F < d.totalTime && (W = requestAnimationFrame(Z));
              });
              break;
            case "paused":
              x();
          }
        D != null && D.value && o !== D.value && n(10, o = D.value);
      }), h.on("finish", () => {
        l = !0, c && (c(), c = null);
      }), y && h.play();
    }), B = () => {
      I !== h.config.skipInactive && h.setConfig({ skipInactive: I });
    }, Wt().$$.after_update.push(B), Gr(() => {
      h.pause(), x();
    }), t.$$set = (S) => {
      "replayer" in S && n(17, h = S.replayer), "showController" in S && n(2, p = S.showController), "autoPlay" in S && n(18, y = S.autoPlay), "skipInactive" in S && n(0, I = S.skipInactive), "speedOption" in S && n(3, f = S.speedOption), "speed" in S && n(1, C = S.speed), "tags" in S && n(19, w = S.tags), "inactiveColor" in S && n(20, O = S.inactiveColor);
    }, t.$$.update = () => {
      if (64 & t.$$.dirty[0] && r("ui-update-current-time", { payload: F }), 128 & t.$$.dirty[0] && r("ui-update-player-state", { payload: i }), 131072 & t.$$.dirty[0] && n(8, d = h.getMetaData()), 320 & t.$$.dirty[0]) {
        const S = Math.min(1, F / d.totalTime);
        n(13, u = 100 * S + "%"), r("ui-update-progress", { payload: S });
      }
      655360 & t.$$.dirty[0] && n(9, g = (() => {
        const { context: S } = h.service.state, _ = S.events.length, D = S.events[0].timestamp, Z = S.events[_ - 1].timestamp, X = [];
        return S.events.forEach(($) => {
          if ($.type === te.Custom) {
            const z = { name: $.data.tag, background: w[$.data.tag] || "rgb(73, 80, 246)", position: `${dr(D, Z, $.timestamp)}%` };
            X.push(z);
          }
        }), X;
      })()), 1179648 & t.$$.dirty[0] && n(14, m = (() => {
        try {
          const { context: S } = h.service.state, _ = S.events.length, D = S.events[0].timestamp, Z = S.events[_ - 1].timestamp, X = function(z) {
            const N = [];
            let V = z[0].timestamp;
            for (const E of z)
              Ms(E) && (E.timestamp - V > 1e4 && N.push([V, E.timestamp]), V = E.timestamp);
            return N;
          }(S.events), $ = (z, N, V, E) => ((E - V) / (N - z) * 100).toFixed(2);
          return X.map((z) => ({ name: "inactive period", background: O, position: `${dr(D, Z, z[0])}%`, width: `${$(D, Z, z[0], z[1])}%` }));
        } catch {
          return [];
        }
      })());
    }, [I, C, p, f, () => {
      switch (i) {
        case "playing":
          v();
          break;
        case "paused":
          A();
      }
    }, G, F, i, d, g, o, s, a, u, m, r, (S) => {
      if (o === "skipping")
        return;
      const _ = s.getBoundingClientRect();
      let D = (S.clientX - _.left) / _.width;
      D < 0 ? D = 0 : D > 1 && (D = 1);
      const Z = d.totalTime * D;
      l = !1, M(Z);
    }, h, y, w, O, A, v, M, T, () => {
      n(0, I = !I);
    }, () => Promise.resolve().then(() => {
      n(8, d = h.getMetaData());
    }), function(S) {
      ke[S ? "unshift" : "push"](() => {
        a = S, n(12, a);
      });
    }, function(S) {
      ke[S ? "unshift" : "push"](() => {
        s = S, n(11, s);
      });
    }, (S) => G(S), function(S) {
      I = S, n(0, I);
    }, () => r("fullscreen")];
  }
  class Ws extends fn {
    constructor(e) {
      super(), mn(this, e, Ls, Os, hn, { replayer: 17, showController: 2, autoPlay: 18, skipInactive: 0, speedOption: 3, speed: 1, tags: 19, inactiveColor: 20, toggle: 4, play: 21, pause: 22, goto: 23, playRange: 24, setSpeed: 5, toggleSkipInactive: 25, triggerUpdateMeta: 26 }, null, [-1, -1]);
    }
    get toggle() {
      return this.$$.ctx[4];
    }
    get play() {
      return this.$$.ctx[21];
    }
    get pause() {
      return this.$$.ctx[22];
    }
    get goto() {
      return this.$$.ctx[23];
    }
    get playRange() {
      return this.$$.ctx[24];
    }
    get setSpeed() {
      return this.$$.ctx[5];
    }
    get toggleSkipInactive() {
      return this.$$.ctx[25];
    }
    get triggerUpdateMeta() {
      return this.$$.ctx[26];
    }
  }
  function ur(t) {
    let e, n, r = { replayer: t[7], showController: t[3], autoPlay: t[1], speedOption: t[2], skipInactive: t[0], tags: t[4], inactiveColor: t[5] };
    return e = new Ws({ props: r }), t[32](e), e.$on("fullscreen", t[33]), { c() {
      Pr(e.$$.fragment);
    }, m(i, o) {
      gn(e, i, o), n = !0;
    }, p(i, o) {
      const s = {};
      128 & o[0] && (s.replayer = i[7]), 8 & o[0] && (s.showController = i[3]), 2 & o[0] && (s.autoPlay = i[1]), 4 & o[0] && (s.speedOption = i[2]), 1 & o[0] && (s.skipInactive = i[0]), 16 & o[0] && (s.tags = i[4]), 32 & o[0] && (s.inactiveColor = i[5]), e.$set(s);
    }, i(i) {
      n || (Ne(e.$$.fragment, i), n = !0);
    }, o(i) {
      $e(e.$$.fragment, i), n = !1;
    }, d(i) {
      t[32](null), pn(e, i);
    } };
  }
  function Bs(t) {
    let e, n, r, i, o = t[7] && ur(t);
    return { c() {
      e = ae("div"), n = ae("div"), r = fe(), o && o.c(), L(n, "class", "rr-player__frame"), L(n, "style", t[11]), L(e, "class", "rr-player"), L(e, "style", t[12]);
    }, m(s, a) {
      Ee(s, e, a), J(e, n), t[31](n), J(e, r), o && o.m(e, null), t[34](e), i = !0;
    }, p(s, a) {
      (!i || 2048 & a[0]) && L(n, "style", s[11]), s[7] ? o ? (o.p(s, a), 128 & a[0] && Ne(o, 1)) : (o = ur(s), o.c(), Ne(o, 1), o.m(e, null)) : o && (Zr(), $e(o, 1, 1, () => {
        o = null;
      }), Ur()), (!i || 4096 & a[0]) && L(e, "style", s[12]);
    }, i(s) {
      i || (Ne(o), i = !0);
    }, o(s) {
      $e(o), i = !1;
    }, d(s) {
      s && Ae(e), t[31](null), o && o.d(), t[34](null);
    } };
  }
  function _s(t, e, n) {
    let r, { width: i = 1024 } = e, { height: o = 576 } = e, { maxScale: s = 1 } = e, { events: a = [] } = e, { skipInactive: l = !0 } = e, { autoPlay: c = !0 } = e, { speedOption: d = [1, 2, 4, 8] } = e, { speed: u = 1 } = e, { showController: g = !0 } = e, { tags: m = {} } = e, { inactiveColor: h = "#D4D4D4" } = e, p, y, I, f, C, w, O = i, F = o;
    const W = (b, x) => {
      const A = [i / x.width, o / x.height];
      s && A.push(s), b.style.transform = `scale(${Math.min(...A)})translate(-50%, -50%)`;
    }, R = () => {
      var b;
      p && (tr() ? document.exitFullscreen ? document.exitFullscreen() : document.mozExitFullscreen ? document.mozExitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen() : (b = p).requestFullscreen ? b.requestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.webkitRequestFullscreen ? b.webkitRequestFullscreen() : b.msRequestFullscreen && b.msRequestFullscreen());
    };
    return _r(() => {
      if (d !== void 0 && nr(d) !== "array")
        throw new Error("speedOption must be array");
      if (d.forEach((x) => {
        if (nr(x) !== "number")
          throw new Error("item of speedOption must be number");
      }), d.indexOf(u) < 0)
        throw new Error(`speed must be one of speedOption,
        current config:
        {
          ...
          speed: ${u},
          speedOption: [${d.toString()}]
          ...
        }
        `);
      var b;
      n(7, r = new Ts(a, Object.assign({ speed: u, root: y, unpackFn: Is }, e))), r.on("resize", (x) => {
        W(r.wrapper, x);
      }), b = () => {
        tr() ? setTimeout(() => {
          O = i, F = o, n(13, i = p.offsetWidth), n(14, o = p.offsetHeight - (g ? 80 : 0)), W(r.wrapper, { width: r.iframe.offsetWidth, height: r.iframe.offsetHeight });
        }, 0) : (n(13, i = O), n(14, o = F), W(r.wrapper, { width: r.iframe.offsetWidth, height: r.iframe.offsetHeight }));
      }, document.addEventListener("fullscreenchange", b), document.addEventListener("webkitfullscreenchange", b), document.addEventListener("mozfullscreenchange", b), document.addEventListener("MSFullscreenChange", b), I = () => {
        document.removeEventListener("fullscreenchange", b), document.removeEventListener("webkitfullscreenchange", b), document.removeEventListener("mozfullscreenchange", b), document.removeEventListener("MSFullscreenChange", b);
      };
    }), Gr(() => {
      I && I();
    }), t.$$set = (b) => {
      n(39, e = kn(kn({}, e), xn(b))), "width" in b && n(13, i = b.width), "height" in b && n(14, o = b.height), "maxScale" in b && n(15, s = b.maxScale), "events" in b && n(16, a = b.events), "skipInactive" in b && n(0, l = b.skipInactive), "autoPlay" in b && n(1, c = b.autoPlay), "speedOption" in b && n(2, d = b.speedOption), "speed" in b && n(17, u = b.speed), "showController" in b && n(3, g = b.showController), "tags" in b && n(4, m = b.tags), "inactiveColor" in b && n(5, h = b.inactiveColor);
    }, t.$$.update = () => {
      24576 & t.$$.dirty[0] && n(11, C = er({ width: `${i}px`, height: `${o}px` })), 24584 & t.$$.dirty[0] && n(12, w = er({ width: `${i}px`, height: `${o + (g ? 80 : 0)}px` }));
    }, e = xn(e), [l, c, d, g, m, h, R, r, p, y, f, C, w, i, o, s, a, u, () => r.getMirror(), () => {
      W(r.wrapper, { width: r.iframe.offsetWidth, height: r.iframe.offsetHeight });
    }, (b, x) => {
      switch (r.on(b, x), b) {
        case "ui-update-current-time":
        case "ui-update-progress":
        case "ui-update-player-state":
          f.$on(b, ({ detail: A }) => x(A));
      }
    }, (b) => {
      r.addEvent(b), f.triggerUpdateMeta();
    }, () => r.getMetaData(), () => r, () => {
      f.toggle();
    }, (b) => {
      f.setSpeed(b);
    }, () => {
      f.toggleSkipInactive();
    }, () => {
      f.play();
    }, () => {
      f.pause();
    }, (b, x) => {
      f.goto(b, x);
    }, (b, x, A = !1, v) => {
      f.playRange(b, x, A, v);
    }, function(b) {
      ke[b ? "unshift" : "push"](() => {
        y = b, n(9, y);
      });
    }, function(b) {
      ke[b ? "unshift" : "push"](() => {
        f = b, n(10, f);
      });
    }, () => R(), function(b) {
      ke[b ? "unshift" : "push"](() => {
        p = b, n(8, p);
      });
    }];
  }
  class Gs extends fn {
    constructor(e) {
      super(), mn(this, e, _s, Bs, hn, { width: 13, height: 14, maxScale: 15, events: 16, skipInactive: 0, autoPlay: 1, speedOption: 2, speed: 17, showController: 3, tags: 4, inactiveColor: 5, getMirror: 18, triggerResize: 19, toggleFullscreen: 6, addEventListener: 20, addEvent: 21, getMetaData: 22, getReplayer: 23, toggle: 24, setSpeed: 25, toggleSkipInactive: 26, play: 27, pause: 28, goto: 29, playRange: 30 }, null, [-1, -1]);
    }
    get getMirror() {
      return this.$$.ctx[18];
    }
    get triggerResize() {
      return this.$$.ctx[19];
    }
    get toggleFullscreen() {
      return this.$$.ctx[6];
    }
    get addEventListener() {
      return this.$$.ctx[20];
    }
    get addEvent() {
      return this.$$.ctx[21];
    }
    get getMetaData() {
      return this.$$.ctx[22];
    }
    get getReplayer() {
      return this.$$.ctx[23];
    }
    get toggle() {
      return this.$$.ctx[24];
    }
    get setSpeed() {
      return this.$$.ctx[25];
    }
    get toggleSkipInactive() {
      return this.$$.ctx[26];
    }
    get play() {
      return this.$$.ctx[27];
    }
    get pause() {
      return this.$$.ctx[28];
    }
    get goto() {
      return this.$$.ctx[29];
    }
    get playRange() {
      return this.$$.ctx[30];
    }
  }
  class Vs extends Gs {
    constructor(e) {
      super({ target: e.target, props: e.data || e.props });
    }
  }
  let Bt = [], fi = null;
  const yi = document.createElement("div");
  yi.classList.add("recording-frame");
  const Zs = () => {
    Ys(), Ii(), fi = pt({
      emit(t) {
        Bt.push(t);
      },
      recordCanvas: !0
    });
  }, Us = () => {
    fi();
    const t = document.getElementById(
      "record-player"
    );
    Ks(t), setTimeout(() => {
      new Vs({
        target: t,
        props: {
          events: Bt
        }
      });
    }, 200), zs();
  }, Ps = (t, e) => {
    var n;
    (n = e.contentWindow) == null || n.postMessage(
      {
        eventType: "SCREENRECORDDONE",
        body: {
          recorderedEvent: Bt
        }
      },
      t
    );
  }, Ii = () => {
    Bt = [];
  };
  function Ks(t) {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  }
  const Ys = () => {
    document.body.classList.add("crowd-recording-frame"), document.body.appendChild(yi);
  }, zs = () => {
    document.body.classList.remove("crowd-recording-frame");
  }, Hs = (t, e) => {
    const n = /* @__PURE__ */ new Date();
    n.setTime(
      n.getTime() + e * 60 * 60 * 1e3
    );
    const r = `${t}-user-session=${encodeURIComponent(
      Ue("crowd-widget-user-session")
    )}; expires=${n.toUTCString()}; path=/`;
    document.cookie = r;
  }, Qs = (t) => {
    const e = `${t}-user-session`, r = document.cookie.split(";");
    let i = null;
    return r.forEach((o) => {
      const [s, a] = o.trim().split("=");
      s === e && (i = decodeURIComponent(a));
    }), i !== null;
  }, Ue = (t) => `${t}-${(/* @__PURE__ */ new Date()).getTime()}${Math.floor(Math.random() * 100)}`, Js = () => {
    const t = navigator.userAgent;
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t) ? "Mobile" : /Tablet|iPad/i.test(t) ? "Tablet" : "Desktop";
  }, $s = (t, e, n) => {
    if (t === "ALLPAGES")
      return !0;
    if (t === "SPECIFICPAGES") {
      const r = window.location.href.replace(/\/$/, "");
      if (e === "start_with")
        return r.startsWith(n);
      if (e === "end_with")
        return r.endsWith(n);
      if (e === "contains")
        return r.includes(n);
      if (e === "exactly_matches")
        return r === n;
      if (e === "is_not")
        return r !== n;
      if (e === "matches_regex")
        return new RegExp(n, "i").test(r);
    } else
      return !1;
  }, Xs = async (t) => {
    const e = Js().toLowerCase(), n = $s(
      t.visibilityOption,
      t.specificPageOption,
      t.specificPageValue
    );
    return t.devices.includes(e) && n ? {
      position: t.position,
      showAfter: t.showWidgetAfter
    } : !1;
  }, js = (t) => {
    let e = 0, n = 0, r = 0, i = 0;
    function o(l) {
      l = l || window.event, l.preventDefault(), r = l.clientX, i = l.clientY, document.onmouseup = a, document.onmousemove = s;
    }
    function s(l) {
      l = l || window.event, l.preventDefault(), e = r - l.clientX, n = i - l.clientY, r = l.clientX, i = l.clientY, t.style.top = t.offsetTop - n + "px", t.style.left = t.offsetLeft - e + "px";
    }
    function a() {
      document.onmouseup = null, document.onmousemove = null;
    }
    t.onmousedown = o;
  }, Jt = "*", xe = "crowd-widget", qs = 0.5, $t = "http://localhost:2222/widget-extension";
  let Xt = !1;
  const ea = () => {
    if (window.CrowdApp && window.CrowdApp.widget_token) {
      const t = window.CrowdApp.widget_token;
      new ta(t).setupWidgetContainer();
    } else
      console.error(
        "Crowd App installation failed. Please ensure that you are using the correct code snippet"
      );
  };
  class ta {
    constructor(e) {
      //** Variable that holds the widget token and it will be used across the class*/
      Se(this, "widgetToken", "");
      //** Generate IDs for the div container that will be used for the IFrames */
      Se(this, "panelFrameId", Ue(`${xe}-body`));
      Se(this, "launcherFrameId", Ue(`${xe}-launcher`));
      Se(this, "controllerFrameId", Ue(`${xe}-controller`));
      Se(this, "controllerFrameWrapperId", Ue(
        `${xe}-controller-wrapper`
      ));
      Se(this, "screenRecordPlayerFrameId", Ue(
        `${xe}-record-player-frame`
      ));
      Se(this, "widgetParentContainer", null);
      Se(this, "iframesLoaded", {
        launcherFrame: !1,
        panelFrame: !1,
        controllerFrame: !1
      });
      this.widgetToken = e;
    }
    /** Return all the iFrame reference  */
    getWidgetElementsReference() {
      const e = document.getElementById(
        this.panelFrameId
      ), n = document.getElementById(
        this.launcherFrameId
      ), r = document.getElementById(
        this.controllerFrameId
      ), i = document.getElementById(
        this.controllerFrameWrapperId
      ), o = document.getElementById(
        this.screenRecordPlayerFrameId
      );
      return {
        panelIframe: e,
        launcherIframe: n,
        controllerWapper: i,
        controllerIframe: r,
        playerFrame: o
      };
    }
    /**
     * This private method provides the endpoint for each of the iframe containers that will be created
     */
    getwidgetFrameEndpoint() {
      return {
        panelEndpoint: `${$t}?token=${this.widgetToken}`,
        launcherEndpoint: `${$t}/launcher?token=${this.widgetToken}`,
        controllerEndpoint: `${$t}/recorder-controller`
      };
    }
    setupWidgetContainer() {
      this.widgetParentContainer = document.createElement("div"), this.widgetParentContainer.classList.add("crowd-widget"), this.setupWidgetLauncherElement(), this.setupWidgetPanelElement(), this.setupWidgetControllerElement(), this.setupWidgetRecordPlayerElement(), document.body.appendChild(this.widgetParentContainer), window.addEventListener("message", (e) => {
        this.listenAndExecutePostMessageInteration(e);
      }), this.assignWidgetPanelAndLauncherEndpoints(), js(
        this.getWidgetElementsReference().controllerWapper
      ), this.assignListenerToControlButton();
    }
    //** Setup the iframe for the widget launcher */
    setupWidgetLauncherElement() {
      const e = `<iframe id="${this.launcherFrameId}" frameborder="0" class="crowd-widget-launcher-frame" allowtransparency="true" style="height: 0;"></iframe>`;
      this.widgetParentContainer.innerHTML += e;
    }
    //** Setup the iframe for the widget panel */
    setupWidgetPanelElement() {
      const e = `<iframe id="${this.panelFrameId}" frameborder="0" class="crowd-widget-body-frame" allowtransparency="true" style="height: 0; visibility: hidden;"></iframe>`;
      this.widgetParentContainer.innerHTML += e;
    }
    //** Setup the iframe for the widget controller basically for the screen recording container */
    setupWidgetControllerElement() {
      const e = `<div id="${this.controllerFrameWrapperId}" class="controller-frame crowd-block" style="visibility: hidden;"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg></div>
    <iframe id="${this.controllerFrameId}" frameborder="0" allowtransparency="true"></iframe></div>`;
      this.widgetParentContainer.innerHTML += e;
    }
    setupWidgetRecordPlayerElement() {
      const e = `<div id="${this.screenRecordPlayerFrameId}" class="record-player-frame" style="visibility: hidden;">
      <div class="player-action">
        <button type="button" id="delete-screen-record">Cancel</button>
        <button type="button" id="save-screen-record">Save video</button>
      </div>
      <div class="crowd-player-container" id="record-player"></div>
    </div>`;
      this.widgetParentContainer.innerHTML += e;
    }
    assignListenerToControlButton() {
      var e, n;
      (e = document.getElementById("delete-screen-record")) == null || e.addEventListener("click", () => {
        Ii(), this.toggleCrowdWidgetControllerVisibility("CLOSEPLAYER");
      }), (n = document.getElementById("save-screen-record")) == null || n.addEventListener("click", () => {
        Ps(
          Jt,
          this.getWidgetElementsReference().panelIframe
        ), this.toggleCrowdWidgetControllerVisibility("CLOSEPLAYER");
      });
    }
    assignWidgetPanelAndLauncherEndpoints() {
      const e = this.getWidgetElementsReference();
      e.launcherIframe !== null && e.panelIframe && e.panelIframe.contentWindow && e.launcherIframe.contentWindow && (e.launcherIframe.contentWindow.location.href = this.getwidgetFrameEndpoint().launcherEndpoint, e.panelIframe.contentWindow.location.href = this.getwidgetFrameEndpoint().panelEndpoint);
    }
    assignWidgetControllerEndpoints() {
      const e = this.getWidgetElementsReference();
      e.controllerIframe !== null && e.controllerIframe.contentWindow && (e.controllerIframe.contentWindow.location.href = this.getwidgetFrameEndpoint().controllerEndpoint);
    }
    adjustWidgetPanelPositionDimension(e, n) {
      const r = this.getWidgetElementsReference();
      e === "Position" ? r.panelIframe.classList.add(
        `widget-panel-${n.launcherPosition.toLowerCase().split("_").join("-")}`
      ) : e === "Resize" && (r.panelIframe.style.height = `${n.height}px`);
    }
    adjustWidgetLauncherPositionDimension(e, n) {
      const r = this.getWidgetElementsReference();
      e === "Position" ? r.launcherIframe.classList.add(
        `widget-launcher-${n.position.toLowerCase().split("_").join("-")}`
      ) : e === "Resize" && (r.launcherIframe.style.height = `${n.height}px`, r.launcherIframe.style.width = `${n.width}px`);
    }
    toggleWidgetVisibility() {
      var n;
      const e = this.getWidgetElementsReference();
      Xt ? (e.panelIframe.style.visibility = "hidden", e.launcherIframe.style.visibility = "visible") : (e.panelIframe.style.visibility = "visible", e.launcherIframe.style.visibility = "hidden", (n = e.panelIframe.contentWindow) == null || n.postMessage(
        {
          eventType: "STARTCOUNTDOWN"
        },
        Jt
      )), Xt = !Xt;
    }
    toggleCrowdWidgetControllerVisibility(e) {
      const n = this.getWidgetElementsReference();
      e === "STARTRECORDING" ? (n.panelIframe.style.visibility = "hidden", n.controllerWapper.style.visibility = "visible") : e === "STOPRECORDING" ? (document.body.classList.add("show-crowd-player"), n.playerFrame.style.visibility = "visible", n.controllerWapper.style.visibility = "hidden") : e === "CLOSEPLAYER" && (document.body.classList.remove("show-crowd-player"), n.playerFrame.style.visibility = "hidden", n.panelIframe.style.visibility = "visible");
    }
    listenAndExecutePostMessageInteration(e) {
      const n = this.getWidgetElementsReference();
      if (e.data.eventType === "PANELLOADED")
        this.adjustWidgetPanelPositionDimension("Position", e.data.body);
      else if (e.data.eventType === "PANELRESIZE")
        this.adjustWidgetPanelPositionDimension("Resize", e.data.body);
      else if (e.data.eventType === "LAUNCHERLOADED") {
        if (!e.data.body.showFeedbackWidget || e.data.body.showFeedbackWidget === "false") {
          this.clearWidgetOnDeactivation();
          return;
        }
        Xs(e.data.body.displayRule).then(
          (r) => {
            if (r)
              setTimeout(() => {
                var i;
                this.adjustWidgetLauncherPositionDimension("Position", r), Qs(xe) || (i = n.launcherIframe.contentWindow) == null || i.postMessage(
                  {
                    eventType: "WIDGETIMPRESSION"
                  },
                  Jt
                );
              }, r.showAfter);
            else {
              this.clearWidgetOnDeactivation();
              return;
            }
          }
        );
      } else
        e.data.eventType === "LAUNCHERRESIZE" ? this.adjustWidgetLauncherPositionDimension("Resize", e.data.body) : e.data.eventType === "IMPRESSIONRECORDED" ? Hs(xe, qs) : e.data.eventType === "OPENPANEL" ? (this.toggleWidgetVisibility(), n.controllerWapper !== null && !this.iframesLoaded.controllerFrame && (this.assignWidgetControllerEndpoints(), this.iframesLoaded.controllerFrame = !0)) : e.data.eventType === "STARTSCREENRECORD" ? (Zs(), this.toggleCrowdWidgetControllerVisibility("STARTRECORDING")) : e.data.eventType === "STOPSCREENRECORD" && (Us(), n.controllerWapper.style.visibility = "hidden", this.toggleCrowdWidgetControllerVisibility("STOPRECORDING"));
    }
    clearWidgetOnDeactivation() {
      this.widgetParentContainer.remove();
    }
    getClientSiteDomain() {
      const e = window.location.href, r = new URL(e).hostname;
      return console.log(r), r;
    }
  }
  ea();
});
export default na();
