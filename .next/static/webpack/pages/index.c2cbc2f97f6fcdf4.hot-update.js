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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalComponent\": function() { return /* binding */ ModalComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/ModalComponent/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction ModalComponent(param) {\n    var isOpen = param.isOpen, onRequestClose = param.onRequestClose, currentProject = param.currentProject;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {\n            isOpen: isOpen,\n            onRequestClose: onRequestClose,\n            overlayClassName: (_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default().reactModalOverlay),\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default().reactModalContent),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onRequestClose,\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default().reactModalClose),\n                        children: \"X\"\n                    }, void 0, false, {\n                        fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalContent),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this),\n                            (currentProject === null || currentProject === void 0 ? void 0 : currentProject.imagePath) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: currentProject === null || currentProject === void 0 ? void 0 : currentProject.imagePath,\n                                alt: \"project image\"\n                            }, void 0, false, {\n                                fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 55\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: currentProject === null || currentProject === void 0 ? void 0 : currentProject.description\n                            }, void 0, false, {\n                                fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillGithub, {}, void 0, false, {\n                                                fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 44\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 38\n                                        }, this),\n                                        \" Acessar no Github \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n}\n_c = ModalComponent;\nvar _c;\n$RefreshReg$(_c, \"ModalComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbENvbXBvbmVudC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQjtBQUVTO0FBQ0s7QUFRdEMsU0FBU0csY0FBYyxDQUFDLEtBQXNELEVBQUUsQ0FBQztRQUF2REMsTUFBTSxHQUFSLEtBQXNELENBQXBEQSxNQUFNLEVBQUVDLGNBQWMsR0FBeEIsS0FBc0QsQ0FBNUNBLGNBQWMsRUFBRUMsY0FBYyxHQUF4QyxLQUFzRCxDQUE1QkEsY0FBYztJQUNuRSxNQUFNOzhGQUVHTixvREFBSztZQUNGSSxNQUFNLEVBQUVBLE1BQU07WUFDZEMsY0FBYyxFQUFFQSxjQUFjO1lBQzlCRSxnQkFBZ0IsRUFBRU4sNkVBQXdCO1lBQzFDUSxTQUFTLEVBQUVSLDZFQUF3QjtrR0FFbENVLENBQUc7O2dHQUNDQyxDQUFNO3dCQUNIQyxPQUFPLEVBQUVSLGNBQWM7d0JBQ3ZCSSxTQUFTLEVBQUVSLDJFQUFzQjtrQ0FDcEMsQ0FFRDs7Ozs7O2dHQUVDVSxDQUFHO3dCQUFDRixTQUFTLEVBQUVSLHdFQUFtQjs7d0dBQzlCZSxDQUFFOzBDQUFFVixjQUFjLGFBQWRBLGNBQWMsS0FBZEEsSUFBSSxDQUFKQSxDQUFxQixHQUFyQkEsSUFBSSxDQUFKQSxDQUFxQixHQUFyQkEsY0FBYyxDQUFFVyxLQUFLOzs7Ozs7NkJBQ3pCWCxjQUFjLGFBQWRBLGNBQWMsS0FBZEEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsY0FBYyxDQUFFWSxTQUFTLGlGQUFLQyxDQUFHO2dDQUFDQyxHQUFHLEVBQUVkLGNBQWMsYUFBZEEsY0FBYyxLQUFkQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxjQUFjLENBQUVZLFNBQVM7Z0NBQUVHLEdBQUcsRUFBQyxDQUFlOzs7Ozs7d0dBQ3JGQyxDQUFDOzBDQUFFaEIsY0FBYyxhQUFkQSxjQUFjLEtBQWRBLElBQUksQ0FBSkEsQ0FBMkIsR0FBM0JBLElBQUksQ0FBSkEsQ0FBMkIsR0FBM0JBLGNBQWMsQ0FBRWlCLFdBQVc7Ozs7Ozt3R0FDOUJaLENBQUc7c0hBQ0NDLENBQU07O3dDQUFDLENBQUM7b0hBQUNZLENBQUk7a0lBQUV0Qix3REFBWTs7Ozs7Ozs7Ozt3Q0FBVSxDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JGLENBQUM7S0E3QmVDLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxDb21wb25lbnQvaW5kZXgudHN4P2ZiOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCB7IFByb2plY3RUeXBlcyB9IGZyb20gJy4uLy4uL3R5cGVzL1R5cGVQcm9qZWN0cyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgQWlGaWxsR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuXG5pbnRlcmZhY2UgTW9kYWxQcm9wcyB7XG4gICAgaXNPcGVuOiBib29sZWFuXG4gICAgb25SZXF1ZXN0Q2xvc2U6ICgpID0+IHZvaWRcbiAgICBjdXJyZW50UHJvamVjdDogUHJvamVjdFR5cGVzIHwgbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gTW9kYWxDb21wb25lbnQoeyBpc09wZW4sIG9uUmVxdWVzdENsb3NlLCBjdXJyZW50UHJvamVjdCB9OiBNb2RhbFByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX1cbiAgICAgICAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPXtzdHlsZXMucmVhY3RNb2RhbE92ZXJsYXl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3RNb2RhbENvbnRlbnR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZXF1ZXN0Q2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yZWFjdE1vZGFsQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntjdXJyZW50UHJvamVjdD8udGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UHJvamVjdD8uaW1hZ2VQYXRoICYmIDxpbWcgc3JjPXtjdXJyZW50UHJvamVjdD8uaW1hZ2VQYXRofSBhbHQ9XCJwcm9qZWN0IGltYWdlXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Y3VycmVudFByb2plY3Q/LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj4gPHNwYW4+PEFpRmlsbEdpdGh1YiAvPjwvc3Bhbj4gQWNlc3NhciBubyBHaXRodWIgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIk1vZGFsIiwic3R5bGVzIiwiQWlGaWxsR2l0aHViIiwiTW9kYWxDb21wb25lbnQiLCJpc09wZW4iLCJvblJlcXVlc3RDbG9zZSIsImN1cnJlbnRQcm9qZWN0Iiwib3ZlcmxheUNsYXNzTmFtZSIsInJlYWN0TW9kYWxPdmVybGF5IiwiY2xhc3NOYW1lIiwicmVhY3RNb2RhbENvbnRlbnQiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwicmVhY3RNb2RhbENsb3NlIiwibW9kYWxDb250ZW50IiwiaDEiLCJ0aXRsZSIsImltYWdlUGF0aCIsImltZyIsInNyYyIsImFsdCIsInAiLCJkZXNjcmlwdGlvbiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ModalComponent/index.tsx\n");

/***/ })

});