"use strict";
(() => {
var exports = {};
exports.id = 9271;
exports.ids = [9271];
exports.modules = {

/***/ 76903:
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

      const compMod = __webpack_require__(93139)

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
        page: "/Presentation",
        buildId: "0-bu3HNaLByHbnZV-Es5x",
        escapedBuildId: "0\-bu3HNaLByHbnZV\-Es5x",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"134890cc9d27e94b8f6d1b3315ba36bd",previewModeSigningKey:"ed196a2218659a195cd1362061d278f880785ec5cb00d875bf8cb69ed4d53ca0",previewModeEncryptionKey:"5b3537879f7d8112eadef4beb401ea74c6c7860aada4ae55b41b864de9010a65"}
      })
      
    

/***/ }),

/***/ 29266:
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
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95754);
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_MKBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9866);
/* harmony import */ var components_MKTypography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27713);
// @mui material components




// Material Kit 2 React components


function BuiltByDevelopers() {
    const bgImage = "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        display: "flex",
        alignItems: "center",
        borderRadius: "xl",
        my: 2,
        py: 6,
        sx: {
            backgroundImage: ({ functions: { linearGradient , rgba  } , palette: { gradients  }  })=>`${linearGradient(rgba(gradients.dark.main, 0.8), rgba(gradients.dark.state, 0.8))}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                container: true,
                item: true,
                xs: 12,
                lg: 6,
                sx: {
                    ml: {
                        xs: 0,
                        lg: 6
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        variant: "h4",
                        color: "white",
                        fontWeight: "bold",
                        children: "Built by developers"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        variant: "h1",
                        color: "white",
                        mb: 1,
                        children: "Complex Documentation"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        variant: "body1",
                        color: "white",
                        opacity: 0.8,
                        mb: 2,
                        children: "From colors, cards, typography to complex elements, you will find the full documentation. Play with the utility classes and you will create unlimited combinations for our components."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_MKTypography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        component: "a",
                        href: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                        target: "_blank",
                        rel: "noreferrer",
                        variant: "body2",
                        color: "white",
                        fontWeight: "regular",
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            "& .material-icons-round": {
                                fontSize: "1.125rem",
                                transform: `translateX(3px)`,
                                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)"
                            },
                            "&:hover .material-icons-round, &:focus .material-icons-round": {
                                transform: `translateX(6px)`
                            }
                        },
                        children: [
                            "Read docs ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Icon__WEBPACK_IMPORTED_MODULE_5___default()), {
                                sx: {
                                    fontWeight: "bold"
                                },
                                children: "arrow_forward"
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuiltByDevelopers);


/***/ }),

/***/ 93139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Presentation)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mui/material/Container/index.js
var Container = __webpack_require__(20165);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/index.js
var Grid = __webpack_require__(672);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/index.js
var Card = __webpack_require__(34297);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./src/components/MKBox/index.js + 1 modules
var MKBox = __webpack_require__(9866);
// EXTERNAL MODULE: ./src/components/MKTypography/index.js + 1 modules
var MKTypography = __webpack_require__(27713);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/index.js
var Button = __webpack_require__(94718);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/index.js
var styles = __webpack_require__(26178);
;// CONCATENATED MODULE: ./src/components/MKSocialButton/MKSocialButtonRoot.js
/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ // @mui material components


/* harmony default export */ const MKSocialButtonRoot = ((0,styles.styled)((Button_default()))(({ theme , ownerState  })=>{
    const { palette , functions  } = theme;
    const { color , size , iconOnly , circular  } = ownerState;
    const { white , socialMediaColors  } = palette;
    const { pxToRem  } = functions;
    // backgroundColor value
    const backgroundColorValue = socialMediaColors[color] ? socialMediaColors[color].main : socialMediaColors.facebook.main;
    const focusedBackgroundColorValue = socialMediaColors[color] ? socialMediaColors[color].dark : socialMediaColors.facebook.dark;
    // styles for the button with circular={true}
    const circularStyles = ()=>({
            borderRadius: "50%"
        });
    // styles for the button with iconOnly={true}
    const iconOnlyStyles = ()=>{
        // width, height, minWidth and minHeight values
        let sizeValue = pxToRem(38);
        if (size === "small") {
            sizeValue = pxToRem(25.4);
        } else if (size === "large") {
            sizeValue = pxToRem(52);
        }
        // padding value
        let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;
        if (size === "small") {
            paddingValue = pxToRem(4.5);
        } else if (size === "large") {
            paddingValue = pxToRem(16);
        }
        return {
            width: sizeValue,
            minWidth: sizeValue,
            height: sizeValue,
            minHeight: sizeValue,
            padding: paddingValue
        };
    };
    return {
        backgroundColor: backgroundColorValue,
        color: white.main,
        boxShadow: "none",
        "&:hover": {
            backgroundColor: focusedBackgroundColorValue,
            boxShadow: "none"
        },
        "&:focus:not(:hover)": {
            backgroundColor: socialMediaColors[color] ? socialMediaColors[color].dark : socialMediaColors.facebook.dark,
            boxShadow: "none"
        },
        "&:disabled": {
            backgroundColor: backgroundColorValue,
            color: white.main
        },
        ...circular && circularStyles(),
        ...iconOnly && iconOnlyStyles()
    };
}));

;// CONCATENATED MODULE: ./src/components/MKSocialButton/index.js
/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// prop-types is a library for typechecking of props

// Custom styles for MKSocialButton

const MKSocialButton = /*#__PURE__*/ (0,react.forwardRef)(({ color , size , iconOnly , circular , children , ...rest }, ref)=>/*#__PURE__*/ jsx_runtime.jsx(MKSocialButtonRoot, {
        ...rest,
        ref: ref,
        variant: "contained",
        color: "primary",
        size: size,
        ownerState: {
            color,
            size,
            iconOnly,
            circular
        },
        children: children
    }));
// Setting default values for the props of MKSocialButton
MKSocialButton.defaultProps = {
    size: "medium",
    color: "facebook",
    iconOnly: false,
    circular: false
};
// Typechecking props for the MKSocialButton
MKSocialButton.propTypes = {
    size: prop_types_default().oneOf([
        "small",
        "medium",
        "large"
    ]),
    color: prop_types_default().oneOf([
        "facebook",
        "twitter",
        "instagram",
        "linkedin",
        "pinterest",
        "youtube",
        "github",
        "vimeo",
        "slack",
        "dribbble",
        "reddit",
        "tumblr", 
    ]),
    iconOnly: (prop_types_default()).bool,
    circular: (prop_types_default()).bool,
    children: (prop_types_default()).node.isRequired
};
/* harmony default export */ const components_MKSocialButton = (MKSocialButton);

// EXTERNAL MODULE: ./src/examples/Navbars/DefaultNavbar/index.js + 3 modules
var DefaultNavbar = __webpack_require__(61284);
// EXTERNAL MODULE: ./src/examples/Footers/DefaultFooter/index.js
var DefaultFooter = __webpack_require__(29399);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/umd/react-router-dom.production.min.js
var react_router_dom_production_min = __webpack_require__(92876);
// EXTERNAL MODULE: ./node_modules/@mui/material/Icon/index.js
var Icon = __webpack_require__(95754);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon);
// EXTERNAL MODULE: ./node_modules/@mui/material/Link/index.js
var Link = __webpack_require__(94984);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
;// CONCATENATED MODULE: ./src/examples/Cards/InfoCards/FilledInfoCard/index.js
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ // prop-types is a library for typechecking of props


// react-router-dom components

// @mui material components


// Material Kit 2 React components


function FilledInfoCard({ variant , color , icon , title , description , action  }) {
    const buttonStyles = {
        width: "max-content",
        display: "flex",
        alignItems: "center",
        "& .material-icons-round": {
            fontSize: "1.125rem",
            transform: `translateX(3px)`,
            transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)"
        },
        "&:hover .material-icons-round, &:focus .material-icons-round": {
            transform: `translateX(6px)`
        }
    };
    let iconColor = color;
    if (variant === "gradient" && color !== "light") {
        iconColor = "white";
    } else if (variant === "gradient" && color === "light") {
        iconColor = "dark";
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKBox/* default */.Z, {
        display: {
            xs: "block",
            md: "flex"
        },
        variant: variant,
        bgColor: variant === "contained" ? "grey-100" : color,
        borderRadius: "xl",
        pt: 3.5,
        pb: 3,
        px: 3,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                display: "block",
                variant: "h3",
                color: iconColor,
                textGradient: variant === "contained",
                mt: -0.625,
                children: typeof icon === "string" ? /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                    children: icon
                }) : icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKBox/* default */.Z, {
                pt: {
                    xs: 3,
                    md: 0
                },
                pl: {
                    xs: 0,
                    md: 2
                },
                lineHeight: 1,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                        display: "block",
                        variant: "5",
                        color: variant === "contained" || color === "light" ? "dark" : "white",
                        fontWeight: "bold",
                        mb: 1,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                        display: "block",
                        variant: "body2",
                        color: variant === "contained" || color === "light" ? "text" : "white",
                        mb: 2,
                        children: description
                    }),
                    action && action.type === "external" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKTypography/* default */.Z, {
                        component: (Link_default()),
                        href: action.route,
                        target: "_blank",
                        rel: "noreferrer",
                        variant: "body2",
                        fontWeight: "regular",
                        color: variant === "contained" ? color : "white",
                        sx: buttonStyles,
                        children: [
                            action.label,
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                                sx: {
                                    fontWeight: "bold"
                                },
                                children: "arrow_forward"
                            })
                        ]
                    }) : null,
                    action && action.type === "internal" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKTypography/* default */.Z, {
                        component: react_router_dom_production_min.Link,
                        to: action.route,
                        variant: "body2",
                        fontWeight: "regular",
                        color: variant === "contained" ? color : "white",
                        sx: buttonStyles,
                        children: [
                            action.label,
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                                sx: {
                                    fontWeight: "bold"
                                },
                                children: "arrow_forward"
                            })
                        ]
                    }) : null
                ]
            })
        ]
    });
}
// Setting default props for the FilledInfoCard
FilledInfoCard.defaultProps = {
    variant: "contained",
    color: "info",
    action: false
};
// Typechecking props for the FilledInfoCard
FilledInfoCard.propTypes = {
    variant: prop_types_default().oneOf([
        "contained",
        "gradient"
    ]),
    color: prop_types_default().oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark", 
    ]),
    icon: (prop_types_default()).node.isRequired,
    title: (prop_types_default()).string.isRequired,
    description: (prop_types_default()).string.isRequired,
    action: prop_types_default().oneOfType([
        (prop_types_default()).bool,
        prop_types_default().shape({
            type: prop_types_default().oneOf([
                "external",
                "internal"
            ]).isRequired,
            route: (prop_types_default()).string.isRequired,
            label: (prop_types_default()).string.isRequired
        }), 
    ])
};
/* harmony default export */ const InfoCards_FilledInfoCard = (FilledInfoCard);

// EXTERNAL MODULE: ./src/pages/Presentation/sections/Counters.js
var Counters = __webpack_require__(10820);
// EXTERNAL MODULE: ./src/pages/Presentation/sections/Information.js + 5 modules
var Information = __webpack_require__(42621);
// EXTERNAL MODULE: ./src/pages/Presentation/sections/Testimonials.js + 4 modules
var Testimonials = __webpack_require__(44689);
// EXTERNAL MODULE: ./src/pages/Presentation/sections/Download.js + 1 modules
var Download = __webpack_require__(72351);
// EXTERNAL MODULE: ./src/pages/Presentation/components/BuiltByDevelopers/index.js
var BuiltByDevelopers = __webpack_require__(29266);
// EXTERNAL MODULE: ./src/routes.js + 107 modules
var routes = __webpack_require__(90601);
// EXTERNAL MODULE: ./src/footer.routes.js + 1 modules
var footer_routes = __webpack_require__(24232);
;// CONCATENATED MODULE: ./src/assets/images/containers.jpeg
/* harmony default export */ const containers = ({"src":"/_next/static/media/containers.baebab42.jpeg","height":360,"width":889,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQX/2gAMAwEAAhADEAAAAJgVT//EABoQAQACAwEAAAAAAAAAAAAAAAECAwAEEUH/2gAIAQEAAT8Aukxo1051pVUH3P/EABgRAAMBAQAAAAAAAAAAAAAAAAECAwAi/9oACAECAQE/AIMwmOjv/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAMy/9oACAEDAQE/AG0f/9k=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/pages/Presentation/index.js
// @mui material components




// Material Kit 2 React components



// Material Kit 2 React examples



// Presentation page sections




// Presentation page components

// Routes


// Images

function Presentation() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(DefaultNavbar/* default */.Z, {
                routes: routes/* default */.Z,
                action: {
                    type: "external",
                    route: "https://www.creative-tim.com/product/material-kit-react",
                    label: "contact us",
                    color: "info"
                },
                sticky: true
            }),
            /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                minHeight: "75vh",
                width: "100%",
                sx: {
                    backgroundImage: `url(${containers})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    display: "grid",
                    placeItems: "center"
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                        container: true,
                        item: true,
                        xs: 12,
                        lg: 7,
                        justifyContent: "center",
                        mx: "auto",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKTypography/* default */.Z, {
                                variant: "h1",
                                color: "white",
                                mt: -6,
                                mb: 1,
                                sx: ({ breakpoints , typography: { size  }  })=>({
                                        [breakpoints.down("md")]: {
                                            fontSize: size["3xl"]
                                        }
                                    }),
                                children: [
                                    "Spread Delivery",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                                variant: "body1",
                                color: "white",
                                textAlign: "center",
                                px: {
                                    xs: 6,
                                    lg: 15
                                },
                                mt: 1,
                                children: "Spread your order, spread your delivery. & We help your company to order products spreading the cost of the container delivery. Easier than ever."
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Card_default()), {
                sx: {
                    p: 2,
                    mx: {
                        xs: 2,
                        lg: 3
                    },
                    mt: -8,
                    mb: 4,
                    backgroundColor: ({ palette: { white  } , functions: { rgba  }  })=>rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl  }  })=>xxl
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Counters["default"], {}),
                    /*#__PURE__*/ jsx_runtime.jsx(Information["default"], {}),
                    /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
                        sx: {
                            mt: 6
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx(BuiltByDevelopers["default"], {})
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                            container: true,
                            spacing: 3,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    lg: 4,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(InfoCards_FilledInfoCard, {
                                        variant: "gradient",
                                        color: "info",
                                        icon: "flag",
                                        title: "Getting Started",
                                        description: "Check the possible ways of working with our product and the necessary files for building your own project.",
                                        action: {
                                            type: "external",
                                            route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                                            label: "Let's start"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    lg: 4,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(InfoCards_FilledInfoCard, {
                                        color: "info",
                                        icon: "precision_manufacturing",
                                        title: "Plugins",
                                        description: "Get inspiration and have an overview about the plugins that we used to create the Material Kit.",
                                        action: {
                                            type: "external",
                                            route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                                            label: "Read more"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    lg: 4,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(InfoCards_FilledInfoCard, {
                                        color: "info",
                                        icon: "apps",
                                        title: "Components",
                                        description: "Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster.",
                                        action: {
                                            type: "external",
                                            route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                                            label: "Read more"
                                        }
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Testimonials["default"], {}),
                    /*#__PURE__*/ jsx_runtime.jsx(Download["default"], {}),
                    /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                        pt: 18,
                        pb: 6,
                        children: /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 3,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        lg: 5,
                                        ml: "auto",
                                        sx: {
                                            textAlign: {
                                                xs: "center",
                                                lg: "left"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                                                variant: "h4",
                                                fontWeight: "bold",
                                                mb: 0.5,
                                                children: "Thank you for your support!"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                                                variant: "body1",
                                                color: "text",
                                                children: "We always provide the best solution for you"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        lg: 5,
                                        my: {
                                            xs: 5,
                                            lg: "auto"
                                        },
                                        mr: {
                                            xs: 0,
                                            lg: "auto"
                                        },
                                        sx: {
                                            textAlign: {
                                                xs: "center",
                                                lg: "right"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_MKSocialButton, {
                                                component: "a",
                                                href: "https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react",
                                                target: "_blank",
                                                color: "twitter",
                                                sx: {
                                                    mr: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    }),
                                                    "\xa0Tweet"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_MKSocialButton, {
                                                component: "a",
                                                href: "https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react",
                                                target: "_blank",
                                                color: "facebook",
                                                sx: {
                                                    mr: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fab fa-facebook"
                                                    }),
                                                    "\xa0Share"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                pt: 6,
                px: 1,
                mt: 6,
                children: /*#__PURE__*/ jsx_runtime.jsx(DefaultFooter/* default */.Z, {
                    content: footer_routes/* default */.Z
                })
            })
        ]
    });
}
/* harmony default export */ const pages_Presentation = (Presentation);


/***/ }),

/***/ 10820:
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
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79540);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_MKBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9866);
/* harmony import */ var examples_Cards_CounterCards_DefaultCounterCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11670);
// @mui material components




// Material Kit 2 React components

// Material Kit 2 React examples

function Counters() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MKBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        component: "section",
        py: 3,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                container: true,
                item: true,
                xs: 12,
                lg: 9,
                sx: {
                    mx: "auto"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                        item: true,
                        xs: 12,
                        md: 4,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(examples_Cards_CounterCards_DefaultCounterCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            count: 70,
                            suffix: "+",
                            title: "Coded Elements",
                            description: "From buttons, to inputs, navbars, alerts or cards, you are covered"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                        item: true,
                        xs: 12,
                        md: 4,
                        display: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default()), {
                                orientation: "vertical",
                                sx: {
                                    display: {
                                        xs: "none",
                                        md: "block"
                                    },
                                    mx: 0
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(examples_Cards_CounterCards_DefaultCounterCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                count: 15,
                                suffix: "+",
                                title: "Design Blocks",
                                description: "Mix the sections, change the colors and unleash your creativity"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default()), {
                                orientation: "vertical",
                                sx: {
                                    display: {
                                        xs: "none",
                                        md: "block"
                                    },
                                    ml: 0
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                        item: true,
                        xs: 12,
                        md: 4,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(examples_Cards_CounterCards_DefaultCounterCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            count: 4,
                            title: "Pages",
                            description: "Save 3-4 weeks of work when you use our pre-made pages for your website"
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counters);


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

/***/ 42621:
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
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/index.js
var Card = __webpack_require__(34297);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
;// CONCATENATED MODULE: ./src/examples/Cards/RotatingCard/index.js
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// prop-types is a library for typechecking of props.

// @mui material components

// Material Kit 2 React components

function RotatingCard({ children  }) {
    const { 0: rotate , 1: setRotate  } = (0,react.useState)(false);
    const rotate0 = ()=>setRotate(false);
    const rotate180 = ()=>setRotate(true);
    return /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
        sx: {
            perspective: "50rem"
        },
        onMouseEnter: rotate180,
        onMouseLeave: rotate0,
        children: /*#__PURE__*/ jsx_runtime.jsx((Card_default()), {
            sx: {
                backgroundColor: "transparent",
                boxShadow: "none",
                position: "relative",
                transform: rotate ? "rotateY(180deg)" : "rotateY(0)",
                transformStyle: "preserve-3d",
                transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)"
            },
            children: children
        })
    });
}
// Typechecking props for the RotatingCard
RotatingCard.propTypes = {
    children: (prop_types_default()).node.isRequired
};
/* harmony default export */ const Cards_RotatingCard = (RotatingCard);

// EXTERNAL MODULE: ./node_modules/@mui/material/Icon/index.js
var Icon = __webpack_require__(95754);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon);
// EXTERNAL MODULE: ./src/components/MKTypography/index.js + 1 modules
var MKTypography = __webpack_require__(27713);
;// CONCATENATED MODULE: ./src/examples/Cards/RotatingCard/RotatingCardFront.js
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ // prop-types is a library for typechecking of props.


// @mui material components

// Material Kit 2 React components


function RotatingCardFront({ color , image , icon , title , description  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: "lg",
        coloredShadow: color,
        width: "100%",
        position: "relative",
        zIndex: 2,
        sx: {
            backgroundImage: ({ palette: { gradients  } , functions: { linearGradient , rgba  }  })=>`${linearGradient(rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85), rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85))}, url(${image})`,
            backgroundSize: "cover",
            backfaceVisibility: "hidden"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKBox/* default */.Z, {
            py: 12,
            px: 3,
            textAlign: "center",
            lineHeight: 1,
            children: [
                icon && /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                    variant: "h2",
                    color: "white",
                    my: 2,
                    children: typeof icon === "string" ? /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                        children: icon
                    }) : icon
                }),
                /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                    variant: "h3",
                    color: "white",
                    gutterBottom: true,
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                    variant: "body2",
                    color: "white",
                    opacity: 0.8,
                    children: description
                })
            ]
        })
    });
}
// Setting default props for the RotatingCardFront
RotatingCardFront.defaultProps = {
    color: "info",
    icon: ""
};
// Typechecking props for the RotatingCardFront
RotatingCardFront.propTypes = {
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
    image: (prop_types_default()).string.isRequired,
    icon: (prop_types_default()).node,
    title: (prop_types_default()).node.isRequired,
    description: (prop_types_default()).node.isRequired
};
/* harmony default export */ const RotatingCard_RotatingCardFront = (RotatingCardFront);

// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/umd/react-router-dom.production.min.js
var react_router_dom_production_min = __webpack_require__(92876);
// EXTERNAL MODULE: ./node_modules/@mui/material/Link/index.js
var Link = __webpack_require__(94984);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./src/components/MKButton/index.js + 1 modules
var MKButton = __webpack_require__(4969);
;// CONCATENATED MODULE: ./src/examples/Cards/RotatingCard/RotatingCardBack.js
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ // prop-types is a library for typechecking of props.


// react-router-dom components

// @mui material components

// Material Kit 2 React components



function RotatingCardBack_RotatingCard({ color , image , title , description , action  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "lg",
        coloredShadow: color,
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 5,
        sx: {
            backgroundImage: ({ palette: { gradients  } , functions: { linearGradient , rgba  }  })=>`${linearGradient(rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85), rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85))}, url(${image})`,
            backgroundSize: "cover",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKBox/* default */.Z, {
            pt: 12,
            pb: 2,
            px: 2,
            textAlign: "center",
            lineHeight: 1,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                    variant: "h3",
                    color: "white",
                    gutterBottom: true,
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                    variant: "body2",
                    color: "white",
                    opacity: 0.8,
                    children: description
                }),
                action && /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                    width: "50%",
                    mt: 4,
                    mb: 2,
                    mx: "auto",
                    children: action.type === "external" ? /*#__PURE__*/ jsx_runtime.jsx(MKButton/* default */.Z, {
                        component: (Link_default()),
                        href: action.route,
                        target: "_blank",
                        rel: "noreferrer",
                        color: "white",
                        size: "small",
                        fullWidth: true,
                        children: action.label
                    }) : /*#__PURE__*/ jsx_runtime.jsx(MKButton/* default */.Z, {
                        component: react_router_dom_production_min.Link,
                        to: action.route,
                        color: "white",
                        size: "small",
                        fullWidth: true,
                        children: action.label
                    })
                })
            ]
        })
    });
}
// Setting default props for the RotatingCard
RotatingCardBack_RotatingCard.defaultProps = {
    color: "info"
};
// Typechecking props for the RotatingCard
RotatingCardBack_RotatingCard.propTypes = {
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
    image: (prop_types_default()).string.isRequired,
    title: (prop_types_default()).node.isRequired,
    description: (prop_types_default()).node.isRequired,
    action: prop_types_default().oneOfType([
        (prop_types_default()).bool,
        prop_types_default().shape({
            type: prop_types_default().oneOf([
                "external",
                "internal"
            ]).isRequired,
            route: (prop_types_default()).string.isRequired,
            label: (prop_types_default()).string.isRequired
        }), 
    ]).isRequired
};
/* harmony default export */ const RotatingCardBack = (RotatingCardBack_RotatingCard);

