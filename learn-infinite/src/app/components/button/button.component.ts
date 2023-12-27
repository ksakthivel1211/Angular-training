import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CourseService } from 'src/app/services/course.service';
import { DataService } from 'src/app/services/data.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  themeColor!:string;

  @Input() buttonValid!:boolean|null;

  @Input() buttonPage:string="";

  @Input() buttonValue:string = "Login";

  @Input() buttonOutputValue:string="";


  constructor(private router:Router,
              private authenticationService:AuthenticationService,
              private courseService:CourseService,
              private themeService:ThemeService,
              private userDataService:UserDataService
    ){}

  ngOnInit()
  {
    this.themeService.getThemeColor().subscribe((data)=> this.themeColor = data);
    if(this.courseService.findUserCourseAvalable(this.buttonOutputValue) && this.buttonPage=='exploreCourse')
    {
      this.buttonValue = 'Added';
      this.buttonValid= true;
    }
  }

  onClick()
  {
    if(this.buttonValue=="Login"){
      this.router.navigate(['/login'])
    }
    else if(this.buttonValue=="Logout")
    {
      this.authenticationService.logout();
      this.router.navigate(['/dashboard'])
    }
    else if(this.buttonValue=="Add to cart")
    {
      this.buttonValid = true;
      this.buttonValue = "Added";
      this.courseService.updateCartCount();
      this.userDataService.addCourseToUser(this.buttonOutputValue);
    }

  }
}
