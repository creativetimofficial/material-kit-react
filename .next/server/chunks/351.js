"use strict";
exports.id = 351;
exports.ids = [351];
exports.modules = {

/***/ 2351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sections_Download)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: ./src/components/MKBox/index.js + 1 modules
var MKBox = __webpack_require__(9866);
// EXTERNAL MODULE: ./src/components/MKButton/index.js + 1 modules
var MKButton = __webpack_require__(4969);
// EXTERNAL MODULE: ./src/components/MKTypography/index.js + 1 modules
var MKTypography = __webpack_require__(7713);
;// CONCATENATED MODULE: ./src/assets/images/shapes/waves-white.svg
/* harmony default export */ const waves_white = ({"src":"/_next/static/media/waves-white.0d085eb7.svg","height":400,"width":800});
;// CONCATENATED MODULE: ./src/pages/Presentation/sections/Download.js
// @mui material components




// Material Kit 2 React components



// Images

function Download() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
        component: "section",
        py: {
            xs: 0,
            sm: 12
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
                variant: "gradient",
                bgColor: "dark",
                position: "relative",
                borderRadius: "xl",
                sx: {
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                        component: "img",
                        src: waves_white,
                        alt: "pattern-lines",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        zIndex: 1,
                        opacity: 0.2
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                        sx: {
                            position: "relative",
                            zIndex: 2,
                            py: 12
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            container: true,
                            item: true,
                            xs: 12,
                            md: 7,
                            justifyContent: "center",
                            mx: "auto",
                            textAlign: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                                    variant: "h3",
                                    color: "white",
                                    children: "You can use our APIs to integration with your application"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                                    variant: "body2",
                                    color: "white",
                                    mb: 6,
                                    children: "Using our api you can easily have access to our products and integration with your application. Our REST API documentation will provide you client access and a struct way to follow the best practices and more."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MKButton/* default */.Z, {
                                    variant: "gradient",
                                    color: "info",
                                    size: "large",
                                    component: "a",
                                    href: "https://www.creative-tim.com/product/material-kit-react",
                                    sx: {
                                        mb: 2
                                    },
                                    children: "REST API Documentation"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    container: true,
                    item: true,
                    xs: 6,
                    mx: "auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
                        textAlign: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                                variant: "h3",
                                mt: 6,
                                mb: 3,
                                children: "Available on these technologies"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 3,
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 4,
                                        lg: 2,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                            title: "Bootstrap 5 - Most popular front-end component library",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                                component: "a",
                                                href: "https://www.creative-tim.com/product/material-kit",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                                    component: "img",
                                                    src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap5.jpg",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 4,
                                        lg: 2,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                            title: "Comming soon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                                opacity: 0.5,
                                                component: "a",
                                                href: "#",
                                                target: "_blank",
                                                onClick: (e)=>e.preventDefault(),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                                    component: "img",
                                                    src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/icon-tailwind.jpg",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 4,
                                        lg: 2,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                            title: "Comming soon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                                opacity: 0.5,
                                                component: "a",
                                                href: "#",
                                                target: "_blank",
                                                onClick: (e)=>e.preventDefault(),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                                    component: "img",
                                                    src: "https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 4,
                                        lg: 2,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                            title: "Comming soon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                                opacity: 0.5,
                                                component: "a",
                                                href: "#",
                                                target: "_blank",
                                                onClick: (e)=>e.preventDefault(),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                                    component: "img",
                                                    src: "https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 4,
                                        lg: 2,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                            title: "Comming soon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                                component: "a",
                                                href: "https://www.creative-tim.com/product/material-kit-react",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                                    component: "img",
                                                    src: "https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 4,
                                        lg: 2,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                            title: "Comming soon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                                opacity: 0.5,
                                                component: "a",
                                                href: "#",
                                                target: "_blank",
                                                onClick: (e)=>e.preventDefault(),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                                    component: "img",
                                                    src: "https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const sections_Download = (Download);


/***/ })

};
;