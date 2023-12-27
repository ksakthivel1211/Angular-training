import { Component } from '@angular/core';
import { SEARCH_ICON } from 'src/app/constants/image-constants';
import { CourseService } from 'src/app/services/course.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  readonly searchIcon = SEARCH_ICON;

  placeHolder = 'Search for courses, teachers, files';

  constructor(private courseService:CourseService){}

  onEnter(value:string)
  {
    if(value)
    {
      this.courseService.onSearchedCourse(value);
    }
  }
}
