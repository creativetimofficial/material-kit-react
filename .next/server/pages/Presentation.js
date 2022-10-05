"use strict";
(() => {
var exports = {};
exports.id = 271;
exports.ids = [271,663,435,845,439,538,922,678,499,388,952,195,546,921,393];
exports.modules = {

/***/ 3139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Presentation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: ./src/components/MKBox/index.js + 1 modules
var MKBox = __webpack_require__(9866);
// EXTERNAL MODULE: ./src/components/MKTypography/index.js + 1 modules
var MKTypography = __webpack_require__(7713);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/components/MKSocialButton/MKSocialButtonRoot.js
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


/* harmony default export */ const MKSocialButtonRoot = ((0,styles_.styled)((Button_default()))(({ theme , ownerState  })=>{
    const { palette , functions  } = theme;
    const { color , size , iconOnly , circular  } = ownerState;
    const { white , socialMediaColors  } = palette;
    const { pxToRem  } = functions;
    // backgroundColor value
    const backgroundColorValue = socialMediaColors[color] ? socialMediaColors[color].main : socialMediaColors.facebook.main;
    const focusedBackgroundColorValue = socialMediaColors[color] ? socialMediaColors[color].dark : socialMediaColors.facebook.dark;
    // styles for the button with circular={true}
    const circularStyles = ()=>({
            borderRadius: "50%"
        });
    // styles for the button with iconOnly={true}
    const iconOnlyStyles = ()=>{
        // width, height, minWidth and minHeight values
        let sizeValue = pxToRem(38);
        if (size === "small") {
            sizeValue = pxToRem(25.4);
        } else if (size === "large") {
            sizeValue = pxToRem(52);
        }
        // padding value
        let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;
        if (size === "small") {
            paddingValue = pxToRem(4.5);
        } else if (size === "large") {
            paddingValue = pxToRem(16);
        }
        return {
            width: sizeValue,
            minWidth: sizeValue,
            height: sizeValue,
            minHeight: sizeValue,
            padding: paddingValue
        };
    };
    return {
        backgroundColor: backgroundColorValue,
        color: white.main,
        boxShadow: "none",
        "&:hover": {
            backgroundColor: focusedBackgroundColorValue,
            boxShadow: "none"
        },
        "&:focus:not(:hover)": {
            backgroundColor: socialMediaColors[color] ? socialMediaColors[color].dark : socialMediaColors.facebook.dark,
            boxShadow: "none"
        },
        "&:disabled": {
            backgroundColor: backgroundColorValue,
            color: white.main
        },
        ...circular && circularStyles(),
        ...iconOnly && iconOnlyStyles()
    };
}));

;// CONCATENATED MODULE: ./src/components/MKSocialButton/index.js
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

// Custom styles for MKSocialButton

const MKSocialButton = /*#__PURE__*/ (0,external_react_.forwardRef)(({ color , size , iconOnly , circular , children , ...rest }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(MKSocialButtonRoot, {
        ...rest,
        ref: ref,
        variant: "contained",
        color: "primary",
        size: size,
        ownerState: {
            color,
            size,
            iconOnly,
            circular
        },
        children: children
    }));
// Setting default values for the props of MKSocialButton
MKSocialButton.defaultProps = {
    size: "medium",
    color: "facebook",
    iconOnly: false,
    circular: false
};
// Typechecking props for the MKSocialButton
MKSocialButton.propTypes = {
    size: external_prop_types_default().oneOf([
        "small",
        "medium",
        "large"
    ]),
    color: external_prop_types_default().oneOf([
        "facebook",
        "twitter",
        "instagram",
        "linkedin",
        "pinterest",
        "youtube",
        "github",
        "vimeo",
        "slack",
        "dribbble",
        "reddit",
        "tumblr", 
    ]),
    iconOnly: (external_prop_types_default()).bool,
    circular: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node.isRequired
};
/* harmony default export */ const components_MKSocialButton = (MKSocialButton);

// EXTERNAL MODULE: ./src/examples/Navbars/DefaultNavbar/index.js + 3 modules
var DefaultNavbar = __webpack_require__(1284);
// EXTERNAL MODULE: ./src/examples/Footers/DefaultFooter/index.js
var DefaultFooter = __webpack_require__(9399);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(4661);
// EXTERNAL MODULE: external "@mui/material/Icon"
var Icon_ = __webpack_require__(3843);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
;// CONCATENATED MODULE: ./src/examples/Cards/InfoCards/FilledInfoCard/index.js
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


// react-router-dom components

// @mui material components


// Material Kit 2 React components


function FilledInfoCard({ variant , color , icon , title , description , action  }) {
    const buttonStyles = {
        width: "max-content",
        display: "flex",
        alignItems: "center",
        "& .material-icons-round": {
            fontSize: "1.125rem",
            transform: `translateX(3px)`,
            transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)"
        },
        "&:hover .material-icons-round, &:focus .material-icons-round": {
            transform: `translateX(6px)`
        }
    };
    let iconColor = color;
    if (variant === "gradient" && color !== "light") {
        iconColor = "white";
    } else if (variant === "gradient" && color === "light") {
        iconColor = "dark";
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
        display: {
            xs: "block",
            md: "flex"
        },
        variant: variant,
        bgColor: variant === "contained" ? "grey-100" : color,
        borderRadius: "xl",
        pt: 3.5,
        pb: 3,
        px: 3,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                display: "block",
                variant: "h3",
                color: iconColor,
                textGradient: variant === "contained",
                mt: -0.625,
                children: typeof icon === "string" ? /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                    children: icon
                }) : icon
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
                pt: {
                    xs: 3,
                    md: 0
                },
                pl: {
                    xs: 0,
                    md: 2
                },
                lineHeight: 1,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                        display: "block",
                        variant: "5",
                        color: variant === "contained" || color === "light" ? "dark" : "white",
                        fontWeight: "bold",
                        mb: 1,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                        display: "block",
                        variant: "body2",
                        color: variant === "contained" || color === "light" ? "text" : "white",
                        mb: 2,
                        children: description
                    }),
                    action && action.type === "external" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKTypography/* default */.Z, {
                        component: (Link_default()),
                        href: action.route,
                        target: "_blank",
                        rel: "noreferrer",
                        variant: "body2",
                        fontWeight: "regular",
                        color: variant === "contained" ? color : "white",
                        sx: buttonStyles,
                        children: [
                            action.label,
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                sx: {
                                    fontWeight: "bold"
                                },
                                children: "arrow_forward"
                            })
                        ]
                    }) : null,
                    action && action.type === "internal" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKTypography/* default */.Z, {
                        component: external_react_router_dom_.Link,
                        to: action.route,
                        variant: "body2",
                        fontWeight: "regular",
                        color: variant === "contained" ? color : "white",
                        sx: buttonStyles,
                        children: [
                            action.label,
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                sx: {
                                    fontWeight: "bold"
                                },
                                children: "arrow_forward"
                            })
                        ]
                    }) : null
                ]
            })
        ]
    });
}
// Setting default props for the FilledInfoCard
FilledInfoCard.defaultProps = {
    variant: "contained",
    color: "info",
    action: false
};
// Typechecking props for the FilledInfoCard
FilledInfoCard.propTypes = {
    variant: external_prop_types_default().oneOf([
        "contained",
        "gradient"
    ]),
    color: external_prop_types_default().oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark", 
    ]),
    icon: (external_prop_types_default()).node.isRequired,
    title: (external_prop_types_default()).string.isRequired,
    description: (external_prop_types_default()).string.isRequired,
    action: external_prop_types_default().oneOfType([
        (external_prop_types_default()).bool,
        external_prop_types_default().shape({
            type: external_prop_types_default().oneOf([
                "external",
                "internal"
            ]).isRequired,
            route: (external_prop_types_default()).string.isRequired,
            label: (external_prop_types_default()).string.isRequired
        }), 
    ])
};
/* harmony default export */ const InfoCards_FilledInfoCard = (FilledInfoCard);

