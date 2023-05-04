import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { error } from 'jquery';
import { AlertsService } from 'src/app/appServices/alerts.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent {

  @Input() docToDelete: any;
  // @Output() deleted = new EventEmitter<string | boolean>();
  @Output() closeEvent = new EventEmitter<string>();
  constructor(private http: HttpClient, private as: AlertsService){

  }
  close(value: string) {
    this.closeEvent.emit(value);
  }
  // close(value: string) {
  //   this.deleted.emit('delete');
  // }
  deleteDoc = (id:string, confirm:boolean)=>{
    if(confirm === true){

      console.log('Deleting ',this.docToDelete)
      this.http.delete(`${environment.backEnd.cr_doc}/delete/${id}`)
      .subscribe((callback:any)=>{
        if(callback === true){
        //  this.deleted.emit('delete');
          this.as.success('Doc supprimé', 'Cette documentation à bien été supprimée')
          //  this.deleted.emit('delete');
          this.close('delete')
        }
      }, (error)=>{
        this.as.error('Erreur lors de la suppression', 'Une erreur est apparue lors de la suppression de cette documentation :: '+error)
        //  this.deleted.emit('delete');

      })
    }
  }
}
