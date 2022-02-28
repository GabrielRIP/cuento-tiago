const path = require('path')
const { defineConfig } = require('vite')
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const base = mode === 'production' ? '/' + path.basename(process.cwd()) + '/' : '/'

module.exports = defineConfig({
  root: 'src',
  base,
  mode,
  publicDir: '../public',
  build: {
    outDir: '../dist',
    assetsDir: './',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        pageGato: path.resolve(__dirname, 'src/pages/elGatoConBotas/index.html'),
        pageBremen: path.resolve(__dirname, 'src/pages/losMusicosDeBremen/index.html'),
        pageLiebreTortuga: path.resolve(__dirname, 'src/pages/laLiebreYLaTortuga/index.html'),
        pageTresCerditos: path.resolve(__dirname, 'src/pages/losTresCerditos/index.html')
      },
    },
  },
  server: {
    host: true
  }
})
