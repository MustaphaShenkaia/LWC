import { LightningElement, track } from 'lwc';

export default class A008trackList extends LightningElement {

    cicekId = 3; 
    cicekName = ""; 
    cicekFamilya = ""; 

    cicek = {}

    //-------------

    @track
    cicekListesi = [
        {
            id:1,
            name:'Gul',
            familya:'DikenliGuller'
        },
        {
            id:2,
            name:'Lale',
            familya:'Lalegiller'
        }
    ]

    handleName(e) {
        this.cicekName = e.target.value; 
        //console.log(this.cicekName);
    }

    handleFamilya(e) {
        this.cicekFamilya = e.target.value; 
        //console.log(this.cicekFamilya);
    }

    /*
    handleClick() {
        const cicek = {
            id: this.cicekId,
            name: this.cicekName, 
            familya : this.cicekFamilya
        }
        this.cicekListesi.push(cicek); 
        this.cicekId++; 
    }
    */

    handleClick() {
        this.cicek.id = this.cicekId; 
        this.cicek.name = this.cicekName; 
        this.cicek.familya = this.cicekFamilya; 
  
        this.cicekListesi.push(this.cicek); 
        this.cicekId++; 
    }

    
}

