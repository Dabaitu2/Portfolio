(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"/L07":function(e,t,a){"use strict";var n=a("d04V"),i=a.n(n),r=a("kOwS"),o=a("doui"),s=a("q1tI"),c=a.n(s),l=a("573B"),u=a.n(l),d=a("z6V2"),m=a("J2Uf"),p=a("DzJC"),f=a.n(p),g=c.a.createElement;t.a=function(e){var t=e.images,a=e.title,n=e.desc,l=e.links,p=e.tags,w=e.details,v=e.mainColor,y=e.detail_images_meta,b=e.video,h=e.affix_image_meta,j=c.a.useRef({duration:0,currentTime:0,fake:!0}),S=c.a.useState(void 0),N=Object(o.a)(S,2),k=N[0],E=N[1],_=c.a.useState(!1),T=Object(o.a)(_,2),A=T[0],C=T[1],O=function(e){var t=Object(s.useState)(!0),a=t[0],n=t[1];return{forceUpdate:function(){n(!a)}}}().forceUpdate,D=c.a.useState(0),P=Object(o.a)(D,2),x=P[0],M=P[1];return Object(s.useEffect)((function(){!j.current.fake&&document&&(document.onscroll=function(){j.current.getBoundingClientRect().top<700?void 0===k&&(j.current.play(),E(!0)):j.current.getBoundingClientRect().bottom<150&&(j.current.pause(),E(!1))})}),[j.current,document,k]),(0,Object(m.a)().addMustExecuteCallback)((function(){O()})),Object(s.useEffect)((function(){var e=f()((function(){M(j.current.currentTime/j.current.duration*100)}),500);j.current.fake||j.current.addEventListener("timeupdate",e)}),[j.current,M]),g("div",{className:u.a["project-detail-item"],style:{color:v}},g("div",{className:u.a["project-detail-images"]},t.map((function(e){return g(d.a,Object(r.a)({},e,{className:u.a["project-detail-image"]}))}))),g("div",null,g("div",{className:u.a["project-detail-title"]},a),g("div",{className:u.a["project-detail-subtitle"]},n.map((function(e){return g("span",null,e)})))),g("div",{className:u.a["project-detail-details"],style:{backgroundColor:v}},g("div",{className:u.a["project-detail-tags"]},p.map((function(e){return g("span",null,e)}))),w.length>0&&g("span",{className:u.a["project-detail-details-desc"]},w)),g("div",{style:{fontSize:0}},i()({length:y.num}).map((function(e,t){if(0!==t){var a=y.dir+"/"+(t+1).toString();return g(d.a,{src:a+".jpg",sources:[{type:"image/webp",src:a+".webp"}],preview_src:a+"-preview.jpg",preview_sources:[{type:"image/webp",src:a+"-preview.webp"}],className:u.a["project-detail-details-images"]})}})),l&&l.map((function(e){return g("a",{className:e.className,href:e.src,target:"blank"},e.desc)})),b?b.map((function(e){return g("div",{style:{width:"1600rem",position:"relative",height:"900rem",transition:"0.3s ease-in-out",filter:1==k?"none":"opacity(0.9)"},onMouseEnter:function(){C(!0)},onMouseLeave:function(){C(!1)},onClick:function(){k?(j.current.pause(),E(!1)):(j.current.play(),E(!0))}},g("div",{className:u.a["project-detail-stop-icon"],style:{display:1==k?"none":"block"}},"PAUSE"),g("div",{style:{transition:".4s ease",opacity:A?1:0},className:u.a["project-detail-video-control-bar"]},g("div",{className:u.a.bar},g("div",{className:u.a.progress,style:{width:x+"%"}}))),g("video",{src:e.src,ref:j,autoPlay:!1,style:{width:"1600rem",float:"left"}}))})):null,h?i()({length:h.num}).map((function(e,t){if(0!==t){var a=h.dir+"/"+(y.num+t+1).toString();return g(d.a,{src:a+".jpg",sources:[{type:"image/webp",src:a+".webp"}],preview_src:a+"-preview.jpg",preview_sources:[{type:"image/webp",src:a+"-preview.webp"}],className:u.a["project-detail-details-images"]})}})):null))}},"0tVQ":function(e,t,a){a("FlQf"),a("VJsP"),e.exports=a("WEpk").Array.from},LhgE:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/dual-layer",function(){return a("iXMS")}])},VJsP:function(e,t,a){"use strict";var n=a("2GTP"),i=a("Y7ZC"),r=a("JB68"),o=a("sNwI"),s=a("NwJ3"),c=a("tEej"),l=a("IP1Z"),u=a("fNZA");i(i.S+i.F*!a("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,a,i,d,m=r(e),p="function"==typeof this?this:Array,f=arguments.length,g=f>1?arguments[1]:void 0,w=void 0!==g,v=0,y=u(m);if(w&&(g=n(g,f>2?arguments[2]:void 0,2)),void 0==y||p==Array&&s(y))for(a=new p(t=c(m.length));t>v;v++)l(a,v,w?g(m[v],v):m[v]);else for(d=y.call(m),a=new p;!(i=d.next()).done;v++)l(a,v,w?o(d,g,[i.value,v],!0):i.value);return a.length=v,a}})},d04V:function(e,t,a){e.exports=a("0tVQ")},iXMS:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a("hdxh"),r=a.n(i),o=a("nb+D"),s=a("Jzdk"),c=a("CwR4"),l=a("hMns"),u=a("J2Uf"),d=a("/L07"),m=a("VFHl"),p=a("n2ni"),f=n.createElement,g="/static/images/projectDetails/img",w={title:"Dual-layer Solution",desc:["a solution for closing the loop","on plastic food packaging"],tags:["Business Strategy | Product Service System Design | Team Work in 2 days | Dec 2019 "],mainColor:"#FF732D",details:"Dual-layer Solution offers a new dual-layer food packaging, and the optimization of manufacturing, sorting and recycling\nprocesses of that. The upper, thin film is made of biodegradable plastic, PLA, which is a water-soluble polymer with good film-forming property and resistance to grease. After the meal, consumers just need to tear off\x1e the PLA film, wrapping food residues, and then discard it into degradation dustbin; it protects the lower layer of PP plastic from food contamination and makes it can be reused or completely recycled. Dual-layer solution has a practical and acceptable product improvement to increase the recycling rate of plastic food packaging. And during manufacturing, sorting and recycling process, it makes every stakeholders have profit benefit as well as sprit incentives.",images:[{src:g+"1.jpg",sources:[{src:g+"1.webp",type:"image/webp"}],preview_src:g+"1-preview.jpg",preview_sources:[{src:g+"1-preview.webp",type:"image/webp"}],alt:"dual-layer"}],detail_images_meta:{dir:"/static/images/projectDetails/dual-layer-solution",num:8}},v=[{key:"dualLayerSolution",label:"Dual-layer Solution"}],y=function(){var e=Object(s.b)(),t=e.state.scale.scale,a=e.actions,i=a.setScale,g=a.setCurrentTab,y=Object(n.useState)(!0),b=y[0],h=y[1],j=function(){i(1);var e=Math.min(document.body.clientWidth/1920,1),t=document.querySelector('meta[name="viewport"]');t?t.setAttribute("content","width=device-width, initial-scale="+e+", maximum-scale="+e+", minimum-scale="+e+", user-scalable=no"):((t=document.createElement("meta")).setAttribute("name","viewport"),t.setAttribute("content","width=device-width, initial-scale="+e+", maximum-scale="+e+", minimum-scale="+e+", user-scalable=no"),document.documentElement.firstElementChild.appendChild(t)),window.scrollTo({top:0})},S=Object(l.a)((function(){if(g(1),window.innerWidth>=700){var e=Math.max(Math.min(window.innerWidth/1920,1),.2);i(e)}else j();N((function(){var e=Math.max(Math.min(window.innerWidth/1920,1),.2);document.getElementsByTagName("html")[0].style.fontSize="".concat(e,"px"),window.scrollTo({top:0}),i(e)}))})).IsDone;Object(n.useEffect)((function(){h(!0),document.getElementsByTagName("html")[0].style.fontSize="".concat(t,"px"),window.scrollTo({top:0}),setTimeout((function(){h(!1)}),0)}),[t]);var N=Object(u.a)(j).addCallback;return S&&!b?f("div",{className:r.a.layout},f(o.a,{menuItems:v}),f(c.a,null,f(m.a,null),f(d.a,w),f(p.a,null)),f(o.a,{menuItems:v,bodyStyle:{marginTop:"138rem"}})):null};t.default=function(){return f(s.a,null,f(y,null))}}},[["LhgE",1,2,0,21,22,5]]]);