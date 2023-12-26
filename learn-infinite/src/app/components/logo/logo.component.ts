import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LEARN_INFINITE_LOGO } from 'src/app/constants/image-constants';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {

  readonly learnInfiniteLogo = LEARN_INFINITE_LOGO;

  constructor(private router:Router){}

  goToHome()
  {
    this.router.navigate(['/dashboard']);
  }
}
