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

/***/ }),

/***/ "./components/Profile/Banner/index.tsx":
/*!*********************************************!*\
  !*** ./components/Profile/Banner/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/Profile/Banner/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Profile/Banner/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var Banner = function Banner() {
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['banner-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/profile.jpg",
    alt: "my picture",
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['picture'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['name'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['welcome'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Welcome! I'm"), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['actual-name'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("span", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['chinese-name'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "LING, XI"), __jsx("span", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['english-name'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, " /Lim")), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['who-am-i'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Designer with Love, Passion and Creativity"))), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['metaphor'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "\u201CGood design is honest.\u201D"));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Profile/Contact/index.tsx":
/*!**********************************************!*\
  !*** ./components/Profile/Contact/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/Profile/Contact/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_BoldenInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/BoldenInformation */ "./components/common/BoldenInformation/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Profile/Contact/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var emailAndPhone = ['+86 15801795037', 'ccceline.xiii@gmail.com'];
var address = ['College of Design and Innovation, Tongji University', 'No.1239 Siping Rd, Shanghai, China, 200092'];

var Contact = function Contact() {
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['contact-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_common_BoldenInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    informations: emailAndPhone,
    align: 'left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_common_BoldenInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    informations: address,
    align: 'right',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner */ "./components/Profile/Banner/index.tsx");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact */ "./components/Profile/Contact/index.tsx");
/* harmony import */ var _common_Pharse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Pharse */ "./components/common/Pharse/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Profile/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




var myInfo = [{
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
    desc: ["Composed paper on \u201CIndustrial Design Knowledge for Additive Manufacturing\u201D", "Composed paper on \u201CStudy on the Pedestrian Signage System in International Megacities\u201D"],
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
  bottomGap: '42px'
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

var Profile = function Profile() {
  return __jsx("div", {
    style: {
      width: '1600px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx(_Contact__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), myInfo.map(function (info) {
    return __jsx(_common_Pharse__WEBPACK_IMPORTED_MODULE_3__["default"], {
      info: info.info,
      title: info.title,
      key: info.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./components/Projects/index.tsx":
/*!***************************************!*\
  !*** ./components/Projects/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/Projects/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/Projects/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Projects = function Projects(props) {
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['main'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Under Construction"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/common/BoldenInformation/index.tsx":
/*!*******************************************************!*\
  !*** ./components/common/BoldenInformation/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/common/BoldenInformation/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/common/BoldenInformation/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var BoldenInformaion = function BoldenInformaion(props) {
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['info-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.informations.map(function (info) {
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
      __self: this
    }, info);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BoldenInformaion);

/***/ }),

/***/ "./components/common/Description/index.tsx":
/*!*************************************************!*\
  !*** ./components/common/Description/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/common/Description/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/common/Description/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Description = function Description(props) {
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['info-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.informations.map(function (info) {
    return __jsx("div", {
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['info'],
      key: info,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, info);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./components/common/Pharse/index.tsx":
/*!********************************************!*\
  !*** ./components/common/Pharse/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/common/Pharse/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_BoldenInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/BoldenInformation */ "./components/common/BoldenInformation/index.tsx");
/* harmony import */ var _common_PharseInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/PharseInformation */ "./components/common/PharseInformation/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/common/Pharse/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





var Phrase = function Phrase(props) {
  var info = props.info,
      title = props.title,
      bottomGap = props.bottomGap;
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['main'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, title && __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['pharse-title'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, title), __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['pharse-main-body'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, info.map(function (i) {
    return __jsx("div", {
      key: i.title[0],
      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['pharse-container'],
      style: {
        marginBottom: bottomGap !== null && bottomGap !== void 0 ? bottomGap : '58px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx(_common_PharseInformation__WEBPACK_IMPORTED_MODULE_3__["default"], {
      info: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx(_common_BoldenInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
      informations: i.time,
      align: 'right',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Phrase);

/***/ }),

/***/ "./components/common/PharseInformation/index.tsx":
/*!*******************************************************!*\
  !*** ./components/common/PharseInformation/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/common/PharseInformation/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BoldenInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BoldenInformation */ "./components/common/BoldenInformation/index.tsx");
/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SubTitle */ "./components/common/SubTitle/index.tsx");
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Description */ "./components/common/Description/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/common/PharseInformation/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var PharseInformation = function PharseInformation(props) {
  var info = props.info;
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['info-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_BoldenInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    informations: info.title,
    align: 'left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), info.subtitle && __jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    informations: info.subtitle,
    align: 'left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), info.desc && __jsx(_Description__WEBPACK_IMPORTED_MODULE_4__["default"], {
    informations: info.desc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PharseInformation);

/***/ }),

/***/ "./components/common/SubTitle/index.tsx":
/*!**********************************************!*\
  !*** ./components/common/SubTitle/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ "./components/common/SubTitle/index.module.less");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/components/common/SubTitle/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Subtitle = function Subtitle(props) {
  return __jsx("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_1___default.a['info-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.informations.map(function (info) {
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
      __self: this
    }, info);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Subtitle);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./pages/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LayoutHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LayoutHeader */ "./components/LayoutHeader/index.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Profile */ "./components/Profile/index.tsx");
/* harmony import */ var _utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks/useCurrentTab */ "./utils/hooks/useCurrentTab.tsx");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects/index.tsx");
/* harmony import */ var _components_ContentSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ContentSwitcher */ "./components/ContentSwitcher/index.tsx");
var _jsxFileName = "/Users/tomokokawase/Desktop/Portfolio/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];









var Layout = function Layout() {
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      scale = _useState[0],
      setScale = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var scale = Math.min(document.body.clientWidth / 1920, 1);
    window.scrollTo({
      top: 0
    });
    setScale(scale);
  }, [containerRef.current]);
  return __jsx(_utils_hooks_useCurrentTab__WEBPACK_IMPORTED_MODULE_4__["CurrentTabProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_1___default.a.layout,
    style: {
      transform: "scale(".concat(scale, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_components_ContentSwitcher__WEBPACK_IMPORTED_MODULE_6__["ContentSwitcher"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))), __jsx(_components_LayoutHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_components_LayoutHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bodyStyle: {
      marginTop: '138px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.dc3001a26d67157f57ea.hot-update.js.map