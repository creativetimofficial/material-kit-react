"use strict";
exports.id = 689;
exports.ids = [689];
exports.modules = {

/***/ 4689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Testimonials)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: ./src/components/MKBox/index.js + 1 modules
var MKBox = __webpack_require__(9866);
// EXTERNAL MODULE: ./src/components/MKTypography/index.js + 1 modules
var MKTypography = __webpack_require__(7713);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material/Icon"
var Icon_ = __webpack_require__(3843);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
// EXTERNAL MODULE: ./src/components/MKAvatar/index.js + 1 modules
var MKAvatar = __webpack_require__(8927);
;// CONCATENATED MODULE: ./src/examples/Cards/ReviewCards/DefaultReviewCard/index.js
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ // prop-types is library for typechecking of props


// @mui material components

// Material Kit 2 React components



function DefaultReviewCard({ color , image , name , date , review , rating  }) {
    const ratings = {
        0.5: [
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 1),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 2),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 3),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 4),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        1: [
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 2),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 3),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 4),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        1.5: [
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_half"
            }, 2),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 3),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 4),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        2: [
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 2),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 3),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 4),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        2.5: [
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 2),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_half"
            }, 3),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 4),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        3: [
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 2),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 3),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 4),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        3.5: [
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 2),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 3),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_half"
            }, 4),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        4: [
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 2),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 3),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 4),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        4.5: [
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 2),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 3),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 4),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star_half"
            }, 5), 
        ],
        5: [
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 2),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 3),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 4),
            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                children: "star"
            }, 5), 
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
        variant: color === "transparent" ? "contained" : "gradient",
        bgColor: color,
        borderRadius: "xl",
        shadow: color === "transparent" ? "none" : "md",
        p: 3,
        children: [
            image && /*#__PURE__*/ jsx_runtime_.jsx(MKAvatar/* default */.Z, {
                src: image,
                alt: name,
                variant: "rounded",
                size: "lg",
                shadow: "md",
                sx: {
                    mt: -5,
                    mb: 1
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
                lineHeight: 1,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                        display: "block",
                        variant: image ? "button" : "h6",
                        fontWeight: "bold",
                        color: color === "transparent" || color === "light" ? "dark" : "white",
                        mb: 0.5,
                        children: name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKTypography/* default */.Z, {
                        variant: image ? "caption" : "button",
                        fontWeight: "regular",
                        lineHeight: 1,
                        color: color === "transparent" || color === "light" ? "text" : "white",
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                children: "schedule"
                            }),
                            "\xa0",
                            date
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKTypography/* default */.Z, {
                variant: "body2",
                color: color === "transparent" || color === "light" ? "text" : "white",
                my: 4,
                children: [
                    '"',
                    review,
                    '"'
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                variant: "h4",
                color: color === "transparent" || color === "light" ? "text" : "white",
                sx: {
                    display: "flex",
                    alignItems: "center",
                    ml: 0.375,
                    "& .material-icons-round": {
                        ml: -0.375
                    }
                },
                children: ratings[rating]
            })
        ]
    });
}
// Setting default values for the props of DefaultReviewCard
DefaultReviewCard.defaultProps = {
    color: "transparent",
    image: ""
};
// Typechecking props for the DefaultReviewCard
DefaultReviewCard.propTypes = {
    color: external_prop_types_default().oneOf([
        "transparent",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light", 
    ]),
    image: (external_prop_types_default()).string,
    name: (external_prop_types_default()).string.isRequired,
    date: (external_prop_types_default()).string.isRequired,
    review: (external_prop_types_default()).string.isRequired,
    rating: external_prop_types_default().oneOf([
        1,
        2,
        3,
        4,
        5
    ]).isRequired
};
/* harmony default export */ const ReviewCards_DefaultReviewCard = (DefaultReviewCard);

;// CONCATENATED MODULE: ./src/assets/images/logos/gray-logos/logo-apple.svg
/* harmony default export */ const logo_apple = ({"src":"/_next/static/media/logo-apple.6eba195b.svg","height":92,"width":352});
;// CONCATENATED MODULE: ./src/assets/images/logos/gray-logos/logo-facebook.svg
/* harmony default export */ const logo_facebook = ({"src":"/_next/static/media/logo-facebook.5f4f4467.svg","height":92,"width":352});
// EXTERNAL MODULE: ./src/assets/images/logos/gray-logos/logo-nasa.svg
var logo_nasa = __webpack_require__(8645);
// EXTERNAL MODULE: ./src/assets/images/logos/gray-logos/logo-vodafone.svg
var logo_vodafone = __webpack_require__(5072);
;// CONCATENATED MODULE: ./src/assets/images/logos/gray-logos/logo-digitalocean.svg
/* harmony default export */ const logo_digitalocean = ({"src":"/_next/static/media/logo-digitalocean.a5763d09.svg","height":92,"width":352});
;// CONCATENATED MODULE: ./src/pages/Presentation/sections/Testimonials.js
// @mui material components




// Material Kit 2 React components


// Material Kit 2 React examples

// Images





function Information() {
    return /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
        component: "section",
        py: 12,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    item: true,
                    xs: 12,
                    lg: 6,
                    justifyContent: "center",
                    sx: {
                        mx: "auto",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                            variant: "h2",
                            children: "Trusted by over"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                            variant: "h2",
                            color: "info",
                            textGradient: true,
                            mb: 2,
                            children: "500+ importers over the world"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                            variant: "body1",
                            color: "text",
                            mb: 2,
                            children: "Many users are using Spread Delivery"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 3,
                    sx: {
                        mt: 8
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: 6,
                            lg: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ReviewCards_DefaultReviewCard, {
                                name: "Nick Willever",
                                date: "1 day ago",
                                review: "This is an excellent product, the documentation is excellent and helped me get things done more efficiently.",
                                rating: 5
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: 6,
                            lg: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ReviewCards_DefaultReviewCard, {
                                color: "info",
                                name: "Shailesh Kushwaha",
                                date: "1 week ago",
                                review: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
                                rating: 5
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: 6,
                            lg: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ReviewCards_DefaultReviewCard, {
                                name: "Samuel Kamuli",
                                date: "3 weeks ago",
                                review: "Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!.",
                                rating: 5
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                    sx: {
                        my: 6
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 3,
                    justifyContent: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 6,
                            md: 4,
                            lg: 2,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                component: "img",
                                src: logo_apple,
                                alt: "Apple",
                                width: "100%",
                                opacity: 0.6
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 6,
                            md: 4,
                            lg: 2,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                component: "img",
                                src: logo_facebook,
                                alt: "Facebook",
                                width: "100%",
                                opacity: 0.6
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 6,
                            md: 4,
                            lg: 2,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                component: "img",
                                src: logo_nasa/* default */.Z,
                                alt: "Nasa",
                                width: "100%",
                                opacity: 0.6
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 6,
                            md: 4,
                            lg: 2,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                component: "img",
                                src: logo_vodafone/* default */.Z,
                                alt: "Vodafone",
                                width: "100%",
                                opacity: 0.6
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 6,
                            md: 4,
                            lg: 2,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                component: "img",
                                src: logo_digitalocean,
                                alt: "DigitalOcean",
                                width: "100%",
                                opacity: 0.6
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Testimonials = (Information);


/***/ })

};
;