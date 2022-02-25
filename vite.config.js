const path = require('path')
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const base = mode === 'production' ? '/' + path.basename(process.cwd()) + '/' : '/'

module.exports = {
  root: 'src',
  base,
  mode,
  publicDir: '../public',
  build: {
    outDir: '../dist',
    assetsDir: './',
    rollupOptions: {
      input: {
        pages: path.resolve(__dirname, 'pages/elGatoconBotas.html')
      }
    }
  },
  server: {
    host: true
  }
}
