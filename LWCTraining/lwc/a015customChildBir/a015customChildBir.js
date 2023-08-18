import { LightningElement } from 'lwc';

export default class A015customChildBir extends LightningElement {

    handleClick() {
        let cstEvent = new CustomEvent('elma'); 
        this.dispatchEvent(cstEvent); 
        // this.dispatchEvent(new CustomEvent('elma')); 
    }
    // handleClick ile custom event oluşur. 
}