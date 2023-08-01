import { LightningElement, api, track  } from "lwc";

export default class A008trackDecorator extends LightningElement {

  @api ad = "Pakize";

  @api soyad = "Güzel"; 

  @track fullIsim = {
    name: this.ad, 
    lastname: this.soyad
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
    this.fullIsim.lastname = event.target.value;
  }

}
