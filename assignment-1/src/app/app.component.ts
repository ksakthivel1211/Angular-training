import { Component, EventEmitter, Output } from '@angular/core';

type message= {
  messageValue:string
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-1';
  rightThemeColour: string ="#5683a3";
  leftThemeColour: string ="#5683a3";

  mounikaMessageValue: message = {messageValue:''};

  somMessageValue:message = {messageValue:''};



  onMounikaMessageReceived(messageData:{messageValue:string})
  {
    this.mounikaMessageValue = messageData;
  }
  onSomMessageReceived(messageData:{messageValue:string})
  {
    this.somMessageValue = messageData;
  }

  onRightContainerColourChange(colourInfo:{colourValue: string})
  {
    this.rightThemeColour = colourInfo.colourValue;
  }
  onLeftContainerColourChange(colourInfo:{colourValue: string})
  {
    this.leftThemeColour = colourInfo.colourValue;
  }

  getRightThemeColor()
  {
    return this.rightThemeColour;
  }
  getLeftThemeColor()
  {
    return this.leftThemeColour;
  }
}
