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
        pages: path.resolve(__dirname, 'pages/*.html'),
      },
    },
  },
  server: {
    host: true
  }
})
