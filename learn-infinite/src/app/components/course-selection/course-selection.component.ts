import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.css']
})
export class CourseSelectionComponent {

  @Output() courseName = new EventEmitter<string>();

  courseList = ["trending","development","featured","frontend","onDiscount","onDiscount","onDiscount","onDiscount","onDiscount","onDiscount"];

  onCourseSelection(name:string)
  {
    this.courseName.emit(name);
  }
}
