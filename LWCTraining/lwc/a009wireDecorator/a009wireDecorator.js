import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import accountFilter from '@salesforce/apex/AccountController.accountFilter';
import accountImperativeFilter from '@salesforce/apex/AccountController.accountFilterImperative';


export default class A009wireDecorator extends LightningElement {

    // LIST KULLANIMI
    @wire(getAccounts) accounts;
    // accounts, Apex getAccounts methodu ifade eder. 
    // accounts, içerisinde data ve error ihtiva eder.  
    // veri accounts.data içerisinde saklıdır. 



    //=============================



    // FILTRE KULLANIMI - 1 
    filtre='xxxxxxxxxx'; 

    handleAccount(event){
    this.filtre = event.target.value; 
    // console.log(this.filtre);
    }

    @wire(accountFilter,{ accName :'$filtre' }) accountFilterList



    //--------------------------



     // FILTRE KULLANIMI - 2
     filtreIki='xxxxxxxxxx'; 

     handleAccountIKI(event){
    this.filtreIki = event.target.value; 
    // console.log(this.filtreIki);
    }

    dataList
    hata

    @wire(accountFilter,{ accName :'$filtreIki' }) 
    accountFilterListIKI({data, error}) {

        if (data) {
            this.dataList = data; 
            this.hata = undefined; 
        } 
        else if(error) {
            this.dataList = undefined; 
            this.hata = error; 
        }
    }



    //--------------------------


    // IMPERATIVE KULLANIMI

    filtreImp=''; 

    handleImperative(event){
    this.filtreImp = event.target.value; 
    }

    imperativeList
    imperativeHata
     
     handleAccountImperative() {

        accountImperativeFilter({ accName : this.filtreImp })
        .then( (data) => {
            this.imperativeList = data; 
            this.imperativeHata = undefined; 
        } )
        .catch( (error) => {
            this.imperativeList = undefined; 
            this.imperativeHata = error; 
        } )
     }



}