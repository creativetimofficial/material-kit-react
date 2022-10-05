"use strict";
(() => {
var exports = {};
exports.id = 5845;
exports.ids = [5845];
exports.modules = {

/***/ 99089:
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

      const compMod = __webpack_require__(68478)

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
        page: "/LandingPages/AboutUs/sections/Information",
        buildId: "0-bu3HNaLByHbnZV-Es5x",
        escapedBuildId: "0\-bu3HNaLByHbnZV\-Es5x",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"134890cc9d27e94b8f6d1b3315ba36bd",previewModeSigningKey:"ed196a2218659a195cd1362061d278f880785ec5cb00d875bf8cb69ed4d53ca0",previewModeEncryptionKey:"5b3537879f7d8112eadef4beb401ea74c6c7860aada4ae55b41b864de9010a65"}
      })
      
    

/***/ }),

/***/ 68478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sections_Information)
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
// EXTERNAL MODULE: ./src/examples/Cards/InfoCards/DefaultInfoCard/index.js
var DefaultInfoCard = __webpack_require__(7924);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/umd/react-router-dom.production.min.js
var react_router_dom_production_min = __webpack_require__(92876);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/index.js
var Card = __webpack_require__(34297);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/Link/index.js
var Link = __webpack_require__(94984);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./src/components/MKTypography/index.js + 1 modules
var MKTypography = __webpack_require__(27713);
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKBox/* default */.Z, {
                position: "relative",
                borderRadius: "lg",
                mx: 2,
                mt: -3,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                        component: "img",
                        src: image,
                        alt: title,
                        borderRadius: "lg",
                        width: "100%",
                        position: "relative",
                        zIndex: 1
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
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
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKBox/* default */.Z, {
                p: 3,
                mt: -1,
                textAlign: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                        display: "inline",
                        variant: "h5",
                        textTransform: "capitalize",
                        fontWeight: "regular",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                        mt: 1,
                        mb: 3,
                        children: /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                            variant: "body2",
                            component: "p",
                            color: "text",
                            children: description
                        })
                    }),
                    action.type === "external" ? /*#__PURE__*/ jsx_runtime.jsx(MKButton/* default */.Z, {
                        component: (Link_default()),
                        href: action.route,
                        target: "_blank",
                        rel: "noreferrer",
                        variant: "gradient",
                        size: "small",
                        color: action.color ? action.color : "dark",
                        children: action.label
                    }) : /*#__PURE__*/ jsx_runtime.jsx(MKButton/* default */.Z, {
                        component: react_router_dom_production_min.Link,
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
    image: (prop_types_default()).string.isRequired,
    title: (prop_types_default()).string.isRequired,
    description: (prop_types_default()).string.isRequired,
    action: prop_types_default().shape({
        type: prop_types_default().oneOf([
            "external",
            "internal"
        ]).isRequired,
        route: (prop_types_default()).string.isRequired,
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
    }).isRequired
};
/* harmony default export */ const BlogCards_CenteredBlogCard = (CenteredBlogCard);

;// CONCATENATED MODULE: ./src/pages/LandingPages/AboutUs/sections/Information.js
// @mui material components



// Material Kit 2 React components

// Material Kit 2 React examples


function Information() {
    return /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
        component: "section",
        py: 12,
        children: /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                container: true,
                spacing: 3,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        lg: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                            container: true,
                            justifyContent: "flex-start",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                        mb: 5,
                                        children: /*#__PURE__*/ jsx_runtime.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "public",
                                            title: "Fully integrated",
                                            description: "We get insulted by others, lose trust for those We get back freezes"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                        mb: 5,
                                        children: /*#__PURE__*/ jsx_runtime.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "payments",
                                            title: "Payments functionality",
                                            description: "We get insulted by others, lose trust for those We get back freezes"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                        mb: {
                                            xs: 5,
                                            md: 0
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "apps",
                                            title: "Prebuilt components",
                                            description: "We get insulted by others, lose trust for those We get back freezes"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                        mb: {
                                            xs: 5,
                                            md: 0
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "3p",
                                            title: "Improved platform",
                                            description: "We get insulted by others, lose trust for those We get back freezes"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
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
                        children: /*#__PURE__*/ jsx_runtime.jsx(BlogCards_CenteredBlogCard, {
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
var __webpack_exports__ = __webpack_require__.X(0, [3386,9387,8791,522,4718,5754,9376,4984,4297,2876,7119,7341,4969,7924], () => (__webpack_exec__(99089)));
module.exports = __webpack_exports__;

})();