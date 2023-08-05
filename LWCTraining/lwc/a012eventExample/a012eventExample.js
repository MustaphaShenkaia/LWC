import { LightningElement } from 'lwc';

export default class A012eventExample extends LightningElement {

    xCoarninate
    yCoarninate

    // Google -> how to get mouse position js
    // https://codingbeautydev.com/blog/javascript-get-mouse-position/
    handleMause(e) {
        this.xCoarninate = e.clientX; 
        this.yCoarninate = e.clientY; 
    }
}