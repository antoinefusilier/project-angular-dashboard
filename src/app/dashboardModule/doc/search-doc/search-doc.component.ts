import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-doc',
  templateUrl: './search-doc.component.html',
  styleUrls: ['./search-doc.component.css']
})
export class SearchDocComponent {
  @Output() closeEvent = new EventEmitter<string>();

  constructor(){}

  close(value: string) {
       this.closeEvent.emit(value);
     }
}
