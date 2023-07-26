import { LightningElement } from 'lwc';
// import bootstrap from '@salesforce/resourceUrl/bootstrap';

export default class A004ListIteration extends LightningElement {

    sehirList = ["Kayseri","Maras","Istanbul","Denizli","Izmir"];

    //======================================

    cicekListesi = [
        {
            id:1,
            name:'Gul',
            familya:'DikenliGuller',
            imgUrl:'http://www.leblebitozu.com/wp-content/uploads/2017/02/gul.jpg'
        },
        {
            id:2,
            name:'Lale',
            familya:'Lalegiller',
            imgUrl:'http://www.leblebitozu.com/wp-content/uploads/2017/02/lale.jpg'
        },
        {
            id:3,
            name:'Zambak',
            familya:'Zambakgiller',
            imgUrl:'http://www.leblebitozu.com/wp-content/uploads/2017/02/zambak.jpg'
        },
        {
            id:4,
            familya:'Soganligiller',
            name:'Sumbul',
            imgUrl:'http://www.leblebitozu.com/wp-content/uploads/2017/02/sumbul.jpg'
        }
    ]
        
}