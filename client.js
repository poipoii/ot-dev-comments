parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var c={};function h(e){for(var r,o=/\+/g,n=/([^&=]+)=?([^&]*)/g,p=function(e){return decodeURIComponent(e.replace(o," "))},a={};r=n.exec(e);)a[p(r[1])]=p(r[2]);return a}function d(e){var r=[];for(var o in e)e.hasOwnProperty(o)&&e[o]&&r.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return r.join("&")}c.deparam=h,c.param=d;var e=h(location.search.substr(1)),i=e.utterances;if(i){delete e.utterances;var f=d(e);f.length&&(f="?"+f),history.replaceState(void 0,document.title,location.pathname+f+location.hash)}var b=document.currentScript;void 0===b&&(b=document.querySelector("script[src^=\"https://poipoii.github.io/ot-dev-comments/client.js\"],script[src^=\"http://localhost:4000/client.js\"]"));for(var a={},g=0;g<b.attributes.length;g++){var j=b.attributes.item(g);a[j.name.replace(/^data-/,"")]=j.value}var k=document.querySelector("link[rel='canonical']");a.url=k?k.href:location.origin+location.pathname+location.search,a.origin=location.origin,a.pathname=location.pathname.length<2?"index":location.pathname.substr(1).replace(/\.\w+$/,""),a.title=document.title;var l=document.querySelector("meta[name='description']");a.description=l?l.content:"";var m=document.querySelector("meta[property='og:title'],meta[name='og:title']");a["og:title"]=m?m.content:"",a.token=i,document.head.insertAdjacentHTML("afterbegin","<style>\n    .utterances {\n      position: relative;\n      box-sizing: border-box;\n      width: 100%;\n      max-width: 760px;\n      min-height: 300px;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    .utterances-frame {\n      position: absolute;\n      left: 0;\n      right: 0;\n      width: 1px;\n      min-width: 100%;\n      max-width: 100%;\n      height: 100%;\n      border: 0;\n    }\n  </style>");var n=b.src.match(/^https:\/\/ot-dev\.cf|https:\/\/poipoii\.github.io\/ot-dev-comments|http:\/\/localhost:\d+/)[0],o=n+"/utterances.html";b.insertAdjacentHTML("afterend","<div class=\"utterances\">\n    <iframe class=\"utterances-frame\" title=\"Comments\" scrolling=\"no\" src=\""+o+"?"+d(a)+"\"></iframe>\n  </div>");var p=b.nextElementSibling;b.parentElement.removeChild(b),addEventListener("message",function(t){if(t.origin===n){var a=t.data;a&&"resize"===a.type&&a.height&&(p.style.height=a.height+"px")}});c.__esModule=true;return{"D53L":{},"ieWq":c};});