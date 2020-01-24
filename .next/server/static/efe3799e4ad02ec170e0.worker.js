/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js?!./utils/workers/findMainTheme.worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js?!./utils/workers/findMainTheme.worker.ts":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js??ref--4!./utils/workers/findMainTheme.worker.ts ***!
  \***************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rgbaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rgbaster */ "./node_modules/rgbaster/dist/rgbaster.js");
/* harmony import */ var rgbaster__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rgbaster__WEBPACK_IMPORTED_MODULE_0__);
// @ts-ignore


onmessage = e => {
  console.log('Worker received:', e.data);

  if (false) {}
};

/***/ }),

/***/ "./node_modules/rgbaster/dist/rgbaster.js":
/*!************************************************!*\
  !*** ./node_modules/rgbaster/dist/rgbaster.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var getContext = function (width, height) {
  var canvas = document.createElement('canvas');
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  return canvas.getContext('2d');
};
var getImageData = function (src, scale) {
  if ( scale === void 0 ) scale = 1;

  var img = new Image();
  if (!src.startsWith('data')) { img.crossOrigin = 'Anonymous'; }
  return new Promise(function (resolve, reject) {
    img.onload = function () {
      var width = img.width * scale;
      var height = img.height * scale;
      var context = getContext(width, height);
      context.drawImage(img, 0, 0, width, height);
      var ref = context.getImageData(0, 0, width, height);
      var data = ref.data;
      resolve(data);
    };

    var errorHandler = function () { return reject(new Error('An error occurred attempting to load image')); };

    img.onerror = errorHandler;
    img.onabort = errorHandler;
    img.src = src;
  });
};
var getCounts = function (data, ignore) {
  var countMap = {};

  for (var i = 0; i < data.length; i += 4) {
    var alpha = data[i + 3];
    if (alpha === 0) { continue; }
    var rgbComponents = Array.from(data.subarray(i, i + 3));
    if (rgbComponents.indexOf(undefined) !== -1) { continue; }
    var color = alpha && alpha !== 255 ? ("rgba(" + (rgbComponents.concat( [alpha]).join(',')) + ")") : ("rgb(" + (rgbComponents.join(',')) + ")");
    if (ignore.indexOf(color) !== -1) { continue; }

    if (countMap[color]) {
      countMap[color].count++;
    } else {
      countMap[color] = {
        color: color,
        count: 1
      };
    }
  }

  var counts = Object.values(countMap);
  return counts.sort(function (a, b) { return b.count - a.count; });
};

var defaultOpts = {
  ignore: [],
  scale: 1
};
var index = (function (src, opts) {
  if ( opts === void 0 ) opts = defaultOpts;

  try {
    opts = Object.assign({}, defaultOpts,
      opts);
    var ignore = opts.ignore;
    var scale = opts.scale;

    if (scale > 1 || scale <= 0) {
      console.warn(("You set scale to " + scale + ", which isn't between 0-1. This is either pointless (> 1) or a no-op (≤ 0)"));
    }

    return Promise.resolve(getImageData(src, scale)).then(function (data) {
      return getCounts(data, ignore);
    });
  } catch (e) {
    return Promise.reject(e);
  }
});

module.exports = index;


/***/ })

/******/ });
//# sourceMappingURL=efe3799e4ad02ec170e0.worker.js.map