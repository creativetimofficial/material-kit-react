"use strict";
(() => {
var exports = {};
exports.id = 6921;
exports.ids = [6921];
exports.modules = {

/***/ 20332:
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

      const compMod = __webpack_require__(72351)

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
        page: "/Presentation/sections/Download",
        buildId: "0-bu3HNaLByHbnZV-Es5x",
        escapedBuildId: "0\-bu3HNaLByHbnZV\-Es5x",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"134890cc9d27e94b8f6d1b3315ba36bd",previewModeSigningKey:"ed196a2218659a195cd1362061d278f880785ec5cb00d875bf8cb69ed4d53ca0",previewModeEncryptionKey:"5b3537879f7d8112eadef4beb401ea74c6c7860aada4ae55b41b864de9010a65"}
      })
      
    

/***/ }),

/***/ 72351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sections_Download)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mui/material/Container/index.js
var Container = __webpack_require__(20165);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/index.js
var Grid = __webpack_require__(672);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/index.js
var Tooltip = __webpack_require__(3506);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./src/components/MKBox/index.js + 1 modules
var MKBox = __webpack_require__(9866);
// EXTERNAL MODULE: ./src/components/MKButton/index.js + 1 modules
var MKButton = __webpack_require__(4969);
// EXTERNAL MODULE: ./src/components/MKTypography/index.js + 1 modules
var MKTypography = __webpack_require__(27713);
;// CONCATENATED MODULE: ./src/assets/images/shapes/waves-white.svg
/* harmony default export */ const waves_white = ({"src":"/_next/static/media/waves-white.0d085eb7.svg","height":400,"width":800});
;// CONCATENATED MODULE: ./src/pages/Presentation/sections/Download.js
// @mui material components




// Material Kit 2 React components



// Images

function Download() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKBox/* default */.Z, {
        component: "section",
        py: {
            xs: 0,
            sm: 12
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKBox/* default */.Z, {
                variant: "gradient",
                bgColor: "dark",
                position: "relative",
                borderRadius: "xl",
                sx: {
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
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
                    /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
                        sx: {
                            position: "relative",
                            zIndex: 2,
                            py: 12
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                            container: true,
                            item: true,
                            xs: 12,
                            md: 7,
                            justifyContent: "center",
                            mx: "auto",
                            textAlign: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                                    variant: "h3",
                                    color: "white",
                                    children: "You can use our APIs to integration with your application"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                                    variant: "body2",
                                    color: "white",
                                    mb: 6,
                                    children: "Using our api you can easily have access to our products and integration with your application. Our REST API documentation will provide you client access and a struct way to follow the best practices and more."
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(MKButton/* default */.Z, {
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
            /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                    container: true,
                    item: true,
                    xs: 6,
                    mx: "auto",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKBox/* default */.Z, {
                        textAlign: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                                variant: "h3",
                                mt: 6,
                                mb: 3,
                                children: "Available on these technologies"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 3,
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                        item: true,
                                        xs: 4,
                                        lg: 2,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((Tooltip_default()), {
                                            title: "Bootstrap 5 - Most popular front-end component library",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                                component: "a",
                                                href: "https://www.creative-tim.com/product/material-kit",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                                    component: "img",
                                                    src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap5.jpg",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                        item: true,
                                        xs: 4,
                                        lg: 2,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((Tooltip_default()), {
                                            title: "Comming soon",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                                opacity: 0.5,
                                                component: "a",
                                                href: "#",
                                                target: "_blank",
                                                onClick: (e)=>e.preventDefault(),
                                                children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                                    component: "img",
                                                    src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/icon-tailwind.jpg",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                        item: true,
                                        xs: 4,
                                        lg: 2,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((Tooltip_default()), {
                                            title: "Comming soon",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                                opacity: 0.5,
                                                component: "a",
                                                href: "#",
                                                target: "_blank",
                                                onClick: (e)=>e.preventDefault(),
                                                children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                                    component: "img",
                                                    src: "https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                        item: true,
                                        xs: 4,
                                        lg: 2,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((Tooltip_default()), {
                                            title: "Comming soon",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                                opacity: 0.5,
                                                component: "a",
                                                href: "#",
                                                target: "_blank",
                                                onClick: (e)=>e.preventDefault(),
                                                children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                                    component: "img",
                                                    src: "https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                        item: true,
                                        xs: 4,
                                        lg: 2,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((Tooltip_default()), {
                                            title: "Comming soon",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                                component: "a",
                                                href: "https://www.creative-tim.com/product/material-kit-react",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                                    component: "img",
                                                    src: "https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                        item: true,
                                        xs: 4,
                                        lg: 2,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((Tooltip_default()), {
                                            title: "Comming soon",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                                opacity: 0.5,
                                                component: "a",
                                                href: "#",
                                                target: "_blank",
                                                onClick: (e)=>e.preventDefault(),
                                                children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3386,9387,8791,522,4718,5095,3506,7119,7341,4969], () => (__webpack_exec__(20332)));
module.exports = __webpack_exports__;

})();