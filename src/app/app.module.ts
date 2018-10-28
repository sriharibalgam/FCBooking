import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePageModule } from '../pages/home/home.module';
import { FeedbackPageModule } from '../pages/feedback/feedback.module';
import { LoginPageModule } from '../pages/login/login.module';
import { BookingPageModule } from '../pages/booking/booking.module';
import { AppServiceProvider } from '../providers/app-service/app-service';
import { HomePage } from '../pages/home/home';
import { FeedbackPage } from '../pages/feedback/feedback';
import { BookingPage } from '../pages/booking/booking';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    FeedbackPageModule,
    BookingPageModule,
    LoginPageModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedbackPage,
    BookingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppServiceProvider,
  ]
})
export class AppModule {}
