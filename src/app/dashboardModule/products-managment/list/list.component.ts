import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AlertsService } from 'src/app/appServices/alerts.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input('ngModel') products: Array<any> = [];

  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : "application/json"
  })
  constructor(
    private http: HttpClient,
    private as: AlertsService
    ){
      this.getProductsByDbPresta()
  }

  getProductsByDbPresta = () => {
    this.http.get(`${environment.backEnd.cr_product}/get/${0}/${10}`,{})
      .subscribe((v:any)=>{
        console.log(v)
        this.products = v;
      },(error)=>{
        this.as.error('Erreur aucun produit', 'Erreur lors de la récupération des produits :(...')
        console.error(error)
      })
  }

  getPrestaProductsByAPI = () => {
    this.http.post(`${environment.backEnd.cr_product}/get`, {
      all: true,
      orderBy: '',
      orderType: '',
      offset: 0,
      limit: 10,
      name: ''
    },{headers: this.headers})
    .subscribe((v:any)=>{
      v.forEach((e:any) => {
        e[71].elements[1].elements[0].attributes = String(Object.values(e[71].elements[1].elements[0].attributes)[0]).replace('etsleblanc.fr', 'ALXVADHMPDK9ZZXL46AHEP74UTZ8LNX5@etsleblanc.fr');

        // console.log(Object.values(e[71].elements[1].elements[0].attributes)[0])

        console.log(e[71].elements[1].elements[0].attributes)
      });
      console.log('123132',v[8][71].elements[1].elements[0].attributes)
      this.products = v;
      console.log(this.products);
    },(error:any)=>{
      console.error(error)
    })
  }

}
