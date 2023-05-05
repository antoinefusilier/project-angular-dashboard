import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() form: any;
  // @Input() docForm:any;
  @Output() closeEvent = new EventEmitter<string>();

  @Output() newDoc = new EventEmitter<object>();

  constructor(){}

  onSubmit(docForm:NgForm){
    console.log(this.form)
    console.log("values",docForm.value)
    console.log(typeof(docForm.value))
    console.log(docForm.valid)
    if (docForm.valid === true){

    }
    this.save(docForm.value)

  }
  url = (url: string) =>{
    let newURL = url.replace('https://','')
    console.log(newURL);
    return newURL
  }
  save = (doc:object) => {
    console.log('SAVE', doc)
    this.newDoc.emit(doc)

  }

  close(value: string) {
     this.closeEvent.emit(value);
   }
}
