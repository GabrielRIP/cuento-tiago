const m=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}};m();var h=["Miguel, despierta, corre, que ya han venido los Reyes. Vamos a ver los regalos.","D\xE9jame Curro, tengo mucho sue\xF1o, adem\xE1s todav\xEDa es de noche y puede que los Reyes todav\xEDa no hayan pasado por nuestra casa.","Que s\xED Miguel, que ya han pasado. Yo los he o\xEDdo.","Mira Curro, los Reyes son magos y es imposible que los veamos o los oigamos.","Pues yo estoy seguro de que ya han pasado. Tengo muy buen o\xEDdo y por muy magos que sean, han hecho ruido.","Mira Curro, d\xE9jame dormir un rato. Cu\xE9ntaselo a Mar\xEDa.","Mar\xEDa, Mar\xEDa, despierta.","Venga, vamos a ver los regalos. Quiero ver si me han tra\xEDdo todo lo que he pedido.","Curro, que es de noche. Espera una horita y luego vamos todos juntos a verlo.","Pues yo no me espero, voy a despertar a los pap\xE1s que seguro que ellos s\xED quieren levantarse.","Fui corriendo al cuarto, intentando no hacer ruido pero, de pronto, en el sal\xF3n tropec\xE9 y me ca\xED montando una gran escandalera. Llegaron primero mis padres y luego mis hermanos.","Pero Curro \xBFQu\xE9 te ha pasado?, pregunt\xF3 mi padre.","No s\xE9 pap\xE1, yo he venido como siempre pero seguro que hay algo movido porque he tropezado y me he ca\xEDdo.","Creo que cualquier otro d\xEDa me habr\xEDan re\xF1ido pero, como era d\xEDa de Reyes, esta vez todo se qued\xF3 en un 'tienes que tener m\xE1s cuidado, no puedes correr sin ton ni son'."];class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
      ${h.map(t=>`<p class='text-parrafo'>${t}</p>`).join("")}
    `}render(){this.shadowRoot.innerHTML=`
      <style>${n.styles}</style>
      <div class="container">
        Corazon que si Siente
      </div>
    `}}customElements.define("book-one",n);class a extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
      <style>${a.styles}</style>
      <div class="container">
        Leyendo un Cuento
      </div>
    `}}customElements.define("book-two",a);class i extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}}customElements.define("book-four",c);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
      <style>${d.styles}</style>
      <div class="container">
        La Ola
      </div>
    `}}customElements.define("book-five",d);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
      <style>${l.styles}</style>
      <div class="container">
        <book-one></book-one>
        <book-two></book-two>
        <book-three></book-three>
        <book-four></book-four>
        <book-five></book-five>
      </div>
    `}}customElements.define("lista-cuentos",l);
