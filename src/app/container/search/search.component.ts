import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string="Mens Wear";

  updateSearchText(e:any) {
    this.searchText = e.target.value;
  }
}