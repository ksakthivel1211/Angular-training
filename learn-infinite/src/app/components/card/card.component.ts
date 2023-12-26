import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PROFILE_ICON, STAR_IMAGE } from 'src/app/constants/image-constants';
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

  constructor(private dataService:DataService,
              private authenticationService:AuthenticationService,
              private router:Router
    ){}

  ngOnInit()
    {
      this.dataService.getThemeColor().subscribe((data)=> this.themeColor = data);  
    }

  getButtonName()
  {
    return this.buttonName;
  }

  onCardClick()
  {
    if(this.containerPage=="dashboard")
    {
      this.dataService.setSelectedExploredCourse(this.courseDetails);
      this.router.navigate(['/explore-course']);
    }
  }

  addToCart()
  {
    this.authenticationService.addCourseToUser(this.courseDetails.title);
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
