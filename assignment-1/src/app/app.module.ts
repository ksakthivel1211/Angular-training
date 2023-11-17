import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageContainerComponent } from './message-container/message-container.component';
import { ColourPalleteContainerComponent } from './colour-pallete-container/colour-pallete-container.component';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MessageContainerComponent,
    ColourPalleteContainerComponent,
    ChatBubbleComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
