import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { DataService } from './data.service';
import { UserDataService } from './user-data.service';

type course = {
  "title":string,
  "rating":number,
  "creator":string,
  "price":number,
  "image":string
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseResponse!:course;

  userCourses:course[]=[];

  searchedArray:Subject<course[]> = new Subject<course[]>();

  cartCount:Subject<number> = new Subject<number>();

  cartCourses:course[]=[];

  cartAddedCourses:Subject<course[]> = new Subject<course[]>();

  selectedCourseDetails:course[]=[];

  selectedCourse:string ="";

  exploreCourseSelected:course[]=[];

  constructor(private userDataService:UserDataService,private dataService:DataService) { }


  updateSelectedCourse(courseName:string)
  {
    this.selectedCourse = courseName;
  }

  onSearchedCourse(name:string)
  { 
    this.selectedCourseDetails = [];
    this.dataService.getCourseList().subscribe((data:any)=>{
      const allCourses:course[] =  data.courses;

      allCourses.forEach((data)=>{
        if(data.title.toLowerCase()===name.toLowerCase()||data.creator.toLowerCase()===name.toLowerCase())
        {
          this.selectedCourseDetails.push(data);
        }
      });
      this.searchedArray.next(this.selectedCourseDetails);
    });
  }

  addToUserCourseData(name:string)
  {

    this.dataService.getCourseList().subscribe((data:any)=>{
      
      const allCourses:course[] =  data.courses;
      
      allCourses.forEach((data)=>{
        if(data.title===name)
        {
          this.userCourses.push(data);
        }
      });
    });
  }

  updateUserCourses()
  {
    this.userCourses = [];
    this.userDataService.getUserCoursesName().forEach((data)=>{
      this.addToUserCourseData(data);
    });
  }

  getUserCourses()
  {
    return this.userCourses;
  }

  findUserCourseAvalable(course:string)
  {
    if((this.userDataService.getUserCoursesName().filter((value)=>value==course)).length>0)
    {
      return true;
    }
    else{
      return false;
    }
  }




  getSearchedCourses()
  {
    return this.searchedArray;
  }

  getSelectedExploreCourse()
  {
    return this.exploreCourseSelected;
  }

  setSelectedExploredCourse(course:course)
  {
    this.exploreCourseSelected = [];
    this.exploreCourseSelected.push(course);
  }

  emptyExploredCourse()
  {
    this.exploreCourseSelected = [];
  }

  getCartCount()
  {
    return this.cartCount;
  }

  updateCartCount()
  {
    this.cartCount.next(1);
  }
}
