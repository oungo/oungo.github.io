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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"23914fb2438b\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz8zYmZjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiMjM5MTRmYjI0MzhiXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/index.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/layout/SideBar.tsx":
/*!*******************************************!*\
  !*** ./src/components/layout/SideBar.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst SideBar = (param)=>{\n    let { onClose } = param;\n    _s();\n    const asideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!asideRef.current) {\n            return;\n        }\n        const handleClick = (e)=>{\n            var _asideRef_current;\n            if (!((_asideRef_current = asideRef.current) === null || _asideRef_current === void 0 ? void 0 : _asideRef_current.contains(e.target))) {\n                var _asideRef_current1;\n                const animation = (_asideRef_current1 = asideRef.current) === null || _asideRef_current1 === void 0 ? void 0 : _asideRef_current1.animate([\n                    {\n                        transform: \"translateX(0)\"\n                    },\n                    {\n                        transform: \"translateX(-100%)\"\n                    }\n                ], {\n                    duration: 200,\n                    fill: \"forwards\"\n                });\n                animation === null || animation === void 0 ? void 0 : animation.finished.then(onClose);\n            }\n        };\n        document.addEventListener(\"click\", handleClick);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClick);\n        };\n    }, [\n        onClose\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed top-0 bottom-0 left-0 right-0 z-20 bg-black bg-opacity-30\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n            ref: asideRef,\n            className: \"w-20 h-full p-5 bg-white animate-slideRight\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://github.com/oungo\",\n                    target: \"_blank\",\n                    rel: \"noopenner\"\n                }, void 0, false, {\n                    fileName: \"/Users/0ho/workspace/oungo.github.io/src/components/layout/SideBar.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"text-2xl fa-brands fa-github\"\n                }, void 0, false, {\n                    fileName: \"/Users/0ho/workspace/oungo.github.io/src/components/layout/SideBar.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/0ho/workspace/oungo.github.io/src/components/layout/SideBar.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/0ho/workspace/oungo.github.io/src/components/layout/SideBar.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SideBar, \"KG5k4OUf6pobOq6xrQKKN51CgSg=\");\n_c = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(SideBar));\nvar _c, _c1;\n$RefreshReg$(_c, \"SideBar\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9TaWRlQmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFNaEQsTUFBTUcsVUFBVTtRQUFDLEVBQUVDLE9BQU8sRUFBUzs7SUFDakMsTUFBTUMsV0FBV0gsNkNBQU1BLENBQXFCO0lBRTVDRCxnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ0ksU0FBU0MsT0FBTyxFQUFFO1lBQ3JCO1FBQ0Y7UUFFQSxNQUFNQyxjQUFjLENBQUNDO2dCQUNkSDtZQUFMLElBQUksR0FBQ0Esb0JBQUFBLFNBQVNDLE9BQU8sY0FBaEJELHdDQUFBQSxrQkFBa0JJLFFBQVEsQ0FBQ0QsRUFBRUUsTUFBTSxJQUFrQjtvQkFDdENMO2dCQUFsQixNQUFNTSxhQUFZTixxQkFBQUEsU0FBU0MsT0FBTyxjQUFoQkQseUNBQUFBLG1CQUFrQk8sT0FBTyxDQUN6QztvQkFBQzt3QkFBRUMsV0FBVztvQkFBZ0I7b0JBQUc7d0JBQUVBLFdBQVc7b0JBQW9CO2lCQUFFLEVBQ3BFO29CQUNFQyxVQUFVO29CQUNWQyxNQUFNO2dCQUNSO2dCQUVGSixzQkFBQUEsZ0NBQUFBLFVBQVdLLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDYjtZQUMzQjtRQUNGO1FBRUFjLFNBQVNDLGdCQUFnQixDQUFDLFNBQVNaO1FBQ25DLE9BQU87WUFDTFcsU0FBU0UsbUJBQW1CLENBQUMsU0FBU2I7UUFDeEM7SUFDRixHQUFHO1FBQUNIO0tBQVE7SUFFWixxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQU1DLEtBQUtuQjtZQUFVaUIsV0FBVTs7OEJBQzlCLDhEQUFDRztvQkFBRUMsTUFBSztvQkFBMkJoQixRQUFPO29CQUFTaUIsS0FBSTs7Ozs7OzhCQUN2RCw4REFBQ0M7b0JBQUVOLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJCO0dBbkNNbkI7S0FBQUE7QUFxQ04sa0ZBQWVILDJDQUFJQSxDQUFDRyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9TaWRlQmFyLnRzeD9kMzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8sIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBTaWRlQmFyID0gKHsgb25DbG9zZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBhc2lkZVJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhc2lkZVJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFhc2lkZVJlZi5jdXJyZW50Py5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gYXNpZGVSZWYuY3VycmVudD8uYW5pbWF0ZShcbiAgICAgICAgICBbeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9LCB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJyB9XSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgZmlsbDogJ2ZvcndhcmRzJyxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGFuaW1hdGlvbj8uZmluaXNoZWQudGhlbihvbkNsb3NlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgIH07XG4gIH0sIFtvbkNsb3NlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHotMjAgYmctYmxhY2sgYmctb3BhY2l0eS0zMFwiPlxuICAgICAgPGFzaWRlIHJlZj17YXNpZGVSZWZ9IGNsYXNzTmFtZT1cInctMjAgaC1mdWxsIHAtNSBiZy13aGl0ZSBhbmltYXRlLXNsaWRlUmlnaHRcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9vdW5nb1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3Blbm5lclwiIC8+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInRleHQtMnhsIGZhLWJyYW5kcyBmYS1naXRodWJcIiAvPlxuICAgICAgPC9hc2lkZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oU2lkZUJhcik7XG4iXSwibmFtZXMiOlsibWVtbyIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlNpZGVCYXIiLCJvbkNsb3NlIiwiYXNpZGVSZWYiLCJjdXJyZW50IiwiaGFuZGxlQ2xpY2siLCJlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJhbmltYXRpb24iLCJhbmltYXRlIiwidHJhbnNmb3JtIiwiZHVyYXRpb24iLCJmaWxsIiwiZmluaXNoZWQiLCJ0aGVuIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImFzaWRlIiwicmVmIiwiYSIsImhyZWYiLCJyZWwiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/layout/SideBar.tsx\n"));

/***/ })

});