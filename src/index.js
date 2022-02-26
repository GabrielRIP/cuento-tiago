const LIST_BOOKS = [
  { key: 'gato', title: 'El Gato Con Botas', ruta: './pages/elGatoConBotas/' },
  { key: 'musico', title: 'Los musicos de bremen', ruta: './pages/losMusicosDeBremen/' }
]

document.querySelector('.container').innerHTML = `
  ${
    LIST_BOOKS.map(book => `
      <a class="book ${book.key}" href="${book.ruta}">
        ${book.title}
      </a>
    `)
    .join('')
  }
`
