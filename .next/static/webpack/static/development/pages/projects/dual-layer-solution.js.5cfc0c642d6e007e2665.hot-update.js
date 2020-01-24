webpackHotUpdate("static/development/pages/projects/dual-layer-solution.js",{

/***/ "./components/Projects/AutoBackGroundColorSliderPage/index.tsx":
/*!*********************************************************************!*\
  !*** ./components/Projects/AutoBackGroundColorSliderPage/index.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/hooks/useComponentDidMount */ "./utils/hooks/useComponentDidMount.ts");
/* harmony import */ var worker_loader_name_static_hash_worker_js_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! worker-loader?name=static/[hash].worker.js!../../../utils/workers/findMainTheme.worker */ "./node_modules/worker-loader/dist/cjs.js?name=static/[hash].worker.js!./utils/workers/findMainTheme.worker.ts");
/* harmony import */ var worker_loader_name_static_hash_worker_js_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(worker_loader_name_static_hash_worker_js_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_rgbaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/rgbaster */ "./utils/rgbaster/index.ts");

var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Projects/AutoBackGroundColorSliderPage/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // @ts-ignore




var AutoBackGroundColorSliderPage = function AutoBackGroundColorSliderPage(props) {
  var src = props.src,
      alt = props.alt,
      preview_src = props.preview_src;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('#ffffff'),
      backgroundColor = _useState[0],
      setBackGroundColor = _useState[1];

  Object(_utils_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_2__["useComponentDidMount"])(function () {
    var img = new Image();
    img.src = preview_src;

    img.onload = function () {
      var worker = new worker_loader_name_static_hash_worker_js_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_3___default.a();
      worker.postMessage(src);

      worker.onmessage = function (e) {
        console.log(e);
        console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(e));
      };

      Object(_utils_rgbaster__WEBPACK_IMPORTED_MODULE_4__["default"])(preview_src, img) // analyze(src)
      .then(function (value) {
        if (value[0]) {
          setBackGroundColor(value[0].color);
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    };
  });
  return __jsx("div", {
    className: 'section',
    style: {
      backgroundColor: backgroundColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    src: src,
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AutoBackGroundColorSliderPage);

/***/ }),

/***/ "./pages/projects/dual-layer-solution.tsx":
/*!************************************************!*\
  !*** ./pages/projects/dual-layer-solution.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dual_layer_solution_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dual-layer-solution.less */ "./pages/projects/dual-layer-solution.less");
/* harmony import */ var _dual_layer_solution_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dual_layer_solution_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Projects_AutoBackGroundColorSliderPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Projects/AutoBackGroundColorSliderPage */ "./components/Projects/AutoBackGroundColorSliderPage/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/pages/projects/dual-layer-solution.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var DualLayerSolution = function DualLayerSolution(props) {
  return __jsx("div", {
    className: _dual_layer_solution_less__WEBPACK_IMPORTED_MODULE_1___default.a['solution-layout'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default.a //fullpage options
  , {
    licenseKey: 'YOUR_KEY_HERE',
    navigation: true,
    scrollingSpeed: 600
    /* Options here */
    ,
    render: function render() {
      return __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default.a.Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx(_components_Projects_AutoBackGroundColorSliderPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        preview_src: '/static/images/dualLayerSolution/1-preview.jpg',
        src: '/static/images/dualLayerSolution/1.jpg',
        alt: 'slide1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), __jsx(_components_Projects_AutoBackGroundColorSliderPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        preview_src: '/static/images/dualLayerSolution/2-preview.jpg',
        src: '/static/images/dualLayerSolution/2.jpg',
        alt: 'slide2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DualLayerSolution);

/***/ })

})
//# sourceMappingURL=dual-layer-solution.js.5cfc0c642d6e007e2665.hot-update.js.map