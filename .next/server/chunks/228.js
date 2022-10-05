"use strict";
exports.id = 228;
exports.ids = [228];
exports.modules = {

/***/ 859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bruce-mars.2a5b92f1.jpg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJ0HP//EABsQAAEFAQEAAAAAAAAAAAAAAAIBAwQREgAh/9oACAEBAAE/AH5EcTGnnVPVEPmE7//EABcRAAMBAAAAAAAAAAAAAAAAAAABQXH/2gAIAQIBAT8AV0//xAAXEQADAQAAAAAAAAAAAAAAAAAAAUFx/9oACAEDAQE/AHMP/9k=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 9228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sections_Team)
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
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
;// CONCATENATED MODULE: ./src/examples/Cards/TeamCards/HorizontalTeamCard/index.js
/**
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


function HorizontalTeamCard({ image , name , position , description  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        sx: {
            mt: 3
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 4,
                    sx: {
                        mt: -6
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                        width: "100%",
                        pt: 2,
                        pb: 1,
                        px: 2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                            component: "img",
                            src: image,
                            alt: name,
                            width: "100%",
                            borderRadius: "md",
                            shadow: "lg"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 8,
                    sx: {
                        my: "auto"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MKBox/* default */.Z, {
                        pt: {
                            xs: 1,
                            lg: 2.5
                        },
                        pb: 2.5,
                        pr: 4,
                        pl: {
                            xs: 4,
                            lg: 1
                        },
                        lineHeight: 1,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                                variant: "h5",
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                                variant: "h6",
                                color: position.color,
                                mb: 1,
                                children: position.label
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                                variant: "body2",
                                color: "text",
                                children: description
                            })
                        ]
                    })
                })
            ]
        })
    });
}
// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
    image: (external_prop_types_default()).string.isRequired,
    name: (external_prop_types_default()).string.isRequired,
    position: external_prop_types_default().shape({
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
    }).isRequired,
    description: (external_prop_types_default()).string.isRequired
};
/* harmony default export */ const TeamCards_HorizontalTeamCard = (HorizontalTeamCard);

;// CONCATENATED MODULE: ./src/assets/images/team-5.jpg
/* harmony default export */ const team_5 = ({"src":"/_next/static/media/team-5.249ffb17.jpg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAIhKv//EAB0QAAIBBAMAAAAAAAAAAAAAAAIDAQAFESETIrH/2gAIAQEAAT8AcaAtzENlfN0Id7KC9xX/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIicf/aAAgBAgEBPwCCrp//xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIDIUL/2gAIAQMBAT8AvjoprkJ//9k=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/assets/images/bruce-mars.jpg
var bruce_mars = __webpack_require__(859);
;// CONCATENATED MODULE: ./src/assets/images/ivana-squares.jpg
/* harmony default export */ const ivana_squares = ({"src":"/_next/static/media/ivana-squares.ce014a37.jpg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJQk/wD/xAAeEAACAgAHAAAAAAAAAAAAAAACAwEEAAUGERMjcf/aAAgBAQABPwC3qXM+Co6QWD2RIkmQ6tvMf//EABgRAAIDAAAAAAAAAAAAAAAAAAEhABEx/9oACAECAQE/AArZ2f/EABkRAAEFAAAAAAAAAAAAAAAAAAEAAiExQf/aAAgBAwEBPwB2QKC//9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/assets/images/ivana-square.jpg
/* harmony default export */ const ivana_square = ({"src":"/_next/static/media/ivana-square.10cb0e1f.jpg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJ8M/wD/xAAeEAACAQMFAAAAAAAAAAAAAAABAgQABREDEhQiMf/aAAgBAQABPwC3XmFF47HUAZHPueuV21//xAAVEQEBAAAAAAAAAAAAAAAAAAAAUf/aAAgBAgEBPwCv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAJBcf/aAAgBAwEBPwCLh//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/pages/LandingPages/AboutUs/sections/Team.js
// @mui material components



// Material Kit 2 React components


// Material Kit 2 React examples

// Images




function Team() {
    return /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
        component: "section",
        variant: "gradient",
        bgColor: "dark",
        position: "relative",
        py: 6,
        px: {
            xs: 2,
            lg: 0
        },
        mx: -2,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    container: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 8,
                        sx: {
                            mb: 6
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                                variant: "h3",
                                color: "white",
                                children: "The Executive Team"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MKTypography/* default */.Z, {
                                variant: "body2",
                                color: "white",
                                opacity: 0.8,
                                children: "There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            lg: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                mb: 1,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(TeamCards_HorizontalTeamCard, {
                                    image: team_5,
                                    name: "Emma Roberts",
                                    position: {
                                        color: "info",
                                        label: "UI Designer"
                                    },
                                    description: "Artist is a term applied to a person who engages in an activity deemed to be an art."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            lg: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                mb: 1,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(TeamCards_HorizontalTeamCard, {
                                    image: bruce_mars/* default */.Z,
                                    name: "William Pearce",
                                    position: {
                                        color: "info",
                                        label: "Boss"
                                    },
                                    description: "Artist is a term applied to a person who engages in an activity deemed to be an art."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            lg: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                mb: {
                                    xs: 1,
                                    lg: 0
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(TeamCards_HorizontalTeamCard, {
                                    image: ivana_squares,
                                    name: "Ivana Flow",
                                    position: {
                                        color: "info",
                                        label: "Athlete"
                                    },
                                    description: "Artist is a term applied to a person who engages in an activity deemed to be an art."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            lg: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(MKBox/* default */.Z, {
                                mb: {
                                    xs: 1,
                                    lg: 0
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(TeamCards_HorizontalTeamCard, {
                                    image: ivana_square,
                                    name: "Marquez Garcia",
                                    position: {
                                        color: "info",
                                        label: "JS Developer"
                                    },
                                    description: "Artist is a term applied to a person who engages in an activity deemed to be an art."
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const sections_Team = (Team);


/***/ })

};
;