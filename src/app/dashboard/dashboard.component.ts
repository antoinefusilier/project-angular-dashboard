import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  active_presta_upd_price_qty=true;
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
  // Methode de test des differents resultat possible pour la définition mode de récupération des données en format json, la dernière récupération ayant été un succes pour plusieurs fois...

  // Alors la dernière fois
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

  pushToHostingerCon:any = async () => {
    console.log(`appel de la methode pushToHostingerCon`);
    try {
      console.log(`trying`);
      this.http.post<any>('http://127.0.0.1:3007/dompro_sftp_sync/sync/remote_child', {})
      .subscribe(data => {
        console.log('Donnée souscrite', data);
      })
    } catch(err) {
      if (err) throw err;
    }

  }

  // Méthode de test de lancement de la synchronisation des données depuis le serveur node
  testDomproSftpSync:any = async () => {
    this.http.post<any>('http://127.0.0.1:3007/dompro_sftp_sync/sync/start',{ title: 'Synchronisation des fichiers csv vers Prestashop et base de backup'},
    { headers: this.headers})
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
 
  // _________________________________________________
  // Méthode de requete API vers Node server pour tester la connection à la base sql server de Divalo
  testSqlServDivaltoConnect:any = async () => {
    console.log('variable activation :', this.active_presta_upd_price_qty);
    this.http.post<any>('http://127.0.0.1:3007/dompro_sftp_sync/sqlserver/test',{ title: 'Test de connection à la base de donnée Divalto', updPresta: true},
    { headers: this.headers})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      })
  }


}
