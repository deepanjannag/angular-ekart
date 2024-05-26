import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  listOfString: string[] = ['John', 'Rob', 'Kenny', 'Bob', 'Joe'];

  searchText: string = '';

  @ViewChild(ProductListComponent)
  productListComponent: ProductListComponent;

  onSearchTextChanged(value: string) {
    this.searchText = value;
  }
}
