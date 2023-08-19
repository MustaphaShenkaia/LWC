import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'; 

// public propery 
const num = 3; 

export default class A017lifeCycleParent extends LightningElement {

    @track 
    accountList 

    @track 
    apexError

    isim = "Hasan"
    sayi = 1 
    
    // İlk kod yüklenmeden hazırlık aşamasında çalışır
    constructor() {
        super()
        // alert("PARENT Constructor"); 

        // getAccounts()
        // .then(result => {
        //     this.accountList = result
        //     this.apexError = undefined
        // })
        // .catch(error => {
        //     this.accountList = undefined
        //     this.apexError = error
        // })
    }



    // DOM'a kod yüklenince çalışır
    connectedCallback() {
        // alert("PARENT connectedCallback"); 
        this.isim = this.isim.toUpperCase()
        
        getAccounts()
        .then(result => {
            this.accountList = result
            this.apexError = undefined
        })
        .catch(error => {
            this.accountList = undefined
            this.apexError = error
        })
    }



    handleIsim(e) {
        this.isim = e.target.value
    }

    // Yüklenen kod okununca çalışır
    renderedCallback() {
        // alert("PARENT renderedCallback" + this.isim); 
        
        if(this.sayi < 5) {
            this.sayi = this.sayi + 1 
        }
        alert("PARENT renderedCallback -> " + this.sayi); 
        
    }
    // Sonrasında ekrana basılır



    disconnectedCallback() {

    }

    errorCallback() {

    }    

}