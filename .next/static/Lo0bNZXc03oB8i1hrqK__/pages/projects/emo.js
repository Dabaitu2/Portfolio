(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/L07":function(e,t,a){"use strict";var n=a("d04V"),i=a.n(n),r=a("kOwS"),o=a("doui"),c=a("q1tI"),s=a.n(c),l=a("573B"),u=a.n(l),d=a("z6V2"),m=a("J2Uf"),p=a("DzJC"),f=a.n(p),v=s.a.createElement;t.a=function(e){var t=e.images,a=e.title,n=e.desc,l=e.links,p=e.tags,w=e.details,g=e.mainColor,b=e.detail_images_meta,h=e.video,y=e.affix_image_meta,j=s.a.useRef({duration:0,currentTime:0,fake:!0}),E=s.a.useState(void 0),O=Object(o.a)(E,2),N=O[0],k=O[1],M=s.a.useState(!1),S=Object(o.a)(M,2),T=S[0],_=S[1],A=function(e){var t=Object(c.useState)(!0),a=t[0],n=t[1];return{forceUpdate:function(){n(!a)}}}().forceUpdate,C=s.a.useState(0),x=Object(o.a)(C,2),J=x[0],V=x[1];return Object(c.useEffect)((function(){!j.current.fake&&document&&(document.onscroll=function(){j.current.getBoundingClientRect().top<700?void 0===N&&(j.current.play(),k(!0)):j.current.getBoundingClientRect().bottom<150&&(j.current.pause(),k(!1))})}),[j.current,document,N]),(0,Object(m.a)().addMustExecuteCallback)((function(){A()})),Object(c.useEffect)((function(){var e=f()((function(){V(j.current.currentTime/j.current.duration*100)}),500);j.current.fake||j.current.addEventListener("timeupdate",e)}),[j.current,V]),v("div",{className:u.a["project-detail-item"],style:{color:g}},v("div",{className:u.a["project-detail-images"]},t.map((function(e){return v(d.a,Object(r.a)({},e,{className:u.a["project-detail-image"]}))}))),v("div",null,v("div",{className:u.a["project-detail-title"]},a),v("div",{className:u.a["project-detail-subtitle"]},n.map((function(e){return v("span",null,e)})))),v("div",{className:u.a["project-detail-details"],style:{backgroundColor:g}},v("div",{className:u.a["project-detail-tags"]},p.map((function(e){return v("span",null,e)}))),w.length>0&&v("span",{className:u.a["project-detail-details-desc"]},w)),v("div",{style:{fontSize:0}},i()({length:b.num}).map((function(e,t){if(0!==t){var a=b.dir+"/"+(t+1).toString();return v(d.a,{src:a+".jpg",sources:[{type:"image/webp",src:a+".webp"}],preview_src:a+"-preview.jpg",preview_sources:[{type:"image/webp",src:a+"-preview.webp"}],className:u.a["project-detail-details-images"]})}})),l&&l.map((function(e){return v("a",{className:e.className,href:e.src,target:"blank"},e.desc)})),h?h.map((function(e){return v("div",{style:{width:"1600rem",position:"relative",height:"900rem",transition:"0.3s ease-in-out",filter:1==N?"none":"opacity(0.9)"},onMouseEnter:function(){_(!0)},onMouseLeave:function(){_(!1)},onClick:function(){N?(j.current.pause(),k(!1)):(j.current.play(),k(!0))}},v("div",{className:u.a["project-detail-stop-icon"],style:{display:1==N?"none":"block"}},"PAUSE"),v("div",{style:{transition:".4s ease",opacity:T?1:0},className:u.a["project-detail-video-control-bar"]},v("div",{className:u.a.bar},v("div",{className:u.a.progress,style:{width:J+"%"}}))),v("video",{src:e.src,ref:j,autoPlay:!1,style:{width:"1600rem",float:"left"}}))})):null,y?i()({length:y.num}).map((function(e,t){if(0!==t){var a=y.dir+"/"+(b.num+t+1).toString();return v(d.a,{src:a+".jpg",sources:[{type:"image/webp",src:a+".webp"}],preview_src:a+"-preview.jpg",preview_sources:[{type:"image/webp",src:a+"-preview.webp"}],className:u.a["project-detail-details-images"]})}})):null))}},"0tVQ":function(e,t,a){a("FlQf"),a("VJsP"),e.exports=a("WEpk").Array.from},AGVs:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a("hdxh"),r=a.n(i),o=a("nb+D"),c=a("Jzdk"),s=a("CwR4"),l=a("hMns"),u=a("J2Uf"),d=a("/L07"),m=a("VFHl"),p=a("n2ni"),f=n.createElement,v="/static/images/projectDetails/img",w={title:"EMO",desc:["a programming education robot and","an online education platform"],tags:["Integrated Product Development | STEAM Education Service Design | Team Work in 8 weeks | Oct 2017 "],mainColor:"#304690",details:"EMO is an educational robot, applying applies Arduino to teach children aged 6-12 to learn programming and robot assembly, in order to stimulate creativity and prepare for advanced education. EMO's name comes from emotion. We hope that children could build up emotional connection with EMO robot. EMO has a pleasing appearance with two big eyes and a clear, easy-to-assemble internal structure. In addition to the physical model, we also created an online platform, in order to improve teaching efficiency and parental involvement. The physical robot and the online platform together form a sustainable STEAM education system that provides better services for  studens, teachers and parents.",images:[{src:v+"4.jpg",sources:[{src:v+"4.webp",type:"image/webp"}],preview_src:v+"4-preview.jpg",preview_sources:[{src:v+"4-preview.webp",type:"image/webp"}],alt:"EMO"}],detail_images_meta:{dir:"/static/images/projectDetails/emo",num:7}},g=[{key:"EMO",label:"EMO"}],b=function(){var e=Object(c.b)(),t=e.state.scale.scale,a=e.actions,i=a.setScale,v=a.setCurrentTab,b=Object(n.useState)(!0),h=b[0],y=b[1],j=function(){i(1);var e=Math.min(document.body.clientWidth/1920,1),t=document.querySelector('meta[name="viewport"]');t?t.setAttribute("content","width=device-width, initial-scale="+e+", maximum-scale="+e+", minimum-scale="+e+", user-scalable=no"):((t=document.createElement("meta")).setAttribute("name","viewport"),t.setAttribute("content","width=device-width, initial-scale="+e+", maximum-scale="+e+", minimum-scale="+e+", user-scalable=no"),document.documentElement.firstElementChild.appendChild(t)),window.scrollTo({top:0})},E=Object(l.a)((function(){if(v(1),window.innerWidth>=700){var e=Math.max(Math.min(window.innerWidth/1920,1),.2);i(e)}else j();O((function(){var e=Math.max(Math.min(window.innerWidth/1920,1),.2);document.getElementsByTagName("html")[0].style.fontSize="".concat(e,"px"),window.scrollTo({top:0}),i(e)}))})).IsDone;Object(n.useEffect)((function(){y(!0),document.getElementsByTagName("html")[0].style.fontSize="".concat(t,"px"),window.scrollTo({top:0}),setTimeout((function(){y(!1)}),0)}),[t]);var O=Object(u.a)(j).addCallback;return E&&!h?f("div",{className:r.a.layout},f(o.a,{menuItems:g}),f(s.a,null,f(m.a,null),f(d.a,w),f(p.a,null)),f(o.a,{menuItems:g,bodyStyle:{marginTop:"138rem"}})):null};t.default=function(){return f(c.a,null,f(b,null))}},VJsP:function(e,t,a){"use strict";var n=a("2GTP"),i=a("Y7ZC"),r=a("JB68"),o=a("sNwI"),c=a("NwJ3"),s=a("tEej"),l=a("IP1Z"),u=a("fNZA");i(i.S+i.F*!a("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,a,i,d,m=r(e),p="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,w=void 0!==v,g=0,b=u(m);if(w&&(v=n(v,f>2?arguments[2]:void 0,2)),void 0==b||p==Array&&c(b))for(a=new p(t=s(m.length));t>g;g++)l(a,g,w?v(m[g],g):m[g]);else for(d=b.call(m),a=new p;!(i=d.next()).done;g++)l(a,g,w?o(d,v,[i.value,g],!0):i.value);return a.length=g,a}})},d04V:function(e,t,a){e.exports=a("0tVQ")},qkOz:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/emo",function(){return a("AGVs")}])}},[["qkOz",1,2,0,3,4,5]]]);