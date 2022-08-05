(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(39),t.b),p=new URL(t(335),t.b),l=new URL(t(820),t.b),u=i()(o()),f=s()(d),m=s()(p),h=s()(l);u.push([e.id,":root {\n    --semitransparent: rgba(255, 255, 255, .75);\n    --border-color: rgba(200, 200, 200);\n}\n\n@font-face {\n    font-family: 'Indie Flower';\n    src: url("+f+") format('truetype');    \n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url("+m+") format('truetype');\n}\n\nbody {\n    background: url("+h+");\n    font-size: 2em;\n    font-family: 'Roboto';\n    margin: 0;\n}\n\n#content {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n    height: 100vh;\n}\n\n/* MAIN CONTAINER */\n#container {\n    background-color: var(--semitransparent);\n    width: 80%;\n    min-width: 600px;\n    height: 80vh;\n    min-height: 250px;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 100px 1fr 150px;\n    box-shadow: 0 0 50px black;\n}\n\n#header {\n    grid-column: 1 / 3;\n    background-color: rgba(165, 153, 115, .3);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n    text-shadow: 0 0 5px black;    \n}\n\n#sidebar {\n    border-bottom: 1px solid var(--border-color);\n}\n\n#main-panel {\n    border-left: 1px solid var(--border-color);\n    grid-row: 2 / 4;\n    grid-column: 2 / 3;\n}",""]);const v=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var p=t(a[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},39:(e,n,t)=>{e.exports=t.p+"599d26584b9afc1d20b1.ttf"},335:(e,n,t)=>{e.exports=t.p+"fc2b5060f7accec5cf74.ttf"},820:(e,n,t)=>{e.exports=t.p+"1498d172818b258564e6.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),p=t.n(d),l=t(589),u=t.n(l),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"99e7e9ade87701064d87.png";function v(e){const n=document.createElement("div");return n.id=e,n}function g(e,...n){for(const t of n)e.appendChild(t)}const b=document.getElementById("content"),y=b.appendChild(v("container")),x=b.appendChild(v("header"));g(y,x,b.appendChild(v("sidebar")),b.appendChild(v("notes-panel")),b.appendChild(v("main-panel")));const w=document.createElement("div");w.textContent="TO-DO LIST",w.id="header-text",g(x,function(e){const n=new Image;return n.src=e,n}(h),w)})()})();