(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>b});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),s=t(667),d=t.n(s),c=new URL(t(40),t.b),l=new URL(t(39),t.b),p=new URL(t(335),t.b),u=new URL(t(820),t.b),h=a()(r()),m=d()(c),f=d()(l),g=d()(p),v=d()(u);h.push([e.id,":root {\n    --semitransparent: rgba(255, 255, 255, .75);\n    --border-color: rgba(200, 200, 200);\n    --bg-color: rgba(165, 153, 115, .3);\n    --high-priority-color: rgb(231, 51, 6);\n    --check-mark: url("+m+");\n}\n\n@font-face {\n    font-family: 'Indie Flower';\n    src: url("+f+") format('truetype');    \n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url("+g+") format('truetype');\n}\n\nbody {\n    background: url("+v+");\n    font-size: 2em;\n    font-family: 'Roboto';\n    margin: 0;\n}\n\n#content {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n    height: 100vh;\n}\n\n/* MAIN CONTAINER */\n#container {\n    background-color: var(--semitransparent);\n    width: 80%;\n    min-width: 600px;\n    height: 80vh;\n    min-height: 250px;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 100px 1fr 150px;\n    box-shadow: 0 0 50px black;\n}\n\n#header {\n    grid-column: 1 / 3;\n    background-color: var(--bg-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n    text-shadow: 0 0 5px black;    \n}\n\n#sidebar {\n    border-bottom: 1px solid var(--border-color);\n}\n\n#main-panel {\n    border-left: 1px solid var(--border-color);\n    grid-row: 2 / 4;\n    grid-column: 2 / 3;\n}\n\n/* TODO ITEM */\n.todo-item {\n    font-size: .6em;\n    font-family: \"Indie Flower\", sans-serif;\n    font-weight:bold;\n    display: grid;\n    grid-template-columns: 2fr 1.2fr;\n    grid-template-rows: 2em 1fr;\n}\n\n.high-priority {\n    color: var(--high-priority-color);\n}\n\n.todo-title-panel {\n    font-family: \"Indie Flower\", sans-serif;\n    display: flex;\n    align-items: center;\n    gap: 1em;\n}\n\n.todo-title-panel:hover,\n.todo-title-panel:active,\n.nav-item:hover,\n.nav-item:active {\n    background-color: var(--bg-color);\n}\n\n.todo-checkbox {\n    appearance: none;\n    background-color: white;\n    border: 3px solid black;\n    border-radius: 5px;\n    width: 2.2em;\n    height: 2.2em;\n}\n\n.todo-checkbox:checked {\n    background-color: var(--bg-color);\n}\n\n.todo-checkbox:checked::after {\n    content: '';\n    background-image: var(--check-mark);\n    width: 1.6em;\n    height: 1.6em;\n    background-size: 1.7em;\n    display: inline-block;\n}\n\n.todo-title {\n    width:100%;\n}\n\n.done {\n    opacity: .5;\n}\n\n.done .todo-title {\n    text-decoration: line-through;\n}\n\n.todo-date-edit-trash {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.todo-date {\n\n}\n\n.todo-edit {\n\n}\n\n.todo-trash {\n\n}\n\n.todo-description {\n    grid-row: 2;\n    grid-column: 1 / 3;\n    padding-left: 2.6em;\n    display: none;\n}\n\n/* todo list */\n.list-panel {\n    display: flex;\n    flex-direction: column;\n    gap: .5em;\n}\n\n/* sidebar */\n.nav-panel {\n    padding: 1em;\n    font-size: .7em;\n    display: flex;\n    flex-direction: column;\n    gap: .2em;    \n}\n\n.nav-item {\n    display: flex;\n    gap: 1em;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.nav-item:hover,\n.nav-item:active {\n    cursor: pointer;\n}\n\n.nav-icon-name {\n    display: flex;\n    align-items:flex-start;\n    gap: .5em;\n}\n\n.nav-name {\n\n}\n\n.home-list {\n\n}\n\n.today-list {\n\n}\n\n.week-list {\n\n}\n\n.my-lists {\n\n}\n\n.list-name {\n    font-size: smaller;\n    padding-left: 1em;\n}\n\n.nav-counter {\n    color: white;\n    border: 2px solid black;\n    background-color: black;\n    min-width: 1em;\n    height: 1em;\n    font-size: .6em;\n    font-weight: bold;\n    padding: 2px;\n    text-align: center;\n    border-radius: 50%;\n}\n\n.list-name .nav-counter {\n    background-color: rgb(58, 55, 55);\n    border-color: rgb(58, 55, 55);\n}",""]);const b=h},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var d=e[s],c=o.base?d[0]+o.base:d[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=t(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var m=r(h,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var d=o(e,r),c=0;c<i.length;c++){var l=t(i[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},39:(e,n,t)=>{e.exports=t.p+"599d26584b9afc1d20b1.ttf"},335:(e,n,t)=>{e.exports=t.p+"fc2b5060f7accec5cf74.ttf"},40:(e,n,t)=>{e.exports=t.p+"6a0476def43cb79f7d28.png"},820:(e,n,t)=>{e.exports=t.p+"1498d172818b258564e6.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),a=t.n(i),s=t(565),d=t.n(s),c=t(216),l=t.n(c),p=t(589),u=t.n(p),h=t(426),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const f=t.p+"99e7e9ade87701064d87.png";function g(e){const n=document.createElement("div");return n.id=e,n}function v(e){const n=new Image;return n.src=e,n}function b(e,...n){for(const t of n)e.appendChild(t)}const y=document.getElementById("content"),w=y.appendChild(g("container")),x=y.appendChild(g("header")),k=y.appendChild(g("sidebar")),C=y.appendChild(g("notes-panel")),E=y.appendChild(g("main-panel"));b(w,x,k,C,E);const N=document.createElement("div");N.textContent="TO-DO LIST",N.id="header-text",b(x,v(f),N);const T=t.p+"283e4d837bdf88d00536.png",L=t.p+"f41c0923d34d00328265.png",D=function(e){const n=document.createElement("div");n.className="todo-item";const t=document.createElement("div");t.className="todo-title-panel",t.addEventListener("mouseover",(()=>{c.style.display="block"})),t.addEventListener("mouseout",(()=>{c.style.display="none"}));const o=document.createElement("input");o.type="checkbox",o.addEventListener("change",(e=>{e.target.checked?n.classList.add("done"):n.classList.remove("done")})),o.className="todo-checkbox",t.appendChild(o);const r=document.createElement("div");r.className="todo-title",r.textContent=e.getTitle(),"high"==e.getPriority()&&n.classList.add("high-priority"),t.appendChild(r),n.appendChild(t);const i=document.createElement("div");i.className="todo-date-edit-trash";const a=document.createElement("div");a.textContent=e.getDueDate(),a.className="todo-date",i.appendChild(a);const s=document.createElement("div");s.className="todo-edit",s.appendChild(v(T)),i.appendChild(s);const d=document.createElement("div");d.className="todo-trash",d.appendChild(v(L)),i.appendChild(d),n.appendChild(i);const c=document.createElement("div");return c.className="todo-description",c.textContent=e.getDescription(),n.appendChild(c),n},I=class{constructor(e,n,t,o){this.title=e,this.description=n,this.dueDate=t,this.priority=o,this.selected=!1,this.done=!1}getTitle(){return this.title}setTitle(e){this.title=e}getDescription(){return this.description}setDescription(e){this.description=e}getDueDate(){return this.dueDate}setDueDate(e){this.dueDate=e}getPriority(){return this.priority}setPriority(e){this.priority=e}getSelected(){return this.selected}setSelected(e){this.selected=e}getDone(){return this.done}setDone(e){this.done=e}},S=class{constructor(e){this.name=e,this.todos=[]}getName(){return this.name}setName(e){this.name=e}getTodos(){return this.todos}count(){return this.todos.length}add(e){this.todos.push(e)}remove(e){let n=todos.indexOf(e);this.todos.splice(n,1)}clear(){this.todos=[]}},M=class{constructor(e,n){this.title=e,this.description=n}getTitle(){return this.title}setTitle(e){this.title=e}getDescription(){return this.description}setDescription(e){this.description=e}};let A=new I("write the essay","the essay for my English class","2022-06-20","low"),O=new I("get Amy's kids from school","Amy's kids finish classes two hours earlier today","2022-06-20","high"),j=new I("run 10 km","go to park and run two laps around the lake","2022-06-20","low"),R=new I("get cake","go to Stacy's bakery to collect the birthday cake for Chris","2022-06-21","high"),P=new I("sell the car","look at some ads in local newspapers and online to find someone who wants to buy my car","2022-06-25","low"),F=new I("paint kitchen","get yellow paint and paint all the walls plus ceiling in the kitchen","2022-07-15","low"),U=new S("School"),z=new S("Workout"),Z=new S("Home and Family"),B=new S("Miscellaneous");U.add(A),z.add(j),Z.add(O),Z.add(R),Z.add(F),B.add(P);let $=new class{constructor(){this.lists=[]}getLists(){return this.lists}count(){return this.todos.length}add(e){this.lists.push(e)}remove(e){let n=lists.indexOf(e);this.lists.splice(n,1)}clear(){this.lists=[]}};$.add(U),$.add(z),$.add(Z),$.add(B);let _=new M("shopping list","10 eggs, sugar, milk, apples, flour, 2 big cabbages, mineral water"),H=new M("present idea","Steve wants a new toy car for his fifth birthday."),q=new M("Amy's new address","44 Pearl Avenue, Big Bang City 22650"),J=new M("my password to sth I know about","abc123"),Q=new M("info about Mr. Lee","married, two kids (daughter, 36 and son, 33), math teacher, likes loud music sports, dog person"),W=new class{constructor(){this.notes=[]}getNotes(){return this.notes}count(){return this.notes.length}add(e){this.notes.push(e)}remove(e){let n=notes.indexOf(e);this.notes.splice(n,1)}clear(){this.notes=[]}};W.add(_),W.add(H),W.add(q),W.add(J),W.add(Q);const G=function(e,n){const t=document.createElement("div");t.className="nav-item";const o=document.createElement("div");o.className="nav-icon-name";const r=document.createElement("div");r.className="nav-icon",n&&(r.appendChild(v(n)),o.appendChild(r));const i=document.createElement("div");i.className="nav-name",i.textContent=e.getName(),o.appendChild(i),t.appendChild(o);const a=document.createElement("div");return a.className="nav-counter",a.textContent=e.count(),t.appendChild(a),console.log(e),t};t.p,t.p,t.p,t.p;k.appendChild(function(){const e=document.createElement("div");e.className="nav-panel";const n=document.createElement("div");n.classList.add("my-lists"),n.textContent="My Lists",e.appendChild(n);for(let n of $.getLists()){const t=G(n,"");t.classList.add("list-name"),e.appendChild(t)}return e}());const K=$.getLists()[2];E.appendChild(function(e){const n=document.createElement("div");n.className="list-panel";for(let t of e.getTodos())n.appendChild(D(t));return n}(K))})()})();