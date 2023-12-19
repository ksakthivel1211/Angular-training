import { Component, Input } from '@angular/core';
import { PROFILE_ICON } from 'src/app/constants/image-constants';

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

  @Input() courseDetails!:course;

  ngOnInit()
  {
  }

}
