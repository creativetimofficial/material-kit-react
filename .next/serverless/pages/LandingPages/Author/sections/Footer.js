"use strict";
(() => {
var exports = {};
exports.id = 7499;
exports.ids = [7499];
exports.modules = {

/***/ 51705:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _utils = __webpack_require__(77462);

var _default = _utils.unstable_useForkRef;
exports["default"] = _default;

/***/ }),

/***/ 79674:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _utils = __webpack_require__(77462);

var _default = _utils.unstable_useIsFocusVisible;
exports["default"] = _default;

/***/ }),

/***/ 76124:
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

      const compMod = __webpack_require__(77619)

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
        page: "/LandingPages/Author/sections/Footer",
        buildId: "0-bu3HNaLByHbnZV-Es5x",
        escapedBuildId: "0\-bu3HNaLByHbnZV\-Es5x",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"134890cc9d27e94b8f6d1b3315ba36bd",previewModeSigningKey:"ed196a2218659a195cd1362061d278f880785ec5cb00d875bf8cb69ed4d53ca0",previewModeEncryptionKey:"5b3537879f7d8112eadef4beb401ea74c6c7860aada4ae55b41b864de9010a65"}
      })
      
    

/***/ }),

/***/ 77619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20165);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(672);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94984);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37938);
/* harmony import */ var components_MKBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9866);
/* harmony import */ var components_MKTypography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27713);
// @mui material components





// Material Kit 2 React components


function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        component: "footer",
        py: 6,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                container: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                        item: true,
                        xs: 12,
                        lg: 4,
                        textAlign: {
                            xs: "center",
                            lg: "left"
                        },
                        mr: "auto",
                        mb: {
                            xs: 3,
                            lg: 0
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                variant: "h6",
                                textTransform: "uppercase",
                                mb: {
                                    xs: 2,
                                    lg: 3
                                },
                                children: "Material Design"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                component: "ul",
                                direction: "row",
                                flexWrap: "wrap",
                                spacing: 3,
                                justifyContent: {
                                    xs: "center",
                                    lg: "flex-start"
                                },
                                pl: 0,
                                mb: 3,
                                sx: {
                                    listStyle: "none"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        component: "li",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            variant: "button",
                                            fontWeight: "regular",
                                            opacity: 0.8,
                                            component: (_mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default()),
                                            href: "https://www.creative-tim.com",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        component: "li",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            variant: "button",
                                            fontWeight: "regular",
                                            opacity: 0.8,
                                            component: (_mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default()),
                                            href: "https://www.creative-tim.com/presentation",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        component: "li",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            variant: "button",
                                            fontWeight: "regular",
                                            opacity: 0.8,
                                            component: (_mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default()),
                                            href: "https://www.creative-tim.com/blog",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        component: "li",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            variant: "button",
                                            fontWeight: "regular",
                                            opacity: 0.8,
                                            component: (_mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default()),
                                            href: "https://www.creative-tim.com",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "Services"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                variant: "button",
                                opacity: 0.8,
                                children: [
                                    "Copyright \xa9 ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                                        children: "document.write(new Date().getFullYear())"
                                    }),
                                    "2021 Material Design by Creative Tim."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                        item: true,
                        xs: 12,
                        lg: 6,
                        ml: "auto",
                        textAlign: {
                            xs: "center",
                            lg: "right"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                variant: "body1",
                                fontWeight: "bold",
                                mb: 6,
                                sx: {
                                    fontSize: "1.125rem"
                                },
                                children: "The reward for getting on the stage is fame. The price of fame is you can't get off the stage."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                component: (_mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default()),
                                href: "#dribbble",
                                target: "_blank",
                                rel: "noreferrer",
                                variant: "body2",
                                color: "dark",
                                opacity: 0.5,
                                mr: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fab fa-dribbble"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                component: (_mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default()),
                                href: "#twitter",
                                target: "_blank",
                                rel: "noreferrer",
                                variant: "body2",
                                color: "dark",
                                opacity: 0.5,
                                mr: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fab fa-twitter"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                component: (_mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default()),
                                href: "#pinterest",
                                target: "_blank",
                                rel: "noreferrer",
                                variant: "body2",
                                color: "dark",
                                opacity: 0.5,
                                mr: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fab fa-pinterest"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                component: (_mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default()),
                                href: "#github",
                                target: "_blank",
                                rel: "noreferrer",
                                variant: "body2",
                                color: "dark",
                                opacity: 0.5,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fab fa-github"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


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
var __webpack_exports__ = __webpack_require__.X(0, [3386,9387,8791,4984,7938,7119,7341], () => (__webpack_exec__(76124)));
module.exports = __webpack_exports__;

})();