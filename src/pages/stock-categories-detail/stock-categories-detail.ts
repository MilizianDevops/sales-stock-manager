import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
    selector: 'page-stock-categories-detail',
    templateUrl: 'stock-categories-detail.html'
})
export class StockDetailCategoriesPage {
    category: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.category = this.navParams.data.category;
    }

}