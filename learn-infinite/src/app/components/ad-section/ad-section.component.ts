import { Component } from '@angular/core';
import { BOOK_IMAGE, STUDY_IMAGE } from 'src/app/constants/image-constants';
import { DataService } from 'src/app/services/data.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-ad-section',
  templateUrl: './ad-section.component.html',
  styleUrls: ['./ad-section.component.css']
})
export class AdSectionComponent {

  readonly studyImg = STUDY_IMAGE;
  readonly bookImg = BOOK_IMAGE;

  themeColor!:string;

  activeTab = 0;

  navigateButonValue = {
    next:'next',
    previous:'previous'
  };

  tabContent = [
    {
      leftImg:this.studyImg,
      heading:"You can learn yourself",
      description:"The more that you read, the more things you will know. The more you learn, the more places you'll go. Happy Learning!!",
      rightImg:this.bookImg
    },
    {
      leftImg:this.studyImg,
      heading:"Create your own course !!",
      description:"Knowledge expands only when you share it, Happy Learning!!",
      rightImg:this.bookImg
    },
    {
      leftImg:this.studyImg,
      heading:"Free courses for students",
      description:"We will be your friend who teaches the syllabus the night before the exam. Happy Learning!!",
      rightImg:this.bookImg
    },
    {
      leftImg:this.studyImg,
      heading:"You can learn yourself",
      description:"The more that you read, the more things you will know. The more you learn, the more places you'll go. Happy Learning!!",
      rightImg:this.bookImg
    }
  ]

  // ngOnInit()
  // {
  //   setInterval(()=>{

  //     if(this.activeTab==this.tabContent.length-1){
  //       this.activeTab = 0;
  //     }
  //     else{
  //       this.activeTab+1;
  //     }
  //   },2000)
  // }

  constructor(private themeService:ThemeService){}

  ngOnInit()
  {
    this.themeService.getThemeColor().subscribe((data)=> this.themeColor = data);  
  }



  getActiveTab()
  {
    return this.activeTab;
  }
}
