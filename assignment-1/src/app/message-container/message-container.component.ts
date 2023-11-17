import { Component, EventEmitter, Input, Output } from '@angular/core';

type messageContent = {
  messageFrom: string;
  message: string;
};

type message= {
  messageValue:string
};

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.css']
})
export class MessageContainerComponent { 

  private receivingMessageValue!: message;

  currentTime:any;
  @Input() chatName : string ="";

  @Input('receivingMessage')
  get receivingMessage(): message{
    return this.receivingMessageValue;
  }

  set receivingMessage(receivedMessage: message){
    if(receivedMessage.messageValue!="")
    {
      this.receivingMessageValue= receivedMessage;

      this.allMessages.push({messageFrom:'received',message:receivedMessage.messageValue});
    }

  }

  @Output() messageDetails = new EventEmitter<{messageValue: string}>();

  @Input() themeColour: string="";

  allMessages: messageContent[] = [];




  messageReceived(messageContent: HTMLInputElement)
  {
    if(messageContent.value!="")
    {
      
      this.messageDetails.emit({
        messageValue: messageContent.value
      });
      this.allMessages.push({messageFrom:'sent',message:messageContent.value})
    }

    
  }

  getThemeColor()
  { 
    return this.themeColour;
  }

  getCurrentTime():any{
    this.currentTime = new Date().getHours() + '.' + new Date().getMinutes();
    return this.currentTime;
}

  getChatName()
  {
    return this.chatName;
  }

  getContainerSide():string{
    if(this.chatName=='Somukumar Ekambaram')
    return 'right';
    else
    return 'left';
  }


}
