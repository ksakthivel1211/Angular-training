import { Component } from '@angular/core';
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
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.css']
})
export class ExploreCoursesComponent {

  pageValue = "exploreCourse";

  pageHeading = "Explore courses :";

  courseList:course[]=[];

  constructor(private courseService:CourseService,private dataService:DataService){}

  ngOnInit()
  {
    if((this.courseService.getSelectedExploreCourse()).length>0)
    {
      this.courseList = this.courseService.getSelectedExploreCourse();
      this.courseService.emptyExploredCourse();
    }
    else
    {
      this.dataService.getCourseList().subscribe((data:any)=>{
        this.courseList = data.courses;
      });
    }

  }

  getCourseData()
  {
    this.dataService.getCourseList().subscribe((data:any)=>{
      this.courseList = data.courses;
    });
  }

  

}
