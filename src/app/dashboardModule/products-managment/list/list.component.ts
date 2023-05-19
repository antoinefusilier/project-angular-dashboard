import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { type } from 'jquery';
import { AlertsService } from 'src/app/appServices/alerts.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input('ngModel') products: Array<any> = [];
  @Input() lang:string = 'fr';
  @Input() api_mode: boolean = false;
  @Input() nbrProductPerPage: number = 100;
  @Input() page: number = 1;
  @Input() sortBy: string = 'any';


  @Input('ngModel') settings :any = {
    productsPerPage : 10,
    page: 1,
    api: false,
    lang: 'fr',
    sortBy: 'any',
    searchBy: 'mRef',
    moduleRef: null,

    moduleName: null,

  }



  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : ["application/json", "application/xml"],
    "Access-Control-Allow-Origin": "*"
  })
  constructor(
    private http: HttpClient,
    private as: AlertsService
    ){
      this.getProducts()
  }
  modelChangeFn(e:any, typeForm:string) {
    if(typeForm === 'searchModuleRef'){

      this.settings.moduleRef = e;

    } else if (typeForm === 'searchModuleName') {
      this.settings.moduleRef = null;
      this.settings.moduleName = e;
    } else if (typeForm === 'perPage'){
      if(e.length > 1){
        this.settings.productsPerPage = e;

      }

    } else if (typeForm === 'searchBy'){
      this.settings.searchBy = e;
    }
    this.getProducts()

  }

  updateProduct = (prod:any) => {
    console.log(`Updating this product ... ${prod}`)
    this.http.patch(`${environment.backEnd.cr_product}/update`,prod, {headers: this.headers})
    .subscribe((v:any)=>{
      console.log(`Retour de la mise à jour du produit ${prod.product.id_product}`)
      console.log(v)
    },(error)=>{
      this.as.error('Erreur lors de la mise à jour', `Erreur lors de l'enregistrement des modifications apportées au produict ${prod.product.id_product}`)
      console.error(error)
    })
  }

  prodPerPage = () => {
    // let selected = document.getElementById('selectPerPage')
    // if(selected){
    //   console.log(selected.CDATA_SECTION_NODE.valueOf(selected))
    // }
    console.log(this.settings.productPerPage)
  }

  setProd = (prod:any, settings: object) =>{
    return Object.assign(prod, {settings: settings})
  }

  apiMode = () => {
    let api_btn = document.getElementById('api_mode_btn');
    let api_switch = document.getElementById('api_mode_switch');
    let api_uncheck = document.getElementById('api_mode_uncheck');
    let api_checked = document.getElementById('api_mode_checked');

    if(this.settings.api === false){
      if(api_switch && api_uncheck && api_checked && api_btn){
        this.settings.api = true;
        console.log(this.settings.api)
        api_switch.classList.replace('translate-x-0', 'translate-x-5')

        api_uncheck.classList.replace('opacity-100','opacity-0' )
        api_uncheck.classList.replace('ease-in','ease-out')

        api_checked.classList.replace('opacity-0', 'opacity-100')
        api_checked.classList.replace('ease-out', 'ease-in')

        api_btn.classList.replace('bg-gray-200', 'bg-green-200')


      }
    } else if (this.settings.api === true){
      if(api_switch && api_uncheck && api_checked && api_btn){
        this.settings.api = false;
        console.log(this.settings.api)
        api_switch.classList.replace('translate-x-5', 'translate-x-0')
        api_uncheck.classList.replace('opacity-0', 'opacity-100')
        api_uncheck.classList.replace('ease-out', 'ease-in')

        api_checked.classList.replace('opacity-100','opacity-0' )
        api_checked.classList.replace('ease-in','ease-out')

        api_btn.classList.replace('bg-green-200','bg-gray-200')


      }
    }
  }

  filter = (page:number) =>{
    console.log('Parsing page '+this.page+ 'to'+ page )
  }

  getProducts = () => {

    console.log('Research :', this.settings)

    this.http.get(`${environment.backEnd.cr_product}/get/${this.settings.lang}/${0 + ((this.settings.page-1)*this.settings.productsPerPage)}/${this.settings.productsPerPage * this.settings.page}/${this.settings.api}/${this.settings.moduleRef}/${this.settings.moduleName}`,{})
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
