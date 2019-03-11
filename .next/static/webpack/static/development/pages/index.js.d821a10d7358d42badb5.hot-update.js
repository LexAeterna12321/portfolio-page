webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/About */ "./components/About.js");


var _jsxFileName = "C:\\Users\\rafal\\Desktop\\projekty\\react\\nextPortfolio\\portfolio-page\\pages\\index.js";








var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    siteActive: "about"
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var triggerSiteChange = function triggerSiteChange(site) {
    if (site === state.siteActive) return;
    var changer = document.querySelector(".site-change");
    changer.classList.add("site-change--active");
    setTimeout(function () {
      setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        siteActive: site
      }));
      setTimeout(function () {
        changer.classList.remove("site-change--active");
      }, 750);
    }, 1000);
  };

  var renderPage = function renderPage() {
    switch (state.siteActive) {
      case "/":
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_6__["default"], {
          siteChange: triggerSiteChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        });

      case "about":
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_7__["default"], {
          siteChange: triggerSiteChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        });

      default:
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_6__["default"], {
          siteChange: triggerSiteChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        });
    }
  };

  var content = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Rafa\u0142 Cie\u015Blik Portfolio"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
    integrity: "sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    siteChange: triggerSiteChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, renderPage(), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "site-change",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })));
  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d821a10d7358d42badb5.hot-update.js.map