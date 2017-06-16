import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { StockDetailCategoriesPage } from '../stock-categories-detail/stock-categories-detail';

@Component({
  selector: 'page-categories-stock',
  templateUrl: 'stock-categories.html'
})
export class StockCategoriesPage {

  public categories: Array<any> = new Array();

  public swipe: number = 0;


  show: boolean = true;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    for (let i = 0; i < 100; i++) {
      this.categories.push(`Categoria:  ${i}`);
    }
  }

  ionViewDidLoad() {
  }

  goToCategoryDetail(category: any) {
    this.navCtrl.push(StockDetailCategoriesPage, {
      category: category,
    });
  }


  onInput(e) {
    this.showToastWithCloseButton();
  }

  onCancel(e) {
    this.showToastWithCloseButton();
  }


  presentFilter() {
    this.showToastWithCloseButton();
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
