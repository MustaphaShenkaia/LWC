import { LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';


export default class A016SiblingPublisher extends LightningElement {

    @wire(CurrentPageReference)
    pageRef; // Hangi sayfada yayın olacak

    customer = {
        name: 'Hasan',
        age: 20
    }

    handleName(e) {
        this.customer.name = e.target.value; 
        //this.customer = {...this.customer}
    }
    // handleName(e) {
    //     this.customer = {
    //         ...this.customer,
    //         name:e.target.value,
    //     }
    // }

    handleAge(e) {
        this.customer.age = e.target.value; 
        //this.customer = {...this.customer}
    }

    handleClick() {
        // nereye yayın, yayın kanalı, data
        fireEvent(this.pageRef, 'RadyoYayini', this.customer)
    }
}