"use strict";
(() => {
var exports = {};
exports.id = 8746;
exports.ids = [8746];
exports.modules = {

/***/ 88330:
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

      const compMod = __webpack_require__(29723)

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
        page: "/Presentation/sections/data/designBlocksData",
        buildId: "0-bu3HNaLByHbnZV-Es5x",
        escapedBuildId: "0\-bu3HNaLByHbnZV\-Es5x",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"134890cc9d27e94b8f6d1b3315ba36bd",previewModeSigningKey:"ed196a2218659a195cd1362061d278f880785ec5cb00d875bf8cb69ed4d53ca0",previewModeEncryptionKey:"5b3537879f7d8112eadef4beb401ea74c6c7860aada4ae55b41b864de9010a65"}
      })
      
    

/***/ }),

/***/ 29723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const imagesPrefix = "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        title: "Design Blocks",
        description: "A selection of 45 page sections that fit perfectly in any combination",
        items: [
            {
                image: `${imagesPrefix}/headers.jpg`,
                name: "Page Headers",
                count: 10,
                route: "/sections/page-sections/page-headers"
            },
            {
                image: `${imagesPrefix}/features.jpg`,
                name: "Features",
                count: 14,
                route: "/sections/page-sections/features"
            },
            {
                image: `${imagesPrefix}/pricing.jpg`,
                name: "Pricing",
                count: 8,
                pro: true
            },
            {
                image: `${imagesPrefix}/faq.jpg`,
                name: "FAQ",
                count: 1,
                pro: true
            },
            {
                image: `${imagesPrefix}/blogs.jpg`,
                name: "Blog Posts",
                count: 11,
                pro: true
            },
            {
                image: `${imagesPrefix}/testimonials.jpg`,
                name: "Testimonials",
                count: 11,
                pro: true
            },
            {
                image: `${imagesPrefix}/teams.jpg`,
                name: "Teams",
                count: 6,
                pro: true
            },
            {
                image: `${imagesPrefix}/stats.jpg`,
                name: "Stats",
                count: 3,
                pro: true
            },
            {
                image: `${imagesPrefix}/call-to-action.jpg`,
                name: "Call to Actions",
                count: 8,
                pro: true
            },
            {
                image: `${imagesPrefix}/projects.jpg`,
                name: "Applications",
                count: 6,
                pro: true
            },
            {
                image: `${imagesPrefix}/logo-area.jpg`,
                name: "Logo Areas",
                count: 4,
                pro: true
            },
            {
                image: `${imagesPrefix}/footers.jpg`,
                name: "Footers",
                count: 10,
                pro: true
            },
            {
                image: `${imagesPrefix}/general-cards.jpg`,
                name: "General Cards",
                count: 9,
                pro: true
            },
            {
                image: `${imagesPrefix}/content-sections.jpg`,
                name: "Content Sections",
                count: 8,
                pro: true
            }, 
        ]
    },
    {
        title: "Navigation",
        description: "30+ components that will help go through the pages",
        items: [
            {
                image: `${imagesPrefix}/navbars.jpg`,
                name: "Navbars",
                count: 4,
                route: "/sections/navigation/navbars"
            },
            {
                image: `${imagesPrefix}/nav-tabs.jpg`,
                name: "Nav Tabs",
                count: 2,
                route: "/sections/navigation/nav-tabs"
            },
            {
                image: `${imagesPrefix}/pagination.jpg`,
                name: "Pagination",
                count: 3,
                route: "/sections/navigation/pagination"
            }, 
        ]
    },
    {
        title: "Input Areas",
        description: "50+ elements that you need for text manipulation and insertion",
        items: [
            {
                image: `${imagesPrefix}/newsletters.jpg`,
                name: "Newsletters",
                count: 6,
                pro: true
            },
            {
                image: `${imagesPrefix}/contact-sections.jpg`,
                name: "Contact Sections",
                count: 8,
                pro: true
            },
            {
                image: `${imagesPrefix}/forms.jpg`,
                name: "Forms",
                count: 3,
                route: "/sections/input-areas/forms"
            },
            {
                image: `${imagesPrefix}/inputs.jpg`,
                name: "Inputs",
                count: 6,
                route: "/sections/input-areas/inputs"
            }, 
        ]
    },
    {
        title: "Attention Catchers",
        description: "20+ Fully coded components that popup from different places of the screen",
        items: [
            {
                image: `${imagesPrefix}/alerts.jpg`,
                name: "Alerts",
                count: 4,
                route: "/sections/attention-catchers/alerts"
            },
            {
                image: `${imagesPrefix}/toasts.jpg`,
                name: "Notifications",
                count: 3,
                pro: true
            },
            {
                image: `${imagesPrefix}/popovers.jpg`,
                name: "Tooltips & Popovers",
                count: 2,
                route: "/sections/attention-catchers/tooltips-popovers"
            },
            {
                image: `${imagesPrefix}/modals.jpg`,
                name: "Modals",
                count: 5,
                route: "/sections/attention-catchers/modals"
            }, 
        ]
    },
    {
        title: "Elements",
        description: "80+ carefully crafted small elements that come with multiple colors and shapes",
        items: [
            {
                image: `${imagesPrefix}/buttons.jpg`,
                name: "Buttons",
                count: 6,
                route: "/sections/elements/buttons"
            },
            {
                image: `${imagesPrefix}/avatars.jpg`,
                name: "Avatars",
                count: 2,
                route: "/sections/elements/avatars"
            },
            {
                image: `${imagesPrefix}/dropdowns.jpg`,
                name: "Dropdowns",
                count: 2,
                route: "/sections/elements/dropdowns"
            },
            {
                image: `${imagesPrefix}/switch.jpg`,
                name: "Toggles",
                count: 2,
                route: "/sections/elements/toggles"
            },
            {
                image: `${imagesPrefix}/social-buttons.jpg`,
                name: "Social Buttons",
                count: 2,
                pro: true
            },
            {
                image: `${imagesPrefix}/breadcrumbs.jpg`,
                name: "Breadcrumbs",
                count: 1,
                route: "/sections/elements/breadcrumbs"
            },
            {
                image: `${imagesPrefix}/badges.jpg`,
                name: "Badges",
                count: 3,
                route: "/sections/elements/badges"
            },
            {
                image: `${imagesPrefix}/progress.jpg`,
                name: "Progress Bars",
                count: 4,
                route: "/sections/elements/progress-bars"
            },
            {
                image: `${imagesPrefix}/tables.jpg`,
                name: "Tables",
                count: 3,
                pro: true
            },
            {
                image: `${imagesPrefix}/typography.jpg`,
                name: "Typography",
                count: 2,
                route: "/sections/elements/typography"
            }, 
        ]
    }, 
]);


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
var __webpack_exports__ = __webpack_require__.X(0, [3386,7119], () => (__webpack_exec__(88330)));
module.exports = __webpack_exports__;

})();