// EXTERNAL MODULE: ./src/examples/Cards/InfoCards/DefaultInfoCard/index.js
var DefaultInfoCard = __webpack_require__(7924);
;// CONCATENATED MODULE: ./src/assets/images/rotating-card-bg-front.jpeg
/* harmony default export */ const rotating_card_bg_front = ({"src":"/_next/static/media/rotating-card-bg-front.35319282.jpeg","height":5760,"width":3840,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAKoh/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIEEQADBhIT/9oACAEBAAE/AN/LJNIYu6Gbvt6o6EZ//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAECAQE/ADShf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./src/assets/images/rotating-card-bg-back.jpeg
/* harmony default export */ const rotating_card_bg_back = ({"src":"/_next/static/media/rotating-card-bg-back.77dbb214.jpeg","height":1706,"width":1365,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAALAK/wD/xAAbEAACAQUAAAAAAAAAAAAAAAACAwABBBIWcv/aAAgBAQABPwDebs0jXJQHxP/EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMykf/aAAgBAgEBPwBxC7X7P//EABoRAAEFAQAAAAAAAAAAAAAAAAEAAgMRIpH/2gAIAQMBAT8AEpoYZxf/2Q==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/pages/Presentation/sections/Information.js
// @mui material components



// Material Kit 2 React components

// Material Kit 2 React examples




// Images


function Information() {
    return /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
        component: "section",
        py: 6,
        my: 6,
        children: /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                container: true,
                item: true,
                xs: 11,
                spacing: 3,
                alignItems: "center",
                sx: {
                    mx: "auto"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        lg: 4,
                        sx: {
                            mx: "auto"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Cards_RotatingCard, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(RotatingCard_RotatingCardFront, {
                                    image: rotating_card_bg_front,
                                    icon: "touch_app",
                                    title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            "Feel the",
                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                            "Material Kit"
                                        ]
                                    }),
                                    description: "All the MUI components that you need in a development have been re-design with the new look."
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(RotatingCardBack, {
                                    image: rotating_card_bg_back,
                                    title: "Discover More",
                                    description: "You will save a lot of time going from prototyping to full-functional code because all elements are implemented.",
                                    action: {
                                        type: "internal",
                                        route: "/sections/page-sections/page-headers",
                                        label: "start with header"
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                        item: true,
                        xs: 12,
                        lg: 7,
                        sx: {
                            ml: "auto"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        children: /*#__PURE__*/ jsx_runtime.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "content_copy",
                                            title: "Full Documentation",
                                            description: "Built by developers for developers. Check the foundation and you will find everything inside our documentation."
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        children: /*#__PURE__*/ jsx_runtime.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "flip_to_front",
                                            title: "MUI Ready",
                                            description: "The world's most popular react components library for building user interfaces."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 3,
                                sx: {
                                    mt: {
                                        xs: 0,
                                        md: 6
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        children: /*#__PURE__*/ jsx_runtime.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "price_change",
                                            title: "Save Time & Money",
                                            description: "Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        children: /*#__PURE__*/ jsx_runtime.jsx(DefaultInfoCard/* default */.Z, {
                                            icon: "devices",
                                            title: "Fully Responsive",
                                            description: "Regardless of the screen size, the website content will naturally fit the given resolution."
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const sections_Information = (Information);


/***/ }),

/***/ 44689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Testimonials)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mui/material/Container/index.js
var Container = __webpack_require__(20165);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/index.js
var Grid = __webpack_require__(672);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid);
// EXTERNAL MODULE: ./node_modules/@mui/material/Divider/index.js
var Divider = __webpack_require__(79540);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./src/components/MKBox/index.js + 1 modules
var MKBox = __webpack_require__(9866);
// EXTERNAL MODULE: ./src/components/MKTypography/index.js + 1 modules
var MKTypography = __webpack_require__(27713);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@mui/material/Icon/index.js
var Icon = __webpack_require__(95754);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon);
// EXTERNAL MODULE: ./src/components/MKAvatar/index.js + 1 modules
var MKAvatar = __webpack_require__(48927);
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
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 1),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 2),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 3),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 4),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        1: [
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 2),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 3),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 4),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        1.5: [
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_half"
            }, 2),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 3),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 4),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        2: [
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 2),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 3),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 4),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        2.5: [
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 2),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_half"
            }, 3),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 4),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        3: [
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 2),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 3),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 4),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        3.5: [
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 2),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 3),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_half"
            }, 4),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        4: [
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 2),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 3),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 4),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_outline"
            }, 5), 
        ],
        4.5: [
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 2),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 3),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 4),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star_half"
            }, 5), 
        ],
        5: [
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 1),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 2),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 3),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 4),
            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                children: "star"
            }, 5), 
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKBox/* default */.Z, {
        variant: color === "transparent" ? "contained" : "gradient",
        bgColor: color,
        borderRadius: "xl",
        shadow: color === "transparent" ? "none" : "md",
        p: 3,
        children: [
            image && /*#__PURE__*/ jsx_runtime.jsx(MKAvatar/* default */.Z, {
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
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKBox/* default */.Z, {
                lineHeight: 1,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                        display: "block",
                        variant: image ? "button" : "h6",
                        fontWeight: "bold",
                        color: color === "transparent" || color === "light" ? "dark" : "white",
                        mb: 0.5,
                        children: name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKTypography/* default */.Z, {
                        variant: image ? "caption" : "button",
                        fontWeight: "regular",
                        lineHeight: 1,
                        color: color === "transparent" || color === "light" ? "text" : "white",
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Icon_default()), {
                                children: "schedule"
                            }),
                            "\xa0",
                            date
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(MKTypography/* default */.Z, {
                variant: "body2",
                color: color === "transparent" || color === "light" ? "text" : "white",
                my: 4,
                children: [
                    '"',
                    review,
                    '"'
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
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
    color: prop_types_default().oneOf([
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
    image: (prop_types_default()).string,
    name: (prop_types_default()).string.isRequired,
    date: (prop_types_default()).string.isRequired,
    review: (prop_types_default()).string.isRequired,
    rating: prop_types_default().oneOf([
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
var logo_nasa = __webpack_require__(68645);
// EXTERNAL MODULE: ./src/assets/images/logos/gray-logos/logo-vodafone.svg
var logo_vodafone = __webpack_require__(95072);
;// CONCATENATED MODULE: ./src/assets/images/logos/gray-logos/logo-digitalocean.svg
/* harmony default export */ const logo_digitalocean = ({"src":"/_next/static/media/logo-digitalocean.a5763d09.svg","height":92,"width":352});
;// CONCATENATED MODULE: ./src/pages/Presentation/sections/Testimonials.js
// @mui material components




// Material Kit 2 React components


// Material Kit 2 React examples

// Images





function Information() {
    return /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
        component: "section",
        py: 12,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
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
                        /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                            variant: "h2",
                            children: "Trusted by over"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                            variant: "h2",
                            color: "info",
                            textGradient: true,
                            mb: 2,
                            children: "500+ importers over the world"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(MKTypography/* default */.Z, {
                            variant: "body1",
                            color: "text",
                            mb: 2,
                            children: "Many users are using Spread Delivery"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 3,
                    sx: {
                        mt: 8
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: 6,
                            lg: 4,
                            children: /*#__PURE__*/ jsx_runtime.jsx(ReviewCards_DefaultReviewCard, {
                                name: "Nick Willever",
                                date: "1 day ago",
                                review: "This is an excellent product, the documentation is excellent and helped me get things done more efficiently.",
                                rating: 5
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: 6,
                            lg: 4,
                            children: /*#__PURE__*/ jsx_runtime.jsx(ReviewCards_DefaultReviewCard, {
                                color: "info",
                                name: "Shailesh Kushwaha",
                                date: "1 week ago",
                                review: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
                                rating: 5
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: 6,
                            lg: 4,
                            children: /*#__PURE__*/ jsx_runtime.jsx(ReviewCards_DefaultReviewCard, {
                                name: "Samuel Kamuli",
                                date: "3 weeks ago",
                                review: "Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!.",
                                rating: 5
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Divider_default()), {
                    sx: {
                        my: 6
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 3,
                    justifyContent: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                            item: true,
                            xs: 6,
                            md: 4,
                            lg: 2,
                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                component: "img",
                                src: logo_apple,
                                alt: "Apple",
                                width: "100%",
                                opacity: 0.6
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                            item: true,
                            xs: 6,
                            md: 4,
                            lg: 2,
                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                component: "img",
                                src: logo_facebook,
                                alt: "Facebook",
                                width: "100%",
                                opacity: 0.6
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                            item: true,
                            xs: 6,
                            md: 4,
                            lg: 2,
                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                component: "img",
                                src: logo_nasa/* default */.Z,
                                alt: "Nasa",
                                width: "100%",
                                opacity: 0.6
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                            item: true,
                            xs: 6,
                            md: 4,
                            lg: 2,
                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
                                component: "img",
                                src: logo_vodafone/* default */.Z,
                                alt: "Vodafone",
                                width: "100%",
                                opacity: 0.6
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                            item: true,
                            xs: 6,
                            md: 4,
                            lg: 2,
                            children: /*#__PURE__*/ jsx_runtime.jsx(MKBox/* default */.Z, {
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3386,9387,8791,522,4718,5754,9376,2066,4984,5095,4297,2876,2861,3506,7857,5727,9540,7938,512,7119,7341,4969,8927,730,7924,1670,5320,7934,601], () => (__webpack_exec__(76903)));
module.exports = __webpack_exports__;

})();