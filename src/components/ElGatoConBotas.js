import EL_GATO_CON_BOTAS from '../assets/elGatoConBotas.json'

// Imports Images
import IMG01 from '/image/gato-con-botas/img01.png'
import IMG02 from '/image/gato-con-botas/img02.png'
import IMG03 from '/image/gato-con-botas/img03.png'
import IMG04 from '/image/gato-con-botas/img04.png'
import IMG05 from '/image/gato-con-botas/img05.png'
import IMG06 from '/image/gato-con-botas/img06.png'

class ElGatoConBotas extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get styles() {
    return `
      :host {}

      .title {
        font-family: RammettoOne;
        display: inline-block;
        margin: 4rem 0 2rem 0;
        color: #2B7EE3;
      }
      .return {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background-color: #04aa6d;
        border: none;
        font-size: 1.2em;
        padding: 5px 1rem;
        border-radius: 5px;
      }
      .return:active {
        background-color: #191919;
      }

      .return a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        cursor: none;
      }

      .box-content {
        padding: 0 2rem;
      }

      .image-neko {
        width: 100%;
        border-radius: 1rem;
      }

      p {
        font-size: 2em;
        font-family: Sriracha;
        color: #13354A;
        text-align: justify;
      }
    `
  }

  connectedCallback() {
    this.render()
  }

  setFilter(a, b) {
    return EL_GATO_CON_BOTAS.filter((_, index) => index >= a && index <= b)
      .map(text => `
      <p>${text}</p>
    `)
      .join('')
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${ElGatoConBotas.styles}</style>
      <h1 class="title">El Gato Con Botas</h1>
      <button class="return">
        <a href="../index.html">return</a>
      </button>
      <div class="box-content">
        <img src="${IMG01}" class="image-neko">
        ${this.setFilter(0, 3)}
        <img src="${IMG02}" class="image-neko">
        ${this.setFilter(4, 7)}
        <img src="${IMG03}" class="image-neko">
        ${this.setFilter(8, 10)}
        <img src="${IMG04}" class="image-neko">
        ${this.setFilter(11, 14)}
        <img src="${IMG05}" class="image-neko">
        ${this.setFilter(14, 18)}
        <img src="${IMG06}" class="image-neko">
      </div>
    `
  }
}

customElements.define('el-gato-con-botas', ElGatoConBotas)
