(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{1087:function(e,t,s){"use strict";s.r(t);var a=s(26),c=s.n(a),n=s(46),r=s(18),i=s(159),o=s(160),u=s(162),l=s(161),d=s(1),p=s.n(d),b=s(94),f=s(154),j=s(648),h=s(679),m=s(669),O=s(654),x=s(5),v=s(685),y=s(6),M=p.a.lazy((function(){return s.e(30).then(s.bind(null,1085))})),g=p.a.lazy((function(){return s.e(31).then(s.bind(null,825))})),q=p.a.lazy((function(){return Promise.all([s.e(2),s.e(7)]).then(s.bind(null,1071))})),S=p.a.lazy((function(){return s.e(33).then(s.bind(null,826))})),R=function(e){var t=e.specificModeData,s=e.setSpecificModeData,a=e.pageMode,c=e.setPageMode,n=e.createdRequests,i=e.activeRequests,o=e.closedRequests,u=e.isLoading,l=e.userType,d=Object(f.a)(e,["specificModeData","setSpecificModeData","pageMode","setPageMode","createdRequests","activeRequests","closedRequests","isLoading","userType"]),p=Object(h.a)().t,b="default"===a,R="calculator"===a,D="specific"===a,w="create"===a,k={specific:function(){return Object(y.jsx)(S,Object(r.a)({userType:l,setPageMode:c,specificModeData:t},d))},calculator:function(){return Object(y.jsx)(g,{})},create:function(){return Object(y.jsx)(q,{setPageMode:c})},default:function(){return Object(y.jsx)(M,Object(r.a)({userType:l,activeRequests:i,closedRequests:o,specificModeData:t,setSpecificModeData:s,createdRequests:n,setPageMode:c},d))}};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(v.a,{}),Object(y.jsx)(m.a,{title:p("requests.".concat(a,".title")),withPrimaryButton:l===x.c.BUSINESS&&b,withSecondaryButton:l===x.c.BUSINESS&&b,primaryButtonLabel:p("requests.primaryButtonLabel"),secondaryButtonLabel:p("requests.secondaryButtonLabel"),onPrimaryButtonClick:function(){return c("create")},onSecondaryButtonClick:function(){return c("calculator")}}),Object(y.jsxs)(j.h,{style:{"--cui-breadcrumb-divider":"'-'"},children:[!b&&Object(y.jsx)(j.i,{onClick:function(){return c("default")},children:p("requests.BANK_ADMIN.bankRequests.breadcrumb.1")}),D&&Object(y.jsx)(j.i,{active:D,children:p("requests.BANK_ADMIN.bankRequests.breadcrumb.2")}),w&&Object(y.jsx)(j.i,{active:w,children:p("requests.BANK_ADMIN.bankRequests.breadcrumb.3")}),R&&Object(y.jsx)(j.i,{active:R,children:p("requests.BANK_ADMIN.bankRequests.breadcrumb.4")})]}),u?Object(y.jsx)(O.a,{classes:"mt-5"}):k[a]()]})},D=s(165),w=s(156),k=function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).setTab=function(e){a.setState(Object(r.a)(Object(r.a)({},a.state),{},{tab:e}))},a.getRequests=Object(n.a)(c.a.mark((function e(){var t,s,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a.setState(Object(r.a)(Object(r.a)({},a.state),{},{isLoading:!0})),a.props.userType!==x.c.BUSINESS&&"BUSINESS_LINKED"!==a.props.userType){e.next=14;break}return e.next=5,Object(D.h)("CREATED");case 5:return t=e.sent,e.next=8,Object(D.h)("ACTIVE");case 8:return s=e.sent,e.next=11,Object(D.h)("CLOSED");case 11:n=e.sent,e.next=23;break;case 14:return e.next=16,Object(D.d)();case 16:return t=e.sent,e.next=19,Object(D.f)("ACTIVE");case 19:return s=e.sent,e.next=22,Object(D.f)("CLOSED");case 22:n=e.sent;case 23:t.message||s.message||n.message||a.setState(Object(r.a)(Object(r.a)({},a.state),{},{createdRequests:t,activeRequests:s,closedRequests:n})),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(0),console.log(e.t0);case 29:return e.prev=29,a.setState(Object(r.a)(Object(r.a)({},a.state),{},{isLoading:!1})),e.finish(29);case 32:case"end":return e.stop()}}),e,null,[[0,26,29,32]])}))),a.setPageMode=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;a.props.history.push("/requests?mode=".concat(e)),setTimeout((function(){return a.setState(Object(r.a)(Object(r.a)({},a.state),{},{pageMode:e,tab:t}))}),0)},a.setSpecificModeData=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!a.state.createdRequests.filter((function(t){return t.id===e})).length)return a.state.activeRequests.filter((function(t){return t.id===e}))?(a.props.history.push("/requests?mode=specific"),void a.setState((function(){return Object(r.a)(Object(r.a)({},a.state),{},{pageMode:"specific",specificModeData:a.state.activeRequests.filter((function(t){return t.id===e}))[0]})}))):void 0;t?a.setState((function(){return Object(r.a)(Object(r.a)({},a.state),{},{specificModeData:a.state.createdRequests.filter((function(t){return t.id===e}))[0]})})):(a.props.history.push("/requests?mode=specific"),a.setState((function(){return Object(r.a)(Object(r.a)({},a.state),{},{pageMode:"specific",specificModeData:a.state.createdRequests.filter((function(t){return t.id===e}))[0]})})))},a.state={isLoading:!1,createdRequests:[],activeRequests:[],closedRequests:[],specificModeData:{},pageMode:"default",tab:void 0},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=Object(n.a)(c.a.mark((function e(){var t,s,a,n,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams(this.props.location.search).get("mode")||(null===(t=this.props.location)||void 0===t||null===(s=t.query)||void 0===s?void 0:s.mode),i=null===(a=this.props.location)||void 0===a||null===(n=a.query)||void 0===n?void 0:n.tab,this.setTab(i),r&&("specific"===r&&this.setPageMode("default"),"specific"!==r&&this.setPageMode(r,i)),e.next=6,this.getRequests();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(n.a)(c.a.mark((function e(t,s,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new URLSearchParams(this.props.location.search).get("mode"),r=new URLSearchParams(t.location.search).get("mode"),n&&r&&r!==n&&this.setPageMode(n),s.pageMode===this.state.pageMode||"default"!==this.state.pageMode){e.next=6;break}return e.next=6,this.getRequests();case 6:case"end":return e.stop()}}),e,this)})));return function(t,s,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.userType,t=this.state,s=t.createdRequests,a=t.closedRequests,c=t.activeRequests,n=t.pageMode,i=t.isLoading,o=t.specificModeData,u=Object(r.a)({userType:e,specificModeData:o,setSpecificModeData:this.setSpecificModeData,isLoading:i,createdRequests:s,activeRequests:c,closedRequests:a,pageMode:n,tab:this.state.tab,setTab:this.setTab,setPageMode:this.setPageMode},this.props);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(w.a,{children:Object(y.jsx)("title",{children:"\u0417\u0430\u044f\u0432\u043a\u0438 | Deposit Platform"})}),Object(y.jsx)(R,Object(r.a)({},u))]})}}]),s}(d.Component),N=Object(b.b)((function(e){return{userType:e.user.type}}),null)(k);t.default=N},654:function(e,t,s){"use strict";s(1);var a=s(6),c=function(e){var t=e.classes;return Object(a.jsxs)("div",{className:"".concat(t||""," d-flex justify-content-center intermittent spinner-border text-primary mx-auto"),style:{width:"5em",height:"5em"},role:"status",children:[" ",Object(a.jsx)("span",{className:"sr-only"})]})};t.a=c},669:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));s(1);var a=s(648),c=s(653),n=s.n(c),r=s(6),i=function(e){var t=e.title,s=e.withPrimaryButton,c=e.withSecondaryButton,i=e.primaryButtonLabel,o=e.secondaryButtonLabel,u=e.onPrimaryButtonClick,l=e.onSecondaryButtonClick;return Object(r.jsxs)(a.p,{xl:12,className:"mb-3 d-flex flex-column flex-md-row justify-content-between",children:[Object(r.jsx)("h2",{children:t}),Object(r.jsxs)(a.p,{className:"d-flex flex-wrap flex-md-nowrap justify-content-md-end",xs:12,md:6,children:[c&&Object(r.jsx)(a.j,{onClick:l,size:"sm",className:n()("mb-3 mb-md-0 col-12 col-md-6 py-2",{"me-0 me-md-3":s}),color:"primary",variant:"outline",children:o}),s&&Object(r.jsx)(a.j,{onClick:u,size:"sm",className:"text-white col-12 col-md-6 py-2",color:"primary",children:i})]})]})}},685:function(e,t,s){"use strict";var a=s(648),c=s(94),n=s(72),r=s(679),i=s(6),o=Object(c.b)((function(e){return{isApprovalModalShown:e.isApprovalModalShown}}),(function(e){return{setVisible:function(t){return e(Object(n.e)(t))}}}))((function(e){var t=e.isApprovalModalShown,s=e.setVisible,c=Object(r.a)().t;return Object(i.jsx)(a.O,{alignment:"center",visible:t,onDismiss:function(){return s(!1)},children:Object(i.jsxs)(a.Q,{className:"pb-4 px-3",children:[Object(i.jsx)(a.S,{onDismiss:function(){return s(!1)},children:Object(i.jsx)(a.T,{className:"mt-3",component:"h2",children:c("approvalModal.title")})}),Object(i.jsx)(a.P,{className:"mb-7",children:c("approvalModal.text")}),Object(i.jsxs)(a.R,{className:"d-flex justify-content-start",children:[Object(i.jsx)(a.j,{onClick:function(){s(!1),window.open("/profile","_self")},className:"text-white py-2",size:"sm",color:"primary",children:c("approvalModal.primaryButton")}),Object(i.jsx)(a.j,{onClick:function(){return s(!1)},className:"py-2",size:"sm",color:"primary",variant:"outline",children:c("cancel")})]})]})})}));t.a=o}}]);
//# sourceMappingURL=24.bd798759.chunk.js.map