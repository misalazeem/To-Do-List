(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"body {\r\n  background-color: #d3d3d3;\r\n  margin: 0 10%;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 10px;\r\n  margin-top: 100px;\r\n  background-color: white;\r\n  box-shadow: rgba(0, 0, 0, 0.28) 0 3px 8px;\r\n  padding: 30px 0;\r\n}\r\n\r\n.container > .row {\r\n  background-color: white;\r\n  border-bottom: 0.5px solid #d3d3d3;\r\n  width: 95%;\r\n  padding: 10px 0;\r\n}\r\n\r\n.container .row:nth-child(3) {\r\n  background-color: white;\r\n  border-bottom: none;\r\n  width: 95%;\r\n  padding: 0;\r\n}\r\n\r\n.container .row:last-child {\r\n  background-color: white;\r\n  border-bottom: none;\r\n  width: 95%;\r\n  padding: 0 0;\r\n}\r\n\r\n.row input {\r\n  outline: none;\r\n  margin: 0;\r\n  border: none;\r\n  width: 100%;\r\n}\r\n\r\n.task-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  border-bottom: 0.5px solid #d3d3d3;\r\n}\r\n\r\n.currenttask {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.task-container input {\r\n  width: auto;\r\n  margin-right: 10px;\r\n}\r\n\r\n.row .clear-button {\r\n  width: 100%;\r\n  padding: 8px 12px;\r\n  font-size: 0.8rem;\r\n  border-radius: 0;\r\n  border: none;\r\n  color: #595959;\r\n  border-bottom: none;\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var u=[].concat(n[s]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=t.base?d[0]+t.base:d[0],u=a[s]||0,p="".concat(s," ").concat(u);a[s]=u+1;var l=e(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)r[l].references++,r[l].updater(f);else{var m=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var d=t(n,o),s=0;s<a.length;s++){var u=e(a[s]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=d}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),c=e(565),d=e.n(c),s=e(216),u=e.n(s),p=e(589),l=e.n(p),f=e(426),m={};m.styleTagTransform=l(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=[{description:"Cook Food",completed:!1,index:0},{description:"Study Time",completed:!1,index:1}];window.onload=void(()=>{const n=document.querySelector(".tasks");h.forEach((r=>{const e=document.createElement("div"),t=document.createElement("label"),o=document.createElement("input");e.setAttribute("class","task-container"),t.setAttribute("class","currenttask"),o.setAttribute("type","checkbox"),o.checked=r.completed,t.appendChild(o),t.appendChild(document.createTextNode(r.description)),e.appendChild(t),n.appendChild(e)}))})()})()})();