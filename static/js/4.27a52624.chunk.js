(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[4,35],{1075:function(e,t,n){"use strict";n.r(t);n(1);var r=n(648),o=n(679),i=n(6),a=function(){var e=Object(o.a)().t;return Object(i.jsx)(r.q,{className:"min-vh-100 d-flex pb-4 pt-5",children:Object(i.jsx)("h1",{children:e("conditions.title")})})};t.default=a},658:function(e,t,n){"use strict";function r(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var o={};function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&o[t[0]]||("string"===typeof t[0]&&(o[t[0]]=new Date),r.apply(void 0,t))}function a(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return i("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var c=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!c(r,e)||o&&!c(a,e))))}},659:function(e,t,n){var r=n(660),o=n(661),i=n(662),a=n(664);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},660:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},661:function(e,t){e.exports=function(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}},e.exports.default=e.exports,e.exports.__esModule=!0},662:function(e,t,n){var r=n(663);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},663:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},664:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},679:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(659),o=n.n(r),i=n(158),a=n.n(i),c=n(1),u=n(157),s=n(658);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(c.useContext)(u.a)||{},i=r.i18n,a=r.defaultNS,f=n||i||Object(u.d)();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new u.b),!f){Object(s.d)("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[p,{},!1];return d.t=p,d.i18n={},d.ready=!1,d}f.options.react&&void 0!==f.options.react.wait&&Object(s.d)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=l(l(l({},Object(u.c)()),f.options.react),t),g=b.useSuspense,y=e||a||f.options&&f.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],f.reportNamespaces.addUsedNamespaces&&f.reportNamespaces.addUsedNamespaces(y);var v=(f.isInitialized||f.initializedStoreOnce)&&y.every((function(e){return Object(s.a)(e,f,b)}));function h(){return f.getFixedT(null,"fallback"===b.nsMode?y:y[0])}var O=Object(c.useState)(h),x=o()(O,2),j=x[0],m=x[1],w=Object(c.useRef)(!0);Object(c.useEffect)((function(){var e=b.bindI18n,t=b.bindI18nStore;function n(){w.current&&m(h)}return w.current=!0,v||g||Object(s.b)(f,y,(function(){w.current&&m(h)})),e&&f&&f.on(e,n),t&&f&&f.store.on(t,n),function(){w.current=!1,e&&f&&e.split(" ").forEach((function(e){return f.off(e,n)})),t&&f&&t.split(" ").forEach((function(e){return f.store.off(e,n)}))}}),[f,y.join()]);var S=Object(c.useRef)(!0);Object(c.useEffect)((function(){w.current&&!S.current&&m(h),S.current=!1}),[f]);var _=[j,f,v];if(_.t=j,_.i18n=f,_.ready=v,v)return _;if(!v&&!g)return _;throw new Promise((function(e){Object(s.b)(f,y,(function(){e()}))}))}}}]);
//# sourceMappingURL=4.27a52624.chunk.js.map