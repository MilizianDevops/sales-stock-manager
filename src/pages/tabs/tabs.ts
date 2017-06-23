import { Component } from '@angular/core';

import { SalesPage } from '../sales/sales';
import { StockCategoriesPage } from '../stock-categories/stock-categories';
import { SuppliersPage } from '../suppliers/suppliers';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SalesPage;
  tab3Root = StockCategoriesPage;
  tab4Root = SuppliersPage;

  constructor() {

  }
}
