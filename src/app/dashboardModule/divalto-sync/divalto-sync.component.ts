import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-divalto-sync',
  templateUrl: './divalto-sync.component.html',
  styleUrls: ['./divalto-sync.component.css']
})
export class DivaltoSyncComponent {
  active_presta_upd_price_qty=true;
  title = 'angular_app';
  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : "application/json"
  })
  callBackDomproSync:any;

  constructor (private http: HttpClient) {

  }
  // Méthode de requete API vers Node server pour tester la connection à la base sql server de Divalo
  testSqlServDivaltoConnect:any = async () => {
    console.log('variable activation :', this.active_presta_upd_price_qty);
    this.http.post<any>('http://127.0.0.1:3007/dompro-sync/sqlserver/test',{ title: 'Test de connection à la base de donnée Divalto', updPresta: true},
    { headers: this.headers})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      })
  }
}
