const LIST_BOOKS = [
  { key: 'gato', title: 'El Gato Con Botas', ruta: './pages/elGatoConBotas/' },
  { key: 'musico', title: 'Los Musicos de Bremen', ruta: './pages/losMusicosDeBremen/' },
  { key: 'liebre-tortuga', title: 'La Liebre y la Tortuga', ruta: './pages/laLiebreYLaTortuga/' }
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
