import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() form: any;

  @Output() closeEvent = new EventEmitter<string>();

  constructor(){}

  close(value: string) {
     this.closeEvent.emit(value);
   }
}
