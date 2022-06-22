import { LightningElement,track } from 'lwc';

export default class CarSearch extends LightningElement {

    @track carTypeId;
    carTypeSelectHandler(event){
        console.log("carTypeSelectHandler: ",event.detail)
        this.carTypeId=event.detail;
    }
}