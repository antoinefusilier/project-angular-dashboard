import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
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
    "Accept" : ["application/json", "application/xml"],
    "Access-Control-Allow-Origin": "*"
  })

  params = new HttpParams();

  callBackDomproSync:any;

  constructor (private http: HttpClient) {
    this.params.set('tokenId', 'testidtoken2123')
  }
  options = {
    headers: this.headers,
    params: {
      tokenid: 'test'
    },
    withCredential: false
  }

  // Méthode de requete API vers Node server pour tester la connection à la base sql server de Divalo
  testSqlServDivaltoConnect:any = async () => {
    console.log('variable activation :', this.active_presta_upd_price_qty);
    this.http.post<any>('http://127.0.0.1:3007/dompro-sync/sqlserver/test',{ title: 'Test de connection à la base de donnée Divalto', updPresta: true},
    this.options)
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      })
  }
}
