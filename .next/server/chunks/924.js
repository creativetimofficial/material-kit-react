"use strict";
exports.id = 924;
exports.ids = [924];
exports.modules = {

/***/ 7924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3843);
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_MKBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9866);
/* harmony import */ var components_MKTypography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7713);
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ // prop-types is a library for typechecking of props


// @mui material components

// Material Kit 2 React components


function DefaultInfoCard({ color , icon , title , description , direction , small  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        lineHeight: 1,
        p: direction === "center" ? 2 : 0,
        textAlign: direction,
        children: [
            typeof icon === "string" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                display: "block",
                variant: direction === "center" ? "h2" : "h3",
                color: color,
                textGradient: true,
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Icon__WEBPACK_IMPORTED_MODULE_2___default()), {
                        children: icon
                    }),
                    " "
                ]
            }) : icon,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                display: "block",
                variant: "5",
                fontWeight: "bold",
                mt: direction === "center" ? 1 : 2,
                mb: 1.5,
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                display: "block",
                variant: small ? "button" : "body2",
                color: "text",
                pr: direction === "left" ? 6 : 0,
                pl: direction === "right" ? 6 : 0,
                children: description
            })
        ]
    });
}
// Setting default props for the DefaultInfoCard
DefaultInfoCard.defaultProps = {
    color: "info",
    direction: "left",
    small: false
};
// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark", 
    ]),
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "left",
        "right",
        "center"
    ]),
    small: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultInfoCard);


/***/ })

};
;