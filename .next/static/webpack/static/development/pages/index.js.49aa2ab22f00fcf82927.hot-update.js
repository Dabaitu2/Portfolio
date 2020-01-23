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
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);


var callback_queue = [];
var useResizeCallback = function useResizeCallback(fallBackHandler) {
  Object(_useComponentDidMount__WEBPACK_IMPORTED_MODULE_0__["useComponentDidMount"])(function () {
    window.onresize = function (e) {
      var width = e.target.innerWidth;
      return lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        if (width < 768) {
          fallBackHandler && fallBackHandler();
          return;
        }

        callback_queue.forEach(function (callback) {
          callback();
        });
      }, 400)();
    };
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
//# sourceMappingURL=index.js.49aa2ab22f00fcf82927.hot-update.js.map