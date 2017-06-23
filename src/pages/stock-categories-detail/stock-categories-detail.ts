import { Component } from '@angular/core';

import { NavController, NavParams, ToastController } from 'ionic-angular';


@Component({
    selector: 'page-stock-categories-detail',
    templateUrl: 'stock-categories-detail.html'
})
export class StockDetailCategoriesPage {
    category: any;

    public products: Array<any> = new Array();

    show: boolean = true;

    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
        this.category = this.navParams.data.category;
        for (let i = 0; i < 20; i++) {
            this.products.push(`${this.category}--->  ${i}`);
        }
    }

    isFinished(n: number) {
        return !(n > 0);
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