import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MenuPage} from '../pages/menu/menu';
import {DuyuruPage} from '../pages/duyuru/duyuru';
import {DuyurueklePage} from '../pages/duyuruekle/duyuruekle';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    DuyuruPage,
    DuyurueklePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    DuyuruPage,
    DuyurueklePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
