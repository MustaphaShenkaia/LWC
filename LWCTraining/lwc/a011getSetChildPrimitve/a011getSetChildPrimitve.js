import { LightningElement, api } from 'lwc';

export default class a011getSetChildPrimitve extends LightningElement {

    @api gelenYas = 0; 

    dogumYili = 2023 - this.gelenYas

    get dogumYiliGet() {
        return 2023 - this.gelenYas
    }

    //------------------------

    container
    // Get ve Set birlikte kullanılmalıdır
    @api
    get dogumYiliGetSet() {
        return this.container; 
    }
    set dogumYiliGetSet(data) {
        let buYil = new Date().getFullYear();
        this.container = buYil - data; 
    }
}