(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/L07":function(e,t,a){"use strict";var n=a("d04V"),i=a.n(n),o=a("kOwS"),r=a("doui"),s=a("q1tI"),c=a.n(s),l=a("573B"),u=a.n(l),m=a("z6V2"),d=c.a.createElement;t.a=function(e){var t=e.images,a=e.title,n=e.desc,l=e.tags,p=e.details,f=e.mainColor,w=e.detail_images_meta,g=e.video,v=e.affix_image_meta,h=c.a.useRef(),b=c.a.useState(void 0),y=Object(r.a)(b,2),j=y[0],E=y[1];return Object(s.useEffect)((function(){h.current&&document&&(document.onscroll=function(){h.current.getBoundingClientRect().top<700?void 0===j&&(h.current.play(),E(!0)):h.current.getBoundingClientRect().bottom<150&&(h.current.pause(),E(!1))})}),[h,document,j]),d("div",{className:u.a["project-detail-item"],style:{color:f}},d("div",{className:u.a["project-detail-images"]},t.map((function(e){return d(m.a,Object(o.a)({},e,{className:u.a["project-detail-image"]}))}))),d("div",null,d("div",{className:u.a["project-detail-title"]},a),d("div",{className:u.a["project-detail-subtitle"]},n.map((function(e){return d("span",null,e)})))),d("div",{className:u.a["project-detail-details"],style:{backgroundColor:f}},d("div",{className:u.a["project-detail-tags"]},l.map((function(e){return d("span",null,e)}))),d("span",null,p)),d("div",{style:{fontSize:0}},i()({length:w.num}).map((function(e,t){if(0!==t){var a=w.dir+"/"+(t+1).toString();return d(m.a,{src:a+".jpg",sources:[{type:"image/webp",src:a+".webp"}],preview_src:a+"-preview.jpg",preview_sources:[{type:"image/webp",src:a+"-preview.webp"}],className:u.a["project-detail-details-images"]})}})),g?g.map((function(e){return d("div",{style:{width:"1600rem",position:"relative"},onClick:function(){j?(h.current.pause(),E(!1)):(h.current.play(),E(!0))}},d("div",{style:{letterSpacing:"30rem",fontFamily:"Sofia Pro Regular",fontSize:"100rem",lineHeight:"900rem",textAlign:"center",overflow:"hidden",color:"#fff",position:"absolute",width:"100%",display:1==j?"none":"block"}},"PAUSE"),d("video",{src:e.src,ref:h,autoPlay:!1,style:{width:"100%",float:"left"}}))})):null,v?i()({length:v.num}).map((function(e,t){if(0!==t){var a=v.dir+"/"+(w.num+t+1).toString();return d(m.a,{src:a+".jpg",sources:[{type:"image/webp",src:a+".webp"}],preview_src:a+"-preview.jpg",preview_sources:[{type:"image/webp",src:a+"-preview.webp"}],className:u.a["project-detail-details-images"]})}})):null))}},"0tVQ":function(e,t,a){a("FlQf"),a("VJsP"),e.exports=a("WEpk").Array.from},AGVs:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a("hdxh"),o=a.n(i),r=a("nb+D"),s=a("Jzdk"),c=a("CwR4"),l=a("hMns"),u=a("J2Uf"),m=a("/L07"),d=a("VFHl"),p=a("n2ni"),f=n.createElement,w="/static/images/projectDetails/img",g={title:"EMO",desc:["a programming education robot and","an online education platform"],tags:["Integrated Product Development | STEAM Education Service Design | Team Work in 8 weeks | Oct 2017 "],mainColor:"#304690",details:"EMO is an educational robot, applying applies Arduino to teach children aged 6-12 to learn programming and robot assembly, in order to stimulate creativity and prepare for advanced education. EMO's name comes from emotion. We hope that children could build up emotional connection with EMO robot. EMO has a pleasing appearance with two big eyes and a clear, easy-to-assemble internal structure. In addition to the physical model, we also created an online platform, in order to improve teaching efficiency and parental involvement. The physical robot and the online platform together form a sustainable STEAM education system that provides better services for  studens, teachers and parents.",images:[{src:w+"4.jpg",sources:[{src:w+"4.webp",type:"image/webp"}],preview_src:w+"4-preview.jpg",preview_sources:[{src:w+"4-preview.webp",type:"image/webp"}],alt:"EMO"}],detail_images_meta:{dir:"/static/images/projectDetails/emo",num:7}},v=[{key:"EMO",label:"EMO"}],h=function(){var e=Object(s.b)(),t=e.state.scale.scale,a=e.actions,i=a.setScale,w=a.setCurrentTab,h=Object(n.useState)(!0),b=h[0],y=h[1],j=function(){i(1);var e=Math.min(document.body.clientWidth/1920,1),t=document.querySelector('meta[name="viewport"]');t?t.setAttribute("content","width=device-width, initial-scale="+e+", maximum-scale="+e+", minimum-scale="+e+", user-scalable=no"):((t=document.createElement("meta")).setAttribute("name","viewport"),t.setAttribute("content","width=device-width, initial-scale="+e+", maximum-scale="+e+", minimum-scale="+e+", user-scalable=no"),document.documentElement.firstElementChild.appendChild(t)),window.scrollTo({top:0})},E=Object(l.a)((function(){if(w(1),window.innerWidth>=700){var e=Math.max(Math.min(window.innerWidth/1920,1),.2);i(e)}else j();O((function(){var e=Math.max(Math.min(window.innerWidth/1920,1),.2);document.getElementsByTagName("html")[0].style.fontSize="".concat(e,"px"),window.scrollTo({top:0}),i(e)}))})).IsDone;Object(n.useEffect)((function(){y(!0),document.getElementsByTagName("html")[0].style.fontSize="".concat(t,"px"),window.scrollTo({top:0}),setTimeout((function(){y(!1)}),0)}),[t]);var O=Object(u.a)(j).addCallback;return E&&!b?f("div",{className:o.a.layout},f(r.a,{menuItems:v}),f(c.a,null,f(d.a,null),f(m.a,g),f(p.a,null)),f(r.a,{menuItems:v,bodyStyle:{marginTop:"138rem"}})):null};t.default=function(){return f(s.a,null,f(h,null))}},VJsP:function(e,t,a){"use strict";var n=a("2GTP"),i=a("Y7ZC"),o=a("JB68"),r=a("sNwI"),s=a("NwJ3"),c=a("tEej"),l=a("IP1Z"),u=a("fNZA");i(i.S+i.F*!a("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,a,i,m,d=o(e),p="function"==typeof this?this:Array,f=arguments.length,w=f>1?arguments[1]:void 0,g=void 0!==w,v=0,h=u(d);if(g&&(w=n(w,f>2?arguments[2]:void 0,2)),void 0==h||p==Array&&s(h))for(a=new p(t=c(d.length));t>v;v++)l(a,v,g?w(d[v],v):d[v]);else for(m=h.call(d),a=new p;!(i=m.next()).done;v++)l(a,v,g?r(m,w,[i.value,v],!0):i.value);return a.length=v,a}})},d04V:function(e,t,a){e.exports=a("0tVQ")},qkOz:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/emo",function(){return a("AGVs")}])}},[["qkOz",1,2,0,3,4,5]]]);