import { LightningElement } from 'lwc';

export default class A008trackDecoratorParent extends LightningElement {

    isim = ""
    soyisim =""

    handleIsim(event) {
        this.isim = event.target.value;
      }
    
      handleSoyisim(event) {
        this.soyisim = event.target.value;
      }
}