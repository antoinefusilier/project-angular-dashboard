import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Interval, intervalToDuration} from 'date-fns';

@Component({
  selector: 'app-current-sync',
  templateUrl: './current-sync.component.html',
  styleUrls: ['./current-sync.component.css']
})
export class CurrentSyncComponent {


  @Input('ngModel') syncLogs: Array<any> = [];

  constructor(private http: HttpClient){
    this.getCurrentSyncs()
  }


  justCurrent = () => {
    return this.syncLogs.filter(x=>
      x.status === 'En cours')
  }

  getCurrentSyncs = async () => {
    let inter = setInterval(()=>{
      this.http.post<any>(`${environment.backEnd.cr_divalto_sync}/sync-logs`,{ title: 'Test de connection à la base de donnée Divalto', updPresta: true},
    )
      .subscribe(data => {
        console.log('Données souscrites : ',data);
        this.syncLogs = data;
        // this.settings.loading = false;

      })
    }, 500)

      // console.log(this.callBackDivaltoSync);
  }

  arround = (number:number) => {
    // setTimeout(()=>{

      let cb = Math.round(number)
      return cb
    // }, 3000)
    // console.log(cb)
  }

  dateDiffer = (date1:number | Date,date2:number | Date) => {

    let inter: Interval = {start: new Date(date1),end: new Date(date2)}
    // let dur:any;

    // console.log(inter)
    let dur = intervalToDuration(inter)
    // console.log('durrrrationnnnn', dur);
    return dur
  }

}
