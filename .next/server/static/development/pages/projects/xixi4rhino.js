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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ContentSwitcher/index.tsx":
/*!**********************************************!*\
  !*** ./components/ContentSwitcher/index.tsx ***!
  \**********************************************/
/*! exports provided: ContentSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSwitcher", function() { return ContentSwitcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/hooks/useCurrentTab */ "./utils/hooks/useCurrentTab.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/ContentSwitcher/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ContentSwitcher = props => {
  const {
    state: {
      currentTab: {
        currentTab
      }
    }
  } = Object(_utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_1__["useCurrentTab"])();
  return __jsx("div", {
    style: {
      width: '1600rem',
      overflowX: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      width: props.children.length * 1600 + 'rem',
      display: 'flex',
      transform: `translateX(-${currentTab * 1600}rem)`,
      transition: '0.6s ease-in-out'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, props.children ? props.children.map((c, i) => __jsx("div", {
    style: {
      width: '1600rem',
      height: i === currentTab ? '100%' : '0',
      overflow: 'hidden',
      transition: '0.6s ease-in-out'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, c)) : null));
};

/***/ }),

/***/ "./components/LayoutHeader/index.module.less":
/*!***************************************************!*\
  !*** ./components/LayoutHeader/index.module.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main-color": "main-color___1ATyE",
	"split-line-color": "split-line-color___9hkSs",
	"layout-menu-container": "layout-menu-container___11U8b",
	"layout-menu-item": "layout-menu-item___zoOMp",
	"layout-slider": "layout-slider___15Qhc",
	"layout-slider-line": "layout-slider-line___JbK2f",
	"layout-slider-dot": "layout-slider-dot___2OqTm",
	"animated": "animated___3Ynd9"
};

/***/ }),

/***/ "./components/LayoutHeader/index.tsx":
/*!*******************************************!*\
  !*** ./components/LayoutHeader/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/LayoutHeader/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/hooks/useCurrentTab */ "./utils/hooks/useCurrentTab.tsx");
/* harmony import */ var _utils_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/hooks/useComponentDidMount */ "./utils/hooks/useComponentDidMount.ts");
/* harmony import */ var _utils_hooks_useResizeCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/hooks/useResizeCallback */ "./utils/hooks/useResizeCallback.ts");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/LayoutHeader/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MenuItems = [{
  key: 'aboutMe',
  label: 'About Me'
}, {
  key: 'projects',
  label: 'Projects'
}];
/**
 * React-Hooks is much more powerful than you thought
 * @constructor
 */

