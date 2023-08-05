import { LightningElement } from 'lwc';

export default class A014eventListenerParent extends LightningElement {

    // HTML Listener

    clickSayisi = 0; 

    handleClick() {
        this.clickSayisi++; 
    }

    // JS Listener
    renderedCallback() {
        this.template.querySelector('c-a014event-listener-js')
        .addEventListener('click', this.handleClickFromChild); 
    }

    handleClickFromChild() {
        // eslint-disable-next-line no-alert
        alert("Child component button basıldı.."); 
    }
}