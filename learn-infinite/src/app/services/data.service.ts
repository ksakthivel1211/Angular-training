import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthenticationService } from './authentication.service';

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
export class DataService {

  themeColor:BehaviorSubject<string> = new BehaviorSubject<string>('green');

  courseResponse!:course;

  userCourses:course[]=[];

  searchedArray:Subject<course[]> = new Subject<course[]>();

  cartCount:Subject<number> = new Subject<number>();

  cartCourses:course[]=[];

  cartAddedCourses:Subject<course[]> = new Subject<course[]>();

  constructor(private http:HttpClient,private authenticationService:AuthenticationService) { }

  selectedCourseDetails:course[]=[];

  selectedCourse:string ="";

  exploreCourseSelected:course[]=[];

  getData()
  {
    return this.http.get('https://mocki.io/v1/3f7990f0-66b5-4a0f-b37f-85fc69908ffb');
  }

  getCourseList()
  {
    return this.http.get('https://mocki.io/v1/89426ea9-cf0d-4536-bf0e-0ddbd2a6043c');
  }

  changeTheme(color:string)
  {
    this.themeColor.next(color);
  }

  getThemeColor()
  {
    return this.themeColor;
  }

  updateSelectedCourse(courseName:string)
  {
    this.selectedCourse = courseName;
  }

  onSearchedCourse(name:string)
  { 
    this.selectedCourseDetails = [];
    this.getCourseList().subscribe((data:any)=>{
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

  getCourseData(name:string)
  {
    this.userCourses = [];
    this.getCourseList().subscribe((data:any)=>{
      
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
    this.authenticationService.getUserCoursesName().forEach((data)=>{
      this.getCourseData(data);
    });
  }


  getUserCourses()
  {
    return this.userCourses;
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
