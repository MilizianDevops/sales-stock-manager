import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NewSalePage } from '../new-sale/new-sale';

@Component({
  selector: 'page-sales',
  templateUrl: 'sales.html'
})
export class SalesPage {

  public products: Array<any> = new Array();

  constructor(public navCtrl: NavController) {
    for (let i = 1; i <= 5; i++) {
      this.products.push(`Producto ${i}`);
    }
  }

  ionViewDidLoad() {
  }

  isFinished(n: number) {
    return !(n > 0);
  }

  goToNewSale() {
    this.navCtrl.push(NewSalePage);
  }

}
