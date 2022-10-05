"use strict";
(() => {
var exports = {};
exports.id = 8043;
exports.ids = [8043];
exports.modules = {

/***/ 84402:
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

      const compMod = __webpack_require__(53446)

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
        page: "/Presentation/components/ExampleCard",
        buildId: "0-bu3HNaLByHbnZV-Es5x",
        escapedBuildId: "0\-bu3HNaLByHbnZV\-Es5x",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"134890cc9d27e94b8f6d1b3315ba36bd",previewModeSigningKey:"ed196a2218659a195cd1362061d278f880785ec5cb00d875bf8cb69ed4d53ca0",previewModeEncryptionKey:"5b3537879f7d8112eadef4beb401ea74c6c7860aada4ae55b41b864de9010a65"}
      })
      
    

/***/ }),

/***/ 53446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3506);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_MKBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9866);
/* harmony import */ var components_MKTypography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27713);
// prop-types is a library for typechecking of props


// @mui material components

// Material Kit 2 React components


function ExampleCard({ image , name , count , pro , ...rest }) {
    const imageTemplate = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        bgColor: "white",
        borderRadius: "xl",
        shadow: "lg",
        minHeight: "10rem",
        sx: {
            overflow: "hidden",
            transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
            transformOrigin: "50% 0",
            backfaceVisibility: "hidden",
            willChange: "transform, box-shadow",
            transition: "transform 200ms ease-out",
            "&:hover": {
                transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)"
            }
        },
        ...rest,
        children: [
            pro && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 2,
                p: 1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    width: "24px",
                    height: "24px",
                    viewBox: "0 0 24 24",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        id: "lock-black",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                id: "Oval",
                                fill: "#1F2937",
                                cx: "12",
                                cy: "12",
                                r: "12"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                id: "padlock",
                                transform: "translate(7.000000, 5.000000)",
                                fill: "#FFFFFF",
                                fillRule: "nonzero",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M5,0 C3.16666667,0 1.66666667,1.5 1.66666667,3.33333333 L1.66666667,4.58333333 C0.666666667,5.5 0,6.83333333 0,8.33333333 C0,11.0833333 2.25,13.3333333 5,13.3333333 C7.75,13.3333333 10,11.0833333 10,8.33333333 C10,6.83333333 9.33333333,5.5 8.33333333,4.58333333 L8.33333333,3.33333333 C8.33333333,1.5 6.83333333,0 5,0 Z M5.83333333,8.91666667 L5.83333333,10.8333333 L4.16666667,10.8333333 L4.16666667,8.91666667 C3.66666667,8.66666667 3.33333333,8.08333333 3.33333333,7.5 C3.33333333,6.58333333 4.08333333,5.83333333 5,5.83333333 C5.91666667,5.83333333 6.66666667,6.58333333 6.66666667,7.5 C6.66666667,8.08333333 6.33333333,8.66666667 5.83333333,8.91666667 Z M6.66666667,3.66666667 C6.16666667,3.41666667 5.58333333,3.33333333 5,3.33333333 C4.41666667,3.33333333 3.83333333,3.41666667 3.33333333,3.66666667 L3.33333333,3.33333333 C3.33333333,2.41666667 4.08333333,1.66666667 5,1.66666667 C5.91666667,1.66666667 6.66666667,2.41666667 6.66666667,3.33333333 L6.66666667,3.66666667 Z"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                component: "img",
                src: image,
                alt: name,
                width: "100%",
                my: "auto",
                opacity: pro ? 0.6 : 1
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        position: "relative",
        children: [
            pro ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3___default()), {
                title: "Pro Element",
                placement: "top",
                children: imageTemplate
            }) : imageTemplate,
            name || count > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                mt: 1,
                ml: 1,
                lineHeight: 1,
                children: [
                    name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        variant: "h6",
                        fontWeight: "bold",
                        children: name
                    }),
                    count > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        variant: "button",
                        fontWeight: "regular",
                        color: "secondary",
                        children: [
                            count,
                            " ",
                            count === 1 ? "Example" : "Examples"
                        ]
                    })
                ]
            }) : null
        ]
    });
}
// Setting default props for the ExampleCard
ExampleCard.defaultProps = {
    name: "",
    count: 0,
    pro: false
};
// Typechecking props for the ExampleCard
ExampleCard.propTypes = {
    image: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    count: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    pro: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExampleCard);


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
var __webpack_exports__ = __webpack_require__.X(0, [3386,9387,522,5095,3506,7119,7341], () => (__webpack_exec__(84402)));
module.exports = __webpack_exports__;

})();