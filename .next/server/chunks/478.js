"use strict";
exports.id = 478;
exports.ids = [478];
exports.modules = {

/***/ 8478:
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
// EXTERNAL MODULE: ./src/examples/Cards/InfoCards/DefaultInfoCard/index.js
var DefaultInfoCard = __webpack_require__(7924);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(4661);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: ./src/components/MKTypography/index.js + 1 modules
var MKTypography = __webpack_require__(7713);
// EXTERNAL MODULE: ./src/components/MKButton/index.js + 1 modules
var MKButton = __webpack_require__(4969);
;// CONCATENATED MODULE: ./src/examples/Cards/BlogCards/CenteredBlogCard/index.js
/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ // react-router components


// prop-types is a library for typechecking of props

// @mui material components


// Material Kit 2 React components



function CenteredBlogCard({ image , title , description , action  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
                position: "relative",
                borderRadius: "lg",
                mx: 2,
                mt: -3,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                        component: "img",
                        src: image,
                        alt: title,
                        borderRadius: "lg",
                        width: "100%",
                        position: "relative",
                        zIndex: 1
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                        borderRadius: "lg",
                        shadow: "md",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        sx: {
                            backgroundImage: `url(${image})`,
                            transform: "scale(0.94)",
                            filter: "blur(12px)",
                            backgroundSize: "cover"
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
                p: 3,
                mt: -1,
                textAlign: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                        display: "inline",
                        variant: "h5",
                        textTransform: "capitalize",
                        fontWeight: "regular",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                        mt: 1,
                        mb: 3,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                            variant: "body2",
                            component: "p",
                            color: "text",
                            children: description
                        })
                    }),
                    action.type === "external" ? /*#__PURE__*/ jsx_runtime_.jsx(MKButton/* default */.Z, {
                        component: (Link_default()),
                        href: action.route,
                        target: "_blank",
                        rel: "noreferrer",
                        variant: "gradient",
                        size: "small",
                        color: action.color ? action.color : "dark",
                        children: action.label
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(MKButton/* default */.Z, {
                        component: external_react_router_dom_.Link,
                        to: action.route,
                        variant: "gradient",
                        size: "small",
                        color: action.color ? action.color : "dark",
                        children: action.label
                    })
                ]
            })
        ]
    });
}
// Typechecking props for the CenteredBlogCard
CenteredBlogCard.propTypes = {
    image: (external_prop_types_default()).string.isRequired,
    title: (external_prop_types_default()).string.isRequired,
    description: (external_prop_types_default()).string.isRequired,
    action: external_prop_types_default().shape({
        type: external_prop_types_default().oneOf([
            "external",
            "internal"
        ]).isRequired,
        route: (external_prop_types_default()).string.isRequired,
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
        label: (external_prop_types_default()).string.isRequired
    }).isRequired
};
/* harmony default export */ const BlogCards_CenteredBlogCard = (CenteredBlogCard);

;// CONCATENATED MODULE: ./src/pages/LandingPages/AboutUs/sections/Information.js
// @mui material components



// Material Kit 2 React components

// Material Kit 2 React examples


function Information() {
    return /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
        component: "section",
        py: 12,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                spacing: 3,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        lg: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            container: true,
                            justifyContent: "flex-start",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                        mb: 5,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "public",
                                            title: "Fully integrated",
                                            description: "We get insulted by others, lose trust for those We get back freezes"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                        mb: 5,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "payments",
                                            title: "Payments functionality",
                                            description: "We get insulted by others, lose trust for those We get back freezes"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                        mb: {
                                            xs: 5,
                                            md: 0
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "apps",
                                            title: "Prebuilt components",
                                            description: "We get insulted by others, lose trust for those We get back freezes"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                        mb: {
                                            xs: 5,
                                            md: 0
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "3p",
                                            title: "Improved platform",
                                            description: "We get insulted by others, lose trust for those We get back freezes"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        lg: 4,
                        sx: {
                            ml: "auto",
                            mt: {
                                xs: 3,
                                lg: 0
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(BlogCards_CenteredBlogCard, {
                            image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                            title: "Get insights on Search",
                            description: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards.",
                            action: {
                                type: "internal",
                                route: "pages/company/about-us",
                                color: "info",
                                label: "find out more"
                            }
                        })
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