const LayoutHeader = props => {
  var _props$bodyStyle;

  const {
    state: {
      currentTab: {
        currentTab
      },
      scale: {
        scale
      }
    },
    actions: {
      setCurrentTab
    }
  } = Object(_utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_2__["useCurrentTab"])(); // 设置小圆点的位置

  const {
    0: dotX,
    1: setDotX
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const bodyWidth = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const _MenuItems = [MenuItems[0]].concat(props.menuItems || []).concat(MenuItems[1]).map(item => _objectSpread({}, item, {
    ref: react__WEBPACK_IMPORTED_MODULE_0__["useRef"]()
  }));

  const {
    addCallback
  } = Object(_utils_hooks_useResizeCallback__WEBPACK_IMPORTED_MODULE_4__["useResizeCallback"])();
  const {
    IsDone
  } = Object(_utils_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_3__["useComponentDidMount"])(() => {
    bodyWidth.current = document.getElementsByTagName('body')[0].offsetWidth;
    menuItemClickHandler(_MenuItems[currentTab])();
    addCallback(() => {
      bodyWidth.current = document.getElementsByTagName('body')[0].offsetWidth;
      menuItemClickHandler(_MenuItems[currentTab])();
    });
  });
  const menuItemClickHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(item => () => {
    if (!IsDone) {
      return;
    }

    const findIndex = _MenuItems.findIndex(m => {
      return m.key === item.key;
    });

    if (!~findIndex) {
      return;
    }

    const pageOffSetLeft = (bodyWidth.current - 1600 * scale) / 2;
    const offsetLeft = item.ref.current.offsetLeft;
    const offsetWidth = item.ref.current.offsetWidth;
    setDotX((offsetLeft + offsetWidth / 2 - pageOffSetLeft - 8) / scale);
    setCurrentTab(findIndex);
  }, [bodyWidth, IsDone, scale]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (IsDone) {
      menuItemClickHandler(_MenuItems[currentTab])();
    }
  }, [currentTab, scale, IsDone]);
  return __jsx("div", {
    style: (_props$bodyStyle = props.bodyStyle) !== null && _props$bodyStyle !== void 0 ? _props$bodyStyle : {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['layout-menu-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, _MenuItems.map(item => __jsx("span", {
    key: item.key,
    ref: item.ref,
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['layout-menu-item'],
    onClick: menuItemClickHandler(item),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, item.label))), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['layout-slider'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("span", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['layout-slider-dot'],
    style: {
      transform: `translate(${dotX}rem, -8rem)`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['layout-slider-line'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutHeader);

/***/ }),

/***/ "./components/Profile/Banner/index.module.less":
/*!*****************************************************!*\
  !*** ./components/Profile/Banner/index.module.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main-color": "main-color___1vwFq",
	"split-line-color": "split-line-color___1RwQl",
	"banner-container": "banner-container___2iee0",
	"title": "title___14UTd",
	"picture": "picture___3K3mg",
	"name": "name___2o-lr",
	"welcome": "welcome___29rMH",
	"actual-name": "actual-name___1r6DP",
	"chinese-name": "chinese-name___2k66j",
	"english-name": "english-name___ti-Rj",
	"who-am-i": "who-am-i___3WFNN",
	"metaphor": "metaphor___ecs05"
};

/***/ }),

/***/ "./components/Profile/Banner/index.tsx":
/*!*********************************************!*\
  !*** ./components/Profile/Banner/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/Profile/Banner/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/LazyLoadImg */ "./components/common/LazyLoadImg/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Profile/Banner/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const ProfileSource = [{
  src: '/static/images/profile.webp',
  type: 'image/webp'
}];
const ProfilePreviewSource = [{
  src: '/static/images/profile-preview.webp',
  type: 'image/webp'
}];

