import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css']
})
export class ChatBubbleComponent {

  todayDate: Date = new Date();

  @Input() singleMessage!: {
    messageFrom: string;
    message: string;
  };

  @Input() bubbleColour: string="";

  @Input() containerSide: string = "";

  getBubbleSide():string
  {
    if(this.singleMessage.messageFrom=='sent')
    {
      return 'right';
    }
    else
    {
      return 'left';
    }
  }

  getMessageValue():string{
    return this.singleMessage.message;
  }

  getBubbleColor()
  { 
    
    return this.bubbleColour;
  }

  getContainerSide()
  {
    return this.containerSide;
  }

  getBubbleContainerSide():string{
    
      if(this.getContainerSide()=='right'){
        if(this.getBubbleSide()=='right'){
          return '20px 20px 0px 20px';
        }
        else{
          return '20px 20px 20px 0px';
        }
      }
      else{
        if(this.getBubbleSide()=='right'){
          return '30px 30px 0px 30px';
        }
        else{
          return '30px 30px 30px 0px';
        }
      }
  }
}
