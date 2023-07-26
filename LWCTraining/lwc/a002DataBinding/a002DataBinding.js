import { LightningElement } from 'lwc';

export default class A002DataBinding extends LightningElement {

    name = 'Mustafa'; 
    ad ='Mehmet'; 

    //------------

    handlerName(e) {
        this.ad = e.target.value; 
    }

    //------------------------

    firstName = ''; 
    
    handleFirstName(e) {
        this.firstName = e.target.value; 
    }

    lastName = '';  

    handlerLastName(e) {
        this.lastName = e.target.value; 
    }

    fullisim = ''; 

    get tumIsim() {
        this.fullisim = this.firstName.toUpperCase() + ' ' + this.lastName.toUpperCase(); 
        return this.fullisim; 
    }

    //------------------------

    number1 = 0; 
    
    handleNumberA(e) {
        this.number1 = e.target.value; 
    }

    number2 = 0; 
    
    handleNumberB(e) {
        this.number2 = e.target.value; 
    }

    toplam = 0; 

    get topla() {
        // eslint-disable-next-line radix
        this.toplam = parseInt(this.number1) + parseInt(this.number2);
       console.log(typeof this.toplam);
        return this.toplam; 
    }

}