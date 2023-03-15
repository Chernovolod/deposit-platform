/*! For license information please see 17.00e722b4.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17,41],{1072:function(e,t,n){"use strict";n.r(t);var a=n(153),r=n(18),i=n(26),c=n.n(i),o=n(670),s=n(46),l=n(651),u=n(154),d=n(1),m=n(24),j=n(648),b=n(679),p=n(1096),f=n(653),g=n.n(f),O=n(824),h=n(35),x=n(784),v=n.n(x),y=n(785),w=n.n(y),N=n(6),C={container:"",containerOpen:"",input:"",inputOpen:"",inputFocused:"",suggestionsList:"list-group",suggestion:"list-group-item list-group-item-action",suggestionFirst:"",suggestionHighlighted:"",sectionContainer:"react-autosuggest__section-container",sectionContainerFirst:"react-autosuggest__section-container--first",sectionTitle:"react-autosuggest__section-title"},S=function(e){var t=e.getSuggestionValue,n=e.onSuggestionsFetchRequested,a=e.suggestions,i=e.onSuggestionSelected,c=e.registrationMode,o=e.setRegistrationMode,s=e.sendRequest,l=e.goBack,d=e.onChange,m=e.isLoading,f=e.toaster,x=e.toast,y=e.formData,S=e.validation,k=e.isRegistrationCompleted,A=e.history,I=Object(b.a)().t,B=function(e){return e.name},_=function(e){var t=e.containerProps,n=e.children,a=t.ref,i=Object(u.a)(t,["ref"]);return Object(N.jsx)(w.a,Object(r.a)(Object(r.a)({ref:function(e){null!==e&&a(e.component)}},i),{},{children:n}))},F=function(e){return Object(N.jsx)("div",{children:Object(N.jsxs)(j.C,{children:[Object(N.jsx)(j.B,Object(r.a)({},e)),Object(N.jsx)(j.D,{htmlFor:"company",children:I("companyName")})]})})},R=function(){},L=function(){var e,t,n,a,r,i;return Object(N.jsxs)(j.X,{className:"mt-3",children:[Object(N.jsx)("div",{className:"px-0 col-12 col-md-3",children:Object(N.jsxs)(j.C,{children:[Object(N.jsx)(j.B,{value:y[c].company||"",type:"text",name:"company",id:"company",placeholder:I("companyName"),onChange:d}),Object(N.jsx)(j.D,{htmlFor:"company",children:I("companyName")})]})}),Object(N.jsx)("div",{className:"px-0 my-3 my-md-0 mx-md-4 col-12 col-md-3",children:Object(N.jsxs)(j.C,{children:[Object(N.jsx)(j.B,{value:y[c].email||"",valid:(null===(e=y.newAccount)||void 0===e?void 0:e.email)&&(null===(t=S.newAccount)||void 0===t?void 0:t.email),invalid:Boolean((null===(n=y.newAccount)||void 0===n?void 0:n.email)&&!(null===(a=S.newAccount)||void 0===a?void 0:a.email)),type:"email",name:"email",id:"email",placeholder:I("email"),onChange:d}),Boolean((null===(r=y.newAccount)||void 0===r?void 0:r.email)&&!(null===(i=S.newAccount)||void 0===i?void 0:i.email))&&Object(N.jsx)(j.F,{className:"text-danger",children:I("landing.registration.errorEmailText")}),Object(N.jsx)(j.D,{htmlFor:"email",children:I("email")})]})})]})},M=function(){var e,r,o,s,l,u,m,b;return Object(N.jsxs)(j.X,{children:[Object(N.jsxs)(j.X,{children:[Object(N.jsx)("div",{className:"px-0 col-12 col-md-3",children:Object(N.jsx)(v.a,{id:"autosuggest",theme:C,suggestions:a,onSuggestionsFetchRequested:n,onSuggestionsClearRequested:R,getSuggestionValue:t,renderSuggestion:B,renderInputComponent:F,renderSuggestionsContainer:_,onSuggestionSelected:i,inputProps:{valid:Boolean(y[c].company.length&&(null===(e=S.existingCompany)||void 0===e?void 0:e.company)),invalid:Boolean(y[c].company.length&&!(null===(r=S.existingCompany)||void 0===r?void 0:r.company)),autoComplete:"off",name:"company",type:"text",id:"company",placeholder:I("companyName"),value:y[c].company||"",onChange:d}})}),Object(N.jsx)("div",{className:"px-0 mx-md-4 col-12 col-md-3",children:Object(N.jsxs)(j.C,{children:[Object(N.jsx)(j.B,{autoComplete:"off",value:y[c].email||"",valid:(null===(o=y.existingCompany)||void 0===o?void 0:o.email)&&(null===(s=S.existingCompany)||void 0===s?void 0:s.email),invalid:(null===(l=y.existingCompany)||void 0===l?void 0:l.email)&&!(null===(u=S.existingCompany)||void 0===u?void 0:u.email),type:"email",name:"email",id:"email",placeholder:I("email"),onChange:d}),Boolean((null===(m=y.existingCompany)||void 0===m?void 0:m.email)&&!(null===(b=S.existingCompany)||void 0===b?void 0:b.email))&&Object(N.jsx)(j.F,{className:"text-danger",children:I("landing.registration.errorEmailText")}),Object(N.jsx)(j.D,{htmlFor:"email",children:I("email")})]})})]}),Object(N.jsxs)(j.X,{className:"mt-3",children:[Object(N.jsx)("div",{className:"px-0 col-12 col-md-3",children:Object(N.jsxs)(j.C,{children:[Object(N.jsx)(j.B,{type:"text",id:"lastName",name:"lastName",value:y[c].lastName||"",onChange:d,placeholder:I("lastName")}),Object(N.jsx)(j.D,{htmlFor:"lastName",children:I("lastName")})]})}),Object(N.jsx)("div",{className:"px-0 mx-md-4 col-12 col-md-3",children:Object(N.jsxs)(j.C,{children:[Object(N.jsx)(j.B,{value:y[c].firstName||"",type:"text",id:"firstName",name:"firstName",onChange:d,placeholder:I("firstName")}),Object(N.jsx)(j.D,{htmlFor:"firstName",children:I("firstName")})]})}),Object(N.jsx)("div",{className:"px-0 mb-3 mb-md-0 col-12 col-md-3",children:Object(N.jsxs)(j.C,{children:[Object(N.jsx)(j.B,{value:y[c].middleName||"",type:"text",id:"middleName",name:"middleName",onChange:d,placeholder:I("middleName")}),Object(N.jsx)(j.D,{htmlFor:"middleName",children:I("middleName")})]})})]})]})},E="initial"===c,D="newAccount"===c,P="existingCompany"===c;return Object(N.jsxs)(j.q,{className:"min-vh-100 d-flex flex-column pb-4 pt-5",children:[m&&Object(N.jsxs)("div",{className:"d-flex min-vh-100 flex-column align-items-center justify-content-center col-lg-8 mx-auto",children:[k?Object(N.jsx)("div",{className:"completedRegistration",style:{width:"5em",height:"5em"}}):Object(N.jsxs)("div",{className:"d-flex justify-content-center intermittent spinner-border text-primary",style:{width:"5em",height:"5em"},role:"status",children:[" ",Object(N.jsx)("span",{className:"sr-only"})]}),Object(N.jsx)("h1",{className:"mt-5 text-center",children:I("register.".concat(c,".loading.").concat(k?"success":"pending"))}),P&&k&&Object(N.jsx)("p",{className:"text-center font-size-lg",children:I("register.existingCompany.loading.description")})]}),!m&&Object(N.jsxs)(j.p,{className:g()({"d-flex flex-column justify-content-between":!E}),children:[Object(N.jsxs)(j.X,{children:[Object(N.jsx)("h1",{children:I("register.".concat(c,".title"))}),Object(N.jsx)(j.p,{lg:8,children:Object(N.jsx)("p",{children:I("register.".concat(c,".description"))})})]}),!E&&Object(N.jsx)(j.X,{className:"mx-0 mb-3 flex-md-grow-1",children:Object(N.jsxs)(j.z,{className:"row flex-column justify-content-between",children:[D&&L(),P&&M(),!E&&Object(N.jsx)(j.A,{id:"checkbox",name:"checkedAgreement",value:"",checked:y[c].checkedAgreement,onChange:d,label:Object(N.jsx)(p.a,{defaults:"\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 <l href='{{conditions}}'>\u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438</l> \u0438 <l href='{{privacyPolicy}}'>\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438</l>",values:{conditions:"/conditions",privacyPolicy:"/privacy-policy"},components:{l:Object(N.jsx)(j.L,{target:"_blank",rel:"noopener noreferrer"})}})})]})}),Object(N.jsxs)("div",{className:g()("mt-5 mt-md-0 d-flex flex-wrap",{"mt-5 flex-column align-items-start":E}),children:[Object(N.jsx)(j.j,{className:g()("text-white btn-lg col-12",{"mb-3 col-md-4":E,"mb-3 mb-md-0 col-md-3":!E}),color:"primary",block:"true",disabled:!E&&(!S.isValid||Object(h.b)(y[c])||!y[c].checkedAgreement),"data-registration-mode":"newAccount",onClick:E?o:s,children:I("register.".concat(c,".button"))},Object(O.a)()),Object(N.jsx)(j.j,{className:g()("btn-lg col-12",{"mx-md-3 col-md-3":!E,"col-md-6":E}),color:"primary",variant:"outline",block:"true","data-registration-mode":"existingCompany",onClick:E?o:l,children:I("initial"===c?"register.joinCompany":"goBack")},Object(O.a)())]})]}),E&&Object(N.jsx)(j.j,{className:"btn-lg col-12 col-md-3 mt-5 mt-md-0",color:"primary",variant:"outline",onClick:function(){return A.goBack()},children:I("goBack")},Object(O.a)()),Object(N.jsx)(j.hb,{ref:f,push:x,placement:"top-end"})]})},k=n(94),A=n(72),I=n(120),B=n(156),_={newAccount:{email:"",company:"",checkedAgreement:!1},existingCompany:{company:"",firstName:"",lastName:"",middleName:"",checkedAgreement:!1}},F={isValid:!1,newAccount:{},existingCompany:{}},R=Object(k.b)((function(e){return{isLoggedIn:e.isLoggedIn}}))((function(e){var t=e.isLoggedIn,n=Object(u.a)(e,["isLoggedIn"]),i=Object(b.a)().t,p=Object(d.useState)([]),f=Object(l.a)(p,2),g=f[0],O=f[1],h=Object(d.useState)([]),x=Object(l.a)(h,2),v=x[0],y=x[1],w=Object(d.useState)(!1),C=Object(l.a)(w,2),R=C[0],L=C[1],M=Object(d.useState)(F),E=Object(l.a)(M,2),D=E[0],P=E[1],T=Object(d.useState)(!1),V=Object(l.a)(T,2),z=V[0],q=V[1],X=Object(d.useState)(0),U=Object(l.a)(X,2),$=U[0],J=U[1],Y=Object(d.useRef)(),Z=Object(d.useState)("initial"),H=Object(l.a)(Z,2),G=H[0],K=H[1],Q=Object(d.useState)(_),W=Object(l.a)(Q,2),ee=W[0],te=W[1],ne=Object(k.c)();Object(d.useEffect)(Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("existingCompany"!==G){e.next=5;break}return e.next=3,Object(I.i)();case 3:t=e.sent,O(Object(o.a)(t));case 5:case"end":return e.stop()}}),e)}))),[G]);var ae=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete(t=Object(r.a)(Object(r.a)({},ee),{},Object(a.a)({},G,Object(r.a)(Object(r.a)({},ee[G]),{},{companyId:g.filter((function(e){return e.name===ee[G].company}))[0].id}))))[G].checkedAgreement,delete t[G].company,e.prev=3,q(!0),e.next=7,Object(I.x)(t[G]);case 7:n=e.sent,i=n.token,(o=n.message)&&(q(!1),J((function(){return ce(o)}))),o&&!i||L(!0),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),q(!1),J((function(){return ce()}));case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete(t=Object(r.a)(Object(r.a)({},ee),{},Object(a.a)({},G,Object(r.a)({},ee[G]))))[G].checkedAgreement,e.prev=2,q(!0),e.next=6,Object(I.B)(t[G]);case 6:(null===(n=e.sent)||void 0===n?void 0:n.token)&&(L(!0),setTimeout((function(){q(!1),ne(Object(A.d)(n.token))}),3500)),n.message&&(q(!1),J((function(){return ce(n.message)}))),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),q(!1),J((function(){return ce()}));case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),ie=function(e,t,n){var i,c;if("email"===e){var o=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase());P(o?Object(r.a)(Object(r.a)({},D),{},Object(a.a)({isValid:!0},G,Object(r.a)(Object(r.a)({},D[G]),{},{email:!0}))):Object(r.a)(Object(r.a)({},D),{},Object(a.a)({isValid:!1},G,Object(r.a)(Object(r.a)({},D[G]),{},{email:!1}))))}else"existingCompany"===G&&"company"===e?g.filter((function(e){return e.name===(t.trim()||ee[G].company)})).length?P(Object(r.a)(Object(r.a)({},D),{},Object(a.a)({isValid:!0},G,Object(r.a)(Object(r.a)({},D[G]),{},{company:!0})))):P(Object(r.a)(Object(r.a)({},D),{},Object(a.a)({isValid:!1},G,Object(r.a)(Object(r.a)({},D[G]),{},{company:!1})))):(t.trim()||n)&&((null===(i=D[G])||void 0===i?void 0:i.email)||(null===(c=D[G])||void 0===c?void 0:c.company))?P(Object(r.a)(Object(r.a)({},D),{},Object(a.a)({isValid:!0},G,Object(r.a)({},D[G])))):P(Object(r.a)(Object(r.a)({},D),{},Object(a.a)({isValid:!1},G,Object(r.a)({},D[G]))))},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(N.jsxs)(j.eb,{title:i("defaultErrorTitle"),autohide:!0,children:[Object(N.jsxs)(j.gb,{close:!0,children:[Object(N.jsx)("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:Object(N.jsx)("rect",{width:"100%",height:"100%",fill:"#EB5757"})}),Object(N.jsx)("strong",{className:"me-auto",children:i("defaultErrorTitle")})]}),Object(N.jsx)(j.fb,{children:e||i("default400Error")})]})},oe=Object(r.a)(Object(r.a)({},n),{},{registrationMode:G,isRegistrationCompleted:R,onSuggestionSelected:function(e,t){var n=t.suggestion,i=t.suggestionValue;t.suggestionIndex,t.sectionIndex,t.method;te(Object(r.a)(Object(r.a)({},ee),{},Object(a.a)({},G,Object(r.a)(Object(r.a)({},ee[G]),{},{companyId:n.id,company:i})))),ie("company",i),y([])},getSuggestionValue:function(e){return e.name},onSuggestionsFetchRequested:function(e){var t=e.value;y(function(e){var t=e.trim().toLowerCase(),n=t.length;return 0===n?[]:g.filter((function(e){return e.name.toLowerCase().slice(0,n)===t}))}(t))},suggestions:v,companiesList:g,setRegistrationMode:function(e){var t=e.target.dataset.registrationMode;K(t)},formData:ee,onChange:function(e){var t=e.target,n=t.name,i=t.value,c=t.checked;te(Object(r.a)(Object(r.a)({},ee),{},Object(a.a)({},G,Object(r.a)(Object(r.a)({},ee[G]),{},Object(a.a)({},n,i||c))))),n&&i&&ie(n,i,c)},sendRequest:function(){return"newAccount"===G?re():ae()},goBack:function(){te(_),P(F),K("initial")},validation:D,isLoading:z,toaster:Y,toast:$});return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(B.a,{children:[Object(N.jsx)("title",{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043b\u0438\u0446\u0430"}),Object(N.jsx)("meta",{name:"description",content:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u0431\u0438\u0437\u043d\u0435\u0441-\u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u0438\u043b\u0438 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u0441\u044c \u043a \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0411\u044b\u0441\u0442\u0440\u043e, \u043d\u0430\u0434\u0435\u0436\u043d\u043e \u0438 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e!"})]}),Object(N.jsx)(S,Object(r.a)({},oe)),t&&"existingCompany"!==G&&Object(N.jsx)(m.a,{to:"/dashboard"})]})}));t.default=R},651:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(656);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(s){r=!0,i=s}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},653:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var c=r.apply(null,a);c&&e.push(c)}}else if("object"===i)if(a.toString===Object.prototype.toString)for(var o in a)n.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},656:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(657);function r(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},657:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},658:function(e,t,n){"use strict";function a(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r={};function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&r[t[0]]||("string"===typeof t[0]&&(r[t[0]]=new Date),a.apply(void 0,t))}function c(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return i("i18n.languages were undefined or empty",t.languages),!0;var a=t.languages[0],r=!!t.options&&t.options.fallbackLng,c=t.languages[t.languages.length-1];if("cimode"===a.toLowerCase())return!0;var o=function(e,n){var a=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===a||2===a};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!o(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(a,e)||(!t.services.backendConnector.backend||!(!o(a,e)||r&&!o(c,e))))}},659:function(e,t,n){var a=n(660),r=n(661),i=n(662),c=n(664);e.exports=function(e,t){return a(e)||r(e,t)||i(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},660:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},661:function(e,t){e.exports=function(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var a,r,i=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);c=!0);}catch(s){o=!0,r=s}finally{try{c||null==n.return||n.return()}finally{if(o)throw r}}return i}},e.exports.default=e.exports,e.exports.__esModule=!0},662:function(e,t,n){var a=n(663);e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},663:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a},e.exports.default=e.exports,e.exports.__esModule=!0},664:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},679:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(659),r=n.n(a),i=n(158),c=n.n(i),o=n(1),s=n(157),l=n(658);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,a=Object(o.useContext)(s.a)||{},i=a.i18n,c=a.defaultNS,u=n||i||Object(s.d)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new s.b),!u){Object(l.d)("You will need to pass in an i18next instance by using initReactI18next");var m=function(e){return Array.isArray(e)?e[e.length-1]:e},j=[m,{},!1];return j.t=m,j.i18n={},j.ready=!1,j}u.options.react&&void 0!==u.options.react.wait&&Object(l.d)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=d(d(d({},Object(s.c)()),u.options.react),t),p=b.useSuspense,f=e||c||u.options&&u.options.defaultNS;f="string"===typeof f?[f]:f||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(f);var g=(u.isInitialized||u.initializedStoreOnce)&&f.every((function(e){return Object(l.a)(e,u,b)}));function O(){return u.getFixedT(null,"fallback"===b.nsMode?f:f[0])}var h=Object(o.useState)(O),x=r()(h,2),v=x[0],y=x[1],w=Object(o.useRef)(!0);Object(o.useEffect)((function(){var e=b.bindI18n,t=b.bindI18nStore;function n(){w.current&&y(O)}return w.current=!0,g||p||Object(l.b)(u,f,(function(){w.current&&y(O)})),e&&u&&u.on(e,n),t&&u&&u.store.on(t,n),function(){w.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,n)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,n)}))}}),[u,f.join()]);var N=Object(o.useRef)(!0);Object(o.useEffect)((function(){w.current&&!N.current&&y(O),N.current=!1}),[u]);var C=[v,u,g];if(C.t=v,C.i18n=u,C.ready=g,g)return C;if(!g&&!p)return C;throw new Promise((function(e){Object(l.b)(u,f,(function(){e()}))}))}}}]);
//# sourceMappingURL=17.00e722b4.chunk.js.map