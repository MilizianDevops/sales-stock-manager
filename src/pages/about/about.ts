import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public products: Array<any> = new Array();

  constructor(public navCtrl: NavController) {
    for(let i = 1; i <= 5; i++){
      this.products.push(`Producto ${i}`);
    }
  }

  ionViewDidLoad() {
  }

  isFinished(n: number) {
        return !(n > 0);
    }

}
