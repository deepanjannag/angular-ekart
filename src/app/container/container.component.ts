import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  listOfString: string[] = ['John', 'Rob', 'Kenny', 'Bob', 'Joe'];

  searchText: string = '';

  onSearchTextChanged(value: string) {
    this.searchText = value;
  }
}
