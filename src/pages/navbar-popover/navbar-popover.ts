import { Component } from '@angular/core';

import { App, NavController, ModalController, ViewController } from 'ionic-angular';


@Component({
    template: `
    <ion-list>
      <button ion-item (click)="open('http://ionicframework.com/docs/v2/getting-started')">Info</button>
      <button ion-item (click)="open('https://github.com/MilizianDevops/sales-stock-manager')">GitHub Repo</button>
      <button ion-item (click)="settings()">Settings</button>
    </ion-list>
  `
})
export class PopoverPage {

    constructor(
        public viewCtrl: ViewController,
        public navCtrl: NavController,
        public app: App,
        public modalCtrl: ModalController
    ) { }

    //   settings () {
    //     this.app.getRootNav().push('SupportPage');
    //     this.viewCtrl.dismiss();
    //   }

    open(url: string) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    }
}