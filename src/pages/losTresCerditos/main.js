// Json del Cuento
import LOS_TRES_CERDITOS from '../../assets/losTresCerditos.json'

// Imports Images
import IMG01 from '/image/los-tres-cerditos/image01.webp'
import IMG02 from '/image/los-tres-cerditos/image02.webp'
import IMG03 from '/image/los-tres-cerditos/image03.webp'
import IMG04 from '/image/los-tres-cerditos/image04.webp'
import IMG05 from '/image/los-tres-cerditos/image05.webp'
import IMG06 from '/image/los-tres-cerditos/image06.webp'
import IMG07 from '/image/los-tres-cerditos/image07.webp'
import IMG08 from '/image/los-tres-cerditos/image08.webp'
import IMG09 from '/image/los-tres-cerditos/image09.webp'
import IMG10 from '/image/los-tres-cerditos/image10.webp'
import IMG11 from '/image/los-tres-cerditos/image11.webp'
import IMG12 from '/image/los-tres-cerditos/image12.webp'
import IMG13 from '/image/los-tres-cerditos/image13.webp'
import IMG14 from '/image/los-tres-cerditos/image14.webp'
import IMG15 from '/image/los-tres-cerditos/image15.webp'

function setFilter(a, b) {
  return LOS_TRES_CERDITOS.filter((_, index) => index >= a && index <= b)
    .map(text => `
    <p>${text}</p>
  `)
    .join('')
}

document.querySelector('.container').innerHTML = `
  <h1 class="title">Los tres Cerditos</h1>
  <button class="return">
    <a href="../../index.html">return</a>
  </button>
  <div class="box-content">
    <p class="text-prologo">
      <strong style="color: tomato">Los tres cerditos</strong> eran tres hermanos que deciden construirse una casita cada uno a su manera para protegerse del lobo feroz. Seguro que todos conocéis esa versión del <strong style="color: tomato">cuento de los tres cerditos y el lobo feroz</strong> que quería comérselos. Pero ¿y si hubiera otro final para el cuento de <strong style="color: tomato">los 3 cerditos</strong> que no te imaginas…? A veces las apariencias engañan y no todo es como parece.
    </p>
    <img src="${IMG01}" class="image-text">
    ${setFilter(0, 2)}
    <img src="${IMG02}" class="image-text">
    ${setFilter(3, 3)}
    <img src="${IMG03}" class="image-text">
    ${setFilter(4, 4)}
    <img src="${IMG04}" class="image-text">
    ${setFilter(5, 5)}
    <img src="${IMG05}" class="image-text">
    ${setFilter(6, 8)}
    <img src="${IMG06}" class="image-text">
    ${setFilter(9, 10)}
    <img src="${IMG07}" class="image-text">
    ${setFilter(11, 12)}
    <img src="${IMG08}" class="image-text">
    ${setFilter(13, 14)}
    <img src="${IMG09}" class="image-text">
    ${setFilter(15, 17)}
    <img src="${IMG10}" class="image-text">
    ${setFilter(18, 21)}
    <img src="${IMG11}" class="image-text">
    ${setFilter(22, 25)}
    <img src="${IMG12}" class="image-text">
    ${setFilter(26, 31)}
    <img src="${IMG13}" class="image-text">
    ${setFilter(32, 37)}
    <img src="${IMG14}" class="image-text">
    ${setFilter(38, 40)}
    <img src="${IMG15}" class="image-text">
    ${setFilter(41, 41)}
  </div>
`
