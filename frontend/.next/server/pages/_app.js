(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./utility/createEmotionCache.js

const createEmotionCache = ()=>{
    return cache_default()({
        key: "css",
        prepend: true
    });
};
/* harmony default export */ const utility_createEmotionCache = (createEmotionCache);

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(442);
;// CONCATENATED MODULE: ./styles/theme/lightTheme.js

const lightTheme = (0,styles_.createTheme)({
    palette: {
        mode: "light"
    }
});
/* harmony default export */ const theme_lightTheme = (lightTheme);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: ./pages/_app.js








const clientSideEmotionCache = utility_createEmotionCache();
const MyApp = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.ThemeProvider, {
            theme: theme_lightTheme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.CssBaseline, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
};
/* harmony default export */ const _app = (MyApp);
MyApp.propTypes = {
    Component: (external_prop_types_default()).elementType.isRequired,
    emotionCache: (external_prop_types_default()).object,
    pageProps: (external_prop_types_default()).object.isRequired
};


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(482));
module.exports = __webpack_exports__;

})();