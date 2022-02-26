import"./modulepreload-polyfill.6874861d.js";var e=[{key:"gato",title:"El Gato Con Botas",ruta:"pages/elGatoConBotas/"},{key:"mar",title:"El Viejo"}];const o=document.querySelector(".colection-book");o.innerHTML=`
  ${e.map(t=>`
      <a class="book ${t.key}" href="${t.ruta}">
        ${t.title}
      </a>
    `).join("")}
`;
