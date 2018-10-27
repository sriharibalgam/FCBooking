import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FcPage } from '../fc/fc';
import { FoodCourt } from '../../models/foodCourt';
import { HomeServiceProvider } from './home.service';
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

  public bookingStatus: boolean;
  public foodCourts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public homeService: HomeServiceProvider) {
    // Function to retrieve user booking
    this.bookingStatus = false;
    this.homeService.getFoodCourts().subscribe((data) => {
      this.foodCourts = data;
      console.log(this.foodCourts);
    }, (err) => console.log("failed: " + err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToFC(fcName: string) {
    this.navCtrl.push(FcPage, { 'fcName': fcName});
  }

}
