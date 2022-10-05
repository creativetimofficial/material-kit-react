"use strict";
exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 8927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MKAvatar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/components/MKAvatar/MKAvatarRoot.js
/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ // @mui material components


/* harmony default export */ const MKAvatarRoot = ((0,styles_.styled)((Avatar_default()))(({ theme , ownerState  })=>{
    const { palette , functions , typography , boxShadows  } = theme;
    const { shadow , bgColor , size  } = ownerState;
    const { gradients , transparent , white  } = palette;
    const { pxToRem , linearGradient  } = functions;
    const { size: fontSize , fontWeightRegular  } = typography;
    // backgroundImage value
    const backgroundValue = bgColor === "transparent" ? transparent.main : linearGradient(gradients[bgColor].main, gradients[bgColor].state);
    // size value
    let sizeValue;
    switch(size){
        case "xs":
            sizeValue = {
                width: pxToRem(24),
                height: pxToRem(24),
                fontSize: fontSize.xs
            };
            break;
        case "sm":
            sizeValue = {
                width: pxToRem(36),
                height: pxToRem(36),
                fontSize: fontSize.sm
            };
            break;
        case "lg":
            sizeValue = {
                width: pxToRem(58),
                height: pxToRem(58),
                fontSize: fontSize.sm
            };
            break;
        case "xl":
            sizeValue = {
                width: pxToRem(74),
                height: pxToRem(74),
                fontSize: fontSize.md
            };
            break;
        case "xxl":
            sizeValue = {
                width: pxToRem(110),
                height: pxToRem(110),
                fontSize: fontSize.md
            };
            break;
        default:
            {
                sizeValue = {
                    width: pxToRem(48),
                    height: pxToRem(48),
                    fontSize: fontSize.md
                };
            }
    }
    return {
        background: backgroundValue,
        color: white.main,
        fontWeight: fontWeightRegular,
        boxShadow: boxShadows[shadow],
        ...sizeValue
    };
}));

;// CONCATENATED MODULE: ./src/components/MKAvatar/index.js
/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// prop-types is a library for typechecking of props

// Custom styles for MKAvatar

const MKAvatar = /*#__PURE__*/ (0,external_react_.forwardRef)(({ bgColor , size , shadow , ...rest }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(MKAvatarRoot, {
        ref: ref,
        ownerState: {
            shadow,
            bgColor,
            size
        },
        ...rest
    }));
// Setting default values for the props of MKAvatar
MKAvatar.defaultProps = {
    bgColor: "transparent",
    size: "md",
    shadow: "none"
};
// Typechecking props for the MKAvatar
MKAvatar.propTypes = {
    bgColor: external_prop_types_default().oneOf([
        "transparent",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark", 
    ]),
    size: external_prop_types_default().oneOf([
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "xxl"
    ]),
    shadow: external_prop_types_default().oneOf([
        "none",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "xxl",
        "inset"
    ])
};
/* harmony default export */ const components_MKAvatar = (MKAvatar);


/***/ })

};
;