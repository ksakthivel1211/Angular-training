import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-colour-pallete-container',
  templateUrl: './colour-pallete-container.component.html',
  styleUrls: ['./colour-pallete-container.component.css']
})
export class ColourPalleteContainerComponent {

  @Output() themeColour = new EventEmitter<{colourValue:string}>;


  currentTheme: string = "#5683a3";



  onColorChange(event : any){
        this.themeColour.emit({
      colourValue: event.target.value
    });
    this.currentTheme= event.target.value;
  }
}
