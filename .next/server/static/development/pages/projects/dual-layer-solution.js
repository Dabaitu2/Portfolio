module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Projects/AutoBackGroundColorSliderPage/index.tsx":
/*!*********************************************************************!*\
  !*** ./components/Projects/AutoBackGroundColorSliderPage/index.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/hooks/useComponentDidMount */ "./utils/hooks/useComponentDidMount.ts");
/* harmony import */ var worker_loader_name_static_hash_worker_js_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! worker-loader?name=static/[hash].worker.js!../../../utils/workers/findMainTheme.worker */ "./node_modules/worker-loader/dist/cjs.js?name=static/[hash].worker.js!./utils/workers/findMainTheme.worker.ts");
/* harmony import */ var worker_loader_name_static_hash_worker_js_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(worker_loader_name_static_hash_worker_js_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_rgbaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/rgbaster */ "./utils/rgbaster/index.ts");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Projects/AutoBackGroundColorSliderPage/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // @ts-ignore




const AutoBackGroundColorSliderPage = props => {
  const {
    src,
    alt,
    preview_src
  } = props;
  const {
    0: backgroundColor,
    1: setBackGroundColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('#e2e2e2');
  Object(_utils_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_1__["useComponentDidMount"])(() => {
    const img = new Image();
    img.src = preview_src;

    img.onload = () => {
      Object(_utils_rgbaster__WEBPACK_IMPORTED_MODULE_3__["default"])(preview_src).then(value => {
        const worker = new worker_loader_name_static_hash_worker_js_utils_workers_findMainTheme_worker__WEBPACK_IMPORTED_MODULE_2___default.a();
        worker.postMessage(value);

        worker.onmessage = e => {
          setBackGroundColor(e.data);
        };
      }).catch(err => console.log(err));
    };
  });
  return __jsx("div", {
    className: 'section',
    style: {
      backgroundColor: backgroundColor,
      transition: '0.6s ease-in-out'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("img", {
    src: src,
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AutoBackGroundColorSliderPage);

/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js?name=static/[hash].worker.js!./utils/workers/findMainTheme.worker.ts":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js?name=static/[hash].worker.js!./utils/workers/findMainTheme.worker.ts ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "static/4ae0bce01368b32cc717.worker.js");
};

/***/ }),

/***/ "./pages/projects/dual-layer-solution.less":
/*!*************************************************!*\
  !*** ./pages/projects/dual-layer-solution.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main-color": "main-color___2AbCi",
	"split-line-color": "split-line-color___2wupk",
	"layout": "layout___l-LZX",
	"solution-layout": "solution-layout___FSfQa"
};

/***/ }),

/***/ "./pages/projects/dual-layer-solution.tsx":
/*!************************************************!*\
  !*** ./pages/projects/dual-layer-solution.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dual_layer_solution_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dual-layer-solution.less */ "./pages/projects/dual-layer-solution.less");
/* harmony import */ var _dual_layer_solution_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dual_layer_solution_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullpage/react-fullpage */ "@fullpage/react-fullpage");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Projects_AutoBackGroundColorSliderPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Projects/AutoBackGroundColorSliderPage */ "./components/Projects/AutoBackGroundColorSliderPage/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/pages/projects/dual-layer-solution.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const DualLayerSolution = props => {
  return __jsx("div", {
    className: _dual_layer_solution_less__WEBPACK_IMPORTED_MODULE_1___default.a['solution-layout'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default.a //fullpage options
  , {
    licenseKey: 'YOUR_KEY_HERE',
    navigation: true,
    scrollingSpeed: 600
    /* Options here */
    ,
    render: () => {
      return __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default.a.Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: undefined
      }, __jsx(_components_Projects_AutoBackGroundColorSliderPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        preview_src: '/static/images/dualLayerSolution/1-preview.jpg',
        src: '/static/images/dualLayerSolution/1.jpg',
        alt: 'slide1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: undefined
      }), __jsx(_components_Projects_AutoBackGroundColorSliderPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        preview_src: '/static/images/dualLayerSolution/2-preview.jpg',
        src: '/static/images/dualLayerSolution/2.jpg',
        alt: 'slide2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: undefined
      }), __jsx(_components_Projects_AutoBackGroundColorSliderPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        preview_src: '/static/images/dualLayerSolution/3-preview.jpg',
        src: '/static/images/dualLayerSolution/3.jpg',
        alt: 'slide3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: undefined
      }), __jsx(_components_Projects_AutoBackGroundColorSliderPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        preview_src: '/static/images/dualLayerSolution/4-preview.jpg',
        src: '/static/images/dualLayerSolution/4.jpg',
        alt: 'slide4',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: undefined
      }), __jsx(_components_Projects_AutoBackGroundColorSliderPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        preview_src: '/static/images/dualLayerSolution/5-preview.jpg',
        src: '/static/images/dualLayerSolution/5.jpg',
        alt: 'slide5',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: undefined
      }), __jsx(_components_Projects_AutoBackGroundColorSliderPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        preview_src: '/static/images/dualLayerSolution/6-preview.jpg',
        src: '/static/images/dualLayerSolution/6.jpg',
        alt: 'slide6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: undefined
      }), __jsx(_components_Projects_AutoBackGroundColorSliderPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        preview_src: '/static/images/dualLayerSolution/7-preview.jpg',
        src: '/static/images/dualLayerSolution/7.jpg',
        alt: 'slide7',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: undefined
      }), __jsx(_components_Projects_AutoBackGroundColorSliderPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        preview_src: '/static/images/dualLayerSolution/8-preview.jpg',
        src: '/static/images/dualLayerSolution/8.jpg',
        alt: 'slide8',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: undefined
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DualLayerSolution);

