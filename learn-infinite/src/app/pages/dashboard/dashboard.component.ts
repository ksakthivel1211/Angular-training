import { ChangeDetectorRef, Component } from '@angular/core';
import { NO_SEARCH_RESULT } from 'src/app/constants/error-constants';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CourseService } from 'src/app/services/course.service';
import { DataService } from 'src/app/services/data.service';
import { ThemeService } from 'src/app/services/theme.service';

type course = {
  "title":string,
  "rating":number,
  "creator":string,
  "price":number,
  "image":string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  themeColor!:string;

  readonly noSearchResult = NO_SEARCH_RESULT;

  pageValue = "dashboard";

  searchedCourseValid = true;

  recommendationHeading = "Recommended for you";

  courseSufix = " courses";

  selectedCourse = 'trending';

  selectedCourseList!:course[];

  recommendedCourseList:course[]=[];

  courseLoadingStatus = false ;

  recommendedCourseLoadingStatus = false;

  constructor(private dataService:DataService,
              private authenticationService:AuthenticationService,
              private themeService:ThemeService,
              private courseService:CourseService
    ){}

  ngOnInit()
  {
    this.themeService.getThemeColor().subscribe((data)=>{
      this.themeColor = data;
    });

    this.authenticationService.autoLogin();
    this.getCourseData();
    this.getRecommendedCourseData();
    this.courseService.getSearchedCourses().subscribe((data)=>{
      this.selectedCourseList = data
      if(this.selectedCourseList.length>0)
      {
        this.selectedCourse = "searched"
        this.searchedCourseValid = true;
      }
      else{
        this.searchedCourseValid = false;
      }
    });
  }

  loggedIn()
  {
    return this.authenticationService.getLoginStatus();
  }

  getCourseData()
  {
    this.courseLoadingStatus = true;
    this.dataService.getData().subscribe((data:any)=>{
      this.selectedCourseList = data[this.selectedCourse];
      this.courseLoadingStatus = false;
    });
  }

  getRecommendedCourseData()
  {
    this.recommendedCourseLoadingStatus = true;
    this.dataService.getData().subscribe((data:any)=>{
      this.recommendedCourseList = this.selectedCourseList;
      this.recommendedCourseLoadingStatus = false;
    });
  }

  updateCourse(name:string){
    this.searchedCourseValid = true;
    this.selectedCourse = name;
    this.getCourseData();
  }

  getCourseLoddingStatus()
  {
    return this.courseLoadingStatus;
  }

  getRecommendedCourseLoadingStatus()
  {
    return this.recommendedCourseLoadingStatus;
  }

  getSearchedCourseValid()
  {
    return this.searchedCourseValid;
  }
}
