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
/* harmony import */ var rgbaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rgbaster */ "./node_modules/rgbaster/dist/rgbaster.umd.js");
/* harmony import */ var rgbaster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rgbaster__WEBPACK_IMPORTED_MODULE_4__);

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
      console.log(worker_loader_name_static_hash_worker_js_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_3___default.a);
      var worker = new worker_loader_name_static_hash_worker_js_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_3___default.a();
      worker.postMessage('Hi! From Host');

      worker.onmessage = function (e) {
        console.log(e);
        console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(e));
      };

      rgbaster__WEBPACK_IMPORTED_MODULE_4___default()(img) // analyze(src)
      .then(function (value) {
        if (value[0]) {
          setBackGroundColor(value[0].color);
        }
      })["catch"](function (err) {
        return null;
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

/***/ "./node_modules/rgbaster/dist/rgbaster.umd.js":
/*!****************************************************!*\
  !*** ./node_modules/rgbaster/dist/rgbaster.umd.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){var e=function(e,t){void 0===t&&(t=1);var r=new Image;return e.startsWith("data")||(r.crossOrigin="Anonymous"),new Promise(function(n,o){r.onload=function(){var e=r.width*t,o=r.height*t,i=function(e,t){var r=document.createElement("canvas");return r.setAttribute("width",e),r.setAttribute("height",t),r.getContext("2d")}(e,o);i.drawImage(r,0,0,e,o);var a=i.getImageData(0,0,e,o);n(a.data)};var i=function(){return o(new Error("An error occurred attempting to load image"))};r.onerror=i,r.onabort=i,r.src=e})},t={ignore:[],scale:1};return function(r,n){void 0===n&&(n=t);try{var o=(n=Object.assign({},t,n)).ignore,i=n.scale;return(i>1||i<=0)&&console.warn("You set scale to "+i+", which isn't between 0-1. This is either pointless (> 1) or a no-op (≤ 0)"),Promise.resolve(e(r,i)).then(function(e){return function(e,t){for(var r={},n=0;n<e.length;n+=4){var o=e[n+3];if(0!==o){var i=Array.from(e.subarray(n,n+3));if(-1===i.indexOf(void 0)){var a=o&&255!==o?"rgba("+i.concat([o]).join(",")+")":"rgb("+i.join(",")+")";-1===t.indexOf(a)&&(r[a]?r[a].count++:r[a]={color:a,count:1})}}}return Object.values(r).sort(function(e,t){return t.count-e.count})}(e,o)})}catch(e){return Promise.reject(e)}}});
//# sourceMappingURL=rgbaster.umd.js.map


/***/ })

})
//# sourceMappingURL=dual-layer-solution.js.1ae843c63041a5c174d9.hot-update.js.map