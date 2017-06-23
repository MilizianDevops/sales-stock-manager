import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewSalePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-sale',
  templateUrl: 'new-sale.html',
})
export class NewSalePage {
  show = true;

  public categories: Array<any> = new Array();
  public products: Array<any> = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 1; i <= 5; i++)
      this.categories.push(`Categoría ${i}`);
    for (let i = 1; i <= 5; i++)
      this.products.push(`Producto ${i}`);
  }

  ionViewDidLoad() {

  }

  isFinished(n: number) {
    return !(n > 0);
  }

  isShown() {
    this.show = !this.show;
  }

}
