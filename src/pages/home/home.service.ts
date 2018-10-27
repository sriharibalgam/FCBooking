import { Injectable } from '@angular/core';
import { AppServiceProvider } from '../../providers/app-service/app-service';
import { FoodCourt } from '../../models/foodCourt';
import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';
import { Subscriber } from 'rxjs/Subscriber';
import { Slots } from '../../models/foodCourt';

@Injectable()
export class HomeServiceProvider {

    public url: string;
    public foodCourts: any[];

    constructor(public appService: AppServiceProvider) { 
        // this.getFoodCourts();
    }

    /*
    public getFoodCourts(): Observable<any> {
        return new Observable(success => {
            this.url = 'data/fc.json';
            this.appService.get(this.url).subscribe(data => {
                this.foodCourts = data;
            });
        })
        
    }
    */
    
    public getFoodCourts(){
        this.url = 'data/fc.json';
        return new Observable((subscriber: Subscriber<any>) => {
            this.appService.get(this.url).subscribe((data: any) =>  {
                this.foodCourts = data;
                const arrOfFc = [];
                
                this.foodCourts.forEach((fc) => {
                    // add code to get food courts in foodcourt obj
                    arrOfFc.push(this.formatFcDetails(fc));
                });
                
                subscriber.next(this.foodCourts);
            });
        });
    }

    public formatFcDetails(data) {
        const fcDetail = new FoodCourt();
        fcDetail.fcName = data.fcName;
        fcDetail.fcStatus = [];
        data.fcStatus.forEach((slot) => {
            const slotDetails = new Slots;
            slotDetails.slotId = slot.slotId;
            slotDetails.seatsBooked = slot.seatsBooked;
            slotDetails.seatsAvailable = slot.seatsAvailable;
            fcDetail.fcStatus.push(slotDetails);
        });
        return fcDetail;
    } 

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
          const err = error || '';
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
      }
    
}
