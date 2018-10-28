import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
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
  selectedSeatArr: any[] = [];
  showBookingBtn: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  seats: string[] = ['A', 'B', 'C', 'D'];
  tables: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public getSelectedSeat( tableNumber: any, seatNumber: any){
    console.log(tableNumber.toString()+seatNumber);
    if(this.selectedSeatArr.length <= 3){
      this.selectedSeatArr.push(tableNumber.toString()+seatNumber);
    } else {
      const alert = this.alertCtrl.create({
        title: 'Warning',
        subTitle: 'You are not allowed to Select morethan 4 Seats',
        buttons: ['OK']
      });
      alert.present();
    }
    this.showBookingBtn = true;
    console.log(this.selectedSeatArr);
    
  }

  public bookSeat(){
    const alert = this.alertCtrl.create({
      title: 'Thank You',
      subTitle: 'You have successfully Booked a Seat(s).',
      buttons: ['OK']
    });
    alert.present();
    //this.navCtrl.push('FoodcourtPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodcourtPage');
  }

}
