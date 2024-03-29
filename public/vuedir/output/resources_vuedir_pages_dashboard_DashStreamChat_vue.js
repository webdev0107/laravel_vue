(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vuedir_pages_dashboard_DashStreamChat_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _assets_jsfunc_aliyun_rts_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/aliyun-rts-sdk */ "./resources/vuedir/assets/jsfunc/aliyun-rts-sdk.js");
/* harmony import */ var _assets_jsfunc_aliyun_rts_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_jsfunc_aliyun_rts_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //import "aliyun-rts-sdk";


var vueOBJ = null;
var pgperm = {};
var video = null;
var rvideo = null;
var pushUrlPre = 'artc://in.waaup.online/waaup/';
var pushUrl = null;
var streamConfigSelect = null;
var createStream = null;
var removeStream = null;
var pushButton = null;
var stopButton = null;
var isSupportButton = null;
var pullUrlPre = 'artc://live.waaup.online/waaup/';
var pullUrl = null;
var pullstart = null;
var pullstop = null;
var localStream = null;
var aliRts = AliRTS.createClient();

function getStreamConfig() {
  var streamConfig = {
    audio: true
  };

  if (streamConfigSelect.value === 'camera') {
    streamConfig.video = true;
  } else if (streamConfigSelect.value === 'screen') {
    streamConfig.screen = true;
  }

  return streamConfig;
}

function toast(msg) {
  setTimeout(function () {
    document.getElementsByClassName('toast-wrap')[0].getElementsByClassName('toast-msg')[0].innerHTML = msg;
    var toastTag = document.getElementsByClassName('toast-wrap')[0];
    toastTag.className = toastTag.className.replace('toastAnimate', '');
    setTimeout(function () {
      toastTag.className = toastTag.className + ' toastAnimate';
    }, 100);
  }, 500);
}

function initChatControllers() {
  video = document.getElementById("video");
  rvideo = document.getElementById("rvideo");
  pushUrl = document.getElementById("pushurl");
  streamConfigSelect = document.getElementById("streamConfig");
  createStream = document.getElementById("createStreamButton");
  removeStream = document.getElementById("removeStreamButton");
  pushButton = document.getElementById("pushButton");
  stopButton = document.getElementById("stopButton");
  isSupportButton = document.getElementById("isSupportButton");
  pullUrl = document.getElementById("pullurl");
  pullstart = document.getElementById("pullstart");
  pullstop = document.getElementById("pullstop");
}

function AddChatEvents() {
  aliRts.on('onError', function (err) {
    if (err.errorCode === 10201) {
      toast("Autoplay failed");
    }
  });
  $(createStream).on('click', function () {
    var streamConfig = getStreamConfig();
    AliRTS.createStream(streamConfig).then(function (stream) {
      localStream = stream;

      if (localStream.videoTrack) {
        localStream.play(video);
      }

      createStream.disabled = true;
      removeStream.disabled = false;
      toast('Successfully created local stream ');
    })["catch"](function (err) {
      toast('Failed to create local stream ' + JSON.stringify(err));
      console.log('Failed to create local stream ' + JSON.stringify(err));
    });
  });
  $(removeStream).on('click', function () {
    if (localStream) {
      localStream.stop();
      video.srcObject = null;
      createStream.disabled = false;
      removeStream.disabled = true;
      toast('Local stream removed successfully ');
    }
  });
  $(pushButton).on('click', function () {
    if (!localStream) {
      toast('Please create a local stream first ');
      return;
    }

    pushUrl.value = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.js_trim(pushUrl.value);

    if (!pushUrl.value || pushUrl.value == "") {
      toast('Please enter the streaming name ');
      return;
    }

    var streamname = pushUrlPre + pushUrl.value;
    aliRts.publish(streamname, localStream).then(function () {
      pushButton.disabled = true;
      stopButton.disabled = false;
      toast('Push Stream Success.');
    })["catch"](function (err) {
      toast('Push Stream fail : ' + JSON.stringify(err));
      console.log('Push Stream fail : ' + JSON.stringify(err));
    });
  });
  $(stopButton).on('click', function () {
    aliRts.unpublish();
    pushButton.disabled = false;
    stopButton.disabled = true;
    toast('Stop Streaming');
  });
  /* part of subscribe*/

  $(isSupportButton).on('click', function () {
    aliRts.isSupport({
      isReceiveVideo: pullUrl.value.indexOf('subvideo=no') === -1
    }).then(function (re) {
      console.log(re);
      toast("Current environment support " + (pullUrl.value.indexOf('subvideo=no') === -1 ? 'Audio and video' : 'Pure audio') + "model");
    })["catch"](function (err) {
      toast(err.message);
    });
  });
  $(pullstart).on('click', function () {
    $(pullstop).bind("click");
    pullUrl.value = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.js_trim(pullUrl.value);

    if (!pullUrl.value || pullUrl.value == "") {
      toast('Please select the streaming name ');
      return;
    }

    var streamname = pullUrlPre + pullUrl.value;
    aliRts.subscribe(streamname).then(function (remoteStream) {
      var media = rvideo;
      remoteStream.play(media);
      pullstart.disabled = true;
      pullstop.disabled = false;
    });
  });
  $(pullstop).on('click', function () {
    aliRts.unsubscribe();
    pullstart.disabled = false;
    pullstop.disabled = true;
  });
}

