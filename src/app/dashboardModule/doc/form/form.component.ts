import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { OrderedBulkOperation } from 'mongodb';
import { AlertsService } from 'src/app/appServices/alerts.service';
import { environment } from 'src/environments/environment.development';
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

  constructor(private http: HttpClient, private as: AlertsService){}

  onSubmit(docForm:NgForm){
    console.log(this.form)
    console.log("values",docForm.value)
    console.log(typeof(docForm.value))
    console.log(docForm.valid)
    if (docForm.valid === true){

    }
    if (docForm.value._id){
      
      this.as.warn(`Sauvegarde...`, `Enregistrement ... ${(JSON.stringify(docForm.value))}...`)
      this.update(docForm.value._id,docForm.value);
    } else {


      this.save(docForm.value)
    }

  }
  url = (url: string) =>{
    let newURL = url.replace('https://','')
    console.log(newURL);
    return newURL
  }

  update = (_id:string,doc:object) => {
    this.http.patch(`${environment.backEnd.cr_doc}/update`,
    {id:_id, data: doc},{})
      .subscribe((cb:any)=>{
        if(cb){
          this.as.success(`${cb.name} à bien été enregistré !`, `${cb.description}`)
        }
      },(error)=>{
        this.as.error(`Erreur lors de l'enregistrement`, `${JSON.stringify(doc)} n'as pu être enregistré !`)
      })
  }

  save = (doc:object) => {
    console.log('SAVE', doc)

    this.http.post(`${environment.backEnd.cr_doc}/create`,
    doc,{})
      .subscribe((v:any)=>{
        console.log('Callback post', v)
        this.newDoc.emit(v)
        this.as.success(`${v.name} à bien été enregistré`, `${v.description} est bien enregistré !`)

      },(error)=>{
        this.as.error('Erreur d\'enregistrement de la documentation', error.message)
      })



  }

  close(value: string) {
     this.closeEvent.emit(value);
   }
}
