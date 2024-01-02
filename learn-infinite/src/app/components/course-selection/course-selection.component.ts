import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.css']
})
export class CourseSelectionComponent {

  themeColor!:string;

  @Output() courseName = new EventEmitter<string>();

  selectedCourse = 'trending';

  courseList = ["trending","development","featured","frontend","onDiscount","onDiscount","onDiscount","onDiscount","onDiscount","onDiscount"];

  constructor(private themeService:ThemeService){}

  ngOnInit()
  {
    this.themeService.getThemeColor().subscribe((data)=> this.themeColor = data);  
  }

  onCourseSelection(name:string)
  {
    this.selectedCourse = name;
    this.courseName.emit(name);
  }
}
