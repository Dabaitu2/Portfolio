webpackHotUpdate("static/development/pages/projects/endless-form.js",{

/***/ "./components/Projects/ProjectDetail/index.tsx":
/*!*****************************************************!*\
  !*** ./components/Projects/ProjectDetail/index.tsx ***!
  \*****************************************************/
/*! exports provided: ProjectDetailItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailItem", function() { return ProjectDetailItem; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.less */ "./components/Projects/ProjectDetail/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/LazyLoadImg */ "./components/common/LazyLoadImg/index.tsx");


var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Projects/ProjectDetail/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var ProjectDetailItem = function ProjectDetailItem(props) {
  var images = props.images,
      title = props.title,
      desc = props.desc,
      tags = props.tags,
      details = props.details,
      mainColor = props.mainColor,
      detail_images_meta = props.detail_images_meta,
      video = props.video,
      affix_image_meta = props.affix_image_meta;
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-item'],
    style: {
      color: mainColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-images'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, images.map(function (image) {
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, image, {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-image'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }));
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, title), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-subtitle'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, desc.map(function (d) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, d);
  }))), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-details'],
    style: {
      backgroundColor: mainColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-tags'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, tags.map(function (t) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, t);
  })), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, details)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()({
    length: detail_images_meta.num
  }).map(function (_, i) {
    if (i === 0) {
      return;
    }

    var common_file = detail_images_meta.dir + '/' + (i + 1).toString();
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_4__["default"], {
      src: common_file + '.jpg',
      sources: [{
        type: 'image/webp',
        src: common_file + '.webp'
      }],
      preview_src: common_file + '-preview.jpg',
      preview_sources: [{
        type: 'image/webp',
        src: common_file + '-preview.webp'
      }],
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-details-images'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    });
  }), video ? video.map(function (v) {
    return __jsx("video", {
      src: v.src,
      autoPlay: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    });
  }) : null, affix_image_meta ? _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()({
    length: affix_image_meta.num
  }).map(function (_, i) {
    if (i === 0) {
      return;
    }

    var common_file = affix_image_meta.dir + '/' + (detail_images_meta.num + i + 1).toString();
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_4__["default"], {
      src: common_file + '.jpg',
      sources: [{
        type: 'image/webp',
        src: common_file + '.webp'
      }],
      preview_src: common_file + '-preview.jpg',
      preview_sources: [{
        type: 'image/webp',
        src: common_file + '-preview.webp'
      }],
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_3___default.a['project-detail-details-images'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    });
  }) : null));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectDetailItem);

/***/ })

})
//# sourceMappingURL=endless-form.js.4fe3c23e8c30d839d2e1.hot-update.js.map