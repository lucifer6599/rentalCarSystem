import { LightningElement,api,wire,track } from 'lwc';
import getCars from '@salesforce/apex/CarSearchResultController.getCars'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class CarSearchResult extends LightningElement {
    @api carTypeId;
    visibleCars;
    @track cars;
    @wire(getCars,{carTypeId:'$carTypeId'})
    wiredCars({data,error}){
        if(data){
            this.cars=data;
            console.log(`wiredCars to getCars: ${this.carTypeId} length of 'data' is ${data.length}`)
        }else if(error){
            this.showToast('ERROR',error.body.message,'error')
        }
    }

    showToast(title,message,variant){
        const evt=new ShowToastEvent({
            title:title,
            message:message,
            variant:variant
        })
        this.dispatchEvent(evt)
    }
    get carsFound(){
        if(this.visibleCars){
            return true;
        }
        return false;
    }
    updateCarHandler(event){
        this.visibleCars=[...event.detail.record];
        console.log(event.detail.record);
    }
}