const Banner = () => {
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['banner-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sources: ProfileSource,
    src: '/static/images/profile.jpg',
    preview_src: '/static/images/profile-preview.jpg',
    preview_sources: ProfilePreviewSource,
    alt: 'my profile',
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['picture'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['name'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['welcome'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Welcome! I'm"), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['actual-name'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("span", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['chinese-name'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "LING, XI"), __jsx("span", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['english-name'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, ` /Lim`)), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['who-am-i'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Designer with Love, Passion and Creativity"))), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['metaphor'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "\u201CGood design is honest.\u201D"));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Profile/Contact/index.module.less":
/*!******************************************************!*\
  !*** ./components/Profile/Contact/index.module.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main-color": "main-color___HghB8",
	"split-line-color": "split-line-color___2oU8J",
	"pharse-body": "pharse-body___1jZ7O",
	"contact-container": "contact-container___1K470"
};

/***/ }),

/***/ "./components/Profile/Contact/index.tsx":
/*!**********************************************!*\
  !*** ./components/Profile/Contact/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/Profile/Contact/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_BoldenInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/BoldenInformation */ "./components/common/BoldenInformation/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Profile/Contact/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const emailAndPhone = ['+86 15801795037', 'ccceline.xiii@gmail.com'];
const address = ['College of Design and Innovation, Tongji University', 'No.1239 Siping Rd, Shanghai, China, 200092'];

const Contact = () => {
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['contact-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_common_BoldenInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    informations: emailAndPhone,
    align: 'left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx(_common_BoldenInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    informations: address,
    align: 'right',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Profile/index.tsx":
/*!**************************************!*\
  !*** ./components/Profile/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner */ "./components/Profile/Banner/index.tsx");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact */ "./components/Profile/Contact/index.tsx");
/* harmony import */ var _common_Pharse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Pharse */ "./components/common/Pharse/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Profile/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const myInfo = [{
  title: 'EDUCATION',
  info: [{
    title: ['Industrial Design, College of Design and Innovation, Tongji University', 'Candidate for Bachelor of Engineering | Cumulative GPA: 4.46'],
    time: ['09.2015 - 06.2020']
  }]
}, {
  title: 'DESIGN INTERNSHIP EXPERIENCE',
  info: [{
    title: ['Capgemini'],
    subtitle: ['UX/UI Design Intern'],
    desc: ['Co-created with clients to identify the opportunity and develop the service through design strategy', 'Collaborated with front-end engineers to improve user interface of digital products'],
    time: ['11.2019 - Present']
  }, {
    title: ['Volvo Car Asia Pacific'],
    subtitle: ['Design Color & Material Intern'],
    desc: ['Completed benchmark and trend research on car exterior and interior color & material', 'Created pattern and color propasals for interior deco and leather monthly'],
    time: ['02.2019 - 07.2019']
  }, {
    title: ['Neuni Group, Shanghai'],
    subtitle: ['Creative and Visual Design Intern'],
    desc: ['Proposed creative plans for products and installations adopting new materials', 'Led visual design for local exhibitions'],
    time: ['05.2018 - 08.2018']
  }]
}, {
  title: 'RESEARCH EXPERIENCE',
  info: [{
    title: ['“Next Mobility” Laboratory, College of Design and Innovation, Tongji University'],
    subtitle: ['Researcher'],
    desc: [`Composed paper on “Industrial Design Knowledge for Additive Manufacturing”`, `Composed paper on “Study on the Pedestrian Signage System in International Megacities”`],
    time: ['08.2018 - 12.2018']
  }]
}, {
  title: 'COMPETITION EXPERIENCE',
  info: [{
    title: ['Closing the Loop on Food Packaging | ExxonMobil Challenge Reality Hackathon'],
    subtitle: ['Gold Prize'],
    time: ['2019']
  }, {
    title: ['EMO Robot Product Design | Shanghai Industry Design Competition'],
    subtitle: ['First Prize'],
    time: ['2018']
  }, {
    title: ['Bamboo Stool Design | The Second ‘Think Youth’ Shanghai Design Competition '],
    subtitle: ['Second Prize'],
    time: ['2017']
  }, {
    title: ['Unmanned Aerial Vehicle Design | Honeywell Internal Competition'],
    subtitle: ['Third Prize'],
    time: ['2017']
  }, {
    title: ['15% Academic Achievement Scholarship | College of Design and Innovation'],
    time: ['2017']
  }],
  // 由于上下margin 重叠的规则，最后的Gap不会影响到存在大于 42 marginTop的下一个元素的margin展示，比如下一个是80，那么结果还是 42 & 80 = 80 而不会变成 122
  bottomGap: '42rem'
}, {
  title: 'MANAGEMENT EXPERIENCE',
  info: [{
    title: ['The First China Industry Design Exhibition, Wuhan, China'],
    subtitle: ['Exhibition Designer for Tongji University’s field'],
    desc: ['Planned exhibition design, including showing forms and lighting design', 'Arranged exhibits’ collection and logistics from Shanghai to Wuhan'],
    time: ['11.2017']
  }, {
    title: ['Tongji Design Week'],
    subtitle: ['Best Performance Core Volunteer'],
    desc: ['Communicated with 10 designers and artists to align exhibition plans', 'Coordinated with other volunteers to meet requests on space and activities '],
    time: ['10.2016 & 2017']
  }, {
    title: ['Tongji University Student Union'],
    subtitle: ['Deputy Minister of Human Resources Department'],
    desc: ['Ran department to operate 12 events for more than 400 student union members', 'Met with administrators to address development of internal regulations weekly'],
    time: ['09.2015 - 08.2016']
  }]
}];

const Profile = () => {
  return __jsx("div", {
    style: {
      width: '1600rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, __jsx(_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }), __jsx(_Contact__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }), myInfo.map(info => __jsx(_common_Pharse__WEBPACK_IMPORTED_MODULE_3__["default"], {
    info: info.info,
    title: info.title,
    key: info.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./components/Projects/ProjectDetail/index.module.less":
/*!*************************************************************!*\
  !*** ./components/Projects/ProjectDetail/index.module.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"project-detail-item": "project-detail-item___3nVhL",
	"project-detail-images": "project-detail-images___1_kNN",
	"project-detail-image": "project-detail-image___19LrW",
	"project-detail-title": "project-detail-title___1xjA0",
	"project-detail-subtitle": "project-detail-subtitle___31b4C",
	"project-detail-details": "project-detail-details___1UI-I",
	"project-detail-tags": "project-detail-tags___2Cbgb",
	"project-detail-details-images": "project-detail-details-images___24caU"
};

/***/ }),

/***/ "./components/Projects/ProjectDetail/index.tsx":
/*!*****************************************************!*\
  !*** ./components/Projects/ProjectDetail/index.tsx ***!
  \*****************************************************/
/*! exports provided: ProjectDetailItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailItem", function() { return ProjectDetailItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/Projects/ProjectDetail/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/LazyLoadImg */ "./components/common/LazyLoadImg/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Projects/ProjectDetail/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const ProjectDetailItem = props => {
  const {
    images,
    title,
    desc,
    tags,
    details,
    mainColor,
    detail_images_meta,
    video,
    affix_image_meta
  } = props;
  const videoRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  const [played, setPlayed] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(undefined);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (videoRef.current && document) {
      document.onscroll = () => {
        if (videoRef.current.getBoundingClientRect().top < 700) {
          if (played === undefined) {
            videoRef.current.play();
            setPlayed(true);
          }
        } else if (videoRef.current.getBoundingClientRect().bottom < 150) {
          videoRef.current.pause();
          setPlayed(false);
        }
      };
    }
  }, [videoRef, document, played]);
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['project-detail-item'],
    style: {
      color: mainColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['project-detail-images'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, images.map(image => __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, image, {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['project-detail-image'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['project-detail-title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, title), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['project-detail-subtitle'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, desc.map(d => __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, d)))), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['project-detail-details'],
    style: {
      backgroundColor: mainColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['project-detail-tags'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, tags.map(t => __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, t))), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, details)), __jsx("div", {
    style: {
      fontSize: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, Array.from({
    length: detail_images_meta.num
  }).map((_, i) => {
    if (i === 0) {
      return;
    }

    const common_file = detail_images_meta.dir + '/' + (i + 1).toString();
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['project-detail-details-images'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: undefined
    });
  }), video ? video.map(v => {
    return __jsx("div", {
      style: {
        width: '1600rem',
        position: 'relative'
      },
      onClick: () => {
        if (played) {
          videoRef.current.pause();
          setPlayed(false);
        } else {
          videoRef.current.play();
          setPlayed(true);
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        letterSpacing: '30rem',
        fontFamily: 'Sofia Pro Regular',
        fontSize: '100rem',
        lineHeight: '900rem',
        textAlign: 'center',
        overflow: 'hidden',
        color: '#fff',
        position: 'absolute',
        width: '100%',
        display: played == true ? 'none' : 'block'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: undefined
    }, "PAUSE"), __jsx("video", {
      src: v.src,
      ref: videoRef,
      autoPlay: false,
      style: {
        width: '100%',
        float: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: undefined
    }));
  }) : null, affix_image_meta ? Array.from({
    length: affix_image_meta.num
  }).map((_, i) => {
    if (i === 0) {
      return;
    }

    const common_file = affix_image_meta.dir + '/' + (detail_images_meta.num + i + 1).toString();
    return __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['project-detail-details-images'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: undefined
    });
  }) : null));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectDetailItem);

/***/ }),

/***/ "./components/Projects/ProjectIndexItem/index.module.less":
/*!****************************************************************!*\
  !*** ./components/Projects/ProjectIndexItem/index.module.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main-color": "main-color___2RATp",
	"split-line-color": "split-line-color___1aBwu",
	"project-images": "project-images___3jO0d",
	"project-image": "project-image___38v8v",
	"project-index-item": "project-index-item___rOerk",
	"project-index-subtitle": "project-index-subtitle___YcFUz",
	"project-index-title": "project-index-title___1t5-0"
};

/***/ }),

/***/ "./components/Projects/ProjectIndexItem/index.tsx":
/*!********************************************************!*\
  !*** ./components/Projects/ProjectIndexItem/index.tsx ***!
  \********************************************************/
/*! exports provided: ProjectIndexItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectIndexItem", function() { return ProjectIndexItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/Projects/ProjectIndexItem/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/LazyLoadImg */ "./components/common/LazyLoadImg/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Projects/ProjectIndexItem/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const ProjectIndexItem = props => {
  const {
    images,
    title,
    desc,
    tags,
    href
  } = props;
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['project-index-item'],
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/projects/' + href),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['project-index-title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, title), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['project-index-subtitle'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, desc.map(d => __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, d)))), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['project-images'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, images.map(image => __jsx(_common_LazyLoadImg__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, image, {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['project-image'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectIndexItem);

/***/ }),

/***/ "./components/Projects/index.module.less":
/*!***********************************************!*\
  !*** ./components/Projects/index.module.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main": "main___3sGd6"
};

/***/ }),

