import { addRecordatorio } from "../../utils/firebase";

const formData: any = {
    titulo: "",
    descrip: "",
  };

class Formulario extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render()
    }
    changeTitulo(e: any){
        formData.titulo = e?.target?.value;
    }
    changeDescripcion(e: any){
        formData.descrip = e?.target?.value;
    }
    SubmitForm (e:any){
        console.log(formData)
        addRecordatorio(formData)
    }
   async render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``

            const ChangeT = this.ownerDocument.createElement("input")
            ChangeT.placeholder = "Titulo del recordatorio"
            ChangeT.addEventListener("change", this.changeTitulo);
            this.shadowRoot.appendChild(ChangeT)

            const ChangeD = this.ownerDocument.createElement("input")
            ChangeD.placeholder = "Descripción del recordatorio"
            ChangeD.addEventListener("change", this.changeDescripcion);
            this.shadowRoot.appendChild(ChangeD)

            const Submit = this.ownerDocument.createElement("button")
            Submit.innerText = "Guardar recordatorio"
            Submit.addEventListener("click", this.SubmitForm);
            this.shadowRoot.appendChild(Submit)

         }
    }
}
customElements.define("my-form", Formulario)
export default Formulario