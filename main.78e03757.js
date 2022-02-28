import"./modulepreload-polyfill.6874861d.js";const t=[{key:"gato",title:"El Gato Con Botas",ruta:"./pages/elGatoConBotas/"},{key:"musico",title:"Los Musicos de Bremen",ruta:"./pages/losMusicosDeBremen/"},{key:"liebre-tortuga",title:"La Liebre y la Tortuga",ruta:"./pages/laLiebreYLaTortuga/"},{key:"los-tres-cerditos",title:"Los tres Cerditos",ruta:"./pages/losTresCerditos/"}];document.querySelector(".container").innerHTML=`
  ${t.map(e=>`
      <a class="book ${e.key}" href="${e.ruta}">
        ${e.title}
      </a>
    `).join("")}
`;
