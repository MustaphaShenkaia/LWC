import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import createAccount from '@salesforce/apex/CreateAccountLWC.createAccount';


export default class A009wireCreateAccount extends LightningElement {
    
    accName

    handleAccountName(e) {
        this.accName = e.target.value; 
    }

    handleAccountCreate() {
        // LWC Toast Message 
        createAccount({accName:this.accName})
        .then( () => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'BRAVO ÇOK GÜZEL HAREKET',
                    message: 'Account başarılı bir şekilde oluşmuştur..',
                    variant: 'success',
                })
            );
        } )
        .catch( () => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'FATAL ERROR',
                    message: 'Account oluşturulaamadı!!',
                    variant: 'error',
                })
            );
        } )
    }

}