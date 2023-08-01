import { LightningElement, api } from 'lwc';

export default class A006motorOzellikleri extends LightningElement {

    @api // public oldu
    motorHacmi = '1.8';
    @api
    motorGucu = 120; 
    @api
    yakitTuru = 'BENZİN'; 
}