import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodcourtPage } from './foodcourt';

@NgModule({
  declarations: [
    FoodcourtPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodcourtPage),
  ],
})
export class FoodcourtPageModule {}
