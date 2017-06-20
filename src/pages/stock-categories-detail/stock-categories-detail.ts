import { Component } from '@angular/core';

import { NavController, NavParams, ToastController } from 'ionic-angular';


@Component({
    selector: 'page-stock-categories-detail',
    templateUrl: 'stock-categories-detail.html'
})
export class StockDetailCategoriesPage {
    category: any;


    show: boolean = true;

    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
        this.category = this.navParams.data.category;
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

}