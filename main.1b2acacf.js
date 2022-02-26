import"./modulepreload-polyfill.6874861d.js";const t=[{key:"gato",title:"El Gato Con Botas",ruta:"./pages/elGatoConBotas/"},{key:"musico",title:"Los musicos de bremen",ruta:"./pages/losMusicosDeBremen/"}];document.querySelector(".container").innerHTML=`
  ${t.map(e=>`
      <a class="book ${e.key}" href="${e.ruta}">
        ${e.title}
      </a>
    `).join("")}
`;
