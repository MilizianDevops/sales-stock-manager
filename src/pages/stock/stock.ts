import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html'
})
export class StockPage {

  public items: Array<any> = new Array();

  public swipe: number = 0;


  show: boolean = true;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    for (let i = 0; i < 100; i++) {
      this.items.push(`item ${i}`);
    }
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Not implememted yet, we are working on it.',
      showCloseButton: true,
      closeButtonText: 'Ok',
      duration: 3000
    });
    toast.present();
  }

  presentFilter() {
    this.showToastWithCloseButton();
  }

  onInput(e) {
    this.showToastWithCloseButton();
  }

  onCancel(e) {
    this.showToastWithCloseButton();
  }

  /* AUX TEST FUNCTIONS */
  myHeaderFn(record, recordIndex, records) {
    if (recordIndex % 20 === 0) {
      return 'Header ' + recordIndex;
    }
    return null;
  }

  swipeEvent(e) {
    console.log('Soy e' + e);
    this.swipe++
  }


}
