import { AfterViewChecked, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PROFILE_ICON,BACK_ICON,SEND_ICON } from '../constants/constants';

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
export class MessageContainerComponent implements AfterViewChecked{ 

  @ViewChild('bubbleContainer',{static:false}) bubbleContainer! : ElementRef;


  ngAfterViewChecked()
  {
    this.scrollToBottom();
  }

  scrollToBottom(){
    this.bubbleContainer.nativeElement.scrollTop = this.bubbleContainer.nativeElement.scrollHeight;
  }

  private receivingMessageValue!: message;

  readonly profileIcon = PROFILE_ICON;
  readonly backIcon = BACK_ICON;
  readonly sendIcon = SEND_ICON;

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

    messageContent.value='';
  }

  getThemeColor()
  { 
    return this.themeColour;
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
