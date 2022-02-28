// Json del Cuento
import LOS_MUSICOS_DE_BREMEN from '../../assets/losMusicosDeBremen.json'

// Imports Images
import IMG01 from '/image/los-musicos-de-bremen/image01.webp'
import IMG02 from '/image/los-musicos-de-bremen/image02.webp'
import IMG03 from '/image/los-musicos-de-bremen/image03.webp'
import IMG04 from '/image/los-musicos-de-bremen/image04.webp'
import IMG05 from '/image/los-musicos-de-bremen/image05.webp'
import IMG06 from '/image/los-musicos-de-bremen/image06.webp'

function setFilter(a, b) {
  return LOS_MUSICOS_DE_BREMEN.filter((_, index) => index >= a && index <= b)
    .map(text => `
    <p>${text}</p>
  `)
    .join('')
}

document.querySelector('.container').innerHTML = `
  <h1 class="title">Los Musicos De Bremen</h1>
  <button class="return">
    <a href="../../index.html">return</a>
  </button>
  <div class="box-content">
    <img src="${IMG01}" class="image-text">
    ${setFilter(0, 0)}
    <img src="${IMG02}" class="image-text">
    ${setFilter(1, 5)}
    <img src="${IMG03}" class="image-text">
    ${setFilter(6, 10)}
    <img src="${IMG04}" class="image-text">
    ${setFilter(11, 15)}
    <img src="${IMG05}" class="image-text">
    ${setFilter(16, 32)}
    <img src="${IMG06}" class="image-text">
    ${setFilter(33, 33)}
  </div>
`