/***/ "./components/Projects/index.tsx":
/*!***************************************!*\
  !*** ./components/Projects/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/Projects/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectIndexItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectIndexItem */ "./components/Projects/ProjectIndexItem/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Projects/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const COMMON_STATIC_PATH = '/static/images/projectIndex/';
const PROJECT_INFO = [{
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
}].map(p => {
  p.mainColor = '#000';
  return p;
});

const Projects = props => {
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['main'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: undefined
  }, PROJECT_INFO.map(info => __jsx(_ProjectIndexItem__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, info, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/common/BoldenInformation/index.module.less":
/*!***************************************************************!*\
  !*** ./components/common/BoldenInformation/index.module.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"info-container": "info-container___3GTzi",
	"info": "info___1C7pF"
};

/***/ }),

/***/ "./components/common/BoldenInformation/index.tsx":
/*!*******************************************************!*\
  !*** ./components/common/BoldenInformation/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/common/BoldenInformation/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/common/BoldenInformation/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BoldenInformaion = props => {
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['info-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.informations.map(info => {
    return __jsx("div", {
      key: info,
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['info'],
      style: {
        textAlign: props.align
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, info);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BoldenInformaion);

/***/ }),

/***/ "./components/common/Description/index.module.less":
/*!*********************************************************!*\
  !*** ./components/common/Description/index.module.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"info-container": "info-container___3jIr7",
	"info": "info___2-8k-"
};

/***/ }),

