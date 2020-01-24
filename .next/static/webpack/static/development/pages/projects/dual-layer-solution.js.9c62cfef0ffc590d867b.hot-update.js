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

      Object(_utils_rgbaster__WEBPACK_IMPORTED_MODULE_4__["default"])(preview_src).then(function (value) {
        var colors = Object(_utils_rgbaster__WEBPACK_IMPORTED_MODULE_4__["analyze"])(value);

        if (colors[0]) {
          setBackGroundColor(colors[0].color);
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
var getImageData = function getImageData(src) {
  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) {
    var img = new Image();

    img.onload = function () {
      var width = img.width * scale;
      var height = img.height * scale;
      var context = getContext(width, height);
      context.drawImage(img, 0, 0, width, height);

      var _context$getImageData = context.getImageData(0, 0, width, height),
          data = _context$getImageData.data;

      resolve(data);
    };

    var errorHandler = function errorHandler() {
      return reject(new Error('An error occurred attempting to load image'));
    };

    img.onerror = errorHandler;
    img.onabort = errorHandler;
    img.src = src;
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

/***/ }),

/***/ "./utils/rgbaster/index.ts":
/*!*********************************!*\
  !*** ./utils/rgbaster/index.ts ***!
  \*********************************/
/*! exports provided: default, analyze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _callee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analyze", function() { return analyze; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper */ "./utils/rgbaster/helper.ts");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


var defaultOpts = {
  ignore: [],
  scale: 1
};
function _callee(src) {
  var opts,
      _opts,
      ignore,
      scale,
      _args = arguments;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          opts = _args.length > 1 && _args[1] !== undefined ? _args[1] : defaultOpts;
          opts = _objectSpread({}, defaultOpts, {}, opts);
          _opts = opts, ignore = _opts.ignore, scale = _opts.scale;

          if (scale > 1 || scale <= 0) {
            console.warn("You set scale to ".concat(scale, ", which isn't between 0-1. This is either pointless (> 1) or a no-op (\u2264 0)"));
          }

          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(Object(_helper__WEBPACK_IMPORTED_MODULE_8__["getImageData"])(src, scale));

        case 6:
          return _context.abrupt("return", _context.sent);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}
var analyze = function analyze(data) {
  return Object(_helper__WEBPACK_IMPORTED_MODULE_8__["getCounts"])(data, []);
};

/***/ })

})
//# sourceMappingURL=dual-layer-solution.js.9c62cfef0ffc590d867b.hot-update.js.map