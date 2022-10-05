"use strict";
(() => {
var exports = {};
exports.id = 2766;
exports.ids = [2766];
exports.modules = {

/***/ 80859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bruce-mars.2a5b92f1.jpg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJ0HP//EABsQAAEFAQEAAAAAAAAAAAAAAAIBAwQREgAh/9oACAEBAAE/AH5EcTGnnVPVEPmE7//EABcRAAMBAAAAAAAAAAAAAAAAAAABQXH/2gAIAQIBAT8AV0//xAAXEQADAQAAAAAAAAAAAAAAAAAAAUFx/9oACAEDAQE/AHMP/9k=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 27469:
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

      const compMod = __webpack_require__(99656)

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
        page: "/LandingPages/Author/sections/Profile",
        buildId: "0-bu3HNaLByHbnZV-Es5x",
        escapedBuildId: "0\-bu3HNaLByHbnZV\-Es5x",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"134890cc9d27e94b8f6d1b3315ba36bd",previewModeSigningKey:"ed196a2218659a195cd1362061d278f880785ec5cb00d875bf8cb69ed4d53ca0",previewModeEncryptionKey:"5b3537879f7d8112eadef4beb401ea74c6c7860aada4ae55b41b864de9010a65"}
      })
      
    

/***/ }),

/***/ 99656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20165);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(672);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95754);
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Icon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_MKBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9866);
/* harmony import */ var components_MKAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48927);
/* harmony import */ var components_MKButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4969);
/* harmony import */ var components_MKTypography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27713);
/* harmony import */ var assets_images_bruce_mars_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80859);
// @mui material components




// Material Kit 2 React components




// Images

function Profile() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        component: "section",
        py: {
            xs: 6,
            sm: 12
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default()), {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {
                container: true,
                item: true,
                xs: 12,
                justifyContent: "center",
                mx: "auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        mt: {
                            xs: -16,
                            md: -20
                        },
                        textAlign: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKAvatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            src: assets_images_bruce_mars_jpg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                            alt: "Burce Mars",
                            size: "xxl",
                            shadow: "xl"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {
                        container: true,
                        justifyContent: "center",
                        py: 6,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {
                            item: true,
                            xs: 12,
                            md: 7,
                            mx: {
                                xs: "auto",
                                sm: 6,
                                md: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    mb: 1,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            variant: "h3",
                                            children: "Michael Roven"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            variant: "outlined",
                                            color: "info",
                                            size: "small",
                                            children: "Follow"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    container: true,
                                    spacing: 3,
                                    mb: 3,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            item: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    component: "span",
                                                    variant: "body2",
                                                    fontWeight: "bold",
                                                    children: "323\xa0"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    component: "span",
                                                    variant: "body2",
                                                    color: "text",
                                                    children: "Posts"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            item: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    component: "span",
                                                    variant: "body2",
                                                    fontWeight: "bold",
                                                    children: "3.5k\xa0"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    component: "span",
                                                    variant: "body2",
                                                    color: "text",
                                                    children: "Followers"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            item: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    component: "span",
                                                    variant: "body2",
                                                    fontWeight: "bold",
                                                    children: "260\xa0"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    component: "span",
                                                    variant: "body2",
                                                    color: "text",
                                                    children: "Following"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    variant: "body1",
                                    fontWeight: "light",
                                    color: "text",
                                    children: [
                                        "Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality). Choose the path that leaves you more equanimous. ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            component: "a",
                                            href: "#",
                                            variant: "body1",
                                            fontWeight: "light",
                                            color: "info",
                                            mt: 3,
                                            sx: {
                                                width: "max-content",
                                                display: "flex",
                                                alignItems: "center",
                                                "& .material-icons-round": {
                                                    transform: `translateX(3px)`,
                                                    transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)"
                                                },
                                                "&:hover .material-icons-round, &:focus .material-icons-round": {
                                                    transform: `translateX(6px)`
                                                }
                                            },
                                            children: [
                                                "More about me ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Icon__WEBPACK_IMPORTED_MODULE_8___default()), {
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
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);


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
var __webpack_exports__ = __webpack_require__.X(0, [3386,9387,8791,522,4718,5754,2066,5727,7119,7341,4969,8927], () => (__webpack_exec__(27469)));
module.exports = __webpack_exports__;

})();