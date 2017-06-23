import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SalesPage } from '../pages/sales/sales';
import { StockCategoriesPage } from '../pages/stock-categories/stock-categories';
import { StockDetailCategoriesPage } from '../pages/stock-categories-detail/stock-categories-detail';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PopoverPage } from '../pages/navbar-popover/navbar-popover';
import { SuppliersPage } from '../pages/suppliers/suppliers';
import { NewSalePage } from '../pages/new-sale/new-sale';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ElasticHeaderDirective } from '../directives/elastic-header/elastic-header';

@NgModule({
  declarations: [
    MyApp,
    SalesPage,
    NewSalePage,
    StockCategoriesPage,
    StockDetailCategoriesPage,
    HomePage,
    TabsPage,
    PopoverPage,
    SuppliersPage,
    ElasticHeaderDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,
      {
        tabsPlacement: 'bottom',
        platforms: {
          android: {
            tabsHideOnSubPages: 'true'
          }
        }
      },
      {
        links: [
          { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
          { component: StockCategoriesPage, name: 'StockCategories', segment: 'stockcategories' },
          { component: StockDetailCategoriesPage, name: 'StockCategoriesDetail', segment: 'stockcategoriesdetail/:category' },
          { component: HomePage, name: 'Home', segment: 'home' },
          { component: SalesPage, name: 'Sales', segment: 'sales' },
          { component: NewSalePage, name: 'NewSale', segment: 'newSale' },
          { component: SuppliersPage, name: 'Suppliers', segment: 'suppliers' }
        ]
      }
    )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SalesPage,
    NewSalePage,
    StockCategoriesPage,
    StockDetailCategoriesPage,
    PopoverPage,
    HomePage,
    SuppliersPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
