import { Component } from '@angular/core';
import { PROFILE_ICON } from 'src/app/constants/image-constants';

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.css']
})
export class ProfileIconComponent {

  readonly profileImage = PROFILE_ICON;

}
