module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/articleContext.js":
/*!***********************************!*\
  !*** ./context/articleContext.js ***!
  \***********************************/
/*! exports provided: ArticleContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContext", function() { return ArticleContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_articleReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/articleReducer */ "./context/reducers/articleReducer.js");
var _jsxFileName = "C:\\SandBox\\next-articles\\client\\context\\articleContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ArticleContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

const ArticleContextProvider = props => {
  const {
    0: articleContext,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_articleReducer__WEBPACK_IMPORTED_MODULE_1__["articleReducer"], _reducers_articleReducer__WEBPACK_IMPORTED_MODULE_1__["initState"]);
  return __jsx(ArticleContext.Provider, {
    value: {
      articleContext,
      dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleContextProvider);

/***/ }),

/***/ "./context/authContext.js":
/*!********************************!*\
  !*** ./context/authContext.js ***!
  \********************************/
/*! exports provided: AuthContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/authReducer */ "./context/reducers/authReducer.js");
var _jsxFileName = "C:\\SandBox\\next-articles\\client\\context\\authContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

const AuthContextProvider = ({
  children
}) => {
  const {
    0: authContext,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_authReducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"], _reducers_authReducer__WEBPACK_IMPORTED_MODULE_1__["initState"]);
  return __jsx(AuthContext.Provider, {
    value: {
      authContext,
      dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthContextProvider);

/***/ }),

/***/ "./context/contextWrapper.js":
/*!***********************************!*\
  !*** ./context/contextWrapper.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _articleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articleContext */ "./context/articleContext.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_articleQueries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries/articleQueries */ "./queries/articleQueries.js");
/* harmony import */ var _queries_authQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queries/authQueries */ "./queries/authQueries.js");
/* harmony import */ var _authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authContext */ "./context/authContext.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ContextWrapper = ({
  children,
  contextData
}) => {
  const {
    dispatch: articleDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_articleContext__WEBPACK_IMPORTED_MODULE_1__["ArticleContext"]);
  const {
    dispatch: authDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_authContext__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]);
  const {
    refetch: getArticles
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_articleQueries__WEBPACK_IMPORTED_MODULE_3__["getArticlesQuery"], {
    skip: true
  });
  const {
    refetch: authUser
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_authQueries__WEBPACK_IMPORTED_MODULE_4__["authUserQuery"], {
    skip: true
  }); // Get all articles

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchData = async () => {
      try {
        const {
          data
        } = await getArticles();
        articleDispatch({
          type: "GET_ARTICLES",
          payload: data.articles
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); // Check if local storage has token and try to auth

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchData = async () => {
      if (localStorage.getItem("token")) {
        try {
          const {
            data
          } = await authUser({
            token: localStorage.getItem("token")
          });
          authDispatch({
            type: "AUTH_SUCCESS",
            payload: data.authUser
          });
        } catch (err) {
          console.log(`Initial auth error: ${err}`);
        }
      }
    };

    fetchData();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
};

/* harmony default export */ __webpack_exports__["default"] = (ContextWrapper);

/***/ }),

/***/ "./context/reducers/articleReducer.js":
/*!********************************************!*\
  !*** ./context/reducers/articleReducer.js ***!
  \********************************************/
/*! exports provided: initState, articleReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleReducer", function() { return articleReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initState = {
  articles: []
};
const articleReducer = (state, action) => {
  switch (action.type) {
    case "GET_ARTICLES":
      return _objectSpread({}, state, {
        articles: action.payload
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./context/reducers/authReducer.js":
/*!*****************************************!*\
  !*** ./context/reducers/authReducer.js ***!
  \*****************************************/
/*! exports provided: initState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initState = {
  isAuth: false,
  user: null,
  token: null
};
const authReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return _objectSpread({}, state, {
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token
      });

    case "AUTH_SUCCESS":
      return _objectSpread({}, state, {
        isAuth: true,
        user: _objectSpread({}, action.payload),
        token: localStorage.getItem("token")
      });

    case "LOGOUT_SUCCESS":
    case "REGISTER_ERROR":
    case "LOGIN_ERROR":
    case "AUTH_ERROR":
      localStorage.removeItem("token");
      return _objectSpread({}, state, {
        isAuth: false,
        user: null,
        token: null
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./lib/withApollo.js":
/*!***************************!*\
  !*** ./lib/withApollo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\SandBox\\next-articles\\client\\lib\\withApollo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default()(({
  initialState
}) => {
  const dev = false;
  console.log(dev);
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_2___default.a({
    uri: dev ? "http://localhost:5000/graphql" : "https://my-nyt-articles.herokuapp.com/graphql",
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]().restore(initialState || {})
  });
}, {
  render: ({
    Page,
    props
  }) => {
    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
      client: props.apollo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, __jsx(Page, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    })));
  }
}));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_articleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/articleContext */ "./context/articleContext.js");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/authContext */ "./context/authContext.js");
/* harmony import */ var _context_contextWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/contextWrapper */ "./context/contextWrapper.js");
/* harmony import */ var _lib_withApollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/withApollo */ "./lib/withApollo.js");
/* harmony import */ var _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-ssr */ "@apollo/react-ssr");
/* harmony import */ var _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_ssr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\SandBox\\next-articles\\client\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_6___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(_context_authContext__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx(_context_articleContext__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx(_context_contextWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
      contextData: this.props.contextData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(Component, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withApollo__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, {
  getDataFromTree: _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_5__["getDataFromTree"]
}));

/***/ }),

/***/ "./queries/articleQueries.js":
/*!***********************************!*\
  !*** ./queries/articleQueries.js ***!
  \***********************************/
/*! exports provided: getArticlesQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticlesQuery", function() { return getArticlesQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const getArticlesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query {
    articles {
      id
      title
      description
      imageUrl
      publishedDate
      byLine
    }
  }
`;

/***/ }),

/***/ "./queries/authQueries.js":
/*!********************************!*\
  !*** ./queries/authQueries.js ***!
  \********************************/
/*! exports provided: loginQuery, authUserQuery, registerMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginQuery", function() { return loginQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authUserQuery", function() { return authUserQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerMutation", function() { return registerMutation; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const loginQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
      }
      token
    }
  }
`;
const authUserQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query($token: String!) {
    authUser(token: $token) {
      email
      password
      id
    }
  }
`;
const registerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      user {
        email
        id
      }
      token
    }
  }
`;

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map