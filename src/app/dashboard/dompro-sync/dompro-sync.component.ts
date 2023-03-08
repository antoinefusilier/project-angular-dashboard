import { HttpClient,HttpHeaders } from '@angular/common/http';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component,ViewChild,AfterViewChecked, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChildDirective, ResultComponent } from './result/result.component';


@Component({
  selector: 'app-dompro-sync',
  templateUrl: './dompro-sync.component.html',
  styleUrls: ['./dompro-sync.component.css']
})
export class DomproSyncComponent implements AfterViewChecked, AfterViewInit {
  active_presta_upd_price_qty=true;
  callBackDomproSync: Observable<any> = new Observable();
  // @ViewChild(ResultComponent) viewChildren!: ResultComponent

  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : "application/json"
  })
  constructor (private http: HttpClient) {

  }

  ngAfterViewInit(): void {
    console.log(`AfterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`AfterViewChecked`);
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
    this.callBackDomproSync = this.http.post<any>('http://127.0.0.1:3007/dompro_sftp_sync/sync/start',{ title: 'Test de la requete vers le backend'})
      // .subscribe(data => {
      //   console.log('Données souscrites : ',data);
      //   // this.callBackDomproSync = data;
      //   if (data){
      //     console.log('données reçues ... ')
      //   }
      // })
  }

  hostingerTestFtp: any = async () => {
    this.http.post<any>('http://127.0.0.1:3007/dompro_sftp_sync/ftp/test_hostinger',{ title: 'Test de connection au serveur de fichier'}, { headers: this.headers})
    .subscribe(data => {
      console.log(`Retour de l'appel api hostingerTestFtp ${data}`);
    })
  }

}
