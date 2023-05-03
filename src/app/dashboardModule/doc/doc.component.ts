import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/appServices/alerts.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  openForm = true;

  @Input('ng-model') currentForm: any = {
    id: null,
    goup: 'Google',
    category: 'Doc',
    team: 'Admin',
    type: 'Google Admin',
    name: 'Gestion des utilisateur dans Google Admin',
    questions: ['Comment supprimer un utilisateur Google ?', 'Comment ajouter un utilisateur google ?', 'Comment modifier un utilisateur google ?'],
    description: 'Protocoles de gestion des utilisateur Google de l\'entreprise',
    response: 'Voir document et ressources...',
    link: '',
    iframe: '',
    imageURL: 'files.etsleblanc.com/doc/image/base/no_picture.jpg',
    videoURL: ''
  };

  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : "application/json"
  })

  @Input('ngModel') docList: Array<any> = [];

  constructor(private http: HttpClient,
    private AS: AlertsService){
      this.listDocs()
  }
  listDocs = async () =>{
    this.http.get(`${environment.backEnd.cr_doc}/list`, {headers: this.headers})
    .subscribe((value:any)=>{
      // console.log(value)
      this.docList = value
      console.log(this.docList)
    }, (error)=>{
      if (error) {
        console.error(error)
      }
    })
  }
  getById =async(id:string)=>{
    this.http.get(`${environment.backEnd.cr_doc}/:id`, {headers: this.headers, params: {
      id: id
    }})
    .subscribe((value:any)=>{
      // console.log(value)
      this.docList = value
      console.log(this.docList)
    }, (error)=>{
      if (error) {
        console.error(error)
      }
    })
  }
  ngOnInit() {
    this.listDocs();
  }



}
