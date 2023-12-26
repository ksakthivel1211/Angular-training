import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  pageContent = {
    pageHeading:'Settings :',
    themeSelectionHeading:'Choose theme color:'
  }

  colorPallete = ['green','red'];

  constructor(private dataService:DataService){}

  onThemeChange(value:string)
  {
    this.dataService.changeTheme(value);
  }
}
