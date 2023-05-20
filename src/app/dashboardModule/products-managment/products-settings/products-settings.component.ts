import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './products-settings.component.html',
  styleUrls: ['./products-settings.component.css']
})
export class ProductsSettingsComponent {
  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : ["application/json", "application/xml"],
    "Access-Control-Allow-Origin": "*"
  })

  constructor(private http: HttpClient){

  }

  rebuildPrestashopSearchEngine = async () => {
        console.log('variable activation :');
        this.http.get<any>('https://etsleblanc.fr/ggh37uzgymaafwiv/index.php?controller=AdminSearch&action=searchCron&ajax=1&full=1&token=jzvClm3H&id_shop=1',
        { headers: this.headers})
          .subscribe(data => {
            console.log('Données souscrites : ',data);
          })
      }

  resetAttributes = async () => {
    console.log('variable activation :');
    this.http.patch<any>(`${environment.backEnd.cr_product}/settings`,
    { reset: 'attributes'},{ headers: this.headers})
      .subscribe(data => {
        console.log('Données souscrites : ',data);
      }, (error)=>{
        console.error('Erreur lors de la réinitialisation des attributs produits')
      })
  }
}
