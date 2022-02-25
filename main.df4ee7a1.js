import"./modulepreload-polyfill.6874861d.js";var t=[{key:"gato",title:"El Gato Con Botas",ruta:"../pages/elGatoConBotas/index.html"},{key:"mar",title:"El Viejo"}];const e=document.querySelector(".colection-book");e.innerHTML=`
  ${t.map(o=>`
      <a class="book ${o.key}" href="./pages/elGatoConBotas/">
        ${o.title}
      </a>
    `).join("")}
`;
