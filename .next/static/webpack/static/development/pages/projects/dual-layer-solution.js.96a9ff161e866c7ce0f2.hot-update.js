webpackHotUpdate("static/development/pages/projects/dual-layer-solution.js",{

/***/ "./utils/rgbaster/helper.ts":
/*!**********************************!*\
  !*** ./utils/rgbaster/helper.ts ***!
  \**********************************/
/*! exports provided: getContext, getImageData, getCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageData", function() { return getImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCounts", function() { return getCounts; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);




var getContext = function getContext(width, height) {
  var canvas = document.createElement('canvas');
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  return canvas.getContext('2d');
};
var getImageData = function getImageData(img) {
  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) {
    img.onload = function () {
      var width = img.width * scale;
      var height = img.height * scale;
      var context = getContext(width, height);
      context.drawImage(img, 0, 0, width, height);

      var _context$getImageData = context.getImageData(0, 0, width, height),
          data = _context$getImageData.data;

      console.log(data);
      resolve(data);
    };

    var errorHandler = function errorHandler() {
      return reject(new Error('An error occurred attempting to load image'));
    };

    img.onerror = errorHandler;
    img.onabort = errorHandler;
  });
};
var getCounts = function getCounts(data, ignore) {
  var countMap = {};

  for (var i = 0; i < data.length; i += 4
  /* 4 gives us r, g, b, and a*/
  ) {
    var alpha = data[i + 3]; // skip FULLY transparent pixels

    if (alpha === 0) continue;

    var rgbComponents = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(data.subarray(i, i + 3)); // skip undefined data


    if (rgbComponents.indexOf(undefined) !== -1) continue;
    var color = alpha && alpha !== 255 ? "rgba(".concat([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(rgbComponents), [alpha]).join(','), ")") : "rgb(".concat(rgbComponents.join(','), ")"); // skip colors in the ignore list

    if (ignore.indexOf(color) !== -1) continue;

    if (countMap[color]) {
      countMap[color].count++;
    } else {
      countMap[color] = {
        color: color,
        count: 1
      };
    }
  }

  var counts = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(countMap);

  return counts.sort(function (a, b) {
    return b.count - a.count;
  });
};

/***/ })

})
//# sourceMappingURL=dual-layer-solution.js.96a9ff161e866c7ce0f2.hot-update.js.map