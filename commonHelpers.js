(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let s=document.querySelectorAll(".menu-list");function c(){document.getElementById("myModal").classList.remove("is-open")}s.forEach(function(n){n.addEventListener("click",c)});window.onclick=function(n){let o=document.getElementById("myModal");n.target==o&&document.getElementById("myModal").classList.remove("is-open")};document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(o){o.preventDefault();const i=this.getAttribute("href").substring(1),r=document.getElementById(i);if(r){const e=r.offsetTop-40;window.scrollTo({top:e,behavior:"smooth"})}})})});
//# sourceMappingURL=commonHelpers.js.map
