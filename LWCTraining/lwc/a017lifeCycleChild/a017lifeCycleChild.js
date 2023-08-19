import { LightningElement } from 'lwc';

export default class A017lifeCycleChild extends LightningElement {

    constructor() {
        super()
        //alert("CHILD Constructor"); 
    }


    connectedCallback() {
        // alert("CHILD connectedCallback"); 
        // window.addEventListener("click", this.handleClickSayisi)

        throw new Error("Hata Oluştu")
    }

    handleClickSayisi() {
        console.log("Ekrana klicklendi");
    }

    disconnectedCallback() {
        window.removeEventListener("click", this.handleClickSayisi)
    }
}