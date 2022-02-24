import BOOK_ONE from '../assets/bookOne.json'
import PICTURE_ONE from '/picture01.png'

class BookOne extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get styles() {
    return `
      :host {}

      .container {
        background-color: #181818;
        color: white;
        padding: 8px 1rem;
        margin: 0.4rem;
        border-radius: 5px;
        font-size: 1.5em;
        cursor: pointer;
      }

      .container:hover {
        background-color: #f2f0ef;
        color: #181818;
      }
    `
  }

  connectedCallback() {
    this.render()
    this.boxGeneral = this.shadowRoot.querySelector('.container')
    this.boxGeneral.addEventListener('click', () => this.setClick())
    this.titleDocument = document.querySelector('body .container')
  }

  setClick() {
    this.titleDocument.style.background = 'none'
    this.titleDocument.innerHTML = this.getTemplate()
  }

  getTemplate() {
    this.titleDocument.classList.add('new-container')
    const page = `
      <h2 class="sub-title">
        Corazon que si Siente
      </h2>
      ${
        BOOK_ONE.map(date => `<p class='text-parrafo'>${date}</p>`)
          .join('')
      }
      <img src=${PICTURE_ONE} class="img-end">
    `
    return page
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${BookOne.styles}</style>
      <div class="container">
        Corazon que si Siente
      </div>
    `
  }
}

customElements.define('book-one', BookOne)
