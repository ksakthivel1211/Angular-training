import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CART_IMAGE, PROFILE_ICON } from 'src/app/constants/image-constants';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CourseService } from 'src/app/services/course.service';
import { DataService } from 'src/app/services/data.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  readonly cartImage = CART_IMAGE;
  
  themeColor!:string;

  cartNumber = 0;

  clasname = "search-box"

  loggdIn = false;

  welcomeMessageLogout = "Welcome to learning"
  welcomeMessageLogin = "Welcome back, "

  userName = "";

  constructor(private authenticationService:AuthenticationService,
              private courseService:CourseService,
              private router:Router,
              private titlePipe:TitleCasePipe,
              private themeService:ThemeService,
              private userDataService:UserDataService
    ){}

  ngOnInit()
  {
    this.themeService.getThemeColor().subscribe((data)=> this.themeColor = data);  
    this.courseService.getCartCount().subscribe((data)=>{
      this.cartNumber = this.cartNumber + data;
    })
    this.userName = this.getUsername();
  }

  getLoggedStatus()
  {
    return this.authenticationService.getLoginStatus()
  }

  getUsername()
  {
    return this.titlePipe.transform(this.userDataService.getUserName());
  }

  cartOnClick()
  {
    this.router.navigate(['/my-courses']);
  }
}
