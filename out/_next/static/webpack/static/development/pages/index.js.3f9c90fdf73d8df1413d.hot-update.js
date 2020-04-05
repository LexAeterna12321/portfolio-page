webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/contact/Contact.js":
/*!***************************************!*\
  !*** ./components/contact/Contact.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ContactInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContactInfo */ "./components/contact/ContactInfo.js");
/* harmony import */ var _fbConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../fbConfig */ "./fbConfig/index.js");




var _jsxFileName = "C:\\Users\\rafal\\Desktop\\projekty\\firebasePort\\portfolio-page\\components\\contact\\Contact.js";




var initialState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

var Contact = function Contact() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialState),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      validationStatus = _useState4[0],
      setValidationStatus = _useState4[1];

  var writeContactMessage = function writeContactMessage(formData) {
    _fbConfig__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref("contact").push(formData);
  };

  var handleInputChange = function handleInputChange(e) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.name, e.target.value)));
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

    var fieldsValues = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(state);

    var validationItems = fieldsValues.filter(function (field) {
      return field === "";
    });

    if (validationItems.length !== 0) {
      setValidationStatus("All fields must be filled.");
    } else {
      writeContactMessage(state);
      setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, initialState));
      setValidationStatus("Thank you for your message. I hope we keep in touch. ;)");
    }
  };

  var name = state.name,
      email = state.email,
      subject = state.subject,
      message = state.message;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "contact__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("header", {
    className: "contact__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Contact Me"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ContactInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    name: "contact",
    className: "contact__form",
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
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
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
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
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
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
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", {
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
      lineNumber: 81
    },
    __self: this
  }), validationStatus ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "contact__form__validationStatus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, validationStatus) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    className: "contact__button",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Send Message"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.3f9c90fdf73d8df1413d.hot-update.js.map