parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
function t(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=e(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw i}}}}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var r,a,o,i,l,c;function s(t){var e=l[t],n=0;c[Math.floor(t/4)]^=1<<t%4,e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active"),i.innerHTML="0x"+(c.reduce(function(t,e){return 0==e?++n:(t=e.toString(16)+"0".repeat(n)+t,n=0),t},"")||"0")}function u(){if(l)for(var t=0;t<l.length;++t)l[t].onclick=null,l[t].classList.remove("active");l=o.getElementsByClassName("bit"),c=new Array(Math.ceil(l.length/4)).fill(0),i.innerHTML="0x0";for(var e=function(t){l[t].onclick=function(){return s(t)}},n=0;n<l.length;++n)e(n)}function f(e){for(var n=0;n<r.length;++n)r[n].classList.remove("active");e.target.classList.add("active");var i,l=e.target.dataset.board,c=t(a);try{for(c.s();!(i=c.n()).done;){var s=i.value;s.id==l?s!=o&&(o=s,s.style.display="grid",u()):s.style.display="none"}}catch(f){c.e(f)}finally{c.f()}}window.addEventListener("load",function(){r=document.getElementsByClassName("selector"),a=document.getElementsByClassName("board"),o=a[0],i=document.getElementById("bitboard");for(var t=0;t<r.length;++t)r[t].addEventListener("click",f);r[0].classList.add("active"),u()});
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.3b77e0c3.js.map