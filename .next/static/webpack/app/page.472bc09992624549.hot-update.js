"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/Component/UI/ColorSelectorUI.tsx":
/*!**********************************************!*\
  !*** ./app/Component/UI/ColorSelectorUI.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Store/store */ \"(app-pages-browser)/./app/Store/store.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ColorSectorUI = ()=>{\n    _s();\n    const setColor = (0,_Store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((state)=>state.setColor);\n    const handleColorSelect = (param)=>{\n        let { color } = param;\n        color = \"#xxxwww\";\n        console.log(color);\n        setColor(color);\n    };\n    const colors = [\n        {\n            index: 1,\n            name: \"Pumpkin\",\n            colorValue: \"#d35400\"\n        },\n        {\n            index: 2,\n            name: \"Belize hole\",\n            colorValue: \"#3498db\"\n        },\n        {\n            index: 3,\n            name: \"Sun flower\",\n            colorValue: \"#f1c40f\"\n        },\n        {\n            index: 4,\n            name: \"Wisteria\",\n            colorValue: \"#8e44ad\"\n        },\n        {\n            index: 5,\n            name: \"Alizarin\",\n            colorValue: \"#e74c3c\"\n        },\n        {\n            index: 6,\n            name: \"Emerald\",\n            colorValue: \"#2ecc71\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex space-x-2 rounded-md border-[2px] p-6 h-[50px] items-center\",\n        children: colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-10 h-10 transition-all rounded-full cursor-pointer hover:scale-125\",\n                onClick: ()=>handleColorSelect(\"x\"),\n                style: {\n                    backgroundColor: color.colorValue\n                }\n            }, color.index, false, {\n                fileName: \"/Users/vihuuly/Documents/github/Portfolio/app/Component/UI/ColorSelectorUI.tsx\",\n                lineNumber: 27,\n                columnNumber: 15\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/vihuuly/Documents/github/Portfolio/app/Component/UI/ColorSelectorUI.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ColorSectorUI, \"reccvCLe02yj0OswqVw36ek6iJw=\", false, function() {\n    return [\n        _Store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = ColorSectorUI;\n// {colors.map((color, index) => ( \n//   <div className=\"flex flex-col items-center\"> \n//   <div \n//     key={ index }\n//     className=\"w-10 h-10 transition-all rounded-full cursor-pointer hover:scale-125\"  \n//     // onClick={ () => handleColorSelect(color.colorValue )}\n//     style={{ backgroundColor: color.colorValue }} \n//     >   \n//   </div>\n// </div>\n// ))}  \n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorSectorUI);\nvar _c;\n$RefreshReg$(_c, \"ColorSectorUI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnQvVUkvQ29sb3JTZWxlY3RvclVJLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUN5QztBQUV6QyxNQUFNQyxnQkFBZ0I7O0lBQ2xCLE1BQU1DLFdBQVdGLHdEQUFRQSxDQUFDLENBQUNHLFFBQVVBLE1BQU1ELFFBQVE7SUFFbkQsTUFBTUUsb0JBQW9CO1lBQUUsRUFBRUMsS0FBSyxFQUFzQjtRQUV2REEsUUFBTztRQUNQQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1pILFNBQVNHO0lBQ1g7SUFFQSxNQUFNRyxTQUFTO1FBQ1g7WUFBRUMsT0FBTztZQUFHQyxNQUFNO1lBQWdCQyxZQUFZO1FBQVU7UUFDeEQ7WUFBRUYsT0FBTztZQUFHQyxNQUFNO1lBQWdCQyxZQUFZO1FBQVU7UUFDeEQ7WUFBRUYsT0FBTztZQUFHQyxNQUFNO1lBQWdCQyxZQUFZO1FBQVU7UUFDeEQ7WUFBRUYsT0FBTztZQUFHQyxNQUFNO1lBQWdCQyxZQUFZO1FBQVU7UUFDeEQ7WUFBRUYsT0FBTztZQUFHQyxNQUFNO1lBQWdCQyxZQUFZO1FBQVU7UUFDeEQ7WUFBRUYsT0FBTztZQUFHQyxNQUFNO1lBQWdCQyxZQUFZO1FBQVU7S0FDM0Q7SUFHRCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWkwsT0FBT00sR0FBRyxDQUFDLENBQUNULHNCQUNULDhEQUFDTztnQkFFQ0MsV0FBVTtnQkFDVkUsU0FBVSxJQUFNWCxrQkFBbUI7Z0JBQ25DWSxPQUFPO29CQUFFQyxpQkFBaUJaLE1BQU1NLFVBQVU7Z0JBQUU7ZUFIdkNOLE1BQU1JLEtBQUs7Ozs7Ozs7Ozs7QUFTaEM7R0FqQ01SOztRQUNlRCxvREFBUUE7OztLQUR2QkM7QUFtQ0wsbUNBQW1DO0FBQ3BDLGtEQUFrRDtBQUNsRCxVQUFVO0FBQ1Ysb0JBQW9CO0FBQ3BCLHlGQUF5RjtBQUN6RiwrREFBK0Q7QUFDL0QscURBQXFEO0FBQ3JELFdBQVc7QUFDWCxXQUFXO0FBQ1gsU0FBUztBQUNQLFFBQVE7QUFDViwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvQ29tcG9uZW50L1VJL0NvbG9yU2VsZWN0b3JVSS50c3g/OTZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB1c2VTdG9yZSBmcm9tIFwiLi4vLi4vU3RvcmUvc3RvcmVcIjtcblxuY29uc3QgQ29sb3JTZWN0b3JVSSA9ICgpID0+IHsgXG4gICAgY29uc3Qgc2V0Q29sb3IgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnNldENvbG9yKTtcblxuICAgIGNvbnN0IGhhbmRsZUNvbG9yU2VsZWN0ID0gKCB7IGNvbG9yIH0gOiB7IGNvbG9yOiBzdHJpbmcgfSApID0+IHtcblxuICAgICAgY29sb3I9ICcjeHh4d3d3JztcbiAgICAgIGNvbnNvbGUubG9nKGNvbG9yKTtcbiAgICAgIHNldENvbG9yKGNvbG9yKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGNvbG9ycyA9IFsgXG4gICAgICAgIHsgaW5kZXg6IDEsIG5hbWU6ICdQdW1wa2luJywgICAgICBjb2xvclZhbHVlOiAnI2QzNTQwMCcgfSxcbiAgICAgICAgeyBpbmRleDogMiwgbmFtZTogJ0JlbGl6ZSBob2xlJywgIGNvbG9yVmFsdWU6ICcjMzQ5OGRiJyB9LCAgIC8vICcjMzQ5OGRiJ1xuICAgICAgICB7IGluZGV4OiAzLCBuYW1lOiAnU3VuIGZsb3dlcicsICAgY29sb3JWYWx1ZTogJyNmMWM0MGYnIH0sXG4gICAgICAgIHsgaW5kZXg6IDQsIG5hbWU6ICdXaXN0ZXJpYScsICAgICBjb2xvclZhbHVlOiAnIzhlNDRhZCcgfSxcbiAgICAgICAgeyBpbmRleDogNSwgbmFtZTogJ0FsaXphcmluJywgICAgIGNvbG9yVmFsdWU6ICcjZTc0YzNjJyB9LFxuICAgICAgICB7IGluZGV4OiA2LCBuYW1lOiAnRW1lcmFsZCcsICAgICAgY29sb3JWYWx1ZTogJyMyZWNjNzEnIH0sXG4gICAgXTtcbiAgICBcbiAgICBcbiAgICByZXR1cm4gKCBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiByb3VuZGVkLW1kIGJvcmRlci1bMnB4XSBwLTYgaC1bNTBweF0gaXRlbXMtY2VudGVyXCI+IFxuICAgICAgICAgIHtjb2xvcnMubWFwKChjb2xvcikgPT4gKCAgXG4gICAgICAgICAgICAgIDxkaXYgIFxuICAgICAgICAgICAgICAgIGtleT17Y29sb3IuaW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHRyYW5zaXRpb24tYWxsIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMjVcIiAgXG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IGhhbmRsZUNvbG9yU2VsZWN0KCAneCcgKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLmNvbG9yVmFsdWUgIH19IFxuICAgICAgICAgICAgICAgID4gICBcbiAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICkpfSBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG4gLy8ge2NvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKCBcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPiBcbi8vICAgPGRpdiBcbi8vICAgICBrZXk9eyBpbmRleCB9XG4vLyAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHRyYW5zaXRpb24tYWxsIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMjVcIiAgXG4vLyAgICAgLy8gb25DbGljaz17ICgpID0+IGhhbmRsZUNvbG9yU2VsZWN0KGNvbG9yLmNvbG9yVmFsdWUgKX1cbi8vICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLmNvbG9yVmFsdWUgfX0gXG4vLyAgICAgPiAgIFxuLy8gICA8L2Rpdj5cbi8vIDwvZGl2PlxuICAvLyApKX0gIFxuZXhwb3J0IGRlZmF1bHQgQ29sb3JTZWN0b3JVSTsiXSwibmFtZXMiOlsidXNlU3RvcmUiLCJDb2xvclNlY3RvclVJIiwic2V0Q29sb3IiLCJzdGF0ZSIsImhhbmRsZUNvbG9yU2VsZWN0IiwiY29sb3IiLCJjb25zb2xlIiwibG9nIiwiY29sb3JzIiwiaW5kZXgiLCJuYW1lIiwiY29sb3JWYWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm9uQ2xpY2siLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Component/UI/ColorSelectorUI.tsx\n"));

/***/ })

});