import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';


export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage;

  firstSectionPages: PageInterface[] = [
    { title: 'Panel de control', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'home' },
    { title: 'Nueva Venta', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'cart' },
    { title: 'Balance de Ventas', name: 'TabsPage', component: TabsPage, tabComponent: AboutPage, index: 1, icon: 'stats' },
  ];
  secondSectionPages: PageInterface[] = [
    { title: 'Añadir stock', name: 'TabsPage', component: TabsPage, tabComponent: ContactPage, index: 2, icon: 'add-circle' },
    { title: 'Stock disponible', name: 'TabsPage', component: TabsPage, tabComponent: AboutPage, index: 1, icon: 'cube' },
    { title: 'Proveedores', name: 'TabsPage', component: TabsPage, tabComponent: ContactPage, index: 2, icon: 'contacts' },
  ];
  otherPages: PageInterface[] = [
    { title: 'Mi cuenta', name: 'TabsPage', component: TabsPage, tabComponent: ContactPage, index: 2, icon: 'contact' },
    { title: 'Ayuda', name: 'TabsPage', component: TabsPage, tabComponent: AboutPage, index: 1, icon: 'help-circle' },
    { title: 'Salir', name: 'TabsPage', component: TabsPage, tabComponent: AboutPage, index: 1, icon: 'power' }

  ];


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {
    let params = {};

    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
      // Set the root of the nav with params if it's a tab index
    } else {
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }
  }


  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
}
