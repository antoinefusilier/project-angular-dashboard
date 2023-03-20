import { Component,Input, OnChanges, OnDestroy, SimpleChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alert } from 'src/app/appServices/alert.model';
import { AlertsService } from 'src/app/appServices/alerts.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy{
  @Input() id = 'default-alert';
  @Input() alertInputData = {};
  @Input() face = true;

  alerts: Alert[] = [];
  alertSubscription!: Subscription;

  constructor(private _alertService: AlertsService){}
  // ngOnChanges(changes: SimpleChanges){
    // changes.alertInputData
  // }

  ngOnInit(): void {
      this.alertSubscription = this._alertService.onAlert(this.id)
        .subscribe(alert => {
          if(!alert.message){
            console.log('pas d\'alert');
          }

          this.alerts.push(alert);

          console.log(alert.id);
          console.log(alert.type);
          console.log(alert.message);

        })
  }

  removeAlert(alert: Alert) {
    // check if already removed to prevent error on auto close
    // if (!this.alerts.includes(alert)) return;

    // fade out alert if this.fade === true
    // const timeout = this.fade ? 250 : 0;
    // alert.fade = this.fade;
    if (alert.id){
      let alertDOM = document.getElementById('default-alert');
      if(alertDOM){
        alertDOM.style.display = 'none';
      }
    }


    setTimeout(() => {
        // filter alert out of array
        this.alerts = this.alerts.filter(x => x !== alert);
    }, 200);
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
  }

  test1 = () =>{

  }
}
