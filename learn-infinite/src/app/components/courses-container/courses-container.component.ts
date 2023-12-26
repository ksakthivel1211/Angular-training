import { Component, Input } from '@angular/core';

type course = {
  "title":string,
  "rating":number,
  "creator":string,
  "price":number,
  "image":string
}

@Component({
  selector: 'app-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.css']
})
export class CoursesContainerComponent {

  @Input() courseList!:course[];

  @Input() containerPage:string="";

  @Input() containerHeading:string="courses";

  ngOnInit()
  {
  }

  onScroll(side:string)
  {
    const container = document.getElementById('scroll-container');
    if(container)
    {
      if(side=="left")
      {
        container.scrollLeft -= 200;
      }
      else if(side=="right")
      {
        container.scrollLeft += 200;
      }
    }
  }

  setBg(index:number):string
  {
    if(index%5==0)
    {
      return 'img-sandal';
    }
    else if(index%5==1)
    {
      return 'img-peach';
    }
    else if(index%5==2)
    {
      return 'img-gray'
    }
    else if(index%5==3)
    {
      return 'img-green'
    }
    else if(index%5==4)
    {
      return 'img-pink'
    }
    return 'img-green'
  }
}
