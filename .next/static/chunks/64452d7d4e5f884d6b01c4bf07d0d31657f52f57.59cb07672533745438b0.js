(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+xx2":function(e,t,n){e.exports={"info-container":"info-container___DmMR0",info:"info___31OhC"}},"/9aa":function(e,t,n){var i=n("NykK"),r=n("ExA7"),o="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&i(e)==o}},"2Eek":function(e,t,n){e.exports=n("W7oM")},"4mXO":function(e,t,n){e.exports=n("7TPF")},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,n){var i=n("Y7ZC"),r=n("uplh"),o=n("NsO/"),a=n("vwuL"),s=n("IP1Z");i(i.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,i=o(e),c=a.f,l=r(i),u={},p=0;l.length>p;)void 0!==(n=c(i,t=l[p++]))&&s(u,t,n);return u}})},AP2z:function(e,t,n){var i=n("nmnc"),r=Object.prototype,o=r.hasOwnProperty,a=r.toString,s=i?i.toStringTag:void 0;e.exports=function(e){var t=o.call(e,s),n=e[s];try{e[s]=void 0;var i=!0}catch(c){}var r=a.call(e);return i&&(t?e[s]=n:delete e[s]),r}},CwR4:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("q1tI"),r=n.n(i),o=n("Jzdk"),a=r.a.createElement,s=function(e){var t=Object(o.b)().state.currentTab.currentTab;return a("div",{style:{width:"1600rem",overflowX:"hidden"}},a("div",{style:{width:1600*e.children.length+"rem",display:"flex",transform:"translateX(-".concat(1600*t,"rem)"),transition:"0.6s ease-in-out"}},e.children?e.children.map((function(e,n){return a("div",{style:{width:"1600rem",height:n===t?"100%":"0",overflow:"hidden",transition:"0.6s ease-in-out"}},e)})):null))}},DzJC:function(e,t,n){var i=n("sEfC"),r=n("GoyQ"),o="Expected a function";e.exports=function(e,t,n){var a=!0,s=!0;if("function"!=typeof e)throw new TypeError(o);return r(n)&&(a="leading"in n?!!n.leading:a,s="trailing"in n?!!n.trailing:s),i(e,t,{leading:a,maxWait:t,trailing:s})}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},GoyQ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},HRx6:function(e,t,n){e.exports={"main-color":"main-color___-a4BP","split-line-color":"split-line-color___1NAD8",main:"main___dFapN","pharse-title":"pharse-title___KDx0B","pharse-main-body":"pharse-main-body___1AkK2","pharse-container":"pharse-container___2lkOx"}},IP1Z:function(e,t,n){"use strict";var i=n("2faE"),r=n("rr1i");e.exports=function(e,t,n){t in e?i.f(e,t,r(0,n)):e[t]=n}},J2Uf:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("hMns"),r=n("DzJC"),o=n.n(r),a=[],s=[],c=function(e){return Object(i.a)((function(){window.onresize=o()((function(t){if(t.target.innerWidth<768)return e&&e(),void s.forEach((function(e){e()}));a.forEach((function(e){e()}))}),800,{trailing:!0})})),{addCallback:function(e){a.push(e)},addMustExecuteCallback:function(e){s.push(e)}}}},Jzdk:function(e,t,n){"use strict";n.d(t,"a",(function(){return N})),n.d(t,"b",(function(){return I}));var i=n("hfKm"),r=n.n(i),o=n("2Eek"),a=n.n(o),s=n("XoMD"),c=n.n(s),l=n("Jo+v"),u=n.n(l),p=n("4mXO"),f=n.n(p),m=n("doui"),d=n("Qetd"),g=n.n(d),v=n("pLtp"),b=n.n(v),w=n("vYYK"),h=n("q1tI"),y=n.n(h),_=y.a.createElement;function j(e,t){var n=b()(e);if(f.a){var i=f()(e);t&&(i=i.filter((function(t){return u()(e,t).enumerable}))),n.push.apply(n,i)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(w.a)(e,t,n[t])})):c.a?a()(e,c()(n)):j(Object(n)).forEach((function(t){r()(e,t,u()(n,t))}))}return e}var E={currentTab:{currentTab:0},scale:{scale:1},test:{count:0}},C=function(e){return function(t,n){return b()(e).map((function(i){return Object(w.a)({},i,e[i](t[i],n))})).reduce((function(e,t){return g()({},e,t)}))}}({currentTab:function(e,t){return"setCurrentTab"===t.type?x({},e,{currentTab:t.value}):e},test:function(e,t){return"increment"===t.type?x({},e,{count:e.count+t.value}):e},scale:function(e,t){return"setScale"===t.type?x({},e,{scale:t.value}):e}});var O=function(e){var t=y.a.createContext(null);return{CurrentTabProvider:function(n){var i=y.a.useReducer(C,e?x({},E,{},e):E),r=Object(m.a)(i,2),o=r[0],a=r[1],s={setCurrentTab:function(e){a({type:"setCurrentTab",value:e})},setScale:function(e){a({type:"setScale",value:e})}};return _(t.Provider,{value:{state:o,actions:s}},n.children)},useCurrentTab:function(){var e=y.a.useContext(t);if(!e)throw new Error("Component must be wrapped with <CurrentTabProvider>");return e}}}(),N=O.CurrentTabProvider,I=O.useCurrentTab},KPGa:function(e,t,n){e.exports={"main-color":"main-color___2RATp","split-line-color":"split-line-color___1aBwu","project-images":"project-images___3jO0d","project-image":"project-image___38v8v","project-index-item":"project-index-item___rOerk","project-index-subtitle":"project-index-subtitle___YcFUz","project-index-title":"project-index-title___1t5-0"}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var i=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,o=i||r||Function("return this")();e.exports=o},NykK:function(e,t,n){var i=n("nmnc"),r=n("AP2z"),o=n("KfNM"),a="[object Null]",s="[object Undefined]",c=i?i.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?s:a:c&&c in Object(e)?r(e):o(e)}},Q6TT:function(e,t,n){e.exports={"info-container":"info-container___gv01a",info:"info___1C4Oe"}},QIyF:function(e,t,n){var i=n("Kz5y");e.exports=function(){return i.Date.now()}},UXZV:function(e,t,n){e.exports=n("UbbE")},UbbE:function(e,t,n){n("o8NH"),e.exports=n("WEpk").Object.assign},VFHl:function(e,t,n){"use strict";var i=n("q1tI"),r=n.n(i),o=n("h9FQ"),a=n.n(o),s=n("z6V2"),c=i.createElement,l=[{src:"/static/images/profile.webp",type:"image/webp"}],u=[{src:"/static/images/profile-preview.webp",type:"image/webp"}],p=function(){return c("div",{className:a.a["banner-container"]},c("div",{className:a.a.title},c(s.a,{sources:l,src:"/static/images/profile.jpg",preview_src:"/static/images/profile-preview.jpg",preview_sources:u,alt:"my profile",className:a.a.picture}),c("div",{className:a.a.name},c("div",{className:a.a.welcome},"Welcome! I'm"),c("div",{className:a.a["actual-name"]},c("span",{className:a.a["chinese-name"]},"LING, XI"),c("span",{className:a.a["english-name"]}," /Lim")),c("div",{className:a.a["who-am-i"]},"Designer with Love, Passion and Creativity"))),c("div",{className:a.a.metaphor},"\u201cGood design is honest.\u201d"))},f=n("ijYc"),m=n.n(f),d=n("x2e4"),g=n.n(d),v=r.a.createElement,b=function(e){return v("div",{className:g.a["info-container"]},e.informations.map((function(t){return v("div",{key:t,className:g.a.info,style:{textAlign:e.align}},t)})))},w=i.createElement,h=["+86 15801795037","ccceline.xiii@gmail.com"],y=["College of Design and Innovation, Tongji University","No.1239 Siping Rd, Shanghai, China, 200092"],_=function(){return w("div",{className:m.a["contact-container"]},w(b,{informations:h,align:"left"}),w(b,{informations:y,align:"right"}))},j=n("HRx6"),x=n.n(j),E=n("+xx2"),C=n.n(E),O=n("Q6TT"),N=n.n(O),I=r.a.createElement,S=function(e){return I("div",{className:N.a["info-container"]},e.informations.map((function(t){return I("div",{key:t,className:N.a.info,style:{textAlign:e.align}},t)})))},k=n("cIVd"),T=n.n(k),P=r.a.createElement,D=function(e){return P("div",{className:T.a["info-container"]},e.informations.map((function(e){return P("div",{className:T.a.info,key:e},e)})))},M=r.a.createElement,z=function(e){var t=e.info;return M("div",{className:C.a["info-container"]},M(b,{informations:t.title,align:"left"}),t.subtitle&&M(S,{informations:t.subtitle,align:"left"}),t.desc&&M(D,{informations:t.desc}))},A=i.createElement,F=function(e){var t=e.info,n=e.title,i=e.bottomGap;return A("div",{className:x.a.main},n&&A("div",{className:x.a["pharse-title"]},n),A("div",{className:x.a["pharse-main-body"]},t.map((function(e){return A("div",{key:e.title[0],className:x.a["pharse-container"],style:{marginBottom:null!==i&&void 0!==i?i:"58rem"}},A(z,{info:e}),A(b,{informations:e.time,align:"right"}))}))))},U=i.createElement,K=[{title:"EDUCATION",info:[{title:["Industrial Design, College of Design and Innovation, Tongji University","Candidate for Bachelor of Engineering | Cumulative GPA: 4.46"],time:["09.2015 - 06.2020"]}]},{title:"DESIGN INTERNSHIP EXPERIENCE",info:[{title:["Capgemini"],subtitle:["UX/UI Design Intern"],desc:["Co-created with clients to identify the opportunity and develop the service through design strategy","Collaborated with front-end engineers to improve user interface of digital products"],time:["11.2019 - Present"]},{title:["Volvo Car Asia Pacific"],subtitle:["Design Color & Material Intern"],desc:["Completed benchmark and trend research on car exterior and interior color & material","Created pattern and color propasals for interior deco and leather monthly"],time:["02.2019 - 07.2019"]},{title:["Neuni Group, Shanghai"],subtitle:["Creative and Visual Design Intern"],desc:["Proposed creative plans for products and installations adopting new materials","Led visual design for local exhibitions"],time:["05.2018 - 08.2018"]}]},{title:"RESEARCH EXPERIENCE",info:[{title:["\u201cNext Mobility\u201d Laboratory, College of Design and Innovation, Tongji University"],subtitle:["Researcher"],desc:["Composed paper on \u201cIndustrial Design Knowledge for Additive Manufacturing\u201d","Composed paper on \u201cStudy on the Pedestrian Signage System in International Megacities\u201d"],time:["08.2018 - 12.2018"]}]},{title:"COMPETITION EXPERIENCE",info:[{title:["Closing the Loop on Food Packaging | ExxonMobil Challenge Reality Hackathon"],subtitle:["Gold Prize"],time:["2019"]},{title:["EMO Robot Product Design | Shanghai Industry Design Competition"],subtitle:["First Prize"],time:["2018"]},{title:["Bamboo Stool Design | The Second \u2018Think Youth\u2019 Shanghai Design Competition "],subtitle:["Second Prize"],time:["2017"]},{title:["Unmanned Aerial Vehicle Design | Honeywell Internal Competition"],subtitle:["Third Prize"],time:["2017"]},{title:["15% Academic Achievement Scholarship | College of Design and Innovation"],time:["2017"]}],bottomGap:"42rem"},{title:"MANAGEMENT EXPERIENCE",info:[{title:["The First China Industry Design Exhibition, Wuhan, China"],subtitle:["Exhibition Designer for Tongji University\u2019s field"],desc:["Planned exhibition design, including showing forms and lighting design","Arranged exhibits\u2019 collection and logistics from Shanghai to Wuhan"],time:["11.2017"]},{title:["Tongji Design Week"],subtitle:["Best Performance Core Volunteer"],desc:["Communicated with 10 designers and artists to align exhibition plans","Coordinated with other volunteers to meet requests on space and activities "],time:["10.2016 & 2017"]},{title:["Tongji University Student Union"],subtitle:["Deputy Minister of Human Resources Department"],desc:["Ran department to operate 12 events for more than 400 student union members","Met with administrators to address development of internal regulations weekly"],time:["09.2015 - 08.2016"]}]}],R=U("div",{style:{padding:"30rem 0 30rem",borderBottom:"1rem solid #000000"}},U("h1",{style:{fontFamily:"Sofia Pro Regular",fontSize:"25rem"}},"IXD VideoBlog + 12440483"),U("video",{src:"/static/videos/newnew.mp4",autoPlay:!1,controls:!0,style:{width:"1600rem",marginTop:"20rem"}}),U("div",{style:{fontSize:"20rem",fontFamily:"Sofia Pro Light",letterSpacing:"0.5rem",fontStyle:"italic"}},U("p",null,'"To learn and create, for better world and meaningful life.'),U("p",null,"It is part of design\u2019s responsibility to make communication more effective, especially in the business environment. The Internet has really changed how we work and made design more powerful in business world. For instance, online working software decreases the cost of collaborating, and digital illustrations and motion effect make presentation more vivid. Nearly two years of design internship experience also let me witness mature designers use many methods to make different kinds of cooperators understand their creative ideas and work together for the best result."),U("p",null,"Design can be greatly meaningful and release fullest potential when it comes to social innovation. Once I participated a design activity for local communities in Shanghai. We chatted with residents to know their request, decorated old stairways and helped them build their own public information display system. If I were a little girl who lives there, maybe these colorful paintings could enlighten me to have a dream as an artist or a information manager. These experience led me know how innovation grows in local culture and its design that makes the change."," "),U("p",null,"A month ago, China discovered the spread of novel coronavirus. The government advocated people to wear masks, do not go out and work at home. It was time to act quickly and design really played an important role. I designed a set of posters with my classmates. These were notifications to teach people to protect themselves, which were released in Shanghai Railway Station just 5 hours later. And as a UX intern in Capgemini, I also helped the development of a new application for employee health screening. Every staff must submit the health status and location on this app everyday, and managers can check the record of team members to make sure work goes well."," "),U("p",null,'To summarize, we have a responsibility to involve in current real world and make positive effect through design."')));t.a=function(){return U("div",{style:{width:"1600rem"}},R,U(p,null),U(_,null),K.map((function(e){return U(F,{info:e.info,title:e.title,key:e.title})})))}},W7oM:function(e,t,n){n("nZgG");var i=n("WEpk").Object;e.exports=function(e,t){return i.defineProperties(e,t)}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},XoMD:function(e,t,n){e.exports=n("hYAz")},cIVd:function(e,t,n){e.exports={"info-container":"info-container___3jIr7",info:"info___2-8k-"}},"d+70":function(e,t,n){e.exports={main:"main___3sGd6"}},doui:function(e,t,n){"use strict";var i=n("p0XB"),r=n.n(i);var o=n("XXOK"),a=n.n(o),s=n("yLu3"),c=n.n(s);function l(e,t){return function(e){if(r()(e))return e}(e)||function(e,t){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var s,l=a()(e);!(i=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(u){r=!0,o=u}finally{try{i||null==l.return||l.return()}finally{if(r)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return l}))},h9FQ:function(e,t,n){e.exports={"main-color":"main-color___1vwFq","split-line-color":"split-line-color___1RwQl","banner-container":"banner-container___2iee0",title:"title___14UTd",picture:"picture___3K3mg",name:"name___2o-lr",welcome:"welcome___29rMH","actual-name":"actual-name___1r6DP","chinese-name":"chinese-name___2k66j","english-name":"english-name___ti-Rj","who-am-i":"who-am-i___3WFNN",metaphor:"metaphor___ecs05"}},hMns:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("q1tI"),r=function(e,t){var n=Object(i.useState)(!1),r=n[0],o=n[1],a=Object(i.useState)(!1),s=a[0],c=a[1];return Object(i.useEffect)((function(){r||o(!0)}),[]),Object(i.useEffect)((function(){if(r)return e(),c(!0),t?function(){return t()}:function(){return null}}),[r]),{firstLoaded:r,IsDone:s,setIsDone:c}}},hYAz:function(e,t,n){n("7m0m"),e.exports=n("WEpk").Object.getOwnPropertyDescriptors},hdxh:function(e,t,n){e.exports={"main-color":"main-color___EG-zS","split-line-color":"split-line-color___3LrYH",layout:"layout___3KKqz"}},ijYc:function(e,t,n){e.exports={"main-color":"main-color___HghB8","split-line-color":"split-line-color___2oU8J","pharse-body":"pharse-body___1jZ7O","contact-container":"contact-container___1K470"}},it8P:function(e,t,n){e.exports={"main-color":"main-color___1ATyE","split-line-color":"split-line-color___9hkSs","layout-menu-container":"layout-menu-container___11U8b","layout-menu-item":"layout-menu-item___zoOMp","layout-slider":"layout-slider___15Qhc","layout-slider-line":"layout-slider-line___JbK2f","layout-slider-dot":"layout-slider-dot___2OqTm",animated:"animated___3Ynd9"}},kOwS:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("UXZV"),r=n.n(i);function o(){return(o=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}},n2ni:function(e,t,n){"use strict";var i=n("q1tI"),r=n.n(i),o=n("d+70"),a=n.n(o),s=n("kOwS"),c=n("KPGa"),l=n.n(c),u=n("z6V2"),p=n("nOHt"),f=n.n(p),m=r.a.createElement,d=function(e){var t=e.images,n=e.title,i=e.desc,r=(e.tags,e.href);return m("div",{className:l.a["project-index-item"],onClick:function(){return f.a.push("/projects/"+r)}},m("div",null,m("div",{className:l.a["project-index-title"]},n),m("div",{className:l.a["project-index-subtitle"]},i.map((function(e){return m("span",null,e)})))),m("div",{className:l.a["project-images"]},t.map((function(e){return m(u.a,Object(s.a)({},e,{className:l.a["project-image"]}))}))))},g=r.a.createElement,v="/static/images/projectIndex/",b=[{title:"Stringboard",desc:["an input tool and","an electronic instrument"],tags:["Integrated product development"],href:"string-board",images:[{src:v+"1.jpg",sources:[{src:v+"1.webp",type:"image/webp"}],preview_src:v+"1-preview.jpg",preview_sources:[{src:v+"1-preview.webp",type:"image/webp"}],alt:"String board"},{src:v+"2.jpg",sources:[{src:v+"2.webp",type:"image/webp"}],preview_src:v+"2-preview.jpg",preview_sources:[{src:v+"2-preview.webp",type:"image/webp"}],alt:"String board"}]},{title:"EndlessForm",href:"endless-form",desc:["a digital creator and designer","based on ACO algorithm study"],tags:["Creative Digital Product"],images:[{src:v+"3.jpg",sources:[{src:v+"3.webp",type:"image/webp"}],preview_src:v+"3-preview.jpg",preview_sources:[{src:v+"3-preview.webp",type:"image/webp"}],alt:"String board"},{src:v+"4.jpg",sources:[{src:v+"4.webp",type:"image/webp"}],preview_src:v+"4-preview.jpg",preview_sources:[{src:v+"4-preview.webp",type:"image/webp"}],alt:"Endless Form"}]},{title:"EMO",href:"emo",desc:["a programming education robot and","an online education platform"],tags:["Integrated product development"],images:[{src:v+"5.jpg",sources:[{src:v+"5.webp",type:"image/webp"}],preview_src:v+"5-preview.jpg",preview_sources:[{src:v+"5-preview.webp",type:"image/webp"}],alt:"EMO"},{src:v+"6.jpg",sources:[{src:v+"6.webp",type:"image/webp"}],preview_src:v+"6-preview.jpg",preview_sources:[{src:v+"6-preview.webp",type:"image/webp"}],alt:"EMO"}]},{title:"xixi4rhino",href:"xixi4rhino",desc:["a website for rhino protection","by impacting potential consumers directly"],tags:["Sustainable Consciousness"],images:[{src:v+"7.jpg",sources:[{src:v+"7.webp",type:"image/webp"}],preview_src:v+"7-preview.jpg",preview_sources:[{src:v+"7-preview.webp",type:"image/webp"}],alt:"String board"},{src:v+"8.jpg",sources:[{src:v+"8.webp",type:"image/webp"}],preview_src:v+"8-preview.jpg",preview_sources:[{src:v+"8-preview.webp",type:"image/webp"}],alt:"String board"}]},{title:"Flyro",href:"flyro",desc:["an inspiring spinning and","a mobile free zone"],tags:["Integrated Product development"],images:[{src:v+"9.jpg",sources:[{src:v+"9.webp",type:"image/webp"}],preview_src:v+"9-preview.jpg",preview_sources:[{src:v+"9-preview.webp",type:"image/webp"}],alt:"Flyro"},{src:v+"10.jpg",sources:[{src:v+"10.webp",type:"image/webp"}],preview_src:v+"10-preview.jpg",preview_sources:[{src:v+"10-preview.webp",type:"image/webp"}],alt:"Flyro"}]},{title:"Dual-layer Solution",href:"dual-layer",desc:["a solution for closing the loop","on plastic food packaging"],tags:["Sustainable Consciousness"],images:[{src:v+"11.jpg",sources:[{src:v+"11.webp",type:"image/webp"}],preview_src:v+"11-preview.jpg",preview_sources:[{src:v+"11-preview.webp",type:"image/webp"}],alt:"String board"},{src:v+"12.jpg",sources:[{src:v+"12.webp",type:"image/webp"}],preview_src:v+"12-preview.jpg",preview_sources:[{src:v+"12-preview.webp",type:"image/webp"}],alt:"String board"}]},{title:"Bamboo Stool",href:"bamboo",desc:["an exploration of bamboo craft","in modern aesthetic"],tags:["Integrated product development"],images:[{src:v+"13.jpg",sources:[{src:v+"13.webp",type:"image/webp"}],preview_src:v+"13-preview.jpg",preview_sources:[{src:v+"13-preview.webp",type:"image/webp"}],alt:"String board"},{src:v+"14.jpg",sources:[{src:v+"14.webp",type:"image/webp"}],preview_src:v+"14-preview.jpg",preview_sources:[{src:v+"14-preview.webp",type:"image/webp"}],alt:"String board"}]},{title:"Internship Work",href:"internship",desc:["as UX/UI Design Intern as Capgemini","and Creative Graphic Designer at Neuni Group"],tags:[""],images:[{src:v+"15.jpg",sources:[{src:v+"15.webp",type:"image/webp"}],preview_src:v+"15-preview.jpg",preview_sources:[{src:v+"15-preview.webp",type:"image/webp"}],alt:"Internship Work"},{src:v+"16.jpg",sources:[{src:v+"16.webp",type:"image/webp"}],preview_src:v+"16-preview.jpg",preview_sources:[{src:v+"16-preview.webp",type:"image/webp"}],alt:"Internship Work"}]},{title:"Cultural Jewelry",href:"cultural-jewelry",desc:["a set of jewelry design inspired by","Chinese Bronze in Shanghai Museum"],tags:["Integrated product development"],images:[{src:v+"17.jpg",sources:[{src:v+"17.webp",type:"image/webp"}],preview_src:v+"17-preview.jpg",preview_sources:[{src:v+"17-preview.webp",type:"image/webp"}],alt:"String board"},{src:v+"18.jpg",sources:[{src:v+"18.webp",type:"image/webp"}],preview_src:v+"18-preview.jpg",preview_sources:[{src:v+"18-preview.webp",type:"image/webp"}],alt:"String board"}]}].map((function(e){return e.mainColor="#000",e}));t.a=function(e){return g("div",{className:a.a.main},b.map((function(e){return g(d,e)})))}},nZgG:function(e,t,n){var i=n("Y7ZC");i(i.S+i.F*!n("jmDH"),"Object",{defineProperties:n("fpC5")})},"nb+D":function(e,t,n){"use strict";var i=n("hfKm"),r=n.n(i),o=n("2Eek"),a=n.n(o),s=n("XoMD"),c=n.n(s),l=n("Jo+v"),u=n.n(l),p=n("4mXO"),f=n.n(p),m=n("pLtp"),d=n.n(m),g=n("vYYK"),v=n("q1tI"),b=n("it8P"),w=n.n(b),h=n("Jzdk"),y=n("hMns"),_=n("J2Uf"),j=v.createElement;function x(e,t){var n=d()(e);if(f.a){var i=f()(e);t&&(i=i.filter((function(t){return u()(e,t).enumerable}))),n.push.apply(n,i)}return n}var E=[{key:"aboutMe",label:"About Me"},{key:"projects",label:"Projects"}];t.a=function(e){var t,n=Object(h.b)(),i=n.state,o=i.currentTab.currentTab,s=i.scale.scale,l=n.actions.setCurrentTab,p=Object(v.useState)(0),f=p[0],m=p[1],d=Object(v.useRef)(null),b=[E[0]].concat(e.menuItems||[]).concat(E[1]).map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(g.a)(e,t,n[t])})):c.a?a()(e,c()(n)):x(Object(n)).forEach((function(t){r()(e,t,u()(n,t))}))}return e}({},e,{ref:v.useRef()})})),C=Object(_.a)().addCallback,O=Object(y.a)((function(){d.current=document.getElementsByTagName("body")[0].offsetWidth,N(b[o])(),C((function(){d.current=document.getElementsByTagName("body")[0].offsetWidth,N(b[o])()}))})).IsDone,N=Object(v.useCallback)((function(e){return function(){if(O){var t=b.findIndex((function(t){return t.key===e.key}));if(~t){var n=(d.current-1600*s)/2,i=e.ref.current.offsetLeft,r=e.ref.current.offsetWidth;m((i+r/2-n-8)/s),l(t)}}}}),[d,O,s]);return Object(v.useEffect)((function(){O&&N(b[o])()}),[o,s,O]),j("div",{style:null!==(t=e.bodyStyle)&&void 0!==t?t:{}},j("div",{className:w.a["layout-menu-container"]},b.map((function(e){return j("span",{key:e.key,ref:e.ref,className:w.a["layout-menu-item"],onClick:N(e)},e.label)}))),j("div",{className:w.a["layout-slider"]},j("span",{className:w.a["layout-slider-dot"],style:{transform:"translate(".concat(f,"rem, -8rem)")}}),j("div",{className:w.a["layout-slider-line"]})))}},nmnc:function(e,t,n){var i=n("Kz5y").Symbol;e.exports=i},o8NH:function(e,t,n){var i=n("Y7ZC");i(i.S+i.F,"Object",{assign:n("kwZ1")})},sEfC:function(e,t,n){var i=n("GoyQ"),r=n("QIyF"),o=n("tLB3"),a="Expected a function",s=Math.max,c=Math.min;e.exports=function(e,t,n){var l,u,p,f,m,d,g=0,v=!1,b=!1,w=!0;if("function"!=typeof e)throw new TypeError(a);function h(t){var n=l,i=u;return l=u=void 0,g=t,f=e.apply(i,n)}function y(e){var n=e-d;return void 0===d||n>=t||n<0||b&&e-g>=p}function _(){var e=r();if(y(e))return j(e);m=setTimeout(_,function(e){var n=t-(e-d);return b?c(n,p-(e-g)):n}(e))}function j(e){return m=void 0,w&&l?h(e):(l=u=void 0,f)}function x(){var e=r(),n=y(e);if(l=arguments,u=this,d=e,n){if(void 0===m)return function(e){return g=e,m=setTimeout(_,t),v?h(e):f}(d);if(b)return clearTimeout(m),m=setTimeout(_,t),h(d)}return void 0===m&&(m=setTimeout(_,t)),f}return t=o(t)||0,i(n)&&(v=!!n.leading,p=(b="maxWait"in n)?s(o(n.maxWait)||0,t):p,w="trailing"in n?!!n.trailing:w),x.cancel=function(){void 0!==m&&clearTimeout(m),g=0,l=d=u=m=void 0},x.flush=function(){return void 0===m?f:j(r())},x}},tLB3:function(e,t,n){var i=n("GoyQ"),r=n("/9aa"),o=NaN,a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return o;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=c.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):s.test(e)?o:+e}},uplh:function(e,t,n){var i=n("ar/p"),r=n("mqlF"),o=n("5K7Z"),a=n("5T2Y").Reflect;e.exports=a&&a.ownKeys||function(e){var t=i.f(o(e)),n=r.f;return n?t.concat(n(e)):t}},vYYK:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("hfKm"),r=n.n(i);function o(e,t,n){return t in e?r()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},x2e4:function(e,t,n){e.exports={"info-container":"info-container___3GTzi",info:"info___1C7pF"}},z6V2:function(e,t,n){"use strict";var i=n("q1tI"),r=n.n(i).a.createElement;t.a=function(e){var t=e.className,n=e.src,o=e.sources,a=e.alt,s=e.preview_src,c=e.preview_sources,l=Object(i.useState)(!1),u=l[0],p=l[1];return r("div",null,r("picture",null,(null!==c&&void 0!==c?c:[]).map((function(e){return r("source",{srcSet:e.src,type:e.type})})),r("img",{src:s,alt:"preview",className:t,style:{display:u?"none":"show",filter:"blur(3px)"}})),r("picture",null,(null!==o&&void 0!==o?o:[]).map((function(e){return r("source",{srcSet:e.src,type:e.type})})),r("img",{src:n,alt:a,className:t,style:{display:u?"initial":"none"},onLoad:function(){p(!0)}})))}}}]);