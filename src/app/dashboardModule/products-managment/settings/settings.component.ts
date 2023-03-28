import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : "application/json"
  })

constructor(private http: HttpClient){

}

rebuildPrestashopSearchEngine:any = async () => {
      console.log('variable activation :');
      this.http.get<any>('https://etsleblanc.fr/ggh37uzgymaafwiv/index.php?controller=AdminSearch&action=searchCron&ajax=1&full=1&token=jzvClm3H&id_shop=1',
      { headers: this.headers})
        .subscribe(data => {
          console.log('Données souscrites : ',data);
        })
    }
}
