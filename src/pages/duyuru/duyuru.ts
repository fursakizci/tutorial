import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DuyurueklePage } from '../duyuruekle/duyuruekle';

/**
 * Generated class for the DuyuruPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-duyuru',
  templateUrl: 'duyuru.html',
})
export class DuyuruPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  public Duyuruekle(){
    
     this.navCtrl.push(DuyurueklePage);
     
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DuyuruPage');
  }
  
}