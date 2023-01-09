(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function d(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=d(n);fetch(n.href,i)}})();let s;const h=new Uint8Array(16);function v(){if(!s&&(s=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(h)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function L(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),p={randomUUID:E};function I(e,t,d){if(p.randomUUID&&!t&&!e)return p.randomUUID();e=e||{};const o=e.random||(e.rng||v)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){d=d||0;for(let n=0;n<16;++n)t[d+n]=o[n];return t}return L(o)}const y="TODO_LIST",f=document.getElementById("addTodo"),g=document.getElementById("todos"),x=document.getElementById("clear"),D=document.getElementById("todo");let m=!1;const l=()=>{const e=localStorage.getItem(y);return JSON.parse(e??"[]")},u=e=>(localStorage.setItem(y,JSON.stringify(e)),e),c=e=>{g.innerHTML="",e.forEach(t=>{const d=document.createElement("div"),o=document.createElement("p"),n=document.createElement("button");d.classList.add("todoDiv"),o.innerHTML=t.text,o.style.textDecoration=t.complete?"line-through":"none",o.style.cursor="pointer",n.innerHTML="x",n.addEventListener("click",()=>c(S(t.id))),o.addEventListener("click",()=>c(U(t.id))),o.addEventListener("mouseover",()=>{m||(o.style.textDecoration=t.complete?"none":"line-through")}),o.addEventListener("mouseleave",()=>{m=!1,o.style.textDecoration=t.complete?"line-through":"none"}),g.appendChild(d),d.appendChild(n),d.appendChild(o)})},T=e=>u([...l(),{text:e,complete:!1,id:I()}]),S=e=>u(l().filter(t=>t.id!==e)),U=e=>{const t=l(),d=t.findIndex(o=>o.id===e);return t[d].complete=!t[d].complete,m=!0,u(t)};c(l());f.addEventListener("submit",e=>{e.preventDefault(),e.stopImmediatePropagation();const d=new FormData(e.target).get("todo");if(!d)return;const o=T(d.toString());D.value="",c(o)});x.addEventListener("click",()=>{c(u([]))});
