(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(81),r=n.n(o),i=n(645),s=n.n(i),a=n(667),d=n.n(a),c=new URL(n(40),n.b),l=new URL(n(39),n.b),p=new URL(n(335),n.b),u=new URL(n(820),n.b),h=s()(r()),m=d()(c),f=d()(l),g=d()(p),b=d()(u);h.push([e.id,":root {\n    --semitransparent: rgba(255, 255, 255, .75);\n    --border-color: rgba(200, 200, 200);\n    --bg-color: rgba(165, 153, 115, .3);\n    --high-priority-color: rgb(231, 51, 6);\n    --check-mark: url("+m+");\n}\n\n@font-face {\n    font-family: 'Indie Flower';\n    src: url("+f+") format('truetype');    \n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url("+g+") format('truetype');\n}\n\nbody {\n    background: url("+b+");\n    font-size: 2em;\n    font-family: 'Roboto';\n    margin: 0;\n}\n\n#content {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n    height: 100vh;\n}\n\n/* MAIN CONTAINER */\n#container {\n    background-color: var(--semitransparent);\n    width: 80%;\n    min-width: 600px;\n    height: 80vh;\n    min-height: 250px;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 100px 1fr 150px;\n    box-shadow: 0 0 50px black;\n}\n\n#header {\n    grid-column: 1 / 3;\n    background-color: var(--bg-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n    text-shadow: 0 0 5px black;    \n}\n\n#sidebar {\n    border-bottom: 1px solid var(--border-color);\n}\n\n#main-panel {\n    border-left: 1px solid var(--border-color);\n    grid-row: 2 / 4;\n    grid-column: 2 / 3;\n}\n\n/* TODO ITEM */\n.todo-item {\n    font-size: .6em;\n    font-family: \"Indie Flower\", sans-serif;\n    font-weight:bold;\n    display: grid;\n    grid-template-columns: 2fr 1.2fr;\n    grid-template-rows: 2em 1fr;\n}\n\n.high-priority {\n    color: var(--high-priority-color);\n    text-transform: uppercase;\n}\n\n.todo-title-panel {\n    font-family: \"Indie Flower\", sans-serif;\n    display: flex;\n    align-items: center;\n    gap: 1em;\n    cursor: pointer;\n}\n\n.todo-title-panel:hover,\n.todo-title-panel:active {\n    color: rgb(68, 63, 63);\n    background-color: var(--bg-color);\n}\n\n.todo-checkbox {\n    appearance: none;\n    background-color: white;\n    border: 3px solid black;\n    border-radius: 5px;\n    width: 2.2em;\n    height: 2.2em;\n}\n\n.todo-checkbox:checked {\n    background-color: var(--bg-color);\n}\n\n.todo-checkbox:checked::after {\n    content: '';\n    background-image: var(--check-mark);\n    width: 1.6em;\n    height: 1.6em;\n    background-size: 1.7em;\n    display: inline-block;\n}\n\n.todo-title {\n    width:100%;\n}\n\n.done {\n    opacity: .5;\n}\n\n.done .todo-title {\n    text-decoration: line-through;\n}\n\n.todo-date-edit-trash {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.todo-date {\n\n}\n\n.todo-edit {\n\n}\n\n.todo-trash {\n\n}\n\n.todo-description {\n    grid-row: 2;\n    grid-column: 1 / 3;\n    padding-left: 2.6em;\n    display: none;\n}\n\n/* todo list */\n.list-panel {\n    display: flex;\n    flex-direction: column;\n    gap: .5em;\n}",""]);const y=h},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(s[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},s=[],a=0;a<e.length;a++){var d=e[a],c=o.base?d[0]+o.base:d[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=n(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var m=r(h,o);o.byIndex=a,t.splice(a,0,{identifier:p,updater:m,references:1})}s.push(p)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var d=o(e,r),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},39:(e,t,n)=>{e.exports=n.p+"599d26584b9afc1d20b1.ttf"},335:(e,t,n)=>{e.exports=n.p+"fc2b5060f7accec5cf74.ttf"},40:(e,t,n)=>{e.exports=n.p+"6a0476def43cb79f7d28.png"},820:(e,t,n)=>{e.exports=n.p+"1498d172818b258564e6.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),s=n.n(i),a=n(565),d=n.n(a),c=n(216),l=n.n(c),p=n(589),u=n.n(p),h=n(426),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const f=n.p+"99e7e9ade87701064d87.png";function g(e){const t=document.createElement("div");return t.id=e,t}function b(e){const t=new Image;return t.src=e,t}function y(e,...t){for(const n of t)e.appendChild(n)}const v=document.getElementById("content"),w=v.appendChild(g("container")),x=v.appendChild(g("header")),k=v.appendChild(g("sidebar")),C=v.appendChild(g("notes-panel")),E=v.appendChild(g("main-panel"));y(w,x,k,C,E);const T=document.createElement("div");T.textContent="TO-DO LIST",T.id="header-text",y(x,b(f),T);const N=n.p+"283e4d837bdf88d00536.png",D=n.p+"f41c0923d34d00328265.png",I=function(e){const t=document.createElement("div");t.className="todo-item";const n=document.createElement("div");n.className="todo-title-panel",n.addEventListener("mouseover",(()=>{c.style.display="block"})),n.addEventListener("mouseout",(()=>{c.style.display="none"}));const o=document.createElement("input");o.type="checkbox",o.addEventListener("change",(e=>{e.target.checked?t.classList.add("done"):t.classList.remove("done")})),o.className="todo-checkbox",n.appendChild(o);const r=document.createElement("div");r.className="todo-title",r.textContent=e.getTitle(),"high"==e.getPriority()&&t.classList.add("high-priority"),n.appendChild(r),t.appendChild(n);const i=document.createElement("div");i.className="todo-date-edit-trash";const s=document.createElement("div");s.textContent=e.getDueDate(),s.className="todo-date",i.appendChild(s);const a=document.createElement("div");a.className="todo-edit",a.appendChild(b(N)),i.appendChild(a);const d=document.createElement("div");d.className="todo-trash",d.appendChild(b(D)),i.appendChild(d),t.appendChild(i);const c=document.createElement("div");return c.className="todo-description",c.textContent=e.getDescription(),t.appendChild(c),t},L=class{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.selected=!1,this.done=!1}getTitle(){return this.title}setTitle(e){this.title=e}getDescription(){return this.description}setDescription(e){this.description=e}getDueDate(){return this.dueDate}setDueDate(e){this.dueDate=e}getPriority(){return this.priority}setPriority(e){this.priority=e}getSelected(){return this.selected}setSelected(e){this.selected=e}getDone(){return this.done}setDone(e){this.done=e}},S=class{constructor(e){this.name=e,this.todos=[]}getName(){return this.name}setName(e){this.name=e}getTodos(){return this.todos}count(){return this.todos.length}add(e){this.todos.push(e)}remove(e){let t=todos.indexOf(e);this.todos.splice(t,1)}clear(){this.todos=[]}},M=class{constructor(e,t){this.title=e,this.description=t}getTitle(){return this.title}setTitle(e){this.title=e}getDescription(){return this.description}setDescription(e){this.description=e}};let A=new L("write the essay","the essay for my English class","2022-06-20","low"),O=new L("get Amy's kids from school","Amy's kids finish classes two hours earlier today","2022-06-20","high"),j=new L("run 10 km","go to park and run two laps around the lake","2022-06-20","low"),R=new L("get cake","go to Stacy's bakery to collect the birthday cake for Chris","2022-06-21","high"),P=new L("sell the car","look at some ads in local newspapers and online to find someone who wants to buy my car","2022-06-25","low"),F=new L("paint kitchen","get yellow paint and paint all the walls plus ceiling in the kitchen","2022-07-15","low"),U=new S("School"),Z=new S("Workout"),B=new S("Home and Family"),$=new S("Miscellaneous");U.add(A),Z.add(j),B.add(O),B.add(R),B.add(F),$.add(P);let _=new class{constructor(){this.lists=[]}getLists(){return this.lists}count(){return this.todos.length}add(e){this.lists.push(e)}remove(e){let t=lists.indexOf(e);this.lists.splice(t,1)}clear(){this.lists=[]}};_.add(U),_.add(Z),_.add(B),_.add($);let z=new M("shopping list","10 eggs, sugar, milk, apples, flour, 2 big cabbages, mineral water"),H=new M("present idea","Steve wants a new toy car for his fifth birthday."),q=new M("Amy's new address","44 Pearl Avenue, Big Bang City 22650"),J=new M("my password to sth I know about","abc123"),Q=new M("info about Mr. Lee","married, two kids (daughter, 36 and son, 33), math teacher, likes loud music sports, dog person"),W=new class{constructor(){this.notes=[]}getNotes(){return this.notes}count(){return this.notes.length}add(e){this.notes.push(e)}remove(e){let t=notes.indexOf(e);this.notes.splice(t,1)}clear(){this.notes=[]}};W.add(z),W.add(H),W.add(q),W.add(J),W.add(Q);const G=_.getLists()[2];E.appendChild(function(e){const t=document.createElement("div");t.className="list-panel";for(let n of e.getTodos())t.appendChild(I(n));return t}(G))})()})();