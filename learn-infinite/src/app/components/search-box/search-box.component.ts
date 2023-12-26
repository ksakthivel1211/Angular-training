import { Component } from '@angular/core';
import { SEARCH_ICON } from 'src/app/constants/image-constants';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  readonly searchIcon = SEARCH_ICON;

  constructor(private dataService:DataService){}

  onEnter(value:string)
  {
    if(value)
    {
      this.dataService.onSearchedCourse(value);
    }
  }
}
