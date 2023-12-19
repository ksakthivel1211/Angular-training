import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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

  constructor(private http:HttpClient) { }

  selectedCourseDetails:course[]=[];

  selectedCourse:string ="";

  getData()
  {
    return this.http.get('https://mocki.io/v1/3f7990f0-66b5-4a0f-b37f-85fc69908ffb');
  }

  getCourseList()
  {
    return this.http.get('https://mocki.io/v1/89426ea9-cf0d-4536-bf0e-0ddbd2a6043c');
  }

  updateSelectedCourse(courseName:string)
  {
    this.selectedCourse = courseName;
  }

  onSearchedCourse(name:string)
  {
    this.getCourseList().subscribe((data:any)=>{
      const allCourses:course[] =  data.courses;

      allCourses.forEach((data)=>{
        if(data.title===name||data.creator===name)
        {
          this.selectedCourseDetails.push(data);
        }
      });
    });
  }

  getSearchedCourses()
  {
    return this.selectedCourseDetails;
  }

  
}
