"use strict";
exports.id = 934;
exports.ids = [934];
exports.modules = {

/***/ 7934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Posts)
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
// EXTERNAL MODULE: ./src/components/MKTypography/index.js + 1 modules
var MKTypography = __webpack_require__(7713);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(4661);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Icon"
var Icon_ = __webpack_require__(3843);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
;// CONCATENATED MODULE: ./src/examples/Cards/BlogCards/TransparentBlogCard/index.js
/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ // react-router components


// prop-types is a library for typechecking of props

// @mui material components



// Material Kit 2 React components


function TransparentBlogCard({ image , title , description , action  }) {
    const cardActionStyles = {
        display: "flex",
        alignItems: "center",
        width: "max-content",
        "& .material-icons, .material-icons-round,": {
            transform: `translateX(2px)`,
            transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)"
        },
        "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round": {
            transform: `translateX(6px)`
        }
    };
    const imageTemplate = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
        position: "relative",
        borderRadius: "lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                component: "img",
                src: image,
                alt: title,
                borderRadius: "lg",
                shadow: "md",
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
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        sx: {
            background: "transparent",
            boxShadow: "none",
            overflow: "visible"
        },
        children: [
            action.type === "internal" ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_router_dom_.Link, {
                to: action.route,
                children: imageTemplate
            }) : /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                href: action.route,
                target: "_blank",
                rel: "noreferrer",
                children: imageTemplate
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
                pt: 2,
                pb: 3,
                children: [
                    action.type === "internal" ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_router_dom_.Link, {
                        to: action.route,
                        sx: cardActionStyles,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                            variant: "h5",
                            gutterBottom: true,
                            children: title
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        href: action.route,
                        target: "_blank",
                        rel: "noreferrer",
                        sx: cardActionStyles,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                            variant: "h5",
                            gutterBottom: true,
                            children: title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                        variant: "body2",
                        component: "p",
                        color: "text",
                        mb: 3,
                        children: description
                    }),
                    action.type === "internal" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKTypography/* default */.Z, {
                        component: external_react_router_dom_.Link,
                        to: action.route,
                        variant: "body2",
                        fontWeight: "regular",
                        color: action.color,
                        textTransform: "capitalize",
                        sx: cardActionStyles,
                        children: [
                            action.label,
                            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                sx: {
                                    fontWeight: "bold"
                                },
                                children: "arrow_forward"
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKTypography/* default */.Z, {
                        component: (Link_default()),
                        href: action.route,
                        target: "_blank",
                        rel: "noreferrer",
                        variant: "body2",
                        fontWeight: "regular",
                        color: action.color,
                        textTransform: "capitalize",
                        sx: cardActionStyles,
                        children: [
                            action.label,
                            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                sx: {
                                    fontWeight: "bold"
                                },
                                children: "arrow_forward"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
// Typechecking props for the TransparentBlogCard
TransparentBlogCard.propTypes = {
    image: (external_prop_types_default()).string.isRequired,
    title: (external_prop_types_default()).string.isRequired,
    description: (external_prop_types_default()).string.isRequired,
    action: external_prop_types_default().shape({
        type: external_prop_types_default().oneOf([
            "external",
            "internal"
        ]),
        route: (external_prop_types_default()).string.isRequired,
        label: (external_prop_types_default()).string.isRequired,
        color: external_prop_types_default().oneOf([
            "inherit",
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "light",
            "dark",
            "text", 
        ]).isRequired
    }).isRequired
};
/* harmony default export */ const BlogCards_TransparentBlogCard = (TransparentBlogCard);

;// CONCATENATED MODULE: ./src/examples/Cards/BlogCards/BackgroundBlogCard/index.js
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


function BackgroundBlogCard({ image , title , description , action  }) {
    const cardActionStyles = {
        display: "flex",
        alignItems: "center",
        width: "max-content",
        "& .material-icons, .material-icons-round,": {
            transform: `translateX(2px)`,
            transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)"
        },
        "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round": {
            transform: `translateX(6px)`
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        sx: {
            backgroundImage: ({ palette: { black  } , functions: { linearGradient , rgba  }  })=>`${linearGradient(rgba(black.main, 0.5), rgba(black.main, 0.5))}, url(${image})`,
            backgroundSize: "cover"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
            p: 3,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
                minHeight: "20.625rem",
                my: "auto",
                py: 3,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                        variant: "h2",
                        color: "white",
                        mb: 1,
                        sx: ({ breakpoints , typography: { size  }  })=>({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"]
                                }
                            }),
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                        variant: "body2",
                        color: "white",
                        my: 3,
                        children: description
                    }),
                    action.type === "internal" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKTypography/* default */.Z, {
                        component: external_react_router_dom_.Link,
                        to: action.route,
                        variant: "body2",
                        fontWeight: "regular",
                        color: "white",
                        textTransform: "capitalize",
                        sx: cardActionStyles,
                        children: [
                            action.label,
                            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                sx: {
                                    fontWeight: "bold"
                                },
                                children: "arrow_forward"
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKTypography/* default */.Z, {
                        component: (Link_default()),
                        href: action.route,
                        target: "_blank",
                        rel: "noreferrer",
                        variant: "body2",
                        fontWeight: "regular",
                        color: "white",
                        textTransform: "capitalize",
                        sx: cardActionStyles,
                        children: [
                            action.label,
                            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                sx: {
                                    fontWeight: "bold"
                                },
                                children: "arrow_forward"
                            })
                        ]
                    })
                ]
            })
        })
    });
}
// Typechecking props for the BackgroundBlogCard
BackgroundBlogCard.propTypes = {
    image: (external_prop_types_default()).string.isRequired,
    title: (external_prop_types_default()).string.isRequired,
    description: (external_prop_types_default()).string.isRequired,
    action: external_prop_types_default().shape({
        type: external_prop_types_default().oneOf([
            "external",
            "internal"
        ]).isRequired,
        route: (external_prop_types_default()).string.isRequired,
        label: (external_prop_types_default()).string.isRequired
    }).isRequired
};
/* harmony default export */ const BlogCards_BackgroundBlogCard = (BackgroundBlogCard);

