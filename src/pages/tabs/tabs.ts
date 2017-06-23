import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { StockCategoriesPage } from '../stock-categories/stock-categories';
import { SuppliersPage } from '../suppliers/suppliers';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = StockCategoriesPage;
  tab4Root = SuppliersPage;

  constructor() {

  }
}