function streamChange() {
  /* aliRts.unsubscribe();
   pullstart.disabled = false;
   pullstop.disabled = true;
   pullUrl.value = myjs.data.js_trim(pullUrl.value);
   if(!pullUrl.value|| pullUrl.value==""){
       toast('Please select the streaming name ')
       return
   }
    setTimeout(function() {
       var streamname = pullUrlPre + pullUrl.value;
       aliRts.subscribe(streamname).then((remoteStream) => {
           let media = rvideo;
           remoteStream.play(media);
           pullstart.disabled = true;
           pullstop.disabled = false;
       })
   },1000);*/
  $(pullstop).bind("click");
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pageid: 'dashboard-chat-fav',
      mu_dash: '',
      musu_dash_chat: '',
      streamlist: []
    };
  },
  created: function created() {},
  computed: {
    // 계산된 getter
    title: function title() {
      return this.$store.state.curMenu;
    },
    cmu_dash: function cmu_dash() {
      return this.mu_dash;
    },
    cmusu_dash_chat: function cmusu_dash_chat() {
      return this.musu_dash_chat;
    },
    contentchange: function contentchange() {
      //cckd
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        //console.log(obj.hasOwnProperty(key));
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      return this.$store.state.contentchange;
    }
  },
  mounted: function mounted() {
    vueOBJ = this;
    /*
    pgperm = nav_module.data.getPagePermission(this.$store.state.permission, this.pageid);
    $('#'+this.pageid).click(function(){
        myjs.data.addOnfavList(this, vueOBJ);
    });
    myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
    */

    initChatControllers();
    AddChatEvents();
    this.getStreamList();
  },
  methods: {
    /* fav part */
    getSiteFaveritelist: function getSiteFaveritelist(list) {
      if (list != null && list != '') {
        var imgsrc = '/images/icons/star_f.png';
        $('#' + this.pageid + ' img').attr("src", imgsrc);
        $('#' + this.pageid).attr("data-status", "on");
      }
    },
    getStreamList: function getStreamList() {
      $.ajax({
        method: "POST",
        url: "admin.getStreamList",
        success: function success(data) {
          if (data.msg == "ok") {
            var lists = data.lists;
            var TotalNum = lists.TotalNum;
            var TotalPage = lists.TotalPage;
            var PageNum = lists.PageNum;
            var PageSize = lists.PageSize;
            var LiveStreamOnlineInfo = lists.OnlineInfo.LiveStreamOnlineInfo;
            this.streamlist = LiveStreamOnlineInfo;

            if (this.streamlist.length > 0) {
              pullUrl.innerHTML = '';

              for (var i = 0; i < this.streamlist.length; i++) {
                var option = document.createElement('option');
                option.value = this.streamlist[i].StreamName;
                option.text = this.streamlist[i].StreamName;
                pullUrl.appendChild(option);
              }

              pullUrl.selectedIndex = 0;
              pullUrl.onchange = streamChange;
            }
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/vuedir/assets/jsfunc/aliyun-rts-sdk.js":
/*!**********************************************************!*\
  !*** ./resources/vuedir/assets/jsfunc/aliyun-rts-sdk.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! aliyun rts sdk - ver2.0.0 created:2021-8-4 9:47:05 AM */
!function (e, t) {
  if ("object" == ( false ? 0 : _typeof(exports)) && "object" == ( false ? 0 : _typeof(module))) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var n, r; }
}(window, function () {
  return function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var i = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }

    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) {
        r.d(n, i, function (t) {
          return e[t];
        }.bind(null, i));
      }
      return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 22);
  }([function (e, t, r) {
    "use strict";

    var n = r(13),
        i = Object.prototype.toString;

    function o(e) {
      return "[object Array]" === i.call(e);
    }

    function a(e) {
      return void 0 === e;
    }

    function s(e) {
      return null !== e && "object" == _typeof(e);
    }

    function c(e) {
      if ("[object Object]" !== i.call(e)) return !1;
      var t = Object.getPrototypeOf(e);
      return null === t || t === Object.prototype;
    }

    function d(e) {
      return "[object Function]" === i.call(e);
    }

    function p(e, t) {
      if (null != e) if ("object" != _typeof(e) && (e = [e]), o(e)) for (var r = 0, n = e.length; r < n; r++) {
        t.call(null, e[r], r, e);
      } else for (var i in e) {
        Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
      }
    }

    e.exports = {
      isArray: o,
      isArrayBuffer: function isArrayBuffer(e) {
        return "[object ArrayBuffer]" === i.call(e);
      },
      isBuffer: function isBuffer(e) {
        return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
      },
      isFormData: function isFormData(e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function isArrayBufferView(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function isString(e) {
        return "string" == typeof e;
      },
      isNumber: function isNumber(e) {
        return "number" == typeof e;
      },
      isObject: s,
      isPlainObject: c,
      isUndefined: a,
      isDate: function isDate(e) {
        return "[object Date]" === i.call(e);
      },
      isFile: function isFile(e) {
        return "[object File]" === i.call(e);
      },
      isBlob: function isBlob(e) {
        return "[object Blob]" === i.call(e);
      },
      isFunction: d,
      isStream: function isStream(e) {
        return s(e) && d(e.pipe);
      },
      isURLSearchParams: function isURLSearchParams(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
      },
      isStandardBrowserEnv: function isStandardBrowserEnv() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
      },
      forEach: p,
      merge: function e() {
        var t = {};

        function r(r, n) {
          c(t[n]) && c(r) ? t[n] = e(t[n], r) : c(r) ? t[n] = e({}, r) : o(r) ? t[n] = r.slice() : t[n] = r;
        }

        for (var n = 0, i = arguments.length; n < i; n++) {
          p(arguments[n], r);
        }

        return t;
      },
      extend: function extend(e, t, r) {
        return p(t, function (t, i) {
          e[i] = r && "function" == typeof t ? n(t, r) : t;
        }), e;
      },
      trim: function trim(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      },
      stripBOM: function stripBOM(e) {
        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
      }
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function () {
      function e() {
        this._eventMap = {};
      }

      return e.prototype.listeners = function (e) {
        return this._eventMap[e] || [];
      }, e.prototype.emit = function (e) {
        for (var t = this, r = [], n = 1; n < arguments.length; n++) {
          r[n - 1] = arguments[n];
        }

        var i = this._eventMap[e];
        return !!Array.isArray(i) && (i.forEach(function (e) {
          return e.apply(t, r);
        }), !0);
      }, e.prototype.off = function (e, t) {
        var r = this._eventMap[e];
        return Array.isArray(r) && (this._eventMap[e] = r.filter(function (e) {
          return e !== t;
        })), this;
      }, e.prototype.removeAllListeners = function (e) {
        return void 0 === e ? this._eventMap = {} : this._eventMap[e] && (this._eventMap[e] = []), this;
      }, e.prototype.on = function (e, t) {
        return this._eventMap[e] ? this._eventMap[e].push(t) : this._eventMap[e] = [t], this;
      }, e.prototype.once = function (e, t) {
        var r = this,
            n = function n() {
          for (var i = [], o = 0; o < arguments.length; o++) {
            i[o] = arguments[o];
          }

          r.off(e, n), t.apply(r, i);
        };

        return this.on(e, n), this;
      }, e;
    }();

    t["default"] = n;
  }, function (e, t, r) {
    "use strict";

    var n = {
      generateIdentifier: function generateIdentifier() {
        return Math.random().toString(36).substr(2, 10);
      }
    };
    n.localCName = n.generateIdentifier(), n.splitLines = function (e) {
      return e.trim().split("\n").map(function (e) {
        return e.trim();
      });
    }, n.splitSections = function (e) {
      return e.split("\nm=").map(function (e, t) {
        return (t > 0 ? "m=" + e : e).trim() + "\r\n";
      });
    }, n.getDescription = function (e) {
      var t = n.splitSections(e);
      return t && t[0];
    }, n.getMediaSections = function (e) {
      var t = n.splitSections(e);
      return t.shift(), t;
    }, n.matchPrefix = function (e, t) {
      return n.splitLines(e).filter(function (e) {
        return 0 === e.indexOf(t);
      });
    }, n.parseCandidate = function (e) {
      for (var t, r = {
        foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
        component: parseInt(t[1], 10),
        protocol: t[2].toLowerCase(),
        priority: parseInt(t[3], 10),
        ip: t[4],
        address: t[4],
        port: parseInt(t[5], 10),
        type: t[7]
      }, n = 8; n < t.length; n += 2) {
        switch (t[n]) {
          case "raddr":
            r.relatedAddress = t[n + 1];
            break;

          case "rport":
            r.relatedPort = parseInt(t[n + 1], 10);
            break;

          case "tcptype":
            r.tcpType = t[n + 1];
            break;

          case "ufrag":
            r.ufrag = t[n + 1], r.usernameFragment = t[n + 1];
            break;

          default:
            r[t[n]] = t[n + 1];
        }
      }

      return r;
    }, n.writeCandidate = function (e) {
      var t = [];
      t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.address || e.ip), t.push(e.port);
      var r = e.type;
      return t.push("typ"), t.push(r), "host" !== r && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ");
    }, n.parseIceOptions = function (e) {
      return e.substr(14).split(" ");
    }, n.parseRtpMap = function (e) {
      var t = e.substr(9).split(" "),
          r = {
        payloadType: parseInt(t.shift(), 10)
      };
      return t = t[0].split("/"), r.name = t[0], r.clockRate = parseInt(t[1], 10), r.channels = 3 === t.length ? parseInt(t[2], 10) : 1, r.numChannels = r.channels, r;
    }, n.writeRtpMap = function (e) {
      var t = e.payloadType;
      void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
      var r = e.channels || e.numChannels || 1;
      return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== r ? "/" + r : "") + "\r\n";
    }, n.parseExtmap = function (e) {
      var t = e.substr(9).split(" ");
      return {
        id: parseInt(t[0], 10),
        direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
        uri: t[1]
      };
    }, n.writeExtmap = function (e) {
      return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n";
    }, n.parseFmtp = function (e) {
      for (var t, r = {}, n = e.substr(e.indexOf(" ") + 1).split(";"), i = 0; i < n.length; i++) {
        r[(t = n[i].trim().split("="))[0].trim()] = t[1];
      }

      return r;
    }, n.writeFmtp = function (e) {
      var t = "",
          r = e.payloadType;

      if (void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
        var n = [];
        Object.keys(e.parameters).forEach(function (t) {
          e.parameters[t] ? n.push(t + "=" + e.parameters[t]) : n.push(t);
        }), t += "a=fmtp:" + r + " " + n.join(";") + "\r\n";
      }

      return t;
    }, n.parseRtcpFb = function (e) {
      var t = e.substr(e.indexOf(" ") + 1).split(" ");
      return {
        type: t.shift(),
        parameter: t.join(" ")
      };
    }, n.writeRtcpFb = function (e) {
      var t = "",
          r = e.payloadType;
      return void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach(function (e) {
        t += "a=rtcp-fb:" + r + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n";
      }), t;
    }, n.parseSsrcMedia = function (e) {
      var t = e.indexOf(" "),
          r = {
        ssrc: parseInt(e.substr(7, t - 7), 10)
      },
          n = e.indexOf(":", t);
      return n > -1 ? (r.attribute = e.substr(t + 1, n - t - 1), r.value = e.substr(n + 1)) : r.attribute = e.substr(t + 1), r;
    }, n.parseSsrcGroup = function (e) {
      var t = e.substr(13).split(" ");
      return {
        semantics: t.shift(),
        ssrcs: t.map(function (e) {
          return parseInt(e, 10);
        })
      };
    }, n.getMid = function (e) {
      var t = n.matchPrefix(e, "a=mid:")[0];
      if (t) return t.substr(6);
    }, n.parseFingerprint = function (e) {
      var t = e.substr(14).split(" ");
      return {
        algorithm: t[0].toLowerCase(),
        value: t[1]
      };
    }, n.getDtlsParameters = function (e, t) {
      return {
        role: "auto",
        fingerprints: n.matchPrefix(e + t, "a=fingerprint:").map(n.parseFingerprint)
      };
    }, n.writeDtlsParameters = function (e, t) {
      var r = "a=setup:" + t + "\r\n";
      return e.fingerprints.forEach(function (e) {
        r += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n";
      }), r;
    }, n.parseCryptoLine = function (e) {
      var t = e.substr(9).split(" ");
      return {
        tag: parseInt(t[0], 10),
        cryptoSuite: t[1],
        keyParams: t[2],
        sessionParams: t.slice(3)
      };
    }, n.writeCryptoLine = function (e) {
      return "a=crypto:" + e.tag + " " + e.cryptoSuite + " " + ("object" == _typeof(e.keyParams) ? n.writeCryptoKeyParams(e.keyParams) : e.keyParams) + (e.sessionParams ? " " + e.sessionParams.join(" ") : "") + "\r\n";
    }, n.parseCryptoKeyParams = function (e) {
      if (0 !== e.indexOf("inline:")) return null;
      var t = e.substr(7).split("|");
      return {
        keyMethod: "inline",
        keySalt: t[0],
        lifeTime: t[1],
        mkiValue: t[2] ? t[2].split(":")[0] : void 0,
        mkiLength: t[2] ? t[2].split(":")[1] : void 0
      };
    }, n.writeCryptoKeyParams = function (e) {
      return e.keyMethod + ":" + e.keySalt + (e.lifeTime ? "|" + e.lifeTime : "") + (e.mkiValue && e.mkiLength ? "|" + e.mkiValue + ":" + e.mkiLength : "");
    }, n.getCryptoParameters = function (e, t) {
      return n.matchPrefix(e + t, "a=crypto:").map(n.parseCryptoLine);
    }, n.getIceParameters = function (e, t) {
      var r = n.matchPrefix(e + t, "a=ice-ufrag:")[0],
          i = n.matchPrefix(e + t, "a=ice-pwd:")[0];
      return r && i ? {
        usernameFragment: r.substr(12),
        password: i.substr(10)
      } : null;
    }, n.writeIceParameters = function (e) {
      return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n";
    }, n.parseRtpParameters = function (e) {
      for (var t = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: [],
        rtcp: []
      }, r = n.splitLines(e)[0].split(" "), i = 3; i < r.length; i++) {
        var o = r[i],
            a = n.matchPrefix(e, "a=rtpmap:" + o + " ")[0];

        if (a) {
          var s = n.parseRtpMap(a),
              c = n.matchPrefix(e, "a=fmtp:" + o + " ");

          switch (s.parameters = c.length ? n.parseFmtp(c[0]) : {}, s.rtcpFeedback = n.matchPrefix(e, "a=rtcp-fb:" + o + " ").map(n.parseRtcpFb), t.codecs.push(s), s.name.toUpperCase()) {
            case "RED":
            case "ULPFEC":
              t.fecMechanisms.push(s.name.toUpperCase());
          }
        }
      }

      return n.matchPrefix(e, "a=extmap:").forEach(function (e) {
        t.headerExtensions.push(n.parseExtmap(e));
      }), t;
    }, n.writeRtpDescription = function (e, t) {
      var r = "";
      r += "m=" + e + " ", r += t.codecs.length > 0 ? "9" : "0", r += " UDP/TLS/RTP/SAVPF ", r += t.codecs.map(function (e) {
        return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType;
      }).join(" ") + "\r\n", r += "c=IN IP4 0.0.0.0\r\n", r += "a=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach(function (e) {
        r += n.writeRtpMap(e), r += n.writeFmtp(e), r += n.writeRtcpFb(e);
      });
      var i = 0;
      return t.codecs.forEach(function (e) {
        e.maxptime > i && (i = e.maxptime);
      }), i > 0 && (r += "a=maxptime:" + i + "\r\n"), r += "a=rtcp-mux\r\n", t.headerExtensions && t.headerExtensions.forEach(function (e) {
        r += n.writeExtmap(e);
      }), r;
    }, n.parseRtpEncodingParameters = function (e) {
      var t,
          r = [],
          i = n.parseRtpParameters(e),
          o = -1 !== i.fecMechanisms.indexOf("RED"),
          a = -1 !== i.fecMechanisms.indexOf("ULPFEC"),
          s = n.matchPrefix(e, "a=ssrc:").map(function (e) {
        return n.parseSsrcMedia(e);
      }).filter(function (e) {
        return "cname" === e.attribute;
      }),
          c = s.length > 0 && s[0].ssrc,
          d = n.matchPrefix(e, "a=ssrc-group:FID").map(function (e) {
        return e.substr(17).split(" ").map(function (e) {
          return parseInt(e, 10);
        });
      });
      d.length > 0 && d[0].length > 1 && d[0][0] === c && (t = d[0][1]), i.codecs.forEach(function (e) {
        if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
          var n = {
            ssrc: c,
            codecPayloadType: parseInt(e.parameters.apt, 10)
          };
          c && t && (n.rtx = {
            ssrc: t
          }), r.push(n), o && ((n = JSON.parse(JSON.stringify(n))).fec = {
            ssrc: c,
            mechanism: a ? "red+ulpfec" : "red"
          }, r.push(n));
        }
      }), 0 === r.length && c && r.push({
        ssrc: c
      });
      var p = n.matchPrefix(e, "b=");
      return p.length && (p = 0 === p[0].indexOf("b=TIAS:") ? parseInt(p[0].substr(7), 10) : 0 === p[0].indexOf("b=AS:") ? 1e3 * parseInt(p[0].substr(5), 10) * .95 - 16e3 : void 0, r.forEach(function (e) {
        e.maxBitrate = p;
      })), r;
    }, n.parseRtcpParameters = function (e) {
      var t = {},
          r = n.matchPrefix(e, "a=ssrc:").map(function (e) {
        return n.parseSsrcMedia(e);
      }).filter(function (e) {
        return "cname" === e.attribute;
      })[0];
      r && (t.cname = r.value, t.ssrc = r.ssrc);
      var i = n.matchPrefix(e, "a=rtcp-rsize");
      t.reducedSize = i.length > 0, t.compound = 0 === i.length;
      var o = n.matchPrefix(e, "a=rtcp-mux");
      return t.mux = o.length > 0, t;
    }, n.parseMsid = function (e) {
      var t,
          r = n.matchPrefix(e, "a=msid:");
      if (1 === r.length) return {
        stream: (t = r[0].substr(7).split(" "))[0],
        track: t[1]
      };
      var i = n.matchPrefix(e, "a=ssrc:").map(function (e) {
        return n.parseSsrcMedia(e);
      }).filter(function (e) {
        return "msid" === e.attribute;
      });
      return i.length > 0 ? {
        stream: (t = i[0].value.split(" "))[0],
        track: t[1]
      } : void 0;
    }, n.parseSctpDescription = function (e) {
      var t,
          r = n.parseMLine(e),
          i = n.matchPrefix(e, "a=max-message-size:");
      i.length > 0 && (t = parseInt(i[0].substr(19), 10)), isNaN(t) && (t = 65536);
      var o = n.matchPrefix(e, "a=sctp-port:");
      if (o.length > 0) return {
        port: parseInt(o[0].substr(12), 10),
        protocol: r.fmt,
        maxMessageSize: t
      };

      if (n.matchPrefix(e, "a=sctpmap:").length > 0) {
        var a = n.matchPrefix(e, "a=sctpmap:")[0].substr(10).split(" ");
        return {
          port: parseInt(a[0], 10),
          protocol: a[1],
          maxMessageSize: t
        };
      }
    }, n.writeSctpDescription = function (e, t) {
      var r = [];
      return r = "DTLS/SCTP" !== e.protocol ? ["m=" + e.kind + " 9 " + e.protocol + " " + t.protocol + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctp-port:" + t.port + "\r\n"] : ["m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n"], void 0 !== t.maxMessageSize && r.push("a=max-message-size:" + t.maxMessageSize + "\r\n"), r.join("");
    }, n.generateSessionId = function () {
      return Math.random().toString().substr(2, 21);
    }, n.writeSessionBoilerplate = function (e, t, r) {
      var i = void 0 !== t ? t : 2;
      return "v=0\r\no=" + (r || "thisisadapterortc") + " " + (e || n.generateSessionId()) + " " + i + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n";
    }, n.writeMediaSection = function (e, t, r, i) {
      var o = n.writeRtpDescription(e.kind, t);

      if (o += n.writeIceParameters(e.iceGatherer.getLocalParameters()), o += n.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : "active"), o += "a=mid:" + e.mid + "\r\n", e.direction ? o += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? o += "a=sendrecv\r\n" : e.rtpSender ? o += "a=sendonly\r\n" : e.rtpReceiver ? o += "a=recvonly\r\n" : o += "a=inactive\r\n", e.rtpSender) {
        var a = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
        o += "a=" + a, o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + a, e.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + a, o += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n");
      }

      return o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + n.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + n.localCName + "\r\n"), o;
    }, n.getDirection = function (e, t) {
      for (var r = n.splitLines(e), i = 0; i < r.length; i++) {
        switch (r[i]) {
          case "a=sendrecv":
          case "a=sendonly":
          case "a=recvonly":
          case "a=inactive":
            return r[i].substr(2);
        }
      }

      return t ? n.getDirection(t) : "sendrecv";
    }, n.getKind = function (e) {
      return n.splitLines(e)[0].split(" ")[0].substr(2);
    }, n.isRejected = function (e) {
      return "0" === e.split(" ", 2)[1];
    }, n.parseMLine = function (e) {
      var t = n.splitLines(e)[0].substr(2).split(" ");
      return {
        kind: t[0],
        port: parseInt(t[1], 10),
        protocol: t[2],
        fmt: t.slice(3).join(" ")
      };
    }, n.parseOLine = function (e) {
      var t = n.matchPrefix(e, "o=")[0].substr(2).split(" ");
      return {
        username: t[0],
        sessionId: t[1],
        sessionVersion: parseInt(t[2], 10),
        netType: t[3],
        addressType: t[4],
        address: t[5]
      };
    }, n.isValidSDP = function (e) {
      if ("string" != typeof e || 0 === e.length) return !1;

      for (var t = n.splitLines(e), r = 0; r < t.length; r++) {
        if (t[r].length < 2 || "=" !== t[r].charAt(1)) return !1;
      }

      return !0;
    }, e.exports = n;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e[e.ERROR_DEVICE_UNKNOWNERROR = 1e4] = "ERROR_DEVICE_UNKNOWNERROR", e[e.ERROR_DEVICE_AUDIODEVICE_NOTFOUND = 10001] = "ERROR_DEVICE_AUDIODEVICE_NOTFOUND", e[e.ERROR_DEVICE_VIDEODEVICE_NOTFOUND = 10002] = "ERROR_DEVICE_VIDEODEVICE_NOTFOUND", e[e.ERROR_DEVICE_AUDIODEVICE_NOTALLOWED = 10003] = "ERROR_DEVICE_AUDIODEVICE_NOTALLOWED", e[e.ERROR_DEVICE_VIDEODEVICE_NOTALLOWED = 10004] = "ERROR_DEVICE_VIDEODEVICE_NOTALLOWED", e[e.ERROR_DEVICE_AUDIODEVICE_NOTREADABLE = 10005] = "ERROR_DEVICE_AUDIODEVICE_NOTREADABLE", e[e.ERROR_DEVICE_VIDEODEVICE_NOTREADABLE = 10006] = "ERROR_DEVICE_VIDEODEVICE_NOTREADABLE", e[e.ERROR_DEIVCE_CONSTRAINEDERROR = 10007] = "ERROR_DEIVCE_CONSTRAINEDERROR", e[e.ERROR_SCREENSHARE_UNKNOWNERRO = 10010] = "ERROR_SCREENSHARE_UNKNOWNERRO", e[e.ERROR_SCREENSHARE_NOTALLOWED = 10011] = "ERROR_SCREENSHARE_NOTALLOWED", e[e.ERROR_SCREENSHARE_ENDED = 10012] = "ERROR_SCREENSHARE_ENDED", e[e.ERROR_SCREENSHARE_NOPERMISSION = 10013] = "ERROR_SCREENSHARE_NOPERMISSION", e[e.ERROR_SCREENSHARE_INVALIDACCESS = 10014] = "ERROR_SCREENSHARE_INVALIDACCESS", e[e.ERROR_SCREENSHARE_NOTSUPPORT = 10018] = "ERROR_SCREENSHARE_NOTSUPPORT", e[e.ERROR_DEVICE_NOTSUPPORT = 10019] = "ERROR_DEVICE_NOTSUPPORT", e[e.ERROR_SIGNAL_ERROR = 10101] = "ERROR_SIGNAL_ERROR", e[e.ERROR_PLAY_FAILED = 10102] = "ERROR_PLAY_FAILED", e[e.ERROR_NOTSUPPORT_WEBRTC = 10110] = "ERROR_NOTSUPPORT_WEBRTC", e[e.ERROR_BROWSER_NOTSUPPORT = 10111] = "ERROR_BROWSER_NOTSUPPORT", e[e.ERROR_BROWSER_VERSIONLOW = 10112] = "ERROR_BROWSER_VERSIONLOW", e[e.ERROR_NOTSUPPORT_H264 = 10113] = "ERROR_NOTSUPPORT_H264", e[e.ERROR_CREATEOFFER = 10114] = "ERROR_CREATEOFFER", e[e.ERROR_HEMLELEMENT_NOTMATCH = 10125] = "ERROR_HEMLELEMENT_NOTMATCH", e[e.ERROR_AUTOPLAY_ERROR = 10201] = "ERROR_AUTOPLAY_ERROR", e[e.ERROR_PLAY_URL = 10202] = "ERROR_PLAY_URL", e[e.ERROR_SUBSCRIBE_NOTHING = 10203] = "ERROR_SUBSCRIBE_NOTHING", e[e.ERROR_HTMLELEMENT_ERROR = 10204] = "ERROR_HTMLELEMENT_ERROR", e[e.ERROR_HTTPREQUEST_ERROR = 10205] = "ERROR_HTTPREQUEST_ERROR", e[e.ERROR_ANSWER_ERROR = 10206] = "ERROR_ANSWER_ERROR", e[e.ERROR_PUBLISH_URL = 10300] = "ERROR_PUBLISH_URL", e[e.ERROR_PUBLISH_NOAUDIO = 10301] = "ERROR_PUBLISH_NOAUDIO", e[e.ERROR_MEDIASTREAMTRACK_TYPE_ERROR = 11e3] = "ERROR_MEDIASTREAMTRACK_TYPE_ERROR", e[e.ERROR_MEDIASTREAMTRACK_KIND_ERROR = 11001] = "ERROR_MEDIASTREAMTRACK_KIND_ERROR", e[e.ERROR_MEDIASTREAMTRACK_AUDIO_NONE = 11002] = "ERROR_MEDIASTREAMTRACK_AUDIO_NONE", e[e.ERROR_PREERCONNECTION_UNKNOWN = 12e3] = "ERROR_PREERCONNECTION_UNKNOWN";
    }(t.ErrorCode || (t.ErrorCode = {})), function (e) {
      e[e.ERROR_DEVICE_UNKNOWNERROR = 1e4] = "ERROR_DEVICE_UNKNOWNERROR", e[e.ERROR_DEVICE_AUDIODEVICE_NOTFOUND = 10001] = "ERROR_DEVICE_AUDIODEVICE_NOTFOUND", e[e.ERROR_DEVICE_VIDEODEVICE_NOTFOUND = 10002] = "ERROR_DEVICE_VIDEODEVICE_NOTFOUND", e[e.ERROR_DEVICE_AUDIODEVICE_NOTALLOWED = 10003] = "ERROR_DEVICE_AUDIODEVICE_NOTALLOWED", e[e.ERROR_DEVICE_VIDEODEVICE_NOTALLOWED = 10004] = "ERROR_DEVICE_VIDEODEVICE_NOTALLOWED", e[e.ERROR_DEVICE_AUDIODEVICE_NOTREADABLE = 10005] = "ERROR_DEVICE_AUDIODEVICE_NOTREADABLE", e[e.ERROR_DEVICE_VIDEODEVICE_NOTREADABLE = 10006] = "ERROR_DEVICE_VIDEODEVICE_NOTREADABLE", e[e.ERROR_SCREENSHARE_NOTSUPPORT = 10010] = "ERROR_SCREENSHARE_NOTSUPPORT", e[e.ERROR_SCREENSHARE_NOTALLOWED = 10011] = "ERROR_SCREENSHARE_NOTALLOWED", e[e.ERROR_SCREENSHARE_ENDED = 10012] = "ERROR_SCREENSHARE_ENDED", e[e.ERROR_SCREENSHARE_NOPERMISSION = 10013] = "ERROR_SCREENSHARE_NOPERMISSION", e[e.ERROR_SCREENSHARE_SAFARI_INVALIDACCESS = 10014] = "ERROR_SCREENSHARE_SAFARI_INVALIDACCESS", e[e.ERROR_SCREENSHARE_UNKNOWNERRO = 10019] = "ERROR_SCREENSHARE_UNKNOWNERRO", e[e.ERROR_DEVICE_NOTSUPPORT = 2e4] = "ERROR_DEVICE_NOTSUPPORT";
    }(t.DeviceErrorCode || (t.DeviceErrorCode = {}));
  }, function (e, t, r) {
    /*! useragent-util - ver 1.0.6 created:2021-5-13 10:47:16 AM */
    self, e.exports = function () {
      "use strict";

      var e = {
        622: function _(e, t) {
          var r;
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.BrowserUtil = t.BrowserType = void 0, function (e) {
            e.BrowserType_Chrome = "Chrome", e.BrowserType_Safari = "Safari", e.BrowserType_Firefox = "Firefox", e.BrowserType_Opera = "Opera", e.BrowserType_Edge = "Edge", e.BrowserType_MicroMessenger = "MicroMessenger", e.BrowserType_X5Core = "X5Core", e.BrowserType_QQ = "QQ", e.BrowserType_QQBrowser = "QQBrowser", e.BrowserType_DingTalk = "DingTalk", e.BrowserType_360Browser = "360 Browser", e.BrowserType_Electron = "Electron", e.BrowserType_Unknown = "unknown";
          }(r = t.BrowserType || (t.BrowserType = {}));

          var n = function () {
            function e() {}

            return Object.defineProperty(e, "isBrowser", {
              get: function get() {
                return "undefined" != typeof document;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "domain", {
              get: function get() {
                return window.location.protocol + window.location.host;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isHttps", {
              get: function get() {
                return !(!this.isBrowser || !document.location || "https:" !== document.location.protocol);
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isSupportScreenShare", {
              get: function get() {
                return e._getBrowserInfo(), !!e.isElectron;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isChrome", {
              get: function get() {
                return e._getBrowserInfo(), r.BrowserType_Chrome === e._browserName || r.BrowserType_360Browser === e._browserName;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isSafari", {
              get: function get() {
                return e._getBrowserInfo(), r.BrowserType_Safari === e._browserName;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isFirefox", {
              get: function get() {
                return e._getBrowserInfo(), r.BrowserType_Firefox === e._browserName;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isOpera", {
              get: function get() {
                return e._getBrowserInfo(), r.BrowserType_Opera === e._browserName;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isMicroMessenger", {
              get: function get() {
                return e._getBrowserInfo(), e._browserName === r.BrowserType_MicroMessenger;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isX5Core", {
              get: function get() {
                return e._getBrowserInfo(), e._browserName === r.BrowserType_X5Core;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isDingTalk", {
              get: function get() {
                return e._getBrowserInfo(), e._browserName === r.BrowserType_DingTalk;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isEdge", {
              get: function get() {
                return e._getBrowserInfo(), r.BrowserType_Edge === e.browserName;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isUnknown", {
              get: function get() {
                return e._getBrowserInfo(), r.BrowserType_Unknown === e.browserName;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "browserName", {
              get: function get() {
                return e._getBrowserInfo(), e._browserName;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "browserVersion", {
              get: function get() {
                return e._getBrowserInfo(), e._browserVersion;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "browserMainVersion", {
              get: function get() {
                return e._getBrowserInfo(), e._browserVersion ? parseInt(e._browserVersion.split(".")[0], 10) : 0;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isElectron", {
              get: function get() {
                return e._getBrowserInfo(), e._isElectron;
              },
              enumerable: !1,
              configurable: !0
            }), e.compareVersion = function (t) {
              if (e._getBrowserInfo(), e._browserVersion) {
                for (var r = e._browserVersion.split("."), n = t.split("."), i = 0, o = 0, a = 0; a < r.length && a < n.length; ++a) {
                  if ((i = isNaN(parseInt(r[a], 10)) ? 0 : parseInt(r[a], 10)) < (o = isNaN(parseInt(n[a], 10)) ? 0 : parseInt(n[a], 10))) return !1;
                  if (i > o) return !0;
                }

                return !0;
              }

              return !0;
            }, e._getBrowserInfo = function () {
              if (!e._browserName || !e._browserVersion) if (navigator && navigator.userAgent) {
                var t = navigator.userAgent.toLowerCase(),
                    n = {
                  edge: "",
                  firefox: "",
                  chrome: "",
                  safari: "",
                  opera: "",
                  micromessenger: "",
                  x5: "",
                  dingtalk: "",
                  qq: "",
                  qqbrowser: ""
                },
                    i = void 0;
                (i = t.match(/edge?\/([\d.]+)/)) ? n.edge = i[1] : (i = t.match(/firefox\/([\d.]+)/)) ? n.firefox = i[1] : (i = t.match(/chrome\/([\d.]+)/)) && this._isChrome(t) || (i = t.match(/crios\/([\d.]+)/)) && this._isChrome(t) ? n.chrome = i[1] : (i = t.match(/opera.([\d.]+)/)) || (i = t.match(/opr\/([\d.]+)/)) ? n.opera = i[1] : (i = t.match(/micromessenger.([\d.]+)/)) ? n.micromessenger = i[1] : (i = t.match(/tbs\/([\d.]+)/)) ? n.x5 = i[1] : (i = t.match(/qq\/([\d.]+)/)) ? n.qq = i[1] : (i = t.match(/mqqbrowser\/([\d.]+)/)) ? n.qqbrowser = i[1] : (i = t.match(/dingtalk.([\d.]+)/)) ? n.dingtalk = i[1] : (i = t.match(/version\/([\d.]+).*safari/)) && this._isSafari(t) && (n.safari = i[1]), t.indexOf("electron") > -1 ? e._isElectron = !0 : e._isElectron = !1, n.safari ? (e._browserName = r.BrowserType_Safari, e._browserVersion = n.safari) : n.firefox ? (e._browserName = r.BrowserType_Firefox, e._browserVersion = n.firefox) : n.chrome ? (e._browserName = r.BrowserType_Chrome, e._browserVersion = n.chrome, this._mime("application/vnd.chromium.remoting-viewer") && (e._browserName = r.BrowserType_360Browser)) : n.edge ? (e._browserName = "Edge", e._browserVersion = n.edge) : n.opera ? (e._browserName = r.BrowserType_Opera, e._browserVersion = n.opera) : n.micromessenger ? (e._browserName = r.BrowserType_MicroMessenger, e._browserVersion = n.micromessenger) : n.x5 ? (e._browserName = r.BrowserType_X5Core, e._browserVersion = n.x5) : n.qq ? (e._browserName = r.BrowserType_QQ, e._browserVersion = n.qq) : n.qqbrowser ? (e._browserName = r.BrowserType_QQBrowser, e._browserVersion = n.qqbrowser) : n.dingtalk ? (e._browserName = r.BrowserType_DingTalk, e._browserVersion = n.dingtalk) : (e._browserName = r.BrowserType_Unknown, e._browserVersion = "0.0");
              } else e._browserName = r.BrowserType_Unknown, e._browserVersion = "0.0";
            }, e._isChrome = function (e) {
              var t = e.split(/\(|\)/);

              if (5 === t.length) {
                var r = t[4].trim().split(" ");

                if (2 === r.length) {
                  if (r[0].indexOf("chrome") > -1 && r[1].indexOf("safari") > -1) return !0;
                } else if (3 === r.length && r[1].indexOf("mobile") > -1 && r[2].indexOf("safari") > -1 && (r[0].indexOf("chrome") > -1 || r[0].indexOf("crios") > -1)) return !0;
              } else if (e.indexOf("dingtalk") > -1) return !0;

              return !1;
            }, e._isSafari = function (e) {
              var t = e.split(/\(|\)/);

              if (5 === t.length) {
                var r = t[4].trim().split(" ");

                if (2 === r.length) {
                  if (r[0].indexOf("version") > -1 && r[1].indexOf("safari") > -1) return !0;
                } else if (3 === r.length && r[0].indexOf("version") > -1 && r[1].indexOf("mobile") > -1 && r[2].indexOf("safari") > -1) return !0;
              }

              return !1;
            }, e._mime = function (e) {
              var t = navigator.mimeTypes;

              for (var r in t) {
                if (t[r].type === e) return !0;
              }

              return !1;
            }, e._browserName = "", e._browserVersion = "", e._isElectron = !1, e;
          }();

          t.BrowserUtil = n;
        },
        864: function _(e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.Guid = void 0;

          var r = function () {
            function e() {}

            return e.create = function (e, t) {
              void 0 === t && (t = 16);
              var r,
                  n,
                  i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                  o = [];
              if (t = t || i.length, e) for (r = 0; r < e; r++) {
                o[r] = i[0 | Math.random() * t];
              } else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", r = 0; r < 36; r++) {
                o[r] || (n = 0 | 16 * Math.random(), o[r] = i[19 == r ? 3 & n | 8 : n]);
              }
              return o.join("");
            }, e;
          }();

          t.Guid = r;
        },
        442: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.LocalStorage = void 0;

          var n = r(864),
              i = function () {
            function e() {}

            return Object.defineProperty(e, "uuid", {
              get: function get() {
                var t = e.get("alirtc_uuid");
                return t || (t = n.Guid.create(32), e.set(t, t)), t;
              },
              enumerable: !1,
              configurable: !0
            }), e.get = function (e) {
              var t = "";
              return window && window.localStorage && (t = window.localStorage.getItem(e) || ""), t;
            }, e.set = function (e, t) {
              e && window && window.localStorage && window.localStorage.setItem(e, t);
            }, e;
          }();

          t.LocalStorage = i;
        },
        72: function _(e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.ApiRequest = void 0;

          var r = function () {
            function e() {}

            return e.postBody = function (t, r, n) {
              t = e._getUrl(t, r);
              var i,
                  o = {};
              return o.headers || (o.headers = {}), o.headers.Accept = "application/json", o.headers["Content-Type"] = "application/json", new Promise(function (r, o) {
                e.requestBody("POST", t, n).then(function (e) {
                  return i = e, e.ok ? e.json() : e.text();
                }).then(function (t) {
                  i.ok ? t.code ? (t = e._intercept(t), o(t)) : r(t.data) : o(e._httpErrorMessage(i, t));
                })["catch"](function (t) {
                  t = e._httpErrorMessage(t), o(t);
                });
              });
            }, e.get = function (t, r, n) {
              var i;
              return void 0 === n && (n = {}), t = e._getUrl(t, r), n.headers || (n.headers = {}), n.headers["Content-Type"] = "application/json", new Promise(function (r, o) {
                e.request("GET", t, n).then(function (e) {
                  return i = e, e.ok ? e.json() : e.text();
                }).then(function (t) {
                  i.ok ? t.code ? (t = e._intercept(t), o(t)) : r(t.data) : o(e._httpErrorMessage(i, t));
                })["catch"](function (t) {
                  t = e._httpErrorMessage(t), o(t);
                });
              });
            }, e.post = function (t, r, n, i) {
              var o;
              return void 0 === i && (i = {}), t = e._getUrl(t, r), i.headers || (i.headers = {}), i.body = n, i.headers.Accept = "application/json", i.headers["Content-Type"] = "application/json", new Promise(function (r, n) {
                e.request("POST", t, i).then(function (e) {
                  return o = e, e.ok ? e.json() : e.text();
                }).then(function (t) {
                  o.ok ? t.code ? (t = e._intercept(t), n(t)) : r(t.data) : n(e._httpErrorMessage(o, t));
                })["catch"](function (t) {
                  t = e._httpErrorMessage(t), n(t);
                });
              });
            }, e.request = function (e, t, r) {
              void 0 === e && (e = "GET");
              var n = new Headers(r.headers),
                  i = new Request(t, {
                method: e,
                headers: n
              });
              return fetch(i);
            }, e.requestBody = function (e, t, r) {
              return void 0 === e && (e = "GET"), fetch(t, {
                method: e,
                body: r,
                headers: new Headers({
                  "Content-Type": "application/json"
                })
              });
            }, e.ajaxPost = function (t, r, n, i) {
              return void 0 === i && (i = {}), t = e._getUrl(t, r), i.headers || (i.headers = {}), i.headers.Accept = "application/json", i.headers["Content-Type"] = "application/json", e.ajax("POST", t, n, i);
            }, e.ajax = function (t, r, n, i) {
              void 0 === t && (t = "GET"), void 0 === i && (i = {});
              var o = new XMLHttpRequest();
              return new Promise(function (a, s) {
                o.onreadystatechange = function () {
                  if (4 === o.readyState) if (200 === o.status) {
                    var t = JSON.parse(o.responseText);
                    t.code ? (t = e._intercept(t), s(t)) : a(t);
                  } else s({
                    message: o.responseText || "请求失败:" + r
                  });
                }, o.open(t, r, !0);

                try {
                  if (i.withCredentials && (o.withCredentials = !0), i.headers) for (var c in i.headers) {
                    o.setRequestHeader(c, i.headers[c]);
                  }
                } catch (e) {
                  return void s(e);
                }

                try {
                  o.send(n);
                } catch (e) {
                  s(e);
                }
              });
            }, e._getUrl = function (e, t) {
              var r = [];
              if (t) for (var n in t) {
                r.push(n + "=" + t[n]);
              }
              var i = r.join("&");
              return (-1 != e.indexOf("?") ? e : e + "?") + i;
            }, e._httpErrorMessage = function (e, t) {
              return e.message || (e.message = "HTTP " + e.status + "(" + e.statusText + ") : " + t), e;
            }, e._intercept = function (e) {
              var t = e.data;
              return e.code && ((t = t || {}).data = e.data, t.code = e.code, t.description = e.description, t.message = "0x" + Number(e.code).toString(16) + ", " + e.description, t.tid && (t.message += ", tid=" + t.tid)), t;
            }, e;
          }();

          t.ApiRequest = r;
        },
        101: function _(e, t) {
          var r;
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.SystemUtil = void 0, function (e) {
            e[e.Unknown = 0] = "Unknown", e[e.MacOS = 1] = "MacOS", e[e.Windows = 2] = "Windows", e[e.Android = 3] = "Android", e[e.Iphone = 4] = "Iphone", e[e.Ipad = 5] = "Ipad", e[e.Linux = 6] = "Linux";
          }(r || (r = {}));

          var n = function () {
            function e() {}

            return Object.defineProperty(e, "isMacOS", {
              get: function get() {
                return "Mac" === e.systemName;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isWindows", {
              get: function get() {
                return e.systemName.indexOf("Windows") > -1;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isIos", {
              get: function get() {
                return "iphone" === e.systemName || "ipad" === e.systemName;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isAndroid", {
              get: function get() {
                return "Android" === e.systemName;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isLinux", {
              get: function get() {
                return "Linux" === e.systemName || "Linux" === e._platform;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "systemName", {
              get: function get() {
                return e._getSystemInfo(), e._systemName;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "systemVersion", {
              get: function get() {
                return e._getSystemInfo(), e._systemVersion;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "platform", {
              get: function get() {
                return e._getSystemInfo(), e._platform;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e, "isUnknown", {
              get: function get() {
                return !e.platform || "Other" === e.platform;
              },
              enumerable: !1,
              configurable: !0
            }), e.compareVersion = function (t) {
              if (e._getSystemInfo(), e._systemVersion) {
                for (var r = e._systemVersion.split("."), n = t.split("."), i = 0, o = 0, a = 0; a < r.length && a < n.length; ++a) {
                  if ((i = isNaN(parseInt(r[a], 10)) ? 0 : parseInt(r[a], 10)) < (o = isNaN(parseInt(n[a], 10)) ? 0 : parseInt(n[a], 10))) return !1;
                  if (i > o) return !0;
                }

                return !0;
              }

              return !0;
            }, e._getSystemInfo = function () {
              if (!e._systemName || !e._systemVersion || !e._platform) if (navigator && navigator.userAgent) {
                var t = navigator.userAgent.toLowerCase();
                t.indexOf("ipad") > -1 ? (e._systemName = "ipad", e._platform = "iOS", e._systemVersion = e._getIosSystemVersion(t)) : t.indexOf("iphone") > -1 ? (e._systemName = "iphone", e._platform = "iOS", e._systemVersion = e._getIosSystemVersion(t)) : t.indexOf("android") > -1 ? (e._platform = "Android", e._systemName = "Android", e._systemVersion = e._getAndroidSystemVersion(t)) : t.indexOf("win") > -1 ? t.indexOf("windwos nt 10") > -1 || t.indexOf("windows 10") ? (e._systemName = "Windows 10", e._platform = "Windows", e._systemVersion = "10") : t.indexOf("windows nt 6.1") > -1 || t.indexOf("windows 7") > -1 ? (e._systemName = "Windows 7", e._platform = "Windows", e._systemVersion = "7") : t.indexOf("windows nt 6.0") > -1 || t.indexOf("windows vista") > -1 ? (e._systemName = "Windows vista", e._platform = "Windows", e._systemVersion = "vista") : t.indexOf("widows nt 5.1") > -1 || t.indexOf("windows xp") > -1 ? (e._systemName = "Windows xp", e._platform = "Windows", e._systemVersion = "xp") : (e._platform = "Windows", e._systemName = "Windows", e._systemVersion = "0.0") : t.indexOf("mac") > -1 ? (e._platform = "Mac", e._systemName = "Mac", e._systemVersion = e._getMacSystemVersion(t)) : t.indexOf("linux") > -1 ? (e._platform = "Linux", e._systemName = "Linux", e._systemVersion = "0.0") : t.indexOf("cros") > -1 ? (e._platform = "Linux", e._systemName = "ChromeOS", e._systemVersion = "0.0") : (e._systemName = "unknown", e._platform = "Other", e._systemVersion = "0.0");
              } else e._systemName = "unknown", e._platform = "Other", e._systemVersion = "0.0";
            }, e._getIosSystemVersion = function (e) {
              return (e.match(/OS [\d._]*/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".");
            }, e._getMacSystemVersion = function (e) {
              return (e.match(/OS X [\d._]*/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".");
            }, e._getAndroidSystemVersion = function (e) {
              return e.substr(e.indexOf("android") + 8, e.indexOf(";", e.indexOf("android")) - e.indexOf("android") - 8);
            }, e._systemName = "", e._systemVersion = "", e._platform = "", e;
          }();

          t.SystemUtil = n;
        }
      },
          t = {};

      function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
          exports: {}
        };
        return e[n](i, i.exports, r), i.exports;
      }

      var n = {};
      return function () {
        var e = n;
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.ApiRequest = e.LocalStorage = e.Guid = e.BrowserUtil = e.SystemUtil = void 0;
        var t = r(101);
        Object.defineProperty(e, "SystemUtil", {
          enumerable: !0,
          get: function get() {
            return t.SystemUtil;
          }
        });
        var i = r(622);
        Object.defineProperty(e, "BrowserUtil", {
          enumerable: !0,
          get: function get() {
            return i.BrowserUtil;
          }
        });
        var o = r(864);
        Object.defineProperty(e, "Guid", {
          enumerable: !0,
          get: function get() {
            return o.Guid;
          }
        });
        var a = r(442);
        Object.defineProperty(e, "LocalStorage", {
          enumerable: !0,
          get: function get() {
            return a.LocalStorage;
          }
        });
        var s = r(72);
        Object.defineProperty(e, "ApiRequest", {
          enumerable: !0,
          get: function get() {
            return s.ApiRequest;
          }
        }), window && (window.SystemUtil = t.SystemUtil, window.BrowserUtil = i.BrowserUtil, window.Guid = o.Guid, window.LocalStorage = a.LocalStorage, window.ApiRequest = s.ApiRequest);
      }(), n;
    }();
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e, t, r) {
      this.errorCode = e, this.message = t, this.traceId = r;
    };

    t.RtsError = n;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t["default"] = {
      version: "2.0.0",
      protocol_version: 2,
      sdk_version: "0.0.1"
    };
  }, function (e, t, r) {
    "use strict";

    var _n,
        i = this && this.__extends || (_n = function n(e, t) {
      return (_n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var r in t) {
          t.hasOwnProperty(r) && (e[r] = t[r]);
        }
      })(e, t);
    }, function (e, t) {
      function r() {
        this.constructor = e;
      }

      _n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    }),
        o = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = function (e) {
      function t() {
        var t = e.call(this) || this;
        return t.traceid = "", t;
      }

      return i(t, e), Object.defineProperty(t.prototype, "traceId", {
        get: function get() {
          return this.traceid;
        },
        set: function set(e) {
          this.traceid = e;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "mediaElement", {
        get: function get() {
          return this.element;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.setReporter = function (e) {
        this.reporter = e;
      }, t.prototype.play = function (e) {}, t.prototype.stop = function () {
        this.traceid = "", this.reporter = void 0;
      }, t;
    }(o(r(1))["default"]);

    t.Stream = a;
  }, function (e, t, r) {
    /*! browserdevicemanager - ver 1.1.8 created:2021/3/18 下午8:15:59 */
    self, e.exports = function () {
      "use strict";

      var e = {
        304: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.BrowserDeviceManager = void 0;

          var n = r(101),
              i = r(853),
              o = r(62),
              a = r(913),
              s = r(331),
              c = r(1),
              d = r(935),
              p = function () {
            function e() {
              this.systemUtil = new n.SystemUtil(), this.deviceManager = this.createDeviceManager();
            }

            return e.prototype.getCameraList = function () {
              return this.deviceManager.getCameraList();
            }, e.prototype.getMicList = function () {
              return this.deviceManager.getMicList();
            }, e.prototype.getAudioTrack = function (e) {
              return this.deviceManager.getAudioTrack(e);
            }, e.prototype.getVideoTrack = function (e) {
              return this.deviceManager.getVideoTrack(e);
            }, e.prototype.getScreenTrack = function (e) {
              return this.deviceManager.getScreenTrack(e);
            }, e.prototype.checkSupportScreenShare = function () {
              return this.deviceManager.checkSupportScreenShare();
            }, e.prototype.createDeviceManager = function () {
              return this.systemUtil.isWindows ? new d.WindowsDeviceManager() : this.systemUtil.isAndroid ? new i.AndroidDeviceManager() : this.systemUtil.isIos ? new a.IosDeviceManager() : this.systemUtil.isMacOS ? new c.MacDeviceManager() : this.systemUtil.isLinux ? new s.LinuxDeviceManager() : new o.BaseDeviceManager();
            }, e;
          }();

          t.BrowserDeviceManager = p;
        },
        603: function _(e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.DeviceError = t.DeviceErrorDescription = t.DeviceErrorCode = void 0, function (e) {
            e[e.ERROR_DEVICE_UNKNOWNERROR = 1e4] = "ERROR_DEVICE_UNKNOWNERROR", e[e.ERROR_DEVICE_AUDIODEVICE_NOTFOUND = 10001] = "ERROR_DEVICE_AUDIODEVICE_NOTFOUND", e[e.ERROR_DEVICE_VIDEODEVICE_NOTFOUND = 10002] = "ERROR_DEVICE_VIDEODEVICE_NOTFOUND", e[e.ERROR_DEVICE_AUDIODEVICE_NOTALLOWED = 10003] = "ERROR_DEVICE_AUDIODEVICE_NOTALLOWED", e[e.ERROR_DEVICE_VIDEODEVICE_NOTALLOWED = 10004] = "ERROR_DEVICE_VIDEODEVICE_NOTALLOWED", e[e.ERROR_DEVICE_AUDIODEVICE_NOTREADABLE = 10005] = "ERROR_DEVICE_AUDIODEVICE_NOTREADABLE", e[e.ERROR_DEVICE_VIDEODEVICE_NOTREADABLE = 10006] = "ERROR_DEVICE_VIDEODEVICE_NOTREADABLE", e[e.ERROR_DEIVCE_CONSTRAINEDERROR = 10007] = "ERROR_DEIVCE_CONSTRAINEDERROR", e[e.ERROR_SCREENSHARE_UNKNOWNERRO = 10010] = "ERROR_SCREENSHARE_UNKNOWNERRO", e[e.ERROR_SCREENSHARE_NOTALLOWED = 10011] = "ERROR_SCREENSHARE_NOTALLOWED", e[e.ERROR_SCREENSHARE_ENDED = 10012] = "ERROR_SCREENSHARE_ENDED", e[e.ERROR_SCREENSHARE_NOPERMISSION = 10013] = "ERROR_SCREENSHARE_NOPERMISSION", e[e.ERROR_SCREENSHARE_INVALIDACCESS = 10014] = "ERROR_SCREENSHARE_INVALIDACCESS", e[e.ERROR_SCREENSHARE_NOTSUPPORT = 10018] = "ERROR_SCREENSHARE_NOTSUPPORT", e[e.ERROR_DEVICE_NOTSUPPORT = 10019] = "ERROR_DEVICE_NOTSUPPORT";
          }(t.DeviceErrorCode || (t.DeviceErrorCode = {})), function (e) {
            e.ERRORMESSAGE_DEVICENOTFOUND = "Requested device not found", e.ERRORMESSAGE_DEVICENOTALLOWED = "Permission denied", e.ERRORMESSAGE_MACCHROME_DEVICENOTREADABLE = "Permission denied by system", e.ERRORMESSAGE_MACSAFARI_DEVICENOTALLOWED = "The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.", e.ERRORMESSAGE_MOBILEDEVICE_NOTALLOWED = "video device not allowed", e.ERRORMESSAGE_AUDIODEVICENOTREADABLE = "Could not start audio source", e.ERRORMESSAGE_VIDEODEVICENOTREADABLE = "Could not start video source", e.ERRORNAME_DEVICENOTFOUND = "NotFoundError", e.ERRORNAME_DEVICENOTALLOWED = "NotAllowedError", e.ERRORNAME_DEVICENOTREADABLE = "NotReadableError", e.ERRORNAME_DEVICEOVERCONSTRAINED = "OverconstrainedError", e.ERRORNAME_INVALID_ACCESS = "InvalidAccessError";
          }(t.DeviceErrorDescription || (t.DeviceErrorDescription = {})), t.DeviceError = function (e, t) {
            this.code = e, this.reason = t;
          };
        },
        873: function _(e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.FacingMode = t.DeviceType = t.MobileCameraType = void 0, function (e) {
            e[e.USER = 0] = "USER", e[e.ENV = 1] = "ENV";
          }(t.MobileCameraType || (t.MobileCameraType = {})), function (e) {
            e.Camera = "videoinput", e.Mic = "audioinput", e.Screen = "screen";
          }(t.DeviceType || (t.DeviceType = {})), function (e) {
            e.USER = "user", e.ENVIRONMENT = "environment";
          }(t.FacingMode || (t.FacingMode = {}));
        },
        853: function _(e, t, r) {
          var _n2,
              i = this && this.__extends || (_n2 = function n(e, t) {
            return (_n2 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var r in t) {
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
            })(e, t);
          }, function (e, t) {
            function r() {
              this.constructor = e;
            }

            _n2(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
          });

          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.AndroidDeviceManager = void 0;

          var o = function (e) {
            function t() {
              return e.call(this) || this;
            }

            return i(t, e), t;
          }(r(583).MobileDeviceManager);

          t.AndroidDeviceManager = o;
        },
        62: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.BaseDeviceManager = void 0;

          var n = r(603),
              i = r(873),
              o = function () {
            function e() {}

            return e.prototype.checkSupportScreenShare = function () {
              return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia && navigator.mediaDevices.getDisplayMedia);
            }, e.prototype.getCameraList = function () {
              var e = this;
              return new Promise(function (t, r) {
                e.checkSupport() ? e.getDeviceRight(i.DeviceType.Camera).then(function () {
                  e.getDeviceList(i.DeviceType.Camera).then(function (e) {
                    t(e);
                  })["catch"](function (t) {
                    r(e.parseError(i.DeviceType.Camera, t));
                  });
                })["catch"](function (t) {
                  r(e.parseError(i.DeviceType.Camera, t));
                }) : r(new n.DeviceError(n.DeviceErrorCode.ERROR_DEVICE_NOTSUPPORT, "not support navigator.mediaDevices"));
              });
            }, e.prototype.getMicList = function () {
              var e = this;
              return new Promise(function (t, r) {
                e.checkSupport() ? e.getDeviceRight(i.DeviceType.Mic).then(function () {
                  e.getDeviceList(i.DeviceType.Mic).then(function (e) {
                    t(e);
                  })["catch"](function (t) {
                    r(e.parseError(i.DeviceType.Mic, t));
                  });
                })["catch"](function (t) {
                  r(e.parseError(i.DeviceType.Mic, t));
                }) : r(new n.DeviceError(n.DeviceErrorCode.ERROR_DEVICE_NOTSUPPORT, "not support navigator.mediaDevices"));
              });
            }, e.prototype.getAudioTrack = function (e) {
              var t = this;
              return new Promise(function (r, o) {
                var a;
                t.checkSupport() ? (a = e && e.deviceId ? {
                  audio: {
                    deviceId: e.deviceId
                  }
                } : {
                  audio: !0
                }, navigator.mediaDevices.getUserMedia(a).then(function (e) {
                  r(e.getAudioTracks()[0]);
                })["catch"](function (e) {
                  o(t.parseError(i.DeviceType.Mic, e));
                })) : o(new n.DeviceError(n.DeviceErrorCode.ERROR_DEVICE_NOTSUPPORT, "not support navigator.mediaDevices"));
              });
            }, e.prototype.getVideoTrack = function (e) {
              var t = this;
              return new Promise(function (r, o) {
                if (t.checkSupport()) {
                  var a = t.createVideoConstraints(e);
                  navigator.mediaDevices.getUserMedia(a).then(function (e) {
                    r(e.getVideoTracks()[0]);
                  })["catch"](function (e) {
                    o(t.parseError(i.DeviceType.Camera, e));
                  });
                } else o(new n.DeviceError(n.DeviceErrorCode.ERROR_DEVICE_NOTSUPPORT, "not support navigator.mediaDevices"));
              });
            }, e.prototype.getScreenTrack = function (e) {
              var t = this;
              return new Promise(function (r, o) {
                t.checkSupportScreenShare() ? navigator.mediaDevices.getDisplayMedia(e).then(function (e) {
                  r(e);
                })["catch"](function (e) {
                  o(t.parseError(i.DeviceType.Screen, e));
                }) : o(new n.DeviceError(n.DeviceErrorCode.ERROR_SCREENSHARE_NOTSUPPORT, "browser not support screenshare"));
              });
            }, e.prototype.checkSupport = function () {
              return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && navigator.mediaDevices.getUserMedia);
            }, e.prototype.getDeviceList = function (e) {
              return new Promise(function (t, r) {
                navigator.mediaDevices.enumerateDevices().then(function (r) {
                  var n = [];
                  r.forEach(function (t) {
                    t.kind === e && n.push(t);
                  }), t(n);
                })["catch"](function (e) {
                  r(e);
                });
              });
            }, e.prototype.getDeviceRight = function (e) {
              return new Promise(function (t, r) {
                var n;
                i.DeviceType.Camera === e ? n = {
                  video: !0
                } : i.DeviceType.Mic === e && (n = {
                  audio: !0
                }), navigator.mediaDevices.getUserMedia(n).then(function (e) {
                  e.getVideoTracks().forEach(function (e) {
                    e.stop();
                  }), t(void 0);
                })["catch"](function (e) {
                  r(e);
                });
              });
            }, e.prototype.parseError = function (e, t) {
              var r = null;
              return i.DeviceType.Mic === e ? r = this.parseAudioError(t) : i.DeviceType.Camera === e ? r = this.parseVideoError(t) : i.DeviceType.Screen === e && (r = this.parseScreenError(t)), null === r ? new n.DeviceError(n.DeviceErrorCode.ERROR_DEVICE_UNKNOWNERROR, "") : r;
            }, e.prototype.parseAudioError = function (e) {
              return e.message === n.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTFOUND || e.name === n.DeviceErrorDescription.ERRORNAME_DEVICENOTFOUND ? new n.DeviceError(n.DeviceErrorCode.ERROR_DEVICE_AUDIODEVICE_NOTFOUND, "audio device not found") : e.message === n.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTALLOWED || e.message === n.DeviceErrorDescription.ERRORMESSAGE_MACSAFARI_DEVICENOTALLOWED ? new n.DeviceError(n.DeviceErrorCode.ERROR_DEVICE_AUDIODEVICE_NOTALLOWED, "audio device not allowed") : e.message === n.DeviceErrorDescription.ERRORMESSAGE_MACCHROME_DEVICENOTREADABLE || e.message === n.DeviceErrorDescription.ERRORMESSAGE_AUDIODEVICENOTREADABLE || e.message === n.DeviceErrorDescription.ERRORNAME_DEVICENOTREADABLE ? new n.DeviceError(n.DeviceErrorCode.ERROR_DEVICE_AUDIODEVICE_NOTREADABLE, "audio device not readable") : null;
            }, e.prototype.parseVideoError = function (e) {
              return e.message === n.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTFOUND || e.name === n.DeviceErrorDescription.ERRORNAME_DEVICENOTFOUND ? new n.DeviceError(n.DeviceErrorCode.ERROR_DEVICE_VIDEODEVICE_NOTFOUND, "video device not found") : e.message === n.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTALLOWED || e.message === n.DeviceErrorDescription.ERRORMESSAGE_MOBILEDEVICE_NOTALLOWED || e.message === n.DeviceErrorDescription.ERRORMESSAGE_MACSAFARI_DEVICENOTALLOWED ? new n.DeviceError(n.DeviceErrorCode.ERROR_DEVICE_VIDEODEVICE_NOTALLOWED, "video device not allowed") : e.message === n.DeviceErrorDescription.ERRORMESSAGE_MACCHROME_DEVICENOTREADABLE || e.message === n.DeviceErrorDescription.ERRORMESSAGE_VIDEODEVICENOTREADABLE || e.name === n.DeviceErrorDescription.ERRORNAME_DEVICENOTREADABLE ? new n.DeviceError(n.DeviceErrorCode.ERROR_DEVICE_VIDEODEVICE_NOTREADABLE, "video device not readable") : null;
            }, e.prototype.parseScreenError = function (e) {
              return e.name === n.DeviceErrorDescription.ERRORNAME_DEVICENOTALLOWED ? e.message === n.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTALLOWED ? new n.DeviceError(n.DeviceErrorCode.ERROR_SCREENSHARE_NOTALLOWED, e.message) : new n.DeviceError(n.DeviceErrorCode.ERROR_SCREENSHARE_NOPERMISSION, e.message) : e.name === n.DeviceErrorDescription.ERRORNAME_INVALID_ACCESS ? new n.DeviceError(n.DeviceErrorCode.ERROR_SCREENSHARE_INVALIDACCESS, e.message) : null;
            }, e.prototype.createVideoConstraints = function (e) {
              return e.deviceId || e.width || e.height || e.frameRate ? {
                video: {
                  deviceId: {
                    exact: e.deviceId
                  },
                  width: e.width,
                  height: e.height,
                  frameRate: e.frameRate
                }
              } : {
                video: !0
              };
            }, e;
          }();

          t.BaseDeviceManager = o;
        },
        913: function _(e, t, r) {
          var _n3,
              i = this && this.__extends || (_n3 = function n(e, t) {
            return (_n3 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var r in t) {
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
            })(e, t);
          }, function (e, t) {
            function r() {
              this.constructor = e;
            }

            _n3(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
          });

          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.IosDeviceManager = void 0;

          var o = function (e) {
            function t() {
              return e.call(this) || this;
            }

            return i(t, e), t;
          }(r(583).MobileDeviceManager);

          t.IosDeviceManager = o;
        },
        331: function _(e, t, r) {
          var _n4,
              i = this && this.__extends || (_n4 = function n(e, t) {
            return (_n4 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var r in t) {
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
            })(e, t);
          }, function (e, t) {
            function r() {
              this.constructor = e;
            }

            _n4(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
          });

          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.LinuxDeviceManager = void 0;

          var o = function (e) {
            function t() {
              return e.call(this) || this;
            }

            return i(t, e), t;
          }(r(62).BaseDeviceManager);

          t.LinuxDeviceManager = o;
        },
        1: function _(e, t, r) {
          var _n5,
              i = this && this.__extends || (_n5 = function n(e, t) {
            return (_n5 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var r in t) {
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
            })(e, t);
          }, function (e, t) {
            function r() {
              this.constructor = e;
            }

            _n5(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
          });

          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.MacDeviceManager = void 0;

          var o = function (e) {
            function t() {
              return e.call(this) || this;
            }

            return i(t, e), t;
          }(r(62).BaseDeviceManager);

          t.MacDeviceManager = o;
        },
        583: function _(e, t, r) {
          var _n6,
              i = this && this.__extends || (_n6 = function n(e, t) {
            return (_n6 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var r in t) {
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
            })(e, t);
          }, function (e, t) {
            function r() {
              this.constructor = e;
            }

            _n6(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
          });

          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.MobileDeviceManager = void 0;

          var o = r(603),
              a = function (e) {
            function t() {
              return e.call(this) || this;
            }

            return i(t, e), t.prototype.checkSupportScreenShare = function () {
              return !1;
            }, t.prototype.getScreenTrack = function (e) {
              return new Promise(function (e, t) {
                t(new o.DeviceError(o.DeviceErrorCode.ERROR_SCREENSHARE_NOTSUPPORT, "mobile not support screenshare"));
              });
            }, t.prototype.createVideoConstraints = function (e) {
              return e.deviceId || e.facingMode || e.width || e.height ? {
                video: {
                  deviceId: e.facingMode ? e.facingMode : e.deviceId,
                  width: e.width,
                  height: e.height
                }
              } : {
                video: !0
              };
            }, t;
          }(r(62).BaseDeviceManager);

          t.MobileDeviceManager = a;
        },
        935: function _(e, t, r) {
          var _n7,
              i = this && this.__extends || (_n7 = function n(e, t) {
            return (_n7 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var r in t) {
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
            })(e, t);
          }, function (e, t) {
            function r() {
              this.constructor = e;
            }

            _n7(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
          });

          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.WindowsDeviceManager = void 0;

          var o = function (e) {
            function t() {
              return e.call(this) || this;
            }

            return i(t, e), t;
          }(r(62).BaseDeviceManager);

          t.WindowsDeviceManager = o;
        },
        607: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.BrowserDeviceManager = void 0;
          var n = r(304);
          Object.defineProperty(t, "BrowserDeviceManager", {
            enumerable: !0,
            get: function get() {
              return n.BrowserDeviceManager;
            }
          }), window && (window.BrowserDeviceManager = n.BrowserDeviceManager);
        },
        101: function _(e, t) {
          var r;
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.SystemUtil = void 0, function (e) {
            e[e.Unknown = 0] = "Unknown", e[e.MacOS = 1] = "MacOS", e[e.Windows = 2] = "Windows", e[e.Android = 3] = "Android", e[e.Iphone = 4] = "Iphone", e[e.Ipad = 5] = "Ipad", e[e.Linux = 6] = "Linux";
          }(r || (r = {}));

          var n = function () {
            function e() {
              this.systemType = r.Unknown, this.getSystemInfo();
            }

            return Object.defineProperty(e.prototype, "isIos", {
              get: function get() {
                return this.systemType === r.Ipad || this.systemType === r.Iphone;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "isAndroid", {
              get: function get() {
                return this.systemType === r.Android;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "isMacOS", {
              get: function get() {
                return this.systemType === r.MacOS;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "isWindows", {
              get: function get() {
                return this.systemType === r.Windows;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "isLinux", {
              get: function get() {
                return this.systemType === r.Linux;
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.getSystemInfo = function () {
              if (navigator && navigator.userAgent) {
                var e = navigator.userAgent.toLocaleLowerCase();
                e.indexOf("ipad") > -1 ? this.systemType = r.Ipad : e.indexOf("iphone") > -1 ? this.systemType = r.Iphone : e.indexOf("android") > -1 ? this.systemType = r.Android : e.indexOf("win") > -1 ? this.systemType = r.Windows : e.indexOf("mac") > -1 ? this.systemType = r.MacOS : e.indexOf("linux") > -1 ? this.systemType = r.Linux : e.indexOf("") > -1 && (this.systemType = r.Unknown);
              }
            }, e;
          }();

          t.SystemUtil = n;
        }
      },
          t = {};
      return function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
          exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.exports;
      }(607);
    }();
  }, function (e, t, r) {
    "use strict";

    var _n8,
        i = this && this.__extends || (_n8 = function n(e, t) {
      return (_n8 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var r in t) {
          t.hasOwnProperty(r) && (e[r] = t[r]);
        }
      })(e, t);
    }, function (e, t) {
      function r() {
        this.constructor = e;
      }

      _n8(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    }),
        o = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = r(27),
        s = o(r(1)),
        c = r(28),
        d = r(31),
        p = r(3),
        u = r(5),
        f = function (e) {
      function t() {
        var t = e.call(this) || this;
        return t.monitor = new c.RtpMonitor(), t.monitor.on("onMonitorEvent", function (e) {
          t.emit("onMonitorEvent", e);
        }), t.monitor.on("streamEnded", function () {
          t.emit("streamEnded");
        }), t.monitor.on("canPlay", function () {
          t.emit("canPlay");
        }), t;
      }

      return i(t, e), t.prototype.playStart = function () {
        this.monitor.resetTimer(1e3);
      }, t.prototype.createOffer = function (e, t, r) {
        var n = this;
        return new Promise(function (i, o) {
          if (n.pc = new RTCPeerConnection({
            googCpuOveruseDetection: !1
          }), r) {
            n.localStream = r, n.sdpUtil = new a.SdpUtil(n.localStream);
            var s = n.addStream();
            if (0 !== s) return n.pc = void 0, void o(new u.RtsError(s, s === p.ErrorCode.ERROR_MEDIASTREAMTRACK_AUDIO_NONE ? "need audio track" : "", ""));
          } else n.sdpUtil = new a.SdpUtil();

          n.initDataChannel(), n.pc.createOffer({
            offerToReceiveAudio: e,
            offerToReceiveVideo: t
          }).then(function (e) {
            n.sdpUtil ? (n.sdpUtil.init(String(e.sdp)), n.sdpUtil.addNack(), r && n.sdpUtil.modifyTrackName(), n.pc && (e.sdp = n.sdpUtil.sdp, n.pc.setLocalDescription(e).then(function () {
              n.pc ? i(n.pc.localDescription) : o(new u.RtsError(p.ErrorCode.ERROR_CREATEOFFER, "no pc", ""));
            })["catch"](function (e) {
              o(new u.RtsError(p.ErrorCode.ERROR_CREATEOFFER, "setLocalDescription error", ""));
            }))) : o(new u.RtsError(p.ErrorCode.ERROR_CREATEOFFER, "no sdp", ""));
          })["catch"](function (e) {
            o(new u.RtsError(p.ErrorCode.ERROR_CREATEOFFER, e.message ? e.message : "create offer error", ""));
          });
        });
      }, t.prototype.recvAnswer = function (e) {
        var t = this;
        return new Promise(function (r, n) {
          t.pc ? (t.pc.ontrack = function (e) {
            t.pc && t.monitor.start(t.pc), t.emit("onTrackEvent", e);
          }, t.pc.setRemoteDescription(new RTCSessionDescription(e.jsep)).then(function (e) {
            t.pc && t.localStream && t.localStream.setEncodeParam(t.pc), r(e);
          })["catch"](function (e) {
            n(e);
          })) : n();
        });
      }, t.prototype.removeTrack = function (e, t) {
        var r = this;
        return new Promise(function (n, i) {
          r.pc && r.dataChannel && r.dataChannel.removeTrack(e, t).then(function () {})["catch"](function (e) {
            i(e);
          });
        });
      }, t.prototype.replaceTrack = function (e, t, r) {
        var n = this;
        return new Promise(function (i, o) {
          r || n.pc && n.dataChannel && n.dataChannel.removeTrack(e, t).then(function () {})["catch"](function (e) {
            o(e);
          });
        });
      }, t.prototype.dispose = function () {
        this.pc && (this.pc.ontrack = function () {}, this.pc.close()), this.sdpUtil && (this.sdpUtil.dispose(), this.sdpUtil = void 0), this.monitor.stop();
      }, t.prototype.addStream = function () {
        return this.localStream && this.localStream.audioTrack ? this.pc ? (this.pc.addTrack(this.localStream.audioTrack, this.localStream.mediaStream), this.localStream.videoTrack && this.pc.addTrack(this.localStream.videoTrack, this.localStream.mediaStream), 0) : p.ErrorCode.ERROR_PREERCONNECTION_UNKNOWN : p.ErrorCode.ERROR_MEDIASTREAMTRACK_AUDIO_NONE;
      }, t.prototype.initDataChannel = function () {
        !this.dataChannel && this.pc && (this.dataChannel = new d.Datachannel(this.pc));
      }, t;
    }(s["default"]);

    t.RtsPeerconnection = f;
  }, function (e, t, r) {
    "use strict";

    var _n9,
        i = this && this.__extends || (_n9 = function n(e, t) {
      return (_n9 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var r in t) {
          t.hasOwnProperty(r) && (e[r] = t[r]);
        }
      })(e, t);
    }, function (e, t) {
      function r() {
        this.constructor = e;
      }

      _n9(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    }),
        o = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = function (e) {
      function t() {
        var t = e.call(this) || this;
        return t.streamEnded = !1, t.rtt = -1, t.currentTimeGap = 0, t.lastTimeStamp = 0, t.bytesReceived = 0, t.bytesReceivedPerSecond = 0, t.lastPacketReceivedTimeStamp = 0, t.packetReceivedGap = 0, t.receiver = null, t.canplay = !1, t;
      }

      return i(t, e), Object.defineProperty(t.prototype, "rtpReceiver", {
        set: function set(e) {
          this.receiver = e;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "isExist", {
        get: function get() {
          return null != this.receiver;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "isPlaying", {
        get: function get() {
          return this.canplay;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "isStreamEnded", {
        get: function get() {
          return this.streamEnded;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.getInfo = function () {
        this.receiver && this.receiver.transport && "closed" === this.receiver.transport.state && this.canplay && (this.streamEnded = !0, this.emit("streamEnded"), this.canplay = !1);
      }, t.prototype.dispose = function () {
        this.reset();
      }, t.prototype.onCandidatePair = function (e) {
        e.currentRoundTripTime && (this.rtt = e.currentRoundTripTime ? e.currentRoundTripTime : -1);
      }, t.prototype.onInBoundRtp = function (e, t) {
        var r = e.timestamp ? e.timestamp : 0,
            n = e.bytesReceived ? e.bytesReceived : 0,
            i = e.lastPacketReceivedTimestamp ? e.lastPacketReceivedTimestamp : 0;
        r && this.bytesReceived ? (this.currentTimeGap = (r - this.lastTimeStamp) / 1e3, this.bytesReceivedPerSecond = Math.round((n - this.bytesReceived) / this.currentTimeGap)) : this.bytesReceivedPerSecond = 0, this.lastTimeStamp = r, this.bytesReceived = n, this.lastPacketReceivedTimeStamp && (this.packetReceivedGap = i - this.lastPacketReceivedTimeStamp), this.lastPacketReceivedTimeStamp = i, !this.canplay && n > 0 && (this.canplay = !0, this.emit("canPlay"));
      }, t.prototype.reset = function () {
        this.rtt = -1, this.currentTimeGap = 0, this.lastTimeStamp = 0, this.bytesReceived = 0, this.bytesReceivedPerSecond = 0, this.lastPacketReceivedTimeStamp = 0, this.packetReceivedGap = 0, this.receiver = null, this.canplay = !1, this.streamEnded = !1;
      }, t;
    }(o(r(1))["default"]);

    t.ReceiverMonitorData = a;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function () {
      function e() {}

      return e.CandidatePair = "candidate-pair", e.Certificate = "certificate", e.Codec = "codec", e.Csrc = "csrc", e.DataCahnnel = "data-channel", e.InboundRtp = "inbound-rtp", e.LocalCandidate = "local-candidate", e.OutboundRtp = "outbound-rtp", e.PeerConnection = "peer-connection", e.Receiver = "receiver", e.RemoteCandidate = "remote-candidate", e.RemoteInboundRtp = "remote-inbound-rtp", e.RemoteOutboundRtp = "remote-outbound-rtp", e.Sender = "sender", e.Stream = "stream", e.Track = "track", e.Transport = "transport", e.MediaSource = "media-source", e;
    }();

    t.RTCStatsType = n;
  }, function (e, t, r) {
    e.exports = r(32);
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e, t) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++) {
          r[n] = arguments[n];
        }

        return e.apply(t, r);
      };
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(0);

    function i(e) {
      return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }

    e.exports = function (e, t, r) {
      if (!t) return e;
      var o;
      if (r) o = r(t);else if (n.isURLSearchParams(t)) o = t.toString();else {
        var a = [];
        n.forEach(t, function (e, t) {
          null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, function (e) {
            n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), a.push(i(t) + "=" + i(e));
          }));
        }), o = a.join("&");
      }

      if (o) {
        var s = e.indexOf("#");
        -1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + o;
      }

      return e;
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  }, function (e, t, r) {
    "use strict";

    (function (t) {
      var n = r(0),
          i = r(38),
          o = {
        "Content-Type": "application/x-www-form-urlencoded"
      };

      function a(e, t) {
        !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
      }

      var s,
          c = {
        adapter: ("undefined" != typeof XMLHttpRequest ? s = r(17) : void 0 !== t && "[object process]" === Object.prototype.toString.call(t) && (s = r(17)), s),
        transformRequest: [function (e, t) {
          return i(t, "Accept"), i(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
        }],
        transformResponse: [function (e) {
          if ("string" == typeof e) try {
            e = JSON.parse(e);
          } catch (e) {}
          return e;
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function validateStatus(e) {
          return e >= 200 && e < 300;
        }
      };
      c.headers = {
        common: {
          Accept: "application/json, text/plain, */*"
        }
      }, n.forEach(["delete", "get", "head"], function (e) {
        c.headers[e] = {};
      }), n.forEach(["post", "put", "patch"], function (e) {
        c.headers[e] = n.merge(o);
      }), e.exports = c;
    }).call(this, r(37));
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        i = r(39),
        o = r(41),
        a = r(14),
        s = r(42),
        c = r(45),
        d = r(46),
        p = r(18);

    e.exports = function (e) {
      return new Promise(function (t, r) {
        var u = e.data,
            f = e.headers;
        n.isFormData(u) && delete f["Content-Type"];
        var l = new XMLHttpRequest();

        if (e.auth) {
          var h = e.auth.username || "",
              m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
          f.Authorization = "Basic " + btoa(h + ":" + m);
        }

        var R = s(e.baseURL, e.url);

        if (l.open(e.method.toUpperCase(), a(R, e.params, e.paramsSerializer), !0), l.timeout = e.timeout, l.onreadystatechange = function () {
          if (l && 4 === l.readyState && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:"))) {
            var n = "getAllResponseHeaders" in l ? c(l.getAllResponseHeaders()) : null,
                o = {
              data: e.responseType && "text" !== e.responseType ? l.response : l.responseText,
              status: l.status,
              statusText: l.statusText,
              headers: n,
              config: e,
              request: l
            };
            i(t, r, o), l = null;
          }
        }, l.onabort = function () {
          l && (r(p("Request aborted", e, "ECONNABORTED", l)), l = null);
        }, l.onerror = function () {
          r(p("Network Error", e, null, l)), l = null;
        }, l.ontimeout = function () {
          var t = "timeout of " + e.timeout + "ms exceeded";
          e.timeoutErrorMessage && (t = e.timeoutErrorMessage), r(p(t, e, "ECONNABORTED", l)), l = null;
        }, n.isStandardBrowserEnv()) {
          var E = (e.withCredentials || d(R)) && e.xsrfCookieName ? o.read(e.xsrfCookieName) : void 0;
          E && (f[e.xsrfHeaderName] = E);
        }

        if ("setRequestHeader" in l && n.forEach(f, function (e, t) {
          void 0 === u && "content-type" === t.toLowerCase() ? delete f[t] : l.setRequestHeader(t, e);
        }), n.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), e.responseType) try {
          l.responseType = e.responseType;
        } catch (t) {
          if ("json" !== e.responseType) throw t;
        }
        "function" == typeof e.onDownloadProgress && l.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && l.upload && l.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
          l && (l.abort(), r(e), l = null);
        }), u || (u = null), l.send(u);
      });
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(40);

    e.exports = function (e, t, r, i, o) {
      var a = new Error(e);
      return n(a, t, r, i, o);
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(0);

    e.exports = function (e, t) {
      t = t || {};
      var r = {},
          i = ["url", "method", "data"],
          o = ["headers", "auth", "proxy", "params"],
          a = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
          s = ["validateStatus"];

      function c(e, t) {
        return n.isPlainObject(e) && n.isPlainObject(t) ? n.merge(e, t) : n.isPlainObject(t) ? n.merge({}, t) : n.isArray(t) ? t.slice() : t;
      }

      function d(i) {
        n.isUndefined(t[i]) ? n.isUndefined(e[i]) || (r[i] = c(void 0, e[i])) : r[i] = c(e[i], t[i]);
      }

      n.forEach(i, function (e) {
        n.isUndefined(t[e]) || (r[e] = c(void 0, t[e]));
      }), n.forEach(o, d), n.forEach(a, function (i) {
        n.isUndefined(t[i]) ? n.isUndefined(e[i]) || (r[i] = c(void 0, e[i])) : r[i] = c(void 0, t[i]);
      }), n.forEach(s, function (n) {
        n in t ? r[n] = c(e[n], t[n]) : n in e && (r[n] = c(void 0, e[n]));
      });
      var p = i.concat(o).concat(a).concat(s),
          u = Object.keys(e).concat(Object.keys(t)).filter(function (e) {
        return -1 === p.indexOf(e);
      });
      return n.forEach(u, d), r;
    };
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      this.message = e;
    }

    n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }, n.prototype.__CANCEL__ = !0, e.exports = n;
  }, function (e, t, r) {
    "use strict";

    var n = r(2);

    function i(e, t, r, i, o) {
      var a = n.writeRtpDescription(e.kind, t);

      if (a += n.writeIceParameters(e.iceGatherer.getLocalParameters()), a += n.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : o || "active"), a += "a=mid:" + e.mid + "\r\n", e.rtpSender && e.rtpReceiver ? a += "a=sendrecv\r\n" : e.rtpSender ? a += "a=sendonly\r\n" : e.rtpReceiver ? a += "a=recvonly\r\n" : a += "a=inactive\r\n", e.rtpSender) {
        var s = e.rtpSender._initialTrackId || e.rtpSender.track.id;
        e.rtpSender._initialTrackId = s;
        var c = "msid:" + (i ? i.id : "-") + " " + s + "\r\n";
        a += "a=" + c, a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + c, e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + c, a += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n");
      }

      return a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + n.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + n.localCName + "\r\n"), a;
    }

    function o(e, t) {
      var r = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: []
      },
          n = function n(e, t) {
        e = parseInt(e, 10);

        for (var r = 0; r < t.length; r++) {
          if (t[r].payloadType === e || t[r].preferredPayloadType === e) return t[r];
        }
      },
          i = function i(e, t, r, _i) {
        var o = n(e.parameters.apt, r),
            a = n(t.parameters.apt, _i);
        return o && a && o.name.toLowerCase() === a.name.toLowerCase();
      };

      return e.codecs.forEach(function (n) {
        for (var o = 0; o < t.codecs.length; o++) {
          var a = t.codecs[o];

          if (n.name.toLowerCase() === a.name.toLowerCase() && n.clockRate === a.clockRate) {
            if ("rtx" === n.name.toLowerCase() && n.parameters && a.parameters.apt && !i(n, a, e.codecs, t.codecs)) continue;
            (a = JSON.parse(JSON.stringify(a))).numChannels = Math.min(n.numChannels, a.numChannels), r.codecs.push(a), a.rtcpFeedback = a.rtcpFeedback.filter(function (e) {
              for (var t = 0; t < n.rtcpFeedback.length; t++) {
                if (n.rtcpFeedback[t].type === e.type && n.rtcpFeedback[t].parameter === e.parameter) return !0;
              }

              return !1;
            });
            break;
          }
        }
      }), e.headerExtensions.forEach(function (e) {
        for (var n = 0; n < t.headerExtensions.length; n++) {
          var i = t.headerExtensions[n];

          if (e.uri === i.uri) {
            r.headerExtensions.push(i);
            break;
          }
        }
      }), r;
    }

    function a(e, t, r) {
      return -1 !== {
        offer: {
          setLocalDescription: ["stable", "have-local-offer"],
          setRemoteDescription: ["stable", "have-remote-offer"]
        },
        answer: {
          setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
          setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
        }
      }[t][e].indexOf(r);
    }

    function s(e, t) {
      var r = e.getRemoteCandidates().find(function (e) {
        return t.foundation === e.foundation && t.ip === e.ip && t.port === e.port && t.priority === e.priority && t.protocol === e.protocol && t.type === e.type;
      });
      return r || e.addRemoteCandidate(t), !r;
    }

    function c(e, t) {
      var r = new Error(t);
      return r.name = e, r.code = {
        NotSupportedError: 9,
        InvalidStateError: 11,
        InvalidAccessError: 15,
        TypeError: void 0,
        OperationError: void 0
      }[e], r;
    }

    e.exports = function (e, t) {
      function r(t, r) {
        r.addTrack(t), r.dispatchEvent(new e.MediaStreamTrackEvent("addtrack", {
          track: t
        }));
      }

      function d(t, r, n, i) {
        var o = new Event("track");
        o.track = r, o.receiver = n, o.transceiver = {
          receiver: n
        }, o.streams = i, e.setTimeout(function () {
          t._dispatchEvent("track", o);
        });
      }

      var p = function p(r) {
        var i = this,
            o = document.createDocumentFragment();
        if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function (e) {
          i[e] = o[e].bind(o);
        }), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", r = JSON.parse(JSON.stringify(r || {})), this.usingBundle = "max-bundle" === r.bundlePolicy, "negotiate" === r.rtcpMuxPolicy) throw c("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");

        switch (r.rtcpMuxPolicy || (r.rtcpMuxPolicy = "require"), r.iceTransportPolicy) {
          case "all":
          case "relay":
            break;

          default:
            r.iceTransportPolicy = "all";
        }

        switch (r.bundlePolicy) {
          case "balanced":
          case "max-compat":
          case "max-bundle":
            break;

          default:
            r.bundlePolicy = "balanced";
        }

        if (r.iceServers = function (e, t) {
          var r = !1;
          return (e = JSON.parse(JSON.stringify(e))).filter(function (e) {
            if (e && (e.urls || e.url)) {
              var n = e.urls || e.url;
              e.url && !e.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
              var i = "string" == typeof n;
              return i && (n = [n]), n = n.filter(function (e) {
                return 0 === e.indexOf("turn:") && -1 !== e.indexOf("transport=udp") && -1 === e.indexOf("turn:[") && !r ? (r = !0, !0) : 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp");
              }), delete e.url, e.urls = i ? n[0] : n, !!n.length;
            }
          });
        }(r.iceServers || [], t), this._iceGatherers = [], r.iceCandidatePoolSize) for (var a = r.iceCandidatePoolSize; a > 0; a--) {
          this._iceGatherers.push(new e.RTCIceGatherer({
            iceServers: r.iceServers,
            gatherPolicy: r.iceTransportPolicy
          }));
        } else r.iceCandidatePoolSize = 0;
        this._config = r, this.transceivers = [], this._sdpSessionId = n.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1;
      };

      Object.defineProperty(p.prototype, "localDescription", {
        configurable: !0,
        get: function get() {
          return this._localDescription;
        }
      }), Object.defineProperty(p.prototype, "remoteDescription", {
        configurable: !0,
        get: function get() {
          return this._remoteDescription;
        }
      }), p.prototype.onicecandidate = null, p.prototype.onaddstream = null, p.prototype.ontrack = null, p.prototype.onremovestream = null, p.prototype.onsignalingstatechange = null, p.prototype.oniceconnectionstatechange = null, p.prototype.onconnectionstatechange = null, p.prototype.onicegatheringstatechange = null, p.prototype.onnegotiationneeded = null, p.prototype.ondatachannel = null, p.prototype._dispatchEvent = function (e, t) {
        this._isClosed || (this.dispatchEvent(t), "function" == typeof this["on" + e] && this["on" + e](t));
      }, p.prototype._emitGatheringStateChange = function () {
        var e = new Event("icegatheringstatechange");

        this._dispatchEvent("icegatheringstatechange", e);
      }, p.prototype.getConfiguration = function () {
        return this._config;
      }, p.prototype.getLocalStreams = function () {
        return this.localStreams;
      }, p.prototype.getRemoteStreams = function () {
        return this.remoteStreams;
      }, p.prototype._createTransceiver = function (e, t) {
        var r = this.transceivers.length > 0,
            n = {
          track: null,
          iceGatherer: null,
          iceTransport: null,
          dtlsTransport: null,
          localCapabilities: null,
          remoteCapabilities: null,
          rtpSender: null,
          rtpReceiver: null,
          kind: e,
          mid: null,
          sendEncodingParameters: null,
          recvEncodingParameters: null,
          stream: null,
          associatedRemoteMediaStreams: [],
          wantReceive: !0
        };
        if (this.usingBundle && r) n.iceTransport = this.transceivers[0].iceTransport, n.dtlsTransport = this.transceivers[0].dtlsTransport;else {
          var i = this._createIceAndDtlsTransports();

          n.iceTransport = i.iceTransport, n.dtlsTransport = i.dtlsTransport;
        }
        return t || this.transceivers.push(n), n;
      }, p.prototype.addTrack = function (t, r) {
        if (this._isClosed) throw c("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
        var n;
        if (this.transceivers.find(function (e) {
          return e.track === t;
        })) throw c("InvalidAccessError", "Track already exists.");

        for (var i = 0; i < this.transceivers.length; i++) {
          this.transceivers[i].track || this.transceivers[i].kind !== t.kind || (n = this.transceivers[i]);
        }

        return n || (n = this._createTransceiver(t.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(r) && this.localStreams.push(r), n.track = t, n.stream = r, n.rtpSender = new e.RTCRtpSender(t, n.dtlsTransport), n.rtpSender;
      }, p.prototype.addStream = function (e) {
        var r = this;
        if (t >= 15025) e.getTracks().forEach(function (t) {
          r.addTrack(t, e);
        });else {
          var n = e.clone();
          e.getTracks().forEach(function (e, t) {
            var r = n.getTracks()[t];
            e.addEventListener("enabled", function (e) {
              r.enabled = e.enabled;
            });
          }), n.getTracks().forEach(function (e) {
            r.addTrack(e, n);
          });
        }
      }, p.prototype.removeTrack = function (t) {
        if (this._isClosed) throw c("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
        if (!(t instanceof e.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
        var r = this.transceivers.find(function (e) {
          return e.rtpSender === t;
        });
        if (!r) throw c("InvalidAccessError", "Sender was not created by this connection.");
        var n = r.stream;
        r.rtpSender.stop(), r.rtpSender = null, r.track = null, r.stream = null, -1 === this.transceivers.map(function (e) {
          return e.stream;
        }).indexOf(n) && this.localStreams.indexOf(n) > -1 && this.localStreams.splice(this.localStreams.indexOf(n), 1), this._maybeFireNegotiationNeeded();
      }, p.prototype.removeStream = function (e) {
        var t = this;
        e.getTracks().forEach(function (e) {
          var r = t.getSenders().find(function (t) {
            return t.track === e;
          });
          r && t.removeTrack(r);
        });
      }, p.prototype.getSenders = function () {
        return this.transceivers.filter(function (e) {
          return !!e.rtpSender;
        }).map(function (e) {
          return e.rtpSender;
        });
      }, p.prototype.getReceivers = function () {
        return this.transceivers.filter(function (e) {
          return !!e.rtpReceiver;
        }).map(function (e) {
          return e.rtpReceiver;
        });
      }, p.prototype._createIceGatherer = function (t, r) {
        var n = this;
        if (r && t > 0) return this.transceivers[0].iceGatherer;
        if (this._iceGatherers.length) return this._iceGatherers.shift();
        var i = new e.RTCIceGatherer({
          iceServers: this._config.iceServers,
          gatherPolicy: this._config.iceTransportPolicy
        });
        return Object.defineProperty(i, "state", {
          value: "new",
          writable: !0
        }), this.transceivers[t].bufferedCandidateEvents = [], this.transceivers[t].bufferCandidates = function (e) {
          var r = !e.candidate || 0 === Object.keys(e.candidate).length;
          i.state = r ? "completed" : "gathering", null !== n.transceivers[t].bufferedCandidateEvents && n.transceivers[t].bufferedCandidateEvents.push(e);
        }, i.addEventListener("localcandidate", this.transceivers[t].bufferCandidates), i;
      }, p.prototype._gather = function (t, r) {
        var i = this,
            o = this.transceivers[r].iceGatherer;

        if (!o.onlocalcandidate) {
          var a = this.transceivers[r].bufferedCandidateEvents;
          this.transceivers[r].bufferedCandidateEvents = null, o.removeEventListener("localcandidate", this.transceivers[r].bufferCandidates), o.onlocalcandidate = function (e) {
            if (!(i.usingBundle && r > 0)) {
              var a = new Event("icecandidate");
              a.candidate = {
                sdpMid: t,
                sdpMLineIndex: r
              };
              var s = e.candidate,
                  c = !s || 0 === Object.keys(s).length;
              if (c) "new" !== o.state && "gathering" !== o.state || (o.state = "completed");else {
                "new" === o.state && (o.state = "gathering"), s.component = 1, s.ufrag = o.getLocalParameters().usernameFragment;
                var d = n.writeCandidate(s);
                a.candidate = Object.assign(a.candidate, n.parseCandidate(d)), a.candidate.candidate = d, a.candidate.toJSON = function () {
                  return {
                    candidate: a.candidate.candidate,
                    sdpMid: a.candidate.sdpMid,
                    sdpMLineIndex: a.candidate.sdpMLineIndex,
                    usernameFragment: a.candidate.usernameFragment
                  };
                };
              }
              var p = n.getMediaSections(i._localDescription.sdp);
              p[a.candidate.sdpMLineIndex] += c ? "a=end-of-candidates\r\n" : "a=" + a.candidate.candidate + "\r\n", i._localDescription.sdp = n.getDescription(i._localDescription.sdp) + p.join("");
              var u = i.transceivers.every(function (e) {
                return e.iceGatherer && "completed" === e.iceGatherer.state;
              });
              "gathering" !== i.iceGatheringState && (i.iceGatheringState = "gathering", i._emitGatheringStateChange()), c || i._dispatchEvent("icecandidate", a), u && (i._dispatchEvent("icecandidate", new Event("icecandidate")), i.iceGatheringState = "complete", i._emitGatheringStateChange());
            }
          }, e.setTimeout(function () {
            a.forEach(function (e) {
              o.onlocalcandidate(e);
            });
          }, 0);
        }
      }, p.prototype._createIceAndDtlsTransports = function () {
        var t = this,
            r = new e.RTCIceTransport(null);

        r.onicestatechange = function () {
          t._updateIceConnectionState(), t._updateConnectionState();
        };

        var n = new e.RTCDtlsTransport(r);
        return n.ondtlsstatechange = function () {
          t._updateConnectionState();
        }, n.onerror = function () {
          Object.defineProperty(n, "state", {
            value: "failed",
            writable: !0
          }), t._updateConnectionState();
        }, {
          iceTransport: r,
          dtlsTransport: n
        };
      }, p.prototype._disposeIceAndDtlsTransports = function (e) {
        var t = this.transceivers[e].iceGatherer;
        t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer);
        var r = this.transceivers[e].iceTransport;
        r && (delete r.onicestatechange, delete this.transceivers[e].iceTransport);
        var n = this.transceivers[e].dtlsTransport;
        n && (delete n.ondtlsstatechange, delete n.onerror, delete this.transceivers[e].dtlsTransport);
      }, p.prototype._transceive = function (e, r, i) {
        var a = o(e.localCapabilities, e.remoteCapabilities);
        r && e.rtpSender && (a.encodings = e.sendEncodingParameters, a.rtcp = {
          cname: n.localCName,
          compound: e.rtcpParameters.compound
        }, e.recvEncodingParameters.length && (a.rtcp.ssrc = e.recvEncodingParameters[0].ssrc), e.rtpSender.send(a)), i && e.rtpReceiver && a.codecs.length > 0 && ("video" === e.kind && e.recvEncodingParameters && t < 15019 && e.recvEncodingParameters.forEach(function (e) {
          delete e.rtx;
        }), e.recvEncodingParameters.length ? a.encodings = e.recvEncodingParameters : a.encodings = [{}], a.rtcp = {
          compound: e.rtcpParameters.compound
        }, e.rtcpParameters.cname && (a.rtcp.cname = e.rtcpParameters.cname), e.sendEncodingParameters.length && (a.rtcp.ssrc = e.sendEncodingParameters[0].ssrc), e.rtpReceiver.receive(a));
      }, p.prototype.setLocalDescription = function (e) {
        var t,
            r,
            i = this;
        if (-1 === ["offer", "answer"].indexOf(e.type)) return Promise.reject(c("TypeError", 'Unsupported type "' + e.type + '"'));
        if (!a("setLocalDescription", e.type, i.signalingState) || i._isClosed) return Promise.reject(c("InvalidStateError", "Can not set local " + e.type + " in state " + i.signalingState));
        if ("offer" === e.type) t = n.splitSections(e.sdp), r = t.shift(), t.forEach(function (e, t) {
          var r = n.parseRtpParameters(e);
          i.transceivers[t].localCapabilities = r;
        }), i.transceivers.forEach(function (e, t) {
          i._gather(e.mid, t);
        });else if ("answer" === e.type) {
          t = n.splitSections(i._remoteDescription.sdp), r = t.shift();
          var s = n.matchPrefix(r, "a=ice-lite").length > 0;
          t.forEach(function (e, t) {
            var a = i.transceivers[t],
                c = a.iceGatherer,
                d = a.iceTransport,
                p = a.dtlsTransport,
                u = a.localCapabilities,
                f = a.remoteCapabilities;

            if (!(n.isRejected(e) && 0 === n.matchPrefix(e, "a=bundle-only").length) && !a.rejected) {
              var l = n.getIceParameters(e, r),
                  h = n.getDtlsParameters(e, r);
              s && (h.role = "server"), i.usingBundle && 0 !== t || (i._gather(a.mid, t), "new" === d.state && d.start(c, l, s ? "controlling" : "controlled"), "new" === p.state && p.start(h));
              var m = o(u, f);

              i._transceive(a, m.codecs.length > 0, !1);
            }
          });
        }
        return i._localDescription = {
          type: e.type,
          sdp: e.sdp
        }, "offer" === e.type ? i._updateSignalingState("have-local-offer") : i._updateSignalingState("stable"), Promise.resolve();
      }, p.prototype.setRemoteDescription = function (i) {
        var p = this;
        if (-1 === ["offer", "answer"].indexOf(i.type)) return Promise.reject(c("TypeError", 'Unsupported type "' + i.type + '"'));
        if (!a("setRemoteDescription", i.type, p.signalingState) || p._isClosed) return Promise.reject(c("InvalidStateError", "Can not set remote " + i.type + " in state " + p.signalingState));
        var u = {};
        p.remoteStreams.forEach(function (e) {
          u[e.id] = e;
        });
        var f = [],
            l = n.splitSections(i.sdp),
            h = l.shift(),
            m = n.matchPrefix(h, "a=ice-lite").length > 0,
            R = n.matchPrefix(h, "a=group:BUNDLE ").length > 0;
        p.usingBundle = R;
        var E = n.matchPrefix(h, "a=ice-options:")[0];
        return p.canTrickleIceCandidates = !!E && E.substr(14).split(" ").indexOf("trickle") >= 0, l.forEach(function (a, c) {
          var d = n.splitLines(a),
              l = n.getKind(a),
              E = n.isRejected(a) && 0 === n.matchPrefix(a, "a=bundle-only").length,
              v = d[0].substr(2).split(" ")[2],
              y = n.getDirection(a, h),
              g = n.parseMsid(a),
              _ = n.getMid(a) || n.generateIdentifier();

          if (E || "application" === l && ("DTLS/SCTP" === v || "UDP/DTLS/SCTP" === v)) p.transceivers[c] = {
            mid: _,
            kind: l,
            protocol: v,
            rejected: !0
          };else {
            var S, O, C, T, b, P, w, D, I;
            !E && p.transceivers[c] && p.transceivers[c].rejected && (p.transceivers[c] = p._createTransceiver(l, !0));
            var N,
                k,
                A = n.parseRtpParameters(a);
            E || (N = n.getIceParameters(a, h), (k = n.getDtlsParameters(a, h)).role = "client"), w = n.parseRtpEncodingParameters(a);
            var M = n.parseRtcpParameters(a),
                x = n.matchPrefix(a, "a=end-of-candidates", h).length > 0,
                L = n.matchPrefix(a, "a=candidate:").map(function (e) {
              return n.parseCandidate(e);
            }).filter(function (e) {
              return 1 === e.component;
            });

            if (("offer" === i.type || "answer" === i.type) && !E && R && c > 0 && p.transceivers[c] && (p._disposeIceAndDtlsTransports(c), p.transceivers[c].iceGatherer = p.transceivers[0].iceGatherer, p.transceivers[c].iceTransport = p.transceivers[0].iceTransport, p.transceivers[c].dtlsTransport = p.transceivers[0].dtlsTransport, p.transceivers[c].rtpSender && p.transceivers[c].rtpSender.setTransport(p.transceivers[0].dtlsTransport), p.transceivers[c].rtpReceiver && p.transceivers[c].rtpReceiver.setTransport(p.transceivers[0].dtlsTransport)), "offer" !== i.type || E) {
              if ("answer" === i.type && !E) {
                O = (S = p.transceivers[c]).iceGatherer, C = S.iceTransport, T = S.dtlsTransport, b = S.rtpReceiver, P = S.sendEncodingParameters, D = S.localCapabilities, p.transceivers[c].recvEncodingParameters = w, p.transceivers[c].remoteCapabilities = A, p.transceivers[c].rtcpParameters = M, L.length && "new" === C.state && (!m && !x || R && 0 !== c ? L.forEach(function (e) {
                  s(S.iceTransport, e);
                }) : C.setRemoteCandidates(L)), R && 0 !== c || ("new" === C.state && C.start(O, N, "controlling"), "new" === T.state && T.start(k)), !o(S.localCapabilities, S.remoteCapabilities).codecs.filter(function (e) {
                  return "rtx" === e.name.toLowerCase();
                }).length && S.sendEncodingParameters[0].rtx && delete S.sendEncodingParameters[0].rtx, p._transceive(S, "sendrecv" === y || "recvonly" === y, "sendrecv" === y || "sendonly" === y), !b || "sendrecv" !== y && "sendonly" !== y ? delete S.rtpReceiver : (I = b.track, g ? (u[g.stream] || (u[g.stream] = new e.MediaStream()), r(I, u[g.stream]), f.push([I, b, u[g.stream]])) : (u["default"] || (u["default"] = new e.MediaStream()), r(I, u["default"]), f.push([I, b, u["default"]])));
              }
            } else {
              (S = p.transceivers[c] || p._createTransceiver(l)).mid = _, S.iceGatherer || (S.iceGatherer = p._createIceGatherer(c, R)), L.length && "new" === S.iceTransport.state && (!x || R && 0 !== c ? L.forEach(function (e) {
                s(S.iceTransport, e);
              }) : S.iceTransport.setRemoteCandidates(L)), D = e.RTCRtpReceiver.getCapabilities(l), t < 15019 && (D.codecs = D.codecs.filter(function (e) {
                return "rtx" !== e.name;
              })), P = S.sendEncodingParameters || [{
                ssrc: 1001 * (2 * c + 2)
              }];
              var U,
                  V = !1;

              if ("sendrecv" === y || "sendonly" === y) {
                if (V = !S.rtpReceiver, b = S.rtpReceiver || new e.RTCRtpReceiver(S.dtlsTransport, l), V) I = b.track, g && "-" === g.stream || (g ? (u[g.stream] || (u[g.stream] = new e.MediaStream(), Object.defineProperty(u[g.stream], "id", {
                  get: function get() {
                    return g.stream;
                  }
                })), Object.defineProperty(I, "id", {
                  get: function get() {
                    return g.track;
                  }
                }), U = u[g.stream]) : (u["default"] || (u["default"] = new e.MediaStream()), U = u["default"])), U && (r(I, U), S.associatedRemoteMediaStreams.push(U)), f.push([I, b, U]);
              } else S.rtpReceiver && S.rtpReceiver.track && (S.associatedRemoteMediaStreams.forEach(function (t) {
                var r = t.getTracks().find(function (e) {
                  return e.id === S.rtpReceiver.track.id;
                });
                r && function (t, r) {
                  r.removeTrack(t), r.dispatchEvent(new e.MediaStreamTrackEvent("removetrack", {
                    track: t
                  }));
                }(r, t);
              }), S.associatedRemoteMediaStreams = []);

              S.localCapabilities = D, S.remoteCapabilities = A, S.rtpReceiver = b, S.rtcpParameters = M, S.sendEncodingParameters = P, S.recvEncodingParameters = w, p._transceive(p.transceivers[c], !1, V);
            }
          }
        }), void 0 === p._dtlsRole && (p._dtlsRole = "offer" === i.type ? "active" : "passive"), p._remoteDescription = {
          type: i.type,
          sdp: i.sdp
        }, "offer" === i.type ? p._updateSignalingState("have-remote-offer") : p._updateSignalingState("stable"), Object.keys(u).forEach(function (t) {
          var r = u[t];

          if (r.getTracks().length) {
            if (-1 === p.remoteStreams.indexOf(r)) {
              p.remoteStreams.push(r);
              var n = new Event("addstream");
              n.stream = r, e.setTimeout(function () {
                p._dispatchEvent("addstream", n);
              });
            }

            f.forEach(function (e) {
              var t = e[0],
                  n = e[1];
              r.id === e[2].id && d(p, t, n, [r]);
            });
          }
        }), f.forEach(function (e) {
          e[2] || d(p, e[0], e[1], []);
        }), e.setTimeout(function () {
          p && p.transceivers && p.transceivers.forEach(function (e) {
            e.iceTransport && "new" === e.iceTransport.state && e.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), e.iceTransport.addRemoteCandidate({}));
          });
        }, 4e3), Promise.resolve();
      }, p.prototype.close = function () {
        this.transceivers.forEach(function (e) {
          e.iceTransport && e.iceTransport.stop(), e.dtlsTransport && e.dtlsTransport.stop(), e.rtpSender && e.rtpSender.stop(), e.rtpReceiver && e.rtpReceiver.stop();
        }), this._isClosed = !0, this._updateSignalingState("closed");
      }, p.prototype._updateSignalingState = function (e) {
        this.signalingState = e;
        var t = new Event("signalingstatechange");

        this._dispatchEvent("signalingstatechange", t);
      }, p.prototype._maybeFireNegotiationNeeded = function () {
        var t = this;
        "stable" === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, e.setTimeout(function () {
          if (t.needNegotiation) {
            t.needNegotiation = !1;
            var e = new Event("negotiationneeded");

            t._dispatchEvent("negotiationneeded", e);
          }
        }, 0));
      }, p.prototype._updateIceConnectionState = function () {
        var e,
            t = {
          "new": 0,
          closed: 0,
          checking: 0,
          connected: 0,
          completed: 0,
          disconnected: 0,
          failed: 0
        };

        if (this.transceivers.forEach(function (e) {
          e.iceTransport && !e.rejected && t[e.iceTransport.state]++;
        }), e = "new", t.failed > 0 ? e = "failed" : t.checking > 0 ? e = "checking" : t.disconnected > 0 ? e = "disconnected" : t["new"] > 0 ? e = "new" : t.connected > 0 ? e = "connected" : t.completed > 0 && (e = "completed"), e !== this.iceConnectionState) {
          this.iceConnectionState = e;
          var r = new Event("iceconnectionstatechange");

          this._dispatchEvent("iceconnectionstatechange", r);
        }
      }, p.prototype._updateConnectionState = function () {
        var e,
            t = {
          "new": 0,
          closed: 0,
          connecting: 0,
          connected: 0,
          completed: 0,
          disconnected: 0,
          failed: 0
        };

        if (this.transceivers.forEach(function (e) {
          e.iceTransport && e.dtlsTransport && !e.rejected && (t[e.iceTransport.state]++, t[e.dtlsTransport.state]++);
        }), t.connected += t.completed, e = "new", t.failed > 0 ? e = "failed" : t.connecting > 0 ? e = "connecting" : t.disconnected > 0 ? e = "disconnected" : t["new"] > 0 ? e = "new" : t.connected > 0 && (e = "connected"), e !== this.connectionState) {
          this.connectionState = e;
          var r = new Event("connectionstatechange");

          this._dispatchEvent("connectionstatechange", r);
        }
      }, p.prototype.createOffer = function () {
        var r = this;
        if (r._isClosed) return Promise.reject(c("InvalidStateError", "Can not call createOffer after close"));
        var o = r.transceivers.filter(function (e) {
          return "audio" === e.kind;
        }).length,
            a = r.transceivers.filter(function (e) {
          return "video" === e.kind;
        }).length,
            s = arguments[0];

        if (s) {
          if (s.mandatory || s.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
          void 0 !== s.offerToReceiveAudio && (o = !0 === s.offerToReceiveAudio ? 1 : !1 === s.offerToReceiveAudio ? 0 : s.offerToReceiveAudio), void 0 !== s.offerToReceiveVideo && (a = !0 === s.offerToReceiveVideo ? 1 : !1 === s.offerToReceiveVideo ? 0 : s.offerToReceiveVideo);
        }

        for (r.transceivers.forEach(function (e) {
          "audio" === e.kind ? --o < 0 && (e.wantReceive = !1) : "video" === e.kind && --a < 0 && (e.wantReceive = !1);
        }); o > 0 || a > 0;) {
          o > 0 && (r._createTransceiver("audio"), o--), a > 0 && (r._createTransceiver("video"), a--);
        }

        var d = n.writeSessionBoilerplate(r._sdpSessionId, r._sdpSessionVersion++);
        r.transceivers.forEach(function (i, o) {
          var a = i.track,
              s = i.kind,
              c = i.mid || n.generateIdentifier();
          i.mid = c, i.iceGatherer || (i.iceGatherer = r._createIceGatherer(o, r.usingBundle));
          var d = e.RTCRtpSender.getCapabilities(s);
          t < 15019 && (d.codecs = d.codecs.filter(function (e) {
            return "rtx" !== e.name;
          })), d.codecs.forEach(function (e) {
            "H264" === e.name && void 0 === e.parameters["level-asymmetry-allowed"] && (e.parameters["level-asymmetry-allowed"] = "1"), i.remoteCapabilities && i.remoteCapabilities.codecs && i.remoteCapabilities.codecs.forEach(function (t) {
              e.name.toLowerCase() === t.name.toLowerCase() && e.clockRate === t.clockRate && (e.preferredPayloadType = t.payloadType);
            });
          }), d.headerExtensions.forEach(function (e) {
            (i.remoteCapabilities && i.remoteCapabilities.headerExtensions || []).forEach(function (t) {
              e.uri === t.uri && (e.id = t.id);
            });
          });
          var p = i.sendEncodingParameters || [{
            ssrc: 1001 * (2 * o + 1)
          }];
          a && t >= 15019 && "video" === s && !p[0].rtx && (p[0].rtx = {
            ssrc: p[0].ssrc + 1
          }), i.wantReceive && (i.rtpReceiver = new e.RTCRtpReceiver(i.dtlsTransport, s)), i.localCapabilities = d, i.sendEncodingParameters = p;
        }), "max-compat" !== r._config.bundlePolicy && (d += "a=group:BUNDLE " + r.transceivers.map(function (e) {
          return e.mid;
        }).join(" ") + "\r\n"), d += "a=ice-options:trickle\r\n", r.transceivers.forEach(function (e, t) {
          d += i(e, e.localCapabilities, "offer", e.stream, r._dtlsRole), d += "a=rtcp-rsize\r\n", !e.iceGatherer || "new" === r.iceGatheringState || 0 !== t && r.usingBundle || (e.iceGatherer.getLocalCandidates().forEach(function (e) {
            e.component = 1, d += "a=" + n.writeCandidate(e) + "\r\n";
          }), "completed" === e.iceGatherer.state && (d += "a=end-of-candidates\r\n"));
        });
        var p = new e.RTCSessionDescription({
          type: "offer",
          sdp: d
        });
        return Promise.resolve(p);
      }, p.prototype.createAnswer = function () {
        var r = this;
        if (r._isClosed) return Promise.reject(c("InvalidStateError", "Can not call createAnswer after close"));
        if ("have-remote-offer" !== r.signalingState && "have-local-pranswer" !== r.signalingState) return Promise.reject(c("InvalidStateError", "Can not call createAnswer in signalingState " + r.signalingState));
        var a = n.writeSessionBoilerplate(r._sdpSessionId, r._sdpSessionVersion++);
        r.usingBundle && (a += "a=group:BUNDLE " + r.transceivers.map(function (e) {
          return e.mid;
        }).join(" ") + "\r\n"), a += "a=ice-options:trickle\r\n";
        var s = n.getMediaSections(r._remoteDescription.sdp).length;
        r.transceivers.forEach(function (e, n) {
          if (!(n + 1 > s)) {
            if (e.rejected) return "application" === e.kind ? "DTLS/SCTP" === e.protocol ? a += "m=application 0 DTLS/SCTP 5000\r\n" : a += "m=application 0 " + e.protocol + " webrtc-datachannel\r\n" : "audio" === e.kind ? a += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === e.kind && (a += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"), void (a += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e.mid + "\r\n");
            var c;
            if (e.stream) "audio" === e.kind ? c = e.stream.getAudioTracks()[0] : "video" === e.kind && (c = e.stream.getVideoTracks()[0]), c && t >= 15019 && "video" === e.kind && !e.sendEncodingParameters[0].rtx && (e.sendEncodingParameters[0].rtx = {
              ssrc: e.sendEncodingParameters[0].ssrc + 1
            });
            var d = o(e.localCapabilities, e.remoteCapabilities);
            !d.codecs.filter(function (e) {
              return "rtx" === e.name.toLowerCase();
            }).length && e.sendEncodingParameters[0].rtx && delete e.sendEncodingParameters[0].rtx, a += i(e, d, "answer", e.stream, r._dtlsRole), e.rtcpParameters && e.rtcpParameters.reducedSize && (a += "a=rtcp-rsize\r\n");
          }
        });
        var d = new e.RTCSessionDescription({
          type: "answer",
          sdp: a
        });
        return Promise.resolve(d);
      }, p.prototype.addIceCandidate = function (e) {
        var t,
            r = this;
        return e && void 0 === e.sdpMLineIndex && !e.sdpMid ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise(function (i, o) {
          if (!r._remoteDescription) return o(c("InvalidStateError", "Can not add ICE candidate without a remote description"));

          if (e && "" !== e.candidate) {
            var a = e.sdpMLineIndex;
            if (e.sdpMid) for (var d = 0; d < r.transceivers.length; d++) {
              if (r.transceivers[d].mid === e.sdpMid) {
                a = d;
                break;
              }
            }
            var p = r.transceivers[a];
            if (!p) return o(c("OperationError", "Can not add ICE candidate"));
            if (p.rejected) return i();
            var u = Object.keys(e.candidate).length > 0 ? n.parseCandidate(e.candidate) : {};
            if ("tcp" === u.protocol && (0 === u.port || 9 === u.port)) return i();
            if (u.component && 1 !== u.component) return i();
            if ((0 === a || a > 0 && p.iceTransport !== r.transceivers[0].iceTransport) && !s(p.iceTransport, u)) return o(c("OperationError", "Can not add ICE candidate"));
            var f = e.candidate.trim();
            0 === f.indexOf("a=") && (f = f.substr(2)), (t = n.getMediaSections(r._remoteDescription.sdp))[a] += "a=" + (u.type ? f : "end-of-candidates") + "\r\n", r._remoteDescription.sdp = n.getDescription(r._remoteDescription.sdp) + t.join("");
          } else for (var l = 0; l < r.transceivers.length && (r.transceivers[l].rejected || (r.transceivers[l].iceTransport.addRemoteCandidate({}), (t = n.getMediaSections(r._remoteDescription.sdp))[l] += "a=end-of-candidates\r\n", r._remoteDescription.sdp = n.getDescription(r._remoteDescription.sdp) + t.join(""), !r.usingBundle)); l++) {
            ;
          }

          i();
        });
      }, p.prototype.getStats = function (t) {
        if (t && t instanceof e.MediaStreamTrack) {
          var r = null;
          if (this.transceivers.forEach(function (e) {
            e.rtpSender && e.rtpSender.track === t ? r = e.rtpSender : e.rtpReceiver && e.rtpReceiver.track === t && (r = e.rtpReceiver);
          }), !r) throw c("InvalidAccessError", "Invalid selector.");
          return r.getStats();
        }

        var n = [];
        return this.transceivers.forEach(function (e) {
          ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(function (t) {
            e[t] && n.push(e[t].getStats());
          });
        }), Promise.all(n).then(function (e) {
          var t = new Map();
          return e.forEach(function (e) {
            e.forEach(function (e) {
              t.set(e.id, e);
            });
          }), t;
        });
      };
      ["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"].forEach(function (t) {
        var r = e[t];

        if (r && r.prototype && r.prototype.getStats) {
          var n = r.prototype.getStats;

          r.prototype.getStats = function () {
            return n.apply(this).then(function (e) {
              var t = new Map();
              return Object.keys(e).forEach(function (r) {
                var n;
                e[r].type = {
                  inboundrtp: "inbound-rtp",
                  outboundrtp: "outbound-rtp",
                  candidatepair: "candidate-pair",
                  localcandidate: "local-candidate",
                  remotecandidate: "remote-candidate"
                }[(n = e[r]).type] || n.type, t.set(r, e[r]);
              }), t;
            });
          };
        }
      });
      var u = ["createOffer", "createAnswer"];
      return u.forEach(function (e) {
        var t = p.prototype[e];

        p.prototype[e] = function () {
          var e = arguments;
          return "function" == typeof e[0] || "function" == typeof e[1] ? t.apply(this, [arguments[2]]).then(function (t) {
            "function" == typeof e[0] && e[0].apply(null, [t]);
          }, function (t) {
            "function" == typeof e[1] && e[1].apply(null, [t]);
          }) : t.apply(this, arguments);
        };
      }), (u = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).forEach(function (e) {
        var t = p.prototype[e];

        p.prototype[e] = function () {
          var e = arguments;
          return "function" == typeof e[1] || "function" == typeof e[2] ? t.apply(this, arguments).then(function () {
            "function" == typeof e[1] && e[1].apply(null);
          }, function (t) {
            "function" == typeof e[2] && e[2].apply(null, [t]);
          }) : t.apply(this, arguments);
        };
      }), ["getStats"].forEach(function (e) {
        var t = p.prototype[e];

        p.prototype[e] = function () {
          var e = arguments;
          return "function" == typeof e[1] ? t.apply(this, arguments).then(function () {
            "function" == typeof e[1] && e[1].apply(null);
          }) : t.apply(this, arguments);
        };
      }), p;
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), r(55);
    var n = r(23);
    t.AliRTS = n.AliRTS, window && (window.AliRTS = n.AliRTS);
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = r(24),
        i = r(8),
        o = r(25),
        a = function () {
      function e() {}

      return e.createClient = function (e) {
        return new o.RtsClient(e);
      }, e.getMicList = function () {
        var e = this;
        return new Promise(function (t, r) {
          e.deviceManager.getMicList().then(function (e) {
            t(e);
          })["catch"](function (e) {
            r(e);
          });
        });
      }, e.getCameraList = function () {
        var e = this;
        return new Promise(function (t, r) {
          e.deviceManager.getCameraList().then(function (e) {
            t(e);
          })["catch"](function (e) {
            r(e);
          });
        });
      }, e.createStream = function (e) {
        return new Promise(function (t, r) {
          var i = new n.LocalStream();
          i.init(e).then(function () {
            t(i);
          })["catch"](function (e) {
            r(e);
          });
        });
      }, e.deviceManager = new i.BrowserDeviceManager(), e;
    }();

    t.AliRTS = a;
  }, function (e, t, r) {
    "use strict";

    var _n10,
        i = this && this.__extends || (_n10 = function n(e, t) {
      return (_n10 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var r in t) {
          t.hasOwnProperty(r) && (e[r] = t[r]);
        }
      })(e, t);
    }, function (e, t) {
      function r() {
        this.constructor = e;
      }

      _n10(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    });

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(7),
        a = r(8),
        s = r(5),
        c = r(3),
        d = r(4),
        p = new Map();
    p.set("480p_1", {
      width: 640,
      height: 480,
      frameRate: 5,
      maxBitrate: 300
    }), p.set("480p_2", {
      width: 640,
      height: 480,
      frameRate: 30,
      maxBitrate: 1e3
    }), p.set("720p_1", {
      width: 1280,
      height: 720,
      frameRate: 5,
      maxBitrate: 800
    }), p.set("720p_2", {
      width: 1280,
      height: 720,
      frameRate: 30,
      maxBitrate: 2e3
    }), p.set("1080p_1", {
      width: 1920,
      height: 1080,
      frameRate: 5,
      maxBitrate: 1e3
    }), p.set("1080p_2", {
      width: 1920,
      height: 1080,
      frameRate: 30,
      maxBitrate: 3e3
    });
    var u = new Map();
    u.set("120p_1", {
      width: 160,
      height: 120,
      frameRate: 15,
      maxBitrate: 65
    }), u.set("120p_3", {
      width: 120,
      height: 120,
      frameRate: 15,
      maxBitrate: 50
    }), u.set("180p_1", {
      width: 320,
      height: 180,
      frameRate: 15,
      maxBitrate: 140
    }), u.set("180p_3", {
      width: 180,
      height: 180,
      frameRate: 15,
      maxBitrate: 100
    }), u.set("180p_4", {
      width: 240,
      height: 180,
      frameRate: 15,
      maxBitrate: 120
    }), u.set("240p_1", {
      width: 320,
      height: 240,
      frameRate: 15,
      maxBitrate: 200
    }), u.set("240p_3", {
      width: 240,
      height: 240,
      frameRate: 15,
      maxBitrate: 140
    }), u.set("240p_4", {
      width: 424,
      height: 240,
      frameRate: 15,
      maxBitrate: 220
    }), u.set("360p_1", {
      width: 640,
      height: 360,
      frameRate: 15,
      maxBitrate: 400
    }), u.set("360p_3", {
      width: 360,
      height: 360,
      frameRate: 15,
      maxBitrate: 260
    }), u.set("360p_4", {
      width: 640,
      height: 360,
      frameRate: 30,
      maxBitrate: 600
    }), u.set("360p_6", {
      width: 360,
      height: 360,
      frameRate: 30,
      maxBitrate: 400
    }), u.set("360p_7", {
      width: 480,
      height: 360,
      frameRate: 15,
      maxBitrate: 320
    }), u.set("360p_8", {
      width: 480,
      height: 360,
      frameRate: 30,
      maxBitrate: 490
    }), u.set("360p_9", {
      width: 640,
      height: 360,
      frameRate: 15,
      maxBitrate: 800
    }), u.set("360p_10", {
      width: 640,
      height: 360,
      frameRate: 24,
      maxBitrate: 800
    }), u.set("360p_11", {
      width: 640,
      height: 360,
      frameRate: 24,
      maxBitrate: 1e3
    }), u.set("480p_1", {
      width: 640,
      height: 480,
      frameRate: 15,
      maxBitrate: 500
    }), u.set("480p_2", {
      width: 640,
      height: 480,
      frameRate: 30,
      maxBitrate: 1e3
    }), u.set("480p_3", {
      width: 480,
      height: 480,
      frameRate: 15,
      maxBitrate: 400
    }), u.set("480p_4", {
      width: 640,
      height: 480,
      frameRate: 30,
      maxBitrate: 750
    }), u.set("480p_6", {
      width: 480,
      height: 480,
      frameRate: 30,
      maxBitrate: 600
    }), u.set("480p_8", {
      width: 848,
      height: 480,
      frameRate: 15,
      maxBitrate: 610
    }), u.set("480p_9", {
      width: 848,
      height: 480,
      frameRate: 30,
      maxBitrate: 930
    }), u.set("480p_10", {
      width: 640,
      height: 480,
      frameRate: 10,
      maxBitrate: 400
    }), u.set("720p_1", {
      width: 1280,
      height: 720,
      frameRate: 15,
      maxBitrate: 1130
    }), u.set("720p_2", {
      width: 1280,
      height: 720,
      frameRate: 30,
      maxBitrate: 2e3
    }), u.set("720p_3", {
      width: 1280,
      height: 720,
      frameRate: 30,
      maxBitrate: 1710
    }), u.set("720p_5", {
      width: 960,
      height: 720,
      frameRate: 15,
      maxBitrate: 910
    }), u.set("720p_6", {
      width: 960,
      height: 720,
      frameRate: 30,
      maxBitrate: 1380
    }), u.set("1080p_1", {
      width: 1920,
      height: 1080,
      frameRate: 15,
      maxBitrate: 2080
    }), u.set("1080p_2", {
      width: 1920,
      height: 1080,
      frameRate: 30,
      maxBitrate: 3e3
    }), u.set("1080p_3", {
      width: 1920,
      height: 1080,
      frameRate: 30,
      maxBitrate: 3150
    }), u.set("1080p_5", {
      width: 1920,
      height: 1080,
      frameRate: 60,
      maxBitrate: 4780
    }), u.set("1440p_1", {
      width: 2560,
      height: 1440,
      frameRate: 30,
      maxBitrate: 4850
    }), u.set("1440p_2", {
      width: 2560,
      height: 1440,
      frameRate: 60,
      maxBitrate: 7350
    }), u.set("4K_1", {
      width: 3840,
      height: 2160,
      frameRate: 30,
      maxBitrate: 8910
    }), u.set("4K_3", {
      width: 3840,
      height: 2160,
      frameRate: 60,
      maxBitrate: 13500
    });

    var f = function (e) {
      function t() {
        var t = e.call(this) || this;
        return t.deviceManager = new a.BrowserDeviceManager(), t.mediastream = new MediaStream(), t.hasVideo = !1, t.hasScreen = !1, t.videoProfile = "360p_1", t.screenProfile = "720p_1", t;
      }

      return i(t, e), Object.defineProperty(t.prototype, "mediaStream", {
        get: function get() {
          return this.mediastream;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "audioTrack", {
        get: function get() {
          return this.audiotrack;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "videoTrack", {
        get: function get() {
          return this.videotrack;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.init = function (e) {
        var t = this;
        return new Promise(function (r, n) {
          if (e.audio) {
            var i = {
              deviceId: !0 === e.audio ? "" : String(e.audio.deviceId)
            };

            if (t.deviceManager.getAudioTrack(i).then(function (n) {
              t.audiotrack = n, t.hasVideoTrackReady(e) && (t.videotrack && t.mediastream.addTrack(t.videotrack), t.mediastream.addTrack(t.audiotrack), t.addTrackListener(), r());
            })["catch"](function (e) {
              t.videoTrack && (t.videoTrack.stop(), t.videotrack = void 0), n(new s.RtsError(e.code, e.reason, ""));
            }), e.video) {
              var o = {};
              !0 === e.video ? o.deviceId = "" : o = e.video, t.deviceManager.getVideoTrack(o).then(function (n) {
                t.videotrack = n, t.hasAudioTrackReady(e) && (t.audiotrack && t.mediastream.addTrack(t.audiotrack), t.mediastream.addTrack(t.videotrack), t.hasVideo = !0, t.setVideoProfile(t.videoProfile), t.addTrackListener(), r());
              })["catch"](function (e) {
                t.audioTrack && (t.audioTrack.stop(), t.audiotrack = void 0), n(new s.RtsError(e.code, e.reason, ""));
              });
            } else e.screen && t.deviceManager.getScreenTrack({
              video: !0,
              audio: !1
            }).then(function (n) {
              t.videotrack = n.getVideoTracks()[0], t.hasAudioTrackReady(e) && (t.audiotrack && t.mediastream.addTrack(t.audiotrack), t.mediastream.addTrack(t.videotrack), t.hasScreen = !0, t.setScreenProfile(t.screenProfile), t.addTrackListener(), r());
            })["catch"](function (e) {
              t.audioTrack && (t.audioTrack.stop(), t.audiotrack = void 0), n(new s.RtsError(e.code, e.reason, ""));
            });
          } else n(new s.RtsError(c.ErrorCode.ERROR_MEDIASTREAMTRACK_AUDIO_NONE, "need audio track", ""));
        });
      }, t.prototype.setEncodeParam = function (e) {
        var t, r;
        this.pc = e;

        for (var n = this.pc.getSenders(), i = 0; i < n.length; ++i) {
          if ("video" === (null === (t = n[i].track) || void 0 === t ? void 0 : t.kind) && n[i].setParameters) {
            var o = n[i],
                a = void 0;

            if (this.hasVideo ? a = u.get(this.videoProfile) : this.hasScreen && (a = p.get(this.screenProfile)), a && o.getParameters) {
              var s = o.getParameters();
              s.degradationPreference = "maintain-resolution";
              var c = null === (r = o.track) || void 0 === r ? void 0 : r.getSettings();
              if (s && s.encodings.length) for (var f = 0; f < s.encodings.length; ++f) {
                s.encodings[f].maxBitrate = 1024 * a.maxBitrate, d.BrowserUtil.isSafari && c && (s.encodings[f].maxFramerate = c.frameRate);
              }
              o.setParameters(s).then(function (e) {})["catch"](function (e) {});
            }
          }
        }
      }, t.prototype.play = function (e) {
        var t;
        null === (t = this.reporter) || void 0 === t || t.reportPlay(e ? e.nodeName : String(e)), e && (this.element = e, this.mediastream && (this.element.srcObject = this.mediastream, this.element.play()));
      }, t.prototype.setVideoProfile = function (e) {
        var t,
            r = this;
        null === (t = this.reporter) || void 0 === t || t.reportVideoProfile(e);
        var n = u.get(e);
        n && (this.hasVideo && this.videotrack && this.videotrack.applyConstraints ? this.videotrack.applyConstraints(n).then(function () {
          r.videoProfile = e, r.pc && r.setEncodeParam(r.pc);
        })["catch"](function (e) {
          console.log("set screen profile fail");
        }) : this.videoProfile = e);
      }, t.prototype.setScreenProfile = function (e) {
        var t,
            r = this;
        null === (t = this.reporter) || void 0 === t || t.reportScreenProfile(e);
        var n = p.get(e);
        n && (this.hasScreen && this.videotrack && this.videotrack.applyConstraints ? this.videotrack.applyConstraints(n).then(function () {
          r.screenProfile = e, r.pc && r.setEncodeParam(r.pc);
        })["catch"](function (e) {
          console.log("set screen profile fail");
        }) : this.screenProfile = e);
      }, t.prototype.enableAudio = function () {
        var e;
        return null === (e = this.reporter) || void 0 === e || e.reportEnableAudio(), !!this.audiotrack && (this.audiotrack.enabled = !0, !0);
      }, t.prototype.disableAudio = function () {
        var e;
        return null === (e = this.reporter) || void 0 === e || e.reportDisableAudio(), !!this.audiotrack && (this.audiotrack.enabled = !1, !0);
      }, t.prototype.enableVideo = function () {
        var e;
        return null === (e = this.reporter) || void 0 === e || e.reportEnableVideo(), !!this.videotrack && (this.videotrack.enabled = !0, !0);
      }, t.prototype.disableVideo = function () {
        var e;
        return null === (e = this.reporter) || void 0 === e || e.reportDisableVideo(), !!this.videotrack && (this.videotrack.enabled = !1, !0);
      }, t.prototype.stop = function () {
        var t;
        e.prototype.stop.call(this), this.hasVideo = !1, this.hasScreen = !1, this.audiotrack && (this.audiotrack.stop(), this.audiotrack = void 0), this.videotrack && (this.videotrack.stop(), this.videotrack = void 0), null === (t = this.reporter) || void 0 === t || t.reportStop(0);
      }, t.prototype.releaseMediaStream = function () {
        var e = this;
        this.mediastream.getTracks().forEach(function (t) {
          t.stop(), e.mediastream.removeTrack(t);
        });
      }, t.prototype.hasVideoTrackReady = function (e) {
        return !(!e.video && !e.screen || !this.videotrack) || !e.video && !e.screen;
      }, t.prototype.hasAudioTrackReady = function (e) {
        return !!(!e.audio || e.audio && this.audiotrack);
      }, t.prototype.addTrackListener = function () {
        var e = this;
        this.videotrack && this.videotrack.addEventListener("ended", function () {
          e.hasScreen = !1, e.hasVideo = !1, e.emit("videoTrackEnded");
        }), this.audiotrack && this.audiotrack.addEventListener("ended", function () {
          e.emit("audioTrackEnded");
        });
      }, t;
    }(o.Stream);

    t.LocalStream = f;
  }, function (e, t, r) {
    "use strict";

    var _n11,
        i = this && this.__extends || (_n11 = function n(e, t) {
      return (_n11 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var r in t) {
          t.hasOwnProperty(r) && (e[r] = t[r]);
        }
      })(e, t);
    }, function (e, t) {
      function r() {
        this.constructor = e;
      }

      _n11(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    }),
        o = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = o(r(1)),
        s = r(26),
        c = r(51),
        d = o(r(52)),
        p = o(r(6)),
        u = r(53),
        f = function (e) {
      function t(t) {
        var r = e.call(this) || this;
        return r.reporter = new d["default"](t), r.subscriber = new s.Subscriber(r.reporter, t ? t.playConfig : void 0), r.publisher = new c.Publisher(r.reporter), r.subscriber.on("onError", function (e) {
          r.reporter.reportErrorInfo(e.errorCode), r.emit("onError", e);
        }), r.subscriber.on("onPlayEvent", function (e) {
          r.emit("onPlayEvent", e);
        }), r.reporter.reportCreateClient(), r;
      }

      return i(t, e), t.prototype.getVersion = function () {
        return p["default"].version;
      }, t.prototype.isSupport = function (e) {
        return new u.SupportUtil().isSupport(e);
      }, t.prototype.subscribe = function (e) {
        return this.subscriber.subscribe(e);
      }, t.prototype.unsubscribe = function () {
        this.subscriber.unsubscribe();
      }, t.prototype.startLiveStream = function (e, t) {
        return this.reporter.reportStartPlay(e), this.subscriber.startLiveStream(e, t);
      }, t.prototype.stopLiveStream = function () {
        this.reporter.reportStopPlay(), this.subscriber.stopLiveStream();
      }, t.prototype.muteLiveStream = function (e) {
        this.subscriber.muteLiveStream(e);
      }, t.prototype.publish = function (e, t) {
        return this.publisher.publish(e, t);
      }, t.prototype.unpublish = function () {
        return this.publisher.unpublish();
      }, t;
    }(a["default"]);

    t.RtsClient = f;
  }, function (e, t, r) {
    "use strict";

    var _n12,
        i = this && this.__extends || (_n12 = function n(e, t) {
      return (_n12 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var r in t) {
          t.hasOwnProperty(r) && (e[r] = t[r]);
        }
      })(e, t);
    }, function (e, t) {
      function r() {
        this.constructor = e;
      }

      _n12(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    }),
        o = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a,
        s = r(9),
        c = r(3),
        d = o(r(12)),
        p = o(r(1)),
        u = r(5),
        f = o(r(6)),
        l = r(49),
        h = r(50);
    !function (e) {
      e[e.Init = 0] = "Init", e[e.Requesting = 1] = "Requesting", e[e.Playing = 2] = "Playing", e[e.Waiting = 3] = "Waiting";
    }(a || (a = {}));

    var m = function (e) {
      function t(t, r) {
        var n = e.call(this) || this;
        return n.playTimeIndex = 0, n.playCatonIndex = 0, n.state = a.Init, n.subscribeAudio = !0, n.subscribeVideo = !0, n.signalingUrl = "", n.pullStreamUrl = "", n.noParsePullStreamUrl = "", n.reporter = t, n.playTimer = 0, n.config = r || {
          playTimeOut: 5e3
        }, n.remoteStream = new h.Remotestream(), n.remoteStream.on("onAutoPlayError", function () {
          n.emit("onError", new u.RtsError(c.ErrorCode.ERROR_AUTOPLAY_ERROR, "auto play failed", ""));
        }), n.remoteStream.on("onCanPlay", function () {
          n.stopPlayTimer(), n.peerconnection.playStart(), n.reporter.reportFirstFrameTime(n.noParsePullStreamUrl, n.remoteStream.traceId, n._cpend - n._cpstart, n._hrend - n._cpend, new Date().getTime() - n._cpstart, 0), n.emit("onPlayEvent", new l.PlayEvent(l.PlayType.PLAY_CANPLAY));
        }), n.peerconnection = new s.RtsPeerconnection(), n.peerconnection.on("streamEnded", function () {
          n.emit("onPlayEvent", new l.PlayEvent(l.PlayType.PLAY_ENDED));
        }), n.peerconnection.on("onTrackEvent", function (e) {
          e.streams && e.streams.length && (n.remoteStream.mediaStream = e.streams[0], n.onTrackFunction && n.onTrackFunction());
        }), n.peerconnection.on("onMonitorEvent", function (e) {
          a.Requesting === n.state ? e.video ? e.video.framesDecodedPerSecond > 5 && (n.state = a.Playing) : e.audio && e.audio.bytesReceivedPerSecond > 0 && (n.state = a.Playing) : n.state !== a.Playing && n.state !== a.Waiting || (++n.playTimeIndex, e.video && (e.video.framesDecodedPerSecond <= 5 ? (++n.playCatonIndex, a.Waiting !== n.state && (n.state = a.Waiting, n.emit("onPlayEvent", new l.PlayEvent(l.PlayType.PLAY_WAITING)))) : a.Waiting === n.state && (n.state = a.Playing, n.emit("onPlayEvent", new l.PlayEvent(l.PlayType.PLAY_PLAYING)))), 30 === n.playTimeIndex && (n.reporter.reportCatonTime(1e3 * n.playCatonIndex, 1e3 * n.playTimeIndex), n.playTimeIndex = 0, n.playCatonIndex = 0));
          var t = new l.PlayEvent(l.PlayType.PLAY_MEDIA);
          t.data = {}, e.audio && (t.data.audio = {
            bytesReceivedPerSecond: e.audio.bytesReceivedPerSecond,
            rtt: e.audio.rtt
          }), e.video && (t.data.video = {
            bytesReceivedPerSecond: e.video.bytesReceivedPerSecond,
            fps: e.video.fps,
            framesDecodedPerSecond: e.video.framesDecodedPerSecond,
            rtt: e.video.rtt,
            width: e.video.width,
            height: e.video.height
          }, n.emit("onPlayEvent", t)), (t.data.audio || t.data.video) && n.emit("onPlayEvent", t);
        }), n.peerconnection.on("canPlay", function () {
          n.remoteStream.onCanPlay();
        }), n.playTimer = 0, n._cpstart = 0, n._cpend = 0, n._hrend = 0, n;
      }

      return i(t, e), t.prototype.subscribe = function (e) {
        var t = this;
        return new Promise(function (r, n) {
          t.unsubscribe(), t.state = a.Requesting, t.noParsePullStreamUrl = e, t.parseUrl(e), t.pullStreamUrl ? t.subscribeAudio || t.subscribeVideo ? (t._cpstart = new Date().getTime(), t.peerconnection.createOffer(t.subscribeAudio, t.subscribeVideo).then(function (e) {
            t._cpend = new Date().getTime(), t.excuteSignal(e).then(function (e) {
              t.remoteStream.traceId = e, t._hrend = new Date().getTime(), r(t.remoteStream);
            })["catch"](function (e) {
              t._hrend = new Date().getTime(), t.reporter.reportFirstFrameTime(t.noParsePullStreamUrl, e ? e.traceid : "", t._cpend - t._cpstart, t._hrend - t._cpend, -1, -1), n(new u.RtsError(e.errorCode ? e.errorCode : c.ErrorCode.ERROR_HTTPREQUEST_ERROR, e.message, ""));
            });
          })["catch"](function (e) {
            t._cpend = new Date().getTime(), t.reporter.reportFirstFrameTime(t.noParsePullStreamUrl, "", t._cpend - t._cpstart, -1, -1, -1), n(new u.RtsError(c.ErrorCode.ERROR_CREATEOFFER, e.message, ""));
          })) : n(new u.RtsError(c.ErrorCode.ERROR_SUBSCRIBE_NOTHING, "subscribe nothing", "")) : n(new u.RtsError(c.ErrorCode.ERROR_PLAY_URL, "url need artc://", ""));
        });
      }, t.prototype.unsubscribe = function () {
        this.stopPlayTimer(), this.peerconnection.dispose(), this.remoteStream.stop(), this.subscribeVideo = !0, this.subscribeAudio = !0, this.state = a.Init, this.signalingUrl = "", this.pullStreamUrl = "", this.noParsePullStreamUrl = "", this.onTrackFunction = void 0, this.reporter.updateTid();
      }, t.prototype.startLiveStream = function (e, t) {
        var r = this;
        return new Promise(function (n, i) {
          r.unsubscribe(), r.state = a.Requesting, r.noParsePullStreamUrl = e, r.parseUrl(e), "" === r.pullStreamUrl ? i(new u.RtsError(c.ErrorCode.ERROR_PLAY_URL, "url need artc://", "")) : r.subscribeAudio || r.subscribeVideo ? !t || "AUDIO" !== t.nodeName && "VIDEO" !== t.nodeName ? i(new u.RtsError(c.ErrorCode.ERROR_HTMLELEMENT_ERROR, "need htmlaudioelement or htmlvideoelement", "")) : (r.subscribeAudio && r.subscribeVideo ? "VIDEO" !== t.nodeName && r.emit("onError", new u.RtsError(c.ErrorCode.ERROR_HEMLELEMENT_NOTMATCH, "need htmlvideoelement", "")) : r.subscribeAudio ? "AUDIO" !== t.nodeName && r.emit("onError", new u.RtsError(c.ErrorCode.ERROR_HEMLELEMENT_NOTMATCH, "need htmlaudioelement", "")) : "VIDEO" !== t.nodeName && r.emit("onError", new u.RtsError(c.ErrorCode.ERROR_HEMLELEMENT_NOTMATCH, "need htmlvieoelement", "")), r._cpstart = new Date().getTime(), r.reporter.updateTid(), r.peerconnection.createOffer(r.subscribeAudio, r.subscribeVideo).then(function (e) {
            r._cpend = new Date().getTime(), r.excuteSignal(e).then(function (e) {
              r.remoteStream.traceId = e, r._hrend = new Date().getTime(), r.remoteStream.play(t), n(e);
            })["catch"](function (e) {
              r._hrend = new Date().getTime(), r.reporter.reportFirstFrameTime(r.noParsePullStreamUrl, e ? e.traceid : "", r._cpend - r._cpstart, r._hrend - r._cpend, -1, -1), i(new u.RtsError(e.errorCode ? e.errorCode : c.ErrorCode.ERROR_HTTPREQUEST_ERROR, e.message, ""));
            });
          })["catch"](function (e) {
            r._cpend = new Date().getTime(), r.reporter.reportFirstFrameTime(r.noParsePullStreamUrl, e ? e.traceid : "", r._cpend - r._cpstart, -1, -1, -1), i(new u.RtsError(c.ErrorCode.ERROR_CREATEOFFER, e.message, ""));
          })) : i(new u.RtsError(c.ErrorCode.ERROR_SUBSCRIBE_NOTHING, "subscribe nothing", ""));
        });
      }, t.prototype.stopLiveStream = function () {
        this.unsubscribe();
      }, t.prototype.muteLiveStream = function (e) {
        return this.remoteStream.muted = e, !0;
      }, t.prototype.excuteSignal = function (e) {
        var t = this;
        return new Promise(function (r, n) {
          var i = {
            url: t.pullStreamUrl,
            amsid: ["rts audio"],
            vmsid: ["rts video"]
          };
          t.subscribeAudio || delete i.amsid, t.subscribeVideo || delete i.vmsid, d["default"].create({
            baseURL: "",
            timeout: t.config.playTimeOut,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
          }).post(t.signalingUrl, {
            version: f["default"].protocol_version,
            sdk_version: f["default"].sdk_version,
            mode: "live",
            pull_streams: [i],
            jsep: e
          }).then(function (e) {
            e && 200 === e.status ? t.peerconnection.recvAnswer(e.data).then(function () {
              r(e.data.trace_id);
            })["catch"](function (t) {
              t.traceid = e.data ? e.data.trace_id : "", n({
                errorCode: c.ErrorCode.ERROR_ANSWER_ERROR,
                message: "set answer error"
              });
            }) : n({
              errorCode: c.ErrorCode.ERROR_SIGNAL_ERROR,
              message: e ? "response status:" + e.status : "response is null"
            });
          })["catch"](function (e) {
            n(e);
          });
        });
      }, t.prototype.parseUrl = function (e) {
        if (0 === e.indexOf("artc://")) {
          var t = e.indexOf("@");

          if (t > -1) {
            var r = e.substring(t + 1, e.length);
            this.pullStreamUrl = e.substring(0, t);

            for (var n = r.split("&"), i = 0; i < n.length; ++i) {
              "subaudio=no" === n[i] && (this.subscribeAudio = !1), "subvideo=no" === n[i] && (this.subscribeVideo = !1);
            }
          } else this.pullStreamUrl = e;

          var o = window.location.href.indexOf("file://") > -1 ? "http://" : "//";
          this.signalingUrl = this.pullStreamUrl.replace("artc://", o);
        }
      }, t.prototype.startPlayTimer = function () {
        var e = this;
        this.stopPlayTimer(), this.playTimer = window.setTimeout(function () {
          e.playTimer = 0, e.reporter.reportFirstFrameTime(e.noParsePullStreamUrl, e.remoteStream.traceId, e._cpend - e._cpstart, e._hrend - e._cpend, new Date().getTime() - e._cpstart, -1), e.emit("onError", new u.RtsError(c.ErrorCode.ERROR_PLAY_FAILED, "play failed", e.remoteStream.traceId));
        }, this.config.playTimeOut);
      }, t.prototype.stopPlayTimer = function () {
        this.playTimer && clearTimeout(this.playTimer), this.playTimer = 0;
      }, t;
    }(p["default"]);

    t.Subscriber = m;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = r(4),
        i = function i() {
      this.stramId = "", this.audioTrackId = "", this.videoTrackId = "", this.screenTrackId = "", this.customTrackId = "";
    },
        o = function () {
      function e(e) {
        this.sdpLines = new Array(), this.localStream = e, this.publishStreamInfo = new i();
      }

      return Object.defineProperty(e.prototype, "sdp", {
        get: function get() {
          return this.sdpLines.join("\r\n");
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "videoTrackId", {
        get: function get() {
          return this.publishStreamInfo.videoTrackId;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "screenTrackId", {
        get: function get() {
          return this.publishStreamInfo.videoTrackId;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "videoName", {
        get: function get() {
          return "rts video";
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "screenName", {
        get: function get() {
          return "rts screen";
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.init = function (e) {
        this.sdpLines = e.split("\r\n");
      }, e.prototype.addNack = function () {
        for (var e = 0; e < this.sdpLines.length; ++e) {
          if (-1 != this.sdpLines[e].indexOf("opus") && -1 != this.sdpLines[e + 1].indexOf("rtcp-fb")) {
            var t = this.sdpLines[e + 1].split(" ");
            2 == t.length && (-1 != this.sdpLines[e + 2].indexOf("rtcp-fb") ? this.sdpLines.splice(e + 3, 0, t[0] + " nack") : this.sdpLines.splice(e + 2, 0, t[0] + " nack"));
          }
        }
      }, e.prototype.modifyTrackName = function () {
        if (this.localStream) {
          this.publishStreamInfo.stramId = this.localStream.mediaStream.id, this.localStream.audioTrack && (this.publishStreamInfo.audioTrackId = this.localStream.audioTrack.id), this.localStream.videoTrack && (this.publishStreamInfo.videoTrackId = this.localStream.videoTrack.id), console.log("stramid:", this.publishStreamInfo.stramId), console.log("audiotrackid:", this.publishStreamInfo.audioTrackId), console.log("videotrackid:", this.publishStreamInfo.videoTrackId), console.log("offer:", this.sdpLines);

          for (var e = !1, t = !1, r = 0; r < this.sdpLines.length; ++r) {
            var i = this.sdpLines[r],
                o = i.indexOf(this.publishStreamInfo.stramId);
            this.publishStreamInfo.stramId && -1 != o && (this.sdpLines[r] = this.sdpLines[r].replace(this.publishStreamInfo.stramId, "rts"), n.BrowserUtil.isFirefox && (e ? this.sdpLines[r] = this.sdpLines[r].substring(0, o + 4) + "audio" : t && (this.sdpLines[r] = this.sdpLines[r].substring(0, o + 4) + "video"))), this.publishStreamInfo.audioTrackId && -1 != i.indexOf(this.publishStreamInfo.audioTrackId) ? this.sdpLines[r] = this.sdpLines[r].replace(this.publishStreamInfo.audioTrackId, "audio") : this.publishStreamInfo.videoTrackId && -1 != i.indexOf(this.publishStreamInfo.videoTrackId) && (this.sdpLines[r] = this.sdpLines[r].replace(this.publishStreamInfo.videoTrackId, "video")), -1 != i.indexOf("m=audio") ? (e = !0, t = !1) : -1 != i.indexOf("m=video") && (t = !0, e = !1), -1 != i.indexOf("a=ssrc") && -1 !== (o = i.indexOf("cname:")) && (e ? this.sdpLines[r] = i.substr(0, o + 6) + "audio" : t && (this.sdpLines[r] = i.substr(0, o + 6) + "video"));
          }
        }
      }, e.prototype.getPublishVideoSdp = function () {
        for (var e = -1, t = -1, r = !1, n = 0; n < this.sdpLines.length; ++n) {
          if (r && this.sdpLines[n].indexOf("m=application") > -1) {
            t = n - 1;
            break;
          }

          if (this.sdpLines[n].indexOf("m=video") > -1) {
            if (r) {
              t = n - 1;
              break;
            }

            e = n;
          }

          this.sdpLines[n].indexOf("rts video") > -1 && (r = !0);
        }

        return r ? (-1 === t && (t = this.sdpLines.length - 1), this.sdpLines.splice(e, t - e).join("\r\n")) : "";
      }, e.prototype.removeVideoTrack = function (e) {
        for (var t = "rts " + e, r = -1, n = -1, i = !1, o = 0; o < this.sdpLines.length; ++o) {
          if (i && this.sdpLines[o].indexOf("m=application") > -1) {
            n = o - 1;
            break;
          }

          if (this.sdpLines[o].indexOf("m=video") > -1) {
            if (i) {
              n = o - 1;
              break;
            }

            r = o;
          }

          this.sdpLines[o].indexOf(t) > -1 && (i = !0);
        }

        return !!i && (-1 === n && (n = this.sdpLines.length - 1), this.sdpLines.splice(r, n - r), !0);
      }, e.prototype.dispose = function () {
        this.localStream && (this.localStream = void 0);
      }, e;
    }();

    t.SdpUtil = o;
  }, function (e, t, r) {
    "use strict";

    var _n13,
        i = this && this.__extends || (_n13 = function n(e, t) {
      return (_n13 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var r in t) {
          t.hasOwnProperty(r) && (e[r] = t[r]);
        }
      })(e, t);
    }, function (e, t) {
      function r() {
        this.constructor = e;
      }

      _n13(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    }),
        o = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var a = r(29),
        s = r(30),
        c = function (e) {
      function t() {
        var t = e.call(this) || this;
        return t.canplay = !1, t.pc = null, t.monitorTimerId = null, t.audioReceiverMonitorData = new a.AudioReceiverMonitorData(), t.videoReceiverMonitorData = new s.VideoReceiverMonitorData(), t.initEvent(), t;
      }

      return i(t, e), t.prototype.start = function (e) {
        this.pc = e;

        for (var t = this.pc.getReceivers(), r = 0; r < t.length; ++r) {
          t[r].track && ("audio" === t[r].track.kind ? this.audioReceiverMonitorData.rtpReceiver = t[r] : "video" === t[r].track.kind && (this.videoReceiverMonitorData.rtpReceiver = t[r]));
        }

        this.startMonitorTimer(200);
      }, t.prototype.resetTimer = function (e) {
        this.stopMonitorTimer(), this.startMonitorTimer(e);
      }, t.prototype.stop = function () {
        this.canplay = !1, this.stopMonitorTimer(), this.audioReceiverMonitorData.dispose(), this.videoReceiverMonitorData.dispose();
      }, t.prototype.startMonitorTimer = function (e) {
        var t = this;
        this.monitorTimerId || (this.monitorTimerId = setInterval(function () {
          t.onMonitorTimer();
        }, e));
      }, t.prototype.stopMonitorTimer = function () {
        this.monitorTimerId && clearInterval(this.monitorTimerId), this.monitorTimerId = null;
      }, t.prototype.onMonitorTimer = function () {
        this.audioReceiverMonitorData.getInfo(), this.videoReceiverMonitorData.getInfo();
        var e = {};
        this.audioReceiverMonitorData.isExist && (e.audio = this.audioReceiverMonitorData.monitorData), this.videoReceiverMonitorData.isExist && (e.video = this.videoReceiverMonitorData.monitorData), this.emit("onMonitorEvent", e);
      }, t.prototype.initEvent = function () {
        var e = this;
        this.audioReceiverMonitorData.on("streamEnded", function () {
          e.videoReceiverMonitorData.isStreamEnded && e.emit("streamEnded");
        }), this.audioReceiverMonitorData.on("canPlay", function () {
          e.emitCanPlay();
        }), this.videoReceiverMonitorData.on("streamEnded", function () {
          e.audioReceiverMonitorData.isStreamEnded && e.emit("streamEnded");
        }), this.videoReceiverMonitorData.on("canPlay", function () {
          e.emitCanPlay();
        });
      }, t.prototype.emitCanPlay = function () {
        this.canplay || (this.canplay = !0, this.emit("canPlay"));
      }, t;
    }(o(r(1))["default"]);

    t.RtpMonitor = c;
  }, function (e, t, r) {
    "use strict";

    var _n14,
        i = this && this.__extends || (_n14 = function n(e, t) {
      return (_n14 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var r in t) {
          t.hasOwnProperty(r) && (e[r] = t[r]);
        }
      })(e, t);
    }, function (e, t) {
      function r() {
        this.constructor = e;
      }

      _n14(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    });

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var o = r(10),
        a = r(11),
        s = function (e) {
      function t() {
        return e.call(this) || this;
      }

      return i(t, e), Object.defineProperty(t.prototype, "monitorData", {
        get: function get() {
          return {
            rtt: this.rtt,
            bytesReceivedPerSecond: this.bytesReceivedPerSecond,
            packetReceivedGap: this.packetReceivedGap
          };
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.getInfo = function () {
        var t = this;
        e.prototype.getInfo.call(this), this.receiver && this.receiver.getStats && this.receiver.getStats().then(function (e) {
          e.forEach(function (e) {
            var r;
            if (e) switch (e.type) {
              case a.RTCStatsType.CandidatePair:
                t.onCandidatePair(e);
                break;

              case a.RTCStatsType.InboundRtp:
                t.onInBoundRtp(e, null === (r = t.receiver) || void 0 === r ? void 0 : r.track);
                break;

              case a.RTCStatsType.RemoteCandidate:
                t.onAudioRemoteCandidate(e);
                break;

              case a.RTCStatsType.Track:
                t.onAudioTrack(e);
            }
          });
        })["catch"](function (e) {});
      }, t.prototype.onInBoundRtp = function (t, r) {
        e.prototype.onInBoundRtp.call(this, t, r);
      }, t.prototype.onAudioRemoteCandidate = function (e) {}, t.prototype.onAudioTrack = function (e) {}, t;
    }(o.ReceiverMonitorData);

    t.AudioReceiverMonitorData = s;
  }, function (e, t, r) {
    "use strict";

    var _n15,
        i = this && this.__extends || (_n15 = function n(e, t) {
      return (_n15 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var r in t) {
          t.hasOwnProperty(r) && (e[r] = t[r]);
        }
      })(e, t);
    }, function (e, t) {
      function r() {
        this.constructor = e;
      }

      _n15(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    });

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var o = r(10),
        a = r(11),
        s = function (e) {
      function t() {
        var t = e.call(this) || this;
        return t.framesDecoded = 0, t.framesDecodedPerSecond = 0, t.width = 0, t.height = 0, t.fps = 0, t;
      }

      return i(t, e), Object.defineProperty(t.prototype, "monitorData", {
        get: function get() {
          return {
            rtt: this.rtt,
            bytesReceivedPerSecond: this.bytesReceivedPerSecond,
            framesDecodedPerSecond: this.framesDecodedPerSecond,
            packetReceivedGap: this.packetReceivedGap,
            width: this.width,
            height: this.height,
            fps: this.fps
          };
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.getInfo = function () {
        var t = this;
        e.prototype.getInfo.call(this), this.receiver && this.receiver.getStats && this.receiver.getStats().then(function (e) {
          e.forEach(function (e) {
            var r;
            if (e) switch (e.type) {
              case a.RTCStatsType.CandidatePair:
                t.onCandidatePair(e);
                break;

              case a.RTCStatsType.InboundRtp:
                t.onInBoundRtp(e, null === (r = t.receiver) || void 0 === r ? void 0 : r.track);
                break;

              case a.RTCStatsType.RemoteCandidate:
                t.onVideoRemoteCandidate(e);
                break;

              case a.RTCStatsType.Track:
                t.onVideoTrack(e);
            }
          });
        })["catch"](function (e) {});
      }, t.prototype.reset = function () {
        e.prototype.reset.call(this), this.framesDecoded = 0, this.framesDecodedPerSecond = 0, this.width = 0, this.height = 0, this.fps = 0;
      }, t.prototype.onInBoundRtp = function (t, r) {
        e.prototype.onInBoundRtp.call(this, t, r);
        var n = t.framesDecoded ? t.framesDecoded : 0;

        if (this.framesDecoded && (this.framesDecodedPerSecond = Math.round((n - this.framesDecoded) / this.currentTimeGap)), this.framesDecoded = n, r) {
          var i = r.getSettings();
          i && (this.width = i.width ? i.width : 0, this.height = i.height ? i.height : 0, i.frameRate ? this.fps = Math.round(i.frameRate ? i.frameRate : 0) : this.fps = this.framesDecodedPerSecond);
        }
      }, t.prototype.onVideoTrack = function (e) {}, t.prototype.onVideoRemoteCandidate = function (e) {}, t;
    }(o.ReceiverMonitorData);

    t.VideoReceiverMonitorData = s;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function () {
      function e(e) {
        this.pc = e, this.messageId = 1, this.dataChannel = this.pc.createDataChannel("GRTNDataChannel"), this.dataChannel.onopen = function (e) {
          console.log("dataChannel is Open!");
        }, this.dataChannel.onmessage = function (e) {
          e.data ? console.log("datachannel recv:", JSON.parse(e.data)) : console.log("datachannel recv:", e);
        }, this.dataChannel.onclose = function (e) {
          console.log("dataChannel is Close!");
        }, this.dataChannel.onerror = function (e) {
          console.log("dataChannel error:", e);
        };
      }

      return e.prototype.addTrack = function (e, t) {
        return new Promise(function (e, t) {});
      }, e.prototype.removeTrack = function (e, t) {
        return new Promise(function (e, t) {});
      }, e.prototype.createPublishPacket = function () {
        var e = {
          type: "pub",
          version: 1,
          msg_id: this.messageId,
          streams: []
        };
        return ++this.messageId, e;
      }, e;
    }();

    t.Datachannel = n;
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        i = r(13),
        o = r(33),
        a = r(19);

    function s(e) {
      var t = new o(e),
          r = i(o.prototype.request, t);
      return n.extend(r, o.prototype, t), n.extend(r, t), r;
    }

    var c = s(r(16));
    c.Axios = o, c.create = function (e) {
      return s(a(c.defaults, e));
    }, c.Cancel = r(20), c.CancelToken = r(47), c.isCancel = r(15), c.all = function (e) {
      return Promise.all(e);
    }, c.spread = r(48), e.exports = c, e.exports["default"] = c;
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        i = r(14),
        o = r(34),
        a = r(35),
        s = r(19);

    function c(e) {
      this.defaults = e, this.interceptors = {
        request: new o(),
        response: new o()
      };
    }

    c.prototype.request = function (e) {
      "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
      var t = [a, void 0],
          r = Promise.resolve(e);

      for (this.interceptors.request.forEach(function (e) {
        t.unshift(e.fulfilled, e.rejected);
      }), this.interceptors.response.forEach(function (e) {
        t.push(e.fulfilled, e.rejected);
      }); t.length;) {
        r = r.then(t.shift(), t.shift());
      }

      return r;
    }, c.prototype.getUri = function (e) {
      return e = s(this.defaults, e), i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
    }, n.forEach(["delete", "get", "head", "options"], function (e) {
      c.prototype[e] = function (t, r) {
        return this.request(s(r || {}, {
          method: e,
          url: t,
          data: (r || {}).data
        }));
      };
    }), n.forEach(["post", "put", "patch"], function (e) {
      c.prototype[e] = function (t, r, n) {
        return this.request(s(n || {}, {
          method: e,
          url: t,
          data: r
        }));
      };
    }), e.exports = c;
  }, function (e, t, r) {
    "use strict";

    var n = r(0);

    function i() {
      this.handlers = [];
    }

    i.prototype.use = function (e, t) {
      return this.handlers.push({
        fulfilled: e,
        rejected: t
      }), this.handlers.length - 1;
    }, i.prototype.eject = function (e) {
      this.handlers[e] && (this.handlers[e] = null);
    }, i.prototype.forEach = function (e) {
      n.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    }, e.exports = i;
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        i = r(36),
        o = r(15),
        a = r(16);

    function s(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }

    e.exports = function (e) {
      return s(e), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
        delete e.headers[t];
      }), (e.adapter || a.adapter)(e).then(function (t) {
        return s(e), t.data = i(t.data, t.headers, e.transformResponse), t;
      }, function (t) {
        return o(t) || (s(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
      });
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(0);

    e.exports = function (e, t, r) {
      return n.forEach(r, function (r) {
        e = r(e, t);
      }), e;
    };
  }, function (e, t) {
    var r,
        n,
        i = e.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined");
    }

    function a() {
      throw new Error("clearTimeout has not been defined");
    }

    function s(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);

      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }

    !function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        r = o;
      }

      try {
        n = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        n = a;
      }
    }();
    var c,
        d = [],
        p = !1,
        u = -1;

    function f() {
      p && c && (p = !1, c.length ? d = c.concat(d) : u = -1, d.length && l());
    }

    function l() {
      if (!p) {
        var e = s(f);
        p = !0;

        for (var t = d.length; t;) {
          for (c = d, d = []; ++u < t;) {
            c && c[u].run();
          }

          u = -1, t = d.length;
        }

        c = null, p = !1, function (e) {
          if (n === clearTimeout) return clearTimeout(e);
          if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);

          try {
            n(e);
          } catch (t) {
            try {
              return n.call(null, e);
            } catch (t) {
              return n.call(this, e);
            }
          }
        }(e);
      }
    }

    function h(e, t) {
      this.fun = e, this.array = t;
    }

    function m() {}

    i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) {
        t[r - 1] = arguments[r];
      }
      d.push(new h(e, t)), 1 !== d.length || p || s(l);
    }, h.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function (e) {
      return [];
    }, i.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, i.cwd = function () {
      return "/";
    }, i.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, i.umask = function () {
      return 0;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(0);

    e.exports = function (e, t) {
      n.forEach(e, function (r, n) {
        n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n]);
      });
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(18);

    e.exports = function (e, t, r) {
      var i = r.config.validateStatus;
      r.status && i && !i(r.status) ? t(n("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r);
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e, t, r, n, i) {
      return e.config = t, r && (e.code = r), e.request = n, e.response = i, e.isAxiosError = !0, e.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        };
      }, e;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(0);
    e.exports = n.isStandardBrowserEnv() ? {
      write: function write(e, t, r, i, o, a) {
        var s = [];
        s.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), n.isString(i) && s.push("path=" + i), n.isString(o) && s.push("domain=" + o), !0 === a && s.push("secure"), document.cookie = s.join("; ");
      },
      read: function read(e) {
        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove: function remove(e) {
        this.write(e, "", Date.now() - 864e5);
      }
    } : {
      write: function write() {},
      read: function read() {
        return null;
      },
      remove: function remove() {}
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(43),
        i = r(44);

    e.exports = function (e, t) {
      return e && !n(t) ? i(e, t) : t;
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];

    e.exports = function (e) {
      var t,
          r,
          o,
          a = {};
      return e ? (n.forEach(e.split("\n"), function (e) {
        if (o = e.indexOf(":"), t = n.trim(e.substr(0, o)).toLowerCase(), r = n.trim(e.substr(o + 1)), t) {
          if (a[t] && i.indexOf(t) >= 0) return;
          a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([r]) : a[t] ? a[t] + ", " + r : r;
        }
      }), a) : a;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(0);
    e.exports = n.isStandardBrowserEnv() ? function () {
      var e,
          t = /(msie|trident)/i.test(navigator.userAgent),
          r = document.createElement("a");

      function i(e) {
        var n = e;
        return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
          href: r.href,
          protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
          host: r.host,
          search: r.search ? r.search.replace(/^\?/, "") : "",
          hash: r.hash ? r.hash.replace(/^#/, "") : "",
          hostname: r.hostname,
          port: r.port,
          pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
        };
      }

      return e = i(window.location.href), function (t) {
        var r = n.isString(t) ? i(t) : t;
        return r.protocol === e.protocol && r.host === e.host;
      };
    }() : function () {
      return !0;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(20);

    function i(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var r = this;
      e(function (e) {
        r.reason || (r.reason = new n(e), t(r.reason));
      });
    }

    i.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }, i.source = function () {
      var e;
      return {
        token: new i(function (t) {
          e = t;
        }),
        cancel: e
      };
    }, e.exports = i;
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.PlayType = {
      PLAY_CANPLAY: "canplay",
      PLAY_WAITING: "waiting",
      PLAY_PLAYING: "playing",
      PLAY_MEDIA: "media",
      PLAY_ENDED: "ended"
    };

    var n = function n(e) {
      this.event = e;
    };

    t.PlayEvent = n;
  }, function (e, t, r) {
    "use strict";

    var _n16,
        i = this && this.__extends || (_n16 = function n(e, t) {
      return (_n16 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var r in t) {
          t.hasOwnProperty(r) && (e[r] = t[r]);
        }
      })(e, t);
    }, function (e, t) {
      function r() {
        this.constructor = e;
      }

      _n16(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    });

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var o = r(7),
        a = r(4),
        s = function (e) {
      function t() {
        var t = e.call(this) || this;
        return t.recvCanPlay = !1, t.onCanPlay = t.onCanPlay.bind(t), t;
      }

      return i(t, e), Object.defineProperty(t.prototype, "mediaStream", {
        set: function set(e) {
          this.mediastream = e, this.element && this.play(this.element);
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "muted", {
        get: function get() {
          return !!this.element && this.element.muted;
        },
        set: function set(e) {
          this.element && (this.element.muted = e);
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.play = function (e) {
        e ? (this.element = e, this.element.addEventListener("canplay", this.onCanPlay), a.BrowserUtil.isSafari && this.element.setAttribute("autoplay", ""), "VIDEO" === this.element.nodeName && (this.element.setAttribute("playsinline", ""), a.BrowserUtil.isMicroMessenger && (this.element.setAttribute("x5-video-player-type", "h5-page"), this.element.setAttribute("x5-playsinline", ""), a.SystemUtil.isAndroid || a.SystemUtil.isIos && this.element.setAttribute("x-webkit-airplay", "allow"))), this.mediastream && this.playMediaStream(this.mediastream)) : this.release();
      }, t.prototype.stop = function () {
        e.prototype.stop.call(this), this.release();
      }, t.prototype.onCanPlay = function () {
        var e = this;
        this.recvCanPlay || (this.emit("onCanPlay"), this.recvCanPlay = !0, this.element && a.BrowserUtil.isMicroMessenger ? window.WeixinJSBridge ? window.WeixinJSBridge.invoke("getNetworkType", {}, function () {
          e.tryToPlay();
        }) : document.addEventListener("WeixinJSBridgeReady", function () {
          window.WeixinJSBridge.invoke("getNetworkType", {}, function () {
            e.tryToPlay();
          });
        }) : this.tryToPlay());
      }, t.prototype.release = function () {
        this.element && (this.element.srcObject = null, this.element.removeEventListener("canplay", this.onCanPlay)), this.recvCanPlay = !1, this.element = void 0, this.mediastream = void 0;
      }, t.prototype.playMediaStream = function (e) {
        this.element && ("AUDIO" === this.element.nodeName && e.getVideoTracks()[0] && e.removeTrack(e.getVideoTracks()[0]), this.element.srcObject = e), this.mediastream = e;
      }, t.prototype.tryToPlay = function () {
        var e = this;

        if (this.element) {
          var t = this.element.play();
          void 0 !== t && t.then(function () {})["catch"](function (t) {
            e.element && e.element.srcObject && e.emit("onAutoPlayError");
          });
        }
      }, t;
    }(o.Stream);

    t.Remotestream = s;
  }, function (e, t, r) {
    "use strict";

    var n = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = r(9),
        o = n(r(12)),
        a = n(r(6)),
        s = r(3),
        c = r(5),
        d = function () {
      function e(e) {
        this.publishStartTimeStamp = 0, this.reporter = e, this.peerconnection = new i.RtsPeerconnection(), this.signalingUrl = "", this.publishUrl = "";
      }

      return e.prototype.publish = function (e, t) {
        var r = this;
        return new Promise(function (n, i) {
          r.unpublish(), r.publishUrl = e, r.checkPublishUrl() ? null === t.audioTrack ? i(new c.RtsError(s.ErrorCode.ERROR_PUBLISH_NOAUDIO, "publish need audiotrack", "")) : (r.publishStartTimeStamp = new Date().getTime(), t.setReporter(r.reporter), r.peerconnection.createOffer(!0, !0, t).then(function (e) {
            var t = new Date().getTime();
            r.excuteSignal(e).then(function (e) {
              var o = new Date().getTime();
              r.peerconnection.recvAnswer(e.data).then(function () {
                r.reporter.reportStartPublish(r.publishUrl, t - r.publishStartTimeStamp, o - t, new Date().getTime() - o, e.data.trace_id), n(e.data.trace_id);
              })["catch"](function (n) {
                n.traceid = e.data ? e.data.trace_id : "", r.reporter.reportStartPublish(r.publishUrl, t - r.publishStartTimeStamp, o - t, -1, n.traceid), i(new c.RtsError(s.ErrorCode.ERROR_ANSWER_ERROR, n.message ? n.message : "set answer error", n.traceid));
              });
            })["catch"](function (e) {
              r.reporter.reportStartPublish(r.publishUrl, t - r.publishStartTimeStamp, -1, -1, e ? e.traceid : ""), i(new c.RtsError(e.errorCode ? e.errorCode : s.ErrorCode.ERROR_HTTPREQUEST_ERROR, e.message, ""));
            });
          })["catch"](function (e) {
            r.reporter.reportStartPublish(r.publishUrl, -1, -1, -1, ""), i(new c.RtsError(s.ErrorCode.ERROR_CREATEOFFER, e.message, ""));
          })) : i(new c.RtsError(s.ErrorCode.ERROR_PUBLISH_URL, "url need artc://", ""));
        });
      }, e.prototype.unpublish = function () {
        this.peerconnection.dispose(), this.reporter.reportStopPublish(), this.reporter.updateTid(), this.signalingUrl = "", this.publishUrl = "";
      }, e.prototype.replaceTrack = function (e, t) {
        return this.peerconnection.replaceTrack(this.publishUrl, e, t);
      }, e.prototype.excuteSignal = function (e) {
        var t = this;
        return new Promise(function (r, n) {
          o["default"].create({
            baseURL: "",
            timeout: 5e3,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
          }).post(t.signalingUrl, {
            version: a["default"].protocol_version,
            sdk_version: a["default"].sdk_version,
            mode: "rtc",
            push_stream: t.publishUrl,
            jsep: e
          }).then(function (e) {
            e && 200 === e.status ? r(e) : n({
              errorCode: s.ErrorCode.ERROR_SIGNAL_ERROR,
              message: e ? "response status:" + e.status : "response is null"
            });
          })["catch"](function (e) {
            n(e);
          });
        });
      }, e.prototype.checkPublishUrl = function () {
        if (!this.publishUrl) return !1;
        if (0 !== this.publishUrl.indexOf("artc://")) return !1;
        var e = window.location.href.indexOf("file://") > -1 ? "http://" : "//";
        return this.signalingUrl = this.publishUrl.replace("artc://", e), !0;
      }, e;
    }();

    t.Publisher = d;
  }, function (e, t, r) {
    "use strict";

    var n = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = r(4),
        o = n(r(6)),
        a = function () {
      function e(e) {
        this.ct = e && e.customTag ? e.customTag : "", this.enableLog = !e || 0 != e.trackLog, this._initParam(), (i.BrowserUtil.isUnknown || i.SystemUtil.isUnknown) && this.reportUA(navigator ? navigator.userAgent : "no navigator");
      }

      return e.prototype.updateTid = function () {
        this.param ? this.param.tid = i.Guid.create(32) : this._initParam();
      }, e.prototype.reportUA = function (e) {
        this.reporter({
          msgid: 101,
          args: JSON.stringify({
            ua: e
          })
        });
      }, e.prototype.reportCatonTime = function (e, t) {
        this.reporter({
          msgid: 107,
          args: JSON.stringify({
            ct: e,
            tt: t
          })
        });
      }, e.prototype.reportStartPlay = function (e) {
        this.reporter({
          msgid: 120,
          args: JSON.stringify({
            vurl: encodeURIComponent(e)
          })
        });
      }, e.prototype.reportStopPlay = function () {
        this.reporter({
          msgid: 121
        });
      }, e.prototype.reportFirstFrameTime = function (e, t, r, n, i, o) {
        this.reporter({
          msgid: 137,
          args: JSON.stringify({
            vurl: encodeURIComponent(e),
            cpct: r,
            hrct: n,
            tcid: t,
            ffct: i,
            rslt: o
          })
        });
      }, e.prototype.reportErrorInfo = function (e) {
        this.reporter({
          msgid: 150,
          args: JSON.stringify({
            err: e
          })
        });
      }, e.prototype.reportCreateClient = function () {
        this.reporter({
          msgid: 200
        });
      }, e.prototype.reportStartPublish = function (e, t, r, n, i) {
        this.reporter({
          msgid: 220,
          args: JSON.stringify({
            purl: encodeURIComponent(e),
            coct: t,
            hrct: r,
            act: n,
            tcid: i
          })
        });
      }, e.prototype.reportStopPublish = function () {
        this.reporter({
          msgid: 221
        });
      }, e.prototype.reportVideoProfile = function (e) {
        this.reporter({
          msgid: 230,
          args: JSON.stringify({
            vp: e
          })
        });
      }, e.prototype.reportScreenProfile = function (e) {
        this.reporter({
          msgid: 231,
          args: JSON.stringify({
            sp: e
          })
        });
      }, e.prototype.reportEnableAudio = function () {
        this.reporter({
          msgid: 232
        });
      }, e.prototype.reportDisableAudio = function () {
        this.reporter({
          msgid: 233
        });
      }, e.prototype.reportEnableVideo = function () {
        this.reporter({
          msgid: 234
        });
      }, e.prototype.reportDisableVideo = function () {
        this.reporter({
          msgid: 235
        });
      }, e.prototype.reportStop = function (e) {
        this.reporter({
          msgid: 236,
          args: JSON.stringify({
            tp: e
          })
        });
      }, e.prototype.reportPlay = function (e) {
        this.reporter({
          msgid: 237,
          args: JSON.stringify({
            tp: e
          })
        });
      }, e.prototype._initParam = function () {
        this.param || (this.param = {
          APIVersion: "0.6.0",
          os: i.SystemUtil.platform,
          osv: i.SystemUtil.systemVersion,
          bt: i.BrowserUtil.browserName,
          bv: i.BrowserUtil.browserVersion,
          host: window.location.origin,
          uid: i.LocalStorage.uuid,
          tid: i.Guid.create(32),
          ver: o["default"].version,
          ct: this.ct,
          dt: "",
          lv: "1.0.0"
        });
      }, e.prototype.reporter = function (e) {
        if (this.enableLog) {
          var t = Object.assign(this.param, {
            tm: new Date().getTime()
          }, e);
          document.createElement("img").src = "https://videocloud.cn-hangzhou.log.aliyuncs.com/logstores/live-client-log/track?" + this.data2String(t);
        }
      }, e.prototype.data2String = function (e) {
        var t = "";

        for (var r in e) {
          e.hasOwnProperty(r) && (t.length && (t += "&"), t += r + "=" + e[r]);
        }

        return t;
      }, e;
    }();

    t["default"] = a;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = r(4),
        i = r(3),
        o = r(54),
        a = function a() {
      this.errorCode = 0, this.message = "";
    },
        s = function () {
      function e() {}

      return e.prototype.isSupport = function (e) {
        var t = this;
        return new Promise(function (r, n) {
          var s = new a();
          t.checkWebRtcSupport() || (s.errorCode = i.ErrorCode.ERROR_NOTSUPPORT_WEBRTC, s.message = o.EN.MESSAGE_NOTSUPPORT_WEBRTC), t.checkBrowser(s) ? e.isReceiveVideo ? t.checkH264(s).then(function () {
            r(s);
          })["catch"](function () {
            n(s);
          }) : r(s) : n(s);
        });
      }, e.prototype.checkWebRtcSupport = function () {
        return !!window.RTCPeerConnection;
      }, e.prototype.checkBrowser = function (e) {
        if (n.SystemUtil.isIos) {
          if (n.BrowserUtil.isSafari) return n.BrowserUtil.browserMainVersion >= 11 || (e.errorCode = i.ErrorCode.ERROR_BROWSER_VERSIONLOW, e.message = o.EN.MESSAGE_BROWSER_VERSIONLOW, !1);
          if (n.BrowserUtil.isMicroMessenger) return !!n.BrowserUtil.compareVersion("7.0.9") || (e.errorCode = i.ErrorCode.ERROR_BROWSER_VERSIONLOW, e.message = o.EN.MESSAGE_BROWSER_VERSIONLOW, !1);
          if (n.BrowserUtil.isDingTalk) return !!n.SystemUtil.compareVersion("11.2.5") || (e.errorCode = i.ErrorCode.ERROR_BROWSER_VERSIONLOW, e.message = o.EN.MESSAGE_BROWSER_VERSIONLOW, !1);
        } else if (n.SystemUtil.isAndroid) {
          if (n.BrowserUtil.isChrome) return n.BrowserUtil.browserMainVersion >= 63 || (e.errorCode = i.ErrorCode.ERROR_BROWSER_VERSIONLOW, e.message = o.EN.MESSAGE_BROWSER_VERSIONLOW, !1);
          if (n.BrowserUtil.isMicroMessenger) return !!n.BrowserUtil.compareVersion("7.0.9") || (e.errorCode = i.ErrorCode.ERROR_BROWSER_VERSIONLOW, e.message = o.EN.MESSAGE_BROWSER_VERSIONLOW, !1);
          if (n.BrowserUtil.isX5Core) return !0;
        } else if (n.SystemUtil.isMacOS) {
          if (n.BrowserUtil.isElectron) return !0;
          if (n.BrowserUtil.isSafari) return n.BrowserUtil.browserMainVersion >= 11 || (e.errorCode = i.ErrorCode.ERROR_BROWSER_VERSIONLOW, e.message = o.EN.MESSAGE_BROWSER_VERSIONLOW, !1);
          if (n.BrowserUtil.isChrome) return n.BrowserUtil.browserMainVersion >= 63 || (e.errorCode = i.ErrorCode.ERROR_BROWSER_VERSIONLOW, e.message = o.EN.MESSAGE_BROWSER_VERSIONLOW, !1);
          if (n.BrowserUtil.isFirefox) return n.BrowserUtil.browserMainVersion >= 62 || (e.errorCode = i.ErrorCode.ERROR_BROWSER_VERSIONLOW, e.message = o.EN.MESSAGE_BROWSER_VERSIONLOW, !1);
          if (n.BrowserUtil.isOpera) return n.BrowserUtil.browserMainVersion >= 15 || (e.errorCode = i.ErrorCode.ERROR_BROWSER_VERSIONLOW, e.message = o.EN.MESSAGE_BROWSER_VERSIONLOW, !1);
        } else if (n.SystemUtil.isWindows) {
          if (n.BrowserUtil.isElectron) return !0;
          if (n.BrowserUtil.isChrome) return n.BrowserUtil.browserMainVersion >= 63 || (e.errorCode = i.ErrorCode.ERROR_BROWSER_VERSIONLOW, e.message = o.EN.MESSAGE_BROWSER_VERSIONLOW, !1);
          if (n.BrowserUtil.isFirefox) return n.BrowserUtil.browserMainVersion >= 62 || (e.errorCode = i.ErrorCode.ERROR_BROWSER_VERSIONLOW, e.message = o.EN.MESSAGE_BROWSER_VERSIONLOW, !1);
          if (n.BrowserUtil.isOpera) return n.BrowserUtil.browserMainVersion >= 15 || (e.errorCode = i.ErrorCode.ERROR_BROWSER_VERSIONLOW, e.message = o.EN.MESSAGE_BROWSER_VERSIONLOW, !1);
        } else if (n.SystemUtil.isLinux) {
          if (n.BrowserUtil.isChrome) return n.BrowserUtil.browserMainVersion >= 63 || (e.errorCode = i.ErrorCode.ERROR_BROWSER_VERSIONLOW, e.message = o.EN.MESSAGE_BROWSER_VERSIONLOW, !1);
          if (n.BrowserUtil.isFirefox) return n.BrowserUtil.browserMainVersion >= 62 || (e.errorCode = i.ErrorCode.ERROR_BROWSER_VERSIONLOW, e.message = o.EN.MESSAGE_BROWSER_VERSIONLOW, !1);
        }

        return 0 === e.errorCode && (e.errorCode = i.ErrorCode.ERROR_BROWSER_NOTSUPPORT, e.message = o.EN.MESSAGE_BROWSER_NOTSUPPORT), !1;
      }, e.prototype.checkH264 = function (e) {
        var t = this;
        return new Promise(function (r, n) {
          new RTCPeerConnection().createOffer({
            offerToReceiveVideo: !0,
            offerToReceiveAudio: !0
          }).then(function (a) {
            t.checkSDPSupportH264(a.sdp) ? r(void 0) : (e.errorCode = i.ErrorCode.ERROR_NOTSUPPORT_H264, e.message = o.EN.MESSAGE_NOTSUPPORT_H264, n());
          })["catch"](function (t) {
            e.errorCode = i.ErrorCode.ERROR_CREATEOFFER, e.message = o.EN.MESSAGE_CREATEOFFER, n();
          });
        });
      }, e.prototype.checkSDPSupportH264 = function (e) {
        return e.indexOf("H264") > 0 || e.indexOf("h264") > 0 || e.indexOf("H.264") > 0 || e.indexOf("h.264") > 0;
      }, e;
    }();

    t.SupportUtil = s;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.MESSAGE_NOTSUPPORT_WEBRTC = "not support webrtc", e.MESSAGE_BROWSER_NOTSUPPORT = "browser not support", e.MESSAGE_BROWSER_VERSIONLOW = "browser version too low", e.MESSAGE_NOTSUPPORT_H264 = "not support h264", e.MESSAGE_CREATEOFFER = "create offer error";
    }(t.EN || (t.EN = {}));
  }, function (e, t, r) {
    "use strict";

    r.r(t);
    var n = {};
    r.r(n), r.d(n, "shimGetUserMedia", function () {
      return _;
    }), r.d(n, "shimGetDisplayMedia", function () {
      return S;
    }), r.d(n, "shimMediaStream", function () {
      return O;
    }), r.d(n, "shimOnTrack", function () {
      return C;
    }), r.d(n, "shimGetSendersWithDtmf", function () {
      return T;
    }), r.d(n, "shimGetStats", function () {
      return b;
    }), r.d(n, "shimSenderReceiverGetStats", function () {
      return P;
    }), r.d(n, "shimAddTrackRemoveTrackWithNative", function () {
      return w;
    }), r.d(n, "shimAddTrackRemoveTrack", function () {
      return D;
    }), r.d(n, "shimPeerConnection", function () {
      return I;
    }), r.d(n, "fixNegotiationNeeded", function () {
      return N;
    });
    var i = {};
    r.r(i), r.d(i, "shimGetUserMedia", function () {
      return M;
    }), r.d(i, "shimGetDisplayMedia", function () {
      return x;
    }), r.d(i, "shimPeerConnection", function () {
      return L;
    }), r.d(i, "shimReplaceTrack", function () {
      return U;
    });
    var o = {};
    r.r(o), r.d(o, "shimGetUserMedia", function () {
      return V;
    }), r.d(o, "shimGetDisplayMedia", function () {
      return j;
    }), r.d(o, "shimOnTrack", function () {
      return B;
    }), r.d(o, "shimPeerConnection", function () {
      return W;
    }), r.d(o, "shimSenderGetStats", function () {
      return F;
    }), r.d(o, "shimReceiverGetStats", function () {
      return G;
    }), r.d(o, "shimRemoveStream", function () {
      return H;
    }), r.d(o, "shimRTCDataChannel", function () {
      return q;
    }), r.d(o, "shimAddTransceiver", function () {
      return J;
    }), r.d(o, "shimGetParameters", function () {
      return z;
    }), r.d(o, "shimCreateOffer", function () {
      return K;
    }), r.d(o, "shimCreateAnswer", function () {
      return Y;
    });
    var a = {};
    r.r(a), r.d(a, "shimLocalStreamsAPI", function () {
      return Q;
    }), r.d(a, "shimRemoteStreamsAPI", function () {
      return X;
    }), r.d(a, "shimCallbacksAPI", function () {
      return $;
    }), r.d(a, "shimGetUserMedia", function () {
      return Z;
    }), r.d(a, "shimConstraints", function () {
      return ee;
    }), r.d(a, "shimRTCIceServerUrls", function () {
      return te;
    }), r.d(a, "shimTrackEventTransceiver", function () {
      return re;
    }), r.d(a, "shimCreateOfferLegacy", function () {
      return ne;
    }), r.d(a, "shimAudioContext", function () {
      return ie;
    });
    var s = {};
    r.r(s), r.d(s, "shimRTCIceCandidate", function () {
      return se;
    }), r.d(s, "shimMaxMessageSize", function () {
      return ce;
    }), r.d(s, "shimSendThrowTypeError", function () {
      return de;
    }), r.d(s, "shimConnectionState", function () {
      return pe;
    }), r.d(s, "removeAllowExtmapMixed", function () {
      return ue;
    });
    var c = !0,
        d = !0;

    function p(e, t, r) {
      var n = e.match(t);
      return n && n.length >= r && parseInt(n[r], 10);
    }

    function u(e, t, r) {
      if (!e.RTCPeerConnection) return;
      var n = e.RTCPeerConnection.prototype,
          i = n.addEventListener;

      n.addEventListener = function (e, n) {
        if (e !== t) return i.apply(this, arguments);

        var o = function o(e) {
          var t = r(e);
          t && (n.handleEvent ? n.handleEvent(t) : n(t));
        };

        return this._eventMap = this._eventMap || {}, this._eventMap[t] || (this._eventMap[t] = new Map()), this._eventMap[t].set(n, o), i.apply(this, [e, o]);
      };

      var o = n.removeEventListener;
      n.removeEventListener = function (e, r) {
        if (e !== t || !this._eventMap || !this._eventMap[t]) return o.apply(this, arguments);
        if (!this._eventMap[t].has(r)) return o.apply(this, arguments);

        var n = this._eventMap[t].get(r);

        return this._eventMap[t]["delete"](r), 0 === this._eventMap[t].size && delete this._eventMap[t], 0 === Object.keys(this._eventMap).length && delete this._eventMap, o.apply(this, [e, n]);
      }, Object.defineProperty(n, "on" + t, {
        get: function get() {
          return this["_on" + t];
        },
        set: function set(e) {
          this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e);
        },
        enumerable: !0,
        configurable: !0
      });
    }

    function f(e) {
      return "boolean" != typeof e ? new Error("Argument type: " + _typeof(e) + ". Please use a boolean.") : (c = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled");
    }

    function l(e) {
      return "boolean" != typeof e ? new Error("Argument type: " + _typeof(e) + ". Please use a boolean.") : (d = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"));
    }

    function h() {
      if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) {
        if (c) return;
        "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments);
      }
    }

    function m(e, t) {
      d && console.warn(e + " is deprecated, please use " + t + " instead.");
    }

    function R(e) {
      var t = {
        browser: null,
        version: null
      };
      if (void 0 === e || !e.navigator) return t.browser = "Not a browser.", t;
      var r = e.navigator;
      if (r.mozGetUserMedia) t.browser = "firefox", t.version = p(r.userAgent, /Firefox\/(\d+)\./, 1);else if (r.webkitGetUserMedia || !1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer) t.browser = "chrome", t.version = p(r.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);else if (r.mediaDevices && r.userAgent.match(/Edge\/(\d+).(\d+)$/)) t.browser = "edge", t.version = p(r.userAgent, /Edge\/(\d+).(\d+)$/, 2);else {
        if (!e.RTCPeerConnection || !r.userAgent.match(/AppleWebKit\/(\d+)\./)) return t.browser = "Not a supported browser.", t;
        t.browser = "safari", t.version = p(r.userAgent, /AppleWebKit\/(\d+)\./, 1), t.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype;
      }
      return t;
    }

    function E(e) {
      return "[object Object]" === Object.prototype.toString.call(e);
    }

    function v(e) {
      return E(e) ? Object.keys(e).reduce(function (t, r) {
        var n = E(e[r]),
            i = n ? v(e[r]) : e[r],
            o = n && !Object.keys(i).length;
        return void 0 === i || o ? t : Object.assign(t, _defineProperty({}, r, i));
      }, {}) : e;
    }

    function y(e, t, r) {
      var n = r ? "outbound-rtp" : "inbound-rtp",
          i = new Map();
      if (null === t) return i;
      var o = [];
      return e.forEach(function (e) {
        "track" === e.type && e.trackIdentifier === t.id && o.push(e);
      }), o.forEach(function (t) {
        e.forEach(function (r) {
          r.type === n && r.trackId === t.id && function e(t, r, n) {
            r && !n.has(r.id) && (n.set(r.id, r), Object.keys(r).forEach(function (i) {
              i.endsWith("Id") ? e(t, t.get(r[i]), n) : i.endsWith("Ids") && r[i].forEach(function (r) {
                e(t, t.get(r), n);
              });
            }));
          }(e, r, i);
        });
      }), i;
    }

    var g = h;

    function _(e) {
      var t = e && e.navigator;
      if (!t.mediaDevices) return;

      var r = R(e),
          n = function n(e) {
        if ("object" != _typeof(e) || e.mandatory || e.optional) return e;
        var t = {};
        return Object.keys(e).forEach(function (r) {
          if ("require" === r || "advanced" === r || "mediaSource" === r) return;
          var n = "object" == _typeof(e[r]) ? e[r] : {
            ideal: e[r]
          };
          void 0 !== n.exact && "number" == typeof n.exact && (n.min = n.max = n.exact);

          var i = function i(e, t) {
            return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t;
          };

          if (void 0 !== n.ideal) {
            t.optional = t.optional || [];
            var _e = {};
            "number" == typeof n.ideal ? (_e[i("min", r)] = n.ideal, t.optional.push(_e), (_e = {})[i("max", r)] = n.ideal, t.optional.push(_e)) : (_e[i("", r)] = n.ideal, t.optional.push(_e));
          }

          void 0 !== n.exact && "number" != typeof n.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[i("", r)] = n.exact) : ["min", "max"].forEach(function (e) {
            void 0 !== n[e] && (t.mandatory = t.mandatory || {}, t.mandatory[i(e, r)] = n[e]);
          });
        }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t;
      },
          i = function i(e, _i2) {
        if (r.version >= 61) return _i2(e);

        if ((e = JSON.parse(JSON.stringify(e))) && "object" == _typeof(e.audio)) {
          var _t = function _t(e, t, r) {
            t in e && !(r in e) && (e[r] = e[t], delete e[t]);
          };

          _t((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"), _t(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = n(e.audio);
        }

        if (e && "object" == _typeof(e.video)) {
          var _o = e.video.facingMode;
          _o = _o && ("object" == _typeof(_o) ? _o : {
            ideal: _o
          });

          var _a = r.version < 66;

          if (_o && ("user" === _o.exact || "environment" === _o.exact || "user" === _o.ideal || "environment" === _o.ideal) && (!t.mediaDevices.getSupportedConstraints || !t.mediaDevices.getSupportedConstraints().facingMode || _a)) {
            var _r;

            if (delete e.video.facingMode, "environment" === _o.exact || "environment" === _o.ideal ? _r = ["back", "rear"] : "user" !== _o.exact && "user" !== _o.ideal || (_r = ["front"]), _r) return t.mediaDevices.enumerateDevices().then(function (t) {
              var a = (t = t.filter(function (e) {
                return "videoinput" === e.kind;
              })).find(function (e) {
                return _r.some(function (t) {
                  return e.label.toLowerCase().includes(t);
                });
              });
              return !a && t.length && _r.includes("back") && (a = t[t.length - 1]), a && (e.video.deviceId = _o.exact ? {
                exact: a.deviceId
              } : {
                ideal: a.deviceId
              }), e.video = n(e.video), g("chrome: " + JSON.stringify(e)), _i2(e);
            });
          }

          e.video = n(e.video);
        }

        return g("chrome: " + JSON.stringify(e)), _i2(e);
      },
          o = function o(e) {
        return r.version >= 64 ? e : {
          name: {
            PermissionDeniedError: "NotAllowedError",
            PermissionDismissedError: "NotAllowedError",
            InvalidStateError: "NotAllowedError",
            DevicesNotFoundError: "NotFoundError",
            ConstraintNotSatisfiedError: "OverconstrainedError",
            TrackStartError: "NotReadableError",
            MediaDeviceFailedDueToShutdown: "NotAllowedError",
            MediaDeviceKillSwitchOn: "NotAllowedError",
            TabCaptureError: "AbortError",
            ScreenCaptureError: "AbortError",
            DeviceCaptureError: "AbortError"
          }[e.name] || e.name,
          message: e.message,
          constraint: e.constraint || e.constraintName,
          toString: function toString() {
            return this.name + (this.message && ": ") + this.message;
          }
        };
      };

      if (t.getUserMedia = function (e, r, n) {
        i(e, function (e) {
          t.webkitGetUserMedia(e, r, function (e) {
            n && n(o(e));
          });
        });
      }.bind(t), t.mediaDevices.getUserMedia) {
        var _e2 = t.mediaDevices.getUserMedia.bind(t.mediaDevices);

        t.mediaDevices.getUserMedia = function (t) {
          return i(t, function (t) {
            return _e2(t).then(function (e) {
              if (t.audio && !e.getAudioTracks().length || t.video && !e.getVideoTracks().length) throw e.getTracks().forEach(function (e) {
                e.stop();
              }), new DOMException("", "NotFoundError");
              return e;
            }, function (e) {
              return Promise.reject(o(e));
            });
          });
        };
      }
    }

    function S(e, t) {
      e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && ("function" == typeof t ? e.navigator.mediaDevices.getDisplayMedia = function (r) {
        return t(r).then(function (t) {
          var n = r.video && r.video.width,
              i = r.video && r.video.height,
              o = r.video && r.video.frameRate;
          return r.video = {
            mandatory: {
              chromeMediaSource: "desktop",
              chromeMediaSourceId: t,
              maxFrameRate: o || 3
            }
          }, n && (r.video.mandatory.maxWidth = n), i && (r.video.mandatory.maxHeight = i), e.navigator.mediaDevices.getUserMedia(r);
        });
      } : console.error("shimGetDisplayMedia: getSourceId argument is not a function"));
    }

    function O(e) {
      e.MediaStream = e.MediaStream || e.webkitMediaStream;
    }

    function C(e) {
      if ("object" != _typeof(e) || !e.RTCPeerConnection || "ontrack" in e.RTCPeerConnection.prototype) u(e, "track", function (e) {
        return e.transceiver || Object.defineProperty(e, "transceiver", {
          value: {
            receiver: e.receiver
          }
        }), e;
      });else {
        Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
          get: function get() {
            return this._ontrack;
          },
          set: function set(e) {
            this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e);
          },
          enumerable: !0,
          configurable: !0
        });
        var _t2 = e.RTCPeerConnection.prototype.setRemoteDescription;

        e.RTCPeerConnection.prototype.setRemoteDescription = function () {
          var _this = this;

          return this._ontrackpoly || (this._ontrackpoly = function (t) {
            t.stream.addEventListener("addtrack", function (r) {
              var n;
              n = e.RTCPeerConnection.prototype.getReceivers ? _this.getReceivers().find(function (e) {
                return e.track && e.track.id === r.track.id;
              }) : {
                track: r.track
              };
              var i = new Event("track");
              i.track = r.track, i.receiver = n, i.transceiver = {
                receiver: n
              }, i.streams = [t.stream], _this.dispatchEvent(i);
            }), t.stream.getTracks().forEach(function (r) {
              var n;
              n = e.RTCPeerConnection.prototype.getReceivers ? _this.getReceivers().find(function (e) {
                return e.track && e.track.id === r.id;
              }) : {
                track: r
              };
              var i = new Event("track");
              i.track = r, i.receiver = n, i.transceiver = {
                receiver: n
              }, i.streams = [t.stream], _this.dispatchEvent(i);
            });
          }, this.addEventListener("addstream", this._ontrackpoly)), _t2.apply(this, arguments);
        };
      }
    }

    function T(e) {
      if ("object" == _typeof(e) && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
        var _t3 = function _t3(e, t) {
          return {
            track: t,

            get dtmf() {
              return void 0 === this._dtmf && ("audio" === t.kind ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf;
            },

            _pc: e
          };
        };

        if (!e.RTCPeerConnection.prototype.getSenders) {
          e.RTCPeerConnection.prototype.getSenders = function () {
            return this._senders = this._senders || [], this._senders.slice();
          };

          var _r3 = e.RTCPeerConnection.prototype.addTrack;

          e.RTCPeerConnection.prototype.addTrack = function (e, n) {
            var i = _r3.apply(this, arguments);

            return i || (i = _t3(this, e), this._senders.push(i)), i;
          };

          var _n18 = e.RTCPeerConnection.prototype.removeTrack;

          e.RTCPeerConnection.prototype.removeTrack = function (e) {
            _n18.apply(this, arguments);

            var t = this._senders.indexOf(e);

            -1 !== t && this._senders.splice(t, 1);
          };
        }

        var _r2 = e.RTCPeerConnection.prototype.addStream;

        e.RTCPeerConnection.prototype.addStream = function (e) {
          var _this2 = this;

          this._senders = this._senders || [], _r2.apply(this, [e]), e.getTracks().forEach(function (e) {
            _this2._senders.push(_t3(_this2, e));
          });
        };

        var _n17 = e.RTCPeerConnection.prototype.removeStream;

        e.RTCPeerConnection.prototype.removeStream = function (e) {
          var _this3 = this;

          this._senders = this._senders || [], _n17.apply(this, [e]), e.getTracks().forEach(function (e) {
            var t = _this3._senders.find(function (t) {
              return t.track === e;
            });

            t && _this3._senders.splice(_this3._senders.indexOf(t), 1);
          });
        };
      } else if ("object" == _typeof(e) && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
        var _t4 = e.RTCPeerConnection.prototype.getSenders;
        e.RTCPeerConnection.prototype.getSenders = function () {
          var _this4 = this;

          var e = _t4.apply(this, []);

          return e.forEach(function (e) {
            return e._pc = _this4;
          }), e;
        }, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
          get: function get() {
            return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
          }
        });
      }
    }

    function b(e) {
      if (!e.RTCPeerConnection) return;
      var t = e.RTCPeerConnection.prototype.getStats;

      e.RTCPeerConnection.prototype.getStats = function () {
        var _this5 = this;

        var _arguments = Array.prototype.slice.call(arguments),
            e = _arguments[0],
            r = _arguments[1],
            n = _arguments[2];

        if (arguments.length > 0 && "function" == typeof e) return t.apply(this, arguments);
        if (0 === t.length && (0 === arguments.length || "function" != typeof e)) return t.apply(this, []);

        var i = function i(e) {
          var t = {};
          return e.result().forEach(function (e) {
            var r = {
              id: e.id,
              timestamp: e.timestamp,
              type: {
                localcandidate: "local-candidate",
                remotecandidate: "remote-candidate"
              }[e.type] || e.type
            };
            e.names().forEach(function (t) {
              r[t] = e.stat(t);
            }), t[r.id] = r;
          }), t;
        },
            o = function o(e) {
          return new Map(Object.keys(e).map(function (t) {
            return [t, e[t]];
          }));
        };

        if (arguments.length >= 2) {
          var _n19 = function _n19(e) {
            r(o(i(e)));
          };

          return t.apply(this, [_n19, e]);
        }

        return new Promise(function (e, r) {
          t.apply(_this5, [function (t) {
            e(o(i(t)));
          }, r]);
        }).then(r, n);
      };
    }

    function P(e) {
      if (!("object" == _typeof(e) && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver)) return;

      if (!("getStats" in e.RTCRtpSender.prototype)) {
        var _t5 = e.RTCPeerConnection.prototype.getSenders;
        _t5 && (e.RTCPeerConnection.prototype.getSenders = function () {
          var _this6 = this;

          var e = _t5.apply(this, []);

          return e.forEach(function (e) {
            return e._pc = _this6;
          }), e;
        });
        var _r4 = e.RTCPeerConnection.prototype.addTrack;
        _r4 && (e.RTCPeerConnection.prototype.addTrack = function () {
          var e = _r4.apply(this, arguments);

          return e._pc = this, e;
        }), e.RTCRtpSender.prototype.getStats = function () {
          var e = this;
          return this._pc.getStats().then(function (t) {
            return y(t, e.track, !0);
          });
        };
      }

      if (!("getStats" in e.RTCRtpReceiver.prototype)) {
        var _t6 = e.RTCPeerConnection.prototype.getReceivers;
        _t6 && (e.RTCPeerConnection.prototype.getReceivers = function () {
          var _this7 = this;

          var e = _t6.apply(this, []);

          return e.forEach(function (e) {
            return e._pc = _this7;
          }), e;
        }), u(e, "track", function (e) {
          return e.receiver._pc = e.srcElement, e;
        }), e.RTCRtpReceiver.prototype.getStats = function () {
          var e = this;
          return this._pc.getStats().then(function (t) {
            return y(t, e.track, !1);
          });
        };
      }

      if (!("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype)) return;
      var t = e.RTCPeerConnection.prototype.getStats;

      e.RTCPeerConnection.prototype.getStats = function () {
        if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
          var _e3 = arguments[0];

          var _t7, _r5, _n20;

          return this.getSenders().forEach(function (r) {
            r.track === _e3 && (_t7 ? _n20 = !0 : _t7 = r);
          }), this.getReceivers().forEach(function (t) {
            return t.track === _e3 && (_r5 ? _n20 = !0 : _r5 = t), t.track === _e3;
          }), _n20 || _t7 && _r5 ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : _t7 ? _t7.getStats() : _r5 ? _r5.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
        }

        return t.apply(this, arguments);
      };
    }

    function w(e) {
      e.RTCPeerConnection.prototype.getLocalStreams = function () {
        var _this8 = this;

        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(function (e) {
          return _this8._shimmedLocalStreams[e][0];
        });
      };

      var t = e.RTCPeerConnection.prototype.addTrack;

      e.RTCPeerConnection.prototype.addTrack = function (e, r) {
        if (!r) return t.apply(this, arguments);
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        var n = t.apply(this, arguments);
        return this._shimmedLocalStreams[r.id] ? -1 === this._shimmedLocalStreams[r.id].indexOf(n) && this._shimmedLocalStreams[r.id].push(n) : this._shimmedLocalStreams[r.id] = [r, n], n;
      };

      var r = e.RTCPeerConnection.prototype.addStream;

      e.RTCPeerConnection.prototype.addStream = function (e) {
        var _this9 = this;

        this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach(function (e) {
          if (_this9.getSenders().find(function (t) {
            return t.track === e;
          })) throw new DOMException("Track already exists.", "InvalidAccessError");
        });
        var t = this.getSenders();
        r.apply(this, arguments);
        var n = this.getSenders().filter(function (e) {
          return -1 === t.indexOf(e);
        });
        this._shimmedLocalStreams[e.id] = [e].concat(n);
      };

      var n = e.RTCPeerConnection.prototype.removeStream;

      e.RTCPeerConnection.prototype.removeStream = function (e) {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], n.apply(this, arguments);
      };

      var i = e.RTCPeerConnection.prototype.removeTrack;

      e.RTCPeerConnection.prototype.removeTrack = function (e) {
        var _this10 = this;

        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e && Object.keys(this._shimmedLocalStreams).forEach(function (t) {
          var r = _this10._shimmedLocalStreams[t].indexOf(e);

          -1 !== r && _this10._shimmedLocalStreams[t].splice(r, 1), 1 === _this10._shimmedLocalStreams[t].length && delete _this10._shimmedLocalStreams[t];
        }), i.apply(this, arguments);
      };
    }

    function D(e) {
      if (!e.RTCPeerConnection) return;
      var t = R(e);
      if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return w(e);
      var r = e.RTCPeerConnection.prototype.getLocalStreams;

      e.RTCPeerConnection.prototype.getLocalStreams = function () {
        var _this11 = this;

        var e = r.apply(this);
        return this._reverseStreams = this._reverseStreams || {}, e.map(function (e) {
          return _this11._reverseStreams[e.id];
        });
      };

      var n = e.RTCPeerConnection.prototype.addStream;

      e.RTCPeerConnection.prototype.addStream = function (t) {
        var _this12 = this;

        if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t.getTracks().forEach(function (e) {
          if (_this12.getSenders().find(function (t) {
            return t.track === e;
          })) throw new DOMException("Track already exists.", "InvalidAccessError");
        }), !this._reverseStreams[t.id]) {
          var _r6 = new e.MediaStream(t.getTracks());

          this._streams[t.id] = _r6, this._reverseStreams[_r6.id] = t, t = _r6;
        }

        n.apply(this, [t]);
      };

      var i = e.RTCPeerConnection.prototype.removeStream;

      function o(e, t) {
        var r = t.sdp;
        return Object.keys(e._reverseStreams || []).forEach(function (t) {
          var n = e._reverseStreams[t],
              i = e._streams[n.id];
          r = r.replace(new RegExp(i.id, "g"), n.id);
        }), new RTCSessionDescription({
          type: t.type,
          sdp: r
        });
      }

      function a(e, t) {
        var r = t.sdp;
        return Object.keys(e._reverseStreams || []).forEach(function (t) {
          var n = e._reverseStreams[t],
              i = e._streams[n.id];
          r = r.replace(new RegExp(n.id, "g"), i.id);
        }), new RTCSessionDescription({
          type: t.type,
          sdp: r
        });
      }

      e.RTCPeerConnection.prototype.removeStream = function (e) {
        this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, i.apply(this, [this._streams[e.id] || e]), delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id], delete this._streams[e.id];
      }, e.RTCPeerConnection.prototype.addTrack = function (t, r) {
        var _this13 = this;

        if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        var n = [].slice.call(arguments, 1);
        if (1 !== n.length || !n[0].getTracks().find(function (e) {
          return e === t;
        })) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
        var i = this.getSenders().find(function (e) {
          return e.track === t;
        });
        if (i) throw new DOMException("Track already exists.", "InvalidAccessError");
        this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
        var o = this._streams[r.id];
        if (o) o.addTrack(t), Promise.resolve().then(function () {
          _this13.dispatchEvent(new Event("negotiationneeded"));
        });else {
          var _n21 = new e.MediaStream([t]);

          this._streams[r.id] = _n21, this._reverseStreams[_n21.id] = r, this.addStream(_n21);
        }
        return this.getSenders().find(function (e) {
          return e.track === t;
        });
      }, ["createOffer", "createAnswer"].forEach(function (t) {
        var r = e.RTCPeerConnection.prototype[t],
            n = _defineProperty({}, t, function () {
          var _this14 = this;

          var e = arguments;
          return arguments.length && "function" == typeof arguments[0] ? r.apply(this, [function (t) {
            var r = o(_this14, t);
            e[0].apply(null, [r]);
          }, function (t) {
            e[1] && e[1].apply(null, t);
          }, arguments[2]]) : r.apply(this, arguments).then(function (e) {
            return o(_this14, e);
          });
        });

        e.RTCPeerConnection.prototype[t] = n[t];
      });
      var s = e.RTCPeerConnection.prototype.setLocalDescription;

      e.RTCPeerConnection.prototype.setLocalDescription = function () {
        return arguments.length && arguments[0].type ? (arguments[0] = a(this, arguments[0]), s.apply(this, arguments)) : s.apply(this, arguments);
      };

      var c = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
      Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
        get: function get() {
          var e = c.get.apply(this);
          return "" === e.type ? e : o(this, e);
        }
      }), e.RTCPeerConnection.prototype.removeTrack = function (e) {
        var _this15 = this;

        if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
        if (!(e._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
        var t;
        this._streams = this._streams || {}, Object.keys(this._streams).forEach(function (r) {
          _this15._streams[r].getTracks().find(function (t) {
            return e.track === t;
          }) && (t = _this15._streams[r]);
        }), t && (1 === t.getTracks().length ? this.removeStream(this._reverseStreams[t.id]) : t.removeTrack(e.track), this.dispatchEvent(new Event("negotiationneeded")));
      };
    }

    function I(e) {
      var t = R(e);
      if (!e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = e.webkitRTCPeerConnection), !e.RTCPeerConnection) return;
      var r = 0 === e.RTCPeerConnection.prototype.addIceCandidate.length;
      t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
        var r = e.RTCPeerConnection.prototype[t],
            n = _defineProperty({}, t, function () {
          return arguments[0] = new ("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), r.apply(this, arguments);
        });

        e.RTCPeerConnection.prototype[t] = n[t];
      });
      var n = e.RTCPeerConnection.prototype.addIceCandidate;

      e.RTCPeerConnection.prototype.addIceCandidate = function () {
        return r || arguments[0] ? t.version < 78 && arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : n.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
      };
    }

    function N(e) {
      var t = R(e);
      u(e, "negotiationneeded", function (e) {
        var r = e.target;
        if (!(t.version < 72 || r.getConfiguration && "plan-b" === r.getConfiguration().sdpSemantics) || "stable" === r.signalingState) return e;
      });
    }

    var k = r(21),
        A = r.n(k);

    function M(e) {
      var t = e && e.navigator,
          r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);

      t.mediaDevices.getUserMedia = function (e) {
        return r(e)["catch"](function (e) {
          return Promise.reject(function (e) {
            return {
              name: {
                PermissionDeniedError: "NotAllowedError"
              }[e.name] || e.name,
              message: e.message,
              constraint: e.constraint,
              toString: function toString() {
                return this.name;
              }
            };
          }(e));
        });
      };
    }

    function x(e) {
      "getDisplayMedia" in e.navigator && e.navigator.mediaDevices && (e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || (e.navigator.mediaDevices.getDisplayMedia = e.navigator.getDisplayMedia.bind(e.navigator)));
    }

    function L(e) {
      var t = R(e);

      if (e.RTCIceGatherer && (e.RTCIceCandidate || (e.RTCIceCandidate = function (e) {
        return e;
      }), e.RTCSessionDescription || (e.RTCSessionDescription = function (e) {
        return e;
      }), t.version < 15025)) {
        var _t8 = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, "enabled");

        Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
          set: function set(e) {
            _t8.set.call(this, e);

            var r = new Event("enabled");
            r.enabled = e, this.dispatchEvent(r);
          }
        });
      }

      !e.RTCRtpSender || "dtmf" in e.RTCRtpSender.prototype || Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
        get: function get() {
          return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new e.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf;
        }
      }), e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender);
      var r = A()(e, t.version);
      e.RTCPeerConnection = function (e) {
        return e && e.iceServers && (e.iceServers = function (e, t) {
          var r = !1;
          return (e = JSON.parse(JSON.stringify(e))).filter(function (e) {
            if (e && (e.urls || e.url)) {
              var _t9 = e.urls || e.url;

              e.url && !e.urls && m("RTCIceServer.url", "RTCIceServer.urls");

              var _n24 = "string" == typeof _t9;

              return _n24 && (_t9 = [_t9]), _t9 = _t9.filter(function (e) {
                if (0 === e.indexOf("stun:")) return !1;
                var t = e.startsWith("turn") && !e.startsWith("turn:[") && e.includes("transport=udp");
                return t && !r ? (r = !0, !0) : t && !r;
              }), delete e.url, e.urls = _n24 ? _t9[0] : _t9, !!_t9.length;
            }
          });
        }(e.iceServers, t.version), h("ICE servers after filtering:", e.iceServers)), new r(e);
      }, e.RTCPeerConnection.prototype = r.prototype;
    }

    function U(e) {
      !e.RTCRtpSender || "replaceTrack" in e.RTCRtpSender.prototype || (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack);
    }

    function V(e) {
      var t = R(e),
          r = e && e.navigator,
          n = e && e.MediaStreamTrack;

      if (r.getUserMedia = function (e, t, n) {
        m("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), r.mediaDevices.getUserMedia(e).then(t, n);
      }, !(t.version > 55 && "autoGainControl" in r.mediaDevices.getSupportedConstraints())) {
        var _e4 = function _e4(e, t, r) {
          t in e && !(r in e) && (e[r] = e[t], delete e[t]);
        },
            _t10 = r.mediaDevices.getUserMedia.bind(r.mediaDevices);

        if (r.mediaDevices.getUserMedia = function (r) {
          return "object" == _typeof(r) && "object" == _typeof(r.audio) && (r = JSON.parse(JSON.stringify(r)), _e4(r.audio, "autoGainControl", "mozAutoGainControl"), _e4(r.audio, "noiseSuppression", "mozNoiseSuppression")), _t10(r);
        }, n && n.prototype.getSettings) {
          var _t11 = n.prototype.getSettings;

          n.prototype.getSettings = function () {
            var r = _t11.apply(this, arguments);

            return _e4(r, "mozAutoGainControl", "autoGainControl"), _e4(r, "mozNoiseSuppression", "noiseSuppression"), r;
          };
        }

        if (n && n.prototype.applyConstraints) {
          var _t12 = n.prototype.applyConstraints;

          n.prototype.applyConstraints = function (r) {
            return "audio" === this.kind && "object" == _typeof(r) && (r = JSON.parse(JSON.stringify(r)), _e4(r, "autoGainControl", "mozAutoGainControl"), _e4(r, "noiseSuppression", "mozNoiseSuppression")), _t12.apply(this, [r]);
          };
        }
      }
    }

    function j(e, t) {
      e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && (e.navigator.mediaDevices.getDisplayMedia = function (r) {
        if (!r || !r.video) {
          var _e5 = new DOMException("getDisplayMedia without video constraints is undefined");

          return _e5.name = "NotFoundError", _e5.code = 8, Promise.reject(_e5);
        }

        return !0 === r.video ? r.video = {
          mediaSource: t
        } : r.video.mediaSource = t, e.navigator.mediaDevices.getUserMedia(r);
      });
    }

    function B(e) {
      "object" == _typeof(e) && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
        get: function get() {
          return {
            receiver: this.receiver
          };
        }
      });
    }

    function W(e) {
      var t = R(e);
      if ("object" != _typeof(e) || !e.RTCPeerConnection && !e.mozRTCPeerConnection) return;

      if (!e.RTCPeerConnection && e.mozRTCPeerConnection && (e.RTCPeerConnection = e.mozRTCPeerConnection), t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
        var r = e.RTCPeerConnection.prototype[t],
            n = _defineProperty({}, t, function () {
          return arguments[0] = new ("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), r.apply(this, arguments);
        });

        e.RTCPeerConnection.prototype[t] = n[t];
      }), t.version < 68) {
        var _t13 = e.RTCPeerConnection.prototype.addIceCandidate;

        e.RTCPeerConnection.prototype.addIceCandidate = function () {
          return arguments[0] ? arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : _t13.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
        };
      }

      var r = {
        inboundrtp: "inbound-rtp",
        outboundrtp: "outbound-rtp",
        candidatepair: "candidate-pair",
        localcandidate: "local-candidate",
        remotecandidate: "remote-candidate"
      },
          n = e.RTCPeerConnection.prototype.getStats;

      e.RTCPeerConnection.prototype.getStats = function () {
        var _arguments2 = Array.prototype.slice.call(arguments),
            e = _arguments2[0],
            i = _arguments2[1],
            o = _arguments2[2];

        return n.apply(this, [e || null]).then(function (e) {
          if (t.version < 53 && !i) try {
            e.forEach(function (e) {
              e.type = r[e.type] || e.type;
            });
          } catch (t) {
            if ("TypeError" !== t.name) throw t;
            e.forEach(function (t, n) {
              e.set(n, Object.assign({}, t, {
                type: r[t.type] || t.type
              }));
            });
          }
          return e;
        }).then(i, o);
      };
    }

    function F(e) {
      if ("object" != _typeof(e) || !e.RTCPeerConnection || !e.RTCRtpSender) return;
      if (e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype) return;
      var t = e.RTCPeerConnection.prototype.getSenders;
      t && (e.RTCPeerConnection.prototype.getSenders = function () {
        var _this16 = this;

        var e = t.apply(this, []);
        return e.forEach(function (e) {
          return e._pc = _this16;
        }), e;
      });
      var r = e.RTCPeerConnection.prototype.addTrack;
      r && (e.RTCPeerConnection.prototype.addTrack = function () {
        var e = r.apply(this, arguments);
        return e._pc = this, e;
      }), e.RTCRtpSender.prototype.getStats = function () {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
      };
    }

    function G(e) {
      if ("object" != _typeof(e) || !e.RTCPeerConnection || !e.RTCRtpSender) return;
      if (e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype) return;
      var t = e.RTCPeerConnection.prototype.getReceivers;
      t && (e.RTCPeerConnection.prototype.getReceivers = function () {
        var _this17 = this;

        var e = t.apply(this, []);
        return e.forEach(function (e) {
          return e._pc = _this17;
        }), e;
      }), u(e, "track", function (e) {
        return e.receiver._pc = e.srcElement, e;
      }), e.RTCRtpReceiver.prototype.getStats = function () {
        return this._pc.getStats(this.track);
      };
    }

    function H(e) {
      !e.RTCPeerConnection || "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function (e) {
        var _this18 = this;

        m("removeStream", "removeTrack"), this.getSenders().forEach(function (t) {
          t.track && e.getTracks().includes(t.track) && _this18.removeTrack(t);
        });
      });
    }

    function q(e) {
      e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
    }

    function J(e) {
      if ("object" != _typeof(e) || !e.RTCPeerConnection) return;
      var t = e.RTCPeerConnection.prototype.addTransceiver;
      t && (e.RTCPeerConnection.prototype.addTransceiver = function () {
        this.setParametersPromises = [];
        var e = arguments[1],
            r = e && "sendEncodings" in e;
        r && e.sendEncodings.forEach(function (e) {
          if ("rid" in e) {
            if (!/^[a-z0-9]{0,16}$/i.test(e.rid)) throw new TypeError("Invalid RID value provided.");
          }

          if ("scaleResolutionDownBy" in e && !(parseFloat(e.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
          if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
        });
        var n = t.apply(this, arguments);

        if (r) {
          var _t14 = n.sender,
              _r7 = _t14.getParameters();

          "encodings" in _r7 && (1 !== _r7.encodings.length || 0 !== Object.keys(_r7.encodings[0]).length) || (_r7.encodings = e.sendEncodings, _t14.sendEncodings = e.sendEncodings, this.setParametersPromises.push(_t14.setParameters(_r7).then(function () {
            delete _t14.sendEncodings;
          })["catch"](function () {
            delete _t14.sendEncodings;
          })));
        }

        return n;
      });
    }

    function z(e) {
      if ("object" != _typeof(e) || !e.RTCRtpSender) return;
      var t = e.RTCRtpSender.prototype.getParameters;
      t && (e.RTCRtpSender.prototype.getParameters = function () {
        var e = t.apply(this, arguments);
        return "encodings" in e || (e.encodings = [].concat(this.sendEncodings || [{}])), e;
      });
    }

    function K(e) {
      if ("object" != _typeof(e) || !e.RTCPeerConnection) return;
      var t = e.RTCPeerConnection.prototype.createOffer;

      e.RTCPeerConnection.prototype.createOffer = function () {
        var _arguments3 = arguments,
            _this19 = this;

        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(function () {
          return t.apply(_this19, _arguments3);
        })["finally"](function () {
          _this19.setParametersPromises = [];
        }) : t.apply(this, arguments);
      };
    }

    function Y(e) {
      if ("object" != _typeof(e) || !e.RTCPeerConnection) return;
      var t = e.RTCPeerConnection.prototype.createAnswer;

      e.RTCPeerConnection.prototype.createAnswer = function () {
        var _arguments4 = arguments,
            _this20 = this;

        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(function () {
          return t.apply(_this20, _arguments4);
        })["finally"](function () {
          _this20.setParametersPromises = [];
        }) : t.apply(this, arguments);
      };
    }

    function Q(e) {
      if ("object" == _typeof(e) && e.RTCPeerConnection) {
        if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function () {
          return this._localStreams || (this._localStreams = []), this._localStreams;
        }), !("addStream" in e.RTCPeerConnection.prototype)) {
          var _t15 = e.RTCPeerConnection.prototype.addTrack;
          e.RTCPeerConnection.prototype.addStream = function (e) {
            var _this21 = this;

            this._localStreams || (this._localStreams = []), this._localStreams.includes(e) || this._localStreams.push(e), e.getAudioTracks().forEach(function (r) {
              return _t15.call(_this21, r, e);
            }), e.getVideoTracks().forEach(function (r) {
              return _t15.call(_this21, r, e);
            });
          }, e.RTCPeerConnection.prototype.addTrack = function (e) {
            var _this22 = this;

            for (var _len = arguments.length, r = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              r[_key - 1] = arguments[_key];
            }

            return r && r.forEach(function (e) {
              _this22._localStreams ? _this22._localStreams.includes(e) || _this22._localStreams.push(e) : _this22._localStreams = [e];
            }), _t15.apply(this, arguments);
          };
        }

        "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function (e) {
          var _this23 = this;

          this._localStreams || (this._localStreams = []);

          var t = this._localStreams.indexOf(e);

          if (-1 === t) return;

          this._localStreams.splice(t, 1);

          var r = e.getTracks();
          this.getSenders().forEach(function (e) {
            r.includes(e.track) && _this23.removeTrack(e);
          });
        });
      }
    }

    function X(e) {
      if ("object" == _typeof(e) && e.RTCPeerConnection && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
        return this._remoteStreams ? this._remoteStreams : [];
      }), !("onaddstream" in e.RTCPeerConnection.prototype))) {
        Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
          get: function get() {
            return this._onaddstream;
          },
          set: function set(e) {
            var _this24 = this;

            this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e), this.addEventListener("track", this._onaddstreampoly = function (e) {
              e.streams.forEach(function (e) {
                if (_this24._remoteStreams || (_this24._remoteStreams = []), _this24._remoteStreams.includes(e)) return;

                _this24._remoteStreams.push(e);

                var t = new Event("addstream");
                t.stream = e, _this24.dispatchEvent(t);
              });
            });
          }
        });
        var _t16 = e.RTCPeerConnection.prototype.setRemoteDescription;

        e.RTCPeerConnection.prototype.setRemoteDescription = function () {
          var e = this;
          return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function (t) {
            t.streams.forEach(function (t) {
              if (e._remoteStreams || (e._remoteStreams = []), e._remoteStreams.indexOf(t) >= 0) return;

              e._remoteStreams.push(t);

              var r = new Event("addstream");
              r.stream = t, e.dispatchEvent(r);
            });
          }), _t16.apply(e, arguments);
        };
      }
    }

    function $(e) {
      if ("object" != _typeof(e) || !e.RTCPeerConnection) return;
      var t = e.RTCPeerConnection.prototype,
          r = t.createOffer,
          n = t.createAnswer,
          i = t.setLocalDescription,
          o = t.setRemoteDescription,
          a = t.addIceCandidate;
      t.createOffer = function (e, t) {
        var n = arguments.length >= 2 ? arguments[2] : arguments[0],
            i = r.apply(this, [n]);
        return t ? (i.then(e, t), Promise.resolve()) : i;
      }, t.createAnswer = function (e, t) {
        var r = arguments.length >= 2 ? arguments[2] : arguments[0],
            i = n.apply(this, [r]);
        return t ? (i.then(e, t), Promise.resolve()) : i;
      };

      var s = function s(e, t, r) {
        var n = i.apply(this, [e]);
        return r ? (n.then(t, r), Promise.resolve()) : n;
      };

      t.setLocalDescription = s, s = function s(e, t, r) {
        var n = o.apply(this, [e]);
        return r ? (n.then(t, r), Promise.resolve()) : n;
      }, t.setRemoteDescription = s, s = function s(e, t, r) {
        var n = a.apply(this, [e]);
        return r ? (n.then(t, r), Promise.resolve()) : n;
      }, t.addIceCandidate = s;
    }

    function Z(e) {
      var t = e && e.navigator;

      if (t.mediaDevices && t.mediaDevices.getUserMedia) {
        var _e6 = t.mediaDevices,
            _r8 = _e6.getUserMedia.bind(_e6);

        t.mediaDevices.getUserMedia = function (e) {
          return _r8(ee(e));
        };
      }

      !t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = function (e, r, n) {
        t.mediaDevices.getUserMedia(e).then(r, n);
      }.bind(t));
    }

    function ee(e) {
      return e && void 0 !== e.video ? Object.assign({}, e, {
        video: v(e.video)
      }) : e;
    }

    function te(e) {
      if (!e.RTCPeerConnection) return;
      var t = e.RTCPeerConnection;
      e.RTCPeerConnection = function (e, r) {
        if (e && e.iceServers) {
          var _t17 = [];

          for (var _r9 = 0; _r9 < e.iceServers.length; _r9++) {
            var _n26 = e.iceServers[_r9];
            !_n26.hasOwnProperty("urls") && _n26.hasOwnProperty("url") ? (m("RTCIceServer.url", "RTCIceServer.urls"), (_n26 = JSON.parse(JSON.stringify(_n26))).urls = _n26.url, delete _n26.url, _t17.push(_n26)) : _t17.push(e.iceServers[_r9]);
          }

          e.iceServers = _t17;
        }

        return new t(e, r);
      }, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in t && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
        get: function get() {
          return t.generateCertificate;
        }
      });
    }

    function re(e) {
      "object" == _typeof(e) && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
        get: function get() {
          return {
            receiver: this.receiver
          };
        }
      });
    }

    function ne(e) {
      var t = e.RTCPeerConnection.prototype.createOffer;

      e.RTCPeerConnection.prototype.createOffer = function (e) {
        if (e) {
          void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);

          var _t18 = this.getTransceivers().find(function (e) {
            return "audio" === e.receiver.track.kind;
          });

          !1 === e.offerToReceiveAudio && _t18 ? "sendrecv" === _t18.direction ? _t18.setDirection ? _t18.setDirection("sendonly") : _t18.direction = "sendonly" : "recvonly" === _t18.direction && (_t18.setDirection ? _t18.setDirection("inactive") : _t18.direction = "inactive") : !0 !== e.offerToReceiveAudio || _t18 || this.addTransceiver("audio"), void 0 !== e.offerToReceiveVideo && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);

          var _r10 = this.getTransceivers().find(function (e) {
            return "video" === e.receiver.track.kind;
          });

          !1 === e.offerToReceiveVideo && _r10 ? "sendrecv" === _r10.direction ? _r10.setDirection ? _r10.setDirection("sendonly") : _r10.direction = "sendonly" : "recvonly" === _r10.direction && (_r10.setDirection ? _r10.setDirection("inactive") : _r10.direction = "inactive") : !0 !== e.offerToReceiveVideo || _r10 || this.addTransceiver("video");
        }

        return t.apply(this, arguments);
      };
    }

    function ie(e) {
      "object" != _typeof(e) || e.AudioContext || (e.AudioContext = e.webkitAudioContext);
    }

    var oe = r(2),
        ae = r.n(oe);

    function se(e) {
      if (!e.RTCIceCandidate || e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype) return;
      var t = e.RTCIceCandidate;
      e.RTCIceCandidate = function (e) {
        if ("object" == _typeof(e) && e.candidate && 0 === e.candidate.indexOf("a=") && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)), e.candidate && e.candidate.length) {
          var _r11 = new t(e),
              _n27 = ae.a.parseCandidate(e.candidate),
              _i3 = Object.assign(_r11, _n27);

          return _i3.toJSON = function () {
            return {
              candidate: _i3.candidate,
              sdpMid: _i3.sdpMid,
              sdpMLineIndex: _i3.sdpMLineIndex,
              usernameFragment: _i3.usernameFragment
            };
          }, _i3;
        }

        return new t(e);
      }, e.RTCIceCandidate.prototype = t.prototype, u(e, "icecandidate", function (t) {
        return t.candidate && Object.defineProperty(t, "candidate", {
          value: new e.RTCIceCandidate(t.candidate),
          writable: "false"
        }), t;
      });
    }

    function ce(e) {
      if (!e.RTCPeerConnection) return;
      var t = R(e);
      "sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
        get: function get() {
          return void 0 === this._sctp ? null : this._sctp;
        }
      });

      var r = function r(e) {
        if (!e || !e.sdp) return !1;
        var t = ae.a.splitSections(e.sdp);
        return t.shift(), t.some(function (e) {
          var t = ae.a.parseMLine(e);
          return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP");
        });
      },
          n = function n(e) {
        var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
        if (null === t || t.length < 2) return -1;
        var r = parseInt(t[1], 10);
        return r != r ? -1 : r;
      },
          i = function i(e) {
        var r = 65536;
        return "firefox" === t.browser && (r = t.version < 57 ? -1 === e ? 16384 : 2147483637 : t.version < 60 ? 57 === t.version ? 65535 : 65536 : 2147483637), r;
      },
          o = function o(e, r) {
        var n = 65536;
        "firefox" === t.browser && 57 === t.version && (n = 65535);
        var i = ae.a.matchPrefix(e.sdp, "a=max-message-size:");
        return i.length > 0 ? n = parseInt(i[0].substr(19), 10) : "firefox" === t.browser && -1 !== r && (n = 2147483637), n;
      },
          a = e.RTCPeerConnection.prototype.setRemoteDescription;

      e.RTCPeerConnection.prototype.setRemoteDescription = function () {
        if (this._sctp = null, "chrome" === t.browser && t.version >= 76) {
          var _this$getConfiguratio = this.getConfiguration(),
              _e7 = _this$getConfiguratio.sdpSemantics;

          "plan-b" === _e7 && Object.defineProperty(this, "sctp", {
            get: function get() {
              return void 0 === this._sctp ? null : this._sctp;
            },
            enumerable: !0,
            configurable: !0
          });
        }

        if (r(arguments[0])) {
          var _e8 = n(arguments[0]),
              _t19 = i(_e8),
              _r12 = o(arguments[0], _e8);

          var _a2;

          _a2 = 0 === _t19 && 0 === _r12 ? Number.POSITIVE_INFINITY : 0 === _t19 || 0 === _r12 ? Math.max(_t19, _r12) : Math.min(_t19, _r12);
          var _s = {};
          Object.defineProperty(_s, "maxMessageSize", {
            get: function get() {
              return _a2;
            }
          }), this._sctp = _s;
        }

        return a.apply(this, arguments);
      };
    }

    function de(e) {
      if (!(e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype)) return;

      function t(e, t) {
        var r = e.send;

        e.send = function () {
          var n = arguments[0],
              i = n.length || n.size || n.byteLength;
          if ("open" === e.readyState && t.sctp && i > t.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)");
          return r.apply(e, arguments);
        };
      }

      var r = e.RTCPeerConnection.prototype.createDataChannel;
      e.RTCPeerConnection.prototype.createDataChannel = function () {
        var e = r.apply(this, arguments);
        return t(e, this), e;
      }, u(e, "datachannel", function (e) {
        return t(e.channel, e.target), e;
      });
    }

    function pe(e) {
      if (!e.RTCPeerConnection || "connectionState" in e.RTCPeerConnection.prototype) return;
      var t = e.RTCPeerConnection.prototype;
      Object.defineProperty(t, "connectionState", {
        get: function get() {
          return {
            completed: "connected",
            checking: "connecting"
          }[this.iceConnectionState] || this.iceConnectionState;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t, "onconnectionstatechange", {
        get: function get() {
          return this._onconnectionstatechange || null;
        },
        set: function set(e) {
          this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e);
        },
        enumerable: !0,
        configurable: !0
      }), ["setLocalDescription", "setRemoteDescription"].forEach(function (e) {
        var r = t[e];

        t[e] = function () {
          return this._connectionstatechangepoly || (this._connectionstatechangepoly = function (e) {
            var t = e.target;

            if (t._lastConnectionState !== t.connectionState) {
              t._lastConnectionState = t.connectionState;

              var _r13 = new Event("connectionstatechange", e);

              t.dispatchEvent(_r13);
            }

            return e;
          }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), r.apply(this, arguments);
        };
      });
    }

    function ue(e) {
      if (!e.RTCPeerConnection) return;
      var t = R(e);
      if ("chrome" === t.browser && t.version >= 71) return;
      if ("safari" === t.browser && t.version >= 605) return;
      var r = e.RTCPeerConnection.prototype.setRemoteDescription;

      e.RTCPeerConnection.prototype.setRemoteDescription = function (e) {
        return e && e.sdp && -1 !== e.sdp.indexOf("\na=extmap-allow-mixed") && (e.sdp = e.sdp.split("\n").filter(function (e) {
          return "a=extmap-allow-mixed" !== e.trim();
        }).join("\n")), r.apply(this, arguments);
      };
    }

    var fe = function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          e = _ref.window;

      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        shimChrome: !0,
        shimFirefox: !0,
        shimEdge: !0,
        shimSafari: !0
      };
      var r = h,
          c = R(e),
          d = {
        browserDetails: c,
        commonShim: s,
        extractVersion: p,
        disableLog: f,
        disableWarnings: l
      };

      switch (c.browser) {
        case "chrome":
          if (!n || !I || !t.shimChrome) return r("Chrome shim is not included in this adapter release."), d;
          if (null === c.version) return r("Chrome shim can not determine version, not shimming."), d;
          r("adapter.js shimming chrome."), d.browserShim = n, _(e), O(e), I(e), C(e), D(e), T(e), b(e), P(e), N(e), se(e), pe(e), ce(e), de(e), ue(e);
          break;

        case "firefox":
          if (!o || !W || !t.shimFirefox) return r("Firefox shim is not included in this adapter release."), d;
          r("adapter.js shimming firefox."), d.browserShim = o, V(e), W(e), B(e), H(e), F(e), G(e), q(e), J(e), z(e), K(e), Y(e), se(e), pe(e), ce(e), de(e);
          break;

        case "edge":
          if (!i || !L || !t.shimEdge) return r("MS edge shim is not included in this adapter release."), d;
          r("adapter.js shimming edge."), d.browserShim = i, M(e), x(e), L(e), U(e), ce(e), de(e);
          break;

        case "safari":
          if (!a || !t.shimSafari) return r("Safari shim is not included in this adapter release."), d;
          r("adapter.js shimming safari."), d.browserShim = a, te(e), ne(e), $(e), Q(e), X(e), re(e), Z(e), ie(e), se(e), ce(e), de(e), ue(e);
          break;

        default:
          r("Unsupported browser!");
      }

      return d;
    }({
      window: "undefined" == typeof window ? void 0 : window
    });

    t["default"] = fe;
  }]);
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n[type=button] {\n    background-color: #d49a07;\n    color: white;\n    display: block;\n    height: calc(1.5em + .75rem + 2px);\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: .25rem;\n    -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;\n    transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;\n}\n[type=button]:disabled {\n    background-color: rgba(59, 59, 59, 0.3);\n    border-color: rgba(118, 118, 118, 0.3);\n}\n.toast-wrap{\n    opacity: 0;\n    position: fixed;\n    top: 15%;\n    color: #fff;\n    width: 70%;\n    text-align: center;\n}\n.toast-msg{\n    font-size: 16px;\n    background-color: #5f80ef;\n    padding: 10px 20px;\n    border-radius: 5px;\n}\n.toastAnimate{\n    -webkit-animation: toastKF 10s;\n            animation: toastKF 10s;\n}\n@-webkit-keyframes toastKF{\n0% {opacity: 0;}\n25% {opacity: 1; z-index: 9999}\n50% {opacity: 1; z-index: 9999}\n75% {opacity: 1; z-index: 9999}\n100% {opacity: 0; z-index: 0}\n}\n@keyframes toastKF{\n0% {opacity: 0;}\n25% {opacity: 1; z-index: 9999}\n50% {opacity: 1; z-index: 9999}\n75% {opacity: 1; z-index: 9999}\n100% {opacity: 0; z-index: 0}\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashStreamChat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashStreamChat.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashStreamChat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashStreamChat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/vuedir/pages/dashboard/DashStreamChat.vue":
/*!*************************************************************!*\
  !*** ./resources/vuedir/pages/dashboard/DashStreamChat.vue ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashStreamChat_vue_vue_type_template_id_a1040360___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashStreamChat.vue?vue&type=template&id=a1040360& */ "./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=template&id=a1040360&");
/* harmony import */ var _DashStreamChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashStreamChat.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=script&lang=js&");
/* harmony import */ var _DashStreamChat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashStreamChat.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _DashStreamChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DashStreamChat_vue_vue_type_template_id_a1040360___WEBPACK_IMPORTED_MODULE_0__.render,
  _DashStreamChat_vue_vue_type_template_id_a1040360___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/dashboard/DashStreamChat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashStreamChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashStreamChat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashStreamChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashStreamChat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashStreamChat.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=style&index=0&lang=css&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashStreamChat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=template&id=a1040360&":
/*!********************************************************************************************!*\
  !*** ./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=template&id=a1040360& ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashStreamChat_vue_vue_type_template_id_a1040360___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashStreamChat_vue_vue_type_template_id_a1040360___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashStreamChat_vue_vue_type_template_id_a1040360___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashStreamChat.vue?vue&type=template&id=a1040360& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=template&id=a1040360&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=template&id=a1040360&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/dashboard/DashStreamChat.vue?vue&type=template&id=a1040360& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c("div", { staticStyle: { display: "none" } }, [
      _vm._v(_vm._s(_vm.contentchange))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "page-header" }, [
      _c("div", { staticClass: "page-title" }, [
        _c("h3", [_vm._v("WES Live Video Stream")]),
        _vm._v(" "),
        _c("span", { staticStyle: { color: "#656262" } }, [
          _vm._v("   |   \n                       "),
          _c(
            "svg",
            {
              staticClass: "feather feather-home",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }
            },
            [
              _c("path", {
                attrs: { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }
              }),
              _vm._v(" "),
              _c("polyline", { attrs: { points: "9 22 9 12 15 12 15 22" } })
            ]
          ),
          _vm._v(
            "\n                           " +
              _vm._s(_vm.cmu_dash) +
              "   >>  WES Live Video Stream\n                          "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          { staticClass: "card p-t-20 p-b-20 p-l-20 p-r-20 min-vh-60" },
          [
            _c("div", { staticClass: "container p-0" }, [
              _c("div", { staticClass: "row videocontainer" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-12 text-center p-2",
                    staticStyle: { "background-color": "antiquewhite" }
                  },
                  [
                    _vm._v(
                      "\n                                    Alibaba Cloud Live Video Stream\n                                "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-6 mt-3 mb-3",
                    staticStyle: { "min-height": "300px" }
                  },
                  [
                    _c("video", {
                      staticClass: "m-auto",
                      staticStyle: { width: "100%", height: "100%" },
                      attrs: { id: "video", controls: "", muted: "" },
                      domProps: { muted: true }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-6 pl-0 mt-3 mb-3",
                    staticStyle: { "min-height": "300px" }
                  },
                  [
                    _c("video", {
                      staticClass: "m-auto",
                      staticStyle: { width: "100%", height: "100%" },
                      attrs: { id: "rvideo", controls: "", muted: "" },
                      domProps: { muted: true }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4)
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          href: "#",
          id: "dashboard-chat-fav",
          "data-status": "off",
          "data-page-info": "dashboard-chat"
        }
      },
      [
        _vm._v("\n                           "),
        _c("img", {
          staticClass: "iconsimg",
          attrs: {
            src: "/images/icons/star_e.png",
            width: "16",
            height: "16",
            onerror: "this.src ='/images/noimg.png';"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6 mt-3 mb-3" }, [
        _c("label", { attrs: { for: "pushurl" } }, [
          _vm._v("Push Stream Name")
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: {
            type: "text",
            name: "pushurl",
            id: "pushurl",
            placeholder: "test"
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 pl-0 mt-3 mb-3" }, [
        _c("label", { attrs: { for: "pullurl" } }, [
          _vm._v("Pull Stream Name")
        ]),
        _vm._v(" "),
        _c(
          "select",
          {
            staticClass: "form-control",
            attrs: { name: "pullurl", id: "pullurl" }
          },
          [_c("option", { attrs: { value: "" } }, [_vm._v("--select--")])]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6 mt-3 mb-3" }, [
        _c("label", { attrs: { for: "streamConfig" } }, [
          _vm._v("Type of Stream")
        ]),
        _vm._v(" "),
        _c(
          "select",
          { staticClass: "form-control", attrs: { id: "streamConfig" } },
          [
            _c("option", { attrs: { value: "none" } }, [_vm._v("Only audio")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "camera", selected: "" } }, [
              _vm._v("audio + camera")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "screen" } }, [
              _vm._v("audio + shard stream")
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6 mt-3 mb-3" }, [
        _c("div", { staticClass: "button-group d-flex" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary mr-3",
              attrs: { type: "button", id: "createStreamButton" }
            },
            [_vm._v("Create Stream")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary mr-3",
              attrs: { type: "button", id: "removeStreamButton" }
            },
            [_vm._v("Remove Stream")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary mr-3",
              attrs: { type: "button", id: "pushButton" }
            },
            [_vm._v("Push Start")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary mr-3",
              attrs: { type: "button", id: "stopButton" }
            },
            [_vm._v("Push Stop")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-6 pl-0 mt-3 mb-3",
          staticStyle: {
            display: "flex",
            "align-items": "center",
            "justify-content": "center"
          }
        },
        [
          _c("div", { staticClass: "button-group d-flex" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary mr-3",
                attrs: { type: "button", id: "isSupportButton" }
              },
              [_vm._v("Supportive testing")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary mr-3",
                attrs: { type: "button", id: "pullstart" }
              },
              [_vm._v("pull start")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary mr-3",
                attrs: { type: "button", id: "pullstop" }
              },
              [_vm._v("pull stop")]
            )
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "toast-wrap" }, [
      _c("span", { staticClass: "toast-msg" })
    ])
  }
]
render._withStripped = true



/***/ })

}]);