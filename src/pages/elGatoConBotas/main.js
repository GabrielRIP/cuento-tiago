// Json del Cuento
import EL_GATO_CON_BOTAS from '../../assets/elGatoConBotas.json'

// Imports Images
import IMG01 from '/image/gato-con-botas/img01.webp'
import IMG02 from '/image/gato-con-botas/img02.webp'
import IMG03 from '/image/gato-con-botas/img03.webp'
import IMG04 from '/image/gato-con-botas/img04.webp'
import IMG05 from '/image/gato-con-botas/img05.webp'
import IMG06 from '/image/gato-con-botas/img06.webp'

function setFilter(a, b) {
  return EL_GATO_CON_BOTAS.filter((_, index) => index >= a && index <= b)
    .map(text => `
    <p>${text}</p>
  `)
    .join('')
}

document.querySelector('.container').innerHTML = `
  <h1 class="title">El Gato Con Botas</h1>
  <button class="return">
    <a href="../../index.html">return</a>
  </button>
  <div class="box-content">
    <img src="${IMG01}" class="image-text">
    ${setFilter(0, 3)}
    <img src="${IMG02}" class="image-text">
    ${setFilter(4, 7)}
    <img src="${IMG03}" class="image-text">
    ${setFilter(8, 10)}
    <img src="${IMG04}" class="image-text">
    ${setFilter(11, 14)}
    <img src="${IMG05}" class="image-text">
    ${setFilter(15, 17)}
    <img src="${IMG06}" class="image-text">
    ${setFilter(18, 18)}
  </div>
`
