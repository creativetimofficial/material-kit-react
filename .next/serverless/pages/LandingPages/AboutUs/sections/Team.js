"use strict";
(() => {
var exports = {};
exports.id = 4538;
exports.ids = [4538];
exports.modules = {

/***/ 80859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bruce-mars.2a5b92f1.jpg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJ0HP//EABsQAAEFAQEAAAAAAAAAAAAAAAIBAwQREgAh/9oACAEBAAE/AH5EcTGnnVPVEPmE7//EABcRAAMBAAAAAAAAAAAAAAAAAAABQXH/2gAIAQIBAT8AV0//xAAXEQADAQAAAAAAAAAAAAAAAAAAAUFx/9oACAEDAQE/AHMP/9k=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 53651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(23105)

      const appMod = __webpack_require__(46029)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(19228)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const rewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? {
          afterFiles: private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        }
        : private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(89185),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: rewrites,
        i18n: undefined,
        page: "/LandingPages/AboutUs/sections/Team",
        buildId: "0-bu3HNaLByHbnZV-Es5x",
        escapedBuildId: "0\-bu3HNaLByHbnZV\-Es5x",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"134890cc9d27e94b8f6d1b3315ba36bd",previewModeSigningKey:"ed196a2218659a195cd1362061d278f880785ec5cb00d875bf8cb69ed4d53ca0",previewModeEncryptionKey:"5b3537879f7d8112eadef4beb401ea74c6c7860aada4ae55b41b864de9010a65"}
      })
      
    

/***/ }),

/***/ 19228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sections_Team)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mui/material/Container/index.js
var Container = __webpack_require__(20165);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/index.js
var Grid = __webpack_require__(672);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid);
// EXTERNAL MODULE: ./src/components/MKBox/index.js + 1 modules
var MKBox = __webpack_require__(9866);
// EXTERNAL MODULE: ./src/components/MKTypography/index.js + 1 modules
var MKTypography = __webpack_require__(27713);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/index.js
var Card = __webpack_require__(34297);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
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
    return /*#__PURE__*/ jsx_runtime.jsx((Card_default()), {
        sx: {
            mt: 3
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
            container: true,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 4,
                    sx: {
                        mt: -6
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                        width: "100%",
                        pt: 2,
                        pb: 1,
                        px: 2,
                        children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                            component: "img",
                            src: image,
                            alt: name,
                            width: "100%",
                            borderRadius: "md",
                            shadow: "lg"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 8,
                    sx: {
                        my: "auto"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKBox/* default */.Z, {
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
                            /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                                variant: "h5",
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                                variant: "h6",
                                color: position.color,
                                mb: 1,
                                children: position.label
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
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
    image: (prop_types_default()).string.isRequired,
    name: (prop_types_default()).string.isRequired,
    position: prop_types_default().shape({
        color: prop_types_default().oneOf([
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "dark",
            "light", 
        ]),
        label: (prop_types_default()).string.isRequired
    }).isRequired,
    description: (prop_types_default()).string.isRequired
};
/* harmony default export */ const TeamCards_HorizontalTeamCard = (HorizontalTeamCard);

;// CONCATENATED MODULE: ./src/assets/images/team-5.jpg
/* harmony default export */ const team_5 = ({"src":"/_next/static/media/team-5.249ffb17.jpg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAIhKv//EAB0QAAIBBAMAAAAAAAAAAAAAAAIDAQAFESETIrH/2gAIAQEAAT8AcaAtzENlfN0Id7KC9xX/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIicf/aAAgBAgEBPwCCrp//xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIDIUL/2gAIAQMBAT8AvjoprkJ//9k=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/assets/images/bruce-mars.jpg
var bruce_mars = __webpack_require__(80859);
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
    return /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
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
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                    container: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 8,
                        sx: {
                            mb: 6
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                                variant: "h3",
                                color: "white",
                                children: "The Executive Team"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                                variant: "body2",
                                color: "white",
                                opacity: 0.8,
                                children: "There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            lg: 6,
                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                mb: 1,
                                children: /*#__PURE__*/ jsx_runtime.jsx(TeamCards_HorizontalTeamCard, {
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
                        /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            lg: 6,
                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                mb: 1,
                                children: /*#__PURE__*/ jsx_runtime.jsx(TeamCards_HorizontalTeamCard, {
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
                        /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            lg: 6,
                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                mb: {
                                    xs: 1,
                                    lg: 0
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(TeamCards_HorizontalTeamCard, {
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
                        /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            lg: 6,
                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                mb: {
                                    xs: 1,
                                    lg: 0
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(TeamCards_HorizontalTeamCard, {
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


/***/ }),

/***/ 1014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 32081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3386,9387,8791,9376,4297,7119,7341], () => (__webpack_exec__(53651)));
module.exports = __webpack_exports__;

})();