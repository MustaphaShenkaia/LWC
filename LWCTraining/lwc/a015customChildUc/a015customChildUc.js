import { LightningElement } from 'lwc';

export default class A015customChildUc extends LightningElement {

    childTarafindanObject = {
        name: "Hatce",
        yas: 20
    }

    handleClick3() {
        let cstEvent = new CustomEvent('ayva', {detail: this.childTarafindanObject} ); 
        this.dispatchEvent(cstEvent); 
    }
}