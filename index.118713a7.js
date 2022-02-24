const m=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};m();var p=["Miguel, despierta, corre, que ya han venido los Reyes. Vamos a ver los regalos.","D\xE9jame Curro, tengo mucho sue\xF1o, adem\xE1s todav\xEDa es de noche y puede que los Reyes todav\xEDa no hayan pasado por nuestra casa.","Que s\xED Miguel, que ya han pasado. Yo los he o\xEDdo.","Mira Curro, los Reyes son magos y es imposible que los veamos o los oigamos.","Pues yo estoy seguro de que ya han pasado. Tengo muy buen o\xEDdo y por muy magos que sean, han hecho ruido.","Mira Curro, d\xE9jame dormir un rato. Cu\xE9ntaselo a Mar\xEDa.","Mar\xEDa, Mar\xEDa, despierta.","Venga, vamos a ver los regalos. Quiero ver si me han tra\xEDdo todo lo que he pedido.","Curro, que es de noche. Espera una horita y luego vamos todos juntos a verlo.","Pues yo no me espero, voy a despertar a los pap\xE1s que seguro que ellos s\xED quieren levantarse.","Fui corriendo al cuarto, intentando no hacer ruido pero, de pronto, en el sal\xF3n tropec\xE9 y me ca\xED montando una gran escandalera. Llegaron primero mis padres y luego mis hermanos.","Pero Curro \xBFQu\xE9 te ha pasado?, pregunt\xF3 mi padre.","No s\xE9 pap\xE1, yo he venido como siempre pero seguro que hay algo movido porque he tropezado y me he ca\xEDdo.","Creo que cualquier otro d\xEDa me habr\xEDan re\xF1ido pero, como era d\xEDa de Reyes, esta vez todo se qued\xF3 en un 'tienes que tener m\xE1s cuidado, no puedes correr sin ton ni son'.","El caso es que ya est\xE1bamos todos en el sal\xF3n y me d\xED cuenta que con lo que hab\xEDa tropezado era uno de los muchos paquetes con regalos que empec\xE9 a coger como un loco, buscando los que ten\xEDan mi nombre. En mi casa, les gusta marcar los regalos con los nombres de cada uno con grandes letras de coraz\xF3n.","Mirad, este es m\xEDo. Seguro que es el cami\xF3n de bomberos.","Arranqu\xE9 el papel y saqu\xE9 el cami\xF3n, ten\xEDa unas ruedas grandes, encontr\xE9 un bot\xF3n y cuando lo apret\xE9 son\xF3 la sirena, son\xF3 tan alto que me asust\xE9 y todos se rieron.","Segu\xED descubriendo cosas, las puertas se abr\xEDan, hab\xEDa una escalera en la parte de arriba que se pod\xEDa extender y una figurita de un bombero que agarraba la manguera para apagar el fuego.","Es de color rojo, me grit\xF3 mi hermano Miguel.","Claro, le coment\xE9 yo, de que color te pensabas que iba a ser un cami\xF3n de bomberos.","Mar\xEDa dijo, mira Curro tengo otro de tus regalos, lo he abierto sin querer. Adivina, adivinaza \xBFque es?","D\xE9jamelo, dije yo. No, lo tienes que adivinar. Mar\xEDa siempre me estaba chinchando con lo mismo.","Anda, no seas mala. D\xE9jaselo, dijo mi madre.","No, que lo adivine, dijo Miguel.","Yo me enfad\xE9 y gritando les dije a todos. D\xE1melo, ya sabes que si no lo toco, yo no lo puedo ver.","Not\xE9 que mi padre iba a gritar la frase que la familia usaba cuando las cosas se pon\xEDan feas y as\xED fue."],h="/cuento-tiago/picture01.png";class t extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render(),this.boxGeneral=this.shadowRoot.querySelector(".container"),this.boxGeneral.addEventListener("click",()=>this.setClick()),this.titleDocument=document.querySelector("body .container")}setClick(){this.titleDocument.style.background="none",this.titleDocument.innerHTML=this.getTemplate()}getTemplate(){return this.titleDocument.classList.add("new-container"),`
      <h2 class="sub-title">
        Corazon que si Siente
      </h2>
      ${p.map(a=>`<p class='text-parrafo'>${a}</p>`).join("")}
      <img src=${h} class="img-end">
    `}render(){this.shadowRoot.innerHTML=`
      <style>${t.styles}</style>
      <div class="container">
        Corazon que si Siente
      </div>
    `}}customElements.define("book-one",t);class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>${n.styles}</style>
      <div class="container">
        Leyendo un Cuento
      </div>
    `}}customElements.define("book-two",n);class i extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>${i.styles}</style>
      <div class="container">
        El Aplauso
      </div>
    `}}customElements.define("book-three",i);class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>${c.styles}</style>
      <div class="container">
        En la selva
      </div>
    `}}customElements.define("book-four",c);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>${l.styles}</style>
      <div class="container">
        La Ola
      </div>
    `}}customElements.define("book-five",l);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        user-select: none
      }
      .container {
        position: absolute;
        bottom: 4rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 90%;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>${d.styles}</style>
      <div class="container">
        <book-one></book-one>
        <book-two></book-two>
        <book-three></book-three>
        <book-four></book-four>
        <book-five></book-five>
      </div>
    `}}customElements.define("lista-cuentos",d);
