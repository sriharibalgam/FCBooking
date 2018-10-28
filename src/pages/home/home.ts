import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodcourtPage } from '../foodcourt/foodcourt';

import { map, catchError, tap } from 'rxjs/operators';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public showSlots:Boolean;
  public seatCount:Number;
  public showBooking:Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  // FoodCourt Card
  public selectedFC(selectedFC: string) {
    this.showSlots = true;
    localStorage.setItem('selectedFC', selectedFC);
  }

  // Time Slots RadioButtons Card
  public selectedTimeSlot(timeSlot: Number){
    this.showBooking = true;
    let selectedFC = localStorage.getItem('selectedFC');
    //localStorage.setItem('timeSlot', timeSlot);
    this.seatCount = this.getSeatCountForTimeSlot(selectedFC, timeSlot);
    console.log(selectedFC, timeSlot, this.seatCount);
  }

  // API
  public getSeatCountForTimeSlot(fc: string, timeSlot: Number){
    // make a service call
    return timeSlot === 1 ? 22 : 15;
  }

  public goToBooking(){
    this.navCtrl.push('FoodcourtPage');
  }
 

}
