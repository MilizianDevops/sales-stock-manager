import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

// import { StockDetailCategoriesPage } from '../stock-categories-detail/stock-categories-detail';

@Component({
    selector: 'page-suppliers',
    templateUrl: 'suppliers.html'
})
export class SuppliersPage {

    public suppliers: Array<any> = new Array();

    show: boolean = true;

    constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
        for (let i = 0; i < 20; i++) {
            this.suppliers.push(`suppliers: ${i}`);
        }
    }

}
