(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[33],{826:function(e,t,s){"use strict";s.r(t);var c=s(18),a=s(26),r=s.n(a),n=s(46),l=s(651),i=s(154),d=s(1),m=s(679),j=s(648),b=s(655),o=s(653),u=s.n(o),x=s(654),h=s(6),p=function(e){var t=e.userType,s=e.isLoading,c=e.visible,a=e.toaster,r=e.toast,n=e.setVisible,l=e.onClickHandler,i=e.suggestions,d=e.handleCloseRequest,o=e.specificModeData,p=e.handleApplyOffer,O=(e.bankName,e.bankSuggestions.order),N=Object(m.a)().t,f=o.id,g=o.amount,y=o.percentage,v=o.currency,A=o.days,k=o.type,q=o.status,w=o.revenue;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(j.X,{className:"align-items-stretch bg-primary rounded-3 m-0 py-4 px-2 text-white justify-content-between",children:[Object(h.jsxs)(j.p,{xs:6,xl:2,children:[Object(h.jsx)("small",{className:"text-white",children:N("requests.create.form.amount")}),Object(h.jsx)("h6",{className:"m-0",children:"".concat(g," ").concat(v)})]}),Object(h.jsxs)(j.p,{className:" mb-3 mb-md-0 text-end text-md-start",xs:6,xl:2,children:[Object(h.jsx)("small",{className:"text-white",children:N("requests.create.form.percentage")}),Object(h.jsx)("h6",{className:"d-block",children:"".concat(y," %")})]}),Object(h.jsxs)(j.p,{xs:6,xl:2,children:[Object(h.jsx)("small",{className:"text-white",children:N("requests.create.form.days")}),Object(h.jsx)("h6",{className:"d-block",children:N("requests.days.".concat(A))})]}),Object(h.jsxs)(j.p,{className:"mb-3 mb-md-0 text-end text-md-start",xs:6,xl:2,children:[Object(h.jsx)("small",{className:"text-white",children:N("requests.create.form.type")}),Object(h.jsx)("h6",{className:"d-block",children:N("requests.".concat(k))})]}),"BANK_ADMIN"!==t&&"CREATED"!==q&&Object(h.jsxs)(j.p,{xl:2,xs:6,className:"text-end text-md-start",children:[Object(h.jsx)("small",{className:"text-white",children:N("requests.create.form.revenue")}),Object(h.jsxs)("h6",{className:"d-block",children:[w," ",v]})]}),"BANK_ADMIN"!==t&&"CREATED"===q&&Object(h.jsx)(j.p,{xs:6,xl:2,className:"d-flex align-self-center justify-content-end",children:"BANK_ADMIN"!==t&&"CREATED"===q&&Object(h.jsx)(j.L,{role:"button","data-id":f,onClick:l,className:"text-white d-flex align-self-center justify-content-end fw-bold p-0",children:N("requests.singleRequests.button")})})]}),Object(h.jsx)("h4",{className:"mt-5",children:N("BANK_ADMIN"===t?"requests.BANK_ADMIN.title":"ACTIVE"===q?"requests.BUSINESS_ADMIN.title.activeRequests":"requests.BUSINESS_ADMIN.title")}),"BANK_ADMIN"!==t&&!i.length&&!s&&Object(h.jsx)("h6",{className:"text-center mt-5 mb-3",children:N("requests.BUSINESS_ADMIN.subtitle")}),"BANK_ADMIN"===t&&!O.id&&!s&&Object(h.jsx)("h6",{className:"text-center mt-5 mb-3",children:N("requests.BANK_ADMIN.subtitle")}),Object(h.jsxs)(j.M,{className:"employees mt-4",children:[s&&!O.id&&Object(h.jsx)(x.a,{}),"BANK_ADMIN"===t&&O.id&&!s&&Object(h.jsx)(j.N,{className:"employees py-4 px-2 px-md-2",children:Object(h.jsxs)(j.X,{className:"m-0 align-items-stretch justify-content-between",children:[Object(h.jsxs)(j.p,{className:"mb-3 mb-md-0",xs:6,xl:2,children:[Object(h.jsx)("small",{className:"text-muted",children:N("requests.create.form.amount")}),Object(h.jsx)("h6",{className:"m-0",children:"".concat(O.amount," ").concat(O.currency)})]}),Object(h.jsxs)(j.p,{className:"mb-3 mb-md-0 text-end text-md-start",xs:6,xl:2,children:[Object(h.jsx)("small",{className:"text-muted",children:N("requests.create.form.percentage")}),Object(h.jsx)("span",{className:"d-block",children:"".concat(O.percentage," %")})]}),Object(h.jsxs)(j.p,{className:"mb-3 mb-md-0",xs:6,xl:2,children:[Object(h.jsx)("small",{className:"text-muted",children:N("requests.create.form.days")}),Object(h.jsx)("span",{className:"d-block",children:N("requests.days.".concat(O.days))})]}),Object(h.jsxs)(j.p,{className:"mb-3 mb-md-0 text-end text-md-start",xs:6,xl:2,children:[Object(h.jsx)("small",{className:"text-muted",children:N("requests.create.form.type")}),Object(h.jsx)("span",{className:"d-block",children:N("requests.".concat(O.type))})]})]})}),"BANK_ADMIN"!==t&&!s&&i.map((function(e){var t=e.bankName,c=e.percentage,a=e.days,r=e.type,n=e.id,l=e.currency,i=e.revenue,d=e.orderId;return Object(h.jsx)(j.N,{className:"employees py-4 px-2",children:Object(h.jsxs)(j.X,{className:"m-0 d-flex justify-content-between align-items-stretch",children:[Object(h.jsxs)(j.p,{className:"mb-3 mb-md-0",xs:6,md:2,children:[Object(h.jsx)("small",{className:"text-muted",children:N("bankName")}),Object(h.jsx)("h6",{className:"m-0",children:t})]}),Object(h.jsxs)(j.p,{className:"mb-3 mb-md-0 text-end text-md-start",xs:6,md:2,children:[Object(h.jsx)("small",{className:"text-muted",children:N("requests.create.form.percentage")}),Object(h.jsx)("span",{className:"d-block",children:"".concat(c," %")})]}),Object(h.jsxs)(j.p,{className:"mb-3 mb-md-0",xs:6,md:2,children:[Object(h.jsx)("small",{className:"text-muted",children:N("requests.create.form.days")}),Object(h.jsx)("span",{className:"d-block",children:N("requests.days.".concat(a))})]}),Object(h.jsxs)(j.p,{className:"mb-3 mb-md-0 text-end text-md-start",xs:6,md:2,children:[Object(h.jsx)("small",{className:"text-muted",children:N("requests.create.form.type")}),Object(h.jsx)("span",{className:"d-block",children:N("requests.".concat(r))})]}),Object(h.jsxs)(j.p,{className:"mb-3 mb-md-0 text-md-start",xs:6,md:2,children:[Object(h.jsx)("small",{className:"text-muted",children:N("requests.create.form.revenue")}),Object(h.jsxs)("span",{className:"d-block",children:[" ",i," ",l]})]}),"CREATED"===q&&Object(h.jsx)(j.p,{className:"d-flex align-self-center",xs:6,md:2,children:s?Object(h.jsx)(b.a,{}):Object(h.jsx)(j.L,{disabled:s,onClick:function(){return p({orderId:d,id:n})},className:u()("pe-5",{"no-events":s}),role:"button",children:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})})]})},n)}))]}),Object(h.jsx)(j.O,{alignment:"center",visible:c,onDismiss:function(){return n(!1)},children:Object(h.jsxs)(j.Q,{className:"pb-4 px-3",children:[Object(h.jsx)(j.S,{onDismiss:function(){return n(!1)},children:Object(h.jsx)(j.T,{component:"h2",children:N("requests.specific.modal.title")})}),Object(h.jsx)(j.P,{className:"mb-2",children:N("requests.specific.modal.content")}),Object(h.jsxs)(j.R,{className:"justify-content-start",children:[Object(h.jsx)(j.j,{disabled:s,onClick:d,className:"text-white py-2",size:"sm",color:"primary",children:s?Object(h.jsx)(b.a,{classes:"text-white"}):N("yes")}),Object(h.jsx)(j.j,{onClick:function(){return n(!1)},className:"py-2",size:"sm",color:"primary",variant:"outline",children:N("no")})]})]})}),Object(h.jsx)(j.hb,{ref:a,push:r,placement:"top-end"})]})},O=s(120),N=function(e){var t=e.setPageMode,s=e.specificModeData,a=e.userType,b=Object(i.a)(e,["setPageMode","specificModeData","userType"]),o=Object(m.a)().t,u=Object(d.useState)(!1),x=Object(l.a)(u,2),N=x[0],f=x[1],g=Object(d.useState)(!1),y=Object(l.a)(g,2),v=y[0],A=y[1],k=Object(d.useState)([]),q=Object(l.a)(k,2),w=q[0],D=q[1],I=Object(d.useState)({order:{id:""}}),M=Object(l.a)(I,2),E=M[0],S=M[1];Object(d.useEffect)(Object(n.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,f(!0),"BANK_ADMIN"!==a){e.next=9;break}return e.next=5,Object(O.t)(s.id);case 5:t=e.sent,S(t),e.next=13;break;case 9:return e.next=11,Object(O.q)(s.id);case 11:c=e.sent,D(c);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),T((function(){return R()}));case 19:return e.prev=19,f(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[0,15,19,22]])}))),[null===s||void 0===s?void 0:s.id]);var C=Object(d.useState)(0),B=Object(l.a)(C,2),_=B[0],T=B[1],K=Object(d.useRef)(),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Object(h.jsxs)(j.eb,{title:t?o("defaultErrorTitle"):"\u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430 \u041f\u0440\u0438\u043d\u044f\u0442\u0430!",autohide:!0,children:[Object(h.jsxs)(j.gb,{close:!0,children:[Object(h.jsx)("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:Object(h.jsx)("rect",{width:"100%",height:"100%",fill:t?"#EB5757":"#6FCF97"})}),Object(h.jsx)("strong",{className:"me-auto",children:o(t?"defaultErrorTitle":"congratulations")})]}),Object(h.jsx)(j.fb,{children:e||o("default400Error")})]})},L=function(){var e=Object(n.a)(r.a.mark((function e(s){var c,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s.orderId,a=s.id,e.prev=1,f(!0),e.next=5,Object(O.b)({orderId:c,offerId:a});case 5:(n=e.sent).wasCreated&&(T((function(){return R("\u0414\u0430\u043d\u043d\u044b\u0435 \u0412\u0430\u0448\u0435\u0439 \u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u044b \u0432 \u0431\u0430\u043d\u043a \u0434\u043b\u044f \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0439 \u0440\u0430\u0431\u043e\u0442\u044b, \u0432\u0441\u043a\u043e\u0440\u0435 \u0441 \u0412\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442:)\n\n\n\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0432\u043a\u043b\u0430\u0434\u0435 \u0432\u044b \u043d\u0430\u0439\u0434\u0435\u0442\u0435 \u0432 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0437\u0430\u044f\u0432\u043a\u0430\u0445",!1)})),setTimeout((function(){t("default",2),f(!1)}),2e3)),n.message&&(T((function(){return R(n.message)})),f(!1)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),f(!1),T((function(){return R()}));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(n.a)(r.a.mark((function e(){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),e.next=4,Object(O.d)(s.id);case 4:(c=e.sent).message||"CLOSED"!==c.status||t("default"),c.message&&T((function(){return R(c.message)})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),f(!1),T((function(){return R()}));case 13:return e.prev=13,f(!1),A(!1),e.finish(13);case 17:case"end":return e.stop()}}),e,null,[[0,9,13,17]])})));return function(){return e.apply(this,arguments)}}(),P=Object(c.a)({onClickHandler:function(){A(!0)},userType:a,suggestions:w,bankSuggestions:E,visible:v,setVisible:A,toaster:K,toast:_,isLoading:N,specificModeData:s,handleApplyOffer:L,handleCloseRequest:F},b);return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(p,Object(c.a)({},P))})};t.default=N}}]);
//# sourceMappingURL=33.76c5acf1.chunk.js.map