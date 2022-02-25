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
        main: path.resolve(__dirname, 'src/index.html'),
        pages: path.resolve(__dirname, 'src/pages/*.html')
      }
    }
  },
  server: {
    host: true
  }
}
