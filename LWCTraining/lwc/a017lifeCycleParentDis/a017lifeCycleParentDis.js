import { LightningElement } from 'lwc';

export default class A017lifeCycleParentDis extends LightningElement {

    flag = true

    handleEkle() {
        this.flag = true
    }

    handleCikart() {
        this.flag = false
    }


    errorCallback(error, stack) {
        alert(error.message)
        console.log("BURASI STACK -> " + stack);
    }

}