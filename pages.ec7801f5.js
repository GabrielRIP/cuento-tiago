import"./modulepreload-polyfill.6874861d.js";var i=["Un molinero, al fallecer, dej\xF3 como herecia al mayor de sus tres hijos, un molino; al segungo, un burro; y al menor, llamado Tiago, un gato.","- Con lo poco que he recibido morir\xE9 de hambre.","Se lamento el joven. De inmediato, el minino exclam\xF3 \xA1No se preocupe, yo lo convertir\xE9 en un pr\xEDncipe!...","Solo deme un saco y unas botas que me protejan al caminar.","Tiago le entreg\xF3 al felino lo pedido y este parti\xF3 rumbo al bosque.","All\xED, caz\xF3 unos conejos y arregl\xF3 una entrevista con el rey de aquillas tierras:","Su majestad, el Marqu\xE9s de Carab\xE1s 't\xEDtulo que hab\xEDa inventado para su amo', le env\xEDa este obsequio.","El rey acogi\xF3 muy feliz al Gato con Botas; y los siguientes d\xEDas, rebibi\xF3 m\xE1s reglos a nombre de su due\xF1o.","Un d\xEDa, el minino le insisti\xF3 a su amo en ir a ba\xF1arse al r\xEDo, Tiago le tenia miedo al agua pero hacepto.","Al ver acercarse el carruaje real, el Gato con Botas grito '\xA1Socorro, el Marqu\xE9s de Carab\xE1s se ahora!'; y el rey de inmediato, orden\xF3 que lo auxiliaran.","Adem\xE1s, el sabido animal invent\xF3 que los hab\xEDan asaltado; por lo cual, el monarca orden\xF3 que vistiesen al 'Marqu\xE9s' con elegantes prendas.","El rey los invit\xF3 a su paseo, solo el Gato con Botas se adelant\xF3 hacia el castillo del Ogro con poderes m\xE1gicos.","Al llegar, lo reto <<\xA1A que no puedes convertirte en un le\xF3n!>>; el ogro vanidoso, lo hizo.","Luego el minino insisti\xF3 <<\xA1Pero no puedes volverte un rat\xF3n!>>, y el ogro tom\xF3 dicha forma.","Entonces, el felino se lo comi\xF3 y se apoder\xF3 de su inmenso castillo","Pronto, el Gato con Botas alcanz\xF3 al carruaje real y, con gran reverencia, los invit\xF3 a conocer el castillo del Marqu\xE9s de Carab\xE1s.","\xA1Todos estaban inpresionados!, sobre todo Tiago, quien adem\xE1s de t\xEDtulo, castillo y un leal servidor gatuno.","Termino enamorandose de la princesa real, con quien se cas\xF3 al poco tiempo.","...end..."],s="/cuento-tiago/image/gato-con-botas/img01.png",l="/cuento-tiago/image/gato-con-botas/img02.png",c="/cuento-tiago/image/gato-con-botas/img03.png",m="/cuento-tiago/image/gato-con-botas/img04.png",g="/cuento-tiago/image/gato-con-botas/img05.png",u="/cuento-tiago/image/gato-con-botas/img06.png";class e extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {}

      .title {
        font-family: RammettoOne;
        display: inline-block;
        margin: 4rem 0 2rem 0;
        color: #2B7EE3;
      }
      .return {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background-color: #04aa6d;
        border: none;
        font-size: 1.2em;
        padding: 5px 1rem;
        border-radius: 5px;
      }
      .return:active {
        background-color: #191919;
      }

      .return a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        cursor: none;
      }

      .box-content {
        padding: 0 2rem;
      }

      .image-neko {
        width: 100%;
        max-width: 550px;
        border-radius: 1rem;
      }

      p {
        font-size: 2em;
        font-family: Sriracha;
        color: #13354A;
        text-align: justify;
      }
    `}connectedCallback(){this.render()}setFilter(t,r){return i.filter((o,a)=>a>=t&&a<=r).map(o=>`
      <p>${o}</p>
    `).join("")}render(){this.shadowRoot.innerHTML=`
      <style>${e.styles}</style>
      <h1 class="title">El Gato Con Botas</h1>
      <button class="return">
        <a href="../../index.html">return</a>
      </button>
      <div class="box-content">
        <img src="${s}" class="image-neko">
        ${this.setFilter(0,3)}
        <img src="${l}" class="image-neko">
        ${this.setFilter(4,7)}
        <img src="${c}" class="image-neko">
        ${this.setFilter(8,10)}
        <img src="${m}" class="image-neko">
        ${this.setFilter(11,14)}
        <img src="${g}" class="image-neko">
        ${this.setFilter(14,18)}
        <img src="${u}" class="image-neko">
      </div>
    `}}customElements.define("el-gato-con-botas",e);const n=document.querySelector("body .container");n.classList[1]==="gato"&&(n.innerHTML=`
    <el-gato-con-botas></el-gato-con-botas>
  `);
