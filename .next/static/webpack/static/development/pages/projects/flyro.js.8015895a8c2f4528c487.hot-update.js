webpackHotUpdate("static/development/pages/projects/flyro.js",{

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
    }, link.desc);
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

/***/ })

})
//# sourceMappingURL=flyro.js.8015895a8c2f4528c487.hot-update.js.map