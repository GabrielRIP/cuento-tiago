const s=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};s();var c=[{key:"gato",title:"El Gato Con Botas",ruta:"./pages/elGatoConBotas.html"},{key:"mar",title:"El Viejo"}];const a=document.querySelector(".colection-book");a.innerHTML=`
  ${c.map(o=>`
      <a class="book ${o.key}" href="${o.ruta}">
        ${o.title}
      </a>
    `).join("")}
`;
