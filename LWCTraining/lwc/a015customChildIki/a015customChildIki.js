import { LightningElement } from 'lwc';

export default class A015customChildIki extends LightningElement {

    childTarafindanBilgi = "Burası CHILD tarafından gelen bilgi"; 

    handleClick2() {
        let cstEvent = new CustomEvent('armut', {detail: this.childTarafindanBilgi} ); 
        this.dispatchEvent(cstEvent); 
    }
}