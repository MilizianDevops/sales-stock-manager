import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { PopoverPage } from '../navbar-popover/navbar-popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }

}
