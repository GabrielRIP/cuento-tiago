// Style
import './style.css'

// Components
import '../components/ElGatoConBotas.js'

const boxPrincipal = document.querySelector('body .container')

if (boxPrincipal.classList[1] === 'gato') {
  boxPrincipal.innerHTML = `
    <el-gato-con-botas></el-gato-con-botas>
  `
}
