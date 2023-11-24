export enum Attribute {
    "titulo" = "titulo",
    "des" = "des"
}

class CardRecorda extends HTMLElement{
    titulo?: string
    des?: string

    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            titulo: null,
            des: null
        }
        return Object.keys(attrs);
    }
    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render()
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <div>
            <h1>${this.titulo}</h1>
            <p>${this.des}</p>
            </div>
            `
         }
    }
}
customElements.define("my-card", CardRecorda)
export default CardRecorda