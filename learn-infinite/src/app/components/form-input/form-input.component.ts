import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { INVALID_EMAIL, INVALID_PASSWORD, NO_INPUT } from 'src/app/constants/error-constants';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit{

  @Input() inputId = '';
  @Input() control = new FormControl();
  @Input() label = '';
  @Input() inputType = '';

  errorMessages: Record<string,string> = {
    required:NO_INPUT,
    email:INVALID_EMAIL,
    pattern:INVALID_PASSWORD
  }

  constructor(){}

  ngOnInit(): void {
  }

}