/***/ "./components/common/Description/index.tsx":
/*!*************************************************!*\
  !*** ./components/common/Description/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/common/Description/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/common/Description/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Description = props => {
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['info-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.informations.map(info => {
    return __jsx("div", {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['info'],
      key: info,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    }, info);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./components/common/LazyLoadImg/index.tsx":
/*!*************************************************!*\
  !*** ./components/common/LazyLoadImg/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/common/LazyLoadImg/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LazyLoadImg = props => {
  const {
    className,
    src,
    sources,
    alt,
    preview_src,
    preview_sources
  } = props;
  const {
    0: isDone,
    1: setIsDone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("picture", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, (preview_sources !== null && preview_sources !== void 0 ? preview_sources : []).map(s => __jsx("source", {
    srcSet: s.src,
    type: s.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), __jsx("img", {
    src: preview_src,
    alt: 'preview',
    className: className,
    style: {
      display: isDone ? 'none' : 'show',
      filter: 'blur(3px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })), __jsx("picture", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, (sources !== null && sources !== void 0 ? sources : []).map(s => __jsx("source", {
    srcSet: s.src,
    type: s.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })), __jsx("img", {
    src: src,
    alt: alt,
    className: className,
    style: {
      display: isDone ? 'initial' : 'none'
    },
    onLoad: () => {
      setIsDone(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LazyLoadImg);

/***/ }),

