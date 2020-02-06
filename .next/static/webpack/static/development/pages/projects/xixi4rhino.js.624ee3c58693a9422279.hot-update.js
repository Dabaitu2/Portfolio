webpackHotUpdate("static/development/pages/projects/xixi4rhino.js",{

/***/ "./components/Projects/ProjectDetail/index.tsx":
/*!*****************************************************!*\
  !*** ./components/Projects/ProjectDetail/index.tsx ***!
  \*****************************************************/
/*! exports provided: ProjectDetailItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailItem", function() { return ProjectDetailItem; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.less */ "./components/Projects/ProjectDetail/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/LazyLoadImg */ "./components/common/LazyLoadImg/index.tsx");
/* harmony import */ var _utils_hooks_useResizeCallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/hooks/useResizeCallback */ "./utils/hooks/useResizeCallback.ts");
/* harmony import */ var _utils_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/hooks/useForceUpdate */ "./utils/hooks/useForceUpdate.ts");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Projects/ProjectDetail/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var ProjectDetailItem = function ProjectDetailItem(props) {
  var images = props.images,
      title = props.title,
      desc = props.desc,
      links = props.links,
      tags = props.tags,
      details = props.details,
      mainColor = props.mainColor,
      detail_images_meta = props.detail_images_meta,
      video = props.video,
      affix_image_meta = props.affix_image_meta;
  var videoRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef({
    duration: 0,
    currentTime: 0,
    fake: true
  });

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(undefined),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      played = _React$useState2[0],
      setPlayed = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      visible = _React$useState4[0],
      setVisible = _React$useState4[1];

  var _useForceUpdate = Object(_utils_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_7__["useForceUpdate"])(),
      forceUpdate = _useForceUpdate.forceUpdate;

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      progress = _React$useState6[0],
      setProgress = _React$useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!videoRef.current.fake && document) {
      document.onscroll = function () {
        if (videoRef.current.getBoundingClientRect().top < 700) {
          if (played === undefined) {
            videoRef.current.play();
            setPlayed(true);
          }
        } else if (videoRef.current.getBoundingClientRect().bottom < 150) {
          videoRef.current.pause();
          setPlayed(false);
        }
      };
    }
  }, [videoRef.current, document, played]);

  var _useResizeCallback = Object(_utils_hooks_useResizeCallback__WEBPACK_IMPORTED_MODULE_6__["useResizeCallback"])(),
      addMustExecuteCallback = _useResizeCallback.addMustExecuteCallback;

  addMustExecuteCallback(function () {
    forceUpdate();
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var handleTimeUpdate = lodash_throttle__WEBPACK_IMPORTED_MODULE_8___default()(function () {
      setProgress(videoRef.current.currentTime / videoRef.current.duration * 100);
    }, 500);

    if (!videoRef.current.fake) {
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }
  }, [videoRef.current, setProgress]);
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a['project-detail-item'],
    style: {
      color: mainColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a['project-detail-images'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, images.map(function (image) {
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, image, {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a['project-detail-image'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }));
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a['project-detail-title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, title), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a['project-detail-subtitle'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, desc.map(function (d) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, d);
  }))), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a['project-detail-details'],
    style: {
      backgroundColor: mainColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a['project-detail-tags'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, tags.map(function (t) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, t);
  })), details.length > 0 && __jsx("span", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a['project-detail-details-desc'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, details)), __jsx("div", {
    style: {
      fontSize: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()({
    length: detail_images_meta.num
  }).map(function (_, i) {
    if (i === 0) {
      return;
    }

    var common_file = detail_images_meta.dir + '/' + (i + 1).toString();
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: common_file + '.jpg',
      sources: [{
        type: 'image/webp',
        src: common_file + '.webp'
      }],
      preview_src: common_file + '-preview.jpg',
      preview_sources: [{
        type: 'image/webp',
        src: common_file + '-preview.webp'
      }],
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a['project-detail-details-images'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    });
  }), links.map(function (link) {
    return __jsx("a", {
      className: link.className,
      href: link.src,
      target: 'blank',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, desc);
  }), video ? video.map(function (v) {
    return __jsx("div", {
      style: {
        width: '1600rem',
        position: 'relative',
        height: '900rem',
        transition: '0.3s ease-in-out',
        filter: played == true ? 'none' : 'opacity(0.9)'
      },
      onMouseEnter: function onMouseEnter() {
        setVisible(true);
      },
      onMouseLeave: function onMouseLeave() {
        setVisible(false);
      },
      onClick: function onClick() {
        if (played) {
          videoRef.current.pause();
          setPlayed(false);
        } else {
          videoRef.current.play();
          setPlayed(true);
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, __jsx("div", {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a['project-detail-stop-icon'],
      style: {
        display: played == true ? 'none' : 'block'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "PAUSE"), __jsx("div", {
      style: {
        transition: '.4s ease',
        opacity: visible ? 1 : 0
      },
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a['project-detail-video-control-bar'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx("div", {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a['bar'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, __jsx("div", {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a['progress'],
      style: {
        width: progress + '%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }))), __jsx("video", {
      src: v.src,
      ref: videoRef,
      autoPlay: false,
      style: {
        width: '1600rem',
        "float": 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }));
  }) : null, affix_image_meta ? _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()({
    length: affix_image_meta.num
  }).map(function (_, i) {
    if (i === 0) {
      return;
    }

    var common_file = affix_image_meta.dir + '/' + (detail_images_meta.num + i + 1).toString();
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: common_file + '.jpg',
      sources: [{
        type: 'image/webp',
        src: common_file + '.webp'
      }],
      preview_src: common_file + '-preview.jpg',
      preview_sources: [{
        type: 'image/webp',
        src: common_file + '-preview.webp'
      }],
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_4___default.a['project-detail-details-images'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    });
  }) : null));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectDetailItem);

/***/ }),

/***/ "./pages/projects/xixi4rhino.tsx":
/*!***************************************!*\
  !*** ./pages/projects/xixi4rhino.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.less */ "./pages/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LayoutHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LayoutHeader */ "./components/LayoutHeader/index.tsx");
/* harmony import */ var _utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/hooks/useCurrentTab */ "./utils/hooks/useCurrentTab.tsx");
/* harmony import */ var _components_ContentSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ContentSwitcher */ "./components/ContentSwitcher/index.tsx");
/* harmony import */ var _utils_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/hooks/useComponentDidMount */ "./utils/hooks/useComponentDidMount.ts");
/* harmony import */ var _utils_hooks_useResizeCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/hooks/useResizeCallback */ "./utils/hooks/useResizeCallback.ts");
/* harmony import */ var _components_Projects_ProjectDetail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Projects/ProjectDetail */ "./components/Projects/ProjectDetail/index.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Profile */ "./components/Profile/index.tsx");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Projects */ "./components/Projects/index.tsx");

var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/pages/projects/xixi4rhino.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];











var DESIGN_WIDTH = 1920;
var COMMON_STATIC_PATH = '/static/images/projectDetails/img';
var Info = {
  title: 'xixi4rhino',
  mainColor: '#9E0601',
  desc: ['a website for rhino protection', 'by impacting potential consumers directly'],
  details: "\u2018xixi4rhino\u2019 is a website for Rhino Protection, aiming to change Chinese potential consumers\u2019 rhino horns purchase intention and create better Internet information environment about rhino horns. It\u2019s critical to directly impact the consumption intention of Chinese potential consumers and make them abandon the purchase when rhinos are poached for rhino horns. In the Chinese market, as the Internet plays an import role on consumption decision, we created the website with an entrapping name \u201CRhino Horn Purchase Guide\u201D to induce people to click and browse it. The glitch art video at the beginning contains bloody scene and dialogue box interaction to make potential consumers shocked powerfully. After that, the webpage informs people about the correct knowledge of the rhino horns and encourage them to forward or donate, so that the website could be more widely spread.",
  tags: ['Society Innovation | Web UI and UX Design | Team Work in 5 weeks | Mar 2018 '],
  images: [{
    src: COMMON_STATIC_PATH + '7.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '7.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '7-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '7-preview.webp',
      type: 'image/webp'
    }],
    alt: 'rhino'
  }],
  detail_images_meta: {
    dir: '/static/images/projectDetails/xixi4rhino',
    num: 1
  },
  links: [{
    src: 'http://144.34.173.162/foreign-projects/project-rhino',
    desc: 'Click Here To Enter',
    className: _index_less__WEBPACK_IMPORTED_MODULE_2___default.a
  }],
  affix_image_meta: {
    dir: '/static/images/projectDetails/xixi4rhino',
    num: 6
  }
};
var menuItems = [{
  key: 'xixi4rhino',
  label: 'xixi4rhino'
}];

var InnerLayout = function InnerLayout() {
  var _useCurrentTab = Object(_utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_4__["useCurrentTab"])(),
      scale = _useCurrentTab.state.scale.scale,
      _useCurrentTab$action = _useCurrentTab.actions,
      setScale = _useCurrentTab$action.setScale,
      setCurrentTab = _useCurrentTab$action.setCurrentTab;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var fallBackReactive = function fallBackReactive() {
    setScale(1);
    var scale = Math.min(document.body.clientWidth / 1920, 1);
    var metaEl = document.querySelector('meta[name="viewport"]');

    if (!metaEl) {
      metaEl = document.createElement('meta');
      metaEl.setAttribute('name', 'viewport');
      metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
      document.documentElement.firstElementChild.appendChild(metaEl);
    } else {
      metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    }

    window.scrollTo({
      top: 0
    });
  }; // innerWidth 比 body.offsetWidth 稳定


  var _useComponentDidMount = Object(_utils_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_6__["useComponentDidMount"])(function () {
    setCurrentTab(1);

    if (window.innerWidth >= 700) {
      var _scale = Math.max(Math.min(window.innerWidth / DESIGN_WIDTH, 1), 0.2);

      setScale(_scale);
    } else {
      fallBackReactive();
    }

    addCallback(function () {
      var scale = Math.max(Math.min(window.innerWidth / DESIGN_WIDTH, 1), 0.2);
      document.getElementsByTagName('html')[0].style.fontSize = "".concat(scale, "px");
      window.scrollTo({
        top: 0
      });
      setScale(scale);
    });
  }),
      IsDone = _useComponentDidMount.IsDone;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsLoading(true);
    document.getElementsByTagName('html')[0].style.fontSize = "".concat(scale, "px");
    window.scrollTo({
      top: 0
    }); // 强行将这次setState推迟到下次处理

    setTimeout(function () {
      setIsLoading(false);
    }, 0);
  }, [scale]);

  var _useResizeCallback = Object(_utils_hooks_useResizeCallback__WEBPACK_IMPORTED_MODULE_7__["useResizeCallback"])(fallBackReactive),
      addCallback = _useResizeCallback.addCallback;

  return IsDone && !isLoading ? __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_2___default.a.layout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx(_components_LayoutHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuItems: menuItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), __jsx(_components_ContentSwitcher__WEBPACK_IMPORTED_MODULE_5__["ContentSwitcher"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), __jsx(_components_Projects_ProjectDetail__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Info, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  })), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  })), __jsx(_components_LayoutHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuItems: menuItems,
    bodyStyle: {
      marginTop: '138rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })) : null;
};

var Layout = function Layout() {
  return __jsx(_utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_4__["CurrentTabProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(InnerLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=xixi4rhino.js.624ee3c58693a9422279.hot-update.js.map