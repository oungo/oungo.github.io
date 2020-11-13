webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./components/post-body.tsx":
/*!**********************************!*\
  !*** ./components/post-body.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown-styles.module.css */ \"./components/markdown-styles.module.css\");\n/* harmony import */ var _markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/younghokim/workspace/github/blog/components/post-body.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar PostBody = function PostBody(_ref) {\n  _s();\n\n  var content = _ref.content;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _document$getElementB;\n\n    var script = document.createElement(\"script\");\n    script.src = \"https://utteranc.es/client.js\";\n    script.setAttribute(\"repo\", \"0ho0ho/0ho0ho.github.io\");\n    script.setAttribute(\"issue-term\", \"pathname\");\n    script.setAttribute(\"theme\", \"github-light\");\n    script.setAttribute(\"crossorigin\", \"anonymous\");\n    (_document$getElementB = document.getElementById(\"utterances\")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.appendChild(script);\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"max-w-2xl mx-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a[\"markdown\"],\n    dangerouslySetInnerHTML: {\n      __html: content\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    id: \"utterances\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(PostBody, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = PostBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostBody);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostBody\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LWJvZHkudHN4PzU1ZWMiXSwibmFtZXMiOlsiUG9zdEJvZHkiLCJjb250ZW50IiwidXNlRWZmZWN0Iiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwic2V0QXR0cmlidXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsIm1hcmtkb3duU3R5bGVzIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU1BLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUN2Q0MseURBQVMsQ0FBQyxZQUFNO0FBQUE7O0FBQ2QsUUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBRixVQUFNLENBQUNHLEdBQVAsR0FBYSwrQkFBYjtBQUNBSCxVQUFNLENBQUNJLFlBQVAsQ0FBb0IsTUFBcEIsRUFBNEIseUJBQTVCO0FBQ0FKLFVBQU0sQ0FBQ0ksWUFBUCxDQUFvQixZQUFwQixFQUFrQyxVQUFsQztBQUNBSixVQUFNLENBQUNJLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsY0FBN0I7QUFDQUosVUFBTSxDQUFDSSxZQUFQLENBQW9CLGFBQXBCLEVBQW1DLFdBQW5DO0FBRUEsNkJBQUFILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixZQUF4QixpRkFBdUNDLFdBQXZDLENBQW1ETixNQUFuRDtBQUNELEdBVFEsQ0FBVDtBQVdBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUVPLGtFQUFjLENBQUMsVUFBRCxDQUQzQjtBQUVFLDJCQUF1QixFQUFFO0FBQUVDLFlBQU0sRUFBRVY7QUFBVixLQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixFQVFFO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREY7QUFZRCxDQXhCRDs7R0FBTUQsUTs7S0FBQUEsUTtBQTBCU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QtYm9keS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBtYXJrZG93blN0eWxlcyBmcm9tIFwiLi9tYXJrZG93bi1zdHlsZXMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBjb250ZW50OiBzdHJpbmc7XG59O1xuXG5jb25zdCBQb3N0Qm9keSA9ICh7IGNvbnRlbnQgfTogUHJvcHMpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL3V0dGVyYW5jLmVzL2NsaWVudC5qc1wiO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJyZXBvXCIsIFwiMGhvMGhvLzBobzBoby5naXRodWIuaW9cIik7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZShcImlzc3VlLXRlcm1cIiwgXCJwYXRobmFtZVwiKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKFwidGhlbWVcIiwgXCJnaXRodWItbGlnaHRcIik7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZShcImNyb3Nzb3JpZ2luXCIsIFwiYW5vbnltb3VzXCIpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1dHRlcmFuY2VzXCIpPy5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD48L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e21hcmtkb3duU3R5bGVzW1wibWFya2Rvd25cIl19XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb250ZW50IH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJ1dHRlcmFuY2VzXCI+PC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Qm9keTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/post-body.tsx\n");

/***/ })

})