/***/ "./components/common/Pharse/index.module.less":
/*!****************************************************!*\
  !*** ./components/common/Pharse/index.module.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main-color": "main-color___-a4BP",
	"split-line-color": "split-line-color___1NAD8",
	"main": "main___dFapN",
	"pharse-title": "pharse-title___KDx0B",
	"pharse-main-body": "pharse-main-body___1AkK2",
	"pharse-container": "pharse-container___2lkOx"
};

/***/ }),

/***/ "./components/common/Pharse/index.tsx":
/*!********************************************!*\
  !*** ./components/common/Pharse/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/common/Pharse/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_BoldenInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/BoldenInformation */ "./components/common/BoldenInformation/index.tsx");
/* harmony import */ var _common_PharseInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/PharseInformation */ "./components/common/PharseInformation/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/common/Pharse/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





const Phrase = props => {
  const {
    info,
    title,
    bottomGap
  } = props;
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['main'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, title && __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['pharse-title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, title), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['pharse-main-body'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, info.map(i => __jsx("div", {
    key: i.title[0],
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['pharse-container'],
    style: {
      marginBottom: bottomGap !== null && bottomGap !== void 0 ? bottomGap : '58rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(_common_PharseInformation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    info: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_common_BoldenInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    informations: i.time,
    align: 'right',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Phrase);

/***/ }),

/***/ "./components/common/PharseInformation/index.module.less":
/*!***************************************************************!*\
  !*** ./components/common/PharseInformation/index.module.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"info-container": "info-container___DmMR0",
	"info": "info___31OhC"
};

/***/ }),

/***/ "./components/common/PharseInformation/index.tsx":
/*!*******************************************************!*\
  !*** ./components/common/PharseInformation/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/common/PharseInformation/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BoldenInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BoldenInformation */ "./components/common/BoldenInformation/index.tsx");
/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SubTitle */ "./components/common/SubTitle/index.tsx");
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Description */ "./components/common/Description/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/common/PharseInformation/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PharseInformation = props => {
  const {
    info
  } = props;
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['info-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_BoldenInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    informations: info.title,
    align: 'left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), info.subtitle && __jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    informations: info.subtitle,
    align: 'left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), info.desc && __jsx(_Description__WEBPACK_IMPORTED_MODULE_4__["default"], {
    informations: info.desc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PharseInformation);

/***/ }),

/***/ "./components/common/SubTitle/index.module.less":
/*!******************************************************!*\
  !*** ./components/common/SubTitle/index.module.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"info-container": "info-container___gv01a",
	"info": "info___1C4Oe"
};

/***/ }),

/***/ "./components/common/SubTitle/index.tsx":
/*!**********************************************!*\
  !*** ./components/common/SubTitle/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/common/SubTitle/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/common/SubTitle/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Subtitle = props => {
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['info-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.informations.map(info => {
    return __jsx("div", {
      key: info,
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['info'],
      style: {
        textAlign: props.align
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, info);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Subtitle);

/***/ }),

/***/ "./pages/index.less":
/*!**************************!*\
  !*** ./pages/index.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main-color": "main-color___EG-zS",
	"split-line-color": "split-line-color___3LrYH",
	"layout": "layout___3KKqz"
};

/***/ }),

/***/ "./pages/projects/xixi4rhino.tsx":
/*!***************************************!*\
  !*** ./pages/projects/xixi4rhino.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.less */ "./pages/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LayoutHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LayoutHeader */ "./components/LayoutHeader/index.tsx");
