(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/9aa":function(t,e,n){var i=n("NykK"),r=n("ExA7"),o="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||r(t)&&i(t)==o}},"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"/eQG":function(t,e,n){n("v5Dd");var i=n("WEpk").Object;t.exports=function(t,e){return i.getOwnPropertyDescriptor(t,e)}},"23aj":function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),r=n.n(i),o=n("hdxh"),a=n.n(o),c=n("hfKm"),u=n.n(c),l=n("2Eek"),s=n.n(l),f=n("XoMD"),d=n.n(f),m=n("Jo+v"),p=n.n(m),v=n("4mXO"),h=n.n(v),b=n("pLtp"),g=n.n(b);function y(t,e,n){return e in t?u()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E=n("it8P"),w=n.n(E),x=n("p0XB"),C=n.n(x);var N=n("XXOK"),T=n.n(N),j=n("yLu3"),O=n.n(j);function P(t,e){return function(t){if(C()(t))return t}(t)||function(t,e){if(O()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],i=!0,r=!1,o=void 0;try{for(var a,c=T()(t);!(i=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(u){r=!0,o=u}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=n("Qetd"),D=n.n(I),S=r.a.createElement;function k(t,e){var n=g()(t);if(h.a){var i=h()(t);e&&(i=i.filter((function(e){return p()(t,e).enumerable}))),n.push.apply(n,i)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){y(t,e,n[e])})):d.a?s()(t,d()(n)):k(Object(n)).forEach((function(e){u()(t,e,p()(n,e))}))}return t}var M,W={currentTab:{currentTab:0},scale:{scale:1},test:{count:0}},R=(M={currentTab:function(t,e){return"setCurrentTab"===e.type?A({},t,{currentTab:e.value}):t},test:function(t,e){return"increment"===e.type?A({},t,{count:t.count+e.value}):t},scale:function(t,e){return"setScale"===e.type?A({},t,{scale:e.value}):t}},function(t,e){return g()(M).map((function(n){return y({},n,M[n](t[n],e))})).reduce((function(t,e){return D()({},t,e)}))});var X=function(){var t=r.a.createContext(null);return{CurrentTabProvider:function(e){var n=P(r.a.useReducer(R,W),2),i=n[0],o=n[1],a={setCurrentTab:function(t){o({type:"setCurrentTab",value:t})},setScale:function(t){o({type:"setScale",value:t})}};return S(t.Provider,{value:{state:i,actions:a}},e.children)},useCurrentTab:function(){var e=r.a.useContext(t);if(!e)throw new Error("Component must be wrapped with <CurrentTabProvider>");return e}}}(),z=X.CurrentTabProvider,G=X.useCurrentTab,L=function(t,e){var n=Object(i.useState)(!1),r=n[0],o=n[1],a=Object(i.useState)(!1),c=a[0],u=a[1];return Object(i.useEffect)((function(){r||o(!0)}),[]),Object(i.useEffect)((function(){if(r)return t(),u(!0),e?function(){return e()}:function(){return null}}),[r]),{firstLoaded:r,IsDone:c,setIsDone:u}},U=n("DzJC"),F=n.n(U),K=[],B=function(t){return L((function(){window.onresize=F()((function(e){e.target.innerWidth<768?t&&t():K.forEach((function(t){t()}))}),800,{trailing:!0})})),{addCallback:function(t){K.push(t)}}},Q=i.createElement;function q(t,e){var n=g()(t);if(h.a){var i=h()(t);e&&(i=i.filter((function(e){return p()(t,e).enumerable}))),n.push.apply(n,i)}return n}var Z=[{key:"aboutMe",label:"About Me"},{key:"projects",label:"Projects"}],H=function(t){var e,n=G(),r=n.state,o=r.currentTab.currentTab,a=r.scale.scale,c=n.actions.setCurrentTab,l=Object(i.useState)(0),f=l[0],m=l[1],v=Object(i.useRef)(null),h=Z.map((function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(Object(n),!0).forEach((function(e){y(t,e,n[e])})):d.a?s()(t,d()(n)):q(Object(n)).forEach((function(e){u()(t,e,p()(n,e))}))}return t}({},t,{ref:i.useRef()})})),b=B().addCallback,g=L((function(){v.current=document.getElementsByTagName("body")[0].offsetWidth,E(h[o])(),b((function(){v.current=document.getElementsByTagName("body")[0].offsetWidth,E(h[o])()}))})).IsDone,E=Object(i.useCallback)((function(t){return function(){if(g){var e=h.findIndex((function(e){return e.key===t.key}));if(~e){var n=(v.current-1600*a)/2,i=t.ref.current.offsetLeft,r=t.ref.current.offsetWidth;m((i+r/2-n-8)/a),c(e)}}}}),[v,g,a]);return Object(i.useEffect)((function(){g&&E(h[o])()}),[o,a,g]),Q("div",{style:null!==(e=t.bodyStyle)&&void 0!==e?e:{}},Q("div",{className:w.a["layout-menu-container"]},h.map((function(t){return Q("span",{key:t.key,ref:t.ref,className:w.a["layout-menu-item"],onClick:E(t)},t.label)}))),Q("div",{className:w.a["layout-slider"]},Q("span",{className:w.a["layout-slider-dot"],style:{transform:"translate(".concat(f,"rem, -8rem)")}}),Q("div",{className:w.a["layout-slider-line"]})))},J=n("h9FQ"),Y=n.n(J),_=i.createElement,V=function(){return _("div",{className:Y.a["banner-container"]},_("div",{className:Y.a.title},_("img",{src:"/static/images/profile.jpg",alt:"my picture",className:Y.a.picture}),_("div",{className:Y.a.name},_("div",{className:Y.a.welcome},"Welcome! I'm"),_("div",{className:Y.a["actual-name"]},_("span",{className:Y.a["chinese-name"]},"LING, XI"),_("span",{className:Y.a["english-name"]}," /Lim")),_("div",{className:Y.a["who-am-i"]},"Designer with Love, Passion and Creativity"))),_("div",{className:Y.a.metaphor},"\u201cGood design is honest.\u201d"))},$=n("ijYc"),tt=n.n($),et=n("x2e4"),nt=n.n(et),it=r.a.createElement,rt=function(t){return it("div",{className:nt.a["info-container"]},t.informations.map((function(e){return it("div",{key:e,className:nt.a.info,style:{textAlign:t.align}},e)})))},ot=i.createElement,at=["+86 15801795037","ccceline.xiii@gmail.com"],ct=["College of Design and Innovation, Tongji University","No.1239 Siping Rd, Shanghai, China, 200092"],ut=function(){return ot("div",{className:tt.a["contact-container"]},ot(rt,{informations:at,align:"left"}),ot(rt,{informations:ct,align:"right"}))},lt=n("HRx6"),st=n.n(lt),ft=n("+xx2"),dt=n.n(ft),mt=n("Q6TT"),pt=n.n(mt),vt=r.a.createElement,ht=function(t){return vt("div",{className:pt.a["info-container"]},t.informations.map((function(e){return vt("div",{key:e,className:pt.a.info,style:{textAlign:t.align}},e)})))},bt=n("cIVd"),gt=n.n(bt),yt=r.a.createElement,Et=function(t){return yt("div",{className:gt.a["info-container"]},t.informations.map((function(t){return yt("div",{className:gt.a.info,key:t},t)})))},wt=r.a.createElement,xt=function(t){var e=t.info;return wt("div",{className:dt.a["info-container"]},wt(rt,{informations:e.title,align:"left"}),e.subtitle&&wt(ht,{informations:e.subtitle,align:"left"}),e.desc&&wt(Et,{informations:e.desc}))},Ct=i.createElement,Nt=function(t){var e=t.info,n=t.title,i=t.bottomGap;return Ct("div",{className:st.a.main},n&&Ct("div",{className:st.a["pharse-title"]},n),Ct("div",{className:st.a["pharse-main-body"]},e.map((function(t){return Ct("div",{key:t.title[0],className:st.a["pharse-container"],style:{marginBottom:null!==i&&void 0!==i?i:"58rem"}},Ct(xt,{info:t}),Ct(rt,{informations:t.time,align:"right"}))}))))},Tt=i.createElement,jt=[{title:"EDUCATION",info:[{title:["Industrial Design, College of Design and Innovation, Tongji University","Candidate for Bachelor of Engineering | Cumulative GPA: 4.46"],time:["09.2015 - 06.2020"]}]},{title:"DESIGN INTERNSHIP EXPERIENCE",info:[{title:["Capgemini"],subtitle:["UX/UI Design Intern"],desc:["Co-created with clients to identify the opportunity and develop the service through design strategy","Collaborated with front-end engineers to improve user interface of digital products"],time:["11.2019 - Present"]},{title:["Volvo Car Asia Pacific"],subtitle:["Design Color & Material Intern"],desc:["Completed benchmark and trend research on car exterior and interior color & material","Created pattern and color propasals for interior deco and leather monthly"],time:["02.2019 - 07.2019"]},{title:["Neuni Group, Shanghai"],subtitle:["Creative and Visual Design Intern"],desc:["Proposed creative plans for products and installations adopting new materials","Led visual design for local exhibitions"],time:["05.2018 - 08.2018"]}]},{title:"RESEARCH EXPERIENCE",info:[{title:["\u201cNext Mobility\u201d Laboratory, College of Design and Innovation, Tongji University"],subtitle:["Researcher"],desc:["Composed paper on \u201cIndustrial Design Knowledge for Additive Manufacturing\u201d","Composed paper on \u201cStudy on the Pedestrian Signage System in International Megacities\u201d"],time:["08.2018 - 12.2018"]}]},{title:"COMPETITION EXPERIENCE",info:[{title:["Closing the Loop on Food Packaging | ExxonMobil Challenge Reality Hackathon"],subtitle:["Gold Prize"],time:["2019"]},{title:["EMO Robot Product Design | Shanghai Industry Design Competition"],subtitle:["First Prize"],time:["2018"]},{title:["Bamboo Stool Design | The Second \u2018Think Youth\u2019 Shanghai Design Competition "],subtitle:["Second Prize"],time:["2017"]},{title:["Unmanned Aerial Vehicle Design | Honeywell Internal Competition"],subtitle:["Third Prize"],time:["2017"]},{title:["15% Academic Achievement Scholarship | College of Design and Innovation"],time:["2017"]}],bottomGap:"42rem"},{title:"MANAGEMENT EXPERIENCE",info:[{title:["The First China Industry Design Exhibition, Wuhan, China"],subtitle:["Exhibition Designer for Tongji University\u2019s field"],desc:["Planned exhibition design, including showing forms and lighting design","Arranged exhibits\u2019 collection and logistics from Shanghai to Wuhan"],time:["11.2017"]},{title:["Tongji Design Week"],subtitle:["Best Performance Core Volunteer"],desc:["Communicated with 10 designers and artists to align exhibition plans","Coordinated with other volunteers to meet requests on space and activities "],time:["10.2016 & 2017"]},{title:["Tongji University Student Union"],subtitle:["Deputy Minister of Human Resources Department"],desc:["Ran department to operate 12 events for more than 400 student union members","Met with administrators to address development of internal regulations weekly"],time:["09.2015 - 08.2016"]}]}],Ot=function(){return Tt("div",{style:{width:"1600rem"}},Tt(V,null),Tt(ut,null),jt.map((function(t){return Tt(Nt,{info:t.info,title:t.title,key:t.title})})))},Pt=n("d+70"),It=n.n(Pt),Dt=r.a.createElement,St=function(t){return Dt("div",{className:It.a.main},Dt("h1",null,"Under Construction"))},kt=r.a.createElement,At=function(t){var e=G().state.currentTab.currentTab;return kt("div",{style:{width:"1600rem",overflowX:"hidden"}},kt("div",{style:{width:"3200rem",display:"flex",transform:"translateX(-".concat(1600*e,"rem)"),transition:"0.6s ease-in-out"}},t.children))},Mt=i.createElement,Wt=function(){var t=G(),e=t.state.scale.scale,n=t.actions.setScale,r=function(){n(1);var t=Math.min(document.body.clientWidth/1920,1),e=document.querySelector('meta[name="viewport"]');e?e.setAttribute("content","width=device-width, initial-scale="+t+", maximum-scale="+t+", minimum-scale="+t+", user-scalable=no"):((e=document.createElement("meta")).setAttribute("name","viewport"),e.setAttribute("content","width=device-width, initial-scale="+t+", maximum-scale="+t+", minimum-scale="+t+", user-scalable=no"),document.documentElement.firstElementChild.appendChild(e)),window.scrollTo({top:0})},o=L((function(){if(window.innerWidth>=700){var t=Math.min(document.body.clientWidth/1920,1);n(t)}else r();c((function(){var t=Math.min(document.body.clientWidth/1920,1);document.getElementsByTagName("html")[0].style.fontSize="".concat(t,"px"),window.scrollTo({top:0}),n(t)}))})).IsDone;Object(i.useEffect)((function(){document.getElementsByTagName("html")[0].style.fontSize="".concat(e,"px"),window.scrollTo({top:0})}),[e]);var c=B(r).addCallback;return o?Mt("div",{className:a.a.layout},Mt(H,null),Mt(At,null,Mt(i.Fragment,null,Mt(Ot,null),Mt(St,null))),Mt(H,{bodyStyle:{marginTop:"138rem"}})):null};e.default=function(){return Mt(z,null,Mt(Wt,null))}},"2Eek":function(t,e,n){t.exports=n("W7oM")},"4mXO":function(t,e,n){t.exports=n("7TPF")},"7TPF":function(t,e,n){n("AUvm"),t.exports=n("WEpk").Object.getOwnPropertySymbols},"7m0m":function(t,e,n){var i=n("Y7ZC"),r=n("uplh"),o=n("NsO/"),a=n("vwuL"),c=n("IP1Z");i(i.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,i=o(t),u=a.f,l=r(i),s={},f=0;l.length>f;)void 0!==(n=u(i,e=l[f++]))&&c(s,e,n);return s}})},AP2z:function(t,e,n){var i=n("nmnc"),r=Object.prototype,o=r.hasOwnProperty,a=r.toString,c=i?i.toStringTag:void 0;t.exports=function(t){var e=o.call(t,c),n=t[c];try{t[c]=void 0;var i=!0}catch(u){}var r=a.call(t);return i&&(e?t[c]=n:delete t[c]),r}},DzJC:function(t,e,n){var i=n("sEfC"),r=n("GoyQ"),o="Expected a function";t.exports=function(t,e,n){var a=!0,c=!0;if("function"!=typeof t)throw new TypeError(o);return r(n)&&(a="leading"in n?!!n.leading:a,c="trailing"in n?!!n.trailing:c),i(t,e,{leading:a,maxWait:e,trailing:c})}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},IP1Z:function(t,e,n){"use strict";var i=n("2faE"),r=n("rr1i");t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}},"Jo+v":function(t,e,n){t.exports=n("/eQG")},KfNM:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},Kz5y:function(t,e,n){var i=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,o=i||r||Function("return this")();t.exports=o},Mqbl:function(t,e,n){var i=n("JB68"),r=n("w6GO");n("zn7N")("keys",(function(){return function(t){return r(i(t))}}))},NykK:function(t,e,n){var i=n("nmnc"),r=n("AP2z"),o=n("KfNM"),a="[object Null]",c="[object Undefined]",u=i?i.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?c:a:u&&u in Object(t)?r(t):o(t)}},QIyF:function(t,e,n){var i=n("Kz5y");t.exports=function(){return i.Date.now()}},Rp86:function(t,e,n){n("bBy9"),n("FlQf"),t.exports=n("fXsU")},W7oM:function(t,e,n){n("nZgG");var i=n("WEpk").Object;t.exports=function(t,e){return i.defineProperties(t,e)}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},XXOK:function(t,e,n){t.exports=n("Rp86")},XoMD:function(t,e,n){t.exports=n("hYAz")},fXsU:function(t,e,n){var i=n("5K7Z"),r=n("fNZA");t.exports=n("WEpk").getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},hYAz:function(t,e,n){n("7m0m"),t.exports=n("WEpk").Object.getOwnPropertyDescriptors},iq4v:function(t,e,n){n("Mqbl"),t.exports=n("WEpk").Object.keys},nZgG:function(t,e,n){var i=n("Y7ZC");i(i.S+i.F*!n("jmDH"),"Object",{defineProperties:n("fpC5")})},nmnc:function(t,e,n){var i=n("Kz5y").Symbol;t.exports=i},pLtp:function(t,e,n){t.exports=n("iq4v")},sEfC:function(t,e,n){var i=n("GoyQ"),r=n("QIyF"),o=n("tLB3"),a="Expected a function",c=Math.max,u=Math.min;t.exports=function(t,e,n){var l,s,f,d,m,p,v=0,h=!1,b=!1,g=!0;if("function"!=typeof t)throw new TypeError(a);function y(e){var n=l,i=s;return l=s=void 0,v=e,d=t.apply(i,n)}function E(t){var n=t-p;return void 0===p||n>=e||n<0||b&&t-v>=f}function w(){var t=r();if(E(t))return x(t);m=setTimeout(w,function(t){var n=e-(t-p);return b?u(n,f-(t-v)):n}(t))}function x(t){return m=void 0,g&&l?y(t):(l=s=void 0,d)}function C(){var t=r(),n=E(t);if(l=arguments,s=this,p=t,n){if(void 0===m)return function(t){return v=t,m=setTimeout(w,e),h?y(t):d}(p);if(b)return clearTimeout(m),m=setTimeout(w,e),y(p)}return void 0===m&&(m=setTimeout(w,e)),d}return e=o(e)||0,i(n)&&(h=!!n.leading,f=(b="maxWait"in n)?c(o(n.maxWait)||0,e):f,g="trailing"in n?!!n.trailing:g),C.cancel=function(){void 0!==m&&clearTimeout(m),v=0,l=p=s=m=void 0},C.flush=function(){return void 0===m?d:x(r())},C}},tLB3:function(t,e,n){var i=n("GoyQ"),r=n("/9aa"),o=NaN,a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return o;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=u.test(t);return n||l.test(t)?s(t.slice(2),n?2:8):c.test(t)?o:+t}},uplh:function(t,e,n){var i=n("ar/p"),r=n("mqlF"),o=n("5K7Z"),a=n("5T2Y").Reflect;t.exports=a&&a.ownKeys||function(t){var e=i.f(o(t)),n=r.f;return n?e.concat(n(t)):e}},v5Dd:function(t,e,n){var i=n("NsO/"),r=n("vwuL").f;n("zn7N")("getOwnPropertyDescriptor",(function(){return function(t,e){return r(i(t),e)}}))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n}},[["/EDR",0,2,1,10]]]);