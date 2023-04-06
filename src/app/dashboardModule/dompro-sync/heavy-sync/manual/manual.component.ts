import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AlertsService } from 'src/app/appServices/alerts.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent {

  currentDate = new Date();

  @Input('ngModel') filesDownloadLogs: Array<any> = [];

  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : "application/json"
  })
  constructor(private http: HttpClient,
    private alertService: AlertsService){

  }
  // [FR] Mehode de gestion des affichage des chargements
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
      && sync_loading
      && step1
      && step2
      && step3
      && step4){
      if (step === 1 && status === 1){
        sync_progress.style.transition = '25s';
        sync_progress.style.width = '37.5%'
        sync_loading.style.display = 'inline';

      } else if (step === 1 && status === 0){
        sync_progress.style.transition = '1s';
        sync_progress.style.width = '37.5%';
        sync_loading.style.display = 'none';
        sync_progress.classList.remove('background-animate');
        sync_progress.classList.remove('from-green-200');
        sync_progress.classList.remove(' via-green-100');
        sync_progress.classList.remove('to-green-500');

      } else if (step === 2 && status === 1){
        step2.className.replace('opacity-0', 'opacity-100')
        // step2.style.display = 'none';
        sync_progress.style.width = '37.5%'
        sync_progress.style.transition = '35s';
        sync_progress.style.width = '60%'
        sync_loading.style.display = 'inline';

      } else if (step === 2 && status === 0){
        sync_progress.style.transition = '1s';
        sync_progress.style.width = '60%';
        sync_loading.style.display = 'none';
        sync_progress.classList.remove('background-animate');
        sync_progress.classList.remove('from-green-200');
        sync_progress.classList.remove(' via-green-100');
        sync_progress.classList.remove('to-green-500');

      } else if (step === 3 && status === 1){
        sync_progress.style.transition = '35s';
        sync_progress.style.width = '85%'
        sync_loading.style.display = 'inline';

      } else if (step === 3 && status === 0){
        sync_progress.style.transition = '1s';
        sync_progress.style.width = '85%';
        sync_loading.style.display = 'none';
        sync_progress.classList.remove('background-animate');
        sync_progress.classList.remove('from-green-200');
        sync_progress.classList.remove(' via-green-100');
        sync_progress.classList.remove('to-green-500');

      }
    }
  }

  // [FR] ETAPE 1 - Téléchargement des fichiers du serveur sftp vers le backend
  domproGetFiles:any = async () => {

    this.syncProgressBarr(1,1);

    this.alertService.info('Lancement téléchargement', 'Début du téléchargement des fichiers du serveur dompro vers le backEnd...')

    let sync_progress = document.getElementById('sync-progress');
    if(sync_progress){
      sync_progress.style.transitionDelay = '2s';
      sync_progress.style.width = '37.5%'
    }

    this.http.post<any>('http://leblanc.sahirato.tech/dpro/sync/start',{ title: 'Test de la requete vers le backend'})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        // this.callBackDomproSync = data;
        // if (data){
        //   console.log('données reçues ... ')
        // }
        if (data[0].length > 0){
          this.alertService.success('Succès','Les fichiers ont bien été téléchargés avec succès')
          this.filesDownloadLogs = data;

          this.syncProgressBarr(1,0);

        }

      })
  }
  // [FR] ETAPE 2 - Lecture des fichiers csv et sauvegarde en base passerelle
  domproSaveFiles:any = async () => {

    this.syncProgressBarr(2,1);

    this.alertService.info('Lancement de sauvegarde', 'Sauvegarde des fichiers et données du backend en base de donnée...')

    this.http.post<any>('http://leblanc.sahirato.tech/dpro/readCSV/start',{ updPresta: false})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        // this.callBackDomproSync = data;
        // if (data){
        //   console.log('données reçues ... ')
        // }
        if (data[0].length > 0){
          this.alertService.success('Succès','Les fichiers ont bien été téléchargés avec succès')
          this.filesDownloadLogs = data;
          this.syncProgressBarr(2,0);
        }
      })
  }
  // [FR] ETAPE 3 - Mise à jour des ref_four,gencod,price,price,suppTaxes,qty,weight,multiple_vente,min_cart_qty de la base passerelle vers la base Prestadshop
  domproUpdPresta:any = async () => {
    // [EN] Update Sync progress
    this.syncProgressBarr(3,1);

    this.alertService.info('Lancement de sauvegarde', 'Sauvegarde des fichiers et données du backend en base de donnée...')

    let sync_progress = document.getElementById('sync-progress');
    if(sync_progress){
      sync_progress.style.transitionDelay = '2s';
      sync_progress.style.width = '75%'
    }

    this.http.post<any>('http://leblanc.sahirato.tech/dpro/updtdb/start',{ envDb: 'prod', lowStock: 2})
      .subscribe(async(data) => {
        console.log('Données souscrites : ',data);
        // this.callBackDomproSync = data;
        // if (data){
        //   console.log('données reçues ... ')
        // }
        if (data && data.syncId){
          setTimeout(async() => {
            console.log('Searching...', data.syncId);
            let progressSync = setInterval(async()=>{
            await this.getSyncLogById(data.syncId)
            .then((logRowL:any)=>{
              console.log('Log Row', logRowL)
                if(logRowL[0].status === 'FINISHED' || logRowL[0].status === 'SUCCESS'){
                  let issues = Number(logRowL[0].lines_received)-Number(logRowL[0].lines_received)
                  this.alertService.success('Succès',`La synchronisation est terminée.</br> Produits lues : ${logRowL[0].lines_received} </br>
                  Produits Mise à jour : ${logRowL[0].lines_received} </br>
                  Produits Manquants/Erreurs : ${issues} `)
                  this.syncProgressBarr(3,0);
                  this.stopInterval(progressSync);
                } else if (logRowL[0].status === 'IN_PROGRESS'){
                  let perCent = Math.ceil((Number(logRowL[0].lines_received)/Number(logRowL[0].lines_send)*100))
                  this.alertService.warn('En cours...', `La synchronisation est en cours, ${perCent}%`)
                } else {
                  this.alertService.error('Erreur inconnue', 'Erreur lors de la sychronisation')
                  this.stopInterval(progressSync);

                }
              })
              .catch((err:any)=>{
                console.error(err)
              })
            },5000)
          this.filesDownloadLogs = data;
          }, 10000);

        }
      })
  }
  protected stopInterval = async(
    interval:any
  )=>{
    clearInterval(interval)
  }
  protected getSyncLogById = async (
    syncId:string
    ) => {
    return new Promise((resolve, reject)=>{
      this.http.post<any>('http://leblanc.sahirato.tech/dpro/updtdb/status',
      {
        syncId: String(syncId),
      },
    )
      .subscribe((data:any) => {
        if (data){
          resolve(data)
        }
      })
    })
  }
}
