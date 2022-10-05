"use strict";
(() => {
var exports = {};
exports.id = 43;
exports.ids = [43];
exports.modules = {

/***/ 3446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_MKBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9866);
/* harmony import */ var components_MKTypography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7713);
// prop-types is a library for typechecking of props


// @mui material components

// Material Kit 2 React components


function ExampleCard({ image , name , count , pro , ...rest }) {
    const imageTemplate = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        bgColor: "white",
        borderRadius: "xl",
        shadow: "lg",
        minHeight: "10rem",
        sx: {
            overflow: "hidden",
            transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
            transformOrigin: "50% 0",
            backfaceVisibility: "hidden",
            willChange: "transform, box-shadow",
            transition: "transform 200ms ease-out",
            "&:hover": {
                transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)"
            }
        },
        ...rest,
        children: [
            pro && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 2,
                p: 1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    width: "24px",
                    height: "24px",
                    viewBox: "0 0 24 24",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        id: "lock-black",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                id: "Oval",
                                fill: "#1F2937",
                                cx: "12",
                                cy: "12",
                                r: "12"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                id: "padlock",
                                transform: "translate(7.000000, 5.000000)",
                                fill: "#FFFFFF",
                                fillRule: "nonzero",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M5,0 C3.16666667,0 1.66666667,1.5 1.66666667,3.33333333 L1.66666667,4.58333333 C0.666666667,5.5 0,6.83333333 0,8.33333333 C0,11.0833333 2.25,13.3333333 5,13.3333333 C7.75,13.3333333 10,11.0833333 10,8.33333333 C10,6.83333333 9.33333333,5.5 8.33333333,4.58333333 L8.33333333,3.33333333 C8.33333333,1.5 6.83333333,0 5,0 Z M5.83333333,8.91666667 L5.83333333,10.8333333 L4.16666667,10.8333333 L4.16666667,8.91666667 C3.66666667,8.66666667 3.33333333,8.08333333 3.33333333,7.5 C3.33333333,6.58333333 4.08333333,5.83333333 5,5.83333333 C5.91666667,5.83333333 6.66666667,6.58333333 6.66666667,7.5 C6.66666667,8.08333333 6.33333333,8.66666667 5.83333333,8.91666667 Z M6.66666667,3.66666667 C6.16666667,3.41666667 5.58333333,3.33333333 5,3.33333333 C4.41666667,3.33333333 3.83333333,3.41666667 3.33333333,3.66666667 L3.33333333,3.33333333 C3.33333333,2.41666667 4.08333333,1.66666667 5,1.66666667 C5.91666667,1.66666667 6.66666667,2.41666667 6.66666667,3.33333333 L6.66666667,3.66666667 Z"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                component: "img",
                src: image,
                alt: name,
                width: "100%",
                my: "auto",
                opacity: pro ? 0.6 : 1
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        position: "relative",
        children: [
            pro ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), {
                title: "Pro Element",
                placement: "top",
                children: imageTemplate
            }) : imageTemplate,
            name || count > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                mt: 1,
                ml: 1,
                lineHeight: 1,
                children: [
                    name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        variant: "h6",
                        fontWeight: "bold",
                        children: name
                    }),
                    count > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        variant: "button",
                        fontWeight: "regular",
                        color: "secondary",
                        children: [
                            count,
                            " ",
                            count === 1 ? "Example" : "Examples"
                        ]
                    })
                ]
            }) : null
        ]
    });
}
// Setting default props for the ExampleCard
ExampleCard.defaultProps = {
    name: "",
    count: 0,
    pro: false
};
// Typechecking props for the ExampleCard
ExampleCard.propTypes = {
    image: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    pro: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExampleCard);


/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 7229:
/***/ ((module) => {

module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [341], () => (__webpack_exec__(3446)));
module.exports = __webpack_exports__;

})();