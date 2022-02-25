// Styles
import './index.css'

import LIST_BOOKS from './assets/listBooks.json'

const listBooks = document.querySelector('.colection-book')
listBooks.innerHTML = `
  ${
    LIST_BOOKS.map(book => `
      <a class="book ${book.key}" href="${book.ruta}">
        ${book.title}
      </a>
    `)
    .join('')
  }
`
