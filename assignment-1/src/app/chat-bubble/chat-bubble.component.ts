import { Component, Input } from '@angular/core';

// const chatBubble = document.getElementById('child-bubble');


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

  getBubbleColorClass()
  { 
    console.log(this.bubbleColour);
    
    if(this.bubbleColour=='#8f8f8f')
    {
        return 'grey';
    }
    if(this.bubbleColour=='#dbe2c3')
    {
      return 'paleGreen';
    }
    if(this.bubbleColour=='#637979')
    {
      return 'tint';
    }
    if(this.bubbleColour=='#20410f')
    {
      return 'darkGreen';
    }
    if(this.bubbleColour=='#4e4e6e')
    {
      return 'purple';
    }
    if(this.bubbleColour=='#5683a3')
    {
      console.log("hi");
      return 'powerBlue'

      
    }
  
    return 'powderBlue';
  }

  getContainerSide()
  {
    return this.containerSide;
  }

  getBubbleContainerSide():string{
    
      if(this.getContainerSide()=='right'){
        if(this.getBubbleSide()=='right'){
          return 'right-cont-right-bubble';
        }
        else{
          return 'right-cont-left-bubble';
        }
      }
      else{
        if(this.getBubbleSide()=='right'){
          return 'left-cont-right-bubble';
        }
        else{
          return 'left-cont-left-bubble';
        }
      }
  }


  
}
