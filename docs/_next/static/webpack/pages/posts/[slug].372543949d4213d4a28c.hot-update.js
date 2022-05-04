webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./pages/posts/[slug].tsx":
/*!********************************!*\
  !*** ./pages/posts/[slug].tsx ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/container */ \"./components/container.tsx\");\n/* harmony import */ var _components_post_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/post-body */ \"./components/post-body.tsx\");\n/* harmony import */ var _components_post_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post-header */ \"./components/post-header.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/post-title */ \"./components/post-title.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/younghokim/workspace/0ho0ho.github.io/pages/posts/[slug].tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var post = _ref.post,\n      morePosts = _ref.morePosts,\n      preview = _ref.preview;\n  console.log(preview);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {\n    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      statusCode: 404,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 12\n      }\n    });\n  }\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    preview: preview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, router.isFallback ? __jsx(_components_post_title__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, \"Loading\\u2026\") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"article\", {\n    className: \"mb-32\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, post.title), __jsx(\"meta\", {\n    property: \"og:image\",\n    content: post.ogImage.url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  })), __jsx(_components_post_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: post.title,\n    date: post.date,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  }), __jsx(_components_post_body__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    content: post.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 15\n    }\n  })))));\n};\n\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLnRzeD8xYTUyIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwibW9yZVBvc3RzIiwicHJldmlldyIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwic2x1ZyIsInRpdGxlIiwib2dJbWFnZSIsInVybCIsImRhdGUiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXlDO0FBQUE7O0FBQUEsTUFBdENDLElBQXNDLFFBQXRDQSxJQUFzQztBQUFBLE1BQWhDQyxTQUFnQyxRQUFoQ0EsU0FBZ0M7QUFBQSxNQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCO0FBQ3BEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLE1BQU1HLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBSSxDQUFDRCxNQUFNLENBQUNFLFVBQVIsSUFBc0IsRUFBQ1AsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVRLElBQVAsQ0FBMUIsRUFBdUM7QUFDckMsV0FBTyxNQUFDLGlEQUFEO0FBQVcsZ0JBQVUsRUFBRSxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRDs7QUFDRCxTQUNFLE1BQUMsMERBQUQ7QUFBUSxXQUFPLEVBQUVOLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0csTUFBTSxDQUFDRSxVQUFQLEdBQ0MsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELEdBR0MsbUVBQ0U7QUFBUyxhQUFTLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUVAsSUFBSSxDQUFDUyxLQUFiLENBREYsRUFFRTtBQUFNLFlBQVEsRUFBQyxVQUFmO0FBQTBCLFdBQU8sRUFBRVQsSUFBSSxDQUFDVSxPQUFMLENBQWFDLEdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0UsTUFBQywrREFBRDtBQUFZLFNBQUssRUFBRVgsSUFBSSxDQUFDUyxLQUF4QjtBQUErQixRQUFJLEVBQUVULElBQUksQ0FBQ1ksSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUUsTUFBQyw2REFBRDtBQUFVLFdBQU8sRUFBRVosSUFBSSxDQUFDYSxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERixDQUpKLENBREYsQ0FERjtBQW9CRCxDQTFCRDs7R0FBTWQsSTtVQUVXTyxxRDs7O0tBRlhQLEk7O0FBNEJTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSBcIm5leHQvZXJyb3JcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyXCI7XG5pbXBvcnQgUG9zdEJvZHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC1ib2R5XCI7XG5pbXBvcnQgUG9zdEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0LWhlYWRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IGdldFBvc3RCeVNsdWcsIGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcbmltcG9ydCBQb3N0VGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC10aXRsZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IG1hcmtkb3duVG9IdG1sIGZyb20gXCIuLi8uLi9saWIvbWFya2Rvd25Ub0h0bWxcIjtcbmltcG9ydCBQb3N0VHlwZSBmcm9tIFwiLi4vLi4vdHlwZXMvcG9zdFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBwb3N0OiBQb3N0VHlwZTtcbiAgbW9yZVBvc3RzOiBQb3N0VHlwZVtdO1xuICBwcmV2aWV3PzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0LCBtb3JlUG9zdHMsIHByZXZpZXcgfTogUHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2cocHJldmlldyk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwb3N0Py5zbHVnKSB7XG4gICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcHJldmlldz17cHJldmlld30+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICB7cm91dGVyLmlzRmFsbGJhY2sgPyAoXG4gICAgICAgICAgPFBvc3RUaXRsZT5Mb2FkaW5n4oCmPC9Qb3N0VGl0bGU+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1iLTMyXCI+XG4gICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtwb3N0Lm9nSW1hZ2UudXJsfSAvPlxuICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgIDxQb3N0SGVhZGVyIHRpdGxlPXtwb3N0LnRpdGxlfSBkYXRlPXtwb3N0LmRhdGV9IC8+XG4gICAgICAgICAgICAgIDxQb3N0Qm9keSBjb250ZW50PXtwb3N0LmNvbnRlbnR9IC8+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG5cbnR5cGUgUGFyYW1zID0ge1xuICBwYXJhbXM6IHtcbiAgICBzbHVnOiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfTogUGFyYW1zKSB7XG4gIGNvbnN0IHBvc3QgPSBnZXRQb3N0QnlTbHVnKHBhcmFtcy5zbHVnLCBbXG4gICAgXCJ0aXRsZVwiLFxuICAgIFwiZGF0ZVwiLFxuICAgIFwic2x1Z1wiLFxuICAgIFwiY29udGVudFwiLFxuICAgIFwib2dJbWFnZVwiLFxuICBdKTtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKHBvc3QuY29udGVudCB8fCBcIlwiKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0OiB7XG4gICAgICAgIC4uLnBvc3QsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcG9zdHMgPSBnZXRBbGxQb3N0cyhbXCJzbHVnXCJdKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwb3N0cy5tYXAoKHBvc3RzKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzbHVnOiBwb3N0cy5zbHVnLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[slug].tsx\n");

/***/ })

})