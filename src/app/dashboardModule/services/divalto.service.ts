import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertsService } from 'src/app/appServices/alerts.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DivaltoService {

  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : ["application/json", "application/xml"],
    "Access-Control-Allow-Origin": "*"
  })


  constructor(private http: HttpClient, private as: AlertsService) {

  }

  startSync = async(
    trunc: boolean,
    sections: Array<any>,
    cmsDbEnv: string,
    updtCMSDb: string
  ) => {

    this.http.post(`${environment.backEnd.cr_divalto_sync}/productToBridge`,
      {
        bridgeSection: sections,
        clear: trunc,
        cms: updtCMSDb,
        envDb: cmsDbEnv
      }, {headers: this.headers}).subscribe((v:any)=>{
        console.log('Callback update bridge data', v);
      }, (error)=>{
        this.as.error(`Erreur lors de la mise à jour passerelle`,`Une erreur est survenue lors de la mise à jour des données en base passerelle`)
        console.error(error)
      })

  }
}
