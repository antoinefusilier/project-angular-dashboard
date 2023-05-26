import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, Input} from '@angular/core';
import { environment } from 'src/environments/environment';
import {Interval, intervalToDuration} from 'date-fns';

@Component({
  selector: 'app-sync-logs',
  templateUrl: './sync-logs.component.html',
  styleUrls: ['./sync-logs.component.css']
})
export class SyncLogsComponent  {

  @Input('ngModel') callBackDivaltoSync: Array<any> = [];


  protected settings = {
    loading : true
  }

  constructor(private http: HttpClient){
    this.testSyncLogs()
  }

  ngOnChange(){

  }
  startSync = () => {
    this.http.post<any>(`${environment.backEnd.cr_divalto_sync}/sync-logs`,{ title: 'Test de connection à la base de donnée Divalto', updPresta: true},
    )
      .subscribe(data => {
        console.log('Données souscrites : ',data);
      })

  }

  dateDiffer = (date1:number | Date,date2:number | Date) => {

    let inter: Interval = {start: new Date(date1),end: new Date(date2)}
    // let dur:any;

    console.log(inter)
    let dur = intervalToDuration(inter)
    console.log('durrrrationnnnn', dur);
    return dur
  }

  testSyncLogs:any = async () => {

    this.settings.loading = true;

    this.http.post<any>(`${environment.backEnd.cr_divalto_sync}/sync-logs`,{ title: 'Test de connection à la base de donnée Divalto', updPresta: true},
    )
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDivaltoSync = data;
        this.settings.loading = false;

      })
      console.log(this.callBackDivaltoSync);
  }
  testBridgeProductRef:any = async () => {

    this.http.post<any>('http://127.0.0.1:3007/divalto-sync/product_bridge',{ title: 'Test de connection à la base de donnée Divalto', updPresta: true},
    )
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDivaltoSync = data;
      })
      console.log(this.callBackDivaltoSync);
  }
}
