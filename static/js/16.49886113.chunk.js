(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{1088:function(e,t,n){"use strict";n.r(t);var r=n(153),o=n(18),a=n(26),c=n.n(a),i=n(46),s=n(651),u=n(154),l=n(1),f=n(24),d=n(648),p=n(679),b=n(824),j=n(6),m=function(e){var t=e.onChange,n=e.isLoading,r=e.toaster,o=e.toast,a=e.sendRequest,c=e.formData,i=e.isRegistrationCompleted,s=Object(p.a)().t;return Object(j.jsxs)(d.q,{className:"min-vh-100 d-flex pb-4 pt-5",children:[n&&Object(j.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center col-lg-8 mx-auto",children:[i?Object(j.jsx)("div",{className:"completedRegistration",style:{width:"5em",height:"5em"}}):Object(j.jsx)("div",{className:"d-flex justify-content-center intermittent spinner-border text-primary",style:{width:"5em",height:"5em"},role:"status",children:Object(j.jsx)("span",{className:"sr-only"})}),Object(j.jsx)("h1",{className:"mt-5 text-center",children:s("register.newAccount.loading.".concat(i?"success":"pending"))})]}),!n&&Object(j.jsxs)(d.p,{className:"d-flex flex-column justify-content-between",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"p-0",children:s("bankRegister.title")}),Object(j.jsxs)(d.X,{className:"m-0 mt-5",children:[Object(j.jsx)("div",{className:"px-0 col-12 col-md-3",children:Object(j.jsxs)(d.C,{children:[Object(j.jsx)(d.B,{value:c.company,type:"text",name:"company",id:"company",placeholder:s("bankName"),onChange:t}),Object(j.jsx)(d.D,{htmlFor:"company",children:s("bankName")})]})}),Object(j.jsx)("div",{className:"px-0 mx-md-4 col-12 col-md-3",children:Object(j.jsxs)(d.C,{children:[Object(j.jsx)(d.B,{value:c.email,type:"email",name:"email",id:"email",placeholder:s("email"),onChange:t}),Object(j.jsx)(d.D,{htmlFor:"email",children:s("email")})]})})]})]}),Object(j.jsx)("div",{className:"col-12 col-md-3 my-md-0 my-5 d-flex flex-column align-items-start",children:Object(j.jsx)(d.j,{className:"text-white btn-lg w-100",color:"primary",block:"true",onClick:a,children:s("bankRegister.button")},Object(b.a)())})]}),Object(j.jsx)(d.hb,{ref:r,push:o,placement:"top-end"})]})},g=n(94),h=n(72),O=n(120),y=n(156),v={isValid:!1},x=Object(g.b)((function(e){return{isLoggedIn:e.isLoggedIn}}))((function(e){var t=e.isLoggedIn,n=Object(u.a)(e,["isLoggedIn"]),a=Object(p.a)().t,b=Object(l.useState)(!1),x=Object(s.a)(b,2),w=x[0],S=x[1],N=Object(l.useState)(v),C=Object(s.a)(N,2),k=C[0],A=(C[1],Object(l.useState)(!1)),I=Object(s.a)(A,2),R=I[0],E=I[1],_=Object(l.useState)(0),L=Object(s.a)(_,2),M=L[0],D=L[1],T=Object(l.useRef)(),P=Object(l.useState)({company:"",email:""}),U=Object(s.a)(P,2),V=U[0],z=U[1],B=Object(g.c)(),F=function(){var e=Object(i.a)(c.a.mark((function e(){var t,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),e.next=4,Object(O.A)(V);case 4:t=e.sent,n=t.token,r=t.message,n&&(S(!0),setTimeout((function(){E(!1),B(Object(h.d)(n))}),3500)),r&&(E(!1),D((function(){return q(r)}))),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),E(!1),D((function(){return q()}));case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(j.jsxs)(d.eb,{title:a("defaultErrorTitle"),autohide:!0,children:[Object(j.jsxs)(d.gb,{close:!0,children:[Object(j.jsx)("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:Object(j.jsx)("rect",{width:"100%",height:"100%",fill:"#EB5757"})}),Object(j.jsx)("strong",{className:"me-auto",children:a("defaultErrorTitle")})]}),Object(j.jsx)(d.fb,{children:e||a("default400Error")})]})},$=Object(o.a)(Object(o.a)({},n),{},{isRegistrationCompleted:w,formData:V,onChange:function(e){var t=e.target,n=t.name,a=t.value;t.checked;z(Object(o.a)(Object(o.a)({},V),{},Object(r.a)({},n,a)))},sendRequest:function(){return F()},validation:k,isLoading:R,toaster:T,toast:M});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(y.a,{children:[Object(j.jsx)("title",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 \u0434\u043b\u044f \u0412\u0430\u0448\u0435\u0433\u043e \u0431\u0430\u043d\u043a\u0430"}),Object(j.jsx)("meta",{name:"description",content:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u0412\u0430\u0448\u0435\u0433\u043e \u0431\u0430\u043d\u043a\u0430 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e \u0438 \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u043f\u0440\u044f\u043c\u043e \u0443 \u0412\u0430\u0441 \u0432 \u043e\u0444\u0438\u0441\u0435. \u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0432\u0441\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b \u0443\u0436\u0435 \u0441\u0435\u0433\u043e\u0434\u043d\u044f!"})]}),Object(j.jsx)(m,Object(o.a)({},$)),t&&Object(j.jsx)(f.a,{to:"/dashboard"})]})}));t.default=x},651:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(656);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},656:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(657);function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},657:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},658:function(e,t,n){"use strict";function r(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var o={};function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&o[t[0]]||("string"===typeof t[0]&&(o[t[0]]=new Date),r.apply(void 0,t))}function c(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return a("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,c=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!i(r,e)||o&&!i(c,e))))}},659:function(e,t,n){var r=n(660),o=n(661),a=n(662),c=n(664);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},660:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},661:function(e,t){e.exports=function(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(s){i=!0,o=s}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},662:function(e,t,n){var r=n(663);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},663:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},664:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},679:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(659),o=n.n(r),a=n(158),c=n.n(a),i=n(1),s=n(157),u=n(658);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(i.useContext)(s.a)||{},a=r.i18n,c=r.defaultNS,l=n||a||Object(s.d)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new s.b),!l){Object(u.d)("You will need to pass in an i18next instance by using initReactI18next");var d=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[d,{},!1];return p.t=d,p.i18n={},p.ready=!1,p}l.options.react&&void 0!==l.options.react.wait&&Object(u.d)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=f(f(f({},Object(s.c)()),l.options.react),t),j=b.useSuspense,m=e||c||l.options&&l.options.defaultNS;m="string"===typeof m?[m]:m||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(m);var g=(l.isInitialized||l.initializedStoreOnce)&&m.every((function(e){return Object(u.a)(e,l,b)}));function h(){return l.getFixedT(null,"fallback"===b.nsMode?m:m[0])}var O=Object(i.useState)(h),y=o()(O,2),v=y[0],x=y[1],w=Object(i.useRef)(!0);Object(i.useEffect)((function(){var e=b.bindI18n,t=b.bindI18nStore;function n(){w.current&&x(h)}return w.current=!0,g||j||Object(u.b)(l,m,(function(){w.current&&x(h)})),e&&l&&l.on(e,n),t&&l&&l.store.on(t,n),function(){w.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,n)})),t&&l&&t.split(" ").forEach((function(e){return l.store.off(e,n)}))}}),[l,m.join()]);var S=Object(i.useRef)(!0);Object(i.useEffect)((function(){w.current&&!S.current&&x(h),S.current=!1}),[l]);var N=[v,l,g];if(N.t=v,N.i18n=l,N.ready=g,g)return N;if(!g&&!j)return N;throw new Promise((function(e){Object(u.b)(l,m,(function(){e()}))}))}},824:function(e,t,n){"use strict";var r,o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&c.test(e)},s=[],u=0;u<256;++u)s.push((u+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};t.a=function(e,t,n){var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return l(r)}}}]);
//# sourceMappingURL=16.49886113.chunk.js.map