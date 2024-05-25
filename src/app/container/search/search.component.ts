import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  updateSearchText(inputEL: HTMLInputElement) {
    this.searchText = inputEL.value;
    this.searchTextChanged.emit(this.searchText);
  }
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {}
}
