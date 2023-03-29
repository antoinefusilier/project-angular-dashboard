import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements AfterViewInit {



  ngAfterViewInit(): void {
    let loader = document.getElementById('loader')
    if(loader){
      loader.style.display = 'none'
    }
  }
}
