import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login() {

    if (this.username !== '' && this.password !== '') {
      this.http.post('http://localhost:4000/login', { username: this.username, password: this.password })
        .map(res => res.json())
        .subscribe(data => {
          let empData: any;

          localStorage.setItem('userData', JSON.stringify(empData));
          this.navCtrl.push(HomePage, { 'userData': empData });
        });

      this.navCtrl.push('HomePage');
    } else {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Enter Valid Credentials',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
