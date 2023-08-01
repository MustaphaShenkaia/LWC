import { LightningElement } from 'lwc';

export default class A006arabaComposition extends LightningElement {

    arabaModeli = ''; 
    motorCinsi = ''; 
    motorHacmi

    //-------------------

    handleAraba(e) {
        this.arabaModeli = e.target.value; 
    }

    handleMotorCinsi(e) {
        this.motorCinsi = e.target.value; 
    }

    handleMotorHacmi(e) {
        this.motorHacmi = e.target.value; 
    }

    //---------------------------------

    // arabaModeli
    arabaModelData = [
        { label: 'Honda', value: 'Honda'},
        { label: 'Volvo', value: 'Volvo' },
        { label: 'BMV', value: 'BMV' },
    ];
    get arabaModels() {
        return this.arabaModelData; 
    }

    handleArabaModel(event) {
        this.arabaModeli = event.detail.value;
    }

    // motorCinsi
    motorCinsiData = [
        { label: 'Dizel', value: 'Dizel'},
        { label: 'Benzin', value: 'Benzin' },
        { label: 'LPG', value: 'LPG' },
    ];
    get arabaCinsi() {
        return this.motorCinsiData; 
    }

    handleArabaCinsi(event) {
        this.motorCinsi = event.detail.value;
    }

    // motorHacmi
    motorHacmiData = [
        { label: 1.0, value: 1.0},
        { label: 2.0, value: 2.0 },
        { label: 3.0, value: 3.0 },
    ];
    get arabaMotorHacmi() {
        return this.motorHacmiData; 
    }

    handleArabaMotorHacmi(event) {
        this.motorHacmi = event.detail.value;
    }
}