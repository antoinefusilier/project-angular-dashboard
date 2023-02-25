import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  title = 'angular_app';
  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : "application/json"
  })
  callBackDomproSync:any;

  constructor(private http: HttpClient){
    console.log(`Composant app initialized`);
  }
  testGetApi = () => {
    this.http.get<undefined>('http://127.0.0.1:3007/dompro_sftp_sync/api/test/angular',
      { headers: this.headers})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      })
  }
  testPostApi = () => {
    this.http.post<undefined>('http://127.0.0.1:3007/dompro_sftp_sync/api/test/angular',
      JSON.stringify({ "title": "Test de la requete vers le backend"}),
      { headers: this.headers})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      })
  }
  testCallApi:any = async () => {
    console.log(`action testCallApi`);
    this.http.post<any>('http://127.0.0.1:3007/dompro_sftp_sync/api/test/angular',{ title: 'Test de la requete vers le backend'})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      },
      err => {
        console.log('erreur', err);
      }
      )
  }

  // Méthode de test de lancement de la synchronisation des données depuis le serveur node
  testDomproSftpSync:any = async () => {
    this.http.post<any>('http://127.0.0.1:3007/dompro_sftp_sync/sync/start',{ title: 'Test de la requete vers le backend'})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      })
  }

  //
  domproListFolder:any = async () => {
    this.http.post<any>('http://127.0.0.1:3007/dompro_sftp_sync/sync/start',{ title: 'Test de la requete vers le backend'})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      })
  }
}
