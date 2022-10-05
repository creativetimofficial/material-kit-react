"use strict";
exports.id = 1670;
exports.ids = [1670];
exports.modules = {

/***/ 11670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17857);
/* harmony import */ var components_MKBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9866);
/* harmony import */ var components_MKTypography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27713);
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ // prop-types is a library for typechecking of props.


// react-countup component

// Material Kit 2 React components


function DefaultCounterCard({ color , count , title , description , ...rest }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKBox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        p: 2,
        textAlign: "center",
        lineHeight: 1,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                variant: "h1",
                color: color,
                textGradient: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_countup__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                    end: count,
                    duration: 1,
                    ...rest
                })
            }),
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                variant: "h5",
                mt: 2,
                mb: 1,
                children: title
            }),
            description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                variant: "body2",
                color: "text",
                children: description
            })
        ]
    });
}
// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
    color: "info",
    description: "",
    title: ""
};
// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
    color: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark", 
    ]),
    count: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultCounterCard);


/***/ })

};
;