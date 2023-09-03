import { LightningElement, api } from 'lwc';
import { CloseActionScreenEvent } from "lightning/actions";	
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class A021quickActionUpdate extends LightningElement {

    @api recordId // Bulunduğumuz record'un record Id'sini verir
    @api objectApiName // Bulunduğumuz record'un object adını verir

    handleSuccess() {
        this.dispatchEvent(new CloseActionScreenEvent()); 
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Record Updated Successfully',
                variant: 'success'
            })
        )
        
    }
}