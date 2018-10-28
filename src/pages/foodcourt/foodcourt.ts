import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the FoodcourtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foodcourt',
  templateUrl: 'foodcourt.html',
})
export class FoodcourtPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  settings = {
    rows: 5,
    cols: 15,
    rowCssPrefix: 'row-',
    colCssPrefix: 'col-',
    seatWidth: 35,
    seatHeight: 35,
    seatCss: 'seat',
    selectedSeatCss: 'selectedSeat',
    selectingSeatCss: 'selectingSeat'
  };

  seats: string[] = ['A', 'B', 'C', 'D'];
  tables: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2', 'F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
  selected: string[] = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodcourtPage');
  }

}
