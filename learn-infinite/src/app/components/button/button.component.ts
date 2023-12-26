import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  themeColor!:string;

  @Input() buttonValid!:boolean|null

  @Input() buttonPage:string="";

  @Input() buttonValue:string = "Login";

  @Input() buttonOutputValue:string="";

  disable = false;

  constructor(private router:Router,
              private authenticationService:AuthenticationService,
              private dataService:DataService
    ){}

  ngOnInit()
  {
    this.dataService.getThemeColor().subscribe((data)=> this.themeColor = data);  
  }

  onClick()
  {
    if(this.buttonValue=="Login"){
      this.router.navigate(['/login'])
    }
    else if(this.buttonValue=="Logout")
    {
      this.authenticationService.logout();
      this.router.navigate(['/dashboard'])
    }
    else if(this.buttonValue=="Add to cart")
    {
      this.disable = true;
      this.buttonValue = "Added";
      this.dataService.updateCartCount();
      this.authenticationService.addCourseToUser(this.buttonOutputValue);
    }

  }
}
