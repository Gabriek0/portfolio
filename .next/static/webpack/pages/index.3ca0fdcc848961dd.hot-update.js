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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalComponent\": function() { return /* binding */ ModalComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/ModalComponent/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ModalComponent(param) {\n    var isOpen = param.isOpen, closeModal = param.closeModal;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {\n            isOpen: isOpen,\n            onRequestClose: closeModal,\n            overlayClassName: (_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default().reactModalOverlay),\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default().reactModalContent),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"X\"\n                    }, void 0, false, {\n                        fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Modal\"\n                    }, void 0, false, {\n                        fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/gabriel/codes/Projects/portfolio/src/components/ModalComponent/index.tsx\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n}\n_c = ModalComponent;\nvar _c;\n$RefreshReg$(_c, \"ModalComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbENvbXBvbmVudC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1M7QUFPakMsU0FBU0UsY0FBYyxDQUFDLEtBQWtDLEVBQUUsQ0FBQztRQUFuQ0MsTUFBTSxHQUFSLEtBQWtDLENBQWhDQSxNQUFNLEVBQUVDLFVBQVUsR0FBcEIsS0FBa0MsQ0FBeEJBLFVBQVU7SUFDL0MsTUFBTTs4RkFFR0osb0RBQUs7WUFDRkcsTUFBTSxFQUFFQSxNQUFNO1lBQ2RFLGNBQWMsRUFBRUQsVUFBVTtZQUMxQkUsZ0JBQWdCLEVBQUVMLDZFQUF3QjtZQUMxQ08sU0FBUyxFQUFFUCw2RUFBd0I7a0dBRWxDUyxDQUFHOztnR0FDQ0MsQ0FBTTtrQ0FBQyxDQUFDOzs7Ozs7Z0dBQ1JDLENBQUU7a0NBQUMsQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCLENBQUM7S0FoQmVWLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxDb21wb25lbnQvaW5kZXgudHN4P2ZiOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJ1xuXG5pbnRlcmZhY2UgTW9kYWxQcm9wcyB7XG4gICAgaXNPcGVuOiBib29sZWFuXG4gICAgY2xvc2VNb2RhbDogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gTW9kYWxDb21wb25lbnQoeyBpc09wZW4sIGNsb3NlTW9kYWwgfTogTW9kYWxQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPXtzdHlsZXMucmVhY3RNb2RhbE92ZXJsYXl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVhY3RNb2RhbENvbnRlbnR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5YPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5Nb2RhbDwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIk1vZGFsIiwic3R5bGVzIiwiTW9kYWxDb21wb25lbnQiLCJpc09wZW4iLCJjbG9zZU1vZGFsIiwib25SZXF1ZXN0Q2xvc2UiLCJvdmVybGF5Q2xhc3NOYW1lIiwicmVhY3RNb2RhbE92ZXJsYXkiLCJjbGFzc05hbWUiLCJyZWFjdE1vZGFsQ29udGVudCIsImRpdiIsImJ1dHRvbiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ModalComponent/index.tsx\n");

/***/ })

});