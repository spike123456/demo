"use strict";(self.webpackChunkfanzone=self.webpackChunkfanzone||[]).push([["reactPlayerFilePlayer"],{"./node_modules/react-player/lazy/players/FilePlayer.js":(__unused_webpack_module,exports,__webpack_require__)=>{eval('\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nexports["default"] = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));\n\nvar _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lazy/utils.js");\n\nvar _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lazy/patterns.js");\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar HAS_NAVIGATOR = typeof navigator !== \'undefined\';\nvar IS_IPAD_PRO = HAS_NAVIGATOR && navigator.platform === \'MacIntel\' && navigator.maxTouchPoints > 1;\nvar IS_IOS = HAS_NAVIGATOR && (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_PRO) && !window.MSStream;\nvar HLS_SDK_URL = \'https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js\';\nvar HLS_GLOBAL = \'Hls\';\nvar DASH_SDK_URL = \'https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js\';\nvar DASH_GLOBAL = \'dashjs\';\nvar FLV_SDK_URL = \'https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js\';\nvar FLV_GLOBAL = \'flvjs\';\nvar MATCH_DROPBOX_URL = /www\\.dropbox\\.com\\/.+/;\nvar MATCH_CLOUDFLARE_STREAM = /https:\\/\\/watch\\.cloudflarestream\\.com\\/([a-z0-9]+)/;\nvar REPLACE_CLOUDFLARE_STREAM = \'https://videodelivery.net/{id}/manifest/video.m3u8\';\n\nvar FilePlayer = /*#__PURE__*/function (_Component) {\n  _inherits(FilePlayer, _Component);\n\n  var _super = _createSuper(FilePlayer);\n\n  function FilePlayer() {\n    var _this;\n\n    _classCallCheck(this, FilePlayer);\n\n    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {\n      _args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(_args));\n\n    _defineProperty(_assertThisInitialized(_this), "onReady", function () {\n      var _this$props;\n\n      return (_this$props = _this.props).onReady.apply(_this$props, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "onPlay", function () {\n      var _this$props2;\n\n      return (_this$props2 = _this.props).onPlay.apply(_this$props2, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "onBuffer", function () {\n      var _this$props3;\n\n      return (_this$props3 = _this.props).onBuffer.apply(_this$props3, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "onBufferEnd", function () {\n      var _this$props4;\n\n      return (_this$props4 = _this.props).onBufferEnd.apply(_this$props4, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "onPause", function () {\n      var _this$props5;\n\n      return (_this$props5 = _this.props).onPause.apply(_this$props5, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "onEnded", function () {\n      var _this$props6;\n\n      return (_this$props6 = _this.props).onEnded.apply(_this$props6, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "onError", function () {\n      var _this$props7;\n\n      return (_this$props7 = _this.props).onError.apply(_this$props7, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "onEnablePIP", function () {\n      var _this$props8;\n\n      return (_this$props8 = _this.props).onEnablePIP.apply(_this$props8, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "onDisablePIP", function (e) {\n      var _this$props9 = _this.props,\n          onDisablePIP = _this$props9.onDisablePIP,\n          playing = _this$props9.playing;\n      onDisablePIP(e);\n\n      if (playing) {\n        _this.play();\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "onPresentationModeChange", function (e) {\n      if (_this.player && (0, _utils.supportsWebKitPresentationMode)(_this.player)) {\n        var webkitPresentationMode = _this.player.webkitPresentationMode;\n\n        if (webkitPresentationMode === \'picture-in-picture\') {\n          _this.onEnablePIP(e);\n        } else if (webkitPresentationMode === \'inline\') {\n          _this.onDisablePIP(e);\n        }\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "onSeek", function (e) {\n      _this.props.onSeek(e.target.currentTime);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "mute", function () {\n      _this.player.muted = true;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "unmute", function () {\n      _this.player.muted = false;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "renderSourceElement", function (source, index) {\n      if (typeof source === \'string\') {\n        return /*#__PURE__*/_react["default"].createElement("source", {\n          key: index,\n          src: source\n        });\n      }\n\n      return /*#__PURE__*/_react["default"].createElement("source", _extends({\n        key: index\n      }, source));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "renderTrack", function (track, index) {\n      return /*#__PURE__*/_react["default"].createElement("track", _extends({\n        key: index\n      }, track));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "ref", function (player) {\n      if (_this.player) {\n        // Store previous player to be used by removeListeners()\n        _this.prevPlayer = _this.player;\n      }\n\n      _this.player = player;\n    });\n\n    return _this;\n  }\n\n  _createClass(FilePlayer, [{\n    key: "componentDidMount",\n    value: function componentDidMount() {\n      this.props.onMount && this.props.onMount(this);\n      this.addListeners(this.player);\n\n      if (IS_IOS) {\n        this.player.load();\n      }\n    }\n  }, {\n    key: "componentDidUpdate",\n    value: function componentDidUpdate(prevProps) {\n      if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {\n        this.removeListeners(this.prevPlayer, prevProps.url);\n        this.addListeners(this.player);\n      }\n\n      if (this.props.url !== prevProps.url && !(0, _utils.isMediaStream)(this.props.url)) {\n        this.player.srcObject = null;\n      }\n    }\n  }, {\n    key: "componentWillUnmount",\n    value: function componentWillUnmount() {\n      this.removeListeners(this.player);\n\n      if (this.hls) {\n        this.hls.destroy();\n      }\n    }\n  }, {\n    key: "addListeners",\n    value: function addListeners(player) {\n      var _this$props10 = this.props,\n          url = _this$props10.url,\n          playsinline = _this$props10.playsinline;\n      player.addEventListener(\'play\', this.onPlay);\n      player.addEventListener(\'waiting\', this.onBuffer);\n      player.addEventListener(\'playing\', this.onBufferEnd);\n      player.addEventListener(\'pause\', this.onPause);\n      player.addEventListener(\'seeked\', this.onSeek);\n      player.addEventListener(\'ended\', this.onEnded);\n      player.addEventListener(\'error\', this.onError);\n      player.addEventListener(\'enterpictureinpicture\', this.onEnablePIP);\n      player.addEventListener(\'leavepictureinpicture\', this.onDisablePIP);\n      player.addEventListener(\'webkitpresentationmodechanged\', this.onPresentationModeChange);\n\n      if (!this.shouldUseHLS(url)) {\n        // onReady is handled by hls.js\n        player.addEventListener(\'canplay\', this.onReady);\n      }\n\n      if (playsinline) {\n        player.setAttribute(\'playsinline\', \'\');\n        player.setAttribute(\'webkit-playsinline\', \'\');\n        player.setAttribute(\'x5-playsinline\', \'\');\n      }\n    }\n  }, {\n    key: "removeListeners",\n    value: function removeListeners(player, url) {\n      player.removeEventListener(\'canplay\', this.onReady);\n      player.removeEventListener(\'play\', this.onPlay);\n      player.removeEventListener(\'waiting\', this.onBuffer);\n      player.removeEventListener(\'playing\', this.onBufferEnd);\n      player.removeEventListener(\'pause\', this.onPause);\n      player.removeEventListener(\'seeked\', this.onSeek);\n      player.removeEventListener(\'ended\', this.onEnded);\n      player.removeEventListener(\'error\', this.onError);\n      player.removeEventListener(\'enterpictureinpicture\', this.onEnablePIP);\n      player.removeEventListener(\'leavepictureinpicture\', this.onDisablePIP);\n      player.removeEventListener(\'webkitpresentationmodechanged\', this.onPresentationModeChange);\n\n      if (!this.shouldUseHLS(url)) {\n        // onReady is handled by hls.js\n        player.removeEventListener(\'canplay\', this.onReady);\n      }\n    } // Proxy methods to prevent listener leaks\n\n  }, {\n    key: "shouldUseAudio",\n    value: function shouldUseAudio(props) {\n      if (props.config.forceVideo) {\n        return false;\n      }\n\n      if (props.config.attributes.poster) {\n        return false; // Use <video> so that poster is shown\n      }\n\n      return _patterns.AUDIO_EXTENSIONS.test(props.url) || props.config.forceAudio;\n    }\n  }, {\n    key: "shouldUseHLS",\n    value: function shouldUseHLS(url) {\n      if (this.props.config.forceHLS) {\n        return true;\n      }\n\n      if (IS_IOS) {\n        return false;\n      }\n\n      return _patterns.HLS_EXTENSIONS.test(url) || MATCH_CLOUDFLARE_STREAM.test(url);\n    }\n  }, {\n    key: "shouldUseDASH",\n    value: function shouldUseDASH(url) {\n      return _patterns.DASH_EXTENSIONS.test(url) || this.props.config.forceDASH;\n    }\n  }, {\n    key: "shouldUseFLV",\n    value: function shouldUseFLV(url) {\n      return _patterns.FLV_EXTENSIONS.test(url) || this.props.config.forceFLV;\n    }\n  }, {\n    key: "load",\n    value: function load(url) {\n      var _this2 = this;\n\n      var _this$props$config = this.props.config,\n          hlsVersion = _this$props$config.hlsVersion,\n          hlsOptions = _this$props$config.hlsOptions,\n          dashVersion = _this$props$config.dashVersion,\n          flvVersion = _this$props$config.flvVersion;\n\n      if (this.hls) {\n        this.hls.destroy();\n      }\n\n      if (this.dash) {\n        this.dash.reset();\n      }\n\n      if (this.shouldUseHLS(url)) {\n        (0, _utils.getSDK)(HLS_SDK_URL.replace(\'VERSION\', hlsVersion), HLS_GLOBAL).then(function (Hls) {\n          _this2.hls = new Hls(hlsOptions);\n\n          _this2.hls.on(Hls.Events.MANIFEST_PARSED, function () {\n            _this2.props.onReady();\n          });\n\n          _this2.hls.on(Hls.Events.ERROR, function (e, data) {\n            _this2.props.onError(e, data, _this2.hls, Hls);\n          });\n\n          if (MATCH_CLOUDFLARE_STREAM.test(url)) {\n            var id = url.match(MATCH_CLOUDFLARE_STREAM)[1];\n\n            _this2.hls.loadSource(REPLACE_CLOUDFLARE_STREAM.replace(\'{id}\', id));\n          } else {\n            _this2.hls.loadSource(url);\n          }\n\n          _this2.hls.attachMedia(_this2.player);\n\n          _this2.props.onLoaded();\n        });\n      }\n\n      if (this.shouldUseDASH(url)) {\n        (0, _utils.getSDK)(DASH_SDK_URL.replace(\'VERSION\', dashVersion), DASH_GLOBAL).then(function (dashjs) {\n          _this2.dash = dashjs.MediaPlayer().create();\n\n          _this2.dash.initialize(_this2.player, url, _this2.props.playing);\n\n          _this2.dash.on(\'error\', _this2.props.onError);\n\n          if (parseInt(dashVersion) < 3) {\n            _this2.dash.getDebug().setLogToBrowserConsole(false);\n          } else {\n            _this2.dash.updateSettings({\n              debug: {\n                logLevel: dashjs.Debug.LOG_LEVEL_NONE\n              }\n            });\n          }\n\n          _this2.props.onLoaded();\n        });\n      }\n\n      if (this.shouldUseFLV(url)) {\n        (0, _utils.getSDK)(FLV_SDK_URL.replace(\'VERSION\', flvVersion), FLV_GLOBAL).then(function (flvjs) {\n          _this2.flv = flvjs.createPlayer({\n            type: \'flv\',\n            url: url\n          });\n\n          _this2.flv.attachMediaElement(_this2.player);\n\n          _this2.flv.load();\n\n          _this2.props.onLoaded();\n        });\n      }\n\n      if (url instanceof Array) {\n        // When setting new urls (<source>) on an already loaded video,\n        // HTMLMediaElement.load() is needed to reset the media element\n        // and restart the media resource. Just replacing children source\n        // dom nodes is not enough\n        this.player.load();\n      } else if ((0, _utils.isMediaStream)(url)) {\n        try {\n          this.player.srcObject = url;\n        } catch (e) {\n          this.player.src = window.URL.createObjectURL(url);\n        }\n      }\n    }\n  }, {\n    key: "play",\n    value: function play() {\n      var promise = this.player.play();\n\n      if (promise) {\n        promise["catch"](this.props.onError);\n      }\n    }\n  }, {\n    key: "pause",\n    value: function pause() {\n      this.player.pause();\n    }\n  }, {\n    key: "stop",\n    value: function stop() {\n      this.player.removeAttribute(\'src\');\n\n      if (this.dash) {\n        this.dash.reset();\n      }\n    }\n  }, {\n    key: "seekTo",\n    value: function seekTo(seconds) {\n      this.player.currentTime = seconds;\n    }\n  }, {\n    key: "setVolume",\n    value: function setVolume(fraction) {\n      this.player.volume = fraction;\n    }\n  }, {\n    key: "enablePIP",\n    value: function enablePIP() {\n      if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {\n        this.player.requestPictureInPicture();\n      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== \'picture-in-picture\') {\n        this.player.webkitSetPresentationMode(\'picture-in-picture\');\n      }\n    }\n  }, {\n    key: "disablePIP",\n    value: function disablePIP() {\n      if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {\n        document.exitPictureInPicture();\n      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== \'inline\') {\n        this.player.webkitSetPresentationMode(\'inline\');\n      }\n    }\n  }, {\n    key: "setPlaybackRate",\n    value: function setPlaybackRate(rate) {\n      this.player.playbackRate = rate;\n    }\n  }, {\n    key: "getDuration",\n    value: function getDuration() {\n      if (!this.player) return null;\n      var _this$player = this.player,\n          duration = _this$player.duration,\n          seekable = _this$player.seekable; // on iOS, live streams return Infinity for the duration\n      // so instead we use the end of the seekable timerange\n\n      if (duration === Infinity && seekable.length > 0) {\n        return seekable.end(seekable.length - 1);\n      }\n\n      return duration;\n    }\n  }, {\n    key: "getCurrentTime",\n    value: function getCurrentTime() {\n      if (!this.player) return null;\n      return this.player.currentTime;\n    }\n  }, {\n    key: "getSecondsLoaded",\n    value: function getSecondsLoaded() {\n      if (!this.player) return null;\n      var buffered = this.player.buffered;\n\n      if (buffered.length === 0) {\n        return 0;\n      }\n\n      var end = buffered.end(buffered.length - 1);\n      var duration = this.getDuration();\n\n      if (end > duration) {\n        return duration;\n      }\n\n      return end;\n    }\n  }, {\n    key: "getSource",\n    value: function getSource(url) {\n      var useHLS = this.shouldUseHLS(url);\n      var useDASH = this.shouldUseDASH(url);\n      var useFLV = this.shouldUseFLV(url);\n\n      if (url instanceof Array || (0, _utils.isMediaStream)(url) || useHLS || useDASH || useFLV) {\n        return undefined;\n      }\n\n      if (MATCH_DROPBOX_URL.test(url)) {\n        return url.replace(\'www.dropbox.com\', \'dl.dropboxusercontent.com\');\n      }\n\n      return url;\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var _this$props11 = this.props,\n          url = _this$props11.url,\n          playing = _this$props11.playing,\n          loop = _this$props11.loop,\n          controls = _this$props11.controls,\n          muted = _this$props11.muted,\n          config = _this$props11.config,\n          width = _this$props11.width,\n          height = _this$props11.height;\n      var useAudio = this.shouldUseAudio(this.props);\n      var Element = useAudio ? \'audio\' : \'video\';\n      var style = {\n        width: width === \'auto\' ? width : \'100%\',\n        height: height === \'auto\' ? height : \'100%\'\n      };\n      return /*#__PURE__*/_react["default"].createElement(Element, _extends({\n        ref: this.ref,\n        src: this.getSource(url),\n        style: style,\n        preload: "auto",\n        autoPlay: playing || undefined,\n        controls: controls,\n        muted: muted,\n        loop: loop\n      }, config.attributes), url instanceof Array && url.map(this.renderSourceElement), config.tracks.map(this.renderTrack));\n    }\n  }]);\n\n  return FilePlayer;\n}(_react.Component);\n\nexports["default"] = FilePlayer;\n\n_defineProperty(FilePlayer, "displayName", \'FilePlayer\');\n\n_defineProperty(FilePlayer, "canPlay", _patterns.canPlay.file);\n\n//# sourceURL=webpack://fanzone/./node_modules/react-player/lazy/players/FilePlayer.js?')}}]);