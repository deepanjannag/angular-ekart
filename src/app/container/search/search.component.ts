import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput')
  searchInputEl: ElementRef;

  onSearchTextChanged() {}
}
