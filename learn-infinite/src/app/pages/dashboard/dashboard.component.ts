import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';

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

  selectedCourse = 'trending';

  selectedCourseList!:course[];

  constructor(private dataService:DataService,
              private authenticationService:AuthenticationService
    ){}

  ngOnInit()
  {
    this.getCourseData();
  }

  loggedIn()
  {
    return this.authenticationService.getLoginStatus();
  }

  getCourseData()
  {
    this.dataService.getData().subscribe((data:any)=>{
      this.selectedCourseList = data[this.selectedCourse];
    })
  }

  updateCourse(name:string){
    this.selectedCourse = name;
    this.getCourseData();
  }

}