/***/ }),

/***/ "./utils/hooks/useComponentDidMount.ts":
/*!*********************************************!*\
  !*** ./utils/hooks/useComponentDidMount.ts ***!
  \*********************************************/
/*! exports provided: useComponentDidMount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComponentDidMount", function() { return useComponentDidMount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useComponentDidMount = (handler, postHandler) => {
  const {
    0: firstLoaded,
    1: setFirstLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: IsDone,
    1: setIsDone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!firstLoaded) {
      setFirstLoaded(true);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (firstLoaded) {
      handler();
      setIsDone(true);
      return postHandler ? () => postHandler() : () => null;
    }

    return;
  }, [firstLoaded]);
  return {
    firstLoaded,
    IsDone,
    setIsDone
  };
};

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
const getContext = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  return canvas.getContext('2d');
};
const getImageData = (src, scale = 1) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = function () {
      const width = img.width * scale;
      const height = img.height * scale;
      const context = getContext(width, height);
      context.drawImage(img, 0, 0, width, height);
      const {
        data
      } = context.getImageData(0, 0, width, height);
      resolve(data);
    };

    const errorHandler = () => reject(new Error('An error occurred attempting to load image'));

    img.onerror = errorHandler;
    img.onabort = errorHandler;
    img.src = src;
  });
};
const getCounts = (data, ignore) => {
  const countMap = {};

  for (let i = 0; i < data.length; i += 4
  /* 4 gives us r, g, b, and a*/
  ) {
    let alpha = data[i + 3]; // skip FULLY transparent pixels

    if (alpha === 0) continue;
    let rgbComponents = Array.from(data.subarray(i, i + 3)); // skip undefined data

    if (rgbComponents.indexOf(undefined) !== -1) continue;
    let color = alpha && alpha !== 255 ? `rgba(${[...rgbComponents, alpha].join(',')})` : `rgb(${rgbComponents.join(',')})`; // skip colors in the ignore list

    if (ignore.indexOf(color) !== -1) continue;

    if (countMap[color]) {
      countMap[color].count++;
    } else {
      countMap[color] = {
        color,
        count: 1
      };
    }
  }

  const counts = Object.values(countMap);
  return counts.sort((a, b) => b.count - a.count);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analyze", function() { return analyze; });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./utils/rgbaster/helper.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultOpts = {
  ignore: [],
  scale: 1
};
/* harmony default export */ __webpack_exports__["default"] = (async function (src, opts = defaultOpts) {
  opts = _objectSpread({}, defaultOpts, {}, opts);
  const {
    ignore,
    // for example, to ignore white and black:  [ 'rgb(0,0,0)', 'rgb(255,255,255)' ]
    scale // 0 = best performance, lowest fidelity
    // 1 = best fidelity, worst performance

  } = opts;

  if (scale > 1 || scale <= 0) {
    console.warn(`You set scale to ${scale}, which isn't between 0-1. This is either pointless (> 1) or a no-op (≤ 0)`);
  }

  return await Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getImageData"])(src, scale);
});
const analyze = data => {
  return Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getCounts"])(data, []);
};

/***/ }),

/***/ 4:
/*!******************************************************!*\
  !*** multi ./pages/projects/dual-layer-solution.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tomokokawase/Desktop/Portfolio/pages/projects/dual-layer-solution.tsx */"./pages/projects/dual-layer-solution.tsx");


/***/ }),

/***/ "@fullpage/react-fullpage":
/*!*******************************************!*\
  !*** external "@fullpage/react-fullpage" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fullpage/react-fullpage");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=dual-layer-solution.js.map