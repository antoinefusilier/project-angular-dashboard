import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-sync-logs',
  templateUrl: './sync-logs.component.html',
  styleUrls: ['./sync-logs.component.css']
})
export class SyncLogsComponent  {

  @Input('ngModel') callBackDivaltoSync: Array<any> = [];


  constructor(private http: HttpClient){
    this.testSyncLogs()
  }

  ngOnChange(){

  }

  testSyncLogs:any = async () => {

    this.http.post<any>('http://127.0.0.1:3007/divalto-sync/sync-logs',{ title: 'Test de connection à la base de donnée Divalto', updPresta: true},
    )
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDivaltoSync = data;
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
