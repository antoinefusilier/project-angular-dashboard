import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AlertsService } from 'src/app/appServices/alerts.service';

@Component({
  selector: 'app-heavy-sync',
  templateUrl: './heavy-sync.component.html',
  styleUrls: ['./heavy-sync.component.css']
})
export class HeavySyncComponent {

  @Input('ngModel') filesDownloadLogs: Array<any> = [];

  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : "application/json"
  })
  constructor(private http: HttpClient,
    private alertService: AlertsService){

  }

  domproGetFiles:any = async () => {
    this.alertService.info('Lancement téléchargement', 'Début du téléchargement des fichiers du serveur dompro vers le backEnd...')
    this.http.post<any>('http://127.0.0.1:3007/dompro-sync/sync/start',{ title: 'Test de la requete vers le backend'})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        // this.callBackDomproSync = data;
        // if (data){
        //   console.log('données reçues ... ')
        // }
        if (data[0].length > 0)
        this.alertService.success('Succès','Les fichiers ont bien été téléchargés avec succès')
        this.filesDownloadLogs = data;
      })
  }

  startSync = () => {
    this.http.post('http://127.0.0.1/dompro-sync/start', {title: 'Test synchronisation'}, )
  }

}
