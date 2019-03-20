webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ContactInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContactInfo */ "./components/ContactInfo.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\rafal\\Desktop\\projekty\\react\\nextPortfolio\\portfolio-page\\components\\Contact.js";



var initialState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};


var Contact = function Contact() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialState),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      validationStatus = _useState4[0],
      setValidationStatus = _useState4[1];

  var handleInputChange = function handleInputChange(e) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
  };

  var handleValidation = function handleValidation(e) {
    var invalidItem = e.target.placeholder;

    if (e.target.value.trim() === "") {
      setValidationStatus("Field ".concat(invalidItem, " cannot be empty."));
    } else {
      setValidationStatus("");
    }
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    var fieldsValues = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(state);

    var validationItems = fieldsValues.filter(function (field) {
      return field === "";
    });

    if (validationItems.length !== 0) {
      setValidationStatus("All fields must be filled.");
    } else {
      setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, initialState));
      setValidationStatus("Thank you for your message. I hope we keep in touch. ;)");
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(state)
      }).then(function (res) {
        res.status === 200 ? setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
          submitted: true
        })) : "";
      });
    }
  };

  var name = state.name,
      email = state.email,
      subject = state.subject,
      message = state.message;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "contact__h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Contact Me"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ContactInfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
    name: "contact",
    method: "post",
    "netlify-honeypot": "bot-field",
    "data-netlify": "true",
    className: "contact__form",
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    name: "bot-field",
    className: "contact__form__input--hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    onChange: function onChange(e) {
      return handleInputChange(e);
    },
    onBlur: function onBlur(e) {
      return handleValidation(e);
    },
    type: "text",
    name: "name",
    placeholder: "Name",
    value: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    onChange: function onChange(e) {
      return handleInputChange(e);
    },
    onBlur: function onBlur(e) {
      return handleValidation(e);
    },
    type: "email",
    name: "email",
    placeholder: "Email",
    value: email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    onChange: function onChange(e) {
      return handleInputChange(e);
    },
    onBlur: function onBlur(e) {
      return handleValidation(e);
    },
    type: "text",
    name: "subject",
    placeholder: "Subject",
    value: subject,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
    onChange: function onChange(e) {
      return handleInputChange(e);
    },
    onBlur: function onBlur(e) {
      return handleValidation(e);
    },
    name: "message",
    cols: "30",
    rows: "10",
    placeholder: "Message",
    value: message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), validationStatus ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "contact__form__validationStatus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, validationStatus) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Send Message")));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.aa7cbf866495bf315aa6.hot-update.js.map