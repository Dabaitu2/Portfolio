(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"/L07":function(e,t,a){"use strict";var n=a("d04V"),o=a.n(n),i=a("kOwS"),r=a("doui"),s=a("q1tI"),c=a.n(s),l=a("573B"),u=a.n(l),m=a("z6V2"),d=a("J2Uf"),p=a("DzJC"),f=a.n(p),b=c.a.createElement;t.a=function(e){var t=e.images,a=e.title,n=e.desc,l=e.tags,p=e.details,w=e.mainColor,g=e.detail_images_meta,v=e.video,h=e.affix_image_meta,y=c.a.useRef({duration:0,currentTime:0,fake:!0}),j=c.a.useState(void 0),S=Object(r.a)(j,2),N=S[0],k=S[1],E=c.a.useState(!1),_=Object(r.a)(E,2),C=_[0],T=_[1],x=function(e){var t=Object(s.useState)(!0),a=t[0],n=t[1];return{forceUpdate:function(){n(!a)}}}().forceUpdate,O=c.a.useState(0),B=Object(r.a)(O,2),A=B[0],J=B[1];return Object(s.useEffect)((function(){!y.current.fake&&document&&(document.onscroll=function(){y.current.getBoundingClientRect().top<700?void 0===N&&(y.current.play(),k(!0)):y.current.getBoundingClientRect().bottom<150&&(y.current.pause(),k(!1))})}),[y.current,document,N]),(0,Object(d.a)().addMustExecuteCallback)((function(){x()})),Object(s.useEffect)((function(){var e=f()((function(){J(y.current.currentTime/y.current.duration*100)}),500);y.current.fake||y.current.addEventListener("timeupdate",e)}),[y.current,J]),b("div",{className:u.a["project-detail-item"],style:{color:w}},b("div",{className:u.a["project-detail-images"]},t.map((function(e){return b(m.a,Object(i.a)({},e,{className:u.a["project-detail-image"]}))}))),b("div",null,b("div",{className:u.a["project-detail-title"]},a),b("div",{className:u.a["project-detail-subtitle"]},n.map((function(e){return b("span",null,e)})))),b("div",{className:u.a["project-detail-details"],style:{backgroundColor:w}},b("div",{className:u.a["project-detail-tags"]},l.map((function(e){return b("span",null,e)}))),b("span",null,p)),b("div",{style:{fontSize:0}},o()({length:g.num}).map((function(e,t){if(0!==t){var a=g.dir+"/"+(t+1).toString();return b(m.a,{src:a+".jpg",sources:[{type:"image/webp",src:a+".webp"}],preview_src:a+"-preview.jpg",preview_sources:[{type:"image/webp",src:a+"-preview.webp"}],className:u.a["project-detail-details-images"]})}})),v?v.map((function(e){return b("div",{style:{width:"1600rem",position:"relative",height:"900rem",transition:"0.3s ease-in-out",filter:1==N?"none":"opacity(0.9)"},onMouseEnter:function(){T(!0)},onMouseLeave:function(){T(!1)},onClick:function(){N?(y.current.pause(),k(!1)):(y.current.play(),k(!0))}},b("div",{className:u.a["project-detail-stop-icon"],style:{display:1==N?"none":"block"}},"PAUSE"),b("div",{style:{transition:".4s ease",opacity:C?1:0},className:u.a["project-detail-video-control-bar"]},b("div",{className:u.a.bar},b("div",{className:u.a.progress,style:{width:A+"%"}}))),b("video",{src:e.src,ref:y,autoPlay:!1,style:{width:"1600rem",float:"left"}}))})):null,h?o()({length:h.num}).map((function(e,t){if(0!==t){var a=h.dir+"/"+(g.num+t+1).toString();return b(m.a,{src:a+".jpg",sources:[{type:"image/webp",src:a+".webp"}],preview_src:a+"-preview.jpg",preview_sources:[{type:"image/webp",src:a+"-preview.webp"}],className:u.a["project-detail-details-images"]})}})):null))}},"0tVQ":function(e,t,a){a("FlQf"),a("VJsP"),e.exports=a("WEpk").Array.from},"755W":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/bamboo",function(){return a("YsgQ")}])},VJsP:function(e,t,a){"use strict";var n=a("2GTP"),o=a("Y7ZC"),i=a("JB68"),r=a("sNwI"),s=a("NwJ3"),c=a("tEej"),l=a("IP1Z"),u=a("fNZA");o(o.S+o.F*!a("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,a,o,m,d=i(e),p="function"==typeof this?this:Array,f=arguments.length,b=f>1?arguments[1]:void 0,w=void 0!==b,g=0,v=u(d);if(w&&(b=n(b,f>2?arguments[2]:void 0,2)),void 0==v||p==Array&&s(v))for(a=new p(t=c(d.length));t>g;g++)l(a,g,w?b(d[g],g):d[g]);else for(m=v.call(d),a=new p;!(o=m.next()).done;g++)l(a,g,w?r(m,b,[o.value,g],!0):o.value);return a.length=g,a}})},YsgQ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a("hdxh"),i=a.n(o),r=a("nb+D"),s=a("Jzdk"),c=a("CwR4"),l=a("hMns"),u=a("J2Uf"),m=a("/L07"),d=a("VFHl"),p=a("n2ni"),f=n.createElement,b="/static/images/projectDetails/img",w={title:"Bamboo Stool",desc:["an exploration of bamboo craft","in modern aesthetic"],tags:["Stool Design | Bamboo Craft | Personal Work in 4 weeks | Dec 2016 "],mainColor:"#587C62",details:"Bamboo Stool is composed of three groups of repeating raw bamboo strips, exploring the aesthetics of bamboo\u2019s physical properties. To keep the balance between aethetics of raw bamboo strips and the function of load-bearing, I created the special structure of the stool. The three stool legs and the upper surface formed two symmetrical triangles, and every bamboo strip is heated and bent to be crossed or connected with each other. During the handmaking process, Bamboo Stool only requires the same group of mould, according to the construction rule. And I tested di\x1ferent heating temperature, mould sizes and assembly\nmethods to suit raw bamboo strip\u2019s properties.",images:[{src:b+"2.jpg",sources:[{src:b+"2.webp",type:"image/webp"}],preview_src:b+"2-preview.jpg",preview_sources:[{src:b+"2-preview.webp",type:"image/webp"}],alt:"String board"}],detail_images_meta:{dir:"/static/images/projectDetails/bamboo-stool",num:4}},g=[{key:"Bamboo Stool",label:"Bamboo Stool"}],v=function(){var e=Object(s.b)(),t=e.state.scale.scale,a=e.actions,o=a.setScale,b=a.setCurrentTab,v=Object(n.useState)(!0),h=v[0],y=v[1],j=function(){o(1);var e=Math.min(document.body.clientWidth/1920,1),t=document.querySelector('meta[name="viewport"]');t?t.setAttribute("content","width=device-width, initial-scale="+e+", maximum-scale="+e+", minimum-scale="+e+", user-scalable=no"):((t=document.createElement("meta")).setAttribute("name","viewport"),t.setAttribute("content","width=device-width, initial-scale="+e+", maximum-scale="+e+", minimum-scale="+e+", user-scalable=no"),document.documentElement.firstElementChild.appendChild(t)),window.scrollTo({top:0})},S=Object(l.a)((function(){if(b(1),window.innerWidth>=700){var e=Math.max(Math.min(window.innerWidth/1920,1),.2);o(e)}else j();N((function(){var e=Math.max(Math.min(window.innerWidth/1920,1),.2);document.getElementsByTagName("html")[0].style.fontSize="".concat(e,"px"),window.scrollTo({top:0}),o(e)}))})).IsDone;Object(n.useEffect)((function(){y(!0),document.getElementsByTagName("html")[0].style.fontSize="".concat(t,"px"),window.scrollTo({top:0}),setTimeout((function(){y(!1)}),0)}),[t]);var N=Object(u.a)(j).addCallback;return S&&!h?f("div",{className:i.a.layout},f(r.a,{menuItems:g}),f(c.a,null,f(d.a,null),f(m.a,w),f(p.a,null)),f(r.a,{menuItems:g,bodyStyle:{marginTop:"138rem"}})):null};t.default=function(){return f(s.a,null,f(v,null))}},d04V:function(e,t,a){e.exports=a("0tVQ")}},[["755W",1,2,0,20,21,5]]]);