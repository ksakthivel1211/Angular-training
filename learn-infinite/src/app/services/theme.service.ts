import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  themeColor:BehaviorSubject<string> = new BehaviorSubject<string>('green');

  changeTheme(color:string)
  {
    this.themeColor.next(color);
  }

  getThemeColor()
  {
    return this.themeColor;
  }
}
