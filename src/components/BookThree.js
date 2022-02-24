class BookThree extends HTMLElement {
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
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${BookThree.styles}</style>
      <div class="container">
        El Aplauso
      </div>
    `
  }
}

customElements.define('book-three', BookThree)