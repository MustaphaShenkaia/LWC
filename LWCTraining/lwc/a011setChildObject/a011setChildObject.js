import { LightningElement, api } from 'lwc';

export default class a011setChildObject extends LightningElement {

    container 

    @api
    get childCustomer() {
        return this.container; 
    }
    set childCustomer(data) {
        
        let tempCustomer = {...data} 
            tempCustomer.name = tempCustomer.name.toUpperCase(); 
            tempCustomer.yas = tempCustomer.yas - 5; 
        this.container = tempCustomer; 

        //--------------------------------------

        // 2. Yol
        // let tempCustomer2 = {...data, name: data.name.toUpperCase()} 
        // this.container = tempCustomer2;

        // 3. Yol
        // Object.assign({}, data) Yöntemi
        // let tempCustomer3 = Object.assign({}, data)
        // tempCustomer3.name = tempCustomer3.name + " /// "
        // this.container = tempCustomer3;
    }
}