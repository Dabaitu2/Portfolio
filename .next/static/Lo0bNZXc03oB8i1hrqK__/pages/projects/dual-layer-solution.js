(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"2Eek":function(e,t,n){e.exports=n("W7oM")},"2wwy":function(e,t,n){e.exports=n("nhzr")},"4mXO":function(e,t,n){e.exports=n("7TPF")},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,n){var r=n("Y7ZC"),a=n("uplh"),o=n("NsO/"),i=n("vwuL"),u=n("IP1Z");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=o(e),c=i.f,s=a(r),l={},f=0;s.length>f;)void 0!==(n=c(r,t=s[f++]))&&u(l,t,n);return l}})},Cj2x:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/dual-layer-solution",function(){return n("fZd8")}])},E8gZ:function(e,t,n){var r=n("jmDH"),a=n("w6GO"),o=n("NsO/"),i=n("NV0k").f;e.exports=function(e){return function(t){for(var n,u=o(t),c=a(u),s=c.length,l=0,f=[];s>l;)n=c[l++],r&&!i.call(u,n)||f.push(e?[n,u[n]]:u[n]);return f}}},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),a=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},JT2x:function(e,t,n){e.exports=function(){return new Worker(n.p+"static/9caabd238a5cc9da7503.worker.js")}},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),a=n("Y7ZC"),o=n("JB68"),i=n("sNwI"),u=n("NwJ3"),c=n("tEej"),s=n("IP1Z"),l=n("fNZA");a(a.S+a.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,a,f,p=o(e),v="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,w=void 0!==g,m=0,h=l(p);if(w&&(g=r(g,d>2?arguments[2]:void 0,2)),void 0==h||v==Array&&u(h))for(n=new v(t=c(p.length));t>m;m++)s(n,m,w?g(p[m],m):p[m]);else for(f=h.call(p),n=new v;!(a=f.next()).done;m++)s(n,m,w?i(f,g,[a.value,m],!0):a.value);return n.length=m,n}})},W7oM:function(e,t,n){n("nZgG");var r=n("WEpk").Object;e.exports=function(e,t){return r.defineProperties(e,t)}},XoMD:function(e,t,n){e.exports=n("hYAz")},d04V:function(e,t,n){e.exports=n("0tVQ")},fW1p:function(e,t,n){var r=n("Y7ZC"),a=n("E8gZ")(!1);r(r.S,"Object",{values:function(e){return a(e)}})},fZd8:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("/FpZ"),i=n.n(o),u=n("wXU7"),c=n.n(u),s=n("hMns"),l=n("JT2x"),f=n.n(l),p=n("hfKm"),v=n.n(p),d=n("2Eek"),g=n.n(d),w=n("XoMD"),m=n.n(w),h=n("Jo+v"),j=n.n(h),y=n("4mXO"),b=n.n(y),O=n("pLtp"),S=n.n(O),E=n("ln6h"),x=n.n(E),L=n("vYYK");n("2wwy"),n("p0XB");n("d04V"),n("yLu3");var _=n("eVuF"),Z=n.n(_),P=function(e,t){var n=document.createElement("canvas");return n.setAttribute("width",e),n.setAttribute("height",t),n.getContext("2d")},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new Z.a((function(n,r){var a=new Image;a.onload=function(){var e=a.width*t,r=a.height*t,o=P(e,r);o.drawImage(a,0,0,e,r);var i=o.getImageData(0,0,e,r).data;n(i)};var o=function(){return r(new Error("An error occurred attempting to load image"))};a.onerror=o,a.onabort=o,a.src=e}))};function k(e,t){var n=S()(e);if(b.a){var r=b()(e);t&&(r=r.filter((function(t){return j()(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(L.a)(e,t,n[t])})):m.a?g()(e,m()(n)):k(Object(n)).forEach((function(t){v()(e,t,j()(n,t))}))}return e}var I={ignore:[],scale:1};var W=a.a.createElement,D=function(e){var t=e.src,n=e.alt,a=e.preview_src,o=Object(r.useState)("#e2e2e2"),i=o[0],u=o[1];return Object(s.a)((function(){var e=new Image;e.src=a,e.onload=function(){(function(e){var t,n,r,a=arguments;return x.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:I,t=A({},I,{},t),(n=t).ignore,((r=n.scale)>1||r<=0)&&console.warn("You set scale to ".concat(r,", which isn't between 0-1. This is either pointless (> 1) or a no-op (\u2264 0)")),o.next=6,x.a.awrap(Y(e,r));case 6:return o.abrupt("return",o.sent);case 7:case"end":return o.stop()}}))})(a).then((function(e){var t=new f.a;t.postMessage(e),t.onmessage=function(e){u(e.data)}})).catch((function(e){return console.log(e)}))}})),W("div",{className:"section",style:{backgroundColor:i,transition:"0.6s ease-in-out"}},W("img",{src:t,alt:n}))},N=a.a.createElement;t.default=function(e){return N("div",{className:i.a["solution-layout"]},N(c.a,{licenseKey:"YOUR_KEY_HERE",navigation:!0,scrollingSpeed:600,render:function(){return N(c.a.Wrapper,null,N(D,{preview_src:"/static/images/dualLayerSolution/1-preview.jpg",src:"/static/images/dualLayerSolution/1.jpg",alt:"slide1"}),N(D,{preview_src:"/static/images/dualLayerSolution/2-preview.jpg",src:"/static/images/dualLayerSolution/2.jpg",alt:"slide2"}),N(D,{preview_src:"/static/images/dualLayerSolution/3-preview.jpg",src:"/static/images/dualLayerSolution/3.jpg",alt:"slide3"}),N(D,{preview_src:"/static/images/dualLayerSolution/4-preview.jpg",src:"/static/images/dualLayerSolution/4.jpg",alt:"slide4"}),N(D,{preview_src:"/static/images/dualLayerSolution/5-preview.jpg",src:"/static/images/dualLayerSolution/5.jpg",alt:"slide5"}),N(D,{preview_src:"/static/images/dualLayerSolution/6-preview.jpg",src:"/static/images/dualLayerSolution/6.jpg",alt:"slide6"}),N(D,{preview_src:"/static/images/dualLayerSolution/7-preview.jpg",src:"/static/images/dualLayerSolution/7.jpg",alt:"slide7"}),N(D,{preview_src:"/static/images/dualLayerSolution/8-preview.jpg",src:"/static/images/dualLayerSolution/8.jpg",alt:"slide8"}))}}))}},hMns:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI"),a=function(e,t){var n=Object(r.useState)(!1),a=n[0],o=n[1],i=Object(r.useState)(!1),u=i[0],c=i[1];return Object(r.useEffect)((function(){a||o(!0)}),[]),Object(r.useEffect)((function(){if(a)return e(),c(!0),t?function(){return t()}:function(){return null}}),[a]),{firstLoaded:a,IsDone:u,setIsDone:c}}},hYAz:function(e,t,n){n("7m0m"),e.exports=n("WEpk").Object.getOwnPropertyDescriptors},nZgG:function(e,t,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperties:n("fpC5")})},nhzr:function(e,t,n){n("fW1p"),e.exports=n("WEpk").Object.values},uplh:function(e,t,n){var r=n("ar/p"),a=n("mqlF"),o=n("5K7Z"),i=n("5T2Y").Reflect;e.exports=i&&i.ownKeys||function(e){var t=r.f(o(e)),n=a.f;return n?t.concat(n(e)):t}},vYYK:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("hfKm"),a=n.n(r);function o(e,t,n){return t in e?a()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}}},[["Cj2x",1,2,6,0,5]]]);