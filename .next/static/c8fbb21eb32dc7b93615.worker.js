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
/* harmony import */ var rgbaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rgbaster */ "./node_modules/rgbaster/dist/rgbaster.umd.js");
/* harmony import */ var rgbaster__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rgbaster__WEBPACK_IMPORTED_MODULE_0__);
// @ts-ignore


onmessage = function onmessage(e) {
  console.log('Worker received:', e.data);

  if (true) {
    rgbaster__WEBPACK_IMPORTED_MODULE_0___default()(e.data).then(function (value) {
      if (value[0]) {
        // @ts-ignore
        postMessage(value[0]);
      }
    })["catch"](function (err) {
      return console.log(err);
    });
    console.log('I am on browser');
  }
};

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

/******/ });
//# sourceMappingURL=c8fbb21eb32dc7b93615.worker.js.map