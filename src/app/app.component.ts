import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular_app';

  callBackDomproSync:any;

  alertDataTest = {
    title: "test title",
    description: 'Test description...'
  }

  constructor(private http: HttpClient){
    console.log(`Composant app initialized`);
  }
  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : "application/json"
  })

  pushInputData = () => {
    let callBack = {
      title:"test title"
    }
    return callBack;
  }

  testGetApi = async () => {
    this.http.post<any>('http://127.0.0.1:3007/api/test/angular',
      JSON.stringify({ "title": "Test de la requete vers le backend"}),
      { headers: this.headers})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      })
  }
  testPostApi = async () => {
    this.http.post<any>('http://127.0.0.1:3007/api/test/angular',
      JSON.stringify({ "title": "Test de la requete vers le backend"}),
      { headers: this.headers})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      })
  }

  // Méthode de test de lancement de la synchronisation des données depuis le serveur node
  testDomproSftpSync:any = async () => {
    this.http.post<any>('http://127.0.0.1:3007/dompro_sftp_sync/sync/start',{ title: 'Test de la requete vers le backend'})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      })
  }
}
