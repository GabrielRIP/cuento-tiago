// Json del Cuento
import LA_LIEBRE_Y_LA_TORTUGA from '../../assets/laLiebreYLaTortuga.json'

// Imports Images
import IMG01 from '/image/la-liebre-y-la-tortuga/image01.webp'
import IMG02 from '/image/la-liebre-y-la-tortuga/image02.webp'
import IMG03 from '/image/la-liebre-y-la-tortuga/image03.webp'
import IMG04 from '/image/la-liebre-y-la-tortuga/image04.webp'
import IMG05 from '/image/la-liebre-y-la-tortuga/image05.webp'
import IMG06 from '/image/la-liebre-y-la-tortuga/image06.webp'
import IMG07 from '/image/la-liebre-y-la-tortuga/image07.webp'

function setFilter(a, b) {
  return LA_LIEBRE_Y_LA_TORTUGA.filter((_, index) => index >= a && index <= b)
    .map(text => `
    <p>${text}</p>
  `)
    .join('')
}

document.querySelector('.container').innerHTML = `
  <h1 class="title">La Liebre y la Tortuga</h1>
  <button class="return">
    <a href="../../index.html">return</a>
  </button>
  <div class="box-content">
    <p class="text-prologo">
      <strong style="color: tomato">La liebre y la tortuga</strong> es una de las <strong style="color: tomato">fábulas de Esopo</strong>, o al menos a este famoso autor griego ha sido atribuida. Es una de las <strong style="color: tomato">fábulas infantiles</strong> más famosas, una historia con una moraleja interesante que analizaremos después de haberla leído.
    </p>
    <p class="text-prologo">
      Aunque como decíamos, la fábula se atribuye a <strong style="color: tomato">Esopo</strong>, fue posteriormente reescrita por otros autores como <strong style="color: tomato">Jean de La Fontaine y Félix María Samaniego</strong>. Como todas las fábulas, se trata de un cuento corto; vamos a leerlo juntos.
    </p>
    <img src="${IMG01}" class="image-text">
    ${setFilter(0, 1)}
    <img src="${IMG02}" class="image-text">
    ${setFilter(2, 6)}
    <img src="${IMG03}" class="image-text">
    ${setFilter(7, 7)}
    <img src="${IMG04}" class="image-text">
    ${setFilter(8, 8)}
    <img src="${IMG05}" class="image-text">
    ${setFilter(9, 9)}
    <img src="${IMG06}" class="image-text">
    ${setFilter(10, 10)}
    <img src="${IMG07}" class="image-text">
    ${setFilter(11, 11)}
  </div>
`
