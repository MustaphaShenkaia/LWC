import { LightningElement, api, track  } from "lwc";

export default class A008trackDecorator extends LightningElement {

  @api ad = "Pakize";

  @api soyad = "Güzel"; 

  @track fullIsim = {
    name: '',
    age: 10
  }

  // @api ve @track ile parent üzerinden reactive edilebilir. 

  //---------------------

  handleIsim(event) {
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.ad = event.target.value;
    this.fullIsim.name = event.target.value;
  }

  handleSoyisim(event) {
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.soyad = event.target.value;
    //this.fullIsim.age = event.target.value;
  }

  handleAge(event) {
    this.fullIsim.age = event.target.value;
  }

}
