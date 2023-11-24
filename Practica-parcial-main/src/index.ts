import "./components/export"
import { Card } from "./components/export";
import { arregloRecorda } from "./utils/firebase";
import firebase from "./utils/firebase"
import { Attribute } from "./components/Card/Card";
class AppContainer extends HTMLElement {

    posts: any = []

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

   async  connectedCallback() {
        const arreglofirebase = await firebase.arregloRecorda();

        arreglofirebase.forEach(async (Recordatorio: any)=>{
          const myCard =  this.ownerDocument.createElement("my-card") as Card
          myCard.setAttribute(Attribute.titulo, Recordatorio.titulo)
          myCard.setAttribute(Attribute.des, Recordatorio.descrip)
          this.posts.push(myCard)
        })
console.log(this.posts)
        this.render()
    }

  async  render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        `
        const tryF = this.ownerDocument.createElement("my-form");
        this.shadowRoot?.appendChild(tryF);

        this.posts.forEach((pots: any) => {
            this.shadowRoot?.appendChild(pots)
        })
    }
}

customElements.define('app-container', AppContainer)