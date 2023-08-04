import { LightningElement } from 'lwc';

export default class A010get extends LightningElement {

    sayi1 = 3; 
    sayi2 = 2 ; 

    // toplam = this.sayi1 + this.sayi2; 

    get toplamGet() {
        return this.sayi1 + this.sayi2; 
    }

    //------------------------------------

    isimler = ['ayşe', 'fatma', 'resul', 'ali']; 

    secilenIsim = this.isimler[0]; 

    get secilenIsimGet() {
        this.secilenIsim = this.isimler[0]; 
        return this.secilenIsim; 
    }

    //--------------------------

    girilenIndex = 0; 

    handleIndex(e) { 
        this.girilenIndex = e.target.value; 
        // this.girilenIndex = parseInt(e.target.value); 
        // Text ile değer alınırsa parse edilir. 
    }

    secilenIsimFiltre = this.isimler[this.girilenIndex]; 

    // eslint-disable-next-line getter-return, consistent-return
    get secilenIsimFiltreGet() {
        if (this.girilenIndex < this.isimler.length) {
            return this.isimler[this.girilenIndex]; 
        } 
            // eslint-disable-next-line no-alert
            window.alert('Yanlış seçim'); 
        
    }
}