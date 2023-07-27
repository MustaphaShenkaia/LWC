import { LightningElement } from 'lwc';
import displayAcc from '@salesforce/apex/ComboboxExample.getAccounts';
// getAccounts method olduğu için displayAcc() şeklinde çağrılır. 

export default class A005parentCompCss extends LightningElement {

    value = ''; 
    accOptions = []; 


    get options() {
        // return [
        //     {label: 'Account1', value: 'Value1'},
        //     {label: 'Account2', value: 'Value2'}
        // ];
        return this.accOptions; 
    }

    connectedCallback(){
        // promise
        displayAcc()
        .then(result =>{
            // result -> Array 
            let arr = [];
            
            for(let i=0; i<result.length; i++){
                arr.push({label : result[i].Name, value : result[i].Id});
            }
            this.accOptions = arr;
        })        
    }


    handleonchange(e) {
        this.value = e.detail.value; 
    }
}