import { HttpClient,HttpHeaders } from '@angular/common/http';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dompro-sync',
  templateUrl: './dompro-sync.component.html',
  styleUrls: ['./dompro-sync.component.css']
})
export class DomproSyncComponent {
  active_presta_upd_price_qty=true;
  callBackDomproSync: any;

  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : "application/json"
  })
  constructor (private http: HttpClient) {

  }
  leblancDomproAndDivaltoToPrestashop:any = async () => {
    console.log('variable activation :', this.active_presta_upd_price_qty);
    this.http.post<any>('http://127.0.0.1:3007/dompro_sftp_sync/readCSV/start',{ title: 'Synchronisation des fichiers csv vers Prestashop et base de backup', updPresta: this.active_presta_upd_price_qty},
    { headers: this.headers})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      })
  }

  domproGetFiles:any = async () => {
    this.http.post<any>('http://127.0.0.1:3007/dompro_sftp_sync/sync/start',{ title: 'Test de la requete vers le backend'})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
        if (data){
          console.log('données reçues ... ')
        }
      })
  }

}
