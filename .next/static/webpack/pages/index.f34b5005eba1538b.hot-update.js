"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ModalComponent/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/ModalComponent/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalComponent\": function() { return /* binding */ ModalComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/ModalComponent/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction ModalComponent(param) {\n    var isOpen = param.isOpen, onRequestClose = param.onRequestClose, currentProject = param.currentProject;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {\n            isOpen: isOpen,\n            onRequestClose: onRequestClose,\n            overlayClassName: (_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default().reactModalOverlay),\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default().reactModalContent),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onRequestClose,\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default().reactModalClose),\n                        children: \"X\"\n                    }, void 0, false, {\n                        fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalContent),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this),\n                            (currentProject === null || currentProject === void 0 ? void 0 : currentProject.imagePath) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: currentProject === null || currentProject === void 0 ? void 0 : currentProject.imagePath,\n                                alt: \"project image\"\n                            }, void 0, false, {\n                                fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 55\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: currentProject === null || currentProject === void 0 ? void 0 : currentProject.description\n                            }, void 0, false, {\n                                fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buttonStyle),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: currentProject === null || currentProject === void 0 ? void 0 : currentProject.github,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: [\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillGithub, {}, void 0, false, {\n                                                    fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 48\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 42\n                                            }, this),\n                                            \" Acessar no Github \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n}\n_c = ModalComponent;\nvar _c;\n$RefreshReg$(_c, \"ModalComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbENvbXBvbmVudC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQjtBQUVTO0FBQ0s7QUFRdEMsU0FBU0csY0FBYyxDQUFDLEtBQXNELEVBQUUsQ0FBQztRQUF2REMsTUFBTSxHQUFSLEtBQXNELENBQXBEQSxNQUFNLEVBQUVDLGNBQWMsR0FBeEIsS0FBc0QsQ0FBNUNBLGNBQWMsRUFBRUMsY0FBYyxHQUF4QyxLQUFzRCxDQUE1QkEsY0FBYztJQUNuRSxNQUFNOzhGQUVHTixvREFBSztZQUNGSSxNQUFNLEVBQUVBLE1BQU07WUFDZEMsY0FBYyxFQUFFQSxjQUFjO1lBQzlCRSxnQkFBZ0IsRUFBRU4sNkVBQXdCO1lBQzFDUSxTQUFTLEVBQUVSLDZFQUF3QjtrR0FFbENVLENBQUc7O2dHQUNDQyxDQUFNO3dCQUNIQyxPQUFPLEVBQUVSLGNBQWM7d0JBQ3ZCSSxTQUFTLEVBQUVSLDJFQUFzQjtrQ0FDcEMsQ0FFRDs7Ozs7O2dHQUVDVSxDQUFHO3dCQUFDRixTQUFTLEVBQUVSLHdFQUFtQjs7d0dBQzlCZSxDQUFFOzBDQUFFVixjQUFjLGFBQWRBLGNBQWMsS0FBZEEsSUFBSSxDQUFKQSxDQUFxQixHQUFyQkEsSUFBSSxDQUFKQSxDQUFxQixHQUFyQkEsY0FBYyxDQUFFVyxLQUFLOzs7Ozs7NkJBQ3pCWCxjQUFjLGFBQWRBLGNBQWMsS0FBZEEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsY0FBYyxDQUFFWSxTQUFTLGlGQUFLQyxDQUFHO2dDQUFDQyxHQUFHLEVBQUVkLGNBQWMsYUFBZEEsY0FBYyxLQUFkQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxjQUFjLENBQUVZLFNBQVM7Z0NBQUVHLEdBQUcsRUFBQyxDQUFlOzs7Ozs7d0dBQ3JGQyxDQUFDOzBDQUFFaEIsY0FBYyxhQUFkQSxjQUFjLEtBQWRBLElBQUksQ0FBSkEsQ0FBMkIsR0FBM0JBLElBQUksQ0FBSkEsQ0FBMkIsR0FBM0JBLGNBQWMsQ0FBRWlCLFdBQVc7Ozs7Ozt3R0FDOUJaLENBQUc7Z0NBQUNGLFNBQVMsRUFBRVIsdUVBQWtCO3NIQUM3QndCLENBQUM7b0NBQUNDLElBQUksRUFBRXBCLGNBQWMsYUFBZEEsY0FBYyxLQUFkQSxJQUFJLENBQUpBLENBQXNCLEdBQXRCQSxJQUFJLENBQUpBLENBQXNCLEdBQXRCQSxjQUFjLENBQUVxQixNQUFNOzBIQUMxQmYsQ0FBTTs7NENBQUMsQ0FBQzt3SEFBQ2dCLENBQUk7c0lBQUUxQix3REFBWTs7Ozs7Ozs7Ozs0Q0FBVSxDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekYsQ0FBQztLQS9CZUMsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb2RhbENvbXBvbmVudC9pbmRleC50c3g/ZmI5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvVHlwZVByb2plY3RzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBBaUZpbGxHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XG5cbmludGVyZmFjZSBNb2RhbFByb3BzIHtcbiAgICBpc09wZW46IGJvb2xlYW5cbiAgICBvblJlcXVlc3RDbG9zZTogKCkgPT4gdm9pZFxuICAgIGN1cnJlbnRQcm9qZWN0OiBQcm9qZWN0VHlwZXMgfCBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNb2RhbENvbXBvbmVudCh7IGlzT3Blbiwgb25SZXF1ZXN0Q2xvc2UsIGN1cnJlbnRQcm9qZWN0IH06IE1vZGFsUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e29uUmVxdWVzdENsb3NlfVxuICAgICAgICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9e3N0eWxlcy5yZWFjdE1vZGFsT3ZlcmxheX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yZWFjdE1vZGFsQ29udGVudH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlcXVlc3RDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0TW9kYWxDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2N1cnJlbnRQcm9qZWN0Py50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qZWN0Py5pbWFnZVBhdGggJiYgPGltZyBzcmM9e2N1cnJlbnRQcm9qZWN0Py5pbWFnZVBhdGh9IGFsdD1cInByb2plY3QgaW1hZ2VcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjdXJyZW50UHJvamVjdD8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25TdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y3VycmVudFByb2plY3Q/LmdpdGh1Yn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+IDxzcGFuPjxBaUZpbGxHaXRodWIgLz48L3NwYW4+IEFjZXNzYXIgbm8gR2l0aHViIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsiTW9kYWwiLCJzdHlsZXMiLCJBaUZpbGxHaXRodWIiLCJNb2RhbENvbXBvbmVudCIsImlzT3BlbiIsIm9uUmVxdWVzdENsb3NlIiwiY3VycmVudFByb2plY3QiLCJvdmVybGF5Q2xhc3NOYW1lIiwicmVhY3RNb2RhbE92ZXJsYXkiLCJjbGFzc05hbWUiLCJyZWFjdE1vZGFsQ29udGVudCIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZWFjdE1vZGFsQ2xvc2UiLCJtb2RhbENvbnRlbnQiLCJoMSIsInRpdGxlIiwiaW1hZ2VQYXRoIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsImRlc2NyaXB0aW9uIiwiYnV0dG9uU3R5bGUiLCJhIiwiaHJlZiIsImdpdGh1YiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ModalComponent/index.tsx\n");

/***/ })

});