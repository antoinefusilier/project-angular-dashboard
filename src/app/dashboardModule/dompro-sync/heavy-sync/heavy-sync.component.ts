import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AlertsService } from 'src/app/appServices/alerts.service';

@Component({
  selector: 'app-heavy-sync',
  templateUrl: './heavy-sync.component.html',
  styleUrls: ['./heavy-sync.component.css']
})
export class HeavySyncComponent {

  currentDate = new Date();

  @Input('ngModel') filesDownloadLogs: Array<any> = [[['/path/to/file',this.currentDate,'STATUS', 'DESCRIPTION'],['/path/to/file',this.currentDate,'STATUS', 'DESCRIPTION']]];

  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : "application/json"
  })
  constructor(private http: HttpClient,
    private alertService: AlertsService){

  }
  syncProgressBarr = async (
    step:number,
    status: number
  ) => {
    let sync_progress = document.getElementById('sync-progress');
    let sync_loading = document.getElementById('sync-loading');

    let step1 = document.getElementById('step1');
    let step2 = document.getElementById('step2');
    let step3 = document.getElementById('step3');
    let step4 = document.getElementById('step4');

    if(sync_progress
      && sync_loading){
      if (step === 1 && status === 1){
        sync_progress.style.transition = '25s';
        sync_progress.style.width = '37.5%'
        sync_loading.style.display = 'inline';

      } else if (step === 1 && status === 0){
        sync_progress.style.transition = '0s';
        sync_progress.style.width = '37.5%';
        sync_loading.style.display = 'none';
        sync_progress.classList.remove('background-animate');
        sync_progress.classList.remove('from-green-200');
        sync_progress.classList.remove(' via-green-100');
        sync_progress.classList.remove('to-green-500');

      }
    }
  }

  domproGetFiles:any = async () => {

    this.alertService.info('Lancement téléchargement', 'Début du téléchargement des fichiers du serveur dompro vers le backEnd...')

    let sync_progress = document.getElementById('sync-progress');
    if(sync_progress){
      sync_progress.style.transitionDelay = '2s';
      sync_progress.style.width = '37.5%'
    }

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
