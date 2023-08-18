import { LightningElement } from 'lwc';

export default class A015customEventParent extends LightningElement {

    // Custom Event 1
    yeniBilgi = ''; 

    handleElma() {
        this.yeniBilgi = "Custom Event Oluştu..";
    }

    //--------------------------------

    // Custom Primitive Data
    yeniPrimitiveData = "Burası değişecek"; 

    handleArmut(e) {
        this.yeniPrimitiveData = e.detail; 
    }

     //--------------------------------

    // Custom Object Data
    yeniObjectData = {}

    handleAyva(e) {
        this.yeniObjectData = e.detail; 
    }
}