/* harmony import */ var _utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/hooks/useCurrentTab */ "./utils/hooks/useCurrentTab.tsx");
/* harmony import */ var _components_ContentSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ContentSwitcher */ "./components/ContentSwitcher/index.tsx");
/* harmony import */ var _utils_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/hooks/useComponentDidMount */ "./utils/hooks/useComponentDidMount.ts");
/* harmony import */ var _utils_hooks_useResizeCallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/hooks/useResizeCallback */ "./utils/hooks/useResizeCallback.ts");
/* harmony import */ var _components_Projects_ProjectDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Projects/ProjectDetail */ "./components/Projects/ProjectDetail/index.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Profile */ "./components/Profile/index.tsx");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Projects */ "./components/Projects/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/pages/projects/xixi4rhino.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const DESIGN_WIDTH = 1920;
const COMMON_STATIC_PATH = '/static/images/projectDetails/img';
const Info = {
  title: 'xixi4rhino',
  mainColor: '#9E0601',
  desc: ['a website for rhino protection', 'by impacting potential consumers directly'],
  details: `‘xixi4rhino’ is a website for Rhino Protection, aiming to change Chinese potential consumers’ rhino horns purchase intention and create better Internet information environment about rhino horns. It’s critical to directly impact the consumption intention of Chinese potential consumers and make them abandon the purchase when rhinos are poached for rhino horns. In the Chinese market, as the Internet plays an import role on consumption decision, we created the website with an entrapping name “Rhino Horn Purchase Guide” to induce people to click and browse it. The glitch art video at the beginning contains bloody scene and dialogue box interaction to make potential consumers shocked powerfully. After that, the webpage informs people about the correct knowledge of the rhino horns and encourage them to forward or donate, so that the website could be more widely spread.`,
  tags: ['Society Innovation | Web UI and UX Design | Team Work in 5 weeks | Mar 2018 '],
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
    alt: 'rhino'
  }],
  detail_images_meta: {
    dir: '/static/images/projectDetails/xixi4rhino',
    num: 7
  }
};
const menuItems = [{
  key: 'xixi4rhino',
  label: 'xixi4rhino'
}];

