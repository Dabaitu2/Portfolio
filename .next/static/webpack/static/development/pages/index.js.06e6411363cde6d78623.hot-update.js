webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ContentSwitcher/index.tsx":
/*!**********************************************!*\
  !*** ./components/ContentSwitcher/index.tsx ***!
  \**********************************************/
/*! exports provided: ContentSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSwitcher", function() { return ContentSwitcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/hooks/useCurrentTab */ "./utils/hooks/useCurrentTab.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/ContentSwitcher/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ContentSwitcher = function ContentSwitcher(props) {
  var _useCurrentTab = Object(_utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_1__["useCurrentTab"])(),
      currentTab = _useCurrentTab.state.currentTab.currentTab;

  console.log(currentTab);
  return __jsx("div", {
    style: {
      width: '4800rem',
      overflowX: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: props.children.length * 1600 + 'rem',
      display: 'flex',
      transform: "translateX(-".concat(currentTab * 1600, "rem)"),
      transition: '0.6s ease-in-out'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.children ? props.children.map(function (c, i) {
    return __jsx("div", {
      style: {
        // width:  i === currentTab ? '1600rem' : 0,
        height: i === currentTab ? '100%' : '0',
        overflow: 'hidden',
        transition: '0.6s ease-in-out'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, c);
  }) : null));
};

/***/ })

})
//# sourceMappingURL=index.js.06e6411363cde6d78623.hot-update.js.map