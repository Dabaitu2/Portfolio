(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/L07":function(e,t,n){"use strict";var i=n("d04V"),a=n.n(i),o=n("kOwS"),r=n("doui"),s=n("q1tI"),c=n.n(s),l=n("573B"),u=n.n(l),m=n("z6V2"),d=c.a.createElement;t.a=function(e){var t=e.images,n=e.title,i=e.desc,l=e.tags,p=e.details,h=e.mainColor,w=e.detail_images_meta,f=e.video,g=e.affix_image_meta,b=c.a.useRef(),v=c.a.useState(void 0),y=Object(r.a)(v,2),j=y[0],x=y[1];return Object(s.useEffect)((function(){b.current&&document&&(document.onscroll=function(){b.current.getBoundingClientRect().top<700?void 0===j&&(b.current.play(),x(!0)):b.current.getBoundingClientRect().bottom<150&&(b.current.pause(),x(!1))})}),[b,document,j]),d("div",{className:u.a["project-detail-item"],style:{color:h}},d("div",{className:u.a["project-detail-images"]},t.map((function(e){return d(m.a,Object(o.a)({},e,{className:u.a["project-detail-image"]}))}))),d("div",null,d("div",{className:u.a["project-detail-title"]},n),d("div",{className:u.a["project-detail-subtitle"]},i.map((function(e){return d("span",null,e)})))),d("div",{className:u.a["project-detail-details"],style:{backgroundColor:h}},d("div",{className:u.a["project-detail-tags"]},l.map((function(e){return d("span",null,e)}))),d("span",null,p)),d("div",{style:{fontSize:0}},a()({length:w.num}).map((function(e,t){if(0!==t){var n=w.dir+"/"+(t+1).toString();return d(m.a,{src:n+".jpg",sources:[{type:"image/webp",src:n+".webp"}],preview_src:n+"-preview.jpg",preview_sources:[{type:"image/webp",src:n+"-preview.webp"}],className:u.a["project-detail-details-images"]})}})),f?f.map((function(e){return d("div",{style:{width:"1600rem",position:"relative"},onClick:function(){j?(b.current.pause(),x(!1)):(b.current.play(),x(!0))}},d("div",{style:{letterSpacing:"30rem",fontFamily:"Sofia Pro Regular",fontSize:"100rem",lineHeight:"900rem",textAlign:"center",overflow:"hidden",color:"#fff",position:"absolute",width:"100%",display:1==j?"none":"block"}},"PAUSE"),d("video",{src:e.src,ref:b,autoPlay:!1,style:{width:"100%",float:"left"}}))})):null,g?a()({length:g.num}).map((function(e,t){if(0!==t){var n=g.dir+"/"+(w.num+t+1).toString();return d(m.a,{src:n+".jpg",sources:[{type:"image/webp",src:n+".webp"}],preview_src:n+"-preview.jpg",preview_sources:[{type:"image/webp",src:n+"-preview.webp"}],className:u.a["project-detail-details-images"]})}})):null))}},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"39hU":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n("hdxh"),o=n.n(a),r=n("nb+D"),s=n("Jzdk"),c=n("CwR4"),l=n("hMns"),u=n("J2Uf"),m=n("/L07"),d=n("VFHl"),p=n("n2ni"),h=i.createElement,w="/static/images/projectDetails/img",f={title:"xixi4rhino",mainColor:"#9E0601",desc:["a website for rhino protection","by impacting potential consumers directly"],details:"\u2018xixi4rhino\u2019 is a website for Rhino Protection, aiming to change Chinese potential consumers\u2019 rhino horns purchase intention and create better Internet information environment about rhino horns. It\u2019s critical to directly impact the consumption intention of Chinese potential consumers and make them abandon the purchase when rhinos are poached for rhino horns. In the Chinese market, as the Internet plays an import role on consumption decision, we created the website with an entrapping name \u201cRhino Horn Purchase Guide\u201d to induce people to click and browse it. The glitch art video at the beginning contains bloody scene and dialogue box interaction to make potential consumers shocked powerfully. After that, the webpage informs people about the correct knowledge of the rhino horns and encourage them to forward or donate, so that the website could be more widely spread.",tags:["Society Innovation | Web UI and UX Design | Team Work in 5 weeks | Mar 2018 "],images:[{src:w+"7.jpg",sources:[{src:w+"7.webp",type:"image/webp"}],preview_src:w+"7-preview.jpg",preview_sources:[{src:w+"7-preview.webp",type:"image/webp"}],alt:"rhino"}],detail_images_meta:{dir:"/static/images/projectDetails/xixi4rhino",num:7}},g=[{key:"xixi4rhino",label:"xixi4rhino"}],b=function(){var e=Object(s.b)(),t=e.state.scale.scale,n=e.actions,a=n.setScale,w=n.setCurrentTab,b=Object(i.useState)(!0),v=b[0],y=b[1],j=function(){a(1);var e=Math.min(document.body.clientWidth/1920,1),t=document.querySelector('meta[name="viewport"]');t?t.setAttribute("content","width=device-width, initial-scale="+e+", maximum-scale="+e+", minimum-scale="+e+", user-scalable=no"):((t=document.createElement("meta")).setAttribute("name","viewport"),t.setAttribute("content","width=device-width, initial-scale="+e+", maximum-scale="+e+", minimum-scale="+e+", user-scalable=no"),document.documentElement.firstElementChild.appendChild(t)),window.scrollTo({top:0})},x=Object(l.a)((function(){if(w(1),window.innerWidth>=700){var e=Math.max(Math.min(window.innerWidth/1920,1),.2);a(e)}else j();N((function(){var e=Math.max(Math.min(window.innerWidth/1920,1),.2);document.getElementsByTagName("html")[0].style.fontSize="".concat(e,"px"),window.scrollTo({top:0}),a(e)}))})).IsDone;Object(i.useEffect)((function(){y(!0),document.getElementsByTagName("html")[0].style.fontSize="".concat(t,"px"),window.scrollTo({top:0}),setTimeout((function(){y(!1)}),0)}),[t]);var N=Object(u.a)(j).addCallback;return x&&!v?h("div",{className:o.a.layout},h(r.a,{menuItems:g}),h(c.a,null,h(d.a,null),h(m.a,f),h(p.a,null)),h(r.a,{menuItems:g,bodyStyle:{marginTop:"138rem"}})):null};t.default=function(){return h(s.a,null,h(b,null))}},VJsP:function(e,t,n){"use strict";var i=n("2GTP"),a=n("Y7ZC"),o=n("JB68"),r=n("sNwI"),s=n("NwJ3"),c=n("tEej"),l=n("IP1Z"),u=n("fNZA");a(a.S+a.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,a,m,d=o(e),p="function"==typeof this?this:Array,h=arguments.length,w=h>1?arguments[1]:void 0,f=void 0!==w,g=0,b=u(d);if(f&&(w=i(w,h>2?arguments[2]:void 0,2)),void 0==b||p==Array&&s(b))for(n=new p(t=c(d.length));t>g;g++)l(n,g,f?w(d[g],g):d[g]);else for(m=b.call(d),n=new p;!(a=m.next()).done;g++)l(n,g,f?r(m,w,[a.value,g],!0):a.value);return n.length=g,n}})},d04V:function(e,t,n){e.exports=n("0tVQ")},qLNK:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/xixi4rhino",function(){return n("39hU")}])}},[["qLNK",1,2,0,3,4,5]]]);