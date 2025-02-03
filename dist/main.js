(()=>{"use strict";var e={348:(e,t,r)=>{r.d(t,{A:()=>s});var o=r(601),n=r.n(o),a=r(314),i=r.n(a)()(n());i.push([e.id,'main{flex:2}section{max-width:800px;margin:50px auto}body{font-family:"Helvetica",sans-serif;line-height:1.6;background-color:#f5f5f5;color:#333;padding:0;margin:0;display:flex;flex-direction:column;min-height:100vh}a{color:#007bff;transition:color .3s ease}a:hover{color:#0056b3}button{font-size:1rem;padding:10px 20px;border-radius:5px;background-color:#007bff;color:#fff;transition:background-color .3s ease}button:hover{background-color:#0056b3}',""]);const s=i},306:(e,t,r)=>{r.d(t,{A:()=>s});var o=r(601),n=r.n(o),a=r(314),i=r.n(a)()(n());i.push([e.id,"footer{background-color:#333;color:#fff;padding:20px 0;text-align:center;position:absolute;bottom:0;width:100%}footer p{font-size:.9rem}footer a{color:#fc0}footer a:hover{color:#fff}",""]);const s=i},923:(e,t,r)=>{r.d(t,{A:()=>s});var o=r(601),n=r.n(o),a=r(314),i=r.n(a)()(n());i.push([e.id,"form{border:1px solid #545454;border-radius:3px;padding:40px;max-width:600px;margin:50px auto;padding:20px;background-color:#fff;box-shadow:0 4px 8px rgba(0,0,0,.1);border-radius:8px}form input,form textarea{width:100%;padding:10px;margin:10px 0;border-radius:5px;border:1px solid #ddd}form input:focus,form textarea:focus{border-color:#007bff}form button{width:100%;padding:12px;background-color:#007bff;color:#fff;border-radius:5px}form button:hover{background-color:#0056b3}",""]);const s=i},752:(e,t,r)=>{r.d(t,{A:()=>s});var o=r(601),n=r.n(o),a=r(314),i=r.n(a)()(n());i.push([e.id,"header{display:flex;justify-content:space-between;padding:10px 40px;background-color:#333;color:#fff;padding:20px 0;text-align:center}header h1{font-size:2.5rem;font-weight:bold}header nav{margin-top:10px}header nav a{margin:0 15px;color:#fff;font-size:1.1rem;text-transform:uppercase;letter-spacing:1px}header nav a:hover{color:#fc0}",""]);const s=i},561:(e,t,r)=>{r.d(t,{A:()=>s});var o=r(601),n=r.n(o),a=r(314),i=r.n(a)()(n());i.push([e.id,'*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}',""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,o,n,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function r(e){for(var r=-1,o=0;o<t.length;o++)if(t[o].identifier===e){r=o;break}return r}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var f=r(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=n(p,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var a=o(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=o(e,n),l=0;l<a.length;l++){var d=r(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},659:e=>{var t={};e.exports=function(e,r){var o=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,document.getElementById("urlForm").addEventListener("submit",(function(e){var t;e.preventDefault(),t=document.getElementById("name").value,console.log("::: Running checkForName :::",t),["Picard","Janeway","Kirk","Archer","Georgiou"].includes(t)?alert("Welcome, Captain!"):alert("Enter a valid captain name")}));var o=r(72),n=r.n(o),a=r(825),i=r.n(a),s=r(659),c=r.n(s),l=r(56),d=r.n(l),u=r(540),f=r.n(u),p=r(113),m=r.n(p),b=r(561),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=f(),n()(b.A,h),b.A&&b.A.locals&&b.A.locals;var v=r(348),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=f(),n()(v.A,g),v.A&&v.A.locals&&v.A.locals;var x=r(306),y={};y.styleTagTransform=m(),y.setAttributes=d(),y.insert=c().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=f(),n()(x.A,y),x.A&&x.A.locals&&x.A.locals;var A=r(923),k={};k.styleTagTransform=m(),k.setAttributes=d(),k.insert=c().bind(null,"head"),k.domAPI=i(),k.insertStyleElement=f(),n()(A.A,k),A.A&&A.A.locals&&A.A.locals;var T=r(752),w={};w.styleTagTransform=m(),w.setAttributes=d(),w.insert=c().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=f(),n()(T.A,w),T.A&&T.A.locals&&T.A.locals})();