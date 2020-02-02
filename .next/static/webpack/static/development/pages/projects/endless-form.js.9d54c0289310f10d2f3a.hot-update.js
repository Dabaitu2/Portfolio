webpackHotUpdate("static/development/pages/projects/endless-form.js",{

/***/ "./components/Projects/ProjectIndexItem/index.tsx":
/*!********************************************************!*\
  !*** ./components/Projects/ProjectIndexItem/index.tsx ***!
  \********************************************************/
/*! exports provided: ProjectIndexItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectIndexItem", function() { return ProjectIndexItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.less */ "./components/Projects/ProjectIndexItem/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/LazyLoadImg */ "./components/common/LazyLoadImg/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Projects/ProjectIndexItem/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var ProjectIndexItem = function ProjectIndexItem(props) {
  var images = props.images,
      title = props.title,
      desc = props.desc,
      tags = props.tags,
      href = props.href;
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-index-item'],
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/projects/' + href);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-index-title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, title), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-index-subtitle'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, desc.map(function (d) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, d);
  }))), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-images'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, images.map(function (image) {
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, image, {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['project-image'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }));
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectIndexItem);

/***/ }),

/***/ "./components/Projects/index.tsx":
/*!***************************************!*\
  !*** ./components/Projects/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.less */ "./components/Projects/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProjectIndexItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectIndexItem */ "./components/Projects/ProjectIndexItem/index.tsx");

var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Projects/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var COMMON_STATIC_PATH = '/static/images/projectIndex/';
var PROJECT_INFO = [{
  title: 'Stringboard',
  desc: ['an input tool and', 'an electronic instrument'],
  tags: ['Integrated product development'],
  href: 'string-board',
  images: [{
    src: COMMON_STATIC_PATH + '1.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '1.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '1-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '1-preview.webp',
      type: 'image/webp'
    }],
    alt: 'String board'
  }, {
    src: COMMON_STATIC_PATH + '2.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '2.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '2-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '2-preview.webp',
      type: 'image/webp'
    }],
    alt: 'String board'
  }]
}, {
  title: 'EndlessForm',
  href: 'endless-form',
  desc: ['a digital creator and designer', 'based on ACO algorithm study'],
  tags: ['Creative Digital Product'],
  images: [{
    src: COMMON_STATIC_PATH + '3.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '3.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '3-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '3-preview.webp',
      type: 'image/webp'
    }],
    alt: 'String board'
  }, {
    src: COMMON_STATIC_PATH + '4.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '4.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '4-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '4-preview.webp',
      type: 'image/webp'
    }],
    alt: 'Endless Form'
  }]
}, {
  title: 'EMO',
  href: 'emo',
  desc: ['a programming education robot and', 'an online education platform'],
  tags: ['Integrated product development'],
  images: [{
    src: COMMON_STATIC_PATH + '5.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '5.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '5-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '5-preview.webp',
      type: 'image/webp'
    }],
    alt: 'EMO'
  }, {
    src: COMMON_STATIC_PATH + '6.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '6.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '6-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '6-preview.webp',
      type: 'image/webp'
    }],
    alt: 'EMO'
  }]
}, {
  title: 'xixi4rhino',
  href: 'xixi4rhino',
  desc: ['a website for rhino protection', 'by impacting potential consumers directly'],
  tags: ['Sustainable Consciousness'],
  images: [{
    src: COMMON_STATIC_PATH + '7.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '7.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '7-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '7-preview.webp',
      type: 'image/webp'
    }],
    alt: 'String board'
  }, {
    src: COMMON_STATIC_PATH + '8.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '8.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '8-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '8-preview.webp',
      type: 'image/webp'
    }],
    alt: 'String board'
  }]
}, {
  title: 'Flyro',
  href: 'flyro',
  desc: ['an inspiring spinning and', 'a mobile free zone'],
  tags: ['Integrated Product development'],
  images: [{
    src: COMMON_STATIC_PATH + '9.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '9.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '9-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '9-preview.webp',
      type: 'image/webp'
    }],
    alt: 'Flyro'
  }, {
    src: COMMON_STATIC_PATH + '10.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '10.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '10-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '10-preview.webp',
      type: 'image/webp'
    }],
    alt: 'Flyro'
  }]
}, {
  title: 'Dual-layer Solution',
  href: 'dual-layer',
  desc: ['a solution for closing the loop', 'on plastic food packaging'],
  tags: ['Sustainable Consciousness'],
  images: [{
    src: COMMON_STATIC_PATH + '11.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '11.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '11-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '11-preview.webp',
      type: 'image/webp'
    }],
    alt: 'String board'
  }, {
    src: COMMON_STATIC_PATH + '12.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '12.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '12-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '12-preview.webp',
      type: 'image/webp'
    }],
    alt: 'String board'
  }]
}, {
  title: 'Bamboo Stool',
  href: 'bamboo',
  desc: ['an exploration of bamboo craft', 'in modern aesthetic'],
  tags: ['Integrated product development'],
  images: [{
    src: COMMON_STATIC_PATH + '13.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '13.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '13-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '13-preview.webp',
      type: 'image/webp'
    }],
    alt: 'String board'
  }, {
    src: COMMON_STATIC_PATH + '14.jpg',
    sources: [{
      src: COMMON_STATIC_PATH + '14.webp',
      type: 'image/webp'
    }],
    preview_src: COMMON_STATIC_PATH + '14-preview.jpg',
    preview_sources: [{
      src: COMMON_STATIC_PATH + '14-preview.webp',
      type: 'image/webp'
    }],
    alt: 'String board'
  }]
}].map(function (p) {
  p.mainColor = '#000';
  return p;
});

var Projects = function Projects(props) {
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_2___default.a['main'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, PROJECT_INFO.map(function (info) {
    return __jsx(_ProjectIndexItem__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, info, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=endless-form.js.9d54c0289310f10d2f3a.hot-update.js.map