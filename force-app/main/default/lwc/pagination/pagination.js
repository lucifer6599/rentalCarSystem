import { LightningElement,api } from 'lwc';

export default class Pagination extends LightningElement {

    currentPage=1
    totalRecords
    recordSize=3
    totalPage

    get records(){
        return this.visibleRecords;
    }
    @api
    set records(data){
        if(data){
            this.totalRecords=data;
            this.visibleRecords=data.slice(0,this.recordSize)
            this.totalPage=Math.ceil(data.length/this.recordSize)
            // console.log(`Inside pagination setter: ${this.totalRecords}`);
            this.updateRecords();
        }
    }
    previousHandler(){
        // console.log(`prevHandler:`);
        
    }
    nextHandler(){

    }
    updateRecords(){
        this.dispatchEvent(new CustomEvent("update",{
            detail:{
                record:this.visibleRecords
            }
        }))
    }
}