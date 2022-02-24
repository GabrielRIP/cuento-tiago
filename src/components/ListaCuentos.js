import './BookOne.js'
import './BookTwo.js'
import './BookThree.js'
import './BookFour.js'
import './BookFive.js'

class ListaCuentos extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get styles() {
    return `
      :host {
        user-select: none
      }
      .container {
        position: absolute;
        bottom: 4rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 90%;
      }
    `
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${ListaCuentos.styles}</style>
      <div class="container">
        <book-one></book-one>
        <book-two></book-two>
        <book-three></book-three>
        <book-four></book-four>
        <book-five></book-five>
      </div>
    `
  }
}

customElements.define('lista-cuentos', ListaCuentos)
