import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-left-menu-container',
  templateUrl: './left-menu-container.component.html',
  styleUrls: ['./left-menu-container.component.css']
})
export class LeftMenuContainerComponent implements OnInit {

  themeColor!:string;

  buttonMessage = "Logout";

  selectedTab = 'dashboard';

  constructor(private authenticationService:AuthenticationService,
              private themeService:ThemeService
    ){}

  pagesArray = [
    {
      name:'dashboard',
      displayName:'Dashboard',
      routeLink:'/dashboard'
    },
    {
      name:'exploreCourse',
      displayName:'Explore Courses',
      routeLink:'/explore-course'
    },
    {
      name:'myCourse',
      displayName:'My Courses',
      routeLink:'/my-courses'
    },
    {
      name:'notes',
      displayName:'Notes',
      routeLink:'/notes'
    },
    {
      name:'settings',
      displayName:'Settings',
      routeLink:'/settings'
    }
  ]

  ngOnInit() {
    this.themeService.getThemeColor().subscribe((data)=> this.themeColor = data);  
  }

  getLoggedStatus()
  {
    return this.authenticationService.getLoginStatus();
  }

  onClick(value:string)
  {
    this.selectedTab = value;
  }
}
