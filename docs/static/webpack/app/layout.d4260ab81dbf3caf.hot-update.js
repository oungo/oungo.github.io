"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"1facd588d023\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz8zYmZjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiMWZhY2Q1ODhkMDIzXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/index.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/layout/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/layout/Header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideBar */ \"(app-pages-browser)/./src/components/layout/SideBar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Header = ()=>{\n    _s();\n    const [isShowSideBar, setIsShowSideBar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleClickMenu = ()=>{\n        setIsShowSideBar(!isShowSideBar);\n    };\n    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        setIsShowSideBar(false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"fixed top-0 z-10 w-full py-3 m-auto text-3xl font-extrabold text-center bg-white bg-opacity-30 backdrop-blur-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"absolute text-xl -translate-y-1/2 left-5 top-1/2 fa-solid fa-bars\",\n                        onClick: handleClickMenu\n                    }, void 0, false, {\n                        fileName: \"/Users/0ho/workspace/oungo.github.io/src/components/layout/Header.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: \"oungo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/0ho/workspace/oungo.github.io/src/components/layout/Header.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/0ho/workspace/oungo.github.io/src/components/layout/Header.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            isShowSideBar && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClose: onClose\n            }, void 0, false, {\n                fileName: \"/Users/0ho/workspace/oungo.github.io/src/components/layout/Header.tsx\",\n                lineNumber: 26,\n                columnNumber: 25\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Header, \"EQU/cKN+onC17XnXnYiJ80oCH+Q=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU2QjtBQUN3QjtBQUVyQjtBQUVoQyxNQUFNSyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1LLGtCQUFrQjtRQUN0QkQsaUJBQWlCLENBQUNEO0lBQ3BCO0lBRUEsTUFBTUcsVUFBVVAsa0RBQVdBLENBQUM7UUFDMUJLLGlCQUFpQjtJQUNuQixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNHO2dCQUFPQyxXQUFVOztrQ0FDaEIsOERBQUNDO3dCQUFFRCxXQUFVO3dCQUFvRUUsU0FBU0w7Ozs7OztrQ0FDMUYsOERBQUNSLGtEQUFJQTt3QkFBQ2MsTUFBSztrQ0FBSTs7Ozs7Ozs7Ozs7O1lBR2hCUiwrQkFBaUIsOERBQUNGLGdEQUFPQTtnQkFBQ0ssU0FBU0E7Ozs7Ozs7O0FBRzFDO0dBckJNSjtLQUFBQTtBQXVCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLnRzeD8wNjhiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTaWRlQmFyIGZyb20gJy4vU2lkZUJhcic7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW2lzU2hvd1NpZGVCYXIsIHNldElzU2hvd1NpZGVCYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrTWVudSA9ICgpID0+IHtcbiAgICBzZXRJc1Nob3dTaWRlQmFyKCFpc1Nob3dTaWRlQmFyKTtcbiAgfTtcblxuICBjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzU2hvd1NpZGVCYXIoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCB6LTEwIHctZnVsbCBweS0zIG0tYXV0byB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWNlbnRlciBiZy13aGl0ZSBiZy1vcGFjaXR5LTMwIGJhY2tkcm9wLWJsdXItc21cIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC14bCAtdHJhbnNsYXRlLXktMS8yIGxlZnQtNSB0b3AtMS8yIGZhLXNvbGlkIGZhLWJhcnNcIiBvbkNsaWNrPXtoYW5kbGVDbGlja01lbnV9IC8+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+b3VuZ288L0xpbms+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAge2lzU2hvd1NpZGVCYXIgJiYgPFNpZGVCYXIgb25DbG9zZT17b25DbG9zZX0gLz59XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsIlNpZGVCYXIiLCJIZWFkZXIiLCJpc1Nob3dTaWRlQmFyIiwic2V0SXNTaG93U2lkZUJhciIsImhhbmRsZUNsaWNrTWVudSIsIm9uQ2xvc2UiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJpIiwib25DbGljayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/layout/Header.tsx\n"));

/***/ })

});