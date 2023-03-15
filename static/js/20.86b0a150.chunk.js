/*! For license information please see 20.86b0a150.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20,38],{653:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&e.push(o)}}else if("object"===c)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},667:function(e,t,r){"use strict";var n=r(671);t.a=n.a},671:function(e,t,r){"use strict";(function(e){var n=r(1),i=r.n(n),c=(r(14),r(653)),o=r.n(c);r(694);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var a={},u=function(t,r){!a[r]&&e&&Object({NODE_ENV:"production",PUBLIC_URL:"/react-gh-pages",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),0},l=function(e){var t=e.className,r=e.name,c=e.content,a=e.customClasses,l=e.size,f=e.src,h=e.title,m=e.use,p=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["className","name","content","customClasses","size","src","title","use"]),d=Object(n.useState)(0),g=d[0],v=d[1];Object(n.useMemo)((function(){return v(g+1)}),[r,JSON.stringify[c]]);var j=Object(n.useMemo)((function(){return r&&r.includes("-")?r.replace(/([-_][a-z0-9])/gi,(function(e){return e.toUpperCase()})).replace(/-/gi,""):r}),[g]),y=h?"<title>"+h+"</title>":"",O=Object(n.useMemo)((function(){return c||(r&&i.a.icons?i.a.icons[j]?i.a.icons[j]:u(0,j):void 0)}),[g]),b=Object(n.useMemo)((function(){return Array.isArray(O)?O[1]||O[0]:O}),[g]),w=Array.isArray(O)&&O.length>1?O[0]:"64 64",x=p.viewBox||"0 0 "+w,T=function(){var e=!l&&(p.width||p.height);return"custom"===l||e?"custom-size":l}(),E=o()("c-icon",T&&"c-icon-"+T,t),S=a||E;return i.a.createElement(i.a.Fragment,null,!f&&!m&&i.a.createElement("svg",s({},p,{xmlns:"http://www.w3.org/2000/svg",viewBox:x,className:S,role:"img",dangerouslySetInnerHTML:{__html:y+b}})),f&&!m&&i.a.createElement("img",s({},p,{className:t,src:f,role:"img"})),!f&&m&&i.a.createElement("svg",s({},p,{xmlns:"http://www.w3.org/2000/svg",className:S,role:"img"}),i.a.createElement("use",{href:m})))};l.propTypes={},t.a=l}).call(this,r(693))},693:function(e,t){var r,n,i=e.exports={};function c(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===c||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:c}catch(e){r=c}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var a,u=[],l=!1,f=-1;function h(){l&&a&&(l=!1,a.length?u=a.concat(u):f=-1,u.length&&m())}function m(){if(!l){var e=s(h);l=!0;for(var t=u.length;t;){for(a=u,u=[];++f<t;)a&&a[f].run();f=-1,t=u.length}a=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function d(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||l||s(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},694:function(e,t,r){},909:function(e,t,r){"use strict";r.r(t);r(1);var n=r(648),i=r(667),c=r(6);t.default=function(){return Object(c.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:Object(c.jsx)(n.q,{children:Object(c.jsx)(n.X,{className:"justify-content-center",children:Object(c.jsxs)(n.p,{md:"6",children:[Object(c.jsxs)("div",{className:"clearfix",children:[Object(c.jsx)("h1",{className:"float-start display-3 me-4",children:"404"}),Object(c.jsxs)("h4",{className:"pt-3",children:["Oops! You","'","re lost."]}),Object(c.jsx)("p",{className:"text-medium-emphasis float-start",children:"The page you are looking for was not found."})]}),Object(c.jsxs)(n.J,{className:"input-prepend",children:[Object(c.jsx)(n.K,{children:Object(c.jsx)(i.a,{name:"cil-magnifying-glass"})}),Object(c.jsx)(n.B,{size:"16",type:"text",placeholder:"What are you looking for?"}),Object(c.jsx)(n.j,{color:"info",children:"Search"})]})]})})})})}}}]);
//# sourceMappingURL=20.86b0a150.chunk.js.map