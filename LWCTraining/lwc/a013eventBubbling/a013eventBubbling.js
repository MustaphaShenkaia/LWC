import { LightningElement } from 'lwc';

export default class A013eventBubbling extends LightningElement {

    innerDiv = 0; 
    middleDiv = 0; 
    outerDiv = 0; 

    handleInnerDiv(e) {
        this.innerDiv++; 
        e.stopPropagation(); 
    }

    handleMiddleDiv(e) {
        this.middleDiv++; 
        e.stopPropagation(); 
    }

    handleOuterDiv(e) {
        this.outerDiv++; 
        e.stopPropagation(); 
    }  
    
}