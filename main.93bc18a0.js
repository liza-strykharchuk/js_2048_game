parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r){return o(r)||n(r)||e(r)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(r,t){if(r){if("string"==typeof r)return a(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(r,t):void 0}}function n(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function o(r){if(Array.isArray(r))return a(r)}function a(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var i,c=document.querySelector(".button"),u=document.querySelector(".game-field"),f=document.querySelector(".game-score"),s=document.querySelector(".message-lose"),l=document.querySelector(".message-win"),d=document.querySelector(".message-start"),v=4,m=4,h=0,y=function(r){return r.filter(function(r){return 0!==r})};function g(r,t){for(var e=0;e<m;e++)for(var n=0;n<v;n++)if(r[e][n]!==t[e][n])return!0;return!1}function p(r){for(var t=y(r),e=0;e<t.length-1;e++)t[e]===t[e+1]&&(t[e]*=2,t.splice(e+1,1),h+=t[e]);for(;t.length<v;)t.push(0);return t}var b=function(){for(var r=0;r<v;r++)for(var t=0;t<v;t++)if(0===i[r][t])return!0;return!1};function A(){for(var r=0;r<v;r++)for(var t=0;t<v;t++){var e=u.rows[r].cells[t];e.className="field-cell field-cell--".concat(i[r][t]),e.textContent=i[r][t]||""}}function w(){if(b())for(var r=!1;!r;){var t=Math.floor(Math.random()*v),e=Math.floor(Math.random()*v);0===i[t][e]&&(i[t][e]=2,A(),r=!0)}}var S=function(r){return r[0].map(function(t,e){return r.map(function(r){return r[e]})})};function L(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=0;t<v;t++){var e=r[t];e=p(e),r[t]=e}}function k(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=0;t<v;t++){var e=r[t].reverse();e=p(e),r[t]=e.reverse()}}function q(){var r=S(i);k(r),i=S(r)}function M(){var r=S(i);L(r),i=S(r)}var j=function(){for(var r=0;r<i[0].length;r++)for(var t=0;t<i.length;t++)if(2048===i[r][t])return!0;return!1},x=function(r){for(var t=0;t<v;t++)for(var e=0;e<v-1;e++)if(r[t][e]===r[t][e+1])return!0;return!1},C=function(r){if(b())return!1;var t=S(r);return!x(t)&&!x(r)};function E(t){return t.map(function(t){return r(t)})}c.addEventListener("click",function(){c.classList.toggle("start",!1),c.classList.toggle("restart",!0),c.innerText="Restart",l.classList.add("hidden"),s.classList.add("hidden"),d.classList.add("hidden"),i=Array.from({length:v},function(){return Array(v).fill(0)}),h=0,f.textContent=h,w(),w()}),document.addEventListener("keydown",function(r){if(C(i)&&s.classList.remove("hidden"),j())l.classList.remove("hidden"),A();else{var t=E(i);switch(r.key){case"ArrowLeft":L();break;case"ArrowRight":k();break;case"ArrowDown":q();break;case"ArrowUp":M()}g(t,i)&&(w(),A())}f.textContent=h});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.93bc18a0.js.map