import { Component } from '@angular/core';
import { MY_COURSES_NILL } from 'src/app/constants/error-constants';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CourseService } from 'src/app/services/course.service';
import { DataService } from 'src/app/services/data.service';

type course = {
  "title":string,
  "rating":number,
  "creator":string,
  "price":number,
  "image":string
}

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {

  readonly noCoursesResponse = MY_COURSES_NILL;

  pageValue = "myCourse";

  courseList:course[]=[];

  constructor(private authenticatService:AuthenticationService,
              private courseService:CourseService
    ){}

  ngOnInit()
  {
    this.courseService.updateUserCourses();
    this.courseList = this.courseService.getUserCourses();
  }

  getCourseAvalability()
  {
    if(this.courseList.length>0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}
