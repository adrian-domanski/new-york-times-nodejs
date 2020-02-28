webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _queries_authQueries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queries/authQueries */ "./queries/authQueries.js");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/authContext */ "./context/authContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\SandBox\\next-articles\\client\\pages\\register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Register = function Register() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      emailError = _useState3[0],
      setEmailError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      passwordError = _useState4[0],
      setPasswordError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      alert = _useState5[0],
      setAlert = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      alertTimeOut = _useState6[0],
      setAlertTimeOut = _useState6[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_queries_authQueries__WEBPACK_IMPORTED_MODULE_5__["registerMutation"]),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 1),
      register = _useMutation2[0];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_authContext__WEBPACK_IMPORTED_MODULE_6__["AuthContext"]),
      isAuth = _useContext.authContext.isAuth,
      authDispatch = _useContext.dispatch;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (isAuth) {
      router.push("/articles");
    }
  }, [isAuth]); // Clear timeout after unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return clearTimeout(alertTimeOut);
  });

  var handleValidateEmail = function handleValidateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
      return setEmailError("Email must have @ and .");
    } // No error


    setEmailError("");
  };

  var handleValidatePassword = function handleValidatePassword(password) {
    if (password.length < 3) {
      return setPasswordError("Password must have at least 3 chars");
    } // No error


    setPasswordError("");
  };

  var showAlert = function showAlert(msg) {
    setAlert(msg); // Clear alert

    setTimeout(function () {
      setAlert("");
    }, 5000);
  };

  var handleChange = function handleChange(_ref) {
    var _ref$target = _ref.target,
        value = _ref$target.value,
        name = _ref$target.name;

    switch (name) {
      case "email":
        handleValidateEmail(value);
        return setEmail(value);

      case "password":
        handleValidatePassword(value);
        return setPassword(value);

      default:
        return null;
    }
  };

  var handleSubmit = function handleSubmit(e) {
    var _ref2, data;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            _context.prev = 1;
            _context.next = 4;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(register({
              variables: {
                email: email,
                password: password
              }
            }));

          case 4:
            _ref2 = _context.sent;
            data = _ref2.data;
            authDispatch({
              type: "REGISTER_SUCCESS",
              payload: data.register
            });
            console.log(data);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);

            if (_context.t0.graphQLErrors) {
              showAlert(_context.t0.graphQLErrors[0].message);
            } else {
              console.log(_context.t0);
            }

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 10]]);
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "login-page container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "login-page-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("h1", {
    className: "login-page__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Register"), __jsx("div", {
    className: "login-page__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "To begin your journey with the New York Times Articles, please authenticate yourself."), __jsx("form", {
    onSubmit: function onSubmit(e) {
      handleSubmit(e);
    },
    className: "login-page__form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, alert ? __jsx("div", {
    className: "login-alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, alert, __jsx("button", {
    onClick: function onClick() {
      return setAlert("");
    },
    className: "alert-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))) : null, __jsx("div", {
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("div", {
    className: "input-error ".concat(emailError ? "active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, emailError), __jsx("input", {
    type: "email",
    name: "email",
    className: "login-form__input",
    value: email,
    onChange: handleChange,
    placeholder: "Email...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })), __jsx("div", {
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("div", {
    className: "input-error ".concat(passwordError ? "active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, passwordError), __jsx("input", {
    type: "password",
    name: "password",
    value: password,
    className: "login-form__input",
    onChange: handleChange,
    placeholder: "Password...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), __jsx("input", {
    type: "submit",
    disabled: passwordError || emailError ? true : false,
    className: "btn btn--submit",
    value: "Create Account",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ })

})
//# sourceMappingURL=register.js.0474d2a7e7a36edaa321.hot-update.js.map