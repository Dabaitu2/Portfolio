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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.less */ "./components/Projects/ProjectDetail/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/LazyLoadImg */ "./components/common/LazyLoadImg/index.tsx");
/* harmony import */ var _utils_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/hooks/useComponentDidMount */ "./utils/hooks/useComponentDidMount.ts");


var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Projects/ProjectDetail/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var ProjectDetailItem = function ProjectDetailItem(props) {
  var images = props.images,
      title = props.title,
      desc = props.desc,
      tags = props.tags,
      details = props.details,
      mainColor = props.mainColor,
      detail_images_meta = props.detail_images_meta,
      video = props.video,
      affix_image_meta = props.affix_image_meta;
  var videoRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var played = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(false);
  Object(_utils_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_5__["useComponentDidMount"])(function () {
    if (videoRef.current) {
      document.onscroll = function () {
        if (videoRef.current.getBoundingClientRect().top < 700) {
          if (!played.current) {
            videoRef.current.play();
            played.current = true;
          }
        } else if (videoRef.current.getBoundingClientRect().bottom < 150) {
          if (played.current) {
            videoRef.current.pause();
            played.current = false;
          }
        }
      };
    }
  });
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-item'],
    style: {
      color: mainColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-images'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, images.map(function (image) {
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, image, {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-image'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }));
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, title), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-subtitle'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, desc.map(function (d) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, d);
  }))), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-details'],
    style: {
      backgroundColor: mainColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-tags'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, tags.map(function (t) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, t);
  })), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, details)), __jsx("div", {
    style: {
      fontSize: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()({
    length: detail_images_meta.num
  }).map(function (_, i) {
    if (i === 0) {
      return;
    }

    var common_file = detail_images_meta.dir + '/' + (i + 1).toString();
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-details-images'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    });
  }), video ? video.map(function (v) {
    return __jsx("div", {
      style: {
        width: '1600rem',
        position: 'relative'
      },
      onClick: function onClick() {
        if (played.current) {
          videoRef.current.pause();
          played.current = false;
        } else {
          videoRef.current.play();
          played.current = true;
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("div", {
      style: {
        letterSpacing: '30rem',
        fontFamily: 'Sofia Pro Regular',
        fontSize: '100rem',
        lineHeight: '900rem',
        width: played ? '0' : '100%',
        transition: '.6s ease-in-out',
        textAlign: 'center',
        overflow: 'hidden',
        color: '#fff',
        position: 'absolute'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, "PAUSE"), __jsx("video", {
      src: v.src,
      ref: videoRef,
      autoPlay: false,
      style: {
        width: '100%',
        "float": 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
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
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-details-images'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    });
  }) : null));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectDetailItem);

/***/ })

})
//# sourceMappingURL=flyro.js.88b70b189a8d913883f1.hot-update.js.map