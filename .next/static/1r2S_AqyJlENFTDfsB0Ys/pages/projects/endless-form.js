(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"/L07":function(e,t,a){"use strict";var n=a("d04V"),i=a.n(n),r=a("kOwS"),s=a("doui"),o=a("q1tI"),c=a.n(o),l=a("573B"),u=a.n(l),d=a("z6V2"),m=a("J2Uf"),p=a("DzJC"),f=a.n(p),g=c.a.createElement;t.a=function(e){var t=e.images,a=e.title,n=e.desc,l=e.links,p=e.tags,w=e.details,h=e.mainColor,v=e.detail_images_meta,b=e.video,y=e.affix_image_meta,j=c.a.useRef({duration:0,currentTime:0,fake:!0}),N=c.a.useState(void 0),A=Object(s.a)(N,2),E=A[0],C=A[1],O=c.a.useState(!1),k=Object(s.a)(O,2),_=k[0],S=k[1],T=function(e){var t=Object(o.useState)(!0),a=t[0],n=t[1];return{forceUpdate:function(){n(!a)}}}().forceUpdate,x=c.a.useState(0),D=Object(s.a)(x,2),F=D[0],J=D[1];return Object(o.useEffect)((function(){!j.current.fake&&document&&(document.onscroll=function(){j.current.getBoundingClientRect().top<700?void 0===E&&(j.current.play(),C(!0)):j.current.getBoundingClientRect().bottom<150&&(j.current.pause(),C(!1))})}),[j.current,document,E]),(0,Object(m.a)().addMustExecuteCallback)((function(){T()})),Object(o.useEffect)((function(){var e=f()((function(){J(j.current.currentTime/j.current.duration*100)}),500);j.current.fake||j.current.addEventListener("timeupdate",e)}),[j.current,J]),g("div",{className:u.a["project-detail-item"],style:{color:h}},g("div",{className:u.a["project-detail-images"]},t.map((function(e){return g(d.a,Object(r.a)({},e,{className:"".concat(u.a["project-detail-image"]," ").concat(e.className)}))}))),g("div",null,g("div",{className:u.a["project-detail-title"]},a),g("div",{className:u.a["project-detail-subtitle"]},n.map((function(e){return g("span",null,e)})))),g("div",{className:u.a["project-detail-details"],style:{backgroundColor:h}},g("div",{className:u.a["project-detail-tags"]},p.map((function(e){return g("span",null,e)}))),w.length>0&&g("span",{className:u.a["project-detail-details-desc"]},w)),g("div",{style:{fontSize:0}},i()({length:v.num}).map((function(e,t){if(0!==t){var a=v.dir+"/"+(t+1).toString();return g(d.a,{src:a+".jpg",sources:[{type:"image/webp",src:a+".webp"}],preview_src:a+"-preview.jpg",preview_sources:[{type:"image/webp",src:a+"-preview.webp"}],className:"".concat(u.a["project-detail-details-images"]," ").concat(v.className)})}})),l&&l.map((function(e){return g("a",{className:e.className,href:e.src,target:"blank"},e.desc)})),b?b.map((function(e){return g("div",{style:{width:"1600rem",position:"relative",height:"900rem",transition:"0.3s ease-in-out",filter:1==E?"none":"opacity(0.9)"},onMouseEnter:function(){S(!0)},onMouseLeave:function(){S(!1)},onClick:function(){E?(j.current.pause(),C(!1)):(j.current.play(),C(!0))}},g("div",{className:u.a["project-detail-stop-icon"],style:{display:1==E?"none":"block"}},"PAUSE"),g("div",{style:{transition:".4s ease",opacity:_?1:0},className:u.a["project-detail-video-control-bar"]},g("div",{className:u.a.bar},g("div",{className:u.a.progress,style:{width:F+"%"}}))),g("video",{src:e.src,ref:j,autoPlay:!1,style:{width:"1600rem",float:"left"}}))})):null,y?i()({length:y.num}).map((function(e,t){if(0!==t){var a=y.dir+"/"+(v.num+t+1).toString();return g(d.a,{src:a+".jpg",sources:[{type:"image/webp",src:a+".webp"}],preview_src:a+"-preview.jpg",preview_sources:[{type:"image/webp",src:a+"-preview.webp"}],className:u.a["project-detail-details-images"]})}})):null))}},"0tVQ":function(e,t,a){a("FlQf"),a("VJsP"),e.exports=a("WEpk").Array.from},Luz4:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a("hdxh"),r=a.n(i),s=a("nb+D"),o=a("Jzdk"),c=a("CwR4"),l=a("hMns"),u=a("J2Uf"),d=a("/L07"),m=a("VFHl"),p=a("n2ni"),f=n.createElement,g="/static/images/projectDetails/img",w={title:"EndlessForm",desc:["a digital creator and designer","based on ACO algorithm study"],tags:["Creative Digital Product Design | Algorithm Study | Personal Work | Dec 2017 "],mainColor:"#A100FF",details:"EndlessForm contains the research of Ant Colony Optimization (ACO) Algorithm, the visual presentation of ACO Algorithm in Grasshopper, and the digital application (your private digital designer) of ACO Algorithm in Grasshopper for the public. The principle of ACO Algorithm is that an individual affects the whole group, which means its inherent law is suitable for a very wide range. When I used Quelea in grasshopper to simulate ACO algorithm, firstly I generated particles with some properties, and adjusted their dynamic particle parameters. By setting the parameters of environmrnt, these particles would present different movement tracks. These computer-generated tracks become visual images and 3D models after some processes, and these processes are put into a mobile app for the public.",images:[{src:g+"5.jpg",sources:[{src:g+"5.webp",type:"image/webp"}],preview_src:g+"5-preview.jpg",preview_sources:[{src:g+"5-preview.webp",type:"image/webp"}],alt:"Endless Form"}],detail_images_meta:{dir:"/static/images/projectDetails/endlessform",num:5}},h=[{key:"EndlessForm",label:"EndlessForm"}],v=function(){var e=Object(o.b)(),t=e.state.scale.scale,a=e.actions,i=a.setScale,g=a.setCurrentTab,v=Object(n.useState)(!0),b=v[0],y=v[1],j=function(){i(1);var e=Math.min(document.body.clientWidth/1920,1),t=document.querySelector('meta[name="viewport"]');t?t.setAttribute("content","width=device-width, initial-scale="+e+", maximum-scale="+e+", minimum-scale="+e+", user-scalable=no"):((t=document.createElement("meta")).setAttribute("name","viewport"),t.setAttribute("content","width=device-width, initial-scale="+e+", maximum-scale="+e+", minimum-scale="+e+", user-scalable=no"),document.documentElement.firstElementChild.appendChild(t)),window.scrollTo({top:0})},N=Object(l.a)((function(){if(g(1),window.innerWidth>=700){var e=Math.max(Math.min(window.innerWidth/1920,1),.2);i(e)}else j();A((function(){var e=Math.max(Math.min(window.innerWidth/1920,1),.2);document.getElementsByTagName("html")[0].style.fontSize="".concat(e,"px"),window.scrollTo({top:0}),i(e)}))})).IsDone;Object(n.useEffect)((function(){y(!0),document.getElementsByTagName("html")[0].style.fontSize="".concat(t,"px"),window.scrollTo({top:0}),setTimeout((function(){y(!1)}),0)}),[t]);var A=Object(u.a)(j).addCallback;return N&&!b?f("div",{className:r.a.layout},f(s.a,{menuItems:h}),f(c.a,null,f(m.a,null),f(d.a,w),f(p.a,null)),f(s.a,{menuItems:h,bodyStyle:{marginTop:"138rem"}})):null};t.default=function(){return f(o.a,null,f(v,null))}},VJsP:function(e,t,a){"use strict";var n=a("2GTP"),i=a("Y7ZC"),r=a("JB68"),s=a("sNwI"),o=a("NwJ3"),c=a("tEej"),l=a("IP1Z"),u=a("fNZA");i(i.S+i.F*!a("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,a,i,d,m=r(e),p="function"==typeof this?this:Array,f=arguments.length,g=f>1?arguments[1]:void 0,w=void 0!==g,h=0,v=u(m);if(w&&(g=n(g,f>2?arguments[2]:void 0,2)),void 0==v||p==Array&&o(v))for(a=new p(t=c(m.length));t>h;h++)l(a,h,w?g(m[h],h):m[h]);else for(d=v.call(m),a=new p;!(i=d.next()).done;h++)l(a,h,w?s(d,g,[i.value,h],!0):i.value);return a.length=h,a}})},d04V:function(e,t,a){e.exports=a("0tVQ")},st7V:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/endless-form",function(){return a("Luz4")}])}},[["st7V",1,2,0,22,23,5]]]);