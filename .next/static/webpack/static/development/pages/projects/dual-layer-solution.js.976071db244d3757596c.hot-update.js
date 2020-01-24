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
/* harmony import */ var worker_loader_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! worker-loader!../../../utils/workers/findMainTheme.worker */ "./node_modules/worker-loader/dist/cjs.js!./utils/workers/findMainTheme.worker.ts");
/* harmony import */ var worker_loader_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(worker_loader_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Projects/AutoBackGroundColorSliderPage/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // @ts-ignore



var AutoBackGroundColorSliderPage = function AutoBackGroundColorSliderPage(props) {
  var src = props.src,
      alt = props.alt;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('#ffffff'),
      backgroundColor = _useState[0],
      setBackGroundColor = _useState[1];

  Object(_utils_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_2__["useComponentDidMount"])(function () {
    var img = new Image();
    img.src = src;

    img.onload = function () {
      console.log(worker_loader_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_3___default.a);
      var worker = new worker_loader_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_3___default.a();
      worker.postMessage('Hi! From Host');

      worker.onmessage = function (e) {
        console.log(e);
        console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(e));
      }; // analyze(src)
      //   .then(value => {
      //     if (value[0]) {
      //       setBackGroundColor(value[0].color);
      //     }
      //   })
      //   .catch(err => null);

    };
  });
  return __jsx("div", {
    className: 'section',
    style: {
      backgroundColor: backgroundColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("img", {
    src: src,
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AutoBackGroundColorSliderPage);

/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js!./utils/workers/findMainTheme.worker.ts":
/*!****************************************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js!./utils/workers/findMainTheme.worker.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "4987656aeae0ba427a19.worker.js");
};

/***/ }),

/***/ "./utils/workers/findMainTheme.worker.ts":
false

})
//# sourceMappingURL=dual-layer-solution.js.976071db244d3757596c.hot-update.js.map