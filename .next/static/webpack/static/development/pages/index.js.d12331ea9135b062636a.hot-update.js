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

  return __jsx("div", {
    style: {
      width: '1600px',
      overflowX: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '3200px',
      display: 'flex',
      transform: "translateX(-".concat(currentTab * 1600, "px)"),
      transition: '0.6s ease-in-out'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.children));
};

/***/ })

})
//# sourceMappingURL=index.js.d12331ea9135b062636a.hot-update.js.map