const InnerLayout = () => {
  const {
    state: {
      scale: {
        scale
      }
    },
    actions: {
      setScale,
      setCurrentTab
    }
  } = Object(_utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_3__["useCurrentTab"])();
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const fallBackReactive = () => {
    setScale(1);
    const scale = Math.min(document.body.clientWidth / 1920, 1);
    let metaEl = document.querySelector('meta[name="viewport"]');

    if (!metaEl) {
      metaEl = document.createElement('meta');
      metaEl.setAttribute('name', 'viewport');
      metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
      document.documentElement.firstElementChild.appendChild(metaEl);
    } else {
      metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    }

    window.scrollTo({
      top: 0
    });
  }; // innerWidth 比 body.offsetWidth 稳定


  const {
    IsDone
  } = Object(_utils_hooks_useComponentDidMount__WEBPACK_IMPORTED_MODULE_5__["useComponentDidMount"])(() => {
    setCurrentTab(1);

    if (window.innerWidth >= 700) {
      const scale = Math.max(Math.min(window.innerWidth / DESIGN_WIDTH, 1), 0.2);
      setScale(scale);
    } else {
      fallBackReactive();
    }

    addCallback(() => {
      const scale = Math.max(Math.min(window.innerWidth / DESIGN_WIDTH, 1), 0.2);
      document.getElementsByTagName('html')[0].style.fontSize = `${scale}px`;
      window.scrollTo({
        top: 0
      });
      setScale(scale);
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setIsLoading(true);
    document.getElementsByTagName('html')[0].style.fontSize = `${scale}px`;
    window.scrollTo({
      top: 0
    }); // 强行将这次setState推迟到下次处理

    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, [scale]);
  const {
    addCallback
  } = Object(_utils_hooks_useResizeCallback__WEBPACK_IMPORTED_MODULE_6__["useResizeCallback"])(fallBackReactive);
  return IsDone && !isLoading ? __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_1___default.a.layout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx(_components_LayoutHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menuItems: menuItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), __jsx(_components_ContentSwitcher__WEBPACK_IMPORTED_MODULE_4__["ContentSwitcher"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }), __jsx(_components_Projects_ProjectDetail__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, Info, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  })), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  })), __jsx(_components_LayoutHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menuItems: menuItems,
    bodyStyle: {
      marginTop: '138rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  })) : null;
};

const Layout = () => {
  return __jsx(_utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_3__["CurrentTabProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, __jsx(InnerLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

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

/***/ "./utils/hooks/useCurrentTab.tsx":
/*!***************************************!*\
  !*** ./utils/hooks/useCurrentTab.tsx ***!
  \***************************************/
/*! exports provided: createCurrentTab, CurrentTabProvider, useCurrentTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCurrentTab", function() { return createCurrentTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentTabProvider", function() { return CurrentTabProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCurrentTab", function() { return useCurrentTab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/utils/hooks/useCurrentTab.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let initStore = {
  currentTab: {
    currentTab: 0
  },
  scale: {
    scale: 1
  },
  test: {
    count: 0
  }
};

const currentTab = (state, action) => {
  if (action.type === 'setCurrentTab') {
    return _objectSpread({}, state, {
      currentTab: action.value
    });
  } else {
    return state;
  }
};

const test = (state, action) => {
  if (action.type === 'increment') {
    return _objectSpread({}, state, {
      count: state.count + action.value
    });
  } else {
    return state;
  }
};

const scale = (state, action) => {
  if (action.type === 'setScale') {
    return _objectSpread({}, state, {
      scale: action.value
    });
  } else {
    return state;
  }
}; // 自定义合并reducer函数
// 根据reducer定义的名称，拿到state中的对应名称下的state
// state 也是一个复合 state
// 返回值依然是个函数


const combineReducers = reducers => (state, action) => Object.keys(reducers) // 拿到的state只是属于自己的key的那部分
// 对每个reducer 都执行一次处理, 将结果存为新的state[key]
.map(k => ({
  [k]: reducers[k](state[k], action)
})) // 整合出新state返回，看起来就像是一个reducer在干活
.reduce((acc, cur) => Object.assign({}, acc, cur));

const reducers = combineReducers({
  currentTab,
  test,
  scale
});
function createCurrentTab(_initStore) {
  const CurrentTabContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

  function CurrentTabProvider(props) {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(reducers, _initStore ? _objectSpread({}, initStore, {}, _initStore) : initStore);
    const actions = {
      setCurrentTab: e => {
        dispatch({
          type: 'setCurrentTab',
          value: e
        });
      },
      setScale: e => {
        dispatch({
          type: 'setScale',
          value: e
        });
      }
    };
    return __jsx(CurrentTabContext.Provider, {
      value: {
        state,
        actions
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, props.children);
  }

  function useCurrentTab() {
    let value = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(CurrentTabContext);

    if (!value) {
      throw new Error('Component must be wrapped with <CurrentTabProvider>');
    }

    return value;
  }

  return {
    CurrentTabProvider,
    useCurrentTab
  };
}
const {
  CurrentTabProvider,
  useCurrentTab
} = createCurrentTab();


/***/ }),

/***/ "./utils/hooks/useResizeCallback.ts":
/*!******************************************!*\
  !*** ./utils/hooks/useResizeCallback.ts ***!
  \******************************************/
/*! exports provided: useResizeCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResizeCallback", function() { return useResizeCallback; });
/* harmony import */ var _useComponentDidMount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useComponentDidMount */ "./utils/hooks/useComponentDidMount.ts");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/throttle */ "lodash/throttle");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);


let callback_queue = [];
const useResizeCallback = fallBackHandler => {
  Object(_useComponentDidMount__WEBPACK_IMPORTED_MODULE_0__["useComponentDidMount"])(() => {
    window.onresize = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(e => {
      const width = e.target.innerWidth;

      if (width < 768) {
        fallBackHandler && fallBackHandler();
        return;
      }

      callback_queue.forEach(callback => {
        callback();
      });
    }, 800, {
      trailing: true
    });
  });

  function addCallback(callback) {
    callback_queue.push(callback);
  }

  return {
    addCallback
  };
};

/***/ }),

/***/ 3:
/*!*********************************************!*\
  !*** multi ./pages/projects/xixi4rhino.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tomokokawase/Desktop/Portfolio/pages/projects/xixi4rhino.tsx */"./pages/projects/xixi4rhino.tsx");


/***/ }),

/***/ "lodash/throttle":
/*!**********************************!*\
  !*** external "lodash/throttle" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=xixi4rhino.js.map