import { Injectable } from '@angular/core';

type userData = {
  email:string,
  password:string,
  username:string,
  boughtCourses:string[]
}


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  loggedStatus = false;

  userName ="";

  userSignedUpData:userData[]=[
    {
      email:"sa@gmail.com",
      password:"Sakthi11!",
      username:"sakthivel",
      boughtCourses:[]
    }
];

currentUser:userData = {
  email:"",
  password:"",
  username:"",
  boughtCourses:[]
};

  constructor() { }

  getUserName()
  {
    return this.currentUser.username;
  }

  addToUserdata(value:userData)
  {
    this.userSignedUpData.push(value);
  }

  addCourseToUser(courseName:string)
  {
    this.currentUser.boughtCourses.push(courseName);
  }

  getUserCoursesName()
  {
    return this.currentUser.boughtCourses;
  }
}
