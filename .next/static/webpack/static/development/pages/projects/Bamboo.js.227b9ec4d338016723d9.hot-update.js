webpackHotUpdate("static/development/pages/projects/Bamboo.js",{

/***/ "./components/Projects/ProjectDetail/index.tsx":
/*!*****************************************************!*\
  !*** ./components/Projects/ProjectDetail/index.tsx ***!
  \*****************************************************/
/*! exports provided: ProjectDetailItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailItem", function() { return ProjectDetailItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.less */ "./components/Projects/ProjectDetail/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/LazyLoadImg */ "./components/common/LazyLoadImg/index.tsx");

var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Projects/ProjectDetail/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var ProjectDetailItem = function ProjectDetailItem(props) {
  var images = props.images,
      title = props.title,
      desc = props.desc,
      tags = props.tags,
      details = props.details,
      mainColor = props.mainColor;
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-detail-item'],
    style: {
      color: mainColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-detail-images'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, images.map(function (image) {
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, image, {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-detail-image'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-detail-title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, title), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-detail-subtitle'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, desc.map(function (d) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, d);
  }))), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-detail-details'],
    style: {
      backgroundColor: mainColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-detail-tags'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, tags.map(function (t) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "#", t);
  })), details));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectDetailItem);

/***/ })

})
//# sourceMappingURL=Bamboo.js.227b9ec4d338016723d9.hot-update.js.map