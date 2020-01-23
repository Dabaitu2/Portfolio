webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/hooks/useResizeCallback.ts":
/*!******************************************!*\
  !*** ./utils/hooks/useResizeCallback.ts ***!
  \******************************************/
/*! exports provided: useResizeCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResizeCallback", function() { return useResizeCallback; });
/* harmony import */ var _useComponentDidMount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useComponentDidMount */ "./utils/hooks/useComponentDidMount.ts");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);


var callback_queue = [];
var useResizeCallback = function useResizeCallback(fallBackHandler) {
  Object(_useComponentDidMount__WEBPACK_IMPORTED_MODULE_0__["useComponentDidMount"])(function () {
    window.onresize = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function (e) {
      if (e.target.innerWidth < 700) {
        fallBackHandler && fallBackHandler();
      }

      callback_queue.forEach(function (callback) {
        callback();
      });
    }, 800);
  });

  function addCallback(callback) {
    callback_queue.push(callback);
  }

  return {
    addCallback: addCallback
  };
};

/***/ })

})
//# sourceMappingURL=index.js.06abc8bb0dcb3340d7bb.hot-update.js.map