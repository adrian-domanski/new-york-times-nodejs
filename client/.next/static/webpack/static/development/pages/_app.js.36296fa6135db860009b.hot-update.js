webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./lib/withApollo.js":
/*!***************************!*\
  !*** ./lib/withApollo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");

var _jsxFileName = "C:\\SandBox\\next-articles\\client\\lib\\withApollo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_2___default()(function (_ref) {
  var initialState = _ref.initialState;
  var dev = false;
  console.log(dev);
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_3__["default"]({
    uri: "http://localhost:5000/graphql",
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]().restore(initialState || {})
  });
}, {
  render: function render(_ref2) {
    var Page = _ref2.Page,
        props = _ref2.props;
    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
      client: props.apollo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(Page, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })));
  }
}));

/***/ })

})
//# sourceMappingURL=_app.js.36296fa6135db860009b.hot-update.js.map