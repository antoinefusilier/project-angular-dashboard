import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {

  @Input() doc:any;

  @Output() closeEvent = new EventEmitter<string>();

  constructor(){}

  close(value: string) {
     this.closeEvent.emit(value);
   }
}