;// CONCATENATED MODULE: ./src/assets/images/examples/testimonial-6-2.jpg
/* harmony default export */ const testimonial_6_2 = ({"src":"/_next/static/media/testimonial-6-2.304222fb.jpg","height":550,"width":820,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAkBT/xAAdEAACAgEFAAAAAAAAAAAAAAACAwQRAAESEyKh/9oACAEBAAE/AJ8yUL1RDewuW9h9bDzW8//EABcRAAMBAAAAAAAAAAAAAAAAAAACMZH/2gAIAQIBAT8AWYf/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPwBL/9k=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/assets/images/examples/testimonial-6-3.jpg
/* harmony default export */ const testimonial_6_3 = ({"src":"/_next/static/media/testimonial-6-3.c88b731d.jpg","height":550,"width":820,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAqA0//8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEQAEEiJB/9oACAEBAAE/ADK6Q70EnF0Wh1UIaPljP//EABkRAAEFAAAAAAAAAAAAAAAAABEAAQIxkf/aAAgBAgEBPwCdgNi//8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQMBAT8AAQv/2Q==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/assets/images/examples/blog-9-4.jpg
/* harmony default export */ const blog_9_4 = ({"src":"/_next/static/media/blog-9-4.fd37dd56.jpg","height":800,"width":1200,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwX/2gAMAwEAAhADEAAAAJ8TE//EABwQAAEFAAMAAAAAAAAAAAAAAAECAwQFEgARE//aAAgBAQABPwCPZyrbD7zis+h6Rokc/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEEEzH/2gAIAQIBAT8Akt2af//EABcRAQADAAAAAAAAAAAAAAAAAAEAAhH/2gAIAQMBAT8AoGT/2Q==","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./src/assets/images/examples/blog2.jpg
var blog2 = __webpack_require__(6685);
;// CONCATENATED MODULE: ./src/pages/LandingPages/Author/sections/Posts.js
// @mui material components



// Material Kit 2 React components


// Material Kit 2 React components


// Images




function Places() {
    return /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
        component: "section",
        py: 2,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    container: true,
                    item: true,
                    xs: 12,
                    lg: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                        variant: "h3",
                        mb: 6,
                        children: "Check my latest blogposts"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 6,
                            lg: 3,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(BlogCards_TransparentBlogCard, {
                                image: testimonial_6_2,
                                title: "Rover raised $65 million",
                                description: "Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ...",
                                action: {
                                    type: "internal",
                                    route: "/pages/blogs/author",
                                    color: "info",
                                    label: "read more"
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 6,
                            lg: 3,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(BlogCards_TransparentBlogCard, {
                                image: testimonial_6_3,
                                title: "MateLabs machine learning",
                                description: "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ...",
                                action: {
                                    type: "internal",
                                    route: "/pages/blogs/author",
                                    color: "info",
                                    label: "read more"
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 6,
                            lg: 3,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(BlogCards_TransparentBlogCard, {
                                image: blog_9_4,
                                title: "MateLabs machine learning",
                                description: "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ...",
                                action: {
                                    type: "internal",
                                    route: "/pages/blogs/author",
                                    color: "info",
                                    label: "read more"
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 6,
                            lg: 3,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(BlogCards_BackgroundBlogCard, {
                                image: blog2/* default */.Z,
                                title: "Flexible work hours",
                                description: "Rather than worrying about switching offices every couple years, you stay in the same place.",
                                action: {
                                    type: "internal",
                                    route: "/pages/blogs/author",
                                    label: "read more"
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Posts = (Places);


/***/ })

};
;