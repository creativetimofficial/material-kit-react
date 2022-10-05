"use strict";
exports.id = 406;
exports.ids = [406];
exports.modules = {

/***/ 9499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sections_Newsletter)
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
// EXTERNAL MODULE: ./src/components/MKInput/index.js + 1 modules
var MKInput = __webpack_require__(730);
// EXTERNAL MODULE: ./src/components/MKButton/index.js + 1 modules
var MKButton = __webpack_require__(4969);
;// CONCATENATED MODULE: ./src/assets/images/macbook.png
/* harmony default export */ const macbook = ({"src":"/_next/static/media/macbook.dd08e963.png","height":1203,"width":2200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAg0lEQVR42mMAA7+Jk3yqt/2P6Tr4JbTr0PfArsP/NQrW3DVlYOABy6fUrZ/Rtvj6/+ald341Lrv3p2Xlg//ls04/BkrxghVcvnp9/p49u/8/evjo/6/ff///+/f//9Onz97BFUyfPqMsL6d45+yZc9ds2LBp7aaNmzctWrh4kamZlTQAynBENyKWLUAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/pages/LandingPages/AboutUs/sections/Newsletter.js
// @mui material components



// Material Kit 2 React components




// Images

function Newsletter() {
    return /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
        component: "section",
        pt: 6,
        my: 6,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        sx: 12,
                        md: 6,
                        sx: {
                            ml: {
                                xs: 0,
                                lg: 3
                            },
                            mb: {
                                xs: 12,
                                md: 0
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                                variant: "h4",
                                children: "Be the first to see the news"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                                variant: "body2",
                                color: "text",
                                mb: 3,
                                children: "Your company may not be in the software business, but eventually, a software company will be in your business."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 8,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(MKInput/* default */.Z, {
                                            type: "email",
                                            label: "Email Here...",
                                            fullWidth: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(MKButton/* default */.Z, {
                                            variant: "gradient",
                                            color: "info",
                                            sx: {
                                                height: "100%"
                                            },
                                            children: "Subscribe"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 5,
                        sx: {
                            ml: "auto"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                            position: "relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                component: "img",
                                src: macbook,
                                alt: "macbook",
                                width: "100%"
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const sections_Newsletter = (Newsletter);


/***/ })

};
;