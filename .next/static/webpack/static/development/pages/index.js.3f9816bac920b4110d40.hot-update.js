webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\rafal\\Desktop\\projekty\\react\\nextPortfolio\\portfolio-page\\components\\Form.js";


var Form = function Form(_ref) {
  var name = _ref.name,
      email = _ref.email,
      subject = _ref.subject,
      message = _ref.message,
      handleSubmit = _ref.handleSubmit,
      handleOnChange = _ref.handleOnChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return handleChange(e);
    },
    type: "text",
    name: "name",
    placeholder: "Name",
    value: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return handleChange(e);
    },
    type: "email",
    name: "email",
    placeholder: "Email",
    value: email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return handleChange(e);
    },
    type: "text",
    name: "subject",
    placeholder: "subject",
    value: subject,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    onChange: function onChange(e) {
      return handleChange(e);
    },
    name: "message",
    cols: "30",
    rows: "10",
    placeholder: "Message",
    value: message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Send Message"));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.3f9816bac920b4110d40.hot-update.js.map