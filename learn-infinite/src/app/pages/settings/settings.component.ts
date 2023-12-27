import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ThemeService } from 'src/app/services/theme.service';

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

  constructor(private themeService:ThemeService){}

  onThemeChange(value:string)
  {
    this.themeService.changeTheme(value);
  }
}
