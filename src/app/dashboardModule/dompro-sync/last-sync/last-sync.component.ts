import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-last-sync',
  templateUrl: './last-sync.component.html',
  styleUrls: ['./last-sync.component.css']
})
export class LastSyncComponent {

  @Input('ngModel') callBackDomproSync: Array<any> = [];

  constructor(private http: HttpClient){
    this.testSyncLogs()
  }

  testSyncLogs = async () => {

    this.http.post<any>('http://leblanc.sahirato.tech/dpro/sync/logs',
      {
        orderBy: '',
        limit: 100,
        offset: 0
      }
    )
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.callBackDomproSync = data;
      })
      console.log(this.callBackDomproSync);
  }
  getSyncLogById = async (
    syncId:string
    ) => {
    return new Promise((resolve, reject)=>{
      this.http.post<any>('http://leblanc.sahirato.tech/dpro/sync/logs',
      {
        syncId: syncId,
      }
    )
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        if (data){
          resolve(data)
        }

      })
    })
  }

}
