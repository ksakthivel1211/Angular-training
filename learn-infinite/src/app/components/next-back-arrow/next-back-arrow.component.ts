import { Component, EventEmitter, Output } from '@angular/core';
import { LEFT_ARROW_ICON, RIGHT_ARROW_ICON } from 'src/app/constants/image-constants';

@Component({
  selector: 'app-next-back-arrow',
  templateUrl: './next-back-arrow.component.html',
  styleUrls: ['./next-back-arrow.component.css']
})
export class NextBackArrowComponent {

  readonly rightArrow = RIGHT_ARROW_ICON;
  readonly leftArrow = LEFT_ARROW_ICON;

  @Output() scrollSide = new EventEmitter<string>();

  onLeftSideClick()
  {
    this.scrollSide.emit("left");
  }

  onRightSideClick()
  {
    this.scrollSide.emit("right");
  }
}
