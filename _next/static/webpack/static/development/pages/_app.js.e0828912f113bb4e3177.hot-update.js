webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src */ "./node_modules/src/index.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static/style.css */ "./static/style.css");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_style_css__WEBPACK_IMPORTED_MODULE_14__);








var _jsxFileName = "C:\\Users\\Egis\\Desktop\\DEV\\unisi\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





 // import config, { getRoutes } from 'clik/configs'
// import actions from 'clik/actions'
// import { ActStore } from 'actstore'
// import { ServiceWorker, Firebase } from 'clik/hooks'
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import 'clik/icons';

 // const routes = getRoutes();

var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_12___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig; // <ActStore init={init} initialState={{ ready: true }} config={config} router={router} actions={actions} name="App" />
// <ServiceWorker />


var _default =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, _App);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          _this$props$router = _this$props.router,
          router = _this$props$router === void 0 ? {} : _this$props$router,
          init = _this$props.init; // console.log('app', init.theme, typeof window === 'object' && typeof window.fucss)

      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_13__["ThemeProvider"], {
        theme: init.theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, ">", __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Unisi - MVP projects")), __jsx("main", {
        className: "dp:flx jc:c bg:FBFBFB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        init: init,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps, asPath, _ref2, version, env, theme, route, query;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                _context.t1 = Component.getInitialProps;

                if (!_context.t1) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                _context.t1 = _context.sent;

              case 6:
                _context.t0 = _context.t1;

                if (_context.t0) {
                  _context.next = 9;
                  break;
                }

                _context.t0 = {};

              case 9:
                pageProps = _context.t0;
                asPath = ctx.asPath;
                _ref2 = publicRuntimeConfig || {}, version = _ref2.version, env = _ref2.env, theme = _ref2.theme;
                route = router.route, query = router.query;
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  route: route,
                  query: query,
                  asPath: asPath,
                  init: {
                    version: version,
                    env: env,
                    theme: theme
                  }
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.e0828912f113bb4e3177.hot-update.js.map