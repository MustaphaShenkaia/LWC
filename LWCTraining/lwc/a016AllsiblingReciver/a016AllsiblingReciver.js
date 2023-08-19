import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';


 
export default class A016AllsiblingReciver extends LightningElement {

    name
    age

    @wire(CurrentPageReference)
    pageRef; // Hangi sayfada yayın olacak

    // yayın kanalı, callback, data
    connectedCallback() {
        registerListener('RadyoYayini', this.handleRadyoYayini, this)
    }
    // data this ve detail içinde object olarak gelir. 
    handleRadyoYayini(detail) {
        // alert("Gelen Ad: " + detail.name + " - Gelen Yaş: " + detail.age); 
        let nm  = detail.name
        this.name = nm.toUpperCase();
        let ag = detail.age
        this.age = ag - 5;
    }

    disconnectedCallback() {
        unregisterAllListeners(this) 
    }
}