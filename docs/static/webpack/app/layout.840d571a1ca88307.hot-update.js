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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"084a1f892265\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz8zYmZjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiMDg0YTFmODkyMjY1XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/index.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/layout/SideBar.tsx":
/*!*******************************************!*\
  !*** ./src/components/layout/SideBar.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst SideBar = (param)=>{\n    let { visible, onClose } = param;\n    _s();\n    const asideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!asideRef.current) {\n            return;\n        }\n        const handleClick = (e)=>{\n            var _asideRef_current;\n            if (!((_asideRef_current = asideRef.current) === null || _asideRef_current === void 0 ? void 0 : _asideRef_current.contains(e.target))) {\n                var _asideRef_current1;\n                const animation = (_asideRef_current1 = asideRef.current) === null || _asideRef_current1 === void 0 ? void 0 : _asideRef_current1.animate([\n                    {\n                        transform: \"translateX(0)\"\n                    },\n                    {\n                        transform: \"translateX(-100%)\"\n                    }\n                ], 200);\n                animation === null || animation === void 0 ? void 0 : animation.finished.then(onClose);\n            }\n        };\n        document.addEventListener(\"click\", handleClick);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClick);\n        };\n    }, [\n        onClose\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed top-0 bottom-0 left-0 right-0 z-20 bg-black bg-opacity-30\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n            ref: asideRef,\n            className: \"w-20 h-full bg-red-500 animate-wiggle\",\n            children: \"123\"\n        }, void 0, false, {\n            fileName: \"/Users/0ho/workspace/oungo.github.io/src/components/layout/SideBar.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/0ho/workspace/oungo.github.io/src/components/layout/SideBar.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SideBar, \"KG5k4OUf6pobOq6xrQKKN51CgSg=\");\n_c = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(SideBar));\nvar _c, _c1;\n$RefreshReg$(_c, \"SideBar\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9TaWRlQmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFPaEQsTUFBTUcsVUFBVTtRQUFDLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFTOztJQUMxQyxNQUFNQyxXQUFXSiw2Q0FBTUEsQ0FBcUI7SUFFNUNELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDSyxTQUFTQyxPQUFPLEVBQUU7WUFDckI7UUFDRjtRQUVBLE1BQU1DLGNBQWMsQ0FBQ0M7Z0JBQ2RIO1lBQUwsSUFBSSxHQUFDQSxvQkFBQUEsU0FBU0MsT0FBTyxjQUFoQkQsd0NBQUFBLGtCQUFrQkksUUFBUSxDQUFDRCxFQUFFRSxNQUFNLElBQWtCO29CQUN0Q0w7Z0JBQWxCLE1BQU1NLGFBQVlOLHFCQUFBQSxTQUFTQyxPQUFPLGNBQWhCRCx5Q0FBQUEsbUJBQWtCTyxPQUFPLENBQ3pDO29CQUFDO3dCQUFFQyxXQUFXO29CQUFnQjtvQkFBRzt3QkFBRUEsV0FBVztvQkFBb0I7aUJBQUUsRUFDcEU7Z0JBRUZGLHNCQUFBQSxnQ0FBQUEsVUFBV0csUUFBUSxDQUFDQyxJQUFJLENBQUNYO1lBQzNCO1FBQ0Y7UUFFQVksU0FBU0MsZ0JBQWdCLENBQUMsU0FBU1Y7UUFDbkMsT0FBTztZQUNMUyxTQUFTRSxtQkFBbUIsQ0FBQyxTQUFTWDtRQUN4QztJQUNGLEdBQUc7UUFBQ0g7S0FBUTtJQUVaLHFCQUNFLDhEQUFDZTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFNQyxLQUFLakI7WUFBVWUsV0FBWTtzQkFBd0M7Ozs7Ozs7Ozs7O0FBS2hGO0dBL0JNbEI7S0FBQUE7QUFpQ04sa0ZBQWVILDJDQUFJQSxDQUFDRyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9TaWRlQmFyLnRzeD9kMzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8sIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBTaWRlQmFyID0gKHsgdmlzaWJsZSwgb25DbG9zZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBhc2lkZVJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhc2lkZVJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFhc2lkZVJlZi5jdXJyZW50Py5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gYXNpZGVSZWYuY3VycmVudD8uYW5pbWF0ZShcbiAgICAgICAgICBbeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9LCB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJyB9XSxcbiAgICAgICAgICAyMDBcbiAgICAgICAgKTtcbiAgICAgICAgYW5pbWF0aW9uPy5maW5pc2hlZC50aGVuKG9uQ2xvc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgfTtcbiAgfSwgW29uQ2xvc2VdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgei0yMCBiZy1ibGFjayBiZy1vcGFjaXR5LTMwXCI+XG4gICAgICA8YXNpZGUgcmVmPXthc2lkZVJlZn0gY2xhc3NOYW1lPXtgdy0yMCBoLWZ1bGwgYmctcmVkLTUwMCBhbmltYXRlLXdpZ2dsZWB9PlxuICAgICAgICAxMjNcbiAgICAgIDwvYXNpZGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFNpZGVCYXIpO1xuIl0sIm5hbWVzIjpbIm1lbW8iLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJTaWRlQmFyIiwidmlzaWJsZSIsIm9uQ2xvc2UiLCJhc2lkZVJlZiIsImN1cnJlbnQiLCJoYW5kbGVDbGljayIsImUiLCJjb250YWlucyIsInRhcmdldCIsImFuaW1hdGlvbiIsImFuaW1hdGUiLCJ0cmFuc2Zvcm0iLCJmaW5pc2hlZCIsInRoZW4iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXNpZGUiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/layout/SideBar.tsx\n"));

/***/ })

});