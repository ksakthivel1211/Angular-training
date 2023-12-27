import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PROFILE_ICON, STAR_IMAGE } from 'src/app/constants/image-constants';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CourseService } from 'src/app/services/course.service';
import { DataService } from 'src/app/services/data.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UserDataService } from 'src/app/services/user-data.service';

type course = {
  "title":string,
  "rating":number,
  "creator":string,
  "price":number,
  "image":string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  readonly profileIcon = PROFILE_ICON;
  readonly starImg = STAR_IMAGE;

  buttonName="Add to cart";

  themeColor!:string;

  @Input() courseDetails!:course;

  @Input() containerPage:string="";

  @Input() cardColor:string='green';

  courseDescriptionHeadings = {
    courseTitle:'Course :',
    courseDescription:'Course description :',
    rating:'Rating :',
    author:'Author :',
    price:'Course price'
  }

  commonCourseDescription = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quis deleniti, quia temporibus eveniet a quod libero impedit enim tempore numquam qui eaque ducimus quos neque, nobis asperiores, veritatis quae.';

  constructor(private courseService:CourseService,
              private userDataService:UserDataService,
              private router:Router,
              private themeService:ThemeService
    ){}

  ngOnInit()
    {
      this.themeService.getThemeColor().subscribe((data)=> this.themeColor = data);  
    }

  getButtonName()
  {
    return this.buttonName;
  }

  onCardClick()
  {
    if(this.containerPage=="dashboard")
    {
      this.courseService.setSelectedExploredCourse(this.courseDetails);
      this.router.navigate(['/explore-course']);
    }
  }

  addToCart()
  {
    this.userDataService.addCourseToUser(this.courseDetails.title);
  }

  showFullCardValid()
  {
    if(this.containerPage=='exploreCourse'||this.containerPage=='myCourse')
    {
      return true;
    }
    return false;
  }

}
