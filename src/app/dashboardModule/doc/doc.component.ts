import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/appServices/alerts.service';
// import { environment } from 'src/environments/environment.development';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  testId = '64525f11dd82267d2c4a7623';
  selectedId:any;
  @Input() openForm = false;
  @Input() openDelete = false;
  @Input() openPreview = false;
  @Input() openOptions = false;
  @Input() openSearch = false;

  @Input() currentForm:any | undefined;

  @Input('ngModel') docList: Array<any> = [];

  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : ["application/json", "application/xml"],
    "Access-Control-Allow-Origin": "*"
  })
  constructor(private http: HttpClient,
    private AS: AlertsService){
      this.listDocs()
  }

  newDoc = (doc:object ) => {
    // Unset currentForm
    console.log('We saving new Doc :', doc)
    this.currentForm  = {}

    if (this.openForm === false){
      this.openForm = true;
    }

    if(doc){

    }
  }



  updateDoc = (id:string) => {
    this.getById(id)
    this.openForm = true
  }
  closePart(part: string) {
    if(part === 'delete'){
      this.openDelete = false;
      this.listDocs()

    } else if (part === 'form'){
      this.openForm = false;
      this.listDocs()

    } else if (part === 'preview'){
      this.openPreview = false;
    } else if (part === 'search'){
      this.openSearch = false;
    }
    // this.items.push(newItem);
  }
  listDocs = async () =>{
    this.http.get(`${environment.backEnd.cr_doc}/list`, {headers: this.headers})
    .subscribe((value:any)=>{
      // console.log(value)

      if(value.length > 0){
        this.docList = value
        // this.currentForm = this.docList[0];
      } else {
        this.docList = [{
          id: '1',
          goup: 'Aucun group',
          category: 'Aucune catégorie',
          team: 'Aucune équipe',
          type: 'Aucun type',
          name: 'Nom indéfini...',
          questions: ['Question 1 ... vide ?', 'Question 2 ... vide ?', 'Question 3 ... vide ?'],
          description: 'Pas de description',
          response: 'Pas de ressources ni de document...',
          link: 'Pas d\'URL',
          iframe: 'Pas d\'iframe',
          imageURL: 'Pas d\'URL',
          videoURL: 'Pas d\'URL'
        }]
      }

      console.log(this.docList)
    }, (error)=>{
      if (error) {
        console.error(error)
      }
    })
  }
  getById =async(id:string)=>{
    this.http.get(`${environment.backEnd.cr_doc}/doc/${id}`, {headers: this.headers})
    .subscribe((value:any)=>{
      // console.log(value)
      this.currentForm = value
      // this.docList = [value]
      let inter = setInterval(()=>{

        this.openPreview = true
      }, 2000)
      clearInterval(inter);
      console.log(value)
      console.log(this.docList)
      console.log(this.currentForm)

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
