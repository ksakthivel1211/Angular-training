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


  courseResponse!:course;

  userCourses:course[]=[];

  searchedArray:Subject<course[]> = new Subject<course[]>();

  cartCount:Subject<number> = new Subject<number>();

  cartCourses:course[]=[];

  cartAddedCourses:Subject<course[]> = new Subject<course[]>();

  constructor(private http:HttpClient) { }

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

  
}
