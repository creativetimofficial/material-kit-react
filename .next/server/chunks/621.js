"use strict";
exports.id = 621;
exports.ids = [621];
exports.modules = {

/***/ 2621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sections_Information)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: ./src/components/MKBox/index.js + 1 modules
var MKBox = __webpack_require__(9866);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
;// CONCATENATED MODULE: ./src/examples/Cards/RotatingCard/index.js
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// prop-types is a library for typechecking of props.

// @mui material components

// Material Kit 2 React components

function RotatingCard({ children  }) {
    const { 0: rotate , 1: setRotate  } = (0,external_react_.useState)(false);
    const rotate0 = ()=>setRotate(false);
    const rotate180 = ()=>setRotate(true);
    return /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
        sx: {
            perspective: "50rem"
        },
        onMouseEnter: rotate180,
        onMouseLeave: rotate0,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
            sx: {
                backgroundColor: "transparent",
                boxShadow: "none",
                position: "relative",
                transform: rotate ? "rotateY(180deg)" : "rotateY(0)",
                transformStyle: "preserve-3d",
                transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)"
            },
            children: children
        })
    });
}
// Typechecking props for the RotatingCard
RotatingCard.propTypes = {
    children: (external_prop_types_default()).node.isRequired
};
/* harmony default export */ const Cards_RotatingCard = (RotatingCard);

// EXTERNAL MODULE: external "@mui/material/Icon"
var Icon_ = __webpack_require__(3843);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
// EXTERNAL MODULE: ./src/components/MKTypography/index.js + 1 modules
var MKTypography = __webpack_require__(7713);
;// CONCATENATED MODULE: ./src/examples/Cards/RotatingCard/RotatingCardFront.js
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


// @mui material components

// Material Kit 2 React components


function RotatingCardFront({ color , image , icon , title , description  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: "lg",
        coloredShadow: color,
        width: "100%",
        position: "relative",
        zIndex: 2,
        sx: {
            backgroundImage: ({ palette: { gradients  } , functions: { linearGradient , rgba  }  })=>`${linearGradient(rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85), rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85))}, url(${image})`,
            backgroundSize: "cover",
            backfaceVisibility: "hidden"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
            py: 12,
            px: 3,
            textAlign: "center",
            lineHeight: 1,
            children: [
                icon && /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                    variant: "h2",
                    color: "white",
                    my: 2,
                    children: typeof icon === "string" ? /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                        children: icon
                    }) : icon
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                    variant: "h3",
                    color: "white",
                    gutterBottom: true,
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                    variant: "body2",
                    color: "white",
                    opacity: 0.8,
                    children: description
                })
            ]
        })
    });
}
// Setting default props for the RotatingCardFront
RotatingCardFront.defaultProps = {
    color: "info",
    icon: ""
};
// Typechecking props for the RotatingCardFront
RotatingCardFront.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light", 
    ]),
    image: (external_prop_types_default()).string.isRequired,
    icon: (external_prop_types_default()).node,
    title: (external_prop_types_default()).node.isRequired,
    description: (external_prop_types_default()).node.isRequired
};
/* harmony default export */ const RotatingCard_RotatingCardFront = (RotatingCardFront);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(4661);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: ./src/components/MKButton/index.js + 1 modules
var MKButton = __webpack_require__(4969);
;// CONCATENATED MODULE: ./src/examples/Cards/RotatingCard/RotatingCardBack.js
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


// react-router-dom components

// @mui material components

// Material Kit 2 React components



