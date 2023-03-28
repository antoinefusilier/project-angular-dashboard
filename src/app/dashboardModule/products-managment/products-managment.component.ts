import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-managment',
  templateUrl: './products-managment.component.html',
  styleUrls: ['./products-managment.component.css']
})
export class ProductsManagmentComponent {


  constructor (private http: HttpClient) {

  }
}