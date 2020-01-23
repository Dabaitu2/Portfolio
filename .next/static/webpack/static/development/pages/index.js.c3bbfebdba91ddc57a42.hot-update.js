webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/lodash/_Symbol.js":
false,

/***/ "./node_modules/lodash/_baseGetTag.js":
false,

/***/ "./node_modules/lodash/_freeGlobal.js":
false,

/***/ "./node_modules/lodash/_getRawTag.js":
false,

/***/ "./node_modules/lodash/_objectToString.js":
false,

/***/ "./node_modules/lodash/_root.js":
false,

/***/ "./node_modules/lodash/debounce.js":
false,

/***/ "./node_modules/lodash/isObject.js":
false,

/***/ "./node_modules/lodash/isObjectLike.js":
false,

/***/ "./node_modules/lodash/isSymbol.js":
false,

/***/ "./node_modules/lodash/now.js":
false,

/***/ "./node_modules/lodash/toNumber.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

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

var callback_queue = [];
var useResizeCallback = function useResizeCallback(fallBackHandler) {
  Object(_useComponentDidMount__WEBPACK_IMPORTED_MODULE_0__["useComponentDidMount"])(function () {
    window.onresize = function (e) {
      var width = e.target.innerWidth;

      if (width < 768) {
        fallBackHandler && fallBackHandler();
        return;
      }

      callback_queue.forEach(function (callback) {
        callback();
      });
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
//# sourceMappingURL=index.js.c3bbfebdba91ddc57a42.hot-update.js.map