function RotatingCardBack_RotatingCard({ color , image , title , description , action  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "lg",
        coloredShadow: color,
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 5,
        sx: {
            backgroundImage: ({ palette: { gradients  } , functions: { linearGradient , rgba  }  })=>`${linearGradient(rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85), rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85))}, url(${image})`,
            backgroundSize: "cover",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
            pt: 12,
            pb: 2,
            px: 2,
            textAlign: "center",
            lineHeight: 1,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                    variant: "h3",
                    color: "white",
                    gutterBottom: true,
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                    variant: "body2",
                    color: "white",
                    opacity: 0.8,
                    children: description
                }),
                action && /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                    width: "50%",
                    mt: 4,
                    mb: 2,
                    mx: "auto",
                    children: action.type === "external" ? /*#__PURE__*/ jsx_runtime_.jsx(MKButton/* default */.Z, {
                        component: (Link_default()),
                        href: action.route,
                        target: "_blank",
                        rel: "noreferrer",
                        color: "white",
                        size: "small",
                        fullWidth: true,
                        children: action.label
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(MKButton/* default */.Z, {
                        component: external_react_router_dom_.Link,
                        to: action.route,
                        color: "white",
                        size: "small",
                        fullWidth: true,
                        children: action.label
                    })
                })
            ]
        })
    });
}
// Setting default props for the RotatingCard
RotatingCardBack_RotatingCard.defaultProps = {
    color: "info"
};
// Typechecking props for the RotatingCard
RotatingCardBack_RotatingCard.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light", 
    ]),
    image: (external_prop_types_default()).string.isRequired,
    title: (external_prop_types_default()).node.isRequired,
    description: (external_prop_types_default()).node.isRequired,
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
    ]).isRequired
};
/* harmony default export */ const RotatingCardBack = (RotatingCardBack_RotatingCard);

// EXTERNAL MODULE: ./src/examples/Cards/InfoCards/DefaultInfoCard/index.js
var DefaultInfoCard = __webpack_require__(7924);
;// CONCATENATED MODULE: ./src/assets/images/rotating-card-bg-front.jpeg
/* harmony default export */ const rotating_card_bg_front = ({"src":"/_next/static/media/rotating-card-bg-front.35319282.jpeg","height":5760,"width":3840,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAKoh/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIEEQADBhIT/9oACAEBAAE/AN/LJNIYu6Gbvt6o6EZ//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAECAQE/ADShf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./src/assets/images/rotating-card-bg-back.jpeg
/* harmony default export */ const rotating_card_bg_back = ({"src":"/_next/static/media/rotating-card-bg-back.77dbb214.jpeg","height":1706,"width":1365,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAALAK/wD/xAAbEAACAQUAAAAAAAAAAAAAAAACAwABBBIWcv/aAAgBAQABPwDebs0jXJQHxP/EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMykf/aAAgBAgEBPwBxC7X7P//EABoRAAEFAQAAAAAAAAAAAAAAAAEAAgMRIpH/2gAIAQMBAT8AEpoYZxf/2Q==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/pages/Presentation/sections/Information.js
// @mui material components



// Material Kit 2 React components

// Material Kit 2 React examples




// Images


function Information() {
    return /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
        component: "section",
        py: 6,
        my: 6,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                item: true,
                xs: 11,
                spacing: 3,
                alignItems: "center",
                sx: {
                    mx: "auto"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        lg: 4,
                        sx: {
                            mx: "auto"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Cards_RotatingCard, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(RotatingCard_RotatingCardFront, {
                                    image: rotating_card_bg_front,
                                    icon: "touch_app",
                                    title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            "Feel the",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "Material Kit"
                                        ]
                                    }),
                                    description: "All the MUI components that you need in a development have been re-design with the new look."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(RotatingCardBack, {
                                    image: rotating_card_bg_back,
                                    title: "Discover More",
                                    description: "You will save a lot of time going from prototyping to full-functional code because all elements are implemented.",
                                    action: {
                                        type: "internal",
                                        route: "/sections/page-sections/page-headers",
                                        label: "start with header"
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        xs: 12,
                        lg: 7,
                        sx: {
                            ml: "auto"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "content_copy",
                                            title: "Full Documentation",
                                            description: "Built by developers for developers. Check the foundation and you will find everything inside our documentation."
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "flip_to_front",
                                            title: "MUI Ready",
                                            description: "The world's most popular react components library for building user interfaces."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 3,
                                sx: {
                                    mt: {
                                        xs: 0,
                                        md: 6
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "price_change",
                                            title: "Save Time & Money",
                                            description: "Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "devices",
                                            title: "Fully Responsive",
                                            description: "Regardless of the screen size, the website content will naturally fit the given resolution."
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const sections_Information = (Information);


/***/ })

};
;