// EXTERNAL MODULE: ./src/pages/Presentation/sections/Counters.js
var Counters = __webpack_require__(820);
// EXTERNAL MODULE: ./src/pages/Presentation/sections/Information.js + 5 modules
var Information = __webpack_require__(2621);
// EXTERNAL MODULE: ./src/pages/Presentation/sections/Testimonials.js + 4 modules
var Testimonials = __webpack_require__(4689);
// EXTERNAL MODULE: ./src/pages/Presentation/sections/Download.js + 1 modules
var Download = __webpack_require__(2351);
// EXTERNAL MODULE: ./src/pages/Presentation/components/BuiltByDevelopers/index.js
var BuiltByDevelopers = __webpack_require__(9266);
// EXTERNAL MODULE: ./src/routes.js + 107 modules
var routes = __webpack_require__(601);
// EXTERNAL MODULE: ./src/footer.routes.js + 1 modules
var footer_routes = __webpack_require__(4232);
;// CONCATENATED MODULE: ./src/assets/images/containers.jpeg
/* harmony default export */ const containers = ({"src":"/_next/static/media/containers.baebab42.jpeg","height":360,"width":889,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQX/2gAMAwEAAhADEAAAAJgVT//EABoQAQACAwEAAAAAAAAAAAAAAAECAwAEEUH/2gAIAQEAAT8Aukxo1051pVUH3P/EABgRAAMBAQAAAAAAAAAAAAAAAAECAwAi/9oACAECAQE/AIMwmOjv/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAMy/9oACAEDAQE/AG0f/9k=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/pages/Presentation/index.js
// @mui material components




// Material Kit 2 React components



// Material Kit 2 React examples



// Presentation page sections




// Presentation page components

// Routes


// Images

function Presentation() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DefaultNavbar/* default */.Z, {
                routes: routes/* default */.Z,
                action: {
                    type: "external",
                    route: "https://www.creative-tim.com/product/material-kit-react",
                    label: "contact us",
                    color: "info"
                },
                sticky: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                minHeight: "75vh",
                width: "100%",
                sx: {
                    backgroundImage: `url(${containers})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    display: "grid",
                    placeItems: "center"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        item: true,
                        xs: 12,
                        lg: 7,
                        justifyContent: "center",
                        mx: "auto",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKTypography/* default */.Z, {
                                variant: "h1",
                                color: "white",
                                mt: -6,
                                mb: 1,
                                sx: ({ breakpoints , typography: { size  }  })=>({
                                        [breakpoints.down("md")]: {
                                            fontSize: size["3xl"]
                                        }
                                    }),
                                children: [
                                    "Spread Delivery",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                                variant: "body1",
                                color: "white",
                                textAlign: "center",
                                px: {
                                    xs: 6,
                                    lg: 15
                                },
                                mt: 1,
                                children: "Spread your order, spread your delivery. & We help your company to order products spreading the cost of the container delivery. Easier than ever."
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                sx: {
                    p: 2,
                    mx: {
                        xs: 2,
                        lg: 3
                    },
                    mt: -8,
                    mb: 4,
                    backgroundColor: ({ palette: { white  } , functions: { rgba  }  })=>rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl  }  })=>xxl
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Counters["default"], {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Information["default"], {}),
                    /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                        sx: {
                            mt: 6
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(BuiltByDevelopers["default"], {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            container: true,
                            spacing: 3,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    lg: 4,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(InfoCards_FilledInfoCard, {
                                        variant: "gradient",
                                        color: "info",
                                        icon: "flag",
                                        title: "Getting Started",
                                        description: "Check the possible ways of working with our product and the necessary files for building your own project.",
                                        action: {
                                            type: "external",
                                            route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                                            label: "Let's start"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    lg: 4,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(InfoCards_FilledInfoCard, {
                                        color: "info",
                                        icon: "precision_manufacturing",
                                        title: "Plugins",
                                        description: "Get inspiration and have an overview about the plugins that we used to create the Material Kit.",
                                        action: {
                                            type: "external",
                                            route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                                            label: "Read more"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    lg: 4,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(InfoCards_FilledInfoCard, {
                                        color: "info",
                                        icon: "apps",
                                        title: "Components",
                                        description: "Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster.",
                                        action: {
                                            type: "external",
                                            route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                                            label: "Read more"
                                        }
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Testimonials["default"], {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Download["default"], {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                        pt: 18,
                        pb: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 3,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        lg: 5,
                                        ml: "auto",
                                        sx: {
                                            textAlign: {
                                                xs: "center",
                                                lg: "left"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                                                variant: "h4",
                                                fontWeight: "bold",
                                                mb: 0.5,
                                                children: "Thank you for your support!"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                                                variant: "body1",
                                                color: "text",
                                                children: "We always provide the best solution for you"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        lg: 5,
                                        my: {
                                            xs: 5,
                                            lg: "auto"
                                        },
                                        mr: {
                                            xs: 0,
                                            lg: "auto"
                                        },
                                        sx: {
                                            textAlign: {
                                                xs: "center",
                                                lg: "right"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_MKSocialButton, {
                                                component: "a",
                                                href: "https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react",
                                                target: "_blank",
                                                color: "twitter",
                                                sx: {
                                                    mr: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    }),
                                                    "\xa0Tweet"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_MKSocialButton, {
                                                component: "a",
                                                href: "https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react",
                                                target: "_blank",
                                                color: "facebook",
                                                sx: {
                                                    mr: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-facebook"
                                                    }),
                                                    "\xa0Share"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                pt: 6,
                px: 1,
                mt: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(DefaultFooter/* default */.Z, {
                    content: footer_routes/* default */.Z
                })
            })
        ]
    });
}
/* harmony default export */ const pages_Presentation = (Presentation);


/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 7666:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Facebook");

/***/ }),

/***/ 9254:
/***/ ((module) => {

module.exports = require("@mui/icons-material/GitHub");

/***/ }),

/***/ 4492:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Google");

/***/ }),

/***/ 3281:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Instagram");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Pinterest");

/***/ }),

/***/ 8017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 5631:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Twitter");

/***/ }),

/***/ 375:
/***/ ((module) => {

module.exports = require("@mui/icons-material/YouTube");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 5451:
/***/ ((module) => {

module.exports = require("@mui/material/AvatarGroup");

/***/ }),

/***/ 5168:
/***/ ((module) => {

module.exports = require("@mui/material/Badge");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 2177:
/***/ ((module) => {

module.exports = require("@mui/material/Breadcrumbs");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("@mui/material/Collapse");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 5634:
/***/ ((module) => {

module.exports = require("@mui/material/Fade");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 6262:
/***/ ((module) => {

module.exports = require("@mui/material/Grow");

/***/ }),

/***/ 3843:
/***/ ((module) => {

module.exports = require("@mui/material/Icon");

/***/ }),

/***/ 3103:
/***/ ((module) => {

module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 5545:
/***/ ((module) => {

module.exports = require("@mui/material/LinearProgress");

/***/ }),

/***/ 5246:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 9564:
/***/ ((module) => {

module.exports = require("@mui/material/Modal");

/***/ }),

/***/ 5768:
/***/ ((module) => {

module.exports = require("@mui/material/Popover");

/***/ }),

/***/ 517:
/***/ ((module) => {

module.exports = require("@mui/material/Popper");

/***/ }),

/***/ 6080:
/***/ ((module) => {

module.exports = require("@mui/material/Slide");

/***/ }),

/***/ 8742:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 3191:
/***/ ((module) => {

module.exports = require("@mui/material/Switch");

/***/ }),

/***/ 1307:
/***/ ((module) => {

module.exports = require("@mui/material/Tab");

/***/ }),

/***/ 8544:
/***/ ((module) => {

module.exports = require("@mui/material/Tabs");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

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

/***/ 2807:
/***/ ((module) => {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 4661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 727:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 563:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter/dist/esm/styles/prism");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [341,969,927,730,924,670,320,934,228,478,619,656,949,406,601,689,621,351,266,813], () => (__webpack_exec__(3139)));
module.exports = __webpack_exports__;

})();