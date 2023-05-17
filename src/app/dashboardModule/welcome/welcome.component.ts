import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  active_presta_upd_price_qty=true;
  title = 'angular_app';

  callBackDomproSync:any;

  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : ["application/json", "application/xml"],
      "AccessControlAllowOrigin": "*"
  })

  constructor(private http: HttpClient){

  }

  testPostApi = () => {
    this.http.post<any>('http://127.0.0.1:3007/dompro_sftp_sync/api/test2/angular',
      { title: 'Test de la requete vers le backend'},
      { headers: this.headers})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      })
  }
  testCallApi:any = async () => {
    console.log(`action testCallApi`);
    this.http.get<any>('http://127.0.0.1:3007/dompro_sftp_sync/api/test/angular',{headers: this.headers})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      },
      err => {
        console.log('erreur', err);
      }
      )
  }

}
