import { Component,Input, Output, EventEmitter } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {

  @Input() doc:any;

  @Output() closeEvent = new EventEmitter<string>();

  constructor(private sanitizer: DomSanitizer){}

  loadFrame = (id:string) => {
    let frame = document.getElementById(id)

  }

  iframeURL(url:string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  close(value: string) {
     this.closeEvent.emit(value);
   }
}
