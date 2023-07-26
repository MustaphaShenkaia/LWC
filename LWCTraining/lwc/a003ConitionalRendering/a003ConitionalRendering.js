import { LightningElement } from 'lwc';

export default class A003ConitionalRendering extends LightningElement {

    flag = false;     

    handlerCheckbox(e){
        this.flag = e.target.checked; 
        // console.log(this.flag);
    }


    //=======================


    bayrak = false;    
    parola = '';  

    handlerInput(e){
        this.parola = e.target.value; 
        
        if (this.parola === 'elma') {
            this.bayrak = true; 
        } else {
            this.bayrak = false; 
        }
    }
    
}