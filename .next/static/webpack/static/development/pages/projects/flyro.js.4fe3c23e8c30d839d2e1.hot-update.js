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
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-item'],
    style: {
      color: mainColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-images'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, images.map(function (image) {
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, image, {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-image'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }));
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, title), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-subtitle'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, desc.map(function (d) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
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
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-tags'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, tags.map(function (t) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, t);
  })), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, details)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
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
        lineNumber: 81
      },
      __self: this
    });
  }), video ? video.map(function (v) {
    return __jsx("video", {
      src: v.src,
      autoPlay: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    });
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
        lineNumber: 110
      },
      __self: this
    });
  }) : null));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectDetailItem);

/***/ }),

/***/ "./pages/projects/flyro.tsx":
/*!**********************************!*\
  !*** ./pages/projects/flyro.tsx ***!
  \**********************************/
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

var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/pages/projects/flyro.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];











var DESIGN_WIDTH = 1920;
var COMMON_STATIC_PATH = '/static/images/projectDetails/img';
var Info = {
  title: 'Flyro',
  desc: ['an inspiring spinning and', 'a mobile free zone'],
  mainColor: '#1F204F',
  details: 'To create a phone free zone, we offer you the optimal choice — flyro.It is a floating gyro, which can block and charge your phone.\n' + 'Once you plug in the phone, the gyro can be empowered and spin during your working time. If you plug out from the plate, it would lose power and stop after 15 minutes.\n' + 'Flyro helps you find the balance between work and play.',
  tags: ['Integrated Product Development | Interaction Design | Team Work in 5 weeks | May 2018 '],
  images: [{
    src: COMMON_STATIC_PATH + '3.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '3.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '3-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '3-preview.webp',
      type: 'image/webp'
    }],
    alt: 'Flyro'
  }],
  detail_images_meta: {
    dir: '/static/images/projectDetails/flyro',
    num: 12
  },
  video: [{
    src: '/static/video.mp4'
  }],
  affix_image_meta: {
    dir: '/static/images/projectDetails/flyro',
    num: 8
  }
};
var menuItems = [{
  key: 'Flyro',
  label: 'Flyro'
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
      lineNumber: 145
    },
    __self: this
  }, __jsx(_components_LayoutHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuItems: menuItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), __jsx(_components_ContentSwitcher__WEBPACK_IMPORTED_MODULE_5__["ContentSwitcher"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx(_components_Projects_ProjectDetail__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Info, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  })), __jsx(_components_LayoutHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuItems: menuItems,
    bodyStyle: {
      marginTop: '138rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })) : null;
};

var Layout = function Layout() {
  return __jsx(_utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_4__["CurrentTabProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx(InnerLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=flyro.js.4fe3c23e8c30d839d2e1.hot-update.js.map