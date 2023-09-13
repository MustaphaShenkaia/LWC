import { LightningElement } from 'lwc';

export default class A023lwcSection extends LightningElement {

    isListReady = false; 

    handleClick(){
        this.isListReady = true; 
    }

    handleFinalSave() {
        this.handleCancel(); 
    }

    handleCancel() {
        this.isListReady = false; 
    }
}