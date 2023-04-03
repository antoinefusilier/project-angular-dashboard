import { Component, AfterViewInit, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  ActivatedRoute
} from '@angular/router'
import { AlertsService } from './appServices/alerts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public showOverlay: any | boolean = true;
  viewInit = false;
  title = 'angular_app';
  @Input('ngModel') message:any = {
    title: 'Chargement...',
    description: 'Merci de bien vouloir patientez ...'
  };

  callBackDomproSync:any;

  alertDataTest = {
    title: "test title",
    description: 'Test description...'
  }

  constructor(
    private http: HttpClient,
    private router:Router,
    private route: ActivatedRoute,
    private alertService: AlertsService){
    console.log(`Composant app initialized`);
    router.events.subscribe((event: RouterEvent)=>{
      this.navigationInterceptor(event);
    })
  }

  ngOnInit() {
      const error = this.route.snapshot.queryParamMap.get('error')
      console.log('Error handler',error)
      if (error && error === 'ERR_CONNECTION_REFUSED'){

        this.alertService.error('Serveur déconnecté', 'Le serveur distant de l\'application (backend), ne répond plus... Si le problème persiste veuillez-vous rapporcher d\'un administrateur.')
        this.message = {
          title: 'En attente de réponse du serveur',
          description: 'Nous sommes désolé pour la gène occasionnée'
        }
      }
    }

 navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = true;
    }
  }
  // ngAfterViewInit(): void {
  //     this.viewInit = true
  // }

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
