webpackHotUpdate("static/development/pages/projects/Bamboo.js",{

/***/ "./components/Projects/ProjectDetail/index.tsx":
/*!*****************************************************!*\
  !*** ./components/Projects/ProjectDetail/index.tsx ***!
  \*****************************************************/
/*! exports provided: ProjectDetailItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailItem", function() { return ProjectDetailItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.less */ "./components/Projects/ProjectDetail/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/LazyLoadImg */ "./components/common/LazyLoadImg/index.tsx");

var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Projects/ProjectDetail/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var ProjectDetailItem = function ProjectDetailItem(props) {
  var images = props.images,
      title = props.title,
      desc = props.desc,
      tags = props.tags,
      details = props.details,
      mainColor = props.mainColor;
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-detail-item'],
    style: {
      color: mainColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-detail-images'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, images.map(function (image) {
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, image, {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-detail-image'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }));
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-detail-title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, title), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-detail-subtitle'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, desc.map(function (d) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, d);
  }))), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-detail-details'],
    style: {
      backgroundColor: mainColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-detail-tags'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, tags.map(function (t) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, t);
  })), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, details)));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectDetailItem);

/***/ }),

/***/ "./pages/projects/Bamboo.tsx":
/*!***********************************!*\
  !*** ./pages/projects/Bamboo.tsx ***!
  \***********************************/
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

var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/pages/projects/Bamboo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];











var DESIGN_WIDTH = 1920;
var COMMON_STATIC_PATH = '/static/images/projectDetails/img';
var Info = {
  title: 'Bamboo Stool',
  desc: ['an exploration of bamboo craft', 'in modern aesthetic'],
  tags: ['Stool Design | Bamboo Craft | Personal Work in 4 weeks | Dec 2016 '],
  mainColor: '#587C62',
  details: 'Bamboo Stool is composed of three groups of repeating raw bamboo strips, exploring the aesthetics of bamboo’s physical properties. To keep the balance between aethetics of raw bamboo strips and the function of load-bearing, I created the special structure of the stool. The three stool legs and the upper surface formed two symmetrical triangles, and every bamboo strip is heated and bent to be crossed or connected with each other. During the handmaking process, Bamboo Stool only requires the same group of mould, according to the construction rule. And I tested dierent heating temperature, mould sizes and assembly\n' + 'methods to suit raw bamboo strip’s properties.',
  images: [{
    src: COMMON_STATIC_PATH + '2.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '2.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '2-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '2-preview.webp',
      type: 'image/webp'
    }],
    alt: 'String board'
  }]
};
var menuItems = [{
  key: 'Bamboo Stool',
  label: 'Bamboo Stool'
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
      lineNumber: 133
    },
    __self: this
  }, __jsx(_components_LayoutHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuItems: menuItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx(_components_ContentSwitcher__WEBPACK_IMPORTED_MODULE_5__["ContentSwitcher"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), __jsx(_components_Projects_ProjectDetail__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Info, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), __jsx(_components_LayoutHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuItems: menuItems,
    bodyStyle: {
      marginTop: '138rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  })) : null;
};

var Layout = function Layout() {
  return __jsx(_utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_4__["CurrentTabProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(InnerLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=Bamboo.js.71576c14d4d187616c51.hot-update.js.map